var current_battle_type = '';
var battle_info = {};
var total_timeout = 0;
var active_turn = 1;
var total_turn_counter = 0;
var combat_alive = false;
var difficulty_setting = 1;
var current_test_deck = 0;
var arena_deck = {};
var arena_deck_id = 0;
var arena_reward_amount = 0;
var current_arena_player_name = '';
var endless_waves = false;
var fight_number = 0;
var king_of_the_hill_streak = 0;
var enemy_card_back = '';
var arena_card_back = '';
var fixed_hero = false;
var next_random_hero = '';
var map_hero = '';
var battle_stats = {};
var endless_wave_count = 1;


function show_random_battle(){
	enemy_card_back = '';
	current_battle_type = 'random';
	show_content('battle');
}

function show_battle(){

	set_game_speed(false);
	if(battle_speed > 0.65)
	{
		$('.main_window').removeClass('game_speed_fast');
		$('.main_window').removeClass('game_speed_medium');
		$('.main_window').addClass('game_speed_slow');
	}
	if(battle_speed == 0.65)
	{
		$('.main_window').removeClass('game_speed_slow');
		$('.main_window').removeClass('game_speed_fast');
		$('.main_window').addClass('game_speed_medium');
	}
	if(battle_speed < 0.65)
	{
		$('.main_window').removeClass('game_speed_slow');
		$('.main_window').removeClass('game_speed_medium');
		$('.main_window').addClass('game_speed_fast');
	}

	if(endless_waves == false)
	{
		gamedata['battles_started']++;
	}
	saveToLocalStorage();
	clear_all_timeouts();
	fight_number += 1;
	if(gamedata['decks'][gamedata['current_deck']]['hero'] != undefined)
	{
		battle_info = {};
		battle_info.combat_units = {};
		battle_info['enemy_combat_boosts'] = {};
		battle_stats = {};
		$('.battle_container').html('');
		$('.projectile').remove();
		$('.battle_container').append('<div class="total_turn_counter_container">TURN: <span class="total_turn_counter"></span></div>');
		$('.resign_button').css('display','none');
		total_timeout = 0;
		total_turn_counter = 0;
		active_turn = Math.ceil(Math.random() * 2);
		$('.battle_container').append('<div class="turn_pointer turn_pointer_' + active_turn + '"></div>');
		combat_alive = true;

		//SET UP SLOT PLACEHOLDERS
		for (slot_side = 1; slot_side < 3; slot_side++) {
			for (slot_number = -5; slot_number < 6; slot_number++) {
				$('.battle_container').append('<div class="unit slot_container side_' + slot_side + ' slot_' + slot_number + '" onclick="show_unit_details(' + slot_side + ',' + slot_number + ')"></div>');
			}
		}
		
		//SET UP HEROES
		if(gamedata.decks[gamedata.current_deck].hero != undefined)
		{
			battle_info.combat_units[2] = create_hero(gamedata.decks[gamedata.current_deck].hero, 2);
			battle_info.combat_units[2]['color'] = ['green'];
			battle_info.combat_units[2]['slot'] = 0;
			battle_info.combat_units[2]['side'] = 2;
			battle_info.combat_units[2]['origin_side'] = 2;
			battle_info.combat_units[2]['unit_id'] = 2;
			battle_info.combat_units[2]['card_type'] = gamedata.decks[gamedata.current_deck].hero + '';
			battle_info.combat_units[2]['current_health'] = battle_info.combat_units[2]['health'];
			var parsed_hero = parse_combat_unit(battle_info.combat_units[2], undefined, undefined, true);
			$('.battle_container').append(parsed_hero);
		}
		if(current_battle_type == 'test_deck')
		{
			battle_info.combat_units[1] = create_hero(gamedata.decks[current_test_deck].hero);
			battle_info.combat_units[1]['slot'] = 0;
			battle_info.combat_units[1]['side'] = 1;
			battle_info.combat_units[1]['origin_side'] = 1;
			battle_info.combat_units[1]['unit_id'] = 1;
			battle_info.combat_units[1]['card_type'] = enemy_hero;
			battle_info.combat_units[1]['current_health'] = battle_info.combat_units[1]['health'];
			enemy_card_back = battle_info.combat_units[1]['image'] + '';
			var parsed_hero = parse_combat_unit(battle_info.combat_units[1], undefined, undefined, true);
			$('.battle_container').append(parsed_hero);
		}
		if(current_battle_type == 'summoned')
		{
			//console.log('setting up hero');
			if(endless_waves == false)
			{
				var enemy_hero = gamedata['current_summon']['hero'];
				difficulty_setting = gamedata['current_summon']['level'];
			}
			if(endless_waves == true)
			{
				var summon_stats = get_summon_stats();
				var chosen_summon = get_random_hero(true, summon_stats['min_rarity'], summon_stats['max_rarity'], summon_stats['common_reduction']);
				//console.log(chosen_summon);
				var enemy_hero = chosen_summon;
				//console.log(enemy_hero);
				difficulty_setting = ((endless_wave_count - 1) / get_upgrade_factor('wave_power_increase', 'any', true)) + get_upgrade_factor('wave_min_power', 'any', true);
			}
			battle_info.combat_units[1] = create_hero(enemy_hero, 1);
			battle_info.combat_units[1]['color'] = ['red'];
			battle_info.combat_units[1]['slot'] = 0;
			battle_info.combat_units[1]['side'] = 1;
			battle_info.combat_units[1]['origin_side'] = 1;
			battle_info.combat_units[1]['unit_id'] = 1;
			battle_info.combat_units[1]['card_type'] = enemy_hero;
			battle_info.combat_units[1]['current_health'] = battle_info.combat_units[1]['health'];
			var parsed_hero = parse_combat_unit(battle_info.combat_units[1], undefined, undefined, true);
			enemy_card_back = battle_info.combat_units[1]['image'] + '';
			$('.battle_container').append(parsed_hero);
		}

		//SET UP DECKS
		battle_info.deck_2 = {};
		var deck_card_counter = 0;
		$.each(gamedata.decks[gamedata.current_deck], function(card_id, amount){
			if(card_id != 'hero'){
				for(t = 0;t < amount; t++){
					battle_info.deck_2[deck_card_counter] = {
						card_id: 	card_id,
						status: 	'deck',
						time_left: 	all_available_cards[card_id]['time']
					}
					deck_card_counter++;
				};
			}
		});

		if(current_battle_type == 'summoned')
		{
			if(endless_waves == true || gamedata['current_summon']['deck'] == undefined)
			{
				var enemy_deck_size = 30 * get_effective_power_factor();
				if(enemy_deck_size > 30){enemy_deck_size = 30;}
				if(enemy_deck_size < 1){enemy_deck_size = 1;}
			    if(Math.random() > 1.5)
			    {
				    battle_info.deck_1 = construct_random_deck(enemy_deck_size, enemy_hero);
			    }
			    else
			    {
			        battle_info.deck_1 = construct_random_deck(enemy_deck_size, enemy_hero, true);
			    }
			    if(endless_waves == false)
			    {
			    	gamedata['current_summon']['deck'] = true_copyobject(battle_info.deck_1);
			    }
			}
			else
			{
				battle_info.deck_1 = true_copyobject(gamedata['current_summon']['deck']);
			}
		}

		update_deck_counts();
		check_visible_skills(1);
		check_visible_skills(2);

		total_timeout = 0;

		if(current_battle_type == 'summoned' || current_battle_type == 'king_of_the_hill')
		{
			show_vs();
		}
		
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			start_next_turn();
		},total_timeout);
		
	}
	else
	{
		show_content('home');
		$('.detail_overlay  .card_detail').html('<div class="big_text">You need to asign a hero<br/>to be able to fight a battle</div>');
		$('.detail_overlay').removeClass('hidden');
	}
}

