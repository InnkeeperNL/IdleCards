var available_cards = {


	/*bees_nest:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['living','defense','summons','proc_on_death'],
		name: 		'bees nest',
		color: 		'189e06',
		rarity: 	2,
		no_adjacent_ally_creature: true,
		place_on_empty_board: true,
		card_priority: 4,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'apiary-1867537_1280.jpg',
		text: 		'Summons a bee when it takes damage.<br/><br/>Summons 3 bees when destroyed.',
		strength: 	false,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'summon',
					proc_on_death: 	false,
					card_id: 		{
						bee: 		1,
					},
					effect: 		1,
			},
			1:{
					proc: 			'own_death',
					type: 			'summon',
					card_id: 		{
						bee: 		1,
					},
					effect: 		3,
			},
		},
		recipe_1: 	'wall',
		recipe_2: 	'natures_blessing',
	},*/

	
	
	
	


	lava_shell_turtle:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','turtle','lava','armored','animal','living','defense','offense'],
		name: 		'lava shell turtle',
		color: 		'578227',
		rarity: 	4,
		favorite_col: 3,
		has_adjacent_enemy: true,
		damage_reduction: 	1,
		card_priority: 3,
		ai_strength: 2,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'turtle-2416664_1280.jpg',
		text: 		'Reduces damage taken by 1. Deals 1 damage to all adjacent enemies at the start of each turn.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					target: 		'adjacent',
					min_hp: 		1,
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		1
			}
		},
		recipe_1: 	'huge_turtle',
		recipe_2: 	'mountain',
	},
	
	polar_bear:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','bear','living','offense','muscle'],
		name: 		'polar bear',
		color: 		'337df4',
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'polar-bear-404314_640.jpg',
		text: 		'<i>Rawr!</i>',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'bear',
		recipe_2: 	'cleansing_water',
	},
	wooly_mammoth:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['animal','mammoth','living','offense','muscle'],
		name: 		'wooly mammoth',
		color: 		'337df4',
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	5,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2785017_1280.jpg',
		text: 		'<i>Pweeeeep!</i>',
		strength: 	6,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'polar_bear',
		recipe_2: 	'time_trap',
	},
	
	blue_cat_warrior:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		name: 		'blue cat warrior',
		subtypes: 	['human','cat','warrior','living','offense','ranged','buff_this','moves'],
		color: 		'337df4',
		rarity: 	3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	4,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'manga-3399019_640.jpg',
		text: 		'When destroying any unit, it moves to a random enemy and attacks again.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill',
					target: 		'self',
					target_amount: 	1,
					min_hp: 		1,
					target_unique: 	true,
					target_side: 	'ally',
					effects:{
						0:{
							type: 			'move_to_empty',
							move_to_side: 	'enemy',
							move_to_adjacent: true,
						},
						1:{
							type: 			'attack',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
							
						}
					}
			},
		},
		recipe_1: 	'frost_knight',
		recipe_2: 	'holy_blade',
	},
	
	deamon:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','deamon','living','offense','do_not_buff','muscle'],
		name: 		'deamon',
		color: 		'f43232',
		has_adjacent_enemy: true,
		one_hit_kill: true,
		card_priority: 3,
		burning: 1,
		in_play_value: -2,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'demon-454476_640.jpg',
		text: 		'Burns, dealing 1 damage to itself every turn.',
		strength: 	5,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'furnace',
		recipe_2: 	'candle',
	},
	fighter:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','muscle'],
		name: 		'fighter',
		color: 		'ff8902',
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'fighter-3060231_640.jpg',
		text: 		'<i>Rhaaa!</i>',
		strength: 	4,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'blade_warrior',
		recipe_2: 	'discarded_weapon',
	},
	earth_steed:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','horse','living','offense','moves','ranged'],
		name: 		'earth steed',
		color: 		'ff8902',
		rarity: 	3,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 4,
					yellow: 0
		},
		image: 		'horse-3139429_640.jpg',
		text: 		'Moves to an enemy before attacking. Moves away from enemies after taking damage.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			1:{
					proc: 			'take_damage',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					proc_on_death: 	false,
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'butterfly_hunter',
		recipe_2: 	'surprise_attack',
	},
	
	exotic_faithkeeper:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['human','living','defense'],
		name: 		'exotic faithkeeper',
		color: 		'ff8902',
		rarity: 	4,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 4,
					yellow: 0,
					colorless: 0
		},
		image: 		'harem-4371603_640.jpg',
		text: 		'Stuns a random enemy creature for 2 turns every turn.',
		flavor: 	'Have faith in peace.',
		strength: 	0,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'stun',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			},
		},
		recipe_1: 	'sand_warrior',
		recipe_2: 	'sand_warrior',
	},
	sand_warrior:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['human','living','offense','moves','ranged'],
		name: 		'sand warrior',
		color: 		'ff8902',
		rarity: 	3,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 4,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-2861079_640.jpg',
		text: 		'Moves directly forward before attacking.',
		flavor: 	'They can travel for days without any support.',
		strength: 	3,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					specific_slot: 	'directly_in_front',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'butterfly_hunter',
		recipe_2: 	'butterfly_hunter',
	},
	
	desert_squirrel:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','living','offense','squirrel','moves'],
		name: 		'desert squirrel',
		color: 		'ff8902',
		rarity: 	1,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		needs_friendly_creatures: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'squirrel-3614253_640.jpg',
		text: 		'Gains one strength when damaging a hero.<br/><br/>Moves away from enemies if it has an adjacent enemy each turn.',
		flavor: 	'Ouch. Ouch. OUCH!',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'damage_hero',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					specific_slot: 	'random',
					has_adjacent_enemy: true,
					move_to_side: 	'enemy',
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'rock_crystal',
		recipe_2: 	'wood_trinket',
	},
	desert_fox:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','living','offense','moves','fox'],
		name: 		'desert fox',
		color: 		'ff8902',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 4,
					yellow: 0,
					colorless: 0
		},
		image: 		'desert-fox-2444230_640.jpg',
		text: 		'Moves forward at the start of turn if there is no adjacent enemy.<br/><br/>Moves directly backwards if it has an adjacent enemy at the end of turn.',
		flavor: 	'I swear I saw two big ears.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'end_turn',
					type: 			'move_to_empty',
					specific_slot: 	'directly_behind',
					has_adjacent_enemy: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					specific_slot: 	'directly_in_front',
					has_adjacent_enemy: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'desert',
		recipe_2: 	'lion',
	},
	grey_fox:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','living','offense','moves','fox'],
		name: 		'grey fox',
		color: 		'ff8902',
		rarity: 	3,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 3,
		max_creatures_in_play: 6,
		stunned: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'south-american-gray-fox-4520121_640.jpg',
		text: 		'Can attack the turn it comes into play.<br/><br/>Moves towards an enemy when played.',
		flavor: 	'It came out of nowhere!',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'surprise_attack',
		recipe_2: 	'desert_fox',
	},
	
	giraffe:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','giraffe','living','defense','moves'],
		name: 		'giraffe',
		color: 		'ff8902',
		rarity: 	2,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0
		},
		image: 		'etosha-3533396_640.jpg',
		text: 		'Moves away from enemies after taking damage.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					proc_on_death: 	false,
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'desert',
		recipe_2: 	'lion',
	},
	
	lone_elephant:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['animal','elephant','living','offense','muscle'],
		name: 		'lone elephant',
		color: 		'ff8902',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 5,
					yellow: 0
		},
		image: 		'fantasy-2995326_640.jpg',
		text: 		'<i>Pweeeeep!</i>',
		strength: 	6,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'rock_crystal',
		recipe_2: 	'rage_potion',
	},
	
	hoplite:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','defense','muscle'],
		name: 		'hoplite',
		color: 		'eae717',
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'romans-60601_640.jpg',
		text: 		'',
		flavor: 	'In formation!',
		strength: 	2,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'peasant',
		recipe_2: 	'wall',
	},
	hardened_soldier:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','defense','offense','moves'],
		name: 		'hardened soldier',
		color: 		'eae717',
		rarity: 	3,
		has_adjacent_enemy: false,
		favorite_col: 4,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 5
		},
		image: 		'soldier-4518942_640.jpg',
		text: 		'Moves forward if it\'s hp is 3 or more.<br/><br/>Moves backwards if it\'s hp is 2 or less.<br/><br/>Heals itself by 1 if it\'s in the back column before moving.',
		flavor: 	'You have to know when to restreat.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'self',
					position: 		'ally_col',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
			},
			1:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					min_hp: 		3,
					target: 		'self',
					specific_slot: 	'directly_in_front',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
			},
			2:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					max_hp: 		2,
					target: 		'self',
					specific_slot: 	'directly_behind',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
			},
		},
		recipe_1: 	'knight',
		recipe_2: 	'knight',
	},
	
	golden_keeper:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['risky'],
		name: 		'golden keeper',
		color: 		'eae717',
		rarity: 	2,
		has_adjacent_enemy: true,
		needs_specific_ally: 'bank',
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'fantasy-3000308_1280.jpg',
		text: 		'When golden keeper comes into play, sacrifice a bank to give golden keeper +2/+3.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					target: 		'random',
					specific_target: 'bank',
					type: 			'destroy',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'increase_stats',
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect_strength: 2,
								effect_hp: 		3,
								target_side: 	'ally'
						},
					}
			},
		},
		recipe_1: 	'bank',
		recipe_2: 	'wall',
	},
	
	shield_maiden:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','defense','muscle'],
		name: 		'shield maiden',
		color: 		'eae717',
		rarity: 	2,
		has_adjacent_enemy: true,
		damage_reduction: 1,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 3,
					colorless: 0
		},
		image: 		'amazone-2743945_640.jpg',
		text: 		'Reduces damage taken by 1.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'hoplite',
		recipe_2: 	'masked_lady',
	},
	
	daughter_of_light:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','hero_hp','defense'],
		name: 		'daughter of light',
		color: 		'eae717',
		rarity: 	3,
		place_on_empty_board: false,
		card_priority: 2,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 3
		},
		image: 		'fantasy-3471481_1280.jpg',
		text: 		'Allied hero gains 1 hp whenever an ally creature enters play.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'ally_creature_summoned',
					origin_not_self: true,
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'court_lady',
		recipe_2: 	'golden_light',
	},
	
	royal_guard:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','defense','armored','knight','moves'],
		name: 		'royal guard',
		color: 		'eae717',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		damage_reduction: 1,
		card_priority: 3,
		in_play_value: 7,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 5,
					colorless: 0
		},
		image: 		'knight-1813084_640.jpg',
		text: 		'Reduces damage received by 1. Moves next to an enemy when any enemy attacks a hero.',
		strength: 	3,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_enemy_attacked_hero',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'knight',
		recipe_2: 	'court_lady',
	},
	knight:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','defense','armored','knight','muscle'],
		name: 		'knight',
		color: 		'eae717',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		damage_reduction: 1,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 5,
					colorless: 0
		},
		image: 		'knight-3397062_1280.jpg',
		text: 		'Reduces damage received by 1.',
		strength: 	4,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'hoplite',
		recipe_2: 	'bless',
	},
	heavy_knight:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','defense','armored','knight','muscle'],
		name: 		'heavy knight',
		color: 		'eae717',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		damage_reduction: 1,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 7,
					colorless: 0
		},
		image: 		'knight-3768107_640.jpg',
		text: 		'Reduces damage received by 1.',
		strength: 	6,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'knight',
		recipe_2: 	'bless',
	},
	heavy_cavalry:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','defense','armored','knight','moves'],
		name: 		'heavy cavalry',
		color: 		'eae717',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		damage_reduction: 1,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 8,
					colorless: 0
		},
		image: 		'warrior-3767330_640.jpg',
		text: 		'Reduces damage received by 1. Moves towards an enemy unit every turn.',
		strength: 	6,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'heavy_knight',
		recipe_2: 	'holy_blade',
	},
	
	frost_knight:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','human','knight','buff_this'],
		name: 		'frost knight',
		color: 		'337df4',
		rarity: 	2,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		has_most_adjacent: true,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	5,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'winter-3240112_640.jpg',
		text: 		'Reduces the strength of all adjacent enemies by 2 when destroying a unit.',
		strength: 	4,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill',
					type: 			'increase_strength',
					target: 		'adjacent',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'hoplite',
		recipe_2: 	'freeze',
	},
	
	whirling_archer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','human','ranged','moves'],
		name: 		'whirling archer',
		color: 		'eae717',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: false,
		suicidal: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 4,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'girl-3389555_640.jpg',
		text: 		'Moves to a free slot in your back column after attacking. Attacks an enemy unit in the same row every turn.',
		strength: 	2,
		max_hp: 	1,
		attack_type: 	'same_row',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'move_to_empty',
					specific_slot: 	'ally_col',
					target: 		'self',
					target_amount: 	2,
					target_unique: 	true,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'archer',
		recipe_2: 	'wormhole',
	},
	expert_fencer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','human','moves','ranged'],
		name: 		'expert fencer',
		color: 		'eae717',
		rarity: 	3,
		favorite_col: 3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 6
		},
		image: 		'woman-3277343_640.jpg',
		text: 		'Moves towards an enemy before attacking. When it is attacked, attacks.',
		strength: 	2,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true, 
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			1:{
					proc: 			'been_attacked',
					type: 			'attack',
					target: 		'self',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			}
		},
		recipe_1: 	'devout_swordman',
		recipe_2: 	'holy_blade',
	},
	
	
	privateer:{
		stats_version: 		2,
		forced_neutral: true,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','risky','neutral','ranged','moves'],
		name: 		'privateer',
		color: 		'eae717',
		rarity: 	4,
		place_on_empty_board: true,
		needs_friendly_creatures: false,
		needs_friendly_structures: false,
		card_priority: 5,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'ship-2202910_640.jpg',
		text: 		'Gains 1 attack and hp whenever it destroys any unit.<br/><br/>Moves to a random slot next to a unit every turn.<br/><br/>Enters the game neutral.',
		strength: 	2,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill',
					origin_not_self: true,
					type: 			'increase_stats',
					target: 		'self',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 1,
					effect_hp: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'any',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'expert_fencer',
		recipe_2: 	'locked_chest',
	},
	
	darkling:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','likes_discarding','muscle'],
		name: 		'darkling',
		color: 		'a31079',
		rarity: 	0,
		card_priority: 3,
		has_adjacent_enemy: true,
		min_enemy_hand_cards: 1,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'portrait-4558524_640.jpg',
		text: 		'When you play darkling, both players discard a card.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
				proc: 			'on_play',
				type: 			'discard_card',
				effect: 		1,
				target_side: 	'ally'
			},
			1:{
				proc: 			'on_play',
				type: 			'discard_card',
				effect: 		1,
				target_side: 	'enemy'
			}
		}
	},
	crow_witch:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','likes_discarding'],
		name: 		'crow witch',
		color: 		'a31079',
		rarity: 	1,
		card_priority: 3,
		has_adjacent_enemy: true,
		suicidal: true,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4683730_640.jpg',
		text: 		'When you play crow witch, add 2 dark crow cards to the enemy hand.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
				proc: 			'on_play',
				type: 			'add_card',
				effect: 		2,
				card_id: 		'dark_crow',
				target_side: 	'enemy'
			},
		}
	},
	dark_crow:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['animal','crow','flying','living'],
		name: 		'dark crow',
		color: 		'333',
		rarity: 	0,
		card_priority: 5,
		in_play_value: -1,
		suicidal: true,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'raven-988218_640.jpg',
		text: 		'When discarded, deals 2 damage to it\'s owner.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_discarded',
					type: 			'hero_hp',
					effect_count: 	1,
					effect: 		-2,
					target_side: 	'ally'
			},
			/*1:{
					proc: 			'own_death',
					type: 			'remove_card',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},*/
		}
	},
	gravekeeper:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','likes_death'],
		name: 		'gravekeeper',
		color: 		'a31079',
		rarity: 	4,
		card_priority: 3,
		needs_dead_creature: 3,
		do_not_reclaim_while_in_play: true,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 6,
					orange: 0,
					yellow: 0
		},
		image: 		'graveyard-1377300_640.jpg',
		text: 		'Sets it\'s strength and hp to the amount of creatures in your grave each turn.',
		strength: 	0,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'set_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'dead_ally_creatures',
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'set_hp',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'dead_ally_creatures',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'cemetary',
		recipe_2: 	'cemetary',
	},
	skeleton:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['undead','offense','muscle'],
		name: 		'skeleton',
		color: 		'a31079',
		rarity: 	0,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 0,
		suicidal: true,
		grave_cost_adjustment: -1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'skeleton-1522620_640.jpg',
		text: 		'This card\'s cost is not increased when it moves to the grave.',
		flavor: 	'Clackety Clack!',
		strength: 	2,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
		}
	},
	skulking_skeleton:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['undead','offense'],
		name: 		'skulking skeleton',
		color: 		'a31079',
		card_priority: 5,
		in_play_value: 0,
		uses_energy: true,
		energy: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'fantasy-3471272_1280.jpg',
		text: 		'Gains 1 energy when the enemy hero loses health, up to 3. Resurrects when it dies if it has at least 3 energy, consuming 3 energy.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'enemy_hero_lose_hp',
					type: 			'adjust_energy',
					target: 		'self',
					max_energy: 	2,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally',
			},
			1:{
					proc: 			'own_death',
					type: 			'resurrect',
					target: 		'self',
					min_energy: 	3,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'adjust_energy',
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		-3,
								target_side: 	'ally',
						},
					}
			},
			
		},
		recipe_1: 	'skeleton',
		recipe_2: 	'dark_visions',
	},
	wolf_tamer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living'],
		name: 		'wolf tamer',
		color: 		'189e06',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		needs_target: 1,
		card_priority: 5,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2498903_640.jpg',
		text: 		'Turns 1 neutral wolf into an ally on play.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'set_side',
					target: 		'random',
					specific_target: 'wolf',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'neutral',
					new_side: 		'ally'
			}
		},
		recipe_1: 	'wolf',
		recipe_2: 	'forest_elf',
	},
	beastmaster:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','offense'],
		name: 		'beastmaster',
		color: 		'189e06',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		needs_target: 1,
		card_priority: 5,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	7,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4241786_640.jpg',
		text: 		'Increases the strength and hp of a friendly animal by 1 at the start of turn.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_stats',
					target: 		'random',
					target_type: 	'creature',
					specific_target: 	'animal',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 1,
					effect_hp: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'caretaking_druid',
		recipe_2: 	'giant_growth',
	},
	
	wolf:{
		stats_version: 		2,
		forced_neutral: true,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','wolf','living','neutral','offense','muscle'],
		name: 		'wolf',
		color: 		'189e06',
		favorite_col: 3,
		has_adjacent_enemy: true,
		no_adjacent_ally: 	true,
		place_on_empty_board: false,
		suicidal: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'wolf-725380_640.jpg',
		text: 		'Enters the game neutral',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'overgrowth',
		recipe_2: 	'wood_trinket',
	},
	call_of_the_wolf:{
		stats_version: 		2,
		forced_neutral: true,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['defense','summons'],
		name: 		'call of the wolf',
		color: 		'189e06',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		place_on_empty_board: false,
		needs_friendly_creatures: false,
		max_creatures_in_play: 6,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'wolf-2018051_640.jpg',
		text: 		'Summons up to 3 neutral wolves.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'summon',
					card_id: 		{
						wolf: 	1
					},
					effect: 		3,
					target_side: 	'any',
			}
		},
		recipe_1: 	'wolf_tamer',
		recipe_2: 	'natures_blessing',
	},
	call_of_the_wild:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['defense','summons'],
		name: 		'call of the wild',
		color: 		'189e06',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		place_on_empty_board: false,
		needs_friendly_creatures: false,
		max_creatures_in_play: 1,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'monkey-4007399_640.jpg',
		text: 		'Fills the center column with random animals.<br/><br/>They are either neutral or allies.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'summon',
					summon_position: 	'center_col',
					card_id: 		{
						animal: 	1,
					},
					effect: 		6,
					specific_side: {
						ally: 		100,
						enemy: 		0,
						neutral: 	100
					}
			}
		},
		recipe_1: 	'monsoon',
		recipe_2: 	'natures_blessing',
	},
	
	call_rat:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['summons','defense'],
		name: 		'call rat',
		color: 		'a31079',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	false,
		place_on_empty_board: false,
		max_creatures_in_play: 8,
		card_priority: 5,
		grave_cost_adjustment: -1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'dark-2597058_1280.jpg',
		text: 		'Summons 1 rat next to target unit or in a random position if no adjacent slot is available.<br/><br/>This card\'s cost is not increased when it moves to the grave.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'summon',
					summon_position: 'adjacent',
					card_id: 		{
						rat: 	1
					},
					effect: 		1,
					target_side: 	'any',
					on_failure:{
						0:{
							type: 			'summon',
							card_id: 		{
								rat: 	1
							},
							effect: 		1,
							target_side: 	'any',
						}
					}
			},
			/*1:{
					proc: 			'on_cast',
					type: 			'reduce_mana',
					mana_chances:{
									purple: 1,
					},
					mana_amount: 	1,
					target_side: 		'ally',
					on_success:{
						0:{
								type: 			'unsummon',
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								target_side: 	'ally',
								effect: 		1
						}
					}
			},*/
		},
		recipe_1: 	'night_of_the_dead',
		recipe_2: 	'marsh',
	},
	rat:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['animal','rat','living'],
		name: 		'rat',
		color: 		'a31079',
		rarity: 	0,
		card_priority: 5,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'dark-2597058_1280.jpg',
		text: 		'<i>Squeek!</i>',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
		}
	},
	
	spring:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['healing','defense'],
		name: 		'spring',
		color: 		'189e06',
		//proc_from_grave: 'any_ally_creature_takes_damage',
		spell_target: 'creature',
		spell_auto_cast: 	true,
		needs_friendly_creatures: true,
		card_priority: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'nature-3396595_640.jpg',
		text: 		'Heals all ally creatures by 2.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
			/*1:{
					proc: 			'on_cast',
					type: 			'return_to_deck',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}*/
		},
		recipe_1: 	'nettle',
		recipe_2: 	'firtile_dirt',
	},
	stampede:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'stampede',
		color: 		'189e06',
		rarity: 	4,
		spell_target: 'creature',
		spell_auto_cast: 	true,
		needs_friendly_creatures: true,
		max_creatures_in_play: 5,
		card_priority: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	4,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'horses-4222501_640.jpg',
		text: 		'All creatures try to move forward. <br/>If they cannot, they deal damage equal to their strength to themselves.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'move_to_empty',
					target: 		'random',
					target_type: 	'creature',
					specific_slot: 	'in_front',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
					on_failure_from_target:{
						0:{
							type: 			'damage',
							target: 		'self',
							min_hp: 		1,
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							target_side: 	'any',
							effect: 		'target_strength',
						}
					}
				
			},
		},
		recipe_1: 	'growth_seeds',
		recipe_2: 	'fairy_warrior',
	},
	cat:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['animal','cat','living'],
		name: 		'cat',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'cat-2083492_640.jpg',
		text: 		'<i>Mew!</i>',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
		}
	},
	sheep:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['animal','sheep','living'],
		name: 		'sheep',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'sheep-690198_1920-2.jpg',
		text: 		'<i>Bah!</i>',
		strength: 	0,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
		}
	},
	/*bee:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['animal','bee','flying','living','moves'],
		name: 		'bee',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		in_play_value: -1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'bee-1726659_1280.jpg',
		text: 		'Moves next to an enemy unit before attacking.<br/>Dies after attacking.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'destroy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		}
	},*/
	bee:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['animal','bee','flying','living','moves'],
		name: 		'bee',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		in_play_value: -1,
		suicidal: true,
		place_on_empty_board: false,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'bee-1726659_1280.jpg',
		text: 		'Moves next to an enemy unit before attacking.<br/>Dies after attacking.<br/><br/>This card is removed from play when destroyed.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'destroy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			2:{
					proc: 			'own_death',
					type: 			'remove_card',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
		}
	},
	
	mushroom_soldier:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['living'],
		name: 		'mushroom soldier',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-2407142_640.jpg',
		text: 		'<i>-</i>',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
		}
	},
	
	shepherd:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','defense','summons','human'],
		name: 		'shepherd',
		color: 		'189e06',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'sheep-690198_1920-1.jpg',
		text: 		'Summons a sheep or a wolf in a random empty slot at the start of each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'summon',
					card_id: 		{
						sheep: 	10,
						wolf: 	1
					},
					effect: 		1,
			}
		},
		recipe_1: 	'wolf',
		recipe_2: 	'wolf_tamer',
	},
	leaf_elemental:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','defense','resurrects'],
		name: 		'leaf elemental',
		color: 		'189e06',
		rarity: 	3,
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 3,
		suicidal: true,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'forest-of-dreams-2920320_640.jpg',
		text: 		'Has an 80% chance of resurrecting when it dies.',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					chance: 		80,
					type: 			'resurrect',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'regeneration',
		recipe_2: 	'touch_of_nature',
	},
	
	demolitionist:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','risky','offense','human','muscle'],
		name: 		'demolitionist',
		color: 		'f43232',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		no_adjacent_ally: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'man-405478_640.jpg',
		text: 		'On death, summons an explosive barrel in the same slot.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'summon',
					summon_position: 'same_slot',
					card_id: 		{
/*						none: 				1,
*/						explosive_barrels: 	1,
					},
					effect: 		1,
					on_success:{
						0:{
							type: 			'disappear',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any'
						}
					}
			}
		},
		recipe_1: 	'explosive_barrels',
		recipe_2: 	'explosive_barrels',
	},
	enchanted_barbarian:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense'],
		name: 		'enchanted barbarian',
		color: 		'771137',
		rarity: 	2,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0,
					colorless: 0
		},
		image: 		'warrior-1006320_640.jpg',
		text: 		'Gains 1 strength and generates 1 random mana on killing a creature.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effects:{
						0:{
							type: 			'increase_strength',
							effect: 		1,
						},
						1:{
							type: 			'gain_mana',
							mana_chances:{
											blue: 	1,
											red: 	1,
											green: 	1,
											purple: 1,
											orange: 1,
											yellow: 1
							},
							mana_amount: 	1,
							target_side: 		'ally'
						}
					}
			}
		},
		recipe_1: 	'fighter',
		recipe_2: 	'magic_attunement',
	},
	moon_warrior:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','defense','human'],
		name: 		'moon warrior',
		color: 		'771137',
		rarity: 	3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0,
					colorless: 1
		},
		image: 		'women-3277345_640.jpg',
		text: 		'Increases it\'s own strength and reduces the strength of a random enemy unit by 1 on killing a creature.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			},
			1:{
					proc: 			'kill_creature',
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		-1
			},
		},
		recipe_1: 	'enchanted_barbarian',
		recipe_2: 	'frozen_claw',
	},
	cobra:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','cobra','snake','living','offense','direct_damage'],
		name: 		'cobra',
		color: 		'ff8902',
		rarity: 	3,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'snake-2749383_640.jpg',
		text: 		'If cobra attacks a hero, it deals additional damage equal to it\'s strength.',
		strength: 	2,
		max_hp: 	3,
		attack_type:	'adjacent',
		abilities: 	{
			0:{
					proc: 			'attacks_hero',
					type: 			'hero_hp',
					effect: 		'strength',
					effect_multiplier: -1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'poison',
		recipe_2: 	'cornsnake',
	},
	
	viking:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense'],
		name: 		'viking',
		color: 		'ff8902',
		rarity: 	2,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0
		},
		image: 		'viking-2189837_640.jpg',
		text: 		'Increases it\'s own strength by 1 each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'blade_warrior',
		recipe_2: 	'rage_potion',
	},

	viking_trainee:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','human','offense'],
		name: 		'viking trainee',
		color: 		'ff8902',
		rarity: 	4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'vikings-1754434_640.jpg',
		text: 		'Increases it\'s own strength by 1 each turn.',
		strength: 	0,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'viking',
		recipe_2: 	'rage_moon',
	},
	
	gladiator:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','likes_damage'],
		name: 		'gladiator',
		color: 		'ff8902',
		rarity: 	2,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0
		},
		image: 		'amazone-2148910_640.jpg',
		text: 		'Gains 1 strength whenever it receives damage.<br/><br/>Gains 1 hp when it kills a creature.',
		flavor: 	'There is time to attack and time to block.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					type: 			'increase_hp',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'take_damage',
					type: 			'increase_strength',
					proc_on_death: 	false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'viking',
		recipe_2: 	'surprise_attack',
	},
	armored_barbarian:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','armored','muscle'],
		name: 		'armored barbarian',
		color: 		'ff8902',
		rarity: 	3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 3,
		damage_reduction: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 5,
					yellow: 0
		},
		image: 		'fantasy-4310033_640.jpg',
		text: 		'Gains 1 strength whenever it kills a creature.<br/><br/>Reduces damage taken by 1.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'gladiator',
		recipe_2: 	'armored_tribesman',
	},
	
	rhino:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','rhino','armored','living','offense'],
		name: 		'rhino',
		color: 		'ff8902',
		rarity: 	2,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		damage_reduction: 1,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0
		},
		image: 		'rhino-3446028_1280.jpg',
		text: 		'Reduces it\'s own strength by 1 on kill.<br/><br/>Reduces damage taken by 1.',
		flavor: 	'It ain\'t so strong if you survive it\'s charge.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'rock_lizard',
		recipe_2: 	'mud_people',
	},
	
	rock_ogre:{
		stats_version: 		2,
		type: 		'creature',
		subtypes: 	['living','offense','likes_damage'],
		card_type: 	'main',
		name: 		'rock ogre',
		color: 		'ff8902',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-3469541_1280.jpg',
		text: 		'Increases it\'s own strength by 1 when it receives damage.',
		strength: 	2,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'increase_strength',
					proc_on_death: 	false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'rhino',
		recipe_2: 	'gladiator',
	},
	rock_wurm:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['animal','wurm','armored','living','offense','likes_damage','defense'],
		name: 		'rock wurm',
		color: 		'ff8902',
		rarity: 	4,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		damage_reduction: 1,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 5,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-2697018_1280.jpg',
		text: 		'Increases it\'s own strength by 1 when it receives damage.<br/><br/>Reduces damage taken by 1.',
		flavor: 	'Don\'t anger it.',
		strength: 	2,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'increase_strength',
					proc_on_death: 	false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'rock_ogre',
		recipe_2: 	'tribal_seer',
	},
	
	eagle:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','eagle','flying','living','offense','muscle'],
		name: 		'eagle',
		color: 		'ff8902',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 2,
		ai_strength: 4,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'eagle-2044134_640.jpg',
		text: 		'Deals 2 damage to an adjacent enemy when played.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'damage',
					target: 		'adjacent',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'lion',
		recipe_2: 	'desert_owl',
	},
	
	power_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','mage','support'],
		name: 		'power mage',
		color: 		'ff8902',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 4,
					yellow: 0,
					colorless: 0
		},
		image: 		'woman-2113099_640.jpg',
		text: 		'Increases an ally\'s strength by 1 at the start of each turn.',
		strength: 	2,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally',
					effects:{
						0:{
							type: 			'increase_strength',
							effect: 		1
						}
					}
			},
		},
		recipe_1: 	'rage_moon',
		recipe_2: 	'tribal_seer',
	},
	
	mud_people:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'mana',
		subtypes: 	['living','risky','random_mana'],
		name: 		'mud people',
		color: 		'ff8902',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		suicidal: true,
		favorite_col: 3,
		card_priority: 5,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'fantasy-2964231_640.jpg',
		text: 		'Generates 2 random mana for both heroes when it dies.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	2,
					target_side: 		'enemy'
			},
			1:{
					proc: 			'own_death',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	2,
					target_side: 		'ally'
			},
		},
		recipe_1: 	'desert',
		recipe_2: 	'cleansing_water',
	},
	
	princess:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','hero_hp','defense'],
		name: 		'princess',
		color: 		'ffe83d',
		rarity: 	5,
		favorite_col: 4,
		has_adjacent_enemy: false,
		safe_play: true,
		card_priority: 4,
		in_play_value: 18,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 3
		},
		image: 		'fairy-tale-2321777_640.jpg',
		text: 		'Increases your hero\'s hp by 2 each turn. Increases all ally\'s strength by 1 when she dies.',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'increase_strength',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		2,
					target_side: 	'ally'
			}

		},
		recipe_1: 	'power_mage',
		recipe_2: 	'protective_cleric',
	},
	warrior_princess:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','offense','royal','hero_hp','buff_this'],
		name: 		'warrior princess',
		color: 		'ffe83d',
		rarity: 	4,
		has_adjacent_enemy: true,
		one_hit_kill: true,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 7,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 3
		},
		image: 		'woman-3377604_640.jpg',
		text: 		'Increases your hero\'s hp and her strength by 2, and heals herself for 2 when she kills a creature.',
		strength: 	5,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					type: 			'hero_hp',
					effect: 		2,
					target_side: 	'ally'
			},
			1:{
					proc: 			'kill_creature',
					type: 			'increase_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'kill_creature',
					type: 			'healing',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},

		},
		recipe_1: 	'daughter_of_light',
		recipe_2: 	'armory',
	},
	
	desert_owl:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','owl','flying','living','offense','proc_on_death','do_not_buff'],
		name: 		'desert owl',
		color: 		'ff8902',
		favorite_col: 3,
		needs_friendly_creatures: true,
		has_adjacent_enemy: true,
		card_priority: 4,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'owl-943278_640.jpg',
		text: 		'Increases the strength of a friendly unit by 1 on death.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'increase_strength',
					target: 		'random',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'desert',
		recipe_2: 	'nettle',
	},
	
	hypnotic_dancer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','defense'],
		name: 		'hypnotic dancer',
		color: 		'771137',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: false,
		card_priority: 4,
		in_play_value: 6,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'woman-2996292_640.jpg',
		text: 		'Reduces an enemy creature\'s strength by 1 each turn.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'decrease_strength',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'blade_dancer',
		recipe_2: 	'frost_mage',
	},
	
	armory:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'armory',
		color: 		'ff8902',
		rarity: 	3,
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		place_on_empty_board: true,
		card_priority: 5,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'sword-1557814_640.jpg',
		text: 		'Increases the strength of an ally unit by 1 each turn.',
		strength: 	false,
		max_hp: 	6,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'hidden_caves',
		recipe_2: 	'rage_moon',
	},
	discarded_weapon:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'discarded weapon',
		color: 		'ff8902',
		rarity: 	0,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		no_adjacent_ally_on_play: 	true,
		mana_needed:{colorless:4},
		card_priority: 1,
		in_play_value: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0,
					colorless: 0
		},
		image: 		'weapon-1729865_640.jpg',
		text: 		'When an ally creature is summoned next to it or moves next to it, this increases it\'s strength by 2. Discarded weapon then disappears.',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ally_creature_summoned',
					type: 			'increase_strength',
					target: 		'adjacent',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally',
					on_success:{
						0:{
							type: 			'disappear',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
						}
					}
			},
			1:{
					proc: 			'any_ally_creature_moved',
					type: 			'increase_strength',
					target: 		'adjacent',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally',
					on_success:{
						0:{
							type: 			'disappear',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
						}
					}
			},
		}
	},
	
	golden_temple:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'endgame',
		subtypes: 	['support','offense'],
		name: 		'golden temple',
		color: 		'ff8902',
		rarity: 	5,
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		place_on_empty_board: true,
		card_priority: 5,
		in_play_value: 21,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 7,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-2464889_1280.jpg',
		text: 		'Increases the strength of all ally units by 1 each turn.',
		strength: 	false,
		max_hp: 	10,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'armory',
		recipe_2: 	'ancient_warrior',
	},
	
	calm_druid:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','druid','defense'],
		name: 		'calm druid',
		color: 		'189e06',
		rarity: 	2,
		place_on_empty_board: true,
		card_priority: 4,
		in_play_value: 4,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	4,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2961723_640.jpg',
		text: 		'Increases the health of an ally creature by 1 each turn.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_hp',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'peaceful_druid',
		recipe_2: 	'magic_blossom',
	},
	healing_owl:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','owl','flying','living','healing','defense'],
		name: 		'healing owl',
		color: 		'189e06',
		rarity: 	2,
		needs_damaged_friendly_creatures: true,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'bengal-eagle-owl-3452925_640.jpg',
		text: 		'Heals a damaged ally creature by 1 each turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'healing_oil',
		recipe_2: 	'grove',
	},
	elf_healer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['elf','living','defense','healing'],
		name: 		'elf healer',
		color: 		'189e06',
		rarity: 	3,
		needs_damaged_friendly_creatures: true,
		card_priority: 3,
		in_play_value: 8,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2944440_1280.jpg',
		text: 		'Heals a damaged ally creature by 2 each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'elf_guardian',
		recipe_2: 	'touch_of_nature',
	},
	grove_mystic:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['mystic','living','defense','healing','offense'],
		name: 		'grove mystic',
		color: 		'189e06',
		rarity: 	2,
		has_adjacent_enemy: true,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'fantasy-4240045_640.jpg',
		text: 		'Heals a damaged ally creature by 1 each turn.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'grove',
		recipe_2: 	'healing_oil',
	},
	forest_spirit:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['ghost','defense','regenerates','offense','muscle'],
		name: 		'forest spirit',
		color: 		'189e06',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	4,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'portrait-4277664_640.jpg',
		text: 		'Heals itself for 2 each turn.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'self',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'grove',
		recipe_2: 	'regeneration',
	},
	
	owl_tamer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','summons','human','proc_on_death','do_not_buff','muscle'],
		name: 		'owl tamer',
		color: 		'189e06',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 4,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-2730919_640.jpg',
		text: 		'50% chance to release a random owl when destroyed.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					chance: 		50,
					type: 			'summon',
					card_id: 		{
						healing_owl: 	1,
						wise_owl: 		1,
						death_owl: 		1,
						burning_owl: 	1,
						desert_owl: 	1,
						blessed_owl: 	1
					},
					effect: 		1,
			}
		},
		recipe_1: 	'healing_owl',
		recipe_2: 	'grove',
	},
	veteran_owl_tamer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','summons','human','proc_on_death','do_not_buff'],
		name: 		'veteran owl tamer',
		color: 		'189e06',
		rarity: 	3,
		place_on_empty_board: true,
		max_creatures_in_play: 7,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	5,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'harry-potter-4552078_640.jpg',
		text: 		'Summons a random owl when played.',
		strength: 	4,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'summon',
					card_id: 		{
						owl: 	1,
					},
					effect: 		1,
					specific_side: {
						ally: 		100,
					}
			}
		},
		recipe_1: 	'owl_tamer',
		recipe_2: 	'owl_tamer',
	},
	
	dryad:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','defense','regenerates','buff_this'],
		name: 		'dryad',
		color: 		'189e06',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	4,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'composing-2391033_640.jpg',
		text: 		'Heals itself by 3 each turn.',
		strength: 	1,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'self',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'regeneration',
		recipe_2: 	'overgrowth',
	},
	farmhouse:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'main',
		subtypes: 	['support','defense'],
		name: 		'farmhouse',
		color: 		'189e06',
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		place_on_empty_board: true,
		card_priority: 5,
		in_play_value: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'home-1586435_640.jpg',
		text: 		'Increases the health of an ally creature by 1 each turn.',
		strength: 	false,
		max_hp: 	6,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_hp',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'wall',
		recipe_2: 	'magic_blossom',
	},
	hidden_cabin:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'main',
		subtypes: 	['revives','support'],
		name: 		'hidden cabin',
		color: 		'189e06',
		rarity: 	2,
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		place_on_empty_board: true,
		card_priority: 5,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 4
		},
		image: 		'cabin-1081733_1280.jpg',
		text: 		'When an ally creature dies, resurrect the creature and destroy this unit.',
		strength: 	false,
		max_hp: 	2,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'any_ally_creature_death',
					type: 			'resurrect',
					target: 		'random',
					proc_on_death: 	false,
					origin_unit: 	true,
					origin_dead: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'destroy',
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						}
					}
			},
		},
		recipe_1: 	'farmhouse',
		recipe_2: 	'overgrowth',
	},
	poppy_field:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['living','defense'],
		name: 		'poppy field',
		color: 		'189e06',
		rarity: 	5,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 5,
		in_play_value: 18,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 3
		},
		image: 		'meadow-76358_1280.jpg',
		text: 		'Reduces the strength of any enemy that attacks your hero by 1.',
		strength: 	false,
		max_hp: 	2,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'any_enemy_attacked_hero',
					type: 			'decrease_strength',
					target: 		'random',
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy',
			},
		},
		recipe_1: 	'fairy_home',
		recipe_2: 	'druid',
	},
	
	academy:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['support','offense','defense'],
		name: 		'academy',
		color: 		'82aa2a',
		rarity: 	4,
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		place_on_empty_board: true,
		card_priority: 5,
		in_play_value: 18,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 2,
					yellow: 0,
					colorless: 2
		},
		image: 		'housing-737504_640.jpg',
		text: 		'Increases the health and strength of an ally creature by 1 at the start of each turn.',
		strength: 	false,
		max_hp: 	6,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_stats',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 1,
					effect_hp: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'armory',
		recipe_2: 	'book_of_nature',
	},
	plains_elf:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['elf','living','offense','support','proc_on_death'],
		name: 		'plains elf',
		color: 		'82aa2a',
		favorite_col: 3,
		has_adjacent_enemy: true,
		needs_friendly_creatures: true,
		card_priority: 5,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'woman-3296628_640.jpg',
		text: 		'Generates 1 green or orange mana and increases the strength of a random ally by 1 on death.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
									orange: 1,
					},
					mana_amount: 	1,
					target_side: 		'ally'
			},
			1:{
					proc: 			'own_death',
					type: 			'increase_strength',
					target: 		'random',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'forest_elf',
		recipe_2: 	'desert',
	},
	
	elf_amazone:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['elf','living','offense','buff_this'],
		name: 		'elf amazone',
		color: 		'82aa2a',
		rarity: 	2,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		one_hit_kill: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 2,
					yellow: 0,
					colorless: 0
		},
		image: 		'dragon-3345081_1280.jpg',
		text: 		'Generates 1 green mana and gains 1 strength and hp on killing a creature. ',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effects:{
						0:{
							type: 			'increase_stats',
							effect_count: 	1,
							effect_strength: 1,
							effect_hp: 		1,
							effect: 1
						},
						1:{
							type: 			'gain_mana',
							mana_chances:{
											green: 	1,
							},
							mana_amount: 	1,
							target_side: 		'ally'
						}
					},
					target_side: 	'ally'
			},
		},
		recipe_1: 	'plains_elf',
		recipe_2: 	'elf_warrior',
	},
	elf_huntress:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['elf','living','offense','buff_this'],
		name: 		'elf huntress',
		color: 		'82aa2a',
		rarity: 	3,
		favorite_col: 4,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 7,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'lion-4098784_640.jpg',
		text: 		'Attacks the enemy unit with the highest strength. Generates 1 green or orange mana on death.',
		strength: 	5,
		max_hp: 	5,
		attack_type: 	'random',
		attack_specials:{
			highest_strength: true,
		},
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
									orange: 1,
					},
					mana_amount: 	1,
					target_side: 		'ally'
			},
		},
		recipe_1: 	'elf_amazone',
		recipe_2: 	'elf_archer',
	},
	
	coccoon:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','defense'],
		name: 		'coccoon',
		color: 		'189e06',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	2,
		has_adjacent:  	false,
		adjacent_side: 	'enemy',
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'chrysalis-140878_640.jpg',
		text: 		'Encase target creature in a coccoon. It will emerge in a stronger form in 2 turns.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'chrysalis',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			},
		},
		recipe_1: 	'book_of_nature',
		recipe_2: 	'overgrowth',
	},
	chrysalis:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['coccoon','living','needs_origin'],
		name: 		'chrysalis',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		has_adjacent_enemy: false,
		uses_energy: true,
		energy: 0,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'chrysalis-140878_640.jpg',
		text: 		'Turns into the original creature when energy reaches 2, doubling it\'s health and strength. Gains 1 energy at the start of each turn.',
		strength: 	false,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'adjust_energy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally',
			},
			1:{
					proc: 			'start_turn',
					type: 			'return_in_original',
					target: 		'self',
					min_energy: 	2,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1,
					on_success:{
						0:{
								type: 			'increase_hp',
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								target_side: 	'ally',
								effect: 		'target_hp'
						},
						1:{
								type: 			'increase_strength',
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								target_side: 	'ally',
								effect: 		'target_strength'
						}
					}
			},
			
		}
	},
	magic_blossom:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','defense','buff'],
		name: 		'magic blossom',
		color: 		'189e06',
		spell_target: 'unit',
		spell_target_side: 	2,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'pink-1326168_640.jpg',
		text: 		'Increases the health of targeted unit by 2.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_hp',
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'any'
			}
		},
		recipe_1: 	'healing_herbs',
		recipe_2: 	'nettle',
	},
	
	
	natures_blessing:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','defense','buff'],
		name: 		'nature\'s blessing',
		color: 		'189e06',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	2,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'wheat-1348275_1280.jpg',
		text: 		'Increases the health of targeted unit by it\'s cost.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_hp',
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 10,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'target_cost',
					target_side: 	'any'
			}
		},
		recipe_1: 	'touch_of_nature',
		recipe_2: 	'magic_blossom',
	},
	natural_healing:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','healing','defense','buff'],
		name: 		'natural healing',
		color: 		'189e06',
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'green-1072828_640.jpg',
		text: 		'Heals target creature by 10% of your hero\'s hp.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'healing',
					target: 		'same_slot',
					target_type: 	'creature',
					target_lowest_hp: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_damaged: true,
					effect: 		'ally_hero_hp',
					effect_multiplier: 0.1,
					target_side: 	'any'
			},
		},
		recipe_1: 	'firtile_dirt',
		recipe_2: 	'healing_herbs',
	},
	touch_of_nature:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','reclaims','defense','buff'],
		name: 		'touch of nature',
		color: 		'189e06',
		rarity: 	2,
		spell_target: 'unit',
		spell_target_side: 	2,
		card_priority: 1,
		needs_cards_in_grave: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'butterfly-22999_1280.jpg',
		text: 		'Increases the health of targeted unit by 1. Return a card from you grave to your reserves.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_hp',
					target: 		'same_slot',
					target_lowest_hp: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'natural_healing',
		recipe_2: 	'green_spirit',
	},
	strangling_vine:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'strangling vine',
		color: 		'189e06',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'vine-4102328_640.jpg',
		text: 		'Deals damage to target creature equal to it\'s strength.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					target: 		'same_slot',
					min_hp: 		1,
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'target_strength',
					target_side: 	'any'
			}
		},
		recipe_1: 	'overgrowth',
		recipe_2: 	'nettle',
	},
	giant_growth:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','offense','buff'],
		name: 		'giant growth',
		color: 		'189e06',
		rarity: 	2,
		target_stunned: false,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'people-3205487_1280.jpg',
		text: 		'Increases the health and attack of targeted creature by 2 until end of turn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'increase_stats',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 2,
					effect_hp: 		2,
					target_side: 	'any',
			},
			1:{
					proc: 			'on_cast',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					
					target_side: 	'any',
					effects:{
						0:{
							type: 			'increase_stats',
							effect_count: 	1,
							effect_strength: 2,
							effect_hp: 		2,
						},
						1:{
							type: 			'gain_ability',
							do_not_zoom: 	true,
							effect_count: 	1,
							ability_gained:{
									proc: 			'end_any_turn',
									type: 			'increase_stats',
									target: 		'self',
									target_type: 	'creature',
									target_amount: 	1,
									target_unique: 	true,
									effect_count: 	1,
									effect_strength: -2,
									effect_hp: 		-2,
									target_side: 	'any',
									ability_text: 	'<br/><br/><b>Giant growth</b>',
									remove_ability: true,
							},
							ability_text:'<br/><br/><b>Giant growth</b>',
						}
					}
			},
			
		},
		recipe_1: 	'overgrowth',
		recipe_2: 	'wood_trinket',
	},
	mindbreak:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','offense','debuff'],
		name: 		'mindbreak',
		color: 		'a31079',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'skulls-2231280_1280.jpg',
		text: 		'Reduces the health and attack of targeted creature by 1.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_stats',
					target: 		'same_slot',
					target_highest_value: true,
					spell_target_min_strength: 1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: -1,
					effect_hp: 		-1,
					target_side: 	'any'
			},
		},
		recipe_1: 	'deaths_call',
		recipe_2: 	'skulking_skeleton',
	},
	curse_of_vengeance:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','debuff'],
		name: 		'curse of vengeance',
		color: 		'a31079',
		rarity: 	0,
		spell_target: 'creature',
		spell_target_side: 	1,
		has_adjacent: false,
		adjacent_side: 'enemy',
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'magic-4485361_640.jpg',
		text: 		'If target creature deals damage to a hero it becomes poisoned.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					spell_target_min_strength: 1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'damage_hero',
							target: 		'self',
							type: 			'poison',
							min_hp: 		1,
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any',
					},
					ability_text:'<br/><br/><b>Curse of vengeance</b>',
					target_side: 	'any'
			}
		}
	},
	
	blindness:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','offense','debuff'],
		name: 		'blindness',
		color: 		'a31079',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 4,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'bleeding-eyes-1761856_640.jpg',
		text: 		'Target creature becomes neutral.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'set_side',
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
					new_side: 		'neutral'
			},
		},
		recipe_1: 	'vengeful_crypt',
		recipe_2: 	'pain_catcher',
	},
	
	growth_seeds:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','offense'],
		name: 		'growth seeds',
		color: 		'189e06',
		rarity: 	3,
		needs_friendly_creatures: true,
		spell_target: 'auto',
		spell_target_side: 	2,
		spell_auto_cast: 	true,
		min_friendly_spell_targets: 1,
		max_enemy_spell_targets: 0,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'flower-3645738_1280.jpg',
		text: 		'All creatures with 1 hp gain +1/+1.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_stats',
					target: 		'random',
					target_type: 	'creature',
					max_hp: 		1,
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 		1,
					effect_hp: 				1,
					target_side: 	'any'
			},
			
		},
		recipe_1: 	'giant_growth',
		recipe_2: 	'giant_growth',
	},
	
	healing_oil:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['healing','support','defense'],
		name: 		'healing oil',
		color: 		'189e06',
		rarity: 	1,
		needs_friendly_creatures: true,
		needs_damaged_friendly_creatures: true,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'essential-oils-3084952_1280.jpg',
		text: 		'Heal all ally creatures by 1 and remove all poison effects from them.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effects:{
						0:{
							type: 			'healing',
							effect: 		1,
						},
						1:{
							type: 			'set_poison',
							effect: 		0,
						}
					}
			},
			
		},
		recipe_1: 	'healing_herbs',
		recipe_2: 	'healing_herbs',
	},
	healing_herbs:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','defense'],
		name: 		'healing herbs',
		color: 		'189e06',
		rarity: 	0,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'herbs-2523119_640.jpg',
		text: 		'Heals the target creature by 2 and cures any poison.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'healing',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'any',
			},
			1:{
					proc: 			'on_cast',
					
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'set_poison',
							effect: 		0,
						},
						1:{
							type: 			'healing',
							effect: 		2,
						}
					}
			}
		}
	},
	book_of_nature:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['healing','support','defense'],
		name: 		'book of nature',
		color: 		'189e06',
		rarity: 	3,
		needs_friendly_creatures: true,
		needs_damaged_friendly_creatures: true,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'dreams-2904682_640.jpg',
		text: 		'Gain 1 green mana, heal a random friendly creature by 2 and increase the hp of a random friendly creature by 2.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	1,
					target_side: 		'ally'
			},
			1:{
					proc: 			'on_cast',
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'on_cast',
					type: 			'increase_hp',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
			
		},
		recipe_1: 	'touch_of_nature',
		recipe_2: 	'old_book',
	},
	book_of_light:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['likes_structures'],
		name: 		'book of light',
		color: 		'eae717',
		rarity: 	3,
		needs_friendly_structures: true,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 3
		},
		image: 		'take-532097_640.jpg',
		text: 		'Gain 1 yellow mana, your hero gains 3 hp and increase the hp of all friendly structure by 2.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_cast',
					type: 			'hero_hp',
					effect: 		3,
					target_side: 	'ally'
			},
			2:{
					proc: 			'on_cast',
					type: 			'increase_hp',
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	3,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
			
		},
		recipe_1: 	'old_book',
		recipe_2: 	'golden_light',
	},
	
	tales_of_times_past:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	[],
		name: 		'tales of times past',
		color: 		'ff8902',
		rarity: 	2,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		needs_cards_in_grave: 2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'old-woman-574278_1280.jpg',
		text: 		'Move all cards from all graves to their owner\'s reserves.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'recycle',
					effect: 		12,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_cast',
					type: 			'recycle',
					effect: 		12,
					target_side: 	'enemy'
			},
			
		},
		recipe_1: 	'raise_dead',
		recipe_2: 	'desert',
	},
	
	rage_potion:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','offense','buff'],
		name: 		'rage potion',
		color: 		'ff8902',
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0,
					colorless: 0
		},
		image: 		'potion-1249050_640.jpg',
		text: 		'Increases the strength of targeted unit by 1.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_strength',
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'boulder',
		recipe_2: 	'rock_crystal',
	},
	
	rage_moon:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['offense','support'],
		name: 		'rage moon',
		color: 		'ff8902',
		rarity: 	3,
		needs_friendly_creatures: true,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		max_enemy_spell_targets: 0,
		min_friendly_spell_targets: 2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0,
					colorless: 1
		},
		image: 		'composing-1192667_640.jpg',
		text: 		'Increases the strength of all units by 1.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'rage_potion',
		recipe_2: 	'rock_seer',
	},
	
	blind_rage:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'blind rage',
		color: 		'ff8902',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		has_adjacent: false,
		adjacent_side: 'enemy',
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 3,
					yellow: 0
		},
		image: 		'lion-2885618_640.jpg',
		text: 		'Target creature deals damage equal to it\'s strength to all adjacent units and itself.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					target: 		'same_slot',
					type: 			'damage',
					min_hp: 		1,
					spell_target_min_strength: 2,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'target_strength',
					target_side: 	'any',
			},
			1:{
					proc: 			'ai_targeting',
					target: 		'adjacent',
					type: 			'damage',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
			},
			2:{
					proc: 			'on_cast',
					target: 		'same_slot',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'damage',
							target: 		'adjacent',
							min_hp: 		1,
							target_amount: 	4,
							target_unique: 	true,
							effect_count: 	1,
							target_side: 	'any',
							effect: 		'strength',
						},
					}
			},
			3:{
				proc: 			'on_cast',
				type: 			'damage',
				target: 		'same_slot',
				min_hp: 		1,
				target_amount: 	1,
				target_unique: 	true,
				effect_count: 	1,
				target_side: 	'any',
				effect: 		'target_strength',
			}

		},
		recipe_1: 	'blindness',
		recipe_2: 	'rage_potion',
	},
	surprise_attack:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['offense'],
		name: 		'surprise attack',
		color: 		'ff8902',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 1,
		min_enemy_spell_targets: 1,
		target_friendly: true,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'tiger-2896392_640.jpg',
		text: 		'Target friendly creature attacks.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'same_slot',
					spell_target_min_strength: 2,
					target_highest_strength: true,
					min_hp: 		1,
					type: 			'attack',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			},
			1:{
					proc: 			'ai_targeting',
					target: 		'adjacent',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
			},
			
		},
		recipe_1: 	'lion',
		recipe_2: 	'hidden_caves',
	},
	pirates_curse:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['offense'],
		name: 		'pirates curse',
		color: 		'998c30',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 4,
		card_priority: 1,
		needs_friendly_creatures: false,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 2
		},
		image: 		'skeleton-2232884_640.jpg',
		text: 		'All creatures deal damage equal to their strength to all adjacent units.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'random',
					min_hp: 		1,
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'damage',
							target: 		'adjacent',
							min_hp: 		1,
							target_amount: 	4,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		'strength',
							target_side: 	'any'
						},
					}
			},
		},
		recipe_1: 	'pirate',
		recipe_2: 	'deaths_call',
	},
	holy_blade:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','offense','buff'],
		name: 		'holy blade',
		color: 		'eae717',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 5,
					colorless: 0
		},
		image: 		'sword-790815_640.jpg',
		text: 		'Increases the strength of targeted unit by 3.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_strength',
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any'
			}
		},
		recipe_1: 	'blessed_owl',
		recipe_2: 	'bandit_swordsman',
	},
	holy_sacrifice:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['clears'],
		name: 		'holy sacrifice',
		color: 		'eae717',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 2,
		max_friendly_spell_targets: 0,
		mana_needed:{colorless:4},
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 8
		},
		image: 		'dagger-1877117_640.jpg',
		text: 		'Destroy all creatures. The owners of the creatures gain 2 hp for each target destroyed.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'random',
					min_hp: 		1,
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					target_side: 	'any',
					effects:{
						0:{
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							type: 			'hero_hp',
							effect: 		2,
							target_side: 	'ally'

						},
						1:{
							type: 			'destroy',
						},
					}
			},
		},
		recipe_1: 	'bless',
		recipe_2: 	'holy_blade',
	},
	monsoon:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['clears'],
		name: 		'monsoon',
		color: 		'189e06',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 2,
		max_friendly_spell_targets: 1,
		mana_needed:{colorless:4},
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	4,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'key-west-86025_1280.jpg',
		text: 		'Destroy 3 random creatures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	3,
					target_unique: 	true,
					target_side: 	'any',
			},
		},
		recipe_1: 	'brook',
		recipe_2: 	'giant_growth',
	},
	spore_explosion:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['summons'],
		name: 		'spore explosion',
		color: 		'189e06',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	5,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'bovist-184502_1280.jpg',
		text: 		'Summon an amount of mushroom soldiers equal to half the target\'s hp. The target then turns into a mushroom soldier itself.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 10,
					target_min_cost: 'own_cost',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'summon',
					card_id: 		{
						mushroom_soldier: 		1,
					},
					effect: 		'target_hp',
					min_hp: 		1,
					effect_multiplier: 0.5,
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			},
			2:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'mushroom_soldier',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			},
		},
		recipe_1: 	'mushroom',
		recipe_2: 	'growth_seeds',
	},
	fall_of_giants:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['clears'],
		name: 		'fall of giants',
		color: 		'189e06',
		rarity: 	2,
		spell_target: 'auto',
		spell_target_side: 1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 1,
		max_friendly_spell_targets: 0,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	4,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-3311161_1280.jpg',
		text: 		'Destroy all creatures with 5 or more hp.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'random',
					type: 			'destroy',
					target_type: 	'creature',
					min_hp: 		5,
					target_amount: 	15,
					target_unique: 	true,
					target_side: 	'any'
			},
		},
		recipe_1: 	'peaceful_druid',
		recipe_2: 	'reclaimed_by_nature',
	},
	
	final_rage:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense'],
		name: 		'final rage',
		color: 		'f46542',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 1,
					yellow: 0
		},
		image: 		'anger-794699_640.jpg',
		text: 		'Double target creature\'s strength. It dies at the end of its turn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 3,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'target_strength',
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'end_turn',
							type: 			'destroy',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		3,
							target_side: 	'any'
					},
					ability_text:'<br/><br/><b>Self destructs at the end of it\'s next turn.</b>',
					target_side: 	'any'
			}
		},
		recipe_1: 	'deaths_call',
		recipe_2: 	'rage_potion',
	},
	regeneration:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['healing','support','buff'],
		name: 		'regeneration',
		color: 		'189e06',
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		takes_damage_this_turn: true,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'green-912796_640.jpg',
		text: 		'Targeted creature heals itself for 1 each turn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 3,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'start_turn',
							type: 			'healing',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any'
					},
					ability_text:'<br/><br/><b>Regeneration</b>',
					target_side: 	'any'
			}
		},
		recipe_1: 	'healing_herbs',
		recipe_2: 	'wood_trinket',
	},
	overgrowth:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support'],
		name: 		'overgrowth',
		color: 		'189e06',
		spell_target: 'structure',
		spell_target_side: 	1,
		min_spell_targets: 1,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'wood-1350175_1920.jpg',
		text: 		'Targeted structure turns into a grove if it isn\'t one allready.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					target: 		'same_slot',
					specific_target_not: 'grove',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					card_id: 		'grove',
					target_side: 	'any'
			}
		},
		recipe_1: 	'grove',
		recipe_2: 	'grove',
	},
	reclaimed_by_nature:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['offense','dislikes_structures'],
		name: 		'reclaimed by nature',
		color: 		'189e06',
		rarity: 	2,
		spell_target: 'structure',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 1,
		max_friendly_spell_targets: 0,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'forest-483207_1280.jpg',
		text: 		'If you own a grove, you gain 3 green mana. Destroy all structures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					needs_owned: 	'grove',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	3,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	6,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'grove',
		recipe_2: 	'overgrowth',
	},
	
	glass_bones:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense','support'],
		name: 		'glass bones',
		color: 		'337df4',
		rarity: 	3,
		spell_target: 'creature',
		target_enemy: true,
		spell_target_side: 	1,
		card_priority: 5,
		takes_damage_this_turn: true,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'broken-glass-2208593_640.jpg',
		text: 		'If target enemy creature takes damage, it dies.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'take_damage',
							type: 			'destroy',
							min_hp: 		1,
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any'
					},
					ability_text:'<br/><br/><b>Glass bones</b>',
					target_side: 	'any'
			}
		},
		recipe_1: 	'frozen_claw',
		recipe_2: 	'visions_of_life',
	},
	
	templar:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','knight','defense'],
		name: 		'templar',
		color: 		'abef34',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		damage_reduction: 	1,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1,
					colorless: 1
		},
		image: 		'wood-3319865_640.jpg',
		text: 		'Reduces damage taken by 1.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'turtle',
		recipe_2: 	'hoplite',
	},
	knight_of_the_deer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','knight','defense'],
		name: 		'knight of the deer',
		color: 		'abef34',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		needs_friendly_creatures: true,
		card_priority: 4,
		damage_reduction: 	1,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green:  2,
					purple: 0,
					orange: 0,
					yellow: 2,
					colorless: 2
		},
		image: 		'horse-2572425_640.jpg',
		text: 		'Reduces damage taken by 1. Gains 1 hp for every ally creature when played.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'increase_hp',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'ally_creature_count',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'knight',
		recipe_2: 	'touch_of_nature',
	},
	
	sand_witch:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','witch','offense'],
		name: 		'sand witch',
		color: 		'ff8902',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 4,
					yellow: 0
		},
		image: 		'woman-1466628_640.jpg',
		text: 		'Deals 1 damage to all enemy creatures at the start of each turn.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'desert',
		recipe_2: 	'blade_dancer',
	},
	rock_seer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','human','seer','defense','reclaims','do_not_buff'],
		name: 		'rock seer',
		color: 		'ff8902',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		card_priority: 4,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'fantasy-3363955_1280.jpg',
		text: 		'On death, reclaim a card.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'reclaim',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'rock_crystal',
		recipe_2: 	'orange_spirit',
	},
	
	sun_warrior:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','human','offense','do_not_buff'],
		name: 		'sun warrior',
		color: 		'ff8902',
		rarity: 	2,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		min_adjacent: 2,
		has_most_adjacent: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 4,
					yellow: 0,
					colorless: 0
		},
		image: 		'warrior-1056727_640.jpg',
		text: 		'Attacks all adjacent enemies on play.',
		strength: 	3,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'attack_unit',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		4
			}
		},
		recipe_1: 	'discarded_weapon',
		recipe_2: 	'eagle',
	},
	barbarian_shieldman:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','barbarian','shield','defense'],
		name: 		'barbarian shieldman',
		color: 		'ff8902',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 3,
					yellow: 0,
		},
		image: 		'barbarian-2159912_640.jpg',
		text: 		'Gains 1 hp when attacked.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'being_attacked',
					type: 			'increase_hp',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'fighter',
		recipe_2: 	'discarded_weapon',
	},
	
	sand_princess:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','support','human','healing','royal'],
		name: 		'sand princess',
		color: 		'f9c763',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 3,
					yellow: 3,
		},
		image: 		'woman-3380011_640.jpg',
		text: 		'Deals 1 damage to all enemy creatures and heals all ally creatures by 1 at the start of each turn.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'angel_statue',
		recipe_2: 	'sand_witch',
	},

	
	sand_cleric:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','defense','healing','human','cleric'],
		name: 		'sand cleric',
		rarity: 	2,
		color: 		'ff8902',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 4,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'woman-3430583_640.jpg',
		text: 		'Heals or repairs a random damaged ally with 1 hp by 3 each turn.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					target: 		'random',
					max_hp: 		1,
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'rock_crystal',
		recipe_2: 	'desert',
	},
	desert_sage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','sage','support','defense'],
		name: 		'desert sage',
		color: 		'ff8902',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 3,
					yellow: 0
		},
		image: 		'fantasy-2615983_1280.jpg',
		text: 		'Whenever an ally unit gains strength, this creature heals it for the same amount.',
		strength: 	2,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'ally_unit_gain_strength',
					type: 			'healing',
					target: 		'random',
					min_hp: 		1,
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'desert',
		recipe_2: 	'mud_people',
	},
	
	cleric_of_faith:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','cleric','risky','hero_hp','support'],
		name: 		'cleric of faith',
		color: 		'c0f970',
		rarity: 	3,
		favorite_col: 4,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		safe_play: true,
		card_priority: 4,
		in_play_value: 0,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'spiritual-3226935_640.jpg',
		text: 		'Increases it\'s own hp by 2 by reducing your hero\'s hp by the same amount. If it\'s hp is over 20 at the start of a turn, it is destroyed and you hero gains 20 hp.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_hp',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		-2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					target: 		'self',
					target_type: 	'creature',
					target_amount: 	1,
					min_hp: 		20,
					target_unique: 	true,
					target_side: 	'ally',
					effects:{
						0:{
							type: 			'destroy',
							effect_count: 	1,
							effect: 		1,
						},
						1:{
							type: 			'hero_hp',
							effect: 		20,
							target_side: 	'ally'
						}
					}
			},
		},
		recipe_1: 	'holy_sacrifice',
		recipe_2: 	'mage_defender',
	},
	
	noble_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','royal','human','mage','defense','support','offense','ranged'],
		name: 		'noble mage',
		color: 		'c0f970',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 4,
		ai_strength: 2,
		in_play_value: 12,
		cost:{
					blue: 	2,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 2,
					colorless: 2
		},
		image: 		'gothic-1454219_640.jpg',
		text: 		'Increases your hero\'s hp by 1 at the start of each turn. Deals 2 damage to an enemy unit at the start of every turn.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'daughter_of_light',
		recipe_2: 	'echo_mage',
	},
	
	yellow_macaw:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','parrot','flying','living','random_mana','offense','muscle'],
		name: 		'yellow macaw',
		color: 		'abef34',
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 4,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1,
					colorless: 0
		},
		image: 		'ara-3601194_1280.jpg',
		text: 		'Generates 1 random mana for both players when played.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	2,
									purple: 1,
									orange: 1,
									yellow: 2
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_play',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	2,
									purple: 1,
									orange: 1,
									yellow: 2
					},
					mana_amount: 	1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'bless',
		recipe_2: 	'wood_trinket',
	},
	flying_port:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'mana',
		subtypes: 	['defense','hero_hp','moves'],
		name: 		'flying port',
		color: 		'abef34',
		rarity: 	2,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 4,
		in_play_value: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1,
					colorless: 1
		},
		image: 		'photo-manipulation-421405_640.jpg',
		text: 		'Increases your hero\'s hp by 1 and generates 1 random mana at the start of each turn. Moves to a random empty slot when it takes damage.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	50,
									purple: 1,
									orange: 1,
									yellow: 50
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'take_damage',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'wall',
		recipe_2: 	'forest_noble',
	},
	protective_mold:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['living','risky','defense'],
		name: 		'protective mold',
		color: 		'abef34',
		rarity: 	3,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 4,
		uses_energy: true,
		energy: 0,
		in_play_value: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'slime-mold-2762307_1280.jpg',
		text: 		'Gains energy equal to damage your hero takes. At the start of every turn, reduces energy by up to 3. Your hero gains hp equal to the energy reduced.',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'ally_hero_lose_hp',
					type: 			'adjust_energy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'adjust_energy',
					target: 		'self',
					min_energy:  	1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-3,
					target_side: 	'ally',
			},
			2:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		'latest_success',
					target_side: 	'ally'

			}
		},
		recipe_1: 	'forest_spirit',
		recipe_2: 	'heros_prize',
	},
	
	friendship:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','defense','offense','buff'],
		name: 		'friendship',
		rarity: 	3,
		color: 		'abef34',
		spell_target: 'creature',
		spell_target_side: 	2,
		spell_auto_cast: 	true,
		min_friendly_spell_targets: 2,
		card_priority: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 2,
					colorless: 0
		},
		image: 		'boy-2910371_640.jpg',
		text: 		'Increases the strength and health by 1 of 2 random ally creatures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_stats',
					target: 		'random',
					target_type: 	'creature',
					min_hp: 		1,
					not_self: 		true,
					target_amount: 	2,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 1,
					effect_hp: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'holy_blade',
		recipe_2: 	'giant_growth',
	},
	
	spring_lady:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','human','royal','hero_hp','regenerates','defense'],
		name: 		'spring lady',
		color: 		'abef34',
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 4,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green:  2,
					purple: 0,
					orange: 0,
					yellow: 2,
					colorless: 0,
		},
		image: 		'girl-2436429_640.jpg',
		text: 		'Increases your hero\'s hp by 1 and regenerates her health by 1 at the start of each turn.',
		strength: 	2,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'peasant',
		recipe_2: 	'spring',
	},
	
	forest_noble:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','royal','human','hero_hp','offense','defense','muscle'],
		name: 		'forest noble',
		color: 		'abef34',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green:  2,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'fantasy-2125792_640.jpg',
		text: 		'Increases your hero\'s hp by 1 at the start of each turn.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'spring_lady',
		recipe_2: 	'grove',
	},
	noble_elf:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['elf','living','royal','proc_on_death','hero_hp','support','defense','do_not_buff'],
		name: 		'noble elf',
		color: 		'abef34',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'woman-3268176_1280.jpg',
		text: 		'Increases your hero\'s hp by 1 at the start of each turn. generates 1 green or yellow mana on death.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'own_death',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 		'ally'
			}
		},
		recipe_1: 	'forest_elf',
		recipe_2: 	'bless',
	},
	
	faithfull_fairy:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','hero_hp','proc_on_play','flying','fairy','offense','do_not_buff','moves'],
		name: 		'faithfull fairy',
		color: 		'abef34',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'gothic-1317139_640.jpg',
		text: 		'Increases your hero\'s hp by 2 when played. Moves away from enemies at the start of each turn.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'hero_hp',
					effect: 		2,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					min_hp: 		1,
					move_to_side: 	'enemy',
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'fairy_scout',
		recipe_2: 	'spring_lady',
	},
	peacock_lady:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','royal','defense','healing'],
		name: 		'peacock lady',
		color: 		'abef34',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		needs_damaged_friendly_creatures: true,
		no_adjacent_ally_creature: false,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  1,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'woman-4155625_640.jpg',
		text: 		'Heals all adjacent ally creatures by 1 each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'adjacent',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'healing_oil',
		recipe_2: 	'forest_noble',
	},
	stormy_castle:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'main',
		subtypes: 	['offense','defense','support'],
		name: 		'stormy castle',
		color: 		'24a55e',
		rarity: 	3,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		card_priority: 4,
		damage_reduction: 1,
		in_play_value: 6,
		cost:{
					blue: 	2,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'castle-4155998_640.jpg',
		text: 		'Deals 1 damage to a random enemy creature every turn.<br/><br/>Reduces damage taken by 1.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'castle',
		recipe_2: 	'lightning',
	},
	library:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['support','reclaims'],
		name: 		'library',
		color: 		'24a55e',
		rarity: 	3,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		needs_cards_in_grave: 1,
		safe_play: true,
		card_priority: 4,
		in_play_value: 6,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'bookshelf-1082309_640.jpg',
		text: 		'Recycles 1 card at the start of every turn.',
		strength: 	false,
		max_hp: 	6,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'wall',
		recipe_2: 	'librarian',
	},

	librarian:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','reclaims','support'],
		name: 		'librarian',
		color: 		'337df4',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		needs_cards_in_grave: 1,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	2,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'graphics-1329065_640.jpg',
		text: 		'Recycles 1 card at the start of every turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'research',
		recipe_2: 	'peasant',
	},
	mage_defender:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','mage','defense','support','reclaims'],
		name: 		'mage defender',
		color: 		'337df4',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		needs_cards_in_grave: 2,
		safe_play: true,
		card_priority: 5,
		in_play_value: 3,
		cost:{
					blue: 	2,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'male-3489905_640.jpg',
		text: 		'Recycle 1 card when your hero is attacked by a unit.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_enemy_attacked_hero',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'librarian',
		recipe_2: 	'holy_blade',
	},
	
	dreamcaster:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','support','defense'],
		name: 		'dreamcaster',
		color: 		'337df4',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		min_enemy_creatures_in_play: 1,
		safe_play: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 2
		},
		image: 		'woman-2212358_1280.jpg',
		text: 		'Reduces the strength of an enemy unit by 1 when it attacks a hero.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'attacks_hero',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'echo_mage',
		recipe_2: 	'frozen_claw',
	},
	time_keeper:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','human','offense','defense','support','do_not_buff','proc_on_death'],
		name: 		'time keeper',
		color: 		'337df4',
		favorite_col: 3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		suicidal: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'woman-2223508_1280.jpg',
		text: 		'If destroyed by an adjacent creature, returns that creature to it\'s owner\'s hand.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'unsummon',
					target: 		'adjacent',
					min_hp: 		1,
					origin_unit: 	true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		1
			}
		},
		recipe_1: 	'time_trap',
		recipe_2: 	'time_mage',
	},
	tiny_genie:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','offense','likes_spells','genie','do_not_buff','muscle'],
		name: 		'tiny genie',
		color: 		'337df4',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		do_not_cast_spell_unless_damaged: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	2,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'genie-2445164_640.jpg',
		text: 		'If you play any spell, return tiny genie to it\'s owner\'s hand.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_ally_spell_cast',
					type: 			'unsummon',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			}
		},
		recipe_1: 	'magic_attunement',
		recipe_2: 	'unsummon',
	},
	genie:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','likes_spells','genie','do_not_buff'],
		name: 		'genie',
		rarity: 	2,
		color: 		'337df4',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		do_not_cast_spell_unless_damaged: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	3,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'blue-3481766_1280.png',
		text: 		'If you play any spell, return genie to it\'s owner\'s hand.',
		strength: 	3,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_ally_spell_cast',
					type: 			'unsummon',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			}
		},
		recipe_1: 	'tiny_genie',
		recipe_2: 	'tiny_genie',
	},
	
	calm_recaller:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['recaller','mage','human','living','support'],
		name: 		'calm recaller',
		color: 		'337df4',
		favorite_col: 3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		needs_damaged_friendly_creatures: true,
		suicidal: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2790666_1280.jpg',
		text: 		'Resummons an other friendly creature that is not a recaller when played.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'resummon',
					min_hp: 		1,
					target: 		'random',
					specific_target_not: 'recaller',
					not_self: 		true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			}
		},
		recipe_1: 	'time_mage',
		recipe_2: 	'visions_of_life',
	},
	clockwork_hummingbird:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','flying','robot','likes_random_mana','buff_this','moves'],
		name: 		'clockwork hummingbird',
		color: 		'ffffff',
		rarity: 	3,
		pick_chance: 100,
		place_on_empty_board: false,
		card_priority: 5,
		immune_to_poison: true,
		attack_amount: 'current_energy',
		energy: 0,
		uses_energy: true,
		mana_needed:{colorless: 2},
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 3
		},
		image: 		'clockwork-4171696_640.jpg',
		text: 		'Moves to an enemy and attacks a number of times equal to it\'s energy, then moves away from enemies.<br/><br/>At the end of turn consumes 2 random mana to gain 1 energy, up to 4.<br/><br/>Immune to poison.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'done_attacking',
					type: 			'move_to_empty',
					min_hp: 		1,
					move_to_side: 	'enemy',
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			1:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			2:{
					proc: 			'end_turn',
					type: 			'reduce_mana',
					target: 		'self',
					max_energy: 	3,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	2,
					target_side: 		'ally',
					on_success:{
						0:{
							type: 			'adjust_energy',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
						}
					},
			},
		},
		recipe_1: 	'workshop',
		recipe_2: 	'clockwork_automaton',
	},
	clockwork_automaton:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['defense','robot','likes_random_mana','do_not_buff'],
		name: 		'clockwork automaton',
		color: 		'ffffff',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		immune_to_poison: true,
		card_priority: 5,
		energy: 1,
		uses_energy: true,
		mana_needed:{colorless: 2},
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 3
		},
		image: 		'fantasy-2513222_1280.jpg',
		text: 		'Loses 1 energy after attacking.<br/><br/>At the end of turn, consumes 2 random mana and gains 1 energy for every mana consumed.<br/><br/>Sets it\'s attack equal to it\'s energy at the start of turn.<br/><br/>Immune to poison.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'adjust_energy',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'end_turn',
					type: 			'reduce_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	2,
					target_side: 		'ally',
			},
			2:{
					proc: 			'end_turn',
					type: 			'adjust_energy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					effect_multiplier: 1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'start_turn',
					type: 			'set_strength',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'current_energy',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'workshop',
		recipe_2: 	'engineer',
	},
	hungry_piranhas:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','piranha','fish','water','living','offense','do_not_buff','muscle'],
		name: 		'hungry piranhas',
		color: 		'337df4',
		rarity: 	1,
		favorite_col: 3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		one_hit_kill: true,
		card_priority: 5,
		stunned: 0,
		uses_energy: true,
		energy: 0,
		in_play_value: 0,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'piranhas-123287_1280.jpg',
		text: 		'Reduces it\'s energy by 1 at the end of every turn. Dies if it cannot.<br/><br/>Gains 2 energy when it kills a creature.<br/><br/>Can attack the turn it comes into play.',
		strength: 	3,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'end_turn',
					type: 			'adjust_energy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally',
					on_failure:{
						0:{
								type: 			'destroy',
								min_hp: 		1,
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						}
					}
			},
			1:{
					proc: 			'kill_creature',
					type: 			'adjust_energy',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally',
			},
		},
		recipe_1: 	'ocean',
		recipe_2: 	'strangling_vine',
	},
	friendly_shaman:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','support','likes_spells','reclaims'],
		name: 		'friendly shaman',
		color: 		'337df4',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		card_priority: 4,
		needs_dead_spell: 2,
		in_play_value: 0,
		cost:{
					blue: 	2,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2657122_1280.jpg',
		text: 		'Recycles all your spell cards on play.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'recycle',
					reclaim_type: 	'spell',
					effect: 		12,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'research',
		recipe_2: 	'blue_spirit',
	},
	
	wise_owl:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','owl','flying','living','support','reclaims','proc_on_death','do_not_buff'],
		name: 		'wise owl',
		color: 		'337df4',
		favorite_col: 3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		needs_cards_in_grave: 1,
		card_priority: 4,
		in_play_value: 0,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'owl-1727370_640.jpg',
		text: 		'Recycle 1 card when this creature dies.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'wood_trinket',
		recipe_2: 	'old_book',
	},
	research:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','reclaims'],
		name: 		'research',
		color: 		'337df4',
		rarity: 	1,
		spell_target: 'auto',
		spell_auto_cast: 	true,
		needs_cards_in_grave: 3,
		card_priority: 5,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'books-1246674_640.jpg',
		text: 		'Recycle 3 cards.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'recycle',
					effect: 		3,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'old_book',
		recipe_2: 	'old_book',
	},
	unexpected_arrivals:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','reclaims'],
		name: 		'unexpected arrivals',
		color: 		'337df4',
		rarity: 	2,
		spell_target: 'auto',
		spell_auto_cast: 	true,
		needs_dead_creature: 2,
		card_priority: 5,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'seal-1347886_1280.jpg',
		text: 		'Recycle all your creature cards.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			1:{
					proc: 			'on_cast',
					type: 			'recycle',
					reclaim_type: 	'creature',
					effect: 		12,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'unsummon',
		recipe_2: 	'unsummon',
	},
	
	what_dreams_may_bring:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','reclaims'],
		name: 		'what dreams may bring',
		color: 		'337df4',
		rarity: 	3,
		spell_target: 'auto',
		spell_auto_cast: 	true,
		needs_cards_in_grave: 4,
		card_priority: 5,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'moon-1275126_1280.jpg',
		text: 		'Reclaim 4 cards, then discard a random card.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'reclaim',
					effect: 		4,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_cast',
					type: 			'discard_card',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'unexpected_arrivals',
		recipe_2: 	'research',
	},
	robbery:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','reclaims'],
		name: 		'robbery',
		color: 		'eae717',
		rarity: 	2,
		spell_target: 'auto',
		spell_auto_cast: 	true,
		min_enemy_creatures_in_play: 2,
		needs_cards_in_grave: 2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'pirate-2750361_1280.jpg',
		text: 		'Recycle 1 card for each enemy creature in play.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'recycle',
					effect: 		'enemy_creature_count',
					target_side: 	'ally'
			},
		},
		recipe_1: 	'pirate',
		recipe_2: 	'pirate',
	},
	taxes:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','dislikes_structures'],
		name: 		'taxes',
		rarity: 	2,
		color: 		'eae717',
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_structures_in_play: 1,
		max_friendly_structures: 0,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'tubingen-2256141_1280.jpg',
		text: 		'Each player pays 3 random mana for each structure he owns. If he cannot pay enough mana, destroy one of his structures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'reduce_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	'ally_structure_count',
					effect_multiplier: 3,
					target_side: 		'ally',
					on_failure:{
						0:{
								type: 			'destroy',
								target: 		'random',
								target_type: 	'structure',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						}
					}
			},
			1:{
					proc: 			'on_cast',
					type: 			'reduce_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	'enemy_structure_count',
					effect_multiplier: 3,
					target_side: 		'enemy',
					on_failure:{
						0:{
								type: 			'destroy',
								target: 		'random',
								target_type: 	'structure',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'enemy'
						}
					}
			}
		},
		recipe_1: 	'poverty',
		recipe_2: 	'locked_chest',
	},
	poverty:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support'],
		name: 		'poverty',
		rarity: 	0,
		color: 		'eae717',
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_mana: {blue: 	0,red: 	0,green:  0,purple: 0,orange: 0,yellow: 0,colorless:3},
		card_priority: 5,
		max_grave_cost: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'kid-2529907_640.jpg',
		text: 		'Reduce the enemy mana by up to 3.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'reduce_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	3,
					target_side: 		'enemy',
			},
		}
	},
	
	summon_terrain:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'mana',
		subtypes: 	['support','defense','summons'],
		name: 		'summon terrain',
		color: 		'337df4',
		rarity: 	4,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		card_priority: 5,
		max_friendly_structures: 1,
		cost:{
					blue: 	5,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'book-2152349_640.jpg',
		text: 		'Summons up to 2 random basic mana structures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'summon',
					card_id: 		{
						grove: 		1,
						ocean: 		1,
						marsh: 		1,
						furnace: 	1,
						desert: 	1,
						bank: 		1,
					},
					effect: 		2,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'ocean',
		recipe_2: 	'echo_mage',
	},
	magic_attunement:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['random_mana'],
		name: 		'magic attunement',
		color: 		'337df4',
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		card_priority: 5,
		max_grave_cost: 2,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'bokeh-1916807_640.jpg',
		text: 		'Gain 4 random mana.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	4,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'cleansing_water',
		recipe_2: 	'cleansing_water',
	},
	mana_swirl:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['likes_random_mana'],
		name: 		'mana swirl',
		color: 		'ffffff',
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		max_grave_cost: 	2,
		mana_needed:{colorless:6},
		pick_chance: 5,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'spiral-2401967_640.jpg',
		text: 		'Consumes up to 10 mana your gems cannot produce and generates an equal amount of mana your gems can produce.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'reduce_mana',
					mana_chances: 	'not_owned_gems',
					mana_amount: 	10,
					target_side: 		'ally',
			},
			1:{
					proc: 			'on_cast',
					type: 			'gain_mana',
					mana_chances: 	'owned_gems',
					mana_amount: 	'latest_success',
					target_side: 		'ally',
			},
		},
		recipe_1: 	'magic_attunement',
		recipe_2: 	'magic_attunement',
	},
	
	visions_of_life:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'mana',
		subtypes: 	['support','random_mana'],
		name: 		'visions of life',
		color: 		'337df4',
		rarity: 	2,
		min_creatures_in_play: 4,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		max_grave_cost: 2,
		card_priority: 5,
		cost:{
					blue: 	1,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'forest-2124111_640.jpg',
		text: 		'Gain 1 random mana for every creature in play.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	'creatures_in_play',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'magic_attunement',
		recipe_2: 	'research',
	},
	golden_light:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','hero_hp','defense'],
		name: 		'golden light',
		color: 		'eae717',
		rarity: 	3,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		max_enemy_hp: 30,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1,
					colorless: 1
		},
		image: 		'gold-313346_640.jpg',
		text: 		'Your hero gains 5 hp.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'hero_hp',
					effect: 		5,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'heros_prize',
		recipe_2: 	'holy_sacrifice',
	},
	blessed_armor:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','defense','buff'],
		name: 		'blessed armor',
		color: 		'eae717',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 3,
					colorless: 0
		},
		image: 		'knight-1996168_1280.jpg',
		text: 		'Targeted creature will increase it\'s hp by 1 whenever it\'s attacked.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					target: 		'same_slot',
					min_hp: 		1,
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'being_attacked',
							type: 			'increase_hp',
							target: 		'self',
							min_hp: 		1,
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
					},
					ability_text:'<br/><br/><b>Blessed armor</b>',
					target_side: 	'any'
			}
		},
		recipe_1: 	'golden_light',
		recipe_2: 	'home_guardian',
	},
	angelic_blessing:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','healing','defense','hero_hp','buff'],
		name: 		'angelic blessing',
		color: 		'eae717',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2,
					colorless: 0
		},
		image: 		'fantasy-4122160_640.jpg',
		text: 		'Fully heal targeted creature. Your hero gains hp equal to the healed amount.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					min_hp: 		1,
					type: 			'healing',
					target: 		'same_slot',
					target_type: 	'creature',
					target_highest_value: true,
					target_damaged: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'target_current_damage',
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'hero_hp',
					effect: 		'latest_success',
					target_side: 	'ally'
			},
		},
		recipe_1: 	'blessed_owl',
		recipe_2: 	'guiding_angel',
	},
	bless:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','defense','hero_hp','buff'],
		name: 		'bless',
		color: 		'eae717',
		rarity: 	0,
		
		target_stunned: false,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 1,
					colorless: 0
		},
		image: 		'fantasy-3311091_640.jpg',
		text: 		'Target creature gains +1/+1 until the start of next turn.<br/><br/>If the creature is damaged only it\'s max hp is reduced when bless ends.',
		flavor: 	'The gods favor that one.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					type: 			'increase_stats',
					effect_count: 	1,
					effect_strength: 1,
					effect_hp: 		1,
					target_side: 	'any',
			},
			1:{
					proc: 			'on_cast',
					target: 		'same_slot',
					target_type: 	'creature',
					target_highest_value: true,
					spell_target_min_strength: 1,
					target_amount: 	1,
					target_unique: 	true,
					
					target_side: 	'any',
					effects:{
						0:{
							type: 			'increase_stats',
							effect_count: 	1,
							effect_strength: 1,
							effect_hp: 		1,
						},
						1:{
							type: 			'gain_ability',
							do_not_zoom: 	true,
							effect_count: 	1,
							ability_gained:{
									proc: 			'start_turn',
									type: 			'increase_stats',
									target: 		'self',
									target_type: 	'creature',
									target_amount: 	1,
									target_unique: 	true,
									effect_count: 	1,
									effect_strength: -1,
									effect_max_hp: 	-1,
									target_side: 	'any',
									ability_text: 	'<br/><br/><b>Blessed</b>',
									remove_ability: true,
							},
							ability_text:'<br/><br/><b>Blessed</b>',
						}
					}
			},
		}
	},
	
	heros_prize:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','likes_death'],
		name: 		'hero\'s prize',
		color: 		'eae717',
		rarity: 	2,
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		card_priority: 1,
		stays_untill_triggered: true,
		minimum_enemy_doomed_creatures: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'fantasy-2777239_1280.jpg',
		text: 		'Your hero gains 3 hp for each enemy creature killed until end of turn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'any_enemy_creature_death',
					type: 			'hero_hp',
					effect: 		3,
					target_side: 	'ally'
			},
			1:{
					proc: 			'true_end_turn',
					type: 			'disappear',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'locked_chest',
		recipe_2: 	'masked_lady',
	},
	
	alchemist:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','support','likes_random_mana'],
		name: 		'alchemist',
		rarity: 	3,
		color: 		'a31079',
		place_on_empty_board: true,
		has_adjacent_enemy_creature: false,
		safe_play: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	1,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'man-4128421_640.jpg',
		text: 		'Turns 1 mana that is neither red or blue into 2 mana your gems can produce at the start of every turn.',
		strength: 	2,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'reduce_mana',
					mana_chances:{
									blue: 	0,
									red: 	0,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 		'ally',
					on_success:{
						0:{
								type: 			'gain_mana',
								mana_chances: 	'owned_gems',
								mana_amount: 	2,
								target_side: 		'ally'
						}
					}
			},
		},
		recipe_1: 	'mana_converter',
		recipe_2: 	'mana_swirl',
	},
	frost_dwarf:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','dwarf','muscle'],
		name: 		'frost dwarf',
		rarity: 	2,
		color: 		'a31079',
		favorite_col: 3,
		place_on_empty_board: true,
		has_adjacent_enemy_creature: true,
		suicidal: true,
		card_priority: 3,
		ai_strength: 3,
		in_play_value: 0,
		cost:{
					blue: 	1,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'portrait-3501664_640.jpg',
		text: 		'If killed by a creature, deals 1 damage to it and lowers it\'s attack by 1.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					target: 		'random',
					origin_unit: 	true,
					min_hp: 		1,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effects:{
						0:{
							type: 			'damage',
							effect_count: 	1,
							effect: 		1,
						},
						1:{
							type: 			'increase_strength',
							effect: 		-1
						}
					}
			}
		},
		recipe_1: 	'frozen_claw',
		recipe_2: 	'explosive_barrels',
	},
	
	melina_the_converter:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','defense','human','hero_hp'],
		name: 		'melina the converter',
		color: 		'5941f4',
		rarity: 	5,
		favorite_col: 4,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		card_priority: 5,
		in_play_value: 6,
		cost:{
					blue: 	3,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3219507_640.jpg',
		text: 		'Transfers 2 health from the enemy\'s hero to yours at the start of each turn.',
		strength: 	1,
		max_hp: 	8,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		-2,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		2,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'dreamcaster',
		recipe_2: 	'dark_lifestealer',
	},
	vampire_mistress:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','defense','support','buff_this'],
		name: 		'vampire mistress',
		color: 		'5941f4',
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3386749_640.jpg',
		text: 		'When dealt damage by a unit not adjacent to it, deals 3 damage to it. Recovers hp equal to damage dealt after attacking.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					target: 		'not_adjacent',
					min_hp: 		1,
					type: 			'damage',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		3
			},
			1:{
					proc: 			'after_attack',
					type: 			'healing',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'minor_vampire',
	},
	
	lightning_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','risky','human','mage','offense','ranged'],
		name: 		'lightning mage',
		color: 		'337df4',
		rarity: 	2,
		place_on_empty_board: false,
		needs_friendly_creatures: false,
		needs_friendly_structures: false,
		do_not_play_other: 'unit',
		has_adjacent_enemy: false,
		safe_play: true,
		card_priority: 5,
		in_play_value: 15,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-1711528_640.jpg',
		text: 		'Deals 3 damage to the unit with the highest hp every turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					highest_hp: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any'
			}
		},
		recipe_1: 	'lone_mage',
		recipe_2: 	'lightning',
	},
	shift_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','human','mage','ranged'],
		name: 		'shift mage',
		color: 		'337df4',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		min_enemy_creatures_in_play: 2,
		safe_play: true,
		card_priority: 5,
		in_play_value: 9,
		cost:{
					blue: 	3,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'woman-3428233_640.jpg',
		text: 		'At the start of turn, moves a random enemy creature next to it\'s allies. The target then deals 1 damage to all adjacent allies.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					target: 		'random',
					min_hp: 		1,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'enemy',
					effects:{
						0:{
							type: 			'move_to_empty',
							move_to_side: 	'ally',
							move_to_adjacent: true,
							target_side: 	'ally'
						},
						1:{
							type: 			'damage',
							target: 		'adjacent',
							min_hp: 		1,
							target_amount: 	4,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
						}
					}
			},
		},
		recipe_1: 	'glass_bones',
		recipe_2: 	'illusionist',
	},
	
	lightning:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['risky','offense'],
		name: 		'lightning',
		color: 		'337df4',
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		needs_friendly_creatures: false,
		needs_friendly_structures: false,
		card_priority: 1,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'flash-2568381_640.jpg',
		text: 		'Deals 8 damage to a random unit.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					not_self: 		true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		8,
					target_side: 	'any'
			}
		},
		recipe_1: 	'static_energy',
		recipe_2: 	'static_energy',
	},
	static_energy:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['risky','offense'],
		name: 		'static energy',
		color: 		'337df4',
		rarity: 	0,
		spell_target: 'unit',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'thunderstorm-3417042_640.jpg',
		text: 		'Deals either 1 or 5 damage to target unit.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					chance: 		50,
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		5,
					target_side: 	'any',
					on_failure:{
						0:{
							proc: 			'on_cast',
							type: 			'damage',
							min_hp: 		1,
							target: 		'same_slot',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any',
						}
					}
			}
		}
	},
	
	
	lightning_storm:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['risky','clears'],
		name: 		'lightning storm',
		color: 		'337df4',
		rarity: 	2,
		spell_target: 'unit',
		spell_target_side: 	1,
		min_enemy_spell_targets: 2,
		max_friendly_spell_targets: 0,
		check_targets_value: true,
		spell_auto_cast: 	true,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	6,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'colorado-2235819_640.jpg',
		text: 		'Deals 6 damage to a random unit. Will keep striking units as long as it makes kills.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'damage',
					target: 		'random',
					min_hp: 		1,
					not_self: 		true,
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		6,
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'damage',
					target: 		'random',
					min_hp: 		1,
					not_self: 		true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		6,
					target_side: 	'any'
			},
			2:{
					proc: 			'kill',
					type: 			'damage',
					target: 		'random',
					min_hp: 		1,
					not_self: 		true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		6,
					target_side: 	'any'
			}
		},
		recipe_1: 	'lightning',
		recipe_2: 	'lightning',
	},
	sandstorm:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense','risky'],
		name: 		'sandstorm',
		color: 		'ff8902',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 0,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'namibia-1130132_640.jpg',
		text: 		'Deals 2 damage to all creatures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'any'
			}
		},
		recipe_1: 	'desert',
		recipe_2: 	'desert',
	},
	curse_of_the_leech:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['risky','offense'],
		name: 		'curse of the leech',
		color: 		'a31079',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 2,
		mana_needed:{colorless:4},
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 4,
					orange: 0,
					yellow: 0
		},
		image: 		'art-3084798_640.jpg',
		text: 		'Reduce the hp of all creatures by 10.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'lower_hp',
					min_hp: 		2,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		10,
					target_side: 	'any'
			}
		},
		recipe_1: 	'deaths_call',
		recipe_2: 	'deaths_call',
	},
	poison_plague:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['risky','offense'],
		name: 		'poison plague',
		color: 		'a31079',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 2,
		mana_needed:{colorless:4},
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'microscope-4051661_640.jpg',
		text: 		'Poison all creatures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'poison',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'poison',
		recipe_2: 	'poison',
	},
	

	
	dark_visions:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','reclaims'],
		name: 		'dark visions',
		color: 		'a31079',
		spell_target: 'auto',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_hp: 16,
		needs_cards_in_grave: 5,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'portrait-3216933_1280.jpg',
		text: 		'Reclaim all your cards. Your hero takes 3 damage.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'reclaim',
					effect: 		12,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_cast',
					type: 			'hero_hp',
					effect: 		-3,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'darkling',
	},
	
	ghostburn:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense'],
		name: 		'ghostburn',
		color: 		'a31079',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4055030_640.jpg',
		text: 		'Deals an amount of damage to target creature equal to twice the amount of creatures in your grave.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target_highest_value: true,
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'dead_ally_creatures',
					effect_multiplier: 2,
					target_side: 	'any'
			}
		},
		recipe_1: 	'wandering_soul',
		recipe_2: 	'curse_of_vengeance',
	},
	deaths_call:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','offense'],
		name: 		'death\'s call',
		color: 		'a31079',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 5,
		takes_damage_this_turn: true,
		grave_cost_adjustment: -1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2881646_640.jpg',
		text: 		'Reduce the hp of target creature by 3.<br/><br/>This card\'s cost is not increased when it moves to the grave.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'lower_hp',
					min_hp: 		2,
					target_highest_value: true,
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any'
			},
			/*1:{
					proc: 			'on_cast',
					type: 			'return_to_deck',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}*/
		},
		recipe_1: 	'skeleton',
		recipe_2: 	'curse_of_vengeance',
	},
	vampires_embrace:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','healing','defense','buff'],
		name: 		'vampire\'s embrace',
		color: 		'a31079',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'gothic-1482950_640.jpg',
		text: 		'Target creature recovers hp equal to damage dealt after attacking.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					target_highest_value: true,
					min_hp: 		1,
					target: 		'same_slot',
					spell_target_min_strength: 2,
					target_min_value: 3,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_damaged: true,
					ability_gained:{
							proc: 			'after_attack',
							type: 			'healing',
							min_hp: 		1,
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		'latest_success',
							target_side: 	'ally'
					},
					ability_text:'<br/><br/><b>Vampiric</b>',
					target_side: 	'any'
			}
		},
		recipe_1: 	'cursed_vampire',
		recipe_2: 	'cursed_vampire',
	},
	masters_pain:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','direct_damage','debuff'],
		name: 		'master\'s pain',
		color: 		'a31079',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'psychic-3284198_640.jpg',
		text: 		'Target creature deals 1 damage to it\'s hero every turn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'start_turn',
							type: 			'hero_hp',
							effect: 		-1,
							target_side: 	'ally'
					},
					ability_text:'<br/><br/>Deals damage to it\'s hero every turn.',
					target_side: 	'any'
			}
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'curse_of_vengeance',
	},
	poison:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense','poison','debuff'],
		name: 		'poison',
		color: 		'a31079',
		spell_target: 'creature',
		spell_target_side: 	1,
		min_spell_targets: 1,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'poison-1481596_640.jpg',
		text: 		'Target creature becomes poisoned, suffering 1 damage each turn.<br/>Poison ignores damage reduction.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'poison',
					min_hp: 		1,
					target: 		'same_slot',
					target_type: 	'creature',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'nettle',
		recipe_2: 	'nettle',
	},
	
	snowfall:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','defense'],
		name: 		'snowfall',
		color: 		'337df4',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 2,
		card_priority: 1,
		cost:{
					blue: 	3,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'christmas-1909947_640.jpg',
		text: 		'Reduce the strength of all units by 1.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_strength',
					target: 		'random',
					min_hp: 		1,
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'shaman',
		recipe_2: 	'shaman',
	},
	elemental_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','mage','human','defense','frost','water','fire'],
		name: 		'elemental mage',
		color: 		'a31079',
		rarity: 	4,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 15,
		cost:{
					blue: 	3,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'smoke-3045221_640.jpg',
		text: 		'Burns 1 enemy unit and lowest the strength of 1 enemy unit every turn.',
		strength: 	2,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	1,
					min_hp: 		1,
					target_unique: 	true,
					target_side: 	'enemy',
					effect: 		-1
			},
			1:{
					proc: 			'start_turn',
					type: 			'burn',
					target: 		'random',
					target_amount: 	1,
					min_hp: 		1,
					target_unique: 	true,
					target_side: 	'enemy',
					effect: 		1
			},
		},
		recipe_1: 	'fire_mage',
		recipe_2: 	'frost_mage',
	},
	
	elemental_fists:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'elemental fists',
		color: 		'a31079',
		rarity: 	2,
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	false,
		card_priority: 1,
		target_enemy: true,
		cost:{
					blue: 	1,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fire-and-water-2354583_640.jpg',
		text: 		'Lowerst the strength of an enemy target by 2 and deals 4 damage to it.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		-2,
			},
			1:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effects:{
						0:{
							type: 			'increase_strength',
							effect: 		-2,
						},
						1:{
							type: 			'damage',
							effect: 		4,
						}
						
					}
			},
		},
		recipe_1: 	'fire_bolt',
		recipe_2: 	'frozen_claw',
	},
	
	dance_of_the_butterfly:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support'],
		name: 		'dance of the butterfly',
		color: 		'42f4bc',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_spell_targets: 3,
		max_creatures_in_play: 6,
		card_priority: 1,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'abstract-979682_640.jpg',
		text: 		'Moves all creatures to random empty slots.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'wormhole',
		recipe_2: 	'wormhole',
	},
	wormhole:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support'],
		name: 		'wormhole',
		color: 		'337df4',
		rarity: 	1,
		needs_friendly_creatures: true,
		max_creatures_in_play: 6,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'wormhole-2514312_640.jpg',
		text: 		'Moves target creature to a random empty slot.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'research',
		recipe_2: 	'static_energy',
	},
	enrage_enemy:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	[],
		name: 		'enrage enemy',
		color: 		'f43232',
		rarity: 	2,
		needs_friendly_creatures: true,
		spell_target: 'creature',
		spell_target_side: 	1,
		max_creatures_in_play: 2,
		max_strength: 0,
		target_enemy: true,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'anger-18658_640.jpg',
		text: 		'Target enemy creature gains 1 strength and moves next to an ally.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'same_slot',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
					effects:{
						0:{
								type: 			'increase_strength',
								effect: 		1,
						},
						1:{
								type: 			'move_to_empty',
								move_to_side: 	'enemy',
								move_to_adjacent: true,
						},
					}
			}
		},
		recipe_1: 	'rage_potion',
		recipe_2: 	'wormhole',
	},
	
	tower:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'main',
		subtypes: 	['defense','offense'],
		name: 		'tower',
		color: 		'eae717',
		rarity: 	3,
		card_priority: 3,
		damage_reduction: 	1,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		ai_strength: 2,
		in_play_value: 10,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 5
		},
		image: 		'warwick-castle-2484196_640.jpg',
		text: 		'Deals 2 damage to an enemy unit in the same row every turn. Reduces damage taken by 1.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'same_row',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_row',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'fort',
		recipe_2: 	'catapult',
	},
	castle:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'cheap',
		subtypes: 	['defense','hero_hp'],
		name: 		'castle',
		color: 		'eae717',
		rarity: 	2,
		card_priority: 5,
		damage_reduction: 	1,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 3,
					colorless: 0
		},
		image: 		'castle-832543_640.jpg',
		text: 		'Increase your hero\'s hp by 1 each turn. Reduces damage taken by 1.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'wall',
		recipe_2: 	'masked_lady',
	},
	fort:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['defense','support'],
		name: 		'fort',
		color: 		'eae717',
		rarity: 	3,
		card_priority: 5,
		safe_play: true,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		needs_friendly_creatures: true,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 4,
					colorless: 0
		},
		image: 		'castle-3493566_1280.jpg',
		text: 		'Increase all your creatures\' hp by 1 on play. Increases the hp af any ally creature that enters the game by 1. Reduces the max hp of all ally creatures by 1 when this leaves play.',
		strength: 	false,
		max_hp: 	5,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'ally_creature_summoned',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'leave_play',
					type: 			'increase_max_hp',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'any_ally_creature_transformed',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'castle',
		recipe_2: 	'knight',
	},
	
	flame_archer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','living','human','ranged','fire','muscle'],
		name: 		'flame archer',
		color: 		'd8b247',
		rarity: 	3,
		favorite_col: 4,
		card_priority: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	2,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'woman-2209887_640.jpg',
		text: 		'Attacks an enemy unit in the same row every turn.<br/><br/>Burns any unit it damages.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'same_row',
		abilities: 	{
			0:{
					proc: 			'dealt_damage_to',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'archer',
		recipe_2: 	'meteor',
	},
	archer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','living','human','ranged','muscle'],
		name: 		'archer',
		color: 		'eae717',
		rarity: 	1,
		favorite_col: 4,
		card_priority: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		safe_play: true,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'people-2561105_640.jpg',
		text: 		'Attacks enemies in the same row.',
		flavor: 	'Aim... Steady...',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'same_row',
		abilities: 	{
		},
		recipe_1: 	'peasant',
		recipe_2: 	'log',
	},
	
	fire_knight:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','knight','armored','human','living','offense'],
		name: 		'fire knight',
		color: 		'd8b247',
		rarity: 	3,
		card_priority: 3,
		has_adjacent_enemy: true,
		has_most_adjacent: true,
		no_adjacent_ally: 	true,
		place_on_empty_board: false,
		damage_reduction: 1,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	2,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 2,
					colorless: 1
		},
		image: 		'cd-cover-3432115_640.jpg',
		text: 		'Reduces damage taken by 1.<br/><br/>Deals 2 damage to all adjacent units on play.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'any'
			}
		},
		recipe_1: 	'knight',
		recipe_2: 	'explosive_barrels',
	},
	
	
	wall:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'cheap',
		subtypes: 	[],
		name: 		'wall',
		color: 		'eae717',
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		card_priority: 5,
		ai_strength: 1,
		in_play_value: -10,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'malham-cove-3196076_640.jpg',
		text: 		'',
		flavor: 	'It will take some time to take that down...',
		strength: 	false,
		max_hp: 	20,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'boulder',
		recipe_2: 	'boulder',
	},
	carpenter:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','support','likes_structures'],
		name: 		'carpenter',
		color: 		'eae717',
		rarity: 	2,
		needs_friendly_structures: true,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'people-3308738_640.jpg',
		text: 		'Increases the health of an ally structure by 1 each turn.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'peasant',
		recipe_2: 	'catapult',
	},
	engineer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'none',
		subtypes: 	['living','human','likes_structures'],
		name: 		'engineer',
		color: 		'eae717',
		rarity: 	2,
		needs_damaged_friendly_structure: true,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'woman-2380284_640.jpg',
		text: 		'Repairs an ally structure by 2 each turn.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'peasant',
		recipe_2: 	'crumble',
	},
	
	catapult:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'cheap',
		subtypes: 	['offense','ranged'],
		name: 		'catapult',
		color: 		'eae717',
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 4,
		ai_strength: 1,
		in_play_value: 3,
		safe_play: true,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'rome-2353383_640.jpg',
		text: 		'Deals 1 damage to one enemy unit in the same row every turn.',
		strength: 	false,
		max_hp: 	2,
		attack_type: 	'same_row',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_row',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'boulder',
		recipe_2: 	'log',
	},
	workshop:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['support','likes_structures','dislikes_structures'],
		name: 		'workshop',
		color: 		'eae717',
		rarity: 	2,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 4,
		uses_energy: true,
		energy: 0,
		in_play_value: 3,
		minimum_doomed_structures: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 0,
					yellow: 1
		},
		image: 		'fantasy-3049543_1920.jpg',
		text: 		'Gains 2 energy when any structure is destroyed.<br/><br/>Recycles a random card at the start of each turn at the cost of 1 energy.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'none',
		abilities: 	{
			0:{
				proc: 			'start_turn',
				type: 			'recycle',
				effect: 		1,
				target: 		'self',
				target_amount: 	1,
				target_unique: 	true,
				min_energy: 	1,
				target_side: 	'ally',
				on_success:{
					0:{
						type: 			'adjust_energy',
						target: 		'self',
						target_amount: 	1,
						target_unique: 	true,
						effect_count: 	1,
						effect: 		-1,
						target_side: 	'ally',
					},
				}
			},
			1:{
					proc: 			'any_structure_death',
					type: 			'adjust_energy',
					target: 		'self',
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'wall',
		recipe_2: 	'locked_chest',
	},
	
	hidden_caves:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'cheap',
		subtypes: 	['offense'],
		name: 		'hidden caves',
		color: 		'ff8902',
		rarity: 	2,
		place_on_empty_board: false,
		damage_reduction: 	2,
		card_priority: 5,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'fantasy-2945514_640.jpg',
		text: 		'Reduces all damage received by 2.',
		strength: 	0,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
		},
		recipe_1: 	'mud_people',
		recipe_2: 	'mud_people',
	},
	outpost:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'special',
		subtypes: 	['healing','support','defense'],
		name: 		'outpost',
		color: 		'ff8902',
		rarity: 	2,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		needs_target: 1,
		safe_play: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green:  0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'house-2645436_640.jpg',
		text: 		'Heals all allied creatures in the back column by 1 each turn.',
		strength: 	false,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'ally_col',
					target_type: 	'creature',
					target_amount: 	3,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'wall',
		recipe_2: 	'combat_medic',
	},
	
	exotic_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','human','mage','living','offense','ranged','buff_this'],
		name: 		'exotic mage',
		color: 		'a85425',
		rarity: 	4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		card_priority: 3,
		safe_play: true,
		ai_strength: 2,
		in_play_value: 5,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'fantasy-2495660_640.jpg',
		text: 		'Deals damage equal to it\'s strength to a random enemy creature every turn. Increases it\'s strength by 1 on killing a creature.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'strength',
					target_side: 	'enemy'
			},
			1:{
					proc: 			'kill_creature',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'fire_mage',
		recipe_2: 	'power_mage',
	},
	
	elf_striker:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','elf','offense','proc_on_death','do_not_buff','muscle'],
		name: 		'elf striker',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		card_priority: 3,
		one_hit_kill: true,
		ai_strength: 2,
		attack_amount: 2,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'fantasy-2778822_1280.jpg',
		text: 		'Attacks twice. Generates 1 red mana on death.',
		strength: 	2,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 		'ally'
			}
		},
		recipe_1: 	'elf_warrior',
		recipe_2: 	'surprise_attack',
	},
	burning_angel:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','angel','flying','moves'],
		name: 		'burning angel',
		color: 		'f43232',
		rarity: 	5,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		card_priority: 5,
		burning: 1,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'angel-1284369_640.jpg',
		text: 		'Enters the game burning.<br/><br/>Burns any unit it damages.<br/><br/>Moves to a random empty slot at the start of turn.<br/><br/>Removes burning from a random ally each turn. Burns a random enemy if successful.',
		flavor: 	'I have come with fire.',
		strength: 	5,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			1:{
					proc: 			'dealt_damage_to',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			2:{
					proc: 			'start_turn',
					type: 			'burn',
					burning: 		true,
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'burn',
								min_hp: 		1,
								target: 		'random',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'enemy'
						},
					}
			}
		},
		recipe_1: 	'guiding_angel',
		recipe_2: 	'bless',
	},
	fire_eater:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','angel','flying'],
		name: 		'fire eater',
		color: 		'f43232',
		rarity: 	1,
		place_on_empty_board: false,
		immune_to_burning: true,
		card_priority: 5,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fire-eaters-634585_640.jpg',
		text: 		'Removes burning from a random ally each turn. Heals itself by 1 if successful.<br/><br/>Immune to burning.',
		flavor: 	'Eat this! Okay.',
		strength: 	2,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			1:{
					proc: 			'start_turn',
					type: 			'burn',
					burning: 		true,
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'healing',
								min_hp: 		1,
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						},
					}
			}
		},
		recipe_1: 	'peasant',
		recipe_2: 	'ignite',
	},
	
	fire_steed:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['animal','horse','living','offense','moves','ranged'],
		name: 		'fire steed',
		color: 		'f43232',
		rarity: 	4,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	7,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fire-horse-2492947_640.jpg',
		text: 		'Moves to an enemy before attacking.<br/><br/>Moves away from enemies after taking damage.<br/><br/>Burns any adjacent unit that damages it or gets damaged by it.',
		strength: 	5,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			1:{
					proc: 			'take_damage',
					type: 			'burn',
					min_hp: 		1,
					target: 		'adjacent',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			2:{
					proc: 			'take_damage',
					type: 			'move_to_empty',
					move_to_side: 	'enemy',
					proc_on_death: 	false,
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
			3:{
					proc: 			'dealt_damage_to',
					type: 			'burn',
					min_hp: 		1,
					target: 		'adjacent',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			
		},
		recipe_1: 	'earth_steed',
		recipe_2: 	'fiery_sacrifice',
	},
	
	fire_salamander:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','salamander','animal','living','offense','muscle'],
		name: 		'fire salamander',
		color: 		'f43232',
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 2,
		suicidal: true,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'amphibia-87916_640.jpg',
		text: 		'Deals 1 damage to any enemy unit that is about to attack it.',
		flavor: 	'Hot to the touch',
		strength: 	2,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'being_attacked',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'ignite',
		recipe_2: 	'wood_trinket',
	},
	fire_ant:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','ant','animal','living','offense','buff_this'],
		name: 		'fire ant',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		damage_reduction: 1,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fire-ant-1091301_640.jpg',
		text: 		'Burns any unit it damages. Reduces damage received by 1.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'dealt_damage_to',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'fire_salamander',
		recipe_2: 	'furnace',
	},
	deamonic_shaman:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','living','offense','buff_this'],
		name: 		'deamonic shaman',
		color: 		'f43232',
		rarity: 	2,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'monster-1025145_640.jpg',
		text: 		'Either deals 1 additional damage or heals itself by 1 after attacking a unit.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'attacked_unit',
					type: 			'damage',
					min_hp: 		1,
					origin_unit: 	true,
					origin_not_self: true,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy',
					on_failure:{
						1:{
								type: 			'healing',
								min_hp: 		1,
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						}
					}
			},
		},
		recipe_1: 	'fire_salamander',
		recipe_2: 	'furnace',
	},
	
	flame_child:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'mana',
		subtypes: 	['fire','human','living','support','ranged'],
		name: 		'flame child',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 1,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 2
		},
		image: 		'woman-2593264_1280.jpg',
		text: 		'Generates 1 red mana and deals 1 damage to a random enemy unit at the start of each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 		'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'furnace',
		recipe_2: 	'fire_caster',
	},

	flame_bard:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','bard','human','living','support','offense','ranged'],
		name: 		'flame bard',
		color: 		'ed8647',
		rarity: 	3,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 2,
					yellow: 0
		},
		image: 		'fantasy-4103064_640.jpg',
		text: 		'Deals 2 damage to a random other creature at the start of each turn. That creature gains 1 strength.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					not_self: 		true,
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'damage',
							effect_count: 	1,
							effect: 		2,
						},
						1:{
							type: 			'increase_strength',
							effect: 		1
						}
					}
			}
		},
		recipe_1: 	'flame_child',
		recipe_2: 	'viking',
	},
	half_deamon:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['deamon','offense','ranged','moves','muscle'],
		name: 		'half deamon',
		color: 		'f43232',
		rarity: 	2,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'daemon-2980812_640.jpg',
		text: 		'Tries to move forward in the same row each turn.',
		flavor: 	'Rhaaagh!',
		strength: 	3,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					target: 		'self',
					specific_slot: 	'directly_in_front',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
			},
		},
		recipe_1: 	'deamon',
		recipe_2: 	'deamon',
	},
	
	magma_boulder:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','offense','ranged','moves','muscle'],
		name: 		'magma boulder',
		color: 		'f43232',
		rarity: 	1,
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		immune_to_poison: true,
		suicidal: true,
		card_priority: 1,
		in_play_value: 3,
		ai_strength: 3,
		burning: 1,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'planet-2967684_640.jpg',
		text: 		'Enters the game burning.<br/><br/>Tries to move forward in the same row at the end of turn. If it cannot, it deals 3 damage to the unit in front of it and 1 damage to itself.<br/><br/>Immune to poison.',
		flavor: 	'Keep rolling, keep burning.',
		strength: 	false,
		max_hp: 	3,
		attack_type: 	'directly_in_front',
		abilities: 	{
			0:{
					proc: 			'end_turn',
					type: 			'move_to_empty',
					target: 		'self',
					specific_slot: 	'directly_in_front',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
					on_failure:{
						0:{
							type: 			'damage',
							min_hp: 		1,
							target: 		'directly_in_front',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		3,
							target_side: 	'any'
						},
						1:{
							type: 			'damage',
							min_hp: 		1,
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any'
						},
						2:{
							type: 			'move_to_empty',
							target: 		'self',
							specific_slot: 	'directly_in_front',
							origin_not_self: true,
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any',	
						}
						
					}
				
			},
		},
		recipe_1: 	'boulder',
		recipe_2: 	'ignite',
	},
	fire_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','human','living','offense','ranged'],
		name: 		'fire mage',
		color: 		'f43232',
		rarity: 	3,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		min_enemy_spell_targets: 2,
		card_priority: 3,
		in_play_value: 18,
		cost:{
					blue: 	0,
					red: 	7,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'portrait-3377271_640.jpg',
		text: 		'Deals 2 damage to up to 2 random enemy units every turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	2,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'flame_child',
		recipe_2: 	'fire_pit',
	},
	dancing_devil:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','devil','living','offense','ranged','summons','moves'],
		name: 		'dancing devil',
		color: 		'f43232',
		rarity: 	3,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'devil-3852875_640.jpg',
		text: 		'Moves to a random slot every turn.<br/><br/>Summons a random imp on killing a creature.',
		flavor: 	'Wheeee!',
		strength: 	2,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
			},
			1:{
					proc: 			'kill_creature',
					type: 			'summon',
					card_id: 		{
						imp: 		3,
					},
					effect: 		1,
			}
		},
		recipe_1: 	'fire_pit',
		recipe_2: 	'fire_pit',
	},
	
	red_dragon:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['fire','dragon','living','offense','ranged'],
		name: 		'red dragon',
		color: 		'f43232',
		rarity: 	5,
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 1,
		in_play_value: 100,
		cost:{
					blue: 	0,
					red: 	9,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'dragons-1957156_640.jpg',
		text: 		'Deals 4 damage to an adjacent enemy unit every turn.',
		strength: 	7,
		max_hp: 	8,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'explode',
		recipe_2: 	'volcano',
	},
	
	spark_holder:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','human','living','likes_spells','support'],
		name: 		'spark holder',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 3,
		ai_strength: 1,
		in_play_value: 7,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-4163023_640.jpg',
		text: 		'Deals 2 damage a random enemy unit after any spell is cast.',
		strength: 	1,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_spell_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'fire_bolt',
		recipe_2: 	'lone_mage',
	},

	fire_genie:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','human','living','offense','ranged','do_not_buff'],
		name: 		'fire genie',
		color: 		'a31079',
		rarity: 	3,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		do_not_cast_spell_unless_damaged: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	3,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4166773_640.jpg',
		text: 		'Deals 2 damage to 1 random enemy units every turn. If you play any spell, return fire genie to it\'s owner\'s hand.',
		strength: 	3,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'before_ally_spell_cast',
					type: 			'unsummon',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1
			}
		},
		recipe_1: 	'genie',
		recipe_2: 	'spark_holder',
	},
	
	heat_witch:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','human','witch','living','offense'],
		name: 		'heat witch',
		color: 		'f43232',
		has_adjacent_enemy: true,
		min_adjacent: 2,
		has_most_adjacent: true,
		place_on_empty_board: false,
		no_adjacent_ally: true,
		card_priority: 5,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3384363_1280.jpg',
		text: 		'When any other unit enters the game, this creature deals 1 damage to all adjacent units and returns to your reserves.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_summoned',
					origin_not_self: true,
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'any_summoned',
					origin_not_self: true,
					type: 			'unsummon',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'peasant',
		recipe_2: 	'ignite',
	},
	
	fire_caster:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['fire','mage','human','living','support','drains_mana','offense','ranged'],
		name: 		'fire caster',
		color: 		'f43232',
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 3,
		mana_needed:{red:1},
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-1892960_1280.jpg',
		text: 		'Consumes 1 red mana every turn. Deals 2 damage to a random enemy unit if successful. Refunds the mana if there is no target.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					mana_needed:{
									red: 1
					},
					proc: 			'start_turn',
					type: 			'reduce_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 		'ally',
					on_success:{
						1:{
								type: 			'damage',
								min_hp: 		1,
								target: 		'random',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		2,
								target_side: 	'enemy',
								on_failure:{
									0:{
										type: 			'gain_mana',
										mana_chances:{
														red: 	1,
										},
										mana_amount: 	1,
										target_side: 		'ally'
									}
								}
						}
					}
			},
			
		},
		recipe_1: 	'peasant',
		recipe_2: 	'candle',
	},
	
	earth_scorcher:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['fire','mage','human','living','dislikes_structures','reclaims','support'],
		name: 		'earth scorcher',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 3,
		place_on_empty_board: true,
		needs_friendly_structures: false,
		needs_cards_in_grave: 1,
		card_priority: 3,
		suicidal: true,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'woman-593307_640.jpg',
		text: 		'Burns all your structures and you recycle a card on play.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	3,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'on_play',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'heat_witch',
		recipe_2: 	'crumble',
	},
	
	servant_of_incineration:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','mage','human','living','offense','ranged'],
		name: 		'servant of incineration',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3373171_640.jpg',
		text: 		'Burns one random enemy unit every turn, making it suffer 1 damage every turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'fire_caster',
		recipe_2: 	'incineration',
	},
	
	flame_greeter:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','mage','human','living','defense'],
		name: 		'flame greeter',
		color: 		'f43232',
		rarity: 	2,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'woman-3461565_640.jpg',
		text: 		'When an enemy creature enters play, burns it and itself.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'enemy_creature_summoned',
					type: 			'burn',
					proc_on_death: 	false,
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'enemy_creature_summoned',
					type: 			'burn',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'heat_witch',
		recipe_2: 	'ignite',
	},
	
	orc_apprentice:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','orc','living','offense','support','healing','ranged'],
		name: 		'orc apprentice',
		color: 		'f43232',
		rarity: 	4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'female-4234375_640.png',
		text: 		'Has a 50% chance to deal 1 damage to a random enemy unit every turn. Heals a friendly creature for 1 if it fails.',
		strength: 	2,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					chance: 		50,
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy',
					on_failure:{
						1:{
								type: 			'healing',
								min_hp: 		1,
								target: 		'random',
								target_type: 	'creature',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						}
					}
			},
			
		},
		recipe_1: 	'orc_shaman',
		recipe_2: 	'fiery_sacrifice',
	},
	orc_shaman:{
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','orc','living','offense','support','healing','ranged'],
		name: 		'orc shaman',
		color: 		'f43232',
		rarity: 	3,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	5,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'ork-3383533_640.jpg',
		text: 		'Has a 50% chance to deal 1 damage to a random enemy unit every turn. Heals a friendly creature for 1 if it fails.',
		strength: 	4,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					chance: 		50,
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy',
					on_failure:{
						1:{
								type: 			'healing',
								min_hp: 		1,
								target: 		'random',
								target_type: 	'creature',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'ally'
						}
					}
			},
		},
		recipe_1: 	'orc_fire_mage',
		recipe_2: 	'incineration',
	},
	orc_fire_mage:{
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','orc','living','offense','ranged'],
		name: 		'orc fire mage',
		color: 		'f43232',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		ai_strength: 4,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fire-3383552_640.jpg',
		text: 		'Deals 2 damage to a random enemy unit every turn.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			},
		},
		recipe_1: 	'fire_caster',
		recipe_2: 	'fire_bolt',
	},
	
	huge_orc:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','orc','muscle'],
		name: 		'huge orc',
		color: 		'f43232',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 1,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-3389041_1280.jpg',
		text: 		'Gains 1 strength on destroying a unit.',
		strength: 	5,
		max_hp: 	7,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'furnace',
		recipe_2: 	'red_spirit',
	},
	
	crazed_witch:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','human','witch','risky','offense','ranged'],
		name: 		'crazed witch',
		color: 		'f43232',
		rarity: 	4,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'photoshop-3496740_640.jpg',
		text: 		'20% chance of destroying a random enemy unit every turn.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					chance: 		20,
					type: 			'destroy',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'alchemist',
		recipe_2: 	'fiery_sacrifice',
	},
	
	daughter_of_ruin:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','human','support','likes_structures','dislikes_structures'],
		name: 		'daughter of ruin',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 4,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		minimum_doomed_structures: 1,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3448999_640.jpg',
		text: 		'Burns all structures each turn. Gains 1 strength whenever a structure is destroyed.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	6,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'any_structure_death',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'crumble',
		recipe_2: 	'demolitionist',
	},
	mother_of_ruin:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','human','support','likes_structures','dislikes_structures'],
		name: 		'mother of ruin',
		color: 		'f43232',
		rarity: 	3,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		minimum_enemy_doomed_structures: 1,
		card_priority: 1,
		uses_energy: true,
		energy: 0,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'gothic-3759584_1280.jpg',
		text: 		'Gains 1 energy and deals damage equal to twice her energy to 1 enemy unit whenever a structure is destroyed.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_structure_death',
					type: 			'adjust_energy',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'damage',
								min_hp: 		1,
								target: 		'random',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		'current_energy',
								effect_multiplier: 2,
								target_side: 	'enemy'
						},
					}
			}
		},
		recipe_1: 	'daughter_of_ruin',
		recipe_2: 	'daughter_of_ruin',
	},
	forest_burner:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['fire','mage','human','living'],
		name: 		'forest burner',
		color: 		'f43232',
		rarity: 	3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		max_friendly_spell_targets: 0,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'druid-3442656_640.jpg',
		text: 		'Applies 3 burn to an enemy unit with 6 hp or more each turn.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'burn',
					min_hp: 		6,
					target: 		'random',
					//has_color: 		'green',
					//min_hp: 		6,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'arsonist',
		recipe_2: 	'arsonist',
	},
	
	burning_owl:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','owl','animal','flying','living','offense','proc_on_death','do_not_buff'],
		name: 		'burning owl',
		color: 		'f43232',
		favorite_col: 3,
		no_adjacent_ally: 	true,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 3,
		ai_strength: 4,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'art-1034408_640.jpg',
		text: 		'Deals 4 damage to a random adjacent unit when it dies.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'any'
			}
		},
		recipe_1: 	'ignite',
		recipe_2: 	'wood_trinket',
	},
	
	flame_dancer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','dancer','human','living','offense','ranged','moves'],
		name: 		'flame dancer',
		color: 		'f43232',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		max_creatures_in_play: 4,
		do_not_play_other: 'unit',
		needs_friendly_creatures: false,
		card_priority: 3,
		ai_strength: 5,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-2514504_640.jpg',
		text: 		'Moves to a random spot and deals 2 damage to all adjacent units before attacking.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'before_attack',
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'any'
			}
		},
		recipe_1: 	'explosive_barrels',
		recipe_2: 	'deamon',
	},
	
	arsonist:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['fire','human','living','offense','dislikes_structures'],
		name: 		'arsonist',
		color: 		'f43232',
		rarity: 	2,
		has_adjacent_enemy_creature: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-woman-1721663_640.jpg',
		text: 		'Burns a random enemy structure every turn.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'burn',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_type: 	'structure',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'burning_owl',
		recipe_2: 	'fire_caster',
	},
	
	plasma_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['plasma','mage','human','living','offense','fire','ranged'],
		name: 		'plasma mage',
		color: 		'f43232',
		rarity: 	3,
		favorite_col: 4,
		card_priority: 3,
		in_play_value: 18,
		cost:{
					blue: 	0,
					red: 	5,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'gothic-3156462_640.jpg',
		text: 		'Deals 2 damage to all enemy units in the same row every turn.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_row',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'fire_blaster',
		recipe_2: 	'flame_child',
	},

	
	

	
	warlock:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['fire','mage','human','living','support','offense','ranged'],
		name: 		'warlock',
		color: 		'a5126a',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'witch-1843934_640.jpg',
		text: 		'Summons a random imp and lowers the strength of an enemy unit by 1 every turn.',
		strength: 	3,
		max_hp: 	7,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'summon',
					card_id: 		{
						imp: 		3,
					},
					effect: 		1,
			},
			1:{
					proc: 			'start_turn',
					type: 			'decrease_strength',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'fire_mage',
		recipe_2: 	'deamonic_mage',
	},
	deamonic_vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','defense','vampire','deamon','buff_this'],
		name: 		'deamonic vampire',
		color: 		'a5126a',
		rarity: 	4,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'horror-3496724_640.jpg',
		text: 		'Drains up to 1 hp from each enemy creature every turn.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'drain_hp',
					target: 		'random',
					target_type: 	'creature',
					min_hp: 		2,
					target_amount: 	9,
					not_self: 		true,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'vampire',
		recipe_2: 	'deamonic_mage',
	},
	deamonic_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','deamon','living','risky','offense','ranged'],
		name: 		'deamonic mage',
		color: 		'a5126a',
		rarity: 	3,
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'gothic-1432138_640.jpg',
		text: 		'Each turn, deals 1 damage to an enemy unit. If successful deals 1 damage to itself.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
				proc: 			'start_turn',
				type: 			'damage',
				min_hp: 		1,
				target: 		'random',
				target_amount: 	1,
				target_unique: 	true,
				effect_count: 	1,
				effect: 		1,
				target_side: 	'enemy',
				on_success:{
					0:{
							type: 			'damage',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
					}
				}
			}
		},
		recipe_1: 	'fire_blaster',
		recipe_2: 	'dark_sage',
	},
	bringer_of_pain:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','risky','support','human'],
		name: 		'bringer of pain',
		color: 		'a5126a',
		rarity: 	4,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'gothic-1648226_1280.jpg',
		text: 		'At the start of turn, deals damage to both heroes equal to the number of their ally creatures.',
		strength: 	2,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		'ally_creature_count',
					effect_multiplier: -1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		'enemy_creature_count',
					effect_multiplier: -1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'ghost_bride',
		recipe_2: 	'flame_keeper',
	},
	zombie_feast:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['risky','clears'],
		name: 		'zombie feast',
		color: 		'a5126a',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 2,
		check_targets_value: true,
		min_targets_value: 20,
		min_enemy_hp: 20,
		min_actions_left: 3,
		card_priority: 5,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'zombies-598393_1280.jpg',
		text: 		'Destroy 2 random enemy creatures. Your hero suffers 10 damage.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	2,
					target_unique: 	true,
					target_side: 	'enemy',
			},
			1:{
					proc: 			'on_cast',
					type: 			'hero_hp',
					effect: 		-10,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'enrage_enemy',
		recipe_2: 	'ghost_mirror',
	},
	
	flame_deamon:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['fire','deamon','undead','living','offense'],
		name: 		'flame deamon',
		color: 		'a5126a',
		rarity: 	3,
		no_adjacent_ally: 	true,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		ai_strength: 7,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'dragon-955348_640.jpg',
		text: 		'Deals 4 damage to a random adjacent unit every turn. 50% chance to resurrect on death.',
		strength: 	4,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					chance: 		50,
					type: 			'resurrect',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'any'
			}
		},
		recipe_1: 	'spectral_horse',
		recipe_2: 	'fire_blaster',
	},
	
	fire_deer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','deer','animal','living','offense','ranged'],
		name: 		'fire deer',
		color: 		'578227',
		rarity: 	3,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		ai_strength: 3,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	3,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-3232570_640.jpg',
		text: 		'Deals 2 damage to 1 random enemy unit every turn.',
		strength: 	2,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'spark_holder',
		recipe_2: 	'grove_mystic',
	},
	underground_forest:{
		stats_version: 		2,
		type: 		'structure',
		card_type: 	'mana',
		subtypes: 	['living','support'],
		name: 		'underground forest',
		color: 		'578227',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: false,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	2,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-2750995_1280.jpg',
		text: 		'Generates 1 green or red mana at the start of each turn. Regenerates 2 health at the start of every turn.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 		'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'grove',
		recipe_2: 	'furnace',
	},
	
	flame_fairy:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','mage','fairy','living','offense','ranged','moves'],
		name: 		'flame fairy',
		color: 		'578227',
		rarity: 	3,
		favorite_col: 4,
		place_on_empty_board: false,
		has_adjacent_enemy: false,
		card_priority: 3,
		ai_strength: 3,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-3350952_640.jpg',
		text: 		'Deals 2 damage to 1 random enemy unit every turn. Moves away from enemies at the start of each turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy',
			},
			1:{
					proc: 			'start_turn',
					type: 			'move_to_empty',
					min_hp: 		1,
					move_to_side: 	'enemy',
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'faithfull_fairy',
		recipe_2: 	'spark_holder',
	},
	
	sonja:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','human','offense','buff_this'],
		name: 		'sonja',
		color: 		'f43232',
		rarity: 	5,
		place_on_empty_board: true,
		has_adjacent_enemy_creature: true,
		has_most_adjacent: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	8,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'celtic-woman-1880944_640.jpg',
		text: 		'Attacks all adjacent enemy creatures if still alive after taking damage.',
		strength: 	3,
		max_hp: 	7,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'attack_unit',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'crazed_witch',
		recipe_2: 	'lion_warrior',
	},
	lion_warrior:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['fire','lion','animal','living','offense','buff_this'],
		name: 		'lion warrior',
		color: 		'f43232',
		rarity: 	4,
		place_on_empty_board: true,
		has_adjacent_enemy_creature: true,
		card_priority: 3,
		attack_amount: 2,
		energy: 0,
		uses_energy: true,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	7,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-3002301_640.jpg',
		text: 		'Attacks twice. Gains 1 energy when destroying any unit. Deals damage equal to it\'s energy to all enemy units on death.',
		strength: 	3,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill',
					type: 			'adjust_energy',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'own_death',
					type: 			'damage',
					target: 		'random',
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'current_energy',
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'elf_striker',
		recipe_2: 	'orc_shaman',
	},
	
	fire_blaster:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['fire','mage','human','living','offense'],
		name: 		'fire blaster',
		color: 		'f43232',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy_creature: true,
		has_most_adjacent: true,
		card_priority: 3,
		in_play_value: 15,
		cost:{
					blue: 	0,
					red: 	5,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-1950132_640.jpg',
		text: 		'Deals 2 damage to all adjacent creatures and sends them to a random empty slot at the start of every turn.',
		strength: 	1,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					target: 		'adjacent',
					min_hp: 		1,
					target_type: 	'creature',
					target_amount: 	4,
					target_unique: 	true,
					target_side: 	'enemy',
					effects:{
						0:{
							type: 			'damage',
							effect_count: 	1,
							effect: 		2,
						},
						1:{
							type: 			'move_to_empty',
						}
					}
			},
			/*1:{
					proc: 			'end_turn',
					type: 			'move_to_empty',
					target: 		'adjacent',
					target_type: 	'creature',
					target_amount: 	4,
					target_unique: 	true,
					target_side: 	'any'
			}*/
		},
		recipe_1: 	'burning_owl',
		recipe_2: 	'fire_caster',
	},
	
	bear_trap:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['defense','support'],
		name: 		'bear trap',
		color: 		'eae717',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy: true,
		adjacent_has_strength: 1,
		place_on_empty_board: false,
		suicidal: true,
		card_priority: 5,
		ai_strength: 5,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'bear-trap-413397_640.jpg',
		text: 		'If destroyed by an adjacent creature, deals 8 damage to it.',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'damage',
					min_hp: 		1,
					target_type: 	'creature',
					target: 		'adjacent',
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		8,
					target_side: 	'any'
			}
		},
		recipe_1: 	'catapult',
		recipe_2: 	'locked_chest',
	},
	explosive_barrels:{
		stats_version: 		2,
		forced_neutral: true,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','object','explosive','offense'],
		name: 		'explosive barrels',
		color: 		'f43232',
		has_adjacent_enemy: true,
		has_most_adjacent: true,
		adjacent_has_strength: 1,
		no_adjacent_ally: 	true,
		place_on_empty_board: false,
		immune_to_poison: true,
		suicidal: true,
		card_priority: 5,
		ai_strength: 4,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'wooden-258622_640.jpg',
		text: 		'Deals 4 damage to all adjacent units on death.<br/><br/>Enters the game neutral.<br/><br/>Immune to poison.',
		flavor: 	'My favorite kind of keg!',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'damage',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'any'
			}
		},
		recipe_1: 	'ignite',
		recipe_2: 	'log',
	},
	raging_fire:{
		stats_version: 		2,
		forced_neutral: true,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['fire','object','raging_fire','offense','moves'],
		name: 		'raging fire',
		color: 		'f43232',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy: true,
		no_adjacent_ally: 	true,
		card_priority: 2,
		ai_strength: 2,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fire-8837_640.jpg',
		text: 		'50% chance to move to a random adjacent slot.<br/><br/>Deals 2 damage to all units around it that are not raging fires every turn.<br/><br/>Enters the game neutral.',
		strength: 	false,
		max_hp: 	1,
		attack_type: 	'around',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					chance: 		50,
					type: 			'move_to_empty',
					specific_slot: 	'adjacent',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'damage',
					min_hp: 		1,
					specific_target_not: 'raging_fire',
					target: 		'around',
					target_amount: 	8,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'any'
			},
			
		},
		recipe_1: 	'explosive_barrels',
		recipe_2: 	'explosive_barrels',
	},
	
	overload:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['likes_energy','offense'],
		name: 		'overload',
		color: 		'337df4',
		spell_target: 'unit',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'spiritual-2826653_1280.jpg',
		text: 		'If target creature has 1 or more energy, it is destroyed and all adjacent units suffer 5 damage.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					min_energy: 	1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any',
					on_success:{
						0:{
								proc: 			'on_cast',
								type: 			'damage',
								target: 		'adjacent',
								target_amount: 	4,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		5,
								target_side: 	'any'
						}
					}
			},
		},
		recipe_1: 	'magic_attunement',
		recipe_2: 	'static_energy',
	},

	firestorm:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['clears'],
		name: 		'firestorm',
		color: 		'f43232',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		min_enemy_spell_targets: 3,
		max_friendly_spell_targets: 1,
		check_targets_value: true,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fire-1123433_640.jpg',
		text: 		'Deals 6 damage to all units and burns them. Gain 1 red mana for each unit directly destroyed by this spell.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'random',
					target_amount: 	15,
					target_unique: 	true,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'damage',
							effect_count: 	1,
							effect: 		6,
						},
						1:{
							type: 			'burn',
							effect_count: 	1,
							effect: 		1,
						}
					}
			},
			1:{
					proc: 			'kill',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	0,
									red: 	1,
									green: 	0,
									purple: 0,
									orange: 0,
									yellow: 0
					},
					mana_amount: 	1,
					target_side: 		'ally'
			}
		},
		recipe_1: 	'incineration',
		recipe_2: 	'burning_sky',
	},
	hellfire:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['clears'],
		name: 		'hellfire',
		color: 		'f43232',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_actions_left: 3,
		min_targets_value: 2,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'devil-3709219_640.jpg',
		text: 		'Deals 8 damage to all units in the bottom row, 4 damage to the center row and 2 damage to the top row.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'bottom_row',
					target_amount: 	5,
					target_unique: 	true,
					target_side: 	'any',
					type: 			'damage',
					effect_count: 	1,
					effect: 		8,
			},
			1:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'center_row',
					target_amount: 	5,
					target_unique: 	true,
					target_side: 	'any',
					type: 			'damage',
					effect_count: 	1,
					effect: 		4,
			},
			2:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'top_row',
					target_amount: 	5,
					target_unique: 	true,
					target_side: 	'any',
					type: 			'damage',
					effect_count: 	1,
					effect: 		2,
			},
		},
		recipe_1: 	'fire_pit',
		recipe_2: 	'burning_sky',
	},
	burning_sky:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['offense'],
		name: 		'burning sky',
		color: 		'f43232',
		rarity: 	2,
		spell_target: 'unit',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 10,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	2,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'sunset-1728163_1280.jpg',
		text: 		'Deals 6 damage to all units in the top row.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'top_row',
					target_amount: 	5,
					target_unique: 	true,
					target_side: 	'any',
					type: 			'damage',
					effect_count: 	1,
					effect: 		6,
			},
		},
		recipe_1: 	'fire_bolt',
		recipe_2: 	'heat_witch',
	},
	
	ignite:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense'],
		name: 		'ignite',
		color: 		'f43232',
		rarity: 	0,
		spell_target: 'unit',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'matchstick-20237_640.jpg',
		text: 		'Burn target unit, making it suffer 1 damage each turn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'burn',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		}
	},
	fire_bolt:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense'],
		name: 		'fire bolt',
		color: 		'f43232',
		spell_target: 'unit',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'flame-726268_640.jpg',
		text: 		'Deals 4 damage to target unit.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'any'
			}
		},
		recipe_1: 	'ignite',
		recipe_2: 	'ignite',
	},
	fiery_sacrifice:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'fiery sacrifice',
		color: 		'f43232',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fire-2648873_1280.jpg',
		text: 		'Deals 5 damage to target unit. If the target is destroyed you gain red mana equal to the target\'s cost.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		5,
					target_side: 	'any'
			},
			1:{
					proc: 			'kill',
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	'target_cost',
					target_side: 		'ally'
			},
		},
		recipe_1: 	'fire_pit',
		recipe_2: 	'incineration',
	},
	
	temper:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['support','risky','buff'],
		name: 		'temper',
		color: 		'f43232',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	2,
		card_priority: 4,
		cost:{
					blue: 	0,
					red: 	3,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-3182112_640.jpg',
		text: 		'Target creature suffers 3 damage. If it survives, it\'s strength and hp are increased by 2.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					target: 		'same_slot',
					min_hp: 		1,
					target_highest_value: true,
					spell_target_min_hp: 6,
					spell_target_min_strength: 0,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'damage',
							effect: 		3,
						},
						1:{
							type: 			'increase_stats',
							effect_strength: 2,
							effect_hp: 		2,
						}
					}
			},
		},
		recipe_1: 	'furnace',
		recipe_2: 	'deamon',
	},
	
	incineration:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'incineration',
		color: 		'f43232',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3514923_640.jpg',
		text: 		'Deals 1 damage to target creature 5 times.<br/><br/>If it kills a creature, that card and this card are removed from the game.',
		flavor: 	'Burns it until there is nothing left.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	5,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'kill',
					type: 			'remove_card',
					target: 		'random',
					origin_unit: 	true,
					origin_dead: 	true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			2:{
					proc: 			'kill',
					type: 			'remove_card',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'fire_bolt',
		recipe_2: 	'fire_bolt',
	},
	
	drown:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'drown',
		color: 		'337df4',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4138401_640.jpg',
		text: 		'Deals damage to target creature equal to it\'s cost and removes any burn.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					type: 			'damage',
					effect: 		'target_cost',
					effect_multiplier: 1,
					effects:{
						0:{
							type: 			'set_burn',
							effect: 		0,
						}
					}
			}
		},
		recipe_1: 	'cleansing_water',
		recipe_2: 	'cleansing_water',
	},
	cleansing_water:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','defense','buff'],
		name: 		'cleansing water',
		color: 		'337df4',
		rarity: 	0,
		spell_target: 'unit',
		spell_target_side: 	2,
		card_priority: 1,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'air-bubbles-230014_640.jpg',
		text: 		'Removes burning and poison from target unit.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'set_burn',
					target: 		'same_slot',
					has_status_effect: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		0,
					target_side: 	'any',
			},
			1:{
					proc: 			'on_cast',
					type: 			'set_poison',
					target: 		'same_slot',
					has_status_effect: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		0,
					target_side: 	'any',
			}
		}
	},
	frozen_blade:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['support','offense','buff'],
		name: 		'frozen blade',
		color: 		'337df4',
		rarity: 	1,
		spell_target: 'unit',
		spell_target_side: 	2,
		target_stunned: false,
		has_adjacent:  	true,
		adjacent_side: 	'enemy',
		card_priority: 1,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'frozen-2904843_640.jpg',
		text: 		'Target creature reduces the strength of any unit it attacks by 1.',
		flavor: 	'It cuts like ice.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'gain_ability',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					spell_target_min_strength: 1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					ability_gained:{
							proc: 			'attacked_unit',
							type: 			'increase_strength',
							target: 		'random',
							origin_unit: 	true,
							min_hp: 		1,
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		-1,
							target_side: 	'any'
					},
					ability_text:'<br/><br/><b>Frozen blade</b>',
					target_side: 	'any'
			}
		},
		recipe_1: 	'icy_whirl',
		recipe_2: 	'discarded_weapon',
	},
	giants_foot:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['offense'],
		name: 		'giant\'s foot',
		color: 		'ff8902',
		spell_target: 'unit',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 1,
					yellow: 0
		},
		image: 		'fantasy-3186483_640.jpg',
		text: 		'Deals 8 damage to target unit if it has 5 or more hp.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					target: 		'same_slot',
					target_highest_value: true,
					min_hp: 		5,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		8,
					target_side: 	'any'
			}
		},
		recipe_1: 	'boulder',
		recipe_2: 	'rock_crystal',
	},
	
	crumble:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['dislikes_structures'],
		name: 		'crumble',
		color: 		'eae717',
		spell_target: 'structure',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 2
		},
		image: 		'brick-2205882_640.jpg',
		text: 		'Destroy target structure.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_type: 	'structure',
					target_highest_value: true,
					not_self: 		true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'boulder',
		recipe_2: 	'discarded_weapon',
	},
	earthquake:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['clears','dislikes_structures'],
		name: 		'earthquake',
		color: 		'f45c42',
		spell_target: 'structure',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 10,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	1,
					green: 	1,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'lava-656827_640.jpg',
		text: 		'Destroy all structures.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'structure',
					target_amount: 	6,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any'
			}
		},
		recipe_1: 	'wood_trinket',
		recipe_2: 	'rock_crystal',
	},
	
	
	meteor:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense','clears'],
		name: 		'meteor',
		color: 		'f43232',
		rarity: 	3,
		spell_target: 'unit',
		spell_target_side: 	1,
		check_targets_value: true,
		min_targets_value: 10,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'planets-1497200_640.jpg',
		text: 		'Deals 8 damage to target unit and 4 damage to all units around it.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		8,
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'around',
					target_amount: 	8,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'any'
			},
		},
		recipe_1: 	'incineration',
		recipe_2: 	'burning_owl',
	},
	explode:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense','clears'],
		name: 		'explode',
		color: 		'f43232',
		rarity: 	4,
		spell_target: 'unit',
		spell_target_side: 	1,
		check_targets_value: true,
		min_targets_value: 10,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	6,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'big-bang-422305_640.jpg',
		text: 		'Deals damage equal to the target\'s hp to all units around it. The unit is then destroyed.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					effects:{
						0:{
							type: 			'damage',
							min_hp: 		1,
							target: 		'around',
							target_amount: 	8,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		'origin_hp',
							target_side: 	'any',
						}
					}
			},
			2:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			
		},
		recipe_1: 	'meteor',
		recipe_2: 	'fiery_sacrifice',
	},
	plasma_strike:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense','clears'],
		name: 		'plasma strike',
		color: 		'f43232',
		rarity: 	2,
		spell_target: 'unit',
		spell_target_side: 	1,
		check_targets_value: true,
		min_targets_value: 10,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	4,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'all-703516_640.jpg',
		text: 		'Deals 6 damage to target unit and all units in the same row.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_row',
					target_amount: 	5,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		6,
					target_side: 	'any'
			}
		},
		recipe_1: 	'fire_bolt',
		recipe_2: 	'flame_dancer',
	},
	execution:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'execution',
		color: 		'a31079',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 4,
					orange: 0,
					yellow: 0
		},
		image: 		'vietnam-1649490_640.jpg',
		text: 		'Destroys target creature.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 10,
					target_min_cost: 'own_cost',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'curse_of_vengeance',
	},
	ghost_mirror:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'ghost mirror',
		color: 		'a31079',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0,
					colorless: 2
		},
		image: 		'smoke-and-mirrors-4248008_640.jpg',
		text: 		'Deal damage to target creature equal to the number of cards in your grave. Turn it into a ghost if it survives.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'ai_targeting',
					type: 			'destroy',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 10,
					target_min_cost: 'own_cost',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
			1:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'grave_cards',
					target_side: 	'any'
			},
			2:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'ghost',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			}
		},
		recipe_1: 	'execution',
		recipe_2: 	'haunting_ghost',
	},
	

	icy_whirl:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'icy whirl',
		color: 		'337df4',
		rarity: 	0,
		spell_target: 'unit',
		spell_target_side: 	'any',
		card_priority: 1,
		min_enemy_spell_targets: 1,
		check_targets_value: true,
		min_targets_value: 4,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'spiral-286596_640.jpg',
		text: 		'Deals 1 damage to all units around target unit.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'damage',
					min_hp: 		1,
					target: 		'around',
					target_amount: 	8,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
		},
	},
	
	freeze:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['support','frost','water'],
		name: 		'freeze',
		color: 		'337df4',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		takes_damage_this_turn: false,
		card_priority: 5,
		cost:{
					blue: 	2,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'soap-bubble-4073357_640.jpg',
		text: 		'Freeze target creature.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'frozen_creature',
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 10,
					target_min_cost: 'own_cost',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			}
		},
		recipe_1: 	'blue_spirit',
		recipe_2: 	'overload',
	},
	time_trap:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'main',
		subtypes: 	['offense','unsummons'],
		name: 		'time trap',
		color: 		'337df4',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 5,
		cost:{
					blue: 	3,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'steampunk-1636156_640.png',
		text: 		'Returns target creature to it\'s owners reserves.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'return_to_deck',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 10,
					target_min_cost: 'own_cost',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'icy_whirl',
		recipe_2: 	'mermaid',
	},
	
	reversal_of_time:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['clears','unsummons'],
		name: 		'reversal of time',
		color: 		'337df4',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 10,
		mana_needed:{colorless: 4},
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	4,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2879946_640.jpg',
		text: 		'Returns all units to their owners hand.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'unsummon',
					min_hp: 		1,
					target: 		'random',
					not_self: 		true,
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'sunken_ruins',
		recipe_2: 	'mana_orb',
	},
	snowstorm:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['clears','unsummons'],
		name: 		'snowstorm',
		color: 		'337df4',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		card_priority: 1,
		cost:{
					blue: 	5,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'snowfall-16325_640.jpg',
		text: 		'Returns all units with a strength higher then 2 to their owners hand.',
		flavor: 	'I could take cover behind the tall guy.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'unsummon',
					min_hp: 		1,
					min_strength: 	3,
					target: 		'random',
					not_self: 		true,
					target_amount: 	15,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'frozen_lake',
		recipe_2: 	'lightning_storm',
	},
	
	skybreak:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['clears'],
		name: 		'skybreak',
		color: 		'337df4',
		rarity: 	4,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 10,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	5,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'sky-3513221_640.jpg',
		text: 		'All units in the center column disappear.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'disappear',
					min_hp: 		1,
					target: 		'center_col',
					target_amount: 	5,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'flock_of_gulls',
		recipe_2: 	'reversal_of_time',
	},
	
	polymorph:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['offense'],
		name: 		'polymorph',
		color: 		'337df4',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 5,
		cost:{
					blue: 	3,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'lamb-2216160_640.jpg',
		text: 		'Turn target creature into a sheep.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					target_highest_value: true,
					target_min_value: 4,
					target_min_cost: 'own_cost',
					card_id: 		'sheep',
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			}
		},
		recipe_1: 	'freeze',
		recipe_2: 	'time_mage',
	},
	sleep:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['defense','debuff'],
		name: 		'sleep',
		color: 		'337df4',
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 5,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'girl-2732694_640.jpg',
		text: 		'Stun target creature for 2 turns.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'stun',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_type: 	'creature',
					target_highest_strength: true,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'icy_whirl',
		recipe_2: 	'cleansing_water',
	},
	frozen_claw:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'cheap',
		subtypes: 	['defense','reclaims','debuff'],
		name: 		'frozen claw',
		color: 		'337df4',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		needs_cards_in_grave: 1,
		card_priority: 5,
		cost:{
					blue: 	1,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'beast-3534347_640.jpg',
		text: 		'Reduce the strength of target unit by 1. Recycle a card.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'same_slot',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'on_cast',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'polar_bear',
		recipe_2: 	'unsummon',
	},
	
	mind_control:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['offense'],
		name: 		'mind control',
		color: 		'337df4',
		rarity: 	5,
		spell_target: 'creature',
		spell_target_side: 	1,
		card_priority: 1,
		cost:{
					blue: 	6,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'face-1247955_640.jpg',
		text: 		'Make target creatue an ally.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'set_side',
					min_hp: 		1,
					target: 		'same_slot',
					target_highest_value: true,
					target_min_value: 4,
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any',
					new_side: 		'ally'
			}
		},
		recipe_1: 	'dreamcaster',
		recipe_2: 	'skybreak',
	},
	
	
	day_of_the_dead:{
		stats_version: 		2,
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['clears'],
		name: 		'day of the dead',
		color: 		'a31079',
		rarity: 	5,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		check_targets_value: true,
		min_targets_value: 10,
		min_actions_left: 3,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 6,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'gothic-1338815_640.jpg',
		text: 		'Turns all creatures into ghosts.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'ghost',
					target: 		'random',
					target_amount: 	9,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any'
			},
		},
		recipe_1: 	'soul_catcher',
		recipe_2: 	'hunting_horror',
	},
	night_of_the_dead:{
		stats_version: 		2,
		forced_neutral: true,
		type: 		'spell',
		card_type: 	'endgame',
		subtypes: 	['needs_ghosts'],
		name: 		'night of the dead',
		color: 		'a31079',
		rarity: 	2,
		spell_target: 'creature',
		spell_target_side: 	1,
		spell_auto_cast: 	true,
		max_enemy_spell_targets: 1,
		min_friendly_spell_targets: 1,
		card_priority: 1,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4162947_640.jpg',
		text: 		'Turns all ghosts that are not wandering souls into wandering souls.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'none',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'wandering_soul',
					target: 		'random',
					subtypes: 		['ghost'],
					specific_target_not: 'wandering_soul',
					target_amount: 	9,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		3,
					target_side: 	'any'
			},
		},
		recipe_1: 	'wandering_soul',
		recipe_2: 	'wandering_soul',
	},
	
	ghost:{
		stats_version: 		2,
		nonpickable: true,
		type: 		'creature',
		subtypes: 	['ghost'],
		name: 		'ghost',
		color: 		'a31079',
		rarity: 	0,
		card_priority: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'ghost-1675154_640.jpg',
		text: 		'Slowly fades away.',
		strength: 	0,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'end_turn',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'ally'
			}
		}
	},
	hunting_horror:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['horror','undead','offense','summons','moves'],
		name: 		'hunting horror',
		color: 		'a31079',
		rarity: 	4,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 7,
					orange: 0,
					yellow: 0
		},
		image: 		'surreal-3005472_640.jpg',
		text: 		'Moves to an enemy creature before attack. Summons a ghost on killing a creature.',
		strength: 	6,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'before_attack',
					type: 			'move_to_empty',
					min_hp: 		1,
					move_to_type: 	'creature',
					move_to_side: 	'enemy',
					move_to_adjacent: true,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'kill_creature',
					type: 			'summon',
					card_id: 		{
						ghost: 		1,
					},
					effect: 		1,
			}
		},
		recipe_1: 	'vengeful_crypt',
		recipe_2: 	'death_knight',
	},
	ghost_of_sorrow:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['ghost','undead','offense','discards'],
		name: 		'ghost of sorrow',
		color: 		'a31079',
		rarity: 	2,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-2845664_1280.jpg',
		text: 		'If it\'s hp is 1 after receiving damage, it tries to discard one of your cards. If successfull it returns to your hand.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					target: 		'self',
					max_hp: 		1,
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					proc_on_death: 	false,
					effects:{
						0:{
							type: 			'discard_card',
							effect: 		1,
							target_side: 	'ally',
							on_success:{
								0:{
										type: 			'unsummon',
										target: 		'self',
										target_amount: 	1,
										target_unique: 	true,
										effect_count: 	1,
										effect: 		1,
										target_side: 	'ally'
								},
							}
						}
					}
			},
		},
		recipe_1: 	'wandering_soul',
		recipe_2: 	'voodoo_doll',
	},
	drain_strength:{
		type: 		'spell',
		card_type: 	'special',
		subtypes: 	['offense','debuff'],
		name: 		'drain strength',
		color: 		'60278e',
		rarity: 	3,
		spell_target: 'creature',
		spell_target_side: 	1,
		min_friendly_spell_targets: 1,
		card_priority: 4,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 2,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'fractal-1101414_1280.jpg',
		text: 		'Reduce the strength of target creature to 0. A random adjacent friendly creature gains the drained strength.',
		strength: 	false,
		max_hp: 	false,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_cast',
					type: 			'increase_stats',
					min_hp: 		1,
					target: 		'same_slot',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_highest_strength: true,
					effect_count: 	1,
					effect_strength: 'target_strength',
					effect_hp: 		0,
					effect_multiplier: -1,
					target_side: 	'any',
			},
			1:{
					proc: 			'on_cast',
					type: 			'increase_stats',
					min_hp: 		1,
					target: 		'adjacent',
					target_type: 	'creature',
					not_self: 		true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 'latest_success',
					effect_hp: 		0,
					target_side: 	'ally'
			}	
		},
		recipe_1: 	'giant_growth',
		recipe_2: 	'mindbreak',
	},
	zombie:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'zombie',
		color: 		'a31079',
		rarity: 	2,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		one_hit_kill: true,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'gothic-1378352_640.jpg',
		text: 		'Increases it\'s strength and health by 1 on killing a creature.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'kill_creature',
					type: 			'increase_stats',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 1,
					effect_hp: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'zombie_grave_eater',
		recipe_2: 	'zombie_grave_eater',
	},
	werewolf:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','risky','muscle'],
		name: 		'werewolf',
		color: 		'60278e',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		card_priority: 4,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'wolf-4146351_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking. 20% chance of turning into a wolf each turn.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					chance: 		20,
					type: 			'turn_into',
					min_hp: 		1,
					card_id: 		'wolf',
					target: 		'self',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'any',
			},
		},
		recipe_1: 	'wolf',
		recipe_2: 	'wandering_soul',
	},
	
	fairy_spirit:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['ghost','fairy','undead','offense','muscle'],
		name: 		'fairy spirit',
		color: 		'60278e',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	1,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'fairy-2688853_640.jpg',
		text: 		'50% chance to resurrect on death.',
		strength: 	2,
		max_hp: 	2,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					chance: 		50,
					type: 			'resurrect',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'fairy_scout',
		recipe_2: 	'wandering_soul',
	},
	
	druid_of_decay:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'mana',
		subtypes: 	['living','defense','support'],
		name: 		'druid of decay',
		color: 		'60278e',
		rarity: 	3,
		has_adjacent_enemy_creature: true,
		has_most_adjacent: true,
		place_on_empty_board: true,
		card_priority: 5,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	2,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'elbe-2432967_640.jpg',
		text: 		'Generates 1 green or purple mana at the start of every turn. Drains up to 1 hp from all adjacent creatures each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
									purple: 1
					},
					mana_amount: 	1,
					target_side: 		'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'drain_hp',
					min_hp: 		2,
					target: 		'adjacent',
					target_type: 	'creature',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			}
		},
		recipe_1: 	'withering_witch',
		recipe_2: 	'calm_druid',
	},
	
	candle_bearer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','defense','likes_death'],
		name: 		'candle bearer',
		color: 		'a31079',
		rarity: 	2,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 2,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-885848_640.jpg',
		text: 		'Recovers 1 hp when any living creature dies.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_creature_death',
					origin_not_self: true,
					origin_subtypes:['living'],
					min_hp: 		1,
					type: 			'healing',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
		},
		recipe_1: 	'haunting_ghost',
		recipe_2: 	'minor_vampire',
	},
	soul_catcher:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','support'],
		name: 		'soul catcher',
		color: 		'a31079',
		rarity: 	4,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		needs_friendly_creatures: true,
		card_priority: 2,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4167522_640.jpg',
		text: 		'When any ally creature dies, deals damage to your hero equal to twice the creature\'s cost. Resurrects any ally creature that dies.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_ally_creature_death',
					type: 			'hero_hp',
					proc_on_death: 	false,
					target: 		'random',
					origin_not_self: true,
					origin_unit: 	true,
					origin_dead: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		'target_cost',
					effect_multiplier: -2,
			},
			1:{
					proc: 			'any_ally_creature_death',
					type: 			'resurrect',
					proc_on_death: 	false,
					target: 		'random',
					origin_not_self: true,
					origin_unit: 	true,
					origin_dead: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'ally',
					effect: 		1,
			},

		},
		recipe_1: 	'pain_catcher',
		recipe_2: 	'haunted_castle',
	},
	
	withering_witch:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','do_not_buff'],
		name: 		'withering witch',
		color: 		'a31079',
		rarity: 	2,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		card_priority: 3,
		ai_strength: 4,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'girl-3380017_640.jpg',
		text: 		'Reduces the hp and maximum hp of an enemy creature by 1 and itself by the same amount each turn. Gains 1 hp when it kills a creature.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'enemy',
					on_success:{
						0:{
								type: 			'increase_hp',
								min_hp: 		1,
								target: 		'self',
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		'latest_success',
								effect_multiplier: -1,
								target_side: 	'ally'
						},
					}
			},
			1:{
					proc: 			'kill_creature',
					type: 			'increase_hp',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'hungry_vampire',
		recipe_2: 	'masters_pain',
	},
	chaos_witch:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','causes_movement','witch'],
		name: 		'chaos witch',
		color: 		'a31079',
		rarity: 	4,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4226683_640.jpg',
		text: 		'When any creature enters the game, move it to a random empty slot.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'any_creature_summoned',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					origin_not_self: true,
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'any'
			},
		},
		recipe_1: 	'vengeful_crypt',
		recipe_2: 	'sinister_archer',
	},
	
	pain_catcher:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','support','defense'],
		name: 		'pain catcher',
		color: 		'a31079',
		rarity: 	3,
		favorite_col: 4,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 5,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4122305_640.jpg',
		text: 		'Summons a ghost whenever your hero\'s hp is reduced.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'ally_hero_lose_hp',
					type: 			'summon',
					proc_on_death: 	false,
					card_id: 		{
						ghost: 		1,
					},
					effect: 		1,
			}
		},
		recipe_1: 	'ghost_of_sorrow',
		recipe_2: 	'ghost_mistress',
	},
	dark_lifestealer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','support','offense'],
		name: 		'dark lifestealer',
		color: 		'a31079',
		rarity: 	4,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-4180988_640.jpg',
		text: 		'Drain up to 2 hp from an enemy creature at the start of each turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'drain_hp',
					min_hp: 		2,
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'assassin',
		recipe_2: 	'ghost_bride',
	},
	dark_sage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense'],
		name: 		'dark sage',
		color: 		'a31079',
		rarity: 	2,
		favorite_col: 4,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-3366604_1280.jpg',
		text: 		'Reduces the hp of an enemy creature by 1 and the enemy hero by 1 at the start of each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'lower_hp',
					target: 		'random',
					target_type: 	'creature',
					min_hp: 		2,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		-1,
					target_side: 	'enemy',
					can_be_zero: 	false
			}
		},
		recipe_1: 	'masters_pain',
		recipe_2: 	'hero_stalker',
	},
	venom_mage:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','mage','poisonous'],
		name: 		'venom mage',
		color: 		'a31079',
		rarity: 	3,
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 6,
		immune_to_poison: true,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 5,
					orange: 0,
					yellow: 0
		},
		image: 		'necromancer-3452376_640.jpg',
		text: 		'Poisons a random enemy creature each turn.<br/><br/>Destroys all enemy creatures with 3 or more stacks of poison on them each turn.<br/><br/>Immune to poison.',
		flavor: 	'Let this sink in.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'poison',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			},
			1:{
					proc: 			'start_turn',
					type: 			'destroy',
					target: 		'random',
					not_self: 		true,
					target_amount: 	9,
					target_type: 	'creature',
					min_poisoned: 	3,
					min_hp: 		1,
					target_unique: 	true,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'poison',
		recipe_2: 	'dark_sage',
	},
	
	dark_spy:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','defense'],
		name: 		'dark spy',
		color: 		'a31079',
		favorite_col: 3,
		has_adjacent_enemy_creature: false,
		place_on_empty_board: true,
		safe_play: true,
		card_priority: 3,
		in_play_value: 5,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'female-4234369_640.png',
		text: 		'When an enemy creature enters the game next to it, sets it\'s strength to 0 and disappears.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'enemy_creature_summoned',
					type: 			'set_strength',
					target: 		'adjacent',
					origin_unit: 	true,
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		0,
					target_side: 	'enemy',
					on_success:{
						0:{
							type: 			'disappear',
							target: 		'self',
							min_hp: 		1,
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally',
						}
					}
			},
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'hidden_swamp',
	},
	
	voodoo_doll:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['defense','direct_damage'],
		name: 		'voodoo doll',
		color: 		'a31079',
		favorite_col: 3,
		has_adjacent_enemy: true,
		adjacent_has_strength: 1,
		place_on_empty_board: false,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'doll-626790_1280.jpg',
		text: 		'When it takes damage it deals the same amount of damage to the opponent hero.',
		strength: 	0,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'hero_hp',
					effect: 		'latest_success',
					effect_multiplier: -1,
					target_side: 	'enemy'
			},
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'curse_of_vengeance',
	},
	
	hero_stalker:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','support'],
		name: 		'hero stalker',
		color: 		'a31079',
		favorite_col: 4,
		has_adjacent_enemy: false,
		place_on_empty_board: false,
		needs_friendly_creatures: true,
		card_priority: 3,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 4,
					orange: 0,
					yellow: 0
		},
		image: 		'fantasy-2546695_1280.jpg',
		text: 		'Deals damage to the enemy hero equal to the number of ally creatures each turn.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'hero_hp',
					effect: 		'ally_creature_count',
					effect_multiplier: -1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'peasant',
	},
	
	zombie_grave_eater:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','reclaims','likes_discarding'],
		name: 		'zombie grave eater',
		color: 		'a31079',
		place_on_empty_board: true,
		card_priority: 2,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'zombie-1801470_1280.jpg',
		text: 		'When it attacks a hero, returns one card from the enemy\'s grave to his reserves and gains 1 strength if successful.',
		strength: 	2,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'attacks_hero',
					type: 			'recycle',
					effect: 		1,
					target_side: 	'enemy',
					on_success:{
						0:{
								type: 			'increase_stats',
								target: 		'self',
								min_hp: 		1,
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect_strength: 	1,
								effect_hp: 			0,
								target_side: 	'ally'
						}
					}
			}
		},
		recipe_1: 	'peasant',
		recipe_2: 	'raise_dead',
	},
	grabling:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense'],
		name: 		'grabling',
		color: 		'a31079',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 2,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'monster-4577833_640.jpg',
		text: 		'After it attacks a creature, stuns itself and the creature for 3 turns.',
		strength: 	1,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'attacked_unit',
					type: 			'stun',
					target: 		'adjacent',
					target_type: 	'creature',
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		3,
					on_success:{
						0:{
							type: 			'stun',
							target: 		'self',
							target_type: 	'creature',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							target_side: 	'any',
							effect: 		3,
						},
					}
			}
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'curse_of_vengeance',
	},
	
	barbarian_cryptkeeper:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['offense','reclaims','likes_discarding'],
		name: 		'barbarian cryptkeeper',
		color: 		'f46542',
		rarity: 	4,
		place_on_empty_board: true,
		needs_dead_creature: true,
		card_priority: 2,
		in_play_value: 9,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 3,
					yellow: 0,
					colorless: 0
		},
		image: 		'fantasy-4255603_640.jpg',
		text: 		'At the start of turn, recycles one creature card and gains 1 strength if successful.',
		strength: 	4,
		max_hp: 	6,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'recycle',
					reclaim_type: 	'creature',
					effect: 		1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'increase_stats',
								target: 		'self',
								min_hp: 		1,
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect_strength: 	1,
								effect_hp: 			0,
								target_side: 	'ally'
						}
					}
			}
		},
		recipe_1: 	'mausoleum',
		recipe_2: 	'rock_ogre',
	},
	
	cursed_vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','do_not_buff','muscle'],
		name: 		'cursed vampire',
		color: 		'a31079',
		rarity: 	2,
		favorite_col: 3,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 2,
		in_play_value: -3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'the-witch-539683_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking. Reduces it\'s own strength and hp by 1 each turn.',
		strength: 	4,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'increase_stats',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect_strength: 	-1,
					effect_hp: 			-1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'hungry_vampire',
		recipe_2: 	'hungry_vampire',
	},
	elder_vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','defense','buff_this'],
		name: 		'elder vampire',
		color: 		'a31079',
		rarity: 	4,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 7,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'vamp-4632343_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking.<br/><br/>Turns into a vampire bat when it dies.',
		strength: 	3,
		max_hp: 	7,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
			1:{
					proc: 			'own_death',
					type: 			'turn_into',
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					card_id: 		'vampire_bat',
			}
		},
		recipe_1: 	'vampire',
		recipe_2: 	'vampire',
	},
	vampire_bat:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','defense','buff_this','moves'],
		name: 		'vampire bat',
		color: 		'a31079',
		rarity: 	1,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		suicidal: true,
		card_priority: 3,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'bat-3740971_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking.<br/><br/>Moves away from enemies at the end of turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
			1:{
					proc: 			'end_turn',
					type: 			'move_to_empty',
					proc_on_death: 	false,
					move_to_side: 	'enemy',
					move_to_adjacent: false,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'minor_vampire',
		recipe_2: 	'wood_trinket',
	},
	
	vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','defense','buff_this','muscle'],
		name: 		'vampire',
		color: 		'a31079',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 4,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'vampire-539684_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking.',
		strength: 	3,
		max_hp: 	5,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'cursed_vampire',
		recipe_2: 	'cursed_vampire',
	},
	loyal_vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','support','offense','buff_this'],
		name: 		'loyal vampire',
		color: 		'996d21',
		rarity: 	2,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 1,
					colorless: 1
		},
		image: 		'woman-578820_640.jpg',
		text: 		'Increases your hero\'s hp by an amount equal to damage dealt after attacking.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'hero_hp',
					effect: 		'latest_success',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'hungry_vampire',
		recipe_2: 	'masked_lady',
	},
	minor_vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','offense','buff_this'],
		name: 		'minor vampire',
		color: 		'a31079',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'woman-3144539_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			}
		},
		recipe_1: 	'peasant',
		recipe_2: 	'deaths_call',
	},
	hungry_vampire:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','buff_this'],
		name: 		'hungry vampire',
		color: 		'a31079',
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		max_friendly_spell_targets: 0,
		card_priority: 3,
		ai_strength: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'gothic-1320072_640.jpg',
		text: 		'Recovers hp equal to damage dealt after attacking. Destroys a random other creature with 1 hp each turn.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'after_attack',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'latest_success',
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					type: 			'destroy',
					target: 		'random',
					not_self: 		true,
					target_amount: 	1,
					target_type: 	'creature',
					max_hp: 		1,
					min_hp: 		1,
					target_unique: 	true,
					target_side: 	'any'
			}
		},
		recipe_1: 	'minor_vampire',
		recipe_2: 	'curse_of_vengeance',
	},
	death_owl:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['animal','owl','flying','living','offense','proc_on_death','do_not_buff'],
		name: 		'death owl',
		color: 		'a31079',
		favorite_col: 3,
		has_adjacent_enemy: true,
		unique_on_bg: true,
		card_priority: 3,
		min_enemy_spell_targets: 1,
		max_friendly_spell_targets: 0,
		ai_strength: 2,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'owl-1332759_640.jpg',
		text: 		'On death destroys all creatures with 2 hp or less.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'destroy',
					target: 		'random',
					min_hp: 		1,
					max_hp: 		2,
					target_amount: 	9,
					target_type: 	'creature',
					target_unique: 	true,
					target_side: 	'any'
			}
		},
		recipe_1: 	'wood_trinket',
		recipe_2: 	'curse_of_vengeance',
	},
	seductress:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['living','support','do_not_buff'],
		name: 		'seductress',
		color: 		'a31079',
		favorite_col: 3,
		has_adjacent_enemy_creature: true,
		place_on_empty_board: false,
		card_priority: 3,
		suicidal: true,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-3476149_640.jpg',
		text: 		'Has a 20% chance to change 1 adjacent enemy creature into an ally on play.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					chance: 		20,
					type: 			'set_side',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	1,
					target_type: 	'creature',
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy',
					new_side: 		'ally'
			}
		},
		recipe_1: 	'dark_spy',
		recipe_2: 	'dark_spy',
	},
	
	dark_scout:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','support','offense','do_not_buff'],
		name: 		'dark scout',
		color: 		'a31079',
		has_adjacent_enemy_creature: true,
		min_adjacent: 2,
		has_most_adjacent: true,
		adjacent_has_strength: 1,
		place_on_empty_board: false,
		suicidal: true,
		card_priority: 1,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'gothic-2966458_640.jpg',
		text: 		'Reduces the strength of all adjacent enemy creatures by 1 when played.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'increase_strength',
					min_hp: 		1,
					target: 		'adjacent',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		-1,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'dark_spy',
		recipe_2: 	'wandering_soul',
	},
	dark_angel:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','do_not_buff'],
		name: 		'dark angel',
		color: 		'a31079',
		has_most_adjacent: true,
		has_adjacent_enemy_creature: true,
		adjacent_has_hp: 3,
		place_on_empty_board: false,
		card_priority: 2,
		ai_strength: 3,
		in_play_value: 0,
		suicidal: true,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'angel-2048642_640.jpg',
		text: 		'Reduces the health of all adjacent enemy creatures by 2 when played.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'lower_hp',
					min_hp: 		1,
					target: 		'adjacent',
					target_type: 	'creature',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		2,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'young_angel',
		recipe_2: 	'curse_of_vengeance',
	},
	hungering_ghost:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['ghost','offense','do_not_buff','muscle'],
		name: 		'hungering ghost',
		color: 		'a31079',
		rarity: 2,
		has_most_adjacent: true,
		has_adjacent_enemy_creature: true,
		adjacent_has_hp: 2,
		place_on_empty_board: false,
		card_priority: 2,
		in_play_value: 0,
		grave_cost_adjustment: 1,
		suicidal: true,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'eye-4528085_640.jpg',
		text: 		'Reduces the health of all adjacent enemy creatures by half it\'s cost when played.<br/><br/>Suffers double the cost increase when it goes to the grave.',
		strength: 	1,
		max_hp: 	1,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'on_play',
					type: 			'lower_hp',
					min_hp: 		1,
					target: 		'adjacent',
					target_type: 	'creature',
					target_amount: 	4,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		'origin_cost',
					effect_multiplier: 0.5,
					target_side: 	'enemy'
			}
		},
		recipe_1: 	'dark_angel',
		recipe_2: 	'wandering_soul',
	},
	
	haunting_ghost:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		name: 		'haunting ghost',
		subtypes: 	['ghost','offense'],
		color: 		'a31079',
		place_on_empty_board: false,
		has_adjacent_enemy: true,
		suicidal: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 3,
					orange: 0,
					yellow: 0
		},
		image: 		'ghost-2935132_640.jpg',
		text: 		'The first creature this attacks becomes haunted, stunning itself at the start of each turn 75% of the time.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'attacked_unit',
					chance: 		100,
					type: 			'gain_ability',
					target: 		'random',
					target_type: 	'creature',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'any',
					adjust_own_chance_on_success: -100,
					ability_gained:{
							proc: 			'start_turn',
							chance: 		75,
							type: 			'stun',
							target: 		'self',
							target_type: 	'creature',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'any',
					},
					ability_text: 	'<br/><br/><b>Haunted</b>',

			},
		},
		recipe_1: 	'wandering_soul',
		recipe_2: 	'curse_of_vengeance',
	},
	
	black_striker:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','muscle'],
		name: 		'black striker',
		color: 		'a31079',
		rarity: 	2,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 3,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'assassin-2182084_640.jpg',
		text: 		'Attacks an enemy that is around it but not adjacent to it.',
		strength: 	3,
		max_hp: 	2,
		attack_type: 	'diagonal',
		abilities: 	{
		},
		recipe_1: 	'skeleton',
		recipe_2: 	'dark_visions',
	},
	sinister_archer:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','ranged'],
		name: 		'sinister archer',
		color: 		'a31079',
		rarity: 	3,
		has_adjacent_enemy: true,
		place_on_empty_board: false,
		safe_play: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 5,
					orange: 0,
					yellow: 0,
					colorless: 0,
		},
		image: 		'amazone-622498_640.jpg',
		text: 		'Attacks an enemy unit with the lowest hp.',
		strength: 	4,
		max_hp: 	3,
		attack_type: 	'random',
		attack_specials:{
			lowest_hp: true,
		},
		abilities: 	{
		},
		recipe_1: 	'black_striker',
		recipe_2: 	'dark_sage',
	},
	
	death_knight:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['revives','offense','do_not_buff','muscle'],
		name: 		'death knight',
		color: 		'a31079',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 5,
					orange: 0,
					yellow: 0
		},
		image: 		'magician-3047235_640.jpg',
		text: 		'Turns into a skeleton on death. 10% chance of resurrecting instead.',
		strength: 	4,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					type: 			'turn_into',
					effect_chance: 	90,
					target: 		'self',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					card_id: 		'skeleton',
					on_failure:{
						0:{
							type: 			'resurrect',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
						}
					}
			}
		},
		recipe_1: 	'dark_sage',
		recipe_2: 	'cursed_lands',
	},
	marsh_crocodile:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'special',
		subtypes: 	['animal','crocodile','living','do_not_buff'],
		name: 		'marsh crocodile',
		color: 		'a31079',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 2,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'crocodile-630231_1280.jpg',
		text: 		'Tries to detroy an ally marsh on death. Resurrects and fully heals if successful.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'own_death',
					target: 		'random',
					min_hp: 		1,
					specific_target: 'marsh',
					type: 			'destroy',
					target_amount: 	1,
					target_unique: 	true,
					target_side: 	'ally',
					on_success:{
						0:{
							type: 			'resurrect',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		1,
							target_side: 	'ally'
						},
						1:{
							type: 			'healing',
							target: 		'self',
							target_amount: 	1,
							target_unique: 	true,
							effect_count: 	1,
							effect: 		'target_current_damage',
							target_side: 	'any'
						}
					}
			},
		},
		recipe_1: 	'wood_trinket',
		recipe_2: 	'curse_of_vengeance',
	},
	
	flame_keeper:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['fire','human','living','offense'],
		name: 		'flame keeper',
		color: 		'f43232',
		rarity: 	3,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		has_most_adjacent: true,
		card_priority: 3,
		in_play_value: 12,
		cost:{
					blue: 	0,
					red: 	7,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
		},
		image: 		'gatekeeper-2904993_640.jpg',
		text: 		'At the start of each turn all adjacent enemy creatures deal 2 damage to their own hero.',
		strength: 	5,
		max_hp: 	7,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					target: 		'adjacent',
					min_hp: 		1,
					target_type: 	'creature',
					target_amount: 	4,
					target_unique: 	true,
					target_side: 	'enemy',
					effects:{
						0:{
							type: 			'hero_hp',
							target: 		'self',
							effect: 		-2,
							target_side: 	'ally'
						},
					}
			},
		},
		recipe_1: 	'flame_child',
		recipe_2: 	'enrage_enemy',
	},
	
	wandering_soul:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['ghost','defense','moves'],
		name: 		'wandering soul',
		color: 		'a31079',
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		safe_play: true,
		card_priority: 3,
		in_play_value: 0,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'girl-564460_640.jpg',
		text: 		'Moves to a random empty slot after taking damage.',
		strength: 	1,
		max_hp: 	3,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'move_to_empty',
					min_hp: 		1,
					target: 		'self',
					proc_on_death: 	false,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'skeleton',
		recipe_2: 	'curse_of_vengeance',
	},
	ninja:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','offense','direct_damage'],
		name: 		'ninja',
		color: 		'a31079',
		has_adjacent_enemy: false,
		place_on_empty_board: true,
		favorite_col: 4,
		safe_play: true,
		card_priority: 5,
		ai_strength: 0,
		in_play_value: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 1,
					orange: 0,
					yellow: 0
		},
		image: 		'ninja-2007576_640.jpg',
		text: 		'Attacks the enemy hero every turn.',
		strength: 	3,
		max_hp: 	1,
		attack_type: 	'basic',
		recipe_1: 	'dark_spy',
		recipe_2: 	'dark_spy',
	},
	horned_ninja:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'main',
		subtypes: 	['living','offense','direct_damage'],
		name: 		'horned ninja',
		color: 		'a31079',
		rarity: 	3,
		has_adjacent_enemy: true,
		place_on_empty_board: true,
		card_priority: 3,
		ai_strength: 0,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 4,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'woman-3476162_640.jpg',
		text: 		'Attacks the enemy hero every turn. Deals 2 damage to any enemy unit that deals damage to it.',
		strength: 	3,
		max_hp: 	3,
		attack_type: 	'basic',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'damage',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		2
			}
		},
		recipe_1: 	'backstabber',
		recipe_2: 	'backstabber',
	},
	backstabber:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'cheap',
		subtypes: 	['living','defense','muscle'],
		name: 		'backstabber',
		color: 		'a31079',
		has_adjacent_enemy: true,
		adjacent_has_strength: 1,
		has_most_adjacent: true,
		place_on_empty_board: false,
		suicidal: true,
		card_priority: 3,
		ai_strength: 2,
		in_play_value: 6,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 2,
					orange: 0,
					yellow: 0
		},
		image: 		'woman-2695132_640.jpg',
		text: 		'Deals the same amount of damage to any enemy creature that damages it.',
		strength: 	false,
		max_hp: 	4,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'take_damage',
					type: 			'damage',
					target_type: 	'creature',
					min_hp: 		1,
					target: 		'random',
					origin_unit: 	true,
					origin_not_self: true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					target_side: 	'enemy',
					effect: 		'latest_success'
			}
		},
		recipe_1: 	'dark_spy',
		recipe_2: 	'curse_of_vengeance',
	},
	
	green_dragon:{
		stats_version: 		2,
		type: 		'creature',
		card_type: 	'endgame',
		subtypes: 	['living','offense','defense'],
		name: 		'green dragon',
		color: 		'189e06',
		rarity: 	5,
		place_on_empty_board: true,
		has_adjacent_enemy: true,
		card_priority: 3,
		in_play_value: 100,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	9,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
		},
		image: 		'dragon-3009174_640.png',
		text: 		'Regenerates 4 hp each turn.',
		strength: 	7,
		max_hp: 	9,
		attack_type: 	'adjacent',
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'healing',
					min_hp: 		1,
					target: 		'self',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		4,
					target_side: 	'ally'
			}
		},
		recipe_1: 	'druid',
		recipe_2: 	'stampede',
	},
	diamond:{
		type: 		'gem',
		name: 		'diamond',
		color: 		'ffffff',
		rarity: 	1,
		card_priority: 3,
		cost:{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 1
		},
		image: 		'diamond-161739_640.png',
		text: 		'<b>Phase 1:</b> Generates 1 mana of a random color each turn.<br/><br/>' +
					'<b>Phase 2:</b> 25% chance to produce an additional random mana.<br/><br/>' +
					'<b>Phase 3:</b> A total of 100% chance to produce an additional random mana.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		2,
					max_phase: 		2,
					chance: 		25,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		3,
					chance: 		100,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			}
		}
	},
	emerald:{
		type: 		'gem',
		name: 		'emerald',
		color: 		'189e06',
		rarity: 	1,
		card_priority: 3,
		cost:{
					green: 1,
		},
		image: 		'emerald-1137406_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 green mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 10% chance to increase an ally unit\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional green mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'increase_hp',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	green_pendant:{
		type: 		'gem',
		name: 		'green pendant',
		color: 		'189e06',
		rarity: 	5,
		card_priority: 3,
		cost:{
					green: 1,
		},
		image: 		'jewellery-1633124_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 green mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 25% chance to increase the hp of an ally creatures that enter the game by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional green mana each turn.',
		flavor: 	'The blessing of the woods.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'ally_creature_summoned',
					min_phase: 		2,
					chance: 		25,
					type: 			'increase_hp',
					target: 		'random',
					origin_unit: 	true,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	
	wood_trinket:{
		type: 		'gem',
		name: 		'wood trinket',
		color: 		'189e06',
		rarity: 	0,
		card_priority: 3,
		cost:{
					green: 1,
		},
		image: 		'brown-20804_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 green mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 25% chance to heal an ally creature\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional green mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		25,
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	
	ruby:{
		type: 		'gem',
		name: 		'ruby',
		color: 		'f43232',
		rarity: 	1,
		card_priority: 3,
		cost:{
					red: 1,
		},
		image: 		'gems-3418293_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 red mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 20% chance to deal 1 damage to a random enemy unit.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional red mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		20,
					type: 			'damage',
					target: 		'random',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		}
	},
	candle:{
		type: 		'gem',
		name: 		'candle',
		color: 		'f43232',
		rarity: 	0,
		card_priority: 3,
		cost:{
					red: 1,
		},
		image: 		'candle-4477021_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 red mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 10% chance to burn a random enemy unit.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional red mana each turn.',
		flavor: 	'All fires start with a single flame.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'burn',
					target: 		'random',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		}
	},
	fire_gem:{
		type: 		'gem',
		name: 		'fire gem',
		color: 		'f97054',
		rarity: 	2,
		card_priority: 3,
		cost:{
					red: 1,
					yellow: 1
		},
		image: 		'fire-171229_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 red or yellow mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 15% chance to increase your hero\'s hp by 1 and deal 1 damage to a random enemy unit.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 red and 1 yellow mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									red: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		15,
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally',
					on_success:{
						0:{
								type: 			'damage',
								target: 		'random',
								min_hp: 		1,
								target_amount: 	1,
								target_unique: 	true,
								effect_count: 	1,
								effect: 		1,
								target_side: 	'enemy'
						},
					}
			}
		}
	},
	ice_gem:{
		type: 		'gem',
		name: 		'ice gem',
		color: 		'42f4bc',
		rarity: 	2,
		card_priority: 3,
		cost:{
					green: 1,
					blue: 1
		},
		image: 		'soap-bubble-2013161_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 blue or green mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 15% chance to produce an additional random mana.<br/>5% chance to increase an ally unit\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 blue and 1 green mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									green: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		15,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			4:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		5,
					type: 			'increase_hp',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	citrine:{
		type: 		'gem',
		name: 		'citrine',
		color: 		'eae717',
		rarity: 	1,
		card_priority: 3,
		cost:{
					yellow: 1,
		},
		image: 		'citrine-3201605_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 yellow mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 20% chance to increase your hero\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional yellow mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		20,
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	angel_wing:{
		type: 		'gem',
		name: 		'angel wing',
		color: 		'eae717',
		rarity: 	0,
		card_priority: 3,
		cost:{
					yellow: 1,
		},
		image: 		'heart-669552_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 yellow mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 10% chance to heal all ally creatures by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional yellow mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'healing',
					target: 		'random',
					target_type: 	'creature',
					target_amount: 	9,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	
	agate:{
		type: 		'gem',
		name: 		'agate',
		color: 		'337df4',
		rarity: 	1,
		card_priority: 3,
		cost:{
					blue: 1
		},
		image: 		'agate-1084035_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 blue mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 20% chance to produce an additional random mana.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional blue mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		20,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
		}
	},
	mana_crystal:{
		type: 		'gem',
		name: 		'mana crystal',
		color: 		'337df4',
		rarity: 	4,
		card_priority: 3,
		cost:{
					blue: 1
		},
		image: 		'crystal-758818_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 blue mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 20% chance to produce an additional mana your gems can produce.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional blue mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		15,
					type: 			'gain_mana',
					mana_chances: 	'owned_gems',
					mana_amount: 	1,
					target_side: 	'ally'
			},
		}
	},
	polished_agate:{
		type: 		'gem',
		name: 		'polished agate',
		color: 		'337df4',
		rarity: 	3,
		card_priority: 3,
		cost:{
					blue: 1
		},
		image: 		'gem-60294_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 blue mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> Produces 1 mana your gems can produce each time you cast a spell.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional blue mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'before_ally_spell_cast',
					min_phase: 		2,
					type: 			'gain_mana',
					mana_chances: 	'owned_gems',
					mana_amount: 	1,
					target_side: 	'ally'
			},
		}
	},
	
	amber:{
		type: 		'gem',
		name: 		'amber',
		color: 		'ff8902',
		rarity: 	1,
		card_priority: 3,
		cost:{
					orange: 1,
		},
		image: 		'bernstein-6579_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 orange mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 10% chance to increase an ally unit\'s strength by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional orange mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	triple_amber_pendant:{
		type: 		'gem',
		name: 		'triple amber pendant',
		color: 		'ff8902',
		rarity: 	4,
		card_priority: 3,
		cost:{
					orange: 1,
		},
		image: 		'amber-669473_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 orange mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> Heals a friendly unit with at least 4 strength by 1.<br/><br/>' +
					'<b>Phase 3:</b> Increases an ally unit\'s strength by 1.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally',
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally',
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					type: 			'healing',
					target: 		'random',
					min_strength: 	4,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
			
		}
	},
	
	rock_crystal:{
		type: 		'gem',
		name: 		'rock crystal',
		color: 		'ff8902',
		rarity: 	0,
		card_priority: 3,
		cost:{
					orange: 1,
		},
		image: 		'rock-crystal-1603423_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 orange mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> Restores 1 hp of an ally with 4 or more strength each turn.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional orange mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					type: 			'healing',
					target: 		'random',
					min_strength: 	4,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	
	polished_skull:{
		type: 		'gem',
		name: 		'polished skull',
		color: 		'a31079',
		rarity: 	1,
		card_priority: 3,
		cost:{
					purple: 1,
		},
		image: 		'skull-1557446_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 orange mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 20% chance to summon a ghost.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional orange mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									purple: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									purple: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		20,
					type: 			'summon',
					card_id: 		{
						ghost: 		4,
					},
					effect: 		1,
			}
		}
	},
	amethist:{
		type: 		'gem',
		name: 		'amethist',
		color: 		'a31079',
		rarity: 	1,
		card_priority: 3,
		cost:{
					purple: 1,
		},
		image: 		'amethyst-1607247_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 orange mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 20% chance to reduce the enemy hero\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 additional orange mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									purple: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									purple: 	1,
					},
					mana_amount: 	2,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		20,
					type: 			'hero_hp',
					effect: 		-1,
					target_side: 	'enemy'
			},
		},
		recipe_1: 	'curse_of_vengeance',
		recipe_2: 	'polished_skull',
	},
	magic_gem:{
		type: 		'gem',
		name: 		'magic gem',
		color: 		'6242f4',
		rarity: 	2,
		card_priority: 3,
		cost:{
					purple: 1,
					blue: 1
		},
		image: 		'stone-199666_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 blue or purple mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 10% chance to produce an additional random mana.<br/>10% chance to reduce the enemy hero\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 blue and 1 purple mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									purple: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									purple: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'hero_hp',
					effect: 		-1,
					target_side: 	'enemy'
			},
			4:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'gain_mana',
					mana_chances:{
									blue: 	1,
									red: 	1,
									green: 	1,
									purple: 1,
									orange: 1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
		}
	},
	gemmed_ring:{
		type: 		'gem',
		name: 		'gemmed ring',
		color: 		'b8ed47',
		rarity: 	2,
		card_priority: 3,
		cost:{
					green: 1,
					yellow: 1
		},
		image: 		'drusy-665522_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 green or yellow mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 5% chance to increase an ally unit\'s hp by 1.<br/>10% chance to increase your hero\'s hp by 1.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 green and 1 yellow mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
									yellow: 1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									green: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									yellow: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		5,
					type: 			'increase_hp',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			4:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'hero_hp',
					effect: 		1,
					target_side: 	'ally'
			}
		}
	},
	resin_stone:{
		type: 		'gem',
		name: 		'resin stone',
		color: 		'ed8647',
		rarity: 	2,
		card_priority: 3,
		cost:{
					red: 1,
					orange: 1
		},
		image: 		'bernstein-67381_640.jpg',
		text: 		'<b>Phase 1:</b> Generates 1 orange or red mana each turn.<br/><br/>' +
					'<b>Phase 2:</b> 5% chance to increase an ally unit\'s strength by 1.<br/>10% chance to deal 1 damage to a random enemy unit.<br/><br/>' +
					'<b>Phase 3:</b> Generates 1 orange and 1 red mana each turn.',
		strength: 	false,
		max_hp: 	false,
		abilities: 	{
			0:{
					proc: 			'start_turn',
					max_phase: 		2,
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
									red: 	1
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			1:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									orange: 	1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			2:{
					proc: 			'start_turn',
					min_phase: 		3,
					type: 			'gain_mana',
					mana_chances:{
									red: 		1,
					},
					mana_amount: 	1,
					target_side: 	'ally'
			},
			3:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		5,
					type: 			'increase_strength',
					target: 		'random',
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'ally'
			},
			4:{
					proc: 			'start_turn',
					min_phase: 		2,
					chance: 		10,
					type: 			'damage',
					target: 		'random',
					min_hp: 		1,
					target_amount: 	1,
					target_unique: 	true,
					effect_count: 	1,
					effect: 		1,
					target_side: 	'enemy'
			}
		}
	},
	
	
	
}



