"""
Elaborar un programa para el registro de notas en un curso aplicando los conceptos del 
paradigma de Programación Funcional que cumpla los siguientes requisitos: 
•  Permitir registrar estudiantes (Registro, Nombre Completo) 
•  Permitir registrar tres notas para cada estudiante: Primer Parcial, Segundo Parcial y Examen Final. 
•  Ver las notas de un estudiante seleccionado. 
•  Mostrar el promedio de un estudiante seleccionado. 
•  Mostrar el promedio general del curso. 
•  Elaborar una lista del curso para ver todas las notas (No utilizar un bucle, ideal un generator). 
El programa debe ejecutarse 100% en consola, para acceder a las opciones elaborar un menú y 
utilizando input() tomar valores del usuario.
"""

students = []


def register_student(registro, nombre_completo):
    student = {registro: registro, nombre_completo: nombre_completo}
    students.append(student)


def register_notes(registro, exam):    
    if exam.type_exam == "primer_parcial":
        pass
    elif exam.type_exam == "segundo_parcial":
        pass
    elif exam.type_exam == "examen_final":
        pass


def show_notes_student():
    pass


def show_average_student():
    pass


run = True
while(run):
    print("######### Menu ########")
    print("1. Registrar Estudiante")
    print("2. Registrar Notas")
    print("3. Ver Notas")
    print("4. Ver Promedio Estudiante")
    print("5. Ver Promedio General")

    option = input("Ingrese una opción: ")

    if option == "1":
        registro = input("Ingrese el registro: ")
        nombre_completo = input("Ingrese el nombre completo: ")
        register_student(registro, nombre_completo)
        print(students)

    elif option == "2":
        registro = input("Ingrese el registro: ")

        print("1. Colocar Primer Parcial")
        print("2. Colocar Segundo Parcial")
        print("3. Colocar Examen Final")

        option = input("Ingrese una opción: ")

        if option == "1":
            register_notes(registro, {"type_exam": "primer_parcial", "note": 0})

        elif option == "2":
            pass

        elif option == "3":
            pass
