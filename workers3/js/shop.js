var highest_customer_id = 0;

function show_home(){
	if(gamedata['customers'] == undefined){gamedata['customers'] = {};}
	if(gamedata['latest_cutomer'] == undefined){gamedata['latest_cutomer'] = nowint();}
	check_new_customers();
	$('.menu_button_home').removeClass('danger');
	$('.shop_container').html('');
	$('.coins_container').html(nFormatter(gamedata['coins'], 3) + ' coins');
	var max_customers = get_max_customers();
	
	$.each(gamedata['customers'], function(customer_id, customer_info){
		if(customer_id > max_customers)
		{
			delete gamedata['customers'][customer_id];
			saveToLocalStorage();
		}
	});

	var all_customers = '';
	for (var i = 1; i <= max_customers; i++) {
		all_customers += '<div class="customer_slot customer_slot_' + i + '">';
		if(gamedata['customers'][i] != undefined)
		{
			var parsed_customer = parse_customer(i, true);
			all_customers += parsed_customer;
		}
		all_customers += '</div>';
	};
	/*$.each(gamedata['customers'], function(customer_id, customer_info){
		var parsed_customer = parse_customer(customer_id, true);
		all_customers += parsed_customer;
	});*/
	$('.shop_container').html(all_customers);
	update_shop_bottom_bar();
}

function update_shop_bottom_bar(){
	var max_customers = get_max_customers();
	var customer_counter_container_text = '';
	var max_declines = calculate_max_declines();
	if(max_declines >= min_declines)
	{
		customer_counter_container_text += '<div class="favor_counter"><div class="bg favor_bg"></div><span>' + (Math.floor(gamedata['declines_left'] * 10) / 10) + ' / ' + max_declines + '</span></div>';
	}
	$('.customer_counter_container').html(customer_counter_container_text);
}

function calculate_max_declines(){
	var max_declines = Math.floor((Math.sqrt(gamedata['sales_amount'] / 1)));
	return max_declines;
}

function parse_customer(customer_id, clickable){
	var parsed_customer = '';
	if(gamedata['customers'][customer_id] != undefined)
	{
		var customer_info = gamedata['customers'][customer_id];
		var customer_details = all_customers[customer_info['id']];
		var clickable_stuff = '';
		if(clickable == true)
		{
			clickable_stuff = 'onclick="show_customer_details(' + customer_id + ')"';
		}
		parsed_customer += '<div class="worker_bar customer_id_' + customer_id + ' customer_' + customer_info['buy_sell'] + '" ' + clickable_stuff + '>';
		parsed_customer += 	'<div class="worker_bar_image" style="background-image:url(images/' + customer_details['image'] + ')"></div>';
		parsed_customer += 	'<div class="worker_bar_name">' + capitalizeFirstLetter(customer_details['name']) + '</div>';
		var current_action_name = '';
		var hide_buy_button = '';
		var hide_remove_button = '';
		var buying_item = false;
		var can_sell = false;
		if(available_items[customer_info['item_id']] != undefined)
		{
			var owned_amount = get_item_owned_amount(customer_info['item_id']);
			buying_item = available_items[customer_info['item_id']];
			current_action_name += parse_customer_offer(customer_id);
			if((customer_info['buy_sell'] == undefined || customer_info['buy_sell'] == 'buy') && get_item_owned_amount(customer_info['item_id']) >= customer_info['item_amount'])
			{
				can_sell = true;
			}
			if(customer_info['buy_sell'] != undefined && customer_info['buy_sell'] == 'sell' && Math.ceil(customer_info['item_amount'] * buying_item['value'] / 2) < gamedata['coins'])
			{
				can_sell = true;
			}
			if(can_sell == false)
			{
				//current_action_name = '<span class="idle_text">' + current_action_name + '</span>';
				hide_buy_button = 'disabled';
				hide_remove_button = '';
			}
		}
		/*if(calculate_max_declines() < min_declines)
		{
			hide_remove_button = 'hidden';
		}*/
		parsed_customer += 	'<div class="worker_bar_action">' + current_action_name + '</div>';
		parsed_customer +=	'<div class="customer_buttons_container">';
		if((clickable == undefined || clickable == false) && calculate_max_declines() >= min_declines && gamedata['declines_left'] >= suggest_cost)
		{
			var possible_sales = get_possible_sales(customer_info['id'], customer_info['buy_sell'], customer_info['item_id']);
			if(count_object(possible_sales) > 0)
			{
				parsed_customer += 		'<button class="customer_button sell_button" onclick="suggest_customer(' + customer_id + ')">Suggest<div class="favor_cost"><div class="bg favor_bg"></div><span>-' + suggest_cost + '</span></div></button>';
			}
		}
		if(customer_info['buy_sell'] == undefined || customer_info['buy_sell'] == 'buy')
		{
			parsed_customer += 		'<button class="customer_button sell_button ' + hide_buy_button + '" onclick="sell_to_customer(' + customer_id + ')">Sell</button>';
		}
		else
		{
			parsed_customer += 		'<button class="customer_button gold sell_button ' + hide_buy_button + '" onclick="sell_to_customer(' + customer_id + ')">Buy</button>';
		}
		
		parsed_customer +=	'</div>';
		if(clickable == undefined || clickable == false)
		{
			parsed_customer += 		'<button class="customer_button remove_customer_button ' + hide_remove_button + ' danger" onclick="remove_customer(' + customer_id + ')">No</button>';
		}
		parsed_customer +=	'</div>';
	}

	return parsed_customer;
}