$(document).ready(function() {

	$.each(all_cards, function(card_group_id, card_group){
		available_cards = merge_objects(card_group, available_cards);
	});

	available_cards = sortObj(available_cards);

	$.each(available_cards, function(card_id, card){
		/*if(card['max_hp'] != false && card['max_hp'] > 1 && card['type'] == 'creature' && card['stats_version'] == undefined)
		{
			card['max_hp'] *= 1;
			card['max_hp'] = Math.ceil(card['max_hp'] / 2);
		}
		if(card['strength'] != false && card['strength'] > 1 && card['stats_version'] == undefined)
		{
			card['strength'] = Math.ceil(card['strength'] / 2);
		}*/
		if(card['max_hp'] != false && card['adjusted'] == undefined)
		{
			card['max_hp'] = Math.floor(card['max_hp'] * 2);
			card['adjusted'] = true;
		}
		var base_cost = 0;
		$.each(card['cost'], function(color, amount){
			if(amount > 0)
			{
				base_cost += amount;
			}
		});
		card['base_cost'] = base_cost;
		if(card['in_play_value'] == undefined)
		{
			card['in_play_value'] = 0;
		}
		if(card['rarity'] == undefined)
		{
			card['rarity'] = 1;
		}
	});
	show_all_cards();
	get_owned_cards();
});


