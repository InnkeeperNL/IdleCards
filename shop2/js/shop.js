var selling_amount = 0;
var selling_item = 'none';
var effective_trade_speed = 1;
var current_counter = 0;
var sell_use = 'sell';

function show_home(){
	$('.item_list').html('');
	var counter_count = check_counter_count();
	var new_counter_cost = calculate_new_counter_cost();

	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
		saveToLocalStorage();
	}

	//$('.all_counters').html('Coins: <span class="item_coins commas">' + numberWithCommas(gamedata['coins']) + '</span><br/><br/>');
	$('.all_counters').html('');

	

	eachoa(gamedata['counters'], function(counter_id, counter){
		var parsed_counter = '';
		var big_counter = '';
		if(count_object(gamedata['counters']) < 5){big_counter = 'big';}
		if(count_object(gamedata['counters']) < 7){$('.all_counters').removeClass('top');}else{$('.all_counters').addClass('top');}
		
		if(counter['item_id'] != 'none' && counter['item_amount'] > 0)
		{
			parsed_counter += 	'<div class="single_counter ' + big_counter + ' selling counter_' + counter_id + ' rarity_' + available_items[counter['item_id']]['rarity'] + '" style="background-image:url(images/' + available_items[counter['item_id']]['image'] + ')" onclick="check_single_counter(' + counter_id + ')">';
			parsed_counter += 		'<div class="counter_item_count">x' + nFormatter(counter['item_amount'], 0) + '</div>';
			parsed_counter += 		'<div class="counter_item_timer"></div>';
			parsed_counter += 	'</div>';
		}
		else
		{
			parsed_counter += 	'<div class="single_counter ' + big_counter + ' counter_' + counter_id + '" onclick="check_single_counter(' + counter_id + ')">';
			parsed_counter += 		'';
			parsed_counter += 	'</div>';
		}
		parsed_counter += 	'</div>';
		$('.all_counters').append(parsed_counter);
	});

	var can_buy_new_counter = '';
	if(gamedata['coins'] < new_counter_cost)
	{
		can_buy_new_counter = 'danger';
	}

	if(counter_count < 1)
	{
		$('.all_counters').append('<br/><br/><button class="menu_button ' + can_buy_new_counter + ' buy_new_counter_button" onclick="buy_new_counter()">Expand shop<br/>' + nFormatter(new_counter_cost, 3) + ' coins</button>');
	}
	
	var parsed_counter = '';
	parsed_counter += 	'<div class="single_counter achievement_button" onclick="show_content(\'achievements\')">Achievements</div><div class="single_counter buy_new_counter" onclick="show_content(\'set_counter\')">Inventory</div>';
	$('.new_counters').html(parsed_counter);
	//$('.all_counters').append(parsed_counter);
	update_counter_timers();
	get_effective_trade_speed();
	gain_item('coins',0);
	if(count_object(gamedata['inventory']) == 0 && count_object(gamedata['known_locations']) == 0)
	{
		/*unlock_location('farm', true);
		current_location = 'farm';
		show_current_location();
		current_action_id = 'clear_the_field';*/
		show_content('unlock_location');
	}
};

function check_single_counter(counter_id){
	if(gamedata['counters'][counter_id] != undefined)
	{
		if(gamedata['counters'][counter_id]['item_id'] == 'none')
		{
			/*current_counter = counter_id;
			show_content('set_counter');*/
		}
		else
		{
			clear_counter(counter_id);
			//gamedata['counters'][counter_id]['done_time'] -= 1;
			//update_counter_timers();
			//claim_counter(counter_id);
		}
	}
}

function check_counter_count(){
	if(gamedata['counters'] == undefined)
	{
		gamedata['counters'] = {
			0:{
				item_id: 		'none',
				item_amount: 	0,
				done_time: 		0
			}
		}
		saveToLocalStorage();
	}

	return count_object(gamedata['counters']);
};

function calculate_new_counter_cost(){
	var counter_count = count_object(gamedata['counters']);
	var new_counter_cost = base_counter_cost;
	for(i = 1; i < counter_count; i++)
	{
		new_counter_cost *= 2;
	}
	return Math.floor(new_counter_cost);
}

