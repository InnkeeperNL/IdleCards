var current_action_id = '';
var passive_production_factor = 0.1;
var buy_upgrade_factor = 0;

var working_location = 'none';
var working_action = 'none';


function parse_all_actions(location_id, unlockables){
	var parsed_actions = '';
	var parsed_unlockable_actions = '';
	var location_level = gamedata['known_locations'][location_id]['level'];
	var shown_action_count = 0;
	var next_unlock_name = '';
	if(gamedata['known_locations'][location_id]['collapsed'] == undefined)
	{
		gamedata['known_locations'][location_id]['collapsed'] = {};
	}
	$.each(available_locations[current_location]['actions'], function(group_id, group_info)
	{
		var current_collapsed = '';
		var collapsed_icon = ' - ';
		if(gamedata['known_locations'][location_id]['collapsed'][group_id] != undefined)
		{
			current_collapsed = 'collapsed';
			collapsed_icon = ' + ';
		}
		var group_container = '<div class="action_group_container ' + current_collapsed + ' group_' + group_id + '"><div class="group_title" onclick="toggle_action_group_collapse(' + group_id + ')">' + capitalizeFLetter(group_info['name']) + '<div class="group_collapser">' + collapsed_icon + '</div></div>';

		$.each(group_info['actions'], function(action_id, needs_unlocked)
		{
		
			if(gamedata['known_locations'][location_id]['actions'][action_id] != undefined && (unlockables == undefined || unlockables == false))
			{
				if(gamedata['known_locations'][location_id]['actions'][action_id] == undefined)
				{
					gamedata['known_locations'][location_id]['actions'][action_id] = {level: 0};
				}
				var skill_level = effective_skill_level(available_actions[action_id]['skill']);
				var skill_percent = get_skill_percent(available_actions[action_id]['skill']);
				var action_success_amount = (available_actions[action_id]['chance'] * skill_level / 100);
				var passive_production = (available_actions[action_id]['chance'] * gamedata['known_locations'][location_id]['actions'][action_id]['level'] / 100);

				var parsed_action = '';
				if(group_container != '')
				{
					if(parsed_actions != '')
					{
						parsed_action += '</div>';
					}
					parsed_action += group_container;
				}
				parsed_action += 		'<div class="action_bar">';
				var action_disabled = '';
				if(gamedata['known_locations'][location_id]['actions'][action_id]['enabled'] == false)
				{
					action_disabled = 'disabled_action';
				}
				if(location_id == working_location && action_id == working_action)
				{
					action_disabled += ' working';
				}
				var action_image = '';
				if(available_actions[action_id]['item_id'] != undefined && available_items[available_actions[action_id]['item_id']] != undefined && available_items[available_actions[action_id]['item_id']]['image'] != undefined)
				{
					action_image = available_items[available_actions[action_id]['item_id']]['image'];
				}
				else
				{
					if(available_actions[action_id]['item_image'] != undefined && available_items[available_actions[action_id]['item_image']] != undefined && available_items[available_actions[action_id]['item_image']]['image'] != undefined)
					{
						action_image = available_items[available_actions[action_id]['item_image']]['image']
					}
				}
				action_image = '<div class="action_image" style="background-image:url(images/' + action_image + ')"></div>';
				if(available_actions[action_id]['type'] == undefined || available_actions[action_id]['type'] == 'basic')
				{
					parsed_action += 			'<span class="action_bart_name" onclick="current_action_id=\'' + action_id + '\';toggle_production();show_content(\'current_location\')">' + action_image + '<div class="action_level ' + action_disabled + '">' + gamedata['known_locations'][location_id]['actions'][action_id]['level'] + '</div>' + capitalizeFLetter(available_actions[action_id]['name']) + '</span>';
				}
				else
				{
					parsed_action += 			'<span class="action_bart_name" onclick="current_action_id=\'' + action_id + '\';toggle_production();show_content(\'current_location\')">' + action_image + '<div class="action_level" style="opacity:0">' + gamedata['known_locations'][location_id]['actions'][action_id]['level'] + '</div>' + capitalizeFLetter(available_actions[action_id]['name']) + '</span>';
				}
				parsed_action += 			'<button class="show_action_button" onclick="current_action_id=\'' + action_id + '\';show_content(\'current_action\')">';
				parsed_action += 				'Show';
				parsed_action += 			'</button>';
				parsed_action += 		'</div>';
				if(group_container != '')
				{
					group_container = '';
				}
				parsed_actions += parsed_action;
			}
			else
			{
				if(gamedata['known_locations'][location_id]['actions'][action_id] == undefined && unlockables != undefined && unlockables == true)
				{
					var can_show = check_have_actions_unlocked(needs_unlocked, location_id, can_show);
					if(can_show == false && have_gained_items(available_actions[action_id]['unlock_cost']))
					{
						can_show = true;
					}
					if(can_show == true)
					{
						var parsed_unlockable_action = '';
						if(group_container != '')
						{
							if(parsed_unlockable_actions != '')
							{
								parsed_unlockable_action += '</div>';
							}
							parsed_unlockable_action += group_container;
						}
						next_unlock_name = '"' + capitalizeFLetter(available_actions[action_id]['name']) + '"';
						if(available_actions[action_id]['unlock_name'] != undefined)
						{
							next_unlock_name = capitalizeFLetter(available_actions[action_id]['unlock_name']);
						}
						parsed_unlockable_action += 		'<div class="action_bar upgrade_available">';
						//parsed_actions += 		'Upgrade<br/>';
						parsed_unlockable_action +=		next_unlock_name;
						var can_upgrade = true;
						var upgrade_costs = available_locations[current_location]['upgrade_cost'];
						if(available_actions[action_id]['unlock_cost'] != undefined)
						{
							upgrade_costs = available_actions[action_id]['unlock_cost'];
						}
						$.each(upgrade_costs, function(item_id, amount){
							var real_amount = amount;
							if(available_actions[action_id]['unlock_cost'] == undefined)
							{
								real_amount = calculate_new_location_cost(shown_action_count, amount);
							}
							if(item_id == 'coins')
							{
								var have_enough = 'enough';
								if(gamedata['coins'] < real_amount){can_upgrade = false;have_enough = 'not_enough';}
													parsed_unlockable_action += 			'<div class="action_skill">';
													
													parsed_unlockable_action += 			'Coins: <span class="ingredient_amount"><span class="item_coins ' + have_enough + '" style="color:' + get_percent_color(gamedata['coins'], real_amount) + '" attr-min-required="' + real_amount + '">' + nFormatter(gamedata['coins'], 3) + '</span> / ' + nFormatter(real_amount, 3) + '</span>';
													parsed_unlockable_action += 			'</div>';
								
							}
							if(available_items[item_id] != undefined)
							{
								var owned_amount = 0;
								var have_enough = 'enough';
								if(gamedata['inventory'][item_id] != undefined && gamedata['inventory'][item_id] > 0)
								{
									owned_amount = gamedata['inventory'][item_id];
								}
								if(owned_amount < real_amount){can_upgrade = false;have_enough = 'not_enough';}
								parsed_unlockable_action += 			'<div class="action_skill">';
								parsed_unlockable_action += 			capitalizeFLetter(available_items[item_id]['name']) + ': <span class="ingredient_amount"><span class="item_' + item_id + ' ' + have_enough + '" style="color:' + get_percent_color(owned_amount, real_amount) + '" attr-min-required="' + real_amount + '">' + nFormatter(owned_amount, 3) + '</span> / ' + nFormatter(real_amount, 3) + '</span>';
								parsed_unlockable_action += 			'</div>';
								
							}
						});
						if(can_upgrade == true || true)
						{
							parsed_unlockable_action += 			'<button class="show_action_button gold" onclick="unlock_action(\'' + action_id + '\')">UNLOCK</button>';
						}
						else
						{
							parsed_unlockable_action += 			'<button class="show_action_button danger">UNLOCK</button>';
						}
						parsed_unlockable_action += 		'</div>';
						if(group_container != '')
						{
							group_container = '';
						}
						/*if(next_unlock_name == '')
						{
							next_unlock_name = available_actions[action_id]['name'];
						}*/
						parsed_unlockable_actions += parsed_unlockable_action;
					}
				}
			}
			shown_action_count++;
		});
	});
	
	/*if(false && shown_action_count > location_level && available_locations[current_location]['upgrade_cost'] != undefined)
	{
		parsed_actions += 		'<div class="action_bar">';
		//parsed_actions += 		'Upgrade<br/>';
		parsed_actions +=		'"' + next_unlock_name + '"';
		var can_upgrade = true;
		$.each(available_locations[current_location]['upgrade_cost'], function(item_id, amount){
			var real_amount = calculate_new_location_cost(location_level, amount);
			if(item_id == 'coins')
			{
									parsed_actions += 			'<div class="action_skill">';
									
									parsed_actions += 			'Coins: <span class="ingredient_amount"><span class="item_coins">' + nFormatter(gamedata['coins'], 3) + '</span> / ' + nFormatter(real_amount, 3) + '</span>';
									parsed_actions += 			'</div>';
				if(gamedata['coins'] < real_amount){can_upgrade = false;}
			}
			if(available_items[item_id] != undefined)
			{
									parsed_actions += 			'<div class="action_skill">';
									parsed_actions += 			available_items[item_id]['name'] + ': <span class="ingredient_amount"><span class="item_' + item_id + '">' + nFormatter(get_item_owned_amount(item_id), 3) + '</span> / ' + nFormatter(real_amount, 3) + '</span>';
									parsed_actions += 			'</div>';
				if(available_items[item_id] < real_amount){can_upgrade = false;}
			}
		});
		if(can_upgrade == true || true)
		{
			parsed_actions += 			'<button class="show_action_button gold" onclick="upgrade_location(\'' + location_id + '\')">UNLOCK</button>';
		}
		else
		{
			parsed_actions += 			'<button class="show_action_button danger">UNLOCK</button>';
		}
		parsed_actions += 		'</div>';
	}*/
	check_collapse_all_button();
	return parsed_actions + parsed_unlockable_actions;
}

