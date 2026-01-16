var current_building_id = '';

function show_building(){
	if(current_building_id == '' || all_available_buildings[current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		var parsed_building = '';
		var building_info = all_available_buildings[current_building_id];
		var building_level = 0;
		if(gamedata['buildings'][current_building_id] != undefined){building_level = gamedata['buildings'][current_building_id];}
		class_style('building_bg','backgroundImage','url(\'images/' + building_info['image'] + '\')');
		parsed_building += '<div class="building_name">' + building_info['name'] + '</div>';
		if(building_level > 0)
		{
			parsed_building += '<div class="building_level">Level ' + building_level + '</div>';
		}

		parsed_building += '<div class="building_effect">';
		if(building_info['description'] != undefined)
		{
			parsed_building += '<div class="building_description">' + building_info['description'] + '</div>';
		}
		parsed_building += parse_building_effect(current_building_id);

		if(building_info['recipes'] != undefined)
		{
			var parsed_recipes_title = false;
			eachoa(building_info['recipes'], function(recipe_id, recipe_level){
				if(recipe_level <= building_level)
				{
					if(parsed_recipes_title == false)
					{
						parsed_building += '<br/><br/>Crafting<br/>';
						parsed_recipes_title = true;
					}
					parsed_building += parse_recipe(recipe_id);
				}
			});
			parsed_building += '<div class="breaker"></div>';
		}

		if(building_info['max_level'] == undefined || building_level < building_info['max_level'])
		{
			parsed_building += parse_build_building(current_building_id);
		}

		parsed_building += '</div>';

		class_html('building_container', parsed_building);
	}
}

function parse_build_building(building_id){
	var building_info = all_available_buildings[building_id];
	var parsed_build_building = '';
	var can_build = true;
	var building_level = 0;
	if(gamedata['buildings'][building_id] != undefined){building_level = gamedata['buildings'][building_id];}

	if(gamedata['buildings'][building_id] == undefined)
	{
		parsed_build_building += '<br/>Cost:<br/>';
	}
	else
	{
		parsed_build_building += '<br/><br/><br/>Upgrade cost:<br/>';
	}
	var temp_cost = get_building_level_costs(building_id, building_level);
	eachoa(temp_cost, function(cost_id, cost_amount){
		var real_cost = to_the_nth(cost_amount, building_level, building_info['cost_factor']);
		if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
		var not_enough = '';
		if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < real_cost)
		{
			not_enough = 'not_enough';
			can_build = false;
		}
		var owned_amount = 0;
		if(gamedata['storage'][cost_id] != undefined){owned_amount = gamedata['storage'][cost_id];}
		parsed_build_building += '<div class="cost_item" style="background-image:url(\'images/' + all_available_items[cost_id]['image'] + '\')">';
		parsed_build_building += 	'<div class="item_amount ' + not_enough + '">' + owned_amount + ' / ' + real_cost + '</div>';
		parsed_build_building += '</div>';
	});

	if(can_build == true)
	{
		parsed_build_building += '<div class="breaker"></div>';
		parsed_build_building += '<div class="button slim build_now_button" onclick="build_building(\'' + building_id + '\')">BUILD</div>';
	}

	return parsed_build_building;
}

function check_can_upgrade_building(building_id){
	var building_info = all_available_buildings[building_id];
	var can_build = true;
	var building_level = 0;
	if(gamedata['buildings'][building_id] != undefined){building_level = gamedata['buildings'][building_id];}
	var temp_cost = get_building_level_costs(building_id, building_level);
	eachoa(temp_cost, function(cost_id, cost_amount){
		var real_cost = to_the_nth(cost_amount, building_level, building_info['cost_factor']);
		if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
		if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < real_cost)
		{
			can_build = false;
		}
	});
	return can_build;
}

function check_can_upgrade_building_percent(building_id){
	var building_info = all_available_buildings[building_id];
	var can_build_percent = 0;
	var total_build_cost = 0;
	var have_materials = 0;
	var building_level = 0;
	if(gamedata['buildings'][building_id] != undefined){building_level = gamedata['buildings'][building_id];}
	var temp_cost = get_building_level_costs(building_id, building_level);
	eachoa(temp_cost, function(cost_id, cost_amount){
		var real_cost = to_the_nth(cost_amount, building_level, building_info['cost_factor']);
		if(gamedata['storage'] == undefined){gamedata['storage'] = {};}

		if(gamedata['storage'][cost_id] != undefined && gamedata['storage'][cost_id] < real_cost)
		{
			have_materials += gamedata['storage'][cost_id];
		}
		if(gamedata['storage'][cost_id] != undefined && gamedata['storage'][cost_id] >= real_cost)
		{
			have_materials += real_cost;
		}
		total_build_cost += real_cost;
	});
	can_build_percent = Math.floor((have_materials / total_build_cost) * 100);
	return can_build_percent;
}

