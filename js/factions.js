var showing_faction = '';
var base_faction_rep = 250;
var base_rep_reward = 25;
var color_bonus_rep = 0;

function show_factions(){

	if(gamedata['factions'] == undefined)
	{
		gamedata['factions'] = {};
	}


	var parsed_factions = '';
	parsed_factions += '<div class="single_expedition">';
	parsed_factions += 		'<span class="single_new_expedition_name">Factions</span><br/>';
	if(gamedata['current_faction'] && all_factions[gamedata['current_faction']] != undefined)
	{
		parsed_factions += 		'<span class="faction_description representing_current">Representing: ' + capitalizeFirstLetter(all_factions[gamedata['current_faction']]['name']) + '</span><br/>';
	}
	parsed_factions += 		'<span class="faction_description">Choose a faction to represent. You will get reputation with that faction for all battles won.<br/>If you gain levels with factions, they will increase the amount of certain rewards.</span><br/>';
	parsed_factions += '</div>'
	$.each(all_factions, function(faction_id, faction_info){

		var can_show = check_defeated_heroes(faction_info['shown']);
		var faction_available = check_defeated_heroes(faction_info['available']);
		if(can_show == '')
		{
			var faction_active = '';
			var representing = '';
			if(gamedata['current_faction'] != undefined && gamedata['current_faction'] == faction_id)
			{
				faction_active = 'active';
				representing = 'Representing: '
			}

			var current_reputation = 0;
			var reputation_progress = 0;
			var last_level = 0;
			var next_level = base_faction_rep;
			var reputation_level = 0;
			if(gamedata['factions'][faction_id] != undefined)
			{
				current_reputation = gamedata['factions'][faction_id]['reputation'];
				gamedata['factions'][faction_id]['level'] = calculate_faction_level(current_reputation);
				reputation_level = gamedata['factions'][faction_id]['level'];
				last_level = reputation_level * reputation_level * base_faction_rep;
				next_level = (reputation_level + 1) * (reputation_level + 1) * base_faction_rep;
				reputation_progress = (current_reputation - last_level) / (next_level - last_level) * 100;
			}

			parsed_factions += '<div class="single_expedition ' + faction_active + '">';
			parsed_factions += 		'<div class="faction_background" style="background-image:url(images/' + faction_info['image'] + ')"></div>';
			if(faction_available == '')
			{
				parsed_factions += 		'<span class="single_new_expedition_name">' + representing + capitalizeFirstLetter(faction_info['name']) + '</span>';
				parsed_factions += 		'<div class="faction_info_button" onclick="showing_faction=\'' + faction_id + '\';show_content(\'single_faction\')">INFO</div>';
				if(faction_active == '')
				{
					parsed_factions += '<div class="activate_faction_button" onclick="activate_faction(\'' + faction_id + '\')">REPRESENT</div>';
				}
				parsed_factions += 		'<div class="reputation_bar"><div class="reputation_progress_bar" style="width:' + reputation_progress + '%"></div><div class="reputation_progress_left">level: ' + reputation_level + '</div><div class="reputation_progress_right">' + numberWithCommas(current_reputation) + ' / ' + numberWithCommas(next_level) + '</div></div>';
			}
			else
			{
				parsed_factions += '<span class="not_available_text">' + faction_available + '</span>';
			}
			parsed_factions += '</div>';
		}
	});
	$('.factions_container').html(parsed_factions);
}

function show_single_faction(){
	var faction_info = all_factions[showing_faction];
	var parsed_faction = '';
	var faction_level = 0;
	if(gamedata['factions'][showing_faction] != undefined)
	{
		faction_level = gamedata['factions'][showing_faction]['level'];
	}

	parsed_faction += 		'<span class="faction_name">' + capitalizeFirstLetter(faction_info['name']) + '</span><br/>';
	parsed_faction += 		'<span class="faction_description">' + capitalizeFirstLetter(faction_info['description']) + '</span><br/>';
	parsed_faction += 		'<span class="faction_description">Gain reputation with this faction by winning battles while representing this faction.</span><br/>';
	//parsed_faction += 		'<span class="faction_description">Gain bonus reputation when using a ' + faction_info['hero_color'] + ' hero.</span><br/><br/>';

	parsed_faction += 		'<span class="faction_description"><br/>Current bonusses:</span><br/>';
	$.each(faction_info['loot_bonus'], function(loot_id, loot_amount){
		parsed_faction += 		'<span class="faction_bonus_title">' + capitalizeFirstLetter(all_available_cards[loot_id]['name']) + ':</span><span class="faction_bonus_current">+' + (loot_amount * faction_level) + '%</span><span class="faction_bonus_per_level">(' + loot_amount + '% per level)</span><br/>';
	});

	$('.faction_bg').css('background-image','url(images/' + faction_info['image'] + ')');
	$('.single_faction_container').html(parsed_faction);
}

