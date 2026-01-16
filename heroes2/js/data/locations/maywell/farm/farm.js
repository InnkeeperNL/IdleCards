


/*all_locations['maywell_farm'] = {
	name: 	'Maywell farm',
	description: 'A pretty farmhouse',
	image: 	'locations/truss-5146396_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:2,row:8},
	actions:{
		// QUESTS
	},
	requirements:{
		quests:{
			charm_snake: 	'done',
		}
	},
};*/

all_locations['fred_wheaty'] = {
	name: 	'Fred Wheaty',
	description: 'A serious looking farmer',
	image: 	'units/labor-1406652_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:2,row:8},
	actions:{
		// QUESTS
		clear_crows: 		true,
		clear_the_barn: 	true,
	},
	requirements:{
		location_have_actions:{
			fred_wheaty: 	true,
		}
	},
};

all_actions['clear_crows'] = {
	name: 	'Shoo!',
	description: 	'Fred Wheaty runs this farm.<br/><i>Hello, there. I would welcome you, but we have some hay bales to get to the barn. We need someone to get rid of those crows, though.</i>',
	complete_description: '<i>Good, now we just have to move the hay to the barn.</i>',
	image: 	'units/common-raven-4010290_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'maywell_village',
	show_on_complete: 	'clear_the_barn',
	requirements:{
		quests:{
			charm_snake: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'crows killed',
			type: 		'kills',
			target_id: 	'crow',
			amount: 	10,
		},
	},
	rewards:{
		pitchfork: 	1,
	}
};

all_actions['clear_the_barn'] = {
	name: 	'Shoo! Shoo!',
	description: 	'<i>Now that we have some hay bales, the barn seems to be infested with rats, among other things. Could you clear out some of the rats as well?</i>',
	complete_description: '<i>Much better.<br/>Let\'s hope they stay away now. Since Felix wasn\'t doing his job, you can take him.<br/>Feel free to check the barn for rats any time.</i>',
	image: 	'units/cute-3284412_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'maywell_village',
	requirements:{
		quests:{
			clear_crows: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'rats cleared',
			type: 		'kills',
			target_id: 	'rat_field',
			amount: 	20,
		},
	},
	rewards:{
		cat: 	1,
	}
};

all_locations['maywell_fields'] = {
	name: 	'Maywell fields',
	image: 	'locations/wheat-1845835_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:2,row:9},
	type:  	'map',
	actions:{
		// QUESTS
		spawn_crows: 		true,
		spawn_farmers: 		true,
	},
	requirements:{
		quests:{
			clear_crows: 	'accepted',
		}
	},
};

all_locations['maywell_barn'] = {
	name: 	'Barn',
	image: 	'locations/abandoned-2179173_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:1,row:8},
	type:  	'map',
	actions:{
		// QUESTS
		spawn_rats_field: 	true,
	},
	requirements:{
		quests:{
			clear_the_barn: 	'accepted',
		}
	},
};

/*all_locations['maywell_mill'] = {
	name: 	'Mill',
	description: 'A place to refine goods.',
	image: 	'locations/mill-1745186_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:1,row:10},
	actions:{
		// QUESTS
		milled_goods: 	true,
	},
	requirements:{
		quests:{
			clear_the_barn: 	'done',
		}
	},
};*/

all_actions['milled_goods'] = {
	name: 	'Milling 101',
	description: 	'Marc Mohl greets you warmly.<i>I heard you made the barn accessable again. Good job! How about you fetch me some barley, flax and wheat ad I can show you how this all works.</i>',
	complete_description: '<i>That will do.</i><br/>Marc shows you how to work the mill.',
	image: 	'people/reenactment-gc19f87d5d_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			clear_the_barn: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'barley',
			type: 		'items',
			target_id: 	'barley',
			amount: 	10,
		},
		1:{
			name: 		'flax',
			type: 		'items',
			target_id: 	'flax',
			amount: 	10,
		},
		2:{
			name: 		'wheat',
			type: 		'items',
			target_id: 	'wheat',
			amount: 	10,
		},
	},
	rewards:{
		recipe_flax_yarn: 		1,
		recipe_flour_barley: 	1,
		recipe_flour_wheat: 	1,
	}
};

