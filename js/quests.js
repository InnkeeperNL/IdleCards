var shown_achievement_options = {
	all: 	true,
	busy: 	true,
	complete: 	true,
	done: 	true,
}

var logged_achieve = 0;

function toggle_shown_achievements(){
	var next_toggle = '';
	var current_toggle_found = false;
	$.each(shown_achievement_options, function(option_id, option_value){
		if(next_toggle == ''){next_toggle = option_id + '';}
		if(current_toggle_found == true)
		{
			next_toggle = option_id + '';
			current_toggle_found = false;
		}
		if(option_id == gamedata['shown_achievements']){current_toggle_found = true;}
	});
	gamedata['shown_achievements'] = next_toggle;
	show_achievements();
}

function show_quests(){

	check_new_quests();
	var quests_shown = 0;

	$('.current_quest_container').html('');
	$.each(gamedata['quests'], function(current_quest_id, current_quest_info){
		if(all_quests[current_quest_info['quest_id']] == undefined)
		{
			delete gamedata['quests'][current_quest_id];
			check_new_quests();
		}
		else
		{
			quests_shown++;
			var quest_info = all_quests[current_quest_info['quest_id']];
			var quest_complete = '';
			if(current_quest_info['progress'] >= current_quest_info['amount'])
			{
				quest_complete = 'complete';
			}
			var parsed_quest = '<div class="single_quest ' + quest_complete + '">';
			if(current_quest_info['completed'] == undefined || current_quest_info['completed'] == false)
			{
				//console.log(current_quest_info);
				if(quest_info['image'] != undefined)
				{
				    var image_position = '';
				    if(quest_info['image_position'] != undefined)
				    {
				        image_position = 'background-position:' + quest_info['image_position'] + ';';
				    }
					parsed_quest += '<div class="background" style="' + image_position + 'background-image:url(images/' + quest_info['image'] + ')"></div>';
				}
				var progress_percent = 100 - ((current_quest_info['progress'] / current_quest_info['amount']) * 100);
				parsed_quest += '<div class="progress_bar" style="width:' + progress_percent + '%"></div>';
				parsed_quest += '<div class="single_quest_name">' + capitalizeFirstLetter(quest_info['name']) + '</div>';
				parsed_quest += '<div class="single_quest_description">';
				
				if(quest_complete != 'complete')
				{
					parsed_quest += check_plural(quest_info['description'].split("{AMOUNT}").join(current_quest_info['amount']), current_quest_info['amount']) + '<br/>';
					parsed_quest += 'Progress: ' + current_quest_info['progress'];
				}
				else
				{
					parsed_quest += '<div class="claim_quest_button" onclick="claim_quest(' + current_quest_id + ')">CLAIM REWARD</div>';
				}
				parsed_quest += '</div>';

				parsed_quest += '<div class="single_quest_reward_title">Reward:</div>';
				parsed_quest += 	'<div class="single_quest_reward_container">';
				$.each(current_quest_info['rewards'], function(reward_type, reward_info){
					//reward_info = (reward_info * get_upgrade_factor('summon_reward', 'any', true));
					scrap_amount = reward_info;
					if(reward_type == 'scraps')
					{
						//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
						if(scrap_amount == 1)
						{
							parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scrap</div>';
						}
						else
						{
							parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scraps</div>';
						}
						
					}
					if(reward_type == 'reputation')
					{
						//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
						parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' reputation</div>';
					}
					if(all_available_cards[reward_type] != undefined)
					{
						//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
						if(scrap_amount == 1)
						{
							parsed_quest += '<div class="single_quest_reward">' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
						}
						else
						{
							parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' x ' + (all_available_cards[reward_type]['name']) + '</div>';	
						}
									
					}
				});
				parsed_quest += 	"</div>";
			}
			parsed_quest += "</div>";

			$('.current_quest_container').append(parsed_quest);
		}
	});
	if(quests_shown < 6 && count_object(all_quests) > 5)
	{
		show_quests();
	}
}

