var all_available_actions = {
	
	apple_tree:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		4,
		max_action_amount: 		4,
		image: 					'actions/dream_TradingCard-2023-08-18T081111.jpg',
		action_loot:{
			apple: 		10,
			firewood: 	10,
		},
		final_loot:{
			apple: 		1,
			lumber: 	0.25,
			firewood: 	0.5,
		}
	},
	bird:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			3,
		image: 					'actions/bird-2295436_640.jpg',
		action_loot:{
		},
		final_loot:{
			feather: 	1,
			meat: 		0.1,
		}
	},
	boar:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2023-08-24T112735.jpg',
		action_loot:{
		},
		final_loot:{
			meat: 		1,
			hide: 		0.2,
		}
	},
	boulder:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		2,
		max_action_amount: 		6,
		energy_cost: 			2,
		image: 					'actions/dream_TradingCard-2023-08-18T093059.jpg',
		action_loot:{
			stone: 	10,
		},
		final_loot:{
			stone: 	1
		}
	},
	bunny:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			5,
		image: 					'actions/ai-generated-7700672_640.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		1,
			meat: 		0.1,
		}
	},
	bushes:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		2,
		max_action_amount: 		4,
		image: 					'actions/dream_TradingCard-2023-08-26T072559.jpg',
		action_loot:{
			firewood: 	50,
			twine: 		1,
			lumber: 	10,
			stone: 		1,
		},
		final_loot:{
			firewood: 		1,
			twine: 			0.01,
			lumber: 		0.01,
			stone: 			0.01,
		}
	},
	coal:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		2,
		max_action_amount: 		4,
		energy_cost: 			2,
		action_loot:{
			coal: 		50,
			stone: 		5,
		},
		final_loot:{
			coal: 		1,
			stone: 		0.5
		}
	},
	copper_ore:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		4,
		max_action_amount: 		4,
		energy_cost: 			2,
		action_loot:{
			copper_ore: 	10,
			stone: 			5,
		},
		final_loot:{
			copper_ore: 	1,
			stone: 			0.5
		}
	},
	deer:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			8,
		image: 					'actions/dream_TradingCard-2023-08-24T112025.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		1,
			meat: 		0.5,
		}
	},
	field_carrot:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			6,
		action_loot:{
		},
		final_loot:{
			carrot: 	1,
		}
	},
	field_flax:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			6,
		action_loot:{
		},
		final_loot:{
			flax: 	1,
		}
	},
	field_potato:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			6,
		action_loot:{
		},
		final_loot:{
			potato: 	1,
		}
	},
	field_wheat:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			6,
		action_loot:{
		},
		final_loot:{
			wheat: 	1,
		}
	},
	firewood:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		image: 					'items/dream_TradingCard-2023-08-17T072416.jpg',
		action_loot:{
		},
		final_loot:{
			firewood: 	1
		}
	},
	iron_ore:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		7,
		max_action_amount: 		7,
		energy_cost: 			2,
		image: 					'items/meteorite-91891_640.jpg',
		action_loot:{
			iron_ore: 	5,
			stone: 		1,
		},
		final_loot:{
			iron_ore: 	1,
			stone: 		0.5,
		}
	},
	salt:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		4,
		max_action_amount: 		4,
		energy_cost: 			2,
		action_loot:{
			salt: 		25,
			stone: 		5,
		},
		final_loot:{
			salt: 		1,
			stone: 		0.5,
		}
	},
	stream:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		3,
		max_action_amount: 		3,
		image: 					'actions/dream_TradingCard-2023-08-20T073648.jpg',
		action_loot:{
			water: 		50,
		},
		final_loot:{
			water: 		1
		},
	},
	tree:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		6,
		max_action_amount: 		6,
		image: 					'actions/dream_TradingCard-2023-08-17T084822.jpg',
		action_loot:{
			firewood: 	5,
			lumber: 	1,
		},
		final_loot:{
			lumber: 	1
		},
	},
	tree_large:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		6,
		max_action_amount: 		6,
		energy_cost: 			2,
		image: 					'actions/dream_TradingCard-2023-08-26T072820.jpg',
		action_loot:{
			lumber: 	25,
			firewood: 	10,
		},
		final_loot:{
			lumber: 	1
		},
	},
	
}

