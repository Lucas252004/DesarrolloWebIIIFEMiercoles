# print("Hola Mundo, regresando al buen python :)")
# nombre = str(input("Ingrese su nombre"))
# print("Hola", nombre)
class Persona:
    nombre = ""
    apellido = ""

    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def mostrar_datos(self):
        print("El nombre es: ", self.nombre)
        print("El apellido es: ", self.apellido)