function show_vs(){

	var parsed_vs = '';

	var enemy_subtext = '';
	if(endless_waves == true)
	{
		enemy_subtext += '<br/><span>Wave ' + endless_wave_count + ' (' + Math.floor(difficulty_setting * 10) + '%)</span>';
	}
	parsed_vs += '<div class="vs_container">';
	parsed_vs += '<div class="vs_player_image" style="background-image:url(images/' + battle_info['combat_units'][2]['image'] + ')"></div>';
	parsed_vs += '<div class="vs_enemy_image" style="background-image:url(images/' + battle_info['combat_units'][1]['image'] + ')"></div>';
	parsed_vs += '<div class="vs_player_name">' + capitalizeFirstLetter(battle_info['combat_units'][2]['name']) + '</div>';
	parsed_vs += '<div class="vs_enemy_name">' + capitalizeFirstLetter(battle_info['combat_units'][1]['name']) + enemy_subtext + '</div>';
	parsed_vs += '<div class="vs_vs">V&nbsp;<br/>&nbsp;S</div>';

	parsed_vs += '</div>';

	$('.main_window').append(parsed_vs);
	if(current_battle_type == 'king_of_the_hill')
	{
		$('.vs_enemy_name span').prepend('King ');
	}

	timeout_key ++;
	total_timeout += 100;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.vs_player_image').addClass('active');
		$('.vs_enemy_image').addClass('active');
	},total_timeout);

	timeout_key ++;
	total_timeout += 400;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.vs_player_name').addClass('active');
		//$('.vs_enemy_name').addClass('active');
	},total_timeout);

	timeout_key ++;
	total_timeout += 0;
	all_timeouts[timeout_key] = setTimeout(function(){
		//$('.vs_player_name').addClass('active');
		$('.vs_enemy_name').addClass('active');
	},total_timeout);

	timeout_key ++;
	total_timeout += 0;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.vs_vs').addClass('active');
	},total_timeout);
	total_timeout += 0;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.vs_vs').addClass('active2');
	},total_timeout);

	timeout_key ++;
	total_timeout += 2000;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.vs_container').addClass('faded');
	},total_timeout);

	timeout_key ++;
	total_timeout += 1000;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.vs_container').remove();
	},total_timeout);

	total_timeout -= 2500;
}

function convert_deck(deck){
	var enemy_hero = deck['hero'];
	var converted_hero = {};
	converted_hero = create_combat_unit(enemy_hero);
	converted_hero['slot'] = 0;
	converted_hero['side'] = 1;
	converted_hero['origin_side'] = 1;
	converted_hero['unit_id'] = 1;
	converted_hero['current_health'] = converted_hero['health'];

	var converted_deck = {};
	var deck_card_counter = 0;
	$.each(deck['deck'], function(card_id, amount){
		if(card_id != 'hero'){
			for(t = 0;t < amount; t++){
				converted_deck[deck_card_counter] = {
					card_id: 	card_id,
					status: 	'deck',
					time_left: 	all_available_cards[card_id]['time']
				}
				deck_card_counter++;
			};
		}
	});

	console.log(JSON.stringify(converted_hero));
	console.log('-------------');
	console.log(JSON.stringify(converted_deck));
}

function create_fake_hero(base_card){
	var fake_hero = {};
	var enemy_hero = get_random_hero();
	if(base_card != undefined)
	{
		enemy_hero = base_card;
	}
	fake_hero = create_hero(enemy_hero);
	fake_hero['slot'] = 0;
	fake_hero['side'] = 1;
	fake_hero['origin_side'] = 1;
	fake_hero['unit_id'] = 1;
	fake_hero['card_type'] = enemy_hero;
	fake_hero['current_health'] = fake_hero['health'];

	
	return fake_hero;
};

function construct_random_enemy_deck(base_card, size){
	
	if(base_card == undefined)
	{
		base_card = get_random_hero();
	}
	if(size == undefined)
	{
		size = 30;
	}
	var fake_hero = create_fake_hero(base_card);
	var fake_deck = construct_random_deck(size, base_card, true);

	console.log( JSON.stringify(fake_hero));
	console.log('-------------');
	console.log( JSON.stringify(fake_deck));
};

var random_deck_times = {
	basic:{
		percent_main: 		10,
	 	percent_slow: 		90,
	 	percent_massive: 	200,
	},
	fast:{
		percent_main: 		30,
	 	percent_slow: 		90,
	 	percent_massive: 	200,
	},
	slow:{
		percent_main: 		10,
	 	percent_slow: 		70,
	 	percent_massive: 	200,
	},
	cheap:{
		percent_main: 		55,
	 	percent_slow: 		90,
	 	percent_massive: 	200,
	},
	muscle:{
		percent_main: 		0,
	 	percent_slow: 		75,
	 	percent_massive: 	200,
	},
	cheap_only:{
		percent_main: 		90,
	 	percent_slow: 		90,
	 	percent_massive: 	200,
	}
}

function get_active_deck_speed(){
	var active_deck_speed = 0;
	var active_deck = gamedata['decks'][gamedata['current_deck']];
	var active_deck_card_count = count_object(active_deck) - 1;
	var total_card_times = 0;
	if(active_deck_card_count > 0){
		active_deck_card_count = 0;
		$.each(active_deck, function(card_id, card_count){
			if(card_id != 'hero' && all_available_cards[card_id] != undefined)
			{
				total_card_times += all_available_cards[card_id]['time'] * card_count;
				active_deck_card_count += card_count;
			}
		});
		active_deck_speed = total_card_times / active_deck_card_count;
	} 
	return active_deck_speed;
}

var show_deck_construction = false;

