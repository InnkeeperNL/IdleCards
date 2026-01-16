var current_location = '';
var current_location_page = 1;

function show_locations(){
	$('.locations_container').html('');

	if(count_object(gamedata['owned_locations']) == 0)
	{
		gamedata['owned_locations']['forest'] = {
			resources:{
				firewood: 	true,
			}
		}
	}

	var owned_locations = '';
	var unowned_locations = '';
	gamedata['visible_locations'] = {};
	if(current_location_page < 1)
	{
		current_location_page = 1;
	}

	var inventory_window_width = $('.locations_container').width();
	var inventory_window_height = $('.locations_container').height();

	var inventory_h = 1;
	if(inventory_window_width >= 740)
	{
		inventory_h = 2;
	}

	var inventory_v = Math.floor(inventory_window_height / 68);

	var visible_inventory = inventory_h * inventory_v;
	if(visible_inventory < 1){visible_inventory = 1;}
	var inventory_shown = 0;

	$.each(available_locations, function(location_id, location_info){
		if(gamedata['owned_locations'][location_id] != undefined)
		{
			inventory_shown++;
			if(inventory_shown > visible_inventory * (current_location_page -1) && inventory_shown <= visible_inventory * (current_location_page))
			{
				var parsed_location = parse_location_button(location_id);
				owned_locations += parsed_location;
			}
		}
	});

	$('.locations_container').html(owned_locations + unowned_locations);

	var max_inventory_page = Math.ceil(inventory_shown / visible_inventory);
	if(max_inventory_page < 1)
	{
		max_inventory_page = 1;
	}

	if(inventory_shown > visible_inventory * current_location_page)
	{
		$('.page_further').html('>');
	}
	else
	{
		$('.page_further').html('');
	}

	if(current_location_page == 1)
	{
		$('.page_back').html('');
	}
	else
	{
		$('.page_back').html('<');
	}

	$('.page_number').html(current_location_page + ' / ' + max_inventory_page);

	if(current_location_page > max_inventory_page){
		current_location_page = max_inventory_page;
		show_locations();
	}
}

function adjust_locations_page(amount){
	current_location_page += amount;
	if(current_location_page < 1)
	{
		current_location_page = 1;
	}
	show_locations();
}

function parse_location_button(location_id){
	var parsed_location = '';
	var current_location = available_locations[location_id];

	parsed_location += 	'<div class="location owned_true location_id_' + location_id + '">';
	parsed_location += 		'<div class="bg" style="background-image:url(images/' + current_location['image'] + ')"></div>';
	parsed_location += 		'<div class="location_name" onclick="current_location=\'' + location_id + '\';show_content(\'location_details\')">' + capitalizeFirstLetter(current_location['name']) + ' </div>';
	parsed_location += 	'</div>';

	return parsed_location;
}

