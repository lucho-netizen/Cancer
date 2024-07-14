import mysql.connector
from fastapi import HTTPException
from models.rol_model import Rol



class RolController:
        
        def __init__(self):
            self.Rol = Rol()
            
        # controller get_all_roles
        def get_role(self):
            try:
                return self.Rol.get_role()
            except mysql.connector.Error as err:
                return err
        
        # controller get_rol_by_id
        def get_rol_by_id(self,id_role: int):
            try:
                return self.Rol.get_rol_by_id(id_role)
            except mysql.connector.Error as err:
                return err
        
        # controller create_rol
        def add_rol(self,rol: Rol):
            try:
                return self.Rol.create_rol(rol)
            except mysql.connector.Error as err:
                return err
        
        # controller update_rol
        def update_rol(self,rol: Rol):
            try:
                return self.Rol.update_rol(rol)
            except mysql.connector.Error as err:
                return err
        
        # controller delete_rol
        def delete_rol(self,id_role: int):
            try:
                return self.Rol.delete_rol(id_role)
            except mysql.connector.Error as err:
                return err    
    
       
