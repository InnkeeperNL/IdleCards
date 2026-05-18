/*
Combiner:{
  combine:"/abilities.js",
  combine:"/cards.js",
  combine:"/quests.js",
  output:"/ca.js"
}
*/

var all_available_cards = {

	armaments:{
		name: 				'armaments',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/armaments.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_all: 1, fortify_all: 1, minimum_allies: 3},
		quote: '\"Ready for a fight!\"',
		max_in_deck: 		2,
		recipe:{
			scroll: 	2,
			shield: 	2,
			sword: 		2,
		}
	},
	blacksmith:{
		name: 				'blacksmith',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_creature'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/blacksmith.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['melee_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"He can forge great weapons.\"',
		recipe:{
			armaments: 	2,
			carpenter: 	2,
		}
	},
	carpenter:{
		name: 				'carpenter',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/carpenter.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, repair: 1},
		hero_version: 			{
			theme: 				['repair_ability','type_structure','type_structure','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 1},
		},
		quote: '\"I am sure we can fix that.\"',
		recipe:{
			hammer: 	2,
			peasant: 	2,
		}
	},
	cursed_scarecrow:{
		name: 				'cursed scarecrow',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/cursed_scarecrow.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, cursed_touch: 2, fearful_aura: 1, turn_scarecrow: 1},
		quote: '\"It scares away more then just crows.\"',
	},
	cursed_talisman:{
		name: 				'cursed talisman',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/cursed_talisman.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_hv: 1},
		quote: '\"Worn by many witches.\"',
		recipe:{
			herbs: 		2,
			ore: 		2,
		}
	},
	dagger:{
		name: 				'dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_rogue'],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dagger.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_arrival: 2},
		quote: '\"For quick strikes.\"',
		max_in_deck: 		2,
		recipe:{
			ore: 		2,
			wood: 		2,
		}
	},
	dark_night:{
		name: 				'dark night',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_night.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_all: 1, destroy_cursed: 10, echo: 1},
		quote: '\"Make sure you come home before dark.\"',
		recipe:{
			scroll: 	2,
			stone: 		2,
		}
	},
	dark_rogue:{
		name: 				'dark rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_rogue.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, cursed_touch: 2, evade: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_touch: 1, evade: 1},
		},
		quote: '\"Her strikes leave a mark.\"',
		recipe:{
			rogue: 			2,
			witch: 			2,
		}
	},
	dark_tower:{
		name: 				'dark tower',
		type: 				'structure',
		subtypes: 			['wall','tower'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_tower.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{curse_all: 1, cursed_aura: 1},
		hero_version: 			{
			theme: 				['subtype_witch', 'curse_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all: 1, cursed_aura: 1},
		},
		quote: '\"They say an ancient witch used to live there.\"',
		recipe:{
			dark_night:  	2,
			wall: 			2,
			witch: 			2,
		}
	},
	hammer:{
		name: 				'hammer',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		not_theme: 			['type_creature'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/hammer.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{repair: 1},
		quote: '\"A usefull tool.\"',
		recipe:{
			stone: 		2,
			wood: 		2,
		}
	},
	herbalist:{
		name: 				'herbalist',
		type: 				'creature',
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/herbalist.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, poison: 1, cleanse: 1},
		hero_version: 			{
			theme: 				['subtype_villager'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, poison_hv: 2, cleanse: 2},
		},
		quote: '\"There are so many uses for those plants.\"',
		recipe:{
			herbs: 		2,
			peasant: 	2,
		}
	},
	herbs:{
		name: 				'herbs',
		type: 				'artifact',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/herbs.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cleanse: 2},
		quote: '\"They have medicinal purposes.\"',
		recipe:{
			seeds: 		2,
			water: 		2,
		}
	},
	house:{
		name: 				'house',
		type: 				'structure',
		subtypes: 			['wall','villager'],
		color: 				['colorless'],
		theme: 				['type_creature'],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/house.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{heal: 1},
		hero_version: 			{
			theme: 				['subtype_villager','type_creature'],
			not_theme: 			['empower_hero_ability','type_structure'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{heal: 2},
		},
		quote: '\"A nice place to rest.\"',
		recipe:{
			hammer:  	1,
			peasant: 	1,
			wall: 		1,
			wood: 		4,
		}
	},
	peasant:{
		name: 				'peasant',
		type: 				'creature',
		basic_reward: 		true,
		value: 				1,
		subtypes: 			['human','villager'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
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
	poison_fever:{
		name: 				'poison fever',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['poison_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/poison_fever.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{quicken_poison: 2, echo: 1},
		quote: '\"Are you feeling okay?\"',
		max_in_deck: 		2,
		recipe:{
			poison_gas: 	2,
			scroll: 		2,
		}
	},
	poison_gas:{
		name: 				'poison gas',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['poison_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/poison_gas.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_all: 5, minimum_enemies: 3},
		quote: '\"What is that smell?\"',
		max_in_deck: 		2,
		recipe:{
			herbalist: 	2,
			scroll: 	2,
		}
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
		image: 				'cards/rogue.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Quick on his feet.\"',
		recipe:{
			dagger: 			2,
			peasant: 			2,
		}
	},
	rusty_sword:{
		name: 				'rusty sword',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rusty_sword.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, venomous_hero: 1, fragile: 1},
		quote: '\"Sometimes you only need to hit them once.\"',
		recipe:{
			sword: 			2,
			water: 			2,
		}
	},
	scarecrow:{
		name: 				'scarecrow',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scarecrow.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fearful_aura: 1, turn_cursed_scarecrow: 1},
		hero_version: 			{
			theme: 				[],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fearful_aura: 1, curse_hv: 4},
		},
		quote: '\"It scares away more then just crows.\"',
		recipe:{
			herbs:  	4,
			wood: 		1,
		}
	},
	scroll:{
		name: 				'scroll',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/scroll.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{draw: 2},
		quote: '\"What shall we write?\"',
		max_in_deck: 		1,
		recipe:{
			water:  	2,
			wood: 		2,
		}
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
		image: 				'cards/shield.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1},
		quote: '\"A good way to protect your hero.\"',
		max_in_deck: 		2,
		recipe:{
			ore: 		2,
			wood: 		5,
		}
	},
	shieldman:{
		name: 				'shieldman',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/shieldman.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify_self: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 1},
		},
		quote: '\"They can survive a lot.\"',
		recipe:{
			shield: 		2,
			swordsman: 		2,
		}
	},
	sword:{
		name: 				'sword',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/sword.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1},
		quote: '\"A weapon suited for a hero.\"',
		max_in_deck: 		2,
		recipe:{
			dagger:  	2,
			ore: 		2,
		}
	},
	swordsman:{
		name: 				'swordsman',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/swordsman.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Ready for a fight.\"',
		recipe:{
			sword: 			2,
			peasant: 		2,
		}
	},
	thief:{
		name: 				'thief',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/thief.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{run_away: 1, strike: 1, steal: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, pilfer: 1, evade: 1},
		},
		quote: '\"Where did my purse go?!\"',
		max_in_deck: 		2,
		recipe:{
			dark_night: 	2,
			rogue: 			2,
		}
	},
	village_defender:{
		name: 				'village defender',
		type: 				'creature',
		subtypes: 			['human','villager','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/village_defender.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{empowering_structures: 1, strike: 1},
		hero_version: 			{
			theme: 				['type_structure','subtype_villager'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{empowering_structures: 1, strike_unit: 1},
		},
		quote: '\"They will defend their village.\"',
		recipe:{
			house: 			2,
			swordsman: 		2,
		}
	},
	wall:{
		name: 				'wall',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/wall.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fortify_ally: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_human'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fortify_all: 1},
		},
		quote: '\"Basic defense.\"',
		recipe:{
			stone: 		2,
		}
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
		image: 				'cards/witch.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 2, strike: 1},
		hero_version: 			{
			theme: 				['subtype_witch', 'curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, strike_unit: 1},
		},
		quote: '\"She uses the dark arts.\"',
		recipe:{
			cursed_talisman: 	2,
			peasant: 			2,
		}
	},

	//##################################################################################################################################################################
	//########################################################## TREASURE ###############################################################################################
	//##################################################################################################################################################################
	crown:{
		name: 				'crown',
		description: 		'Passively increases all peasants gained by 1%.',
		value: 				75,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T064030.359.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Wear this and they will follow you.\"',
	},
	cup_of_blood:{
		name: 				'cup of blood',
		description: 		'Passively increases the maximum rarity of cards sacrificed at the altar by 1%.',
		value: 				75,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T095607.650.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"We can always need more blood.\"',
	},
	enchanted_net:{
		name: 				'enchanted net',
		description: 		'Passively increases floating scraps gained by 1%.',
		value: 				20,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T070421.769.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Cast the nets!\"',
	},
	endless_pouch:{
		name: 				'endless pouch',
		description: 		'Passively increases all scraps gained by 1%.',
		value: 				125,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T061306.496.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"It just keeps giving.\"',
	},
	gloves_of_midas:{
		name: 				'gloves of Midas',
		description: 		'Passively increases troves gained by 1%.',
		value: 				1000,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T071338.170.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Turns common items into treasure.\"',
	},
	golden_saddle:{
		name: 				'golden saddle',
		description: 		'Passively increases all rewards from battles and quests by 1%.',
		value: 				500,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T065529.311.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Perfect for doing long quests.\"',
	},
	loupe:{
		name: 				'loupe',
		description: 		'Passively increases all shards gained by 1%.',
		value: 				250,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T064733.364.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Make those gems shine!\"',
	},
	rope_of_binding:{
		name: 				'rope of binding',
		description: 		'Passively increases the chance for loot items to drop after winning a battle by 1%.',
		value: 				100,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-29T060640.618.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"I got you!\"',
	},
	thieves_cloak:{
		name: 				'thieves\' cloak',
		description: 		'Passively increases the maximum scraps offered by merchants by 1%.',
		value: 				100,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T070815.141.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"I\'m sure we can make a deal.\"',
	},
	war_banner:{
		name: 				'war banner',
		description: 		'Passively increases the maximum rarity of summoned enemies by 1%.',
		value: 				75,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T065910.439.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"This should draw them out.\"',
	},
	
	//##################################################################################################################################################################
	//########################################################## CURRENCY ###############################################################################################
	//##################################################################################################################################################################

	ore:{
		name: 				'ore',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/ore.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	seeds:{
		name: 				'seeds',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/seeds.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	stone:{
		name: 				'stone',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/stone.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	water:{
		name: 				'water',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/water.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	wood:{
		name: 				'wood',
		subtypes: 			['resource'],
		value: 				1,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'material',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/wood.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in crafting'
	},
	
	//##################################################################################################################################################################
	//########################################################## REWARDS ###############################################################################################
	//##################################################################################################################################################################
	
	flask:{
		name: 				'flask',
		value: 				25,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		//basic_reward: 		true,
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
	stash:{
		name: 				'stash',
		value: 				15,
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
/*		reward: 			{
			type: 			'random_card',
			pick_amount: 	1,
			amount: 		1,
			min_value: 		1,
			description: 	'Awards 1 random card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},*/
		reward: 			{
			type: 			'random_card',
			pick_amount: 	3,
			amount: 		1,
			random_amount:  4,
			min_value: 		1,
			card_type: 		'material',
			pickable: 		true,
			description: 	'Lets you pick a stack of random materials.',
			text: 			'Pick a material.',
		},
	},
	chest:{
		name: 				'chest',
		value: 				50,
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
			min_value: 		2,
			description: 	'Awards 1 random card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},
	},
	trove:{
		name: 				'trove',
		value: 				50,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T055525.326.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			card_type: 		['treasure'],
			pick_amount: 	1,
			amount: 		1,
			min_value: 		7,
			description: 	'Awards 1 random treasure.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
			all_pick_chance: true,
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

/*add_old_cards(all_old_available_cards, 'cards_old/');
add_old_cards(all_older_available_cards, 'cards_old2/');
add_old_cards(all_oldest_available_cards, 'cards_old2a/');
unavailable_abilities = sortObj(unavailable_abilities);
console.log('unavailable abilities: ' + count_object(unavailable_abilities));
console.log(unavailable_abilities);*/

/*eachoa(all_available_cards, function(card_id, card_info){
	if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
	if(card_info['color'][0] != undefined && card_info['color'][0] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
	if(card_info['unique'] != undefined && card_info['unique'] == true)
	{
		all_available_cards[card_id]['color'] = ['purple'];
		all_available_cards[card_id]['max_in_deck'] = 1;
	}
	if(card_info['abilities'] != undefined && card_info['abilities']['minimum_allies'] != undefined && card_info['abilities']['minimum_allies'] < 5 && card_info['max_in_deck'] != undefined)
	{
		card_info['max_in_deck'] = 1;
		console.log(card_id);
	}
	if(card_info['abilities'] != undefined && card_info['abilities']['minimum_enemies'] != undefined && card_info['abilities']['minimum_enemies'] < 5 && card_info['max_in_deck'] != undefined)
	{
		card_info['max_in_deck'] = 1;
	}
});*/

function calculate_card_value(card_id, show_calc){
	//console.log('calculating ' + card_id);
	var current_card_value = 0;
	if(all_available_cards[card_id] == undefined){console.log(card_id)};
	if(false /*all_available_cards[card_id]['recipe'] == undefined || show_calc != undefined || true*/)
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
		eachoa(all_available_cards[card_id]['abilities'], function(ability_id, ability_level){
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
		if(all_available_cards[card_id]['recipe'] != undefined)
		{
			eachoa(all_available_cards[card_id]['recipe'], function(card_cost_id, card_cost_amount){
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
	}

	if(all_available_cards[card_id]['value'] == undefined)
	{
		all_available_cards[card_id]['value'] = 1;
	}
	
	return current_card_value;
}

function find_ability(find_ability_id, hero_version){
	eachoa(all_available_cards, function(unit_id, unit){
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
	eachoa(all_available_cards, function(unit_id, unit){
		var recipe_count = 0;
		var recipe_list = '';
		eachoa(all_available_cards, function(unit_id_2, unit_2){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(gamedata['owned_cards'], function(owned_card_id, owned_amount){
		eachoa(namechanges, function(old_name, new_name){
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
	eachoa(gamedata['known_recipes'], function(owned_card_id, owned_amount){
		eachoa(namechanges, function(old_name, new_name){
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
	eachoa(gamedata['decks'], function(owned_deck_id, deck){
		eachoa(deck, function(card_id, card_amount){
			eachoa(namechanges, function(old_name, new_name){
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

	eachoa(namechanges, function(old_name, new_name){

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
	eachoa(all_available_cards, function(card_id, card_info){
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

	eachoa(card['abilities'], function(ability_id, ability_level){
		if(all_abilities[ability_id] == undefined){console.log(ability_id);}
		var ability = all_abilities[ability_id];
		var level_cost = 1;

		// CHECK USED
		/*all_abilities[ability_id]['used'] = true;
		eachoa(ability['effects'], function(effect_id, effect_info){
			if((effect_info['type'] == 'grant_skill' || effect_info['type'] == 'set_skill') && all_abilities[effect_info['skill_id']] != undefined)
			{
				all_abilities[effect_info['skill_id']]['used'] = true;
			}
			if(effect_info['type'] == 'random_ability')
			{
				eachoa(effect_info['ability_options'], function(option_id, ability_option){
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
			if(hero_version == undefined || hero_version == false)
			{
				if(card['type'] == 'structure' && ability['level_cost_structure'] != undefined)
				{
					level_cost = ability['level_cost_structure'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_structure'] + ' points (structure)');}
				}
				if(card['type'] == 'creature' && ability['level_cost_creature'] != undefined)
				{
					level_cost = ability['level_cost_creature'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_creature'] + ' points (creature)');}
				}
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
		eachoa(ability['ability_level_cost_factors'], function(ability_cost_factor_id, ability_cost_factor_amount){
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
		if(ability['additional_levels_cost'] != undefined && ability_level > 1)
		{
			calculated_time += ability['additional_levels_cost'] * (ability_level - 1);
			if(show_calc!=undefined){console.log('additional_levels_cost: ' + (ability['additional_levels_cost'] * (ability_level - 1)));}
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
			//calculated_time /= 3;
			//if(show_calc!=undefined){console.log('spell: /3 = ' + calculated_time);}
			//calculated_time -= 6;
			//if(show_calc!=undefined){console.log('spell: -6 = ' + calculated_time);}
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
			eachoa(min_level_costs, function(ability_key, min_level_cost){
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
var hero_hp_cost_factor = 4;

var hero_subtype_themes = {
	rogue: 			['subtype_rogue','evade_ability'],
	clerk: 			['subtype_clerk','deck_control_ability'],
	cleric: 		['subtype_cleric','cleanse_ally_ability','active_healing_ability'],
	mermaid: 		['subtype_mermaid'],
	reptile: 		['subtype_reptile'],
	plant: 			['subtype_plant'],
	golem: 			['subtype_golem','repairing_ability','type_structure'],
	witch: 			['subtype_witch','curse_ability'],
	mage: 			['subtype_mage'],
	undead: 		['subtype_undead'],
	elf: 			['subtype_elf'],
	goblin: 		['subtype_goblin'],
	fairy: 			['subtype_fairy'],
	warrior: 		['subtype_warrior','type_creature'],
	animal: 		['subtype_animal'],
	fungus: 		['subtype_fungus','ally_creature_death_proc_ability','ally_unit_card_played_proc_ability'],
	daemon: 		['subtype_daemon'],
	angel: 			['subtype_angel'],
	wall: 			['subtype_wall','projectile_ability'],
	aquatic: 		['subtype_aquatic'],
	ship: 			['subtype_aquatic','subtype_ship'],
	jotnar: 		['subtype_jotnar'],
	gnome: 			['subtype_gnome'],
	royal: 			['subtype_royal'],
	horror: 		['subtype_horror'],
}

function check_card(card_id){
	if(all_available_cards[card_id] != undefined)
	{
		var card_info = all_available_cards[card_id];
		if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
		if(card_info['color'][0] != undefined && card_info['color'][0] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
		if(card_info['unique'] != undefined && card_info['unique'] == true)
		{
			all_available_cards[card_id]['color'] = ['purple'];
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		if(card_info['abilities'] != undefined && card_info['abilities']['minimum_allies'] != undefined && card_info['abilities']['minimum_allies'] < 5 && card_info['max_in_deck'] == undefined)
		{
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		if(card_info['abilities'] != undefined && card_info['abilities']['minimum_enemies'] != undefined && card_info['abilities']['minimum_enemies'] < 5 && card_info['max_in_deck'] == undefined)
		{
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		/*if(old_cards[card_id] != undefined)
		{*/
			/*eachoa(racial_abilities, function(race, racial_ability){
				if(match_array_values(all_available_cards[card_id]['subtypes'], race))
				{
					if(all_available_cards[card_id]['abilities'][racial_ability] == undefined)
					{
						all_available_cards[card_id]['abilities'][racial_ability] = 1;
					}
					if(all_available_cards[card_id]['hero_version'] != undefined)
					{
						if(all_available_cards[card_id]['hero_version']['abilities'][racial_ability] == undefined)
						{
							all_available_cards[card_id]['hero_version']['abilities'][racial_ability] = 1;
						}
					}
				};
			});*/
		/*}*/
		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			all_available_cards[card_id]['raw_time'] = calculate_card_time(card_id);
			all_available_cards[card_id]['time'] = all_available_cards[card_id]['raw_time'];
		}
		if(card_info['effects'] == undefined)
		{
			all_available_cards[card_id]['effects'] = {};
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
			//var hero_hp = ideal_hero_hp / (hero_time / 6);
			var hero_hp = ideal_hero_hp - (hero_time * hero_hp_cost_factor) + (6 * hero_hp_cost_factor);
			if(hero_hp > ideal_hero_hp && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			if(hero_hp < ideal_hero_hp/2 && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			card_info['hero_version']['health'] = Math.ceil(hero_hp);
			//delete card_info['hero_version']['theme'];
			/*if(card_info['hero_version']['theme'] != undefined)
			{*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'muscle') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'muscle';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'defense') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'defense';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'aoe') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'aoe';
				}*/

			/*}
			else
			{*/
			if(card_info['hero_version']['theme'] == undefined)
			{
				card_info['hero_version']['theme'] = {};
			}
			/*eachoa(card_info['hero_version']['subtypes'], function(subtype_key, subtype){
				if(hero_subtype_themes[subtype] != undefined)
				{
					eachoa(hero_subtype_themes[subtype], function(new_subtype_key, new_subtype)
					{
						card_info['hero_version']['theme'][count_object(card_info['hero_version']['theme'])] = new_subtype;
					});
				}
			});
			eachoa(card_info['hero_version']['abilities'], function(ability_id, ability_level){
				if(all_abilities[ability_id] != undefined && all_abilities[ability_id]['hero_tactics'] != undefined)
				{
					eachoa(all_abilities[ability_id]['hero_tactics'], function(tactic_key, tactic_id)
					{
						card_info['hero_version']['theme'][count_object(card_info['hero_version']['theme'])] = tactic_id;
					});
				}
			});
			if(count_object(card_info['hero_version']['theme']) == 0){console.log(card_id + ' has no hero theme');}
			if(card_info['hero_version']['not_theme'] == undefined && card_info['hero_version']['power'] === false)
			{
				card_info['hero_version']['not_theme'] = ['empower_hero_ability'];
			}*/
			/*}*/
		}

		if(card_info['theme'] == undefined){card_info['theme'] = {};};
		if(card_info['craft_theme'] == undefined || card_info['craft_theme'][0] == undefined){card_info['craft_theme'] = ['type_' + card_info['type']];};
		card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'type_' + card_info['type'];

		eachoa(card_info['subtypes'], function(subtype_id, current_subtype){
			card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'subtype_' + current_subtype;
			card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = 'subtype_' + current_subtype;
		});

		eachoa(card_info['abilities'], function(ability_id, ability_level){
			//card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_id + '_ability_name';
			eachoa(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name + '_ability'], card_info['theme']) == false)
				{
					card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = '' + ability_subtype_name + '_ability';
				}
			});
			eachoa(all_abilities[ability_id]['ability_craft_subtypes'], function(ability_subtype_id, ability_subtype_name){
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
	    if(all_available_cards['card_back_' + card_id] != undefined)
		{
			all_available_cards['card_back_' + card_id]['value'] = card_info['value'] * 25;
		}
	    /*var used_in_recipes = 0;
	    eachoa(all_available_cards, function(other_card_id, other_card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
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

eachoa(all_available_cards, function(card_id, card_info){
	if(card_info['basic_reward'] != undefined && card_info['basic_reward'] == true && random_loot_drops[card_id] == undefined /*match_array_values(card_id, random_loot_drops) == false*/)
	{
		random_loot_drops[card_id] = 1 / Math.sqrt(Math.sqrt(card_info['value'] * (1 + (card_info['value'] / 10))));
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
	eachoa(all_card_backs, function(card_back_id, card_back_image){
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
			color: 				['green'],
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

function learn_recipe(recipe_id){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_id == recipe_id && card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function learn_all_recipes(){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function check_no_achievement_yet(card_theme, max_shown){
	var achievable_cardbacks = {};
	var shown = 0;
	eachoa(all_achievements, function(achievement_id, achievement_info){
		eachoa(achievement_info['rewards'], function(rewards_id, rewards_info){
			achievable_cardbacks[rewards_info['reward_id']] = true;
		});
	});
	eachoa(all_available_cards, function(card_id, card_info){
		if((max_shown == undefined || max_shown > shown) && achievable_cardbacks['card_back_' + card_id] == undefined && (card_theme == undefined || match_array_values(card_theme, card_info['theme'])))
		{
			shown++;
			console.log(card_id);
		}
	});
}

function get_all_hero_themes(){
	var all_hero_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			eachoa(card_info['hero_version']['theme'], function(theme_id, theme_name){
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
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(['aoe'], card_info['theme']))
		{
			eachoa(card_info['theme'], function(theme_id, theme_name){
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

function get_all_artifact_themes(){
	var all_aoe_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && card_info['type'] == 'artifact')
		{
			eachoa(card_info['theme'], function(theme_id, theme_name){
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
	eachoa(all_hero_themes, function(theme, theme_count){
		var found_aoe = false;
		eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_aoe_themes, function(theme, theme_count){
		var found_aoe = false;
		eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			eachoa(all_aoe_themes, function(theme, theme_count){
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
				/*eachoa(card_info['hero_version']['theme'], function(them_id, theme_name){
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
	if(incomplete_count > 0)
	{
		console.log(all_aoe_themes);
		console.log(incomplete_count);
	}
	else
	{
		console.log('AOE: check!');
	}

}

function check_no_artifact_yet(show_found){
	var all_aoe_themes = get_all_artifact_themes();
	var good_aoe_themes = {};
	var incomplete_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			eachoa(all_aoe_themes, function(theme, theme_count){
				if(theme != 'aoe' && match_array_values(theme, card_info['hero_version']['theme']))
				{
					hero_can_use_aoe = true;
					if(show_found != undefined && show_found == true){console.log(card_id + ' uses ' + theme + ' artifact');}
				}
			});
			if(hero_can_use_aoe == false)
			{
				incomplete_count++;
				console.log('Needs artifact: ' + card_id);
				eachoa(card_info['hero_version']['theme'], function(them_id, theme_name){
					if(theme_name != 'muscle' && theme_name != 'defense' && theme_name != 'aoe')
					{
						if(good_aoe_themes[theme_name] == undefined)
						{
							good_aoe_themes[theme_name] = 0;
						}
						good_aoe_themes[theme_name]++;
					}
				});
			}
		}
	});
	if(incomplete_count > 0)
	{
		console.log(good_aoe_themes);
		console.log(incomplete_count);
	}
	else
	{
		console.log('Artifacts: check!');
	}

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
	eachoa(themes, function(theme_key, theme_id){
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
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(card_info['theme'], theme)){
			total_theme_count++;
		};
	});
	if(show_me != undefined){console.log(theme + ': ' + total_theme_count)};
	return total_theme_count;
}

function count_all_card_themes(){
	var all_card_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined){
			eachoa(card_info['theme'], function(theme_id, theme_name){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
		if((type == undefined || card_info['type'] == type) && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			eachoa(card_info['subtypes'], function(useless_key, current_subtype){
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
		eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
		var matches = false;
		if(themes == undefined || count_object(themes) == 0)
		{
			matches = true;
		}
		else
		{
			eachoa(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					eachoa(themes, function(theme_key_2, theme_name_2){
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
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['type'] == type || type == undefined)
		{
			var matches = 0;
			eachoa(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					eachoa(themes, function(theme_key_2, theme_name_2){
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
					eachoa(card_info['abilities'], function(ability_id, ability_level){
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
						eachoa(card_info['hero_version']['abilities'], function(ability_id, ability_level){
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
	eachoa(all_abilities, function(ability_id, ability_info){
		var matches = 0;
		eachoa(ability_info['ability_subtypes'], function(theme_key, theme_name){
			if(theme_name != undefined)
			{
				eachoa(themes, function(theme_key_2, theme_name_2){
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
	eachoa(possible_skills, function(skill_id, skill_count){
		if(Math.random() * matched_cards_count < skill_count || skill_count > matched_cards_count / 2)
		{
			chosen_skills[skill_id] = 1;
		}
	});
	return chosen_skills;
}

function get_name_parts(theme, type){
	var all_name_parts = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && match_array_values(theme, card_info['theme']) > 0 && (type == undefined || card_info['type'] == type))
		{
			var current_card_name = card_info['name'];
			var current_name_parts = current_card_name.split(' ');
			eachoa(current_name_parts, function(useless_key, name_part){
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
	eachoa(chosen_abilities, function(ability_id, ability_level){
		new_card['abilities'][ability_id] = 1;
	});

	if(type == 'creature' || type == 'structure')
	{
		var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, true);
		if(chosen_power != 'false'){new_card['hero_version']['power'] = parseInt(chosen_power);}
		
		eachoa(subtypes, function(subtypes_id, subtype_name){
			new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = 'subtype_' + subtype_name;
		});
		var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, true);
		eachoa(chosen_abilities, function(ability_id, ability_level){
			new_card['hero_version']['abilities'][ability_id] = 1;
			var temp_ability_subtypes = {};
			eachoa(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_key, ability_subtype_name){
				temp_ability_subtypes[ability_subtype_name] = true;
			});
			eachoa(temp_ability_subtypes, function(ability_subtype_name, ability_subtype_count){
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
	eachoa(card, function(stat_id, stat){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
	eachoa(all_available_cards, function(card_id, card_info){
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
		eachoa(subtypes_left, function(subtype_key, current_subtype){
			if(current_subtype == 'human')
			{
				delete subtypes_left[subtype_key];
			}
		});
		
		eachoa(all_available_cards, function(cost_id, cost_info){
			if((cost_info['value'] < cost_left) && (recipe_size > 0 || cost_info['value'] <= all_available_cards[card_id]['value'] * 0.9 || all_available_cards[card_id]['value'] < 10) && cost_info['pick_chance'] > 0 && current_recipe[cost_id] == undefined)
			{
				var matched_amount = (match_array_values(current_card['craft_theme'], cost_info['craft_theme'], true));
				matched_amount *= matched_amount;
				var subtype_match = match_array_values(subtypes_left, cost_info['subtypes'], true) * 1;
				if(subtype_match > 0)
				{
					matched_amount *= (subtype_match + 0);
				}
				var value_percent = (cost_info['value'] / current_card['value']);
				matched_amount *= value_percent;
				if(matched_amount > 0 && cost_info['used_in_recipes'] != undefined && cost_info['used_in_recipes'] > 0)
				{
					matched_amount /= sqr(sqr(sqr(5 + (cost_info['used_in_recipes'] /** recipe_size*/))));
				}
				if(matched_amount > 0 && (cost_info['used_in_recipes'] == undefined || cost_info['used_in_recipes'] == 0))
				{
					matched_amount *= 5;
				}
				if((matched_amount > 0 && matched_amount >= /*sqr*/(recipe_size * 0.25)) || (count_object(current_recipe) < 2 && matched_amount > 0))
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
		if(count_object(possible_costs) > 0)
		{
			let sortedObject = Object.fromEntries(
			    Object.entries(possible_costs).sort(([, a], [, b]) => b - a)
			);
			//console.log(sortedObject);
			possible_costs = sortedObject;
			eachoa(possible_costs, function(possible_cost_id, possible_cost_chance){
				if(cost_left > 1 && all_available_cards[possible_cost_id] != undefined && all_available_cards[possible_cost_id]['value'] < (cost_left * 0.9) && count_object(current_recipe) < 4 && (count_object(current_recipe) < 2 || all_available_cards[possible_cost_id]['value'] > Math.ceil(all_available_cards[card_id]['value'] / 100)))
				{
					var cost_amount = Math.floor((cost_left * 0.9) / all_available_cards[possible_cost_id]['value']);
					cost_left -= cost_amount * all_available_cards[possible_cost_id]['value'];
					current_recipe[possible_cost_id] = cost_amount;
					if(all_available_cards[possible_cost_id]['used_in_recipes'] == undefined){all_available_cards[possible_cost_id]['used_in_recipes'] = 0;}
					all_available_cards[possible_cost_id]['used_in_recipes']++;
				}
			});
		}
		else
		{
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

function find_cards_not_used_in_recipe(value_max, value_min, show_each){
	if(value_max == undefined){value_max = 100000000;}
	if(value_min == undefined){value_min = 0;}
	var not_used_amount = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && (card_info['used_in_recipes'] == undefined || card_info['used_in_recipes'] == 0) && card_info['value'] <= value_max && card_info['value'] >= value_min)
		{
			if(show_each != undefined && show_each == true)
			{
				console.log(card_id + ', value: ' + card_info['value']);
			}
			not_used_amount++;
		}
	});
	return(not_used_amount);
}

function set_all_enemy_deck_cards(card_id){
	eachoa(gamedata['current_summon']['deck'], function(card_key, card_info){
		gamedata['current_summon']['deck'][card_key]['card_id'] = card_id;
	});
}

function check_unused_abilities(card_type, show_unused){
	if(card_type != undefined){console.log('checking ' + card_type + ' for unused abilities');}
	var unused_amount = 0;
	eachoa(all_abilities, function(ability_id, ability_info){
		if(ability_info['not_used'] == undefined)
		{
			var ability_used = false;
			eachoa(all_available_cards, function(card_id, card_info){
				if(card_type == undefined || card_type == card_info['type'])
				{
					if(card_info['abilities'][ability_id] != undefined || (card_info['hero_version'] != undefined && card_info['hero_version']['abilities'][ability_id] != undefined))
					{
						ability_used = true;
					}
				}
			});
			if(ability_used == false)
			{
				unused_amount += 1;
				if(show_unused != undefined && show_unused == true)
				{
					console.log(ability_id);
				}
			}
		}
	});
	return unused_amount;
}

function check_deck_building(){
	check_no_aoe_yet();
	check_no_artifact_yet();
	var not_used = find_cards_not_used_in_recipe(500);
	if(not_used > 0)
	{
		not_used = find_cards_not_used_in_recipe(500, 0, true);
	}
}

function check_double_card_images(){
	eachoa(all_available_cards, function(card_id, card_info){
		var current_card_image = '';
		if(card_info['type'] != 'cardback' && card_info['type'] != 'recipe' && card_info['image'] != undefined)
		{
			current_card_image = get_card_image_filename(card_id);
		}
		if(current_card_image != '')
		{
			eachoa(all_available_cards, function(card_id_2, card_info_2){
				if(card_id != card_id_2 && card_info_2['type'] != 'cardback' && card_info_2['type'] != 'recipe' && card_info_2['image'] != undefined)
				{
					var next_card_image = get_card_image_filename(card_id_2);
					if(current_card_image == next_card_image && count_object(current_card_image.split('-')) > 1)
					{
						console.log(card_id + ' has the same image as ' + card_id_2 + ' (' + current_card_image + ')');
					}
				}
			});
		}
	});
}

function get_card_image_filename(card_id){
	var current_card_image = '';
	if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['image'] != undefined)
	{
		current_card_image = all_available_cards[card_id]['image'] + '';
		current_card_image = current_card_image.split('/');
		var last_key = count_object(current_card_image) - 1;
		current_card_image = current_card_image[last_key];
	}
	return current_card_image;
}