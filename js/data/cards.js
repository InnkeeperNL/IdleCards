var all_available_cards = {

	alchemist:{
		name: 				'alchemist',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T071556.368.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{poison: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['poison_ability','subtype_clerk'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{poison_hv: 3},
		},
		quote: '\"I can brew something for that.\"',
	},
	all_round_fighter:{
		name: 				'all-round fighter',
		type: 				'creature',
		subtypes: 			['human','warrior','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053038.513.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, shoot: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, shoot_unit: 1, evade: 1},
		},
		quote: '\"She can handle any situation.\"',
	},
	altar_of_sacrifice:{
		name: 				'altar of sacrifice',
		type: 				'structure',
		subtypes: 			['altar','wall'],
		color: 				['colorless'],
		theme: 				['own_death_proc_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T170102.521.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{cursed_deaths: 1},
		hero_version: 			{
			theme: 				['summon_creature_ability','resurrect_ability','own_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cursed_deaths_hv: 3},
		},
		quote: '\"If you will just follow me...\"',
	},
	arcane_apprentice:{
		name: 				'arcane apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['arcane_bolts_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard87.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{arcane_bolt: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability','arcane_bolts_ability','çurse_ability','magical_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Adapt of magic.\"',
	},
	arcane_axe:{
		name: 				'arcane axe',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T085036.916.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt_hv: 1, empower_ally: 1},
		quote: '\"Fight with magic.\"',
	},
	arcane_buckler:{
		name: 				'arcane buckler',
		type: 				'artifact',
		subtypes: 			['gear','weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T170428.333.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt_hv: 1, fortify_hero: 1},
		quote: '\"The favored shield of many mages.\"',
	},
	arcane_elf_mage:{
		name: 				'arcane elf mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T081641.092.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{arcane_bolt: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','arcane_bolts_ability','çurse_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, resist_magic: 1},
		},
		quote: '\"To use magic, we must become magic.\"',
	},
	arcane_golem:{
		name: 				'arcane golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T061659.153.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Lucius got inspiration from the arcane.\"',
	},
	arcane_mage:{
		name: 				'arcane mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['arcane_bolts'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard85.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability','arcane_bolts_ability','çurse_ability','magical_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Master of magic.\"',
	},
	arcane_missiles:{
		name: 				'arcane missiles',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				['çurse_ability','arcane_bolts_ability'],
		craft_theme: 		['arcane_bolts','arcane_bolts'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard86.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt: 3},
		quote: '\"Taught in the first year of the magic academy.\"',
	},
	arcane_staff:{
		name: 				'arcane staff',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T085347.272.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt_hv: 1},
		quote: '\"Spread some magic.\"',
	},
	arcane_storm:{
		name: 				'arcane storm',
		type: 				'spell',
		subtypes: 			['arcane','weather'],
		color: 				['colorless'],
		theme: 				['çurse_ability','arcane_bolts_ability','aoe'],
		craft_theme: 		['arcane_bolts','arcane_bolts','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T060948.045.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt: 10, minimum_enemies: 3},
		quote: '\"Now that is a lot of magic.\"',
	},
	armor_smith:{
		name: 				'armor smith',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability','fortify_ability','plated','plated','fortify_ability','plated'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T082101.847.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify: 2},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify: 2},
		},
		quote: '\"This will keep you safe.\"',
	},
	archer:{
		name: 				'archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard60.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"Stay at a distance.\"',
	},
	archer_scout:{
		name: 				'archer scout',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053027.873.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, stealth: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, hide: 1},
		},
		quote: '\"Shoot before they see you!\"',
	},
	
	archmage:{
		name: 				'archmage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['storm','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T145457.381.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			10,
		abilities: 			{arcane_bolt: 3, ignites: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability','burn_ability','çurse_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, ignites: 1},
		},
		quote: '\"Overlord of magic.\"',
	},
	arrow_dancer:{
		name: 				'arrow dancer',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052844.016.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{run_away: 1, shoot: 1, evade: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"She leaves, arrows return.\"',
	},
	arsonist:{
		name: 				'arsonist',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T063843.841.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3},
		},
		quote: '\"Light the fire.\"',
	},
	assistant:{
		name: 				'assistant',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T070853.448.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, hasten: 1, hide_hero: 1},
		hero_version: 			{
			theme: 				['evade_ability','hasten_ability','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1, hide: 1},
		},
		quote: '\"We will speed up the work, boss!\"',
	},
	backlash:{
		name: 				'backlash',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T055210.060.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{backlash: 2, echo: 1},
		quote: '\"Now get going!\"',
	},
	backstabber:{
		name: 				'backstabber',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T080312.778.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, backstab: 2},
		hero_version: 			{
			theme: 				['subtype_human','subtype_rogue','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1},
		},
		quote: '\"It\'s a matter of being in the right place at the right time.\"',
	},
	
	bad_omen:{
		name: 				'bad omen',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T065327.239.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{doom_all: 1, echo: 1},
		quote: '\"Just ignore it. What\'s the worst that can happen?\"',
	},
	badger:{
		name: 				'badger',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T160526.075.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"A dangerous beast.\"',
	},
	
	battle_plans:{
		name: 				'battle plans',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T205115.204.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_ally: 3, draw_on_act: 1},
		quote: '\"Here\'s the plan.\"',
	},
	battle_shout:{
		name: 				'battle shout',
		type: 				'spell',
		subtypes: 			['tactic','mental'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T070011.083.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_all: 3, minimum_ally_creatures: 3},
		quote: '\"Attack!\"',
	},
	bear:{
		name: 				'bear',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard38.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Roar!\"',
	},
	berserker:{
		name: 				'berserker',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T065224.863.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['empower_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"RAAAAAH!\"',
	},
	black_cat:{
		name: 				'black cat',
		type: 				'creature',
		subtypes: 			['animal','cat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T084203.079.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, dooming_touch: 4},
		hero_version: 			{
			theme: 				['curse_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, dooming_touch: 3},
		},
		quote: '\"They say it is a bad omen to have a black cat cross your path.\"',
	},
	blacksmith:{
		name: 				'blacksmith',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability','fortify_ability','plated','plated','fortify_ability','plated'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-22T161723.163.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify: 2},
		},
		quote: '\"I crafted womething that may be useful.\"',
	},
	blade_dancer:{
		name: 				'blade dancer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T072323.874.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, run_away: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior','movement_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Beautiful and deadly.\"',
	},
	bladed_shield:{
		name: 				'bladed shield',
		type: 				'artifact',
		subtypes: 			['gear','weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160443.308.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, fortify_hero: 1},
		quote: '\"A good offence is... having something to hit them with!\"',
	},
	blaze_archer:{
		name: 				'blaze archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053047.343.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, ignites: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, ignites: 1},
		},
		quote: '\"Light the arrows!\"',
	},
	blaze_mage:{
		name: 				'blaze mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T074543.472.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{burn_all: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_all: 1},
		},
		quote: '\"Glorious fire!\"',
	},
	blaze_rager:{
		name: 				'blaze rager',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T142046.801.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, burning_entry: 3},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, burn_hv: 1},
		},
		quote: '\"First, I will bring the fire. Then, I bring death.\"',
	},
	blaze_rogue:{
		name: 				'blaze rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-10T061448.557.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, burn: 1, evade: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, burn_hv: 1, evade: 1},
		},
		quote: '\"Just start the fire, the rest will follow.\"',
	},
	blaze_runner:{
		name: 				'blaze runner',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn','burn'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-10T061840.818.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2, run_away: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3, evade: 1},
		},
		quote: '\"I will leave them in ashes.\"',
	},
	
	blessed_assassin:{
		name: 				'blessed assassin',
		type: 				'creature',
		subtypes: 			['human','cleric','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T154510.514.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, stealth: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_rogue','bless_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide: 1, bless: 2},
		},
		quote: '\"My life for what is right!\"',
	},
	blessed_guard:{
		name: 				'blessed guard',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T151705.583.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, guard: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_warrior','bless_ability','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"We will guard the holy ground.\"',
	},
	blessed_orb:{
		name: 				'blessed orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T140122.576.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bless: 1},
		quote: '\"We will live on!\"',
	},
	blessed_rager:{
		name: 				'blessed rager',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T143512.758.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, blessed: 5},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, bless: 1},
		},
		quote: '\"When you hurt me, you hurt the divine!\"',
	},
	blessed_rogue:{
		name: 				'blessed rogue',
		type: 				'creature',
		subtypes: 			['human','cleric','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T153920.988.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, evade: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_rogue','bless_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, bless: 2},
		},
		quote: '\"Just a little divinity left.\"',
	},
	blessed_shield:{
		name: 				'blessed shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-14T061626.680.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, bless: 1},
		quote: '\"Divine protection.\"',
	},
	blessed_warrior:{
		name: 				'blessed warrior',
		type: 				'creature',
		subtypes: 			['human','cleric','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T153729.676.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_warrior','bless_ability','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"We will fight for the divine.\"',
	},
	blood_charm:{
		name: 				'blood charm',
		type: 				'artifact',
		subtypes: 			['charm'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160844.828.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{withering_hero: 1},
		quote: '\"They are not the same after the attack, sir.\"',
	},
	blood_leech:{
		name: 				'blood leech',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T055843.226.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{run_away: 1, strike: 1, leech_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, feast: 1},
		},
		quote: '\"It sucks the life out.\"',
	},
	blood_rage:{
		name: 				'blood rage',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T191642.660.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{blood_rage: 3},
		quote: '\"I will end you!\"',
	},
	
	blood_rat:{
		name: 				'blood rat',
		type: 				'creature',
		subtypes: 			['animal','rodent'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T063916.729.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, withering_touch: 1},
		hero_version: 			{
			theme: 				['subtype_animal','wither_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, withering_touch: 1},
		},
		quote: '\"They have a painful bite.\"',
	},
	bloody_blade:{
		name: 				'bloody blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T072209.013.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{destroy_arrival: 1},
		quote: '\"Aim for the heart.\"',
		selfdestructs: 		true,
	},
	bloody_tick:{
		name: 				'bloody tick',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T085035.919.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, withering_touch: 1, final_hasten: 3},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_horror'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, withering_touch: 1, hasten: 1},
		},
		quote: '\"Bloody bloodsuckers...\"',
	},
	boar:{
		name: 				'boar',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard37.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"Oink!\"',
	},
	bolter_golem:{
		name: 				'bolter golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T061025.723.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 1, strike:1, fire_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 1, strike_unit: 1, fire_bolt_hv: 1},
		},
		quote: '\"Lucius loved creating multifunctional automatons.\"',
	},
	bone_crawler:{
		name: 				'bone crawler',
		type: 				'creature',
		subtypes: 			['undead','skeleton','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T080651.829.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1, fear: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability','subtype_horror'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, fearful_aura: 1},
		},
		quote: '\"Didn\'t that used to be Mike?\"',
	},
	box_of_rage:{
		name: 				'box of rage',
		type: 				'artifact',
		subtypes: 			['charm'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T085704.504.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{blood_rage: 1},
		quote: '\"Hold it in!\"',
	},
	bramble_bush:{
		name: 				'bramble bush',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T084427.034.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{thorns: 1},
		hero_version: 			{
			theme: 				['subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{thorns: 2},
		},
		quote: '\"A tasty treat... if you have gloves.\"',
	},
	brazier:{
		name: 				'brazier',
		type: 				'artifact',
		subtypes: 			['furnace'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		craft_theme: 		['burn_ability','fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard65.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_hv: 1},
		quote: '\"Keeps you warm on a cold night.\"',
	},
	breaker:{
		name: 				'breaker',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard78.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{break: 1},
		quote: '\"A handy tool when needed.\"',
	},
	breaking_ray:{
		name: 				'breaking ray',
		type: 				'spell',
		subtypes: 			['light'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T155806.218.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{break: 1},
		quote: '\"Don\'t point it at a mirror.\"',
	},
	bright_elf:{
		name: 				'bright elf',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T144130.356.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, purify: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1, resist_magic: 1},
		},
		quote: '\"She brightens the forest.\"',
	},
	buck:{
		name: 				'buck',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T080948.672.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1, run_away: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_deer'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, enrage: 1},
		},
		quote: '\"It will be back!\"',
	},
	bulky_fungus:{
		name: 				'bulky fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T064346.711.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"It smells like it looks.\"',
	},
	bull:{
		name: 				'bull',
		type: 				'creature',
		subtypes: 			['animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T161306.037.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','charge_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Put away the flag!\"',
	},
	bureaucrat:{
		name: 				'bureaucrat',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T063100.302.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, slow_enemy_draws: 1},
		hero_version: 			{
			theme: 				['deck_control_ability','hasten_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, slow_enemy_draws: 1},
		},
		quote: '\"You have to sign the form first!\"',
	},
	
	burglar:{
		name: 				'burglar',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T143436.771.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, run_away: 1, steal: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue','steal_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"In and out before they catch you!\"',
	},
	burning_soul:{
		name: 				'burning soul',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-17T054549.634.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, ignites: 1, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2, undead: 1},
		},
		quote: '\"She burns the living.\"',
	},
	carnivorous_plant:{
		name: 				'carnivorous plant',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T185415.350.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{trap: 1, thorns: 1, feast: 4},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{trap: 1, thorns: 1, feast: 1},
		},
		quote: '\"It swallowed Jimmy whole!\"',
	},
	carpenter:{
		name: 				'carpenter',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['type_structure'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T170836.397.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, repair: 1},
		hero_version: 			{
			theme: 				['type_structure','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 1},
		},
		quote: '\"I can fix that.\"',
	},
	chaos_dagger:{
		name: 				'chaos dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T143947.035.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{chaos_strikes: 1},
		quote: '\"You can strike at the mind with that.\"',
		selfdestructs: 		true,
	},
	cinder_witch:{
		name: 				'cinder witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T163749.880.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{burn: 1, curse: 1, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 1, curse_hv: 1, strike_unit: 1},
		},
		quote: '\"She uses a dark fire!\"',
	},
	circle_of_protection:{
		name: 				'circle of protection',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T072308.834.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_all: 3, minimum_allies: 3},
		quote: '\"Be safe.\"',
	},
	cog_vandal:{
		name: 				'cog vandal',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T112611.818.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, stun_construct: 1},
		hero_version: 			{
			theme: 				[],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stun_construct: 1},
		},
		quote: '\"You just take out a single part.\"',
	},
	
	cold_front:{
		name: 				'cold front',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['cold_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T053803.160.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ice_blast: 5, minimum_enemies: 3},
		quote: '\"Look! It\'s all white outside!\"',
	},
	commander:{
		name: 				'commander',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T081909.339.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"She demands respect.\"',
	},
	conscript:{
		name: 				'conscript',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T135323.702.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, homebound: 1},
		hero_version: 			{
			theme: 				['evade_ability','move_ally_to_hand_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I\'m not dying for them.\"',
	},
	conscription:{
		name: 				'conscription',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['deck_control_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-24T070421.937.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_conscript: 5, maximum_allies: 0},
		quote: '\"Send in the reserves!\"',
	},
	cow:{
		name: 				'cow',
		type: 				'creature',
		subtypes: 			['animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T161934.031.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtpe_cow'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They sure like grass!\"',
	},
	crow:{
		name: 				'crow',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T083800.865.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, dooming_touch: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, dooming_touch: 1, flying: 1},
		},
		quote: '\"They say it is a bad omen to see a crow.\"',
	},
	cry_for_help:{
		name: 				'cry for help',
		type: 				'spell',
		subtypes: 			['tactic','mental'],
		color: 				['colorless'],
		theme: 				['deck_control_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T080034.058.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten_all: 2, maximum_allies: 0},
		quote: '\"Send help!\"',
	},
	cull_the_weak:{
		name: 				'cull the weak',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T145101.212.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reap_all: 2, minimum_enemy_creatures: 3},
		quote: '\"Put them out of their misery!\"',
	},
	cursed_ground:{
		name: 				'cursed ground',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T083715.976.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{cursed_aura: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_witch','arcane_bolts_ability','arcane_bolts_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cursed_aura: 3},
		},
		quote: '\"Do not enter there!\"',
	},
	cursed_orb:{
		name: 				'cursed orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['curse','curse','curse','curse'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160625.631.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_hero: 1},
		quote: '\"Do not go near it!\"',
	},
	cursed_shield:{
		name: 				'cursed shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T163523.294.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_hero: 1, fortify_hero: 1},
		quote: '\"Let them touch you.\"',
	},
	cursed_skeleton:{
		name: 				'cursed skeleton',
		type: 				'creature',
		subtypes: 			['undead','skeleton'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T081241.796.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1, final_curse: 2},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, cursed_aura: 1},
		},
		quote: '\"Didn\'t that used to be Cordelia?\"',
	},
	cursed_skull:{
		name: 				'cursed skull',
		type: 				'artifact',
		subtypes: 			['charm'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['curse','curse','curse','curse'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard36.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_hv: 1},
		quote: '\"Robbed from a grave.\"',
	},
	cursed_zombie:{
		name: 				'cursed zombie',
		type: 				'creature',
		subtypes: 			['undead','zombie'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard99.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 2, cursed_aura: 2, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_zombie'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, cursed_aura: 1, undead: 1},
		},
		quote: '\"Dont touch it, it will eat your brains.\"',
	},
	dark_sacrifice:{
		name: 				'dark sacrifice',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T190453.797.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice: 1, discard_enemy: 2, minimum_allies: 1},
		quote: '\"They will feel our pain.\"',
	},
	dawn_cleric:{
		name: 				'dawn cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				['move_ally_to_hand_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T164601.025.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, purifying_entry: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"She brings the new light.\"',
	},
	death_warrant:{
		name: 				'death warrant',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T094502.407.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{destroy: 1},
		quote: '\"Did you sign it yourself?\"',
	},
	devout_cleric:{
		name: 				'devout cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T054135.116.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bless: 1},
		hero_version: 			{
			theme: 				['bless_ability','subtype_cleric','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 1},
		},
		quote: '\"I will guide the lost sheep.\"',
	},
	divine_blessing:{
		name: 				'divine blessing',
		type: 				'spell',
		subtypes: 			['holy'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T145659.449.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bless: 5, echo: 1},
		quote: '\"Have you seen the light?\"',
	},
	doe:{
		name: 				'doe',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T080631.532.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, run_away: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_deer'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"A female deer.\"',
	},
	donkey:{
		name: 				'donkey',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T081938.132.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"A stubborn beast.\"',
	},
	drain_blood:{
		name: 				'drain blood',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T052256.822.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{wither_hero: 2, bolster_hero: 2},
		quote: '\"I can feel your blood flowing through me.\"',
	},
	drain_life:{
		name: 				'drain life',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T043128.770.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_creature: 1, bolster_hero: 5, minimum_ally_creatures: 1},
		quote: '\"I can feel the life flowing through me.\"',
	},
	dread_shield:{
		name: 				'dread shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160630.471.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, fearful_hero: 1},
		quote: '\"Looks scary...\"',
	},
	dreadnought:{
		name: 				'dreadnought',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T165511.569.jpg',
		power: 				5,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Often considered too bulky for standard use.\"',
	},
	druid:{
		name: 				'druid',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T073210.030.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, heal: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1},
		},
		quote: '\"Let the forest heal you.\"',
	},
	duelist:{
		name: 				'duelist',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T072051.587.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter: 1},
		},
		quote: '\"Just you and me!\"',
	},
	elder_druid:{
		name: 				'elder druid',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T073838.037.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, heal: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1},
		},
		quote: '\"I have wandered the forest all my life.\"',
	},
	elder_elf_druid:{
		name: 				'elder elf druid',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T073636.398.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, heal: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['healing_ability','subtype_elf','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1, resist_magic: 1},
		},
		quote: '\"The forest has tought me well.\"',
	},
	elf:{
		name: 				'elf',
		type: 				'creature',
		subtypes: 			['elf'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard62.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"The forest told me to join the fight.\"',
	},
	elf_arsonist:{
		name: 				'elf arsonist',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T081026.690.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{burn: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3, resist_magic: 1},
		},
		quote: '\"Sometimes, you need to cleanse the forest with fire.\"',
	},
	elf_backstabber:{
		name: 				'elf backstabber',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T082322.520.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{run_away: 1, strike: 1, backstab: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1, resist_magic: 1},
		},
		quote: '\"It migth not be fair, but it works.\"',
	},
	elf_commander:{
		name: 				'elf commander',
		type: 				'creature',
		subtypes: 			['elf','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T083016.104.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1, resist_magic: 1},
		},
		quote: '\"Flank them!\"',
	},
	elf_druid:{
		name: 				'elf druid',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T072908.281.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, heal: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['healing_ability','subtype_elf','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1, resist_magic: 1},
		},
		quote: '\"Let the forest heal and protect you.\"',
	},
	elf_fire_mage:{
		name: 				'elf fire mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T192558.530.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 3, resist_magic: 1},
		},
		quote: '\"We must contain the fire.\"',
	},
	elf_huntress:{
		name: 				'elvish huntress',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T051546.767.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, run_away: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1, resist_magic: 1},
		},
		quote: '\"She hunts from the trees.\"',
	},
	elf_light_bringer:{
		name: 				'elf light bringer',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T142142.311.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, purifying_entry: 3, resist_magic: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_tactic','çurse_ability','any_spell_card_played_proc_ability','subtype_elf','subtype_wall'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1, bless: 1, resist_magic: 1},
		},
		quote: '\"She can see the light in everyone.\"',
	},
	elf_mana_mage:{
		name: 				'elf mana mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T085210.151.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{spell_bolt: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['echo_ability','subtype_elf','subtype_wall'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spell_bolt_hv: 3, resist_magic: 1},
		},
		quote: '\"The mana flows through her.\"',
	},
	elf_skirmisher:{
		name: 				'elf skirmisher',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T080052.421.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, homebound: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, resist_magic: 1},
		},
		quote: '\"They will never see me coming!\"',
	},
	elf_sniper:{
		name: 				'elvish sniper',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052012.131.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{snipe: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, resist_magic: 1},
		},
		quote: '\"Hit them where it hurts.\"',
	},
	elf_thief:{
		name: 				'elf thief',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T074238.729.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"She can evade your magical protection.\"',
	},
	elf_tracker:{
		name: 				'elf tracker',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053057.062.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{reveal: 1, shoot: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{reveal: 1, shoot_unit: 1, resist_magic: 1},
		},
		quote: '\"There you are!\"',
	},
	elf_warrior:{
		name: 				'elf warrior',
		type: 				'creature',
		subtypes: 			['elf','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard63.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, resist_magic: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1, plated: 1},
		},
		quote: '\"The forest told me to join the fight.\"',
	},
	elf_warder:{
		name: 				'elf warder',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T083415.528.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, counter_spell: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_witch'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter_spell: 1, resist_magic: 1},
		},
		quote: '\"They do not truly understand magic.\"',
	},
	elf_witch:{
		name: 				'elf witch',
		type: 				'creature',
		subtypes: 			['elf','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T192347.073.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{curse: 1, strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_witch'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, resist_magic: 1},
		},
		quote: '\"They too, have a dark side.\"',
	},
	elf_youngster:{
		name: 				'elf youngster',
		type: 				'creature',
		subtypes: 			['elf'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard61.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"Did I come to the right place?\"',
	},
	elvish_archer:{
		name: 				'elvish archer',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard59.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, resist_magic: 1},
		},
		quote: '\"Stay in the forest.\"',
	},
	enforcer_golem:{
		name: 				'enforcer golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T065553.420.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, backlash: 1},
		hero_version: 			{
			theme: 				['type_creature','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, backlash: 1},
		},
		quote: '\"Not one of Lucius\' best creations.\"',
	},
	fan_golem:{
		name: 				'fan golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T063213.235.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, air_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem','flying_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, air_bolt_hv: 1},
		},
		quote: '\"Very nice on a hot day.\"',
	},
	fawn:{
		name: 				'fawn',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T074452.178.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, run_away: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_deer'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"So cute!\"',
	},
	fastfood:{
		name: 				'fastfood',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T082839.638.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolster_creature: 1, draw_on_act: 1},
		quote: '\"Just a quick bite!\"',
	},
	fear:{
		name: 				'fear',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['deck_control_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard53.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fear: 1, echo: 1},
		quote: '\"It\'s scary out there!\"',
	},
	fearful_mask:{
		name: 				'fearful mask',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T073651.887.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fearful_hero: 1},
		quote: '\"Boo!\"',
	},
	fencer:{
		name: 				'fencer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T065349.510.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter: 1, plated: 1, evade: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter: 1, plated: 1, evade: 1},
			verified: true,
		},
		quote: '\"Watch your posture!\"',
	},
	final_embrace:{
		name: 				'final embrace',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T082440.868.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_creature: 1, destroy_creature: 1, minimum_ally_creatures: 1, minimum_enemy_creatures: 1},
		quote: '\"We will be together forever!\"',
		verified: true,
	},
	fire_apprentice:{
		name: 				'fire apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard89.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 3},
		},
		quote: '\"Adept of fire.\"',
	},
	fire_blaster:{
		name: 				'fire blaster',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T075526.636.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{fire_blast: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_blast: 1},
		},
		quote: '\"Feel the heat!\"',
	},
	fire_bolt:{
		name: 				'fire bolt',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T162240.267.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_bolt: 2, ignites: 2},
		quote: '\"When you need somethng done...\"',
	},
	fire_imp:{
		name: 				'fire imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard45.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 1, run_away: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_daemon','fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 2, evade: 1},
		},
		quote: '\"Me throw fire!\"',
	},
	fire_mage:{
		name: 				'fire mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard83.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{fire_bolt: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 3},
		},
		quote: '\"Master of fire.\"',
	},
	
	fire_staff:{
		name: 				'fire staff',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fire_ability','fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard56.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_bolt_hv: 1},
		quote: '\"Stolen from an imp.\"',
	},
	fire_zealot:{
		name: 				'fire zealot',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T143820.563.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 2, burning_entry: 2},
		hero_version: 			{
			theme: 				['burn_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2},
		},
		quote: '\"Give me something to burn!\"',
	},
	flag_carrier:{
		name: 				'flag carrier',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_flag'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T160906.293.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_arrivals: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior','move_ally_to_hand_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_arrivals: 1},
		},
		quote: '\"Follow me!\"',
	},
	
	flame_burst:{
		name: 				'flame burst',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['burn_ability','aoe'],
		craft_theme: 		['burn','burn','burn','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T071959.471.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_all: 2, draw_on_act: 1},
		quote: '\"Quick and hot.\"',
	},
	flame_juggler:{
		name: 				'flame juggler',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn','burn'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T154619.544.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{shoot: 2, ignites: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 2, ignites: 1},
		},
		quote: '\"Catch!\"',
	},
	flame_orb:{
		name: 				'flame orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T161055.645.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burning_hero: 1},
		quote: '\"Somehow, cool to the touch.\"',
	},
	flame_rogue:{
		name: 				'flame rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T064700.191.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, ignites: 3, evade: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2, evade: 1},
		},
		quote: '\"My blade burn for blood.\"',
	},
	flame_storm:{
		name: 				'flame storm',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['burn_ability','aoe'],
		craft_theme: 		['burn','burn','burn','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T051233.076.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_all: 5, minimum_enemies: 3},
		quote: '\"...and fire came down from the sky...\"',
	},
	flame_warrior:{
		name: 				'flame warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T165750.899.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, ignites: 2, plated: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, plated: 1},
		},
		quote: '\"Fight with fire.\"',
	},
	floating_fungus:{
		name: 				'floating fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T062957.348.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, spawn_sporeling: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, flying: 1},
		},
		quote: '\"Well... It ain\'t a bird.\"',
	},
	flood:{
		name: 				'flood',
		type: 				'spell',
		subtypes: 			['weather','tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['water','water','water','water','water'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T161309.082.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{water_blast: 2, minimum_enemies: 3},
		quote: '\"You had better get to high ground.\"',
	},
	flying_horror:{
		name: 				'flying horror',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T101506.203.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{fear: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_animal','flying_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, fearful_aura: 1},
		},
		quote: '\"Do you hear that buzzing sound?\"',
	},
	fog:{
		name: 				'fog',
		type: 				'spell',
		subtypes: 			['weather','tactic'],
		color: 				['colorless'],
		theme: 				['stealth_ability','evade_ability'],
		craft_theme: 		['grant_stealth','evade','subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T142202.575.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_ally: 5, minimum_allies: 3},
		quote: '\"We can\'t find them, sir.\"',
	},
	frog:{
		name: 				'frog',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T052924.464.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1},
		quote: '\"Ribbit.\"',
	},
	frog_pond:{
		name: 				'frog pond',
		type: 				'structure',
		subtypes: 			['water'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['sacrifice_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T060228.402.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{summon_frog: 1},
		hero_version: 			{
			theme: 				['sacrifice_ability','summon_creature_ability','subtype_animal'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_frog: 1},
		},
		quote: '\"That\'s a lot of frogs...\"',
	},
	front_runner:{
		name: 				'front runner',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T144841.842.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{run_away: 1, strike: 1, triumphant_haste: 2},
		hero_version: 			{
			theme: 				['empower_ability','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1},
		},
		quote: '\"I will find a path. You can follow me!\"',
	},
	frost_apprentice:{
		name: 				'frost apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['cold_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard90.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{frost_bolt: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['cold_ability','stun_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt_hv: 2},
		},
		quote: '\"Adept of ice.\"',
	},
	frost_mage:{
		name: 				'frost mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['cold_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard84.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{frost_bolt: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['cold_ability','stun_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt_hv: 2},
		},
		quote: '\"Master of ice.\"',
	},
	frost_witch:{
		name: 				'frost witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T162238.824.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{curse: 2, frost_bolt: 2},
		hero_version: 			{
			theme: 				['curse_ability','cold_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all: 1, frost_bolt_hv: 1},
		},
		quote: '\"I can feel a shiver going through my spine...\"',
	},
	fungal_charger:{
		name: 				'fungal charger',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T072707.538.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, spawn_sporeling: 1},
		},
		quote: '\"Can you smell it before it charges?\"',
	},
	fungal_chomper:{
		name: 				'fungal chomper',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T071829.816.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, eat_sporeling: 3, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, eat_sporeling: 1, spawn_sporeling: 1},
		},
		quote: '\"They eat their own!\"',
	},
	fungal_gnasher:{
		name: 				'fungal gnasher',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T090438.407.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, feast: 3, eat_sporeling: 3, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, eat_sporeling: 1, spawn_sporeling: 1},
		},
		quote: '\"That thing eats anything!\"',
	},
	fungal_lord:{
		name: 				'fungal lord',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T065002.587.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, spawn_sporeling: 1, augment_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, augment_sporeling: 1},
		},
		quote: '\"Come, young one! Grow!\"',
	},
	
	fungal_rat:{
		name: 				'fungal rat',
		type: 				'creature',
		subtypes: 			['fungus','animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T072856.353.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, run_away: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, spawn_sporeling: 1},
		},
		quote: '\"I thought normal rats were smelly enough.\"',
	},
	fungal_slasher:{
		name: 				'fungal slasher',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T071134.499.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 2, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, spawn_sporeling: 1},
		},
		quote: '\"Clawed mould.\"',
	},
	fungal_warrior:{
		name: 				'fungal warrior',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T064635.028.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"You leave some bread out too long, and then it attacks you!\"',
	},
	furnace:{
		name: 				'furnace',
		type: 				'structure',
		subtypes: 			['furnace'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability','fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard64.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3},
		},
		quote: '\"Hot! Hot!\"',
	},
	generator:{
		name: 				'generator',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T082958.968.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{hasten: 1, explode: 4},
		hero_version: 			{
			theme: 				['deck_control_ability','draw_cards_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{hasten: 1, fire_aura: 1},
		},
		quote: '\"Isn\'t that thing a bit unstable?\"',
	},
	giant:{
		name: 				'giant',
		type: 				'creature',
		subtypes: 			['giant','warrior'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T204731.516.jpg',
		image_position: 	'top',
		power: 				5,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				[],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Puny creatures.\"',
	},
	giant_slug:{
		name: 				'giant slug',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T075405.956.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, plated: 1, step_aside: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"It crawled away, slowly...\"',
	},
	ghost:{
		name: 				'ghost',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T105240.183.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{undead: 1},
		quote: '\"Harmless but creepy.\"',
	},
	ghost_caller:{
		name: 				'ghost caller',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','ghost'],
		craft_theme: 		['ghost','ghost','ghost','ghost','undead'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T110831.364.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, summon_ghost: 1},
		hero_version: 			{
			theme: 				['subtype_undead','sacrifice_ability','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, summon_ghost: 1},
		},
		quote: '\"Come, spirits! Join me!\"',
	},
	
	ghost_pit:{
		name: 				'ghost pit',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','ghost'],
		craft_theme: 		['undead','undead','sacrifice','sacrifice','sacrifice','sacrifice','ghost'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T105800.017.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{summon_ghost: 3},
		hero_version: 			{
			theme: 				['subtype_undead','sacrifice_ability','ally_creature_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_ghost: 2},
		},
		quote: '\"You can hear them wail...\"',
	},
	
	golem_lobber:{
		name: 				'golem lobber',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T063445.187.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"Look out for that boulder!\"',
	},
	golemite:{
		name: 				'golemite',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard75.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Made to serve.\"',
	},
	gravedigger:{
		name: 				'gravedigger',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_undead','undead_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T072647.554.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, raging_deaths: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, raging_deaths: 1},
		},
		quote: '\"Gravedigging is great exercise.\"',
	},
	gravestone:{
		name: 				'gravestone',
		type: 				'artifact',
		subtypes: 			['grave'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['resurrect_ability','undead_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T085734.431.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{revive_hero: 1},
		quote: '\"The date marked is not today.\"',
	},
	greater_worm:{
		name: 				'greater worm',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T065608.294.jpg',
		power: 				4,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I did not know they got that big!\"',
	},
	grow_thorns:{
		name: 				'grow thorns',
		type: 				'spell',
		subtypes: 			['summon','plant'],
		color: 				['colorless'],
		theme: 				['subtype_plant','aoe'],
		craft_theme: 		['thorns_ability','thorns_ability','subtype_plant'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T061035.728.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_spike_pod: 5, maximum_allies: 0},
		quote: '\"They will have to reach us first!\"',
	},
	guardian_golem:{
		name: 				'guardian golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T062026.811.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, guard: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Lucius\' home was guarded by dozens of these.\"',
	},
	guerrilla_ambusher:{
		name: 				'guerrilla ambusher',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T075702.975.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, hide: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide: 1, evade: 1},
		},
		quote: '\"I will be gone before they see me!\"',
	},
	guerrilla_archer:{
		name: 				'guerrilla archer',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T051408.807.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{shoot: 1, retreat: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"Get back to a good vantage point!\"',
	},
	guerrilla_conscript:{
		name: 				'guerrilla conscript',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T080100.865.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"If they see me, I\'m out of here!\"',
	},
	
	guerrilla_fighter:{
		name: 				'guerrilla fighter',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T072424.563.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Hit and run!\"',
	},
	guerrilla_warrior:{
		name: 				'guerrilla warrior',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T074530.397.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Hit them where it hurts!\"',
	},
	
	haunted_house:{
		name: 				'haunted house',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard97.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{cursed_deaths: 1, summon_ghost: 1},
		hero_version: 			{
			theme: 				['curse_ability','ally_creature_death_proc_ability','arcane_bolts_ability','arcane_bolts_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cursed_deaths_hv: 1, summon_ghost: 1},
		},
		quote: '\"An evil witch used to live here.\"',
	},
	hawk:{
		name: 				'hawk',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard41.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Trained for the hunt.\"',
	},
	hearty_brew:{
		name: 				'hearty brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T135230.059.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{restore: 1, echo: 1},
		quote: '\"Just what I needed!\"',
	},
	hearty_meal:{
		name: 				'hearty meal',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T080446.469.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolster_creature: 4},
		quote: '\"I could eat that all day!\"',
	},
	heatblade:{
		name: 				'heatblade',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T074549.599.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 2},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2},
		},
		quote: '\"Her blade burns hot.\"',
	},
	hedgehog:{
		name: 				'hedgehog',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T081327.925.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, thorns: 1},
		hero_version: 			{
			theme: 				['thorns_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, thorns: 1},
		},
		quote: '\"Cute and prickly.\"',
	},
	heroic_blade:{
		name: 				'heroic blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T073952.521.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1},
		quote: '\"A weapon fit for a hero!\"',
	},
	hex:{
		name: 				'hex',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				['curse_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T053525.837.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hex: 1},
		quote: '\"Ribbit!\"',
	},
	hexing_witch:{
		name: 				'hexing witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T055500.986.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, hex: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hex: 1},
		},
		quote: '\"Who\'s a good little toad? You are!\"',
	},
	high_witch:{
		name: 				'high witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T162555.308.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{curse_all: 1, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all: 1, strike_unit: 1},
		},
		quote: '\"Let the darkness consume you!\"',
	},
	horrid_crawlers:{
		name: 				'horrid crawlers',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T095805.376.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{fear: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fearful_aura: 1},
		},
		quote: '\"You don\'t wanna find those in your boot!\"',
	},
	horrid_mage:{
		name: 				'horrid mage',
		type: 				'creature',
		subtypes: 			['mage','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T083956.804.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fear: 1, arcane_bolt: 2},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, fearful_aura: 1},
		},
		quote: '\"You don\'t wanna find those in your boot!\"',
	},
	
	horrid_scream:{
		name: 				'horrid scream',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				['deck_control_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T070145.948.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fear: 5, minimum_enemy_creatures: 3},
		quote: '\"Let\'s get out of here!\"',
	},
	huge_spider:{
		name: 				'huge spider',
		type: 				'creature',
		subtypes: 			['animal','spider'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard92.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, trap: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_animal','subtype_spider','stun_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"Watch out for webs! And fangs!\"',
	},
	hungry_wolf:{
		name: 				'hungry wolf',
		type: 				'creature',
		subtypes: 			['animal','wolf'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard100.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 2},
		hero_version: 			{
			theme: 				['feast_ability','subtype_animal','curse_ability','curse_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1},
		},
		quote: '\"It will eat your face.\"',
	},
	hunting_horror:{
		name: 				'hunting horror',
		type: 				'creature',
		subtypes: 			['horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T063754.281.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{fear: 1, seek_creature: 1, strike: 1, feast: 4},
		hero_version: 			{
			theme: 				['subtype_horror','discard_enemy_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, fearful_aura: 1},
		},
		quote: '\"It will find you...\"',
	},
	huntress:{
		name: 				'huntress',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T051904.889.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, run_away: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"Get to a distance.\"',
	},
	hurricane:{
		name: 				'hurricane',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		['storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T054607.831.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{air_blast: 8, minimum_enemies: 3},
		quote: '\"Hold on to your hat!\"',
	},
	iceblade:{
		name: 				'iceblade',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard31.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{cold_strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['melee_ability','stun_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{cold_strike_hv: 1, evade: 1},
		},
		quote: '\"My blade is cold as ice.\"',
	},
	ice_wand:{
		name: 				'ice wand',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T090514.471.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{frost_bolt_hv: 1},
		quote: '\"Some like it cold.\"',
	},
	ignite:{
		name: 				'ignite',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T190530.634.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn: 2, echo: 1},
		quote: '\"Some like it hot.\"',
	},
	imp:{
		name: 				'imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard46.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, evade: 1},
		},
		quote: '\"Me like fire!\"',
	},
	imp_burner:{
		name: 				'imp burner',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T145808.086.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, burn: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, burn_hv: 1},
		},
		quote: '\"Me like to watch fire!\"',
	},
	imp_flame_bringer:{
		name: 				'imp flame bringer',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T150637.978.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{flame_strike: 1, burning_entry: 5},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, burn_hv: 1},
		},
		quote: '\"Me bring fire and flame!\"',
	},
	
	imp_front_runner:{
		name: 				'imp front runner',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T061842.389.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, run_away: 1, triumphant_haste: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, evade: 1, hasten: 1},
		},
		quote: '\"C\'mon guys, there is an opening!\"',
	},
	
	imp_horde:{
		name: 				'imp horde',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['subtype_imp','subtype_imp','subtype_daemon','subtype_daemon','aoe'],
		craft_theme: 		['fire_ability','fire_ability','empower_ability','empower_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard50.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_imp: 5, maximum_allies: 0},
		quote: '\"We emptied the pit, sir!\"',
	},
	imp_lord:{
		name: 				'imp lord',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		['subtype_imp','subtype_imp','empower_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T152259.084.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{flame_strike: 1, empower_imps: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, empower_ally: 1},
		},
		quote: '\"Fear my army!\"',
	},
	imp_soldier:{
		name: 				'imp soldier',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T145557.361.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{flame_strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, plated: 1},
		},
		quote: '\"Me wield fire and steel!\"',
	},
	imp_warrior:{
		name: 				'imp warrior',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard47.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{flame_strike: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1},
		},
		quote: '\"Me wield fire!\"',
	},
	incinerator:{
		name: 				'incinerator',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['burn_ability','burn_ability'],
		not_theme: 			['subtype_mage','fire_ability','subtype_human'],
		craft_theme: 		['burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T062355.027.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, conflagrate: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, conflagrate_hv: 1},
		},
		quote: '\"I will turn you into ashes.\"',
	},
	instil_doubt:{
		name: 				'instil doubt',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T121159.363.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{stun_creature: 1, echo: 1},
		quote: '\"Are you sure?\"',
	},
	jumping_fungus:{
		name: 				'jumping fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T071510.219.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, spawn_sporeling: 1, evade: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, evade: 1},
		},
		quote: '\"It jumps away, but the smell stays...\"',
	},
	jungle_troll:{
		name: 				'jungle troll',
		type: 				'creature',
		subtypes: 			['troll'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard81.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['jungle','subtype_troll','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 1},
		},
		quote: '\"I do smash!\"',
	},
	
	kleptomaniac:{
		name: 				'kleptomaniac',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T080137.857.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, steal: 3},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, break: 1},
		},
		quote: '\"When they have so many, I couldn\'t just let it lie there, now could I?\"',
	},
	knight:{
		name: 				'knight',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T062906.532.jpg',
		power: 				4,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Years of training.\"',
	},
	
	lamb:{
		name: 				'lamb',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T083711.683.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, final_bolster_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','bolster_ability','sacrifice_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Lamb chops anyone?\"',
	},
	lava_lizard:{
		name: 				'lava lizard',
		type: 				'creature',
		subtypes: 			['animal','lizard'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T082351.198.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, fire_aura: 1},
		hero_version: 			{
			theme: 				['subtype_lizard','poison_ability','fire_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, fire_aura: 1},
		},
		quote: '\"I said, don\'t pet it!\"',
	},
	lava_newt:{
		name: 				'lava newt',
		type: 				'creature',
		subtypes: 			['animal','lizard'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T081852.528.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, venom: 1, fire_aura: 1},
		hero_version: 			{
			theme: 				['subtype_lizard','poison_ability','fire_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, fire_aura: 1},
		},
		quote: '\"Cute, but don\'t pet it.\"',
	},
	
	lava_tegu:{
		name: 				'lava tegu',
		type: 				'creature',
		subtypes: 			['animal','lizard'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T082502.175.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, venom: 1, fire_aura: 1},
		hero_version: 			{
			theme: 				['subtype_lizard','poison_ability','fire_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, fire_aura: 1},
		},
		quote: '\"I\'m not petting that!\"',
	},
	lava_tree:{
		name: 				'lava tree',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T191315.700.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{fire_aura: 3},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_aura: 2},
		},
		quote: '\"Used for fireproof furniture.\"',
	},
	leeching_parasite:{
		name: 				'leeching parasite',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T060621.852.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, chaos_touch: 1, leech_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, chaos_strikes: 1, feast: 1},
		},
		quote: '\"Don\'t let it touch you.\"',
	},
	leeching_worm:{
		name: 				'leeching worm',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T061902.023.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, leech_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1},
		},
		quote: '\"Found in high grass.\"',
	},
	levitate:{
		name: 				'levitate',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['flying_ability','subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T164704.760.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{levitate: 1, echo: 1},
		quote: '\"I can fly!\"',
	},
	librarian:{
		name: 				'librarian',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard55.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, draw: 1},
		hero_version: 			{
			theme: 				['subtype_human','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1},
		},
		quote: '\"I brought some knowledge.\"',
	},
	library:{
		name: 				'library',
		type: 				'structure',
		subtypes: 			['clerk','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard72.jpg',
		image_position: 	'bottom',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{draw: 3, final_discard: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{draw: 2},
			verified: 			true,
		},
		quote: '\"It\'s amazing, what you can find.\"',
	},
	
	lizardman:{
		name: 				'lizardman',
		type: 				'creature',
		subtypes: 			['lizard'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard69.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1},
		hero_version: 			{
			theme: 				['subtype_lizard','poison_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1},
		},
		quote: '\"Coldblooded and deadly.\"',
	},
	lizardman_warrior:{
		name: 				'lizardman warrior',
		type: 				'creature',
		subtypes: 			['lizard','warrior'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard70.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, venom: 2},
		hero_version: 			{
			theme: 				['subtype_lizard','poison_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1},
		},
		quote: '\"Coldblooded and very deadly.\"',
	},
	lost_soul:{
		name: 				'lost soul',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-17T054543.016.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1},
		},
		quote: '\"We must show her the way to the next life.\"',
	},
	magic_brew:{
		name: 				'magic brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160153.742.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten: 1, echo: 1},
		quote: '\"That will get you up in the morning!\"',
	},
	magpie:{
		name: 				'magpie',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T082818.528.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, steal: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"It loves shinies.\"',
	},
	
	mana_bulb:{
		name: 				'mana bulb',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T145722.938.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{desperate_haste: 5},
		quote: '\"Break in case of need.\"',
		selfdestructs: true,
	},
	mana_drop:{
		name: 				'mana drop',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T162748.405.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{draw: 1, desperate_haste: 2},
		quote: '\"Small, but handy in an emergency.\"',
		selfdestructs: true,
	},
	
	mana_mage:{
		name: 				'mana mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T084628.381.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{spell_bolt: 2},
		hero_version: 			{
			theme: 				['echo_ability','subtype_wall'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spell_bolt_hv: 3},
		},
		quote: '\"She conducts the mana.\"',
	},
	mana_rogue:{
		name: 				'mana rogue',
		type: 				'creature',
		subtypes: 			['human','rogue','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T092443.394.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, spell_bolt: 1, evade: 1},
		hero_version: 			{
			theme: 				['echo_ability','subtype_wall','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spell_bolt_hv: 1, evade: 1},
		},
		quote: '\"I have a little trick. Wanna see it?\"',
	},
	mana_slinger:{
		name: 				'mana slinger',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T093033.982.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{spell_bolt: 1},
		hero_version: 			{
			theme: 				['echo_ability','subtype_wall'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spell_bolt_hv: 3},
		},
		quote: '\"She remains calm, until a spell is cast.\"',
	},
	master_alchemist:{
		name: 				'master alchemist',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T164535.606.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{poison: 2, empower_ally: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['poison_ability','subtype_warrior'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{poison_hv: 2, empower_ally: 1},
		},
		quote: '\"A potion for every occasion.\"',
	},
	master_arsonist:{
		name: 				'master arsonist',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-10T061215.079.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{burn: 4},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3},
		},
		quote: '\"It\'s an artform.\"',
	},
	meat_battery:{
		name: 				'meat battery',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T163132.394.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{energising_deaths: 1, energised_haste: 1},
		quote: '\"Use the bodies, you say?\"',
	},
	medic:{
		name: 				'medic',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard44.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, first_aid: 1},
		hero_version: 			{
			theme: 				['active_healing_ability','fortify_ability','healing_ability','type_creature','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, first_aid: 1},
		},
		quote: '\"Let me help you.\"',
	},
	medical_droid:{
		name: 				'medical droid',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T072405.714.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, first_aid: 1},
		hero_version: 			{
			theme: 				['active_healing_ability','fortify_ability','healing_ability','type_creature','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, first_aid: 1},
		},
		quote: '\"Lucius really cared.\"',
	},
	meditation:{
		name: 				'meditation',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T160815.088.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolster_hero: 5},
		quote: '\"Take some time to heal yourself.\"',
	},
	medkit:{
		name: 				'medkit',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard95.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{first_aid: 1},
		quote: '\"I never said it woudn\'t hurt.\"',
	},
	mercenary:{
		name: 				'mercenary',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard66.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, homebound: 1},
		hero_version: 			{
			theme: 				['move_ally_to_hand_ability','evade_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"You paid us for the battle, not the war.\"',
	},
	messenger:{
		name: 				'messenger',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T170331.457.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, draw: 1, homebound: 1},
		hero_version: 			{
			theme: 				['subtype_human','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1, evade: 1},
		},
		quote: '\"I bring news!\"',
	},
	mischievous_imp:{
		name: 				'mischievous imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T150048.784.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{burning_entry: 3, flame_strike: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, burn_hv: 1, evade: 1},
		},
		quote: '\"Me bring fire and run away! hihi!\"',
	},
	mole:{
		name: 				'mole',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T092830.803.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{run_away: 1, strike: 1, hide: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide: 1},
		},
		quote: '\"A wall? Send in the moles.\"',
	},
	mighty_zealot:{
		name: 				'mighty zealot',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T144328.975.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, striking_entry: 3},
		hero_version: 			{
			theme: 				['empower_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2},
		},
		quote: '\"I will find something to hit!\"',
	},
	mind_bolt:{
		name: 				'mind bolt',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T074817.596.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard_enemy: 1, wither_hero: 2},
		quote: '\"It hurts, doesn\'t it?\"',
	},
	
	mind_clamp:{
		name: 				'mind clamp',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T065517.658.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard_enemy_down: 8},
		quote: '\"Do you feel the pressure?\"',
		max_in_deck: 1,
	},
	mind_leak:{
		name: 				'mind leak',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T074550.534.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard_enemy: 1, draw_on_act: 1},
		quote: '\"Did you loose your train of thought?\"',
	},
	
	mind_shard:{
		name: 				'mind shard',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				['discard_enemy_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T071316.766.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{painful_empty_hand: 3},
		quote: '\"Out of thoughts?\"',
	},
	mind_storm:{
		name: 				'mind storm',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T070720.007.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard: 2, fire_blast: 5, damage_hero: 5, minimum_enemies: 3, min_hand_cards: 2},
		quote: '\"What is a bit of insanity worth to you?\"',
	},
	
	nightly_harvest:{
		name: 				'nightly harvest',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T210418.370.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reap: 1, echo: 1},
		quote: '\"Reap the nightmare.\"',
		max_in_deck: 		2,
	},
	
	nightmare:{
		name: 				'nightmare',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				['draw_cards_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T062827.274.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{charge: 1, strike: 1, discard_enemy: 1},
		hero_version: 			{
			theme: 				['subtype_animal','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, discard_enemy: 1},
		},
		quote: '\"It haunts my dreams.\"',
	},
	nightmare_hound:{
		name: 				'nightmare hound',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				['draw_cards_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T061447.937.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, discard_enemy: 1},
		hero_version: 			{
			theme: 				['subtype_animal','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, discard_enemy: 1},
		},
		quote: '\"The howl is directed at its master.\"',
	},
	noxious_rogue:{
		name: 				'noxious rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T070411.781.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, poison_aura: 1, evade: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, poison_aura: 1, evade: 1},
		},
		quote: '\"Come closer!\"',
	},
	nun:{
		name: 				'nun',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T053556.398.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, bless: 2},
		hero_version: 			{
			theme: 				['bless_ability','subtype_cleric','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"I have devoted myself to a higher purpose.\"',
	},
	observer:{
		name: 				'observer',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T083003.302.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, stealth: 1},
		hero_version: 			{
			theme: 				['subtype_golem','flying_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, hide: 1},
		},
		quote: '\"I feel like we are being watched...\"',
	},
	oracle:{
		name: 				'oracle',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T064720.838.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{doom_all: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{doom_all: 2},
		},
		quote: '\"She sees it all.\"',
	},
	orb_of_fog:{
		name: 				'orb of fog',
		type: 				'artifact',
		subtypes: 			['orb','weather'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['evade_ability','stealth_ability','healing_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T141415.600.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_ally: 1},
		quote: '\"We will hide our forces until the time is right.\"',
	},
	orb_of_power:{
		name: 				'orb of power',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T075628.948.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_ally: 1},
		quote: '\"Can you feel the power?\"',
	},
	orb_of_wind:{
		name: 				'orb of wind',
		type: 				'artifact',
		subtypes: 			['orb','weather'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T162201.512.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{air_bolt_hv: 1},
		quote: '\"The sky is not very calm today.\"',
	},
	owl_blade:{
		name: 				'owl blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160803.802.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, draw: 1},
		quote: '\"A scholar\'s weapon.\"',
	},
	painful_knowledge:{
		name: 				'painful knowledge',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T063125.159.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{painful_hand: 1},
		quote: '\"Do you really want to know?!\"',
	},
	paperwork:{
		name: 				'paperwork',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T071134.736.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{slow: 1, echo: 1},
		quote: '\"Does it never end?!\"',
	},
	peasant:{
		name: 				'peasant',
		type: 				'creature',
		basic_reward: 		true,
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		value: 				1,
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard25.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They do not want to fight, but will defend their home.\"',
	},
	pegasus:{
		name: 				'pegasus',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T160023.823.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{charge: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A steed for gods.\"',
	},
	phoenix:{
		name: 				'phoenix',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T084728.773.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, resurrect: 1},
			verified: 			true,
		},
		quote: '\"They burn into a new life.\"',
	},
	pickpocket:{
		name: 				'pickpocket',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T142950.573.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1, hide: 1},
		hero_version: 			{
			theme: 				['stealth_ability','evade_ability','steal_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide: 1, evade: 1},
		},
		quote: '\"He did not notice... Good.\"',
	},
	pigeon:{
		name: 				'pigeon',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard40.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, homebound: 1},
		hero_version: 			{
			theme: 				['subtype_animal','flying_ability','deck_control_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"I keep selling them. Somehow I never run out.\"',
	},
	pirate:{
		name: 				'pirate',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard67.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I\'ll keep that for myself.\"',
	},
	plated_fungus:{
		name: 				'plated fungus',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T073354.926.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plated: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1, spawn_sporeling: 1},
		},
		quote: '\"Hardened mould.\"',
	},
	plated_guard:{
		name: 				'plated guard',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T155731.808.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, guard: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Loyal and faceless.\"',
	},
	poison_orb:{
		name: 				'poison orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard71.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_hv: 1},
		quote: '\"Made from lizardman blood.\"',
	},
	poison_thrower:{
		name: 				'poison thrower',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T070005.741.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{poison: 2, evade: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rogue'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{poison_hv: 3, evade: 1},
		},
		quote: '\"Catch!\"',
	},
	politician:{
		name: 				'politician',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T063801.669.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, doom_all: 1, doom_self: 1},
		hero_version: 			{
			theme: 				['deck_control_ability','hasten_ability','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, doom_all: 1},
		},
		quote: '\"Give them time...\"',
	},
	power_drain:{
		name: 				'power drain',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T152511.045.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{debilitate_all: 2, minimum_enemy_creatures: 3},
		quote: '\"They all just... gave up!\"',
	},
	power_golem:{
		name: 				'power golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T065849.075.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['subtype_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"Pitty it can\'t power itself.\"',
	},
	power_jolt:{
		name: 				'power jolt',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T064544.543.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{jolt: 3, echo: 1},
		quote: '\"This will sting a little.\"',
	},
	power_mage:{
		name: 				'power mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T075113.830.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{arcane_bolt: 1, empower_ally: 3},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt: 1, empower_ally: 2},
		},
		quote: '\"I can feel the power!\"',
	},
	power_tap:{
		name: 				'power tap',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T151526.280.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{debilitate: 1, echo: 1},
		quote: '\"Just give up!\"',
	},
	prime_archer:{
		name: 				'prime archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052952.404.jpg',
		power: 				3,
		armor: 				0,
		health: 			7,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"She has seen a lot.\"',
	},
	pure_mage:{
		name: 				'pure mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T142502.221.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{arcane_bolt: 1, purify: 1},
		hero_version: 			{
			theme: 				['subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, purify: 1},
		},
		quote: '\"Uncorruptable.\"',
	},
	pygmy_troll:{
		name: 				'pygmy troll',
		type: 				'creature',
		subtypes: 			['troll'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard80.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_troll','subtype_warrior','on_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 1},
		},
		quote: '\"I do little smash!\"',
	},
	rage_warrior:{
		name: 				'rage warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T065611.307.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, enrage: 1, plated: 1},
		hero_version: 			{
			theme: 				['empower_ability','subtype_warrior','plated_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, plated: 1},
		},
		quote: '\"You... attack me?!\"',
	},
	rallying_banner:{
		name: 				'rallying banner',
		type: 				'artifact',
		subtypes: 			['flag'],
		color: 				['colorless'],
		theme: 				['summon_creature_ability'],
		craft_theme: 		['empower','move_ally_to_hand'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T075207.566.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_arrivals: 1},
		quote: '\"Come and fight!\"',
	},
	reapers_insight:{
		name: 				'reaper\'s insight',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160701.212.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_living_creature: 1, draw_on_act: 3},
		quote: '\"We can learn from this.\"',
		max_in_deck: 		2,
	},
	recaller:{
		name: 				'recaller',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T165035.017.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{unsummon_ally: 1, strike: 1},
		hero_version: 			{
			theme: 				['on_play_proc_ability','subtype_mage'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, unsummon_ally: 1},
		},
		quote: '\"Be safe, my friend.\"',
	},
	recruit:{
		name: 				'recruit',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard52.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"They told me to put on the armor and report here.\"',
	},
	research:{
		name: 				'research',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				['subtype_clerk'],
		craft_theme: 		['subtype_clerk'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard54.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{draw: 2},
		quote: '\"Let us study.\"',
	},
	
	righteous_lady:{
		name: 				'righteous lady',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T141234.198.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, purify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"She comes to bring the light!\"',
	},
	righteous_warrior:{
		name: 				'righteous warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T140941.901.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, purify: 1, plated: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1, plated: 1},
		},
		quote: '\"We do not fear the dark!\"',
	},
	rhinoceros:{
		name: 				'rhinoceros',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T160935.968.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{charge: 1, strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Do not anger it!\"',
	},
	rock_golem:{
		name: 				'rock golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard76.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Made from stone.\"',
	},
	rogue:{
		name: 				'rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard28.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Catch me, if you can.\"',
	},
	rogue_archer:{
		name: 				'rogue archer',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052713.725.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{shoot: 1, evade: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"I never said it would be a fair fight.\"',
	},
	rogue_elf:{
		name: 				'rogue elf',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T073659.557.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, resist_magic: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1, evade: 1},
		},
		quote: '\"Not all elves play by the rules.\"',
	},
	rogue_fire_mage:{
		name: 				'rogue fire mage',
		type: 				'creature',
		subtypes: 			['human','rogue','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard30.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fire_bolt: 1, evade: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fire_bolt_hv: 1, evade: 1},
		},
		quote: '\"Blades and fire.\"',
	},
	
	rogue_light_bringer:{
		name: 				'rogue light bringer',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T142808.807.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, evade: 1, purifying_entry: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, purify: 1},
		},
		quote: '\"I hope it blinds you.\"',
	},
	rogue_sniper:{
		name: 				'rogue sniper',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052940.925.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{snipe: 1, evade: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, evade: 1},
		},
		quote: '\"She takes the job. She does the job.\"',
	},
	rogue_soldier:{
		name: 				'rogue soldier',
		type: 				'creature',
		subtypes: 			['human','warrior','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160500.494.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, evade: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior','evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, plated: 1},
		},
		quote: '\"She\'s not in the army anymore.\"',
	},
	ruffian:{
		name: 				'ruffian',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard27.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Do you want a knuckle sandwich?.\"',
	},
	
	saboteur:{
		name: 				'saboteur',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T161341.453.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_structure: 1, strike: 1, demolish: 1},
		hero_version: 			{
			theme: 				[],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, demolish: 1},
		},
		quote: '\"Just get me there.\"',
	},
	sandstorm:{
		name: 				'sandstorm',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-16T062731.782.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{earth_blast: 1, echo: 1},
		quote: '\"Those can last for days...\"',
	},
	scavanger:{
		name: 				'scavanger',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				['type_artifact','subtype_golem','type_structure'],
		craft_theme: 		['type_artifact','type_structure'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard79.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, scavange: 1},
		hero_version: 			{
			theme: 				['type_artifact','subtype_golem','type_structure','break_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, scavange: 1},
		},
		quote: '\"One man\'s junk...\"',
	},
	scout:{
		name: 				'scout',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-03-02T112159.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, stealth: 1},
		hero_version: 			{
			theme: 				['evade_ability','stealth_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide: 1},
		},
		quote: '\"Watch them. Do not engage.\"',
	},
	searing_orb:{
		name: 				'searing orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				['burn_ability','burn_ability'],
		not_theme: 			['fire_ability'],
		craft_theme: 		['burn','burn'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T070915.580.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{conflagrate_hv: 1},
		quote: '\"Feel the burn!\"',
	},
	seeker_golem:{
		name: 				'seeker golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T074051.911.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{charge: 1, strike: 1, explode: 5},
		hero_version: 			{
			theme: 				['subtype_warrior','empower_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fire_aura: 1},
		},
		quote: '\"Deadly contraption.\"',
	},
	seer:{
		name: 				'seer',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T063455.662.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, doom: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, doom: 1},
		},
		quote: '\"She has the sight.\"',
	},
	shadow_mage:{
		name: 				'shadow mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['grant_stealth','grant_stealth','grant_stealth','subtype_weather'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T193159.504.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{hide_ally: 1, fire_bolt: 2},
		hero_version: 			{
			theme: 				['on_play_proc_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{hide_ally: 1, fire_bolt_hv: 1},
		},
		quote: '\"Our magic will hide us.\"',
	},
	shield:{
		name: 				'shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-14T061708.044.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1},
		quote: '\"Basic protection.\"',
	},
	shield_maiden:{
		name: 				'shield maiden',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T063923.429.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, fortify_self: 2},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 2},
		},
		quote: '\"My shield protects me!\"',
	},
	shield_page:{
		name: 				'shield page',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T063242.994.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, fortify_self: 2},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 2},
		},
		quote: '\"This shield is heavy!\"',
	},
	shield_warrior:{
		name: 				'shield warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T064631.046.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, fortify_self: 2},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 2},
		},
		quote: '\"Come at me!\"',
	},
	shielding_spell:{
		name: 				'shielding spell',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T073048.518.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify: 1, echo: 1},
		quote: '\"Usefull, when needed.\"',
	},
	shooting_witch:{
		name: 				'shooting witch',
		type: 				'creature',
		subtypes: 			['human','witch','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053637.208.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{curse: 1, shoot: 1},
		hero_version: 			{
			theme: 				['curse_ability','projectile_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, shoot_unit: 1},
		},
		quote: '\"I have marked you, now let me hit you!\"',
	},
	sight_mage:{
		name: 				'sight mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T063730.385.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 2, dooming_touch: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, dooming_touch: 1},
		},
		quote: '\"She sees your death.\"',
	},
	signaler:{
		name: 				'signaler',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T161659.635.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, hasten: 1},
		hero_version: 			{
			theme: 				['deck_control_ability','subtype_human','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1},
		},
		quote: '\"Over here!\"',
	},
	
	skeletal_apprentice:{
		name: 				'skeletal apprentice',
		type: 				'creature',
		subtypes: 			['undead','skeleton','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T071555.080.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{fire_bolt: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability','fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 2, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Joey?\"',
	},
	skeletal_archer:{
		name: 				'skeletal archer',
		type: 				'creature',
		subtypes: 			['undead','skeleton','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T054110.851.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{shoot: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability','fire_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Fred?\"',
	},
	
	skeletal_bull:{
		name: 				'skeletal bull',
		type: 				'creature',
		subtypes: 			['undead','skeleton','animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T074933.617.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{charge: 1, strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_animal','charge_ability','on_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Do you remember the good old days when you just had to put away the flag?\"',
	},
	skeletal_knight:{
		name: 				'skeletal knight',
		type: 				'creature',
		subtypes: 			['undead','skeleton','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard57.jpg',
		power: 				4,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, plated: 1},
		},
		quote: '\"Didn\'t that used to be Timmy?\"',
	},
	skeletal_mage:{
		name: 				'skeletal mage',
		type: 				'creature',
		subtypes: 			['undead','skeleton','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T071250.823.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{arcane_bolt: 2, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Leanord?\"',
	},
	skeletal_rogue:{
		name: 				'skeletal rogue',
		type: 				'creature',
		subtypes: 			['undead','skeleton','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T081501.419.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, evade: 1},
		},
		quote: '\"Didn\'t that used to be Jimmy?\"',
	},
	
	skeletal_sacrifice:{
		name: 				'skeletal sacrifice',
		type: 				'spell',
		subtypes: 			['ritual','summon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T044710.775.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_living_creature: 1, raise_skeleton: 2, maximum_allies: 4},
		quote: '\"The living bore me. Bring me more death!\"',
	},
	
	skeletal_scout:{
		name: 				'skeletal scout',
		type: 				'creature',
		subtypes: 			['undead','skeleton','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T054137.151.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{shoot: 1, stealth: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, hide: 1, undead: 1, resurrect: 1},
			verified: true,
		},
		quote: '\"Didn\'t that used to be Micky?\"',
	},
	skeletal_slasher:{
		name: 				'skeletal slasher',
		type: 				'creature',
		subtypes: 			['undead','skeleton'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T080935.236.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 2, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Holly?\"',
	},
	skeletal_stalker:{
		name: 				'skeletal stalker',
		type: 				'creature',
		subtypes: 			['undead','skeleton','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T054117.327.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{snipe: 1, hide: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, hide: 1, undead: 1, resurrect: 1},
			verified: true,
		},
		quote: '\"Didn\'t that used to be Nikky?\"',
	},
	skeletal_warrior:{
		name: 				'skeletal warrior',
		type: 				'creature',
		subtypes: 			['undead','skeleton','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard43.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Timmy?\"',
	},
	skeleton:{
		name: 				'skeleton',
		type: 				'creature',
		subtypes: 			['undead','skeleton'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard42.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','on_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Tommy?\"',
	},
	skygazer:{
		name: 				'skygazer',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T163044.347.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{air_bolt: 1, strike: 1},
		hero_version: 			{
			theme: 				['flying_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{air_bolt_hv: 1, strike_unit: 1},
		},
		quote: '\"I love the sky!\"',
	},
	slashing_horror:{
		name: 				'slashing horror',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T101018.636.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{fear: 1, strike: 2},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, fearful_aura: 1},
		},
		quote: '\"When you see it... run!\"',
	},
	slavers_whip:{
		name: 				'slaver\'s whip',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T070148.356.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{backlash: 2},
		quote: '\"Let\'s put those minions to work!\"',
	},
	sneak_attack:{
		name: 				'sneak attack',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T081146.787.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ally_runs_away: 1, echo: 1},
		quote: '\"Move around them!\"',
	},
	
	snowballer:{
		name: 				'snowballer',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T070257.826.jpg',
		power: 				false,
		armor: 				0,
		health: 			3,
		abilities: 			{frost_bolt: 1, evade: 1, run_away: 1},
		hero_version: 			{
			theme: 				['cold_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt: 1, evade: 1},
		},
		quote: '\"Haha! In your face!\"',
	},
	snowball_golem:{
		name: 				'snowball golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T062622.563.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{frost_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt_hv: 2},
		},
		quote: '\"Lucius created these to play with him as a child.\"',
	},
	soldier:{
		name: 				'soldier',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard51.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Face your enemy.\"',
	},
	soul_orb:{
		name: 				'soul orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['curse_ability','curse_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T071417.180.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_deaths_hv: 1},
		quote: '\"Share the pain of death.\"',
	},
	
	soul_huntress:{
		name: 				'soul huntress',
		type: 				'creature',
		subtypes: 			['human','warrior','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053847.049.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, run_away: 1, snipe: 1, feast: 3},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, snipe_hv: 1, evade: 1, feast: 1},
		},
		quote: '\"One soul for another.\"',
	},
	soul_wrecker:{
		name: 				'soul wrecker',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T080737.750.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, resurrect: 1, final_pay_life: 1},
		hero_version: 			{
			theme: 				['undead_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 1},
		},
		quote: '\"You will pay for my services.\"',
	},
	
	sparrow:{
		name: 				'sparrow',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T140246.408.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, run_away: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, evade: 1},
			verified: 			true,
		},
		quote: '\"Hard to catch.\"',
	},
	spell_ward:{
		name: 				'spell ward',
		type: 				'artifact',
		subtypes: 			['charm'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['counter_spell_ability','counter_spell_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T084215.884.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{counter_spell: 1},
		quote: '\"A usefull charm.\"',
	},
	
	spellblade:{
		name: 				'spellblade',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T090012.160.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, spellpower: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','echo_ability','subtype_wall'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spellpower: 1},
		},
		quote: '\"My blade glows with spellpower!\"',
	},
	spell_blaster:{
		name: 				'spell blaster',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T090635.009.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{spellblast: 1},
		hero_version: 			{
			theme: 				['subtype_mage','subtype_tactic','any_spell_card_played_proc_ability','any_spell_card_played_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spellblast: 1},
		},
		quote: '\"Feed me mana!\"',
	},
	
	spellblood_orb:{
		name: 				'spellblood orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['evade_ability','stealth_ability','healing_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T082505.136.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{painful_spells: 1},
		quote: '\"Magic has its downside.\"',
	},
	spider:{
		name: 				'spider',
		type: 				'creature',
		subtypes: 			['animal','spider'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard91.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, trap: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_animal','subtype_spider','stun_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"Watch out for webs!\"',
	},
	spike_pod:{
		name: 				'spike pod',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T060003.872.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{thorns: 4},
		hero_version: 			{
			theme: 				['subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{thorns: 2},
		},
		quote: '\"Careful!\"',
	},
	spiked_shield:{
		name: 				'spiked shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160425.303.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, thorned_hero: 1},
		quote: '\"Come at me now!\"',
	},
	split:{
		name: 				'split',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T074801.942.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{clone_ally: 1},
		quote: '\"This won\'t hurt a bit, I promise!\"',
		max_in_deck: 2,
	},
	spore_cloud:{
		name: 				'spore cloud',
		type: 				'spell',
		subtypes: 			['fungus','weather'],
		color: 				['colorless'],
		theme: 				['sybtype_fungus','sybtype_fungus'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-16T061320.105.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_sporeling: 1, echo: 1},
		quote: '\"Cough, cough.\"',
	},
	sporeling:{
		name: 				'sporeling',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T062631.293.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1},
		quote: '\"They grow in damp, dark places.\"',
	},
	squad_leader:{
		name: 				'squad leader',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T080921.839.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{empower_all: 1, strike: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"Lets get \'m, boys!\"',
	},
	staff_of_purity:{
		name: 				'staff of purity',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_cleric'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T144554.196.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{purify: 1},
		quote: '\"Be cleansed.\"',
	},
	stalker:{
		name: 				'stalker',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053824.245.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{snipe: 1, hide: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, hide: 1},
		},
		quote: '\"Shoot from the shadows.\"',
	},
	star_cloak:{
		name: 				'star cloak',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T120102.476.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_hero: 1},
		quote: '\"Now you see me!\"',
		max_in_deck: 1,
	},
	steel_golem:{
		name: 				'steel golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard77.jpg',
		power: 				3,
		armor: 				0,
		health: 			7,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Made from steel.\"',
	},
	
	strike_of_opportunity:{
		name: 				'strike of opportunity',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['deck_control_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T152933.161.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{strike_hero: 5, maximum_enemies: 0},
		quote: '\"He\'s down! Strike now!\"',
	},
	striker:{
		name: 				'striker',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard26.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, striking_entry: 4},
		hero_version: 			{
			theme: 				['subtype_warrior','on_play_proc_ability','dealt_damage_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1},
		},
		quote: '\"Strike first.\"',
	},
	strong_brew:{
		name: 				'strong brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160149.576.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, echo: 1},
		quote: '\"Get me another one!\"',
	},
	strongshot:{
		name: 				'strongshot',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T050945.386.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"Those arrows hurt!\"',
	},
	sturdy_brew:{
		name: 				'sturdy brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T135633.639.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolster_hero: 1, echo: 1},
		quote: '\"Ready for a long day!\"',
	},
	summon_imp:{
		name: 				'summon imp',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['subtype_imp','subtype_imp','subtype_daemon','subtype_daemon'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard49.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_imp: 1},
		quote: '\"Life is like an imp pit, you never know what you\'re gonna get.\"',
	},
	swamp_rat:{
		name: 				'swamp rat',
		type: 				'creature',
		subtypes: 			['animal','rodent'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T072509.492.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, avoid_structure: 1},
		hero_version: 			{
			theme: 				['subtype_animal','poison_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"It feeds on lost travelers.\"',
	},
	swooping_horror:{
		name: 				'swooping horror',
		type: 				'creature',
		subtypes: 			['horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T081753.089.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{fear: 1, seek_creature: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_horror'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, fearful_aura: 1},
		},
		quote: '\"It came from above!\"',
	},
	swordmaster:{
		name: 				'swordmaster',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T070307.026.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 2, counter: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, counter: 1},
		},
		quote: '\"She is one with her blades.\"',
	},
	tactical_retreat:{
		name: 				'tactical retreat',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T081739.341.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{unsummon_ally: 1, echo: 1},
		quote: '\"I\'m not running away! It\'s called a tactical retreat!\"',
	},
	
	thief:{
		name: 				'thief',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard34.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I\'ll take that!\"',
	},
	time_mage:{
		name: 				'time mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T165324.182.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{unsummon_ally: 1, hasten: 1, arcane_bolt: 1},
		hero_version: 			{
			theme: 				['on_play_proc_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{unsummon_ally: 1, hasten: 1, arcane_bolt_hv: 1},
		},
		quote: '\"The past can be your friend.\"',
	},
	
	town_hall:{
		name: 				'town hall',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T062700.373.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{summon_conscript: 1},
		hero_version: 			{
			theme: 				['subtype_human','ally_creature_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_conscript: 1},
			verified: 			true,
		},
		quote: '\"We shall gather at the Town Hall.\"',
	},
	toxic_cloud:{
		name: 				'toxic cloud',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T150447.143.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_all: 5, minimum_enemy_creatures: 3},
		quote: '\"Breathe in deep!\"',
	},
	toxic_soul:{
		name: 				'toxic soul',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-17T054433.440.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, venom: 1, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 2, undead: 1},
		},
		quote: '\"She poisons the living.\"',
	},
	tracker:{
		name: 				'tracker',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052200.189.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{reveal: 1, shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{reveal: 1, shoot_unit: 1},
		},
		quote: '\"There you are!\"',
	},
	troll_warrior:{
		name: 				'troll warrior',
		type: 				'creature',
		subtypes: 			['troll','warrior'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard82.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_troll','subtype_warrior','on_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 1},
		},
		quote: '\"I do big smash!\"',
	},
	truthseeker:{
		name: 				'truthseeker',
		type: 				'creature',
		subtypes: 			['human','cleric','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T163743.332.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, purify: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"I will find it!\"',
	},
	twin_blade:{
		name: 				'twin blade',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard29.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 2, evade: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','empower_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, evade: 1},
		},
		quote: '\"Say hello to my little friends!\"',
	},
	
	unholy_night:{
		name: 				'unholy night',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T111920.684.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_ghost: 5, maximum_allies: 0},
		quote: '\"Time to meet your grandfather.\"',
	},
	unholy_rite:{
		name: 				'unholy rite',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T163402.368.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_all: 2, minimum_enemies: 3},
		quote: '\"It\'s never good when the witches come together.\"',
	},
	undertaker:{
		name: 				'undertaker',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				['resurrect_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard73.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, cursed_deaths: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','arcane_bolts_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_deaths_hv: 1},
		},
		quote: '\"I will note the date in the ledger.\"',
	},
	vampire_bat:{
		name: 				'vampire bat',
		type: 				'creature',
		subtypes: 			['animal','bat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T090040.441.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, vampiric: 1, flying: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, vampiric: 1, flying: 1},
		},
		quote: '\"Flying rats... great...\"',
	},
	vengeful_spirit:{
		name: 				'vengeful spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard74.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, raging_deaths: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, raging_deaths: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Leave us be!\"',
	},
	venom_rogue:{
		name: 				'venom rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T070922.895.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, evade: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, evade: 1},
		},
		quote: '\"Let me touch you...\"',
	},
	vine:{
		name: 				'vine',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T085052.203.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_plant'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Even the plants try to kill you!\"',
	},
	
	vine_master:{
		name: 				'vine master',
		type: 				'structure',
		subtypes: 			['plant','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T085742.386.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, marred_vines: 1},
		hero_version: 			{
			theme: 				['subtype_plant','summon_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, marred_vines: 1},
		},
		quote: '\"I cut off his arm and it crawled away!\"',
	},
	vine_serpent:{
		name: 				'vine serpent',
		type: 				'structure',
		subtypes: 			['plant','animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T085443.578.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 2},
		hero_version: 			{
			theme: 				['subtype_plant','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 2},
		},
		quote: '\"Even the plants try to eat you!\"',
	},
	
	viper:{
		name: 				'viper',
		type: 				'creature',
		subtypes: 			['animal','lizard'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard68.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, venom: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['poison_ability','subtype_lizard'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 3},
		},
		quote: '\"Hissssss!\"',
	},
	vulture:{
		name: 				'vulture',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T060045.768.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, feast: 3, flying: 1},
		hero_version: 			{
			theme: 				['feast_ability','subtype_bird'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, flying: 1},
		},
		quote: '\"Can you see it circle?\"',
	},
	
	walking_fungus:{
		name: 				'walking fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T070758.026.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"It moved, I swear!\"',
	},
	wall_of_knives:{
		name: 				'wall of knives',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T061545.618.jpg',
		power: 				1,
		armor: 				0,
		health: 			10,
		abilities: 			{counter: 2},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{counter: 2},
		},
		quote: '\"They say the knives are enchanted.\"',
	},
	wall_of_spirits:{
		name: 				'wall of spirits',
		type: 				'structure',
		subtypes: 			['wall','undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T085717.596.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{resurrect_ally: 2},
		hero_version: 			{
			theme: 				['subtype_undead','resurrect_ability','bolster_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{resurrect_ally: 3},
		},
		quote: '\"It holds back the spirits.\"',
	},
	wall_of_water:{
		name: 				'wall of water',
		type: 				'structure',
		subtypes: 			['wall','water'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T143302.083.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{counter: 1, fireproof: 1},
		hero_version: 			{
			theme: 				['subtype_water','subtype_animal','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{counter: 1, fireproof: 1},
		},
		quote: '\"Get through that? How?!\"',
	},
	war_scribe:{
		name: 				'war scribe',
		type: 				'creature',
		subtypes: 			['human','warrior','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T155054.917.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, draw: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1},
		},
		quote: '\"Knowledge is power.\"',
	},
	warder:{
		name: 				'warder',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T083843.215.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, counter_spell: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_witch'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter_spell: 1},
		},
		quote: '\"Stay behind me!\"',
	},
	warding_shield:{
		name: 				'warding shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-14T061747.145.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, counter_spell: 1},
		quote: '\"Allround protection.\"',
	},
	warlock:{
		name: 				'warlock',
		type: 				'creature',
		subtypes: 			['human','witch','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T113859.306.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, fire_bolt: 1, summon_imp: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_imp','curse_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, fire_bolt_hv: 2},
		},
		quote: '\"She has been to hell and back.\"',
	},
	warrior_witch:{
		name: 				'warrior witch',
		type: 				'creature',
		subtypes: 			['human','witch','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T170359.671.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, plated: 1},
		},
		quote: '\"Let my dark blade cut you!\"',
	},
	wave_caller:{
		name: 				'wave caller',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['water','water','water','water','water','water'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T071727.035.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{water_blast: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['magical_ability','water_ability','air_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{water_blast: 1},
		},
		quote: '\"Wash away the filth.\"',
	},
	weakness:{
		name: 				'weakness',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T160148.896.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{weakness: 2, echo: 1},
		quote: '\"You think you are strong?\"',
	},
	weasel:{
		name: 				'weasel',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T073758.819.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Hard to catch and a nasty bite.\"',
	},
	whisp:{
		name: 				'whisp',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T083129.418.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, evade: 1, flying: 1, undead: 1},
		hero_version: 			{
			theme: 				['evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, flying: 1, undead: 1},
			verified: 			true,
		},
		quote: '\"A spirit so fragile it disappears when touched.\"',
	},
	wild_worm:{
		name: 				'wild worm',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				['deck_control_ability','hasten_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T065904.363.jpg',
		power: 				4,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, homebound: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Where can something that big hide?!\"',
	},
	winged_imp:{
		name: 				'winged imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard48.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, flying: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, flying: 1},
		},
		quote: '\"Me up here!\"',
	},
	witch:{
		name: 				'witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard39.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{curse: 1, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 3, strike_unit: 1},
		},
		quote: '\"Let the darkness embrace you!\"',
	},
	witchs_initiate:{
		name: 				'witch\'s initiate',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T090848.724.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, final_curse: 2},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1},
		},
		quote: '\"Give me some time. Then I will curse you!\"',
	},
	wren:{
		name: 				'wren',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T083454.870.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A common bird.\"',
	},
	wrench:{
		name: 				'wrench',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T113733.307.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{stun_construct: 1},
		quote: '\"You have to use it the right way.\"',
		max_in_deck: 1,
	},
	
	zealot:{
		name: 				'zealot',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T142824.473.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, striking_entry: 2},
		hero_version: 			{
			theme: 				['empower_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2},
		},
		quote: '\"Give me something to hit!\"',
	},
	zealous_rogue:{
		name: 				'zealous rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T142445.446.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, evade: 1, striking_entry: 2},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"My dagger needs flesh.\"',
	},
	zealous_warrior:{
		name: 				'zealous warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T144614.196.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, striking_entry: 2, plated: 1},
		hero_version: 			{
			theme: 				['empower_ability','subtype_warrior','plated_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Give me something to hit, before they hit me!\"',
	},
	zombie:{
		name: 				'zombie',
		type: 				'creature',
		subtypes: 			['undead','zombie'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard98.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 2, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','subtype_zombie'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, undead: 1},
		},
		quote: '\"Brains...\"',
	},
	zombie_knight:{
		name: 				'zombie knight',
		type: 				'creature',
		subtypes: 			['undead','zombie','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T204050.564.jpg',
		power: 				4,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, feast: 3, plated: 1, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','subtype_zombie'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, plated: 1, undead: 1},
		},
		quote: '\"Glorious brains...\"',
	},
	zombie_warrior:{
		name: 				'zombie warrior',
		type: 				'creature',
		subtypes: 			['undead','zombie','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T203747.679.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, feast: 3, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','subtype_zombie'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, undead: 1},
		},
		quote: '\"Fight for brains...\"',
	},
	
	

	//##################################################################################################################################################################
	//########################################################## FRAGMENTS ###############################################################################################
	//##################################################################################################################################################################

	/*fragment_forest:{
		name: 				'forest fragment',
		value: 				1,
		type: 				'fragment',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'buildings/dream_TradingCard-2024-03-03T084047.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
	},*/

	//##################################################################################################################################################################
	//########################################################## REWARDS ###############################################################################################
	//##################################################################################################################################################################

	flask:{
		name: 				'flask',
		value: 				25,
		type: 				'currency',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-12-21T070512.391.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in alchemy'
	},
	potion_placeholder:{
		name: 				'potion',
		value: 				1,
		type: 				'potion',
		color: 				['purple'],
		pick_chance: 		0,
		time: 				0,
		image: 				'mason-jar.svg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	clover:{
		name: 				'clover',
		description: 		'Can be used to boost the current enemy. Increases rewards by 25%.',
		value: 				5,
		//months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-21T054040.563.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Rare as they are lucky.\"',
		summon_post_buff:{
			buff_type: 			'reward_count',
			buff_amount: 		25,
			buff_amount_type:  'percent',
		}
	},
	horseshoe:{
		name: 				'horseshoe',
		description: 		'Can be used to boost the current enemy. Increases rewards by 10%.',
		value: 				2,
		//months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-21T053538.719.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"They can bring luck.\"',
		summon_post_buff:{
			buff_type: 			'reward_count',
			buff_amount: 		10,
			buff_amount_type:  'percent',
		}
	},
	jar_of_luck:{
		name: 				'jar of luck',
		description: 		'Can be used to boost the current enemy. Increases rewards by 50%.',
		value: 				10,
		//months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-21T054355.310.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Overflowing with the good stuff.\"',
		summon_post_buff:{
			buff_type: 			'reward_count',
			buff_amount: 		50,
			buff_amount_type:  'percent',
		}
	},
	
	shard:{
		name: 				'shard',
		value: 				5,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2023-03-17T062225.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Used for upgrades.\"',
	},
	/*spyglass:{
		name: 				'spyglass',
		version: 			2,
		value: 				20,
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		boost_pick_chance: 	0,
		time: 				0,
		image: 				'cards/telescope-971430_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},*/
	stash:{
		name: 				'stash',
		value: 				25,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-30T171529.098.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			pick_amount: 	1,
			amount: 		1,
			min_value: 		1,
			description: 	'Awards 1 random card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},
	},
	chest:{
		name: 				'chest',
		value: 				100,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-12-07T074802.756.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			pick_amount: 	1,
			amount: 		1,
			min_value: 		25,
			description: 	'Awards 1 random uncommon or better card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},
	},
	empty_card:{
		name: 				'',
		value: 				1,
		type: 				'',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	scraps_placeholder:{
		name: 				'scraps',
		value: 				1,
		type: 				'currency',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/shredded-71381_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},

}

/*$.each(all_old_available_cards, function(card_id, card_info){
	if(all_available_cards[card_id] == undefined)
	{
		var use_old_card = true;
		if(card_info['type'] != 'artifact' && card_info['type'] != 'spell' && card_info['type'] != 'creature' && card_info['type'] != 'structure'){use_old_card = false;}
		if(card_info.name.replace('icatu','') != card_info.name){use_old_card = false;}
		if(card_info.name.replace('jotnar','') != card_info.name){use_old_card = false;}
		if(card_info.name.replace('thief','') != card_info.name){use_old_card = false;}

		var matched_new_card = false;
		if(use_old_card == true)
		{
			$.each(all_available_cards, function(new_card_id, new_card_info){
				if(matched_new_card == false)
				{
					var matched_this = true;
					if(new_card_info['power'] != card_info['power']){matched_this = false;}
					if(new_card_info['health'] != card_info['health']){matched_this = false;}
					if(count_object(card_info['abilities']) == count_object(new_card_info['abilities']))
					{
						$.each(card_info['abilities'], function(ability_id, ability_level){
							if(new_card_info['abilities'][ability_id] == undefined || new_card_info['abilities'][ability_id] != ability_level)
							{
								matched_this = false;
							}
						});
					}
					else
					{
						matched_this = false;
					}
					if(matched_this == true)
					{
						matched_new_card = true;
						console.log(card_id + ' is the same as ' + new_card_id);
					}
				}
			});
		}
		if(matched_new_card == true){use_old_card = false;}

		if(use_old_card == true)
		{
			var new_card = true_copyobject(all_old_available_cards[card_id]);
			$.each(new_card['abilities'], function(ability_id, ability_level){
				if(all_abilities[ability_id] == undefined)
				{
					delete new_card['abilities'][ability_id];
				}
				else
				{
					if(all_abilities[ability_id]['max_level'] != undefined && ability_level > all_abilities[ability_id]['max_level'])
					{
						new_card['abilities'][ability_id] = all_abilities[ability_id]['max_level'];
					}
				}
			});
			if(new_card['hero_version'] != undefined)
			{
				$.each(new_card['hero_version']['abilities'], function(ability_id, ability_level){
					if(all_abilities[ability_id] == undefined)
					{
						delete new_card['hero_version']['abilities'][ability_id];
					}
					else
					{
						if(all_abilities[ability_id]['max_level'] != undefined && ability_level > all_abilities[ability_id]['max_level'])
						{
							new_card['hero_version']['abilities'][ability_id] = all_abilities[ability_id]['max_level'];
						}
					}
				});
			}
			var old_image_string = new_card['image']
			new_card['image'] = old_image_string.replace('cards/','cards_old/');
			new_card['old'] = true;
			all_available_cards[card_id] = new_card;
		}
	}
});
*/
$.each(all_available_cards, function(card_id, card_info){
	if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
});

function calculate_card_value(card_id, show_calc){
	//console.log('calculating ' + card_id);
	var current_card_value = 0;
	if(all_available_cards[card_id] == undefined){console.log(card_id)};
	if(all_available_cards[card_id]['recipe'] == undefined || show_calc != undefined)
	{
		if(all_available_cards[card_id]['value'] == undefined)
		{
			current_card_value = 1;
		}
		else
		{
			current_card_value = all_available_cards[card_id]['value'];
		}
		current_card_value = 1;
		//if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'artifact'){current_card_value += 5;}
		current_card_value *= all_available_cards[card_id]['raw_time'] * all_available_cards[card_id]['raw_time'];
		if(current_card_value < all_available_cards[card_id]['raw_time']){current_card_value = all_available_cards[card_id]['raw_time'];}
		if(show_calc != undefined && show_calc == true){console.log('time: ' + current_card_value);}
		var ability_count = count_object(all_available_cards[card_id]['abilities']);
		/*var ability_count =  0;
		$.each(all_available_cards[card_id]['abilities'], function(ability_id, ability_level){
			ability_count +=  0.8 + (ability_level / 5);
		});*/
		current_card_value *= (ability_count * ability_count);
		if(show_calc != undefined && show_calc == true){console.log('abilities: ' + current_card_value);}
		//current_card_value += all_available_cards[card_id]['power'];
		//current_card_value += all_available_cards[card_id]['health'] / 4;
		//current_card_value = current_card_value * (0.5 + (current_card_value / 10));
		/*if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'artifact')
		{
			current_card_value = current_card_value * (1 + (current_card_value / 5));
		}
		else
		{
			current_card_value = current_card_value * (0.5 + (current_card_value / 10));
		}*/
		if(show_calc != undefined && show_calc == true){console.log('type: ' + current_card_value);}
		/*current_card_value = current_card_value * current_card_value;
		current_card_value /= 10;
		if(show_calc != undefined && show_calc == true){console.log('correction: ' + current_card_value);}*/
		current_card_value = Math.ceil(current_card_value);
	}
	else
	{
		$.each(all_available_cards[card_id]['recipe'], function(card_cost_id, card_cost_amount){
			if(all_available_cards[card_cost_id]['value'] == undefined)
			{
				all_available_cards[card_cost_id]['value'] = calculate_card_value(card_cost_id);
			}
			var cost_card_value = all_available_cards[card_cost_id]['value'];
			current_card_value += cost_card_value * card_cost_amount;
		});
		var card_info = all_available_cards[card_id];
		if(card_info['recipe'] != undefined && all_available_cards['recipe_' + card_id] == undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
		{
			all_available_cards['recipe_' + card_id] = {
				name: 				'recipe: ' + card_info['name'],
				version: 			2,
				non_tradable: 		true,
				value: 				card_info['value'],
				type: 				'recipe',
				color: 				['yellow'],
				pick_chance: 		0,
				months_available: 	card_info['months_available'],
				time: 				0,
				image: 				card_info['image'],
				power: 				false,
				armor: 				false,
				health: 			false,
				abilities: 			{auto_learn: 1},
				recipe: 			card_id,
			};
		}
	}
	
	return current_card_value;
}

function find_ability(find_ability_id, hero_version){
	$.each(all_available_cards, function(unit_id, unit){
		if(hero_version == undefined && unit['abilities'][find_ability_id] != undefined)
		{
			console.log(unit['name']);
		}
		if(hero_version != undefined && unit['hero_version'] != undefined && unit['hero_version']['abilities'][find_ability_id] != undefined)
		{
			console.log('hero: ' + unit['name']);
		}
	});
}

function count_recipe_count(card_id){
	$.each(all_available_cards, function(unit_id, unit){
		var recipe_count = 0;
		var recipe_list = '';
		$.each(all_available_cards, function(unit_id_2, unit_2){
			if(unit_2['recipe'] != undefined && unit_2['recipe'][unit_id] != undefined)
			{
				recipe_count++;
				recipe_list += unit_id_2 + '       ';
			}
		});
		if((recipe_count > 8 && card_id == undefined) || unit_id == card_id)
		{
			console.log(' --------------- ');
			console.log(unit_id + ': ' + recipe_count);
			console.log(recipe_list);
		}
		
	});
}

function find_used_in_recipes(min, max, color){
	if(min == undefined){min = 0;}
	if(max == undefined){max = 10000;}
	var amount_found = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if((color == undefined || match_array_values(color, card_info['color']) == true) && min <= card_info['used_in_recipes'] && max >= card_info['used_in_recipes'] && card_info['type'] != 'fragment' && card_info['type'] != 'consumable')
		{
			console.log(card_info['used_in_recipes'] + ' - ' + card_id + '(' + card_info['value'] + ')');
			amount_found++;
		}
	});
	return amount_found;
}

function check_not_used_in_recipes(){
	var min_value = 0;
	var min_card_id = '';
	var not_used_amount = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['used_in_recipes'] == undefined && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'artifact' || card_info['type'] == 'spell') && card_info['pick_chance'] > 0)
		{
			if(card_info['value'] < min_value || min_value == 0)
			{
				min_value = card_info['value'];
				min_card_id = card_id;
			}
			not_used_amount++;
			console.log(card_id);
		}
	});
	console.log('min value: ' + min_value + ' - ' + min_card_id);
	console.log('not used: ' + not_used_amount);
}

