
all_units['thallin'] = {
	name: 		'Thallin',
	image: 		'units/handsome-4133131_640.jpg',
	subtypes: 	['human','thallin','creature'],
	strength: 	10,
	intellect: 	10,
	max_hp: 	100,
	dodge: 		40,
	base_aggro: 5,
	big: 		true,
	abilities:{
		attack:{
			chance: 	100,
		},
	},
	always_drop: 		true,
	loot_chance: 		0,
	loot:{
		coins:{
			chance: 	100,
			min: 		5,
			max: 		10,
		}
	},
	favorite_rows:{
		min: 	1,
		max: 	1
	}
};