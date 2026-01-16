var current_allies = {};
var current_enemies = {};
var current_allies_buffs = {};
var current_enemies_buffs = {};
var combat_active = false;
var current_target = 0;
var fct_counter = 1;
var loot_counter = 1;
var current_treasure_event = {};
var current_trade_event = {};
var current_quest_event = {};
var quest_message_counter = 0;
var current_acting_unit = {};
var damage_done = 0;
var last_result_amount = 0;
var player_target = {side:'',id:0};
var enemies_active = false;
var next_event;
var current_explore_chain = 0;
var average_equiped_level = 1;
var sound_counter = 1;
var audio = {};
var buff_group_key = 1;
var specific_explore_chain = 0;

$('.explore_button').click(function(){
	//explore();
	
});

function explore(){

	if(combat_active == false)
	{
		if(typeof(gamedata['explore_chain_bonus'][gamedata['current_location']]) != 'undefined' && typeof(gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]) != 'undefined')
		{
			current_explore_chain = gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]['min'];
		}

		parse_allies();
		find_next_event();
		
	}
}

function explore_specific(target){

	specific_explore_chain = target;
	explore();
}

function find_next_event(not_this_type){

	if(specific_explore_chain != 0)
	{
		current_explore_chain = specific_explore_chain;
	}

	var current_chapter = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']];
	var total_event_chances_at_current_chain = 0;
	var chosen_event_type = '';
	combat_active = false;
	if(current_chapter['possible_treasure'] != undefined && not_this_type != 'treasure')
	{
		$.each(current_chapter['possible_treasure'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain)
			{
				total_event_chances_at_current_chain += treasure_info['chance'];
			}
		});

	}
	if(current_chapter['possible_trade'] != undefined && not_this_type != 'trade')
	{
		$.each(current_chapter['possible_trade'], function(treasure_key, treasure_info){
			//console.log(treasure_info);
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain && (recipes[treasure_info['trade']]['reward_type'] != 'recipe' || gamedata['known_recipes'][recipes[treasure_info['trade']]['reward_id']] == undefined))
			{
				total_event_chances_at_current_chain += treasure_info['chance'];
			}
		});

	}
	if(current_chapter['possible_mobs'] != undefined)
	{
		$.each(current_chapter['possible_mobs'], function(mobs_key, mobs_info){
			if(mobs_info['min_explore_chain'] <= current_explore_chain && mobs_info['max_explore_chain'] >= current_explore_chain)
			{
				total_event_chances_at_current_chain += mobs_info['chance'];
			}
		});
	}

	if(current_chapter['possible_quests'] != undefined)
	{
		$.each(current_chapter['possible_quests'], function(mobs_key, mobs_info){
			if(mobs_info['min_explore_chain'] <= current_explore_chain && mobs_info['max_explore_chain'] >= current_explore_chain && (gamedata['quest_progress'][mobs_info['quest_id']] == undefined || gamedata['quest_progress'][mobs_info['quest_id']]['status'] == -1))
			{
				total_event_chances_at_current_chain += mobs_info['chance'];
			}
		});
	}



	var chosen_event = Math.random() * total_event_chances_at_current_chain;

	if(current_chapter['possible_treasure'] != undefined && not_this_type != 'treasure')
	{
		$.each(current_chapter['possible_treasure'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain)
			{
				chosen_event -= treasure_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = 'treasure';
				}
			}
		});
	}
	if(current_chapter['possible_trade'] != undefined && not_this_type != 'trade')
	{
		$.each(current_chapter['possible_trade'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain && (recipes[treasure_info['trade']]['reward_type'] != 'recipe' || gamedata['known_recipes'][recipes[treasure_info['trade']]['reward_id']] == undefined))
			{
				chosen_event -= treasure_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = 'trade';
				}
			}
		});
	}
	if(current_chapter['possible_mobs'] != undefined)
	{
		$.each(current_chapter['possible_mobs'], function(mobs_key, mobs_info){
			if(mobs_info['min_explore_chain'] <= current_explore_chain && mobs_info['max_explore_chain'] >= current_explore_chain)
			{
				chosen_event -= mobs_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = 'combat';
				}
			}
		});
	}
	if(current_chapter['possible_quests'] != undefined && not_this_type != 'treasure')
	{
		$.each(current_chapter['possible_quests'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain)
			{
				chosen_event -= treasure_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = 'quest';
				}
			}
		});
	}

	//console.log(chosen_event_type);
	
	if(chosen_event_type == '')
	{
		chosen_event_type = 'combat';
	}

	if(chosen_event_type == 'treasure')
	{
		parse_treasure();
	}

	if(chosen_event_type == 'trade')
	{
		parse_trade();
	}

	if(chosen_event_type == 'combat')
	{
		parse_combat();
	}

	if(chosen_event_type == 'quest')
	{
		parse_quest();
	}
}

function parse_treasure(){
	$('.combat_container').fadeOut();
	$('.trade_container').fadeOut();
	$('.combat_message').remove();
	$('.quest_container').fadeOut();
	$('.crosshair').css('display','none');

	$('.treasure_loot').html('');
	$('.treasure_container button').show();

	var current_chapter = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']];
	var total_event_chances_at_current_chain = 0;
	var chosen_event_type = '';
	if(current_chapter['possible_treasure'] != undefined)
	{
		$.each(current_chapter['possible_treasure'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain)
			{
				total_event_chances_at_current_chain += treasure_info['chance'];
			}
		});

	}
	var chosen_event = Math.random() * total_event_chances_at_current_chain;
	if(current_chapter['possible_treasure'] != undefined)
	{
		$.each(current_chapter['possible_treasure'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain)
			{
				chosen_event -= treasure_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = treasure_info['treasure'];
				}
			}
		});
	}

	if(chosen_event_type != '')
	{
		current_treasure_event = possible_treasure[chosen_event_type];

		$('.treasure_image').css('background-image', 'url(images/bg/' + current_treasure_event['image'] + ')');
		$('.treasure_title').html(current_treasure_event['name']);
		$('.treasure_description').html(current_treasure_event['description']);

		var explore_level_factor = get_level_factor(gamedata['explore_level']);

		$.each(current_treasure_event['loot'], function(key, item) {
			if(item['amount'] > 0){
				$('.treasure_loot').append('<div class="item" style="background-image:url(images/items/' + available_items[item['item']]['image'] + ')">1 - ' + (Math.floor(item['amount'] * explore_level_factor + 1)) + '</div>');
			}
		});

		$('.treasure_container').fadeIn();
	}
	else
	{
		find_next_event();
	}
}

function parse_trade(){
	$('.combat_container').fadeOut();
	$('.treasure_container').fadeOut();
	$('.combat_message').remove();
	$('.quest_container').fadeOut();
	$('.crosshair').css('display','none');

	$('.treasure_loot').html('');
	$('.trade_container button').show();
	$('.claim_trade_button.explore_button').html('trade and continue');

	var current_chapter = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']];
	var total_event_chances_at_current_chain = 0;
	var chosen_event_type = '';
	if(current_chapter['possible_trade'] != undefined)
	{
		$.each(current_chapter['possible_trade'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain && (recipes[treasure_info['trade']]['reward_type'] != 'recipe' || gamedata['known_recipes'][recipes[treasure_info['trade']]['reward_id']] == undefined))
			{
				total_event_chances_at_current_chain += treasure_info['chance'];
			}
		});

	}
	var chosen_event = Math.random() * total_event_chances_at_current_chain;
	if(current_chapter['possible_trade'] != undefined)
	{
		$.each(current_chapter['possible_trade'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain && (recipes[treasure_info['trade']]['reward_type'] != 'recipe' || gamedata['known_recipes'][recipes[treasure_info['trade']]['reward_id']] == undefined))
			{
				chosen_event -= treasure_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = treasure_info['trade'];
				}
			}
		});
	}

	/*if(chosen_event_type == 'sell_random_unequipped_gear')
	{
		var chosen_gear = get_random_unequipped_gear();

		if(chosen_gear > -1)
		{
			recipes['sell_random_unequipped_gear']['gear_cost'] = {}
			recipes['sell_random_unequipped_gear']['gear_cost'][gamedata['gear'][chosen_gear]['gear_id']] = gamedata['gear'][chosen_gear]['level'];
			recipes['sell_random_unequipped_gear']['reward_amount'] = Math.floor(available_gear[gamedata['gear'][chosen_gear]['gear_id']]['value'] * (Math.random() + 0.1) * gamedata['gear'][chosen_gear]['level']);
		}
		else
		{
			chosen_gear = get_random_level_1_gear();

			recipes['sell_random_unequipped_gear']['gear_cost'] = {}
			recipes['sell_random_unequipped_gear']['gear_cost'][chosen_gear] = 1;
			recipes['sell_random_unequipped_gear']['reward_amount'] = Math.floor(available_gear[chosen_gear]['value'] * (Math.random() + 0.1));

		}
	}

	if(chosen_event_type == 'buy_random_level_1_gear')
	{
		var chosen_gear = get_random_level_1_gear();

		recipes['buy_random_level_1_gear']['reward_id'] = chosen_gear;
		recipes['buy_random_level_1_gear']['cost']['coins'] = Math.floor(available_gear[chosen_gear]['value'] * ((Math.random() * 3) + 0.9));
	}*/

	if(chosen_event_type != '')
	{
		if(recipes[chosen_event_type]['gear_subtype'] != undefined)
		{
			var chosen_gear = get_random_unequipped_gear(recipes[chosen_event_type]['gear_subtype']);
			if(chosen_gear > -1)
			{
				recipes[chosen_event_type]['gear_cost'] = {}
				recipes[chosen_event_type]['gear_cost'][gamedata['gear'][chosen_gear]['gear_id']] = gamedata['gear'][chosen_gear]['level'];
				recipes[chosen_event_type]['reward_amount'] = Math.floor(available_gear[gamedata['gear'][chosen_gear]['gear_id']]['value'] * (Math.random() + 0.1) * gamedata['gear'][chosen_gear]['level']);
			}
			else
			{
				chosen_gear = get_random_level_1_gear(recipes[chosen_event_type]['gear_subtype']);

				recipes[chosen_event_type]['gear_cost'] = {}
				recipes[chosen_event_type]['gear_cost'][chosen_gear] = 1;
				recipes[chosen_event_type]['reward_amount'] = Math.floor(available_gear[chosen_gear]['value'] * (Math.random() + 0.1));

			}
		}
		if(recipes[chosen_event_type]['item_subtype'] != undefined)
		{
			var chosen_item = get_random_owned_item(recipes[chosen_event_type]['item_quality'],recipes[chosen_event_type]['item_subtype']);
			var chosen_amount = Math.floor((Math.random() * gamedata['inventory'][chosen_item]) + 1);
			if(chosen_item != '')
			{
				recipes[chosen_event_type]['cost'] = {}
				recipes[chosen_event_type]['cost'][chosen_item] = chosen_amount;
				recipes[chosen_event_type]['reward_amount'] = Math.floor(chosen_amount * (Math.random() + 0.1) * available_items[chosen_item]['value']);
			}
			else
			{
				var chosen_item = get_random_item(recipes[chosen_event_type]['item_quality'],recipes[chosen_event_type]['item_subtype']);

				recipes[chosen_event_type]['gear_cost'] = {}
				recipes[chosen_event_type]['gear_cost'][chosen_item] = 1;
				recipes[chosen_event_type]['reward_amount'] = Math.floor(available_gear[chosen_gear]['value'] * (Math.random() + 0.1));

			}
		}
		if(recipes[chosen_event_type]['offer_type'] != undefined)
		{
			if(recipes[chosen_event_type]['offer_type'] == 'gear')
			{
				var chosen_gear = get_random_level_1_gear(recipes[chosen_event_type]['offer_subtype']);
				recipes[chosen_event_type]['reward_id'] = chosen_gear;
				recipes[chosen_event_type]['cost']['coins'] = Math.floor(available_gear[chosen_gear]['value'] * ((Math.random() * 3) + 0.9));
			}
			if(recipes[chosen_event_type]['offer_type'] == 'item')
			{
				var chosen_item = get_random_item(recipes[chosen_event_type]['item_quality'],recipes[chosen_event_type]['offer_subtype']);
				var chosen_amount = Math.floor((Math.random() * 10) + 1);
				recipes[chosen_event_type]['reward_id'] = chosen_item;
				recipes[chosen_event_type]['reward_amount'] = chosen_amount;
				recipes[chosen_event_type]['cost']['coins'] = Math.floor(available_items[chosen_item]['value'] * ((Math.random() * 3) + 0.9) * chosen_amount);
			}
		}

		current_trade_event = recipes[chosen_event_type];
		current_trade_event['id'] = chosen_event_type;

		$('.trade_image').css('background-image', 'url(images/' + current_trade_event['image'] + ')');
		//$('.trade_title').html(current_trade_event['name']);
		//$('.trade_description').html(current_trade_event['description']);

		var explore_level_factor = get_level_factor(gamedata['explore_level']);

		$('.craft_amount').val(explore_level_factor);
		//console.log(explore_level_factor);

		show_single_recipe(chosen_event_type, 'none');
		$('.recipe_buttons').hide();

		$('.trade_container').fadeIn();
	}
	else
	{
		find_next_event();
	}
}