function clear_deck(){
	$.each(gamedata['owned_cards'], function(current_card_id, owned_card){
		if(owned_card['deck_id'] == gamedata['current_deck'])
		{
			gamedata['owned_cards'][current_card_id]['deck_id'] = 0;	
		}
	});
	saveToLocalStorage();
	show_deck();
}

function toggle_filter(filter,subtype){
	if(gamedata['deck_card_filters'][filter][subtype] == true)
	{
		gamedata['deck_card_filters'][filter][subtype] = false;
		$('.card_filter.filter_' + subtype).removeClass('selected');
	}
	else
	{
		gamedata['deck_card_filters'][filter][subtype] = true;
		$('.card_filter.filter_' + subtype).addClass('selected');
	}
	saveToLocalStorage();
	show_owned_cards();
	show_deck();

}

function gain_card(card_id, deck_id){
	if(deck_id == undefined){deck_id = 0;}
	var new_key = get_highest_key_in_object(gamedata['owned_cards']) + 1;
	gamedata['owned_cards'][new_key] = {card_id:card_id,deck_id:deck_id};

	saveToLocalStorage();
	/*show_owned_cards();*/
};

function lose_card(card_id){
	var lost = false;
	$.each(gamedata['owned_cards'], function(owned_id, card_info){
		if(lost == false && card_info['card_id'] == card_id && card_info['deck_id'] == 0)
		{
			lost = true;
			delete gamedata['owned_cards'][owned_id];
		}
	});
	saveToLocalStorage();
	/*show_owned_cards();*/
};