function buy_new_counter(){
	var counter_count = check_counter_count();
	var new_counter_cost = calculate_new_counter_cost();
	if(gamedata['coins'] >= new_counter_cost)
	{
		gamedata['coins'] -= new_counter_cost;
		gamedata['counters'][counter_count] = {
			item_id: 		'none',
			item_amount: 	0,
			done_time: 		0
		}
		saveToLocalStorage();
		show_home();
	}
	
}

function show_set_counter(){
	//set_item_sold('none');
	show_inventory_for_sales();
	//adjust_sell_amount(0);
		
}

function clear_counter(counter_id){
	if(gamedata['counters'][counter_id] != undefined && available_items[gamedata['counters'][counter_id]['item_id']] != undefined)
	{
		gain_item(gamedata['counters'][counter_id]['item_id'], gamedata['counters'][counter_id]['item_amount'], true, false);
		gamedata['counters'][counter_id]['item_id'] = 'none';
		gamedata['counters'][counter_id]['item_amount'] = 0;
		gamedata['counters'][counter_id]['done_time'] = 0;
		saveToLocalStorage();
		show_home();
	}
}

var current_inventory_page = 1;
var show_only_consumables = false;

function toggle_show_consumables(){
	if(show_only_consumables == true)
	{
		show_only_consumables = false;
		$('.toggle_show_consumables_button').html('All');
	}
	else
	{
		show_only_consumables = true;
		$('.toggle_show_consumables_button').html('Consumables');
	}
}

function show_inventory_for_sales(){
	if(gamedata['favourites'] == undefined)
	{
		gamedata['favourites'] = {};
	}

	var inventory_window_width = $('.item_list').width();
	var inventory_window_height = $('.item_list').height();

	var item_width = inventory_window_width * 0.25;
	if(inventory_window_width * 0.23 <= 100)
	{
		item_width = 85 + (inventory_window_width * 0.02);
		item_width = 90;
		//console.log(item_width);
	}
	if(inventory_window_width * 0.23 > 100)
	{
		item_width = 100 + (inventory_window_width * 0.02);
	}

	var inventory_h = 4;
	if(inventory_window_width > 0)
	{
		inventory_h = Math.floor(inventory_window_width / item_width);
		//console.log(inventory_h);
	}
	if(inventory_window_width > 780)
	{
		inventory_h = Math.floor(inventory_window_width / 105);
	}
	if(inventory_h < 1){inventory_h = 1;}


	var inventory_v = Math.floor(inventory_window_height / 110);
	
	//console.log(inventory_v);

	var visible_inventory = inventory_h * inventory_v;
	console.log(visible_inventory);
	var inventory_shown = 0;
	$('.item_list').html('');
	if(gamedata['inventory'] != undefined)
	{
		//gamedata['inventory'] = sortObj(gamedata['inventory']);
		eachoa(available_items, function(item_id, item_info){
			if(gamedata['inventory'][item_id] >= 0 && gamedata['favourites'][item_id] != undefined && gamedata['favourites'][item_id] == true/* && (show_only_consumables == false || item_info['consumable'] != undefined)*/)
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var parsed_item = parse_item(item_id);
					$('.item_list').append('<span class="inventory_item_container favorite_item" onclick="show_content(\'set_counter_item\');set_item_sold(\'' + item_id + '\');">' + parsed_item + '</span>');
				}
			}
		});
		eachoa(available_items, function(item_id, item_info){
			if(gamedata['inventory'][item_id] >= 0 && gamedata['favourites'][item_id] == undefined /*&& (show_only_consumables == false || item_info['consumable'] != undefined)*/)
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var parsed_item = parse_item(item_id);
					$('.item_list').append('<span class="inventory_item_container" onclick="show_content(\'set_counter_item\');set_item_sold(\'' + item_id + '\');">' + parsed_item + '</span>');
				}
			}
		});
		/*eachoa(available_items, function(item_id, item_info){
			if(gamedata['inventory'][item_id] >= 0 && gamedata['favourites'][item_id] != undefined && gamedata['favourites'][item_id] == false && (show_only_consumables == false || item_info['consumable'] != undefined))
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var parsed_item = parse_item(item_id);
					$('.item_list').append('<span class="inventory_item_container non_favorite_item" onclick="set_item_sold(\'' + item_id + '\');show_content(\'set_counter_item\')">' + parsed_item + '</span>');
				}
			}
		});*/
	}
	else
	{
		$('.item_list').html('Get items first');
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

	if(current_inventory_page > max_inventory_page)
	{
		current_inventory_page = max_inventory_page;
		show_inventory_for_sales();
	}
}