function show_daily_quests(){

	check_new_quests();
	var current_time = new Date();
	var last_midnight = new Date();
	var next_midnight = new Date();
	last_midnight.setHours(0,0,0,0);
	next_midnight.setHours(24,0,0,0);

	$('.current_daily_quest_container').html('');
	$.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
		if(all_quests[current_quest_info['quest_id']] == undefined)
		{
			delete gamedata['daily_quests'][current_quest_id];
			check_new_quests();
		}
		var quest_info = all_quests[current_quest_info['quest_id']];
		var quest_complete = '';
		var quest_claimed = '';
		if(current_quest_info['progress'] >= current_quest_info['amount'])
		{
			quest_complete = 'complete';
		}
		if(current_quest_info['completed'] != false)
		{
			quest_claimed = 'claimed';
		}
		var parsed_quest = '<div class="single_quest ' + quest_complete + ' ' + quest_claimed + '">';
		
		if(quest_info['image'] != undefined)
		{
		    var image_position = '';
		    if(quest_info['image_position'] != undefined)
		    {
		        image_position = 'background-position:' + quest_info['image_position'] + ';';
		    }
			parsed_quest += '<div class="background" style="' + image_position + 'background-image:url(images/' + quest_info['image'] + ')"></div>';
		}
		var progress_percent = 100 - ((current_quest_info['progress'] / current_quest_info['amount']) * 100);
		parsed_quest += '<div class="progress_bar" style="width:' + progress_percent + '%"></div>';
		parsed_quest += '<div class="single_quest_name">' + capitalizeFirstLetter(quest_info['name']) + '</div>';
		parsed_quest += '<div class="single_quest_description">';
		
		if(quest_complete != 'complete')
		{
			parsed_quest += check_plural(quest_info['description'].split("{AMOUNT}").join(current_quest_info['amount']), current_quest_info['amount']) + '<br/>';
			parsed_quest += 'Progress: ' + current_quest_info['progress'];
		}
		else
		{
			if(current_quest_info['completed'] == false)
			{
				parsed_quest += '<div class="claim_quest_button" onclick="claim_daily_quest(' + current_quest_id + ')">CLAIM<br/>REWARD</div>';
			}
			else
			{
				parsed_quest += check_plural(quest_info['description'].split("{AMOUNT}").join(current_quest_info['amount']), current_quest_info['amount']) + '<br/>';
				parsed_quest += '<span class="claimed_text">CLAIMED</span>';
				//parsed_quest += 'Progress: ' + current_quest_info['progress'];
				/*var time_quest_complete = new Date(current_quest_info['completed']);
				var reset_time = (next_midnight.getTime() - current_time.getTime());
				var hh = Math.floor(reset_time / 1000 / 60 / 60);
				if(hh > 0)
				{
					parsed_quest += '<span class="claimed_text">CLAIMED</span><br/>Will reset in ' + hh + ' hours';
				}
				else
				{
					parsed_quest += '<span class="claimed_text">CLAIMED</span><br/>Will reset in less then an hour';
				}*/
			}
		}
		parsed_quest += '</div>';

		parsed_quest += '<div class="single_quest_reward_title">Reward:</div>';
		parsed_quest += 	'<div class="single_quest_reward_container">';
		$.each(quest_info['rewards'], function(reward_type, reward_info){
			reward_info = (reward_info * get_upgrade_factor('summon_reward', 'any', true));
			if(reward_type == 'scraps')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				if(scrap_amount == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scrap</div>';
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scraps</div>';
				}
				
			}
			if(all_available_cards[reward_type] != undefined)
			{
				reward_info = Math.floor(reward_info);
				if(reward_info == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + reward_info + ' x ' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
				}
							
			}
		});
		/*$.each(quest_info['reward_per_amount'], function(reward_type, reward_info){	
			if(reward_type == 'scraps')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				if(scrap_amount == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scrap</div>';
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scraps</div>';
				}
				
			}
			if(reward_type == 'reputation')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' reputation</div>';
			}
			if(all_available_cards[reward_type] != undefined)
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				if(scrap_amount == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' x ' + (all_available_cards[reward_type]['name']) + '</div>';	
				}
							
			}
		});*/
		parsed_quest += 	"</div>";
		
		parsed_quest += "</div>";

		$('.current_daily_quest_container').append(parsed_quest);
	});

	var reset_time = (next_midnight.getTime() - current_time.getTime());
	$('.current_daily_quest_container').append('<div class="quests_reset_time">All quests will reset in: <span class="timer" data-complete-time="' + next_midnight.getTime() + '"></span></div>');
	update_all_timers();
	if(reset_time < 0)
	{
		show_daily_quests();
	}
}

