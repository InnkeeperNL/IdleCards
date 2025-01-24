var new_building_id = 0;
var current_fragment_page = 1;
var current_construction = '';
var all_current_rewards = {};
var current_reward_origin = '';
var current_reward_text = '';
var base_building_cost = 4;
var building_scraps_cost = 10;
var storage_maxed = 0;
var town_production_stored = 0;
var town_max_storage = 0;
var do_no_apply_factions = false;
var current_adventure = '';
var current_adventure_units = {};
var suggest_mode = 'all';
var owned_buildings_fragments = {};


function toggle_suggest_mode(){
	$('.suggest_view div').removeClass('active');
	

	if(suggest_mode == 'matched')
	{
		
		$('.suggest_view .suggest_slider').addClass('all');
		$('.suggest_view .suggest_all').addClass('active');
		suggest_mode = 'all';
	}
	else
	{
		$('.suggest_view .suggest_slider').removeClass('all');
		$('.suggest_view .suggest_matched').addClass('active');
		suggest_mode = 'matched'
	}

	show_adventure_units();
}

function check_owned_buildings(){
	owned_buildings_fragments = {};
	$.each(gamedata['town'], function(building_id, building_info){
		if(owned_buildings_fragments[all_buildings[building_info['building_id']]['fragment_id']] == undefined)
		{
			owned_buildings_fragments[all_buildings[building_info['building_id']]['fragment_id']] = {
				building_id: 		building_info['building_id'],
				building_level: 	building_info['level']
			};
		}
	});
	console.log(owned_buildings_fragments); 
}

function show_town(){
	//check_owned_buildings();
	$('.town_content').html('');
	var parsed_town = '';
	var time_now = new Date().getTime();

	if(gamedata['town'] == undefined)
	{
		gamedata['town'] = {};
		saveToLocalStorage();
	}

	if(gamedata['max_buildings'] == undefined)
	{
		gamedata['max_buildings'] = get_highest_key_in_object(gamedata['town']);
		saveToLocalStorage();
	}
	storage_maxed = 0;
	town_production_stored = 0;
	town_max_storage = 0;
	/*for(i = 0;i <= gamedata['max_buildings']; i++)
	{*/
		$.each(all_buildings, function(building_id, building_info){
			var can_show_this_area = true;
			var area_available = true;
			var not_available_text = '';
			/*$.each(building_info['shown'], function(hero_id, hero_wave){
				if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
				{
					can_show_this_area = false;
				}
			});
			not_available_text += check_defeated_heroes(building_info['available']);*/
			$.each(building_info['needed_upgrades'], function(needed_id, needed_level){
				if(gamedata['upgrades'] == undefined || gamedata['upgrades'][needed_id] == undefined || gamedata['upgrades'][needed_id] < needed_level)
				{
					can_show_this_area = false;
				}
			});
			if(not_available_text != ''){area_available = false;}
			if(can_show_this_area == true)
			{
				if(area_available == true && gamedata['town'][building_id] == undefined)
				{
					gamedata['town'][building_id] = {
						building_id:	building_id,
						level: 			1
					};
					saveToLocalStorage();
				}
				//$('.single_building_content').html('');
				/*if(gamedata['town'][i] == undefined)
				{
					parsed_town += '<div class="building" onclick="new_building_id=' + i + ';show_content(\'new_buildings\')"><span>BUILD</span></div>';
				}
				else
				{*/
					//var building_id = i;
					//var current_building = all_buildings[gamedata['town'][building_id]['building_id']];
					var current_building = building_info;
					
					if(area_available == true)
					{
						parsed_town += '<div class="building" onclick="current_building_id=\'' + building_id + '\';show_content(\'single_building\')">';
					}
					else
					{
						parsed_town += '<div class="building faded">';
					}
					parsed_town += '<div class="background" style="background-image:url(images/' + current_building['image'] + ')"></div>';
					if(area_available == true)
					{
						parsed_town += '<span>' + capitalizeFirstLetter(current_building['name']) + '</span>';
					}
					else
					{
						parsed_town += '<span class="not_available_text">' + not_available_text + '</span>';
					}
					parsed_town += '<span class="current_status">';
					var busy = 0;
					var done = 0;
					var free = 0;
					if(gamedata['town'][building_id] != undefined)
					{
						if(gamedata['town'][building_id]['level'] == undefined){gamedata['town'][building_id]['level'] = 1;}
						free = gamedata['town'][building_id]['level'] + 0;

					/*if(current_building['productions'] != undefined)
					{
						free = 1;
					}*/
						var first_done_time = 0;
						$.each(gamedata['town'][building_id]['expeditions'], function(expedition_id, expedition_info){
							free -= 1;
							if(expedition_info['done_time'] <= time_now){done += 1;}
							if(expedition_info['done_time'] > time_now){busy += 1;if(first_done_time == 0 || first_done_time > expedition_info['done_time']){first_done_time = expedition_info['done_time'];};}
						});
						$.each(gamedata['town'][building_id]['adventures'], function(expedition_id, expedition_info){
							free -= 1;
							if(expedition_info['done_time'] <= time_now){done += 1;}
							if(expedition_info['done_time'] > time_now){busy += 1;if(first_done_time == 0 || first_done_time > expedition_info['done_time']){first_done_time = expedition_info['done_time'];};}
						});

						if(gamedata['town'][building_id]['adventures'] != undefined || gamedata['town'][building_id]['expeditions'] != undefined)
						{
							if(busy > 0)
							{
								//parsed_town += '<br/>Busy: ' + busy;
								parsed_town += '<br/><span class="timer" data-complete-time=' + first_done_time + '></span>';
							}
							if(done > 0)
							{
								//parsed_town += '<br/><b><span style="color:#afa">DONE: ' + done + '</span></b>';
								parsed_town += '<br/><b><span style="color:#afa">DONE</span></b>';
							}
							if(free > 0 && done == 0 && busy == 0)
							{
								//parsed_town += '<br/>Free slots: ' + free;
								parsed_town += '<br/>Idle';
							}
						}

						if(gamedata['town'][building_id] != undefined && current_building['type'] == 'shop')
						{
							var offers_available = 0;
							$.each(gamedata['town'][building_id]['current_offers'], function(offer_id, offer_info){
								if(offer_info['sold'] == undefined || new Date(offer_info['offer_expires']) < new Date())
								{
									offers_available++;
								}
							});
							if(offers_available > 0)
							{
								//parsed_town += '<br/>Offers: ' + offers_available;
								parsed_town += '<br/>Offer available';
							}
						}

					
						var total_storage = 0;
						var total_max_storage = 0;
						var building_level = 	gamedata['town'][building_id]['level'];
						if(gamedata['town'][building_id] != undefined && gamedata['town'][building_id]['productions'] != undefined && current_building['productions'] != undefined)
						{
							$.each(current_building['productions'], function(production_id, production_info){
								if(gamedata['town'][building_id]['productions'][production_id] != undefined && (gamedata['town'][building_id]['productions'][production_id]['production_id'] == undefined || gamedata['town'][building_id]['productions'][production_id]['production_id'] != false))
								{
									if(gamedata['town'][building_id]['productions'][production_id]['speed_level'] == undefined){gamedata['town'][building_id]['productions'][production_id]['speed_level'] = 1;}
									if(gamedata['town'][building_id]['productions'][production_id]['storage_level'] == undefined){gamedata['town'][building_id]['productions'][production_id]['storage_level'] = 1;}
									var current_production = gamedata['town'][building_id]['productions'][production_id];
									var production_info = 	current_building['productions'][production_id];
									//var production_time = Math.floor(production_info['base_time'] / ( 0.65 + (current_production['speed_level'] / 10)));
									var production_time = calculate_production_speed(current_production['speed_level'], production_info['base_time'], production_info['defeated_heroes_speed_bonusses'], production_info['production_achievement_bonus'], gamedata['town'][building_id]['level']);
									var time_elapsed = (new Date().getTime() - current_production['last_claimed']) / 1000;
									var ready_production = Math.floor(time_elapsed / production_time);
									//var max_storage = Math.ceil(production_info['base_storage'] * (0.75 + (current_production['storage_level'] / 4)));
									var max_storage = calculate_production_storage(current_production['storage_level'], production_info['base_storage'], production_info['defeated_heroes_speed_bonusses'], gamedata['town'][building_id]['level']);
									var shown_ready_production = Math.floor(time_elapsed / production_time);
									if(shown_ready_production > max_storage)
									{
										shown_ready_production = max_storage;
									}
									total_storage += shown_ready_production;
									total_max_storage += max_storage;
									town_production_stored += shown_ready_production;
									town_max_storage += max_storage;
								}
							});
						}
						if(total_max_storage > 0)
						{
							if(total_storage >= total_max_storage)
							{
								parsed_town += '<br/><span style="color:#f00"><b>STORAGE FULL</b></span>';
								storage_maxed++;
							}
							else
							{
								if(total_storage > 0)
								{
									parsed_town += '<br/><span style="color:#afa">Storage: ' + nFormatter(total_storage,2) + ' / ' + nFormatter(total_max_storage,2) + '</span>';
								}
								else
								{
									parsed_town += '<br/>Storage: 0 / ' + total_max_storage;
								}
							}
						}
						
					}
					/*var upgrade_cost = calculate_upgrade_cost(building_level);
					if(gamedata['owned_cards'][current_building['fragment_id']] >= upgrade_cost && gamedata['scraps'] >= upgrade_cost * building_scraps_cost)
					{
						parsed_town += '<br/><span style="color:#afa"><b>UPGRADABLE</b></span>';
					}*/
					parsed_town += '</span>';
					parsed_town += '</div>';
				/*}*/
			}
		});
	//}
	/*var cost_new_slot = calculate_new_building_slot_cost();
	if(gamedata['max_buildings'] < 1100)
	{
		if(gamedata['scraps'] >= cost_new_slot)
		{
			parsed_town += '<div class="building new_slot_text" onclick="buy_new_building_slot();"><span>BUY NEW SLOT<br/>' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(cost_new_slot) + ' scraps</span></div>';
		}
		else
		{
			parsed_town += '<div class="building faded new_slot_text" onclick="buy_new_building_slot();"><span>BUY NEW SLOT<br/>' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(cost_new_slot) + ' scraps</span></div>';
		}
	}*/

	$('.town_content').html(parsed_town);
	if(count_object(gamedata['town']) == 1)
	{
		$.each(gamedata['town'], function(building_id, building_info){
			current_building_id	= building_id;
			
		});
		if(last_content == 'single_building')
		{
			show_content('home');
		}
		else
		{
			show_content('single_building');
		}
	}
	else
	{
		update_all_timers();
	}
}

function calculate_production_speed(speed_level, base_time, defeated_heroes_speed_bonusses, production_achievement_bonus, building_level){
	var defeated_heroes_bonus = 1;
	$.each(defeated_heroes_speed_bonusses, function(hero_id, bonus_amount){
		if(gamedata['defeated_heroes'] != undefined && gamedata['defeated_heroes'][hero_id] != undefined)
		{
			defeated_heroes_bonus += (gamedata['defeated_heroes'][hero_id] * bonus_amount);
		}
	});
	if(production_achievement_bonus != undefined)
	{
		var achievement_bonus = 1 + (get_completed_achievement_count() * production_achievement_bonus);
		defeated_heroes_bonus *= achievement_bonus;
	}
	return  Math.ceil(base_time / ((1 + (sqr(speed_level) / 20)) * defeated_heroes_bonus * building_level));
}

function calculate_production_speed_cost(speed_level, base_cost){
	
	return Math.ceil(base_cost * (1 + (sqr(sqr(speed_level)) / 50)));
}

function calculate_production_storage(speed_level, base_storage, defeated_heroes_speed_bonusses, building_level){
	var defeated_heroes_bonus = 1;
	$.each(defeated_heroes_speed_bonusses, function(hero_id, bonus_amount){
		if(gamedata['defeated_heroes'] != undefined && gamedata['defeated_heroes'][hero_id] != undefined)
		{
			defeated_heroes_bonus += (gamedata['defeated_heroes'][hero_id] * bonus_amount);
		}
	});
	return Math.floor(base_storage * (1 + (sqr(speed_level) / 20)) * defeated_heroes_bonus * building_level);
}

function calculate_new_building_slot_cost(){
	var cost = 10;
	for(i = 0;i <= gamedata['max_buildings']; i++)
	{
		cost *= 2.5;
	}
	return Math.floor(cost / 10) * 10;
};

function buy_new_building_slot(){
	var cost_new_slot = calculate_new_building_slot_cost();
	if(gamedata['scraps'] >= cost_new_slot)
	{
		gamedata['scraps'] -= cost_new_slot;
		gamedata['max_buildings'] += 1;
		saveToLocalStorage();
	}
	show_content('town');
}

