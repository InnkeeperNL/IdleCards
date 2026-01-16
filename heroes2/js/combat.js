var combat_units = {};
var combat_round = 0;
var combat_wave = 1;
var combat_alive = false;
var combat_ended = false;
var combat_timeouts = {};
var combat_timeout_couter = 0;
var consumable_cooldowns = {};
var player_target = {};

function show_combat(){
	$('.menu_container').hide();
}

function reset_combat(){
	// ################################# RESET VALUES
	clear_combat_timeouts();
	combat_units = {};
	combat_round = 0;
	combat_wave = 1;
	combat_alive = false;
	combat_ended = false;
	spawning_next = false;
	consumable_cooldowns = {1:0,2:0,3:0};
	gamedata['last_consumable'] = 0;
	player_target = {col:2,row:2};
	$('#content_combat').html('');

	check_window_orientation();

	// ################################# PLACE BASIC ELEMENTS
	var all_combat_elements = '';
	for (var col = 1; col <= 3; col++) {
		for (var row = 1; row <= 5; row++) {
			var parsed_cell = '';
			parsed_cell += '<div class="cell col_' + col + ' row_' + row + ' cell_bg"></div>';
			parsed_cell += '<div class="cell col_' + col + ' row_' + row + ' cell_area" onclick="set_player_target(' + col + ',' + row + ')"></div>';
			all_combat_elements += parsed_cell;
		};
		var ability_button = '';
		ability_button += '<div class="ability_button col_' + col + ' cell_area" onclick="use_consumable(' + col + ')">';
		ability_button += '</div>';
		all_combat_elements += ability_button;
	};
	all_combat_elements += '<div class="end_combat_button" onclick="end_combat();">Flee</div>';
	all_combat_elements += '<div class="player_target col_2 row_2 cell"></div>';

	$('#content_combat').html(all_combat_elements);
	place_player();
}

function set_player_target(col, row){
	$('.player_target').removeClass('col_' + player_target['col']);
	$('.player_target').removeClass('row_' + player_target['row']);
	player_target['col'] = col;
	player_target['row'] = row;
	$('.player_target').addClass('col_' + player_target['col']);
	$('.player_target').addClass('row_' + player_target['row']);
}

function place_player(){
	var player_image = 'units/arabic-1615262_640.jpg';
	if(gamedata['player_image'] != undefined)
	{
		player_image = gamedata['player_image'];
	}

	var player_level_effect = get_level_effect(gamedata['player_level']);

	var player_unit = {
		id: 		'player',
		side: 		1,
		name: 		'player',
		image: 		player_image,
		level: 		gamedata['player_level'],
		subtypes: 	['creature','hero'],
		strength: 	10,
		intellect: 	10,
		armor: 		0,
		dodge: 		0,
		max_hp: 	50,
		big: 		true,
		col: 		2,
		row: 		4,
		aggro: 		10,
		base_aggro: 10,
		automated: 	false,
		ready_at: 	nowint() + starting_cooldown,
		abilities:{
			/*attack: {chance: 100, ready_at: 	nowint(),},*/
		}
	}
	/*$.each(gamedata['equipped_abilities'], function(ability_slot, ability_id){
		if(ability_id != false && all_abilities[ability_id]['passive'] != undefined && all_abilities[ability_id]['passive'] == true)
		{
			player_unit['abilities'][ability_id] = {chance: 100, ready_at: 	nowint(),};
		}
	});*/
	$.each(gamedata['equipped_gear'], function(slot_id, gear_id){
		if(all_items[gear_id] != undefined && all_items[gear_id]['slots'] != undefined && all_items[gear_id]['slots'][slot_id] == true)
		{
			$.each(all_items[gear_id]['stats'], function(stat_id, stat_value){
				if(player_unit[stat_id] == undefined)
				{
					player_unit[stat_id] = stat_value;
				}
				else
				{
					player_unit[stat_id] += stat_value;
				}
			});
		}

	});
	player_unit['strength'] *= player_level_effect;
	player_unit['intellect'] *= player_level_effect;
	player_unit['max_hp'] *= player_level_effect;

	player_unit['hp'] = player_unit['max_hp'] + 0; 
	var new_unit_key = get_highest_key_in_object(combat_units) + 1;
	player_unit['key'] = new_unit_key;
	combat_units[new_unit_key] = player_unit;
	var parsed_unit = parse_unit(player_unit);
	$('#content_combat').append(parsed_unit);
	$.each(gamedata['equipped_units'], function(slot_key, unit_id){
		if(unit_id != false)
		{
			if(slot_key == 1){spawn_unit(unit_id, 1,{col:1,row:4});}
			if(slot_key == 2){spawn_unit(unit_id, 1,{col:3,row:4});}
			if(slot_key == 3){spawn_unit(unit_id, 1,{col:1,row:5});}
			if(slot_key == 4){spawn_unit(unit_id, 1,{col:3,row:5});}
		}
	});
	//spawn_unit('shaman', 1);

	$.each(gamedata['consumables'], function(consumable_slot, consumable_id){
		var is_passive = false;
		if(consumable_id != false && all_abilities[consumable_id] != undefined && all_abilities[consumable_id]['passive'] != undefined && all_abilities[consumable_id]['passive'] == true)
		{
			player_unit['abilities'][consumable_id] = {chance: 100, ready_at: 	nowint(),};
			delete consumable_cooldowns[consumable_slot];
			is_passive = true;
		}
		place_consumable(consumable_slot, is_passive);
	});
}

function get_level_effect(level){
	return  0 + to_the_nth(1, level - 1, 1.1);
}

function place_consumable(consumable_slot, passive){
	var consumable_id = gamedata['consumables'][consumable_slot];
	if(consumable_id != false && all_items[consumable_id] != undefined)
	{
		var ability_button = '';
		ability_button += '<div class="ability_button equipped_item col_' + consumable_slot + ' no_cooldown passive_' + passive + '">';
		ability_button += 	'<div class="bg" style="background-image:url(images/' + all_items[consumable_id]['image'] + ')"></div>';
		if(all_items[consumable_id]['consumable'] == true)
		{
			ability_button += 	'<div class="consumables_amount">' + get_item_owned_amount(consumable_id) + '</div>';
		}
		ability_button += 	'<div class="consumables_cooldown"></div>';
		ability_button += '</div>';
		$('#content_combat').append(ability_button);
	}
}

