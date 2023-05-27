from player.player_code import get_player_points, get_last_version, update_player_info, get_player_info, \
	get_player_badges

if __name__ == '__main__':
	states = {
		'1.0': {
			'points': 0,
			'badges': []
		}
	}
	versions = ['1.0']

	current_points = get_player_points(states, get_last_version(versions))
	print(f'El jugador 1 tiene {current_points} puntos')
	print('El jugador 1 recibe 25 puntos y la placa de explorador')
	states, versions = update_player_info(states, versions, 25, ['Explorador'], get_last_version(versions))
	current_points = get_player_info(states, get_last_version(versions), 'points')
	current_badges = get_player_badges(states, get_last_version(versions))
	print(f'El jugador 1 tiene {current_points} puntos')
	print(f'El jugador 1 tiene las siguientes placas: {current_badges} ')
	print('------------------------------------------------------')
	print(versions)
	print(states)
	print('------------------------------------------------------')
	print('El jugador 1 recibe 50 puntos y la placa de experto')
	states, versions = update_player_info(states, versions, 75, ['Explorador', 'Experto'], get_last_version(versions))
	print('------------------------------------------------------')
	print(versions)
	print(states)