function parse_quest(){
	$('.combat_container').fadeOut();
	$('.trade_container').fadeOut();
	$('.treasure_container').fadeOut();
	$('.combat_message').remove();
	$('.crosshair').css('display','none');

	var current_chapter = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']];
	var total_event_chances_at_current_chain = 0;
	var chosen_event_type = '';
	if(current_chapter['possible_quests'] != undefined)
	{
		$.each(current_chapter['possible_quests'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain && (gamedata['quest_progress'][treasure_info['quest_id']] == undefined || gamedata['quest_progress'][treasure_info['quest_id']]['status'] == -1))
			{
				total_event_chances_at_current_chain += treasure_info['chance'];
			}
		});

	}
	var chosen_event = Math.random() * total_event_chances_at_current_chain;
	if(current_chapter['possible_quests'] != undefined)
	{
		$.each(current_chapter['possible_quests'], function(treasure_key, treasure_info){
			if(treasure_info['min_explore_chain'] <= current_explore_chain && treasure_info['max_explore_chain'] >= current_explore_chain && (gamedata['quest_progress'][treasure_info['quest_id']] == undefined || gamedata['quest_progress'][treasure_info['quest_id']]['status'] == -1))
			{
				chosen_event -= treasure_info['chance'];
				if(chosen_event <= 0 && chosen_event_type == '')
				{
					chosen_event_type = treasure_info['quest_id'];
				}
			}
		});
	}

	if(chosen_event_type != '')
	{
		current_quest_event = possible_quests[chosen_event_type];

		gamedata['quest_progress'][chosen_event_type] = {status:1,requirements:{}};
		saveToLocalStorage();
		show_quests();

		if(current_quest_event['image'] != undefined)
		{
			$('.quest_image').css('background-image', 'url(images/bg/' + current_quest_event['image'] + ')');
		}
		$('.quest_title').html(current_quest_event['name']);
		$('.quest_description').html(current_quest_event['description'] + '<br/><br/><b>Reward:</b><br/>' + parse_quest_rewards(current_quest_event));

		/*var explore_level_factor = 1;
		if(gamedata['explore_level'] > 1)
		{
			explore_level_factor = Math.sqrt(1 + ((gamedata['explore_level'] -1) / 10));
		}

		$.each(current_treasure_event['loot'], function(key, item) {
			if(item['amount'] > 0){
				$('.treasure_loot').append('<div class="item" style="background-image:url(images/items/' + available_items[item['item']]['image'] + ')">1 - ' + Math.floor(item['amount'] * explore_level_factor) + '</div>');
			}
		});*/

		$('.quest_container').fadeIn();
	}
	else
	{
		find_next_event();
	}
}

function parse_allies(){
	current_allies = {};

	$('.allies .unit').removeClass('active');
	$('.allies .unit').removeClass('dead');
	$('.allies .hp_bar').css('width','100%');

	average_equiped_level = 0;
	var unit_count = 0;
	$.each(gamedata['units'], function(key, unit) {
	    if(unit['slot'] !== 0 && unit['slot'] < 6)
	    {
	    	parse_unit(unit['unit_id'], unit['slot'], 'ally', current_allies, unit['level'], false, key);
	    	average_equiped_level += unit['level'];
	    	unit_count++;
	    }
	}); 
	parse_player();
	check_hp(current_allies, 'ally', 7);
	//$('.' + unit_group_string + '_' + unit_id + ' .hp_amount').html(current_hp);

	average_equiped_level = (average_equiped_level / unit_count);
	//console.log(average_equiped_level);
}

function parse_enemies(){
	current_enemies = {};
	$('.enemies .unit').removeClass('active');
	$('.enemies .unit').removeClass('dead');
	$('.enemies .hp_bar').css('width','100%');

	if(count_object(gamedata['spells']) > 0)
	{
		show_spells();
		$('.crosshair').css('display','block');
		$('.crosshair').css('opacity',1);
	}
	
		
	var total_chance = 0;
	var possible_mob_count = 0;
	$.each(locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['possible_mobs'], function(key, unit_group) {
		if(unit_group['min_explore_chain'] <= current_explore_chain && unit_group['max_explore_chain'] >= current_explore_chain)
		{
			total_chance += unit_group['chance'] + current_explore_chain;
			possible_mob_count++;
		}
	});
	if(possible_mob_count > 0)
	{
		var chosen_group = (Math.random() * total_chance);
		var chosen_group_id = -1;
		$.each(locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['possible_mobs'], function(key, unit_group) {
			if(unit_group['min_explore_chain'] <= current_explore_chain && unit_group['max_explore_chain'] >= current_explore_chain)
			{
				chosen_group -= unit_group['chance'] + current_explore_chain;
				if(chosen_group <= 0 && chosen_group_id == -1)
				{
					chosen_group_id = key;
				}
			}
		});
		if(chosen_group_id == -1)
		{
			chosen_group_id = 0;
		}
		var slotnumber = 1;
		var all_mobs = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['possible_mobs'][chosen_group_id]['mobs'];
		$.each(all_mobs, function(key, unit) {
			if((Math.random() * 100) < unit['chance'])
			{
				var mobs_of_this_type = unit['min'] + Math.floor(Math.random() * (unit['max'] - unit['min'] + 1));
				if(mobs_of_this_type > (11 - slotnumber))
				{
					mobs_of_this_type = 11 - slotnumber;
				}
				for (mob_count = 1;mob_count <= mobs_of_this_type;mob_count++)
				{
					if(slotnumber <= 10)
					{
						if(unit['unit'] != 'none')
						{
							var spawned_unit_level = unit['level'];
							if(unit['level'] < average_equiped_level * minimum_enemy_level){
								spawned_unit_level = round_by_percent(average_equiped_level * minimum_enemy_level);
							}

							if(unit['factor'] !== 'undefined' && unit['level'] < average_equiped_level * unit['factor'])
							{
								spawned_unit_level = round_by_percent(average_equiped_level * unit['factor']);
							}
							parse_unit(unit['unit'], slotnumber, 'enemy', current_enemies, spawned_unit_level);
						}
						slotnumber++;

					}
				}
			}
		});

		enemies_active = true;

	}
	else
	{
		enemies_active = false;
	}
	
	setTimeout(function(){find_new_player_target();},100)
	
	
	//console.log(current_enemies);
}

function parse_combat(){

	$('.treasure_container').fadeOut();
	$('.trade_container').fadeOut();
	$('.quest_container').fadeOut();
	if(count_object(gamedata['spells']) > 0)
	{
		show_spells();
		$('.crosshair').css('display','block');
		$('.crosshair').css('opacity',1);
	}

	/*if(player_target['id'] == 0)
	{
		set_player_target('enemy', 1);
	}*/
	
	// parse_allies();
	parse_enemies();
	
	$('.combat_container').fadeIn();
	//$('.combat_container').append('<div class="combat_message message_level">FIGHT!</div>');
	

	

	//$.each(gamedata['spells'], function(id,spell){
		//spell['cooldown'] = 0;
	//});
	if(enemies_active == true)
	{
		next_event = setTimeout(function(){
			//$('.combat_container').fadeOut();
			//combat_active = false;
			$('.combat_message').remove();
			combat_active = true;
			$('.spells .home_button').show();
		},500);
	}
	else
	{
		clearTimeout(next_event);
		end_combat();
		reset_explore();
	}
};

function continue_combat(){

	//$('.treasure_container').fadeOut();
	//$('.trade_container').fadeOut();
	//$('.quest_container').fadeOut();
	//show_spells();
	//parse_allies();
	
	var current_explore_chain_bonus = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['max_chain'];
	if(typeof(gamedata['explore_chain_bonus'][gamedata['current_location']]) != 'undefined' && typeof(gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]) != 'undefined')
	{
		current_explore_chain_bonus = gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]['max'];
	}
	if(current_explore_chain <= current_explore_chain_bonus)
	{
		parse_enemies();
	}
	else
	{
		enemies_active = false;
	}
	
	//$('.combat_container').fadeIn();
	//$('.combat_container').append('<div class="combat_message message_level">FIGHT!</div>');
	//$('.crosshair').css('display','block');
	//$('.crosshair').css('opacity',1);

	/*if(player_target['id'] == 0)
	{
		set_player_target('enemy', 1);
	}*/

	//$.each(gamedata['spells'], function(id,spell){
		//spell['cooldown'] = 0;
	//});
	if(enemies_active == true)
	{
		next_event = setTimeout(function(){
			//$('.combat_container').fadeOut();
			//combat_active = false;
			$('.combat_message').remove();
			combat_active = true;
		},1500);
	}
	else
	{
		clearTimeout(next_event);
		end_combat();
		reset_explore();
	}
};

