"""
Este archivo contiene todas las funiones relacionadas al jugador
"""


def get_last_version(versions):
	return versions[-1]


def get_player_points(states, version):
	return states[version]['points']


def get_player_badges(states, version):
	return states[version]['badges']


def get_player_info(states, version, info):
	return states[version][info]


def update_player_info(states, versions, points, badges, current_version):
	# 1er Paso: Crear la nueva versi[on y agregarla a versiones
	new_version = str((float(current_version) + 1))
	versions.append(new_version)
	# 2do Paso: Agregar el nuevo estado a la lista de estados
	states[new_version] = {'points': points, 'badges': badges}
	return states, versions


def player_action(function, *args):
	return function(*args)
