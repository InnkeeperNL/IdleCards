var current_crafting_page = 1;

function show_crafting(){
	$('.crafting_container').html('');
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(current_crafting_page < 1){current_crafting_page = 1;}

	gamedata['inventory'] = sortObj(gamedata['inventory']);

	var inventory_window_width = $('.crafting_container').width();
	var inventory_window_height = $('.crafting_container').height();

	var item_width = 105;

	var inventory_h = Math.floor(inventory_window_width / item_width);

	var inventory_v = Math.floor(inventory_window_height / 108);

	var visible_inventory = inventory_h * inventory_v;
	if(visible_inventory < 1){visible_inventory = 1;}
	var inventory_shown = 0;
	if(gamedata['known_recipes'] != undefined && count_object(gamedata['known_recipes']) > 0)
	{
		//gamedata['inventory'] = sortObj(gamedata['inventory']);

		$.each(all_recipes, function(item_id, item_info){
			var can_show_item = true;
			
			if(can_show_item == true && gamedata['known_recipes'][item_id] != undefined)
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_crafting_page -1) && inventory_shown <= visible_inventory * (current_crafting_page))
				{
					var can_trade = true;
					$.each(item_info['cost'], function(cost_id, item_amount){
						if(get_item_owned_amount(cost_id) < item_amount)
						{
							can_trade = false;
						}
					});
					var parsed_item = parse_recipe(item_id);
					if(can_trade == true)
					{
						$('.crafting_container').append('<span onclick="view_recipe(\'' + item_id + '\')">' + parsed_item + '</span>');
					}
					else
					{
						$('.crafting_container').append('<span class="not_enough" onclick="view_recipe(\'' + item_id + '\')">' + parsed_item + '</span>');
					}
					
				}
			}
		});
	}
	else
	{
		$('.crafting_container').html('<div class="no_inventory_text">Learn a recipe to start crafting</div>');
	}

	var max_inventory_page = Math.ceil(inventory_shown / visible_inventory);

	if(inventory_shown > visible_inventory * current_crafting_page)
	{
		$('.page_further').html('>');
	}
	else
	{
		$('.page_further').html('');
	}

	if(current_crafting_page == 1)
	{
		$('.page_back').html('');
	}
	else
	{
		$('.page_back').html('<');
	}

	$('.page_number').html(current_crafting_page + ' / ' + max_inventory_page);

	if(current_crafting_page > max_inventory_page && current_crafting_page != 1){
		current_crafting_page  = max_inventory_page;
		show_inventory();
	}
}

function adjust_crafting_page(amount){
	current_crafting_page += amount;
	if(current_crafting_page < 1)
	{
		current_crafting_page = 1;
	}
	show_inventory();
}

function parse_recipe(recipe_id){
	var parsed_item = '';
	if(all_recipes[recipe_id] != undefined)
	{
		var rarity = 1;
		parsed_item +=				'<div class="item item_container_' + recipe_id + '" style="background-image:url(images/' + all_recipes[recipe_id]['image'] + ');">';
		parsed_item +=					'<div class="bg" ></div>';
		parsed_item +=					'<span class="item_name">' + capitalizeFirstLetter(all_recipes[recipe_id]['name']) + '</span>';
		parsed_item +=				'</div>';
	}

	return parsed_item;
}

var viewing_recipe = '';
function view_recipe(recipe_id){
	viewing_recipe = recipe_id;
	show_content('recipe_details');
}

function show_recipe_details(){
	var parsed_recipe_details = '';
	if(all_recipes[viewing_recipe] != undefined)
	{
		var recipe_info = all_recipes[viewing_recipe];
		parsed_recipe_details += 	'<div class="action_details_text">';
		parsed_recipe_details += 		'<div class="action_details_name">' + capitalizeFirstLetter(recipe_info['name']) + '</div>';
		if(recipe_info['description'] != undefined)
		{
			parsed_recipe_details += 	'<div class="action_details_description">' + capitalizeFirstLetter(recipe_info['description']) + '</div>';
		}
		parsed_recipe_details += 		'<div class="action_details_name">Cost</div>';

		var can_trade = true;
		$.each(recipe_info['cost'], function(item_id, item_amount){
			if(get_item_owned_amount(item_id) < item_amount)
			{
				can_trade = false;
				parsed_recipe_details += 	'<span class="not_enough">' + parse_item(item_id, undefined, ('<span class="cost_amount">-' + item_amount + '</span>')) + '</span>';
			}
			else
			{
				parsed_recipe_details += 	parse_item(item_id, undefined, ('<span class="cost_amount">-' + item_amount + '</span>'));
			}
		});

		parsed_recipe_details += 		'<div class="action_details_name">Rewards</div>';

		$.each(recipe_info['rewards'], function(item_id, item_amount){
			parsed_recipe_details += 	parse_item(item_id, undefined, ('<span class="reward_amount">+' + item_amount + '</span>'));
		});
		parsed_recipe_details += '<div class="action_buttons_container">';
		parsed_recipe_details += 	'<button class="back_button danger" onclick="show_content(\'crafting\')">Back</button>';
		if(can_trade == true)
		{
			parsed_recipe_details += 	'<button class="start_quest_button gold" onclick="craft_recipe(\'' + viewing_recipe + '\')">Craft</button>';
		}
		parsed_recipe_details += '</div>';
		parsed_recipe_details += '</div>';
	}

	$('.recipe_details_container').html(parsed_recipe_details);
}

function craft_recipe(recipe_id){
	if(all_recipes[recipe_id] != undefined)
	{
		var can_trade = true;
		var recipe_info = all_recipes[recipe_id];
		$.each(recipe_info['cost'], function(item_id, item_amount){
			if(get_item_owned_amount(item_id) < item_amount)
			{
				can_trade = false;
			}
		});
		if(can_trade == true)
		{
			play_sound_group('click');
			$.each(recipe_info['cost'], function(item_id, item_amount){
				gain_item(item_id, item_amount * -1, true);
			});
			$.each(recipe_info['rewards'], function(item_id, item_amount){
				gain_item(item_id, item_amount, true);
			});
			saveToLocalStorage();
			
			show_content('recipe_details');
		}
	}
}