function gain_random_card(deck_id){
	if(deck_id == undefined){deck_id = 0;}
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		total_cards += 1;
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){

		chosen_card -= 1;
		if(chosen_card > -1 && chosen_card < 0)
		{
			gain_card(card_id,deck_id);
		}
		
	});
}

function gain_random_non_gem_card(deck_id){
	if(deck_id == undefined){deck_id = 0;}
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			if(card['pick_chance'] == undefined)
			{
				card['pick_chance'] = 100;
			}

			total_cards += card['pick_chance'] * get_rarity_factor(card['rarity']);
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			chosen_card -= card['pick_chance'] * get_rarity_factor(card['rarity']);
			if(chosen_card > -1 * card['pick_chance'] * get_rarity_factor(card['rarity']) && chosen_card < 0)
			{
				gain_card(card_id,deck_id);
			}
		}
		
	});
}

function gain_random_gem_card(deck_id){
	if(deck_id == undefined){deck_id = 0;}
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		if(card['type'] == 'gem')
		{
			total_cards += 1;
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['type'] == 'gem')
		{
			chosen_card -= 1;
			if(chosen_card > -1 && chosen_card < 0)
			{
				gain_card(card_id,deck_id);
			}
		}
		
	});
}

function pick_random_non_gem_card(){
	var picked_card = false;
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			total_cards += 1;
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			chosen_card -= 1;
			if(chosen_card > -1 && chosen_card < 0)
			{
				picked_card = card_id;
				return
			}
		}
		
	});

	return picked_card

}