function show_new_buildings(){
	/*if(gamedata['town'][new_building_id] != undefined)
	{
		show_content('town');
	}
	else
	{*/
		cards_per_page = 12;
		$('#content_new_buildings .new_buildings_list').html('<span class="no_tinker">You have no fragments.<br/>You can find them in battles.</span>');

		gamedata['owned_cards'] = sortObj(gamedata['owned_cards']);
		var current_card_number = 0;

		$.each(all_buildings, function(building_id, building_info){
			var card_filtered = false;
			var effective_owned_amount = 0;
			if(gamedata['owned_cards'][building_info['fragment_id']] == undefined)
			{
				card_filtered = true;
			}
			else
			{
				effective_owned_amount = gamedata['owned_cards'][building_info['fragment_id']] + 0;
			}

			current_card_number ++;
			if(current_card_number == 1)
			{
				$('#content_new_buildings .new_buildings_list').html('');
			}
			if(current_card_number / cards_per_page > current_fragment_page -1 && current_card_number / cards_per_page <= current_fragment_page)
			{
				var parsed_card = parse_card(building_info['fragment_id'], effective_owned_amount);
				if(gamedata['town'][new_building_id] == undefined)
				{
					if(effective_owned_amount < base_building_cost)
					{
						$('#content_new_buildings .new_buildings_list').append('<div class="fragment faded" onclick="show_construct_building(\'' + building_id + '\')">' + parsed_card + '</div>');
					}
					else
					{
						$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_construct_building(\'' + building_id + '\')">' + parsed_card + '</div>');
					}
				}
				else
				{
					//$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_card_details(\'' + building_id + '\')">' + parsed_card + '</div>');
				}
			};
		});

		/*$.each(gamedata['owned_cards'], function(card_id, owned_amount){
			var effective_owned_amount = owned_amount + 0;

			var card_filtered = false;
			if(all_available_cards[card_id]['type'] != 'fragment')
			{
				card_filtered = true;
			}
			
			if(effective_owned_amount > 0 && card_filtered == false)
			{
				current_card_number ++;
				if(current_card_number == 1)
				{
					$('#content_new_buildings .new_buildings_list').html('');
				}
				if(current_card_number / cards_per_page > current_fragment_page -1 && current_card_number / cards_per_page <= current_fragment_page)
				{
					var parsed_card = parse_card(card_id, effective_owned_amount);
					if(gamedata['town'][new_building_id] == undefined)
					{
						if(effective_owned_amount < base_building_cost)
						{
							$('#content_new_buildings .new_buildings_list').append('<div class="fragment faded" onclick="show_construct_building(\'' + card_id + '\')">' + parsed_card + '</div>');
						}
						else
						{
							$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_construct_building(\'' + card_id + '\')">' + parsed_card + '</div>');
						}
					}
					else
					{
						$('#content_new_buildings .new_buildings_list').append('<div class="fragment" onclick="show_card_details(\'' + card_id + '\')">' + parsed_card + '</div>');
					}
					
				}
			}
		});*/
		if(current_fragment_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
		if(current_card_number / cards_per_page <= current_fragment_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
		if(current_card_number > 0 && Math.ceil(current_card_number / cards_per_page) < current_fragment_page)
		{
			current_fragment_page = 1;
			show_new_buildings();
		}
		if(current_card_number == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
		$('.page_selection .page_number').html(current_fragment_page + ' / ' + Math.ceil(current_card_number / cards_per_page));
	/*}*/
}

function set_fragments_page(amount){
	current_fragment_page += amount;
	if(current_fragment_page < 1){current_fragment_page = 1;}
	show_new_buildings();
}

function show_construct_building(card_id){
	current_construction = '';
	/*if(gamedata['owned_cards'][card_id] < 100)
	{
		show_content('town');
	}
	else
	{*/
		/*$.each(all_buildings, function(building_id, building_info){
			if(building_info['fragment_id'] == card_id && current_construction == '')
			{
				current_construction = building_id;
			}
		});*/
	/*}*/
	if(all_buildings[card_id] != undefined)
	{
		current_construction = card_id;
	}
	if(current_construction != '')
	{
		show_content('construction');
	}

}

function show_construction(){
	if(current_construction == '' || all_buildings[current_construction] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_building = all_buildings[current_construction];
		$('.construction_content').html('');
		var owned_fragments = 0;
		if(gamedata['owned_cards'][current_building['fragment_id']] != undefined)
		{
			owned_fragments = gamedata['owned_cards'][current_building['fragment_id']];
		}
		var parsed_cost = parse_card(current_building['fragment_id'], owned_fragments + ' / ' + base_building_cost);
		if(owned_fragments < base_building_cost)
		{
			parsed_cost = parse_card(current_building['fragment_id'], '<span style="color:red">' + owned_fragments + ' / ' + base_building_cost + '</span>');
		}
		if(gamedata['scraps'] < base_building_cost * building_scraps_cost)
		{
			parsed_cost += parse_card('scraps_placeholder', '<span style="color:red">' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(base_building_cost * building_scraps_cost) + '</span>');
		}
		else
		{
			parsed_cost += parse_card('scraps_placeholder', '' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(base_building_cost * building_scraps_cost) + '');
		}
		

		$('.construction_content').append('<div class="construction_name">' + capitalizeFirstLetter(current_building['name']) + '</div>');
		if(gamedata['owned_cards'][current_building['fragment_id']] < base_building_cost || gamedata['scraps'] < base_building_cost * building_scraps_cost)
		{
			$('.construction_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['description']) + '</div>');
		}
		else
		{
			$('.construction_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['description']) + '</div>');
			$('.construction_content').append('<div onclick="construct_current_building()" class="construction_button">BUILD</div>');
		}
		$('.construction_content').append('<div class="fragment_cost">' + parsed_cost + '<div style="clear:both"></div></div>');
	}
}

function construct_current_building(){
	if(current_construction != '' && all_buildings[current_construction] != undefined && gamedata['town'][new_building_id] == undefined)
	{
		var current_building = all_buildings[current_construction];
		if(gamedata['owned_cards'][current_building['fragment_id']] >= base_building_cost && gamedata['scraps'] >= base_building_cost * building_scraps_cost)
		{
			gamedata['owned_cards'][current_building['fragment_id']] -= base_building_cost;
			gamedata['scraps'] -= base_building_cost * building_scraps_cost;
			gamedata['town'][new_building_id] = {
				building_id:	current_construction,
				level: 			1
			};
			saveToLocalStorage();
		}
	}
	current_building_id = new_building_id;
	show_content('single_building');
}

function upgrade_current_building(){
	if(current_building_id != undefined)
	{
		var current_building = all_buildings[gamedata['town'][current_building_id]['building_id']];
		var upgrade_cost = calculate_upgrade_cost(gamedata['town'][current_building_id]['level']);
		if(gamedata['owned_cards'][current_building['fragment_id']] >= upgrade_cost && gamedata['scraps'] >= upgrade_cost * building_scraps_cost)
		{
			gamedata['owned_cards'][current_building['fragment_id']] -= upgrade_cost;
			gamedata['scraps'] -= upgrade_cost * building_scraps_cost;
			gamedata['town'][current_building_id]['level'] += 1;
			saveToLocalStorage();
		}
	}
	show_content('single_building');
}

function show_single_building(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_button').remove();
		$('.building_recipes_button').remove();
		//$('.single_building_content').html('</div>');
		var complete_building_list = '';
		var new_expedition_button = '';

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];

		$('.building_bg').css('background-image','url(images/' + building_info['image'] + ')');

		$('#content_single_building h2').html( capitalizeFirstLetter(building_info['name']) /*+ ' level ' + current_building['level']*/);

		$('.upgrade_building_button').removeClass('click_me');
		var upgrade_cost = calculate_upgrade_cost(building_level);
		if(gamedata['owned_cards'][building_info['fragment_id']] >= upgrade_cost && gamedata['scraps'] >= upgrade_cost * building_scraps_cost)
		{
			$('.upgrade_building_button').addClass('click_me');
		}

		if(building_info['productions'] != undefined)
		{
			var next_unlock_cost = false;
			if(current_building['productions'] == undefined)
			{
				current_building['productions'] = {};
			}
			if(count_object(building_info['productions']) > 1)
			{
				complete_building_list += '<div class="claim_all_production_button" onclick="claim_all_production()">CLAIM ALL</div>';
			}
			$.each(building_info['productions'], function(production_result, production_info){
				if(current_building['productions'][production_result] == undefined && production_info['unlock_cost'] == undefined)
				{
					current_building['productions'][production_result] = {
						level: 			1,
						speed_level: 	1,
						storage_level: 	1,
						last_claimed: 	new Date().getTime(),
					}
					if(production_info['production_pickable'] != undefined && production_info['production_pickable'] == true)
					{
						current_building['productions'][production_result]['production_id'] = false;
					}
					saveToLocalStorage();
				}
				if(current_building['productions'][production_result] != undefined)
				{
					var current_production = current_building['productions'][production_result];
					//var production_time = Math.floor(production_info['base_time'] / ( 0.65 + (current_production['speed_level'] / 10)));
					var production_info = 	building_info['productions'][production_result];
					var production_time = calculate_production_speed(current_production['speed_level'], production_info['base_time'], production_info['defeated_heroes_speed_bonusses'], production_info['production_achievement_bonus'], current_building['level']);
					var time_elapsed = (new Date().getTime() - current_production['last_claimed']) / 1000;
					var ready_production = Math.floor(time_elapsed / production_time);
					//var max_storage = Math.ceil(production_info['base_storage'] * (0.75 + (current_production['storage_level'] / 4)));
					var max_storage = calculate_production_storage(current_production['storage_level'], production_info['base_storage'], production_info['defeated_heroes_speed_bonusses'], current_building['level']);
					var shown_ready_production = Math.floor(time_elapsed / production_time);
					if(shown_ready_production > max_storage)
					{
						shown_ready_production = max_storage;
					}
					var time_to_next_production = new Date().getTime() + ((production_time - (time_elapsed - (production_time * ready_production))) * 1000);
					//console.log(time_elapsed);

					var parsed_production = '';
					parsed_production += '<div class="single_expedition production_bar">';
					var result_name = '';
					if(all_available_cards[production_result] != undefined){result_name = production_result;}
					if(production_result == 'scraps'){result_name = 'scraps_placeholder';}
					if(all_available_cards[production_result] != undefined || (current_building['productions'][production_result]['production_id'] != undefined && current_building['productions'][production_result]['production_id'] != false))
					{
						var actual_result = production_result;
						if(current_building['productions'][production_result]['production_id'] != undefined && current_building['productions'][production_result]['production_id'] != false && all_available_cards[current_building['productions'][production_result]['production_id']] != undefined)
						{
							actual_result = current_building['productions'][production_result]['production_id'];
							result_name = actual_result;
						}
						parsed_production += 	'<span class="single_new_expedition_name">' + capitalizeFirstLetter(all_available_cards[result_name]['name']) + '<br/></span>';
						var parsed_result = parse_card(result_name);
						parsed_production += '<span onclick="claim_production(\'' + production_result + '\')">' + parsed_result + '</span>';
						parsed_production += '<div onclick="claim_production(\'' + production_result + '\')" class="production_time">' + toHHMMSS(production_time) + '</div>';
						if(ready_production < max_storage)
						{
							parsed_production += '<div onclick="claim_production(\'' + production_result + '\')" class="production_time_left timer" data-complete-time=' + time_to_next_production + ' data-complete-function="show_single_building"></div>';
						}
						if(ready_production > 0)
						{
							/*parsed_production += '<div class="production_claim_button" onclick="claim_production(\'' + production_result + '\')">CLAIM</div>';*/
						}
						parsed_production += 	'<div onclick="claim_production(\'' + production_result + '\')" class="production_storage_container">';
						var production_storage_bar_width = Math.floor(shown_ready_production / max_storage * 100);
						parsed_production += 		'<div class="production_storage_bar" style="width:' + production_storage_bar_width + '%"></div>';
						parsed_production += 		'<div class="production_storage_amount">' + nFormatter(shown_ready_production,2) + ' / ' + nFormatter(max_storage,2) + '</div>';
						parsed_production += 	'</div>';
						if(production_info['production_pickable'] != undefined && production_info['production_pickable'] == true)
						{
							parsed_production += 	'<div onclick="cancel_pickable_production(\'' + production_result + '\')" class="cancel_pickable_production_button">CHANGE</div>';
						}
					}
					else
					{

						if(production_info['production_pickable'] != undefined && production_info['production_pickable'] == true)
						{
							parsed_production += 	'<span class="single_new_expedition_name">Pick production<br/></span>';
							$.each(production_info['pickable_productions'], function(pickable_id, pickable_info){
								var resource_available = check_defeated_heroes(pickable_info['available']);
								var pickable_name = '';
								if(all_available_cards[pickable_id] != undefined){pickable_name = pickable_id;}
								if(pickable_id == 'scraps'){pickable_name = 'scraps_placeholder';}
								var parsed_pickable = parse_card(pickable_name);
								if(resource_available == '')
								{
									parsed_production += '<span onclick="set_pickable_production(\'' + production_result + '\',\'' + pickable_id + '\')">' + parsed_pickable + '</span>';
								}
							});
						}
					}
					parsed_production += 	'<div class="increase_production_container">';
					if(all_available_cards[production_result] != undefined || (current_building['productions'][production_result]['production_id'] != undefined && current_building['productions'][production_result]['production_id'] != false))
					{
						if(count_object(production_info['upgrade_cost_speed']) > 0)
						{
							parsed_production += 	'<div class="upgrade_section">';
							parsed_production += 		'<span class="">Production</span><br/>';
							var can_upgrade = true;
							
							$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
								//var actual_cost = cost_amount * current_production['speed_level'];
								var actual_cost = calculate_production_speed_cost(current_production['speed_level'], cost_amount);
								var owned_amount = 0;
								if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
								if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
								var parsed_cost = '';
								var cost_name = 'Scraps';
								if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
								if(owned_amount < actual_cost)
								{
									//parsed_cost = parse_card(cost_id, '<span style="color:red">' + owned_amount + ' / ' + actual_cost + '</span>');
									parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
									can_upgrade = false;
								}
								else
								{
									parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
								}
								parsed_production += 	'<div class="production_upgrade_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
							});
							if(can_upgrade == true)
							{
								parsed_production += 	'<br/><div class="production_upgrade_button" onclick="upgrade_production(\'' + production_result + '\')">UPGRADE</div>';
							}
							parsed_production += 	'</div>';
						}
						parsed_production += 	'<div class="upgrade_section">';
						parsed_production += 		'<span class="">Storage</span><br/>';
						var can_upgrade = true;
						$.each(production_info['upgrade_cost_storage'], function(cost_id, cost_amount){
							//var actual_cost = cost_amount * current_production['storage_level'];
							var actual_cost = calculate_production_speed_cost(current_production['storage_level'], cost_amount);
							var owned_amount = 0;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
							if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
							var parsed_cost = '';
							var cost_name = 'Scraps';
							if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
							if(owned_amount < actual_cost)
							{
								//parsed_cost = parse_card(cost_id, '<span style="color:red">' + owned_amount + ' / ' + actual_cost + '</span>');
								parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
								can_upgrade = false;
							}
							else
							{
								parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '</span>';
							}
							parsed_production += 	'<div class="production_upgrade_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
						});
						
						if(can_upgrade == true)
						{
							parsed_production += 	'<br/><div class="production_upgrade_button" onclick="upgrade_storage(\'' + production_result + '\')">UPGRADE</div>';
						}
						parsed_production += 	'</div>';
					}
					parsed_production += 	'</div>';
					parsed_production += 	'<div style="clear:both"></div>';
					parsed_production += '</div>';
					//$('.single_building_content_list').append(parsed_production);
					complete_building_list += parsed_production;
				}
				else
				{
					if(next_unlock_cost == false)
					{
						next_unlock_cost = production_info['unlock_cost'];
						var button_red = '';
						if(gamedata['scraps'] < next_unlock_cost)
						{
							button_red = 'button_red';
						}
						complete_building_list += '<div class="claim_all_production_button ' + button_red + '" onclick="buy_next_production(\'' + production_result + '\')">UNLOCK NEXT<br/>' + nFormatter(gamedata['scraps'],3) + ' / ' + nFormatter(next_unlock_cost,3) + ' scraps</div>';

					}
				}
			});
		}
		if(building_info['recipes'] != undefined && count_object(building_info['recipes']) > 0)
		{
			//$('.single_building_content').append('<div class="building_recipes_button" onclick="show_content(\'building_recipes\')">CRAFT</div>');
			complete_building_list += show_building_recipes();
		}
		if(building_info['recipe_shop'] != undefined)
		{
			if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
			$.each(building_info['recipe_shop'], function(offer_key, offer_info){
				if(gamedata['known_recipes'][offer_key] == undefined)
				{
					var can_show_this_area = true;
					var area_available = true;
					if(gamedata['defeated_heroes'] == undefined){gamedata['defeated_heroes'] = {};}
					$.each(offer_info['shown'], function(hero_id, hero_wave){
						if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
						{
							can_show_this_area = false;
						}
					});
					$.each(offer_info['available'], function(hero_id, hero_wave){
						if(gamedata['defeated_heroes'][hero_id] == undefined || gamedata['defeated_heroes'][hero_id] < hero_wave)
						{
							area_available = false;
						}
					});
					if(can_show_this_area == true)
					{

						var parsed_recipe = '';
						var parsed_result = parse_card(offer_key);
						var can_craft = true;
						parsed_recipe += '<div class="single_building_recipe">';
						parsed_recipe += 	'<span class="single_new_expedition_name">Recipe: ' + capitalizeFirstLetter(all_available_cards[offer_key]['name'] + '</span>');
						if(area_available == true)
						{
							parsed_recipe += 	'<div class="single_building_recipe_costs"><br/>';
							$.each(offer_info['cost'], function(cost_id, cost_amount){
								//if(gamedata['owned_cards'][cost_id] == undefined){gamedata['owned_cards'][cost_id] = 0;}
								var owned_amount = 0;
								if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
								if(gamedata['owned_cards'][cost_id] != undefined){owned_amount = gamedata['owned_cards'][cost_id];}
								var cost_name = 'Scraps';
								if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
								if(owned_amount < cost_amount)
								{
									can_craft = false;

									var parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(cost_amount,3) + '</span>';
								}
								else
								{
									var parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(cost_amount,3) + '</span>';
								}
								
								parsed_recipe += '<div class="single_building_recipe_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
							});
							parsed_recipe += 	'</div>';
							parsed_recipe += 	'<div class="single_building_recipe_result" onclick="show_card_details(\'' + offer_key + '\')">' + parsed_result + '</div>';
							if(can_craft == true)
							{
								parsed_recipe += 	'<div class="single_building_recipe_craft_button" onclick="learn_local_recipe(\'' + offer_key + '\')">LEARN</div>';
							}
						}
						else
						{
							parsed_recipe += 	'<div class="single_building_recipe_result" onclick="show_card_details(\'' + offer_key + '\')" style="opacity:0.5">' + parsed_result + '</div>';
						}
						parsed_recipe += '<div style="clear:both"></div>';
						parsed_recipe += '</div>';
						complete_building_list += parsed_recipe;
					}
				}
			});
		}
		if(building_info['shop_type'] != undefined)
		{
			check_current_offers();
			$.each(current_building['current_offers'], function(offer_key, offer_info){
				//console.log(offer_info);
				var temp_offer_amount = '';
				if(offer_info['card_amount'] > 1){temp_offer_amount = '' + offer_info['card_amount'] + 'x ';}
				var parsed_expedition = '';
				parsed_expedition += '<div class="single_expedition single_offer"><span class="single_new_expedition_name">' + capitalizeFirstLetter(all_available_cards[offer_info['card_id']]['name']) + '</span><br/><span class="single_new_expedition_description">' + capitalizeFirstLetter(offer_info['buysell']) + 'ing: ' + temp_offer_amount + '' + capitalizeFirstLetter(all_available_cards[offer_info['card_id']]['name']) + '. <br/></span>';
				
				if(offer_info['buysell'] == 'buy'){parsed_expedition+='Offer: ' + nFormatter(offer_info['offer_price'],3) + ' scraps.';}
				if(offer_info['buysell'] == 'sell'){parsed_expedition+='Price: ' + nFormatter(offer_info['offer_price'],3) + ' scraps.';}
				var offer_percent = (offer_info['offer_price'] / (all_available_cards[offer_info['card_id']]['value'] * offer_info['card_amount'])) * 100;
				parsed_expedition+='<br/>(' + nFormatter(offer_percent,0) + '%)';
				var owned_amount = 0;

				if(gamedata['owned_cards'][offer_info['card_id']] != undefined)
				{
					owned_amount = gamedata['owned_cards'][offer_info['card_id']];
				}
				if(offer_info['sold'] == undefined)
				{
					parsed_expedition += 	'<div class="offer_image" onclick="show_card_details(\'' + offer_info['card_id'] + '\')">' + parse_card(offer_info['card_id'], /*owned_amount + ' / ' +*/ temp_offer_amount) + '</div>';
					if(offer_info['buysell'] == 'buy' && gamedata['known_recipes'] != undefined && gamedata['known_recipes'][offer_info['card_id']] != undefined)
					{
						parsed_expedition += 	'<div class="craft_offer_button" onclick="show_content(\'craft\');show_card_recipe(\'' + offer_info['card_id'] + '\')">CRAFT</div>';
					}
					if(owned_amount >= offer_info['card_amount'] && offer_info['buysell'] == 'buy' && offer_info['sold'] == undefined)
					{
						parsed_expedition += 	'<div class="complete_expedition_button complete_offer_button buysell_sell" onclick="complete_offer(' + offer_key + ')">SELL</div>';
					}
					if(gamedata['scraps'] >= offer_info['offer_price'] && offer_info['buysell'] == 'sell' && offer_info['sold'] == undefined)
					{
						parsed_expedition += 	'<div class="complete_expedition_button complete_offer_button" onclick="complete_offer(' + offer_key + ')">BUY</div>';
					}
				}
				else
				{
					parsed_expedition += '<span class="single_new_expedition_description">Trade complete.</span>';
				}
				parsed_expedition += 	'<div class="timer" data-complete-time="' + new Date(offer_info['offer_expires']).getTime() + '" data-complete-function="show_single_building"></div>';
				parsed_expedition += '</div>';
				//$('.single_building_content_list').append(parsed_expedition);
				complete_building_list += parsed_expedition;
			});
		}
		if(building_info['show_potions'] != undefined && building_info['show_potions'] == true)
		{
			if(current_building['potions'] == undefined){current_building['potions'] = {};}
			current_building['potions'] = sortObj(current_building['potions']);
			complete_building_list += '<div class="single_expedition production_bar potion_bar">';
			$.each(all_upgrades, function(upgrade_id, upgrade_info){
				if(upgrade_info['upgrade_type'] == 'potion')
				{
					if(current_building['potions'][upgrade_id] != undefined)
					{
						complete_building_list += parse_potion_button(upgrade_id);
					}
					else
					{
						complete_building_list += parse_potion_button(upgrade_id, false);
					}
				}
			});
			complete_building_list += '</div>';
			/*$.each(current_building['potions'], function(potion_id, potion_info){
				complete_building_list += parse_potion_button(potion_id);
			});*/
		}
		var mission_count = 0;
		if(building_info['expeditions'] != undefined)
		{
			if(current_building['expeditions'] == undefined)
			{
				current_building['expeditions'] = {};
				saveToLocalStorage();
			}
			else
			{
				$.each(current_building['expeditions'], function(expedition_key, expedition_info){
					var parsed_expedition = '';
					var current_exp = all_expeditions[expedition_info['expedition_id']];
					parsed_expedition += '<div class="single_expedition"><span class="single_new_expedition_name busy_expedition_name">' + capitalizeFirstLetter(current_exp['name']) + '</span>';
					//parsed_expedition += '<br/><span class="single_new_expedition_description">' + current_exp['description'] + '</span>';
					parsed_expedition += 	'<div class="timer" data-complete-time="' + expedition_info['done_time'] + '" data-complete-show="complete_expedition_button_' + current_building_id + '_' + expedition_key + '" data-complete-hide="cancel_expedition_button_' + current_building_id + '_' + expedition_key + '"></div>';
					parsed_expedition += 	'<div class="complete_expedition_button_' + current_building_id + '_' + expedition_key + ' complete_expedition_button hidden" onclick="complete_expedition(' + expedition_key + ')">COMPLETE</div>';
					if(current_exp['cannot_cancel'] == undefined || current_exp['cannot_cancel'] == false)
					{
						parsed_expedition += 	'<div class="cancel_expedition_button_' + current_building_id + '_' + expedition_key + ' cancel_expedition_button" onclick="cancel_expedition(' + expedition_key + ')">CANCEL</div>';
					}
					parsed_expedition += '</div>';
					//$('.single_building_content_list').append(parsed_expedition);
					complete_building_list += parsed_expedition;
				});
			}

			mission_count += count_object(current_building['expeditions']);
			if(count_object(current_building['expeditions']) < 1/*building_level*/ /*&& building_info['productions'] == undefined) || count_object(current_building['expeditions']) == 0*/)
			{
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_expedition\')">' + building_info['new_expedition_title'] + '</div>');
				//new_expedition_button += '<div class="new_expedition_button" onclick="show_content(\'new_expedition\')">' + building_info['new_expedition_title'] + '</div>';
			}
		}
		if(building_info['adventures'] != undefined)
		{
			if(current_building['adventures'] == undefined)
			{
				current_building['adventures'] = {};
				saveToLocalStorage();
			}
			else
			{
				$.each(current_building['adventures'], function(expedition_key, expedition_info){
					var parsed_expedition = '';
					var current_exp = all_adventures[expedition_info['adventure_id']];
					parsed_expedition += '<div class="single_expedition"><span class="single_new_expedition_name">' + capitalizeFirstLetter(current_exp['name']) + '</span><br/><span class="single_new_expedition_description">' + current_exp['description'] + '<br/><br/>Current party:</span>';
					parsed_expedition += 	'<div class="timer" data-complete-time="' + expedition_info['done_time'] + '" data-complete-show="complete_expedition_button_' + current_building_id + '_' + expedition_key + '" data-complete-hide="cancel_expedition_button_' + current_building_id + '_' + expedition_key + '"></div>';
					parsed_expedition += 	'<div class="complete_expedition_button_' + current_building_id + '_' + expedition_key + ' complete_expedition_button hidden" onclick="complete_adventure(' + expedition_key + ')">COMPLETE</div>';
					parsed_expedition += 	'<div class="cancel_expedition_button_' + current_building_id + '_' + expedition_key + ' cancel_expedition_button" onclick="cancel_adventure(' + expedition_key + ')">CANCEL</div>';
					parsed_expedition += 	'<div class="adventuring_units">';
					$.each(expedition_info['units'], function(useless_key, adventure_unit_id){
						if(all_available_cards[adventure_unit_id] != undefined)
						{
							var parsed_card = parse_card(adventure_unit_id);
							parsed_expedition += 	'<div onclick="show_card_details(\'' + adventure_unit_id + '\')">' + parsed_card + '</div>';
						}
					});
					parsed_expedition += 	'<div style="clear:both;"></div>';
					parsed_expedition += 	'</div>';

					parsed_expedition += '</div>';
					//$('.single_building_content_list').append(parsed_expedition);
					complete_building_list += parsed_expedition;
				});
			}

			mission_count += count_object(current_building['adventures']);
			if(count_object(current_building['adventures']) < 1/*building_level*/ /*&& building_info['productions'] == undefined) || count_object(current_building['expeditions']) == 0*/)
			{
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_adventure\')">' + building_info['new_adventures_title'] + '</div>');
				//new_expedition_button += '<div class="new_expedition_button" onclick="show_content(\'new_expedition\')">' + building_info['new_expedition_title'] + '</div>';
			}
		}
		if((building_info['expeditions'] != undefined || building_info['adventures']) != undefined && mission_count < 1/*building_level*/)
		{
			if(building_info['new_mission_title'] != undefined)
			{
				complete_building_list += '<div class="new_expedition_button" onclick="show_content(\'new_mission\')">' + building_info['new_mission_title'] + '</div><br/>';
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_mission\')">' + building_info['new_mission_title'] + '</div>');
			}
			else
			{
				complete_building_list += '<div class="new_expedition_button" onclick="show_content(\'new_mission\')">ENTER</div><br/>';
				//$('.single_building_content').append('<div class="new_expedition_button" onclick="show_content(\'new_mission\')">ENTER</div>');
			}
		}
		complete_building_list += '';
		$('.single_building_content_list').html(complete_building_list);
		update_all_timers();
	}
	
}

