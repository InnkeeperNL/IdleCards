var available_items = {
	
	
	apple:{
		value: 	5,
		image: 	'items/dream_TradingCard-2023-06-02T133122.jpg',
		types: 	['basic_food'],
	},
	boots:{
		value: 	200,
		image: 	'items/dream_TradingCard-2023-06-03T073243.jpg',
		types: 	['leather_clothes'],
	},
	bottle:{
		value: 	25,
		image: 	'items/dream_TradingCard-2023-05-21T092036.jpg',
		types: 	['household'],
	},
	bow:{
		value: 	60,
		image: 	'items/bow-1367578_640.jpg',
		types: 	['weapons'],
	},
	bread:{
		value: 	120,
		image: 	'items/dream_TradingCard-2023-05-20T094512.jpg',
		types: 	['basic_food'],
	},
	dirt:{
		value: 	1,
		image: 	'items/dream_TradingCard-2023-05-20T092322.jpg',
		types: 	['farming'],
	},
	cane:{
		value: 	40,
		image: 	'items/dream_TradingCard-2023-05-29T070037.jpg',
		types: 	['exploring'],
	},
	cider:{
		value: 	250,
		image: 	'items/dream_TradingCard-2023-06-02T133418.jpg',
		types: 	['basic_drinks'],
	},
	cloth:{
		value: 	30,
		image: 	'items/dream_TradingCard-2023-06-03T070523.jpg',
		types: 	[],
	},
	coal:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-06-02T062230.jpg',
		types: 	[],
	},
	copper:{
		value: 	15,
		image: 	'items/dream_TradingCard-2023-06-03T065335.jpg',
		types: 	[],
	},
	copper_ore:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-05-31T141828.jpg',
		types: 	[],
	},
	copper_pot:{
		value: 	100,
		image: 	'items/dream_TradingCard-2023-05-31T142320.jpg',
		types: 	['household'],
	},
	flax:{
		value: 	10,
		image: 	'items/nature-3082560_640.jpg',
		types: 	[],
	},
	flour:{
		value: 	12,
		image: 	'items/dream_TradingCard-2023-05-20T094740.jpg',
		types: 	[],
	},
	hide:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-06-03T061612.jpg',
		types: 	[],
	},
	leather:{
		value: 	30,
		image: 	'items/dream_TradingCard-2023-06-03T060446.jpg',
		types: 	[],
	},
	log:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-05-20T071343.jpg',
		types: 	['woodworking'],
	},
	jacket:{
		value: 	100,
		image: 	'items/dream_TradingCard-2023-06-03T071746.jpg',
		types: 	['leather_clothes'],
	},
	mallet:{
		value: 	75,
		image: 	'items/dream_TradingCard-2023-05-31T063054.jpg',
		types: 	['tools'],
	},
	meat:{
		value: 	20,
		image: 	'items/dream_TradingCard-2023-06-03T055943.jpg',
		types: 	[],
	},
	pickaxe:{
		value: 	120,
		image: 	'items/pickaxe-5070026_640.jpg',
		types: 	['tools'],
	},
	rolling_pin:{
		value: 	50,
		image: 	'items/dream_TradingCard-2023-05-30T062316.jpg',
		types: 	['household'],
	},
	sand:{
		value: 	1,
		image: 	'items/dream_TradingCard-2023-05-20T093921.jpg',
		types: 	[],
	},
	seeds:{
		value: 	5,
		image: 	'items/dream_TradingCard-2023-05-29T080926.jpg',
		types: 	['farming'],
	},
	shirt:{
		value: 	100,
		image: 	'items/dream_TradingCard-2023-06-03T071325.jpg',
		types: 	['light_clothes'],
	},
	shoes:{
		value: 	150,
		image: 	'items/dream_TradingCard-2023-06-03T072824.jpg',
		types: 	['light_clothes'],
	},
	steak:{
		value: 	40,
		image: 	'items/dream_TradingCard-2023-06-03T062333.jpg',
		types: 	['basic_food'],
	},
	stick:{
		value: 	3,
		image: 	'items/dream_TradingCard-2023-05-29T063109.jpg',
		types: 	['household'],
	},
	stone:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-05-20T092651.jpg',
		types: 	['mining'],
	},
	tinder:{
		value: 	1,
		image: 	'items/dream_TradingCard-2023-05-29T063515.jpg',
		types: 	['household'],
	},
	twine:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-05-29T084103.jpg',
		types: 	['household'],
	},
	wheat:{
		value: 	10,
		image: 	'items/dream_TradingCard-2023-05-20T094127.jpg',
		types: 	[],
	},
	water:{
		value: 	1,
		image: 	'items/dream_TradingCard-2023-05-20T092936.jpg',
		types: 	['basic_drinks'],
	},
}

$.each(available_items, function(item_id, item_info){
	if(item_info['name'] == undefined){item_info['name'] = item_id.replaceAll('_', ' ');}
	/*item_info['value'] = Math.floor(item_info['value'] * (1 + ((item_info['value'] * item_info['value']) / 1000)));
	item_info['value'] = round_decimals(item_info['value'], 2);*/
});

available_items = sortObj(available_items);