function suggest_customer(customer_id){
	if(gamedata['declines_left'] >= suggest_cost)
	{
		var customer_info = gamedata['customers'][customer_id];
		var possible_sales = get_possible_sales(customer_info['id'], customer_info['buy_sell'], customer_info['item_id']);
		var chosen_item_id = get_random_key_from_object(possible_sales);
		var chosen_item_amount = Math.ceil(Math.random() * possible_sales[chosen_item_id]);
		if(customer_info['buy_sell'] == 'sell')
		{
			chosen_item_amount += Math.floor(Math.random() * (Math.sqrt(gamedata['highest_coins']) / available_items[chosen_item_id]['value']));
		}
		if(customer_info['buy_sell'] == 'buy' && chosen_item_amount > gamedata['inventory'][chosen_item_id])
		{
			chosen_item_amount = gamedata['inventory'][chosen_item_id];
		}
		gamedata['customers'][customer_id]['item_id'] = chosen_item_id;
		gamedata['customers'][customer_id]['item_amount'] = chosen_item_amount;
		gamedata['declines_left'] -= 10;
		saveToLocalStorage();
		show_customer_details(customer_id);
		update_shop_bottom_bar();
	}
}

function show_customer_details(customer_id){
	if(gamedata['customers'][customer_id] != undefined)
	{
		show_content('customer');
		$('.customer_details_container').html(parse_customer(customer_id));
	}
	else
	{
		show_content('home');
	}
}

function update_customers(){
	$.each(gamedata['customers'], function(customer_id, customer_info){
		var customer_info = gamedata['customers'][customer_id];
		var customer_details = all_customers[customer_info['id']];
		var customer_item = '';
		if(available_items[customer_info['item_id']] != undefined)
		{
			customer_item += parse_customer_offer(customer_id);
			$('.customer_id_' + customer_id + ' .worker_bar_action').html(customer_item);
			if(customer_info['buy_sell'] == undefined || customer_info['buy_sell'] == 'buy')
			{
				if(get_item_owned_amount(customer_info['item_id']) >= customer_info['item_amount'])
				{
					$('.customer_id_' + customer_id + ' .sell_button').removeClass('hidden');
				}
				else
				{
					$('.customer_id_' + customer_id + ' .sell_button').addClass('hidden');
				}
			}
			if(customer_info['buy_sell'] != undefined && customer_info['buy_sell'] == 'sell')
			{
				if(Math.ceil(customer_info['item_amount'] * available_items[customer_info['item_id']]['value'] / 2) < gamedata['coins'])
				{
					$('.customer_id_' + customer_id + ' .sell_button').removeClass('hidden');
				}
				else
				{
					$('.customer_id_' + customer_id + ' .sell_button').addClass('hidden');
				}
			}
		}
	});
	if(calculate_max_declines() < min_declines)
	{
		$('.remove_customer_button').addClass('hidden');
	}
	else
	{
		$('.remove_customer_button').removeClass('hidden');
	}
	update_shop_bottom_bar();
}

