var last_started_action = '';
var last_combat_wave_type = '';
function start_action(action_id, continuing){
	if(all_actions[action_id] != undefined)
	{
		last_started_action = action_id;
		var action_info = all_actions[action_id];
		if(action_info['type'] == 'combat')
		{
			if(continuing == undefined || continuing == false)
			{
				reset_combat();
				last_combat_wave_type = '';
				$('.end_combat_button').addClass('hidden');
				combat_timeout_couter++;
				combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
					$('.end_combat_button').removeClass('hidden');
				},(global_cooldown * 10));
			}
			else
			{
				
			}
			var encounter_id = false;
			if(last_combat_wave_type == 'treasure')
			{
				encounter_id = get_random_encounter(action_id, last_combat_wave_type);
			}
			else
			{
				encounter_id = get_random_encounter(action_id);
			}
			
			if(encounter_id != false)
			{
				var chosen_encounter = all_actions[action_id]['possible_encounters'][encounter_id];
				
				if(chosen_encounter['type'] == 'combat')
				{
					spawn_units(chosen_encounter['units'], 2);
					show_content('combat');
					$('.player_target').removeClass('hidden');

					var start_combat_text = capitalizeFirstLetter(all_actions[action_id]['name']) + '<br/>';
					if(combat_wave > 1)
					{
						start_combat_text += '<span class="small">stage ' + combat_wave + '</span>';
					}
					else
					{
						show_game_message(start_combat_text, 'rgba(245, 160, 32,1)');
					}
					
					
					combat_alive = true;
				}
				if(chosen_encounter['type'] == 'treasure' && (last_combat_wave_type != 'treasure' || (continuing == undefined || continuing == false)))
				{
					show_content('combat');
					$('.player_target').addClass('hidden');
					//combat_wave -= 1;
					spawning_next = true;
					var parsed_treasure = parse_treasure(chosen_encounter);
					$('#content_combat').append(parsed_treasure);
					spawning_next = false;
					combat_alive = true;
					combat_timeout_couter++;
					combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
						$('#content_combat .treasure_container').addClass('fade_out');
					},2500);
					combat_timeout_couter++;
					combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
						$('#content_combat .treasure_container').remove();
					},3000);
					/*combat_timeout_couter++;
					combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){
						spawning_next = false;
						combat_alive = true;
					},3100);*/
				}
				/*if(chosen_encounter['type'] == 'treasure' && (last_combat_wave_type == 'treasure' && (continuing != undefined && continuing == true)))
				{
					start_action(action_id, continuing);
				}*/
				last_combat_wave_type = chosen_encounter['type'];
			}
			else
			{
				if(last_combat_wave_type == 'combat')
				{
					/*combat_timeout_couter++;
					combat_timeouts['timeout_' + combat_timeout_couter] = setTimeout(function(){*/
						end_combat();
					//},2000);
				}
				else
				{
					end_combat();
				}
			}
		}
		if(action_info['type'] == 'quest')
		{
			if(gamedata['busy_quests'][action_id] != undefined && check_quest_complete(action_id) == true)
			{
				delete gamedata['busy_quests'][action_id];
				gamedata['done_quests'][action_id] = true;
				$.each(action_info['goals'], function(goal_id, goal_info){
					if(goal_info['type'] == 'items')
					{
						gain_item(goal_info['target_id'], goal_info['amount'] * -1);
					}
				});
				$.each(action_info['rewards'], function(item_id, item_amount){
					gain_item(item_id, item_amount);
				});
				saveToLocalStorage();

				if(action_info['move_to_location_on_complete'] != undefined && all_locations[action_info['move_to_location_on_complete']] != undefined)
				{
					gamedata['current_location'] = action_info['move_to_location_on_complete'];
				}
				if(action_info['accept_quest_on_complete'] != undefined && all_actions[action_info['accept_quest_on_complete']] != undefined)
				{
					gamedata['busy_quests'][action_info['accept_quest_on_complete']] = {progress:{}};
					$.each(all_actions[action_info['accept_quest_on_complete']]['goals'], function(progress_id, progress_info){
						gamedata['busy_quests'][action_info['accept_quest_on_complete']]['progress'][progress_id] = 0;
					});
				}
				if(action_info['show_on_complete'] != undefined)
				{
					view_action(action_info['show_on_complete']);
				}
				else
				{
					show_content('current_location');
				}
			}
			if(gamedata['busy_quests'][action_id] == undefined && gamedata['done_quests'][action_id] == undefined)
			{
				gamedata['busy_quests'][action_id] = {progress:{}};
				$.each(action_info['goals'], function(progress_id, progress_info){
					gamedata['busy_quests'][action_id]['progress'][progress_id] = 0;
				});
				saveToLocalStorage();
				if(action_info['move_to_location_on_accept'] != undefined && all_locations[action_info['move_to_location_on_accept']] != undefined)
				{
					gamedata['current_location'] = action_info['move_to_location_on_accept'];
				}
				show_content('current_location');
				
			}
			
		}
		if(action_info['type'] == 'trade')
		{
			var can_trade = true;
			$.each(action_info['cost'], function(item_id, item_amount){
				if(get_item_owned_amount(item_id) < item_amount)
				{
					can_trade = false;
				}
			});
			if(can_trade == true)
			{
				play_sound_group('money');
				$.each(action_info['cost'], function(item_id, item_amount){
					gain_item(item_id, item_amount * -1);
				});
				$.each(action_info['rewards'], function(item_id, item_amount){
					gain_item(item_id, item_amount);
				});
				saveToLocalStorage();
				
				if($('#content_action_details').hasClass('active'))
				{
					view_action(action_id);
				}
				else
				{
					show_content('current_location');
				}
			}
		}
	}
}

