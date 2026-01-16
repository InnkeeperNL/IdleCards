function show_all_locations(){
	if(gamedata['known_locations']['maywell_village'] == undefined)
	{
		gamedata['known_locations']['maywell_village'] = {};
	}

	$('#content_home').html('');

	var all_parsed_locations = '<div class="location_buttons_container">';

	$.each(all_locations, function(location_id, location_info){
		if(check_requirements(location_info['requirements']) && location_info['parent_location'] == undefined)
		{
			var parsed_location = parse_location_button(location_id);
			all_parsed_locations += parsed_location;
		}
	});

	all_parsed_locations += '</div>';

	$('#content_home').html(all_parsed_locations);
}

function count_available_locations(){
	var available_locations = 0;
	$.each(all_locations, function(location_id, location_info){
		if(location_info['parent_location'] == undefined  && check_requirements(location_info['requirements']))
		{
			available_locations++;
		}
	});
	return available_locations;
}

function parse_location_button(location_id){
	var parsed_location_button = '';

	if(all_locations[location_id] != undefined)
	{
		var location_info = all_locations[location_id];
		var quests_complete = '';
		$.each(location_info['actions'], function(action_id, useless_info){
			if(check_quest_complete(action_id))
			{
				quests_complete = '?';
			}
		});
		parsed_location_button += '<div class="location_button" onclick="play_sound_group(\'click\');set_current_location(\'' + location_id + '\');show_content(\'current_location\')">';
		parsed_location_button += 	'<div class="location_button_bg bg" style="background-image:url(images/' + location_info['image'] + ')">' + quests_complete + '</div>';
		parsed_location_button += 	'<div class="location_button_text">' + capitalizeFirstLetter(location_info['name']) + '</div>';
		parsed_location_button += 	'<div class="square_button arrow_right_button enter_location_button"></div>';
		parsed_location_button += '</div>';
	}
	return parsed_location_button;
}

function set_current_location(location_id){
	gamedata['current_location'] = location_id;
	saveToLocalStorage();
}

function show_current_location(){
	check_local_spawns();
	$('.menu_button_home').removeClass('active');
	if(gamedata['current_location'] == undefined || all_locations[gamedata['current_location']] == undefined ||  check_requirements(all_locations[gamedata['current_location']]['requirements']) == false)
	{
		if(gamedata['current_location'] != undefined && all_locations[gamedata['current_location']] != undefined && all_locations[gamedata['current_location']]['parent_location'] != undefined)
		{
			gamedata['current_location'] = all_locations[gamedata['current_location']]['parent_location'];
			show_current_location();
		}
		else
		{
			console.log('cannot show this location: ' + gamedata['current_location']);
			show_content('home');
		}
	}
	else
	{
		//$('#content_current_location').html('');
		var parsed_current_location = '';
		var location_info = all_locations[gamedata['current_location']];
		$('.location_bg').css('background-image','url(images/' + location_info['image'] + ')');

		$.each(location_info['actions'], function(action_id, requirements){
			if(all_actions[action_id]['type'] == 'spawner' && check_action_available(action_id, requirements) == true)
			{
				check_spawns(gamedata['current_location'], action_id);
			}
		});

		if(location_info['type'] == undefined)
		{

			parsed_current_location += '<div class="current_location_container">';
			if(location_info['parent_location'] != undefined && all_locations[location_info['parent_location']] != undefined && check_requirements(all_locations[location_info['parent_location']]['requirements']))
			{
				var parsed_location = parse_location_bar(location_info['parent_location'], true);
				parsed_current_location += parsed_location;
			}
			parsed_current_location += 		'<div class="location_name">' + location_info['name'] + '</div>';
			parsed_current_location += 		'<div class="location_description">' + location_info['description'] + '</div>';
			
			$.each(location_info['actions'], function(action_id, requirements){
				if(all_actions[action_id]['type'] != 'spawner' && check_action_available(action_id, requirements) == true)
				{
					parsed_current_location += parse_action_bar(action_id);
				}
			});
			$.each(all_locations, function(location_id, location_info){
				if(check_requirements(location_info['requirements']) && location_info['parent_location'] != undefined && location_info['parent_location'] == gamedata['current_location'])
				{
					var parsed_location = parse_location_bar(location_id);
					parsed_current_location += parsed_location;
				}
			});
			
			if(location_info['sale_slots'] != undefined && check_requirements(location_info['sale_slots']['requirements']))
			{
				parsed_current_location += parse_sale_slots();
			}
			if(location_info['craft_slots'] != undefined && check_requirements(location_info['craft_slots']['requirements']))
			{
				parsed_current_location += parse_craft_slots();
			}
			if(location_info['workers'] != undefined && check_requirements(location_info['workers']['requirements']))
			{
				parsed_current_location += parse_workers();
			}
			parsed_current_location += '</div>';
		}
		else
		{
			if(location_info['type'] == 'map')
			{
				parsed_current_location += show_location_map(gamedata['current_location'], false);
			}
		}


		$('#content_current_location').html(parsed_current_location);
	}
}

function show_location_map(location_id, fade_in_new){
	var parsed_current_location = '';
	var location_info = all_locations[gamedata['current_location']];
	var now = nowint();

	var all_free_slots = {};
	for (var free_col = 1; free_col <= 5; free_col++) {
		for (var free_row = 1; free_row <= 10; free_row++) {
			all_free_slots[free_col + '_' + free_row] = {col:free_col, row: free_row};
		}
	}
	delete all_free_slots['1_1'];
	check_window_orientation();
	parsed_current_location += '<div class="current_map_container">';
	if(location_info['parent_location'] != undefined && all_locations[location_info['parent_location']] != undefined && check_requirements(all_locations[location_info['parent_location']]['requirements']))
	{
		var parsed_location = parse_map_location_button(location_info['parent_location'], {col:1,row:1}, 'up', gamedata['current_location']);
		parsed_current_location += parsed_location;
	}
	$.each(location_info['actions'], function(action_id, position){
		if(all_actions[action_id]['type'] != 'spawner' && check_action_available(action_id))
		{
			parsed_current_location += parse_map_action_button(action_id, position);
			delete all_free_slots[position['col'] + '_' + position['row']];
		}
	});
	$.each(all_locations, function(location_id, location_info){
		if(check_requirements(location_info['requirements']) && location_info['parent_location'] != undefined && location_info['parent_location'] == gamedata['current_location'])
		{
			var parsed_location = parse_map_location_button(location_id, location_info['map_position'], 'down', gamedata['current_location']);
			delete all_free_slots[location_info['map_position']['col'] + '_' + location_info['map_position']['row']];
			parsed_current_location += parsed_location;
		}
	});
	$.each(location_info['decorations'], function(decoration_id, decoration_info){
		if(all_free_slots[decoration_info['col'] + '_' + decoration_info['row']] != undefined)
		{
			parsed_current_location += parse_map_decoration(decoration_info);
			delete all_free_slots[decoration_info['col'] + '_' + decoration_info['row']];
		}
	});
	if(gamedata['spawns'] != undefined && gamedata['spawns'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['spawns'][gamedata['current_location']], function(spawn_id, spawn_info){

			if(check_action_available(spawn_info['action_id']) && count_object(all_free_slots) > 0)
			{
				var action_position = spawn_info['position'];
				if(action_position == undefined || all_free_slots[action_position['col'] + '_' + action_position['row']] == undefined)
				{
					var spawned_location = all_free_slots[get_random_key_from_object(all_free_slots)];
					action_position = spawned_location;
					gamedata['spawns'][gamedata['current_location']][spawn_id]['position'] = spawned_location;
					saveToLocalStorage();
				}
				delete all_free_slots[action_position['col'] + '_' + action_position['row']];
				if(fade_in_new != undefined && fade_in_new == true && spawn_info['shown'] == false)
				{
					gamedata['spawns'][gamedata['current_location']][spawn_id]['shown'] = true;
					$('.current_map_container').append(parse_map_action_button(spawn_info['action_id'], action_position, spawn_id, true));
				}
				else
				{	
					parsed_current_location += parse_map_action_button(spawn_info['action_id'], action_position, spawn_id);
				}
			}
			
		});
	}
	parsed_current_location += '</div>';
	
	return parsed_current_location;
}

