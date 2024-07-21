# import os
# from pyexpat.errors import messages
# from tensorflow.keras.layers import Dense, Dropout
# from tensorflow.keras.models import Sequential
# import numpy as np
# import random
# import json
# from nltk.stem import WordNetLemmatizer
# import nltk
# from flask import Flask, request
# from flask_socketio import SocketIO



# global mesagges


# app = Flask(__name__)


# dir_actual = os.path.dirname(__file__)
# dir_actual = os.path.dirname(os.path.abspath(__file__))

# nltk.download('punkt')
# nltk.download('wordnet')




# # Construye la ruta al archivo datos.json
# ruta_datos_json = os.path.join('D:/breahmom/CanInBe/chat/datos.json')


# # Cargar datos desde el archivo JSON
# with open(ruta_datos_json) as file:
#     datos = json.load(file)

# # Preprocesar los datos
# lemmatizer = WordNetLemmatizer()

# palabras = []
# tags = []
# intents = datos['intents']

# entrenamiento = []

# for intent in intents:
#     for pattern in intent['patterns']:
#         # Tokenizar y lematizar las palabras
#         words = nltk.word_tokenize(pattern)
#         palabras.extend(words)
#         tags.append(intent['tag'])

# palabras = [lemmatizer.lemmatize(word.lower())
#             for word in palabras if word.isalnum()]
# palabras = sorted(list(set(palabras)))

# tags = sorted(list(set(tags)))

# for intent in intents:
#     for pattern in intent['patterns']:
#         # Bolsa de palabras para cada patrón
#         bolsa_palabras = [lemmatizer.lemmatize(
#             word.lower()) for word in nltk.word_tokenize(pattern) if word.isalnum()]

#         # Codificación de un patrón en una matriz de entrada
#         fila_entrenamiento = [
#             1 if palabra in bolsa_palabras else 0 for palabra in palabras]

#         # Codificación de la etiqueta en una matriz de salida
#         etiqueta = [0] * len(tags)
#         etiqueta[tags.index(intent['tag'])] = 1

#         # Concatenar las listas en lugar de anidarlas
#         entrenamiento.append(fila_entrenamiento + etiqueta)

# random.shuffle(entrenamiento)
# entrenamiento = np.array(entrenamiento)

# # Separar datos de entrada y salida
# X_train = np.array([entrada[:len(palabras)] for entrada in entrenamiento])
# y_train = np.array([etiqueta[len(palabras):] for etiqueta in entrenamiento])

# # Construir el modelo de red neuronal
# modelo = Sequential()
# modelo.add(Dense(256, input_shape=(len(palabras),), activation='relu'))
# modelo.add(Dropout(0.5))
# modelo.add(Dense(128, activation='relu'))
# modelo.add(Dropout(0.5))
# modelo.add(Dense(64, activation='relu'))
# modelo.add(Dropout(0.5))
# modelo.add(Dense(len(tags), activation='softmax'))

# # Compilar el modelo
# modelo.compile(optimizer='adam', loss='categorical_crossentropy',
#                metrics=['accuracy'])

# # Entrenar el modelo
# historial_entrenamiento = modelo.fit(
#     X_train, y_train, epochs=100, batch_size=5, verbose=1)

# # Guardar el modelo entrenado
# modelo.save('chatbot_modelo.h5')
# print("Modelo entrenado y guardado exitosamente.")

# # Función para procesar el mensaje del usuario y obtener una respuesta del chatbot




# @app.route("/procesar_mensaje", methods=["POST"])

# def procesar_mensaje(mensaje):

#     # Se recibe el parametro mesnaje del Front 

#     if request.method == "POST":
#         mesagges  = request.form['mensaje']
    
#     else:
#         print("Error")

   
#     # Bolsa de palabras para el mensaje del usuario
#     bolsa_palabras = [lemmatizer.lemmatize(
#         word.lower()) for word in nltk.word_tokenize(mensaje) if word.isalnum()]

#     # Codificación del mensaje en una matriz de entrada
#     entrada_usuario = np.array(
#         [1 if palabra in bolsa_palabras else 0 for palabra in palabras])

#     # Predicción del modelo
#     resultado = modelo.predict(entrada_usuario.reshape(1, -1))

#     # Obtener la etiqueta predicha
#     predicha_tag = tags[np.argmax(resultado)]

#     # Buscar la respuesta asociada a la etiqueta
#     for intent in intents:
#         if intent['tag'] == predicha_tag:
#             respuesta = random.choice(intent['responses'])
#             return respuesta


# while True:
#     # Obtener mensaje del usuario
#     mensaje_usuario = mesagges

#     # Salir si el usuario escribe "salir"
#     if mensaje_usuario.lower() == 'salir':
#         print("¡Hasta luego!")
#         break

#     # Procesar el mensaje y obtener la respuesta del chatbot
#     respuesta_chatbot = procesar_mensaje(mensaje_usuario)
#     print("Chatbot:", respuesta_chatbot)


# if __name__ == "__main__":
#     app.run(app, debug=True, port=6000)
#     # socketio.run()



from fastapi import FastAPI, WebSocket
from typing import List
import nltk
from nltk.stem import WordNetLemmatizer
import json
import random
import numpy as np
from tensorflow.keras.models import load_model

app = FastAPI()

# Cargar modelo de chatbot entrenado
modelo = load_model('chatbot_modelo.h5')

# Cargar datos desde el archivo JSON
with open('datos.json') as file:
    datos = json.load(file)

lemmatizer = WordNetLemmatizer()

# Preprocesar datos
palabras = []
tags = []
intents = datos['intents']

for intent in intents:
    for pattern in intent['patterns']:
        words = nltk.word_tokenize(pattern)
        palabras.extend(words)
        tags.append(intent['tag'])

palabras = [lemmatizer.lemmatize(word.lower()) for word in palabras if word.isalnum()]
palabras = sorted(list(set(palabras)))

tags = sorted(list(set(tags)))

# Función para procesar el mensaje del usuario y obtener una respuesta del chatbot
def procesar_mensaje(mensaje):
    bolsa_palabras = [lemmatizer.lemmatize(word.lower()) for word in nltk.word_tokenize(mensaje) if word.isalnum()]
    entrada_usuario = np.array([1 if palabra in bolsa_palabras else 0 for palabra in palabras])
    resultado = modelo.predict(entrada_usuario.reshape(1, -1))
    predicha_tag = tags[np.argmax(resultado)]
    for intent in intents:
        if intent['tag'] == predicha_tag:
            respuesta = random.choice(intent['responses'])
            return respuesta

# WebSocket connection manager
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

manager = ConnectionManager()

# WebSocket endpoint to handle incoming connections
@app.websocket("/chat")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            response = procesar_mensaje(data)
            await manager.send_message(response, websocket)
    except Exception as e:
        print(f"WebSocket error: {e}")
        manager.disconnect(websocket)



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)