
from fastapi import APIRouter
from controllers.rol_controller import RolController
from models.user_model import Rol



router = APIRouter()
controller_rol = RolController()



@router.post("add_rol")
def add_rol(rol: Rol):
    response = controller_rol.add_rol(rol)
    return (response)

@router.get("/roles")
def get_role():
    response = controller_rol.get_role()
    return (response)

@router.get("/roles/{id_role}/")
def get_rol_by_id(id_role: int):
    response = controller_rol.get_rol_by_id(id_role)
    return (response)

@router.put("/roles-update")
def update_rol(rol: Rol):
    response = controller_rol.update_rol(rol)
    return (response)

@router.delete("/roles-delete/{id_role}/")
def delete_rol(id_role: int):
    response = controller_rol.delete_rol(id_role)
    return (response)

