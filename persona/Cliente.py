from Persona import *
class Cliente(Persona):
    id = 0

    def __init__(self, nombre, apellido, id):
        super().__init__(nombre, apellido)
        self.id = id

    def mostrarCliente(self):
        print("El ID es: ", self.id)
