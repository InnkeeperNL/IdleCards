var all_abilities = {
	
	antidote:{
		name: 		'antidote',
		image: 		'items/wonderland-2895070_640.jpg',
		description: 	'Ability<br/><br/>Heal a random damaged ally<br/>Effect is based on intellect.',
		based_on: 		1,
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 2,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		has_buff: 		'poison',

		//effect
		effects:{
			0:{
				type: 			'remove_buff',
				buff_type: 		'poison',
				based_on: 		1,
				min_amount: 	1,
				max_amount: 	1,
				projectile: 	'sparkles',
				sound: 			'regen',
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
	attack:{
		name: 		'attack',
		image: 		'items/sword-5722144_640.jpg',
		description: 	'Ability<br/><br/>Deal damage to a random enemy<br/>Effect is based on strength.',
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 1,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	0.5,
				max_amount: 	1,
				projectile: 	'sword',
				sound: 			'blade_hit',
				aggro: 			1,
			}
		}
	},
	backstab:{
		name: 		'backstab',
		image: 		'abilities/fractal-19294_640.jpg',
		description: 	'Ability<br/><br/>Deal massive damage to an enemy. This attack cannot be evaded.<br/>Effect is based on strength.',
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 6,

		// targets
		target_side: 	'enemy',
		//target_damaged: false,
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	1.5,
				max_amount: 	3,
				projectile: 	'sword',
				sound: 			'blade_hit',
				aggro: 			1,
				cannot_evade: 	true,
			}
		}
	},
	
	chop:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 2.5,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		preferred_targets:{
			0:{
				chance: 	100,
				types: 		['tree'],
			}
		},

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	1,
				max_amount: 	2,
				projectile: 	'axe',
				sound: 			'blade_hit',
				aggro: 			1,
				bonus_amount:{
					0:{
						target_types: 	['tree'],
						bonus_factor: 	2,
					}
					
				}
			}
		}
	},
	claw:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 1,
		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	0.5,
				max_amount: 	1,
				projectile: 	'claw',
				sound: 			'scratch',
				aggro: 			1,
			}
		}
	},
	corrupt:{
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 4,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'buff',
				buff_type: 		'damage',
				buff_image: 	'curse',
				ticks: 			10,
				tick_time: 		global_cooldown * 1,
				based_on: 		'intellect',
				min_amount: 	0.2,
				max_amount: 	0.4,
				projectile: 	'voodoo',
				buff_projectile: 	undefined,
				sound: 			'curse',
				buff_sound: 	undefined,
				aggro: 			1,
				cannot_evade: 	true,
			}
		}
	},
	bite:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 2,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		preferred_targets:{
			0:{
				chance: 	100,
				types: 		['creature'],
			}
		},

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	1,
				max_amount: 	2,
				projectile: 	'bite',
				sound: 			'bite',
				aggro: 			1,
			}
		}
	},
	charge:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 3,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	1.5,
				max_amount: 	3,
				projectile: 	'hoof',
				sound: 			'smash',
				aggro: 			1,
			}
		}
	},
	disease:{
		based_on: 		'strength',
		// proc
		proc: 			'deal_damage',
		proc_chance: 	50,
		cooldown: 		global_cooldown * 1,

		// targets
		target_side: 	'any',
		target_origin: 	true,
		target_amount: 	1,
		min_target_hp: 	0,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'buff',
				buff_type: 		'damage',
				buff_image: 	'sick',
				ticks: 			5,
				tick_time: 		global_cooldown * 2,
				based_on: 		'strength',
				min_amount: 	0.15,
				max_amount: 	0.3,
				projectile: 	undefined,
				buff_projectile: 	undefined,
				sound: 			undefined,
				buff_sound: 	undefined,
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
	fly:{
		based_on: 		0,
		// proc
		proc: 			'basic',
		cooldown: 			global_cooldown * 5,
		initial_cooldown: 	global_cooldown * 4,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		target_self: 	true,

		//effect
		effects:{
			0:{
				type: 			'move',
				based_on: 		'max_hp',
				min_amount: 	1,
				max_amount: 	1,
				sound: 			'woosh',
				aggro: 			0,
				cannot_evade: 	true,
			}
		}
	},
	heal:{
		name: 		'heal',
		image: 		'items/wonderland-2895070_640.jpg',
		description: 	'Ability<br/><br/>Heal a damaged ally<br/>Effect is based on intellect.',
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 4,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		'intellect',
				min_amount: 	1,
				max_amount: 	2,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
	heal_all:{
		name: 		'heal all',
		image: 		'items/wonderland-2895070_640.jpg',
		description: 	'Ability<br/><br/>Heal a damaged ally<br/>Effect is based on intellect.',
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 4,

		// targets
		target_side: 	'ally',
		target_amount: 	9,
		min_target_hp: 	1,
		target_damaged: true,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		'intellect',
				min_amount: 	1,
				max_amount: 	2,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
	healing_light:{
		name: 		'healing light',
		image: 		'abilities/investment-5241253_640.jpg',
		description: 	'Ability<br/><br/>Heal a damaged ally by a small amount<br/>Effect is based on intellect.',
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 1,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		'intellect',
				min_amount: 	0.25,
				max_amount: 	0.5,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
	
	heal_2:{
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 2,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		1,
				min_amount: 	1,
				max_amount: 	3,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0,
				cannot_evade: 	true,
			}
		}
	},
	leech:{
		based_on: 		'max_hp',
		// proc
		proc: 			'deal_damage',
		based_on_damage: true,
		cooldown: 		global_cooldown * 1,

		// targets
		target_side: 	'ally',
		target_self: 	true,
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,

		//effect
		effects:{
			0:{
				type: 			'healing',
				can_be_zero: 	true,
				based_on: 		'max_hp',
				min_amount: 	1,
				max_amount: 	1,
				/*projectile: 	'none',
				sound: 			'n',*/
				aggro: 			0,
				cannot_evade: 	true,
			}
		}
	},
	lifebloom:{
		name: 			'lifebloom',
		image: 			'abilities/background-2612256_640.jpg',
		description: 	'Ability<br/><br/>Heals an ally over time<br/>Effect is based on intellect.',
		based_on: 		'intellect',
		
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 6,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		//target_damaged: true,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'buff',
				buff_type: 		'healing',
				buff_image: 	'healing',
				ticks: 			10,
				tick_time: 		global_cooldown * 1,
				based_on: 		'intellect',
				min_amount: 	0.15,
				max_amount: 	0.3,
				projectile: 	'healing',
				buff_projectile: 	undefined,
				sound: 			'regen',
				buff_sound: 	undefined,
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
	protect:{
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 2,

		// targets
		target_side: 	'ally',
		target_amount: 	1,
		min_target_hp: 	1,
		target_self: 	false,

		//effect
		effects:{
			0:{
				type: 			'buff',
				buff_type: 		'armor',
				buff_image: 	'shield',
				ticks: 			1,
				tick_time: 		global_cooldown * 5,
				based_on: 		'intellect',
				min_amount: 	10,
				max_amount: 	10,
				projectile: 	'shield',
				buff_projectile: 	undefined,
				sound: 			'shield',
				buff_sound: 	undefined,
				aggro: 			0.1,
			}
		}
	},
	protect_all:{
		based_on: 		'intellect',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 6,

		// targets
		target_side: 	'ally',
		target_amount: 	10,
		min_target_hp: 	1,
		target_self: 	false,

		//effect
		effects:{
			0:{
				type: 			'buff',
				buff_type: 		'armor',
				buff_image: 	'shield',
				ticks: 			1,
				tick_time: 		global_cooldown * 5,
				based_on: 		'intellect',
				min_amount: 	10,
				max_amount: 	10,
				projectile: 	'shield',
				buff_projectile: 	undefined,
				sound: 			'shield',
				buff_sound: 	undefined,
				aggro: 			0.1,
			}
		}
	},
	regenerate:{
		based_on: 		'max_hp',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 6,

		// targets
		target_side: 	'ally',
		target_self: 	true,
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		'max_hp',
				min_amount: 	0.1,
				max_amount: 	0.2,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0,
				cannot_evade: 	true,
			}
		}
	},
	regenerate_5:{
		based_on: 		'max_hp',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 5,

		// targets
		target_side: 	'ally',
		target_self: 	true,
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		1,
				min_amount: 	4,
				max_amount: 	6,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0,
				cannot_evade: 	true,
			}
		}
	},
	regenerate_20:{
		based_on: 		'max_hp',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 5,

		// targets
		target_side: 	'ally',
		target_self: 	true,
		target_amount: 	1,
		min_target_hp: 	1,
		target_damaged: true,

		//effect
		effects:{
			0:{
				type: 			'healing',
				based_on: 		1,
				min_amount: 	15,
				max_amount: 	25,
				projectile: 	'healing',
				sound: 			'regen',
				aggro: 			0,
				cannot_evade: 	true,
			}
		}
	},
	shoot:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 1,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		preferred_targets:{
			0:{
				chance: 	100,
				types: 		['creature'],
			}
		},

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','ranged','projectile'],
				based_on: 		'strength',
				min_amount: 	0.5,
				max_amount: 	1,
				projectile: 	'arrow',
				sound: 			'arrow',
				aggro: 			1,
			}
		}
	},
	smash:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 3,

		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','melee'],
				based_on: 		'strength',
				min_amount: 	1.5,
				max_amount: 	3,
				projectile: 	'sword',
				sound: 			'smash',
				aggro: 			1,
			}
		}
	},
	summon_squirrel:{
		based_on: 		10,
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 6,

		perform_checks:{
			0:{
				type: 		'free_slots',
				side: 		'ally',
				min: 		1,
			}
		},

		// targets
		target_side: 	'ally',
		target_self: 	true,
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'summon',
				cannot_evade: 	true,
				units:{
					squirrel:{
						min: 		1,
						max: 		1,
					}
				}
			}
		}
	},
	taunt:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 5,
		initial_cooldown: 0,
		// targets
		target_side: 	'ally',
		target_self: 	true,
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'aggro',
				subtypes: 		['aggro'],
				based_on: 		'max_hp',
				min_amount: 	0.5,
				max_amount: 	1,
				projectile: 	'scream',
				sound: 			'rage',
				aggro: 			1,
			}
		}
	},
	throw_pebble:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 0.5,
		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','ranged','projectile'],
				based_on: 		'strength',
				min_amount: 	0.25,
				max_amount: 	0.5,
				projectile: 	'pebble',
				sound: 			'woosh',
				aggro: 			1,
			}
		}
	},
	throw_pebbles:{
		name: 		'throw pebbles',
		image: 		'items/stones-4376813_640.jpg',
		description: 	'Ability<br/><br/>Throw 5 pebbles at random enemies<br/>Effect is based on strength.',
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 5,
		proc_amount: 	5,
		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,
		ignore_player_target: 	true,
		ignore_aggro: 			true,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','ranged','projectile'],
				based_on: 		'strength',
				min_amount: 	0.1,
				max_amount: 	0.5,
				projectile: 	'pebble',
				sound: 			'woosh',
				aggro: 			1,
			}
		}
	},
	throw_stone:{
		based_on: 		'strength',
		// proc
		proc: 			'basic',
		cooldown: 		global_cooldown * 1,
		// targets
		target_side: 	'enemy',
		target_amount: 	1,
		min_target_hp: 	1,

		//effect
		effects:{
			0:{
				type: 			'damage',
				subtypes: 		['physical','ranged','projectile'],
				based_on: 		'strength',
				min_amount: 	0.5,
				max_amount: 	1,
				projectile: 	'pebble',
				sound: 			'woosh',
				aggro: 			1,
			}
		}
	},
	venom:{
		name: 			'venom',
		description: 	'Coat your weapons with poison.',
		image: 			'items/bottle-1481599_640.jpg',
		based_on: 		'strength',
		passive: 		true,
		// proc
		proc: 			'deal_damage',
		cooldown: 		global_cooldown * 1,

		// targets
		target_side: 	'any',
		target_origin: 	true,
		target_amount: 	1,
		min_target_hp: 	0,
		target_not_types: 	['structure'],
		target_types: 	['creature'],

		//effect
		effects:{
			0:{
				type: 			'buff',
				buff_type: 		'damage',
				buff_image: 	'poison',
				ticks: 			5,
				tick_time: 		global_cooldown * 0.5,
				based_on: 		'strength',
				min_amount: 	0.15,
				max_amount: 	0.3,
				projectile: 	undefined,
				buff_projectile: 	undefined,
				sound: 			undefined,
				buff_sound: 	undefined,
				aggro: 			0.1,
				cannot_evade: 	true,
			}
		}
	},
}

$.each(all_abilities, function(ability_id, ability_info){
	if(ability_info['cooldown'] == undefined)
	{
		ability_info['cooldown'] = global_cooldown;
	}
	if(ability_info['initial_cooldown'] == undefined)
	{
		ability_info['initial_cooldown'] = 0;
	}
	
	if(all_items[ability_id] == undefined && ability_info['name'] != undefined)
	{
		all_items[ability_id] = {
			name: 			ability_info['name'],
			image: 			ability_info['image'],
			description: 	ability_info['description'],
			type: 			'ability',
			value: 			0,
			is_ability: 	true,
		}
	}

});