function construct_random_deck(size, hero, randomized){
	var max_time = 1000;
	var min_time = 0;
	var artifact_count = 0;
	var spell_count = 0;
	if(Math.random() > 0.5){max_time = Math.floor(Math.random() * 6) + 3;/*console.log('rushing: ' + max_time);*/}
	var random_deck = {};
	var hero_card_count = 0;
	var deck_color = all_available_cards[hero]['color'][0];
	var second_color = false;
	var not_these = [];
	var not_types = ['cardback'];
	if(all_available_cards[hero]['color'][1] != undefined)
	{
		second_color = all_available_cards[hero]['color'][1];
	}

	/*if(hero != undefined)
	{
		if(size > 20)
		{
			size -= 10;
		}
		else
		{
			size = Math.ceil(size / 2);
			hero_card_count = size;
		}
	}*/
	var deck_theme = false;
	if(all_available_cards[hero]['hero_version']['theme'] != undefined)
	{
		//deck_theme = all_available_cards[hero]['hero_version']['theme'][get_random_key_from_object(all_available_cards[hero]['hero_version']['theme'])];
		deck_theme = all_available_cards[hero]['hero_version']['theme'];
	}
	var card_id = get_random_card('any', max_time, deck_color, second_color, 0, deck_theme, not_these, not_types);
	var this_card_counter = 0;
	var deck_time_theme = get_random_key_from_object(random_deck_times);
	if(Math.random() < 0.5)
	{
		deck_time_theme = 'basic';
	}
	if(all_available_cards[hero]['hero_version']['time_theme'] != undefined && Math.random() < 0.9)
	{
		deck_time_theme = all_available_cards[hero]['hero_version']['time_theme'];
	}
	var active_deck_speed = get_active_deck_speed();
	if(Math.random() < 0.5){
		if(active_deck_speed > 0 && active_deck_speed < 2)
		{
			deck_time_theme = 'cheap';
		}
		if(active_deck_speed >= 2 && active_deck_speed < 4)
		{
			deck_time_theme = 'fast';
		}
		if(active_deck_speed >= 4 && active_deck_speed < 6)
		{
			deck_time_theme = 'basic';
		}
		if(active_deck_speed >= 6 && active_deck_speed < 8)
		{
			deck_time_theme = 'slow';
		}
		if(active_deck_speed >= 8)
		{
			deck_time_theme = 'muscle';
		}
	}
	var deck_times = random_deck_times[deck_time_theme];
	
	if(all_available_cards[hero]['hero_version']['deck_times'] != undefined)
	{
		$.each(all_available_cards[hero]['hero_version']['deck_times'], function(deck_time_type, deck_time_percent){
			deck_times[deck_time_type] = deck_time_percent;
		});
	}
	if(size < 30)
	{
		var deck_size_ratio = 30 / size;
		$.each(deck_times, function(deck_time_type, deck_time_percent){
			deck_times[deck_time_type] *= deck_size_ratio;
		});
	}
	for(t = 0;t < size; t++){
		var card_weight = 1;
		//if(all_available_cards[card_id]['pick_chance'] != undefined){card_weight = all_available_cards[card_id]['pick_chance'];}
		if(card_weight > 0)
		{
			this_card_counter += 1 / card_weight;
		}
		/*if(this_card_counter > 4)
		{
			var allready_not_these = false;
			$.each(not_these, function(not_these_key, not_these_id){
				if(not_these_id == card_id){allready_not_these == true;}
			});
			if(allready_not_these == false)
			{
				console.log('enough ' + card_id + ': ' + this_card_counter);
				not_these[get_highest_key_in_object[not_these] + 1] = card_id;
			}
		}*/
		var deck_percent = (t / size) * 100;
		//console.log(deck_percent);
		/*if(t <= (size / 2))
		{
			max_time = 7;
			min_time = 0;
		}
		if(t > (size / 2) && t <= (size / 6 * 5))
		{
			max_time = 12;
			min_time = 8;
		}
		if(t > (size / 6 * 5))
		{
			max_time = 100;
			min_time = 13;
		}*/
		min_time = 0;
		max_time = 4;
		if(deck_percent >= deck_times['percent_main'])
		{
			min_time = 5;
			max_time = 9;
		}
		if(deck_percent >= deck_times['percent_slow'])
		{
			min_time = 10;
			max_time = 150;
		}
		if(deck_percent >= deck_times['percent_massive'])
		{
			min_time = 16;
			max_time = 100;
		}
		if(second_color != undefined)
		{
			//console.log(second_color);
		}
		this_card_counter = 0;
		$.each(random_deck, function(useless_key, count_card_info){
			if(count_card_info['card_id'] == card_id)
			{
				this_card_counter += 1 / card_weight; 
			}
		});
		if(this_card_counter > 4 || (all_available_cards[card_id]['max_in_deck'] != undefined && this_card_counter >= all_available_cards[card_id]['max_in_deck']))
		{
			var allready_not_these = false;
			$.each(not_these, function(not_these_key, not_these_id){
				if(not_these_id == card_id){allready_not_these = true;}
			});
			if(allready_not_these == false)
			{
				//console.log('enough ' + card_id + ': ' + this_card_counter);
				not_these[get_highest_key_in_object(not_these) + 1] = card_id;
				//console.log(not_these);
			}
		}
		if(this_card_counter > 4 || (randomized != undefined && randomized == true))
		{
			card_id = get_random_card('any', max_time, deck_color, second_color, min_time, deck_theme, not_these, not_types);
			if(all_available_cards[card_id] != undefined && ((all_available_cards[card_id]['type'] == 'artifact' && artifact_count > 3 && (all_available_cards[card_id]['selfdestructs'] == undefined || all_available_cards[card_id]['selfdestructs'] == false)) || (all_available_cards[card_id]['type'] == 'spell' && spell_count > 10)))
			{
				card_id = get_random_card('any', max_time, deck_color, second_color, min_time, deck_theme, not_these, not_types);
			}
			if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['type'] == 'artifact' && (all_available_cards[card_id]['selfdestructs'] == undefined || all_available_cards[card_id]['selfdestructs'] == false))
			{
				artifact_count++;
				if(artifact_count > 4 && match_array_values(not_types, ['artifact']) == false)
				{
					not_types[count_object(not_types)] = 'artifact';
				}
			}
			if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['type'] == 'spell')
			{
				spell_count++;
			}
			//console.log('min: ' + min_time + ', max: ' + max_time + ', card: ' + card_id + ' / ' + all_available_cards[card_id]['time']);
			this_card_counter = 0;
		}
		
		if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['pick_chance'] > 0)
		{
			$.each(all_available_cards[card_id]['color'], function(useless_key, color){
				if(deck_color == 'colorless')
				{
					deck_color = color;
				}
				if(color != deck_color && color != 'colorless')
				{
					second_color = color;
				}
			});
			
			random_deck[t] = {
				card_id: 	card_id,
				status: 	'deck',
				time_left: 	all_available_cards[card_id]['time'],
			};
		}
		else
		{
			console.log(card_id);
		}
	}
	/*if(hero != undefined)
	{
		for(t = size;t < size + hero_card_count; t++){
			//var card_id = get_random_card('any');
			random_deck[t] = {
				card_id: 	hero,
				status: 	'deck',
				time_left: 	all_available_cards[hero]['time']
			};
		}
	}*/

	random_deck = check_deck_min_enemy_targets(random_deck, deck_theme);

	if(show_deck_construction == true)
	{
		console.log('DECK CONSTRUCTION');
		console.log('Theme:');
		console.log(deck_theme);
		var counted_deck_cards = {};
		var average_card_time = 0;
		$.each(random_deck, function(deck_card_id, deck_card_info){
			if(counted_deck_cards[deck_card_info['card_id']] == undefined)
			{
				counted_deck_cards[deck_card_info['card_id']] = 1;
			}
			else
			{
				counted_deck_cards[deck_card_info['card_id']]++;
			}
			average_card_time += all_available_cards[deck_card_info['card_id']]['time'];
		});
		console.log('cards:');
		console.log(counted_deck_cards);
		console.log('deck times:');
		console.log(deck_time_theme);
		console.log(deck_times);
		console.log('artifact count: ' + artifact_count);
		console.log('average card time: ' + (average_card_time / 30));
	}

	return random_deck;
}