function show_cards_with_value(min,max,color){
	var card_count = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if((min == undefined || card_info['value'] >= min) && (max == undefined || card_info['value'] <= max) && (color == undefined || card_info['color'][0] == color))
		{
			console.log(card_id + ': ' + card_info['value']);
			card_count++;
		}
	});
	console.log('cards found: ' + card_count);
}

var namechanges = {

}

function check_card_namechanges(gamedata){
	$.each(gamedata['owned_cards'], function(owned_card_id, owned_amount){
		$.each(namechanges, function(old_name, new_name){
			if(owned_card_id == old_name)
			{
				if(gamedata['owned_cards'][new_name] == undefined)
				{
					gamedata['owned_cards'][new_name] = owned_amount;
				}
				else
				{
					gamedata['owned_cards'][new_name] += owned_amount;
				}
				delete gamedata['owned_cards'][old_name];
			}
		});
		if(all_available_cards[owned_card_id] == undefined)
		{
			console.log('deleting ' + owned_card_id);
			delete gamedata['owned_cards'][owned_card_id];
		}
	});
	$.each(gamedata['known_recipes'], function(owned_card_id, owned_amount){
		$.each(namechanges, function(old_name, new_name){
			if(owned_card_id == old_name)
			{
				if(gamedata['known_recipes'][new_name] == undefined)
				{
					gamedata['known_recipes'][new_name] = true;
				}
				delete gamedata['known_recipes'][old_name];
			}
		});
	});
	$.each(gamedata['decks'], function(owned_deck_id, deck){
		$.each(deck, function(card_id, card_amount){
			$.each(namechanges, function(old_name, new_name){
				if(card_id == old_name)
				{
					if(gamedata['decks'][owned_deck_id][new_name] == undefined)
					{
						gamedata['decks'][owned_deck_id][new_name] = card_amount;
					}
					delete gamedata['decks'][owned_deck_id][old_name];
				}
			});
		});
	});

	$.each(namechanges, function(old_name, new_name){

		//delete all_available_cards[old_name];
		
	});


	return gamedata;
}

