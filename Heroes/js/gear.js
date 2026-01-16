function show_gear(){
	$('.active_gear').html('');
	$('.owned_gear').html('');

	for(slot = 0;slot <= 9;slot++)
	{
		var found_gear_in_slot = false;
		$.each(gamedata['gear'], function(key, gear){
			var gear_content = '';
			if(gear['active'] == true && gear['active'] == true && found_gear_in_slot == false)
			{
				$.each(available_gear[gear['gear_id']]['slots'], function(ckey, current_slot){
					if(current_slot == slot)
					{
						gear_content += '<div class="unit quality_' + available_gear[gear['gear_id']]['quality'] + '" onclick="select_gear_slot(' + slot + ')" onmouseover="show_owned_gear_details(' + key + ')" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ')"><div class="unit_level">' + gear['level'] + '</div></div>';
						$('.active_gear').append(gear_content);
						found_gear_in_slot = true;
					}
				});
			}
		});
		if(found_gear_in_slot == false)
		{
			var slot_name = '';
			if(slot == 0){slot_name = 'consumable'};
			if(slot == 1){slot_name = 'head'};
			if(slot == 2){slot_name = 'main hand'};
			if(slot == 3){slot_name = 'off hand'};
			if(slot == 4){slot_name = 'chest'};
			if(slot == 5){slot_name = 'feet'};
			if(slot == 6){slot_name = 'accessory'};
			if(slot == 7){slot_name = 'hands'};
			if(slot == 8){slot_name = 'container'};
			if(slot == 9){slot_name = 'jewelry'};
			gear_content = '<div class="unit gear_slot gear_slot_' + slot + '" onclick="select_gear_slot(' + slot + ')">' + slot_name + '</div>';
			$('.active_gear').append(gear_content);
		}
	}

	/*$.each(gamedata['gear'], function(key, gear){
		var gear_content = '';
		if(gear['active'] != true)
		{
			gear_content += '<div class="unit quality_' + available_gear[gear['gear_id']]['quality'] + '" onclick="activate_gear(' + key + ')" onmouseover="show_owned_gear_details(' + key + ')" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ')"><div class="unit_level">' + gear['level'] + '</div></div>';
			$('.owned_gear').append(gear_content);
		}
		else
		{
			
			gear_content += '<div class="unit quality_' + available_gear[gear['gear_id']]['quality'] + '" onclick="deactivate_gear(' + key + ')" onmouseover="show_owned_gear_details(' + key + ')" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ');opacity:0.3"><div class="unit_level">' + gear['level'] + '</div></div>';
			$('.owned_gear').append(gear_content);
			
		}
	});*/

	var hero_stats = '';

	hero_stats += '<span class="player_stat">Strength:</span>' + 		get_player_attribute('strength') + '<br/>';
	hero_stats += '<span class="player_stat">Intellect:</span>' + 		get_player_attribute('intellect') + '<br/>';
	hero_stats += '<span class="player_stat">Agility:</span>' + 		get_player_attribute('speed') + '<br/>';
	hero_stats += '<br/>';
	hero_stats += '<span class="player_stat">Defense:</span>' + 		get_player_attribute('defense') + '<br/>';
	hero_stats += '<span class="player_stat">Resistance:</span>' + 		get_player_attribute('resistance') + '<br/>';
	hero_stats += '<span class="player_stat">Max health:</span>' + 		get_player_attribute('max_hp') + '<br/>';
	hero_stats += '<br/>';
	hero_stats += '<span class="player_stat">Regeneration:</span>' + 	get_player_attribute('regeneration') + '<br/>';
	hero_stats += '<span class="player_stat">Max mana:</span>' + 		get_player_attribute('max_mana') + '<br/>';
	hero_stats += '<br/>';
	hero_stats += '<span class="player_stat">Aggro factor:</span>' + 	Math.round(get_player_attribute('aggro_factor') * 10) / 10 + '<br/>';

	