function check_new_quests(show_new_message){
	if(gamedata['quests'] == undefined)
	{
		gamedata['quests'] = {};
	}

	if(gamedata['daily_quests'] == undefined)
	{
		gamedata['daily_quests'] = {};
	}

	var current_quest_count = count_object(gamedata['quests']);

	for(i = 1; i <= 6; i++)
	{
		if(gamedata['quests'][i] == undefined)
		{
			var possible_quests = {};
			$.each(all_quests, function(quest_id, quest_info){
				var can_choose = true;
				$.each(gamedata['quests'], function(current_quest_id, current_quest_info){
					if(quest_id == current_quest_info['quest_id'])
					{
						can_choose = false;
					}
				});
				if(can_choose == true)
				{
					possible_quests[quest_id] = true;
				}
			});
			if(count_object(possible_quests) > 0)
			{
				var new_quest_id = get_random_key_from_object(possible_quests);
				var quest_amount = Math.floor((Math.random() * (all_quests[new_quest_id]['max_amount'] - (all_quests[new_quest_id]['min_amount'] / 2)) * get_upgrade_factor('quest_amount', 'any', true) * 5) + (all_quests[new_quest_id]['min_amount'] / 2));
				var chosen_reward = get_random_key_from_object_based_on_num_value(random_loot_drops);
				//console.log(chosen_reward);
				var chosen_reward_amount = all_quests[new_quest_id]['reward_per_amount']['scraps'] * quest_amount * get_upgrade_factor('summon_reward', 'any', true);
				if(Math.random() < 0.25 || all_available_cards[chosen_reward]['value'] > chosen_reward_amount / 10)
				{
					chosen_reward = 'scraps';
					chosen_reward_amount = Math.floor(chosen_reward_amount);
				}
				else
				{
					chosen_reward_amount = Math.floor(chosen_reward_amount / all_available_cards[chosen_reward]['value'] / 10);
					if(chosen_reward_amount < 1){chosen_reward_amount = 1;}
				}
				gamedata['quests'][i] = {
					quest_id: 	new_quest_id,
					amount: 	quest_amount,
					progress: 	0,
					completed: 	false,
					rewards:{},
				}
				gamedata['quests'][i]['rewards'][chosen_reward] = chosen_reward_amount;
				saveToLocalStorage();
			}
		}
	}
	var last_midnight = new Date();
	last_midnight.setHours(0,0,0,0);
	for(i = 1; i <= 6; i++)
	{
		if(gamedata['daily_quests'][i] != undefined && all_quests[gamedata['daily_quests'][i]['quest_id']] == undefined)
		{
			delete gamedata['daily_quests'][i];
		}
	}
	for(i = 1; i <= 6; i++)
	{
		if(gamedata['daily_quests'][i] == undefined || (gamedata['daily_quests'][i]['completed'] != false && new Date(gamedata['daily_quests'][i]['completed']) < last_midnight))
		{
			var possible_quests = {};
			$.each(all_quests, function(quest_id, quest_info){
				var can_choose = true;
				$.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
					if(quest_id == current_quest_info['quest_id'])
					{
						can_choose = false;
					}
				});
				if(can_choose == true)
				{
					possible_quests[quest_id] = true;
				}
			});
			if(count_object(possible_quests) > 0)
			{
				var new_quest_id = get_random_key_from_object(possible_quests);
				gamedata['daily_quests'][i] = {
					quest_id: 	new_quest_id,
					amount: 	Math.floor(Math.random() * (all_quests[new_quest_id]['max_amount'] - all_quests[new_quest_id]['min_amount']) + all_quests[new_quest_id]['min_amount']) * 3,
					progress: 	0,
					completed: 	false,
				}
				if(show_new_message != undefined && show_new_message == true)
				{
					var total_message = '';
					total_message += '<span class="message_title">New quest: ' + all_quests[new_quest_id]['name'] + '</span>';
					show_message(total_message);
				}
				saveToLocalStorage();
			}
		}
	}
}

var all_achievement_goals = {};

function check_achievement_goals(){
	if(count_object(all_achievement_goals) == 0)
	{
		$.each(all_achievements, function(achievement_id, achievement_info){
			if(achievement_info['objective'] != undefined)
			{
				if(typeof(achievement_info['objective']) == 'string')
				{
					if(all_achievement_goals[achievement_info['objective']] == undefined)
					{
						all_achievement_goals[achievement_info['objective']] = {};
					}
					if(all_achievement_goals[achievement_info['objective']]['achievements'] == undefined)
					{
						all_achievement_goals[achievement_info['objective']]['achievements'] = {};
					}
					all_achievement_goals[achievement_info['objective']]['achievements'][achievement_id] = true;
				}
				else
				{
					$.each(achievement_info['objective'], function(objective_id, objective){
						if(all_achievement_goals[objective] == undefined)
						{
							all_achievement_goals[objective] = {};
						}
						if(all_achievement_goals[objective]['achievements'] == undefined)
						{
							all_achievement_goals[objective]['achievements'] = {};
						}
						all_achievement_goals[objective]['achievements'][achievement_id] = true;
					});
				}
			}
		});
		$.each(all_quests, function(achievement_id, achievement_info){
			if(achievement_info['objective'] != undefined)
			{
				if(typeof(achievement_info['objective']) == 'string')
				{
					if(all_achievement_goals[achievement_info['objective']] == undefined)
					{
						all_achievement_goals[achievement_info['objective']] = {};
					}
					if(all_achievement_goals[achievement_info['objective']]['quests'] == undefined)
					{
						all_achievement_goals[achievement_info['objective']]['quests'] = {};
					}
					all_achievement_goals[achievement_info['objective']]['quests'][achievement_id] = true;
				}
				else
				{
					$.each(achievement_info['objective'], function(objective_id, objective){
						if(all_achievement_goals[objective] == undefined)
						{
							all_achievement_goals[objective] = {};
						}
						if(all_achievement_goals[objective]['quests'] == undefined)
						{
							all_achievement_goals[objective]['quests'] = {};
						}
						all_achievement_goals[objective]['quests'][achievement_id] = true;
					});
				}
			}
		});
	}
}