function get_rarity_factor(rarity, rarity_adjustment, min_rarity){
	if(rarity_adjustment == undefined){rarity_adjustment = 0;}
	if(rarity < min_rarity){return 0;}
	rarity += 1;
	if(rarity == 0){rarity = 0.5;}
	if(rarity > rarity_adjustment)
	{
		var total_factor = rarity;
		for (var i = rarity_factor * 2 - 1; i >= 0; i--) {
			total_factor *= rarity;
		};
		return 1 / total_factor;
	}
	return 1;
}

function pick_random_non_gem_card_based_on_mana(mana, max_cost,card_type, current_deck, set_rarity, reduce_colorless){

	if(max_cost == undefined)
	{
		max_cost =25;
	}
	if(set_rarity == undefined)
	{
		set_rarity =0;
	}
	var picked_card = false;
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){

		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			var color_matched = true;
			var is_colorless = true;
			var card_cost = 0;
			$.each(card['cost'], function(color, amount){
				card_cost += amount;
				if(color != 'colorless')
				{
					if(amount > 0)
					{
						is_colorless = false;
					}
					if(amount > 0 && (mana[color] == 0 || mana[color] == undefined))
					{
						color_matched = false;
					}
				}
			});
			var subtype_matched = false;
			if(card_type['subtype'] == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(card['subtypes'], function(useless_key, subtype){
					if(card_type['subtype'] == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(card_cost >= card_type['min_cost'] && card_cost <= card_type['max_cost'] && color_matched == true && (card_type['type'] == 'any' || card_type['type'] == card['type'] || (card_type['type'] == 'unit' && card['type'] != 'spell')) && (card_type == undefined || card_type['subtype'] == card['card_type'] || card['card_type'] == undefined || subtype_matched == true))
			{
				if(card['pick_chance'] == undefined)
				{
					card['pick_chance'] = 100;
				}
				var current_pick_chance = card['pick_chance'];
				if(is_colorless == true && reduce_colorless != undefined && reduce_colorless == true)
				{
					current_pick_chance *= 0.01;
				}

				total_cards += current_pick_chance * get_rarity_factor(card['rarity'], set_rarity);
				
			}
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			var color_matched = true;
			var is_colorless = true;
			var card_cost = 0;
			$.each(card['cost'], function(color, amount){
				card_cost += amount;
				if(color != 'colorless')
				{
					if(amount > 0)
					{
						is_colorless = false;
					}
					if(amount > 0 && (mana[color] == 0 || mana[color] == undefined))
					{
						color_matched = false;
					}
				}
			});
			var subtype_matched = false;
			if(card_type['subtype'] == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(card['subtypes'], function(useless_key, subtype){
					if(card_type['subtype'] == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(card_cost >= card_type['min_cost'] && card_cost <= card_type['max_cost'] && color_matched == true && (card_type['type'] == 'any' || card_type['type'] == card['type'] || (card_type['type'] == 'unit' && card['type'] != 'spell')) && (card_type == undefined || card_type['subtype'] == card['card_type'] || card['card_type'] == undefined || subtype_matched == true))
			{
				var current_pick_chance = card['pick_chance'];
				if(is_colorless == true && reduce_colorless != undefined && reduce_colorless == true)
				{
					current_pick_chance *= 0.00000000001;
				}
				chosen_card -= current_pick_chance * get_rarity_factor(card['rarity'], set_rarity);
				if(chosen_card > -1 * current_pick_chance * get_rarity_factor(card['rarity'], set_rarity) && chosen_card < 0)
				{
					picked_card = card_id;
					return
				}
			}
		}
		
	});

	if(current_deck != undefined){
		$.each(current_deck, function (deck_card_id, deck_card){
			if(deck_card['card_id'] == picked_card)
			{
				//console.log('double card (' + picked_card + ')');
				picked_card = false;
			}
		});
	}

	if(picked_card == false && card_type['subtype'] != 'any' && card_type['type'] != 'any')
	{
		failed_card_picks++;
		//console.log('could not find ' + card_type['type'] + ' ' + card_type['subtype'] + ' (' + card_type['min_cost'] + '/' + card_type['max_cost'] + ')');
		picked_card = pick_random_non_gem_card_based_on_mana(mana, max_cost,{subtype:card_type['subtype'],type:'any',min_cost:card_type['min_cost'],max_cost:card_type['max_cost'],gem:card_type['gem']});
	}

	if(picked_card == false && card_type['subtype'] != 'any' && card_type['type'] == 'any')
	{
		failed_card_picks++;
		//console.log('could not find ' + card_type['type'] + ' ' + card_type['subtype'] + ' (' + card_type['min_cost'] + '/' + card_type['max_cost'] + ')');
		picked_card = pick_random_non_gem_card_based_on_mana(mana, max_cost,{subtype:'any',type:'any',min_cost:card_type['min_cost'],max_cost:card_type['max_cost'],gem:card_type['gem']});
	}

	if(picked_card == false)
	{
		failed_card_picks++;
		//console.log('could not find ' + card_type['type'] + ' ' + card_type['subtype'] + ' (' + card_type['min_cost'] + '/' + card_type['max_cost'] + ')');
		picked_card = pick_random_non_gem_card_based_on_mana(mana, max_cost,{subtype:'main',type:'any',min_cost:1,max_cost:25,gem:2});
	}

	return picked_card

}

function pick_random_non_gem_card_based_on_one_mana(mana){
	var picked_card = false;
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			var color_matched = false;
			$.each(card['cost'], function(color, amount){
				if(amount > 0 && mana[color] != undefined && mana[color] != 0)
				{
					color_matched = true;
				}
			});
			if(color_matched == true)
			{
				if(card['pick_chance'] == undefined)
				{
					card['pick_chance'] = 100;
				}

				total_cards += card['pick_chance'] * get_rarity_factor(card['rarity']);
			}
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['type'] != 'gem' && card['nonpickable'] == undefined)
		{
			var color_matched = false;
			$.each(card['cost'], function(color, amount){
				if(amount > 0 && mana[color] != undefined && mana[color] != 0)
				{
					color_matched = true;
				}
			});
			if(color_matched == true)
			{
				if(card['pick_chance'] == undefined)
				{
					card['pick_chance'] = 100;
				}
				//chosen_card -= 1;
				chosen_card -= card['pick_chance'] * get_rarity_factor(card['rarity']);
				if(chosen_card > -1 * card['pick_chance'] * get_rarity_factor(card['rarity']) && chosen_card < 0)
				{
					picked_card = card_id;
					return
				}
			}
		}
		
	});

	return picked_card

}


function pick_random_card_based_on_one_mana(mana, set_rarity, min_rarity){
	if (set_rarity == undefined){set_rarity = 1;}
	if (min_rarity == undefined){min_rarity = 0;}
	var picked_card = false;
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		if(card['nonpickable'] == undefined)
		{
			var color_matched = false;
			$.each(card['cost'], function(color, amount){
				if(amount > 0 && mana[color] != undefined && mana[color] != 0)
				{
					color_matched = true;
				}
			});
			if(color_matched == true)
			{
				if(card['pick_chance'] == undefined)
				{
					card['pick_chance'] = 100;
				}
				total_cards += card['pick_chance'] * get_rarity_factor(card['rarity'], set_rarity, min_rarity);
			}
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['nonpickable'] == undefined)
		{
			var color_matched = false;
			$.each(card['cost'], function(color, amount){
				if(amount > 0 && mana[color] != undefined && mana[color] != 0)
				{
					color_matched = true;
				}
			});
			if(color_matched == true)
			{
				if(card['pick_chance'] == undefined)
				{
					card['pick_chance'] = 100;
				}
				//chosen_card -= 1;
				chosen_card -= card['pick_chance'] * get_rarity_factor(card['rarity'], set_rarity, min_rarity);
				if(chosen_card > -1 * card['pick_chance'] * get_rarity_factor(card['rarity'], set_rarity, min_rarity) && chosen_card < 0)
				{
					picked_card = card_id;
					return
				}
			}
		}
		
	});
	console.log(picked_card);
	return picked_card

}