function use_consumable(consumable_slot){
	if(gamedata['last_consumable'] == undefined)
	{
		gamedata['last_consumable'] = 0;
	}
	if((consumable_cooldowns[consumable_slot] == undefined || consumable_cooldowns[consumable_slot] < nowint()) && gamedata['last_consumable'] < nowint() - global_cooldown && gamedata['consumables'][consumable_slot] != false && all_items[gamedata['consumables'][consumable_slot]] != undefined)
	{
		check_ability_cooldowns();
		var item_to_use = gamedata['consumables'][consumable_slot];
		if(all_items[item_to_use]['consumable'] == true && gamedata['inventory'][item_to_use] != undefined && gamedata['inventory'][item_to_use] > 0)
		{
			performed = false;
			if(all_items[item_to_use]['ability'] != undefined && all_abilities[all_items[item_to_use]['ability']] != undefined)
			{
				performed = perform_ability(1, all_items[item_to_use]['ability'], all_items[item_to_use]['fixed_effects'], true);
			}
			if(performed == true)
			{
				gamedata['inventory'][item_to_use] -= 1;
				gamedata['last_consumable'] = nowint();
				if(consumable_cooldowns[consumable_slot] == undefined)
				{
					consumable_cooldowns[consumable_slot] = 0;
				}
				consumable_cooldowns[consumable_slot] = nowint() + all_abilities[all_items[item_to_use]['ability']]['cooldown'];
				$('.euipped_item.col_' + consumable_slot + ' .consumables_amount').html(get_item_owned_amount(item_to_use));
				saveToLocalStorage();
			}

		}
		if(all_items[item_to_use]['is_ability'] == true)
		{
			performed = false;
			if(all_abilities[item_to_use] != undefined && (all_abilities[item_to_use]['passive'] == undefined || all_abilities[item_to_use]['passive'] == false))
			{
				performed = perform_ability(1, item_to_use, undefined, true);
			}
			if(performed == true)
			{
				//gamedata['inventory'][item_to_use] -= 1;
				gamedata['last_consumable'] = nowint();
				if(consumable_cooldowns[consumable_slot] == undefined)
				{
					consumable_cooldowns[consumable_slot] = 0;
				}
				consumable_cooldowns[consumable_slot] = nowint() + all_abilities[item_to_use]['cooldown'];
				//$('.euipped_item.col_' + consumable_slot + ' .consumables_amount').html(get_item_owned_amount(item_to_use));
				saveToLocalStorage();
			}

		}
	}
}

function parse_unit(unit){
	var parsed_unit = '';
	var big_unit = '';
	if(unit['big'] != undefined && unit['big'] == true)
	{
		big_unit = 'big_unit';
	}
	if(unit['small'] != undefined && unit['small'] == true)
	{
		big_unit += ' small_unit';
	}
	parsed_unit += '<div class="cell side_' + unit['side'] + ' col_' + unit['col'] + ' row_' + unit['row'] + ' unit ' + big_unit + ' unit_key_' + unit['key'] + '">';
	parsed_unit += 		'<div class="unit_bg bg" style="background-image:url(images/' + unit['image'] + ')"><div class="unit_effects"></div>';
	if(unit['id'] == 'player')
	{
		var xp_percent = get_player_xp_percent();
		parsed_unit += 		'<div class="unit_xp_container"><div class="unit_xp_percent" style="height:' + xp_percent + '%"></div></div>';
	}
	parsed_unit += 		'</div>';
	parsed_unit += 		'<div class="unit_level">' + unit['level'] + '</div>';
	parsed_unit += 		'<div class="unit_hp_container"><div class="unit_hp_percent"></div></div>';
	parsed_unit += '</div>';
	return parsed_unit;
}

function check_window_orientation(){
	var window_width = $('.main_window').width();
	var window_height = $('.main_window').height();
	if(window_height < window_width)
	{
		$('.main_window').addClass('landscape');
		$('.main_window').removeClass('portrait');
	}
	else
	{
		$('.main_window').removeClass('landscape');
		$('.main_window').addClass('portrait');
	}
}

$(window).resize(function(){
	check_window_orientation();
});

function end_combat(){
	clear_combat_timeouts();
	combat_alive = false;
	combat_ended = true;
	$('.menu_container').show();
	//$('.game_message').remove();
	show_content('current_location');
}

function clear_combat_timeouts(){
	$.each(combat_timeouts, function(timeout_id, useless_info){
		clearTimeout(combat_timeouts[timeout_id]);
		delete combat_timeouts[timeout_id];
	});
}

function spawn_units(units, side){
	var spawned_units = 0;
	$.each(units, function(unit_id, unit_amounts){
		var to_spawn_amount = round_by_percent(unit_amounts['min'] + (Math.random() * (unit_amounts['max'] - unit_amounts['min'])));
		if(to_spawn_amount == 0 && unit_amounts['min'] >= 1){to_spawn_amount = 1;}
		for (var spawned = 0; spawned < to_spawn_amount; spawned++) {
			if(spawned_units > 0)
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					spawn_unit(unit_id, side, undefined, unit_amounts['level']);
				},(spawned_units * 100));
			}
			else
			{
				spawn_unit(unit_id, side, undefined, unit_amounts['level']);
			}
			spawned_units++;
		};
	});
}