function parse_location(location_id, owned){
	var parsed_location = '';
	var current_location = available_locations[location_id];
	var can_unlock = true;
	var location_level = 0;
	var level_name = '';
	var no_more_levels = false;
	var maxed_out = false;
	if(gamedata['owned_locations'][location_id] != undefined)
	{
		location_level = gamedata['owned_locations'][location_id];
		level_name = '<div class="location_level">lvl ' + location_level + '</div>';
		if(current_location['upgrade_costs'][location_level + 1] == undefined && location_level > 0)
		{
			level_name = '<div class="location_level">max</div>';
			maxed_out = true;
		}
	}

	var location_collapsed = '';
	if(gamedata['visible_locations'][location_id] != undefined)
	{
		location_collapsed = 'active';
	}


	parsed_location += 	'<div class="location owned_' + owned + ' maxed_' + maxed_out + ' location_id_' + location_id + ' ' + location_collapsed + '">';
	parsed_location += 		'<div class="bg" style="background-image:url(images/' + current_location['image'] + ')"></div>';
	parsed_location += 		'<div class="location_name" onclick="show_content(\'locations\')">' + capitalizeFirstLetter(current_location['name']) + '</div>';
	
	if(owned == false)
	{
		
		var have_needed_locations = true;
		if(current_location['needs_locations'][location_level + 1] != undefined)
		{
			$.each(current_location['needs_locations'][location_level + 1], function(needed_id, needed_level){
				if(gamedata['owned_locations'][needed_id] == undefined || gamedata['owned_locations'][needed_id] < needed_level)
				{
					have_needed_locations = false;
				}
			});
		}
		parsed_location += '<div class="location_cost">';
		if(current_location['descriptions'] != undefined)
		{
			$.each(current_location['descriptions'], function(description_id, description_text){
				if(description_id == 0 || description_id == location_level + 1)
				{
					if(description_id > 0)
					{
						description_text = 'Next level ' + description_text;
					}
					parsed_location += '<div class="location_description">' + description_text + '</div>';
				}
			});
		}

		if(current_location['bonus_items'] != undefined)
		{
			var found_bonus_item = false;
			$.each(current_location['bonus_items'], function(bonus_id, min_level){
				if(min_level <= location_level)
				{
					if(found_bonus_item == false)
					{
						found_bonus_item = true;
						parsed_location += '<div class="breaker"><br/>Items</div>';
					}
					var bonus_amount = Math.floor((location_level - min_level) * loot_bonus_effect * 100);
					var bonus_amount_string = '';
					if(bonus_amount > 0)
					{
						bonus_amount_string = '+' + bonus_amount + '%';
					}
					parsed_location += 	'<div class="location_bonus_item" style="background-image:url(images/' + available_items[bonus_id]['image'] + ')"><div class="location_bonus_amount">' + bonus_amount_string + '</div></div>';
				}
			});
		}
		if(current_location['unlock_workers'] != undefined)
		{
			var found_workers = false;
			$.each(current_location['unlock_workers'], function(bonus_id, min_level){
				if(min_level <= location_level)
				{
					if(found_workers == false)
					{
						found_workers = true;
						parsed_location += '<div class="breaker"><br/>Workers</div>';
					}
					parsed_location += 	'<div class="location_bonus_item" style="background-image:url(images/' + available_workers[bonus_id]['image'] + ')"></div>';
				}
			});
		}
		if(current_location['unlock_customers'] != undefined)
		{
			var found_customers = false;
			$.each(current_location['unlock_customers'], function(bonus_id, min_level){
				if(min_level <= location_level)
				{
					if(found_customers == false)
					{
						found_customers = true;
						parsed_location += '<div class="breaker"><br/>Customers</div>';
					}
					parsed_location += 	'<div class="location_bonus_item" style="background-image:url(images/' + all_customers[bonus_id]['image'] + ')"></div>';
				}
			});
		}

		if(current_location['upgrade_costs'][location_level + 1] != undefined || location_level == 0)
		{
			if(have_needed_locations == true)
			{
				parsed_location += '<div class="location_cost_title">Cost:</div>';
				var total_cost = 0;
				var total_owned_cost = 0;
				if(location_level >= 0)
				{
					var current_cost_list = current_location['cost'];
					var upgrade_cost_factor = get_location_cost_factor(location_level);
					if(current_location['upgrade_costs'] != undefined && current_location['upgrade_costs'][location_level + 1] != undefined)
					{
						current_cost_list = current_location['upgrade_costs'][location_level + 1];
						upgrade_cost_factor = 1;
					}
					$.each(current_cost_list, function(item_id, item_amount){
						var item_owned = get_item_owned_amount(item_id);
						var location_cost_factor = upgrade_cost_factor;
						var actual_cost = item_amount * location_cost_factor;
						var item_amount_color = get_percent_color(item_owned, actual_cost);
						parsed_location += '' + nFormatter(actual_cost,3) + ' ' + capitalizeFirstLetter(available_items[item_id]['name']) + ' (<span class="colored_text" style="color:' + item_amount_color + '">' + nFormatter(item_owned,3) + '</span>)<br/>';
						total_cost += actual_cost * available_items[item_id]['value'];
						if(item_owned < actual_cost)
						{
							can_unlock = false;
							total_owned_cost += item_owned * available_items[item_id]['value'];
						}
						else
						{
							total_owned_cost += actual_cost * available_items[item_id]['value'];
						}
					});
				}
				else
				{
					var upgrade_cost = calculate_location_upgrade_cost(location_level);
					var item_amount_color = get_percent_color(gamedata['coins'], upgrade_cost);
					if(upgrade_cost > gamedata['coins']){can_unlock = false;}
					parsed_location += '' + nFormatter(upgrade_cost,3) + ' coins (<span class="colored_text" style="color:' + item_amount_color + '">' + nFormatter(gamedata['coins'],3) + '</span>)<br/>';
				}
			}
			else
			{
				parsed_location += '<div class="location_cost_title">Needed to upgrade:</div>';
				$.each(current_location['needs_locations'][location_level + 1], function(needed_id, needed_level){
					var level_high_enough = 'enough';
					if(gamedata['owned_locations'][needed_id] == undefined || gamedata['owned_locations'][needed_id] < needed_level)
					{
						level_high_enough = 'not_enough';
					}
					parsed_location += '<span class="' + level_high_enough + ' bordered_text">' + capitalizeFirstLetter(available_locations[needed_id]['name']) + ' level ' + needed_level + '</span><br/>';
				});
			}
		}
		else
		{
			no_more_levels = true;
		}
		parsed_location += '</div>';
		if(no_more_levels == false && can_unlock == true && location_level == 0 && have_needed_locations == true)
		{
			parsed_location +=	'<button class="menu_button unlock_location_button" onclick="unlock_location(\'' + location_id + '\')" data-target-content="locations">Unlock</button>';
		}
		if(no_more_levels == false && can_unlock == true && location_level > 0 && have_needed_locations == true)
		{
			parsed_location +=	'<button class="menu_button unlock_location_button" onclick="unlock_location(\'' + location_id + '\')" data-target-content="locations">Upgrade</button>';
		}
		if(no_more_levels == false && can_unlock == false && location_level >= 0 && have_needed_locations == true)
		{
			var progress_percent = Math.floor((total_owned_cost / total_cost) * 100);
			parsed_location +=	'<div class="unlock_progress_container">';
			parsed_location +=		'<div class="unlock_progress" style="color:' + get_percent_color(total_owned_cost, total_cost) + ';">' + progress_percent + '%</div>';
			parsed_location +=	'</div>';
		}
		/*if(can_unlock == false && location_level > 0 && have_needed_locations == true)
		{
			var progress_percent = Math.floor((gamedata['coins'] / upgrade_cost) * 100);
			parsed_location +=	'<div class="unlock_progress_container" onclick="toggle_location_details(\'' + location_id + '\')">';
			parsed_location +=		'<div class="unlock_progress" style="color:' + get_percent_color(gamedata['coins'], upgrade_cost) + ';">' + progress_percent + '%</div>';
			parsed_location +=	'</div>';
		}*/
	}
	parsed_location += 	'</div>';

	return parsed_location;
}