function pick_random_color_gem_card(){
	var picked_card = false;
	var total_cards = 0;
	var random_color_number = Math.floor(Math.random() * 6 + 1);
	var random_color;
	if(random_color_number == 1){random_color = 'green';}
	if(random_color_number == 2){random_color = 'blue';}
	if(random_color_number == 3){random_color = 'purple';}
	if(random_color_number == 4){random_color = 'red';}
	if(random_color_number == 5){random_color = 'orange';}
	if(random_color_number == 6){random_color = 'yellow';}
	$.each(available_cards, function(card_id, card){
		if(card['type'] == 'gem' && card['cost'][random_color] != undefined && card['cost'][random_color] > 0)
		{

			if(card['pick_chance'] == undefined)
			{
				card['pick_chance'] = 100;
			}
			total_cards += card['pick_chance'] * get_rarity_factor(card['rarity']);
			
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		if(card['type'] == 'gem' && card['cost'][random_color] != undefined && card['cost'][random_color] > 0)
		{
			chosen_card -= card['pick_chance'] * get_rarity_factor(card['rarity']);
			if(chosen_card > -1 * card['pick_chance'] * get_rarity_factor(card['rarity']) && chosen_card < 0)
			{
				picked_card = card_id;
				return
			}
			
		}
		
	});
	return picked_card;
}

function pick_random_gem_card(not_these, set_rarity, min_rarity){
	if (set_rarity == undefined){set_rarity = 1;}
	if (min_rarity == undefined){min_rarity = 0;}
	var picked_card = false;
	var total_cards = 0;
	$.each(available_cards, function(card_id, card){
		var can_pick_this = true;
		if(card['type'] == 'gem')
		{
			$.each(not_these, function(not_key,not_this){
				if(card_id == not_this)
				{
					can_pick_this = false;
				}
			});
			if(can_pick_this == true)
			{
				if(card['pick_chance'] == undefined)
				{
					card['pick_chance'] = 100;
				}
				total_cards += card['pick_chance'] * get_rarity_factor(card['rarity'], set_rarity, min_rarity);
			}
		}
	});
	var chosen_card = (Math.random() * total_cards);
	$.each(available_cards, function(card_id, card){
		var can_pick_this = true;
		if(card['type'] == 'gem')
		{
			$.each(not_these, function(not_key,not_this){
				if(card_id == not_this)
				{
					can_pick_this = false;
				}
			});
			if(can_pick_this == true)
			{
				chosen_card -= card['pick_chance'] * get_rarity_factor(card['rarity'], set_rarity, min_rarity);
				if(chosen_card > -1 * card['pick_chance'] * get_rarity_factor(card['rarity'], set_rarity, min_rarity) && chosen_card < 0)
				{
					picked_card = card_id;
					return
				}
			}
		}
		
	});

	return picked_card
}

function count_gem_cards_in_deck(deck_id){
	var amount_of_gems_in_deck = 0;
	$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
		if(available_cards[owned_card['card_id']]['type'] == 'gem' && owned_card['deck_id'] == deck_id)
		{
			amount_of_gems_in_deck++;
		}
	});
	return amount_of_gems_in_deck;
}

