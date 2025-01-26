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
		if(current_card['type'] == 'artifact'){parsed_card_details += 'Attaches to your hero. There is a maximum of 5 active artifacts. Stays in game untill destroyed or untill it has no active abilities.';}
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