
all_locations['maywell_graveyard'] = {
	name: 	'Maywell graveyard',
	description: 'The local graveyard',
	image: 	'locations/graveyard-989920_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:5,row:9},
	type:  	'map',
	actions:{
		// QUESTS
		spawn_undead: 		true,
	},
	requirements:{
		quests:{
			brewing_poison: 	'accepted',
		}
	},
};

all_actions['spawned_skeletons'] = {
	name: 	'Skeletons',
	image: 	'units/skeleton-1522620_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		skeleton:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				skeleton:{
					min: 		1,
					max: 		1,
					level: 		6,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
	}
};

all_actions['spawned_grave'] = {
	name: 	'Grave',
	image: 	'locations/graveyard-989920_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		skeleton:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				skeleton:{
					min: 		2,
					max: 		2,
					level: 		6,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
		jug:{
			chance: 	10,
			min_wave: 	1,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'jug',
			description: 'You found a jug.',
			rewards:{
				jug:{
					min: 		1,
					max: 		1,
				}
			},
		},
		knife:{
			chance: 	5,
			min_wave: 	1,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'knife',
			description: 'You found a knife.',
			rewards:{
				rusty_knife:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

all_actions['spawn_undead'] = {
	name: 	'spawn_undead',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_grave','spawned_skeletons'],
	spawn_time: 	global_cooldown * 10,
	//lifetime: 		global_cooldown	* 1,
	max_spawns: 	10,
	min_spawns: 	2,
	requirements:{
		quests:{
		}
	},
	spawn_chances:{
		spawned_skeletons: 		100,
		spawned_grave: 			100,
	}
};