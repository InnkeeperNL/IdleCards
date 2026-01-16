var available_workers = {
	
	
	cook:{
		description: 	'Prepares food and drinks.',
		image: 			'workers/dream_TradingCard-2023-05-30T061947.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_tinder: 			true,
			gather_water: 			true,
			// crafting
			steak: 					true,	
			flour_wheat: 			true,
			bread_flour: 			true,
			cider_apple: 			true,
		},
		needs_locations:{
			kitchen: 		1,
		},
		trained_from: 		'crafter',
		training_cost:{
			rolling_pin: 	1,
			water: 			50,
		},
		buys_types: 	['basic_drinks','basic_food','light_clothes'],
	},
	crafter:{
		description: 	'Crafts basic items.<br/>Note: Cannot gather water.',
		image: 			'workers/dream_TradingCard-2023-05-29T064427.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_log: 			true,
			gather_sticks: 			true,
			// crafting
			sticks: 				true,
			tinder: 				true,
			coal_tinder: 			true,
			wooden_cane: 			true,
			rolling_pin: 			true,
			mallet_wooden: 			true,
			pickaxe_stone: 			true,
			pickaxe_copper: 		true,
			bottle_glass: 			true,
			copper_pot: 			true,
			twine_log: 				true,
			bow_simple: 			true,
		},
		needs_locations:{
			workshop: 		1,
		},
		trained_from: 		'peasant',
		training_cost:{
			stick: 			10,
		},
		buys_types: 	['basic_drinks','crafting','basic_food','tools','light_clothes'],
	},
	farmer:{
		description: 	'Can plant and harvest crops.',
		image: 			'workers/dream_TradingCard-2023-05-29T082301.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_dirt: 			true,
			gather_seeds: 			true,
			gather_water: 			true,
			// crafing
			grow_flax: 				true,
			grow_wheat: 			true,
			twine_flax: 			true,
		},
		needs_locations:{
			field: 			1,
		},
		trained_from: 		'peasant',
		training_cost:{
			cane: 			1,
			dirt: 			20,
			seeds: 			5,
			water: 			20
		},
		buys_types: 	['basic_drinks','farming','basic_food','light_clothes'],
	},
	hunter:{
		description: 	'Can expore and hunt.',
		image: 			'workers/dream_TradingCard-2023-06-03T055157.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_apples: 			true,
			gather_log: 			true,
			gather_water: 			true,
			// adventures
			explore_the_woods: 		true,
			forest_hunting: 		true,
			// crafting
			leather_tan: 			true,
		},
		needs_locations:{
			cabin: 			2,
		},
		trained_from: 		'scout',
		training_cost:{
			bow: 			1,
			apple: 			10
		},
		buys_types: 	['basic_drinks','exploring','basic_food','weapons','light_clothes','leather_clothes'],
	},
	miner:{
		description: 	'Can mine many things.',
		image: 			'workers/dream_TradingCard-2023-05-31T140705.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_coal: 			true,
			gather_copper: 			true,
			gather_sand: 			true,
			gather_stone: 			true,
			// crafing
			stone_break: 			true,
			stone_mine: 			true,
			copper_mine: 			true,
			copper_smelt:			true,
		},
		needs_locations:{
			mine: 			1,
		},
		trained_from: 		'scout',
		training_cost:{
			mallet: 		1,
			log: 			5
		},
		buys_types: 	['basic_drinks','basic_food','leather_clothes'],
	},
	peasant:{
		name: 			'peasant',
		description: 	'The basic worker.',
		image: 			'workers/dream_TradingCard-2023-05-20T095422.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_dirt_fast: 		true,
			gather_sticks_fast: 	true,
			gather_water_fast: 		true,
		},
		trained_from: 		'any',
		training_cost:{
		},
		buys_types: 	['basic_drinks','household','basic_food','light_clothes'],
	},
	scout:{
		description: 	'Can gather more items than a peasant.',
		image: 			'workers/dream_TradingCard-2023-05-29T072208.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_dirt: 			true,
			gather_log: 			true,
			gather_sticks: 			true,
			gather_water: 			true,
			// adventures
			explore_the_woods: 		true,
		},
		needs_locations:{
			forest: 		2,
		},
		trained_from: 		'peasant',
		training_cost:{
			cane: 			1,
			water: 			20
		},
		buys_types: 	['basic_drinks','exploring','basic_food','light_clothes','leather_clothes'],
	},
	tailor:{
		description: 	'Crafts cloth and leather items.',
		image: 			'workers/dream_TradingCard-2023-06-03T064826.jpg',
		base_power: 		1,
		base_speed: 		1,
		actions: {
			// resources
			gather_log: 			true,
			gather_sticks: 			true,
			// crafting
			twine_flax: 			true,
			twine_log: 				true,
			cloth: 					true,
			leather_tan: 			true,
			shirt_cloth: 			true,
			shoes_cloth: 			true,
			boots_leather: 			true,
			jacket_leather: 		true,

		},
		needs_locations:{
			sewing_room: 		1,
		},
		trained_from: 		'crafter',
		training_cost:{
			twine: 			10,
		},
		buys_types: 	['basic_drinks','basic_food','light_clothes'],
	},
	
};

$.each(available_workers, function(worker_id, worker_info){
	if(worker_info['name'] == undefined){worker_info['name'] = worker_id.replaceAll('_', ' ');}
	$.each(all_upgrades, function(upgrade_id, upgrade_info){
		if(worker_info['base_' + upgrade_id] == undefined)
		{
			worker_info['base_' + upgrade_id] = 1;
		}
	});
	if(worker_info['stats'] == undefined)
	{
		worker_info['stats'] = {
			power: 		5,
			max_hp: 	10,
			abilities:{
				attack: 	100,
			}
		}
	}
	if(worker_info['abilities'] != undefined)
	{
		worker_info['stats']['abilities'] = true_copyobject(worker_info['abilities']);
	}
});

available_workers = sortObj(available_workers);