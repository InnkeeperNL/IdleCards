var current_crafting_page = 1;
var current_craft = '';
var view_tinkerable = false;
var cards_per_crafting_page = 12;

function show_craft(){
	if(gamedata['known_recipes'] == undefined){
		gamedata['known_recipes'] = {};
		saveToLocalStorage();
	}

	//$('.tinker_view').show();

	gamedata['known_recipes'] = sortObj(gamedata['known_recipes']);

	$('.craft_container').html('<span class="no_tinker">Use tinkering to find recipes</span>');
	$('.carft_back_button').hide();
	$('.craft_home_button').show();
	$('.craft_button').hide();

	var tinkering_list = '';
	var cards_displayed = 0;

	$.each(all_available_cards, function(recipe_id, card_info){
		
		var card_filtered = false;
		var amount = gamedata['known_recipes'][recipe_id];

		if(gamedata['known_recipes'][recipe_id] == undefined && (gamedata['owned_cards'][recipe_id] == undefined || gamedata['owned_cards'][recipe_id] < 25))
		{
			card_filtered = true;
		}

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
			/*$.each(all_available_cards, function(current_card_id, current_card_info){
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
			});*/
			
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
					if(gamedata['known_recipes'][recipe_id] != undefined)
					{
						var parsed_card = parse_card(recipe_id, owned_amount);
					/*}*/
					
						tinkering_list += '<span class="can_craft_' + can_craft + '" onclick="show_card_recipe(\'' + recipe_id + '\')">' + parsed_card + '</span>';
					}
					else
					{
						if(gamedata['owned_cards'][recipe_id] >= 25)
						{
							var parsed_card = parse_card('recipe_' + recipe_id, '');
							tinkering_list += '<span class="" onclick="show_card_recipe(\'' + 'recipe_' + recipe_id + '\')">' + parsed_card + '</span>';
						}
					}
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
	if(gamedata['known_recipes'][recipe_id] != undefined)
	{
		
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
	}
	else
	{
		if(all_available_cards[recipe_id]['type'] == 'recipe' && gamedata['owned_cards'][all_available_cards[recipe_id]['recipe']] >= 25)
		{
			var recipe_result_id = all_available_cards[recipe_id]['recipe'];
			recipe_details += '<div class="single_cost_container">';
			recipe_details += '<div class=""  onclick="show_card_details(\'' + recipe_result_id + '\')">' + parse_card(recipe_result_id, gamedata['owned_cards'][recipe_result_id] + '/' + 25) + '</div>';
			recipe_details += '</div>';
			recipe_details += '<br/><br/>';
			recipe_details += '<div class="menu_button slim craft_button" onclick="gain_card(\'' + recipe_result_id + '\', -25);learn_recipe(\'' + recipe_result_id + '\')" data-target-content="craft">LEARN</div><br/>';
		}
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