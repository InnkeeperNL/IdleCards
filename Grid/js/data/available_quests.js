var available_quests = {
	any_win: {
		name: 		'Win 10 battles of any kind',
		chain: 		false,
		chains_to: 	false,
		chance: 	10,
		goals:{
			any_win: 	10,
		},
		rewards:{
			coins: 		50,
			cards:{
				
			}
		}
	},
	location_rock_valley_win: {
		name: 		'Win 3 rock valley battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_rock_valley_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				discarded_weapon: 	2,				
			}
		}
	},
	location_forest_win: {
		name: 		'Win 3 forest battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_forest_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				firtile_dirt: 		2,
			}
		}
	},
	location_mermaid_win: {
		name: 		'Win 3 water world battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_mermaid_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				cleansing_water: 		2,
			}
		}
	},
	location_fiery_elves_win: {
		name: 		'Win 3 fiery elves battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_fiery_elves_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				ignite: 		2,
			}
		}
	},
	location_draw_cards_win: {
		name: 		'Win 3 golden library battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_draw_cards_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				research: 		1,
			}
		}
	},
	location_night_of_the_dead_win: {
		name: 		'Win 3 night of the dead battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_night_of_the_dead_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				ghost_bride: 		1,
			}
		}
	},
	location_graveyard_win: {
		name: 		'Win 3 graveyard battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_graveyard_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				curse_of_vengeance: 		2,
			}
		}
	},
	location_farm_win: {
		name: 		'Win 3 farm battles',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			location_farm_win: 	3,
		},
		rewards:{
			coins: 		150,
			cards:{
				peasant: 		2,
			}
		}
	},
	destroy_enemy_units: {
		name: 		'Have 75 enemy units be destroyed',
		chain: 		false,
		chains_to: 	false,
		chance: 	50,
		goals:{
			enemy_units_detroyed: 	75,
		},
		rewards:{
			coins: 		50,
			cards:{

			}
		}
	},
	destroy_ally_units: {
		name: 		'Have 50 ally units be destroyed',
		chain: 		false,
		chains_to: 	false,
		chance: 	50,
		goals:{
			ally_units_detroyed: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{

			}
		}
	},
	destroy_neutral_units: {
		name: 		'Have 10 neutral units be destroyed',
		chain: 		false,
		chains_to: 	false,
		chance: 	10,
		goals:{
			neutral_units_detroyed: 	10,
		},
		rewards:{
			coins: 		50,
			cards:{

			}
		}
	},
	destroy_any_units: {
		name: 		'Have 100 units be destroyed',
		chain: 		false,
		chains_to: 	false,
		chance: 	2,
		goals:{
			units_detroyed: 	100,
		},
		rewards:{
			coins: 		50,
			cards:{

			}
		}
	},
	play_any_spell: {
		name: 		'Cast 25 spells',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_spell: 	25,
		},
		rewards:{
			coins: 		50,
			cards:{
				magic_attunement: 1,
			}
		}
	},
	play_any_creature: {
		name: 		'Play 50 creatures',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_creature: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				visions_of_life: 	1,
			}
		}
	},
	play_any_structure: {
		name: 		'Play 10 structures',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_structure: 	10,
		},
		rewards:{
			coins: 		50,
			cards:{
				wall: 	1,
			}
		}
	},
	play_any_card: {
		name: 		'Play 100 cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_card: 	100,
		},
		rewards:{
			coins: 		50,
			cards:{
			}
		}
	},
	play_any_blue_card: {
		name: 		'Play 50 blue cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_blue_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				cleansing_water: 	1,
			}
		}
	},
	play_any_red_card: {
		name: 		'Play 50 red cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_red_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				ignite: 	1,
			}
		}
	},
	play_any_green_card: {
		name: 		'Play 50 green cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_green_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				wood_trinket: 	1,
			}
		}
	},
	play_any_purple_card: {
		name: 		'Play 50 purple cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_purple_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				curse_of_vengeance: 	1,
			}
		}
	},
	play_any_orange_card: {
		name: 		'Play 50 orange cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_orange_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				discarded_weapon: 	1,
			}
		}
	},
	play_any_yellow_card: {
		name: 		'Play 50 yellow cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_yellow_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				peasant: 	1,
			}
		}
	},
	play_any_colorless_card: {
		name: 		'Play 50 colorless cards',
		chain: 		false,
		chains_to: 	false,
		chance: 	100,
		goals:{
			play_any_colorless_card: 	50,
		},
		rewards:{
			coins: 		50,
			cards:{
				lone_mage: 	1,
			}
		}
	},
	win_any_with_max_10_hp: {
		name: 		'Win any game with no more then 5 hp',
		chain: 		false,
		chains_to: 	false,
		chance: 	10,
		goals:{
			win_any_with_max_5_hp: 	1,
		},
		rewards:{
			coins: 		100,
			cards:{
				golden_light: 1,
			}
		}
	},
	win_any_with_min_50_hp: {
		name: 		'Win any game with at least 50 hp',
		chain: 		false,
		chains_to: 	false,
		chance: 	10,
		goals:{
			win_any_with_min_50_hp: 	1,
		},
		rewards:{
			coins: 		100,
			cards:{
				dark_visions: 1,
			}
		}
	},

};