function parse_customer_offer(customer_id){
	var customer_info = gamedata['customers'][customer_id];
	var customer_details = all_customers[customer_info['id']];
	var customer_item = '';
	var have_enough = true;
	if(available_items[customer_info['item_id']] != undefined)
	{
		var owned_amount = get_item_owned_amount(customer_info['item_id']);
		var buying_item = available_items[customer_info['item_id']];
		var parsed_amount = '1 ';
		if(customer_info['item_amount'] > 1)
		{
			parsed_amount = nFormatter(customer_info['item_amount'],3) + ' ';
		}
		if(customer_info['buy_sell'] == undefined || customer_info['buy_sell'] == 'buy')
		{
			if(owned_amount < customer_info['item_amount']){have_enough = false;}
			customer_item += 	'<div class="worker_action_image worker_action_image_small cost_image have_enough_' + have_enough + '" style="background-image:url(images/' + buying_item['image'] + ')"><div class="action_item_owned">' + nFormatter(owned_amount) + '</div><div class="action_item_earned">-' + nFormatter(customer_info['item_amount'],3) + '</div></div>';
			customer_item += 	'<div class="worker_action_image worker_action_image_small" style="background-image:url(images/coin-g001c09f55_640.jpg)"><div class="action_item_owned hidden">' + nFormatter(gamedata['coins']) + '</div><div class="action_item_earned coins_text">+' + nFormatter(customer_info['item_amount'] * buying_item['value'],3) + '</div></div>';
			//customer_item = '-' + parsed_amount + capitalizeFirstLetter(buying_item['name']) + ' (<span class="colored_text" style="color:' + get_percent_color(owned_amount, customer_info['item_amount']) + '">' + nFormatter(owned_amount,1) + '</span>)<br/><span class="coins_text">+' + (customer_info['item_amount'] * buying_item['value']) + '</span>';
		}
		else
		{
			var buy_value = Math.ceil(customer_info['item_amount'] * buying_item['value'] / 2);
			if(gamedata['coins'] < buy_value){have_enough = false;}
			customer_item += 	'<div class="worker_action_image worker_action_image_small cost_image have_enough_' + have_enough + '" style="background-image:url(images/coin-g001c09f55_640.jpg)"><div class="action_item_owned hidden">' + nFormatter(gamedata['coins']) + '</div><div class="action_item_earned coins_text">-' + nFormatter(buy_value,3) + '</div></div>';
			customer_item += 	'<div class="worker_action_image worker_action_image_small"  style="background-image:url(images/' + buying_item['image'] + ')"><div class="action_item_owned">' + nFormatter(owned_amount) + '</div><div class="action_item_earned">+' + nFormatter(customer_info['item_amount'],3) + '</div></div>';
			

/*			customer_item = '<span class="coins_text">-' + buy_value + ' coins</span> (<span class="colored_text" style="color:' + get_percent_color(gamedata['coins'], buy_value) + '">' + nFormatter(gamedata['coins'],1) + '</span>)<br/>+' + parsed_amount + capitalizeFirstLetter(buying_item['name']);
			customer_item = '<span class="coins_text">-' + buy_value + '</span><br/>+' + parsed_amount + capitalizeFirstLetter(buying_item['name']);*/
		}
	}
	return customer_item;
}

