function show_workers(){
	if(gamedata['workers'] == undefined)
	{
		gamedata['workers'] = {};
		saveToLocalStorage();
	}
	$('.workers_container').html('');
	$('.new_worker_button_container').html('');
	$('.coins_container').html(nFormatter(gamedata['coins'], 3) + ' coins');
	check_workers();
	//viewing_worker_actions = true;

	var owned_workers = gamedata['workers'];
	var owned_worker_amount = count_object(owned_workers);

	$.each(owned_workers, function(owned_worker_id, owned_worker_info){
		var parsed_worker = parse_worker_bar(owned_worker_id);

		$('.workers_container').append(parsed_worker);
	});

	if(owned_worker_amount == 0)
	{
		$('.workers_container').append('<div class="no_workers_text">No workers yet.<br/>Hire one by pushing the button below.</div><br/>');
	}

	$('.new_worker_button_container').html('<br/><button class="new_worker_button" onclick="hire_new_worker();">Hire new worker<span class="new_worker_cost"></span></button>');
	update_new_worker_button();
}

function check_workers(){
	var owned_workers = gamedata['workers'];
	$.each(owned_workers, function(owned_worker_id, owned_worker_info){
		var worker_info = available_workers[owned_worker_info['worker_id']];
		if(owned_worker_info['action_id'] == undefined){owned_worker_info['action_id'] = 'none';}
		if(owned_worker_info['action_amount'] == undefined){owned_worker_info['action_amount'] = 0;}
		if(owned_worker_info['done_time'] == undefined){owned_worker_info['done_time'] = 0;}
		if(owned_worker_info['name'] == undefined){owned_worker_info['name'] = capitalizeFirstLetter(worker_info['name']);}
		$.each(all_upgrades, function(upgrade_id, useless_data){
			if(owned_worker_info[upgrade_id + '_level'] == undefined){owned_worker_info[upgrade_id + '_level'] = 1;}
		});
	});
}

function parse_worker_bar(worker_id){
	var parsed_worker_bar = '';
	if(gamedata['workers'][worker_id] != undefined)
	{
		var worker = gamedata['workers'][worker_id];
		var worker_info = available_workers[worker['worker_id']];
		var worker_level_string = '';

		$.each(all_upgrades, function(upgrade_id, useless_data){
			if(worker_level_string != '')
			{
				worker_level_string += ' / ';
			}
			var current_level = worker[upgrade_id + '_level'];
			worker_level_string += current_level;
		});

		parsed_worker_bar += '<div class="worker_bar worker_id_' + worker_id + '">';
		parsed_worker_bar += 	'<div class="worker_bar_image" style="background-image:url(images/' + worker_info['image'] + ')" onclick="current_worker_details=' + worker_id + ';show_worker_upgrades=true;show_content(\'worker_details\')"><div class="worker_level_string">' + worker_level_string + '</div>';
		if(gamedata['coins'] >= calculate_worker_upgrade_cost(worker['endurance_level']))
		{
			parsed_worker_bar += 	'<div class="upgrade_available"></div>';
		}
		parsed_worker_bar += 	'</div>';
		parsed_worker_bar += 	'<div class="worker_bar_name">' + capitalizeFirstLetter(worker['name']) + '</div>';
		
		var current_action_name = '<span class="idle_text">Idle</span>';
		var current_action_amount = '';
		var current_action_type = '';
		if(worker['action_amount'] > 1)
		{
			current_action_amount = 'x' + worker['action_amount'];
		}
		if(available_actions[worker['action_id']] != undefined && available_actions[worker['action_id']]['type'] == 'combat')
		{
			current_action_type = available_actions[worker['action_id']]['type'];
			current_action_amount = 'lvl ' + (worker['action_amount'] * available_actions[worker['action_id']]['level']);
		}
		var hide_details_button = '';
		var show_timer = 'hidden';
		var show_complete_button = 'hidden';
		var time_left = '';
		var action_image_name = '';
		var action_progress_percent = 0;
		if(available_actions[worker['action_id']] != undefined)
		{
			if(available_actions[worker['action_id']]['name'] != undefined)
			{
				current_action_name = capitalizeFirstLetter(available_actions[worker['action_id']]['name']);
			}
			if(worker['action_amount'] > 1)
			{
				current_action_name = worker['action_amount'] + 'x ' + current_action_name;
			}
			hide_details_button = 'hidden';
			var now = nowint();
			if(now < worker['done_time'])
			{
				show_timer = '';
				time_left = seconds_to_time(worker['done_time'] - now, 2);
				if(worker['start_time'] != undefined)
				{
					var total_action_time = worker['done_time'] - worker['start_time'];
					action_progress_percent = 100 - ((worker['done_time'] - now) / total_action_time * 100);
				}
			}
			else
			{
				show_complete_button = '';
			}
			var have_crafted_this = true;
			if(available_actions[worker['action_id']]['type'] == 'crafting')
			{
				$.each(available_actions[worker['action_id']]['loot'], function(loot_id, loot_amount){
					if(available_items[loot_id]['image'] == available_actions[worker['action_id']]['image'] && gamedata['produced'][loot_id] == undefined)
					{
						have_crafted_this = false;
					}
				});
			}
			if(available_actions[worker['action_id']]['image'] != undefined && have_crafted_this == true)
			{
				action_image_name = available_actions[worker['action_id']]['image'];
			}
			else
			{
				current_action_amount = '?';
			}
		}

		
		
		
		parsed_worker_bar += 	'<div class="worker_action_image worker_action_image_small action_type_' + current_action_type + '" style="background-image:url(images/' + action_image_name + ')">' + current_action_amount + '</div>';
		parsed_worker_bar += 	'<div class="worker_progress_bar_action_container"><div class="worker_progress_bar_action" style="width:' + action_progress_percent + '%"></div></div>';
		parsed_worker_bar += 	'<div class="worker_bar_action">' + current_action_name + '</div>';
		parsed_worker_bar += 	'<div class="worker_bar_timer ' + show_timer + '">' + time_left + '</div>';
		parsed_worker_bar += 	'<button class="menu_button square_button next_button worker_bar_details_button ' + hide_details_button + '" onclick="current_worker_details=' + worker_id + ';show_worker_upgrades=false;viewing_worker_actions=true;" data-target-content="worker_details"></button>';
		parsed_worker_bar += 	'<button class="menu_button square_button inventory_button worker_bar_complete_button ' + show_complete_button + '" onclick="current_worker_details=' + worker_id + ';" data-target-content="claim_action"></button>';

		parsed_worker_bar += '</div>';
	}

	return parsed_worker_bar;
}