function check_local_spawns(){
	var now = nowint();
	if(gamedata['spawns'] != undefined && gamedata['spawns'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['spawns'][gamedata['current_location']], function(spawn_id, spawn_info){
			if(spawn_info['lifetime'] == undefined || spawn_info['lifetime'] < now)
			{
				if($('#content_current_location').hasClass('active'))
				{
					$('.col_' + spawn_info['position']['col'] + '.row_' + spawn_info['position']['row']).remove();
				}
				delete gamedata['spawns'][gamedata['current_location']][spawn_id];
			}
		});
		var location_info = all_locations[gamedata['current_location']];
		$.each(location_info['actions'], function(action_id, requirements){
			if(all_actions[action_id]['type'] == 'spawner' && check_action_available(action_id, requirements) == true)
			{
				check_spawns(gamedata['current_location'], action_id);
			}
		});
	}
}

function check_spawns(location_id, action_id){
	var now = nowint();
	var spawned_one = false;
	if(gamedata['spawn_timers'] == undefined){gamedata['spawn_timers'] = {};}
	if(gamedata['spawn_timers'][location_id] == undefined){gamedata['spawn_timers'][location_id] = {};}
	if(gamedata['spawn_timers'][location_id][action_id] == undefined){gamedata['spawn_timers'][location_id][action_id] = 0;}
	var action_info = all_actions[action_id];
	if(gamedata['spawns'] == undefined){gamedata['spawns'] = {};}
	if(gamedata['spawns'][location_id] == undefined){gamedata['spawns'][location_id] = {};}
	var active_spawns = 0;
	$.each(gamedata['spawns'][location_id], function(spawn_id, spawn_info){
		if(match_array_values(spawn_info['action_id'], action_info['spawns']))
		{
			active_spawns++;
		}
	});
	//for (var i = action_info['max_spawns'] - active_spawns; i > 0; i--) {
	var spawn_time = global_cooldown * 30;
	if(action_info['spawn_time'] != undefined){spawn_time = action_info['spawn_time'];}
	if(action_info['max_spawns'] > active_spawns && gamedata['spawn_timers'][location_id][action_id] <= now)
	{
		active_spawns++;
		gamedata['spawn_timers'][location_id][action_id] += spawn_time;
		spawn_action(location_id, action_id);
		show_location_map(location_id, true);
		spawned_one = true;
	}
	if(action_info['min_spawns'] != undefined && action_info['min_spawns'] > active_spawns)
	{
		active_spawns++;
		gamedata['spawn_timers'][location_id][action_id] = now + spawn_time;
		spawn_action(location_id, action_id);
		show_location_map(location_id, true);
		spawned_one = true;
	}
	if(action_info['max_spawns'] <= active_spawns && spawned_one == true)
	{
		gamedata['spawn_timers'][location_id][action_id] = now + spawn_time;
	}
	//}
};

function spawn_action(location_id, action_id){
	var chosen_action_id = '';
	var now = nowint();
	if(all_actions[action_id] != undefined){
		var action_info = all_actions[action_id];
		if(action_info['spawn_chances'] != undefined)
		{
			chosen_action_id = get_random_key_from_object_based_on_num_value(action_info['spawn_chances']);
		}
		
		if(check_action_available(chosen_action_id))
		{
			var new_spawn_key = get_highest_key_in_object(gamedata['spawns'][location_id]) + 1;
			var this_lifetime = now + (global_cooldown * 100) + (Math.random() * global_cooldown * 100);
			if(action_info['lifetime'] != undefined){this_lifetime = now + action_info['lifetime'] + (Math.random() * action_info['lifetime']);}
			gamedata['spawns'][location_id][new_spawn_key] = {
				action_id: 	chosen_action_id,
				shown: 		false,
				lifetime: 	this_lifetime,
			}
		}	
	}
};

function parse_sale_slots(){
	var slot_count = 0;
	var location_info = all_locations[gamedata['current_location']];
	var max_slots = 0;
	var parsed_sale_slots = '';
	var now = nowint();
	parsed_sale_slots += '<div class="workers_container sale_slots_container">';
	parsed_sale_slots += '<div class="workers_title sale_slots_title">Sales</div>';
	if(gamedata['sale_slots'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['sale_slots'][gamedata['current_location']], function(sale_slot_id, sale_slot_info){
			if(all_items[sale_slot_info['item_id']] != undefined)
			{
				slot_count += 1;
				var time_left = Math.ceil((sale_slot_info['done_time'] - now) / 1000);
				var done_class = '';
				if(time_left < 0)
				{
					done_class = 'done';
				}
				parsed_sale_slots += '<div class="worker sale_slot_' + sale_slot_id + ' ' + done_class + '" onclick="claim_sale(\'' + sale_slot_id + '\')" style="background-image:url(images/' + all_items[sale_slot_info['item_id']]['image'] + ')">';
					parsed_sale_slots += '<div class="selling_amount">' + sale_slot_info['amount'] + '</div>';
					parsed_sale_slots += '<div class="selling_time_left">' + seconds_to_time(time_left, 2) + '</div>';
					parsed_sale_slots += '<div class="clickable_area"></div>';
					parsed_sale_slots += '<div class="selling_time_done">Claim</div>';
				parsed_sale_slots += '</div>';
			}
			max_slots += 1;
		});
	}
	else
	{
		gamedata['sale_slots'][gamedata['current_location']] = {};
		for (var i = 0; i < location_info['sale_slots']['starting_amount']; i++) {
			gamedata['sale_slots'][gamedata['current_location']][i] = {
				item_id: 		'none',
				amount: 		0,
				done_time: 		0,
			};
		};
		max_slots = location_info['sale_slots']['starting_amount'];
	}
	
	if(max_slots > slot_count)
	{
		parsed_sale_slots += '<div class="worker" onclick="showing_picker=\'\';show_content(\'pick_sale\')">';
			parsed_sale_slots += '<div class="worker_amount">+</div>';
			parsed_sale_slots += '<div class="clickable_area"></div>';
		parsed_sale_slots += '</div>';
	}
	//parsed_sale_slots += '</div>';
	var slot_upgrade_cost = max_slots * max_slots * location_info['sale_slots']['slot_cost'];
	var owned_coins = get_item_owned_amount('coins');
	//parsed_sale_slots += '<div class="workers_container">';
	parsed_sale_slots += 	'<div class="workers_expand_title">Slot cost:<br/><span style="color:' + get_percent_color(owned_coins, slot_upgrade_cost) + '">' + owned_coins + '</span> / ' + slot_upgrade_cost + ' coins</div>';
	if(owned_coins >= slot_upgrade_cost)
	{
		parsed_sale_slots += 	'<button class="inline_button slim gold" onclick="buy_sale_slot()">Upgrade</button>';
	}
	parsed_sale_slots += '</div>';
	return parsed_sale_slots;
}

