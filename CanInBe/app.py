# from pandas import pd as pd
from datetime import datetime

from fastapi import Depends, FastAPI, HTTPException, Request, Form
from config.db_config import get_db_connection
from models.user_model import User, Login, add_user
from fastapi.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles

from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, FileResponse, JSONResponse, RedirectResponse
# import request

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")




@app.get("/", response_class=HTMLResponse)
def index():
    html_address = "./templates/public/index.html"
    return FileResponse(html_address, status_code=200)


# Login user
@app.get("/login_user", response_class=HTMLResponse)
def login_user():
    html_address = "./templates/login/login.html"
    return FileResponse(html_address, status_code=200)


# add_user_router
@app.get("/add_user_r", response_class=HTMLResponse)
def add_user_r():
    html_address = "./templates/register/register.html"
    return FileResponse(html_address, status_code=200)


# Información
@app.get("/informacion", response_class=HTMLResponse)
def informacion():
    html_address = "./templates/user/informacion.html"
    return FileResponse(html_address, status_code=200)





@app.post("/index")
async def index(request: Request, correo: str = Form(...), password: str = Form(...)):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM usuario WHERE correo = %s AND password = %s", (correo, password))
        user = cursor.fetchone()

    
        if user:
            # Lógica para almacenar datos en sesión (puedes adaptar esto según tus necesidades)
            return {"message": "Usuario encontrado"}
        else:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
    except Exception as e:
        print("error", e)

# Add_user

@app.post('/register')  # Registro
async def register(request: Request,
                   nombre: str = Form(...),
                   apellido: str = Form(...),
                   tipo_documento: str = Form(...),
                   celular: int = Form(...),
                   identificacion: int = Form(...),
                   edad: int = Form(...),
                   peso: int = Form(...),
                   correo: str = Form(...),
                   password: str = Form(...),
                   # ID del rol con un valor predeterminado de 1
                   estado: int = Form(1), 
                   id_role: int = Form(1)):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("""SELECT * FROM usuario WHERE correo = %s""",
                       (correo,))  # Comprobar si exite el usuario
        user = cursor.fetchone()
        if user:
            msg = 'usuario existente'
            return JSONResponse(content={"msg": msg})

        else:

          fecha = datetime.now().strftime("%Y-%m-%d %H:%M:%S")


          print(fecha)

          cursor.execute("""INSERT INTO usuario (nombre, apellido, 
                               tipo_documento, celular, identificacion,
                               edad, peso, correo, password, id_role, fecha, estado) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""",
                           (nombre, apellido, tipo_documento, celular,
                            identificacion, edad, peso, correo, password, id_role, fecha, estado))

          conn.commit()
          html_address = "./templates/user/informacion.html"
          return FileResponse(html_address, status_code=200)

    except Exception as e:
        # Manejar errores aquí
        return JSONResponse(content={"error": str(e)}, status_code=500)

    finally:
        conn.close()
        cursor.close()


@app.get('/ai')
async def ai():
    address_ai = "./templates/ai/index.html"
    return FileResponse(address_ai, status_code=200)


# #Prediction case
# Commentado por prueba.

# from sklearn.model_selection import train_test_split
# from sklearn.neighbors import KNeighborsClassifier
# from sklearn import datasets
# from sklearn import metrics


# @app.post()
# async def predicction(pecho(Form(...), dolor(form(...),))):

#     file_path = 'breast-cancer.data'
#     df = pd.read_csv(file_path)
#     df.info()
#     df['edad'].unique()
#     df.head(10)
#     df['edad'].unique()
#     # Cargar un conjunto de datos de ejemplo, por ejemplo, el conjunto de datos de iris
#     df.head(10)

#     X = df.iloc[:, :-1]
#     y = df.iloc[:, -1]
#     # Dividir el conjunto de datos en conjuntos de entrenamiento y prueba
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42)

#     # Crear un clasificador k-NN con, por ejemplo, k=3
#     knn = KNeighborsClassifier(n_neighbors=2)
#     # Ajustar el modelo con los datos de entrenamiento
#     knn.fit(X_train, y_train)
#     # Realizar predicciones en el conjunto de prueba
#     y_pred = knn.predict(X_test)

#     # Evaluar la precisión del modelo
#     accuracy = metrics.accuracy_score(y_test, y_pred)
#     print(f'Precisión del modelo: {accuracy}')
#     # Realizar una predicción para un nuevo conjunto de características (nueva instancia)
#     # Asegúrate de ajustar las características según tu conjunto de datos

#     new_data = [['no-recurrence-events', '40-49', 'ge40', '20-24','0-2','no',1,'left','left_low']]  # Ajusta los valores de las características según tu conjunto de datos
#     prediction = knn.predict(new_data)
#     print(f'Predicción para nuevas características: {prediction}')





@app.get('/logout')
async def logout():
    logoutt = "./templates/login/login.html"
    return FileResponse(logoutt, status_code=200)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)