function update_new_worker_button(){


	var new_worker_cost = calculate_new_worker_cost();
	var button_content = 'FREE';

	if(new_worker_cost > 0)
	{
		button_content = nFormatter(new_worker_cost, 3) + ' coins';
	}
	$('.new_worker_cost').html(button_content);
	if(gamedata['coins'] < new_worker_cost)
	{
		$('.new_worker_button').addClass('danger');
	}
	else
	{
		$('.new_worker_button').removeClass('danger');
	}
}


function calculate_new_worker_cost(){

	var owned_workers = gamedata['workers'];
	var owned_worker_amount = count_object(owned_workers);
	var new_worker_cost = 0;

	if(owned_worker_amount > 0)
	{
		new_worker_cost = to_the_nth(base_next_worker, owned_worker_amount -1, worker_cost_factor);
	}
	return new_worker_cost;
}

function hire_new_worker(){
	var new_worker_cost = calculate_new_worker_cost();
	if(gamedata['coins'] >= new_worker_cost)
	{
		gamedata['coins'] -= new_worker_cost;
		var new_worker_id = get_highest_key_in_object(gamedata['workers']) + 1;
		gamedata['workers'][new_worker_id] = {
			worker_id: 			'peasant',
			power_level: 		1,
			endurance_level: 	1,
			speed_level: 		1,
		}
		saveToLocalStorage();
		show_content('workers');
	}
}

function check_action_timers(){
	if($('#content_workers').hasClass('active'))
	{
		var now = nowint();
		var owned_workers = gamedata['workers'];
		var action_progress_percent = 0;
		$.each(owned_workers, function(owned_worker_id, owned_worker_info){
			if(available_actions[owned_worker_info['action_id']] != undefined)
			{
				if(owned_worker_info['done_time'] > now)
				{
					var time_left = seconds_to_time(owned_worker_info['done_time'] - now, 2);
					if(owned_worker_info['start_time'] != undefined)
					{
						var total_action_time = owned_worker_info['done_time'] - owned_worker_info['start_time'];
						action_progress_percent = 100 - ((owned_worker_info['done_time'] - now) / total_action_time * 100);
						$('.worker_bar.worker_id_' + owned_worker_id + ' .worker_progress_bar_action').css('width',action_progress_percent + '%');
					}
					$('.worker_bar.worker_id_' + owned_worker_id + ' .worker_bar_timer').html(time_left);
				}
				else
				{
					/*$('.worker_bar.worker_id_' + owned_worker_id + ' .worker_action_image').addClass('hidden');*/
					$('.worker_bar.worker_id_' + owned_worker_id + ' .worker_progress_bar_action').addClass('hidden');
					$('.worker_bar.worker_id_' + owned_worker_id + ' .worker_bar_timer').addClass('hidden');
					$('.worker_bar.worker_id_' + owned_worker_id + ' .worker_bar_complete_button').removeClass('hidden');
				}
			}
		});
	}
	
	var now = nowint();
	var owned_workers = gamedata['workers'];
	var done_workers = 0;
	$.each(owned_workers, function(owned_worker_id, owned_worker_info){
		if(available_actions[owned_worker_info['action_id']] != undefined)
		{
			if(owned_worker_info['done_time'] <= now)
			{
				done_workers++;
				if(owned_worker_info['done_now'] == undefined || owned_worker_info['done_now'] == false)
				{
					owned_worker_info['done_now'] = true;
					saveToLocalStorage();
					play_sound_group('done');
				}
			}
		}
	});
	if(done_workers > 0)
	{
		$('.menu_button_workers').addClass('done_worker');
	}
	else
	{
		$('.menu_button_workers').removeClass('done_worker');
	}
	
}

// ####################################################### Worker Details ##############################################
var current_worker_details;
var edit_worker_name = false;
var show_worker_upgrades = false;

function show_worker_details(){
	$('.worker_details_container').html('');
	if(gamedata['workers'][current_worker_details] != undefined)
	{
		var worker = gamedata['workers'][current_worker_details];
		var worker_info = available_workers[worker['worker_id']];

		$('.worker_details_bg').css('background-image', 'url(images/' + worker_info['image'] + ')');

		var parsed_worker_details = parse_worker_details(current_worker_details, show_worker_upgrades);
		$('.worker_details_container').html(parsed_worker_details);
		//$('.worker_training_container').html(parsed_worker_details);
	}
	else{show_content('workers');}
}

function show_worker_training(){
	$('.worker_details_container').html('');
	if(gamedata['workers'][current_worker_details] != undefined)
	{
		var worker = gamedata['workers'][current_worker_details];
		var worker_info = available_workers[worker['worker_id']];

		$('.worker_details_bg').css('background-image', 'url(images/' + worker_info['image'] + ')');

		var parsed_worker_details = parse_worker_training(current_worker_details);
		$('.worker_training_container').html(parsed_worker_details);
	}
	else{show_content('workers');}
}

function toggle_edit_worker_name(){
	if(edit_worker_name == false)
	{
		edit_worker_name = true;
	}
	else
	{
		edit_worker_name = false;
		var worker = gamedata['workers'][current_worker_details];
		worker['name'] = $('.worker_details_name_edit').val();
		saveToLocalStorage();
	}
}

var viewing_worker_actions = true;
var training_id = '';

function parse_worker_training(worker_id){
	/**/
	return parse_worker_details(worker_id, true);
}

