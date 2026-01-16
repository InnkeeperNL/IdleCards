var gamedata = {};


function loadLocalStorage(){
	if (typeof(localStorage.heroesincremental) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem("heroesincremental");
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    console.log('Sorry! No save game');  
	    gamedata['units'] = {};
	    //addunit(17, 1, 3);
	    gamedata['explore_level'] = 1;
	    gamedata['current_location'] = 1;
	    gamedata['unlocked_locations'] = {};
	    gamedata['unlocked_locations'][1] = 1;
	    gamedata['inventory'] = {};
	    gamedata['max_mana'] = 50;
	    gamedata['mana'] = 50;
	    gamedata['spells'] = {
	    	attack:{
				id: 	'attack',
				level: 	1,
				active: 1,
				cooldown: 0
			}
	    };
	    gamedata['gear'] = {};
	    gamedata['quest_progress'] = {};
	    gamedata['known_recipes'] = {};
	    saveToLocalStorage();
	}
	//console.log(gamedata);
	if(typeof(gamedata['tutorial']) == 'undefined')
	{
		gamedata['tutorial'] = {};
	}

	if(typeof(gamedata['gear']) == 'undefined')
	{
		gamedata['gear'] = {};
	}
	if(typeof(gamedata['explore_chain_bonus']) == 'undefined')
	{
		gamedata['explore_chain_bonus'] = {};
	}
	if(typeof(gamedata['unlocked_regions']) == 'undefined')
	{
		gamedata['unlocked_regions'] = {};
	}
	if(typeof(gamedata['skills']) == 'undefined')
	{
		gamedata['skills'] = {};
	}
	if(typeof(gamedata['specific_fights']) == 'undefined')
	{
		gamedata['specific_fights'] = {};
	}
	$.each(all_skills, function(skill,skill_info){
		if(gamedata['skills'][skill] == undefined)
		{
			gamedata['skills'][skill] = {level:1,xp:xp_from_level(1)};
		}
	});
	gamedata['inventory'] = sortObj(gamedata['inventory']);
	return gamedata;
};

function saveToLocalStorage(){
	localStorage.removeItem("heroesincremental");
	localStorage.setItem("heroesincremental", JSON.stringify(gamedata));
};

function clearLocalStorage(){
	localStorage.removeItem("heroesincremental");
};

function addunit(unit_id, level, slot){
	/*if(typeof(gamedata['units'][unit_id]) == 'undefined')
	{*/
		if(slot == 0)
		{
			var first_free_slot = 0;
			for (a = 1;a <= 5;a++){
				var found_unit_in_slot = false;
				$.each(gamedata['units'], function(akey, unit) {
					if(unit['slot'] == a)
					{
						found_unit_in_slot = true;
					}
				});
				if(found_unit_in_slot == false && first_free_slot == 0)
				{
					first_free_slot = a;
				}
			}
			slot = first_free_slot;
		}
		var newunit = {};
		newunit.unit_id = unit_id;
		newunit.level = level;
		newunit.slot = slot;
		newunit.xp = xp_from_level(level);
		var unit_count = get_highest_key_in_object(gamedata['units']);
		//console.log(unit_count);
		gamedata['units'][unit_count + 1] = newunit;
		if(gamedata['units'][unit_count + 1]['slot'] > 0 && combat_active == true)
		{
			parse_unit(unit_id, slot, 'ally', current_allies, level);
		}
	/*}
	else
	{
		gamedata['units'][unit_id]['level'] += level;
		gamedata['units'][unit_id]['xp'] = xp_from_level(gamedata['units'][unit_id]['level']);
		if(gamedata['units'][unit_id]['slot'] > 0 && combat_active == true)
		{
			parse_unit(gamedata['units'][unit_id]['unit_id'], gamedata['units'][unit_id]['slot'], 'ally', current_allies, gamedata['units'][unit_id]['level']);
		}
	}*/
	if(slot == 0 || true)
	{
		var random_x = Math.random() * 60 + 1;
		var random_y = Math.random() * 300 + 1;
		$('.main_window').append('<div id="loot_' + loot_counter + '" class="loot" style="background-image:url(images/units/' + available_units[unit_id]['image'] + ');margin-right:' + random_x + 'px;margin-top:' + random_y + 'px">lvl ' + level + '</div>')
		var current_loot_id = '#loot_' + loot_counter;
		check_quests('unit_gained', unit_id, 1);
		setTimeout(function(){
			$(current_loot_id).remove();
		},2900);
		loot_counter++;
	}
	
	saveToLocalStorage();
};

