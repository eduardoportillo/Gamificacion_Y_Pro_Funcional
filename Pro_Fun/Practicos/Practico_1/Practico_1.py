"""
Exercise 1
Dado los siguientes arreglos devolver únicamente la suma de todos los elementos menores a 22.

"""
a = [21, 27, 23, 20, 21, 25, 15]
b = [8, 46, 45, 49, 15, 6, 31]


def number_22(array):
    return [number for number in array if number < 22]


def plus_arrays(arrays, function):
    suma = 0
    for number in arrays:
        suma += sum(function(number))
    return suma


print(f'suma - números menores a 22: plus_arrays([a, b], number_22)')


"""
2. Escribir una función que aplique el IVA a un precio. Escribir otra función que reciba una lista con 
los precios, aplique el IVA a cada precio y retorne el monto total de la compra.

"""
precios = [100, 100, 100]


def add_iva(precio):
    return precio *  1.13


def add_iva_to_list(array, function_iva):
    return sum([function_iva(precio) for precio in array])


print(f'Iva: {add_iva_to_list(precios, add_iva)}')

"""
3. Escribir una función que reciba una frase y devuelva un diccionario con las palabras que 
contiene y su longitud. Ejemplo: Hola Mundo, debe retornar: 
{ 
 ‘Hola’: 4, 
 ‘Mundo’: 5 
} 

"""
# NOTA: Para hacerlo disto al ejemplo de clases.
frase = 'Hola Mundo'

def get_words(frase):
    return frase.split()

def get_word_len(word):
    return (word, len(word))

def get_dict_words_len(words, def_get_word_len):
    return dict(def_get_word_len(word) for word in words)

def count_len_words(frase, def_get_word, def_get_dict_words_len, def_get_word_len):
    words = def_get_word(frase)
    return def_get_dict_words_len(words, def_get_word_len)

print(count_len_words(frase, get_words, get_dict_words_len, get_word_len))