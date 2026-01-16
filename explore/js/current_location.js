function set_new_location(location_id){
	if(all_available_locations[location_id] != undefined)
	{
		var location_info = all_available_locations[location_id];
		var max_expeditions = get_max_expeditions();
		if(gamedata['expeditions'] == undefined){gamedata['expeditions'] = max_expeditions;}
		if(location_info['expeditions_cost'] == undefined){location_info['expeditions_cost'] = 0;}
		if(gamedata['expeditions'] >= location_info['expeditions_cost'])
		{
			gamedata['expeditions'] -= location_info['expeditions_cost'];
			set_location(location_id);
			show_content('current_location');
		}
	}
}

function set_location(location_id, forced){
	if(forced == undefined || forced == false)
	{
		//gamedata['energy'] = get_max_energy();
		update_energy();
	}
	if(gamedata['current_location'] == undefined || gamedata['current_location']['location_id'] != location_id || (forced != undefined && forced == true))
	{
		gamedata['current_location'] = {};
		if(all_available_locations[location_id] != undefined)
		{
			gamedata['current_location']['location_id'] = location_id;
			gamedata['current_location']['actions'] = {};
			var empty_slots = {};
			for (var x = 1; x <= 5; x++) {
				for (var y = 1; y <= 5; y++) {
					empty_slots[x + '_' + y] = {
						x: x,
						y: y
					}
				}
			}
			eachoa(all_available_locations[location_id]['local_actions'], function(action_id, action_chances){
				if(Math.random() * 100 <= action_chances['chance'] || true)
				{
					var action_amount = round_by_percent((Math.random() * (action_chances['max'] - action_chances['min'])) + action_chances['min']);
					var action_info = all_available_actions[action_id];
					for (var z = 1; z <= action_amount; z++) {
						if(count_object(empty_slots) > 5 && Math.random() * 100 <= action_chances['chance'])
						{
							var chosen_slot_id = get_random_key_from_object(empty_slots);
							var chosen_slot = {x:empty_slots[chosen_slot_id]['x'],y:empty_slots[chosen_slot_id]['y']};
							delete empty_slots[chosen_slot_id];
							var current_action_amount = round_by_percent((Math.random() * (action_info['max_action_amount'] - action_info['min_action_amount'])) + action_info['min_action_amount']);
							gamedata['current_location']['actions'][chosen_slot_id] = {
								action_id: 				action_id,
								max_action_amount: 		current_action_amount,
								current_action_amount: 	current_action_amount,
								x: 						chosen_slot['x'],
								y: 						chosen_slot['y'],
							}
						}
					}
				}
			});
		}
	}
}

function reset_location(){
	set_location(gamedata['current_location']['location_id'], true);
}

function show_current_location(fade_in){
	if(fade_in == undefined){fade_in = false;}
	if(gamedata['current_location'] != undefined && gamedata['current_location']['location_id'] != undefined && all_available_locations[gamedata['current_location']['location_id']] != undefined && gamedata['current_location']['actions'] != undefined)
	{
		var parsed_current_location = '';
		eachoa(gamedata['current_location']['actions'], function(current_action_id, current_action_info){
			parsed_current_location += parse_current_action(current_action_id, current_action_info, fade_in);
		});
		class_style('current_location_bg','backgroundImage','url(\'images/' + all_available_locations[gamedata['current_location']['location_id']]['image'] + '\')')
		class_html('current_location_container', parsed_current_location);
		update_inventory_counter();
		update_energy();
		if(parsed_current_location == '')
		{
			set_location(gamedata['current_location']['location_id'], true);
			show_current_location(true);
		}
	}
}

function parse_current_action(current_action_id, current_action_info, fade_in){
	if(fade_in == undefined){fade_in = false;}
	var action_info = all_available_actions[current_action_info['action_id']];
	var parsed_current_action = '';
	if(current_action_info['current_action_amount'] > 0)
	{
		var action_energy_cost = 1;
		if(action_info['energy_cost'] != undefined){action_energy_cost = action_info['energy_cost'];}
		parsed_current_action += '<div class="current_action_button fade_in_' + fade_in + ' current_action_button_' + current_action_id + ' action_x_' + current_action_info['x'] + ' action_y_' + current_action_info['y'] + '" style="background-image:url(\'images/' + action_info['image'] + '\')"">';
		parsed_current_action += 	'<div class="actions_energy_cost"><div class="action_cost_icon"></div><span class="action_energy_cost_text">' + action_energy_cost + '</span></div>';
		parsed_current_action += 	'<div class="actions_left_bar_container">';
		//var action_bar_width = (current_action_info['current_action_amount'] / current_action_info['max_action_amount']) * 100;
		var action_bar_width = 100 / current_action_info['max_action_amount'];
		for (var i = 0; i < current_action_info['current_action_amount']; i++) {
			parsed_current_action += 		'<div class="actions_left_bar actions_left_bar_' + i + '" style="width:' + action_bar_width + '%"></div>';
		}
		//parsed_current_action += 		'<div class="actions_left_bar" style="width:' + action_bar_width + '%"></div>';
		parsed_current_action += 	'</div>';
		parsed_current_action += '</div>';
		parsed_current_action += '<div class="current_action_button_overlay current_action_button_' + current_action_id + ' action_x_' + current_action_info['x'] + ' action_y_' + current_action_info['y'] + '" onclick="perform_action(\'' + current_action_id + '\');"></div>';
	}
	return parsed_current_action;
}