function parse_worker_details(worker_id, show_upgrades){
	var worker = gamedata['workers'][worker_id];
	var worker_info = available_workers[worker['worker_id']];
	var parsed_worker = '';

	

	// upgrades

	if(show_upgrades != undefined && show_upgrades == true)
	{
		parsed_worker += '<div class="worker_details_name_container">';
		parsed_worker += '<button class="menu_button edit_button" onclick="toggle_edit_worker_name()" data-target-content="worker_details">&nbsp</button>';
		if(edit_worker_name == true)
		{
			parsed_worker += '<input class="worker_details_name_edit" value="' + capitalizeFirstLetter(worker['name']) + '" maxlength="12"></input>';
		}
		else
		{
			parsed_worker += '<span class="worker_details_name">' + capitalizeFirstLetter(worker['name']) + '</span>';
		}
		parsed_worker += 	'</div>';

		parsed_worker += '<div class="worker_upgrades">';
		$.each(all_upgrades, function(upgrade_id, useless_data){
			var current_level = worker[upgrade_id + '_level'];
			var upgrade_cost = calculate_worker_upgrade_cost(current_level);
			var upgrade_disabled = '';
			if(gamedata['coins'] < upgrade_cost)
			{
				upgrade_disabled = 'danger';
			}
			parsed_worker += 	'<div class="single_worker_upgrade upgrade_' + upgrade_id + '">';
			parsed_worker += 		'<button class="menu_button upgrade_button ' + upgrade_disabled + '" onclick="upgrade_worker(\'' + upgrade_id + '\')" data-target-content="worker_details">&nbsp</button>';
			parsed_worker += 		'<span class="single_worker_upgrade_info">';
			/*parsed_worker += 			'<div class="single_worker_upgrade_name">' + capitalizeFirstLetter(upgrade_id) + ': ' + current_level + '</div>';*/
			parsed_worker += 			'<div class="single_worker_upgrade_name">Level: ' + current_level + '</div>';
			parsed_worker += 			'<div class="single_worker_upgrade_cost">Cost: ' + nFormatter(gamedata['coins'],3) + ' / ' + nFormatter(upgrade_cost,3) + ' coins</div>';
			parsed_worker += 		'</span>';
			
			parsed_worker += 	'</div>';
		});
		parsed_worker += '</div>';
	}
	else
	{
		// name

		parsed_worker += '<div class="worker_details_name_container">';
		parsed_worker += '<span class="worker_details_name">' + capitalizeFirstLetter(worker['name']) + '</span>';
		parsed_worker += '</div>';
	
		// actions

		parsed_worker += '<div class="worker_details_actions_container">';
		var actions_active = 'active_' + viewing_worker_actions;
		parsed_worker += '<div class="worker_details_actions_tab ' + actions_active + '" onclick="viewing_worker_actions=true;show_worker_details()">Actions</div>';
		if(count_object(gamedata['owned_locations']) > 0)
		{
			parsed_worker += '<div class="worker_details_training_tab ' + actions_active + '" onclick="viewing_worker_actions=false;show_worker_details()">Training</div>';
		}

		if(viewing_worker_actions == true)
		{
			if(worker['viewing_subtype'] == undefined){worker['viewing_subtype'] = 'all';}
			if(worker_info['action_subtypes'][worker['viewing_subtype']] == undefined){worker['viewing_subtype'] = 'all';}
			var viewing_subtype = worker['viewing_subtype'] + '';
			viewing_subtype = capitalizeFirstLetter(viewing_subtype.replaceAll('_',' '));
			parsed_worker += '<div class="worker_subtypes_container"><button class="back_button square_button" onclick="find_action_subtype(\'' + worker_id + '\',-1);show_worker_details();"></button>' + viewing_subtype + '<button class="next_button square_button" onclick="find_action_subtype(\'' + worker_id + '\',1);show_worker_details();"></button></div>';
			
			var actions_found = 0;
			parsed_worker += '<div class="worker_details_actions">';
			$.each(worker_info['actions'], function(action_id, useless_data){
				if(available_actions[action_id] != undefined)
				{
					var current_action_info = available_actions[action_id];
					var can_show_action = true;
					if(worker['viewing_subtype'] != 'all' && match_array_values(worker['viewing_subtype'], current_action_info['subtypes']) == false)
					{
						can_show_action = false;
					}
					/*$.each(available_actions[action_id]['cost'], function(cost_id, cost_amount){
						if(gamedata['produced'][cost_id] == undefined)
						{
							can_show_action = false;
						}
					});*/
					$.each(available_actions[action_id]['cost'], function(cost_id, cost_amount){
						if(gamedata['inventory'][cost_id] == undefined || (gamedata['produced'][cost_id] == undefined && gamedata['inventory'][cost_id] < 1))
						{
							can_show_action = false;
						}
					});
					if(available_actions[action_id]['min_power'] != undefined && get_worker_power(worker_id) < available_actions[action_id]['min_power'])
					{
						can_show_action = false;
					}
					if(available_actions[action_id]['locations_needed'] != undefined)
					{
						$.each(available_actions[action_id]['locations_needed'], function(location_id, min_level){
							if(gamedata['owned_locations'][location_id] == undefined || gamedata['owned_locations'][location_id] < min_level)
							{
								can_show_action = false;
							}
						});
					}
					if(can_show_action == true)
					{
						var max_time = 1 + Math.floor(worker['endurance_level'] * worker_info['base_endurance'] * 0.1);
						actions_found++;
						switch(current_action_info['type']){
							case 'resource':
								selected_time_amount = max_time;
								var main_item = '';
								var gained_amount = 0;
								$.each(available_actions[action_id]['loot'], function(loot_id, loot_amount){
									if(main_item == ''){main_item = loot_id;gained_amount = Math.floor(loot_amount * get_loot_bonus(loot_id)) * selected_time_amount;}
									/*if(gamedata['inventory'][loot_id] == undefined)
									{
										gamedata['inventory'][loot_id] = 0;
										saveToLocalStorage();
									}*/
								});
								var owned_amount = get_item_owned_amount(main_item);
								parsed_worker += 	'<div class="worker_action_image" onclick="selected_time_amount=' + selected_time_amount + ';current_worker_action=\'' + action_id + '\';start_current_action();" style="background-image:url(images/' + available_items[main_item]['image'] + ')"><div class="action_item_earned">+' + nFormatter(gained_amount,3) + '</div><div class="action_item_owned">' + nFormatter(owned_amount,3) + '</div></div>';
							break;
							case 'crafting':
								var can_craft = true;
								parsed_worker += '<div class="worker_action_bar recipe_bar">';
								var max_craft = calculate_max_owned(current_action_info['cost']);
								selected_time_amount = max_time;
								if(selected_time_amount > max_craft)
								{
									selected_time_amount = max_craft;
								}
								if(selected_time_amount < 1)
								{
									selected_time_amount = 1;
								}
								if(worker['action_id'] != 'none'){selected_time_amount = 1;}
								$.each(current_action_info['cost'], function(cost_id, cost_amount){
									var owned_amount = get_item_owned_amount(cost_id);
									var have_enough = true;
									if((cost_amount * selected_time_amount) > owned_amount){
										can_craft = false;
										have_enough = false;
									};

									parsed_worker += 	'<div class="worker_action_image cost_image have_enough_' + have_enough + '" style="background-image:url(images/' + available_items[cost_id]['image'] + ')"><div class="action_item_owned">' + nFormatter(owned_amount,3) + '</div><div class="action_item_earned">-' + (cost_amount * selected_time_amount) + '</div></div>';
								});
								parsed_worker += 	'<span style="display:inline-block;float:right;">';
								$.each(current_action_info['loot'], function(cost_id, cost_amount){
									var owned_amount = get_item_owned_amount(cost_id);
									var result_amount = Math.floor(cost_amount * get_loot_bonus(cost_id)) * selected_time_amount;
									if(result_amount < 1)
									{
										result_amount = (Math.ceil(result_amount * 100) / 100);
									}
									if(can_craft == true && gamedata['inventory'][cost_id] == undefined)
									{
										//gamedata['inventory'][cost_id] = 0;
										//saveToLocalStorage();
									}
									if(gamedata['produced'][cost_id] != undefined)
									{
										parsed_worker += 	'<div class="worker_action_image" style="background-image:url(images/' + available_items[cost_id]['image'] + ')"><div class="action_item_owned">' + nFormatter(owned_amount,3) + '</div><div class="action_item_earned">+' + nFormatter(result_amount,3) + '</div></div>';
									}
									else
									{
										parsed_worker += 	'<div class="worker_action_image"><div class="unknown_item_text">?</div></div>';
									}
								});
								parsed_worker += 	'</span>';
								if(worker['action_id'] != 'none'){can_craft = false;}
								if(can_craft == true)
								{
									var show_craft_amount = '&nbsp;';
									if(selected_time_amount > 1)
									{
										show_craft_amount = selected_time_amount;
									}
									parsed_worker += 	'<button class="view_action_button square_button craft_button" onclick="selected_time_amount=' + selected_time_amount + ';current_worker_action=\'' + action_id + '\';start_current_action();">' + show_craft_amount + '</button>';
								}
								parsed_worker += '</div>';
							break;
							case 'combat':
								var can_craft = true;
								var action_level = '';
								selected_time_amount = max_time;
								if(current_action_info['level'] != undefined)
								{
									selected_time_amount = 1;
									action_level = 'lvl ' + (current_action_info['level'] /** selected_time_amount*/);
								}
								parsed_worker += '<div class="worker_action_bar recipe_bar">';
								$.each(current_action_info['cost'], function(cost_id, cost_amount){
									var owned_amount = get_item_owned_amount(cost_id);
									var have_enough = true;
									if((cost_amount * selected_time_amount) > owned_amount){
										can_craft = false;
										have_enough = false;
									};

									parsed_worker += 	'<div class="worker_action_image cost_image have_enough_' + have_enough + '" style="background-image:url(images/' + available_items[cost_id]['image'] + ')"><div class="action_item_owned">' + nFormatter(owned_amount,3) + '</div><div class="action_item_earned">-' + (cost_amount * selected_time_amount) + '</div></div>';
								});
								
								parsed_worker += 	'<div class="worker_action_image" style="background-image:url(images/' + current_action_info['image'] + ')"><div class="action_item_earned">' + action_level + '</div></div>';
								if(can_craft == true)
								{
									/*parsed_worker += 	'<button class="view_action_button combat_button danger square_button" onclick="selected_time_amount=' + selected_time_amount + ';current_worker_action=\'' + action_id + '\';start_current_action();"></button>';*/
									parsed_worker += 	'<button class="view_action_button combat_button danger square_button menu_button" onclick="current_worker_action=\'' + action_id + '\'" data-target-content="action_details"></button>';

								}
								parsed_worker += '</div>';
							break;
							default:
								parsed_worker += '<div class="worker_action_bar recipe_bar">';
								/*parsed_worker += 	'<div class="worker_action_name">' + capitalizeFirstLetter(available_actions[action_id]['name']) + '</div>';*/
								parsed_worker += 	'<div class="worker_action_image" style="background-image:url(images/' + current_action_info['image'] + ')"></div>';
								parsed_worker += 	'<div class="worker_action_description">' + capitalizeFirstLetter(available_actions[action_id]['description']) + '</div>';
								parsed_worker += 	'<button class="menu_button view_action_button next_button" onclick="current_worker_action=\'' + action_id + '\'" data-target-content="action_details">&nbsp;</button>';
								parsed_worker += '</div>';
						}
					}
				}
			});
			if(actions_found == 0)
			{
				//parsed_worker += '<div class="worker_action_bar">';
				parsed_worker += 	'<div class="worker_action_name no_actions_text">Nothing here yet.<br/>Unlock more locations <br/>or produce some new items.</div>';
				//parsed_worker += '</div>';
			}
			parsed_worker += '</div>';
		}
		else
		{

		// training

			parsed_worker += '<div class="worker_details_actions">';
			var training_option_count = 0;
			$.each(available_workers, function(training_worker_id, training_worker_info){
				if(training_worker_info['trained_from'] == worker['worker_id'] || (training_worker_info['trained_from'] == 'any' && training_worker_id != worker['worker_id']))
				{
					var to_train = available_workers[training_worker_id];

		
					var can_train = true;
					if(to_train['training_cost'] != undefined && count_object(to_train['training_cost']) > 0)
					{
						/*$.each(to_train['training_cost'], function(item_id, item_amount){
							if(gamedata['inventory'][item_id] == undefined)
							{
								can_train = false;
							}
						});*/
						$.each(to_train['needs_locations'], function(item_id, item_amount){
							if(gamedata['owned_locations'][item_id] == undefined || gamedata['owned_locations'][item_id] < item_amount)
							{
								can_train = false;
							}
						});
					}
					if(can_train == true){
						training_option_count++;
						parsed_worker += '<div class="worker_action_bar">';
						parsed_worker += 	'<div class="worker_action_name">' + capitalizeFirstLetter(training_worker_info['name']) + '</div>';
						parsed_worker += 	'<div class="worker_action_description">' + capitalizeFirstLetter(training_worker_info['description']) + '</div>';
						parsed_worker += 	'<button class="menu_button view_action_button next_button" onclick="training_id=\'' + training_worker_id + '\'" data-target-content="train_worker">&nbsp;</button>';
						parsed_worker += '</div>';
					}
					
				}
			});
			if(training_option_count  == 0)
			{
				parsed_worker += '<div class="worker_action_bar">';
				parsed_worker += 	'<div class="worker_action_name">No training available</div>';
				parsed_worker += '</div>';
			}
			parsed_worker += '</div>';
		}
	}
	parsed_worker += '</div>';


	return parsed_worker;
}