function get_building_level_costs(building_id, building_level){
	var building_info = all_available_buildings[building_id];
	var temp_cost = true_copyobject(building_info['cost']);
	eachoa(building_info['additional_costs'], function(min_level, additional_items){
		if(min_level <= building_level + 1)
		{
			eachoa(additional_items, function(cost_id, cost_amount){
				if(temp_cost[cost_id] == undefined){temp_cost[cost_id] = 0;}
				temp_cost[cost_id] += cost_amount;
				if(temp_cost[cost_id] <= 0){delete temp_cost[cost_id];}
			});
		}
	});
	return temp_cost;
}

function parse_building_effect(building_id){
	var building_info = all_available_buildings[building_id];
	var parsed_building_effect = '';
	var building_level = 0;
	if(gamedata['buildings'][building_id] != undefined){building_level = gamedata['buildings'][building_id];}

	if(building_info['effects']['max_storage'] != undefined)
	{
		parsed_building_effect += 'Maximum storage stack size: ' + get_max_storage() + '<br/>';
	}
	if(building_info['effects']['energy_on_click'] != undefined)
	{
		parsed_building_effect += 'Press the button below to get energy.<br/>';
		var energy_gained = (building_info['effects']['energy_on_click'] * building_level);
		if(energy_gained < 1)
		{
			parsed_building_effect += 'Chance to get energy:' + Math.ceil(energy_gained * 100) + '%<br/><br/>';
		}
		parsed_building_effect += '<div class="building_energy_button" onclick="gain_energy(' + energy_gained + ')"></div><br/>';
	}

	return parsed_building_effect;
}

function build_building(building_id){
	var building_info = all_available_buildings[building_id];
	var can_build = true;
	var building_level = 0;
	if(gamedata['buildings'][building_id] != undefined){building_level = gamedata['buildings'][building_id];}
	can_build = check_can_upgrade_building(building_id);
	if(can_build == true)
	{
		var temp_cost = get_building_level_costs(building_id, building_level);
		eachoa(temp_cost, function(cost_id, cost_amount){
			var real_cost = to_the_nth(cost_amount, building_level, building_info['cost_factor']);
			gamedata['storage'][cost_id] -= real_cost;
		});
		if(gamedata['buildings'][building_id] == undefined){gamedata['buildings'][building_id] = 0;}
		gamedata['buildings'][building_id] += 1;
		saveToLocalStorage();
		set_building(building_id);
		show_content('building');
	}
}