function check_deck_min_enemy_targets(random_deck, deck_theme){
	var deck_size = count_object(random_deck);
	var theme_to_check = 'aoe';
	var min_enemies_ability_count = 0;
	var min_enemies_cards = {};
	var non_min_enemy_cards = {};
	$.each(random_deck, function(deck_id, deck_info){
		if(all_available_cards[deck_info['card_id']] != undefined && match_array_values(theme_to_check,all_available_cards[deck_info['card_id']]['theme']) == true)
		{
			min_enemies_ability_count++;
			min_enemies_cards[deck_id] = deck_info['time_left'];
		}
		else
		{
			non_min_enemy_cards[deck_id] = deck_info['time_left'];
		}
	});
	if(show_deck_construction == true)
	{
		console.log(theme_to_check + ' theme count: ' + min_enemies_ability_count);
	}
	if(min_enemies_ability_count + 1 <= deck_size / 10)
	{
		var chosen_card_to_replace = get_random_key_from_object(non_min_enemy_cards);
		var temp_deck_theme = true_copyobject(deck_theme);
		for (var i = 3; i >= 0; i--) {
			temp_deck_theme[get_highest_key_in_object(temp_deck_theme) + 1] = theme_to_check;
		}
		var new_card = get_random_card('any', non_min_enemy_cards[chosen_card_to_replace] + 2, undefined, undefined, non_min_enemy_cards[chosen_card_to_replace] - 2, temp_deck_theme, undefined, undefined);
		if(new_card == false)
		{
			new_card = get_random_card('any', non_min_enemy_cards[chosen_card_to_replace] + 2, undefined, undefined, non_min_enemy_cards[chosen_card_to_replace] - 2, [theme_to_check], undefined, undefined);
		}
		if(show_deck_construction == true)
		{
			console.log('replacing ' + random_deck[chosen_card_to_replace]['card_id'] + '(' + random_deck[chosen_card_to_replace]['time_left'] + ') with ' + new_card + '(' + all_available_cards[new_card]['time'] + ')');
		}
		if(new_card != false)
		{
			random_deck[chosen_card_to_replace] = {
				card_id: 	new_card,
				status: 	'deck',
				time_left: 	all_available_cards[new_card]['time'],
			}
		}
		random_deck = check_deck_min_enemy_targets(random_deck, deck_theme);
	}
	return random_deck;
}

function count_enemy_deck_cards(){
	if(battle_info != undefined && battle_info['deck_1'] != undefined)
	{
		var card_count = {};
		$.each(battle_info['deck_1'], function(card_id, card_info){
			if(card_count[card_info['card_id']] == undefined)
			{
				card_count[card_info['card_id']] = 1;
			}
			else
			{
				card_count[card_info['card_id']]++;
			}
		});
		console.log(card_count);
	}
}

function update_deck_counts(){

	var deck_card_count_1 = count_deck_cards(battle_info.deck_1);
	var grave_card_count_1 = count_grave_cards(battle_info.deck_1);
	var deck_card_count_2 = count_deck_cards(battle_info.deck_2);
	var grave_card_count_2 = count_grave_cards(battle_info.deck_2);

	setTimeout(function(){		
		$('.player_deck_counter').html(deck_card_count_2 + ' / ' + grave_card_count_2);
		$('.enemy_deck_counter').html(deck_card_count_1 + ' / ' + grave_card_count_1);
	},total_timeout);
}

function count_deck_cards(deck, card_type){
	var deck_card_count = 0;
	$.each(deck, function(card_id, card_info){
		if(card_info['status'] == 'deck' && (card_type == undefined || all_available_cards[card_info['card_id']]['type'] == card_type)){deck_card_count++;}
	})
	return deck_card_count;
}

function count_hand_cards(deck, card_type){
	var hand_card_count = 0;
	$.each(deck, function(card_id, card_info){
		if(card_info['status'] == 'hand' && (card_type == undefined || all_available_cards[card_info['card_id']]['type'] == card_type)){hand_card_count++;}
	})
	return hand_card_count;
}

function count_grave_cards(deck, card_type){
	var grave_card_count = 0;
	$.each(deck, function(card_id, card_info){
		if(card_info['status'] == 'grave' && (card_type == undefined || all_available_cards[card_info['card_id']]['type'] == card_type)){grave_card_count++;}
	})
	return grave_card_count;
}

function get_random_hero(on_value, min_rarity, max_rarity, common_reduction){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	var picked_hero = false;
	var available_hero_count = 0;
	$.each(all_available_cards, function(card_id, card){
		if(card['hero_version'] != undefined && (max_rarity == undefined || card['value'] <= max_rarity) && (min_rarity == undefined || card['value'] >= min_rarity))
		{
			/*if(card['pick_chance'] == undefined)
			{*/
			if(on_value == undefined || on_value == false)
			{
				available_hero_count += 1;
			}
			else
			{
				var temp_rarity = card['value'];
				if(common_reduction != undefined && temp_rarity < common_reduction && (gamedata['known_recipes'][card_id] != undefined || card['recipe'] == undefined)/*gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 5*/)
				{
					/*var temp_correction = common_reduction - card['value'];
					temp_rarity = common_reduction * temp_correction;*/
					temp_rarity = common_reduction;
				}
				available_hero_count += 1 / (temp_rarity * temp_rarity);
			}
			/*}
			else
			{
				available_hero_count += card['pick_chance'];
			}*/
		}
	});
	var picked_hero_number = (Math.random() * available_hero_count);
	$.each(all_available_cards, function(card_id, card){
		if(card['hero_version'] != undefined && (max_rarity == undefined || card['value'] <= max_rarity) && (min_rarity == undefined || card['value'] >= min_rarity))
		{
			if(on_value == undefined || on_value == false)
			{
				picked_hero_number -= 1;
			}
			else
			{
				var temp_rarity = card['value'];
				if(common_reduction != undefined && temp_rarity < common_reduction && (gamedata['known_recipes'][card_id] != undefined || card['recipe'] == undefined))
				{
					/*var temp_correction = common_reduction - card['value'];
					temp_rarity = common_reduction * temp_correction;*/
					temp_rarity = common_reduction;
				}
				picked_hero_number -= 1 / (temp_rarity * temp_rarity);
			}
			/*if(card['pick_chance'] == undefined)
			{*/
				
			/*}
			else
			{
				picked_hero_number -= card['pick_chance'];
			}*/
			if(picked_hero_number <= 0 && picked_hero == false)
			{
				picked_hero = card_id;
			}
		}
	});
	if(picked_hero == false && min_rarity != undefined)
	{
		min_rarity /= 2;
		picked_hero = get_random_hero(on_value, min_rarity, max_rarity, common_reduction);
	}
	if(picked_hero == false){picked_hero = 'peasant';}
	return picked_hero;
}

