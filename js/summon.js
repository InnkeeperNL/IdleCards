var selected_pre_summon_buff = '';
var selected_post_summon_buff = '';

function show_summon(just_summoned){
	$('.summon_container').html('');
	if(gamedata['summon_pre_buffs'] == undefined){gamedata['summon_pre_buffs'] = {};}
	var parsed_summon = '';
	var just_summoned_class = '';
	var unowned_class = '';
	if(just_summoned != undefined && just_summoned == true){just_summoned_class = 'just_summoned';}
	if(gamedata['current_summon'] != undefined && (gamedata['current_summon']['tries'] == undefined || gamedata['current_summon']['tries'] < 1 || gamedata['current_summon']['level'] == undefined)){delete(gamedata['current_summon']);}
	
	var summon_stats = get_summon_stats();
	$.each(gamedata['summon_pre_buffs'], function(buff_id, buff_card){
		summon_stats = adjust_summon_stats(summon_stats, buff_card);
	});
	correct_summon_stats(summon_stats);
	if(gamedata['loot_rarity'] == undefined){gamedata['loot_rarity'] = 0;}
	var effective_rarity = 1 + (gamedata['loot_rarity'] / 100);

	if(gamedata['current_summon'] == undefined || (just_summoned != undefined && just_summoned == true))
	{
		parsed_summon += '<div class="summoned_hero_container ' + just_summoned_class + '">';
			var parsed_summoned_hero = parse_card('empty_card');
			parsed_summon += '<span>' + parsed_summoned_hero + '</span>';
			parsed_summon += '<span class="summon_stats">';
			parsed_summon += 	'<br/>';
			if(summon_stats['min_level'] != 10 || summon_stats['max_level'] != 10)
			{
				parsed_summon += 	'Power: ' + Math.floor(summon_stats['min_level'] * 10);
				if(summon_stats['min_level'] != (summon_stats['max_level']))
				{
					parsed_summon += 	' - ' + Math.ceil(summon_stats['max_level'] * 10);
				}
				parsed_summon += 	'%<br/>';
			}
			parsed_summon += 	'Rarity: ' + (summon_stats['min_rarity']);
			if(summon_stats['min_rarity'] != summon_stats['max_rarity'])
			{
				parsed_summon += 	' - ' + (summon_stats['max_rarity']);
			}
			parsed_summon += 	'<br/>';
			parsed_summon += 	'Tries: ' + (summon_stats['max_tries']) + '<br/>';
			parsed_summon += 	'Reward: ' + nFormatter(Math.floor(summon_stats['reward_bonus'] * 100),3) + '%<br/>';
			parsed_summon += 	'<br/>';
			parsed_summon += '</span>';
			/*if(just_summoned == undefined || just_summoned == false)
			{*/
				parsed_summon += '<div class="menu_button slim summon button" onclick="summon_now()">SUMMON</div><br/><br/>';
				if(get_upgrade_factor('show_altar', 'any', true) > 1)
				{
					parsed_summon += '<div class="menu_button slim summon button" data-target-content="altar">ALTAR</div><br/><br/>';
				}
			/*}*/

			for (var i = 1; i < summon_stats['max_pre_buffs'] + 1; i++) {
				parsed_summon += '<span class="pebuff" onclick="remove_prebuff(\'' + i + '\')">';
				var parsed_prebuff = parse_card('empty_card_orange');
				if(gamedata['summon_pre_buffs'][i] != undefined)
				{
					parsed_prebuff = parse_card(gamedata['summon_pre_buffs'][i]);
				}
				else
				{
					parsed_prebuff = parse_card('empty_card');
				}
				parsed_summon += parsed_prebuff;
				parsed_summon += '</span>';
			}
			parsed_summon += 	'<br/><br/>';
			if(/*count_object(gamedata['summon_pre_buffs']) < summon_stats['max_pre_buffs'] &&*/ selected_pre_summon_buff != '' && all_available_cards[selected_pre_summon_buff] != undefined)
			{
				parsed_summon += '<div class="selected_pre_summon_buff_container">';
					parsed_summon += '<span class="selected_pre_summon_buff">' + parse_card(selected_pre_summon_buff) + '</span>';
					parsed_summon += '<span class="selected_pre_summon_buff_text">' + all_available_cards[selected_pre_summon_buff]['name'] + '<br/>' + all_available_cards[selected_pre_summon_buff]['description'] + '</span>';
					if(count_object(gamedata['summon_pre_buffs']) < summon_stats['max_pre_buffs'])
					{
						parsed_summon += '<div class="menu_button slim summon button use_summon_pre_buff_button" onclick="use_summon_pre_buff(\'' + selected_pre_summon_buff + '\')">USE</div>';
					}
					else
					{
						parsed_summon += '<div class="menu_button slim summon button use_summon_pre_buff_button")">FULL</div>';
					}
				parsed_summon += '</div><br/>';
			}
			if(count_object(gamedata['summon_pre_buffs']) < summon_stats['max_pre_buffs'] || true)
			{
				$.each(all_available_cards, function(card_id, card_info){
					if(card_info['summon_pre_buff'] != undefined && gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
					{
						var parsed_consumable = parse_card(card_id, gamedata['owned_cards'][card_id]);
						parsed_summon += '<span class="summon_consumable" onclick="select_summon_pre_buff(\'' + card_id + '\')">' + parsed_consumable + '</span>';
					}
				});
			}
			parsed_summon += 	'<br/><br/>';
		parsed_summon += '</div>';
	}
	if(gamedata['current_summon'] != undefined || (just_summoned != undefined && just_summoned == true))
	{
		drop_chance = Math.floor((((gamedata['current_summon']['loot_rarity'] * gamedata['current_summon']['reward_count']) / card_drop_chance_reduction) / all_available_cards[gamedata['current_summon']['hero']]['value']) * 100);
		if(all_available_cards[gamedata['current_summon']['hero']]['recipe'] == undefined || gamedata['known_recipes'][gamedata['current_summon']['hero']] != undefined)
		{
			drop_chance = Math.floor((((gamedata['current_summon']['loot_rarity'] * gamedata['current_summon']['reward_count']) / card_drop_chance_reduction) / all_available_cards[gamedata['current_summon']['hero']]['value']) * 100);
		}
		if(drop_chance > 100){drop_chance = 100;}
		parsed_summon += '<div class="summon_hero_container ' + just_summoned_class + '">';
			var new_card = '';
			if(gamedata['owned_cards'][gamedata['current_summon']['hero']] == undefined){new_card = '</div><div class="new_card">NEW';}
			var parsed_summoned_hero = parse_card(gamedata['current_summon']['hero'], new_card, true, undefined);
			/*if(gamedata['owned_cards'][gamedata['current_summon']['hero']] == undefined){unowned_class = 'unowned_summon';}*/
			
			if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][gamedata['current_summon']['hero']] == undefined && all_available_cards[gamedata['current_summon']['hero']]['recipe'] != undefined){unowned_class = 'unowned_summon';}
			parsed_summon += '<span class="' + unowned_class + '" onclick="show_card_details(\'' + gamedata['current_summon']['hero'] + '\', true)">' + parsed_summoned_hero + '</span>';
			parsed_summon += '<span class="summon_stats">';
			parsed_summon += 	'<br/>';
			if(summon_stats['min_level'] != 10 || summon_stats['max_level'] != 10 || gamedata['current_summon']['level'] != 10)
			{
				parsed_summon += 	'Power: ' + Math.floor(gamedata['current_summon']['level'] * 10) + '%<br/>';
			}
			parsed_summon += 	'Drop: ' + drop_chance + '%<br/>';
			parsed_summon += 	'Tries: ' + gamedata['current_summon']['tries'] + '<br/>';
			parsed_summon += 	'Reward: ' + nFormatter(gamedata['current_summon']['reward_count'],3) + '<br/>';
			parsed_summon += 	'<br/>';
			parsed_summon += '</span>';
			parsed_summon += '<div class="menu_button slim summon button" onclick="endless_waves=false;selected_post_summon_buff=\'\'" data-target-content="summoned_battle">FIGHT</div><br/><br/>';
			
			if(selected_post_summon_buff != '' && all_available_cards[selected_post_summon_buff] != undefined)
			{
				parsed_summon += '<div class="selected_pre_summon_buff_container">';
					parsed_summon += '<span class="selected_pre_summon_buff">' + parse_card(selected_post_summon_buff) + '</span>';
					parsed_summon += '<span class="selected_pre_summon_buff_text">' + all_available_cards[selected_post_summon_buff]['name'] + '<br/>' + all_available_cards[selected_post_summon_buff]['description'] + '</span>';
					parsed_summon += '<div class="menu_button slim summon button use_summon_pre_buff_button" onclick="use_summon_post_buff(\'' + selected_post_summon_buff + '\')">USE</div>';
				parsed_summon += '</div><br/>';
			}
			$.each(all_available_cards, function(card_id, card_info){
				if(card_info['summon_post_buff'] != undefined && gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
				{
					var parsed_consumable = parse_card(card_id, gamedata['owned_cards'][card_id]);
					parsed_summon += '<span class="summon_consumable" onclick="select_summon_post_buff(\'' + card_id + '\')">' + parsed_consumable + '</span>';
				}
			});

			if(summon_stats['max_rarity'] > 1 || summon_stats['max_level'] > 0)
			{
				parsed_summon += '<br/><br/><div class="menu_button slim summon button" onclick="clear_current_summon()" data-target-content="summon">CLEAR</div>';
			}
		parsed_summon += '</div>';
		if(count_object(gamedata['summon_pre_buffs']) > 0)
		{
			gamedata['summon_pre_buffs'] = {};
			saveToLocalStorage();
		}
	}
	$('.summon_container').html(parsed_summon);
}