function adjust_inventory_page(amount){
	current_inventory_page += amount;
	if(current_inventory_page < 1)
	{
		current_inventory_page = 1;
	}
	show_inventory_for_sales();
}

function adjust_sell_amount(amount_to_adjust){

	selling_amount += amount_to_adjust;
	if(selling_amount < 0)
	{
		selling_amount = 0;
	}
	if(selling_amount > 17)
	{
		selling_amount = 17;
	}
	$('.amount_sold').html(nFormatter(to_the_tenth(1,selling_amount),3));
	show_time_sold();
	show_value_sold();
}

function set_item_sold(item_id, update_sell_amount){
	$('.item_list').html('');
	selling_item = item_id;
	var item_amount = 0;
	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {};
	}
	if(gamedata['favourites'] == undefined)
	{
		gamedata['favourites'] = {};
	}
	if(gamedata['inventory'][item_id] != undefined){item_amount = gamedata['inventory'][item_id];}
	if(update_sell_amount == undefined || update_sell_amount == true)
	{
		auto_set_selling_amount(item_amount);
		$('.amount_sold').html(nFormatter(to_the_tenth(1,selling_amount),3));
	}
	if(gamedata['favourites'][item_id] == undefined)
	{
		$('.favourite_button').removeClass('danger');
		$('.favourite_button').addClass('cool');
	}
	else
	{
		if(gamedata['favourites'][item_id] == true)
		{
			$('.favourite_button').removeClass('danger');
			$('.favourite_button').removeClass('cool');
		}
		else
		{
			$('.favourite_button').removeClass('cool');
			$('.favourite_button').addClass('danger');
		}
	}
	
	if(available_items[item_id] != undefined)
	{
		for (var i = 10 - 1; i >= 0; i--) {
			$('.selected_item').removeClass('rarity_' + i);
		};
		$('.selected_item').addClass('rarity_' + available_items[item_id]['rarity']);
		$('.item_sold').html(available_items[item_id]['name']);
		$('.selected_item').css('background-image', 'url(images/' + available_items[item_id]['image'] + ')');
		$('.selected_item').html('<span class="item_name">' + available_items[item_id]['name'] + '</span><span class="owned_amount item_' + item_id + '">' + nFormatter(item_amount, 3) + '</span>');
		if(available_items[item_id]['consumable'] != undefined)
		{
			$('.toggle_sell_use').show();
		}
		else
		{
			sell_use = 'sell';
			$('.toggle_sell_use').hide();
			$('.toggle_sell_use').removeClass('using_mode');
		}
	}
	else
	{
		$('.item_sold').html(item_id);
		$('.selected_item').removeClass('selling');
		$('.selected_item').css('background-image','none');
		$('.selected_item').html('');
		//sell_use = 'sell';
	}
	if(count_object(gamedata['counters']) > 1 && sell_use == 'sell')
	{
		$('.start_selling_all_button').show();
	}
	else
	{
		$('.start_selling_all_button').hide();
	}
	if(gamedata['counters'][current_counter]['item_id'] != 'none')
	{
		var found_free_counter = false;
		eachoa(gamedata['counters'], function(counter_id, counter_info){
			if(found_free_counter == false && counter_info['item_id'] == 'none')
			{
				found_free_counter = true;
				current_counter = counter_id;
			}
		});
	}
	if(sell_use == 'sell')
	{
		$('.toggle_sell_use').removeClass('using_mode');
		$('.selling_summary').show();
		$('.using_summary').hide();
		$('.start_using_button').hide();
		$('.start_selling_button').show();
		if(count_object(gamedata['counters']) < 2)
		{
			$('.start_selling_all_button').hide();
		}
	}
	else
	{
		if(available_items[item_id] != undefined && available_items[item_id]['consumable'] != undefined)
		{
			$('.toggle_sell_use').addClass('using_mode');
			$('.selling_summary').hide();
			$('.using_summary').show();
			$('.start_using_button').show();
			$('.start_selling_button').hide();
			check_can_use();
		}
	}

	var total_sold = 0;
	if(gamedata['achievements'] != undefined && gamedata['achievements'][item_id] != undefined)
	{
		total_sold = nFormatter(gamedata['achievements'][item_id]['progress'] ,1);
	}
	set_html('.item_sold_amount', total_sold);

	show_time_sold();
	show_value_sold();
}