function get_random_card(type, max_time, color_restriction, second_color_restriction, min_time, theme, not_these, not_types){
	var total_card_count = 0;
	var picked_card = false;
	var month = new Date().getMonth() + 1;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['type'] != undefined && match_array_values(card_info['type'], not_types) == false && (match_array_values(card_info['type'], type) || type == 'any') && (max_time == undefined || max_time >= card_info['time']) && (min_time == undefined || min_time <= card_info['time']) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{
			var can_pick = true;
			if(color_restriction != undefined && second_color_restriction != undefined)
			{
				if(second_color_restriction == false && card_info['color'][0] != color_restriction && card_info['color'][1] != undefined && card_info['color'][1] != color_restriction)
				{
					can_pick = false;
				}
			
				$.each(card_info['color'], function(useless_key, color){
					if(color != color_restriction && second_color_restriction != false && color != second_color_restriction && color != 'colorless')
					{
						can_pick = false;
					}
				});
			}
			if(not_these != undefined && match_array_values(not_these, card_id) == true)
			{
				can_pick = false;
			}
			if(card_info['pick_chance'] != undefined && card_info['pick_chance'] == 0)
			{
				can_pick = false;
			}
			if(card_info['not_theme'] != undefined && match_array_values(card_info['not_theme'], theme) > 0)
			{
				can_pick = false;
			}
			if(can_pick == true)
			{
				var pick_chance = 1;
				if(card_info['pick_chance'] != undefined){pick_chance = card_info['pick_chance'];}
				if(card_info['color'][0] == 'colorless'){pick_chance *= 1;}
				if(theme != undefined)
				{
					var total_match = match_array_values(card_info['theme'], theme, true);
					var match_factor = to_the_nth(1, 10, total_match + 1);
					//if(total_match > 1){console.log(card_info['name'] + ' matches x' + total_match + ' = x' + match_factor);}
					pick_chance *= match_factor;
				}
				
				/*if(match_array_values(card_info['theme'], theme)){
					//if(pick_chance < 1){pick_chance = 1;}
					pick_chance *= 100;
				}*/
				total_card_count += pick_chance;
			}
		}
	});

	var picked_card_number = (Math.random() * total_card_count);
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['type'] != undefined && match_array_values(card_info['type'], not_types) == false && (match_array_values(card_info['type'], type) || type == 'any') && (max_time == undefined || max_time >= card_info['time']) && (min_time == undefined || min_time <= card_info['time']) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{
			var can_pick = true;
			if(color_restriction != undefined && second_color_restriction != undefined)
			{
				if(second_color_restriction == false && card_info['color'][0] != color_restriction && card_info['color'][1] != undefined && card_info['color'][1] != color_restriction)
				{
					can_pick = false;
				}
			
				$.each(card_info['color'], function(useless_key, color){
					if(color != color_restriction && second_color_restriction != false && color != second_color_restriction && color != 'colorless')
					{
						can_pick = false;
					}
				});
			}
			if(not_these != undefined && match_array_values(not_these, card_id) == true)
			{
				can_pick = false;
			}
			if(card_info['pick_chance'] != undefined && card_info['pick_chance'] == 0)
			{
				can_pick = false;
			}
			if(card_info['not_theme'] != undefined && match_array_values(card_info['not_theme'], theme) > 0)
			{
				can_pick = false;
			}
			if(can_pick == true)
			{
				var pick_chance = 1;
				if(card_info['pick_chance'] != undefined){pick_chance = card_info['pick_chance'];}
				if(card_info['color'][0] == 'colorless'){pick_chance *= 1;}
				if(theme != undefined)
				{
					var total_match = match_array_values(card_info['theme'], theme, true);
					var match_factor = to_the_nth(1, 10, total_match + 1);
					pick_chance *= match_factor;
				}
				/*if(match_array_values(card_info['theme'], theme)){
					//if(pick_chance < 1){pick_chance = 1;}
					pick_chance *= 100;
				}*/
				picked_card_number -= pick_chance;
				if(picked_card_number <= 0 && picked_card == false)
				{
					picked_card = card_id;
				}
			}
		}
	});
	if(picked_card == false){picked_card = get_random_card(type, max_time, color_restriction, second_color_restriction);}
	return picked_card;
}

function get_random_card_based_on_time(type, max_time, color_restriction, second_color_restriction, card_subtype, min_time, not_these){
	var total_card_count = 0;
	var picked_card = false;
	var month = new Date().getMonth() + 1;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && card_info['type'] != undefined && (card_info['type'] == type || type == 'any' || type == undefined) && (max_time == undefined || max_time >= card_info['time']) && (min_time == undefined || min_time <= card_info['time']) && (card_subtype == undefined || match_array_values(card_subtype,card_info['subtypes']) == true) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{
			var can_pick = true;
			if(color_restriction != undefined && second_color_restriction != undefined)
			{
				if(second_color_restriction == false && card_info['color'][0] != color_restriction && card_info['color'][1] != undefined && card_info['color'][1] != color_restriction)
				{
					can_pick = false;
				}
			
				$.each(card_info['color'], function(useless_key, color){
					if(color != color_restriction && second_color_restriction != false && color != second_color_restriction)
					{
						can_pick = false;
					}
				});
			}
			if(not_these != undefined && match_array_values(not_these, card_id) == true)
			{
				can_pick = false;
			}
			if(can_pick == true)
			{
				var pick_chance = 1;
				if(card_info['time'] != undefined && card_info['time'] > 1){pick_chance = pick_chance / (card_info['time'] / 2);}
				total_card_count += pick_chance;
			}
		}
	});
	var picked_card_number = (Math.random() * total_card_count);
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && card_info['type'] != undefined && (card_info['type'] == type || type == 'any' || type == undefined) && (max_time == undefined || max_time >= card_info['time']) && (min_time == undefined || min_time <= card_info['time']) && (card_subtype == undefined || match_array_values(card_subtype,card_info['subtypes']) == true) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{
			var can_pick = true;
			if(color_restriction != undefined && second_color_restriction != undefined)
			{
				if(second_color_restriction == false && card_info['color'][0] != color_restriction && card_info['color'][1] != undefined && card_info['color'][1] != color_restriction)
				{
					can_pick = false;
				}
			
				$.each(card_info['color'], function(useless_key, color){
					if(color != color_restriction && second_color_restriction != false && color != second_color_restriction)
					{
						can_pick = false;
					}
				});
			}
			if(not_these != undefined && match_array_values(not_these, card_id) == true)
			{
				can_pick = false;
			}
			if(can_pick == true)
			{
				var pick_chance = 1;
				if(card_info['time'] != undefined && card_info['time'] > 1){pick_chance = pick_chance / (card_info['time'] / 2);}
				picked_card_number -= pick_chance;
				if(picked_card_number <= 0 && picked_card == false)
				{
					picked_card = card_id;
				}
			}
		}
	});
	if(picked_card == false){picked_card = get_random_card_based_on_time(type, max_time + 1);}
	return picked_card;
}