/*	: 		0,
		intellect: 		0,
		speed: 			0,
		defense:  		3,
		resistance: 	0,
		regeneration: 	0,
		max_mana: 		0,
		max_hp: 		2,*/

	$('.owned_gear').append(hero_stats);
}

function select_gear_slot(slot){

	$('.owned_gear').html('');
	$.each(gamedata['gear'], function(key, gear){
		var show_this = false;
		$.each(available_gear[gear['gear_id']]['slots'], function(useless_key, slot_id){
			if(slot_id == slot)
			{
				show_this = true;
			}
		});
		if(show_this == true)
		{
			var gear_content = '';
			if(gear['active'] != true)
			{
				gear_content += '<div class="recipe_line_container" onclick="activate_gear(' + key + ')">';
				gear_content += 	'<div class="recipe_text">';
				gear_content += 		'<div class="item quality_' + available_gear[gear['gear_id']]['quality'] + '" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ');"></div>';
				gear_content += 		'<b>' + capitalizeFirstLetter(available_gear[gear['gear_id']]['name']) + ' (lvl ' + (gear['level']) + ')</b><br/>';
				gear_content += 		available_gear[gear['gear_id']]['description'] + '<br/>';
				gear_content += 		parse_gear_stats(gear['gear_id'], gear['level'], []);
				gear_content += 	'</div>';
				gear_content += '</div>';
				//gear_content += '<div class="unit quality_' + available_gear[gear['gear_id']]['quality'] + '" onclick="activate_gear(' + key + ')" onmouseover="show_owned_gear_details(' + key + ')" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ')"><div class="unit_level">' + gear['level'] + '</div></div>';
				$('.owned_gear').append(gear_content);
			}
			else
			{
				gear_content += '<div class="recipe_line_container" onclick="deactivate_gear(' + key + ')">';
				gear_content += 	'<div class="recipe_text">';
				gear_content += 		'<div class="item quality_' + available_gear[gear['gear_id']]['quality'] + '" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ');opacity:0.3;"></div>';
				gear_content += 		'<b>' + capitalizeFirstLetter(available_gear[gear['gear_id']]['name']) + ' (lvl ' + (gear['level']) + ')</b><br/>';
				gear_content += 		available_gear[gear['gear_id']]['description'] + '<br/>';
				gear_content += 		parse_gear_stats(gear['gear_id'], gear['level'], []);
				gear_content += 	'</div>';
				gear_content += '</div>';
				//gear_content += '<div class="unit quality_' + available_gear[gear['gear_id']]['quality'] + '" onclick="deactivate_gear(' + key + ')" onmouseover="show_owned_gear_details(' + key + ')" style="background-image:url(images/gear/' + available_gear[gear['gear_id']]['image'] + ');opacity:0.3"><div class="unit_level">' + gear['level'] + '</div></div>';
				$('.owned_gear').append(gear_content);
				
			}
		}
	});

	$('.owned_gear').append('<div class="button" onclick="show_gear()">Close</div>');

}

function deactivate_gear(gear_id){
	gamedata['gear'][gear_id]['active'] = false;
	saveToLocalStorage();
	show_gear();
}

function activate_gear(gear_id){

	$.each(available_gear[gamedata['gear'][gear_id]['gear_id']]['slots'], function(ckey, current_slot){
		$.each(gamedata['gear'], function(key, gear){
			if(gear['active'] == true)
			{
				$.each(available_gear[gear['gear_id']]['slots'], function(skey, slot){
					if(current_slot == slot)
					{
						gear['active'] = false;
					}
				});
			}
		});
	});

	gamedata['gear'][gear_id]['active'] = true;
	saveToLocalStorage();
	show_gear();
}