function toggle_sell_use(){
	if(sell_use == 'sell')
	{
		sell_use = 'use';
	}
	else
	{
		sell_use = 'sell';
	}
	set_item_sold(selling_item, false);
}

function auto_set_selling_amount(amount){
	if(amount == 0)
	{
		adjust_sell_amount(0);
	}
	if(to_the_tenth(1,selling_amount+1) <= amount)
	{
		adjust_sell_amount(1);
		auto_set_selling_amount(amount);
	}
	if(to_the_tenth(1,selling_amount) > amount && selling_amount > 0)
	{
		adjust_sell_amount(-1);
		auto_set_selling_amount(amount);
	}

	
}

function toggle_favourite()
{
	if(gamedata['favourites'] == undefined)
	{
		gamedata['favourites'] = {};
	}
	if(gamedata['favourites'][selling_item] == undefined)
	{
		gamedata['favourites'][selling_item] = true;
	}
	else
	{
		if(gamedata['favourites'][selling_item] == true)
		{
			gamedata['favourites'][selling_item] = false;
		}
		else
		{
			delete gamedata['favourites'][selling_item];
		}
	}
	saveToLocalStorage();
	set_item_sold(selling_item, false);
}

function show_item_details_page(){
	selling_amount = 0;
	$('.item_list').html('');
	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {};
	}
	if(gamedata['inventory'][selling_item] != undefined){item_amount = gamedata['inventory'][selling_item];}
	if(available_items[selling_item] != undefined)
	{
		for (var i = 10 - 1; i >= 0; i--) {
			$('.selected_item').removeClass('rarity_' + i);
		};
		$('.selected_item').addClass('rarity_' + available_items[selling_item]['rarity']);
		$('.item_sold').html(available_items[selling_item]['name']);
		$('.selected_item').css('background-image', 'url(images/' + available_items[selling_item]['image'] + ')');
		$('.selected_item').html('<span class="item_name">' + available_items[selling_item]['name'] + '</span><span class="owned_amount item_' + selling_item + '">' + nFormatter(item_amount, 3) + '</span>');
	}
	else
	{
		$('.item_sold').html('');
		$('.selected_item').css('background-image','none');
		$('.selected_item').html('');
	}
	set_item_sold(selling_item, false);
	//show_time_sold();
	//show_value_sold();
}

function show_time_sold(){
	//get_effective_trade_speed();
	var total_time = 0;
	if(sell_use == 'sell')
	{
		if(selling_item != 'none' && available_items[selling_item] != undefined)
		{
			total_time = (to_the_tenth(1,selling_amount) * calculate_item_sell_time(available_items[selling_item]['value'], available_items[selling_item]['rarity']));
			if(total_time < 10)
			{
				$('.time_sold').html(seconds_to_time(Math.ceil(total_time * 10) / 10));
			}
			else
			{
				$('.time_sold').html(seconds_to_time(Math.ceil(total_time * 1) / 1));
			}
			
		}
		else
		{
			$('.time_sold').html('0s');
		}
		check_can_trade();
		check_can_use();
	}
	else
	{
		if(selling_item != 'none' && available_items[selling_item] != undefined && available_items[selling_item]['consumable'] != undefined && available_items[selling_item]['consumable']['time'] != undefined)
		{
			total_time = (to_the_tenth(1,selling_amount) * available_items[selling_item]['consumable']['time']);
			if(total_time < 10)
			{
				$('.time_sold').html(seconds_to_time(Math.ceil(total_time * 10) / 10));
			}
			else
			{
				$('.time_sold').html(seconds_to_time(Math.ceil(total_time * 1) / 1));
			}
			
		}
		else
		{
			$('.time_sold').html('NA');
		}
	}
}

