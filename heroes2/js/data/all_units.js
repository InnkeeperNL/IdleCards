var all_units = {
	
	
	bandit_healer:{
		name: 		'bandit healer',
		image: 		'units/red-head-4211318_640.jpg',
		subtypes: 	['bandit_healer','bandit','human','creature'],
		role: 		'mental',
		intellect: 	7,
		max_hp: 	25,
		abilities:{
			antidote:{
				chance: 	100,
			},
			heal:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		75,
		loot:{
			coins:{
				chance: 	100,
				min: 		5,
				max: 		10,
			},
			yarn:{
				chance: 	10,
				min: 		1,
				max: 		2,
			}
		},
		favorite_rows:{
			min: 	1,
			max: 	2
		}
	},
	bear:{
		name: 		'bear',
		image: 		'units/brown-bear-giant-5352032_640.jpg',
		subtypes: 	['bear','animal','creature'],
		role: 		'tank',
		strength: 	8,
		max_hp: 	150,
		armor: 		50,
		abilities:{
			bite:{
				chance: 	100,
			},
			claw:{
				chance: 	100,
			},
		},
		loot_chance: 		75,
		loot:{
			hide:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			salmon:{
				chance: 	10,
				min: 		1,
				max: 		1,
			}
		},
		favorite_rows:{
			min: 	2,
			max: 	3
		}
	},
	boar:{
		name: 		'boar',
		image: 		'units/animal-6897394_640.jpg',
		subtypes: 	['boar','animal','creature'],
		role: 		'basic',
		strength: 	6,
		max_hp: 	60,
		abilities:{
			charge:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		75,
		loot:{
			pork:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			hide:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
		},
	},
	big_rat:{
		name: 		'giant rat',
		image: 		'units/mouse-5306026_640.jpg',
		subtypes: 	['rat','giant_rat','animal','creature'],
		role: 		'effect',
		strength: 	4,
		max_hp: 	30,
		big: 		false,
		abilities:{
			bite:{
				chance: 	100,
			},
			claw:{
				chance: 	100,
			},
		},
		loot_chance: 		100,
		loot:{
			apple:{
				chance: 	100,
				min: 		1,
				max: 		2,
			},
		}
	},
	cat:{
		name: 		'cat',
		image: 		'units/cat-6463284_640.jpg',
		subtypes: 	['cat','animal','creature'],
		role: 		'effect',
		strength: 	2,
		max_hp: 	10,
		dodge: 		10,
		big: 		false,
		abilities:{
			bite:{
				chance: 	100,
			},
			claw:{
				chance: 	100,
			},
		},
		loot_chance: 		100,
		loot:{
		}
	},
	corrupter:{
		name: 		'Corrupter',
		description: 	'Corrupters can curse enemies.',
		image: 		'units/mysterious-5925140_640.jpg',
		subtypes: 	['human','corrupter','creature'],
		role: 		'effect',
		intellect: 	8,
		max_hp: 	25,
		abilities:{
			corrupt:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		10,
			},
			yarn:{
				chance: 	50,
				min: 		2,
				max: 		5,
			},
		},
		favorite_rows:{
			min: 	1,
			max: 	2
		}
	},
	crow:{
		name: 		'Crow',
		description: 	'A black bird.',
		image: 		'units/common-raven-4010290_640.jpg',
		subtypes: 	['animal','crow','creature'],
		role: 		'basic',
		strength: 	2,
		max_hp: 	20,
		dodge: 		50,
		small: 		true,
		abilities:{
			regenerate:{
				chance: 	100,
			},
			fly:{
				chance: 	100,
			},
			claw:{
				chance: 	100,
			},

		},
		loot_chance: 		50,
		loot:{
			feather:{
				chance: 	100,
				min: 		2,
				max: 		5,
			},
			yarn:{
				chance: 	50,
				min: 		1,
				max: 		3,
			},
		},
	},
	deer:{
		name: 		'deer',
		image: 		'units/roe-deer-g90e584c17_640.jpg',
		subtypes: 	['deer','animal','creature'],
		role: 		'basic',
		strength: 	6,
		max_hp: 	50,
		dodge: 		50,
		abilities:{
			charge:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		75,
		loot:{
			venison:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			hide:{
				chance: 	50,
				min: 		1,
				max: 		2,
			},
		},
	},
	druid:{
		name: 		'druid',
		description: 	'Druids can heal their allies and attack.',
		image: 		'units/druid-1950104_640.jpg',
		subtypes: 	['human','druid','creature'],
		role: 		'basic',
		strength: 	4,
		intellect: 	4,
		max_hp: 	50,
		abilities:{
			lifebloom:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			sage:{
				chance: 	10,
				min: 		1,
				max: 		1,
			},
			rosemary:{
				chance: 	5,
				min: 		1,
				max: 		1,
			},
			yarn:{
				chance: 	5,
				min: 		1,
				max: 		1,
			},
			old_cloak:{
				chance: 	2,
				min: 		1,
				max: 		0,
			}
		},
		favorite_rows:{
			min: 	1,
			max: 	1
		}
	},
	
	farmer:{
		name: 		'farmer',
		image: 		'units/labor-1406652_640.jpg',
		subtypes: 	['human','farmer','creature'],
		role: 		'basic',
		strength: 	3,
		intellect: 	3,
		max_hp: 	50,
		abilities:{
			smash:{
				chance: 	100,
			},
			heal:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			barley:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			cucumber:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			egg:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			flax:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			hops:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			lettuce:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			onion:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			potato:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			sugarcane:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			tomato:{
				chance: 	100,
				min: 		1,
				max: 		5,
			},
			wheat:{
				chance: 	200,
				min: 		1,
				max: 		5,
			}
		},
	},
	fisherman:{
		name: 		'fisherman',
		image: 		'units/fisherman-5970480_640.jpg',
		subtypes: 	['human','fisherman','creature'],
		role: 		'basic',
		strength: 	5,
		max_hp: 	50,
		abilities:{
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			yarn:{
				chance: 	100,
				min: 		1,
				max: 		2,
			},
			net:{
				chance: 	5,
				min: 		1,
				max: 		1,
			},
			perch:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			reeds:{
				chance: 	100,
				min: 		1,
				max: 		1,
			}
		},
	},
	guard:{
		name: 		'guard',
		image: 		'units/knight-5830752_640.jpg',
		subtypes: 	['human','guard','creature'],
		role: 		'tank',
		strength: 	5,
		max_hp: 	50,
		armor: 		20,
		base_aggro: 10,
		abilities:{
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		0,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		10,
			},
		}
	},
	guardstone:{
		name: 		'guardstone',
		image: 		'units/standing-stones-4414684_640.jpg',
		subtypes: 	['structure','stone'],
		role: 		'tank',
		intellect: 	5,
		max_hp: 	50,
		armor: 		200,
		base_aggro: 20,
		abilities:{
			lifebloom:{
				chance: 	100,
			},
		},
		loot_chance: 		0,
		loot:{
			pebble:{
				chance: 	100,
				min: 		1,
				max: 		10,
			},
			stone:{
				chance: 	25,
				min: 		1,
				max: 		4,
			},
		},
		favorite_rows:{
			min: 	2,
			max: 	3
		}
	},
	
	hay_bale:{
		name: 		'hay bale',
		image: 		'units/bale-3026360_640.jpg',
		subtypes: 	['flammable','hay_bale','structure'],
		role: 		'tank',
		intellect: 	5,
		max_hp: 	20,
		armor: 		50,
		base_aggro: 1,
		abilities:{
			protect:{
				chance: 	100,
			},
		},
		loot_chance: 		0,
		always_drop: 		true,
		loot:{
			hay:{
				chance: 	100,
				min: 		2,
				max: 		6,
			},
		},
	},
	herbalist:{
		name: 		'herbalist',
		description: 	'Herbalists can heal their allies.',
		image: 		'units/autumn-2837843_640.jpg',
		subtypes: 	['human','herbalist','creature'],
		role: 		'mental',
		intellect: 	5,
		max_hp: 	50,
		base_aggro: 5,
		abilities:{
			antidote:{
				chance: 	100,
			},
			heal:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		0,
		loot:{
			sage:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			rosemary:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
		}
	},
	hunter:{
		name: 		'hunter',
		description: 	'Armed with a bow.',
		image: 		'units/hunter-g9d6db245f_640.jpg',
		subtypes: 	['human','hunter','creature'],
		role: 		'effect',
		strength: 	5,
		max_hp: 	50,
		base_aggro: 5,
		abilities:{
			shoot:{
				chance: 	100,
			},
		},
		loot_chance: 		0,
		always_drop: 		true,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
			hide:{
				chance: 	50,
				min: 		1,
				max: 		2,
			},
			yarn:{
				chance: 	50,
				min: 		1,
				max: 		2,
			},
		}
	},
	
	lumberjack:{
		name: 		'lumberjack',
		description: 	'A sturdy unit that can use a simple yet powerful axe attack.',
		image: 		'units/wood-4248997_640.jpg',
		subtypes: 	['human','lumberjack','creature'],
		role: 		'basic',
		strength: 	5,
		max_hp: 	50,
		base_aggro: 10,
		abilities:{
			chop:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		75,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
			firewood:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
			lumber:{
				chance: 	25,
				min: 		1,
				max: 		1.1,
			},
			rusty_axe:{
				chance: 	5,
				min: 		1,
				max: 		1,
			},
		}
	},
	rascal:{
		name: 		'rascal',
		description: 	'A young boy that can throw rocks.',
		image: 		'units/scarf-3339049_640.jpg',
		subtypes: 	['human','rascal','creature','shady'],
		role: 		'effect',
		strength: 	2,
		max_hp: 	25,
		dodge: 		20,
		base_aggro: 5,
		abilities:{
			throw_pebbles: {
				chance: 	100,
			},
		},
		loot_chance: 		50,
		//always_drop: 		true,
		loot:{
			coins:{
				chance: 	100,
				min: 		5,
				max: 		10,
			},
			pebble:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			apple:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			old_scarf:{
				chance: 	10,
				min: 		1,
				max: 		0,
			},
		}
	},
	rat:{
		name: 		'rat',
		image: 		'units/rat-871089_640.jpg',
		subtypes: 	['rat','animal','creature'],
		role: 		'effect',
		strength: 	2,
		max_hp: 	10,
		small: 		true,
		abilities:{
			claw: {
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			apple:{
				chance: 	10,
				min: 		1,
				max: 		3,
			},
			pebble:{
				chance: 	50,
				min: 		1,
				max: 		5,
			},
		}
	},
	rat_field:{
		name: 		'rat',
		image: 		'units/cute-3284412_640.jpg',
		subtypes: 	['rat','rat_field','animal','creature'],
		role: 		'effect',
		strength: 	2,
		max_hp: 	10,
		small: 		true,
		abilities:{
			claw: {
				chance: 	100,
			},
			disease:{
				chance: 	100,
			}
		},
		loot_chance: 		50,
		loot:{
			barley:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
			flax:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
			hops:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
			wheat:{
				chance: 	100,
				min: 		1,
				max: 		3,
			},
		}
	},
	ruffian:{
		name: 		'ruffian',
		image: 		'units/man-66940_640.jpg',
		subtypes: 	['human','ruffian','creature'],
		role: 		'tank',
		strength: 	5,
		max_hp: 	50,
		abilities:{
			taunt:{
				chance: 	100,
			},
			smash: {
				chance: 	100,
			},
			attack: {
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			yarn:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			jug:{
				chance: 	20,
				min: 		1,
				max: 		1,
			},
			hideout_map:{
				chance: 	10,
				min: 		1,
				max: 		0,
				requirements:{
					items:{
						hideout_map:{
							max_owned: 		1,
						}
					},
					quests:{
						find_hideout: 	'busy',
					}
				},
			},
		},
		favorite_rows:{
			min: 	2,
			max: 	3
		}
	},
	shaman:{
		name: 		'shaman',
		description: 	'Shamans can heal and attack.',
		image: 		'units/fantasy-2657122_640.jpg',
		subtypes: 	['human','shaman','creature'],
		role: 		'basic',
		intellect: 	5,
		strength: 	2,
		max_hp: 	50,
		loot_chance: 		0,
		abilities:{
			lifebloom:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		10,
			},
		},
	},
	shieldman:{
		name: 		'shieldman',
		image: 		'units/man-1694634_640.jpg',
		subtypes: 	['human','shieldman','creature'],
		role: 		'tank',
		strength: 	4,
		max_hp: 	50,
		armor: 		50,
		base_aggro: 10,
		abilities:{
			taunt:{
				chance: 	100,
			},
			attack:{
				chance: 	100,
			},
		},
		loot_chance: 		100,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		10,
			},
		},
	},
	skeleton:{
		name: 		'skeleton',
		image: 		'units/skeleton-1522620_640.jpg',
		subtypes: 	['skeleton','undead'],
		role: 		'effect',
		strength: 	5,
		max_hp: 	10,
		armor: 		400,
		abilities:{
			attack:{
				chance: 	100,
			},
		},
		/*fixed_loot_chance: 	25,*/
		loot_chance: 		0,
		loot:{
			bone:{
				chance: 	400,
				min: 		1,
				max: 		1,
			},
			skull:{
				chance: 	10,
				min: 		1,
				max: 		0,
			},
			jug:{
				chance: 	10,
				min: 		1,
				max: 		0,
			},
			rusty_knife:{
				chance: 	10,
				min: 		1,
				max: 		0,
			},
		},
	},
	snake_small:{
		name: 		'small snake',
		image: 		'units/snake-3979601_640.jpg',
		subtypes: 	['snake','animal','creature','snake_small'],
		role: 		'effect',
		strength: 	3,
		max_hp: 	30,
		abilities:{
			bite:{
				chance: 	100,
			},
			venom:{
				chance: 	100,
			},
		},
		/*fixed_loot_chance: 	25,*/
		loot_chance: 		0,
		loot:{
			snake_skin:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			poison:{
				chance: 	5,
				min: 		1,
				max: 		1,
			},
			charmed_snake:{
				chance: 	30,
				min: 		1,
				max: 		1,
				requirements:{
					items:{
						charmed_snake:{
							max_owned: 		1,
						}
					},
					quests:{
						charm_snake: 	'busy',
					}
				},
			},
			
		},
	},
	
	spider_leaf:{
		name: 		'leaf spider',
		image: 		'units/spider-6930567_640.jpg',
		subtypes: 	['spider_leaf','animal','creature'],
		role: 		'basic',
		strength: 	2,
		max_hp: 	10,
		small: 		true,
		abilities:{
			bite: {
				chance: 	100,
			},
			leech:{
				chance: 	100,
			}
		},
		loot_chance: 		50,
		loot:{
			rosemary:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			sage:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
		},
	},
	spider_barn:{
		name: 		'barn spider',
		image: 		'units/spider-3022078_640.jpg',
		subtypes: 	['spider_barn','animal','creature'],
		role: 		'basic',
		strength: 	5,
		max_hp: 	30,
		abilities:{
			bite: {
				chance: 	100,
			},
			leech:{
				chance: 	100,
			},
			venom:{
				chance: 	100,
			}
		},
		loot_chance: 		50,
		loot:{
			firewood:{
				chance: 	100,
				min: 		1,
				max: 		1,
			},
			yarn:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			spider_silk:{
				chance: 	10,
				min: 		1,
				max: 		1,
			},
		},
	},
	
	squirrel:{
		name: 		'squirrel',
		image: 		'units/squirrel-619968_640.jpg',
		subtypes: 	['squirrel','animal','creature'],
		role: 		'effect',
		strength: 	2,
		max_hp: 	10,
		dodge: 		20,
		small: 		true,
		abilities:{
			claw: {
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			apple:{
				chance: 	10,
				min: 		1,
				max: 		2,
			},
			acorn:{
				chance: 	100,
				min: 		1,
				max: 		7,
			},
		},
		favorite_rows:{
			min: 	2,
			max: 	3
		}
	},
	squirrel_tree:{
		name: 		'squirrel tree',
		image: 		'units/tree-1563358_640.jpg',
		subtypes: 	['tree','squirrel_tree'],
		role: 		'tank',
		max_hp: 	40,
		armor: 		100,
		abilities:{
			summon_squirrel: {
				chance: 	100,
			},
			regenerate:{
				chance: 	100,
			},
		},
		loot_chance: 		50,
		always_drop: 		true,
		loot:{
			lumber:{
				chance: 	100,
				min: 		1,
				max: 		1.2,
			},
		},
		favorite_rows:{
			min: 	1,
			max: 	1
		}
	},
	thief:{
		name: 		'thief',
		description: 	'A criminal armed with a knife.',
		image: 		'units/male-4894541_640.jpg',
		subtypes: 	['human','thief','creature','shady'],
		role: 		'effect',
		strength: 	3,
		max_hp: 	25,
		dodge: 		10,
		base_aggro: 5,
		abilities:{
			backstab: {
				chance: 	100,
			},
			attack: {
				chance: 	100,
			},
		},
		loot_chance: 		50,
		loot:{
			coins:{
				chance: 	100,
				min: 		1,
				max: 		2,
			},
			rusty_knife:{
				chance: 	5,
				min: 		1,
				max: 		1,
			},
			old_cloak:{
				chance: 	1,
				min: 		1,
				max: 		1,
			},
		},
		favorite_rows:{
			min: 	2,
			max: 	3
		}
	},
	tree:{
		name: 		'squirrel',
		image: 		'units/trees-3822149_640.jpg',
		subtypes: 	['tree'],
		role: 		'tank',
		max_hp: 	30,
		armor: 		100,
		base_aggro: 20,
		abilities:{
			regenerate:{
				chance: 	100,
			},
		},
		loot_chance: 		50,
		always_drop: 		true,
		loot:{
			lumber:{
				chance: 	75,
				min: 		1,
				max: 		2,
			},
			firewood:{
				chance: 	100,
				min: 		1,
				max: 		2,
			},
			apple:{
				chance: 	1,
				min: 		1,
				max: 		2,
			},
		},
		favorite_rows:{
			min: 	2,
			max: 	3
		}
	},
	
	
}