function parse_treasure(treasure_info){
	var parsed_treasure = '';
	parsed_treasure += '<div class="cell col_1 row_1 treasure_container">';
	parsed_treasure += 		'<div class="action_details_name">' + capitalizeFirstLetter(treasure_info['name']) + '</div>';
	if(treasure_info['description'] != undefined)
	{
		parsed_treasure += 		'<div class="action_details_description">' + capitalizeFirstLetter(treasure_info['description']) + '</div>';
	}
	$.each(treasure_info['rewards'], function(item_id, item_info){
		var gained_amount = round_by_percent(item_info['min'] + (Math.random() * (item_info['max'] - item_info['min'])));
		if(gained_amount > 0)
		{
			gain_item(item_id, gained_amount);
			parsed_treasure += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + gained_amount + '</span>'));
		}
		
	});
	parsed_treasure += '</div>';
	return parsed_treasure;
}

function get_random_encounter(action_id, not_this_type){
	var chosen_encounter = false;
	if(all_actions[action_id]['possible_encounters'] != undefined)
	{
		var total_chance = 0;
		$.each(all_actions[action_id]['possible_encounters'], function(encounter_id, encounter_info){
			if((not_this_type == undefined || encounter_info['type'] != not_this_type) && check_can_encounter(action_id, encounter_id)){total_chance += encounter_info['chance'];}	
		});
		if(Math.random() * 100 < total_chance)
		{
			var chosen_encounter_chance = Math.random() * total_chance;
			$.each(all_actions[action_id]['possible_encounters'], function(encounter_id, encounter_info){
				if((not_this_type == undefined || encounter_info['type'] != not_this_type) && check_can_encounter(action_id, encounter_id))
				{
					chosen_encounter_chance -= encounter_info['chance'];
					if(chosen_encounter_chance <= 0 && chosen_encounter == false)
					{
						chosen_encounter = encounter_id;
					}
				}
			});
		}
	}
	return chosen_encounter;
}

function check_can_encounter(action_id, encounter_id){
	var can_encounter = true;
	var encounter_info = all_actions[action_id]['possible_encounters'][encounter_id];
	if(encounter_info['min_wave'] != undefined && encounter_info['min_wave'] > combat_wave)
	{
		can_encounter = false;
	}
	if(encounter_info['max_wave'] != undefined && encounter_info['max_wave'] < combat_wave)
	{
		can_encounter = false;
	}
	if(encounter_info['requirements'] != undefined && check_requirements(encounter_info['requirements']) == false)
	{
		can_encounter = false;
	}
	return can_encounter;
}