function resolve_combat(){

	//current_acting_unit = {};

	resolve_buffs(current_allies, 'ally', current_allies_buffs);
	resolve_buffs(current_enemies, 'enemy', current_enemies_buffs);

	var highest_aggro = 0;
	$('.unit.dead').removeClass('aggro');
	$('.unit.dead .frozen').removeClass('active');
	$('.unit.dead .petrified').removeClass('active');
	$.each(current_allies, function(key, unit) {
		
		if(unit['current_hp'] > 0){
			if(get_attribute(key, 'allies', 'frozen') !== 0){
				$('.ally_' + key + ' .frozen').addClass('active');
			}
			else
			{
				$('.ally_' + key + ' .frozen').removeClass('active');
			}
			if(get_attribute(key, 'allies', 'petrified') !== 0){
				$('.ally_' + key + ' .petrified').addClass('active');
			}
			else
			{
				$('.ally_' + key + ' .petrified').removeClass('active');
			}
			//current_acting_unit = {key:key,unit:unit,string:'ally',group:current_allies,buffs:current_allies_buffs};
			//unit['active_abilities'][0]['current_cooldown'] -= 0.01;
			process_abilities(key, unit, 'allies', current_allies);
			var target_aggro = get_attribute(key, 'allies', 'aggro');
			//$('.ally_' + key + ' .unit_name').html(Math.floor(target_aggro));
			if(target_aggro == highest_aggro)
			{
				$('.ally_' + key + '').addClass('aggro');
			}
			if(target_aggro > highest_aggro)
			{
				$('.allies .unit').removeClass('aggro');
				$('.ally.unit').removeClass('aggro');
				$('.ally_' + key + '').addClass('aggro');
				highest_aggro = target_aggro;
			}
			//$('.ally_' + key + ' .unit_level').html(target_aggro);
			//console.log(unit['active_abilities'][0]['current_cooldown']);
		}
	});

	var highest_aggro = 0;
	$.each(current_enemies, function(key, unit) {
		
		if(unit['current_hp'] > 0){
			if(get_attribute(key, 'enemies', 'frozen') !== 0){
				$('.enemy_' + key + ' .frozen').addClass('active');
			}
			else
			{
				$('.enemy_' + key + ' .frozen').removeClass('active');
			}
			if(get_attribute(key, 'enemies', 'petrified') !== 0){
				$('.enemy_' + key + ' .petrified').addClass('active');
			}
			else
			{
				$('.enemy_' + key + ' .petrified').removeClass('active');
			}
			//current_acting_unit = {key:key,unit:unit,string:'enemy',group:current_enemies,buffs:current_enemies_buffs};
			process_abilities(key, unit, 'enemies', current_enemies);
			var target_aggro = get_attribute(key, 'enemies', 'aggro');
			//$('.enemy_' + key + ' .unit_name').html(Math.floor(target_aggro));
			if(target_aggro == highest_aggro)
			{
				$('.enemies .enemy_' + key + '').addClass('aggro');
			}
			if(target_aggro > highest_aggro)
			{
				$('.enemies .unit').removeClass('aggro');
				$('.enemies .enemy_' + key + '').addClass('aggro');
				highest_aggro = target_aggro;
			}
			//$('.enemy_' + key + ' .unit_level').html(target_aggro);
		}
	});

	check_combat_alive();
};

function resolve_buffs(side, string, buffs){
	$.each(buffs, function(key, buff) {
		buff['duration'] -= time_tick_reduction;
		buff['current_time'] -= time_tick_reduction;
		if(buff['current_time'] <= 0)
		{
			buff['current_time'] += buff['time'];
			if(buff['attribute'] == 'physical_damage')
			{
				receive_damage(side, string, buff['target_id'], buff['amount'], 'physical', buff['fct_color'], 1);
			}
			if(buff['attribute'] == 'piercing_damage')
			{
				receive_damage(side, string, buff['target_id'], buff['amount'], 'piercing', buff['fct_color'], 1);
			}
			if(buff['attribute'] == 'magical_damage')
			{
				receive_damage(side, string, buff['target_id'], buff['amount'], 'magical', buff['fct_color'], 1);
			}
			if(buff['attribute'] == 'healing')
			{
				receive_healing(side, string, buff['target_id'], buff['amount'], buff['fct_color'], 1);
			}
		}
		if(buff['duration'] <= 0)
		{
			remove_buff(buff['buff_group_key']);
			//console.log(buff['buff_name']);
			/*if(buff['buff_name'] !== 'undefined')
			{
				reduce_buff_image(string + '_' + buff['target_id'], buff['buff_name']);
			}
			else
			{
				var target_buff =  string + '_' + buff['target_id'] + ' .buff_' + buff['attribute'];
				parse_buff(target_buff, (buff['amount'] * -1));
			}
			buffs[key] = {};
			check_hp(side, string, buff['target_id']);*/
		}
	});
}

function remove_buff(buff_group){
	$.each(current_allies_buffs, function(key, buff) {
		if(buff['buff_group_key'] == buff_group)
		{
			reduce_buff_image('ally_' + buff['target_id'], buff['buff_name']);
			check_hp(current_allies, 'ally', buff['target_id']);
			delete current_allies_buffs[key];
		}
	});
	$.each(current_enemies_buffs, function(key, buff) {
		if(buff['buff_group_key'] == buff_group)
		{
			reduce_buff_image('enemy_' + buff['target_id'], buff['buff_name']);
			check_hp(current_enemies, 'enemy', buff['target_id']);
			delete current_enemies_buffs[key];
		}
	});
};

function move_buffs(from_target_string, from_target_id, from_buffs, to_target_string, to_target_id, to_buffs, amount, type){
	var buffs_moved = false;
	if(amount == 'all')
	{
		amount = 1000000000000000;
	}
	amount = round_by_percent(amount);

	$.each(from_buffs, function(buff_key,buff){
		if(buff['target_id'] == from_target_id)
		{
				if(buff['buff_type'] == type)
				{
					buff_group_key ++;
					parse_buff_image(to_target_string + '_' + to_target_id, buff['buff_image'], buff['buff_name'], buff['buff_type']);

					$.each(from_buffs, function(sub_buff_key,sub_buff){
						if(sub_buff['buff_group_key'] == buff['buff_group_key'])
						{	
							var new_key = get_highest_key_in_object(to_buffs) + 1;
							to_buffs[new_key] = copyobject(sub_buff);
							to_buffs[new_key]['buff_group_key'] = buff_group_key;
							to_buffs[new_key]['target_id'] = to_target_id;
						}
					});
					
					remove_buff(buff['buff_group_key']);
					amount -= 1;
					buffs_moved = true;
				}

		}
		if(amount < 1)
		{
			return false;
		}
	});

	//console.log(to_buffs);

	return buffs_moved;

};

function check_combat_alive(){

	var mobs_alive = 0;
	$.each(current_enemies, function(key, enemy) {
		if(enemy['current_hp'] > 0){
			mobs_alive += 1;
		};
	});

	var allies_alive = 0;
	$.each(current_allies, function(key, ally) {
		if(ally['current_hp'] > 0){
			allies_alive += 1;
		};
	});

	if(mobs_alive == 0 && enemies_active == true)
	{
		//end_combat();
		//$('.main_window').append('<div class="combat_message message_victory">VICTORY</div>');
		complete_location();
		enemies_active = false;
	}
	if(allies_alive == 0)
	{
		//$('.combat_container').append('<div class="combat_message message_defeat">DEFEAT</div>');
		end_combat();
		//gamedata['explore_level'] = locations[gamedata['current_location']]['start_level'] + gamedata['unlocked_locations'][gamedata['current_location']];
		next_event = setTimeout(function(){
			reset_explore();
		},1500);
	}
};

function complete_location(){

	if(specific_explore_chain == 0)
	{
		current_explore_chain += 1;
	}

	saveToLocalStorage();

	var current_explore_chain_bonus = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['max_chain'];
	var start_explore_chain = 0;
	if(typeof(gamedata['explore_chain_bonus'][gamedata['current_location']]) != 'undefined' && typeof(gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]) != 'undefined')
	{
		current_explore_chain_bonus = gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]['max'];
		start_explore_chain = gamedata['explore_chain_bonus'][gamedata['current_location']][gamedata['explore_level']]['min'];
	}

	check_quests('waves_defeated', undefined, current_explore_chain - start_explore_chain);

	if(current_explore_chain <= current_explore_chain_bonus || specific_explore_chain != 0)
	{
		next_event = setTimeout(function(){
			$.each(current_allies, function(key, unit){
				process_ability(key, unit, 'ally', current_allies, 'rest', unit_abilities['rest']);
				
			});
			set_minimum_cooldowns(0.7);
			//if($("#auto_explore").prop("checked")){
			next_event = setTimeout(function(){
				$('.combat_message').remove();
				$('.spells .home_button').show();
				find_next_event();
				//continue_combat();
			},2500);
		},2500);
	}
	else
	{
		end_combat();
		next_event = setTimeout(function(){
			reset_explore();
		},1500);
	}	
}

function set_minimum_cooldowns(amount){
	$.each(current_allies,function(ally_id, ally){
		$.each(ally['active_abilities'], function(ability_id,ability){
			if(ability['current_cooldown'] < amount && ability['proc'] == 'basic'){
				ability['current_cooldown'] = (Math.random() * amount * 0.75) + (amount * 1.25);
			}
		});
	});
};

function end_combat(){
	$('.spells .home_button').hide();
	$('.fct').remove();
	$('.quest_button').show();
	current_explore_chain = 0;
	
	saveToLocalStorage();
	
	current_allies_buffs = {};
	current_enemies_buffs = {};
	clear_buffs();
	$('.crosshair').css('display','none');
	$('.crosshair').css('opacity',0);
	combat_active = false;
};

function process_abilities(key, unit, side, side_object){
	$.each(unit['active_abilities'], function(akey, ability) {

		var level_factor = get_level_factor(unit['level']);

		if(get_attribute(key, side, 'attack_speed') > 0 && get_attribute(key, side, 'frozen') == 0 && get_attribute(key, side, 'petrified') == 0)
		{
			//var speed_reduction_factor = ((get_attribute(key, side, 'speed') / level_factor) / 10);
			var speed_reduction_factor = get_attribute(key, side, 'attack_speed');
			//ability['current_cooldown'] -= (time_tick_reduction * ((speed_reduction_factor * 0.9) + (Math.random() * speed_reduction_factor * 0.2)));
			ability['current_cooldown'] -= time_tick_reduction * speed_reduction_factor;
		}
		if(ability['current_cooldown'] <= 0 && ability['proc'] == 'basic'){
			process_ability(key, unit, side, side_object, akey, ability);
			if(ability['current_cooldown'] < 0)
			{
				ability['current_cooldown'] = 0;
			}
		}
	});
};