function check_have_actions_unlocked(actions, location_id, can_show){
	if(can_show == undefined)
	{
		can_show = true;
	}
	var can_show_any = false;
	if(typeof(actions) == 'object')
	{
		$.each(actions, function(useless_id, action_unlocked){
			if(typeof(action_unlocked) == 'string')
			{
				if(gamedata['known_locations'][location_id]['actions'][action_unlocked] == undefined)
				{
					can_show = false;
				}
			}
			else
			{
				can_show = false;
				if(can_show_any == false)
				{
					can_show_any = check_have_actions_unlocked(action_unlocked, location_id);
				}
			}
		});
	}
	if(can_show_any == true)
	{
		can_show = true;
	}
	return can_show;
}

function have_gained_items(check_items){
	if(check_items != undefined)
	{
		var got_all = true;
		$.each(check_items, function(item_id, item_amount){
			if(gamedata['gained_items'][item_id] == undefined)
			{
				got_all = false;
			}
		});
		return got_all;
	}
	else
	{
		return false;
	}
}

function toggle_action_group_collapse(group_id){
	if(gamedata['known_locations'][current_location]['collapsed'][group_id] == undefined)
	{
		gamedata['known_locations'][current_location]['collapsed'][group_id] = true;
		$('.group_' + group_id).addClass('collapsed');
		$('.group_' + group_id + ' .group_collapser').html(' + ');
	}
	else
	{
		delete gamedata['known_locations'][current_location]['collapsed'][group_id];
		$('.group_' + group_id).removeClass('collapsed');
		$('.group_' + group_id + ' .group_collapser').html(' - ');
	}
	check_collapse_all_button();
	saveToLocalStorage();
};

function check_collapse_all_button(){
	if(count_object(gamedata['known_locations'][current_location]['collapsed']) > 0)
	{
		$('.toggle_collapse_all_button').html('+');
	}
	else
	{
		$('.toggle_collapse_all_button').html('-');
	}
}

function collapse_toggle_all(){
	if(count_object(gamedata['known_locations'][current_location]['collapsed']) > 0)
	{
		gamedata['known_locations'][current_location]['collapsed'] = {};
	}
	else
	{
		$.each(available_locations[current_location]['actions'], function(group_id, group_info)
		{
			gamedata['known_locations'][current_location]['collapsed'][group_id] = true;
		});
	}
	show_content('current');
}