var active_action = '';
function view_action(action_id){
	active_action = action_id;
	show_content('action_details');
	var parsed_action_details = '';
	if(all_actions[action_id] != undefined)
	{
		var action_info = all_actions[action_id];
		if(action_info['type'] == 'quest')
		{
			parsed_action_details += 	'<div class="action_details_text quest_container">';
			parsed_action_details += 		'<div class="action_details_name">' + capitalizeFirstLetter(action_info['name']) + '</div>';
			var temp_description = '';
			if(action_info['description'] != undefined)
			{
				temp_description = 	'<div class="action_details_description">' + capitalizeFirstLetter(action_info['description']) + '</div>';
			}
			if(action_info['complete_description'] != undefined && gamedata['busy_quests'][action_id] != undefined && check_quest_complete(action_id) == true)
			{
				temp_description = 	'<div class="action_details_description">' + capitalizeFirstLetter(action_info['complete_description']) + '</div>';
			}
			parsed_action_details += temp_description;
			
			var quest_complete = true;
			$.each(action_info['goals'], function(goal_id, goal_info){
				var progress_percent = 0;
				var progress_amount = 0;
				if(goal_info['type'] == 'kills' || goal_info['type'] == 'stage_cleared')
				{
					if(gamedata['busy_quests'][action_id] != undefined && gamedata['busy_quests'][action_id]['progress'][goal_id] != undefined)
					{
						progress_amount = gamedata['busy_quests'][action_id]['progress'][goal_id] + 0;
						progress_percent = (gamedata['busy_quests'][action_id]['progress'][goal_id] / goal_info['amount']) * 100;
						if(progress_percent < 100)
						{
							quest_complete = false;
						}
					}
					else
					{
						quest_complete = false;
					}
				}
				if(goal_info['type'] == 'items')
				{
					progress_amount = get_item_owned_amount(goal_info['target_id']);
					/*if(gamedata['inventory'][goal_info['target_id']] != undefined)
					{
						progress_amount = gamedata['inventory'][goal_info['target_id']] + 0;
					}*/
					progress_percent = (progress_amount / goal_info['amount']) * 100;
					if(progress_percent < 100)
					{
						quest_complete = false;
					}
				}
				parsed_action_details += 	'<div class="action_progress_bar_container">';
				parsed_action_details += 		'<div class="action_progress_bar" style="width:' + progress_percent + '%"></div>';
				parsed_action_details += 		'<div class="action_progress_name">' + capitalizeFirstLetter(goal_info['name']) + '</div>';
				parsed_action_details += 		'<div class="action_progress_amount">' + progress_amount + ' / ' + goal_info['amount'] + '</div>';
				parsed_action_details += 	'</div>';
			});

			if(count_object(action_info['rewards']) > 0)
			{
				parsed_action_details += 		'<div class="action_details_name">Rewards</div>';

				$.each(action_info['rewards'], function(item_id, item_amount){
					parsed_action_details += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + item_amount + '</span>'));
				});
			}

			parsed_action_details += '<div class="action_buttons_container">';
			parsed_action_details += 	'<button class="back_button danger" onclick="show_content(\'current_location\')">Back</button>';
			if(gamedata['busy_quests'][action_id] == undefined && gamedata['done_quests'][action_id] == undefined)
			{
				parsed_action_details += 	'<button class="start_quest_button" onclick="start_action(\'' + action_id + '\')">Accept</button>';
			}
			if(gamedata['busy_quests'][action_id] != undefined && check_quest_complete(action_id) == true)
			{
				parsed_action_details += 	'<button class="start_quest_button gold" onclick="start_action(\'' + action_id + '\')">Complete</button>';
			}
			parsed_action_details += '</div>';

			parsed_action_details += '</div>';
		}
		if(action_info['type'] == 'trade')
		{
			parsed_action_details += 	'<div class="action_details_text">';
			parsed_action_details += 		'<div class="action_details_name">' + capitalizeFirstLetter(action_info['name']) + '</div>';
			if(action_info['description'] != undefined)
			{
				parsed_action_details += 	'<div class="action_details_description">' + capitalizeFirstLetter(action_info['description']) + '</div>';
			}
			parsed_action_details += 		'<div class="action_details_name">Cost</div>';

			var can_trade = true;
			$.each(action_info['cost'], function(item_id, item_amount){
				parsed_action_details += 	parse_item(item_id, undefined, ('<span class="cost_amount">-' + item_amount + '</span>'));
				if(get_item_owned_amount(item_id) < item_amount)
				{
					can_trade = false;
				}
			});

			parsed_action_details += 		'<div class="action_details_name">Rewards</div>';

			$.each(action_info['rewards'], function(item_id, item_amount){
				parsed_action_details += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + item_amount + '</span>'));
			});
			parsed_action_details += '<div class="action_buttons_container">';
			parsed_action_details += 	'<button class="back_button danger" onclick="show_content(\'current_location\')">Back</button>';
			var trade_button_text = 'Trade';
			if(action_info['trade_text'] != undefined)
			{
				trade_button_text = action_info['trade_text'] + '';
			}
			if(can_trade == true)
			{
				parsed_action_details += 	'<button class="start_quest_button gold" onclick="start_action(\'' + action_id + '\')">' + trade_button_text + '</button>';
			}
			parsed_action_details += '</div>';
			parsed_action_details += '</div>';
		}
		if(action_info['type'] == 'catch')
		{
			parsed_action_details = show_catch(action_id);
		}
		/*if(action_info['type'] == 'activity')
		{
			if(gamedata['activities'] == undefined)
			{
				gamedata['activities'] = {};
			}
			parsed_action_details += 	'<div class="action_details_text">';
				parsed_action_details += 	'<div class="action_details_name">' + capitalizeFirstLetter(action_info['name']) + '</div>';
				if(action_info['description'] != undefined)
				{
					parsed_action_details += 	'<div class="action_details_description">' + capitalizeFirstLetter(action_info['description']) + '</div>';
				}
				var now = nowint();
				if(gamedata['activities'][action_id] != undefined && all_activities[gamedata['activities'][action_id]['activity_id']] != undefined)
				{
					var activity_info = all_activities[gamedata['activities'][action_id]['activity_id']];
					parsed_action_details += 	'<div class="action_details_activity_header">';
					parsed_action_details += 		'<div class="action_details_activity_bg bg" style="background-image:url(images/' + activity_info['image'] + ')"></div>';
					parsed_action_details += 		'<div class="action_details_activity_name">' + activity_info['name'] + '</div>';
					parsed_action_details += 	'</div>';
					var done_time = gamedata['activities'][action_id]['done_time'] - nowint();
					if(done_time <= 0)
					{
						parsed_action_details += 	'<div class="action_details_done_time_timer">Done</div>';
						parsed_action_details += 	'<button class="start_quest_button gold" onclick="claim_sale_slot(\'' + action_id + '\')">Claim</button>';
					}
					else
					{
						parsed_action_details += 	'<div class="action_details_done_time_timer">Done in: ' + seconds_to_time(done_time/1000) + '</div>';
					}
				}
				else
				{
					$.each(action_info['activities'], function(possible_activity_id, useless_info){
						if(all_activities[possible_activity_id] != undefined && check_requirements(all_activities[possible_activity_id]['requirements']))
						{
							var possible_activity_info = all_activities[possible_activity_id];
							parsed_action_details += parse_activity_bar(possible_activity_id);
						}
						
					});
				}
				
			parsed_action_details += 	'</div>';
		}*/
	}

	$('.action_details_container').html(parsed_action_details);
}