function show_value_sold(){
	var total_value = 0;
	if(sell_use == 'sell')
	{
		if(selling_item != 'none' && available_items[selling_item] != undefined)
		{
			total_value = to_the_tenth(1,selling_amount) * available_items[selling_item]['value'];
			$('.coins_sold').html(nFormatter(total_value,3));
		}
		else
		{
			$('.coins_sold').html('0');
		}
	}
	else
	{
		if(selling_item != 'none' && available_items[selling_item] != undefined && available_items[selling_item]['consumable'] != undefined && available_items[selling_item]['consumable']['amount'] != undefined && available_items[selling_item]['consumable']['type'] != undefined)
		{
			var bonus_description = '';
			if(available_items[selling_item]['consumable']['type'] == 'work_effect')
			{
				bonus_description = 'work level';
			}
			if(available_items[selling_item]['consumable']['type'] == 'luck')
			{
				bonus_description = 'luck';
			}
			$('.item_effect').html('+' + available_items[selling_item]['consumable']['amount'] + ' ' + bonus_description);
			if(gamedata['temp_bonusses'] == undefined)
			{
				gamedata['temp_bonusses'] = {};
			}
			if(gamedata['temp_bonusses'][selling_item] != undefined)
			{
				var now = new Date().getTime();
				var bonus_time_left = Math.ceil((gamedata['temp_bonusses'][selling_item]['max_time'] - now) / 1000);
				$('.item_time_left').html(seconds_to_time(bonus_time_left));
			}
			else
			{
				$('.item_time_left').html('none');
			}
				
		}
		else
		{
			$('.item_effect').html('none');
		}
	}
}

function check_bonus_time_left(){
	if($('#content_set_counter_item').hasClass('active') && sell_use == 'use')
	{
		if(gamedata['temp_bonusses'][selling_item] != undefined)
		{
			var now = new Date().getTime();
			var bonus_time_left = Math.ceil((gamedata['temp_bonusses'][selling_item]['max_time'] - now) / 1000);
			if(bonus_time_left > 0)
			{
				$('.item_time_left').html(seconds_to_time(bonus_time_left));
			}
			else
			{
				delete gamedata['temp_bonusses'][selling_item];
				$('.item_container_' + selling_item + '.consuming').remove();
				$('.item_time_left').html('none');
			}
		}
	}

	if($('#content_current_action').hasClass('active'))
	{
		eachoa(gamedata['temp_bonusses'], function(bonus_id, bonus_info){
			if(available_items[bonus_id]['consumable']['type'] == 'luck')
			{
				var now = new Date().getTime();
				var bonus_time_left = Math.ceil((gamedata['temp_bonusses'][bonus_id]['max_time'] - now) / 1000);
				if(bonus_time_left <= 0)
				{
					delete gamedata['temp_bonusses'][bonus_id];
					$('.item_container_' + bonus_id + '.consuming').remove();
					show_current_action();
				}
			}
		});
	}
}

function count_free_counters(){
	var free_counters = 0;
	eachoa(gamedata['counters'], function(counter_id, counter_info){
		if(counter_info['item_id'] == 'none')
		{
			free_counters += 1;
		}
	});

	return free_counters;
}

function check_can_trade(){
	var found_free_counter = false;
	eachoa(gamedata['counters'], function(counter_id, counter_info){
		if(found_free_counter == false && counter_info['item_id'] == 'none')
		{
			found_free_counter = true;
			current_counter = counter_id;
		}
	});
	if(gamedata['inventory'] != undefined && gamedata['inventory'][selling_item] != undefined && to_the_tenth(1,selling_amount) <= gamedata['inventory'][selling_item] && gamedata['counters'][current_counter]['item_id'] == 'none')
	{
		var max_sell_stacks = Math.floor(gamedata['inventory'][selling_item] / to_the_tenth(1,selling_amount));
		var free_counters = count_free_counters();
		if(free_counters < max_sell_stacks)
		{
			max_sell_stacks = free_counters;
		}
		$('.start_selling_button').removeClass('disabled');
		if(max_sell_stacks < 2)
		{
			$('.start_selling_all_button').html('Sell 1 stack');
			$('.start_selling_all_button').hide();
		}
		else
		{
			$('.start_selling_all_button').html('Sell ' + max_sell_stacks + ' stacks');
			$('.start_selling_all_button').show();
		}
		return true;
	}
	else
	{
		$('.start_selling_button').addClass('disabled');
		$('.start_selling_all_button').html('Sell 1 stack');
		$('.start_selling_all_button').hide();
		return false;
	}
}

function check_can_use(){
	if(gamedata['inventory'] != undefined && gamedata['inventory'][selling_item] != undefined && to_the_tenth(1,selling_amount) <= gamedata['inventory'][selling_item])
	{
		$('.start_using_button').removeClass('disabled');
		return true;
	}
	else
	{
		$('.start_using_button').addClass('disabled');
		return false;
	}
}