function parse_craft_slots(){
	var slot_count = 0;
	var location_info = all_locations[gamedata['current_location']];
	var max_slots = 0;
	var parsed_sale_slots = '';
	var now = nowint();
	parsed_sale_slots += '<div class="workers_container sale_slots_container">';
	parsed_sale_slots += '<div class="workers_title sale_slots_title">Production</div>';
	if(gamedata['craft_slots'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['craft_slots'][gamedata['current_location']], function(sale_slot_id, sale_slot_info){
			if(all_recipes[sale_slot_info['item_id']] != undefined)
			{
				slot_count += 1;
				var time_left = Math.ceil((sale_slot_info['done_time'] - now) / 1000);
				var done_class = '';
				if(time_left < 0)
				{
					done_class = 'done';
				}
				parsed_sale_slots += '<div class="worker craft_slot_' + sale_slot_id + ' ' + done_class + '" onclick="claim_craft_slot(\'' + sale_slot_id + '\')" style="background-image:url(images/' + all_recipes[sale_slot_info['item_id']]['image'] + ')">';
					parsed_sale_slots += '<div class="selling_amount">' + sale_slot_info['amount'] + '</div>';
					parsed_sale_slots += '<div class="selling_time_left">' + seconds_to_time(time_left, 2) + '</div>';
					parsed_sale_slots += '<div class="clickable_area"></div>';
					parsed_sale_slots += '<div class="selling_time_done">Claim</div>';
				parsed_sale_slots += '</div>';
			}
			max_slots += 1;
		});
	}
	else
	{
		gamedata['craft_slots'][gamedata['current_location']] = {};
		for (var i = 0; i < location_info['craft_slots']['starting_amount']; i++) {
			gamedata['craft_slots'][gamedata['current_location']][i] = {
				item_id: 		'none',
				amount: 		0,
				done_time: 		0,
			};
		};
		max_slots = location_info['craft_slots']['starting_amount'];
	}
	
	if(max_slots > slot_count)
	{
		parsed_sale_slots += '<div class="worker" onclick="showing_picker=\'\';show_content(\'pick_craft_recipe\')">';
			parsed_sale_slots += '<div class="worker_amount">+</div>';
			parsed_sale_slots += '<div class="clickable_area"></div>';
		parsed_sale_slots += '</div>';
	}
	//parsed_sale_slots += '</div>';
	var slot_upgrade_cost = max_slots * max_slots * location_info['craft_slots']['slot_cost'];
	var owned_coins = get_item_owned_amount('coins');
	//parsed_sale_slots += '<div class="workers_container">';
	parsed_sale_slots += 	'<div class="workers_expand_title">Slot cost:<br/><span style="color:' + get_percent_color(owned_coins, slot_upgrade_cost) + '">' + owned_coins + '</span> / ' + slot_upgrade_cost + ' coins</div>';
	if(owned_coins >= slot_upgrade_cost)
	{
		parsed_sale_slots += 	'<button class="inline_button slim gold" onclick="buy_craft_slot()">Upgrade</button>';
	}
	parsed_sale_slots += '</div>';
	return parsed_sale_slots;
}

function show_pick_craft_recipe(){
	var all_possible_recipes = all_locations[gamedata['current_location']]['craft_slots']['possible_recipes'];
	var parsed_recipe_list = '';
	$.each(all_recipes, function(recipe_id, recipe_info){
		if(gamedata['known_recipes'][recipe_id] != undefined && match_array_values(recipe_id, all_possible_recipes)){
			var can_trade = true;
			var parsed_recipe = '';
			parsed_recipe += '<div class="action_bar recipe_details">';
			parsed_recipe += '<div class="recipe_costs">';
			var total_recipe_cost = 0;
			$.each(recipe_info['cost'], function(item_id, item_amount){
				
				total_recipe_cost += all_items[item_id]['value'] * item_amount;
				if(get_item_owned_amount(item_id) < item_amount)
				{
					can_trade = false;
					parsed_recipe += 	'<span class="not_enough">' + parse_item(item_id, undefined, ('<span class="cost_amount">-' + nFormatter(item_amount,3) + '</span>')) + '</span>';
				}
				else
				{
					parsed_recipe += 	parse_item(item_id, undefined, ('<span class="cost_amount">-' + nFormatter(item_amount,3) + '</span>'));
				}
			});

			parsed_recipe += '</div>';
			parsed_recipe += '<div class="recipe_rewards">';
			parsed_recipe += 		'<div class="square_button no_bg arrow_right_button">&nbsp;</div>';
			var total_reward_value = 0;
			$.each(recipe_info['rewards'], function(item_id, item_amount){

					total_reward_value += all_items[item_id]['value'] * item_amount;
					parsed_recipe += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + nFormatter(item_amount,3) + '</span>'));
				
			});
			parsed_recipe += '</div>';
			var worker_effect = check_worker_effect('power_level') / base_worker_crafting;
			if(recipe_info['stat'] != undefined)
			{
				worker_effect = check_worker_effect(recipe_info['stat']);
			}
			var time_factor = 1;
			if(total_recipe_cost > 0)
			{
				time_factor =  1 - (total_recipe_cost / total_reward_value);
			}
			if(time_factor < 0.5){time_factor = 0.5;}
			var total_time = Math.floor(((total_reward_value * base_craft_time) * (time_factor)) / (1 + worker_effect));
			parsed_recipe += '<div class="recipe_summary">';
			parsed_recipe += 	'<span class="craft_time">' + seconds_to_time(total_time) + '</span>';

			if(can_trade == true)
			{
				parsed_recipe += 	'<div class="square_button craft_button" onclick="start_craft_slot(\'' + recipe_id + '\')">&nbsp;</div>';
			}
			parsed_recipe += '</div>';
			parsed_recipe += '</div>';
			parsed_recipe_list += parsed_recipe;
		};
	});
	$('.pick_craft_recipe_container').html(parsed_recipe_list);
}

