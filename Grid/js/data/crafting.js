
var current_tinkering_card_1 = '';
var current_tinkering_card_2 = '';
var active_craft_id = '';

function get_owned_cards(){
	$.each(available_cards, function(card_id, card_info){
		var owned_amount = 0;
		$.each(gamedata['owned_cards'], function(owned_id, owned_card_info){
			if(owned_card_info['card_id'] == card_id && owned_card_info['deck_id'] == 0)
			{
				owned_amount++;
			}
		});
		owned_cards[card_id] = owned_amount;
	});
};

function show_tinkering(){
	var total_owned_cards_list = '';
	get_owned_cards();
	if(gamedata['known_recipes'] == undefined)
	{
		gamedata['known_recipes'] = {};
	}
	$.each(owned_cards, function(card_id, owned_amount){
		var can_show = false;
		$.each(available_cards, function(base_card_id, card){
			if((card['recipe_1'] == card_id || card['recipe_2'] == card_id) && gamedata['known_recipes'][base_card_id] == undefined)
			{
				if((card['recipe_1'] != card['recipe_2'] && owned_cards[card['recipe_1']] > 0 && owned_cards[card['recipe_2']] > 0) ||
					(card['recipe_1'] == card['recipe_2'] && owned_cards[card['recipe_1']] > 1))
				{
					can_show = true;
					console.log('found recipe for ' + base_card_id + ' from ' + card['recipe_1'] + ' + ' + card['recipe_2']);
				}
			}
		});
		if(can_show == true)
		{
			total_owned_cards_list += '<div class="single_owned_card" onclick="set_tinkering_card(\'' + card_id + '\')">' + available_cards[card_id]['name'] + '<span>' + owned_amount + '</span></div>';
		}
	});

	if(total_owned_cards_list == '')
	{
		total_owned_cards_list = 'No cards to combine';
	}

	$('.owned_cards_list').html(total_owned_cards_list);
};

function set_tinkering_card(card_id){

	if(current_tinkering_card_1 == '')
	{
		current_tinkering_card_1 = card_id;
	}
	else
	{
		if(current_tinkering_card_2 == '')
		{
			current_tinkering_card_2 = card_id;
		}
	}

	show_active_tinkering_cards();
};

function show_active_tinkering_cards(){
	/*console.log(current_tinkering_card_1);*/
	var min_owned = 1;
	if(current_tinkering_card_1 == current_tinkering_card_2){min_owned = 2;}
	var parsed_card = '';
	if(current_tinkering_card_1 != '')
	{
		parsed_card = parse_card(current_tinkering_card_1, 'full');
	}
	$('.tinkering_card_1').html(parsed_card);
	parsed_card = '';
	if(current_tinkering_card_2 != '')
	{
		parsed_card = parse_card(current_tinkering_card_2, 'full');
	}
	$('.tinkering_card_2').html(parsed_card);

	if(current_tinkering_card_1 != '' && current_tinkering_card_2 != '' && owned_cards[current_tinkering_card_1] >= min_owned && owned_cards[current_tinkering_card_2] >= min_owned)
	{
		$('.craft_tinkering_button').removeClass('disabled');
	}
	else
	{
		$('.craft_tinkering_button').addClass('disabled');
	}
};

function tinker_current(){
	var min_owned = 1;
	if(current_tinkering_card_1 == current_tinkering_card_2){min_owned = 2;}
	if(current_tinkering_card_1 != '' && current_tinkering_card_2 != '' && owned_cards[current_tinkering_card_1] >= min_owned && owned_cards[current_tinkering_card_2] >= min_owned)
	{
		card_id = find_recipe(current_tinkering_card_1, current_tinkering_card_2);
		if(card_id != undefined)
		{
			lose_card(current_tinkering_card_1);
			lose_card(current_tinkering_card_2);
			gain_card(card_id,0);
			current_tinkering_card_1 = '';
			current_tinkering_card_2 = '';
			get_owned_cards();
			show_tinkering();
			show_active_tinkering_cards();
			show_card_detailed(card_id);
			if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
			gamedata['known_recipes'][card_id] = true;
			saveToLocalStorage();
		}
		else
		{
			$('.tinkering_card_1').addClass('shake');
			$('.tinkering_card_2').addClass('shake');
			setTimeout(function(){
				$('.tinkering_card_1').removeClass('shake');
				$('.tinkering_card_2').removeClass('shake');
			},500);
		}
	}
}

function find_recipe(card_1, card_2){
	var possible_recipes = {};
	var recipe_key_count = 0;
	$.each(available_cards, function(card_id, card_info){
		if(((card_info['recipe_1'] == card_1 && card_info['recipe_2'] == card_2) || (card_info['recipe_2'] == card_1 && card_info['recipe_1'] == card_2)) && gamedata['known_recipes'][card_id] == undefined)
		{
			possible_recipes[recipe_key_count] = card_id;
			recipe_key_count++
		}
	});

	return possible_recipes[get_random_key_from_object(possible_recipes)];
};