function start_selling(){
	if(check_can_trade())
	{
		$('.home_button').removeClass('danger');
		gamedata['inventory'][selling_item] -= to_the_tenth(1,selling_amount);
		gamedata['counters'][current_counter] = {
			item_id: 		selling_item,
			item_amount: 	to_the_tenth(1,selling_amount),
			done_time: 		current_time(),
		}
		saveToLocalStorage();
		show_content('home');
		return true;
	}
	return false;
}

function start_using(){
	if(gamedata['temp_bonusses'] == undefined)
	{
		gamedata['temp_bonusses'] = {};
	}
	if(check_can_use())
	{
		gamedata['inventory'][selling_item] -= to_the_tenth(1,selling_amount);
		if(gamedata['temp_bonusses'][selling_item] == undefined)
		{
			gamedata['temp_bonusses'][selling_item] = {
				max_time:  new Date().getTime()
			};
		}
		gamedata['temp_bonusses'][selling_item]['max_time'] += (available_items[selling_item]['consumable']['time'] * to_the_tenth(1,selling_amount)) * 1000;
		saveToLocalStorage();
		set_item_sold(selling_item, false);
	}
}

function start_selling_all(){
	if(start_selling())
	{
		start_selling_all();
	}
	else
	{
		/*if(selling_amount > 0)
		{
			selling_amount -= 1;
			start_selling_all();
		}*/
	}
}

function calculate_item_sell_time(value, rarity){
	if(rarity == undefined){rarity = 1;}
	var rarity_factor = 1;
	for (var i = rarity; i > 1; i--) {
		rarity_factor *= 2;
	};
	var sell_time = ((value /rarity_factor) / (1 + (Math.sqrt(Math.sqrt(value)) / base_sell_value_speed_factor)) / effective_trade_speed) * base_sell_speed;
	return sell_time;
}

function update_counter_timers(){
	//get_effective_trade_speed();
	if($('#content_home').hasClass('active') || true)
	{
		var any_counter_empty = 0;
		var counter_count = check_counter_count();
		eachoa(gamedata['counters'], function(counter_id, counter){
			if(counter['item_id'] != 'none')
			{
				var time_left = current_time() - counter['done_time'];
				if(time_left > 0)
				{
					if(counter['item_amount'] > 0)
					{
						var item_time = (calculate_item_sell_time(available_items[counter['item_id']]['value'], available_items[counter['item_id']]['rarity']));
						var items_sold = Math.floor((time_left) / item_time);
						if(counter['item_amount'] < items_sold)
						{
							items_sold = counter['item_amount'];
						}
						var ticks_passed = Math.floor(((time_left) + item_time) / item_time);
						//if(ticks_passed < 1 && time_left == 0){ticks_passed = 1;}
						//if(ticks_passed > 10){ticks_passed = Math.ceil(ticks_passed / 10);}
						if(items_sold >= 1)
						{
								//show_content('none');
							
							counter['item_amount'] -= items_sold;
							var spare_time = (time_left) - (items_sold * item_time);
							counter['done_time'] += items_sold * item_time;
							check_achievements(counter['item_id'], undefined, items_sold);
							if(selling_item == counter['item_id'] && current_content == 'set_counter_item'){
								var total_sold = nFormatter(gamedata['achievements'][counter['item_id']]['progress'], 1);
								set_html('.item_sold_amount',total_sold);
							}
							gain_item('coins', available_items[counter['item_id']]['value'] * items_sold);
							if($('#content_home').hasClass('active'))
							{
								var parsed_floating_text = parse_floating_text('+' + nFormatter(available_items[counter['item_id']]['value'] * items_sold, 1) + '', 'rgba(240, 230, 48,1)');
								$('.counter_' + counter_id + ' .floating_text').remove();
								$('.counter_' + counter_id).append(parsed_floating_text);
								$('.counter_' + counter_id + ' .counter_item_count').html('x' + nFormatter(counter['item_amount'], 0));
								//$('.counter_' + counter_id + ' .counter_item_timer').html(seconds_to_time(Math.ceil(spare_time)) + '.');
								//$('.counter_' + counter_id + ' .counter_item_timer').html(('Sold!'));
							}
						}

						var time_to_sale = Math.ceil(item_time - time_left);
						if(time_to_sale < 0){time_to_sale = 0;}
						
						if($('#content_home').hasClass('active'))
						{
							var parsed_time_left = '';
							if(item_time >= 1)
							{
								parsed_time_left = seconds_to_time(time_to_sale);
							}
							if($('.counter_' + counter_id + ' .counter_item_timer').html() != parsed_time_left)
							{
								$('.counter_' + counter_id + ' .counter_item_timer').html(parsed_time_left);
							}
						}
						
					

						if(counter['item_amount'] <= 0)
						{
							any_counter_empty += 1;
							counter['item_id'] = 'none';
							//$('.counter_' + counter_id).html('Select item');
							if($('#content_home').hasClass('active'))
							{
								for (var i = 10 - 1; i >= 0; i--) {
									$('.counter_' + counter_id + '').removeClass('rarity_' + i);
								};
								$('.counter_' + counter_id + '').removeClass('selling');
								$('.counter_' + counter_id + ' .counter_item_count').remove();
								$('.counter_' + counter_id + ' .counter_item_timer').remove();
								$('.counter_' + counter_id).append('');
								$('.counter_' + counter_id).css('background-image','');
							}
							if($('#content_set_counter_item').hasClass('active'))
							{
								check_can_trade();
							}
							//show_home();
						}
					}
				}
				/*else
				{					
					$('.counter_' + counter_id + ' .counter_item_timer').html(seconds_to_time(Math.ceil(time_left)));
				}*/
			}
			else
			{
				any_counter_empty += true;
			}
		});

		if(any_counter_empty == counter_count)
		{
			$('.home_button').addClass('danger');
		}
		else
		{
			$('.home_button').removeClass('danger');
		}
		if(any_counter_empty < counter_count && any_counter_empty > 0)
		{
			$('.home_button').addClass('cool');
		}
		else
		{
			$('.home_button').removeClass('cool');
		}
	}
	
}

