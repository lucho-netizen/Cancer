class User:
    def __init__(self, id, nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_rol):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.tipo_documento = tipo_documento
        self.celular = celular
        self.identificacion = identificacion
        self.edad = edad
        self.peso = peso
        self.correo = correo
        self.password = password
        self.id_rol = id_rol

    def get_data(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'tipo_documento': self.tipo_documento,
            'celular': self.celular,
            'identificacion': self.identificacion,
            'edad': self.edad,
            'peso': self.peso,
            'correo': self.correo,
            'password': self.password,
            'id_rol': self.id_rol
        }
