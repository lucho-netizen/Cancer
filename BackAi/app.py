from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# URL del servidor Rasa
urls = "http://localhost:5005/webhooks/rest/webhook"

class Message(BaseModel):
    sender: str
    message: str

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/chat")
async def chat(message: Message):
    async with httpx.AsyncClient() as client:
        response = await client.post(
            urls,
            json={"sender": message.sender, "message": message.message}
        )
        if response.status_code == 200:
            return response.json()
        else:
            raise HTTPException(status_code=response.status_code, detail="Error al conectar con el servidor Rasa")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