/*var activity_amount = 1;

function show_activity_details(){
	var parsed_activity = '';
	if(all_activities[current_activity] != undefined)
	{
		var activity_info = all_activities[current_activity];
		parsed_activity += 	'<div class="action_details_activity_header">';
		parsed_activity += 		'<div class="action_details_activity_bg bg" style="background-image:url(images/' + activity_info['image'] + ')"></div>';
		parsed_activity += 		'<div class="action_details_activity_name">' + activity_info['name'] + '</div>';
		parsed_activity += 	'</div>';
		parsed_activity += 		'<div class="action_details_name">Cost</div>';

		var can_trade = true;
		var max_trade = -1;
		$.each(activity_info['cost'], function(item_id, item_amount){
			var max_trade_this = Math.floor(get_item_owned_amount(item_id) / (item_amount));
			if(max_trade_this < max_trade || max_trade == -1)
			{
				max_trade = max_trade_this;
			}
			if(get_item_owned_amount(item_id) < (item_amount * activity_amount))
			{
				can_trade = false;
			}
		});
		if(max_trade < 1){max_trade = 1;}
		if(activity_amount == 'max'){activity_amount = max_trade;}
		if(activity_amount > max_trade){activity_amount = max_trade;}
		$.each(activity_info['cost'], function(item_id, item_amount){
			parsed_activity += 	parse_item(item_id, undefined, ('<span class="cost_amount">-' + (item_amount * activity_amount) + '</span>'));
		});

		parsed_activity += 		'<div class="action_details_name">Rewards</div>';

		$.each(activity_info['rewards'], function(item_id, item_amount){
			parsed_activity += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + (item_amount * activity_amount) + '</span>'));
		});

		var activity_time = activity_info['time'] * activity_amount;
		parsed_activity += 		'<div class="activity_amount">' + seconds_to_time(activity_time) + '</div>';
		parsed_activity += 		'<div class="square_button arrow_left_max_button" onclick="activity_amount=1;show_activity_details()">&nbsp;</div>';
		parsed_activity += 		'<div class="square_button arrow_left_button" onclick="adjust_activity_amount(-1)">&nbsp;</div>';
		parsed_activity += 		'<div class="square_button arrow_right_button" onclick="adjust_activity_amount(1)">&nbsp;</div>';
		parsed_activity += 		'<div class="square_button arrow_right_max_button" onclick="activity_amount=\'max\';show_activity_details()">&nbsp;</div>';
		if(can_trade == true)
		{
			parsed_activity += 	'<div class="action_buttons_container"><button class="start_quest_button gold" onclick="start_activity()">Start</button></div>';
		}
	}
	$('.activity_details_container').html(parsed_activity);
}*/