function gain_gear(gear_id, amount, subtypes, pos_x, pos_y){
	if(typeof(amount) == 'undefined')
	{
		amount = 1;
	}
	/*for (var i = amount - 1; i >= 0; i--) {*/
		var gear_count = get_highest_key_in_object(gamedata['gear']) + 1;
		/*if(typeof(gamedata['gear'][gear_count]) == 'undefined')
		{*/
			gamedata['gear'][gear_count] = {
				gear_id: 	gear_id,
				level: 		amount,
				active: 	false,
				subtypes: 	subtypes
			}
		/*}
		else
		{
			gamedata['gear'][gear_count]['level'] += amount;
		}*/
		if(typeof(pos_x) == 'undefined' || typeof(pos_y) == 'undefined')
		{
			var random_x = Math.random() * 60 + 1;
			var random_y = ((loot_counter - ((Math.floor(loot_counter / 5)) * 5)) * 80) + 1;
			$('.main_window').append('<div id="loot_' + loot_counter + '" class="loot quality_' + available_gear[gear_id]['quality'] + '" style="background-image:url(images/gear/' + available_gear[gear_id]['image'] + ');margin-right:' + random_x + 'px;margin-top:' + random_y + 'px"></div>')
		}
		else
		{
			var random_x = (Math.random() * 80) - 40;
			var random_y = (Math.random() * 80) - 40;
			$('.main_window').append('<div id="loot_' + loot_counter + '" class="dropped_loot quality_' + available_gear[gear_id]['quality'] + '" style="background-image:url(images/gear/' + available_gear[gear_id]['image'] + ');left:' + pos_x + 'px;top:' + pos_y + 'px"></div>')
			setTimeout(function(){
				$(current_loot_id).css('left', (pos_x + random_x) + 'px');
				$(current_loot_id).css('top', (pos_y + random_y) + 'px');
			},1);
		}
		var current_loot_id = '#loot_' + loot_counter;
		setTimeout(function(){
			$(current_loot_id).remove();
		},2900);
		loot_counter++;
	/*};*/
	check_quests('gear', gear_id, undefined);
	saveToLocalStorage();
}

function get_player_attribute(attribute){
	var total_attribute = 20;

	if(attribute == 'aggro_factor'){total_attribute = 1;}
	if(attribute == 'shield' || attribute == 'dodge' || attribute == 'reflect'){total_attribute = 0;}
	if(attribute == 'max_hp'){total_attribute = 50;}
	if(attribute == 'max_mana'){total_attribute = 50;}
	if(attribute == 'regeneration'){total_attribute = 10;}


	$.each(gamedata['gear'], function(key, gear){
		if(gear['active'] == true)
		{
			var gear_level_factor = 1;
			if(gear['level'] > 1 && attribute !== 'aggro_factor')
			{
				//gear_level_factor = Math.sqrt(1 + ((gear['level'] -1) / 10));
				gear_level_factor = get_level_factor(gear['level']);
			}

			var subtype_bonus = 0;

			$.each(gear['subtypes'], function(key, subtype){
				if(gear_types[subtype][attribute] !== undefined)
				{
					subtype_bonus += gear_types[subtype][attribute];
				}
				
			});
			
			
			var gear_attribute = 0;

			if(available_gear[gear['gear_id']][attribute] !== undefined)
			{
				gear_attribute = available_gear[gear['gear_id']][attribute];
			}

			if(attribute !== 'aggro_factor')
			{
				total_attribute += Math.floor((gear_attribute + subtype_bonus) * gear_level_factor);
			}
			else
			{
				total_attribute += (gear_attribute + subtype_bonus) * gear_level_factor;
			}
		}
	});

	return total_attribute;
}

function get_gear_attribute(gear_id, level, subtypes, attribute){
	var total_attribute = 0;

	var gear = available_gear[gear_id]

	var gear_level_factor = 1;
	if(level > 1 && attribute !== 'aggro_factor')
	{
		//gear_level_factor = Math.sqrt(1 + ((gear['level'] -1) / 10));
		gear_level_factor = get_level_factor(level);
	}

	var subtype_bonus = 0;
	$.each(subtypes, function(key, subtype){
		if(gear_types[subtype][attribute] !== undefined)
		{
			subtype_bonus += gear_types[subtype][attribute];
		}
		
	});

	var gear_attribute = 0;
	if(gear[attribute] !== undefined)
	{
		gear_attribute = gear[attribute];
	}

	if(attribute !== 'aggro_factor')
	{
		total_attribute += Math.floor((gear_attribute + subtype_bonus) * gear_level_factor);
	}
	else
	{
		total_attribute += ((gear_attribute + subtype_bonus));
	}
		
	return total_attribute;
}

