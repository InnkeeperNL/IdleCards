var available_items = {
	
	druid:{
		name: 		'druid',
		value: 		2000,
		image: 		'items/druid-1950104_640.jpg',
	},
	manure:{
		name: 		'manure',
		value: 		10,
		image: 		'items/dung-500353_640.jpg',
	},
	ship:{
		name: 		'ship',
		value: 		2000,
		image: 		'items/galleon-1572636_640.jpg',
		rarity: 	3,
	},
	fishing_ship:{
		name: 		'fishing ship',
		value: 		3000,
		image: 		'items/ship-2904969_640.jpg',
		rarity: 	3,
	},
	pirate_ship:{
		name: 		'pirate ship',
		value: 		3000,
		image: 		'items/ship-2202910_640.jpg',
		rarity: 	3,
	},
	apple:{
		name: 		'apple',
		value: 		5,
		image: 		'items/apple-1589874_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 5,
		}
	},
	blueberry:{
		name: 		'blueberry',
		value: 		5,
		image: 		'items/blueberries-gb314c8ae7_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 5,
		}
	},
	blueberry_muffin:{
		name: 		'blueberry muffin',
		value: 		70,
		image: 		'items/blueberry-muffins-g9ab1fc764_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 70,
		}
	},
	
	milk:{
		name: 		'milk',
		value: 		5,
		image: 		'items/milk-2777165_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 5,
		}
	},
	butter:{
		name: 		'butter',
		value: 		25,
		image: 		'items/food-3179853_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 25,
		}
	},
	milkshake:{
		name: 		'milkshake',
		value: 		160,
		image: 		'items/drink-4767705_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 50,
		}
	},
	popcorn:{
		name: 		'popcorn',
		value: 		85,
		image: 		'items/popcorn-1198274_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 25,
		}
	},
	
	rennet:{
		name: 		'rennet',
		value: 		20,
		image: 		'items/liquor-1496358_640.jpg',
		rarity: 	1,
	},
	cheese:{
		name: 		'cheese',
		value: 		150,
		image: 		'items/cheese-3463368_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 150,
		}
	},
	
	cow:{
		name: 		'cow',
		value: 		150,
		image: 		'items/cow-431729_640.jpg',
		stats:{
			hit: 		2,
			power: 		5,
			evade: 		0,
			armor: 		0,
			health: 	250,
			abilities:{
				strike: 	1
			},
		}
	},
	horse:{
		name: 		'horse',
		value: 		400,
		image: 		'items/horse-197199_640.jpg',
		rarity: 	2,
		stats:{
			hit: 		5,
			power: 		7,
			evade: 		5,
			armor: 		0,
			health: 	200,
			abilities:{
				strike: 	1
			},
		}
	},
	
	pig:{
		name: 		'pig',
		value: 		120,
		image: 		'items/pigs-4028140_640.jpg',
		stats:{
			hit: 		2,
			power: 		1,
			evade: 		5,
			armor: 		0,
			health: 	100,
			abilities:{
				strike: 	1
			},
		}
	},
	piglet:{
		name: 		'piglet',
		value: 		50,
		image: 		'items/agriculture-84702_640.jpg',
	},
	sheep:{
		name: 		'sheep',
		value: 		100,
		image: 		'items/ireland-1985088_640.jpg',
		stats:{
			hit: 		2,
			power: 		1,
			evade: 		5,
			armor: 		0,
			health: 	100,
			abilities:{
				strike: 	1
			},
		}
	},
	wolf:{
		name: 		'wolf',
		value: 		50,
		image: 		'items/wolf-1336229_640.jpg',
		stats:{
			hit: 		1,
			power: 		1,
			evade: 		5,
			armor: 		0,
			health: 	100,
			abilities:{
				strike: 	1
			},
		}
	},
	dog:{
		name: 		'dog',
		value: 		100,
		image: 		'items/dog-2691871_640.jpg',
		stats:{
			hit: 		2,
			power: 		2,
			evade: 		5,
			armor: 		0,
			health: 	50,
			abilities:{
				strike: 	1
			},
		}
	},
	
	wool:{
		name: 		'wool',
		value: 		9,
		image: 		'items/yarn-2564556_640.jpg',
	},
	twine:{
		name: 		'twine',
		value: 		22,
		image: 		'items/abstract-21764_640.jpg',
	},
	
	
	button:{
		name: 		'button',
		value: 		3,
		image: 		'items/button-g1952e76b5_640.jpg',
	},
	cloth:{
		name: 		'cloth',
		value: 		90,
		image: 		'items/towel-1838210_640.jpg',
	},
	sack:{
		name: 		'sack',
		value: 		110,
		image: 		'items/child-1939031_640.jpg',
		
	},
	bandage:{
		name: 		'bandage',
		value: 		300,
		image: 		'items/gauze-3902918_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 600,
		}
	},
	remedy:{
		name: 		'remedy',
		value: 		500,
		image: 		'items/calendula-6512323_1280.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 600,
		}
	},
	first_aid_kit:{
		name: 		'first aid kit',
		value: 		8000,
		image: 		'items/mine-1217744_1280.jpg',
		rarity: 	3,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 8000,
		}
	},
	
	cap:{
		name: 		'cap',
		value: 		250,
		image: 		'items/cap-g52714e16c_640.jpg',
		rarity: 	2,
	},
	scarf:{
		name: 		'scarf',
		value: 		200,
		image: 		'items/scarf-g1decbc93a_640.jpg',
		rarity: 	2,
	},
	
	cloak:{
		name: 		'cloak',
		value: 		1000,
		image: 		'items/man-962563_640.jpg',
		rarity: 	2,
	},
	shirt:{
		name: 		'shirt',
		value: 		1000,
		image: 		'items/white-gf41f09eea_640.jpg',
		rarity: 	2,
	},
	
	jeans:{
		name: 		'jeans',
		value: 		1000,
		image: 		'items/jeans-1751_640.jpg',
		rarity: 	2,
	},
	tent:{
		name: 		'tent',
		value: 		3000,
		image: 		'items/tent-1490599_640.jpg',
		rarity: 	2,
	},
	
	hide:{
		name: 		'hide',
		value: 		15,
		image: 		'items/deer-hide-58889_640.jpg',
	},
	leather:{
		name: 		'leather',
		value: 		85,
		image: 		'items/leather-540142_640.jpg',
	},
	
	belt:{
		name: 		'belt',
		value: 		150,
		image: 		'items/belt-5538613_640.jpg',
		rarity: 	2,
	},
	backpack:{
		name: 		'backpack',
		value: 		1500,
		image: 		'items/national-park-3584579_640.jpg',
		rarity: 	2,
	},
	boots:{
		name: 		'boots',
		value: 		500,
		image: 		'items/boots-1853964_640.jpg',
		rarity: 	2,
	},
	jacket:{
		name: 		'jacket',
		value: 		1000,
		image: 		'items/fashion-3766441_640.jpg',
		rarity: 	2,
	},
	
	saddle:{
		name: 		'saddle',
		value: 		1700,
		image: 		'items/cowboy-saddle-2345137_640.jpg',
		rarity: 	2,
	},
	quiver:{
		name: 		'quiver',
		value: 		700,
		image: 		'items/medieval-143924_640.jpg',
		rarity: 	2,
	},
	drum:{
		name: 		'drum',
		value: 		700,
		image: 		'items/drum-285596_640.jpg',
		rarity: 	2,
	},
	lute:{
		name: 		'lute',
		value: 		1000,
		image: 		'items/music-1653545_640.jpg',
		rarity: 	2,
	},
	
	sand:{
		name: 		'sand',
		value: 		2,
		image: 		'items/sand-5415920_640.jpg',
	},
	glass:{
		name: 		'glass',
		value: 		30,
		image: 		'items/window-223770_640.jpg',
	},
	jar:{
		name: 		'jar',
		value: 		50,
		image: 		'items/pottery-1677997_640.jpg',
		rarity: 	2,
	},
	cutlery:{
		name: 		'cutlery',
		value: 		50,
		image: 		'items/cutlery-377700_640.jpg',
		rarity: 	2,
	},
	plate:{
		name: 		'plate',
		value: 		50,
		image: 		'items/plate-535219_640.jpg',
		rarity: 	2,
	},
	clay:{
		name: 		'clay',
		value: 		10,
		image: 		'items/background-3362171_640.jpg',
	},
	chalk:{
		name: 		'chalk',
		value: 		5,
		image: 		'items/texture-981603_640.jpg',
	},
	cement:{
		name: 		'cement',
		value: 		10,
		image: 		'items/cement-6250351_640.jpg',
	},
	brick:{
		name: 		'brick',
		value: 		50,
		image: 		'items/brick-164959_640.jpg',
	},
	/*shingle:{
		name: 		'shingle',
		value: 		50,
		image: 		'items/roof-1009158_640.jpg',
	},*/
	roofing:{
		name: 		'roofing',
		value: 		250,
		image: 		'items/roof-1009158_640.jpg',
	},
	wall:{
		name: 		'wall',
		value: 		500,
		image: 		'items/wall-of-bricks-336546_640.jpg',
	},
	house:{
		name: 		'house',
		value: 		2300,
		image: 		'items/home-timber-framed-2664261_640.jpg',
		rarity: 	2,
	},
	peasant:{
		name: 		'peasant',
		value: 		20,
		image: 		'items/peasant-482727_640.jpg',
		stats:{
			hit: 		1,
			power: 		2,
			evade: 		0,
			armor: 		0,
			health: 	70,
			abilities:{
				strike: 	1
			},
		}
	},
	gatherer:{
		name: 		'gatherer',
		value: 		90,
		image: 		'items/girl-6278243_640.jpg',
		stats:{
			hit: 		1,
			power: 		2,
			evade: 		0,
			armor: 		0,
			health: 	75,
			abilities:{
				strike: 	1
			},
		}
	},
	
	shepherd:{
		name: 		'shepherd',
		value: 		220,
		image: 		'items/sheep-690198_1920-1.jpg',
		stats:{
			hit: 		1,
			power: 		2,
			evade: 		0,
			armor: 		0,
			health: 	75,
			abilities:{
				strike: 	1
			},
		}
	},
	farmer:{
		name: 		'farmer',
		value: 		160,
		image: 		'items/labor-1406652_640.jpg',
		stats:{
			hit: 		2,
			power: 		3,
			evade: 		2,
			armor: 		0,
			health: 	120,
			abilities:{
				strike: 	1
			},
		}
	},
	fisherman:{
		name: 		'fisherman',
		value: 		125,
		image: 		'items/fisherman-5970480_640.jpg',
		stats:{
			hit: 		2,
			power: 		2,
			evade: 		1,
			armor: 		0,
			health: 	200,
			abilities:{
				strike: 	1
			},
		}
	},
	
	thief:{
		name: 		'thief',
		value: 		2500,
		image: 		'items/woman-2545577_640.jpg',
		stats:{
			hit: 		10,
			power: 		11,
			evade: 		10,
			armor: 		0,
			health: 	500,
			abilities:{
				strike: 	1
			},
		}
	},
	cowboy:{
		name: 		'cowboy',
		value: 		2500,
		image: 		'items/rodeo-515612_640.jpg',
		stats:{
			hit: 		8,
			power: 		14,
			evade: 		8,
			armor: 		0,
			health: 	500,
			abilities:{
				strike: 	1
			},
		}
	},
	pirate:{
		name: 		'pirate',
		value: 		2500,
		image: 		'items/pirate-2136258_640.jpg',
		stats:{
			hit: 		8,
			power: 		14,
			evade: 		8,
			armor: 		0,
			health: 	500,
			abilities:{
				strike: 	1
			},
		}
	},
	
	/*carp:{
		name: 		'carp',
		value: 		10,
		image: 		'items/fish-1710231_640.jpg',
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 10,
		}
	},*/
	perch:{
		name: 		'perch',
		value: 		10,
		image: 		'items/fish-730497_640.jpg',

	},
	trout:{
		name: 		'trout',
		value: 		20,
		image: 		'items/fish-4581261_640.jpg',
	},
	salmon:{
		name: 		'salmon',
		value: 		30,
		image: 		'items/salmon-4143734_640.jpg',
	},
	eel:{
		name: 		'eel',
		value: 		60,
		image: 		'items/fish-15089_640.jpg',
	},
	squid:{
		name: 		'squid',
		value: 		100,
		image: 		'items/octopus-g1004aae94_640.jpg',
	},
	ink:{
		name: 		'ink',
		value: 		180,
		image: 		'items/quill-pen-g74bb9bb25_640.jpg',
		rarity: 	2
	},
	
	smoked_fish:{
		name: 		'smoked fish',
		value: 		100,
		image: 		'items/char-2258284_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 100,
		}
	},
	salted_fish:{
		name: 		'salted fish',
		value: 		100,
		image: 		'items/cod-333476_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 100,
		}
	},
	
	/*cooked_eel:{
		name: 		'cooked eel',
		value: 		220,
		image: 		'items/eel-2817257_640.jpg',
		rarity: 	2,
	},
	
	cooked_salmon:{
		name: 		'cooked salmon',
		value: 		150,
		image: 		'items/salmon-6037073_640.jpg',
		rarity: 	2,
	},
	grilled_trout:{
		name: 		'grilled trout',
		value: 		90,
		image: 		'items/fish-5038952_640.jpg',
		rarity: 	2
	},
	roasted_perch:{
		name: 		'roasted perch',
		value: 		50,
		image: 		'items/fish-5656366_640.jpg',
		rarity: 	2,
	},*/
	
	fish_and_chips:{
		name: 		'fish and chips',
		value: 		200,
		image: 		'items/fish-2371439_640.jpg',
		rarity: 	2,
	},
	fries:{
		name: 		'fries',
		value: 		80,
		image: 		'items/french-fries-923687_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 80,
		}
	},
	
	lumber:{
		name: 		'lumber',
		value: 		10,
		image: 		'items/logs-3639211_640.jpg',
	},
	paper:{
		name: 		'paper',
		value: 		40,
		image: 		'items/brown-69465_640.jpg',
	},
	map:{
		name: 		'map',
		value: 		100,
		image: 		'items/adventure-2528477_640.jpg',
	},
	book:{
		name: 		'book',
		value: 		750,
		image: 		'items/a-book-1281238_640.jpg',
		rarity: 	2,
	},
	healing_tome:{
		name: 		'healing tome',
		value: 		5000,
		image: 		'items/dreams-2904682_640.jpg',
		rarity: 	3,
	},
	hardwood:{
		name: 		'hardwood',
		value: 		100,
		image: 		'items/wood-596419_640.jpg',
		rarity: 	1,
	},
	water:{
		name: 		'water',
		value: 		2,
		image: 		'items/bubbles-230014_640.jpg',
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 2,
		}
	},
	firewood:{
		name: 		'firewood',
		value: 		2,
		image: 		'items/wood-1079365_640.jpg',
	},
	kelp:{
		name: 		'kelp',
		value: 		2,
		image: 		'items/seaweed-991706_640.jpg',
	},
	leaves:{
		name: 		'leaves',
		value: 		2,
		image: 		'items/autumn-111315_640.jpg',
	},
	
	wildflowers:{
		name: 		'wildflowers',
		value: 		2,
		image: 		'items/wildflower-meadow-3386014_640.jpg',
	},
	clover:{
		name: 		'clover',
		value: 		2,
		image: 		'items/clover-1225988_640.jpg',
	},
	
	grass:{
		name: 		'grass',
		value: 		2,
		image: 		'items/dew-1507498_640.jpg',
	},
	reed:{
		name: 		'reed',
		value: 		2,
		image: 		'items/reed-grass-3789727_640.jpg',
	},
	
	hay:{
		name: 		'hay',
		value: 		10,
		image: 		'items/background-1474292_640.jpg',
	},
	straw:{
		name: 		'straw',
		value: 		10,
		image: 		'items/straw-1529063_640.jpg',
	},
	
	basket:{
		name: 		'basket',
		value: 		50,
		image: 		'items/basket-1195754_640.jpg',
		rarity: 	2,
	},
	
	hay_bale:{
		name: 		'hay bale',
		value: 		50,
		image: 		'items/bale-3026360_640.jpg',
	},
	
	stick:{
		name: 		'stick',
		value: 		5,
		image: 		'items/wood-2220335_640.jpg',
	},
	pole:{
		name: 		'pole',
		value: 		20,
		image: 		'items/rods-53130_640.jpg',
	},
	cane:{
		name: 		'cane',
		value: 		60,
		image: 		'items/stick-1215030_640.jpg',
		rarity: 	2
	},
	
	plank:{
		name: 		'plank',
		value: 		50,
		image: 		'items/board-2941888_640.jpg',
	},
	crate:{
		name: 		'crate',
		value: 		150,
		image: 		'items/box-2064180_640.jpg',
		rarity: 	2,
	},
	barrel:{
		name: 		'barrel',
		value: 		150,
		image: 		'items/wooden-258622_640.jpg',
		rarity: 	2,
	},
	
	furniture:{
		name: 		'furniture',
		value: 		1500,
		image: 		'items/farmhouse-358286_1280.jpg',
		rarity: 	2,
	},
	/*bed:{
		name: 		'bed',
		value: 		1500,
		image: 		'items/old-house-3594537_640.jpg',
		rarity: 	2,
	},*/
	
	cart:{
		name: 		'cart',
		value: 		825,
		image: 		'items/cart-1007949_640.jpg',
		rarity: 	1,
	},
	
	supplies:{
		name: 		'supplies',
		value: 		1000,
		image: 		'items/boxes-2719166_640.jpg',
		rarity: 	2,
	},
	treasure:{
		name: 		'treasure',
		value: 		10000,
		image: 		'items/treasure-chest-619762_640.jpg',
		rarity: 	4,
	},

	
	energy:{
		name: 		'energy',
		value: 		100,
		image: 		'items/battery-2917548_640.jpg',
		rarity: 	2,
	},
	
	stone:{
		name: 		'stone',
		value: 		5,
		image: 		'items/stones-81233_640.jpg',
	},
	copper_ore:{
		name: 		'copper ore',
		value: 		17,
		image: 		'items/copper-ore-1008566_640.jpg',
	},
	copper:{
		name: 		'copper',
		value: 		30,
		image: 		'items/wire-2681887_640.jpg',
	},
	coal:{
		name: 		'coal',
		value: 		10,
		image: 		'items/coal-1626368_640.jpg',
	},
	pepper:{
		name: 		'pepper',
		value: 		10,
		image: 		'items/peppercorns-1992412_640.jpg',
	},
	salt:{
		name: 		'salt',
		value: 		10,
		image: 		'items/salt-602215_640.jpg',
	},
	iron_ore:{
		name: 		'iron ore',
		value: 		35,
		image: 		'items/meteorite-91891_640.jpg',
	},
	iron:{
		name: 		'iron',
		value: 		50,
		image: 		'items/iron-rods-474800_640.jpg',
	},
	steel:{
		name: 		'steel',
		value: 		100,
		image: 		'items/metal-3917689_640.jpg',
	},
	horseshoe:{
		name: 		'horseshoe',
		value: 		60,
		image: 		'items/horseshoe-1138874_640.jpg',
	},
	
	nails:{
		name: 		'nails',
		value: 		5,
		image: 		'items/nails-4168539_640.jpg',
	},
	helmet:{
		name: 		'helmet',
		value: 		300,
		image: 		'items/steel-helmet-1618318_640.jpg',
		rarity: 	2,
	},
	plate_armor:{
		name: 		'plate armor',
		value: 		1000,
		image: 		'items/knight-1283910_640.jpg',
		rarity: 	2,
	},
	shield:{
		name: 		'shield',
		value: 		500,
		image: 		'items/shield-499839_640.jpg',
		rarity: 	2,
	},
	guard:{
		name: 		'guard',
		value: 		1400,
		image: 		'items/knight-1813084_640.jpg',
	},
	
	silver_ore:{
		name: 		'silver ore',
		value: 		150,
		image: 		'items/outstanding-1436005_640.jpg',
	},
	silver:{
		name: 		'silver',
		value: 		200,
		image: 		'items/bullion-932218_640.jpg',
		rarity: 	2,
	},
	silver_ring:{
		name: 		'silver ring',
		value: 		500,
		image: 		'items/silver-ring-2231967_640.jpg',
		rarity: 	3,
	},
	gold_ore:{
		name: 		'gold ore',
		value: 		350,
		image: 		'items/stone-194822_640.jpg',
	},
	gold:{
		name: 		'gold',
		value: 		500,
		image: 		'items/gold-513062_640.jpg',
		rarity: 	2,
	},
	gold_ring:{
		name: 		'gold ring',
		value: 		1200,
		image: 		'items/wedding-ring-4549875_640.jpg',
		rarity: 	3,
	},
	
	lettuce:{
		name: 		'lettuce',
		value: 		5,
		image: 		'items/green-1710328_640.jpg',
	},
	cucumber:{
		name: 		'cucumber',
		value: 		8,
		image: 		'items/cucumbers-849269_640.jpg',
	},
	tomato:{
		name: 		'tomato',
		value: 		10,
		image: 		'items/tomatoes-4238247_640.jpg',
	},
	leek:{
		name: 		'leek',
		value: 		10,
		image: 		'items/leek-2199563_640.jpg',
	},
	
	carrot:{
		name: 		'carrot',
		value: 		25,
		image: 		'items/carrot-1565597_640.jpg',
	},
	potato:{
		name: 		'potato',
		value: 		20,
		image: 		'items/potatoes-1585060_640.jpg',
	},
	onion:{
		name: 		'onion',
		value: 		20,
		image: 		'items/onions-1397037_640.jpg',
	},
	garlic:{
		name: 		'garlic',
		value: 		20,
		image: 		'items/garlic-3419544_640.jpg',
	},
	
	walnut:{
		name: 		'walnut',
		value: 		15,
		image: 		'items/walnut-2816935_640.jpg',
	},
	cherry:{
		name: 		'cherry',
		value: 		20,
		image: 		'items/cherries-1465801_640.jpg',
		rarity: 	2,
	},
	strawberry:{
		name: 		'strawberry',
		value: 		30,
		image: 		'items/strawberries-99551_640.jpg',
		rarity: 	2,
	},
	
	/*onion_rings:{
		name: 		'onion rings',
		value: 		100,
		image: 		'items/food-3669928_640.jpg',
		rarity: 2,
	},*/
	sugar_beet:{
		name: 		'sugar beet',
		value: 		30,
		image: 		'items/sugar-beet-3824016_640.jpg',
	},
	sugarcane:{
		name: 		'sugarcane',
		value: 		30,
		image: 		'items/sugarcane-5388614_640.jpg',
	},
	sugar:{
		name: 		'sugar',
		value: 		40,
		image: 		'items/sugar-1354787_640.jpg',
		rarity: 2,
	},
	sunflower:{
		name: 		'sunflower',
		value: 		5,
		image: 		'items/sunflower-3540266_640.jpg',
	},
	oil:{
		name: 		'oil',
		value: 		20,
		image: 		'items/oil-1325771_640.jpg',
	},
	
	wheat:{
		name: 		'wheat',
		value: 		5,
		image: 		'items/wheat-3241114_640.jpg',
	},
	barley:{
		name: 		'barley',
		value: 		5,
		image: 		'items/barley-2117454_640.jpg',
	},
	hops:{
		name: 		'hops',
		value: 		5,
		image: 		'items/hop-1678579_640.jpg',
	},
	corn:{
		name: 		'corn',
		value: 		10,
		image: 		'items/corn-3705687_640.jpg',
	},
	
	flax:{
		name: 		'flax',
		value: 		5,
		image: 		'items/nature-3082560_640.jpg',
	},
	cotton:{
		name: 		'cotton',
		value: 		10,
		image: 		'items/cotton-branch-1271038_640.jpg',
	},
	grapes:{
		name: 		'grapes',
		value: 		40,
		image: 		'items/berry-1239425_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 40,
		}
	},
	wine:{
		name: 		'wine',
		value: 		700,
		image: 		'items/wine-barrel-4600556_640.jpg',
		rarity: 	3,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 700,
		}
	},
	
	/*meat:{
		name: 		'meat',
		value: 		40,
		image: 		'items/steak-1081819_640.jpg',
	},*/
	beef:{
		name: 		'beef',
		value: 		30,
		image: 		'items/steak-1081819_640.jpg',
	},
	pork:{
		name: 		'pork',
		value: 		30,
		image: 		'items/pork-belly-1122171_640.jpg',
	},
	mutton:{
		name: 		'mutton',
		value: 		30,
		image: 		'items/mutton-1427092_640.jpg',
	},
	wild_meat:{
		name: 		'wild meat',
		value: 		30,
		image: 		'items/meat-2370893_1280.jpg',
	},
	poultry:{
		name: 		'poultry',
		value: 		30,
		image: 		'items/chicken-meat-4770627_1280.jpg',
	},
	
	
	minced_meat:{
		name: 		'minced meat',
		value: 		40,
		image: 		'items/ground-meat-1747910_640.jpg',
	},
	salted_meat:{
		name: 		'salted meat',
		value: 		40,
		image: 		'items/appetite-1238477_640.jpg',
	},
	
	hamburger:{
		name: 		'hamburger',
		value: 		350,
		image: 		'items/burger-3442227_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 300,
		}
	},
	
	ketchup:{
		name: 		'ketchup',
		value: 		10,
		image: 		'items/curry-3676762_640.jpg',
	},
	mayonnaise:{
		name: 		'mayonnaise',
		value: 		10,
		image: 		'items/oil-6124020_640.jpg',
	},
	
	meat_balls:{
		name: 		'meat balls',
		value: 		50,
		image: 		'items/meat-balls-50929_1920.jpg',
		rarity: 	2,
	},
	
	sausage:{
		name: 		'sausage',
		value: 		100,
		image: 		'items/hot-dog-g8e8fe3d81_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 100,
		}
	},
	hot_dog:{
		name: 		'hot dog',
		value: 		250,
		image: 		'items/grilling-283889_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 300,
		}
	},
	
	steak:{
		name: 		'steak',
		value: 		150,
		image: 		'items/steak-2272464_640.jpg',
		rarity: 	2,
	},
	dinner:{
		name: 		'dinner',
		value: 		1100,
		image: 		'items/beef-20678_640.jpg',
		rarity: 	2,
	},
	breakfast:{
		name: 		'breakfast',
		value: 		500,
		image: 		'items/breakfast-2816349_640.jpg',
		rarity: 	2,
	},
	
	salad:{
		name: 		'salad',
		value: 		50,
		image: 		'items/salad-1812349_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 50,
		}
	},
	soup:{
		name: 		'soup',
		value: 		250,
		image: 		'items/food-786108_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 250,
		}
	},
	
	bread:{
		name: 		'bread',
		value: 		70,
		image: 		'items/bread-1281053_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 70,
		}
	},
	cookie:{
		name: 		'cookie',
		value: 		25,
		image: 		'items/cookie-g821dc1d2b_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 25,
		}
	},
	pasta:{
		name: 		'pasta',
		value: 		25,
		image: 		'items/pasta-2093_640.jpg',
		rarity: 	1,
	},
	/*spaghetti:{
		name: 		'spaghetti',
		value: 		250,
		image: 		'items/spaghetti-745468_640.jpg',
		rarity: 	2,
	},
	chicken_pasta:{
		name: 		'chicken pasta',
		value: 		250,
		image: 		'items/noodles-2358342_640.jpg',
		rarity: 	2,
	},*/
	
	
	cucumber_sandwich:{
		name: 		'cucumber sandwich',
		value: 		150,
		image: 		'items/cucumber-2047267_640.jpg',
		rarity: 	2,
	},
	flour:{
		name: 		'flour',
		value: 		25,
		image: 		'items/wheat-5416898_640.jpg',
	},
	egg:{
		name: 		'egg',
		value: 		5,
		image: 		'items/nest-1050964_640.jpg',
	},
	feather:{
		name: 		'feather',
		value: 		2,
		image: 		'items/feather-2709789_640.jpg',
	},
	
	pillow:{
		name: 		'pillow',
		value: 		300,
		image: 		'items/pillows-655245_640.jpg',
		rarity: 	2
	},
	arrow:{
		name: 		'arrow',
		value: 		6,
		image: 		'items/arrows-4082046_640.jpg',
	},
	
	hunter:{
		name: 		'hunter',
		value: 		110,
		image: 		'items/archer-3895735_640.jpg',
		stats:{
			hit: 		3,
			power: 		2,
			evade: 		2,
			armor: 		0,
			health: 	120,
			abilities:{
				strike: 	1
			},
		}
	},
	veteran_hunter:{
		name: 		'veteran hunter',
		value: 		2000,
		image: 		'items/woman-3353689_640.jpg',
		stats:{
			hit: 		3,
			power: 		2,
			evade: 		2,
			armor: 		0,
			health: 	120,
			abilities:{
				strike: 	1
			},
		}
	},
	
	miner:{
		name: 		'miner',
		value: 		220,
		image: 		'items/miner-1903636_640.jpg',
		stats:{
			hit: 		1,
			power: 		2,
			evade: 		1,
			armor: 		2,
			health: 	170,
			abilities:{
				strike: 	1
			},
		}
	},
	lumberjack:{
		name: 		'lumberjack',
		value: 		220,
		image: 		'items/wood-4248997_640.jpg',
		stats:{
			hit: 		3,
			power: 		2,
			evade: 		2,
			armor: 		0,
			health: 	120,
			abilities:{
				strike: 	1
			},
		}
	},

	bow:{
		name: 		'bow',
		value: 		90,
		image: 		'items/arrow-1557462_640.jpg',
		rarity: 	2,
	},
	/*apple_pie:{
		name: 		'apple pie',
		value: 		645,
		image: 		'items/apple-pie-5479993_640.jpg',
		rarity: 	3,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 625,
		}
	},*/
	pie:{
		name: 		'pie',
		value: 		645,
		image: 		'items/tart-6011609_640.jpg',
		rarity: 	3,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 625,
		}
	},
	
	copper_pot:{
		name: 		'copper pot',
		value: 		80,
		image: 		'items/water-boiler-4604072_640.jpg',
		rarity: 	2,
	},
	spyglass:{
		name: 		'spyglass',
		value: 		500,
		image: 		'items/telescope-971430_640.jpg',
		rarity: 	2,
	},
	
	knife:{
		name: 		'knife',
		value: 		100,
		image: 		'items/nature-5325518_640.jpg',
		rarity: 	2,
	},
	sinister_dagger:{
		name: 		'sinister dagger',
		value: 		1000,
		image: 		'items/spook-5987623_640.jpg',
		rarity: 	3,
	},
	axe:{
		name: 		'axe',
		value: 		140,
		image: 		'items/axe-674841_640.jpg',
		rarity: 	2,
	},
	plow:{
		name: 		'plow',
		value: 		200,
		image: 		'items/plow-1379734_640.jpg',
		rarity: 	2,
	},
	spear:{
		name: 		'spear',
		value: 		140,
		image: 		'items/middle-ages-228656_640.jpg',
		rarity: 	2,
	},
	sword:{
		name: 		'sword',
		value: 		800,
		image: 		'items/sword-1750449_640.jpg',
		rarity: 	2,
	},
	
	pitchfork:{
		name: 		'pitchfork',
		value: 		140,
		image: 		'items/background-2659339_640.jpg',
		rarity: 	2,
	},
	pickaxe:{
		name: 		'pickaxe',
		value: 		140,
		image: 		'items/pickaxe-5070026_640.jpg',
		rarity: 	2,
	},
	net:{
		name: 		'net',
		value: 		60,
		image: 		'items/fishing-nets-3341187_640.jpg',
		rarity: 	2,
	},
	parsley:{
		name: 		'parsley',
		value: 		5,
		image: 		'items/parsley-261039_640.jpg',
	},
	mint:{
		name: 		'mint',
		value: 		10,
		image: 		'items/mint-1500452_640.jpg',
	},
	mint_tea:{
		name: 		'mint tea',
		value: 		110,
		image: 		'items/peppermint-2816233_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 110,
		}
	},
	beer:{
		name: 		'beer',
		value: 		130,
		image: 		'items/beer-3803425_640.jpg',
		rarity: 	3,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 125,
		}
	},
	sage:{
		name: 		'sage',
		value: 		25,
		image: 		'items/sage-1544883_640.jpg',
	},
	rosemary:{
		name: 		'rosemary',
		value: 		50,
		image: 		'items/rosemary-1409060_640.jpg',
	},
	health_potion:{
		name: 		'health potion',
		value: 		100,
		image: 		'items/macro-4924607_640.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 100,
		}
	},
	mana_potion:{
		name: 		'mana potion',
		value: 		300,
		image: 		'items/macro-4924607_640l.jpg',
		rarity: 	2,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 300,
		}
	},
	poison:{
		name: 		'poison',
		value: 		350,
		image: 		'items/bottle-1481599_640.jpg',
		rarity: 	2,
	},
	luck_potion:{
		name: 		'luck potion',
		value: 		750,
		image: 		'items/potions-6391288_1280_1.jpg',
		rarity: 	3,
		consumable:{
			type: 	'luck',
			time: 	60,
			amount: 15,
		}
	},
	
	love_potion:{
		name: 		'love potion',
		value: 		2000,
		image: 		'items/purple-3102305_640.jpg',
		rarity: 	3,
	},
	restore_potion:{
		name: 		'restore potion',
		value: 		1000,
		image: 		'items/smoothie-3176355_640.jpg',
		rarity: 	3,
		consumable:{
			type: 	'work_effect',
			time: 	30,
			amount: 550,
		}
	},
	bone:{
		name: 		'bone',
		value: 		20,
		image: 		'items/bone-664596_640.jpg',
		rarity: 	1
	},
	rabbits_foot:{
		name: 		'rabbit\'s foot',
		value: 		20,
		image: 		'items/rabbit-4038246_1920.jpg',
		rarity: 	1
	},
	lucky_charm:{
		name: 		'lucky charm',
		value: 		100,
		image: 		'items/fish-5103117_640.jpg',
		rarity: 	3,
		consumable:{
			type: 	'luck',
			time: 	60,
			amount: 2,
		}
	},
	
	chicken:{
		name: 		'chicken',
		value: 		50,
		image: 		'items/hen-451984_640.jpg',
		stats:{
			hit: 		1,
			power: 		1,
			evade: 		3,
			armor: 		0,
			health: 	100,
			abilities:{
				strike: 	1
			},
		}
	},
	/*rooster:{
		name: 		'rooster',
		value: 		100,
		image: 		'items/rooster-1284283_640.jpg',
		stats:{
			hit: 		2,
			power: 		2,
			evade: 		3,
			armor: 		0,
			health: 	100,
			abilities:{
				strike: 	1
			},
		}
	},*/
	
}

