from fastapi.encoders import jsonable_encoder
import mysql.connector
from fastapi import HTTPException
from config.db_config import get_db_connection
from models.user_model import Rol
# from fastapi.encoders import jsonable_encoder
from controllers.controller_user import UserController


class Rol:
    
    
    def add_rol(self,rol: Rol):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "INSERT INTO roles (role_name) VALUES (%s)"
            val = (rol.role_name,)
            cursor.execute(sql, val)
            conn.commit()
            return {"message": "Rol registrado correctamente"}
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    
    # get_roles
    def get_role(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "SELECT * FROM roles"
            cursor.execute(sql)
            roles = []
            for date in cursor:
                roles.append({
                    'id_role': date[0],  
                    'role_name': date[1],
                    
                })    
            json_data = jsonable_encoder(roles)        
            if roles:
                return json_data
            else:
                raise HTTPException(detail="Roles not found")  
                
        except mysql.connector.Error as err:
            conn.rollback()
       
    
    # get_rol_by_id
    def get_rol_by_id(self,id_role:int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "SELECT * FROM roles WHERE id_role = %s"
            val = (id_role,)
            cursor.execute(sql, val)
            roles = []
            for fila in cursor:
                roles.append({
                    'id_role':fila[0],
                    'role_name':fila[1]
                })
            
            json_data = jsonable_encoder(roles)        
            if roles:
                return json_data
            else:
                raise HTTPException(detail="Rol not found")  
                
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    
    # update_rol
    def update_rol(self,rol: Rol):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "UPDATE roles SET nombre = %s WHERE id = %s"
            val = (rol.nombre, rol.id)
            cursor.execute(sql, val)
            conn.commit()
            return {"message": "Rol actualizado correctamente"}
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    
    # delete_rol
    def delete_rol(self,id:int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            sql = "DELETE FROM roles WHERE id = %s"
            val = (id,)
            cursor.execute(sql, val)
            conn.commit()
            return {"message": "Rol eliminado correctamente"}
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
            