function show_gear_details(gear_id){
	var level_factor = 1;
	if(gamedata['gear'][gear_id]['level'] > 1){
		//level_factor = Math.sqrt(1 + ((gamedata['gear'][gear_id]['level'] -1) / 10));
		level_factor = get_level_factor(gamedata['gear'][gear_id]['level']);
	}
	var current_gear = available_gear[gamedata['gear'][gear_id]['gear_id']];
	$('.details').html('');
	$('.details').append('<b>' + capitalizeFirstLetter(current_gear['name']) + '</b><br/>');
	$('.details').append('Level: <span class="stat_details">' + gamedata['gear'][gear_id]['level'] + '</span><br/>');
	if(current_gear['strength'] > 0){
	$('.details').append('Strength: <span class="stat_details">' + Math.floor(current_gear['strength'] * level_factor) + '</span><br/>');}
	if(current_gear['intellect'] > 0){
	$('.details').append('Intellect: <span class="stat_details">' + Math.floor(current_gear['intellect'] * level_factor) + '</span><br/>');}
	if(current_gear['speed'] > 0){
	$('.details').append('Speed: <span class="stat_details">' + Math.floor(current_gear['speed'] * level_factor) + '</span><br/>');}
	if(current_gear['defense'] > 0){
	$('.details').append('Defense: <span class="stat_details">' + Math.floor(current_gear['defense'] * level_factor) + '</span><br/>');}
	if(current_gear['resistance'] > 0){
	$('.details').append('Resistance: <span class="stat_details">' + Math.floor(current_gear['resistance'] * level_factor) + '</span><br/>');}
	if(current_gear['regeneration'] > 0){
	$('.details').append('Regeneration: <span class="stat_details">' + Math.floor(current_gear['regeneration'] * level_factor) + '</span><br/>');}
	if(current_gear['max_mana'] > 0){
	$('.details').append('Maximum mana: <span class="stat_details">' + Math.floor(current_gear['max_mana'] * level_factor) + '</span><br/>');}
	$('.details').append('Value: <span class="stat_details">' + current_gear['value'] + '</span><br/>');
	$('.details').append('<i>' + current_gear['description'] + '</i>');
};

function show_owned_gear_details(key){
	current_gear = gamedata['gear'][key];
	show_general_gear_details(current_gear['gear_id'], current_gear['level'], current_gear['subtypes']);
}

function show_general_gear_details(gear_id, level, subtypes){
	if(typeof(level) == 'undefined')
	{
		level = 1;
	}
	if(typeof(subtypes) == 'undefined')
	{
		subtypes = [];
	}
	var total_prepend = '';
	var total_append = '';
	$.each(subtypes, function(key, subtype){
		total_prepend += gear_types[subtype]['prepend'];
		total_append += gear_types[subtype]['append'];
	});
	var current_gear = available_gear[gear_id];
	$('.details').html('');
	$('.details').append('<b>' + capitalizeFirstLetter(total_prepend + available_gear[gear_id]['name'] + total_append) + '</b><br/>');
	var next_line = parse_gear_line(gear_id, level, subtypes, 'strength', 'Str');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'intellect', 'Int');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'speed', 'Agi');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'defense', 'Def');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'resistance', 'Res');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'max_hp', 'Hp');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'aggro_factor', 'Aggro');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'regeneration', 'Reg');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'max_mana', 'Mana');
	$('.details').append(next_line);
	var next_line = parse_gear_line(gear_id, level, subtypes, 'dodge', 'Dodge');
	$('.details').append(next_line);
	$('.details').append('<div style="clear:both;"></div>');
	$('.details').append(current_gear['description']);
};