function show_waves(){
	var parsed_waves = '';
	parsed_waves += '<div class="summoned_hero_container">';
		var parsed_summoned_hero = parse_card('conscription');
		parsed_waves += '<span>' + parsed_summoned_hero + '</span><br/>';
		parsed_waves += '<span class="summon_stats">';
		parsed_waves += 'Starting power: ' + (get_upgrade_factor('wave_min_power', 'any', true) * 10) + '%<br/>';
		parsed_waves += 'Wave growth: ' + (Math.ceil(100 / get_upgrade_factor('wave_power_increase', 'any', true)) / 10) + '%';
		parsed_waves += '</span><br><br>';
		parsed_waves += '<div class="menu_button slim summon button" onclick=\'endless_waves=true\' data-target-content="waves_battle">START</div>';
	parsed_waves += '</div>';
	$('.waves_container').html(parsed_waves);
}

function adjust_summon_stats(summon_stats, card_id){
	if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['summon_pre_buff'] != undefined)
	{
		//var buff = all_available_cards[card_id]['summon_pre_buff'];
		$.each(all_available_cards[card_id]['summon_pre_buff'], function(buff_id, buff){
			if(buff['buff_amount_type'] == undefined || buff['buff_amount_type'] == 'fixed')
			{
				if(summon_stats[buff['buff_type']] != undefined)
				{
					summon_stats[buff['buff_type']] += buff['buff_amount'];
				}
			}
			if(buff['buff_amount_type'] == undefined || buff['buff_amount_type'] == 'percent')
			{
				if(summon_stats[buff['buff_type']] != undefined)
				{
					summon_stats[buff['buff_type']] *= 1 + (buff['buff_amount'] / 100);
				}
			}
		});
		
	}
	return summon_stats;
}