function buy_next_production(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	if(building_info['productions'][production_id] != undefined && current_building['productions'][production_id] == undefined)
	{
		var scrap_cost = building_info['productions'][production_id]['unlock_cost'];

		if(gamedata['scraps'] >= scrap_cost){
			gamedata['scraps'] -= scrap_cost;
			current_building['productions'][production_id] = {
				level: 			1,
				speed_level: 	1,
				storage_level: 	1,
				last_claimed: 	new Date().getTime(),
			}
			saveToLocalStorage();
			show_single_building();
		}
	}
}

function set_pickable_production(production_id, pickable_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	if(building_info['productions'] != undefined && building_info['productions'][production_id] != undefined && building_info['productions'][production_id]['pickable_productions'] != undefined && building_info['productions'][production_id]['pickable_productions'][pickable_id] != undefined)
	{
		current_building['productions'][production_id]['production_id'] = pickable_id;
		new_time = new Date().getTime();
		current_building['productions'][production_id]['last_claimed'] = new_time;
		saveToLocalStorage();
		show_single_building();
	}
}

function cancel_pickable_production(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	current_building['productions'][production_id]['production_id'] = false;
	saveToLocalStorage();
	show_single_building();
}

function upgrade_production(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var current_production = current_building['productions'][production_id];
	var production_info = 	building_info['productions'][production_id];
	var can_upgrade = true;
	$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
		//var actual_cost = cost_amount * current_production['speed_level'];
		var actual_cost = calculate_production_speed_cost(current_production['speed_level'], cost_amount);
		var owned_amount = 0;
		if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id]}
		if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
		if(owned_amount < actual_cost)
		{
			can_upgrade = false;
		}
	});
	if(can_upgrade == true)
	{
		$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
			//var actual_cost = cost_amount * current_production['speed_level'];
			var actual_cost = calculate_production_speed_cost(current_production['speed_level'], cost_amount);
			if(gamedata['owned_cards'][cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= actual_cost;
			}
			if(cost_id == 'scraps'){gamedata['scraps'] -= actual_cost;}
		});
		current_production['speed_level']++;
		saveToLocalStorage();
	}
	show_single_building();
};