var last_card_calculated = '';

function calc_next(show_rounded){
	if(gamedata['last_card_calculated'] != undefined)
	{
		last_card_calculated = gamedata['last_card_calculated'];
	}
	var found_next = false;
	var found_current = false;
	var last_card = '';
	$.each(all_available_cards, function(card_id, card_info){
		if((found_current == true && found_next == false) || (last_card_calculated == '' && found_next == false))
		{
			if(card_info['type'] != 'cardback' && card_info['pick_chance'] > 0)
			{
				found_next = card_id;
			}
		}
		if(card_id == last_card_calculated)
		{
			found_current = true;
		}
		last_card = card_id;
	});
	if(last_card_calculated == last_card)
	{
		gamedata['last_card_calculated'] = '';
		last_card_calculated = '';
		calc_next();
	}
	else
	{
		last_card_calculated = found_next;
		gamedata['last_card_calculated'] = last_card_calculated;
		saveToLocalStorage();
		console.log('--- ' + found_next + ' ---');
		calculate_card_time(found_next, true);
	}	
}

function calc_last(){
	if(gamedata['last_card_calculated'] != undefined)
	{
		console.log('--- ' + gamedata['last_card_calculated'] + ' ---');
		calculate_card_time(gamedata['last_card_calculated'], true);
	}
}

