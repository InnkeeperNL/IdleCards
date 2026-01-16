all_locations['herb_garden'] = {
	name: 	'Herb garden',
	image: 	'locations/garden-5385995_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:4,row:3},
	type:  	'map',
	actions:{
		// QUESTS
		spawn_bushes: 			true,
	},
	requirements:{
		quests:{
			kill_giant_rat: 	'done',
		}
	},
};

all_locations['hally_dannu'] = {
	name: 	'Hally Dannu',
	description:'The woman in charge of the herb garden.',
	image: 	'people/agriculture-1807549_640.jpg',
	parent_location: 	'herb_garden',
	map_position: {col:3,row:5, width:2},
	actions:{
		clear_snakes: 			true,
		look_for_herbs: 		true,
		magic_herbs: 			true,
		charm_snake: 			true,
		teaching_healing: 		true,
		brewing_potions: 		true,
		lifebloom: 				true,
	},
	/*craft_slots:{
		starting_amount: 		1,
		possible_recipes: 		['herbalist'],
		slot_cost: 				200,
		requirements:{
			quests:{
				teaching_healing: 	'done',
			}
		},
	},*/
	requirements:{
	},
};

all_actions['clear_snakes'] = {
	name: 	'Clear snakes',
	description: 	'Hally Dannu is impressed with you defeating many rats.<br/><i>I have a problem with snakes infesting my garden. I need those herbs to supply the alchemists. If you clear the snakes I can give you some herbs and introduce you to the alchemist.</i>',
	complete_description: '<i>Thanks for clearing the snakes. Here is your reward, as promised.</i>',
	image: 	'units/snake-3979601_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'herb_garden',
	show_on_complete: 	'look_for_herbs',
	requirements:{
	},
	goals:{
		0:{
			name: 		'snakes killed',
			type: 		'kills',
			target_id: 	'snake_small',
			amount: 	10,
		}
	},
	rewards:{
		coins: 		25,
	}
};

all_actions['look_for_herbs'] = {
	name: 	'Look for herbs',
	description: 	'There are still some snakes around, but the herbs can now be gathered again.<br/><i>Great job on the snakes, but I have fallen behind a lot. If you help me gather some herbs and some snake skins, I can make a nice magic herb bundle for you.</i>',
	complete_description: '<i>That should do nicely. Let me show you how it works.</i>',
	image: 	'items/calendula-6512323_1280.jpg',
	type: 	'quest',
	requirements:{
		quests:{
			clear_snakes: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'sage',
			type: 		'items',
			target_id: 	'sage',
			amount: 	20,
		},
		1:{
			name: 		'snake skins',
			type: 		'items',
			target_id: 	'snake_skin',
			amount: 	10,
		},
		2:{
			name: 		'rosemary',
			type: 		'items',
			target_id: 	'rosemary',
			amount: 	5,
		}
	},
	rewards:{
		herb_bundle: 	1,
		recipe_herb_bundle: 1,
	}
};

all_actions['magic_herbs'] = {
	name: 	'Magic herbs',
	description: 	'<i>You know, if you know what to look for, you can sometimes find some leaves touched by fae magic. If you bring me some, I will teach you how to heal yourself and your allies.</i><br/>Look fo spiders to find the leaves.',
	complete_description: '<i>Wonderful!!<br/>I knew you would find some!</i>',
	image: 	'items/wonderland-2895070_640.jpg',
	type: 	'quest',
	requirements:{
		quests:{
			clear_snakes: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'fae touched leaves',
			type: 		'items',
			target_id: 	'fae_touched_leaves',
			amount: 	5,
		},
	},
	rewards:{
		heal: 		1,
	}
};

all_actions['charm_snake'] = {
	name: 	'Charm snake',
	description: 	'Hally hands you a small flute.<Br/><i>Here, use this to charm a snake. Once it is entralled, bring it to me and I can tame it for you.</i>',
	complete_description: 'Hally starts training the snake.<br/><i>There, that should do it.</i>',
	image: 	'units/snake-3979601_640.jpg',
	type: 	'quest',
	requirements:{
		quests:{
			clear_snakes: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'charmed snake',
			type: 		'items',
			target_id: 	'charmed_snake',
			amount: 	1,
		},
	},
	rewards:{
		snake_small: 		1,
	}
};

all_actions['teaching_healing'] = {
	name: 	'Teaching healing',
	description: 	'<i>With the skill you have learnt and the herb bundles, you should be able to teach rascals how to become herbalists.</i>',
	complete_description: '<i>See? That\'s how its done.</i>',
	image: 	'units/autumn-2837843_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'herb_garden',
	requirements:{
		quests:{
			look_for_herbs: 	'done',
			magic_herbs: 		'done',
		}
	},
	goals:{
		0:{
			name: 		'rascal',
			type: 		'items',
			target_id: 	'rascal',
			amount: 	1,
		},
		1:{
			name: 		'herb bundle',
			type: 		'items',
			target_id: 	'herb_bundle',
			amount: 	1,
		},
		2:{
			name: 		'coins',
			type: 		'items',
			target_id: 	'coins',
			amount: 	100,
		},
	},
	rewards:{
		herbalist: 				1,
		recipe_herbalist: 		1,
	}
};



