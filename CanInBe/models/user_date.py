import mysql.connector
from fastapi import Depends, Form, HTTPException
from config.db_config import get_db_connection
from models.user_model import User, Login, User
from fastapi.encoders import jsonable_encoder
from controllers.controller_user import UserController
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, FileResponse


#CONTROLLERS
controller_user = UserController()

# query user
#
#----------------------------------------------
class User_Date():
    
    # create_user
    def add_user(self,user: User):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("""INSERT INTO usuario (nombre, apellido, 
                           tipo_documento, celular, identificacion, edad, peso, 
                           correo, password, id_rol) VALUES (%s, %s, %s, %s, %s, %s,%s, %s, %s, %s)""",
                           (user.nombre, user.apellido, user.tipo_documento, user.celular,
                            user.identificacion, user.edad, user.peso, user.correo, user.password, '1'))
            conn.commit()
            return {"message": "Usuario registrado correctamente"}
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    
    # get_users
    def get_users(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "SELECT * FROM usuario"
            cursor.execute(sql)
            users = []
            for data in cursor:
                users.append({
                    'id':data[0],
                    'nombre':data[1],
                    'apellido':data[2],
                    'tipo_documento':data[3],
                    'celular':data[4],
                    'identificacion':data[5],
                    'edad':data[6],
                    'peso':data[7],
                    'correo':data[8],
                    'password':data[9],
                    'id_rol': data[10]
                })
                
            json_data = jsonable_encoder(users)        
            if cursor:
                return json_data
            else:
                raise HTTPException(status_code=404, detail="Users not found")  
                
        except mysql.connector.Error as err:
            conn.rollback()
      
    
    # get_user_by_id
    def get_user_by_id(self,id:int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "SELECT * FROM usuario WHERE id = %s"
            val = (id,)
            cursor.execute(sql, val)
            users = []
            for fila in cursor:
                users.append({
                    'id':fila[0],
                    'nombre':fila[1],
                    'apellido':fila[2],
                    'tipo_documento':fila[3],
                    'celular':fila[4],
                    'identificacion':fila[5],
                    'edad':fila[6],
                    'peso':fila[7],
                    'correo':fila[8],
                    'password':fila[9],
                    'id_rol': fila[10]
                })
                
            
            json_data = jsonable_encoder(users)        
            if users:
                return json_data
            else:
                raise HTTPException(status_code=404, detail="User not found")  
                
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
            
    # update_user
    def update_user(self,user: User):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "UPDATE usuarios SET nombre = %s, apellido = %s, documento = %s, correo = %s, contraseña = %s, telefono = %s, direccion = %s, idroles = %s WHERE ID = %s"
            val = (user.nombre, user.apellido, user.documento, user.correo, user.contraseña, user.telefono, user.direccion, user.idrol, user.id)
            cursor.execute(sql, val)
            conn.commit()
            return {"message": "Usuario actualizado correctamente"} 
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
            
    # delete_user
    def delete_user(self,id:int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "DELETE FROM usuario WHERE id = %s"
            val = (id,)
            cursor.execute(sql, val)
            conn.commit()
            return {"message": "Usuario eliminado correctamente"}
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    
    
    
    def login(user: Login = Form(...), db=Depends(get_db_connection)):
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM usuario WHERE correo = %s AND password = %s", (user.correo, user.contraseña))
        db_user = cursor.fetchone()

        if db_user:
            # Lógica para almacenar datos en sesión (puedes adaptar esto según tus necesidades)
            html_address = "./templates/public/informacion.html"
            return FileResponse(html_address, status_code=200)
        else:
            return FileResponse('/router/', status_code=202)


 