function check_quests(string, achieved_amount, achieved_times){

	if(achieved_times == undefined){achieved_times = 1;};

	var possible_strings = [string];
	var possible_strings_key = 1;

	if(count_object(possible_strings) > 0)
	{
		//console.log(possible_strings);
		check_achievement_goals();
		check_new_quests();
		/*if(logged_achieve < 10)
		{
			console.log(possible_strings);
			logged_achieve++;
		}*/
		$.each(possible_strings, function(useless_key, current_string){
			if(all_achievement_goals[current_string] != undefined){
				$.each(gamedata['quests'], function(current_quest_id, current_quest_info){
					if(all_achievement_goals[current_string]['quests'] != undefined && all_achievement_goals[current_string]['quests'][current_quest_info['quest_id']] != undefined){
						if(current_quest_info['progress'] < current_quest_info['amount'] && (current_quest_info['completed'] == undefined || current_quest_info['completed'] == false))
						{
							current_quest_info['progress'] += achieved_times;
							if(current_quest_info['progress'] >= current_quest_info['amount'] && current_quest_info['shown_message'] == undefined)
							{
								current_quest_info['shown_message'] = true;
								var total_message = '';
								total_message += '<span class="message_title">Quest complete: ' + all_quests[current_quest_info['quest_id']]['name'] + '</span>';
								show_message(total_message);
							}
							//saveToLocalStorage();
						}
					}
				});
				$.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
					if(all_achievement_goals[current_string]['quests'] != undefined && all_achievement_goals[current_string]['quests'][current_quest_info['quest_id']] != undefined){
						if(match_array_values(all_quests[current_quest_info['quest_id']]['objective'], current_string) && current_quest_info['progress'] < current_quest_info['amount'] && (current_quest_info['completed'] == undefined || current_quest_info['completed'] == false))
						{
							current_quest_info['progress'] += achieved_times;
							if(current_quest_info['progress'] >= current_quest_info['amount'] && current_quest_info['shown_message'] == undefined)
							{
								current_quest_info['shown_message'] = true;
								var total_message = '';
								total_message += '<span class="message_title">Daily quest complete: ' + all_quests[current_quest_info['quest_id']]['name'] + '</span>';
								show_message(total_message);
							}
							//saveToLocalStorage(false);
						}
					}
				});
				$.each(all_achievements, function(achievement_id, achievement_info){
					var achievement_matched = false;
					if(match_array_values(achievement_info['objective'], current_string)){achievement_matched = true;}
					if(match_array_values(achievement_info['objectives'], current_string)){achievement_matched = true;}
					if(achieved_amount != undefined && achievement_matched == true)
					{
						if(achievement_info['max_amount'] != undefined && achieved_amount > achievement_info['max_amount'])
						{
							achievement_matched = false;
						}
						if(achievement_info['min_amount'] != undefined && achieved_amount < achievement_info['min_amount'])
						{
							achievement_matched = false;
						}
						//console.log(achieved_amount);
					}
					if(achievement_matched == true)
					{
						if(gamedata['achievements'][achievement_id] == undefined)
						{
							//console.log(achievement_id);
							gamedata['achievements'][achievement_id] = {
								amount: 		0,
								completed: 		false,
								claimed: 		false,
								date_completed: false
							};
							if(achievement_info['objectives'] != undefined)
							{
								gamedata['achievements'][achievement_id]['amount'] = {};
								$.each(achievement_info['objectives'], function(objective_key, objective_id){
									gamedata['achievements'][achievement_id]['amount'][objective_id] = 0;
								});
							}
						}

						if(gamedata['achievements'][achievement_id]['completed'] == false && gamedata['achievements'][achievement_id]['claimed'] == false)
						{
							var all_objectives_complete = true;
							if(achievement_info['objectives'] != undefined)
							{
								gamedata['achievements'][achievement_id]['amount'][current_string] += achieved_times;
								$.each(achievement_info['objectives'], function(objective_key, objective_id){
									if(gamedata['achievements'][achievement_id]['amount'][objective_id] < achievement_info['amount'])
									{
										all_objectives_complete = false;
									}
								});
							}
							else
							{
								gamedata['achievements'][achievement_id]['amount'] += achieved_times;
								if(gamedata['achievements'][achievement_id]['amount'] < achievement_info['amount'])
								{
									all_objectives_complete = false;
								}
							}

							if(all_objectives_complete == true)
							{
								var total_message = '';
								total_message += '<span class="message_title">Achievement complete: ' + achievement_info['name'] + '</span>';
								show_message(total_message);
							
								gamedata['achievements'][achievement_id]['completed'] = true;
								gamedata['achievements'][achievement_id]['date_completed'] = new Date();
							}
							//saveToLocalStorage(false);
						}
					}
				});
			}
		});
	}
}