eachoa(all_available_actions, function(action_id, action_info){
	if(action_info['image'] == undefined)
	{
		set_action_image(action_id);
	}
	correct_action(action_id);
});

function set_action_image(action_id){
	var new_image = false;
	var action_info = all_available_actions[action_id];
	eachoa(action_info['final_loot'], function(loot_id, loot_amount){
		if(new_image == false)
		{
			new_image = all_available_items[loot_id]['image'];	
		}
	});
	if(new_image != false)
	{
		action_info['image'] = new_image;
	}
};

function correct_action(action_id, show_stats){
	if(all_available_actions[action_id] != undefined)
	{
		var action_info = all_available_actions[action_id];
		if(action_info['energy_cost'] == undefined){action_info['energy_cost'] = 1;}
		var average_actions = action_info['min_action_amount'] + ((action_info['max_action_amount'] - action_info['min_action_amount']) / 2) - 1;
		var total_action_loot = 0;
		eachoa(action_info['action_loot'], function(loot_id, loot_amount){
			total_action_loot += (all_available_items[loot_id]['value'] / 100) * loot_amount;
		});
		//total_action_loot /= count_object(action_info['action_loot']);
		total_action_loot *= average_actions;
		var total_final_loot = 0;
		eachoa(action_info['final_loot'], function(loot_id, loot_amount){
			total_final_loot += all_available_items[loot_id]['value'] * loot_amount;
		});
		//total_final_loot /= count_object(action_info['final_loot']);
		var ideal_value = (average_actions + 1) * action_info['energy_cost'] * value_per_energy;
		var current_value = total_action_loot + total_final_loot;
		if(ideal_value != current_value || show_stats != undefined || action_info['show_calc'] != undefined)
		{
			var final_value_left = ideal_value - current_value;
			var final_value_factor = 1 + (final_value_left / total_final_loot);
			var ideal_factor = ideal_value / current_value;
			/*if(final_value_factor < 1 || final_value_factor > 10 || show_stats != undefined || action_info['show_calc'] != undefined)
			{
				console.log(action_id);
				console.log('ideal: ' + ideal_value);
				console.log('current: ' + current_value);
				console.log('factor: ' + final_value_factor);
			}*/
			
			var highest_loot = 0;
			var more_loot_value_needed = 0;
			eachoa(action_info['final_loot'], function(loot_id, loot_amount){
				action_info['final_loot'][loot_id] *= final_value_factor;
				if(action_info['final_loot'][loot_id] > highest_loot)
				{
					highest_loot = action_info['final_loot'][loot_id];
					if(highest_loot < 1)
					{
						more_loot_value_needed = all_available_items[loot_id]['value'] * (1 - highest_loot);
					}
					else
					{
						more_loot_value_needed = 0;
					}
				}
			});
			if(more_loot_value_needed > 0 || show_stats != undefined || action_info['show_calc'] != undefined)
			{
				var excess_value = current_value - ideal_value;
				var loot_per_action = 0;
				if(average_actions > 0)
				{
					loot_per_action = total_action_loot / average_actions;
				}
				var action_excess_factor = total_action_loot / more_loot_value_needed;
				console.log(action_id);
				console.log('ideal: ' + ideal_value);
				console.log('current: ' + current_value);
				console.log('factor: ' + final_value_factor);
				console.log('loot_per_action: ' + loot_per_action);
				console.log('more_loot_value_needed: ' + more_loot_value_needed);
				console.log('action_excess_factor: ' + action_excess_factor);
				if(more_loot_value_needed > 0 && action_excess_factor > 1 && total_action_loot > 0)
				{
					eachoa(action_info['action_loot'], function(loot_id, loot_amount){
						action_info['action_loot'][loot_id] = (loot_amount / action_excess_factor);
					});
					//correct_action(action_id, show_stats);
				}
				/*eachoa(action_info['action_loot'], function(loot_id, loot_amount){
					action_info['action_loot'][loot_id] = Math.floor(loot_amount * sqr(highest_loot));
				});*/
				//correct_action(action_id, show_stats);
			}
		}
		if(show_stats != undefined || action_info['show_calc'] != undefined)
		{
			console.log(all_available_actions[action_id])
		}
	}
}