eachoa(available_items, function(item_id, item_info){
	item_info['value'] = Math.floor(item_info['value'] * (1 + ((item_info['value'] * item_info['value']) / 1000)));
	item_info['value'] = round_decimals(item_info['value'], 2);
});

available_items = sortObj(available_items);

available_items = true_sort_object(available_items, 'value', false);

var shown_craft_analysis = false;

eachoa(available_actions, function(action_id, action_info){
	if(action_info['type'] == undefined || action_info['type'] == 'basic')
	{
		var total_value = 0;
		if(action_info['item_id'] != undefined)
		{
			total_value += available_items[action_info['item_id']]['value'];
		}
		eachoa(action_info['bonus_loot'], function(bonus_id, bonus_chance){
			if(available_items[bonus_id] != undefined)
			{
				total_value += (available_items[bonus_id]['value'] * bonus_chance / 100);
			}
			if(action_info['item_id'] == undefined && action_info['item_image'] == undefined)
			{
				action_info['item_image'] = bonus_id;
			}
		});

		if(action_info['reward_factor'] != undefined)
		{
			total_value = total_value * action_info['reward_factor'];
		}
		else
		{
			action_info['reward_factor'] = 1;
		}
		
		var full_value = total_value + 0;

		if(action_info['passive_factor'] == undefined)
		{
			action_info['passive_factor'] = 1;
		}

		action_info['passive_factor'] = 1;

		if(action_info['upgrade_item'] != undefined)
		{
			if(available_items[action_info['upgrade_item']]['used_in_recipes'] == undefined){available_items[action_info['upgrade_item']]['used_in_recipes'] = 0;}
			available_items[action_info['upgrade_item']]['used_in_recipes']++;
			//var upgrade_effect = (Math.sqrt(available_items[action_info['upgrade_item']]['value'] / 10));
			var upgrade_effect = /*Math.sqrt*/(available_items[action_info['upgrade_item']]['value'] / base_upgrade_cost / 10);
			if(upgrade_effect < 1){upgrade_effect = 1;}
			action_info['passive_factor'] *= upgrade_effect;
		}
		

		if(action_info['cost'] != undefined)
		{
			var total_cost = 0;
			var temp_cost = 0;
			eachoa(action_info['cost'], function(cost_id, cost_amount){
				if(available_items[cost_id] != undefined)
				{
					var cost_amount = available_actions[action_id]['cost'][cost_id];
					temp_cost += available_items[cost_id]['value'] * cost_amount;
					if(available_items[cost_id]['used_in_recipes'] == undefined){available_items[cost_id]['used_in_recipes'] = 0;}
					available_items[cost_id]['used_in_recipes']++;
				}
			});
			eachoa(action_info['cost'], function(cost_id, cost_amount){
				if(available_items[cost_id] != undefined)
				{
					//available_actions[action_id]['cost'][cost_id] = (available_actions[action_id]['cost'][cost_id] / temp_cost) * ((available_actions[action_id]['tier'] / 1) + 0.25);
					available_actions[action_id]['cost'][cost_id] = (available_actions[action_id]['cost'][cost_id] / temp_cost) * (to_the_nth(0.25,available_actions[action_id]['tier'],3));
					var cost_amount = available_actions[action_id]['cost'][cost_id];
					total_cost += available_items[cost_id]['value'] * cost_amount;
				}
			});
			var effective_value = (total_value - total_cost);
			/*if(effective_value > total_value/10)
			{
				var effective_value_percent = total_value / (effective_value - total_value/10);
				action_info['reward_factor'] /= effective_value_percent;
				effective_value = 10;
			}*/
			/*var total_cost = 0;
			var any_cost_amount_high = false;
			eachoa(action_info['cost'], function(cost_id, cost_amount){
				if(available_items[cost_id] != undefined)
				{
					var new_cost = cost_amount + 0;
					new_cost = (new_cost / global_crafting_factor);
					available_actions[action_id]['cost'][cost_id] = new_cost;
					total_cost += available_items[cost_id]['value'] * (new_cost * global_crafting_factor_correction);
					if(available_items[cost_id]['used_in_recipes'] == undefined){available_items[cost_id]['used_in_recipes'] = 0;}
					available_items[cost_id]['used_in_recipes']++;
					if(cost_amount > 5)
					{
						any_cost_amount_high = true;
					}
				}
			});
			if(any_cost_amount_high == true)
			{
				console.log('-----------');
				console.log(action_id + ' cost_amount too high!!');
			}
			if(total_cost > 0)
			{
				//action_info['chance'] = action_info['chance'] * (1 + ((total_cost * 2) / total_value));
				total_value -= total_cost;
			}
			//action_info['chance'] = (50 / (total_value / (1 + (total_value / 1000))));
			if(total_cost / full_value < 0.6)
			{
				//console.log(action_id + ' cost to low: ' + Math.floor((total_cost / full_value * 10)) / 10);
			}
			if(total_cost / full_value >= 1)
			{
				//console.log('!! ' + action_id + ' cost to high!!! ' + Math.floor((total_cost / full_value * 10)) / 10);
			}
			var cost_factor = total_cost / full_value;
			if(total_cost >= full_value)
			{
				//console.log(action_id + ' cost too high -> ' + (full_value - total_cost));
			}
			var action_cost_amount_bonus = (1 + (((count_object(action_info['cost']) - 1) / 5)));
			var effective_value = (full_value - total_cost) / action_cost_amount_bonus;
			if(effective_value / full_value < 0.1 && effective_value < 10 && (action_info['cost_type'] == undefined || action_info['cost_type'] != 'high'))
			{
				//console.log(action_id + ' cost to high!!! ' + effective_value + ' / ' + Math.ceil(full_value / 10));
				//effective_value = 10;
			}
			if(effective_value > 0)
			{
				var effective_value_percent = ((effective_value * action_cost_amount_bonus) / full_value);
				effective_value_percent = 0.1;
				
				var effective_scale = total_value;
				var reward_factor_scale = total_value;
				if(action_info['reward_factor'] == undefined){action_info['reward_factor'] = 1;}
				full_value /= action_info['reward_factor'];
				action_info['reward_factor'] *= 1 / (1 + effective_value_percent);
				full_value *= action_info['reward_factor'];
				effective_value = (full_value - total_cost) / action_cost_amount_bonus;
				//console.log('----------');
				//console.log(action_id + ' cost to low!!! ' + effective_value);
				//console.log('effective percent: ' + (Math.floor(effective_value_percent * 100)) + '%');
				//console.log('reward_factor should be: ' + (action_info['reward_factor'] * (1 / (1 + effective_value_percent))) );

				//console.log(action_id + ' cost to low!!! ' + (effective_value));
				//effective_value = 10;
			}
			if(((effective_value / action_info['passive_factor']) / (full_value / action_info['passive_factor']) > 0.2) && effective_value > 20 && (action_info['cost_type'] == undefined || action_info['cost_type'] != 'low'))
			{
				//console.log(action_id + ' cost to low: ' + (Math.floor((effective_value / action_info['passive_factor'] * 10)) / 10) + ' / ' + (Math.ceil(full_value / action_info['passive_factor'] * 10) * 0.02) + ' = ' + (effective_value / action_info['passive_factor']) / (full_value / action_info['passive_factor']));
			}
			var value_factor = effective_value;
			if(effective_value < 0)
			{
				value_factor = total_cost / full_value;
				console.log(action_id + ' cost too high -> ' + (value_factor));
			}
			action_info['chance'] = (1 / effective_value / base_crafting_speed);
			if(shown_craft_analysis == false && action_id == 'train_farmer')
			{
				shown_craft_analysis = true;
				console.log(action_id);
				console.log('total cost ' + total_cost);
				console.log('total value ' + full_value);
				console.log('effective_value ' + effective_value);
				console.log('chance ' + action_info['chance']);
			}*/
			action_info['chance'] = (total_cost / total_value / base_crafting_speed) * (1 + (count_object(action_info['cost']) / 5));
			if(shown_craft_analysis == false && action_id == 'train_farmer')
			{
				shown_craft_analysis = true;
				/*console.log(action_id);
				console.log('total cost ' + total_cost);
				console.log('total value ' + total_value);
				console.log('effective_value ' + effective_value);
				console.log('chance ' + action_info['chance']);*/
			}
		}
		else
		{
			if(total_value / action_info['passive_factor'] > 50 && (action_info['reward_factor'] > 1 || count_object(action_info['bonus_loot']) > 0) && (action_info['cost_type'] == undefined || action_info['cost_type'] != 'low'))
			{
				//console.log('-- ' + action_id + ' rewards to high: ' + Math.floor((total_value / action_info['passive_factor'] * 10)) / 10);
			}
			action_info['chance'] = (1 / total_value / base_action_speed);
		}
		
		
		if(action_info['progress_needed'] == undefined)
		{
			action_info['progress_needed'] = 1;
		}
		if(action_info['progress_needed'] != undefined)
		{
			action_info['chance'] *= action_info['progress_needed'];
		}
		
		

	}
	if(action_info['tier'] != undefined && action_info['unlock_cost'] != undefined)
	{
		
		/*var current_tier = action_info['tier'] + 1;
		console.log(current_tier);
		var current_tier_factor = current_tier * current_tier * current_tier * current_tier * current_tier;
		var total_unlock_cost = current_tier_factor * unlock_action_tier_cost;*/
		var current_tier_factor = tier_factor + action_info['tier'] - 1;
		var total_unlock_cost = to_the_nth(unlock_action_tier_cost, action_info['tier'],current_tier_factor);
		var current_total_unlock_cost = 0;
		eachoa(action_info['unlock_cost'], function(cost_id, cost_amount){
			var item_value = 1;
			if(available_items[cost_id] != undefined)
			{
				item_value = available_items[cost_id]['value'];
			}
			if(cost_id != 'coins')
			{
				current_total_unlock_cost += item_value * cost_amount;
			}
		});
		var unlock_cost_factor = (total_unlock_cost / 2) / current_total_unlock_cost;
		eachoa(action_info['unlock_cost'], function(cost_id, cost_amount){
			var new_item_cost_amount = Math.ceil(available_actions[action_id]['unlock_cost'][cost_id] * unlock_cost_factor);
			var numers_to_set_to_0 = new_item_cost_amount.toString().length - 2;
			if(numers_to_set_to_0 > 0)
			{
				var amount_to_round = to_the_nth(1, numers_to_set_to_0, 10);
				new_item_cost_amount = Math.floor(new_item_cost_amount / amount_to_round) * amount_to_round;
			}
			
			available_actions[action_id]['unlock_cost'][cost_id] = new_item_cost_amount;
		});
		var half_unlock_cost = Math.floor(total_unlock_cost / 2);
		var numers_to_set_to_0 = half_unlock_cost.toString().length - 2;
		if(numers_to_set_to_0 > 0)
		{
			var amount_to_round = to_the_nth(1, numers_to_set_to_0, 10);
			half_unlock_cost = Math.floor(half_unlock_cost / amount_to_round) * amount_to_round;
		}
		available_actions[action_id]['unlock_cost']['coins'] = half_unlock_cost;

	}
});

var unused_items = {};
eachoa(available_items, function(item_id, item_info){
	if(item_info['used_in_recipes'] == undefined || item_info['used_in_recipes'] < 1)
	{
		unused_items[item_id] = true;
	}
});

function suggest_new(amount){
	if(amount == undefined){amount = 1;}
	console.clear();
	for (var i = amount - 1; i >= 0; i--) {
		console.log(get_random_key_from_object(unused_items) + ' + ' + get_random_key_from_object(unused_items) + ' = ?');
	};
}