function get_summon_stats(){
	if(gamedata['highest_summon_won'] == undefined){gamedata['highest_summon_won'] = 0;}
	if(gamedata['summon_min_power'] == undefined){gamedata['summon_min_power'] = 1;}

	var min_level = gamedata['summon_min_power'] * 0.9;
	var max_level = gamedata['summon_min_power'] * 1.1;

	min_level = ((gamedata['battles_won'] + 1) / ((gamedata['battles_lost'] * 5) + 10)) * 10;
	max_level = min_level * 1.2;

	var max_rarity = get_upgrade_factor('summon_max_rarity', 'any', true);
	var summon_stats = {
		min_rarity: 		get_upgrade_factor('summon_min_rarity', 'any', true),
		max_rarity: 		max_rarity,
		common_reduction: 	max_rarity,
		min_level: 			min_level,
		max_level: 			max_level,
		max_tries: 			get_upgrade_factor('summon_tries', 'any', true),
		reward_bonus: 		get_upgrade_factor('summon_reward', 'any', true),
		loot_rarity: 		get_upgrade_factor('summon_loot_rarity', 'any', true),
		drop_chance: 		0,
		max_pre_buffs: 		get_upgrade_factor('summon_max_pre_buffs', 'any', true),
	}

	return summon_stats;
}