function parse_buff(target_buff, buff_amount){
	var current_buff_amount = parseInt($('.' + target_buff + ' .buff_amount').html());
	//console.log($('.' + target_buff + ' .buff_amount').html() + ' ¬ ' + current_buff_amount);
	current_buff_amount += buff_amount;
	if(current_buff_amount > 0)
	{
		$('.' + target_buff + ' .buff_amount').css('color','#0f0');
		$('.' + target_buff + ' .buff_amount').html('+' + current_buff_amount);
		$('.' + target_buff).css('opacity','1');
	}
	else
	{
		if(current_buff_amount < 0)
		{
			$('.' + target_buff + ' .buff_amount').css('color','#f00');
			$('.' + target_buff + ' .buff_amount').html(current_buff_amount);
			$('.' + target_buff).css('opacity','1');
		}
		else
		{
			$('.' + target_buff + ' .buff_amount').html('0');
			$('.' + target_buff).css('opacity','0');
		}
	}
}

function parse_buff_image(target, buff_image, buff_name, buff_type){
	//console.log(target + ' ' + buff_image + ' ' + buff_name);
	if($('.' + target + ' .' + buff_name).length == 0){
		$('.' + target).append('<div class="buff_image ' + buff_type + ' ' + buff_name + '" style="background-image:url(images/'+ buff_image +');font-size:0px;">1</div>');
	}
	else
	{
		$('.' + target + ' .' + buff_name).html(parseInt($('.' + target + ' .' + buff_name).html()) + 1);
		$('.' + target + ' .' + buff_name).css("fontSize", "16px");
	}
}

function reduce_buff_image(target, buff_name){
	if($('.' + target + ' .' + buff_name).length == 0){
	}
	else
	{
		if(parseInt($('.' + target + ' .' + buff_name).html()) == 1)
		{
			$('.' + target + ' .' + buff_name).remove();
		}
		else
		{
			$('.' + target + ' .' + buff_name).html(parseInt($('.' + target + ' .' + buff_name).html()) - 1);
		}
		if(parseInt($('.' + target + ' .' + buff_name).html()) == 1)
		{
			$('.' + target + ' .' + buff_name).css("fontSize", "0px");
		}
		else
		{
			$('.' + target + ' .' + buff_name).css("fontSize", "16px");
		}
		
	}
}

function clear_buffs(){
	$('.buff_amount').html('0');
	$('.buff').css('opacity','0');
	$('.shield').removeClass('active');
	$('.buff_image').remove();
}

function clear_buff_single(target, side, id){
	$('.' + target + ' .buff_amount').html('0');
	$('.' + target + ' .buff').css('opacity','0');
	$('.' + target + ' .shield').removeClass('active');
	$('.' + target + ' .buff_image').remove();
	if(side == 'ally')
	{
		$.each(current_allies_buffs, function(key, buff){
			if(buff['target_id'] == id)
			{
				current_allies_buffs[key] = {};
			}
		});
	}
	else
	{
		$.each(current_enemies_buffs, function(key, buff){
			if(buff['target_id'] == id)
			{
				current_enemies_buffs[key] = {};
			}
		});
	}
}