function find_action_subtype(worker_id, adjustment){
	var worker = gamedata['workers'][worker_id];
	var worker_info = available_workers[worker['worker_id']];
	if(worker['viewing_subtype'] == undefined){worker['viewing_subtype'] = 'all';}
	var last_subtype = 'all';
	var matched_current_subtype = false;
	var new_subtype = false;
	$.each(worker_info['action_subtypes'], function(subtype_id, useless_data){
		if(new_subtype == false)
		{
			if(adjustment == 1 && matched_current_subtype == true)
			{
				new_subtype = subtype_id;
			}
			if(subtype_id == worker['viewing_subtype'])
			{
				matched_current_subtype = true;
			}
			else
			{
				matched_current_subtype = false;
			}
			if(adjustment == -1 && matched_current_subtype == true)
			{
				new_subtype = last_subtype;
			}
		}
		last_subtype = subtype_id;
	});

	if(new_subtype == false && adjustment == 1)
	{
		new_subtype = 'all';
	}
	if(worker['viewing_subtype'] == 'all' && adjustment == -1)
	{
		new_subtype = last_subtype;
	}

	worker['viewing_subtype'] = new_subtype;
}

function calculate_max_owned(items){
	var max_owned = -1;
	$.each(items, function(item_id, item_amount){
		if(gamedata['inventory'][item_id] == undefined)
		{
			max_owned = 0;
		}
		else
		{
			var max_this = Math.floor(gamedata['inventory'][item_id] / item_amount);
			if(max_owned == -1 || max_this < max_owned)
			{
				max_owned = max_this;
			}
		}
	});
	return max_owned;
}