function calculate_card_time(card_id, show_calc, hero_version){
	var base_hero_hp = 2;
	var card = all_available_cards[card_id];
	if(hero_version != undefined && hero_version == true && card['hero_version'] != undefined)
	{
		card = card['hero_version'];
	}
	var calculated_time = 0;
	var calculated_time_on_top = 0;
	var min_level_costs = {};

	/*if(card['power'] > 0)
	{
		calculated_time += card['power'] * 2;
	}*/
	if(card['health'] > 0 && (hero_version == undefined || hero_version == false))
	{
		calculated_time += card['health'];
		if(show_calc!=undefined){console.log('health: ' + card['health'] + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}
	if(card['armor'] > 0 && (hero_version == undefined || hero_version == false))
	{
		calculated_time += card['armor'] / 2;
		if(show_calc!=undefined){console.log('armor: ' + card['armor'] + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}
	/*if(card['health'] > 0 && hero_version != undefined && hero_version == true)
	{
		calculated_time += base_hero_hp;
		if(show_calc!=undefined){console.log('health: ' + base_hero_hp + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}*/

	var skill_total_factor = 1;
	var average_hits = 0;
	var average_hit_cost = 0;

	$.each(card['abilities'], function(ability_id, ability_level){
		if(all_abilities[ability_id] == undefined){console.log(ability_id);}
		var ability = all_abilities[ability_id];
		var level_cost = 1;

		// CHECK USED
		/*all_abilities[ability_id]['used'] = true;
		$.each(ability['effects'], function(effect_id, effect_info){
			if((effect_info['type'] == 'grant_skill' || effect_info['type'] == 'set_skill') && all_abilities[effect_info['skill_id']] != undefined)
			{
				all_abilities[effect_info['skill_id']]['used'] = true;
			}
			if(effect_info['type'] == 'random_ability')
			{
				$.each(effect_info['ability_options'], function(option_id, ability_option){
					if(all_abilities[ability_option] != undefined)
					{
						all_abilities[ability_option]['used'] = true;
					}
				});
				
			}
		});*/
		

		if(ability['level_cost_cum'] != undefined)
		{
			var temp_level_cost = 0;
			for (var i = 1; i <= ability_level; i++) {
				temp_level_cost += i;
			}
			ability_level = temp_level_cost;
		}

		if(ability['average_hits'] != undefined)
		{
			if(ability['average_hits'] == 'ability_level')
			{
				average_hits += ability_level;
			}
			else
			{
				average_hits += ability['average_hits'];
			}
			if(show_calc!=undefined){console.log(ability_id + ': average_hits + ' + ability['average_hits'] + ' = ' + average_hits);}
		}
		if(ability['average_hit_cost_spell'] != undefined && card['type'] == 'spell')
		{
			average_hit_cost += ability['average_hit_cost_spell'] * ability_level;
			if(show_calc!=undefined){console.log(ability_id + ': average_hit_cost_spell + ' + (ability['average_hit_cost_spell'] * ability_level) + ' = ' + average_hit_cost);}
		}
		else
		{
			if(ability['average_hit_cost'] != undefined)
			{
				average_hit_cost += ability['average_hit_cost'] * ability_level;
				if(show_calc!=undefined){console.log(ability_id + ': average_hit_cost + ' + (ability['average_hit_cost'] * ability_level) + ' = ' + average_hit_cost);}
			}
		}
		
		if(ability['level_cost'] != undefined)
		{
			if(card['type'] == 'spell' && ability['level_cost_spell'] != undefined)
			{
				level_cost = ability['level_cost_spell'];
				if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_spell'] + ' points (spell)');}
			}
			else
			{
				if(card['type'] == 'artifact' && ability['level_cost_artifact'] != undefined)
				{
					level_cost = ability['level_cost_artifact'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_artifact'] + ' points (artifact)');}
				}
				else
				{
					level_cost = ability['level_cost'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost'] + ' points');}
				}
			}
			if(hero_version != undefined && hero_version == true && ability['level_cost_hero'] != undefined)
			{
				level_cost = ability['level_cost_hero'];
				if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_hero'] + ' points (hero)');}
			}
		}
		else
		{
			console.log(ability_id + ' needs a factor, defaulting to 1');
		}
		if(ability['cost_factor'] != undefined && card[ability['cost_factor']] != undefined && (ability['cost_factor'] != 'health' || hero_version == undefined || hero_version == false))
		{
			if(ability['cost_factor'] == 'power' && card['potential_power'] != undefined)
			{
				level_cost *= card['potential_power'];
				if(show_calc!=undefined){console.log(ability_id + ': x' + card[ability['cost_factor']] + '');}
			}
			else
			{
				level_cost *= card[ability['cost_factor']];
				if(show_calc!=undefined){console.log(ability_id + ': x' + card[ability['cost_factor']] + '');}
			}
		}
		$.each(ability['ability_level_cost_factors'], function(ability_cost_factor_id, ability_cost_factor_amount){
			if(card['abilities'][ability_cost_factor_id] != undefined)
			{
				level_cost *= (ability_cost_factor_amount * card['abilities'][ability_cost_factor_id]);
				if(show_calc!=undefined){console.log(ability_cost_factor_id + ': x' + ability_cost_factor_amount);}
			}
		});
		if(ability['cost_factor'] != undefined && card[ability['cost_factor']] != undefined && ability['cost_factor'] == 'health' && hero_version != undefined && hero_version == true)
		{
			level_cost *= base_hero_hp;
			if(show_calc!=undefined){console.log(ability_id + ': x' + base_hero_hp);}
		}
		if(ability['cost_factor'] != undefined && ability['cost_factor'] == 'full')
		{
			if(level_cost > 0)
			{
				skill_total_factor *= 1 + (ability_level * level_cost);
				if(show_calc!=undefined){console.log(ability_id + ' full: +' + (ability_level * level_cost) + '');}
				if(show_calc!=undefined){console.log(' factor = ' + skill_total_factor);}
			}
			else
			{
				skill_total_factor /= (1 + (ability_level * (level_cost * -1)));
				if(show_calc!=undefined){console.log(ability_id + ' full: /' + (1 + (ability_level * (level_cost * -1))) + '');}
				if(show_calc!=undefined){console.log(' factor = ' + skill_total_factor);}
			}
		}
		else
		{
			if(ability['cost_on_top'] == undefined)
			{
				var total_skill_cost = ability_level * level_cost;
				if(ability['min_cost'] != undefined && ability['min_cost'] > total_skill_cost)
				{
					if(show_calc!=undefined){console.log(ability_id + ' min cost: ' + (ability['min_cost']) + ' points');}
					if((/*test_mode == true || */show_calc!=undefined) && ability['min_cost'] > (ability_level + 1) * level_cost && (ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health')))
					{
						console.log(card_id + ' could use more ' + ability_id + ' (' + level_cost + '/' + ability['min_cost'] + ') min_cost');
					}
					total_skill_cost = ability['min_cost'];
				}
				calculated_time += total_skill_cost;
				if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points');}
			}
			else
			{
				var total_skill_cost = ability_level * level_cost;
				if(ability['min_cost'] != undefined && ability['min_cost'] > total_skill_cost)
				{
					if(show_calc!=undefined){console.log(ability_id + ' min cost: ' + (ability['min_cost']) + ' points');}
					if((/*test_mode == true || */show_calc!=undefined) && ability['min_cost'] > (ability_level + 1) * level_cost && (ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health')))
					{
						console.log(card_id + ' could use more ' + ability_id + ' (' + level_cost + '/' + ability['min_cost'] + ') min_cost');
					}
					total_skill_cost = ability['min_cost'];
				}
				calculated_time_on_top += total_skill_cost;
				if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points (on top)');}
			}
		}
		if(ability['cost_adjustment'] != undefined)
		{
			calculated_time += ability['cost_adjustment'];
			if(show_calc!=undefined){console.log('adjustment: ' + ability['cost_adjustment']);}
		}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
		if(ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health'))
		{
			min_level_costs[ability_id] = level_cost;
		}

	});

	if(average_hits > 0 && average_hit_cost > 0)
	{
		calculated_time += average_hits * average_hit_cost;
		if(show_calc!=undefined){console.log('average_hits: ' + average_hits);}
		if(show_calc!=undefined){console.log('average_hit_cost: ' + average_hit_cost);}
		if(show_calc!=undefined){console.log('total_hit_cost: ' + (average_hits * average_hit_cost));}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	calculated_time *= skill_total_factor;
	if(skill_total_factor != 1)
	{
		if(show_calc!=undefined){console.log('total_factor: ' + skill_total_factor);}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	if(calculated_time_on_top > 0)
	{
		calculated_time += calculated_time_on_top;
		if(show_calc!=undefined){console.log('total on top = ' + calculated_time_on_top);}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	/*if(count_object(card['color']) == 1 && card['color'][0] == 'colorless' && (hero_version == undefined || hero_version == false))
	{
		calculated_time += 1;
		if(show_calc!=undefined){console.log('colorless: +1');}
	}*/

	if(card['type'] == 'structure' /*&& card['power'] != false*/)
	{
		calculated_time += 0.5;
		if(show_calc!=undefined){console.log('structure: +0.5');}
	}

	if(count_object(card['color']) == 2)
	{
		calculated_time -= 1;
		if(show_calc!=undefined){console.log('duocolor: -1');}
	}

	if(card['type'] == 'artifact' || card['type'] == 'spell')
	{
		if(card['type'] == 'spell')
		{
			/*calculated_time /= 3;
			if(show_calc!=undefined){console.log('spell: /3 = ' + calculated_time);}*/
			//calculated_time -= 4;
			/*calculated_time -= 5;
			if(show_calc!=undefined){console.log('spell: -5 = ' + calculated_time);}*/
			calculated_time = calculated_time / 2;
			if(show_calc!=undefined){console.log('spell: /2 = ' + calculated_time);}
		}
		if(card['type'] == 'artifact' && (card['selfdestructs'] == undefined || card['selfdestructs'] == false))
		{
			calculated_time *= 2;
			if(show_calc!=undefined){console.log('artifact: x2 = ' + calculated_time);}
		}
	}
	else
	{
		if(hero_version == undefined || hero_version == false)
		{
			calculated_time -= 6;
			if(show_calc!=undefined){console.log('-6 = ' + calculated_time);}
		}
	}

	/*if(card['type'] == 'spell')
	{
		calculated_time *= 0.5;
		if(show_calc!=undefined){console.log('spell: x0.25 = ' + calculated_time);}
	}*/

	if(calculated_time !== false && calculated_time < 0 && card['pick_chance'] > 0)
	{
		console.log(card_id + ' cost = ' + calculated_time);
		//calculated_time = 0;
	}
	if(calculated_time < 0){calculated_time = 0;}
	if(calculated_time !== false && calculated_time < 1 && card['verified'] == undefined && card['pick_chance'] > 0)
	{
		console.log(card_id + ' cost = ' + calculated_time);
		//calculated_time = 0;
	}

	if(calculated_time >= 1 && (hero_version == undefined || hero_version == false))
	{
		var high_card_cost_correction = 1 + ((calculated_time - 1) / 50);
		calculated_time = calculated_time / high_card_cost_correction;
		if(show_calc!=undefined){console.log('expensive card correction: /' + high_card_cost_correction + ' = ' + calculated_time);}
	}

	/*if(card['type'] == 'spell' && calculated_time < 1)
	{
		calculated_time = 1;
		if(show_calc!=undefined){console.log('spell correction: 1');}
	}*/

	if(/*test_mode == true || */show_calc!=undefined)
	{
		var cost_left = Math.ceil(calculated_time) - calculated_time;
		var cost_plus = calculated_time - Math.floor(calculated_time);
		var hero_text = '';
		if(hero_version != undefined && hero_version == true)
		{
			hero_text = ' hero';
		}
		if(cost_left > 0 && (hero_version == undefined || hero_version == false))
		{
			//console.log(min_level_costs);
			$.each(min_level_costs, function(ability_key, min_level_cost){
				if(min_level_cost <= cost_left && min_level_cost > 0)
				{
					console.log(card_id + hero_text + ' could use more ' + ability_key + ' (' + min_level_cost + '/' + cost_left + ')');
				}
				if(min_level_cost <= (cost_plus * -1) && min_level_cost < 0)
				{
					console.log(card_id + hero_text + ' could use more ' + ability_key + ' (' + min_level_cost + '/' + cost_plus + ')');
				}
			});
		}
		
	}

	return calculated_time;
}

function correct_card_time(time){
	var corrected_time = Math.ceil(time / (1 + (time / 60)) );
	return corrected_time;
}

function show_time_correction(fromtime, totime){
	if(fromtime == undefined){fromtime = 1;}
	if(totime == undefined){totime = 10;}
	for (var i = fromtime; i <= totime; i++) {
		console.log(i + ' => ' + correct_card_time(i));
	}
}

var ideal_hero_hp = 40;



function check_card(card_id){
	if(all_available_cards[card_id] != undefined)
	{
		card_info = all_available_cards[card_id];
		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			card_info['raw_time'] = calculate_card_time(card_id);
			card_info['time'] = card_info['raw_time'];
		}
		if(card_info['effects'] == undefined)
		{
			card_info['effects'] = {};
		}
		if(card_info['hero_version'] != undefined)
		{
			if(card_info['hero_version']['name'] == undefined){card_info['hero_version']['name'] = card_info['name'];};
			if(card_info['hero_version']['type'] == undefined){card_info['hero_version']['type'] = card_info['type'];};
			if(card_info['hero_version']['subtypes'] == undefined){card_info['hero_version']['subtypes'] = card_info['subtypes'];};
			if(card_info['hero_version']['image'] == undefined){card_info['hero_version']['image'] = card_info['image'];};
			if(card_info['hero_version']['image_position'] == undefined && card_info['image_position'] != undefined){card_info['hero_version']['image_position'] = card_info['image_position'];};
			var hero_time = calculate_card_time(card_id, undefined, true);
			//var hero_hp = 50 - ((hero_time - 6) * 5);
			var hero_hp = ideal_hero_hp / (hero_time / 6);
			if(hero_hp > ideal_hero_hp && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			if(hero_hp < ideal_hero_hp/2 && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			card_info['hero_version']['health'] = Math.ceil(hero_hp);
			if(card_info['hero_version']['theme'] != undefined)
			{
				if(match_array_values(card_info['hero_version']['theme'], 'muscle') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'muscle';
				}
				/*if(match_array_values(card_info['hero_version']['theme'], 'defense') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'defense';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'aoe') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'aoe';
				}*/
			}
		}

		if(card_info['theme'] == undefined){card_info['theme'] = {};};
		if(card_info['craft_theme'] == undefined || card_info['craft_theme'][0] == undefined){card_info['craft_theme'] = ['type_' + card_info['type']];};
		card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'type_' + card_info['type'];

		$.each(card_info['subtypes'], function(subtype_id, current_subtype){
			card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'subtype_' + current_subtype;
			card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = 'subtype_' + current_subtype;
		});

		$.each(card_info['abilities'], function(ability_id, ability_level){
			//card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_id + '_ability_name';
			$.each(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name + '_ability'], card_info['theme']) == false)
				{
					card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = '' + ability_subtype_name + '_ability';
				}
			});
			$.each(all_abilities[ability_id]['ability_craft_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name /*+ '_ability'*/], card_info['craft_theme']) == false && (match_array_values(not_craft_themes, ability_subtype_name) == false))
				{
					card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_subtype_name /*+ '_ability'*/;
				}
			});
			
		});

		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			/*if(card_info['time'] < 40 && correct_card_time(card_info['time'] + 1) == correct_card_time(card_info['time']))
			{
				console.log(card_id + ' too weak');
				show_time_correction(card_info['time'],card_info['time']);
			}
			card_info['time'] = correct_card_time(card_info['time']);*/
			//card_info['time'] = Math.ceil(card_info['time'] / (1 + (card_info['time'] / 60)) );
			card_info['time'] = Math.ceil(card_info['time']);
		}
	    if(card_info['value'] == undefined)
	    {
	    	//console.log(card_info['name']);
	    	card_info['value'] = calculate_card_value(card_id);
	    }
	    /*var used_in_recipes = 0;
	    $.each(all_available_cards, function(other_card_id, other_card_info){
	    	if(other_card_info['recipe'] != undefined && other_card_info['recipe'][card_id] != undefined)
	    	{
	    		used_in_recipes++;
	    	}
	    });
	    card_info['used_in_recipes'] = used_in_recipes;*/
	    if(card_info['old'] == true && card_info['time'] < 1 && card_info['time'] !== false && card_info['pick_chance'] > 0)
	    {
	    	console.log('deleting ' + card_id);
	    	delete all_available_cards[card_id];
	    }
	}
}


var card_check_timeouts = {};

function check_all_cards(){
	
	var cards_checked = 0;
	$.each(all_available_cards, function(card_id, card_info){
	    /*if(card_info['version'] == undefined || card_info['version'] < 2)
	    {
	    	console.log(card_info['name'] + ' is not version 2');
	        all_available_cards[card_id]['time'] += 2;
	        if(all_available_cards[card_id]['time'] > 0)
	        {
	            all_available_cards[card_id]['time'] -= Math.floor(all_available_cards[card_id]['time'] / 5);
	        }
	    }*/
	    cards_checked++;
	    var card_checking_progress = Math.floor((cards_checked / total_available_card_count) * 100);
	   	card_check_timeouts[cards_checked] = setTimeout(function(){
		    check_card(card_id);
			$('.card_checking_progress').html(card_checking_progress + '%');
		},cards_checked / loading_speed);
	});
	//remove_unused_abilities();
}

//check_all_cards();

var all_available_boosts = {};
var all_card_backs = {};
var random_loot_drops = {};

$.each(all_available_cards, function(card_id, card_info){
	if(card_info['basic_reward'] != undefined && card_info['basic_reward'] == true && random_loot_drops[card_id] == undefined /*match_array_values(card_id, random_loot_drops) == false*/)
	{
		random_loot_drops[card_id] = 1 / /*sqr*/(card_info['value'] * (1 + (card_info['value'] / 10)));
	}
	if(card_info['type'] == 'consumable' && card_info['reward'] != undefined && card_info['reward']['type'] != undefined && card_info['reward']['type'] == 'boost')
	{
		all_available_boosts[card_id] = card_info['boost_pick_chance'];
	}

	if(card_info['type'] == 'cardback')
	{
		all_card_backs[card_id] = card_info['image'];
	}

	if(card_info['pick_chance'] == undefined)
	{
		card_info['pick_chance'] = 0;
	}

	var no_card_back_yet = true;
	$.each(all_card_backs, function(card_back_id, card_back_image){
		if(card_back_image == card_info['image'])
		{
			no_card_back_yet = false;
		}
	});

	if(no_card_back_yet == true && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact' || card_info['type'] == 'currency'))
	{
		all_available_cards['card_back_' + card_id] = {
			name: 				'card back: ' + card_info['name'],
			//version: 			2,
			non_tradable: 		card_info['non_tradable'],
			value: 				card_info['value'] * 25,
			type: 				'cardback',
			color: 				card_info['color'],
			pick_chance: 		0,
			months_available: 	card_info['months_available'],
			time: 				0,
			image: 				card_info['image'],
			power: 				false,
			armor: 				false,
			health: 			false,
			abilities: 			{},
			reward: 			{
				type: 			'card_back',
				card_back_id: 	'card_back_' + card_id,
				description: 	'Collects this card back.',
				amount_used: 	[1],
			},
		};

		if(card_info['card_back_non_tradable'] == undefined || card_info['card_back_non_tradable'] == true)
		{
			all_available_cards['card_back_' + card_id]['non_tradable'] = true;
		}

		all_card_backs['card_back_' + card_id] = card_info['image'];
	}

});

all_available_cards = sortObj(all_available_cards);
all_card_backs = sortObj(all_card_backs);

function learn_all_recipes(){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function check_no_achievement_yet(card_theme, max_shown){
	var achievable_cardbacks = {};
	var shown = 0;
	$.each(all_achievements, function(achievement_id, achievement_info){
		$.each(achievement_info['rewards'], function(rewards_id, rewards_info){
			achievable_cardbacks[rewards_info['reward_id']] = true;
		});
	});
	$.each(all_available_cards, function(card_id, card_info){
		if((max_shown == undefined || max_shown > shown) && achievable_cardbacks['card_back_' + card_id] == undefined && (card_theme == undefined || match_array_values(card_theme, card_info['theme'])))
		{
			shown++;
			console.log(card_id);
		}
	});
}

function get_all_hero_themes(){
	var all_hero_themes = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			$.each(card_info['hero_version']['theme'], function(theme_id, theme_name){
				if(all_hero_themes[theme_name] == undefined)
				{
					all_hero_themes[theme_name] = 0;
				}
				all_hero_themes[theme_name]++;
			});
			
		}
	});
	return all_hero_themes;
}

function get_all_aoe_themes(){
	var all_aoe_themes = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(['aoe'], card_info['theme']))
		{
			$.each(card_info['theme'], function(theme_id, theme_name){
				if(all_aoe_themes[theme_name] == undefined)
				{
					all_aoe_themes[theme_name] = 0;
				}
				all_aoe_themes[theme_name]++;
			});
			
		}
	});
	return all_aoe_themes;
}

function check_no_aoe_yet(show_found){
	/*var all_hero_themes = get_all_hero_themes();
	$.each(all_hero_themes, function(theme, theme_count){
		var found_aoe = false;
		$.each(all_available_cards, function(card_id, card_info){
			if(match_array_values(theme, card_info['theme']) && match_array_values('aoe', card_info['theme']))
			{
				if(show_found != undefined && show_found == true){console.log(theme + ' aoe found');}
				found_aoe = true;
			}
		});
		if(found_aoe == false)
		{
			console.log(theme);
		}
	});*/
	/*var all_aoe_themes = get_all_aoe_themes();
	$.each(all_aoe_themes, function(theme, theme_count){
		var found_aoe = false;
		$.each(all_available_cards, function(card_id, card_info){
			var hero_can_use_aoe = false;
			if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
			if(match_array_values(theme, card_info['hero_version']['theme']))
			{
				if(show_found != undefined && show_found == true){console.log(theme + ' aoe found');}
				found_aoe = true;
			}
		});
		if(found_aoe == false)
		{
			console.log(theme);
		}
	});*/
	var all_aoe_themes = get_all_aoe_themes();
	var good_aoe_themes = {};
	var incomplete_count = 0;
	$.each(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			$.each(all_aoe_themes, function(theme, theme_count){
				if(theme != 'aoe' && match_array_values(theme, card_info['hero_version']['theme']))
				{
					hero_can_use_aoe = true;
					if(show_found != undefined && show_found == true){console.log(card_id + ' uses ' + theme + ' aoe');}
				}
			});
			if(hero_can_use_aoe == false)
			{
				incomplete_count++;
				console.log('Needs aoe: ' + card_id);
				/*$.each(card_info['hero_version']['theme'], function(them_id, theme_name){
					if(theme_name != 'muscle' && theme_name != 'defense' && theme_name != 'aoe')
					{
						if(good_aoe_themes[theme_name] == undefined)
						{
							good_aoe_themes[theme_name] = 0;
						}
						good_aoe_themes[theme_name]++;
					}
				});*/
			}
		}
	});
	console.log(all_aoe_themes);
	console.log(incomplete_count);

}

var all_card_themes = {
	races:[
		//'subtype_dwarf',
		'subtype_elf',
		//'subtype_fairy',
		//'subtype_goblin',
		'subtype_golem',
		'subtype_human',
		//'subtype_jotnar',
		//'subtype_mermaid',
		//'subtype_wanton',
	],
	types:[
		'subtype_warrior',
		'subtype_rogue',
		//'subtype_royal',
		//'subtype_holy',
		'subtype_mage',
	],
	aflictions:[
		'burn_ability',
		'poison_ability',
		'curse_ability',
		'doom_ability',
	],
	movement:[
		//'move_ability',
		'seek_ability',
		'run_away_ability',
		'guard_ability',
		'movement_ability',
	],
	evasion:[
		//'evasion_ability',
		'flying_ability',
		'grant_stealth_ability',
		'evade_ability',
	],
	reduction:[
		'plated_ability',
		//'shield_ability',
		//'resist_fire_ability',
		'resist_magic_ability',
	],
	deck_control:[
		'draw_cards_ability',
		'hasten_ability',
		'slow_ability',
		'discard_enemy_ability',
	],
	elemental:[
		'air_ability',
		//'earth_ability',
		'fire_ability',
		'water_ability',
		'cold_ability',
		'elemental_ability',
	],
	special:[
		'reap_ability',
		//'snipe_ability',
		'stun_ability',
		'empower_ally_ability',
		'enrage_ability',
		//'gain_energy_ability',
		//'restore_hero_ability',
	],
}

function count_card_themes(themes, show_me){
	var lowest = {
		key: '',
		amount: 0,
	};
	var lowest_id = '';
	if(themes != undefined && typeof(themes) == 'string' && all_card_themes[themes] != undefined){themes = all_card_themes[themes];}
	if(themes == undefined){themes = all_card_themes;}
	$.each(themes, function(theme_key, theme_id){
		var temp_lowest = 0;
		if(typeof(theme_id) == 'string')
		{
			temp_lowest = count_card_theme(theme_id, show_me);
			//console.log(lowest);
			if(temp_lowest > 0 && (temp_lowest < lowest['amount'] || lowest['amount'] == 0))
			{
				lowest['key'] = theme_id;
				lowest['amount'] = temp_lowest;
			}
			
		}
		else
		{
			if(show_me != undefined){console.log('---' + theme_key + '---');}
			//count_card_themes(theme_id);
			var returned_lowest = count_card_themes(theme_id, show_me);
			if(returned_lowest['amount'] > 0 && (returned_lowest['amount'] < lowest['amount'] || lowest['amount'] == 0))
			{
				lowest['key'] = returned_lowest['key'];
				lowest['amount'] = returned_lowest['amount'];
			}
		}
		
	});
	return lowest;
}

function count_card_theme(theme, show_me){
	var total_theme_count = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(card_info['theme'], theme)){
			total_theme_count++;
		};
	});
	if(show_me != undefined){console.log(theme + ': ' + total_theme_count)};
	return total_theme_count;
}

function count_all_card_themes(){
	var all_card_themes = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined){
			$.each(card_info['theme'], function(theme_id, theme_name){
				if(theme_name != undefined && theme_name.replaceAll('type_','') == theme_name)
				{
					if(all_card_themes[theme_name] == undefined){all_card_themes[theme_name] = 0;}
					all_card_themes[theme_name]++;
				}
			});
		};
	});
	return all_card_themes;
}