function claim_quest(current_quest_id){
	if(gamedata['quests'][current_quest_id] != undefined && gamedata['quests'][current_quest_id]['amount'] <= gamedata['quests'][current_quest_id]['progress'])
	{
		current_quest_info = gamedata['quests'][current_quest_id];
		all_current_rewards = {};
		current_reward_origin 	= 'quests';
		current_reward_text 	= 'For completing the quest <b>"' + capitalizeFirstLetter(all_quests[current_quest_info['quest_id']]['name']) + '"</b><br/>You have been rewarded with:<br/>';
		$.each(current_quest_info['rewards'], function(reward_type, reward_info){
			//reward_info = (reward_info * get_upgrade_factor('summon_reward', 'any', true));
			//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
			//gain_scraps(scrap_amount);
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	reward_info,
			}
		});
		/*$.each(all_quests[current_quest_info['quest_id']]['rewards'], function(reward_type, reward_info){
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	reward_info,
			}
		});*/
		/*$.each(all_quests[current_quest_info['quest_id']]['reward_per_amount'], function(reward_type, reward_info){
			if(reward_type == 'scraps')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				gain_scraps(scrap_amount);
				
			}
		});*/
		delete gamedata['quests'][current_quest_id];
		saveToLocalStorage();
		show_content('current_rewards');
		//show_quests();
	}
}

function claim_daily_quest(current_quest_id){
	if(gamedata['daily_quests'][current_quest_id] != undefined && gamedata['daily_quests'][current_quest_id]['amount'] <= gamedata['daily_quests'][current_quest_id]['progress'] && gamedata['daily_quests'][current_quest_id]['completed'] == false)
	{
		current_quest_info = gamedata['daily_quests'][current_quest_id];
		all_current_rewards = {};
		current_reward_origin 	= 'daily_quests';
		current_reward_text 	= 'For completing the daily quest <b>"' + capitalizeFirstLetter(all_quests[current_quest_info['quest_id']]['name']) + '"</b><br/>You have been rewarded with:<br/>';
		
		/*$.each(all_quests[current_quest_info['quest_id']]['reward_per_amount'], function(reward_type, reward_info){
			var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
			//gain_scraps(scrap_amount);
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	scrap_amount,
			}
		});*/
		$.each(all_quests[current_quest_info['quest_id']]['rewards'], function(reward_type, reward_info){
			reward_info = Math.floor(reward_info * get_upgrade_factor('summon_reward', 'any', true));
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	reward_info,
			}
		});
		gamedata['daily_quests'][current_quest_id]['completed'] = new Date();
		saveToLocalStorage();
		show_content('current_rewards');
		//show_daily_quests();
	}
}

