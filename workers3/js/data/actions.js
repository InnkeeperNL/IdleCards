var available_actions = {
	// RESOURCES #####################################################################
	gather_apples:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		3,
		},
		cost:{},
		loot:{
			apple: 		5,
		}
	},
	gather_coal:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			mine: 		2,
		},
		cost:{},
		loot:{
			coal: 		5,
		}
	},
	gather_copper:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			mine: 			3,
		},
		cost:{},
		loot:{
			copper_ore: 	5,
		}
	},
	gather_dirt:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		2,
		},
		cost:{},
		loot:{
			dirt: 			10,
		}
	},
	gather_dirt_fast:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		2,
		},
		cost:{},
		loot:{
			dirt: 			2,
		}
	},
	gather_log:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		3,
		},
		cost:{},
		loot:{
			log: 			5,
		}
	},
	gather_sand:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			mine: 			2,
		},
		cost:{},
		loot:{
			sand: 			10,
		}
	},
	gather_seeds:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			field: 			1,
		},
		cost:{},
		loot:{
			seeds: 			5,
		}
	},
	gather_sticks:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		1,
		},
		cost:{},
		loot:{
			stick: 			5,
		}
	},
	gather_sticks_fast:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		1,
		},
		cost:{},
		loot:{
			stick: 			1,
		}
	},
	gather_stone:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			mine: 			1,
		},
		cost:{},
		loot:{
			stone: 			5,
		}
	},
	gather_tinder:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		1,
		},
		cost:{},
		loot:{
			tinder: 		10,
		}
	},
	gather_tinder_fast:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		1,
		},
		cost:{},
		loot:{
			tinder: 		2,
		}
	},
	gather_water:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{},
		cost:{},
		loot:{
			water: 			10,
		}
	},
	gather_water_fast:{
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{},
		cost:{},
		loot:{
			water: 			2,
		}
	},
	// CRAFTING #####################################################################
	boots_leather:{
		type: 				'crafting',
		subtypes: 			['tailoring','leather'],
		locations_needed:{
			sewing_room: 	4,
		},
		cost:{
			leather: 		4,
			log: 			1,
			twine: 			3,
		},
		loot:{
			boots: 			1,
		}
	},
	bottle_glass:{
		type: 				'crafting',
		subtypes: 			['smelting'],
		locations_needed:{
			mine: 			2,
			workshop: 		4,
		},
		cost:{
			coal: 			1,
			sand: 			10,
		},
		loot:{
			bottle: 		1,
		}
	},
	bow_simple:{
		type: 				'crafting',
		subtypes: 			['woodworking'],
		locations_needed:{
			cabin: 			1,
		},
		cost:{
			stick: 			5,
			twine: 			3,
		},
		loot:{
			bow: 			1,
		}
	},
	bread_flour:{
		type: 				'crafting',
		subtypes: 			['cooking'],
		locations_needed:{
			kitchen: 		2,
		},
		cost:{
			flour: 			6,
			tinder: 		15,
			water: 			6,
		},
		loot:{
			bread: 			1,
		}
	},
	cider_apple:{
		type: 				'crafting',
		subtypes: 			['cooking'],
		locations_needed:{
			mine: 			3,
			kitchen: 		3,
			workshop: 		5,
		},
		cost:{
			apple: 			10,
			bottle: 		1,
			copper_pot: 	1,
			tinder: 		20,
		},
		loot:{
			cider: 			1,
		}
	},
	cloth:{
		type: 				'crafting',
		subtypes: 			['tailoring','cloth'],
		locations_needed:{
			sewing_room: 	1,
		},
		cost:{
			twine: 			12,
		},
		loot:{
			cloth: 			5,
		}
	},
	coal_tinder:{
		type: 				'crafting',
		subtypes: 			['refining'],
		is_recource: 		true,
		locations_needed:{
			mine: 			2,
		},
		cost:{
			tinder: 		10,
		},
		loot:{
			coal: 			2,
		}
	},
	copper_mine:{
		type: 				'crafting',
		subtypes: 			['mining'],
		is_recource: 		true,
		locations_needed:{
			mine: 			3,
			workshop: 		3,
		},
		cost:{
			pickaxe: 		1,
		},
		loot:{
			copper_ore: 	20,
		}
	},
	copper_pot:{
		type: 				'crafting',
		subtypes: 			['mining'],
		locations_needed:{
			mine: 			3,
			workshop: 		5,
		},
		cost:{
			copper: 		5,
		},
		loot:{
			copper_pot: 	1,
		}
	},
	copper_smelt:{
		type: 				'crafting',
		subtypes: 			['smelting'],
		locations_needed:{
			mine: 			3,
		},
		cost:{
			coal: 			3,
			copper_ore: 	3,
		},
		loot:{
			copper: 		5,
		}
	},
	flour_wheat:{
		type: 				'crafting',
		subtypes: 			['refining'],
		locations_needed:{
			field: 			2,
			kitchen: 		1,
		},
		cost:{
			wheat: 			10,
		},
		loot:{
			flour: 			11,
		}
	},
	grow_flax:{
		type: 				'crafting',
		subtypes: 			['farming'],
		is_recource: 		true,
		locations_needed:{
			field: 			1,
		},
		cost:{
			dirt: 			5,
			seeds: 			2,
			water: 			5,
		},
		loot:{
			flax: 			10,
		}
	},
	grow_wheat:{
		type: 				'crafting',
		subtypes: 			['farming'],
		is_recource: 		true,
		locations_needed:{
			field: 			2,
		},
		cost:{
			dirt: 			5,
			seeds: 			2,
			water: 			5,
		},
		loot:{
			wheat: 			10,
		}
	},
	jacket_leather:{
		type: 				'crafting',
		subtypes: 			['tailoring','leather'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			leather: 		2,
			twine: 			2,
		},
		loot:{
			jacket: 		1,
		}
	},
	leather_tan:{
		type: 				'crafting',
		subtypes: 			['tailoring','leather'],
		locations_needed:{
			sewing_room: 	1,
		},
		cost:{
			hide: 			10,
			stick: 			5,
		},
		loot:{
			leather: 		5,
		}
	},
	mallet_wooden:{
		type: 				'crafting',
		subtypes: 			['woodworking'],
		locations_needed:{
			workshop: 		2,
		},
		cost:{
			log: 			6,
		},
		loot:{
			mallet: 		1,
		}
	},
	pickaxe_copper:{
		type: 				'crafting',
		subtypes: 			['woodworking'],
		locations_needed:{
			mine: 			3,
			workshop: 		3,
		},
		cost:{
			copper: 		3,
			log: 			5,
		},
		loot:{
			pickaxe: 		1,
		}
	},
	pickaxe_stone:{
		type: 				'crafting',
		subtypes: 			['woodworking'],
		locations_needed:{
			workshop: 		3,
		},
		cost:{
			log: 			5,
			stone: 			4,
		},
		loot:{
			pickaxe: 		1,
		}
	},
	rolling_pin:{
		type: 				'crafting',
		subtypes: 			['woodworking'],
		locations_needed:{
			workshop: 		2,
		},
		cost:{
			log: 			4,
		},
		loot:{
			rolling_pin: 	1,
		}
	},
	shirt_cloth:{
		type: 				'crafting',
		subtypes: 			['tailoring','cloth'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			cloth: 			2,
			twine: 			2,
		},
		loot:{
			shirt: 			1,
		}
	},
	shoes_cloth:{
		type: 				'crafting',
		subtypes: 			['tailoring','cloth','leather'],
		locations_needed:{
			sewing_room: 	3,
		},
		cost:{
			cloth: 			2,
			leather: 		1,
			log: 			1,
			twine: 			2,
		},
		loot:{
			shoes: 			1,
		}
	},
	steak:{
		type: 				'crafting',
		subtypes: 			['cooking'],
		locations_needed:{
			cabin: 			1,
			kitchen: 		1,
		},
		cost:{
			meat: 			1,
			tinder: 		10,
		},
		loot:{
			steak: 			1,
		}
	},
	sticks:{
		type: 				'crafting',
		subtypes: 			['refining'],
		is_recource: 		true,
		locations_needed:{
			forest: 		3,
		},
		cost:{
			log: 			2,
		},
		loot:{
			stick: 			10,
		}
	},
	stone_break:{
		type: 				'crafting',
		subtypes: 			['mining'],
		is_recource: 		true,
		locations_needed:{
		},
		cost:{
			mallet: 		1,
		},
		loot:{
			stone: 			15,
		}
	},
	stone_mine:{
		type: 				'crafting',
		subtypes: 			['mining'],
		is_recource: 		true,
		locations_needed:{
		},
		cost:{
			pickaxe: 		1,
		},
		loot:{
			stone: 			20,
		}
	},
	tinder:{
		type: 				'crafting',
		subtypes: 			['refining'],
		is_recource: 		true,
		locations_needed:{
			forest: 		2,
		},
		cost:{
			stick: 			5,
		},
		loot:{
			tinder: 		25,
		}
	},
	twine_flax:{
		type: 				'crafting',
		subtypes: 			['refining'],
		locations_needed:{
		},
		cost:{
			flax: 			4,
		},
		loot:{
			twine: 			5,
		}
	},
	twine_log:{
		type: 				'crafting',
		subtypes: 			['refining'],
		locations_needed:{
		},
		cost:{
			log: 			4,
		},
		loot:{
			twine: 			5,
		}
	},
	wooden_cane:{
		type: 				'crafting',
		subtypes: 			['woodworking'],
		locations_needed:{
		},
		cost:{
			stick: 			10,
		},
		loot:{
			cane: 			1,
		}
	},
	// ADVENTURES ###############################################################
	explore_the_woods:{
		name: 				'explore the woods',
		image: 				'locations/dream_TradingCard-2023-05-19T165358.jpg',
		description: 		'See what\'s there',
		loot_description: 	'Look for some lumber. You might even find some apples, seeds or stone.',
		type: 				'adventure',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 		3,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	15,
				loot:{
					seeds: 		5,
				}
			},
			1:{
				chance: 	55,
				loot:{
					log: 		2,
					tinder: 	5,
					stick: 		8,
				}
			},
			2:{
				chance: 	15,
				loot:{
					stone: 		5,
				}
			},
			3:{
				chance: 	15,
				loot:{
					apple: 		5,
				}
			}
		}
	},
	forest_hunting:{
		name: 				'forest hunting',
		image: 				'items/dream_TradingCard-2023-06-03T061612.jpg',
		description: 		'Hunt small game for hides and meat.',
		loot_description: 	'',
		type: 				'adventure',
		subtypes: 			['resources'],
		locations_needed:{
			cabin: 			2,
			forest: 		3,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	50,
				loot:{
					hide: 		2,
					meat: 		5,
				}
			},
			1:{
				chance: 	50,
				loot:{
					hide: 		5,
					meat: 		2,
				}
			},
		}
	},
}