/*function start_activity(){
	console.log(current_activity);
	console.log(active_action);
}*/

/*function adjust_activity_amount(amount){
	activity_amount += amount;
	if(activity_amount < 1)
	{
		activity_amount = 1;
	}
	show_activity_details();
}*/

/*var current_activity = '';

function parse_activity_bar(activity_id){
	var parsed_action = '';
	if(all_activities[activity_id] != undefined)
	{
		var activity_info = all_activities[activity_id];
		parsed_action += '<div class="action_bar" onclick="play_sound_group(\'click\');current_activity=\'' + activity_id + '\';activity_amount=1;show_content(\'activity_details\')">';
		parsed_action += 	'<div class="action_bar_image" style="background-image:url(images/' + activity_info['image'] + ')"></div>';
		parsed_action += 	'<div class="action_bar_name">' + capitalizeFirstLetter(activity_info['name']) + '</div>';
		parsed_action += 	'<div class="action_bar_button square_button arrow_right_button"></div>';
		parsed_action += '</div>';
	}
	return parsed_action;
}*/

function check_quest_complete(action_id){
	if(all_actions[action_id] != undefined && gamedata['busy_quests'][action_id] != undefined && gamedata['busy_quests'][action_id]['progress'] != undefined && gamedata['done_quests'][action_id] == undefined)
	{
		var action_info = all_actions[action_id];
		var progress = gamedata['busy_quests'][action_id]['progress'];
		var quest_complete = true;
		$.each(action_info['goals'], function(goal_id, goal_info){
			if(goal_info['type'] == 'kills' || goal_info['type'] == 'stage_cleared')
			{
				if(progress[goal_id] == undefined || progress[goal_id] < goal_info['amount'])
				{
					quest_complete = false;
				}
			}
			if(goal_info['type'] == 'items')
			{
				if(get_item_owned_amount(goal_info['target_id']) < goal_info['amount'])
				{
					quest_complete = false;
				}
			}
		});
		return quest_complete;
	}
	else
	{
		return false;
	}
}