function count_card_times(){
	var card_times = {};
	$.each(all_available_cards, function(card_id, card_info){
		if((card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			if(card_times[card_info['time']] == undefined){card_times[card_info['time']] = 0;}
			card_times[card_info['time']]++;
		}
	});
	return card_times;
}

function count_card_subtypes(type){
	var card_subtypes = {};
	$.each(all_available_cards, function(card_id, card_info){
		if((type == undefined || card_info['type'] == type) && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			$.each(card_info['subtypes'], function(useless_key, current_subtype){
				if(card_subtypes[current_subtype] == undefined){card_subtypes[current_subtype] = 0;}
				card_subtypes[current_subtype]++;
			});
		}
	});
	return card_subtypes;
}

function show_card_times(card_time){
	if(card_time != undefined)
	{
		$.each(all_available_cards, function(card_id, card_info){
			if((card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
			{
				if(card_info['time'] == card_time)
				{
					console.log(card_id);
				}
			}
		});
	}
}

var default_card = {
		name: 				'',
		type: 				'',
		subtypes: 			[],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/image.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		verified: 			true,
		hero_version: 			{
			theme: 				[],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{},
			verified: 			true,
		},
		quote: '\"\"',
}

function get_stat_based_on_type_and_theme(stat, type, themes, hero_version){
	var possible_powers = {};
	$.each(all_available_cards, function(card_id, card_info){
		var matches = false;
		if(themes == undefined || count_object(themes) == 0)
		{
			matches = true;
		}
		else
		{
			$.each(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					$.each(themes, function(theme_key_2, theme_name_2){
						if(theme_name.indexOf(theme_name_2) !== -1)
						{
							matches = true;
						}
					});
				}
			});
		}
		if(type != undefined && card_info['type'] != type)
		{
			matches = false;
		}
		if(matches == true)
		{
			if(hero_version == undefined || hero_version == false)
			{
				if(possible_powers[card_info[stat]] == undefined)
				{
					possible_powers[card_info[stat]] = 0;
				}
				possible_powers[card_info[stat]] += 1;
			}
			else
			{
				if(card_info['hero_version'] != undefined)
				{
					if(possible_powers[card_info['hero_version'][stat]] == undefined)
					{
						possible_powers[card_info['hero_version'][stat]] = 0;
					}
					possible_powers[card_info['hero_version'][stat]] += 1;
				}
			}
		}
	});
	var chosen_power = (get_random_key_from_object_based_on_num_value(possible_powers));
	if(count_object(possible_powers) < 1){chosen_power = 'false';}
	return chosen_power;
}

function get_skills_based_on_type_and_themes(type, themes, hero_version){
	var possible_skills = {};
	var matched_cards_count = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['type'] == type || type == undefined)
		{
			var matches = 0;
			$.each(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					$.each(themes, function(theme_key_2, theme_name_2){
						if(theme_name.indexOf(theme_name_2) !== -1)
						{
							matches += 1;
						}
					});
				}
			});
			if(matches > 0)
			{
				if(hero_version == undefined || hero_version == false)
				{
					$.each(card_info['abilities'], function(ability_id, ability_level){
						if(possible_skills[ability_id] == undefined)
						{
							possible_skills[ability_id] = 0;
						}
						possible_skills[ability_id] += matches;
					});
					matched_cards_count += matches;
				}
				else
				{
					if(card_info['hero_version'] != undefined)
					{
						$.each(card_info['hero_version']['abilities'], function(ability_id, ability_level){
						if(possible_skills[ability_id] == undefined)
						{
							possible_skills[ability_id] = 0;
						}
						possible_skills[ability_id] += matches;
					});
					matched_cards_count += matches;
					}
				}
			}
		}
	});
	$.each(all_abilities, function(ability_id, ability_info){
		var matches = 0;
		$.each(ability_info['ability_subtypes'], function(theme_key, theme_name){
			if(theme_name != undefined)
			{
				$.each(themes, function(theme_key_2, theme_name_2){
					if(theme_name.indexOf(theme_name_2) !== -1)
					{
						matches += 1;
					}
				});
			}
		});
		if(matches > 0)
		{
			if(possible_skills[ability_id] == undefined)
			{
				possible_skills[ability_id] = 0;
			}
			possible_skills[ability_id] += matches;
			matched_cards_count += matches;
		}
	});
	var chosen_skills = {};
	$.each(possible_skills, function(skill_id, skill_count){
		if(Math.random() * matched_cards_count < skill_count || skill_count > matched_cards_count / 2)
		{
			chosen_skills[skill_id] = 1;
		}
	});
	return chosen_skills;
}