function check_quest_complete_count(){
	show_daily_reward();
    if(gamedata['quests'] == undefined || gamedata['daily_quests'] == undefined)
	{
		check_new_quests();
	}

	var current_quest_count = count_object(gamedata['quests']);
	if(current_quest_count < 6)
	{
	    check_new_quests();
	}
	
    var quest_complete_count = 0;
    var daily_quest_complete_count = 0;
    var stories_complete_count = 0;
    $.each(gamedata['quests'], function(current_quest_id, current_quest_info){
        if(current_quest_info['progress'] >= current_quest_info['amount'])
		{
			quest_complete_count ++;
		}
    });
    $.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
        if(current_quest_info['progress'] >= current_quest_info['amount'] && current_quest_info['completed'] == false)
		{
			//quest_complete_count ++;
			daily_quest_complete_count ++;
		}
    });
    $.each(gamedata['stories'], function(current_quest_id, current_quest_info){
        if(current_quest_info['completed'] == true && current_quest_info['claimed'] == false)
		{
			stories_complete_count ++;
		}
    });
    var achievements_complete = 0;
    $.each(gamedata['achievements'], function(achievement_id, achievement_status){
    	if(all_achievements[achievement_id] == undefined)
    	{
    		delete gamedata['achievements'][achievement_id];
    	}
    	else
    	{
	    	if(achievement_status['completed'] == true && achievement_status['claimed'] == false)
	    	{
	    		achievements_complete++;
	    	}
	    }
    });

    
    if(achievements_complete == 0)
    {
    	$('.achievements_page_button').html('');
    }
    else
    {
    	$('.achievements_page_button').html('&nbsp;!');
    }
    if(quest_complete_count == 0)
    {
        $('.quests_page_button').html('');
    }
    else
    {
        $('.quests_page_button').html('&nbsp;!');
    }
    if(stories_complete_count == 0)
    {
        $('.stories_page_button').html('');
    }
    else
    {
        $('.stories_page_button').html('&nbsp;!');
    }
    if(daily_reward_claimable == false)
    {
    	$('.daily_reward_available').html('');
    }
    else
    {
    	$('.daily_reward_available').html('&nbsp;!');
    }
    if(achievements_complete > 0 || quest_complete_count > 0 || daily_reward_claimable == true || daily_quest_complete_count > 0 || stories_complete_count > 0)
    {
    	$('.quest_button_complete_count').html('&nbsp;!');
    	$('.quest_complete_count').html('!');
    	$('.quest_complete_count').removeClass('hidden');
    }
    else
    {
    	$('.quest_complete_count').html('');
        $('.quest_complete_count').addClass('hidden');
    	$('.quest_button_complete_count').html('');
    }
    if(daily_quest_complete_count > 0)
    {
    	$('.daily_quests_page_button').html('&nbsp;!');
    	
    	$('.daily_quests_complete').html('(' + daily_quest_complete_count + ')');
    }
    else
    {
    	$('.daily_quests_page_button').html('');
    }
    return quest_complete_count + daily_quest_complete_count;
}

var current_achievements_page = 1;
var achievements_per_page = 25;

function show_achievements(){
	if(gamedata['shown_achievements'] == undefined)
	{
		gamedata['shown_achievements'] = 'all';
	}
	$('.achievement_options_button').html(gamedata['shown_achievements']);
	var current_card_number = 0;
	if(gamedata['achievements'] == undefined){gamedata['achievements'] = {};}
	$('.achievements_container').html('');
	$('.achievement_details').html('<span class="no_achievement_text">Select an achievement to view it\'s details.</span>');
	var all_parsed_achievements = '';
	var all_incomplete = '';
	var all_complete = '';
	var all_claimed = '';
	$.each(all_achievements, function(achievement_id, achievement_info){
		var completed = '';
		if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['completed'] == true)
		{
			completed = ' completed';
		}
		var claimed = '';
		if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['claimed'] == true)
		{
			claimed = ' claimed';
		}
		var required_completed = true;
		$.each(achievement_info['needs_completed'], function(needed_achievement_id, useless_info){
			if(gamedata['achievements'][needed_achievement_id] == undefined || gamedata['achievements'][needed_achievement_id]['completed'] == false)
			{
				required_completed = false;
			}
		});
		if(gamedata['shown_achievements'] == 'complete' && (completed == '' || claimed != ''))
		{
			required_completed = false;
		}
		if(gamedata['shown_achievements'] == 'done' && claimed == '')
		{
			required_completed = false;
		}
		if(gamedata['shown_achievements'] == 'busy' && (claimed != '' || completed != ''))
		{
			required_completed = false;
		}
		if(required_completed == true)
		{
			var single_parsed_achievement = '<div class="single_achievement_container">';
			single_parsed_achievement += '<div class="achievement achievement_' + achievement_id + ' ' + completed + claimed + '" onclick="show_achievements_details(\'' + achievement_id + '\')">';
			single_parsed_achievement += 	'<div class="achievement_image" style="background-image:url(images/' + achievement_info['image'] + ');background-position:' + achievement_info['image_position'] + '"></div>';
			
			if(gamedata['achievements'][achievement_id] == undefined || gamedata['achievements'][achievement_id]['completed'] != true)
			{
				var complete_percent = 100;
				if(gamedata['achievements'][achievement_id] != undefined)
				{
					if(typeof(gamedata['achievements'][achievement_id]['amount']) == 'object')
					{
						var temp_achieved_amount = 0;
						var objective_count = 0;
						$.each(gamedata['achievements'][achievement_id]['amount'], function(amount_key, amount_amount){
							if(amount_amount > achievement_info['amount']){amount_amount = achievement_info['amount'];}
							temp_achieved_amount += amount_amount;
							objective_count++;
						});
						complete_percent = 100 - Math.floor(temp_achieved_amount / (achievement_info['amount'] * objective_count) * 100);
					}
					else
					{
						complete_percent = 100 - Math.floor(gamedata['achievements'][achievement_id]['amount'] / achievement_info['amount'] * 100);
					}
				}
				single_parsed_achievement += '<div class="achievement_progress_bar" style="width:' + complete_percent + '%"></div>';
			}
			/*single_parsed_achievement += 	'<div class="achievement_title">' + capitalizeFirstLetter(achievement_info['name']) + '</div>';
			if(completed == '')
			{
				single_parsed_achievement += '<div class="achievement_description">???</div>';
			}
			else
			{
				var completed_date = new Date(gamedata['achievements'][achievement_id]['date_completed']);
				var date = completed_date.getDate()+'-'+(completed_date.getMonth()+1)+'-'+completed_date.getFullYear();
				var time = completed_date.getHours() + ":" + completed_date.getMinutes() + ":" + completed_date.getSeconds();
				var dateTime = date+' '+time;
				single_parsed_achievement += '<div class="achievement_description">' + achievement_info['description'] + '<br/>Progress: ' + numberWithCommas(gamedata['achievements'][achievement_id]['amount']) + ' / ' + numberWithCommas(achievement_info['amount']) + '<br/>Completed on ' + dateTime + '</div>';
			}
			if(completed != '' && claimed == '')
			{
				single_parsed_achievement += 	'<div class="achievement_claim_button" onclick="claim_achievement(\'' + achievement_id + '\')">CLAIM</div>';
			}*/
			
			single_parsed_achievement += '</div></div>';

			if(completed == '')
			{
				all_incomplete += single_parsed_achievement;
			}
			if(completed != '' && claimed == '')
			{
				all_complete += single_parsed_achievement;
			}
			if(completed != '' && claimed != '')
			{
				all_claimed += single_parsed_achievement;
			}
			current_card_number ++;
			if(current_card_number / achievements_per_page > current_achievements_page -1 && current_card_number / achievements_per_page <= current_achievements_page)
			{
				$('.achievements_container').append(single_parsed_achievement);
			}
		}
	});

	//all_parsed_achievements = all_complete + all_claimed + all_incomplete;

	//$('.achievements_container').html(all_parsed_achievements);

	if(current_achievements_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / achievements_per_page <= current_achievements_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(current_card_number > 0 && Math.ceil(current_card_number / achievements_per_page) < current_achievements_page)
	{
		current_achievements_page = 1;
		show_achievements();
	}
	else
	{
		if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_achievements_page + ' / ' + Math.ceil(current_card_number / achievements_per_page));
		if(all_complete != '')
		{
			$('.claim_all_container').show();
		}
		else
		{
			$('.claim_all_container').hide();
		}
	}
}