function parse_gear_stats(gear_id, level, subtypes){
	var gear_stats = '';
	if(typeof(level) == 'undefined')
	{
		level = 1;
	}
	if(typeof(subtypes) == 'undefined')
	{
		subtypes = [];
	}
	var total_prepend = '';
	var total_append = '';
	$.each(subtypes, function(key, subtype){
		total_prepend += gear_types[subtype]['prepend'];
		total_append += gear_types[subtype]['append'];
	});
	var current_gear = available_gear[gear_id];
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'strength', 'Str');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'intellect', 'Int');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'speed', 'Agi');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'defense', 'Def');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'resistance', 'Res');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'max_hp', 'Hp');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'aggro_factor', 'Aggro');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'regeneration', 'Reg');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'max_mana', 'Mana');
	gear_stats += parse_gear_line(gear_id, level, subtypes, 'dodge', 'Dodge');

	return gear_stats;
}

function parse_gear_line(gear_id, level, subtypes, attribute, title){
	var current_gear = available_gear[gear_id];
	var current_attribute = get_total_stat_on_slot(attribute, current_gear['slots']);
	var gear_attribute = get_gear_attribute(gear_id, level, subtypes, attribute);
	if(gear_attribute !== 0 || current_attribute !== 0)
	{
		var attribute_difference = '';
		if(gear_attribute > current_attribute)
		{
			attribute_difference = '<span class="higher_attr">(+' + (gear_attribute - current_attribute) + ')</span> ';
		}
		if(gear_attribute < current_attribute)
		{
			attribute_difference = '<span class="lower_attr">(' + (gear_attribute - current_attribute) + ')</span> ';
		}
		return ('<span class="stat_block">' + title + ': <span class="stat_details">' + attribute_difference + gear_attribute + '</span></span>');
	}

	return '';
}

function get_total_stat_on_slot(attribute, slots){
	var total_attribute = 0;
	$.each(gamedata['gear'], function(key, gear){
		if(gear['active'] == true)
		{
			var gear_in_slot = false;
			$.each(available_gear[gear['gear_id']]['slots'], function(keyb, gear_slot){
				$.each(slots, function(keyc, requested_slot){
					if(gear_slot == requested_slot)
					{
						gear_in_slot = true;
					}
				});
			});
			if(gear_in_slot == true)
			{
				total_attribute += get_gear_attribute(gear['gear_id'], gear['level'], gear['subtypes'], attribute);
			}
		}
	});

	return total_attribute;
}

function get_random_unequipped_gear(subtype){
	var chosen_gear_id = -1;

	var total_unequipped_gear = 0;

	$.each(gamedata['gear'], function(gear_id, gear_info){
		if(gear_info['active'] == false){
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(available_gear[gear_info['gear_id']]['types'], function(useless_key, gear_subtype){
					if(gear_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				total_unequipped_gear++;
			}
		}
	});

	var random_choice = Math.random() * total_unequipped_gear;

	$.each(gamedata['gear'], function(gear_id, gear_info){
		if(gear_info['active'] == false){
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(available_gear[gear_info['gear_id']]['types'], function(useless_key, gear_subtype){
					if(gear_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				random_choice -= 1;
				if(random_choice < 0 && chosen_gear_id == -1)
				{
					chosen_gear_id = gear_id;
				}
			}
		}
	});
	return chosen_gear_id;
}

function get_random_level_1_gear(subtype){


	var chosen_gear_id = 'soft_shirt';

	var total_level_1_gear = 0;

	$.each(available_gear, function(gear_id, gear_info){
		if(gear_info['quality'] == 1){
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(gear_info['types'], function(useless_key, gear_subtype){
					if(gear_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				total_level_1_gear++;
			}
		}
	});

	var random_choice = Math.random() * total_level_1_gear;

	$.each(available_gear, function(gear_id, gear_info){
		if(gear_info['quality'] == 1){
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(gear_info['types'], function(useless_key, gear_subtype){
					if(gear_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				random_choice -= 1;
				if(random_choice < 0 && random_choice > -1)
				{
					chosen_gear_id = gear_id;
				}
			}
		}
	});
	return chosen_gear_id;
}