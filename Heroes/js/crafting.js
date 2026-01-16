function show_crafting_skills(){

	$('.available_skills').html('');
	$.each(all_skills, function(skill, skill_info){
		
		var recipe_count = count_recipes(skill);

		if(recipe_count > 0)
		{
			$('.available_skills').append(parse_skill_button(skill_info['name'], skill, ' (' + gamedata['skills'][skill]['level'] + ')'));
		}
	});

	var recipe_count = count_recipes('none');

	if(recipe_count > 0)
	{
		$('.available_skills').append(parse_skill_button('Miscellaneous', 'none', ''));
	}
};

function parse_skill_button(name, value, amount){

	var skill_button = '';

	skill_button += '<div class="skill_button" onclick="show_content(\'crafting\'),show_recipes(\'' + value + '\')">' + name + amount + '</div>';

	return skill_button;
};

function count_recipes(skill){
	var total_count = 0;
	$.each(gamedata['known_recipes'], function(recipe, useless){
		if(recipes[recipe]['skill'] == skill)
		{
			total_count++;
		}
	});

	return total_count;
};

function show_recipes(type){

	current_crafting_type = type;

	$('.recipe_detail').html('Select a recipe to view it\'s details.');

	if(type != 'none' && type != undefined)
	{
		$('#content_crafting h2').html('< ' + all_skills[type]['name'] + ' (lvl ' + gamedata['skills'][type]['level'] + ')');
		$('.skill_level_bar_container').show();
		$('.skill_level_bar').css('width',skill_xp_percentage(type) + '%');
	}
	else
	{
		$('#content_crafting h2').html('< Miscellaneous');
		$('.skill_level_bar_container').hide();
	}

	gamedata['known_recipes'] = sortObj(gamedata['known_recipes']);
	recipes_to_show = {};
	$.each(gamedata['known_recipes'], function(key, useless){
		if(recipes[key]['skill'] == type)
		{
			recipes_to_show[key] = true;
		}
	});

	total_available_recipes = parse_recipe_list(recipes_to_show);

	$('.available_skill_recipes').html(total_available_recipes);

};

function show_crafting(){
	//$('.recipes .recipe_detail').html('');
	$('.available_recipes').html('');
	
	locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['recipes'] = sortObj(locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['recipes']);
	//show_location_list();

	var recipes_to_show;
	if(current_crafting_type != 'known')
	{
		recipes_to_show = locations[gamedata['current_location']]['chapters'][gamedata['explore_level']]['recipes'];
	}
	else
	{
		gamedata['known_recipes'] = sortObj(gamedata['known_recipes']);
		recipes_to_show = gamedata['known_recipes'];
	}

	total_available_recipes = parse_recipe_list(recipes_to_show);

	$('.available_recipes').html(total_available_recipes);
	
};

function parse_recipe_list(recipes_to_show){

	var total_available_recipes = '';

	$.each(recipes_to_show, function(key, recipe_details) {
		var recipe = recipes[key];
		var available_recipe = '';

		// determine wether the item can be crafted

		var cost_multiplier = $('.craft_amount').val();
		if(recipe['reward_type'] == 'gear' || recipe['reward_type'] == 'unit')
		{
			cost_multiplier = $('.craft_amount').val() * $('.craft_amount').val();
		}
		/*if(recipe['reward_type'] == 'unit')
		{
			cost_multiplier = 1;
		}*/

		var can_craft = 'can_craft';
		$.each(recipe['cost'], function(item_id, amount){
			if(typeof(available_items[item_id]) != 'undefined')
			{
				if(typeof(gamedata['inventory'][item_id]) == 'undefined')
				{
					gamedata['inventory'][item_id] = 0;
				}
				if(gamedata['inventory'][item_id] < Math.round(amount * cost_multiplier))
				{
					can_craft = 'cannot_craft';
				}
			}
		});

		$.each(recipe['unit_cost'], function(item_id, amount){
			var units_owned = count_units_owned(item_id, false, amount, true);

			if(units_owned < 1)
			{
				can_craft = 'cannot_craft';
			}
		});

		$.each(recipe['required_units'], function(item_id, amount){
			var units_owned = count_units_owned(item_id, false, amount, undefined);

			if(units_owned < 1)
			{
				can_craft = 'cannot_craft';
			}
		});

		$.each(recipe['gear_cost'], function(item_id, amount){
			amount *= $('.craft_amount').val();
			var gear_owned = count_gear_owned(item_id, true, amount, true);

			if(gear_owned < 1)
			{
				can_craft = 'cannot_craft';
			}
		});

		$.each(recipe['required_gear'], function(item_id, amount){
			amount *= $('.craft_amount').val();
			var gear_owned = count_gear_owned(item_id, true, amount, undefined);

			if(gear_owned < 1)
			{
				can_craft = 'cannot_craft';
			}
		});

		available_recipe += '<div class="available_recipe ' + can_craft + '" onclick="show_single_recipe(\'' + key + '\')">';

		if(recipe['reward_type'] == 'gear')
		{
			available_recipe += '<div class="gear_recipe recipe_type">G</div> ';
		}
		if(recipe['reward_type'] == 'item')
		{
			available_recipe += '<div class="item_recipe recipe_type">I</div> ';
		}
		if(recipe['reward_type'] == 'unit')
		{
			available_recipe += '<div class="unit_recipe recipe_type">U</div> ';
		}
		available_recipe += recipe['name'] + '</div>';

		total_available_recipes += available_recipe;
	});

	return total_available_recipes;
}