function count_non_gem_cards_in_deck(deck_id){
	var amount_of_non_gems_in_deck = 0;
	$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
		if(available_cards[owned_card['card_id']]['type'] != 'gem' && owned_card['deck_id'] == deck_id)
		{
			amount_of_non_gems_in_deck++;
		}
	});
	return amount_of_non_gems_in_deck;
}

function parse_available_cards(){
	var all_available_cards = '';
	$.each(available_cards, function(card_id, card){
		var owned_amount = 0;
		$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
			var can_show = false;
			if(card_id == owned_card['card_id'] && owned_card['deck_id'] == 0)
			{
				can_show = true;
			}
			if(gamedata['deck_card_filters']['type'][card['type']] == false)
			{
				can_show = false;
			}
			$.each(gamedata['deck_card_filters']['color'], function(color, filter){
				if(filter == false && card['cost'][color] > 0)
				{
					can_show = false;
				}
			});
			if(can_show == true)
			{
				owned_amount ++;
			}
		});
		if(owned_amount > 0)
		{
			all_available_cards += parse_card(card_id, 'full',undefined,undefined,owned_amount);
		}
	});

	return all_available_cards;
}

function show_owned_cards(){
	/*$.each(available_cards, function(card_id, card){
		var owned_amount = 0;
		$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
			var can_show = false;
			if(card_id == owned_card['card_id'] && owned_card['deck_id'] == 0)
			{
				can_show = true;
			}
			if(gamedata['deck_card_filters']['type'][card['type']] == false)
			{
				can_show = false;
			}
			$.each(gamedata['deck_card_filters']['color'], function(color, filter){
				if(filter == false && card['cost'][color] > 0)
				{
					can_show = false;
				}
			});
			if(can_show == true)
			{
				owned_amount ++;
			}
		});
		if(owned_amount > 0)
		{
			$('.available_cards .general_' + card_id + ' .owned_amount').html('x' + owned_amount);
			$('.available_cards .general_' + card_id).removeClass('hidden');
		}
		else
		{
			$('.available_cards .general_' + card_id).addClass('hidden');
		}
	});*/
	
	$.each(owned_cards, function(card_id, amount){
		var can_show = true;
		if(gamedata['deck_card_filters']['type'][available_cards[card_id]['type']] == false)
		{
			can_show = false;
		}
		$.each(gamedata['deck_card_filters']['color'], function(color, filter){
			if(color != 'colorless')
			{
				if(filter == false && available_cards[card_id]['cost'][color] > 0)
				{
					can_show = false;
				}
			}
			if(color == 'colorless' && filter == false)
			{
				var colorless = true;
				$.each(available_cards[card_id]['cost'], function(mana_color, amount){
					if(mana_color != 'colorless' && amount > 0)
					{
						colorless = false;
					}
				});
				if(colorless == true)
				{
					can_show = false;
				}
			}
		});
		if(can_show == true && amount > 0)
		{
			$('.available_cards .general_' + card_id + ' .owned_amount').html('x' + amount);
			$('.available_cards .general_' + card_id).removeClass('hidden');
		}
		else
		{
			$('.available_cards .general_' + card_id).addClass('hidden');
		}
	});
}

