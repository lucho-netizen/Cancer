class Rol:
    def __init__(self, id_role, role_name):
        self.id_roles = id_role
        self.role_name = role_name

    
    def get_data(self):
        return {
            'id_role': self.id_roles,
            'role_name': self.role_name
        }