all_actions['brewing_potions'] = {
	name: 	'Brewing potions',
	description: 	'<i>I can teach you how to make simple potions.<br/>Bring me a jug and some sage.</i>',
	complete_description: '<i>See? That\'s how it\'s done.</i>',
	image: 	'items/drank-ga420413eb_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'herb_garden',
	requirements:{
		quests:{
			culling_thieves: 		'done',
		}
	},
	goals:{
		0:{
			name: 		'jug',
			type: 		'items',
			target_id: 	'jug',
			amount: 	1,
		},
		1:{
			name: 		'sage',
			type: 		'items',
			target_id: 	'sage',
			amount: 	10,
		},
	},
	rewards:{
		recipe_health_potion: 		1,
	}
};

all_actions['lifebloom'] = {
	name: 	'lifeblooms',
	description: 	'<i>I can teach you to heal you allies over time.<br/>Bring me some health potions.</i>',
	complete_description: '<i>See? That\'s how it\'s done.</i>',
	image: 	'abilities/background-2612256_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'herb_garden',
	requirements:{
		quests:{
			brewing_potions: 		'done',
		}
	},
	goals:{
		0:{
			name: 		'health potions',
			type: 		'items',
			target_id: 	'health_potion',
			amount: 	5,
		},
	},
	rewards:{
		lifebloom: 		1,
	}
};

all_actions['explore_bush'] = {
	name: 	'Explore bushes',
	image: 	'locations/leaves-3560509_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			clear_snakes: 	'accepted',
		}
	},
	possible_encounters:{
		snake:{
			chance: 	75,
			min_wave: 	0,
			max_wave: 	1,
			type: 		'combat',
			units:{
				snake_small:{
					min: 		1,
					max: 		1,
					level: 		1,
				}
			}
		},
		snake_2:{
			chance: 	25,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				snake_small:{
					min: 		1,
					max: 		2,
					level: 		2,
				}
			},
			requirements:{
				quests:{
					clear_snakes: 	'done',
				}
			},
		},
		snake_3:{
			chance: 	25,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				snake_small:{
					min: 		1,
					max: 		3,
					level: 		3,
				}
			},
			requirements:{
				quests:{
					charm_snake: 	'done',
				}
			},
		},
		/*spider_leaf:{
			chance: 	50,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				spider_leaf:{
					min: 		2,
					max: 		4,
				}
			},
			requirements:{
				quests:{
					clear_snakes: 	'done',
				}
			},
		},*/
		nothing:{
			chance: 	20,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'Empty bush',
			description: 'There is nothing here.',
			rewards:{
			}
		},
		sage:{
			chance: 	10,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'Sage',
			description: 'You found some sage.',
			rewards:{
				sage:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				quests:{
					look_for_herbs: 	'accepted',
				}
			},
		},
		sage_2:{
			chance: 	20,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'Sage',
			description: 'You found some sage.',
			rewards:{
				sage:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				quests:{
					look_for_herbs: 	'accepted',
				}
			},
		},
		rosemary:{
			chance: 	5,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'rosemary',
			description: 'You found some rosemary.',
			rewards:{
				rosemary:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				quests:{
					look_for_herbs: 	'accepted',
				}
			},
		},
		/*magic_herbs:{
			chance: 	30,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'Leaves',
			description: 'You found some leaves touched by fae magic!',
			rewards:{
				fae_touched_leaves:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				items:{
					fae_touched_leaves:{
						max_owned: 		5,
					}
				},
				quests:{
					magic_herbs: 	'busy',
				}
			},
		},*/
	}
};

all_actions['garden_spiders'] = {
	name: 	'Leaf spider',
	image: 	'units/spider-6930567_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			clear_snakes: 	'done',
		}
	},
	possible_encounters:{
		spider_leaf:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				spider_leaf:{
					min: 		1,
					max: 		1,
					level: 		5,
				}
			},
			requirements:{
				quests:{
					clear_snakes: 	'done',
				}
			},
		},
		/*rosemary:{
			chance: 	10,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'rosemary',
			description: 'You found some rosemary.',
			rewards:{
				rosemary:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				quests:{
					look_for_herbs: 	'accepted',
				}
			},
		},*/
		magic_herbs:{
			chance: 	50,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'Leaves',
			description: 'You found some leaves touched by fae magic!',
			rewards:{
				fae_touched_leaves:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				items:{
					fae_touched_leaves:{
						max_owned: 		5,
					}
				},
				quests:{
					magic_herbs: 	'busy',
				}
			},
		},
	}
};

all_actions['spawned_rosemary'] = {
	name: 	'Rosemary',
	image: 	'items/rosemary-1409060_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			look_for_herbs: 	'accepted',
		}
	},
	possible_encounters:{
		rosemary:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'rosemary',
			description: 'You found some rosemary.',
			rewards:{
				rosemary:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

all_actions['spawned_sage'] = {
	name: 	'sage',
	image: 	'items/sage-1544883_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			look_for_herbs: 	'accepted',
		}
	},
	possible_encounters:{
		sage:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'sage',
			description: 'You found some sage.',
			rewards:{
				sage:{
					min: 		1,
					max: 		1,
				}
			},
		},
	}
};

all_actions['spawn_bushes'] = {
	name: 	'spawn_bushes',
	image: 	'locations/garden-5385995_640.jpg',
	type: 	'spawner',
	spawns: ['explore_bush','garden_spiders','spawned_rosemary','spawned_sage'],
	spawn_time: 	global_cooldown * 10,
	//lifetime: 		global_cooldown	* 1,
	max_spawns: 	10,
	min_spawns: 	4,
	requirements:{
		quests:{
			clear_snakes: 	'accepted',
		}
	},
	spawn_chances:{
		explore_bush: 		100,
		garden_spiders: 	60,
		spawned_rosemary: 	5,
		spawned_sage: 		10,
	}
};