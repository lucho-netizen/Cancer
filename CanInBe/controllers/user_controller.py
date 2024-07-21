import mysql.connector
from fastapi import Depends, Form, HTTPException
from config.db_config import get_db_connection
from models.user_model import User, Login
from models.user_date import User_Date 

    
# controller user
#
#----------------------------------------------
class UserController:
        
        def __init__(self):
            self.User_Date = User_Date()
            
        # controller get_all_users
        def get_users(self):
            try:
                return self.User_Date.get_users()
            except mysql.connector.Error as err:
                return err
        
        # controller get_user_by_id
        def get_user_by_id(self,id: int):
            try:
                return self.User_Date.get_user_by_id(id)
            except mysql.connector.Error as err:
                return err
        
        # controller create_user
        def add_user(self,user: User):
            try:
                return self.User_Date.add_user(user)
            except mysql.connector.Error as err:
                return err
        
        # controller update_user
        def update_user(self,user: User):
            try:
                return self.User_Date.update_user(user)
            except mysql.connector.Error as err:
                return err
        
        # controller delete_user
        def delete_user(self,id: int):
            try:
                return self.User_Date.delete_user(id)
            except mysql.connector.Error as err:
                return err
         
        