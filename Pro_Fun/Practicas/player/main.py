from player_improved import *

if __name__ == '__main__':
    states = {
        '1.0': {
            'edwardfc': {
                'points': 100
            }
        }
    }
    versions = ['1.0']

# implement get_player_feature
    current_points = apply_player_action({
        'function': get_player_feature,
        'params': {
            'states': states,
            'username': 'edwardfc',
            'feature': 'points',
            'version': apply_player_action({
                        'function': get_current_version,
                        'params': {
                            'versions': versions
                        }
            })
        }
    })  # get_player_points(states, get_last_version(versions))

    print(f'El jugador 1 tiene {current_points} puntos')
    print('El jugador 1 recibe la placa de explorador')

    # implement update_player_feature
    states, versions = apply_player_action({
        'function': update_player_feature,
        'params': {
            'states': states,
            'versions': versions,
            'username': 'edwardfc',
            'feature': 'badges',
            'value': ['Explorador'],
            'version': apply_player_action({
                'function': get_current_version,
                'params': {
                    'versions': versions
                }
            })
        }
    })  # states, versions = update_player_info(states, versions, 25, ['Explorador'], get_last_version(versions))

    current_badges = apply_player_action({
        'function': get_player_feature,
        'params': {
            'states': states,
            'username': 'edwardfc',
            'feature': 'badges',
            'version': apply_player_action({
                        'function': get_current_version,
                        'params': {
                            'versions': versions
                        }
            })
        }
    })

    print(f'El jugador 1 tiene las siguientes placas: {current_badges} ')
    print(states)
# print('------------------------------------------------------')
# print(versions)
# print(states)
# print('------------------------------------------------------')
# print('El jugador 1 recibe 50 puntos y la placa de experto')
# states, versions = update_player_info(states, versions, 75, ['Explorador', 'Experto'], get_last_version(versions))
# print('------------------------------------------------------')
# print(versions)