function check_quest_can_start(action_id){
	var can_start = true;
	if(all_actions[action_id]['type'] != 'quest' || check_action_available(action_id) == false || gamedata['busy_quests'][action_id] != undefined || gamedata['done_quests'][action_id] != undefined)
	{
		can_start = false;
	}
	return can_start;
}

function check_busy_quests(goal_type, types, amount_gained){
	$.each(gamedata['busy_quests'], function(busy_quest_id, busy_quest_info){
		if(all_actions[busy_quest_id] != undefined)
		{
			$.each(all_actions[busy_quest_id]['goals'], function(goal_id, goal_info){
				if(goal_type == goal_info['type'] && goal_type != 'items' && goal_type != 'stage_cleared' && match_array_values(types, goal_info['target_id']) && gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] < goal_info['amount'])
				{
					gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] += 1;
					if(gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] < goal_info['amount'])
					{
						show_game_message(capitalizeFirstLetter(goal_info['name']) + ': ' + gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] + '&nbsp;/&nbsp;' + goal_info['amount'], 'rgba(250,250,50,1)');
					}
					else
					{
						show_game_message(capitalizeFirstLetter(goal_info['name']) + ' complete!', 'rgba(250,250,50,1)');
					}
					saveToLocalStorage();
				}
				if(goal_type == goal_info['type'] && goal_type == 'stage_cleared' && match_array_values(types, goal_info['target_id']) && gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] < goal_info['amount'] && gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] < amount_gained)
				{
					gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] = amount_gained;
					if(gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] < goal_info['amount'])
					{
						show_game_message(capitalizeFirstLetter(goal_info['name']) + ': ' + gamedata['busy_quests'][busy_quest_id]['progress'][goal_id] + '&nbsp;/&nbsp;' + goal_info['amount'], 'rgba(250,250,50,1)');
					}
					else
					{
						show_game_message(capitalizeFirstLetter(goal_info['name']) + ' complete!', 'rgba(250,250,50,1)');
					}
					saveToLocalStorage();
				}
				if(goal_type == goal_info['type'] && goal_type == 'items' && types == goal_info['target_id'] && types != 'coins')
				{
					var owned_amount = get_item_owned_amount(types);
					if(owned_amount < goal_info['amount'])
					{
						if(owned_amount + amount_gained >= goal_info['amount'])
						{
							show_game_message(capitalizeFirstLetter(goal_info['name']) + ' complete!', 'rgba(250,250,50,1)');
						}
						else
						{
							show_game_message(capitalizeFirstLetter(goal_info['name']) + ': ' + (owned_amount + amount_gained) + '&nbsp;/&nbsp;' + goal_info['amount'], 'rgba(250,250,50,1)');
						}
					}
				}
			});
		}
	});
}

var catchable_id = '';
function show_catch(action_id){
	catchable_id = action_id;
	var parsed_catch = '';
	var action_info = all_actions[action_id];

	parsed_catch += '<div class="catch_bg" style="background-image:url(images/' + action_info['background_image'] + ')">';
	parsed_catch += '</div>';
	

	return parsed_catch;
}