function correct_summon_stats(summon_stats){
	$.each(summon_stats, function(stat_id, stat_value){
		if(stat_value < 0)
		{
			summon_stats[stat_id] = 0;
		}
		if(stat_id != 'reward_bonus' && stat_id != 'max_level' && stat_id != 'min_level')
		{
			summon_stats[stat_id] = Math.floor(summon_stats[stat_id]);
		}
		/*if(stat_id == 'max_level' || stat_id == 'min_level')
		{
			summon_stats[stat_id] = Math.ceil(summon_stats[stat_id]);
		}*/
	});
	if(summon_stats['max_rarity'] < summon_stats['min_rarity'])
	{
		summon_stats['max_rarity'] = summon_stats['min_rarity'];
	}
	if(summon_stats['min_level'] < 1)
	{
		summon_stats['min_level'] = 1;
	}/*
	if(summon_stats['max_level'] > 10)
	{
		summon_stats['max_level'] = 10;
	}*/
	if(summon_stats['min_level'] > summon_stats['max_level'])
	{
		summon_stats['min_level'] = summon_stats['max_level'];
	}
	return summon_stats;
}

function clear_current_summon(){
	delete gamedata['current_summon'];
}

function show_summoned_battle(){
	gamedata['current_summon']['tries'] -= 1;
	saveToLocalStorage();
	enemy_card_back = '';
	endless_waves = false;
	current_battle_type = 'summoned';
	show_content('battle');
}

function show_waves_battle(){
	all_current_rewards = {};
	enemy_card_back = '';
	endless_waves = true;
	endless_wave_count = 1;
	current_battle_type = 'summoned';
	show_content('battle');
}

function summon_now(use_current_altar_card){
	var summon_stats = get_summon_stats();

	$.each(gamedata['summon_pre_buffs'], function(buff_id, buff_card){
		summon_stats = adjust_summon_stats(summon_stats, buff_card);
	});
	correct_summon_stats(summon_stats);

	//console.log(summon_stats['max_rarity']);

	var chosen_summon = get_random_hero(true, summon_stats['min_rarity'], summon_stats['max_rarity'], summon_stats['common_reduction']);
	if(use_current_altar_card != undefined && use_current_altar_card == true && all_available_cards[current_altar] != undefined && gamedata['owned_cards'][current_altar] != undefined && gamedata['owned_cards'][current_altar] > 0)
	{
		chosen_summon = current_altar;
		gamedata['owned_cards'][current_altar] -= 1;
		current_altar = '';
	}
	var found_level = /*round_by_percent*/(summon_stats['min_level'] + (Math.random() * (summon_stats['max_level'] - summon_stats['min_level'])));
	gamedata['current_summon'] = {
		hero: 		chosen_summon,
		tries: 		summon_stats['max_tries'],
		level: 		found_level,
		loot_rarity: summon_stats['loot_rarity'],
		reward_count: round_by_percent((20 * summon_stats['reward_bonus']) * /*sqr*/(get_effective_power_factor(found_level)) * (1 + (found_level / 100))),
	}
	selected_pre_summon_buff = '';
	selected_post_summon_buff = '';
	saveToLocalStorage();
	show_summon(true);
}

function select_summon_pre_buff(card_id){
	if(selected_pre_summon_buff != card_id)
	{
		selected_pre_summon_buff = card_id;
	}
	else
	{
		selected_pre_summon_buff = '';
	}
	show_summon();
}

function select_summon_post_buff(card_id){
	if(selected_post_summon_buff != card_id)
	{
		selected_post_summon_buff = card_id;
	}
	else
	{
		selected_post_summon_buff = '';
	}
	show_summon();
}

