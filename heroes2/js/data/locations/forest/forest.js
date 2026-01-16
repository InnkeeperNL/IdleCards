
all_locations['forest'] = {
	name: 	'forest',
	image: 	'locations/forest-gd8f28ae40_640.jpg',
	type:  	'map',
	parent_location: 	'map',
	map_position: {col:4,row:3},
	actions:{
		// QUESTS

		spawn_forest: 		true,
	},
	decorations:{
	},
	requirements:{
	},
};

all_actions['spawned_trees'] = {
	name: 	'The forest',
	image: 	'locations/forest-gd8f28ae40_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		boar:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				tree:{
					min: 		0,
					max: 		1,
					level: 		10,
				},
				boar:{
					min: 		1,
					max: 		2,
					level: 		10,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
		deer:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				tree:{
					min: 		0,
					max: 		1,
					level: 		10,
				},
				deer:{
					min: 		1,
					max: 		2,
					level: 		10,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
		druid:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				tree:{
					min: 		0,
					max: 		2,
					level: 		10,
				},
				druid:{
					min: 		1,
					max: 		1,
					level: 		10,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
		lumber:{
			chance: 	20,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'lumber',
			description: 'You found some lumber.',
			rewards:{
				lumber:{
					min: 		1,
					max: 		1,
				}
			},
		},
		firewood:{
			chance: 	20,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'firewood',
			description: 'You found some firewood.',
			rewards:{
				firewood:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

all_actions['spawned_boar'] = {
	name: 	'Wild boar',
	image: 	'units/animal-6897394_640.jpgg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		boar:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				tree:{
					min: 		0,
					max: 		1,
					level: 		10,
				},
				boar:{
					min: 		1,
					max: 		1,
					level: 		12,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
	}
};

all_actions['spawned_deer'] = {
	name: 	'Wild deer',
	image: 	'units/roe-deer-g90e584c17_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		deer:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				tree:{
					min: 		0,
					max: 		1,
					level: 		10,
				},
				deer:{
					min: 		1,
					max: 		2,
					level: 		10,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
	}
};

all_actions['spawned_guardstone'] = {
	name: 	'Guardstone',
	image: 	'units/standing-stones-4414684_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		guardstone:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				guardstone:{
					min: 		1,
					max: 		1,
					level: 		10,
				},
				druid:{
					min: 		2,
					max: 		2,
					level: 		10,
				}
			},
			requirements:{
				quests:{
				}
			},
		},
	}
};


all_actions['spawned_lumber'] = {
	name: 	'Lumber',
	image: 	'items/logs-ge149b03d5_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		lumber:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'lumber',
			description: 'You found some lumber.',
			rewards:{
				lumber:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

/*all_actions['spawned_firewood'] = {
	name: 	'firewood',
	image: 	'items/wood-1079365_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		firewood:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'firewood',
			description: 'You found some firewood.',
			rewards:{
				firewood:{
					min: 		5,
					max: 		10,
				}
			},
		},
	}
};*/

all_actions['spawned_apple_tree'] = {
	name: 	'apple',
	image: 	'items/apple-g9165f9bf8_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
		}
	},
	possible_encounters:{
		apple:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'apple',
			description: 'You found some apples.',
			rewards:{
				apple:{
					min: 		2,
					max: 		3,
				}
			},
		},
	}
};

all_actions['spawn_forest'] = {
	name: 	'spawn_forest',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_trees','spawned_lumber','spawned_firewood','spawned_rosemary','spawned_sage','spawned_apple_tree','spawned_guardstone','spawned_deer'],
	spawn_time: 	global_cooldown * 10,
	//lifetime: 		global_cooldown	* 1,
	max_spawns: 	10,
	min_spawns: 	4,
	requirements:{
		quests:{
		}
	},
	spawn_chances:{
		spawned_trees: 			100,
		spawned_firewood: 		20,
		spawned_rosemary: 		2,
		spawned_sage: 			5,
		spawned_lumber: 		10,
		spawned_apple_tree: 	5,
		spawned_guardstone: 	10,
		spawned_deer: 			20,
	}
};