function process_ability(key, unit, side, side_object, abkey, abilities, forced_target, spell_effect_factor){

	var targets_found = 0;
	

	if(side == 'allies' || side == 'ally' || side == 'player')
	{
		var current_buffs = current_allies_buffs;
	}
	else
	{
		var current_buffs = current_enemies_buffs;
	}
	

	if(abilities['proc_chance'] == undefined || abilities['proc_chance'] > Math.random() * 100)
	{
		
		var shown_active_ability_text = 0;

		var found_good_target = false;
		var first_target = true;

		$.each(abilities['targets'], function(akey, ability){
			ability['name'] = abilities['name'];

			if(/*found_good_target == true || first_target == true*/ true)
			{

				var ability_target = ability['target'] + '';

				if(ability_target == 'random')
				{
					if(Math.random() > 0.5)
					{
						ability_target = 'enemy';
					}
					else
					{
						ability_target = 'ally';
					}
				}

				if(get_attribute(key, side, 'dominated') > 0)
				{
					
					if(ability_target == 'enemy')
					{
						ability_target = 'not_self';
					}
					else
					{
						if(ability_target == 'ally' || ability_target == 'not_self')
						{
							ability_target = 'enemy';
						}
					}

					forced_target = undefined;
				}

				if(get_attribute(key, side, 'confused') > 0 && (ability_target == 'enemy' || ability_target == 'ally' || ability_target == 'not_self'))
				{
					if(Math.random() > 0.5)
					{
						ability_target = 'not_self';
					}
					else
					{
						ability_target = 'enemy';
					}

					forced_target = undefined;
				}

				if(typeof(forced_target) != 'undefined' && abilities['random_target'] != true)
				{
					ability_target = forced_target['side'];
				}

				var target_side = {};
				var target_string;	
				var current_string;	
				var target_side_buffs;	

				if(ability_target == 'enemy')
				{
					if(side == 'allies' || side == 'ally' || side == 'player')
					{
						target_side = current_enemies;
						target_string = 'enemy';
						current_string = 'ally';
						target_side_buffs = current_enemies_buffs;
					}
					else
					{
						target_side = current_allies;
						target_string = 'ally';
						current_string = 'enemy';
						target_side_buffs = current_allies_buffs;
					}
				}
				else
				{
					if(ability_target == 'active_unit')
					{
						target_side = current_acting_unit['group'];
						target_string = current_acting_unit['string'];
						target_side_buffs = current_acting_unit['buffs'];

						if(side == 'allies' || side == 'ally' || side == 'player')
						{
							current_string = 'ally';
						}
						else
						{
							current_string = 'enemy';
						}
					}
					else
					{
						if(side == 'enemies' || side == 'enemy')
						{
							target_side = current_enemies;
							target_string = 'enemy';
							current_string = 'enemy';
							target_side_buffs = current_enemies_buffs;
						}
						else
						{
							target_side = current_allies;
							target_string = 'ally';
							current_string = 'ally';
							target_side_buffs = current_allies_buffs;
						}
					}
				}	

				var current_targets = target_side;
				if(ability_target == 'self')
				{
					current_targets = {};
					current_targets[key] = unit;
				}

				if(typeof(forced_target) != 'undefined' && abilities['random_target'] != true)
				{
					var temp_current_target = current_targets[forced_target['id']];
					//console.log(temp_current_target);
					current_targets = {};
					current_targets[forced_target['id']] = temp_current_target;
				}

				if(ability_target == 'active_unit')
				{
					current_targets = {};
					if(typeof(current_acting_unit['key']) != 'undefined')
					{
						current_targets[current_acting_unit['key']] = current_acting_unit['unit'];
					}
				}

				if(ability['target_state'] == 'none')
				{
					if(side == 'allies' || side == 'player' || side == 'ally')
					{
						current_targets = find_target_none(current_targets, 5,ability['unique_targets'],ability['target_random']);
					}
					else
					{
						current_targets = find_target_none(current_targets, 10,ability['unique_targets'],ability['target_random']);
					}
				}
				if(ability['target_state'] == 'alive')
				{
					current_targets = find_target_alive(current_targets,ability['unique_targets'],ability['target_random']);
				}
				if(ability['target_state'] == 'dead')
				{
					current_targets = find_target_dead(current_targets,ability['unique_targets'],ability['target_random']);
				}
				if(ability['target_damaged'] == true)
				{
					current_targets = find_target_damaged(current_targets,ability['unique_targets'],ability['target_random']);
				}
				if(ability['target_buff'] == 'buff')
				{
					current_targets = find_target_buffed(current_targets,ability['unique_targets'],ability['target_random'],target_side_buffs);
				}
				if(ability['target_buff'] == 'debuff')
				{
					current_targets = find_target_debuffed(current_targets,ability['unique_targets'],ability['target_random'],target_side_buffs);
				}
				
				if(ability_target == 'not_self')
				{
					current_targets = find_target_not_self(current_targets, key, ability['unique_targets'],ability['target_random']);
				}

				if(typeof(ability['specific_target']) != 'undefined' && ability['specific_target'] != '')
				{
					current_targets = find_target_type(current_targets,ability['unique_targets'],ability['target_random'],ability['specific_target']);
				}		

				var use_aggro = ability['use_aggro'];

				if(get_attribute(key, side, 'confused') > 0)
				{
					use_aggro = false;
				}
				
				
				current_targets = find_target_from_group(current_targets, ability['unique_targets'], ability['target_random'], use_aggro, ability['preferred_type'], target_string, ability['hp_state'], abilities['types'],ability['cannot_target']);

				current_acting_unit = {key:key,unit:unit,string:current_string,group:side_object,buffs:current_buffs};

				var original_target_side = target_side;
				var original_target_string = target_string;
				var original_target_buffs = target_side_buffs;

				//var current_target_count = count_object(current_targets);
				$.each(current_targets, function(current_target, current_target_info){
					current_target = current_target_info['key'];

					target_side =  original_target_side;
					target_string = original_target_string;
					target_side_buffs = original_target_buffs;
				
					var ability_delay = 0;

					for (ability_count = 0; ability_count < ability['target_count']; ability_count++) {
						//console.log(current_target);
						/*current_target = a;
						target_side = original_target_side;
						target_string = original_target_string;*/

						

							if(current_target > 0)
							{
								targets_found++;

								var acting_unit = current_acting_unit;

								setTimeout(function(){
								
								current_acting_unit = acting_unit;

								var immune_to_ability = false;
								var dodged = false;
								if(target_side[current_target] !== undefined)
								{
									if(target_string !== current_string && ability_target == 'enemy')
									{
										$.each(abilities['types'], function(type_key,type){
											if(type == 'magical' && Math.random() * 100 < get_attribute(current_target, target_string,'reflect'))
											{
												//generate_fct('' + target_string + '_' + current_target, 'reflect', '#fff', 1);
												generate_smash_fct('' + target_string + '_' + current_target, 'reflect');
												current_target = key;
												target_side = side_object;
												target_string = current_string;
											}
										});
									}

									if(target_side[current_target] !== undefined && target_side[current_target]['immune'] !== undefined)
									{
										$.each(abilities['types'], function(type_key,type){
											$.each(target_side[current_target]['immune'], function(immune_key,immune){
												if(type == immune)
												{
													immune_to_ability = true;
													generate_smash_fct('' + target_string + '_' + current_target, 'immune');
												}
											});
										});
									}

									if(abilities['precision'] == undefined){abilities['precision'] = 0;}
									
									if(get_attribute(current_target, target_string,'frozen') == 0 && get_attribute(current_target, target_string,'petrified') == 0)
									{
										$.each(abilities['types'], function(type_key,type){
											if(type == 'physical' && (Math.random() * 100 + abilities['precision']) < get_attribute(current_target, target_string,'dodge'))
											{
												//console.log(target_side[current_target]['name'] + ' dodge: ' + get_attribute(current_target, target_string,'dodge'))
												dodged = true;
												generate_smash_fct('' + target_string + '_' + current_target, 'dodge');
											}
										});
									}
		
								}

								if(shown_active_ability_text == 0){
									if(abilities['proc'] == 'basic')
									{
										generate_ability_fct('' + current_string + '_' + key, ability['name'], '#fff', 0.8);
									}
									else
									{
										generate_smash_fct('' + current_string + '_' + key, ability['name']);
									}
									if(abilities['sound'] != undefined && immune_to_ability == false && dodged == false)
									{
										sound_counter++;
										var amount_of_sounds = count_object(abilities['sound']);
										var sound_chosen = Math.floor(Math.random() * amount_of_sounds);
										audio[sound_counter] = new Audio('sounds/' + abilities['sound'][sound_chosen]);
										if(abilities['volume_factor'] == undefined)
										{
											abilities['volume_factor'] = 1;
										}
										audio[sound_counter].volume = 0.2 * abilities['volume_factor'] * master_volume;
										audio[sound_counter].play();
									}
								}

								shown_active_ability_text++;

								if(immune_to_ability == false && dodged == false)
								{
									found_good_target = true;

									$.each(ability['effect'], function(effect_key,effect){

										immune_to_ability = false;
										$.each(effect['types'], function(type_key,type){
											$.each(target_side[current_target]['immune'], function(immune_key,immune){
												if(type == immune)
												{
													immune_to_ability = true;
													generate_smash_fct('' + target_string + '_' + current_target, 'immune');
												}
											});
										});

										if(immune_to_ability == false)
										{

											var fct_factor = 1;
											if(effect['attribute'] == 'last_result_amount')
											{
												var ability_effect = (last_result_amount * effect['factor']);
												var buffless_ability_effect = (last_result_amount * effect['factor']);
											}
											else
											{
												var ability_effect = ((((Math.random() * get_attribute(key, side,effect['attribute'])) + get_attribute(key, side,effect['attribute'])) * effect['factor']) / 2);
												var buffless_ability_effect = ((((Math.random() * unit[effect['attribute']]) + unit[effect['attribute']]) * effect['factor']) / 2);
											}

											if(spell_effect_factor != undefined)
											{
												ability_effect *= spell_effect_factor;
												buffless_ability_effect *= spell_effect_factor;
											}


											if(target_side[current_target] !== undefined)
											{
												$.each(target_side[current_target]['vulnerable'], function(vulnerable_key,vulnerability){
													if(typeof(effect['bonus_type']) !== 'undefined' && effect['bonus_type'] == vulnerability)
													{
														ability_effect *= effect['bonus_factor'];
														buffless_ability_effect *= effect['bonus_factor']
														fct_factor += 1;
													}
												});
												$.each(abilities['types'], function(type_key,type){
													$.each(target_side[current_target]['vulnerable'], function(vulnerable_key,vulnerability){
														if(type == vulnerability)
														{
															ability_effect *= 2;
															buffless_ability_effect *= 2;
															fct_factor += 1;
														}
													});
												});
											}

											if(effect['attribute'] == 'fixed')
											{
												ability_effect = effect['factor'];
												buffless_ability_effect = effect['factor'];
											}

											var level_factor = get_level_factor(unit['level']);

											damage_done = 0;

											if(effect['type'] == 'physical_damage' && immune_to_ability == false)
											{
												damage_done = receive_damage(target_side, target_string, current_target, ability_effect, 'physical', effect['fct_color'], effect['fct_size'] * fct_factor, immune_to_ability);
												unit['aggro'] += damage_done;
											}
											if(effect['type'] == 'magical_damage' && immune_to_ability == false)
											{
												damage_done = receive_damage(target_side, target_string, current_target, ability_effect, 'magical', effect['fct_color'], effect['fct_size'] * fct_factor, immune_to_ability);
												unit['aggro'] += damage_done;
											}
											if(effect['type'] == 'piercing_damage' && immune_to_ability == false)
											{
												damage_done = receive_damage(target_side, target_string, current_target, ability_effect, 'piercing', effect['fct_color'], effect['fct_size'] * fct_factor, immune_to_ability);
												unit['aggro'] += damage_done;
											}
											if(effect['type'] == 'percentage_damage' && immune_to_ability == false)
											{
												ability_effect = round_by_percent(get_attribute(current_target, target_string,'current_hp') * effect['factor'] / 100);
												damage_done = receive_damage(target_side, target_string, current_target, ability_effect, 'piercing', effect['fct_color'], effect['fct_size'] * fct_factor, immune_to_ability);
												unit['aggro'] += damage_done;
											}
											if(effect['type'] == 'physical_drain' && immune_to_ability == false)
											{
												damage_done = receive_damage(target_side, target_string, current_target, ability_effect, 'physical', effect['fct_color'], effect['fct_size'], immune_to_ability);
												receive_healing(side_object, current_string, key, damage_done, effect['fct_color'], effect['fct_size']);
												unit['aggro'] += damage_done;
											}
											if(effect['type'] == 'magical_drain' && immune_to_ability == false)
											{
												damage_done = receive_damage(target_side, target_string, current_target, ability_effect, 'magical', effect['fct_color'], effect['fct_size'], immune_to_ability);
												receive_healing(side_object, current_string, key, damage_done, effect['fct_color'], effect['fct_size']);
												unit['aggro'] += damage_done;
											}
											if(damage_done > 0)
											{
												$.each(current_buffs, function(buff_key,buff){
													if(buff['target_id'] == key && buff['removed_on'] !== undefined && buff['removed_on'] == 'deal_damage')
													{
														remove_buff(buff['buff_group_key']);
													}
												});
											}
											if(effect['type'] == 'aggro' && immune_to_ability == false)
											{
												generate_fct('' + target_string + '_' + current_target, ability['name'], effect['fct_color'], effect['fct_size']);
												target_side[current_target]['aggro'] += ability_effect;
												if(target_side[current_target]['aggro'] < 10){target_side[current_target]['aggro'] = 10;}
											}
											if(effect['type'] == 'increase_stat' && immune_to_ability == false)
											{
												var attribute_count = count_object(effect['buff_attribute']);
												for (attribute_number = 0; attribute_number < attribute_count; attribute_number++) {
													target_side[current_target][effect['buff_attribute'][attribute_number]] += round_by_percent(ability_effect);
												}
												generate_fct('' + target_string + '_' + current_target, ability['name'], effect['fct_color'], effect['fct_size']);
												check_hp(target_side, target_string, current_target);
												unit['aggro'] += ability_effect;
											}
											if(effect['type'] == 'buff' && immune_to_ability == false && ability_effect != 0 && target_side[current_target] !== undefined && target_side[current_target]['current_hp'] > 0)
											{
												var attribute_count = count_object(effect['buff_attribute']);
												if(effect['delay'] == undefined)
												{
													effect['delay'] = effect['time'];
												}
												if(target_string == 'ally')
												{
													var target_buffs = current_allies_buffs;
												}
												else
												{
													var target_buffs = current_enemies_buffs;
												}
												buff_group_key ++;

												for (attribute_number = 0; attribute_number < attribute_count; attribute_number++) {
													var new_key = 0;
													if(typeof(effect['time']) == 'undefined')
													{
														effect['time'] = 0;
													}
													var buff_duration = effect['duration'];
													if(buff_duration == 0)
														{buff_duration = 10000000000000000000;}

													new_key = get_highest_key_in_object(target_buffs) + 1;
													var buff_amount = ability_effect;
													var target_buff = target_string + '_' + current_target + ' .buff_' + effect['buff_attribute'][attribute_number];
													if(attribute_number == 0)
													{
														var buff_name = effect['buff_name'];
													}
													else
													{
														var buff_name = undefined;
													}

													target_buffs[new_key] = {buff_group_key:buff_group_key,target_id: current_target, attribute: effect['buff_attribute'][attribute_number], amount: buff_amount, duration:buff_duration, time: effect['time'], current_time: effect['delay'],fct_color: effect['fct_color'],buff_name:buff_name,buff_type:effect['buff_type'],removed_on:effect['removed_on'],buff_image:effect['buff_image'], removable:effect['buff_removeable']};											

													if(effect['buff_attribute'][attribute_number] !== 'aggro')
													{
														if(effect['duration'] > 0)
														{
															var aggro_produced = Math.ceil(buff_amount * (effect['duration'] / 10));
															if(buff_amount <= 0)
															{
																aggro_produced *= -1;
															}
														}
														else
														{
															var aggro_produced = unit['level'];
														}
														
														unit['aggro'] += aggro_produced;
													}
												}

												if(effect['buff_image'] !== undefined && effect['buff_name'] !== undefined && effect['buff_type'] !== undefined)
												{
													parse_buff_image(target_string + '_' + current_target, effect['buff_image'], effect['buff_name'], effect['buff_type']);
												}

												//generate_fct('' + target_string + '_' + current_target, ability['name'], effect['fct_color'], effect['fct_size']);
												check_hp(target_side, target_string, current_target);
											}
											if(effect['type'] == 'remove_buff' && immune_to_ability == false)
											{
												var buffs_removed = false;
												var buff_amount = round_by_percent(ability_effect);
												if(effect['factor'] == 'all')
												{
													buff_amount = 1000000000000000;
												}
												if(target_string == 'ally')
												{
													var target_buffs = current_allies_buffs;
												}
												else
												{
													var target_buffs = current_enemies_buffs;
												}
												$.each(target_buffs, function(buff_key,buff){
													if(buff['target_id'] == current_target && (buff['removable'] == undefined || buff['removable'] == true))
													{
														$.each(effect['buff_attribute'], function(remove_buff_key,to_be_removed_buff){
															if(buff['buff_name'] == to_be_removed_buff || buff['buff_type'] == to_be_removed_buff)
															{
																//buff['duration'] = 0;
																/*reduce_buff_image(target_string + '_' + buff['target_id'], buff['buff_name']);
																target_buffs[buff_key] = {};*/
																remove_buff(buff['buff_group_key']);
																//check_hp(side, target_string, buff['target_id']);
																buff_amount -= 1;
																buffs_removed = true;
															}
														});
													}
													if(buff_amount < 1)
													{
														return false;
													}
												});

												if(buffs_removed == true)
												{
													generate_fct('' + target_string + '_' + current_target, ability['name'], effect['fct_color'], effect['fct_size']);
												}
												
											}
											if(effect['type'] == 'steal_buff' && immune_to_ability == false)
											{
												if(move_buffs(target_string, current_target, target_side_buffs, current_string, key, current_buffs, ability_effect, effect['buff_type']) == true)
												{
													generate_fct('' + target_string + '_' + current_target, ability['name'], effect['fct_color'], effect['fct_size']);
												}
											}
											if(effect['type'] == 'give_buff' && immune_to_ability == false)
											{
												if(move_buffs(current_string, key, current_buffs, target_string, current_target, target_side_buffs, ability_effect, effect['buff_type']) == true)
												{
													generate_fct('' + target_string + '_' + current_target, ability['name'], effect['fct_color'], effect['fct_size']);
												}
											}
											if(effect['type'] == 'healing' && immune_to_ability == false)
											{
												receive_healing(target_side, target_string, current_target, ability_effect, effect['fct_color'], effect['fct_size']);
												last_result_amount = ability_effect
												unit['aggro'] += (ability_effect / 2);						
											}
											if(effect['type'] == 'resurrect' && immune_to_ability == false)
											{
												parse_unit(7, current_target, target_string, target_side, Math.ceil(unit['level'] * effect['factor']), true);
												unit['aggro'] += Math.ceil(unit['level'] * effect['factor']);
											}
											if(effect['type'] == 'summon')
											{
												if(unit['unit_id'] == 'player'){unit['level'] = average_equiped_level;}
												var unit_to_summon = (effect['attribute']);
												if(typeof(unit_to_summon) == 'object'){
													var total_summon_chance = 0;
													$.each(unit_to_summon, function(to_summon_key, summon_chance){
														total_summon_chance += summon_chance;
													});
													var chosen_summon_unit = Math.random() * total_summon_chance;
													$.each(unit_to_summon, function(to_summon_key, summon_chance){
														chosen_summon_unit -= summon_chance;
														if(chosen_summon_unit <= 0){
															unit_to_summon = to_summon_key;
															return false;
														}
													});
												}

												parse_unit(unit_to_summon, current_target, target_string, target_side, Math.ceil(unit['level'] * effect['factor']), true);
												unit['aggro'] += Math.ceil(unit['level'] * effect['factor']);
											}
											if(effect['type'] == 'clone' && unit['current_hp'] > 0)
											{
												clone_unit(key,side_object,current_target, target_string, target_side, Math.ceil(unit['level'] * effect['factor']), target_side_buffs);
												unit['aggro'] += Math.ceil(unit['level'] * effect['factor']);
											}
											if(effect['type'] == 'swap_location' && unit['current_hp'] > 0)
											{
												swap_location(key,side_object,current_target, target_string, target_side);
												unit['aggro'] += Math.ceil(unit['level'] * effect['factor']);
											}
											if(effect['type'] == 'remove_unit')
											{
												remove_unit(current_target, target_string, target_side, target_side_buffs);
												unit['aggro'] += unit['level'];
											}
										}
									});
								}
								
							},ability_delay);

							if(ability['ability_delay'] != undefined)
							{
								ability_delay += ability['ability_delay'] * 1000;
							}
						}
					}

				});
			}
			first_target = false;
			//console.log(abilities);
		});
	}
	if(targets_found > 0)
	{
		/*var cooldown_penalty = 1;
		if(unit['level'] > 1)
		{
			//level_factor = Math.sqrt(1 + ((unit['level'] -1) / 10));
			cooldown_penalty = (1 + ((unit['level'] -1) / 20));
		}
		abilities['current_cooldown'] += (abilities['cooldown'] * cooldown_penalty);
		*/
		if(abilities['current_cooldown'] != undefined)
		{
			abilities['current_cooldown'] += abilities['cooldown'];
			//console.log(unit['name'] + ' : ' + abilities['name'] + ' ' + abilities['current_cooldown'] + ' += ' + abilities['cooldown']);
		}

		$.each(current_buffs, function(buff_key,buff){
			if(buff['target_id'] == key && buff['removed_on'] !== undefined && buff['removed_on'] == 'skill_use')
			{
				remove_buff(buff['buff_group_key']);
			}
		});
		
		return true;
		
	}
	else
	{
		return false;
	}


}