function show_single_recipe(key, type){
	$('.recipe_detail').html('');
	$('.recipe_amount_section').removeClass('hidden');

	if(key == undefined)
	{
		key = current_recipe_key;
	}
	current_recipe_key = key;


	var recipe = recipes[key];

	show_crafting();
	show_recipes(recipe['skill']);

	if($('.craft_amount').val() < 1 || gamedata['skills'][recipe['skill']] == undefined)
		{$('.craft_amount').val(1);}

	if(gamedata['skills'][recipe['skill']] != undefined && $('.craft_amount').val() > gamedata['skills'][recipe['skill']]['level'])
	{
		$('.craft_amount').val(gamedata['skills'][recipe['skill']]['level']);
	}

	var cost_multiplier = $('.craft_amount').val();
	if(recipe['reward_type'] == 'gear' || recipe['reward_type'] == 'unit')
	{
		cost_multiplier = $('.craft_amount').val() * $('.craft_amount').val();
	}
	var gear_level = $('.craft_amount').val();
	/*if(recipe['reward_type'] == 'unit')
	{
		$('.recipe_amount_section').hide();
		cost_multiplier = 1;
	}
	else
	{
		$('.recipe_amount_section').show();
	}*/
	var recipe_content = '';

	/////////////////////////////// RECIPE NAME //////////////////////////////////////////////////////////////
	recipe_content += '<h3>' + recipe['name'] + '</h3>';
	if(recipe['description'] != undefined)
	{
		recipe_content += '<p>' + recipe['description'] + '</p>';
	}

	/////////////////////////////// RECIPE RESULT //////////////////////////////////////////////////////////////
	recipe_content += 'result:<br/>';

	if(recipe['rewards'] == undefined)
	{
		recipe_content += parse_reward(recipe, cost_multiplier, gear_level);
	}
	else
	{
		$.each(recipe['rewards'], function(reward_id, reward_details){
			recipe_content += parse_reward(reward_details, cost_multiplier, gear_level);
		});
	}

	recipe_content += '<div class="breaker"></div>';

	var can_craft = 1000000000;
	/////////////////////////////// RECIPE REQUIREMENTS //////////////////////////////////////////////////////////////
	if(recipe['required_gear'] != undefined || recipe['required_units'] != undefined)
	{
		recipe_content += 'required:<br/>';
		recipe_content += '<div class="breaker"></div>';
		$.each(recipe['required_gear'], function(item_id, amount){
			amount *= gear_level;
			var gear_owned = count_gear_owned(item_id, true, amount, undefined);

			can_craft_this = gear_owned;
			if(can_craft_this < can_craft)
			{
				can_craft = can_craft_this;
			}

			var cannot_craft_class = ' ';

			if(can_craft_this < 1)
			{
				cannot_craft_class = ' cannot_craft ';
			}

			recipe_content += '<div class="recipe_line_container">';
			recipe_content += 	'<div class="recipe_text">';
			recipe_content += 		'<div class="item quality_' + available_gear[item_id]['quality'] + '" style="background-image:url(images/gear/' + available_gear[item_id]['image'] + ')"></div>';
			recipe_content += 		'<b class="' + cannot_craft_class + '">' + capitalizeFirstLetter(available_gear[item_id]['name']) + ' (lvl ' + (amount) + ' or higher)</b><br/>';
			recipe_content += 		'amount owned: ' + gear_owned;
			recipe_content += 	'</div>';
			recipe_content += '</div>';

			//recipe_content += '<div class="item quality_2 ' + cannot_craft_class + '" style="background-image:url(images/gear/' + available_gear[item_id]['image'] + ')" onmouseover="show_general_gear_details(\'' + item_id + '\')">' + gear_owned + '/' + amount + '</div>';
		});
		$.each(recipe['required_units'], function(item_id, amount){
		amount *= gear_level;
		var units_owned = count_units_owned(item_id, true, amount, undefined);

		can_craft_this = units_owned;
		if(can_craft_this < can_craft)
		{
			can_craft = can_craft_this;
		}

		var cannot_craft_class = ' ';

		if(can_craft_this < 1)
		{
			cannot_craft_class = ' cannot_craft ';
		}

		recipe_content += '<div class="recipe_line_container">';
		recipe_content += 	'<div class="recipe_text">';
		recipe_content += 		'<div class="item" style="background-image:url(images/units/' + capitalizeFirstLetter(available_units[item_id]['image']) + ')"></div>';
		recipe_content += 		'<b class="' + cannot_craft_class + '">' + available_units[item_id]['name'] + ' (lvl ' + (amount) + ' or higher)</b><br/>';
		recipe_content += 		'amount owned: ' + units_owned;
		recipe_content += 	'</div>';
		recipe_content += '</div>';

		//recipe_content += '<div class="item quality_2 ' + cannot_craft_class + '" style="background-image:url(images/units/' + available_units[item_id]['image'] + ')" onmouseover="show_general_details(\'' + item_id + '\')">' + units_owned + '/' + amount + '</div>';
	});
		recipe_content += '<div class="breaker"></div>';
	}


	/////////////////////////////// RECIPE COST //////////////////////////////////////////////////////////////
	recipe_content += 'cost:<br/>';
	recipe_content += '<div class="breaker"></div>';
	recipe_content += "<div class='trade_costs'>";
	$.each(recipe['cost'], function(item_id, amount){
		if(typeof(available_items[item_id]) != 'undefined')
		{
			amount = Math.round(amount * cost_multiplier);
			if(amount > 0)
			{
				var can_craft_this = 0;
				if(typeof(gamedata['inventory'][item_id]) == 'undefined')
				{
					gamedata['inventory'][item_id] = 0;
				}
				
				if(gamedata['inventory'][item_id] > 0)
				{
					can_craft_this = Math.floor(gamedata['inventory'][item_id] / amount);
				}
				
				if(can_craft_this < can_craft)
				{
					can_craft = can_craft_this;
				}

				var cannot_craft_class = ' ';

				if(can_craft_this < 1)
				{
					cannot_craft_class = ' cannot_craft ';
				}

				//recipe_content += '<div class="item ' + available_items[item_id]['subtype'] + ' quality_' + available_items[item_id]['quality'] + cannot_craft_class + '" style="background-image:url(images/items/' + available_items[item_id]['image'] + ')" onmouseover="show_item_details(\'' + item_id + '\')">' + gamedata['inventory'][item_id] + '/' + amount + '</div>';
				recipe_content += '<div class="recipe_line_container">';

				recipe_content += 	'<div class="item ' + available_items[item_id]['subtype'] + ' quality_' + available_items[item_id]['quality'] + '" style="background-image:url(images/items/' + available_items[item_id]['image'] + ')"></div>';
				recipe_content += 	'<div class="recipe_text">';
				recipe_content += 		'<b class="' + cannot_craft_class + '">' + capitalizeFirstLetter(available_items[item_id]['name']) + ' (' + (amount) + ')</b><br/>';
				recipe_content += 		'amount owned: ' + gamedata['inventory'][item_id];
				recipe_content += 	'</div>';
				recipe_content += '</div>';
			}
			
		}
	});

	$.each(recipe['unit_cost'], function(item_id, amount){
		amount *= gear_level;
		var units_owned = count_units_owned(item_id, false, amount, true);

		can_craft_this = units_owned;
		if(can_craft_this < can_craft)
		{
			can_craft = can_craft_this;
		}

		var cannot_craft_class = ' ';

		if(can_craft_this < 1)
		{
			cannot_craft_class = ' cannot_craft ';
		}

		recipe_content += '<div class="recipe_line_container">';
		recipe_content += 	'<div class="recipe_text">';
		recipe_content += 		'<div class="item" style="background-image:url(images/units/' + capitalizeFirstLetter(available_units[item_id]['image']) + ')"></div>';
		recipe_content += 		'<b class="' + cannot_craft_class + '">' + available_units[item_id]['name'] + ' (lvl ' + (amount) + ')</b><br/>';
		recipe_content += 		'amount owned: ' + units_owned;
		recipe_content += 	'</div>';
		recipe_content += '</div>';

		//recipe_content += '<div class="item quality_2 ' + cannot_craft_class + '" style="background-image:url(images/units/' + available_units[item_id]['image'] + ')" onmouseover="show_general_details(\'' + item_id + '\')">' + units_owned + '/' + amount + '</div>';
	});
	$.each(recipe['gear_cost'], function(item_id, amount){
		amount *= gear_level;
		var gear_owned = count_gear_owned(item_id, true, amount, true);

		can_craft_this = gear_owned;
		if(can_craft_this < can_craft)
		{
			can_craft = can_craft_this;
		}

		var cannot_craft_class = ' ';

		if(can_craft_this < 1)
		{
			cannot_craft_class = ' cannot_craft ';
		}

		recipe_content += '<div class="recipe_line_container">';
		recipe_content += 	'<div class="recipe_text">';
		recipe_content += 		'<div class="item quality_' + available_gear[item_id]['quality'] + '" style="background-image:url(images/gear/' + available_gear[item_id]['image'] + ')"></div>';
		recipe_content += 		'<b class="' + cannot_craft_class + '">' + capitalizeFirstLetter(available_gear[item_id]['name']) + ' (lvl ' + (amount) + ')</b><br/>';
		recipe_content += 		'amount owned: ' + gear_owned;
		recipe_content += 	'</div>';
		recipe_content += '</div>';

		//recipe_content += '<div class="item quality_2 ' + cannot_craft_class + '" style="background-image:url(images/gear/' + available_gear[item_id]['image'] + ')" onmouseover="show_general_gear_details(\'' + item_id + '\')">' + gear_owned + '/' + amount + '</div>';
	});
	recipe_content += "</div>";
	
	var craft_button_text = 'TRADE';
	if(current_crafting_type != undefined)
	{
		craft_button_text = 'CRAFT';
	}

	if(gamedata['skills'][recipe['skill']] == undefined && can_craft > 1)
	{
		can_craft = 1;
		//$('.craft_amount').val(can_craft);
	}
	if(gamedata['skills'][recipe['skill']] != undefined && can_craft > gamedata['skills'][recipe['skill']]['level'])
	{
		can_craft = gamedata['skills'][recipe['skill']]['level'];
		//$('.craft_amount').val(can_craft);
	}

	if(can_craft > 0)
	{
		recipe_content += '<div class="recipe_buttons">';
		recipe_content += '<button onclick="craft_recipe(\'' + key + '\')">' + craft_button_text + '</button>';
	
		/*if(can_craft > 1 && recipe['reward_type'] != 'location' && recipe['reward_type'] != 'spell' && recipe['reward_type'] != 'unit')
		{
			recipe_content += '<button onclick="craft_recipe_all(\'' + key + '\')">' + craft_button_text + ' ALL (' + can_craft + ')</button>';
		}*/
		recipe_content += '</div>';

		$('.claim_trade_button').show();
	}
	else
	{
		$('.claim_trade_button').hide();
	}
	if(gamedata['skills'][recipe['skill']] != undefined && gamedata['skills'][recipe['skill']]['level'] > 1)
	{
		$('.recipe_amount_section').show();
	}
	else
	{
		$('.recipe_amount_section').hide();
	}
	/*if($("#show_craftable").prop("checked") == false || can_craft > 0)
	{*/
		$('.recipe_detail').html('<div class="recipe">' + recipe_content + '</div>');
	/*}*/
}

