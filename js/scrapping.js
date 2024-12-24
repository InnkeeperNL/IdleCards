var current_scrap_page = 1;
var current_shop_type = '';
var scrap_card_amount = 1;

function show_scrap(){
	if(gamedata['scraps'] == undefined){
		gamedata['scraps'] = 0;
		saveToLocalStorage();
	}

	$('.scrap_count').html('Scrap: ' + gamedata['scraps']);

	$('.scrap_container').html('<span class="no_tinker">You need ' + (scrap_card_amount + 6) + ' or more identical cards to scrap them</span>');

	var scrap_list = '';
	var cards_displayed = 0;

	$.each(gamedata['owned_cards'], function(owned_card_id, amount){
		if(amount >= scrap_card_amount + 6 && (all_available_cards[owned_card_id]['type'] == 'creature' || all_available_cards[owned_card_id]['type'] == 'structure' || all_available_cards[owned_card_id]['type'] == 'spell' || all_available_cards[owned_card_id]['type'] == 'object' || all_available_cards[owned_card_id]['type'] == 'artifact'))
		{
			cards_displayed ++;
			if(cards_displayed > (current_scrap_page * 12) - 12 && cards_displayed <= current_scrap_page * 12)
			{
				var parsed_card = parse_card(owned_card_id, amount, false);
				scrap_list += '<div class="scrap_this_card_container" onclick="scrap_card(\'' + owned_card_id + '\')">' + parsed_card + '</div>';
			}
			
		}
	});

	if(cards_displayed > 12)
	{
		$('#content_scrap .page_selection').show();
		if(current_scrap_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / 12 <= current_scrap_page){$('.page_selection .next_page').addClass('no_page',0);}else{$('.page_selection .next_page').removeClass('no_page');}
		
		$('.page_selection .page_number').html(current_scrap_page + ' / ' + Math.ceil(cards_displayed / 12));
	}
	else
	{
		$('#content_scrap .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / 12) < current_scrap_page)
	{
		current_scrap_page = 1;
		show_scrap();
	}
	else
	{
		if(scrap_list != '')
		{
			$('.scrap_container').html('<div class="tinkering_list">' + scrap_list + '</div>');
		}
		if(cards_displayed > 1)
		{
			$('.scrap_all_container').show();
		}
		else
		{
			$('.scrap_all_container').hide();
		}
	}
};

function set_scrap_page(amount){
	current_scrap_page += amount;
	if(current_scrap_page < 1){current_scrap_page = 1;}
	show_scrap();
};

function scrap_all(){
	all_current_rewards = {};
	var total_scrapped = 0;
	$.each(gamedata['owned_cards'], function(card_id, owned_amount){
		if(all_available_cards[card_id]['type'] == 'creature' || all_available_cards[card_id]['type'] == 'structure' || all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'object' || all_available_cards[card_id]['type'] == 'artifact')
		{
			total_scrapped += scrap_card(card_id, true);
		}
	});
	current_reward_text = check_plural('You scrapped ' + total_scrapped + ' card(s)',total_scrapped);
	current_reward_origin = 'scrap';
	show_available_cards(false);
	//show_content('current_rewards');
}

function scrap_card(card_id, scrapping_all){
	var excess_amount_owned = 0;
	if(gamedata['owned_cards'][card_id] >= scrap_card_amount + 6)
	{
		if(scrapping_all == undefined || scrapping_all == false)
		{
			all_current_rewards = {};
			current_reward_origin = 'scrap';
		}
		excess_amount_owned = gamedata['owned_cards'][card_id] - 6;
		gamedata['owned_cards'][card_id] -= excess_amount_owned;
		var max_gained = (all_available_cards[card_id]['value'] * excess_amount_owned) / 2;
		var gained_scraps = round_by_percent((Math.random() * max_gained) + max_gained);
	    all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'scraps',
			reward_amount: 	gained_scraps,
			pickable: 		false,
		}
		check_quests('scrap_cards', undefined, undefined, undefined, undefined, all_available_cards[card_id]['value'], excess_amount_owned)
		//gain_scraps(gained_scraps);
		saveToLocalStorage();
		if(scrapping_all == undefined || scrapping_all == false)
		{
			current_reward_text = check_plural('You scrapped \'' + capitalizeFirstLetter(all_available_cards[card_id]['name']) + '\' ' + excess_amount_owned + ' time(s)',excess_amount_owned);
			show_available_cards(false);
			show_content('current_rewards');
		}
		//show_scrap();
	}
	return excess_amount_owned;
}

function gain_scraps(gained_scraps){
	gamedata['scraps'] =  parseInt(gamedata['scraps']) + parseInt(gained_scraps);

	if(gained_scraps > 1)
	{
		$('.detail_overlay  .card_detail').html('<div class="big_text">You gained:<br/>' + gained_scraps + ' scraps</div>');
	}
	else
	{
		$('.detail_overlay  .card_detail').html('<div class="big_text">You gained:<br/>' + gained_scraps + ' scrap</div>');
	}
	if(gained_scraps > 0)
	{
		check_quests('gained_scraps', undefined, undefined, undefined, undefined, undefined, gained_scraps);
	}
	check_quests('scraps_owned', undefined, undefined, undefined, undefined, gamedata['scraps']);
	
	$('.detail_overlay').removeClass('hidden');
	
	saveToLocalStorage();
}

function show_arena_shop(){
	show_scrap_shop('arena');
}

function show_raid_shop(){
	show_scrap_shop('raid');
}

function show_card_shop(){
	show_scrap_shop('shop');
}

function show_scrap_shop(shop_type){
	if(gamedata['scraps'] == undefined){
		gamedata['scraps'] = 0;
		saveToLocalStorage();
	}
	if(shop_type == undefined)
	{
		shop_type = 'scrap';
	}
	current_shop_type = shop_type + '';
	/*$('.use_half_scraps span').html(Math.floor(gamedata['scraps'] / 2));

	if(gamedata['scraps'] < 10)
	{
		$('.use_10_scraps').addClass('hidden');
		
	}
	else
	{
		$('.use_10_scraps').removeClass('hidden');
		
	}

	if(gamedata['scraps'] < 22)
	{
		$('.use_half_scraps').addClass('hidden');
		$('.use_all_scraps').addClass('hidden');
	}
	else
	{
		$('.use_half_scraps').removeClass('hidden');
		$('.use_all_scraps').removeClass('hidden');
	}

	if(gamedata['scraps'] < 20)
	{
		$('.buy_random_card_button').addClass('hidden');
	}
	else
	{
		$('.buy_random_card_button').removeClass('hidden');
	}*/

	/*if(gamedata['scraps'] < 100 || shop_type != 'scrap')
	{
		$('.buy_deck_slot').addClass('hidden');
	}
	else
	{
		$('.buy_deck_slot').removeClass('hidden');
	}*/

	$('.scrap_count').html('Scrap: ' + gamedata['scraps']);

	var month = new Date().getMonth() + 1;

	$('.scrap_shop_content').html('');
	$.each(all_offers, function(offer_id, offer_info){
		if((offer_info['months_available'] == undefined || match_array_values([month], offer_info['months_available']) == true) && (shop_type == undefined || offer_info['shop_type'] == shop_type))
		{
			if(gamedata['owned_cards'][offer_info['result']] == undefined){gamedata['owned_cards'][offer_info['result']] = 0;}
			var parsed_recipe = '';
			var parsed_result = parse_card(offer_info['result'], gamedata['owned_cards'][offer_info['result']]);
			var can_craft = true;
			parsed_recipe += '<div class="single_building_recipe">';
			parsed_recipe += 	'<div class="single_building_recipe_costs">';
			$.each(offer_info['costs'], function(cost_id, cost_amount){
				if(all_available_cards[cost_id] != undefined)
				{
					var owned_amount = 0;
					if(gamedata['owned_cards'][cost_id] != undefined){owned_amount = gamedata['owned_cards'][cost_id];}
					//if(gamedata['owned_cards'][cost_id] == undefined){gamedata['owned_cards'][cost_id] = 0;}
					if(owned_amount < cost_amount)
					{
						can_craft = false;
						var parsed_cost = parse_card(cost_id, '<span style="color:red">' + numberWithCommas(owned_amount) + ' / ' + cost_amount + '</span>');
					}
					else
					{
						var parsed_cost = parse_card(cost_id, numberWithCommas(owned_amount) + ' / ' + cost_amount);
					}
					
					parsed_recipe += '<div class="single_building_recipe_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
				}
				if(cost_id == 'scraps')
				{
					if(gamedata['scraps'] < cost_amount)
					{
						can_craft = false;
						parsed_recipe += '<div class="single_building_recipe_cost">' + parse_card('scraps_placeholder', '<span style="color:red">' + numberWithCommas(gamedata['scraps']) + ' / ' + cost_amount + '</span>') + '</div>';
					}
					else
					{
						parsed_recipe += '<div class="single_building_recipe_cost">' + parse_card('scraps_placeholder', numberWithCommas(gamedata['scraps']) + ' / ' + cost_amount) + '</div>';
					}
				}
			});
			parsed_recipe += 	'</div>';
			if(offer_info['text'] != undefined)
			{
				parsed_recipe += 	'<div class="single_building_recipe_text">' + offer_info['text'] + '</div>';
			}
			parsed_recipe += 	'<div class="single_building_recipe_result" onclick="show_card_details(\'' + offer_info['result'] + '\')">' + parsed_result + '</div>';
			if(can_craft == true)
			{
				parsed_recipe += 	'<div class="single_building_recipe_craft_button" onclick="buy_offer(\'' + offer_id + '\')">BUY</div>';
			}
			parsed_recipe += '<div style="clear:both"></div>';
			parsed_recipe += '</div>';
			$('.scrap_shop_content').append(parsed_recipe);
		}
	});
};

function buy_offer(offer_id){

	if(all_available_cards[all_offers[offer_id]['result']] != undefined)
	{
		var can_craft = true;
		$.each(all_offers[offer_id]['costs'], function(card_cost_id, cost_amount){
			if(all_available_cards[card_cost_id] != undefined)
			{
				if(gamedata['owned_cards'][card_cost_id] == undefined || gamedata['owned_cards'][card_cost_id] < cost_amount)
				{
					can_craft = false;
				}
			}
			if(card_cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			
			$.each(all_offers[offer_id]['costs'], function(card_cost_id, cost_amount){
				if(all_available_cards[card_cost_id] != undefined)
				{
					gamedata['owned_cards'][card_cost_id] -= cost_amount;
				}
				if(card_cost_id == 'scraps')
				{
					gamedata['scraps'] -= cost_amount;
				}
			});
			
			for(i = 0; i < all_offers[offer_id]['amount']; i++)
			{
				gain_card(all_offers[offer_id]['result']);
			}
			show_available_cards(false);
			saveToLocalStorage();
			//show_card_details(all_offers[offer_id]['result']);
			
		}
		show_scrap_shop(current_shop_type);
	}
}

function use_scraps(amount){
	if(amount == 'all')
	{
		amount = gamedata['scraps'];
	}
	if(amount == 'half')
	{
		amount = Math.floor(gamedata['scraps'] / 2);
	}
	if(gamedata['scraps'] >= amount)
	{
		gamedata['scraps'] -= amount;
		show_scrap_shop();
		saveToLocalStorage();

		current_rewards = {};
					
		for(var i=0;i<3;i++)
		{
		    var card_gained = get_basic_reward_card(current_rewards);
		    var card_amount_gained = round_by_percent((Math.random() * amount * 0.2) + (amount / 10));
		    current_rewards[i] = {card_id:card_gained,card_amount:card_amount_gained};
		}
		
		
		/*gain_card(card_gained);
		if(difficulty_setting > 0)
		{*/
			/*for (var i = (difficulty_setting + 1) * 2; i > 0; i--) {
				gain_card(card_gained);
			};*/
		/*}*/

		var parsed_rewards = '<div class="reward_cards big_rewards"><span class="reward_title">Choose one reward</span><br/>';
		$.each(current_rewards, function(reward_id, reward_info){
		    parsed_rewards += '<div onclick="gain_reward(' + reward_id + ')">' + parse_card(reward_info['card_id'],reward_info['card_amount']) + '</div>';
		});
		parsed_rewards += '</div>';
		$('.detail_overlay  .card_detail').html(parsed_rewards);
		$('.detail_overlay').removeClass('hidden');
		$('.detail_overlay').addClass('non_clickable');
	}
	
}

function buy_random_card(cost){
	if(gamedata['scraps'] < cost)
	{
		show_content('scrap_shop');
	}
	else
	{
		var card_bought = get_random_card_based_on_value(2);
		if(card_bought != false)
		{
			gamedata['scraps'] -= cost;
			gain_card(card_bought);
			show_card_details(card_bought);
			show_content('scrap_shop');
		}
	}
}
