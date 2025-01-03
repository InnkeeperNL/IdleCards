var current_inventory_page = 1;
var current_consumable = '';

function show_inventory(){
	cards_per_page = 12;
	$('.inventory_content').html('<span class="no_tinker">You have no consumables.</span>');

	gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
	var current_card_number = 0;

	$.each(gamedata['owned_cards'], function(card_id, owned_amount){
		if(all_available_cards[card_id] != undefined){
			var effective_owned_amount = owned_amount + 0;
			var card_filtered = false;
			if(all_available_cards[card_id]['type'] != 'consumable' && all_available_cards[card_id]['type'] != 'token' /*&& all_available_cards[card_id]['type'] != 'cardback'*/ && all_available_cards[card_id]['type'] != 'currency' && all_available_cards[card_id]['type'] != 'material')
			{
				card_filtered = true;
				//console.log(card_id);
			}
			
			if(effective_owned_amount > 0 && card_filtered == false && check_filters(card_id) == false)
			{
				current_card_number ++;
				if(current_card_number == 1)
				{
					$('.inventory_content').html('');
				}
				if(current_card_number / cards_per_page > current_inventory_page -1 && current_card_number / cards_per_page <= current_inventory_page)
				{
					var parsed_card = parse_card(card_id, effective_owned_amount);

					if(all_available_cards[card_id]['type'] == 'consumable' || all_available_cards[card_id]['type'] == 'cardback')
					{
						$('.inventory_content').append('<span onclick="current_consumable=\'' + card_id + '\';show_content(\'single_consumable\');">' + parsed_card + '</span>');
					}
					if(all_available_cards[card_id]['type'] == 'token' || all_available_cards[card_id]['type'] == 'currency' || all_available_cards[card_id]['type'] == 'material' )
					{
						$('.inventory_content').append('<span onclick="show_card_details(\'' + card_id + '\');">' + parsed_card + '</span>');
					}
					
				}
			}
		}
		else
		{
			delete gamedata['owned_cards'][card_id];
		}
	});
	if(current_inventory_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / cards_per_page <= current_inventory_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(current_card_number > 0 && Math.ceil(current_card_number / cards_per_page) < current_inventory_page)
	{
		current_inventory_page = 1;
		show_inventory();
	}
	if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
	$('.page_selection .page_number').html(current_inventory_page + ' / ' + Math.ceil(current_card_number / cards_per_page));
}

function set_inventory_page(amount){
	current_inventory_page += amount;
	if(current_inventory_page < 1){current_inventory_page = 1;}
	show_inventory();
}

function show_single_consumable(){
	if(gamedata['owned_cards'][current_consumable] == undefined || all_available_cards[current_consumable] == undefined || gamedata['owned_cards'][current_consumable] == 0)
	{
		show_content('inventory');
	}
	else
	{

		$('.single_consumable_content').html('');

		var parsed_card = parse_card(current_consumable, gamedata['owned_cards'][current_consumable])
		$('.single_consumable_content').append('<div class="fragment_cost" onclick="show_card_details(\'' + current_consumable + '\')">' + parsed_card + '</div>');
		//$('.single_consumable_content').append();
		var consumable_description = '';
		consumable_description += '<div class="construction_description">';
		consumable_description += '<div class="construction_name">' + capitalizeFirstLetter(all_available_cards[current_consumable]['name']) + '</div><br/>';
		if(all_available_cards[current_consumable]['reward'] != undefined && all_available_cards[current_consumable]['reward']['description'] != undefined)
		{
			consumable_description += capitalizeFirstLetter(all_available_cards[current_consumable]['reward']['description']) + '<br/><br/>';
		}
		if(all_available_cards[current_consumable]['reward'] != undefined && all_available_cards[current_consumable]['reward']['type'] == 'boost')
		{
			var current_boost_amount = 0;
			if(gamedata['combat_boosts'] != undefined && gamedata['combat_boosts'][all_available_cards[current_consumable]['reward']['card_id']] != undefined)
			{
				current_boost_amount = gamedata['combat_boosts'][all_available_cards[current_consumable]['reward']['card_id']];
			}
			if(current_boost_amount < 1)
			{
				consumable_description += 'Boost not active';
			}
			else
			{
				consumable_description += 'Boosts active: ' + current_boost_amount + ' uses left';
			}
			
		}
		if(all_available_cards[current_consumable]['reward'] != undefined && all_available_cards[current_consumable]['reward']['type'] == 'loot_charges')
		{
			var current_boost_amount = 0;
			if(gamedata['loot_charges'] != undefined)
			{
				current_boost_amount = gamedata['loot_charges'];
			}
			if(current_boost_amount < 1)
			{
				consumable_description += 'You have no current loot bonus.';
			}
			else
			{
				consumable_description += 'The next time you receive random loot the stack size will be increased by ' + current_boost_amount + '.';
			}
			
		}
		if(all_available_cards[current_consumable]['reward'] != undefined && all_available_cards[current_consumable]['reward']['type'] == 'loot_rarity')
		{
			var current_boost_amount = 0;
			if(gamedata['loot_rarity'] != undefined)
			{
				current_boost_amount = gamedata['loot_rarity'];
			}
			if(current_boost_amount < 1)
			{
				consumable_description += 'You have no current loot bonus.';
			}
			else
			{
				consumable_description += 'The chance of rare loot is increased by ' + current_boost_amount + '%.';
			}
			
		}
		
		consumable_description += '</div>';
		$('.single_consumable_content').append(consumable_description);
		var use_buttons = '<div class="use_inventory_buttons">';
		if(all_available_cards[current_consumable]['reward'] != undefined)
		{
			var can_use = true;
			if(all_available_cards[current_consumable]['reward']['type'] == 'card_back' && gamedata['owned_card_backs'][all_available_cards[current_consumable]['reward']['card_back_id']] != undefined)
			{
				can_use = false;
			}
			if(can_use == true)
			{
				if(all_available_cards[current_consumable]['reward']['type'] == 'card_back')
				{
					use_buttons += '<div onclick="use_current_inventory()" class="use_inventory_button">COLLECT</div>';
				}
				else
				{

					if(all_available_cards[current_consumable]['reward']['amount_used'] == undefined)
					{
						use_buttons += '<div onclick="use_current_inventory()" class="use_inventory_button">USE</div>';
					}
					else
					{
						$.each(all_available_cards[current_consumable]['reward']['amount_used'], function(useless_key, use_amount){
							if(use_amount != 'all' && gamedata['owned_cards'][current_consumable] >= use_amount)
							{
								use_buttons += '<div onclick="use_current_inventory(' + use_amount + ')" class="use_inventory_button">USE ' + use_amount + '</div>';
							}
							if(use_amount == 'all' && gamedata['owned_cards'][current_consumable] > 1)
							{
								use_buttons += '<div onclick="use_current_inventory(' + gamedata['owned_cards'][current_consumable] + ')" class="use_inventory_button">USE ALL</div>';
							}
						});
					}
				}
			}
		}
		use_buttons += '</div>';
		$('.single_consumable_content').append(use_buttons);
		
	}
}

function use_current_inventory(amount_used){
	if(amount_used == undefined)
	{
		amount_used = 1;
	}
	if(gamedata['owned_cards'][current_consumable] == undefined || all_available_cards[current_consumable] == undefined || gamedata['owned_cards'][current_consumable] == 0)
	{
		show_content('inventory');
	}
	else
	{
		gamedata['owned_cards'][current_consumable] -= amount_used;

		if(all_available_cards[current_consumable]['reward'] != undefined)
		{
			if(all_available_cards[current_consumable]['reward']['type'] == 'card_back')
			{
				if(gamedata['owned_card_backs'][all_available_cards[current_consumable]['reward']['card_back_id']] == undefined)
				{
					gamedata['owned_card_backs'][all_available_cards[current_consumable]['reward']['card_back_id']] = true;
				}
				saveToLocalStorage();
				show_content('inventory');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'function')
			{
				var possible_extra_function = window[all_available_cards[current_consumable]['reward']['execute']];
				if (typeof possible_extra_function === "function"){
					var perfored_function = possible_extra_function();
					if(perfored_function == false)
					{
						gamedata['owned_cards'][current_consumable] += amount_used;
					}
				}
				else
				{
					gamedata['owned_cards'][current_consumable] += amount_used;
				}
				saveToLocalStorage();
				show_content('inventory');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'reputation')
			{
				var faction_to_increase = '';
				if(all_available_cards[current_consumable]['reward']['faction'] == 'current' && gamedata['current_faction'] != undefined)
				{
					faction_to_increase = gamedata['current_faction'];
				}
				if(all_factions[all_available_cards[current_consumable]['reward']['faction']] != undefined)
				{
					faction_to_increase = all_available_cards[current_consumable]['reward']['faction'];
				}
				if(all_factions[faction_to_increase] != undefined)
				{
					gain_rep(faction_to_increase, all_available_cards[current_consumable]['reward']['amount'] * amount_used);
				}
				else
				{
					gamedata['owned_cards'][current_consumable] += amount_used;
				}
				saveToLocalStorage();
				show_content('single_consumable');
			}
			
			if(all_available_cards[current_consumable]['reward']['type'] == 'random_card')
			{
				all_current_rewards = {};
			    current_reward_origin = 'single_consumable';
			    current_reward_text = all_available_cards[current_consumable]['reward']['text'];
			    for (var picking = amount_used - 1; picking >= 0; picking--) {
				    var pick_amount = 1;
				    if(all_available_cards[current_consumable]['reward']['pick_amount'] != undefined)
				    {
				    	pick_amount = all_available_cards[current_consumable]['reward']['pick_amount'];
				    }
				    var gained_cards = {};
				    for(i = 0; i < pick_amount; i++){
						var gained_card = get_random_card_based_on_value(all_available_cards[current_consumable]['reward']['min_value'], all_available_cards[current_consumable]['reward']['color'],all_available_cards[current_consumable]['reward']['card_type'], undefined, gained_cards, all_available_cards[current_consumable]['reward']['max_value']);
						if(gained_card == false)
						{
							gained_card = get_random_card_based_on_value(all_available_cards[current_consumable]['reward']['min_value'], all_available_cards[current_consumable]['reward']['color'],all_available_cards[current_consumable]['reward']['card_type'], true, undefined, all_available_cards[current_consumable]['reward']['max_value']);
						}
						gained_cards[get_highest_key_in_object(gained_cards) + 1] = gained_card;
						var amount_gained = 1;
						if(all_available_cards[current_consumable]['reward']['amount'] != undefined)
						{
							amount_gained = all_available_cards[current_consumable]['reward']['amount'];
						}
						/*for(i = 0;i < amount_gained;i++)
						{
							gain_card(gained_card);
						}
						show_card_details(gained_card, undefined, amount_gained);*/

						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		gained_card,
							reward_amount: 	amount_gained,
							pickable: 		all_available_cards[current_consumable]['reward']['pickable'],
						}
					}
				};
				saveToLocalStorage();
				show_content('current_rewards');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'random_basic_card')
			{
				all_current_rewards = {};
			    current_reward_origin = 'single_consumable';
			    current_reward_text = all_available_cards[current_consumable]['reward']['text'];
			    for (var picking = amount_used - 1; picking >= 0; picking--) {
				    var pick_amount = 1;
				    if(all_available_cards[current_consumable]['reward']['pick_amount'] != undefined)
				    {
				    	pick_amount = all_available_cards[current_consumable]['reward']['pick_amount'];
				    }
				    var gained_cards = {};
				    for(i = 0; i < pick_amount; i++){
						var gained_card = get_basic_reward_card(gained_cards);
						if(gained_card == false)
						{
							gained_card = get_basic_reward_card(gained_cards);
						}
						gained_cards[get_highest_key_in_object(gained_cards) + 1] = gained_card;
						var amount_gained = 1;
						if(all_available_cards[current_consumable]['reward']['amount'] != undefined)
						{
							amount_gained = all_available_cards[current_consumable]['reward']['amount'];
						}
						/*for(i = 0;i < amount_gained;i++)
						{
							gain_card(gained_card);
						}
						show_card_details(gained_card, undefined, amount_gained);*/

						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		gained_card,
							reward_amount: 	amount_gained,
							pickable: 		all_available_cards[current_consumable]['reward']['pickable'],
						}
					}
				};
				saveToLocalStorage();
				show_content('current_rewards');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'random_card_back')
			{
				all_current_rewards = {};
			    current_reward_origin = 'single_consumable';
			    current_reward_text = all_available_cards[current_consumable]['reward']['text'];
			    for (var picking = amount_used - 1; picking >= 0; picking--) {
				    var pick_amount = 1;
				    if(all_available_cards[current_consumable]['reward']['pick_amount'] != undefined)
				    {
				    	pick_amount = all_available_cards[current_consumable]['reward']['pick_amount'];
				    }
				    var gained_cards = {};
				    for(i = 0; i < pick_amount; i++){
						var gained_card = get_back_card_card(gained_cards);
						if(gained_card == false)
						{
							gained_card = get_back_card_card(gained_cards);
						}
						gained_cards[get_highest_key_in_object(gained_cards) + 1] = gained_card;
						var amount_gained = 1;
						if(all_available_cards[current_consumable]['reward']['amount'] != undefined)
						{
							amount_gained = all_available_cards[current_consumable]['reward']['amount'];
						}
						/*for(i = 0;i < amount_gained;i++)
						{
							gain_card(gained_card);
						}
						show_card_details(gained_card, undefined, amount_gained);*/

						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		gained_card,
							reward_amount: 	amount_gained,
							pickable: 		all_available_cards[current_consumable]['reward']['pickable'],
						}
					}
				};
				saveToLocalStorage();
				show_content('current_rewards');
			}
			
			if(all_available_cards[current_consumable]['reward']['type'] == 'scraps')
			{
				all_current_rewards = {};
			    current_reward_origin = 'single_consumable';
			    current_reward_text = all_available_cards[current_consumable]['reward']['text'];
				current_rewards = {};
				var total_gained = 0;
				for (var i = amount_used - 1; i >= 0; i--) {
					var amount_gained = 1;
					if(all_available_cards[current_consumable]['reward']['amount'] != undefined)
					{
						amount_gained = all_available_cards[current_consumable]['reward']['amount'];
					}
					if(all_available_cards[current_consumable]['reward']['min_amount'] != undefined)
					{
						amount_gained = Math.floor(Math.random() * (amount_gained - all_available_cards[current_consumable]['reward']['min_amount'] + 1)) + all_available_cards[current_consumable]['reward']['min_amount'];
					}
					total_gained += amount_gained;
				}
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 		'scraps',
					reward_amount: 	total_gained,
					pickable: 		all_available_cards[current_consumable]['reward']['pickable'],
				}
				//gain_scraps(amount_gained);
				saveToLocalStorage();
				show_content('current_rewards');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'boost')
			{
				if(gamedata['combat_boosts'] == undefined){gamedata['combat_boosts'] = {};}
				{
					if(gamedata['combat_boosts'][all_available_cards[current_consumable]['reward']['card_id']] == undefined)
					{
						gamedata['combat_boosts'][all_available_cards[current_consumable]['reward']['card_id']] = all_available_cards[current_consumable]['reward']['amount'];
					}
					else
					{
						gamedata['combat_boosts'][all_available_cards[current_consumable]['reward']['card_id']] += all_available_cards[current_consumable]['reward']['amount']
					}
				}
				saveToLocalStorage();
				show_content('single_consumable');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'loot_charges')
			{
				if(gamedata['loot_charges'] == undefined){gamedata['loot_charges'] = 0;}
				gamedata['loot_charges'] += all_available_cards[current_consumable]['reward']['amount'] * amount_used;
				saveToLocalStorage();
				show_content('single_consumable');
			}
			if(all_available_cards[current_consumable]['reward']['type'] == 'loot_rarity')
			{
				if(gamedata['loot_rarity'] == undefined){gamedata['loot_rarity'] = 0;}
				gamedata['loot_rarity'] += all_available_cards[current_consumable]['reward']['amount'] * amount_used;
				saveToLocalStorage();
				show_content('single_consumable');
			}
			
		}
		
	}

}