$.each(available_actions, function(action_id, action_info){
	if(action_info['name'] == undefined){action_info['name'] = action_id.replaceAll('_', ' ');}
	var total_result = 0;
	var total_cost = 0;
	var total_value = 0;
	$.each(action_info['cost'], function(item_id, item_amount){
		if(available_items[item_id] != undefined && action_info['loot'][item_id] == undefined)
		{
			total_result -= available_items[item_id]['value'] * item_amount;
			total_cost += available_items[item_id]['value'] * item_amount;
		}
		if(available_items[item_id] != undefined && action_info['loot'][item_id] != undefined)
		{
			total_result -= available_items[item_id]['value'] * item_amount * 0.1;
			total_cost += available_items[item_id]['value'] * item_amount * 0.1;
		}
		if(available_items[item_id] != undefined)
		{
			available_items[item_id]['in_recipe'] = true;
		}
	});
	$.each(action_info['loot'], function(item_id, item_amount){
		if(available_items[item_id] != undefined && action_info['cost'][item_id] == undefined)
		{
			total_result += available_items[item_id]['value'] * item_amount;
			total_value += available_items[item_id]['value'] * item_amount;
		}
		if(action_info['image'] == undefined)
		{
			action_info['image'] = available_items[item_id]['image'];
		}
	});
	$.each(action_info['bonus_loot'], function(loot_id, loot_info){
		$.each(loot_info['loot'], function(item_id, item_amount){
			if(available_items[item_id] != undefined)
			{
				total_result += available_items[item_id]['value'] * item_amount * (loot_info['chance'] / 100);
				total_value += available_items[item_id]['value'] * item_amount * (loot_info['chance'] / 100);
			}
			if(action_info['image'] == undefined)
			{
				action_info['image'] = available_items[item_id]['image'];
			}
		});
	});
	if(available_actions[action_id]['type'] == 'combat')
	{
		/*available_actions[action_id]['time'] = Math.ceil(available_actions[action_id]['time'] * 0.8);*/
		total_result *= 1 / (1 + (available_actions[action_id]['level'] / 4));
		total_value *= 1 / (1 + (available_actions[action_id]['level'] / 4));
	}
	var temp_value_factor = (total_result / (1 + ((total_result) / 100)));
	available_actions[action_id]['time'] = seconds_per_value * temp_value_factor;
	if(count_object(action_info['cost']) > 0 && false)
	{
		available_actions[action_id]['time'] = seconds_per_value * (total_result / 2);
		//available_actions[action_id]['time'] = Math.ceil(available_actions[action_id]['time'] / 2);
		var value_to_cost = 1 - (total_cost / total_value);
		//console.log(action_id + ' = ' + available_actions[action_id]['time'] + ' > ' + Math.ceil(available_actions[action_id]['time'] * value_to_cost));
		available_actions[action_id]['time'] = Math.ceil(available_actions[action_id]['time'] * Math.sqrt(value_to_cost));
	}
	if(available_actions[action_id]['time'] < 0)
	{
		available_actions[action_id]['time'] = 1;
		console.log(action_info['name'] + ' cost to high!!!!');
	}
	if(count_object(action_info['cost']) > 0)
	{
		var total_profit = total_value - total_cost;
		if(total_profit < (total_value / 5)){console.log(action_id + ' profit to low: ' + total_profit + ' (' + (total_value / 5) + ')');}
		if(total_profit > (total_value / 4) && action_info['is_recource'] == undefined){console.log(action_id + ' profit to high: ' + total_profit + ' / ' + total_value + ' (' + (total_value / 4) + ')');}
	}
	/*if(total_cost > 0)
	{
		var ideal_value = Math.ceil(Math.sqrt(total_cost / 2) * 5 + (total_cost * 1.5));
		if(ideal_value < total_value * 0.95 && available_actions[action_id]['type'] != 'combat')
		{
			console.log(action_id + ' - IR: ' + ideal_value + ' (' + total_value + ')');
		}
		if(ideal_value > total_value * 1.2)
		{
			console.log('-- ' + action_id + ' - IR: ' + ideal_value + ' ~ ' + total_value + '');
		}
	}*/
});