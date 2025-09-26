var all_oldest_available_cards = {
	
	agate:{
		name: 				'agate',
		type: 				'artifact',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/agate-1084035_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{lull: 1, delay: 3},
		recipe:{
			mana_crystal: 		1,
			stone: 				1,
			cleansing_water: 	1
		},
		quote: '\"It has a mesmerizing effect\"'
	},
	amber:{
		name: 				'amber',
		type: 				'artifact',
		color: 				['orange'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/bernstein-6579_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{empower_ally: 1, delay: 3},
		recipe:{
			mana_crystal: 		1,
			stone: 				1,
			sandstorm: 			1
		},
		quote: '\"Some say it holds ages of rage\"'
	},
	/*amethyst:{
		name: 				'amethyst',
		type: 				'artifact',
		color: 				['purple'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/amethyst-1607247_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{curse: 1, delay: 2},
		recipe:{
			mana_crystal: 		1,
			stone: 				1,
			bones: 				1
		},
		quote: '\"Ancient queens used to adorn their crowns with these\"'
	},*/
	angel_of_light:{
		name: 				'angel of light',
		type: 				'creature',
		color: 				['yellow'],
		time: 				13,
		image: 				'cards/fantasy-3361394_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, healing_wave: 2, restore_hero: 2, flying: 1},
		hero_version: 			{
			name: 				'angel of light',
			type: 				'creature',
			image: 				'cards/fantasy-3361394_1280.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{heal: 2, flying: 1},
		},
		recipe:{
			young_angel: 		1,
			angelic_blessing: 	1,
			citrine: 			1
		},
		quote: '\"She comes down from the heavens to shine her light\"'
	},
	
	angel_statue:{
		name: 				'angel statue',
		type: 				'structure',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/angel-2665661_640.jpg',
		power: 				false,
		armor: 				3,
		health: 			3,
		abilities: 			{heal_all: 1},
		hero_version: 			{
			name: 				'angel statue',
			type: 				'structure',
			image: 				'cards/angel-2665661_640.jpg',
			image_position: 		'top',
			power: 				false,
			armor: 				4,
			health: 			40,
			abilities: 			{heal_all: 1},
		},
		recipe:{
			stone: 				2,
			angelic_blessing: 	1,
			young_angel: 		1
		},
		quote: '\"Many of these were built to honor the heavens\"'
	},
	angelic_blessing:{
		name: 				'angelic blessing',
		type: 				'spell',
		color: 				['yellow'],
		pick_chance: 		1,
		time: 				4,
		image: 				'cards/fantasy-3311091_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{bless: 2},
		recipe:{
			holy_relic: 	3
		},
		quote: '\"Only the worthy will receive the blessing of the Lord\"'
	},
	apothercarys_tome:{
		name: 				'apothercary\'s tome',
		type: 				'object',
		color: 				['colorless'],
		pick_chance: 		0.2,
		time: 				2,
		image: 				'cards/book-1210027_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			3,
		abilities: 			{heal: 3, safe_spot: 1},
		reset_time: 		1,
		safe_slot: 			true,
		hero_version: 			{
			name: 				'apothercary\'s tome',
			type: 				'object',
			image: 				'cards/book-1210027_1280.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{heal: 3},
		},
		recipe:{
			paper: 			2,
			healing_oil: 	1
		},
		quote: '\"Anyone with such a tome can become a healer\"'
	},
	
	arcane_missiles:{
		name: 				'arcane missiles',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/wave-81840_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{arcane_bolts: 4},
		recipe:{
			mana_crystal: 		3,
		},
		quote: '\"The basic weapon of any mage\"'
	},
	archeologist:{
		name: 				'archeologist',
		type: 				'creature',
		color: 				['yellow'],
		pick_chance: 		0.5,
		time: 				5,
		image: 				'cards/hat-5324189_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, bring_artifact: 1},
		hero_version: 			{
			name: 				'archeologist',
			type: 				'creature',
			image: 				'cards/hat-5324189_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, bring_artifact: 1},
		},
		recipe:{
			stone: 				2,
			peasant: 			1,
			citrine: 			1
		},
		quote: '\"Look at what I found!\" - Borick, archeologist'
	},
	archer:{
		name: 				'archer',
		type: 				'creature',
		color: 				['yellow'],
		time: 				2,
		image: 				'cards/people-2561105_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1},
		hero_version: 			{
			name: 				'archer',
			type: 				'creature',
			image: 				'cards/people-2561105_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot: 1},
		},
		recipe:{
			quiver: 			1,
			peasant: 			1
		},
		quote: '\"The kingdom prizes itself for it\'s well trained archers\"'
	},
	archer_battalion:{
		name: 				'archer battalion',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/archer-5339094_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{barrage: 1},
		hero_version: 			{
			name: 				'archer battalion',
			type: 				'creature',
			image: 				'cards/archer-5339094_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{barrage: 1},
		},
		recipe:{
			archer: 	2,
		},
		quote: '\"When there are many enemies, shoot many arrows\" - Torra, master at arms'
	},
	arjuna:{
		name: 				'arjuna',
		type: 				'creature',
		color: 				['orange'],
		time: 				10,
		image: 				'cards/arjuna-5415282_640.jpg',
		power: 				2,
		armor: 				4,
		health: 			5,
		abilities: 			{shoot: 1, pierces: 1, precision: 1},
		hero_version: 			{
			name: 				'arjuna',
			type: 				'creature',
			image: 				'cards/arjuna-5415282_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				5,
			health: 			25,
			abilities: 			{shoot: 1, pierces: 1},
		},
		recipe:{
			archer: 		1,
			amber: 			2
		}
	},
	armor:{
		name: 				'armor',
		type: 				'attack',
		color: 				['yellow'],
		time: 				2,
		image: 				'cards/activity-3767542_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fortify: 4},
		recipe:{
			ore: 			2,
		}
	},
	armored_tribesman:{
		name: 				'armored tribesman',
		type: 				'creature',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/warrior-3551483_640.jpg',
		power: 				2,
		armor: 				2,
		health: 			2,
		abilities: 			{strike: 1, armored: 1},
		hero_version: 			{
			name: 				'armored tribesman',
			type: 				'creature',
			image: 				'cards/warrior-3551483_640.jpg',
			power: 				2,
			armor: 				10,
			health: 			15,
			abilities: 			{strike_nearest: 1, armored: 1},
		},
		recipe:{
			tribal_warrior:		1,
			plate_armor: 		1
		}
	},
	
	
	
	ash_lady:{
		name: 				'ash lady',
		type: 				'creature',
		color: 				['red','green'],
		time: 				5,
		image: 				'cards/woman-5270382_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{cleanse: 1, burn: 2},
		hero_version: 			{
			name: 				'ash lady',
			type: 				'creature',
			image: 				'cards/woman-5270382_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			50,
			abilities: 			{burn: 2, cleanse: 1},
		},
		recipe:{
			peasant: 		1,
			burning_ring: 	1,
			healing_oil: 	1
		}
	},
	assassin:{
		name: 				'assassin',
		type: 				'creature',
		color: 				['purple'],
		time: 				4,
		image: 				'cards/fantasy-5432467_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 2, poisonous: 1, retreat: 1},
		hero_version: 			{
			name: 				'assassin',
			type: 				'creature',
			image: 				'cards/fantasy-5432467_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, poisonous: 1, evade: 1},
		},
		recipe:{
			herbalists_lab: 	1,
			unsummon: 			1,
			black_striker: 		1
		}
	},
	astral_archer:{
		name: 				'astral archer',
		type: 				'creature',
		color: 				['blue'],
		time: 				5,
		image: 				'cards/girl-5440572_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{snipe: 1, pierces: 1, victory_rush: 1},
		hero_version: 			{
			name: 				'astral archer',
			type: 				'creature',
			image: 				'cards/girl-5440572_640.jpg',
			image_position: 	'center',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{snipe: 1, pierces: 1, victory_rush: 1},
		},
		recipe:{
			magic_attunement: 	1,
			archer: 			1
		}
	},
	
	barbarian_archer:{
		name: 				'barbarian archer',
		type: 				'creature',
		color: 				['orange'],
		time: 				6,
		image: 				'cards/warrior-5207128_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1},
		hero_version: 			{
			name: 				'barbarian archer',
			type: 				'creature',
			image: 				'cards/warrior-5207128_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot: 1},
		},
		recipe:{
			barbarian_axeman: 	1,
			quiver: 			1
		}
	},
	barbarian_axeman:{
		name: 				'barbarian axeman',
		type: 				'creature',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/barbarian-4616094_640.jpg',
		image_position: 		'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{swipe: 1},
		hero_version: 			{
			name: 				'barbarian axeman',
			type: 				'creature',
			image: 				'cards/barbarian-4616094_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			lumberjacks_axe: 	1,
			raging_barbarian: 	1
		}
	},
	
	barbarian_elite:{
		name: 				'barbarian elite',
		type: 				'creature',
		color: 				['orange'],
		time: 				11,
		image: 				'cards/amazone-5178696_640.jpg',
		image_position: 		'top',
		power: 				2,
		armor: 				2,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, enrage:1},
		hero_version: 			{
			name: 				'barbarian elite',
			type: 				'creature',
			image: 				'cards/amazone-5178696_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				5,
			health: 			55,
			abilities: 			{strike_nearest: 1, enrage: 1},
		},
		recipe:{
			barbarian_axeman: 	1,
			plate_armor: 		1,
			amber: 				1
		}
	},
	barbarian_shieldman:{
		name: 				'barbarian shieldman',
		type: 				'creature',
		color: 				['orange'],
		time: 				11,
		image: 				'cards/barbarian-2159912_640.jpg',
		image_position: 		'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{swipe: 1, block: 1},
		hero_version: 			{
			name: 				'barbarian shieldman',
			type: 				'creature',
			image: 				'cards/barbarian-2159912_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, block: 1},
		},
		recipe:{
			barbarian_axeman: 	1,
			plate_armor: 		1,
		}
	},
	bard:{
		name: 				'bard',
		type: 				'creature',
		color: 				['yellow','red'],
		time: 				3,
		image: 				'cards/fantasy-4103064_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{empower_ally: 1, strike: 1},
		hero_version: 			{
			name: 				'bard',
			type: 				'creature',
			image: 				'cards/fantasy-4103064_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		recipe:{
			peasant: 		 	1,
			amber: 				1,
			candle: 			1,
			magic_attunement: 	1
		}
	},
	
	bear_trap:{
		name: 				'bear trap',
		type: 				'object',
		color: 				['yellow'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/bear-trap-413397_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{final_strike: 10, guard: 1},
		reset_time: 		1,
		safe_slot: 			false,
		recipe:{
			ore: 			1,
			lumber: 		1,
		}
	},
	bee:{
		name: 				'bee',
		type: 				'creature',
		color: 				['green'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/bee-1726659_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, poisonous: 1, one_hit: 1, flying: 1},
	},
	bee_hive:{
		name: 				'bee hive',
		type: 				'structure',
		color: 				['green'],
		time: 				1,
		image: 				'cards/apiary-1867537_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{release_bee: 1},
		hero_version: 			{
			name: 				'bee hive',
			type: 				'structure',
			image: 				'cards/apiary-1867537_1280.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{release_bee: 1},
		},
		recipe:{
			lumber: 			1,
			natures_touch: 		1,
			firtile_dirt: 		1
		}
	},
	black_striker:{
		name: 				'black striker',
		type: 				'creature',
		color: 				['purple'],
		time: 				3,
		image: 				'cards/assassin-2182084_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, flank: 1, evade: 1},
		placement: 			'right',
		hero_version: 			{
			name: 				'black striker',
			type: 				'creature',
			image: 				'cards/assassin-2182084_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, evade: 1},
		},
		recipe:{
			dark_scout: 		1,
			amethyst: 			1,
			surprise_attack: 	1
		}
	},
	blessed_angel:{
		name: 				'blessed angel',
		type: 				'creature',
		color: 				['yellow'],
		time: 				9,
		image: 				'cards/angel-749625_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, blessed_entry: 1, healing_wave: 1, flying: 1},
		hero_version: 			{
			name: 				'blessed angel',
			type: 				'creature',
			image: 				'cards/angel-749625_640.jpg',
			image_position: 		'top',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{heal: 1, blessed_arrivals: 3, flying: 1},
		},
		recipe:{
			angel_of_light: 	1,
			angelic_blessing: 	1,
		}
	},
	blue_butterflies:{
		name: 				'blue butterflies',
		type: 				'creature',
		color: 				['green'],
		pick_chance: 		0.5,
		time: 				2,
		image: 				'cards/butterfly-2049567_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{flying: 1, evade: 1, bolster: 1},
		hero_version: 			{
			name: 				'blue butterflies',
			type: 				'creature',
			image: 				'cards/butterfly-2049567_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{flying: 1, evade: 1},
		},
		recipe:{
			natures_touch: 		1,
			book_of_nature: 	1,
		}
	},
	/*blue_elf:{
		name: 				'blue elf',
		type: 				'creature',
		color: 				['blue'],
		time: 				3,
		image: 				'cards/dark-2971931_1280.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, spellrush: 1},
		hero_version: 			{
			name: 				'blue elf',
			type: 				'creature',
			image: 				'cards/dark-2971931_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, spellrush: 1},
		},
		recipe:{
			forest_elf: 		1,
			magic_attunement: 	1,
			mana_orb: 			1
		}
	},*/
	
	boar:{
		name: 				'boar',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/boar-3240210_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'boar',
			type: 				'creature',
			image: 				'cards/boar-3240210_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			firtile_dirt: 		2,
			natures_touch: 		1,
		}
	},
	bomb:{
		name: 				'bomb',
		type: 				'attack',
		color: 				['red'],
		time: 				3,
		image: 				'cards/abandoned-place-3413932_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{bombard: 6},
		recipe:{
			burning_ring: 	1,
			ore: 			1,
		}
	},
	
	/*bones:{
		name: 				'bones',
		type: 				'artifact',
		color: 				['purple'],
		pick_chance: 		1,
		basic_reward: 		true,
		time: 				2,
		image: 				'cards/bone-664596_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{resurrect_ally: 1},
	},*/
	
	book_of_fire:{
		name: 				'book of fire',
		type: 				'artifact',
		color: 				['red'],
		pick_chance: 		0.5,
		time: 				6,
		image: 				'cards/books-4733993_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fire_bolt: 1, burn: 1, delay: 4},
		recipe:{
			burning_ring: 		1,
			candle: 			1,
			paper: 				1
		}
	},
	book_of_nature:{
		name: 				'book of nature',
		type: 				'artifact',
		color: 				['green'],
		pick_chance: 		0.5,
		time: 				3,
		image: 				'cards/dreams-2904682_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{heal: 1, bolster: 1, delay: 4},
		recipe:{
			healing_oil: 		1,
			wood_trinket: 		1,
			paper: 				1
		}
	},
	
	brigands:{
		name: 				'brigands',
		type: 				'creature',
		color: 				['yellow'],
		time: 				6,
		image: 				'cards/medieval-5463404_640.jpg',
		power: 				2,
		armor: 				4,
		health: 			5,
		abilities: 			{strike: 1, pilfer: 1, gamble: 1},
		hero_version: 			{
			name: 				'brigands',
			type: 				'creature',
			image: 				'cards/medieval-5463404_640.jpg',
			power: 				2,
			armor: 				10,
			health: 			40,
			abilities: 			{strike_nearest: 1, gamble: 1},
		},
		recipe:{
			peasant: 			1,
			poverty: 			1,
			roll_the_dice: 		1
		}
	},
	brown_bear:{
		name: 				'brown bear',
		type: 				'creature',
		color: 				['green','orange'],
		time: 				5,
		image: 				'cards/bear-422682_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			name: 				'brown bear',
			type: 				'creature',
			image: 				'cards/bear-422682_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			wolf: 				1,
			wood_trinket: 		1,
			amber: 				1
		}
	},
	burning_angel:{
		name: 				'burning angel',
		type: 				'creature',
		color: 				['red'],
		time: 				9,
		image: 				'cards/angel-1284369_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		effects: 			{
			burning: 		3
		},
		abilities: 			{strike: 1, fire_blast: 1, flying: 1},
		hero_version: 			{
			name: 				'burning angel',
			type: 				'creature',
			image: 				'cards/angel-1284369_640.jpg',
			image_position: 		'top',
			power: 				1,
			armor: 				0,
			health: 			50,
			effects: 			{
				burning: 		8
			},
			abilities: 			{strike_nearest: 1, fire_bolt: 1, flying: 1},
		},
		recipe:{
			angel_of_light: 	1,
			burning_ring: 		1,
		}
	},
	
	burning_imp:{
		name: 				'burning imp',
		type: 				'creature',
		color: 				['red'],
		time: 				4,
		image: 				'cards/devil-1674605_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, burning_entry: 2, resist_fire: 1},
		hero_version: 			{
			name: 				'burning imp',
			type: 				'creature',
			image: 				'cards/devil-1674605_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, burn: 2, resist_fire: 1},
		},
		recipe:{
			fire_imp: 		1,
			candle: 		1
		}
	},
	burning_owl:{
		name: 				'burning owl',
		type: 				'creature',
		color: 				['red'],
		time: 				1,
		image: 				'cards/art-1034408_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		effects: 			{
			burning: 		2
		},
		abilities: 			{strike: 1, explode: 2, flying: 1},
		hero_version: 			{
			name: 				'burning owl',
			type: 				'creature',
			image: 				'cards/art-1034408_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			effects: 			{
				burning: 		5
			},
			abilities: 			{strike_nearest: 1, flying: 1},
		},
		recipe:{
			natures_touch: 		1,
			bomb: 				1,
		}
	},
	
	burning_rage:{
		name: 				'burning rage',
		type: 				'spell',
		color: 				['red'],
		pick_chance: 		0.1,
		time: 				1,
		image: 				'cards/anger-794699_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{burning_rage: 2},
		recipe:{
			burning_imp: 	1,
			amber: 			1,
		}
	},
	burning_ring:{
		name: 				'burning ring',
		type: 				'artifact',
		color: 				['red'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/burning-3088920_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fire_bolt: 1, delay: 2},
		recipe:{
			fire_bolt: 		2,
			ore: 			1,
		}
	},
	
	burning_ruins:{
		name: 				'burning ruins',
		type: 				'structure',
		color: 				['red'],
		time: 				3,
		image: 				'cards/braunschweig-3815570_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		effects: 			{
			burning: 		3
		},
		abilities: 			{fire_shield: 2, burning_entry: 2},
		hero_version: 			{
			name: 				'burning ruins',
			type: 				'structure',
			image: 				'cards/braunschweig-3815570_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			effects: 			{
				burning: 		6
			},
			abilities: 			{fire_shield: 1, burn_opponent: 1},
		},
		recipe:{
			hellfire: 			1,
			castle: 			1,
			crumble: 			1
		}
	},
	
	calm_druid:{
		name: 				'calm druid',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/fantasy-2961723_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bolster: 1},
		hero_version: 			{
			name: 				'calm druid',
			type: 				'creature',
			image: 				'cards/fantasy-2961723_640.jpg',
			image_position: 		'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, bolster: 1},
		},
		recipe:{
			druid: 		 		1,
			book_of_nature: 	1,
		}
	},
	calm_recaller:{
		name: 				'calm recaller',
		type: 				'creature',
		color: 				['blue'],
		time: 				1,
		image: 				'cards/fantasy-2790666_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, recall_ally: 1},
		hero_version: 			{
			name: 				'calm recaller',
			type: 				'creature',
			image: 				'cards/fantasy-2790666_1280.jpg',
			image_position: 		'center',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, recall_ally: 1},
		},
		recipe:{
			peasant: 			1,
			magic_attunement: 	1,
			unsummon: 			1
		}
	},
	camel:{
		name: 				'camel',
		type: 				'creature',
		color: 				['orange'],
		time: 				3,
		image: 				'cards/camel-3314724_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{move_away: 1, spit: 1},
		hero_version: 			{
			name: 				'camel',
			type: 				'creature',
			image: 				'cards/camel-3314724_1280.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{spit: 1},
		},
		recipe:{
			natures_touch: 		1,
			sandstorm: 			2,
		}
	},
	/*candle:{
		name: 				'candle',
		type: 				'artifact',
		color: 				['red'],
		pick_chance: 		0.5,
		basic_reward: 		true,
		time: 				1,
		image: 				'cards/candle-4477021_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{burn: 1, delay: 3},
	},*/

	caravan:{
		name: 				'caravan',
		type: 				'creature',
		color: 				['orange'],
		time: 				1,
		image: 				'cards/beach-5437910_640.png',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{slow_own: 1, turncoat: 1},
		hero_version: 			{
			name: 				'caravan',
			type: 				'creature',
			image: 				'cards/beach-5437910_640.png',
			image_position: 	'bottom',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{hasten: 1},
		},
		recipe:{
			poverty: 			1,
			camel: 				1,
			peasant: 			1
		}
	},
	
	caretaking_druid:{
		name: 				'caretaking druid',
		type: 				'creature',
		color: 				['green'],
		time: 				6,
		image: 				'cards/druid-3442618_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, heal: 1, repair: 1},
		hero_version: 			{
			name: 				'caretaking druid',
			type: 				'creature',
			image: 				'cards/druid-3442618_1280.jpg',
			power: 				1,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, heal: 1, repair: 1},
		},
		recipe:{
			calm_druid: 		1,
			lumber: 			1,
			book_of_nature: 	1
		}
	},
	
	carnivorous_plant:{
		name: 				'carnivorous plant',
		type: 				'object',
		color: 				['green'],
		time: 				6,
		image: 				'cards/carnivorous-plant-217187_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{thorns: 2, feast: 4, trap: 1},
		hero_version: 			{
			name: 				'carnivorous plant',
			type: 				'object',
			image: 				'cards/carnivorous-plant-217187_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{thorns: 1, feast: 4, trap: 1},
		},
		recipe:{
			thorned_tree: 		1,
			healing_oil: 		1,
			book_of_nature: 	1
		}
	},
	castle:{
		name: 				'castle',
		type: 				'structure',
		color: 				['yellow'],
		time: 				4,
		image: 				'cards/castle-832543_640.jpg',
		power: 				1,
		armor: 				4,
		health: 			4,
		abilities: 			{restore_hero: 1, counter: 1},
		hero_version: 			{
			name: 				'castle',
			type: 				'structure',
			image: 				'cards/castle-832543_640.jpg',
			power: 				1,
			armor: 				6,
			health: 			40,
			abilities: 			{restore_hero: 1, counter: 1},
		},
		recipe:{
			court_lady: 		1,
			fort: 				1,
		}
	},
	
	chain_lightning:{
		name: 				'chain lightning',
		type: 				'spell',
		color: 				['blue'],
		time: 				1,
		image: 				'cards/norman-79860_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{lightning_bolt: 2, go_again: 1},
		recipe:{
			lightning_bolt: 	1,
			lightning_storm: 	1
		}
	},
	citrine:{
		name: 				'citrine',
		type: 				'artifact',
		color: 				['yellow'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/citrine-3201605_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{restore_hero: 1, delay: 3},
		recipe:{
			mana_crystal: 		1,
			stone: 				1,
			holy_relic: 		1
		}
	},
	cleansing_water:{
		name: 				'cleansing water',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.5,
		basic_reward: 		true,
		time: 				1,
		image: 				'cards/air-bubbles-230014_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{cleanse_all: 6},
	},
	
	clockwork_automaton:{
		name: 				'clockwork automaton',
		type: 				'object',
		color: 				['blue'],
		pick_chance: 		1,
		time: 				11,
		image: 				'cards/fantasy-2513222_1280.jpg',
		power: 				0,
		armor: 				4,
		health: 			8,
		abilities: 			{gather_energy: 1, energize_self: 1, strike: 1},
		hero_version: 			{
			name: 				'clockwork automaton',
			type: 				'object',
			image: 				'cards/fantasy-2513222_1280.jpg',
			power: 				2,
			armor: 				8,
			health: 			30,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			ore: 				1,
			mana_crystal: 		1,
			raise_dead: 		1
		}
	},
	clockwork_hummingbird:{
		name: 				'clockwork hummingbird',
		type: 				'object',
		color: 				['blue'],
		pick_chance: 		1,
		time: 				2,
		image: 				'cards/clockwork-4171696_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{gather_energy: 1, energy_strike: 1, flying: 1},
		hero_version: 			{
			name: 				'clockwork hummingbird',
			type: 				'object',
			image: 				'cards/clockwork-4171696_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 2, flying: 1},
		},
		recipe:{
			clockwork_automaton: 		1,
			natures_touch: 				1,
		}
	},
	combat_medic:{
		name: 				'combat medic',
		type: 				'creature',
		color: 				['orange','yellow'],
		time: 				4,
		image: 				'cards/amazone-2148911_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, heal: 1},
		hero_version: 			{
			name: 				'combat medic',
			type: 				'creature',
			image: 				'cards/amazone-2148911_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, heal: 1},
		},
		recipe:{
			gladiator: 			1,
			angelic_blessing: 	1
		}
	},
	corrupt_merchant:{
		name: 				'corrupt merchant',
		type: 				'creature',
		color: 				['purple','yellow'],
		time: 				3,
		image: 				'cards/mystical-5398548_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, steal_artifact: 1},
		hero_version: 			{
			name: 				'corrupt merchant',
			type: 				'creature',
			image: 				'cards/mystical-5398548_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, steal_artifact: 5},
		},
		recipe:{
			peasant: 			1,
			poverty: 			1,
			diamond: 			1
		}
	},
	
	court_lady:{
		name: 				'court lady',
		type: 				'creature',
		color: 				['yellow'],
		time: 				4,
		image: 				'cards/fantasy-2899611_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, restore_hero: 1, draw_once: 1},
		hero_version: 			{
			name: 				'court lady',
			type: 				'creature',
			image: 				'cards/fantasy-2899611_640.jpg',
			image_position: 		'top',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, restore_hero: 1, draw_once: 1},
		},
		recipe:{
			royal_servant: 		1,
			paper: 				1
		}
	},
	/*crumble:{
		name: 				'crumble',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/brick-2205882_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{demolish: 1},
		recipe:{
			mana_crystal: 		1,
			stone: 				1
		}
	},*/
	
	crypt_elf:{
		name: 				'crypt elf',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['purple','green'],
		time: 				6,
		image: 				'cards/fantasy-3699102_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, poisonous: 1, return_soul: 1},
		hero_version: 			{
			name: 				'crypt elf',
			type: 				'creature',
			image: 				'cards/fantasy-3699102_640.jpg',
			image_position: 	'center',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, poisonous: 1, reclaim_creatures: 1},
		},
		recipe:{
			forest_elf: 		1,
			cursed_crypt: 		1,
			herbalists_lab: 	1
		}
	},
	crystal_dragon:{
		name: 				'crystal dragon',
		type: 				'creature',
		color: 				['blue'],
		time: 				23,
		image: 				'cards/isolated-4788969_640.jpg',
		power: 				4,
		armor: 				4,
		health: 			8,
		abilities: 			{strike: 1, flying: 1, hasten: 1},
		hero_version: 			{
			name: 				'crystal dragon',
			type: 				'creature',
			image: 				'cards/isolated-4788969_640.jpg',
			power: 				2,
			armor: 				4,
			health: 			20,
			abilities: 			{strike_nearest: 1, flying: 1, hasten: 1},
		},
		recipe:{
			mana_orb: 			1,
			mana_crystal: 		1,
			magic_attunement: 	1
		}
	},
	
	curse_of_the_leech:{
		name: 				'curse of the leech',
		type: 				'spell',
		color: 				['purple'],
		time: 				3,
		image: 				'cards/art-3084798_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{curse_all: 2},
		recipe:{
			magic_attunement: 	1,
			deaths_call: 		1,
		}
	},
	
	cursed_crypt:{
		name: 				'cursed crypt',
		type: 				'structure',
		color: 				['purple'],
		pick_chance: 		0.5,
		time: 				2,
		image: 				'cards/crypt-229934_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{deaths_revenge: 2},
    	placement: 			'right',
		hero_version: 			{
			name: 				'cursed crypt',
			type: 				'structure',
			image: 				'cards/crypt-229934_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			80,
			abilities: 			{deaths_revenge: 2},
		},
		recipe:{
			curse_of_the_leech: 1,
			mausoleum: 			1,
			bones: 				1
		}
	},
	dance_of_the_butterfly:{
		name: 				'dance of the butterfly',
		type: 				'spell',
		color: 				['green','blue'],
		pick_chance: 		0.5,
		time: 				6,
		image: 				'cards/abstract-979682_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{weaken_all: 1},
		recipe:{
			blue_butterflies: 	1,
			soften: 			1,
		}
	},
	
	dancing_devil:{
		name: 				'dancing devil',
		type: 				'creature',
		color: 				['red'],
		time: 				5,
		image: 				'cards/devil-3852875_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, move: 1, resist_fire: 2},
		hero_version: 			{
			name: 				'dancing devil',
			type: 				'creature',
			image: 				'cards/devil-3852875_640.jpg',
			image_position:     'top',
			power: 				3,
			armor: 				0,
			health: 			55,
			abilities: 			{strike_nearest: 1, resist_fire: 1},
		},
		recipe:{
			fire_imp: 			1,
			force_pull: 		1,
		}
	},
	dark_angel:{
		name: 				'dark angel',
		type: 				'creature',
		color: 				['purple'],
		time: 				3,
		image: 				'cards/angel-2048642_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, cursed_entry: 2, flying: 1},
		hero_version: 			{
			name: 				'dark angel',
			type: 				'creature',
			image: 				'cards/angel-2048642_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, curse_arrivals: 1, flying: 1},
		},
		recipe:{
			young_angel: 		1,
			cursed_crypt: 		1,
		}
	},
	
	dark_shaman:{
		name: 				'dark shaman',
		type: 				'creature',
		color: 				['purple','blue'],
		time: 				5,
		image: 				'cards/beauty-354575_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, erase_spell: 1},
		hero_version: 			{
			name: 				'dark shaman',
			type: 				'creature',
			image: 				'cards/beauty-354575_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, erase_spell: 3},
		},
		recipe:{
			shaman: 			1,
			embrace_pain: 		1,
		}
	},

	dark_scout:{
		name: 				'dark scout',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/gothic-2966458_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, flank: 1},
		placement: 			'right',
		hero_version: 			{
			name: 				'dark scout',
			type: 				'creature',
			image: 				'cards/gothic-2966458_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot: 1},
		},
		recipe:{
			archer: 			1,
			amethyst: 			1,
		}
	},
	
	dark_seer:{
		name: 				'dark seer',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/gothic-3264763_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, return_soul: 1},
		hero_version: 			{
			name: 				'dark seer',
			type: 				'creature',
			image: 				'cards/gothic-3264763_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, reclaim_creatures: 1},
		},
		recipe:{
			dark_warrior: 		1,
			amethyst: 			1,
		}
	},
	dark_warrior:{
		name: 				'dark warrior',
		type: 				'creature',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/joan-of-arc-4022017_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'dark warrior',
			type: 				'creature',
			image: 				'cards/joan-of-arc-4022017_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			peasant: 			1,
			bones: 				1,
		}
	},
	darkling:{
		name: 				'darkling',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/portrait-4558524_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, discard: 1, discard_enemy: 1},
		hero_version: 			{
			name: 				'darkling',
			type: 				'creature',
			image: 				'cards/portrait-4558524_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, discard: 1, discard_enemy: 1},
		},
		recipe:{
			dark_warrior: 			1,
			embrace_pain: 			1,
		}
	},
	
	daughter_of_light:{
		name: 				'daughter of light',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/fantasy-3471481_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, blessed_arrivals: 3},
		hero_version: 			{
			name: 				'daughter of light',
			type: 				'creature',
			image: 				'cards/fantasy-3471481_1280.jpg',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{blessed_arrivals: 5},
		},
		recipe:{
			devout_nun: 		1,
			holy_relic: 		1
		}
	},
	deamon:{
		name: 				'deamon',
		type: 				'creature',
		color: 				['red'],
		time: 				3,
		image: 				'cards/demon-454476_640.jpg',
		power: 				6,
		armor: 				0,
		health: 			2,
		effects:{
			burning: 		3,
		},
		abilities: 			{seek_enemy:1, strike: 1, reach: 1},
		hero_version: 			{
			name: 				'deamon',
			type: 				'creature',
			image: 				'cards/demon-454476_640.jpg',
			power: 				4,
			armor: 				0,
			health: 			20,
			effects:{
				burning: 		3,
			},
			abilities: 			{strike_nearest: 1, precision:1, reach: 1},
		},
		recipe:{
			half_deamon: 		2
		}
	},
	deamon_lord:{
		name: 				'deamon lord',
		type: 				'creature',
		color: 				['red'],
		time: 				8,
		image: 				'cards/fantasy-5521222_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, fireproof: 1, burning_rage: 1},
		hero_version: 			{
			name: 				'deamon lord',
			type: 				'creature',
			image: 				'cards/fantasy-5521222_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, fireproof: 1, burning_rage: 1},
		},
		recipe:{
			princess: 		1,
			deamon: 		1
		}
	},
	
	deaths_call:{
		name: 				'death\'s call',
		type: 				'spell',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/fantasy-2881646_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{true_curse: 1},
		recipe:{
			amethyst: 			1,
			bones: 				1
		}
	},
	
	demolitionist:{
		name: 				'demolitionist',
		type: 				'creature',
		color: 				['red'],
		time: 				3,
		image: 				'cards/man-405478_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{plant_explosives: 1},
		hero_version: 			{
			name: 				'demolitionist',
			type: 				'creature',
			image: 				'cards/man-405478_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, plant_explosives: 1},
		},
		recipe:{
			peasant: 			1,
			explosive_barrel: 	1,
		}
	},
	desert_fox:{
		name: 				'desert fox',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/desert-fox-2444230_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, move_away: 1, guard: 1},
		reset_time: 		1,
		safe_slot: 			false,
		hero_version: 			{
			name: 				'desert fox',
			type: 				'creature',
			image: 				'cards/desert-fox-2444230_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			boar: 				1,
			sandstorm: 			1
		}
	},
	
	desert_sage:{
		name: 				'desert sage',
		type: 				'creature',
		color: 				['orange'],
		pick_chance: 		0.2,
		time: 				5,
		image: 				'cards/fantasy-2615983_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, heal_empowered: 2},
		hero_version: 			{
			name: 				'desert sage',
			type: 				'creature',
			image: 				'cards/fantasy-2615983_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, heal_empowered: 2},
		},
		recipe:{
			peasant: 			1,
			sandstorm: 			1,
			herbs: 				1,
			amber: 				1
		}
	},
	devout_nun:{
		name: 				'devout nun',
		type: 				'creature',
		color: 				['yellow'],
		time: 				2,
		image: 				'cards/nun-4018982_640.png',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, blessed_entry: 1},
		hero_version: 			{
			name: 				'devout nun',
			type: 				'creature',
			image: 				'cards/nun-4018982_640.png',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			peasant: 			1,
			holy_relic: 		1,
		}
	},
	
	diamond:{
		name: 				'diamond',
		type: 				'artifact',
		color: 				['colorless'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/diamond-161739_640.png',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{lull: 1, empower_ally: 1, delay: 5},
		recipe:{
			ore: 				1,
			giants_foot: 		1,
		}
	},
	
	drown:{
		name: 				'drown',
		type: 				'spell',
		color: 				['blue'],
		time: 				4,
		image: 				'cards/fantasy-4138401_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{drown: 1},
		recipe:{
			cleansing_water: 	2,
		}
	},
	druid:{
		name: 				'druid',
		type: 				'creature',
		color: 				['green'],
		time: 				5,
		image: 				'cards/druid-1950104_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, heal: 1, return_soul: 1},
		hero_version: 			{
			name: 				'druid',
			type: 				'creature',
			image: 				'cards/druid-1950104_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, heal: 1},
		},
		recipe:{
			grove_mystic: 		1,
			healing_oil: 		1,
			wood_trinket: 		1
		}
	},
	dryad:{
		name: 				'dryad',
		type: 				'creature',
		color: 				['green'],
		time: 				5,
		image: 				'cards/composing-2391033_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			7,
		abilities: 			{strike: 1, regenerate: 2},
		hero_version: 			{
			name: 				'dryad',
			type: 				'creature',
			image: 				'cards/composing-2391033_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, regenerate: 2},
		},
		recipe:{
			lumber: 			1,
			natures_touch: 		1,
			herbs: 				1
		}
	},
	
	eagle:{
		name: 				'eagle',
		type: 				'creature',
		color: 				['orange'],
		time: 				2,
		image: 				'cards/eagle-2044134_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, surprise_strike: 1, flying: 1},
		hero_version: 			{
			name: 				'eagle',
			type: 				'creature',
			image: 				'cards/eagle-2044134_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, flying: 1},
		},
		recipe:{
			yellow_ara: 		1,
			surprise_attack: 	1,
		}
	},
	elf_amazone:{
		name: 				'elf amazone',
		type: 				'creature',
		color: 				['green'],
		time: 				9,
		image: 				'cards/dragon-3345081_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, evade: 1, reach: 1},
		hero_version: 			{
			name: 				'elf amazone',
			type: 				'creature',
			image: 				'cards/dragon-3345081_1280.jpg',
			power: 				2,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_nearest: 1, evade: 1, reach: 1},
		},
		recipe:{
			forest_elf: 		1,
			elf_commander: 		1,
			lumber: 			1,
			ore: 				1
		}
	},
	elf_archer:{
		name: 				'elf archer',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/fantasy-5018226_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, evade: 1},
		hero_version: 			{
			name: 				'elf archer',
			type: 				'creature',
			image: 				'cards/fantasy-5018226_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{shoot: 1, evade: 1},
		},
		recipe:{
			forest_elf: 		1,
			quiver: 			1,
		}
	},
	
	elf_commander:{
		name: 				'elf commander',
		type: 				'creature',
		color: 				['green'],
		time: 				4,
		image: 				'cards/fantasy-4458063_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, command_ally: 1},
		hero_version: 			{
			name: 				'elf commander',
			type: 				'creature',
			image: 				'cards/fantasy-4458063_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{command_ally: 1},
		},
		recipe:{
			forest_elf: 		1,
			natures_touch: 		1,
			emerald: 			1,
			ore: 				1,
			mind_control: 		1
		}
	},
	elf_death_druid:{
		name: 				'elf death druid',
		type: 				'creature',
		color: 				['purple','green'],
		time: 				5,
		image: 				'cards/elbe-2432967_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, return_soul: 1, death_curse: 2},
		hero_version: 			{
			name: 				'elf death druid',
			type: 				'creature',
			image: 				'cards/elbe-2432967_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, regenerate: 1, deaths_curse: 1},
		},
		recipe:{
			fallen_elf: 		1,
			mausoleum: 			1
		}
	},
	
	elf_gravekeeper:{
		name: 				'elf gravekeeper',
		type: 				'creature',
		color: 				['purple'],
		time: 				4,
		image: 				'cards/fantasy-5381614_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, recall_soul: 1},
		hero_version: 			{
			name: 				'elf gravekeeper',
			type: 				'creature',
			image: 				'cards/fantasy-5381614_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, recall_soul: 1},
		},
		recipe:{
			elf_death_druid: 	1,
			raise_dead: 		1,
		}
	},
	elf_healer:{
		name: 				'elf healer',
		type: 				'creature',
		color: 				['green'],
		time: 				3,
		image: 				'cards/fantasy-2944440_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{heal: 2, cleanse: 1},
		hero_version: 			{
			name: 				'elf healer',
			type: 				'creature',
			image: 				'cards/fantasy-2944440_1280.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{heal: 2, cleanse: 1},
		},
		recipe:{
			elf_protector: 		1,
			herbs: 				1,
			healing_oil: 		1
		}
	},
	
	elf_mystic:{
		name: 				'elf mystic',
		type: 				'creature',
		color: 				['green','blue'],
		time: 				3,
		image: 				'cards/composing-5394355_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolts: 1, lull: 1, cleanse: 1},
		hero_version: 			{
			name: 				'elf mystic',
			type: 				'creature',
			image: 				'cards/composing-5394355_640.jpg',
			image_position: 	'center',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolts: 1, lull: 1, cleanse: 1},
		},
		recipe:{
			elf_healer: 		1,
			mana_crystal: 		1,
		}
	},
	elf_protector:{
		name: 				'elf protector',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/fantasy-3639999_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fortify: 1, cleanse: 2},
		hero_version: 			{
			name: 				'elf protector',
			type: 				'creature',
			image: 				'cards/fantasy-3639999_1280.jpg',
			image_position: 	'center',
			power: 				false,
			armor: 				0,
			health: 			50,
			abilities: 			{fortify: 1, cleanse: 2},
		},
		recipe:{
			elf_scout: 			1,
			healing_oil: 		1,
			ore: 				1
		}
	},
	elf_scout:{
		name: 				'elf scout',
		type: 				'creature',
		color: 				['green'],
		time: 				1,
		image: 				'cards/forest-2636034_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, stealth: 1},
		hero_version: 			{
			name: 				'elf scout',
			type: 				'creature',
			image: 				'cards/forest-2636034_1280.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, hide: 1},
		},
		recipe:{
			forest_elf: 		1,
			lumber: 			1,
   		}
	},
	elf_striker:{
		name: 				'elf striker',
		type: 				'creature',
		color: 				['green','red'],
		time: 				8,
		image: 				'cards/fantasy-2778822_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 2, evade: 1},
		hero_version: 			{
			name: 				'elf stiker',
			type: 				'creature',
			image: 				'cards/fantasy-2778822_1280.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			15,
			abilities: 			{strike_nearest: 2, evade: 1},
		},
		recipe:{
			elf_scout: 			1,
			surprise_attack: 	1,
		}
	},
	embrace_pain:{
		name: 				'embrace pain',
		type: 				'spell',
		color: 				['purple'],
		pick_chance: 		1,
		time: 				4,
		image: 				'cards/composing-2391017_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{discard_enemy: 1},
		recipe:{
			bones: 				1,
			deaths_call: 		1,
		}
	},
	
	emerald:{
		name: 				'emerald',
		type: 				'artifact',
		color: 				['green'],
		pick_chance: 		0.5,
		time: 				6,
		image: 				'cards/emerald-1137406_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{heal_all: 1, delay: 4},
		recipe:{
			mana_crystal: 		1,
			stone: 				1,
			herbs: 				1
		}

	},
	enrage_enemy:{
		name: 				'enrage enemy',
		type: 				'spell',
		color: 				['red'],
		pick_chance: 		0.1,
		time: 				1,
		image: 				'cards/anger-18658_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{enrage_enemy: 1},
		recipe:{
			burning_rage: 		1,
			force_pull: 		1
		}
	},
	
	exotic_mage:{
		name: 				'exotic mage',
		type: 				'creature',
		color: 				['orange','blue'],
		time: 				3,
		image: 				'cards/fantasy-2495660_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{power_bolt: 1, adrenaline: 1},
		hero_version: 			{
			name: 				'exotic mage',
			type: 				'creature',
			image: 				'cards/fantasy-2495660_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			20,
			abilities: 			{power_bolt: 1, adrenaline: 1},
		},
		recipe:{
			pure_mage: 			1,
			amber: 				1,
			magic_attunement: 	1
		}
	},
	
	expert_fencer:{
		name: 				'expert fencer',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/woman-3277343_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, precision: 1, parry: 1},
		hero_version: 			{
			name: 				'expert fencer',
			type: 				'creature',
			image: 				'cards/woman-3277343_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, precision: 1, parry: 1},
		},
		recipe:{
			court_lady: 		1,
			surprise_attack: 	1,
		}
	},
	explosive_barrel:{
		name: 				'explosive barrel',
		type: 				'object',
		color: 				['red'],
		time: 				1,
		image: 				'cards/wooden-258622_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{explode: 4},
		hero_version: 			{
			name: 				'explosive barrel',
			type: 				'object',
			image: 				'cards/wooden-258622_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{fire_shield: 2},
		},
		recipe:{
			lumber: 			1,
			bomb: 				1
		}
	},
	fairy_scout:{
		name: 				'fairy scout',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/art-2436545_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, flank: 1, flying: 1},
		placement: 			'right',
		hero_version: 			{
			name: 				'fairy scout',
			type: 				'creature',
			image: 				'cards/art-2436545_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			50,
			abilities: 			{shoot: 1, flying: 1},
		},
		recipe:{
			innocent_fairy: 		1,
			quiver: 				1
		}
	},
	
	fairy_mystic:{
		name: 				'fairy mystic',
		type: 				'creature',
		color: 				['green'],
		time: 				3,
		image: 				'cards/fantasy-5410138_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1, resurrect_ally: 2},
		hero_version: 			{
			name: 				'fairy mystic',
			type: 				'creature',
			image: 				'cards/fantasy-5410138_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, flying: 1, resurrect_ally: 1},
		},
		recipe:{
			innocent_fairy: 	1,
			bones: 				1,
			herbs: 				1
		}
	},
	fairy_spirit:{
		name: 				'fairy spirit',
		type: 				'creature',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/fairy-2688853_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, resurrect: 4, undead: 1},
		hero_version: 			{
			name: 				'fairy spirit',
			type: 				'creature',
			image: 				'cards/fairy-2688853_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, flying: 1, resurrect: 1, undead: 1},
		},
		recipe:{
			fairy_mystic: 		1,
			mausoleum: 			1
		}
	},
	
	fairy_warrior:{
		name: 				'fairy warrior',
		type: 				'creature',
		color: 				['green'],
		time: 				3,
		image: 				'cards/fantasy-3332119_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{seek_enemy: 1, strike: 1, move_away: 1, flying: 1},
		hero_version: 			{
			name: 				'fairy warrior',
			type: 				'creature',
			image: 				'cards/fantasy-3332119_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, flying: 1},
		},
		recipe:{
			fairy_scout: 		1,
			surprise_attack: 	1,
		}
	},
	fall_of_giants:{
		name: 				'fall of giants',
		type: 				'spell',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/fantasy-3311161_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{kill_giant: 10},
		recipe:{
			giants_foot: 		2
		}
	},
	
	fallen_elf:{
		name: 				'fallen elf',
		type: 				'creature',
		color: 				['purple'],
		time: 				5,
		image: 				'cards/fantasy-5504870_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1, cursed_touch: 1},
		hero_version: 			{
			name: 				'fallen elf',
			type: 				'creature',
			image: 				'cards/fantasy-5504870_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_nearest: 1, evade: 1, cursed_touch: 1},
		},
		recipe:{
			forest_elf: 		1,
			amethyst: 			1,
		}
	},
	fiery_sacrifice:{
		name: 				'fiery sacrifice',
		type: 				'spell',
		color: 				['red'],
		time: 				2,
		image: 				'cards/fire-2648873_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{sacrifice_unit: 1, burn_all: 10, minimum_allies: 1, minimum_enemies: 3},
		recipe:{
			burning_rage: 			1,
			mana_crystal: 			1
		}
	},
	fire_ball:{
		name: 				'fire ball',
		type: 				'spell',
		color: 				['red'],
		time: 				2,
		image: 				'cards/big-bang-422305_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fire_ball: 4},
		recipe:{
			magic_attunement: 			1,
			bomb: 						1
		}
	},
	
	fire_bolt:{
		name: 				'fire bolt',
		type: 				'spell',
		color: 				['red'],
		basic_reward: 		true,
		time: 				1,
		image: 				'cards/flame-726268_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fire_bolt: 4},
	},
	fire_deer:{
		name: 				'fire deer',
		type: 				'creature',
		color: 				['green', 'red'],
		time: 				5,
		image: 				'cards/fantasy-3232570_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fire_bolt: 1},
		hero_version: 			{
			name: 				'fire deer',
			type: 				'creature',
			image: 				'cards/fantasy-3232570_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, fire_bolt: 1},
		},
		recipe:{
			boar: 				1,
			fire_ball: 			1
		}
	},
	fire_devil:{
		name: 				'fire devil',
		type: 				'creature',
		color: 				['red'],
		time: 				6,
		image: 				'cards/devil-2263053_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, burn: 1, resist_fire: 2},
		hero_version: 			{
			name: 				'fire devil',
			type: 				'creature',
			image: 				'cards/devil-2263053_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, burn: 1, resist_fire: 2},
		},
		recipe:{
			dancing_devil: 		1,
			candle: 			1
		}
	},
	
	fire_imp:{
		name: 				'fire imp',
		type: 				'creature',
		color: 				['red'],
		time: 				0,
		image: 				'cards/fantasy-3422153_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 1},
		hero_version: 			{
			name: 				'fire imp',
			type: 				'creature',
			image: 				'cards/fantasy-3422153_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{fire_bolt: 1},
		},
		recipe:{
			candle: 			1,
			fire_bolt: 			1
		}
	},
	fire_knight:{
		name: 				'fire knight',
		type: 				'creature',
		color: 				['red','yellow'],
		time: 				16,
		image: 				'cards/cd-cover-3432115_640.jpg',
		power: 				2,
		armor: 				3,
		health: 			6,
		abilities: 			{strike: 1, burning_entry: 2, block: 1},
		hero_version: 			{
			name: 				'fire knight',
			type: 				'creature',
			image: 				'cards/cd-cover-3432115_640.jpg',
			power: 				2,
			armor: 				5,
			health: 			25,
			abilities: 			{strike_nearest: 1, block: 1},
		},
		recipe:{
			shield_maiden: 		1,
			burning_ruins: 		1
		}
	},
	
	fire_salamander:{
		name: 				'fire salamander',
		type: 				'creature',
		color: 				['red'],
		time: 				3,
		image: 				'cards/amphibia-87916_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, fire_shield: 1, resist_fire: 1},
		hero_version: 			{
			name: 				'fire salamander',
			type: 				'creature',
			image: 				'cards/amphibia-87916_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			55,
			abilities: 			{fire_shield: 2, resist_fire: 1},
		},
		recipe:{
			boar: 				1,
			cleansing_water: 	1,
			hellfire: 			1,
		}
	},
	
	fire_mage:{
		name: 				'fire mage',
		type: 				'creature',
		color: 				['red'],
		time: 				10,
		image: 				'cards/portrait-3377271_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{fire_ball: 2, fireproof: 1},
		hero_version: 			{
			name: 				'fire mage',
			type: 				'creature',
			image: 				'cards/portrait-3377271_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_ball: 2, fireproof: 1},
		},
		recipe:{
			flame_lover: 		1,
			fire_ball: 			1
		}
	},
	firtile_dirt:{
		name: 				'firtile dirt',
		type: 				'spell',
		color: 				['green'],
		basic_reward: 		true,
		pick_chance: 		0.2,
		time: 				1,
		image: 				'cards/dirt-947985_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{hasten_structure: 5},
	},
	
	flame_archer:{
		name: 				'flame archer',
		type: 				'creature',
		color: 				['yellow','red'],
		time: 				3,
		image: 				'cards/woman-2209887_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, ignites: 1},
		hero_version: 			{
			name: 				'flame archer',
			type: 				'creature',
			image: 				'cards/woman-2209887_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{shoot: 1, ignites: 1},
		},
		recipe:{
			archer: 			1,
			burning_ring: 		1
		}
	},
	
	flame_child:{
		name: 				'flame child',
		type: 				'creature',
		color: 				['red'],
		time: 				5,
		image: 				'cards/woman-2593264_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, resist_fire: 1, fire_bolt: 1},
		hero_version: 			{
			name: 				'flame child',
			type: 				'creature',
			image: 				'cards/woman-2593264_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, resist_fire: 1, fire_bolt: 1},
		},
		recipe:{
			flame_lover: 			1,
			candle: 				1
		}
	},
	flame_deamon:{
		name: 				'flame deamon',
		type: 				'creature',
		color: 				['red','purple'],
		time: 				15,
		image: 				'cards/dragon-955348_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fire_aura: 1, flying: 1, resurrect: 1},
		hero_version: 			{
			name: 				'flame deamon',
			type: 				'creature',
			image: 				'cards/dragon-955348_640.jpg',
			image_position: 	'bottom',
			power: 				2,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, flying: 1, resurrect: 1},
		},
		recipe:{
			bones: 				1,
			deamon: 			1,
			levitate: 			1
		}
	},
	
	flame_fairy:{
		name: 				'flame fairy',
		type: 				'creature',
		color: 				['red','green'],
		time: 				3,
		image: 				'cards/fantasy-3350952_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, fire_bolt: 1, flying: 1},
		hero_version: 			{
			name: 				'flame fairy',
			type: 				'creature',
			image: 				'cards/fantasy-3350952_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, fire_bolt: 1, flying: 1},
		},
		recipe:{
			fairy_mystic: 		1,
			fire_ball: 			1
		}
	},
	
	flame_greeter:{
		name: 				'flame greeter',
		type: 				'creature',
		color: 				['red'],
		time: 				2,
		image: 				'cards/woman-3461565_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, burn_arrivals: 1},
		hero_version: 			{
			name: 				'flame greeter',
			type: 				'creature',
			image: 				'cards/woman-3461565_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, burn_arrivals: 1},
		},
		recipe:{
			fire_mage: 			1,
			candle: 			1
		}
	},
	flame_horn:{
		name: 				'flame horn',
		type: 				'creature',
		color: 				['red'],
		time: 				5,
		image: 				'cards/dark-4958784_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, counter: 1, ignites: 1},
		hero_version: 			{
			name: 				'flame horn',
			type: 				'creature',
			image: 				'cards/dark-4958784_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, counter: 1, ignites: 1},
		},
		recipe:{
			fire_salamander: 		1,
			surprise_attack: 		1
		}
	},
	flame_lover:{
		name: 				'flame lover',
		type: 				'creature',
		color: 				['red'],
		time: 				4,
		image: 				'cards/phoenix-4354737_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, burning_fire: 1, fireproof: 1},
		hero_version: 			{
			name: 				'flame lover',
			type: 				'creature',
			image: 				'cards/phoenix-4354737_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, burning_fire: 1, fireproof: 1},
		},
		recipe:{
			peasant: 				1,
			candle: 				1
		}
	},
	
	/*flame_summoner:{
		name: 				'flame summoner',
		type: 				'creature',
		color: 				['red'],
		time: 				5,
		image: 				'cards/fantasy-4862558_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			7,
		abilities: 			{call_fire_imp: {
			level: 	1,
			delay: 	3,
			starting_delay: 3,
			additional_text: 	'This ability is used every third turn.'
		}, strike: 1, ignites: 1},
		hero_version: 			{
			name: 				'flame summoner',
			type: 				'creature',
			image: 				'cards/fantasy-4862558_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{call_fire_imp: {
				level: 	1,
				delay: 	3,
				starting_delay: 3,
				additional_text: 	'This ability is used every third turn.'
			}, strike_nearest: 1, ignites: 1},
		},
		recipe:{
			fire_mage: 		1,
			fire_imp: 		1
		}
	},*/
	
	force_pull:{
		name: 				'force pull',
		type: 				'spell',
		color: 				['blue'],
		time: 				1,
		image: 				'cards/amazone-5178719_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{force_pull: 2},
		recipe:{
			magic_attunement: 	1,
			arcane_missiles: 	1
		}
	},
	forest_burner:{
		name: 				'forest burner',
		type: 				'creature',
		color: 				['red'],
		time: 				1,
		image: 				'cards/druid-3442656_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{burn_opponent: 3},
		hero_version: 			{
			name: 				'forest burner',
			type: 				'creature',
			image: 				'cards/druid-3442656_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{fire_ball: 2},
		},
		recipe:{
			peasant: 			1,
			hellfire: 			1,
			lumber: 			1
		}
	},
	
	forest_elf:{
		name: 				'forest elf',
		type: 				'creature',
		color: 				['green'],
		time: 				1,
		image: 				'cards/woman-3407771_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, healing_wave: 1, evade: 1},
		hero_version: 			{
			name: 				'forest elf',
			type: 				'creature',
			image: 				'cards/woman-3407771_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, heal: 1, evade: 1},
		},
		recipe:{
			natures_touch: 		1,
			herbs: 				1,
			firtile_dirt: 		1
		}
	},
	forest_noble:{
		name: 				'forest noble',
		type: 				'creature',
		color: 				['green','yellow'],
		time: 				6,
		image: 				'cards/fantasy-2125792_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike:1, restore_hero: 1},
		hero_version: 			{
			name: 				'forest noble',
			type: 				'creature',
			image: 				'cards/fantasy-2125792_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, regenerate: 1},
		},
		recipe:{
			court_lady: 		1,
			wood_trinket: 		1,
		}
	},
	forest_owl:{
		name: 				'forest owl',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/bengal-eagle-owl-3452925_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike:1, heal: 1, flying: 1},
		hero_version: 			{
			name: 				'forest owl',
			type: 				'creature',
			image: 				'cards/bengal-eagle-owl-3452925_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_nearest: 1, heal: 1, flying: 1},
		},
		recipe:{
			boar: 				1,
			levitate: 			1,
			herbs: 				1
		}
	},
	forest_saint:{
		name: 				'forest saint',
		type: 				'creature',
		color: 				['green'],
		time: 				9,
		image: 				'cards/woman-5444731_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{thorns:1, heal: 1},
		effects: 			{
			blessed: 		1
		},
		hero_version: 			{
			name: 				'forest saint',
			type: 				'creature',
			image: 				'cards/woman-5444731_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			20,
			abilities: 			{thorns: 1, heal: 1},
			effects: 			{
				blessed: 		1
			},
		},
		recipe:{
			grove_mystic: 		1,
			angelic_blessing: 	1
		}
	},
	
	fort:{
		name: 				'fort',
		type: 				'structure',
		color: 				['yellow'],
		time: 				4,
		image: 				'cards/castle-3493566_1280.jpg',
		power: 				1,
		armor: 				3,
		health: 			3,
		abilities: 			{shoot: 1, fortify: 1},
		hero_version: 			{
			name: 				'fort',
			type: 				'structure',
			image: 				'cards/castle-3493566_1280.jpg',
			power: 				1,
			armor: 				0,
			health: 			50,
			abilities: 			{shoot: 1, fortify: 1},
		},
		recipe:{
			stone: 				2,
			ore: 				1,
		}
	},
	
	friendly_shaman:{
		name: 				'friendly shaman',
		type: 				'creature',
		color: 				['blue'],
		time: 				11,
		image: 				'cards/fantasy-2657122_1280.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, redraw_spell: 2},
		hero_version: 			{
			name: 				'friendly shaman',
			type: 				'creature',
			image: 				'cards/fantasy-2657122_1280.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cast_spell: {
				level: 				1,
				delay: 				4,
				starting_delay: 	4,
				additional_text: 	'This ability is used every fourth turn.'
			}},
		},
		recipe:{
			shaman: 			1,
			magic_attunement: 	1,
			research: 			1
		}
	},
	friendship:{
		name: 				'friendship',
		type: 				'spell',
		color: 				['green'],
		time: 				4,
		image: 				'cards/boy-2910371_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{boost_ally: 1, echo: 1},
		recipe:{
			peasant: 			1,
			wood_trinket: 		1,
			amber: 				1
		}
	},
	
	frost_giant:{
		name: 				'frost giant',
		type: 				'creature',
		color: 				['blue'],
		time: 				20,
		image: 				'cards/fantasy-2925250_640.jpg',
		power: 				4,
		armor: 				0,
		health: 			7,
		abilities: 			{swipe: 1, reach: 1, resist_cold: 3},
		hero_version: 			{
			name: 				'frost giant',
			type: 				'creature',
			image: 				'cards/fantasy-2925250_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			35,
			abilities: 			{strike_nearest: 1, reach: 1, resist_cold: 3},
		},
		recipe:{
			frozen_claw: 		1,
			magic_attunement: 	1,
			giants_foot: 		1
		}
	},
	frost_mage:{
		name: 				'frost mage',
		type: 				'creature',
		color: 				['blue'],
		time: 				6,
		image: 				'cards/escaping-1582369_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{frost_bolt: 2, resist_cold: 3},
		hero_version: 			{
			name: 				'frost mage',
			type: 				'creature',
			image: 				'cards/escaping-1582369_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt: 2, resist_cold: 3},
		},
		recipe:{
			peasant: 			1,
			frozen_claw: 		1,
		}
	},
	frozen_claw:{
		name: 				'frozen claw',
		type: 				'spell',
		color: 				['blue'],
		time: 				4,
		image: 				'cards/beast-3534347_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{weaken_random: 2, slow: 2},
		recipe:{
			mana_crystal: 		1,
			cleansing_water: 	1
		}
	},
	
	gemmed_ring:{
		name: 				'gemmed ring',
		type: 				'artifact',
		color: 				['yellow','green'],
		pick_chance: 		0.5,
		time: 				6,
		image: 				'cards/drusy-665522_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{restore_hero: 1, bolster: 1, delay: 3},
		recipe:{
			mana_crystal: 		1,
			stone: 				1,
			holy_relic: 		1,
			wood_trinket: 		1
		}
	},
	genie:{
		name: 				'genie',
		type: 				'creature',
		color: 				['blue'],
		time: 				8,
		image: 				'cards/blue-3481766_1280.png',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, hasten: 1, resist_magic: 1},
		hero_version: 			{
			name: 				'genie',
			type: 				'creature',
			image: 				'cards/blue-3481766_1280.png',
			power: 				3,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, resist_magic: 1},
		},
		recipe:{
			magic_attunement: 	1,
			mana_crystal: 		5
		}
	},
	
	ghost:{
		name: 				'ghost',
		type: 				'creature',
		color: 				['purple'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/ghost-1675154_640.jpg',
		power: 				0,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, undead: 1, fade: 2},
	},
	ghost_bride:{
		name: 				'ghost bride',
		type: 				'creature',
		color: 				['purple'],
		time: 				3,
		image: 				'cards/fantasy-2913983_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			3,
		abilities: 			{sorrow: 2, resurrect: 5, undead: 1},
		hero_version: 			{
			name: 				'ghost bride',
			type: 				'creature',
			image: 				'cards/fantasy-2913983_640.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			10,
			abilities: 			{resurrect: 10, undead: 1},
		},
		recipe:{
			deaths_call: 		1,
			mausoleum: 			1,
		}
	},
	
	ghost_mage:{
		name: 				'ghost mage',
		type: 				'creature',
		color: 				['purple','red'],
		time: 				9,
		image: 				'cards/fantasy-4055030_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{fire_bolt: 2, undead: 1, evade: 1},
		hero_version: 			{
			name: 				'ghost mage',
			type: 				'creature',
			image: 				'cards/fantasy-4055030_640.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			20,
			abilities: 			{fire_bolt: 1, undead: 1, evade: 1},
		},
		recipe:{
			fire_ball: 			1,
			arcane_missiles: 	1,
			ghost_bride: 		1,
		}
	},
	ghost_mistress:{
		name: 				'ghost mistress',
		type: 				'creature',
		color: 				['purple'],
		time: 				7,
		image: 				'cards/door-3633138_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, command_undead: 1},
		hero_version: 			{
			name: 				'ghost mistress',
			type: 				'creature',
			image: 				'cards/door-3633138_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, command_undead: 1},
		},
		recipe:{
			ghost_mage: 		1,
			peasant: 			1,
			force_pull: 		1
		}
	},
	ghoul:{
		name: 				'ghoul',
		type: 				'creature',
		color: 				['purple'],
		time: 				5,
		image: 				'cards/monster-5369480_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, poisonous: 1, feast: 2, undead: 1},
		hero_version: 			{
			name: 				'ghoul',
			type: 				'creature',
			image: 				'cards/monster-5369480_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, poisonous: 1, feast: 1, undead: 1},
		},
		recipe:{
			peasant: 			1,
			deaths_call: 		1,
			herbalists_lab: 	1
		}
	},
	
	giant_gull:{
		name: 				'giant gull',
		type: 				'creature',
		color: 				['blue'],
		time: 				4,
		image: 				'cards/fantasy-3028501_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1, feast: 2},
		hero_version: 			{
			name: 				'giant gull',
			type: 				'creature',
			image: 				'cards/fantasy-3028501_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, flying: 1, feast: 2},
		},
		recipe:{
			natures_touch: 		1,
			cleansing_water: 	1,
			levitate: 			1,
			giants_foot: 		1
		}
	},
	giants_foot:{
		name: 				'giant\'s foot',
		type: 				'spell',
		color: 				['orange'],
		time: 				1,
		image: 				'cards/fantasy-3186483_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{stomp: 10},
		recipe:{
			stone: 				3,
		}
	},
	
	giant_spider:{
		name: 				'giant spider',
		type: 				'creature',
		color: 				['green'],
		time: 				5,
		image: 				'cards/european-garden-spider-5530397_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, reach: 1, trap: 1},
		hero_version: 			{
			name: 				'giant spider',
			type: 				'creature',
			image: 				'cards/european-garden-spider-5530397_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, reach: 1, trap: 1},
		},
		recipe:{
			natures_touch: 		1,
			herbalists_lab: 	1,
			firtile_dirt: 		1,
			giants_foot: 		1
		}
	},
	giraffe:{
		name: 				'giraffe',
		type: 				'creature',
		color: 				['orange'],
		pick_chance: 		1,
		time: 				2,
		image: 				'cards/etosha-3533396_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, move_away: 1},
		hero_version: 			{
			name: 				'giraffe',
			type: 				'creature',
			image: 				'cards/etosha-3533396_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			boar: 				1,
			sandstorm: 			1,
			force_pull: 		1,
		}
	},
	gladiator:{
		name: 				'gladiator',
		type: 				'creature',
		color: 				['orange'],
		time: 				3,
		image: 				'cards/amazone-2148910_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'gladiator',
			type: 				'creature',
			image: 				'cards/amazone-2148910_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			peasant: 			1,
			surprise_attack: 	1,
			ore: 				1,
		}
	},
	
	goblin:{
		name: 				'goblin',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/goblin-4747149_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, resist_magic: 1},
		hero_version: 			{
			name: 				'goblin',
			type: 				'creature',
			image: 				'cards/goblin-4747149_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, resist_magic: 1},
		},
	},
	goblin_alchemist:{
		name: 				'goblin alchemist',
		type: 				'creature',
		color: 				['purple'],
		time: 				6,
		image: 				'cards/goblin-5393644_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{poison: 1, hide: 1, resist_magic: 1},
		hero_version: 			{
			name: 				'goblin alchemist',
			type: 				'creature',
			image: 				'cards/goblin-5393644_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			35,
			abilities: 			{poison: 1, hide: 1, resist_magic: 1},
		},
		recipe:{
			goblin: 			1,
			herbalists_lab: 	1,
			amethyst: 			1
		}
	},
	
	golden_keeper:{
		name: 				'golden keeper',
		type: 				'structure',
		color: 				['yellow'],
		time: 				8,
		image: 				'cards/fantasy-3000308_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, call_ally: 1, healing_aura: 1},
		/*placement: 			'random',*/
		hero_version: 			{
			name: 				'golden keeper',
			type: 				'structure',
			image: 				'cards/fantasy-3000308_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, call_ally: 1, healing_aura: 1},
		},
		recipe:{
			stone: 				3,
			angelic_blessing: 	1
		}
	},
	golden_spirit:{
		name: 				'golden spirit',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/woman-5551326_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		placement: 			'right',
		abilities: 			{fortify_hero: 1, undead: 1, run_away: 1},
		hero_version: 			{
			name: 				'golden spirit',
			type: 				'creature',
			image: 				'cards/woman-5551326_640.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{fortify_hero: 1, evade: 1, undead: 1},
		},
		recipe:{
			yellow_spirit: 			1,
			ore: 					1
		}
	},
	golden_temple:{
		name: 				'golden temple',
		type: 				'structure',
		color: 				['orange'],
		pick_chance: 		0.5,
		time: 				14,
		image: 				'cards/fantasy-2464889_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			10,
		abilities: 			{empower_all: 1, safe_spot: 1},
		safe_slot: 			true,
		hero_version: 			{
			name: 				'golden temple',
			type: 				'structure',
			image: 				'cards/fantasy-2464889_1280.jpg',
			image_position: 	'center',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{empower_ally: 1},
		},
		recipe:{
			fort: 				1,
			temple_oracle: 		1,
			amber: 				1,
		}
	},
	green_dragon:{
		name: 				'green dragon',
		type: 				'creature',
		color: 				['green'],
		time: 				18,
		image: 				'cards/dragon-3009174_640.png',
		power: 				3,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 1, regenerate: 3, flying: 1},
		hero_version: 			{
			name: 				'green dragon',
			type: 				'creature',
			image: 				'cards/dragon-3009174_640.png',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, regenerate: 1, flying: 1},
		},
		recipe:{
			forest_owl: 		1,
			giants_foot: 		1,
			wood_trinket: 		1
		}
	},

	green_spirit:{
		name: 				'green spirit',
		type: 				'creature',
		color: 				['green'],
		time: 				1,
		image: 				'cards/fantasy-2824500_1920.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		placement: 			'right',
		abilities: 			{heal: 1, undead: 1, flank: 1},
		hero_version: 			{
			name: 				'green spirit',
			type: 				'creature',
			image: 				'cards/fantasy-2824500_1920.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{heal: 2, undead: 1},
		},
		recipe:{
			herbs: 				1,
			ghost_bride: 		1,
		}
	},
	grove_mystic:{
		name: 				'grove mystic',
		type: 				'creature',
		color: 				['green'],
		time: 				4,
		image: 				'cards/fantasy-4240045_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, heal: 1},
		hero_version: 			{
			name: 				'grove mystic',
			type: 				'creature',
			image: 				'cards/fantasy-4240045_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, heal: 1},
		},
		recipe:{
			peasant: 			1,
			herbs: 				1,
		}
	},
	
	guards:{
		name: 				'guards',
		type: 				'creature',
		color: 				['yellow'],
		time: 				8,
		image: 				'cards/persons-4853861_640.jpg',
		power: 				1,
		armor: 				3,
		health: 			4,
		abilities: 			{bring_clone: 1, strike: 1},
		hero_version: 			{
			name: 				'guards',
			type: 				'creature',
			image: 				'cards/persons-4853861_640.jpg',
			image_position: 	'top',
			power: 				3,
			armor: 				10,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			peasant: 			2,
			plate_armor: 		1,
		}
	},
	guiding_angel:{
		name: 				'guiding angel',
		type: 				'creature',
		color: 				['yellow'],
		time: 				2,
		image: 				'cards/angel-2046708_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, return_soul: 1, flying: 1},
		hero_version: 			{
			name: 				'guiding angel',
			type: 				'creature',
			image: 				'cards/angel-2046708_1280.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, flying: 1},
		},
		recipe:{
			young_angel: 		1,
			mausoleum: 			1,
		}
	},
	
	half_deamon:{
		name: 				'half deamon',
		type: 				'creature',
		color: 				['red'],
		time: 				4,
		image: 				'cards/daemon-2980812_640.jpg',
		power: 				4,
		armor: 				0,
		health: 			2,
		abilities: 			{seek_enemy: 1, strike: 1},
		hero_version: 			{
			name: 				'half deamon',
			type: 				'creature',
			image: 				'cards/daemon-2980812_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			fire_imp: 			1,
			hellfire:			1,
		}
	},
	
	haunted_forest:{
		name: 				'haunted forest',
		type: 				'structure',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/forest-5167332_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{curse: 1, fearful_aura: 1},
		hero_version: 			{
			name: 				'haunted forest',
			type: 				'structure',
			image: 				'cards/forest-5167332_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{curse_hv: 3, fearful_aura: 1},
		},
		recipe:{
			amethyst: 			1,
			firtile_dirt: 		1,
			lumber: 			1
		}
	},
	healing_oil:{
		name: 				'healing oil',
		type: 				'artifact',
		color: 				['green'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/essential-oils-3084952_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{cleanse: 1, delay: 2},
		recipe:{
			herbs: 				1,
			cleansing_water: 	1
		}
	},
	
	heart_of_fire:{
		name: 				'heart of fire',
		type: 				'spell',
		color: 				['red'],
		time: 				3,
		image: 				'cards/heart-1783918_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{plant_explosives: 6},
		recipe:{
			candle: 			1,
			explosive_barrel: 	1
		}
	},
	heat_wurm:{
		name: 				'heat wurm',
		type: 				'creature',
		color: 				['red'],
		time: 				19,
		image: 				'cards/dragon-4758109_640.jpg',
		power: 				1,
		armor: 				2,
		health: 			6,
		abilities: 			{burn_all: 2, strike: 1, armored: 1},
		hero_version: 			{
			name: 				'heat wurm',
			type: 				'creature',
			image: 				'cards/dragon-4758109_640.jpg',
			power: 				1,
			armor: 				10,
			health: 			20,
			abilities: 			{burn_all: 1, strike_nearest: 1, armored: 1},
		},
		recipe:{
			hellfire: 			1,
			fire_imp: 			1,
			giants_foot: 		1
		}
	},
	
	hellfire:{
		name: 				'hellfire',
		type: 				'spell',
		color: 				['red'],
		time: 				5,
		image: 				'cards/devil-3709219_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{hellfire: 8},
		recipe:{
			fire_bolt: 			1,
			arcane_missiles: 	1
		}
	},
	
	herbalists_lab:{
		name: 				'herbalist\'s lab',
		type: 				'structure',
		color: 				['purple','green'],
		time: 				2,
		image: 				'cards/candle-3272201_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{poison: 1},
		hero_version: 			{
			name: 				'herbalist\'s lab',
			type: 				'structure',
			image: 				'cards/candle-3272201_640.jpg',
			image_position: 	'bottom',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{poison_cloud: 6},
		},
		recipe:{
			stone: 				1,
			herbs: 				1,
		}
	},
	
	herbs:{
		name: 				'herbs',
		type: 				'artifact',
		color: 				['green'],
		pick_chance: 		0.5,
		basic_reward: 		true,
		time: 				2,
		image: 				'cards/herbs-2523119_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{heal: 1, delay: 3},
	},
	hero_stalker:{
		name: 				'hero stalker',
		type: 				'creature',
		color: 				['purple'],
		time: 				8,
		image: 				'cards/fantasy-2546695_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{move_away: 1, strike: 1, evade: 1, resist_magic: 2},
		hero_version: 			{
			name: 				'hero stalker',
			type: 				'creature',
			image: 				'cards/fantasy-2546695_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			20,
			abilities: 			{strike: 1, evade: 1, resist_magic: 2},
		},
		recipe:{
			peasant: 			1,
			amethyst: 			1,
			magic_attunement: 	1
		}
	},
	hexing_witch:{
		name: 				'hexing witch',
		type: 				'creature',
		color: 				['purple'],
		time: 				4,
		image: 				'cards/witch-3202467_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, cursed_touch: 1, reflect: 1},
		hero_version: 			{
			name: 				'hexing witch',
			type: 				'creature',
			image: 				'cards/witch-3202467_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, cursed_touch: 1, reflect: 1},
		},
		recipe:{
			dark_seer: 			1,
			amethyst: 			1,
			voodoo_doll: 		1
		}
	},
	
	hidden_lizard:{
		name: 				'hidden lizard',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/lizards-5119251_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, stealth: 1},
		hero_version: 			{
			name: 				'hidden lizard',
			type: 				'creature',
			image: 				'cards/lizards-5119251_640.jpg',
			image_position: 	'bottom',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, venom: 1, hide: 1},
		},
		recipe:{
			sandstorm: 			1,
			amethyst: 			1,
			stone: 				1
		}
	},
	hidden_swamp:{
		name: 				'hidden swamp',
		type: 				'structure',
		color: 				['purple'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/bayou-912244_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{slow: 2, resist_fire: 2},
		hero_version: 			{
			name: 				'hidden swamp',
			type: 				'structure',
			image: 				'cards/bayou-912244_1280.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{slow: 2, resist_fire: 1},
		},
		recipe:{
			cleansing_water: 	1,
			herbs: 				1,
		}
	},
	
	highwayman:{
		name: 				'highwayman',
		type: 				'creature',
		color: 				['yellow'],
		time: 				4,
		image: 				'cards/fighter-5369481_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, evade: 1, defect: 1, stealth: 1},
		hero_version: 			{
			name: 				'highwayman',
			type: 				'creature',
			image: 				'cards/fighter-5369481_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, evade: 1, stealth: 1},
		},
		recipe:{
			brigands: 			1,
			surprise_attack: 	1,
		}
	},
	
	historian:{
		name: 				'historian',
		type: 				'creature',
		color: 				['blue'],
		time: 				4,
		image: 				'cards/book-4133988_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, reclaim: 1},
		hero_version: 			{
			name: 				'historian',
			type: 				'creature',
			image: 				'cards/book-4133988_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, reclaim: 1},
		},
		recipe:{
			pure_mage: 			1,
			old_tome: 			1
		}
	},
	holy_relic:{
		name: 				'holy relic',
		type: 				'artifact',
		color: 				['yellow'],
		pick_chance: 		1,
		basic_reward: 		true,
		time: 				2,
		image: 				'cards/ank-1215054_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{blessed_arrivals: 2},
	},
	holy_sacrifice:{
		name: 				'holy sacrifice',
		type: 				'spell',
		color: 				['yellow'],
		pick_chance: 		0.5,
		time: 				7,
		image: 				'cards/dagger-1877117_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{holy_sacrifice: 5},
		recipe:{
			holy_relic: 		1,
			angelic_blessing: 	1
		}
	},
	
	honorbound_warrior:{
		name: 				'honorbound warrior',
		type: 				'creature',
		color: 				['orange'],
		time: 				2,
		image: 				'cards/fantasy-3311161_1920.jpg',
		power: 				4,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, honor_enemy: 3},
		hero_version: 			{
			name: 				'honorbound warrior',
			type: 				'creature',
			image: 				'cards/fantasy-3311161_1920.jpg',
			image_position: 	'top',
			power: 				3,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, honor_enemy: 2},
		},
		recipe:{
			gladiator: 			1,
			angelic_blessing: 	1,
		}
	},
	horned_griffin:{
		name: 				'horned griffin',
		type: 				'creature',
		color: 				['orange'],
		time: 				10,
		image: 				'cards/being-4803333_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter: 1, flying: 1},
		hero_version: 			{
			name: 				'horned griffin',
			type: 				'creature',
			image: 				'cards/being-4803333_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, counter: 1, flying: 1},
		},
		recipe:{
			yellow_ara: 		1,
			amber: 				1,
			surprise_attack: 	1
		}
	},
	horned_lizard:{
		name: 				'horned lizard',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/horned-toad-1531806_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, elemental_resistance: 1, thorns: 1},
		hero_version: 			{
			name: 				'horned lizard',
			type: 				'creature',
			image: 				'cards/horned-toad-1531806_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, elemental_resistance: 1, thorns: 1},
		},
		recipe:{
			sandstorm: 			1,
			thorned_tree: 		1,
			stone: 				1
		}
	},
	
	huge_orc:{
		name: 				'huge orc',
		type: 				'creature',
		color: 				['red','orange'],
		time: 				10,
		image: 				'cards/fantasy-3389041_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			name: 				'huge orc',
			type: 				'creature',
			image: 				'cards/fantasy-3389041_1280.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, enrage: 1},
		},
		recipe:{
			dancing_devil: 		1,
			giants_foot: 		1,
			amber: 				1
		}
	},
	hungering_ghost:{
		name: 				'hungering ghost',
		type: 				'creature',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/eye-4528085_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{seek_creature: 1, strike: 1, feast: 2, undead: 1},
		hero_version: 			{
			name: 				'hungering ghost',
			type: 				'creature',
			image: 				'cards/eye-4528085_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, feast: 3, undead: 1},
		},
		recipe:{
			ghost_bride: 		1,
			poverty: 			1,
			bones: 				1
		}
	},
	illusionist:{
		name: 				'illusionist',
		type: 				'creature',
		color: 				['blue'],
		time: 				2,
		image: 				'cards/fantasy-4122171_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, bring_clone: 2},
		hero_version: 			{
			name: 				'illusionist',
			type: 				'creature',
			image: 				'cards/fantasy-4122171_640.jpg',
			image_position:     'top',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 2, evade: 1},
		},
		recipe:{
			pure_mage: 			1,
			unsummon: 			1,
			magic_attunement: 	1
		}
	},
	
	incite_animosity:{
		name: 				'incite animosity',
		type: 				'spell',
		color: 				['blue'],
		time: 				5,
		image: 				'cards/confrontation-930744_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{blind_rage: 10},
		recipe:{
			soften: 			1,
			burning_rage: 		1,
		}
	},
	innocent_fairy:{
		name: 				'innocent fairy',
		type: 				'creature',
		color: 				['green'],
		time: 				1,
		image: 				'cards/fee-5276183_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{move: 1, strike: 1, flying: 1},
		hero_version: 			{
			name: 				'inncocent fairy',
			type: 				'creature',
			image: 				'cards/fee-5276183_640.jpg',
			image_position:     'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, flying: 1},
		},
		recipe:{
			natures_touch: 		1,
			herbs: 				1,
			levitate: 			1
		}
	},
	jousting_knight:{
		name: 				'jousting knight',
		type: 				'creature',
		color: 				['yellow'],
		time: 				11,
		image: 				'cards/knight-4593849_640.jpg',
		power: 				2,
		armor: 				2,
		health: 			5,
		abilities: 			{charge: 1, block: 1},
		hero_version: 			{
			name: 				'jousting knight',
			type: 				'creature',
			image: 				'cards/knight-4593849_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, block: 1},
		},
		recipe:{
			shield_maiden: 		1,
			force_pull: 		1
		}
	},
	
	
	lava_crab:{
		name: 				'lava crab',
		type: 				'creature',
		color: 				['red'],
		time: 				5,
		image: 				'cards/crab-63084_1280.jpg',
		power: 				2,
		armor: 				3,
		health: 			4,
		abilities: 			{strike: 1, fire_shield: 1},
		hero_version: 			{
			name: 				'lava crab',
			type: 				'creature',
			image: 				'cards/crab-63084_1280.jpg',
			power: 				2,
			armor: 				4,
			health: 			40,
			abilities: 			{strike_nearest: 1, fire_shield: 1},
		},
		recipe:{
			fire_salamander: 	1,
			plate_armor: 		1,
		}
	},
	
	levitate:{
		name: 				'levitate',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/wings-2595717_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{grant_flying:1},
		recipe:{
			magic_attunement: 	1,
			paper: 				1,
		}
	},
	library:{
		name: 				'library',
		type: 				'structure',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				6,
		image: 				'cards/bookshelf-1082309_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{draw: 1, flammable:1},
		hero_version: 			{
			name: 				'library',
			type: 				'structure',
			image: 				'cards/bookshelf-1082309_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{draw: {
				level: 			1,
				delay: 			2,
				starting_delay: 2,
				additional_text: 'This ability is used every third turn.',
			}, flammable: 1},
		},
		recipe:{
			research: 			1,
			lumber: 			1,
			stone: 				1
		}
	},
	lightning_bolt:{
		name: 				'lightning bolt',
		type: 				'spell',
		color: 				['blue'],
		time: 				4,
		image: 				'cards/witch-2733223_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{lightning_bolt: 4},
		recipe:{
			magic_attunement: 	1,
			sandstorm: 			1
		}
	},
	lightning_mage:{
		name: 				'lightning mage',
		type: 				'creature',
		color: 				['blue'],
		time: 				5,
		image: 				'cards/fantasy-1711528_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{lightning_bolt: 2},
		hero_version: 			{
			name: 				'lightning mage',
			type: 				'creature',
			image: 				'cards/fantasy-1711528_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{lightning_bolt: 2 
			/*{
				level: 		2,
				level_2: 	3,
				delay: 		4,
				starting_delay: 4,
				additional_text: 	'Will fire once every fourth turn.'
			}*/
			},
		},
		recipe:{
			peasant: 			1,
			lightning_storm: 	1
		}
	},
	lightning_storm:{
		name: 				'lightning storm',
		type: 				'spell',
		color: 				['blue'],
		time: 				6,
		image: 				'cards/colorado-2235819_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{lightning_storm: 2},
		recipe:{
			lightning_bolt: 	2,
		}
	},
	
	lion_warrior:{
		name: 				'lion warrior',
		type: 				'creature',
		color: 				['red','orange'],
		time: 				11,
		image: 				'cards/fantasy-3002301_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 2, adrenaline: 1},
		hero_version: 			{
			name: 				'lion warrior',
			type: 				'creature',
			image: 				'cards/fantasy-3002301_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 2},
		},
		recipe:{
			boar: 				1,
			surprise_attack:	1,
			amber: 				1,
			giants_foot: 		1
		}
	},
	lumber:{
		name: 				'lumber',
		type: 				'object',
		color: 				['colorless'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/wood-5348427_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{},
	},
	
	lumberjacks_axe:{
		name: 				'lumberjack\'s axe',
		type: 				'artifact',
		color: 				['colorless'],
		pick_chance: 		0.5,
		time: 				2,
		image: 				'cards/axe-1644155_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{order_strike: 1, delay: 3},
		recipe:{
			lumber: 		1,
			ore: 			1
		}
	},
	magic_attunement:{
		name: 				'magic attunement',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				8,
		image: 				'cards/bokeh-1916807_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{hasten_all: 1},
		recipe:{
			mana_crystal: 	1,
			cleansing_water: 1
		}
	},
	mesmer:{
		name: 				'mesmer',
		type: 				'creature',
		color: 				['blue'],
		time: 				5,
		image: 				'cards/fantasy-5410210_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, mesmerise: 1},
		hero_version: 			{
			name: 				'mesmer',
			type: 				'creature',
			image: 				'cards/fantasy-5410210_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, mesmerise: 1},
		},
		recipe:{
			bard: 				1,
			agate: 				1,
			soften: 			1
		}
	},
	mammoth:{
		name: 				'mammoth',
		type: 				'creature',
		color: 				['blue'],
		time: 				11,
		image: 				'cards/fantasy-2785017_1280.jpg',
		power: 				4,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, trample: 1, resist_cold: 3},
		hero_version: 			{
			name: 				'mammoth',
			type: 				'creature',
			image: 				'cards/fantasy-2785017_1280.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, trample: 1, resist_cold: 3},
		},
		recipe:{
			brown_bear: 		1,
			frozen_claw: 		1,
			giants_foot: 		1
		}
	},
	mana_crystal:{
		name: 				'mana crystal',
		type: 				'artifact',
		color: 				['blue'],
		basic_reward: 		true,
		pick_chance: 		0.5,
		time: 				2,
		image: 				'cards/crystal-758818_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{hasten: 1, delay: 3},
	},
	mana_orb:{
		name: 				'mana orb',
		type: 				'object',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				1,
		image: 				'cards/ball-3528226_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			2,
		abilities: 			{gather_energy: 1, release_energy: 1},
		hero_version: 			{
			name: 				'mana orb',
			type: 				'object',
			image: 				'cards/ball-3528226_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{hasten: 1},
		},
		recipe:{
			mana_crystal: 		2,
		}
	},
	
	mana_dragon:{
		name: 				'mana dragon',
		type: 				'creature',
		color: 				['blue'],
		time: 				22,
		image: 				'cards/fantasy-2747066_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 1, flying: 1, draw: 1, hasten: 1},
		hero_version: 			{
			name: 				'mana dragon',
			type: 				'creature',
			image: 				'cards/fantasy-2747066_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_nearest: 1, flying: 1, hasten: 1},
		},
		recipe:{
			mana_orb: 			2,
		}
	},
	
	mana_fairy:{
		name: 				'mana fairy',
		type: 				'creature',
		color: 				['blue','green'],
		time: 				3,
		image: 				'cards/dreamland-1060880_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1, hasten: 1},
		hero_version: 			{
			name: 				'mana fairy',
			type: 				'creature',
			image: 				'cards/dreamland-1060880_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, flying: 1, hasten: 1},
		},
		recipe:{
			innocent_fairy: 	1,
			mana_orb: 			1
		}
	},
	
	
	marsh_crocodile:{
		name: 				'marsh crocodile',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/crocodile-630231_1280.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, submerged: 1, discard: 1},
		hero_version: 			{
			name: 				'marsh crocodile',
			type: 				'creature',
			image: 				'cards/crocodile-630231_1280.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, submerged: 1},
		},
		recipe:{
			fire_salamander: 	1,
			hidden_swamp: 		1,
			amethyst: 			1
		}
	},
	mind_control:{
		name: 				'mind control',
		type: 				'spell',
		color: 				['blue'],
		time: 				10,
		image: 				'cards/face-1247955_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{convert: 1},
		recipe:{
			mesmer: 			1,
			magic_attunement: 	1
		}
	},
	mind_grind:{
		name: 				'mind grind',
		type: 				'spell',
		color: 				['purple'],
		time: 				4,
		image: 				'cards/fantasy-2615450_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{mill_enemy: 2},
		recipe:{
			deaths_call: 		1,
			embrace_pain: 		1
		}
	},
	mountain_elf:{
		name: 				'mountain elf',
		type: 				'creature',
		color: 				['red'],
		time: 				1,
		image: 				'cards/elf-girl-1950103_640.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, evade: 1, final_strike: 2},
		hero_version: 			{
			name: 				'mountain elf',
			type: 				'creature',
			image: 				'cards/elf-girl-1950103_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, evade: 1},
		},
		recipe:{
			forest_elf: 		1,
			bear_trap: 			1,
			stone: 				1
		}
	},
	mushroom_soldier:{
		name: 				'mushroom soldier',
		type: 				'creature',
		color: 				['green'],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/woman-2407142_640.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, poison_entry: 1},
		hero_version: 			{
			name: 				'mushroom soldier',
			type: 				'creature',
			image: 				'cards/woman-2407142_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, poisonous: 1},
		},
	},
	
	natures_touch:{
		name: 				'nature\'s touch',
		type: 				'spell',
		color: 				['green'],
		pick_chance: 		1,
		basic_reward: 		true,
		time: 				4,
		image: 				'cards/butterfly-22999_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{bolster: 4},
	},
	
	ninja:{
		name: 				'ninja',
		type: 				'creature',
		color: 				['purple'],
		pick_chance: 		1,
		time: 				6,
		image: 				'cards/ninja-2007576_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		placement: 			'right',
		abilities: 			{strike_nearest: 1, flank: 1, hide: 1},
		hero_version: 			{
			name: 				'ninja',
			type: 				'creature',
			image: 				'cards/ninja-2007576_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, hide: 1},
		},
		recipe:{
			black_striker: 		1,
			amethyst: 			1
		}
	},
	old_tome:{
		name: 				'old tome',
		type: 				'object',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				5,
		image: 				'cards/book-2005394_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{reclaim: 1, safe_spot: 1, bring_spell: 1},
		reset_time: 		1,
		safe_slot: 			true,
		hero_version: 			{
			name: 				'old tome',
			type: 				'object',
			image: 				'cards/book-2005394_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			50,
			abilities: 			{reclaim: 1, draw_once: 1, bring_spell: 1},
		},
		recipe:{
			paper: 				1,
			magic_attunement: 	1
		}
	},
	
	ore:{
		name: 				'ore',
		type: 				'artifact',
		color: 				['colorless'],
		pick_chance: 		0.5,
		basic_reward: 		true,
		time: 				1,
		image: 				'cards/stone-2854417_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{break_armor: 1},
	},
	pain_catcher:{
		name: 				'pain catcher',
		type: 				'creature',
		color: 				['purple'],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/fantasy-4122305_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, convert_pain: 1},
		hero_version: 			{
			name: 				'pain catcher',
			type: 				'creature',
			image: 				'cards/fantasy-4122305_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, convert_pain: 1},
		},
		recipe:{
			peasant: 			1,
			mausoleum: 			1,
			ghost_bride: 		1
		}
	},
	paladin:{
		name: 				'paladin',
		type: 				'creature',
		color: 				['yellow'],
		pick_chance: 		1,
		time: 				11,
		image: 				'cards/knight-5326398_640.jpg',
		power: 				2,
		armor: 				2,
		health: 			4,
		abilities: 			{strike: 1, block: 1, blessed_entry: 1, seek_enemy: 1},
		hero_version: 			{
			name: 				'paladin',
			type: 				'creature',
			image: 				'cards/knight-5326398_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				5,
			health: 			50,
			abilities: 			{strike_nearest: 1, block: 1, blessed_arrivals: 1},
		},
		recipe:{
			jousting_knight: 	1,
			angelic_blessing: 	1
		}
	},
	
	paper:{
		name: 				'paper',
		type: 				'artifact',
		color: 				['colorless'],
		pick_chance: 		0.2,
		time: 				6,
		image: 				'cards/brown-69465_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cast_spell: 1, delay: 7},
		recipe:{
			lumber: 		2
		}
	},
	peasant:{
		name: 				'peasant',
		type: 				'creature',
		color: 				['colorless'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/arabic-1615262_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'peasant',
			type: 				'creature',
			image: 				'cards/arabic-1615262_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
	},
	
	peaceful_dove:{
		name: 				'peaceful dove',
		type: 				'creature',
		color: 				['yellow','blue'],
		pick_chance: 		0.1,
		time: 				1,
		image: 				'cards/dove-2516641_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{weaken_everyone: 1, flying: 1},
		hero_version: 			{
			name: 				'peaceful dove',
			type: 				'creature',
			image: 				'cards/dove-2516641_1280.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			25,
			abilities: 			{weaken_random: 1, flying: 1},
		},
		recipe:{
			yellow_ara: 		1,
			agate: 				1
		}
	},
	peaceful_druid:{
		name: 				'peaceful druid',
		type: 				'creature',
		color: 				['green'],
		time: 				1,
		image: 				'cards/autumn-2837843_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, send_away: 1},
		hero_version: 			{
			name: 				'peaceful druid',
			type: 				'creature',
			image: 				'cards/autumn-2837843_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			druid: 				1,
			force_pull: 		1
		}
	},
	pegasus:{
		name: 				'pegasus',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/angelic-2743045_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			name: 				'pegasus',
			type: 				'creature',
			image: 				'cards/angelic-2743045_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, flying: 1},
		},
		recipe:{
			yellow_ara: 		1,
			holy_relic: 		1
		}
	},
	pirate:{
		name: 				'pirate',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/pirate-2136258_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{seek_structure: 1, strike: 1, plunder: 1},
		hero_version: 			{
			name: 				'pirate',
			type: 				'creature',
			image: 				'cards/pirate-2136258_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, plunder: 1},
		},
		recipe:{
			highwayman: 		1,
			poverty: 			1
		}
	},
	pirate_lady:{
		name: 				'pirate lady',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/steampunk-4651251_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1, restore: 1},
		hero_version: 			{
			name: 				'pirate lady',
			type: 				'creature',
			image: 				'cards/steampunk-4651251_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, restore: 1},
		},
		recipe:{
			pirate: 			1,
			roll_the_dice: 		1
		}
	},
	pirate_scout:{
		name: 				'pirate scout',
		type: 				'creature',
		color: 				['yellow'],
		time: 				2,
		image: 				'cards/model-2321778_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{seek_structure: 1, strike: 1, plunder: 1, evade: 1},
		hero_version: 			{
			name: 				'pirate scout',
			type: 				'creature',
			image: 				'cards/model-2321778_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_nearest: 1, plunder: 1, evade: 1},
		},
		recipe:{
			pirate: 			1,
			firtile_dirt: 		1
		}
	},
	
	plasma_mage:{
		name: 				'plasma mage',
		type: 				'creature',
		color: 				['red'],
		time: 				3,
		image: 				'cards/gothic-3156462_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_blast: 1},
		hero_version: 			{
			name: 				'plasma mage',
			type: 				'creature',
			image: 				'cards/gothic-3156462_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			45,
			abilities: 			{fire_blast: 1},
		},
		recipe:{
			pure_mage: 			1,
			plasma_strike: 		1
		}
	},
	
	plasma_strike:{
		name: 				'plasma strike',
		type: 				'spell',
		color: 				['red'],
		time: 				3,
		image: 				'cards/all-703516_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fire_blast: 3},
		recipe:{
			magic_attunement: 	1,
			hellfire: 			1
		}
	},
	
	plate_armor:{
		name: 				'plate armor',
		type: 				'artifact',
		color: 				['colorless'],
		time: 				3,
		image: 				'cards/knight-1283910_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fortify_hero: 1, delay: 3},
		recipe:{
			armor: 			2,
		}
	},
	
	poacher:{
		name: 				'poacher',
		type: 				'creature',
		color: 				['yellow'],
		time: 				4,
		image: 				'cards/woman-3353689_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{snipe: 1, faithkill: 1, feast: 1},
		hero_version: 			{
			name: 				'poacher',
			type: 				'creature',
			image: 				'cards/woman-3353689_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			25,
			abilities: 			{snipe: 1, faithkill: 1, feast: 1},
		},
		recipe:{
			archer: 			1,
			lumber: 			1,
			poverty: 			1
		}
	},
	
	polar_bear:{
		name: 				'polar bear',
		type: 				'creature',
		color: 				['blue'],
		time: 				3,
		image: 				'cards/manipulation-4718960_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'polar bear',
			type: 				'creature',
			image: 				'cards/manipulation-4718960_640.jpg',
			image_position: 	'bottom', 
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			boar: 				1,
			frozen_claw: 		1,
		}
	},
	poverty:{
		name: 				'poverty',
		type: 				'spell',
		color: 				['yellow'],
		pick_chance: 		0.5,
		basic_reward: 		true,
		time: 				4,
		image: 				'cards/kid-2529907_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{destroy_artifact: 5},
	},
	princess:{
		name: 				'princess',
		type: 				'creature',
		color: 				['yellow'],
		pick_chance: 		0.5,
		time: 				4,
		image: 				'cards/fairy-tale-2321777_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{restore_hero: 2, beloved: 1, safe_spot: 1},
		reset_time: 		1,
		safe_slot: 			true,
		hero_version: 			{
			name: 				'princess',
			type: 				'creature',
			image: 				'cards/fairy-tale-2321777_640.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{restore_hero: 2},
		},
		recipe:{
			court_lady: 		1,
			peasant: 			1
		}
	},
	
	pure_mage:{
		name: 				'pure mage',
		type: 				'creature',
		color: 				['blue'],
		time: 				3,
		image: 				'cards/fantasy-1390177_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolts: 2},
		hero_version: 			{
			name: 				'pure mage',
			type: 				'creature',
			image: 				'cards/fantasy-1390177_1280.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolts: 2},
		},
		recipe:{
			peasant: 			1,
			arcane_missiles: 	1
		}
	},
	purple_spirit:{
		name: 				'purple spirit',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/abstract-1042463_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		placement: 			'right',
		abilities: 			{curse: 1, undead: 1, flank: 1},
		hero_version: 			{
			name: 				'purple spirit',
			type: 				'creature',
			image: 				'cards/abstract-1042463_1280.jpg',
			power: 				false,
			armor: 				0,
			health: 			60,
			abilities: 			{curse_hv: 2, evade: 1, undead: 1},
		},
		recipe:{
			ghost_bride: 		1,
			amethyst: 			1
		}
	},
	quiver:{
		name: 				'quiver',
		type: 				'artifact',
		color: 				['colorless'],
		pick_chance: 		0.5,
		time: 				3,
		image: 				'cards/archery-3654868_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{order_shoot: 1, delay: 4},
		recipe:{
			lumber: 			1,
			ore: 				1
		}
	},
	
	rage_moon:{
		name: 				'rage moon',
		type: 				'spell',
		color: 				['orange'],
		time: 				6,
		image: 				'cards/composing-1192667_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{empower_all: 2},
		recipe:{
			amber: 			2,
		}
	},
	
	raging_barbarian:{
		name: 				'raging barbarian',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/fantasy-3366526_640.jpg',
		image_position: 		'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			name: 				'raging barbarian',
			type: 				'creature',
			image: 				'cards/fantasy-3366526_640.jpg',
			image_position: 		'top',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			gladiator: 			1,
			amber: 				1
		}
	},
	raise_dead:{
		name: 				'raise dead',
		type: 				'spell',
		color: 				['purple'],
		pick_chance: 		0.5,
		time: 				8,
		image: 				'cards/cemetery-2802233_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{redraw_creature: 2},
		recipe:{
			mausoleum: 			1,
			bones: 				1
		}
	},
	
	rattlesnake:{
		name: 				'rattlesnake',
		type: 				'creature',
		color: 				['orange'],
		time: 				1,
		image: 				'cards/rattlesnake-653642_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike_unit: 1, counter: 1, poisonous: 1},
		hero_version: 			{
			name: 				'rattlesnake',
			type: 				'creature',
			image: 				'cards/rattlesnake-653642_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter: 1, poisonous: 1},
		},
		recipe:{
			herbalists_lab: 	1,
			sandstorm: 			1
		}
	},
	reaper_angel:{
		name: 				'reaper angel',
		type: 				'creature',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/fairy-3778264_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, reap: 1, flying: 1},
		hero_version: 			{
			name: 				'reaper angel',
			type: 				'creature',
			image: 				'cards/fairy-3778264_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, reap: 1, flying: 1},
		},
		recipe:{
			dark_angel: 		1,
			mausoleum: 			1
		}
	},
	red_dragon:{
		name: 				'red dragon',
		type: 				'creature',
		color: 				['red'],
		time: 				22,
		image: 				'cards/dragons-1957156_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, fire_breath: 2, flying: 1},
		hero_version: 			{
			name: 				'red dragon',
			type: 				'creature',
			image: 				'cards/dragons-1957156_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, fire_breath: 1, flying: 1},
		},
		recipe:{
			heat_wurm: 			1,
			levitate: 			1,
		}
	},
	red_lizard:{
		name: 				'red lizard',
		type: 				'creature',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/ring-tailed-dragon-2418232_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, resist_fire: 1, ignites: 1},
		hero_version: 			{
			name: 				'red lizard',
			type: 				'creature',
			image: 				'cards/ring-tailed-dragon-2418232_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, resist_fire: 1, ignites: 1},
		},
		recipe:{
			sandstorm: 			1,
			candle: 			1,
			stone: 				1
		}
	},
	
	research:{
		name: 				'research',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.5,
		time: 				8,
		image: 				'cards/books-1246674_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{draw: 3},
		recipe:{
			paper: 			2
		}
	},
	
	reversal_of_time:{
		name: 				'reversal of time',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.2,
		time: 				30,
		image: 				'cards/fantasy-2879946_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{reshuffle_all: 1},
		recipe:{
			time_thief: 			1,
			unsummon: 				1,
			mana_crystal: 			1
		}
	},
	
	rock_ogre:{
		name: 				'rock ogre',
		type: 				'creature',
		color: 				['orange'],
		time: 				6,
		image: 				'cards/fantasy-3469541_1280.jpg',
		power: 				2,
		armor: 				4,
		health: 			4,
		abilities: 			{strike: 1, brutal: 1},
		hero_version: 			{
			name: 				'rock ogre',
			type: 				'creature',
			image: 				'cards/fantasy-3469541_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				4,
			health: 			40,
			abilities: 			{strike_nearest: 1, brutal: 1},
		},
		recipe:{
			gladiator: 			1,
			stone: 				1,
			giants_foot: 		1
		}
	},
	rock_seer:{
		name: 				'rock seer',
		type: 				'creature',
		color: 				['orange'],
		time: 				2,
		image: 				'cards/fantasy-3363955_1280.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, final_redraw: 1},
		hero_version: 			{
			name: 				'rock seer',
			type: 				'creature',
			image: 				'cards/fantasy-3363955_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			peasant: 			1,
			mana_crystal: 		1,
			sandstorm: 			1
		}
	},
	rock_wurm:{
		name: 				'rock wurm',
		type: 				'creature',
		color: 				['orange'],
		time: 				15,
		image: 				'cards/fantasy-2697018_1280.jpg',
		power: 				1,
		armor: 				2,
		health: 			6,
		abilities: 			{strike: 1, enrage: 1, armored: 1},
		hero_version: 			{
			name: 				'rock wurm',
			type: 				'creature',
			image: 				'cards/fantasy-2697018_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, armored: 1},
		},
		recipe:{
			rock_ogre: 			1,
			brown_bear: 		1,
			stone: 				1,
		}
	},
	roll_the_dice:{
		name: 				'roll the dice',
		type: 				'attack',
		color: 				['yellow'],
		time: 				1,
		image: 				'cards/gambling-2423660_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{gamble: 10},
		recipe:{
			stone: 			1,
			poverty: 		1,
		}
	},
	
	royal_servant:{
		name: 				'royal servant',
		type: 				'creature',
		color: 				['yellow'],
		time: 				1,
		image: 				'cards/girl-4258000_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, restore_hero: 1, flee: 1},
		hero_version: 			{
			name: 				'royal servant',
			type: 				'creature',
			image: 				'cards/girl-4258000_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, restore_hero: 1},
		},
		recipe:{
			peasant: 			1,
			poverty: 			1,
		}
	},
	rushing_lizard:{
		name: 				'rushing lizard',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/the-lizard-466603_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, elemental_resistance: 1, victory_rush: 1},
		hero_version: 			{
			name: 				'rushing lizard',
			type: 				'creature',
			image: 				'cards/the-lizard-466603_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, elemental_resistance: 1, victory_rush: 1},
		},
		recipe:{
			sandstorm: 			1,
			amber: 				1,
			stone: 				1
		}
	},
	
	sand_warrior:{
		name: 				'sand warrior',
		type: 				'creature',
		color: 				['orange'],
		time: 				6,
		image: 				'cards/fantasy-2861079_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, guard: 1},
		reset_time: 		1,
		safe_slot: 			false,
		hero_version: 			{
			name: 				'sand warrior',
			type: 				'creature',
			image: 				'cards/fantasy-2861079_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			gladiator: 			1,
			sandstorm: 			1
		}
	},
	sandstorm:{
		name: 				'sandstorm',
		type: 				'spell',
		color: 				['orange'],
		basic_reward: 		true,
		time: 				1,
		image: 				'cards/sandstorm-165332_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sandstorm: 1},
	},
	scraps_placeholder:{
		name: 				'scraps',
		version: 			2,
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
	sea_dragon:{
		name: 				'sea dragon',
		type: 				'creature',
		color: 				['blue'],
		time: 				15,
		image: 				'cards/fantasy-5269106_640.jpg',
		power: 				4,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 1, cover: 2, fireproof: 1},
		hero_version: 			{
			name: 				'sea dragon',
			type: 				'creature',
			image: 				'cards/fantasy-5269106_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, cover: 2, fireproof: 1},
		},
		recipe:{
			cleansing_water: 	10
		}
	},
	sea_spirit:{
		name: 				'sea spirit',
		type: 				'creature',
		color: 				['blue'],
		time: 				6,
		image: 				'cards/woman-5352898_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, undead: 1, fireproof: 1, cleanse: 1},
		hero_version: 			{
			name: 				'sea spirit',
			type: 				'creature',
			image: 				'cards/woman-5352898_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, undead: 1, fireproof: 1, cleanse: 1},
		},
		recipe:{
			cleansing_water: 	1,
			ghost_bride: 		1,
			herbs: 				1
		}
	},
	seductive_dutches:{
		name: 				'seductive dutches',
		type: 				'creature',
		color: 				['yellow','blue'],
		pick_chance: 		0.5,
		time: 				6,
		image: 				'cards/beautiful-3089385_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{weaken_opposing: 1, sway_opposing: 1},
		hero_version: 			{
			name: 				'seductive dutches',
			type: 				'creature',
			image: 				'cards/beautiful-3089385_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			court_lady: 		1,
			agate: 				1,
			mind_control: 		1
		}
	},
	shaman:{
		name: 				'shaman',
		type: 				'creature',
		color: 				['blue'],
		time: 				6,
		image: 				'cards/beauty-355157_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, redraw_spell: 1},
		hero_version: 			{
			name: 				'shaman',
			type: 				'creature',
			image: 				'cards/beauty-355157_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, resist_magic: 2},
		},
		recipe:{
			peasant: 			1,
			old_tome: 			1
		}
	},
	
	shatter:{
		name: 				'shatter',
		type: 				'spell',
		color: 				['blue'],
		pick_chance: 		0.25,
		time: 				4,
		image: 				'cards/broken-glass-2208593_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{break_armor: 30},
		recipe:{
			magic_attunement: 	1,
			plate_armor: 		1
		}
	},
	shield_maiden:{
		name: 				'shield maiden',
		type: 				'creature',
		color: 				['yellow'],
		time: 				3,
		image: 				'cards/amazone-2743945_640.jpg',
		image_position: 		'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, block: 1},
		hero_version: 			{
			name: 				'shield maiden',
			type: 				'creature',
			image: 				'cards/amazone-2743945_640.jpg',
			image_position: 		'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, block: 1},
		},
		recipe:{
			peasant: 			1,
			plate_armor: 		1
		}
	},
	
	sinister_archer:{
		name: 				'sinister archer',
		type: 				'creature',
		color: 				['purple'],
		time: 				6,
		image: 				'cards/amazone-622498_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		placement: 			'right',
		abilities: 			{safe_spot: 1, flank: 1, snipe: 1},
		reset_time: 		1,
		reset_time: 		1,
		safe_slot: 			true,
		hero_version: 			{
			name: 				'sinister archer',
			type: 				'creature',
			image: 				'cards/amazone-622498_640.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{snipe: 1},
		},
		recipe:{
			archer: 			1,
			deaths_call: 		1,
			amethyst: 			1
		}
	},
	
	skeleton:{
		name: 				'skeleton',
		type: 				'creature',
		color: 				['purple'],
		time: 				1,
		image: 				'cards/skeleton-1522620_640.jpg',
		power: 				1,
		armor: 				4,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, unhealable: 1},
		hero_version: 			{
			name: 				'skeleton',
			type: 				'creature',
			image: 				'cards/skeleton-1522620_640.jpg',
			power: 				2,
			armor: 				40,
			health: 			10,
			abilities: 			{strike_nearest: 1, undead: 1, unhealable: 1},
		},
		recipe:{
			bones: 				1,
		}
	},
	/*skulking_skeleton:{
		name: 				'skulking skeleton',
		type: 				'creature',
		color: 				['purple'],
		time: 				4,
		image: 				'cards/fantasy-3471272_1280.jpg',
		power: 				1,
		armor: 				4,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			name: 				'skulking skeleton',
			type: 				'creature',
			image: 				'cards/fantasy-3471272_1280.jpg',
			power: 				3,
			armor: 				20,
			health: 			10,
			abilities: 			{strike_nearest: 1, undead: 1, resurrect: 1},
		},
		recipe:{
			skeleton: 			1,
			raise_dead: 		1
		}
	},*/
	
	sky_burner:{
		name: 				'sky burner',
		type: 				'creature',
		color: 				['red'],
		time: 				4,
		image: 				'cards/woman-4665086_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{sky_burn: 2, strike: 1},
		hero_version: 			{
			name: 				'sky burner',
			type: 				'creature',
			image: 				'cards/woman-4665086_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{sky_burn: 1, strike_nearest: 1},
		},
		recipe:{
			fire_mage: 			1,
			wing_burn: 			1,
		}
	},
	snowfall:{
		name: 				'snowfall',
		type: 				'spell',
		color: 				['blue'],
		time: 				10,
		image: 				'cards/christmas-1909947_6402.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{slow_all: 1},
		recipe:{
			frozen_claw: 		1,
			magic_attunement: 	1
		}
	},
	
	soften:{
		name: 				'soften',
		type: 				'spell',
		color: 				['blue'],
		time: 				2,
		image: 				'cards/feather-4718541_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{soften: 2},
		recipe:{
			agate: 				1,
			magic_attunement: 	1
		}
	},
	
	soldier_of_faith:{
		name: 				'soldier of faith',
		type: 				'creature',
		color: 				['yellow'],
		time: 				6,
		image: 				'cards/woman-3489913_640.jpg',
		power: 				3,
		armor: 				1,
		health: 			5,
		abilities: 			{strike: 1, faithkill: 2},
		hero_version: 			{
			name: 				'soldier of faith',
			type: 				'creature',
			image: 				'cards/woman-3489913_640.jpg',
			power: 				2,
			armor: 				1,
			health: 			50,
			abilities: 			{strike_nearest: 1, faithkill: 1},
		},
		recipe:{
			shield_maiden: 		1,
			citrine: 			1
		}
	},
	sonja:{
		name: 				'sonja',
		type: 				'creature',
		color: 				['orange'],
		time: 				12,
		image: 				'cards/celtic-woman-1880944_640.jpg',
		power: 				3,
		armor: 				4,
		health: 			6,
		abilities: 			{strike: 1, counter: 1},
		hero_version: 			{
			name: 				'sonja',
			type: 				'creature',
			image: 				'cards/celtic-woman-1880944_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, counter: 1},
		},
		recipe:{
			gladiator: 			1,
			surprise_attack: 	1,
			plate_armor: 		1
		}
	},
	spiked_horror:{
		name: 				'spiked horror',
		type: 				'creature',
		color: 				['purple','green'],
		time: 				6,
		image: 				'cards/monster-4803620_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 2, regenerate: 1, thorns: 1, stealth: 1},
		hero_version: 			{
			name: 				'spiked horror',
			type: 				'creature',
			image: 				'cards/monster-4803620_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			20,
			abilities: 			{strike_nearest: 1, regenerate: 1, thorns: 1, stealth: 1},
		},
		recipe:{
			amethyst: 			1,
			deaths_call: 		1,
			emerald: 			1,
			wood_trinket: 		1
		}
	},
	
	spore_explosion:{
		name: 				'spore explosion',
		type: 				'spell',
		color: 				['green'],
		time: 				8,
		image: 				'cards/bovist-184502_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{summon_mushroom_soldier: 5},
		recipe:{
			herbs: 				5,
			natures_touch: 		5
		}
	},
	
	steady_archer:{
		name: 				'steady archer',
		type: 				'creature',
		color: 				['yellow'],
		time: 				1,
		image: 				'cards/target-3825767_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{steady_shot: 1},
		hero_version: 			{
			name: 				'steady archer',
			type: 				'creature',
			image: 				'cards/target-3825767_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{steady_shot: 1},
		},
		recipe:{
			archer: 			1,
			lumber: 			1
		}
	},
	
	stone:{
		name: 				'stone',
		type: 				'object',
		color: 				['colorless'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/rocks-233011_640.jpg',
		power: 				false,
		armor: 				3,
		health: 			3,
		abilities: 			{fireproof: 1},
	},
	stormy_castle:{
		name: 				'stormy castle',
		type: 				'structure',
		color: 				['blue'],
		time: 				7,
		image: 				'cards/castle-4155998_640.jpg',
		power: 				false,
		armor: 				2,
		health: 			4,
		abilities: 			{lightning_bolt: 2},
		hero_version: 			{
			name: 				'stormy castle',
			type: 				'structure',
			image: 				'cards/castle-4155998_640.jpg',
			power: 				false,
			armor: 				20,
			health: 			40,
			abilities: 			{lightning_bolt: 1},
		},
		recipe:{
			lightning_mage: 	1,
			fort: 				1
		}
	},
	
	strangling_vine:{
		name: 				'strangling vine',
		type: 				'spell',
		color: 				['green'],
		time: 				2,
		image: 				'cards/vine-4102328_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{strangle: 2},
		recipe:{
			firtile_dirt: 		2
		}
	},
	sunken_ruins:{
		name: 				'sunken ruins',
		type: 				'structure',
		color: 				['blue'],
		pick_chance: 		0.2,
		time: 				11,
		image: 				'cards/cathedral-3265697_1280.png',
		power: 				false,
		armor: 				4,
		health: 			6,
		abilities: 			{cleanse: 1, submerged: 1, fireproof: 1},
		hero_version: 			{
			name: 				'sunken ruins',
			type: 				'structure',
			image: 				'cards/cathedral-3265697_1280.png',
			power: 				false,
			armor: 				6,
			health: 			50,
			abilities: 			{cleanse: 1, submerged: 1, fireproof: 1},
		},
		recipe:{
			cleansing_water: 	1,
			fort: 				1
		}
	},
	surprise_attack:{
		name: 				'surprise attack',
		type: 				'attack',
		color: 				['orange'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/tiger-2896392_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{order_strike: 4},
		recipe:{
			sandstorm: 		1,
			ore: 			1
		}
	},
	surprise_throw:{
		name: 				'surprise throw',
		type: 				'attack',
		color: 				['orange'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/nature-5325504_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{order_shoot: 3},
		recipe:{
			quiver: 			1,
			surprise_attack: 	1
		}
	},
	
	swamp_knight:{
		name: 				'swamp knight',
		type: 				'creature',
		color: 				['purple'],
		time: 				7,
		image: 				'cards/fantasy-3097517_640.jpg',
		power: 				2,
		armor: 				3,
		health: 			6,
		abilities: 			{strike: 1, withering_touch: 1},
		hero_version: 			{
			name: 				'swamp knight',
			type: 				'creature',
			image: 				'cards/fantasy-3097517_640.jpg',
			power: 				2,
			armor: 				5,
			health: 			30,
			abilities: 			{strike_nearest: 1, withering_touch: 1},
		},
		recipe:{
			hidden_swamp: 		1,
			shield_maiden: 		1
		}
	},
	swan_lady:{
		name: 				'swan lady',
		type: 				'creature',
		color: 				['blue','purple'],
		time: 				3,
		image: 				'cards/fantasy-5422246_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{sorrow: 2, resist_fire: 2, recall_killer: 1},
		hero_version: 			{
			name: 				'swan lady',
			type: 				'creature',
			image: 				'cards/fantasy-5422246_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			50,
			abilities: 			{strike_nearest: 1, resist_fire: 2},
		},
		recipe:{
			peasant: 			1,
			cleansing_water: 	1,
			agate: 				1
		}
	},
	temple_oracle:{
		name: 				'temple oracle',
		type: 				'creature',
		color: 				['orange'],
		time: 				3,
		image: 				'cards/woman-5459993_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			3,
		abilities: 			{obscure: 1, reveal: 1},
		hero_version: 			{
			name: 				'temple oracle',
			type: 				'creature',
			image: 				'cards/woman-5459993_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{obscure: 1, reveal: 1, strike_nearest: 1},
		},
		recipe:{
			peasant: 			1,
			sandstorm: 			1
		}
	},
	
	thaculla:{
		name: 				'thaculla',
		type: 				'creature',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/monster-4803514_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, fade: 1, go_again: 1},
		hero_version: 			{
			name: 				'thaculla',
			type: 				'creature',
			image: 				'cards/monster-4803514_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			60,
			abilities: 			{strike_nearest: 1, go_again: 1},
		},
		recipe:{
			amethyst: 			1,
			deaths_call: 		1
		}
	},
	
	thorned_tree:{
		name: 				'thorned tree',
		type: 				'object',
		color: 				['green'],
		time: 				2,
		image: 				'cards/bark-4689424_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{thorns: 1, regenerate: 1},
		hero_version: 			{
			name: 				'thorned tree',
			type: 				'object',
			image: 				'cards/bark-4689424_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{thorns: 2, regenerate: 1},
		},
		recipe:{
			firtile_dirt: 		1,
			lumber: 			1
		}
	},
	tiger_huntress:{
		name: 				'tiger huntress',
		type: 				'creature',
		color: 				['green'],
		time: 				7,
		image: 				'cards/woman-5375804_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike_nearest: 1, regenerate: 1},
		hero_version: 			{
			name: 				'tiger huntress',
			type: 				'creature',
			image: 				'cards/woman-5375804_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, regenerate: 1},
		},
		recipe:{
			gladiator: 			1,
			wood_trinket: 		1,
			surprise_attack: 	1
		}
	},
	
	time_thief:{
		name: 				'time thief',
		type: 				'creature',
		color: 				['blue'],
		time: 				6,
		image: 				'cards/girl-5535979_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, slow: 1, hasten: 1, retreat: 1},
		hero_version: 			{
			name: 				'time thief',
			type: 				'creature',
			image: 				'cards/girl-5535979_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			50,
			abilities: 			{slow: 1, hasten: 1},
		},
		recipe:{
			pure_mage: 			1,
			unsummon: 			1,
			mana_crystal: 	 	1
		}
	},
	temper:{
		name: 				'temper',
		type: 				'spell',
		color: 				['red'],
		pick_chance: 		0.2,
		time: 				1,
		image: 				'cards/fantasy-3182112_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{temper: 1},
		recipe:{
			hellfire: 			1,
			burning_rage: 		1
		}
	},
	
	toadman:{
		name: 				'toadman',
		type: 				'creature',
		color: 				['blue'],
		time: 				5,
		image: 				'cards/toads-man-5350708_640.jpg',
		power: 				2,
		armor: 				2,
		health: 			5,
		abilities: 			{strike: 1, elemental_resistance: 1},
		hero_version: 			{
			name: 				'toadman',
			type: 				'creature',
			image: 				'cards/toads-man-5350708_640.jpg',
			image_position:     'top',
			power: 				2,
			armor: 				4,
			health: 			40,
			abilities: 			{strike_nearest: 1, resist_fire: 1, resist_cold: 1},
		},
		recipe:{
			natures_touch: 		1,
			giants_foot: 		1,
			armor: 				1,
			burning_ring: 		1,
			cleansing_water: 	1
		}
	},
	tribal_druid:{
		name: 				'tribal druid',
		type: 				'creature',
		color: 				['orange','green'],
		time: 				7,
		image: 				'cards/fantasy-3797188_640.jpg',
		power: 				3,
		armor: 				2,
		health: 			3,
		abilities: 			{strike: 1, regenerate: 1, return_soul: 1},
		hero_version: 			{
			name: 				'tribal druid',
			type: 				'creature',
			image: 				'cards/fantasy-3797188_640.jpg',
			image_position:     'top',
			power: 				2,
			armor: 				10,
			health: 			30,
			abilities: 			{strike_nearest: 1, regenerate: 1},
		},
		recipe:{
			druid: 				1,
			tribesmen: 			1
		}
	},
	
	tribal_mage:{
		name: 				'tribal mage',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/woman-3203394_640.jpg',
		power: 				1,
		armor: 				2,
		health: 			2,
		abilities: 			{strike: 1, fire_bolt: 1, vengeance: 1},
		hero_version: 			{
			name: 				'tribal mage',
			type: 				'creature',
			image: 				'cards/woman-3203394_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				10,
			health: 			25,
			abilities: 			{strike_nearest: 1, fire_bolt: 1, vengeance: 1},
		},
		recipe:{
			tribal_warrior: 	1,
			fire_bolt: 			1
		}
	},
	tribal_valkyrie:{
		name: 				'tribal valkyrie',
		type: 				'creature',
		color: 				['orange'],
		time: 				11,
		image: 				'cards/fantasy-4655269_1280.jpg',
		power: 				3,
		armor: 				3,
		health: 			3,
		abilities: 			{strike: 1, relentless: 1},
		hero_version: 			{
			name: 				'tribal valkyrie',
			type: 				'creature',
			image: 				'cards/fantasy-4655269_1280.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				10,
			health: 			15,
			abilities: 			{strike_nearest: 1, relentless: 1},
		},
		recipe:{
			tribal_mage: 		1,
			surprise_attack: 	1
		}
	},
	tribal_warrior:{
		name: 				'tribal warrior',
		type: 				'creature',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/woman-2436287_640.jpg',
		power: 				3,
		armor: 				3,
		health: 			3,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'tribal warrior',
			type: 				'creature',
			image: 				'cards/woman-2436287_640.jpg',
			power: 				3,
			armor: 				20,
			health: 			30,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			tribesmen: 			1,
			surprise_attack: 	1
		}
	},
	tribesmen:{
		name: 				'tribesmen',
		type: 				'creature',
		color: 				['orange'],
		time: 				2,
		image: 				'cards/farewell-587277_1280.jpg',
		power: 				2,
		armor: 				2,
		health: 			2,
		abilities: 			{strike: 1, bring_armor: 1},
		hero_version: 			{
			name: 				'tribesmen',
			type: 				'creature',
			image: 				'cards/farewell-587277_1280.jpg',
			power: 				2,
			armor: 				20,
			health: 			30,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			peasant: 			1,
			sandstorm: 			1
		}
	},
	trickster_imp:{
		name: 				'trickster imp',
		type: 				'creature',
		color: 				['red'],
		time: 				3,
		image: 				'cards/daemon-3051805_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{burn: 1, evade: 1, move_away: 1},
		hero_version: 			{
			name: 				'trickster imp',
			type: 				'creature',
			image: 				'cards/daemon-3051805_640.jpg',
			power: 				false,
			armor: 				0,
			health: 			45,
			abilities: 			{evade: 1, burn: 1},
		},
		recipe:{
			fire_imp: 			1,
			candle: 			1,
			sandstorm: 			1
		}
	},
	turtle:{
		name: 				'turtle',
		type: 				'creature',
		color: 				['green'],
		time: 				3,
		image: 				'cards/amphibian-1850190_640.jpg',
		power: 				1,
		armor: 				4,
		health: 			2,
		abilities: 			{strike: 1, hunker_down: 4, guard: 1},
		reset_time: 		1,
		safe_slot: 			false,
		hero_version: 			{
			name: 				'turtle',
			type: 				'creature',
			image: 				'cards/amphibian-1850190_640.jpg',
			power: 				1,
			armor: 				6,
			health: 			30,
			abilities: 			{strike_nearest: 1, hunker_down: 6},
		},
		recipe:{
			boar: 				1,
			plate_armor: 		1,
			cleansing_water: 	1
		}
	},
	
	underground_forest:{
		name: 				'underground forest',
		type: 				'structure',
		color: 				['green'],
		time: 				3,
		image: 				'cards/fantasy-2750995_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{cover: 2, healing_aura: 1},
		hero_version: 			{
			name: 				'underground forest',
			type: 				'structure',
			image: 				'cards/fantasy-2750995_1280.jpg',
			image_position: 		'bottom',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{cover: 2, heal: 1},
		},
		recipe:{
			firtile_dirt: 		1,
			lumber: 			1,
			stone: 				1
		}
	},
	unsummon:{
		name: 				'unsummon',
		type: 				'spell',
		color: 				['blue'],
		time: 				1,
		image: 				'cards/wailpaper-2111346_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{recall_enemy: 1},
		recipe:{
			mana_crystal:		1,
			peasant: 			1
		}
	},
	
	vampire_bat:{
		name: 				'vampire bat',
		type: 				'creature',
		color: 				['purple'],
		time: 				2,
		image: 				'cards/bat-3740971_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, vampiric: 1, flying: 1},
		hero_version: 			{
			name: 				'vampire bat',
			type: 				'creature',
			image: 				'cards/bat-3740971_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			15,
			abilities: 			{strike_nearest: 1, vampiric: 1, flying: 1},
		},
		recipe:{
			yellow_ara: 		1,
			amethyst: 			1,
		}
	},
	vampire_duelist:{
		name: 				'vampire duelist',
		type: 				'creature',
		color: 				['purple'],
		time: 				8,
		image: 				'cards/dark-2869918_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter: 1, vampiric: 1},
		hero_version: 			{
			name: 				'vampire duelist',
			type: 				'creature',
			image: 				'cards/dark-2869918_640.jpg',
			image_position: 	'top',
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_nearest: 1, counter: 1, vampiric: 1},
		},
		recipe:{
			peasant: 			1,
			vampires_embrace: 	1,
			surprise_attack: 	1
		}
	},
	
	vampires_embrace:{
		name: 				'vampire\'s embrace',
		type: 				'spell',
		color: 				['purple'],
		time: 				6,
		image: 				'cards/gothic-1482950_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{grant_vampirism: 1},
		recipe:{
			vampire_bat: 		2,
		}
	},
	vampire_sisters:{
		name: 				'vampire sisters',
		type: 				'creature',
		color: 				['purple'],
		time: 				6,
		image: 				'cards/mirror-4528092_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{bring_clone: 1, strike: 1, vampiric: 1},
		hero_version: 			{
			name: 				'vampire sisters',
			type: 				'creature',
			image: 				'cards/mirror-4528092_640.jpg',
			power: 				1,
			armor: 				0,
			health: 			20,
			abilities: 			{bring_clone: 1, strike_nearest: 1, vampiric: 1},
		},
		recipe:{
			peasant: 			2,
			vampires_embrace: 	1
		}
	},
	
	veteran_seer:{
		name: 				'veteran seer',
		type: 				'creature',
		color: 				['blue'],
		time: 				8,
		image: 				'cards/woman-5445574_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{power_bolt: 1, draw_once: 1},
		hero_version: 			{
			name: 				'veteran seer',
			type: 				'creature',
			image: 				'cards/woman-5445574_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{power_bolt: 1, draw_once: 1},
		},
		recipe:{
			rock_seer: 			1,
			arcane_missiles: 	1,
			magic_attunement: 	1
		}
	},
	viking:{
		name: 				'viking',
		type: 				'creature',
		color: 				['orange'],
		time: 				4,
		image: 				'cards/viking-5164299_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, victory_rush: 1},
		hero_version: 			{
			name: 				'viking',
			type: 				'creature',
			image: 				'cards/viking-5164299_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, victory_rush: 1},
		},
		recipe:{
			gladiator: 			1,
			lumberjacks_axe: 	1,
			amber: 				1
		}
	},
	viking_druid:{
		name: 				'viking druid',
		type: 				'creature',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/viking-5151562_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, victory_rush: 1, return_soul: 1},
		hero_version: 			{
			name: 				'viking druid',
			type: 				'creature',
			image: 				'cards/viking-5151562_640.jpg',
			power: 				2,
			armor: 				0,
			health: 			45,
			abilities: 			{strike_nearest: 1, victory_rush: 1, reclaim_creatures: 1},
		},
		recipe:{
			viking: 			1,
			wood_trinket: 		1
		}
	},
	wild_warrior:{
		name: 				'wild warrior',
		type: 				'creature',
		color: 				['orange'],
		time: 				5,
		image: 				'cards/fighter-4760042_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{wild_strike: 1},
		hero_version: 			{
			name: 				'wild warrior',
			type: 				'creature',
			image: 				'cards/fighter-4760042_640.jpg',
			image_position: 	'top',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			gladiator: 			1,
			enrage_enemy: 		1
		}
	},
	wing_burn:{
		name: 				'wing burn',
		type: 				'spell',
		color: 				['red'],
		time: 				1,
		image: 				'cards/wings-5230461_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{ground: 3},
		recipe:{
			levitate: 			1,
			hellfire: 			1,
		}
	},
	
	yellow_ara:{
		name: 				'yellow ara',
		type: 				'creature',
		color: 				['green'],
		time: 				1,
		image: 				'cards/ara-3601194_1280.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1, pierces: 1},
		hero_version: 			{
			name: 				'yellow ara',
			type: 				'creature',
			image: 				'cards/ara-3601194_1280.jpg',
			image_position: 		'top',
			power: 				2,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_nearest: 1, flying: 1, pierces: 1},
		},
		recipe:{
			natures_touch: 		1,
			levitate: 			1
		}
	},
	yellow_lizard:{
		name: 				'yellow lizard',
		type: 				'creature',
		color: 				['orange'],
		time: 				3,
		image: 				'cards/reptile-2372220_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, elemental_resistance: 1, faithkill: 1},
		hero_version: 			{
			name: 				'yellow lizard',
			type: 				'creature',
			image: 				'cards/reptile-2372220_640.jpg',
			image_position: 	'top',
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1, elemental_resistance: 1, faithkill: 1},
		},
		recipe:{
			sandstorm: 			1,
			citrine: 			1,
			stone: 				1
		}
	},
	
	yellow_spirit:{
		name: 				'yellow spirit',
		type: 				'creature',
		color: 				['yellow'],
		time: 				1,
		image: 				'cards/fantasy-2437944_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		placement: 			'right',
		abilities: 			{restore_hero: 2, undead: 1, flank: 1},
		hero_version: 			{
			name: 				'yellow spirit',
			type: 				'creature',
			image: 				'cards/fantasy-2437944_1280.jpg',
			image_position: 	'top',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{restore_hero: 3, undead: 1},
		},
		recipe:{
			ghost_bride: 			1,
			holy_relic: 			1
		}
	},
	young_angel:{
		name: 				'young angel',
		type: 				'creature',
		color: 				['yellow'],
		time: 				1,
		image: 				'cards/angel-3464524_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, healing_wave: 2, flying: 1},
		hero_version: 			{
			name: 				'young angel',
			type: 				'creature',
			image: 				'cards/angel-3464524_640.jpg',
			image_position: 		'top',
			power: 				1,
			armor: 				0,
			health: 			35,
			abilities: 			{strike_nearest: 1, heal: 1, flying: 1},
		},
		recipe:{
			peasant: 			1,
			levitate: 			1,
			angelic_blessing: 	1
		}
	},
	
	unexpected_arrivals:{
		name: 				'unexpected arrivals',
		type: 				'spell',
		color: 				['blue'],
		time: 				8,
		image: 				'cards/seal-1347886_1280.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{summon_creature: 1},
		recipe:{
			magic_attunement: 	1,
			unsummon: 			1
		}
	},
	voodoo_doll:{
		name: 				'voodoo doll',
		type: 				'object',
		color: 				['purple'],
		time: 				3,
		image: 				'cards/doll-626790_1280.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{voodoo: 1},
		hero_version: 			{
			name: 				'voodoo doll',
			type: 				'object',
			image: 				'cards/doll-626790_1280.jpg',
			image_position: 		'top',
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{voodoo: 1},
		},
		recipe:{
			lumber: 			1,
			amethyst: 			1
		}
	},
	
	wolf:{
		name: 				'wolf',
		type: 				'creature',
		color: 				['green'],
		time: 				2,
		image: 				'cards/wolf-1336224_640.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1},
		hero_version: 			{
			name: 				'wolf',
			type: 				'creature',
			image: 				'cards/wolf-1336224_640.jpg',
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_nearest: 1},
		},
		recipe:{
			boar: 				1,
			natures_touch: 		1
		}
	},
	wood_trinket:{
		name: 				'wood trinket',
		type: 				'artifact',
		color: 				['green'],
		pick_chance: 		0.5,
		time: 				2,
		image: 				'cards/brown-20804_640.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{bolster: 1, delay: 3},
		recipe:{
			lumber: 			2,
		}
	},
	workshop:{
		name: 				'workshop',
		type: 				'structure',
		color: 				['yellow'],
		time: 				5,
		image: 				'cards/fantasy-3049543_1920.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, bring_object: 1},
		hero_version: 			{
			name: 				'workshop',
			type: 				'structure',
			image: 				'cards/fantasy-3049543_1920.jpg',
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{draw_object: 1},
		},
		recipe:{
			fort: 				1,
			old_tome: 			1
		}
	},
	
}