function start_craft_slot(recipe_id){
	if(all_recipes[recipe_id] != undefined && gamedata['craft_slots'][gamedata['current_location']] != undefined)
	{
		
		var free_sale_slot = -1;
		$.each(gamedata['craft_slots'][gamedata['current_location']], function(sale_slot, sale_info){
			if(sale_info['item_id'] == 'none' && free_sale_slot == -1)
			{
				free_sale_slot = sale_slot;
			}
		});
		var can_trade = true;
		var recipe_info = all_recipes[recipe_id];
		var total_recipe_cost = 0;
		$.each(recipe_info['cost'], function(item_id, item_amount){
			total_recipe_cost += all_items[item_id]['value'] * item_amount;
			if(get_item_owned_amount(item_id) < item_amount)
			{
				can_trade = false;
			}
		});
		var total_reward_value = 0;
		$.each(recipe_info['rewards'], function(item_id, item_amount){
			total_reward_value += all_items[item_id]['value'] * item_amount;
		});
		var worker_effect = check_worker_effect('power_level') / base_worker_crafting;
		if(recipe_info['stat'] != undefined)
		{
			worker_effect = check_worker_effect(recipe_info['stat']);
		}
		var time_factor = 1;
		if(total_recipe_cost > 0)
		{
			time_factor =  1 - (total_recipe_cost / total_reward_value);
		}
		if(time_factor < 0.5){time_factor = 0.5;}
		var total_time = Math.floor(((total_reward_value * base_craft_time) * (time_factor)) / (1 + worker_effect));
		if(free_sale_slot > -1 && can_trade == true)
		{
			gamedata['craft_slots'][gamedata['current_location']][free_sale_slot] = {
				item_id: 		recipe_id,
				amount: 		1,
				done_time: 		nowint() + (total_time * 1000),
			};
			$.each(recipe_info['cost'], function(item_id, item_amount){
				gain_item(item_id, (item_amount * -1), true);
			});
		}
		show_content('current_location');
	}
}

function check_sale_timers(){
	var now = nowint();
	if($('#content_current_location').hasClass('active') && gamedata['sale_slots'][gamedata['current_location']] != undefined){
		$.each(gamedata['sale_slots'][gamedata['current_location']], function(sale_slot_id, sale_slot_info){
			if(all_items[sale_slot_info['item_id']] != undefined)
			{
				var time_left = Math.ceil((sale_slot_info['done_time'] - now) / 1000);
				if(time_left < 0)
				{
					$('.sale_slot_' + sale_slot_id).addClass('done');
				}
				else
				{
					$('.sale_slot_' + sale_slot_id + ' .selling_time_left').html(seconds_to_time(time_left, 2));
				}
			}
		});
	}
	if($('#content_current_location').hasClass('active') && gamedata['craft_slots'][gamedata['current_location']] != undefined){
		$.each(gamedata['craft_slots'][gamedata['current_location']], function(sale_slot_id, sale_slot_info){
			if(all_recipes[sale_slot_info['item_id']] != undefined)
			{
				var time_left = Math.ceil((sale_slot_info['done_time'] - now) / 1000);
				if(time_left < 0)
				{
					$('.craft_slot_' + sale_slot_id).addClass('done');
				}
				else
				{
					$('.craft_slot_' + sale_slot_id + ' .selling_time_left').html(seconds_to_time(time_left, 2));
				}
			}
		});
	}
}

function claim_sale(sale_slot){
	if(gamedata['sale_slots'][gamedata['current_location']] != undefined && gamedata['sale_slots'][gamedata['current_location']][sale_slot] != undefined && all_items[gamedata['sale_slots'][gamedata['current_location']][sale_slot]['item_id']] != undefined)
	{
		var sale_info = gamedata['sale_slots'][gamedata['current_location']][sale_slot];
		if(sale_info['done_time'] <= nowint())
		{
			var sale_value = all_items[sale_info['item_id']]['value'] * sale_info['amount'];
			gamedata['sale_slots'][gamedata['current_location']][sale_slot] = {
				item_id: 		'none',
				amount: 		0,
				done_time: 		0,
			};
			gain_item('coins',sale_value);
			show_content('current_location');
			var profit_text = parse_floating_text('+' + sale_value, 'rgba(255,255,0,1)');
			$('.sale_slots_title').append(profit_text);
			play_sound_group('money');
		}
	}
	else
	{
		show_content('current_location');
	}
}

function claim_craft_slot(sale_slot){
	if(gamedata['craft_slots'][gamedata['current_location']] != undefined && gamedata['craft_slots'][gamedata['current_location']][sale_slot] != undefined && all_recipes[gamedata['craft_slots'][gamedata['current_location']][sale_slot]['item_id']] != undefined)
	{
		var sale_info = gamedata['craft_slots'][gamedata['current_location']][sale_slot];
		if(sale_info['done_time'] <= nowint())
		{
			var recipe_info = all_recipes[sale_info['item_id']];
			gamedata['craft_slots'][gamedata['current_location']][sale_slot] = {
				item_id: 		'none',
				amount: 		0,
				done_time: 		0,
			};
			$.each(recipe_info['rewards'], function(item_id, item_amount){
				gain_item(item_id,item_amount);
			});
			show_content('current_location');
		}
	}
	else
	{
		show_content('current_location');
	}
}



function parse_workers(){
	var worker_count = 0;
	var location_info = all_locations[gamedata['current_location']];
	var max_workers = 0;
	var parsed_workers = '';
	parsed_workers += '<div class="workers_container">';
	parsed_workers += '<div class="workers_title">Workers</div>';
	if(gamedata['workers'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['workers'][gamedata['current_location']], function(worker_id, worker_amount){
			if(all_items[worker_id] != undefined && worker_amount > 0)
			{
				worker_count += worker_amount;
				parsed_workers += '<div class="worker" onclick="remove_worker(\'' + worker_id + '\')" style="background-image:url(images/' + all_items[worker_id]['image'] + ')">';
					parsed_workers += '<div class="worker_amount">' + worker_amount + '</div>';
					parsed_workers += '<div class="clickable_area"></div>';
				parsed_workers += '</div>';
			}
			max_workers += worker_amount;
		});
	}
	else
	{
		gamedata['workers'][gamedata['current_location']] = {
			none: 	location_info['workers']['starting_amount'],
		}
		max_workers = location_info['workers']['starting_amount'];
	}
	
	if(max_workers > worker_count)
	{
		parsed_workers += '<div class="worker" onclick="showing_picker=\'\';show_content(\'pick_worker\')">';
			parsed_workers += '<div class="worker_amount">+</div>';
			parsed_workers += '<div class="clickable_area"></div>';
		parsed_workers += '</div>';
	}
	//parsed_workers += '</div>';
	var slot_upgrade_cost = max_workers * max_workers * location_info['workers']['slot_cost'];
	var owned_coins = get_item_owned_amount('coins');
	//parsed_workers += '<div class="workers_container">';
	parsed_workers += 	'<div class="workers_expand_title">Slot cost:<br/><span style="color:' + get_percent_color(owned_coins, slot_upgrade_cost) + '">' + owned_coins + '</span> / ' + slot_upgrade_cost + ' coins</div>';
	if(owned_coins >= slot_upgrade_cost)
	{
		parsed_workers += 	'<button class="inline_button slim gold" onclick="buy_worker_slot()">Upgrade</button>';
	}
	parsed_workers += '</div>';
	return parsed_workers;
}

