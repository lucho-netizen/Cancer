from pydantic import BaseModel

class User(BaseModel):
    id: int
    nombre: str
    apellido: str
    tipo_documento: str
    celular: int
    identificacion: int
    edad: int
    peso: int
    correo: str
    password: str
    id_rol: int = 1
    
        

class Rol(BaseModel):
    id_role: int
    role_name: str
    
        

class Login(BaseModel):
    correo: str
    password: str


class add_user(BaseModel):
    id: int
    nombre: str
    apellido: str
    tipo_documento: str
    celular: int
    identificacion: int
    edad: int
    peso: int
    correo: str
    password: str
    id_rol: int = 1