function upgrade_storage(production_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var current_production = current_building['productions'][production_id];
	var production_info = 	building_info['productions'][production_id];
	var can_upgrade = true;
	$.each(production_info['upgrade_cost_storage'], function(cost_id, cost_amount){
		//var actual_cost = cost_amount * current_production['storage_level'];
		var actual_cost = calculate_production_speed_cost(current_production['storage_level'], cost_amount);
		var owned_amount = 0;
		if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id]}
		if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
		if(owned_amount < actual_cost)
		{
			can_upgrade = false;
		}
	});
	if(can_upgrade == true)
	{
		$.each(production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
			//var actual_cost = cost_amount * current_production['storage_level'];
			var actual_cost = calculate_production_speed_cost(current_production['storage_level'], cost_amount);
			if(gamedata['owned_cards'][cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= actual_cost;
			}
			if(cost_id == 'scraps'){gamedata['scraps'] -= actual_cost;}
		});
		current_production['storage_level']++;
		saveToLocalStorage();
	}
	show_single_building();
};

function claim_all_production(){
	var current_building = 	gamedata['town'][current_building_id];
	all_current_rewards = {};
	$.each(current_building['productions'], function(production_id, production_info){
		claim_production(production_id, true);	
	});
	if(count_object(all_current_rewards) > 0)
	{
		current_reward_text = 'You claimed the production.';
		current_reward_origin = 'single_building';
		saveToLocalStorage();
		show_content('current_rewards');
	}
}

function claim_production(production_id, claiming_all){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var current_production = current_building['productions'][production_id];
	var production_info = 	building_info['productions'][production_id];
	//var production_time = Math.floor(production_info['base_time'] / ( 0.65 + (current_production['speed_level'] / 10)));
	var production_time = calculate_production_speed(current_production['speed_level'], production_info['base_time'], production_info['defeated_heroes_speed_bonusses'], production_info['production_achievement_bonus'], current_building['level']);
	var time_elapsed = (new Date().getTime() - current_production['last_claimed']) / 1000;
	var ready_production = Math.floor(time_elapsed / production_time);
	//var max_storage = Math.ceil(production_info['base_storage'] * (0.75 + (current_production['storage_level'] / 4)));
	var max_storage = calculate_production_storage(current_production['storage_level'], production_info['base_storage'], production_info['defeated_heroes_speed_bonusses'], current_building['level']);
	var shown_ready_production = Math.floor(time_elapsed / production_time);
	var actual_result = production_id;
	if(current_building['productions'][production_id]['production_id'] != undefined && current_building['productions'][production_id]['production_id'] != false && all_available_cards[current_building['productions'][production_id]['production_id']] != undefined)
	{
		actual_result = current_building['productions'][production_id]['production_id'];
		//current_building['productions'][production_id]['production_id'] = false;
	}
	if(shown_ready_production > max_storage)
	{
		shown_ready_production = max_storage;
	}
	var new_time = current_production['last_claimed'] + (shown_ready_production * production_time * 1000);
	if(ready_production >= max_storage)
	{
		new_time = new Date().getTime();
	}

	if(shown_ready_production > 0)
	{
		current_production['last_claimed'] = new_time;
		if(claiming_all != undefined && claiming_all == true)
		{
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {reward_id:actual_result,reward_amount:shown_ready_production};
		}
		else
		{
			all_current_rewards = {0:{reward_id:actual_result,reward_amount:shown_ready_production}};
			current_reward_text = 'You claimed the production.';
			current_reward_origin = 'single_building';
			saveToLocalStorage();
			show_content('current_rewards');
		}
	}
}

function clear_all_offers(){
	$.each(gamedata['town'], function(building_id, current_building){
		if(current_building['current_offers'] != undefined)
		{
			current_building['current_offers'] = {};
		}
	});
}

function complete_offer(offer_key){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var offer_info = 	current_building['current_offers'][offer_key];
	var owned_amount = 0;
	if(gamedata['owned_cards'][offer_info['card_id']] != undefined)
	{
		owned_amount = gamedata['owned_cards'][offer_info['card_id']];
	}
	if(offer_info['buysell'] == 'buy')
	{
		if(owned_amount >= offer_info['card_amount'] && offer_info['sold'] == undefined)
		{
			gamedata['owned_cards'][offer_info['card_id']] -= offer_info['card_amount'];
			gamedata['scraps'] += offer_info['offer_price'];
			offer_info['sold'] = true;
			if(new Date().addMinutes(10) < new Date(offer_info['offer_expires']))
			{
				offer_info['offer_expires'] = new Date().addMinutes(10);
			}
			saveToLocalStorage();
		}
	}
	if(offer_info['buysell'] == 'sell')
	{
		if(gamedata['scraps'] >= offer_info['offer_price'] && offer_info['sold'] == undefined)
		{
			if(gamedata['owned_cards'][offer_info['card_id']] == undefined){gamedata['owned_cards'][offer_info['card_id']] = 0;}
			gamedata['owned_cards'][offer_info['card_id']] += offer_info['card_amount'];
			gamedata['scraps'] -= offer_info['offer_price'];
			offer_info['sold'] = true;
			if(new Date().addMinutes(10) < new Date(offer_info['offer_expires']))
			{
				offer_info['offer_expires'] = new Date().addMinutes(10);
			}
			saveToLocalStorage();
		}
	}
	show_single_building();
}

function check_current_offers(){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var any_new = false;

	if(current_building['current_offers'] == undefined)
	{
		gamedata['town'][current_building_id]['current_offers'] = {};
	}
	for (var i = 0; i < /*building_level*/ 1; i++) {
		if(current_building['current_offers'][i] != undefined && new Date(current_building['current_offers'][i]['offer_expires']) < new Date())
		{
			delete current_building['current_offers'][i];
		}
		if(current_building['current_offers'][i] == undefined)
		{
			delete current_building['current_offers'][i];
		}
		if(current_building['current_offers'][i] == undefined)
		{
			current_building['current_offers'][i] = create_new_building_offer(building_info);
			any_new = true;
		}
	};

	if(any_new == true)
	{
		saveToLocalStorage();
	}
}

function create_new_building_offer(building_info){
	var buysell = 'buy';
	if(Math.random() > 0.75){buysell = 'sell';}
	var found_card = false;
	if(buysell == 'buy')
	{
		if(Math.random() > 0.1)
		{
			var possible_cards = {};
			$.each(gamedata['owned_cards'], function(recipe_id,useless_info){
				if(match_array_values(all_available_cards[recipe_id]['type'], building_info['shop_type']))
				{
					possible_cards[recipe_id] = true;
				}
			});
			
			if(count_object(possible_cards) > 0)
			{
				found_card = get_random_key_from_object(possible_cards);
			}
		}
		if(found_card == false && gamedata['known_recipes'] != undefined && count_object(gamedata['known_recipes']) > 4 && Math.random() > 0.3)
		{
			var possible_cards = {};
			$.each(gamedata['known_recipes'], function(recipe_id,useless_info){
				if(match_array_values(all_available_cards[recipe_id]['type'], building_info['shop_type']))
				{
					possible_cards[recipe_id] = true;
				}
			});
			
			if(count_object(possible_cards) > 0)
			{
				found_card = get_random_key_from_object(possible_cards);
			}
		}
	}
	if(found_card == false)
	{
		found_card = get_random_card(building_info['shop_type']);
	}

	var found_offer = false;
	if(found_card != false)
	{
		var offer_amount = /*Math.ceil(Math.random() * 2) + 0*/ 1;
		if(buysell == 'buy' && gamedata['owned_cards'][found_card] != undefined && offer_amount < gamedata['owned_cards'][found_card] && gamedata['owned_cards'][found_card] > 0)
		{
			offer_amount = Math.ceil(Math.random() * gamedata['owned_cards'][found_card] * 1);
		}
		var offer_price = Math.ceil(all_available_cards[found_card]['value'] * offer_amount * (1 + (Math.random() * (5 / get_upgrade_factor('merchant_' + buysell, undefined, true)))));
		if(buysell == 'buy')
		{
			offer_price = Math.ceil(all_available_cards[found_card]['value'] * offer_amount * ((Math.random() * (get_upgrade_factor('merchant_' + buysell, undefined, true) - 1)) + 1 ));
		}
		
		found_offer = {
			card_id: 		found_card,
			buysell: 		buysell,
			card_amount: 	offer_amount,
			offer_price: 	offer_price,
			offer_expires: 	new Date().addHours(1)
		}
	}
	return found_offer;
}