function delete_unit_of_type(unit_type, level){
	var deleted_one = false;
	$.each(gamedata['units'], function(unit_key, unit){
		if(unit['unit_id'] == unit_type && unit['slot'] == 0 && deleted_one == false && unit['level'] == level)
		{
			delete gamedata['units'][unit_key];
			deleted_one = true;
		}
	});
};


function delete_gear_of_type(gear_type, level){
	var deleted_one = false;
	$.each(gamedata['gear'], function(gear_key, gear){
		if(gear['gear_id'] == gear_type && deleted_one == false && gear['level'] == level)
		{
			delete gamedata['gear'][gear_key];
			deleted_one = true;
		}
	});
};

function check_unit_level(unit_id){
	var current_unit = gamedata['units'][unit_id];
	var level_threshold = xp_from_level(current_unit['level'] + 1);

	if(current_unit['xp'] > level_threshold)
	{
		current_unit['level'] = level_from_xp(current_unit['xp']);
		if(combat_active == true)
		{
			parse_unit(current_unit['unit_id'], current_unit['slot'], 'ally', current_allies, current_unit['level'], false, unit_id);
			generate_fct('ally_' + current_unit['slot'], 'level up', '#ff0', 2);
		}
		else
		{
			show_quest_message('<b>' + available_units[current_unit['unit_id']]['name'] + ' is now level ' + current_unit['level'] + '</b>', true);
		}
	}
}

function xp_from_level(level){
	//return (level) * (level) * level_xp_cost_factor;
	var xp_cost = base_level_cost;
	var total_xp_cost = 0;
	for(current_level = 1;current_level <= level;current_level++)
	{
		total_xp_cost += xp_cost;
		xp_cost *= level_xp_cost_factor;
	}
	return total_xp_cost;
}

function level_from_xp(xp){
	var xp_cost = base_level_cost;
	var total_xp_cost = 0;
	for(current_level = 0;total_xp_cost < xp;current_level++)
	{
		total_xp_cost += xp_cost;
		xp_cost *= level_xp_cost_factor;
	}
	if(total_xp_cost > xp)
	{
		current_level -= 1;
	}
	return current_level;
	//return Math.floor(Math.sqrt(xp / level_xp_cost_factor));
}

function unit_xp_percentage(unit_id){
	var current_unit = gamedata['units'][unit_id];
	if(current_unit != undefined)
	{
		var level_threshold = xp_from_level(current_unit['level'] + 1);
		var last_level_threshold = xp_from_level(current_unit['level']);
		var xp_needed_this_level = level_threshold - last_level_threshold;
		var xp_earned_this_level = current_unit['xp'] - last_level_threshold;
		var current_xp_percentage = (xp_earned_this_level / xp_needed_this_level) * 100;
	}
	else
	{
		//console.log(unit_id);
		current_xp_percentage = 0;
	}

	return current_xp_percentage;
}