function get_worker_power(worker_id){
	var worker_power = 1;
	if(gamedata['workers'][worker_id] != undefined)
	{
		var worker = gamedata['workers'][worker_id];
		var worker_info = available_workers[worker['worker_id']];
		worker_power = worker_info['base_power'] * (1 + (worker[power_based_on + '_level'] / worker_power_effect));
	}
	return worker_power;
}

function calculate_worker_upgrade_cost(current_level){

	var worker_level_cost = 0;

	if(current_level > 0)
	{
		worker_level_cost = level_cost + (current_level * level_cost_increase_fixed);
		worker_level_cost = Math.floor(worker_level_cost * (1 + (current_level * level_cost_increase_factor)));
	}
	return worker_level_cost;
}

function upgrade_worker(upgrade_id){
	var worker = gamedata['workers'][current_worker_details];
	var current_level = worker[upgrade_id + '_level'];
	var upgrade_cost = calculate_worker_upgrade_cost(current_level);
	if(gamedata['coins'] >= upgrade_cost && current_level < 99)
	{
		gamedata['coins'] -= upgrade_cost;
		worker[upgrade_id + '_level']++;
		saveToLocalStorage();
		$('.coins_container').html(nFormatter(gamedata['coins'], 3) + ' coins');
	}
}

// ####################################################### Train worker ##############################################

function show_train_worker(){
	$('.train_worker_container').html('');
	var worker = gamedata['workers'][current_worker_details];
	var worker_info = available_workers[worker['worker_id']];
	var to_train = available_workers[training_id];

	var parsed_training = '';
	var can_train = true;
	parsed_training += '<div class="worker_training_details_container">';
	parsed_training += '<div class="training_name">' + capitalizeFirstLetter(to_train['name']) + '</div>';
	parsed_training += '<div class="training_description">' + capitalizeFirstLetter(to_train['description']) + '</div>';
	
	if(count_object(to_train['training_cost']) > 0)
	{
		parsed_training += '<b>Cost:</b><br/>';
		$.each(to_train['training_cost'], function(item_id, item_amount){
			var owned_amount = get_item_owned_amount(item_id);
			var total_cost_amount = item_amount;
			if(total_cost_amount > owned_amount)
			{
				can_train = false;
			}
			parsed_training += '' + total_cost_amount + ' ' + capitalizeFirstLetter(available_items[item_id]['name']) + ' (<span class="colored_text" style="color:' + get_percent_color(owned_amount, total_cost_amount) + '">' + owned_amount + '</span>)<br/>';
		});
	}

	parsed_training += '<br/><button class="menu_button back_button" data-target-content="worker_details">&nbsp;</button>';
	if(can_train == true)
	{
		parsed_training += '<button class="menu_button square_button people_button" onclick="train_now()" data-target-content="worker_details">&nbsp;</button>';
	}
	parsed_training += '</div>';

	$('.train_worker_container').html(parsed_training);
}

function train_now(){
	var worker = gamedata['workers'][current_worker_details];
	var worker_info = available_workers[worker['worker_id']];
	var to_train = available_workers[training_id];
	viewing_worker_actions = true;

	var can_train = true;
	if(count_object(to_train['training_cost']) > 0)
	{
		$.each(to_train['training_cost'], function(item_id, item_amount){
			var owned_amount = get_item_owned_amount(item_id);
			var total_cost_amount = item_amount;
			if(total_cost_amount > owned_amount)
			{
				can_train = false;
			}
		});
	}
	if(can_train == true)
	{
		$.each(to_train['training_cost'], function(item_id, item_amount){
			var owned_amount = get_item_owned_amount(item_id);
			var total_cost_amount = item_amount;
			gain_item(item_id, (total_cost_amount * -1));
		});
		worker['worker_id'] = training_id;
		if(worker['name'] == capitalizeFirstLetter(worker_info['name']) || worker['name'] == worker_info['name'])
		{
			worker['name'] = capitalizeFirstLetter(to_train['name']);
		}
		//gamedata['can_produce'] = {};
		saveToLocalStorage();
	}
}

// ####################################################### Action Details ##############################################

var selected_time_amount = 1;
function adjust_time_amount(amount){
	selected_time_amount += amount;
	{
		if(selected_time_amount < 1)
		{
			selected_time_amount = 1;
		}
	}
}

