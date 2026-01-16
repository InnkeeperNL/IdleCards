var all_available_recipes = {
	arrow:{
		cost:{
			firewood: 	1,
			feather: 	1,
		},
		result:{
			arrow: 		1
		},
	},
	axe:{
		cost:{
			iron: 		1,
			pole: 		1,
		},
		result:{
			axe: 		1
		},
		cost_factor: 2,
	},
	backpack:{
		cost:{
			iron: 		1,
			leather: 	1,
		},
		result:{
			backpack: 	1
		},
		cost_factor: 2,
	},
	barrel:{
		cost:{
			iron: 	1,
			nail: 	10,
			plank: 	2,
		},
		result:{
			barrel: 	1
		},
		cost_factor: 2,
	},
	basket:{
		cost:{
			firewood: 	5,
		},
		result:{
			basket: 	1
		},
		cost_factor: 2,
	},
	bow:{
		cost:{
			pole: 		1,
			twine: 		1,
			arrow: 		10,
		},
		result:{
			bow: 		1
		},
		cost_factor: 2,
	},
	bread:{
		cost:{
			firewood: 	1,
			flour: 		1,
			water: 		1,
		},
		result:{
			bread: 		1
		},
	},
	bucket:{
		cost:{
			lumber: 	2,
		},
		result:{
			bucket: 	1
		},
		cost_factor: 2,
	},
	cloth:{
		cost:{
			twine: 		2,
		},
		result:{
			cloth: 		1
		},
	},
	copper:{
		cost:{
			copper_ore: 1,
			coal: 		1,
		},
		result:{
			copper: 	1
		}
	},
	copper_pot:{
		cost:{
			copper: 	2,
			coal: 		2,
		},
		result:{
			copper_pot: 	1
		},
		cost_factor: 2,
	},
	crate:{
		cost:{
			nail: 	10,
			plank: 	4,
		},
		result:{
			crate: 	1
		},
		cost_factor: 2,
	},
	flour:{
		cost:{
			stone: 		1,
			wheat: 		3,
		},
		result:{
			flour: 		1
		},
	},
	fries:{
		cost:{
			firewood: 	2,
			potato: 	2,
			salt: 		1,
		},
		result:{
			fries: 		1
		},
	},
	iron:{
		cost:{
			iron_ore: 	1,
			coal: 		1,
		},
		result:{
			iron: 		1
		}
	},
	leather:{
		cost:{
			firewood: 1,
			hide: 1,
		},
		result:{
			leather: 1
		}
	},
	map:{
		cost:{
			firewood: 2,
			paper: 2,
		},
		result:{
			map: 1
		}
	},
	nail:{
		cost:{
			iron: 1,
		},
		result:{
			nail: 20
		}
	},
	paper:{
		cost:{
			firewood: 1,
			lumber: 1,
			water: 	1,
		},
		result:{
			paper: 1
		}
	},
	parchment:{
		cost:{
			hide: 1,
			stone: 1,
		},
		result:{
			paper: 1
		}
	},
	pickaxe:{
		cost:{
			iron: 		1,
			pole: 		1,
		},
		result:{
			pickaxe: 1
		},
		cost_factor: 2,
	},
	pitchfork:{
		cost:{
			iron: 		1,
			pole: 		1,
		},
		result:{
			pitchfork: 1
		},
		cost_factor: 2,
	},
	plank:{
		cost:{
			lumber: 2,
		},
		result:{
			plank: 1
		}
	},
	pole:{
		cost:{
			lumber: 2,
		},
		result:{
			pole: 1
		}
	},
	pouch:{
		cost:{
			leather: 2,
		},
		result:{
			pouch: 1
		},
		cost_factor: 2,
	},
	roasted_meat:{
		cost:{
			firewood: 1,
			meat: 1,
		},
		result:{
			roasted_meat: 1
		},
	},
	sack:{
		cost:{
			cloth: 		2,
			twine: 		1,
		},
		result:{
			sack: 		1
		},
		cost_factor: 2,
	},
	twine:{
		cost:{
			flax: 		2,
		},
		result:{
			twine: 		1
		},
	},
}

eachoa(all_available_recipes, function(recipe_id, recipe_info){
	if(all_available_items[recipe_id] != undefined && all_available_items[recipe_id]['value'] != undefined)
	{
		delete all_available_items[recipe_id]['value'];
	}
});

function check_all_recipes(){
	var found_recipe_to_adjust = false;
	eachoa(all_available_recipes, function(recipe_id, recipe_info){
		if(found_recipe_to_adjust == false)
		{
			var total_cost = 0;
			var can_calc_this = true;
			eachoa(recipe_info['cost'], function(cost_id, cost_amount){
				if(all_available_items[cost_id] != undefined && all_available_items[cost_id]['value'] != undefined)
				{
					total_cost += all_available_items[cost_id]['value'] * cost_amount;
				}
				else
				{
					can_calc_this = false;
				}
			});
			if(can_calc_this == true)
			{
				var total_result = 0;
				var allready_calculated = false;
				eachoa(recipe_info['result'], function(result_id, result_amount){
					if(all_available_items[result_id] != undefined && all_available_items[result_id]['value'] != undefined)
					{
						total_result += all_available_items[result_id]['value'] * result_amount;
						if(all_available_items[result_id]['calculated'] != undefined)
						{
							allready_calculated = true;
						}
					}
				});
				cost_value = Math.ceil(total_cost * (0.5 + count_object(recipe_info['cost']) * 0.5));
				if(cost_value != total_result && allready_calculated == false)
				{
					found_recipe_to_adjust = recipe_id;
					//console.log(found_recipe_to_adjust);
					//console.log(cost_value + ' != ' + total_result);
					if(count_object(recipe_info['result']) == 1)
					{
						eachoa(recipe_info['result'], function(result_id, result_amount){
							if(all_available_items[result_id]['calculated'] == undefined)
							{
								all_available_items[result_id]['value'] = (cost_value / result_amount);
								all_available_items[result_id]['calculated'] = true;
								if(all_available_items[result_id]['energy'] != undefined)
								{
									all_available_items[result_id]['energy'] = calc_energy_per_value(all_available_items[result_id]['value']);
								}
								//console.log(all_available_items[result_id]);
							}
						});
					}
				}
			}
		}
	});
	if(found_recipe_to_adjust != false)
	{
		check_all_recipes();
	}
	
}

function check_all_item_effects(){
	eachoa(all_available_items, function(item_id, item_info){
		if(item_info['effects'] != undefined)
		{
			eachoa(item_info['effects'], function(effect_id, effect_amount){
				item_info['effects'][effect_id] = calc_effect_per_value(item_info['value'], effect_id);
			});
		}
	});
}

function calc_effect_per_value(value, effect_id){
	calced_effect_per_value = 1;
	if(effects_per_value[effect_id] != undefined)
	{
		calced_effect_per_value = effects_per_value[effect_id];
	}
	return Math.ceil(Math.sqrt(calced_effect_per_value * value));
}

check_all_recipes();
check_all_item_effects();