
/*
Combiner:{
  combine:"/deck_edit.js",
  combine:"/campaign.js",
  combine:"/intro.js",
  combine:"/merchant.js",
  combine:"/tinkering.js",
  combine:"/crafting.js",
  combine:"/scrapping.js",
  combine:"/quests.js",
  combine:"/arena.js",
  combine:"/town.js",
  combine:"/daily_reward.js",
  combine:"/inventory.js",
  combine:"/raids.js",
  combine:"/collection.js",
  combine:"/card_backs.js",
  combine:"/factions.js",
  combine:"/journal.js",
  combine:"/map.js",
  combine:"/summon.js",
  combine:"/floating_text.js",
  combine:"/process_turn.js",
  combine:"/battle.js",

  output:"/all_scripts.js"
}
*/

var current_page = 1;
var cards_per_page = 8;
var showing_heroes = false;
var max_deck_size 	= 30;
var edit_mode = 'view';

function show_deck_edit(){
	show_available_cards(showing_heroes);
	show_current_deck();
	update_edit_view_slider();
};

function show_available_cards(heroes_only){

	if(gamedata['edit_mode'] != undefined)
	{
		edit_mode = gamedata['edit_mode'];
	}

	cards_per_page = 8;
	
	if(heroes_only == true || showing_heroes == true)
	{
		$('.hero_mode').addClass('active');
	}
	else
	{
		$('.hero_mode').removeClass('active');
	}

	if(heroes_only == true || showing_heroes == true)
	{
		$('#content_deck_edit .current_hero').addClass('glowing_hero');
	}
	else
	{
		$('#content_deck_edit .current_hero').removeClass('glowing_hero');
	}

	gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
	$('#content_deck_edit .available_cards').html('');
	var current_card_number = 0;

	if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
	var current_deck = gamedata['decks'][gamedata['current_deck']];

	$.each(current_deck, function(card_id, card_count){
		if(card_count < 1)
		{
			delete current_deck[card_id];
		}
	});

	if(gamedata['owned_cards'][gamedata['decks'][gamedata['current_deck']]['hero']] < 1)
	{
		delete gamedata['decks'][gamedata['current_deck']]['hero'];
	}

	gamedata['decks'][gamedata['current_deck']] = sortObj(gamedata['decks'][gamedata['current_deck']]);

	if(all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']] != undefined)
	{
		var deck_color = all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][0];
	}
	else
	{
		var deck_color = 'colorless';
	}
	if(deck_color == 'colorless')
	{
		deck_color = get_second_deck_color();
	}
	if(all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']] != undefined && all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][1] != undefined)
	{
		var second_deck_color = all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][1];
	}
	else
	{
		var second_deck_color = get_second_deck_color(deck_color);
	}
	

	$.each(gamedata['owned_cards'], function(card_id, owned_amount){
		var effective_owned_amount = owned_amount + 0;
		if(current_deck[card_id] != undefined){effective_owned_amount -= current_deck[card_id];}
		if(current_deck['hero'] != undefined && current_deck['hero'] == card_id){effective_owned_amount -= 1;}
		if(effective_owned_amount < 0)
		{
			current_deck[card_id] += effective_owned_amount;
			gamedata['decks'][gamedata['current_deck']][card_id] = current_deck[card_id];
			if(current_deck[card_id] == 0)
			{
				delete gamedata['decks'][gamedata['current_deck']][card_id];
			}
			if(current_deck[card_id] < 0)
			{
				delete gamedata['decks'][gamedata['current_deck']][card_id];
				delete gamedata['decks'][gamedata['current_deck']]['hero'];
			}
			saveToLocalStorage();
		}
		var card_filtered = false;
		var wrong_color = false;

		if(all_available_cards[card_id]['type'] == 'boost' || all_available_cards[card_id]['type'] == 'recipe' || all_available_cards[card_id]['type'] == 'fragment' || all_available_cards[card_id]['type'] == 'material' || all_available_cards[card_id]['type'] == 'consumable' || all_available_cards[card_id]['type'] == 'token' || all_available_cards[card_id]['type'] == 'currency' || all_available_cards[card_id]['type'] == 'cardback' || all_available_cards[card_id]['type'] == 'item' || all_available_cards[card_id]['type'] == 'treasure' || $('.' + all_available_cards[card_id]['type'] + '_type_filter').prop("checked") == false)
		{
			card_filtered = true;
		}

		if(heroes_only == undefined || heroes_only == false)
		{
			if(second_deck_color == false && all_available_cards[card_id]['color'][0] != deck_color && all_available_cards[card_id]['color'][1] != undefined && all_available_cards[card_id]['color'][1] != deck_color)
			{
				wrong_color = true;
			}
		
			$.each(all_available_cards[card_id]['color'], function(useless_key, color){
				if(color != deck_color && second_deck_color != false && color != second_deck_color && color != 'colorless')
				{
					wrong_color = true;
				}
			});
		}
		
		
		if(effective_owned_amount > 0 && ((heroes_only == undefined || heroes_only == false) || all_available_cards[card_id]['hero_version'] != undefined) && card_filtered == false && check_filters(card_id, heroes_only) == false)
		{
			current_card_number ++;
			if(current_card_number / cards_per_page > current_page -1 && current_card_number / cards_per_page <= current_page)
			{
				
				if(heroes_only != undefined && heroes_only == true)
				{
					var parsed_card = parse_card(card_id, undefined, true);
					$('#content_deck_edit .available_cards').append('<div class="available_card_container" onclick="set_hero(\'' + card_id + '\')">' + parsed_card + '</div>');
				}
				else
				{
					var parsed_card = parse_card(card_id, effective_owned_amount);
					if(wrong_color == true)
					{
						$('#content_deck_edit .available_cards').append('<div onclick="show_card_details(\'' + card_id + '\')" class="available_card_container faded">' + parsed_card + '</div>');
					}
					else
					{
						$('#content_deck_edit .available_cards').append('<div onclick="add_card_to_deck(\'' + card_id + '\')" class="available_card_container">' + parsed_card + '</div>');
					}
					
				}
			}
		}
	});
	if(current_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / cards_per_page <= current_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(current_card_number > 0 && $('#content_deck_edit .available_cards').html() == '')
	{
		current_page = 1;
		show_available_cards(heroes_only);
	}
	if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
	$('.page_selection .page_number').html(current_page + ' / ' + Math.ceil(current_card_number / cards_per_page));

	$('.current_deck_colors').html('');
	var parsed_deck_colors = '';
	parsed_deck_colors +=  	'<div class="deck_color color_' + deck_color + '"></div>';
	parsed_deck_colors +=  	'<div class="deck_color color_' + second_deck_color + '"></div>';
	$('.current_deck_colors').html(parsed_deck_colors);
	if(gamedata['decks'][gamedata['current_deck']]['hero'] == undefined && (heroes_only == undefined || heroes_only == false))
	{
		show_available_cards(true);
	}
}

function get_second_deck_color(deck_color){
	var second_deck_color = false;
	if(deck_color == undefined)
	{
		deck_color = false;
		if(all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']] != undefined)
		{
			deck_color = all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][0];
		}
	}

	if(all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']] != undefined && all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][1] != undefined)
	{
		second_deck_color = all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][1];
	}
	else
	{
		var current_deck = gamedata['decks'][gamedata['current_deck']];
		$.each(current_deck, function(card_id, amount){
			if(all_available_cards[card_id] != undefined)
			{
				$.each(all_available_cards[card_id]['color'], function(useless_key, color){
					if(second_deck_color == false && color != 'colorless' && color != deck_color)
					{
						second_deck_color = color;
					}
				});
			}
		});
	}

	return second_deck_color;
}

function show_available_heroes(){
	if(showing_heroes == true)
	{
		showing_heroes = false;
	}
	else
	{
		showing_heroes = true;
	}
	show_available_cards(showing_heroes);
}

function show_current_hero_details(){
	if(edit_mode == 'view' && false)
	{
		if(gamedata['decks'][gamedata['current_deck']]['hero'] != undefined)
		{
			show_card_details(gamedata['decks'][gamedata['current_deck']]['hero'], true);
		}
	}
	else
	{
		show_available_heroes();
	}
}

function show_current_deck(){
	if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
	var current_deck = gamedata['decks'][gamedata['current_deck']];

	$('#content_deck_edit .current_deck').html('');
	$('#content_deck_edit .current_hero').html('');

	if(all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']] != undefined)
	{
		var deck_color = all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][0];
	}
	else
	{
		var deck_color = 'colorless';
	}
	if(deck_color == 'colorless')
	{
		deck_color = get_second_deck_color();
	}
	if(all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']] != undefined && all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][1] != undefined)
	{
		var second_deck_color = all_available_cards[gamedata['decks'][gamedata['current_deck']]['hero']]['color'][1];
	}
	else
	{
		var second_deck_color = get_second_deck_color(deck_color);
	}

	$.each(current_deck, function(card_id, amount){
		if(card_id == 'hero')
		{
			var parsed_card = parse_card(amount, undefined, true);
			$('#content_deck_edit .current_hero').append('<div>' + parsed_card + '</div>');
		}
		if(card_id != 'hero' && amount > 0){
			if(all_available_cards[card_id] == undefined || (all_available_cards[card_id]['color'][0] != 'colorless' && all_available_cards[card_id]['color'][0] != deck_color && all_available_cards[card_id]['color'][0] != second_deck_color) || (all_available_cards[card_id]['color'][1] != undefined && all_available_cards[card_id]['color'][1] != deck_color && all_available_cards[card_id]['color'][1] != second_deck_color))
			{
				delete current_deck[card_id];
				saveToLocalStorage();
			} 
			else
			{
				var parsed_card = parse_card(card_id, amount);
				var card_filtered = check_filters(card_id);
				$('#content_deck_edit .current_deck').append('<div onclick="remove_card_from_deck(\'' + card_id + '\')" class="filtered_' + card_filtered + '">' + parsed_card + '</div>');
			}
		}
	});
	var deck_card_count = count_current_deck_cards(current_deck);
	var deck_fill = (deck_card_count / max_deck_size) * 100;
	if(deck_card_count < max_deck_size)
	{
		$('.card_count').html('<div class="fill_bar" style="height:' + deck_fill + '%;"></div><span><br/>' + deck_card_count + '<br/><span style="color:#555">' + max_deck_size + '</span></span>');
	}
	else
	{
		$('.card_count').html('<div class="fill_bar" style="height:' + deck_fill + '%;"></div><span style="color:#555"><br/>' + deck_card_count + '<br/>' + max_deck_size + '</span>');
	}
}

function parse_card(card_id, show_owned, hero_version, alt_name){
	if(card_id == 'scraps'){card_id = 'scraps_placeholder';}
	var parsed_card = '';
	if(all_available_cards[card_id] != undefined)
	{
		var current_card = all_available_cards[card_id];
		if(hero_version != undefined && hero_version == true)
		{
			current_card = current_card['hero_version'];
			current_card['color'] = all_available_cards[card_id]['color'];
		}

		parsed_card += 	'<div class="card card_type_' + current_card['type'] + '">';
		if(count_object(current_card['color']) > 1)
		{
			$.each(current_card['color'], function(useless_key, color){
				parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
			});
		}
		else
		{
			parsed_card += 	'<div class="card_color color_' + current_card['color'][0] + '"></div>';
		}
		var image_position = '';
		if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
		parsed_card += 		'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';
		var all_parsed_abilities = '';
		$.each(current_card['abilities'], function(ability_key, amount){
			if(((ability_key != 'strike' || hero_version == true) && (ability_key != 'strike_unit' || hero_version != true)) || amount != 1)
			{
				if(all_parsed_abilities != ''){all_parsed_abilities += ',&nbsp;</span>';}
				if(all_abilities[ability_key] != undefined)
				{
					var temp_amount = amount;
					var starting_delay = 0;
					if(typeof(temp_amount) == 'object')
					{
						var temp_amount = amount['level'];
						if(amount['delay'] != undefined)
						{
							starting_delay = amount['delay'] -0;
						}
					}
					var current_ability = all_abilities[ability_key];
					all_parsed_abilities += '<span style="color:' + current_ability['name_color'] + '">';
					all_parsed_abilities +=		current_ability['name'];
					/*if(current_ability['show_amount'] == true)*/
					if(temp_amount > 1 || current_ability['show_amount_adjustment'] != undefined || amount['level_2'] != undefined)	
						{
							if(current_ability['show_amount_adjustment'] != undefined)
							{
								temp_amount += current_ability['show_amount_adjustment'];
							}
							all_parsed_abilities +=		' ' + temp_amount;
							if(current_ability['post_name'] != undefined)
							{
								all_parsed_abilities +=		current_ability['post_name'];
							}
						}
					if(amount['level_2'] != undefined && amount['level_2'] > 1)
					{
						all_parsed_abilities +=		'/' + amount['level_2'];
					}
					if(starting_delay > 0 && amount['delay'] == undefined)
					{
						all_parsed_abilities +=		' (' + starting_delay + ')';
					}
					if(amount['delay'] != undefined && amount['delay'] > 0)
					{
						all_parsed_abilities +=		' (' + (amount['delay'] -0) + ')';
					}
					
					//all_parsed_abilities += '</span>';
				}
			}
		});
		if(current_card['type'] == 'cardback' && current_card['reward'] != undefined && current_card['reward']['type'] != undefined && current_card['reward']['type'] == 'card_back' && gamedata['owned_card_backs'] != undefined && gamedata['owned_card_backs'][card_id] != undefined)
		{
			all_parsed_abilities += '<span style="color:rgba(0,200,0,0.9)">collected</span>';
		}
		if(current_card['type'] == 'cardback' && current_card['reward'] != undefined && current_card['reward']['type'] != undefined && current_card['reward']['type'] == 'card_back' && (gamedata['owned_card_backs'] == undefined || gamedata['owned_card_backs'][card_id] == undefined))
		{
			all_parsed_abilities += '<span style="color:rgba(255,0,0,0.9)">not collected</span>';
		}
		if(current_card['type'] == 'fragment' && owned_buildings_fragments[card_id] != undefined)
		{
			all_parsed_abilities += '<span style="color:rgba(255,255,255,0.9)">built,</span> ';
			var upgrade_cost = calculate_upgrade_cost(owned_buildings_fragments[card_id]['building_level']);
			var temp_owned = 0;
			if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
			{
				temp_owned = gamedata['owned_cards'][card_id];
			}
			if(temp_owned >= upgrade_cost)
			{
				all_parsed_abilities += '<span style="color:rgba(0,200,0,0.9)">' + temp_owned + ' / ' + upgrade_cost + '</span>';
			}
			else
			{
				all_parsed_abilities += '<span style="color:rgba(255,255,255,0.9)">' + temp_owned + ' / ' + upgrade_cost + '</span>';
			}
			
		}
		if(current_card['type'] == 'fragment' && owned_buildings_fragments[card_id] == undefined)
		{
			all_parsed_abilities += '<span style="color:rgba(255,0,0,0.9)">not built</span>';
		}
		
		if(all_parsed_abilities != ''){all_parsed_abilities += '</span>';}
		parsed_card += 	'<div class="card_abilities"><div class="card_type">' + current_card['type'] + '</div>' + all_parsed_abilities + '</div>';
		if(current_card['time'] != undefined && current_card['time'] != false)
		{
			parsed_card += 		'<div class="card_time">' + current_card['time'] + '</div>';
		}
		if(current_card['type'] == 'cardback' && current_card['reward'] != undefined && current_card['reward']['type'] != undefined && current_card['reward']['type'] == 'card_back')
		{
			parsed_card += 		'<div class="card_name">Card back</div>';
		}
		else
		{
			var longest_word = findLongestWord(current_card['name']);
			var card_name_size = 20;
			if(longest_word > 8)
			{
				card_name_size *= (8 / longest_word);
			}
			card_name_size += 'px';
			if(alt_name == undefined)
			{
				parsed_card += 		'<div class="card_name" style="font-size:' + card_name_size + ';">' + capitalizeFirstLetter(current_card['name']) + '</div>';
			}
			else
			{
				parsed_card += 		'<div class="card_name" style="font-size:' + card_name_size + ';">' + capitalizeFirstLetter(alt_name) + '</div>';
			}
		}
		if(show_owned != undefined)
		{
			parsed_card += 		'<div class="owned_amount">' + show_owned + '</div>';
		}
		if(current_card['power'] !== false)
		{
			parsed_card += 		'<div class="card_power">' + current_card['power'] + '</div>';
		}
		if(current_card['health'] != false)
		{
			parsed_card += 		'<div class="card_health">' + current_card['health'] + '</div>';
		}
		if(current_card['armor'] > 0)
		{
			parsed_card += 		'<div class="card_armor">' + current_card['armor'] + '</div>';
		}
		parsed_card += 	'<div class="unit_effects">';
		$.each(current_card['effects'], function(effect_key, amount){
			parsed_card += 	'<div class="effect_' + effect_key + '">' + amount + '</div>';
		});
		parsed_card += 	'</div>';
		if(current_card['shiny'] != undefined && current_card['shiny'] == true)
		{
			parsed_card += '<div class="shiny"></div>';
		}
		parsed_card += 	'</div>';
	}
	return parsed_card;
}

function set_deck_edit_page(amount){
	current_page += amount;
	if(current_page < 1){current_page = 1;}
	show_deck_edit();
}

function add_card_to_deck(card_id, forced){
	if(edit_mode == 'edit' || forced == true)
	{
		if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
		var current_deck = gamedata['decks'][gamedata['current_deck']];
		if(current_deck[card_id] == undefined){current_deck[card_id] = 0;}
		//count_current_deck_cards(current_deck);
		if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > current_deck[card_id] && count_current_deck_cards(current_deck) < max_deck_size && ((current_deck[card_id] < 5 && all_available_cards[card_id]['unique'] == undefined) || (current_deck[card_id] < 1 && current_deck['hero'] != card_id)))
		{
			current_deck[card_id]++;
		}
		saveToLocalStorage();
		show_deck_edit();
	}
	else
	{
		if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
		var current_deck = gamedata['decks'][gamedata['current_deck']];
		var not_too_many = true;
		if(current_deck[card_id] == undefined){current_deck[card_id] = 0;}
		if(current_deck[card_id] >= 5){not_too_many = false;}
		if(all_available_cards[card_id]['unique'] != undefined && current_deck[card_id] > 0){not_too_many = false;}
		if(all_available_cards[card_id]['unique'] != undefined && current_deck['hero'] == card_id){not_too_many = false;}
		//count_current_deck_cards(current_deck);
		if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > current_deck[card_id] && count_current_deck_cards(current_deck) < max_deck_size && not_too_many == true)
		{
			show_card_details(card_id, false, undefined, 'add_to_deck');
		}
		else
		{
			show_card_details(card_id, false, undefined, false);
		}
		
	}
}

function count_current_deck_cards(deck){
	var card_count = 0;
	$.each(deck, function(card_id, card_amount){
		if(card_id != 'hero')
		{
			card_count += card_amount;
		}
	});
	return card_count;
}

function clear_current_deck(){
	gamedata['decks'][gamedata['current_deck']] = {};
	saveToLocalStorage();
	show_deck_edit();
}

function remove_card_from_deck(card_id, forced){
	if(edit_mode == 'edit' || forced == true)
	{
		if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
		var current_deck = gamedata['decks'][gamedata['current_deck']];
		if(current_deck[card_id] == undefined){current_deck[card_id] = 0;}
		if(gamedata['owned_cards'][card_id] != undefined && current_deck[card_id] > 0)
		{
			current_deck[card_id]--;
		}
		if(current_deck[card_id] == 0)
		{
			delete current_deck[card_id];
		}
		saveToLocalStorage();
		show_deck_edit();
	}
	else
	{
		if(showing_heroes == false || all_available_cards[card_id]['hero_version'] == undefined)
		{
			show_card_details(card_id, showing_heroes, undefined, 'remove_from_deck');
		}
		else
		{
			show_card_details(card_id, showing_heroes, undefined, 'set_hero');
		}
	}
}

function set_hero(card_id, forced){
	if(edit_mode == 'edit' || forced == true)
	{
		if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
		var current_deck = gamedata['decks'][gamedata['current_deck']];
		if(current_deck[card_id] == undefined){current_deck[card_id] = 0;}
		if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > current_deck[card_id])
		{
			current_deck['hero'] = card_id;
			if(all_available_cards[card_id]['unique'] != undefined && current_deck[card_id] != undefined){remove_card_from_deck(card_id, true);}
		}
		else
		{
			if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
			{
				current_deck['hero'] = card_id;
				if(all_available_cards[card_id]['unique'] != undefined && current_deck[card_id] != undefined){remove_card_from_deck(card_id, true);}
			}
		}
		//showing_heroes = false;
		//check_hero_color();
		saveToLocalStorage();
		show_deck_edit();
	}
	else
	{
		show_card_details(card_id, true, undefined, 'set_hero');
	}
}

function check_hero_color(){
	if(gamedata['decks'][gamedata['current_deck']] == undefined){gamedata['current_deck'] = 0;}
	var current_deck = gamedata['decks'][gamedata['current_deck']];
	var current_color = all_available_cards[current_deck['hero']]['color'][0];
	var second_deck_color = get_second_deck_color();
	$.each(current_deck, function(card_id, amount){
		if(card_id != 'hero' && all_available_cards[card_id]['color'][0] != 'colorless' && all_available_cards[card_id]['color'][0] != current_color && all_available_cards[card_id]['color'][0] != second_deck_color)
		{
			delete current_deck[card_id];
		}
		if(card_id != 'hero' && all_available_cards[card_id]['color'][1] != undefined && all_available_cards[card_id]['color'][1] != 'colorless' && all_available_cards[card_id]['color'][1] != current_color && all_available_cards[card_id]['color'][1] != second_deck_color)
		{
			delete current_deck[card_id];
		}
	});
}

function gain_random_card(){
	var card_id = get_random_card('any');

	if(gamedata['owned_cards'][card_id] == undefined)
	{
		gamedata['owned_cards'][card_id] = 1;
	}
	else
	{
		gamedata['owned_cards'][card_id] += 1;
	}

	saveToLocalStorage();
}

function gain_all_cards(amount){
	if(amount == undefined){amount = 1;}
	$.each(all_available_cards, function(card_id, card){
		if(namechanges[card_id] == undefined)
		{
			if(gamedata['owned_cards'][card_id] == undefined)
			{
				gamedata['owned_cards'][card_id] = amount;
			}
			else
			{
				if(gamedata['owned_cards'][card_id] < amount)
				{
					gamedata['owned_cards'][card_id] = amount;
				}
				
			}
		}
	});
	saveToLocalStorage();
}

function gain_card(card_id, amount){

	if(amount == undefined){amount = 1;}

	if(card_id != 'scrap' && all_available_cards[card_id] != undefined)
	{
		if(gamedata['owned_cards'][card_id] == undefined)
		{
			gamedata['owned_cards'][card_id] = amount;
		}
		else
		{
			gamedata['owned_cards'][card_id] += amount;
		}
		if(amount > 0)
		{
			check_quests('gained_card_' + card_id, undefined, amount);
		}
	}
	if(card_id == 'scrap')
	{
		gain_scraps(amount);
	}

	saveToLocalStorage();
}

function count_card_colors(min_pick_chance){
	if(min_pick_chance == undefined){min_pick_chance = 0;}
	var counted_colors = {};
	var counted_color_times = {};
	var average_color_times = {};
	$.each(all_available_cards, function(card_id, card){
		if(card['pick_chance'] != undefined && card['pick_chance'] >= min_pick_chance && (card['type'] == 'creature' || card['type'] == 'structure' || card['type'] == 'object' || card['type'] == 'spell' || card['type'] == 'artifact'))
		{
			$.each(card['color'], function(useless_key, card_color){
				if(counted_colors[card_color] == undefined)
				{
					counted_colors[card_color] = 1;
					counted_color_times[card_color] = {};
				}
				else
				{
					counted_colors[card_color] += 1;
				}
				if(average_color_times[card_color] == undefined){average_color_times[card_color] = 0;}
				average_color_times[card_color] += card['time'];
				if(counted_color_times[card_color][card['time']] == undefined)
				{
					counted_color_times[card_color][card['time']] = 0;
				}
				counted_color_times[card_color][card['time']]++;
			});
			if(count_object(card['color']) > 1)
			{
				var card_color = card['color'];
				if(counted_colors[card_color] == undefined && counted_colors[card['color'][1] + ',' + card['color'][0]] == undefined)
				{
					counted_colors[card_color] = 1;
				}
				else
				{
					if(counted_colors[card['color'][1] + ',' + card['color'][0]] != undefined)
					{
						counted_colors[card['color'][1] + ',' + card['color'][0]] += 1;
						console.log(card_id);
					}
					else
					{
						counted_colors[card_color] += 1;
					}
					
				}
			}
		}
	});
	counted_colors = sortObj(counted_colors, 'value');
	$.each(counted_colors, function(color, count){
		console.log(color + ': ' + count);
	});
	console.log(counted_color_times);
	$.each(average_color_times, function(color,total_time){
		//average_color_times[color] = total_time / counted_colors[color];
		console.log(color + ' a.t.: ' + (Math.floor((total_time / counted_colors[color]) * 10)) / 10);
	});
	
	
}

function check_card_recipes(ingredients){
	var recipes = {};
	$.each(ingredients, function(ingredient_id, ingredient){
		if(count_object(recipes) == 0)
		{
			$.each(all_available_cards, function(card_id, card){
				if(card['recipe'] != undefined && card['recipe'][ingredient] != undefined)
				{
					recipes[card_id] = card['recipe'];
				}
			});
		}
		else
		{
			$.each(recipes, function(recipe_id, recipe){
				if(all_available_cards[recipe_id]['recipe'] != undefined && all_available_cards[recipe_id]['recipe'][ingredient] == undefined)
				{
					delete recipes[recipe_id];
				}
			});
		}
	});

	return recipes;
}

function select_mode(new_mode){
	edit_mode = new_mode;

	$('.edit_view div').removeClass('active');
	$('.edit_view .select_' + new_mode).addClass('active');
}

function toggle_edit_view_mode(){
	if(gamedata['edit_mode'] == undefined){
		gamedata['edit_mode'] = 'view';
	}
	edit_mode = gamedata['edit_mode'];

	if(edit_mode == 'edit')
	{
		edit_mode = 'view';
	}
	else
	{
		edit_mode = 'edit'
	}

	gamedata['edit_mode'] = edit_mode;
	saveToLocalStorage();
	update_edit_view_slider();
}

function update_edit_view_slider(){
	$('.edit_view div').removeClass('active');
	//console.log(edit_mode);
	if(edit_mode == 'view')
	{	
		$('.edit_view .edit_view_slider').addClass('viewing');
		$('.edit_view .select_view').addClass('active');
	}
	else
	{
		$('.edit_view .edit_view_slider').removeClass('viewing');
		$('.edit_view .select_edit').addClass('active');
	}
}

function show_card_details(card_id, hero_version, amount, added_button, combat_version){

	if(all_available_cards[card_id] != undefined || all_chapters[card_id] != undefined)
	{
		var current_card = all_available_cards[card_id];

		if(all_chapters[card_id] != undefined)
		{
			current_card = all_chapters[card_id]['hero'];
		}



		$('.detail_overlay .card_detail').html('');
		
		if(hero_version != undefined && hero_version == true && current_card['hero_version'] == undefined)
		{
			hero_version = false;
		}

		if(combat_version != undefined && battle_info['combat_units'][combat_version] != undefined)
		{
			//console.log('ding');
			current_card = battle_info['combat_units'][combat_version];
			hero_version = false;
		}
		var parsed_card_details = '';

		var parsed_card = '';
		if(all_available_cards[card_id] != undefined && (combat_version == undefined || battle_info['combat_units'][combat_version] == undefined))
		{
			parsed_card = parse_card(card_id, amount, hero_version);
		}
		else
		{
			parsed_card = '<div class="unit">' + $('.unit_id_' + combat_version).html() + '</div>';
		}
		parsed_card_details += 		'<div class="available_cards">';
		parsed_card_details += 			parsed_card;
		parsed_card_details += 		'</div>';
		if(current_card['quote'] != undefined)
		{
			parsed_card_details += 		'<div class="card_quote">';
			parsed_card_details += 				current_card['quote'].split("\"").join('<span class="card_quote_quote">\"</span>');
			parsed_card_details += 		'</div>';
		}
		if(current_card['value'] != undefined && current_card['value'] > 0 && all_available_cards[card_id]['type'] != 'currency' && all_available_cards[card_id]['type'] != 'recipe')
		{
			//parsed_card_details += 		'<div class="card_value">';
			parsed_card_details += 		'<div class="card_value">Value: ';
			parsed_card_details += 				numberWithCommas(current_card['value']);
			/*if(current_card['value'] == 1)
			{
				parsed_card_details += 		' scrap';
			}
			else
			{
				parsed_card_details += 		' scraps';
			}*/
			if(current_card['recipe'] != undefined && current_card['type'] != 'recipe')
			{
				if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][card_id] != undefined)
				{
					parsed_card_details += 		'<br/>Recipe known';
				}
				else
				{
					parsed_card_details += 		'<br/>Recipe not known';
				}
			}
			if(current_card['used_in_recipes'] == 1)
			{
				parsed_card_details += 		'<br/>Used in 1 recipe';
			}
			if(current_card['used_in_recipes'] > 1)
			{
				parsed_card_details += 		'<br/>Used in ' + current_card['used_in_recipes'] + ' recipes';
			}

			if(gamedata['owned_cards'][card_id] != undefined)
			{
				parsed_card_details += 		'<br/>Owned: ' + Math.floor(gamedata['owned_cards'][card_id]) + '';
			}
			if(all_available_cards[card_id] != undefined && (combat_version == undefined || battle_info['combat_units'][combat_version] == undefined))
			{
				if(all_available_cards[card_id]['type'] == 'consumable' && all_available_cards[card_id]['reward'] != undefined && all_available_cards[card_id]['reward']['type'] != undefined && all_available_cards[card_id]['reward']['type'] == 'card_back')
				{
					if(gamedata['owned_card_backs'][all_available_cards[card_id]['reward']['card_back_id']] == undefined)
					{
						parsed_card_details += 		'<br/>Not collected';
					}
					else
					{
						parsed_card_details += 		'<br/>Collected';
					}
				}
			}
			
			parsed_card_details += 		'</div>'
		}
		parsed_card_details += 		'<div class="ability_details">';

		parsed_card_details += 			'<div class="single_ability">';
		parsed_card_details += 				'<span class="single_ability_name">' + capitalizeFirstLetter(current_card['name']) + '</span>';
		parsed_card_details += 				'<span class="single_ability_description">';
		$.each(current_card['subtypes'], function(subtype_key, subtype){
			if(subtype_key > 0){parsed_card_details += ', ';}
			parsed_card_details += 				subtype.replace('_',' ');
		});
		parsed_card_details += '</span>';
		parsed_card_details += 				'<span class="single_ability_name">' + current_card['type'] + '</span>';
		parsed_card_details += 				'<span class="single_ability_description">';
		if(current_card['type'] == 'creature' || current_card['type'] == 'structure' || current_card['type'] == 'object'){
			parsed_card_details += 'Unit. Stays on the board until destroyed. ';
		}
		if(current_card['type'] == 'creature'){parsed_card_details += 'The basic unit type.';}
		if(current_card['type'] == 'structure'){parsed_card_details += 'Cannot be healed, but can be repaired. Is immune to being moved or poisoned and all mental abilities.';}
		if(current_card['type'] == 'object'){parsed_card_details += 'Cannot be healed and is immune to being moved or poisoned and all mental abilities.';}
		if(current_card['type'] == 'artifact'){parsed_card_details += 'Attaches to your hero. There is a maximum of 5 active artifacts. Stays in game until destroyed or until it has no active abilities.';}
		if(current_card['type'] == 'spell' || current_card['type'] == 'attack'){
			parsed_card_details += 'Action card. Effects fire once. ';
		}
		if(current_card['type'] == 'token'){parsed_card_details += 'Not used in battles.';}
		if(current_card['type'] == 'currency'){parsed_card_details += 'Not used in battles.';}
		if(current_card['type'] == 'fragment'){parsed_card_details += 'Not used in battles. Can be used to construct buildings in your town.<br/><br/>';
			var frag_description = '';
			$.each(all_buildings, function(building_id, building_info){
				if(building_info['fragment_id'] == card_id)
				{
					frag_description = building_info['description'];
				}
			});
			parsed_card_details += 			frag_description;
		}
		if(current_card['type'] == 'consumable'){parsed_card_details += 'Use this from your inventory under rewards.<br/><br/>';
			var frag_description = '';
			if(all_available_cards[card_id]['reward'] != undefined && all_available_cards[card_id]['reward']['description'] != undefined)
			{
				frag_description = all_available_cards[card_id]['reward']['description'];
			}
			parsed_card_details += 			frag_description;
		}
		if(current_card['type'] == 'spell'){parsed_card_details += '';}
		if(current_card['type'] == 'artifact'){parsed_card_details += '';}
		if(current_card['type'] == 'attack'){parsed_card_details += '';}
		parsed_card_details += 				'</span>';
		parsed_card_details += 			'</div>';
		if(current_card['description'] != undefined)
		{
			parsed_card_details += 			'<div class="single_ability">';
			parsed_card_details += 				'<span class="single_ability_description">';
			parsed_card_details += 				current_card['description'];
			parsed_card_details += 				'</span>';
			parsed_card_details += 			'</div>';
		}

		var abilities_to_check = current_card['abilities'];
		if(hero_version != undefined && hero_version == true && current_card['hero_version'] != undefined)
		{
			abilities_to_check = current_card['hero_version']['abilities'];
		}
		if(combat_version != undefined && battle_info['combat_units'][combat_version] != undefined)
		{
			abilities_to_check = battle_info['combat_units'][combat_version]['abilities'];
		}

		$.each(abilities_to_check, function(ability_key, ability_level){
			var current_ability = all_abilities[ability_key];
			var temp_amount = ability_level;
			var starting_delay = 0;
			if(typeof(temp_amount) == 'object')
			{
				var temp_amount = ability_level['level'];
				var starting_delay = 0;
				if(typeof(ability_level) == 'object')
				{
					var temp_amount = ability_level['level'];
					if(ability_level['starting_delay'] != undefined)
					{
						starting_delay = ability_level['starting_delay'] - 0;
					}
				}
			}
			parsed_card_details += 		'<div class="single_ability">';
			parsed_card_details += 			'<span class="single_ability_name" style="color:' + current_ability['name_color'] + '">';
			parsed_card_details += 				current_ability['name'];
				/*if(current_ability['show_amount'] == true)*/
				if(temp_amount > 1 || current_ability['show_amount_adjustment'] != undefined || ability_level['level_2'] != undefined)
				{
					if(current_ability['show_amount_adjustment'] != undefined)
					{
						temp_amount += current_ability['show_amount_adjustment'];
					}
					
					parsed_card_details +=		' ' + temp_amount;
					if(current_ability['post_name'] != undefined)
					{
						parsed_card_details +=		current_ability['post_name'];
					}
				}
				if(ability_level['level_2'] != undefined && ability_level['level_2'] > 1)
				{
					parsed_card_details +=		'/' + ability_level['level_2'];
				}
				if(starting_delay > 0)
				{
					parsed_card_details +=		' (' + starting_delay + ')';
				}
			
			parsed_card_details += 			'</span>';
			var temp_description = '-';
			var temp_ability_level = ability_level + 0;
			if(typeof(ability_level) == 'object')
			{
				temp_ability_level = ability_level['level'] + 0;

			}
			if(current_ability['show_amount_adjustment'] != undefined)
			{
				temp_ability_level += current_ability['show_amount_adjustment'];
			}
			if(current_ability['description'] != undefined){temp_description = current_ability['description'];}	
			temp_description = check_plural(temp_description.split("{LEVEL}").join(temp_ability_level), temp_ability_level);
			if(ability_level['level_2'] != undefined)
			{
				temp_description = temp_description.split("{LEVEL2}").join(ability_level['level_2']);
			}
			else
			{
				temp_description = temp_description.split("{LEVEL2}").join('1');
			}

			parsed_card_details += 			'<span class="single_ability_description">';
			parsed_card_details += 			temp_description;
			if(ability_level['additional_text'] != undefined)
			{
				parsed_card_details +=		' ' + ability_level['additional_text'];
			}
			parsed_card_details += 			'</span>';
			
			parsed_card_details += 		'</div>';
		});

		/*var stats_to_check = current_card;
		if(hero_version != undefined && hero_version == true && current_card['hero_version'] != undefined)
		{
			stats_to_check = current_card['hero_version'];
		}
		if(typeof(stats_to_check['power']) == 'number')
		{
			parsed_card_details += 		'<div class="single_ability">';
			parsed_card_details += 			'<span class="single_ability_name">Power ' + stats_to_check['power'] + '</span>';
			parsed_card_details += 			'<span class="single_ability_description">Power is used to determine the effect of many abilities.</span>';
			parsed_card_details += 		'</div>';
		}
		if(typeof(stats_to_check['armor']) == 'number' && stats_to_check['armor'] > 0)
		{
			parsed_card_details += 		'<div class="single_ability">';
			parsed_card_details += 			'<span class="single_ability_name">Armor ' + stats_to_check['armor'] + '</span>';
			parsed_card_details += 			'<span class="single_ability_description">Armor absorbs incoming damage. If this unit suffers damage that is lower then the armor this unit has, there is a chance the damage is reduced to 1. This chance depends on the ratio between armor and damage received. Ranged damage has twice the chance to be reduced. After this reduction, if any, armor is reduced before health.</span>';
			parsed_card_details += 		'</div>';
		}
		if(typeof(stats_to_check['health']) == 'number' && stats_to_check['health'] > 0)
		{
			parsed_card_details += 		'<div class="single_ability">';
			parsed_card_details += 			'<span class="single_ability_name">Health ' + stats_to_check['health'] + '</span>';
			parsed_card_details += 			'<span class="single_ability_description">Health is reduced by taking damage. If it reaches 0, this unit is detroyed and moved to the grave.</span>';
			parsed_card_details += 		'</div>';
		}*/
		
		parsed_card_details += 		'</div>';

		if(added_button != undefined && added_button == 'add_to_deck')
		{
			parsed_card_details += 		'<div class="add_card_to_deck_from_details_button" onclick="add_card_to_deck(\'' + card_id + '\', true)">ADD TO DECK</div>';
		}
		if(added_button != undefined && added_button == 'remove_from_deck')
		{
			parsed_card_details += 		'<div class="add_card_to_deck_from_details_button" onclick="remove_card_from_deck(\'' + card_id + '\', true)">REMOVE FROM DECK</div>';
		}

		if(added_button != undefined && added_button == 'set_hero')
		{
			parsed_card_details += 		'<div class="add_card_to_deck_from_details_button" onclick="set_hero(\'' + card_id + '\', true)">SET AS HERO</div>';
		}
		

		setTimeout(function(){
			$('.detail_overlay').removeClass('hidden');
			$('.detail_overlay .card_detail').html(parsed_card_details);
		},10);
	}
	else
	{
		$('.detail_overlay .card_detail').html('');
		/*setTimeout(function(){
			$('.detail_overlay').removeClass('hidden');
			$('.detail_overlay .card_detail').html(parsed_card_details);
		},10);*/
	}

}

function reset_filters(){
	$('.name_filter').val('');
	$('.ability_filter').val('');
	$('.min_cost_filter').val('');
	$('.max_cost_filter').val('');
	$('.min_value_filter').val('');
	$('.max_value_filter').val('');

	$('.filter_checkbox').prop('checked', true);
}

function clear_filters(){
	$('.name_filter').val('');
	$('.ability_filter').val('');
	$('.min_cost_filter').val('');
	$('.max_cost_filter').val('');
	$('.min_value_filter').val('');
	$('.max_value_filter').val('');

	$('.filter_checkbox').prop('checked', false);
}
var current_campaign = -1;
var current_chapter = '';

function show_campaigns(){
	$('.all_campaigns_container').html('');
	var cards_loaded = 0;
	$.each(all_campaigns, function(campaign_id, campaign_info){
		cards_loaded++;
		var parsed_campaign = parse_campaign(campaign_id, cards_loaded);

		$('.all_campaigns_container').append(parsed_campaign);

		setTimeout(function(){
			$('.campaign_' + campaign_id).removeClass('pre_load');
		},(Math.random() * cards_loaded * 50));
	});
}

function parse_campaign(campaign_id, card_number){
	var parsed_card = '';
	var current_card = all_campaigns[campaign_id];

	parsed_card += 	'<div class="card pre_load campaign_' + campaign_id + '" onclick="current_campaign = ' + campaign_id + ', show_content(\'single_campaign\')">';
	if(count_object(current_card['color']) > 1)
	{
		$.each(current_card['color'], function(useless_key, color){
			parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
		});
	}
	else
	{
		parsed_card += 	'<div class="card_color color_' + current_card['color'][0] + '"></div>';
	}
	var image_position = '';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 		'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';

	if(current_card['description'] != undefined){
		parsed_card += 	'<div class="card_abilities">' + current_card['description'] + '</div>';
	}

	if(card_number != undefined)
	{
		parsed_card += 		'<div class="card_power">' + card_number + '</div>';
	}
	parsed_card += 		'<div class="card_name">' + capitalizeFirstLetter(current_card['name']) + '</div>';

	parsed_card += 	'</div>';

	return parsed_card;
}

function parse_chapter(chapter_id, card_number){
	var parsed_card = '';
	var current_card = all_chapters[chapter_id];

	var cleared_enough = true;
	var need_to_unlock = '';
	$.each(all_chapters[chapter_id]['needs_cleared'], function(useless_key, cleared_chapter_id){
		if(gamedata['cleared_chapters'][cleared_chapter_id] == undefined)
		{
			cleared_enough = false;
			need_to_unlock += capitalizeFirstLetter(all_chapters[cleared_chapter_id]['name']) + '<br/>';
		}
	});

	if(cleared_enough == false)
	{
		parsed_card += 	'<div class="card pre_load disabled chapter_' + chapter_id + '">';
		parsed_card += 	'<div class="need_to_clear">Clear to unlock:<br/>' + need_to_unlock + '</div>';
	}
	else
	{
		if(gamedata['cleared_chapters'][chapter_id] == undefined)
		{
			parsed_card += 	'<div class="card unlocked pre_load chapter_' + chapter_id + '" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_details()">';
		}
		else
		{
			if(current_card['additional_clear_rewards'] == undefined)
			{
				parsed_card += 	'<div class="card unlocked pre_load chapter_' + chapter_id + ' chapter_done" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_details()">';
			}
			else
			{
				parsed_card += 	'<div class="card unlocked pre_load chapter_' + chapter_id + '" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_details()">';
			}
		}
	}
	if(count_object(current_card['color']) > 1)
	{
		$.each(current_card['color'], function(useless_key, color){
			parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
		});
	}
	else
	{
		parsed_card += 	'<div class="card_color color_' + current_card['color'][0] + '"></div>';
	}
	var image_position = '';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 			'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';

	if(current_card['description'] != undefined){
		parsed_card += 		'<div class="card_abilities">' + current_card['description'] + '</div>';
	}
	/*if(card_number != undefined)
	{
		parsed_card += 		'<div class="card_power">' + card_number + '</div>';
	}*/
	parsed_card += 			'<div class="card_name">' + capitalizeFirstLetter(current_card['name']) + '</div>';

	if(cleared_enough == false)
	{
		parsed_card += 		'<div class="locked">LOCKED</div>';
	}
	if(gamedata['cleared_chapters'][chapter_id] != undefined && cleared_enough == true)
	{
		parsed_card += 		'<div class="cleared">CLEARED</div>';
	}
	parsed_card += 		'</div>';

	return parsed_card;
}

function show_single_campaign(){
	$('.single_campaign_container').html('');
	var cards_loaded = 0;
	$.each(all_campaigns[current_campaign]['chapters'], function(useless_key, chapter_id){
		cards_loaded++;
		var parsed_campaign = parse_chapter(chapter_id, cards_loaded);
		
		$('.single_campaign_container').append(parsed_campaign);
		setTimeout(function(){
			$('.chapter_' + chapter_id).removeClass('pre_load');
		},((Math.random() * 100) + 1));
	});
}

function show_chapter_details(){
	$('.detail_overlay .card_detail').html('');
	var chapter_id = current_chapter;
	var parsed_card = '';
	var current_card = all_chapters[current_chapter];

	parsed_card += 	'<button class="start_campaign" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_battle()">START</button>';
	
	var image_position = '';
	parsed_card += '<div class="available_cards">';
	parsed_card += 		'<div class="card">';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 			'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';
	parsed_card += 		'</div>';
	parsed_card += '</div>';

	parsed_card += '<div class="ability_details">';
	parsed_card += 		'<div class="single_ability">';
	parsed_card += 			'<div class="single_ability_name">';
	parsed_card += 				capitalizeFirstLetter(current_card['name']);
	parsed_card += 			'</div>';
	if(current_card['description'] != undefined){
		parsed_card += 		'<div class="single_ability_description">' + current_card['description'] + '</div>';
	}
	parsed_card += 		'</div>';
	parsed_card += '</div>';
	//parsed_card += 		'</div>';

	if(gamedata['cleared_chapters'][chapter_id] == undefined)
	{
		parsed_card += '<div class="reward_cards">';
		parsed_card += '<div class="reward_title">Rewards:</div>'; 
		$.each(current_card['first_clear_rewards'], function(card_id, amount){
			if(card_id != 'scraps')
			{
				var parsed_card_reward = parse_card(card_id, amount);
				parsed_card += '<div class="single_reward" onclick="show_card_details(\'' + card_id + '\')">';
				parsed_card += 	parsed_card_reward;
				parsed_card += '</div>';
			}
			else
			{
				if(amount > 1)
				{
					parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scraps</div></div>';
				}
				else
				{
					parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scrap</div></div>';
				}

			}
		});
		parsed_card += '</div>';
		
	}
	else
	{
		if(current_card['additional_clear_rewards'] != undefined)
		{
			parsed_card += '<div class="reward_cards">';
			parsed_card += '<div class="reward_title">Possible rewards:</div>'; 
			$.each(current_card['additional_clear_rewards'], function(card_id, amount){
				if(card_id != 'scraps')
				{
					var parsed_card_reward = parse_card(card_id, amount);
					parsed_card += '<div class="single_reward" onclick="show_card_details(\'' + card_id + '\')">';
					parsed_card += 	parsed_card_reward;
					parsed_card += '</div>';
				}
				else
				{
					if(amount > 1)
					{
						parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scraps</div></div>';
					}
					else
					{
						parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scrap</div></div>';
					}

				}
			});
			parsed_card += '</div>';
		}
	}

	$('.detail_overlay .card_detail').append(parsed_card);
	$('.detail_overlay').removeClass('hidden');
}
var intro_step = 0;

function run_intro(forced){
	if(forced != undefined || gamedata['viewed_intro'] == undefined)
	{
		gamedata['viewed_intro'] = true;
		saveToLocalStorage();
		$('.intro').css('display','block');
		$('.intro').html('');
		$('.intro').append('<div class="skip_intro_button">SKIP</div>');
		$('.main_window').addClass('hidden');
		intro_step = 0;
		show_next_step();
	}
	else
	{
		skip_intro();
	}
}

function show_next_step(){
	var current_step = intro_steps[intro_step];
	var current_step_id = intro_step + 0;
	var parsed_step = '';
	parsed_step += '<div class="intro_step step_' + current_step_id + '" style="';
		if(current_step['text_size'] != undefined){parsed_step += 'font-size:' + current_step['text_size'] + ';';}
		if(current_step['text_align'] != undefined){parsed_step += 'text-align:' + current_step['text_align'] + ';';}
		if(current_step['start_location'] != undefined){
			$.each(current_step['start_location'], function(location_key, location_info){
				parsed_step += location_key + ':' + location_info + ';';
			});
		}		
		if(current_step['image'] != undefined && current_step['image'] != 'none'){parsed_step += 'background-image:url(' + current_step['image'] + ');';}
	parsed_step += '">';
	if(current_step['text'] != undefined)
	{
		parsed_step += current_step['text'];
	}
	parsed_step += '</div>';

	setTimeout(function(){
		$('.intro').append(parsed_step);
		setTimeout(function(){
			$('.step_' + current_step_id).addClass('visible');
			adjust_step_position(current_step_id, current_step);
		},50);
		setTimeout(function(){
			$('.step_' + current_step_id).removeClass('visible');
			$('.step_' + current_step_id).css('opacity', '0');
		},current_step['time_on_screen']);
	},current_step['timeout']);

	
	if(intro_steps[intro_step + 1] != undefined)
	{
		intro_step++;
		show_next_step();
	}
	else
	{
		setTimeout(function(){
			skip_intro();
		},current_step['timeout'] + current_step['time_on_screen'] + 2000);
	}
}

function adjust_step_position(current_step_id, current_step){
	$.each(current_step['end_location'], function(location_key, location_info){
		$('.step_' + current_step_id).css(location_key, location_info);
	});
	if(current_step['opacity'] != undefined)
	{
		$('.step_' + current_step_id).css('opacity', current_step['opacity']);
	}
}

function skip_intro(){
	$('.main_window').removeClass('hidden');
	$('.intro').css('display','none');
}

var intro_steps = {
	0:{
		timeout: 	0,
		time_on_screen: 2000,
		text: 		'Long ago...',
		text_size: 	'10vw',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top: 	'30%'
		},
		end_location: 		{
							left: 	'15%',
							top: 	'30%'
		},
	},
	1:{
		timeout: 			2500,
		time_on_screen: 	3000,
		image: 				'images/cards/butterfly-2049567_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'0%',
							top: 	'0%',
							left: 	'0%',
							bottom: '0%',
		},
		end_location: 		{
							right: 	'-5%',
							top: 	'-5%',
							left: 	'-0%',
							bottom: '-0%',
		},
	},
	2:{
		timeout: 	2500,
		time_on_screen: 2000,
		text: 		'There was peace in the world',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top: 	'60%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
							top: 	'60%'
		},
	},
	3:{
		timeout: 			6500,
		time_on_screen: 	3000,
		image: 				'images/cards/fantasy-3366526_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'0%',
							top: 	'0%',
							left: 	'0%',
							bottom: '-120%',
		},
		end_location: 		{
							right: 	'-5%',
							top: 	'-0%',
							left: 	'-5%',
							bottom: '-140%',
		},
	},
	4:{
		timeout: 	6000,
		time_on_screen: 3000,
		text: 		'Then man arrived',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom: '20%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
							bottom: '20%'
		},
	},
	5:{
		timeout: 			10000,
		time_on_screen: 	3500,
		image: 				'images/cards/confrontation-930744_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-100%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-100%',
		},
	},
	6:{
		timeout: 	        10000,
		time_on_screen:     2500,
		text: 		'Aggressive by nature...',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							left: 	'-110%',
							top:    '20%',
							right:   '10%',
		},
		end_location: 		{
							right: 	'15%',
							top:    '20%'
		},
	},
	7:{
		timeout: 			13000,
		time_on_screen: 	5500,
		image: 				'images/cards/barbarian-4616094_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-20%',
							left: 	'-10%',
							bottom: '-80%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-150%',
		},
	},
	8:{
		timeout: 	        13000,
		time_on_screen:     2500,
		text: 		'men started fighting<br/>amongst themselves',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'15%',
							top:    '30%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'20%',
							top:    '30%'
		},
	},
	9:{
		timeout: 	        15000,
		time_on_screen:     2000,
		text: 		'breaking apart into factions',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'20%',
							top:    '50%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'25%',
							top:    '50%'
		},
	},
	10:{
		timeout: 			18000,
		time_on_screen: 	3500,
		image: 				'images/cards/farewell-587277_1280.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-50%',
							left: 	'-0%',
							bottom: '-0%',
		},
		end_location: 		{
							right: 	'-20%',
							top: 	'-60%',
							left: 	'-0%',
							bottom: '-0%',
		},
	},
	11:{
		timeout: 	        18000,
		time_on_screen:     2500,
		text: 		'Some kept the old ways',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:    '70%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	12:{
		timeout: 			21000,
		time_on_screen: 	3500,
		image: 				'images/cards/fantasy-2961723_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-80%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-110%',
		},
	},
	13:{
		timeout: 	        21000,
		time_on_screen:     2500,
		text: 		'Some embraced nature',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top:    '10%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	14:{
		timeout: 			24000,
		time_on_screen: 	3500,
		image: 				'images/cards/fantasy-1390177_1280.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-60%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-90%',
		},
	},
	15:{
		timeout: 	        24000,
		time_on_screen:     2500,
		text: 		'Some sought magic in the north',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom:  '10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	16:{
		timeout: 			27000,
		time_on_screen: 	3500,
		image: 				'images/cards/castle-832543_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-10%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-20%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-20%',
							left: 	'-0%',
							bottom: '-0%',
		},
	},
	17:{
		timeout: 	        27000,
		time_on_screen:     2500,
		text: 		'Some found a god to worship',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top:    '10%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	18:{
		timeout: 			30000,
		time_on_screen: 	3500,
		image: 				'images/cards/monster-5369480_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-20%',
							bottom: '-200%',
		},
		end_location: 		{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-10%',
							bottom: '-150%',
		},
	},
	19:{
		timeout: 	        30000,
		time_on_screen:     2500,
		text: 		'Others embraced darkness',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom:  '10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	20:{
		timeout: 			33000,
		time_on_screen: 	3500,
		image: 				'images/cards/fire-2648873_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-60%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-30%',
							left: 	'-10%',
							bottom: '-30%',
		},
	},
	21:{
		timeout: 	        33000,
		time_on_screen:     2500,
		text: 		'or just wanted the world to burn',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:  	'10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	22:{
		timeout: 	        37000,
		time_on_screen:     2500,
		text: 		'After many years of war...',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							bottom:  '10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	23:{
		timeout: 			39000,
		time_on_screen: 	8000,
		image: 				'images/cards/take-532097_640.jpg',
		opacity: 			0.3,
		start_location: 	{
							right: 	'-0%',
							top: 	'-0%',
							left: 	'-0%',
							bottom: '-60%',
		},
		end_location: 		{
							right: 	'-10%',
							top: 	'-30%',
							left: 	'-10%',
							bottom: '-30%',
		},
	},
	24:{
		timeout: 	        40000,
		time_on_screen:     2500,
		text: 		'a hero dreamt of a book',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:  	'10%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	25:{
		timeout: 	        42000,
		time_on_screen:     2500,
		text: 		'that would let him bring man together',
		text_size: 	'5vw',
		text_align: 'left',
		image: 		'none',
		start_location: 	{
							left: 	'10%',
							top:  	'40%',
							right:   '-100%',
		},
		end_location: 		{
							left: 	'15%',
		},
	},
	26:{
		timeout: 	        45000,
		time_on_screen:     2500,
		text: 		'The question is...',
		text_size: 	'5vw',
		text_align: 'right',
		image: 		'none',
		start_location: 	{
							right: 	'10%',
							top:  	'10%',
							left:   '-100%',
		},
		end_location: 		{
							right: 	'15%',
		},
	},
	27:{
		timeout: 	        48000,
		time_on_screen:     4000,
		text: 		'Will you?',
		text_size: 	'5vw',
		text_align: 'center',
		image: 		'none',
		start_location: 	{
							right: 	'0%',
							top:  	'40%',
							left:   '0%',
		},
		end_location: 		{
		},
	},
}


var current_merchant_page = 1;
var selling_card_id = '';
var sell_amount = 1;
var selling_price = 1;
var listings_page = 1;
var showing_mine = false;
var buy_sell = 'buy';
var current_lowest_price = 0;
var your_offer = '';
var global_listings = {};
var current_listing_id = false;

function show_merchant(){
	selling_price = 1;
	sell_amount = 1;
	cards_per_page = 12;
	$('#content_merchant .tinkering_list').html('<span class="no_tinker">No cards fit your<br/>current filters.</span>');

	gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
	$('#content_merchant .tinkering_list').html('');
	var current_card_number = 0;

	$.each(gamedata['owned_cards'], function(card_id, owned_amount){
		var effective_owned_amount = owned_amount + 0;
		
		if((effective_owned_amount > 0 || buy_sell == 'buy') && check_filters(card_id) == false && all_available_cards[card_id]['non_tradable'] == undefined)
		{
			current_card_number ++;
			if(current_card_number / cards_per_page > current_merchant_page -1 && current_card_number / cards_per_page <= current_merchant_page)
			{
				var parsed_card = parse_card(card_id, effective_owned_amount);
				$('#content_merchant .tinkering_list').append('<div onclick="current_lowest_price=0;selling_price=' + all_available_cards[card_id]['value'] + ';show_sell_card_content(\'' + card_id + '\')">' + parsed_card + '</div>');
			}
		}
	});
	if(current_merchant_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / cards_per_page <= current_merchant_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(Math.ceil(current_card_number / 12) < current_merchant_page && current_card_number > 0)
	{
		current_merchant_page = 1;
		show_merchant();
	}
	if(current_card_number == 0)
	{
		$('#content_merchant .tinkering_list').html('<span class="no_tinker">No cards fit your<br/>current filters.</span>');
	}
	if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
	$('.page_selection .page_number').html(current_merchant_page + ' / ' + Math.ceil(current_card_number / cards_per_page));

}

function set_merchant_page(amount){
	current_merchant_page += amount;
	if(current_merchant_page < 1){current_merchant_page = 1;}
	show_merchant();
}

function set_market_page(amount){
	listings_page += amount;
	if(listings_page < 1){listings_page = 1;}
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
}



function show_sell_card_content(card_id){
	selling_card_id = card_id;
	if(buy_sell == 'sell')
	{
		show_content('sell_card');
	}
	else
	{
		show_content('buy_card');
	}
}

function show_buy_card(){
	show_sell_card();
}

function show_sell_card(){
	if(selling_card_id == '' || all_available_cards[selling_card_id] == undefined || (gamedata['owned_cards'][selling_card_id] < 1 && buy_sell == 'sell') || all_available_cards[selling_card_id]['non_tradable'] != undefined)
	{
		show_content('merchant');
	}
	else
	{
		if(sell_amount < 1)
		{
			sell_amount = 1;
		}
		if(sell_amount > gamedata['owned_cards'][selling_card_id] && buy_sell == 'sell')
		{
			sell_amount = gamedata['owned_cards'][selling_card_id];
		}

		var parsed_card = parse_card(selling_card_id, gamedata['owned_cards'][selling_card_id]);
		if(buy_sell == 'sell')
		{
			$('.sell_card_container').html('Selling:<br/><div onclick="show_card_details(\'' + selling_card_id + '\')"' + parsed_card);
		}
		else
		{
			$('.sell_card_container').html('Buying:<br/><div onclick="show_card_details(\'' + selling_card_id + '\')"' + parsed_card);
		}

		$('.sell_card_amount_container .sell_amount').html(numberWithCommas(sell_amount));

		var merchant_price = Math.floor(sell_amount * all_available_cards[selling_card_id]['value'] / 2);
		//var merchant_price = sell_amount + 0;
		if(merchant_price == 0)
		{
			$('.merchant_offer').html('The merchant does not want this.<br/>Maybe offer more cards?');
			$('.sell_to_merchant_button').addClass('hidden');
		}
		else
		{
			$('.sell_to_merchant_button').removeClass('hidden');
			if(merchant_price == 1)
			{
				$('.merchant_offer').html('The merchant offers you 1 scrap for this.');
			}
			else
			{
				$('.merchant_offer').html('The merchant offers you ' + numberWithCommas(merchant_price) + ' scraps for this.');
			}
			
		}

		if(selling_price < (all_available_cards[selling_card_id]['value']) / 2)
		{
			selling_price = Math.floor((all_available_cards[selling_card_id]['value']) / 2)
		}

		if(selling_price > (all_available_cards[selling_card_id]['value']) * 40)
		{
			selling_price = Math.floor((all_available_cards[selling_card_id]['value']) * 40)
		}
		if(selling_price < 1)
		{
			selling_price = 1;
		}

		$('.price_amount').html(numberWithCommas(selling_price));
		if(buy_sell == 'sell')
		{
			get_lowest_price(selling_card_id);
		}
		else
		{
			get_highest_price(selling_card_id);
		}
	}
}

function adjust_sell_amount(amount){
	var price_each = selling_price / sell_amount;
	sell_amount += amount;
	//selling_price = Math.floor(price_each * sell_amount);
	show_sell_card();
}

function adjust_selling_price(amount){
	if(amount > 0 && selling_price >= 20)
	{
		amount = 5;
	}
	if(amount > 0 && selling_price >= 50)
	{
		amount = 10;
	}
	if(amount > 0 && selling_price >= 100)
	{
		amount = 20;
	}
	if(amount > 0 && selling_price >= 500)
	{
		amount = 50;
	}
	if(amount > 0 && selling_price >= 1000)
	{
		amount = 100;
	}
	selling_price += amount;
	if(selling_price < 1)
	{
		selling_price = 1;
	}
	if(selling_price > 1000)
	{
		selling_price = Math.floor(selling_price / 100) * 100;
	}
	if(selling_price > 500 && selling_price < 1000)
	{
		selling_price = Math.floor(selling_price / 50) * 50;
	}
	if(selling_price > 100 && selling_price < 500)
	{
		selling_price = Math.floor(selling_price / 20) * 20;
	}
	if(selling_price > 50 && selling_price < 100)
	{
		selling_price = Math.floor(selling_price / 10) * 10;
	}
	if(selling_price > 20 && selling_price < 50)
	{
		selling_price = Math.floor(selling_price / 5) * 5;
	}
	if(buy_sell != 'sell' && selling_price > gamedata['scraps'])
	{
		selling_price = gamedata['scraps'];
	}
	show_sell_card();
}

function take_merchant_offer(){
	if(sell_amount > 0 && sell_amount <= gamedata['owned_cards'][selling_card_id])
	{
		var merchant_price = Math.floor(sell_amount * all_available_cards[selling_card_id]['value'] / 2);
		//var merchant_price = sell_amount + 0;
		gamedata['owned_cards'][selling_card_id] -= sell_amount;
		gain_scraps(merchant_price);
		show_available_cards(false);
	}
	check_quests('sell_to_merchant');
	sell_amount = 1;
	show_content('merchant');
}

function place_offer(){
	if(sell_amount > 0 && sell_amount <= gamedata['owned_cards'][selling_card_id])
	{
		gamedata['owned_cards'][selling_card_id] -= sell_amount;	
		saveToLocalStorage();
		show_available_cards(false);
		$.post("ajax.php",
		{
			data: 			'place_offer',
			current_id: 	gamedata['account_id'],
			card_id: 		selling_card_id,
			card_amount: 	sell_amount,
			price: 			selling_price
		},
		function(result){
			console.log(result);
			show_content('merchant');
		});
	}
	else
	{
		sell_amount = 1;
		show_content('merchant');
	}
}

function place_buy_offer(){
	if(sell_amount > 0 && gamedata['scraps'] >= (selling_price * sell_amount))
	{
		gamedata['scraps'] -= (selling_price * sell_amount);	
		saveToLocalStorage();
		show_available_cards(false);
		$.post("ajax.php",
		{
			data: 			'place_buy_offer',
			current_id: 	gamedata['account_id'],
			card_id: 		selling_card_id,
			card_amount: 	sell_amount,
			price: 			selling_price
		},
		function(result){
			console.log(result);
			show_content('merchant');
		});
	}
	else
	{
		sell_amount = 1;
		show_content('merchant');
	}
}



function show_market(){
	$('.market_list').html('');
	showing_mine = false;
	if(buy_sell == 'buy')
	{
		$('.market_view_slider').addClass('buying');
		$('.select_buy').addClass('active');
		$('.select_sell').removeClass('active');
		$.post("ajax.php",
		{
			data: 			'get_market',
			current_id: 	gamedata['account_id'],
		},
		function(result){
			parse_current_market(JSON.parse(result));
		});
	}
	else
	{
		$('.market_view_slider').removeClass('buying');
		$('.select_sell').addClass('active');
		$('.select_buy').removeClass('active');
		showing_mine = false;
		$.post("ajax.php",
		{
			data: 			'get_market_offers',
			current_id: 	gamedata['account_id'],
		},
		function(result){
			parse_current_market(JSON.parse(result));
		});
	}
}

function show_my_market(){
	$('.market_list').html('');
	//listings_page = 1;
	showing_mine = true;
	if(buy_sell == 'buy')
	{
		$('.market_view_slider').addClass('buying');
		$('.select_buy').addClass('active');
		$('.select_sell').removeClass('active');		
	}
	else
	{
		$('.market_view_slider').removeClass('buying');
		$('.select_sell').addClass('active');
		$('.select_buy').removeClass('active');
	}
	$.post("ajax.php",
	{
		data: 			'get_your_market',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		parse_current_market(JSON.parse(result), true);
	});
}

function get_lowest_price(card_id){
	if(current_lowest_price == 0)
	{
		$('.current_market_price').html('');
		$.post("ajax.php",
		{
			data: 			'get_lowest_price',
			card_id: 		card_id
		},
		function(result){
			//console.log(JSON.parse(result));
			var lowest_price = (JSON.parse(result));
			your_offer = '';

			if(count_object(lowest_price) > 0 && lowest_price['user_id'] != undefined && lowest_price['user_id'] == gamedata['account_id'])
			{
				your_offer = ' (yours)';
			}
			
			if(lowest_price != null && lowest_price['price'] != undefined)
			{
				current_lowest_price = lowest_price['price'];
				$('.current_market_price').html('Lowest price on the market for this is ' + numberWithCommas(lowest_price['price']) + ' each' + your_offer);
			}
			else
			{
				current_lowest_price = null;
				$('.current_market_price').html('There are no offers for this on the market');
			}
		});
	}
	else
	{
		if(current_lowest_price != null && current_lowest_price != undefined)
		{
			$('.current_market_price').html('Lowest price on the market for this is ' + numberWithCommas(current_lowest_price) + ' each' + your_offer);
		}
		else
		{
			$('.current_market_price').html('There are no offers for this on the market');
		}
	}
}

function get_highest_price(card_id){
	if(current_lowest_price == 0)
	{
		$('.current_market_price').html('');
		$.post("ajax.php",
		{
			data: 			'get_highest_price',
			card_id: 		card_id
		},
		function(result){
			//console.log(JSON.parse(result));
			var lowest_price = (JSON.parse(result));
			your_offer = '';
			if(count_object(lowest_price) > 0 && lowest_price['user_id'] != undefined && lowest_price['user_id'] == gamedata['account_id'])
			{
				your_offer = ' (yours)';
			}
			
			if(lowest_price != null && lowest_price['price'] != undefined)
			{
				current_lowest_price = lowest_price['price'];
				$('.current_market_price').html('Highest price on the market for this is ' + numberWithCommas(lowest_price['price']) + ' each' + your_offer);
			}
			else
			{
				current_lowest_price = null;
				$('.current_market_price').html('There are no requests for this on the market');
			}
		});
	}
	else
	{
		if(current_lowest_price != null && current_lowest_price != undefined)
		{
			$('.current_market_price').html('Highest price on the market for this is ' + numberWithCommas(current_lowest_price) + ' each' + your_offer);
		}
		else
		{
			$('.current_market_price').html('There are no requests for this on the market');
		}
	}
}

function buy_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'buy_listing',
		listing_id: 	listing_id
	},
	function(result){
		//console.log(JSON.parse(result));
		complete_buy_listing(JSON.parse(result));
	});
}

function sell_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'sell_listing',
		listing_id: 	listing_id
	},
	function(result){
		//console.log(JSON.parse(result));
		complete_sell_listing(JSON.parse(result));
	});
}

function complete_buy_listing(listing){
	check_quests('complete_buy_listing');
	gamedata['scraps'] -= listing['price'];
	//for (var i = listing['card_amount'] - 1; i >= 0; i--) {
		gain_card(listing['card_id']);
	//};
	//show_card_details(listing['card_id'], undefined, listing['card_amount']);
	show_market();
}

function complete_sell_listing(listing){
	check_quests('complete_sell_listing');
	gamedata['owned_cards'][listing['card_id']] -= 1;
	gamedata['scraps'] += parseInt(listing['price']);
	saveToLocalStorage();
	show_market();
}

function cancel_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		var canceled_listing = JSON.parse(result);
		
		$.post("ajax.php",
		{
			data: 			'delete_listing',
			listing_id: 	listing_id
		},
		function(result){
			complete_cancel_listing(canceled_listing);
		});
	});
}

function cancel_buy_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		var canceled_listing = JSON.parse(result);
		$.post("ajax.php",
		{
			data: 			'delete_listing',
			listing_id: 	listing_id
		},
		function(result){
			complete_cancel_buy_listing(canceled_listing);
		});
	});
}

function complete_cancel_listing(listing){
	var canceled_amount = listing['card_amount'] - listing['sold'];
	for (var i = canceled_amount - 1; i >= 0; i--) {
		gain_card(listing['card_id']);
	};
	show_card_details(listing['card_id'], undefined, canceled_amount);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function complete_cancel_buy_listing(listing){
	var canceled_amount = listing['card_amount'] - listing['sold'];
	gain_scraps(listing['price'] * canceled_amount);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function claim_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		complete_claim_listing(JSON.parse(result));
	});
}

function claim_buy_listing(listing_id){
	$('.market_list').html('');
	$.post("ajax.php",
	{
		data: 			'claim_listing',
		listing_id: 	listing_id
	},
	function(result){
		complete_claim_buy_listing(JSON.parse(result));
	});
}

function complete_claim_listing(listing){
	gain_scraps(listing['price'] * listing['sold']);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function complete_claim_buy_listing(listing){
	
	for (var i = listing['sold'] - 1; i >= 0; i--) {
		gain_card(listing['card_id']);
	};
	show_card_details(listing['card_id'], undefined, listing['sold']);
	if(showing_mine == false)
	{
		show_market();
	}
	else
	{
		show_my_market();
	}
	//show_my_market();
}

function parse_current_market(all_listings, mine){
	$('#content_market .page_selection').addClass('hidden');
	$('#content_my_market .page_selection').addClass('hidden');
	if(current_listing_id == false)
	{
		$('#content_market .menu_button').removeClass('hidden');
		$('#content_market .market_view').removeClass('hidden');
		$('#content_market .select_filters').removeClass('hidden');
		$('.market_list').removeClass('showing_single');
	}
	else
	{
		$('#content_market .menu_button').addClass('hidden');
		$('#content_market .market_view').addClass('hidden');
		$('#content_market .select_filters').addClass('hidden');
		$('.market_list').addClass('showing_single');
	}
	if(gamedata['scraps'] == 1)
	{
		$('.scrap_count').html(gamedata['scraps'] + ' scrap');
	}
	else
	{
		$('.scrap_count').html(gamedata['scraps'] + ' scraps');
	}
	$('.market_list').html('');
	var parsed_listing = '';
	if(current_listing_id == false)
	{
		global_listings = all_listings;
	}
	/*parsed_listing = '<div class="listing no_hover">';
	parsed_listing += '<div class="listing_name">Card</div>';
	parsed_listing += '<div class="listing_amount">Amount</div>';
	parsed_listing += '<div class="listing_cost">Price</div>';
	parsed_listing += '<div class="listing_average_cost">Average price</div>';
	parsed_listing += '<div class="seller">Seller</div>';
	parsed_listing += '<div class="owned_scraps">Scraps:<br/>' + gamedata['scraps'] + '</div>';
	parsed_listing += '</div>';*/
	$('.market_list').append(parsed_listing);
	var total_showing = 0;
	var max_page = 6;
	
	$.each(all_listings, function(listing_id, listing){
		if((current_listing_id == false || current_listing_id == listing['id']) && all_available_cards[listing['card_id']] != undefined && check_filters(listing['card_id']) == false && ((listing['card_amount'] - listing['sold']) > 0 || mine == true) && ((mine != true /*&& listing['user_id'] != gamedata['account_id']*/) || (listing['user_id'] == gamedata['account_id'] && mine == true)))
		{
			//console.log(listing['card_id']);
			total_showing++;
			if((total_showing <= (listings_page * max_page) && total_showing > (listings_page -1) * max_page) || current_listing_id != false)
			{
				var parsed_listing = '';
				var parsed_card = parse_card(listing['card_id']);
				var owned_amount = 0;
				if(gamedata['owned_cards'][listing['card_id']] != undefined && gamedata['owned_cards'][listing['card_id']] > 0)
				{
					owned_amount = gamedata['owned_cards'][listing['card_id']];
				}
				parsed_listing += '<div class="single_market_card"><div onclick="show_card_details(\'' + listing['card_id'] + '\')">' + parsed_card + '</div>';
				
				if(listing['user_id'] != gamedata['account_id'] && listing['card_amount'] - listing['sold'] > 0)
				{
					if(listing['buy_sell'] == 'sell')
					{
						parsed_listing += 	'<div class="market_description"><span class="selling">In stock: ' + (listing['card_amount'] - listing['sold']) + '</span><br/>Price: ' + numberWithCommas(listing['price']) + '<br/>Owned: ' + owned_amount + '</div>';
						if(gamedata['scraps'] >= listing['price'])
						{
							if(current_listing_id == false)
							{
								parsed_listing += 	'<div class="market_buy_button" onclick="current_listing_id=' + listing['id'] + ';parse_current_market(global_listings)">VIEW</div>';
							}
							else
							{
								parsed_listing += 	'<div class="market_buy_button" onclick="buy_listing(' + listing['id'] + ')">BUY</div>';
							}
						}
						if(current_listing_id != false)
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="current_listing_id=false;show_market()">CLOSE</div>';
						}
					}
					if(listing['buy_sell'] == 'buy')
					{
						parsed_listing += 	'<div class="market_description"><span class="buying">Requested: ' + (listing['card_amount'] - listing['sold']) + '</span><br/>Pays: ' + numberWithCommas(listing['price']) + '<br/>Owned: ' + owned_amount + '</div>';
						if(owned_amount >= 1)
						{
							if(current_listing_id == false)
							{
								parsed_listing += 	'<div class="market_sell_button" onclick="current_listing_id=' + listing['id'] + ';parse_current_market(global_listings)">VIEW</div>';
							}
							else
							{
								parsed_listing += 	'<div class="market_sell_button" onclick="sell_listing(' + listing['id'] + ')">SELL</div>';
								
							}
						}
						if(current_listing_id != false)
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="current_listing_id=false;show_market()">CLOSE</div>';
						}
					}
				}
				if(listing['user_id'] == gamedata['account_id'])
				{
					if(listing['buy_sell'] == 'sell')
					{
						parsed_listing += 	'<div class="market_description"><span class="selling">SELLING</span><br/>Price: ' + numberWithCommas(listing['price']);
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<br/>Sold: ' + listing['sold'];
						}
						else
						{
							parsed_listing += 	'<br/>Offering: ' + listing['card_amount'];
						}
						parsed_listing += 	'</div>';
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<div class="market_buy_button" onclick="claim_listing(' + listing['id'] + ')">CLAIM</div>';
						}
						else
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="cancel_listing(' + listing['id'] + ')">CANCEL</div>';
						}
					}
					if(listing['buy_sell'] == 'buy')
					{
						parsed_listing += 	'<div class="market_description"><span class="buying">BUYING</span><br/>Price: ' + numberWithCommas(listing['price']);
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<br/>Bought: ' + listing['sold'];
						}
						else
						{
							parsed_listing += 	'<br/>Requesting: ' + listing['card_amount'];
						}
						parsed_listing += 	'</div>';
						if(listing['sold'] > 0)
						{
							parsed_listing += 	'<div class="market_buy_button" onclick="claim_buy_listing(' + listing['id'] + ')">CLAIM</div>';
						}
						else
						{
							parsed_listing += 	'<div class="market_cancel_button" onclick="cancel_buy_listing(' + listing['id'] + ')">CANCEL</div>';
						}
					}
				}
				parsed_listing += '</div>';
				/*var parsed_listing = '<div class="listing">';
				if(listing['sold'] == 0 || listing['sold'] == 1)
				{
					parsed_listing += '<div class="listing_name" onclick="show_card_details(\'' + listing['card_id'] + '\')"><span class="selling">Selling:</span> ' + capitalizeFirstLetter(all_available_cards[listing['card_id']]['name']) + ' <div class="mg"></div></div>';
				}
				if(listing['sold'] == -1 || listing['sold'] == 2)
				{
					parsed_listing += '<div class="listing_name" onclick="show_card_details(\'' + listing['card_id'] + '\')"><span class="buying">Buying:</span> ' + capitalizeFirstLetter(all_available_cards[listing['card_id']]['name']) + ' <div class="mg"></div></div>';
				}
				parsed_listing += '<div class="listing_amount">' + listing['card_amount'] + '</div>';
				parsed_listing += '<div class="listing_cost">' + numberWithCommas(listing['price']) + '</div>';
				parsed_listing += '<div class="listing_average_cost">' + Math.floor(listing['price'] / listing['card_amount'] * 10) / 10 + '</div>';
				parsed_listing += '<div class="seller">' + listing['name'] + '</div>';
				if(listing['price'] <= gamedata['scraps'] && listing['user_id'] != gamedata['account_id'] && listing['sold'] == 0)
				{
					parsed_listing += '<div class="buy_market_listing_button" onclick="buy_listing(' + listing['id'] + ')">BUY</div>';
				}
				if(gamedata['owned_cards'][listing['card_id']] != undefined && gamedata['owned_cards'][listing['card_id']] >= listing['card_amount'] && listing['user_id'] != gamedata['account_id'] && listing['sold'] == -1)
				{
					parsed_listing += '<div class="buy_market_listing_button" onclick="sell_listing(' + listing['id'] + ')">SELL</div>';
				}
				if(listing['user_id'] == gamedata['account_id'])
				{
					if(listing['sold'] == 0)
					{
						parsed_listing += '<div class="buy_market_listing_button cancel_button" onclick="cancel_listing(' + listing['id'] + ')">CANCEL</div>';
					}
					if(listing['sold'] == 1)
					{
						parsed_listing += '<div class="buy_market_listing_button" onclick="claim_listing(' + listing['id'] + ')">CLAIM</div>';
					}
					if(listing['sold'] == -1)
					{
						parsed_listing += '<div class="buy_market_listing_button cancel_button" onclick="cancel_buy_listing(' + listing['id'] + ')">CANCEL</div>';
					}
					if(listing['sold'] == 2)
					{
						parsed_listing += '<div class="buy_market_listing_button" onclick="claim_buy_listing(' + listing['id'] + ')">CLAIM</div>';
					}
				}
				
				parsed_listing += '</div>';*/
				$('.market_list').append(parsed_listing);
			}
		}
	});

	if(total_showing == 0)
	{
		var parsed_listing = '<div class="listing no_hover"><span class="no_results">No results found</span>';
		if(current_listing_id != false)
		{
			parsed_listing += '<br/><br/><div class="market_cancel_button" onclick="current_listing_id=false;show_market()">CLOSE</div>';
		}
		parsed_listing += '</div>';
		$('.market_list').append(parsed_listing);
	}
	
	if(total_showing > 1)
	{
		$('#content_market .page_selection').removeClass('hidden');
		$('#content_my_market .page_selection').removeClass('hidden');
		if(listings_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(total_showing / max_page <= listings_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(Math.ceil(total_showing / max_page) < listings_page)
		{
			listings_page = 1;
			if(showing_mine == false)
			{
				parse_current_market(all_listings);
			}
			else
			{
				parse_current_market(all_listings, true);
			}
		}
		$('.page_selection .page_number').html(listings_page + ' / ' + Math.ceil(total_showing / max_page));
	}
};

function check_filters(card_id, hero_version){
	var filters = {};
	filters['ability'] = '';
	if($('.ability_filter').val() != '')
	{
		filters['ability'] = $('.ability_filter').val();
	}
	filters['name'] = '';
	if($('.name_filter').val() != '')
	{
		filters['name'] = $('.name_filter').val();
	}
	if($('.min_cost_filter').val() != ''){filters['min_cost'] = parseInt($('.min_cost_filter').val());}
	if($('.max_cost_filter').val() != ''){filters['max_cost'] = parseInt($('.max_cost_filter').val());}
	if($('.min_value_filter').val() != ''){filters['min_value'] = parseInt($('.min_value_filter').val());}
	if($('.max_value_filter').val() != ''){filters['max_value'] = parseInt($('.max_value_filter').val());}

	var card_filtered = false;
	if(filters['name'] != '')
	{
		var name_matched = false;
		if(all_available_cards[card_id]['name'].indexOf(filters['name']) != -1){
			name_matched = true;
		}
		$.each(all_available_cards[card_id]['subtypes'], function(subtype_key, subtype_name){
			if(subtype_name.indexOf(filters['name']) != -1){
				name_matched = true;
			}
		});
		if(name_matched == false)
		{
			card_filtered = true;
		}
	}
	if(filters['ability'] != '')
	{
		var ability_matched = false;

		var abilities_to_filter = all_available_cards[card_id]['abilities'];
		if(hero_version != undefined && hero_version == true && all_available_cards[card_id]['hero_version'] != undefined && all_available_cards[card_id]['hero_version']['abilities'] != undefined)
		{
			abilities_to_filter = all_available_cards[card_id]['hero_version']['abilities'];
		}

		$.each(abilities_to_filter, function(ability_key, ability_level){
			if(typeof(ability_level) == 'object')
			{
				var temp_ability_name = all_abilities[ability_key]['name'] + ' ' + ability_level['level'];
			}
			else
			{
				if(all_abilities[ability_key] != undefined)
				{
					var temp_ability_name = all_abilities[ability_key]['name'] + ' ' + ability_level;
				}
				else
				{
					var temp_ability_name = '';
					console.log(ability_key);
				}
			}
			
			if(temp_ability_name.indexOf(filters['ability']) != -1){
				ability_matched = true;
			}
			if(all_abilities[ability_key]['description'].indexOf(filters['ability']) != -1){
				ability_matched = true;
			}
		});

		if(ability_matched == false)
		{
			card_filtered = true;
		}
		
	}
	if(filters['min_cost'] != undefined && all_available_cards[card_id]['time'] < filters['min_cost']){card_filtered = true;}
	if(filters['max_cost'] != undefined && all_available_cards[card_id]['time'] > filters['max_cost']){card_filtered = true;}
	if(filters['min_value'] != undefined && all_available_cards[card_id]['value'] < filters['min_value']){card_filtered = true;}
	if(filters['max_value'] != undefined && all_available_cards[card_id]['value'] > filters['max_value']){card_filtered = true;}
	if($('.' + all_available_cards[card_id]['type'] + '_type_filter').prop("checked") == false)
	{
		card_filtered = true;
	}

	if(namechanges[card_id] != undefined)
	{
		card_filtered = true;
	}
	
	$.each(all_available_cards[card_id]['color'], function(useless_key, color){
		if(color != undefined && $('.' + color + '_color_filter').prop("checked") == false)
		{
			card_filtered = true;
		}
	});

	return card_filtered;
}

function toggle_market_view_mode(){
	if(buy_sell == 'sell')
	{
		buy_sell = 'buy';
	}
	else
	{
		buy_sell = 'sell';
	}
	show_market();
}


function toggle_my_market_view_mode(){
	if(buy_sell == 'sell')
	{
		buy_sell = 'buy';
	}
	else
	{
		buy_sell = 'sell';
	}
	show_my_market();
}
var current_tinker_page = 1;
var current_tinker = '';
var min_tinker = 0;

function show_tinker(){
	if(gamedata['known_recipes'] == undefined){
		gamedata['known_recipes'] = {};
		saveToLocalStorage();
	}

	$('.tinkering_container').html('<span class="no_tinker">You need 5 identical cards and an unknown recipe that can be crafted with that card to be able to tinker</span>');
	$('.tinker_min_amount').html('OWNED: ' + min_tinker);
	var tinkering_list = '';
	var cards_displayed = 0;

	$.each(gamedata['owned_cards'], function(owned_card_id, amount){
		if(amount >= min_tinker && check_filters(owned_card_id) == false)
		{
			var possible_tinker_count = 0;
			$.each(all_available_cards, function(current_card_id, current_card_info){
				if(gamedata['known_recipes'][current_card_id] == undefined && current_card_info['recipe'] != undefined && current_card_info['recipe'][owned_card_id] != undefined)
				{

					var can_tinker = true;
					$.each(current_card_info['recipe'], function(recipe_cost_card_id, recipe_cost_amount){
						if(gamedata['known_recipes'][recipe_cost_card_id] == undefined && all_available_cards[recipe_cost_card_id]['recipe'] != undefined)
						{
							can_tinker = false;
						}
					});
					if(can_tinker == true)
					{
						possible_tinker_count++;
					}
				}
			});
			if(possible_tinker_count > 0)
			{
				cards_displayed ++;
				if(cards_displayed > (current_tinker_page * 12) - 12 && cards_displayed <= current_tinker_page * 12)
				{
					var parsed_card = parse_card(owned_card_id, amount + ' (' + possible_tinker_count + ')');
					if(amount > 4)
					{
						tinkering_list += '<div onclick="current_tinker=\'' + owned_card_id + '\';show_content(\'single_tinker\')">' + parsed_card + '</div>';
					}
					else
					{
						tinkering_list += '<div class="faded" onclick="current_tinker=\'' + owned_card_id + '\';show_content(\'single_tinker\')">' + parsed_card + '</div>';
					}
				}
			}
		}
	});

	if(cards_displayed > 12)
	{
		$('#content_tinker .page_selection').show();
		if(current_tinker_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / 12 <= current_tinker_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_tinker_page + ' / ' + Math.ceil(cards_displayed / 12));
	}
	else
	{
		$('#content_tinker .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / 12) < current_tinker_page)
	{
		current_tinker_page = 1;
		show_tinker();
	}
	else
	{
		if(tinkering_list != '')
		{
			$('.tinkering_container').html('<div class="tinkering_list">' + tinkering_list + '</div>');
		}
	}
};

function toggle_min_tinker(){
	var old_min_tinker = min_tinker + 0;
	if(old_min_tinker == 0)
	{
		min_tinker = 1;
	}
	if(old_min_tinker == 1)
	{
		min_tinker = 5;
	}
	if(old_min_tinker == 5)
	{
		min_tinker = 10;
	}
	if(old_min_tinker == 10)
	{
		min_tinker = 0;
	}
}

function show_single_tinker(){
	var possible_new_recipes = get_possible_tinker_results(current_tinker);
	if(all_available_cards[current_tinker] == undefined || count_object(possible_new_recipes) < 1)
	{
		show_content('tinker');
	}
	else
	{
		var current_card = all_available_cards[current_tinker];
		$('.single_tinker_name').html(capitalizeFirstLetter(current_card['name']));
		$('.single_tinker_container').html('');
		var owned_amount = 0;
		if(gamedata['owned_cards'][current_tinker] != undefined)
		{
			owned_amount = gamedata['owned_cards'][current_tinker];
		}
		var parsed_current_card = parse_card(current_tinker, owned_amount);
		$('.single_tinker_container').append('<div class="tinker_card_container">' + parsed_current_card + '</div>');
		if(owned_amount >= 0)
		{
			
			if(owned_amount > 4)
			{
				$('.single_tinker_container').append('<div class="tinker_confirmation_description">Use 5 of these cards<br/>to find a new recipe?</div>');
				$('.single_tinker_container').append('<div class="tinker_confirmation_button" onclick="tinker_current()">TINKER</div>');
			}
			else
			{
				$('.single_tinker_container').append('<div class="tinker_confirmation_description">You need 5 of these cards<br/>to find a new recipe.</div>');
			}
			var parsed_possible_new_recipes = '';
			var parsed_possible_new_recipes_count = 0;
			$.each(possible_new_recipes, function(new_recipe_id, useless_data){
				if(parsed_possible_new_recipes_count < 12)
				{
					parsed_possible_new_recipes += '<div onclick="show_card_details(\'' + new_recipe_id + '\')">' + parse_card(new_recipe_id) + '</div>';
				}
				parsed_possible_new_recipes_count++;
			});
			$('.single_tinker_container').append('<div class="craftable_with_this"><span class="craftable_with_this_title">Based on what you have discovered so far, you can discover the following recipes:</span><br/>' + parsed_possible_new_recipes + '</div>');
		}
	}
}

function set_tinker_page(amount){
	current_tinker_page += amount;
	if(current_tinker_page < 1){current_tinker_page = 1;}
	show_tinker();
};

function tinker_current(){
	var owned_amount = 0;
	if(gamedata['owned_cards'][current_tinker] != undefined)
	{
		owned_amount = gamedata['owned_cards'][current_tinker];
	}
	if(all_available_cards[current_tinker] == undefined || owned_amount < 5)
	{
		show_content('tinker');
	}
	else
	{
		var current_card = all_available_cards[current_tinker];
		$('.tinker_confirmation_description').remove();
		$('.tinker_confirmation_button').remove();
		$('.single_tinker_container .craftable_with_this').remove();
		
		setTimeout(function(){
			$('.tinker_card_container').html('');
		},500);
		$('.tinker_card_container').css('left','350px');

		var possible_new_recipes = get_possible_tinker_results(current_tinker);

		var total_shows = 14;
		var chosen_recipe = false;
		var show_timeout = 500;
		var card_to_show_id = 0;
		var timeout_speed = 50;
		for (var i = 1; i <= total_shows; i++) {
			var card_to_show = '';
			if(count_object(possible_new_recipes) > 1 || Math.ceil(i / 2) == (i / 2))
			{
				chosen_recipe = get_random_key_from_object(possible_new_recipes);
				card_to_show = parse_card(chosen_recipe);
			}

			var hide_timeout = show_timeout + (timeout_speed * i * 3);

			var hide_it = true;
			if(i == total_shows)
			{
				hide_it = false;
			}
			show_tinker_temp_result(card_to_show, i, show_timeout, hide_it, hide_timeout);
			show_timeout += timeout_speed * i;
		};

		show_timeout += 1000;

		if(chosen_recipe != false)
		{
			gamedata['owned_cards'][current_tinker] -= 5;
			gamedata['known_recipes'][chosen_recipe] = true;
			show_available_cards(false);
			gain_card(chosen_recipe);
			saveToLocalStorage();
			setTimeout(function(){
				show_card_details(chosen_recipe);
				show_single_tinker();
			},show_timeout);
		}
	}
}

function show_tinker_temp_result(card_to_show, card_to_show_id, show_timeout, hide_it, hide_timeout){
	setTimeout(function(){
		$('.tinker_card_container').append('<div class="possible_new_recipe card_to_show_id_' + card_to_show_id + '">' + card_to_show + '</div>');
	}, show_timeout);
	if(hide_it == true)
	{
		setTimeout(function(){
			$('.card_to_show_id_' + card_to_show_id + '').addClass('faded_out');
		}, hide_timeout);
	}
}

function get_possible_tinker_results(card_id){
	var possible_new_recipes = {};
	$.each(all_available_cards, function(current_card_id, current_card_info){
		if(gamedata['known_recipes'][current_card_id] == undefined && current_card_info['recipe'] != undefined && current_card_info['recipe'][card_id] != undefined)
		{
			var can_tinker = true;
			$.each(current_card_info['recipe'], function(recipe_cost_card_id, recipe_cost_amount){
				if(gamedata['known_recipes'][recipe_cost_card_id] == undefined && all_available_cards[recipe_cost_card_id]['recipe'] != undefined)
				{
					can_tinker = false;
				}
			});
			if(can_tinker == true)
			{
				possible_new_recipes[current_card_id] = true;
			}
			
		}
	});
	return possible_new_recipes;
}

function tinker_card(card_id){
	if(gamedata['owned_cards'][card_id] > 4)
	{
		var possible_new_recipes = {};
		$.each(all_available_cards, function(current_card_id, current_card_info){
			if(gamedata['known_recipes'][current_card_id] == undefined && current_card_info['recipe'] != undefined && current_card_info['recipe'][card_id] != undefined)
			{
				var can_tinker = true;
				$.each(current_card_info['recipe'], function(recipe_cost_card_id, recipe_cost_amount){
					if(gamedata['known_recipes'][recipe_cost_card_id] == undefined && all_available_cards[recipe_cost_card_id]['basic_reward'] == undefined)
					{
						can_tinker = false;
					}
				});
				if(can_tinker == true)
				{
					possible_new_recipes[current_card_id] = true;
				}
				
			}
		});

		if(count_object(possible_new_recipes) > 0)
		{
			var chosen_recipe = get_random_key_from_object(possible_new_recipes);
			gamedata['owned_cards'][card_id] -= 5;
			gamedata['known_recipes'][chosen_recipe] = true;
			show_card_details(chosen_recipe);
			show_available_cards(false);
			saveToLocalStorage();
			show_tinker();
		}
	}
};
var current_crafting_page = 1;
var current_craft = '';
var view_tinkerable = false;
var cards_per_crafting_page = 12;

function show_craft(){
	if(gamedata['known_recipes'] == undefined){
		gamedata['known_recipes'] = {};
		saveToLocalStorage();
	}

	$('.tinker_view').show();

	gamedata['known_recipes'] = sortObj(gamedata['known_recipes']);

	$('.craft_container').html('<span class="no_tinker">Use tinkering to find recipes</span>');
	$('.carft_back_button').hide();
	$('.craft_home_button').show();
	$('.craft_button').hide();

	var tinkering_list = '';
	var cards_displayed = 0;

	$.each(gamedata['known_recipes'], function(recipe_id, amount){
		
		var card_filtered = false;

		if(all_available_cards[recipe_id]['recipe'] == undefined)
		{
			card_filtered = true;
		}

		if(card_filtered == false && check_filters(recipe_id) == false)
		{
			
			var can_craft = true;
			$.each(all_available_cards[recipe_id]['recipe'], function(card_cost_id, cost_amount){
				if(gamedata['owned_cards'][card_cost_id] == undefined || gamedata['owned_cards'][card_cost_id] < cost_amount)
				{
					can_craft = false;
				}
			});
			
			

			var possible_tinker_count = 0;
			$.each(all_available_cards, function(current_card_id, current_card_info){
				if(gamedata['known_recipes'][current_card_id] == undefined && current_card_info['recipe'] != undefined && typeof(current_card_info['recipe']) == 'object' && current_card_info['recipe'][recipe_id] != undefined)
				{
					var can_tinker = true;
					$.each(current_card_info['recipe'], function(recipe_cost_card_id, recipe_cost_amount){
						if(gamedata['known_recipes'][recipe_cost_card_id] == undefined && all_available_cards[recipe_cost_card_id]['recipe'] != undefined && all_available_cards[recipe_cost_card_id]['basic_reward'] == undefined)
						{
							can_tinker = false;
						}
					});
					if(can_tinker == true)
					{
						possible_tinker_count++;
					}
				}
			});
			
			if(possible_tinker_count > 0 || view_tinkerable == false)
			{
				cards_displayed ++;
				if(cards_displayed > (current_crafting_page * cards_per_crafting_page) - cards_per_crafting_page && cards_displayed <= current_crafting_page * cards_per_crafting_page)
				{
					var owned_amount = 0;
					if(gamedata['owned_cards'][recipe_id] != undefined && gamedata['owned_cards'][recipe_id] > 0)
					{
						owned_amount = gamedata['owned_cards'][recipe_id];
					}
					/*if(possible_tinker_count > 0)
					{
						var parsed_card = parse_card(recipe_id, owned_amount + ' (' + possible_tinker_count + ')');
					}
					else
					{*/
						var parsed_card = parse_card(recipe_id, owned_amount);
					/*}*/
					
					tinkering_list += '<span class="can_craft_' + can_craft + '" onclick="show_card_recipe(\'' + recipe_id + '\')">' + parsed_card + '</span>';
				}
			}
			else
			{
				//cards_displayed--;
			}
			
			
		}
	});

	if(cards_displayed > cards_per_crafting_page)
	{
		$('#content_craft .page_selection').show();
		if(current_crafting_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / cards_per_crafting_page <= current_crafting_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_crafting_page + ' / ' + Math.ceil(cards_displayed / cards_per_crafting_page));
	}
	else
	{
		$('#content_craft .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / cards_per_crafting_page) < current_crafting_page)
	{
		current_crafting_page = 1;
		show_craft();
	}
	else
	{
		if(tinkering_list != '')
		{
			$('.craft_container').html('<div class="tinkering_list">' + tinkering_list + '</div>');
		}
	}
};

function set_crafting_page(amount){
	current_crafting_page += amount;
	if(current_crafting_page < 1){current_crafting_page = 1;}
	show_craft();
};

function show_card_recipe(recipe_id){
	$('.craft_container').html('');
	$('.tinker_view').hide();
	$('#content_craft .page_selection').hide();
	gamedata['known_recipes'] = sortObj(gamedata['known_recipes']);

	current_craft = recipe_id;

	var recipe_details = '';
	var can_craft = true;
	var recipe_cost_count = count_object(all_available_cards[recipe_id]['recipe']);
	$('.craft_container').removeClass('cost_1');
	$('.craft_container').removeClass('cost_2');
	$('.craft_container').removeClass('cost_3');
	$('.craft_container').removeClass('cost_4');
	$('.craft_container').addClass('cost_' + recipe_cost_count);

	var costs_just_peasants = true;

	$.each(all_available_cards[recipe_id]['recipe'], function(card_cost_id, cost_amount){
		if(card_cost_id != 'peasant'){costs_just_peasants = false;}
		var parsed_cost_card = '';
		
		parsed_cost_card += '<div class="single_cost_container">';
		if(gamedata['owned_cards'][card_cost_id] == undefined || gamedata['owned_cards'][card_cost_id] < cost_amount)
		{
			can_craft = false;
			var owned_amount = gamedata['owned_cards'][card_cost_id];
			if(owned_amount == undefined)
			{
				owned_amount = 0;
			}
			parsed_cost_card += '<div class="craft_not_enough"  onclick="show_card_details(\'' + card_cost_id + '\')">' + parse_card(card_cost_id, '<span style="color:rgba(255,0,0,1)">' + owned_amount + '</span>/' + cost_amount) + '</div>';
		}
		else
		{
			parsed_cost_card += '<div class=""  onclick="show_card_details(\'' + card_cost_id + '\')">' + parse_card(card_cost_id, gamedata['owned_cards'][card_cost_id] + '/' + cost_amount) + '</div>';
		}
		if(gamedata['known_recipes'][card_cost_id] != undefined && all_available_cards[card_cost_id]['recipe'] != undefined)
		{
			parsed_cost_card += '<div class="menu_button slim recipe_button" no-new-page="true" onclick="show_card_recipe(\'' + card_cost_id + '\')">RECIPE</div>';
		}
		parsed_cost_card += '</div>';
		recipe_details += parsed_cost_card;
	});
	recipe_details += '<br/>';
	var owned_result = gamedata['owned_cards'][recipe_id];
	if(owned_result == undefined){owned_result = 0;}
	recipe_details += '<div class="recipe_result active" onclick="show_card_details(\'' + recipe_id + '\')">' + parse_card(recipe_id, owned_result) + '</div>';
	if(all_available_cards[recipe_id]['hero_version'] != undefined){
		recipe_details += '<div class="recipe_hero_result" onclick="show_card_details(\'' + recipe_id + '\', true)">' + parse_card(recipe_id, owned_result, true) + '</div>';
		recipe_details += '<div class="swap_hero_button" onclick="swap_hero_preview()">SWAP CARDS</div>'
	};
	recipe_details += '<br/>';
	if(can_craft == true)
	{
		recipe_details += '<div class="menu_button slim craft_button" onclick="craft_current_card()" no-new-page="true">CRAFT</div><br/>';
	}
	else
	{
		recipe_details += '<div class="menu_button slim craft_button not_enough" no-new-page="true">CRAFT</div><br/>';
	}
	if(costs_just_peasants == false && get_upgrade_factor('quick_craft', 'any', true) > 1)
	{
		if(gamedata['owned_cards']['peasant'] >= all_available_cards[recipe_id]['value'])
		{
			recipe_details += '<br/><div class="menu_button slim craft_button" onclick="quick_craft_current_card()" no-new-page="true">QUICK CRAFT<br/><span>(' + nFormatter(gamedata['owned_cards']['peasant'], 3) + ' / ' + all_available_cards[recipe_id]['value'] + ' peasants)</span></div>';
		}
		else
		{
			recipe_details += '<br/><div class="menu_button slim craft_button" no-new-page="true">QUICK CRAFT<br/><span class="button_subtext not_enough">(' + nFormatter(gamedata['owned_cards']['peasant'], 3) + ' / ' + all_available_cards[recipe_id]['value'] + ' peasants)</span></div>';
		}
	}

	var possible_tinker_count = 0;
	var max_recipes = 0;
	$.each(all_available_cards, function(current_card_id, current_card_info){
		if(gamedata['known_recipes'][current_card_id] == undefined && current_card_info['recipe'] != undefined && typeof(current_card_info['recipe']) == 'object' && current_card_info['recipe'][recipe_id] != undefined)
		{
			var can_tinker = true;
			$.each(current_card_info['recipe'], function(recipe_cost_card_id, recipe_cost_amount){
				if(gamedata['known_recipes'][recipe_cost_card_id] == undefined && all_available_cards[recipe_cost_card_id]['recipe'] != undefined)
				{
					can_tinker = false;
				}
			});
			if(can_tinker == true)
			{
				possible_tinker_count++;
			}
			max_recipes++;
		}
	});

	/*if(max_recipes > 0)
	{
		recipe_details += '<div class="max_tinker">You can currently discover ' + possible_tinker_count + ' new recipes out of the ' + max_recipes + ' unknown recipes with this card.</div>';
	}*/

	
	var craftable_with_this = 0;
	var parsed_craftable_with_this = ''
	$.each(gamedata['known_recipes'], function(known_recipe_id, useless_info){
		if(all_available_cards[known_recipe_id]['recipe'] != undefined && all_available_cards[known_recipe_id]['recipe'][recipe_id] != undefined)
		{
			craftable_with_this++;
			if(craftable_with_this < 900)
			{
				var parsed_card = parse_card(known_recipe_id);
				parsed_craftable_with_this += '<span onclick="show_card_recipe(\'' + known_recipe_id + '\')">' + parsed_card + '</span>';
			}
		}
	});
	if(craftable_with_this > 0)
	{
		recipe_details += '<div class="craftable_with_this">';
		if(craftable_with_this > 800)
		{
			recipe_details += '<div class="craftable_with_this_title">This card can be used to craft these and ' + (craftable_with_this - 8) + ' more:</div>';
		}
		else
		{
			recipe_details += '<div class="craftable_with_this_title">This card can be used to craft:</div>';
		}
		
		recipe_details += parsed_craftable_with_this;
		recipe_details += '</div>';
	}
	
	$('.craft_container').html(recipe_details);

	/*if(can_craft == true)
	{
		$('.craft_button').show();
	}
	else
	{
		$('.craft_button').hide();
	}*/
	$('.carft_back_button').show();
	$('.craft_home_button').hide();
	if(all_available_cards[recipe_id]['recipe'] == undefined)
	{
		show_content('craft');
	}
}

function swap_hero_preview(){
	if($('.recipe_result').hasClass('active'))
	{
		$('.recipe_result').removeClass('active');
		$('.recipe_hero_result').addClass('active');
	}
	else
	{
		$('.recipe_result').addClass('active');
		$('.recipe_hero_result').removeClass('active');
	}
}

function craft_current_card(){
	var card_id = current_craft;
	//console.log(card_id);
	if(all_available_cards[card_id] != undefined)
	{
		var can_craft = true;
		$.each(all_available_cards[card_id]['recipe'], function(card_cost_id, cost_amount){
			if(gamedata['owned_cards'][card_cost_id] == undefined || gamedata['owned_cards'][card_cost_id] < cost_amount)
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			$.each(all_available_cards[card_id]['recipe'], function(card_cost_id, cost_amount){
				gamedata['owned_cards'][card_cost_id] -= cost_amount;
			});
			gain_card(card_id);
			check_quests('craft_card_of_value', all_available_cards[card_id]['value']);
			
			show_available_cards(false);
			saveToLocalStorage();
			//show_card_details(card_id);
			
		}
		show_card_recipe(card_id);
	}
};

function quick_craft_current_card(){
	var card_id = current_craft;
	//console.log(card_id);
	if(gamedata['owned_cards']['peasant'] >= all_available_cards[card_id]['value'])
	{
		gamedata['owned_cards']['peasant'] -= all_available_cards[card_id]['value'];
		gain_card(card_id);
		check_quests('craft_card_of_value', all_available_cards[card_id]['value']);
		show_available_cards(false);
		saveToLocalStorage();
		show_card_recipe(card_id);
	}
};

function toggle_tinker_view_mode(){
	$('.tinker_view div').removeClass('active');
	

	if(view_tinkerable == true)
	{
		
		$('.tinker_view .tinker_view_slider').addClass('viewing');
		$('.tinker_view .select_all').addClass('active');
		view_tinkerable = false;
	}
	else
	{
		$('.tinker_view .tinker_view_slider').removeClass('viewing');
		$('.tinker_view .select_tinkerable').addClass('active');
		view_tinkerable = true;
	}
	show_craft();
}
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

var shown_achievement_options = {
	all: 	true,
	busy: 	true,
	complete: 	true,
	done: 	true,
}

var logged_achieve = 0;

function toggle_shown_achievements(){
	var next_toggle = '';
	var current_toggle_found = false;
	$.each(shown_achievement_options, function(option_id, option_value){
		if(next_toggle == ''){next_toggle = option_id + '';}
		if(current_toggle_found == true)
		{
			next_toggle = option_id + '';
			current_toggle_found = false;
		}
		if(option_id == gamedata['shown_achievements']){current_toggle_found = true;}
	});
	gamedata['shown_achievements'] = next_toggle;
	show_achievements();
}

function show_quests(){

	check_new_quests();
	var quests_shown = 0;

	$('.current_quest_container').html('');
	$.each(gamedata['quests'], function(current_quest_id, current_quest_info){
		if(all_quests[current_quest_info['quest_id']] == undefined)
		{
			//delete gamedata['quests'][current_quest_id];
			console.log('unknown quest: ' + current_quest_id);
			check_new_quests();
		}
		else
		{
			quests_shown++;
			var quest_info = all_quests[current_quest_info['quest_id']];
			var quest_complete = '';
			if(current_quest_info['progress'] >= current_quest_info['amount'])
			{
				quest_complete = 'complete';
			}
			var parsed_quest = '<div class="single_quest ' + quest_complete + '">';
			if(current_quest_info['completed'] == undefined || current_quest_info['completed'] == false)
			{
				//console.log(current_quest_info);
				if(quest_info['image'] != undefined)
				{
				    var image_position = '';
				    if(quest_info['image_position'] != undefined)
				    {
				        image_position = 'background-position:' + quest_info['image_position'] + ';';
				    }
					parsed_quest += '<div class="background" style="' + image_position + 'background-image:url(images/' + quest_info['image'] + ')"></div>';
				}
				var progress_percent = 100 - ((current_quest_info['progress'] / current_quest_info['amount']) * 100);
				parsed_quest += '<div class="progress_bar" style="width:' + progress_percent + '%"></div>';
				parsed_quest += '<div class="single_quest_name">' + capitalizeFirstLetter(quest_info['name']) + '</div>';
				parsed_quest += '<div class="single_quest_description">';
				
				if(quest_complete != 'complete')
				{
					parsed_quest += check_plural(quest_info['description'].split("{AMOUNT}").join(current_quest_info['amount']), current_quest_info['amount']) + '<br/>';
					parsed_quest += 'Progress: ' + current_quest_info['progress'];
				}
				else
				{
					parsed_quest += '<div class="claim_quest_button" onclick="claim_quest(' + current_quest_id + ')">CLAIM REWARD</div>';
				}
				parsed_quest += '</div>';

				parsed_quest += '<div class="single_quest_reward_title">Reward:</div>';
				parsed_quest += 	'<div class="single_quest_reward_container">';
				$.each(current_quest_info['rewards'], function(reward_type, reward_info){
					//reward_info = (reward_info * get_upgrade_factor('summon_reward', 'any', true));
					var scrap_amount = reward_info;
					if(reward_type == 'scraps')
					{
						//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
						if(scrap_amount == 1)
						{
							parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scrap</div>';
						}
						else
						{
							parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scraps</div>';
						}
						
					}
					if(reward_type == 'reputation')
					{
						//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
						parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' reputation</div>';
					}
					if(all_available_cards[reward_type] != undefined)
					{
						//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
						if(scrap_amount == 1)
						{
							parsed_quest += '<div class="single_quest_reward">' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
						}
						else
						{
							parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' x ' + (all_available_cards[reward_type]['name']) + '</div>';	
						}
									
					}
				});
				parsed_quest += 	"</div>";
			}
			parsed_quest += "</div>";

			$('.current_quest_container').append(parsed_quest);
		}
	});
	if(quests_shown < 6 && count_object(all_quests) > 5)
	{
		show_quests();
	}
}

function show_daily_quests(){

	check_new_quests();
	var current_time = new Date();
	var last_midnight = new Date();
	var next_midnight = new Date();
	last_midnight.setHours(0,0,0,0);
	next_midnight.setHours(24,0,0,0);

	$('.current_daily_quest_container').html('');
	$.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
		if(all_quests[current_quest_info['quest_id']] == undefined)
		{
			//delete gamedata['daily_quests'][current_quest_id];
			console.log('unknown daily quest: ' + current_quest_id);
			check_new_quests();
		}
		var quest_info = all_quests[current_quest_info['quest_id']];
		var quest_complete = '';
		var quest_claimed = '';
		if(current_quest_info['progress'] >= current_quest_info['amount'])
		{
			quest_complete = 'complete';
		}
		if(current_quest_info['completed'] != false)
		{
			quest_claimed = 'claimed';
		}
		var parsed_quest = '<div class="single_quest ' + quest_complete + ' ' + quest_claimed + '">';
		
		if(quest_info['image'] != undefined)
		{
		    var image_position = '';
		    if(quest_info['image_position'] != undefined)
		    {
		        image_position = 'background-position:' + quest_info['image_position'] + ';';
		    }
			parsed_quest += '<div class="background" style="' + image_position + 'background-image:url(images/' + quest_info['image'] + ')"></div>';
		}
		var progress_percent = 100 - ((current_quest_info['progress'] / current_quest_info['amount']) * 100);
		parsed_quest += '<div class="progress_bar" style="width:' + progress_percent + '%"></div>';
		parsed_quest += '<div class="single_quest_name">' + capitalizeFirstLetter(quest_info['name']) + '</div>';
		parsed_quest += '<div class="single_quest_description">';
		
		if(quest_complete != 'complete')
		{
			parsed_quest += check_plural(quest_info['description'].split("{AMOUNT}").join(current_quest_info['amount']), current_quest_info['amount']) + '<br/>';
			parsed_quest += 'Progress: ' + current_quest_info['progress'];
		}
		else
		{
			if(current_quest_info['completed'] == false)
			{
				parsed_quest += '<div class="claim_quest_button" onclick="claim_daily_quest(' + current_quest_id + ')">CLAIM<br/>REWARD</div>';
			}
			else
			{
				parsed_quest += check_plural(quest_info['description'].split("{AMOUNT}").join(current_quest_info['amount']), current_quest_info['amount']) + '<br/>';
				parsed_quest += '<span class="claimed_text">CLAIMED</span>';
				//parsed_quest += 'Progress: ' + current_quest_info['progress'];
				/*var time_quest_complete = new Date(current_quest_info['completed']);
				var reset_time = (next_midnight.getTime() - current_time.getTime());
				var hh = Math.floor(reset_time / 1000 / 60 / 60);
				if(hh > 0)
				{
					parsed_quest += '<span class="claimed_text">CLAIMED</span><br/>Will reset in ' + hh + ' hours';
				}
				else
				{
					parsed_quest += '<span class="claimed_text">CLAIMED</span><br/>Will reset in less then an hour';
				}*/
			}
		}
		parsed_quest += '</div>';

		parsed_quest += '<div class="single_quest_reward_title">Reward:</div>';
		parsed_quest += 	'<div class="single_quest_reward_container">';
		$.each(quest_info['rewards'], function(reward_type, reward_info){
			reward_info = (reward_info * get_upgrade_factor('summon_reward', 'any', true));
			if(reward_type == 'scraps')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				if(scrap_amount == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scrap</div>';
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scraps</div>';
				}
				
			}
			if(all_available_cards[reward_type] != undefined)
			{
				reward_info = Math.floor(reward_info);
				if(reward_info == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + reward_info + ' x ' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
				}
							
			}
		});
		/*$.each(quest_info['reward_per_amount'], function(reward_type, reward_info){	
			if(reward_type == 'scraps')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				if(scrap_amount == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scrap</div>';
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' scraps</div>';
				}
				
			}
			if(reward_type == 'reputation')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' reputation</div>';
			}
			if(all_available_cards[reward_type] != undefined)
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				if(scrap_amount == 1)
				{
					parsed_quest += '<div class="single_quest_reward">' + capitalizeFirstLetter(all_available_cards[reward_type]['name']) + '</div>';	
				}
				else
				{
					parsed_quest += '<div class="single_quest_reward">' + scrap_amount + ' x ' + (all_available_cards[reward_type]['name']) + '</div>';	
				}
							
			}
		});*/
		parsed_quest += 	"</div>";
		
		parsed_quest += "</div>";

		$('.current_daily_quest_container').append(parsed_quest);
	});

	var reset_time = (next_midnight.getTime() - current_time.getTime());
	$('.current_daily_quest_container').append('<div class="quests_reset_time">All quests will reset in: <span class="timer" data-complete-time="' + next_midnight.getTime() + '"></span></div>');
	update_all_timers();
	if(reset_time < 0)
	{
		show_daily_quests();
	}
}

function check_new_quests(show_new_message){
	if(gamedata['quests'] == undefined)
	{
		gamedata['quests'] = {};
	}

	if(gamedata['daily_quests'] == undefined)
	{
		gamedata['daily_quests'] = {};
	}

	var current_quest_count = count_object(gamedata['quests']);

	for(var i = 1; i <= 6; i++)
	{
		if(gamedata['quests'][i] == undefined)
		{
			var possible_quests = {};
			$.each(all_quests, function(quest_id, quest_info){
				var can_choose = true;
				$.each(gamedata['quests'], function(current_quest_id, current_quest_info){
					if(quest_id == current_quest_info['quest_id'])
					{
						can_choose = false;
					}
				});
				if(can_choose == true)
				{
					possible_quests[quest_id] = true;
				}
			});
			if(count_object(possible_quests) > 0)
			{
				var new_quest_id = get_random_key_from_object(possible_quests);
				var quest_amount = Math.ceil((Math.random() * (all_quests[new_quest_id]['max_amount'] - (all_quests[new_quest_id]['min_amount'] / 2)) * get_upgrade_factor('quest_amount', 'any', true) * 1) + (all_quests[new_quest_id]['min_amount'] / 2));
				var chosen_reward = get_random_key_from_object_based_on_num_value(random_loot_drops);
				//console.log(chosen_reward);
				var chosen_reward_amount = all_quests[new_quest_id]['reward_per_amount']['scraps'] * quest_amount * get_upgrade_factor('summon_reward', 'any', true);
				if(Math.random() < 0.25 || all_available_cards[chosen_reward]['value'] > chosen_reward_amount / 10)
				{
					chosen_reward = 'scraps';
					chosen_reward_amount = Math.floor(chosen_reward_amount);
				}
				else
				{
					chosen_reward_amount = Math.floor(chosen_reward_amount / all_available_cards[chosen_reward]['value'] / 10);
					if(chosen_reward_amount < 1){chosen_reward_amount = 1;}
				}
				gamedata['quests'][i] = {
					quest_id: 	new_quest_id,
					amount: 	quest_amount,
					progress: 	0,
					completed: 	false,
					rewards:{},
				}
				gamedata['quests'][i]['rewards'][chosen_reward] = chosen_reward_amount;
				saveToLocalStorage();
			}
		}
	}
	var last_midnight = new Date();
	last_midnight.setHours(0,0,0,0);
	for(var i = 1; i <= 6; i++)
	{
		if(gamedata['daily_quests'][i] != undefined && all_quests[gamedata['daily_quests'][i]['quest_id']] == undefined)
		{
			console.log('unknown daily quest: ' + current_quest_id);
			//delete gamedata['daily_quests'][i];
		}
	}
	for(var i = 1; i <= 6; i++)
	{
		if(gamedata['daily_quests'][i] == undefined || (gamedata['daily_quests'][i]['completed'] != false && new Date(gamedata['daily_quests'][i]['completed']) < last_midnight))
		{
			var possible_quests = {};
			$.each(all_quests, function(quest_id, quest_info){
				var can_choose = true;
				$.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
					if(quest_id == current_quest_info['quest_id'])
					{
						can_choose = false;
					}
				});
				if(can_choose == true)
				{
					possible_quests[quest_id] = true;
				}
			});
			if(count_object(possible_quests) > 0)
			{
				var new_quest_id = get_random_key_from_object(possible_quests);
				gamedata['daily_quests'][i] = {
					quest_id: 	new_quest_id,
					amount: 	Math.floor(Math.random() * (all_quests[new_quest_id]['max_amount'] - all_quests[new_quest_id]['min_amount']) + all_quests[new_quest_id]['min_amount']) * 3,
					progress: 	0,
					completed: 	false,
				}
				if(show_new_message != undefined && show_new_message == true)
				{
					var total_message = '';
					total_message += '<span class="message_title">New quest: ' + all_quests[new_quest_id]['name'] + '</span>';
					show_message(total_message);
				}
				saveToLocalStorage();
			}
		}
	}
}

var all_achievement_goals = {};

function check_achievement_goals(){
	if(count_object(all_achievement_goals) == 0)
	{
		$.each(all_achievements, function(achievement_id, achievement_info){
			if(achievement_info['objective'] != undefined)
			{
				if(typeof(achievement_info['objective']) == 'string')
				{
					if(all_achievement_goals[achievement_info['objective']] == undefined)
					{
						all_achievement_goals[achievement_info['objective']] = {};
					}
					if(all_achievement_goals[achievement_info['objective']]['achievements'] == undefined)
					{
						all_achievement_goals[achievement_info['objective']]['achievements'] = {};
					}
					all_achievement_goals[achievement_info['objective']]['achievements'][achievement_id] = true;
				}
				else
				{
					$.each(achievement_info['objective'], function(objective_id, objective){
						if(all_achievement_goals[objective] == undefined)
						{
							all_achievement_goals[objective] = {};
						}
						if(all_achievement_goals[objective]['achievements'] == undefined)
						{
							all_achievement_goals[objective]['achievements'] = {};
						}
						all_achievement_goals[objective]['achievements'][achievement_id] = true;
					});
				}
			}
		});
		$.each(all_quests, function(achievement_id, achievement_info){
			if(achievement_info['objective'] != undefined)
			{
				if(typeof(achievement_info['objective']) == 'string')
				{
					if(all_achievement_goals[achievement_info['objective']] == undefined)
					{
						all_achievement_goals[achievement_info['objective']] = {};
					}
					if(all_achievement_goals[achievement_info['objective']]['quests'] == undefined)
					{
						all_achievement_goals[achievement_info['objective']]['quests'] = {};
					}
					all_achievement_goals[achievement_info['objective']]['quests'][achievement_id] = true;
				}
				else
				{
					$.each(achievement_info['objective'], function(objective_id, objective){
						if(all_achievement_goals[objective] == undefined)
						{
							all_achievement_goals[objective] = {};
						}
						if(all_achievement_goals[objective]['quests'] == undefined)
						{
							all_achievement_goals[objective]['quests'] = {};
						}
						all_achievement_goals[objective]['quests'][achievement_id] = true;
					});
				}
			}
		});
	}
}

function check_quests(string, achieved_amount, achieved_times){

	if(achieved_times == undefined){achieved_times = 1;};

	var possible_strings = [string];
	var possible_strings_key = 1;

	if(count_object(possible_strings) > 0)
	{
		//console.log(possible_strings);
		check_achievement_goals();
		check_new_quests();
		/*if(logged_achieve < 10)
		{
			console.log(possible_strings);
			logged_achieve++;
		}*/
		$.each(possible_strings, function(useless_key, current_string){
			if(all_achievement_goals[current_string] != undefined){
				$.each(gamedata['quests'], function(current_quest_id, current_quest_info){
					if(all_achievement_goals[current_string]['quests'] != undefined && all_achievement_goals[current_string]['quests'][current_quest_info['quest_id']] != undefined){
						if(current_quest_info['progress'] < current_quest_info['amount'] && (current_quest_info['completed'] == undefined || current_quest_info['completed'] == false))
						{
							current_quest_info['progress'] += achieved_times;
							if(current_quest_info['progress'] >= current_quest_info['amount'] && current_quest_info['shown_message'] == undefined)
							{
								current_quest_info['shown_message'] = true;
								var total_message = '';
								total_message += '<span class="message_title">Quest complete: ' + all_quests[current_quest_info['quest_id']]['name'] + '</span>';
								show_message(total_message);
							}
							//saveToLocalStorage();
						}
					}
				});
				$.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
					if(all_achievement_goals[current_string]['quests'] != undefined && all_achievement_goals[current_string]['quests'][current_quest_info['quest_id']] != undefined){
						if(current_quest_info['progress'] < current_quest_info['amount'] && (current_quest_info['completed'] == undefined || current_quest_info['completed'] == false))
						{
							current_quest_info['progress'] += achieved_times;
							if(current_quest_info['progress'] >= current_quest_info['amount'] && current_quest_info['shown_message'] == undefined)
							{
								current_quest_info['shown_message'] = true;
								var total_message = '';
								total_message += '<span class="message_title">Daily quest complete: ' + all_quests[current_quest_info['quest_id']]['name'] + '</span>';
								show_message(total_message);
							}
							//saveToLocalStorage(false);
						}
					}
				});
				$.each(all_achievements, function(achievement_id, achievement_info){
					var achievement_matched = false;
					if(match_array_values(achievement_info['objective'], current_string)){achievement_matched = true;}
					if(match_array_values(achievement_info['objectives'], current_string)){achievement_matched = true;}
					if(achieved_amount != undefined && achievement_matched == true)
					{
						if(achievement_info['max_amount'] != undefined && achieved_amount > achievement_info['max_amount'])
						{
							achievement_matched = false;
						}
						if(achievement_info['min_amount'] != undefined && achieved_amount < achievement_info['min_amount'])
						{
							achievement_matched = false;
						}
						//console.log(achieved_amount);
					}
					if(achievement_matched == true)
					{
						if(gamedata['achievements'][achievement_id] == undefined)
						{
							//console.log(achievement_id);
							gamedata['achievements'][achievement_id] = {
								amount: 		0,
								completed: 		false,
								claimed: 		false,
								date_completed: false
							};
							if(achievement_info['objectives'] != undefined)
							{
								gamedata['achievements'][achievement_id]['amount'] = {};
								$.each(achievement_info['objectives'], function(objective_key, objective_id){
									gamedata['achievements'][achievement_id]['amount'][objective_id] = 0;
								});
							}
						}

						if(gamedata['achievements'][achievement_id]['completed'] == false && gamedata['achievements'][achievement_id]['claimed'] == false)
						{
							var all_objectives_complete = true;
							if(achievement_info['objectives'] != undefined)
							{
								gamedata['achievements'][achievement_id]['amount'][current_string] += achieved_times;
								$.each(achievement_info['objectives'], function(objective_key, objective_id){
									if(gamedata['achievements'][achievement_id]['amount'][objective_id] < achievement_info['amount'])
									{
										all_objectives_complete = false;
									}
								});
							}
							else
							{
								gamedata['achievements'][achievement_id]['amount'] += achieved_times;
								if(gamedata['achievements'][achievement_id]['amount'] < achievement_info['amount'])
								{
									all_objectives_complete = false;
								}
							}

							if(all_objectives_complete == true)
							{
								var total_message = '';
								total_message += '<span class="message_title">Achievement complete: ' + achievement_info['name'] + '</span>';
								show_message(total_message);
							
								gamedata['achievements'][achievement_id]['completed'] = true;
								gamedata['achievements'][achievement_id]['date_completed'] = new Date();
							}
							//saveToLocalStorage(false);
						}
					}
				});
			}
		});
	}
}

function claim_quest(current_quest_id){
	if(gamedata['quests'][current_quest_id] != undefined && gamedata['quests'][current_quest_id]['amount'] <= gamedata['quests'][current_quest_id]['progress'])
	{
		var current_quest_info = gamedata['quests'][current_quest_id];
		all_current_rewards = {};
		current_reward_origin 	= 'quests';
		current_reward_text 	= 'For completing the quest <b>"' + capitalizeFirstLetter(all_quests[current_quest_info['quest_id']]['name']) + '"</b><br/>You have been rewarded with:<br/>';
		$.each(current_quest_info['rewards'], function(reward_type, reward_info){
			//reward_info = (reward_info * get_upgrade_factor('summon_reward', 'any', true));
			//var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
			//gain_scraps(scrap_amount);
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	reward_info,
			}
		});
		/*$.each(all_quests[current_quest_info['quest_id']]['rewards'], function(reward_type, reward_info){
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	reward_info,
			}
		});*/
		/*$.each(all_quests[current_quest_info['quest_id']]['reward_per_amount'], function(reward_type, reward_info){
			if(reward_type == 'scraps')
			{
				var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
				gain_scraps(scrap_amount);
				
			}
		});*/
		delete gamedata['quests'][current_quest_id];
		saveToLocalStorage();
		show_content('current_rewards');
		//show_quests();
	}
}

function claim_daily_quest(current_quest_id){
	if(gamedata['daily_quests'][current_quest_id] != undefined && gamedata['daily_quests'][current_quest_id]['amount'] <= gamedata['daily_quests'][current_quest_id]['progress'] && gamedata['daily_quests'][current_quest_id]['completed'] == false)
	{
		var current_quest_info = gamedata['daily_quests'][current_quest_id];
		all_current_rewards = {};
		current_reward_origin 	= 'daily_quests';
		current_reward_text 	= 'For completing the daily quest <b>"' + capitalizeFirstLetter(all_quests[current_quest_info['quest_id']]['name']) + '"</b><br/>You have been rewarded with:<br/>';
		
		/*$.each(all_quests[current_quest_info['quest_id']]['reward_per_amount'], function(reward_type, reward_info){
			var scrap_amount = Math.ceil(current_quest_info['amount'] * reward_info);
			//gain_scraps(scrap_amount);
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	scrap_amount,
			}
		});*/
		$.each(all_quests[current_quest_info['quest_id']]['rewards'], function(reward_type, reward_info){
			reward_info = Math.floor(reward_info * get_upgrade_factor('summon_reward', 'any', true));
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_type,
				reward_amount: 	reward_info,
			}
		});
		gamedata['daily_quests'][current_quest_id]['completed'] = new Date();
		saveToLocalStorage();
		show_content('current_rewards');
		//show_daily_quests();
	}
}

function check_quest_complete_count(){
	show_daily_reward();
    if(gamedata['quests'] == undefined || gamedata['daily_quests'] == undefined)
	{
		check_new_quests();
	}

	var current_quest_count = count_object(gamedata['quests']);
	if(current_quest_count < 6)
	{
	    check_new_quests();
	}
	
    var quest_complete_count = 0;
    var daily_quest_complete_count = 0;
    var stories_complete_count = 0;
    $.each(gamedata['quests'], function(current_quest_id, current_quest_info){
        if(current_quest_info['progress'] >= current_quest_info['amount'])
		{
			quest_complete_count ++;
		}
    });
    $.each(gamedata['daily_quests'], function(current_quest_id, current_quest_info){
        if(current_quest_info['progress'] >= current_quest_info['amount'] && current_quest_info['completed'] == false)
		{
			//quest_complete_count ++;
			daily_quest_complete_count ++;
		}
    });
    $.each(gamedata['stories'], function(current_quest_id, current_quest_info){
        if(current_quest_info['completed'] == true && current_quest_info['claimed'] == false)
		{
			stories_complete_count ++;
		}
    });
    var achievements_complete = 0;
    $.each(gamedata['achievements'], function(achievement_id, achievement_status){
    	if(all_achievements[achievement_id] == undefined)
    	{
    		console.log('unknown achievement: ' + achievement_id);
    		//delete gamedata['achievements'][achievement_id];
    	}
    	else
    	{
	    	if(achievement_status['completed'] == true && achievement_status['claimed'] == false)
	    	{
	    		achievements_complete++;
	    	}
	    }
    });

    
    if(achievements_complete == 0)
    {
    	$('.achievements_page_button').html('');
    }
    else
    {
    	$('.achievements_page_button').html('&nbsp;!');
    }
    if(quest_complete_count == 0)
    {
        $('.quests_page_button').html('');
    }
    else
    {
        $('.quests_page_button').html('&nbsp;!');
    }
    if(stories_complete_count == 0)
    {
        $('.stories_page_button').html('');
    }
    else
    {
        $('.stories_page_button').html('&nbsp;!');
    }
    if(daily_reward_claimable == false)
    {
    	$('.daily_reward_available').html('');
    }
    else
    {
    	$('.daily_reward_available').html('&nbsp;!');
    }
    if(achievements_complete > 0 || quest_complete_count > 0 || daily_reward_claimable == true || daily_quest_complete_count > 0 || stories_complete_count > 0)
    {
    	$('.quest_button_complete_count').html('&nbsp;!');
    	$('.quest_complete_count').html('!');
    	$('.quest_complete_count').removeClass('hidden');
    }
    else
    {
    	$('.quest_complete_count').html('');
        $('.quest_complete_count').addClass('hidden');
    	$('.quest_button_complete_count').html('');
    }
    if(daily_quest_complete_count > 0)
    {
    	$('.daily_quests_page_button').html('&nbsp;!');
    	
    	$('.daily_quests_complete').html('(' + daily_quest_complete_count + ')');
    }
    else
    {
    	$('.daily_quests_page_button').html('');
    }
    return quest_complete_count + daily_quest_complete_count;
}

var current_achievements_page = 1;
var achievements_per_page = 25;

function show_achievements(){
	if(gamedata['shown_achievements'] == undefined)
	{
		gamedata['shown_achievements'] = 'all';
	}
	$('.achievement_options_button').html(gamedata['shown_achievements']);
	var current_card_number = 0;
	if(gamedata['achievements'] == undefined){gamedata['achievements'] = {};}
	$('.achievements_container').html('');
	$('.achievement_details').html('<span class="no_achievement_text">Select an achievement to view it\'s details.</span>');
	var all_parsed_achievements = '';
	var all_incomplete = '';
	var all_complete = '';
	var all_claimed = '';
	$.each(all_achievements, function(achievement_id, achievement_info){
		var completed = '';
		if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['completed'] == true)
		{
			completed = ' completed';
		}
		var claimed = '';
		if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['claimed'] == true)
		{
			claimed = ' claimed';
		}
		var required_completed = true;
		$.each(achievement_info['needs_completed'], function(needed_achievement_id, useless_info){
			if(gamedata['achievements'][needed_achievement_id] == undefined || gamedata['achievements'][needed_achievement_id]['completed'] == false)
			{
				required_completed = false;
			}
		});
		if(gamedata['shown_achievements'] == 'complete' && (completed == '' || claimed != ''))
		{
			required_completed = false;
		}
		if(gamedata['shown_achievements'] == 'done' && claimed == '')
		{
			required_completed = false;
		}
		if(gamedata['shown_achievements'] == 'busy' && (claimed != '' || completed != ''))
		{
			required_completed = false;
		}
		if(required_completed == true)
		{
			var single_parsed_achievement = '<div class="single_achievement_container">';
			single_parsed_achievement += '<div class="achievement achievement_' + achievement_id + ' ' + completed + claimed + '" onclick="show_achievements_details(\'' + achievement_id + '\')">';
			single_parsed_achievement += 	'<div class="achievement_image" style="background-image:url(images/' + achievement_info['image'] + ');background-position:' + achievement_info['image_position'] + '"></div>';
			
			if(gamedata['achievements'][achievement_id] == undefined || gamedata['achievements'][achievement_id]['completed'] != true)
			{
				var complete_percent = 100;
				if(gamedata['achievements'][achievement_id] != undefined)
				{
					if(typeof(gamedata['achievements'][achievement_id]['amount']) == 'object')
					{
						var temp_achieved_amount = 0;
						var objective_count = 0;
						$.each(gamedata['achievements'][achievement_id]['amount'], function(amount_key, amount_amount){
							if(amount_amount > achievement_info['amount']){amount_amount = achievement_info['amount'];}
							temp_achieved_amount += amount_amount;
							objective_count++;
						});
						complete_percent = 100 - Math.floor(temp_achieved_amount / (achievement_info['amount'] * objective_count) * 100);
					}
					else
					{
						complete_percent = 100 - Math.floor(gamedata['achievements'][achievement_id]['amount'] / achievement_info['amount'] * 100);
					}
				}
				single_parsed_achievement += '<div class="achievement_progress_bar" style="width:' + complete_percent + '%"></div>';
			}
			/*single_parsed_achievement += 	'<div class="achievement_title">' + capitalizeFirstLetter(achievement_info['name']) + '</div>';
			if(completed == '')
			{
				single_parsed_achievement += '<div class="achievement_description">???</div>';
			}
			else
			{
				var completed_date = new Date(gamedata['achievements'][achievement_id]['date_completed']);
				var date = completed_date.getDate()+'-'+(completed_date.getMonth()+1)+'-'+completed_date.getFullYear();
				var time = completed_date.getHours() + ":" + completed_date.getMinutes() + ":" + completed_date.getSeconds();
				var dateTime = date+' '+time;
				single_parsed_achievement += '<div class="achievement_description">' + achievement_info['description'] + '<br/>Progress: ' + numberWithCommas(gamedata['achievements'][achievement_id]['amount']) + ' / ' + numberWithCommas(achievement_info['amount']) + '<br/>Completed on ' + dateTime + '</div>';
			}
			if(completed != '' && claimed == '')
			{
				single_parsed_achievement += 	'<div class="achievement_claim_button" onclick="claim_achievement(\'' + achievement_id + '\')">CLAIM</div>';
			}*/
			
			single_parsed_achievement += '</div></div>';

			if(completed == '')
			{
				all_incomplete += single_parsed_achievement;
			}
			if(completed != '' && claimed == '')
			{
				all_complete += single_parsed_achievement;
			}
			if(completed != '' && claimed != '')
			{
				all_claimed += single_parsed_achievement;
			}
			current_card_number ++;
			if(current_card_number / achievements_per_page > current_achievements_page -1 && current_card_number / achievements_per_page <= current_achievements_page)
			{
				$('.achievements_container').append(single_parsed_achievement);
			}
		}
	});

	//all_parsed_achievements = all_complete + all_claimed + all_incomplete;

	//$('.achievements_container').html(all_parsed_achievements);

	if(current_achievements_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
	if(current_card_number / achievements_per_page <= current_achievements_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
	if(current_card_number > 0 && Math.ceil(current_card_number / achievements_per_page) < current_achievements_page)
	{
		current_achievements_page = 1;
		show_achievements();
	}
	else
	{
		if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_achievements_page + ' / ' + Math.ceil(current_card_number / achievements_per_page));
		if(all_complete != '')
		{
			$('.claim_all_container').show();
		}
		else
		{
			$('.claim_all_container').hide();
		}
	}
}

function set_achievements_page(amount){
	current_achievements_page += amount;
	if(current_achievements_page < 1){current_achievements_page = 1;}
	show_achievements();
}

function show_achievements_details(achievement_id){
	$('.achievement_details').html('');
	var achievement_info = all_achievements[achievement_id];
	var achievement_progress = gamedata['achievements'][achievement_id];

	var completed = '';
	if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['completed'] == true)
	{
		completed = ' completed';
	}
	var claimed = '';
	if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['claimed'] == true)
	{
		claimed = ' claimed';
	}
	var single_parsed_achievement = '';
	var background_pos = '';
	if(achievement_info['image_position'] != undefined){background_pos = ';background-position:' + achievement_info['image_position'];}
	single_parsed_achievement += 	'<div class="achievement_image" style="background-image:url(images/' + achievement_info['image'] + ')' + background_pos + '"></div>';
	single_parsed_achievement += 	'<div class="achievement_title">' + capitalizeFirstLetter(achievement_info['name']) + '</div>';
	if(completed == '' && (achievement_info['hide_details'] != undefined || achievement_info['hide_details'] == false))
	{
		single_parsed_achievement += '<div class="achievement_description">???</div>';
	}
	else
	{	
		var current_progress = 0;
		if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['amount'] != undefined)
		{
			current_progress = gamedata['achievements'][achievement_id]['amount'];
		}
		single_parsed_achievement += '<div class="achievement_description">' + achievement_info['description'] + '<br/><br/>';
		if(completed == '' && (achievement_info['hide_amount'] == undefined || achievement_info['hide_amount'] == false))
		{
			single_parsed_achievement += 'Progress: ' + numberWithCommas(current_progress) + ' / ' + numberWithCommas(achievement_info['amount']) + '<br/>';
		}	
		single_parsed_achievement += '</div>';
	}
	if(completed != '' && claimed != '')
	{
		var completed_date = new Date(gamedata['achievements'][achievement_id]['date_completed']);
		var date = completed_date.getDate()+'-'+(completed_date.getMonth()+1)+'-'+completed_date.getFullYear();
		var time = completed_date.getHours() + ":" + completed_date.getMinutes() + ":" + completed_date.getSeconds();
		var dateTime = date/*+' '+time*/;
		single_parsed_achievement += '<div class="completed_on">Completed on: ' + dateTime + '</div>';
	}
	if(completed != '' && claimed == '')
	{
		single_parsed_achievement += 	'<div class="achievement_claim_button" onclick="claim_achievement(\'' + achievement_id + '\')">CLAIM</div>';
	}
	

	$('.achievement_details').html(single_parsed_achievement);
	$('.claim_all_container').hide();
}

function open_achievement(achievement_id){
	$('.achievement').not('.achievement_' + achievement_id).removeClass('open');
	if($('.achievement_' + achievement_id).hasClass('open'))
	{
		$('.achievement_' + achievement_id).removeClass('open');
	}
	else
	{
		$('.achievement_' + achievement_id).addClass('open');
	}
	
}

function claim_all_achievements(){
	all_current_rewards = {};
	var claimed_amount = 0;
	$.each(gamedata['achievements'], function(achievement_id, progress){
		var current_achievement = all_achievements[achievement_id];
		if(progress['completed'] == true && progress['claimed'] == false)
		{
			claimed_amount++;
			progress['claimed'] = true;
			$.each(current_achievement['rewards'], function(reward_id, reward_info){
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {reward_id:reward_info['reward_id'],reward_amount:reward_info['reward_amount']};
			});
		}
	});
	if(count_object(all_current_rewards) > 0)
	{
		current_reward_origin 	= 'achievements';
		current_reward_text 	= check_plural('For completing ' + claimed_amount + ' achievement(s)<br/>You have been rewarded with:<br/>', claimed_amount);
		saveToLocalStorage();
		//show_content('current_rewards');
	}
}

function claim_achievement(achievement_id){
	var current_achievement = all_achievements[achievement_id];
	var progress = gamedata['achievements'][achievement_id];

	if(progress['completed'] == true && progress['claimed'] == false)
	{
		progress['claimed'] = true;
		all_current_rewards = current_achievement['rewards'];
		current_reward_origin 	= 'achievements';
		current_reward_text 	= 'For completing the achievement <b>"' + capitalizeFirstLetter(current_achievement['name']) + '"</b><br/>You have been rewarded with:<br/>';
		saveToLocalStorage();
		show_content('current_rewards');
	}
}

function get_completed_achievement_count(){
	var completed_achievement_count = 0;
	$.each(gamedata['achievements'], function(achievement_id, progress){
		if(progress['completed'] == true)
		{
			completed_achievement_count++;
		}
	});
	return completed_achievement_count;
}

function complete_random_daily(){
	var temp_daily_quests = {};
	$.each(gamedata['daily_quests'], function(quest_id, quest_info){
		if(quest_info['completed'] == false && quest_info['progress'] < quest_info['amount'])
		{
			temp_daily_quests[quest_id] = true;
		}
	});
	if(count_object(temp_daily_quests) > 0)
	{
		var chosen_daily = get_random_key_from_object(temp_daily_quests);
		console.log('ding');
		gamedata['daily_quests'][chosen_daily]['progress'] = gamedata['daily_quests'][chosen_daily]['amount'];
		saveToLocalStorage();
		show_daily_quests();
		check_quest_complete_count();
		return true;
	}
	else
	{
		return false;
	}
}

function reset_daily_quests(){
	delete gamedata['daily_quests'];
	show_daily_quests();
	check_quest_complete_count();
}

function reset_radnom_daily_quest(){
	var temp_daily_quests = {};
	$.each(gamedata['daily_quests'], function(quest_id, quest_info){
		if(quest_info['completed'] != false)
		{
			temp_daily_quests[quest_id] = true;
		}
	});
	if(count_object(temp_daily_quests) > 0)
	{
		var chosen_daily = get_random_key_from_object(temp_daily_quests);
		delete gamedata['daily_quests'][chosen_daily];
		check_new_quests(true);
		return true;
	}
	else
	{
		return false;
	}
}

function reset_achievements(){
	if(gamedata['achievements'] != undefined)
	{
		$.each(all_achievements, function(achievement_id, achievement_info){
			if(gamedata['achievements'][achievement_id] != undefined && gamedata['achievements'][achievement_id]['completed'] == true)
			{
			}
			else
			{
				if(gamedata['achievements'][achievement_id] != undefined && achievement_info['reset_if_incomplete'] != undefined && achievement_info['reset_if_incomplete'] == true)
				{
					gamedata['achievements'][achievement_id]['amount'] = 0;
					if(achievement_info['objectives'] != undefined)
					{
						gamedata['achievements'][achievement_id]['amount'] = {};
						$.each(achievement_info['objectives'], function(objective_key, objective_id){
							gamedata['achievements'][achievement_id]['amount'][objective_id] = 0;
						});
					}
				}
			}
		});
	}
};
function show_arena(){
	$('.current_arena_container').html('<div class="loading_arena">Loading arena</div>');
	//$('.king_of_the_hill_button').addClass('hidden');
	$('.refresh_button').addClass('hidden');
	
	get_fightable_arena_decks();
}

function show_echoes(){
	$('.current_arena_container').html('<div class="loading_arena">Loading arena</div>');
	//$('.king_of_the_hill_button').addClass('hidden');
	$('.refresh_button').addClass('hidden');
	
	get_fightable_echo_decks();
}

function show_arena_decks(){
	$('.current_arena_decks_container').html('<div class="loading_arena_decks">Loading your decks</div>');

	get_owned_arena_decks();
}

function get_owned_arena_decks(){
	$.post("ajax.php",
	{
		data: 			'get_owned_arena_decks',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		//console.log(result);
		all_owned_decks = JSON.parse(result);

		parse_owned_decks(all_owned_decks);
	});
};

function parse_owned_decks(all_owned_decks){
	if(gamedata['arena_decks_owned'] == undefined)
	{
		gamedata['arena_decks_owned'] = false;
	}
	var parsed_decks = '';
	for (var i = 1; i <= 5; i++) {
		parsed_decks += '<div class="owned_deck_container">';
			var deck_found = false;
			var unclaimed = 0;
			var deck_id = 0;
			var deck_broken = false;
			$.each(all_owned_decks, function(array_key, deck_info){
				if(deck_info['deck_id'] == i)
				{
					if(calculate_scrap_reward(deck_info['wins'], deck_info['losses']) < 2 || deck_info['losses'] > 9)
					{
						deck_broken = true;
					}
					unclaimed = deck_info['unclaimed'];
					deck_id = deck_info['id'];
					deck_info['deck_content'] = JSON.parse(deck_info['deck_content']);
					if(deck_info['deck_content']['hero'] != undefined)
					{
						parsed_decks += '<div class="owned_deck owned_deck_' + i + '">';
						parsed_decks += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_info['deck_content']['hero']]['image'] + ')"></div>';
						parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '</span>';
						parsed_decks += 	'<div class="wins_losses">Rank ' + (parseInt(deck_info['rank']) + 1) + '<br/>Battles: ' + deck_info['wins'] + '<br/>Losses: ' + deck_info['losses'] + '';
							if(deck_info['unclaimed'] > 0)
							{
								parsed_decks += '<br/><br/>Scraps won: ' + (deck_info['unclaimed'] * 2);
							}
							else
							{
							    parsed_decks += '<br/><br/><br/>';
							}

						parsed_decks +=  	'</div>';
						parsed_decks +=  	'<div class="arena_deck_content">';
						$.each(deck_info['deck_content'], function(card_id, card_amount){
							if(card_id != 'hero' && all_available_cards[card_id] != undefined)
							{
								parsed_decks +=  	'<div class="arena_deck_content_line">';
								parsed_decks +=  	card_amount + ' ' + all_available_cards[card_id]['name'];
								parsed_decks +=  	'</div>';
							}
						});
						parsed_decks +=  	'</div>';
						if(deck_broken == true)
						{
							parsed_decks += '<div class="arena_deck_broken">BROKEN</div>';
						}
						parsed_decks += '</div>';
						deck_found = true;
						gamedata['arena_decks_owned'] = true;
					}
					
				}
			});
			if(deck_found == false)
			{
				parsed_decks += '<div class="owned_deck empty_deck owned_deck_' + i + '">EMPTY</div>';
			}
			if(deck_broken == true)
			{
				parsed_decks += '<div class="replace_deck_button replace_now" onclick="replace_deck(' + i + ')">REPLACE</div>';
			}
			else
			{
				parsed_decks += '<div class="replace_deck_button" onclick="replace_deck(' + i + ')">REPLACE</div>';
			}
			if(deck_found == true && unclaimed > 0 && deck_id > 0)
			{
				parsed_decks += '<div class="replace_deck_button" onclick="claim_deck(' + deck_id + ')">CLAIM</div>';
			}
		parsed_decks += '</div>';
	};
	if(count_object(all_owned_decks) > 0 || gamedata['arena_decks_owned'] == false)
	{
		saveToLocalStorage();
		$('.current_arena_decks_container').html(parsed_decks);
	}
	else
	{
		$('.current_arena_decks_container').html('<div class="loading_arena_decks">Failed to load your decks<br/>Please try again later.</div>');
	}
}

function parse_single_fightable_deck(deck_info){
	//console.log(deck_info);

	var deck_content = JSON.parse(deck_info['deck_content']);
	$('.current_arena_container').html('');
	var parsed_single_deck = '';
	if(deck_content['hero'] != undefined)
	{
		parsed_single_deck += '<div class="single_enemy_deck">';
		parsed_single_deck += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_content['hero']]['image'] + ')"></div>';
		parsed_single_deck += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_content['hero']]['name']) + '<br/><i>' + deck_info['name'] + '</i></span>';
		parsed_single_deck += 	'<div class="wins_losses">Rank ' + (parseInt(deck_info['rank']) + 1) + '<br/>' + deck_info['wins'] + ' battles<br/>' + deck_info['losses'] + ' losses';

		parsed_single_deck +=  	'</div>';

		parsed_single_deck += '</div>';
		if(gamedata['scraps'] > 0)
		{
			parsed_single_deck += '<div class="fight_single_deck_button" onclick="fight_deck(' + deck_info['id'] + ')">FIGHT</div>';
		}
		parsed_single_deck +=  	'<div class="single_arena_deck_content">';
		$.each(deck_content, function(card_id, card_amount){
			if(card_id != 'hero' && all_available_cards[card_id] != undefined)
			{
				var parsed_card = parse_card(card_id, card_amount);
				parsed_single_deck +=  	'<div class="single_arena_deck_card">';
				parsed_single_deck +=  	'<div onclick="show_card_details(\'' + card_id + '\',undefined,' + card_amount + ')">' + parsed_card + '</div>';
				parsed_single_deck +=  	'</div>';
			}
		});
		parsed_single_deck +=  	'</div>';
	}
	$('.current_arena_container').html(parsed_single_deck);
}

function replace_deck(deck_id){
	if(gamedata['decks'][gamedata['current_deck']]['hero'] != undefined)
	{
		$('.current_arena_decks_container').html('<div class="loading_arena_decks">Loading your decks</div>');
		$.post("ajax.php",
		{
			data: 			'replace_deck',
			current_id: 	gamedata['account_id'],
			deck_id: 		deck_id,
			deck: 			JSON.stringify(gamedata['decks'][gamedata['current_deck']]),
			card_back: 		gamedata['hand_card_back'],
		},
		function(result){
			console.log(result);
			get_owned_arena_decks();
		});
	}
}

function upload_new_king_of_the_hill(){
	if(gamedata['decks'][gamedata['current_deck']]['hero'] != undefined)
	{
		$.post("ajax.php",
		{
			data: 			'upload_new_king_of_the_hill',
			current_id: 	gamedata['account_id'],
			deck: 			JSON.stringify(gamedata['decks'][gamedata['current_deck']]),
		},
		function(result){
			console.log(result);
		});
	}
}

function show_single_arena_enemy(deck_id){
	//console.log(deck_id);
	$('.current_arena_container').html('<div class="loading_arena_decks">Loading enemy deck.</div>');
	$('#content_arena .menu_button.slim').addClass('hidden');
	$('#content_arena .menu_button.slim.refresh_button').removeClass('hidden');
	$.post("ajax.php",
	{
		data: 			'get_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(JSON.parse(result));
		if(count_object(JSON.parse(result)) > 0)
		{
			all_fightable_decks = JSON.parse(result);
			parse_single_fightable_deck(all_fightable_decks);
			/*$.each(all_fightable_decks, function(useless_key, deck_info){
				if(deck_info['id'] == deck_id)
				{
					parse_single_fightable_deck(deck_info);
				}
			});*/
			
		}
		else
		{
			$('.current_arena_container').html('<div class="loading_arena_decks">Failed to load enemy.<br/>Please try again later.</div>');
			$('.refresh_button').removeClass('hidden');
			setTimeout(function(){
				get_fightable_arena_decks();
			},500);
			
		}
	});
}

function get_fightable_arena_decks(){
	$.post("ajax.php",
	{
		data: 			'get_fightable_arena_decks',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		//console.log(result);
		if(count_object(JSON.parse(result)) > 0)
		{
			all_fightable_decks = JSON.parse(result);
			parse_fightable_decks(all_fightable_decks);
		}
		else
		{
			$('.current_arena_container').html('<div class="loading_arena_decks">Failed to load arena.<br/>Please try again later.</div>');
			$('.refresh_button').removeClass('hidden');
			console.log('failed');
			setTimeout(function(){
				//get_fightable_arena_decks();
			},500);
			
		}
	});
};

function get_fightable_echo_decks(){
	$.post("ajax.php",
	{
		data: 			'get_fightable_echo_decks',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		//console.log(result);
		if(count_object(JSON.parse(result)) > 0)
		{
			all_fightable_decks = JSON.parse(result);
			parse_fightable_decks(all_fightable_decks);
		}
		else
		{
			$('.current_arena_container').html('<div class="loading_arena_decks">Failed to load arena.<br/>Please try again later.</div>');
			$('.refresh_button').removeClass('hidden');
			console.log('failed');
			setTimeout(function(){
				//get_fightable_arena_decks();
			},500);
			
		}
	});
};

function parse_fightable_decks(all_fightable_decks){
	$('#content_arena .menu_button.slim').removeClass('hidden');
	var parsed_decks = '';
	if(gamedata['scraps'] == undefined)
	{
		gamedata['scraps'] = 0;
		saveToLocalStorage();
	}
	var shown_decks = 0;
	var wins_today = 0;
	if(gamedata['wins_today'] == undefined)
	{
		gamedata['wins_today'] = 0;
	}
	if(gamedata['wins_today'] != undefined){wins_today = gamedata['wins_today']};
	if(wins_today > 20){wins_today = 20;}
	$.each(all_fightable_decks, function(array_key, deck_info){
		shown_decks++;
		parsed_decks += '<div class="fightable_deck_container">';
			
			deck_info['deck_content'] = JSON.parse(deck_info['deck_content']);
			//console.log(deck_info);
			if(deck_info['deck_content']['hero'] != undefined)
			{
				if(deck_info['user_id'] != gamedata['account_id'] && (shown_decks < 11 - (wins_today / 4)))
				{
					parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + ' fightable" onclick="fight_deck(' + deck_info['id'] + ')">';
				}
				else
				{
					parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + ' not_fightable">';
				}
				parsed_decks += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_info['deck_content']['hero']]['image'] + ')"></div>';
				if(deck_info['deck_id'] == 6)
				{
					parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '<br/><i>' + deck_info['name'] + '\'s echo</i></span>';
				}
				else
				{
					parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '<br/><i>' + deck_info['name'] + '</i></span>';
				}
				parsed_decks += 	'<div class="wins_losses">Rank ' + (parseInt(deck_info['rank']) + 1) + ': ' + deck_info['wins'] + ' / ' + deck_info['losses'] + '';
				var scrap_reward = calculate_scrap_reward(deck_info['wins'], deck_info['losses']);
				if(scrap_reward == 1)
				{
					parsed_decks += 		'<br/>Bounty: ' + scrap_reward + ' scrap';
				}
				else
				{
					parsed_decks += 		'<br/>Bounty: ' + scrap_reward + ' scraps';
				}
				parsed_decks += 		'<br/>Battle cost: 1 scrap';
				parsed_decks += 	'</div>';
				parsed_decks += '</div>';
				/*if(gamedata['scraps'] > 1 && deck_info['user_id'] != gamedata['account_id'])
				{
					parsed_decks += '<div class="fight_deck_button" onclick="fight_deck(' + deck_info['id'] + ')">FIGHT</div>';
				}*/
				deck_found = true;
			}
			
		parsed_decks += '</div>';
	});

	parsed_decks += '<div class="arena_cost_description">Defeating an enemy rewards the bounty and additional loot.<br/>You currently have ' + numberWithCommas(gamedata['scraps']) + ' scraps<br/>You have won ' + gamedata['wins_today'] + ' battles today</div>';

	$('.current_arena_container').html(parsed_decks);
	//$('.king_of_the_hill_button').removeClass('hidden');
	$('.refresh_button').removeClass('hidden');
	
}

function fight_deck(deck_id){

	$('.current_arena_container').html('<div class="loading_arena">Loading battle</div>');
	//$('.king_of_the_hill_button').addClass('hidden');
	arena_deck_id = deck_id;

	$.post("ajax.php",
	{
		data: 			'get_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(result);
		current_deck = JSON.parse(result);
		var deck_content = JSON.parse(current_deck['deck_content']);
		if(deck_content['hero'] != undefined && gamedata['scraps'] > 0)
		{
			gamedata['scraps'] -= 1;
			saveToLocalStorage();
			arena_reward_amount = calculate_scrap_reward(current_deck['wins'], current_deck['losses']);
			arena_card_back = current_deck['card_back'];
			if(current_deck['deck_id'] == 6)
			{
				show_arena_battle(deck_content, current_deck['name'] + '\'s echo');
			}
			else
			{
				show_arena_battle(deck_content, current_deck['name']);
			}
			
		}
		else
		{
			show_arena();
		}
		//parse_fightable_decks(all_fightable_decks);
	});
}

function fight_king_of_the_hill(deck_id){
	gamedata['last_king_fight'] = new Date();
	$('.current_king_of_the_hill_container').html('<div class="loading_arena">Loading battle</div>');
	$('.recent_kings_container').html('');
	$('.king_rewards_container').html('');
	arena_deck_id = deck_id;

	$.post("ajax.php",
	{
		data: 			'get_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(result);
		current_deck = JSON.parse(result);
		arena_reward_amount = calculate_scrap_reward(current_deck['wins'], current_deck['losses']);
		show_king_of_the_hill_battle(JSON.parse(current_deck['deck_content']), current_deck['name'], current_deck['wins']);
		//parse_fightable_decks(all_fightable_decks);
	});
}

function claim_deck(deck_id){

	$('.current_arena_decks_container').html('<div class="loading_arena_decks">Loading rewards</div>');

	$.post("ajax.php",
	{
		data: 			'claim_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(result);
		if(result > 0)
		{
			current_reward_origin = 'arena_decks';
			current_reward_text = 'You got some prizes in the arena';
			all_current_rewards = {0:{reward_id:'scraps',reward_amount:result * 2}};
			if((Math.random() * 20) < result)
			{
				all_current_rewards[1] = {reward_id:'arena_shard',reward_amount:1};
			}
			show_content('current_rewards');
			//gain_scraps(result * 2);
		}
		else
		{
			show_arena_decks();
		}
		
	});
}

function calculate_scrap_reward(wins, losses){
	var scrap_reward = Math.floor(((parseInt(wins) + 1) - (parseInt(losses) + 1)) + 5);
	/*if(wins == 0 && losses == 0)
	{
		scrap_reward += 5;
	}*/
	/*if(wins > losses)
	{
		scrap_reward += 2;
	}*/
	/*if(losses == 9 && wins > 0)
	{
		scrap_reward += 10;
	}*/
	if(scrap_reward < 2)
	{
		scrap_reward = 2;
	}
	return scrap_reward;
}

function get_king_of_the_hill(){

	$.post("ajax.php",
	{
		data: 			'king_of_the_hill',
	},
	function(result){
		parse_king_of_the_hill(JSON.parse(result));
	});
}

function get_recent_kings(){

	$.post("ajax.php",
	{
		data: 			'get_recent_kings',
	},
	function(result){
		parse_recent_kings(JSON.parse(result));
	});
}

function get_king_rewards(){

	$.post("ajax.php",
	{
		data: 			'get_king_rewards',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		parse_king_rewards(parseInt(JSON.parse(result)));
	});
}

function show_king_of_the_hill(){
	$('.current_king_of_the_hill_container').html('<div class="loading_king_of_the_hill">Loading king of the hill</div>');
	$('.recent_kings_container').html('');
	$('.king_rewards_container').html('');
	get_king_of_the_hill();
	get_recent_kings();
	get_king_rewards();
}

function parse_king_of_the_hill(deck_info){

	var parsed_decks = '';
	if(gamedata['last_king_fight'] == undefined){gamedata['last_king_fight'] = new Date();}
	if(deck_info != null)
	{
	
		parsed_decks += '<div class="fightable_deck_container">';
		
		deck_info['deck_content'] = JSON.parse(deck_info['deck_content']);
		//console.log(deck_info);
		if(deck_info['deck_content']['hero'] != undefined)
		{
			if(deck_info['user_id'] != gamedata['account_id'])
			{
				parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + '" onclick="fight_deck(' + deck_info['id'] + ')">';
			}
			else
			{
				parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + '">';
			}
			parsed_decks += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_info['deck_content']['hero']]['image'] + ')"></div>';
			parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '<br/><i>' + deck_info['name'] + '</i></span>';
			parsed_decks += 	'<div class="wins_losses">Battles: ' + deck_info['wins'] + '';
			
			parsed_decks += 	'</div>';
			parsed_decks += '</div>';
			if(deck_info['user_id'] != gamedata['account_id'])
			{
				var time_to_next_fight = king_battle_timeout - ((new Date().getTime() - new Date(gamedata['last_king_fight']).getTime()) / 1000);
				var next_fight_time = new Date().getTime() + (time_to_next_fight * 1000);
				//console.log(time_to_next_fight);
				if(time_to_next_fight <= 0)
				{
					parsed_decks += '<div class="fight_deck_button" onclick="fight_king_of_the_hill(' + deck_info['id'] + ')">FIGHT</div>';
				}
				else
				{
					parsed_decks += '<div class="fight_deck_button timer" data-complete-time=' + next_fight_time + ' data-complete-function="show_king_of_the_hill">' + toHHMMSS(time_to_next_fight) + '</div>';
				}
			}
		}
			
		parsed_decks += '</div>';
	}
	else
	{
		parsed_decks += '<div class="fightable_deck_container">';
		parsed_decks += '<button class="menu_button king_of_the_hill_button" data-target-content="king_of_the_hill">RELOAD</button>';
		//parsed_decks += '<div class="fight_deck_button" onclick="upload_new_king_of_the_hill()">TAKE THE HILL</div>';
		parsed_decks += '</div>';
	}

	$('.current_king_of_the_hill_container').html(parsed_decks);
}

function parse_recent_kings(all_kings){
	var parsed_kings = 'Recent kings';
	$.each(all_kings, function(king_key, king){
		parsed_kings += '<div class="single_king">';
		parsed_kings += 	'<span class="king_name">' + king['name'] + '</span><br/>';
		parsed_kings += 	'Battles: ' + king['wins']
		parsed_kings += '</div>';
	});

	$('.recent_kings_container').html(parsed_kings);
}

function parse_king_rewards(reward){
	var parsed_rewards = '<span>Gain 25 scraps and 5 arena shards for taking the hill.<br/><br/>Gain 10 scraps for every defensive battle on the hill.</span>';
	if(reward > 0)
	{
		parsed_rewards = '';
		parsed_rewards += '<span>Current rewards:</span><br/>';
		/*if(reward == 1)
		{
			parsed_rewards += 	(reward * 10) + ' scrap';
		}
		else
		{*/
			parsed_rewards += 	(reward * 10) + ' scraps';
		/*}*/
		parsed_rewards += '<div class="claim_king_button" onclick="claim_king()">CLAIM</div>';
	}

	$('.king_rewards_container').html(parsed_rewards);
}

function claim_king(){
	$.post("ajax.php",
	{
		data: 			'claim_king_rewards',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		gain_scraps(parseInt(JSON.parse(result)) * 10);
		show_king_of_the_hill();
	});
}
var new_building_id = 0;
var current_fragment_page = 1;
var current_construction = '';
var all_current_rewards = {};
var current_reward_origin = '';
var current_reward_text = '';
var base_building_cost = 4;
var building_scraps_cost = 10;
var storage_maxed = 0;
var town_production_stored = 0;
var town_max_storage = 0;
var do_no_apply_factions = false;
var current_adventure = '';
var current_adventure_units = {};
var suggest_mode = 'all';
var owned_buildings_fragments = {};


function toggle_suggest_mode(){
	$('.suggest_view div').removeClass('active');
	

	if(suggest_mode == 'matched')
	{
		
		$('.suggest_view .suggest_slider').addClass('all');
		$('.suggest_view .suggest_all').addClass('active');
		suggest_mode = 'all';
	}
	else
	{
		$('.suggest_view .suggest_slider').removeClass('all');
		$('.suggest_view .suggest_matched').addClass('active');
		suggest_mode = 'matched'
	}

	show_adventure_units();
}

function check_owned_buildings(){
	owned_buildings_fragments = {};
	$.each(gamedata['town'], function(building_id, building_info){
		if(owned_buildings_fragments[all_buildings[building_info['building_id']]['fragment_id']] == undefined)
		{
			owned_buildings_fragments[all_buildings[building_info['building_id']]['fragment_id']] = {
				building_id: 		building_info['building_id'],
				building_level: 	building_info['level']
			};
		}
	});
	console.log(owned_buildings_fragments); 
}

function show_town(){
	//check_owned_buildings();
	$('.town_content').html('');
	var parsed_town = '';
	var time_now = new Date().getTime();

	if(gamedata['town'] == undefined)
	{
		gamedata['town'] = {};
		saveToLocalStorage();
	}

	if(gamedata['max_buildings'] == undefined)
	{
		gamedata['max_buildings'] = get_highest_key_in_object(gamedata['town']);
		saveToLocalStorage();
	}
	storage_maxed = 0;
	town_production_stored = 0;
	town_max_storage = 0;
	/*for(i = 0;i <= gamedata['max_buildings']; i++)
	{*/
		$.each(all_buildings, function(building_id, building_info){
			var can_show_this_area = true;
			var area_available = true;
			var not_available_text = '';
			/*$.each(building_info['shown'], function(hero_id, hero_wave){
				if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
				{
					can_show_this_area = false;
				}
			});
			not_available_text += check_defeated_heroes(building_info['available']);*/
			$.each(building_info['needed_upgrades'], function(needed_id, needed_level){
				if(gamedata['upgrades'] == undefined || gamedata['upgrades'][needed_id] == undefined || gamedata['upgrades'][needed_id] < needed_level)
				{
					can_show_this_area = false;
				}
			});
			if(not_available_text != ''){area_available = false;}
			if(can_show_this_area == true)
			{
				if(area_available == true && gamedata['town'][building_id] == undefined)
				{
					gamedata['town'][building_id] = {
						building_id:	building_id,
						level: 			1
					};
					saveToLocalStorage();
				}
				//$('.single_building_content').html('');
				/*if(gamedata['town'][i] == undefined)
				{
					parsed_town += '<div class="building" onclick="new_building_id=' + i + ';show_content(\'new_buildings\')"><span>BUILD</span></div>';
				}
				else
				{*/
					//var building_id = i;
					//var current_building = all_buildings[gamedata['town'][building_id]['building_id']];
					var current_building = building_info;
					
					if(area_available == true)
					{
						parsed_town += '<div class="building" onclick="current_building_id=\'' + building_id + '\';show_content(\'single_building\')">';
					}
					else
					{
						parsed_town += '<div class="building faded">';
					}
					parsed_town += '<div class="background" style="background-image:url(images/' + current_building['image'] + ')"></div>';
					if(area_available == true)
					{
						parsed_town += '<span>' + capitalizeFirstLetter(current_building['name']) + '</span>';
					}
					else
					{
						parsed_town += '<span class="not_available_text">' + not_available_text + '</span>';
					}
					parsed_town += '<span class="current_status">';
					var busy = 0;
					var done = 0;
					var free = 0;
					if(gamedata['town'][building_id] != undefined)
					{
						if(gamedata['town'][building_id]['level'] == undefined){gamedata['town'][building_id]['level'] = 1;}
						free = gamedata['town'][building_id]['level'] + 0;

					/*if(current_building['productions'] != undefined)
					{
						free = 1;
					}*/
						var first_done_time = 0;
						$.each(gamedata['town'][building_id]['expeditions'], function(expedition_id, expedition_info){
							free -= 1;
							if(expedition_info['done_time'] <= time_now){done += 1;}
							if(expedition_info['done_time'] > time_now){busy += 1;if(first_done_time == 0 || first_done_time > expedition_info['done_time']){first_done_time = expedition_info['done_time'];};}
						});
						$.each(gamedata['town'][building_id]['adventures'], function(expedition_id, expedition_info){
							free -= 1;
							if(expedition_info['done_time'] <= time_now){done += 1;}
							if(expedition_info['done_time'] > time_now){busy += 1;if(first_done_time == 0 || first_done_time > expedition_info['done_time']){first_done_time = expedition_info['done_time'];};}
						});

						if(gamedata['town'][building_id]['adventures'] != undefined || gamedata['town'][building_id]['expeditions'] != undefined)
						{
							if(busy > 0)
							{
								//parsed_town += '<br/>Busy: ' + busy;
								parsed_town += '<br/><span class="timer" data-complete-time=' + first_done_time + '></span>';
							}
							if(done > 0)
							{
								//parsed_town += '<br/><b><span style="color:#afa">DONE: ' + done + '</span></b>';
								parsed_town += '<br/><b><span style="color:#afa">DONE</span></b>';
							}
							if(free > 0 && done == 0 && busy == 0)
							{
								//parsed_town += '<br/>Free slots: ' + free;
								parsed_town += '<br/>Idle';
							}
						}

						if(gamedata['town'][building_id] != undefined && current_building['type'] == 'shop')
						{
							var offers_available = 0;
							$.each(gamedata['town'][building_id]['current_offers'], function(offer_id, offer_info){
								if(offer_info['sold'] == undefined || new Date(offer_info['offer_expires']) < new Date())
								{
									offers_available++;
								}
							});
							if(offers_available > 0)
							{
								//parsed_town += '<br/>Offers: ' + offers_available;
								parsed_town += '<br/>Offer available';
							}
						}

					
						var total_storage = 0;
						var total_max_storage = 0;
						var building_level = 	gamedata['town'][building_id]['level'];
						if(gamedata['town'][building_id] != undefined && gamedata['town'][building_id]['productions'] != undefined && current_building['productions'] != undefined)
						{
							$.each(current_building['productions'], function(production_id, production_info){
								if(gamedata['town'][building_id]['productions'][production_id] != undefined && (gamedata['town'][building_id]['productions'][production_id]['production_id'] == undefined || gamedata['town'][building_id]['productions'][production_id]['production_id'] != false))
								{
									if(gamedata['town'][building_id]['productions'][production_id]['speed_level'] == undefined){gamedata['town'][building_id]['productions'][production_id]['speed_level'] = 1;}
									if(gamedata['town'][building_id]['productions'][production_id]['storage_level'] == undefined){gamedata['town'][building_id]['productions'][production_id]['storage_level'] = 1;}
									var current_production = gamedata['town'][building_id]['productions'][production_id];
									var production_info = 	current_building['productions'][production_id];
									//var production_time = Math.floor(production_info['base_time'] / ( 0.65 + (current_production['speed_level'] / 10)));
									var production_time = calculate_production_speed(current_production['speed_level'], production_info['base_time'], production_info['defeated_heroes_speed_bonusses'], production_info['production_achievement_bonus'], gamedata['town'][building_id]['level']);
									var time_elapsed = (new Date().getTime() - current_production['last_claimed']) / 1000;
									var ready_production = Math.floor(time_elapsed / production_time);
									//var max_storage = Math.ceil(production_info['base_storage'] * (0.75 + (current_production['storage_level'] / 4)));
									var max_storage = calculate_production_storage(current_production['storage_level'], production_info['base_storage'], production_info['defeated_heroes_speed_bonusses'], gamedata['town'][building_id]['level']);
									var shown_ready_production = Math.floor(time_elapsed / production_time);
									if(shown_ready_production > max_storage)
									{
										shown_ready_production = max_storage;
									}
									total_storage += shown_ready_production;
									total_max_storage += max_storage;
									town_production_stored += shown_ready_production;
									town_max_storage += max_storage;
								}
							});
						}
						if(total_max_storage > 0)
						{
							if(total_storage >= total_max_storage)
							{
								parsed_town += '<br/><span style="color:#f00"><b>STORAGE FULL</b></span>';
								storage_maxed++;
							}
							else
							{
								if(total_storage > 0)
								{
									parsed_town += '<br/><span style="color:#afa">Storage: ' + nFormatter(total_storage,2) + ' / ' + nFormatter(total_max_storage,2) + '</span>';
								}
								else
								{
									parsed_town += '<br/>Storage: 0 / ' + total_max_storage;
								}
							}
						}
						
					}
					/*var upgrade_cost = calculate_upgrade_cost(building_level);
					if(gamedata['owned_cards'][current_building['fragment_id']] >= upgrade_cost && gamedata['scraps'] >= upgrade_cost * building_scraps_cost)
					{
						parsed_town += '<br/><span style="color:#afa"><b>UPGRADABLE</b></span>';
					}*/
					parsed_town += '</span>';
					parsed_town += '</div>';
				/*}*/
			}
		});
	//}
	/*var cost_new_slot = calculate_new_building_slot_cost();
	if(gamedata['max_buildings'] < 1100)
	{
		if(gamedata['scraps'] >= cost_new_slot)
		{
			parsed_town += '<div class="building new_slot_text" onclick="buy_new_building_slot();"><span>BUY NEW SLOT<br/>' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(cost_new_slot) + ' scraps</span></div>';
		}
		else
		{
			parsed_town += '<div class="building faded new_slot_text" onclick="buy_new_building_slot();"><span>BUY NEW SLOT<br/>' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(cost_new_slot) + ' scraps</span></div>';
		}
	}*/

	$('.town_content').html(parsed_town);
	if(count_object(gamedata['town']) == 1)
	{
		$.each(gamedata['town'], function(building_id, building_info){
			current_building_id	= building_id;
			
		});
		if(last_content == 'single_building')
		{
			show_content('home');
		}
		else
		{
			show_content('single_building');
		}
	}
	else
	{
		update_all_timers();
	}
}

function calculate_production_speed(speed_level, base_time, defeated_heroes_speed_bonusses, production_achievement_bonus, building_level){
	var defeated_heroes_bonus = 1;
	$.each(defeated_heroes_speed_bonusses, function(hero_id, bonus_amount){
		if(gamedata['defeated_heroes'] != undefined && gamedata['defeated_heroes'][hero_id] != undefined)
		{
			defeated_heroes_bonus += (gamedata['defeated_heroes'][hero_id] * bonus_amount);
		}
	});
	if(production_achievement_bonus != undefined)
	{
		var achievement_bonus = 1 + (get_completed_achievement_count() * production_achievement_bonus);
		defeated_heroes_bonus *= achievement_bonus;
	}
	return  Math.ceil(base_time / ((1 + (sqr(speed_level) / 20)) * defeated_heroes_bonus * building_level));
}

function calculate_production_speed_cost(speed_level, base_cost){
	
	return Math.ceil(base_cost * (1 + (sqr(sqr(speed_level)) / 50)));
}

function calculate_production_storage(speed_level, base_storage, defeated_heroes_speed_bonusses, building_level){
	var defeated_heroes_bonus = 1;
	$.each(defeated_heroes_speed_bonusses, function(hero_id, bonus_amount){
		if(gamedata['defeated_heroes'] != undefined && gamedata['defeated_heroes'][hero_id] != undefined)
		{
			defeated_heroes_bonus += (gamedata['defeated_heroes'][hero_id] * bonus_amount);
		}
	});
	return Math.floor(base_storage * (1 + (sqr(speed_level) / 20)) * defeated_heroes_bonus * building_level);
}

function calculate_new_building_slot_cost(){
	var cost = 10;
	for(var i = 0;i <= gamedata['max_buildings']; i++)
	{
		cost *= 2.5;
	}
	return Math.floor(cost / 10) * 10;
};

function buy_new_building_slot(){
	var cost_new_slot = calculate_new_building_slot_cost();
	if(gamedata['scraps'] >= cost_new_slot)
	{
		gamedata['scraps'] -= cost_new_slot;
		gamedata['max_buildings'] += 1;
		saveToLocalStorage();
	}
	show_content('town');
}

function show_new_buildings(){
	/*if(gamedata['town'][new_building_id] != undefined)
	{
		show_content('town');
	}
	else
	{*/
		cards_per_page = 12;
		$('#content_new_buildings .new_buildings_list').html('<span class="no_tinker">You have no fragments.<br/>You can find them in battles.</span>');

		gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
		var current_card_number = 0;

		$.each(all_buildings, function(building_id, building_info){
			var card_filtered = false;
			var effective_owned_amount = 0;
			if(gamedata['owned_cards'][building_info['fragment_id']] == undefined)
			{
				card_filtered = true;
			}
			else
			{
				effective_owned_amount = gamedata['owned_cards'][building_info['fragment_id']] + 0;
			}

			current_card_number ++;
			if(current_card_number == 1)
			{
				$('#content_new_buildings .new_buildings_list').html('');
			}
			if(current_card_number / cards_per_page > current_fragment_page -1 && current_card_number / cards_per_page <= current_fragment_page)
			{
				var parsed_card = parse_card(building_info['fragment_id'], effective_owned_amount);
				if(gamedata['town'][new_building_id] == undefined)
				{
					if(effective_owned_amount < base_building_cost)
					{
						$('#content_new_buildings .new_buildings_list').append('<div class="fragment faded" onclick="show_construct_building(\'' + building_id + '\')">' + parsed_card + '</div>');
					}
					else
					{
						$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_construct_building(\'' + building_id + '\')">' + parsed_card + '</div>');
					}
				}
				else
				{
					//$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_card_details(\'' + building_id + '\')">' + parsed_card + '</div>');
				}
			};
		});

		/*$.each(gamedata['owned_cards'], function(card_id, owned_amount){
			var effective_owned_amount = owned_amount + 0;

			var card_filtered = false;
			if(all_available_cards[card_id]['type'] != 'fragment')
			{
				card_filtered = true;
			}
			
			if(effective_owned_amount > 0 && card_filtered == false)
			{
				current_card_number ++;
				if(current_card_number == 1)
				{
					$('#content_new_buildings .new_buildings_list').html('');
				}
				if(current_card_number / cards_per_page > current_fragment_page -1 && current_card_number / cards_per_page <= current_fragment_page)
				{
					var parsed_card = parse_card(card_id, effective_owned_amount);
					if(gamedata['town'][new_building_id] == undefined)
					{
						if(effective_owned_amount < base_building_cost)
						{
							$('#content_new_buildings .new_buildings_list').append('<div class="fragment faded" onclick="show_construct_building(\'' + card_id + '\')">' + parsed_card + '</div>');
						}
						else
						{
							$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_construct_building(\'' + card_id + '\')">' + parsed_card + '</div>');
						}
					}
					else
					{
						$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_card_details(\'' + card_id + '\')">' + parsed_card + '</div>');
					}
					
				}
			}
		});*/
		if(current_fragment_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(current_card_number / cards_per_page <= current_fragment_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(current_card_number > 0 && Math.ceil(current_card_number / cards_per_page) < current_fragment_page)
		{
			current_fragment_page = 1;
			show_new_buildings();
		}
		if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_fragment_page + ' / ' + Math.ceil(current_card_number / cards_per_page));
	/*}*/
}

function set_fragments_page(amount){
	current_fragment_page += amount;
	if(current_fragment_page < 1){current_fragment_page = 1;}
	show_new_buildings();
}

function show_construct_building(card_id){
	current_construction = '';
	/*if(gamedata['owned_cards'][card_id] < 100)
	{
		show_content('town');
	}
	else
	{*/
		/*$.each(all_buildings, function(building_id, building_info){
			if(building_info['fragment_id'] == card_id && current_construction == '')
			{
				current_construction = building_id;
			}
		});*/
	/*}*/
	if(all_buildings[card_id] != undefined)
	{
		current_construction = card_id;
	}
	if(current_construction != '')
	{
		show_content('construction');
	}

}

function show_construction(){
	if(current_construction == '' || all_buildings[current_construction] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_building = all_buildings[current_construction];
		$('.construction_content').html('');
		var owned_fragments = 0;
		if(gamedata['owned_cards'][current_building['fragment_id']] != undefined)
		{
			owned_fragments = gamedata['owned_cards'][current_building['fragment_id']];
		}
		var parsed_cost = parse_card(current_building['fragment_id'], owned_fragments + ' / ' + base_building_cost);
		if(owned_fragments < base_building_cost)
		{
			parsed_cost = parse_card(current_building['fragment_id'], '<span style="color:red">' + owned_fragments + ' / ' + base_building_cost + '</span>');
		}
		if(gamedata['scraps'] < base_building_cost * building_scraps_cost)
		{
			parsed_cost += parse_card('scraps_placeholder', '<span style="color:red">' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(base_building_cost * building_scraps_cost) + '</span>');
		}
		else
		{
			parsed_cost += parse_card('scraps_placeholder', '' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(base_building_cost * building_scraps_cost) + '');
		}
		

		$('.construction_content').append('<div class="construction_name">' + capitalizeFirstLetter(current_building['name']) + '</div>');
		if(gamedata['owned_cards'][current_building['fragment_id']] < base_building_cost || gamedata['scraps'] < base_building_cost * building_scraps_cost)
		{
			$('.construction_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['description']) + '</div>');
		}
		else
		{
			$('.construction_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['description']) + '</div>');
			$('.construction_content').append('<div onclick="construct_current_building()" class="construction_button">BUILD</div>');
		}
		$('.construction_content').append('<div class="fragment_cost">' + parsed_cost + '<div style="clear:both"></div></div>');
	}
}

function construct_current_building(){
	if(current_construction != '' && all_buildings[current_construction] != undefined && gamedata['town'][new_building_id] == undefined)
	{
		var current_building = all_buildings[current_construction];
		if(gamedata['owned_cards'][current_building['fragment_id']] >= base_building_cost && gamedata['scraps'] >= base_building_cost * building_scraps_cost)
		{
			gamedata['owned_cards'][current_building['fragment_id']] -= base_building_cost;
			gamedata['scraps'] -= base_building_cost * building_scraps_cost;
			gamedata['town'][new_building_id] = {
				building_id:	current_construction,
				level: 			1
			};
			saveToLocalStorage();
		}
	}
	current_building_id = new_building_id;
	show_content('single_building');
}

function upgrade_current_building(){
	if(current_building_id != undefined)
	{
		var current_building = all_buildings[gamedata['town'][current_building_id]['building_id']];
		var upgrade_cost = calculate_upgrade_cost(gamedata['town'][current_building_id]['level']);
		if(gamedata['owned_cards'][current_building['fragment_id']] >= upgrade_cost && gamedata['scraps'] >= upgrade_cost * building_scraps_cost)
		{
			gamedata['owned_cards'][current_building['fragment_id']] -= upgrade_cost;
			gamedata['scraps'] -= upgrade_cost * building_scraps_cost;
			gamedata['town'][current_building_id]['level'] += 1;
			saveToLocalStorage();
		}
	}
	show_content('single_building');
}

function show_single_building(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_button').remove();
		$('.building_recipes_button').remove();
		//$('.single_building_content').html('</div>');
		var complete_building_list = '';
		var new_expedition_button = '';

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];

		$('.building_bg').css('background-image','url(images/' + building_info['image'] + ')');

		$('#content_single_building h2').html( capitalizeFirstLetter(building_info['name']) /*+ ' level ' + current_building['level']*/);

		$('.upgrade_building_button').removeClass('click_me');
		var upgrade_cost = calculate_upgrade_cost(building_level);
		if(gamedata['owned_cards'][building_info['fragment_id']] >= upgrade_cost && gamedata['scraps'] >= upgrade_cost * building_scraps_cost)
		{
			$('.upgrade_building_button').addClass('click_me');
		}

		if(building_info['productions'] != undefined)
		{
			var next_unlock_cost = false;
			if(current_building['productions'] == undefined)
			{
				current_building['productions'] = {};
			}
			if(count_object(building_info['productions']) > 1)
			{
				complete_building_list += '<div class="claim_all_production_button" onclick="claim_all_production()">CLAIM ALL</div>';
			}
			$.each(building_info['productions'], function(production_result, production_info){
				if(current_building['productions'][production_result] == undefined && production_info['unlock_cost'] == undefined)
				{
					current_building['productions'][production_result] = {
						level: 			1,
						speed_level: 	1,
						storage_level: 	1,
						last_claimed: 	new Date().getTime(),
					}
					if(production_info['production_pickable'] != undefined && production_info['production_pickable'] == true)
					{
						current_building['productions'][production_result]['production_id'] = false;
					}
					saveToLocalStorage();
				}
				if(current_building['productions'][production_result] != undefined)
				{
					var current_production = current_building['productions'][production_result];
					//var production_time = Math.floor(production_info['base_time'] / ( 0.65 + (current_production['speed_level'] / 10)));
					var production_info = 	building_info['productions'][production_result];
					var production_time = calculate_production_speed(current_production['speed_level'], production_info['base_time'], production_info['defeated_heroes_speed_bonusses'], production_info['production_achievement_bonus'], current_building['level']);
					var time_elapsed = (new Date().getTime() - current_production['last_claimed']) / 1000;
					var ready_production = Math.floor(time_elapsed / production_time);
					//var max_storage = Math.ceil(production_info['base_storage'] * (0.75 + (current_production['storage_level'] / 4)));
					var max_storage = calculate_production_storage(current_production['storage_level'], production_info['base_storage'], production_info['defeated_heroes_speed_bonusses'], current_building['level']);
					var shown_ready_production = Math.floor(time_elapsed / production_time);
					if(shown_ready_production > max_storage)
					{
						shown_ready_production = max_storage;
					}
					var time_to_next_production = new Date().getTime() + ((production_time - (time_elapsed - (production_time * ready_production))) * 1000);
					//console.log(time_elapsed);

					var parsed_production = '';
					parsed_production += '<div class="single_expedition production_bar">';
					var result_name = '';
					if(all_available_cards[production_result] != undefined){result_name = production_result;}
					if(production_result == 'scraps'){result_name = 'scraps_placeholder';}
					if(all_available_cards[production_result] != undefined || (current_building['productions'][production_result]['production_id'] != undefined && current_building['productions'][production_result]['production_id'] != false))
					{
						var actual_result = production_result;
						if(current_building['productions'][production_result]['production_id'] != undefined && current_building['productions'][production_result]['production_id'] != false && all_available_cards[current_building['productions'][production_result]['production_id']] != undefined)
						{
							actual_result = current_building['productions'][production_result]['production_id'];
							result_name = actual_result;
						}
						parsed_production += 	'<span class="single_new_expedition_name">' + capitalizeFirstLetter(all_available_cards[result_name]['name']) + '<br/></span>';
						var parsed_result = parse_card(result_name);
						parsed_production += '<span onclick="claim_production(\'' + production_result + '\')">' + parsed_result + '</span>';
						parsed_production += '<div onclick="claim_production(\'' + production_result + '\')" class="production_time">' + toHHMMSS(production_time) + '</div>';
						if(ready_production < max_storage)
						{
							parsed_production += '<div onclick="claim_production(\'' + production_result + '\')" class="production_time_left timer" data-complete-time=' + time_to_next_production + ' data-complete-function="show_single_building"></div>';
						}
						if(ready_production > 0)
						{
							/*parsed_production += '<div class="production_claim_button" onclick="claim_production(\'' + production_result + '\')">CLAIM</div>';*/
						}
						parsed_production += 	'<div onclick="claim_production(\'' + production_result + '\')" class="production_storage_container">';
						var production_storage_bar_width = Math.floor(shown_ready_production / max_storage * 100);
						parsed_production += 		'<div class="production_storage_bar" style="width:' + production_storage_bar_width + '%"></div>';
						parsed_production += 		'<div class="production_storage_amount">' + nFormatter(shown_ready_production,2) + ' / ' + nFormatter(max_storage,2) + '</div>';
						parsed_production += 	'</div>';
						if(production_info['production_pickable'] != undefined && production_info['production_pickable'] == true)
						{
							parsed_production += 	'<div onclick="cancel_pickable_production(\'' + production_result + '\')" class="cancel_pickable_production_button">CHANGE</div>';
						}
					}
					else
					{

						if(production_info['production_pickable'] != undefined && production_info['production_pickable'] == true)
						{
							parsed_production += 	'<span class="single_new_expedition_name">Pick production<br/></span>';
							$.each(production_info['pickable_productions'], function(pickable_id, pickable_info){
								var resource_available = check_defeated_heroes(pickable_info['available']);
								var pickable_name = '';
								if(all_available_cards[pickable_id] != undefined){pickable_name = pickable_id;}
								if(pickable_id == 'scraps'){pickable_name = 'scraps_placeholder';}
								var parsed_pickable = parse_card(pickable_name);
								if(resource_available == '')
								{
									parsed_production += '<span onclick="set_pickable_production(\'' + production_result + '\',\'' + pickable_id + '\')">' + parsed_pickable + '</span>';
								}
							});
						}
					}
					parsed_production += 	'<div class="increase_production_container">';
					if(all_available_cards[production_result] != undefined || (current_building['productions'][production_result]['production_id'] != undefined && current_building['productions'][production_result]['production_id'] != false))
					{
						if(count_object(production_info['upgrade_cost_speed']) > 0)
						{
							parsed_production += 	'<div class="upgrade_section">';
							parsed_production += 		'<span class="">Production</span><br/>';
							var can_upgrade = true;
							
							$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
								//var actual_cost = cost_amount * current_production['speed_level'];
								var actual_cost = calculate_production_speed_cost(current_production['speed_level'], cost_amount);
								var owned_amount = 0;
								if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
								if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
								var parsed_cost = '';
								var cost_name = 'Scraps';
								if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
								if(owned_amount < actual_cost)
								{
									//parsed_cost = parse_card(cost_id, '<span style="color:red">' + owned_amount + ' / ' + actual_cost + '</span>');
									parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
									can_upgrade = false;
								}
								else
								{
									parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
								}
								parsed_production += 	'<div class="production_upgrade_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
							});
							if(can_upgrade == true)
							{
								parsed_production += 	'<br/><div class="production_upgrade_button" onclick="upgrade_production(\'' + production_result + '\')">UPGRADE</div>';
							}
							parsed_production += 	'</div>';
						}
						parsed_production += 	'<div class="upgrade_section">';
						parsed_production += 		'<span class="">Storage</span><br/>';
						var can_upgrade = true;
						$.each(production_info['upgrade_cost_storage'], function(cost_id, cost_amount){
							//var actual_cost = cost_amount * current_production['storage_level'];
							var actual_cost = calculate_production_speed_cost(current_production['storage_level'], cost_amount);
							var owned_amount = 0;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
							if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
							var parsed_cost = '';
							var cost_name = 'Scraps';
							if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
							if(owned_amount < actual_cost)
							{
								//parsed_cost = parse_card(cost_id, '<span style="color:red">' + owned_amount + ' / ' + actual_cost + '</span>');
								parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
								can_upgrade = false;
							}
							else
							{
								parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
							}
							parsed_production += 	'<div class="production_upgrade_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
						});
						
						if(can_upgrade == true)
						{
							parsed_production += 	'<br/><div class="production_upgrade_button" onclick="upgrade_storage(\'' + production_result + '\')">UPGRADE</div>';
						}
						parsed_production += 	'</div>';
					}
					parsed_production += 	'</div>';
					parsed_production += 	'<div style="clear:both"></div>';
					parsed_production += '</div>';
					//$('.single_building_content_list').append(parsed_production);
					complete_building_list += parsed_production;
				}
				else
				{
					if(next_unlock_cost == false)
					{
						next_unlock_cost = production_info['unlock_cost'];
						var button_red = '';
						if(gamedata['scraps'] < next_unlock_cost)
						{
							button_red = 'button_red';
						}
						complete_building_list += '<div class="claim_all_production_button ' + button_red + '" onclick="buy_next_production(\'' + production_result + '\')">UNLOCK NEXT<br/>' + nFormatter(gamedata['scraps'],3) + ' / ' + nFormatter(next_unlock_cost,3) + ' scraps</div>';

					}
				}
			});
		}
		if(building_info['recipes'] != undefined && count_object(building_info['recipes']) > 0)
		{
			//$('.single_building_content').append('<div class="building_recipes_button" onclick="show_content(\'building_recipes\')">CRAFT</div>');
			complete_building_list += show_building_recipes();
		}
		if(building_info['recipe_shop'] != undefined)
		{
			if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
			$.each(building_info['recipe_shop'], function(offer_key, offer_info){
				if(gamedata['known_recipes'][offer_key] == undefined)
				{
					var can_show_this_area = true;
					var area_available = true;
					if(gamedata['defeated_heroes'] == undefined){gamedata['defeated_heroes'] = {};}
					$.each(offer_info['shown'], function(hero_id, hero_wave){
						if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
						{
							can_show_this_area = false;
						}
					});
					$.each(offer_info['available'], function(hero_id, hero_wave){
						if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
						{
							area_available = false;
						}
					});
					if(can_show_this_area == true)
					{

						var parsed_recipe = '';
						var parsed_result = parse_card(offer_key);
						var can_craft = true;
						parsed_recipe += '<div class="single_building_recipe">';
						parsed_recipe += 	'<span class="single_new_expedition_name">Recipe: ' + capitalizeFirstLetter(all_available_cards[offer_key]['name'] + '</span>');
						if(area_available == true)
						{
							parsed_recipe += 	'<div class="single_building_recipe_costs"><br/>';
							$.each(offer_info['cost'], function(cost_id, cost_amount){
								//if(gamedata['owned_cards'][cost_id] == undefined){gamedata['owned_cards'][cost_id] = 0;}
								var owned_amount = 0;
								if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
								if(gamedata['owned_cards'][cost_id] != undefined){owned_amount = gamedata['owned_cards'][cost_id];}
								var cost_name = 'Scraps';
								if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
								if(owned_amount < cost_amount)
								{
									can_craft = false;

									var parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(cost_amount,3) + '</span>';
								}
								else
								{
									var parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(cost_amount,3) + '</span>';
								}
								
								parsed_recipe += '<div class="single_building_recipe_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
							});
							parsed_recipe += 	'</div>';
							parsed_recipe += 	'<div class="single_building_recipe_result" onclick="show_card_details(\'' + offer_key + '\')">' + parsed_result + '</div>';
							if(can_craft == true)
							{
								parsed_recipe += 	'<div class="single_building_recipe_craft_button" onclick="learn_local_recipe(\'' + offer_key + '\')">LEARN</div>';
							}
						}
						else
						{
							parsed_recipe += 	'<div class="single_building_recipe_result" onclick="show_card_details(\'' + offer_key + '\')" style="opacity:0.5">' + parsed_result + '</div>';
						}
						parsed_recipe += '<div style="clear:both"></div>';
						parsed_recipe += '</div>';
						complete_building_list += parsed_recipe;
					}
				}
			});
		}
		if(building_info['shop_type'] != undefined)
		{
			check_current_offers();
			$.each(current_building['current_offers'], function(offer_key, offer_info){
				//console.log(offer_info);
				var temp_offer_amount = '';
				if(offer_info['card_amount'] > 1){temp_offer_amount = '' + offer_info['card_amount'] + 'x ';}
				var parsed_expedition = '';
				parsed_expedition += '<div class="single_expedition single_offer"><span class="single_new_expedition_name">' + capitalizeFirstLetter(all_available_cards[offer_info['card_id']]['name']) + '</span><br/><span class="single_new_expedition_description">' + capitalizeFirstLetter(offer_info['buysell']) + 'ing: ' + temp_offer_amount + '' + capitalizeFirstLetter(all_available_cards[offer_info['card_id']]['name']) + '. <br/></span>';
				
				if(offer_info['buysell'] == 'buy'){parsed_expedition+='Offer: ' + nFormatter(offer_info['offer_price'],3) + ' scraps.';}
				if(offer_info['buysell'] == 'sell'){parsed_expedition+='Price: ' + nFormatter(offer_info['offer_price'],3) + ' scraps.';}
				var offer_percent = (offer_info['offer_price'] / (all_available_cards[offer_info['card_id']]['value'] * offer_info['card_amount'])) * 100;
				parsed_expedition+='<br/>(' + nFormatter(offer_percent,0) + '%)';
				var owned_amount = 0;

				if(gamedata['owned_cards'][offer_info['card_id']] != undefined)
				{
					owned_amount = gamedata['owned_cards'][offer_info['card_id']];
				}
				if(offer_info['sold'] == undefined)
				{
					parsed_expedition += 	'<div class="offer_image" onclick="show_card_details(\'' + offer_info['card_id'] + '\')">' + parse_card(offer_info['card_id'], /*owned_amount + ' / ' +*/ temp_offer_amount) + '</div>';
					if(offer_info['buysell'] == 'buy' && gamedata['known_recipes'] != undefined && gamedata['known_recipes'][offer_info['card_id']] != undefined)
					{
						parsed_expedition += 	'<div class="craft_offer_button" onclick="show_content(\'craft\');show_card_recipe(\'' + offer_info['card_id'] + '\')">CRAFT</div>';
					}
					if(owned_amount >= offer_info['card_amount'] && offer_info['buysell'] == 'buy' && offer_info['sold'] == undefined)
					{
						parsed_expedition += 	'<div class="complete_expedition_button complete_offer_button buysell_sell" onclick="complete_offer(' + offer_key + ')">SELL</div>';
					}
					if(gamedata['scraps'] >= offer_info['offer_price'] && offer_info['buysell'] == 'sell' && offer_info['sold'] == undefined)
					{
						parsed_expedition += 	'<div class="complete_expedition_button complete_offer_button" onclick="complete_offer(' + offer_key + ')">BUY</div>';
					}
				}
				else
				{
					parsed_expedition += '<span class="single_new_expedition_description">Trade complete.</span>';
				}
				parsed_expedition += 	'<div class="timer" data-complete-time="' + new Date(offer_info['offer_expires']).getTime() + '" data-complete-function="show_single_building"></div>';
				parsed_expedition += '</div>';
				//$('.single_building_content_list').append(parsed_expedition);
				complete_building_list += parsed_expedition;
			});
		}
		if(building_info['show_potions'] != undefined && building_info['show_potions'] == true)
		{
			if(current_building['potions'] == undefined){current_building['potions'] = {};}
			current_building['potions'] = sortObj(current_building['potions']);
			complete_building_list += '<div class="single_expedition production_bar potion_bar">';
			$.each(all_upgrades, function(upgrade_id, upgrade_info){
				if(upgrade_info['upgrade_type'] == 'potion')
				{
					if(current_building['potions'][upgrade_id] != undefined)
					{
						complete_building_list += parse_potion_button(upgrade_id);
					}
					else
					{
						complete_building_list += parse_potion_button(upgrade_id, false);
					}
				}
			});
			complete_building_list += '</div>';
			/*$.each(current_building['potions'], function(potion_id, potion_info){
				complete_building_list += parse_potion_button(potion_id);
			});*/
		}
		var mission_count = 0;
		if(building_info['expeditions'] != undefined)
		{
			if(current_building['expeditions'] == undefined)
			{
				current_building['expeditions'] = {};
				saveToLocalStorage();
			}
			else
			{
				$.each(current_building['expeditions'], function(expedition_key, expedition_info){
					var parsed_expedition = '';
					var current_exp = all_expeditions[expedition_info['expedition_id']];
					parsed_expedition += '<div class="single_expedition"><span class="single_new_expedition_name busy_expedition_name">' + capitalizeFirstLetter(current_exp['name']) + '</span>';
					//parsed_expedition += '<br/><span class="single_new_expedition_description">' + current_exp['description'] + '</span>';
					parsed_expedition += 	'<div class="timer" data-complete-time="' + expedition_info['done_time'] + '" data-complete-show="complete_expedition_button_' + current_building_id + '_' + expedition_key + '" data-complete-hide="cancel_expedition_button_' + current_building_id + '_' + expedition_key + '"></div>';
					parsed_expedition += 	'<div class="complete_expedition_button_' + current_building_id + '_' + expedition_key + ' complete_expedition_button hidden" onclick="complete_expedition(' + expedition_key + ')">COMPLETE</div>';
					if(current_exp['cannot_cancel'] == undefined || current_exp['cannot_cancel'] == false)
					{
						parsed_expedition += 	'<div class="cancel_expedition_button_' + current_building_id + '_' + expedition_key + ' cancel_expedition_button" onclick="cancel_expedition(' + expedition_key + ')">CANCEL</div>';
					}
					parsed_expedition += '</div>';
					//$('.single_building_content_list').append(parsed_expedition);
					complete_building_list += parsed_expedition;
				});
			}

			mission_count += count_object(current_building['expeditions']);
			if(count_object(current_building['expeditions']) < 1/*building_level*/ /*&& building_info['productions'] == undefined) || count_object(current_building['expeditions']) == 0*/)
			{
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_expedition\')">' + building_info['new_expedition_title'] + '</div>');
				//new_expedition_button += '<div class="new_expedition_button" onclick="show_content(\'new_expedition\')">' + building_info['new_expedition_title'] + '</div>';
			}
		}
		if(building_info['adventures'] != undefined)
		{
			if(current_building['adventures'] == undefined)
			{
				current_building['adventures'] = {};
				saveToLocalStorage();
			}
			else
			{
				$.each(current_building['adventures'], function(expedition_key, expedition_info){
					var parsed_expedition = '';
					var current_exp = all_adventures[expedition_info['adventure_id']];
					parsed_expedition += '<div class="single_expedition"><span class="single_new_expedition_name">' + capitalizeFirstLetter(current_exp['name']) + '</span><br/><span class="single_new_expedition_description">' + current_exp['description'] + '<br/><br/>Current party:</span>';
					parsed_expedition += 	'<div class="timer" data-complete-time="' + expedition_info['done_time'] + '" data-complete-show="complete_expedition_button_' + current_building_id + '_' + expedition_key + '" data-complete-hide="cancel_expedition_button_' + current_building_id + '_' + expedition_key + '"></div>';
					parsed_expedition += 	'<div class="complete_expedition_button_' + current_building_id + '_' + expedition_key + ' complete_expedition_button hidden" onclick="complete_adventure(' + expedition_key + ')">COMPLETE</div>';
					parsed_expedition += 	'<div class="cancel_expedition_button_' + current_building_id + '_' + expedition_key + ' cancel_expedition_button" onclick="cancel_adventure(' + expedition_key + ')">CANCEL</div>';
					parsed_expedition += 	'<div class="adventuring_units">';
					$.each(expedition_info['units'], function(useless_key, adventure_unit_id){
						if(all_available_cards[adventure_unit_id] != undefined)
						{
							var parsed_card = parse_card(adventure_unit_id);
							parsed_expedition += 	'<div onclick="show_card_details(\'' + adventure_unit_id + '\')">' + parsed_card + '</div>';
						}
					});
					parsed_expedition += 	'<div style="clear:both;"></div>';
					parsed_expedition += 	'</div>';

					parsed_expedition += '</div>';
					//$('.single_building_content_list').append(parsed_expedition);
					complete_building_list += parsed_expedition;
				});
			}

			mission_count += count_object(current_building['adventures']);
			if(count_object(current_building['adventures']) < 1/*building_level*/ /*&& building_info['productions'] == undefined) || count_object(current_building['expeditions']) == 0*/)
			{
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_adventure\')">' + building_info['new_adventures_title'] + '</div>');
				//new_expedition_button += '<div class="new_expedition_button" onclick="show_content(\'new_expedition\')">' + building_info['new_expedition_title'] + '</div>';
			}
		}
		if((building_info['expeditions'] != undefined || building_info['adventures']) != undefined && mission_count < 1/*building_level*/)
		{
			if(building_info['new_mission_title'] != undefined)
			{
				complete_building_list += '<div class="new_expedition_button" onclick="show_content(\'new_mission\')">' + building_info['new_mission_title'] + '</div><br/>';
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_mission\')">' + building_info['new_mission_title'] + '</div>');
			}
			else
			{
				complete_building_list += '<div class="new_expedition_button" onclick="show_content(\'new_mission\')">ENTER</div><br/>';
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_mission\')">ENTER</div>');
			}
		}
		complete_building_list += '';
		$('.single_building_content_list').html(complete_building_list);
		update_all_timers();
	}
	
}

function buy_next_production(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	if(building_info['productions'][production_id] != undefined && current_building['productions'][production_id] == undefined)
	{
		var scrap_cost = building_info['productions'][production_id]['unlock_cost'];

		if(gamedata['scraps'] >= scrap_cost){
			gamedata['scraps'] -= scrap_cost;
			current_building['productions'][production_id] = {
				level: 			1,
				speed_level: 	1,
				storage_level: 	1,
				last_claimed: 	new Date().getTime(),
			}
			saveToLocalStorage();
			show_single_building();
		}
	}
}

function set_pickable_production(production_id, pickable_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	if(building_info['productions'] != undefined && building_info['productions'][production_id] != undefined && building_info['productions'][production_id]['pickable_productions'] != undefined && building_info['productions'][production_id]['pickable_productions'][pickable_id] != undefined)
	{
		current_building['productions'][production_id]['production_id'] = pickable_id;
		new_time = new Date().getTime();
		current_building['productions'][production_id]['last_claimed'] = new_time;
		saveToLocalStorage();
		show_single_building();
	}
}

function cancel_pickable_production(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	current_building['productions'][production_id]['production_id'] = false;
	saveToLocalStorage();
	show_single_building();
}

function upgrade_production(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var current_production = current_building['productions'][production_id];
	var production_info = 	building_info['productions'][production_id];
	var can_upgrade = true;
	$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
		//var actual_cost = cost_amount * current_production['speed_level'];
		var actual_cost = calculate_production_speed_cost(current_production['speed_level'], cost_amount);
		var owned_amount = 0;
		if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id]}
		if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
		if(owned_amount < actual_cost)
		{
			can_upgrade = false;
		}
	});
	if(can_upgrade == true)
	{
		$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
			//var actual_cost = cost_amount * current_production['speed_level'];
			var actual_cost = calculate_production_speed_cost(current_production['speed_level'], cost_amount);
			if(gamedata['owned_cards'][cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= actual_cost;
			}
			if(cost_id == 'scraps'){gamedata['scraps'] -= actual_cost;}
		});
		current_production['speed_level']++;
		saveToLocalStorage();
	}
	show_single_building();
};

function upgrade_storage(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var current_production = current_building['productions'][production_id];
	var production_info = 	building_info['productions'][production_id];
	var can_upgrade = true;
	$.each(production_info['upgrade_cost_storage'], function(cost_id, cost_amount){
		//var actual_cost = cost_amount * current_production['storage_level'];
		var actual_cost = calculate_production_speed_cost(current_production['storage_level'], cost_amount);
		var owned_amount = 0;
		if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id]}
		if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
		if(owned_amount < actual_cost)
		{
			can_upgrade = false;
		}
	});
	if(can_upgrade == true)
	{
		$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
			//var actual_cost = cost_amount * current_production['storage_level'];
			var actual_cost = calculate_production_speed_cost(current_production['storage_level'], cost_amount);
			if(gamedata['owned_cards'][cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= actual_cost;
			}
			if(cost_id == 'scraps'){gamedata['scraps'] -= actual_cost;}
		});
		current_production['storage_level']++;
		saveToLocalStorage();
	}
	show_single_building();
};

function claim_all_production(){
	var current_building = 	gamedata['town'][current_building_id];
	all_current_rewards = {};
	$.each(current_building['productions'], function(production_id, production_info){
		claim_production(production_id, true);	
	});
	if(count_object(all_current_rewards) > 0)
	{
		current_reward_text = 'You claimed the production.';
		current_reward_origin = 'single_building';
		saveToLocalStorage();
		show_content('current_rewards');
	}
}

function claim_production(production_id, claiming_all){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var current_production = current_building['productions'][production_id];
	var production_info = 	building_info['productions'][production_id];
	//var production_time = Math.floor(production_info['base_time'] / ( 0.65 + (current_production['speed_level'] / 10)));
	var production_time = calculate_production_speed(current_production['speed_level'], production_info['base_time'], production_info['defeated_heroes_speed_bonusses'], production_info['production_achievement_bonus'], current_building['level']);
	var time_elapsed = (new Date().getTime() - current_production['last_claimed']) / 1000;
	var ready_production = Math.floor(time_elapsed / production_time);
	//var max_storage = Math.ceil(production_info['base_storage'] * (0.75 + (current_production['storage_level'] / 4)));
	var max_storage = calculate_production_storage(current_production['storage_level'], production_info['base_storage'], production_info['defeated_heroes_speed_bonusses'], current_building['level']);
	var shown_ready_production = Math.floor(time_elapsed / production_time);
	var actual_result = production_id;
	if(current_building['productions'][production_id]['production_id'] != undefined && current_building['productions'][production_id]['production_id'] != false && all_available_cards[current_building['productions'][production_id]['production_id']] != undefined)
	{
		actual_result = current_building['productions'][production_id]['production_id'];
		//current_building['productions'][production_id]['production_id'] = false;
	}
	if(shown_ready_production > max_storage)
	{
		shown_ready_production = max_storage;
	}
	var new_time = current_production['last_claimed'] + (shown_ready_production * production_time * 1000);
	if(ready_production >= max_storage)
	{
		new_time = new Date().getTime();
	}

	if(shown_ready_production > 0)
	{
		current_production['last_claimed'] = new_time;
		if(claiming_all != undefined && claiming_all == true)
		{
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {reward_id:actual_result,reward_amount:shown_ready_production};
		}
		else
		{
			all_current_rewards = {0:{reward_id:actual_result,reward_amount:shown_ready_production}};
			current_reward_text = 'You claimed the production.';
			current_reward_origin = 'single_building';
			saveToLocalStorage();
			show_content('current_rewards');
		}
	}
}

function clear_all_offers(){
	$.each(gamedata['town'], function(building_id, current_building){
		if(current_building['current_offers'] != undefined)
		{
			current_building['current_offers'] = {};
		}
	});
}

function complete_offer(offer_key){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var offer_info = 	current_building['current_offers'][offer_key];
	var owned_amount = 0;
	if(gamedata['owned_cards'][offer_info['card_id']] != undefined)
	{
		owned_amount = gamedata['owned_cards'][offer_info['card_id']];
	}
	if(offer_info['buysell'] == 'buy')
	{
		if(owned_amount >= offer_info['card_amount'] && offer_info['sold'] == undefined)
		{
			gamedata['owned_cards'][offer_info['card_id']] -= offer_info['card_amount'];
			gamedata['scraps'] += offer_info['offer_price'];
			offer_info['sold'] = true;
			check_quests('sell_card_in_town', undefined, offer_info['card_amount']);
			if(new Date().addMinutes(10) < new Date(offer_info['offer_expires']))
			{
				offer_info['offer_expires'] = new Date().addMinutes(10);
			}
			saveToLocalStorage();
		}
	}
	if(offer_info['buysell'] == 'sell')
	{
		if(gamedata['scraps'] >= offer_info['offer_price'] && offer_info['sold'] == undefined)
		{
			if(gamedata['owned_cards'][offer_info['card_id']] == undefined){gamedata['owned_cards'][offer_info['card_id']] = 0;}
			gamedata['owned_cards'][offer_info['card_id']] += offer_info['card_amount'];
			gamedata['scraps'] -= offer_info['offer_price'];
			offer_info['sold'] = true;
			check_quests('buy_card_in_town', undefined, offer_info['card_amount']);
			if(new Date().addMinutes(10) < new Date(offer_info['offer_expires']))
			{
				offer_info['offer_expires'] = new Date().addMinutes(10);
			}
			saveToLocalStorage();
		}
	}
	show_single_building();
}

function check_current_offers(){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var any_new = false;

	if(current_building['current_offers'] == undefined)
	{
		gamedata['town'][current_building_id]['current_offers'] = {};
	}
	for (var i = 0; i < /*building_level*/ 1; i++) {
		if(new Date(current_building['current_offers'][i]['offer_expires']).toString() == 'Invalid Date')
		{
			current_building['current_offers'][i]['offer_expires'] = new Date().addMinutes(10);
		}
		if(current_building['current_offers'][i] != undefined && new Date(current_building['current_offers'][i]['offer_expires']) < new Date())
		{
			delete current_building['current_offers'][i];
		}
		if(current_building['current_offers'][i] == undefined)
		{
			delete current_building['current_offers'][i];
		}
		if(current_building['current_offers'][i] == undefined)
		{
			current_building['current_offers'][i] = create_new_building_offer(building_info);
			any_new = true;
		}
	};

	if(any_new == true)
	{
		saveToLocalStorage();
	}
}

function create_new_building_offer(building_info){
	var buysell = 'buy';
	if(Math.random() > 0.75){buysell = 'sell';}
	var found_card = false;
	if(buysell == 'buy')
	{
		if(Math.random() > 0.1)
		{
			var possible_cards = {};
			$.each(gamedata['owned_cards'], function(recipe_id,useless_info){
				if(match_array_values(all_available_cards[recipe_id]['type'], building_info['shop_type']))
				{
					possible_cards[recipe_id] = true;
				}
			});
			
			if(count_object(possible_cards) > 0)
			{
				found_card = get_random_key_from_object(possible_cards);
			}
		}
		if(found_card == false && gamedata['known_recipes'] != undefined && count_object(gamedata['known_recipes']) > 4 && Math.random() > 0.3)
		{
			var possible_cards = {};
			$.each(gamedata['known_recipes'], function(recipe_id,useless_info){
				if(match_array_values(all_available_cards[recipe_id]['type'], building_info['shop_type']))
				{
					possible_cards[recipe_id] = true;
				}
			});
			
			if(count_object(possible_cards) > 0)
			{
				found_card = get_random_key_from_object(possible_cards);
			}
		}
	}
	if(found_card == false)
	{
		found_card = get_random_card(building_info['shop_type']);
	}

	var found_offer = false;
	if(found_card != false)
	{
		var offer_amount = /*Math.ceil(Math.random() * 2) + 0*/ 1;
		if(buysell == 'buy' && gamedata['owned_cards'][found_card] != undefined && offer_amount < gamedata['owned_cards'][found_card] && gamedata['owned_cards'][found_card] > 0)
		{
			offer_amount = Math.ceil(Math.random() * gamedata['owned_cards'][found_card] * 1);
		}
		var offer_price = Math.ceil(all_available_cards[found_card]['value'] * offer_amount * (1 + (Math.random() * (5 / get_upgrade_factor('merchant_' + buysell, undefined, true)))));
		if(buysell == 'buy')
		{
			offer_price = Math.ceil(all_available_cards[found_card]['value'] * offer_amount * ((Math.random() * (get_upgrade_factor('merchant_' + buysell, undefined, true) - 1)) + 1 ));
		}
		
		found_offer = {
			card_id: 		found_card,
			buysell: 		buysell,
			card_amount: 	offer_amount,
			offer_price: 	offer_price,
			offer_expires: 	new Date().addHours(1)
		}
	}
	return found_offer;
}

function show_upgrade_building(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_building = all_buildings[gamedata['town'][current_building_id]['building_id']];
		$('.upgrade_content').html('');
		var owned_fragments = 0;
		if(gamedata['owned_cards'][current_building['fragment_id']] != undefined)
		{
			owned_fragments = gamedata['owned_cards'][current_building['fragment_id']];
		}
		var upgrade_cost = calculate_upgrade_cost(gamedata['town'][current_building_id]['level']);
		var parsed_cost = parse_card(current_building['fragment_id'], owned_fragments + ' / ' + upgrade_cost);
		if(owned_fragments < upgrade_cost)
		{
			parsed_cost = parse_card(current_building['fragment_id'], '<span style="color:red">' + owned_fragments + ' / ' + upgrade_cost + '</span>');
		}
		if(gamedata['scraps'] < upgrade_cost * building_scraps_cost)
		{
			parsed_cost += parse_card('scraps_placeholder', '<span style="color:red">' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(upgrade_cost * building_scraps_cost) + '</span>');
		}
		else
		{
			parsed_cost += parse_card('scraps_placeholder', '' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(upgrade_cost * building_scraps_cost) + '');
		}
		$('.upgrade_content').append('<div class="fragment_cost">' + parsed_cost + '</div>');

		$('.upgrade_content').append('<div class="construction_name">' + capitalizeFirstLetter(current_building['name']) + '</div>');
		if(gamedata['owned_cards'][current_building['fragment_id']] < upgrade_cost || gamedata['scraps'] < upgrade_cost * building_scraps_cost)
		{
			$('.upgrade_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['upgrade_description']) + '</div>');
		}
		else
		{
			$('.upgrade_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['upgrade_description']) + '</div>');
			$('.upgrade_content').append('<div onclick="upgrade_current_building()" class="construction_button">UPGRADE</div>');
		}
	}
}

function calculate_upgrade_cost(level){
	var upgrade_cost = Math.floor(base_building_cost * (level * (1 + (level / 2))));
	return upgrade_cost;
}

function show_delete_building(){
	var building_total_fragment_cost = base_building_cost;
	for (var i = gamedata['town'][current_building_id]['level'] - 1; i > 0; i--) {
		building_total_fragment_cost += calculate_upgrade_cost(i);
	};
	$('.returned_fragments').html(building_total_fragment_cost);
}

function delete_current_building(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_total_fragment_cost = base_building_cost;
		/*for (var i = gamedata['town'][current_building_id]['level'] - 1; i > 0; i--) {
			building_total_fragment_cost += calculate_upgrade_cost(i);
		};*/
		var fragment_id = building_info['fragment_id'];
		all_current_rewards = {0:{reward_id:fragment_id,reward_amount:building_total_fragment_cost}};
		current_reward_text = 'The building has been destroyed.';
		current_reward_origin = 'town';
		delete gamedata['town'][current_building_id];
		saveToLocalStorage();
		show_content('current_rewards');
	}
}

function show_new_mission(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_content').html('');

		var total_possible_missions = 0;
		var total_mission_cost = 0;
		var first_mission_id = '';
		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];
		$.each(building_info['expeditions'], function(useless_id, expedition_id){
			if(all_expeditions[expedition_id] != undefined)
			{
				if(first_mission_id == ''){first_mission_id = '' + expedition_id;}
				total_possible_missions += 1;
				var current_exp = all_expeditions[expedition_id];
				var can_start = true;
				var single_new_expedition = '';
				single_new_expedition += '<div class="single_new_expedition">';
				single_new_expedition += 	'<div class="single_new_expedition_name">';
				single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
				single_new_expedition += 	'</div>';
				single_new_expedition += 	current_exp['description'];
				if(count_object(current_exp['costs']) > 0)
				{
					single_new_expedition += 	'<b>Cost:</b>';
				}
				single_new_expedition += 	'<div class="expedition_costs">';
				$.each(current_exp['costs'], function(cost_id, cost_amount){
					total_mission_cost += 1;
					var cost_color = '';
					if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(cost_id == 'scraps')
					{
						single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}
					if(all_available_cards[cost_id] != undefined)
					{
						var owned_amount = 0;
						if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
						{
							owned_amount = gamedata['owned_cards'][cost_id];
						}
						single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}

				});
				single_new_expedition += 	'</div>';

				if(current_exp['rewards'] != undefined)
				{
					single_new_expedition += 	'<b>Possible rewards</b>';
				
					single_new_expedition += 	'<div class="possible_rewards">';
					$.each(current_exp['rewards'], function(cost_id, cost_amount){
						if(cost_id == 'scraps')
						{
							//single_new_expedition += 	'Scraps<br/>';
							var parsed_card = parse_card('scraps_placeholder');
							single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
						}
						if(cost_id == 'potion')
						{
							//console.log('ding');
							var parsed_card = parse_card('potion_placeholder');
							single_new_expedition += 	'<div>' + parsed_card+ '</div>';
						}
						if(all_available_cards[cost_id] != undefined)
						{
							//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
							var parsed_card = parse_card(cost_id);
							single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
						}

					});
					single_new_expedition += 	'<div style="clear:both;"></div>';
					single_new_expedition += 	'</div>';
				}
				if(can_start == true)
				{
					single_new_expedition += 	'<div class="start_new_expedition" onclick="start_new_expedition(\'' + expedition_id + '\')">START</div>';
				}
				single_new_expedition += '</div>';

				$('.new_expedition_content').append(single_new_expedition);
			}
		});
		$.each(building_info['adventures'], function(useless_id, expedition_id){

			if(all_adventures[expedition_id] != undefined)
			{
				total_possible_missions += 1;
				console.log(expedition_id);
				var current_exp = all_adventures[expedition_id];
				var can_start = true;
				var single_new_expedition = '';
				single_new_expedition += '<div class="single_new_expedition">';
				single_new_expedition += 	'<div class="single_new_expedition_name">';
				single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
				single_new_expedition += 	'</div>';
				single_new_expedition += 	current_exp['description'];
				if(count_object(current_exp['costs']) > 0)
				{
					single_new_expedition += 	'<b>Cost:</b>';
				}
				single_new_expedition += 	'<div class="expedition_costs">';
				$.each(current_exp['costs'], function(cost_id, cost_amount){
					total_mission_cost += 1;
					var cost_color = '';
					if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(cost_id == 'scraps')
					{
						single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}
					if(all_available_cards[cost_id] != undefined)
					{
						var owned_amount = 0;
						if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
						{
							owned_amount = gamedata['owned_cards'][cost_id];
						}
						single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}

				});
				single_new_expedition += 	'</div>';

				if(current_exp['rewards'] != undefined)
				{
					single_new_expedition += 	'<b>Possible rewards</b>';
				
					single_new_expedition += 	'<div class="possible_rewards">';
					$.each(current_exp['rewards'], function(cost_id, cost_amount){
						if(cost_id == 'scraps')
						{
							//single_new_expedition += 	'Scraps<br/>';
							var parsed_card = parse_card('scraps_placeholder');
							single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
						}
						if(all_available_cards[cost_id] != undefined)
						{
							//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
							var parsed_card = parse_card(cost_id);
							single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
						}

					});
					single_new_expedition += 	'<div style="clear:both;"></div>';
					single_new_expedition += 	'</div>';
				}
				if(can_start == true)
				{
					single_new_expedition += 	'<div class="start_new_expedition" onclick="current_adventure=\'' + expedition_id + '\';current_adventure_units={};show_content(\'adventure_units\')">START</div>';
				}
				single_new_expedition += '</div>';

				$('.new_expedition_content').append(single_new_expedition);
				/*if(count_object(building_info['adventures']) == 1 && (current_exp['costs'] == undefined || count_object(current_exp['costs']) == 0))
				{
					$('.single_adventure_back').show();
					$('.multiple_adventure_back').hide();
					current_adventure=expedition_id;
					current_adventure_units={};
					show_content('adventure_units');
				}
				else
				{
					$('.single_adventure_back').hide();
					$('.multiple_adventure_back').show();
				}*/
			}
		});
		if(total_possible_missions == 1 && total_mission_cost == 0 && first_mission_id != undefined)
		{
			start_new_expedition(first_mission_id);
		}
	}
};

function show_new_expedition(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_content').html('');

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];
		if(building_info['expeditions'] == undefined)
		{
			show_content('town');
		}
		else
		{
			$.each(building_info['expeditions'], function(useless_id, expedition_id){
				if(all_expeditions[expedition_id] != undefined)
				{
					var current_exp = all_expeditions[expedition_id];
					var can_start = true;
					var single_new_expedition = '';
					single_new_expedition += '<div class="single_new_expedition">';
					single_new_expedition += 	'<div class="single_new_expedition_name">';
					single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
					single_new_expedition += 	'</div>';
					single_new_expedition += 	current_exp['description'];
					if(count_object(current_exp['costs']) > 0)
					{
						single_new_expedition += 	'<b>Cost:</b>';
					}
					single_new_expedition += 	'<div class="expedition_costs">';
					$.each(current_exp['costs'], function(cost_id, cost_amount){
						var cost_color = '';
						if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(cost_id == 'scraps')
						{
							single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}
						if(all_available_cards[cost_id] != undefined)
						{
							var owned_amount = 0;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
							{
								owned_amount = gamedata['owned_cards'][cost_id];
							}
							single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}

					});
					single_new_expedition += 	'</div>';

					if(current_exp['rewards'] != undefined)
					{
						single_new_expedition += 	'<b>Possible rewards</b>';
					
						single_new_expedition += 	'<div class="possible_rewards">';
						$.each(current_exp['rewards'], function(cost_id, cost_amount){
							if(cost_id == 'scraps')
							{
								//single_new_expedition += 	'Scraps<br/>';
								var parsed_card = parse_card('scraps_placeholder');
								single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
							}
							if(all_available_cards[cost_id] != undefined)
							{
								//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
								var parsed_card = parse_card(cost_id);
								single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
							}

						});
						single_new_expedition += 	'<div style="clear:both;"></div>';
						single_new_expedition += 	'</div>';
					}
					if(can_start == true)
					{
						single_new_expedition += 	'<div class="start_new_expedition" onclick="start_new_expedition(\'' + expedition_id + '\')">START</div>';
					}
					single_new_expedition += '</div>';

					$('.new_expedition_content').append(single_new_expedition);
				}
			});
		}
	}
}

function show_new_adventure(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_content').html('');

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];
		if(building_info['adventures'] == undefined)
		{
			show_content('town');
		}
		else
		{
			$.each(building_info['adventures'], function(useless_id, expedition_id){
				if(all_adventures[expedition_id] != undefined)
				{
					var current_exp = all_adventures[expedition_id];
					var can_start = true;
					var single_new_expedition = '';
					single_new_expedition += '<div class="single_new_expedition">';
					single_new_expedition += 	'<div class="single_new_expedition_name">';
					single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
					single_new_expedition += 	'</div>';
					single_new_expedition += 	current_exp['description'];
					if(count_object(current_exp['costs']) > 0)
					{
						single_new_expedition += 	'<b>Cost:</b>';
					}
					single_new_expedition += 	'<div class="expedition_costs">';
					$.each(current_exp['costs'], function(cost_id, cost_amount){
						var cost_color = '';
						if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(cost_id == 'scraps')
						{
							single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}
						if(all_available_cards[cost_id] != undefined)
						{
							var owned_amount = 0;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
							{
								owned_amount = gamedata['owned_cards'][cost_id];
							}
							single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}

					});
					single_new_expedition += 	'</div>';

					if(current_exp['rewards'] != undefined)
					{
						single_new_expedition += 	'<b>Possible rewards</b>';
					
						single_new_expedition += 	'<div class="possible_rewards">';
						$.each(current_exp['rewards'], function(cost_id, cost_amount){
							if(cost_id == 'scraps')
							{
								//single_new_expedition += 	'Scraps<br/>';
								var parsed_card = parse_card('scraps_placeholder');
								single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
							}
							if(all_available_cards[cost_id] != undefined)
							{
								//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
								var parsed_card = parse_card(cost_id);
								single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
							}

						});
						single_new_expedition += 	'<div style="clear:both;"></div>';
						single_new_expedition += 	'</div>';
					}
					if(can_start == true)
					{
						single_new_expedition += 	'<div class="start_new_expedition" onclick="current_adventure=\'' + expedition_id + '\';current_adventure_units={};show_content(\'adventure_units\')">START</div>';
					}
					single_new_expedition += '</div>';

					$('.new_expedition_content').append(single_new_expedition);
					if(count_object(building_info['adventures']) == 1 && (current_exp['costs'] == undefined || count_object(current_exp['costs']) == 0))
					{
						$('.single_adventure_back').show();
						$('.multiple_adventure_back').hide();
						current_adventure=expedition_id;
						current_adventure_units={};
						show_content('adventure_units');
					}
					else
					{
						$('.single_adventure_back').hide();
						$('.multiple_adventure_back').show();
					}
				}
			});
		}
	}
}

var current_adventure_units_page = 1;

function show_adventure_units(){
	var max_cards_per_page = 8;
	var can_start = false;
	$('.selected_adventure_units').html('');
	if(all_adventures[current_adventure] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_adventure_info = all_adventures[current_adventure];
		var all_parsed_adventure_units = '';
		for (var i = 0; i < current_adventure_info['unit_count']; i++) {
			var parsed_adventure_unit = '<div class="adventure_unit">';
			if(current_adventure_units[i] != undefined)
			{
				if(all_available_cards[current_adventure_units[i]] == undefined || gamedata['owned_cards'][current_adventure_units[i]] < 1)
				{
					delete current_adventure_units[i];
				}
				else
				{
					parsed_adventure_unit += '<div onclick="remove_adventure_unit(' + i + ')">' + parse_card(current_adventure_units[i]) + '</div>';
					can_start = true;
				}

			}
			else
			{

			}
			parsed_adventure_unit += '</div>';
			all_parsed_adventure_units += parsed_adventure_unit;
		};
		$('.selected_adventure_units').html(all_parsed_adventure_units);

		// SHOW CARDS YOU CAN PICK
		$('.creature_type_filter').prop("checked", true);

		$('.adventure_units_list').html('');

		var tinkering_list = '';
		var cards_displayed = 0;

		var collectable = 0;

		$.each(all_available_cards, function(card_id, card_info){
			var effectively_owned = 0;
			if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
			{
				effectively_owned = gamedata['owned_cards'][card_id];
			}
			$.each(current_adventure_units, function(useless_key, adventure_unit_id){
				if(card_id == adventure_unit_id)
				{
					effectively_owned -= 1;
				}
			});
			var suggested = true;
			if(suggest_mode == 'matched')
			{
				suggested = false;
				$.each(card_info['abilities'], function(ability_key, ability_level){
					if(match_array_values(current_adventure_info['ability_suggestions'], ability_key) == true)
					{
						suggested = true;
					}
				});
				if(card_info['subtypes'] != undefined && current_adventure_info['ability_suggestions'] != undefined && match_array_values(current_adventure_info['ability_suggestions'], card_info['subtypes']) == true)
				{
					suggested = true;
				}
				
				
			}
			if(check_filters(card_id) == false && card_info['type'] == 'creature' && effectively_owned > 0 && suggested == true)
			{
				cards_displayed ++;
				
				if(cards_displayed > (current_adventure_units_page * max_cards_per_page) - max_cards_per_page && cards_displayed <= current_adventure_units_page * max_cards_per_page)
				{
					var parsed_card = parse_card(card_id, effectively_owned);
					if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
					{
						tinkering_list += '<div onclick="add_adventure_unit(\'' + card_id + '\')">' + parsed_card + '</div>';
					}
				}
			}

		});

		if(cards_displayed > max_cards_per_page)
		{
			$('#content_adventure_units .page_selection').show();
			if(current_adventure_units_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
			if(cards_displayed / max_cards_per_page <= current_adventure_units_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
			if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
			$('.page_selection .page_number').html(current_adventure_units_page + ' / ' + Math.ceil(cards_displayed / max_cards_per_page));
		}
		else
		{
			$('#content_adventure_units .page_selection').hide();
		}

		if(cards_displayed > 0 && Math.ceil(cards_displayed / max_cards_per_page) < current_adventure_units_page)
		{
			current_adventure_units_page = 1;
			show_adventure_units();
		}
		else
		{
			if(tinkering_list != '')
			{
				$('.adventure_units_list').html('' + tinkering_list + '');
			}
		}
		if(can_start == true)
		{
			$('.selected_adventure_units').append('<div class="start_new_expedition" onclick="start_adventure()">START</div>');
		}
	}
}

function start_adventure(){
	var current_exp = all_adventures[current_adventure];
	var can_start = true;
	$.each(current_exp['costs'], function(cost_id, cost_amount){
		if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
		{
			can_start = false;
		}
		else
		{
			if(cost_id == 'scraps')
			{
				gamedata['scraps'] -= cost_amount;
			}
		}
		if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
		{
			can_start = false;
		}
		else
		{
			if(all_available_cards[cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= cost_amount;
			}
		}
	});
	$.each(current_adventure_units, function(useless_key, card_id){
		if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
		{
			gamedata['owned_cards'][card_id] -= 1;
		}
	});
	if(can_start == true && gamedata['town'][current_building_id] != undefined && count_object(current_adventure_units) > 0)
	{
		if(gamedata['town'][current_building_id]['adventures'] == undefined)
		{
			gamedata['town'][current_building_id]['adventures'] = {};
		}
		var new_expedition_key = get_highest_key_in_object(gamedata['town'][current_building_id]['adventures']) + 1;
		var time_now = new Date().getTime();
		var done_time = time_now + (current_exp['time'] * 1000);
		gamedata['town'][current_building_id]['adventures'][new_expedition_key] = {
			adventure_id: 	current_adventure,
			done_time: 		done_time,
			units: 			current_adventure_units,
		};
		saveToLocalStorage();
	}
	show_content('single_building');
}

function complete_adventure(adventure_key){
	var current_building = 	gamedata['town'][current_building_id];
	var current_adventure = current_building['adventures'][adventure_key];
	var adventure_result = all_adventure_results[get_random_key_from_object_based_on_num_value(all_adventures[current_adventure['adventure_id']]['results'])];
	var success_rate = adventure_result['base_success'] + 0;
	$.each(adventure_result['bonus_success'], function(bonus_type,bonus_amount){
		$.each(current_adventure['units'], function(useless_key, card_id){
			var current_card = all_available_cards[card_id];
			if(typeof(bonus_amount) == 'number' && current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'number' && current_card[bonus_type] > 0)
			{
				success_rate += bonus_amount * current_card[bonus_type];
			}
			if(typeof(bonus_amount) == 'object' && current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'object')
			{
				$.each(bonus_amount, function(subkey, sub_bonus_amount){
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'number')
					{
						success_rate += sub_bonus_amount * current_card[bonus_type][subkey];
					}
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'object')
					{
						success_rate += sub_bonus_amount;
					}
					if(match_array_values(subkey, current_card[bonus_type]) == true)
					{
						success_rate += sub_bonus_amount;
					}
				});
				
			}
		});
	});
	if((adventure_result['base_success'] == undefined || adventure_result['base_success'] <= 90) && success_rate > 90)
	{
		success_rate = 90;
	}
	console.log('success chance: ' + success_rate);
	var survive_chances = {};
	$.each(current_adventure['units'], function(useless_key, unit_id){
		survive_chances[useless_key] = 0;
		if(adventure_result['survive_chance'] == undefined)
		{survive_chances[useless_key] = 100;}
		else
		{survive_chances[useless_key] = adventure_result['survive_chance'];}
		$.each(adventure_result['bonus_survive'], function(bonus_type,bonus_amount){
			var current_card = all_available_cards[unit_id];
			if(current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'number' && current_card[bonus_type] > 0)
			{
				survive_chances[useless_key] += bonus_amount * current_card[bonus_type];
			}
			if(typeof(bonus_amount) == 'object' && current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'object')
			{
				$.each(bonus_amount, function(subkey, sub_bonus_amount){
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'number')
					{
						survive_chances[useless_key] += sub_bonus_amount * current_card[bonus_type][subkey];
					}
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'object')
					{
						survive_chances[useless_key] += sub_bonus_amount;
					}
					if(match_array_values(subkey, current_card[bonus_type]) == true)
					{
						survive_chances[useless_key] += sub_bonus_amount;
					}
				});
				
			}
		});
		if(adventure_result['survive_chance'] != undefined && adventure_result['survive_chance'] < 90 && survive_chances[useless_key] > 90)
		{
			survive_chances[useless_key] = 90;
		}
		console.log('survive chance: ' + unit_id + ' ' + survive_chances[useless_key]);
	});
	all_current_rewards 	= {};
	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';
	var any_survived = false;
	$.each(current_adventure['units'], function(useless_key, unit_id){
		if(survive_chances[useless_key] >= Math.random() * 100)
		{
			any_survived = true;
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		unit_id,
				reward_amount: 	1,
				no_faction: 	true
			}
		}
	});
	if(success_rate >= Math.random() * 100 && any_survived == true)
	{
		current_reward_text = adventure_result['success_text'];
		
		$.each(adventure_result['rewards'], function(reward_id, reward_amounts){
			var actual_amount = round_by_percent(Math.random() * (reward_amounts['max'] - reward_amounts['min'])) + reward_amounts['min'];
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_id,
				reward_amount: 	actual_amount,
			}
		});
	}
	else
	{
		if(any_survived == true)
		{
			current_reward_text = adventure_result['fail_text'];
		}
		else
		{
			current_reward_text = adventure_result['no_return_text'];
		}
		
	}
	delete current_building['adventures'][adventure_key];
	show_content('current_rewards');
}

function cancel_adventure(adventure_key){
	var current_building = 	gamedata['town'][current_building_id];
	var current_adventure = current_building['adventures'][adventure_key];
	var adventure_result = all_adventure_results[get_random_key_from_object_based_on_num_value(all_adventures[current_adventure['adventure_id']]['results'])];
	all_current_rewards 	= {};
	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';
	$.each(current_adventure['units'], function(useless_key, unit_id){
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		unit_id,
			reward_amount: 	1,
			no_faction: 	true
		}
	});
	delete current_building['adventures'][adventure_key];
	show_content('current_rewards');
}

function set_adventure_units_page(amount){
	current_adventure_units_page += amount;
	if(current_adventure_units_page < 1){current_adventure_units_page = 1;}
	show_adventure_units();
};

function remove_adventure_unit(unit_id){
	delete current_adventure_units[unit_id];
	show_adventure_units();
}

function add_adventure_unit(unit_id){
	var new_slot = -1;
	var current_adventure_info = all_adventures[current_adventure];
	for (var i = 0; i < current_adventure_info['unit_count']; i++) {
		if(current_adventure_units[i] == undefined && new_slot == -1)
		{
			new_slot = i;
		}
	};
	if(new_slot != -1)
	{
		current_adventure_units[new_slot] = unit_id;
	}
	show_adventure_units();
}

function start_new_expedition(expedition_id){
	$('.new_expedition_content').html('');
	var current_exp = all_expeditions[expedition_id];
	var can_start = true;
	$.each(current_exp['costs'], function(cost_id, cost_amount){
		if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
		{
			can_start = false;
		}
		else
		{
			if(cost_id == 'scraps')
			{
				gamedata['scraps'] -= cost_amount;
			}
		}
		if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
		{
			can_start = false;
		}
		else
		{
			if(all_available_cards[cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= cost_amount;
			}
		}
	});
	if(can_start == true && gamedata['town'][current_building_id] != undefined)
	{
		if(gamedata['town'][current_building_id]['expeditions'] == undefined)
		{
			gamedata['town'][current_building_id]['expeditions'] = {};
		}
		var new_expedition_key = get_highest_key_in_object(gamedata['town'][current_building_id]['expeditions']) + 1;
		var time_now = new Date().getTime();
		var done_time = time_now + (current_exp['time'] * 1000);
		gamedata['town'][current_building_id]['expeditions'][new_expedition_key] = {
			expedition_id: 	expedition_id,
			done_time: 		done_time,
		};
		saveToLocalStorage();
	}
	show_content('single_building');
}

function complete_expedition(expedition_key){
	//$('.single_building_content').html('');
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var to_complete_exp = 	current_building['expeditions'][expedition_key];
	var current_exp = 		all_expeditions[to_complete_exp['expedition_id']];

	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';

	if(to_complete_exp != undefined && to_complete_exp['done_time'] <= new Date().getTime())
	{
		all_current_rewards = {};
		if(current_exp['possible_results'] == undefined)
		{
			if(current_exp['allways_rewards'] != undefined)
			{
				$.each(current_exp['allways_rewards'], function(allways_id, allways_amount){
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		allways_id,
						reward_amount: 	allways_amount,
					}
				});
			}

			if(current_exp['success_chance'] == undefined || Math.random() * 100 < current_exp['success_chance'])
			{
				current_reward_text = current_exp['success_text'];
				if(current_exp['success_rewards'] != undefined)
				{
					$.each(current_exp['success_rewards'], function(allways_id, allways_amount){
						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		allways_id,
							reward_amount: 	allways_amount,
						}
					});
				}
				var success_picks = 1;
				if(current_exp['success_picks'] != undefined)
				{
					success_picks = current_exp['success_picks'];
				}
				for(var i = 1;i <= success_picks; i++)
				{
					var chosen_reward = get_random_key_from_object(current_exp['rewards']);
					var reward_amount = Math.floor((Math.random() * current_exp['rewards'][chosen_reward]) + current_exp['rewards'][chosen_reward]);
					if(reward_amount < 1){reward_amount = 1;}

					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		chosen_reward,
						reward_amount: 	reward_amount,
					}
				}
				/*if(chosen_reward == 'scraps')
				{
					gain_scraps(reward_amount);
				}
				if(all_available_cards[chosen_reward] != undefined)
				{
					for(i = 0;i < reward_amount;i++)
					{
						gain_card(chosen_reward);
					}
					show_card_details(chosen_reward, undefined, reward_amount);
				}*/
				/*if(current_exp['return_cost_on_success'] != undefined && Math.random() * 100 < current_exp['return_cost_on_success'])
				{
					return_exp_cost(to_complete_exp['expedition_id']);
				}*/
			}
			else
			{
				current_reward_text = current_exp['fail_text'];
				if(current_exp['fail_rewards'] != undefined)
				{
					var chosen_reward = get_random_key_from_object(current_exp['fail_rewards']);
					var reward_amount = Math.floor((Math.random() * current_exp['fail_rewards'][chosen_reward]) + current_exp['fail_rewards'][chosen_reward]);
					if(reward_amount < 1){reward_amount = 1;}

					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		chosen_reward,
						reward_amount: 	reward_amount,
					}
				}
				/*if(current_exp['return_cost_on_failure'] != undefined && Math.random() * 100 < current_exp['return_cost_on_failure'])
				{
					return_exp_cost(to_complete_exp['expedition_id']);
				}
				$('.detail_overlay  .card_detail').html('<div class="big_text"><span class="big_text_header">Failure</span><br/>' + current_exp['fail_text'] + '</div>');
				$('.detail_overlay').removeClass('hidden');*/
			}
		}
		else
		{
			var chosen_reward = get_random_key_from_object_based_on_num_value(current_exp['possible_results']);
			//console.log(chosen_reward);
			if(all_expedition_results[chosen_reward] != undefined)
			{
				current_reward_text = all_expedition_results[chosen_reward]['text'];
				$.each(all_expedition_results[chosen_reward]['base_rewards'], function(reward_id, reward_amounts){
					var actual_amount = round_by_percent(Math.random() * (reward_amounts['max'] - reward_amounts['min'])) + reward_amounts['min'];
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		reward_id,
						reward_amount: 	actual_amount,
					}
				});
				if(all_expedition_results[chosen_reward]['additional_reward_picks'] != undefined)
				{
					for(var i = 1;i <= all_expedition_results[chosen_reward]['additional_reward_picks']; i++)
					{
						var reward_id = get_random_key_from_object_based_on_num_value(all_expedition_results[chosen_reward]['additional_reward_chances']);
						var reward_amounts = all_expedition_results[chosen_reward]['additional_rewards'][reward_id];
						var actual_amount = round_by_percent(Math.random() * (reward_amounts['max'] - reward_amounts['min'])) + reward_amounts['min'];
						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		reward_id,
							reward_amount: 	actual_amount,
						}
					}
				}
			}
		}

		
		
		delete gamedata['town'][current_building_id]['expeditions'][expedition_key];
		//saveToLocalStorage();
	}
	show_content('current_rewards');
}

function cancel_expedition(expedition_key){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var to_complete_exp = 	current_building['expeditions'][expedition_key];
	var current_exp = 		all_expeditions[to_complete_exp['expedition_id']];

	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';
	do_no_apply_factions 	= true;

	all_current_rewards = {};
	if(current_exp['costs'] != undefined)
	{
		$.each(current_exp['costs'], function(allways_id, allways_amount){
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		allways_id,
				reward_amount: 	allways_amount,
			}
		});
	}
	
	delete gamedata['town'][current_building_id]['expeditions'][expedition_key];
	saveToLocalStorage();
	
	show_content('current_rewards');
}

function show_current_rewards(){
	$('.current_rewards_content').html('');
	var parsed_rewards = '';
	var gained_scraps = 0;
	var highest_value = 0;
	var highest_value_key = false;
	var multiple_highest_values = false
	var lowest_owned = false;
	var lowest_owned_key = false;
	var multiple_lowest_owned = false;
	var reward_count = count_object(all_current_rewards);

	$.each(all_current_rewards, function(useless_key_1, reward_1){
		if(reward_1['reward_id'] == 'scraps_placeholder')
		{
			reward_1['reward_id'] = 'scraps';
		}
		if(all_current_rewards[useless_key_1]['reward_amount'] == 0)
		{
			delete all_current_rewards[useless_key_1];
		}
		else
		{
			$.each(all_current_rewards, function(useless_key_2, reward_2){
				if(all_current_rewards[useless_key_2] != undefined && reward_1['reward_id'] == reward_2['reward_id'] && useless_key_1 < useless_key_2)
				{
					all_current_rewards[useless_key_1]['reward_amount'] += all_current_rewards[useless_key_2]['reward_amount'];
					delete all_current_rewards[useless_key_2];
				}
			});
		}
	});

	if(gamedata['factions'] != undefined && do_no_apply_factions == false)
	{
		$.each(gamedata['factions'], function(faction_id, faction_info){
			var faction_level = faction_info['level'];
			if(all_factions[faction_id] != undefined)
			{
				$.each(all_current_rewards, function(useless_key, reward){
					$.each(all_factions[faction_id]['loot_bonus'], function(loot_id, bonus_amount){
						if(reward['reward_id'] == loot_id && reward['no_faction'] == undefined)
						{
							reward['reward_amount'] = round_by_percent(reward['reward_amount'] * (1 + (faction_level * bonus_amount / 100)));
						}
					});
				});
			}
		});
	}
	if(gamedata['upgrades'] != undefined /*&& do_no_apply_factions == false*/)
	{
		$.each(all_current_rewards, function(useless_key, reward){
			var loot_factor = get_upgrade_factor('loot', [reward['reward_id']], true);
			//console.log(loot_factor);
			reward['reward_amount'] = round_by_percent(reward['reward_amount'] * loot_factor);
		});
	}
	

	/*$.each(all_current_rewards, function(useless_key_1, reward_1){
		if(all_available_cards[reward_1['reward_id']] != undefined && all_available_cards[reward_1['reward_id']]['type'] == 'recipe')
		{
			if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][all_available_cards[reward_1['reward_id']]['recipe']] != undefined)
			{
				delete all_current_rewards[useless_key_1];
			}
		}
	});*/
	do_no_apply_factions = false;
	var pickable_count = 0;
	$.each(all_current_rewards, function(useless_key, reward){
		if(reward['pickable'] != undefined && reward['pickable'] == true)
		{
			pickable_count++;
		}
	});
	if(pickable_count == 1)
	{
		$.each(all_current_rewards, function(useless_key, reward){
			if(reward['pickable'] != undefined && reward['pickable'] == true)
			{
				delete all_current_rewards[useless_key]['pickable'];
			}
		});
	}
	if(current_reward_text != undefined)
	{
		parsed_rewards += '<div class="reward_text">' + current_reward_text + '</div>';
	}
	$.each(all_current_rewards, function(useless_key, reward){
		//console.log(reward['reward_id']);
		if(reward['reward_id'] == 'scraps')
		{
			//gain_scraps(reward_amount);
			if(reward['pickable'] == undefined || reward['pickable'] == false)
			{
				if(gamedata['scraps'] == undefined)
				{
					gamedata['scraps'] = reward['reward_amount'];
				}
				else
				{
					gamedata['scraps'] += reward['reward_amount'];
				}
				check_quests('gained_scraps', undefined, reward['reward_amount']);
				check_quests('scraps_owned', gamedata['scraps']);
				gained_scraps += reward['reward_amount'];
			}
			else
			{
				var parsed_single_reward = parse_card('scraps_placeholder', reward['reward_amount']);
				parsed_rewards += '<div class="single_current_reward reward_' + useless_key + '">' + parsed_single_reward + '<div class="menu_button slim pick_reward_button" onclick="pick_reward(' + useless_key + ')">PICK</div></div>';
			}
		}
		if(reward['reward_id'] == 'potion')
		{
			var learned_potion = get_random_upgrade('potion');
			var found_new_potion = false;
			//current_building_id = 'alchemist';
			if(gamedata['town'][current_building_id] == undefined){gamedata['town'][current_building_id] = {building_id:'alchemist'};}
			if(gamedata['town'][current_building_id]['potions'] == undefined){gamedata['town'][current_building_id]['potions'] = {};}
			if(gamedata['town'][current_building_id]['potions'][learned_potion] == undefined){found_new_potion = true;}
			var potion_name = all_upgrades[learned_potion]['name'];
			var parsed_single_reward = parse_card('potion_placeholder', undefined, undefined, potion_name);
			if(found_new_potion == false)
			{
				if(gamedata['upgrades'][learned_potion] == undefined){gamedata['upgrades'][learned_potion] = 1;}else{gamedata['upgrades'][learned_potion]++;}
				parsed_rewards += '<div class="single_current_reward">' + parsed_single_reward + '</div>';
			}
			else
			{
				gamedata['town'][current_building_id]['potions'][learned_potion] = true;
				parsed_rewards += '<div class="single_current_reward glowing_reward">' + parsed_single_reward + '</div>';
			}
			saveToLocalStorage();

		}
		if(reward['reward_id'] == 'reputation')
		{
			gain_current_rep(reward['reward_amount']);
		}
		if(all_available_cards[reward['reward_id']] != undefined)
		{
			var reward_value = all_available_cards[reward['reward_id']]['value'] * reward['reward_amount'];
			if(reward_value != undefined && reward_value == highest_value && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				multiple_highest_values = true;
			}
			if(reward_value != undefined && reward_value > highest_value && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				highest_value = reward_value;
				highest_value_key = useless_key;
				multiple_highest_values = false;
			}
			var owned_amount = 0;
			var new_card = '';
			if(gamedata['owned_cards'][reward['reward_id']] != undefined /*&& gamedata['owned_cards'][reward['reward_id']] > 0*/)
			{
				owned_amount = gamedata['owned_cards'][reward['reward_id']];
			}
			else
			{
				new_card = '</div><div class="new_card">NEW';
			}
			if(owned_amount == lowest_owned && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				multiple_lowest_owned = true;
			}
			if((lowest_owned === false || owned_amount < lowest_owned) && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				lowest_owned = owned_amount;
				lowest_owned_key = useless_key;
				multiple_lowest_owned = false;
			}
			if(reward['pickable'] == undefined || reward['pickable'] == false)
			{
				var ungainable_found = false;
				if(all_available_cards[reward['reward_id']] != undefined && all_available_cards[reward['reward_id']]['type'] == 'recipe')
				{
					if(gamedata['known_recipes'] == undefined)
					{
						gamedata['known_recipes'] = {};
					}
					gamedata['known_recipes'][all_available_cards[reward['reward_id']]['recipe']] = true;
					ungainable_found = true;
				}

				if(all_available_cards[reward['reward_id']] != undefined && all_available_cards[reward['reward_id']]['type'] == 'cardback')
				{
					gamedata['owned_card_backs'][all_available_cards[reward['reward_id']]['reward']['card_back_id']] = true;
					ungainable_found = true;
				}

				if(ungainable_found == false)
				{
					gain_card(reward['reward_id'], reward['reward_amount']);
				}
				
				if(gamedata['owned_cards'][reward['reward_id']] != undefined && gamedata['owned_cards'][reward['reward_id']] > 0)
				{
					owned_amount = gamedata['owned_cards'][reward['reward_id']];
				}
				var parsed_single_reward = parse_card(reward['reward_id'], reward['reward_amount'] + new_card);
				parsed_rewards += '<div class="single_current_reward" onclick="show_card_details(\'' + reward['reward_id'] + '\')">' + parsed_single_reward + '</div>';
			}
			else
			{
				var parsed_single_reward = parse_card(reward['reward_id'], reward['reward_amount'] + ' <span class="currently_owned">(' + owned_amount + ')</span>');
				parsed_rewards += '<div class="single_current_reward reward_' + useless_key + ' pickable_reward"><div onclick="show_card_details(\'' + reward['reward_id'] + '\')">' + parsed_single_reward + '</div><div class="menu_button slim pick_reward_button" onclick="pick_reward(' + useless_key + ')">PICK</div></div>';
			}
			//show_card_details(reward_id, undefined, reward_amount);
		}
	});
	if(gained_scraps > 0)
	{
		var parsed_card = parse_card('scraps_placeholder', gained_scraps);
		parsed_rewards += '<div class="single_current_reward">' + parsed_card + '</div>';
	}
	

	$.each(all_current_rewards, function(reward_id, reward_info){
		if(reward_info['pickable'] == undefined || reward_info['pickable'] == false)
		{
			delete all_current_rewards[reward_id];
		}
	});

	if(count_object(all_current_rewards) == 0)
	{
		parsed_rewards += '<div class="claim_current_rewards_button" onclick="show_content(\'' + current_reward_origin + '\')">CLAIM</div>';
	}
	else
	{
		parsed_rewards += '<div class="claim_current_rewards_button hidden" onclick="show_content(\'' + current_reward_origin + '\')">CLAIM</div>';
	}
	//all_current_rewards = {};
	$('.current_rewards_content').html(parsed_rewards);

	//console.log(highest_value);
	if(multiple_highest_values == false && highest_value_key !== false)
	{
		$('.reward_' + highest_value_key + ' .card').addClass('glowing_reward');
	}
	if(multiple_lowest_owned == false && lowest_owned_key !== false)
	{
		$('.reward_' + lowest_owned_key + ' .card').addClass('glowing_reward');
	}
	saveToLocalStorage();
	if(reward_count == 0 && current_reward_text == '')
	{
		show_content(current_reward_origin);
	}
};

function pick_reward(picked_reward_id){

	$('.single_current_reward .card').removeClass('glowing_reward');
	$.each(all_current_rewards, function(reward_id, reward_info){
		if(reward_id == picked_reward_id)
		{
			if(reward_info['reward_id'] == 'scraps')
			{
				if(gamedata['scraps'] == undefined)
				{
					gamedata['scraps'] = reward_info['reward_amount'];
				}
				else
				{
					gamedata['scraps'] += reward_info['reward_amount'];
				}
				$('.reward_' + reward_id + ' .card').remove();
				var parsed_card = parse_card('scraps_placeholder', reward_info['reward_amount']);
				$('.reward_' + reward_id + ' div').append(parsed_card);
			}
			if(all_available_cards[reward_info['reward_id']] != undefined)
			{
				check_quests('card_picked_' + reward_info['reward_id']);
				gain_card(reward_info['reward_id'], reward_info['reward_amount']);
				$('.reward_' + reward_id + ' .card').remove();
				var parsed_card = parse_card(reward_info['reward_id'], reward_info['reward_amount']);
				$('.reward_' + reward_id + ' div').append(parsed_card);
			}
			$('.reward_' + reward_id).css('overflow','visible');
			$('.reward_' + reward_id + ' .pick_reward_button').remove();
		}
		else
		{
			$('.reward_' + reward_id).css('width','0px');
			$('.reward_' + reward_id).css('margin-left','0px');
			$('.reward_' + reward_id).css('margin-right','0px');
			$('.reward_' + reward_id).css('overflow','hidden');
			$('.reward_' + reward_id + ' .pick_reward_button').remove();
		}
		delete all_current_rewards[reward_id];
	});

	$('.claim_current_rewards_button').removeClass('hidden');
	
};

function return_exp_cost(exp_id){
	var current_exp = 		all_expeditions[exp_id];
	$.each(current_exp['costs'], function(cost_id, cost_amount){

		if(cost_id == 'scraps')
		{
			gamedata['scraps'] += cost_amount;
		}
		
		if(all_available_cards[cost_id] != undefined)
		{
			gain_card(cost_id);
		}
	});
}

function show_building_recipes(){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];

	var all_recipes = '';

	var filters = {};
	filters['ability'] = '';
	if($('.ability_filter').val() != '')
	{
		filters['ability'] = $('.ability_filter').val();
	}
	filters['name'] = '';
	if($('.name_filter').val() != '')
	{
		filters['name'] = $('.name_filter').val();
	}

	if(building_info['recipes'] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.building_recipes_content').html('');
		$.each(building_info['recipes'], function(result, recipe_info){
			var recipe_available = check_defeated_heroes(recipe_info['available']);
			//console.log(recipe_available);
			if(recipe_available == '')
			{
				if(count_object(recipe_info['costs']) == 0 && all_available_cards[result]['recipe'] != undefined)
				{
					recipe_info['costs'] = all_available_cards[result]['recipe'];
				}

				/*var card_filtered = false;
				if(filters['name'] != '')
				{
					if(all_available_cards[result]['name'].indexOf(filters['name']) == -1){
						card_filtered = true;
					}
				}
				if(filters['ability'] != '')
				{
					var ability_matched = false;

					$.each(all_available_cards[result]['abilities'], function(ability_key, ability_level){
						if(ability_key.indexOf(filters['ability']) != -1){
							ability_matched = true;
						}
						if(all_abilities[ability_key]['description'].indexOf(filters['ability']) != -1){
							ability_matched = true;
						}
					});
					if(ability_matched == false)
					{
						card_filtered = true;
					}
					
				}
				if($('.' + all_available_cards[result]['type'] + '_type_filter').prop("checked") == false)
				{
					card_filtered = true;
				}
				$.each(all_available_cards[result]['color'], function(useless_key, color){
					if(color != undefined && $('.' + color + '_color_filter').prop("checked") == false)
					{
						card_filtered = true;
					}
				});*/

				if(check_filters(result) == false || true)
				{
					if(gamedata['owned_cards'][result] == undefined){gamedata['owned_cards'][result] = 0;}
					var parsed_recipe = '';
					var parsed_result = parse_card(result, gamedata['owned_cards'][result]);
					var can_craft = true;
					parsed_recipe += '<div class="single_building_recipe">';
					parsed_recipe += 	'<span class="single_building_recipe_result" onclick="show_card_details(\'' + result + '\')">' + parsed_result + '</span>';
					parsed_recipe += 	'<div class="single_building_recipe_costs">';
					if(all_available_cards[result]['quote'] != undefined && all_available_cards[result]['quote'] != ''){
						parsed_recipe += 	'<span><i>' + all_available_cards[result]['quote'] + '</i><br/><br/></span>';
					}
					var costs_factor = 1;
					if(recipe_info['costs_increas_factor'] != undefined)
					{
						costs_factor = (to_the_nth(1, gamedata['owned_cards'][result], recipe_info['costs_increas_factor']));
					}
					$.each(recipe_info['costs'], function(cost_id, cost_amount){
						//if(gamedata['owned_cards'][cost_id] == undefined){gamedata['owned_cards'][cost_id] = 0;}
						var owned_amount = 0;
						if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
						if(gamedata['owned_cards'][cost_id] != undefined){owned_amount = gamedata['owned_cards'][cost_id];}
						var cost_name = 'Scraps';
						if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
						if(owned_amount < Math.floor(cost_amount * costs_factor))
						{
							can_craft = false;

							var parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(Math.floor(cost_amount * costs_factor),3) + '</span>';
						}
						else
						{
							var parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(Math.floor(cost_amount * costs_factor),3) + '</span>';
						}
						
						parsed_recipe += '<div class="single_building_recipe_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
					});
					parsed_recipe += 	'</div>';
					parsed_recipe += 	'<div class="single_building_recipe_arrow"><</div>';
					
					if(can_craft == true)
					{
						parsed_recipe += 	'<div class="single_building_recipe_craft_button" onclick="craft_local_card(\'' + result + '\')">BUY</div>';
					}
					parsed_recipe += '<div style="clear:both"></div>';
					parsed_recipe += '</div>';
					//$('.building_recipes_content').append(parsed_recipe);
					all_recipes += parsed_recipe;
				}
			}
		});
	}

	return all_recipes;
}

function craft_local_card(card_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var current_recipe = 	building_info['recipes'][card_id];

	if(count_object(current_recipe['costs']) == 0 && all_available_cards[card_id]['recipe'] != undefined)
	{
		current_recipe['costs'] = all_available_cards[card_id]['recipe'];
	}

	var costs_factor = 1;
	if(current_recipe['costs_increas_factor'] != undefined)
	{
		costs_factor = (to_the_nth(1, gamedata['owned_cards'][card_id], current_recipe['costs_increas_factor']));
	}

	if(all_available_cards[card_id] != undefined)
	{
		var can_craft = true;
		$.each(current_recipe['costs'], function(card_cost_id, cost_amount){
			var owned_amount = 0;
			if(card_cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
			if(gamedata['owned_cards'][card_cost_id] != undefined){owned_amount = gamedata['owned_cards'][card_cost_id];}
			if(owned_amount < Math.floor(cost_amount * costs_factor))
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			$.each(current_recipe['costs'], function(card_cost_id, cost_amount){
				if(gamedata['owned_cards'][card_cost_id] != undefined)
				{
					gamedata['owned_cards'][card_cost_id] -= Math.floor(cost_amount * costs_factor);
				}
				if(card_cost_id == 'scraps')
				{
					gamedata['scraps'] -= Math.floor(cost_amount * costs_factor);
				}
			});
			gain_card(card_id);
			show_available_cards(false);
			saveToLocalStorage();
			//show_card_details(card_id);
			
		}
		show_single_building();
	}
};

function learn_local_recipe(card_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var current_recipe = 	building_info['recipe_shop'][card_id];

	if(all_available_cards[card_id] != undefined && gamedata['known_recipes'][card_id] == undefined)
	{
		var can_craft = true;
		$.each(current_recipe['cost'], function(card_cost_id, cost_amount){
			var owned_amount = 0;
			if(card_cost_id = 'scraps'){owned_amount = gamedata['scraps'];}
			if(gamedata['owned_cards'][card_cost_id] != undefined){owned_amount = gamedata['owned_cards'][card_cost_id];}
			if(owned_amount < cost_amount)
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			$.each(current_recipe['cost'], function(card_cost_id, cost_amount){
				if(gamedata['owned_cards'][card_cost_id] != undefined)
				{
					gamedata['owned_cards'][card_cost_id] -= cost_amount;
				}
				if(card_cost_id == 'scraps')
				{
					gamedata['scraps'] -= cost_amount;
				}
			});
			gamedata['known_recipes'][card_id] = true;
			show_available_cards(false);
			saveToLocalStorage();
			//show_card_details(card_id);
			show_single_building(card_id);
		}
		
	}
}

function update_all_timers(){
	$('.timer').each(function(timer){
		var complete_time = $(this).attr('data-complete-time');
		var time_now = new Date().getTime();
		var time_left = complete_time - time_now;
		if(time_left > 0)
		{
			//var parsed_time = new Date(time_left).toISOString().substr(11, 8);
			var parsed_time = '';
			if(time_left >= 1000)
			{
				var parsed_time = toHHMMSS(Math.floor(time_left / 1000));
			}
			$(this).html(parsed_time);
		}
		else
		{
			if($(this).attr('data-complete-show') != undefined)
			{
				$(this).addClass('hidden');
				$('.' + $(this).attr('data-complete-show')).removeClass('hidden');
			}
			if($(this).attr('data-complete-hide') != undefined)
			{
				$('.' + $(this).attr('data-complete-hide')).addClass('hidden');
			}
			if($(this).attr('data-complete-function') != undefined)
			{
				var possible_extra_function = window[$(this).attr('data-complete-function')]; 
				if (typeof possible_extra_function === "function") possible_extra_function();
			}
			
		}
	});

	clearTimeout(timer_timeout);

	timer_timeout = setTimeout(function(){
		update_all_timers();
	},1000);
	//new Date(SECONDS * 1000).toISOString().substr(11, 8);
}

function toHHMMSS(secs){
    var sec_num = parseInt(secs, 10)
    var days   = Math.floor(sec_num / 3600 / 24)
    var hours   = Math.floor(sec_num / 3600) % 24
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [days,hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

var timer_timeout = setTimeout(function(){
		update_all_timers();
	},1000);
var daily_reward_claimable = false;
function show_daily_reward(forced_month){
	var month = new Date().getMonth() + 1;
	var day = new Date().getDate();

	if(forced_month != undefined)
	{
		month = forced_month;
	}

	if(gamedata['daily_rewards'] == undefined)
	{
		gamedata['daily_rewards'] = {};

		gamedata['daily_rewards']['free_picks'] = 0;
		gamedata['daily_rewards']['current_month'] = month;
		gamedata['daily_rewards']['last_claimed'] = day -1;
		saveToLocalStorage();
	}

	if(false && month != gamedata['daily_rewards']['current_month'] && gamedata['daily_rewards']['available_rewards'] != undefined)
	{
		gamedata['daily_rewards']['current_month'] = month;
		gamedata['daily_rewards']['free_picks'] = 0;
		delete gamedata['daily_rewards']['available_rewards'];
		gamedata['daily_rewards']['last_claimed'] = day -1;
		saveToLocalStorage();
	}

	if(gamedata['daily_rewards']['available_rewards'] == undefined || count_object(gamedata['daily_rewards']['available_rewards']) < 18)
	{
		gamedata['daily_rewards']['available_rewards'] = {};
		for(var i = 1;i <= 18; i++)
		{
			if(i == 18)
			{
				i = 40;
			}
			var max_value = (i * 8) + 5;
			//console.log(max_value);
			var picked_reward = get_random_reward(max_value, month);
			if(gamedata['daily_rewards']['available_rewards'][i - 1] != undefined && gamedata['daily_rewards']['available_rewards'][i - 1]['reward'] == picked_reward)
			{
				picked_reward = get_random_reward(max_value, month);
			}
			
			/*if(i == 18)
			{
				picked_reward = get_random_reward(i + 50, month);
			}*/
			if(all_available_cards[picked_reward] != undefined)
			{
				var reward_amount = round_by_percent((i * (1 + (i/5))) / all_available_cards[picked_reward]['value']);
				if(reward_amount < 1)
				{
					reward_amount = 1;
				}
				/*if(i <= 17)
				{*/
					gamedata['daily_rewards']['available_rewards'][i] = {reward: picked_reward, amount: reward_amount};
				/*}
				else
				{
					//var reward_amount = Math.floor((i * 5) / all_available_cards[picked_reward]['value']);
					var reward_amount = round_by_percent((i * (1 + (i/1))) / all_available_cards[picked_reward]['value']);
					gamedata['daily_rewards']['available_rewards'][i] = {reward: picked_reward, amount: reward_amount};
				}*/
			}
		}
		saveToLocalStorage();
	}

	$('.daily_reward_content').html('');
	var rewards_left = 0;
	var reward_failed = false;
	$.each(gamedata['daily_rewards']['available_rewards'], function(useless_id, reward_info){
		if(all_available_cards[reward_info['reward']] != undefined)
		{
			var parsed_reward = '';
			var claimed = '';
			rewards_left += reward_info['amount'];
			if(reward_info['amount'] < 1){claimed = ' claimed '}
			parsed_reward += 	'<div class="single_reward ' + claimed + '" onclick="show_card_details(\'' + reward_info['reward'] + '\')">';
			var reward_bg_pos = '';
			if(all_available_cards[reward_info['reward']]['image_position'] != undefined){reward_bg_pos = 'background-position:' + all_available_cards[reward_info['reward']]['image_position'] + ';';}
			parsed_reward += 	'<div class="background" style="background-image:url(images/' + all_available_cards[reward_info['reward']]['image'] + ');' + reward_bg_pos + '"></div>';
			if(reward_info['amount'] > 1)
			{
				parsed_reward += 	'<div class="daily_reward_amount">x' + reward_info['amount'] + '</div>';
			}
			parsed_reward += 	useless_id + '</div>';
			$('.daily_reward_content').append(parsed_reward);
		}
		else
		{
			reward_failed = true;
		}
	});
	
	if((gamedata['daily_rewards']['last_claimed'] != day || gamedata['daily_rewards']['free_picks'] > 0) && rewards_left > 0)
	{
		daily_reward_claimable = true;
		if(gamedata['daily_rewards']['free_picks'] > 0)
		{
			$('.daily_reward_content').append('<div class="claim_daily_reward_button" onclick="claim_daily_reward()">CLAIM (' + gamedata['daily_rewards']['free_picks'] + ')</div>');
		}
		else
		{
			$('.daily_reward_content').append('<div class="claim_daily_reward_button" onclick="claim_daily_reward()">CLAIM</div>');
		}
		
	}
	else
	{
		daily_reward_claimable = false;
	}

	if(reward_failed == true || rewards_left < 1)
	{
		gamedata['daily_rewards']['available_rewards'] = {};
		show_daily_reward();
	}
	
}

function get_random_reward(max_value, month){
	var all_possible_rewards = {};
	//max_value *= 4;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['value'] <= max_value && ((card_info['value'] > max_value / 20000000 && card_info['pick_chance'] > 0) /*|| (card_info['value'] > max_value / 50 && card_info['months_available'] != undefined && match_array_values([month], card_info['months_available']) == true)*/))
		{
			if(card_info['type'] != 'cardback')
			{
				if(card_info['months_available'] != undefined && match_array_values([month], card_info['months_available']) == true)
				{
					if(card_info['value'] <= (max_value * 2))
					{
						var adjusted_value = (card_info['value'] * 3) / max_value;
						if(adjusted_value < 10)
						{
							adjusted_value = 10;
						}
						all_possible_rewards[card_id] = adjusted_value;
					}
				}
				else
				{
					all_possible_rewards[card_id] = card_info['value'] / max_value;
				}
			}
		}
	});

	var chosen_reward = get_random_key_from_object_based_on_num_value(all_possible_rewards);

	return chosen_reward;
}

function claim_daily_reward(){
	var day = new Date().getDate();
	var claimed_one = false;
	if(gamedata['daily_rewards']['last_claimed'] != day || gamedata['daily_rewards']['free_picks'] > 0)
	{
		if(gamedata['daily_rewards']['last_claimed'] != day)
		{
			gamedata['daily_rewards']['last_claimed'] = day;
		}
		else
		{
			gamedata['daily_rewards']['free_picks'] -= 1;
		}
		
		$.each(gamedata['daily_rewards']['available_rewards'], function(useless_id, reward_info){
			if(reward_info['amount'] > 0 && claimed_one == false)
			{
				current_battle_type = 'daily';
				endless_waves = false;
				fixed_hero = false;
				all_current_rewards = {};

				current_reward_origin = 'daily_reward';
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 		reward_info['reward'],
					reward_amount: 	reward_info['amount'],
				}
				claimed_one = true;
				add_basic_win_rewards(sqr(useless_id) * get_upgrade_factor('summon_reward', 'any', true));
				gamedata['daily_rewards']['available_rewards'][useless_id]['amount'] = 0;
				saveToLocalStorage();
			}
		});
	}
	if(claimed_one == true)
	{
		show_content('current_rewards');
	}
	else
	{
		show_daily_reward();
	}
}
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
			if(all_available_cards[card_id]['type'] != 'consumable' && all_available_cards[card_id]['type'] != 'token' /*&& all_available_cards[card_id]['type'] != 'cardback'*/ && all_available_cards[card_id]['type'] != 'currency' && all_available_cards[card_id]['type'] != 'material' && all_available_cards[card_id]['type'] != 'treasure')
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
					if(all_available_cards[card_id]['type'] == 'token' || all_available_cards[card_id]['type'] == 'currency' || all_available_cards[card_id]['type'] == 'material' || all_available_cards[card_id]['type'] == 'treasure')
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
					amount_used = 0;
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
						var gained_card = get_random_card_based_on_value(all_available_cards[current_consumable]['reward']['min_value'], all_available_cards[current_consumable]['reward']['color'],all_available_cards[current_consumable]['reward']['card_type'], all_available_cards[current_consumable]['reward']['all_pick_chance'], gained_cards, all_available_cards[current_consumable]['reward']['max_value']);
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
		
		if(amount_used > 0)
		{
			check_quests('used_consumable_' + current_consumable, undefined, amount_used);
		}

	}

}
var current_active_raid = {};
var current_raid_points = 0;
var current_raid_id = 0;

function show_raids(){
	$('.refresh_raids_button').addClass('hidden');
	$('#content_raids .main_new_raid_button').removeClass('hidden');
	$('#content_raids .main_join_raid_button').removeClass('hidden');
	$('#content_raids .raids_content').removeClass('full');
	get_active_raids_list();
};

function get_active_raids_list()
{
	if(gamedata['account_id'] != undefined)
	{
		$('.raids_content').html('<div class="loading_arena_decks">Loading active raids</div>');
		$.post("ajax.php",
		{
			data: 			'get_active_raids',
			current_id: 	gamedata['account_id'],
		},
		function(result){
			if(count_object(JSON.parse(result)) > 0)
			{
				all_active_raids = JSON.parse(result);
				parse_active_raids_list(all_active_raids);
			}
			else
			{
				$('.raids_content').html('<div class="loading_arena_decks">No active raids found.</div>');
			}

		});
	}

}

function parse_active_raids_list(full_list){
	var all_parsed_raids = '';

	$.each(full_list, function(useless_id, raid_info){
		if(raid_info['points_left'] < 0)
		{
			raid_info['points_left'] = 0;
		}
		all_parsed_raids += '<div class="fightable_deck_container">';
			
		if(raid_info['hero'] != undefined)
		{
			raid_info['hero'] = JSON.parse(raid_info['hero']);
			if(raid_info['user_id'] == gamedata['account_id'])
			{
				all_parsed_raids += '<div class="fightable_deck owned_deck_' + raid_info['active_raid_id'] + ' fightable" onclick="current_raid_id=' + raid_info['active_raid_id'] + ';view_raid()">';
			}
			else
			{
				all_parsed_raids += '<div class="fightable_deck owned_deck_' + raid_info['active_raid_id'] + ' not_fightable">';
			}
			all_parsed_raids += 	'<div class="background" style="background-image:url(images/' + raid_info['hero']['image'] + ')"></div>';
			all_parsed_raids += 	'<span>' + capitalizeFirstLetter(raid_info['raid_name']) + '</span>';
			
			all_parsed_raids += 	'<div class="wins_losses">';
			all_parsed_raids += 		'Points: ' + parseInt(raid_info['points_earned']) + '<br/>';
			all_parsed_raids += 		'Health: ' + parseInt(raid_info['points_left']) + ' / ' + parseInt(raid_info['points']) + '';
			all_parsed_raids += 	'</div>';

			all_parsed_raids += '</div>';
			/*if(gamedata['scraps'] > 1 && deck_info['user_id'] != gamedata['account_id'])
			{
				parsed_decks += '<div class="fight_deck_button" onclick="fight_deck(' + deck_info['id'] + ')">FIGHT</div>';
			}*/
			deck_found = true;
		}
			
		all_parsed_raids += '</div>';
	});
	$('#content_raids .arena_shop_button').removeClass('hidden');
	$('.raids_content').html(all_parsed_raids);
}

function view_raid(){
	$('#content_raids .arena_shop_button').addClass('hidden');
	$('#content_raids .main_new_raid_button').addClass('hidden');
	$('#content_raids .main_join_raid_button').addClass('hidden');
	$('#content_raids .arena_shop_button').addClass('hidden');
	var raid_id = current_raid_id;
	if(gamedata['account_id'] != undefined)
	{
		$('.raids_content').html('<div class="loading_arena_decks">Loading raid</div>');
		$.post("ajax.php",
		{
			data: 			'get_raid',
			raid_id: 		raid_id
		},
		function(result){
			if(count_object(JSON.parse(result)) > 0)
			{
				active_raid = JSON.parse(result);
				parse_active_raid(active_raid);
			}
			else
			{

				show_content('raids');
			}

		});
	}
};

function parse_active_raid(active_raid){

	var complete_parsed_raid = '';
	$('.refresh_raids_button').removeClass('hidden');
	$('#content_raids .raids_content').addClass('full');
	
	var current_raid = active_raid[0];
	if(current_raid['points_left'] < 0)
	{
		current_raid['points_left'] = 0;
	}
	current_raid['hero'] = JSON.parse(current_raid['hero']);
	current_active_raid = current_raid;
	//console.log(current_active_raid);
	$('#join_code').val(current_raid['join_code']);

	var parsed_contributers = '<div class="contributer_list">';
	/*$.each(active_raid, function(	useless_key, contributer){
		if(contributer['name'] != '')
		{
			parsed_contributers += '<div class="single_contributer">' + contributer['name'] + '<span class="contributed_amount">' + contributer['points_earned'] + '</span></div>';
		}
		if(contributer['user_id'] == gamedata['account_id'])
		{
			current_raid_points = contributer['points_earned'];
		}
	});*/
	parsed_contributers += '</div>';

	var parsed_raid = '';
	var current_points_left = 0;
	if(parseInt(current_raid['points_left']) > 0)
	{
		current_points_left = parseInt(current_raid['points_left']);
	}
	var raid_health_bar = 0;
	if(current_points_left > 0)
	{
		raid_health_bar = (current_points_left / parseInt(current_raid['points'])) * 100;
	}
	parsed_raid += '<div class="single_raid_container">';
	parsed_raid += 		'<div class="raid_image" style="background-image:url(images/' + current_raid['hero']['image'] + ')"></div>';
	parsed_raid += 		'<span class="raid_name">' + capitalizeFirstLetter(current_raid['raid_name']) + '<br/></span>';
	parsed_raid += 		'<span class="raid_description"><br/>' + current_raid['description'] + '<br/><br/>Join code: ' + current_raid['join_code'] + '<span class="copy_code_button" onclick="copy_current_join_code()">Copy code</span></span>';
	parsed_raid += 		'<div class="raid_health"><div class="raid_health_bar" style="width:' + raid_health_bar + '%"></div><span>Health: ' + current_points_left + ' / ' + parseInt(current_raid['points']) + '</span></div>';
	parsed_raid += 		'<div class="raid_rewards"></div>';
	parsed_raid += '</div>';
	if(current_raid['points_left'] > 0)
	{
		parsed_raid += '<div class="start_raid_button" onclick="start_raid()">ATTACK</div>';
	}
	else
	{
		parsed_raid += '<div class="start_raid_button hidden claim_raid_button" onclick="claim_raid()">CLAIM</div>';
	}
	


	complete_parsed_raid = parsed_raid + parsed_contributers;
	$('.raids_content').html(complete_parsed_raid);
	show_raid_contributers();
};

function show_raid_rewards(){
	$('.raid_rewards').html('');
	$.post("ajax.php",
	{
		data: 			'get_raid_rewards',
		raid_id: 		current_active_raid['raid_id'],
	},
	function(result){
		result = JSON.parse(result);
		var next_reward = false;
		var current_reward = false;
		var parsed_rewards = '';
		$.each(result, function(reward_id, reward_info){
			if(current_reward == false && parseInt(reward_info['min_points']) <= current_raid_points)
			{
				current_reward = reward_info;
			}
			if(parseInt(reward_info['min_points']) > current_raid_points)
			{
				next_reward = reward_info;
			}
		});
		var all_parsed_current = '';
		var all_parsed_next = '';
		if(current_reward != false)
		{
			all_parsed_current += '<div class="raid_reward_block">Current reward<br/>';
			$.each(JSON.parse(current_reward['rewards']), function(useless_key, reward){
				var card_to_parse = reward['reward_id'];
				if(all_available_cards[card_to_parse] != undefined)
				{
					all_parsed_current += '<div class="card_holder" onclick="show_card_details(\'' + card_to_parse + '\')">' + parse_card(card_to_parse, reward['reward_amount']) + '</div>';
				}
				if(card_to_parse == 'scraps')
				{
					all_parsed_current += parse_card('scraps_placeholder', reward['reward_amount']);
				}
			});
			all_parsed_current += '</div>';
		}
		if(next_reward != false)
		{
			all_parsed_next += '<div class="raid_reward_block">Reward at ' + next_reward['min_points'] + ' points<br/>';
			$.each(JSON.parse(next_reward['rewards']), function(useless_key, reward){
				var card_to_parse = reward['reward_id'];
				if(all_available_cards[card_to_parse] != undefined)
				{
					all_parsed_next += '<div class="card_holder" onclick="show_card_details(\'' + card_to_parse + '\')">' + parse_card(card_to_parse, reward['reward_amount']) + '</div>';
				}
				if(card_to_parse == 'scraps')
				{
					all_parsed_next += parse_card('scraps_placeholder', reward['reward_amount']);
				}
			});
			all_parsed_next += '</div>';
		}
		else
		{
			all_parsed_next += '<div class="raid_reward_block">Maximum rewards reached<br/><br/><br/><br/></div>';
		}
		$('.raid_rewards').html('' + all_parsed_current + '' + all_parsed_next);
	});
}

function show_raid_contributers(){
	var raid_id = current_raid_id;
	current_raid_points = 0;
	if(gamedata['account_id'] != undefined)
	{
		$('.contributer_list').html('<div class="loading_arena_decks">Loading</div>');
		$.post("ajax.php",
		{
			data: 			'get_raid_contributers',
			raid_id: 		raid_id
		},
		function(result){
			
			if(count_object(JSON.parse(result)) > 0)
			{
				all_contributers = JSON.parse(result);
				var parsed_contributers = 'Contributers<br/>';
				$.each(all_contributers, function(	useless_key, contributer){
					if(contributer['name'] != '')
					{
						var additional_class = '';
						if(contributer['user_id'] == gamedata['account_id'])
						{
							additional_class = ' current_user ';
						}
						parsed_contributers += '<div class="single_contributer ' + additional_class + '">' + contributer['name'] + '<span class="contributed_amount">' + contributer['points_earned'] + '</span></div>';
					}
					if(contributer['user_id'] == gamedata['account_id'])
					{
						current_raid_points = contributer['points_earned'];
						$('.claim_raid_button').removeClass('hidden');
					}
				});
				$('.contributer_list').html(parsed_contributers);
			}
			show_raid_rewards();
		});
	}
}

function upload_raid_points_gained(points_gained){
	if(current_active_raid['raid_id'] != undefined && gamedata['account_id'] != undefined)
	{
		$.post("ajax.php",
		{
			data: 			'upload_raid_points_gained',
			current_id: 	gamedata['account_id'],
			raid_id: 		current_active_raid['active_raid_id'],
			points: 		points_gained
		},
		function(result){
		});
	}
}

function claim_raid(){
	if(current_active_raid['raid_id'] != undefined && gamedata['account_id'] != undefined)
	{
		//console.log(current_active_raid['raid_id']);
		$('.raids_content').html('<div class="loading_arena_decks">Loading rewards</div>');
		$.post("ajax.php",
		{
			data: 			'get_raid_rewards',
			raid_id: 		current_active_raid['raid_id'],
		},
		function(result){
			var reward_claimed = false;
			$.each(JSON.parse(result), function(reward_id, reward_info){
				if(reward_claimed == false)
				{
					if(parseInt(reward_info['min_points']) <= current_raid_points)
					{
						all_current_rewards = JSON.parse(reward_info['rewards']);
						reward_claimed = true;
						current_reward_origin = 'raids';
						current_reward_text = 'The raid has finished.<br/>Claim your reward.';
						$.post("ajax.php",
						{
							data: 			'clear_raid',
							raid_id: 		current_active_raid['active_raid_id'],
							current_id: 	gamedata['account_id'],
						},
						function(result){
							check_quests('raid_rewards_claimed');
							show_content('current_rewards');
						});
					}
				}
			});
			if(reward_claimed == false)
			{
				all_current_rewards = {};
				reward_claimed = true;
				current_reward_origin = 'raids';
				current_reward_text = 'The raid has finished.<br/>You failed to get any rewards.';
				$.post("ajax.php",
				{
					data: 			'clear_raid',
					raid_id: 		current_active_raid['active_raid_id'],
					current_id: 	gamedata['account_id'],
				},
				function(result){
					show_content('current_rewards');
				});
			}
		});
	}
}

var raid_start_ids = {
	raid_key_1: {
		cost_id: 		'raid_key',
		name: 			'Basic raid',
		description: 	'Start a basic raid',
		cost_amount: 	1,
		raid_type: 		'basic'
	},
}

function show_start_raid(){
	var parsed_raid_costs = '';
	$.each(raid_start_ids, function(raid_cost_id, raid_info){
		var parsed_single_raid_cost = '';
		parsed_single_raid_cost += '<div class="single_building_recipe">';
		parsed_single_raid_cost += 		'<h2>' + capitalizeFirstLetter(raid_info['name']) + '</h2>';
		parsed_single_raid_cost +=		'<div class="new_raid_description">' + raid_info['description'] + '</div>';
		var owned_cost = 0;
		if(gamedata['owned_cards'][raid_info['cost_id']] != undefined)
		{
			owned_cost = gamedata['owned_cards'][raid_info['cost_id']];
		}
		var parsed_raid_cost 	= 		parse_card(raid_info['cost_id'], owned_cost + ' / ' + raid_info['cost_amount']);
		parsed_single_raid_cost += 		parsed_raid_cost;
		if(gamedata['owned_cards'][raid_info['cost_id']] != undefined && gamedata['owned_cards'][raid_info['cost_id']] >= raid_info['cost_amount'])
		{
			parsed_single_raid_cost += 		'<div class="start_new_raid_button" onclick="start_new_raid(\'' + raid_cost_id + '\')">START</div>';
		}
		parsed_single_raid_cost += 		'<div style="clear:both;"></div>';
		parsed_single_raid_cost += '</div>';
		parsed_raid_costs += parsed_single_raid_cost;
	});

	$('.new_raids_content').html(parsed_raid_costs);
}

function start_new_raid(raid_cost_id){
	//console.log(raid_cost_id);
	var raid_info = raid_start_ids[raid_cost_id];
	if(gamedata['owned_cards'][raid_info['cost_id']] != undefined && gamedata['owned_cards'][raid_info['cost_id']] >= raid_info['cost_amount'])
	{
		gamedata['owned_cards'][raid_info['cost_id']] -= raid_info['cost_amount'];
		saveToLocalStorage();
		$('.new_raids_content').html('<div class="loading_arena_decks">Starting raid</div>');
		$.post("ajax.php",
		{
			data: 			'start_new_raid',
			current_id: 	gamedata['account_id'],
			raid_type: 		raid_start_ids[raid_cost_id]['raid_type']
		},
		function(result){
			if(parseInt(result) > 0)
			{
				show_content('raids');
			}
		});
	}
}

function join_raid(){
	if($('.raid_code').val() != '')
	{
		var raid_code = $('.raid_code').val();
		if(raid_code.length == 10)
		{
			$.post("ajax.php",
			{
				data: 			'join_raid',
				current_id: 	gamedata['account_id'],
				raid_code: 		raid_code
			},
			function(result){
				console.log(result);
				if(parseInt(result) > 0)
				{
					show_content('raids');
				}
				else
				{
					$('.raid_join_error').html('Incorrect raid code');
				}
			});
		}
		else
		{
			$('.raid_join_error').html('Raid code to short');
		}
	}
	else
	{
		$('.raid_join_error').html('Please enter a raid code');
	}
}

function show_join_raid(){
	$('.raid_code').val('');
	$('.raid_join_error').html('');
}

function copy_current_join_code() {
  /* Get the text field */
  var copyText = document.getElementById("join_code");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
}
var current_collection_page = 1;

function show_collection(){

	$('.tinkering_container').html('');

	var tinkering_list = '';
	var cards_displayed = 0;

	var collected = 0;
	var known_recipes = 0;
	var collectable = 0;
	var recipe_count = 0;

	$.each(all_available_cards, function(card_id, card_info){

		if(check_filters(card_id) == false && card_info['type'] != 'currency' && card_info['type'] != 'consumable' && card_info['type'] != 'cardback' && namechanges[card_id] == undefined && card_info['pick_chance'] > 0)
		{
			collectable ++;
			cards_displayed ++;
			if(gamedata['owned_cards'][card_id] != undefined)
			{
				collected ++;
			}
			if(card_info['recipe'] != undefined)
			{
				recipe_count ++;
			}
			if(card_info['recipe'] != undefined && gamedata['known_recipes'][card_id] != undefined)
			{
				known_recipes ++;
			}
			if(cards_displayed > (current_collection_page * 12) - 12 && cards_displayed <= current_collection_page * 12)
			{
				var parsed_card = parse_card(card_id);
				var unowned_class = '';
				if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][card_id] == undefined && all_available_cards[card_id]['recipe'] != undefined){unowned_class = 'unowned_summon';}
				if(gamedata['owned_cards'][card_id] != undefined)
				{
					tinkering_list += '<div class="collection_card_container ' + unowned_class + '" onclick="show_card_details(\'' + card_id + '\')">' + parsed_card + '</div>';
				}
				else
				{
					tinkering_list += '<div class="collection_card_container not_in_collection  ' + unowned_class + '">' + parsed_card + '</div>';
				}
			}
		}

	});

	if(cards_displayed > 12)
	{
		$('#content_collection .page_selection').show();
		if(current_collection_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / 12 <= current_collection_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_collection_page + ' / ' + Math.ceil(cards_displayed / 12));
	}
	else
	{
		$('#content_collection .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / 12) < current_collection_page)
	{
		current_collection_page = 1;
		show_collection();
	}
	else
	{
		if(tinkering_list != '')
		{
			$('.tinkering_container').html('<div class="tinkering_list">' + tinkering_list + '</div>');
		}
	}
	var percent_collected = Math.floor(collected / collectable * 100);
	var percent_recipes_collected = Math.floor(known_recipes / recipe_count * 100);
	if(collected == 0){percent_collected = 0;}
	if(known_recipes == 0){percent_recipes_collected = 0;}
	$('.collection_count').html('Cards: ' + percent_collected + '%');
	$('.collection_recipe_count').html('Recipes: ' + percent_recipes_collected + '%');
};

function set_collection_page(amount){
	current_collection_page += amount;
	if(current_collection_page < 1){current_collection_page = 1;}
	show_collection();
};

var all_icons = {
	air:{},
	broken:{},
	power:{},
	lightning:{},
	bomb:{},
	healing:{},
	bolster:{},
	wither:{},
	strike:{},
	arrow:{},
	hoof:{},
	fireray:{},
	stun:{},
	fire:{},
	meteor:{},
	burn:{},
	teleport:{},
	poison:{},
	curse:{},
	doom:{},
	bless:{},
	frost:{},
	lull:{},
	magic:{},
	armor:{},
	water:{},
	dodge:{},
	shield:{},
	fly:{},
	parry:{},
	resurrect:{},
	repair:{},
	energize:{},
	dice:{},
	dice_g:{},
	go_again:{},
	cleanse:{},
	voodoo:{},
	drain:{},
	book:{},
	hasten:{},
	slow:{},
	discard:{},
	death:{},
	magic_shield:{},
	eye:{},
	spikes:{},
	money:{},
	stone:{},
	fluffyswirl:{},
	music:{},
	wound:{},
}

function show_icons(){
	var all_parsed_icons = '';
	$.each(all_icons, function(icon_id, icon_info){
		all_parsed_icons += '<div class="icon icon_' + icon_id + '"></div>';
	});
	$('.icons_container').html(all_parsed_icons);
}
var current_card_backs_page = 1;
var card_backs_per_page = 12;

function show_card_backs(){

	$('.tinkering_container').html('');

	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true)
	{
		$('.show_hand_colors_button').html('COLOR VISIBLE');
	}
	else
	{
		$('.show_hand_colors_button').html('COLOR INVISIBLE');
	}

	if(gamedata['owned_card_backs'] == undefined)
	{
		gamedata['owned_card_backs'] = {};
	}

	var tinkering_list = '';
	var cards_displayed = 0;

	var collected = 0;
	var collectable = 0;

	$.each(all_card_backs, function(card_back_id, card_image){

		if(gamedata['owned_card_backs'][card_back_id] != undefined)
		{
			collectable ++;
			cards_displayed ++;
			if(cards_displayed > (current_card_backs_page * card_backs_per_page) - card_backs_per_page && cards_displayed <= current_card_backs_page * card_backs_per_page)
			{
				var linked_card = false;
				if(all_available_cards[card_back_id.replace('card_back_','')] != undefined)
				{
					linked_card = all_available_cards[card_back_id.replace('card_back_','')];
				}
				var card_image_position = '';
				if(linked_card != false && linked_card['image_position'] != undefined)
				{
					card_image_position = ';background-position:' + linked_card['image_position'];
				}
				var parsed_card = '<div class="pickable_card_back" style="background-image:url(images/' + card_image + ')' + card_image_position + '"></div>';
				var card_back_active = '';
				if(gamedata['hand_card_back'] != undefined && gamedata['hand_card_back'] == card_image)
				{
					card_back_active = '<div class="card_back_active">ACTIVE</div>';
				}
				if(gamedata['owned_card_backs'][card_back_id] != undefined)
				{
					tinkering_list += '<span class="card_back_container" onclick="set_card_back(\'' + card_back_id + '\')">' + parsed_card + card_back_active + '</span>';
				}
				else
				{
					tinkering_list += '<div class="not_in_collection">' + parsed_card + '</div>';
				}
			}
		}

	});

	if(cards_displayed > card_backs_per_page)
	{
		$('#content_card_backs .page_selection').show();
		if(current_card_backs_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(cards_displayed / card_backs_per_page <= current_card_backs_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_card_backs_page + ' / ' + Math.ceil(cards_displayed / card_backs_per_page));
	}
	else
	{
		$('#content_card_backs .page_selection').hide();
	}

	if(cards_displayed > 0 && Math.ceil(cards_displayed / card_backs_per_page) < current_card_backs_page)
	{
		current_card_backs_page = 1;
		show_card_backs();
	}
	else
	{
		if(tinkering_list != '')
		{
			$('.tinkering_container').html('<div class="tinkering_list">' + tinkering_list + '</div>');
		}
	}

};

function set_card_back_page(amount){
	current_card_backs_page += amount;
	if(current_card_backs_page < 1){current_card_backs_page = 1;}
	show_card_backs();
};

function set_card_back(card_back_id){
	gamedata['hand_card_back'] = all_card_backs[card_back_id];
	saveToLocalStorage();
	show_card_backs();
}

function clear_card_back(){
	gamedata['hand_card_back'] = '';
	saveToLocalStorage();
	show_card_backs();
}

function toggle_show_hand_colors(){
	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true)
	{
		gamedata['show_hand_colors'] = false;
	}
	else
	{
		gamedata['show_hand_colors'] = true;
	}
	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true)
	{
		$('.show_hand_colors_button').html('COLOR VISIBLE');
	}
	else
	{
		$('.show_hand_colors_button').html('COLOR INVISIBLE');
	}
}

function toggle_all_cardbacks(){
	$.each(all_card_backs, function(card_back_id, card_image){
		if(gamedata['owned_card_backs'][card_back_id] != undefined)
		{
			delete gamedata['owned_card_backs'][card_back_id];
		}
		else
		{
			gamedata['owned_card_backs'][card_back_id] = true;
		}
	});
}
var showing_faction = '';
var base_faction_rep = 250;
var base_rep_reward = 25;
var color_bonus_rep = 0;

function show_factions(){

	if(gamedata['factions'] == undefined)
	{
		gamedata['factions'] = {};
	}


	var parsed_factions = '';
	parsed_factions += '<div class="single_expedition">';
	parsed_factions += 		'<span class="single_new_expedition_name">Factions</span><br/>';
	if(gamedata['current_faction'] && all_factions[gamedata['current_faction']] != undefined)
	{
		parsed_factions += 		'<span class="faction_description representing_current">Representing: ' + capitalizeFirstLetter(all_factions[gamedata['current_faction']]['name']) + '</span><br/>';
	}
	parsed_factions += 		'<span class="faction_description">Choose a faction to represent. You will get reputation with that faction for all battles won.<br/>If you gain levels with factions, they will increase the amount of certain rewards.</span><br/>';
	parsed_factions += '</div>'
	$.each(all_factions, function(faction_id, faction_info){

		var can_show = check_defeated_heroes(faction_info['shown']);
		var faction_available = check_defeated_heroes(faction_info['available']);
		if(can_show == '')
		{
			var faction_active = '';
			var representing = '';
			if(gamedata['current_faction'] != undefined && gamedata['current_faction'] == faction_id)
			{
				faction_active = 'active';
				representing = 'Representing: '
			}

			var current_reputation = 0;
			var reputation_progress = 0;
			var last_level = 0;
			var next_level = base_faction_rep;
			var reputation_level = 0;
			if(gamedata['factions'][faction_id] != undefined)
			{
				current_reputation = gamedata['factions'][faction_id]['reputation'];
				gamedata['factions'][faction_id]['level'] = calculate_faction_level(current_reputation);
				reputation_level = gamedata['factions'][faction_id]['level'];
				last_level = reputation_level * reputation_level * base_faction_rep;
				next_level = (reputation_level + 1) * (reputation_level + 1) * base_faction_rep;
				reputation_progress = (current_reputation - last_level) / (next_level - last_level) * 100;
			}

			parsed_factions += '<div class="single_expedition ' + faction_active + '">';
			parsed_factions += 		'<div class="faction_background" style="background-image:url(images/' + faction_info['image'] + ')"></div>';
			if(faction_available == '')
			{
				parsed_factions += 		'<span class="single_new_expedition_name">' + representing + capitalizeFirstLetter(faction_info['name']) + '</span>';
				parsed_factions += 		'<div class="faction_info_button" onclick="showing_faction=\'' + faction_id + '\';show_content(\'single_faction\')">INFO</div>';
				if(faction_active == '')
				{
					parsed_factions += '<div class="activate_faction_button" onclick="activate_faction(\'' + faction_id + '\')">REPRESENT</div>';
				}
				parsed_factions += 		'<div class="reputation_bar"><div class="reputation_progress_bar" style="width:' + reputation_progress + '%"></div><div class="reputation_progress_left">level: ' + reputation_level + '</div><div class="reputation_progress_right">' + numberWithCommas(current_reputation) + ' / ' + numberWithCommas(next_level) + '</div></div>';
			}
			else
			{
				parsed_factions += '<span class="not_available_text">' + faction_available + '</span>';
			}
			parsed_factions += '</div>';
		}
	});
	$('.factions_container').html(parsed_factions);
}

function show_single_faction(){
	var faction_info = all_factions[showing_faction];
	var parsed_faction = '';
	var faction_level = 0;
	if(gamedata['factions'][showing_faction] != undefined)
	{
		faction_level = gamedata['factions'][showing_faction]['level'];
	}

	parsed_faction += 		'<span class="faction_name">' + capitalizeFirstLetter(faction_info['name']) + '</span><br/>';
	parsed_faction += 		'<span class="faction_description">' + capitalizeFirstLetter(faction_info['description']) + '</span><br/>';
	parsed_faction += 		'<span class="faction_description">Gain reputation with this faction by winning battles while representing this faction.</span><br/>';
	//parsed_faction += 		'<span class="faction_description">Gain bonus reputation when using a ' + faction_info['hero_color'] + ' hero.</span><br/><br/>';

	parsed_faction += 		'<span class="faction_description"><br/>Current bonusses:</span><br/>';
	$.each(faction_info['loot_bonus'], function(loot_id, loot_amount){
		parsed_faction += 		'<span class="faction_bonus_title">' + capitalizeFirstLetter(all_available_cards[loot_id]['name']) + ':</span><span class="faction_bonus_current">+' + (loot_amount * faction_level) + '%</span><span class="faction_bonus_per_level">(' + loot_amount + '% per level)</span><br/>';
	});

	$('.faction_bg').css('background-image','url(images/' + faction_info['image'] + ')');
	$('.single_faction_container').html(parsed_faction);
}

function activate_faction(faction_id){
	gamedata['current_faction'] = faction_id;
	if(gamedata['factions'][faction_id] == undefined)
	{
		gamedata['factions'][faction_id] = {
			level: 			0,
			reputation: 	0
		}
	}
	saveToLocalStorage();
	show_factions();
}

function calculate_faction_level(current_reputation){
	return Math.floor(Math.sqrt(current_reputation / base_faction_rep));
}

function gain_current_rep(rep_gained){
	var current_faction_id = gamedata['current_faction'];
	gain_rep(current_faction_id, rep_gained)
}

var rep_bar_message_counter = 0;
function gain_rep(faction_id, rep_gained){
	if(all_factions[faction_id] != undefined)
	{
		rep_gained = round_by_percent(rep_gained * get_upgrade_factor('reputation', [faction_id, 'any']));
		if(gamedata['factions'][faction_id] == undefined)
		{
			gamedata['factions'][faction_id] = {
				level: 			0,
				reputation: 	0
			}
		}
		var faction_info = all_factions[faction_id];
		var previous_rep = gamedata['factions'][faction_id]['reputation'] + 0;
		var previous_level = gamedata['factions'][faction_id]['level'] + 0;
		var previous_last_level = previous_level * previous_level * base_faction_rep;
		var previous_next_level = (previous_level + 1) * (previous_level + 1) * base_faction_rep;
		var previous_reputation_progress = (previous_rep - previous_last_level) / (previous_next_level - previous_last_level) * 100;
		gamedata['factions'][faction_id]['reputation'] += rep_gained;
		gamedata['factions'][faction_id]['level'] = calculate_faction_level(gamedata['factions'][faction_id]['reputation']);
		saveToLocalStorage();
		rep_bar_message_counter++;
		var new_rep = gamedata['factions'][faction_id]['reputation'] + 0;
		var new_level = gamedata['factions'][faction_id]['level'] + 0;
		var new_last_level = new_level * new_level * base_faction_rep;
		var new_next_level = (new_level + 1) * (new_level + 1) * base_faction_rep;
		var new_reputation_progress = (new_rep - new_last_level) / (new_next_level - new_last_level) * 100;

		var temp_rep_bar_message_counter = rep_bar_message_counter + 0;
		var total_message = '';
		total_message += '<span class="faction_name">' + capitalizeFirstLetter(faction_info['name']) + '</span><br/>';
		total_message += '<div class="reputation_bar rep_bar_message_counter_' + temp_rep_bar_message_counter + '"><div class="reputation_progress_bar" style="width:' + previous_reputation_progress + '%"></div><div class="reputation_progress_bar_gained bar_1" style="left:' + previous_reputation_progress + '%;width:0%"></div><div class="reputation_progress_bar_gained bar_2" style="left:0%;width:0%"></div><div class="reputation_progress_left">level: ' + previous_level + '</div><div class="reputation_progress_right">' + numberWithCommas(previous_rep) + ' (+' + rep_gained + ') / ' + numberWithCommas(previous_next_level) + '</div></div>';
		show_message(total_message);

		var percent_gained = new_reputation_progress - previous_reputation_progress;

		if(previous_level == new_level)
		{
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_1').css('width', percent_gained + '%');
				//$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(new_rep) + ' / ' + numberWithCommas(new_next_level));
			},510);
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(new_rep) + ' / ' + numberWithCommas(new_next_level));
			},2510);
		}
		else
		{
			var percent_to_full = 100 - previous_reputation_progress;
			
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_1').css('width', percent_to_full + '%');
				//$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(previous_next_level) + ' / ' + numberWithCommas(previous_next_level));
			},510);
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_2').css('width', new_reputation_progress + '%');
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_1').css('display', 'none');
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar').css('width', '0%');
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(new_rep) + ' / ' + numberWithCommas(new_next_level));
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_left').html('Level: ' + new_level);
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_left').addClass('levelup');
				setTimeout(function(){
					$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_left').removeClass('levelup');
				},500);
			},2510);
		}

	}
}
var showing_chapter = false;

function show_journal(show_chapter_id){
	if(showing_chapter != false && all_story_chapters[showing_chapter] != undefined)
	{
		show_chapter_id = showing_chapter;
	}
	if(gamedata['stories'] == undefined)
	{
		gamedata['stories'] = {};
	}
	$('.journal_back').hide();
	$('.story_back').hide();

	var parsed_journal = '';

	if(show_chapter_id == undefined || all_story_chapters[show_chapter_id] == undefined)
	{
		$('.journal_back').show();
		$.each(all_story_chapters, function(chapter_id, chapter_info){
			var show_this_chapter = true;
			var chapter_done = true;
			$.each(chapter_info['stories'], function(story_id, needs_completed){
				if(needs_completed == true && (gamedata['stories'][story_id] == undefined || gamedata['stories'][story_id]['claimed'] == false))
				{
					chapter_done = false;
				}
			});
			$.each(chapter_info['needs_completed'], function(needs_completed_id, needs_completed){
				if(gamedata['stories'][needs_completed_id] == undefined || gamedata['stories'][needs_completed_id]['claimed'] == false){show_this_chapter = false;}
			});
			if(show_this_chapter == true)
			{
				parsed_journal += parse_chapter(chapter_id, chapter_done);
			}
		});
	}	
	if(show_chapter_id != undefined && all_story_chapters[show_chapter_id] != undefined)
	{
		$('.story_back').show();
		var current_chapter = all_story_chapters[show_chapter_id];
		var show_story_count = 0;
		$.each(all_stories, function(story_id, story_info){
			if(current_chapter['stories'][story_id] != undefined)
			{
				var can_show_story = true;
				if(gamedata['stories'][story_id] != undefined && gamedata['stories'][story_id]['claimed'] == true){can_show_story = false;}
				$.each(story_info['needs_completed'], function(needs_completed_id, needs_completed){
					if(gamedata['stories'][needs_completed_id] == undefined || gamedata['stories'][needs_completed_id]['claimed'] == false){can_show_story = false;}
				});
				if(can_show_story == true)
				{
					if(gamedata['stories'][story_id] == undefined)
					{
						gamedata['stories'][story_id] = {
							amount: 		0,
							completed: 		false,
							claimed: 		false,
							date_completed: false
						}
					}
					show_story_count++;
					parsed_journal += parse_story(story_id);
				}
			}
		});
		if(show_story_count == 0 && all_story_chapters[show_chapter_id]['complete_text'] != undefined)
		{
			parsed_journal += '<div class="story">';
			parsed_journal += '<div class="story_name">Chapter complete</div>';
			parsed_journal += '<div class="story_description">' + all_story_chapters[show_chapter_id]['complete_text'] + '</div>';
			parsed_journal += '</div>'
		}
	}

	$('.journal_content').html(parsed_journal);
}

function parse_chapter(chapter_id, chapter_done){
	var parsed_chapter = '';

	if(all_story_chapters[chapter_id] != undefined)
	{
		var current_chapter = all_story_chapters[chapter_id];
		parsed_chapter += '<div class="chapter chapter_done_' + chapter_done + '" onclick="showing_chapter=\'' + chapter_id + '\';show_journal(\'' + chapter_id + '\')">';
		parsed_chapter += '<div class="chapter_bg"></div>';
		parsed_chapter += '<div class="chapter_name">' + current_chapter['name'] + '</div>';
		parsed_chapter += '<div class="chapter_subname">' + current_chapter['subname'] + '</div>';
		parsed_chapter += '</div>';
	}

	return parsed_chapter;
}

function parse_story(story_id){
	var parsed_story = '';
	if(gamedata['stories'][story_id] != undefined && all_stories[story_id] != undefined)
	{
		var current_story = all_stories[story_id];
		var story_progress = gamedata['stories'][story_id];
		parsed_story += '<div class="story">';
		parsed_story += '<div class="chapter_bg"></div>';
		parsed_story += '<div class="story_name">' + current_story['name'] + '</div>';
		parsed_story += '<div class="story_description">' + current_story['description'] + '</div>';
		parsed_story += '<div class="story_progress_name">Objective: ' + current_story['objective_name'] + '</div>';
		parsed_story += '<div class="story_progress_bar_container">';
		var story_progress_percent = Math.floor((story_progress['amount'] / current_story['amount']) * 100);
		if(story_progress_percent > 0)
		{
			parsed_story += 		'<div class="fake_pbc"><div class="story_progress_bar" style="width:' + story_progress_percent + '%"></div></div>';
		}
		parsed_story += 		'<div class="story_progress">' + story_progress['amount'] + ' / ' + current_story['amount'] + '</div>';
		parsed_story += '</div>';
		if(count_object(current_story['rewards']) > 0)
		{
			parsed_story += '<div class="story_rewards">';
			$.each(current_story['rewards'], function(reward_count, rewards_info){
				var temp_reward_id = rewards_info['reward_id'];
				if(rewards_info['reward_id'] == 'scraps'){temp_reward_id = 'scraps_placeholder';}
				var parsed_reward = parse_card(temp_reward_id, rewards_info['reward_amount']);
				parsed_story += '<span onclick="show_card_details(\'' + temp_reward_id + '\')">' + parsed_reward + '</span>';
			});
			parsed_story += '</div>';
		}
		if(story_progress['completed'] == true && story_progress['claimed'] == false)
		{
			parsed_story += '<div class="claim_story_button" onclick="claim_story(\'' + story_id + '\')">COMPLETE</div>';
		}
		else
		{
			parsed_story += '<div class="claim_story_button" onclick="show_content(\'map\')">MAP</div>';
		}
		parsed_story += '</div>';
	}
	return parsed_story;
}

function claim_story(story_id){
	if(gamedata['stories'][story_id] != undefined && all_stories[story_id] != undefined)
	{
		var current_story = all_stories[story_id];
		var story_progress = gamedata['stories'][story_id];
		if(story_progress['completed'] == true && story_progress['claimed'] == false)
		{
			all_current_rewards = {};
			current_reward_origin 	= 'journal';
			current_reward_text 	= '';
			if(current_story['reward_text'] != undefined){current_reward_text = current_story['reward_text'];}
			$.each(current_story['rewards'], function(reward_count, rewards_info){
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 		rewards_info['reward_id'],
					reward_amount: 	rewards_info['reward_amount'],
				}
			});
			story_progress['claimed'] = true;
			saveToLocalStorage();
			show_content('current_rewards');
		}
	}
}
function show_map(){
	if(gamedata['current_location'] == undefined)
	{
		gamedata['current_location'] = 'map';
		saveToLocalStorage();
	}

	var all_parsed_locations = '';
	if(gamedata['current_location'] != 'none' && all_locations[gamedata['current_location']] != undefined && all_locations[gamedata['current_location']]['parent_location'] != 'none')
	{
		var current_location_info = all_locations[gamedata['current_location']];
		all_parsed_locations += parse_location(gamedata['current_location'], undefined, true);
	}

	$.each(all_locations, function(location_id, location_info){
		if(location_info['parent_location'] == gamedata['current_location'])
		{
			var can_enter = true;
			$.each(location_info['needs_stories_complete'], function(story_counter, story_id_needed){
				if(gamedata['stories'] == undefined || gamedata['stories'][story_id_needed] == undefined || gamedata['stories'][story_id_needed]['claimed'] == false)
				{
					can_enter = false;
				}
			});
			all_parsed_locations += parse_location(location_id, can_enter);
			
		}
		
	});
	$('.map_content').html(all_parsed_locations);
	if(all_locations[gamedata['current_location']] == undefined)
	{
		delete gamedata['current_location'];
		show_map();
	}
	else
	{
		if(all_available_cards[all_locations[gamedata['current_location']]['card_image']] != undefined)
		{
			$('.map_bg').css('background-image','url(images/' + all_available_cards[all_locations[gamedata['current_location']]['card_image']]['image'] + ')');
		}
	}
}

function parse_location(location_id, can_enter, back_button){
	var parsed_location = '';
	if(all_locations[location_id] != undefined)
	{
		var location_info = all_locations[location_id];
		if(back_button == undefined || back_button == false)
		{
			var cleared_battle = 'false';
			if(gamedata['achievements'][location_id] != undefined && gamedata['achievements'][location_id]['completed'] == true)
			{
				cleared_battle = 'true';
			}
			parsed_location += '<div class="location map_col_' + location_info['map_col'] + ' map_row_' + location_info['map_row'] + ' location_type_' + location_info['type'] + ' cleared_battle_' + cleared_battle + ' can_enter_' + can_enter + '">';
			if(location_info['type'] == 'location' && can_enter != undefined && can_enter == true)
			{
				parsed_location += '<div class="location_click_event" onclick="set_location(\'' + location_id + '\')"></div>';
			}
			if(location_info['type'] == 'battle')
			{
				parsed_location += '<div class="location_click_event" onclick="map_hero=\'' + location_info['hero_id'] + '\';endless_waves=false;show_random_battle()"></div>';
				parsed_location += '<div class="map_icon battle_icon"></div>';
			}
			if(all_available_cards[location_info['card_image']] != undefined)
			{
				parsed_location += '<div class="location_bg" style="background-image:url(images/' + all_available_cards[location_info['card_image']]['image'] + ')"></div>';
			}
		}
		else
		{
			parsed_location += '<div class="location map_col_1 map_row_1 map_back_button">';
			parsed_location += '<div class="location_click_event" onclick="set_location(\'' + location_info['parent_location'] + '\')"></div>';
			if(all_available_cards[all_locations[location_info['parent_location']]['card_image']] != undefined)
			{
				parsed_location += '<div class="location_bg" style="background-image:url(images/' + all_available_cards[all_locations[location_info['parent_location']]['card_image']]['image'] + ')"></div>';
			}
		}
		
		
		parsed_location += '</div>';
	}
	return parsed_location;
}

function set_location(location_id){
	if(all_locations[location_id] != undefined)
	{
		gamedata['current_location'] = location_id;
		saveToLocalStorage();
		show_map();
	}
}
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
		var drop_chance = Math.floor((((gamedata['current_summon']['loot_rarity'] * gamedata['current_summon']['reward_count']) / card_drop_chance_reduction) / all_available_cards[gamedata['current_summon']['hero']]['value']) * 100);
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
var floating_text_amount = 0;

function parse_floating_text(floating_text, color, down){
	floating_text_amount++;
	var parsed_floating_text = '';
	var rotation = Math.floor(Math.random() * 40) + 40;
	var vertical = Math.floor(Math.random() * 40) + 40;
	var temp_floating_text_amount = floating_text_amount + '';

	if(down == undefined || down == false)
	{
		parsed_floating_text += '<div class="floating_text floating_text_' + temp_floating_text_amount + '" style="top:' + vertical + '%;left:' + rotation + '%;color:' + color + '">';
	}
	else
	{
		parsed_floating_text += '<div class="floating_text down floating_text_' + temp_floating_text_amount + '" style="left:' + rotation + '%;color:' + color + '">';
	}
	parsed_floating_text += 	floating_text;
	parsed_floating_text += '</div>';

	
	/*setTimeout(function(){
		$('.floating_text_' + temp_floating_text_amount).remove();
	},3000);*/

	return parsed_floating_text;
}
var units_left_to_process = {};
/*var any_effect_fired = false;*/
var all_timeouts = {};
var next_turn_timeout;
var timeout_key = 0;
var latest_result = 0;
var latest_slot = -10;
var current_rewards = {};
var amount_reduced = 0;
var game_paused = false;
var ready_to_resume = false;
var hand_slot_id = 0;
var highest_unit_id = 3;
var passive_effect_count = 0;
var pickup_rewards = {};

var next_action_timeout;

function start_next_turn(){
	$('.turn_pointer').removeClass('turn_pointer_1');
	$('.turn_pointer').removeClass('turn_pointer_2');
	$('.turn_pointer').addClass('turn_pointer_' + active_turn);

	current_phase = '';
	if(total_timeout < 0)
	{
		total_timeout = 0;
	}
	total_turn_counter++;

	$('.total_turn_counter').html(total_turn_counter);

	$('.resign_button').css('display','block');

	reduce_all_ability_delays(active_turn);
	enable_all_units_to_act(true, active_turn);

	reset_temp_health(active_turn);
	reset_temp_skills(active_turn);

	if(total_turn_counter >= 80)
	{
		total_timeout += 500;
		$('.total_turn_counter_container').css('color', '#f00');
		for (var i = 0; i <= 5; i++) {
			$.each(battle_info['combat_units'], function(combat_unit_id, combat_unit){
				if(combat_unit['slot'] == i && combat_unit['side'] == active_turn)
				{
					receive_damage(combat_unit_id, undefined, (Math.floor(total_turn_counter / 5) - 15), [/*'ignores_armor','ignore_shields'*/]);
					check_unit_alive(combat_unit_id);
					//total_timeout -= 500 * battle_speed;
				}
			});
		};
		
	}

	var pickup_chance = ((total_turn_counter /** total_turn_counter*/) / (160) / 3) * get_upgrade_factor('floating_chance', 'any', true);
	if(pickup_chance > 0.5){pickup_chance = 0.5;};
	if(Math.random() < pickup_chance /*|| true*/)
	{
		spawn_monthly_pickup();
	}
	
	current_phase = 'start_turn';
	next_action_timeout = setTimeout(function(){
		process_next_unit(current_phase, turn_phases[current_phase]);
	}, total_timeout);
}

var current_phase = '';

var turn_phases = {
	start_turn: 	true,
	draw_card: 		true,
	combat_start: 	true,
	basic: 			false,
	end_turn: 		true
}

function end_this_turn(){

	reset_temp_power(active_turn);
	
	if(active_turn == 1){active_turn = 2;}
	else{active_turn = 1;}

	var fight_number_counter = fight_number + 0;

	if(battle_info.combat_units[2]['current_health'] > 0 && battle_info.combat_units[1]['current_health'] > 0 && combat_alive == true)
	{
		next_action_timeout = setTimeout(function(){
			if(game_paused == false)
			{
				if(fight_number_counter == fight_number)
				{
					start_next_turn();
				}
				else
				{
					console.log(fight_number_counter + ' != ' + fight_number);
				}
			}
			else
			{
				ready_to_resume = true;
			}
		},total_timeout);
	}
	else
	{
		if(combat_alive == true)
		{
			if(battle_info.combat_units[2]['current_health'] > 0 && battle_info.combat_units[1]['current_health'] < 1)
			{
				check_quests('battle_won_any');
				check_quests('battle_won_type_' + current_battle_type);
				if(get_effective_power_factor(difficulty_setting) >= 1)
				{
					check_quests('battle_won_any_turn_count',total_turn_counter);
					check_quests('battle_won_' + current_battle_type + '_turn_count',total_turn_counter);
				}
				check_quests('battle_won_any_health_left_' + battle_info.combat_units[2]['current_health']);
				$('.unit_type_artifact.side_1').addClass('dead');
				if(current_battle_type == 'summoned')
				{
					$('.turn_pointer').addClass('hidden');
					if(endless_waves == true)
					{
						var defeated_hero_id = battle_info.combat_units[1]['card_type'];
					    if(battle_info.combat_units[1]['original_card_type'] != undefined)
					    {
					    	defeated_hero_id = battle_info.combat_units[1]['original_card_type'];
					    }
					    var reward_amount = round_by_percent((20 * get_upgrade_factor('summon_reward', 'any', true)) * /*sqr*/(get_effective_power_factor(difficulty_setting)) * (1 + (difficulty_setting / 100)));
						var hero_dropped = add_basic_win_rewards(reward_amount, defeated_hero_id, true);
						if(hero_dropped == true){total_timeout += 1000;}else{$('.unit_id_1').addClass('dead');}
						check_quests('battle_won_number_wave',endless_wave_count);
						endless_wave_count += 1;
						endless_waves = true;
						current_battle_type = 'summoned';
						timeout_key ++;
						all_timeouts[timeout_key] = setTimeout(function(){
							clear_all_timeouts();
							$('.projectile').remove();
							show_content('battle');
						},total_timeout + 1000);
						check_quests('battle_won_wave');
						if(get_effective_power_factor(difficulty_setting) >= 1)
						{
							check_quests('battle_won_wave_turn_count',total_turn_counter);
						}
						check_quests('battle_won_wave_health_left_' + battle_info.combat_units[1]['current_health']);
					}
					else
					{
						gamedata['battles_won']++;
					    all_current_rewards = {};
					    current_reward_text = 'You won the battle!';
					    if(gamedata['summon_min_power'] == undefined){gamedata['summon_min_power'] = 1;}
					    gamedata['summon_min_power'] += 1;

					    var reward_amount = 20;
						
					    var defeated_hero_id = battle_info.combat_units[1]['card_type'];
					    if(battle_info.combat_units[1]['original_card_type'] != undefined)
					    {
					    	defeated_hero_id = battle_info.combat_units[1]['original_card_type'];
					    }

						var hero_dropped = add_basic_win_rewards(reward_amount, defeated_hero_id);
						if(hero_dropped == true){total_timeout += 1000;}else{$('.unit_id_1').addClass('dead');}
				    	current_reward_origin = 'summon';

						timeout_key ++;
						all_timeouts[timeout_key] = setTimeout(function(){
							show_content('current_rewards');
						},total_timeout + 1000);
						check_quests('battle_won_summoned');
						if(get_effective_power_factor(difficulty_setting) >= 1)
						{
							check_quests('battle_won_summoned_turn_count',total_turn_counter);
						}
						check_quests('battle_won_summoned_health_left_' + battle_info.combat_units[1]['current_health']);
						
					}
					$('.side_1.type_artifact').addClass('dead');
				}

				
				
			}
			else
			{
				$('.turn_pointer').addClass('hidden');
				$('.unit_id_2').addClass('dead');
				$('.unit_type_artifact.side_2').addClass('dead');
				/*if(endless_waves == false)
				{*/
					if(battle_info.combat_units[2]['current_health'] < 1 && battle_info.combat_units[1]['current_health'] < 1)
					{
						if(endless_waves != true)
						{
							gamedata['battles_tied']++;
						}
						check_quests('battle_tie_any');
					}
					else
					{
						if(endless_waves != true)
						{
							gamedata['battles_lost']++;
						}
						gamedata['summon_min_power'] *= 0.75;
						check_quests('battle_loss_any');
						check_quests('battle_loss_any_turn_count',total_turn_counter);
						check_quests('battle_loss_' + current_battle_type + '_turn_count',total_turn_counter);
						check_quests('battle_loss_any_health_left_' + battle_info.combat_units[1]['current_health']);
					}
				/*}*/
				if(current_battle_type == 'random' || true)
				{
					if(endless_waves == true)
					{
						current_reward_origin = 'waves';
						current_reward_text = 'You defeated ' + (endless_wave_count - 1) + ' waves!';
						timeout_key ++;
						all_timeouts[timeout_key] = setTimeout(function(){
							show_content('current_rewards');
						},total_timeout + 1000);
					}
					else
					{
						timeout_key ++;
						next_turn_timeout = setTimeout(function(){
							clear_all_timeouts();
							end_combat();
						},total_timeout + 1000);
					}
				}
			}
			
			combat_alive = false;
			saveToLocalStorage();
		}
	}
}

var process_counter = 0;
var all_counter_timeouts = {};

function process_next_unit(proc, do_not_process_effects){
	//console.log(proc);
	var process_started = nowint();
	check_all_ready_cards();
	var next_unit_id = find_next_unit_to_act(active_turn);
	if(next_unit_id != false)
	{
		process_single_unit(next_unit_id, undefined, do_not_process_effects, proc);
		next_action_timeout = setTimeout(function(){
			process_next_unit(current_phase, turn_phases[current_phase]);
		}, total_timeout);
		total_timeout = 0;
	}
	else
	{
		current_phase = find_next_phase();
		enable_all_units_to_act(false, active_turn);
		if(current_phase != false)
		{
			if(current_phase == 'draw_card')
			{
				reduce_all_hand_times(active_turn);
				check_all_ready_cards();
				draw_card(active_turn, undefined, undefined, undefined);
				current_phase = find_next_phase();
			}
			
			next_action_timeout = setTimeout(function(){
				process_next_unit(current_phase, turn_phases[current_phase]);
			}, total_timeout);
			total_timeout = 0;
		}
		else
		{
			next_action_timeout = setTimeout(function(){
				end_this_turn();
			}, total_timeout);
			total_timeout = 0;
		}
		
	}
	var process_done = nowint();
	var process_time = process_done - process_started;
	if(process_time > 10)
	{
		process_counter++;
		var process_time_counter = process_counter + 0;
		$('.all_save_icons').append('<div class="saving_icon save_' + process_time_counter + ' save_danger" style="width:' + (process_time / 2) + 'px"></div>');
		
		all_counter_timeouts[process_time_counter] = setTimeout(function(){
			$('.save_' + process_time_counter).remove();
			clearTimeout(all_counter_timeouts[process_time_counter]);
			delete(all_counter_timeouts[process_time_counter]);
		},1000);
		//console.log(process_time);
	}
	total_timeout += process_time;
}

function find_next_phase(){
	var next_phase = false;
	var next_phase_procs = false;
	var found_current_phase = false;
	$.each(turn_phases, function(phase_id, proc_effects){
		if(found_current_phase == true && next_phase == false){next_phase = phase_id;next_phase_procs = proc_effects;}
		if(phase_id == current_phase && next_phase == false){found_current_phase = true;}
	});
	return next_phase;
}

function find_next_unit_to_act(side){
	var next_unit_id = false;
	for(var unit_slot=-5;unit_slot<=5;unit_slot++)
	{
		$.each(battle_info.combat_units, function(unit_id, unit){
			if(next_unit_id == false && /*unit['side'] == side &&*/ unit['acted_this_turn'] < 1 && unit['slot'] == unit_slot && combat_alive == true && (unit['failed_to_act_this_phase'] == undefined || unit['failed_to_act_this_phase'] == false))
			{
				next_unit_id = unit_id;
			}
		});
	}
	return next_unit_id;
}

function add_basic_win_rewards(basic_to_pick, chance_card_id, show_drops){
	//console.log(basic_to_pick);
	var effective_rarity = 1 + (gamedata['loot_rarity'] / 100);

	if(basic_to_pick == undefined)
	{
		basic_to_pick = 20;
	}
	if(current_battle_type == 'summoned' && gamedata['current_summon'] != undefined && endless_waves == false)
    {
    	basic_to_pick = gamedata['current_summon']['reward_count'];
    	if(gamedata['current_summon']['loot_rarity'] != undefined)    
    	{
    		effective_rarity = gamedata['current_summon']['loot_rarity'];
    	}	
    }
    if(current_battle_type == 'summoned' && endless_waves == true)
    {
    	effective_rarity = get_upgrade_factor('summon_loot_rarity', 'any', true);	
    }
	if(gamedata['loot_charges'] == undefined)
	{
		gamedata['loot_charges'] = 0;
	}
	if(gamedata['loot_rarity'] == undefined)
	{
		gamedata['loot_rarity'] = 0;
	}
	if(gamedata['loot_charges'] > 0)
	{
		basic_to_pick += gamedata['loot_charges'];
	}
	gamedata['loot_charges'] = 0;
	gamedata['loot_rarity'] = 0;
	if(endless_waves == false)
	{
		current_rewards = {};
	}

	
	

	/*if(Math.random() < 0.01 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'fancy_card_stash',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}
	else
	{
		if(Math.random() < 0.05 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
		{
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		'card_stash',
				reward_amount: 	1,
			}
			basic_to_pick -= 1;
		}
	}

	if(Math.random() < 0.01 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'writ_of_loyalty',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	
	/*if(Math.random() < 0.005 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		get_back_card_card(),
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/

	/*if(Math.random() < 0.01 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'toolkit',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.02 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'raid_key',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.03 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'quest_giver',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}
	if(Math.random() < 0.03 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'spellbook',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.03 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'resource_stash',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.10 && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'spyglass',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}
	if(Math.random() < 0.15 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'treasure_map',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	
	
	
	/*for(var i=0;i<basic_to_pick;i++)
	{
	    var card_gained = get_basic_reward_card(current_rewards);
	    var card_amount_gained = (Math.floor(Math.random() * ((difficulty_setting / 10) +1) * 5)) + 1;
	    //if(card_amount_gained < 3){card_amount_gained = 3;}
	    card_amount_gained += gamedata['loot_charges'];
	    current_rewards[i] = {card_id:card_gained,card_amount:card_amount_gained};
	    all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		card_gained,
			reward_amount: 	card_amount_gained,
			pickable: 		true,
		}
	}*/

	if(fixed_hero != false)
	{
		if(all_enemy_heroes[fixed_hero] != undefined && all_enemy_heroes[fixed_hero]['drops'] != undefined)
		{
			$.each(all_enemy_heroes[fixed_hero]['drops'], function(drop_id, drop_amount){
				var max_drop = drop_amount;
				var actual_drop = round_by_percent(Math.random() * max_drop);
				if(actual_drop > 0)
				{
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 			drop_id,
						reward_amount: 		actual_drop,
					}
					if(show_drops != undefined && show_drops == true){show_drop(drop_id, actual_drop);}
				}
			});
		}
	}
	else
	{
		
	}

	var hero_dropped = false;

	if(chance_card_id != undefined && (all_available_cards['recipe_' + chance_card_id] != undefined) && (gamedata['known_recipes'] == undefined || gamedata['known_recipes'][chance_card_id] == undefined))
	{
		//console.log(chance_card_id);
		if(Math.random() < (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / all_available_cards[chance_card_id]['value']))
		{
			if(all_available_cards[chance_card_id]['recipe'] != undefined)
			{
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 			'recipe_' + chance_card_id,
					reward_amount: 		1,
				};
				basic_to_pick -= Math.ceil(all_available_cards[chance_card_id]['value'] / 2);
				if(show_drops != undefined && show_drops == true){show_drop('recipe_' + chance_card_id, 1);}
				if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
				gamedata['known_recipes'][chance_card_id] = true;
			}
		}
	}

	if(chance_card_id != undefined)
	{
		if(Math.random() < (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / all_available_cards[chance_card_id]['value']))
		{

			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 			chance_card_id,
				reward_amount: 		1,
			};
			basic_to_pick -= Math.ceil(all_available_cards[chance_card_id]['value'] / 2);
			hero_dropped = true;
			$('.unit_id_1').removeClass('side_1');
			$('.unit_id_1').addClass('side_2');
			$('.unit_id_1').addClass('won_hero');
		}
		$.each(all_available_cards[chance_card_id]['loot'], function(loot_id, loot_chance){
			if(Math.random() * 100 < loot_chance)
			{
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 			loot_id,
					reward_amount: 		1,
					pickable: 			true,
				};
				if(show_drops != undefined && show_drops == true){show_drop(loot_id, 1);}
				//basic_to_pick -= Math.ceil(all_available_cards[loot_id]['value'] / 2);
			}
		});
	}

	if(/*hero_dropped == false && */chance_card_id != undefined && all_available_cards[chance_card_id] != undefined)
	{
		var hero_value = all_available_cards[chance_card_id]['value'];
		var possible_extra_drops = {};
		$.each(all_available_cards, function(drop_card_id, drop_card_info){
			if(drop_card_info['value'] <= hero_value && (gamedata['known_recipes'] == undefined || gamedata['known_recipes'][drop_card_id] == undefined || drop_card_info['recipe'] == undefined) /*&& drop_card_info['value'] >= hero_value / 4*/ && drop_card_info['pick_chance'] > 0 && (drop_card_info['type'] == 'spell' || drop_card_info['type'] == 'artifact' || ((drop_card_info['type'] == 'structure' || drop_card_info['type'] == 'creature') && drop_card_info['pick_chance'] > 0 && drop_card_info['hero_version'] == undefined)))
			{
				if(drop_card_info['recipe'] != undefined)
				{
					possible_extra_drops['recipe_' + drop_card_id] = 1 / drop_card_info['value'];
				}
				else
				{
					possible_extra_drops[drop_card_id] = 1 / drop_card_info['value'];
				}
			}
		});
		if(count_object(possible_extra_drops) > 0)
		{
			var chosen_extra_drop = get_random_key_from_object_based_on_num_value(possible_extra_drops);
			if(Math.random() < (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / all_available_cards[chance_card_id]['value']))
			{
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 			chosen_extra_drop,
					reward_amount: 		1,
				};
				if(show_drops != undefined && show_drops == true){show_drop(chosen_extra_drop, 1);}
				basic_to_pick -= Math.ceil(all_available_cards[chosen_extra_drop]['value'] / 2);
				if(all_available_cards[chosen_extra_drop]['type'] == 'recipe')
				{
					if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
					gamedata['known_recipes'][all_available_cards[chosen_extra_drop]['recipe']] = true;
				}
			}
		}
	}

	if(current_battle_type != 'daily')
	{
		var random_loot_id = get_random_key_from_object_based_on_num_value(random_loot_drops) /*random_loot_drops[get_random_key_from_object(random_loot_drops)]*/;
		/*$.each(random_loot_drops, function(random_loot_id, random_loot)
		{*/
			if(random_loot_id != undefined && all_available_cards[random_loot_id] != undefined)
			{
				var random_loot_drop_chance = (((effective_rarity */* Math.sqrt*/(basic_to_pick)) / card_drop_chance_reduction) / sqr(all_available_cards[random_loot_id]['value'])) * get_upgrade_factor('loot_drop_chance', random_loot_id, true);
				//if(random_loot_drop_chance > 0.25){random_loot_drop_chance = 0.25;}
				if(Math.random() < random_loot_drop_chance)
				{
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 			random_loot_id,
						reward_amount: 		1,
					};
					if(show_drops != undefined && show_drops == true){show_drop(random_loot_id, 1);}
					//basic_to_pick -= all_available_cards[random_loot_id]['value'];
				}
			}
		/*});*/
	}
	else
	{
		$.each(random_loot_drops, function(random_loot_id, random_loot)
		{
			if(random_loot_id != undefined && all_available_cards[random_loot_id] != undefined)
			{
				var random_loot_drop_chance = (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / sqr(all_available_cards[random_loot_id]['value']));
				if(random_loot_drop_chance > 0.5){random_loot_drop_chance = 0.5;}
				if(Math.random() < random_loot_drop_chance)
				{
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 			random_loot_id,
						reward_amount: 		1,
					};
					if(show_drops != undefined && show_drops == true){show_drop(random_loot_id, 1);}
					basic_to_pick -= all_available_cards[random_loot_id]['value'];
				}
			}
		});
	}

	if(basic_to_pick > 0)
	{
		//var card_amount_gained = (Math.floor(Math.random() * ((difficulty_setting / 10) +1) * 5)) + 5;
		/*var card_amount_gained = Math.ceil(sqr(get_effective_power_factor()) * 20);
		card_amount_gained += gamedata['loot_charges'];*/
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'scraps',
			reward_amount: 		basic_to_pick,
		}
		//if(show_drops != undefined && show_drops == true){show_drop('scraps_placeholder', basic_to_pick);}
	}
	return hero_dropped;
	
}

var loot_drop_counter = 0;

function show_drop(drop_id, drop_amount){
	loot_drop_counter++;
	var local_loot_drop_counter = loot_drop_counter + 0;
	var parsed_card = parse_card(drop_id, drop_amount);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container').append('<div class="loot_drop unit side_1 slot_0 loot_drop_' + local_loot_drop_counter + '">' + parsed_card + '</div>');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.loot_drop_' + local_loot_drop_counter).addClass('dropped');

	},total_timeout + 100);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.loot_drop_' + local_loot_drop_counter).removeClass('dropped');
		$('.loot_drop_' + local_loot_drop_counter).addClass('picked_up');
		$('.loot_drop_' + local_loot_drop_counter).removeClass('side_1');
		$('.loot_drop_' + local_loot_drop_counter).addClass('side_2');
	},total_timeout + 600);
	total_timeout+= 500;
}

function gain_reward(reward_id){
	$('.detail_overlay').removeClass('non_clickable');
    if(current_rewards[reward_id] != undefined)
    {
        for(var i=0;i<current_rewards[reward_id]['card_amount'];i++)
        {
            gain_card(current_rewards[reward_id]['card_id']);
        }
        show_card_details(current_rewards[reward_id]['card_id']);
    }
    current_rewards = {};
}

function process_single_unit(unit_id, activate_on_play, do_not_process_effects, proc){


	if(proc == undefined)
	{
		proc = 'basic';
	}
	var any_effect_fired = false;
	var current_unit = battle_info.combat_units[unit_id];
	/*if(current_unit['acted_this_turn'] < 1 && combat_alive == true)
	{
		if(current_unit['ability_delays'] == undefined)
	    {
	    	current_unit['ability_delays'] = {};
	    }
	    $.each(current_unit['ability_delays'], function(delay_id, delay_amount){
	    	current_unit['ability_delays'][delay_id] -= 1;
	    });
	    var parsed_abilities = parse_abilities(unit_id);
	    timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
		},total_timeout);
	}*/
	if(current_unit['acted_this_turn'] < 1 && combat_alive == true && (current_unit['effects'] == undefined || current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0 || (do_not_process_effects != undefined && do_not_process_effects == true)))
	{   
	    /*$.each(current_unit['abilities'], function(ability_id, ability_level){
			var current_ability = all_abilities[ability_id];

			if(battle_info.combat_units[unit_id] != undefined && (current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0 || (do_not_process_effects != undefined && do_not_process_effects == true))){

				if(current_ability['proc'] != undefined && (match_array_values(current_ability['proc'], 'pre_basic') == true && proc == 'basic') && (current_unit['ability_delays'][ability_id] == undefined || current_unit['ability_delays'][ability_id] < 1))
				{
					var temp_any_effect_fired = process_ability(unit_id, current_ability, ability_level, unit_id, undefined, 'pre_basic');
					if(temp_any_effect_fired == true)
					{
						any_effect_fired = true;
						check_ability_delay(unit_id, ability_id);
					}
				}
				
			}
			
		});*/

		$.each(current_unit['abilities'], function(ability_id, ability_level){
			var current_ability = all_abilities[ability_id];

			if(battle_info.combat_units[unit_id] != undefined && (current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0 || (do_not_process_effects != undefined && do_not_process_effects == true))){

				if(current_ability['proc'] != undefined && (match_array_values(current_ability['proc'], proc) == true || (activate_on_play == true && match_array_values(current_ability['proc'], 'on_play') == true) && proc == 'basic') && (current_unit['ability_delays'][ability_id] == undefined || current_unit['ability_delays'][ability_id] < 1))
				{
					var temp_any_effect_fired = process_ability(unit_id, current_ability, ability_level, unit_id, undefined, proc);
					if(temp_any_effect_fired == true)
					{
						any_effect_fired = true;
						check_ability_delay(unit_id, ability_id);
					}
				}
				
			}
			
		});
		/*if(any_effect_fired == true && battle_info.combat_units[unit_id] != undefined && current_unit['acted_this_turn'] < 1 && combat_alive == true && battle_info.combat_units[unit_id]['temp_power'] != undefined && battle_info.combat_units[unit_id]['temp_power'] != 0)
		{
			battle_info.combat_units[unit_id]['temp_power'] = 0;
			check_unit_power(unit_id);	
			//total_timeout += 500 * battle_speed;
		}*/
		if(any_effect_fired == true)
		{
			total_timeout += 1000 * battle_speed;
		}
		if(any_effect_fired == true && battle_info.combat_units[unit_id] != undefined)
		{
			current_unit['acted_this_turn'] += 1;
			/*var parsed_abilities = parse_abilities(unit_id);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
			},total_timeout);*/
		}
		else
		{
			current_unit['failed_to_act_this_phase'] = true;
		}		
	}
	else
	{
		if(proc == 'basic')
		{
			if(current_unit['effects'] != undefined && current_unit['effects']['stunned'] != undefined && current_unit['effects']['stunned'] > 0)
			{
				process_passive_effect(unit_id, 'stunned', current_unit['effects']['stunned']);
			}
			current_unit['acted_this_turn'] += 1;
			if(current_unit['acted_this_turn'] > 0)
			{
				current_unit['failed_to_act_this_phase'] = true;
			}
		}
		else
		{
			current_unit['failed_to_act_this_phase'] = true;
		}
	}
	/*if(battle_info.combat_units[unit_id] != undefined && current_unit['acted_this_turn'] < 1 && combat_alive == true && (current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0))
	{
	    process_single_unit(unit_id, undefined, true);
	}*/
	if(battle_info.combat_units[unit_id] != undefined && (do_not_process_effects == undefined || do_not_process_effects == false)){
		$.each(current_unit['effects'], function(effect, amount){
			if(amount > 0)
			{
				if(battle_info.combat_units[unit_id] != undefined && effect != 'stunned'){
					process_passive_effect(unit_id, effect, amount);
				}
			}
		});
		if(battle_info.combat_units[unit_id] != undefined){
		    //current_unit['acted_this_turn'] = 1;
			update_passive_effects(unit_id);
		};
	}

	return any_effect_fired;
}

function reset_temp_skills(side){
	$.each(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side && current_unit['temp_skills'] != undefined && count_object(current_unit['temp_skills']) > 0)
		{
			$.each(current_unit['temp_skills'], function(skill_id, temp_level){
				grant_skill(unit_id, unit_id, (-1 * temp_level), skill_id, false);
				delete current_unit['temp_skills'][skill_id];
			});
			check_visible_skills(unit_id);
		}
		
	});
}

function reset_temp_health(side){
	$.each(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side && current_unit['armor'] != undefined && current_unit['armor'] != 0)
		{
			total_timeout += 500 * battle_speed;
			current_unit['armor'] = 0;
			check_unit_hp(unit_id);
		}
		if(combat_alive == true && current_unit['side'] == side && current_unit['temp_health'] != undefined && current_unit['temp_health'] != 0)
		{
			total_timeout += 500 * battle_speed;
			if(current_unit['temp_health'] > 0){current_unit['temp_health'] = Math.floor(current_unit['temp_health'] * 0.75);}
			if(current_unit['temp_health'] < 0){current_unit['temp_health'] = Math.ceil(current_unit['temp_health'] * 0.75);}
			//current_unit['temp_health'] = 0;
			check_unit_hp(unit_id);
			check_unit_alive(unit_id);
		}
		
	});
}

function reset_temp_power(side){
	$.each(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side && current_unit['temp_power'] != undefined && current_unit['temp_power'] < 0)
		{
			total_timeout += 500 * battle_speed;
			current_unit['temp_power'] = 0;
			check_unit_power(unit_id);	
		}
	});
}

function reduce_all_ability_delays(side){

	$.each(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side)
		{
			var something_changed = false;
			if(current_unit['ability_delays'] == undefined)
		    {
		    	current_unit['ability_delays'] = {};
		    }
		    $.each(current_unit['ability_delays'], function(delay_id, delay_amount){
		    	if(current_unit['ability_delays'][delay_id] > 0)
		    	{
		    		current_unit['ability_delays'][delay_id] -= 1;
		    		something_changed = true;
		    	}
		    });
		    if(something_changed == true)
		    {
			    var parsed_abilities = parse_abilities(unit_id);
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
				},total_timeout);
			}
			if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['effects'] == undefined)
			{
				battle_info.combat_units[unit_id]['effects'] = {};
			}
			/*if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['effects']['stunned'] != undefined && battle_info.combat_units[unit_id]['effects']['stunned'] > 0)
			{
				if(battle_info.combat_units[unit_id]['effects']['stunned'] == 1)
				{
					total_timeout += 500 * battle_speed;
					if(total_timeout < 1000 * battle_speed)
					{
						total_timeout = 1000 * battle_speed;
					}
				}
				battle_info.combat_units[unit_id]['effects']['stunned'] -= 1;
				update_passive_effects(unit_id);
			}*/
			/*if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['effects']['blessed'] != undefined && battle_info.combat_units[unit_id]['effects']['blessed'] > 0)
			{
				battle_info.combat_units[unit_id]['effects']['blessed'] = 0;
				update_passive_effects(unit_id);
			}*/
		}

	});
		
	
}

function check_ability_delay(unit_id, ability_id){
	if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['abilities'][ability_id] != undefined)
	{
	    var something_changed = false;
		var current_ability = all_abilities[ability_id];
		var current_unit = battle_info.combat_units[unit_id];
		var ability_level = current_unit['abilities'][ability_id];
		if(current_ability['delay'] != undefined && ability_level['delay'] == undefined)
		{
			current_unit['ability_delays'][ability_id] = calculate_effect({amount:current_ability['delay']}, undefined, unit_id, ability_level);
			something_changed = true;
		}
		if(battle_info.combat_units[unit_id]['abilities'][ability_id]['delay'] != undefined)
		{
			current_unit['ability_delays'][ability_id] = calculate_effect({amount:battle_info.combat_units[unit_id]['abilities'][ability_id]['delay']}, undefined, unit_id, battle_info.combat_units[unit_id]['abilities'][ability_id]);
			something_changed = true;
		}
		
		/*if(battle_info.combat_units[unit_id] != undefined && something_changed == true)
		{
			var parsed_abilities = parse_abilities(unit_id);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
			},total_timeout);
		};	*/
	}
}

function check_unopposed_ally(side){
	var found_unopposed_ally = false;
	for(var slot = 1;slot <= 5;slot++)
	{
		var found_ally = false;
		var found_enemy = false;	
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == side && unit_info['slot'] == slot)
			{
				found_ally = true;
			}
			if(unit_info['side'] != side && unit_info['slot'] == slot)
			{
				found_enemy = true;
			}
		});
		if(found_ally == true && found_enemy == false)
		{
			found_unopposed_ally = true;
		}
	}

	return found_unopposed_ally;
};

function process_passive_effect(unit_id, effect, amount){

	if(battle_info.combat_units[unit_id] != undefined && effect == 'burning' && combat_alive == true)
	{
		
		var temp_burn_reduction = Math.ceil(battle_info.combat_units[unit_id]['effects']['burning'] / 2);
		//receive_damage(unit_id, undefined, amount, ['fire','burning']);
		create_projectile(unit_id, unit_id, 'burn', false, undefined, battle_info.combat_units[unit_id]['side'], undefined, undefined, undefined, true);
		receive_damage(unit_id, undefined, temp_burn_reduction, ['fire','burning']);
		if(battle_info.combat_units[unit_id] != undefined)
		{
			battle_info.combat_units[unit_id]['effects']['burning'] -= temp_burn_reduction;
			//if(battle_info.combat_units[unit_id]['effects']['burning'] > 0){battle_info.combat_units[unit_id]['effects']['burning'] -= 1;}
			//battle_info.combat_units[unit_id]['effects']['burning'] = 0;
			update_passive_effects(unit_id);
			check_unit_alive(unit_id);
		}
		total_timeout += 500 * battle_speed;
	}
	if(battle_info.combat_units[unit_id] != undefined && effect == 'poisoned' && combat_alive == true)
	{

		create_projectile(unit_id, unit_id, 'poison', false, undefined, battle_info.combat_units[unit_id]['side'], undefined, undefined, undefined, true);
		receive_damage(unit_id, undefined, Math.ceil(amount / 2), ['poisoned','ignores_armor']);
		//receive_damage(unit_id, undefined, 1, ['poisoned','ignores_armor']);
		//battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;
		//if(battle_info.combat_units[unit_id]['effects']['poisoned'] > 0){battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;}
		if(battle_info.combat_units[unit_id] != undefined)
		{
			battle_info.combat_units[unit_id]['effects']['poisoned'] = Math.floor(battle_info.combat_units[unit_id]['effects']['poisoned']/ 2);
			//if(battle_info.combat_units[unit_id]['effects']['poisoned'] > 0){battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;}
			//battle_info.combat_units[unit_id]['effects']['poisoned'] = 0;
			update_passive_effects(unit_id);
			check_unit_alive(unit_id);
		}
		total_timeout += 500 * battle_speed;
	}
	if(battle_info.combat_units[unit_id] != undefined && effect == 'stunned' && combat_alive == true)
	{
		//receive_damage(unit_id, undefined, amount, ['poisoned','ignores_armor']);
		battle_info.combat_units[unit_id]['effects']['stunned'] -= 1;
		//battle_info.combat_units[unit_id]['acted_this_turn'] += 1;
		//if(battle_info.combat_units[unit_id]['effects']['poisoned'] > 1){battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;}
		if(battle_info.combat_units[unit_id] != undefined)
		{
			//battle_info.combat_units[unit_id]['effects']['poisoned'] = Math.floor(battle_info.combat_units[unit_id]['effects']['poisoned']/ 2);
			update_passive_effects(unit_id);
			//check_unit_alive(unit_id);
		}
		total_timeout += 500 * battle_speed;
	}
	if(battle_info.combat_units[unit_id] != undefined && effect == 'doom' && combat_alive == true && Math.random() <= amount / 10)
	{
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		create_projectile(unit_id, unit_id, 'doom', false, undefined, battle_info.combat_units[unit_id]['side'], undefined, undefined, undefined, true);
		/*all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + unit_id + ' .card_image').append('<div class="just_doomed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + unit_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750 * battle_speed);*/
		total_timeout -= 250 * battle_speed;
		check_unit_alive(unit_id, undefined, true);
		total_timeout += 750 * battle_speed;
	}
}

var skills_to_show_icon = {
	explode: 	'bomb',
	wounded: 	'wound',
	blessed: 	'bless',
}

function update_passive_effects(unit_id){
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
	$('.unit_id_' + unit_id + ' .unit_effects').html('');
	},total_timeout);		
	$.each(battle_info.combat_units[unit_id]['effects'], function(effect, amount){
		if(amount > 0)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + unit_id + ' .unit_effects').prepend('<div class="effect_' + effect + '">' + amount + '</div>');
			},total_timeout);		
		}
	});
	$.each(battle_info.combat_units[unit_id]['abilities'], function(ability_id, ability_level){
		if(ability_level > 0 && skills_to_show_icon[ability_id] != undefined)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + unit_id + ' .unit_effects').prepend('<div class="projectile_' + skills_to_show_icon[ability_id] + '">' + ability_level + '</div>');
			},total_timeout);		
		}
	});

	check_visible_skills(unit_id);
}

function process_ability(unit_id, current_ability, level, origin_id, any_effect_fired, current_proc, check_death){

	/*if(typeof(level) == 'object')
	{
		var level = level['level'];
	}*/
	if(battle_info['combat_units'][unit_id] != undefined)
	{

		if(any_effect_fired == undefined){any_effect_fired = false;}

		var ability_can_fire = true;
		
		if(battle_info['combat_units'][unit_id] == undefined)
		{
			ability_can_fire = false;
		}

		if(current_ability['need_power'] != undefined && current_ability['need_power'] == true)
		{
			var current_power = calculate_effect({amount:'origin_power'}, undefined, unit_id, undefined);
			if(current_power < 1)
			{
				ability_can_fire = false;
			}
		}
		if(current_ability['need_armor'] != undefined && current_ability['need_armor'] == true && battle_info['combat_units'][unit_id]['armor'] < 1)
		{
			ability_can_fire = false;
		}
		if(current_ability['unopposed_ally'] != undefined && current_ability['unopposed_ally'] == true && check_unopposed_ally(battle_info['combat_units'][unit_id]['side']) == false)
		{
			ability_can_fire = false;
		}

		if(current_ability['origin_type'] != undefined && (battle_info.combat_units[origin_id] == undefined || current_ability['origin_type'] != battle_info.combat_units[origin_id]['type']))
		{
			ability_can_fire = false;
		}

		if(current_ability['origin_damaged'] != undefined && (battle_info.combat_units[origin_id] == undefined || battle_info.combat_units[origin_id]['health'] <= battle_info.combat_units[origin_id]['current_health']))
		{
			ability_can_fire = false;
		}

		if(current_ability['origin_does_not_have_ability'] != undefined && battle_info.combat_units[origin_id] != undefined)
		{
			$.each(battle_info.combat_units[origin_id]['abilities'], function(temp_key, temp_value){
				if(match_array_values(current_ability['origin_does_not_have_ability'], [temp_key]) == true)
				{
					ability_can_fire = false;
				}
			});	
		}

		if(current_ability['origin_has_opposing'] != undefined && battle_info.combat_units[origin_id] != undefined)
		{
			if(current_ability['origin_has_opposing'] == false && count_object(filter_targets_by_has_no_opposing({0:origin_id})) == 0)
			{
				ability_can_fire = false;
			}
			if(current_ability['origin_has_opposing'] == true && count_object(filter_targets_by_has_no_opposing({0:origin_id})) > 0)
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['origin_has_effect'] != undefined && battle_info.combat_units[origin_id] != undefined)
		{
			if(battle_info.combat_units[origin_id]['effects'] == undefined || battle_info.combat_units[origin_id]['effects'][current_ability['origin_has_effect']] == undefined || battle_info.combat_units[origin_id]['effects'][current_ability['origin_has_effect']] < 1)
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['this_has_effect'] != undefined && battle_info.combat_units[unit_id] != undefined)
		{
			if(battle_info.combat_units[unit_id]['effects'] == undefined || battle_info.combat_units[unit_id]['effects'][current_ability['this_has_effect']] == undefined || battle_info.combat_units[unit_id]['effects'][current_ability['this_has_effect']] < 1)
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['max_enemy_units'] != undefined && count_enemy_units(battle_info['combat_units'][unit_id]['side']) > current_ability['max_enemy_units'])
		{
			ability_can_fire = false;
		}

		if(current_ability['max_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) > current_ability['max_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_enemy_units'] != undefined && count_enemy_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_enemy_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_unopposed_enemy_units'] != undefined && count_unopposed_enemy_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_unopposed_enemy_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_double_free_slots'] != undefined && count_double_free_slots() < current_ability['min_double_free_slots'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_units'] != undefined && (count_ally_units(battle_info['combat_units'][unit_id]['side']) + count_enemy_units(battle_info['combat_units'][unit_id]['side'])) < current_ability['min_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['max_ally_artifacts'] != undefined && count_ally_artifacts(battle_info['combat_units'][unit_id]['side']) > calculate_effect({amount:current_ability['max_ally_artifacts']},undefined, origin_id, level))
		{
			ability_can_fire = false;
		}
		if(current_ability['min_enemy_artifacts'] != undefined && count_enemy_artifacts(battle_info['combat_units'][unit_id]['side']) < calculate_effect({amount:current_ability['min_enemy_artifacts']},undefined, origin_id, level))
		{
			ability_can_fire = false;
		}
		
		if(current_ability['have_free_adjacent_slot'] != undefined && find_free_slot(battle_info['combat_units'][unit_id]['side'], battle_info['combat_units'][unit_id]['card_type'], 'none', 'adjacent_of_origin', undefined, unit_id) == false)
		{
			ability_can_fire = false;
		}

		if(current_ability['cannot_proc_while_stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] > 0)
		{
			ability_can_fire = false;
		}

		if(match_array_values(current_ability['proc'], 'basic') == true && battle_info['combat_units'][unit_id]['effects']['stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] > 0)
		{
			ability_can_fire = false;
		}

		if(current_ability['min_cards_in_deck'] != undefined && count_deck_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) < current_ability['min_cards_in_deck'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_enemy_cards_in_deck'] != undefined)
		{
			if(battle_info['combat_units'][unit_id]['side'] == 1 && count_deck_cards(battle_info['deck_2']) < current_ability['min_enemy_cards_in_deck'])
			{
				ability_can_fire = false;
			}
			if(battle_info['combat_units'][unit_id]['side'] == 2 && count_deck_cards(battle_info['deck_1']) < current_ability['min_enemy_cards_in_deck'])
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['max_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) > current_ability['max_hand_cards'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_ally_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) < current_ability['min_ally_hand_cards'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_ally_creature_cards_in_grave'] != undefined && count_grave_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']], 'creature') < current_ability['min_ally_creature_cards_in_grave'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_enemy_hand_cards'] != undefined)
		{
			if(battle_info['combat_units'][unit_id]['side'] == 1 && count_hand_cards(battle_info['deck_2']) < calculate_effect({amount:current_ability['min_enemy_hand_cards']},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
			if(battle_info['combat_units'][unit_id]['side'] == 2 && count_hand_cards(battle_info['deck_1']) < calculate_effect({amount:current_ability['min_enemy_hand_cards']},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['max_enemy_hand_cards'] != undefined)
		{
			if(battle_info['combat_units'][unit_id]['side'] == 1 && count_hand_cards(battle_info['deck_2']) >= calculate_effect({amount:current_ability['max_enemy_hand_cards'],},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
			if(battle_info['combat_units'][unit_id]['side'] == 2 && count_hand_cards(battle_info['deck_1']) >= calculate_effect({amount:current_ability['max_enemy_hand_cards']},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
		}
		

		//console.log(current_proc);
		if(current_ability['specific_proc'] != undefined && (current_proc == undefined || current_proc != current_ability['specific_proc']))
		{
			//console.log('wrong proc: ' + current_proc);
			ability_can_fire = false;
		}
		
		
		if(current_ability['ability_effects'] != undefined && ability_can_fire == true)
		{
			$.each(current_ability['ability_effects'], function(useless_key, ability_effect){
				any_effect_fired = process_ability(unit_id, ability_effect, level, origin_id, any_effect_fired, current_proc);
			});
		}
		else
		{
			if(ability_can_fire == true)
			{
				if(current_ability['remove_skill_before_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
				{
					set_skill(unit_id, unit_id, 0, current_ability['remove_skill_before_use'], false);
					check_visible_skills(unit_id);
				}
				var current_unit = battle_info.combat_units[unit_id];
				
				var current_unit_id = current_unit['unit_id'] + 0;

				var proc_amount = 1;
				if(current_ability['proc_amount'] != undefined)
				{
					proc_amount = calculate_effect({amount:current_ability['proc_amount']}, unit_id, unit_id, level);
				}
				if(current_ability['min_proc_amount'] != undefined && proc_amount < current_ability['min_proc_amount'])
				{
					proc_amount = calculate_effect({amount:current_ability['min_proc_amount']}, unit_id, unit_id, level);
				}
				if(current_ability['proc_amount_adjustment'] != undefined)
				{
					proc_amount += current_ability['proc_amount_adjustment'];
				}

				if(current_ability['need_to_be_alive'] != undefined && current_ability['need_to_be_alive'] == true && battle_info.combat_units[unit_id]['current_health'] == 0)
				{
					proc_amount = 0;
				}

				/*if(current_ability['proc_chance'] != undefined && current_ability['proc_chance'] < Math.random() * 100)
				{
					proc_amount = 0;
				}*/
				
				var effect_start_timeout = total_timeout + 0;
				var highest_effect_end = total_timeout + 0;
				var temp_power_used = 0;
				var effect_fired = false;
				if(current_ability['uses_power'] != undefined && current_ability['uses_power'] == true && unit_id != undefined && battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['temp_power'] != undefined && battle_info.combat_units[unit_id]['temp_power'] > 0)
				{
					if(battle_info.combat_units[unit_id]['temp_power'] > temp_power_used)
					{
						temp_power_used = battle_info.combat_units[unit_id]['temp_power'] + 0;
					}
				}

				for (var i = 1; i <= proc_amount; i++) {

					var ability_can_fire = check_ability_can_fire(unit_id, current_ability, level, origin_id);

					if(ability_can_fire == true && (current_ability['proc_chance'] == undefined || calculate_effect({amount:current_ability['proc_chance'],amount_factor:current_ability['proc_factor']},unit_id, origin_id, level) >= Math.random() * 100))
					{
						if(battle_info.combat_units[unit_id] != undefined && (battle_info.combat_units[unit_id]['current_health'] > 0 || battle_info.combat_units[unit_id]['health'] === false ||(current_ability['proc_while_dead'] != undefined && current_ability['proc_while_dead'] == true))){
							var all_targets = {};
							$.each(current_ability['targets'], function(useless_key, target_peramaters){
								if((count_object(all_targets) == 0 || (target_peramaters['add_targets'] != undefined && target_peramaters['add_targets'] == true)) && combat_alive == true)
								{
									all_targets = find_targets(unit_id, target_peramaters, origin_id, level, current_ability, all_targets);
								}
							});

							if(count_object(all_targets) > 0 && combat_alive == true)
							{
								if(current_ability['animation'] != undefined && (current_ability['do_not_pause_between'] == undefined || i == 1))
								{
									//total_timeout += 250 * battle_speed;
									if(typeof(current_ability['animation']) == 'string')
									{
										timeout_key ++;
										all_timeouts[timeout_key] = setTimeout(function(){
											$('.unit_id_' + current_unit_id).addClass(current_ability['animation']);
										},total_timeout);
										timeout_key ++;
										all_timeouts[timeout_key] = setTimeout(function(){
											$('.unit_id_' + current_unit_id).removeClass(current_ability['animation']);
										},total_timeout + (1000 * battle_speed));
									}
									else
									{
										$.each(current_ability['animation'], function(animation_id, animation_name){
											timeout_key ++;
											all_timeouts[timeout_key] = setTimeout(function(){
												$('.unit_id_' + current_unit_id).addClass(animation_name);
											},total_timeout);
											timeout_key ++;
											all_timeouts[timeout_key] = setTimeout(function(){
												$('.unit_id_' + current_unit_id).removeClass(animation_name);
											},total_timeout + (1000 * battle_speed));
										});
									}
									total_timeout += 500 * battle_speed;
									
								}

								
								var latest_effect_hit = true;
								$.each(all_targets, function(target_id, target_unit_id){
									ability_can_fire = check_ability_can_fire(unit_id, current_ability, level, origin_id);
									if(battle_info.combat_units[unit_id] != undefined && ability_can_fire == true){
										$.each(current_ability['effects'], function(useless_key, effect){
											if(effect['check_target_alive'] != undefined && (battle_info.combat_units[target_unit_id] == undefined || battle_info.combat_units[target_unit_id]['current_health'] < 1))
											{
												latest_effect_hit = false;
											}
											if(latest_effect_hit == true && (effect['proc_chance'] == undefined || effect['proc_chance'] > Math.random() * 100))
											{
												if(current_ability['do_not_pause_between'] != undefined && current_ability['do_not_pause_between'] == true)
												{
													total_timeout = effect_start_timeout + 0;
												}
												effect_fired = process_effect(target_unit_id, unit_id, effect, level);
												if(current_ability['do_not_pause_between'] != undefined && current_ability['do_not_pause_between'] == true && highest_effect_end < total_timeout)
												{
													highest_effect_end = total_timeout + 0;
												}
												if(effect_fired == false)
												{
													latest_effect_hit = false;
												}
												if(effect_fired == true && any_effect_fired == false)
												{
													any_effect_fired = true;
												}
											}
											if(check_death == undefined || check_death == true)
											{
												check_unit_alive(target_unit_id, unit_id, undefined, effect['subtypes']);
											}
										});
										
										
									}
								});

								if(total_timeout < highest_effect_end)
								{
									total_timeout = highest_effect_end;
								}

								if(any_effect_fired == true && current_ability['reduce_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
								{
									grant_skill(unit_id, unit_id, -1, current_ability['reduce_skill_after_use'], false);
									check_visible_skills(unit_id);
								}
								if(any_effect_fired == true && current_ability['remove_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
								{
									set_skill(unit_id, unit_id, 0, current_ability['remove_skill_after_use'], false);
									check_visible_skills(unit_id);
								}

								/*if(battle_info['combat_units'][unit_id] != undefined && current_ability['animation'] != undefined && (current_ability['do_not_pause_between'] == undefined || i == proc_amount))
								{
									if(typeof(current_ability['animation']) == 'string')
									{
										timeout_key ++;
										all_timeouts[timeout_key] = setTimeout(function(){
											$('.unit_id_' + current_unit_id).removeClass(current_ability['animation']);
										},total_timeout + 10);
									}
									else
									{
										$.each(current_ability['animation'], function(animation_id, animation_name){
											timeout_key ++;
											all_timeouts[timeout_key] = setTimeout(function(){
												$('.unit_id_' + current_unit_id).removeClass(animation_name);
											},total_timeout + 10);
										});
									}
								}*/
							}
						};
					};

					if(any_effect_fired == true && current_ability['on_each_success'] != undefined && battle_info['combat_units'][unit_id] != undefined)
				    {
				    	any_effect_fired = process_ability(unit_id, current_ability['on_each_success'], level, origin_id, any_effect_fired);
				    }

				};
			};
		};

		if(any_effect_fired == true && battle_info.combat_units[unit_id] != undefined && temp_power_used > 0)
		{
			battle_info.combat_units[unit_id]['temp_power'] -= temp_power_used;
			temp_power_used = 0;
			check_unit_power(unit_id);
		}

		if(current_ability['remove_skill'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
		{
			set_skill(unit_id, unit_id, 0, current_ability['remove_skill'], false);
			check_visible_skills(unit_id);
			update_passive_effects(unit_id);
		}

		if(any_effect_fired == true && current_ability['animation'] != undefined)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + current_unit_id).removeClass(current_ability['animation']);
			},total_timeout + 10);
		}

		if(any_effect_fired == true && current_ability['adjust_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
		{
			set_skill(unit_id, unit_id, (level + current_ability['adjust_skill_after_use']['amount']), current_ability['adjust_skill_after_use']['skill_id']);
			check_visible_skills(unit_id);
		}

		if(battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] == 'artifact' && (count_object(battle_info['combat_units'][unit_id]['abilities']) < 1 || (count_object(battle_info['combat_units'][unit_id]['abilities']) == 1 && (battle_info['combat_units'][unit_id]['abilities']['delay'] != undefined || battle_info['combat_units'][unit_id]['abilities']['eternal'] != undefined || battle_info['combat_units'][unit_id]['abilities']['restless'] != undefined)))){
	        check_unit_alive(unit_id, undefined, true);
	    };

	    if(any_effect_fired == false && current_ability['on_failure'] != undefined && battle_info['combat_units'][unit_id] != undefined)
	    {
	    	any_effect_fired = process_ability(unit_id, current_ability['on_failure'], level, origin_id, any_effect_fired);
	    }

	    if(any_effect_fired == true && current_ability['on_success'] != undefined && battle_info['combat_units'][unit_id] != undefined)
	    {
	    	any_effect_fired = process_ability(unit_id, current_ability['on_success'], level, origin_id, any_effect_fired);
	    }

	    if(any_effect_fired == true && battle_info['combat_units'][unit_id] != undefined)
	    {
	    	battle_info['combat_units'][unit_id]['used_ability'] = true;
	    }
	    
	}
	return any_effect_fired;
}

function check_adjacent(unit_id, adjacent_type){
	var current_unit = battle_info['combat_units'][unit_id];
	var unit_side = current_unit['side'];
	var has_adjacent = false;
	$.each(battle_info['combat_units'], function(combat_unit_id, combat_unit){
		if((combat_unit['slot'] == current_unit['slot'] + 1 || combat_unit['slot'] == current_unit['slot'] - 1) && combat_unit['side'] == unit_side && (adjacent_type == 'any' || adjacent_type == combat_unit['type']))
		{
			has_adjacent = true;
		}
	});
	return has_adjacent;
}

function check_ability_can_fire(unit_id, current_ability, level, origin_id){
	var ability_can_fire = true;
	if(battle_info['combat_units'][unit_id] != undefined)
	{
		// unit stunned
		
		if(current_ability['own_max_hp'] != undefined && battle_info['combat_units'][unit_id]['current_health'] > current_ability['own_max_hp'])
		{
			ability_can_fire = false;
		}
		if(current_ability['cannot_proc_while_stunned'] != undefined && current_ability['cannot_proc_while_stunned'] == true && battle_info['combat_units'][unit_id]['effects']['stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] > 0)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_used_ability'] != undefined && current_ability['has_used_ability'] == true && battle_info['combat_units'][unit_id]['used_ability'] != undefined && battle_info['combat_units'][unit_id]['used_ability'] == false)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_used_ability'] != undefined && current_ability['has_used_ability'] == false && battle_info['combat_units'][unit_id]['used_ability'] != undefined && battle_info['combat_units'][unit_id]['used_ability'] == true)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_no_adjacent'] != undefined && check_adjacent(unit_id, current_ability['has_no_adjacent']) == true)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_adjacent'] != undefined && check_adjacent(unit_id, current_ability['has_adjacent']) == false)
		{
			ability_can_fire = false;
		}
		if(battle_info.combat_units[unit_id]['current_health'] == 0 && battle_info.combat_units[unit_id]['health'] !== false && (current_ability['proc_while_dead'] == undefined || current_ability['proc_while_dead'] == false))
		{
			ability_can_fire = false;
		}
		if(current_ability['max_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) > current_ability['max_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_enemy_units'] != undefined && count_enemy_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_enemy_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_cards_in_deck'] != undefined && count_deck_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) < current_ability['min_cards_in_deck'])
		{
			ability_can_fire = false;
		}
		if(current_ability['max_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) > current_ability['max_hand_cards'])
		{
			ability_can_fire = false;
		}
	}	
	else
	{
		ability_can_fire = false;
	}

	return ability_can_fire;
};

function count_units(){
	var unit_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0)
		{
			unit_count++;
		}
	});
	return unit_count;
}

function count_enemy_units(side, type){
	var enemy_unit_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] != side && unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0 && (type == undefined || type == 'any' || type == unit_info['type']))
		{
			enemy_unit_count++;
		}
	});
	return enemy_unit_count;
}

function count_unopposed_enemy_units(side){
	var enemy_unit_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] != side && unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0)
		{
			var no_opposing = true;
			$.each(battle_info['combat_units'], function(unit_id_2, unit_info_2){
				if(unit_info['slot'] == unit_info_2['slot'] && unit_info_2['side'] == side)
				{
					no_opposing = false;
				}
			});
			if(no_opposing == true)
			{
				enemy_unit_count++;
			}
		}
	});
	return enemy_unit_count;
}

function count_double_free_slots(){
	var double_free_slots = 0;
	for (var slot = 1; slot <= 5; slot++) {
		var this_slot_free = true;
		$.each(battle_info['combat_units'], function(unit_id, unit_info){
			if(unit_info['slot'] == slot)
			{
				this_slot_free = false;
			}
		});
		if(this_slot_free == true)
		{
			double_free_slots += 1;
		}
	}
	return double_free_slots;
}

function count_ally_units(side, type){
	var ally_unit_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] == side && unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0 && (type == undefined || type == 'any' || type == unit_info['type']))
		{
			ally_unit_count++;
		}
	});
	return ally_unit_count;
}

function count_ally_artifacts(side){
	var enemy_unit_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] == side && unit_info['slot'] < 0 && unit_info['type'] == 'artifact')
		{
			enemy_unit_count++;
		}
	});
	return enemy_unit_count;
}

function count_enemy_artifacts(side){
	var enemy_unit_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] != side && unit_info['slot'] < 0 && unit_info['type'] == 'artifact')
		{
			enemy_unit_count++;
		}
	});
	return enemy_unit_count;
}


function process_effect(target_id, origin_id, effect, level){
	var calculated_amount = calculate_effect(effect, target_id, origin_id, level);
	var prev_any_effect_fired = any_effect_fired;
	var any_effect_fired = true;
	var effect_avoided = false;
	var target_immune = false;

	if(battle_info.combat_units[target_id] != undefined)
	{
		if(effect['set_latest_slot'] != undefined && effect['set_latest_slot'] == true)
		{
			latest_slot = battle_info.combat_units[target_id]['slot'];
		}

		
		$.each(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
			var immunities = all_abilities[ability_id]['grants_immunities'];

			if(immunities != undefined && match_array_values(immunities, effect['subtypes']) == true && (all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || (battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0)))
			{
				target_immune = true;
			}
			if(battle_info.combat_units[origin_id] != undefined && all_abilities[ability_id]['negated_by_ability'] != undefined)
			{	
				$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, useless_data){
					if(ability_key == all_abilities[ability_id]['negated_by_ability'])
					{
						target_immune = false;
					}
				});
			}
		});

	}

	if(battle_info.combat_units[origin_id] != undefined && (battle_info.combat_units[origin_id]['used_effect'] == undefined || battle_info.combat_units[origin_id]['used_effect'] == false))
	{
		check_ability_procs(battle_info.combat_units[origin_id]['side'], battle_info.combat_units[origin_id]['type'] + '_about_to_use_ability', origin_id, effect['subtypes']);
	}
	if(battle_info.combat_units[origin_id] != undefined)
	{
		battle_info.combat_units[origin_id]['used_effect'] = true;
	}

	if(battle_info.combat_units[origin_id] != undefined)
	{
		if(battle_info.combat_units[target_id] != undefined)
		{
			$.each(battle_info.combat_units[target_id]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['targeted_by']) == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect['subtypes']) == true))
				{
					process_ability(target_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'targeted_by');
				}
				if(match_array_values(all_abilities[ability_key]['proc'], ['targeted_by_' + battle_info.combat_units[origin_id]['type']]) == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect['subtypes']) == true))
				{
					process_ability(target_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'targeted_by');
				}
			});
			if(battle_info.combat_units[target_id]['slot'] == 0)
			{
				check_ability_procs(battle_info.combat_units[target_id]['side'], 'hero_targeted_by', origin_id, effect['subtypes']);
			}
			if(battle_info.combat_units[target_id] != undefined)
			{
				check_ability_procs(battle_info.combat_units[target_id]['side'], 'ally_targeted_by', target_id, effect['subtypes']);
			}
		}

		if(battle_info.combat_units[origin_id] != undefined)
		{
			var origin_side = battle_info.combat_units[origin_id]['side'] + 0;
			if(battle_info.combat_units[target_id] != undefined)
			{

				
				$.each(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
					var has_avoid = all_abilities[ability_id]['proc'];
					if(match_array_values(has_avoid, 'avoid_effect'))
					{
						var avoid_subtypes = all_abilities[ability_id]['subtypes'];
						var can_avoid = match_array_values(avoid_subtypes, effect['subtypes']);
						if(can_avoid == true && all_abilities[ability_id]['subtypes_while_origin_has_ability'] != undefined && battle_info.combat_units[origin_id] != undefined)
						{
							if(battle_info.combat_units[origin_id] == undefined)
							{
								can_avoid = false;
							}
							else
							{
								$.each(all_abilities[ability_id]['subtypes_while_origin_has_ability'], function(subtype_id, origin_has_ability){
									if(match_array_values(subtype_id, effect['subtypes']))
									{
										var origin_has_current_ability = false;
										$.each(battle_info.combat_units[origin_id]['abilities'], function(origin_ability_key, origin_ability_level){
											if(origin_ability_level > 0 && match_array_values(origin_ability_key, origin_has_ability))
											{
												origin_has_current_ability = true;
											}
										});
										if(origin_has_current_ability == false)
										{
											can_avoid = false;
										}
									}
								});
							}
						}
						if(can_avoid == true)
						{
							var avoid_chance = calculate_effect({amount:all_abilities[ability_id]['effect']}, target_id, origin_id, ability_level);
							var avoid_rolled = (Math.random() * 100);
							var effect_negated = false;
							var prev_effect_avoided = false;
							if(effect_avoided == true){prev_effect_avoided = true;}

							if(all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0)
			        		{
			        			if(effect_avoided == false && avoid_rolled <= avoid_chance)
			        			{
			        			    if(all_abilities[ability_id]['negated_by_ability'] != undefined)
			            			{	
			            				$.each(all_abilities[ability_id]['negated_by_ability'], function(useless_key, negated_ability_key){
			            					$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, useless_data){
			            						if(ability_key == negated_ability_key)
			            						{
			            							effect_negated = true;
			            						}
			            					});
			            				});
			            			}
			            			if(effect_negated == false)
			            			{
			            				effect_avoided = true;
			            				latest_result = 0;
			            				process_ability(target_id, all_abilities[ability_id], ability_level, origin_id, undefined, 'avoid_effect');
			            			}
			        			}
			        		}
			        	}
					}
					
				});

			}

		}
		
	
		if(battle_info.combat_units[origin_id] != undefined && effect_avoided == false && target_immune == false && combat_alive == true && (effect['chance'] == undefined || effect['chance'] >= (Math.random() * 100)))
		{
			var effect_count = 1;
			if(effect['effect_count'] != undefined)
			{
				effect_count = calculate_effect({amount:effect['effect_count']}, target_id, origin_id, level);
			}
			//any_effect_fired = true;

			for (var i = effect_count - 1; i >= 0; i--) {

				if(effect['pause_before'] != undefined)
				{
					total_timeout += effect['pause_before'] * battle_speed;
				}

				if(effect['self_projectile'] != undefined)
				{
					total_timeout -= 500 * battle_speed;
					if(total_timeout < 0){total_timeout = 0;}
					create_projectile(origin_id, origin_id, effect['self_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
					total_timeout += 1000 * battle_speed;
				}
				if(effect['projectile'] != undefined)
				{
					total_timeout -= 500 * battle_speed;
					if(total_timeout < 0){total_timeout = 0;}
					create_projectile(origin_id, target_id, effect['projectile'], false, effect['projectile_target'], effect['side']);
					total_timeout += 1000 * battle_speed;
				}

				if(effect['target_projectile'] != undefined)
				{
					total_timeout -= 500 * battle_speed;
					if(total_timeout < 0){total_timeout = 0;}
					create_projectile(target_id, target_id, effect['target_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
					total_timeout += 1000 * battle_speed;
				}

				if(effect['pause_before_effect'] != undefined)
				{
					total_timeout += effect['pause_before_effect'] * battle_speed;
				}
				
				if(battle_info['combat_units'][target_id] != undefined)
				{
					if((battle_info['combat_units'][origin_id] != undefined && battle_info['combat_units'][origin_id]['side'] == 2) || origin_side == 2)
					{
						$.each(effect['subtypes'], function(useless_key, effect_subtype){
							var possible_quest_string = battle_info['combat_units'][target_id]['card_type'] + '_affected_by_' + effect_subtype;
							if(all_achievement_goals[possible_quest_string] != undefined){
								check_quests(possible_quest_string);
							};
							if(battle_info['combat_units'][target_id] != undefined)
							{
								$.each(battle_info['combat_units'][target_id]['subtypes'], function(subtype_key, quest_subtype){
									var possible_quest_string = quest_subtype + '_affected_by_' + effect_subtype;
									if(all_achievement_goals[possible_quest_string] != undefined){
										check_quests(possible_quest_string);
									};
								});
							}
						});
					}
					check_single_unit_proc(target_id, undefined, 'pre_affected_by_' + effect['type'], origin_id, effect['subtypes']);
					check_single_unit_proc(target_id, undefined, 'pre_affected_by_any', origin_id, effect['subtypes']);
				}

				if(battle_info.combat_units[target_id] != undefined && battle_info.combat_units[origin_id] != undefined)
				{
					var damage_dealt = false;

					if(effect['type'] == 'increase_loot_charges' && calculated_amount > 0)
					{
						if(gamedata['loot_charges'] == undefined)
						{
							gamedata['loot_charges'] = 0;
						}
						gamedata['loot_charges'] += calculated_amount;
					}

					if(effect['type'] == 'damage' && calculated_amount > 0)
					{
						damage_dealt = receive_damage(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'drain')
					{
						damage_dealt = receive_damage(target_id, origin_id, calculated_amount, effect['subtypes']);
						if(battle_info.combat_units[target_id]['type'] == 'creature' && battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['current_health'] < battle_info.combat_units[origin_id]['health'])
						{
							receive_healing(origin_id, origin_id, damage_dealt, []);
						}
					}

					if(effect['type'] == 'healing')
					{
						receive_healing(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_hp')
					{
						set_hp(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_max_hp')
					{
						set_max_hp(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_power')
					{
						reduce_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'increase_power')
					{
						increase_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'enable_to_act')
					{
						enable_to_act(target_id, origin_id, calculated_amount, effect['subtypes']);
					}
					
					if(effect['type'] == 'go_again')
					{
						go_again(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_power')
					{
						set_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'increase_health')
					{
						increase_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'grant_temp_power')
					{
						grant_temp_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'grant_temp_health')
					{
						grant_temp_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_health')
					{
						latest_result = reduce_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_current_health')
					{
						latest_result = reduce_current_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_health')
					{
						latest_result = set_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_max_health')
					{
						reduce_max_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_armor')
					{
						reduce_armor(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'increase_armor')
					{
						increase_armor(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_armor')
					{
						latest_result = set_armor(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'grant_skill')
					{
						grant_skill(target_id, origin_id, calculated_amount, effect['skill_id'], undefined, effect['skill_at_front']);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'grant_temp_skill')
					{
						grant_temp_skill(target_id, origin_id, calculated_amount, effect['skill_id'], undefined, effect['skill_at_front']);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'set_skill')
					{
						set_skill(target_id, origin_id, calculated_amount, effect['skill_id']);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'change_side')
					{
						change_side(target_id, origin_id);
					}

					if(effect['type'] == 'ability')
					{
						process_ability(target_id, effect, level, origin_id);
					}

					if(effect['type'] == 'random_ability')
					{
						var chosen_ability = effect['ability_options'][get_random_key_from_object(effect['ability_options'])];
						//console.log(chosen_ability);
						if(all_abilities[chosen_ability] != undefined)
						{
							any_effect_fired = process_ability(target_id, all_abilities[chosen_ability], calculated_amount, origin_id);
						}
					}

					if(effect['type'] == 'move')
					{
						any_effect_fired = move_unit(target_id, effect, origin_id);
					}

					if(effect['type'] == 'set_unit_type')
					{
						set_unit_type(target_id, effect, origin_id);
					}

					if(effect['type'] == 'turn_into')
					{
						turn_into(target_id, effect, origin_id, level);
					}

					if(effect['type'] == 'turn_into_original')
					{
						any_effect_fired = turn_into_original(target_id, origin_id);
					}

					if(effect['type'] == 'apply_burn')
					{
						apply_burn(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'reduce_burn')
					{
						reduce_burn(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_poison')
					{
						apply_poison(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_stun')
					{
						apply_stun(target_id, calculated_amount, origin_id, effect['allways_apply']);
						check_visible_skills(target_id);
					}
					
					if(effect['type'] == 'apply_curse')
					{
						apply_curse(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_doom')
					{
						apply_doom(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_energy')
					{
						apply_energy(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_blessed')
					{
						apply_blessed(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'set_effect_amount')
					{
						set_effect_amount(target_id, calculated_amount, origin_id, effect);
					}


					if(effect['type'] == 'destroy')
					{
						destroy_unit(target_id, origin_id);
					}

					if(effect['type'] == 'disappear')
					{
						disappear_unit(target_id, origin_id);
					}
					

					if(effect['type'] == 'move_to_deck')
					{
						move_to_deck(target_id, effect, origin_id);
					}

					if(effect['type'] == 'reduce_negative_effects')
					{
						reduce_negative_effects(target_id, calculated_amount, origin_id);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'absorb')
					{
						absorb(target_id, origin_id, effect['absorb_specs']);
					}
				}

				if(effect['type'] == 'set_status')
				{
					any_effect_fired = set_status(target_id, effect, origin_id);
				}

				if(effect['type'] == 'remove_card')
				{
					remove_card_from_combat(target_id, effect, origin_id);
				}

				if(effect['type'] == 'reduce_ready_time')
				{
					reduce_ready_time(target_id, effect, calculated_amount, origin_id);
				}

				if(effect['type'] == 'increase_ready_time')
				{
					increase_ready_time(target_id, effect, calculated_amount, origin_id);
				}

				if(effect['type'] == 'play_card')
				{
					var temp_current_unit = battle_info.combat_units[origin_id];
					var temp_target_side = temp_current_unit['side'];
					if((effect['side'] == 'ally' && temp_current_unit['side'] == 2) || (effect['side'] == 'enemy' && temp_current_unit['side'] == 1))
					{
						temp_target_side = 2;
					}
					if((effect['side'] == 'ally' && temp_current_unit['side'] == 1) || (effect['side'] == 'enemy' && temp_current_unit['side'] == 2))
					{
						temp_target_side = 1;
					}
					play_card(temp_target_side, target_id, true, origin_id);
					any_effect_fired = true;
				}

				if(effect['type'] == 'add_card_to_deck')
				{
					for (var i = calculated_amount - 1; i >= 0; i--) {
						add_card_to_combat_deck(battle_info.combat_units[target_id]['side'], effect['card_id'], effect['card_status']);
					};	
				}
				if(effect['type'] == 'draw_card')
				{
					for (var i = calculated_amount - 1; i >= 0; i--) {
						draw_card(battle_info.combat_units[target_id]['side'], undefined, effect['card_type']);
					};	
				}
				if(effect['type'] == 'summon_unit')
				{
					var summoned_any = false;
					var forced_summon = true;
					if(effect['forced_slot'] != undefined)
					{
						forced_summon = effect['forced_slot'];
					}
					for (var i = calculated_amount - 1; i >= 0; i--) {
						if(effect['card_id'] != 'random' && effect['card_id'] != 'self' && effect['card_id'] != 'origin_card')
						{
							var summoned_this = play_unit_card(battle_info.combat_units[target_id]['side'], effect['card_id'], undefined, forced_summon, origin_id);
						}
						else
						{
						    if(effect['card_id'] == 'random')
						    {
						    	
		    					var card_type_to_summon = 'any';
		    					if(effect['card_type'] != undefined){card_type_to_summon = calculate_effect({amount:effect['card_type']}, target_id, origin_id, level);}
		    					var card_time_to_summon = 100;
		    					if(effect['card_time'] != undefined){card_time_to_summon = calculate_effect({amount:effect['card_time']}, target_id, origin_id, level);}
		    					var card_time_min_to_summon = undefined;
		    					if(effect['card_time_min'] != undefined){card_time_min_to_summon = calculate_effect({amount:effect['card_time_min']}, target_id, origin_id, level);}
		    					var card_color_to_summon = undefined;
		    					if(effect['card_color'] != undefined){card_color_to_summon = calculate_effect({amount:effect['card_color']}, target_id, origin_id, level);}
		    					var card_subtype_to_summon = undefined;
		    					if(effect['card_subtype'] != undefined){card_subtype_to_summon = calculate_effect({amount:effect['card_subtype']}, target_id, origin_id, level);}
		    					var card_to_summon = get_random_card_based_on_time(card_type_to_summon, card_time_to_summon, card_color_to_summon, card_color_to_summon, card_subtype_to_summon, card_time_min_to_summon, undefined, effect['not_subtypes']);

		    					var summoned_this = play_unit_card(battle_info.combat_units[target_id]['side'], card_to_summon, undefined, forced_summon, origin_id);
		    					
						    }
						    if(effect['card_id'] == 'self')
						    {
						        var summoned_this = clone_unit(battle_info.combat_units[target_id]['side'], target_id, effect['clone_stunned'], origin_id, effect);
						    }
						    if(effect['card_id'] == 'origin_card')
						    {
						    	//console.log(battle_info.combat_units[target_id]['card_type']);
						        var summoned_this = play_unit_card(battle_info.combat_units[target_id]['side'], battle_info.combat_units[target_id]['card_type'], undefined, forced_summon, origin_id);
						    }
						}
						if(summoned_this == true){summoned_any = true;}
					};	
					if(summoned_any == false && prev_any_effect_fired == false)
					{
						any_effect_fired = false;
					}
				}	
				if(effect['type'] == 'play_action_card')
				{
					var summoned_any = false;
					for (var i = calculated_amount - 1; i >= 0; i--) {
						if(effect['card_id'] != 'random')
						{
							var summoned_this = play_action_card(battle_info.combat_units[target_id]['side'], effect['card_id'], undefined, true);
						}
						else
						{
							var card_type_to_summon = 'any';
							if(effect['card_type'] != undefined){card_type_to_summon = calculate_effect({amount:effect['card_type']}, target_id, origin_id, level);}
	    					var card_time_to_summon = 100;
	    					if(effect['card_time'] != undefined){card_time_to_summon = calculate_effect({amount:effect['card_time']}, target_id, origin_id, level);}
	    					var card_color_to_summon = undefined;
	    					if(effect['card_color'] != undefined){card_color_to_summon = calculate_effect({amount:effect['card_color']}, target_id, origin_id, level);}
	    					var card_to_summon = get_random_card_based_on_time(card_type_to_summon, card_time_to_summon, card_color_to_summon, card_color_to_summon);
							var summoned_this = play_action_card(battle_info.combat_units[target_id]['side'], card_to_summon, undefined, true);
						}
						if(summoned_this == true){summoned_any = true;}
					};	
					if(summoned_any == false && prev_any_effect_fired == false)
					{
						any_effect_fired = false;
					}
				}	

				if(effect['type'] == 'play_artifact_card')
				{
					var summoned_any = false;
					for (var i = calculated_amount - 1; i >= 0; i--) {
						if(effect['card_id'] != 'random')
						{
							var summoned_this = play_artifact_card(battle_info.combat_units[target_id]['side'], effect['card_id'], undefined, true);
						}
						else
						{
							var card_type_to_summon = 'any';
							if(effect['card_type'] != undefined){card_type_to_summon = calculate_effect({amount:effect['card_type']}, target_id, origin_id, level);}
	    					var card_time_to_summon = 100;
	    					if(effect['card_time'] != undefined){card_time_to_summon = calculate_effect({amount:effect['card_time']}, target_id, origin_id, level);}
	    					var card_color_to_summon = undefined;
	    					if(effect['card_color'] != undefined){card_color_to_summon = calculate_effect({amount:effect['card_color']}, target_id, origin_id, level);}
	    					var card_to_summon = get_random_card_based_on_time(card_type_to_summon, card_time_to_summon, card_color_to_summon, card_color_to_summon);
							var summoned_this = play_artifact_card(battle_info.combat_units[target_id]['side'], card_to_summon, undefined, true);
						}
						if(summoned_this == true){summoned_any = true;}
					};	
					if(summoned_any == false && prev_any_effect_fired == false)
					{
						any_effect_fired = false;
					}
				}	

				if(effect['increase_timeout'] != undefined)
				{
					total_timeout += effect['increase_timeout'] * battle_speed;
				}

				if(battle_info['combat_units'][target_id] != undefined)
				{
					check_single_unit_proc(target_id, undefined, 'affected_by_' + effect['type'], origin_id, effect['subtypes']);
					check_single_unit_proc(target_id, undefined, 'affected_by_any', origin_id, effect['subtypes']);
				}
				if(battle_info['combat_units'][origin_id] != undefined)
				{
					check_single_unit_proc(origin_id, undefined, 'hit_with_ability', target_id, effect['subtypes']);
				}
				
				if(effect['projectile'] != undefined)
				{
					//total_timeout -= 500 * battle_speed;
					total_timeout += 1000 * battle_speed;
				}
			}
		}
		else
		{
			/*if(effect['projectile'] != undefined && effect['on_failure'] == undefined)
			{
				total_timeout -= 500 * battle_speed;
				create_projectile(origin_id, target_id, effect['projectile'], true, effect['projectile_target'], effect['side']);
				total_timeout += 1000 * battle_speed;
			}*/
			if(effect['self_projectile'] != undefined)
			{
				total_timeout -= 1000 * battle_speed;
				create_projectile(origin_id, origin_id, effect['self_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
				total_timeout += 500 * battle_speed;
			}
			if(effect['projectile'] != undefined)
			{
				total_timeout -= 1000 * battle_speed;
				create_projectile(origin_id, target_id, effect['projectile'], false, effect['projectile_target'], effect['side']);
				total_timeout += 500 * battle_speed;
			}

			if(effect['target_projectile'] != undefined)
			{
				total_timeout -= 1000 * battle_speed;
				create_projectile(target_id, target_id, effect['target_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
				total_timeout += 500 * battle_speed;
			}
			if(effect['on_failure'] != undefined)
			{
				process_ability(origin_id, effect['on_failure'], level, undefined);
			}
		}
		if(effect_avoided == true)
		{
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('dodge');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).addClass('dodge');
			},total_timeout + 50);
			
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('dodge');
			},total_timeout + 500);
			total_timeout += 500 * battle_speed;

			if(battle_info.combat_units[origin_id] != undefined)
			{
				if(effect['on_avoided'] != undefined)
				{
					process_ability(origin_id, effect['on_avoided'], ability_level, undefined, 'on_avoided');
				}
			}
			if(battle_info.combat_units[origin_id] != undefined)
			{
				$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
					if(match_array_values(all_abilities[ability_key]['proc'], 'been_avoided') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
					{
						process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'been_avoided');
					}
				});
			}
		}
		if(target_immune == true)
		{
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).addClass('combat_softfade');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('combat_softfade');
			},total_timeout + 500);
			//total_timeout += 500 * battle_speed;
		}
		
		if(any_effect_fired == true)
		{
			if(effect_avoided == false && effect['on_success'] != undefined && (damage_dealt === false || damage_dealt > 0))
			{
				process_ability(origin_id, effect['on_success'], level, target_id);
			}
			if((battle_info['combat_units'][origin_id] != undefined && battle_info['combat_units'][origin_id]['side'] == 2) || origin_side == 2)
			{
				$.each(effect['subtypes'], function(useless_key, effect_subtype){
					check_quests('ally_performed_' + effect_subtype);
					add_battle_stats('ally_performed_' + effect_subtype, calculated_amount);
				});
			}
			if(battle_info.combat_units[origin_id] != undefined)
			{
				$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
					$.each(effect['subtypes'], function(useless_key, effect_subtype){
						if(match_array_values(all_abilities[ability_key]['proc'], 'performed_' + effect_subtype) == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect_subtype) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], effect_subtype) == false))
						{
							process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'performed_' + effect_subtype);
						}
					});
					if(match_array_values(all_abilities[ability_key]['proc'], 'performed_ability') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect['subtypes']) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], effect['subtypes']) == false))
					{
						process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'performed_ability');
					}
				});
			}
		}
	}
	
	return any_effect_fired;
}

function reduce_negative_effects(target_id, calculated_amount, origin_id){	
	var current_unit = battle_info.combat_units[target_id];
	for(var counter = 1;counter <= calculated_amount;counter++){
		//console.log(counter + ' -> ' + calculated_amount);
		var total_negative_effects = 0;
		var removed_one = false;
		if(current_unit['effects']['burning'] != undefined && current_unit['effects']['burning'] > 0)
		{
			total_negative_effects += current_unit['effects']['burning'];
		}
		if(current_unit['effects']['poisoned'] != undefined && current_unit['effects']['poisoned'] > 0)
		{
			total_negative_effects += current_unit['effects']['poisoned'];
		}
		if(current_unit['effects']['cursed'] != undefined && current_unit['effects']['cursed'] > 0)
		{
			total_negative_effects += current_unit['effects']['cursed'];
		}
		if(current_unit['effects']['doom'] != undefined && current_unit['effects']['doom'] > 0)
		{
			total_negative_effects += current_unit['effects']['doom'];
		}
		var chosen_negative_effect = Math.ceil(Math.random() * total_negative_effects);
		if(current_unit['effects']['burning'] != undefined && removed_one == false && current_unit['effects']['burning'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['burning'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['burning'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		if(current_unit['effects']['poisoned'] != undefined && removed_one == false && current_unit['effects']['poisoned'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['poisoned'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['poisoned'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		if(current_unit['effects']['cursed'] != undefined && removed_one == false && current_unit['effects']['cursed'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['cursed'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['cursed'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		if(current_unit['effects']['doom'] != undefined && removed_one == false && current_unit['effects']['doom'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['doom'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['doom'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		update_passive_effects(target_id);
	}
	/*if(current_unit['effects']['stunned'] != undefined && current_unit['effects']['stunned'] > 0)
	{
		total_negative_effects += current_unit['effects']['stunned'];
	}*/

	
	/*if(current_unit['effects']['stunned'] != undefined && removed_one == false && current_unit['effects']['stunned'] > 0)
	{
		chosen_negative_effect -= current_unit['effects']['stunned'];
		if(chosen_negative_effect <= 0)
		{
			current_unit['effects']['stunned'] -= 1;
			removed_one = true;
			total_timeout += 200 * battle_speed;
		}
	}*/
		
	
	
	
}

function absorb(target_id, origin_id, absorb_specs){
	if(battle_info.combat_units[target_id] != undefined && battle_info.combat_units[origin_id] != undefined)
	{
		if(absorb_specs['absorb_abilities'] != undefined && absorb_specs['absorb_abilities'] == true)
		{
			var absorb_amount;
			if(absorb_specs['absorb_abilities_amount'] == 'all')
			{
				absorb_amount = count_object(battle_info.combat_units[target_id]['abilities']);
			}
			else
			{
				absorb_amount = absorb_specs['absorb_abilities_amount'] + 0;
			}

			$.each(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
				if(absorb_amount > 0 && (absorb_specs['absorb_negative_abilities'] == undefined || absorb_specs['absorb_negative_abilities'] == true || all_abilities[ability_id]['negative_ability'] == undefined))
				{
					if(battle_info.combat_units[origin_id]['abilities'][ability_id] == undefined)
					{
						battle_info.combat_units[origin_id]['abilities'][ability_id] = ability_level;
					}
					else
					{
						battle_info.combat_units[origin_id]['abilities'][ability_id] += ability_level;
					}
					delete battle_info.combat_units[target_id]['abilities'][ability_id];

					total_timeout += 500;
					var parsed_abilities = parse_abilities(target_id);
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
					},total_timeout);
					var parsed_abilities = parse_abilities(origin_id);
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + origin_id + ' .card_abilities').html(parsed_abilities);
					},total_timeout);
					check_visible_skills(target_id);
					check_visible_skills(origin_id);
				}
			});
		}
		if(absorb_specs['absorb_power'] != undefined && absorb_specs['absorb_power'] == true && battle_info.combat_units[target_id]['power'] > 0)
		{
			if(battle_info.combat_units[origin_id]['power'] === false)
			{
				battle_info.combat_units[origin_id]['power'] = battle_info.combat_units[target_id]['power'];
			}
			else
			{
				battle_info.combat_units[origin_id]['power'] += battle_info.combat_units[target_id]['power'];
			}
			battle_info.combat_units[target_id]['power'] = false;
			check_unit_power(target_id);
			check_unit_power(origin_id);
			total_timeout += 500;
		}
		if(absorb_specs['absorb_armor'] != undefined && absorb_specs['absorb_armor'] == true && battle_info.combat_units[target_id]['armor'] > 0)
		{
			if(battle_info.combat_units[origin_id]['armor'] === false)
			{
				battle_info.combat_units[origin_id]['armor'] = battle_info.combat_units[target_id]['armor'];
			}
			else
			{
				battle_info.combat_units[origin_id]['armor'] += battle_info.combat_units[target_id]['armor'];
			}
			battle_info.combat_units[target_id]['armor'] = false;
			check_unit_power(target_id);
			check_unit_power(origin_id);
			total_timeout += 500;
		}
		if(absorb_specs['absorb_health'] != undefined && absorb_specs['absorb_health'] == true && battle_info.combat_units[target_id]['current_health'] > 0)
		{
			if(battle_info.combat_units[origin_id]['current_health'] === false)
			{
				battle_info.combat_units[origin_id]['current_health'] = battle_info.combat_units[target_id]['current_health'];
				battle_info.combat_units[origin_id]['health'] = battle_info.combat_units[target_id]['health'];
			}
			else
			{
				battle_info.combat_units[origin_id]['current_health'] += battle_info.combat_units[target_id]['current_health'];
				battle_info.combat_units[origin_id]['health'] += battle_info.combat_units[target_id]['health'];
			}
			battle_info.combat_units[target_id]['current_health'] = false;
			check_unit_hp(target_id);
			check_unit_hp(origin_id);
			total_timeout += 500;
		}
		
	}
}

function apply_burn(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['burning'] == undefined)
		{
			current_unit['effects']['burning'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['burning'] += calculated_amount;
		}
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('burned');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_burned passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('burned');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function set_effect_amount(target_id, calculated_amount, origin_id, effect_info){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		$.each(effect_info['effect_names'], function(effect_name, effect_level){
			current_unit['effects'][effect_name] = effect_level;
			if(effect_level < 1){delete	current_unit['effects'][effect_name];}
		});
		if(effect_info['effect_name'] != undefined)
		{
			current_unit['effects'][effect_info['effect_name']] = calculated_amount;
		}
		update_passive_effects(target_id);
	}
};

function reduce_burn(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['burning'] != undefined)
		{
			if(calculated_amount > current_unit['effects']['burning'])
			{
				calculated_amount = current_unit['effects']['burning'];
			}
			current_unit['effects']['burning'] -= calculated_amount;
		}
		/*timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
		},total_timeout + 250);
		total_timeout += 250 * battle_speed;*/
		update_passive_effects(target_id);
	}
};

function apply_poison(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['poisoned'] == undefined)
		{
			current_unit['effects']['poisoned'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['poisoned'] += calculated_amount;
		}
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('poisoned');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_poisoned passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('poisoned');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_curse(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['cursed'] == undefined)
		{
			current_unit['effects']['cursed'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['cursed'] += calculated_amount;
		}
		//current_unit['effects']['blessed'] = 0;
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_cursed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_doom(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['doom'] == undefined)
		{
			current_unit['effects']['doom'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['doom'] += calculated_amount;
		}
		if(current_unit['effects']['doom'] > 10)
		{
			current_unit['effects']['doom'] = 10;
		}
		//current_unit['effects']['blessed'] = 0;
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_doomed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_energy(target_id, calculated_amount, origin_id){
	if(calculated_amount != 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['energy'] == undefined)
		{
			current_unit['effects']['energy'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['energy'] += calculated_amount;
		}
		if(current_unit['effects']['energy'] < 0)
		{
			current_unit['effects']['energy'] = 0;
		}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('blue_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('blue_glow');
		},total_timeout + 500);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_blessed(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['blessed'] == undefined)
		{
			current_unit['effects']['blessed'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['blessed'] += calculated_amount;
		}
		if(current_unit['effects']['blessed'] < 0)
		{
			current_unit['effects']['blessed'] = 0;
		}
		if(current_unit['effects']['blessed'] > 10)
		{
			current_unit['effects']['blessed'] = 10;
		}
		//current_unit['effects']['cursed'] = 0;
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('yellow_glow');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_blessed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('yellow_glow');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_stun(target_id, calculated_amount, origin_id, allways_apply){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if((current_unit['type'] != 'object' && current_unit['type'] != 'structure') || allways_apply != undefined || true)
		{
			if(current_unit['effects'] == undefined)
			{
				current_unit['effects'] = {};
			}
			if(current_unit['effects']['stunned'] == undefined)
			{
				current_unit['effects']['stunned'] = calculated_amount;
			}
			else
			{
			    if(current_unit['effects']['stunned'] < calculated_amount)
			    {
			    	current_unit['effects']['stunned'] = calculated_amount;
			    }
			}
			timeout_key ++;
			passive_effect_count++;
			var temp_passive_effect_count = passive_effect_count + 0;
			all_timeouts[timeout_key] = setTimeout(function(){
				//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('burned');
				$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_stunned passive_effect_' + temp_passive_effect_count + '"></div>');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('burned');
				$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
			},total_timeout + 750);
			total_timeout += 250 * battle_speed;
			/*timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
			},total_timeout + 250);
			total_timeout += 250 * battle_speed;*/
			update_passive_effects(target_id);
		}
	}
};

function set_unit_type(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	if(current_unit != undefined)
	{
		current_unit['type'] = effect['new_type'];
		var parsed_abilities = parse_abilities(target_id);
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
		},total_timeout);
	}
}

function move_unit(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	var free_slot = find_free_slot(current_unit['side'], current_unit['card_type'], effect['safe_slot'], effect['placement'], effect['opposing_type'], origin_id, effect['slot_filters']);
	if(effect['placement'] != undefined && effect['placement'] == 'right' && free_slot < current_unit['slot'])
	{
		free_slot = false;
	}
	if(effect['placement'] != undefined && effect['placement'] == 'left' && free_slot > current_unit['slot'])
	{
		free_slot = false;
	}
	if(free_slot != false)
	{
		var unit_old_slot = current_unit['slot'] + 0;
		current_unit['old_slot'] = unit_old_slot;
		current_unit['slot'] = free_slot;
		var unit_new_slot = current_unit['slot'] + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id).removeClass('slot_' + unit_old_slot);
			$('.unit_id_' + target_id).addClass('slot_' + unit_new_slot);
		},total_timeout);
		total_timeout += 500 * battle_speed;
		check_ability_procs(current_unit['side'], 'moved', target_id, effect['subtypes']);
		latest_result = unit_old_slot - unit_new_slot;
		if(latest_result < 0){latest_result *= -1;}
		return true;
	}
	else
	{
		//total_timeout -= 500 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + origin_id).removeClass('combat_zoom');
		},total_timeout);
		latest_result = 0;
		return false;
	}
}

function change_side(target_id, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	var new_side = false;
	if(current_unit['side'] == 1){new_side = 2;}
	if(current_unit['side'] == 2){new_side = 1;}

	if(new_side != false)
	{
		var unit_old_side = current_unit['side'] + 0;
		current_unit['side'] = new_side;
		var unit_new_side = new_side;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id).removeClass('flying');
		},total_timeout);
		total_timeout += 100 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id).removeClass('side_' + unit_old_side);
			$('.unit_id_' + target_id).addClass('side_' + unit_new_side);
		},total_timeout);
		var units_at_this_slot = 0;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == current_unit['side'] && unit_info['slot'] == current_unit['slot'])
			{
				units_at_this_slot++;
			}
		});
		if(units_at_this_slot > 1)
		{
			move_unit(target_id, {
				type: 		'move',
				safe_slot:  'dont care',
				has_opposing: 'dont care',
				placement: 	'random'
			}, origin_id);
		}
		else
		{
			total_timeout += 500 * battle_speed;
		}
		check_visible_skills(target_id);
	}
	
}

function move_to_deck(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	if(current_unit != undefined)
	{
		var original_card_id = undefined;
		if(current_unit['card_id'] != undefined)
		{
			original_card_id = 	parseInt(current_unit['card_id']) + 0;
		}
		var current_side = 		current_unit['side'] + 0;
		var original_side = 	current_unit['origin_side'] + 0;

		var new_status = 'deck';
		if(effect['new_status'] != undefined)
		{
			new_status = effect['new_status'];
		}

		if(new_status == 'hand' && original_card_id != undefined && count_hand_cards(battle_info['deck_' + current_unit['side']]) > 9)
		{
			new_status = 'deck';
		}

		if(new_status == 'hand' && original_card_id != undefined && count_hand_cards(battle_info['deck_' + current_unit['side']]) < 10)
		{
			battle_info['deck_' + original_side][original_card_id]['status'] = 'deck';
			draw_card(original_side, original_card_id, undefined, undefined, false);
			total_timeout -= (1500 * battle_speed);
			var temp_slot = battle_info.combat_units[target_id]['slot'] + 0;
			var temp_hand_slot = battle_info['deck_' + original_side][original_card_id]['hand_slot'] + 0;
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).removeClass('side_' + current_side);
				$('.unit_id_' + target_id).addClass('side_' + original_side);
				$('.unit_id_' + target_id).removeClass('slot_' + temp_slot);
				$('.unit_id_' + target_id).addClass('hand_card fake_hand_slot_' + temp_hand_slot);
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).remove();
			},total_timeout + (1500 * battle_speed));
			delete battle_info.combat_units[target_id];

		}
		else
		{
			delete battle_info.combat_units[target_id];
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).addClass('combat_fade');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).remove();
			},total_timeout + (500));
		}

		if(original_card_id != undefined && new_status != 'hand')
		{
			battle_info['deck_' + original_side][original_card_id]['status'] = 'deck';
			if(new_status == 'grave')
			{
				battle_info['deck_' + original_side][original_card_id]['status'] = 'grave';
				check_ability_procs('deck_' + original_side, 'moved_to_grave', original_card_id);
				var card_type = all_available_cards[battle_info['deck_' + original_side][original_card_id]['card_id']]['type'];
				check_ability_procs('deck_' + original_side, card_type + '_moved_to_grave', original_card_id);
			}
			/*if(new_status == 'hand')
			{
				draw_card(original_side, original_card_id);
			}*/
		}
		total_timeout += 500 * battle_speed;
		update_deck_counts();
	}
}

function set_status(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	var old_status = battle_info['deck_' + target_side][target_id]['status'] + '';
	if(old_status == 'hand')
	{
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot'] + 0;
		var temp_side = target_side + 0;
		var temp_hand_slot_id = battle_info['deck_' + target_side][target_id]['hand_slot_id'] + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side + '.hand_slot_id_' + temp_hand_slot_id).remove();
		},total_timeout + (500 * battle_speed));
		check_ability_procs(target_side, 'discarded', origin_id, undefined, undefined);
	}
	//console.log(old_status);
	if(old_status != 'hand')
	{
		if(effect['new_status'] == 'deck' || (effect['new_status'] == 'hand' && count_deck_cards(battle_info['deck_' + target_side]) > 9))
		{
			var temp_side = target_side + 0;
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).addClass('combat_zoom');
				$('.deck_counter_' + temp_side).addClass('green_text');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).removeClass('combat_zoom');
				$('.deck_counter_' + temp_side).removeClass('green_text');
			},total_timeout + (500 * battle_speed));
		}
		if(effect['new_status'] == 'grave')
		{

			var temp_side = target_side + 0;
			//console.log('.deck_counter_' + temp_side);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).addClass('combat_zoom');
				$('.deck_counter_' + temp_side).addClass('red_text');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).removeClass('combat_zoom');
				$('.deck_counter_' + temp_side).removeClass('red_text');
			},total_timeout + (500 * battle_speed));
		}
	}
	if(effect['new_status'] != 'hand')
	{
		battle_info['deck_' + target_side][target_id]['status'] = effect['new_status'];
	}
	else
	{
		battle_info['deck_' + target_side][target_id]['status'] = 'deck';
		draw_card(target_side, target_id);
	}
	total_timeout += 500 * battle_speed;
	update_deck_counts();
	return true;
}

function remove_card_from_combat(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	var old_status = battle_info['deck_' + target_side][target_id]['status'] + '';
	if(battle_info['deck_' + target_side][target_id]['status'] == 'hand')
	{
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot'] + 0;
		var temp_side = target_side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side).remove();
		},total_timeout);
		
	}
	//console.log(old_status);
	delete battle_info['deck_' + target_side][target_id];
	total_timeout += 500 * battle_speed;
	update_deck_counts();
}

function reduce_ready_time(target_id, effect, calculated_amount, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	if(battle_info['deck_' + target_side][target_id]['status'] == 'hand')
	{
		battle_info['deck_' + target_side][target_id]['time_left'] -= calculated_amount;
		if(battle_info['deck_' + target_side][target_id]['time_left'] < 0){battle_info['deck_' + target_side][target_id]['time_left'] = 0;}
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot_id'] + 0;
		var temp_time_left = battle_info['deck_' + target_side][target_id]['time_left'] + 0;
		var temp_side = target_side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side + ' .card_time').html(temp_time_left);
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).addClass('green_glow combat_zoom');
		},total_timeout);
		total_timeout += 500 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).removeClass('green_glow combat_zoom');
		},total_timeout + (500 * battle_speed));
	}
}

function increase_ready_time(target_id, effect, calculated_amount, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	if(battle_info['deck_' + target_side][target_id]['status'] == 'hand')
	{
		battle_info['deck_' + target_side][target_id]['time_left'] += calculated_amount;
		if(battle_info['deck_' + target_side][target_id]['time_left'] < 0){battle_info['deck_' + target_side][target_id]['time_left'] = 0;}
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot_id'] + 0;
		var temp_time_left = battle_info['deck_' + target_side][target_id]['time_left'] + 0;
		var temp_side = target_side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side + ' .card_time').html(temp_time_left);
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).addClass('red_glow combat_zoom');
		},total_timeout);
		total_timeout += 500 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).removeClass('red_glow combat_zoom');
		},total_timeout + (500 * battle_speed));
	}
}



function receive_damage(target_id, origin_id, calculated_amount,subtypes){

	latest_result = 0;



	if(battle_info.combat_units[target_id] != undefined)
    {
		var target_unit = battle_info.combat_units[target_id];
		var origin_unit = battle_info.combat_units[origin_id];
		var temp_target_side = target_unit['side'] + 0;
		var temp_origin_side = undefined;
		if(origin_unit != undefined)
		{
			temp_origin_side = origin_unit['side'] + 0;
		}

		if(origin_unit != undefined)
		{
			$.each(origin_unit['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], 'add_subtype_to_damage') == true)
				{
					subtypes = subtypes.concat(all_abilities[ability_key]['subtypes']);
				}
			});

			/*if(origin_unit['effects'] != undefined && origin_unit['effects']['blessed'] != undefined && origin_unit['effects']['blessed'] > 0 && (target_unit == undefined || target_unit['abilities']['hexed'] == undefined))
	    	{
	    	    calculated_amount += origin_unit['effects']['blessed'];
	    	    //origin_unit['effects']['blessed'] --;
	    	    update_passive_effects(origin_id);
	    	}*/
	    	/*if(target_unit['effects'] != undefined && target_unit['effects']['blessed'] != undefined && target_unit['effects']['blessed'] > 0 && origin_unit != undefined && origin_unit['abilities']['hexed'] != undefined)
	    	{
	    	    calculated_amount += origin_unit['abilities']['hexed'];
	    	}*/
		}

		amount_reduced = 0;

		if(calculated_amount > 0)
    	{
    		var armor_reduced = 0;
    		if(target_unit['armor'] > 0 && match_array_values(['ignores_armor'],subtypes) == false)
    		{
    			if(match_array_values(['breaks_armor'],subtypes) == false && false)
    			{
    				calculated_amount = 1;
    			}
    			var damage_percent = calculated_amount / target_unit['armor'];
    			/*if(match_array_values(['projectile'],subtypes) == true)
				{
					damage_percent = (calculated_amount / target_unit['armor']) / 2;
				}*/
    			if(damage_percent >= 1)
    			{
    				calculated_amount -= target_unit['armor'];
    				armor_reduced = target_unit['armor'];
    				target_unit['armor'] = 0;
    			}
    			if(damage_percent < 1)
    			{
    				/*if(damage_percent < 0.25)
    				{
    					damage_percent = 0.25;
    				}*/
    				if(round_by_percent(damage_percent) == 1 || true)
    				{
    					if(target_unit['armor'] > calculated_amount)
    					{
    						target_unit['armor'] -= calculated_amount;
    						armor_reduced = calculated_amount;
    					}
    					else
    					{
    						armor_reduced = target_unit['armor'];
    						target_unit['armor'] -= calculated_amount;
    					}
    				}
    				/*else
    				{
    					target_unit['armor'] -= 1;
    					armor_reduced = 1;
    				}*/
    				if(target_unit['armor'] < 0)
    				{
    					calculated_amount = target_unit['armor'] * -1;
    				}
    				else
    				{
    					calculated_amount = 0;
    				}
    				
    			}
    			target_unit['armor'] = 0;
    		}
    		if(armor_reduced > 0)
			{
				check_unit_hp(target_id);
				//create_projectile(target_id, target_id, 'just_damaged', undefined, undefined, projectile_side, armor_reduced, '#ccc', 2000);
				timeout_key ++;
				var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
	    		all_timeouts[timeout_key] = setTimeout(function(){
	    			var combat_text = parse_floating_text(armor_reduced, '#ccc', false);
	    			//$('.battle_container .unit_id_' + target_id).append(combat_text);
	    			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
	    		},total_timeout );
			}
    	}

		if(calculated_amount > 0)
    	{
			$.each(target_unit['abilities'], function(ability_id, ability_level){
				if(match_array_values(all_abilities[ability_id]['proc'], 'max_incoming_damage') == true && (match_array_values(subtypes,all_abilities[ability_id]['subtypes']) == true || all_abilities[ability_id]['subtypes'] == undefined) && match_array_values(subtypes,all_abilities[ability_id]['negated_by']) == false && (all_abilities[ability_id]['origin_not_self'] == undefined || target_id != origin_id) && (all_abilities[ability_id]['has_origin_unit'] == undefined || (origin_unit != undefined && origin_unit['current_health'] > 0)) && (all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0))
	    		{
	    			if(all_abilities[ability_id]['reduce_chance'] == undefined || Math.random() * 100 <= calculate_effect({amount:all_abilities[ability_id]['reduce_chance']}, target_id, origin_id, ability_level))
		    		{
		    			var max_incoming_damage = calculate_effect({amount:all_abilities[ability_id]['amount']}, target_id, origin_id, ability_level);
		    			if(calculated_amount > max_incoming_damage)
		    			{
		    				amount_reduced = calculated_amount - max_incoming_damage;
		    				var temp_amount_reduced = amount_reduced + 0;
		    				calculated_amount = max_incoming_damage;
		    				if(calculated_amount >= 0)
		    				{
			    				timeout_key ++;
			    				var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
					    		all_timeouts[timeout_key] = setTimeout(function(){
					    			var combat_text = parse_floating_text(temp_amount_reduced, '#ccc', false);
					    			//$('.battle_container .unit_id_' + target_id).append(combat_text);
					    			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
					    		},total_timeout );
					    		process_ability(target_id, all_abilities[ability_id], ability_level, origin_id, undefined, 'reduce_incoming_damage');
				    			check_ability_delay(target_id, ability_id);
					    	}
		    			}
		    		}
	    		}
			});
		}
	    
	    if(calculated_amount > 0)
    	{	    
	    	if(target_unit['effects'] != undefined && target_unit['effects']['cursed'] != undefined)
	    	{
	    	    calculated_amount += target_unit['effects']['cursed'];
	    	    target_unit['effects']['cursed'] = 0;
	    	    //target_unit['effects']['cursed'] = Math.floor(target_unit['effects']['cursed'] / 2);
	    	    if(target_unit['effects']['cursed'] < 1)
	    	    {
	    	    	delete target_unit['effects']['cursed'];
	    	    }
	    	    //delete target_unit['effects']['cursed'];
	    	    update_passive_effects(target_id);
	    	}
	    }

    	if(calculated_amount > 0)
    	{
			if(target_unit['effects'] != undefined && target_unit['effects']['blessed'] != undefined && target_unit['effects']['blessed'] > 0 && (origin_unit == undefined || origin_unit['abilities']['hexed'] == undefined))
	    	{
	    		var temp_calculated_amount = calculated_amount + 0;
	    	    calculated_amount -= target_unit['effects']['blessed'];
	    	    target_unit['effects']['blessed'] -= temp_calculated_amount;
	    	    if(target_unit['effects']['blessed'] < 0){target_unit['effects']['blessed'] = 0;}
	    	    update_passive_effects(target_id);
	    	}
	    }
    
    	$.each(target_unit['abilities'], function(ability_id, ability_level){
    		if(match_array_values(all_abilities[ability_id]['proc'], 'reduce_incoming_damage') == true && (match_array_values(subtypes,all_abilities[ability_id]['subtypes']) == true || all_abilities[ability_id]['subtypes'] == undefined) && match_array_values(subtypes,all_abilities[ability_id]['negated_by']) == false && (all_abilities[ability_id]['origin_not_self'] == undefined || target_id != origin_id) && (all_abilities[ability_id]['has_origin_unit'] == undefined || (origin_unit != undefined && origin_unit['current_health'] > 0)) && (all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0))
    		{
    			if(check_ability_can_fire(target_id, all_abilities[ability_id], ability_level, origin_id) == true)
    			{
	    			if(target_unit['ability_delays'][ability_id] == undefined || target_unit['ability_delays'][ability_id] < 1)
	    			{
	    				if(all_abilities[ability_id]['reduce_chance'] == undefined || Math.random() * 100 <= calculate_effect({amount:all_abilities[ability_id]['reduce_chance']}, target_id, origin_id, ability_level))
	    				{
	    					process_ability(target_id, all_abilities[ability_id], ability_level, origin_id, undefined, 'reduce_incoming_damage');
			    			amount_reduced = calculate_effect({amount:all_abilities[ability_id]['amount']}, target_id, origin_id, ability_level);
			    			check_ability_delay(target_id, ability_id);
			    			if(calculated_amount < amount_reduced){amount_reduced = calculated_amount};
			    			calculated_amount -= amount_reduced;
			    		}
		    			
		    		}
		    	}
    		}
    	});
    
    	if(calculated_amount > 0)
    	{
    		
    		var overkill = 0;
    		var current_total_health = target_unit['current_health'];
    		if(target_unit['temp_health'] != undefined)
    		{
    			current_total_health += target_unit['temp_health'];
    		}
    		if(calculated_amount > current_total_health && current_total_health > 0)
    		{
    			overkill = calculated_amount - current_total_health;
    		}
    		if(calculated_amount > current_total_health && target_unit['slot'] != 0)
    		{
    			calculated_amount = current_total_health;
    		}

    		//////////////////////// QUESTS

    		if(target_unit['side'] == 1)
    		{
    			if(target_unit['slot'] == 0)
    			{
    				check_quests('enemy_hero_damaged');
    			}
    			else
    			{
    				check_quests('enemy_unit_damaged');
    				check_quests('enemy_' + target_unit['type'] + '_damaged');
    			}
    			check_quests('dealt_damage', calculated_amount);
    		}

    		//////////////////////// RESOLVE

    		if(target_unit['temp_health'] != undefined && target_unit['temp_health'] > 0)
    		{
    			target_unit['temp_health'] -= calculated_amount;
    			if(target_unit['temp_health'] < 0)
    			{
    				target_unit['current_health'] += target_unit['temp_health'];
    				target_unit['temp_health'] = 0;
    			}
    		}
    		else
    		{
    			target_unit['current_health'] -= calculated_amount;
    		}
    		timeout_key ++;
    		passive_effect_count++;
			var temp_passive_effect_count = passive_effect_count + 0;
			var actual_damage = calculated_amount + 0;
			var projectile_side = target_unit['side'];
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
    			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('red_glow');
    			/*if(actual_damage > 0)
    			{
    				$('.battle_container .unit_id_' + target_id).append('<div class="just_damaged passive_effect_' + temp_passive_effect_count + '">' + actual_damage + '</div>');
    			}*/
    		},total_timeout);
    		if(actual_damage > 0)
    		{
    			//create_projectile(target_id, target_id, 'just_damaged', undefined, undefined, projectile_side, actual_damage, '#f00', 2000);
    			
    			timeout_key ++;
    			var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
	    		all_timeouts[timeout_key] = setTimeout(function(){
	    			var combat_text = parse_floating_text(actual_damage, '#f00', false);
	    			//$('.battle_container .unit_id_' + target_id).append(combat_text);
	    			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
	    		},total_timeout );
    		}
    		/*timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id + ' .passive_effect_' + temp_passive_effect_count + '').remove();
    		},total_timeout + 1500);*/
    		//total_timeout += 500 * battle_speed;
    		timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
    			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('red_glow');
    			
    		},total_timeout + 500);

    		latest_result = calculated_amount;

    		var temp_damage_dealt = calculated_amount + 0;

    		check_unit_hp(target_id);

    		latest_result = temp_damage_dealt;

    		if(battle_info.combat_units[origin_id] != undefined && (temp_damage_dealt > 0 /*|| armor_reduced > 0*/))
    		{
    			$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
    				if(match_array_values(all_abilities[ability_key]['proc'], 'dealt_damage') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'dealt_damage', false);
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}
    		if(battle_info.combat_units[origin_id] != undefined && (temp_damage_dealt > 0 /*|| armor_reduced > 0*/) && target_id < 3 && battle_info.combat_units[origin_id]['side'] != battle_info.combat_units[target_id]['side'])
    		{
    			$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
    				if(match_array_values(all_abilities[ability_key]['proc'], 'dealt_damage_to_hero') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'dealt_damage_to_hero', true);
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}
    		

    		if(battle_info.combat_units[target_id] != undefined && (temp_damage_dealt > 0 || armor_reduced > 0))
    		{
    			$.each(target_unit['abilities'], function(ability_key, ability_level){
    				
    				if(match_array_values(all_abilities[ability_key]['proc'], 'receive_damage') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					if(target_unit['ability_delays'][ability_key] == undefined || target_unit['ability_delays'][ability_key] < 1)
    					{
	    					timeout_key ++;
	    					all_timeouts[timeout_key] = setTimeout(function(){
				    			$('.battle_container .unit_id_' + target_id).removeClass('attack');
				    		},total_timeout );
	    					var temp_effect_fired = process_ability(target_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'receive_damage');
	    					if(temp_effect_fired == true)
	    					{
	    						check_ability_delay(target_id, ability_key);
	    					}
	    				}
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}

    		if(battle_info.combat_units[origin_id] != undefined && overkill > 0)
    		{
    			$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
    				if(match_array_values(all_abilities[ability_key]['proc'], 'overkill') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					process_ability(origin_id, all_abilities[ability_key], overkill, target_id, undefined, 'overkill', false);
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}
    
    		/*if(overkill > 0 && match_array_values(['overkill_to_hero'], subtypes) == true)
    		{
    			process_ability(origin_id, all_abilities['overkill_to_hero'], overkill);
    		}*/

    		latest_result = temp_damage_dealt;
    
        
    		if(target_id == 1 || target_id == 2)
    		{
    			check_ability_procs(temp_target_side, 'hero_damaged', origin_id, subtypes);
    		}

    		check_ability_procs(temp_target_side, 'takes_damage', target_id, subtypes);
    		check_ability_procs(temp_origin_side, 'has_dealt_damage', origin_id, subtypes);

    		latest_result = temp_damage_dealt;
    		
    
    		return calculated_amount;
    	}
    	else
    	{
    		timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
    		},total_timeout);
    		timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
    		},total_timeout + 500);
    		//total_timeout += 250 * battle_speed;	
    
    		return 0;
    	}
    }
    else
    {
        return 0;
    }
}

function receive_healing(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	var origin_unit = battle_info.combat_units[origin_id];

	if(calculated_amount > (target_unit['health'] - target_unit['current_health']))
	{
		calculated_amount = (target_unit['health'] - target_unit['current_health'])
	}

	if(target_unit != undefined)
	{
		if(target_unit['effects'] != undefined && target_unit['effects']['blessed'] != undefined)
    	{
    	    //calculated_amount += target_unit['effects']['blessed'];
    	}
	}
	if(calculated_amount > 0)
	{
		if(target_unit['current_health'] < 0)
		{
			target_unit['current_health'] = 0;
		}
		target_unit['current_health'] += calculated_amount;
		if(target_unit['current_health'] > 0 && target_unit['dead'] != undefined)
		{
			delete target_unit['dead'];
		}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		},total_timeout + 500);
		var healing_received = calculated_amount + 0;
		//create_projectile(target_id, target_id, 'just_damaged', undefined, undefined, target_unit['side'], healing_received, '#5f5', 2000);
		timeout_key ++;
		var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
		all_timeouts[timeout_key] = setTimeout(function(){
			var combat_text = parse_floating_text(healing_received, 'rgba(55,255,55,0.9)', false);
			//$('.battle_container .unit_id_' + target_id).append(combat_text);
			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
		},total_timeout );

		//total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}

function set_hp(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];

	var effect_color = 'green';
	if(calculated_amount < target_unit['current_health']){effect_color = 'purple';}
	target_unit['current_health'] = calculated_amount;
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(effect_color + '_glow');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(effect_color + '_glow');
	},total_timeout+ 500);
	total_timeout += 500 * battle_speed;
	check_unit_hp(target_id);
	
}

function set_max_hp(target_id, origin_id, calculated_amount,subtypes){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var target_unit = battle_info.combat_units[target_id];

		var effect_color = 'green';
		if(calculated_amount < target_unit['health']){effect_color = 'purple';}
		target_unit['health'] = calculated_amount;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(effect_color + '_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(effect_color + '_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}

function enable_to_act(target_id, origin_id, calculated_amount,subtypes){
	battle_info.combat_units[target_id]['failed_to_act_this_phase'] = false;
    battle_info.combat_units[target_id]['acted_this_turn'] = 0;
}

function go_again(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	if(target_unit['acted_this_turn'] > 1){target_unit['acted_this_turn'] = 1;}
	target_unit['acted_this_turn'] -= calculated_amount;
	delete target_unit['failed_to_act_this_phase'];
	target_unit['failed_to_act_this_phase'] = false;
    //battle_info.combat_units[target_id]['used_ability'] = false;



    /*var current_unit = battle_info.combat_units[target_id];
    $.each(current_unit['abilities'], function(ability_id, ability_level){
		var current_ability = all_abilities[ability_id];
		if(battle_info.combat_units[target_id] != undefined){
			if(current_ability['proc'] != undefined && current_ability['proc'] == 'basic')
			{
			    console.log('processing ' + ability_id + ' for ' + target_id);
			    total_timeout += 250 * battle_speed;
				process_ability(target_id, current_ability, ability_level, target_id);
			}
		}
	});*/
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		$('.battle_container .unit_id_' + target_id).removeClass('attack');
		$('.battle_container .unit_id_' + target_id).removeClass('combat_zoom');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
	},total_timeout+ 500 * battle_speed);
	total_timeout += 500 * battle_speed;
	//process_single_unit(target_id, undefined, false, 'basic');
	//total_timeout += 250 * battle_speed;

	if(target_unit['type'] == 'spell')
    {
    	$.each(target_unit['abilities'], function(ability_id, ability_level){
			var current_ability = all_abilities[ability_id];
			if(battle_info.combat_units[target_id] != undefined){
				if(current_ability['proc'] != undefined && current_ability['proc'] == 'basic')
				{
				    //console.log('processing ' + ability_id + ' for ' + target_id);
				    //total_timeout += 250 * battle_speed;
					process_ability(target_id, current_ability, ability_level, target_id);
				}
			}
		});
    }
}

function increase_power(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0 && battle_info.combat_units[target_id]['power'] !== false)
	{
		var target_unit = battle_info.combat_units[target_id];

		target_unit['power'] += calculated_amount;
		if(target_unit['power'] < 0){target_unit['power'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_power(target_id);
		check_ability_procs(target_unit['side'], target_unit['type'] + '_gains_power', target_id);
		check_ability_procs(target_unit['side'], 'gains_power', target_id);	
	}
}

function grant_temp_power(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];
		if(target_unit['temp_power'] == undefined)
		{
			target_unit['temp_power'] = 0;
		}

		target_unit['temp_power'] += calculated_amount;
		//if(target_unit['temp_health'] < 0){target_unit['temp_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
		},total_timeout+ 500);
		//total_timeout += 500 * battle_speed;
		check_unit_power(target_id);
		check_ability_procs(target_unit['side'], target_unit['type'] + '_gains_power', target_id);
		check_ability_procs(target_unit['side'], 'gains_power', target_id);	
		total_timeout += 500 * battle_speed;
	}	
}

function grant_temp_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];
		if(target_unit['temp_health'] == undefined)
		{
			target_unit['temp_health'] = 0;
		}

		target_unit['temp_health'] += calculated_amount;
		//if(target_unit['temp_health'] < 0){target_unit['temp_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		},total_timeout+ 500);
		//total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
		check_unit_alive(target_id);
		total_timeout += 500 * battle_speed;
	}	
}

function increase_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];

		target_unit['health'] += calculated_amount;
		target_unit['current_health'] += calculated_amount;
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}	
}

function reduce_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];

		var reduced_amount = calculated_amount + 0;
		var reduced_current_amount = calculated_amount + 0;

		if(target_unit['health'] - 0 < calculated_amount)
		{
			reduced_amount = target_unit['health'] - 0;
		}

		if(target_unit['current_health'] - 0 < reduced_current_amount)
		{
			reduced_current_amount = target_unit['current_health'] - 0;
		}

		if(target_unit['health'] > 0)
		{
			target_unit['health'] -= reduced_amount;
		}
		if(target_unit['current_health'] > 0)
		{
			target_unit['current_health'] -= reduced_current_amount;
		}
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
	return 	reduced_current_amount;
}

function reduce_current_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];

		var reduced_amount = calculated_amount + 0;
		var reduced_current_amount = calculated_amount + 0;

		if(target_unit['current_health'] - 0 < reduced_current_amount)
		{
			reduced_current_amount = target_unit['current_health'] - 0;
		}

		if(target_unit['current_health'] > 0)
		{
			target_unit['current_health'] -= reduced_current_amount;
		}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
	return 	reduced_current_amount;
}

function set_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];
		var effect_color = 'green';
		if(calculated_amount < target_unit['health']){effect_color = 'purple';}

		target_unit['health'] = calculated_amount;
		target_unit['current_health'] = calculated_amount;
		
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}

		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(effect_color + '_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(effect_color + '_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
	return 	calculated_amount;
}


function reduce_max_health(target_id, origin_id, calculated_amount,subtypes){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var target_unit = battle_info.combat_units[target_id];

		target_unit['health'] -= calculated_amount;
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		if(target_unit['current_health'] > target_unit['health']){target_unit['current_health'] = target_unit['health'];}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}


function reduce_armor(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	if(target_unit['armor'] > 0)
	{
		target_unit['armor'] -= calculated_amount;
		if(target_unit['armor'] < 0){target_unit['armor'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}

function increase_armor(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];

	target_unit['armor'] += calculated_amount;
	if(target_unit['armor'] < 0){target_unit['armor'] = 0;}
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
	},total_timeout+ 500);
	total_timeout += 500 * battle_speed;
	check_unit_hp(target_id);
	
}

function set_armor(target_id, origin_id, calculated_amount,subtypes){
	var have_set = 0;
	var target_unit = battle_info.combat_units[target_id];
	var original_armor = parseInt(target_unit['armor']);
	if(original_armor != calculated_amount)
	{
		target_unit['armor'] = calculated_amount;
		if(target_unit['armor'] < 0){target_unit['armor'] = 0;}
		timeout_key ++;
		var glow_color = 'red';
		if(original_armor < target_unit['armor'])
		{
			glow_color = 'green';
		}
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(glow_color + '_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(glow_color + '_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
		have_set = calculated_amount;
	}
	return have_set;
	
}


function reduce_power(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];

	if(target_unit['power'] !== false)
	{
		target_unit['power'] -= calculated_amount;
		if(target_unit['power'] < 0){target_unit['power'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_power(target_id);
	}
}

function set_power(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	var original_power = target_unit['power'] + 0;
	target_unit['power'] = calculated_amount;
	if(target_unit['power'] < 0){target_unit['power'] = 0;}
	timeout_key ++;
	if(original_power > target_unit['power'])
	{
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
	}
	if(original_power < target_unit['power'])
	{
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
		},total_timeout+ 500);
	}
	total_timeout += 500 * battle_speed;
	check_unit_power(target_id);
	
}

function grant_temp_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect, at_front){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var target_unit = battle_info.combat_units[target_id];
		if(target_unit['temp_skills'] == undefined){target_unit['temp_skills'] = {};}
		if(target_unit['temp_skills'][skill_id] == undefined)
		{
			target_unit['temp_skills'][skill_id] = calculated_amount;
		}
		else
		{
			target_unit['temp_skills'][skill_id] += calculated_amount;
		}
		grant_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect, at_front);
	}
}

function grant_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect, at_front){

	if(skill_id == 'random' && count_object(battle_info.combat_units[target_id]['abilities']) < 5)
	{
		skill_id = find_new_ability(battle_info.combat_units[target_id]['abilities'], battle_info.combat_units[target_id]);
	}
	if(skill_id == 'random' && count_object(battle_info.combat_units[target_id]['abilities']) >= 5)
	{
		skill_id = get_random_key_from_object(battle_info.combat_units[target_id]['abilities']);
	}

	var target_unit = battle_info.combat_units[target_id];

	if(target_unit['abilities'][skill_id] == undefined)
	{
		if(at_front != undefined && at_front == true)
		{
			var temp_abilities = {};
			temp_abilities[skill_id] = calculated_amount;
			$.each(target_unit['abilities'], function(temp_ability_id, temp_ability_level){
				temp_abilities[temp_ability_id] = temp_ability_level + 0;
			});
			target_unit['abilities'] = true_copyobject(temp_abilities);
		}
		else
		{
			target_unit['abilities'][skill_id] = calculated_amount;
		}
	}
	else
	{
		if(typeof(target_unit['abilities'][skill_id]) == 'object')
		{
			target_unit['abilities'][skill_id]['level'] += calculated_amount;
			if(all_abilities[skill_id] != undefined && all_abilities[skill_id]['max_level'] != undefined && target_unit['abilities'][skill_id]['level'] > all_abilities[skill_id]['max_level'])
			{
				target_unit['abilities'][skill_id]['level'] = all_abilities[skill_id]['max_level'];
			}
		}
		else
		{
			target_unit['abilities'][skill_id] += calculated_amount;
			if(all_abilities[skill_id] != undefined && all_abilities[skill_id]['max_level'] != undefined && target_unit['abilities'][skill_id] > all_abilities[skill_id]['max_level'])
			{
				target_unit['abilities'][skill_id] = all_abilities[skill_id]['max_level'];
			}
		}
	}
	if(typeof(target_unit['abilities'][skill_id]) == 'object')
	{
		if(target_unit['abilities'][skill_id]['level'] < 1)
		{
			delete target_unit['abilities'][skill_id];
		}
	}
	else
	{
		if(target_unit['abilities'][skill_id] < 1)
		{
			delete target_unit['abilities'][skill_id];
		}
	}
	

	var timeout_increase = 0;

	if(visible_effect == undefined || visible_effect == true)
	{

		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_increase = 500;
	}
	timeout_key ++;
	var parsed_abilities = parse_abilities(target_id);
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
	},total_timeout+ timeout_increase);
	update_passive_effects(target_id);

	total_timeout += timeout_increase * battle_speed;
	
	
}

function set_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect){
	var target_unit = battle_info.combat_units[target_id];
    var glow_color = 'green';
    var original_level = target_unit['abilities'][skill_id] + 0;

    if((target_unit['abilities'][skill_id] == undefined && calculated_amount > 0) || target_unit['abilities'][skill_id] != undefined && target_unit['abilities'][skill_id] != calculated_amount)
    {
		/*if(target_unit['abilities'][skill_id] == undefined)
		{*/
			target_unit['abilities'][skill_id] = calculated_amount;
		/*}
		else
		{
			target_unit['abilities'][skill_id] += calculated_amount;
		}*/
		if(target_unit['abilities'][skill_id] <= 0)
		{
		    delete target_unit['abilities'][skill_id];
		    glow_color = 'red';
		    if(target_id == origin_id)
		    {
		        glow_color = '';
		    }
		}
		if(target_unit['abilities'][skill_id] < original_level)
		{
			glow_color = 'dark';
		}

		var timeout_increase = 0;
		
		if(visible_effect != undefined && visible_effect == true)
		{
			timeout_key ++;
			
			if(glow_color != '')
			{
		    	all_timeouts[timeout_key] = setTimeout(function(){
		    		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(glow_color + '_glow');
		    	},total_timeout);
		    	timeout_increase = 500;
			}
		}
		timeout_key ++;
		var parsed_abilities = parse_abilities(target_id);
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(glow_color + '_glow');
			$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
		},total_timeout+ timeout_increase);

		total_timeout += timeout_increase * battle_speed;
		
		
	}
	
}


function check_unit_hp(unit_id){
	var unit = battle_info.combat_units[unit_id];
	if(unit['current_health'] < 1)
	{
		unit['current_health'] = 0;
	}
	else
	{
		if(unit['dead'] != undefined)
		{
			delete unit['dead'];
		}
	}
	if(unit['current_health'] > unit['health'])
	{
		unit['current_health'] = unit['health'];
	}

	if(unit['armor'] < 1)
	{
		unit['armor'] = 0;
	}

	var current_armor = unit['armor'];
	var current_health = unit['current_health'];
	var current_temp_health = 0;
	if(unit['temp_health'] != undefined)
	{
		current_temp_health = unit['temp_health'];
	}
	var current_total_health = current_health + current_temp_health;
	if(current_total_health < 0){current_total_health = 0;}
	var current_max_health = unit['health'] + current_temp_health;
	if(current_max_health < 1){current_max_health = 1;}
	//var current_health_percent = (Math.floor(((unit['health'] - unit['current_health']) / unit['health']) * 62) + 9);
	var current_health_percent = 100 - (current_health / current_max_health * 100);
	var current_total_health_percent = 100 - (current_total_health / current_max_health * 100);
	var current_temp_health_percent = (current_temp_health / current_max_health * 100);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + unit_id + ' .card_health .max_health').html(current_total_health);
		$('.battle_container .unit_id_' + unit_id + ' .card_health .current_health').html('');
		$('.battle_container .unit_id_' + unit_id + ' .card_health .current_health').css('height', current_total_health_percent + '%');
		$('.battle_container .unit_id_' + unit_id + ' .card_health .temp_health').css('height', current_temp_health_percent + '%');
		$('.battle_container .unit_id_' + unit_id + ' .card_health .temp_health').css('bottom', (100 - current_health_percent) + '%');
		$('.battle_container .unit_id_' + unit_id + ' .card_armor').html(current_armor);
		if(current_armor > 0)
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_armor').css('opacity', 1);
		}
		else
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_armor').css('opacity', 0);
		}
	},total_timeout);

}

function check_visible_skills(unit_id){
	var unit = battle_info.combat_units[unit_id];
	if(unit != undefined)
	{
		if(unit['abilities']['stealth'] != undefined && unit['abilities']['stealth'] > 0)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).addClass('stealth');
			},total_timeout + 10);
		}
		else
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).removeClass('stealth');
			},total_timeout + 10);
		}
		if(unit['abilities']['flying'] != undefined && unit['abilities']['flying'] > 0 && (unit['effects'] == undefined || unit['effects']['stunned'] == undefined || unit['effects']['stunned'] == 0))
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).addClass('flying');
			},total_timeout + 10);
		}

		if(unit['abilities']['flying'] == undefined || unit['abilities']['flying'] == 0 || (unit['effects'] != undefined && unit['effects']['stunned'] != undefined && unit['effects']['stunned'] > 0))
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).removeClass('flying');
			},total_timeout + 10);
		}
	}
}

function disappear_unit(unit_id, origin_id){
	if(battle_info.combat_units[unit_id] != undefined)
	{
		var unit = battle_info.combat_units[unit_id];
		if(unit['slot'] !== 0)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).addClass('combat_fade');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).remove();
			},total_timeout + (500));
			if(unit['card_id'] != undefined && battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] == 'in_play')
			{
				battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] = 'grave';
				update_deck_counts();
				check_ability_procs(unit['origin_side'], 'moved_to_grave', unit['card_id']);
				var card_type = all_available_cards[battle_info['deck_' + unit['origin_side']][unit['card_id']]['card_id']]['type'];
				check_ability_procs(unit['origin_side'], card_type + '_moved_to_grave', unit['card_id']);
			}
			delete battle_info.combat_units[unit_id];
		}
	}
}

function destroy_unit(unit_id, origin_id){
	check_unit_alive(unit_id, origin_id, true);
}

function check_unit_alive(unit_id, origin_id, forced_death, subtypes){
	if(battle_info.combat_units[unit_id] != undefined)
	{
		var unit = battle_info.combat_units[unit_id];
		var temp_unit_type = unit['type'] + '';
		if(forced_death != undefined && forced_death == true)
		{
			unit['health'] = 0;
			unit['current_health'] = 0;
			unit['temp_health'] = 0;
		}
		if(unit['temp_health'] == undefined){unit['temp_health'] = 0;}
		if(unit['health'] !== false && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0) && unit['dead'] == undefined)
		{
			unit['dead'] = true;
			if(unit['side'] == 1)
			{
				if(origin_id != undefined && battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['side'] == 2)
				{
					check_quests('enemy_' + unit['type'] + '_killed');
					if(battle_info.combat_units[origin_id]['unit_id'] == 2)
					{
						check_quests('enemy_' + unit['type'] + '_killed_by_hero');
					}
				}
			}
			if(unit['side'] == 2)
			{
				if(origin_id != undefined && battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['side'] == 1)
				{
					check_quests('ally_' + unit['type'] + '_killed');
					if(battle_info.combat_units[origin_id]['unit_id'] == 2)
					{
						check_quests('ally_' + unit['type'] + '_killed_by_hero');
					}
				}
			}
			
			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				//if(battle_info.combat_units[origin_id] != undefined){
					$.each(battle_info.combat_units[unit_id]['abilities'], function(ability_key, ability_level){
						if(match_array_values(all_abilities[ability_key]['proc'], ['pre_own_death']) == true)
						{
							process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'pre_own_death');
						}
					});
				//}
			}

			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				if(battle_info.combat_units[origin_id] != undefined){
					$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
						if(match_array_values(all_abilities[ability_key]['proc'], ['prekill','prekill_' + unit['type']]) == true)
						{
							process_ability(origin_id, all_abilities[ability_key], ability_level, unit_id, undefined, 'prekill');
						}
					});
				}
			}

			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				$.each(battle_info.combat_units[unit_id]['abilities'], function(ability_key, ability_level){
					if(match_array_values(all_abilities[ability_key]['proc'], ['own_death']) == true)
					{
						process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'own_death');
					}
				});
			}

			if(battle_info.combat_units[unit_id] != undefined)
			{
				check_ability_procs(unit['side'], temp_unit_type + '_death', unit_id);
				check_ability_procs(unit['side'], 'death', unit_id);
			}

			/*if(battle_info.combat_units[unit_id] != undefined && unit['current_health'] === 0)
			{
				if(unit['slot'] !== 0 && unit['current_health'] === 0)
				{
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).removeClass('flying');
						$('.battle_container .unit_id_' + unit_id).removeClass('stealth');
						$('.battle_container .unit_id_' + unit_id).addClass('dead');
					},total_timeout);
					//total_timeout += 500 * battle_speed;
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).remove();
					},total_timeout + (2000));
				}
			}*/

			if(battle_info.combat_units[unit_id] != undefined)
			{
				if(battle_info.combat_units[origin_id] != undefined){
					$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
						if(match_array_values(all_abilities[ability_key]['proc'], ['kill','kill_' + temp_unit_type]) == true)
						{
							process_ability(origin_id, all_abilities[ability_key], ability_level, unit_id, undefined, 'kill');
						}
					});
				}
				if(battle_info.combat_units[origin_id] != undefined)
				{
					check_ability_procs(unit['side'], temp_unit_type + '_killed', origin_id);
				}
				
			}

			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				$.each(battle_info.combat_units[unit_id]['abilities'], function(ability_key, ability_level){
					if(match_array_values(all_abilities[ability_key]['proc'], ['post_own_death']) == true)
					{
						process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'post_own_death');
					}
				});
			}
			
			
			if(battle_info.combat_units[unit_id] != undefined)
			{
				if(unit['slot'] !== 0 && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
				{
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).removeClass('flying');
						$('.battle_container .unit_id_' + unit_id).removeClass('stealth');
						$('.battle_container .unit_id_' + unit_id).addClass('dead');
					},total_timeout);
					//total_timeout += 500 * battle_speed;
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).remove();
					},total_timeout + (1000));
					if(unit['card_id'] != undefined && battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] == 'in_play')
					{
						battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] = 'grave';
						update_deck_counts();
						check_ability_procs(unit['origin_side'], 'moved_to_grave', unit['card_id']);
						var card_type = all_available_cards[battle_info['deck_' + unit['origin_side']][unit['card_id']]['card_id']]['type'];
						check_ability_procs(unit['origin_side'], card_type + '_moved_to_grave', unit['card_id']);
					}
					check_ability_procs(unit['side'], 'post_any_death', unit_id);
				}

				if(unit['slot'] !== 0 && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
				{

					delete battle_info.combat_units[unit_id];

				}
				else
				{
					if(unit['dead'] != undefined)
					{
						delete unit['dead'];
					}
				}
			}
			else
			{
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + unit_id).addClass('dead');
				},total_timeout + 2000);
				//total_timeout += 500 * battle_speed;
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + unit_id).remove();
				},total_timeout + (3000));
			}
			
		}
	}
}

function check_ability_procs(side, string, origin_id, subtypes, slot_id){
	if(all_ability_procs[string] != undefined || all_ability_procs['ally_' + string] != undefined || all_ability_procs['enemy_' + string] != undefined || all_ability_procs['any_' + string] != undefined)
	{
		if(slot_id == undefined){slot_id = -10;}
		/*for(temp_i = -10;temp_i<=5;temp_i++){*/
			$.each(battle_info.combat_units, function(unit_id, unit){
				if(unit['slot'] == slot_id){
					check_single_unit_proc(unit_id, side, string, origin_id, subtypes);
				}
			});
		/*}*/
		if(slot_id < 5)
		{
			check_ability_procs(side, string, origin_id, subtypes, slot_id + 1);
		}
	}
	/*else
	{
		console.log(string + ' is no proc');
	}*/
}

function check_single_unit_proc(unit_id, side, string, origin_id, subtypes){
	if(battle_info.combat_units[unit_id] != undefined)
	{
		var unit = battle_info.combat_units[unit_id];
		$.each(unit['abilities'], function(ability_key, ability_level){
			if(unit['ability_delays'][ability_key] == undefined || unit['ability_delays'][ability_key] < 1)
			{
				if(all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true)
				{
					if(all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false)
					{
						if(all_abilities[ability_key]['origin_not_self'] == undefined || origin_id != unit_id)
						{
							var temp_any_effect_fired = false;
							if(unit['side'] == side && match_array_values(all_abilities[ability_key]['proc'], 'ally_' + string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'ally_' + string);							
							}
							if(unit['side'] != side && match_array_values(all_abilities[ability_key]['proc'], 'enemy_' + string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'enemy_' + string);
							}
							if(match_array_values(all_abilities[ability_key]['proc'], 'any_' + string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'any_' + string);
							}
							if(match_array_values(all_abilities[ability_key]['proc'], string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, string);
							}
							if(temp_any_effect_fired == true && battle_info.combat_units[unit_id] != undefined)
							{
								check_ability_delay(unit_id, ability_key);
							}
						}
					}
				}
			}
		});
	}
}

function check_unit_power(unit_id){
	var unit = battle_info.combat_units[unit_id];
	if(unit['power'] < 1 && unit['power'] !== false)
	{
		unit['power'] = 0;
	}

	var power = unit['power'];
	if(power !== false && unit['temp_power'] != undefined)
	{
		power += unit['temp_power'];
		if(power < 0){power = 0;}
	}
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + unit_id + ' .card_power').html(power);
	
		if(power === false)
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_power').addClass('hidden');
		}
		else
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_power').removeClass('hidden');
		}
	},total_timeout);
}

function calculate_effect(effect, target_id, origin_id, level){

	if(effect == undefined){return undefined;}
	var secondary_level = 1;
	if(typeof(level) == 'object'){
		secondary_level = level['level_2']
		var level = level['level'];
	}
	if(typeof(effect) == 'string')
	{
		var calculated_amount = effect;
	}
	else
	{
		var calculated_amount = effect['amount'];
	}

	if(calculated_amount == 'amount_reduced')
	{
		calculated_amount = amount_reduced;
	}

	if(battle_info.combat_units[origin_id] != undefined)
	{
		if(calculated_amount == 'origin_cost')
		{
			calculated_amount = battle_info.combat_units[origin_id]['time'];
		}

		if(calculated_amount == 'origin_power')
		{
			calculated_amount = battle_info.combat_units[origin_id]['power'];
			if(calculated_amount !== false && battle_info.combat_units[origin_id]['temp_power'] != undefined)
			{
				calculated_amount += battle_info.combat_units[origin_id]['temp_power'];
				if(calculated_amount < 0)
				{
					calculated_amount = 0;
				}
			}
		}

		if(calculated_amount == 'origin_armor')
		{
			calculated_amount = battle_info.combat_units[origin_id]['armor'];
		}

		if(calculated_amount == 'origin_max_health')
		{
			//console.log(battle_info.combat_units[origin_id]);
			calculated_amount = battle_info.combat_units[origin_id]['health'];
		}

		
		if(calculated_amount == 'ally_hand_card_count')
		{
			calculated_amount = count_hand_cards(battle_info['deck_' + battle_info.combat_units[origin_id]['side']]);
		}

		if(calculated_amount == 'enemy_hand_card_count')
		{
			if(battle_info.combat_units[origin_id]['side'] == 1)
			{
				calculated_amount = count_hand_cards(battle_info['deck_2']);
			}
			else
			{
				calculated_amount = count_hand_cards(battle_info['deck_1']);
			}
		}

		if(calculated_amount == 'enemy_unit_count')
		{
			if(battle_info.combat_units[origin_id]['side'] == 1)
			{
				calculated_amount = count_ally_units(2);
			}
			else
			{
				calculated_amount = count_ally_units(1);
			}
		}

		if(calculated_amount == 'ally_deck_card_count')
		{
			calculated_amount = count_deck_cards(battle_info['deck_' + battle_info.combat_units[origin_id]['side']]);
		}

		if(calculated_amount == 'ally_grave_creature_card_count')
		{
			calculated_amount = count_grave_cards(battle_info['deck_' + battle_info.combat_units[origin_id]['side']], 'creature');
		}

		if(calculated_amount == 'ally_burn_count')
		{
			var temp_amount = 0;
			$.each(battle_info['combat_units'], function(temp_unit_id, temp_unit_info){
				if(temp_unit_info['side'] == battle_info.combat_units[origin_id]['side'] && temp_unit_info['effects'] != undefined && temp_unit_info['effects']['burning'] != undefined && temp_unit_info['effects']['burning'] > 0)
				{
					temp_amount += temp_unit_info['effects']['burning'];
				}
			});
			calculated_amount = temp_amount;
		}

		if(calculated_amount == 'origin_energy')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['energy'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['energy'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}

		if(calculated_amount == 'origin_poison')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['poisoned'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['poisoned'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}

		if(calculated_amount == 'origin_burn')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['burning'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['burning'];
			}
			else
			{
				calculated_amount = 0;
			}
		}

		if(calculated_amount == 'origin_doom')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['doom'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['doom'];
			}
			else
			{
				calculated_amount = 0;
			}
		}

		if(calculated_amount == 'times_played')
		{
			calculated_amount = 0;
			//console.log(battle_info.combat_units[origin_id]);
			if(battle_info.combat_units[origin_id]['card_id'] != undefined && battle_info.combat_units[origin_id]['origin_side'] != undefined)
			{
				if(battle_info['deck_' + battle_info.combat_units[origin_id]['origin_side']][battle_info.combat_units[origin_id]['card_id']]['played'] != undefined)
				{
					calculated_amount = battle_info['deck_' + battle_info.combat_units[origin_id]['origin_side']][battle_info.combat_units[origin_id]['card_id']]['played'];
				}
			}
			//console.log(calculated_amount);
		}
	}

	if(battle_info.combat_units[target_id] != undefined)
	{
		if(calculated_amount == 'target_cost')
		{
			calculated_amount = battle_info.combat_units[target_id]['time'];
		}
		if(calculated_amount == 'target_power')
		{
			calculated_amount = battle_info.combat_units[target_id]['power'];
			if(calculated_amount !== false && battle_info.combat_units[target_id]['temp_power'] != undefined)
			{
				calculated_amount += battle_info.combat_units[target_id]['temp_power'];
				if(calculated_amount < 0)
				{
					calculated_amount = 0;
				}
			}
		}
		if(calculated_amount == 'target_health')
		{
			var current_total_hp = battle_info.combat_units[target_id]['current_health'];
			if(battle_info.combat_units[target_id]['temp_health'] != undefined)
			{
				current_total_hp += parseInt(battle_info.combat_units[target_id]['temp_health']);
			}
			calculated_amount = current_total_hp;
		}
		if(calculated_amount == 'target_max_health')
		{
			var current_max_hp = battle_info.combat_units[target_id]['health'];
			calculated_amount = current_max_hp;
		}
		if(calculated_amount == 'target_energy')
		{
			if(battle_info.combat_units[target_id]['effects'] != undefined && battle_info.combat_units[target_id]['effects']['energy'] != undefined)
			{
				calculated_amount = battle_info.combat_units[target_id]['effects']['energy'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}
		if(calculated_amount == 'target_slot')
		{
			calculated_amount = battle_info.combat_units[target_id]['slot'];
		}
		if(calculated_amount == 'ally_units_heroes_artifacts')
		{
			calculated_amount = count_ally_units(battle_info.combat_units[target_id]['side']) + count_ally_artifacts(battle_info.combat_units[target_id]['side']) + 1;
		}

		if(calculated_amount == 'target_ally_units')
		{
			calculated_amount = count_ally_units(battle_info.combat_units[target_id]['side']);
		}

		if(calculated_amount == 'adjacent_structure_count')
		{
			calculated_amount = count_adjacent(battle_info.combat_units[target_id]['slot'], battle_info.combat_units[target_id]['side'], 'structure');
		}

		if(calculated_amount == 'adjacent_creature_count')
		{
			calculated_amount = count_adjacent(battle_info.combat_units[target_id]['slot'], battle_info.combat_units[target_id]['side'], 'creature');
		}

		if(calculated_amount == 'adjacent_count')
		{
			calculated_amount = count_adjacent(battle_info.combat_units[target_id]['slot'], battle_info.combat_units[target_id]['side']);
		}

		if(calculated_amount == 'target_burn')
		{
			if(battle_info.combat_units[target_id]['effects'] != undefined && battle_info.combat_units[target_id]['effects']['burning'] != undefined)
			{
				calculated_amount = battle_info.combat_units[target_id]['effects']['burning'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}

		if(calculated_amount == 'target_poison')
		{
			if(battle_info.combat_units[target_id]['effects'] != undefined && battle_info.combat_units[target_id]['effects']['poisoned'] != undefined)
			{
				calculated_amount = battle_info.combat_units[target_id]['effects']['poisoned'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}
	}

	if(calculated_amount == 'units_in_play')
	{
		calculated_amount = count_ally_units(1) + count_ally_units(2);
	}
	
	if(calculated_amount == 'ability_level')
	{
		calculated_amount = level;
	}

	if(calculated_amount == 'ability_level_2')
	{
		calculated_amount = secondary_level;
	}

	if(calculated_amount == 'latest_result')
	{
		calculated_amount = latest_result;
	}

	// *****************************************************************************

	if(effect['amount_factor'] != undefined)
	{
		if(effect['amount_factor'] == 'ability_level')
		{
			calculated_amount  = /*round_by_percent*/(calculated_amount * level);
		}
		else
		{
			calculated_amount  = /*round_by_percent*/(calculated_amount * effect['amount_factor']);
		}
		
	}

	if(effect['amount_factors'] != undefined)
	{
		$.each(effect['amount_factors'], function(amount_factor_key, amount_factor_amount){
			if(amount_factor_amount == 'ability_level')
			{
				calculated_amount  = /*round_by_percent*/(calculated_amount * level);
			}
			else
			{
				calculated_amount  = /*round_by_percent*/(calculated_amount * amount_factor_amount);
			}
		});
	}

	if(effect['amount_adjustment'] != undefined)
	{
		calculated_amount += calculate_effect({amount:effect['amount_adjustment']}, target_id, origin_id, level);
	}

	if(effect['crit_chance'] != undefined && effect['crit_amount_factor'] != undefined && Math.random() * 100 <= effect['crit_chance'])
	{
		calculated_amount  = /*round_by_percent*/(calculated_amount * effect['crit_amount_factor']);
	}

	if(effect['crit_on_themes'] != undefined && effect['crit_amount_factor'] != undefined && target_id != undefined && battle_info.combat_units[target_id] != undefined && match_array_values(battle_info.combat_units[target_id]['theme'], effect['crit_on_themes']))
	{
		calculated_amount  = /*round_by_percent*/(calculated_amount * effect['crit_amount_factor']);
	}

	if(effect['crit_on_has_skills'] != undefined && effect['crit_amount_factor'] != undefined && target_id != undefined && battle_info.combat_units[target_id] != undefined)
	{
		$.each(effect['crit_on_has_skills'], function(crit_on_key, crit_on_skill){
			if(battle_info.combat_units[target_id]['abilities'] != undefined && battle_info.combat_units[target_id]['abilities'][crit_on_skill] != undefined)
			{
				calculated_amount  = /*round_by_percent*/(calculated_amount * effect['crit_amount_factor']);
			}
		})
	}

	if(calculated_amount > 0 && battle_info.combat_units[origin_id] != undefined && effect['scales'] != undefined && effect['scales'] == true)
	{
		if(battle_info.combat_units[origin_id]['origin_side'] == 1)
		{
			var effective_power_factor = get_effective_power_factor();
			if(calculated_amount * effective_power_factor >= 1)
			{
				calculated_amount = round_by_percent(calculated_amount * effective_power_factor);
			}
			else
			{
				calculated_amount = Math.ceil(calculated_amount * effective_power_factor);
			}
		}
		if(battle_info.combat_units[origin_id]['origin_side'] == 2)
		{
			var total_ability_factor = get_upgrade_factor('ability_effect',effect['subtypes']);
			calculated_amount = (calculated_amount * total_ability_factor);
		}
	}
	if(battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['origin_side'] == 2)
	{
		var total_ability_factor = get_upgrade_factor(effect['type'],effect['subtypes']);
		/*if(effect['type'] != undefined)
		{
			console.log(effect['type'] + ': ' + total_ability_factor);
		}*/
		if(total_ability_factor != 1)
		{
			calculated_amount = round_by_percent(calculated_amount * total_ability_factor);
		}
	}

	if(typeof(calculated_amount) == 'number')
	{
		if(effect['amount_rounding'] != undefined)
		{
			switch(effect['amount_rounding']){
				case 'down':
					calculated_amount = Math.floor(calculated_amount);
					break;
				case 'random':
					calculated_amount = round_by_percent(calculated_amount);
					break;
				default:
					calculated_amount = Math.ceil(calculated_amount);
			}
		}
		else
		{
			calculated_amount = Math.ceil(calculated_amount);
		}
		if(effect['max_amount'] != undefined)
		{
			if(effect['max_amount'] == 'ability_level' && level != undefined && calculated_amount > level)
			{
				calculated_amount = level;
			}
			if(typeof(effect['max_amount']) == 'number' && calculated_amount > effect['max_amount'])
			{
				calculated_amount = effect['max_amount'];
			}
		}
	}

	return calculated_amount;
}

function count_adjacent(slot, side, type){
	var adjacent_count = 0;
	$.each(battle_info['combat_units'], function(unit_id, unit){
		if(unit['side'] == side && (unit['slot'] == slot + 1 || unit['slot'] == slot - 1) && (type == undefined || unit['type'] == type))
		{
			adjacent_count++;
		}
	});
	return adjacent_count;
}

function find_targets(unit_id, target_peramaters, origin_id, level, current_ability, added_targets){

	if(all_targets == undefined)
	{
		var all_targets = {};
	}
	var current_unit = battle_info.combat_units[unit_id];	

	if(target_peramaters['use_latest_slot'] != undefined && target_peramaters['use_latest_slot'] == true)
	{
		var current_unit = copyobject(battle_info.combat_units[unit_id]);
		current_unit['slot'] = latest_slot;
		latest_slot = -10;
	}

	if(target_peramaters['target'] == 'unit' || target_peramaters['target'] == 'unit_or_hero' || target_peramaters['target'] == 'hero' || target_peramaters['target'] == 'artifact' || target_peramaters['target'] == 'any')
	{
		// GET ALL TARGETS
		var target_side = 'any';
		var starting_slot = 1;
		var ending_slot = 5;
		if(target_peramaters['target'] == 'unit_or_hero' || target_peramaters['target'] == 'hero')
		{
			starting_slot = 0;
		}
		if(target_peramaters['target'] == 'hero')
		{
			ending_slot = 0;
		}
		if(target_peramaters['target'] == 'artifact')
		{
			starting_slot = -5;
			ending_slot = -1;
		}
		if(target_peramaters['target'] == 'any')
		{
			//console.log('any');
			starting_slot = -10;
			ending_slot = 5;
		}
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 2) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 1))
		{
			target_side = 2;
		}
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 1) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 2))
		{
			target_side = 1;
		}

		var all_targets_slot = get_highest_key_in_object(all_targets) + 1;
		if(target_peramaters['from_right'] == undefined || target_peramaters['from_right'] == false)
		{
			for(var slot = starting_slot;slot <= ending_slot;slot++)
			{
				
				$.each(battle_info.combat_units, function(unit_id, unit_info){
					if((unit_info['side'] == target_side || target_side == 'any') && unit_info['slot'] == slot)
					{
						all_targets[all_targets_slot] = unit_info['unit_id'];
						all_targets_slot++;
					}
				});
			}
		}
		else
		{
			for(var slot = ending_slot;slot >= starting_slot;slot--)
			{
				
				$.each(battle_info.combat_units, function(unit_id, unit_info){
					if((unit_info['side'] == target_side || target_side == 'any') && unit_info['slot'] == slot)
					{
						all_targets[all_targets_slot] = unit_info['unit_id'];
						all_targets_slot++;
					}
				});
			}
		}

		if(target_peramaters['origin_unit'] != undefined && target_peramaters['origin_unit'] == true)
		{
			var found_origin = false;
			$.each(all_targets, function(target_id, unit_id){
				if(unit_id == origin_id)
				{
					all_targets = {0:origin_id};
					found_origin = true;
				}
			});
			if(found_origin == false)
			{
				all_targets = {};
			}
		}

		if(target_peramaters['not_self'] != undefined && target_peramaters['not_self'] == true)
		{
			all_targets = filter_targets_by_not_self(all_targets, unit_id);
		}
		
		all_targets = filter_targets_by_immunities(all_targets, unit_id, current_ability, origin_id);

		if(target_peramaters['specific_slots'] != undefined)
		{
			$.each(all_targets, function(all_slots_id, temp_unit_id){
				if(match_array_values(battle_info['combat_units'][temp_unit_id]['slot'], target_peramaters['specific_slots']) == false)
				{
					delete all_targets[all_slots_id];
				}
			});
		}
		
		if(target_peramaters['has_origin_card'] != undefined)
		{
			all_targets = filter_targets_by_has_origin_card(all_targets, target_peramaters['has_origin_card']);
		}

		if(target_peramaters['not_types'] != undefined)
		{
			all_targets = filter_targets_by_not_types(all_targets, target_peramaters['not_types']);
		}

		if(target_peramaters['subtypes'] != undefined)
		{
			all_targets = filter_targets_by_subtypes(all_targets, target_peramaters['subtypes']);
		}

		if(target_peramaters['not_subtypes'] != undefined)
		{
			all_targets = filter_targets_by_not_subtypes(all_targets, target_peramaters['not_subtypes']);
		}

		if(target_peramaters['card_ids'] != undefined)
		{
			all_targets = filter_targets_by_card_ids(all_targets, target_peramaters['card_ids'], false);
		}

		if(target_peramaters['not_card_ids'] != undefined)
		{
			all_targets = filter_targets_by_card_ids(all_targets, target_peramaters['not_card_ids'], true);
		}

		if(target_peramaters['has_ability'] != undefined)
		{
			all_targets = filter_targets_by_has_ability(all_targets, target_peramaters['has_ability']);
		}

		if(target_peramaters['has_theme'] != undefined)
		{
			all_targets = filter_targets_by_has_theme(all_targets, target_peramaters['has_theme']);
		}
		
		
		if(target_peramaters['does_not_have_ability'] != undefined)
		{
			all_targets = filter_targets_by_does_not_have_ability(all_targets, target_peramaters['does_not_have_ability']);
		}

		if(target_peramaters['max_abilities'] != undefined)
		{
			all_targets = filter_targets_by_max_abilities(all_targets, target_peramaters['max_abilities'], level);
		}


		if(target_peramaters['is_transformed'] != undefined && target_peramaters['is_transformed'] == true)
		{
			all_targets = filter_targets_by_is_transformed(all_targets);
		}

		if(target_peramaters['damaged'] != undefined && target_peramaters['damaged'] == true)
		{
			all_targets = filter_targets_by_damaged(all_targets);
		}

		if(target_peramaters['damaged'] != undefined && target_peramaters['damaged'] == false)
		{
			all_targets = filter_targets_by_not_damaged(all_targets);
		}

		if(target_peramaters['has_negative_effect'] != undefined && target_peramaters['has_negative_effect'] == true)
		{
			all_targets = filter_targets_by_has_negative_effect(all_targets);
		}

		if(target_peramaters['has_effect'] != undefined)
		{
			all_targets = filter_targets_by_has_effect(all_targets, target_peramaters['has_effect'], level);
		}

		if(target_peramaters['not_stunned'] != undefined)
		{
			all_targets = filter_targets_by_not_stunned(all_targets, target_peramaters['not_stunned']);
		}

		if(target_peramaters['min_cost'] != undefined && target_peramaters['min_cost'] != 0)
		{
			all_targets = filter_targets_by_min_cost(all_targets, target_peramaters['min_cost'], origin_id, level);
		}

		if(target_peramaters['max_cost'] != undefined && target_peramaters['max_cost'] != 0)
		{
			all_targets = filter_targets_by_max_cost(all_targets, target_peramaters['max_cost'], origin_id, level);
		}

		if(target_peramaters['min_hp'] != undefined)
		{
			all_targets = filter_targets_by_min_hp(all_targets, target_peramaters['min_hp']);
		}

		if(target_peramaters['min_total_hp'] != undefined)
		{
			all_targets = filter_targets_by_min_total_hp(all_targets, target_peramaters['min_total_hp']);
		}

		if(target_peramaters['max_hp'] != undefined)
		{
			all_targets = filter_targets_by_max_hp(all_targets, target_peramaters['max_hp'], origin_id, level);
		}

		if(target_peramaters['min_armor'] != undefined && target_peramaters['min_armor'] > 0)
		{
			all_targets = filter_targets_by_min_armor(all_targets, target_peramaters['min_armor']);
		}

		if(target_peramaters['max_armor'] != undefined)
		{
			all_targets = filter_targets_by_max_armor(all_targets, calculate_effect({amount:target_peramaters['max_armor']}, unit_id, origin_id, level));
		}

		if(target_peramaters['min_power'] != undefined && target_peramaters['min_power'] >= 0)
		{
			all_targets = filter_targets_by_min_power(all_targets, target_peramaters['min_power']);
		}

		if(target_peramaters['max_power'] != undefined)
		{
			all_targets = filter_targets_by_max_power(all_targets, calculate_effect({amount:target_peramaters['max_power']}, unit_id, origin_id, level));
		}

		if(target_peramaters['has_opposing'] != undefined && target_peramaters['has_opposing'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets);
		}

		if(target_peramaters['has_opposing'] != undefined && target_peramaters['has_opposing'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets);
		}

		if(target_peramaters['has_opposing_creature'] != undefined && target_peramaters['has_opposing_creature'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets, 'creature');
		}

		if(target_peramaters['has_opposing_creature'] != undefined && target_peramaters['has_opposing_creature'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets, 'creature');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets, 'structure');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets, 'structure');
		}

		if(target_peramaters['has_adjacent_creature'] != undefined && target_peramaters['has_adjacent_creature'] == true)
		{
			all_targets = filter_targets_by_has_adjacent(all_targets, 'creature');
		}

		if(target_peramaters['has_adjacent_creature'] != undefined && target_peramaters['has_adjacent_creature'] == false)
		{
			all_targets = filter_targets_by_has_no_adjacent(all_targets, 'creature');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets, 'structure');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets, 'structure');
		}

		if(target_peramaters['slot_free'] != undefined && target_peramaters['slot_free'] == true)
		{
			all_targets = filter_targets_by_slot_free(all_targets);
		}

		
		

		if(target_peramaters['position'] != undefined)
		{
			all_targets = filter_targets_by_position(all_targets, unit_id, target_peramaters['position'], current_unit['slot']);
		}

		if(target_peramaters['lowest_power'] != undefined && target_peramaters['lowest_power'] == true)
		{
			all_targets = filter_targets_by_lowest_power(all_targets);
		}

		if(target_peramaters['highest_power'] != undefined && target_peramaters['highest_power'] == true)
		{
			all_targets = filter_targets_by_highest_power(all_targets);
		}

		if(target_peramaters['lowest_hp'] != undefined && target_peramaters['lowest_hp'] == true)
		{
			all_targets = filter_targets_by_lowest_hp(all_targets);
		}

		if(target_peramaters['highest_hp'] != undefined && target_peramaters['highest_hp'] == true)
		{
			all_targets = filter_targets_by_highest_hp(all_targets);
		}

		if(target_peramaters['highest_max_hp'] != undefined && target_peramaters['highest_max_hp'] == true)
		{
			all_targets = filter_targets_by_highest_max_hp(all_targets);
		}

		if(target_peramaters['highest_armor'] != undefined && target_peramaters['highest_armor'] == true)
		{
			all_targets = filter_targets_by_highest_armor(all_targets);
		}

		if(target_peramaters['highest_cost'] != undefined && target_peramaters['highest_cost'] == true)
		{
			all_targets = filter_targets_by_highest_cost(all_targets);
		}

		if(target_peramaters['lowest_cost'] != undefined && target_peramaters['lowest_cost'] == true)
		{
			all_targets = filter_targets_by_lowest_cost(all_targets);
		}

		if(match_array_values(current_ability['proc'], ['redirect']) == false)
		{
			all_targets = filter_targets_by_redirect(all_targets, current_ability, origin_id);
		}
	}

	if(target_peramaters['target'] == 'card')
	{
		var target_side = current_unit['side'];
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 2) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 1))
		{
			target_side = 2;
		}
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 1) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 2))
		{
			target_side = 1;
		}
		var all_targets_slot = 0;
		if(target_peramaters['status'] != 'hand')
		{
			$.each(battle_info['deck_' + target_side], function(card_id, card_info){
				if((card_info['status'] == target_peramaters['status'] || target_peramaters['status'] == 'any') && (target_peramaters['status'] != 'hand' || card_info['time_left'] > 0 || target_peramaters['can_target_zero'] != undefined))
				{
					all_targets[all_targets_slot] = card_id;
					all_targets_slot++;
				}
			});
		}
		else
		{
			for (var hand_slot = 1; hand_slot <= 10; hand_slot++) {
				$.each(battle_info['deck_' + target_side], function(card_id, card_info){
					if(card_info['hand_slot'] == hand_slot && (card_info['status'] == target_peramaters['status'] || target_peramaters['status'] == 'any') && (target_peramaters['status'] != 'hand' || card_info['time_left'] > 0 || target_peramaters['can_target_zero'] != undefined))
					{
						all_targets[all_targets_slot] = card_id;
						all_targets_slot++;
					}
				});
			};
		}

		if(target_peramaters['origin_unit'] != undefined && target_peramaters['origin_unit'] == true)
		{
			var found_origin = false;
			$.each(all_targets, function(target_id, unit_id){
				if(unit_id == origin_id)
				{
					all_targets = {0:origin_id};
					found_origin = true;
				}
			});
			if(found_origin == false)
			{
				all_targets = {};
			}
		}

		if(target_peramaters['max_abilities'] != undefined)
		{
			all_targets = filter_target_cards_by_max_abilities(all_targets, target_peramaters['max_abilities'], level, target_side);
		}

		if(target_peramaters['types'] != undefined)
		{
			filter_targets_by_card_type(all_targets, target_peramaters['types'], target_side);
		}

		if(target_peramaters['highest_time_left'] != undefined && target_peramaters['highest_time_left'] == true)
		{
			all_targets = filter_targets_by_highest_time_left(all_targets, target_side);
		}

		if(target_peramaters['lowest_time_left'] != undefined && target_peramaters['lowest_time_left'] == true)
		{
			all_targets = filter_targets_by_lowest_time_left(all_targets, target_side);
		}

		if(target_peramaters['lowest_cost'] != undefined && target_peramaters['lowest_cost'] == true)
		{
			all_targets = filter_targets_by_lowest_cost_card(all_targets, target_side);
		}
		
	}

	if(target_peramaters['add_targets'] != undefined && target_peramaters['add_targets'] == true && added_targets != undefined && count_object(added_targets) > 0)
	{
		$.each(added_targets, function(added_id, added_target){
			all_targets[get_highest_key_in_object(all_targets)+1] = added_target;
		});
	}

	var target_amount = calculate_effect({amount:target_peramaters['target_amount']}, undefined, unit_id, level);

	if(count_object(all_targets) > target_amount)
	{
		for (var i = (count_object(all_targets) - target_amount) - 1; i >= 0; i--) {
			delete all_targets[get_random_key_from_object(all_targets)];
		};
	}

	return all_targets;
}

function filter_targets_by_redirect(all_targets, current_ability, origin_id){
	var prime_targets_present = false;
	var prime_types = [];
	if(current_ability['effects'] != undefined && current_ability['effects'][0] != undefined && current_ability['effects'][0]['subtypes'] != undefined)
	{
		prime_types = current_ability['effects'][0]['subtypes'];
	}
	var allready_redirected = {};

	$.each(all_targets, function(target_id, target_card_id){
		if(count_object(allready_redirected) == 0)
		{
			for (var i = -5; i <= 5; i++) {		
				$.each(battle_info['combat_units'], function(unit_id, unit_info){
					if(unit_info['slot'] == i)
					{
						$.each(unit_info['abilities'], function(ability_id, ability_level){
							if((all_abilities[ability_id]['proc_chance'] == undefined || all_abilities[ability_id]['proc_chance'] >= Math.random() * 100) && match_array_values(all_abilities[ability_id]['proc'], ['redirect']) == true && match_array_values(prime_types, all_abilities[ability_id]['subtypes']) == true && allready_redirected[target_id] == undefined && check_ability_can_fire(unit_id, all_abilities[ability_id], ability_level, target_id) == true)
							{
								var redirect_from_targets = find_targets(unit_id, all_abilities[ability_id]['from_targets'], target_card_id, ability_level, all_abilities[ability_id]);
								$.each(redirect_from_targets, function(redirect_from_target_id, redirect_from_target_unit_id){
									if(redirect_from_target_unit_id == target_card_id)
									{
										var redirect_to_targets = find_targets(unit_id, all_abilities[ability_id]['to_target'], origin_id, ability_level, all_abilities[ability_id]);
										//console.log(redirect_to_targets);
										if(count_object(redirect_to_targets) > 0)
										{
											all_targets[target_id] = redirect_to_targets[get_random_key_from_object(redirect_to_targets)];
											allready_redirected[target_id] = true;
											if(all_abilities[ability_id]['reduce_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
											{
												grant_skill(unit_id, unit_id, -1, all_abilities[ability_id]['reduce_skill_after_use'], false);
												check_visible_skills(unit_id);
											}
											if(all_abilities[ability_id]['remove_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
											{
												set_skill(unit_id, unit_id, 0, all_abilities[ability_id]['remove_skill_after_use'], false);
												check_visible_skills(unit_id);
											}
										}
									}
								});
								
							}
						});
					};
				});
			};
		}
	});

	return all_targets;
}

function filter_targets_by_has_origin_card(all_targets, has_origin_card){
	$.each(all_targets, function(target_id, target_card_id){
		if((has_origin_card == undefined || has_origin_card == true) && battle_info.combat_units[target_card_id]['card_id'] == undefined)
		{
			delete all_targets[target_id];
		}
		if((has_origin_card != undefined && has_origin_card == false) && battle_info.combat_units[target_card_id]['card_id'] != undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_slot_free(all_targets){
	$.each(all_targets, function(target_id, target_card_id){
		
		if(check_slot_free(battle_info.combat_units[target_card_id]['slot'], battle_info.combat_units[target_card_id]['side']) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_self(all_targets, unit_id){
	$.each(all_targets, function(target_id, target_card_id){
		
		if(target_card_id == unit_id)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_has_theme(all_targets, has_theme){
	$.each(all_targets, function(target_id, target_card_id){
		
		if(match_array_values(battle_info.combat_units[target_card_id]['theme'], has_theme) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_has_ability(all_targets, has_ability){
	$.each(all_targets, function(target_id, target_card_id){
		
		if(battle_info.combat_units[target_card_id]['abilities'][has_ability] == undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_does_not_have_ability(all_targets, has_ability){
	$.each(all_targets, function(target_id, target_card_id){
		
		if(battle_info.combat_units[target_card_id]['abilities'][has_ability] != undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_max_abilities(all_targets, max_abilities, level){
	$.each(all_targets, function(target_id, target_card_id){
		$.each(max_abilities, function(ability_id, ability_level){
			var max_level = ability_level;
			if(max_level == 'ability_level'){max_level = level - 1;}
			if(battle_info.combat_units[target_card_id]['abilities'][ability_id] != undefined && battle_info.combat_units[target_card_id]['abilities'][ability_id] > max_level)
			{
				delete all_targets[target_id];
			}
		});
	});

	return all_targets;
}

function filter_target_cards_by_max_abilities(all_targets, max_abilities, level, target_side){
	$.each(all_targets, function(target_id, target_card_id){
		var current_card = all_available_cards[battle_info['deck_' + target_side][target_card_id]['card_id']];
		$.each(max_abilities, function(ability_id, ability_level){
			var max_level = ability_level;
			if(max_level == 'ability_level'){max_level = level - 1;}
			if(current_card['abilities'][ability_id] != undefined && current_card['abilities'][ability_id] > max_level)
			{
				delete all_targets[target_id];
			}
		});
	});

	return all_targets;
}


function filter_targets_by_immunities(all_targets, unit_id, current_ability, origin_id){
	
	$.each(all_targets, function(target_id, target_card_id){	
		var target_immune = false;
		$.each(battle_info.combat_units[target_card_id]['abilities'], function(ability_id, ability_level){
			var immunities = all_abilities[ability_id]['grants_immunities'];
			$.each(current_ability['effects'], function(effect_id, effect){	
				if(immunities != undefined && (match_array_values(immunities, [effect['type']]) == true || match_array_values(immunities, effect['subtypes']) == true || (battle_info.combat_units[origin_id] != undefined && match_array_values(immunities, [battle_info.combat_units[origin_id]['type']]) == true)))
				{
					target_immune = true;
				}
			});
			
			if(all_abilities[ability_id]['negated_by_ability'] != undefined && battle_info.combat_units[origin_id] != undefined)
			{	
				$.each(battle_info.combat_units[origin_id]['abilities'], function(ability_key, useless_data){
					if(ability_key == all_abilities[ability_id]['negated_by_ability'])
					{
						target_immune = false;
					}
				});
			}
		});
		if(target_immune == true)
		{
			delete all_targets[target_id];
		}
	});


	return all_targets;
}

function filter_targets_by_highest_time_left(all_targets, side){
	var highest_cost = false;
	$.each(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] > highest_cost || highest_cost == false)
		{
			highest_cost = battle_info['deck_' + side][target_card_id]['time_left'];
		}
	});
	$.each(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] < highest_cost)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_time_left(all_targets, side){
	var lowest_cost = false;
	$.each(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] < lowest_cost || lowest_cost == false)
		{
			lowest_cost = battle_info['deck_' + side][target_card_id]['time_left'];
		}
	});
	$.each(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] > lowest_cost)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_card_type(all_targets, types, side){
	$.each(all_targets, function(target_id, target_card_id){
		
		var card_type_array = [all_available_cards[battle_info['deck_' + side][target_card_id]['card_id']]['type']];
		if(match_array_values(card_type_array, types) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_types(all_targets, types){
	$.each(all_targets, function(target_id, target_unit_id){
		var card_type_array = [battle_info.combat_units[target_unit_id]['type']];
		if(match_array_values(card_type_array, types) == true)
		{
			delete all_targets[target_id];
		}
		if(match_array_values(['hero'], types) == true && (target_unit_id == 1 || target_unit_id == 2))
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_subtypes(all_targets, subtypes){
	$.each(all_targets, function(target_id, target_unit_id){
		var card_type_array = battle_info.combat_units[target_unit_id]['subtypes'];
		if(card_type_array == undefined || match_array_values(card_type_array, subtypes) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_subtypes(all_targets, subtypes){
	$.each(all_targets, function(target_id, target_unit_id){
		var card_type_array = battle_info.combat_units[target_unit_id]['subtypes'];
		if(card_type_array != undefined && match_array_values(card_type_array, subtypes) == true)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_card_ids(all_targets, ids, filter_this){
	$.each(all_targets, function(target_id, target_unit_id){
		var card_type_array = [battle_info.combat_units[target_unit_id]['card_type']];
		if(match_array_values(card_type_array, ids) == filter_this)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_card_ids(all_targets, ids){
	$.each(all_targets, function(target_id, target_unit_id){
		var card_type_array = [battle_info.combat_units[target_unit_id]['name']];
		if(match_array_values(card_type_array, ids) == true)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}


function filter_targets_by_damaged(all_targets){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['current_health'] >= battle_info.combat_units[target_unit_id]['health'])
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_damaged(all_targets){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['current_health'] != battle_info.combat_units[target_unit_id]['health'])
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_is_transformed(all_targets){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['original_card_type'] == undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_has_negative_effect(all_targets){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['effects'] == undefined ||
		((battle_info.combat_units[target_unit_id]['effects']['burning'] == undefined || battle_info.combat_units[target_unit_id]['effects']['burning'] == 0) &&
			(battle_info.combat_units[target_unit_id]['effects']['poisoned'] == undefined || battle_info.combat_units[target_unit_id]['effects']['poisoned'] == 0) &&
			(battle_info.combat_units[target_unit_id]['effects']['cursed'] == undefined || battle_info.combat_units[target_unit_id]['effects']['cursed'] == 0) &&
			(battle_info.combat_units[target_unit_id]['effects']['doom'] == undefined || battle_info.combat_units[target_unit_id]['effects']['doom'] == 0) /* &&
			(battle_info.combat_units[target_unit_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_unit_id]['effects']['stunned'] == 0)*/))
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}


function filter_targets_by_has_effect(all_targets, effect_paramaters, level){
	var real_amount = effect_paramaters['amount'];
	if(real_amount == 'ability_level'){real_amount = level;};
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['effects'] == undefined && real_amount != 0 && effect_paramaters['limit'] == 'min')
		{
			delete all_targets[target_id];
		}
		else
		{
			if(battle_info.combat_units[target_unit_id]['effects'][effect_paramaters['effect_name']] == undefined && real_amount != 0 && effect_paramaters['limit'] == 'min')
			{
				delete all_targets[target_id];
			}
			$.each(battle_info.combat_units[target_unit_id]['effects'], function(effect_name, effect_amount){
				var temp_amount = real_amount;
				if(temp_amount == 'ability_level' && level != undefined)
				{
					temp_amount = level;
				}
				if(effect_paramaters['effect_name'] == effect_name && ((effect_amount >= temp_amount && effect_paramaters['limit'] == 'less') || (effect_amount > temp_amount && effect_paramaters['limit'] == 'max') || (effect_amount < temp_amount && effect_paramaters['limit'] == 'min')))
				{
					delete all_targets[target_id];
				}
			});
		}
	});

	return all_targets;
}

function filter_targets_by_not_stunned(all_targets, effect_paramaters){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['effects']['stunned'] != undefined && battle_info.combat_units[target_unit_id]['effects']['stunned'] > 0)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_min_cost(all_targets, min_cost, origin_id, level){
	$.each(all_targets, function(target_id, target_unit_id){
		var real_min_cost = calculate_effect(min_cost, target_id, origin_id, level);
		if(battle_info.combat_units[target_unit_id]['time'] < real_min_cost)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_cost(all_targets, max_cost, origin_id, level){
	$.each(all_targets, function(target_id, target_unit_id){
		var real_max_cost = calculate_effect(max_cost, target_id, origin_id, level);
		if(battle_info.combat_units[target_unit_id]['time'] > real_max_cost)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_min_hp(all_targets, min_hp){
	$.each(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += battle_info.combat_units[target_unit_id]['temp_health'];
		}
		if(current_total_hp < min_hp && current_total_hp !== false/* && (battle_info.combat_units[target_unit_id]['slot'] != 0 || battle_info.combat_units[target_unit_id]['current_health'] > 0)*/)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_min_total_hp(all_targets, min_hp){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['health'] < min_hp && battle_info.combat_units[target_unit_id]['health'] !== false/* && (battle_info.combat_units[target_unit_id]['slot'] != 0 || battle_info.combat_units[target_unit_id]['current_health'] > 0)*/)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_hp(all_targets, max_hp, origin_id, level){
	$.each(all_targets, function(target_id, target_unit_id){
		var current_max_hp = calculate_effect({amount:max_hp}, target_unit_id, origin_id, level);
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += battle_info.combat_units[target_unit_id]['temp_health'];
		}
		if(current_total_hp > current_max_hp)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_min_armor(all_targets, min_armor){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] < min_armor)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_armor(all_targets, min_armor){
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] >= min_armor)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}


function filter_targets_by_min_power(all_targets, min_power){
	$.each(all_targets, function(target_id, target_unit_id){
		var current_power = calculate_effect({amount:'target_power'}, target_unit_id, undefined, undefined);
		if(current_power < min_power || current_power === false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_power(all_targets, max_power){
	$.each(all_targets, function(target_id, target_unit_id){
		var current_power = calculate_effect({amount:'target_power'}, target_unit_id, undefined, undefined);
		if(current_power > max_power)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_lowest_hp(all_targets){
	var lowest_hp = false;
	$.each(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp < lowest_hp || lowest_hp == false)
		{
			lowest_hp = current_total_hp;
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp > lowest_hp)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_hp(all_targets){
	var highest_hp = false;
	$.each(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp > highest_hp || highest_hp == false)
		{
			highest_hp = current_total_hp;
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp < highest_hp)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_max_hp(all_targets){
	var highest_hp = false;
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['health'] > highest_hp || highest_hp == false)
		{
			highest_hp = battle_info.combat_units[target_unit_id]['health'];
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['health'] < highest_hp)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_armor(all_targets){
	var highest_armor = false;
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] > highest_armor || highest_armor == false)
		{
			highest_armor = battle_info.combat_units[target_unit_id]['armor'];
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] < highest_armor)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_power(all_targets){
	var lowest_power = false;
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] < lowest_power || lowest_power == false)
		{
			if(battle_info.combat_units[target_unit_id]['power'] === false)
			{
				lowest_power = 0;
			}
			else
			{
				lowest_power = battle_info.combat_units[target_unit_id]['power'];
			}
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] > lowest_power)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_power(all_targets){
	var highest_power = false;
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] > highest_power || highest_power == false)
		{
			highest_power = battle_info.combat_units[target_unit_id]['power'];
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] < highest_power)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_cost(all_targets){
	var highest_cost = false;
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] > highest_cost || highest_cost == false)
		{
			highest_cost = battle_info.combat_units[target_unit_id]['time'];
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] < highest_cost)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_cost(all_targets){
	var lowest_cost = -1;
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] < lowest_cost || lowest_cost == -1)
		{
			lowest_cost = battle_info.combat_units[target_unit_id]['time'];
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] > lowest_cost && lowest_cost > -1)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_cost_card(all_targets, side){
	var lowest_cost = false;
	$.each(all_targets, function(target_id, target_unit_id){
		if(all_available_cards[battle_info['deck_' + side][target_unit_id]['card_id']]['time'] < lowest_cost || lowest_cost == false)
		{
			lowest_cost = all_available_cards[battle_info['deck_' + side][target_unit_id]['card_id']]['time'];
		}
	});
	$.each(all_targets, function(target_id, target_unit_id){
		if(all_available_cards[battle_info['deck_' + side][target_unit_id]['card_id']]['time'] > lowest_cost && lowest_cost != false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_has_no_opposing(all_targets, type){
	$.each(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] != battle_info.combat_units[target_unit_id]['side'] && unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == true)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_has_opposing(all_targets, type){
	$.each(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] != battle_info.combat_units[target_unit_id]['side'] && unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_has_adjacent(all_targets, type){
	$.each(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == battle_info.combat_units[target_unit_id]['side'] && (unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] + 1 || unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] - 1) && unit_info['slot'] != 0 && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_has_no_adjacent(all_targets, type){
	$.each(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == battle_info.combat_units[target_unit_id]['side'] && (unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] + 1 || unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] - 1) && unit_info['slot'] != 0 && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == true)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_position(all_targets, unit_id, position, origin_slot){

	if(origin_slot == undefined)
	{
		origin_slot = 0;
	}

	var temp_origin_slot = origin_slot + 0;
	if(temp_origin_slot < 0)
	{
		temp_origin_slot = 0;
	}

	if(position == 'self')
	{
		$.each(all_targets, function(target_id, target_unit_id){
			if(target_unit_id != unit_id)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'opposing')
	{
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] != temp_origin_slot)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'opposing_wide')
	{
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] > temp_origin_slot + 1 || battle_info.combat_units[target_unit_id]['slot'] < temp_origin_slot - 1)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'adjacent')
	{
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] != temp_origin_slot -1 &&
			battle_info.combat_units[target_unit_id]['slot'] != temp_origin_slot + 1)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'not_adjacent')
	{
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] == temp_origin_slot -1 ||
			battle_info.combat_units[target_unit_id]['slot'] == temp_origin_slot + 1)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'nearest')
	{
		var nearest = 10;
		$.each(all_targets, function(target_id, target_unit_id){
			var distance = battle_info.combat_units[target_unit_id]['slot'] - temp_origin_slot;
			if(distance < 0){distance *= -1;}
			if(distance < nearest)
			{
				nearest = distance;
			}
		});
		$.each(all_targets, function(target_id, target_unit_id){
			var distance = battle_info.combat_units[target_unit_id]['slot'] - temp_origin_slot;
			if(distance < 0){distance *= -1;}
			if(distance > nearest)
			{
				delete all_targets[target_id];
			}
		});
	}

	if(position == 'right')
	{
		var highest_slot = 0;
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] > highest_slot)
			{
				highest_slot = battle_info.combat_units[target_unit_id]['slot'];
			}
		});
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] < highest_slot)
			{
				delete all_targets[target_id];
			}
		});
	}

	if(position == 'left')
	{
		var lowest_slot = 10;
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] < lowest_slot)
			{
				lowest_slot = battle_info.combat_units[target_unit_id]['slot'];
			}
		});
		$.each(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] > lowest_slot)
			{
				delete all_targets[target_id];
			}
		});
	}

	return all_targets;
}

function process_combat_units(side, proc, do_not_process_effects){
	for(var unit_slot=-5;unit_slot<=5;unit_slot++)
	{
		$.each(battle_info.combat_units, function(unit_id, unit){
			if(unit['side'] == side && unit['acted_this_turn'] < 1 && unit['slot'] == unit_slot && combat_alive == true)
			{
				process_single_unit(unit_id, undefined, do_not_process_effects, proc);
				check_all_ready_cards();
			}
		});
	}

	var any_unit_left = false;
	$.each(battle_info.combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['acted_this_turn'] < 1)
		{
			any_unit_left = true;
		}
	});

	if(any_unit_left == true && combat_alive == true)
	{
		process_combat_units(side, proc, do_not_process_effects);
	}
}

function enable_all_units_to_act(reset_ability_use, side){
	$.each(battle_info.combat_units, function(unit_id, unit){
		if(side == undefined || unit['side'] == side)
		{
			unit['failed_to_act_this_phase'] = false;
			if(unit['acted_this_turn'] == undefined || unit['acted_this_turn'] > 0 || reset_ability_use == true)
			{
				unit['acted_this_turn'] = 0;
			}
			if(reset_ability_use != undefined && reset_ability_use == true)
			{
				unit['used_ability'] = false;
			}
		}
	});
}

function check_all_ready_cards(side){
	side = undefined;
	for(var t=1;t<=2;t++){
		if(side == undefined || side == t)
		{
			for(var slot_id=1;slot_id<=10;slot_id++){
				$.each(battle_info['deck_' + t], function(card_id, card_info){
					if(card_info['time_left'] <= 0 && card_info['status'] == 'hand' && card_info['hand_slot'] == slot_id && combat_alive == true)
					{
						play_card(t, card_id);
					}
				});
			};
		}
	};

	var no_ready_cards_left = true;
	for(var t=1;t<=2;t++){
		if(side == undefined || side == t)
		{
			$.each(battle_info['deck_' + t], function(card_id, card_info){
				if(card_info['time_left'] <= 0 && card_info['status'] == 'hand')
				{
					no_ready_cards_left = false;
				}
			});
		}
	};

	if(no_ready_cards_left == false && combat_alive == true)
	{
		check_all_ready_cards(side);
	}
}

function play_card(side, card_id, forced_play, origin_unit){
	

	var current_card_info = all_available_cards[battle_info['deck_' + side][card_id]['card_id']];

	var can_play = true;
	var not_side = 1;
	if(side == 1){not_side = 2;}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_allies'] != undefined && count_ally_units(side) < current_card_info['abilities']['minimum_allies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_ally_creatures'] != undefined && count_ally_units(side, 'creature') < current_card_info['abilities']['minimum_ally_creatures'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_dead_ally_creatures'] != undefined && count_grave_cards(battle_info['deck_' + side], 'creature') < current_card_info['abilities']['minimum_dead_ally_creatures'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_enemies'] != undefined && count_enemy_units(side) < current_card_info['abilities']['minimum_enemies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_enemy_creatures'] != undefined && count_enemy_units(side, 'creature') < current_card_info['abilities']['minimum_enemy_creatures'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_allies'] != undefined && count_ally_units(side) > current_card_info['abilities']['maximum_allies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_enemies'] != undefined && count_enemy_units(side) > current_card_info['abilities']['maximum_enemies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_units'] != undefined && count_units() < current_card_info['abilities']['minimum_units'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_units'] != undefined && count_units() > current_card_info['abilities']['maximum_units'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['no_allies'] != undefined && count_ally_units(side) > 0)
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_hero_health'] != undefined && (battle_info.combat_units[side]['current_health'] / battle_info.combat_units[side]['health']) * 100 > current_card_info['abilities']['maximum_hero_health'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['min_enemy_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + not_side]) < current_card_info['abilities']['min_enemy_hand_cards'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['min_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + side]) < current_card_info['abilities']['min_hand_cards'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['max_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + side]) > current_card_info['abilities']['max_hand_cards'])
	{
		can_play = false;
	}

	if(can_play == true)
	{
		var played_card = false;
		battle_info['deck_' + side][card_id]['status'] = 'in_play';

		if(current_card_info['type'] == 'creature' || current_card_info['type'] == 'structure' || current_card_info['type'] == 'object')
		{
			var prev_total_timeout = total_timeout;
			played_card = play_unit_card(side, battle_info['deck_' + side][card_id]['card_id'], card_id, forced_play, origin_unit);
			/*if(played_card == true)
			{
				battle_info['deck_' + side][card_id]['status'] = 'in_play';
				//if(played_card == true)
				
				var temp_hand_slot = battle_info['deck_' + side][card_id]['hand_slot'] + 0;
				var temp_side = side + 0;
				var temp_hand_slot_id = battle_info['deck_' + side][card_id]['hand_slot_id'] + 0;
				
				timeout_key ++;

				all_timeouts[timeout_key] = setTimeout(function(){
					$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side + '.hand_slot_id_' + temp_hand_slot_id).each(function(){
						this.remove();
						
					});
					
				},prev_total_timeout);
				total_timeout += 500 * battle_speed;
			}*/
			
		}

		if(current_card_info['type'] == 'artifact')
		{
			played_card = play_artifact_card(side, battle_info['deck_' + side][card_id]['card_id'], card_id);
		}

		if(current_card_info['type'] == 'spell' || current_card_info['type'] == 'attack' || current_card_info['type'] == 'consumable' /*|| current_card_info['type'] == 'artifact'*/)
		{
			played_card = play_action_card(side, battle_info['deck_' + side][card_id]['card_id'], card_id);
		}
		if(played_card == true)
		{
			update_deck_counts();
		}

	}
	else
	{
		var played_card = false;
	}

	if(played_card == true)
	{
		if(battle_info['deck_' + side][card_id]['played'] == undefined)
		{
			battle_info['deck_' + side][card_id]['played'] = 1;
		}
		else
		{
			battle_info['deck_' + side][card_id]['played'] += 1;
		}
	}
	
	
	if(played_card == false && battle_info['deck_' + side][card_id]['time_left'] < 1)
	{
		battle_info['deck_' + side][card_id]['status'] = 'hand';

		if(battle_info['deck_' + side][card_id]['time_left'] < 1)
		{
			battle_info['deck_' + side][card_id]['time_left'] = 1;
		}
			
		var temp_hand_slot = battle_info['deck_' + side][card_id]['hand_slot'] + 0;
		var temp_time_left = battle_info['deck_' + side][card_id]['time_left'] + 0;
		var temp_t = side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_' + temp_hand_slot + '.side_' + temp_t + ' .card_time').html(temp_time_left);
		},total_timeout);
		
	}
	else
	{
		check_ability_procs(side, 'card_played');
		if(origin_unit == undefined)
		{
			check_all_ready_cards();
		}
	}
	
}

function clone_unit(side, origin_id, stunned, origin_unit, effect_info){
    var played_card = false;
    	
    var card_id = battle_info.combat_units[origin_id]['card_type'];

	var free_slot = find_free_slot(side, card_id);

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = true_copyobject(battle_info.combat_units[origin_id]);
		/*$.each(battle_info.combat_units[origin_id], function(key, value){
		    if(key != 'effects' && key != 'abilities')
		    {
		        if(typeof(value) == 'object')
    		    {
    		        
    		        if(typeof(value) == 'object')
    		        {
    		            battle_info.combat_units[next_combat_unit_id][key] = true_copyobject(value);
    		        }
    		        else
    		        {
    		            battle_info.combat_units[next_combat_unit_id][key] = {};
        		        $.each(battle_info.combat_units[origin_id], function(subkey, subvalue){
        		            battle_info.combat_units[next_combat_unit_id][key][subkey] = subvalue;
        		        });
    		        }
    		    }
    		    else
    		    {
    		        battle_info.combat_units[next_combat_unit_id][key] = value;
    		    }
		    }
		});*/
		battle_info.combat_units[next_combat_unit_id]['abilities'] = {};
		$.each(battle_info.combat_units[origin_id]['abilities'], function(key, value){
			if(key != 'bring_clone' && (effect_info['remove_skills'] == undefined || match_array_values(effect_info['remove_skills'], key) == false))
			{
				battle_info.combat_units[next_combat_unit_id]['abilities'][key] = value;
			}
		});
		//copyobject(battle_info.combat_units[origin_id]);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = undefined;
		battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		//battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];
// 		if(battle_info.combat_units[next_combat_unit_id]['effects'] == undefined)
// 		{
		    //battle_info.combat_units[next_combat_unit_id]['effects'] = {};
		//}
		/*$.each(battle_info.combat_units[origin_id]['effects'], function(subkey, subvalue){
            battle_info.combat_units[next_combat_unit_id]['effects'][subkey] = subvalue;
        });*/
		
		if(stunned != undefined && stunned == true)
		{
			if(battle_info.combat_units[next_combat_unit_id]['effects']['stunned'] == undefined)
			{
			    battle_info.combat_units[next_combat_unit_id]['effects']['stunned'] = 1;
			}
			else
			{
			    battle_info.combat_units[next_combat_unit_id]['effects']['stunned'] += 1;
			}
		}
		played_card = true;
		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'];
		}
		var temp_slot_2 = '';
		if(origin_unit != undefined && battle_info.combat_units[origin_unit] != undefined && (battle_info.combat_units[origin_unit]['type'] == 'creature' || battle_info.combat_units[origin_unit]['type'] == 'structure' || battle_info.combat_units[origin_unit]['type'] == 'object'))
		{
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'slot_' + (battle_info.combat_units[origin_unit]['slot']), true);
			temp_slot_2 = 'slot_' + (battle_info.combat_units[origin_unit]['slot']);
		}
		else
		{
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot);
		}
			
		timeout_key ++;
		var temp_slot = battle_info.combat_units[next_combat_unit_id]['slot'];
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container').append(parsed_unit);
			setTimeout(function(){
				$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
				$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
				$('.unit_id_' + next_combat_unit_id).removeClass(temp_slot_2);
				$('.unit_id_' + next_combat_unit_id).addClass('slot_' + temp_slot);
			},50);
		},total_timeout);
		check_visible_skills(next_combat_unit_id);
		check_unit_power(next_combat_unit_id);
		check_unit_hp(next_combat_unit_id);
		update_passive_effects(next_combat_unit_id);
		total_timeout += 500 * battle_speed;
		$.each(battle_info.combat_units[next_combat_unit_id]['abilities'], function(ability_key, ability_level){
			if(match_array_values(all_abilities[ability_key]['proc'], ['on_play']) == true && ability_key != 'bring_clone')
			{
				if(true || battle_info.combat_units[next_combat_unit_id]['used_ability'] == undefined || battle_info.combat_units[next_combat_unit_id]['used_ability'] == false)
				{
					total_timeout += 500;
				}
				process_ability(next_combat_unit_id, all_abilities[ability_key], ability_level, undefined, 'on_play');
			}
		});
		//check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', next_combat_unit_id);
		//check_ability_procs(side, 'unit_card_played', next_combat_unit_id);
	}
	return played_card;
}

function turn_into(target_id, effect, origin_id, level){
	//console.log(effect['card_id']);
	if(battle_info.combat_units[target_id] != undefined && effect['card_id'] != undefined)
	{
		var original_unit = true_copyobject(battle_info.combat_units[target_id]);
		var original_unit_effects = true_copyobject(battle_info.combat_units[target_id]['effects']);
		var original_unit_blessed = 0;
		if(battle_info.combat_units[target_id]['abilities']['blessed'] != undefined)
		{
			original_unit_blessed += battle_info.combat_units[target_id]['abilities']['blessed'];
		}
		var original_card_type = battle_info.combat_units[target_id]['card_type'];
		var turns_into_id = effect['card_id'] + '';
		var card_subtypes = effect['card_subtypes'];
		if(effect['card_subtypes'] == 'target_subtypes')
		{
			card_subtypes = battle_info.combat_units[target_id]['subtypes'];
		}
		if(effect['additional_subtypes'] != undefined)
		{
			$.each(effect['additional_subtypes'], function(subtype_key, subtype){
				card_subtypes[get_highest_key_in_object(card_subtypes)+1] = subtype;
			});
		}
		if(turns_into_id == 'random')
		{
			turns_into_id = get_random_card_based_on_time(effect['card_type'], calculate_effect({amount:effect['max_time'], amount_adjustment:effect['max_time_adjustment']}, target_id, origin_id, level), undefined, undefined, card_subtypes, calculate_effect({amount:effect['min_time']}, target_id, origin_id, level), [original_card_type]);
		}
		if(turns_into_id != false)
		{
			var temp_new_unit = create_combat_unit(all_available_cards[turns_into_id], original_unit['side']);
			if(original_unit['slot'] == 0 && all_available_cards[turns_into_id]['hero_version'] != undefined)
			{
				temp_new_unit = create_hero(turns_into_id, original_unit['side']);
			}
			$.each(temp_new_unit, function(key, value){
				battle_info.combat_units[target_id][key] = value;
			});
			battle_info.combat_units[target_id]['card_type'] = turns_into_id;
			if(original_unit['original_card_type'] == undefined)
			{
				battle_info.combat_units[target_id]['original_card_type'] = original_card_type;
			}
			battle_info.combat_units[target_id]['current_health'] = battle_info.combat_units[target_id]['health'];
			$.each(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
				if(all_abilities[ability_id]['remove_on_transform'] != undefined && all_abilities[ability_id]['remove_on_transform'] == true)
				{
					delete battle_info.combat_units[target_id]['abilities'][ability_id];
				}
			});
			if(original_unit_blessed > 0 && (battle_info.combat_units[target_id]['abilities']['blessed'] == undefined || battle_info.combat_units[target_id]['abilities']['blessed'] < original_unit_blessed))
			{
				battle_info.combat_units[target_id]['abilities']['blessed'] = original_unit_blessed;
			}
			battle_info.combat_units[target_id]['effects'] = true_copyobject(original_unit_effects);
			battle_info.combat_units[target_id]['original_unit'] = true_copyobject(original_unit);
			var parsed_abilities = parse_abilities(target_id);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id + ' .card_image').css('background-image','url(images/' + temp_new_unit['image'] + ')');
				if(temp_new_unit['image_position'] != undefined)
				{
					$('.unit_id_' + target_id + ' .card_image').css('background-position',temp_new_unit['image_position']);
				}
				else
				{
					$('.unit_id_' + target_id + ' .card_image').css('background-position','');
				}
				$('.unit_id_' + target_id + ' .card_name').html(capitalizeFirstLetter(temp_new_unit['name']));
				$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
				$('.battle_container .unit_id_' + target_id + ' .card_color').removeClass('color_green color_blue color_purple color_red color_orange color_yellow color_colorless');
				
				if(count_object(temp_new_unit['color']) == 1)
				{
					$('.battle_container .unit_id_' + target_id + ' .card_color').addClass('color_' + temp_new_unit['color'][0]);
					$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_number_0_not');
					$('.battle_container .unit_id_' + target_id + ' .color_number_0').removeClass('color_number_0');
					$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('hidden');
				}
				else
				{
					$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_' + temp_new_unit['color'][0]);
					$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('color_' + temp_new_unit['color'][1]);
					$('.battle_container .unit_id_' + target_id + ' .color_number_1').removeClass('hidden');
				}
			},total_timeout);
			check_unit_hp(target_id);
			check_visible_skills(target_id);
			check_unit_power(target_id);
			update_passive_effects(target_id);
			total_timeout += 500 * battle_speed;
		}
	}
}

function turn_into_original(target_id, origin_id){
	if(battle_info.combat_units[target_id] != undefined && battle_info.combat_units[target_id]['original_card_type'] != undefined)
	{
		//var temp_new_unit = copyobject(battle_info.combat_units[target_id]['original_unit']);
		//console.log(temp_new_unit);
		//battle_info.combat_units[target_id] = temp_new_unit;
		//console.log(battle_info.combat_units[target_id]);
		var turns_into_id = battle_info.combat_units[target_id]['original_card_type'];
		//var temp_new_unit = create_combat_unit(all_available_cards[turns_into_id]);
		var temp_old_unit = true_copyobject(battle_info.combat_units[target_id]);
		var temp_new_unit = true_copyobject(battle_info.combat_units[target_id]['original_unit']);
		var original_unit_effects = true_copyobject(battle_info.combat_units[target_id]['effects']);
		battle_info.combat_units[target_id]['card_type'] = battle_info.combat_units[target_id]['original_card_type'];
		$.each(temp_new_unit, function(key, value){
			battle_info.combat_units[target_id][key] = value;
		});
		battle_info.combat_units[target_id]['slot'] = temp_old_unit['slot'];
		battle_info.combat_units[target_id]['side'] = temp_old_unit['side'];
		delete battle_info.combat_units[target_id]['original_card_type'];
		//console.log(battle_info.combat_units[target_id]);
		//battle_info.combat_units[target_id]['current_health'] = battle_info.combat_units[target_id]['health'];
		$.each(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
			if(all_abilities[ability_id]['remove_on_transform'] != undefined && all_abilities[ability_id]['remove_on_transform'] == true)
			{
				delete battle_info.combat_units[target_id]['abilities'][ability_id];
			}
		});
		battle_info.combat_units[target_id]['effects'] = true_copyobject(original_unit_effects);
		var parsed_abilities = parse_abilities(target_id);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id + ' .card_image').css('background-image','url(images/' + temp_new_unit['image'] + ')');
			if(temp_new_unit['image_position'] != undefined)
			{
				$('.unit_id_' + target_id + ' .card_image').css('background-position',temp_new_unit['image_position']);
			}
			else
			{
				$('.unit_id_' + target_id + ' .card_image').css('background-position','');
			}
			$('.unit_id_' + target_id + ' .card_name').html(capitalizeFirstLetter(temp_new_unit['name']));
			$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
			$('.battle_container .unit_id_' + target_id + ' .card_color').removeClass('color_green color_blue color_purple color_red color_orange color_yellow color_colorless');
			if(count_object(temp_new_unit['color']) == 1)
			{
				$('.battle_container .unit_id_' + target_id + ' .card_color').addClass('color_' + temp_new_unit['color'][0]);
				$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_number_0_not');
				$('.battle_container .unit_id_' + target_id + ' .color_number_0').removeClass('color_number_0');
				$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('hidden');
			}
			else
			{
				$('.battle_container .unit_id_' + target_id + ' .color_number_0_not').addClass('color_number_0');
				$('.battle_container .unit_id_' + target_id + ' .color_number_0_not').removeClass('color_number_0_not');
				$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_' + temp_new_unit['color'][0]);
				$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('color_' + temp_new_unit['color'][1]);
				$('.battle_container .unit_id_' + target_id + ' .color_number_1').removeClass('hidden');
			}
		},total_timeout);
		check_unit_hp(target_id);
		check_visible_skills(target_id);
		check_unit_power(target_id);
		update_passive_effects(target_id);
		total_timeout += 500 * battle_speed;

		return true;
	}
	else
	{
		return false;
	}
}

function play_unit_card(side, card_id, origin_id, forced_play, origin_unit){
	var played_card = false;

	var free_slot = find_free_slot(side, card_id);
	
	if((forced_play != undefined && free_slot == false) || (forced_play != undefined && forced_play != true))
	{
	    free_slot = find_free_slot(side, card_id, 'none', forced_play, undefined, origin_unit, undefined);
	}

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = create_combat_unit(all_available_cards[card_id], side);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['side'] = side;
		battle_info.combat_units[next_combat_unit_id]['origin_side'] = side;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = origin_id;
		battle_info.combat_units[next_combat_unit_id]['card_type'] = card_id;
		if(side == active_turn)
		{
			battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		}
		else
		{
			battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 1;
		}
		battle_info.combat_units[next_combat_unit_id]['used_ability'] = false;
		battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];
		

		played_card = true;
		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'];
		}
		var temp_slot_2 = '';
		var old_side = 'side_' + side;
		if(origin_unit != undefined && battle_info.combat_units[origin_unit] != undefined && (battle_info.combat_units[origin_unit]['type'] == 'creature' || battle_info.combat_units[origin_unit]['type'] == 'structure' || battle_info.combat_units[origin_unit]['type'] == 'object' || battle_info.combat_units[origin_unit]['type'] == 'spell' || battle_info.combat_units[origin_unit]['type'] == 'artifact'))
		{
			if(battle_info.combat_units[origin_unit]['side'] != side)
			{
				old_side = 'side_' + battle_info.combat_units[origin_unit]['side'];
			}
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'slot_' + (battle_info.combat_units[origin_unit]['slot'] + ' combat_unzoom ' + old_side), true);
			temp_slot_2 = 'slot_' + (battle_info.combat_units[origin_unit]['slot'] + ' combat_unzoom ' + old_side);
		}
		else
		{
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot, true);
		}
		
		timeout_key ++;
		var temp_slot = battle_info.combat_units[next_combat_unit_id]['slot'];

		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container').append(parsed_unit);
			$('.unit_id_' + next_combat_unit_id).removeClass('side_' + side);
			$('.unit_id_' + next_combat_unit_id).addClass(old_side);
		},total_timeout);
		timeout_key ++;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			var temp_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
			var temp_side = side + 0;
			var temp_hand_slot_id = battle_info['deck_' + side][origin_id]['hand_slot_id'] + 0;
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side + '.hand_slot_id_' + temp_hand_slot_id).each(function(){
					this.remove();	
				});
			},total_timeout);
			battle_info['deck_' + side][origin_id]['status'] = 'in_play';
		}

		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
			$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
			$('.unit_id_' + next_combat_unit_id).removeClass(temp_slot_2);
			$('.unit_id_' + next_combat_unit_id).removeClass(old_side);
			$('.unit_id_' + next_combat_unit_id).addClass('side_' + side);
			$('.unit_id_' + next_combat_unit_id).addClass('slot_' + temp_slot);	
		},total_timeout + 150);
		
		check_visible_skills(next_combat_unit_id);
		update_passive_effects(next_combat_unit_id);
		total_timeout += 1000 * battle_speed;
		if(battle_info.combat_units[origin_unit] != undefined){
			$.each(battle_info.combat_units[origin_unit]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['played_unit']) == true)
				{
					process_ability(origin_unit, all_abilities[ability_key], ability_level, next_combat_unit_id, undefined, 'played_unit');
				}
			});
		}
		check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', next_combat_unit_id);
		check_ability_procs(side, 'unit_card_played', next_combat_unit_id);
		if(side == 2)
		{
			check_quests(all_available_cards[card_id]['type'] + '_card_played');
			add_battle_stats(all_available_cards[card_id]['type'] + '_card_played');
			$.each(all_available_cards[card_id]['subtypes'], function(subtype_key, current_subtype){
				check_quests(current_subtype + '_card_played');
			});
		}
		if(battle_info.combat_units[next_combat_unit_id] != undefined)
		{
			$.each(battle_info.combat_units[next_combat_unit_id]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['on_play']) == true)
				{
					if(true || battle_info.combat_units[next_combat_unit_id]['used_ability'] == undefined || battle_info.combat_units[next_combat_unit_id]['used_ability'] == false)
					{
						total_timeout += 1000 * battle_speed;
					}
					if(battle_info.combat_units[next_combat_unit_id] != undefined)
					{
						process_ability(next_combat_unit_id, all_abilities[ability_key], ability_level, undefined, undefined, 'on_play');
					}
				}
			});
		}

		if(battle_info['deck_' + side][origin_id] != undefined && battle_info['deck_' + side][origin_id]['status'] == 'hand'){played_card = false;}
		
	}
	return played_card;
}

function play_action_card(side, card_id, origin_id, forced_play){
	var played_card = false;
	var free_slot = -10;

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = create_combat_unit(all_available_cards[card_id], side);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['side'] = side;
		battle_info.combat_units[next_combat_unit_id]['origin_side'] = side;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = origin_id;
		battle_info.combat_units[next_combat_unit_id]['card_type'] = card_id;
		battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		battle_info.combat_units[next_combat_unit_id]['used_ability'] = false;
		battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];

		played_card = true;

		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
		}
		var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot);
		
		var prev_total_timeout = total_timeout + 0;
		var show_spell_cast = false;
		
		//total_timeout += 100 * battle_speed;

		total_timeout += 1500 * battle_speed;

		check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_preplayed', next_combat_unit_id);

		//total_timeout -= 500 * battle_speed;

		var any_effect_fired = false;
		var spell_destroyed = false;
		if(battle_info.combat_units[next_combat_unit_id] != undefined)
		{
			any_effect_fired = process_single_unit(next_combat_unit_id, true);
		}
		else
		{
			spell_destroyed = true;
			any_effect_fired = true;
		}

		if(any_effect_fired == true || forced_play != undefined)
		{
			check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_willbeplayed', next_combat_unit_id);
			var temp_hand_slot = 0;
			if(origin_id != undefined)
			{
				temp_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
			}
			var temp_side = side + 0;
			if(battle_info['deck_' + side][origin_id] != undefined && battle_info.combat_units[next_combat_unit_id] != undefined)
			{
				battle_info['deck_' + side][origin_id]['status'] = 'grave';
				check_ability_procs('deck_' + side, 'moved_to_grave', origin_id);
			}
			
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.hand_slot_' + origin_hand_slot + '.side_' + temp_side).remove();
				$('.battle_container').append(parsed_unit);
				setTimeout(function(){
					$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
					$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
				},100);
			},prev_total_timeout);
			total_timeout += 500 * battle_speed;
			if(battle_info.combat_units[next_combat_unit_id] != undefined && total_timeout < (prev_total_timeout + (5000 * battle_speed)))
			{
				total_timeout = (prev_total_timeout + (5000 * battle_speed));
			}
			if(battle_info.combat_units[next_combat_unit_id] != undefined)
			{
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + next_combat_unit_id).remove();
				},total_timeout);
				total_timeout += 500 * battle_speed;
			}
			if(spell_destroyed == false)
			{
				check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', origin_id);
				if(side == 2)
				{
					check_quests(all_available_cards[card_id]['type'] + '_card_played');
					add_battle_stats(all_available_cards[card_id]['type'] + '_card_played');
					$.each(all_available_cards[card_id]['subtypes'], function(subtype_key, current_subtype){
						check_quests(current_subtype + '_card_played');
					});
				}
			}
		}
		else
		{
			total_timeout = prev_total_timeout + 0;
		}

		/*if(battle_info.combat_units[next_combat_unit_id] == undefined)
		{
			any_effect_fired = false;
		}*/

		delete battle_info.combat_units[next_combat_unit_id];
	}
	return any_effect_fired;
}

function play_artifact_card(side, card_id, origin_id, forced_play){

	var played_card = false;

	forced_play = true;

	var free_slot = find_free_artifact_slot(side);

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = create_combat_unit(all_available_cards[card_id], side);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['side'] = side;
		battle_info.combat_units[next_combat_unit_id]['origin_side'] = side;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = origin_id;
		battle_info.combat_units[next_combat_unit_id]['card_type'] = card_id;
		battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		battle_info.combat_units[next_combat_unit_id]['used_ability'] = false;
		battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];

		played_card = true;

		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'];
		}
		var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot);
		
		var prev_total_timeout = total_timeout + 0;
		
		total_timeout += 100 * battle_speed;

		var any_effect_fired = false;
		//any_effect_fired = process_single_unit(next_combat_unit_id, true);

		if(any_effect_fired == true || forced_play != undefined)
		{
			var temp_hand_slot = 0;
			if(origin_id != undefined)
			{
				temp_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
			}
			var temp_side = side + 0;
			if(battle_info['deck_' + side][origin_id] != undefined)
			{
				battle_info['deck_' + side][origin_id]['status'] = 'in_play';
			}
			
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side).remove();
				$('.battle_container').append(parsed_unit);
				setTimeout(function(){
					$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
					$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
				},100);
			},prev_total_timeout);
			//total_timeout += 500 * battle_speed;
			if(total_timeout < (prev_total_timeout + 100))
			{
				total_timeout = (prev_total_timeout + 100);
			}
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				//$('.battle_container .unit_id_' + next_combat_unit_id).remove();
			},total_timeout);
			$.each(battle_info['combat_units'], function(unit_id, unit){
				if(unit['type'] == 'artifact' && unit['side'] == side && unit_id != next_combat_unit_id)
				{
					//check_unit_alive(unit_id, undefined, true);
					/*delete battle_info['combat_units'][unit_id];
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).remove();
					},total_timeout);*/
				}
			});
			setTimeout(function(){
				$('.unit_id_' + next_combat_unit_id).addClass('placed');
			},total_timeout);
			total_timeout += 500 * battle_speed;
			check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', origin_id);
			if(side == 2)
			{
				check_quests(all_available_cards[card_id]['type'] + '_card_played');
				add_battle_stats(all_available_cards[card_id]['type'] + '_card_played');
				$.each(all_available_cards[card_id]['subtypes'], function(subtype_key, current_subtype){
					check_quests(current_subtype + '_card_played');
				});
			}
			$.each(battle_info.combat_units[next_combat_unit_id]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['on_play']) == true)
				{
					if(true || battle_info.combat_units[next_combat_unit_id]['used_ability'] == undefined || battle_info.combat_units[next_combat_unit_id]['used_ability'] == false)
					{
						total_timeout += 1000 * battle_speed;
					}
					process_ability(next_combat_unit_id, all_abilities[ability_key], ability_level, undefined, undefined, 'on_play');
				}
			});
		}

		//delete battle_info.combat_units[next_combat_unit_id];
		return true;
	}
	return false;
}

function find_free_artifact_slot(side){
	var free_slot = false;
	var all_free_slots = {};

	for(var slot = -5;slot <= -1;slot++)
	{
		var this_slot_free = check_slot_free(slot, side);
		if(this_slot_free == true)
		{
			all_free_slots[slot] = slot;
		}
	}

	free_slot = pick_left_most_slot(all_free_slots);

	return free_slot;
}

function find_free_slot(side, card_id, forced_safe_slot, forced_placement, opposing_type, origin_id, filters){

	var free_slot = false;
	var all_free_slots = {};
	var current_card_info = all_available_cards[card_id];

	if(current_card_info['type'] != 'artifact')
	{
		for(var slot = 1;slot <= 5;slot++)
		{
			var this_slot_free = check_slot_free(slot, side);
			if(this_slot_free == true)
			{
				all_free_slots[slot] = slot;
			}
		}
	}
	else
	{
		for(var slot = -5;slot <= -1;slot++)
		{
			var this_slot_free = check_slot_free(slot, side);
			if(this_slot_free == true)
			{
				all_free_slots[slot] = slot;
			}
		}
	}
	

	if(forced_safe_slot == undefined && current_card_info['safe_slot'] != undefined && current_card_info['safe_slot'] == true)
	{
		all_free_slots = filter_free_slots_by_safe(all_free_slots, opposing_type);
	}

	if(forced_safe_slot == undefined && current_card_info['safe_slot'] != undefined && current_card_info['safe_slot'] == false)
	{
		all_free_slots = filter_free_slots_by_not_safe(all_free_slots, opposing_type);
	}

	if(forced_safe_slot != undefined && forced_safe_slot == true)
	{
		all_free_slots = filter_free_slots_by_safe(all_free_slots, opposing_type);
	}

	if(forced_safe_slot != undefined && forced_safe_slot == false)
	{
		all_free_slots = filter_free_slots_by_not_safe(all_free_slots, opposing_type);
	}

	if(filters != undefined)
	{
		$.each(filters, function(slot_filter, slot_filter_value){
			if(slot_filter == 'has_adjacent_structure' && slot_filter_value == true)
			{
				all_free_slots = filter_free_slots_by_has_adjacent(all_free_slots, 'structure', origin_id);
			}
			if(slot_filter == 'has_adjacent_creature' && slot_filter_value == true)
			{
				all_free_slots = filter_free_slots_by_has_adjacent(all_free_slots, 'creature', origin_id);
			}
			if(slot_filter == 'opposing_structure')
			{
				all_free_slots = filter_free_slots_by_opposing(all_free_slots, 'structure', origin_id, slot_filter_value);
			}
		});
	}

	if(count_object(all_free_slots) > 0)
	{
		if(forced_placement == undefined)
		{
			if(current_card_info['placement'] == undefined || current_card_info['placement'] == 'left')
			{
				free_slot = pick_left_most_slot(all_free_slots);
			}

			if(current_card_info['placement'] != undefined && current_card_info['placement'] == 'right')
			{
				free_slot = pick_right_most_slot(all_free_slots);
			}

			if(current_card_info['placement'] != undefined && current_card_info['placement'] == 'random')
			{
				free_slot = pick_random_slot(all_free_slots);
			}
			
		}
		else
		{
			if(forced_placement == 'right')
			{
				free_slot = pick_right_most_slot(all_free_slots);
			}
			if(forced_placement == 'left')
			{
				free_slot = pick_left_most_slot(all_free_slots);
			}
			if(forced_placement == 'random')
			{
				free_slot = pick_random_slot(all_free_slots);
			}
			if(forced_placement == 'furthest')
			{
				free_slot = pick_furthest_slot(all_free_slots, origin_id);
			}
			if(forced_placement == 'adjacent_of_origin')
			{
				free_slot = pick_adjacent_slot(all_free_slots, origin_id);
			}
			if(forced_placement == 'origin_old_slot')
			{
				free_slot = pick_origin_old_slot(all_free_slots, origin_id);
			}
			if(forced_placement == 'opposing')
			{
				if(origin_id == undefined || battle_info['combat_units'][origin_id] == undefined)
				{
					free_slot = false;
				}
				else
				{
					//console.log(battle_info['combat_units'][origin_id]);
					if(all_free_slots[battle_info['combat_units'][origin_id]['slot']] == undefined)
					{
						free_slot = false;
					}
					else
					{
						free_slot = battle_info['combat_units'][origin_id]['slot'];
					}
				}
			}
		}
	}

	return free_slot;
}

function filter_free_slots_by_opposing(all_slots, unit_type, origin_id, has_it)
{
	$.each(all_slots, function(useless_key, slot_id){
		var has_opposing_type = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['slot'] == slot_id && (unit_type == undefined || unit_type == unit_info['type']))
			{
				has_opposing_type = true;
			}
		});
		if(has_opposing_type == has_it)
		{
			delete all_slots[useless_key];
		}
	});
	return all_slots;
}

function filter_free_slots_by_has_adjacent(all_slots, unit_type, origin_id)
{
	$.each(all_slots, function(useless_key, slot_id){
		var has_adjacent_type = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if((unit_info['slot'] == slot_id + 1 || unit_info['slot'] == slot_id - 1) && (unit_type == undefined || unit_type == unit_info['type']) && (origin_id == undefined || origin_id != unit_info['unit_id']) && unit_info['side'] == battle_info['combat_units'][origin_id]['side'])
			{
				has_adjacent_type = true;
			}
		});
		if(has_adjacent_type == false)
		{
			delete all_slots[useless_key];
		}
	});
	return all_slots;
}

function check_slot_free(slot, side){
	var this_slot_free = true;
	$.each(battle_info.combat_units, function(unit_id, unit_info){
		var unit_health = 0;
		if(unit_info['current_health'] != undefined && unit_info['current_health'] > 0 && unit_info['dead'] == undefined)
		{
			unit_health += unit_info['current_health'];
		}
		if(unit_info['temp_health'] != undefined && unit_info['temp_health'] > 0 && unit_info['dead'] == undefined)
		{
			unit_health += unit_info['temp_health'];
		}
		if(unit_info['side'] == side && unit_info['slot'] == slot && (unit_health > 0 || unit_info['health'] == false) && unit_info['dead'] == undefined)
		{
			this_slot_free = false;
		}
	});
	return this_slot_free;
}

function filter_free_slots_by_safe(all_slots, opposing_type){

	$.each(all_slots, function(useless_key, slot_id){
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['slot'] == slot_id && (opposing_type == undefined || opposing_type == unit_info['type']))
			{
				delete all_slots[useless_key];
			}
		});
	});

	return all_slots;
}

function filter_free_slots_by_not_safe(all_slots, opposing_type){
	$.each(all_slots, function(useless_key, slot_id){
		var found_opponent = false;
		$.each(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['slot'] == slot_id && (opposing_type == undefined || opposing_type == unit_info['type']) && unit_info['current_health'] > 0)
			{
				found_opponent = true;
			}
		});
		if(found_opponent == false)
		{
			delete all_slots[useless_key];
		}
	});

	return all_slots;
}

function pick_left_most_slot(all_slots){
	var left_most_slot = false;

	$.each(all_slots, function(useless_key, slot_id){
		if(left_most_slot == false || slot_id < left_most_slot)
		{
			left_most_slot = slot_id;
		}	
	});

	return left_most_slot;
}

function pick_right_most_slot(all_slots){
	var right_most_slot = false;

	$.each(all_slots, function(useless_key, slot_id){
		if(right_most_slot == false || slot_id > right_most_slot)
		{
			right_most_slot = slot_id;
		}	
	});

	return right_most_slot;
}

function pick_furthest_slot(all_slots, origin_id){
	var furthest_slot = false;
	var origin_slot = 0;
	if(battle_info['combat_units'][origin_id] != undefined)
	{
		origin_slot = battle_info['combat_units'][origin_id]['slot'];
	}
	var biggest_distance = 0;

	$.each(all_slots, function(useless_key, slot_id){
		var this_distance = slot_id - origin_slot;
		if(this_distance < 0){this_distance*=-1;}
		if(this_distance >= biggest_distance)
		{
			furthest_slot = slot_id;
			biggest_distance = this_distance + 0;
		}	
	});

	return furthest_slot;
}

function pick_random_slot(all_slots){
	var random_slot = false;

	random_slot = all_slots[get_random_key_from_object(all_slots)];

	return random_slot;
}

function pick_adjacent_slot(all_slots, unit_id){
	var adjacent_slot = false;
	var origin_slot = battle_info['combat_units'][unit_id]['slot'];

	$.each(all_slots, function(free_slot_id, slot){
		if(slot != origin_slot - 1 && slot != origin_slot + 1)
		{
			delete all_slots[free_slot_id];
		}
	});
	if(count_object(all_slots) > 0)
	{
		adjacent_slot = all_slots[get_random_key_from_object(all_slots)];
	}

	return adjacent_slot;
}

function pick_origin_old_slot(all_slots, unit_id){
	var origin_old_slot = false;
	var origin_slot = false;
	if(battle_info['combat_units'][unit_id]['old_slot'] != undefined)
	{
		origin_slot = battle_info['combat_units'][unit_id]['old_slot'];
	}

	$.each(all_slots, function(free_slot_id, slot){
		if(slot != origin_slot)
		{
			delete all_slots[free_slot_id];
		}
	});
	if(count_object(all_slots) > 0)
	{
		origin_old_slot = all_slots[get_random_key_from_object(all_slots)];
	}

	return origin_old_slot;
}

function reduce_all_hand_times(side){

	var adjusted_any = false;
/*	for(t=1;t<=2;t++){*/
		$.each(battle_info['deck_' + side], function(card_id, card_info){
			if(card_info['status'] == 'hand' && card_info['time_left'] > 0 && combat_alive == true)
			{
				adjusted_any = true;
				card_info['time_left'] -= 1;
				var temp_hand_slot = card_info['hand_slot'] + 0;
				var temp_time_left = card_info['time_left'] + 0;
				var temp_t = side + 0;
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.hand_slot_' + temp_hand_slot + '.side_' + temp_t + ' .card_time').html(temp_time_left);
				},total_timeout);
			}
		});
	/*}*/

	if(adjusted_any == true && combat_alive == true)
	{
		total_timeout += 500 * battle_speed;
	}
};

function add_card_to_combat_deck(side, card_id, card_status){
	if(all_available_cards[card_id] != undefined)
	{
		var deck = battle_info['deck_' + side];
		var new_card_id = get_highest_key_in_object(deck) + 1;

		deck[new_card_id] = {
							card_id: 	card_id,
							status: 	'deck',
							time_left: 	all_available_cards[card_id]['time']
		}
		if(card_status == 'grave')
		{
			deck[new_card_id]['status'] = 'grave';
		}
		update_deck_counts();
		if(card_status == 'hand')
		{
			draw_card(side, new_card_id);
		}
		else
		{
			total_timeout += 250 * battle_speed;
		}
	}
}

function draw_card(side, specific_card_id, card_type, damage_on_fail, show_drawn){
	if(show_drawn == undefined){show_drawn = true;}
	var deck = battle_info['deck_' + side];
	var deck_card_count = count_deck_cards(deck, card_type);
	var chosen_card_number = Math.ceil(Math.random() * deck_card_count);
	var drew_card = false;
	var first_free_hand_slot = get_first_free_hand_slot(deck);
	var chosen_card_time = 0;
	var chosen_card_id = false;

	hand_slot_id += 1;

	if(first_free_hand_slot != false && deck_card_count > 0 && combat_alive == true)
	{

		$.each(deck, function(deck_card_id, deck_card){
			if((deck_card['status'] == 'deck' || specific_card_id != undefined) && (card_type == undefined || all_available_cards[deck_card['card_id']]['type'] == card_type))
			{
				chosen_card_number--;
				if(((chosen_card_number == 0 && specific_card_id == undefined) || (specific_card_id != undefined && deck_card_id == specific_card_id)) && drew_card == false)
				{
					chosen_card_id = deck_card_id;
					if(all_available_cards[deck_card['card_id']]['abilities']['righthand'] != undefined){first_free_hand_slot = get_last_free_hand_slot(deck);}
					deck_card['status'] = 'hand';
					deck_card['hand_slot'] = first_free_hand_slot;
					deck_card['time_left'] = all_available_cards[deck_card['card_id']]['time'];
					deck_card['hand_slot_id'] = hand_slot_id;
					
					var parsed_hand_card = parse_hand_card(side, deck_card_id, show_drawn, hand_slot_id);
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container').append(parsed_hand_card);
						all_timeouts[timeout_key] = setTimeout(function(){
							$('.hand_card.hand_slot_' + first_free_hand_slot).removeClass('just_drawn');
						},50);
					},total_timeout);
					drew_card = true;
					chosen_card_time = all_available_cards[deck_card['card_id']]['time'];
				}
			}
		});

		if(drew_card == true)
		{
			update_deck_counts();
			if(chosen_card_time > 0)
			{
				total_timeout += 500 * battle_speed;
			}
			else
			{
				total_timeout += 500;
			}
		}
		if(chosen_card_id != false && show_drawn == true)
		{
			check_ability_procs(side, 'card_drawn', chosen_card_id, []);
		}
	}
	if(deck_card_count == 0 && combat_alive == true && damage_on_fail != undefined)
	{
		receive_damage(side, undefined, damage_on_fail,[]);
	}
}

function parse_hand_card(side, deck_card_id, just_drawn, hand_slot_id){
	var deck = battle_info['deck_' + side];
	var card_info = deck[deck_card_id];
	var parsed_card = '';
	var just_drawn_class = '';
	var card_base_info = all_available_cards[card_info['card_id']];
	if(just_drawn != undefined && just_drawn == true)
	{
		just_drawn_class = 'just_drawn';
	}
	var show_detail = '';
	if(side == 2 || test_mode == true)
	{
		show_detail = 'onclick="show_card_details(\'' + card_info['card_id'] + '\')"';
	}

	var hand_card_back = '';

	/*if(side == 2 && gamedata['hand_card_back'] != undefined)
	{
		hand_card_back = 'background-image:url(images/' + gamedata['hand_card_back'] + ')';
	}*/
	var card_back_used = false;
	parsed_card += 	'<div class="card hand_card hand_slot_' + card_info['hand_slot'] + ' side_' + side + ' ' + just_drawn_class + ' hand_slot_id_' + hand_slot_id + '" ' + show_detail + ' style="' + hand_card_back + '">';
	
	

	if(side == 2 && gamedata['hand_card_back'] != undefined && gamedata['hand_card_back'] != '')
	{
		card_back_used = true;
		parsed_card += '<div class="hand_card_back" style="background-image:url(images/' + gamedata['hand_card_back'] + ')"></div>';
	}

	if(side == 1 && enemy_card_back != undefined && enemy_card_back != '')
	{
		card_back_used = true;
		parsed_card += '<div class="hand_card_back" style="background-image:url(images/' + enemy_card_back + ')"></div>';
	}

	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true || true)
	{
		if(count_object(card_base_info['color']) > 1)
		{
			$.each(card_base_info['color'], function(useless_key, color){
				parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
			});
		}
		else
		{
			parsed_card += 	'<div class="card_color color_' + card_base_info['color'][0] + '"></div>';
		}
	}

	if(card_back_used == false || true)
	{
		
	}
	//parsed_card += 		'<div class="card_color color_' + card_base_info['color'] + '"></div>';
	parsed_card += 		'<div class="card_time">' + card_info['time_left'] + '</div>';
	if(side == 2 /*|| test_mode == true*/)
	{
		var longest_word = findLongestWord(card_base_info['name']);
		var card_name_size = 13;
		if(longest_word > 8)
		{
			card_name_size = 13 * (8 / longest_word);
		}
		parsed_card += 		'<div class="card_name" style="font-size:' + card_name_size + 'px">' + card_base_info['name'] + '</div>';
	}
	parsed_card += 	'</div>';

	return parsed_card;
}

function show_unit_details(side, slot){
	var unit_to_show = '';
	$.each($('.unit.slot_' + slot + '.side_' + side), function(div_id, div_info){
		var current_card = div_info.getAttribute('data-card_type');
		if(all_available_cards[current_card] != undefined)
		{
			unit_to_show = current_card;
		}
	});
	
	if(unit_to_show != '')
	{
		$.each(battle_info['combat_units'], function(unit_id, unit_info){
			if(unit_info['side'] == side && unit_info['slot'] == slot)
			{
				unit_to_show = unit_info['card_type'];
			}
		});
	}
	if(unit_to_show != '')
	{
		if(slot == 0)
		{
			show_card_details(unit_to_show, true);
			pause_game();
		}
		else
		{
			show_card_details(unit_to_show);
			pause_game();
		}
	}
}

function get_first_free_hand_slot(deck){
	var found_free_slot = false;
	for(var t=1;t<11;t++){
		var this_slot_free = true;
		if(found_free_slot == false){
			$.each(deck, function(deck_card_id, deck_card_info){
				if(deck_card_info['status'] == 'hand' && deck_card_info['hand_slot'] != undefined && deck_card_info['hand_slot'] == t)
				{
					this_slot_free = false;
				}	
			});
		}
		else
		{
			this_slot_free = false;
		}
		if(this_slot_free == true)
		{
			found_free_slot = t;
		}
	}
	return found_free_slot;
}

function get_last_free_hand_slot(deck){
	var found_free_slot = false;
	for(var t=10;t>0;t--){
		var this_slot_free = true;
		if(found_free_slot == false){
			$.each(deck, function(deck_card_id, deck_card_info){
				if(deck_card_info['status'] == 'hand' && deck_card_info['hand_slot'] != undefined && deck_card_info['hand_slot'] == t)
				{
					this_slot_free = false;
				}	
			});
		}
		else
		{
			this_slot_free = false;
		}
		if(this_slot_free == true)
		{
			found_free_slot = t;
		}
	}
	return found_free_slot;
}


function clear_all_timeouts(){
	$.each(all_timeouts, function(timeout_id, useless_data){
		clearTimeout(all_timeouts[timeout_id]);
		delete all_timeouts[timeout_id];
	});
	clearTimeout(next_turn_timeout);
	clearTimeout(next_action_timeout);
}

function set_all_enemy_cards(card_id){
	$.each(battle_info.deck_1, function(card_key, card_info){
		card_info['card_id'] = card_id;
	});
}

function update_wins_losses(wins, losses, king){
	if(king == undefined)
	{
		$.post("ajax.php",
		{
			data: 			'update_wins_losses',
			deck_id: 		arena_deck_id,
			wins: 			wins,
			losses: 		losses
		},
		function(result){
		});
	}
	else
	{
		console.log(gamedata['account_id']);
		$.post("ajax.php",
		{
			data: 			'update_wins_losses',
			current_id: 	gamedata['account_id'],
			deck_id: 		arena_deck_id,
			wins: 			wins,
			losses: 		losses,
			
		},
		function(result){
			console.log(result);
		});
	}
}

function resign_combat(){
	clear_all_timeouts();
	$('.projectile').remove();
	if(endless_waves == true)
	{
		current_reward_origin = 'waves';
		current_reward_text = 'You resigned at wave ' + (endless_wave_count) + '...';
		show_content('current_rewards');
	}
	else
	{
		gamedata['battles_lost']++;
		gamedata['summon_min_power'] *= 0.9;
		saveToLocalStorage();
		show_content('summon');
	}
	
}

function end_combat(count_as_loss){
	if(count_as_loss != undefined && count_as_loss == true)
	{
		gamedata['battles_lost']++;
		gamedata['summon_min_power'] *= 0.9;
		saveToLocalStorage();
	}
	clear_all_timeouts();
	$('.projectile').remove();
	if(current_battle_type == 'arena_battle')
	{
		//update_wins_losses(1, 0);
	}
	if(current_battle_type == 'king_of_the_hill')
	{
		//update_wins_losses(1, 0);
	}
	if(current_battle_type == 'random')
	{
		if(map_hero != undefined && all_available_cards[map_hero] != undefined)
		{
			show_content('map');
		}
		else
		{
			show_content('random_battles');
		}
	}
	if(current_battle_type == 'summoned')
	{
		show_content('summon');
	}
}

function pause_game(){
	//game_paused = true;
	//ready_to_resume = false;
}

function check_ready_to_resume(){
	if(game_paused == true)
	{
		game_paused = false;
		if(ready_to_resume == true && combat_alive == true){
			process_next_turn();
		}
	}
}

function process_player_combat_boosts(){
	if(gamedata['combat_boosts'] != undefined){

		gamedata['combat_boosts'] = sortObj(gamedata['combat_boosts']);

		$.each(gamedata['combat_boosts'], function(card_id, amount){
			if(amount > 0)
			{
				if(all_available_cards[card_id]['type'] == 'creature' || all_available_cards[card_id]['type'] == 'structure' || all_available_cards[card_id]['type'] == 'object')
				{
					play_unit_card(2, card_id);
				}
				if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'consumable')
				{
					play_action_card(2, card_id);
				}
				if(all_available_cards[card_id]['type'] == 'artifact')
				{
					play_artifact_card(2, card_id);
				}

				gamedata['combat_boosts'][card_id] -= 1;
			}
		});
		saveToLocalStorage();
	}
}

function process_enemy_combat_boosts(){
	if(battle_info['enemy_combat_boosts'] != undefined){
		
		$.each(battle_info['enemy_combat_boosts'], function(card_id, amount){
			if(amount > 0)
			{
				for (var i = amount - 1; i >= 0; i--) {
					play_action_card(1, card_id, undefined, true);
				};
			}
		});
	}
}

var projectile_count = 0;
function create_projectile(origin_id, target_id, projectile_id, avoided, target_type, side, amount, color, forced_time, big){
	if(battle_info['combat_units'][origin_id] != undefined && (battle_info['combat_units'][target_id] != undefined || target_type != undefined))
	{
		if(amount == undefined){amount = '';}
		if(color != undefined){color = 'style="color:' + color + '"';}else{color = '';}
		if(forced_time == undefined){forced_time = 1000;}
		var this_forced_time = forced_time * battle_speed;
		if(this_forced_time < 500)
		{
			this_forced_time  = 500;
		}
		projectile_count++;
		var temp_projectile_count = projectile_count + 0;
		var origin_unit = battle_info['combat_units'][origin_id];
		var origin_slot = origin_unit['slot'] + '';
		var origin_side = origin_unit['side'] + '';
		if(target_type == undefined)
		{
			var target_unit = battle_info['combat_units'][target_id];
			var target_slot = 'slot_' + target_unit['slot'] + '';
			var target_side = target_unit['side'] + '';
		}
		else
		{
			if(target_type == 'deck' && side != undefined)
			{
				var side_id = 1;
				if(side == 'ally' && origin_side == 2){side_id = 2;}
				if(side == 'enemy' && origin_side == 1){side_id = 2;}
				var target_unit = battle_info['deck_' + side_id][target_id];
				var target_slot = 'hand_card hand_slot_' + target_unit['hand_slot'] + '';
				if(target_unit['status'] != 'hand')
				{
					target_slot = 'hand_card deck_slot';
				}
				var target_side = side_id + '';
			}
			if(target_type == 'deck' && side == undefined)
			{
				var target_slot = target_slot = 'hand_card deck_slot';
				var target_side = origin_side + '';
			}
		}
		var is_big = '';
		if(big != undefined && big == true)
		{
			is_big = ' big ';
		}
		
		var projectile = '<div class="projectile card unit projectile_count_' + temp_projectile_count + ' projectile_' + projectile_id + ' slot_' + origin_slot + ' side_' + origin_side + ' ' + is_big + '"><div class="projectile_text" ' + color + '>' + amount + '</div></div>';
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container').append(projectile);
			
		}, total_timeout - (0/* * battle_speed*/));

		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
				$('.projectile_count_' + temp_projectile_count + '').removeClass('slot_' + origin_slot + ' side_' + origin_side);
				$('.projectile_count_' + temp_projectile_count + '').addClass(target_slot + ' side_' + target_side);
			}, total_timeout + ((this_forced_time / 10) * 1));
		
		if(avoided != undefined && avoided == true)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .projectile_count_' + temp_projectile_count + '').addClass('dead');
			}, total_timeout + ((this_forced_time / 3) * 1));
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .projectile_count_' + temp_projectile_count + '').remove();
			}, total_timeout + (this_forced_time * 1));
		}
		else
		{
			if(target_type == undefined || true)
			{
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .projectile_count_' + temp_projectile_count + '').remove();
				}, total_timeout + (this_forced_time * 1));
			}
		}
	}
}

var possible_pickups = {};
var pickup_counter = 0;
var clear_pickup_timers = {};
var last_spawned_pickup = 0;

function spawn_monthly_pickup(){
	if(count_object(pickup_rewards) < 100 && last_spawned_pickup + 1000 < nowint())
	{
		last_spawned_pickup = nowint();
		pickup_counter++;
		var temp_pickup_counter = pickup_counter + 0;
		if(count_object(possible_pickups) < 1)
		{
			possible_pickups = get_all_possible_pickups();
		}
		var pickup_amount = 1;
		var picked_pickup = get_random_key_from_object_based_on_num_value(possible_pickups);
		if(Math.random() < 0.75){picked_pickup = 'scraps';pickup_amount = round_by_percent(get_upgrade_factor('floating_scraps', 'any', true));}
		var from_top = Math.floor((Math.random() * 80) + 10);
		var parsed_pickup = '<div class="pickup pickup_' + pickup_counter + '" style="top:' + from_top + '%" onclick="claim_pickups(' + pickup_counter + ')">' + parse_card(picked_pickup) + '</div>';
		$('.battle_container').append(parsed_pickup);

		pickup_rewards[temp_pickup_counter] = {card_id: picked_pickup, card_amount: pickup_amount};
		clear_pickup_timers[temp_pickup_counter] = setTimeout(function(){
			pickup_rewards = {};
			$('.pickup_' + temp_pickup_counter).remove();
		},15000);
	}
}

function claim_pickups(counter){
	if(pickup_rewards[counter] != undefined)
	{
		if(gamedata['upgrades'] != undefined /*&& do_no_apply_factions == false*/)
		{
			var loot_factor = get_upgrade_factor('loot', [pickup_rewards[counter]['card_id']], true);
			//console.log(loot_factor);
			pickup_rewards[counter]['card_amount'] = round_by_percent(pickup_rewards[counter]['card_amount'] * loot_factor);
		}
		check_quests('claimed_pickup');
		if(all_available_cards[pickup_rewards[counter]['card_id']] != undefined)
		{
			gain_card(pickup_rewards[counter]['card_id'],pickup_rewards[counter]['card_amount']);
		}
		if(pickup_rewards[counter]['card_id'] == 'scraps')
		{
			gamedata['scraps'] += pickup_rewards[counter]['card_amount'];
		}
	}
	/*$.each(pickup_rewards, function(card_id, card_amount){
		check_quests('claimed_pickup');
		if(all_available_cards[card_id] != undefined)
		{
			gain_card(card_id,card_amount);
		}
		if(card_id == 'scraps')
		{
			gamedata['scraps'] += card_amount;
		}
	});*/
	$('.pickup_' + counter + '').remove();
	delete pickup_rewards[counter];
	clearTimeout(clear_pickup_timers[counter]);
}

function get_all_possible_pickups(){
	var all_possible_pickups = {};
	var month = new Date().getMonth() + 1;
	$.each(all_available_cards, function(card_id, card_info){
		if(match_array_values(month, card_info['months_available']) && card_info['type'] == 'currency')
		{
			all_possible_pickups[card_id] = 1 / Math.sqrt(card_info['value']);
		}
	});
	all_possible_pickups['peasant'] = 1;
	return all_possible_pickups;
}
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
		for (var slot_side = 1; slot_side < 3; slot_side++) {
			for (var slot_number = -5; slot_number < 6; slot_number++) {
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
				for(var t = 0;t < amount; t++){
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
			for(var t = 0;t < amount; t++){
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

	console.log( /*JSON.stringify*/(fake_hero));
	console.log('-------------');
	console.log( /*JSON.stringify*/(fake_deck));
};

var random_deck_times = {
	basic:{
		percent_main: 		0,
	 	percent_slow: 		70,
	 	percent_massive: 	90,
	},
	fast:{
		percent_main: 		30,
	 	percent_slow: 		70,
	 	percent_massive: 	90,
	},
	slow:{
		percent_main: 		0,
	 	percent_slow: 		70,
	 	percent_massive: 	85,
	},
	cheap:{
		percent_main: 		55,
	 	percent_slow: 		90,
	 	percent_massive: 	200,
	},
	muscle:{
		percent_main: 		0,
	 	percent_slow: 		75,
	 	percent_massive: 	90,
	},
	cheap_only:{
		percent_main: 		85,
	 	percent_slow: 		90,
	 	percent_massive: 	95,
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
	if(Math.random() < 0.25){
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
	for(var t = 0;t < size; t++){
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
		max_time = 3;
		if(deck_percent >= deck_times['percent_main'])
		{
			min_time = 4;
			max_time = 8;
		}
		if(deck_percent >= deck_times['percent_slow'])
		{
			min_time = 9;
			max_time = 12;
		}
		if(deck_percent >= deck_times['percent_massive'])
		{
			min_time = 13;
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
			if(all_available_cards[card_id] != undefined && ((all_available_cards[card_id]['type'] == 'artifact' && artifact_count > 4 && (all_available_cards[card_id]['selfdestructs'] == undefined || all_available_cards[card_id]['selfdestructs'] == false)) || (all_available_cards[card_id]['type'] == 'spell' && spell_count > 10)))
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
	if(artifact_count == 0)
	{
		var chosen_artifact = get_random_card('artifact', undefined, undefined, undefined, undefined, deck_theme);
		if(all_available_cards[chosen_artifact] != undefined)
		{
			random_deck[0] = {
				card_id: 	chosen_artifact,
				status: 	'deck',
				time_left: 	all_available_cards[chosen_artifact]['time'],
			};
		}
	}

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

function get_random_card_based_on_time(type, max_time, color_restriction, second_color_restriction, card_subtype, min_time, not_these, not_subtypes){
	var total_card_count = 0;
	var picked_card = false;
	var month = new Date().getMonth() + 1;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && card_info['type'] != undefined && (not_subtypes == undefined || match_array_values(card_info['subtypes'], not_subtypes) == false || not_subtypes == 'any') && (card_info['type'] == type || type == 'any' || type == undefined) && (max_time == undefined || max_time >= card_info['time']) && (min_time == undefined || min_time <= card_info['time']) && (card_subtype == undefined || match_array_values(card_subtype,card_info['subtypes']) == true) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
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
				if(card_info['time'] != undefined && card_info['time'] > 1){pick_chance = pick_chance / sqr(card_info['time'] / 1);}
				total_card_count += pick_chance;
			}
		}
	});
	var picked_card_number = (Math.random() * total_card_count);
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && card_info['type'] != undefined && (not_subtypes == undefined || match_array_values(card_info['subtypes'], not_subtypes) == false || not_subtypes == 'any') && (card_info['type'] == type || type == 'any' || type == undefined) && (max_time == undefined || max_time >= card_info['time']) && (min_time == undefined || min_time <= card_info['time']) && (card_subtype == undefined || match_array_values(card_subtype,card_info['subtypes']) == true) && (card_info['months_available'] == undefined || match_array_values([month],card_info['months_available']) == true))
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
				if(card_info['time'] != undefined && card_info['time'] > 1){pick_chance = pick_chance / sqr(card_info['time'] / 1);}
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

function test_based_on_time(amount, type, max_time, color_restriction, second_color_restriction, card_subtype, min_time, not_these, not_subtypes){
	var total_time = 0;
	var lowest = false;
	var highest = false;
	for (var i = 0; i < amount; i++) {
		var chosen_card = get_random_card_based_on_time(type, max_time, color_restriction, second_color_restriction, card_subtype, min_time, not_these, not_subtypes);
		total_time += all_available_cards[chosen_card]['time'];
		if(lowest === false || all_available_cards[chosen_card]['time'] < lowest){lowest = all_available_cards[chosen_card]['time'];}
		if(highest === false || all_available_cards[chosen_card]['time'] > highest){highest = all_available_cards[chosen_card]['time'];}
	}
	total_time /= amount;
	console.log('average: ' + total_time);
	console.log('lowest: ' + lowest);
	console.log('highest: ' + highest);
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

	var effective_power_factor = get_effective_power_factor();
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