function get_name_parts(theme, type){
	var all_name_parts = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && match_array_values(theme, card_info['theme']) > 0 && (type == undefined || card_info['type'] == type))
		{
			var current_card_name = card_info['name'];
			var current_name_parts = current_card_name.split(' ');
			$.each(current_name_parts, function(useless_key, name_part){
				if(all_name_parts[name_part] == undefined){all_name_parts[name_part] = 0;}
				all_name_parts[name_part]++;
			});
		}
	});
	return all_name_parts;
}

function generate_card(name, subtypes, themes, type, image){
	var new_card = true_copyobject(default_card);
	if(image != undefined)
	{
		new_card['image'] = 'cards/' + image + '.jpg';
	}
	if(name == undefined){name = 'new card';}
	if(name != undefined){new_card['name'] = name;}

	if(type == undefined)
	{
		var all_types = {artifact:true,spell:true,creature:true,structure:true};
		type = get_random_key_from_object(all_types);
	}
	if(type != undefined){new_card['type'] = type;}
	
	if(subtypes == undefined)
	{
		var all_used_subtypes = count_card_subtypes(new_card['type']);
		var chosen_subtype = get_random_key_from_object_based_on_num_value(all_used_subtypes);
		//console.log(all_used_subtypes);
		subtypes = [chosen_subtype];
		//console.log('subtype: ' + chosen_subtype);
	}
	if(subtypes != undefined){new_card['subtypes'] = subtypes;}

	if(themes == undefined)
	{
		if(Math.random() < 1.5)
		{
			var all_card_themes = count_all_card_themes();
			var chosen_theme = get_random_key_from_object(all_card_themes);
			themes = [chosen_theme];
			console.log('theme: ' + chosen_theme);
		}
		else
		{
			var least_used_theme = count_card_themes();
			themes = [least_used_theme['key']];
			console.log('theme: ' + least_used_theme['key']);
		}
	}

	var all_name_parts = get_name_parts(themes, type);
	if(count_object(all_name_parts) < 3){all_name_parts = get_name_parts(themes);}
	//console.log(all_name_parts);
	if(count_object(all_name_parts) > 1)
	{
		var first_name_part = get_random_key_from_object(all_name_parts);
		delete all_name_parts[first_name_part];
		new_card['name'] = first_name_part + ' ' + get_random_key_from_object(all_name_parts);
	}

	var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, false);
	if(type == 'creature' && chosen_power == 'false')
	{
		chosen_power = get_stat_based_on_type_and_theme('power',type, undefined, false);
	}
	if(chosen_power != 'false'){new_card['power'] = parseInt(chosen_power);}
	var chosen_health = get_stat_based_on_type_and_theme('health',type, themes, false);
	if((type == 'creature' || type == 'structure') && chosen_health == 'false')
	{
		chosen_health = get_stat_based_on_type_and_theme('health',type, undefined, false);
	}
	if(chosen_health != 'false'){new_card['health'] = parseInt(chosen_health);}
	var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, false);
	if(count_object(chosen_abilities) == 0){chosen_abilities = get_skills_based_on_type_and_themes(undefined, themes, false);}
	$.each(chosen_abilities, function(ability_id, ability_level){
		new_card['abilities'][ability_id] = 1;
	});

	if(type == 'creature' || type == 'structure')
	{
		var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, true);
		if(chosen_power != 'false'){new_card['hero_version']['power'] = parseInt(chosen_power);}
		
		$.each(subtypes, function(subtypes_id, subtype_name){
			new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = 'subtype_' + subtype_name;
		});
		var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, true);
		$.each(chosen_abilities, function(ability_id, ability_level){
			new_card['hero_version']['abilities'][ability_id] = 1;
			var temp_ability_subtypes = {};
			$.each(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_key, ability_subtype_name){
				temp_ability_subtypes[ability_subtype_name] = true;
			});
			$.each(temp_ability_subtypes, function(ability_subtype_name, ability_subtype_count){
				new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = ability_subtype_name + '_ability';
			});
			
		});
		//new_card['hero_version']['theme'] = themes;
		
	}
	else
	{
		delete new_card['hero_version'];
	}


	$('.upgrades_container').html(name.replaceAll(' ','_') + ':{<br/>' + parse_card_object(new_card) + '},');
	all_available_cards['temp_card'] = true_copyobject(new_card);
	check_card('temp_card');
	console.log(new_card);
	show_card_details('temp_card');
}