function get_effective_trade_speed(){
	if(gamedata['trade_speed'] == undefined)
	{
		gamedata['trade_speed'] = 1;
	}
	//effective_trade_speed = ((1 - (1/trade_speed_upgrade_effect)) + ((gamedata['trade_speed'] * gamedata['trade_speed']) / trade_speed_upgrade_effect));
	effective_trade_speed = to_the_nth(1, (gamedata['trade_speed'] - 1), trade_speed_upgrade_effect);

	if(gamedata['prestige'] == undefined){gamedata['prestige'] = 0;}
	for (var i = 1; i <= gamedata['prestige']; i++) {
		effective_trade_speed *= trade_speed_per_prestige;
	};

	if(100 / effective_trade_speed > 50)
	{
		$('.trade_speed_level').html(gamedata['trade_speed'] + ' (' + nFormatter(100 * effective_trade_speed) + '%)');
	}
	else
	{
		if(100 / effective_trade_speed > 10)
		{
			$('.trade_speed_level').html(gamedata['trade_speed'] + ' (' + nFormatter(100 * effective_trade_speed, 1) + '%)');
		}
		else
		{
			$('.trade_speed_level').html(gamedata['trade_speed'] + ' (' + nFormatter(100 * effective_trade_speed, 2) + '%)');
		}
	}
	
	get_trade_speed_cost();
};

function get_trade_speed_cost(){
	var trade_speed_cost = to_the_nth(100, gamedata['trade_speed'] -1, 3);
	//var trade_speed_cost = (100 * gamedata['trade_speed'] * gamedata['trade_speed'] * gamedata['trade_speed']);
	$('.trade_speed_cost').html(nFormatter(trade_speed_cost, 3));
	return trade_speed_cost;
}

function upgrade_trade_speed(){
	var trade_speed_cost = get_trade_speed_cost();
	if(gamedata['coins'] >= trade_speed_cost)
	{
		gain_item('coins', trade_speed_cost * -1);
		gamedata['trade_speed'] += 1;
	}
	show_home();
}

function claim_counter(counter_id){
	check_counter_count();

	if(gamedata['counters'][counter_id]['item_id'] != 'none')
	{
		/*gain_coins(gamedata['counters'][counter_id]['item_amount'] * available_items[gamedata['counters'][counter_id]['item_id']]['value']);
		gamedata['counters'][counter_id] = {
			item_id: 		'none',
			item_amount: 	0,
			done_time: 		0
		}
		saveToLocalStorage();
		show_home();*/
		gamedata['counters'][counter_id]['done_time'] -= 1;
		update_counter_timers();
	}
	else
	{
		
	}
	
}

function gain_coins(amount){
	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
		saveToLocalStorage();
	}

	gamedata['coins'] += amount;
	saveToLocalStorage();
}