function skill_xp_percentage(skill){
	var current_skill = gamedata['skills'][skill];
	if(current_skill != undefined)
	{
		var level_threshold = xp_from_level(current_skill['level'] + 1);
		var last_level_threshold = xp_from_level(current_skill['level']);
		var xp_needed_this_level = level_threshold - last_level_threshold;
		var xp_earned_this_level = current_skill['xp'] - last_level_threshold;
		var current_xp_percentage = (xp_earned_this_level / xp_needed_this_level) * 100;
	}
	else
	{
		//console.log(unit_id);
		current_xp_percentage = 0;
	}

	return current_xp_percentage;
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function get_unit_xp_this_level(unit_id){
	var current_unit = gamedata['units'][unit_id];
	var current_xp_this_level = '';
	if(current_unit != undefined)
	{
		var level_threshold = xp_from_level(current_unit['level'] + 1);
		var last_level_threshold = xp_from_level(current_unit['level']);
		var xp_needed_this_level = level_threshold - last_level_threshold;
		var xp_earned_this_level = current_unit['xp'] - last_level_threshold;
		var current_xp_percentage = Math.floor((xp_earned_this_level / xp_needed_this_level) * 100);
		current_xp_this_level = nFormatter(xp_earned_this_level,1) + ' / ' + nFormatter(xp_needed_this_level,1) + ' (' + current_xp_percentage + '%)';
	}

	return current_xp_this_level;
}

function addunit_of_level(unit_id, level, slot){
	gained_unit = false;
	var level_difference = level;
	if(typeof(gamedata['units'][unit_id]) == 'undefined')
	{
		if(slot == 0)
		{
			var first_free_slot = 0;
			for (a = 1;a <= 6;a++){
				var found_unit_in_slot = false;
				$.each(gamedata['units'], function(akey, unit) {
					if(unit['slot'] == a)
					{
						found_unit_in_slot = true;
					}
				});
				if(found_unit_in_slot == false && first_free_slot == 0)
				{
					first_free_slot = a;
				}
			}
			slot = first_free_slot;
		}
		var newunit = {};
		newunit.unit_id = unit_id;
		newunit.level = level;
		newunit.slot = slot;
		newunit.xp = xp_from_level(level);
		var unit_count = count_object(gamedata['units']);
		//console.log(unit_count);
		gamedata['units'][unit_id] = newunit;
		gained_unit = true;
		if(gamedata['units'][unit_id]['slot'] > 0 && combat_active == true)
		{
			parse_unit(gamedata['units'][unit_id]['unit_id'], gamedata['units'][unit_id]['slot'], 'ally', current_allies, gamedata['units'][unit_id]['level']);
		}
	}
	else
	{
		if(gamedata['units'][unit_id]['level'] < level)
		{
			level_difference = level - gamedata['units'][unit_id]['level'];
			gamedata['units'][unit_id]['level'] = level;
			gamedata['units'][unit_id]['xp'] = xp_from_level(level);
			gained_unit = true;
			if(gamedata['units'][unit_id]['slot'] > 0 && combat_active == true)
			{
				parse_unit(gamedata['units'][unit_id]['unit_id'], gamedata['units'][unit_id]['slot'], 'ally', current_allies, gamedata['units'][unit_id]['level']);
			}
		}
	}
	if(slot == 0 && gained_unit == true)
	{
		var random_x = Math.random() * 60 + 1;
		var random_y = Math.random() * 300 + 1;
		$('.main_window').append('<div id="loot_' + loot_counter + '" class="loot" style="background-image:url(images/units/' + available_units[unit_id]['image'] + ');margin-right:' + random_x + 'px;margin-top:' + random_y + 'px">+' + level_difference + '</div>')
		var current_loot_id = '#loot_' + loot_counter;
		check_quests('unit_gained', unit_id, 1);
		setTimeout(function(){
			$(current_loot_id).remove();
		},2900);
		loot_counter++;
	}
	
	saveToLocalStorage();
};

function set_current_location(location_id){
	gamedata['current_location'] = location_id;
	gamedata['explore_level'] = 1;
	saveToLocalStorage();
	show_quests();
	show_possible_chapters();
}

/*var previous_level_cost = xp_from_level(1);
console.log('1: ' + previous_level_cost);
for (test_level = 2;test_level < 10;test_level += 1){
	var last_level = xp_from_level(test_level -1);
	var this_level = xp_from_level(test_level);
	var actual_cost = this_level - last_level;
	var percent_increase = Math.floor((actual_cost / previous_level_cost) * 100);
	console.log(test_level + ': ' + actual_cost + ' / ' + previous_level_cost + 'xp (' + percent_increase + '%)' + ' = level '+ level_from_xp(actual_cost));
	previous_level_cost = actual_cost;
}*/