function parse_card_object(card, newline){
	var parsed_object = '';
	$.each(card, function(stat_id, stat){
		var parsed_stat_id = parseInt(stat_id);
		if(parsed_stat_id != stat_id)
		{
			parsed_object+= stat_id + ': ';
		}
		if(typeof(stat) == 'object')
		{
			if(stat_id == 'hero_version')
			{
				parsed_object+= '{<br/>' + parse_card_object(stat, true) + '},';
			}
			else
			{
				if(stat[0] == undefined && stat[1] == undefined)
				{
					parsed_object+= '{' + parse_card_object(stat, false) + '},';
				}
				else
				{
					parsed_object+= '[' + parse_card_object(stat, false) + '],';
				}
			}
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
		if(typeof(stat) == 'number')
		{
			parsed_object+= stat + ', ';
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
		if(typeof(stat) == 'string')
		{
			parsed_object+= '\'' + stat + '\', ';
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
	});
	return parsed_object;
}

function show_peasant_recipes(){
	var prec = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['recipe']['peasant'] != undefined && count_object(card_info['recipe']) < 2)
		{
			console.log(card_id);
			prec++;
		}
	});
	console.log(prec);
}

function show_no_recipe(){
	var prec = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] == undefined && card_info['pick_chance'] > 0)
		{
			console.log(card_id);
			prec++;
		}
	});
	console.log(prec);
}