function set_achievements_page(amount){
	current_achievements_page += amount;
	if(current_achievements_page < 1){current_achievements_page = 1;}
	show_achievements();
}

function show_achievements_details(achievement_id){
	$('.achievement_details').html('');
	achievement_info = all_achievements[achievement_id];
	achievement_progress = gamedata['achievements'][achievement_id];

	var completed = '';
	if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['completed'] == true)
	{
		completed = ' completed';
	}
	var claimed = '';
	if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['claimed'] == true)
	{
		claimed = ' claimed';
	}
	var single_parsed_achievement = '';
	var background_pos = '';
	if(achievement_info['image_position'] != undefined){background_pos = ';background-position:' + achievement_info['image_position'];}
	single_parsed_achievement += 	'<div class="achievement_image" style="background-image:url(images/' + achievement_info['image'] + ')' + background_pos + '"></div>';
	single_parsed_achievement += 	'<div class="achievement_title">' + capitalizeFirstLetter(achievement_info['name']) + '</div>';
	if(completed == '' && (achievement_info['hide_details'] != undefined || achievement_info['hide_details'] == false))
	{
		single_parsed_achievement += '<div class="achievement_description">???</div>';
	}
	else
	{	
		var current_progress = 0;
		if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['amount'] != undefined)
		{
			current_progress = gamedata['achievements'][achievement_id]['amount'];
		}
		single_parsed_achievement += '<div class="achievement_description">' + achievement_info['description'] + '<br/><br/>';
		if(completed == '' && (achievement_info['hide_amount'] == undefined || achievement_info['hide_amount'] == false))
		{
			single_parsed_achievement += 'Progress: ' + numberWithCommas(current_progress) + ' / ' + numberWithCommas(achievement_info['amount']) + '<br/>';
		}	
		single_parsed_achievement += '</div>';
	}
	if(completed != '' && claimed != '')
	{
		var completed_date = new Date(gamedata['achievements'][achievement_id]['date_completed']);
		var date = completed_date.getDate()+'-'+(completed_date.getMonth()+1)+'-'+completed_date.getFullYear();
		var time = completed_date.getHours() + ":" + completed_date.getMinutes() + ":" + completed_date.getSeconds();
		var dateTime = date/*+' '+time*/;
		single_parsed_achievement += '<div class="completed_on">Completed on: ' + dateTime + '</div>';
	}
	if(completed != '' && claimed == '')
	{
		single_parsed_achievement += 	'<div class="achievement_claim_button" onclick="claim_achievement(\'' + achievement_id + '\')">CLAIM</div>';
	}
	

	$('.achievement_details').html(single_parsed_achievement);
	$('.claim_all_container').hide();
}