function spawn_unit(unit_id, side, forced_slot, level){
	if(all_units[unit_id] != undefined)
	{
		var unit_level = 1;
		if(all_locations[gamedata['current_location']] != undefined && all_locations[gamedata['current_location']]['level'] != undefined)
		{
			unit_level = all_locations[gamedata['current_location']]['level'];
		}
		if(level != undefined)
		{
			unit_level = level;
		}
		var unit = true_copyobject(all_units[unit_id]);
		if(side == 1)
		{
			unit_level = gamedata['player_level'];
			unit['max_hp'] 	*= 0.5;
		}
		var unit_level_effect = get_level_effect(unit_level);
		var slot;
		if(side == 2 && unit['favorite_rows'] != undefined)
		{
			slot = find_free_slot(side, unit['big'], unit['favorite_rows']);
		}
		if(slot == undefined)
		{
			slot = find_free_slot(side, unit['big']);
		}
		if(forced_slot != undefined){slot = forced_slot};
		if(slot != undefined)
		{
			unit['level'] 		= unit_level;
			unit['strength'] 	*= unit_level_effect;
			unit['intellect'] 	*= unit_level_effect;
			if(side == 1)
			{
				unit['max_hp'] 	*= 0.5;
			}
			unit['max_hp'] 		= Math.ceil(unit['max_hp'] * unit_level_effect);
			$.each(unit['abilities'], function(ability_id, ability_info){
				unit['abilities'][ability_id]['ready_at'] = nowint() + all_abilities[ability_id]['cooldown'] + (Math.random() * all_abilities[ability_id]['cooldown']);
				if(all_abilities[ability_id]['initial_cooldown'] != undefined)
				{
					unit['abilities'][ability_id]['ready_at'] = nowint() + all_abilities[ability_id]['initial_cooldown'] + (Math.random() * all_abilities[ability_id]['initial_cooldown']);
				}
			});
			unit['id'] = unit_id;
			unit['hp'] = unit['max_hp'] + 0;
			unit['side'] = side;
			unit['ready_at'] = nowint() + starting_cooldown + (Math.random() * starting_cooldown);
			unit['col'] = slot['col'];
			unit['row'] = slot['row'];
			unit['aggro'] = unit['base_aggro'];
			unit['automated'] = true;
			var new_unit_key = get_highest_key_in_object(combat_units) + 1;
			unit['key'] = new_unit_key;
			combat_units[new_unit_key] = unit;
			var parsed_unit = parse_unit(unit);
			$('#content_combat').append(parsed_unit);
		}
	}
	else
	{
		return false;
	}
}

function count_free_slots(side_string, side, big){
	var target_side = 1;
	if(side == 2 && side_string == 'ally')
	{
		target_side = 2;
	}
	if(side == 1 && side_string == 'enemy')
	{
		target_side = 2;
	}
	var possible_free_slots = find_all_free_slots(target_side, big);
	return count_object(possible_free_slots);
}

function find_all_free_slots(side, big, specific_rows){
	var min_row = 1;
	var max_row = 5;
	if(side == 1)
	{
		min_row = 4;
	}
	if(side == 2)
	{
		max_row = 3;
	}
	if(specific_rows != undefined && side == 2)
	{
		min_row = specific_rows['min'];
		max_row = specific_rows['max'];
	}
	var possible_free_slots = {};
	var free_slot_id = 0;
	for (var col = 1; col <= 3; col++) {
		for (var row = min_row; row <= max_row; row++) {
			var slot_free = true;
			$.each(combat_units, function(unit_id, unit_info){
				if(unit_info['col'] == col && unit_info['row'] == row && unit_info['hp'] > 0)
				{
					slot_free = false;
				}
				if(unit_info['col'] == col && unit_info['row'] == row-1 && unit_info['big'] != undefined && unit_info['big'] == true && unit_info['hp'] > 0)
				{
					slot_free = false;
				}
				if(unit_info['col'] == col && unit_info['row'] == row+1 && big != undefined && big == true && unit_info['hp'] > 0)
				{
					slot_free = false;
				}	
			});
			if(max_row == row && big != undefined && big == true)
			{
				slot_free = false;
			}
			if(slot_free == true)
			{
				possible_free_slots[free_slot_id] = {
					col: 	col,
					row: 	row
				}
				free_slot_id++;
			}
		}
	}
	return possible_free_slots;
}

function find_free_slot(side, big, specific_rows){
	var possible_free_slots = find_all_free_slots(side, big, specific_rows);
	var chosen_slot = get_random_key_from_object(possible_free_slots);
	return possible_free_slots[chosen_slot];
}

var spawning_next = false;
function resolve_combat(){
	var now = nowint();
	if(combat_alive == true)
	{
		var allies_alive = 0;
		var enemies_alive = 0;
		$.each(combat_units, function(unit_key, unit_info){
			if(unit_info['hp'] > 0)
			{
				if(unit_info['ready_at'] < now)
				{
					act_now(unit_key);
				}
				if(unit_info['side'] == 1)
				{
					allies_alive++;
				}
				if(unit_info['side'] == 2)
				{
					enemies_alive++;
				}
			}
		});
		resolve_buffs();
		if(allies_alive == 0 || enemies_alive == 0)
		{
			if(allies_alive > 0)
			{
				if(spawning_next == false)
				{
					spawning_next = true;
					//combat_alive = false;
					
					combat_timeout_couter++;
					combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
						if(combat_ended == false && combat_alive == true)
						{
							check_busy_quests('stage_cleared', last_started_action, combat_wave);
							combat_wave++;
							reset_allies();
							spawning_next = false;
							start_action(last_started_action, true);
							
						}
					},3000);
				}
			}
			else
			{
				combat_alive = false;
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					if(combat_ended == false)
					{
						end_combat();
					}
				},1000);
			}
		}
		check_ability_cooldowns();
	}
	
}