function use_summon_pre_buff(card_id){
	var summon_stats = get_summon_stats();
	if(gamedata['summon_pre_buffs'] == undefined){gamedata['summon_pre_buffs'] = {};}
	if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0 && count_object(gamedata['summon_pre_buffs']) < summon_stats['max_pre_buffs'])
	{
		if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['summon_pre_buff'] != undefined)
		{
			var found_slot = false;
			for (var i = 1; i < summon_stats['max_pre_buffs'] + 1; i++){
				if(gamedata['summon_pre_buffs'][i] == undefined && found_slot == false)
				{
					found_slot = i;
				}
			}
			gamedata['summon_pre_buffs'][found_slot] = card_id;

			gain_card(card_id, -1);
			saveToLocalStorage();
			show_summon();
		}
	}
}

function remove_prebuff(prebuff_id){
	if(gamedata['summon_pre_buffs'][prebuff_id] != undefined && all_available_cards[gamedata['summon_pre_buffs'][prebuff_id]] != undefined)
	{
		gain_card(gamedata['summon_pre_buffs'][prebuff_id], 1);
		delete gamedata['summon_pre_buffs'][prebuff_id];
		saveToLocalStorage();
		show_summon();
	}
}

function use_summon_post_buff(card_id){
	if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0 && all_available_cards[card_id] != undefined && all_available_cards[card_id]['summon_post_buff'] != undefined)
	{
		var buff_successfull = false;
		var current_buff = all_available_cards[card_id]['summon_post_buff'];
		if(gamedata['current_summon']['unbuffed_' + current_buff['buff_type']] == undefined){gamedata['current_summon']['unbuffed_' + current_buff['buff_type']] = gamedata['current_summon'][current_buff['buff_type']] + 0;}
		if(gamedata['current_summon'][current_buff['buff_type']] != undefined && current_buff['buff_amount_type'] == 'fixed' && (current_buff['buff_amount'] > 0 || gamedata['current_summon'][current_buff['buff_type']] + current_buff['buff_amount'] > 0))
		{
			gamedata['current_summon'][current_buff['buff_type']] += current_buff['buff_amount'];
			buff_successfull = true;
		}
		if(gamedata['current_summon'][current_buff['buff_type']] != undefined && current_buff['buff_amount_type'] == 'percent' && (current_buff['buff_amount'] > 0 || gamedata['current_summon'][current_buff['buff_type']] + current_buff['buff_amount'] > 0))
		{	
			gamedata['current_summon'][current_buff['buff_type']] += Math.ceil(gamedata['current_summon']['unbuffed_' + current_buff['buff_type']] * (0 + (current_buff['buff_amount'] / 100)));
			buff_successfull = true;
		}

		if(buff_successfull == true)
		{
			gain_card(card_id, -1);
			if(gamedata['owned_cards'][card_id] < 1){selected_post_summon_buff = '';}
			saveToLocalStorage();
			show_summon();
		}
	}
}

var current_altar = '';