var catchable_cooldowns = {};
var current_catchables = {};
function check_catchables(){
	if(all_actions[catchable_id] != undefined)
	{
		var now = nowint();
		var action_info = all_actions[catchable_id];
		$.each(action_info['catchables'], function(catchable_id, catchable_info){
			if(catchable_cooldowns[catchable_id] == undefined)
			{
				catchable_cooldowns[catchable_id] = now + (Math.random() * (catchable_info['cooldown'] * 1000));
			}
			if(catchable_cooldowns[catchable_id] < now && current_catchables[catchable_id] == undefined)
			{
				spawn_catchable(catchable_id, catchable_info);
				catchable_cooldowns[catchable_id] = now + (Math.random() * (catchable_info['cooldown'] * 1000));
			}
		});
		$.each(current_catchables, function(catchable_id, catchable_info){
			if(catchable_info['disappear_at'] <= now)
			{
				$('.catchable_' + catchable_id).addClass('disappearing');
			}
			if(catchable_info['disappear_at'] <= now - 500)
			{
				despawn_catchable(catchable_id);
			}
		});
		/*$.each(current_catchables, function(catchable_id, catchable_info){
			if(catchable_info['movement'] != undefined)
			{
				current_catchables[catchable_id]['left'] += catchable_info['movement']['left'];
				current_catchables[catchable_id]['top'] += catchable_info['movement']['top'];
				$('.catchable_' + catchable_id).css('left',current_catchables[catchable_id]['left']);
				$('.catchable_' + catchable_id).css('top',current_catchables[catchable_id]['top']);
			}
		});*/
	}
}

function spawn_catchable(catchable_id, catchable_info)
{
	var now = nowint();
	current_catchables[catchable_id] = true_copyobject(catchable_info);
	current_catchables[catchable_id]['hp'] = current_catchables[catchable_id]['max_hp'];
	current_catchables[catchable_id]['disappear_at'] = now + (current_catchables[catchable_id]['catch_time'] * 1000);
	var position_top = (Math.random() * 100);
	var position_left = (Math.random() * 100);
	current_catchables[catchable_id]['top'] = position_top;
	current_catchables[catchable_id]['left'] = position_left;
	var parsed_catchable = '';
	
	parsed_catchable += '<div onclick="process_catchable_click(\'' + catchable_id + '\')" class="catchable catchable_' + catchable_id + '" style="top:' + position_top + '%;left:' + position_left + '%;width:' + catchable_info['target_size'] + 'px;height:' + catchable_info['target_size'] + 'px;margin-left:-' + (catchable_info['target_size'] / 2) + 'px;margin-top:-' + (catchable_info['target_size'] / 2) + 'px;">';
	parsed_catchable += '<div class="catchable_image" style="opacity:' + catchable_info['visibility'] + ';background-image:url(images/' + catchable_info['target_image'] + ')"></div>';
	parsed_catchable += '</div>';
	$('.catch_bg').append(parsed_catchable);
}

function process_catchable_click(catchable_id){
	if(current_catchables[catchable_id] != undefined && current_catchables[catchable_id]['hp'] > 0)
	{
		var catchable_info = current_catchables[catchable_id];
		current_catchables[catchable_id]['hp'] -= 1;
		$('.catchable_' + catchable_id + ' .catchable_image').css('opacity',1);
		$('.catchable_' + catchable_id).addClass('caught');
		if(current_catchables[catchable_id]['hp'] < 1)
		{
			if(catchable_info['sound'] != undefined)
			{
				play_sound_group(catchable_info['sound']);
			}
			if(catchable_info['loot'] != undefined)
			{
				//var dropped_loot = get_random_key_from_object_based_on_num_value(unit['loot']);
				var dropped_loot = get_random_loot(catchable_info['loot']);
				var dropped_amount = round_by_percent(catchable_info['loot'][dropped_loot]['min'] + (Math.random() * (catchable_info['loot'][dropped_loot]['max'] - catchable_info['loot'][dropped_loot]['min'])));
				if(dropped_amount > 0)
				{
					loot_count++;
					var temp_loot_count = loot_count + 0;
					gain_item(dropped_loot, dropped_amount);
					var parsed_item = parse_item(dropped_loot, undefined, '<span class="reward_amount">+' + dropped_amount + '</span>');
					parsed_item = '<div class="loot loot_' + temp_loot_count + '">' + parsed_item + '</div>';
					$('.catch_bg').append(parsed_item);
					fade_out_element('.loot_' + temp_loot_count + '', 2000);
				}
			}
			despawn_catchable(catchable_id);
		}
	}
}

function despawn_catchable(catchable_id){
	$('.catchable_' + catchable_id).remove();
	delete current_catchables[catchable_id];
}