function generate_fct(unit_id, text, color, size){
	if(size > 0)
	{
		if(Math.floor((Math.random() * 2) + 1) == 1)
		{
			var position = 'left';
		}
		else
		{
			var position = 'right';
		}
		var pos_x = Math.floor((Math.random() * 66) + 1);
		var pos_y = Math.floor((Math.random() * 36) + 10);
		var font_size = 20 * size;
		$('.' + unit_id).append('<div id="fct_' + fct_counter + '" class="fct" style="color:' + color +';' + position + ': ' + pos_x + 'px;top:' + pos_y + 'px;font-size:' + font_size + 'px">' + text + '</div>');
		var current_fct_id = '#fct_' + fct_counter;
		setTimeout(function(){
			$(current_fct_id).remove();
		},6000);
		fct_counter += 1;
	}
}

function generate_smash_fct(unit_id, text){

	var deg = Math.round((Math.random() * 15) - 15);
	if(Math.floor((Math.random() * 2) + 1) == 1)
		{
			var position = 'left';
		}
		else
		{
			var position = 'right';
		}
	var pos_x = Math.floor((Math.random() * 66) + 1);
	$('.' + unit_id).append('<div id="fct_' + fct_counter + '" class="smash_fct" style="transform:rotate(' + deg + 'deg);' + position + ': ' + pos_x + 'px;">' + text + '</div>');
	var current_fct_id = '#fct_' + fct_counter;
	setTimeout(function(){
		$(current_fct_id).remove();
	},3000);
	fct_counter += 1;
	
}

function generate_ability_fct(unit_id, text, color, size){
	if(Math.floor((Math.random() * 2) + 1) == 1)
	{
		var position = 'left';
	}
	else
	{
		var position = 'right';
	}
	var pos_x = Math.floor((Math.random() * 66) + 1);
	var font_size = 20 * size;
	$('.' + unit_id).append('<div id="fct_' + fct_counter + '" class="fct" style="color:' + color +';' + position + ': ' + pos_x + 'px;bottom:25px;font-size:' + font_size + 'px">' + text + '</div>');
	var current_fct_id = '#fct_' + fct_counter;
	setTimeout(function(){
		$(current_fct_id).remove();
	},3000);
	fct_counter += 1;
}

function gain_item(item_id, amount, pos_x, pos_y){
	if(typeof(amount) == 'undefined'){amount = 1;}
	var can_gain = true;
	if(typeof(available_items[item_id]['max_loot']) != 'undefined' && available_items[item_id]['max_loot'] < amount)
	{
		amount = available_items[item_id]['max_loot'];
	}
	if(available_items[item_id]['subtype'] == 'quest')
	{
		var can_gain = false;
		$.each(possible_quests, function(quest_id, quest) {
			if(typeof(gamedata['quest_progress'][quest_id]) != 'undefined' && gamedata['quest_progress'][quest_id]['status'] >= 0)
			{
				$.each(quest['requirements']['items'], function(key, max_amount) {
					if(item_id == key && gamedata['inventory'][key] < max_amount)
					{
						can_gain = true;
						if((max_amount - gamedata['inventory'][key]) < amount)
						{
							amount = max_amount - gamedata['inventory'][key];
						}
					}
				});
			}
		});
	}	
	if(amount > 0 && can_gain == true)
	{
		check_quests('items', item_id, amount);
		if(typeof(gamedata['inventory'][item_id]) == 'undefined')
		{
			gamedata['inventory'][item_id] = amount;
			gamedata['inventory'] = sortObj(gamedata['inventory']);
		}
		else
		{
			gamedata['inventory'][item_id] += amount;
		}

		var current_loot_id = '#loot_' + loot_counter;
		if(typeof(pos_x) == 'undefined' || typeof(pos_y) == 'undefined')
		{
			var random_x = (Math.random() * 60) + 1;
			var random_y = ((loot_counter - ((Math.floor(loot_counter / 5)) * 5)) * 80) + 1;
			//var random_y = Math.random() * 300 + 1;
			$('.main_window').append('<div id="loot_' + loot_counter + '" class="loot ' + available_items[item_id]['subtype'] + ' quality_' + available_items[item_id]['quality'] + '" style="background-image:url(images/items/' + available_items[item_id]['image'] + ');margin-right:' + random_x + 'px;margin-top:' + random_y + 'px">' + amount + '</div>')
		}
		else
		{
			var random_x = (Math.random() * 80) - 40;
			var random_y = (Math.random() * 80) - 40;
			$('.main_window').append('<div id="loot_' + loot_counter + '" class="dropped_loot ' + available_items[item_id]['subtype'] + ' quality_' + available_items[item_id]['quality'] + '" style="background-image:url(images/items/' + available_items[item_id]['image'] + ');left:' + pos_x + 'px;top:' + pos_y + 'px">' + amount + '</div>')
			setTimeout(function(){
				$(current_loot_id).css('left', (pos_x + random_x) + 'px');
				$(current_loot_id).css('top', (pos_y + random_y) + 'px');
			},1);
			
		}
		
		setTimeout(function(){
			$(current_loot_id).remove();
		},2900);
		loot_counter++;
		
		update_achievement('items', item_id, amount);
		
		
		show_inventory();
		show_crafting();
	}
}

function learn_recipe(item_id, amount, pos_x, pos_y){
	if(typeof(amount) == 'undefined'){amount = 1;}
	var can_gain = true;
	if(typeof(gamedata['known_recipes'][item_id]) == 'undefined' && recipes[item_id] != undefined)
	{
		gamedata['known_recipes'][item_id] = true;
		show_quest_message('<b>New recipe found!</b><br/>' + recipes[item_id]['name'], true);
		saveToLocalStorage();
	}
}