function show_action_details(){

	var worker = gamedata['workers'][current_worker_details];
	var worker_info = available_workers[worker['worker_id']];
	var current_action = available_actions[current_worker_action];

	var more_disabled = '';
	var less_disabled = '';

	if(worker['last_time_amount'] != undefined && last_content != 'action_details')
	{
		selected_time_amount = worker['last_time_amount'] + 0;
	}
	var max_time = 1 + Math.floor(worker['endurance_level'] * worker_info['base_endurance'] * 0.1);
	if(selected_time_amount >= max_time)
	{
		selected_time_amount = max_time;
		more_disabled = 'danger';
	}
	if(selected_time_amount == 1)
	{
		less_disabled = 'danger';
	}

	//selected_time_amount = 1;

	var actual_time = calculate_total_action_time(current_worker_action, current_worker_details, selected_time_amount);

	var parsed_action_details = '';

	
	parsed_action_details += '<div class="action_details_description">';
	parsed_action_details += '<div class="action_details_description_image" style="background-image:url(images/' + current_action['image'] + ')"></div>';
	if(current_action['type'] == undefined || current_action['type'] != 'combat')
	{
		parsed_action_details += '<div class="action_details_name">' + capitalizeFirstLetter(current_action['name']) + '</div>';
	}
	else
	{
		parsed_action_details += '<div class="action_details_name">' + capitalizeFirstLetter(current_action['name']) + ' (lvl ' + (selected_time_amount * current_action['level']) + ')</div>';
	}
	
	if(current_action['description'] != undefined)
	{
		parsed_action_details += current_action['description'] + '<br/>';
	}
	if(current_action['loot_description'] != undefined)
	{
		parsed_action_details += current_action['loot_description'];
	}
	
	parsed_action_details += '</div>'

	var can_perform = true;
	if(count_object(current_action['cost']) > 0)
	{
		parsed_action_details += '<br/><br/><b>Cost:</b><br/>';
		$.each(current_action['cost'], function(item_id, item_amount){
			var owned_amount = get_item_owned_amount(item_id);
			var total_cost_amount = item_amount * selected_time_amount;
			if(total_cost_amount > owned_amount)
			{
				can_perform = false;
			}
			parsed_action_details += '' + total_cost_amount + ' ' + capitalizeFirstLetter(available_items[item_id]['name']) + ' (<span class="colored_text" style="color:' + get_percent_color(owned_amount, total_cost_amount) + '">' + owned_amount + '</span>)<br/>';
		});
	}

	parsed_action_details += '</div>';

	parsed_action_details += '<div class="time_selection_container">';

	parsed_action_details += 	'<button class="menu_button min_button ' + less_disabled + '" onclick="adjust_time_amount(-100)" data-target-content="action_details">&nbsp;</button>';
	parsed_action_details += 	'<button class="menu_button back_button ' + less_disabled + '" onclick="adjust_time_amount(-1)" data-target-content="action_details">&nbsp;</button>';
	parsed_action_details += 	'<div class="actual_time">' + seconds_to_time(actual_time) + '</div>';
	parsed_action_details += 	'<button class="menu_button next_button ' + more_disabled + '" onclick="adjust_time_amount(1)" data-target-content="action_details">&nbsp;</button>';
	parsed_action_details += 	'<button class="menu_button max_button ' + more_disabled + '" onclick="adjust_time_amount(100)" data-target-content="action_details">&nbsp;</button>';

	parsed_action_details += '</div>';

	var start_amount = ' ' + selected_time_amount + ' times';
	if(selected_time_amount == 1){start_amount = '';}
	if(worker['action_id'] != 'none'){can_perform = false;}
	if(can_perform == true)
	{
		if(current_action['type'] == undefined || current_action['type'] != 'combat')
		{
			parsed_action_details += '<button class="start_action_button" onclick="start_current_action()">Do this' + start_amount + '</button>';
		}
		else
		{
			parsed_action_details += '<button class="start_action_button" onclick="start_current_action()">Attack!</button>';
		}
	}

	$('.action_details_container').html(parsed_action_details);
}

function start_current_action(){

	var worker = gamedata['workers'][current_worker_details];
	if(worker['action_id'] == 'none')
	{
		var worker_info = available_workers[worker['worker_id']];
		var current_action = available_actions[current_worker_action];
		if(selected_time_amount >= worker['endurance_level'] && (current_action['type'] == undefined || current_action['type'] != 'combat'))
		{
			selected_time_amount = worker['endurance_level'];
		}
		var actual_time = calculate_total_action_time(current_worker_action, current_worker_details, selected_time_amount);
		worker['action_id'] = current_worker_action;
		worker['action_amount'] = selected_time_amount;
		worker['done_time'] = actual_time + nowint();
		worker['last_time_amount'] = selected_time_amount + 0;
		worker['done_now'] = false;
		worker['start_time'] = nowint();

		$.each(current_action['cost'], function(item_id, item_amount){
			var total_cost_amount = item_amount * selected_time_amount * -1;
			gain_item(item_id, total_cost_amount);
		});

		play_sound_group('start');
		saveToLocalStorage();

		show_content('workers');
	}
}

function calculate_total_action_time(action_id, worker_id, amount){
	var worker = gamedata['workers'][worker_id];
	var worker_info = available_workers[worker['worker_id']];
	var current_action = available_actions[action_id];
	var total_time = Math.ceil((amount * current_action['time']) / (worker_info['base_speed'] + ((worker[speed_based_on + '_level'] - 1) / worker_speed_effect)));
	return total_time;
}

// ####################################################### Claim Actions ##############################################

var total_battle_time = 0;
var ally = {};
var enemy = {};
var round_number = 0;

