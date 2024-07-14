from models.user  import User

class UserController:
        
    def __init__(self):
        self.user = None
    
    def user_instance(self, params):
        user = User (params)
        self.user = user
    
    def get_data(self):
        return self.user.get_data()
    
    