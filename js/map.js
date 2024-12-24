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