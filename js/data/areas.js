var current_area = false;

var all_areas = {
	
}

var all_enemy_heroes = {

	 
}

/*function show_random_battles(){

	var all_area_buttons = '';
	if(gamedata['defeated_heroes'] == undefined){
		gamedata['defeated_heroes'] = {};
		//saveToLocalStorage();
	}

	if(gamedata['current_area_wave'] == undefined){
		gamedata['current_area_wave'] = 0;
		//saveToLocalStorage();
	}

	$.each(all_areas, function(area_id, area_info){
		var can_show_this_area = true;
		var area_available = '';
		$.each(area_info['shown'], function(hero_id, hero_wave){
			if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
			{
				can_show_this_area = false;
			}
		});

		if(can_show_this_area == true)
		{
			var parsed_area_button = parse_area_button(area_id, area_available);
			all_area_buttons += parsed_area_button;
		}
	});

	$('.random_battles_buttons').html(all_area_buttons);

}*/

function parse_area_button(area_id, area_available){
	var parsed_area_button = '';
	var area_info = all_areas[area_id];

	var hero_levels = 0;
	$.each(area_info['heroes'], function(hero_id, useless_info){
		if(gamedata['defeated_heroes'][hero_id] != undefined)
		{
			hero_levels += gamedata['defeated_heroes'][hero_id];
		}
	});

	parsed_area_button += '<div class="menu_button third single_area" onclick="current_area=\'' + area_id + '\';" data-target-content=\'areas\'>';
	parsed_area_button += '<div class="card_color color_' + area_info['color'] + '"></div>';
	parsed_area_button += '<div class="card_image" style="background-image:url(images/' + area_info['image'] + ');"></div>';
	parsed_area_button += '<span>' + area_info['name'] + '</span>';
	if(hero_levels > 0)
	{
		parsed_area_button += '<span class="area_level">' + hero_levels + '</span>';
	}
	parsed_area_button += '</div>';

	return parsed_area_button;
};

function show_areas(){
	if(all_areas[current_area] != undefined)
	{
		if(gamedata['current_difficulty'] != undefined)
		{
			difficulty_setting = gamedata['current_difficulty'];
		}
		if(difficulty_setting < 1){difficulty_setting = 1;}
		$('.current_area_difficulty').html(difficulty_setting);
		var all_hero_buttons = '';
		var area_info = all_areas[current_area];

		$.each(area_info['heroes'], function(hero_id, useless_info){
			if(all_enemy_heroes[hero_id] != undefined)
			{
				var hero_info = all_enemy_heroes[hero_id];
				var can_show_this_hero = true;
				var hero_available = true;
				$.each(hero_info['shown'], function(hero_id, hero_wave){
					if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
					{
						can_show_this_hero = false;
					}
				});
				$.each(hero_info['available'], function(hero_id, hero_wave){
					if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
					{
						hero_available = false;
					}
				});

				if(can_show_this_hero == true)
				{
					var parsed_hero_button = parse_hero_button(hero_id, hero_available);
					all_hero_buttons += parsed_hero_button;
				}
			}
		});

		$('.areas_container').html(all_hero_buttons);
	}
	else
	{
		if(map_hero != undefined && map_hero != 'none')
	    {
	    	show_content('map');
	    }
	    else
	    {
			show_content('random_battles');
		}
	}
}