function remove_worker(worker_id){
	if(gamedata['workers'][gamedata['current_location']] != undefined && gamedata['workers'][gamedata['current_location']][worker_id] != undefined && gamedata['workers'][gamedata['current_location']][worker_id] > 0)
	{
		var old_sale_speed = 1 + (check_worker_effect('power_level') / base_woker_sales);
		var old_craft_speed = 1 + (check_worker_effect('power_level') / base_worker_crafting);
		gamedata['workers'][gamedata['current_location']][worker_id] -= 1;
		gamedata['workers'][gamedata['current_location']]['none'] += 1;
		var new_sale_speed = 1 + (check_worker_effect('power_level') / base_woker_sales);
		var new_craft_speed = 1 + (check_worker_effect('power_level') / base_worker_crafting);
		var sale_speed_correction = old_sale_speed / new_sale_speed;
		var craft_speed_correction = old_craft_speed / new_craft_speed;
		correct_all_sales(sale_speed_correction, craft_speed_correction);
		gain_item(worker_id, 1, true);
		show_content('current_location');
	}
}

function pick_worker(unit_id){
	if(gamedata['inventory'][unit_id] != undefined && gamedata['inventory'][unit_id] > 0)
	{
		var old_sale_speed = 1 + (check_worker_effect('power_level') / base_woker_sales);
		var old_craft_speed = 1 + (check_worker_effect('power_level') / base_worker_crafting);
		if(gamedata['workers'][gamedata['current_location']][unit_id] == undefined)
		{
			gamedata['workers'][gamedata['current_location']][unit_id] = 0;
		}
		gamedata['workers'][gamedata['current_location']]['none'] -= 1;
		gamedata['workers'][gamedata['current_location']][unit_id] += 1;
		var new_sale_speed = 1 + (check_worker_effect('power_level') / base_woker_sales);
		var new_craft_speed = 1 + (check_worker_effect('power_level') / base_worker_crafting);
		var sale_speed_correction = old_sale_speed / new_sale_speed;
		var craft_speed_correction = old_craft_speed / new_craft_speed;
		correct_all_sales(sale_speed_correction, craft_speed_correction);
		gain_item(unit_id, -1, true);
	}
	show_content('current_location');
}

function correct_all_sales(sale_speed_correction, craft_speed_correction){
	var now = nowint();
	if(gamedata['sale_slots'][gamedata['current_location']] != undefined)
	{
		
		$.each(gamedata['sale_slots'][gamedata['current_location']], function(sale_slot, sale_info){
			var time_left = sale_info['done_time'] - now;
			if(time_left > 0)
			{
				gamedata['sale_slots'][gamedata['current_location']][sale_slot]['done_time'] = now + (time_left * sale_speed_correction);
			}
		});
	}
	if(gamedata['craft_slots'][gamedata['current_location']] != undefined)
	{
		
		$.each(gamedata['craft_slots'][gamedata['current_location']], function(sale_slot, sale_info){
			var time_left = sale_info['done_time'] - now;
			if(time_left > 0)
			{
				gamedata['craft_slots'][gamedata['current_location']][sale_slot]['done_time'] = now + (time_left * craft_speed_correction);
			}
		});
	}
	
}

function check_worker_effect(stat){
	var total_stat = 0;
	if(gamedata['workers'] != undefined && gamedata['workers'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['workers'][gamedata['current_location']], function(unit_id, unit_amount){
			if(all_units[unit_id] != undefined && all_units[unit_id][stat] != undefined)
			{
				total_stat += all_units[unit_id][stat] * unit_amount;
			}
		});
	}
	return total_stat;
}

var picked_selling_item = '';
function pick_sale(item_id){
	picked_selling_item = item_id;
	selling_item_amount = 1;
	show_content('set_up_sale');
}

var selling_item_amount = 0;
function show_set_up_sale(){
	$('.set_up_sale_container').html('ding');
	if(all_items[picked_selling_item] != undefined)
	{
		var selling_item_info = all_items[picked_selling_item];
		var selling_owned = get_item_owned_amount(picked_selling_item);
		if(selling_item_amount > selling_owned){selling_item_amount = selling_owned;}
		if(selling_item_amount < 1){selling_item_amount = 1;}
		var parsed_sale_setup = '';
		var selling_speed = 1;
		selling_speed = 1 + (check_worker_effect('power_level') / base_woker_sales);
		parsed_sale_setup += 	'<div class="action_details_name">Selling</div>';
		parsed_sale_setup += 	parse_item(picked_selling_item, undefined, ('<span class="cost_amount">-' + (selling_item_amount) + '</span>'));
		parsed_sale_setup += 	'<div class="">';
		parsed_sale_setup += 		'<div class="action_details_name">Result</div>';

		parsed_sale_setup += 	parse_item('coins', undefined, ('<span class="reward_amount">+' + nFormatter((selling_item_info['value'] * selling_item_amount),1) + '</span>'));

		var sell_time = (selling_item_info['value'] * selling_item_amount * sale_time_per_value) / selling_speed;
		parsed_sale_setup += 		'<div class="activity_amount">' + seconds_to_time(Math.ceil(sell_time)) + '</div>';
		parsed_sale_setup += 		'<div class="square_button arrow_left_max_button" onclick="selling_item_amount=1;show_set_up_sale()">&nbsp;</div>';
		parsed_sale_setup += 		'<div class="square_button arrow_left_button" onclick="adjust_sell_slot_amount(-1)">&nbsp;</div>';
		parsed_sale_setup += 		'<div class="square_button arrow_right_button" onclick="adjust_sell_slot_amount(1)">&nbsp;</div>';
		parsed_sale_setup += 		'<div class="square_button arrow_right_max_button" onclick="selling_item_amount=' + selling_owned + ';show_set_up_sale()">&nbsp;</div>';
		if(selling_item_amount <= selling_owned)
		{
			parsed_sale_setup += 		'<div class="action_buttons_container"><button class="start_quest_button gold" onclick="start_sale()">Sell</button></div>';
		}
			
		parsed_sale_setup += 	'</div>';
		$('.set_up_sale_container').html(parsed_sale_setup);
	}
	else
	{
		show_content('current_location');
	}
}

function start_sale(){
	if(all_items[picked_selling_item] != undefined && gamedata['sale_slots'][gamedata['current_location']] != undefined)
	{
		var free_sale_slot = -1;
		$.each(gamedata['sale_slots'][gamedata['current_location']], function(sale_slot, sale_info){
			if(sale_info['item_id'] == 'none' && free_sale_slot == -1)
			{
				free_sale_slot = sale_slot;
			}
		});
		if(free_sale_slot > -1)
		{
			var selling_item_info = all_items[picked_selling_item];
			var selling_speed = 1;
			selling_speed = 1 + (check_worker_effect('power_level') / base_woker_sales);
			var sell_time = (selling_item_info['value'] * selling_item_amount * sale_time_per_value) / selling_speed;
			gamedata['sale_slots'][gamedata['current_location']][free_sale_slot] = {
				item_id: 		picked_selling_item,
				amount: 		selling_item_amount,
				done_time: 		nowint() + (sell_time * 1000),
			}
			gain_item(picked_selling_item, (selling_item_amount * -1), true);
		}
	}
	show_content('current_location');
}