function check_ability_cooldowns(){
	var now = nowint();
	$.each(consumable_cooldowns, function(consumable_slot, consumable_cooldown){

		if(consumable_cooldown <= now && gamedata['inventory'][gamedata['consumables'][consumable_slot]] > 0 && gamedata['last_consumable'] < now - global_cooldown && combat_units[1] != undefined && combat_units[1]['hp'] > 0)
		{
			$('.ability_button.col_' + consumable_slot + ' .consumables_cooldown').html('');
			$('.ability_button.col_' + consumable_slot + ' .consumables_cooldown').css('height','100%');
			$('.ability_button.col_' + consumable_slot).addClass('no_cooldown');
		}
		else
		{
			var cooldown_left_text = '';
			var cooldown_left = consumable_cooldown - now;
			var global_cooldown_left = gamedata['last_consumable'] - now + global_cooldown;
			if(global_cooldown_left >= cooldown_left){cooldown_left = 0;}
			if(cooldown_left > 0)
			{
				cooldown_left_text = '<div class="current_cooldown">' + seconds_to_time(Math.floor(cooldown_left / 100) / 10) + '</div>';
				$('.ability_button.col_' + consumable_slot + ' .consumables_cooldown').css('height','100%');
				$('.ability_button.col_' + consumable_slot).addClass('no_cooldown');
			}
			else
			{
				var cooldown_height = ((global_cooldown_left / global_cooldown) * 100) - 0;
				if(cooldown_height <= 0){
					cooldown_height = 0;
					$('.ability_button.col_' + consumable_slot).addClass('no_cooldown');
				}
				$('.ability_button.col_' + consumable_slot + ' .consumables_cooldown').css('height', cooldown_height + '%');
			}

			$('.ability_button.col_' + consumable_slot + ' .consumables_cooldown').html(cooldown_left_text);
			$('.ability_button.col_' + consumable_slot).removeClass('no_cooldown');
		}
	});
}

function resolve_buffs(){
	var now = nowint();
	$.each(combat_units, function(unit_key, unit_info){
		if(unit_info['buffs'] != undefined)
		{
			$.each(unit_info['buffs'], function(buff_type, buff_group){
				$.each(buff_group, function(buff_id, buff_info){
					if(buff_info['next_tick'] <= now && buff_info['ticks_left'] > 0)
					{
						resolve_effect(undefined, unit_key, buff_info);
						buff_info['next_tick'] += (buff_info['tick_time']);
						buff_info['ticks_left']--;
					}
					if(buff_info['ticks_left'] <= 0)
					{
						delete unit_info['buffs'][buff_type][buff_id];
						update_unit_visual(unit_key);
					}
				});
			});
		}
	});
}

function reset_allies(){
	var now = nowint();
	$.each(combat_units, function(unit_id, unit_info){
		combat_units[unit_id]['aggro'] = 10;
		if(combat_units[unit_id]['base_aggro'] != undefined)
		{
			combat_units[unit_id]['aggro'] = combat_units[unit_id]['base_aggro'] + 0;
		}
		combat_units[unit_id]['ready_at'] = now + global_cooldown + (Math.random() * global_cooldown);
	});
}

function act_now(unit_id){
	var now = nowint();
	var current_unit = combat_units[unit_id];
	var has_acted = false;
	$.each(current_unit['abilities'], function(ability_id, ability_info){
		if(current_unit['ready_at'] < now && has_acted == false && ability_info['ready_at'] < now && ability_info['chance'] >= Math.random() * 100 && all_abilities[ability_id]['proc'] == 'basic')
		{
			if(perform_ability(unit_id, ability_id) == true)
			{
				has_acted = true;
				current_unit['ready_at'] = now + global_cooldown;
			}
		}
	});
}

function perform_ability(unit_id, ability_id, fixed_effects, use_plyer_target, origin_id){
	var performed = false;
	var ability_info = all_abilities[ability_id];
	var proc_amount = 1;
	if(ability_info['proc_amount'] != undefined){proc_amount = ability_info['proc_amount'];}
	for (var i = proc_amount - 1; i >= 0; i--) {
		var can_perform = true;
		can_perform = check_can_perform(unit_id, ability_id);
		if(can_perform == true && combat_units[unit_id] != undefined && (combat_units[unit_id]['hp'] > 0 || (ability_info['use_while_dead'] != undefined && ability_info['use_while_dead'] == true)))
		{
			var targets = find_targets(unit_id, ability_info, use_plyer_target, origin_id);
			$.each(targets, function(useless_key, target_id){
				$.each(ability_info['effects'], function(useless_effect_key, effect){
					var temp_effect = true_copyobject(effect);
					$.each(fixed_effects, function(fixed_effect_key, fixed_effect_info){
						temp_effect[fixed_effect_key] = (fixed_effect_info);
						//console.log(fixed_effect_key +  ' = ' + fixed_effect_info);
					});
					resolve_effect(unit_id, target_id, temp_effect);
				});
				performed = true;
			});
			if(performed == true && combat_units[unit_id]['abilities'][ability_id] != undefined)
			{
				combat_units[unit_id]['abilities'][ability_id]['ready_at'] = nowint() + ability_info['cooldown'] + (Math.random() * ability_info['cooldown']);
			}
		}
	}

	return performed;
}

function check_can_perform(unit_id, ability_id){
	var can_perform = true;
	if(combat_units[unit_id] != undefined && all_abilities[ability_id] != undefined)
	{
		var unit = combat_units[unit_id];
		var ability = all_abilities[ability_id];
		$.each(ability['perform_checks'], function(check_id, check_info){
			if(check_info['type'] == 'free_slots')
			{
				var free_slots = count_free_slots(check_info['side'], unit['side']);
				if(check_info['min'] != undefined && free_slots < check_info['min'])
				{
					can_perform = false;
				}
				if(check_info['max'] != undefined && free_slots > check_info['max'])
				{
					can_perform = false;
				}
			}
		});
	}
	else
	{
		can_perform = false;
	}

	return can_perform;
}

