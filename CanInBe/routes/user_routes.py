from fastapi import Depends, FastAPI, Form
from fastapi import APIRouter, HTTPException, Request
from fastapi.templating import Jinja2Templates
from jinja2 import Template
from config.db_config import get_db_connection
from controllers.user_controller import *
from models.user_model import User, Login
from controllers.controller_user import UserController as UserController_v1
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.responses import RedirectResponse


router = APIRouter()
controller_users = UserController()
controll = UserController_v1()

# Funciones auxiliares

router.mount("/static", StaticFiles(directory="static"), name="static")


# Create especie
@router.post("/add_user")
async def add_user(user: User):
    response = controller_users.add_user(user)
    return (response)

# Get all users
@router.get("/get_users")
async def get_users():
    response = controller_users.get_users()
    return (response)

# Get user by id
@router.get("/users/{id}/")
async def get_user_by_id(id: int):
    response = controller_users.get_user_by_id(id)
    return (response)


# Update user
@router.put("/users-update")
def update_user(user: User):
    response = controller_users.update_user(user)
    return (response)

# Delete user
@router.delete("/users-delete/{id}/")
def delete_user(id: int):
    response = controller_users.delete_user(id)
    return (response)
    




@router.get("/register", response_class=HTMLResponse)
def register():
    html_address = "./templates/register/register.html"
    return FileResponse(html_address, status_code=200)