function generate_all_recipes(){
	var cards_checked = 0;
	$.each(all_available_cards, function(card_id, card_info){
		cards_checked++;
	    var card_checking_progress = Math.floor((cards_checked / total_available_card_count) * 100);
	   	card_check_timeouts[cards_checked] = setTimeout(function(){
		
			if(card_info['recipe'] == undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				var card_recipe = generate_recipe(card_id);
				if(count_object(card_recipe) > 0)
				{
					card_info['recipe'] = card_recipe;
				}
			}

			if(card_info['recipe'] != undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				all_available_cards['recipe_' + card_id] = {
					name: 				'recipe: ' + card_info['name'],
					version: 			2,
					non_tradable: 		true,
					value: 				card_info['value'],
					type: 				'recipe',
					color: 				['yellow'],
					pick_chance: 		0,
					months_available: 	card_info['months_available'],
					time: 				0,
					image: 				card_info['image'],
					power: 				false,
					armor: 				false,
					health: 			false,
					abilities: 			{auto_learn: 1},
					recipe: 			card_id,
				};
			}
			$('.recipe_generation_progress').html(card_checking_progress + '%');
		},cards_checked / loading_speed);
	});
	
}

function generate_recipe(card_id, cost_left, current_recipe, subtypes_left){
	var original_cost_left = cost_left + 0;
	if(all_available_cards[card_id] != undefined)
	{
		var current_card = all_available_cards[card_id];
		var possible_costs = {};
		var best_match = 0;
		var best_match_id = '';
		var recipe_size = count_object(current_recipe);
		if(cost_left == undefined)
		{
			cost_left = current_card['value'] + 0;
		}
		if(current_recipe == undefined)
		{
			current_recipe = {};
		}
		if(subtypes_left == undefined || count_object(subtypes_left) == 0)
		{
			subtypes_left = true_copyobject(current_card['subtypes']);
		}
		$.each(subtypes_left, function(subtype_key, current_subtype){
			if(current_subtype == 'human')
			{
				delete subtypes_left[subtype_key];
			}
		});
		
		$.each(all_available_cards, function(cost_id, cost_info){
			if(/*cost_id != 'peasant' && */(cost_info['value'] < cost_left || (cost_info['value'] <= cost_left && recipe_size > 0)) /*&& (recipe_size > 0 || cost_info['value'] > all_available_cards[card_id]['value'] * 0.4 || all_available_cards[card_id]['value'] < 10)*/ && (recipe_size > 0 || cost_info['value'] <= all_available_cards[card_id]['value'] * 0.9 || all_available_cards[card_id]['value'] < 10) && cost_info['pick_chance'] > 0 && current_recipe[cost_id] == undefined)
			{
				var matched_amount = (match_array_values(current_card['craft_theme'], cost_info['craft_theme'], true));
				//matched_amount = Math.sqrt(matched_amount);
				matched_amount = matched_amount * 1 /*+ (matched_amount / 4)*/;
				if(recipe_size == 0){matched_amount *= 2;}
				if(cost_info['type'] == all_available_cards[card_id]['type']){
					matched_amount *= 1.5;
					if(matched_amount < 0.5)
					{
						matched_amount = 0.5;
					}
				}
				if(cost_info['type'] != all_available_cards[card_id]['type'] && (cost_info['type'] == 'artifact' || all_available_cards[card_id]['type'] == 'artifact'))
				{
					matched_amount *= 5;
				}
				//if(recipe_size > 0 && cost_info['value'] < cost_left * 0.5){matched_amount /= 2;}
				/*var value_match = (cost_info['value'] / cost_left) + 0.2;
				if(value_match > 1){value_match = 1;}
				matched_amount *= value_match;*/
				var subtype_match = match_array_values(subtypes_left, cost_info['subtypes'], true) * 1;
				//if(match_array_values('human', cost_info['subtypes']) && match_array_values('human', subtypes_left) && count_object(cost_info['subtypes']) > 1){subtype_match -= 1.9;}
				if(cost_info['subtype_craft_factor'] != undefined){subtype_match *= cost_info['subtype_craft_factor'];}
				if(current_card['subtype_craft_factor'] != undefined){subtype_match *= current_card['subtype_craft_factor'];}
				//subtype_match = sqr(subtype_match);
				if(subtype_match > 0)
				{
					if(matched_amount < 1){matched_amount = 1;}
					if(recipe_size >= 0 && recipe_size < 3){subtype_match *= 2;}
					matched_amount *= (subtype_match + 0);
					if(matched_amount < subtype_match){matched_amount = subtype_match;}
				}
				if(matched_amount > 0 && cost_info['used_in_recipes'] != undefined && cost_info['used_in_recipes'] > 0)
				{
					matched_amount /= sqr(sqr(1 + (cost_info['used_in_recipes'] * recipe_size)));
				}
				if(matched_amount >= /*sqr*/(recipe_size * 0.25) || (count_object(current_recipe) < 2 && matched_amount > 0))
				{
					possible_costs[cost_id] = matched_amount;
				
					if(matched_amount > best_match || (all_available_cards[best_match_id] != undefined && matched_amount == best_match && all_available_cards[cost_id]['value'] > all_available_cards[best_match_id]['value']))
					{
						best_match = matched_amount;
						best_match_id = cost_id;
					}
				}
			}
		});
		if(best_match_id != '' /*&& best_match_id != 'peasant'*/)
		{
			var cost_amount = Math.floor((cost_left) / all_available_cards[best_match_id]['value']);
			if(cost_amount >= 2 && recipe_size < 2 && cost_left > 4)
			{
				cost_amount = Math.floor((cost_left / 2) / all_available_cards[best_match_id]['value']);
			}
			/*if(cost_amount > 10)
			{
				cost_amount = 10;
			}*/
			$.each(subtypes_left, function(subtype_id, subtype_name){
				if(match_array_values(subtype_name, all_available_cards[best_match_id]['subtypes']))
				{
					delete subtypes_left[subtype_id];
				}
			});
			current_recipe[best_match_id] = cost_amount;
			if(all_available_cards[best_match_id]['used_in_recipes'] == undefined){all_available_cards[best_match_id]['used_in_recipes'] = 0;}
			all_available_cards[best_match_id]['used_in_recipes']++;
			cost_left -= all_available_cards[best_match_id]['value'] * cost_amount;
			if(cost_left > all_available_cards[card_id]['value'] / 10)
			{
				current_recipe = generate_recipe(card_id, cost_left, current_recipe, subtypes_left);
			}
		}
		else
		{
			/*if(count_object(current_recipe) == 1)
			{
				$.each(current_recipe, function(recipe_cost_id, recipe_cost_amount){
					current_recipe[recipe_cost_id] = Math.floor(all_available_cards[card_id]['value'] / all_available_cards[recipe_cost_id]['value']);
					var value_left = all_available_cards[card_id]['value'] - (current_recipe[recipe_cost_id] * all_available_cards[recipe_cost_id]['value']);
					if(current_recipe[recipe_cost_id] == 1 && value_left > 1)
					{
						current_recipe['peasant'] = Math.ceil(value_left / 2);
						all_available_cards['peasant']['used_in_recipes']++;
					}
				});
			}*/
			if(count_object(current_recipe) == 0 && cost_left > 0 && current_recipe['peasant'] == undefined && card_id != 'peasant' && all_available_cards[card_id]['value'] < 10)
			{
				current_recipe['peasant'] = Math.ceil(cost_left / 1.25);
				if(all_available_cards['peasant']['used_in_recipes'] == undefined){all_available_cards['peasant']['used_in_recipes'] = 0;}
				all_available_cards['peasant']['used_in_recipes']++;
			}
			
		}
		return current_recipe;
	}
}

function find_cards_not_used_in_recipe(value_max, value_min){
	if(value_max == undefined){value_max = 100000000;}
	if(value_min == undefined){value_min = 0;}
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && (card_info['used_in_recipes'] == undefined || card_info['used_in_recipes'] == 0) && card_info['value'] < value_max && card_info['value'] > value_min)
		{
			console.log(card_id + ', value: ' + card_info['value']);
		}
	});
}