function show_quests(){
	check_quests();
}

function check_quests(){
	$('.quest_list').html('');
	for (var i = gamedata['max_quests'] - 1; i >= 0; i--) {
		if(gamedata['current_quests'][i] == undefined)
		{
			var new_quest = find_random_quest();
			gamedata['current_quests'][i] = new_quest;
			saveToLocalStorage();
		}

		
		var parsed_quest = parse_quest(i);
		$('.quest_list').append(parsed_quest);
		
	};
}

function parse_quest(quest_list_id){
	var parsed_quest = '';
	var quest_complete = true;
	var main_quest_id = gamedata['current_quests'][quest_list_id]['id'];
	$.each(gamedata['current_quests'][quest_list_id]['goals'], function(goal_id, goal){
		if(available_quests[main_quest_id]['goals'][goal_id] > goal)
		{
			quest_complete = false;
		}
	});

	parsed_quest += '<div class="single_quest completed_' + quest_complete + '">';
	parsed_quest += 		'<div class="quest_name">' + available_quests[main_quest_id]['name'] + '</div>';
	if(available_quests[main_quest_id]['rewards']['coins'] > 0)
	{
		parsed_quest += 		'<div class="quest_coins">Coins: ' + available_quests[main_quest_id]['rewards']['coins'] + '</div>';
	}
	parsed_quest += 		'<div class="quest_cards">';
		$.each(available_quests[main_quest_id]['rewards']['cards'], function(card_id, amount){
			parsed_quest += "<div class='quest_card_container' onclick='show_card_detailed(\"" + card_id + "\")'>" + parse_card(card_id, 'full',undefined,undefined,amount) + "</div>"
		});
	parsed_quest += 		'</div>';
	if(quest_complete == false)
	{
		$.each(available_quests[main_quest_id]['goals'], function(goal_id, goal){
			parsed_quest += 	'<div class="quest_goal">' + gamedata['current_quests'][quest_list_id]['goals'][goal_id] + ' / ' + goal + '</div>';
		});
	}
	if(quest_complete == true)
	{
		parsed_quest += 	'<div class="quest_goal">Complete!</div>';
		parsed_quest += 	'<button class="complete_quest_button menu_button slim" onclick="claim_quest(' + quest_list_id + ')">Claim</button>';
	}
	parsed_quest += '</div>';

	return parsed_quest;
}

function find_random_quest(){
	var found_quest = {};
	var total_quest_chance = 0;
	$.each(available_quests, function(quest_id, quest_info){
		if(check_can_spawn_quest(quest_id) == true)
		{
			total_quest_chance += quest_info['chance'];
		}
	});
	var chosen_quest_pick = Math.random() * total_quest_chance;
	$.each(available_quests, function(quest_id, quest_info){
		if(check_can_spawn_quest(quest_id) == true)
		{
			chosen_quest_pick -= quest_info['chance'];
			if(chosen_quest_pick >= quest_info['chance'] * -1 && chosen_quest_pick < 0)
			{
				found_quest = {
					id: 	quest_id,
					goals: 	{},
				};
				$.each(quest_info['goals'], function(goal, goal_info){
					found_quest['goals'][goal] = 0;
				});
			}
		}
	});
	return found_quest;
}

function check_can_spawn_quest(quest_id){
	var can_spawn = true;
	$.each(gamedata['current_quests'], function(current_quest, current_quest_info){
		if(current_quest_info['id'] == quest_id)
		{
			can_spawn = false;
		}
	});
	return can_spawn;
}

function update_quests(achievement){
	$.each(gamedata['current_quests'], function(current_quest, current_quest_info){
		$.each(current_quest_info['goals'], function(goal_id, goal_amount){
			if(goal_id == achievement)
			{
				gamedata['current_quests'][current_quest]['goals'][goal_id] ++;
			}
		});
	});
}

function claim_quest(quest_list_id){
	var quest_complete = true;
	var main_quest_id = gamedata['current_quests'][quest_list_id]['id'];
	$.each(gamedata['current_quests'][quest_list_id]['goals'], function(goal_id, goal){
		if(available_quests[main_quest_id]['goals'][goal_id] > goal)
		{
			quest_complete = false;
		}
	});
	if(quest_complete == true)
	{
		gamedata['coins'] += available_quests[main_quest_id]['rewards']['coins'];
		$.each(available_quests[main_quest_id]['rewards']['cards'], function(card_id, amount){
			for (var i = amount - 1; i >= 0; i--) {
				gain_card(card_id, 0);
			};
		});
	}
	delete gamedata['current_quests'][quest_list_id];
	
	check_quests();
	saveToLocalStorage();

}