function update_owned_amount(card_id){
	/*var card = available_cards[card_id];
	var owned_amount = 0;
	$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
		var can_show = false;
		if(card_id == owned_card['card_id'] && owned_card['deck_id'] == 0)
		{
			can_show = true;
		}
		if(gamedata['deck_card_filters']['type'][card['type']] == false)
		{
			can_show = false;
		}
		$.each(gamedata['deck_card_filters']['color'], function(color, filter){
			if(filter == false && card['cost'][color] > 0)
			{
				can_show = false;
			}
		});
		if(can_show == true)
		{
			owned_amount ++;
		}
	});
	console.log(owned_amount);
	if(owned_amount > 0)
	{
		$('.general_' + card_id + ' .owned_amount').html('x' + owned_amount);
		$('.general_' + card_id).removeClass('hidden');
	}
	else
	{
		$('.general_' + card_id).addClass('hidden');
	}*/
	var amount = owned_cards[card_id];
	var can_show = true;
	if(gamedata['deck_card_filters']['type'][available_cards[card_id]['type']] == false)
	{
		can_show = false;
	}
	$.each(gamedata['deck_card_filters']['color'], function(color, filter){
		if(filter == false && available_cards[card_id]['cost'][color] > 0)
		{
			can_show = false;
		}
	});
	if(can_show == true && amount > 0)
	{
		$('.available_cards .general_' + card_id + ' .owned_amount').html('x' + amount);
		$('.available_cards .general_' + card_id).removeClass('hidden');
	}
	else
	{
		$('.available_cards .general_' + card_id).addClass('hidden');
	}
}

function parse_all_cards(){
	var all_available_cards = '';
	console.log('showing all');
	$.each(available_cards, function(card_id, card){
		
		all_available_cards += parse_card(card_id, 'full',undefined,undefined,0);
		
	});

	return all_available_cards;
}

function parse_deck_cards(){
	var all_deck_cards = '';
	var max_deck_cards_cost = 0;
	$.each(gamedata['owned_cards'], function(card_id, card){
		if(available_cards[card['card_id']]['base_cost'] > max_deck_cards_cost && card['deck_id'] == gamedata['current_deck'] && available_cards[card['card_id']]['type'] != 'gem')
		{
			max_deck_cards_cost = available_cards[card['card_id']]['base_cost'];
		}
	});
	for (var i = 0; i <= max_deck_cards_cost; i++) {
		$.each(available_cards, function(card_id, card){
			var owned_amount = 0;
			$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
				if(card_id == owned_card['card_id'] && owned_card['deck_id'] == gamedata['current_deck'] && card['type'] != 'gem' && available_cards[owned_card['card_id']]['base_cost'] == i)
				{
					all_deck_cards += parse_card(card_id, 'slim', undefined, undefined,1);
					
				}
			});
		});
	};

	return all_deck_cards;
}

function parse_deck_gems(){
	var all_deck_cards = '';
	$.each(available_cards, function(card_id, card){
		$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
			if(card_id == owned_card['card_id'] && owned_card['deck_id'] == gamedata['current_deck'] && card['type'] == 'gem')
			{
				all_deck_cards += parse_card(card_id, 'slim', owned_card_id);
			}
		});
	});

	return all_deck_cards;
}

function parse_hand_cards(deck){
	var all_hand_cards = '';
	var max_hand_cards_cost = 0;
	$.each(deck, function(owned_card_id, owned_card){
		if(available_cards[owned_card['card_id']]['base_cost'] + owned_card['grave_cost'] > max_hand_cards_cost)
		{
			max_hand_cards_cost = available_cards[owned_card['card_id']]['base_cost'] + owned_card['grave_cost'];
		}
	});

	for (var i = 0; i <= max_hand_cards_cost; i++) {
		$.each(deck, function(owned_card_id, owned_card){
			if(owned_card['status'] == 'hand' && available_cards[owned_card['card_id']]['base_cost'] + owned_card['grave_cost'] == i)
			{
				all_hand_cards += parse_hand_card(owned_card['card_id'], 'slim', owned_card_id, undefined, owned_card['grave_cost']);
			}
		});
	};

	return all_hand_cards;
}

function parse_card(card_id, type, owned_id, unit_id, owned_amount, grave_cost){

	if(owned_id == undefined){
		owned_id = 0;
	}

	if(unit_id == undefined){
		unit_id = '';
	}
	var parsed_card = '';
	var additional_classes = '';

	if(available_cards[card_id]['poisoned'] != undefined && available_cards[card_id]['poisoned'] > 0)
	{
		additional_classes += 		' poisoned';
	}
	if(available_cards[card_id]['burning'] != undefined && available_cards[card_id]['burning'] > 0)
	{
		additional_classes += 		' burning';
	}

	var smaller_font = '';
	if(available_cards[card_id]['name'].length > 12 && type == 'slim')
	{
		var smaller_font_size = 18 * (12 / available_cards[card_id]['name'].length);
		smaller_font = 'style="font-size:' + smaller_font_size + 'px; margin-top:' + ((18 - smaller_font_size) / 2) + 'px"';
	}

	parsed_card += 	'<div class="card ' + type + ' unit_' + unit_id + ' general_' + card_id + '" data-card-id="' + owned_id + '" data-general-card-id="' + card_id + '">';
	parsed_card += 		'<div class="card_color" style="background-color:#' + available_cards[card_id]['color'] + '"></div>';
	parsed_card += 		'<div class="card_image" style="background-image:url(images/cards/' + available_cards[card_id]['image'] + ')"></div>';
	if(type == 'slim' || owned_amount != undefined)
	{
		parsed_card += 		'<div class="card_name" ' + smaller_font + '>' + available_cards[card_id]['name'] + '</div>';
	}
	if(owned_amount != undefined)
	{
		parsed_card += 		'<div class="card_text">' + available_cards[card_id]['text'] + '</div>';
	}
	var card_energy_visible = '';
	if(available_cards[card_id]['uses_energy'] != undefined){card_energy_visible = 'active'}
	parsed_card += 		'<div class="card_energy ' + card_energy_visible + '">energy: <span class="current_energy">' + available_cards[card_id]['energy'] + '</span></div>';
	if(available_cards[card_id]['strength'] !== false){
		parsed_card += 		'<div class="card_strength">' + available_cards[card_id]['strength'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="card_strength hidden"></div>';
	}
	if(available_cards[card_id]['max_hp'] !== false){
		parsed_card += 		'<div class="card_hp"><div class="card_current_hp"></div><span>' + available_cards[card_id]['max_hp'] + '</span></div>';
	}
	
	if(owned_amount > 1)
	{
		parsed_card += 		'<div class="owned_amount"><span>x' + owned_amount + '</span></div>';
	}
	else
	{
		parsed_card += 		'<div class="owned_amount"><span></span></div>';
	}
	if(available_cards[card_id]['poisoned'] != undefined && available_cards[card_id]['poisoned'] > 0)
	{
		parsed_card += 		'<div class="poisoned_amount">' + available_cards[card_id]['poisoned'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="poisoned_amount"></div>';
	}
	if(available_cards[card_id]['burning'] != undefined && available_cards[card_id]['burning'] > 0)
	{
		parsed_card += 		'<div class="burning_amount">' + available_cards[card_id]['burning'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="burning_amount"></div>';
	}

	if(available_cards[card_id]['rarity'] != undefined && available_cards[card_id]['rarity'] > 0)
	{
		parsed_card += 		'<div class="stars">';
		for (var i = available_cards[card_id]['rarity'] - 1; i >= 0; i--) {
			parsed_card += 		'<div class="star"></div>';
		};
		parsed_card += 		'</div>';
	}
	
	
	if(available_cards[card_id]['cost']['colorless'] == undefined){available_cards[card_id]['cost']['colorless'] = 0;}
	if(available_cards[card_id]['type'] != 'gem')
	{
		var total_cost = '';
		$.each(available_cards[card_id]['cost'], function(color, amount){
			if(color == 'colorless' && grave_cost != undefined){amount += grave_cost;}
			if(amount > 0)
			{
				if(type == 'slim')
				{
					var sub_cost = '<span class="' + color + '_mana">';
					for (var i = 0; i < amount; i++) {
						sub_cost += '<i class="fas fa-circle"></i>'; 
					};
					sub_cost += '</span>';
					total_cost += sub_cost;
				}
				else
				{
					var shown_amount = '';
					if(amount > 1){shown_amount = amount;}
					total_cost += '<div class="cost_color ' + color + '_mana_bg">' + shown_amount + '</div>';
				}
			}
		});
		parsed_card += 		'<div class="card_cost">' + total_cost + '</div>';
	}
	parsed_card += 	'</div>';
	parsed_card += 	'<div class="card_info">';
	parsed_card += 		'<div class="card_name" ' + smaller_font + '>' + available_cards[card_id]['name'] + '</div>';
	parsed_card += 		'<div class="card_text"><b>' + available_cards[card_id]['type'] + '</b><br/>' + available_cards[card_id]['text'] + '</div>';
	if(available_cards[card_id]['flavor'] != undefined){
		parsed_card += 		'<div class="card_flavor"><i>' + available_cards[card_id]['flavor'] + '</i></div>';
	}
	parsed_card += 	'</div>';

	return parsed_card;
}

function parse_hand_card(card_id, type, owned_id, unit_id, grave_cost){

	var can_play_card = true;
	if(owned_id == undefined){
		owned_id = 0;
	}
	else
	{
		/*$.each(available_cards[card_id]['cost'], function(color, amount){
			if(player_mana[color] < amount)
			{
				can_play_card = false;
			}
		});*/
		can_play_card = check_have_mana(player_mana, available_cards[card_id]['cost'], grave_cost);
	}

	var can_play_class = " cannot_play ";

	if(can_play_card == true)
	{
		can_play_class = " can_play ";
	}

	if(unit_id == undefined){
		unit_id = '';
	}
	var parsed_card = '';

	var smaller_font = '';
	if(available_cards[card_id]['name'].length > 12)
	{
		var smaller_font_size = 18 * (12 / available_cards[card_id]['name'].length);
		smaller_font = 'style="font-size:' + smaller_font_size + 'px; margin-top:' + ((18 - smaller_font_size) / 2) + 'px"';
	}

	parsed_card += 	'<div class="card ' + type + ' unit_' + unit_id + can_play_class + '" data-card-id="' + owned_id + '" data-general-card-id="' + card_id + '">';
	parsed_card += 		'<div class="card_color" style="background-color:#' + available_cards[card_id]['color'] + '"></div>';
	parsed_card += 		'<div class="card_image" style="background-image:url(images/cards/' + available_cards[card_id]['image'] + ')"></div>';
	parsed_card += 		'<div class="card_name" ' + smaller_font + '>' + available_cards[card_id]['name'] + '</div>';
	parsed_card += 		'<div class="card_text">' + available_cards[card_id]['text'] + '</div>';
	if(available_cards[card_id]['strength'] !== false){
		parsed_card += 		'<div class="card_strength">' + available_cards[card_id]['strength'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="card_strength hidden"></div>';
	}
	if(available_cards[card_id]['max_hp'] !== false){
		parsed_card += 		'<div class="card_hp"><div class="card_current_hp"></div><span>' + available_cards[card_id]['max_hp'] + '</span></div>';
	}
	var total_cost = '';
	if(available_cards[card_id]['cost']['colorless'] == undefined){available_cards[card_id]['cost']['colorless'] = 0;}
	$.each(available_cards[card_id]['cost'], function(color, amount){
		if(color == 'colorless' && grave_cost != undefined){amount += grave_cost;}
		if(amount > 0)
		{
			var sub_cost = '<span class="' + color + '_mana">';
			for (var i = 0; i < amount; i++) {
				sub_cost += '<i class="fas fa-circle"></i>'; 
			};
			sub_cost += '</span>';
			total_cost += sub_cost;
			/*var shown_amount = '';
			if(amount > 1){shown_amount = amount;}
			total_cost += '<div class="cost_color ' + color + '_mana_bg">' + shown_amount + '</div>';*/
		}
	});
	parsed_card += 		'<div class="card_cost">' + total_cost + '</div>';
	parsed_card += 	'</div>';

	return parsed_card;
}

var not_enough_coins;
var pack_rarity = 0;
var last_pack_bought = '';

function buy_pack(color){
	var combined_mana_pool = {
		blue: 	0,
		red: 	0,
		green: 	0,
		purple: 0,
		orange: 0,
		yellow: 0
	};
	if(combined_mana_pool[color] != undefined){
		combined_mana_pool[color]++;
	}
	bonus_cards = 0;
	if(color == 'all')
	{
		combined_mana_pool = {
			blue: 	1,
			red: 	1,
			green: 	1,
			purple: 1,
			orange: 1,
			yellow: 1
		};
		bonus_cards = 2;
	}
	if(gamedata['coins'] >= Math.floor(Math.sqrt(pack_price / get_rarity_factor(pack_rarity)))){
		gamedata['coins'] -= Math.floor(Math.sqrt(pack_price / get_rarity_factor(pack_rarity)));
		last_pack_bought = color;
		show_content('bought_pack');
		$('.bought_cards').html('');
		var min_rarity = 0;
		for (var i = 0; i < pack_cards_count + bonus_cards; i++) {
			min_rarity = pack_rarity;
			if(color == 'gem')
			{
				var chosen_card = pick_random_gem_card({}, pack_rarity, min_rarity);
			}
			else
			{
				var chosen_card = pick_random_card_based_on_one_mana(combined_mana_pool, pack_rarity, min_rarity);
			}
			if(chosen_card == false)
			{
				if(color == 'gem')
				{
					var chosen_card = pick_random_gem_card({}, pack_rarity);
				}
				else
				{
					var chosen_card = pick_random_card_based_on_one_mana(combined_mana_pool, pack_rarity);
				}
			}
			var parsed_card = parse_card(chosen_card, 'full');
			$('.bought_cards').append("<div class='bought_card_container card_gained_" + i + "' onclick='show_card_detailed(\"" + chosen_card + "\")'>" + parsed_card + "</div>");
			gain_card(chosen_card, 0);
			show_bought_card(i);
		};
		//parse_all_cards();
		//show_owned_cards();
		/*if(color != 'gem' && color != 'all')
		{
			if(color == 'green'){chosen_card = 'grove';}
			if(color == 'blue'){chosen_card = 'ocean';}
			if(color == 'purple'){chosen_card = 'marsh';}
			if(color == 'red'){chosen_card = 'furnace';}
			if(color == 'orange'){chosen_card = 'desert';}
			if(color == 'yellow'){chosen_card = 'bank';}

			var i = pack_cards_count + bonus_cards + 1;
			var parsed_card = parse_card(chosen_card, 'full');
			$('.bought_cards').append("<div class='bought_card_container card_gained_" + i + "'>" + parsed_card + "</div>");
			gain_card(chosen_card, 0);
			show_bought_card(i);
		}*/
		
	}
	else
	{
		$('.owned_coins').addClass('zoom');
		clearTimeout(not_enough_coins);
		not_enough_coins = setTimeout(function(){
			$('.owned_coins').removeClass('zoom');
		}, 1000);
	}
}

function buy_again(){
	if(last_pack_bought != '')
	{
		buy_pack(last_pack_bought);
	}
}

function show_bought_card(card_number)
{
	setTimeout(function(){
		$('.card_gained_' + card_number).addClass('shown');
		
	}, (card_number * 300));
}

function show_all_available_cards(type, value){

	$('.card_viewer_window').html('');
	var cards_showed = 0;
	$.each(available_cards, function(card_id, card){
		var show_this = false;
		if(card['cost'][value] != undefined && card['cost'][value] > 0)
		{
			show_this = true;
		}
		if(value == 'colorless')
		{
			$.each(card['cost'], function(color, amount){
				if(amount > 0 && color != 'colorless')
				{
					show_this = false;
				}
				
			});
		}
		
		if(show_this == true)
		{
			var parsed_card = parse_card(card_id, 'full',undefined,undefined,undefined);
			parsed_card = '<div class="buy_single_container" onclick="show_buy_single_details(\'' + card_id + '\')">' + parsed_card + '</div>';
			
			$('.card_viewer_window').append(parsed_card);
			cards_showed++;
		}
	});
	console.log(cards_showed + ' ' + value + ' cards shown');
}

function show_card_detailed(card_id){
	var parsed_card = parse_card(card_id, 'full', undefined);	

	$('.detail_overlay').html('<div class="overlay_card_container">' + parsed_card + ' </div>');
	$('.detail_overlay').fadeIn();
}

function show_buy_single_details(card_id){
	$('.detail_overlay').fadeIn();
	var parsed_card = parse_card(card_id, 'full', undefined);
	var card_cost = Math.floor(Math.sqrt(single_card_price / get_rarity_factor(available_cards[card_id]['rarity'])));

	var buy_card_button = '';
	if(gamedata['coins'] >= card_cost && available_cards[card_id]['nonpickable'] == undefined)
	{
		buy_card_button = '<button class="buy_card_button" onclick="buy_single_card(\'' + card_id + '\')">Buy card <br/><span>Costs ' + card_cost + ' coins. You have ' + gamedata['coins'] + ' coins.</span></button>';
	}
	if(gamedata['coins'] < card_cost && available_cards[card_id]['nonpickable'] == undefined)
	{
		buy_card_button = '<button class="buy_card_button disabled">Buy card <br/><span>Costs ' + card_cost + ' coins. You have ' + gamedata['coins'] + ' coins.</span></button>';
	}

	$('.detail_overlay').html('<div class="overlay_card_container">' + parsed_card + buy_card_button + ' </div>');
};

function buy_single_card(card_id){
	var card_cost = Math.floor(Math.sqrt(single_card_price / get_rarity_factor(available_cards[card_id]['rarity'])));
	if(gamedata['coins'] >= card_cost)
	{
		gamedata['coins'] -= card_cost;
		gain_card(card_id, 0);
		//parse_all_cards();
		setTimeout(function(){
			$('.detail_overlay').stop();
			$('.detail_overlay').show();
			$('.detail_overlay').html('<div class="coins_gained">Gained ' + available_cards[card_id]['name'] + '!</div>');
			$('.detail_overlay .coins_gained').fadeIn();
		});
	}
}