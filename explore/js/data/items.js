var all_available_items = {
	apple:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T080707.jpg',
		energy: 3,
		value: 	3,
	},
	arrow:{
		image: 	'items/arrows-4082046_640.jpg',
		value: 	3,
	},
	axe:{
		image: 	'items/axe-674841_640.jpg',
		effects:{
			woodcutting: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	backpack:{
		description: 'Each backpack increases maximum inventory by 1',
		image: 	'items/dream_TradingCard-2023-08-18T110922.jpg',
		effects:{
			max_inventory: 	2,
		},
		effect_type: 		'fixed',
		value: 	31,
	},
	basket:{
		image: 	'items/basket-1195754_640.jpg',
		effects:{
			gathering: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	barrel:{
		image: 	'items/barrels-g9348f93d3_640.jpg',
		effects:{
			max_energy: 	1,
		},
		effect_type: 		'fixed',
		value: 	25,
	},
	bow:{
		image: 	'items/bow-1367578_640.jpg',
		effects:{
			hunting: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	bread:{
		image: 	'items/dream_TradingCard-2023-05-20T094512.jpg',
		energy: 3,
		value: 	3,
	},
	bucket:{
		image: 	'items/dream_TradingCard-2023-08-18T094513.jpg',
		effects:{
			max_energy: 	1,
		},
		effect_type: 		'fixed',
		value: 	25,
	},
	carrot:{
		type: 	'resource',
		image: 	'items/carrot-1565597_640.jpg',
		energy: 3,
		value: 	3,
	},
	cloth:{
		image: 	'items/dream_TradingCard-2023-06-03T070523.jpg',
		value: 	5,
	},
	coal:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-06-02T062230.jpg',
		value: 	3,
	},
	copper:{
		image: 	'items/dream_TradingCard-2023-06-03T065335.jpg',
		value: 	5,
	},
	copper_ore:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-05-31T141828.jpg',
		value: 	5,
	},
	copper_pot:{
		image: 	'items/dream_TradingCard-2023-05-31T142320.jpg',
		value: 	5,
		effects:{
			max_energy: 	1,
		},
		effect_type: 		'fixed',
	},
	crate:{
		image: 	'items/boxes-2719166_640.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'fixed',
		value: 	5,
	},
	firewood:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-17T072416.jpg',
		value: 	1,
	},
	feather:{
		type: 	'resource',
		image: 	'items/feather-g61b6affba_640.jpg',
		value: 	1,
	},
	flax:{
		type: 	'resource',
		image: 	'items/nature-3082560_640.jpg',
		value: 	2,
	},
	flour:{
		image: 	'items/dream_TradingCard-2023-05-20T094740.jpg',
		value: 	1,
	},
	fries:{
		image: 	'items/french-fries-923687_640.jpg',
		energy: 1,
		value: 	1,
	},
	
	hide:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T110303.jpg',
		value: 	5,
	},
	iron:{
		image: 	'items/dream_TradingCard-2023-08-26T072143.jpg',
		value: 	12,
	},
	iron_ore:{
		type: 	'resource',
		image: 	'items/meteorite-91891_640.jpg',
		value: 	10,
	},
	leather:{
		image: 	'items/dream_TradingCard-2023-08-18T110531.jpg',
		value: 	9,
	},
	lumber:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-17T085131.jpg',
		value: 	5,
	},
	meat:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-24T112300.jpg',
		value: 	3,
	},
	map:{
		image: 	'items/dream_TradingCard-2023-08-20T070458.jpg',
		value: 	16,
	},
	nail:{
		image: 	'items/nails-4168539_640.jpg',
		value: 	16,
	},
	paper:{
		image: 	'items/dream_TradingCard-2023-08-20T070748.jpg',
		value: 	7,
	},
	pickaxe:{
		image: 	'items/pickaxe-5070026_640.jpg',
		effects:{
			mining: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	pitchfork:{
		image: 	'items/background-2659339_640.jpg',
		effects:{
			farming: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	plank:{
		image: 	'items/board-g8de0d90cf_640.jpg',
		value: 	10,
	},
	pole:{
		image: 	'items/rods-53130_640.jpg',
		value: 	10,
	},
	potato:{
		type: 	'resource',
		image: 	'items/potatoes-1585060_640.jpg',
		value: 	5,
	},
	pouch:{
		description: 'Each pouch increases maximum inventory by 1',
		image: 	'items/dream_TradingCard-2023-08-22T075422.jpg',
		effects:{
			max_inventory: 	1,
		},
		effect_type: 		'fixed',
		value: 	18,
	},
	roasted_meat:{
		image: 	'items/dream_TradingCard-2023-08-24T113417.jpg',
		energy: 1,
		value: 	1,
	},
	sack:{
		image: 	'items/dream_TradingCard-2023-08-26T074414.jpg',
		effects:{
			max_inventory: 	1,
		},
		effect_type: 		'fixed',
		value: 	18,
	},
	salt:{
		type: 	'resource',
		image: 	'items/salt-602215_640.jpg',
		value: 	2,
	},
	stone:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T090111.jpg',
		value: 	5,
	},
	twine:{
		image: 	'items/dream_TradingCard-2023-05-29T084103.jpg',
		value: 	5,
	},
	water:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-20T073449.jpg',
		energy: 1,
		value: 	1,
	},
	wheat:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-05-20T094127.jpg',
		value: 	2,
	},
	
};

eachoa(all_available_items, function(item_id, item_info){
	if(item_info['name'] == undefined)
	{
		item_info['name'] = item_id.replaceAll('_',' ');
	}
	if(item_info['energy'] != undefined)
	{
		if(item_info['value'] != undefined)
		{
			item_info['energy'] = calc_energy_per_value(item_info['value']);
		}
		else
		{
			console.log('cannot set energy for ' + item_id);
		}
	}
	/*if((item_info['type'] == undefined || item_info['type'] != 'resource') && item_info['value'] != undefined)
	{
		delete item_info['value'];
	}*/
});