function show_claim_action(){
	total_battle_time = 1000;
	ally = {};
	enemy = {};
	$('.claim_action_container').html('');
	var worker = gamedata['workers'][current_worker_details];
	var worker_info = available_workers[worker['worker_id']];
	$('.worker_details_bg').css('background-image', 'url(images/' + worker_info['image'] + ')');
	var current_action_id = worker['action_id'];
	var current_action = available_actions[current_action_id];
	var now = nowint();
	var loot_gained = 0;
	var worker_power = get_worker_power(current_worker_details) - 1;
	if(worker['done_time'] <= now)
	{
		if(current_action['type'] != 'combat')
		{
			var parsed_loot = parse_action_loot();
			$('.claim_action_container').html(parsed_loot);
		}
		else
		{
			// SHOW BATTLE
			$('.menu_container').hide();
			var battle_duration = 1000;
			var parsed_battle = '';
			parsed_battle += '<div class="unit enemy_unit" style="background-image:url(images/' + current_action['image'] + ')"><div class="unit_name">' + capitalizeFirstLetter(current_action['name']) + '</div><div class="health_container"><div class="health_bar"></div></div></div>';
			parsed_battle += '<br/>';
			parsed_battle += '<div class="unit ally_unit" style="background-image:url(images/' + worker_info['image'] + ')"><div class="unit_name">' + capitalizeFirstLetter(worker['name']) + '</div><div class="health_container"><div class="health_bar"></div></div></div>';


			var action_amount_effect = (1 + (worker['action_amount'] / 5));
			enemy = true_copyobject(current_action['stats']);
			ally = true_copyobject(worker_info['stats']);
			var ally_power_level = 1 + (worker['endurance_level'] / 10);
			enemy['side'] 	= 'enemy';
			enemy['power']	= Math.ceil(current_action['stats']['power'] * action_amount_effect);
			enemy['max_hp']	= Math.ceil(current_action['stats']['max_hp'] * action_amount_effect);
			enemy['hp']		= enemy['max_hp'] + 0;
			ally['side'] 	= 'ally';
			ally['power']	= worker_info['stats']['power'] * ally_power_level;
			ally['max_hp']	= worker_info['stats']['max_hp'] * ally_power_level;
			ally['hp']		= ally['max_hp'] + 0;
			round_number = Math.ceil(Math.random() * 2);

			var winner = process_turn('none');
			battle_duration += total_battle_time;
			//console.log(winner);
			var lost_battle = false;
			if(winner != 'ally')
			{
				lost_battle = true;
			}
			$('.claim_action_container').html(parsed_battle);
			setTimeout(function(){
				var parsed_loot = parse_action_loot(lost_battle);
				$('.claim_action_container').html(parsed_loot);
				$('.menu_container').show();
			},battle_duration);
		}
	}
	else
	{
		$('.claim_action_container').append('<div class="no_workers_text">This action is not ready yet.</div><br/>');
	}
}

function process_turn(winner){

	if(round_number / 2 == Math.ceil(round_number / 2))
	{
		var attacking_unit = ally;
		var defending_unit = enemy;
	}
	else
	{
		var attacking_unit = enemy;
		var defending_unit = ally;
	}

	var chosen_action = 'attack';
	var action_sound = '';

	if(attacking_unit['abilities'] != undefined)
	{
		chosen_action = get_random_key_from_object_based_on_num_value(attacking_unit['abilities']);
	}
	var action_info = all_abilities[chosen_action];
	if(action_info['target'] == 'self')
	{
		defending_unit = attacking_unit;
	}
	var can_proc = true;

	if(action_info['target_damaged'] != undefined && action_info['target_damaged'] == true && defending_unit['hp'] >= defending_unit['max_hp'])
	{
		can_proc = false;
	}

	if(can_proc == true && action_info['proc_chance'] >= (Math.random() * 100))
	{
		action_sound = action_info['sound'] + '';
		

		for (var i = action_info['proc_amount'] - 1; i >= 0; i--) {
			var action_hit = true;
			var damage_done = Math.ceil(Math.random() * attacking_unit['power'] * action_info['effect']);
			var damage_text = damage_done + '';
			if(action_info['can_evade'] == true && defending_unit['evade'] != undefined && (Math.random() * 100) < defending_unit['evade'] && defending_unit['hp'] > 0)
			{
				action_hit = false;
				damage_done = 0;
				damage_text = 'miss';
				if(action_info['miss_sound'] != undefined)
				{
					action_sound = action_info['miss_sound'];
				}
				else
				{
					action_sound = 'woosh';
				}
			}

			if(action_info['can_evade'] == true && defending_unit['block'] != undefined && (Math.random() * 100) < defending_unit['block'])
			{
				action_hit = false;
				damage_done = 0;
				damage_text = 'block';
				action_sound = 'block';
			}

			if(action_hit == true)
			{
				action_sound = action_info['sound'];
			}
			if(action_info['type'] == 'damage')
			{
				defending_unit['hp'] -= damage_done;
			}
			if(action_info['type'] == 'healing')
			{
				defending_unit['hp'] += damage_done;
				if(defending_unit['hp'] > defending_unit['max_hp'])
				{
					defending_unit['hp'] = defending_unit['max_hp'];
				}
			}
			var hp_left_percent = (defending_unit['hp'] / defending_unit['max_hp']) * 100;	

			place_fct_delayed('.' + defending_unit['side'] + '_unit', damage_text, action_info['color'], total_battle_time - 50);
			adjust_hp_delayed('.' + defending_unit['side'] + '_unit .health_bar', hp_left_percent, total_battle_time);

			var temp_action_sound = action_sound + '';
			play_combat_sound(temp_action_sound, total_battle_time);
			if(i > 0)
			{
				total_battle_time += 300;
			}
		};	
		total_battle_time += 200;
	}
		

	if(ally['hp'] > 0 && enemy['hp'] > 0 && round_number < 1000)
	{
		round_number += 1;
		total_battle_time += 200;
		winner = process_turn(winner);
	}
	else
	{
		total_battle_time += 500;
		if(ally['hp'] > 0 && enemy['hp'] <= 0)
		{
			setTimeout(function(){
				$('.enemy_unit').addClass('dead');
			},total_battle_time);
			winner = 'ally';
		}
		if(ally['hp'] <= 0 && enemy['hp'] > 0)
		{
			setTimeout(function(){
				$('.ally_unit').addClass('dead');
			},total_battle_time);
			winner = 'enemy';
		}
		total_battle_time += 1500;
	}
	return winner;
}

function adjust_hp_delayed(target, percent, delay){
	setTimeout(function(){
		$(target).css('width',percent + '%');
	},delay);
}

function place_fct_delayed(target, text, color, delay){
	setTimeout(function(){
		var floating_text = parse_floating_text(text, color);
		$(target).append(floating_text);
	},delay);
}

function play_combat_sound(sound_group, sound_delay){
	setTimeout(function(){
		play_sound_group(sound_group);
	},sound_delay);
};