function adjust_sell_slot_amount(amount){
	selling_item_amount += amount;
	if(selling_item_amount < 1)
	{
		selling_item_amount = 1;
	}
	show_set_up_sale();
}

function buy_worker_slot(){
	var location_info = all_locations[gamedata['current_location']];
	var max_workers = 0;
	if(gamedata['workers'][gamedata['current_location']] != undefined)
	{
		$.each(gamedata['workers'][gamedata['current_location']], function(worker_id, worker_amount){
			max_workers += worker_amount;
		});
	}
	else
	{
		gamedata['workers'][gamedata['current_location']] = {
			none: 	location_info['workers']['starting_amount'],
		}
		max_workers = location_info['workers']['starting_amount'];
	}
	var slot_upgrade_cost = max_workers * location_info['workers']['slot_cost'];
	var owned_coins = get_item_owned_amount('coins');
	if(owned_coins >= slot_upgrade_cost)
	{
		gamedata['workers'][gamedata['current_location']]['none'] += 1;
		gain_item('coins', slot_upgrade_cost * -1, true);
		show_current_location();
	}
}

function buy_sale_slot(){
	var location_info = all_locations[gamedata['current_location']];
	var max_workers = 0;
	if(gamedata['sale_slots'][gamedata['current_location']] != undefined)
	{
		max_workers = count_object(gamedata['sale_slots'][gamedata['current_location']]);
	}

	var slot_upgrade_cost = max_workers * location_info['sale_slots']['slot_cost'];
	var owned_coins = get_item_owned_amount('coins');
	if(owned_coins >= slot_upgrade_cost)
	{

		gamedata['sale_slots'][gamedata['current_location']][max_workers] = {
			item_id: 		'none',
			amount: 		0,
			done_time: 		0,
		};
		gain_item('coins', slot_upgrade_cost * -1, true);
		show_current_location();
	}
}

function buy_craft_slot(){
	var location_info = all_locations[gamedata['current_location']];
	var max_workers = 0;
	if(gamedata['craft_slots'][gamedata['current_location']] != undefined)
	{
		max_workers = count_object(gamedata['craft_slots'][gamedata['current_location']]);
	}

	var slot_upgrade_cost = max_workers * location_info['craft_slots']['slot_cost'];
	var owned_coins = get_item_owned_amount('coins');
	if(owned_coins >= slot_upgrade_cost)
	{

		gamedata['craft_slots'][gamedata['current_location']][max_workers] = {
			item_id: 		'none',
			amount: 		0,
			done_time: 		0,
		};
		gain_item('coins', slot_upgrade_cost * -1, true);
		show_current_location();
	}
}

current_pick_worker_page = 1;
function adjust_pick_worker_page(amount){
	current_pick_worker_page += amount;
	if(current_pick_worker_page < 1)
	{
		current_pick_worker_page = 1;
	}
	show_pick_worker();
}

function check_action_available(action_id, additional_requirements){
	var action_available = true;
	if(all_actions[action_id] != undefined)
	{
		if(all_actions[action_id]['type'] == 'quest' && gamedata['done_quests'][action_id] != undefined)
		{
			action_available = false;
		}
		if(action_available == true)
		{
			action_available = check_requirements(all_actions[action_id]['requirements']);
		}
		if(action_available == true && additional_requirements != undefined && typeof(additional_requirements) == 'object')
		{
			action_available = check_requirements(additional_requirements);
		}
	}
	else
	{
		action_available = false;
	}
	return action_available;
}

function check_requirements(requirements){
	var requirements_met = true;
	$.each(requirements, function(requirement_type, requirement_info){
		if(requirement_type == 'quests')
		{
			$.each(requirement_info, function(quest_id, quest_status){
				if(quest_status == 'done' && gamedata['done_quests'][quest_id] == undefined)
				{
					requirements_met = false;
				}
				if(quest_status == 'not_done' && gamedata['done_quests'][quest_id] != undefined)
				{
					requirements_met = false;
				}
				if(quest_status == 'accepted' && gamedata['busy_quests'][quest_id] == undefined && gamedata['done_quests'][quest_id] == undefined)
				{
					requirements_met = false;
				}
				if(quest_status == 'not_accepted' && (gamedata['busy_quests'][quest_id] != undefined || gamedata['done_quests'][quest_id] != undefined))
				{
					requirements_met = false;
				}
				if(quest_status == 'busy' && (gamedata['busy_quests'][quest_id] == undefined || gamedata['done_quests'][quest_id] != undefined))
				{
					requirements_met = false;
				}
			});
		}
		if(requirement_type == 'recipes')
		{
			$.each(requirement_info, function(recipe_id, recipe_known){
				if(gamedata['known_recipes'][recipe_id] == undefined && recipe_known == true)
				{
					requirements_met = false;
				}
				if(gamedata['known_recipes'][recipe_id] != undefined && recipe_known == false)
				{
					requirements_met = false;
				}
			});
		}
		if(requirement_type == 'items')
		{
			$.each(requirement_info, function(item_id, item_requirements){
				if(item_requirements['max_owned'] != undefined && get_item_owned_amount(item_id) >= item_requirements['max_owned'])
				{
					requirements_met = false;
				}
			});
		}
		if(requirement_type == 'location_have_actions')
		{
			$.each(requirement_info, function(location_id, useless_info){
				var available_action_count = count_visible_actions(location_id);
				if(available_action_count < 1)
				{
					requirements_met = false;
				}
			});
		}
	});
	return requirements_met;
}

function count_visible_actions(location_id){
	var visible_action_count = 0;
	if(all_locations[location_id] != undefined)
	{
		var location_info = all_locations[location_id];
		$.each(location_info['actions'], function(action_id, requirements){
			if(check_action_available(action_id, requirements) == true)
			{
				visible_action_count++;
			}
		});
		$.each(all_locations, function(temp_location_id, temp_location_info){
			if(temp_location_info['parent_location'] != undefined && temp_location_info['parent_location'] == location_id && check_requirements(temp_location_info['requirements']))
			{
				visible_action_count++;
			}
		});
		if(location_info['sale_slots'] != undefined && check_requirements(location_info['sale_slots']['requirements']))
		{
			visible_action_count++;
		}
		if(location_info['workers'] != undefined && check_requirements(location_info['workers']['requirements']))
		{
			visible_action_count++;
		}
	}
	return visible_action_count;
}

