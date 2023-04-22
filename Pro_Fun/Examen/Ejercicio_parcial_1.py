"""
Exercise 7
Escribir una función reciba un diccionario con las asignaturas y las notas de un alumno y devuelva otro diccionario con las asignaturas
en mayúsculas y calificaciones correspondiente a las notas aprobadas

"""


def convertir_mayusculas(materia):
    return materia.upper()


def es_aprobado(nota):
    return nota >= 51


def convertir_notas_aprobadas(alumno, def_es_aprobado):
    return filter(lambda nota: def_es_aprobado(nota), alumno.items())


def get_notas_aprobadas_upper(alumno, def_convertir_mayusculas, def_es_aprobado):
    notas_aprobadas = {
        def_convertir_mayusculas(materia): nota for materia, nota in alumno.items() if def_es_aprobado(nota)
    }
    return notas_aprobadas


alumno = {'Programación 1': 51, 'Base de Datos': 60,
          'Sistemas Operativos': 48, 'Algorítmica': 80}

print(get_notas_aprobadas_upper(alumno, convertir_mayusculas,
      es_aprobado))

"""
Resuelto por el profesor.
"""
def to_upper(word):
    return word.upper()

def is_approved_in_tuple(group, minimun_grade=51):
    if group[i] >= minimun_grade:
        return group

def approved_grades(grades, capital_funtion, approved_function):
    name = list(map(capital_funtion, grades.keys()))
    grades_tuple = zip(name, grades.values())
    print(grades_tuple)
    return dict(filter(approved_function, grades_tuple))

print(approved_grades(alumno, to_upper, is_approved_in_tuple))