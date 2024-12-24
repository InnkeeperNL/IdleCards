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