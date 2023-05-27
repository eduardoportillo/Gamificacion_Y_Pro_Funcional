"""
Primero mejoraremos la estructura del State
states = {
		'1.0': {
			'edwardfc': {
				'points': 0,
				'badges': []
			},
			'jose00':{}
		}
	}
"""

# Feactures 
def apply_player_action(args):
    return args['function'](args['params'])


def get_current_version(args):
    if 'versions' in args:
        return args['versions'][-1]
    return None


def get_player_feature(args):
    if 'version' in args and 'states' in args and 'feature' in args and 'username' in \
            args:
        return args['states'][args['version']][args['username']][
            args['feature']]
    return None


def update_player_feature(args):
    if 'versions' in args and 'states' in args and 'feature' in args and 'username' in \
            args and 'version' in args and 'value' in args:
        import copy

        # 1er Paso: Crear la nueva version y agregarla a versiones
        new_version = str((float(args['version']) + 1))
        args['versions'].append(new_version)

        # 2do Paso: Agregar el nuevo estado a la lista de estados
        args['states'][new_version] = copy.deepcopy(
            args['states'][args['version']])
        if args['username'] in args['states'][new_version]:
            args['states'][new_version][args['username']][args['feature']] = \
                args['value']
        else:
            args['states'][new_version][args['username']] = {
                args['feature']: args['value']
            }
        return args['states'], args['versions']
    return None, None