function find_targets(unit_id, ability_info, use_plyer_target, origin_id){
	var current_unit = combat_units[unit_id];
	if(ability_info['ignore_player_target'] != undefined && ability_info['ignore_player_target'] == true)
	{
		use_plyer_target = undefined;
	}

	var target_side = 1;
	if(current_unit['side'] == 2 && ability_info['target_side'] == 'ally')
	{
		target_side = 2;
	}
	if(current_unit['side'] == 1 && ability_info['target_side'] == 'enemy')
	{
		target_side = 2;
	}
	if(ability_info['target_side'] == 'any')
	{
		target_side = 0;
	}

	var all_possible_targets = {};
	var possible_target_key = 0;
	$.each(combat_units, function(unit_key, unit_info){
		if(unit_info['side'] == target_side || target_side == 0)
		{
			all_possible_targets[possible_target_key] = unit_key;
			possible_target_key++;
		}
	});

	// ################################### filter targets

	$.each(all_possible_targets, function(target_key, target_id){
		var target = combat_units[target_id];
		var delete_this = false;
		if(ability_info['min_target_hp'] != undefined && target['hp'] < ability_info['min_target_hp'])
		{
			delete_this = true;
		}
		if(ability_info['target_damaged'] != undefined && ability_info['target_damaged'] == true && target['hp'] >= target['max_hp'])
		{
			delete_this = true;
		}
		if(ability_info['target_damaged'] != undefined && ability_info['target_damaged'] == false && target['hp'] < target['max_hp'])
		{
			delete_this = true;
		}
		if(ability_info['target_self'] != undefined && ability_info['target_self'] == true && target_id != unit_id)
		{
			delete_this = true;
		}
		if(ability_info['target_self'] != undefined && ability_info['target_self'] == false && target_id == unit_id)
		{
			delete_this = true;
		}
		if(ability_info['target_not_types'] != undefined && match_array_values(ability_info['target_not_types'], target['subtypes']))
		{
			delete_this = true;
		}
		if(ability_info['target_types'] != undefined && match_array_values(ability_info['target_types'], target['subtypes']) == false)
		{
			delete_this = true;
		}
		if(ability_info['has_buff'] != undefined && (target['buffs'] == undefined || target['buffs'][ability_info['has_buff']] == undefined || count_object(target['buffs'][ability_info['has_buff']]) == 0))
		{
			delete_this = true;
		}
		if(ability_info['target_origin'] != undefined && ability_info['target_origin'] == true && origin_id != undefined && target_id != origin_id)
		{
			delete_this = true;
		}

		if(delete_this == true)
		{
			delete all_possible_targets[target_key];
		}
	});

	// ################################### filter done

	/*var targets_to_delete = count_object(all_possible_targets) - ability_info['target_amount'];

	for (var i =0; i < targets_to_delete; i++) {
		var target_to_delete = get_lowest_aggro_target(all_possible_targets);
		if(target_to_delete != -1)
		{
			delete all_possible_targets[target_to_delete];
		}
		//delete all_possible_targets[get_random_key_from_object(all_possible_targets)];
	};*/
	if(ability_info['preferred_targets'] != undefined && use_plyer_target == undefined)
	{
		$.each(ability_info['preferred_targets'], function(prefer_id, prefer_info)
		{
			if(prefer_info['chance'] >= Math.random() * 100)
			{
				var temp_all_possible_targets = filter_targets_by_types(all_possible_targets, prefer_info['types']);
				if(count_object(temp_all_possible_targets) > 0)
				{
					all_possible_targets = temp_all_possible_targets;
				}
			}
		});
	}
	all_possible_targets = filter_targets_by_aggro(all_possible_targets, ability_info['target_amount'], use_plyer_target, ability_info['ignore_aggro']);
	
	return all_possible_targets;
}

function filter_targets_by_aggro(all_possible_targets, max_targets, use_plyer_target, ignore_aggro){
	var temp_all_possible_targets = {};
	var final_all_possible_targets = {};
	$.each(all_possible_targets, function(possible_key, unit_id){
		if(combat_units[unit_id] != undefined)
		{
			var aggro = combat_units[unit_id]['aggro'] + 0;
			var aggro_factor = get_aggro_factor(unit_id);
			var final_aggro = aggro * aggro_factor;
			final_aggro = final_aggro * final_aggro;
			temp_all_possible_targets[possible_key] = final_aggro;
			if(use_plyer_target != undefined && use_plyer_target == true && player_target['col'] == combat_units[unit_id]['col'] && (player_target['row'] == combat_units[unit_id]['row'] || (player_target['row'] == combat_units[unit_id]['row'] + 1 && combat_units[unit_id]['big'] == true)))
			{
				final_all_possible_targets[possible_key] = unit_id;
			}
		}
	});

	for (var i = count_object(final_all_possible_targets); i < max_targets; i++) {
		var chosen_key = get_random_key_from_object_based_on_num_value(temp_all_possible_targets);
		if(ignore_aggro != undefined && ignore_aggro == true)
		{
			chosen_key = get_random_key_from_object(temp_all_possible_targets);
		}
		if(chosen_key != undefined)
		{
			delete temp_all_possible_targets[chosen_key];
			final_all_possible_targets[chosen_key] = all_possible_targets[chosen_key];
		}
	};
	return final_all_possible_targets;
}

function filter_targets_by_types(all_possible_targets, types){
	var temp_all_possible_targets = {};
	$.each(all_possible_targets, function(possible_key, unit_id){
		if(combat_units[unit_id] != undefined && match_array_values(types,combat_units[unit_id]['subtypes']))
		{
			temp_all_possible_targets[possible_key] = unit_id;
		}
	});
	return temp_all_possible_targets;
}

function get_aggro_factor(unit_id){
	var aggro_factor = 1;
	if(combat_units[unit_id] != undefined)
	{
		if((combat_units[unit_id]['row'] == 2 && combat_units[unit_id]['big'] != true) || (combat_units[unit_id]['row'] == 1 && combat_units[unit_id]['big'] == true))
		{
			aggro_factor = 4;
		}
		if(combat_units[unit_id]['row'] == 3 || (combat_units[unit_id]['row'] == 2 && combat_units[unit_id]['big'] == true) || combat_units[unit_id]['row'] == 4)
		{
			aggro_factor = 16;
		}
		if(combat_units[unit_id]['id'] == 'player')
		{
			aggro_factor *= 0.3;
		}
	}
	return aggro_factor;
}