function show_upgrade_building(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_building = all_buildings[gamedata['town'][current_building_id]['building_id']];
		$('.upgrade_content').html('');
		var owned_fragments = 0;
		if(gamedata['owned_cards'][current_building['fragment_id']] != undefined)
		{
			owned_fragments = gamedata['owned_cards'][current_building['fragment_id']];
		}
		var upgrade_cost = calculate_upgrade_cost(gamedata['town'][current_building_id]['level']);
		var parsed_cost = parse_card(current_building['fragment_id'], owned_fragments + ' / ' + upgrade_cost);
		if(owned_fragments < upgrade_cost)
		{
			parsed_cost = parse_card(current_building['fragment_id'], '<span style="color:red">' + owned_fragments + ' / ' + upgrade_cost + '</span>');
		}
		if(gamedata['scraps'] < upgrade_cost * building_scraps_cost)
		{
			parsed_cost += parse_card('scraps_placeholder', '<span style="color:red">' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(upgrade_cost * building_scraps_cost) + '</span>');
		}
		else
		{
			parsed_cost += parse_card('scraps_placeholder', '' + numberWithCommas(gamedata['scraps']) + ' / ' + numberWithCommas(upgrade_cost * building_scraps_cost) + '');
		}
		$('.upgrade_content').append('<div class="fragment_cost">' + parsed_cost + '</div>');

		$('.upgrade_content').append('<div class="construction_name">' + capitalizeFirstLetter(current_building['name']) + '</div>');
		if(gamedata['owned_cards'][current_building['fragment_id']] < upgrade_cost || gamedata['scraps'] < upgrade_cost * building_scraps_cost)
		{
			$('.upgrade_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['upgrade_description']) + '</div>');
		}
		else
		{
			$('.upgrade_content').append('<div class="construction_description">' + capitalizeFirstLetter(current_building['upgrade_description']) + '</div>');
			$('.upgrade_content').append('<div onclick="upgrade_current_building()" class="construction_button">UPGRADE</div>');
		}
	}
}

function calculate_upgrade_cost(level){
	var upgrade_cost = Math.floor(base_building_cost * (level * (1 + (level / 2))));
	return upgrade_cost;
}

function show_delete_building(){
	var building_total_fragment_cost = base_building_cost;
	for (var i = gamedata['town'][current_building_id]['level'] - 1; i > 0; i--) {
		building_total_fragment_cost += calculate_upgrade_cost(i);
	};
	$('.returned_fragments').html(building_total_fragment_cost);
}

function delete_current_building(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_total_fragment_cost = base_building_cost;
		/*for (var i = gamedata['town'][current_building_id]['level'] - 1; i > 0; i--) {
			building_total_fragment_cost += calculate_upgrade_cost(i);
		};*/
		var fragment_id = building_info['fragment_id'];
		all_current_rewards = {0:{reward_id:fragment_id,reward_amount:building_total_fragment_cost}};
		current_reward_text = 'The building has been destroyed.';
		current_reward_origin = 'town';
		delete gamedata['town'][current_building_id];
		saveToLocalStorage();
		show_content('current_rewards');
	}
}

function show_new_mission(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_content').html('');

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];
		$.each(building_info['expeditions'], function(useless_id, expedition_id){
			if(all_expeditions[expedition_id] != undefined)
			{
				var current_exp = all_expeditions[expedition_id];
				var can_start = true;
				var single_new_expedition = '';
				single_new_expedition += '<div class="single_new_expedition">';
				single_new_expedition += 	'<div class="single_new_expedition_name">';
				single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
				single_new_expedition += 	'</div>';
				single_new_expedition += 	current_exp['description'];
				if(count_object(current_exp['costs']) > 0)
				{
					single_new_expedition += 	'<b>Cost:</b>';
				}
				single_new_expedition += 	'<div class="expedition_costs">';
				$.each(current_exp['costs'], function(cost_id, cost_amount){
					var cost_color = '';
					if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(cost_id == 'scraps')
					{
						single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}
					if(all_available_cards[cost_id] != undefined)
					{
						var owned_amount = 0;
						if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
						{
							owned_amount = gamedata['owned_cards'][cost_id];
						}
						single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}

				});
				single_new_expedition += 	'</div>';

				if(current_exp['rewards'] != undefined)
				{
					single_new_expedition += 	'<b>Possible rewards</b>';
				
					single_new_expedition += 	'<div class="possible_rewards">';
					$.each(current_exp['rewards'], function(cost_id, cost_amount){
						if(cost_id == 'scraps')
						{
							//single_new_expedition += 	'Scraps<br/>';
							var parsed_card = parse_card('scraps_placeholder');
							single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
						}
						if(cost_id == 'potion')
						{
							//console.log('ding');
							var parsed_card = parse_card('potion_placeholder');
							single_new_expedition += 	'<div>' + parsed_card+ '</div>';
						}
						if(all_available_cards[cost_id] != undefined)
						{
							//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
							var parsed_card = parse_card(cost_id);
							single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
						}

					});
					single_new_expedition += 	'<div style="clear:both;"></div>';
					single_new_expedition += 	'</div>';
				}
				if(can_start == true)
				{
					single_new_expedition += 	'<div class="start_new_expedition" onclick="start_new_expedition(\'' + expedition_id + '\')">START</div>';
				}
				single_new_expedition += '</div>';

				$('.new_expedition_content').append(single_new_expedition);
			}
		});
		$.each(building_info['adventures'], function(useless_id, expedition_id){

			if(all_adventures[expedition_id] != undefined)
			{
				console.log(expedition_id);
				var current_exp = all_adventures[expedition_id];
				var can_start = true;
				var single_new_expedition = '';
				single_new_expedition += '<div class="single_new_expedition">';
				single_new_expedition += 	'<div class="single_new_expedition_name">';
				single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
				single_new_expedition += 	'</div>';
				single_new_expedition += 	current_exp['description'];
				if(count_object(current_exp['costs']) > 0)
				{
					single_new_expedition += 	'<b>Cost:</b>';
				}
				single_new_expedition += 	'<div class="expedition_costs">';
				$.each(current_exp['costs'], function(cost_id, cost_amount){
					var cost_color = '';
					if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
					{
						can_start = false;
						cost_color = 'style="color:#c33;"';
					}
					if(cost_id == 'scraps')
					{
						single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}
					if(all_available_cards[cost_id] != undefined)
					{
						var owned_amount = 0;
						if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
						{
							owned_amount = gamedata['owned_cards'][cost_id];
						}
						single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
						//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
						//single_new_expedition += 	parsed_card;
					}

				});
				single_new_expedition += 	'</div>';

				if(current_exp['rewards'] != undefined)
				{
					single_new_expedition += 	'<b>Possible rewards</b>';
				
					single_new_expedition += 	'<div class="possible_rewards">';
					$.each(current_exp['rewards'], function(cost_id, cost_amount){
						if(cost_id == 'scraps')
						{
							//single_new_expedition += 	'Scraps<br/>';
							var parsed_card = parse_card('scraps_placeholder');
							single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
						}
						if(all_available_cards[cost_id] != undefined)
						{
							//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
							var parsed_card = parse_card(cost_id);
							single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
						}

					});
					single_new_expedition += 	'<div style="clear:both;"></div>';
					single_new_expedition += 	'</div>';
				}
				if(can_start == true)
				{
					single_new_expedition += 	'<div class="start_new_expedition" onclick="current_adventure=\'' + expedition_id + '\';current_adventure_units={};show_content(\'adventure_units\')">START</div>';
				}
				single_new_expedition += '</div>';

				$('.new_expedition_content').append(single_new_expedition);
				/*if(count_object(building_info['adventures']) == 1 && (current_exp['costs'] == undefined || count_object(current_exp['costs']) == 0))
				{
					$('.single_adventure_back').show();
					$('.multiple_adventure_back').hide();
					current_adventure=expedition_id;
					current_adventure_units={};
					show_content('adventure_units');
				}
				else
				{
					$('.single_adventure_back').hide();
					$('.multiple_adventure_back').show();
				}*/
			}
		});
	}
};

function show_new_expedition(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_content').html('');

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];
		if(building_info['expeditions'] == undefined)
		{
			show_content('town');
		}
		else
		{
			$.each(building_info['expeditions'], function(useless_id, expedition_id){
				if(all_expeditions[expedition_id] != undefined)
				{
					var current_exp = all_expeditions[expedition_id];
					var can_start = true;
					var single_new_expedition = '';
					single_new_expedition += '<div class="single_new_expedition">';
					single_new_expedition += 	'<div class="single_new_expedition_name">';
					single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
					single_new_expedition += 	'</div>';
					single_new_expedition += 	current_exp['description'];
					if(count_object(current_exp['costs']) > 0)
					{
						single_new_expedition += 	'<b>Cost:</b>';
					}
					single_new_expedition += 	'<div class="expedition_costs">';
					$.each(current_exp['costs'], function(cost_id, cost_amount){
						var cost_color = '';
						if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(cost_id == 'scraps')
						{
							single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}
						if(all_available_cards[cost_id] != undefined)
						{
							var owned_amount = 0;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
							{
								owned_amount = gamedata['owned_cards'][cost_id];
							}
							single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}

					});
					single_new_expedition += 	'</div>';

					if(current_exp['rewards'] != undefined)
					{
						single_new_expedition += 	'<b>Possible rewards</b>';
					
						single_new_expedition += 	'<div class="possible_rewards">';
						$.each(current_exp['rewards'], function(cost_id, cost_amount){
							if(cost_id == 'scraps')
							{
								//single_new_expedition += 	'Scraps<br/>';
								var parsed_card = parse_card('scraps_placeholder');
								single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
							}
							if(all_available_cards[cost_id] != undefined)
							{
								//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
								var parsed_card = parse_card(cost_id);
								single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
							}

						});
						single_new_expedition += 	'<div style="clear:both;"></div>';
						single_new_expedition += 	'</div>';
					}
					if(can_start == true)
					{
						single_new_expedition += 	'<div class="start_new_expedition" onclick="start_new_expedition(\'' + expedition_id + '\')">START</div>';
					}
					single_new_expedition += '</div>';

					$('.new_expedition_content').append(single_new_expedition);
				}
			});
		}
	}
}