function open_achievement(achievement_id){
	$('.achievement').not('.achievement_' + achievement_id).removeClass('open');
	if($('.achievement_' + achievement_id).hasClass('open'))
	{
		$('.achievement_' + achievement_id).removeClass('open');
	}
	else
	{
		$('.achievement_' + achievement_id).addClass('open');
	}
	
}

function claim_all_achievements(){
	all_current_rewards = {};
	var claimed_amount = 0;
	$.each(gamedata['achievements'], function(achievement_id, progress){
		var current_achievement = all_achievements[achievement_id];
		if(progress['completed'] == true && progress['claimed'] == false)
		{
			claimed_amount++;
			progress['claimed'] = true;
			$.each(current_achievement['rewards'], function(reward_id, reward_info){
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {reward_id:reward_info['reward_id'],reward_amount:reward_info['reward_amount']};
			});
		}
	});
	if(count_object(all_current_rewards) > 0)
	{
		current_reward_origin 	= 'achievements';
		current_reward_text 	= check_plural('For completing ' + claimed_amount + ' achievement(s)<br/>You have been rewarded with:<br/>', claimed_amount);
		saveToLocalStorage();
		//show_content('current_rewards');
	}
}

function claim_achievement(achievement_id){
	var current_achievement = all_achievements[achievement_id];
	var progress = gamedata['achievements'][achievement_id];

	if(progress['completed'] == true && progress['claimed'] == false)
	{
		progress['claimed'] = true;
		all_current_rewards = current_achievement['rewards'];
		current_reward_origin 	= 'achievements';
		current_reward_text 	= 'For completing the achievement <b>"' + capitalizeFirstLetter(current_achievement['name']) + '"</b><br/>You have been rewarded with:<br/>';
		saveToLocalStorage();
		show_content('current_rewards');
	}
}

function get_completed_achievement_count(){
	var completed_achievement_count = 0;
	$.each(gamedata['achievements'], function(achievement_id, progress){
		if(progress['completed'] == true)
		{
			completed_achievement_count++;
		}
	});
	return completed_achievement_count;
}

function complete_random_daily(){
	var temp_daily_quests = {};
	$.each(gamedata['daily_quests'], function(quest_id, quest_info){
		if(quest_info['completed'] == false && quest_info['progress'] < quest_info['amount'])
		{
			temp_daily_quests[quest_id] = true;
		}
	});
	if(count_object(temp_daily_quests) > 0)
	{
		var chosen_daily = get_random_key_from_object(temp_daily_quests);
		console.log('ding');
		gamedata['daily_quests'][chosen_daily]['progress'] = gamedata['daily_quests'][chosen_daily]['amount'];
		saveToLocalStorage();
		show_daily_quests();
		check_quest_complete_count();
		return true;
	}
	else
	{
		return false;
	}
}

function reset_daily_quests(){
	delete gamedata['daily_quests'];
	show_daily_quests();
	check_quest_complete_count();
}

function reset_radnom_daily_quest(){
	var temp_daily_quests = {};
	$.each(gamedata['daily_quests'], function(quest_id, quest_info){
		if(quest_info['completed'] != false)
		{
			temp_daily_quests[quest_id] = true;
		}
	});
	if(count_object(temp_daily_quests) > 0)
	{
		var chosen_daily = get_random_key_from_object(temp_daily_quests);
		delete gamedata['daily_quests'][chosen_daily];
		check_new_quests(true);
		return true;
	}
	else
	{
		return false;
	}
}

function reset_achievements(){
	if(gamedata['achievements'] != undefined)
	{
		$.each(all_achievements, function(achievement_id, achievement_info){
			if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['completed'] == true)
			{
			}
			else
			{
				if(gamedata['achievements'][achievement_id] != undefined && achievement_info['reset_if_incomplete'] != undefined && achievement_info['reset_if_incomplete'] == true)
				{
					gamedata['achievements'][achievement_id]['amount'] = 0;
					if(achievement_info['objectives'] != undefined)
					{
						gamedata['achievements'][achievement_id]['amount'] = {};
						$.each(achievement_info['objectives'], function(objective_key, objective_id){
							gamedata['achievements'][achievement_id]['amount'][objective_id] = 0;
						});
					}
				}
			}
		});
	}
};