function get_lowest_aggro_target(all_possible_targets){
	var found_unit = -1;
	var lowest_aggro = -1;
	var temp_all_possible_targets = {};
	$.each(all_possible_targets, function(possible_key, unit_id){
		if(combat_units[unit_id]['aggro'] < lowest_aggro || lowest_aggro < 0)
		{
			lowest_aggro = combat_units[unit_id]['aggro'];
		}
	});
	$.each(all_possible_targets, function(possible_key, unit_id){
		if(combat_units[unit_id]['aggro'] <= lowest_aggro || lowest_aggro < 0)
		{
			temp_all_possible_targets[possible_key] = unit_id;
		}
	});
	found_unit = get_random_key_from_object(temp_all_possible_targets);
	return found_unit;
}

function calculate_effect(unit_id, target_id, effect){
	var origin_unit = combat_units[unit_id];
	var target_unit = combat_units[target_id];
	var effect_amount = (effect['min_amount'] + (Math.random() * (effect['max_amount'] - effect['min_amount'])));
	var based_on_amount = 0;
	if(typeof(effect['based_on']) == 'string' && origin_unit != undefined)
	{
		effect_amount *=  get_buffed_stat(unit_id,effect['based_on']);
	}
	if(typeof(effect['based_on']) == 'number')
	{
		effect_amount *= effect['based_on'];
	}
	if(effect['bonus_amount'] != undefined && target_unit != undefined)
	{
		var total_bonus_factor = 1;
		$.each(effect['bonus_amount'], function(bonus_id, bonus_info){
			if(bonus_info['target_types'] != undefined && match_array_values(bonus_info['target_types'],target_unit['subtypes']))
			{
				total_bonus_factor *= bonus_info['bonus_factor'];
			}
		});
		effect_amount *= total_bonus_factor;
	}
	effect_amount = round_by_percent(effect_amount);
	if(effect_amount < 1 && effect['can_be_zero'] == undefined)
	{
		effect_amount = 1;
	}
	return effect_amount;
}

function resolve_effect(unit_id, target_id, effect){
	var origin_unit = combat_units[unit_id];
	if(combat_units[target_id] != undefined)
	{
		var target_unit = combat_units[target_id];
		var effect_amount = calculate_effect(unit_id, target_id, effect);
		var effect_timeout = 0;
		var based_on_amount = 0;
		if(typeof(effect['based_on']) == 'string' && origin_unit != undefined)
		{
			based_on_amount = origin_unit[effect['based_on']];
		}
		if(typeof(effect['based_on']) == 'number')
		{
			based_on_amount = effect['based_on'];
		}
		if(effect['projectile'] != undefined)
		{
			create_projectile(origin_unit,target_unit,effect['projectile']);
			if(unit_id != target_id)
			{
				effect_timeout = 500;
			}
			else
			{
				effect_timeout = 200;
			}
		}
		
		var effect_evaded = false;
		if(match_array_values(effect['subtypes'], ['melee','projectile']) && (effect['cannot_evade'] == undefined || effect['cannot_evade'] == false) && 100 / (100 + target_unit['dodge']) < Math.random())
		{
			effect_evaded = true;
			combat_timeout_couter++;
			combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					var parsed_dodge_text = parse_floating_text('<div class="projectile projectile_dodge">&nbsp;</div>', '#ccc');
					$('.unit_key_' + target_unit['key']).append(parsed_dodge_text);
				}, effect_timeout);
				play_sound_group('woosh');
			});
		}
		if(effect_evaded == false)
		{
			if(effect['sound'] != undefined)
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					play_sound_group(effect['sound']);
				}, effect_timeout - 200);
			}
			if(effect['type'] == 'aggro')
			{
				combat_units[unit_id]['aggro'] += (effect_amount * effect['aggro']);
			}
			if(effect['type'] == 'move')
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					move_to_free_slot(unit_id, target_id, effect_amount, effect['aggro'], effect);
				}, effect_timeout);
			}
			
			if(effect['type'] == 'damage')
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					receive_damage(unit_id, target_id, effect_amount, effect['aggro'], effect);
				}, effect_timeout);
			}
			if(effect['type'] == 'healing')
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					receive_healing(unit_id, target_id, effect_amount, effect['aggro']);
				}, effect_timeout);
			}
			if(effect['type'] == 'buff')
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					apply_buff(unit_id, target_id, effect_amount, based_on_amount, effect);
				}, effect_timeout);
			}
			if(effect['type'] == 'remove_buff')
			{
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					remove_buff(unit_id, target_id, effect_amount, based_on_amount, effect);
				}, effect_timeout);
			}
			
			if(effect['type'] == 'summon')
			{
				spawn_units(effect['units'], origin_unit['side']);
			}
		}
	}
}

function receive_damage(unit_id, target_id, effect_amount, aggro, effect_info){
	var origin_unit = combat_units[unit_id];
	var target_unit = combat_units[target_id];
	var target_armor = get_buffed_stat(target_id, 'armor');
	if(target_armor > 0 && match_array_values('physical',effect_info['subtypes']))
	{
		effect_amount = round_by_percent(effect_amount / (1 + (target_armor / 100)));
	}
	target_unit['hp'] -= effect_amount;
	if(combat_units[unit_id] != undefined && aggro != undefined)
	{
		combat_units[unit_id]['aggro'] += (effect_amount * aggro);
	}
	if(target_unit['hp'] <= 0)
	{
		target_unit['hp'] = 0;
	}
	var parsed_damage = parse_floating_text(effect_amount, 'rgba(200,0,0,1)');
	$('.unit_key_' + target_unit['key']).append(parsed_damage);
	update_unit_visual(target_id);
	if(unit_id != undefined && origin_unit != undefined && effect_amount > 0)
	{
		$.each(origin_unit['abilities'], function(ability_id, ability_info){
			if(all_abilities[ability_id]['proc'] == 'deal_damage' && combat_units[unit_id]['abilities'][ability_id]['ready_at'] <= nowint() && (all_abilities[ability_id]['proc_chance'] == undefined || all_abilities[ability_id]['proc_chance'] >= Math.random() * 100))
			{
				if(all_abilities[ability_id]['based_on_damage'] == undefined)
				{
					perform_ability(unit_id, ability_id, undefined, undefined, target_id);
				}
				else
				{
					perform_ability(unit_id, ability_id, {based_on:effect_amount}, undefined, target_id);
				}
			}
		});
	}
}