function show_new_adventure(){
	if(gamedata['town'][current_building_id] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.new_expedition_content').html('');

		var current_building = 	gamedata['town'][current_building_id];
		var building_info = 	all_buildings[current_building['building_id']];
		var building_level = 	current_building['level'];
		if(building_info['adventures'] == undefined)
		{
			show_content('town');
		}
		else
		{
			$.each(building_info['adventures'], function(useless_id, expedition_id){
				if(all_adventures[expedition_id] != undefined)
				{
					var current_exp = all_adventures[expedition_id];
					var can_start = true;
					var single_new_expedition = '';
					single_new_expedition += '<div class="single_new_expedition">';
					single_new_expedition += 	'<div class="single_new_expedition_name">';
					single_new_expedition += 		capitalizeFirstLetter(current_exp['name']);
					single_new_expedition += 	'</div>';
					single_new_expedition += 	current_exp['description'];
					if(count_object(current_exp['costs']) > 0)
					{
						single_new_expedition += 	'<b>Cost:</b>';
					}
					single_new_expedition += 	'<div class="expedition_costs">';
					$.each(current_exp['costs'], function(cost_id, cost_amount){
						var cost_color = '';
						if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
						{
							can_start = false;
							cost_color = 'style="color:#c33;"';
						}
						if(cost_id == 'scraps')
						{
							single_new_expedition += 	'Scraps: <span class="expedition_cost_amount" ' + cost_color + '>' + gamedata['scraps'] + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card('scraps_placeholder', gamedata['scraps'] + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}
						if(all_available_cards[cost_id] != undefined)
						{
							var owned_amount = 0;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
							{
								owned_amount = gamedata['owned_cards'][cost_id];
							}
							single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name']) + ': <span class="expedition_cost_amount" ' + cost_color + '>' + owned_amount + ' / ' + cost_amount + '</span><br/>';
							//var parsed_card = parse_card(cost_id, owned_amount + ' / ' + cost_amount);
							//single_new_expedition += 	parsed_card;
						}

					});
					single_new_expedition += 	'</div>';

					if(current_exp['rewards'] != undefined)
					{
						single_new_expedition += 	'<b>Possible rewards</b>';
					
						single_new_expedition += 	'<div class="possible_rewards">';
						$.each(current_exp['rewards'], function(cost_id, cost_amount){
							if(cost_id == 'scraps')
							{
								//single_new_expedition += 	'Scraps<br/>';
								var parsed_card = parse_card('scraps_placeholder');
								single_new_expedition += 	'<div onclick="show_card_details(\'scraps_placeholder\')">' + parsed_card+ '</div>';
							}
							if(all_available_cards[cost_id] != undefined)
							{
								//single_new_expedition += 	capitalizeFirstLetter(all_available_cards[cost_id]['name'] + '<br/>');
								var parsed_card = parse_card(cost_id);
								single_new_expedition += 	'<div onclick="show_card_details(\'' + cost_id + '\')">' + parsed_card + '</div>';
							}

						});
						single_new_expedition += 	'<div style="clear:both;"></div>';
						single_new_expedition += 	'</div>';
					}
					if(can_start == true)
					{
						single_new_expedition += 	'<div class="start_new_expedition" onclick="current_adventure=\'' + expedition_id + '\';current_adventure_units={};show_content(\'adventure_units\')">START</div>';
					}
					single_new_expedition += '</div>';

					$('.new_expedition_content').append(single_new_expedition);
					if(count_object(building_info['adventures']) == 1 && (current_exp['costs'] == undefined || count_object(current_exp['costs']) == 0))
					{
						$('.single_adventure_back').show();
						$('.multiple_adventure_back').hide();
						current_adventure=expedition_id;
						current_adventure_units={};
						show_content('adventure_units');
					}
					else
					{
						$('.single_adventure_back').hide();
						$('.multiple_adventure_back').show();
					}
				}
			});
		}
	}
}

var current_adventure_units_page = 1;

function show_adventure_units(){
	var max_cards_per_page = 8;
	var can_start = false;
	$('.selected_adventure_units').html('');
	if(all_adventures[current_adventure] == undefined)
	{
		show_content('town');
	}
	else
	{
		var current_adventure_info = all_adventures[current_adventure];
		var all_parsed_adventure_units = '';
		for (var i = 0; i < current_adventure_info['unit_count']; i++) {
			var parsed_adventure_unit = '<div class="adventure_unit">';
			if(current_adventure_units[i] != undefined)
			{
				if(all_available_cards[current_adventure_units[i]] == undefined || gamedata['owned_cards'][current_adventure_units[i]] < 1)
				{
					delete current_adventure_units[i];
				}
				else
				{
					parsed_adventure_unit += '<div onclick="remove_adventure_unit(' + i + ')">' + parse_card(current_adventure_units[i]) + '</div>';
					can_start = true;
				}

			}
			else
			{

			}
			parsed_adventure_unit += '</div>';
			all_parsed_adventure_units += parsed_adventure_unit;
		};
		$('.selected_adventure_units').html(all_parsed_adventure_units);

		// SHOW CARDS YOU CAN PICK
		$('.creature_type_filter').prop("checked", true);

		$('.adventure_units_list').html('');

		var tinkering_list = '';
		var cards_displayed = 0;

		var collectable = 0;

		$.each(all_available_cards, function(card_id, card_info){
			var effectively_owned = 0;
			if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
			{
				effectively_owned = gamedata['owned_cards'][card_id];
			}
			$.each(current_adventure_units, function(useless_key, adventure_unit_id){
				if(card_id == adventure_unit_id)
				{
					effectively_owned -= 1;
				}
			});
			var suggested = true;
			if(suggest_mode == 'matched')
			{
				suggested = false;
				$.each(card_info['abilities'], function(ability_key, ability_level){
					if(match_array_values(current_adventure_info['ability_suggestions'], ability_key) == true)
					{
						suggested = true;
					}
				});
				if(card_info['subtypes'] != undefined && current_adventure_info['ability_suggestions'] != undefined && match_array_values(current_adventure_info['ability_suggestions'], card_info['subtypes']) == true)
				{
					suggested = true;
				}
				
				
			}
			if(check_filters(card_id) == false && card_info['type'] == 'creature' && effectively_owned > 0 && suggested == true)
			{
				cards_displayed ++;
				
				if(cards_displayed > (current_adventure_units_page * max_cards_per_page) - max_cards_per_page && cards_displayed <= current_adventure_units_page * max_cards_per_page)
				{
					var parsed_card = parse_card(card_id, effectively_owned);
					if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
					{
						tinkering_list += '<div onclick="add_adventure_unit(\'' + card_id + '\')">' + parsed_card + '</div>';
					}
				}
			}

		});

		if(cards_displayed > max_cards_per_page)
		{
			$('#content_adventure_units .page_selection').show();
			if(current_adventure_units_page == 1){$('.page_selection .previous_page').addClass('no_page');}else{$('.page_selection .previous_page').removeClass('no_page');}
			if(cards_displayed / max_cards_per_page <= current_adventure_units_page){$('.page_selection .next_page').addClass('no_page');}else{$('.page_selection .next_page').removeClass('no_page');}
			if(cards_displayed == 0){$('.page_selection .page_number').addClass('no_page')}else{$('.page_selection .page_number').removeClass('no_page');}
			$('.page_selection .page_number').html(current_adventure_units_page + ' / ' + Math.ceil(cards_displayed / max_cards_per_page));
		}
		else
		{
			$('#content_adventure_units .page_selection').hide();
		}

		if(cards_displayed > 0 && Math.ceil(cards_displayed / max_cards_per_page) < current_adventure_units_page)
		{
			current_adventure_units_page = 1;
			show_adventure_units();
		}
		else
		{
			if(tinkering_list != '')
			{
				$('.adventure_units_list').html('' + tinkering_list + '');
			}
		}
		if(can_start == true)
		{
			$('.selected_adventure_units').append('<div class="start_new_expedition" onclick="start_adventure()">START</div>');
		}
	}
}

function start_adventure(){
	var current_exp = all_adventures[current_adventure];
	var can_start = true;
	$.each(current_exp['costs'], function(cost_id, cost_amount){
		if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
		{
			can_start = false;
		}
		else
		{
			if(cost_id == 'scraps')
			{
				gamedata['scraps'] -= cost_amount;
			}
		}
		if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
		{
			can_start = false;
		}
		else
		{
			if(all_available_cards[cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= cost_amount;
			}
		}
	});
	$.each(current_adventure_units, function(useless_key, card_id){
		if(gamedata['owned_cards'][card_id] != undefined && gamedata['owned_cards'][card_id] > 0)
		{
			gamedata['owned_cards'][card_id] -= 1;
		}
	});
	if(can_start == true && gamedata['town'][current_building_id] != undefined && count_object(current_adventure_units) > 0)
	{
		if(gamedata['town'][current_building_id]['adventures'] == undefined)
		{
			gamedata['town'][current_building_id]['adventures'] = {};
		}
		var new_expedition_key = get_highest_key_in_object(gamedata['town'][current_building_id]['adventures']) + 1;
		var time_now = new Date().getTime();
		var done_time = time_now + (current_exp['time'] * 1000);
		gamedata['town'][current_building_id]['adventures'][new_expedition_key] = {
			adventure_id: 	current_adventure,
			done_time: 		done_time,
			units: 			current_adventure_units,
		};
		saveToLocalStorage();
	}
	show_content('single_building');
}

function complete_adventure(adventure_key){
	var current_building = 	gamedata['town'][current_building_id];
	var current_adventure = current_building['adventures'][adventure_key];
	var adventure_result = all_adventure_results[get_random_key_from_object_based_on_num_value(all_adventures[current_adventure['adventure_id']]['results'])];
	var success_rate = adventure_result['base_success'] + 0;
	$.each(adventure_result['bonus_success'], function(bonus_type,bonus_amount){
		$.each(current_adventure['units'], function(useless_key, card_id){
			var current_card = all_available_cards[card_id];
			if(typeof(bonus_amount) == 'number' && current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'number' && current_card[bonus_type] > 0)
			{
				success_rate += bonus_amount * current_card[bonus_type];
			}
			if(typeof(bonus_amount) == 'object' && current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'object')
			{
				$.each(bonus_amount, function(subkey, sub_bonus_amount){
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'number')
					{
						success_rate += sub_bonus_amount * current_card[bonus_type][subkey];
					}
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'object')
					{
						success_rate += sub_bonus_amount;
					}
					if(match_array_values(subkey, current_card[bonus_type]) == true)
					{
						success_rate += sub_bonus_amount;
					}
				});
				
			}
		});
	});
	if((adventure_result['base_success'] == undefined || adventure_result['base_success'] <= 90) && success_rate > 90)
	{
		success_rate = 90;
	}
	console.log('success chance: ' + success_rate);
	var survive_chances = {};
	$.each(current_adventure['units'], function(useless_key, unit_id){
		survive_chances[useless_key] = 0;
		if(adventure_result['survive_chance'] == undefined)
		{survive_chances[useless_key] = 100;}
		else
		{survive_chances[useless_key] = adventure_result['survive_chance'];}
		$.each(adventure_result['bonus_survive'], function(bonus_type,bonus_amount){
			var current_card = all_available_cards[unit_id];
			if(current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'number' && current_card[bonus_type] > 0)
			{
				survive_chances[useless_key] += bonus_amount * current_card[bonus_type];
			}
			if(typeof(bonus_amount) == 'object' && current_card[bonus_type] != undefined && typeof(current_card[bonus_type]) == 'object')
			{
				$.each(bonus_amount, function(subkey, sub_bonus_amount){
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'number')
					{
						survive_chances[useless_key] += sub_bonus_amount * current_card[bonus_type][subkey];
					}
					if(current_card[bonus_type][subkey] != undefined && typeof(current_card[bonus_type][subkey]) == 'object')
					{
						survive_chances[useless_key] += sub_bonus_amount;
					}
					if(match_array_values(subkey, current_card[bonus_type]) == true)
					{
						survive_chances[useless_key] += sub_bonus_amount;
					}
				});
				
			}
		});
		if(adventure_result['survive_chance'] != undefined && adventure_result['survive_chance'] < 90 && survive_chances[useless_key] > 90)
		{
			survive_chances[useless_key] = 90;
		}
		console.log('survive chance: ' + unit_id + ' ' + survive_chances[useless_key]);
	});
	all_current_rewards 	= {};
	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';
	var any_survived = false;
	$.each(current_adventure['units'], function(useless_key, unit_id){
		if(survive_chances[useless_key] >= Math.random() * 100)
		{
			any_survived = true;
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		unit_id,
				reward_amount: 	1,
				no_faction: 	true
			}
		}
	});
	if(success_rate >= Math.random() * 100 && any_survived == true)
	{
		current_reward_text = adventure_result['success_text'];
		
		$.each(adventure_result['rewards'], function(reward_id, reward_amounts){
			var actual_amount = round_by_percent(Math.random() * (reward_amounts['max'] - reward_amounts['min'])) + reward_amounts['min'];
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		reward_id,
				reward_amount: 	actual_amount,
			}
		});
	}
	else
	{
		if(any_survived == true)
		{
			current_reward_text = adventure_result['fail_text'];
		}
		else
		{
			current_reward_text = adventure_result['no_return_text'];
		}
		
	}
	delete current_building['adventures'][adventure_key];
	show_content('current_rewards');
}

function cancel_adventure(adventure_key){
	var current_building = 	gamedata['town'][current_building_id];
	var current_adventure = current_building['adventures'][adventure_key];
	var adventure_result = all_adventure_results[get_random_key_from_object_based_on_num_value(all_adventures[current_adventure['adventure_id']]['results'])];
	all_current_rewards 	= {};
	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';
	$.each(current_adventure['units'], function(useless_key, unit_id){
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		unit_id,
			reward_amount: 	1,
			no_faction: 	true
		}
	});
	delete current_building['adventures'][adventure_key];
	show_content('current_rewards');
}

function set_adventure_units_page(amount){
	current_adventure_units_page += amount;
	if(current_adventure_units_page < 1){current_adventure_units_page = 1;}
	show_adventure_units();
};

function remove_adventure_unit(unit_id){
	delete current_adventure_units[unit_id];
	show_adventure_units();
}

function add_adventure_unit(unit_id){
	var new_slot = -1;
	var current_adventure_info = all_adventures[current_adventure];
	for (var i = 0; i < current_adventure_info['unit_count']; i++) {
		if(current_adventure_units[i] == undefined && new_slot == -1)
		{
			new_slot = i;
		}
	};
	if(new_slot != -1)
	{
		current_adventure_units[new_slot] = unit_id;
	}
	show_adventure_units();
}

function start_new_expedition(expedition_id){
	$('.new_expedition_content').html('');
	var current_exp = all_expeditions[expedition_id];
	var can_start = true;
	$.each(current_exp['costs'], function(cost_id, cost_amount){
		if(cost_id == 'scraps' && gamedata['scraps'] < cost_amount)
		{
			can_start = false;
		}
		else
		{
			if(cost_id == 'scraps')
			{
				gamedata['scraps'] -= cost_amount;
			}
		}
		if(all_available_cards[cost_id] != undefined && (gamedata['owned_cards'][cost_id] == undefined || gamedata['owned_cards'][cost_id] < cost_amount))
		{
			can_start = false;
		}
		else
		{
			if(all_available_cards[cost_id] != undefined)
			{
				gamedata['owned_cards'][cost_id] -= cost_amount;
			}
		}
	});
	if(can_start == true && gamedata['town'][current_building_id] != undefined)
	{
		if(gamedata['town'][current_building_id]['expeditions'] == undefined)
		{
			gamedata['town'][current_building_id]['expeditions'] = {};
		}
		var new_expedition_key = get_highest_key_in_object(gamedata['town'][current_building_id]['expeditions']) + 1;
		var time_now = new Date().getTime();
		var done_time = time_now + (current_exp['time'] * 1000);
		gamedata['town'][current_building_id]['expeditions'][new_expedition_key] = {
			expedition_id: 	expedition_id,
			done_time: 		done_time,
		};
		saveToLocalStorage();
	}
	show_content('single_building');
}