function show_location_details(){
	if(current_location != '' && available_locations[current_location] != undefined)
	{
		gamedata['visible_locations'][current_location] = true;
		var parsed_location = parse_location(current_location, false);
		$('.location_details_container').html(parsed_location);
	}
	else
	{
		show_content('locations');
	}
}

function calculate_location_upgrade_cost(level){
	return base_location_upgrade_cost * get_location_cost_factor(level);
}

function get_location_cost_factor(level){
	var cost = to_the_nth(1, level, location_cost_factor);
	return cost;
}

function toggle_location_details(location_id){
	if($('.location_id_' + location_id + '').hasClass('active'))
	{
		if(gamedata['visible_locations'][location_id] != undefined)
		{
			delete gamedata['visible_locations'][location_id];
		}
		$('.location_id_' + location_id + '').removeClass('active');
	}
	else
	{
		if(gamedata['visible_locations'][location_id] == undefined)
		{
			gamedata['visible_locations'][location_id] = true;
		}
		$('.location_id_' + location_id + '').addClass('active');
	}
}

function unlock_location(location_id){
	var location_level = 0;
	if(gamedata['owned_locations'][location_id] != undefined)
	{
		location_level = gamedata['owned_locations'][location_id];
	}
	var current_location = available_locations[location_id];
	var can_unlock = true;
	var current_cost_list = current_location['cost'];
	var upgrade_cost_factor = get_location_cost_factor(location_level);
	if(current_location['upgrade_costs'] != undefined && current_location['upgrade_costs'][location_level + 1] != undefined)
	{
		current_cost_list = current_location['upgrade_costs'][location_level + 1];
		upgrade_cost_factor = 1;
	}
	$.each(current_cost_list, function(item_id, item_amount){
		var item_owned = get_item_owned_amount(item_id);
		if(item_owned < item_amount * upgrade_cost_factor)
		{
			can_unlock = false;
		}
	});
	if(can_unlock == true)
	{
		$.each(current_cost_list, function(item_id, item_amount){
			gain_item(item_id, (item_amount * upgrade_cost_factor) * -1);
		});
		if(gamedata['owned_locations'][location_id] != undefined)
		{
			gamedata['owned_locations'][location_id] += 1;
		}
		else
		{
			gamedata['owned_locations'][location_id] = 1;
		}
		saveToLocalStorage();
	}
	show_location_details();
}

function upgrade_location(location_id){
	var location_level = 0;
	if(gamedata['owned_locations'][location_id] != undefined)
	{
		location_level = gamedata['owned_locations'][location_id];
	}
	var current_location = available_locations[location_id];
	var can_unlock = true;
	var upgrade_cost = calculate_location_upgrade_cost(location_level);
	if(upgrade_cost > gamedata['coins']){can_unlock = false;}
	if(can_unlock == true)
	{
		gamedata['coins'] -= upgrade_cost;
		if(gamedata['owned_locations'][location_id] != undefined)
		{
			gamedata['owned_locations'][location_id] += 1;
		}
		else
		{
			gamedata['owned_locations'][location_id] = 1;
		}
		saveToLocalStorage();
	}
	show_location_details();
}