function parse_reward(recipe, cost_multiplier, gear_level){

	var recipe_content = '';

	if(recipe['reward_type'] == 'item')
		{
			var reward = available_items[recipe['reward_id']];
			var reward_owned_amount = gamedata['inventory'][recipe['reward_id']];
			if(reward_owned_amount == undefined){reward_owned_amount = 0;}

			recipe_content += '<div class="recipe_line_container">';
			recipe_content += 	'<div class="item ' + reward['subtype'] + ' quality_' + reward['quality'] + '" style="background-image:url(images/items/' + reward['image'] + ')"></div>';
			recipe_content += 	'<div class="recipe_text">';
			recipe_content += 		'<b>' + capitalizeFirstLetter(reward['name']) + ' (' + (recipe['reward_amount'] * cost_multiplier) + ')</b><br/>';
			recipe_content += 		'amount owned: ' + reward_owned_amount;
			recipe_content += 	'</div>';
			recipe_content += '</div>';


		}
		if(recipe['reward_type'] == 'unit')
		{
			var reward = available_units[recipe['reward_id']];
			recipe_content += '<div class="recipe_line_container">';
			//recipe_content += '<div class="item" onmouseover="show_general_details(\'' + recipe['reward_id'] + '\')" style="background-image:url(images/units/' + reward['image'] + ')">lvl ' + recipe['reward_amount'] + '</div>';
			recipe_content += 	'<div class="item ' + reward['subtype'] + ' quality_' + reward['quality'] + '" style="background-image:url(images/units/' + reward['image'] + ')"></div>';
			recipe_content += 	'<div class="recipe_text">';
			recipe_content += 		'<b>' + capitalizeFirstLetter(reward['name']) + ' (lvl ' + (recipe['reward_amount'] * gear_level) + ')</b><br/>';
			//recipe_content += 		'amount owned: ' + count_gear_owned(recipe['reward_id'], true, recipe['reward_amount'] * gear_level, true) + '<br/>';
			//recipe_content += 		reward['description'] + '<br/>';
			recipe_content += 		'<div class="stat_block">' + parse_unit_stats(recipe['reward_id'], recipe['reward_amount'] * gear_level) + '</div>';
			recipe_content += 	'</div>';
			recipe_content += '</div>';
		}
		if(recipe['reward_type'] == 'spell')
		{
			var reward = unit_abilities[recipe['reward_id']];
			recipe_content += '<div class="recipe_line_container">';

			recipe_content += 	'<div class="item quality_2" style="background-image:url(images/abilities/' + reward['image'] + ')"></div>';
			recipe_content += 	'<div class="recipe_text">';
			recipe_content += 		'<b>' + capitalizeFirstLetter(reward['name']) + ' (level ' + recipe['reward_amount'] + ')</b><br/>';
			recipe_content += 		reward['description'] + '<br/>';
			recipe_content += 		'Mana: ' + reward['mana_cost'] + '<br/>';
			recipe_content += 		'Cooldown: ' + reward['spell_cooldown'] + 's<br/>';
			recipe_content += 	'</div>';
			recipe_content += '</div>';
		}
		if(recipe['reward_type'] == 'gear')
		{
			var reward = available_gear[recipe['reward_id']];
			var reward_owned_amount = gamedata['inventory'][recipe['reward_id']];
			if(reward_owned_amount == undefined){reward_owned_amount = 0;}

			recipe_content += '<div class="recipe_line_container">';

			recipe_content += 	'<div class="item ' + reward['subtype'] + ' quality_' + reward['quality'] + '" style="background-image:url(images/gear/' + reward['image'] + ')"></div>';
			recipe_content += 	'<div class="recipe_text">';
			recipe_content += 		'<b>' + capitalizeFirstLetter(reward['name']) + ' (lvl ' + (recipe['reward_amount'] * gear_level) + ')</b><br/>';
			recipe_content += 		'amount owned: ' + count_gear_owned(recipe['reward_id'], true, recipe['reward_amount'] * gear_level, true) + '<br/>';
			recipe_content += 		reward['description'] + '<br/>';
			recipe_content += 		parse_gear_stats(recipe['reward_id'], recipe['reward_amount'] * gear_level, []);
			recipe_content += 	'</div>';
			recipe_content += '</div>';

			/*var gear_subtypes = '';
			$.each(recipe['gear_types'], function(key, subtype){
				gear_subtypes += '\'' + subtype + '\',';
			});*/
			/*parse_gear_stats(gear_id, level, subtypes)*/
			/*recipe_content += '<div class="item quality_' + reward['quality'] + '" onmouseover="show_general_gear_details(\'' + recipe['reward_id'] + '\',\'' + $('.craft_amount').val() + '\',[' + gear_subtypes + '])" style="background-image:url(images/gear/' + reward['image'] + ')">lvl ' + $('.craft_amount').val() + '</div>';*/
		}
		if(recipe['reward_type'] == 'location')
		{
			var reward = locations[recipe['reward_id']];
			recipe_content += '<div class="item" style="background-image:url(images/bg/' + reward['image'] + ')">' + recipe['reward_amount'] + '</div>';
		}
		if(recipe['reward_type'] == 'recipe')
		{
			var reward = recipes[recipe['reward_id']];
			recipe_content += '<div class="recipe_line_container">';

			recipe_content += 	'<div class="item quality_recipe" style="background-image:url(images/' + reward['image'] + ')"></div>';
			recipe_content += 	'<div class="recipe_text">';
			recipe_content += 		'<b>Recipe: ' + capitalizeFirstLetter(reward['name']) + '</b><br/>';
			recipe_content += 	'</div>';
			recipe_content += '</div>';
		}

	return recipe_content;

};