function complete_expedition(expedition_key){
	//$('.single_building_content').html('');
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var to_complete_exp = 	current_building['expeditions'][expedition_key];
	var current_exp = 		all_expeditions[to_complete_exp['expedition_id']];

	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';

	if(to_complete_exp != undefined && to_complete_exp['done_time'] <= new Date().getTime())
	{
		all_current_rewards = {};
		if(current_exp['possible_results'] == undefined)
		{
			if(current_exp['allways_rewards'] != undefined)
			{
				$.each(current_exp['allways_rewards'], function(allways_id, allways_amount){
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		allways_id,
						reward_amount: 	allways_amount,
					}
				});
			}

			if(current_exp['success_chance'] == undefined || Math.random() * 100 < current_exp['success_chance'])
			{
				current_reward_text = current_exp['success_text'];
				if(current_exp['success_rewards'] != undefined)
				{
					$.each(current_exp['success_rewards'], function(allways_id, allways_amount){
						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		allways_id,
							reward_amount: 	allways_amount,
						}
					});
				}
				var success_picks = 1;
				if(current_exp['success_picks'] != undefined)
				{
					success_picks = current_exp['success_picks'];
				}
				for(i = 1;i <= success_picks; i++)
				{
					var chosen_reward = get_random_key_from_object(current_exp['rewards']);
					var reward_amount = Math.floor((Math.random() * current_exp['rewards'][chosen_reward]) + current_exp['rewards'][chosen_reward]);
					if(reward_amount < 1){reward_amount = 1;}

					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		chosen_reward,
						reward_amount: 	reward_amount,
					}
				}
				/*if(chosen_reward == 'scraps')
				{
					gain_scraps(reward_amount);
				}
				if(all_available_cards[chosen_reward] != undefined)
				{
					for(i = 0;i < reward_amount;i++)
					{
						gain_card(chosen_reward);
					}
					show_card_details(chosen_reward, undefined, reward_amount);
				}*/
				/*if(current_exp['return_cost_on_success'] != undefined && Math.random() * 100 < current_exp['return_cost_on_success'])
				{
					return_exp_cost(to_complete_exp['expedition_id']);
				}*/
			}
			else
			{
				current_reward_text = current_exp['fail_text'];
				if(current_exp['fail_rewards'] != undefined)
				{
					var chosen_reward = get_random_key_from_object(current_exp['fail_rewards']);
					var reward_amount = Math.floor((Math.random() * current_exp['fail_rewards'][chosen_reward]) + current_exp['fail_rewards'][chosen_reward]);
					if(reward_amount < 1){reward_amount = 1;}

					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		chosen_reward,
						reward_amount: 	reward_amount,
					}
				}
				/*if(current_exp['return_cost_on_failure'] != undefined && Math.random() * 100 < current_exp['return_cost_on_failure'])
				{
					return_exp_cost(to_complete_exp['expedition_id']);
				}
				$('.detail_overlay  .card_detail').html('<div class="big_text"><span class="big_text_header">Failure</span><br/>' + current_exp['fail_text'] + '</div>');
				$('.detail_overlay').removeClass('hidden');*/
			}
		}
		else
		{
			var chosen_reward = get_random_key_from_object_based_on_num_value(current_exp['possible_results']);
			//console.log(chosen_reward);
			if(all_expedition_results[chosen_reward] != undefined)
			{
				current_reward_text = all_expedition_results[chosen_reward]['text'];
				$.each(all_expedition_results[chosen_reward]['base_rewards'], function(reward_id, reward_amounts){
					var actual_amount = round_by_percent(Math.random() * (reward_amounts['max'] - reward_amounts['min'])) + reward_amounts['min'];
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 		reward_id,
						reward_amount: 	actual_amount,
					}
				});
				if(all_expedition_results[chosen_reward]['additional_reward_picks'] != undefined)
				{
					for(i = 1;i <= all_expedition_results[chosen_reward]['additional_reward_picks']; i++)
					{
						var reward_id = get_random_key_from_object_based_on_num_value(all_expedition_results[chosen_reward]['additional_reward_chances']);
						var reward_amounts = all_expedition_results[chosen_reward]['additional_rewards'][reward_id];
						var actual_amount = round_by_percent(Math.random() * (reward_amounts['max'] - reward_amounts['min'])) + reward_amounts['min'];
						all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
							reward_id: 		reward_id,
							reward_amount: 	actual_amount,
						}
					}
				}
			}
		}

		
		
		delete gamedata['town'][current_building_id]['expeditions'][expedition_key];
		//saveToLocalStorage();
	}
	show_content('current_rewards');
}

function cancel_expedition(expedition_key){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var building_level = 	current_building['level'];
	var to_complete_exp = 	current_building['expeditions'][expedition_key];
	var current_exp = 		all_expeditions[to_complete_exp['expedition_id']];

	current_reward_origin 	= 'single_building';
	current_reward_text 	= '';
	do_no_apply_factions 	= true;

	all_current_rewards = {};
	if(current_exp['costs'] != undefined)
	{
		$.each(current_exp['costs'], function(allways_id, allways_amount){
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		allways_id,
				reward_amount: 	allways_amount,
			}
		});
	}
	
	delete gamedata['town'][current_building_id]['expeditions'][expedition_key];
	saveToLocalStorage();
	
	show_content('current_rewards');
}

function show_current_rewards(){
	$('.current_rewards_content').html('');
	var parsed_rewards = '';
	var gained_scraps = 0;
	var highest_value = 0;
	var highest_value_key = false;
	var multiple_highest_values = false
	var lowest_owned = false;
	var lowest_owned_key = false;
	var multiple_lowest_owned = false;
	var reward_count = count_object(all_current_rewards);

	$.each(all_current_rewards, function(useless_key_1, reward_1){
		if(reward_1['reward_id'] == 'scraps_placeholder')
		{
			reward_1['reward_id'] = 'scraps';
		}
		if(all_current_rewards[useless_key_1]['reward_amount'] == 0)
		{
			delete all_current_rewards[useless_key_1];
		}
		else
		{
			$.each(all_current_rewards, function(useless_key_2, reward_2){
				if(all_current_rewards[useless_key_2] != undefined && reward_1['reward_id'] == reward_2['reward_id'] && useless_key_1 < useless_key_2)
				{
					all_current_rewards[useless_key_1]['reward_amount'] += all_current_rewards[useless_key_2]['reward_amount'];
					delete all_current_rewards[useless_key_2];
				}
			});
		}
	});

	if(gamedata['factions'] != undefined && do_no_apply_factions == false)
	{
		$.each(gamedata['factions'], function(faction_id, faction_info){
			var faction_level = faction_info['level'];
			if(all_factions[faction_id] != undefined)
			{
				$.each(all_current_rewards, function(useless_key, reward){
					$.each(all_factions[faction_id]['loot_bonus'], function(loot_id, bonus_amount){
						if(reward['reward_id'] == loot_id && reward['no_faction'] == undefined)
						{
							reward['reward_amount'] = round_by_percent(reward['reward_amount'] * (1 + (faction_level * bonus_amount / 100)));
						}
					});
				});
			}
		});
	}
	if(gamedata['upgrades'] != undefined /*&& do_no_apply_factions == false*/)
	{
		$.each(all_current_rewards, function(useless_key, reward){
			var loot_factor = get_upgrade_factor('loot', [reward['reward_id']], true);
			//console.log(loot_factor);
			reward['reward_amount'] = round_by_percent(reward['reward_amount'] * loot_factor);
		});
	}
	

	/*$.each(all_current_rewards, function(useless_key_1, reward_1){
		if(all_available_cards[reward_1['reward_id']] != undefined && all_available_cards[reward_1['reward_id']]['type'] == 'recipe')
		{
			if(gamedata['known_recipes'] != undefined && gamedata['known_recipes'][all_available_cards[reward_1['reward_id']]['recipe']] != undefined)
			{
				delete all_current_rewards[useless_key_1];
			}
		}
	});*/
	do_no_apply_factions = false;
	var pickable_count = 0;
	$.each(all_current_rewards, function(useless_key, reward){
		if(reward['pickable'] != undefined && reward['pickable'] == true)
		{
			pickable_count++;
		}
	});
	if(pickable_count == 1)
	{
		$.each(all_current_rewards, function(useless_key, reward){
			if(reward['pickable'] != undefined && reward['pickable'] == true)
			{
				delete all_current_rewards[useless_key]['pickable'];
			}
		});
	}
	if(current_reward_text != undefined)
	{
		parsed_rewards += '<div class="reward_text">' + current_reward_text + '</div>';
	}
	$.each(all_current_rewards, function(useless_key, reward){
		//console.log(reward['reward_id']);
		if(reward['reward_id'] == 'scraps')
		{
			//gain_scraps(reward_amount);
			if(reward['pickable'] == undefined || reward['pickable'] == false)
			{
				if(gamedata['scraps'] == undefined)
				{
					gamedata['scraps'] = reward['reward_amount'];
				}
				else
				{
					gamedata['scraps'] += reward['reward_amount'];
				}
				check_quests('gained_scraps', undefined, reward['reward_amount']);
				check_quests('scraps_owned', gamedata['scraps']);
				gained_scraps += reward['reward_amount'];
			}
			else
			{
				var parsed_single_reward = parse_card('scraps_placeholder', reward['reward_amount']);
				parsed_rewards += '<div class="single_current_reward reward_' + useless_key + '">' + parsed_single_reward + '<div class="menu_button slim pick_reward_button" onclick="pick_reward(' + useless_key + ')">PICK</div></div>';
			}
		}
		if(reward['reward_id'] == 'potion')
		{
			var learned_potion = get_random_upgrade('potion');
			var found_new_potion = false;
			//current_building_id = 'alchemist';
			if(gamedata['town'][current_building_id] == undefined){gamedata['town'][current_building_id] = {building_id:'alchemist'};}
			if(gamedata['town'][current_building_id]['potions'] == undefined){gamedata['town'][current_building_id]['potions'] = {};}
			if(gamedata['town'][current_building_id]['potions'][learned_potion] == undefined){found_new_potion = true;}
			var potion_name = all_upgrades[learned_potion]['name'];
			var parsed_single_reward = parse_card('potion_placeholder', undefined, undefined, potion_name);
			if(found_new_potion == false)
			{
				if(gamedata['upgrades'][learned_potion] == undefined){gamedata['upgrades'][learned_potion] = 1;}else{gamedata['upgrades'][learned_potion]++;}
				parsed_rewards += '<div class="single_current_reward">' + parsed_single_reward + '</div>';
			}
			else
			{
				gamedata['town'][current_building_id]['potions'][learned_potion] = true;
				parsed_rewards += '<div class="single_current_reward glowing_reward">' + parsed_single_reward + '</div>';
			}
			saveToLocalStorage();

		}
		if(reward['reward_id'] == 'reputation')
		{
			gain_current_rep(reward['reward_amount']);
		}
		if(all_available_cards[reward['reward_id']] != undefined)
		{
			var reward_value = all_available_cards[reward['reward_id']]['value'] * reward['reward_amount'];
			if(reward_value != undefined && reward_value == highest_value && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				multiple_highest_values = true;
			}
			if(reward_value != undefined && reward_value > highest_value && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				highest_value = reward_value;
				highest_value_key = useless_key;
				multiple_highest_values = false;
			}
			var owned_amount = 0;
			var new_card = '';
			if(gamedata['owned_cards'][reward['reward_id']] != undefined /*&& gamedata['owned_cards'][reward['reward_id']] > 0*/)
			{
				owned_amount = gamedata['owned_cards'][reward['reward_id']];
			}
			else
			{
				new_card = '</div><div class="new_card">NEW';
			}
			if(owned_amount == lowest_owned && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				multiple_lowest_owned = true;
			}
			if((lowest_owned === false || owned_amount < lowest_owned) && reward['pickable'] != undefined && reward['pickable'] == true)
			{
				lowest_owned = owned_amount;
				lowest_owned_key = useless_key;
				multiple_lowest_owned = false;
			}
			if(reward['pickable'] == undefined || reward['pickable'] == false)
			{
				var ungainable_found = false;
				if(all_available_cards[reward['reward_id']] != undefined && all_available_cards[reward['reward_id']]['type'] == 'recipe')
				{
					if(gamedata['known_recipes'] == undefined)
					{
						gamedata['known_recipes'] = {};
					}
					gamedata['known_recipes'][all_available_cards[reward['reward_id']]['recipe']] = true;
					ungainable_found = true;
				}

				if(all_available_cards[reward['reward_id']] != undefined && all_available_cards[reward['reward_id']]['type'] == 'cardback')
				{
					gamedata['owned_card_backs'][all_available_cards[reward['reward_id']]['reward']['card_back_id']] = true;
					ungainable_found = true;
				}

				if(ungainable_found == false)
				{
					gain_card(reward['reward_id'], reward['reward_amount']);
				}
				
				if(gamedata['owned_cards'][reward['reward_id']] != undefined && gamedata['owned_cards'][reward['reward_id']] > 0)
				{
					owned_amount = gamedata['owned_cards'][reward['reward_id']];
				}
				var parsed_single_reward = parse_card(reward['reward_id'], reward['reward_amount'] + new_card);
				parsed_rewards += '<div class="single_current_reward" onclick="show_card_details(\'' + reward['reward_id'] + '\')">' + parsed_single_reward + '</div>';
			}
			else
			{
				var parsed_single_reward = parse_card(reward['reward_id'], reward['reward_amount'] + ' <span class="currently_owned">(' + owned_amount + ')</span>');
				parsed_rewards += '<div class="single_current_reward reward_' + useless_key + ' pickable_reward"><div onclick="show_card_details(\'' + reward['reward_id'] + '\')">' + parsed_single_reward + '</div><div class="menu_button slim pick_reward_button" onclick="pick_reward(' + useless_key + ')">PICK</div></div>';
			}
			//show_card_details(reward_id, undefined, reward_amount);
		}
	});
	if(gained_scraps > 0)
	{
		var parsed_card = parse_card('scraps_placeholder', gained_scraps);
		parsed_rewards += '<div class="single_current_reward">' + parsed_card + '</div>';
	}
	

	$.each(all_current_rewards, function(reward_id, reward_info){
		if(reward_info['pickable'] == undefined || reward_info['pickable'] == false)
		{
			delete all_current_rewards[reward_id];
		}
	});

	if(count_object(all_current_rewards) == 0)
	{
		parsed_rewards += '<div class="claim_current_rewards_button" onclick="show_content(\'' + current_reward_origin + '\')">CLAIM</div>';
	}
	else
	{
		parsed_rewards += '<div class="claim_current_rewards_button hidden" onclick="show_content(\'' + current_reward_origin + '\')">CLAIM</div>';
	}
	//all_current_rewards = {};
	$('.current_rewards_content').html(parsed_rewards);

	//console.log(highest_value);
	if(multiple_highest_values == false && highest_value_key !== false)
	{
		$('.reward_' + highest_value_key + ' .card').addClass('glowing_reward');
	}
	if(multiple_lowest_owned == false && lowest_owned_key !== false)
	{
		$('.reward_' + lowest_owned_key + ' .card').addClass('glowing_reward');
	}
	saveToLocalStorage();
	if(reward_count == 0 && current_reward_text == '')
	{
		show_content(current_reward_origin);
	}
};