function show_crafting(){
	$('.crafting_card_1').html('');
	$('.crafting_card_2').html('');
	active_craft_id = '';
	if(gamedata['known_recipes'] != undefined)
	{
		get_owned_cards();
		var known_recipe_list = "";
		var max_craft;
		$.each(available_cards, function(card_id, card_info){
			if(gamedata['known_recipes'][card_id] != undefined)
			{

				if(owned_cards[card_info['recipe_1']] != undefined)
				{
					max_craft = owned_cards[card_info['recipe_1']];
				}
				else
				{
					max_craft = 0;
				}
				if(owned_cards[card_info['recipe_2']] != undefined && max_craft > owned_cards[card_info['recipe_2']])
				{
					max_craft = owned_cards[card_info['recipe_2']];
				}
				if(card_info['recipe_1'] == card_info['recipe_2'] && owned_cards[card_info['recipe_1']] != undefined)
				{
					max_craft = Math.floor(max_craft / 2);
				}
				known_recipe_list += '<div class="single_recipe" onclick="show_recipe_details(\'' + card_id + '\')">' + available_cards[card_id]['name'] + '<span>' + max_craft + '</span></div>';
			}
		});
		$('.owned_recipes_list').html(known_recipe_list);
	}
}

function show_recipe_details(card_id){
	get_owned_cards();
	if(available_cards[card_id] != undefined){
		$('.crafting_card_1').removeClass('disabled');
		$('.crafting_card_2').removeClass('disabled');
		active_craft_id = card_id;
		var parsed_card = parse_card(available_cards[card_id]['recipe_1'], 'full',undefined,undefined,owned_cards[available_cards[card_id]['recipe_1']]);
		$('.crafting_card_1').html(parsed_card);
		var parsed_card = parse_card(available_cards[card_id]['recipe_2'], 'full',undefined,undefined,owned_cards[available_cards[card_id]['recipe_2']]);
		$('.crafting_card_2').html(parsed_card);

		var can_craft = true;
		if(available_cards[card_id]['recipe_1'] == available_cards[card_id]['recipe_2'] && owned_cards[available_cards[card_id]['recipe_1']] != undefined && owned_cards[available_cards[card_id]['recipe_1']] < 2)
		{
			can_craft = false;
			$('.crafting_card_1').addClass('disabled');
			$('.crafting_card_2').addClass('disabled');
		}
		if(owned_cards[available_cards[card_id]['recipe_1']] == undefined || owned_cards[available_cards[card_id]['recipe_1']] == 0)
		{
			can_craft = false;
			$('.crafting_card_1').addClass('disabled');
		}
		if(owned_cards[available_cards[card_id]['recipe_2']] == undefined || owned_cards[available_cards[card_id]['recipe_2']] == 0)
		{
			can_craft = false;
			$('.crafting_card_2').addClass('disabled');
		}
		if(can_craft == true)
		{
			$('.craft_recipe_button').removeClass('disabled');
		}
		else
		{
			$('.craft_recipe_button').addClass('disabled');
		}
	}
};

function craft_current_recipe(){
	get_owned_cards();
	if(available_cards[active_craft_id] != undefined){
		var card_id = active_craft_id;
		var can_craft = true;
		if(available_cards[card_id]['recipe_1'] == available_cards[card_id]['recipe_2'] && owned_cards[available_cards[card_id]['recipe_1']] != undefined && owned_cards[available_cards[card_id]['recipe_1']] < 2)
		{
			can_craft = false;
		}
		if(owned_cards[available_cards[card_id]['recipe_1']] == undefined || owned_cards[available_cards[card_id]['recipe_1']] == 0)
		{
			can_craft = false;
		}
		if(owned_cards[available_cards[card_id]['recipe_2']] == undefined || owned_cards[available_cards[card_id]['recipe_2']] == 0)
		{
			can_craft = false;
		}
		if(can_craft == true)
		{
			lose_card(available_cards[card_id]['recipe_1']);
			lose_card(available_cards[card_id]['recipe_2']);
			gain_card(card_id);
			show_card_detailed(card_id);
			show_crafting();
			show_recipe_details(card_id);

		}
		else
		{
			$('.crafting_card_1').addClass('shake');
			$('.crafting_card_2').addClass('shake');
			setTimeout(function(){
				$('.crafting_card_1').removeClass('shake');
				$('.crafting_card_2').removeClass('shake');
			},500);
		}
	}
	else
	{
		console.log('unknown card ' + active_craft_id);
	}
};