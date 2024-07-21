from models.rol import Role

class ControlleRol:

    def __init__(self):
        self.rol = None

    
    def rol_intance(self, params):
        rol = Role (params)
        self.rol = rol


    def get_data(self):
        return self.rol.get_data()