function parse_hero_button(hero_id, hero_available){
	var parsed_hero_button = '';
	var hero_info = all_enemy_heroes[hero_id];
	var unit_info = all_available_cards[hero_id];
	var area_info = all_areas[current_area];

	var unknown_area_recipe_count = 0;
	$.each(hero_info['drops'], function(drop_id, drop_amount){
		if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
		if(all_available_cards[drop_id] != undefined && all_available_cards[drop_id]['type'] == 'recipe' && all_available_cards[drop_id]['recipe'] != undefined && gamedata['known_recipes'][all_available_cards[drop_id]['recipe']] == undefined)
		{
			unknown_area_recipe_count++;
		}
	});

	if(hero_available != undefined && hero_available == true)
	{
		parsed_hero_button += '<div class="menu_button third single_area" onclick="endless_waves=false;fixed_hero=\'' + hero_id + '\'" data-target-content="random_battle">';
	}
	else
	{
		parsed_hero_button += '<div class="menu_button third single_area hero_unavailable" data-target-content="areas">';
	}
	parsed_hero_button += '<div class="card_color color_' + area_info['color'] + '"></div>';
	var background_pos = '';
	if(unit_info['image_position'] != undefined){background_pos = 'background-position:' + unit_info['image_position'];}
	parsed_hero_button += '<div class="bg" style="background-image:url(images/' + unit_info['image'] + ');' + background_pos + '"></div>';
	parsed_hero_button += '<span>' + capitalizeFirstLetter(unit_info['name']) + '</span>';
	var max_difficulty = gamedata['defeated_heroes'][hero_id] + 1;
	var effective_difficulty = difficulty_setting + 0;
	if(effective_difficulty > max_difficulty){effective_difficulty = max_difficulty;}
	if(hero_available != undefined && hero_available == true)
	{
		if(gamedata['defeated_heroes'][hero_id] != undefined)
		{
			if(effective_difficulty != gamedata['defeated_heroes'][hero_id] + 1)
			{
				parsed_hero_button += '<span class="max_level">' + effective_difficulty + ' / ' + (gamedata['defeated_heroes'][hero_id] + 1) + '</span>';
			}
			else
			{
				parsed_hero_button += '<span class="max_level maxed_level">' + effective_difficulty + '</span>';
			}
		}
		else
		{
			parsed_hero_button += '<span class="max_level maxed_level">1</span>';
		}
		if(unknown_area_recipe_count > 0)
		{
			parsed_hero_button += '<span class="unknown_area_recipe_count">' + unknown_area_recipe_count + '</span>';
		}
	}
	else
	{
		parsed_hero_button += '<span class="max_level needed_hero">';
		var needed_heroes = check_defeated_heroes(hero_info['available']);
		parsed_hero_button +=  needed_heroes;
		/*$.each(hero_info['available'], function(needed_hero, needed_hero_level){
			if(gamedata['defeated_heroes'][needed_hero] < needed_hero_level && all_available_cards[needed_hero] != undefined)
			{
				parsed_hero_button +=  capitalizeFirstLetter(all_available_cards[needed_hero]['name']) + ' ' + needed_hero_level + '<br/>';
			}
		});*/
		parsed_hero_button += '</span>';
	}
	parsed_hero_button += '</div>';

	return parsed_hero_button;
};

function set_area_difficulty(amount){
	difficulty_setting += amount;
	
	gamedata['current_difficulty'] = difficulty_setting;
	saveToLocalStorage();
	
	
};

function set_all_hero_levels(level){
	$.each(all_enemy_heroes, function(hero_id, useless_info){
		gamedata['defeated_heroes'][hero_id] = level;
	});
	saveToLocalStorage();
}

function check_defeated_heroes(heroes){
	var not_available_text = '';
	if(heroes == undefined)
	{
		heroes = {};
	}
	$.each(heroes, function(hero_id, hero_wave){
		if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
		{
			not_available_text += capitalizeFirstLetter(all_available_cards[hero_id]['name']) + ' ' + hero_wave + '<br/>';
		}
	});
	return not_available_text;
}

function check_unassigned_recipes(color){
	var unassigned_total = 0;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['type'] == 'recipe' && (match_array_values(card_info['color'], color) == true || color == 'any'))
		{
			var recipe_assigned = false;
			$.each(all_enemy_heroes, function(hero_id, hero_info){
				if(hero_info['drops'][card_id] != undefined)
				{
					recipe_assigned = true;
				}
			});
			if(recipe_assigned == false)
			{
				console.log(card_id + ' ' + all_available_cards[card_info['recipe']]['value']);
				unassigned_total++;
			}
		}
	});
	console.log('total: ' + unassigned_total);
}