function receive_healing(unit_id, target_id, effect_amount, aggro){
	var origin_unit = combat_units[unit_id];
	var target_unit = combat_units[target_id];
	if(target_unit['hp'] > 0)
	{
		target_unit['hp'] += effect_amount;
		if(combat_units[unit_id] != undefined && aggro != undefined)
		{
			combat_units[unit_id]['aggro'] += effect_amount * aggro;
		}
	}
	else
	{
		effect_amount = 0;
	}
	if(target_unit['hp'] >= target_unit['max_hp'])
	{
		target_unit['hp'] = target_unit['max_hp'];
	}
	if(effect_amount != 0)
	{
		var parsed_damage = parse_floating_text(effect_amount, 'rgba(0,200,0,1)');
		$('.unit_key_' + target_unit['key']).append(parsed_damage);
	}
	update_unit_visual(target_id);
}

function move_to_free_slot(unit_id, target_id, effect_amount, aggro, effect_info){
	var origin_unit = combat_units[unit_id];
	var target_unit = combat_units[target_id];
	var free_slot = find_free_slot(target_unit['side'], target_unit['big'], target_unit['favorite_rows']);
	if(free_slot != false){
		$('.unit_key_' + target_unit['key'] + '').removeClass('col_' + target_unit['col']);
		$('.unit_key_' + target_unit['key'] + '').removeClass('row_' + target_unit['row']);
		target_unit['col'] = free_slot['col'];
		target_unit['row'] = free_slot['row'];
		$('.unit_key_' + target_unit['key'] + '').addClass('col_' + target_unit['col']);
		$('.unit_key_' + target_unit['key'] + '').addClass('row_' + target_unit['row']);
	}
}

function apply_buff(unit_id, target_id, effect_amount, based_on_amount, effect_info){
	var origin_unit = combat_units[unit_id];
	var target_unit = combat_units[target_id];
	if(target_unit['hp'] > 0)
	{
		if(target_unit['buffs'] == undefined){target_unit['buffs'] = {};}
		if(target_unit['buffs'][effect_info['buff_image']] == undefined){target_unit['buffs'][effect_info['buff_image']] = {};}
		var new_buff_key = get_highest_key_in_object(target_unit['buffs'][effect_info['buff_image']]) + 1;
		target_unit['buffs'][effect_info['buff_image']][new_buff_key] = {
			type: 			effect_info['buff_type'],
			image:  		effect_info['buff_image'],
			based_on: 		based_on_amount,
			min_amount: 	effect_info['min_amount'],
			max_amount: 	effect_info['max_amount'],
			projectile: 	effect_info['buff_projectile'],
			sound: 			effect_info['buff_sound'],
			aggro: 			effect_info['aggro'],
			cannot_evade: 	effect_info['cannot_evade'],
			ticks_left: 	effect_info['ticks'],
			tick_time: 		effect_info['tick_time'],
			subtypes: 		effect_info['subtypes'],
			next_tick: 		nowint() + (effect_info['tick_time']),
		};
		if(combat_units[unit_id] != undefined && effect_info['aggro'] != undefined)
		{
			combat_units[unit_id]['aggro'] += effect_amount * effect_info['aggro'];
		}
	}
	else
	{
		effect_amount = 0;
	}
	update_unit_visual(target_id);
}

function get_buffed_stat(unit_id, stat){
	var buffed_stat = 0;
	if(combat_units[unit_id] != undefined && combat_units[unit_id][stat] != undefined && typeof(combat_units[unit_id][stat]) == 'number')
	{
		buffed_stat += combat_units[unit_id][stat];
	}
	if(combat_units[unit_id]['buffs'] != undefined)
	{
		$.each(combat_units[unit_id]['buffs'], function(buff_group_id, buff_group_info){
			$.each(buff_group_info, function(buff_id, buff_info){
				if(buff_info['type'] == stat)
				{
					buffed_stat += calculate_effect(unit_id, unit_id, buff_info);
				}
			});
		});
	}
	return buffed_stat;
}

function remove_buff(unit_id, target_id, effect_amount, based_on_amount, effect_info){
	var origin_unit = combat_units[unit_id];
	var target_unit = combat_units[target_id];
	var buffs_removed = 0;
	if(target_unit['hp'] > 0)
	{
		if(target_unit['buffs'] == undefined){target_unit['buffs'] = {};}
		if(target_unit['buffs'][effect_info['buff_type']] != undefined){
			for (var i = effect_amount - 1; i >= 0; i--) {
				if(count_object(target_unit['buffs'][effect_info['buff_type']]) > 0)
				{
					buffs_removed++;
					delete target_unit['buffs'][effect_info['buff_type']][get_random_key_from_object(target_unit['buffs'][effect_info['buff_type']])];
				}
			}
			if(count_object(target_unit['buffs'][effect_info['buff_type']]) == 0)
			{
				delete target_unit['buffs'][effect_info['buff_type']];
			}
		}
		if(combat_units[unit_id] != undefined && effect_info['aggro'] != undefined)
		{
			combat_units[unit_id]['aggro'] += buffs_removed * effect_info['aggro'];
		}
	}
	else
	{
		effect_amount = 0;
	}
	update_unit_visual(target_id);
}


function update_unit_visual(unit_id){
	var unit = combat_units[unit_id];
	var hp_percent = (unit['hp'] / unit['max_hp']) * 100;
	$('.unit_key_' + unit['key'] + ' .unit_hp_percent').css('width', hp_percent + '%');
	var parsed_buffs = '';
	$.each(unit['buffs'], function(buff_type, buffs){
		var buff_count = count_object(buffs);
		if(buff_count > 0)
		{
			parsed_buffs += '<div class="buff buff_' + buff_type + ' projectile_' + buff_type + '">' + buff_count + '</div>';
		}
	});
	$('.unit_key_' + unit['key'] + ' .unit_bg .unit_effects').html(parsed_buffs);
	if(unit['hp'] < 1)
	{
		combat_timeout_couter++;
		combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
			$('.unit_key_' + unit['key']).addClass('dead');
			unit_death(unit_id);
		},250);
	}
}

