var deck_cards = {};
var enemy_deck_cards = {};
var player_gems = {};
var enemy_gems = {};
var player_hp;
var enemy_hp;
var player_mana = {};
var enemy_mana = {};
var hand_card_click_watcher;
var selectable_click_watcher;
var selected_card_id = 0;
var combat_units = {};
var total_timeout = 0;
var spell_counter = 1;
var new_combat_unit_key = 0;
var card_priority;
var latest_success = 0;
var current_type = '';
var current_subtype = '';
var player_actions = 0;
var enemy_actions = 0;
var turn_counter = 0;
var current_safety_level = 3;
var failed_card_picks = 0;
var random_damage = 0;
var death_blocked = false;
var combat_alive = false;
var game_speed = 500;
var max_enemy_actions = 0;
var current_phase = 1;
var could_play_if_more_mana = 0;

function set_up_combat(type, sub_type){

	combat_alive = true;
	total_timeout = 2000;
	$('.mana_bar').html('0');
	$('.card.combat').remove();
	$('.card_blocker').show();
	$('.end_turn_button').hide();
	$('.surrender_button').hide();
	$('.enemy_card_log').html('');
	$('.player_cards').html('');
	$('.enemy_image').html('');
	$('.phase_progression_bar').css('width','0%');
	$('.card_slot').removeClass('selectable');
	$('.card.combat').removeClass('selectable');
	$('.end_turn_button').html('End turn');
	current_type = type;
	current_subtype = sub_type;
	combat_units = {};
	deck_cards = {};
	enemy_deck_cards = {};
	new_combat_unit_key = 0;
	turn_counter = 1;
	game_speed = gamedata['game_speed'];
	current_phase = 1;
	player_actions = 1;

	// SET PLAYER HP
	player_hp = starting_hp;
	enemy_hp = starting_hp;
	player_mana = 
	{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
	};
	enemy_mana =
	{
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
	};

	$('.player_hp').html(player_hp);
	$('.player_deck').html('');
	$('.enemy_deck').html('');
	$('.player_grave').html('');
	$('.enemy_grave').html('');
	$('.enemy_hp').html(enemy_hp);

	if(type != 'random_vs_random')
	{
		// SET UP PLAYER GEMS
		var deck_cards_key = 1;
		$.each(available_cards, function(card_id, card){
			$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
				if(card_id == owned_card['card_id'] && owned_card['deck_id'] == gamedata['current_deck'] && card['type'] == 'gem')
				{
					player_gems[deck_cards_key] = card_id;
					summon_fake_spell(card_id, 0, 0, 1, 'player');
					deck_cards_key++;
				}
			});
		});
	}
	else
	{
		for (var i = 1; i < 3; i++) {
			//player_gems[i] = pick_random_gem_card({0:'diamond',1:'fire_gem',2:'ice_gem',3:'magic_gem',4:'gemmed_ring',5:'resin_stone'});
			player_gems[i] = pick_random_color_gem_card();
			summon_fake_spell(player_gems[i], 0, 0, 1, 'player');
			//enemy_gems[i] = pick_random_gem_card();
		};
	}

	// SET UP ENEMY GEMS
	if(type == 'custom')
	{
		enemy_gems = {
			1: $('#custom_fight_color_1').val(),
			2: $('#custom_fight_color_2').val()
		}
		summon_fake_spell(enemy_gems[1], 0, 0, 2, 'enemy');
		summon_fake_spell(enemy_gems[2], 0, 0, 2, 'enemy');
		$('.battle_bg').css('background-image', 'url(images/bg/knights-2666493_1280.jpg)');
		$('.page_container.active').css('background-color','');
	}
	else
	{
		if(type == 'themed')
		{
			var chosen_theme = get_random_key_from_object(card_themes);
			enemy_gems[1] = card_themes[chosen_theme]['gem1'];
			enemy_gems[2] = card_themes[chosen_theme]['gem2'];
			summon_fake_spell(enemy_gems[1], 0, 0, 2, 'enemy');
			summon_fake_spell(enemy_gems[2], 0, 0, 2, 'enemy');
			$('.battle_bg').css('background-image', 'url(images/bg/' + card_themes[chosen_theme]['bg_image'] + ')');
			$('#content_random_fight').css('background-color','#' + card_themes[chosen_theme]['color']);
			$('#content_random_fight').append('<div class="theme_title">' + card_themes[chosen_theme]['name'] + '</div>');
			setTimeout(function(){
				$('#content_random_fight .theme_title').remove();
			},6000);
		}
		else
		{
			if(type == 'location')
			{
				enemy_gems[1] = all_locations[sub_type]['gem1'];
				enemy_gems[2] = all_locations[sub_type]['gem2'];
				summon_fake_spell(enemy_gems[1], 0, 0, 2, 'enemy');
				summon_fake_spell(enemy_gems[2], 0, 0, 2, 'enemy');
				$('.battle_bg').css('background-image', 'url(images/' + all_locations[sub_type]['bg_image'] + ')');
				$('#content_random_fight').css('background-color','#' + all_locations[sub_type]['color']);
				$('#content_random_fight').append('<div class="theme_title">' + all_locations[sub_type]['name'] + '</div>');
				setTimeout(function(){
					$('#content_random_fight .theme_title').remove();
				},6000);
			}
			else
			{
				for (var i = 1; i < 3; i++) {
					//enemy_gems[i] = pick_random_gem_card({0:'diamond',1:'fire_gem',2:'ice_gem',3:'magic_gem',4:'gemmed_ring',5:'resin_stone'});
					enemy_gems[i] = pick_random_color_gem_card();
					//enemy_gems[i] = pick_random_gem_card();
					summon_fake_spell(enemy_gems[i], 0, 0, 2, 'enemy');
				};

				$('.battle_bg').css('background-image', 'url(images/bg/knights-2666493_1280.jpg)');
				$('#content_random_fight').css('background-color','');
			}
		}
		
	}

	// SET UP PLAYER DECK
	if(type != 'random_vs_random')
	{
		var deck_cards_key = 1;
		$.each(available_cards, function(card_id, card){
			$.each(gamedata['owned_cards'], function(owned_card_id, owned_card){
				if(card_id == owned_card['card_id'] && owned_card['deck_id'] == gamedata['current_deck'] && card['type'] != 'gem')
				{
					deck_cards[deck_cards_key] = {card_id:card_id,status:'deck',grave_cost:0};
					deck_cards_key++;
				}
			});
		});
	}
	else
	{

		/*for (var i = 0; i < 4; i++) {
			deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[player_gems[1]]['abilities'][0]['mana_chances']),status:'deck'};
		};
		for (var i = 4; i < 8; i++) {
			deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[player_gems[2]]['abilities'][0]['mana_chances']),status:'deck'};
		};*/
		/*var combined_mana_pool = {
			blue: 	0,
			red: 	0,
			green: 	0,
			purple: 0,
			orange: 0,
			yellow: 0
		};
		$.each(player_gems, function(slot, gem_id){
			$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
				combined_mana_pool[color] += amount;
			});
		});

		failed_card_picks = 0;
		var deck_type_amount = count_object(deck_types);
		var chosen_deck_type = deck_types[Math.floor(Math.random() * deck_type_amount)];
		console.log('player deck: ' + chosen_deck_type['name']);

		for (var i = 0; i < 10; i++) {
			var chosen_mana_pool = combined_mana_pool;
			if(chosen_deck_type[i]['gem'] != 0)
			{
				chosen_mana_pool = available_cards[player_gems[chosen_deck_type[i]['gem']]]['abilities'][0]['mana_chances'];
			}
			
			deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(chosen_mana_pool,undefined,chosen_deck_type[i]),status:'deck',grave_cost:0};
		}*/
		deck_cards = construct_random_deck(player_gems, 3);

		/*for (var i = 0; i < 4; i++) {
			deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[player_gems[1]]['abilities'][0]['mana_chances'],undefined,chosen_deck_type[i]),status:'deck'};
		};
		for (var i = 4; i < 8; i++) {
			deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[player_gems[2]]['abilities'][0]['mana_chances'],undefined,chosen_deck_type[i]),status:'deck'};
		};

		for (var i = 8; i < 10; i++) {
			deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(combined_mana_pool,undefined,chosen_deck_type[i]),status:'deck'};
		};*/

		/*$.each(player_gems, function(slot, gem_id){
			for (var i = 57 + slot * 3; i < 60 + slot * 3; i++) {
				if(gem_id == 'emerald'){deck_cards[i] = {card_id:'grove',status:'deck'};}
				if(gem_id == 'agate'){deck_cards[i] = {card_id:'ocean',status:'deck'};}
				if(gem_id == 'amethist'){deck_cards[i] = {card_id:'marsh',status:'deck'};}
				if(gem_id == 'ruby'){deck_cards[i] = {card_id:'furnace',status:'deck'};}
				if(gem_id == 'amber'){deck_cards[i] = {card_id:'desert',status:'deck'};}
				if(gem_id == 'citrine'){deck_cards[i] = {card_id:'bank',status:'deck'};}
			};
		});*/
	}

	// SET UP ENEMY DECK
	/*for (var i = 0; i < 30; i++) {
		enemy_deck_cards[i] = {card_id:pick_random_non_gem_card(),status:'deck'};
	};*/

	if(type != 'themed' && type != 'location')
	{

		/*for (var i = 0; i < 15; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[enemy_gems[1]]['abilities'][0]['mana_chances'],3),status:'deck'};
		};*/
		/*for (var i = 0; i < 4; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[enemy_gems[1]]['abilities'][0]['mana_chances']),status:'deck'};
		};*/
		/*for (var i = 25; i < 40; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[enemy_gems[2]]['abilities'][0]['mana_chances'],3),status:'deck'};
		};*/
		/*for (var i = 4; i < 8; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[enemy_gems[2]]['abilities'][0]['mana_chances']),status:'deck'};
		};*/
		/*var combined_mana_pool = {
			blue: 	0,
			red: 	0,
			green: 	0,
			purple: 0,
			orange: 0,
			yellow: 0
		};
		$.each(enemy_gems, function(slot, gem_id){
			$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
				combined_mana_pool[color] += amount;
			});
		});*/
		/*for (var i = 8; i < 10; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(combined_mana_pool),status:'deck'};
		};*/

		/*var deck_type_amount = count_object(deck_types);
		var chosen_deck_type = deck_types[Math.floor(Math.random() * deck_type_amount)];
		console.log('enemy deck: ' + chosen_deck_type['name']);

		for (var i = 0; i < 10; i++) {
			var chosen_mana_pool = combined_mana_pool;
			if(chosen_deck_type[i]['gem'] != 0)
			{
				chosen_mana_pool = available_cards[enemy_gems[chosen_deck_type[i]['gem']]]['abilities'][0]['mana_chances'];
			}
			
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(chosen_mana_pool,undefined,chosen_deck_type[i]),status:'deck',grave_cost:0};
		}*/
		enemy_deck_cards = construct_random_deck(enemy_gems, 5);
		/*for (var i = 0; i < 4; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[player_gems[1]]['abilities'][0]['mana_chances'],undefined,chosen_deck_type[i]),status:'deck'};
		};
		for (var i = 4; i < 8; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(available_cards[player_gems[2]]['abilities'][0]['mana_chances'],undefined,chosen_deck_type[i]),status:'deck'};
		};

		for (var i = 0; i < 10; i++) {
			enemy_deck_cards[i] = {card_id:pick_random_non_gem_card_based_on_mana(combined_mana_pool,undefined,chosen_deck_type[i]),status:'deck'};
		};*/

		/*$.each(enemy_gems, function(slot, gem_id){
			for (var i = 57 + slot * 3; i < 60 + slot * 3; i++) {
				if(gem_id == 'emerald'){enemy_deck_cards[i] = {card_id:'grove',status:'deck'};}
				if(gem_id == 'agate'){enemy_deck_cards[i] = {card_id:'ocean',status:'deck'};}
				if(gem_id == 'amethist'){enemy_deck_cards[i] = {card_id:'marsh',status:'deck'};}
				if(gem_id == 'ruby'){enemy_deck_cards[i] = {card_id:'furnace',status:'deck'};}
				if(gem_id == 'amber'){enemy_deck_cards[i] = {card_id:'desert',status:'deck'};}
				if(gem_id == 'citrine'){enemy_deck_cards[i] = {card_id:'bank',status:'deck'};}
			};
		});*/
	}
	else
	{
		for (var i = 0; i < max_deck_size; i++) {
			if(type == 'themed' && card_themes[chosen_theme]['cards'][i] != '')
			{
				enemy_deck_cards[i] = {card_id:card_themes[chosen_theme]['cards'][i],status:'deck',grave_cost:0};
			}
			if(type == 'location' && all_locations[sub_type]['cards'][i] != '')
			{
				enemy_deck_cards[i] = {card_id:all_locations[sub_type]['cards'][i],status:'deck',grave_cost:0};
			}
		};

		
	}
	
	show_current_mana();
	// DRAW CARDS
	for (var i = 0; i < max_deck_size; i++)
	{
		draw_card(deck_cards);
		total_timeout += game_speed / 2;
		show_player_hand();
		draw_card(enemy_deck_cards);
		total_timeout += game_speed / 2;
		show_enemy_hand();
	};
	
	

	

	
	
	//SHOW PLAYER GEMS
	$.each(player_gems, function(gem_slot, gem_id){
		$('.player_mana .gem_' + gem_slot).html('<div class="gem_image" style="background-image:url(images/cards/' + available_cards[gem_id]['image'] + ')"></div>');
		$('.player_mana .gem_' + gem_slot).css('background-color','#' + available_cards[gem_id]['color']);
	});

	//SHOW ENEMY GEMS
	$.each(enemy_gems, function(gem_slot, gem_id){
		$('.enemy_mana .gem_' + gem_slot).html('<div class="gem_image" style="background-image:url(images/cards/' + available_cards[gem_id]['image'] + ')"></div>');
		$('.enemy_mana .gem_' + gem_slot).css('background-color','#' + available_cards[gem_id]['color']);
	});

	//process_abilities('start_turn', 'player', 1);
	
	if(Math.random() > 0.5)
	{
		setTimeout(function(){
			end_turn();
		},total_timeout);
	}
	else
	{
		turn_counter++;
		var phase_progression_bar_width_0 = ((turn_counter -1) / 16) * 100;
		setTimeout(function(){
			$('.phase_progression_bar').css('width',phase_progression_bar_width_0 + '%');
		},total_timeout);
		var number_of_actions = Math.ceil(turn_counter / 4);

		process_abilities('start_turn', 'player', 1);	

		$.each(combat_units, function(combat_unit_id, combat_unit){
			unzoom_unit(combat_unit_id);
		});

		setTimeout(function(){
			player_actions = number_of_actions;
			if(gamedata['limited_actions'] == true)
			{
				$('.end_turn_button').html('actions: ' + player_actions);
			}
			else
			{
				$('.end_turn_button').html('End Turn');
			}
			enable_interface();
		},total_timeout);
	}
	

	//SHOW MANA
	//show_current_mana();
	
}

function construct_random_deck(gems, use_rarity){
	if(use_rarity == undefined)
	{
		use_rarity = 0;
	}
	var combined_mana_pool = {
		blue: 	0,
		red: 	0,
		green: 	0,
		purple: 0,
		orange: 0,
		yellow: 0
	};
	$.each(gems, function(slot, gem_id){
		$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
			combined_mana_pool[color] += amount;
		});
	});
	var constructed_deck = {};
	failed_card_picks = 0;
	var deck_type_amount = count_object(deck_types);
	var chosen_deck_type = deck_types[Math.floor(Math.random() * deck_type_amount)];
	//if(gems == player_gems){console.log('-------------- player');}else{console.log('-------------- enemy');}
	//console.log('picked deck: ' + chosen_deck_type['name']);
	

	for (var i = 0; i < max_deck_size; i++) {
		var chosen_mana_pool = combined_mana_pool;
		if(chosen_deck_type[i]['gem'] != 0)
		{
			chosen_mana_pool = available_cards[gems[chosen_deck_type[i]['gem']]]['abilities'][0]['mana_chances'];
		}
		var last_failed_card_picks = failed_card_picks;
		var picked_card = pick_random_non_gem_card_based_on_mana(chosen_mana_pool,undefined,chosen_deck_type[i],constructed_deck, use_rarity, true);
		
		constructed_deck[i] = {card_id:picked_card,status:'deck',grave_cost:0};
		
		//if(failed_card_picks > last_failed_card_picks){console.log('for card number ' + (i +1));}
	}

	if(failed_card_picks > 5)
	{
		console.log('deck construction failed -----------------------');
		constructed_deck = construct_random_deck(gems, use_rarity);
	}

	if(count_deck_cards(constructed_deck, 'structure') > 3)
	{
		console.log('deck construction failed ------------ to many structures -----------');
		constructed_deck = construct_random_deck(gems, use_rarity);
	}

	return constructed_deck;
}

function disable_interface(){
	$('.selectable').removeClass('selectable');
	$('.card_blocker').show();
	$('.end_turn_button').hide();
	$('.surrender_button').hide();
};

function enable_interface(){
	$('.card_blocker').hide();
	$('.end_turn_button').show();
	if(turn_counter > 24)
	{
		$('.surrender_button').html('Resign');
		$('.surrender_button').css('background-color','orange');
	}
	else
	{
		$('.surrender_button').html('Surrender');
		$('.surrender_button').css('background-color','');
	}
	$('.surrender_button').show();
};

function resign_combat(){
	if(turn_counter > 24)
	{
		$('.surrender_button').hide();
		total_timeout = 0;
		player_hp = 0;
		end_combat();
	}
	else
	{
		show_content('home');
	}
}

function end_turn(){
	total_timeout = 0;
	disable_interface();



	// END PLAYER TURN
	process_attacks('player');

	if(player_hp < 1 || enemy_hp < 1){combat_alive = false;end_combat();return;}
	
	process_abilities('end_turn', 'ally', 1);
	process_abilities('end_any_turn');
	process_abilities('end_any_player_turn');
	process_abilities('true_end_turn', 'ally', 1);
	//total_timeout+=250;
	if(player_hp < 1 || enemy_hp < 1){combat_alive = false;end_combat();return;}

	process_poisoned(0);
	process_burning(0);
	process_abilities('start_turn', 'neutral', 0);
	process_attacks('neutral');
	process_abilities('end_turn', 'neutral', 0);
	process_abilities('end_any_turn');
	process_abilities('true_end_turn', 'neutral', 0);
	
	//total_timeout+=250;

	turn_counter++;
	var phase_progression_bar_width = ((turn_counter -1) / 16) * 100;
	setTimeout(function(){
		$('.phase_progression_bar').css('width',phase_progression_bar_width + '%');
	},total_timeout);
	check_phases();
	var number_of_actions = Math.ceil(turn_counter / 8);
	if(number_of_actions > 3)
	{
		number_of_actions = 3;
	}

	// BEGIN ENEMY TURN
	reduce_all_stunned();
	enemy_actions = number_of_actions;
	max_enemy_actions = number_of_actions;
	draw_card(enemy_deck_cards);
	show_enemy_hand();
	process_poisoned(2);
	process_burning(2);
	process_abilities('start_turn', 'enemy', 2);
	if(player_hp < 1 || enemy_hp < 1){combat_alive = false;end_combat();return;}
	current_safety_level = 3;
	could_play_if_more_mana = 0;
	process_enemy_turn();

	process_attacks('enemy');
	if(player_hp < 1 || enemy_hp < 1){combat_alive = false;end_combat();return;}
	
	process_abilities('end_turn', 'enemy', 2);
	process_abilities('end_any_turn');
	process_abilities('end_any_player_turn');
	process_abilities('true_end_turn', 'enemy', 2);
	//total_timeout+=250;
	if(player_hp < 1 || enemy_hp < 1){combat_alive = false;end_combat();return;}

	process_poisoned(0);
	process_burning(0);
	process_abilities('start_turn', 'neutral', 0);
	process_attacks('neutral');
	process_abilities('end_turn', 'neutral', 0);
	process_abilities('end_any_turn');
	process_abilities('true_end_turn', 'neutral', 0);
	//total_timeout+=250;

	draw_card(deck_cards);
	show_player_hand();

	turn_counter++;
	var phase_progression_bar_width_2 = ((turn_counter -1) / 16) * 100;
	setTimeout(function(){
		$('.phase_progression_bar').css('width',phase_progression_bar_width_2 + '%');
	},total_timeout);
	check_phases();
	var number_of_actions = Math.ceil(turn_counter / 8);
	if(number_of_actions > 3)
	{
		number_of_actions = 3;
	}
	reduce_all_stunned();
	process_poisoned(1);
	process_burning(1);
	process_abilities('start_turn', 'player', 1);	
	if(player_hp < 1 || enemy_hp < 1){end_combat();return;}

	$.each(combat_units, function(combat_unit_id, combat_unit){
		unzoom_unit(combat_unit_id);
	});

	setTimeout(function(){
		if(gamedata['limited_actions'] == true)
		{
			player_actions = number_of_actions;
			$('.end_turn_button').html('actions: ' + player_actions);
		}
		enable_interface();
	},total_timeout);
	
}

function check_phases(){
	if(turn_counter == 9)
	{
		/*player_hp = Math.ceil(player_hp * phase_hp_factor);
		enemy_hp *= Math.ceil(enemy_hp * phase_hp_factor);
		var new_player_hp = player_hp;
		var new_enemy_hp = enemy_hp;*/
		setTimeout(function(){
			/*$('.player_hp').html(new_player_hp);
			$('.enemy_hp').html(new_enemy_hp);*/
			$('#content_random_fight').append('<div class="theme_title">Phase 2</div>');
			setTimeout(function(){
				$('#content_random_fight .theme_title').remove();
			},game_speed * 6);
		},total_timeout);
		adjust_hero_hp({target_side:'ally'}, Math.ceil(player_hp * phase_hp_factor), 1, 0);
		adjust_hero_hp({target_side:'ally'}, Math.ceil(enemy_hp * phase_hp_factor), 2, 0);
		current_phase = 2;
	}
	if(turn_counter == 17)
	{
		/*player_hp = Math.ceil(player_hp * phase_hp_factor);
		enemy_hp *= Math.ceil(enemy_hp * phase_hp_factor);
		var new_player_hp = player_hp;
		var new_enemy_hp = enemy_hp;*/
		setTimeout(function(){
			/*$('.player_hp').html(new_player_hp);
			$('.enemy_hp').html(new_enemy_hp);*/
			$('#content_random_fight').append('<div class="theme_title">Phase 3</div>');
			setTimeout(function(){
				$('#content_random_fight .theme_title').remove();
			},game_speed * 6);
		},total_timeout);
		adjust_hero_hp({target_side:'ally'}, Math.ceil(player_hp * phase_hp_factor), 1, 0);
		adjust_hero_hp({target_side:'ally'}, Math.ceil(enemy_hp * phase_hp_factor), 2, 0);
		current_phase = 3;
	}
}

function reduce_all_stunned(){
	$.each(combat_units, function(unit_id, unit){
		if(unit['stunned'] > 0)
		{
			unit['stunned'] -= 1;
		}
		update_stunned(unit_id);
	});
}

function process_poisoned(side){
	$.each(combat_units, function(unit_id, unit){
		if(unit['poisoned'] != undefined && unit['poisoned'] > 0 && unit['side'] == side && (unit['immune_to_poison'] == undefined || unit['immune_to_poison'] == false))
		{
			unit_receive_damage(unit_id, unit_id, unit['poisoned'], true);
		}
	});
}

function process_burning(side){
	$.each(combat_units, function(unit_id, unit){
		if(unit['burning'] != undefined && unit['burning'] > 0 && unit['side'] == side && (unit['immune_to_burning'] == undefined || unit['immune_to_burning'] == false))
		{
			unit_receive_damage(unit_id, unit_id, unit['burning']);
		}
	});
}

function end_combat(){
	if(player_hp > 0 && enemy_hp < 1)
	{
		if(current_type == 'location')
		{
			update_quests('location_' + current_subtype + '_win');
		}
		update_quests('any_win');
		if(player_hp <= 5)
		{
			update_quests('win_any_with_max_5_hp');
		}
		if(player_hp >= 50)
		{
			update_quests('win_any_with_min_50_hp');
		}
		setTimeout(function(){
/*			var won_card_type = Math.random();
			if(won_card_type > 0.1)
			{*/
				var won_card = pick_random_card_from_deck(enemy_deck_cards);
/*			}
			else
			{
				if(won_card_type > 0.025)
				{
					var won_card = enemy_gems[1];
				}
				else
				{
					var won_card = enemy_gems[2];
				}
			}*/
			/*parsed_card = parse_card(won_card, 'full',0,0);
			$('.detail_overlay').html('<div class="overlay_card_container">' + parsed_card + ' </div>');*/
			if(current_type == 'random_vs_random')
			{
				$('.detail_overlay').append('<div class="coins_gained">Gained ' + (coins_gained_per_win + 2) + ' coins!</div>');
				gamedata['coins'] += coins_gained_per_win + 2;
			}
			else
			{
				if(current_type != 'location')
				{
					$('.detail_overlay').append('<div class="coins_gained">Gained ' + (coins_gained_per_win) + ' coins!</div>');
					gamedata['coins'] += coins_gained_per_win;
				}
				else
				{
					var won_card = all_locations[current_subtype]['reward'];
					parsed_card = parse_card(won_card, 'full',0,0);
					gain_card(won_card,0);
					$('.detail_overlay').html('<div class="overlay_card_container"><div class="bought_card_container shown">' + parsed_card + ' </div></div>');
				}
			}
			saveToLocalStorage();
			$('.detail_overlay').fadeIn();
			$('.victory').fadeIn();
			
			/*gain_card(won_card,0);*/
		},total_timeout);
		setTimeout(function(){
			$('.detail_overlay .coins_gained').fadeIn();
		},total_timeout + 1000);
		/*setTimeout(function(){
			$('.detail_overlay .overlay_card_container').fadeOut();
		},total_timeout + 1500);*/
		setTimeout(function(){
			show_content();
			$('.menu_button').show();
			$('.victory').fadeOut();
			//$('.detail_overlay .coins_gained').fadeOut();
			//$('.detail_overlay').fadeOut();
		},total_timeout + 3000);
	}
	else
	{
		gamedata['coins'] += coins_gained_per_loss;
		saveToLocalStorage();
		setTimeout(function(){
			$('.detail_overlay .card_detail').html('');
			$('.detail_overlay').append('<div class="coins_gained">Gained ' + coins_gained_per_loss + ' coins!</div>');
			$('.detail_overlay .coins_gained').show();
			$('.detail_overlay').fadeIn();
			$('.loss').fadeIn();
		},total_timeout);
		setTimeout(function(){
			show_content();
			$('.menu_button').show();
			$('.loss').fadeOut();
			$('.detail_overlay').fadeOut();
		},total_timeout + 3000);
	}
}

function process_abilities(proc, side_string, side, origin_unit){
	if(combat_alive == false){return false;}
	var temp_gems;
	if(side == 1){temp_gems = player_gems;}
	if(side == 2){temp_gems = enemy_gems;}
	if(side == 0){temp_gems = {};}
	/*if(side != 0)
	{
		$.each(temp_gems, function(gem_id, gem){
			$.each(available_cards[gem]['abilities'], function(ability_key, ability){
				if(ability['proc'] == proc)
				{
					// ZOOM UNIT
					setTimeout(function(){
						$('.' + side_string + '_mana .gem_' + gem_id).addClass('zoom');
					},total_timeout);
					total_timeout += 250;
			
					// PROCESS THESE ABILITIES

					process_ability(available_cards[gem], ability, side_string, side);

					// UNZOOM UNIT
					setTimeout(function(){
						$('.' + side_string + '_mana .gem_' + gem_id).removeClass('zoom');
					},total_timeout);
				}
			});
		});
	}*/
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side || side == undefined)
		{
			$.each(unit['abilities'], function(ability_key, ability){
				if(ability['proc'] == proc && (ability['origin_not_self'] == undefined || unit_id != origin_unit) && (ability['origin_self'] == undefined || unit_id == origin_unit) && combat_alive != false)
				{
					// ZOOM UNIT
					
					//var total_timeout_before_actions = total_timeout + 0;
					// PROCESS THESE ABILITIES

					process_ability(unit, ability, side_string, side, origin_unit);
					if(ability['remove_ability'] != undefined && ability['remove_ability'] == true)
					{
						delete unit['abilities'][ability_key];
						if(unit['text'].replace(ability['ability_text'], '') != unit['text'])
						{
							unit['text'] = unit['text'].replace(ability['ability_text'], '');
							$('.unit_' + unit['unit_id'] + ' .card_text').html(unit['text']);
						}
					}

					// UNZOOM UNIT
					/*if(total_timeout_before_actions < total_timeout)
					{
						setTimeout(function(){
							$('.unit_' + unit_id).removeClass('zoom');
						},total_timeout);
					}*/
				}
			});
		}
	});
	if(side == 1)
	{
		$.each(deck_cards, function(card_id, card){
			
			if(available_cards[card['card_id']]['proc_from_grave'] != undefined && available_cards[card['card_id']]['proc_from_grave'] == proc && card['status'] == 'grave')
			{
				if(available_cards[card['card_id']]['type'] == 'spell')
				{
					auto_spell_cast(card_id,1);
				}
				else
				{
					if(got_enough_mana = check_have_mana(player_mana, available_cards[card['card_id']]['cost'], card['grave_cost']) == true)
					{
						var summon_slot = find_random_empty_slot(undefined, 1, undefined, undefined, undefined, card['card_id'], undefined, undefined, undefined, undefined);
						if(summon_slot['col'] != 0 && summon_slot['row'] != 0)
						{
							pay_mana_costs(player_mana, available_cards[card['card_id']]['cost'], card['grave_cost']);
							selected_card_id = card_id;
							summon_unit(card['card_id'], summon_slot['col'], summon_slot['row'], 1, 'player');
							deck_cards[card_id]['status'] = 'in_play';
						}
					}
					
				}
			}
		});
	}
	if(side == 2)
	{
		$.each(enemy_deck_cards, function(card_id, card){
			
			if(available_cards[card['card_id']]['proc_from_grave'] != undefined && available_cards[card['card_id']]['proc_from_grave'] == proc && card['status'] == 'grave')
			{
				if(available_cards[card['card_id']]['type'] == 'spell')
				{
					auto_spell_cast(card_id,2);
				}
				else
				{
					if(got_enough_mana = check_have_mana(enemy_mana, available_cards[card['card_id']]['cost'], card['grave_cost']) == true)
					{
						var summon_slot = find_random_empty_slot(undefined, 1, undefined, undefined, undefined, card['card_id'], undefined, undefined, undefined, undefined);
						if(summon_slot['col'] != 0 && summon_slot['row'] != 0)
						{
							pay_mana_costs(enemy_mana, available_cards[card['card_id']]['cost'], card['grave_cost']);
							selected_card_id = card_id;
							summon_unit(card['card_id'], summon_slot['col'], summon_slot['row'], 2, 'enemy');
							enemy_deck_cards[card_id]['status'] = 'in_play';
						}
					}
				}

			}
		});
	}
	
}

function zoom_unit(unit_id){

	if(combat_units[unit_id] != undefined && (combat_units[unit_id]['zoomed'] == undefined || combat_units[unit_id]['zoomed'] == false))
	{
		combat_units[unit_id]['zoomed'] = true;
		if(combat_units[unit_id]['type'] == 'gem')
		{
			setTimeout(function(){
				$('.' + combat_units[unit_id]['side_string'] + '_mana .gem_' + combat_units[unit_id]['card_id']).addClass('zoom');
			},total_timeout);
		}
		else
		{	
			setTimeout(function(){
				$('.unit_' + unit_id).addClass('zoom');
			},total_timeout);
		}
		total_timeout += game_speed / 2;
	}
		
	
}

function unzoom_unit(unit_id){
	
	if(combat_units[unit_id] != undefined && (combat_units[unit_id]['zoomed'] == undefined || combat_units[unit_id]['zoomed'] == true))
	{
		combat_units[unit_id]['zoomed'] = false;
		if(combat_units[unit_id]['type'] == 'gem')
		{
			setTimeout(function(){
				$('.' + combat_units[unit_id]['side_string'] + '_mana .gem_' + combat_units[unit_id]['card_id']).removeClass('zoom');
			},total_timeout);
		}
		else
		{
			setTimeout(function(){
				$('.unit_' + unit_id).removeClass('zoom');
			},total_timeout);
		}
		total_timeout += game_speed / 2;
	}
}

function process_ability(unit, ability, side_string, side, origin_unit)
{
	if(combat_units[origin_unit] == undefined)
	{
		origin_unit = undefined;
	}

	if(side == undefined)
	{
		side = unit['side'];
	}
	if(side_string == undefined)
	{
		side_string = unit['side_string'];
	}
	/*if(unit['side'] == undefined)
	{
		unit['side'] = side;
	}
	if(unit['side_string'] == undefined)
	{
		unit['side_string'] = side_string;
	}*/
	var other_side = 0;
	if(side == 1)
	{
		other_side = 2;
		other_side_hand = enemy_deck_cards;
	}
	if(side == 2)
	{
		other_side = 1;
		other_side_hand = deck_cards;
	}
	var subtypes_matched = true;
	if(ability['origin_subtypes'] != undefined && origin_unit != undefined)
	{
		if(combat_units[origin_unit]['subtypes'] != undefined)
		{
			var found_subtype = false;
			$.each(combat_units[origin_unit]['subtypes'], function(target_subtype_key, target_subtype){
				$.each(ability['origin_subtypes'], function(subtype_key, subtype){
					if(target_subtype == subtype)
					{
						found_subtype = true;
					}
				});
			});
			if(found_subtype == false)
			{
				subtypes_matched = false;
			}
		}
		else
		{
			subtypes_matched = false;
		}
	}

	if(ability['origin_has_color'] != undefined)
	{
		if(combat_units[origin_unit] != undefined)
		{
			var color_matched = false;
			$.each(combat_units[origin_unit]['cost'], function(cost_color, cost_amount){	
				if(cost_color == ability['origin_has_color'] && cost_amount > 0)
				{
					color_matched = true;
				}
			});
			if(color_matched == false)
			{
				subtypes_matched = false;
			}
		}
		else
		{
			subtypes_matched = false;
		}
	}

	if(ability['mana_needed'] != undefined)
	{
		var mana_pool = enemy_mana;
		if(side == 1){mana_pool = player_mana;}

		$.each(ability['mana_needed'], function(color, amount){
			if(amount > mana_pool[color])
			{
				subtypes_matched = false;
			}
		});
	}

	if(ability['min_phase'] != undefined && current_phase < ability['min_phase'])
	{
		subtypes_matched = false;
	}

	if(ability['max_phase'] != undefined && current_phase > ability['max_phase'])
	{
		subtypes_matched = false;
	}

	if(ability['needs_adjacent_enemy'] != undefined && ability['needs_adjacent_enemy'] == true && check_has_adjacent_enemy(unit) == false)
	{
		subtypes_matched = false;
	}

	if(ability['origin_not_self'] != undefined && ability['origin_not_self'] == true && origin_unit == unit['unit_id'])
	{
		subtypes_matched = false;
	}

	if(ability['needs_adjacent_enemy'] != undefined && ability['needs_adjacent_enemy'] == false && check_has_adjacent_enemy(unit) == true)
	{
		subtypes_matched = false;
	}

	if(ability['energy_needed'] != undefined && unit['energy'] < ability['energy_needed'])
	{
		subtypes_matched = false;
	}
	if(ability['effect'] == 'latest_success' && latest_success == 0)
	{
		subtypes_matched = false;
	}

	if(ability['min_enemy_hand_cards'] != undefined && count_hand_cards(other_side_hand) < ability['min_enemy_hand_cards'])
	{
		subtypes_matched = false;
	}

	if(ability['min_enemy_deck_cards'] != undefined && count_deck_cards(other_side_hand) < ability['min_enemy_deck_cards'])
	{
		subtypes_matched = false;
	}

	if(ability['min_enemy_units'] != undefined && count_enemy_units_alive(other_side) < ability['min_enemy_units'])
	{
		subtypes_matched = false;
	}

	if(ability['max_creatures_in_play'] != undefined && count_creatures() > ability['max_creatures_in_play'])
	{
		subtypes_matched = false;
	}

	if(ability['max_friendly_structures'] != undefined && count_friendly_structures(side) > ability['max_friendly_structures'])
	{
		subtypes_matched = false;
	}	

	if(ability['proc_on_death'] != undefined && ability['proc_on_death'] == false && unit['hp'] <= 0)
	{
		subtypes_matched = false;
	}

	if(ability['type'] == 'recycle' && ability['target_side'] == 'ally' && unit['side'] == 1 && count_grave_cards(deck_cards) == 0)
	{
		subtypes_matched = false;
	}

	if(ability['type'] == 'recycle' && ability['target_side'] == 'ally' && unit['side'] == 2 && count_grave_cards(enemy_deck_cards) == 0)
	{
		subtypes_matched = false;
	}

	if(ability['type'] == 'move_to_empty' && ability['target'] == 'self')
	{
		if(combat_units[unit['unit_id']] != undefined)
		{
			var move_to_side = 2;
			if(ability['move_to_adjacent'] != undefined)
			{
				if(ability['move_to_side'] != undefined && (ability['move_to_side'] == 'ally' && unit['side'] == 1) || (ability['move_to_side'] == 'enemy' && unit['side'] == 2)){move_to_side = 1;}
			}
			if(ability['move_to_side'] == 'any')
			{
				move_to_side = 'any';
			}
			if(unit['type'] == 'structure')
			{
				var new_slot = find_random_empty_structure_slot(ability['move_to_adjacent'], unit['side'], undefined, undefined, undefined, ability['move_to_type']);
			}
			if(unit['type'] == 'creature')
			{
				var new_slot = find_random_empty_slot(ability['move_to_adjacent'], move_to_side, undefined, undefined, ability['move_to_max_hp'], undefined, unit['unit_key'], ability['move_to_type'], ability['specific_slot'], unit['unit_id']);
			}
			if(new_slot['col'] == 0 && new_slot['row'] == 0)
			{
				subtypes_matched = false;
			}
		}
		
	}

	if(ability['type'] == 'set_strength' && ability['target'] == 'self' && unit['strength'] == calculate_effect(unit, ability['effect'], unit['unit_id'], ability['effect_multiplier']))
	{
		subtypes_matched = false;
	}

	if(subtypes_matched == false)
	{
		latest_success = 0;
	}

	

	if((ability['chance'] == undefined || (Math.random() * 100) < ability['chance']) && subtypes_matched == true)
	{
		var all_targets = {};
		if(ability['type'] != undefined)
		{
			if(ability['target_amount'] !== undefined)
			{
				all_targets = find_targets(ability,unit,origin_unit);
				if(count_object(all_targets) > 0)
				{
					if((ability['proc'] != 'on_cast' || ability['target'] != 'random') && ability['type'] != 'move_to_empty' && (unit['dead'] == undefined || unit['dead'] == false) && (ability['do_not_zoom'] == undefined)){zoom_unit(unit['unit_id']);}
				}
				else
				{
					if(ability['on_failure'] != undefined)
					{
						$.each(ability['on_failure'], function(new_effect_id, new_effect){
							process_ability(unit, new_effect, unit['side_string'], unit['side'], unit['card_id']);
						});
					}
				}
				var temp_latest_success = latest_success;
				$.each(all_targets, function(useless_key, target_id){
					latest_success = temp_latest_success;
					if(ability['effect_count'] == undefined){ability['effect_count'] = 1;}
					for (var i = 1; i <= ability['effect_count']; i++) {
						if(i > 1){total_timeout += game_speed;}
						process_effect(unit, target_id, ability, calculate_effect(unit, ability['effect'], target_id,ability['effect_multiplier']),side);
					};
				});
			}
			else
			{
				if(unit != undefined && (ability['proc'] != 'on_cast' || ability['target'] != 'random') && ability['type'] != 'move_to_empty' && (unit['dead'] == undefined || unit['dead'] == false) && (ability['do_not_zoom'] == undefined)){zoom_unit(unit['unit_id']);}
				if(ability['effect_count'] == undefined){ability['effect_count'] = 1;}
				for (var i = 1; i <= ability['effect_count']; i++) {
					if(i > 1){total_timeout += game_speed;}
					process_effect(unit, origin_unit, ability, calculate_effect(unit, ability['effect'], undefined,ability['effect_multiplier']),side);
				};
			}
		}
		else
		{
			if(ability['target'] != undefined && ability['effects'] != undefined)
			{
				if(ability['target_amount'] !== undefined)
				{
					all_targets = find_targets(ability,unit,origin_unit);
				}
				if(count_object(all_targets) > 0)
				{
					
					
					$.each(all_targets, function(useless_key, unit_key){
						$.each(ability['effects'], function(effect_key, effect){
							if(effect['type'] != 'move_to_empty' && effect['type'] != undefined && (unit['dead'] == undefined || unit['dead'] == false) && (effect['do_not_zoom'] == undefined)){zoom_unit(unit['unit_id']);}
							if(effect['target'] == undefined)
							{
								var effect_amount = calculate_effect(unit, effect['effect'], unit_key,effect['effect_multiplier']);
								if(effect['effect_count'] == undefined){effect['effect_count'] = 1;}
								for (var i = 1; i <= effect['effect_count']; i++) {
									if(i > 1){total_timeout += game_speed;}
									process_effect(unit, unit_key, effect, effect_amount,side);
								};
							}
							else
							{
								if(effect['effect_count'] == undefined){effect['effect_count'] = 1;}
								for (var i = 1; i <= effect['effect_count']; i++) {
									if(i > 1){total_timeout += game_speed;}
									if(combat_units[unit_key] != undefined)
									{
										process_ability(combat_units[unit_key], effect, combat_units[unit_key]['side_string'], combat_units[unit_key]['side']);
									}
								};
							}
						});
					});
				}
				else
				{
					if(ability['on_failure'] != undefined)
					{
						$.each(ability['on_failure'], function(new_effect_id, new_effect){
							process_ability(unit, new_effect, unit['side_string'], unit['side'], undefined);
						});
					}
				}
			}
		}
		if(unit != undefined)
		{
			total_timeout += game_speed / 2;
			unzoom_unit(unit['unit_id']);
		}

		return true;
	}
	else
	{
		if(ability['on_failure'] != undefined)
		{

			$.each(ability['on_failure'], function(new_effect_id, new_effect){
				process_ability(unit, new_effect, unit['side_string'], unit['side'], undefined);
			});
		}

		return false;
	}

}

function calculate_effect(origin_unit, effect, target_unit_id, effect_multiplier){

	if(effect != undefined)
	{
		var calculated_effect = effect;

		if(origin_unit != undefined)
		{
			if(calculated_effect == 'origin_cost')
			{
				var total_cost = 0;
				$.each(origin_unit['cost'], function(color, amount){
					total_cost += amount;
				});
				calculated_effect = total_cost;
				if(origin_unit['original_side'] == 1)
				{
					calculated_effect += deck_cards[origin_unit['card_id']]['grave_cost'];
				}
				if(origin_unit['original_side'] == 2)
				{
					calculated_effect += enemy_deck_cards[origin_unit['card_id']]['grave_cost'];
				}
			}
			if(calculated_effect == 'strength')
			{
				calculated_effect = origin_unit['strength'];
			}
			if(calculated_effect == 'own_burn' && origin_unit['burning'] != undefined)
			{
				calculated_effect = origin_unit['burning'];
			}
			if(calculated_effect == 'max_hp')
			{
				calculated_effect = origin_unit['max_hp'];
			}
			if(calculated_effect == 'origin_hp')
			{
				calculated_effect = origin_unit['hp'];
			}
			if(calculated_effect == 'current_energy')
			{
				calculated_effect = origin_unit['energy'];
			}
			if(calculated_effect == 'adjacent_friendly_structure_count')
			{
				calculated_effect = count_adjacent_friendly_structures(origin_unit);
			}
			if(calculated_effect == 'adjacent_enemy_units')
			{
				calculated_effect = count_adjacent_enemy_units(origin_unit);
			}
			
			if(calculated_effect == 'ally_creature_count')
			{
				calculated_effect = friendly_creatures_on_side(origin_unit['side']);
			}
			if(calculated_effect == 'enemy_creature_count')
			{
				if(origin_unit['side'] == 0)
				{
					calculated_effect = friendly_creatures_on_side(1) + friendly_creatures_on_side(2);
				}
				if(origin_unit['side'] == 1)
				{
					calculated_effect = friendly_creatures_on_side(0) + friendly_creatures_on_side(2);
				}
				if(origin_unit['side'] == 2)
				{
					calculated_effect = friendly_creatures_on_side(0) + friendly_creatures_on_side(1);
				}
			}
			if(calculated_effect == 'ally_structure_count')
			{
				calculated_effect = friendly_structures_on_side(origin_unit['side']);
			}
			if(calculated_effect == 'enemy_structure_count')
			{
				if(origin_unit['side'] == 0)
				{
					calculated_effect = friendly_structures_on_side(1) + friendly_structures_on_side(2);
				}
				if(origin_unit['side'] == 1)
				{
					calculated_effect = friendly_structures_on_side(0) + friendly_structures_on_side(2);
				}
				if(origin_unit['side'] == 2)
				{
					calculated_effect = friendly_structures_on_side(0) + friendly_structures_on_side(1);
				}
			}
			if(calculated_effect == 'dead_ally_creatures')
			{
				if(origin_unit['side'] == 1)
				{
					calculated_effect = count_grave_cards(deck_cards, 'creature');
				}
				if(origin_unit['side'] == 2)
				{
					calculated_effect = count_grave_cards(enemy_deck_cards, 'creature');
				}
			}
			if(calculated_effect == 'grave_cards')
			{
				if(origin_unit['side'] == 1)
				{
					calculated_effect = count_grave_cards(deck_cards);
				}
				if(origin_unit['side'] == 2)
				{
					calculated_effect = count_grave_cards(enemy_deck_cards);
				}
			}
			if(calculated_effect == 'ally_hero_hp')
			{
				if(origin_unit['side'] == 1)
				{
					calculated_effect = player_hp;
				}
				if(origin_unit['side'] == 2)
				{
					calculated_effect = enemy_hp;
				}
			}
			/*if(calculated_effect == 'origin_cost')
			{
				var total_cost = 0;
				$.each(origin_unit['cost'], function(color, amount){
					total_cost += amount;
				});
				calculated_effect = total_cost;
				if(origin_unit['original_side'] == 1 && deck_cards[origin_unit['card_id']] != undefined)
				{
					calculated_effect += deck_cards[origin_unit['card_id']]['grave_cost'];
				}
				if(origin_unit['original_side'] == 2 && enemy_deck_cards[origin_unit['card_id']] != undefined)
				{
					calculated_effect += enemy_deck_cards[origin_unit['card_id']]['grave_cost'];
				}
			}*/
		}
		if(target_unit_id != undefined)
		{
			if(calculated_effect == 'target_strength')
			{
				calculated_effect = combat_units[target_unit_id]['strength'];
			}
			if(calculated_effect == 'target_hp')
			{
				calculated_effect = combat_units[target_unit_id]['hp'];
			}
			if(calculated_effect == 'target_current_damage')
			{
				calculated_effect = combat_units[target_unit_id]['max_hp'] - combat_units[target_unit_id]['hp'];
			}
			if(calculated_effect == 'target_cost')
			{
				var total_cost = 0;
				$.each(combat_units[target_unit_id]['cost'], function(color, amount){
					total_cost += amount;
				});
				calculated_effect = total_cost;
				if(combat_units[target_unit_id]['original_side'] == 1 && deck_cards[combat_units[target_unit_id]['card_id']] != undefined)
				{
					calculated_effect += deck_cards[combat_units[target_unit_id]['card_id']]['grave_cost'];
				}
				if(combat_units[target_unit_id]['original_side'] == 2 && enemy_deck_cards[combat_units[target_unit_id]['card_id']] != undefined)
				{
					calculated_effect += enemy_deck_cards[combat_units[target_unit_id]['card_id']]['grave_cost'];
				}
			}
			
		}

		if(calculated_effect == 'creatures_in_play')
		{
			calculated_effect = count_creatures();
		}

		if(calculated_effect == 'latest_success')
		{
			calculated_effect = latest_success;
		}

		if(calculated_effect == 'current_phase')
		{
			calculated_effect = current_phase;
		}
		
		if(effect_multiplier != undefined)
		{
			//console.log(calculated_effect + ' * ' + effect_multiplier + ' = ' + round_by_percent(calculated_effect * effect_multiplier))
			calculated_effect = round_by_percent(calculated_effect * effect_multiplier);
		}

		if(parseInt(calculated_effect) != calculated_effect)
		{
			calculated_effect = 0;
		}

		return calculated_effect;
	}
	else
	{
		return 0;
	}
}

function process_effect(origin_unit, target_id, effect, effect_amount,side){

	if(combat_alive == false){return false;}

	var effect_success = false;
	var can_proc = true;

	if(effect['needs_owned'] != undefined && count_specific_ally(side, effect['needs_owned']) == 0)
	{
		can_proc = false;
		total_timeout -= game_speed;
	}

	if(origin_unit != undefined && (effect['effect_chance'] == undefined || (Math.random() * 100) < effect['effect_chance']) && can_proc == true)
	{
		if(effect['type'] == 'gain_mana')
		{
			var mana_pool = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){mana_pool = player_mana;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){mana_pool = enemy_mana;}

			var mana_chances = effect['mana_chances'];
			if(effect['mana_chances'] == 'owned_gems')
			{
				var mana_chances = {
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
				};
				if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
				{
					$.each(player_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] += amount;
						});
					});
				}
				else
				{
					$.each(enemy_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] += amount;
						});
					});
				}
			}
			if(effect['mana_chances'] == 'not_owned_gems')
			{
				var mana_chances = {
					blue: 	1,
					red: 	1,
					green: 	1,
					purple: 1,
					orange: 1,
					yellow: 1
				};
				if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
				{
					$.each(player_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] = 0;
						});
					});
				}
				else
				{
					$.each(enemy_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] = 0;
						});
					});
				}
			}



			var mana_gained = gain_mana_from_card(mana_chances, calculate_effect(origin_unit, effect['mana_amount'],target_id,effect['effect_multiplier']), mana_pool, origin_unit);
			latest_success = mana_gained;
			if(mana_gained == calculate_effect(origin_unit, effect['mana_amount'],target_id,effect['effect_multiplier']))
			{
				effect_success = true;
			}
		}

		if(effect['type'] == 'reduce_mana')
		{
			var mana_pool = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){mana_pool = player_mana;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){mana_pool = enemy_mana;}

			var mana_chances = effect['mana_chances'];
			if(effect['mana_chances'] == 'owned_gems')
			{
				var mana_chances = {
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0
				};
				if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
				{
					$.each(player_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] += amount;
						});
					});
				}
				if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1))
				{
					$.each(enemy_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] += amount;
						});
					});
				}
			}
			if(effect['mana_chances'] == 'not_owned_gems')
			{
				var mana_chances = {
					blue: 	1,
					red: 	1,
					green: 	1,
					purple: 1,
					orange: 1,
					yellow: 1
				};
				if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
				{
					$.each(player_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] = 0;
						});
					});
				}
				if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1))
				{
					$.each(enemy_gems, function(slot, gem_id){
						$.each(available_cards[gem_id]['abilities'][0]['mana_chances'], function(color, amount){
							mana_chances[color] = 0;
						});
					});
				}
			}

			var reduced_mana = reduce_mana(mana_chances, calculate_effect(origin_unit, effect['mana_amount'],undefined,effect['effect_multiplier']), mana_pool, origin_unit);
			latest_success = reduced_mana;
			if(reduced_mana == calculate_effect(origin_unit, effect['mana_amount'],undefined,effect['effect_multiplier']))
			{
				effect_success = true;
			}

		}

		if(effect['type'] == 'add_card')
		{
			var cards_added = 0;
			var hand_side = 0;
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_side = 1;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_side = 2;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = add_card(hand_side, effect['card_id'], effect['status'], effect['grave_cost']);
				if(card_drawn == true)
				{
					cards_added++;
					total_timeout += game_speed / 2;
				}	
			};
			latest_success = cards_drawn;
			if(cards_added == effect_amount)
			{
				effect_success = true;
			}
		}
		if(effect['type'] == 'draw_card')
		{
			var cards_drawn = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = draw_card(hand_cards, effect['subtypes'], effect['card_type'], effect['card_id']);
				if(card_drawn == true)
				{
					cards_drawn++;
					total_timeout += game_speed / 2;
					show_player_hand();
					show_enemy_hand();
				}	
			};
			latest_success = cards_drawn;
			if(cards_drawn == effect_amount)
			{
				effect_success = true;
			}
		}
		if(effect['type'] == 'mill_card')
		{
			var cards_drawn = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = mill_card(hand_cards, effect['subtypes'], effect['card_type']);
				if(card_drawn == true)
				{
					cards_drawn++;
					total_timeout += game_speed / 2;
					show_player_hand();
					show_enemy_hand();
				}	
			};
			latest_success = cards_drawn;
			if(cards_drawn == effect_amount)
			{
				effect_success = true;
			}
		}
		if(effect['type'] == 'discard_card')
		{
			var cards_discarded = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = discard_random_card(hand_cards, effect['card_type'], side);
				if(card_drawn == true)
				{
					total_timeout += game_speed / 2;
					cards_discarded++;
					show_player_hand();
					show_enemy_hand();
					
				}	
			};
			latest_success = cards_discarded;
			if(cards_discarded == effect_amount)
			{
				effect_success = true;
			}
		}
		if(effect['type'] == 'reserve_card')
		{
			var cards_discarded = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = reserve_random_card(hand_cards, effect['card_type'], side);
				if(card_drawn == true)
				{
					total_timeout += game_speed / 2;
					cards_discarded++;
					show_player_hand();
					show_enemy_hand();
					
				}	
			};
			latest_success = cards_discarded;
			if(cards_discarded == effect_amount)
			{
				effect_success = true;
			}
		}

		if(effect['type'] == 'reclaim')
		{
			var cards_discarded = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = reclaim_card(hand_cards, effect['reclaim_type'], effect['subtypes'], effect['card_id']);
				if(card_drawn == true)
				{
					total_timeout += game_speed / 2;
					cards_discarded++;
					show_player_hand();
					show_enemy_hand();
				}	
			};
			latest_success = cards_discarded;
			if(cards_discarded == effect_amount)
			{
				effect_success = true;
			}
		}

		if(effect['type'] == 'recycle')
		{
			if(side == 0){return false;}
			var cards_discarded = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = recycle_card(hand_cards, effect['reclaim_type']);
				if(card_drawn == true)
				{
					total_timeout += game_speed / 2;
					cards_discarded++;
					show_player_hand();
					show_enemy_hand();
				}	
			};
			latest_success = cards_discarded;
			if(cards_discarded == effect_amount)
			{
				effect_success = true;
			}
		}

		if(effect['type'] == 'remove_from_grave')
		{
			var cards_discarded = 0;
			var hand_cards = {};
			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2)){hand_cards = deck_cards;}
			if((effect['target_side'] == 'ally' && side == 2) || (effect['target_side'] == 'enemy' && side == 1)){hand_cards = enemy_deck_cards;}
			for (var i = effect_amount - 1; i >= 0; i--) {
				var card_drawn = remove_card_from_grave(hand_cards, effect['remove_type']);
				if(card_drawn == true)
				{
					total_timeout += game_speed / 2;
					cards_discarded++;
					show_player_hand();
					show_enemy_hand();
				}	
			};
			latest_success = cards_discarded;
			if(cards_discarded == effect_amount)
			{
				effect_success = true;
			}
		}
		

		if(effect['type'] == 'hero_hp')
		{
			adjust_hero_hp(effect, effect_amount, side, origin_unit);
		}


		if(effect['type'] == 'summon')
		{
			var amount_summoned = effect_amount;
			for (var i = 0; i < amount_summoned; i++) {
				
				var unit_id_to_summon = 0;
				var total_summon_chance = 0;
				$.each(effect['card_id'], function(possible_card_id, summon_chance){
					total_summon_chance += summon_chance;
				});
				var chosen_id_to_summon = Math.random() * total_summon_chance;
				$.each(effect['card_id'], function(possible_card_id, summon_chance){
					chosen_id_to_summon -= summon_chance;
					if(chosen_id_to_summon > -1 * summon_chance && chosen_id_to_summon < 0)
					{
						unit_id_to_summon = possible_card_id;
					}
				});

				if(available_cards[unit_id_to_summon] == undefined)
				{
					var cards_matched = {};
					$.each(available_cards, function(card_id, card){
						var matched_card_to_summon = false;
						if(card['card_type'] == matched_card_to_summon)
						{
							matched_card_to_summon = true;
						}
						else
						{
							$.each(card['subtypes'], function(useless_key, subtype){
								if(unit_id_to_summon == subtype)
								{
									matched_card_to_summon = true;
								}
								if(subtype == 'needs_origin')
								{
									matched_card_to_summon = false;
								}
							});
						}
						if(matched_card_to_summon == true)
						{
							cards_matched[card_id] = true;
						}
					});
					if(count_object(cards_matched) > 0)
					{
						console.log(cards_matched);
						unit_id_to_summon = get_random_key_from_object(cards_matched);
					}
				}

				if(unit_id_to_summon != 'none' && available_cards[unit_id_to_summon] != undefined)
				{
					if(origin_unit != undefined && effect['specific_side'] == undefined)
					{
						var all_possible_slots = ai_find_all_possible_spots(available_cards[unit_id_to_summon]['type'], origin_unit['side'], true, undefined);
					}
					var side_to_summon = 0;
					var side_to_summon_string = 'neutral';
					if(origin_unit != undefined && effect['specific_side'] != undefined)
					{
						var chosen_side_to_summon = get_random_key_from_object_based_on_num_value(effect['specific_side']);
						if(chosen_side_to_summon == 'ally' && origin_unit['side'] == 1 || chosen_side_to_summon == 'enemy' && origin_unit['side'] == 2)
						{
							side_to_summon = 1;
							side_to_summon_string = 'player';
						}
						if(chosen_side_to_summon == 'ally' && origin_unit['side'] == 2 || chosen_side_to_summon == 'enemy' && origin_unit['side'] == 1)
						{
							side_to_summon = 2;
							side_to_summon_string = 'enemy';
						}
						if(chosen_side_to_summon == 'enemy' && origin_unit['side'] == 0)
						{
							if(Math.random() > 0.5)
							{
								side_to_summon = 1;
								side_to_summon_string = 'player';
							}
							else
							{
								side_to_summon = 2;
								side_to_summon_string = 'enemy';
							}
						}
						var all_possible_slots = ai_find_all_possible_spots(available_cards[unit_id_to_summon]['type'], side_to_summon, true, undefined);
					}
					if(origin_unit == undefined)
					{
						var all_possible_slots = ai_find_all_possible_spots(available_cards[unit_id_to_summon]['type']);
					}
					
					
					if(effect['summon_position'] != undefined)
					{
						$.each(all_possible_slots, function(possible_slot_id, possible_slot){
							if (check_units_position(possible_slot, origin_unit, effect['summon_position']) == false)
							{
								delete all_possible_slots[possible_slot_id];
							}
						});
					}
					var best_slots_count = count_object(all_possible_slots);
					var empty_slot = {col:0,row:0};
					var chosen_slot = (Math.random() * best_slots_count);
					
					$.each(all_possible_slots, function(slot_id, slot){
						chosen_slot -= 1;
						if(chosen_slot > -1 && chosen_slot < 0)
						{
							empty_slot = slot;
						}
					});

					if(effect['summon_position'] != undefined && effect['summon_position'] == 'same_slot')
					{
						empty_slot = {col:origin_unit['col'],row:origin_unit['row']};
					}
					/*if(available_cards[unit_id_to_summon]['type'] == 'creature')
					{
						var empty_slot = find_random_empty_slot();
					}
					if(available_cards[unit_id_to_summon]['type'] == 'structure')
					{
						var empty_slot = find_random_empty_structure_slot(undefined, side);
					}*/
					if(empty_slot['col'] != 0)
					{
						selected_card_id = undefined;
						if(effect['specific_side'] == undefined)
						{
							summon_unit(unit_id_to_summon, empty_slot['col'], empty_slot['row'], origin_unit['side'], origin_unit['side_string'],effect['target_side']);
						}
						else
						{
							summon_unit(unit_id_to_summon, empty_slot['col'], empty_slot['row'], side_to_summon, side_to_summon_string,effect['target_side']);
							
						}
						effect_success = true;
					}
					else
					{
						effect_success = false;
					}
				}
			};
		}
		if(effect['type'] == 'resummon')
		{
			if(target_id == origin_unit['unit_id'])
			{
				death_blocked = true;
			}
			var original_card_id = combat_units[target_id]['card_key'];
			if(combat_units[target_id]['transformed_from'] != undefined)
			{
				original_card_id = combat_units[target_id]['transformed_from'];
			}
			var current_col = combat_units[target_id]['col'];
			var current_row = combat_units[target_id]['row'];
			var current_side = combat_units[target_id]['side'];
			var current_side_string = combat_units[target_id]['side_string'];
			var original_side = combat_units[target_id]['original_side'];
			selected_card_id = combat_units[target_id]['card_id'];
			unit_disappear(target_id, false);
			summon_unit(original_card_id, current_col, current_row, current_side, current_side_string, original_side, original_card_id, true, target_id);
			effect_success = true;
			//console.log('resummoned');
		}

		if(effect['type'] == 'resurrect')
		{
			var can_resurrect = true;
			$.each(combat_units, function(unit_id_to_check, unit_to_check){
				if(unit_to_check['col'] == combat_units[target_id]['col'] && unit_to_check['row'] == combat_units[target_id]['row'] && unit_to_check['hp'] > 0)
				{
					can_resurrect = false;
				}
			});
			if(combat_units[target_id]['max_hp'] > 0 && combat_units[target_id]['dead'] != undefined && combat_units[target_id]['dead'] == true && can_resurrect == true)
			{
				combat_units[target_id]['dead'] = false;
				combat_units[target_id]['hp'] = 1;
				var target_new_hp = combat_units[target_id]['hp'];
				var unit_key = target_id;
				var current_hp_percent = 0;
				if(combat_units[target_id]['max_hp'] > 0)
				{
					current_hp_percent = Math.floor((combat_units[target_id]['hp'] / combat_units[target_id]['max_hp']) * 100);
				}
				setTimeout(function(){
					$('.combat.unit_' + unit_key).removeClass("zoom");
					$('.combat.unit_' + unit_key).removeClass("shake");
					$('.combat.unit_' + unit_key).removeClass("dead");
				},total_timeout + game_speed);
				setTimeout(function(){
					$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
					$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
				},total_timeout + game_speed);
				/*if(origin_unit['unit_id'] != unit_key)
				{
					setTimeout(function(){
						$('.combat.unit_' + unit_key).removeClass("zoom");
					},total_timeout + game_speed * 1.5);
				}*/
				effect_success = true;
				generate_procs('resurrected', origin_unit['unit_id']);
			}
			else
			{
				effect_success = false;
			}
			//console.log('resurrected');
		}


		if(combat_units[target_id] !== undefined || origin_unit['type'] == 'gem')
		{

			if(origin_unit['type'] == 'spell')
			{
				$.each(combat_units[target_id]['abilities'], function(ability_key, ability){
					if(ability['proc'] == 'effected_by_spell')
					{
						process_ability(combat_units[target_id], ability, combat_units[target_id]['side_string'], combat_units[target_id]['side'], origin_unit['unit_id']);
					}
				});
			}


			if(effect['type'] == 'damage' && combat_units[target_id] !== undefined && effect_amount > 0)
			{
				/*if(effect['fake_attack'] != undefined && effect['fake_attack'] == true)
				{
					$.each(origin_unit['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'before_attack')
						{
							process_ability(origin_unit, ability, origin_unit['side_string'], origin_unit['side'], target_id);
						}
					});
					$.each(combat_units[target_id]['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'being_attacked')
						{
							process_ability(combat_units[target_id], ability, combat_units[target_id], combat_units[target_id], origin_unit['unit_id']);
						}
					});
					
				}*/
				latest_success = unit_receive_damage(origin_unit['unit_id'], target_id, effect_amount);

				if(latest_success > 0)
				{
					effect_success = true;
				}

				generate_procs('dealt_damage', origin_unit['unit_id']);
				
				
				/*if(effect['fake_attack'] != undefined && effect['fake_attack'] == true)
				{
					$.each(origin_unit['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'attacked_unit')
						{
							process_ability(origin_unit, ability, origin_unit['side_string'], origin_unit['side'], target_id);
						}
					});
					$.each(origin_unit['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'after_attack')
						{
							process_ability(origin_unit, ability, origin_unit['side_string'], origin_unit['side'], target_id);
						}
					});
				}*/
			}

			if(effect['type'] == 'attack_unit' && combat_units[target_id] !== undefined)
			{
				effect_success = process_single_attack(target_id, false, effect_amount, effect['attack_side'], combat_units[target_id]['attack_specials']);
				if(effect_success == true){unzoom_unit(target_id);}
			}

			if(effect['type'] == 'attack' && combat_units[target_id] !== undefined)
			{
				effect_success = process_single_attack(target_id, true, effect_amount, effect['attack_side'], combat_units[target_id]['attack_specials']);
				if(effect_success == true){unzoom_unit(target_id);}
			}

			if(effect['type'] == 'adjust_energy' && combat_units[target_id] !== undefined)
			{
				latest_success = unit_adjust_energy(origin_unit['unit_id'], target_id, effect_amount);
				if(latest_success == effect_amount || latest_success == effect_amount * -1)
				{
					effect_success = true;
				}
			}

			if(effect['type'] == 'stun' && combat_units[target_id] !== undefined)
			{
				latest_success = unit_adjust_stunned(origin_unit['unit_id'], target_id, effect_amount);
				if(latest_success == effect_amount || latest_success == effect_amount * -1)
				{
					effect_success = true;
				}
			}

			if(effect['type'] == 'poison' && combat_units[target_id] !== undefined)
			{
				latest_success = unit_adjust_poisoned(origin_unit['unit_id'], target_id, effect_amount);
				if(latest_success == effect_amount || latest_success == effect_amount * -1)
				{
					effect_success = true;
				}
			}

			if(effect['type'] == 'set_poison' && combat_units[target_id] !== undefined)
			{
				latest_success = unit_adjust_poisoned(origin_unit['unit_id'], target_id, effect_amount, true);
				if(latest_success == effect_amount || latest_success == effect_amount * -1)
				{
					effect_success = true;
				}
			}

			if(effect['type'] == 'burn' && combat_units[target_id] !== undefined)
			{
				latest_success = unit_adjust_burning(origin_unit['unit_id'], target_id, effect_amount);
				if(latest_success == effect_amount || latest_success == effect_amount * -1)
				{
					effect_success = true;
				}
			}

			if(effect['type'] == 'set_burn' && combat_units[target_id] !== undefined)
			{
				latest_success = unit_adjust_burning(origin_unit['unit_id'], target_id, effect_amount, true);
				if(latest_success == effect_amount || latest_success == effect_amount * -1)
				{
					effect_success = true;
				}
			}

			if(effect['type'] == 'set_type' && combat_units[target_id] !== undefined)
			{

				combat_units[target_id]['type'] = effect['effect'];
				effect_success = true;
				
			}

			if(effect['type'] == 'move_to_empty' && combat_units[target_id] !== undefined)
			{
				var move_to_side = 2;
				if(effect['move_to_adjacent'] != undefined)
				{
					if(effect['move_to_side'] != undefined && (effect['move_to_side'] == 'ally' && combat_units[target_id]['side'] == 1) || (effect['move_to_side'] == 'enemy' && combat_units[target_id]['side'] == 2)){move_to_side = 1;}
				}
				if(effect['move_to_side'] == 'any' || combat_units[target_id]['side'] == 0)
				{
					move_to_side = 'any';
				}
				latest_success = move_to_empty_slot(target_id, effect['move_to_adjacent'], move_to_side, effect, effect['move_to_type'], effect['specific_slot']);
				if(latest_success > 0)
				{
					effect_success = true;
				}
				else
				{
					effect_success = false;
				}
			}

			if(effect['type'] == 'increase_strength')
			{
				latest_success = unit_increase_strength(origin_unit['unit_id'], target_id, effect_amount);
				if(latest_success > 0)
				{
					effect_success = true;
				}
				else
				{
					effect_success = false;
				}
			}
			if(effect['type'] == 'set_strength')
			{
				effect_success = unit_set_strength(origin_unit['unit_id'], target_id, effect_amount);
			}

			if(effect['type'] == 'set_hp')
			{
				effect_success = unit_set_hp(origin_unit['unit_id'], target_id, effect_amount);
				if(origin_unit['hp'] == 0)
				{
					unit_death(origin_unit['unit_id']);
				}
			}
			
			if(effect['type'] == 'decrease_strength')
			{
				latest_success = unit_increase_strength(origin_unit['unit_id'], target_id, effect_amount * -1);
				if(latest_success > 0)
				{
					effect_success = true;
				}
				else
				{
					effect_success = false;
				}
			}
			if(effect['type'] == 'increase_hp')
			{
				if(effect['target'] !== 'self' || origin_unit['hp'] > 0)
				{
					latest_success = unit_increase_hp(origin_unit['unit_id'], target_id, effect_amount);
				}
				if(latest_success > 0)
				{
					effect_success = true;
				}
				else
				{
					effect_success = false;
				}
			}
			if(effect['type'] == 'increase_max_hp')
			{
				if(effect['target'] !== 'self' || origin_unit['hp'] > 0)
				{
					unit_increase_max_hp(origin_unit['unit_id'], target_id, effect_amount);
				}
			}

			if(effect['type'] == 'drain_hp')
			{
				if(effect['target'] !== 'self' || origin_unit['hp'] > 0)
				{
					var drained_amount = unit_drain_hp(origin_unit['unit_id'], target_id, effect_amount);
					unit_increase_hp(origin_unit['unit_id'], origin_unit['unit_id'], drained_amount);
				}
			}

			if(effect['type'] == 'lower_hp')
			{
				if(effect['target'] !== 'self' || origin_unit['hp'] > 0)
				{
					drained_amount = unit_drain_hp(origin_unit['unit_id'], target_id, effect_amount);
				}
			}

			if(effect['type'] == 'increase_stats')
			{
				var ability_effect_hp =  undefined;
				var ability_effect_strength =  undefined;
				var ability_effect_max_hp = undefined;
				if(effect['effect_hp'] != undefined){ability_effect_hp =  calculate_effect(origin_unit, effect['effect_hp'], target_id, effect['effect_multiplier']);}
				if(effect['effect_strength'] != undefined){ability_effect_strength =  calculate_effect(origin_unit, effect['effect_strength'], target_id, effect['effect_multiplier']);}
				if(effect['effect_max_hp'] != undefined){ability_effect_max_hp = calculate_effect(origin_unit, effect['effect_max_hp'], target_id, effect['effect_multiplier']);}
				latest_success = ability_effect_hp + ability_effect_strength;
				if(origin_unit['unit_id'] !== target_id || origin_unit['hp'] > 0)
				{
					unit_increase_stats(origin_unit['unit_id'], target_id, ability_effect_strength, ability_effect_hp, ability_effect_max_hp);
					effect_success = true;
				}
			}

			if(effect['type'] == 'healing')
			{
				latest_success = unit_healing(origin_unit['unit_id'], target_id, effect_amount);
			}

			if(effect['type'] == 'gain_ability')
			{
				effect_success = gain_ability(combat_units[target_id], effect['ability_gained'], effect['ability_text']);
			}
			
			if(effect['type'] == 'turn_into')
			{
				if(combat_units[target_id] != undefined)
				{
					if(target_id == origin_unit['unit_id'])
					{
						death_blocked = true;
					}
					$.each(combat_units[target_id]['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'leave_play')
						{
							process_ability(combat_units[target_id], ability, combat_units[target_id]['side_string'], combat_units[target_id]['side'], origin_unit['unit_id']);
						}
					});
					latest_success = unit_turn_into(target_id, effect['card_id'],origin_unit['unit_id']);
					if(latest_success > 0)
					{
						effect_success = true;
					}
					else
					{
						effect_success = false;
					}
				}
			}

			if(effect['type'] == 'return_in_original')
			{
				if(target_id == origin_unit['unit_id'])
				{
					death_blocked = true;
				}
				selected_card_id = combat_units[target_id]['transformed_from'];
				latest_success = unit_turn_into(target_id, selected_card_id,origin_unit['unit_id'], false);
				if(latest_success > 0)
				{
					effect_success = true;
				}
				else
				{
					effect_success = false;
				}
			}

			if(effect['type'] == 'destroy')
			{
				if(combat_units[target_id] != undefined && (combat_units[target_id]['hp'] > 0 || combat_units[target_id]['hp'] == false))
				{

					latest_success = unit_death(target_id, origin_unit['unit_id']);
					if(latest_success > 0)
					{
						effect_success = true;
					}
					else
					{
						effect_success = false;
					}
				}
			}

			if(effect['type'] == 'disappear')
			{
				if(combat_units[target_id]['hp'] > 0 || combat_units[target_id]['hp'] == false){
					$.each(combat_units[target_id]['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'leave_play')
						{
							process_ability(combat_units[target_id], ability, combat_units[target_id]['side_string'], combat_units[target_id]['side'], origin_unit['unit_id']);
						}
					});
					latest_success = unit_disappear(target_id);
					if(latest_success > 0)
					{
						effect_success = true;
					}
					else
					{
						effect_success = false;
					}
				}
			}
			if(effect['type'] == 'remove_card')
			{
				if(target_id != undefined && combat_units[target_id] != undefined && combat_units[target_id]['card_id']){

					var hand_card_id = combat_units[target_id]['card_id'];

					if(combat_units[target_id]['original_side'] == 1){hand_cards = deck_cards;}
					if(combat_units[target_id]['original_side'] == 2){hand_cards = enemy_deck_cards;}

					var can_remove_card = true;
					if(combat_units[target_id]['card_id'] == undefined){can_remove_card = false;}

					$.each(combat_units[target_id]['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'leave_play')
						{
							process_ability(combat_units[target_id], ability, combat_units[target_id]['side_string'], combat_units[target_id]['side'], origin_unit['unit_id']);
						}
					});
					unit_disappear(target_id);

					if(can_remove_card == true && hand_card_id != undefined && hand_cards[hand_card_id] != undefined)
					{
						delete hand_cards[hand_card_id];
						effect_success = true;
						show_player_hand();
						show_enemy_hand();
					}
				}
			}
			if(effect['type'] == 'unsummon')
			{
				if(combat_units[target_id]['hp'] > 0 || combat_units[target_id]['hp'] == false){
					$.each(combat_units[target_id]['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'leave_play')
						{
							process_ability(combat_units[target_id], ability, combat_units[target_id]['side_string'], combat_units[target_id]['side'], origin_unit['unit_id']);
						}
					});
					latest_success = unit_unsummon(target_id);
					if(latest_success > 0)
					{
						effect_success = true;
					}
					else
					{
						effect_success = false;
					}
				}
			}

			if(effect['type'] == 'return_to_deck')
			{
				if(combat_units[target_id]['hp'] > 0 || combat_units[target_id]['hp'] == false){
					unit_return_to_deck(target_id);
				}
			}

			if(effect['type'] == 'set_side')
			{
				latest_success = unit_set_side(target_id,effect['new_side'],side);
			}
		}
	}

	if(effect_success == true && effect['on_success'] != undefined)
	{
		$.each(effect['on_success'], function(new_effect_id, new_effect){
			process_ability(origin_unit, new_effect, undefined, side, undefined);
		});	
	}
	if(effect_success == true && effect['on_success_from_target'] != undefined)
	{
		$.each(effect['on_success_from_target'], function(new_effect_id, new_effect){
			process_ability(combat_units[target_id], new_effect, combat_units[target_id]['side_string'], combat_units[target_id]['side'], undefined);
		});	
	}
	if(effect_success == false && effect['on_failure'] != undefined)
	{
		$.each(effect['on_failure'], function(new_effect_id, new_effect){
			process_ability(origin_unit, new_effect, origin_unit['side_string'], origin_unit['side'], undefined);
		});	
	}
	if(effect_success == false && effect['on_failure_from_target'] != undefined)
	{
		$.each(effect['on_failure_from_target'], function(new_effect_id, new_effect){
			process_ability(combat_units[target_id], new_effect, combat_units[target_id]['side_string'], combat_units[target_id]['side'], undefined);
		});	
	}
	if(effect_success == true && effect['adjust_own_chance_on_success'] != undefined)
	{
		effect['chance'] += effect['adjust_own_chance_on_success'];
	}
	if(effect_success == false && effect['adjust_own_chance_on_failure'] != undefined)
	{
		effect['chance'] += effect['adjust_own_chance_on_failure']
	}
}

function adjust_hero_hp(effect, effect_amount, side, unit_key){
	var can_adjust = false;
	var effected_side = 0;
	var original_effect = effect_amount + 0;
	if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
	{
		effected_side = 1;
	}
	if((effect['target_side'] == 'enemy' && side == 1) || (effect['target_side'] == 'ally' && side == 2))
	{
		effected_side = 2;
	}
	effect_amount = round_by_percent(effect_amount);
	if(effect_amount < 0 && (effect['can_be_zero'] == undefined || effect['can_be_zero'] == true))
	{
		effect_amount -= get_hero_damage_adjustment(effected_side);
		if(effect_amount > 0)
		{
			effect_amount = 0;
		}
	}
	if(effected_side == 1)
	{
		can_adjust = true;
		if(effect_amount < 0 && (effect_amount * -1) >= player_hp && effect['can_be_zero'] != undefined && effect['can_be_zero'] == false)
		{
			effect_amount = ((player_hp -1) * -1);
		}
		player_hp += effect_amount;
		var new_hp = player_hp;
		var target_hp_string = 'player_hp';
	}
	if(effected_side == 2)
	{
		can_adjust = true;
		if(effect_amount < 0 && (effect_amount * -1) >= enemy_hp && effect['can_be_zero'] != undefined && effect['can_be_zero'] == false)
		{
			effect_amount = ((enemy_hp -1) * -1);
		}
		enemy_hp += effect_amount;
		var new_hp = enemy_hp;
		var target_hp_string = 'enemy_hp';
	}

	if(can_adjust == true)
	{
		latest_success = effect_amount;
		if(latest_success < 0){latest_success *= -1;}
		var player_hp_effect = 'zoom';
		if(original_effect < 0)
		{
			player_hp_effect = 'shake';
		}
		if(original_effect < 0 && effect['can_be_zero'] != undefined && effect['can_be_zero'] == false)
		{
			player_hp_effect = 'unzoom';
		}
		if(original_effect != 0)
		{
			setTimeout(function(){
				$('.' + target_hp_string).addClass(player_hp_effect);
			},total_timeout);
			setTimeout(function(){
				$('.' + target_hp_string).html(new_hp);
			},total_timeout + game_speed / 2);
			setTimeout(function(){
				$('.' + target_hp_string).removeClass(player_hp_effect);
			},total_timeout + game_speed);
			
			total_timeout += game_speed;
		}

		if(effect_amount > 0)
		{
			process_abilities('any_hero_gain_hp', 'player', 1, unit_key);
			process_abilities('any_hero_gain_hp', 'enemy', 2, unit_key);
			process_abilities('any_hero_gain_hp', 'neutral', 0, unit_key);

			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
			{
				process_abilities('ally_hero_gain_hp', 'player', 1, unit_key);
				process_abilities('enemy_hero_gain_hp', 'enemy', 2, unit_key);
			}
			if((effect['target_side'] == 'enemy' && side == 1) || (effect['target_side'] == 'ally' && side == 2))
			{
				process_abilities('enemy_hero_gain_hp', 'player', 1, unit_key);
				process_abilities('ally_hero_gain_hp', 'enemy', 2, unit_key);
			}
		}
		if(effect_amount < 0)
		{
			if(unit_key != undefined && combat_units[unit_key] != undefined)
			{
				$.each(combat_units[unit_key]['abilities'], function(ability_key, ability){
					if(ability['proc'] == 'damage_hero')
					{
						process_ability(combat_units[unit_key], ability, combat_units[unit_key]['side_string'], combat_units[unit_key]['side'], unit_key);
					}
				});
			}
			process_abilities('any_hero_lose_hp', 'player', 1, unit_key);
			process_abilities('any_hero_lose_hp', 'enemy', 2, unit_key);
			process_abilities('any_hero_lose_hp', 'neutral', 0, unit_key);

			if((effect['target_side'] == 'ally' && side == 1) || (effect['target_side'] == 'enemy' && side == 2))
			{
				process_abilities('ally_hero_lose_hp', 'player', 1, unit_key);
				process_abilities('enemy_hero_lose_hp', 'enemy', 2, unit_key);
			}
			if((effect['target_side'] == 'enemy' && side == 1) || (effect['target_side'] == 'ally' && side == 2))
			{
				process_abilities('enemy_hero_lose_hp', 'player', 1, unit_key);
				process_abilities('ally_hero_lose_hp', 'enemy', 2, unit_key);
			}
		}
	}

	if(player_hp < 1 || enemy_hp < 1){combat_alive = false;}
}

function get_hero_damage_adjustment(side){
	var hero_damage_adjustment = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] != side && unit['hero_damage_adjustment'] != undefined)
		{
			hero_damage_adjustment += unit['hero_damage_adjustment'];
		}
		if(unit['side'] == side && unit['own_hero_damage_adjustment'] != undefined)
		{
			hero_damage_adjustment += unit['own_hero_damage_adjustment'];
		}
		
	});

	return hero_damage_adjustment;
}

function move_to_empty_slot(unit_key, has_adjacent, side, effect, move_to_type, specific_slot){

	var slots_moved = 0;
	var rows_moved = 0;
	var cols_moved = 0;

	if(combat_units[unit_key]['type'] == 'structure')
	{
		var new_slot = find_random_empty_structure_slot(has_adjacent, combat_units[unit_key]['side'], undefined, undefined, undefined, move_to_type);
	}
	if(combat_units[unit_key]['type'] == 'creature')
	{
		var new_slot = find_random_empty_slot(has_adjacent, side, undefined, undefined, effect['move_to_max_hp'], undefined, unit_key, move_to_type, specific_slot, unit_key);
	}

	var old_slot = {col:combat_units[unit_key]['col'],row:combat_units[unit_key]['row']};

	if(new_slot['col'] > 0)
	{
		rows_moved = new_slot['row'] - old_slot['row'];
		if(rows_moved < 0){rows_moved *= -1;}
		cols_moved = new_slot['col'] - old_slot['col'];
		if(cols_moved < 0){cols_moved *= -1;}
		slots_moved = rows_moved + cols_moved;

		zoom_unit(unit_key);
		combat_units[unit_key]['col'] = new_slot['col'];
		combat_units[unit_key]['row'] = new_slot['row'];
		setTimeout(function(){
			$('.unit_' + unit_key).removeClass('col_' + old_slot['col']);
		    $('.unit_' + unit_key).removeClass('row_' + old_slot['row']);
		    $('.unit_' + unit_key).addClass('col_' + new_slot['col']);
		    $('.unit_' + unit_key).addClass('row_' + new_slot['row']);
	    },total_timeout + game_speed / 2);
		total_timeout += game_speed / 2;
		unzoom_unit(unit_key);

		generate_procs('moved', unit_key);
	}

	if(slots_moved == 0)
	{
		total_timeout -= game_speed / 2;
	}
	return slots_moved;
}

function unit_set_side(unit_key,new_side,side){
	if(combat_units[unit_key] != undefined)
	{
		var original_side = combat_units[unit_key]['side'];
		if(new_side == 'ally' && side == 1 || new_side == 'enemy' && side == 2)
		{
			var new_side_string = 'player';
			var new_side_int 	= 1;
		}
		if(new_side == 'ally' && side == 2 || new_side == 'enemy' && side == 1)
		{
			var new_side_string = 'enemy';
			var new_side_int 	= 2;
		}

		if(new_side == 'neutral')
		{
			var new_side_string = 'neutral';
			var new_side_int 	= 0;
		}

		combat_units[unit_key]['side'] = new_side_int;
		combat_units[unit_key]['side_string'] = new_side_string;
	
		setTimeout(function(){
			$('.combat.unit_' + unit_key).removeClass("side_" + original_side);
			$('.combat.unit_' + unit_key).addClass("side_" + new_side_int);
		},total_timeout + game_speed);
		//total_timeout += 500;
	}
};

function unit_receive_damage(origin_unit_key, unit_key, amount, ignore_armor){
	var amount_adjusted = 0;
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['hp'] > 0)
	{
		if((ignore_armor == undefined || ignore_armor == false) && combat_units[unit_key]['damage_reduction'] != undefined){
			amount = amount - combat_units[unit_key]['damage_reduction'];
			if(amount < 0)
			{
				amount = 0;
			}

		}
		amount_adjusted = amount;

		if(amount_adjusted > combat_units[unit_key]['hp'])
		{
			amount_adjusted = combat_units[unit_key]['hp'];
		}
		
		var original_hp = combat_units[unit_key]['hp'];
		combat_units[unit_key]['hp'] -= amount;
		combat_units[unit_key]['ai_hp'] -= amount;
		if(combat_units[unit_key]['hp'] < 0){
			combat_units[unit_key]['hp'] = 0;
		}

		var target_new_hp = combat_units[unit_key]['hp'] + 0;
		var current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
		setTimeout(function(){
			$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
			$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
			if($('.combat.unit_' + unit_key).hasClass('shake') == false)
			{
				$('.combat.unit_' + unit_key).addClass("shake");
				setTimeout(function(){
					$('.combat.unit_' + unit_key).removeClass("shake");
				},490);
			}
			
		},total_timeout);
		
		if(target_new_hp == 0)
		{
			total_timeout += game_speed;
		}

		latest_success = amount_adjusted;

		generate_procs('takes_damage', unit_key);

		if(combat_units[origin_unit_key] != undefined && amount_adjusted > 0)
		{
			$.each(combat_units[origin_unit_key]['abilities'], function(ability_key, ability){
				if(ability['proc'] == 'dealt_damage_to')
				{
					process_ability(combat_units[origin_unit_key], ability, combat_units[origin_unit_key]['side_string'], combat_units[origin_unit_key]['side'], unit_key);
				}
			});
		}

		if(combat_units[unit_key] != undefined && amount_adjusted > 0)
		{
			$.each(combat_units[unit_key]['abilities'], function(ability_key, ability){
				if(combat_units[unit_key] != undefined && ability['proc'] == 'take_damage')
				{
					process_ability(combat_units[unit_key], ability, combat_units[unit_key]['side_string'], combat_units[unit_key]['side'], origin_unit_key);
				}
			});
		}
		if(combat_units[unit_key] != undefined)
		{
			if(combat_units[unit_key]['hp'] == 0 && original_hp != 0){
				unit_death(unit_key, origin_unit_key);
			}
		}

		if(combat_units[origin_unit_key] != undefined && combat_units[origin_unit_key]['hp'] > 0 && amount_adjusted > 0)
		{
			$.each(combat_units[origin_unit_key]['abilities'], function(ability_key, ability){
				if(ability['proc'] == 'dealt_damage')
				{
					process_ability(combat_units[origin_unit_key], ability, combat_units[origin_unit_key]['side_string'], combat_units[origin_unit_key]['side'], combat_units[origin_unit_key]['unit_id']);
				}
			});
		}
	}

	if(amount_adjusted < 0)
	{
		amount_adjusted *= -1;
	}

	return amount_adjusted;
};

function unit_adjust_energy(origin_unit_key, unit_key, amount){
	var amount_adjusted = 0;
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['hp'] > 0)
	{
		amount_adjusted = amount;
		combat_units[unit_key]['energy'] += amount;
		if(combat_units[unit_key]['energy'] <= 0){
			amount_adjusted = amount - combat_units[unit_key]['energy'];
			combat_units[unit_key]['energy'] = 0;
			var energy_amount = combat_units[unit_key]['energy'];
			setTimeout(function(){
				//$('.combat.unit_' + unit_key + ' .card_energy').removeClass("active");
				$('.combat.unit_' + unit_key + ' .card_energy .current_energy').html(energy_amount);
			},total_timeout);		
		}
		else
		{
			var energy_amount = combat_units[unit_key]['energy'];
			setTimeout(function(){
				$('.combat.unit_' + unit_key + ' .card_energy').addClass("active");
				$('.combat.unit_' + unit_key + ' .card_energy .current_energy').html(energy_amount);
			},total_timeout);
		}

		
	}

	if(amount_adjusted < 0)
	{
		amount_adjusted *= -1;
	}
	else
	{
		generate_procs('gained_mana',unit_key);
	}

	return amount_adjusted;
}

function unit_adjust_stunned(origin_unit_key, unit_key, amount){
	var amount_adjusted = 0;
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['hp'] > 0)
	{
		if(combat_units[unit_key]['stunned'] == undefined){combat_units[unit_key]['stunned'] = 0;}
		amount_adjusted = amount;
		combat_units[unit_key]['stunned'] += amount;
		if(combat_units[unit_key]['stunned'] <= 0){
			amount_adjusted = amount + combat_units[unit_key]['stunned'];
			combat_units[unit_key]['stunned'] = 0;
		}
		update_stunned(unit_key);
		
	}

	if(amount_adjusted < 0)
	{
		amount_adjusted *= -1;
	}

	return amount_adjusted;
}

function unit_adjust_poisoned(origin_unit_key, unit_key, amount, fixed){
	var amount_adjusted = 0;
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['hp'] > 0)
	{
		if(combat_units[unit_key]['poisoned'] == undefined){combat_units[unit_key]['poisoned'] = 0;}
		amount_adjusted = amount;
		if(fixed == undefined || fixed == false)
		{
			combat_units[unit_key]['poisoned'] += amount;
		}
		else
		{
			combat_units[unit_key]['poisoned'] = amount;
		}
		if(combat_units[unit_key]['poisoned'] <= 0){
			amount_adjusted = amount + combat_units[unit_key]['poisoned'];
			combat_units[unit_key]['poisoned'] = 0;
		}
		update_poisoned(unit_key);
		if(amount_adjusted > 0)
		{	
			generate_procs('poisoned',unit_key);
			setTimeout(function(){
				if($('.combat.unit_' + unit_key).hasClass('shake') == false)
				{
					$('.combat.unit_' + unit_key).addClass("shake");
					setTimeout(function(){
						$('.combat.unit_' + unit_key).removeClass("shake");
					},490);
				}
				
			},total_timeout);
		}
		if(amount_adjusted < 0)
		{
			setTimeout(function(){
				if($('.combat.unit_' + unit_key).hasClass('zoom') == false)
				{
					$('.combat.unit_' + unit_key).addClass("zoom");
					setTimeout(function(){
						$('.combat.unit_' + unit_key).removeClass("zoom");
					},490);
				}
				
			},total_timeout);
		}
		
	}

	if(amount_adjusted < 0)
	{
		amount_adjusted *= -1;
	}

	return amount_adjusted;
}

function unit_adjust_burning(origin_unit_key, unit_key, amount, fixed){
	var amount_adjusted = 0;
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['hp'] > 0)
	{
		if(combat_units[unit_key]['burning'] == undefined){combat_units[unit_key]['burning'] = 0;}
		amount_adjusted = amount;
		if(fixed == undefined || fixed == false)
		{
			combat_units[unit_key]['burning'] += amount;
		}
		else
		{
			combat_units[unit_key]['burning'] = amount;
		}
		if(combat_units[unit_key]['burning'] <= 0){
			amount_adjusted = amount + combat_units[unit_key]['burning'];
			combat_units[unit_key]['burning'] = 0;
		}
		if(amount_adjusted > 0)
		{
			setTimeout(function(){
				if($('.combat.unit_' + unit_key).hasClass('shake') == false)
				{
					$('.combat.unit_' + unit_key).addClass("shake");
					setTimeout(function(){
						$('.combat.unit_' + unit_key).removeClass("shake");
					},490);
				}
				
			},total_timeout);
		}
		if(amount_adjusted < 0)
		{
			setTimeout(function(){
				if($('.combat.unit_' + unit_key).hasClass('zoom') == false)
				{
					$('.combat.unit_' + unit_key).addClass("zoom");
					setTimeout(function(){
						$('.combat.unit_' + unit_key).removeClass("zoom");
					},490);
				}
				
			},total_timeout);
		}
		update_burning(unit_key);
	}

	if(amount_adjusted < 0)
	{
		amount_adjusted *= -1;
	}

	return amount_adjusted;
}



function unit_increase_strength(origin_unit_key, unit_key, amount){
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['strength'] !== false)
	{
		combat_units[unit_key]['strength'] += amount;
		if(combat_units[unit_key]['strength'] < 0){
			combat_units[unit_key]['strength'] = 0;
		}

		var target_new_strength = combat_units[unit_key]['strength'] + 0;
		setTimeout(function(){
			$('.combat.unit_' + unit_key).addClass("zoom");
		},total_timeout);
		setTimeout(function(){
			$('.combat.unit_' + unit_key + ' .card_strength').html(target_new_strength);
		},total_timeout + game_speed);
		if(origin_unit_key != unit_key)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key).removeClass("zoom");
			},total_timeout + game_speed * 1.5);
		}
		//total_timeout += 1500;

		if(amount > 0)
		{
			latest_success = amount;
			process_abilities('any_unit_gain_strength', 'player', 1, unit_key);
			process_abilities('any_unit_gain_strength', 'enemy', 2, unit_key);
			process_abilities('any_unit_gain_strength', 'neutral', 0, unit_key);

			if(combat_units[unit_key]['side'] == 1)
			{
				process_abilities('ally_unit_gain_strength', 'player', 1, unit_key);
				process_abilities('enemy_unit_gain_strength', 'enemy', 2, unit_key);
			}
			if(combat_units[unit_key]['side'] ==  2)
			{
				process_abilities('enemy_unit_gain_strength', 'player', 1, unit_key);
				process_abilities('ally_unit_gain_strength', 'enemy', 2, unit_key);
			}
		}
		if(amount < 0)
		{
			latest_success = amount * -1;
			process_abilities('any_unit_lose_strength', 'player', 1, unit_key);
			process_abilities('any_unit_lose_strength', 'enemy', 2, unit_key);
			process_abilities('any_unit_lose_strength', 'neutral', 0, unit_key);

			if(combat_units[unit_key]['side'] == 1)
			{
				process_abilities('ally_unit_lose_strength', 'player', 1, unit_key);
				process_abilities('enemy_unit_lose_strength', 'enemy', 2, unit_key);
			}
			if(combat_units[unit_key]['side'] == 2)
			{
				process_abilities('enemy_unit_lose_strength', 'player', 1, unit_key);
				process_abilities('ally_unit_lose_strength', 'enemy', 2, unit_key);
			}
		}
		if(amount > 0)
		{
			return amount;
		}
		if(amount < 0)
		{
			return amount * -1;
		}
		if(amount == 0)
		{
			return amount;
		}
	}
};

function unit_set_strength(origin_unit_key, unit_key, amount){
	if(combat_units[unit_key] != undefined)
	{
		combat_units[unit_key]['strength'] = amount;
		if(combat_units[unit_key]['strength'] < 0){
			combat_units[unit_key]['strength'] = 0;
		}

		var target_new_strength = combat_units[unit_key]['strength'] + 0;
		setTimeout(function(){
			$('.combat.unit_' + unit_key).addClass("zoom");
		},total_timeout);
		if(combat_units[unit_key]['strength'] == false)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key + ' .card_strength').addClass('hidden');
			},total_timeout + game_speed);
		}
		else
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key + ' .card_strength').removeClass('hidden');
				$('.combat.unit_' + unit_key + ' .card_strength').html(target_new_strength);
			},total_timeout + game_speed);
		}

		if(origin_unit_key != unit_key)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key).removeClass("zoom");
			},total_timeout + game_speed * 1.5);
		}
		//total_timeout += 1500;
	}

	return true;
};

function unit_set_hp(origin_unit_key, unit_key, amount){
	if(combat_units[unit_key] != undefined && combat_units[unit_key]['hp'] !== false)
	{
		combat_units[unit_key]['hp'] = amount;
		combat_units[unit_key]['max_hp'] = amount;
		if(combat_units[unit_key]['hp'] < 0){
			combat_units[unit_key]['hp'] = 0;
		}
		if(combat_units[unit_key]['max_hp'] < 0){
			combat_units[unit_key]['max_hp'] = 0;
		}

		var target_new_hp = combat_units[unit_key]['max_hp'] + 0;
		var current_hp_percent = 0;
		if(combat_units[unit_key]['max_hp'] > 0)
		{
			current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
		}
		if(origin_unit_key != unit_key)
		{
			zoom_unit(unit_key);
		}
		setTimeout(function(){
			$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
			$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
		},total_timeout + game_speed);
		if(origin_unit_key != unit_key)
		{
			unzoom_unit(unit_key);
		}
		//total_timeout += 1500;
	}

	return true;
};

function unit_increase_hp(origin_unit_key, unit_key, amount){
	var amount_adjusted = 0;
	if(combat_units[unit_key] != undefined)
	{
		if(amount < combat_units[unit_key]['hp'] * -1)
		{
			amount = combat_units[unit_key]['hp'] * -1;
		}
		amount_adjusted = amount;
		if(amount != 0)
		{
			var original_hp = combat_units[unit_key]['hp'];
			combat_units[unit_key]['hp'] += amount;
			combat_units[unit_key]['max_hp'] += amount;
			if(combat_units[unit_key]['hp'] < 0){
				combat_units[unit_key]['hp'] = 0;
			}
			if(combat_units[unit_key]['max_hp'] < 0){
				combat_units[unit_key]['max_hp'] = 0;
			}

			var target_new_hp = combat_units[unit_key]['hp'] + 0;
			var current_hp_percent = 0;
			if(combat_units[unit_key]['max_hp'] > 0)
			{
				current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
			}
			 
			setTimeout(function(){
				$('.combat.unit_' + unit_key).addClass("zoom");
			},total_timeout);
			setTimeout(function(){
				$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
				$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
			},total_timeout + game_speed);
			if(origin_unit_key != unit_key)
			{
				setTimeout(function(){
					$('.combat.unit_' + unit_key).removeClass("zoom");
				},total_timeout + game_speed * 1.5);
			}
			if(combat_units[unit_key]['name'] != 'ghost')
			{
				total_timeout += game_speed * 1.5;
			}

			if(combat_units[unit_key]['hp'] == 0 && original_hp != 0){
				unit_death(unit_key,origin_unit_key);
			}
		}
	}
	if(amount_adjusted < 0)
		{amount_adjusted *= -1;}
	return amount_adjusted;
};

function unit_increase_max_hp(origin_unit_key, unit_key, amount){
	if(amount != 0)
	{
		var original_hp = combat_units[unit_key]['hp'];
		combat_units[unit_key]['max_hp'] += amount;
		if(combat_units[unit_key]['max_hp'] < 0){
			combat_units[unit_key]['max_hp'] = 0;
		}
		if(combat_units[unit_key]['hp'] > combat_units[unit_key]['max_hp']){
			combat_units[unit_key]['hp'] = combat_units[unit_key]['max_hp'];
		}
		

		var target_new_hp = combat_units[unit_key]['hp'] + 0;
		var current_hp_percent = 0;
		if(combat_units[unit_key]['max_hp'] > 0)
		{
			current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
		}
		setTimeout(function(){
			$('.combat.unit_' + unit_key).addClass("zoom");
		},total_timeout);
		setTimeout(function(){
			$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
			$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
		},total_timeout + game_speed);
		if(origin_unit_key != unit_key)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key).removeClass("zoom");
			},total_timeout + game_speed * 1.5);
		}

		if(combat_units[unit_key]['hp'] == 0 && original_hp != 0){
			unit_death(unit_key);
		}
	}
};

function unit_drain_hp(origin_unit_key, unit_key, amount){
	if(combat_units[unit_key]['hp'] > 1)
	{
		var original_hp = combat_units[unit_key]['hp'];
		if(amount > combat_units[unit_key]['hp'] -1)
		{
			amount = combat_units[unit_key]['hp'] - 1;
		}
		if(amount < 0)
		{
			amount = 0;
		}
		combat_units[unit_key]['hp'] -= amount;
		if(combat_units[unit_key]['hp'] < 1){
			combat_units[unit_key]['hp'] = 1;
		}

		var target_new_hp = combat_units[unit_key]['hp'] + 0;
		var current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
		setTimeout(function(){
			$('.combat.unit_' + unit_key).addClass("zoom");
		},total_timeout);
		setTimeout(function(){
			$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
			$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
		},total_timeout + game_speed);
		if(origin_unit_key != unit_key)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key).removeClass("zoom");
			},total_timeout + game_speed * 1.5);
		}
		//total_timeout += 1500;

		if(combat_units[unit_key]['hp'] == 0 && original_hp != 0){
			unit_death(unit_key);
		}

		return amount;
	}
	else
	{
		return 0;
	}
	
};

function unit_increase_stats(origin_unit_key, unit_key, strength_amount, hp_amount, max_hp_amount){
	var original_hp = combat_units[unit_key]['hp'];
	var side = combat_units[unit_key]['side'];
	if(max_hp_amount == undefined){max_hp_amount = hp_amount;}
/*	console.log(hp_amount);
*/	if(hp_amount != undefined)
	{
		combat_units[unit_key]['hp'] += hp_amount;
	}
	if(max_hp_amount != undefined)
	{
		combat_units[unit_key]['max_hp'] += max_hp_amount;
	}
	
	if(combat_units[unit_key]['hp'] < 0){
		combat_units[unit_key]['hp'] = 0;
	}
	if(combat_units[unit_key]['max_hp'] < 0){
		combat_units[unit_key]['max_hp'] = 0;
	}
	if(combat_units[unit_key]['hp'] > combat_units[unit_key]['max_hp']){
		combat_units[unit_key]['hp'] = combat_units[unit_key]['max_hp'];
	}
	if(combat_units[unit_key]['strength'] !== false)
	{
		combat_units[unit_key]['strength'] += strength_amount;
		if(combat_units[unit_key]['strength'] < 0){
			combat_units[unit_key]['strength'] = 0;
		}
	}

	latest_success = true;

	var target_new_strength = combat_units[unit_key]['strength'] + 0;
	var target_new_hp = combat_units[unit_key]['hp'] + 0;
	var current_hp_percent = 0;
	if(combat_units[unit_key]['max_hp'] > 0)
	{
		current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
	}
	setTimeout(function(){
		$('.combat.unit_' + unit_key).addClass("zoom");
	},total_timeout);
	setTimeout(function(){
		$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
		$('.combat.unit_' + unit_key + ' .card_strength').html(target_new_strength);
		$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
	},total_timeout + game_speed);
	if(origin_unit_key != unit_key)
	{
		setTimeout(function(){
			$('.combat.unit_' + unit_key).removeClass("zoom");
		},total_timeout + game_speed * 1.5);
	}
	//total_timeout += 1500;

	if(combat_units[unit_key]['hp'] == 0 && original_hp != 0){
		unit_death(unit_key);
	}

	if(strength_amount > 0)
	{
		latest_success = strength_amount;
		process_abilities('any_unit_gain_strength', 'player', 1, unit_key);
		process_abilities('any_unit_gain_strength', 'enemy', 2, unit_key);
		process_abilities('any_unit_gain_strength', 'neutral', 0, unit_key);

		if(side == 1)
		{
			process_abilities('ally_unit_gain_strength', 'player', 1, unit_key);
			process_abilities('enemy_unit_gain_strength', 'enemy', 2, unit_key);
		}
		if(side ==  2)
		{
			process_abilities('enemy_unit_gain_strength', 'player', 1, unit_key);
			process_abilities('ally_unit_gain_strength', 'enemy', 2, unit_key);
		}
	}
	if(strength_amount < 0)
	{
		latest_success = strength_amount * -1;
		process_abilities('any_unit_lose_strength', 'player', 1, unit_key);
		process_abilities('any_unit_lose_strength', 'enemy', 2, unit_key);
		process_abilities('any_unit_lose_strength', 'neutral', 0, unit_key);

		if(side == 1)
		{
			process_abilities('ally_unit_lose_strength', 'player', 1, unit_key);
			process_abilities('enemy_unit_lose_strength', 'enemy', 2, unit_key);
		}
		if(side == 2)
		{
			process_abilities('enemy_unit_lose_strength', 'player', 1, unit_key);
			process_abilities('ally_unit_lose_strength', 'enemy', 2, unit_key);
		}
	}
};

function unit_healing(origin_unit_key, unit_key, amount){

	if(combat_units[unit_key]['hp'] < combat_units[unit_key]['max_hp'] && combat_units[unit_key]['hp'] > 0)
	{
		if(amount > combat_units[unit_key]['max_hp'] - combat_units[unit_key]['hp'])
		{
			amount = combat_units[unit_key]['max_hp'] - combat_units[unit_key]['hp'];
		}
		combat_units[unit_key]['hp'] += amount;
		if(combat_units[unit_key]['hp'] < 0){
			combat_units[unit_key]['hp'] = 0;
		}

		if(combat_units[unit_key]['hp'] > combat_units[unit_key]['max_hp']){
			combat_units[unit_key]['hp'] = combat_units[unit_key]['max_hp'];
		}

		var target_new_hp = combat_units[unit_key]['hp'] + 0;
		var current_hp_percent = Math.floor((combat_units[unit_key]['hp'] / combat_units[unit_key]['max_hp']) * 100);
		setTimeout(function(){
			$('.combat.unit_' + unit_key).addClass("zoom");
		},total_timeout);
		setTimeout(function(){
			$('.combat.unit_' + unit_key + ' .card_hp span').html(target_new_hp);
			$('.combat.unit_' + unit_key + ' .card_current_hp').css('height', current_hp_percent + '%');
		},total_timeout + game_speed);
		if(origin_unit_key != unit_key)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key).removeClass("zoom");
			},total_timeout + game_speed * 1.5);
		}
		//total_timeout += 1500;
	}
	else
	{
		amount = 0;
	}

	return amount;
};

function unit_death(unit_key, origin_unit_key){

	var destroy_successful = 0;

	if(combat_units[unit_key] != undefined)
	{
		combat_units[unit_key]['dead'] = true;
		combat_units[unit_key]['hp'] = 0;

		//total_timeout += 500;

		setTimeout(function(){
			$('.combat.unit_' + unit_key).addClass('dead');
		},total_timeout);
		//total_timeout += 500;

		destroy_successful = 1;

		var disappear_on_death = true;
		var card_key = combat_units[unit_key]['card_key'];
		var card_type = combat_units[unit_key]['type'];
		var card_side = combat_units[unit_key]['side'];
		var destroyed_type = combat_units[unit_key]['type'];

		if(combat_units[unit_key]['disappear_on_death'] == undefined || combat_units[unit_key]['disappear_on_death'] == false)
		{
			disappear_on_death = false;
		}
		
		if(combat_units[unit_key] != undefined)
		{
			process_abilities('any_creature_death_of_subtype', 'player', 1, unit_key);
			process_abilities('any_creature_death_of_subtype', 'enemy', 2, unit_key);
			process_abilities('any_creature_death_of_subtype', 'neutral', 0, unit_key);
		}

		death_blocked = false;
		$.each(combat_units[unit_key]['abilities'], function(ability_key, ability){
			if(ability['proc'] == 'own_death' || ability['proc'] == 'leave_play')
			{
				process_ability(combat_units[unit_key], ability, combat_units[unit_key]['side_string'], combat_units[unit_key]['side'], origin_unit_key);
			}
		});

		if(disappear_on_death == false)
		{

			process_abilities('any_death', undefined, undefined, unit_key);

			process_abilities('specific_death_' + card_key, undefined, undefined, unit_key);

			if(card_type == 'creature')
			{
				process_abilities('any_creature_death', undefined, undefined, unit_key);
				if(card_side == 1)
				{
					process_abilities('any_enemy_creature_death', 'enemy', 2, unit_key);
					process_abilities('any_ally_creature_death', 'player', 1, unit_key);
				}
				if(card_side == 2)
				{
					process_abilities('any_enemy_creature_death', 'player', 1, unit_key);
					process_abilities('any_ally_creature_death', 'enemy', 2, unit_key);
				}
			}

			if(card_type == 'structure')
			{
				process_abilities('any_structure_death', unit_key);
				if(card_side == 1)
				{
					process_abilities('any_enemy_structure_death', 'enemy', 2, unit_key);
					process_abilities('any_ally_structure_death', 'player', 1, unit_key);
				}
				if(card_side == 2)
				{
					process_abilities('any_enemy_structure_death', 'player', 1, unit_key);
					process_abilities('any_ally_structure_death', 'enemy', 2, unit_key);
				}
			}
		}
		
		if(combat_units[origin_unit_key] != undefined && (combat_units[origin_unit_key]['hp'] > 0 || combat_units[origin_unit_key]['hp'] == false) && disappear_on_death == false)
		{
			$.each(combat_units[origin_unit_key]['abilities'], function(ability_key, ability){
				if(ability['proc'] == 'kill')
				{
					process_ability(combat_units[origin_unit_key], ability, combat_units[origin_unit_key]['side_string'], combat_units[origin_unit_key]['side'], unit_key);
				}
				if(ability['proc'] == 'kill_creature' && destroyed_type == 'creature')
				{
					process_ability(combat_units[origin_unit_key], ability, combat_units[origin_unit_key]['side_string'], combat_units[origin_unit_key]['side'], unit_key);
				}
				if(ability['proc'] == 'kill_structure' && destroyed_type == 'structure')
				{
					process_ability(combat_units[origin_unit_key], ability, combat_units[origin_unit_key]['side_string'], combat_units[origin_unit_key]['side'], unit_key);
				}
			});
		}

		if(combat_units[unit_key] != undefined && combat_units[unit_key]['dead'] == true)
		{
			if(combat_units[unit_key]['side'] == 2)
			{
				update_quests('enemy_units_detroyed');
			}
			if(combat_units[unit_key]['side'] == 0)
			{
				update_quests('neutral_units_detroyed');
			}
			if(combat_units[unit_key]['side'] == 1)
			{
				update_quests('ally_units_detroyed');
			}
			update_quests('units_detroyed');
			
			setTimeout(function(){
				$('.combat.unit_' + unit_key + ' .dead').remove();
			},total_timeout + game_speed);

			move_card_to_grave(combat_units[unit_key]['original_side'], combat_units[unit_key]['card_id']);

			show_player_hand();
			show_enemy_hand();
			delete combat_units[unit_key];
		}
		if(combat_units[unit_key] != undefined)
		{
			setTimeout(function(){
				$('.combat.unit_' + unit_key).removeClass('dead');
			},total_timeout);
		}

		

		
	}

	return destroy_successful;
}

function unit_unsummon(unit_key){
	if(combat_units[unit_key] != undefined)
	{
		setTimeout(function(){
			$('.combat.unit_' + unit_key).css('opacity','0');
		},total_timeout);
		setTimeout(function(){
			$('.combat.unit_' + unit_key).remove();
		},total_timeout + 1000);
		total_timeout += game_speed / 4;
		move_card_to_hand(combat_units[unit_key]['original_side'], combat_units[unit_key]['card_id']);
		
		delete combat_units[unit_key];
		show_player_hand();
		show_enemy_hand();

		return true;
	}

	return false;
}

function unit_return_to_deck(unit_key){
	console.log('returning to deck');
	setTimeout(function(){
		$('.combat.unit_' + unit_key).fadeOut(1000);
	},total_timeout);
	setTimeout(function(){
		$('.combat.unit_' + unit_key).remove();
	},total_timeout + 1000);
	//total_timeout += 200;
	if(combat_units[unit_key] != undefined)
	{
		if(combat_units[unit_key]['original_side'] == 1 && deck_cards[combat_units[unit_key]['card_id']] != undefined && deck_cards[combat_units[unit_key]['card_id']]['status'] != 'deck')
		{
			log_player_card(combat_units[unit_key]['card_key'], 'moved to your reserves:');
			deck_cards[combat_units[unit_key]['card_id']]['status'] = 'deck';
		}
		if(combat_units[unit_key]['original_side'] == 2 && enemy_deck_cards[combat_units[unit_key]['card_id']] != undefined && enemy_deck_cards[combat_units[unit_key]['card_id']]['status'] != 'deck')
		{
			log_enemy_card(combat_units[unit_key]['card_key'], 'moved to his reserves:');
			enemy_deck_cards[combat_units[unit_key]['card_id']]['status'] = 'deck';
		}
		delete combat_units[unit_key];
		show_player_hand();
		show_enemy_hand();

		return true;
	}
	return false;
}

function unit_disappear(unit_key, origin_unit){	
	setTimeout(function(){
		$('.combat.unit_' + unit_key).css('opacity',0);
	},total_timeout);
	setTimeout(function(){
		$('.combat.unit_' + unit_key).remove();
	},total_timeout + game_speed);
	total_timeout += game_speed * 1.1;

	if(combat_units[unit_key] != undefined)
	{
		if(origin_unit !== false)
		{
			move_card_to_grave(combat_units[unit_key]['original_side'], combat_units[unit_key]['card_id']);
		}
		delete combat_units[unit_key];
	
		show_player_hand();
		show_enemy_hand();

		return true;
	}

	return false;
}

function gain_ability(unit, ability, ability_text){

	if(ability['do_not_zoom'] == undefined)
	{
		zoom_unit(unit['unit_id']);
	}
	var new_ability_key = 0;
	if(unit['abilities'] == undefined){unit['abilities'] = {};}
	$.each(unit['abilities'], function(ability_key, ability){
		if(parseInt(ability_key) > new_ability_key)
		{
			new_ability_key = parseInt(ability_key);
		}
		//console.log(parseInt(ability_key));
	});
	new_ability_key += 1;
	unit['abilities'][new_ability_key] = ability;
	total_timeout += game_speed;
	if(unit['text'].replace(ability_text, '') == unit['text'])
	{
		unit['text'] += ' ' + ability_text;
		//$('.unit_' + unit['unit_id'] + ' .card_text').html(unit['text']);
	}
	if(ability['do_not_zoom'] == undefined)
	{
		unzoom_unit(unit['unit_id']);
	}

	return true;
}

function find_targets(ability,origin_unit,procced_from_unit){

	var all_targets = {};

	if(origin_unit != undefined){

		if(ability['target'] == 'random' || (origin_unit == undefined && ability['target'] == 'self'))
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(unit['col'] != 0)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
		}


		if(ability['target'] == 'self' && origin_unit['unit_id'] != undefined)
		{
			var temp_targets = {};
			temp_targets[0] = origin_unit['unit_id'];
		}

		if(ability['target'] == 'same_slot')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(
						origin_unit['col'] == unit['col'] && origin_unit['row'] == unit['row'] && unit['hp'] > 0 && unit_id != origin_unit['unit_id']
					)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
		}

		if(ability['target'] == 'center_col')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(unit['col'] == 3)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'enemy_col')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if((origin_unit['side'] == 1 && unit['col'] == 4) || (origin_unit['side'] == 2 && unit['col'] == 2))
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'ally_col')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if((origin_unit['side'] == 1 && unit['col'] == 2) || (origin_unit['side'] == 2 && unit['col'] == 4))
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'top_row')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(unit['row'] == 1)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'not_top_row')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(unit['row'] > 1)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		

		if(ability['target'] == 'center_row')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(unit['row'] == 2)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'bottom_row')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(unit['row'] == 3)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'adjacent')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(
						 	(origin_unit['col'] == unit['col'] && origin_unit['row'] == unit['row'] - 1)
						||	(origin_unit['col'] == unit['col'] && origin_unit['row'] == unit['row'] + 1)
						|| 	(origin_unit['row'] == unit['row'] && origin_unit['col'] == unit['col'] - 1)
						||	(origin_unit['row'] == unit['row'] && origin_unit['col'] == unit['col'] + 1)
					)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'not_adjacent')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(
						 	(origin_unit['col'] == unit['col'] && origin_unit['row'] == unit['row'] - 1)
						||	(origin_unit['col'] == unit['col'] && origin_unit['row'] == unit['row'] + 1)
						|| 	(origin_unit['row'] == unit['row'] && origin_unit['col'] == unit['col'] - 1)
						||	(origin_unit['row'] == unit['row'] && origin_unit['col'] == unit['col'] + 1)
					)
					{}
					else
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'diagonal')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(
						 	(origin_unit['col'] == unit['col'] - 1 && origin_unit['row'] == unit['row'] - 1)
						||	(origin_unit['col'] == unit['col'] - 1 && origin_unit['row'] == unit['row'] + 1)
						|| 	(origin_unit['col'] == unit['col'] + 1 && origin_unit['row'] == unit['row'] - 1)
						||	(origin_unit['col'] == unit['col'] + 1 && origin_unit['row'] == unit['row'] + 1)
					)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'around')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(
						unit['col'] >= origin_unit['col'] - 1 && unit['col'] <= origin_unit['col'] + 1 &&
						unit['row'] >= origin_unit['row'] - 1 && unit['row'] <= origin_unit['row'] + 1 &&
						(unit['row'] != origin_unit['row'] || unit['col'] != origin_unit['col'])
					)
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'same_row')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(origin_unit['row'] == unit['row'])
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'same_col')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if(origin_unit['col'] == unit['col'])
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'directly_in_front')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if((origin_unit['side'] == 2 && origin_unit['col'] == unit['col'] + 1 && unit['row'] == origin_unit['row'])
					|| 	(origin_unit['side'] == 1 && origin_unit['col'] == unit['col'] - 1 && unit['row'] == origin_unit['row']))
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		if(ability['target'] == 'directly_behind')
		{
			var temp_target_amount = 0;
			var temp_targets = {};
			$.each(combat_units, function(unit_id, unit){
				if((origin_unit['side'] == unit['side'] && ability['target_side'] == 'ally') || (origin_unit['side'] !== unit['side'] && ability['target_side'] == 'enemy') || ability['target_side'] == 'any' || (ability['target_side'] == 'neutral' && unit['side'] == 0))
				{
					if((origin_unit['side'] == 2 && origin_unit['col'] == unit['col'] - 1 && unit['row'] == origin_unit['row'])
					|| 	(origin_unit['side'] == 1 && origin_unit['col'] == unit['col'] + 1 && unit['row'] == origin_unit['row']))
					{
						temp_targets[temp_target_amount] = unit_id;
						temp_target_amount++;
					}
				}
			});
			
		}

		$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
			if(combat_units[chosen_temp_target] == undefined)
			{
				delete temp_targets[temp_target_key];
			}
		});


		if(ability['position'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(check_units_position(combat_units[chosen_temp_target], origin_unit, ability['position']) == false)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['no_adjacent_ally_creature'] != undefined && ability['no_adjacent_ally_creature'] == true)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var found_an_adjacent = false;
				$.each(combat_units, function(combat_unit_id, combat_unit){
					if(
						combat_unit['side'] == combat_units[chosen_temp_target]['side'] && combat_unit['hp'] > 0 && combat_unit['type'] == 'creature' &&
						check_units_position(combat_units[chosen_temp_target], combat_unit, 'adjacent') == true
					)
					{
						found_an_adjacent = true;
					}
				});

				if(found_an_adjacent == true)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['no_adjacent_ally_creature'] != undefined && ability['no_adjacent_ally_creature'] == false)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var found_an_adjacent = false;
				$.each(combat_units, function(combat_unit_id, combat_unit){
					if(
						combat_unit['side'] == combat_units[chosen_temp_target]['side'] && combat_unit['hp'] > 0 && combat_unit['type'] == 'creature' &&
						check_units_position(combat_units[chosen_temp_target], combat_unit, 'adjacent') == true
					)
					{
						found_an_adjacent = true;
					}
				});

				if(found_an_adjacent == false)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['origin_unit'] == true)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(procced_from_unit == undefined || chosen_temp_target != procced_from_unit || combat_units[procced_from_unit] == undefined || (combat_units[procced_from_unit]['hp'] != false && combat_units[procced_from_unit]['hp'] < 1 && ability['origin_dead'] == undefined) || (combat_units[procced_from_unit]['dead'] == undefined && ability['origin_dead'] != undefined))
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['subtypes'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['subtypes'] != undefined)
				{
					var found_subtype = false;
					$.each(combat_units[chosen_temp_target]['subtypes'], function(target_subtype_key, target_subtype){
						$.each(ability['subtypes'], function(subtype_key, subtype){
							
							if(target_subtype == subtype)
							{
								found_subtype = true;
							}
						});
					});
					if(found_subtype == false)
					{
						delete temp_targets[temp_target_key];
					}
				}
				else
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['target_type'] != undefined && ability['target_type'] == 'structure')
		{
			temp_targets = filter_targets_structure_only(temp_targets);
		}

		if(ability['target_type'] != undefined && ability['target_type'] == 'creature')
		{
			temp_targets = filter_targets_creature_only(temp_targets);
		}

		if(ability['type'] == 'increase_strength')
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['strength'] === false || (ability['effect'] < 0 && combat_units[chosen_temp_target]['strength'] == 0))
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['max_stunned'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['stunned'] > ability['max_stunned'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['type'] == 'decrease_strength')
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['strength'] < 1)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['has_status_effect'] != undefined && ability['has_status_effect'] == true)
		{
			console.log('gotto check status effect for ' + origin_unit['name']);
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if((combat_units[chosen_temp_target]['burning'] == undefined || combat_units[chosen_temp_target]['burning'] == 0) && (combat_units[chosen_temp_target]['poisoned'] == undefined || combat_units[chosen_temp_target]['poisoned'] == 0))
				{
					console.log('cannot target ' + combat_units[chosen_temp_target]['name'])
					delete temp_targets[temp_target_key];
				}
			});
		}

		if((ability['burning'] != undefined && ability['burning'] == true))
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['burning'] == undefined || combat_units[chosen_temp_target]['burning'] == 0)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if((ability['poisoned'] != undefined && ability['poisoned'] == true))
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['poisoned'] == undefined || combat_units[chosen_temp_target]['poisoned'] == 0)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['min_poisoned'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['poisoned'] == undefined || combat_units[chosen_temp_target]['poisoned'] < ability['min_poisoned'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if((ability['burning'] != undefined && ability['burning'] == false))
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['burning'] != undefined && combat_units[chosen_temp_target]['burning'] > 0)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if((ability['poisoned'] != undefined && ability['poisoned'] == false))
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['poisoned'] != undefined && combat_units[chosen_temp_target]['poisoned'] > 0)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['type'] == 'poison')
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['immune_to_poison'] != undefined && combat_units[chosen_temp_target]['immune_to_poison'] == true)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['type'] == 'burn')
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['immune_to_burning'] != undefined && combat_units[chosen_temp_target]['immune_to_burning'] == true)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['type'] == 'healing')
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target] == undefined || combat_units[chosen_temp_target]['hp'] == combat_units[chosen_temp_target]['max_hp'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['not_self'] == true)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(chosen_temp_target == origin_unit['unit_id'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['uses_energy'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['uses_energy'] == undefined && ability['uses_energy'] == true)
				{
					delete temp_targets[temp_target_key];
				}

				if(combat_units[chosen_temp_target]['uses_energy'] != undefined && ability['uses_energy'] == false)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['min_energy'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['energy'] == undefined || combat_units[chosen_temp_target]['energy'] < ability['min_energy'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['max_energy'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['energy'] == undefined || combat_units[chosen_temp_target]['energy'] > ability['max_energy'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['has_color'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var has_right_color = false;
				$.each(combat_units[chosen_temp_target]['cost'], function(cost_color, cost_amount){	
					if(cost_color == ability['has_color'] && cost_amount > 0)
					{
						has_right_color = true;
					}
				});
				if(has_right_color == false)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['does_not_have_color'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var has_right_color = false;
				$.each(combat_units[chosen_temp_target]['cost'], function(cost_color, cost_amount){	
					if(cost_color == ability['does_not_have_color'] && cost_amount > 0)
					{
						has_right_color = true;
					}
				});
				if(has_right_color == true)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['min_hp'] != undefined)
		{

			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var calculated_min_hp = calculate_effect(origin_unit, ability['min_hp'], temp_target_key, ability['min_hp_multiplier']);
				if(ability['min_hp_adjustment'] != undefined)
				{
					calculated_min_hp += ability['min_hp_adjustment'];
				}
				if(combat_units[chosen_temp_target]['hp'] < calculated_min_hp)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['max_hp'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var calculated_max_hp = calculate_effect(origin_unit, ability['max_hp'], temp_target_key, ability['max_hp_multiplier']);
				if(ability['max_hp_adjustment'] != undefined)
				{
					calculated_max_hp += ability['max_hp_adjustment'];
				}
				if(combat_units[chosen_temp_target]['hp'] > calculated_max_hp)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['min_strength'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
				if(combat_units[chosen_temp_target]['strength'] < ability['min_strength'])
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['max_strength'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['strength'] > calculate_effect(origin_unit, ability['max_strength'], temp_target_key, undefined))
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['specific_target'] != undefined)
		{
			//console.log(temp_targets);
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				
				var temp_found_subtype = false;
				$.each(combat_units[chosen_temp_target]['subtypes'], function(useless_key, subtype){
					if(subtype == ability['specific_target'])
					{
						temp_found_subtype = true;
					}
				});
				if(combat_units[chosen_temp_target]['card_key'] != ability['specific_target'] && temp_found_subtype == false)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['specific_target_not'] != undefined)
		{
			//console.log(temp_targets);
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				
				var temp_found_subtype = false;
				$.each(combat_units[chosen_temp_target]['subtypes'], function(useless_key, subtype){
					if(subtype == ability['specific_target_not'])
					{
						temp_found_subtype = true;
					}
				});
				if(combat_units[chosen_temp_target]['card_key'] == ability['specific_target_not'] || temp_found_subtype == true)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['has_adjacent_enemy'] != undefined)
		{
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				var temp_has_adjacent_enemy = false;
				$.each(combat_units, function(temp_combat_unit_key, temp_combat_unit){
					if(check_units_position(combat_units[chosen_temp_target], temp_combat_unit, 'adjacent') == true && combat_units[chosen_temp_target]['side'] != temp_combat_unit['side'])
					{
						temp_has_adjacent_enemy = true;
					}
				});
				if(temp_has_adjacent_enemy == false && ability['has_adjacent_enemy'] == true)
				{
					delete temp_targets[temp_target_key];
				}
				if(temp_has_adjacent_enemy == true && ability['has_adjacent_enemy'] == false)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}
	
		if(ability['lowest_hp'] != undefined && ability['lowest_hp'] == true)
		{
			//console.log(temp_targets);
			var lowest_hp = -1;
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['hp'] < lowest_hp || lowest_hp == -1)
				{
					lowest_hp = combat_units[chosen_temp_target]['hp'];
				}
			});
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['hp'] > lowest_hp)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['highest_hp'] != undefined && ability['highest_hp'] == true)
		{
			//console.log(temp_targets);
			var highest_hp = -1;
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['hp'] > highest_hp || highest_hp == -1)
				{
					highest_hp = combat_units[chosen_temp_target]['hp'];
				}
			});
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['hp'] < highest_hp)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['lowest_strength'] != undefined && ability['lowest_strength'] == true)
		{
			//console.log(temp_targets);
			var lowest_strength = -1;
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['strength'] < lowest_strength || lowest_strength == -1)
				{
					lowest_strength = combat_units[chosen_temp_target]['strength'];
				}
			});
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['strength'] > lowest_strength)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		if(ability['highest_strength'] != undefined && ability['highest_strength'] == true)
		{
			//console.log(temp_targets);
			var highest_strength = -1;
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['strength'] > highest_strength || highest_strength == -1)
				{
					highest_strength = combat_units[chosen_temp_target]['strength'];
				}
			});
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				if(combat_units[chosen_temp_target]['strength'] < highest_strength)
				{
					delete temp_targets[temp_target_key];
				}
			});
		}

		var calculated_target_amount = calculate_effect(origin_unit, ability['target_amount'], undefined, ability['target_amount_multiplier']);

		for (var i = 0; i < calculated_target_amount; i++) {
			if(count_object(temp_targets) > 0)
			{
				var temp_target_amount = count_object(temp_targets);
				var temp_target_chosen = Math.floor(Math.random() * temp_target_amount);
				$.each(temp_targets, function(temp_target_key, chosen_temp_target){
					
					if(temp_target_chosen == 0)
					{
						all_targets[i] = temp_targets[temp_target_key];
						if(ability['target_unique'] !== false)
						{
							delete temp_targets[temp_target_key];
						}
					}
					temp_target_chosen -= 1;
				});
			}
		}
	}	

	if(count_object(all_targets) == 0)
	{
		latest_success = 0;
	}

	return all_targets;
}

function find_random_spell_target(side,ability,filter, original_spell, grave_cost){
	var spell = copyobject(original_spell);
	spell['side'] = 2;
	var all_targets = 0;
	var temp_target_amount = 0;
	var temp_targets = {};
	var has_buff_this = false;
		$.each(combat_units, function(unit_id, unit){
			if((side == unit['side'] || side == 'any') && unit['ai_hp'] != false && unit['hp'] > 0)
			{
				spell['col'] = unit['col'];
				spell['row'] = unit['row'];

				var can_target = true;
				if(ability['type'] == 'increase_strength' && unit['strength'] === false)
				{
					can_target = false;
				}
				if(ability['type'] == 'increase_strength' && ability['effect'] < 0 && unit['strength'] < ability['effect'] * -1)
				{
					can_target = false;
				}

				if(unit['side'] == 1 && unit['ai_hp'] <= 0)
				{
					can_target = false;
				}

				if(ability['min_hp'] != undefined && ability['min_hp'] > unit['ai_hp'])
				{
					can_target = false;
				}
				if(unit['side'] == 1 && ability['type'] == 'damage' && unit['ai_hp'] > ((calculate_effect(spell, ability['effect'], unit['unit_id'], ability['effect_multiplier']) - unit['damage_reduction']) * ability['effect_count']) && (ability['target'] == 'same_slot' || ability['target'] == 'same_row'))
				{
					can_target = false;
					//console.log(spell['name'] + ': not enough damage (' + ((calculate_effect(spell, ability['effect'], unit['unit_id'], ability['effect_multiplier']) - unit['damage_reduction']) * ability['effect_count']) + ') to kill ' + unit['name']);
				}

				if(ability['min_energy'] != undefined && (unit['energy'] == undefined || unit['energy'] < ability['min_energy']))
				{
					can_target = false;
				}

				if(ability['uses_energy'] != undefined && (unit['energy'] == undefined))
				{
					can_target = false;
				}

				if(unit['side'] == 2 && ability['type'] == 'damage' && unit['ai_hp'] < ((calculate_effect(spell, ability['effect'], unit['unit_id'], ability['effect_multiplier']) - unit['damage_reduction']) * ability['effect_count']) && (ability['target'] == 'same_slot' || ability['target'] == 'same_row'))
				{
					can_target = false;
				}

				if(unit['side'] == 1 && ability['type'] == 'damage' && unit['ai_hp'] == 0 && ability['target'] == 'same_slot' )
				{
					can_target = false;
				}

				if(unit['suicidal'] != undefined && (ability['target'] == 'same_slot' || ability['target'] == 'same_row'))
				{
					can_target = false;
				}

				if(spell['target_stunned'] != undefined && spell['target_stunned'] == false && unit['stunned'] > 0)
				{
					can_target = false;
				}
				if(spell['target_stunned'] != undefined && spell['target_stunned'] == true && unit['stunned'] == 0)
				{
					can_target = false;
				}
				if((ability['type'] == 'increase_hp' || ability['type'] == 'healing') && unit['ai_hp'] > 0 && ability['target'] == 'same_slot')
				{
					can_target = false;
				}

				if((ability['type'] == 'increase_hp' || ability['type'] == 'healing') && unit['ai_hp'] + (calculate_effect(spell, ability['effect'], unit['unit_id'], ability['effect_multiplier']) * ability['effect_count']) < 0 && ability['target'] == 'same_slot')
				{
					can_target = false;
				}

				/*if(ability['type'] == 'increase_strength' && ability['effect'] > 0 && unit['hp'] < 5 && ability['target'] == 'same_slot')
				{
					can_target = false;
				}*/
				if(can_target == true && (ability['type'] == 'increase_strength' || ability['type'] == 'increase_stats') && ability['target'] == 'same_slot' && unit['side'] == 2)
				{
					var temp_effect = 0;
					var found_any_good_target = false;
					if(ability['type'] == 'increase_strength')
					{
						temp_effect = calculate_effect(spell, ability['effect'], unit['unit_id'], ability['effect_multiplier']) * ability['effect_count'];
					}
					if(ability['type'] == 'increase_stats')
					{
						temp_effect = calculate_effect(spell, ability['effect_strength'], unit['unit_id'], ability['effect_multiplier']) * ability['effect_count'];
					}
					var attack_ability = {target:unit['attack_type'],not_self:true,min_hp:1,target_side:'enemy',target_amount:1,effect_count:1};
					if(unit['attack_specials'] != undefined)
					{
						$.each(unit['attack_specials'], function(special_name, special_value){
							attack_ability[special_name] = special_value;
						});
					}
					var potential_slot = get_potentional_movement_slot(unit);
					potential_slot['side'] = 2;
					var likely_targets = find_targets(attack_ability,potential_slot);
					$.each(likely_targets, function(useless_key, likely_target){
						if(combat_units[likely_target]['ai_hp'] <= 0 || combat_units[likely_target]['ai_hp'] > temp_effect)
						{
							//console.log('cannot use ' + spell['name'] + ' on ' + unit['name'] + ' because that is useless against ' + combat_units[likely_target]['name']);
							//console.log('hp left after attack: ' + combat_units[likely_target]['ai_hp'] + ' / effect ' + temp_effect);
						}
						else
						{
							found_any_good_target = true;
							//console.log('CAN use ' + spell['name'] + ' on ' + unit['name'] + ' because that will kill ' + combat_units[likely_target]['name']);
							//console.log('hp left after attack: ' + combat_units[likely_target]['ai_hp'] + ' / effect ' + temp_effect);
						}
					});

					if(count_object(likely_targets) == 0 || found_any_good_target == false)
					{
						can_target = false;
						//console.log('cannot use ' + spell['name'] + ' on ' + unit['name'] + ' because it has nothing to attack');
					}
					
				}

				if(ability['target_damaged'] != undefined && unit['hp'] == unit['max_hp'])
				{
					can_target = false;
				}

				if(ability['spell_target_min_strength'] != undefined && (ability['spell_target_min_strength'] > unit['strength'] || unit['strength'] == false))
				{
					can_target = false;
				}
				if(ability['spell_target_min_hp'] != undefined && ability['spell_target_min_hp'] > unit['ai_hp'])
				{
					can_target = false;
				}
				if(spell['takes_damage_this_turn'] != undefined && spell['takes_damage_this_turn'] == true && unit['hp'] <= unit['ai_hp'])
				{
					can_target = false;
				}
				if(spell['takes_damage_this_turn'] != undefined && spell['takes_damage_this_turn'] == false && unit['hp'] > unit['ai_hp'])
				{
					can_target = false;
				}

				if(ability['ability_text'] != undefined && unit['text'].replace(ability['ability_text'], '') != unit['text'])
				{
					can_target = false;
				}

				if(ability['has_status_effect'] != undefined && ability['has_status_effect'] == true)
				{
					if((unit['burning'] == undefined || unit['burning'] == 0) && (unit['poisoned'] == undefined || unit['poisoned'] == 0))
					{
						can_target = false;
					}

				}

				if(ability['type'] == 'poison' && unit['immune_to_poison'] != undefined)
				{
					can_target = false;
				}

				if(ability['type'] == 'burn' && unit['immune_to_burning'] != undefined)
				{
					can_target = false;
				}

				if(unit['ai_hp'] <= 0 && ability['type'] != 'increase_hp' && ability['type'] != 'increase_stats' && ability['type'] != 'healing')
				{
					can_target = false;
				}

				if(spell['has_adjacent'] != undefined)
				{
					var found_adjacent = false;
					$.each(combat_units, function(unit_id_to_check, unit_to_check){
						if(found_adjacent == false && check_units_position(unit, unit_to_check, 'adjacent') == true)
						{
							if((spell['adjacent_side'] == 'enemy' || spell['adjacent_side'] == 'any') && unit['side'] != unit_to_check['side'])
							{
								if(spell['has_adjacent'] == false)
								{
									can_target = false;
									found_adjacent = true;
								}
								else
								{
									found_adjacent = true;
								}
							}
							if((spell['adjacent_side'] == 'ally' || spell['adjacent_side'] == 'any') && unit['side'] == unit_to_check['side'])
							{
								if(spell['has_adjacent'] == false)
								{
									can_target = false;
									found_adjacent = true;
								}
								else
								{
									found_adjacent = true;
								}
							}
						}
					});
					if(found_adjacent == false && spell['has_adjacent'] == true)
					{
						can_target = false;
					}
				}
				

				if(can_target == true && match_array_values(unit['subtypes'],['buff_this']) == true && match_array_values(spell['subtypes'],['buff']) == true && spell['spell_target_side'] == 2 && unit['side'] == 2)
				{
					has_buff_this = true;
				}

				if(can_target == true && match_array_values(unit['subtypes'],['do_not_buff']) == true && match_array_values(spell['subtypes'],['buff']) == true && spell['spell_target_side'] == 2 && unit['side'] == 2)
				{
					can_target = false;
				}

				if(can_target == true)
				{
					temp_targets[temp_target_amount] = unit_id;
					temp_target_amount++;
				}
			}
		});

		if(has_buff_this == true)
		{
			temp_targets = filter_targets_buff_this_only(temp_targets);
		}

		if(filter == 'structure')
		{
			temp_targets = filter_targets_structure_only(temp_targets);
		}

		if(filter == 'creature')
		{
			temp_targets = filter_targets_creature_only(temp_targets);
		}

		/*if(ability['type'] == 'damage' && ability['target'] == 'same_row')
		{
			temp_targets = filter_targets_most_enemies_in_row(temp_targets);
		}*/

		if(ability['effect'] == 'strength' || (ability['type'] == 'increase_strength' && ability['effect'] < 0) || (ability['type'] == 'set_side' && ability['new_side'] == 'ally'))
		{
			temp_targets = filter_targets_highest_strength(temp_targets);
		}

		/*if(ability['effect'] == 'destroy')
		{
			temp_targets = filter_targets_highest_hp(temp_targets);
		}*/

		var target_min_value = 2;
		if(ability['target_min_value'] != undefined)
		{
			target_min_value = ability['target_min_value'];
			temp_targets = filter_targets_highest_value(temp_targets, target_min_value);
		}

		var target_min_cost = ability['target_min_cost'];
		if(ability['target_min_cost'] != undefined)
		{
			target_min_cost = ability['target_min_cost'];
			if(target_min_cost == 'own_cost')
			{
				var own_cost = 0;
				$.each(spell['cost'], function(color, amount){
					own_cost += amount;
				});
				own_cost += grave_cost;
/*				console.log(own_cost);
*/				temp_targets = filter_targets_min_cost(temp_targets, own_cost);
			}
			else
			{
				temp_targets = filter_targets_min_cost(temp_targets, target_min_cost);
			}
		}

		/*if(ability['type'] == 'unsummon' || ability['type'] == 'destroy' || ability['type'] == 'set_side' || ability['type'] == 'disappear')
		{
			temp_targets = filter_targets_highest_value(temp_targets, target_min_value);
		}*/

		if(ability['target_highest_value'] == true)
		{

			temp_targets = filter_targets_highest_value(temp_targets, target_min_value);
		}

		if(ability['target_highest_strength'] == true)
		{

			temp_targets = filter_targets_highest_strength(temp_targets);
		}

		if(ability['target_lowest_hp'] == true)
		{

			temp_targets = filter_targets_lowest_hp(temp_targets);
		}

		

		//console.log(temp_targets);

		if(count_object(temp_targets) > 0)
		{
			var temp_target_amount = count_object(temp_targets);
			var temp_target_chosen = Math.floor(Math.random() * temp_target_amount);
			$.each(temp_targets, function(temp_target_key, chosen_temp_target){
				
				if(temp_target_chosen == 0)
				{
					all_targets = temp_targets[temp_target_key];
				}
				temp_target_chosen -= 1;
			});
		}

		return all_targets;
}

function filter_targets_buff_this_only(all_targets){
	
	$.each(all_targets, function(target_key, unit_id){
		if(match_array_values(combat_units[unit_id]['subtypes'],['buff_this']) == false)
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_structure_only(all_targets){
	
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['type'] != 'structure')
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_creature_only(all_targets){
	
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['type'] != 'creature')
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_highest_strength(all_targets){
	var highest_strength = 0;
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['strength'] > highest_strength)
		{
			highest_strength = combat_units[unit_id]['strength'];
		}
	});
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['strength'] < highest_strength)
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_highest_hp(all_targets){
	var highest_hp = 0;
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['hp'] > highest_hp)
		{
			highest_hp = combat_units[unit_id]['hp'];
		}
	});
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['hp'] < highest_hp)
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_lowest_hp(all_targets){
	var highest_hp = 10000000000000000000000000000000000;
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['hp'] < highest_hp)
		{
			highest_hp = combat_units[unit_id]['hp'];
		}
	});
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['hp'] > highest_hp)
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function calculate_unit_value(unit_id){
	var unit_value = 0;
	if(combat_units[unit_id] != undefined)
	{
		if(combat_units[unit_id]['in_play_value'] != undefined)
		{
			unit_value += combat_units[unit_id]['in_play_value'];
			console.log('adding for in_play_value: ' + combat_units[unit_id]['in_play_value']);
		}
		if(combat_units[unit_id]['strength'] != undefined && combat_units[unit_id]['strength'] != false)
		{
			unit_value += combat_units[unit_id]['strength'];
			console.log('adding for strength: ' + combat_units[unit_id]['strength']);
		}
		if(combat_units[unit_id]['max_hp'] != undefined && combat_units[unit_id]['ai_hp'] != undefined && combat_units[unit_id]['max_hp'] != false)
		{
			unit_value += combat_units[unit_id]['ai_hp'];
			console.log('adding for ai_hp: ' + combat_units[unit_id]['ai_hp']);
		}
		console.log(combat_units[unit_id]['name'] + ' has a value of ' + unit_value);
	}
	return unit_value;
}

function filter_targets_highest_value(all_targets, min_value){
	var highest_value = 0;
	if(min_value != undefined)
	{
		highest_value = min_value;
	}
	$.each(all_targets, function(target_key, unit_id){
		var temp_unit_value = calculate_unit_value(unit_id);
		if(temp_unit_value > highest_value)
		{
			highest_value = temp_unit_value;
		}
	});
	$.each(all_targets, function(target_key, unit_id){
		var temp_unit_value = calculate_unit_value(unit_id);
		if(temp_unit_value < highest_value)
		{
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_min_cost(all_targets, min_cost){
	$.each(all_targets, function(target_key, unit_id){
		var total_cost = 0;
		$.each(combat_units[unit_id]['cost'], function(color, amount){
			total_cost += amount;
		});
		if(combat_units[unit_id]['original_side'] == 1 && deck_cards[combat_units[unit_id]['card_id']] != undefined)
		{
			total_cost += deck_cards[combat_units[unit_id]['card_id']]['grave_cost'];
		}
		if(combat_units[unit_id]['original_side'] == 2 && enemy_deck_cards[combat_units[unit_id]['card_id']] != undefined)
		{
			total_cost += enemy_deck_cards[combat_units[unit_id]['card_id']]['grave_cost'];
		}
		console.log('min_cost check: ' + total_cost + ' < ' + min_cost);
		if(total_cost < min_cost)
		{
			console.log('cannot target: ' + combat_units[unit_id]['name']);
			delete all_targets[target_key];
		}
	});
	return all_targets;
}

function filter_targets_most_enemies_in_row(all_targets){
	var best_row_ratio = 0;
	var best_row = 0;
	$.each(all_targets, function(target_key, unit_id){
		var enemies_in_current_row = 0;
		var allies_in_current_row = 0;
		var current_row_ratio = 0;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(combat_units[unit_id]['row'] == combat_unit['row'])
			{
				if(combat_unit['side'] == 1)
				{
					enemies_in_current_row++;
				}
				if(combat_unit['side'] == 2)
				{
					allies_in_current_row++;
				}
			}
		});
		if(allies_in_current_row > 0 && enemies_in_current_row > 0)
		{
			current_row_ratio = enemies_in_current_row / (allies_in_current_row + 1);
		}
		if(allies_in_current_row == 0 && enemies_in_current_row > 0)
		{
			current_row_ratio = enemies_in_current_row;
		}
		if(current_row_ratio > best_row_ratio)
		{
			best_row_ratio = current_row_ratio;
			best_row = combat_units[unit_id]['row'];
		}
	});
	$.each(all_targets, function(target_key, unit_id){
		if(combat_units[unit_id]['row'] != best_row)
		{
			delete all_targets[target_key];
		}
	});

	return all_targets;
}

function check_have_mana(mana_pool, mana_costs, grave_cost){
	if(grave_cost == undefined){grave_cost = 0;}
	if(mana_costs['colorless'] == undefined){mana_costs['colorless'] = 0;}
	var have_mana = true;
	var spare_mana = 0;
	$.each(mana_costs, function(color, amount){
		if(color != 'colorless')
		{
			if(mana_pool[color] < amount)
			{
				have_mana = false;
			}
			else
			{
				spare_mana += mana_pool[color] - amount;
			}
		}
	});

	if(mana_costs['colorless'] + grave_cost > spare_mana)
	{
		have_mana = false;
	}

	return have_mana;
}

function count_random_damage(){
	var total_random_damage = 0;
	$.each(combat_units, function(unit_id, unit){
		$.each(unit['abilities'], function(ability_id, ability){
			if(ability['has_color'] == undefined && ability['subtypes'] == undefined && ability['type'] == 'damage' && ability['target'] == 'random' && (ability['target_side'] == 'any' || (ability['target_side'] == 'enemy' && unit['side'] == 1) || (ability['target_side'] == 'ally' && unit['side'] == 2)))
			{
				total_random_damage += calculate_effect(unit, ability['effect'], undefined, ability['effect_multiplier']);
			}
		});
	});
	return total_random_damage;
}

function update_ai_hp(){
	$.each(combat_units, function(combat_unit_id, combat_unit){
		combat_unit['ai_hp'] = combat_unit['hp'];
		if(combat_unit['side'] == 1 && combat_unit['burning'] != undefined && combat_unit['burning'] > 0)
		{
			combat_unit['ai_hp'] -= combat_unit['burning'];
		}
		if(combat_unit['side'] == 1 && combat_unit['poisoned'] != undefined && combat_unit['poisoned'] > 0)
		{
			combat_unit['ai_hp'] -= combat_unit['poisoned'];
		}
		if(combat_unit['strength'] != false)
		{
			combat_unit['ai_strength'] = combat_unit['strength'];
		}
	});
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['side'] == 2 && combat_unit['stunned'] <= 0 && combat_unit['ai_hp'] > 0)
		{
			ai_reduce_ai_hp(combat_unit,get_potentional_movement_slot(combat_unit));
		}
		if(combat_unit['side'] == 1 && combat_unit['ai_hp'] > 0)
		{
			ai_reduce_enemy_ai_hp(combat_unit,get_potentional_movement_slot(combat_unit));
		}
	});
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['side'] == 2 && combat_unit['burning'] != undefined && combat_unit['burning'] > 0)
		{
			combat_unit['ai_hp'] -= combat_unit['burning'];
		}
		if(combat_unit['side'] == 2 && combat_unit['poisoned'] != undefined && combat_unit['poisoned'] > 0)
		{
			combat_unit['ai_hp'] -= combat_unit['poisoned'];
		}
		/*if(combat_unit['ai_hp'] <= 0 && combat_unit['ai_hp'] != false)
		{
			console.log(combat_unit['name'] + ' is as good as dead');
		}*/
	});
};

function get_potentional_movement_slot(unit){
	var found_new_slot = false;
	var new_slot = {col:0,row:0};
	$.each(unit['abilities'],function(ability_key, ability){

		if(ability['type'] == 'move_to_empty' && ability['target'] == 'self' && found_new_slot == false && (ability['proc'] == 'start_turn' || ability['proc'] == 'before_attack'))
		{
			if(combat_units[unit['unit_id']] != undefined)
			{
				var move_to_side = 0;
				if(ability['move_to_adjacent'] != undefined)
				{
					if(ability['move_to_side'] != undefined && (ability['move_to_side'] == 'ally' && unit['side'] == 1) || (ability['move_to_side'] == 'enemy' && unit['side'] == 2)){move_to_side = 1;}
					if(ability['move_to_side'] != undefined && (ability['move_to_side'] == 'ally' && unit['side'] == 2) || (ability['move_to_side'] == 'enemy' && unit['side'] == 1)){move_to_side = 2;}
				}
				if(ability['move_to_side'] == 'any')
				{
					move_to_side = 'any';
				}
				if(unit['type'] == 'structure')
				{
					new_slot = find_random_empty_structure_slot(ability['move_to_adjacent'], unit['side'], undefined, undefined, undefined, ability['move_to_type']);
				}
				if(unit['type'] == 'creature')
				{
					new_slot = find_random_empty_slot(ability['move_to_adjacent'], move_to_side, undefined, undefined, ability['move_to_max_hp'], undefined, unit['unit_key'], ability['move_to_type'], ability['specific_slot'], unit['unit_id']);
				}
				found_new_slot = true;
			}
			
		}
	});
	if(new_slot['col'] == 0 && new_slot['row'] == 0)
	{
		new_slot['col'] = unit['col'];
		new_slot['row'] = unit['row'];
	}
	return new_slot;
}

function check_move_restrictions(){
	var should_not_move = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['do_not_play_moves'] != undefined)
		{
			should_not_move += unit['do_not_play_moves'];
		}
	});
	return should_not_move;
}

function process_enemy_turn(){
	var did_anything = false;
	var have_good_grave_cards = 0;
	could_play_if_more_mana = 0;
	var can_reclaim = true;
	random_damage = count_random_damage();
	//console.log('random damage: ' + random_damage);
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['side'] == 2 && combat_unit['do_not_reclaim_while_in_play'] != undefined)
		{
			can_reclaim = false;
		}
	});

	//console.log('processing turn...');
	
	for (card_priority = 0; card_priority < 6; card_priority++) {

		$.each(enemy_deck_cards, function(card_id, card){
			update_ai_hp();
			if(available_cards[card['card_id']] != undefined && (available_cards[card['card_id']]['card_priority'] == undefined || available_cards[card['card_id']]['card_priority'] == card_priority || card_priority == 0) && enemy_actions > 0 && card['status'] != 'in_play')
			{
				var can_play_card = true;
				var current_card = available_cards[card['card_id']];
				/*can_play_card = check_have_mana(enemy_mana, available_cards[card['card_id']]['cost'], enemy_deck_cards[card_id]['grave_cost']);*/
				/*$.each(available_cards[card['card_id']]['cost'], function(color, amount){
					if(enemy_mana[color] < amount)
					{
						can_play_card = false;
					}
				});*/
				if(Math.random() > 0.5 && can_play_card == true && enemy_hp > 30)
				{
					//can_play_card = false;
				}
				if(can_play_card == true)
				{
					if(available_cards[card['card_id']]['needs_damaged_friendly_creatures'] != undefined && available_cards[card['card_id']]['needs_damaged_friendly_creatures'] != damaged_creature_on_side(2))
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['needs_to_be_damaged_friendly_creatures'] != undefined && available_cards[card['card_id']]['needs_to_be_damaged_friendly_creatures'] != to_be_damaged_creature_on_side(2))
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['needs_damaged_friendly_structures'] != undefined && available_cards[card['card_id']]['needs_damaged_friendly_structures'] != damaged_structure_on_side(2))
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['needs_friendly_creatures'] != undefined && available_cards[card['card_id']]['needs_friendly_creatures'] != friendly_creatures_active(2))
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['needs_friendly_structures'] != undefined && available_cards[card['card_id']]['needs_friendly_structures'] != friendly_structures_active(2))
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['needs_structures_in_hand'] != undefined && available_cards[card['card_id']]['needs_structures_in_hand'] == false && count_hand_cards(enemy_deck_cards,'structure') > 0)
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['needs_structures_in_hand'] != undefined && available_cards[card['card_id']]['needs_structures_in_hand'] > 0 && count_hand_cards(enemy_deck_cards,'structure') < available_cards[card['card_id']]['needs_structures_in_hand'])
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['min_enemy_hand_cards'] != undefined && available_cards[card['card_id']]['min_enemy_hand_cards'] > count_hand_cards(deck_cards,undefined))
					{
						can_play_card = false;
					}
					if(available_cards[card['card_id']]['min_enemy_grave_cards'] != undefined && available_cards[card['card_id']]['min_enemy_grave_cards'] > count_grave_cards(deck_cards,undefined))
					{
						can_play_card = false;
					}
					if(current_card['max_hp'] != false && check_move_restrictions() >= current_card['max_hp'] && match_array_values(['moves'], current_card['subtypes']) == true)
					{
						can_play_card = false;
					}

					

					if(current_card['max_enemy_hp'] != undefined && current_card['max_enemy_hp'] < enemy_hp)
					{
						can_play_card = false;
					}
					if(current_card['min_enemy_hp'] != undefined && current_card['min_enemy_hp'] > enemy_hp)
					{
						can_play_card = false;
					}
					
					if(current_card['needs_target'] != undefined && current_card['needs_target'] > 0)
					{
						var fake_spell_target_count = 0;
						$.each(current_card['abilities'], function(ability_key, ability){

							var fake_all_targets = find_targets(ability,{side:2},undefined);

							fake_spell_target_count += count_object(fake_all_targets);
						});
						if(fake_spell_target_count < current_card['needs_target'])
						{
							can_play_card = false;
						}
					}
					if(current_card['needs_dead_creature'] != undefined && current_card['needs_dead_creature'] > count_grave_cards(enemy_deck_cards, 'creature'))
					{
						can_play_card = false;
					}
					if(current_card['needs_dead_structure'] != undefined && current_card['needs_dead_structure'] > count_grave_cards(enemy_deck_cards, 'structure'))
					{
						can_play_card = false;
					}
					if(current_card['needs_dead_spell'] != undefined && current_card['needs_dead_spell'] > count_grave_cards(enemy_deck_cards, 'spell'))
					{
						can_play_card = false;
					}
					if(current_card['needs_cards_in_grave'] != undefined && current_card['needs_cards_in_grave'] > count_grave_cards(enemy_deck_cards, 'any'))
					{
						can_play_card = false;
					}
					if(current_card['place_on_empty_board'] != undefined && current_card['place_on_empty_board'] == false && count_enemy_units(1) == 0)
					{
						can_play_card = false;
					}
					if(current_card['abilities'] != undefined && current_card['abilities'][0] != undefined && current_card['abilities'][0]['type'] != undefined && (current_card['abilities'][0]['type'] == 'draw_card' || current_card['abilities'][0]['type'] == 'reclaim') && count_hand_cards(enemy_deck_cards) > 6)
					{
						can_play_card = false;
					}
					if(current_card['unique_on_bg'] != undefined && current_card['unique_on_bg'] == true && count_unit_on_bg(card['card_id']) > 0)
					{
						can_play_card = false;
					}
					if(current_card['max_friendly_structures'] != undefined && current_card['max_friendly_structures'] < count_friendly_structures())
					{
						can_play_card = false;
					}
					if(current_card['min_creatures_in_play'] != undefined && current_card['min_creatures_in_play'] > count_creatures())
					{
						can_play_card = false;
					}
					if(current_card['max_creatures_in_play'] != undefined && current_card['max_creatures_in_play'] < count_creatures())
					{
						can_play_card = false;
					}
					if(current_card['min_enemy_creatures_in_play'] != undefined && current_card['min_enemy_creatures_in_play'] > friendly_creatures_on_side(1))
					{
						can_play_card = false;
					}
					if(current_card['min_enemy_structures_in_play'] != undefined && current_card['min_enemy_structures_in_play'] > friendly_structures_on_side(1))
					{
						can_play_card = false;
					}
					
					if(current_card['min_enemy_exposed_structures_in_play'] != undefined && current_card['min_enemy_exposed_structures_in_play'] > friendly_exposed_structures_on_side(1))
					{
						can_play_card = false;
					}
					if(current_card['minimum_enemy_doomed_creatures'] != undefined && count_doomed_creatures(1) < current_card['minimum_enemy_doomed_creatures'] )
					{
						can_play_card = false;
					}
					if(current_card['minimum_enemy_doomed_structures'] != undefined && count_doomed_structures(1) < current_card['minimum_enemy_doomed_structures'] )
					{
						can_play_card = false;
					}
					if(current_card['minimum_doomed_structures'] != undefined && count_doomed_structures('any') < current_card['minimum_doomed_structures'] )
					{
						can_play_card = false;
					}
					if(current_card['min_enemy_mana'] != undefined && check_have_mana(player_mana, current_card['min_enemy_mana']) == false)
					{
						can_play_card = false;
					}
					/*if(current_card['needs_specific_ally'] != undefined)
					{
						console.log(count_specific_ally(2, current_card['needs_specific_ally']));
					}*/
					if(current_card['needs_specific_ally'] != undefined && count_specific_ally(2, current_card['needs_specific_ally']) == 0 )
					{
						can_play_card = false;
					}
					if(current_card['needs_enemy_hand'] != undefined && count_hand_cards(deck_cards) < current_card['needs_enemy_hand'] )
					{
						can_play_card = false;
					}

					if(current_card['min_actions_left'] != undefined && enemy_actions < current_card['min_actions_left'] )
					{
						can_play_card = false;
					}

					/*if(current_card['mana_needed'] != undefined)
					{
						$.each(current_card['mana_needed'], function(color, amount){
							if(enemy_mana[color] < amount)
							{
								can_play_card = false;
							}
						});
					}*/
					if(current_card['max_grave_cost'] != undefined && card['grave_cost'] > current_card['max_grave_cost'])
					{
						can_play_card = false;
					}

					if(card['status'] == 'hand' && current_card['proc_from_grave'] != undefined)
					{
						can_play_card = false;
						card_to_discard = card_id;

						if(card_to_discard > -1){
							enemy_actions -= 1;
							move_card_to_grave(2, card_to_discard);
							spell_counter++;
							var current_spell = 'spell_' + spell_counter;
							var pased_card = parse_card(enemy_deck_cards[card_to_discard]['card_id'], 'full', 0, current_spell, undefined, enemy_deck_cards[card_to_discard]['grave_cost']);

							log_enemy_card_discarded(enemy_deck_cards[card_to_discard]['card_id']);
							setTimeout(function(){		
							    $('.enemy_image').prepend('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
						    },total_timeout);
						    total_timeout += game_speed;
						    setTimeout(function(){	
								$('.enemy_image .' + current_spell).addClass('dead');
								setTimeout(function(){
									$('.enemy_image .' + current_spell).remove();
								},total_timeout + 500);
						    },total_timeout);
							$.each(available_cards[enemy_deck_cards[card_to_discard]['card_id']]['abilities'], function(ability_key, ability){
								if(ability['proc'] == 'on_discarded')
								{
									process_ability(-1, ability, 'enemy', 2, undefined);
								}
							});
							process_abilities('ally_card_discarded', 'enemy', 2, undefined);
							process_abilities('enemy_card_discarded', 'player', 1, undefined);
						}
						
					}

					if(current_card['type'] != 'spell'){can_play_card = ai_check_fake_spell_targets(current_card, can_play_card, undefined);}

				}

				var fake_mana_cost = {
					blue: 	0,
					red: 	0,
					green: 	0,
					purple: 0,
					orange: 0,
					yellow: 0,
					colorless: 0
				};
				$.each(available_cards[card['card_id']]['cost'], function(color, amount){
					fake_mana_cost[color] += amount;
				});
				if(available_cards[card['card_id']]['mana_needed'] != undefined)
				{
					$.each(available_cards[card['card_id']]['mana_needed'], function(color, amount){
						fake_mana_cost[color] += amount;
					});
				}
				

				var have_enough_mana_to_play_this = check_have_mana(enemy_mana, fake_mana_cost, enemy_deck_cards[card_id]['grave_cost']);

				if(card['status'] == 'hand' && can_play_card == true && have_enough_mana_to_play_this == false)
				{
					can_play_card = false;
					if(card_priority == 0)
					{
						could_play_if_more_mana += 1;
					}
				}

				if(can_play_card == true && current_card['type'] != 'spell' && have_enough_mana_to_play_this == true)
				{
					var empty_slot = ai_find_best_empty_spot(current_card, current_safety_level);
					if(empty_slot['col'] == 0 && empty_slot['row'] == 0)
					{
						can_play_card = false;
					}
				}
				if(can_play_card == true && card['status'] == 'grave' && have_enough_mana_to_play_this == true && card_priority == 0)
				{
					have_good_grave_cards += 1;
				}

				if(can_play_card == true)
				{
					can_play_card = check_current_units_restrictions(current_card);
				}

				if(card['status'] == 'hand' && can_play_card == true && card_priority > 0)
				{
					if(available_cards[card['card_id']]['type'] == 'creature')
					{
						/*var empty_slot = {col:0,row:0};
						
						empty_slot = find_random_empty_slot(available_cards[card['card_id']]['has_adjacent_enemy'], 1, available_cards[card['card_id']]['place_on_empty_board'], available_cards[card['card_id']]['no_adjacent_ally'], available_cards[card['card_id']]['strength'],available_cards[card['card_id']]);
						
						
						if(empty_slot['col'] == 0 && available_cards[card['card_id']]['one_hit_kill'] == undefined && available_cards[card['card_id']]['one_hit_kill'] != true)
						{
							var empty_slot = find_random_empty_slot(available_cards[card['card_id']]['has_adjacent_enemy'], 1, available_cards[card['card_id']]['place_on_empty_board'], available_cards[card['card_id']]['no_adjacent_ally'], undefined, available_cards[card['card_id']]);
						}*/
						var empty_slot = ai_find_best_empty_spot(current_card, current_safety_level);
						if(empty_slot['col'] == 0 && empty_slot['row'] == 0 && current_card['suicidal'] == true)
						{
							empty_slot = ai_find_best_empty_spot(current_card, 0);
						}
						var available_col = empty_slot['col'];
						var available_row = empty_slot['row'];
						if(available_col > 0 && available_row > 0)
						{
							card_priority = 0;
							total_timeout += game_speed;
							
							/*$.each(available_cards[card['card_id']]['cost'], function(color, amount){
								enemy_mana[color] -= amount;
							});*/
							enemy_deck_cards[card_id]['status'] = 'in_play';
							pay_mana_costs(enemy_mana, available_cards[card['card_id']]['cost'], enemy_deck_cards[card_id]['grave_cost']);
							show_current_mana();
							
							show_enemy_hand();

							var card_being_played = enemy_deck_cards[card_id]['card_id'];

							var side = 2;
							var side_string = 'enemy';

							selected_card_id = card_id;
							log_enemy_card_played(card['card_id']);
							summon_unit(card_being_played, available_col, available_row, side, side_string);
							update_ai_hp();
							did_anything = true;
							enemy_actions -= 1;
							/*var new_unit_key = get_highest_key_in_object(combat_units) + 1;
						    combat_units[new_unit_key] = copyobject(available_cards[card_being_played]);
						    combat_units[new_unit_key]['card_id'] = card_id;
						    combat_units[new_unit_key]['unit_id'] = new_unit_key;
						    combat_units[new_unit_key]['col'] = available_col;
						    combat_units[new_unit_key]['row'] = available_row;
						    combat_units[new_unit_key]['side'] = 2;
						    combat_units[new_unit_key]['side_string'] = 'enemy';
						    combat_units[new_unit_key]['hp'] = combat_units[new_unit_key]['max_hp'];
						    var parsed_unit = parse_card(card_being_played, 'combat', new_unit_key, new_unit_key);
						    setTimeout(function(){		
							    $('.combat_grid').append(parsed_unit);
							    $('.unit_' + new_unit_key).addClass('col_' + available_col);
							    $('.unit_' + new_unit_key).addClass('row_' + available_row);
							    $('.unit_' + new_unit_key).addClass('side_2');
						    },total_timeout);*/
						}
					}
					if(available_cards[card['card_id']]['type'] == 'structure')
					{
						//var empty_slot = find_random_empty_structure_slot(available_cards[card['card_id']]['has_adjacent_enemy'], 1, available_cards[card['card_id']]['place_on_empty_board'], available_cards[card['card_id']]['no_adjacent_ally']);
						var empty_slot = ai_find_best_empty_spot(current_card, current_safety_level);
						var available_col = empty_slot['col'];
						var available_row = empty_slot['row'];
						if(available_col > 0 && available_row > 0)
						{
							card_priority = 0;
							total_timeout += game_speed;
							
							/*$.each(available_cards[card['card_id']]['cost'], function(color, amount){
								enemy_mana[color] -= amount;
							});*/
							enemy_deck_cards[card_id]['status'] = 'in_play';
							pay_mana_costs(enemy_mana, available_cards[card['card_id']]['cost'], enemy_deck_cards[card_id]['grave_cost']);
							show_current_mana();
							
							show_enemy_hand();

							var card_being_played = enemy_deck_cards[card_id]['card_id'];

							var side = 2;
							var side_string = 'enemy';

							selected_card_id = card_id;
							log_enemy_card_played(card['card_id']);
							summon_unit(card_being_played, available_col, available_row, side, side_string);
							update_ai_hp();
							did_anything = true;
							enemy_actions -= 1;
							/*var new_unit_key = get_highest_key_in_object(combat_units) + 1;
						    combat_units[new_unit_key] = copyobject(available_cards[card_being_played]);
						    combat_units[new_unit_key]['card_id'] = card_id;
						    combat_units[new_unit_key]['unit_id'] = new_unit_key;
						    combat_units[new_unit_key]['col'] = available_col;
						    combat_units[new_unit_key]['row'] = available_row;
						    combat_units[new_unit_key]['side'] = 2;
						    combat_units[new_unit_key]['side_string'] = 'enemy';
						    combat_units[new_unit_key]['hp'] = combat_units[new_unit_key]['max_hp'];
						    var parsed_unit = parse_card(card_being_played, 'combat', new_unit_key, new_unit_key);
						    setTimeout(function(){		
							    $('.combat_grid').append(parsed_unit);
							    $('.unit_' + new_unit_key).addClass('col_' + available_col);
							    $('.unit_' + new_unit_key).addClass('row_' + available_row);
							    $('.unit_' + new_unit_key).addClass('side_2');
						    },total_timeout);*/
						}
					}

					if(available_cards[card['card_id']]['type'] == 'spell')
					{
						//console.log('attempting to play ' + current_card['name']);
						var good_target = false;
						if(current_card['spell_target'] == 'unit')
						{
							var target_id = find_random_spell_target(current_card['spell_target_side'], current_card['abilities'][0], undefined, current_card, card['grave_cost']);
							if(target_id !== 0)
							{
								good_target = true;
							}
							
						}
						//console.log(target_id);
						if(current_card['spell_target'] == 'structure' || current_card['spell_target'] == 'creature')
						{
							var target_id = find_random_spell_target(current_card['spell_target_side'], current_card['abilities'][0], current_card['spell_target'], current_card, card['grave_cost']);
							if(target_id !== 0)
							{
								good_target = true;
							}
							
						}
						if(current_card['spell_target'] == 'auto')
						{
							var target_id = 0;
							good_target = true;
						}
						
						if(good_target == true)
						{
							good_target = check_ally_spell_restrictions(2);
						}

						if(current_card['abilities'][0] != undefined && current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'damage' && current_card['abilities'][0]['target'] == 'random' && (most_units_side() == 2 || most_units_side() == 0))
						{
							good_target = false;
							//console.log('to many allies');
						}

						if(current_card['abilities'][0] != undefined && target_id > 0 && current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'damage' && current_card['abilities'][0]['target'] == 'same_row' && most_units_side_in_row(combat_units[target_id]['row']) == 2)
						{
							good_target = false;
						}

						/*if(current_card['abilities'][0] != undefined && current_card['abilities'][0]['target'] == 'random' && current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'increase_strength' && (most_units_side(current_card) == 2 || most_units_side(current_card) == 0) && current_card['abilities'][0]['effect'] < 0)
						{
							good_target = false;
						}

						if(current_card['abilities'][0] != undefined && current_card['abilities'][0]['target'] == 'random' && current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'increase_strength' && (most_units_side(current_card) == 1 || most_units_side(current_card) == 0) && current_card['abilities'][0]['effect'] > 0)
						{
							good_target = false;
						}*/

						/*if(current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'destroy' && current_card['abilities'][0]['target_type'] == 'structure' && (most_structures_side() == 2 || most_structures_side() == 0))
						{
							good_target = false;
						}*/

						if(current_card['abilities'][0] != undefined && current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'summon' && (most_units_side() == 2 || most_units_side() == 0))
						{
							good_target = false;
						}

						/*if(current_card['abilities'][0]['target_side'] == 'any' && current_card['abilities'][0]['type'] == 'destroy' && current_card['abilities'][0]['target_type'] == 'creature' && (most_creature_side() == 2 || most_creature_side() == 0))
						{
							console.log('to many allies for ' + current_card['name']);
							good_target = false;
						}*/

						if(current_card['abilities'][0] != undefined && current_card['abilities'][0]['type'] == 'move_to_empty' && (count_units_side(1) == 0 || count_units_side(2) == 0))
						{
							good_target = false;
						}

						selected_col = 0;
					    selected_row = 0;
					    if(target_id > 0)
					    {
					    	selected_col = combat_units[target_id]['col'];
					    	selected_row = combat_units[target_id]['row'];
					    }
						
						good_target = ai_check_fake_spell_targets(current_card, good_target, target_id);

						if(good_target == true)
						{
							card_priority = 0;
							total_timeout += game_speed;
							/*$.each(current_card['cost'], function(color, amount){
								enemy_mana[color] -= amount;
							});*/
							enemy_deck_cards[card_id]['status'] = 'in_play';
							pay_mana_costs(enemy_mana, current_card['cost'], enemy_deck_cards[card_id]['grave_cost']);
							show_current_mana();
							
							show_enemy_hand();
							
							spell_counter++;
							var current_spell = 'spell_' + spell_counter;
							var pased_card = parse_card(card['card_id'], 'full', 0, current_spell, undefined, card['grave_cost']);

							log_enemy_card_played(card['card_id']);
							setTimeout(function(){		
							    $('.enemy_image').prepend('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
						    },total_timeout);
						    total_timeout += game_speed;
							
						    process_abilities('before_any_spell_cast', 'player', 1);
						    process_abilities('before_any_spell_cast', 'enemy', 2);
						    process_abilities('before_any_spell_cast', 'neutral', 0);

						    process_abilities('before_enemy_spell_cast', 'player', 1);
						    process_abilities('before_ally_spell_cast', 'enemy', 2);
						    process_abilities('before_enemy_spell_cast', 'neutral', 0);

						    selected_card_id = card_id;

						    summon_fake_spell(card['card_id'], selected_col, selected_row, 2, 'enemy');
						    update_ai_hp();
						    did_anything = true;
						    enemy_actions -= 1;
						    
						    show_enemy_hand();
							/*$.each(current_card['abilities'], function(ability_key, ability){
								if(ability['type'] == 'summon' || current_card['spell_auto_cast'] == true)
								{
									process_ability({side:2}, ability, 'enemy', 2);
								}
								else
								{
									process_ability(combat_units[target_id], ability, 'enemy', 2);
								}
								
							});*/

							setTimeout(function(){	
								$('.enemy_image .' + current_spell).fadeOut(1000);
								setTimeout(function(){
									$('.enemy_image .' + current_spell).remove();
								},total_timeout + 1000);
						    },total_timeout);
						    total_timeout += game_speed;

						    process_abilities('any_spell_cast', 'player', 1);
						    process_abilities('any_spell_cast', 'enemy', 2);
						    process_abilities('any_spell_cast', 'neutral', 0);

						    process_abilities('enemy_spell_cast', 'player', 1);
						    process_abilities('ally_spell_cast', 'enemy', 2);
						    process_abilities('enemy_spell_cast', 'neutral', 0);

						    if(enemy_deck_cards[card_id]['status'] == 'in_play')
						    {
						    	move_card_to_grave(2, card_id);
						    }
						}
					}
				}
				else
				{
					if(card['status'] == 'hand' && current_card['discard_if_cannot_play'] != undefined && current_card['discard_if_cannot_play'] == true && gamedata['limited_actions'] == false && card_priority > 0)
					{
						did_anything = true;
						enemy_deck_cards[card_id]['status'] = 'grave';
						show_enemy_hand();
						spell_counter++;
						var current_spell = 'spell_' + spell_counter;
						var pased_card = parse_card(enemy_deck_cards[card_id]['card_id'], 'full', 0, current_spell);

						log_enemy_card_discarded(enemy_deck_cards[card_id]['card_id']);
						setTimeout(function(){		
						    $('.enemy_image').prepend('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
					    },total_timeout);
					    total_timeout += 500;
					    setTimeout(function(){	
							$('.enemy_image .' + current_spell).addClass('dead');
							setTimeout(function(){
								$('.enemy_image .' + current_spell).remove();
							},total_timeout + 1000);
					    },total_timeout);
						$.each(available_cards[enemy_deck_cards[card_id]['card_id']]['abilities'], function(ability_key, ability){
							if(ability['proc'] == 'on_discarded')
							{
								process_ability(-1, ability, 'enemy', 2, undefined);
							}
						});
						process_abilities('ally_card_discarded', 'enemy', 2, undefined);
						process_abilities('enemy_card_discarded', 'player', 1, undefined);
						card_priority = 1;
					}
				}
		}
		});
	}
	var can_reclaim = true;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['side'] == 2 && combat_unit['do_not_reclaim_while_in_play'] != undefined)
		{
			can_reclaim = false;
		}
	});
	if(did_anything == true)
	{
		current_safety_level = 3;
	}
	if(did_anything == false && current_safety_level > 0 && enemy_actions > 0)
	{
		current_safety_level -= 1;
		process_enemy_turn();
	}
	if(current_safety_level > 0 || could_play_if_more_mana < 4)
	{
		/*console.log('good grave cards: ' + have_good_grave_cards);
		console.log('could_play_if_more_mana: ' + could_play_if_more_mana);*/

		if(can_reclaim == true && could_play_if_more_mana < 4 && did_anything == false && enemy_actions > 2 && have_good_grave_cards >= could_play_if_more_mana && have_good_grave_cards > enemy_hp / 10 && have_good_grave_cards > 4 - current_phase && count_grave_cards(enemy_deck_cards,'any') > 1 && have_good_grave_cards > 1)
		{
			console.log('can reclaim: ' + can_reclaim + ' / should be true');
			console.log('good grave cards: ' + have_good_grave_cards + ' / should be > 2');
			console.log('could_play_if_more_mana: ' + could_play_if_more_mana + ' / should be < 3');
			console.log('did_anything: ' + did_anything + ' / should be false');
			console.log('enemy_actions: ' + enemy_actions + ' / should be > 2');
			for (var i = count_grave_cards(enemy_deck_cards, undefined); i >= 0; i--) {
				reclaim_card(enemy_deck_cards, 'any');
			};
	    	show_enemy_hand();
	    	adjust_hero_hp({target_side:'ally',can_be_zero: false}, (enemy_hp * -0.25), 2, undefined);
	    	enemy_actions -= 1;
	    	total_timeout += game_speed;
	    	did_anything = true;
		}
	}
	if(enemy_actions > 0 && did_anything == false && gamedata['limited_actions'] == true)
	{
		process_ability(
			{side:2},
			{
				type: 			'gain_mana',
				mana_chances: 	'owned_gems',
				mana_amount: 	1,
				target_side: 		'ally'
			},
			'enemy',
			2,
			undefined
		);
		enemy_actions -= 1;
		total_timeout += game_speed;
	}
	if(enemy_actions > 0 && gamedata['limited_actions'] == true)
	{
		current_safety_level = 3;
		process_enemy_turn();
	}
	if(did_anything == true && gamedata['limited_actions'] == false)
	{
		//console.log('##### processing turn again');
		current_safety_level = 3;
		could_play_if_more_mana = 0;
		did_anything = false;
		enemy_actions = 3;
		process_enemy_turn();
		
	}
	//total_timeout += 500;
}

function check_current_units_restrictions(current_card){
	var can_play_card = true;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == 2 && unit['do_not_play_other'] != undefined && (unit['do_not_play_other'] == current_card['type'] || (unit['do_not_play_other'] == 'unit' && (current_card['type'] == 'creature' || current_card['type'] == 'structure'))))
		{
			console.log('unit on board restricts playing ' + current_card['name']);
			can_play_card = false;
		}
		if(unit['do_not_play_other'] != undefined && unit['do_not_play_other'] == current_card['type'] && unit['do_not_play_other'] == 'spell')
		{
			console.log('unit on board restricts playing ' + current_card['name']);
			can_play_card = false;
		}
	});
	return can_play_card;
}

function check_ally_spell_restrictions(side){
	var can_play_card = true;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['do_not_cast_spell_unless_damaged'] != undefined && unit['do_not_cast_spell_unless_damaged'] == true && unit['max_hp'] == unit['hp'])
		{
			can_play_card = false;
		}
	});
	return can_play_card;
}

function auto_spell_cast(card_id, side){

	if(side == 1)
	{
		var current_card = available_cards[deck_cards[card_id]['card_id']];
		var card = deck_cards[card_id];
		selected_card_id = card_id;

		got_enough_mana = check_have_mana(player_mana, current_card['cost'], deck_cards[card_id]['grave_cost']);

		if(got_enough_mana == true)
		{

			deck_cards[card_id]['status'] = 'in_play';
			pay_mana_costs(player_mana, current_card['cost'], deck_cards[card_id]['grave_cost']);
			show_current_mana();
			
			show_player_hand();
			
			spell_counter++;
			var current_spell = 'spell_' + spell_counter;
			var pased_card = parse_card(card['card_id'], 'full', 0, current_spell, undefined, card['grave_cost']);

			log_player_card_played(card['card_id']);
			setTimeout(function(){		
			    $('.card_blocker').prepend('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
		    },total_timeout);
		    total_timeout += game_speed;
			
		    process_abilities('before_any_spell_cast', 'player', 1);
		    process_abilities('before_any_spell_cast', 'enemy', 2);
		    process_abilities('before_any_spell_cast', 'neutral', 0);

		    process_abilities('before_enemy_spell_cast', 'enemy', 2);
		    process_abilities('before_ally_spell_cast', 'ally', 1);
		    process_abilities('before_enemy_spell_cast', 'neutral', 0);

		    summon_fake_spell(card['card_id'], 0, 0, 1, 'player');
		    
		    show_player_hand();

			setTimeout(function(){	
				$('.card_blocker .' + current_spell).fadeOut(1000);
				setTimeout(function(){
					$('.card_blocker .' + current_spell).remove();
				},total_timeout + 1000);
		    },total_timeout);
		    total_timeout += game_speed;

		    process_abilities('any_spell_cast', 'player', 1);
		    process_abilities('any_spell_cast', 'enemy', 2);
		    process_abilities('any_spell_cast', 'neutral', 0);

		    process_abilities('enemy_spell_cast', 'enemy', 2);
		    process_abilities('ally_spell_cast', 'ally', 1);
		    process_abilities('enemy_spell_cast', 'neutral', 0);

		    //console.log(enemy_deck_cards[card_id]);

		    if(deck_cards[card_id]['status'] == 'in_play')
		    {
		    	move_card_to_grave(1, card_id);
		    }
		}
	}
	if(side == 2)
	{
		var current_card = available_cards[enemy_deck_cards[card_id]['card_id']];
		var card = enemy_deck_cards[card_id];
		selected_card_id = card_id;

		got_enough_mana = check_have_mana(enemy_mana, current_card['cost'], enemy_deck_cards[card_id]['grave_cost']);

		if(got_enough_mana == true)
		{

			enemy_deck_cards[card_id]['status'] = 'in_play';
			pay_mana_costs(enemy_mana, current_card['cost'], enemy_deck_cards[card_id]['grave_cost']);
			show_current_mana();
			
			show_enemy_hand();
			
			spell_counter++;
			var current_spell = 'spell_' + spell_counter;
			var pased_card = parse_card(card['card_id'], 'full', 0, current_spell, undefined, card['grave_cost']);

			log_enemy_card_played(card['card_id']);
			setTimeout(function(){		
			    $('.enemy_image').prepend('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
		    },total_timeout);
		    total_timeout += game_speed;
			
		    process_abilities('before_any_spell_cast', 'player', 1);
		    process_abilities('before_any_spell_cast', 'enemy', 2);
		    process_abilities('before_any_spell_cast', 'neutral', 0);

		    process_abilities('before_enemy_spell_cast', 'player', 1);
		    process_abilities('before_ally_spell_cast', 'enemy', 2);
		    process_abilities('before_enemy_spell_cast', 'neutral', 0);

		    summon_fake_spell(card['card_id'], 0, 0, 2, 'enemy');
		    
		    show_enemy_hand();

			setTimeout(function(){	
				$('.enemy_image .' + current_spell).fadeOut(1000);
				setTimeout(function(){
					$('.enemy_image .' + current_spell).remove();
				},total_timeout + 1000);
		    },total_timeout);
		    total_timeout += game_speed;

		    process_abilities('any_spell_cast', 'player', 1);
		    process_abilities('any_spell_cast', 'enemy', 2);
		    process_abilities('any_spell_cast', 'neutral', 0);

		    process_abilities('enemy_spell_cast', 'player', 1);
		    process_abilities('ally_spell_cast', 'enemy', 2);
		    process_abilities('enemy_spell_cast', 'neutral', 0);

		    if(enemy_deck_cards[card_id]['status'] == 'in_play')
		    {
		    	move_card_to_grave(2, card_id);
		    }
		}
	}
}

function ai_check_fake_spell_targets(current_card, good_target, target_id){
	var enemy_targets = 0;
	var friendly_targets = 0;
	var original_good_target = good_target;
	if(good_target == true && current_card['min_spell_targets'] != undefined)
	{
		var fake_spell_target_count = 0;
		$.each(current_card['abilities'], function(ability_key, ability){
			if(ability['type'] == 'summon' || (current_card['spell_auto_cast'] != undefined && current_card['spell_auto_cast'] == true) || target_id == undefined)
			{
				var fake_all_targets = find_targets(ability,{side:2},undefined);
			}
			else
			{
				var fake_all_targets = find_targets(ability,combat_units[target_id],undefined);
			}
			fake_spell_target_count += count_object(fake_all_targets);
		});
		if(fake_spell_target_count < current_card['min_spell_targets'])
		{
			good_target = false;
		}
	}

	if(good_target == true && (current_card['min_enemy_spell_targets'] != undefined || current_card['max_enemy_spell_targets'] != undefined))
	{
		var fake_spell_target_count = 0;
		$.each(current_card['abilities'], function(ability_key, ability){
			if(ability['type'] == 'summon' || (current_card['spell_auto_cast'] != undefined && current_card['spell_auto_cast'] == true) || target_id == undefined)
			{
				var fake_all_targets = find_targets(ability,{side:2},undefined);
			}
			else
			{
				var fake_all_targets = find_targets(ability,combat_units[target_id],undefined);
			}
			$.each(fake_all_targets, function(useless_key, unit_id){
				if(combat_units[unit_id]['side'] == 2)
				{
					delete fake_all_targets[useless_key];
				}
			})
			fake_spell_target_count += count_object(fake_all_targets);
		});
		//console.log(fake_spell_target_count);
		enemy_targets += fake_spell_target_count;
		if(fake_spell_target_count < current_card['min_enemy_spell_targets'])
		{
			good_target = false;
		}
		if(fake_spell_target_count > current_card['max_enemy_spell_targets'])
		{
			good_target = false;
		}
	}

	if(good_target == true && (current_card['max_friendly_spell_targets'] != undefined || current_card['min_friendly_spell_targets'] != undefined))
	{
		var fake_spell_target_count = 0;
		$.each(current_card['abilities'], function(ability_key, ability){
			if(ability['type'] == 'summon' || (current_card['spell_auto_cast'] != undefined && current_card['spell_auto_cast'] == true) || target_id == undefined)
			{
				var fake_all_targets = find_targets(ability,{side:2},undefined);
			}
			else
			{
				var fake_all_targets = find_targets(ability,combat_units[target_id],undefined);
			}
			$.each(fake_all_targets, function(useless_key, unit_id){
				if(combat_units[unit_id]['side'] != 2)
				{
					delete fake_all_targets[useless_key];
				}
			})
			fake_spell_target_count += count_object(fake_all_targets);
		});
		friendly_targets += fake_spell_target_count;
		if(fake_spell_target_count < current_card['min_friendly_spell_targets'])
		{
			good_target = false;
		}
		if(fake_spell_target_count > current_card['max_friendly_spell_targets'])
		{
			good_target = false;
		}
	}
	//console.log(target_id);
	if(current_card['spell_auto_cast'] == undefined && target_id != undefined && target_id > 0 && current_card['abilities'][0]['type'] == 'healing' && combat_units[target_id]['ai_hp'] + (calculate_effect(current_card, current_card['abilities'][0]['effect'], target_id, current_card['abilities'][0]['effect_multiplier']) * current_card['abilities'][0]['effect_count']) <= 0)
	{
		can_target = false;
		console.log('healing wont save it');
	}

	if(current_card['check_targets_value'] != undefined && current_card['check_targets_value'] == true)
	{
		console.log('checking clears...');
		var current_player_targets_value = 0;
		var current_enemy_targets_value = 0;
		$.each(current_card['abilities'], function(ability_key, ability){
			if(ability['type'] == 'summon' || (current_card['spell_auto_cast'] != undefined && current_card['spell_auto_cast'] == true) || target_id == undefined)
			{
				var fake_all_targets = find_targets(ability,{side:2},undefined);
			}
			else
			{
				var fake_all_targets = find_targets(ability,combat_units[target_id],undefined);
			}
			$.each(fake_all_targets, function(useless_key, unit_id){
				var combat_unit = combat_units[unit_id];
				var enough_effect = true;
				var actual_effect_percent = 1;
				if(ability['type'] == 'damage'){
					//console.log('effect: ' + calculate_effect(current_card, ability['effect'], combat_unit['unit_id'], ability['effect_multiplier']));
					//console.log('ai_hp: ' + (combat_unit['ai_hp'] + combat_unit['damage_reduction']));
					var actual_effect = calculate_effect(current_card, ability['effect'], combat_unit['unit_id'], ability['effect_multiplier']) - combat_unit['damage_reduction'];
					if(actual_effect <= 0)
					{
						actual_effect_percent = 0;
					}
					if(actual_effect < combat_unit['ai_hp'] && actual_effect > 0)
					{
						//console.log('found non-killable unit: ' + combat_unit['name']);
						actual_effect_percent = actual_effect / combat_unit['ai_hp'];
						enough_effect = false;
					}
					if(actual_effect >= combat_unit['ai_hp'])
					{
						actual_effect_percent = 1;
					}
					/*else
					{
						console.log('CAN KILL --->  ' + combat_unit['name']);
					}*/
				}
				if(combat_unit['ai_hp'] <= 0){actual_effect_percent = 0;}
				var temp_value = 0;
				if(combat_unit['side'] == 1 && actual_effect_percent > 0){
					
					if(combat_unit['strength'] != false){temp_value += combat_unit['strength'];}
					if(combat_unit['hp'] != false){temp_value += combat_unit['hp'];}
					temp_value += combat_unit['in_play_value'];
					temp_value *= actual_effect_percent;
					current_player_targets_value += temp_value;
					
					//console.log('player value after ' + combat_unit['name'] + ':' + current_player_targets_value);
				}
				if(combat_unit['side'] == 2 && actual_effect_percent > 0){
					if(combat_unit['strength'] != false){temp_value += combat_unit['strength'];}
					if(combat_unit['hp'] != false){temp_value += combat_unit['hp'];}
					temp_value += combat_unit['in_play_value'];
					temp_value *= actual_effect_percent;
					current_enemy_targets_value += temp_value;
					/*if(combat_unit['strength'] != false){current_enemy_targets_value += combat_unit['strength'] * 2;}
					if(combat_unit['hp'] != false){current_enemy_targets_value += combat_unit['hp'];}
					current_enemy_targets_value += combat_unit['in_play_value'];*/
					//console.log('enemy value after ' + combat_unit['name'] + ':' + current_enemy_targets_value);
				}
				//console.log(combat_unit['name'] + ' has a value of ' + temp_value + ' considering the spell ' + current_card['name']);
			});
		});
		if(current_player_targets_value > current_enemy_targets_value && (current_card['min_targets_value'] == undefined || current_player_targets_value - current_enemy_targets_value >= current_card['min_targets_value']))
		{
			//console.log(current_player_targets_value - current_enemy_targets_value + ' >= ' + current_card['min_targets_value']);
			good_target = true;
		}
		if(current_player_targets_value <= current_enemy_targets_value && (current_card['min_targets_value'] == undefined || current_player_targets_value - current_enemy_targets_value < current_card['min_targets_value']))
		{
			//console.log(current_player_targets_value - current_enemy_targets_value + ' < ' + current_card['min_targets_value']);
			good_target = false;
		}
	}

	/*if(original_good_target == true && good_target == false)
	{
		


		if(current_card['max_friendly_spell_targets'] != undefined && current_card['min_enemy_spell_targets'] != undefined && enemy_targets > 0)
		{
			if((current_card['max_friendly_spell_targets'] +1) / (current_card['min_enemy_spell_targets'] +1) <= friendly_targets / enemy_targets)
			{
				good_target = true;
			}
		}
		if(current_card['min_friendly_spell_targets'] != undefined && current_card['max_enemy_spell_targets'] != undefined && friendly_targets > 0)
		{
			if((current_card['max_enemy_spell_targets'] +1) / (current_card['min_friendly_spell_targets'] +1) <= enemy_targets / friendly_targets)
			{
				good_target = true;
			}
		}
	}*/
	return good_target;
}

function log_enemy_card(card_id, text){
	setTimeout(function(){
		$('.enemy_card_log').append('<span class="enemy_card_played">Enemy ' + text + ' <span class="card_played_name">' + available_cards[card_id]['name'] + '</span>. <br/></span>');
		//$('.enemy_card_log').scrollTop($('.enemy_card_log').prop("scrollHeight"));
		$('.enemy_card_log').animate({ scrollTop: $('.enemy_card_log').prop("scrollHeight")}, 1000);
	}, total_timeout);
}

function log_player_card(card_id, text){
	setTimeout(function(){
		$('.enemy_card_log').append('<span class="player_card_played">You ' + text + ' <span class="card_played_name">' + available_cards[card_id]['name'] + '</span>. <br/></span>');
		//$('.enemy_card_log').scrollTop($('.enemy_card_log').prop("scrollHeight"));
		$('.enemy_card_log').animate({ scrollTop: $('.enemy_card_log').prop("scrollHeight")}, 1000);
	}, total_timeout);
}

function log_enemy_card_played(card_id){
	setTimeout(function(){
		$('.enemy_card_log').append('<span class="enemy_card_played">Enemy played <span class="card_played_name">' + available_cards[card_id]['name'] + '</span>. <br/></span>');
		//$('.enemy_card_log').scrollTop($('.enemy_card_log').prop("scrollHeight"));
		$('.enemy_card_log').animate({ scrollTop: $('.enemy_card_log').prop("scrollHeight")}, 1000);
	}, total_timeout);
}

function log_enemy_card_discarded(card_id){
	setTimeout(function(){
		$('.enemy_card_log').append('<span class="enemy_card_played">Enemy discarded <span class="card_played_name">' + available_cards[card_id]['name'] + '</span>. <br/></span>');
		//$('.enemy_card_log').scrollTop($('.enemy_card_log').prop("scrollHeight"));
		$('.enemy_card_log').animate({ scrollTop: $('.enemy_card_log').prop("scrollHeight")}, 1000);
	}, total_timeout);
}


function log_player_card_played(card_id){
	setTimeout(function(){
		$('.enemy_card_log').append('<span class="player_card_played">You played <span class="card_played_name">' + available_cards[card_id]['name'] + '</span>. <br/></span>');
		//$('.enemy_card_log').scrollTop($('.enemy_card_log').prop("scrollHeight"));
		$('.enemy_card_log').animate({ scrollTop: $('.enemy_card_log').prop("scrollHeight")}, 1000);
	}, total_timeout);
}

function log_player_card_discarded(card_id){
	setTimeout(function(){
		$('.enemy_card_log').append('<span class="player_card_played">Player discarded <span class="card_played_name">' + available_cards[card_id]['name'] + '</span>. <br/></span>');
		//$('.enemy_card_log').scrollTop($('.enemy_card_log').prop("scrollHeight"));
		$('.enemy_card_log').animate({ scrollTop: $('.enemy_card_log').prop("scrollHeight")}, 1000);
	}, total_timeout);
}

function count_creatures(unit_id){
	var unit_count = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['type'] == 'creature')
		{
			unit_count++;
		}
	});
	return unit_count;
}

function friendly_creatures_on_side(side){
	var friendly_active = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['type'] == 'creature'){friendly_active++;}
	});
	return friendly_active;
}

function friendly_structures_on_side(side){
	var friendly_active = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['type'] == 'structure'){friendly_active++;}
	});
	return friendly_active;
}

function friendly_exposed_structures_on_side(side){
	var friendly_active = 0;
	$.each(combat_units, function(unit_id, unit){
		var has_adjacent_creature = false;
		if(unit['side'] == side && unit['type'] == 'structure'){
			$.each(combat_units, function(unit_id_2, unit_2){
				if(unit_2['ai_hp'] > 0 && unit_2['type'] == 'creature' && check_units_position(unit, unit_2, 'adjacent') == true)
				{
					has_adjacent_creature = true;
				}
			});
			if(has_adjacent_creature == false)
			{
				friendly_active++;
			}
		}
	});
	return friendly_active;
}

function count_specific_ally(side, card_key){
	var friendly_active = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['card_key'] == card_key){friendly_active++;}
	});
	return friendly_active;
}

function count_doomed_creatures(side){
	var unit_count = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['type'] == 'creature' && combat_unit['side'] == side && combat_unit['ai_hp'] < 1)
		{
			unit_count++;
		}
	});
	return unit_count;
}

function count_doomed_structures(side){
	var unit_count = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['type'] == 'structure' && (combat_unit['side'] == side || side == 'any') && combat_unit['ai_hp'] < 1)
		{
			unit_count++;
		}
	});
	return unit_count;
}


function count_unit_on_bg(unit_id){
	var unit_count = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['card_key'] == unit_id)
		{
			unit_count++;
		}
	});
	return unit_count;
}

function count_friendly_structures(side){
	if(side == undefined){side = 2;}
	var unit_count = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(combat_unit['type'] == 'structure' && combat_unit['side'] == side)
		{
			unit_count++;
		}
	});
	return unit_count;
}

function damaged_creature_on_side(side){
	var found_target = false;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && (unit['hp'] < unit['max_hp']) && unit['type'] == 'creature')
		{
			found_target = true;
		}
	});
	return found_target;
}

function to_be_damaged_creature_on_side(side){
	var found_target = false;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && (unit['ai_hp'] < unit['max_hp']) && unit['type'] == 'creature')
		{
			found_target = true;
		}
	});
	return found_target;
}

function damaged_structure_on_side(side){
	var found_target = false;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['hp'] < unit['max_hp'] && unit['type'] == 'structure')
		{
			found_target = true;
		}
	});
	return found_target;
}

function count_units_side(side){
	var total_units_count = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side){total_units_count++;}
	});
	return total_units_count;
}

function friendly_creatures_active(side){
	var friendly_active = false;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['type'] == 'creature'){friendly_active = true;}
	});
	return friendly_active;
}

function friendly_structures_active(side){
	var friendly_active = false;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['type'] == 'structure' && unit['suicidal'] == undefined){
			friendly_active = true;
		}
	});
	return friendly_active;
}

function count_deck_cards(deck_cards, type){
	var hand_cards = 0;
	if(deck_cards != undefined)
	{
		$.each(deck_cards, function(deck_card_id, deck_card){
			if(deck_card['status'] == 'deck' && (available_cards[deck_card['card_id']]['type'] == type || type == 'any' || type == undefined))
			{
				hand_cards += 1;
			}
		});
	}

	return hand_cards;
}

function count_grave_cards(deck_cards, type){
	var hand_cards = 0;
	$.each(deck_cards, function(deck_card_id, deck_card){
		if(deck_card['status'] == 'grave' && (available_cards[deck_card['card_id']]['type'] == type || type == 'any' || type == undefined))
		{
			hand_cards += 1;
		}
	});

	return hand_cards;
}

function count_hand_cards(deck_cards, type){
	var hand_cards = 0;
	$.each(deck_cards, function(deck_card_id, deck_card){
		if(deck_card['status'] == 'hand' && (available_cards[deck_card['card_id']]['type'] == type || type == 'any' || type == undefined))
		{
			hand_cards += 1;
		}
	});

	return hand_cards;
}

function most_units_side(current_card){
	
	var side_1 = 0;
	var side_2 = 0;
	if(current_card != undefined && current_card['abilities'][0] != undefined && current_card['abilities'][0]['type'] != undefined && current_card['abilities'][0]['type'] == 'increase_strength' && current_card['abilities'][0]['effect'] < 0)
	{
		$.each(combat_units, function(unit_id, unit){
			if(unit['side'] == 1 && unit['strength'] > 0){side_1++;}
			if(unit['side'] == 2 && unit['strength'] > 0){side_2++;}
		});
	}
	else
	{
		$.each(combat_units, function(unit_id, unit){
			if(unit['side'] == 1){side_1++;}
			if(unit['side'] == 2){side_2++;}
		});
	}
	if(side_1 > side_2)
	{
		return 1;
	}
	if(side_1 < side_2)
	{
		return 2;
	}
	return 0;
}

function most_creature_side(){
	var side_1 = 0;
	var side_2 = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == 1 && unit['type'] == 'creature'){side_1++;}
		if(unit['side'] == 2 && unit['type'] == 'creature'){side_2++;}
	});
	if(side_1 > side_2)
	{
		return 1;
	}
	if(side_1 < side_2)
	{
		return 2;
	}
	return 0;
}

function most_structures_side(){
	var side_1 = 0;
	var side_2 = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == 1 && unit['type'] == 'structure'){side_1++;}
		if(unit['side'] == 2 && unit['type'] == 'structure'){side_2++;}
	});
	if(side_1 > side_2)
	{
		return 1;
	}
	if(side_1 < side_2)
	{
		return 2;
	}
	return 0;
}

function most_units_side_in_row(row){
	var side_1 = 0;
	var side_2 = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == 1 && unit['row'] == row){side_1++;}
		if(unit['side'] == 2 && unit['row'] == row){side_2++;}
	});
	if(side_1 > side_2)
	{
		return 1;
	}
	if(side_1 < side_2)
	{
		return 2;
	}
	return 0;
}

function process_attacks(side){

	$.each(combat_units, function(unit_id, unit){

		if(unit['side_string'] == side && unit['strength'] > 0 && unit['stunned'] <= 0)
		{
			if(combat_units[unit_id] != undefined)
			{
				$.each(unit['abilities'], function(ability_key, ability){
					if(ability['proc'] == 'before_calculating_attack_amount')
					{
						process_ability(unit, ability, unit['side_string'], unit['side']);
					}
				});
				
				
				var attack_amount = unit['attack_amount'];
				if(unit['attack_amount'] == undefined)
				{
					attack_amount = 1;
				}
				else
				{
					attack_amount = calculate_effect(unit, attack_amount, undefined, unit['attack_amount_factor']);
					if(unit['attack_amount_bonus'] != undefined)
					{
						attack_amount += unit['attack_amount_bonus'];
					}
				}
				for(var i = 0; i < attack_amount; i++)
				{
					if(unit['stunned'] == undefined || unit['stunned'] == 0)
					{
						if(unit['side'] != 0)
						{
							unit_attacked = process_single_attack(unit_id, true, 1, undefined, unit['attack_specials']);
						}
						else
						{
							unit_attacked = process_single_attack(unit_id, false, 1, undefined, unit['attack_specials']);
						}
					}
					else
					{
						unit_attacked = true;
					}

					if(unit_attacked == true && i == attack_amount -1)
					{
						
						$.each(unit['abilities'], function(ability_key, ability){
							if(ability['proc'] == 'done_attacking')
							{
								process_ability(unit, ability, unit['side_string'], unit['side']);
							}
						});

						total_timeout += game_speed / 2;
						unzoom_unit(unit['unit_id']);
					}
					else
					{
						if(unit_attacked == true)
						{
							total_timeout += game_speed / 2;
						}
					}
				}
				
			}
		}
		/*if(unit['side_string'] == side && unit['stunned'] > 0)
		{
			unit['stunned'] -= 1;
		}
		update_stunned(unit_id);*/
	});

}

function process_single_attack(unit_id, fallback_on_hero, target_amount, attack_side, specials){

	if(combat_alive == false){return false;}
	if(specials != undefined && specials['fallback_on_hero'] != undefined)
	{
		fallback_on_hero = specials['fallback_on_hero'];
	}

	var latest_attack_damage = 0;
	var unit_attacked = false;
	if(combat_units[unit_id] != undefined)
	{
		var unit = combat_units[unit_id];

		$.each(unit['abilities'], function(ability_key, ability){
			if(ability['proc'] == 'before_attack')
			{
				process_ability(unit, ability, unit['side_string'], unit['side']);
			}
		});

		
		var all_targets = {};
		/*if(unit['side'] == 1 && side == 'player' && unit['strength'] > 0)
		{
			setTimeout(function(){
				$('.unit_' + unit_id).addClass('zoom');
			},total_timeout);
			total_timeout += 500;
			unit_attacked = true;

			

			if(unit['attack_type'] == 'adjacent' || unit['attack_type'] == 'same_row')
			{
				var ability = {target:unit['attack_type'],target_side:'enemy',target_amount:1,effect_count:1};
				all_targets = find_targets(ability,unit);
				$.each(all_targets, function(useless_key, target_unit_id){
					unit_receive_damage(unit_id, target_unit_id, unit['strength']);
				});
				
			}

		}*/
		if(combat_units[unit_id] != undefined && unit['strength'] > 0)
		{
			/*setTimeout(function(){
				$('.unit_' + unit_id).addClass('zoom');
			},total_timeout);
			total_timeout += 500;*/
			
			unit_attacked = true;
			if(unit['attack_type'] != 'none' && unit['attack_type'] != 'basic')
			{
				if(attack_side == undefined)
				{
					attack_side = 'enemy';
				}
				var ability = {target:unit['attack_type'],not_self:true,min_hp:1,target_side:attack_side,target_amount:target_amount,effect_count:1};
				$.each(specials, function(special_name, special_value){
					ability[special_name] = special_value;
				});
				all_targets = find_targets(ability,unit);
				if(count_object(all_targets) > 0)
				{
					zoom_unit(unit_id);
				}
				$.each(all_targets, function(useless_key, target_unit_id){
					
					$.each(combat_units[target_unit_id]['abilities'], function(ability_key, ability){
						if(ability['proc'] == 'being_attacked')
						{
							process_ability(combat_units[target_unit_id], ability, unit['side_string'], unit['side'], unit['unit_id']);
						}
					});
					generate_procs('being_attacked', target_unit_id);
					if(combat_units[unit_id] != undefined && unit['strength'] > 0)
					{
						$.each(unit['abilities'], function(ability_key, ability){
							if(ability['proc'] == 'attacking_unit')
							{
								process_ability(unit, ability, unit['side_string'], unit['side'], target_unit_id);
							}
						});
						latest_success = unit_receive_damage(unit_id, target_unit_id, unit['strength']);
						latest_attack_damage = latest_success;
						if(combat_units[target_unit_id] != undefined)
						{
							$.each(combat_units[target_unit_id]['abilities'], function(ability_key, ability){
								if(ability['proc'] == 'been_attacked')
								{
									latest_success = latest_attack_damage;
									process_ability(combat_units[target_unit_id], ability, unit['side_string'], unit['side'], unit['unit_id']);
								}
							});
						}
						if(combat_units[unit_id] != undefined)
						{
							$.each(unit['abilities'], function(ability_key, ability){
								if(ability['proc'] == 'attacked_unit')
								{
									latest_success = latest_attack_damage;
									process_ability(unit, ability, unit['side_string'], unit['side'], target_unit_id);
								}
							});
						}
					}
				});
				
				
			}
			else
			{
				latest_success = 0;
				latest_attack_damage = 0;
			}

		

			if(combat_units[unit_id] != undefined && fallback_on_hero == true && (unit['attack_type'] == 'basic' || (unit['attack_type'] != 'none' && unit['attack_type'] != 'basic' && count_object(all_targets) == 0)) && unit['side'] != 0 && unit['strength'] > 0)
			{
				//console.log(unit['name'] + ' is attacking hero');
				zoom_unit(unit_id);
				adjust_hero_hp({target_side:'enemy'}, unit['strength'] * -1, unit['side'], unit['unit_id']);
				latest_attack_damage = latest_success;
				/*var unit_active = false;
				if(unit['side'] == 1 && side == 'player' && unit['strength'] > 0)
				{
					enemy_hp -= unit['strength'];
					var new_hp = enemy_hp;
					var target_hp_string = 'enemy_hp';
					unit_active = true;
				}
				if(unit['side'] == 2 && side == 'enemy' && unit['strength'] > 0)
				{
					player_hp -= unit['strength'];
					var new_hp = player_hp;
					var target_hp_string = 'player_hp';
					unit_active = true;
				}

				if(unit_active == true)
				{
					latest_success = unit['strength'];
					setTimeout(function(){
						$('.' + target_hp_string).addClass("shake");
					},total_timeout);
					setTimeout(function(){
						$('.' + target_hp_string).html(new_hp);
					},total_timeout + 400);
					setTimeout(function(){
						$('.' + target_hp_string).removeClass("shake");
					},total_timeout + 500);
					total_timeout += 250;
				}*/
				$.each(unit['abilities'], function(ability_key, ability){
					if(ability['proc'] == 'attacks_hero')
					{
						latest_success = latest_attack_damage;
						process_ability(unit, ability, unit['side_string'], unit['side']);
					}
				});

				generate_procs('attacked_hero', unit['unit_id']);
			}

			if(combat_units[unit_id] != undefined)
			{
				$.each(unit['abilities'], function(ability_key, ability){
					if(combat_units[unit_id] != undefined && ability['proc'] == 'after_attack')
					{
						latest_success = latest_attack_damage;
						process_ability(unit, ability, unit['side_string'], unit['side']);
					}
				});
			}
		}
	}

	return unit_attacked;
}

function generate_procs(string, origin_unit){

	if(combat_units[origin_unit] != undefined)
	{
		var current_type = combat_units[origin_unit]['type'];
		var current_side = combat_units[origin_unit]['side'];
		var current_side_string = combat_units[origin_unit]['side_string'];

		process_abilities('any_' + string, undefined, undefined, origin_unit);
	
		process_abilities('any_' + current_type + '_' + string, undefined, undefined, origin_unit);
		process_abilities('any_ally_' + current_type + '_' + string, current_side_string, current_side, origin_unit);
		process_abilities('any_ally_' + string, current_side_string, current_side, origin_unit);

		if(current_side == 0)
		{
			process_abilities('any_enemy_' + string, 'enemy', 2, origin_unit);
			process_abilities('any_enemy_' + current_type + '_' + string, 'enemy', 2, origin_unit);
			process_abilities('any_enemy_' + string, 'player', 1, origin_unit);
			process_abilities('any_enemy_' + current_type + '_' + string, 'player', 1, origin_unit);
		}	
		if(current_side == 1)
		{
			process_abilities('any_enemy_' + string, 'enemy', 2, origin_unit);
			process_abilities('any_enemy_' + current_type + '_' + string, 'enemy', 2, origin_unit);
		}	
		if(current_side == 2)
		{
			process_abilities('any_enemy_' + string, 'player', 1, origin_unit);
			process_abilities('any_enemy_' + current_type + '_' + string, 'player', 1, origin_unit);
		}	
	}

}

function show_current_mana(){
	$.each(player_mana, function(color, amount){
		/*var total_cost = '';
		if(amount > 0)
		{
			var sub_cost = '<span class="' + color + '_mana">';
			for (var i = 0; i < amount; i++) {
				sub_cost += '<i class="fas fa-circle"></i>'; 
			};
			sub_cost += '</span>';
			total_cost += sub_cost;
		}
		setTimeout(function(){	
			$('.player_mana .mana_bar.' + color).html(total_cost);
		},total_timeout);*/
		setTimeout(function(){	
			if(parseInt($('.player_mana .mana_bar.' + color).html()) < amount || $('.player_mana .mana_bar.' + color).html() == '')
			{
				$('.player_mana .mana_bar.' + color).html(amount);
				$('.player_mana .mana_bar.' + color).addClass('zoom');
				setTimeout(function(){
					$('.player_mana .mana_bar.' + color).removeClass('zoom');
				},500);
			}
			if(parseInt($('.player_mana .mana_bar.' + color).html()) > amount)
			{
				$('.player_mana .mana_bar.' + color).html(amount);
				$('.player_mana .mana_bar.' + color).addClass('unzoom');
				setTimeout(function(){
					$('.player_mana .mana_bar.' + color).removeClass('unzoom');
				},500);
			}
		},total_timeout);
	});
	$.each(enemy_mana, function(color, amount){
		/*var total_cost = '';
		if(amount > 0)
		{
			var sub_cost = '<span class="' + color + '_mana">';
			for (var i = 0; i < amount; i++) {
				sub_cost += '<i class="fas fa-circle"></i>'; 
			};
			sub_cost += '</span>';
			total_cost += sub_cost;
		}
		setTimeout(function(){
			$('.enemy_mana .mana_bar.' + color).html(total_cost);
		},total_timeout);*/
		setTimeout(function(){
			if(parseInt($('.enemy_mana .mana_bar.' + color).html()) < amount || $('.enemy_mana .mana_bar.' + color).html() == '')
			{
				$('.enemy_mana .mana_bar.' + color).html(amount);
				$('.enemy_mana .mana_bar.' + color).addClass('zoom');
				setTimeout(function(){
					$('.enemy_mana .mana_bar.' + color).removeClass('zoom');
				},500);
			}
			if(parseInt($('.enemy_mana .mana_bar.' + color).html()) > amount)
			{
				$('.enemy_mana .mana_bar.' + color).html(amount);
				$('.enemy_mana .mana_bar.' + color).addClass('unzoom');
				setTimeout(function(){
					$('.enemy_mana .mana_bar.' + color).removeClass('unzoom');
				},500);
			}
		},total_timeout);
		
	});
};

function show_player_hand(){
	var parsed_hand_cards = parse_hand_cards(deck_cards);
	var total_hand_cards = 0;
	var total_grave_cards = 0;
	$.each(deck_cards, function(card_id, card){
		if(card['status'] == 'deck')
		{
			total_hand_cards++;
		}
		if(card['status'] == 'grave')
		{
			total_grave_cards++;
		}
	});
	setTimeout(function(){
		$('.player_cards').html(parsed_hand_cards);
		$('.player_deck').html(total_hand_cards);
		$('.player_grave').html(total_grave_cards);
	},total_timeout);
}

function show_enemy_hand(){
	var parsed_enemy_cards = '';
	var total_hand_cards = 0;
	var total_grave_cards = 0;
	$.each(enemy_deck_cards, function(deck_card_id, deck_card){
		if(deck_card['status'] == 'hand')
		{
			if(test_mode != undefined && test_mode == true)
			{
				parsed_enemy_cards += '<div class="card slim">' + available_cards[deck_card['card_id']]['name'] + '</div>';
			}
			else
			{
				parsed_enemy_cards += '<div class="card slim"></div>';
			}
		}
		if(deck_card['status'] == 'deck')
		{
			total_hand_cards++;
		}
		if(deck_card['status'] == 'grave')
		{
			total_grave_cards++;
		}
	});
	setTimeout(function(){
		$('.enemy_image').html(parsed_enemy_cards);
		$('.enemy_deck').html(total_hand_cards);
		$('.enemy_grave').html(total_grave_cards);
	},total_timeout);
}

$(document).ready(function() {
	$('body').on('click', '.player_cards .card', function() {
	    var current_card_id = $(this).attr('data-card-id');
		var current_general_card_id = $(this).attr('data-general-card-id');
		show_hand_card_details(current_general_card_id,current_card_id);
	});
});

function draw_card(deck, subtypes, type, card_key){
	var drew_card = false;
	var total_cards_in_deck = 0;
	var total_cards_in_hand = 0;
	var deck_side = 0;
	if(deck == deck_cards){deck_side = 1;}
	if(deck == enemy_deck_cards){deck_side = 2;};
	$.each(deck, function(deck_card_id, card){
		var can_draw_this_card = false;
		if(card['status'] == 'deck')
		{
			if(subtypes == undefined && type == undefined){
				can_draw_this_card = true;
			}

			if(subtypes != undefined)
			{
				if(available_cards[card['card_id']]['subtypes'] != undefined && match_array_values(available_cards[card['card_id']]['subtypes'],subtypes) == true)
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}
			if(type != undefined)
			{
				if(available_cards[card['card_id']]['type'] == type && (subtypes == undefined || can_draw_this_card == true))
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}

			if(card_key != undefined && card_key != card['card_id'])
			{
				can_draw_this_card = false;
			}
		}
		if(can_draw_this_card == true)
		{
			total_cards_in_deck += 1;
		}
		if(card['status'] == 'hand'){total_cards_in_hand += 1;}
	});
	if(total_cards_in_hand < max_deck_size)
	{
		var chosen_card = (Math.random() * total_cards_in_deck);
		$.each(deck, function(deck_card_id, card){
			var can_draw_this_card = false;
			if(card['status'] == 'deck')
			{
				if(subtypes == undefined && type == undefined){
					can_draw_this_card = true;
				}

				if(subtypes != undefined)
				{
					if(available_cards[card['card_id']]['subtypes'] != undefined && match_array_values(available_cards[card['card_id']]['subtypes'],subtypes) == true)
					{
						can_draw_this_card = true;
					}
					else
					{
						can_draw_this_card = false;
					}
				}
				if(type != undefined)
				{
					if(available_cards[card['card_id']]['type'] == type && (subtypes == undefined || can_draw_this_card == true))
					{
						can_draw_this_card = true;
					}
					else
					{
						can_draw_this_card = false;
					}
				}

				if(card_key != undefined && card_key != card['card_id'])
				{
					can_draw_this_card = false;
				}
			}
			if(can_draw_this_card == true)
			{
				chosen_card -= 1;
				if(chosen_card > -1 && chosen_card < 0)
				{
					drew_card = move_card_to_hand(deck_side, deck_card_id, 'none');
				}
			}
		});
	}
	return drew_card;
}

function mill_card(deck, subtypes, type){
	var drew_card = false;
	var total_cards_in_deck = 0;
	var total_cards_in_hand = 0;
	var deck_side = 0;
	if(deck == deck_cards){deck_side = 1;}
	if(deck == enemy_deck_cards){deck_side = 2;}
	$.each(deck, function(deck_card_id, card){
		var can_draw_this_card = false;
		if(card['status'] == 'deck')
		{
			if(subtypes == undefined && type == undefined){
				can_draw_this_card = true;
			}

			if(subtypes != undefined)
			{
				if(available_cards[card['card_id']]['subtypes'] != undefined && match_array_values(available_cards[card['card_id']]['subtypes'],subtypes) == true)
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}
			if(type != undefined)
			{
				if(available_cards[card['card_id']]['type'] == type && (subtypes == undefined || can_draw_this_card == true))
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}
		}
		if(can_draw_this_card == true)
		{
			total_cards_in_deck += 1;
		}
		if(card['status'] == 'hand'){total_cards_in_hand += 1;}
	});

	var chosen_card = (Math.random() * total_cards_in_deck);
	$.each(deck, function(deck_card_id, card){
		var can_draw_this_card = false;
		if(card['status'] == 'deck')
		{
			if(subtypes == undefined && type == undefined){
				can_draw_this_card = true;
			}

			if(subtypes != undefined)
			{
				if(available_cards[card['card_id']]['subtypes'] != undefined && match_array_values(available_cards[card['card_id']]['subtypes'],subtypes) == true)
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}
			if(type != undefined)
			{
				if(available_cards[card['card_id']]['type'] == type && (subtypes == undefined || can_draw_this_card == true))
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}
		}
		if(can_draw_this_card == true)
		{
			chosen_card -= 1;
			if(chosen_card > -1 && chosen_card < 0)
			{
				move_card_to_grave(deck_side, deck_card_id);
				drew_card = true;
			}
		}
	});

	show_player_hand();
	show_enemy_hand();
	
	return drew_card;
}

function draw_cheap_card(deck){
	var total_cards_in_deck = 0;
	var total_cards_in_hand = 0;
	$.each(deck, function(deck_card_id, card){
		var max_card_cost = 0;
		$.each(available_cards[card['card_id']]['cost'], function(color, amount){
			if(max_card_cost < amount){max_card_cost = amount;}
		});
		if(card['status'] == 'deck' && max_card_cost < 3)
		{
			total_cards_in_deck += 1;
		}
		if(card['status'] == 'hand'){total_cards_in_hand += 1;}
	});
	if(total_cards_in_hand < 10)
	{
		var chosen_card = (Math.random() * total_cards_in_deck);
		$.each(deck, function(deck_card_id, card){
			var max_card_cost = 0;
			$.each(available_cards[card['card_id']]['cost'], function(color, amount){
				if(max_card_cost < amount){max_card_cost = amount;}
			});
			if(card['status'] == 'deck' && max_card_cost < 3)
			{
				chosen_card -= 1;
				if(chosen_card > -1 && chosen_card < 0)
				{
					card['status'] = 'hand';
				}
			}
		});
	}
}

/*function reclaim_card(deck, subtypes, reclaim_type){
	var total_cards_in_grave = 0;
	var total_cards_in_hand = 0;
	var cards_reclaimed = 0;
	$.each(deck, function(deck_card_id, card){
		if(card['status'] == 'grave' && (available_cards[card['card_id']]['type'] == reclaim_type || reclaim_type == 'any')){total_cards_in_grave += 1;}
		if(card['status'] == 'hand'){total_cards_in_hand += 1;}
	});
	if(total_cards_in_hand < 10)
	{
		var chosen_card = (Math.random() * total_cards_in_grave);
		$.each(deck, function(deck_card_id, card){
			if(card['status'] == 'grave' && (available_cards[card['card_id']]['type'] == reclaim_type || reclaim_type == 'any'))
			{
				chosen_card -= 1;
				if(chosen_card > -1 && chosen_card < 0)
				{
					card['status'] = 'hand';
					cards_reclaimed ++;
				}
			}
		});
	}
	if(cards_reclaimed > 0)
	{
		return true;
	}
	return false;
}*/

function reclaim_card(deck, type, subtypes, card_key){
	var drew_card = false;
	var total_cards_in_deck = 0;
	var total_cards_in_hand = 0;
	var deck_side = 0;
	if(deck == deck_cards){deck_side = 1;}
	if(deck == enemy_deck_cards){deck_side = 2;};
	$.each(deck, function(deck_card_id, card){
		var can_draw_this_card = false;
		if(card['status'] == 'grave')
		{
			if(subtypes == undefined && (type == undefined || type == 'any' )){
				can_draw_this_card = true;
			}

			if(subtypes != undefined)
			{
				if(available_cards[card['card_id']]['subtypes'] != undefined && match_array_values(available_cards[card['card_id']]['subtypes'],subtypes) == true)
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}
			if(type != undefined && type != 'any')
			{
				if(available_cards[card['card_id']]['type'] == type && (subtypes == undefined || can_draw_this_card == true))
				{
					can_draw_this_card = true;
				}
				else
				{
					can_draw_this_card = false;
				}
			}

			if(card_key != undefined && card_key != card['card_id'])
			{
				can_draw_this_card = false;
			}
		}
		if(can_draw_this_card == true)
		{
			total_cards_in_deck += 1;
		}
		//if(card['status'] == 'hand'){total_cards_in_hand += 1;}
	});
	//console.log(total_cards_in_deck);
	if(total_cards_in_hand < max_deck_size)
	{
		var chosen_card = (Math.random() * total_cards_in_deck);
		$.each(deck, function(deck_card_id, card){
			var can_draw_this_card = false;
			if(card['status'] == 'grave')
			{
				if(subtypes == undefined && (type == undefined || type == 'any' )){
					can_draw_this_card = true;
				}

				if(subtypes != undefined)
				{
					if(available_cards[card['card_id']]['subtypes'] != undefined && match_array_values(available_cards[card['card_id']]['subtypes'],subtypes) == true)
					{
						can_draw_this_card = true;
					}
					else
					{
						can_draw_this_card = false;
					}
				}
				if(type != undefined && type != 'any')
				{
					if(available_cards[card['card_id']]['type'] == type && (subtypes == undefined || can_draw_this_card == true))
					{
						can_draw_this_card = true;
					}
					else
					{
						can_draw_this_card = false;
					}
				}

				if(card_key != undefined && card_key != card['card_id'])
				{
					can_draw_this_card = false;
				}
			}
			if(can_draw_this_card == true)
			{
				chosen_card -= 1;
				if(chosen_card > -1 && chosen_card < 0)
				{
					drew_card = move_card_to_hand(deck_side, deck_card_id, 'deck');

					if(deck == deck_cards)
					{
						process_abilities('ally_card_reclaimed', 'player', 1, undefined);
						process_abilities('enemy_card_reclaimed', 'enemy', 2, undefined);
					}
					if(deck == enemy_deck_cards)
					{
						process_abilities('ally_card_reclaimed', 'enemy', 2, undefined);
						process_abilities('enemy_card_reclaimed', 'player', 1, undefined);
					}
				}
			}
		});
	}
	return drew_card;
}

$(document).ready(function() {
	$('body').on('click', '.player_hp', function() {
		total_timeout = 0;
		if(count_grave_cards(deck_cards, undefined) > 0)
		{
			disable_interface();
	    	for (var i = count_grave_cards(deck_cards, undefined); i >= 0; i--) {
				reclaim_card(deck_cards, 'any');
			};
	    	show_player_hand();
	    	adjust_hero_hp({target_side:'ally',can_be_zero: false}, (player_hp * -0.25), 1, undefined);
	    	setTimeout(function(){
				enable_interface();
				
				if(gamedata['limited_actions'] == true)
				{
					player_actions -= 1;
					$('.end_turn_button').html('actions: ' + player_actions);
					if(player_actions <= 0)
					{
						end_turn();
					}
				}

			},total_timeout);
	    }
	    
	});

	$('body').on('click', '.end_turn_button', function() {
		if(gamedata['limited_actions'] == false)
		{
			end_turn();
		}
	});

	/*$('body').on('click', '.player_grave', function() {
		total_timeout = 0;
		
		if(count_grave_cards(deck_cards, undefined) > 0)
		{
			disable_interface();
			for (var i = count_grave_cards(deck_cards, undefined); i >= 0; i--) {
				reclaim_card(deck_cards, 'any');
			};
	    	show_player_hand();
	    	adjust_hero_hp({target_side:'ally'}, -5, 1, undefined);
	    	setTimeout(function(){
				enable_interface();
				player_actions -= 1;
				$('.end_turn_button').html('actions: ' + player_actions);
				if(player_actions <= 0)
				{
					end_turn();
				}
			},total_timeout);
	    }
	});*/

	$('body').on('click', '.click_to_get_mana', function() {

		if(player_actions > 0 && gamedata['limited_actions'] == true)
		{
			total_timeout = 0;
			player_actions -= 1;
			
			disable_interface();

			process_ability(
				{side:1},
				{
					type: 			'gain_mana',
					mana_chances: 	'owned_gems',
					mana_amount: 	1,
					target_side: 		'ally'
				},
				'player',
				1,
				undefined
			);
			show_player_hand();
			setTimeout(function(){
				enable_interface();
				$('.end_turn_button').html('actions: ' + player_actions);
				if(player_actions <= 0)
				{
					end_turn();
				}
			},total_timeout);
		}
		
	});
});

function recycle_card(deck, reclaim_type){
	var total_cards_in_grave = 0;
	var total_cards_in_hand = 0;
	var cards_reclaimed = 0;
	if(reclaim_type == undefined){reclaim_type = 'any';}
	$.each(deck, function(deck_card_id, card){
		if(card['status'] == 'grave' && (available_cards[card['card_id']]['type'] == reclaim_type || reclaim_type == 'any')){total_cards_in_grave += 1;}
		if(card['status'] == 'hand'){total_cards_in_hand += 1;}
	});
	if(total_cards_in_hand < max_deck_size)
	{
		var chosen_card = (Math.random() * total_cards_in_grave);
		$.each(deck, function(deck_card_id, card){
			if(card['status'] == 'grave' && (available_cards[card['card_id']]['type'] == reclaim_type || reclaim_type == 'any'))
			{
				chosen_card -= 1;
				if(chosen_card > -1 && chosen_card < 0)
				{
					card['status'] = 'deck';
					cards_reclaimed ++;
					if(deck == deck_cards)
					{
						process_abilities('ally_card_recycled', 'player', 1, undefined);
						process_abilities('enemy_card_recycled', 'enemy', 2, undefined);
					}
					if(deck == enemy_deck_cards)
					{
						process_abilities('ally_card_recycled', 'enemy', 2, undefined);
						process_abilities('enemy_card_recycled', 'player', 1, undefined);
					}
				}
			}
		});
	}
	if(cards_reclaimed > 0)
	{
		return true;
	}
	return false;
}

function remove_card_from_grave(deck, remove_type){
	var total_cards_in_grave = 0;
	var total_cards_in_hand = 0;
	var cards_reclaimed = 0;
	if(remove_type == undefined){remove_type = 'any';}
	$.each(deck, function(deck_card_id, card){
		if(card['status'] == 'grave' && (available_cards[card['card_id']]['type'] == remove_type || remove_type == 'any')){total_cards_in_grave += 1;}
	});
	if(total_cards_in_hand < 10)
	{
		var chosen_card = (Math.random() * total_cards_in_grave);
		$.each(deck, function(deck_card_id, card){
			if(card['status'] == 'grave' && (available_cards[card['card_id']]['type'] == remove_type || remove_type == 'any'))
			{
				chosen_card -= 1;
				if(chosen_card > -1 && chosen_card < 0)
				{
					card['status'] = 'removed';
					cards_reclaimed ++;
				}
			}
		});
	}
	if(cards_reclaimed > 0)
	{
		return true;
	}
	return false;
}



function pick_random_card_from_deck(deck){
	var total_cards_in_deck = 0;
	var picked_card = 0;
	$.each(deck, function(deck_card_id, card){
		total_cards_in_deck += 1;
	});
	
	var chosen_card = (Math.random() * total_cards_in_deck);
	$.each(deck, function(deck_card_id, card){

		chosen_card -= 1;
		if(chosen_card > -1 && chosen_card < 0)
		{
			picked_card = card['card_id'];
		}
		
	});
	
	return picked_card;
}

function show_hand_card_details(general_card_id, card_id){
	$('.card_slot').removeClass('selectable');
	$('.card.combat').removeClass('selectable');
	$('.detail_overlay').fadeIn();
	var parsed_card = parse_card(general_card_id, 'full', card_id, undefined, undefined, deck_cards[card_id]['grave_cost']);

	var got_enough_mana = true;
	/*$.each(available_cards[general_card_id]['cost'], function(color, amount){
		if(player_mana[color] < amount){got_enough_mana = false;}
	});*/
	got_enough_mana = check_have_mana(player_mana, available_cards[general_card_id]['cost'], deck_cards[card_id]['grave_cost']);
	//console.log(got_enough_mana);

	var play_card_button = '';
	if(got_enough_mana == true && available_cards[general_card_id]['proc_from_grave'] == undefined)
	{
		play_card_button = '<button class="play_card_button" onclick="prepare_to_play_card(\'' + general_card_id + '\', ' + card_id + ')">Play card</button>';
	}
	var discard_button = '<button class="discard_button" onclick="total_timeout = 0;discard_card(' + card_id + ');">Discard card</button>';

	$('.detail_overlay').html('<div class="overlay_card_container">' + parsed_card + play_card_button + discard_button + ' </div>');
};

function discard_card(card_id){
	if(deck_cards[card_id] != undefined && deck_cards[card_id]['status'] == 'hand')
	{
		move_card_to_grave(1, card_id);

		$.each(available_cards[deck_cards[card_id]['card_id']]['abilities'], function(ability_key, ability){
			if(ability['proc'] == 'on_discarded')
			{
				process_ability(-1, ability, 'player', 1, undefined);
			}
		});

		process_abilities('ally_card_discarded', 'player', 1, undefined);
		process_abilities('enemy_card_discarded', 'enemy', 2, undefined);

		if(gamedata['limited_actions'] == true)
		{
			player_actions -= 1;
			$('.end_turn_button').html('actions: ' + player_actions);
			if(player_actions <= 0)
			{
				end_turn();
			}
		}
	}	
};

function discard_random_card(hand_cards, type, side){
	var total_cards_in_hand = 0;
	var discarded_card = false;
	var deck_side = 0;
	if(hand_cards == deck_cards){deck_side = 1;}
	if(hand_cards == enemy_deck_cards){deck_side = 2;}
	$.each(hand_cards, function(deck_card_id, card){
		if(card['status'] == 'hand' && (type == undefined || type == available_cards[card['card_id']]['type']))
		{
			total_cards_in_hand++;
		}
	});

	var chosen_card = (Math.random() * total_cards_in_hand);
	$.each(hand_cards, function(deck_card_id, card){
		var can_draw_this_card = false;
		if(card['status'] == 'hand' && (type == undefined || type == available_cards[card['card_id']]['type']))
		{
			chosen_card -= 1;
			if(chosen_card > -1 && chosen_card < 0)
			{
				
				spell_counter++;
				var current_spell = 'spell_' + spell_counter;
				var pased_card = parse_card(hand_cards[deck_card_id]['card_id'], 'full', 0, current_spell, undefined, hand_cards[deck_card_id]['grave_cost']);
				move_card_to_grave(deck_side, deck_card_id);
				var show_card_side = '';

				if(deck_side == 1)
				{
					log_player_card_discarded(hand_cards[deck_card_id]['card_id']);
					show_card_side = 'card_blocker';
				}
				if(deck_side == 2)
				{
					log_enemy_card_discarded(hand_cards[deck_card_id]['card_id']);
					show_card_side = 'enemy_image';
				}

				setTimeout(function(){		
				    $('.' + show_card_side).append('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
			    },total_timeout);
			    total_timeout += game_speed;
			    setTimeout(function(){	
					$('.' + show_card_side + ' .' + current_spell).addClass('dead');
			    },total_timeout);
			    setTimeout(function(){
						$('.' + show_card_side + ' .' + current_spell).remove();
				},total_timeout + 1000);
			    total_timeout += 750;

				discarded_card = true;

				$.each(available_cards[hand_cards[deck_card_id]['card_id']]['abilities'], function(ability_key, ability){
					if(ability['proc'] == 'on_discarded' || ability['proc'] == 'on_discarded_by_other_card')
					{
						if(deck_side == 1)
						{
							process_ability(-1, ability, 'player', 1, undefined);
						}
						if(deck_side == 2)
						{
							process_ability(-1, ability, 'enemy', 2, undefined);
						}
					}
				});
				if(deck_side == 1)
				{
					process_abilities('ally_card_discarded', 'player', 1, undefined);
					process_abilities('enemy_card_discarded', 'enemy', 2, undefined);
				}
				if(deck_side == 2)
				{
					process_abilities('ally_card_discarded', 'enemy', 2, undefined);
					process_abilities('enemy_card_discarded', 'player', 1, undefined);
				}
			}
		}
	});
	
	return discarded_card;
}

function reserve_random_card(hand_cards, type, side){
	var total_cards_in_hand = 0;
	var discarded_card = false;
	var deck_side = 0;
	if(hand_cards == deck_cards){deck_side = 1;}
	if(hand_cards == enemy_deck_cards){deck_side = 2;}
	$.each(hand_cards, function(deck_card_id, card){
		if(card['status'] == 'hand' && (type == undefined || type == available_cards[card['card_id']]['type']))
		{
			total_cards_in_hand++;
		}
	});

	var chosen_card = (Math.random() * total_cards_in_hand);
	$.each(hand_cards, function(deck_card_id, card){
		var can_draw_this_card = false;
		if(card['status'] == 'hand' && (type == undefined || type == available_cards[card['card_id']]['type']))
		{
			chosen_card -= 1;
			if(chosen_card > -1 && chosen_card < 0)
			{
				
				spell_counter++;
				var current_spell = 'spell_' + spell_counter;
				var pased_card = parse_card(hand_cards[deck_card_id]['card_id'], 'full', 0, current_spell, undefined, hand_cards[deck_card_id]['grave_cost']);
				move_card_to_deck(deck_side, deck_card_id);
				var show_card_side = '';

				if(deck_side == 1)
				{
					log_player_card(hand_cards[deck_card_id]['card_id'], 'moved to your reserves:');
					show_card_side = 'card_blocker';
				}
				if(deck_side == 2)
				{
					log_enemy_card(hand_cards[deck_card_id]['card_id'], 'moved to his reserves:');
					show_card_side = 'enemy_image';
				}

				setTimeout(function(){		
				    $('.' + show_card_side).append('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
			    },total_timeout);
			    total_timeout += game_speed;
			    setTimeout(function(){	
					$('.' + show_card_side + ' .' + current_spell).addClass('dead');
			    },total_timeout);
			    setTimeout(function(){
						$('.' + show_card_side + ' .' + current_spell).remove();
				},total_timeout + 1000);
			    total_timeout += 750;

				discarded_card = true;

				/*$.each(available_cards[hand_cards[deck_card_id]['card_id']]['abilities'], function(ability_key, ability){
					if(ability['proc'] == 'on_discarded' || ability['proc'] == 'on_discarded_by_other_card')
					{
						if(deck_side == 1)
						{
							process_ability(-1, ability, 'player', 1, undefined);
						}
						if(deck_side == 2)
						{
							process_ability(-1, ability, 'enemy', 2, undefined);
						}
					}
				});
				if(deck_side == 1)
				{
					process_abilities('ally_card_discarded', 'player', 1, undefined);
					process_abilities('enemy_card_discarded', 'enemy', 2, undefined);
				}
				if(deck_side == 2)
				{
					process_abilities('ally_card_discarded', 'enemy', 2, undefined);
					process_abilities('enemy_card_discarded', 'player', 1, undefined);
				}*/
			}
		}
	});
	
	return discarded_card;
}

function prepare_to_play_card(general_card_id, card_id){

	$('.card_slot').removeClass('selectable');
	$('.card.combat').removeClass('selectable');
	selected_card_id = card_id;
	var got_enough_mana = true;
	var current_card = available_cards[general_card_id];
	/*$.each(current_card['cost'], function(color, amount){
		if(player_mana[color] < amount){got_enough_mana = false;}
	});*/
	got_enough_mana = check_have_mana(player_mana, available_cards[general_card_id]['cost'], deck_cards[card_id]['grave_cost']);

	if(got_enough_mana == true && player_actions > 0 || current_card['proc_from_grave'] != undefined)
	{
		if(current_card['type'] == 'creature')
		{
			for (var col_to_check = 2; col_to_check <= 3; col_to_check++) {
				for (var row_to_check = 1; row_to_check <= 3; row_to_check++) {
					var slot_free = true;
					$.each(combat_units, function(unit_id, unit){
						if(unit['col'] == col_to_check && unit['row'] == row_to_check)
						{
							slot_free = false;
						}
					});
					if(slot_free == true)
					{
						$('.col_' + col_to_check + '.row_' + row_to_check).addClass('selectable');
					}
				};
			};
		}
		if(current_card['type'] == 'structure')
		{
			var col_to_check = 1
			for (var row_to_check = 1; row_to_check <= 3; row_to_check++) {
				var slot_free = true;
				$.each(combat_units, function(unit_id, unit){
					if(unit['col'] == col_to_check && unit['row'] == row_to_check)
					{
						slot_free = false;
					}
				});
				if(slot_free == true)
				{
					$('.col_' + col_to_check + '.row_' + row_to_check).addClass('selectable');
				}
			};
			
		}
		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'unit' && current_card['spell_auto_cast'] != true && current_card['target_friendly'] == undefined && current_card['target_enemy'] == undefined)
		{
			$('.card.combat').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'creature' && current_card['spell_auto_cast'] != true && current_card['target_friendly'] == undefined && current_card['target_enemy'] == undefined)
		{
			$('.card.combat.col_2').addClass('selectable');
			$('.card.combat.col_3').addClass('selectable');
			$('.card.combat.col_4').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'structure' && current_card['spell_auto_cast'] != true && current_card['target_friendly'] == undefined && current_card['target_enemy'] == undefined)
		{
			$('.card.combat.col_1').addClass('selectable');
			$('.card.combat.col_5').addClass('selectable');
		}

		// FRIENDLY ONLY
		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'unit' && current_card['spell_auto_cast'] != true && current_card['target_friendly'] != undefined && current_card['target_friendly'] == true)
		{
			$('.card.combat.side_1').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'creature' && current_card['spell_auto_cast'] != true && current_card['target_friendly'] != undefined && current_card['target_friendly'] == true)
		{
			$('.card.combat.col_2.side_1').addClass('selectable');
			$('.card.combat.col_3.side_1').addClass('selectable');
			$('.card.combat.col_4.side_1').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'structure' && current_card['spell_auto_cast'] != true && current_card['target_friendly'] != undefined && current_card['target_friendly'] == true)
		{
			$('.card.combat.col_1.side_1').addClass('selectable');
			$('.card.combat.col_5.side_1').addClass('selectable');
		}

		// ENEMY ONLY
		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'unit' && current_card['spell_auto_cast'] != true && current_card['target_enemy'] != undefined && current_card['target_enemy'] == true)
		{
			$('.card.combat.side_2').addClass('selectable');
			$('.card.combat.side_0').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'creature' && current_card['spell_auto_cast'] != true && current_card['target_enemy'] != undefined && current_card['target_enemy'] == true)
		{
			$('.card.combat.col_2.side_2').addClass('selectable');
			$('.card.combat.col_3.side_2').addClass('selectable');
			$('.card.combat.col_4.side_2').addClass('selectable');
			$('.card.combat.col_2.side_0').addClass('selectable');
			$('.card.combat.col_3.side_0').addClass('selectable');
			$('.card.combat.col_4.side_0').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_target'] == 'structure' && current_card['spell_auto_cast'] != true && current_card['target_enemy'] != undefined && current_card['target_enemy'] == true)
		{
			$('.card.combat.col_1.side_2').addClass('selectable');
			$('.card.combat.col_5.side_2').addClass('selectable');
			$('.card.combat.col_1.side_0').addClass('selectable');
			$('.card.combat.col_5.side_0').addClass('selectable');
		}

		if(current_card['type'] == 'spell' && current_card['spell_auto_cast'] != true && current_card['abilities'][0]['target'] == 'same_slot')
		{
			//here
			$('.card.combat').removeClass('selectable');
			var current_ability = current_card['abilities'][0];
			var targeting_ability = {type:current_ability['type'],target:'random',target_type:current_ability['target_type'],target_amount:15,target_unique:true,min_hp:current_ability['min_hp'],effect:current_ability['effect'],target_side:current_ability['target_side'],subtypes:current_ability['subtypes'],has_status_effect:current_ability['has_status_effect']};
			var possible_spell_targets = find_targets(targeting_ability,{side: 1},undefined);
			//console.log(possible_spell_targets);
			$.each(possible_spell_targets, function(useless_id, target_id){
				$('.card.combat.unit_' + target_id).addClass('selectable');
			});
		}

		if((current_card['type'] == 'spell' && current_card['spell_auto_cast'] == true && player_actions > 0))
		{
			update_quests('play_any_card');
			update_quests('play_any_spell');
			var colorless = true;
			$.each(current_card['cost'], function(color, amount){
				if(color != 'colorless' && amount > 0)
				{
					update_quests('play_any_' + color + '_card');
					update_quests('play_any_' + color + '_' + current_card['type']);
					colorless = false;
				}
			});
			if(colorless == true)
			{
				update_quests('play_any_colorless_card');
				update_quests('play_any_colorless_' + current_card['type']);
			}
			disable_interface();
			/*$.each(current_card['cost'], function(color, amount){
				player_mana[color] -= amount;
			});*/
			total_timeout = 0;
			deck_cards[selected_card_id]['status'] = 'in_play';
			pay_mana_costs(player_mana, current_card['cost'], deck_cards[selected_card_id]['grave_cost']);
			
			var spell_in_play = selected_card_id;
			
			show_current_mana();
			show_player_hand();

			log_player_card_played(deck_cards[spell_in_play]['card_id']);

			spell_counter++;
			var current_spell = 'spell_' + spell_counter;
			var pased_card = parse_card(deck_cards[selected_card_id]['card_id'], 'full', 0, current_spell, undefined, deck_cards[spell_in_play]['grave_cost']);

			setTimeout(function(){		
			    $('.card_blocker').prepend('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
		    },total_timeout);
		    total_timeout += game_speed;

			process_abilities('before_any_spell_cast', 'player', 1);
		    process_abilities('before_any_spell_cast', 'enemy', 2);
		    process_abilities('before_any_spell_cast', 'neutral', 0);

		    process_abilities('before_enemy_spell_cast', 'enemy', 2);
		    process_abilities('before_ally_spell_cast', 'ally', 1);
		    process_abilities('before_enemy_spell_cast', 'neutral', 0);

			/*$.each(current_card['abilities'], function(ability_key, ability){
				process_ability({side:1}, ability, 'player', 1);
			});*/
			summon_fake_spell(general_card_id, 0, 0, 1, 'player');

			setTimeout(function(){	
				$('.card_blocker .' + current_spell).fadeOut(1000);
				setTimeout(function(){
					$('.card_blocker .' + current_spell).remove();
				},total_timeout + 1000);
		    },total_timeout);
		    total_timeout += game_speed;

			process_abilities('any_spell_cast', 'player', 1);
		    process_abilities('any_spell_cast', 'enemy', 2);
		    process_abilities('any_spell_cast', 'neutral', 0);

		    process_abilities('enemy_spell_cast', 'enemy', 2);
		    process_abilities('ally_spell_cast', 'ally', 1);
		    process_abilities('enemy_spell_cast', 'neutral', 0);

		    if(deck_cards[spell_in_play]['status'] == 'in_play')
		    {
		    	move_card_to_grave(1, spell_in_play);
		    }
		    
			show_player_hand();

		    setTimeout(function(){
				enable_interface();
				if(gamedata['limited_actions'] == true)
				{
					player_actions -= 1;
					$('.end_turn_button').html('actions: ' + player_actions);
					if(player_actions <= 0)
					{
						end_turn();
					}
				}
			}, total_timeout);
		}
	}

};

$(document).ready(function() {
	$('body').on('click', '.card.combat', function() {
		if($(this).hasClass('selectable') == false)
		{
			show_combat_card_details($(this).attr('data-card-id'));
		}
	});

	$('body').on('click', '.player_mana .gem_1', function() {
		show_combat_card_details(1);
	});
	$('body').on('click', '.player_mana .gem_2', function() {
		show_combat_card_details(2);
	});
	$('body').on('click', '.enemy_mana .gem_1', function() {
		show_combat_card_details(3);
	});
	$('body').on('click', '.enemy_mana .gem_2', function() {
		show_combat_card_details(4);
	});

	$('body').on('click', '.selectable', function() {
		total_timeout = 0;
		$('.selectable').removeClass('selectable');
		if(player_actions > 0)
		{
		    var selected_row = parseInt($(this).attr('data-row'));
		    var selected_col = parseInt($(this).attr('data-col'));

		    if($(this).attr('data-card-id') !== undefined && combat_units[parseInt($(this).attr('data-card-id'))] != undefined)
		    {
		    	var targeted_unit = combat_units[parseInt($(this).attr('data-card-id'))];
		    	selected_row = targeted_unit['row'];
		    	selected_col = targeted_unit['col'];
		    }

			var got_enough_mana = true;
			var current_card = available_cards[deck_cards[selected_card_id]['card_id']];
			/*$.each(current_card['cost'], function(color, amount){
				if(player_mana[color] < amount){got_enough_mana = false;}
			});*/
			got_enough_mana = check_have_mana(player_mana, available_cards[deck_cards[selected_card_id]['card_id']]['cost'], deck_cards[selected_card_id]['grave_cost']);

			var slot_free = true;
				$.each(combat_units, function(unit_id, unit){
					if(unit['col'] == selected_col && unit['row'] == selected_row)
					{
						slot_free = false;
					}
				});

			if(current_card['type'] == 'creature' || current_card['type'] == 'structure' )
			{

				if(slot_free == true && got_enough_mana == true)
				{
					update_quests('play_any_' + current_card['type']);
					update_quests('play_any_card');
					var colorless = true;
					$.each(current_card['cost'], function(color, amount){
						if(color != 'colorless' && amount > 0)
						{
							update_quests('play_any_' + color + '_card');
							update_quests('play_any_' + color + '_' + current_card['type']);
							colorless = false;
						}
					});
					if(colorless == true)
					{
						update_quests('play_any_colorless_card');
						update_quests('play_any_colorless_' + current_card['type']);
					}
					disable_interface();
					/*$.each(current_card['cost'], function(color, amount){
						player_mana[color] -= amount;
					});*/
					deck_cards[selected_card_id]['status'] = 'in_play';
					total_timeout = 0;
					pay_mana_costs(player_mana, current_card['cost'], deck_cards[selected_card_id]['grave_cost']);
					show_current_mana();
					
					show_player_hand();

					var card_being_played = deck_cards[selected_card_id]['card_id'];
					var side = 1;
					var side_string = 'player';

					total_timeout = 0;
					log_player_card_played(deck_cards[selected_card_id]['card_id']);
					summon_unit(card_being_played, selected_col, selected_row, side, side_string);
					
					setTimeout(function(){
						enable_interface();
						if(gamedata['limited_actions'] == true)
						{
							player_actions -= 1;
							$('.end_turn_button').html('actions: ' + player_actions);
							if(player_actions <= 0)
							{
								end_turn();
							}
						}
					}, total_timeout);
					
					/*var new_unit_key = get_highest_key_in_object(combat_units) + 1;
				    combat_units[new_unit_key] = copyobject(available_cards[card_being_played]);
				    combat_units[new_unit_key]['card_id'] = selected_card_id;
				    combat_units[new_unit_key]['unit_id'] = new_unit_key;
				    combat_units[new_unit_key]['col'] = selected_col;
				    combat_units[new_unit_key]['row'] = selected_row;
				    combat_units[new_unit_key]['side'] = 1;
				    combat_units[new_unit_key]['side_string'] = 'player';
				    combat_units[new_unit_key]['hp'] = combat_units[new_unit_key]['max_hp'];
				    var parsed_unit = parse_card(card_being_played, 'combat', new_unit_key, new_unit_key);
				    $('.combat_grid').append(parsed_unit);
				    $('.unit_' + new_unit_key).addClass('col_' + selected_col);
				    $('.unit_' + new_unit_key).addClass('row_' + selected_row);
				    $('.unit_' + new_unit_key).addClass('side_1');*/
				}
			}

			if(current_card['type'] == 'spell')
			{

				var good_target = false;
				if(current_card['spell_target'] == 'unit' && slot_free == false)
				{
					good_target = true;
				}
				if(current_card['spell_target'] == 'structure' && slot_free == false)
				{
					good_target = true;
				}
				if(current_card['spell_target'] == 'creature' && slot_free == false)
				{
					good_target = true;
				}
				//console.log(good_target);
				if(good_target == true && got_enough_mana == true)
				{
					update_quests('play_any_spell');
					update_quests('play_any_card');
					var colorless = true;
					$.each(current_card['cost'], function(color, amount){
						if(color != 'colorless' && amount > 0)
						{
							update_quests('play_any_' + color + '_card');
							update_quests('play_any_' + color + '_' + current_card['type']);
							colorless = false;
						}
					});
					if(colorless == true)
					{
						update_quests('play_any_colorless_card');
						update_quests('play_any_colorless_' + current_card['type']);
					}
					disable_interface();
					/*$.each(current_card['cost'], function(color, amount){
						player_mana[color] -= amount;
					});*/
					deck_cards[selected_card_id]['status'] = 'in_play';
					total_timeout = 0;
					pay_mana_costs(player_mana, current_card['cost'], deck_cards[selected_card_id]['grave_cost']);
					
					var spell_in_play = selected_card_id;
					
					show_current_mana();
					show_player_hand();

					log_player_card_played(deck_cards[spell_in_play]['card_id']);

					process_abilities('before_any_spell_cast', 'player', 1);
				    process_abilities('before_any_spell_cast', 'enemy', 2);
				    process_abilities('before_any_spell_cast', 'neutral', 0);

				    process_abilities('before_ally_spell_cast', 'player', 1);
				    process_abilities('before_enemy_spell_cast', 'enemy', 2);
				    process_abilities('before_enemy_spell_cast', 'neutral', 0);

					summon_fake_spell(deck_cards[spell_in_play]['card_id'], selected_col, selected_row, 1, 'player');
					
					/*$.each(current_card['abilities'], function(ability_key, ability){
						process_ability(targeted_unit, ability, 'player', 1);
					});*/

					process_abilities('any_spell_cast', 'player', 1);
				    process_abilities('any_spell_cast', 'enemy', 2);
				    process_abilities('any_spell_cast', 'neutral', 0);

				    process_abilities('ally_spell_cast', 'player', 1);
				    process_abilities('enemy_spell_cast', 'enemy', 2);
				    process_abilities('enemy_spell_cast', 'neutral', 0);

				    if(deck_cards[spell_in_play] != undefined && deck_cards[spell_in_play]['status'] == 'in_play')
				    {
				    	move_card_to_grave(1, spell_in_play);
				    }
				    show_player_hand();

				    setTimeout(function(){
						enable_interface();
						if(gamedata['limited_actions'] == true)
						{
							player_actions -= 1;
							$('.end_turn_button').html('actions: ' + player_actions);
							if(player_actions <= 0)
							{
								end_turn();
							}
						}
					}, total_timeout);
				}
			}

	    }
	});
});

function unit_turn_into(target_id, new_card_id,origin_unit, proc_summoned_abilities){
	if(combat_units[target_id] != undefined)
	{
		/*setTimeout(function(){
			$('.unit_' + target_id).css('opacity',0);
		},total_timeout);*/
		var original_poison = combat_units[target_id]['poison'];
		var original_burning = combat_units[target_id]['burning'];
		selected_card_id = combat_units[target_id]['card_id'];
		var temp_combat_unit = copyobject(combat_units[target_id]);
		unit_disappear(target_id, false);
		total_timeout += game_speed / 5;
		if(temp_combat_unit['transformed_from'] == undefined)
		{
			summon_unit(new_card_id, temp_combat_unit['col'], temp_combat_unit['row'], temp_combat_unit['side'], temp_combat_unit['side_string'], temp_combat_unit['original_side'], temp_combat_unit['card_key'], proc_summoned_abilities, target_id);
		}
		else
		{
			summon_unit(new_card_id, temp_combat_unit['col'], temp_combat_unit['row'], temp_combat_unit['side'], temp_combat_unit['side_string'], temp_combat_unit['original_side'], temp_combat_unit['transformed_from'], proc_summoned_abilities, target_id);
		}
		if(original_poison != undefined && original_poison > 0 && combat_units[target_id]['immune_to_poison'] == undefined)
		{
			if(combat_units[target_id]['poison'] == undefined){combat_units[target_id]['poison'] = 0;}
			combat_units[target_id]['poison'] += original_poison;
			update_poisoned(target_id);
		}
		if(original_burning != undefined && original_burning > 0 && combat_units[target_id]['immune_to_burning'] == undefined)
		{
			if(combat_units[target_id]['burning'] == undefined){combat_units[target_id]['burning'] = 0;}
			combat_units[target_id]['burning'] += original_burning;
			update_burning(target_id);
		}
		return true;
	}
	return false;
}

function summon_unit(card_being_played, selected_col, selected_row, side, side_string, card_side, transformed_from, proc_summoned_abilities, new_unit_key){
	
	if(Math.floor(parseInt(selected_card_id)) != parseInt(selected_card_id))
	{
		selected_card_id = undefined;
	}
	else
	{
		selected_card_id = parseInt(selected_card_id);
	}

	if(new_unit_key == undefined)
	{
		new_combat_unit_key ++;
		new_unit_key = new_combat_unit_key;
	}
	var played_card = {grave_cost:0};
	if(selected_card_id != undefined)
	{
		if(side == 1)
		{
			played_card = deck_cards[selected_card_id];
		}
		if(side == 2)
		{
			played_card = enemy_deck_cards[selected_card_id];
		}
	}
    combat_units[new_unit_key] = copyobject(available_cards[card_being_played]);
    combat_units[new_unit_key]['abilities'] = {};
    $.each(available_cards[card_being_played]['abilities'], function(ability_key, ability){
    	combat_units[new_unit_key]['abilities'][ability_key] = copyobject(ability);
    });
    combat_units[new_unit_key]['card_id'] = selected_card_id;
    combat_units[new_unit_key]['card_key'] = card_being_played;
    if(transformed_from != undefined)
    {
    	/*console.log(transformed_from);
    	console.log(selected_card_id);
    	console.log(combat_units);*/
    	combat_units[new_unit_key]['transformed_from'] = transformed_from;
    	combat_units[new_unit_key]['card_id'] = selected_card_id;
    }
    combat_units[new_unit_key]['unit_id'] = new_unit_key;
    combat_units[new_unit_key]['col'] = selected_col;
    combat_units[new_unit_key]['row'] = selected_row;
    if(combat_units[new_unit_key]['damage_reduction'] == undefined)
    {
    	combat_units[new_unit_key]['damage_reduction'] = 0;
    }
    if(combat_units[new_unit_key]['energy'] == undefined)
    {
    	combat_units[new_unit_key]['energy'] = 0;
    }
    if(combat_units[new_unit_key]['ai_strength'] == undefined)
    {
    	combat_units[new_unit_key]['ai_strength'] = combat_units[new_unit_key]['strength'];
    }
    var unit_side = side;
    if(available_cards[card_being_played]['forced_neutral'] != undefined && available_cards[card_being_played]['forced_neutral'] == true)
    {
    	unit_side = 0;
    	combat_units[new_unit_key]['original_side'] = side;
	    combat_units[new_unit_key]['side'] = 0;
	    combat_units[new_unit_key]['original_side_string'] = side_string;
	    combat_units[new_unit_key]['side_string'] = 'neutral';
    }
    else
    {
    	combat_units[new_unit_key]['original_side'] = side;
	    combat_units[new_unit_key]['side'] = side;
	    combat_units[new_unit_key]['original_side_string'] = side_string;
	    combat_units[new_unit_key]['side_string'] = side_string;
    }

    if(card_side != undefined)
    {
    	if(card_side == 0)
    	{
    		combat_units[new_unit_key]['original_side'] = 0;
    		combat_units[new_unit_key]['original_side_string'] = 'neutral';
    	}
    	if(card_side == 1)
    	{
    		combat_units[new_unit_key]['original_side'] = 1;
    		combat_units[new_unit_key]['original_side_string'] = 'player';
    	}
    	if(card_side == 2)
    	{
    		combat_units[new_unit_key]['original_side'] = 2;
    		combat_units[new_unit_key]['original_side_string'] = 'enemy';
    	}
    }
    
    if(combat_units[new_unit_key]['stunned'] == undefined)
    {
	    if(combat_units[new_unit_key]['type'] == 'creature' && transformed_from == undefined && gamedata['start_stunned'] == true)
	    {
	    	combat_units[new_unit_key]['stunned'] = 1;
	    }
	    else
	    {
    		combat_units[new_unit_key]['stunned'] = 0;
    	}
    }
    combat_units[new_unit_key]['hp'] = combat_units[new_unit_key]['max_hp'];
    var parsed_unit = parse_card(card_being_played, 'combat', new_unit_key, new_unit_key, undefined, played_card['grave_cost']);

    setTimeout(function(){	
	    $('.combat_grid').append(parsed_unit);
	    $('.unit_' + new_unit_key).addClass('enter_combat');
	    $('.unit_' + new_unit_key).addClass('col_' + selected_col);
	    $('.unit_' + new_unit_key).addClass('row_' + selected_row);
	    $('.unit_' + new_unit_key).addClass('side_' + unit_side);
	},total_timeout);
	update_stunned(new_unit_key);
	update_poisoned(new_unit_key);
	update_burning(new_unit_key);
	setTimeout(function(){	
		$('.unit_' + new_unit_key).removeClass('enter_combat');
	},total_timeout + game_speed);
	total_timeout += game_speed;

	if(proc_summoned_abilities == undefined || proc_summoned_abilities != false)
	{
		$.each(combat_units[new_unit_key]['abilities'], function(ability_key, ability){
			if(ability['proc'] == 'on_play'){
				process_ability(combat_units[new_unit_key], ability, combat_units[new_unit_key]['side_string'], combat_units[new_unit_key]['side']);
			}
		});
	}

	generate_procs('enters_game', new_unit_key);

	if(transformed_from == undefined)
    {

		process_abilities('any_summoned', 'player', 1, new_unit_key);
		process_abilities('any_summoned', 'enemy', 2, new_unit_key);

		process_abilities('specific_summon_' + card_being_played, 'player', 1, new_unit_key);
		process_abilities('specific_summon_' + card_being_played, 'enemy', 2, new_unit_key);

		if(side == 1)
		{
			process_abilities('enemy_summoned', 'enemy', 2, new_unit_key);
		}
		if(side == 2)
		{
			process_abilities('enemy_summoned', 'player', 1, new_unit_key);
		}

		if(combat_units[new_unit_key] != undefined && combat_units[new_unit_key]['type'] == 'creature')
		{
			process_abilities('any_creature_summoned', 'player', 1, new_unit_key);
			process_abilities('any_creature_summoned', 'enemy', 2, new_unit_key);
			if(side == 1)
			{
				process_abilities('enemy_creature_summoned', 'enemy', 2, new_unit_key);
				process_abilities('ally_creature_summoned', 'player', 1, new_unit_key);
			}
			if(side == 2)
			{
				process_abilities('enemy_creature_summoned', 'player', 1, new_unit_key);
				process_abilities('ally_creature_summoned', 'enemy', 2, new_unit_key);
			}
		}

		if(combat_units[new_unit_key] != undefined && combat_units[new_unit_key]['type'] == 'structure')
		{
			process_abilities('any_structure_summoned', undefined, undefined, new_unit_key);
			if(side == 1)
			{
				process_abilities('enemy_structure_summoned', 'enemy', 2, new_unit_key);
				process_abilities('ally_structure_summoned', 'player', 1, new_unit_key);
			}
			if(side == 2)
			{
				process_abilities('enemy_structure_summoned', 'player', 1, new_unit_key);
				process_abilities('ally_structure_summoned', 'enemy', 2, new_unit_key);
			}
		}
	}
	else
	{
		generate_procs('transformed',new_unit_key);
	}
}

function summon_fake_spell(card_being_played, selected_col, selected_row, side, side_string){
	new_combat_unit_key ++;
	var new_unit_key = new_combat_unit_key;
    combat_units[new_unit_key] = copyobject(available_cards[card_being_played]);
    combat_units[new_unit_key]['abilities'] = copyobject(available_cards[card_being_played]['abilities']);
    combat_units[new_unit_key]['card_id'] = selected_card_id;
    if(available_cards[card_being_played]['type'] == 'gem' && side == 1)
    {
    	combat_units[new_unit_key]['card_id'] = new_unit_key;
    }
    if(available_cards[card_being_played]['type'] == 'gem' && side == 2)
    {
    	combat_units[new_unit_key]['card_id'] = new_unit_key - 2;
    }

    combat_units[new_unit_key]['card_key'] = card_being_played;
    combat_units[new_unit_key]['unit_id'] = new_unit_key;
    combat_units[new_unit_key]['col'] = selected_col;
    combat_units[new_unit_key]['row'] = selected_row;
    if(combat_units[new_unit_key]['damage_reduction'] == undefined)
    {
    	combat_units[new_unit_key]['damage_reduction'] = 0;
    }
    if(combat_units[new_unit_key]['ai_strength'] == undefined)
    {
    	combat_units[new_unit_key]['ai_strength'] = combat_units[new_unit_key]['strength'];
    }
    var unit_side = side;
    if(available_cards[card_being_played]['forced_neutral'] != undefined && available_cards[card_being_played]['forced_neutral'] == true)
    {
    	unit_side = 0;
    	combat_units[new_unit_key]['original_side'] = side;
	    combat_units[new_unit_key]['side'] = 0;
	    combat_units[new_unit_key]['original_side_string'] = side_string;
	    combat_units[new_unit_key]['side_string'] = 'neutral';
    }
    else
    {
    	combat_units[new_unit_key]['original_side'] = side;
	    combat_units[new_unit_key]['side'] = side;
	    combat_units[new_unit_key]['original_side_string'] = side_string;
	    combat_units[new_unit_key]['side_string'] = side_string;
    }
    
    combat_units[new_unit_key]['hp'] = combat_units[new_unit_key]['max_hp'];

    generate_procs('spell_being_cast',new_unit_key);

    if(combat_units[new_unit_key] != undefined)
    {
		$.each(combat_units[new_unit_key]['abilities'], function(ability_key, ability){
			if(ability['proc'] == 'on_cast'){
				process_ability(combat_units[new_unit_key], ability, combat_units[new_unit_key]['side_string'], combat_units[new_unit_key]['side']);
			}
		});
	}

	if(combat_units[new_unit_key] != undefined && combat_units[new_unit_key]['stays_untill_triggered'] == undefined && combat_units[new_unit_key]['type'] != 'gem')
	{
		delete combat_units[new_unit_key];
	}
	else
	{
		if(combat_units[new_unit_key] == undefined || combat_units[new_unit_key]['type'] != 'gem')
		{
			total_timeout += game_speed;
		}
	}
}

function update_stunned(unit_id){
	if(combat_units[unit_id] != undefined)
	{
		if(combat_units[unit_id]['stunned'] != undefined && combat_units[unit_id]['stunned'] > 0)
		{
			var stunned_left = combat_units[unit_id]['stunned'];
			setTimeout(function(){
				$('.unit_' + unit_id).addClass('stunned');
				$('.unit_' + unit_id + ' .owned_amount').html(stunned_left);
			},total_timeout);
			
		}
		else
		{
			setTimeout(function(){
				$('.unit_' + unit_id).removeClass('stunned');
				$('.unit_' + unit_id + ' .owned_amount').html('');
			},total_timeout);
		}
	}
}

function update_poisoned(unit_id){
	if(combat_units[unit_id] != undefined)
	{
		if(combat_units[unit_id]['poisoned'] != undefined && combat_units[unit_id]['poisoned'] > 0)
		{
			var poisoned_left = combat_units[unit_id]['poisoned'];
			setTimeout(function(){
				$('.unit_' + unit_id).addClass('poisoned');
				$('.unit_' + unit_id + ' .poisoned_amount').html(poisoned_left);
			},total_timeout);
			
		}
		else
		{
			setTimeout(function(){
				$('.unit_' + unit_id).removeClass('poisoned');
				$('.unit_' + unit_id + ' .poisoned_amount').html('');
			},total_timeout);
		}
	}
}

function update_burning(unit_id){
	if(combat_units[unit_id] != undefined)
	{
		if(combat_units[unit_id]['burning'] != undefined && combat_units[unit_id]['burning'] > 0)
		{
			var poisoned_left = combat_units[unit_id]['burning'];
			setTimeout(function(){
				$('.unit_' + unit_id).addClass('burning');
				$('.unit_' + unit_id + ' .burning_amount').html(poisoned_left);
			},total_timeout);
			
		}
		else
		{
			setTimeout(function(){
				$('.unit_' + unit_id).removeClass('burning');
				$('.unit_' + unit_id + ' .burning_amount').html('');
			},total_timeout);
		}
	}
}



function show_combat_card_details(unit_id){
	if(combat_units[unit_id] !== undefined)
	{
		$('.card_slot').removeClass('selectable');
		$('.card.combat').removeClass('selectable');
		$('.detail_overlay').fadeIn();
		var parsed_card = parse_combat_unit(unit_id);

		$('.detail_overlay').html('<div class="overlay_card_container">' + parsed_card + ' </div>');
	}
};

function parse_combat_unit(unit_id){

	var grave_cost = 0;

	if(combat_units[unit_id]['original_side'] == 1 && combat_units[unit_id]['card_id'] != undefined && deck_cards[combat_units[unit_id]['card_id']] != undefined)
	{
		grave_cost = deck_cards[combat_units[unit_id]['card_id']]['grave_cost'];
	}
	if(combat_units[unit_id]['original_side'] == 2 && combat_units[unit_id]['card_id'] != undefined && enemy_deck_cards[combat_units[unit_id]['card_id']] != undefined)
	{
		grave_cost = enemy_deck_cards[combat_units[unit_id]['card_id']]['grave_cost'];
	}

	
	
	var parsed_card = '';
	var additional_classes = '';

	if(combat_units[unit_id]['poisoned'] != undefined && combat_units[unit_id]['poisoned'] > 0)
	{
		additional_classes += 		' poisoned';
	}
	if(combat_units[unit_id]['burning'] != undefined && combat_units[unit_id]['burning'] > 0)
	{
		additional_classes += 		' burning';
	}

	parsed_card += 	'<div class="card full ' + additional_classes + '">';
	parsed_card += 		'<div class="card_color" style="background-color:#' + combat_units[unit_id]['color'] + '"></div>';
	parsed_card += 		'<div class="card_image" style="background-image:url(images/cards/' + combat_units[unit_id]['image'] + ')"></div>';
	// parsed_card += 		'<div class="card_name">' + combat_units[unit_id]['name'] + '</div>';
	/*parsed_card += 		'<div class="card_text">' + combat_units[unit_id]['text'] + '</div>';*/
	var card_energy_visible = '';
	if(combat_units[unit_id]['uses_energy'] != undefined){card_energy_visible = 'active'}
	parsed_card += 		'<div class="card_energy ' + card_energy_visible + '">energy: <span class="current_energy">' + combat_units[unit_id]['energy'] + '</span></div>';
	if(combat_units[unit_id]['strength'] != false){
		parsed_card += 		'<div class="card_strength">' + combat_units[unit_id]['strength'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="card_strength hidden"></div>';
	}
	if(combat_units[unit_id]['poisoned'] != undefined && combat_units[unit_id]['poisoned'] > 0)
	{
		parsed_card += 		'<div class="poisoned_amount">' + combat_units[unit_id]['poisoned'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="poisoned_amount"></div>';
	}
	if(combat_units[unit_id]['burning'] != undefined && combat_units[unit_id]['burning'] > 0)
	{
		parsed_card += 		'<div class="burning_amount">' + combat_units[unit_id]['burning'] + '</div>';
	}
	else
	{
		parsed_card += 		'<div class="burning_amount"></div>';
	}

	if(combat_units[unit_id]['rarity'] != undefined && combat_units[unit_id]['rarity'] > 0)
	{
		parsed_card += 		'<div class="stars">';
		for (var i = combat_units[unit_id]['rarity'] - 1; i >= 0; i--) {
			parsed_card += 		'<div class="star"></div>';
		};
		parsed_card += 		'</div>';
	}
	
	if(combat_units[unit_id]['max_hp'] != false){
		var current_hp_percent = Math.floor((combat_units[unit_id]['hp'] / combat_units[unit_id]['max_hp']) * 100);
		parsed_card += 		'<div class="card_hp"><div class="card_current_hp" style="height:' + current_hp_percent + '%"></div><span>' + combat_units[unit_id]['hp'] + '</span></div>';
	}
	if(combat_units[unit_id]['cost']['colorless'] == undefined){combat_units[unit_id]['cost']['colorless'] = 0;}
	if(combat_units[unit_id]['type'] != 'gem')
	{
		var total_cost = '';
		$.each(combat_units[unit_id]['cost'], function(color, amount){
			if(color == 'colorless'){amount += grave_cost;}
			if(amount > 0)
			{
				/*var sub_cost = '<span class="' + color + '_mana">';
				for (var i = 0; i < amount; i++) {
					sub_cost += '<i class="fas fa-circle"></i>'; 
				};
				sub_cost += '</span>';
				total_cost += sub_cost;*/
				var shown_amount = '';
				if(amount > 1){shown_amount = amount;}

				total_cost += '<div class="cost_color ' + color + '_mana_bg">' + shown_amount + '</div>';
			}
		});
		parsed_card += 		'<div class="card_cost">' + total_cost + '</div>';
	}
	parsed_card += 	'</div>';
	parsed_card += 	'<div class="card_info">';
	parsed_card += 		'<div class="card_name">' + combat_units[unit_id]['name'] + '</div>';
	parsed_card += 		'<div class="card_text"><b>' + combat_units[unit_id]['type'] + '</b><br/>' + combat_units[unit_id]['text'] + '</div>';
	if(combat_units[unit_id]['flavor'] != undefined){
		parsed_card += 		'<div class="card_flavor"><i>' + combat_units[unit_id]['flavor'] + '</i></div>';
	}
	parsed_card += 	'</div>';

	return parsed_card;
}

function gain_mana_from_card(mana_chances, mana_amount, mana_pool, origin_unit){
	var gained_mana_amount = 0;
	var fake_origin = {};
	if(origin_unit == undefined)
	{
		origin_unit = {};
	}
	if(origin_unit['unit_id'] == undefined && origin_unit['side'] == 1)
	{
		origin_unit['unit_id'] = 1;
	}
	if(origin_unit['unit_id'] == undefined && origin_unit['side'] == 2)
	{
		origin_unit['unit_id'] = 3;
	}
	if(origin_unit['unit_id'] == undefined)
	{
		origin_unit['unit_id'] = 0;
	}
	if(mana_pool == player_mana)
	{
		fake_origin = {side:1,side_string:'player'};
	}
	if(mana_pool == enemy_mana)
	{
		fake_origin = {side:2,side_string:'enemy'};
	}
	for (var i = 0; i < mana_amount; i++) {
		var total_chance = 0;
		var lowest_mana = 1000;
		$.each(mana_pool, function(color,amount){
			if(mana_chances[color] != undefined && mana_chances[color] > 0 && amount < lowest_mana){lowest_mana = amount;}
		});
		$.each(mana_chances, function(color, chance){
			if(mana_pool[color] < 25 && mana_pool[color] <= lowest_mana)
			{
				total_chance += chance;
			}
			
		});
		var chosen_color = Math.random() * total_chance;
		$.each(mana_chances, function(color, chance){
			if(mana_pool[color] < 25 && mana_pool[color] <= lowest_mana)
			{
				chosen_color -= chance;
				if(chosen_color > -1 * chance && chosen_color < 0)
				{
					
						mana_pool[color] += 1;
						gained_mana_amount ++;
						show_current_mana();
						show_player_hand();
						generate_procs('generated_mana', origin_unit['unit_id']);
						generate_procs('generated_' + color + '_mana', origin_unit['unit_id']);
						if(origin_unit['side'] == fake_origin['side'])
						{
							generate_procs('generated_ally_mana', origin_unit['unit_id']);
							generate_procs('generated_' + color + '_ally_mana', origin_unit['unit_id']);
						}
						else
						{
							generate_procs('generated_enemy_mana', origin_unit['unit_id']);
							generate_procs('generated_' + color + '_enemy_mana', origin_unit['unit_id']);
						}
						total_timeout += game_speed / 2;
						return
				}
			}
		});
	};
	return gained_mana_amount;
}

function reduce_mana(mana_chances, mana_amount, mana_pool, origin_unit){
	var reduction_success_amount = 0;
	var fake_origin = {};
	if(origin_unit == undefined)
	{
		origin_unit = {};
	}
	if(origin_unit['unit_id'] == undefined)
	{
		origin_unit['unit_id'] = 0;
	}
	if(mana_pool == player_mana)
	{
		fake_origin = {side:1,side_string:'player'};
	}
	if(mana_pool == enemy_mana)
	{
		fake_origin = {side:2,side_string:'enemy'};
	}
	for (var i = 0; i < mana_amount; i++) {
		var total_chance = 0;
		var highest_mana = 0;
		$.each(mana_pool, function(color,amount){
			if(mana_chances[color] != undefined && mana_chances[color] > 0 && amount > highest_mana){highest_mana = amount;}
		});
		$.each(mana_chances, function(color, chance){
			if(mana_pool[color] > 0 && mana_pool[color] >= highest_mana)
			{
				total_chance += chance;
			}
		});
		var chosen_color = Math.random() * total_chance;
		$.each(mana_chances, function(color, chance){
			if(mana_pool[color] > 0 && mana_pool[color] >= highest_mana)
			{
				chosen_color -= chance;
				if(chosen_color > -1 * chance && chosen_color < 0)
				{
					
						mana_pool[color] -= 1;
						show_current_mana();
						show_player_hand();
						generate_procs('reduced_mana', origin_unit['unit_id']);
						generate_procs('reduced_' + color + '_mana', origin_unit['unit_id']);
						if(origin_unit['side'] == fake_origin['side'])
						{
							generate_procs('reduced_ally_mana', origin_unit['unit_id']);
							generate_procs('reduced_' + color + '_ally_mana', origin_unit['unit_id']);
						}
						else
						{
							generate_procs('reduced_enemy_mana', origin_unit['unit_id']);
							generate_procs('reduced_' + color + '_enemy_mana', origin_unit['unit_id']);
						}
						reduction_success_amount++;
						total_timeout += game_speed / 2;
						return
				}
			}
		});
	};
	return reduction_success_amount;
}

function pay_mana_costs(mana_pool, mana_cost, grave_cost){

	$.each(mana_cost, function(color, amount){
		mana_pool[color] -= amount;
	});

	if(mana_cost['colorless'] != undefined)
	{
		var mana_chances = {
			blue: 	1,
			red: 	1,
			green: 	1,
			purple: 1,
			orange: 1,
			yellow: 1
		};
		reduce_mana(mana_chances, mana_cost['colorless'] + grave_cost, mana_pool);
	}
}

function find_random_empty_slot(has_adjacent, side, place_on_empty_board, no_adjacent_ally, max_hp, card_to_play, not_this_unit, move_to_type, specific_slot, origin_key){
	var free_slots = {};
	var free_slot_count = 0;


	/*var best_value = 0;*/
	if(side == undefined){side = 'any';}
	for (var col_to_check = 2; col_to_check <= 4; col_to_check++) {
		for (var row_to_check = 1; row_to_check <= 3; row_to_check++) {
			var slot_free = true;
			$.each(combat_units, function(unit_id, unit){
				if(unit['col'] == col_to_check && unit['row'] == row_to_check && unit['hp'] > 0)
				{
					slot_free = false;
				}
			});
			if(slot_free == true)
			{
				var good_target = true;
				/*var highest_unit_value = 0;*/
				if(has_adjacent != undefined && has_adjacent == true)
				{
					good_target = false;
					var max_hp_check = false;
					//var max_damage_on_slot = 0;
					$.each(combat_units, function(combat_unit_id, combat_unit){
						if(not_this_unit == undefined || combat_unit_id != not_this_unit)
						{
							var unit_total_hp = combat_unit['hp'];
							/*if(combat_unit['damage_reduction'] != undefined)
							{
								unit_total_hp += combat_unit['damage_reduction'];
							}*/
							if((side == combat_unit['side'] || side == 'any') && (move_to_type == undefined || move_to_type == combat_unit['type']))
							{
								if(
									 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
									||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
									|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
									||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
								)
								{
									/*if(combat_unit['strength'] != false)
									{
										max_damage_on_slot += combat_unit['strength'];
									}*/
									if(max_hp != undefined)
									{
										var calculated_max_hp = calculate_effect(combat_units[origin_key], max_hp, combat_unit['unit_id'], undefined);
									}
									if(max_hp != undefined && unit_total_hp <= calculated_max_hp)
									{
										//console.log(unit_total_hp + ' <= ' + max_hp);
										max_hp_check = true;
									}
									/*var temp_unit_value = 0;
									$.each(combat_unit['cost'], function(color, mana_cost){
										temp_unit_value += mana_cost;
									});
									if(temp_unit_value > highest_unit_value)
									{
										highest_unit_value = temp_unit_value;
									}
									if(highest_unit_value > best_value)
									{
										best_value = highest_unit_value;
									}*/
									if(combat_unit['hp'] > 0)
									{
										good_target = true;
									}
								}
							}
						}
					});
 					/*if(card_to_play != undefined && max_damage_on_slot >= card_to_play['max_hp'] && card_to_play['safe_play'] != undefined && card_to_play['safe_play'] == true)
 					{
 						good_target = false;
 					}*/
					if(max_hp_check == false && max_hp != undefined)
					{
						good_target = false;
					}
				}
				if(has_adjacent != undefined && has_adjacent == false)
				{
					good_target = true;
					$.each(combat_units, function(combat_unit_id, combat_unit){
						if(not_this_unit == undefined || combat_unit_id != not_this_unit)
						{
							if((side == combat_unit['side'] || side == 'any' || combat_unit['side'] == 0) && (move_to_type == undefined || move_to_type == combat_unit['type']))
							{
								if(
									 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
									||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
									|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
									||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
								)
								{
									if(combat_unit['hp'] > 0)
									{
										good_target = false;
									}
								}
							}
						}
					});
				}
				
				/*if(no_adjacent_ally != undefined && no_adjacent_ally == true)
				{
					$.each(combat_units, function(combat_unit_id, combat_unit){
						if(side != combat_unit['side'] && combat_unit['side'] != 0)
						{
							if(
								 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
								||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
								|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
								||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
							)
							{
								good_target = false;
							}
						}
					});
				}*/
				/*if(no_adjacent_ally != undefined && no_adjacent_ally == false)
				{
					var slot_has_adjacent_ally = false;
					$.each(combat_units, function(combat_unit_id, combat_unit){
						if(side != combat_unit['side'] && combat_unit['side'] != 0)
						{
							if(
								 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
								||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
								|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
								||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
							)
							{
								slot_has_adjacent_ally = true;
							}
						}
					});
					if(slot_has_adjacent_ally == false)
					{
						good_target = false;
					}
				}
				if(count_enemy_units(side) == 0 && place_on_empty_board == false)
				{
					good_target = false;
				}
				if(count_enemy_units(side) == 0 && place_on_empty_board == true)
				{
					//console.log('no enemy units');
					good_target = true;
				}*/
				if(good_target == true)
				{
					var new_slot_key = get_highest_key_in_object(free_slots) + 1;
					free_slots[new_slot_key] = {col:col_to_check,row:row_to_check/*,best_value:highest_unit_value*/};
					free_slot_count++;
				}
			}
		};
	};
	/*if(has_adjacent != undefined && has_adjacent == true)
	{
		$.each(free_slots, function(slot_id, slot){
			if(slot['best_value'] < best_value)
			{
				delete free_slots[slot_id];
			}
		});
	}*/

	if(specific_slot != undefined)
	{
		$.each(free_slots, function(possible_slot_id, possible_slot){
			possible_slot['side'] = combat_units[origin_key]['side'];
			if (check_units_position(possible_slot, combat_units[origin_key], specific_slot) == false)
			{
				delete free_slots[possible_slot_id];
			}
		});
	}

	if(free_slot_count > 0)
	{

		var slot_to_return = {col:0,row:0};
		var chosen_free_slot = Math.floor(Math.random() * count_object(free_slots)) + 1;
		$.each(free_slots, function(slot_id, slot){
			chosen_free_slot -= 1;
			if(chosen_free_slot == 0)
			{
				slot_to_return = {col:slot['col'],row:slot['row']};
			}
		});
		return slot_to_return;
	}
	else
	{
		return {col:0,row:0};
	}
}

function ai_find_best_empty_spot(card_to_be_played, safety){

	//console.log('---');
	//console.log('checking slots for ' + card_to_be_played['name']);

	if(card_to_be_played['ai_strength'] == undefined)
	{
		card_to_be_played['ai_strength'] = card_to_be_played['strength'];
	}

	// find safe slot with kill
	var best_slots = ai_try_to_find_best_empty_spot(card_to_be_played, true, true);
	//console.log('--- found ' + count_object(best_slots) + ' safe slots with kill');

	if((safety == undefined || safety <= 2) && card_to_be_played['one_hit_kill'] != undefined)
	{
		// find unsafe slot with kill
		if(count_object(best_slots) == 0 && card_to_be_played['safe_play'] == undefined)
		{
			best_slots = ai_try_to_find_best_empty_spot(card_to_be_played, false, true);
			//console.log('--- found ' + count_object(best_slots) + ' unsafe slots with kill');
		}
	}

	if(safety == undefined || safety <= 1)
	{
		// find safe slot without kill
		if(count_object(best_slots) == 0 && card_to_be_played['one_hit_kill'] == undefined)
		{
			best_slots = ai_try_to_find_best_empty_spot(card_to_be_played, true, false);
			//console.log('--- found ' + count_object(best_slots) + ' safe slots without kill');
		}
	}
	/*if(count_object(best_slots) == 0 && (safety == undefined || safety <= 0) && card_to_be_played['one_hit_kill'] == undefined && card_to_be_played['safe_play'] == undefined)
	{
		best_slots = ai_try_to_find_best_empty_spot(card_to_be_played, false, false);	
	}*/

	/*if(safety == undefined || safety <= 0)
	{
		// find any slot
		if(count_object(best_slots) == 0 && card_to_be_played['one_hit_kill'] == undefined && card_to_be_played['safe_play'] == undefined)
		{
			best_slots = ai_try_to_find_best_empty_spot(card_to_be_played, false, false);	
		}
	}*/

	if((card_to_be_played['safe_play'] == undefined && (safety == undefined || safety <= 0) && card_to_be_played['one_hit_kill'] == undefined && card_to_be_played['suicidal'] != undefined) || enemy_hp < 10)
	{
		// find any slot if suicidal
		if(count_object(best_slots) == 0 /*&& card_to_be_played['one_hit_kill'] == undefined && card_to_be_played['safe_play'] == undefined*/)
		{
			best_slots = ai_try_to_find_best_empty_spot(card_to_be_played, false, false, true);	
			//console.log('--- found ' + count_object(best_slots) + ' suicidal slots');
		}
	}

	/*var best_slots_count = count_object(best_slots);

	if(count_enemy_units(1) == 0 && best_slots_count == 0 && count_hand_cards(enemy_deck_cards) == 10)
	{
		best_slots = ai_find_all_possible_spots(card_to_be_played['type'], 2, false, card_to_be_played['favorite_col']);
	}*/

	var best_slots_count = count_object(best_slots);
	var best_slot = {col:0,row:0};
	var chosen_slot = (Math.random() * best_slots_count);
	
	$.each(best_slots, function(slot_id, slot){

		chosen_slot -= 1;
		if(chosen_slot > -1 && chosen_slot < 0)
		{
			best_slot = slot;
		}
		
	});

	if(best_slot['col'] > 0)
	{
		//ai_reduce_ai_hp(card_to_be_played, best_slot);
	}

	return best_slot;
};

function ai_try_to_find_best_empty_spot(card_to_be_played, safe_slot, one_hit_kill, suicidal){

	//console.log('searching for slots...');

	var all_possible_slots = ai_find_all_possible_spots(card_to_be_played['type'], 2, false, card_to_be_played['favorite_col']);
	//console.log('initial slots found: ' + count_object(all_possible_slots));

	if(card_to_be_played['no_adjacent_ally'] != undefined && card_to_be_played['no_adjacent_ally'] == true && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_no_adjacent_ally(card_to_be_played, all_possible_slots, undefined);
		//console.log('after no_adjacent_ally: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['no_adjacent_ally_on_play'] != undefined && card_to_be_played['no_adjacent_ally_on_play'] == true && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_no_adjacent_ally(card_to_be_played, all_possible_slots, undefined);
		//console.log('after no_adjacent_ally_on_play: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['no_adjacent_ally_creature'] != undefined && card_to_be_played['no_adjacent_ally_creature'] == false && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_adjacent_ally_creature(card_to_be_played, all_possible_slots);
		//console.log('after no_adjacent_ally_creature false: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['no_adjacent_ally_creature'] != undefined && card_to_be_played['no_adjacent_ally_creature'] == true && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_no_adjacent_ally_creature(card_to_be_played, all_possible_slots);
		//console.log('after no_adjacent_ally_creature true: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['no_adjacent_ally_structure'] != undefined && card_to_be_played['no_adjacent_ally_structure'] == false && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_adjacent_ally_structure(card_to_be_played, all_possible_slots);
		//console.log('after no_adjacent_ally_structure false: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['has_adjacent_enemy'] != undefined && card_to_be_played['has_adjacent_enemy'] == true && count_enemy_units(1) > 0 && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_adjacent_enemy(card_to_be_played, all_possible_slots, undefined, card_to_be_played['min_adjacent'], card_to_be_played['adjacent_has_strength'], card_to_be_played['has_most_adjacent'], card_to_be_played['adjacent_has_hp']);
		//console.log('slots with adjacent enemy: ' + count_object(all_possible_slots));
	}
	

	if(card_to_be_played['has_adjacent_enemy'] != undefined && card_to_be_played['has_adjacent_enemy'] == false && count_object(all_possible_slots) > 0)
	{
		var temp_all_possible_slots = copyobject(all_possible_slots);

		temp_all_possible_slots = ai_filter_slots_by_has_no_adjacent_enemy(card_to_be_played, temp_all_possible_slots);

		if(count_object(temp_all_possible_slots) > 0)
		{
			all_possible_slots = temp_all_possible_slots;
			//console.log('slots with no adjacent enemy: ' + count_object(all_possible_slots));
		}

	}

	if(card_to_be_played['has_adjacent_enemy_creature'] != undefined && card_to_be_played['has_adjacent_enemy_creature'] == true && count_enemy_units(1) > 0 && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_adjacent_enemy(card_to_be_played, all_possible_slots, 'creature', card_to_be_played['min_adjacent'], card_to_be_played['adjacent_has_strength'], card_to_be_played['has_most_adjacent'], card_to_be_played['adjacent_has_hp']);
		//console.log('slots with adjacent enemy creature: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['has_adjacent_enemy_creature'] != undefined && card_to_be_played['has_adjacent_enemy_creature'] == false && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_no_adjacent_enemy(card_to_be_played, all_possible_slots, 'creature');
		//console.log('slots with no adjacent enemy creature: ' + count_object(all_possible_slots));
	}

	if(card_to_be_played['has_adjacent_enemy_structure'] != undefined && card_to_be_played['has_adjacent_enemy_structure'] == true && count_enemy_units(1) > 0 && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_adjacent_enemy(card_to_be_played, all_possible_slots, 'structure', card_to_be_played['min_adjacent'], card_to_be_played['adjacent_has_strength'], card_to_be_played['has_most_adjacent'], card_to_be_played['adjacent_has_hp']);
	}

	if(card_to_be_played['has_adjacent_enemy_structure'] != undefined && card_to_be_played['has_adjacent_enemy_structure'] == false && count_object(all_possible_slots) > 0)
	{
		all_possible_slots = ai_filter_slots_by_has_no_adjacent_enemy(card_to_be_played, all_possible_slots, 'structure');
	}

	if(card_to_be_played['type'] == 'structure' && (check_deck(deck_cards, 'kills_structures') == true || card_to_be_played['safe_play'] != undefined) && count_object(all_possible_slots) > 0)
	{
		//console.log('filtering covered safe for ' + card_to_be_played['name'] + ' (' + count_object(all_possible_slots) + ')');
		all_possible_slots = ai_filter_slots_by_has_ally_creature_in_front(card_to_be_played, all_possible_slots);
		//console.log('found ' + count_object(all_possible_slots) + ' covered structure spots');
	}

	if(card_to_be_played['favorite_col'] == 4 && safe_slot == true && one_hit_kill == false && count_object(all_possible_slots) > 0)
	{
		var temp_all_possible_slots = copyobject(all_possible_slots);

		
		temp_all_possible_slots = ai_filter_slots_by_has_ally_creature_in_front(card_to_be_played, temp_all_possible_slots);
		

		if(count_object(temp_all_possible_slots) >= 0)
		{
			//console.log('filtering covered safe for ' + card_to_be_played['name'] + ' (' + count_object(all_possible_slots) + ')');
			all_possible_slots = temp_all_possible_slots;
			//console.log('found ' + count_object(all_possible_slots) + ' covered spots');
		}
	}



	if(one_hit_kill == true && count_object(all_possible_slots) > 0)
	{
		//console.log('filtering one hit kill for ' + card_to_be_played['name']);
		all_possible_slots = ai_filter_slots_by_one_hit_kill(card_to_be_played, all_possible_slots);
	}

	/*var temp_all_possible_slots = copyobject(all_possible_slots);

	temp_all_possible_slots = ai_filter_slots_by_other_unit_has_no_adjacent_ally(card_to_be_played, temp_all_possible_slots);

	if(count_object(temp_all_possible_slots) > 0)
	{
		all_possible_slots = temp_all_possible_slots;
	}*/

	if((suicidal == undefined || suicidal == false) && safe_slot == true && count_object(all_possible_slots) > 0)
	{
		//console.log('slot count before safe filter (no adjacent ally): ' + count_object(all_possible_slots));
		all_possible_slots = ai_filter_slots_by_other_unit_has_no_adjacent_ally(card_to_be_played, all_possible_slots);
		//console.log('slot count after safe filter (no adjacent ally): ' + count_object(all_possible_slots));
	}

	if(safe_slot == true && (suicidal == undefined || suicidal == false) && count_object(all_possible_slots) > 0)
	{
		//console.log('slot count before safe filter: ' + count_object(all_possible_slots));
		all_possible_slots = ai_filter_slots_by_safe(card_to_be_played, all_possible_slots);
		all_possible_slots = ai_filter_slots_by_safest(card_to_be_played, all_possible_slots);
		//console.log('slot count after safe filter: ' + count_object(all_possible_slots));
	}

	return all_possible_slots;
}

function check_deck(deck, condition){
	condition_matched = false;
	$.each(deck, function(deck_card_id, deck_card){
		if(available_cards[deck_card['card_id']][condition] == true)
		{
			condition_matched = true;
			//console.log('found match');
		}
	});
	return condition_matched;
}

function check_has_adjacent_enemy(unit){
	var has_adjacent = false;
	$.each(combat_units, function(cu_id, cu){
		if(check_units_position(unit,cu,'adjacent') == true && unit['side'] != cu['side'])
		{
			has_adjacent = true;
		}
	});
	return has_adjacent;
}

function check_units_position(unit_1, unit_2, relative_position){

	// SLOT 1: 	position to check
	// SLOT 2: 	original position

	position_matched = false;

	if(relative_position == 'adjacent' &&
		(
		 	(unit_1['col'] == unit_2['col'] && unit_1['row'] == unit_2['row'] - 1)
		||	(unit_1['col'] == unit_2['col'] && unit_1['row'] == unit_2['row'] + 1)
		|| 	(unit_1['row'] == unit_2['row'] && unit_1['col'] == unit_2['col'] - 1)
		||	(unit_1['row'] == unit_2['row'] && unit_1['col'] == unit_2['col'] + 1)
		)
	){position_matched = true;}

	if(relative_position == 'not_adjacent'){
		position_matched = true;
		if(
			 	(unit_1['col'] == unit_2['col'] && unit_1['row'] == unit_2['row'] - 1)
			||	(unit_1['col'] == unit_2['col'] && unit_1['row'] == unit_2['row'] + 1)
			|| 	(unit_1['row'] == unit_2['row'] && unit_1['col'] == unit_2['col'] - 1)
			||	(unit_1['row'] == unit_2['row'] && unit_1['col'] == unit_2['col'] + 1)
		)
		{position_matched = false;}
	}

	if(relative_position == 'diagonal' &&
		(
		 	(unit_1['col'] == unit_2['col'] - 1 && unit_1['row'] == unit_2['row'] - 1)
		||	(unit_1['col'] == unit_2['col'] - 1 && unit_1['row'] == unit_2['row'] + 1)
		|| 	(unit_1['col'] == unit_2['col'] + 1 && unit_1['row'] == unit_2['row'] - 1)
		||	(unit_1['col'] == unit_2['col'] + 1 && unit_1['row'] == unit_2['row'] + 1)
		)
	){position_matched = true;}

	if(relative_position == 'in_front' && 
		(
			(unit_2['side'] == 2 && unit_2['col'] == unit_1['col'] +1)
		|| 	(unit_2['side'] == 1 && unit_2['col'] == unit_1['col'] -1)
		)
	){position_matched = true;}

	if(relative_position == 'behind' && 
	(
		(unit_2['side'] == 2 && unit_2['col'] == unit_1['col'] -1)
	|| 	(unit_2['side'] == 1 && unit_2['col'] == unit_1['col'] +1)
	)
	){position_matched = true;}

	if(relative_position == 'directly_in_front' && 
		(
				(unit_2['side'] == 2 && unit_2['col'] == unit_1['col'] + 1 && unit_1['row'] == unit_2['row'])
			|| 	(unit_2['side'] == 1 && unit_2['col'] == unit_1['col'] - 1 && unit_1['row'] == unit_2['row'])
		)
	){position_matched = true;/*console.log('found directly in front');*/}

	if(relative_position == 'directly_behind' && 
		(
				(unit_2['side'] == 2 && unit_2['col'] == unit_1['col'] - 1 && unit_1['row'] == unit_2['row'])
			|| 	(unit_2['side'] == 1 && unit_2['col'] == unit_1['col'] + 1 && unit_1['row'] == unit_2['row'])
		)
	){position_matched = true;}


	if(relative_position == 'same_row' && unit_1['row'] == unit_2['row'])
	{position_matched = true;}

	if(relative_position == 'same_col' && unit_1['col'] == unit_2['col'])
	{position_matched = true;}

	if(relative_position == 'ally_col' && ((unit_1['side'] == 2 && unit_1['col'] == 4) || (unit_1['side'] == 1 && unit_1['col'] == 2)))
	{position_matched = true;}

	if(relative_position == 'enemy_col' && ((unit_1['side'] == 2 && unit_1['col'] == 2) || (unit_1['side'] == 1 && unit_1['col'] == 4)))
	{position_matched = true;}

	if(relative_position == 'center_col' && unit_1['col'] == 3)
	{position_matched = true;}

	if(relative_position == 'top_row' && unit_1['row'] == 1)
	{position_matched = true;}

	if(relative_position == 'center_row' && unit_1['row'] == 2)
	{position_matched = true;}

	if(relative_position == 'bottom_row' && unit_1['row'] == 3)
	{position_matched = true;}

	if(relative_position == 'around' &&
		unit_1['col'] >= unit_2['col'] - 1 && unit_1['col'] <= unit_2['col'] + 1 &&
		unit_1['row'] >= unit_2['row'] - 1 && unit_1['row'] <= unit_2['row'] + 1 &&
		(unit_1['row'] != unit_2['row'] || unit_1['col'] != unit_2['col'])
	){position_matched = true;}

	if(relative_position == 'random'){position_matched = true;}

	return position_matched;
}

function ai_filter_slots_by_safe(card_to_be_played, all_possible_slots){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var maximum_damage_on_spot = 0;
		var counted_a_kill = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['ai_strength'] != false && combat_unit['ai_strength'] > 0 && combat_unit['side'] != 2 && combat_unit['ai_hp'] > 0 && check_units_position(possible_slot, combat_unit, combat_unit['attack_type']) == true
			)
			{
				if(counted_a_kill == false && ((card_to_be_played['stunned'] != undefined && card_to_be_played['stunned'] == 0) || gamedata['start_stunned'] == false) && card_to_be_played['ai_strength'] >= combat_unit['ai_hp'] + combat_unit['damage_reduction'] && card_to_be_played['attack_type'] == combat_unit['attack_type'])
				{
					counted_a_kill = true;
				}
				else
				{
					if(card_to_be_played['damage_reduction'] != undefined)
					{
						var effective_damage = combat_unit['ai_strength'] - card_to_be_played['damage_reduction'];
					}
					else
					{
						var effective_damage = combat_unit['ai_strength'];
					}
					if(effective_damage > 0)
					{
						if(combat_unit['attack_amount'] != undefined && parseInt(combat_unit['attack_amount']) == combat_unit['attack_amount'] && combat_unit['attack_amount'] > 0)
						{
							effective_damage *= combat_unit['attack_amount'];
						}
						maximum_damage_on_spot += effective_damage;
					}
				}
			}
		});
		if(current_safety_level >= 0)
		{
			maximum_damage_on_spot += random_damage;
		}
		if(maximum_damage_on_spot >= card_to_be_played['max_hp'])
		{
			delete all_possible_slots[possible_slot_id];
		}
		else
		{
			all_possible_slots[possible_slot_id]['maximum_damage_on_spot'] = maximum_damage_on_spot;
		}
	});

	return all_possible_slots;
}

function ai_filter_slots_by_one_hit_kill(card_to_be_played, all_possible_slots){
	//console.log(card_to_be_played['name'] + ' can deal ' + card_to_be_played['ai_strength'] + ' damage');
	var highest_kill_value = 0;
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		if(possible_slot['side'] == undefined){possible_slot['side'] = 2;}
		var found_a_kill = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){

			if(
				combat_unit['side'] == 1 && combat_unit['ai_hp'] > 0 &&
				check_units_position(combat_unit, possible_slot, card_to_be_played['attack_type']) == true
			)
			{
				//console.log(card_to_be_played['name'] + ' can hit ' + combat_unit['name'] + '');
				var attack_amount = 1;
				if(card_to_be_played['attack_amount'] != undefined && parseInt(card_to_be_played['attack_amount']) == card_to_be_played['attack_amount'])
				{
					attack_amount = card_to_be_played['attack_amount'];
				}
				if((card_to_be_played['ai_strength'] - combat_unit['damage_reduction']) * attack_amount >= combat_unit['ai_hp'])
				{
					found_a_kill = true;
					var kill_value = calculate_unit_value(combat_unit_id);
					possible_slot['kill_value'] = kill_value;
					if(kill_value > highest_kill_value)
					{
						highest_kill_value = kill_value;
					}
				}
			}
		});
		if(found_a_kill == false)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});
	//console.log('found ' + count_object(all_possible_slots) + ' slots with kill');
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		if(possible_slot['kill_value'] == undefined || possible_slot['kill_value'] < highest_kill_value)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});
	//console.log('kept ' + count_object(all_possible_slots) + ' slots with kill');

	return all_possible_slots;
}

function ai_filter_slots_by_safest(card_to_be_played, all_possible_slots){
	var lowest_damage_on_slot = -1;
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		if(possible_slot['maximum_damage_on_spot'] < lowest_damage_on_slot || lowest_damage_on_slot == -1)
		{
			lowest_damage_on_slot = possible_slot['maximum_damage_on_spot'];
		}
	});
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		if(possible_slot['maximum_damage_on_spot'] > lowest_damage_on_slot)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});
	return all_possible_slots;
}

function ai_filter_slots_by_has_adjacent_enemy(card_to_be_played, all_possible_slots, filter, min_adjacent, adjacent_has_strength, find_most, adjacent_has_hp){
	var most_adjacent = 0;
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		if(possible_slot['side'] == undefined){possible_slot['side'] = 2;}
		var found_an_adjacent = 0;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['side'] == 1 && combat_unit['ai_hp'] > 0 &&
				check_units_position(combat_unit, possible_slot, card_to_be_played['attack_type']) == true &&
				(filter == undefined || combat_unit['type'] == filter) &&
				(adjacent_has_strength == undefined || combat_unit['strength'] >= adjacent_has_strength) &&
				(adjacent_has_hp == undefined || combat_unit['hp'] >= adjacent_has_hp) &&
				(combat_unit['damage_reduction'] == undefined || combat_unit['damage_reduction'] < card_to_be_played['strength'] || card_to_be_played['strength'] == false || card_to_be_played['strength'] == 0)
			)
			{
				found_an_adjacent++;
			}
		});
		if(found_an_adjacent == 0 || (min_adjacent != undefined && found_an_adjacent < min_adjacent))
		{
			delete all_possible_slots[possible_slot_id];
		}
		if(found_an_adjacent > most_adjacent)
		{
			most_adjacent = found_an_adjacent;
		}
	});
	if(find_most != undefined && find_most == true)
	{
		$.each(all_possible_slots, function(possible_slot_id, possible_slot){
			var found_an_adjacent = 0;
			$.each(combat_units, function(combat_unit_id, combat_unit){
				if(
					combat_unit['side'] == 1 && combat_unit['ai_hp'] > 0 &&
					check_units_position(possible_slot, combat_unit, card_to_be_played['attack_type']) == true &&
					(filter == undefined || combat_unit['type'] == filter) &&
					(adjacent_has_strength == undefined || combat_unit['strength'] >= adjacent_has_strength) &&
					(adjacent_has_hp == undefined || combat_unit['hp'] >= adjacent_has_hp)
				)
				{
					found_an_adjacent++;
				}
			});
			if(found_an_adjacent == 0 || found_an_adjacent < most_adjacent)
			{
				delete all_possible_slots[possible_slot_id];
			}
		});
	}
	return all_possible_slots;
}

function ai_filter_slots_by_has_no_adjacent_ally(card_to_be_played, all_possible_slots){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['side'] == 2 && combat_unit['ai_hp'] > 0 &&
				check_units_position(combat_unit, possible_slot, 'adjacent') == true
			)
			{
				found_an_adjacent = true;
			}
		});
		if(found_an_adjacent == true)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}

function ai_filter_slots_by_has_adjacent_ally_creature(card_to_be_played, all_possible_slots){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['side'] == 2 && combat_unit['ai_hp'] > 0 && combat_unit['type'] == 'creature' &&
				check_units_position(possible_slot, combat_unit, 'adjacent') == true
			)
			{
				found_an_adjacent = true;
			}
		});
		if(found_an_adjacent == false)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}

function ai_filter_slots_by_has_ally_creature_in_front(card_to_be_played, all_possible_slots_original){
	var all_possible_slots = {};
	$.each(all_possible_slots_original, function(original_slot_id, content){
		all_possible_slots[original_slot_id] = {};
		$.each(content, function(content_key, value){
			all_possible_slots[original_slot_id][content_key] = value;
		});
	});

	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		possible_slot['side'] = 2;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(combat_unit['side'] == 2 && combat_unit['hp'] > 0 && combat_unit['type'] == 'creature')
			{
				var creature_in_front = check_units_position(combat_unit, possible_slot, 'directly_in_front');
				//console.log(combat_unit['name'] + ' directly in front: ' + creature_in_front);
				if(creature_in_front == true)
				{
					found_an_adjacent = true;
				}
			}
			/*if(
				combat_unit['side'] == 2 && combat_unit['ai_hp'] > 0 && combat_unit['type'] == 'creature' &&
				check_units_position(combat_unit, possible_slot, 'directly_in_front') == true
			)
			{
				found_an_adjacent = true;
			}*/
		});
		//console.log('creature in front: ' + found_an_adjacent);

		if(found_an_adjacent == false)
		{
			//console.log(all_possible_slots);
			//console.log('deleting key ' + possible_slot_id);
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}

function ai_filter_slots_by_has_no_adjacent_ally_creature(card_to_be_played, all_possible_slots){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['side'] == 2 && combat_unit['ai_hp'] > 0 && combat_unit['type'] == 'creature' &&
				check_units_position(possible_slot, combat_unit, 'adjacent') == true
			)
			{
				found_an_adjacent = true;
			}
		});
		if(found_an_adjacent == true)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}

function ai_filter_slots_by_has_adjacent_ally_structure(card_to_be_played, all_possible_slots){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['side'] == 2 && combat_unit['ai_hp'] > 0 && combat_unit['type'] == 'structure' &&
				check_units_position(possible_slot, combat_unit, 'adjacent') == true
			)
			{
				found_an_adjacent = true;
			}
		});
		if(found_an_adjacent == false)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}

function ai_filter_slots_by_other_unit_has_no_adjacent_ally(card_to_be_played, all_possible_slots){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				combat_unit['no_adjacent_ally'] != undefined && combat_unit['no_adjacent_ally'] == true && (combat_unit['side'] == 2 || combat_unit['side'] == 0) && combat_unit['ai_hp'] > 0 &&
				check_units_position(possible_slot, combat_unit, 'adjacent') == true
			)
			{
				found_an_adjacent = true;
			}
		});
		if(found_an_adjacent == true)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}


function ai_filter_slots_by_has_no_adjacent_enemy(card_to_be_played, all_possible_slots, filter){
	$.each(all_possible_slots, function(possible_slot_id, possible_slot){
		var found_an_adjacent = false;
		$.each(combat_units, function(combat_unit_id, combat_unit){
			if(
				card_to_be_played['attack_type'] == 'adjacent' && combat_unit['side'] != 2 && combat_unit['ai_hp'] > 0 &&
				check_units_position(possible_slot, combat_unit, 'adjacent') == true &&
				(filter == undefined || combat_unit['type'] == filter)
			)
			{
				found_an_adjacent = true;
			}
		});
		if(found_an_adjacent == true)
		{
			delete all_possible_slots[possible_slot_id];
		}
	});

	return all_possible_slots;
}

function ai_reduce_ai_hp(card_to_be_played,possible_slot){
	var ai_hp_reduced = false;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(
			combat_unit['side'] != 2 && ai_hp_reduced == false && card_to_be_played['strength'] > 0 &&
			check_units_position(possible_slot, combat_unit, card_to_be_played['attack_type']) == true &&
			(card_to_be_played['stunned'] == undefined || card_to_be_played['stunned'] == 0)
		)
		{
			ai_hp_reduced = true;
			var effective_strength = card_to_be_played['ai_strength'] - combat_unit['damage_reduction'];
			if(effective_strength > 0)
			{
				combat_unit['ai_hp'] -= effective_strength;
			}
		}
	});
}

function ai_reduce_enemy_ai_hp(card_to_be_played,possible_slot){
	var ai_hp_reduced = false;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(
			combat_unit['side'] != 1 && ai_hp_reduced == false && card_to_be_played['strength'] > 0 &&
			check_units_position(possible_slot, combat_unit, card_to_be_played['attack_type']) == true
		)
		{
			ai_hp_reduced = true;
			var effective_strength = card_to_be_played['ai_strength'] - combat_unit['damage_reduction'];
			if(effective_strength > 0)
			{
				combat_unit['ai_hp'] -= effective_strength;
			}
		}
	});
}

function ai_find_all_possible_spots(type, side, random, specific_col){
	if(type == 'creature')
	{
		if(side == 0)
		{
			var start_at_col = 2;
			var end_at_col = 4;
		}
		if(side == 1)
		{
			var start_at_col = 2;
			var end_at_col = 3;
		}
		if(side == 2)
		{
			var start_at_col = 3;
			var end_at_col = 4;
		}
		
		if(specific_col != undefined)
		{
			var start_at_col = specific_col;
			var end_at_col = specific_col;
		}
		if(random != undefined && random == true)
		{
			var start_at_col = 2;
			var end_at_col = 4;
		}
		
	}
	else
	{
		if(side == undefined || side == 2)
		{
			var start_at_col = 5;
			var end_at_col = 5;
		}
		if(side != undefined && side == 1)
		{
			var start_at_col = 1;
			var end_at_col = 1;
		}
		if(side != undefined && side != 1 && side != 2)
		{
			return {};
		}
	}
	var all_possible_slots = {};
	var all_possible_slots_id = 0;
	for (var col = start_at_col; col <= end_at_col; col++) {
		for (var row = 1; row <= 3; row++) {
			var slot_taken = false;
			$.each(combat_units, function(combat_unit_id, combat_unit){
				if(combat_unit['col'] == col && combat_unit['row'] == row && combat_unit['max_hp'] != false && combat_unit['hp'] > 0)
				{
					slot_taken = true;
				}
			});

			if(slot_taken == false)
			{
				all_possible_slots[all_possible_slots_id] = {col:col,row:row};
				all_possible_slots_id++;
			}
		};
	};

	/*if(count_object(all_possible_slots) == 0 && specific_col != undefined)
	{
		all_possible_slots = ai_find_all_possible_spots(type, side, random, undefined);
	}*/
	return all_possible_slots;
}

function count_enemy_units(side){
	var total_enemies = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['ai_hp'] > 0)
		{
			total_enemies++;
		}
	});
	return total_enemies;
}

function count_enemy_units_alive(side){
	var total_enemies = 0;
	$.each(combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['hp'] > 0)
		{
			total_enemies++;
		}
	});
	return total_enemies;
}

function count_creatures(side){
	var total_creatures = 0;
	$.each(combat_units, function(unit_id, unit){
		if((side == undefined || unit['side'] == side) && unit['hp'] > 0 && unit['type'] == 'creature')
		{
			total_creatures++;
		}
	});
	return total_creatures;
}

function count_adjacent_friendly_structures(unit){
	var found_adjacent = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(unit['side'] == combat_unit['side'])
		{
			if(
				(
					 	(unit['col'] == combat_unit['col'] && unit['row'] == combat_unit['row'] - 1)
					||	(unit['col'] == combat_unit['col'] && unit['row'] == combat_unit['row'] + 1)
					|| 	(unit['row'] == combat_unit['row'] && unit['col'] == combat_unit['col'] - 1)
					||	(unit['row'] == combat_unit['row'] && unit['col'] == combat_unit['col'] + 1)
				)
				&& combat_unit['type'] == 'structure'
			)
			{
				found_adjacent++;
			}
		}
	});
	return found_adjacent;
};

function count_adjacent_enemy_units(unit){
	var found_adjacent = 0;
	$.each(combat_units, function(combat_unit_id, combat_unit){
		if(unit['side'] != combat_unit['side'])
		{
			if(
				(
					 	(unit['col'] == combat_unit['col'] && unit['row'] == combat_unit['row'] - 1)
					||	(unit['col'] == combat_unit['col'] && unit['row'] == combat_unit['row'] + 1)
					|| 	(unit['row'] == combat_unit['row'] && unit['col'] == combat_unit['col'] - 1)
					||	(unit['row'] == combat_unit['row'] && unit['col'] == combat_unit['col'] + 1)
				)
				&& combat_unit['type'] != 'spell'
			)
			{
				found_adjacent++;
			}
		}
	});
	return found_adjacent;
};

function find_random_empty_structure_slot(has_adjacent, side, place_on_empty_board, no_adjacent_ally, max_hp, move_to_type){
	var free_slots = {};
	var free_slot_count = 0;
	if(side == undefined){
		side = 'any';

	}
	if(side == 2)
	{
		var col_to_check = 5;
	}
	if(side == 1)
	{
		var col_to_check = 1;
	}
	
	for (var row_to_check = 1; row_to_check <= 3; row_to_check++) {
		var slot_free = true;
		$.each(combat_units, function(unit_id, unit){
			if(unit['col'] == col_to_check && unit['row'] == row_to_check)
			{
				slot_free = false;
			}
		});
		if(slot_free == true)
		{
			var good_target = true;
			if(has_adjacent != undefined && has_adjacent == true)
			{
				good_target = false;
				$.each(combat_units, function(combat_unit_id, combat_unit){
					if((side == combat_unit['side'] || side == 'any') && (move_to_type == undefined || move_to_type == combat_unit['type']))
					{
						if(
							 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
							||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
							|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
							||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
						)
						{
							good_target = true;
						}
					}
				});
			}
			if(has_adjacent != undefined && has_adjacent == false)
			{
				good_target = true;
				$.each(combat_units, function(combat_unit_id, combat_unit){
					if((side == combat_unit['side'] || side == 'any' || combat_unit['side'] == 0) && (move_to_type == undefined || move_to_type == combat_unit['type']))
					{
						if(
							 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
							||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
							|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
							||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
						)
						{
							good_target = false;
						}
					}
				});
			}
			if((no_adjacent_ally != undefined && no_adjacent_ally == true) && (move_to_type == undefined || move_to_type == combat_unit['type']))
			{
				$.each(combat_units, function(combat_unit_id, combat_unit){
					if(side != combat_unit['side'] && combat_unit['side'] != 0)
					{
						if(
							 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
							||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
							|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
							||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
						)
						{
							good_target = false;
						}
					}
				});
			}
			if((no_adjacent_ally != undefined && no_adjacent_ally == false) && (move_to_type == undefined || move_to_type == combat_unit['type']))
			{
				var slot_has_adjacent_ally = false;
				$.each(combat_units, function(combat_unit_id, combat_unit){
					if(side != combat_unit['side'] && combat_unit['side'] != 0)
					{
						if(
							 	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] - 1)
							||	(col_to_check == combat_unit['col'] && row_to_check == combat_unit['row'] + 1)
							|| 	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] - 1)
							||	(row_to_check == combat_unit['row'] && col_to_check == combat_unit['col'] + 1)
						)
						{
							slot_has_adjacent_ally = true;
						}
					}
				});
				if(slot_has_adjacent_ally == false)
				{
					good_target = false;
				}
			}
			if(count_enemy_units(side) == 0 && place_on_empty_board == false)
			{
				good_target = false;
			}
			if(count_enemy_units(side) == 0 && place_on_empty_board == true)
			{
				good_target = true;
			}
			if(good_target == true)
			{
				var new_slot_key = get_highest_key_in_object(free_slots) + 1;
				free_slots[new_slot_key] = {col:col_to_check,row:row_to_check};
				free_slot_count++;
			}
		}
	};
	

	if(free_slot_count > 0)
	{
		var chosen_free_slot = Math.floor(Math.random() * free_slot_count) + 1;
		return {col:free_slots[chosen_free_slot]['col'],row:free_slots[chosen_free_slot]['row']};
	}
	else
	{
		return {col:0,row:0};
	}
}

function move_card_to_grave(side, deck_card_id){

	var current_deck = {};

	if(side == 1){current_deck = deck_cards;}
	if(side == 2){current_deck = enemy_deck_cards;}

	if(current_deck[deck_card_id] != undefined)
	{
		current_deck[deck_card_id]['status'] = 'grave';
		current_deck[deck_card_id]['grave_cost'] += 1;
		if(available_cards[current_deck[deck_card_id]['card_id']]['grave_cost_adjustment'] != undefined)
		{
			current_deck[deck_card_id]['grave_cost'] += available_cards[current_deck[deck_card_id]['card_id']]['grave_cost_adjustment'];
			if(current_deck[deck_card_id]['grave_cost'] < 0)
			{
				current_deck[deck_card_id]['grave_cost'] = 0;
			}
		}
	}

	if(side == 1){show_player_hand();}
	if(side == 2){show_enemy_hand();}
}

function move_card_to_deck(side, deck_card_id){

	var current_deck = {};

	if(side == 1){current_deck = deck_cards;}
	if(side == 2){current_deck = enemy_deck_cards;}

	if(current_deck[deck_card_id] != undefined)
	{
		current_deck[deck_card_id]['status'] = 'deck';
	}

	if(side == 1){show_player_hand();}
	if(side == 2){show_enemy_hand();}
}

function move_card_to_hand(side, deck_card_id, go_to_if_full){

	var current_deck = {};
	var drew_card = false;
	var card_side_string = '';

	if(side == 1){current_deck = deck_cards;card_side_string = 'player';}
	if(side == 2){current_deck = enemy_deck_cards;card_side_string = 'enemy';}

	if(current_deck[deck_card_id] != undefined)
	{
		if(count_hand_cards(current_deck) < max_deck_size)
		{
			current_deck[deck_card_id]['status'] = 'hand';
			drew_card = true;

			//console.log('moved to hand!');
			$.each(available_cards[current_deck[deck_card_id]['card_id']]['abilities'], function(useless_key, ability){
				if(ability['proc'] == 'moves_to_hand')
				{
					var original_timeout = total_timeout;
					var temp_card = copyobject(available_cards[current_deck[deck_card_id]['card_id']]);
					temp_card['side'] = side;
					temp_card['original_side'] = side;
					temp_card['side_string'] = card_side_string;
					temp_card['col'] = 0;
					temp_card['row'] = 0;
					temp_card['hp'] = false;
					temp_card['card_key'] = current_deck[deck_card_id]['card_id'];
					temp_card['card_id'] = deck_card_id;
					
					var highest_combat_units_key = get_highest_key_in_object(combat_units);
					var new_combat_unit_id = highest_combat_units_key +1;
					temp_card['unit_id'] = new_combat_unit_id;
					combat_units[new_combat_unit_id] = temp_card;
				    if(process_ability(temp_card, ability, card_side_string, side, combat_units[new_combat_unit_id]) == true)
				    {
				    	console.log('ability fired');
				    	spell_counter++;
						var current_spell = 'spell_' + spell_counter;
						var pased_card = parse_card(current_deck[deck_card_id]['card_id'], 'full', 0, current_spell, undefined, current_deck[deck_card_id]['grave_cost']);
						var show_card_side = '';

						if(side == 1)
						{
							show_card_side = 'card_blocker';
						}
						if(side == 2)
						{
							show_card_side = 'enemy_image';
						}

						setTimeout(function(){		
						    $('.' + show_card_side).append('<div class="spell_cast ' + current_spell + '">' + pased_card + '<div>');
					    },original_timeout);
					    total_timeout += game_speed;
					    setTimeout(function(){	
						$('.' + show_card_side + ' .' + current_spell).css('opacity','0');
					    },total_timeout);
					    setTimeout(function(){
								$('.' + show_card_side + ' .' + current_spell).remove();
						},total_timeout + 1000);
					    total_timeout += 750;
				    }
				    delete combat_units[new_combat_unit_id];
				}
			});
		}
		else
		{
			if(go_to_if_full != undefined && go_to_if_full == 'deck')
			{
				current_deck[deck_card_id]['status'] = 'deck';
			}
			if(go_to_if_full == undefined || go_to_if_full == 'grave')
			{
				move_card_to_grave(side, deck_card_id);
			}
		}
	}

	if(side == 1){show_player_hand();}
	if(side == 2){show_enemy_hand();}

	return drew_card;
}

function add_card(side, card_id, status, grave_cost){

	var current_deck = {};
	if(status == undefined){status = 'hand';}
	if(grave_cost == undefined){grave_cost = 0;}

	if(side == 1){current_deck = deck_cards;}
	if(side == 2){current_deck = enemy_deck_cards;}

	if(count_hand_cards(current_deck) >= max_deck_size && status == 'hand')
	{
		status = 'deck';
	}

	var new_key = get_highest_key_in_object(current_deck) + 1;

	current_deck[new_key] = {card_id:card_id,status:status,grave_cost:grave_cost};

	console.log(current_deck);

	console.log('added ' + card_id + ' to deck');

	if(side == 1){show_player_hand();}
	if(side == 2){show_enemy_hand();}

}