function parse_action_bar(action_id){
	var parsed_action = '';
	if(all_actions[action_id] != undefined)
	{
		var action_info = all_actions[action_id];
		parsed_action += '<div class="action_bar action_bar_' + action_info['type'] + '">';
		if(action_info['type'] != 'trade')
		{
			parsed_action += 	'<div class="action_bar_image" style="background-image:url(images/' + action_info['image'] + ')"></div>';
			parsed_action += 	'<div class="action_bar_name">' + capitalizeFirstLetter(action_info['name']) + '</div>';
		}
		if(action_info['type'] == 'combat')
		{
			parsed_action += 	'<div class="action_bar_button square_button ' + action_info['type'] + '_button" onclick="start_action(\'' + action_id + '\')">&nbsp;</div>';
		}
		if(action_info['type'] == 'quest')
		{
			if(gamedata['busy_quests'][action_id] == undefined && gamedata['complete_quests'][action_id] == undefined)
			{
				parsed_action += 	'<div class="action_bar_button square_button ' + action_info['type'] + '_button gold_button yellow" onclick="view_action(\'' + action_id + '\')">!</div>';
			}
			var quest_completed = check_quest_complete(action_id);
			if(gamedata['busy_quests'][action_id] != undefined && quest_completed == false)
			{
				parsed_action += 	'<div class="action_bar_button square_button ' + action_info['type'] + '_button gray_button" onclick="view_action(\'' + action_id + '\')">?</div>';
			}
			if(gamedata['busy_quests'][action_id] != undefined && quest_completed == true)
			{
				parsed_action += 	'<div class="action_bar_button square_button ' + action_info['type'] + '_button gold_button yellow" onclick="view_action(\'' + action_id + '\')">?</div>';
			}
		}
		if(action_info['type'] == 'trade')
		{
			var can_trade = true;
			$.each(action_info['cost'], function(item_id, item_amount){
				parsed_action += 	parse_item(item_id, undefined, ('<span class="cost_amount">-' + nFormatter(item_amount,3) + '</span>'));
				if(get_item_owned_amount(item_id) < item_amount)
				{
					can_trade = false;
				}
			});

			parsed_action += 		'<div class="square_button arrow_right_button">&nbsp;</div>';
			var total_rewards = 0;
			$.each(action_info['rewards'], function(item_id, item_amount){
				if(all_items[item_id]['recipe'] != undefined && gamedata['known_recipes'][all_items[item_id]['recipe']] != undefined){

				}
				else
				{
					total_rewards++;
					parsed_action += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + nFormatter(item_amount,3) + '</span>'));
				}
				
			});
			if(can_trade == true)
			{
				parsed_action += 	'<div class="action_bar_button square_button ' + action_info['type'] + '_button" onclick="start_action(\'' + action_id + '\')">&nbsp;</div>';
			}
		}
		if(action_info['type'] == 'activity' || action_info['type'] == 'catch')
		{
			parsed_action += 	'<div class="action_bar_button square_button ' + action_info['type'] + '_button" onclick="view_action(\'' + action_id + '\')">&nbsp;</div>';
		}
		parsed_action += '</div>';
		if(action_info['type'] == 'trade' && total_rewards == 0)
		{
			parsed_action = '';
		}

	}
	return parsed_action;
}

function parse_location_bar(location_id, back_button){
	var parsed_action = '';
	if(all_locations[location_id] != undefined)
	{
		var location_info = all_locations[location_id];
		/*var quests_complete = '';
		$.each(location_info['actions'], function(action_id, useless_info){
			if(check_quest_complete(action_id))
			{
				quests_complete = '!';
			}
		});*/
		var updown = 'down';
		if(back_button != undefined && back_button == true)
		{
			updown = 'up';
		}
		var quests_complete = get_quest_complete_icon(location_id, '', updown, [gamedata['current_location']]);
		if(quests_complete == '!')
		{
			quests_complete = '<div class="quest_indicator">!</div>';
		}
		if(quests_complete == '-?')
		{
			quests_complete = '<div class="quest_indicator incomplete">?</div>';
		}
		if(quests_complete == '?')
		{
			quests_complete = '<div class="quest_indicator">?</div>';
		}
		if(quests_complete == 'c')
		{
			quests_complete = '<div class="quest_indicator coins_button">&nbsp;</div>';
		}
		parsed_action += '<div class="action_bar back_button_' + back_button + '" onclick="play_sound_group(\'click\');set_current_location(\'' + location_id + '\');show_content(\'current_location\')">';
		parsed_action += 	'<div class="action_bar_image" style="background-image:url(images/' + location_info['image'] + ')">' + quests_complete + '</div>';
		parsed_action += 	'<div class="action_bar_name">' + capitalizeFirstLetter(location_info['name']) + '</div>';
		if(back_button == undefined || back_button == false)
		{
			parsed_action += 	'<div class="action_bar_button square_button arrow_right_button"></div>';
		}
		else
		{
			/*parsed_action += 	'<div class="action_bar_button square_button arrow_left_button"></div>';*/
		}
		parsed_action += '</div>';
	}
	return parsed_action;
}

function parse_map_location_button(location_id, position, updown, origin_id){
	var parsed_action = '';
	if(all_locations[location_id] != undefined && position['col'] != undefined && position['row'] != undefined)
	{
		var location_info = all_locations[location_id];
		var quests_complete = get_quest_complete_icon(location_id, '', updown, [origin_id]);
		if(quests_complete == '!')
		{
			quests_complete = '<div class="quest_indicator">!</div>';
		}
		if(quests_complete == '-?')
		{
			quests_complete = '<div class="quest_indicator incomplete">?</div>';
		}
		if(quests_complete == '?')
		{
			quests_complete = '<div class="quest_indicator">?</div>';
		}
		if(quests_complete == 'c')
		{
			quests_complete = '<div class="quest_indicator coins_button">&nbsp;</div>';
		}
		parsed_action += '<div class="map_button col_' + position['col'] + ' row_' + position['row'] + '" onclick="play_sound_group(\'click\');set_current_location(\'' + location_id + '\');show_content(\'current_location\')">';
		parsed_action += 	'<div class="map_button_image" style="background-image:url(images/' + location_info['image'] + ')">' + quests_complete + '</div>';
		parsed_action += '</div>';
	}
	return parsed_action;
}

function parse_map_action_button(action_id, position, spawned_id, fade_in){
	var parsed_action = '';
	if(all_actions[action_id] != undefined && position['col'] != undefined && position['row'] != undefined)
	{
		var action_info = all_actions[action_id];
		var action_type_indicator = '';
		if(action_info['type'] == 'combat' && action_info['show_icon'] == undefined)
		{
			action_type_indicator = '<div class="quest_indicator combat_button">&nbsp;</div>';
			
		}
		if(action_info['show_icon'] != undefined)
		{
			if(action_info['show_icon'] != 'quest')
			{
				action_type_indicator = '<div class="quest_indicator ' + action_info['show_icon'] + '_button">&nbsp;</div>';
			}
			else
			{
				if(check_quest_complete(action_id))
				{
					action_type_indicator = '<div class="quest_indicator ' + action_info['show_icon'] + '_button">?</div>';
				}
				else
				{
					if(gamedata['busy_quests'][action_id] != undefined)
					{
						action_type_indicator = '<div class="quest_indicator incomplete ' + action_info['show_icon'] + '_button">?</div>';
					}
				}
				if(check_quest_can_start(action_id))
				{
					action_type_indicator = '<div class="quest_indicator ' + action_info['show_icon'] + '_button">!</div>';
				}
			}
		}
		if(action_info['type'] == 'combat')
		{
			parsed_action += '<div class="map_button fade_in_' + fade_in + ' col_' + position['col'] + ' row_' + position['row'] + '" onclick="play_sound_group(\'click\');start_action(\'' + action_id + '\');delete_spawn(\'' + spawned_id + '\')">';
		}
		else
		{
			parsed_action += '<div class="map_button fade_in_' + fade_in + ' col_' + position['col'] + ' row_' + position['row'] + '" onclick="play_sound_group(\'click\');view_action(\'' + action_id + '\');">';
		}
		parsed_action += 	'<div class="map_button_image map_button_type_' + action_info['show_icon'] + '" style="background-image:url(images/' + action_info['image'] + ')">' + action_type_indicator + '</div>';
		parsed_action += '</div>';
	}
	return parsed_action;
}