var loot_count = 0;
var loot_timers = {};

function perform_action(current_action_id){
	if(get_inventory_space_left() > 0 && gamedata['energy'] >= 1 && gamedata['current_location'] != undefined && gamedata['current_location']['location_id'] != undefined && all_available_locations[gamedata['current_location']['location_id']] != undefined && gamedata['current_location']['actions'][current_action_id] != undefined)
	{
		var current_action_info = gamedata['current_location']['actions'][current_action_id];
		var action_id = current_action_info['action_id'];
		var action_info = all_available_actions[action_id];
		var action_energy_cost = 1;
		if(action_info['energy_cost'] != undefined){action_energy_cost = action_info['energy_cost'];}
		if(current_action_info['current_action_amount'] > 0 && gamedata['energy'] >= action_energy_cost)
		{
			current_action_info['current_action_amount'] -= 1;
			var chosen_loot = false;
			var gained_amount = 1;
			if(current_action_info['current_action_amount'] > 0)
			{
				eachoa(action_info['action_loot'], function(loot_id, loot_chance){
					if(chosen_loot == false && Math.random() * 100 < loot_chance)
					{
						chosen_loot = loot_id;
					}
				});
			}
			else
			{
				chosen_loot = get_random_key_from_object_based_on_num_value(action_info['final_loot']);
				if(action_info['final_loot'][chosen_loot] > 1)
				{
					gained_amount = action_info['final_loot'][chosen_loot];
				}
			}
			eachoa(action_info['subtypes'], function(useless_key, subtype){
				gained_amount = get_building_bonus(subtype,gained_amount);
			});
			gained_amount = round_by_percent(gained_amount);
			if(chosen_loot != false && gained_amount > 0)
			{
				var added_to_inventory = gain_inventory_item(chosen_loot, gained_amount);
				update_inventory_counter();
				if(added_to_inventory == true)
				{
					loot_count++;
					var current_loot_count = loot_count + 0;
					var parsed_gained_amount = '';
					if(gained_amount > 1)
					{
						parsed_gained_amount = '<div class="gained_amount">' + gained_amount + '</div>';
					}
					var parsed_gained_item = '<div class="action_item action_item_' + current_loot_count + ' action_x_' + current_action_info['x'] + ' action_y_' + current_action_info['y'] + '" style="background-image:url(\'images/' + all_available_items[chosen_loot]['image'] + '\')">' + parsed_gained_amount + '</div>';
					
					loot_timers[current_loot_count] = setTimeout(function(){
						class_add_class('action_item_' + current_loot_count, 'done');
						loot_timers[current_loot_count] = setTimeout(function(){
							class_delete('action_item_' + current_loot_count);
							clearTimeout(loot_timers[current_loot_count]);
							delete loot_timers[current_loot_count];
						},1000);
					},500);
					class_html_append('current_action_button.current_action_button_' + current_action_id, parsed_gained_item);
				}
			}
			//var action_bar_width = (current_action_info['current_action_amount'] / current_action_info['max_action_amount']) * 100;
			//class_style('current_action_button_' + current_action_id + ' .actions_left_bar', 'width', action_bar_width + '%');
			class_add_class('current_action_button_' + current_action_id + ' .actions_left_bar_' + current_action_info['current_action_amount'], 'done');
			if(current_action_info['current_action_amount'] == 0)
			{
				class_add_class('current_action_button_' + current_action_id, 'done');
				delete gamedata['current_location']['actions'][current_action_id];
			}
		
			gamedata['energy'] -= action_energy_cost;
			update_energy();
			if(count_object(gamedata['current_location']['actions']) == 0)
			{
				set_location(gamedata['current_location']['location_id'], true);
				show_current_location(true);
			}
		}
	}
}