function pick_reward(picked_reward_id){

	$('.single_current_reward .card').removeClass('glowing_reward');
	$.each(all_current_rewards, function(reward_id, reward_info){
		if(reward_id == picked_reward_id)
		{
			if(reward_info['reward_id'] == 'scraps')
			{
				if(gamedata['scraps'] == undefined)
				{
					gamedata['scraps'] = reward_info['reward_amount'];
				}
				else
				{
					gamedata['scraps'] += reward_info['reward_amount'];
				}
				$('.reward_' + reward_id + ' .card').remove();
				var parsed_card = parse_card('scraps_placeholder', reward_info['reward_amount']);
				$('.reward_' + reward_id + ' div').append(parsed_card);
			}
			if(all_available_cards[reward_info['reward_id']] != undefined)
			{
				check_quests('card_picked_' + reward_info['reward_id']);
				gain_card(reward_info['reward_id'], reward_info['reward_amount']);
				$('.reward_' + reward_id + ' .card').remove();
				var parsed_card = parse_card(reward_info['reward_id'], reward_info['reward_amount']);
				$('.reward_' + reward_id + ' div').append(parsed_card);
			}
			$('.reward_' + reward_id).css('overflow','visible');
			$('.reward_' + reward_id + ' .pick_reward_button').remove();
		}
		else
		{
			$('.reward_' + reward_id).css('width','0px');
			$('.reward_' + reward_id).css('margin-left','0px');
			$('.reward_' + reward_id).css('margin-right','0px');
			$('.reward_' + reward_id).css('overflow','hidden');
			$('.reward_' + reward_id + ' .pick_reward_button').remove();
		}
		delete all_current_rewards[reward_id];
	});

	$('.claim_current_rewards_button').removeClass('hidden');
	
};

function return_exp_cost(exp_id){
	var current_exp = 		all_expeditions[exp_id];
	$.each(current_exp['costs'], function(cost_id, cost_amount){

		if(cost_id == 'scraps')
		{
			gamedata['scraps'] += cost_amount;
		}
		
		if(all_available_cards[cost_id] != undefined)
		{
			gain_card(cost_id);
		}
	});
}

function show_building_recipes(){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];

	var all_recipes = '';

	var filters = {};
	filters['ability'] = '';
	if($('.ability_filter').val() != '')
	{
		filters['ability'] = $('.ability_filter').val();
	}
	filters['name'] = '';
	if($('.name_filter').val() != '')
	{
		filters['name'] = $('.name_filter').val();
	}

	if(building_info['recipes'] == undefined)
	{
		show_content('town');
	}
	else
	{
		$('.building_recipes_content').html('');
		$.each(building_info['recipes'], function(result, recipe_info){
			var recipe_available = check_defeated_heroes(recipe_info['available']);
			//console.log(recipe_available);
			if(recipe_available == '')
			{
				if(count_object(recipe_info['costs']) == 0 && all_available_cards[result]['recipe'] != undefined)
				{
					recipe_info['costs'] = all_available_cards[result]['recipe'];
				}

				/*var card_filtered = false;
				if(filters['name'] != '')
				{
					if(all_available_cards[result]['name'].indexOf(filters['name']) == -1){
						card_filtered = true;
					}
				}
				if(filters['ability'] != '')
				{
					var ability_matched = false;

					$.each(all_available_cards[result]['abilities'], function(ability_key, ability_level){
						if(ability_key.indexOf(filters['ability']) != -1){
							ability_matched = true;
						}
						if(all_abilities[ability_key]['description'].indexOf(filters['ability']) != -1){
							ability_matched = true;
						}
					});
					if(ability_matched == false)
					{
						card_filtered = true;
					}
					
				}
				if($('.' + all_available_cards[result]['type'] + '_type_filter').prop("checked") == false)
				{
					card_filtered = true;
				}
				$.each(all_available_cards[result]['color'], function(useless_key, color){
					if(color != undefined && $('.' + color + '_color_filter').prop("checked") == false)
					{
						card_filtered = true;
					}
				});*/

				if(check_filters(result) == false || true)
				{
					if(gamedata['owned_cards'][result] == undefined){gamedata['owned_cards'][result] = 0;}
					var parsed_recipe = '';
					var parsed_result = parse_card(result, gamedata['owned_cards'][result]);
					var can_craft = true;
					parsed_recipe += '<div class="single_building_recipe">';
					parsed_recipe += 	'<span class="single_building_recipe_result" onclick="show_card_details(\'' + result + '\')">' + parsed_result + '</span>';
					parsed_recipe += 	'<div class="single_building_recipe_costs">';
					if(all_available_cards[result]['quote'] != undefined && all_available_cards[result]['quote'] != ''){
						parsed_recipe += 	'<span><i>' + all_available_cards[result]['quote'] + '</i><br/><br/></span>';
					}
					var costs_factor = 1;
					if(recipe_info['costs_increas_factor'] != undefined)
					{
						costs_factor = (to_the_nth(1, gamedata['owned_cards'][result], recipe_info['costs_increas_factor']));
					}
					$.each(recipe_info['costs'], function(cost_id, cost_amount){
						//if(gamedata['owned_cards'][cost_id] == undefined){gamedata['owned_cards'][cost_id] = 0;}
						var owned_amount = 0;
						if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
						if(gamedata['owned_cards'][cost_id] != undefined){owned_amount = gamedata['owned_cards'][cost_id];}
						var cost_name = 'Scraps';
						if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
						if(owned_amount < Math.floor(cost_amount * costs_factor))
						{
							can_craft = false;

							var parsed_cost = cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(Math.floor(cost_amount * costs_factor),3) + '</span>';
						}
						else
						{
							var parsed_cost = cost_name + ': <span style="">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(Math.floor(cost_amount * costs_factor),3) + '</span>';
						}
						
						parsed_recipe += '<div class="single_building_recipe_cost" onclick="show_card_details(\'' + cost_id + '\')">' + parsed_cost + '</div>';
					});
					parsed_recipe += 	'</div>';
					parsed_recipe += 	'<div class="single_building_recipe_arrow"><</div>';
					
					if(can_craft == true)
					{
						parsed_recipe += 	'<div class="single_building_recipe_craft_button" onclick="craft_local_card(\'' + result + '\')">BUY</div>';
					}
					parsed_recipe += '<div style="clear:both"></div>';
					parsed_recipe += '</div>';
					//$('.building_recipes_content').append(parsed_recipe);
					all_recipes += parsed_recipe;
				}
			}
		});
	}

	return all_recipes;
}

function craft_local_card(card_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var current_recipe = 	building_info['recipes'][card_id];

	if(count_object(current_recipe['costs']) == 0 && all_available_cards[card_id]['recipe'] != undefined)
	{
		current_recipe['costs'] = all_available_cards[card_id]['recipe'];
	}

	var costs_factor = 1;
	if(current_recipe['costs_increas_factor'] != undefined)
	{
		costs_factor = (to_the_nth(1, gamedata['owned_cards'][card_id], current_recipe['costs_increas_factor']));
	}

	if(all_available_cards[card_id] != undefined)
	{
		var can_craft = true;
		$.each(current_recipe['costs'], function(card_cost_id, cost_amount){
			var owned_amount = 0;
			if(card_cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
			if(gamedata['owned_cards'][card_cost_id] != undefined){owned_amount = gamedata['owned_cards'][card_cost_id];}
			if(owned_amount < Math.floor(cost_amount * costs_factor))
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			$.each(current_recipe['costs'], function(card_cost_id, cost_amount){
				if(gamedata['owned_cards'][card_cost_id] != undefined)
				{
					gamedata['owned_cards'][card_cost_id] -= Math.floor(cost_amount * costs_factor);
				}
				if(card_cost_id == 'scraps')
				{
					gamedata['scraps'] -= Math.floor(cost_amount * costs_factor);
				}
			});
			gain_card(card_id);
			show_available_cards(false);
			saveToLocalStorage();
			//show_card_details(card_id);
			
		}
		show_single_building();
	}
};

function learn_local_recipe(card_id){
	var current_building = 	gamedata['town'][current_building_id];
	var building_info = 	all_buildings[current_building['building_id']];
	var current_recipe = 	building_info['recipe_shop'][card_id];

	if(all_available_cards[card_id] != undefined && gamedata['known_recipes'][card_id] == undefined)
	{
		var can_craft = true;
		$.each(current_recipe['cost'], function(card_cost_id, cost_amount){
			var owned_amount = 0;
			if(card_cost_id = 'scraps'){owned_amount = gamedata['scraps'];}
			if(gamedata['owned_cards'][card_cost_id] != undefined){owned_amount = gamedata['owned_cards'][card_cost_id];}
			if(owned_amount < cost_amount)
			{
				can_craft = false;
			}
		});
		if(can_craft == true)
		{
			$.each(current_recipe['cost'], function(card_cost_id, cost_amount){
				if(gamedata['owned_cards'][card_cost_id] != undefined)
				{
					gamedata['owned_cards'][card_cost_id] -= cost_amount;
				}
				if(card_cost_id == 'scraps')
				{
					gamedata['scraps'] -= cost_amount;
				}
			});
			gamedata['known_recipes'][card_id] = true;
			show_available_cards(false);
			saveToLocalStorage();
			//show_card_details(card_id);
			show_single_building(card_id);
		}
		
	}
}

function update_all_timers(){
	$('.timer').each(function(timer){
		var complete_time = $(this).attr('data-complete-time');
		var time_now = new Date().getTime();
		var time_left = complete_time - time_now;
		if(time_left > 0)
		{
			//var parsed_time = new Date(time_left).toISOString().substr(11, 8);
			var parsed_time = '';
			if(time_left >= 1000)
			{
				var parsed_time = toHHMMSS(Math.floor(time_left / 1000));
			}
			$(this).html(parsed_time);
		}
		else
		{
			if($(this).attr('data-complete-show') != undefined)
			{
				$(this).addClass('hidden');
				$('.' + $(this).attr('data-complete-show')).removeClass('hidden');
			}
			if($(this).attr('data-complete-hide') != undefined)
			{
				$('.' + $(this).attr('data-complete-hide')).addClass('hidden');
			}
			if($(this).attr('data-complete-function') != undefined)
			{
				var possible_extra_function = window[$(this).attr('data-complete-function')]; 
				if (typeof possible_extra_function === "function") possible_extra_function();
			}
			
		}
	});

	clearTimeout(timer_timeout);

	timer_timeout = setTimeout(function(){
		update_all_timers();
	},1000);
	//new Date(SECONDS * 1000).toISOString().substr(11, 8);
}

function toHHMMSS(secs){
    var sec_num = parseInt(secs, 10)
    var days   = Math.floor(sec_num / 3600 / 24)
    var hours   = Math.floor(sec_num / 3600) % 24
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [days,hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

var timer_timeout = setTimeout(function(){
		update_all_timers();
	},1000);