function parse_recipe(recipe_id){
	var parsed_recipe = '';
	if(all_available_recipes[recipe_id] != undefined)
	{
		parsed_recipe += '<div class="recipe_bar">';
		var can_craft = true;
		var recipe_info = all_available_recipes[recipe_id];
		parsed_recipe += '<div class="recipe_cost_container">';
		var result_item = false;
		eachoa(recipe_info['result'], function(result_id, gained_amount){
			if(result_item == false)
			{
				result_item = result_id;
			}
		});
			eachoa(recipe_info['cost'], function(cost_id, cost_amount){
				var real_cost = cost_amount;
				if(recipe_info['cost_factor'] != undefined && result_item != false)
				{
					var total_item_owned = 0;
					gamedata['storage']
					real_cost = to_the_nth(cost_amount, get_total_item_owned(result_item), recipe_info['cost_factor']);
				}
				if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
				var not_enough = '';
				if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < real_cost)
				{
					not_enough = 'not_enough';
					can_craft = false;
				}
				var owned_amount = 0;
				if(gamedata['storage'][cost_id] != undefined){owned_amount = gamedata['storage'][cost_id];}
				parsed_recipe += '<div class="recipe_cost_bar ' + not_enough + '">';
				parsed_recipe += 	'<div class="cost_item" style="background-image:url(\'images/' + all_available_items[cost_id]['image'] + '\')">';
				parsed_recipe += 	'</div>';
				parsed_recipe += 	'<span>' + nFormatter(owned_amount,0) + ' / ' + nFormatter(real_cost,0) + '</span>';
				parsed_recipe += '</div>';
			});
		parsed_recipe += '</div>';
		var any_result_not_maxed = false;
		eachoa(recipe_info['result'], function(result_id, gained_amount){
			var owned_amount = 0;
			var item_info = all_available_items[result_id];
			if(gamedata['storage'][result_id] != undefined){owned_amount = gamedata['storage'][result_id];}
			if(owned_amount < get_max_storage()){any_result_not_maxed = true;}
			parsed_recipe += '<div class="result_item" style="background-image:url(\'images/' + item_info['image'] + '\')">';
			if(item_info['energy'] != undefined)
			{
				parsed_recipe += 	'<div class="actions_energy_cost"><div class="consume_energy_amount_icon"></div><span class="action_energy_cost_text">' + item_info['energy'] + '</span></div>';
			}
			if(item_info['effects'] && item_info['effects']['max_energy'] != undefined)
			{
				parsed_recipe += 	'<div class="actions_energy_cost"><div class="action_cost_icon"></div><span class="action_energy_cost_text">' + item_info['effects']['max_energy'] + '</span></div>';
			}
			if(item_info['effects'] && item_info['effects']['max_storage'] != undefined)
			{
				parsed_recipe += 	'<div class="actions_energy_cost"><div class="max_storage_icon"></div><span class="action_energy_cost_text">' + item_info['effects']['max_storage'] + '</span></div>';
			}
			if(item_info['effects'] && item_info['effects']['max_inventory'] != undefined)
			{
				parsed_recipe += 	'<div class="actions_energy_cost"><div class="max_inventory_icon"></div><span class="action_energy_cost_text">' + item_info['effects']['max_inventory'] + '</span></div>';
			}
			parsed_recipe += 	'<div class="amount_gained">+' + gained_amount + '</div>';
			parsed_recipe += 	'<div class="item_amount">' + owned_amount + '</div>';
			parsed_recipe += '</div>';
		});
		if(can_craft == true && any_result_not_maxed == true)
		{
			parsed_recipe += '<div class="button slim build_now_button good" onclick="craft_recipe(\'' + recipe_id + '\')">CRAFT</div>';
		}
		else
		{
			parsed_recipe += '<div class="button slim build_now_button danger">CRAFT</div>';
		}
		parsed_recipe += '</div>';
	}
	return parsed_recipe;
}

function craft_recipe(recipe_id){
	if(all_available_recipes[recipe_id] != undefined)
	{
		var can_craft = true;
		var recipe_info = all_available_recipes[recipe_id];
		var result_item = false;
		eachoa(recipe_info['result'], function(result_id, gained_amount){
			if(result_item == false)
			{
				result_item = result_id;
			}
		});
		eachoa(recipe_info['cost'], function(cost_id, cost_amount){
			var real_cost = cost_amount;
			if(recipe_info['cost_factor'] != undefined)
			{
				var total_item_owned = 0;
				gamedata['storage']
				real_cost = to_the_nth(cost_amount, get_total_item_owned(result_item), recipe_info['cost_factor']);
			}
			if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
			var not_enough = '';
			if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < real_cost)
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			eachoa(recipe_info['cost'], function(cost_id, cost_amount){
				var real_cost = cost_amount;
				if(recipe_info['cost_factor'] != undefined)
				{
					var total_item_owned = 0;
					gamedata['storage']
					real_cost = to_the_nth(cost_amount, get_total_item_owned(result_item), recipe_info['cost_factor']);
				}
				gamedata['storage'][cost_id] -= real_cost;
			});
			eachoa(recipe_info['result'], function(result_id, gained_amount){
				if(gamedata['storage'][result_id] == undefined){gamedata['storage'][result_id] = 0;}
				gamedata['storage'][result_id] += gained_amount;
			});
			saveToLocalStorage();
			show_content('building');
		}

	}
}

function get_total_item_owned(item_id){
	var total_owned = 0;
	if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(gamedata['storage'][item_id] != undefined){total_owned += gamedata['storage'][item_id];}
	if(gamedata['inventory'][item_id] != undefined){total_owned += gamedata['inventory'][item_id];}
	return total_owned;
}