var loot_count = 0;
function unit_death(unit_id){
	if(combat_units[unit_id] != undefined && (combat_units[unit_id]['dead'] == undefined || combat_units[unit_id]['dead'] == false))
	{
		combat_units[unit_id]['buffs'] = {};
		combat_units[unit_id]['dead'] = true;
		combat_units[unit_id]['hp'] = 0;

		var unit = combat_units[unit_id];
		if(unit['side'] == 2)
		{
			var unit_level = combat_units[unit_id]['level'];
			var level_effect = get_level_effect(unit_level);
			gain_kill_xp(unit['level'] * unit['power_level']);
			check_busy_quests('kills', unit['subtypes']);
			var loot_drop_chance = Math.random() * 100;
			if(unit['loot'] != undefined && unit['loot_chance'] != undefined && loot_drop_chance <= unit['loot_chance'])
			{
				//var dropped_loot = get_random_key_from_object_based_on_num_value(unit['loot']);
				var dropped_loot = get_random_loot(unit['loot']);
				var dropped_amount = round_by_percent(unit['loot'][dropped_loot]['min'] + (Math.random() * ((unit['loot'][dropped_loot]['max'] * level_effect) - unit['loot'][dropped_loot]['min'])));
				if(dropped_amount < unit['loot'][dropped_loot]['min']){dropped_amount = round_by_percent(unit['loot'][dropped_loot]['min']);}
				if(dropped_amount > 0)
				{
					loot_count++;
					var temp_loot_count = loot_count + 0;
					gain_item(dropped_loot, dropped_amount);
					var parsed_item = parse_item(dropped_loot, undefined, '<span class="reward_amount">+' + dropped_amount + '</span>');
					parsed_item = '<div class="cell loot loot_' + temp_loot_count + ' col_' + unit['col'] + ' row_' + unit['row'] + '">' + parsed_item + '</div>';
					$('#content_combat').append(parsed_item);
					fade_out_element('.loot_' + temp_loot_count + '', 2000);
				}
			}
		}
		combat_timeout_couter++;
		combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
			$('.unit_key_' + unit_id).remove();
		},1000);
	}
}

function get_xp_needed(level){
	if(level < 1)
	{
		return 0;
	}
	else
	{
		return to_the_nth(100, level -1, 2.5);
	}
}

function get_player_xp_percent(){
	var last_level = get_xp_needed(gamedata['player_level'] - 1);
	var next_level = get_xp_needed(gamedata['player_level']);
	var level_xp = next_level - last_level;
	var xp_this_level = gamedata['player_xp'] - last_level;
	return (xp_this_level / level_xp) * 100;
}

function gain_kill_xp(level){
	var xp_gained = level * 5;
	if(gamedata['player_level'] > level)
	{
		xp_gained *= sqr(level / gamedata['player_level']);
	}
	gain_xp(xp_gained);
	$('.unit_xp_percent').css('height', get_player_xp_percent() + '%');
}

function gain_xp(amount){
	gamedata['player_xp'] += amount;
	if(gamedata['player_xp'] >= get_xp_needed(gamedata['player_level']))
	{
		gamedata['player_level'] += 1;
		//console.log('player level: ' + gamedata['player_level']);
	}
	//console.log(gamedata['player_xp']);
	saveToLocalStorage();
}

function get_random_loot(loot){
	var chosen_loot = false;
	
	var total_chance = 0;
	$.each(loot, function(loot_id, loot_info){
		if(loot_info['requirements'] == undefined || check_requirements(loot_info['requirements']))
		{
			total_chance += loot_info['chance'];	
		}
	});
	var chosen_loot_chance = Math.random() * total_chance;
	$.each(loot, function(loot_id, loot_info){
		if(loot_info['requirements'] == undefined || check_requirements(loot_info['requirements']))
		{
			chosen_loot_chance -= loot_info['chance'];
			if(chosen_loot_chance <= 0 && chosen_loot == false)
			{
				chosen_loot = loot_id;
			}
		}
	});
	
	return chosen_loot;
}

function fade_out_element(element, timeout_amount){
	combat_timeout_couter++;
	combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
		$(element).addClass('fade_out');
	},timeout_amount);
	combat_timeout_couter++;
	combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
		$(element).remove();
	},timeout_amount + 1000);
}

var projectile_counter = 0;
function create_projectile(start_slot, end_slot, projectile){
	if(start_slot == undefined){start_slot = end_slot;}
	var start_col = start_slot['col'] + 0;
	var start_row = start_slot['row'] + 0;
	var end_col = end_slot['col'] + 0;
	var end_row = end_slot['row'] + 0;
	var parsed_projectile = '';
	var temp_projectile_counter = projectile_counter + 0;
	var big_unit = '';
	if(start_slot['big'] != undefined && start_slot['big'] == true)
	{
		big_unit = 'big_unit';
	}
	projectile_counter++;
	parsed_projectile += '<div class="cell col_' + start_col + ' row_' + start_row + ' projectile projectile_' +  + temp_projectile_counter + ' projectile_' + projectile + ' ' + big_unit + '"></div>';
	$('#content_combat').append(parsed_projectile);
	update_projectile_position(temp_projectile_counter, end_col, end_row);
	combat_timeout_couter++;
	combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
		$('.projectile_' + temp_projectile_counter).remove();
	},1000);
}

function update_projectile_position(projectile_id, col, row){
	combat_timeout_couter++;
	combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
		for (i = 1; i <= 5; i++) {
			$('.projectile_' + projectile_id).removeClass('col_' + i);
			$('.projectile_' + projectile_id).removeClass('row_' + i);
			$('.projectile_' + projectile_id).removeClass('big_unit');
		};
		$('.projectile_' + projectile_id).addClass('col_' + col);
		$('.projectile_' + projectile_id).addClass('row_' + row);
	},200);
	combat_timeout_couter++;
	combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
		$('.projectile_' + projectile_id).addClass('done');
	},450);
}