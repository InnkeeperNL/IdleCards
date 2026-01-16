var all_skills = {
	smithing: 		{
		name: 			'Smithing'
	},
	woodworking: 	{
		name: 			'Woodworking'
	},
	cooking: 		{
		name: 			'Cooking'
	},
	tailoring: 		{
		name: 			'Tailoring'
	},
	leatherworking: {
		name: 			'Leatherworking'
	},
	alchemy: {
		name: 			'Alchemy'
	},
	breeding: {
		name: 			'Breeding'
	},
	training: {
		name: 			'Training'
	},
}

all_skills = sortObj(all_skills);

var recipes = {
	
	plank:{
		name: 			'plank',
		skill: 			'woodworking',
		image: 			'items/wood-690402_640.jpg',
		cost: 			{
			timber: 	5
		},
		reward_type:	'item',
		reward_id: 		'plank',
		reward_amount: 	1
	},
	nails:{
		name: 			'nails',
		skill: 			'smithing',
		image: 			'items/nails-431564_640.jpg',
		cost: 			{
			iron: 		1
		},
		reward_type:	'item',
		reward_id: 		'nails',
		reward_amount: 	7
	},
	charcoal:{
		name: 			'charcoal',
		skill: 			'alchemy',
		image: 			'items/carbon-476087_640.jpg',
		cost: 			{
			timber: 	1
		},
		reward_type:	'item',
		reward_id: 		'charcoal',
		reward_amount: 	2
	},
	iron:{
		name: 			'iron',
		skill: 			'smithing',
		image: 			'items/iron3773.png',
		cost: 			{
			iron_ore: 	1,
			charcoal: 	5
		},
		reward_type:	'item',
		reward_id: 		'iron',
		reward_amount: 	1
	},
	iron_from_scrap:{
		name: 			'iron from scrap metal',
		skill: 			'smithing',
		image: 			'items/iron3773.png',
		cost: 			{
			scrap_metal:4,
			charcoal: 	5
		},
		reward_type:	'item',
		reward_id: 		'iron',
		reward_amount: 	1
	},
	cheese:{
		name: 			'cheese',
		skill: 			'cooking',
		cost: 			{
			milk: 		5,
			rennet: 	1,
			salt: 		1
		},
		reward_type:	'item',
		reward_id: 		'cheese',
		reward_amount: 	1
	},
	steak:{
		name: 			'steak',
		skill: 			'cooking',
		cost: 			{
			beef: 		1,
			charcoal: 	2,
			salt: 		1
		},
		reward_type:	'item',
		reward_id: 		'steak',
		reward_amount: 	1
	},
	sausage:{
		name: 			'sausage',
		skill: 			'cooking',
		image: 			'items/grill-party-3524649_640.jpg',
		cost: 			{
			pork: 		5, 	// 50
			charcoal: 	2, 	// 10
		},
		reward_type:	'item',
		reward_id: 		'sausage',
		reward_amount: 	1
	},
	hearty_breakfast:{
		name: 			'hearty breakfast',
		skill: 			'cooking',
		image: 			'items/bacon-1238245_640.jpg',
		cost: 			{
			sausage: 	1, 	// 50
			egg: 		2, 	// 20
			tomato: 	2, 	// 10
			pork: 		2,  // 20
							// --- 100
		},
		reward_type:	'item',
		reward_id: 		'hearty_breakfast',
		reward_amount: 	1
	},
	bottle:{
		name: 			'bottle',
		skill: 			'alchemy',
		cost: 			{
			sand: 		10, 	// 50
			charcoal: 	2, 		// 10
		},
		reward_type:	'item',
		reward_id: 		'bottle',
		reward_amount: 	1
	},
	herb_tea:{
		name: 			'herb tea',
		skill: 			'cooking',
		cost: 			{
			herbs: 		3,
			water: 		5,
		},
		reward_type:	'item',
		reward_id: 		'herb_tea',
		reward_amount: 	1
	},
	butcher_calf:{
		name: 			'butcher calf',
		skill: 			'cooking',
		unit_cost:{
			calf: 		1 			// 250
		},
		reward_type:	'item',
		rewards:{
			0:{
				reward_type:	'item',
				reward_id: 		'rennet',
				reward_amount: 	10,
			},
			1:{
				reward_type:	'item',
				reward_id: 		'veal',
				reward_amount: 	15
			},
		}
		
	},





	squirrel:{
		name: 			'squirrel',
		skill: 			'none',
		cost: 			{
			acorn: 		100, 		// 100
			cheese: 	5 			// 350
									//---- 450
		},
		reward_type:	'unit',
		reward_id: 		'squirrel',
		reward_amount: 	1
	},
	rat:{
		name: 			'rat',
		skill: 			'none',
		cost: 			{
			trash: 		10, 		// 50
			apple: 		25, 		// 250
			cheese: 	5 			// 350
			 						//---- 650
		},
		reward_type:	'unit',
		reward_id: 		'rat',
		reward_amount: 	1
	},
	peasant:{
		name: 			'peasant',
		skill: 			'training',
		description: 	'You need to show peasants you can take care of them for them to join you..',
		image: 			'units/peasant-482727_640.jpg',
		cost: 			{
			hearty_breakfast: 		1,			// 100
			coins: 					140			// 140
		},
		gear_cost:{
			soft_shirt: 			1 			// 160
												//---- 		400
		},
		reward_type:	'unit',
		reward_id: 		'peasant',
		reward_amount: 	1
	},
	farmer:{
		name: 			'farmer',
		skill: 			'training',
		image: 			'units/male-1924998_640.jpg',
		cost: 			{
			bread: 		10, 		// 420
			cloth: 		10,			// 500
		},
		unit_cost:{
			peasant: 	1 			// 400
		},
		gear_cost:{
			pitchfork: 	1 			// 320
									//---- 1640
		},
		reward_type:	'unit',
		reward_id: 		'farmer',
		reward_amount: 	1
	},
	lumberjack:{
		name: 			'lumberjack',
		skill: 			'none',
		cost: 			{
			steak: 		10, 		// 300
			coins: 		100			// 100
		},
		unit_cost:{
			peasant: 	1 			// 400
		},
		gear_cost:{
			handaxe: 	1    		// 160
									//---- 960
		},
		reward_type:	'unit',
		reward_id: 		'lumberjack',
		reward_amount: 	1
	},
	shieldman:{
		name: 			'shieldman',
		image: 			'units/man-1694634_640.jpg',
		skill: 			'training',
		cost: 			{
			hearty_breakfast: 	2, 			// 200
			bread: 				2,			// 84
			coins: 				100			// 100
		},
		unit_cost:{
			peasant: 			1 			// 400
		},
		gear_cost:{
			chain_vest: 		1,			// 90
			wooden_shield: 		1 			// 90
											//---- 954
		},
		reward_type:	'unit',
		reward_id: 		'shieldman',
		reward_amount: 	1
	},
	mender:{
		name: 			'mender',
		skill: 			'none',
		cost: 			{
			bread: 			2,			// 84
			cheese: 		1, 			// 70
			herb_tea: 		3			// 210
		},
		unit_cost:{
			peasant: 		1 			// 400
		},
		gear_cost:{
			soft_shirt: 	1,  		// 160
			lucky_acorn: 	1  			// 160
										// 1084
		},
		reward_type:	'unit',
		reward_id: 		'mender',
		reward_amount: 	1
	},
	mage:{
		name: 			'mage',
		image: 			'units/fantasy-2495660_640.jpg',
		skill: 			'training',
		cost: 			{
			charcoal: 		15,			//  75
			rune: 			3, 			//  60
			herb_tea: 		3			// 210
		},
		unit_cost:{
			peasant: 		1 			// 400
		},
		gear_cost:{
			soft_shirt: 	1, 			// 160
			runic_staff: 	1  			// 320
										//---- 1225
		},
		reward_type:	'unit',
		reward_id: 		'mage',
		reward_amount: 	1
	},
	calf:{
		name: 			'calf',
		skill: 			'breeding',
		cost: 			{
			hay: 		50			// 250
		},
		required_units:{
			cow: 		1,
			bull: 		1
		},
		reward_type:	'unit',
		reward_id: 		'calf',
		reward_amount: 	1
	},
	cow:{
		name: 			'cow',
		skill: 			'breeding',
		cost: 			{
			milk: 		25, 		// 250
			hay: 		50			// 250
		},
		unit_cost:{
			calf: 		1 			// 250
									//---- 750
		},
		reward_type:	'unit',
		reward_id: 		'cow',
		reward_amount: 	1
	},
	bull:{
		name: 			'bull',
		skill: 			'breeding',
		cost: 			{
			milk: 		50, 		// 500
			hay: 		100			// 500
		},
		unit_cost:{
			calf: 		1 			// 250
									//---- 1250
		},
		reward_type:	'unit',
		reward_id: 		'bull',
		reward_amount: 	1
	},

	///////////////////////////////////////// TRADE ////////////////////////////////////////////////////////////////////////////////////
	sell_random_unequipped_gear:{
		name: 			'local trader',
		skill: 			'none',
		image: 			'units/bazaar-1853361_640.jpg',
		description: 	'A local merchant wants to buy something from you.',
		gear_subtype: 	'any',
		gear_cost:{
		},
		reward_type:	'item',
		reward_id: 		'coins',
		reward_amount: 	0
	},
	buy_random_level_1_gear:{
		name: 			'local trader',
		skill: 			'none',
		image: 			'units/bazaar-1853361_640.jpg',
		description: 	'A local merchant has an offer for you.',
		offer_type: 	'gear',
		offer_subtype: 	'any',
		cost: 			{
			coins: 		0, 	
		},
		reward_type:	'gear',
		reward_id: 		'soft_shirt',
		reward_amount: 	1
	},
	shady_deal_sell:{
		name: 			'shady deal',
		skill: 			'none',
		image: 			'units/young-people-524513_640.jpg',
		description: 	'A shady figure has a deal for you.',
		gear_subtype: 	'leather',
		gear_cost:{
		},
		reward_type:	'item',
		reward_id: 		'coins',
		reward_amount: 	0
	},
	shady_deal_buy:{
		name: 			'shady deal',
		skill: 			'none',
		image: 			'units/young-people-524513_640.jpg',
		description: 	'A shady figure has a deal for you.',
		offer_type: 	'gear',
		offer_subtype: 	'leather',
		cost: 			{
			coins: 		0, 	
		},
		reward_type:	'gear',
		reward_id: 		'soft_shirt',
		reward_amount: 	1
	},
	general_merchant_sell:{
		name: 			'local trader',
		skill: 			'none',
		image: 			'units/bazaar-1853361_640.jpg',
		description: 	'A local merchant wants to buy something from you.',
		item_subtype: 	'any',
		item_quality: 	2,
		cost:{
		},
		reward_type:	'item',
		reward_id: 		'coins',
		reward_amount: 	0
	},
	general_merchant_buy:{
		name: 			'local trader',
		skill: 			'none',
		image: 			'units/bazaar-1853361_640.jpg',
		description: 	'A local merchant has an offer for you.',
		offer_type: 	'item',
		item_quality: 	1,
		offer_subtype: 	'any',
		cost: 			{
			coins: 		0, 	
		},
		reward_type:	'item',
		reward_id: 		'wool',
		reward_amount: 	1
	},
	buy_timber:{
		name: 			'buy timber',
		skill: 			'none',
		cost: 			{
			coins: 	20
		},
		reward_type:	'item',
		reward_id: 		'timber',
		reward_amount: 	1
	},
	buy_wheat:{
		name: 			'buy wheat',
		image: 			'items/wheat-3162803_640.jpg',
		description: 	'A local shopkeep is selling some wheat. Are you interested?',
		skill: 			'none',
		cost: 			{
			coins: 	200
		},
		reward_type:	'item',
		reward_id: 		'wheat',
		reward_amount: 	10
	},
	sell_leather_gear:{
		name: 			'sell leather gear',
		skill: 			'none',
		image: 			'units/young-people-524513_640.jpg',
		description: 	'A shady figure wants to buy some gear from you.',
		gear_cost:{
			leather_hood: 	1,
			leather_tunic: 	1,
			leather_boots: 	1,
			leather_gloves: 1
		},
		reward_type:	'item',
		reward_id: 		'coins',
		reward_amount: 	640
	},
	hungry_fairy:{
		name: 			'hungry fairy',
		skill: 			'none',
		image: 			'units/fantasy-3332119_640.jpg',
		description: 	'A fairy visits you looking for a meal. She offers coins in return.',
		cost: 			{
			acorn: 			10, 		// 10
		},
		reward_type:	'item',
		reward_id: 		'coins',
		reward_amount: 	10
	},
	hungry_hunter:{
		name: 			'hungry hunter',
		skill: 			'none',
		image: 			'units/hunter-1503082_640.jpg',
		description: 	'A local hunter is hungry. She will pay you well for a good meal.',
		cost: 			{
			water: 			1, 		// 2
			sausage: 	 	2, 		// 40
			bread: 			1 		// 42
		},
		reward_type:	'item',
		reward_id: 		'coins',
		reward_amount: 	84
	},
	learn_to_train_mages:{
		name: 			'Learn to train mages',
		skill: 			'none',
		image: 			'units/fantasy-2495660_640.jpg',
		description: 	'A local mage will teach you to train other mages... If the price is right.',
		cost: 			{
			coins: 			1000, 		// 1000
		},
		reward_type:	'recipe',
		reward_id: 		'mage',
		reward_amount: 	1
	},
	learn_to_train_farmers:{
		name: 			'Learn to train farmers',
		skill: 			'none',
		image: 			'units/male-1924998_640.jpg',
		description: 	'There must be a way to learn how to train farmers. Maybe if you <i>donate</i> some money to the local farmers they will teach you.',
		cost: 			{
			coins: 			250, 		// 1000
		},
		reward_type:	'recipe',
		reward_id: 		'farmer',
		reward_amount: 	1
	},
	buy_calf:{
		name: 			'buy a calf',
		skill: 			'none',
		image: 			'units/calf-829430_640.jpg',
		description: 	'There is a calf for sale.',
		cost: 			{
			coins: 		250			// 250
		},
		reward_type:	'unit',
		reward_id: 		'calf',
		reward_amount: 	1
	},
	

	///////////////////////////////////////// OLD ////////////////////////////////////////////////////////////////////////////////////


	
	wandering_druid:{
		name: 			'hire a wandering druid',
		skill: 			'none',
		cost: 			{
			coins: 		100,
			acorn: 		10
		},
		reward_type:	'unit',
		reward_id: 		'wandering_druid',
		reward_amount: 	1
	},
	unemployed_mercenary:{
		name: 			'Unemployed mercenary',
		skill: 			'none',
		image: 			'units/woman-3291814_640.jpg',
		description: 	'A mercenary is looking for a new employer.',
		cost: 			{
			coins: 		1500,
		},
		reward_type:	'unit',
		reward_id: 		'mercenary',
		reward_amount: 	1
	},
	wolf:{
		name: 			'tame a wolf',
		skill: 			'none',
		cost: 			{
			beef: 		10
		},
		reward_type:	'unit',
		reward_id: 		'wolf',
		reward_amount: 	1
	},
	brown_bear:{
		name: 			'tame a brown bear',
		skill: 			'none',
		cost: 			{
			fish: 		10
		},
		reward_type:	'unit',
		reward_id: 		'brown_bear',
		reward_amount: 	1
	},
	fox:{
		name: 			'tame a fox',
		skill: 			'none',
		cost: 			{
			beef: 		10
		},
		reward_type:	'unit',
		reward_id: 		'fox',
		reward_amount: 	1
	},
	waitress:{
		name: 			'hire a waitress',
		skill: 			'none',
		cost: 			{
			coins: 		200,
			bottle: 	10
		},
		reward_type:	'unit',
		reward_id: 		'waitress',
		reward_amount: 	1
	},
	catapult:{
		name: 			'catapult',
		skill: 			'none',
		cost: 			{
			coins: 		215,
			plank: 		5,
			nails: 		5
		},
		reward_type:	'unit',
		reward_id: 		'catapult',
		reward_amount: 	1
	},
	chick:{
		name: 			'hatch a chick',
		skill: 			'breeding',
		image: 			'units/chick-3139543_640.jpg',
		cost: 			{
			egg: 		12, // 120
			hay: 		2 	// 20
		},
		reward_type:	'unit',
		reward_id: 		'chick',
		reward_amount: 	1
	},
	chicken:{
		name: 			'raise a chicken',
		skill: 			'breeding',
		image: 			'units/hahn-1376009_640.jpg',
		cost: 			{
			wheat: 		25, 		// 250
		},
		unit_cost:{
			chick: 		1 			// 140
		},
		reward_type:	'unit',
		reward_id: 		'chicken',
		reward_amount: 	1
	},
	rooster:{
		name: 			'raise a rooster',
		skill: 			'breeding',
		image: 			'units/rooster-2641203_640.jpg',
		cost: 			{
			wheat: 		50, 		// 500
		},
		unit_cost:{
			chick: 		1 			// 140
		},
		reward_type:	'unit',
		reward_id: 		'rooster',
		reward_amount: 	1
	},
	cowboy:{
		name: 			'hire a cowboy',
		skill: 			'none',
		cost: 			{
			coins: 		400,
			beef: 		10
		},
		reward_type:	'unit',
		reward_id: 		'cowboy',
		reward_amount: 	1
	},
	troubadour:{
		name: 			'hire a troubadour',
		skill: 			'none',
		cost: 			{
			coins: 		300,
			bread: 		5
		},
		reward_type:	'unit',
		reward_id: 		'troubadour',
		reward_amount: 	1
	},
	guard:{
		name: 			'hire a guard',
		skill: 			'none',
		cost: 			{
			coins: 		325,
			iron: 		5
		},
		reward_type:	'unit',
		reward_id: 		'guard',
		reward_amount: 	1
	},
	archer:{
		name: 			'hire an archer',
		skill: 			'none',
		cost: 			{
			coins: 		300, 	// 300
			timber: 	10, 	// 100
			leather: 	10 		// 100
		},
		reward_type:	'unit',
		reward_id: 		'archer',
		reward_amount: 	1
	},
	frog:{
		name: 			'catch an frog',
		skill: 			'none',
		cost: 			{
			fish: 		25,
			water: 		125
		},
		reward_type:	'unit',
		reward_id: 		'frog',
		reward_amount: 	1
	},
	cloth:{
		name: 			'cloth',
		skill: 			'tailoring',
		image: 			'items/towel-1838210_640.jpg',
		cost: 			{
			yarn: 		25
		},
		reward_type:	'item',
		reward_id: 		'cloth',
		reward_amount: 	1
	},
	yarn_wool:{
		name: 			'yarn (wool)',
		skill: 			'tailoring',
		image: 			'items/yarn-2564556_640.jpg',
		cost: 			{
			wool: 		1
		},
		reward_type:	'item',
		reward_id: 		'yarn',
		reward_amount: 	5
	},
	yarn_cotton:{
		name: 			'yarn (cotton)',
		skill: 			'tailoring',
		image: 			'items/yarn-2564556_640.jpg',
		cost: 			{
			cotton: 	1
		},
		reward_type:	'item',
		reward_id: 		'yarn',
		reward_amount: 	5
	},
	rope:{
		name: 			'rope',
		skill: 			'tailoring',
		image: 			'items/ship-traffic-jams-602169_640.jpg',
		cost: 			{
			flax: 		5
		},
		reward_type:	'item',
		reward_id: 		'rope',
		reward_amount: 	1
	},
	hay:{
		name: 			'hay',
		skill: 			'none',
		cost: 			{
			coins: 		25
		},
		reward_type:	'item',
		reward_id: 		'hay',
		reward_amount: 	1
	},
	hay_bale:{
		name: 			'hay bale',
		skill: 			'none',
		cost: 			{
			hay: 		10
		},
		reward_type:	'unit',
		reward_id: 		'hay_bale',
		reward_amount: 	1
	},
	flour:{
		name: 			'flour',
		skill: 			'cooking',
		image: 			'items/flour-2713990_640.jpg',
		cost: 			{
			wheat: 		2
		},
		reward_type:	'item',
		reward_id: 		'flour',
		reward_amount: 	1
	},
	bread:{
		name: 			'bread',
		skill: 			'cooking',
		image: 			'items/bread-2193537_640.jpg',
		cost: 			{
			flour: 		2,
			water: 		1
		},
		reward_type:	'item',
		reward_id: 		'bread',
		reward_amount: 	1
	},	
	////////////////////////////////////////// GEAR BASIC //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	chain_boots:{
		name: 			'chain boots',
		skill: 			'smithing',
		cost: 			{
			leather: 	1, 	// 10
			yarn: 		5, 	// 10
			iron: 		2, 	// 70
							//--- 90
		},
		required_gear:{
			smiths_hammer: 	1
		},
		reward_type:	'gear',
		reward_id: 		'chain_boots',
		gear_types: 	[],
		reward_amount: 	1
	},
	chain_coif:{
		name: 			'chain coif',
		skill: 			'smithing',
		cost: 			{
			leather: 	1, 	// 10
			yarn: 		5, 	// 10
			iron: 		2, 	// 70
							//--- 90
		},
		required_gear:{
			smiths_hammer: 	1
		},
		reward_type:	'gear',
		reward_id: 		'chain_coif',
		gear_types: 	[],
		reward_amount: 	1
	},
	chain_gloves:{
		name: 			'chain gloves',
		skill: 			'smithing',
		cost: 			{
			leather: 	1, 	// 10
			yarn: 		5, 	// 10
			iron: 		2, 	// 70
							//--- 90
		},
		required_gear:{
			smiths_hammer: 	1
		},
		reward_type:	'gear',
		reward_id: 		'chain_gloves',
		gear_types: 	[],
		reward_amount: 	1
	},
	chain_vest:{
		name: 			'chain vest',
		skill: 			'smithing',
		image: 			'gear/chain_vest.png',
		cost: 			{
			leather: 	1, 	// 10
			yarn: 		5, 	// 10
			iron: 		2, 	// 70
							//--- 90
		},
		required_gear:{
			smiths_hammer: 	1
		},
		reward_type:	'gear',
		reward_id: 		'chain_vest',
		gear_types: 	[],
		reward_amount: 	1
	},
	leather_boots:{
		name: 			'leather boots',
		skill: 			'leatherworking',
		image: 			'gear/leather_boots.png',
		cost: 			{
			leather: 	6, 		// 60
			fur: 		2,	 	// 20
			yarn: 		5 		// 10
								//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'leather_boots',
		gear_types: 	[],
		reward_amount: 	1
	},
	leather_sabatons:{
		name: 			'leather sabatons',
		skill: 			'leatherworking',
		cost: 			{
			leather: 	11, 		// 110
			yarn: 		10,			// 20
			iron: 		4, 			// 140
									// ---- 270
		},
		gear_cost:{
			leather_boots: 	1 		// 90
									// ---- 360
		},
		required_gear:{
			smiths_hammer: 	1
		},
		reward_type:	'gear',
		reward_id: 		'leather_sabatons',
		gear_types: 	[],
		reward_amount: 	1
	},
	leather_gloves:{
		name: 			'leather gloves',
		skill: 			'leatherworking',
		image: 			'gear/leather_gloves.png',
		cost: 			{
			leather: 	6, 		// 60
			fur: 		2,	 	// 20
			yarn: 		5 		// 10
								//--- 360
		},
		reward_type:	'gear',
		reward_id: 		'leather_gloves',
		gear_types: 	[],
		reward_amount: 	1
	},
	leather_hood:{
		name: 			'leather hood',
		skill: 			'leatherworking',
		image: 			'gear/leather_hood.png',
		cost: 			{
			leather: 	6, 		// 60
			fur: 		2,	 	// 20
			yarn: 		5 		// 10
								//--- 360
		},
		reward_type:	'gear',
		reward_id: 		'leather_hood',
		gear_types: 	[],
		reward_amount: 	1
	},
	leather_tunic:{
		name: 			'leather tunic',
		skill: 			'leatherworking',
		image: 			'gear/leather_tunic.png',
		cost: 			{
			leather: 	6, 		// 60
			fur: 		2,	 	// 20
			yarn: 		5 		// 10
								//--- 360
		},
		reward_type:	'gear',
		reward_id: 		'leather_tunic',
		gear_types: 	[],
		reward_amount: 	1
	},
	leather_bag:{
		name: 			'leather bag',
		skill: 			'leatherworking',
		cost: 			{
			leather: 	3, 		// 30
			rope: 		1,	 	// 50
			yarn: 		5 		// 10
								//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'leather_bag',
		gear_types: 	[],
		reward_amount: 	1
	},
	pitchfork:{
		name: 			'pitchfork',
		skill: 			'smithing',
		cost: 			{
			plank: 			2, 		// 100
			iron:			2, 		// 70
			nails: 			2, 		// 10
									// --- 180
		},
		required_gear:{
			smiths_hammer: 	1,
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'pitchfork',
		gear_types: 	[],
		reward_amount: 	1
	},
	wooden_staff:{
		name: 			'wooden staff',
		skill: 			'woodworking',
		image: 			'gear/stick309848.png',
		cost: 			{
			timber: 		1, 		// 10
			herbs:			0.5 	// 10
			 						//--- 20
		},
		required_gear:{
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'wooden_staff',
		gear_types: 	[],
		reward_amount: 	1
	},
	runic_staff:{
		name: 			'runic staff',
		skill: 			'woodworking',
		image: 			'gear/staff8666f.png',
		cost: 			{
			rune: 			1.75,	// 35
			herbs:			1.75,	// 35
									// --- 70
		},
		gear_cost:{
			wooden_staff: 	1 		// 20
									//---- 90
		},
		required_gear:{
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'runic_staff',
		gear_types: 	[],
		reward_amount: 	1
	},
	mana_orb:{
		name: 			'mana orb',
		skill: 			'alchemy',
		cost: 			{
			bottle: 		1,		// 60
			herbs:			0.5,	// 10
			rune: 			1, 		// 20
									// --- 90
		},
		reward_type:	'gear',
		reward_id: 		'mana_orb',
		gear_types: 	[],
		reward_amount: 	1
	},
	soft_shirt:{
		name: 			'soft shirt',
		skill: 			'tailoring',
		image: 			'gear/shirt.png',
		cost: 			{
			cloth: 		1, 		// 50
			yarn: 		20 		// 40
								//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'soft_shirt',
		gear_types: 	[],
		reward_amount: 	1
	},
	soft_hood:{
		name: 			'soft hood',
		skill: 			'tailoring',
		image: 			'gear/hood.png',
		cost: 			{
			cloth: 		1, 		// 50
			yarn: 		20 		// 40
								//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'soft_hood',
		gear_types: 	[],
		reward_amount: 	1
	},
	soft_bracers:{
		name: 			'soft bracers',
		skill: 			'tailoring',
		image: 			'gear/leather_bracers.png',
		cost: 			{
			cloth: 		1, 		// 50
			yarn: 		20 		// 40
								//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'soft_bracers',
		gear_types: 	[],
		reward_amount: 	1
	},
	sandals:{
		name: 			'sandals',
		skill: 			'tailoring',
		image: 			'gear/sandals.png',
		cost: 			{
			cloth: 		1, 		// 50
			yarn: 		10, 	// 20
			timber: 	2, 		// 20
								//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'sandals',
		gear_types: 	[],
		reward_amount: 	1
	},
	handaxe:{
		name: 			'handaxe',
		skill: 			'smithing',
		cost: 			{
			timber: 	5.5,	// 55
			iron: 		1, 		// 35
								// -- 90
		},
		required_gear:{
			smiths_hammer: 	1,
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'handaxe',
		gear_types: 	[],
		reward_amount: 	1
	},
	smiths_hammer:{
		name: 			'smith\'s hammer',
		skill: 			'smithing',
		image: 			'gear/4smith_hammer.png',
		cost: 			{
			timber: 	2,		// 20
			iron: 		2, 		// 70
								// -- 90
		},
		reward_type:	'gear',
		reward_id: 		'smiths_hammer',
		gear_types: 	[],
		reward_amount: 	1
	},
	bloody_knife:{
		name: 			'bloody knife',
		skill: 			'smithing',
		cost: 			{
			leather: 	2,		// 20
			iron: 		2, 		// 70
								// -- 90
		},
		required_gear:{
			smiths_hammer: 	1,
		},
		reward_type:	'gear',
		reward_id: 		'bloody_knife',
		gear_types: 	[],
		reward_amount: 	1
	},
	carpenters_toolbox:{
		name: 			'carpenters toolbox',
		skill: 			'woodworking',
		image: 			'gear/carpenters-toolbox-1466467_640.jpg',
		cost: 			{
			timber: 		5, 		// 50
			iron: 			1, 		// 35
			nails: 			1, 		// 5
			 						//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'carpenters_toolbox',
		gear_types: 	[],
		reward_amount: 	1
	},
	shortbow:{
		name: 			'shortbow',
		skill: 			'woodworking',
		image: 			'gear/bow.png',
		cost: 			{
			timber: 		4, 		// 40
			rope: 			1, 		// 50
									// 90
		},
		gear_cost:{
			arrows: 	1 			// 90
									//---- 180
		},
		required_gear:{
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'shortbow',
		gear_types: 	[],
		reward_amount: 	1
	},
	arrows:{
		name: 			'arrows',
		skill: 			'woodworking',
		image: 			'gear/item_14.png',
		cost: 			{
			timber: 		4.5, 	// 45
			feather: 		4.5,	// 45
			 						//--- 90
		},
		required_gear:{
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'arrows',
		gear_types: 	[],
		reward_amount: 	1
	},
	club:{
		name: 			'club',
		skill: 			'woodworking',
		image: 			'gear/1club.png',
		cost: 			{
			timber: 		1, 		// 10
			 						// --- 10
		},
		reward_type:	'gear',
		reward_id: 		'club',
		gear_types: 	[],
		reward_amount: 	1
	},
	reinforced_club:{
		name: 			'reinforced club',
		skill: 			'smithing',
		cost: 			{
			iron: 			1, 		// 35
			timber: 		4.5, 	// 45
			 						// --- 80
		},
		gear_cost:{
			club: 	1 				// 10
									// --- 90
		},
		required_gear:{
			smiths_hammer: 	1,
		},
		reward_type:	'gear',
		reward_id: 		'reinforced_club',
		gear_types: 	[],
		reward_amount: 	1
	},
	mace:{
		name: 			'mace',
		skill: 			'smithing',
		cost: 			{
			iron: 			4, 		// 140
			timber: 		13, 	// 130
									// --- 270
		},
		gear_cost:{
			reinforced_club: 	1 	// 90
									//---- 360
		},
		required_gear:{
			smiths_hammer: 	1,
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'mace',
		gear_types: 	[],
		reward_amount: 	1
	},
	maul:{
		name: 			'maul',
		skill: 			'woodworking',
		cost: 			{
			plank: 		2, 			// 100
			iron: 		4, 			// 140
			rune: 		2, 			// 40
			stone: 		8, 			// 80
									// ----- 360
		},
		required_gear:{
			smiths_hammer: 	1,
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'maul',
		gear_types: 	[],
		reward_amount: 	1
	},
	wooden_shield:{
		name: 			'wooden shield',
		skill: 			'woodworking',
		image: 			'gear/viking-193667_640.jpg',
		cost: 			{
			plank: 		1, 			// 50
			nails: 		1, 			// 5
			iron: 		1, 			// 35
									// ----- 90
		},
		required_gear:{
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'wooden_shield',
		gear_types: 	[],
		reward_amount: 	1
	},
	wooden_ring:{
		name: 			'wooden ring',
		skill: 			'woodworking',
		cost: 			{
			timber: 	7, 			// 70
			rune: 		1, 			// 20
									// ----- 90
		},
		required_gear:{
			carpenters_toolbox: 	1
		},
		reward_type:	'gear',
		reward_id: 		'wooden_ring',
		gear_types: 	[],
		reward_amount: 	1
	},
	
	lucky_acorn:{
		name: 			'lucky acorn',
		skill: 			'alchemy',
		cost: 			{
			acorn: 		70, 		// 70
			rune: 		1 			// 20
									//--- 90
		},
		reward_type:	'gear',
		reward_id: 		'lucky_acorn',
		gear_types: 	[],
		reward_amount: 	1
	},
	
}

recipes = sortObj(recipes);