function sell_to_customer(customer_id){

	var customer_info = gamedata['customers'][customer_id];
	var customer_details = all_customers[customer_info['id']];
	var can_sell = false;
	var buy_sell = 'buy';
	if(customer_info['buy_sell'] != undefined && customer_info['buy_sell'] == 'sell')
	{
		buy_sell = 'sell';
	}
	if(available_items[customer_info['item_id']] != undefined && buy_sell == 'buy')
	{
		if(get_item_owned_amount(customer_info['item_id']) >= customer_info['item_amount'])
		{
			can_sell = true;
		}
	}
	if(buy_sell == 'sell' && gamedata['coins'] >= Math.ceil(customer_info['item_amount'] * available_items[customer_info['item_id']]['value'] / 2))
	{
		can_sell = true;
	}
	if(can_sell == true)
	{
		show_content('home');
		var current_customer_count = count_object(gamedata['customers']);
		var max_customers = 0;
		if(gamedata['produced'] != undefined && count_object(gamedata['produced']) > 0)
		{
			max_customers = get_max_customers();
		}
		if(current_customer_count >= max_customers || true)
		{
			gamedata['latest_cutomer'] = nowint() + 1;
		}
		var coins_text = '';

		if(buy_sell == 'buy')
		{
			gamedata['inventory'][customer_info['item_id']] -= customer_info['item_amount'];
			var sale_value = (customer_info['item_amount'] * available_items[customer_info['item_id']]['value']);
			var sale_time_factor = 0 + (/*Math.sqrt*/(Math.sqrt(sale_value / customer_time_per_value)));
			//gamedata['coins'] += sale_value;
			gain_item('coins', sale_value);
			if(gamedata['customer_history'][customer_info['id']]['sales'] == undefined){gamedata['customer_history'][customer_info['id']]['sales'] = 0;}
			gamedata['customer_history'][customer_info['id']]['sales'] += sale_value;
			coins_text = parse_floating_text('+' + nFormatter(sale_value, 3), 'rgba(250,250,200,1)');
		}
		if(buy_sell == 'sell')
		{
			gain_item(customer_info['item_id'], customer_info['item_amount']);
			var sale_value = Math.ceil(customer_info['item_amount'] * available_items[customer_info['item_id']]['value'] / 2);
			var sale_time_factor = 1 + (Math.sqrt(sale_value / customer_time_per_value));
			gamedata['coins'] -= sale_value;
			gamedata['customer_history'][customer_info['id']]['sales'] = 0;
			coins_text = parse_floating_text('-' + nFormatter(sale_value, 3), 'rgba(150,100,100,1)');
		}
		$('.customer_id_' + customer_id + ' .customer_button').remove();
		$('.customer_id_' + customer_id).addClass('removed');
		$('.customer_slot_' + customer_id + '').append(coins_text);
		play_sound_group('money');
		/*setTimeout(function(){*/
			/*$('.coins_container').addClass('bump');*/
			$('.coins_container').html(nFormatter(gamedata['coins'], 3) + ' coins');
		/*},300);*/
		setTimeout(function(){
			$('.customer_id_' + customer_id + '.removed').remove();
			$('.coins_container').removeClass('bump');
		},700);
		gamedata['latest_cutomer'] = nowint() + 5;
		delete gamedata['customers'][customer_id];
		gamedata['sales_amount']++;
		var max_declines = calculate_max_declines();
		if(gamedata['declines_left'] < max_declines)
		{
			gamedata['declines_left'] += declines_gained_per_sale;
		}
		if(gamedata['declines_left'] > max_declines)
		{
			gamedata['declines_left'] = max_declines;
		}
		gamedata['customer_history'][customer_info['id']]['last_visit'] = nowint() + Math.floor(get_random_customer_time() * sale_time_factor);
		gamedata['customer_history'][customer_info['id']]['served']++;
		saveToLocalStorage();
		update_customers();
	}
}

function remove_customer(customer_id){
	show_content('home');
	if(calculate_max_declines() >= min_declines || true)
	{
		var customer_info = gamedata['customers'][customer_id];
		var current_customer_count = count_object(gamedata['customers']);
		var max_customers = 0;
		var sale_value = (customer_info['item_amount'] * available_items[customer_info['item_id']]['value']);
		var sale_time_factor = (1 + (sale_value / customer_time_per_value)) * 5;
		if(gamedata['inventory'][customer_info['item_id']] == undefined || gamedata['inventory'][customer_info['item_id']] < customer_info['item_amount'])
		{
			sale_time_factor = 1;
		}
		if(gamedata['produced'] != undefined && count_object(gamedata['produced']) > 0)
		{
			max_customers = get_max_customers();
		}
		if(current_customer_count >= max_customers || true)
		{
			gamedata['latest_cutomer'] = nowint() + 1;
		}
		$('.customer_id_' + customer_id + ' .customer_button').remove();
		$('.customer_id_' + customer_id).addClass('removed');
		var temp_customer_id = customer_id + 0;
		setTimeout(function(){
			$('.customer_id_' + temp_customer_id + '.removed').remove();
		},1000);
		delete gamedata['customers'][customer_id];
		//gamedata['declines_left'] -= 1;
		if(gamedata['declines_left']<0){gamedata['declines_left']=0;}
		gamedata['customer_history'][customer_info['id']]['last_visit'] = nowint() + Math.floor(get_random_customer_time() * sale_time_factor);
		saveToLocalStorage();
		update_customers();
	}
}

function get_max_customers(){
	if(gamedata['produced'] == undefined){gamedata['produced'] = {};}
	if(count_object(gamedata['produced']) > 0)
	{
		return Math.ceil(Math.sqrt(count_object(gamedata['produced']) / 4)) + 0;
	}
	return 1;
}