function get_random_card_based_on_value(min_value, color, type, all_pick_chance, not_these, max_value){
	var total_card_count = 0;
	var picked_card = false;
	if(min_value == undefined)
	{
		min_value = 1;
	}
	if(min_value <= 0)
	{
		min_value = 1;
	}
	/*var pure_card_chance = 1;
	if(min_value != undefined)
	{
		pure_card_chance = apply_min_value(pure_card_chance, min_value);
	}*/
	//for(i=1;i<min_value;i++){pure_card_chance=pure_card_chance/(1+pure_card_chance );}
	var month = new Date().getMonth() + 1;
	$.each(all_available_cards, function(card_id, card_info){

		if((not_these == undefined || match_array_values(not_these, card_id) == false) && (card_info['recipe'] != undefined || type == 'fragment' || true) && (card_info['pick_chance'] > 0 || card_info['basic_reward'] != undefined || all_pick_chance != undefined) && ((type == undefined && card_info['type'] != 'cardback' && card_info['type'] != 'consumable' && card_info['type'] != 'currency' && card_info['type'] != 'item' && card_info['type'] != 'treasure') || match_array_values(card_info['type'], type) == true ) && card_info['value'] != undefined && card_info['value'] >= min_value && (max_value == undefined || card_info['value'] <= max_value) && (color == undefined || card_info['color'][0] == color) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{
			//if(card_info['pick_chance'] != undefined){pick_chance = card_info['pick_chance'];}
			var pick_chance = get_pick_chance_on_value(card_info['value'], min_value);
			//for(i=1;i<min_value;i++){pick_chance=pick_chance/(1+pick_chance);}
			//console.log(card_id + ' = ' + Math.floor(pick_chance / pure_card_chance * 100) + ' ~ ' + pick_chance);
			total_card_count += pick_chance;
		}	
		
	});
	var picked_card_number = (Math.random() * total_card_count);
	$.each(all_available_cards, function(card_id, card_info){

		if((not_these == undefined || match_array_values(not_these, card_id) == false) && (card_info['recipe'] != undefined || type == 'fragment' || true) && (card_info['pick_chance'] > 0 || card_info['basic_reward'] != undefined || all_pick_chance != undefined) && ((type == undefined && card_info['type'] != 'cardback' && card_info['type'] != 'consumable' && card_info['type'] != 'currency' && card_info['type'] != 'item' && card_info['type'] != 'treasure') || match_array_values(card_info['type'], type) == true ) && card_info['value'] != undefined && card_info['value'] >= min_value && (max_value == undefined || card_info['value'] <= max_value) && (color == undefined || card_info['color'][0] == color) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{
			//if(card_info['pick_chance'] != undefined){pick_chance = card_info['pick_chance'];}
			var pick_chance = get_pick_chance_on_value(card_info['value'], min_value);
			//for(i=1;i<min_value;i++){pick_chance=pick_chance/(1+pick_chance);}
			picked_card_number -= pick_chance;
			if(picked_card_number <= 0 && picked_card == false)
			{
				picked_card = card_id;
			}
		}
	});
	return picked_card;
}

function get_pick_chance_on_value(value, min_value){
	var pick_chance = 1;
	var base_number = 100000;
	if(min_value == undefined || min_value < 1){min_value = 1;}
	if(value != undefined)
	{
		if(value < 1){value = 1;}
		pick_chance = base_number / (value * (1 + value / 10));
	}
	
	//pick_chance = (base_number * pick_chance / 10) + sqr(min_value);
	return pick_chance;
}

function apply_min_value(pick_chance, min_value){
	if(min_value == undefined || min_value < 1){min_value = 1;}
	pick_chance = (100 * pick_chance) + sqr(min_value);
	return pick_chance;
}

function get_basic_reward_card(not_these){
	var month = new Date().getMonth() + 1;
	var found_card = 'peasant';
	var possible_cards = {};
	$.each(all_available_cards, function(card_id, card_info){
		if((card_info['basic_reward'] != undefined && card_info['basic_reward'] == true) || (card_info['value'] == 1 && match_array_values([month],card_info['months_available']) == true))
		{
		    var can_be_picked = true;
		    $.each(not_these, function(useless_key, not_this){
		        if(not_this['card_id'] == card_id)
		        {
		            can_be_picked = false;
		        }
		    });
		    if(can_be_picked == true)
		    {
		        possible_cards[card_id] = true;
		    }
		}
	});

	if(count_object(possible_cards) > 0)
	{
		found_card = get_random_key_from_object(possible_cards);
	}

	return found_card;
}

function get_fragment_card(){
	var month = new Date().getMonth() + 1;
	var found_card = '';
	var possible_cards = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['type'] == 'fragment' && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{

		    possible_cards[card_id] = (1 / card_info['value']) * (1 / card_info['value']);
		}
	});
	if(count_object(possible_cards) > 0)
	{
		found_card = get_random_key_from_object_based_on_num_value(possible_cards);
	}
	//console.log('ding');

	return found_card;
}

function get_back_card_card(){
	var month = new Date().getMonth() + 1;
	var found_card = '';
	var possible_cards = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['non_tradable'] == undefined && card_info['type'] == 'cardback' && card_info['reward'] != undefined && card_info['reward']['type'] != undefined && card_info['reward']['type'] == 'card_back' && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
		{

		    possible_cards[card_id] = (1 / card_info['value']) * (1 / card_info['value']);
		}
	});
	if(count_object(possible_cards) > 0)
	{
		found_card = get_random_key_from_object_based_on_num_value(possible_cards);
	}
	//console.log('ding');

	return found_card;
}

function check_get_random_card_value(min_value, color, type, all_pick_chance){
	var not_these = [];
	var total_value = 0;
	var times_to_pick = 1;
	for (var i = times_to_pick; i > 0; i--) {
		var card_picked = get_random_card_based_on_value(min_value, color, type, all_pick_chance, not_these);
		total_value += all_available_cards[card_picked]['value'];
	};
	console.log(total_value / times_to_pick);
}

function check_get_random_card(){
	for (var i = 100; i >= 0; i--) {
		if(get_random_card('any') == false)
		{
			console.log('failed');
		}
	};
}