function show_current_action(){

	var action_id = current_action_id;
	var skill_level = effective_skill_level(available_actions[action_id]['skill']);
	var skill_percent = get_skill_percent(available_actions[action_id]['skill']);
	
	var passive_production = (available_actions[action_id]['chance'] * gamedata['known_locations'][current_location]['actions'][action_id]['level'] / 100 * passive_production_factor) * available_actions[action_id]['passive_factor'];
	var action_success_amount = (available_actions[action_id]['chance'] * skill_level / 100) + passive_production;

	var parsed_action = '';
	parsed_action += 		'<div class="action_bar action_bar_' + action_id + ' action_type_' + available_actions[action_id]['type'] + ' ">';
	parsed_action += 			capitalizeFLetter(available_actions[action_id]['name']);
	parsed_action += 			'<div class="action_skill">';
	if(available_actions[action_id]['type'] == undefined || available_actions[action_id]['type'] == 'basic')
	{
		/*parsed_action += 				capitalizeFLetter(available_actions[action_id]['skill']) + ' skill: ';
		parsed_action += 				'<span class="skill_level_' + available_actions[action_id]['skill'] + '">';
		parsed_action += 				'</span><br/>';*/

		if(available_actions[action_id]['progress_needed'] != undefined)
		{
			if(gamedata['known_locations'][current_location]['actions'][action_id]['progress'] == undefined || gamedata['known_locations'][current_location]['actions'][action_id]['progress'] < 0){gamedata['known_locations'][current_location]['actions'][action_id]['progress'] = 0;}
			if(gamedata['known_locations'][current_location]['actions'][action_id]['progress_id'] == undefined){gamedata['known_locations'][current_location]['actions'][action_id]['progress_id'] = 0;}
			var current_progress_percent = gamedata['known_locations'][current_location]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed'] * 100;
			parsed_action += 				'<div class="explore_bar">';
			parsed_action +=					'<div class="explore_progress_bar explore_progress_bar_' + gamedata['known_locations'][current_location]['actions'][action_id]['progress_id'] + '" style="width:' + current_progress_percent + '%"></div>';
			parsed_action += 					'<div class="explore_time"></div>';
			parsed_action +=				'</div>';
		}

		var current_luck = get_active_luck();
		if(available_actions[action_id]['item_id'] != undefined)
		{
			var amount_gained = get_item_gain_factor(available_actions[action_id]['item_id'], available_actions[action_id]['skill']);
			if(available_actions[action_id]['reward_factor'] != undefined){amount_gained *= available_actions[action_id]['reward_factor'];}
			amount_gained += current_luck / 100;
			parsed_action +=					'<span onclick="set_item_sold(\'' + available_actions[action_id]['item_id'] + '\');show_content(\'set_counter_item\')">' + parse_item(available_actions[action_id]['item_id'], undefined, amount_gained) + '</span>';
		}
		$.each(available_actions[action_id]['bonus_loot'], function(loot_id, loot_chance){
			var amount_gained = get_item_gain_factor(loot_id, available_actions[action_id]['skill']) * (loot_chance / 100);
			if(available_actions[action_id]['reward_factor'] != undefined){amount_gained *= available_actions[action_id]['reward_factor'];}
			amount_gained += current_luck / 100;
			parsed_action +=					'<span onclick="set_item_sold(\'' + loot_id + '\');show_content(\'set_counter_item\')">' + parse_item(loot_id, undefined, amount_gained) + '</span>';
		});

		var can_perform = true;
		if(available_actions[action_id]['cost'] != undefined)
		{
			parsed_action += '<br/>Cost<br/><span class="action_cost">';
		}
		$.each(available_actions[action_id]['cost'], function(cost_id, cost_amount){
			var cost_owned = 0;
			if(available_items[cost_id] != undefined)
			{
				cost_owned = get_item_owned_amount(cost_id);
				parsed_action += '<span class="ingredient_name">' + capitalizeFLetter(available_items[cost_id]['name']) + '</span><span class="ingredient_amount"><span class="item_' + cost_id + '" style="color:' + get_percent_color(cost_owned, cost_amount) + '" attr-min-required="' + cost_amount + '">' + nFormatter(cost_owned, 3) + '</span> / ' + nFormatter(cost_amount, 3) + '</span><br/>';
				if(cost_owned < cost_amount){can_perform = false;}
			}
		});
		if(available_actions[action_id]['cost'] != undefined)
		{
			parsed_action += '</span>';
		}
		var min_upgrade_cost = 0;
		if(available_actions[action_id]['upgrade_item'] != undefined && available_items[available_actions[action_id]['upgrade_item']] != undefined)
		{
			min_upgrade_cost = available_items[available_actions[action_id]['upgrade_item']]['value'];
		}
		var buy_upgrade_multiplier = get_current_upgrade_amount();
		var action_level = gamedata['known_locations'][current_location]['actions'][action_id]['level'];
		var action_upgrade_cost = calculate_new_action_cost(action_level, 1, buy_upgrade_multiplier, min_upgrade_cost);
		var action_upgade_text = 'coins';
		var action_upgade_id = 'coins';

		if(available_actions[action_id]['upgrade_item'] != undefined && available_items[available_actions[action_id]['upgrade_item']] != undefined)
		{
			action_upgade_id = available_actions[action_id]['upgrade_item'];
			action_upgrade_cost = Math.ceil(action_upgrade_cost / available_items[action_upgade_id]['value']);
			action_upgade_text = available_items[action_upgade_id]['name'];
		}
		parsed_action += 			'<br/><span class="upgrade_action_cost"></span><br/><br/><span class="upgrade_action_buttons"></span>';
		parsed_action += 			'<div class="breaker"></div>';
	}
	

	
	if(available_actions[action_id]['type'] != undefined && available_actions[action_id]['type'] == 'combat')
	{
		if(gamedata['known_locations'][current_location]['actions'][action_id] != undefined)
		{
			var current_action_info = gamedata['known_locations'][current_location]['actions'][action_id];
			/*if(current_action_info['current_mobs'] == undefined || count_object(current_action_info['current_mobs']) == 0)
			{
				current_action_info['current_mobs'] = get_new_mob(action_id);
				if(gamedata['highest_mobs_id'] == undefined){gamedata['highest_mobs_id'] = 0;}
				gamedata['highest_mobs_id']++;
				current_action_info['current_mobs_id'] = gamedata['highest_mobs_id'];
			}*/
			if(current_action_info['current_mobs'] == undefined){current_action_info['current_mobs'] = {};}
			/*var temp_possible_loot = {};
			$.each(available_actions[action_id]['possible_monsters'], function(monster_group_id, monsters){
				$.each(monsters['monsters'], function(mob_id, mob_info){
					$.each(available_monsters[mob_id]['loot'], function(loot_id, loot_chance){
						if(temp_possible_loot[loot_id] == undefined)
						{
							temp_possible_loot[loot_id] = {chance:0};
						}
						temp_possible_loot[loot_id]['chance'] += loot_chance;
					});
				});
			});*/
			//temp_possible_loot = true_sort_object(temp_possible_loot, 'chance', false);
			//parsed_action += 			'<div class="loot_container">';
			/*$.each(temp_possible_loot, function(loot_id, useless_data){
				parsed_action += parse_item(loot_id);
			});*/
			//parsed_action += 			'</div>';
			parsed_action += 			'<br/>';
			parsed_action += 			'<div class="unit_container enemy">';
			$.each(current_action_info['current_mobs'], function(unit_id, unit_info){
				var mob_count = unit_info['amount'];
				var current_mob_health_percent = 0;
				if(available_monsters[unit_info['id']]['health'] != undefined && unit_info['current_damage'] == undefined)
				{
					unit_info['current_damage'] = 0;
				}
				if(unit_info['current_damage'] != undefined)
				{
					current_mob_health_percent = (available_monsters[unit_info['id']]['health'] - unit_info['current_damage']) / available_monsters[unit_info['id']]['health'] * 100;
				}
				parsed_action += parse_monster(unit_info['id'], mob_count, current_mob_health_percent, current_action_info['current_mobs_id'], false);
				/*if(available_monsters[monster_id] != undefined && monster_health > 0)
				{
					var mob_count = Math.ceil(monster_health / available_monsters[monster_id]['health']);
					var current_mob_health = monster_health - (available_monsters[monster_id]['health'] * (mob_count -1));
					var current_mob_health_percent = current_mob_health / available_monsters[monster_id]['health'] * 100;
					parsed_action += parse_monster(monster_id, mob_count, current_mob_health_percent, current_action_info['current_mobs_id'], false);
				}*/
			});
			parsed_action += 			'</div>';
			parsed_action += 			'<div class="loot_container">';
			parsed_action += 			'</div>';
			parsed_action += 			'<div class="breaker"></div>';
			parsed_action += 			'<div class="unit_container ally">';
			if(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'] == undefined)
			{
				gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'] = {};
			}
			if(count_object(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units']) == 0)
			{
				parsed_action += 			'Assign units to start combat';
			}
			$.each(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'], function(unit_id, unit_info){
				var mob_count = unit_info['amount'];
				var current_mob_health_percent = 0;
				if(available_items[unit_id]['stats']['health'] != undefined && unit_info['current_damage'] == undefined)
				{
					unit_info['current_damage'] = 0;
				}
				if(unit_info['current_damage'] != undefined)
				{
					current_mob_health_percent = (available_items[unit_id]['stats']['health'] - unit_info['current_damage']) / available_items[unit_id]['stats']['health'] * 100;
				}
				parsed_action += parse_unit(unit_id, mob_count, current_mob_health_percent);
			});
			parsed_action += 			'</div>'
			parsed_action += 			'<div class="breaker"></div>';
			parsed_action += 			'<button class="upgrade_button menu_button slim" data-target-content="assign_units">Assign</button>';
			
			if(count_object(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units']) > 0)
			{
				parsed_action += 			'<button class="upgrade_button slim danger" onclick="flee_combat()">Flee</button>';
			}
		}
	}

	parsed_action += 			'</div>';

	parsed_action += 		'</div>';
	if(available_actions[action_id]['type'] == undefined || available_actions[action_id]['type'] == 'basic')
	{
		var button_color = 'cool';
		if(current_location == working_location && action_id == working_action)
		{
			button_color = '';
		}
		//if(can_perform == true){
			//parsed_action += 			'<button class="action_button" onclick="perform_action(\'' + action_id + '\')">';
		parsed_action += 			'<button class="action_button ' + button_color + '" onclick="toggle_working_here()">';
		/*}
		else
		{
			parsed_action += 			'<button class="action_button danger">';
		}*/
		if(current_location == working_location && action_id == working_action && available_actions[action_id]['working_name'] != undefined)
		{
			parsed_action += 				available_actions[action_id]['working_name'] + '...';
		}
		else
		{
			parsed_action += 				available_actions[action_id]['action_name'];
		}
		parsed_action += 			'</button>';
	}
	
	$('.current_action').html(parsed_action);

	if(available_actions[action_id]['type'] == undefined || available_actions[action_id]['type'] == 'basic')
	{
		effective_skill_level(available_actions[action_id]['skill']);
		update_action_upgrade_buttons();
		update_action_upgrade_cost();
	}
};

function toggle_working_here(){
	if(working_location != current_location || working_action != current_action_id)
	{
		working_location = current_location;
		working_action = current_action_id;
		$('.action_button').removeClass('cool');
		var working_name = available_actions[current_action_id]['working_name'];
		$('.action_button').html(working_name + '...');
	}
	else
	{
		working_location = 'none';
		working_action = 'none';
		$('.action_button').addClass('cool');
		var working_name = available_actions[current_action_id]['action_name'];
		$('.action_button').html(working_name);
	}
	update_action_upgrade_cost();
}

function flee_combat(){
	$('.unit_container.enemy').html('');
	gamedata['known_locations'][current_location]['actions'][current_action_id]['current_mobs'] = {};
	$.each(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'], function(unit_id, unit_info){
		gain_item(unit_id, unit_info['amount'], undefined, false);
		delete gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'][unit_id];
	});
	$('.unit_container.ally').html('');
}

function update_combat_units(){
	if($('#content_current_action').hasClass('active') && gamedata['known_locations'][current_location]['actions'][current_action_id] != undefined)
	{
		var current_action_info = gamedata['known_locations'][current_location]['actions'][current_action_id];

		$.each(current_action_info['current_mobs'], function(monster_id, monster_health){
			if(available_monsters[monster_health['id']] != undefined)
			{
				var mob_count = monster_health['amount'];
				var current_mob_health_percent = 0;

				current_mob_health_percent = (available_monsters[monster_health['id']]['health'] - monster_health['current_damage']) / available_monsters[monster_health['id']]['health'] * 100;
				if($('.item_container_' + monster_id + '_' + current_action_info['current_mobs_id']).length == 0)
				{
					$('.unit_container.enemy').append(parse_monster(monster_health['id'], mob_count, current_mob_health_percent, current_action_info['current_mobs_id'], undefined, monster_id));
				}
				$('.item_container_' + monster_id + '_' + current_action_info['current_mobs_id'] + ' .monster_health_bar').css('width', current_mob_health_percent + '%');
				$('.item_container_' + monster_id + '_' + current_action_info['current_mobs_id'] + ' .owned_amount').html(nFormatter(mob_count,3));
				/*var mob_count = Math.ceil(monster_health / available_monsters[monster_id]['health']);
				var current_mob_health = monster_health - (available_monsters[monster_id]['health'] * (mob_count -1));
				var current_mob_health_percent = current_mob_health / available_monsters[monster_id]['health'] * 100;
				if($('.item_container_' + monster_id + '_' + current_action_info['current_mobs_id']).length == 0)
				{
					$('.unit_container.enemy').append(parse_monster(monster_id, mob_count, current_mob_health_percent, current_action_info['current_mobs_id']));
				}
				$('.item_container_' + monster_id + '_' + current_action_info['current_mobs_id'] + ' .monster_health_bar').css('width', current_mob_health_percent + '%');
				$('.item_container_' + monster_id + '_' + current_action_info['current_mobs_id'] + ' .owned_amount').html(mob_count);*/
			}
		});

		$.each(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'], function(unit_id, unit_info){
			var mob_count = unit_info['amount'];
			var current_mob_health_percent = 0;

			current_mob_health_percent = (available_items[unit_id]['stats']['health'] - unit_info['current_damage']) / available_items[unit_id]['stats']['health'] * 100;
			if($('.item_container_c_' + unit_id).length == 0)
			{
				$('.unit_container.ally').append(parse_unit(unit_id, mob_count, current_mob_health_percent));
			}
			$('.item_container_c_' + unit_id + ' .monster_health_bar').css('width', current_mob_health_percent + '%');
			$('.item_container_c_' + unit_id + ' .owned_amount').html(nFormatter(mob_count,3));
		});
	}
}

function assign_this_unit(assign_all){
	var assign_amount = 1;

	if(gamedata['inventory'][selling_item] != undefined && available_items[selling_item] != undefined && gamedata['inventory'][selling_item] >= 1)
	{
		if(assign_all != undefined && assign_all == true)
		{
			assign_amount = gamedata['inventory'][selling_item];
		}
		gain_item(selling_item, -1 * assign_amount);
		if(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'] == undefined)
		{
			gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'] = {};
		}
		if(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'][selling_item] == undefined)
		{
			gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'][selling_item] = {
				amount: 0,
				current_damage: 0
			};
		}
		gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'][selling_item]['amount'] += assign_amount;
		console.log(gamedata['known_locations'][current_location]['actions'][current_action_id]['assigned_units'][selling_item]);
		
		if(assign_all != undefined && assign_all == true)
		{
			show_content('current_action');
		}
		else
		{
			show_content('assign_single_unit');
		}
		
	}
}

function get_new_mob(action_id){
	if(available_actions[action_id]['possible_monsters'] != undefined)
	{
		var total_mob_chances = 0;
		var chosen_mob_group = false;
		$.each(available_actions[action_id]['possible_monsters'], function(mob_group_id, mob_group_info){
			total_mob_chances += mob_group_info['chance'];
		});
		var chosen_mob_group_chance = Math.random() * total_mob_chances;
		$.each(available_actions[action_id]['possible_monsters'], function(mob_group_id, mob_group_info){
			chosen_mob_group_chance -= mob_group_info['chance'];
			if(chosen_mob_group_chance <= 0 && chosen_mob_group === false)
			{
				chosen_mob_group = mob_group_id;
			}
		});

		var mobs = {};
		$.each(available_actions[action_id]['possible_monsters'][chosen_mob_group]['monsters'], function(monster_group_id, monster_amounts){
			var mob_amount = Math.floor(Math.random() * (monster_amounts['max'] - monster_amounts['min'])) + monster_amounts['min'];
			mobs[monster_group_id] = {
				id: 		monster_amounts['id'],
				amount: 	mob_amount,
				current_damage: 0
			}
		});

		return mobs;
	}
	else
	{
		return {};
	}
}

function update_action_upgrade_buttons(){
	var action_id = current_action_id;
	var buy_upgrade_multiplier = get_current_upgrade_amount();
	var action_level = gamedata['known_locations'][current_location]['actions'][action_id]['level'];
	var actual_upgrade_levels = ((Math.floor(action_level / buy_upgrade_multiplier) + 1) * buy_upgrade_multiplier) - action_level;
	var parsed_action = '';
	parsed_action += 				'<button class="gold upgrade_button" onclick="upgrade_action()">';
	parsed_action += 					'Upgrade x' + actual_upgrade_levels;
	parsed_action += 				'</button>';
	if(action_level > 0)
	{
		
		if(gamedata['known_locations'][current_location]['actions'][action_id]['enabled'] == undefined || gamedata['known_locations'][current_location]['actions'][action_id]['enabled'] == true)
		{
			parsed_action += 			'<button class="upgrade_button" onclick="toggle_production()">Enabled</button>';
		}
		else
		{
			parsed_action += 			'<button class="danger upgrade_button" onclick="toggle_production()">Disabled</button>';
		}
	}
	parsed_action += 			'<button class="cool upgrade_button" onclick="toggle_upgrade_factor()">x' + buy_upgrade_multiplier + '</button>';
	if(action_level > 0 && gamedata['downgrade_mode'] != undefined && gamedata['downgrade_mode'] == true)
	{
		parsed_action += 				'<button class="danger upgrade_button" onclick="degrade_action()">';
		parsed_action += 					'Downgrade';
		parsed_action += 				'</button>';
	}
	$('.upgrade_action_buttons').html(parsed_action);
}

function update_action_upgrade_cost(){
	var action_id = current_action_id;
	var min_upgrade_cost = 0;
	if(available_actions[action_id]['upgrade_item'] != undefined && available_items[available_actions[action_id]['upgrade_item']] != undefined)
	{
		min_upgrade_cost = available_items[available_actions[action_id]['upgrade_item']]['value'];
	}
	var buy_upgrade_multiplier = get_current_upgrade_amount();
	var action_level = gamedata['known_locations'][current_location]['actions'][action_id]['level'];
	var actual_upgrade_levels = ((Math.floor(action_level / buy_upgrade_multiplier) + 1) * buy_upgrade_multiplier) - action_level;
	var action_upgrade_cost = calculate_new_action_cost(action_level, 1 * available_actions[action_id]['passive_factor'], actual_upgrade_levels, min_upgrade_cost);
	var action_upgade_text = 'coins';
	var action_upgade_id = 'coins';

	if(available_actions[action_id]['upgrade_item'] != undefined && available_items[available_actions[action_id]['upgrade_item']] != undefined)
	{
		action_upgade_id = available_actions[action_id]['upgrade_item'];
		action_upgrade_cost = Math.ceil(action_upgrade_cost / available_items[action_upgade_id]['value']);
		action_upgade_text = available_items[action_upgade_id]['name'];
	}
	var parsed_cost = '';
	var have_enough = 'enough';
	if(action_upgrade_cost > get_item_owned_amount(action_upgade_id)){have_enough = 'not_enough';}
	var bonus_level = '';
	if(current_location == working_location && action_id == working_action)
	{
		bonus_level = ' +' + Math.ceil((get_active_work_effect() + (gamedata['prestige'] * prestige_work_level_bonus)) / available_actions[action_id]['passive_factor']);
		bonus_level = '*';
	}
	parsed_cost = 'Passive level: ' + action_level + bonus_level + '<br/>Upgrade cost: <span class="item_' + action_upgade_id + ' ' + have_enough + '" style="color:' + get_percent_color(get_item_owned_amount(action_upgade_id), action_upgrade_cost) + '" attr-min-required="' + action_upgrade_cost + '">' + nFormatter(get_item_owned_amount(action_upgade_id), 3) + '</span> / ' + nFormatter(action_upgrade_cost, 3) + ' ' + action_upgade_text + '';
	$('.upgrade_action_cost').html(parsed_cost);

	
	var passive_production = (available_actions[action_id]['chance'] * (base_skill_bonus + (gamedata['known_locations'][current_location]['actions'][action_id]['level'] / passive_level_effect)) * passive_production_factor) * available_actions[action_id]['passive_factor'];
	if(passive_production > 0)
	{
		var percent_complete = gamedata['known_locations'][current_location]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed'];
		var action_time = 					1 / passive_production;
		action_time = 					Math.ceil(action_time * 100) / 100;
		if(action_time > gamedata['known_locations'][current_location]['actions'][action_id]['level'] / 10){action_time = Math.ceil(action_time * 10) / 10;}
		if(action_time > gamedata['known_locations'][current_location]['actions'][action_id]['level']){action_time = Math.ceil(action_time);}
		var action_time_left = Math.ceil(action_time - (action_time * percent_complete));
		$('.explore_time').html(seconds_to_time(action_time_left) + ' / ' + seconds_to_time(action_time));
	}
	else
	{
		$('.explore_time').html('');
	}
	
}

function get_active_work_effect(){
	var temp_active_work_effect = active_work_effect + 0;

	if(gamedata['temp_bonusses'] == undefined)
	{
		gamedata['temp_bonusses'] = {};
	}
	$.each(gamedata['temp_bonusses'], function(bonus_id, bonus_info)
	{
		if(bonus_info['max_time'] >= new Date().getTime() && available_items[bonus_id]['consumable']['type'] == 'work_effect')
		{
			temp_active_work_effect += available_items[bonus_id]['consumable']['amount'];
		}
		if(bonus_info['max_time'] < new Date().getTime())
		{
			delete gamedata['temp_bonusses'][bonus_id];
			$('.item_container_' + bonus_id + '.consuming').remove();
			update_action_upgrade_cost();
		}
	});

	return temp_active_work_effect;
}

function get_active_luck(){
	var temp_active_luck = 0;

	if(gamedata['temp_bonusses'] == undefined)
	{
		gamedata['temp_bonusses'] = {};
	}
	$.each(gamedata['temp_bonusses'], function(bonus_id, bonus_info)
	{
		if(bonus_info['max_time'] >= new Date().getTime() && available_items[bonus_id]['consumable']['type'] == 'luck')
		{
			temp_active_luck += available_items[bonus_id]['consumable']['amount'];
		}
		if(bonus_info['max_time'] < new Date().getTime())
		{
			delete gamedata['temp_bonusses'][bonus_id];
			$('.item_container_' + bonus_id + '.consuming').remove();
			if($('#content_current_action').hasClass('active'))
			{
				show_current_action();
			}
		}
	});

	return temp_active_luck;
}

function toggle_upgrade_factor(){
	if(buy_upgrade_factor < 5)
	{
		buy_upgrade_factor++;
	}
	else
	{
		buy_upgrade_factor = 0;
	}
	update_action_upgrade_cost();
	update_action_upgrade_buttons();
}

function get_current_upgrade_amount(){
	var upgrade_levels = 1;
	if(buy_upgrade_factor == 1){upgrade_levels = 5;}
	if(buy_upgrade_factor == 2){upgrade_levels = 10;}
	if(buy_upgrade_factor == 3){upgrade_levels = 25;}
	if(buy_upgrade_factor == 4){upgrade_levels = 50;}
	if(buy_upgrade_factor == 5){upgrade_levels = 100;}
	return upgrade_levels;
}

function toggle_production(){
	if(gamedata['known_locations'][current_location]['actions'][current_action_id]['enabled'] == undefined || gamedata['known_locations'][current_location]['actions'][current_action_id]['enabled'] == true)
	{
		gamedata['known_locations'][current_location]['actions'][current_action_id]['enabled'] = false;
	}
	else
	{
		gamedata['known_locations'][current_location]['actions'][current_action_id]['enabled'] = true;
	}
	saveToLocalStorage();
	update_action_upgrade_buttons();
}
function upgrade_location(location_id){
	var location_level = gamedata['known_locations'][location_id]['level'];
	var can_upgrade = true;
	$.each(available_locations[current_location]['upgrade_cost'], function(item_id, amount){
		var real_amount = calculate_new_location_cost(location_level, amount);
		if(item_id == 'coins' && gamedata['coins'] < real_amount)
		{
			can_upgrade = false;
		}
		if(available_items[item_id] != undefined && gamedata['inventory'][item_id] < real_amount)
		{
			can_upgrade = false;
		}
	});
	if(can_upgrade == true)
	{
		$.each(available_locations[current_location]['upgrade_cost'], function(item_id, amount){
			var real_amount = calculate_new_location_cost(location_level, amount);
			if(item_id == 'coins')
			{
				gamedata['coins'] -= real_amount;
			}
			if(available_items[item_id] != undefined)
			{
				gain_item(item_id, real_amount * -1);
			}
		});
		gamedata['known_locations'][location_id]['level']++;
		saveToLocalStorage();
		show_current_location();
	}
}

function unlock_action(action_id){
	var location_id = current_location;
	var location_level = gamedata['known_locations'][location_id]['level'];
	location_level = find_action_number(location_id, action_id);
	var can_upgrade = true;
	var upgrade_cost = available_locations[current_location]['upgrade_cost'];
	if(available_actions[action_id]['unlock_cost'] != undefined)
	{
		upgrade_cost = available_actions[action_id]['unlock_cost'];
	}
	$.each(upgrade_cost, function(item_id, amount){
		var real_amount = amount;
		if(available_actions[action_id]['unlock_cost'] == undefined)
		{
			real_amount = calculate_new_location_cost(location_level, amount);
		}
		if(item_id == 'coins' && gamedata['coins'] < real_amount)
		{
			can_upgrade = false;
		}
		if(item_id != 'coins' && (available_items[item_id] == undefined || gamedata['inventory'][item_id] == undefined || gamedata['inventory'][item_id] < real_amount))
		{
			can_upgrade = false;
		}
	});
	if(can_upgrade == true)
	{
		$.each(upgrade_cost, function(item_id, amount){
			var real_amount = amount;
			if(available_actions[action_id]['unlock_cost'] == undefined)
			{
				real_amount = calculate_new_location_cost(location_level, amount);
			}
			gain_item(item_id, real_amount * -1);	
		});
		gamedata['known_locations'][location_id]['actions'][action_id] = {level: 1};
		saveToLocalStorage();
		current_action_id = action_id;
		show_content('current_action');
	}
}

function find_action_number(location_id, action_id){
	var action_number = 0;
	var found_action = false;
	$.each(available_locations[location_id]['actions'], function(temp_action_id, action_info){
		if(temp_action_id != action_id && found_action == false)
		{
			action_number++;
		}
		if(temp_action_id == action_id)
		{
			found_action = true;
		}
	});
	return action_number;
}

function upgrade_action(){
	if(gamedata['known_locations'][current_location] != undefined && gamedata['known_locations'][current_location]['actions'][current_action_id] != undefined)
	{
		var min_upgrade_cost = 0;
		if(available_actions[current_action_id]['upgrade_item'] != undefined && available_items[available_actions[current_action_id]['upgrade_item']] != undefined)
		{
			min_upgrade_cost = available_items[available_actions[current_action_id]['upgrade_item']]['value'];
		}
		var buy_upgrade_multiplier = get_current_upgrade_amount();
		var action_level = gamedata['known_locations'][current_location]['actions'][current_action_id]['level'];
		var actual_upgrade_levels = ((Math.floor(action_level / buy_upgrade_multiplier) + 1) * buy_upgrade_multiplier) - action_level;
		var action_upgrade_cost = calculate_new_action_cost(action_level, 1 * available_actions[current_action_id]['passive_factor'], actual_upgrade_levels, min_upgrade_cost);
		var action_upgade_text = 'coins';
		var action_upgade_id = 'coins';
		if(available_actions[current_action_id]['upgrade_item'] != undefined && available_items[available_actions[current_action_id]['upgrade_item']] != undefined)
		{
			action_upgade_id = available_actions[current_action_id]['upgrade_item'];
			action_upgrade_cost = Math.ceil(action_upgrade_cost / available_items[action_upgade_id]['value']);
			action_upgade_text = available_items[action_upgade_id]['name'];
		}
		get_item_owned_amount(action_upgade_id);
		if(get_item_owned_amount(action_upgade_id) >= action_upgrade_cost)
		{

			gain_item(action_upgade_id, action_upgrade_cost * -1)
			gamedata['known_locations'][current_location]['actions'][current_action_id]['level'] += actual_upgrade_levels;
			saveToLocalStorage();
			update_action_upgrade_cost();
			update_action_upgrade_buttons();
			//show_current_action();
		}
	}
	else
	{

	}
}

function degrade_action(){
	if(gamedata['known_locations'][current_location]['actions'][current_action_id]['level'] > 0)
	{
		gamedata['known_locations'][current_location]['actions'][current_action_id]['level']--;
		saveToLocalStorage();
		show_current_action();
	}
}

function check_ticks(){

	if(gamedata['last_production_tick'] == undefined)
	{
		gamedata['last_production_tick'] = new Date().getTime();
	}
	var time_since_last_tick = new Date() - gamedata['last_production_tick'];
	if(time_since_last_tick > 1000)
	{
		var seconds_passed = Math.floor(time_since_last_tick / 1000);
		if(seconds_passed > 1000)
		{
			seconds_passed = 1000;
		}
		//var ticks_passed = Math.floor(Math.sqrt(time_since_last_tick / 1000));
		var ticks_passed = seconds_passed + 0;
		if(ticks_passed > 5){ticks_passed = Math.floor(ticks_passed / 5) + 4;}
		if(ticks_passed > 10)
		{
			working_location = 'none';
			working_action = 'none';
			show_content('loading');
			$('.processing_amount').html('Processing ' + seconds_to_time(Math.floor(time_since_last_tick / 1000)));
		}
		//console.log(ticks_passed);
		for (var i = ticks_passed - 1; i >= 0; i--) {
			$.each(gamedata['known_locations'], function(location_id, location_info){
				$.each(location_info['actions'], function(action_id, action_info){
					if(available_actions[action_id]['type'] == undefined || available_actions[action_id]['type'] == 'basic')
					{
						if((action_info['level'] > 0 || (location_id == working_location && action_id == working_action)) && (action_info['enabled'] == undefined || action_info['enabled'] == true))
						{
							perform_action(action_id, location_id, action_info['level'], i);
						}
					}
					if(available_actions[action_id]['type'] != undefined && available_actions[action_id]['type'] == 'combat')
					{
						if(action_info['assigned_units'] != undefined && count_object(action_info['assigned_units']) > 0)
						{
							perform_action(action_id, location_id, 1, i);
						}
					}
				});
			});
		}
		if(gamedata['passive_exploration'] == undefined){gamedata['passive_exploration'] = 0;}
		if(gamedata['passive_exploration'] > 0)
		{
			gamedata['exploration']['current_progress'] += ticks_passed * gamedata['passive_exploration'];
			//update_explore_progress_bar();
		}

		if(ticks_passed < 10 && $('#content_loading').hasClass('active'))
		{
			show_content('home');
		}

		gamedata['last_production_tick'] += seconds_passed * 1000;
		if(gamedata['last_production_tick'] < new Date() - (360000 * 24))
		{
			gamedata['last_production_tick'] = new Date() - (360000 * 24);
		}
	}
};


function calculate_new_action_cost(level, amount, level_amount, min_cost){
	var total_cost = 0;
	var upgrade_multiplier = ((1 / 55) ) + 1;
	if(level_amount == undefined){level_amount = 1;}
	if(min_cost == undefined || min_cost == 0){min_cost = 0;}else{amount *= 1;}
	for(levels_done = 0; levels_done < level_amount; levels_done++)
	{
		var new_location_cost = amount + 0;
		/*for(i = 1; i < level; i++)
		{
			new_location_cost *= upgrade_multiplier;
		}*/
		//new_location_cost = amount * level * (1 + ((level -1) / 5));
		//new_location_cost = (amount * level * (1 + (level / 5))) - (amount / 5);

		new_location_cost = base_upgrade_cost + (level * upgrade_cost_increase) * amount;

		new_location_cost = new_location_cost * (1 + (level / upgrade_multi_per));

		/*if(Math.floor(level / upgrade_multi_per) > 0)
		{
			new_location_cost = new_location_cost * (Math.floor(level / upgrade_multi_per)) * upgrade_multi;
		}*/
		
		var min_total_cost = min_cost * (Math.ceil(new_location_cost / min_cost));
		if(new_location_cost < min_total_cost){new_location_cost = min_total_cost;}
		total_cost += Math.round(new_location_cost);
		//console.log(total_cost);
		level += 1;
	}
	return total_cost;
}

function calculate_new_location_cost(level, amount){
	var new_location_cost = amount + 0;
	for(i = 1; i < level; i++)
	{
		new_location_cost *= 5;
	}
	return Math.floor(new_location_cost);
}

function calculate_explore_location_cost(level, amount){
	if(level < 0)
	{
		return 10;
	}
	else
	{
		var new_location_cost = amount + 0;
		for(i = 1; i <= level; i++)
		{
			new_location_cost *= 2;
		}
		return Math.floor(new_location_cost);
	}
}

function perform_action(action_id, location_id, forced_level, hide_visible_effects){
	var skill_level = effective_skill_level(available_actions[action_id]['skill']);

	if(forced_level != undefined)
	{
		skill_level = forced_level;
	}
	else
	{
		if(gamedata['known_locations'][current_location] != undefined && gamedata['known_locations'][current_location]['actions'][action_id] != undefined)
		{
			skill_level += gamedata['known_locations'][current_location]['actions'][action_id]['level'];
		}
		location_id = current_location;
	}
	if(location_id == working_location && action_id == working_action)
	{
		skill_level += Math.ceil(((get_active_work_effect() + (gamedata['prestige'] * prestige_work_level_bonus))) / available_actions[action_id]['passive_factor']);
	}
	var action_success_amount = (available_actions[action_id]['chance'] * (base_skill_bonus + (skill_level / passive_level_effect))) * passive_production_factor;
	
	if(available_actions[action_id]['type'] == undefined || available_actions[action_id]['type'] == 'basic')
	{
		var can_perform = true;
		var max_perform = 100000000;
		$.each(available_actions[action_id]['cost'], function(cost_id, cost_amount){
			var cost_owned = 0;
			if(available_items[cost_id] != undefined)
			{
				cost_owned = get_item_owned_amount(cost_id);
				var max_this = Math.floor(cost_owned / cost_amount);
				if(max_perform > max_this){max_perform = max_this;}
				if(cost_owned < cost_amount){can_perform = false;}
			}
		});

		if(can_perform == true)
		{
			var action_result_amount = round_by_percent(action_success_amount);
			var unrounded_action_result_amount = action_success_amount + 0;
			if(available_actions[action_id]['result_amount'] != undefined && action_result_amount >= 1)
			{
				action_result_amount = Math.floor(action_result_amount * available_actions[action_id]['result_amount']);
			}
			if(available_actions[action_id]['progress_needed'] != undefined)
			{
				if(gamedata['known_locations'][location_id]['actions'][action_id]['progress'] == undefined){gamedata['known_locations'][location_id]['actions'][action_id]['progress'] = 0;}
				if(forced_level != undefined && available_actions[action_id]['passive_factor'] != undefined)
				{
					unrounded_action_result_amount *= available_actions[action_id]['passive_factor'];
				}
				gamedata['known_locations'][location_id]['actions'][action_id]['progress'] += unrounded_action_result_amount;
				if(gamedata['known_locations'][location_id]['actions'][action_id]['progress'] >= available_actions[action_id]['progress_needed'])
				{
					action_result_amount = Math.floor(gamedata['known_locations'][location_id]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed']);
					gamedata['known_locations'][location_id]['actions'][action_id]['progress'] -= available_actions[action_id]['progress_needed'] * action_result_amount;
					if(action_result_amount > max_perform){action_result_amount = max_perform;}
					max_peform = action_result_amount;
					if(available_actions[action_id]['reward_factor'] != undefined)
					{
						action_result_amount *= available_actions[action_id]['reward_factor'];
					}
					var old_progress_id = gamedata['known_locations'][location_id]['actions'][action_id]['progress_id']+0;
					
					gamedata['known_locations'][location_id]['actions'][action_id]['progress_id']++;
					var new_progress_id = gamedata['known_locations'][location_id]['actions'][action_id]['progress_id']+0;
					
					if(current_location == location_id && action_id == current_action_id)
					{
						$('.explore_progress_bar_' + old_progress_id).css('width','100%');
						$('.explore_progress_bar_' + old_progress_id).css('background-color','rgba(255,255,255,1)');
						setTimeout(function(){
							$('.explore_progress_bar_' + old_progress_id).css('opacity','0');
						},200);
						setTimeout(function(){
							$('.explore_progress_bar_' + old_progress_id).remove();
						},500);
						$('.explore_bar').append('<div class="explore_progress_bar explore_progress_bar_' + new_progress_id + '" style="width:0%"></div>');
						setTimeout(function(){
							var new_bar_width = gamedata['known_locations'][location_id]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed'] * 100;
							var current_bar_width = $('.explore_progress_bar_' + new_progress_id).width();
							if(current_bar_width == 0)
							{
								$('.explore_progress_bar_' + new_progress_id ).css('width', new_bar_width + '%');
							}
						},200);
					}
				}
				else
				{
					var current_progress_percent = gamedata['known_locations'][location_id]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed'] * 100;
					if(current_location == location_id && action_id == current_action_id)
					{
						$('.explore_progress_bar_' + gamedata['known_locations'][location_id]['actions'][action_id]['progress_id']).css('width', current_progress_percent + '%');
						//console.log( current_progress_percent  );
					}
					action_result_amount = 0;
				}

				if(current_location == location_id && action_id == current_action_id)
				{
					var passive_production = (available_actions[action_id]['chance'] * (base_skill_bonus + (gamedata['known_locations'][location_id]['actions'][action_id]['level'] / passive_level_effect)) * passive_production_factor) * available_actions[action_id]['passive_factor'];
					if(passive_production > 0)
					{
						var percent_complete = gamedata['known_locations'][location_id]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed'];
						var action_time = 					1 / passive_production;
						action_time = 					Math.ceil(action_time * 100) / 100;
						if(action_time > gamedata['known_locations'][location_id]['actions'][action_id]['level'] / 10){action_time = Math.ceil(action_time * 10) / 10;}
						if(action_time > gamedata['known_locations'][location_id]['actions'][action_id]['level']){action_time = Math.ceil(action_time);}
						var action_time_left = Math.ceil(action_time - (action_time * percent_complete));
						$('.explore_time').html(seconds_to_time(action_time_left) + ' / ' + seconds_to_time(action_time));
					}
					else
					{
						$('.explore_time').html('');
					}
				}
			}
			if(action_result_amount > 0 /*|| forced_level == undefined*/)
			{
				check_achievements(undefined, available_actions[action_id]['skill'], 1);
				
				$.each(available_actions[action_id]['cost'], function(cost_id, cost_amount){
					if(available_items[cost_id] != undefined)
					{
						gain_item(cost_id, max_peform * cost_amount * -1, hide_visible_effects);
					}
				});
			}
			var current_luck = get_active_luck() / 100;
			if(action_result_amount > 0)
			{
				var gained_anything = false;
				if(available_actions[action_id]['item_id'] != undefined)
				{
					gained_anything = true;
					var item_gained_factor = get_item_gain_factor(available_actions[action_id]['item_id'], available_actions[action_id]['skill']);
					var actual_item_gained_amount = (action_result_amount * item_gained_factor);
					actual_item_gained_amount += current_luck;
					actual_item_gained_amount = round_by_percent(actual_item_gained_amount);
					gain_item(available_actions[action_id]['item_id'], actual_item_gained_amount);
				}
				if((location_id == undefined || current_location == location_id) && (hide_visible_effects == undefined || hide_visible_effects == false))
				{
					//var parsed_floating_text = parse_floating_text('+' + action_result_amount + ' ' + available_items[available_actions[action_id]['item_id']]['name'], 'rgba(0,150,0,1)');
					//$('.action_bar_' + action_id).append(parsed_floating_text);
					var parsed_floating_text = parse_floating_text('+' + actual_item_gained_amount, 'rgba(100,200,100,1)');
					$('.action_bar_' + action_id + ' .item_container_' + available_actions[action_id]['item_id'] + ' .item_name').append(parsed_floating_text);
				}
				$.each(available_actions[action_id]['bonus_loot'], function(loot_id, loot_chance){
					var item_gained_factor = get_item_gain_factor(loot_id, available_actions[action_id]['skill']);
					var action_bonus_result_amount = (loot_chance / 100 * action_result_amount * item_gained_factor);
					action_bonus_result_amount += current_luck;
					action_bonus_result_amount = round_by_percent(action_bonus_result_amount);
					if(action_bonus_result_amount > 0)
					{
						gained_anything = true;
						gain_item(loot_id, action_bonus_result_amount);
						if((location_id == undefined || current_location == location_id) && (hide_visible_effects == undefined || hide_visible_effects == false))
						{
							//var parsed_floating_text = parse_floating_text('+' + action_result_amount + ' ' + available_items[loot_id]['name'], 'rgba(100,200,100,1)');
							var parsed_floating_text = parse_floating_text('+' + action_bonus_result_amount, 'rgba(100,200,100,1)');
							$('.action_bar_' + action_id + ' .item_container_' + loot_id + ' .item_name').append(parsed_floating_text);
						}
					}
				});
				//gain_skill_xp(available_actions[action_id]['skill'],available_items[available_actions[action_id]['item_id']]['value']);
				if(forced_level == undefined)
				{
					gain_skill_xp(available_actions[action_id]['skill'],0.5);
				}
				if(gained_anything == false)
				{
					var parsed_floating_text = '';
					if(available_actions[action_id]['fail_text'] != undefined)
					{
						parsed_floating_text = parse_floating_text(available_actions[action_id]['fail_text'], 'rgba(150,0,0,1)', true);
					}
					else
					{
						parsed_floating_text = parse_floating_text('failed', 'rgba(150,0,0,1)', true);
					}
					$('.action_bar_' + action_id).append(parsed_floating_text);
				}
			}
			else
			{
				if((location_id == undefined || current_location == location_id) && (hide_visible_effects == undefined || hide_visible_effects == false) && available_actions[action_id]['progress_needed'] == undefined)
				{
					var parsed_floating_text = '';
					if(available_actions[action_id]['fail_text'] != undefined)
					{
						parsed_floating_text = parse_floating_text(available_actions[action_id]['fail_text'], 'rgba(150,0,0,1)', true);
					}
					else
					{
						parsed_floating_text = parse_floating_text('failed', 'rgba(150,0,0,1)', true);
					}
					$('.action_bar_' + action_id).append(parsed_floating_text);
				}
				if(forced_level == undefined)
				{
					gain_skill_xp(available_actions[action_id]['skill'],0.1);
				}
			}

			
			if(forced_level == undefined)
			{
				var skill_level = effective_skill_level(available_actions[action_id]['skill']);
				var skill_percent = get_skill_percent(available_actions[action_id]['skill']);

				if(gamedata['known_locations'][current_location] != undefined && gamedata['known_locations'][current_location]['actions'][action_id] != undefined)
				{
					skill_level += gamedata['known_locations'][current_location]['actions'][action_id]['level'] * passive_production_factor;
				}
				
				var action_success_amount = (available_actions[action_id]['chance'] * skill_level);

				if(hide_visible_effects == undefined || hide_visible_effects == false)
				{
					if(action_success_amount < 1)
					{
						$('.action_bar_' + action_id + ' .action_success_amount').html('Success chance: ' + nFormatter((action_success_amount * 100),2) + '%');
					}
					else
					{
						$('.action_bar_' + action_id + ' .action_success_amount').html('Average result: ' + nFormatter(action_success_amount,2));
					}
				}
			}
		}
		else
		{
			if(available_actions[action_id]['progress_needed'] != undefined)
			{
				//gamedata['known_locations'][location_id]['actions'][action_id]['progress'] = 0;
				var current_progress_percent = gamedata['known_locations'][location_id]['actions'][action_id]['progress'] / available_actions[action_id]['progress_needed'] * 100;
				if(current_location == location_id && action_id == current_action_id)
				{
					$('.explore_progress_bar_' + gamedata['known_locations'][location_id]['actions'][action_id]['progress_id']).css('width', current_progress_percent + '%');
					//console.log( current_progress_percent  );
				}
			}
		}
	}
	if(available_actions[action_id]['type'] != undefined && available_actions[action_id]['type'] == 'combat')
	{
		if(gamedata['known_locations'][location_id]['actions'][action_id]['assigned_units'] != undefined && count_object(gamedata['known_locations'][location_id]['actions'][action_id]['assigned_units']) > 0 && count_object(gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs']) > 0)
		{
			var units = gamedata['known_locations'][location_id]['actions'][action_id]['assigned_units'];
			var monsters = gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs'];
			
			$.each(monsters, function(unit_id, unit_info){
				if(available_monsters[unit_id] != undefined && available_monsters[unit_id]['abilities'] != undefined)
				{
					$.each(available_monsters[unit_id]['abilities'], function(ability_id, ability_level){
						if(hide_visible_effects == undefined || hide_visible_effects == false)
						{
							perform_ability(unit_id, unit_info['amount'], ability_id, ability_level, units, true, gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs_id']);
						}
						else
						{
							perform_ability(unit_id, unit_info['amount'], ability_id, ability_level, units, false, gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs_id']);
						}
					});
				}
			});
			$.each(units, function(unit_id, unit_info){
				if(available_items[unit_id] != undefined && available_items[unit_id]['stats'] != undefined && available_items[unit_id]['stats']['abilities'] != undefined)
				{
					$.each(available_items[unit_id]['stats']['abilities'], function(ability_id, ability_level){
						if(hide_visible_effects == undefined || hide_visible_effects == false)
						{
							perform_ability(unit_id, unit_info['amount'], ability_id, ability_level, monsters, true, gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs_id']);
						}
						else
						{
							perform_ability(unit_id, unit_info['amount'], ability_id, ability_level, monsters, false, gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs_id']);
						}
					});
				}
			});
			if(hide_visible_effects == undefined || hide_visible_effects == false)
			{
				update_combat_units();
			}
		}
		else
		{
			if(count_object(gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs']) == 0 && count_object(gamedata['known_locations'][location_id]['actions'][action_id]['assigned_units']) > 0)
			{
				gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs'] = get_new_mob(action_id);
				if(gamedata['highest_mobs_id'] == undefined){gamedata['highest_mobs_id'] = 0;}
				gamedata['highest_mobs_id']++;
				gamedata['known_locations'][location_id]['actions'][action_id]['current_mobs_id'] = gamedata['highest_mobs_id'];
			}
			if(hide_visible_effects == undefined || hide_visible_effects == false)
			{
				update_combat_units();
			}
		}
	}

	//parse_all_actions(current_location);
}

var highest_loot_id = 0;

function perform_ability(unit_id, unit_amount, ability_id, ability_level, enemies, show, unique_enemy_id){
	if(available_abilities[ability_id] != undefined)
	{
		var current_ability = available_abilities[ability_id];
		var current_unit = false;
		var current_target = false;
		var combat_class = '';
		var target_amount = 1;
		var target_type = 'items';
		if(available_items[unit_id] != undefined)
		{
			current_unit = available_items[unit_id]['stats'];
		}
		if(available_monsters[unit_id] != undefined)
		{
			current_unit = available_monsters[unit_id];
			combat_class = 'c_';
		}
		if(current_unit != false)
		{
			if(current_ability['type'] == 'damage')
			{
				var target = get_random_key_from_object(enemies);
				if(available_items[target] != undefined)
				{
					current_target = available_items[target]['stats'];
				}
				if(available_monsters[target] != undefined)
				{
					current_target = available_monsters[enemies[target]['id']];
					target_type = 'monster';
					console.log(current_target);
				}

				if(current_target != false)
				{
					var has_hit = false;
					var hit_rating = current_unit['hit'];
					var evade_rating = current_target['evade'];
					if(Math.random() <= (hit_rating / evade_rating))
					{
						has_hit = true;
					}

					if(has_hit == false && show == true)
					{
						//console.log('.action_bar_' + current_action_id + ' .item_container_' + target + ' .item_name');
						//var parsed_floating_text = parse_floating_text('miss', 'rgba(200,200,200,0.5)');
						//$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target + ' .item_name').append(parsed_floating_text);
					}
					if(has_hit == true)
					{
						var max_damage_dealt = (current_unit['power'] * (unit_amount));
						max_damage_dealt = max_damage_dealt / (1 + (current_target['armor'] / 10));
						var damage_dealt = round_by_percent(Math.random() * max_damage_dealt);
						if(damage_dealt > 0){
							enemies[target]['current_damage'] += damage_dealt;
							if(enemies[target]['current_damage'] >= current_target['health'])
							{
								$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target).addClass('hit');
								setTimeout(function(){
									$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target).removeClass('hit');
								},200);
								var units_lost = Math.floor(enemies[target]['current_damage'] / current_target['health'])
								enemies[target]['amount'] -= units_lost;
								enemies[target]['current_damage'] = enemies[target]['current_damage'] - (units_lost * current_target['health']);
								if(enemies[target]['amount'] < 1)
								{
									delete enemies[target];
									if(show == true && current_action_id != '')
									{
										$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target).addClass('dead');
										$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target + '' + '_' + unique_enemy_id).addClass('dead');
										$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target + '' + '_' + unique_enemy_id + ' .monster_health_bar').css('width','0%');
										$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target + '' + '_' + unique_enemy_id + ' .owned_amount').html('0');
										setTimeout(function(){
											$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target).remove();
											$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target + '' + '_' + unique_enemy_id).remove();
										},2000);
									}
								}
								if(units_lost > 0 && target_type == 'monster')
								{
									$.each(current_target['loot'], function(loot_id, loot_percent){
										var loot_amount = ((loot_percent * units_lost) / 100);
										var item_gained_factor = get_item_gain_factor(loot_id, undefined);
										var actual_item_gained_amount = round_by_percent(loot_amount * item_gained_factor);
										if(actual_item_gained_amount > 0)
										{
											gain_item(loot_id, actual_item_gained_amount);
											if(show == true && current_action_id != '')
											{
												highest_loot_id++;
												var temp_loot_id = highest_loot_id + 0;
												var parsed_loot = parse_item(loot_id, actual_item_gained_amount);
												$('.action_bar_' + current_action_id + ' .loot_container').append('<div class="temp_loot temp_loot_id_' + temp_loot_id + '">' + parsed_loot + '</div>');
												setTimeout(function(){
													$('.temp_loot_id_' + temp_loot_id + ' .item').addClass('dead');
												},4000);
												setTimeout(function(){
													$('.temp_loot_id_' + temp_loot_id).remove();
												},5000);
												/*console.log('.action_bar_' + current_action_id + ' .item_container_' + loot_id + ' .item_name');
												var parsed_floating_text = parse_floating_text('+' + actual_item_gained_amount, 'rgba(100,200,100,1)');
												$('.action_bar_' + current_action_id + ' .item_container_' + loot_id + ' .item_name').append(parsed_floating_text);*/
											}
										}
									});
								}
							}
						}
					}
					if(has_hit == true && show == true && damage_dealt > 0)
					{
						var parsed_floating_text = parse_floating_text(damage_dealt, 'rgba(200,0,0,1)');
						if(damage_dealt < 1)
						{
							parsed_floating_text = parse_floating_text(damage_dealt, 'rgba(200,0,0,0.5)');
						}
						$('.action_bar_' + current_action_id + ' .item_container_' + combat_class + target + ' .item_name').append(parsed_floating_text);
					}
				}
			}
		}
		
	}
};

function get_item_gain_factor(item_id, skill_id){
	var item_gain_factor = 1;

	if(gamedata['ap_bonusses'] == undefined)
	{
		gamedata['ap_bonusses'] = {};
	}

	$.each(gamedata['ap_bonusses'], function(achievement_id, achievement_info){
		if(available_ap_bonusses[achievement_id] != undefined && achievement_info['level'] > 0 && (available_ap_bonusses[achievement_id]['item_bonus'][item_id] != undefined || available_ap_bonusses[achievement_id]['skill_bonus'][skill_id] != undefined))
		{
			if(available_ap_bonusses[achievement_id]['item_bonus'][item_id] != undefined)
			{
				item_gain_factor += (achievement_info['level'] * available_ap_bonusses[achievement_id]['item_bonus'][item_id] / 100);
			}
			if(available_ap_bonusses[achievement_id]['skill_bonus'][skill_id] != undefined)
			{
				item_gain_factor += (achievement_info['level'] * available_ap_bonusses[achievement_id]['skill_bonus'][skill_id] / 100);
			}
		}
	});

	return item_gain_factor;
}