function show_altar(){
	var parsed_summon = '';
	var unowned_class = '';
	var summon_stats = get_summon_stats();
	$.each(gamedata['summon_pre_buffs'], function(buff_id, buff_card){
		summon_stats = adjust_summon_stats(summon_stats, buff_card);
	});
	correct_summon_stats(summon_stats);
	var average_level = ((summon_stats['max_level'] - summon_stats['min_level']) / 2) + summon_stats['min_level'];
	parsed_summon += '<div class="summoned_hero_container">';
	var parsed_summoned_hero = parse_card('empty_card');
	if(all_available_cards[current_altar] != undefined)
	{
		if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][current_altar] == undefined && all_available_cards[current_altar]['recipe'] != undefined){unowned_class = 'unowned_summon';}
		parsed_summoned_hero = '<span class="' + unowned_class + '" onclick="show_card_details(\'' + current_altar + '\', true)">' + parse_card(current_altar) + '</span>';;
	}
	parsed_summon += '<span>' + parsed_summoned_hero + '</span>';
	parsed_summon += '<span class="summon_stats">';
	parsed_summon += 	'<br/>';
	if(summon_stats['min_level'] != 10 || summon_stats['max_level'] != 10)
	{
		parsed_summon += 	'Power: ' + Math.floor(summon_stats['min_level'] * 10);
		if(summon_stats['min_level'] != (summon_stats['max_level']))
		{
			parsed_summon += 	' - ' + Math.ceil(summon_stats['max_level'] * 10);
		}
		parsed_summon += 	'%<br/>';
	}
	if(current_altar == undefined || all_available_cards[current_altar] == undefined)
	{
		parsed_summon += 	'Max rarity: ' + Math.floor(summon_stats['max_rarity'] * get_upgrade_factor('altar_rarity', 'any', true));
	}
	else
	{
		var drop_chance = Math.floor(((summon_stats['loot_rarity'] * round_by_percent((20 * summon_stats['reward_bonus']) * /*sqr*/(get_effective_power_factor(average_level)) * (1 + (average_level / 100))) / card_drop_chance_reduction) / all_available_cards[current_altar]['value']) * 100);
		if(drop_chance > 100){drop_chance = 100;}
		parsed_summon += 	'Drop chance: ~' + drop_chance + '%';
	}
	parsed_summon += 	'<br/>';
	parsed_summon += 	'Tries: ' + (summon_stats['max_tries']) + '<br/>';
	parsed_summon += 	'Reward: ' + nFormatter(Math.floor(summon_stats['reward_bonus'] * 100),3) + '%<br/>';
	parsed_summon += 	'<br/>';
	parsed_summon += '</span>';

	if(current_altar == '')
	{
		parsed_summon += '<div class="menu_button slim summon button" data-target-content="choose_altar">CHOOSE</div><br/><br/>';
	}
	else
	{
		parsed_summon += '<div class="menu_button slim summon button" onclick="show_content(\'summon\');summon_now(true)" no-new-page="true">SACRIFICE</div><br/><br/>';
		parsed_summon += '<div class="menu_button slim summon button" onclick="current_altar=\'\'" data-target-content="altar">CLEAR</div><br/><br/>';
	}

	parsed_summon += 	'</div>';

	$('.altar_container').html(parsed_summon);
}

var current_show_altar_page = 1;

function show_choose_altar(){

	var summon_stats = get_summon_stats();
	$.each(gamedata['summon_pre_buffs'], function(buff_id, buff_card){
		summon_stats = adjust_summon_stats(summon_stats, buff_card);
	});
	var max_rarity = summon_stats['max_rarity'] * get_upgrade_factor('altar_rarity', 'any', true);

	cards_per_page = 12;
	$('.choose_altar_container').html('<span class="no_tinker">You have no cards that match your filter.</span>');

	gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
	var current_card_number = 0;

	$.each(gamedata['owned_cards'], function(card_id, owned_amount){
		if(all_available_cards[card_id] != undefined){
			var effective_owned_amount = owned_amount + 0;
			var card_filtered = false;
			if(all_available_cards[card_id]['hero_version'] == undefined || all_available_cards[card_id]['value'] > max_rarity)
			{
				card_filtered = true;
				//console.log(card_id);
			}
			
			if(effective_owned_amount > 0 && card_filtered == false && check_filters(card_id) == false)
			{
				current_card_number ++;
				if(current_card_number == 1)
				{
					$('.choose_altar_container').html('');
				}
				if(current_card_number / cards_per_page > current_show_altar_page -1 && current_card_number / cards_per_page <= current_show_altar_page)
				{
					var parsed_card = parse_card(card_id, effective_owned_amount);
					$('.choose_altar_container').append('<span onclick="current_altar=\'' + card_id + '\';show_content(\'altar\');">' + parsed_card + '</span>');
				}
			}
		}
		else
		{
			delete gamedata['owned_cards'][card_id];
		}
	});
	if(current_show_altar_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / cards_per_page <= current_show_altar_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(current_card_number > 0 && Math.ceil(current_card_number / cards_per_page) < current_show_altar_page)
	{
		current_show_altar_page = 1;
		show_choose_altar();
	}
	if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
	$('.page_selection .page_number').html(current_show_altar_page + ' / ' + Math.ceil(current_card_number / cards_per_page));
}

function set_altar_page(amount){
	current_show_altar_page += amount;
	if(current_show_altar_page < 1){current_show_altar_page = 1;}
	show_choose_altar();
}