function check_new_customers(){
	get_next_customer_time();
	var max_customers = 0;
	if(gamedata['produced'] != undefined && count_object(gamedata['produced']) > 0)
	{
		max_customers = get_max_customers();
	}

	var current_customer_count = count_object(gamedata['customers']);
	if(current_customer_count < max_customers && gamedata['latest_cutomer'] <= nowint())
	{
		var new_customer_id = get_new_customer();
		if(new_customer_id > -1)
		{
			current_customer_count = count_object(gamedata['customers']);
			if(current_customer_count < max_customers)
			{
				gamedata['latest_cutomer'] += 5;
				/*console.log('ding');*/
			}
			else
			{
				gamedata['latest_cutomer'] = nowint() + 5;
			}
			saveToLocalStorage();
			play_sound_group('customer');
			if($('#content_home').hasClass('active'))
			{
				var parsed_customer = parse_customer(new_customer_id, true);
				parsed_customer = '<div class="slide_in">' + parsed_customer + '</div>';
				$('.shop_container .customer_slot_' + new_customer_id).append(parsed_customer);
			}
			else
			{
				$('.menu_button_home').addClass('danger');
			}
		}
		else
		{
			gamedata['latest_cutomer'] = nowint() + get_next_global_customer_time();
		}
	}
	
	increase_customer_times();
	
	/*else
	{
		console.log(gamedata['latest_cutomer'] - nowint())
	}*/
	
}

function increase_customer_times(){
	var current_time = nowint();
	$.each(gamedata['customer_history'], function(customer_id, customer_info){
		if(customer_info['last_visit'] <= current_time - 1)
		{
			gamedata['customer_history'][customer_id]['last_visit'] = current_time + (get_random_customer_time() * 1);
		}
	});
}

function get_random_customer_time(){
	return next_customer = 1 + (Math.random() * base_next_customer);
	//return ((Math.random() * next_customer) + (next_customer / 5));
}

function get_next_customer_time(){
	var effective_items = count_object(gamedata['produced']) - count_object(gamedata['locked_items']);
	next_customer = 1 + (Math.random() * base_next_customer) /*/ (0.9 + (Math.sqrt(effective_items) / 10))*/;
}

function get_next_global_customer_time(){
	return (Math.ceil(Math.random() * (next_customer / 10)) + 5);
}

function get_possible_sales(customer_id, buy_sell, not_this){
	var customer_info = all_customers[customer_id];
	var all_customer_items = {};
	$.each(customer_info[buy_sell + 's'], function(buys_id, buys_amount){
		if((buy_sell == 'sell' || (gamedata['inventory'][buys_id] > 0 && gamedata['locked_items'][buys_id] == undefined)) && buys_id != not_this)
		{
			all_customer_items[buys_id] = buys_amount;
		}
	});
	return all_customer_items;
}

