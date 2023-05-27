import copy

states = {
	'1.0': {
		'edwardfc': {
			'points': 0,
			'badges': []
		}
	}
}


def dummy_dict(dictionary):
	second = copy.deepcopy(dictionary)
	second['1.0']['edwardfc']['points'] = 10
	return second

if __name__ == '__main__':
	print(states)
	second_state = dummy_dict(states)
	print(second_state)
	print(states)