all_actions['spawn_rats_field'] = {
	name: 	'spawn_rats',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_rats_field','spawned_spider_barn','spawned_firewood'],
	spawn_time: global_cooldown * 30,
	max_spawns: 	8,
	min_spawns: 	2,
	requirements:{
		quests:{
			kill_giant_rat: 	'done',
		}
	},
	spawn_chances:{
		spawned_rats_field: 		100,
		spawned_spider_barn: 		10,
		spawned_firewood: 			10,
	}
};

all_actions['spawn_farmers'] = {
	name: 	'spawn_farmers',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_farmer'],
	max_spawns: 	2,
	min_spawns: 	0,
	requirements:{
		quests:{
			clear_crows: 	'done',
		}
	},
	spawn_chances:{
		spawned_farmer: 		100,
	}
};

all_actions['spawned_rats_field'] = {
	name: 	'barn rats',
	image: 	'units/cute-3284412_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			kill_giant_rat: 	'done',
		}
	},
	possible_encounters:{
		rat_field:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				rat_field:{
					min: 		2,
					max: 		3,
					level: 		2,
				}
			}
		},
	}
};

all_actions['spawned_firewood'] = {
	name: 	'firewood',
	image: 	'items/wood-1079365_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			clear_the_barn: 	'done',
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
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
			},
		},
	}
};

all_actions['spawned_spider_barn'] = {
	name: 	'barn spider',
	image: 	'units/spider-3022078_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			clear_the_barn: 	'done',
		}
	},
	possible_encounters:{
		spider_barn:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				spider_barn:{
					min: 		1,
					max: 		1,
					level: 		8,
				}
			}
		},
		/*wheat:{
			chance: 	20,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'wheat',
			description: 'You found some wheat.',
			rewards:{
				wheat:{
					min: 		2,
					max: 		3,
				}
			},
			requirements:{
			},
		},*/
	}
};



all_actions['spawned_farmer'] = {
	name: 	'farmer',
	image: 	'units/labor-1406652_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			kill_giant_rat: 	'done',
		}
	},
	possible_encounters:{
		farmer:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				farmer:{
					min: 		1,
					max: 		1,
					level: 		7,
				}
			}
		},
	}
};

all_actions['spawn_crows'] = {
	name: 	'spawn_crows',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_crows','spawned_wheat','spawned_barley','spawned_flax'],
	max_spawns: 	8,
	min_spawns: 	2,
	requirements:{
	},
	spawn_chances:{
		spawned_crows: 		100,
		spawned_wheat: 		10,
		spawned_barley: 	10,
		spawned_flax: 		10,
	}
};

all_actions['spawned_crows'] = {
	name: 	'hay bale',
	image: 	'units/bale-3026360_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
	},
	possible_encounters:{
		crow:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				crow:{
					min: 		2,
					max: 		3,
					level: 		2,
				},
				hay_bale:{
					min: 		1,
					max: 		1,
					level: 		2,
				}
			}
		},
		hay:{
			chance: 	50,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'hay',
			description: 'You found some hay.',
			rewards:{
				hay:{
					min: 		1,
					max: 		2,
				}
			},
		},
	}
};

all_actions['spawned_barley'] = {
	name: 	'barley',
	image: 	'items/barley-2117454_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			clear_crows: 	'done',
		}
	},
	possible_encounters:{
		barley:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'barley',
			description: 'You found some barley.',
			rewards:{
				barley:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

all_actions['spawned_flax'] = {
	name: 	'flax',
	image: 	'items/nature-3082560_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			clear_crows: 	'done',
		}
	},
	possible_encounters:{
		flax:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'flax',
			description: 'You found some flax.',
			rewards:{
				flax:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

all_actions['spawned_wheat'] = {
	name: 	'wheat',
	image: 	'items/wheat-3241114_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			clear_crows: 	'done',
		}
	},
	possible_encounters:{
		wheat:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'wheat',
			description: 'You found some wheat.',
			rewards:{
				wheat:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};