function parse_map_decoration(decoration_info){
	var parsed_decoration = '';
	parsed_decoration += '<div class="map_button decoration col_' + decoration_info['col'] + ' row_' + decoration_info['row'] + '">';
	parsed_decoration += 	'<div class="map_button_image" style="background-image:url(images/' + decoration_info['image'] + ')"></div>';
	parsed_decoration += '</div>';
	return parsed_decoration;
}

function delete_spawn(spawn_id){
	if(gamedata['spawns'] == undefined){gamedata['spawns'] = {};}
	if(gamedata['spawns'][gamedata['current_location']] == undefined){gamedata['spawns'][gamedata['current_location']] = {};}
	delete gamedata['spawns'][gamedata['current_location']][spawn_id];
}

function get_quest_complete_icon(location_id, quests_complete, updown, not_these){
	if(not_these == undefined){not_these = [location_id];}
	var next_not_these_key = get_highest_key_in_object(not_these) + 1;
	not_these[next_not_these_key] = location_id;
	if(quests_complete == undefined){quests_complete = '';}
	if(all_locations[location_id] != undefined && check_requirements(all_locations[location_id]['requirements']))
	{
		var location_info = all_locations[location_id];
		$.each(location_info['actions'], function(action_id, additional_requirements){
			if(check_action_available(action_id, additional_requirements))
			{
				if(check_quest_complete(action_id))
				{
					quests_complete = '?';
				}
				else
				{
					if(gamedata['busy_quests'][action_id] != undefined && quests_complete == '')
					{
						quests_complete = '-?';
					}
				}
			}
			if(check_action_available(action_id, additional_requirements) && (quests_complete == '' || quests_complete == '-?') && check_quest_can_start(action_id))
			{
				quests_complete = '!';
			}
		});
		if(quests_complete == '' || quests_complete == '-?')
		{
			var now = nowint();
			$.each(gamedata['sale_slots'], function(sales_location, sales){
				if(sales_location == location_id)
				{
					$.each(sales, function(sales_id, sales_info){
						if(sales_info['item_id'] != 'none' && sales_info['done_time'] < now)
						{
							quests_complete = 'c';
						}
					});
				}
			});
			$.each(gamedata['craft_slots'], function(sales_location, sales){
				if(sales_location == location_id)
				{
					$.each(sales, function(sales_id, sales_info){
						if(sales_info['item_id'] != 'none' && sales_info['done_time'] < now)
						{
							quests_complete = 'c';
						}
					});
				}
			});
		}
		if(updown == 'down' || not_these != undefined)
		{
			$.each(all_locations, function(next_location_id, next_location_info){
				if(next_location_info['parent_location'] == location_id && match_array_values(next_location_id, not_these) == false)
				{
					quests_complete = get_quest_complete_icon(next_location_id, quests_complete, updown, not_these);
				}
			});
		}
		if(updown == 'up' || not_these != undefined)
		{
			if(location_info['parent_location'] != undefined && match_array_values(location_info['parent_location'], not_these) == false)
			{
				quests_complete = get_quest_complete_icon(location_info['parent_location'], quests_complete, updown, not_these);
			}
		}
	}
	
	return quests_complete;
}

var showing_picker = '';
function show_pick_sale(){
	showing_picker = 'sales';
	show_content('pick_worker');
}

function show_pick_worker(){
	$('.pick_worker_container').html('');
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(current_inventory_page < 1){current_inventory_page = 1;}

	gamedata['inventory'] = sortObj(gamedata['inventory']);

	var inventory_window_width = $('.pick_worker_container').width();
	var inventory_window_height = $('.pick_worker_container').height();
	var item_width = 105;
	var inventory_h = Math.floor(inventory_window_width / item_width);

	var inventory_v = Math.floor(inventory_window_height / 108);

	var visible_inventory = inventory_h * inventory_v;
	if(visible_inventory < 1){visible_inventory = 1;}
	var inventory_shown = 0;
	if(gamedata['inventory'] != undefined)
	{
		//gamedata['inventory'] = sortObj(gamedata['inventory']);

		$.each(all_items, function(item_id, item_info){
			var can_show_item = true;
			if(gamedata['inventory'][item_id] < 1 && item_info['recipe'] != undefined)
			{
				can_show_item = false;
			}
			if(showing_picker == '' && (item_info['unit'] == undefined || match_array_values(all_locations[gamedata['current_location']]['workers']['possible_workers'], all_units[item_id]['subtypes']) == false))
			{
				can_show_item = false;
			}
			if(showing_picker == 'sales' && (item_info['sell_types'] == undefined || match_array_values(all_locations[gamedata['current_location']]['sale_slots']['possible_sales'], item_info['sell_types']) == false))
			{
				can_show_item = false;
			}
			
			if(can_show_item == true && gamedata['inventory'][item_id] >= 0)
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var this_locked = undefined;
					var parsed_item = parse_item(item_id,undefined,undefined,this_locked);
					if(showing_picker == 'sales')
					{
						$('.pick_worker_container').append('<span onclick="pick_sale(\'' + item_id + '\')">' + parsed_item + '</span>');
					}
					else
					{
						$('.pick_worker_container').append('<span onclick="pick_worker(\'' + item_id + '\')">' + parsed_item + '</span>');
					}
				}
			}
		});
	}
	else
	{
		$('.pick_worker_container').html('<div class="no_inventory_text">No suitable workers at this time</div>');
	}

	var max_inventory_page = Math.ceil(inventory_shown / visible_inventory);

	if(inventory_shown > visible_inventory * current_inventory_page)
	{
		$('.page_further').html('>');
	}
	else
	{
		$('.page_further').html('');
	}

	if(current_inventory_page == 1)
	{
		$('.page_back').html('');
	}
	else
	{
		$('.page_back').html('<');
	}

	$('.page_number').html(current_inventory_page + ' / ' + max_inventory_page);

	if(current_inventory_page > max_inventory_page && current_inventory_page != 1){
		current_inventory_page  = max_inventory_page;
		show_pick_worker();
	}
}