function parse_action_loot(failed_it){
	var worker = gamedata['workers'][current_worker_details];
	var worker_info = available_workers[worker['worker_id']];
	$('.worker_details_bg').css('background-image', 'url(images/' + worker_info['image'] + ')');
	var current_action_id = worker['action_id'];
	var current_action = available_actions[current_action_id];
	var now = nowint();
	var loot_gained = 0;
	var worker_power = get_worker_power(current_worker_details) - 1;
	var parsed_loot = '<div class="action_loot">';
	var action_amount = worker['action_amount'];
	if(failed_it != undefined && failed_it == true)
	{
		action_amount = 0;
	}
	$.each(current_action['loot'], function(loot_id, loot_amount){
		var gained_amount = 0;
		var loot_bonus = get_loot_bonus(loot_id);
		var min_gained_amount = action_amount * Math.floor(loot_amount * loot_bonus);
		
		for (var i = action_amount - 1; i >= 0; i--) {
			var gained_this_run = round_by_percent(((Math.random() * worker_power * loot_amount) + (loot_amount)) * loot_bonus);
			/*if(count_object(current_action['cost']) > 0 && gained_this_run < 1)
			{
				gained_this_run = 1;
			}*/
			gained_amount += gained_this_run;
		};
		if(gained_amount > 0)
		{
			var is_new = false;
			if(gamedata['produced'][loot_id] == undefined){is_new = true;}
			gamedata['can_produce'][loot_id] = true;
			gamedata['produced'][loot_id] = true;
			var parsed_item = parse_item(loot_id, undefined, '', undefined, is_new);
			parsed_loot += parsed_item;
			loot_gained++;
			gain_item(loot_id, gained_amount);
			var bonus_gained = gained_amount - min_gained_amount;
			if(min_gained_amount > 0)
			{
				setTimeout(function(){
					$('.action_loot .item_container_' + loot_id + ' .amount_gained').html('+' + min_gained_amount + '&nbsp;');
					$('.action_loot .item_container_' + loot_id + ' .owned_amount').html(nFormatter((get_item_owned_amount(loot_id) - bonus_gained),3));
					$('.action_loot .item_container_' + loot_id + '').append(parse_floating_text('+' + min_gained_amount, 'rgba(250,250,250,1)'));
				},250);
			}
			if(bonus_gained > 0)
			{
				setTimeout(function(){
					$('.action_loot .item_container_' + loot_id + ' .amount_gained').html('+' + gained_amount + '&nbsp;');
					$('.action_loot .item_container_' + loot_id + ' .owned_amount').html(nFormatter(get_item_owned_amount(loot_id),3));
					$('.action_loot .item_container_' + loot_id + '').append(parse_floating_text('+' + bonus_gained, 'rgba(200,250,200,1)'));
				},750);
			}
		}
	});
	if(current_action['bonus_loot'] != undefined)
	{
		var bonus_loot_keys = {};
		$.each(current_action['bonus_loot'], function(loot_id, loot_info){
			bonus_loot_keys[loot_id] = loot_info['chance'];
		});
		var chosen_bonus_loot = get_random_key_from_object_based_on_num_value(bonus_loot_keys);
		if(current_action['bonus_loot'][chosen_bonus_loot] != undefined)
		{
			$.each(current_action['bonus_loot'][chosen_bonus_loot]['loot'], function(loot_id, loot_amount){
				var gained_amount = 0;
				var loot_bonus = get_loot_bonus(loot_id);
				var min_gained_amount = action_amount * Math.floor(loot_amount * loot_bonus);
				
				for (var i = action_amount - 1; i >= 0; i--) {
					var gained_this_run = round_by_percent(((Math.random() * worker_power * loot_amount) + (loot_amount)) * loot_bonus);
					/*if(count_object(current_action['cost']) > 0 && gained_this_run < 1)
					{
						gained_this_run = 1;
					}*/
					gained_amount += gained_this_run;
				};
				if(gained_amount > 0)
				{
					gamedata['can_produce'][loot_id] = true;
					gamedata['produced'][loot_id] = true;
					var parsed_item = parse_item(loot_id, undefined, '');
					parsed_loot += parsed_item;
					loot_gained++;
					gain_item(loot_id, gained_amount);
					var bonus_gained = gained_amount - min_gained_amount;
					if(min_gained_amount > 0)
					{
						setTimeout(function(){
							$('.action_loot .item_container_' + loot_id + ' .amount_gained').html('+' + min_gained_amount + '&nbsp;');
							$('.action_loot .item_container_' + loot_id + ' .owned_amount').html(nFormatter((get_item_owned_amount(loot_id) - bonus_gained),3));
							$('.action_loot .item_container_' + loot_id + '').append(parse_floating_text('+' + min_gained_amount, 'rgba(250,250,250,1)'));
						},250);
					}
					if(bonus_gained > 0)
					{
						setTimeout(function(){
							$('.action_loot .item_container_' + loot_id + ' .amount_gained').html('+' + gained_amount + '&nbsp;');
							$('.action_loot .item_container_' + loot_id + ' .owned_amount').html(nFormatter(get_item_owned_amount(loot_id),3));
							$('.action_loot .item_container_' + loot_id + '').append(parse_floating_text('+' + bonus_gained, 'rgba(200,250,200,1)'));
						},750);
					}
				}

			});
		}
	}
	worker['action_id'] = 		'none';
	worker['action_amount'] = 	0;
	worker['done_time'] = 		0;

	saveToLocalStorage();

	if(loot_gained == 0)
	{
		parsed_loot += '<div class="no_workers_text">The action failed to give any results.<br/>Better luck next time.</div>';
	}

	parsed_loot += '</div>';
	parsed_loot += '<button class="menu_button back_button" onclick="show_worker_upgrades=false;viewing_worker_actions=true;" data-target-content="worker_details">&nbsp;</button>';
	var can_perform = true;
	if(count_object(current_action['cost']) > 0)
	{
		$.each(current_action['cost'], function(item_id, item_amount){
			var owned_amount = get_item_owned_amount(item_id);
			var total_cost_amount = item_amount * worker['last_time_amount'];
			if(total_cost_amount > owned_amount)
			{
				can_perform = false;
			}
		});
	}
	if(can_perform == true)
	{
		var start_amount = ' ' + worker['last_time_amount'] + ' times';
		if(worker['last_time_amount'] >= 1){start_amount = '';}
		parsed_loot += '<button class="start_action_button" onclick="selected_time_amount=' + worker['last_time_amount'] + ';current_worker_action=\'' + current_action_id + '\';start_current_action()">Do again' + start_amount + '</button>';
	}

	return parsed_loot;
}

function get_loot_bonus(loot_id){
	var loot_bonus = 1;
	$.each(available_locations, function(location_id, location_info){
		if(location_info['bonus_items'] != undefined && location_info['bonus_items'][loot_id] != undefined && gamedata['owned_locations'][location_id] != undefined && gamedata['owned_locations'][location_id] > location_info['bonus_items'][loot_id])
		{
					loot_bonus += ((gamedata['owned_locations'][location_id] - location_info['bonus_items'][loot_id]) * loot_bonus_effect);
		}
	});
	return loot_bonus;
}