function unit_death(side_string, unit_id){
	var unit_to_deactivate = unit_id;
	
	if($('.' + side_string + '_' + unit_id).hasClass('dead') == false)
	{
		
		$('.' + side_string + '_' + unit_id).addClass('dead');
		$('.' + side_string + '_' + unit_id + ' .shield').removeClass('active');
		$('.' + side_string + '_' + unit_id + ' .frozen').removeClass('active');
		clear_buff_single(side_string + '_' + unit_id, side_string, unit_id);

		sound_counter++;
		audio[sound_counter] = new Audio('sounds/177451__andromadax24__s-pain-slith-13.wav');
		audio[sound_counter].volume = 0.2 * master_volume;
		audio[sound_counter].play();

		if(side_string == 'enemy')
		{
			var unit_group = current_enemies;
			var other_group = current_allies;
			var other_side_string = 'ally';
			var unit = copyobject(current_enemies[unit_id]);
		}
		else
		{
			var unit_group = current_allies;
			var other_group = current_enemies;
			var other_side_string = 'enemy';
		}
		unit_group[unit_id]['aggro'] = 0;

		$.each(unit_group, function(ukey, ally_unit) {
			$.each(ally_unit['active_abilities'], function(akey, ability) {
				if(ability['current_cooldown'] <= 0 && (ability['proc'] == 'ally_death' || ability['proc'] == 'any_death')){
					ability['current_cooldown'] = 0;
					process_ability(ukey, ally_unit, side_string, unit_group, akey, ability);
				}
			});
		});

		$.each(other_group, function(ukey, enemy_unit) {
			$.each(enemy_unit['active_abilities'], function(akey, ability) {
				if(ability['current_cooldown'] <= 0 && (ability['proc'] == 'enemy_death' || ability['proc'] == 'any_death')){
					ability['current_cooldown'] = 0;
					process_ability(ukey, enemy_unit, other_side_string, other_group, akey, ability);
				}
			});
		});
		
		if(current_acting_unit['key'] != undefined)
		{
			$.each(current_acting_unit['unit']['active_abilities'], function(akey, ability) {
				if(ability['current_cooldown'] <= 0 && ability['proc'] == 'kill'){
					ability['current_cooldown'] = 0;
					process_ability(current_acting_unit['key'], current_acting_unit['unit'], current_acting_unit['string'], current_acting_unit['group'], akey, ability);
				}
			});
		}

		$.each(unit_group[unit_id]['active_abilities'], function(akey, ability) {
			if(ability['proc'] == 'death'){
				process_ability(unit_id, unit_group[unit_id], side_string, unit_group, akey, ability);
			}
		});

		if(side_string == 'enemy')
		{
			if(unit['xp_factor'] == undefined || unit['xp_factor'] > 0)
			{
				$.each(current_allies, function(ally_key, ally){
					if(ally['summoned'] != true && ally['current_hp'] > 0 && ally['unique_id'] != undefined)
					{
						var xp_factor = 1;
						if(unit['xp_factor'] != undefined){xp_factor = unit['xp_factor'];}
						var xp_gained = round_by_percent((1 + unit['level']/ 10) * unit['level'] * xp_factor * 10);
						if(xp_gained > 0)
						{
							gamedata['units'][ally['unique_id']]['xp'] += xp_gained;
							generate_fct('ally_' + ally['slot_id'], nFormatter(xp_gained,0) + ' xp', '#ff0', 1);
							check_unit_level(ally['unique_id']);
							$('.ally_' + ally['slot_id'] + ' .xp_bar').css('height', unit_xp_percentage(ally['unique_id']) + '%');
						}
							
					}
				});
			}

			update_achievement('kills', current_enemies[unit_id]['unit_id'], 1);

			if(unit['summoned'] != true){
				unit_group[unit_id]['summoned'] = true;
				
				var pos = $('.' + side_string + '_' + unit_id).offset();
				var main_pos = $('.main_window').offset();
				
				var loot_x = pos.left - main_pos.left + ($('.' + side_string + '_' + unit_id).width() / 2);
				var loot_y = pos.top - main_pos.top + ($('.' + side_string + '_' + unit_id).height() / 2);
				if(typeof(unit['loot']) != 'undefined')
				{
					$.each(unit['loot'], function(lkey, loot_id) {
						if(Math.random() > 0.5)
						{
							if((unit['level'] * 10) > available_items[loot_id]['rarity'])
							{
								var max_value = (unit['level'] * 10);
								var value_found = Math.floor(Math.random() * max_value) + 1;
								var items_found = Math.floor(value_found / available_items[loot_id]['rarity']);
							}
							else
							{
								if(Math.random() < (unit['level'] * 10) / available_items[loot_id]['rarity'])
								{
									var items_found = 1;
								}
								else
								{
									var items_found = 0;
								}
							}
							if(items_found > 0)
							{
								
								gain_item(loot_id,items_found,loot_x,loot_y);
							}
						}
					});
				}
				var loot_delay = 0;
				if(typeof(unit['loot_items']) != 'undefined')
				{
					$.each(unit['loot_items'], function(item_id, loot) {
						{
							if((Math.random() * 100) < loot['chance'])
							{
								var dropped_amount = round_by_percent(Math.random() * ((loot['max'] * unit['level']) - (loot['min'] * unit['level']))) + (loot['min'] * unit['level']);
								setTimeout(function(){
									gain_item(item_id,dropped_amount,loot_x,loot_y);
								},loot_delay);
								loot_delay += 250;
							}
						}
					});
				}
				if(typeof(unit['loot_gear']) != 'undefined')
				{
					$.each(unit['loot_gear'], function(item_id, loot) {
						{
							if((Math.random() * 100) < loot['chance'])
							{
								var dropped_amount = Math.ceil(Math.random() * (unit['level'] * loot['max'] - unit['level'] * loot['min'])) + unit['level'] * loot['min'];
								gain_gear(item_id,dropped_amount,loot['subtypes'],loot_x,loot_y);
							}
						}
					});
				}
				if(typeof(unit['loot_units']) != 'undefined')
				{
					$.each(unit['loot_units'], function(unit_id, loot) {
						{
							if((Math.random() * 100) < loot['chance'])
							{
								var dropped_amount = Math.floor(Math.random() * (loot['max'] - loot['min'])) + loot['min'];
								for (var i = dropped_amount - 1; i >= 0; i--) {
									addunit(unit_id, 1, 0);
								};
								
								//addunit_of_level(unit_id,dropped_amount,0);
							}
						}
					});
				}
				if(typeof(unit['loot_spells']) != 'undefined')
				{
					$.each(unit['loot_spells'], function(spell_id, loot) {
						{
							if((Math.random() * 100) < loot['chance'])
							{
								var dropped_amount = Math.floor(Math.random() * (loot['max'] - loot['min'])) + loot['min'];
								gain_spell_of_level(spell_id,dropped_amount);
							}
						}
					});
				}
				if(typeof(unit['loot_recipes']) != 'undefined')
				{
					$.each(unit['loot_recipes'], function(item_id, loot) {
						{
							if((Math.random() * 100) < loot['chance'])
							{
								var dropped_amount = 1;
								learn_recipe(item_id,dropped_amount,loot_x,loot_y);
							}
						}
					});
				}
				
				/*if(typeof(unit['items']) != 'undefined')
				{
					$.each(unit['items'], function(lkey, loot_id) {
						if(Math.random() < (unit['level']) / available_gear[loot_id]['value'])
						{
							var items_found = 1;
						}
						else
						{
							var items_found = 0;
						}
						if(items_found > 0)
						{
							gain_gear(loot_id,items_found);
						}
					});
				}*/
				/*var loot_count = count_object(unit['loot']);
				for (loot_number = 0; loot_number < loot_count; loot_number++) {
					var drop_chance = 100 / (Math.sqrt(available_items[unit['loot'][loot_number]]['rarity']));
					if((Math.random() * 100) < drop_chance)
					{
						gain_item(unit['loot'][loot_number],1);
					}
				};*/
				
				
			}

			check_quests('kills', unit['type'], 1);
		}

		if(side_string == 'enemy')
		{
			var unit = current_enemies[unit_id];
		}
		else
		{
			var unit = current_allies[unit_id];
		}

		if(unit['leave_corpse'] !== undefined && unit['leave_corpse'] == false){
			$('.' + side_string + '_' + unit_id).removeClass('dead');
			$('.' + side_string + '_' + unit_id).removeClass('active');
			delete unit_group[unit_id];
		}	

		if(player_target['side'] == side_string && player_target['id'] == unit_id)
		{
			find_new_player_target();
		}	
	}
}

function find_new_player_target(){
	var temp_targets = {};
	$.each(current_enemies, function(id,info){
		temp_targets[id] = info;
	})

	if(player_target['side'] == 'enemy')
	{
		delete temp_targets[player_target['id']];
	}
	var new_player_target = find_target_from_group(find_target_alive(temp_targets), 1, true, true, undefined, 'enemy',undefined,undefined,undefined);
	//console.log(new_player_target[0]['slot_id']);
	if(new_player_target[0] != undefined)
	{
		set_player_target('enemy',new_player_target[0]['slot_id']);
		//console.log(new_player_target[0]['slot_id']);
	}

}

function unit_alive(side_string, unit_id){
	var unit_to_deactivate = unit_id;
	
	if($('.' + side_string + '_' + unit_id).hasClass('dead') == true)
	{
		$('.' + side_string + '_' + unit_id).removeClass('dead');		
	}
}

function parse_unit(unit_id, slot_id, target_string, target_side, unit_level, summoned, unique_id){

	/*if(target_string == 'ally')
	{
		$.each(current_allies_buffs, function(buff_key,buff){
			if(buff['target_id'] == slot_id)
			{
				current_allies_buffs[buff_key] = {};
			}
		});
	}
	else
	{
		$.each(current_enemies_buffs, function(buff_key,buff){
			if(buff['target_id'] == slot_id)
			{
				current_enemies_buffs[buff_key] = {};
			}
		});
	}*/

	var unit_type = copyobject(available_mobs[unit_id]);

	var level_factor = get_level_factor(unit_level);
	

	unit_type['unit_id'] = unit_id;
	if(typeof(unit_type['aggro']) == 'undefined')
	{
		unit_type['aggro'] = 10;
	}
	if(typeof(unit_type['aggro_factor']) == 'undefined')
	{
		unit_type['aggro_factor'] = 1;
	}
	unit_type['unique_id'] = unique_id;
	unit_type['aggro'] += Math.floor(Math.random() * unit_type['aggro']);
	unit_type['slot_id'] = slot_id;
	unit_type['level'] = unit_level;
	unit_type['strength'] = Math.floor(unit_type['strength'] * level_factor);
	unit_type['intellect'] = Math.floor(unit_type['intellect'] * level_factor);
	unit_type['speed'] = Math.floor(unit_type['speed'] * level_factor);
	unit_type['defense'] = Math.floor(unit_type['defense'] * level_factor);
	unit_type['shield'] = Math.floor(unit_type['shield'] * level_factor);
	unit_type['max_hp'] = Math.floor(unit_type['max_hp'] * level_factor * level_factor);
	unit_type['summoned'] = summoned;
	unit_type['side'] = target_string;

	/*if(slot_id < 4)
	{
		unit_type['aggro_factor'] *= 2;
	}
	if(slot_id > 6)
	{
		unit_type['aggro_factor'] *= 0.5;
	}*/

	unit_type['current_hp'] = unit_type['max_hp'];

	var ability_count = count_object(unit_type['abilities']);
	unit_type['active_abilities'] = {};
	for (ability_number = 0; ability_number < ability_count; ability_number++) {
		unit_type['active_abilities'][ability_number] = copyobject(unit_abilities[unit_type['abilities'][ability_number]]);
		//var current_cooldown = ((Math.random() * unit_type['active_abilities'][ability_number]['cooldown']) / 2) + (unit_type['active_abilities'][ability_number]['cooldown'] / 2);
		var current_cooldown = (Math.random() * unit_type['active_abilities'][ability_number]['cooldown']);
		unit_type['active_abilities'][ability_number]['id'] = unit_type['abilities'][ability_number];
		unit_type['active_abilities'][ability_number]['current_cooldown'] = current_cooldown;

	}


	$('.' + target_string + '_' + slot_id + ' .unit_level').html(unit_level);
	$('.' + target_string + '_' + slot_id + ' .unit_name').html(unit_type['name']);
	$('.' + target_string + '_' + slot_id).removeClass('dead');
	$('.' + target_string + '_' + slot_id).addClass('active');
	$('.' + target_string + '_' + slot_id).css('background-image','url(images/units/' + unit_type['image'] + ')');
	$('.' + target_string + '_' + slot_id + ' .hp_bar').css('width', '100%');
	if(target_string == 'ally' && summoned != true)
	{
		$('.' + target_string + '_' + slot_id + ' .xp_bar').css('opacity', 1);
		$('.' + target_string + '_' + slot_id + ' .xp_bar').css('height', unit_xp_percentage(unique_id) + '%');
	}
	else
	{
		$('.' + target_string + '_' + slot_id + ' .xp_bar').css('opacity', 0);
	}

	target_side[slot_id] = unit_type;
	set_shield(target_side, slot_id, target_string);
};