function parse_combat_unit(unit, added_classes, no_slot_class, hero){
	var parsed_card = '';
	var current_card = unit;
	//console.log(current_card);
	if(added_classes == undefined)
	{
		added_classes = '';
	}

	var temp_slot = ' slot_' + unit['slot'];
	if(no_slot_class != undefined && no_slot_class == true)
	{
		temp_slot = '';
	}

	if(current_battle_type == 'chapter_battle' && typeof(unit['card_type']) == 'object')
	{
		parsed_card += 	'<div class="unit unit_id_' + unit['unit_id'] + ' unit_type_' + unit['type'] + temp_slot + ' side_' + unit['side'] + ' ' + added_classes + '" onclick="show_card_details(\'' + current_chapter + '\', ' + hero + ',undefined,undefined,' + unit['unit_id'] + '), pause_game()">';
	}
	else
	{
		/*if(((current_battle_type == 'random' && difficulty_setting > 0) || current_battle_type == 'raid') && unit['unit_id'] == 1)
		{
			parsed_card += 	'<div class="unit unit_id_' + unit['unit_id'] + ' unit_type_' + unit['type'] + temp_slot + ' side_' + unit['side'] + ' ' + added_classes + '" onclick="show_card_details(\'' + unit['card_type'] + '\', undefined,undefined,undefined,' + unit['unit_id'] + '), pause_game()">';
		}
		else
		{*/
			parsed_card += 	'<div class="unit unit_id_' + unit['unit_id'] + ' unit_type_' + unit['type'] + temp_slot + ' side_' + unit['side'] + ' ' + added_classes + '" data-card_type="' + unit['card_type'] + '" onclick="show_card_details(\'' + unit['card_type'] + '\', ' + hero + '), pause_game()">';
		/*}*/
	}
	if(count_object(current_card['color']) > 1)
	{
		$.each(current_card['color'], function(useless_key, color){
			parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
		});
	}
	else
	{
		parsed_card += 	'<div class="card_color color_' + current_card['color'][0] + ' color_number_0"></div><div class="card_color color_' + current_card['color'][0] + ' color_number_1"></div>';
	}
	
	var image_position = '';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 		'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';
	var all_parsed_abilities = '';
	if(current_card['time'] != undefined && current_card['time'] != false)
	{
		parsed_card += 		'<div class="card_time">' + current_card['time'] + '</div>';
	}
	parsed_card += 		'<div class="card_name">' + capitalizeFirstLetter(current_card['name']) + '</div>';
	if(current_card['power'] !== false)
	{
		parsed_card += 		'<div class="card_power">' + current_card['power'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="card_power hidden"></div>';
	}
	if(current_card['health'] != false)
	{
		parsed_card += 		'<div class="card_health"><div class="current_health"></div><div class="temp_health"></div><div class="max_health">' + current_card['current_health'] + '</div></div>';
	}
	var show_armor = '0';
	if(current_card['armor'] > 0)
	{
		show_armor = 1;
	}
	parsed_card += 		'<div class="card_armor" style="opacity:' + show_armor + '">' + current_card['armor'] + '</div>';
	parsed_card += 	'<div class="unit_effects">';
	$.each(current_card['effects'], function(effect_key, amount){
		parsed_card += 	'<div class="effect_' + effect_key + '">' + amount + '</div>';
	});
	parsed_card += 	'</div>';
	parsed_card += 	'</div>';

	return parsed_card;
}

function parse_abilities(unit_id){
	var current_unit = battle_info['combat_units'][unit_id];
	var all_parsed_abilities = '';
	$.each(current_unit['abilities'], function(ability_key, amount){
		if((ability_key != 'strike' && ability_key != 'strike_unit') || amount != 1)
		{
			
			if(all_abilities[ability_key] != undefined && all_abilities[ability_key]['do_not_show'] == undefined)
			{
				if(all_parsed_abilities != ''){all_parsed_abilities += ',&nbsp;</span>';}
				var temp_amount = amount;
				if(typeof(temp_amount) == 'object')
				{
					var temp_amount = amount['level'];
				}
				var current_ability = all_abilities[ability_key];
				all_parsed_abilities += '<span class="' + ability_key + '" style="color:' + current_ability['name_color'] + '">';
				all_parsed_abilities +=		current_ability['name'];
				/*if(current_ability['show_amount'] == true)*/
				if(temp_amount > 1 || current_ability['show_amount_adjustment'] != undefined || amount['level_2'] != undefined)
				{
					if(current_ability['show_amount_adjustment'] != undefined)
					{
						temp_amount += current_ability['show_amount_adjustment'];
					}
					if(temp_amount > 1)
					{
						all_parsed_abilities +=		' ' + temp_amount;
					}
					if(current_ability['post_name'] != undefined)
					{
						all_parsed_abilities +=		current_ability['post_name'];
					}

				}
				
				if(amount['level_2'] != undefined && amount['level_2'] > 1)
				{
					all_parsed_abilities +=		'/' + amount['level_2'];
				}
				//all_parsed_abilities += '</span>';
				if(current_unit['ability_delays'][ability_key] != undefined)
				{
					if(current_unit['ability_delays'][ability_key] > 0)
					{
						all_parsed_abilities +=		' (' + (current_unit['ability_delays'][ability_key]) + ')';
					}
					else
					{
						//all_parsed_abilities +=		' (0)';
					}
				}
			}
		}
	});
	if(all_parsed_abilities != ''){all_parsed_abilities += '</span>';}
	all_parsed_abilities = '';
	all_parsed_abilities = 	'<div class="card_type">' + current_unit['type'] + '</div>' + all_parsed_abilities;
	return all_parsed_abilities;
}

function create_hero(card_id, side){
	var temp_unit = all_available_cards[card_id]['hero_version'];
	temp_unit['color'] = all_available_cards[card_id]['color'];
	var current_hero = create_combat_unit(temp_unit);
	if(side != undefined && side == 1)
	{
		var effective_power_factor = get_effective_power_factor();
		//console.log(effective_power_factor);
		if(current_hero['power'] > 0)
		{
			if(current_hero['power'] * effective_power_factor > 1)
			{
				current_hero['power'] = round_by_percent(current_hero['power'] * effective_power_factor);
			}
			else
			{
				current_hero['power'] = Math.ceil(current_hero['power'] * effective_power_factor);
			}
		}
		if(current_hero['health'] * effective_power_factor > 1)
		{
			current_hero['health'] = round_by_percent(current_hero['health'] * effective_power_factor);
		}
		else
		{
			current_hero['health'] = Math.ceil(current_hero['health'] * effective_power_factor);
		}
		//current_hero['health'] = Math.ceil(current_hero['health'] * effective_power_factor);
		$.each(current_hero['abilities'], function(ability_id, ability_level){
			if(all_abilities[ability_id] != undefined && all_abilities[ability_id]['scales'] != undefined && all_abilities[ability_id]['scales'] == true)
			{
				if((ability_level * effective_power_factor) > 1)
				{
					current_hero['abilities'][ability_id] = round_by_percent(ability_level * effective_power_factor);
				}
				else
				{
					current_hero['abilities'][ability_id] = Math.ceil(ability_level * effective_power_factor);
				}
			}
		});
	}
	return current_hero;
}

function apply_power_factor(unit, side){

	effective_power_factor = get_effective_power_factor();
	if(side == 1)
	{
		if(unit['power'] > 0)
		{
			if(unit['power'] * effective_power_factor > 1)
			{
				unit['power'] = round_by_percent(unit['power'] * effective_power_factor);
			}
			else
			{
				unit['power'] = Math.ceil(unit['power'] * effective_power_factor);
			}
		}
		if(unit['health'] > 0)
		{
			if(unit['health'] * effective_power_factor > 1)
			{
				unit['health'] = round_by_percent(unit['health'] * effective_power_factor);
			}
			else
			{
				unit['health'] = Math.ceil(unit['health'] * effective_power_factor);
			}
		}
		if(unit['armor'] > 0)
		{
			unit['armor'] = Math.ceil(unit['armor'] * effective_power_factor);
		}
		$.each(unit['abilities'], function(ability_id, ability_level){
			if(all_abilities[ability_id] != undefined && all_abilities[ability_id]['scales'] != undefined && all_abilities[ability_id]['scales'] == true)
			{
				if((ability_level * effective_power_factor) > 1)
				{
					unit['abilities'][ability_id] = round_by_percent(ability_level * effective_power_factor);
				}
				else
				{
					unit['abilities'][ability_id] = Math.ceil(ability_level * effective_power_factor);
				}
			}
		});
	}

	return unit;
}

function get_effective_power_factor(fixed_difficulty){
	if(fixed_difficulty == undefined){fixed_difficulty = difficulty_setting;}
	var effective_power_factor = sqr(0.5 + (fixed_difficulty / 20));
	effective_power_factor = fixed_difficulty * 0.1;
	if(difficulty_setting < 10)
	{
		effective_power_factor = fixed_difficulty / 10;
	}
	var effective_power_factor = (0.5 + (fixed_difficulty / 20));
	var effective_power_factor = (0 + (fixed_difficulty / 10));
	return effective_power_factor
}

function create_combat_unit(unit, side){
	//var combat_unit = copyobject(unit);
	var combat_unit = true_copyobject(unit);
	
	combat_unit['effects'] = true_copyobject(unit['effects']);
	if(combat_unit['effects'] == undefined){combat_unit['effects'] = {};}
	var temp_abilities = {};
	$.each(combat_unit['abilities'], function(ability_key, ability_level){
		temp_abilities[ability_key] = ability_level;
	});
	combat_unit['abilities'] = temp_abilities;
	combat_unit = apply_power_factor(combat_unit, side);
   	combat_unit['ability_delays'] = {};
   	$.each(combat_unit['abilities'], function(ability_key, ability_level){
   		if(all_abilities[ability_key]['starting_delay'] != undefined)
   		{
   			combat_unit['ability_delays'][ability_key] = all_abilities[ability_key]['starting_delay'];
   		}
   		if(typeof(ability_level) == 'object' && ability_level['starting_delay'] != undefined)
   		{
   			combat_unit['ability_delays'][ability_key] = ability_level['starting_delay'];
   		}
   	});

	return combat_unit;	
}

function add_battle_stats(stat, amount, max){
	if(amount == undefined){amount = 1;}
	check_achievement_goals();
	if(battle_stats[stat + '_total'] == undefined){battle_stats[stat + '_total'] = 0;}
	if(battle_stats[stat + '_times'] == undefined){battle_stats[stat + '_times'] = 0;}
	if(battle_stats[stat + '_max'] == undefined){battle_stats[stat + '_max'] = 0;}
	battle_stats[stat + '_total'] += amount;
	battle_stats[stat + '_times'] += 1;
	if(amount > battle_stats[stat + '_max']){battle_stats[stat + '_max'] = amount;}

	if(all_achievement_goals[stat] != undefined){				check_quests(stat);}
	if(all_achievement_goals[stat + '_total'] != undefined){	check_quests(stat + '_total',battle_stats[stat + '_total']);}
	if(all_achievement_goals[stat + '_times'] != undefined){	check_quests(stat + '_times',battle_stats[stat + '_times']);}
	if(all_achievement_goals[stat + '_max'] != undefined){		check_quests(stat + '_max',battle_stats[stat + '_max']);}

	//if(stat == 'spell_card_played'){console.log(amount);console.log(stat + '_times: ' + battle_stats[stat + '_times']);};
	//console.log(stat + '_total: ' + battle_stats[stat + '_total']);

}

function find_new_ability(not_these, unit){
	var chosen_ability = '';
	var possible_abilities_count = 0;
	var not_these_array = [];
	var temp_key = 0;
	$.each(not_these, function(key, data){
		if((all_abilities[key]['show_amount'] != undefined && all_abilities[key]['show_amount'] == false) || true)
		{
			not_these_array[temp_key] = key;
			temp_key++;
		}
	});
	$.each(all_abilities, function(ability_id, ability){
		if(match_array_values(not_these_array, [ability_id]) == false)
		{
			if(check_if_ability_can_be_added(ability_id, unit))
			{
				possible_abilities_count++;
			}
		}
	});
	var chosen_ability_number = Math.floor(Math.random() * possible_abilities_count) + 1;
	$.each(all_abilities, function(ability_id, ability){
		if(match_array_values(not_these_array, [ability_id]) == false)
		{
			if(check_if_ability_can_be_added(ability_id, unit))
			{			
				chosen_ability_number--;
				if(chosen_ability_number < 1 && chosen_ability == '')
				{
					chosen_ability = ability_id;
				}
			}
		}
	});

	return chosen_ability;
}

function check_if_ability_can_be_added(ability_id, unit){

	var can_be_added = false;
	var current_ability = all_abilities[ability_id];

	if(current_ability['good_random'] != undefined && current_ability['good_random'] == true)
	{
		can_be_added = true;
	}

	if(current_ability['need_power'] != undefined && current_ability['need_power'] == true && unit['power'] < 1)
	{
		can_be_added = false;
	}

	if(current_ability['proc'] == 'dealt_damage' && unit['power'] < 1)
	{
		can_be_added = false;
	}

	/*if(current_ability['negative_ability'] != undefined && current_ability['negative_ability'] == true)
	{
		can_be_added = false;
	}*/

	if(current_ability['proc'] == 'overkill' && unit['power'] < 2)
	{
		can_be_added = false;
	}

	/*if(current_ability['not_on_hero'] != undefined && current_ability['not_on_hero'] == true)
	{
		can_be_added = false;
	}*/

	/*if(current_ability['proc'] == 'on_play' || current_ability['proc'] == 'own_death')
	{
		can_be_added = false;
	}*/

	return can_be_added;
}