function get_new_customer(){
	var possible_customer_count = 0;
	var possible_customers = {};
	var current_customers = {};
	$.each(gamedata['customers'], function(current_customer_id, current_customer_info){
		current_customers[current_customer_info['id']] = true;
	});
	$.each(all_customers, function(customer_id, customer_info){
		if(gamedata['customer_history'][customer_id] == undefined)
		{
			gamedata['customer_history'][customer_id] = {
				served: 		0,
				last_visit: 	0,
				sales: 			0,
			};
		}
		var can_visit = true;
		$.each(customer_info['needs_locations'], function(location_id, min_level){
			if(gamedata['owned_locations'][location_id] == undefined || gamedata['owned_locations'][location_id] < min_level)
			{
				can_visit = false;
			}
		});
		if(can_visit == true)
		{
			$.each(customer_info['buys'], function(buys_id, buys_amount){
				if(current_customers[customer_id] == undefined && gamedata['inventory'][buys_id] != undefined && (gamedata['inventory'][buys_id] >= 1) && gamedata['locked_items'][buys_id] == undefined && gamedata['customer_history'][customer_id]['last_visit'] < nowint())
				{
					if(possible_customers[customer_id] == undefined)
					{
						possible_customers[customer_id] = 1;
					}
					if(gamedata['inventory'][buys_id] > buys_amount)
					{
						possible_customers[customer_id] += buys_amount * available_items[buys_id]['value'];
					}
					else
					{
						possible_customers[customer_id] += gamedata['inventory'][buys_id] * available_items[buys_id]['value'];
					}
				}
				
			});
			if(gamedata['customer_history'][customer_id]['last_visit'] < nowint())
			{
				gamedata['customer_history'][customer_id]['last_visit'] = nowint() + (get_random_customer_time() * 1);
			}
		}
	});
	if(count_object(possible_customers) > 0)
	{
		var new_customer_id = get_random_key_from_object_based_on_num_value(possible_customers);
		var new_customer_key = get_highest_key_in_object(gamedata['customers']) + 1;
		if(highest_customer_id >= new_customer_key)
		{
			new_customer_key = highest_customer_id + 1;
		}
		else
		{
			highest_customer_id = new_customer_key;
		}
		new_customer_key = get_first_free_customer_slot();
		var buy_sell = 'buy';
		var buying_items = {};
/*		if(gamedata['customer_history'][new_customer_id] != undefined && gamedata['customer_history'][new_customer_id]['served'] > 0 && (gamedata['customer_history'][new_customer_id]['served'] / 10) == Math.floor(gamedata['customer_history'][new_customer_id]['served'] / 10) && all_customers[new_customer_id]['sells'] != undefined)
*/		if(gamedata['customer_history'][new_customer_id] != undefined && gamedata['customer_history'][new_customer_id]['sales'] > 0 && gamedata['customer_history'][new_customer_id]['sales'] > 1 && ((Math.random() * (all_customers[new_customer_id]['average_sale'] * 10)) / gamedata['customer_history'][new_customer_id]['sales']) < 0.25 && all_customers[new_customer_id]['sells'] != undefined)
		{
			buy_sell = 'sell';
			$.each(all_customers[new_customer_id]['sells'], function(buys_id, buys_amount){
				buying_items[buys_id] = Math.ceil(10000000 / available_items[buys_id]['value']);
			});
		}
		else
		{
			$.each(all_customers[new_customer_id]['buys'], function(buys_id, buys_amount){
				if(gamedata['inventory'][buys_id] != undefined && (gamedata['inventory'][buys_id] >= 1 || (gamedata['can_produce'][buys_id] == true && available_items[buys_id]['value'] >= 10)) && gamedata['locked_items'][buys_id] == undefined)
				{
					//var buying_chance = Math.ceil(/*Math.sqrt(buys_amount) **/ (/*Math.sqrt*/(available_items[buys_id]['value'])) * (/*Math.sqrt*/(gamedata['inventory'][buys_id])));
					var buying_chance = available_items[buys_id]['value'] * gamedata['inventory'][buys_id];
					if(gamedata['max_declines'] >= 10)
					{
						buying_chance += Math.sqrt(gamedata['max_declines'] / 10);
					}
					buying_items[buys_id] = buying_chance;	
				}
			});
			
		}
		if(count_object(buying_items) > 0 && new_customer_key != false)
		{
			var buying_item = get_random_key_from_object_based_on_num_value(buying_items);
			var have_buy_bonus = 0;
			if(buy_sell == 'buy')
			{
				//have_buy_bonus = (gamedata['inventory'][buying_item] / (100 * Math.sqrt(available_items[buying_item]['value'])));
				if(gamedata['inventory'][buying_item] > 1)
				{
					have_buy_bonus = -1 + (Math.random() * (Math.sqrt(gamedata['inventory'][buying_item])));
				}
				if(have_buy_bonus < 0){have_buy_bonus = 0;}
				//have_buy_bonus = Math.floor(have_buy_bonus * have_buy_bonus);
			}
			if(buy_sell == 'sell')
			{
				have_buy_bonus = Math.floor(Math.sqrt(gamedata['highest_coins']) / available_items[buying_item]['value']);
			}
			var buying_amount = Math.ceil((Math.random() * all_customers[new_customer_id][buy_sell+'s'][buying_item]) + round_by_percent(have_buy_bonus));
			if(gamedata['max_declines'] < 10 && buy_sell == 'buy' && buying_amount > gamedata['inventory'][buying_item] && gamedata['inventory'][buying_item] > 0)
			{
				buying_amount = gamedata['inventory'][buying_item];
			}
			var max_customers = get_max_customers();
			/*if(buy_sell == 'buy' && buying_amount > max_customers * 10)
			{
				buying_amount = max_customers * 10;
			}*/
			gamedata['customers'][new_customer_key] = {
				id: 			new_customer_id,
				item_id: 		buying_item,
				item_amount: 	buying_amount,
				buy_sell: 		buy_sell,
			};
			saveToLocalStorage();
			return new_customer_key;
		}
	}

	return -1;
}

function get_first_free_customer_slot(){
	var first_free_slot = get_max_customers();
	var free_slots = {};
	for (var i = first_free_slot; i > 0; i--) {
		if(gamedata['customers'][i] == undefined)
		{
			free_slots[i] = true;
		}
	};
	return get_random_key_from_object(free_slots);

}