function activate_faction(faction_id){
	gamedata['current_faction'] = faction_id;
	if(gamedata['factions'][faction_id] == undefined)
	{
		gamedata['factions'][faction_id] = {
			level: 			0,
			reputation: 	0
		}
	}
	saveToLocalStorage();
	show_factions();
}

function calculate_faction_level(current_reputation){
	return Math.floor(Math.sqrt(current_reputation / base_faction_rep));
}

function gain_current_rep(rep_gained){
	var current_faction_id = gamedata['current_faction'];
	gain_rep(current_faction_id, rep_gained)
}

var rep_bar_message_counter = 0;
function gain_rep(faction_id, rep_gained){
	if(all_factions[faction_id] != undefined)
	{
		rep_gained = round_by_percent(rep_gained * get_upgrade_factor('reputation', [faction_id, 'any']));
		if(gamedata['factions'][faction_id] == undefined)
		{
			gamedata['factions'][faction_id] = {
				level: 			0,
				reputation: 	0
			}
		}
		var faction_info = all_factions[faction_id];
		var previous_rep = gamedata['factions'][faction_id]['reputation'] + 0;
		var previous_level = gamedata['factions'][faction_id]['level'] + 0;
		var previous_last_level = previous_level * previous_level * base_faction_rep;
		var previous_next_level = (previous_level + 1) * (previous_level + 1) * base_faction_rep;
		var previous_reputation_progress = (previous_rep - previous_last_level) / (previous_next_level - previous_last_level) * 100;
		gamedata['factions'][faction_id]['reputation'] += rep_gained;
		gamedata['factions'][faction_id]['level'] = calculate_faction_level(gamedata['factions'][faction_id]['reputation']);
		saveToLocalStorage();
		rep_bar_message_counter++;
		var new_rep = gamedata['factions'][faction_id]['reputation'] + 0;
		var new_level = gamedata['factions'][faction_id]['level'] + 0;
		var new_last_level = new_level * new_level * base_faction_rep;
		var new_next_level = (new_level + 1) * (new_level + 1) * base_faction_rep;
		var new_reputation_progress = (new_rep - new_last_level) / (new_next_level - new_last_level) * 100;

		var temp_rep_bar_message_counter = rep_bar_message_counter + 0;
		var total_message = '';
		total_message += '<span class="faction_name">' + capitalizeFirstLetter(faction_info['name']) + '</span><br/>';
		total_message += '<div class="reputation_bar rep_bar_message_counter_' + temp_rep_bar_message_counter + '"><div class="reputation_progress_bar" style="width:' + previous_reputation_progress + '%"></div><div class="reputation_progress_bar_gained bar_1" style="left:' + previous_reputation_progress + '%;width:0%"></div><div class="reputation_progress_bar_gained bar_2" style="left:0%;width:0%"></div><div class="reputation_progress_left">level: ' + previous_level + '</div><div class="reputation_progress_right">' + numberWithCommas(previous_rep) + ' (+' + rep_gained + ') / ' + numberWithCommas(previous_next_level) + '</div></div>';
		show_message(total_message);

		var percent_gained = new_reputation_progress - previous_reputation_progress;

		if(previous_level == new_level)
		{
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_1').css('width', percent_gained + '%');
				//$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(new_rep) + ' / ' + numberWithCommas(new_next_level));
			},510);
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(new_rep) + ' / ' + numberWithCommas(new_next_level));
			},2510);
		}
		else
		{
			var percent_to_full = 100 - previous_reputation_progress;
			
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_1').css('width', percent_to_full + '%');
				//$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(previous_next_level) + ' / ' + numberWithCommas(previous_next_level));
			},510);
			setTimeout(function(){
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_2').css('width', new_reputation_progress + '%');
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar_gained.bar_1').css('display', 'none');
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_bar').css('width', '0%');
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_right').html(numberWithCommas(new_rep) + ' / ' + numberWithCommas(new_next_level));
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_left').html('Level: ' + new_level);
				$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_left').addClass('levelup');
				setTimeout(function(){
					$('.rep_bar_message_counter_' + temp_rep_bar_message_counter + ' .reputation_progress_left').removeClass('levelup');
				},500);
			},2510);
		}

	}
}