function parse_player(){

	var unit_type = copyobject(player);

	unit_type['unit_id'] = 'player';
	unit_type['aggro'] = get_player_attribute('aggro');
	unit_type['aggro_factor'] = get_player_attribute('aggro_factor');
	unit_type['aggro'] += Math.floor(Math.random() * unit_type['aggro']);
	unit_type['slot_id'] = 7;
	unit_type['level'] = 1;
	unit_type['vulnerable'] = ['caster'];
	unit_type['strength'] = get_player_attribute('strength');
	unit_type['intellect'] = get_player_attribute('intellect');
	unit_type['speed'] = get_player_attribute('speed');
	unit_type['defense'] = get_player_attribute('defense');
	unit_type['shield'] = get_player_attribute('shield');
	unit_type['max_hp'] = get_player_attribute('max_hp');
	unit_type['regeneration'] = get_player_attribute('regeneration');
	unit_type['summoned'] = true;
	unit_type['side'] = 'ally';

	unit_type['current_hp'] = unit_type['max_hp'];

	unit_type['active_abilities'] = {};
	var current_ability_number = 0;

	$.each(gamedata['spells'], function(key, spell){
		if(spell['active'] > 0 && unit_abilities[key]['proc'] != 'basic')
		{
			//console.log(spell);
			unit_type['active_abilities'][current_ability_number] = copyobject(unit_abilities[spell['id']]);
			var current_cooldown = (Math.random() * unit_abilities[spell['id']]['cooldown']);
			unit_type['active_abilities'][current_ability_number]['id'] = spell['id'];
			unit_type['active_abilities'][current_ability_number]['current_cooldown'] = current_cooldown;
			current_ability_number++;
		}
	});

	$('.ally_7').removeClass('dead');
	$('.ally_7').addClass('active');
	$('.ally_7 .hp_bar').css('width', '100%');

	current_allies[7] = unit_type;
	set_shield(current_allies, 7, 'ally');
};

function clone_unit(unit_id, side_object, slot_id, target_string, target_side, unit_level, target_side_buffs){
	var unit_type = copyobject(side_object[unit_id]);
	unit_type['summoned'] = true;
	var level_factor = get_level_factor(unit_level);

	/*if(slot_id < 4)
	{
		unit_type['aggro_factor'] *= 2;
	}
	if(slot_id > 6)
	{
		unit_type['aggro_factor'] *= 0.5;
	}*/


	//var ability_count = count_object(unit_type['abilities']);
	//unit_type['active_abilities'] = {};
	/*$.each(unit_type['active_abilities'],function(ability_key, ability_info){
		unit_type['active_abilities'][ability_key]['current_cooldown'] = (Math.random() * unit_type['active_abilities'][ability_key]['cooldown']);
	});*/

	delete unit_type['active_abilities'];
	for (ability_number = 0; ability_number < ability_count; ability_number++) {
		unit_type['active_abilities'][ability_number] = copyobject(unit_abilities[unit_type['abilities'][ability_number]]);
		//var current_cooldown = ((Math.random() * unit_type['active_abilities'][ability_number]['cooldown']) / 2) + (unit_type['active_abilities'][ability_number]['cooldown'] / 2);
		var current_cooldown = (Math.random() * unit_type['active_abilities'][ability_number]['cooldown']) + 0.1;
		unit_type['active_abilities'][ability_number]['id'] = unit_type['abilities'][ability_number];
		unit_type['active_abilities'][ability_number]['current_cooldown'] = current_cooldown;

	}

	$('.' + target_string + '_' + slot_id + ' .unit_level').html(unit_type['level']);
	$('.' + target_string + '_' + slot_id + ' .unit_name').html(unit_type['name']);
	$('.' + target_string + '_' + slot_id).removeClass('dead');
	$('.' + target_string + '_' + slot_id).addClass('active');
	$('.' + target_string + '_' + slot_id).css('background-image','url(images/units/' + unit_type['image'] + ')');
	$('.' + target_string + '_' + slot_id + ' .xp_bar').css('opacity', 0);
	
/*	$.each(target_side_buffs, function(buff_key, buff){
		if(buff['target_id'] == unit_id){
			new_key = get_highest_key_in_object(target_side_buffs) + 1;
			target_side_buffs[new_key] = buff;
		}
	});*/


	target_side[slot_id] = unit_type;
	check_hp(target_side, target_string, slot_id);
	set_shield(target_side, slot_id, target_string);
};

function swap_location(unit_id, side_object, slot_id, target_string){
	var temp_original_unit = copyobject(side_object[unit_id]);
	var temp_target_unit = copyobject(side_object[slot_id]);
	var temp_original_content = $('.' + target_string + '_' + unit_id).html();
	var temp_target_content = $('.' + target_string + '_' + slot_id).html();
	$('.' + target_string + '_' + unit_id).html(temp_target_content);
	$('.' + target_string + '_' + slot_id).html(temp_original_content);
	$('.' + target_string + '_' + unit_id + ' .fct').remove();
	$('.' + target_string + '_' + slot_id + ' .fct').remove();
	side_object[unit_id] = copyobject(temp_target_unit);
	side_object[slot_id] = copyobject(temp_original_unit);

	if(target_string == 'allies' || target_string == 'ally')
	{
		current_buffs = current_allies_buffs;
	}
	else
	{
		current_buffs = current_enemies_buffs;
	}

	$.each(current_buffs, function(key, buff) {
		if(buff['target_id'] == unit_id)
		{
			buff['target_id'] = slot_id;
		}
		else
		{
			if(buff['target_id'] == slot_id)
			{
				buff['target_id'] = unit_id;
			}
		}
	});

	
	

	check_unit_display(target_string, slot_id, side_object);
	check_unit_display(target_string, unit_id, side_object);
	/*for (var i = 1; i >= 10; i++) {
		check_unit_display(target_string, i, side_object);
	};*/

	if(side_object[slot_id]['name'] !== undefined)
	{
		check_hp(side_object, slot_id, target_string);
	}
	
	check_hp(side_object, unit_id, target_string);
};

function check_unit_display(target_string, slot_id, side_object){

	if(side_object[slot_id]['name'] !== undefined)
	{
		$('.' + target_string + '_' + slot_id + ' .unit_level').html(side_object[slot_id]['level']);
		$('.' + target_string + '_' + slot_id + ' .unit_name').html(side_object[slot_id]['name']);
		$('.' + target_string + '_' + slot_id).removeClass('dead');
		$('.' + target_string + '_' + slot_id).addClass('active');
		$('.' + target_string + '_' + slot_id).css('background-image','url(images/units/' + side_object[slot_id]['image'] + ')');
		if(side_object[slot_id]['summoned'] == true)
		{
			$('.' + target_string + '_' + slot_id + ' .xp_bar').css('opacity', 0);
		}
	}
	else
	{
		remove_unit(slot_id, target_string, side_object);
	}

};

function remove_unit(slot_id, target_string, target_side, target_side_buffs){
	delete target_side[slot_id];
	if(target_side_buffs !== undefined){
		$.each(target_side_buffs, function(buff_key, buff){
			if(buff['target_id'] == slot_id){
				delete target_side_buffs[buff_key];
			}
		});
	}
	$('.' + target_string + '_' + slot_id + ' .buff_image').remove();
	$('.' + target_string + '_' + slot_id).removeClass('active');
	$('.' + target_string + '_' + slot_id).removeClass('dead');
	$('.' + target_string + '_' + slot_id + ' .hp_bar').css('width','100%');
}

function set_shield(target_side, current_target, target_string){
	if(target_side[current_target]['shield'] > target_side[current_target]['max_hp'])
	{
		target_side[current_target]['shield'] = target_side[current_target]['max_hp'];
	}
	if(target_side[current_target]['shield'] > 0)
	{
		$('.' + target_string + '_' + current_target + ' .shield').addClass('active');
	}
	else
	{
		$('.' + target_string + '_' + current_target + ' .shield').removeClass('active');
	}
	$('.' + target_string + '_' + current_target + ' .shield').html(target_side[current_target]['shield']);
}

function get_attribute(unit_id, side_string, attribute){

	var current_buffs = {};
	var current_units = {};

	if(side_string == 'player')
	{
		unit_attribute = player[attribute];
	}
	else
	{

		if(side_string == 'allies' || side_string == 'ally')
		{
			current_buffs = current_allies_buffs;
			current_units = current_allies;
		}
		else
		{
			current_buffs = current_enemies_buffs;
			current_units = current_enemies;
		}

		if(typeof(current_units[unit_id]) !== 'undefined')
		{
			if(current_units[unit_id][attribute] == undefined)
			{
				current_units[unit_id][attribute] = 0;
				if(attribute == 'attack_speed')
				{
					current_units[unit_id][attribute] = 1;
				}
			}
			var unit_attribute = current_units[unit_id][attribute];

			$.each(current_buffs, function(key, buff) {
				if(buff['target_id'] == unit_id && buff['attribute'] == attribute && buff['duration'] > 0)
				{
					unit_attribute += buff['amount'];
				}
			});

			if(typeof(current_units[unit_id]['aggro_factor']) != 'undefined' && attribute == 'aggro')
			{
				unit_attribute *= get_attribute(unit_id, side_string, 'aggro_factor');				
			}
			/*if(attribute == 'aggro' && (current_units[unit_id]['slot_id'] == 1 || current_units[unit_id]['slot_id'] == 2 || current_units[unit_id]['slot_id'] == 3))
			{
				unit_attribute *= 1.5;
			}*/
			if(attribute == 'aggro' && current_units[unit_id]['slot_id'] > 5 && side_string !== 'allies' && side_string !== 'ally')
			{
				unit_attribute *= 0.5;
			}
		}
		else
		{
			//console.log('found undefined with target ' + unit_id + ' in ' + side_string + ' while looking for ' + attribute);
			var unit_attribute = 0;
		}

		/*if(unit_attribute < 0 && attribute != 'speed')
		{
			unit_attribute = 0;
		}*/

	}



	return unit_attribute;
}


