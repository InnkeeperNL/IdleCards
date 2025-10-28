var units_left_to_process = {};
/*var any_effect_fired = false;*/
var all_timeouts = {};
var next_turn_timeout;
var timeout_key = 0;
var latest_result = 0;
var latest_slot = -10;
var current_rewards = {};
var amount_reduced = 0;
var game_paused = false;
var ready_to_resume = false;
var hand_slot_id = 0;
var highest_unit_id = 3;
var passive_effect_count = 0;
var pickup_rewards = {};

var next_action_timeout;

function start_next_turn(){
	$('.turn_pointer').removeClass('turn_pointer_1');
	$('.turn_pointer').removeClass('turn_pointer_2');
	$('.turn_pointer').addClass('turn_pointer_' + active_turn);

	current_phase = '';
	if(total_timeout < 0)
	{
		total_timeout = 0;
	}
	total_turn_counter++;

	$('.total_turn_counter').html(total_turn_counter);

	$('.resign_button').css('display','block');

	reduce_all_ability_delays(active_turn);
	enable_all_units_to_act(true, active_turn);

	reset_temp_health(active_turn);
	reset_temp_skills(active_turn);

	if(total_turn_counter >= 80)
	{
		total_timeout += 500;
		$('.total_turn_counter_container').css('color', '#f00');
		for (var i = 0; i <= 5; i++) {
			eachoa(battle_info['combat_units'], function(combat_unit_id, combat_unit){
				if(combat_unit['slot'] == i && combat_unit['side'] == active_turn)
				{
					receive_damage(combat_unit_id, undefined, (Math.floor(total_turn_counter / 5) - 15), [/*'ignores_armor','ignore_shields'*/]);
					check_unit_alive(combat_unit_id);
					//total_timeout -= 500 * battle_speed;
				}
			});
		};
		
	}

	var pickup_chance = ((total_turn_counter /** total_turn_counter*/) / (160) / 3) * get_upgrade_factor('floating_chance', 'any', true);
	if(pickup_chance > 0.5){pickup_chance = 0.5;};
	if(Math.random() < pickup_chance /*|| true*/)
	{
		spawn_monthly_pickup();
	}
	
	current_phase = 'start_turn';
	next_action_timeout = setTimeout(function(){
		process_next_unit(current_phase, turn_phases[current_phase]);
	}, total_timeout);
}

var current_phase = '';

var turn_phases = {
	start_turn: 	true,
	draw_card: 		true,
	combat_start: 	true,
	basic: 			false,
	end_turn: 		true
}

function end_this_turn(){

	reset_temp_power(active_turn);
	
	if(active_turn == 1){active_turn = 2;}
	else{active_turn = 1;}

	var fight_number_counter = fight_number + 0;

	if(battle_info.combat_units[2]['current_health'] > 0 && battle_info.combat_units[1]['current_health'] > 0 && combat_alive == true)
	{
		next_action_timeout = setTimeout(function(){
			if(game_paused == false)
			{
				if(fight_number_counter == fight_number)
				{
					start_next_turn();
				}
				else
				{
					console.log(fight_number_counter + ' != ' + fight_number);
				}
			}
			else
			{
				ready_to_resume = true;
			}
		},total_timeout);
	}
	else
	{
		if(combat_alive == true)
		{
			if(battle_info.combat_units[2]['current_health'] > 0 && battle_info.combat_units[1]['current_health'] < 1)
			{
				check_quests('battle_won_any');
				check_quests('battle_won_type_' + current_battle_type);
				if(get_effective_power_factor(difficulty_setting) >= 1)
				{
					check_quests('battle_won_any_turn_count',total_turn_counter);
					check_quests('battle_won_' + current_battle_type + '_turn_count',total_turn_counter);
				}
				check_quests('battle_won_any_health_left_' + battle_info.combat_units[2]['current_health']);
				$('.unit_type_artifact.side_1').addClass('dead');
				if(current_battle_type == 'summoned')
				{
					$('.turn_pointer').addClass('hidden');
					if(endless_waves == true)
					{
						var defeated_hero_id = battle_info.combat_units[1]['card_type'];
					    if(battle_info.combat_units[1]['original_card_type'] != undefined)
					    {
					    	defeated_hero_id = battle_info.combat_units[1]['original_card_type'];
					    }
					    var reward_amount = round_by_percent((20 * get_upgrade_factor('summon_reward', 'any', true)) * /*sqr*/(get_effective_power_factor(difficulty_setting)) * (1 + (difficulty_setting / 100)));
						var hero_dropped = add_basic_win_rewards(reward_amount, defeated_hero_id, true);
						if(hero_dropped == true){total_timeout += 1000;}else{$('.unit_id_1').addClass('dead');}
						check_quests('battle_won_number_wave',endless_wave_count);
						if(gamedata['highest_wave_ever'] < endless_wave_count){gamedata['highest_wave_ever'] = endless_wave_count;}
						endless_wave_count += 1;
						endless_waves = true;
						current_battle_type = 'summoned';
						timeout_key ++;
						all_timeouts[timeout_key] = setTimeout(function(){
							clear_all_timeouts();
							$('.projectile').remove();
							show_content('battle');
						},total_timeout + 1000);
						check_quests('battle_won_wave');
						if(get_effective_power_factor(difficulty_setting) >= 1)
						{
							check_quests('battle_won_wave_turn_count',total_turn_counter);
						}
						check_quests('battle_won_wave_health_left_' + battle_info.combat_units[1]['current_health']);
					}
					else
					{
						gamedata['battles_won']++;
						var effeective_power_factor = get_effective_power_factor(difficulty_setting);
						if(gamedata['highest_summon_won'] < effeective_power_factor){gamedata['highest_summon_won'] = effeective_power_factor;}
					    all_current_rewards = {};
					    current_reward_text = 'You won the battle!';
					    if(gamedata['summon_min_power'] == undefined){gamedata['summon_min_power'] = 1;}
					    gamedata['summon_min_power'] += 1;

					    var reward_amount = 20;
						
					    var defeated_hero_id = battle_info.combat_units[1]['card_type'];
					    if(battle_info.combat_units[1]['original_card_type'] != undefined)
					    {
					    	defeated_hero_id = battle_info.combat_units[1]['original_card_type'];
					    }

						var hero_dropped = add_basic_win_rewards(reward_amount, defeated_hero_id);
						if(hero_dropped == true){total_timeout += 1000;}else{$('.unit_id_1').addClass('dead');}
				    	current_reward_origin = 'summon';

						timeout_key ++;
						all_timeouts[timeout_key] = setTimeout(function(){
							show_content('current_rewards');
						},total_timeout + 1000);
						check_quests('battle_won_summoned');
						if(get_effective_power_factor(difficulty_setting) >= 1)
						{
							check_quests('battle_won_summoned_turn_count',total_turn_counter);
						}
						check_quests('battle_won_summoned_health_left_' + battle_info.combat_units[1]['current_health']);
						
					}
					$('.side_1.type_artifact').addClass('dead');
				}

				
				
			}
			else
			{
				$('.turn_pointer').addClass('hidden');
				$('.unit_id_2').addClass('dead');
				$('.unit_type_artifact.side_2').addClass('dead');
				/*if(endless_waves == false)
				{*/
					if(battle_info.combat_units[2]['current_health'] < 1 && battle_info.combat_units[1]['current_health'] < 1)
					{
						if(endless_waves != true)
						{
							gamedata['battles_tied']++;
						}
						check_quests('battle_tie_any');
					}
					else
					{
						if(endless_waves != true)
						{
							gamedata['battles_lost']++;
						}
						gamedata['summon_min_power'] *= 0.75;
						check_quests('battle_loss_any');
						check_quests('battle_loss_any_turn_count',total_turn_counter);
						check_quests('battle_loss_' + current_battle_type + '_turn_count',total_turn_counter);
						check_quests('battle_loss_any_health_left_' + battle_info.combat_units[1]['current_health']);
					}
				/*}*/
				if(current_battle_type == 'random' || true)
				{
					if(endless_waves == true)
					{
						current_reward_origin = 'waves';
						current_reward_text = 'You defeated ' + (endless_wave_count - 1) + ' waves!';
						timeout_key ++;
						all_timeouts[timeout_key] = setTimeout(function(){
							show_content('current_rewards');
						},total_timeout + 1000);
					}
					else
					{
						timeout_key ++;
						next_turn_timeout = setTimeout(function(){
							clear_all_timeouts();
							end_combat();
						},total_timeout + 1000);
					}
				}
			}
			
			combat_alive = false;
			saveToLocalStorage();
		}
	}
}

var process_counter = 0;
var all_counter_timeouts = {};

function process_next_unit(proc, do_not_process_effects){
	//console.log(proc);
	var process_started = nowint();
	check_all_ready_cards();
	var next_unit_id = find_next_unit_to_act(active_turn);
	if(next_unit_id != false)
	{
		process_single_unit(next_unit_id, undefined, do_not_process_effects, proc);
		next_action_timeout = setTimeout(function(){
			process_next_unit(current_phase, turn_phases[current_phase]);
		}, total_timeout);
		total_timeout = 0;
	}
	else
	{
		current_phase = find_next_phase();
		enable_all_units_to_act(false, active_turn);
		if(current_phase != false)
		{
			if(current_phase == 'draw_card')
			{
				reduce_all_hand_times(active_turn);
				check_all_ready_cards();
				draw_card(active_turn, undefined, undefined, undefined);
				current_phase = find_next_phase();
			}
			
			next_action_timeout = setTimeout(function(){
				process_next_unit(current_phase, turn_phases[current_phase]);
			}, total_timeout);
			total_timeout = 0;
		}
		else
		{
			next_action_timeout = setTimeout(function(){
				end_this_turn();
			}, total_timeout);
			total_timeout = 0;
		}
		
	}
	var process_done = nowint();
	var process_time = process_done - process_started;
	if(process_time > 10)
	{
		process_counter++;
		var process_time_counter = process_counter + 0;
		$('.all_save_icons').append('<div class="saving_icon save_' + process_time_counter + ' save_danger" style="width:' + (process_time / 2) + 'px"></div>');
		
		all_counter_timeouts[process_time_counter] = setTimeout(function(){
			$('.save_' + process_time_counter).remove();
			clearTimeout(all_counter_timeouts[process_time_counter]);
			delete(all_counter_timeouts[process_time_counter]);
		},1000);
		//console.log(process_time);
	}
	total_timeout += process_time;
}

function find_next_phase(){
	var next_phase = false;
	var next_phase_procs = false;
	var found_current_phase = false;
	eachoa(turn_phases, function(phase_id, proc_effects){
		if(found_current_phase == true && next_phase == false){next_phase = phase_id;next_phase_procs = proc_effects;}
		if(phase_id == current_phase && next_phase == false){found_current_phase = true;}
	});
	return next_phase;
}

function find_next_unit_to_act(side){
	var next_unit_id = false;
	for(var unit_slot=-5;unit_slot<=5;unit_slot++)
	{
		eachoa(battle_info.combat_units, function(unit_id, unit){
			if(next_unit_id == false && /*unit['side'] == side &&*/ unit['acted_this_turn'] < 1 && unit['slot'] == unit_slot && combat_alive == true && (unit['failed_to_act_this_phase'] == undefined || unit['failed_to_act_this_phase'] == false))
			{
				next_unit_id = unit_id;
			}
		});
	}
	return next_unit_id;
}

function add_basic_win_rewards(basic_to_pick, chance_card_id, show_drops){
	//console.log(basic_to_pick);
	var effective_rarity = 1 + (gamedata['loot_rarity'] / 100);

	if(basic_to_pick == undefined)
	{
		basic_to_pick = 20;
	}
	if(current_battle_type == 'summoned' && gamedata['current_summon'] != undefined && endless_waves == false)
    {
    	basic_to_pick = gamedata['current_summon']['reward_count'];
    	if(gamedata['current_summon']['loot_rarity'] != undefined)    
    	{
    		effective_rarity = gamedata['current_summon']['loot_rarity'];
    	}	
    }
    if(current_battle_type == 'summoned' && endless_waves == true)
    {
    	effective_rarity = get_upgrade_factor('summon_loot_rarity', 'any', true);	
    }
	if(gamedata['loot_charges'] == undefined)
	{
		gamedata['loot_charges'] = 0;
	}
	if(gamedata['loot_rarity'] == undefined)
	{
		gamedata['loot_rarity'] = 0;
	}
	if(gamedata['loot_charges'] > 0)
	{
		basic_to_pick += gamedata['loot_charges'];
	}
	gamedata['loot_charges'] = 0;
	gamedata['loot_rarity'] = 0;
	if(endless_waves == false)
	{
		current_rewards = {};
	}

	
	

	/*if(Math.random() < 0.01 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'fancy_card_stash',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}
	else
	{
		if(Math.random() < 0.05 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
		{
			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 		'card_stash',
				reward_amount: 	1,
			}
			basic_to_pick -= 1;
		}
	}

	if(Math.random() < 0.01 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'writ_of_loyalty',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	
	/*if(Math.random() < 0.005 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		get_back_card_card(),
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/

	/*if(Math.random() < 0.01 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'toolkit',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.02 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'raid_key',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.03 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'quest_giver',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}
	if(Math.random() < 0.03 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'spellbook',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.03 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > 0)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'resource_stash',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	/*if(Math.random() < 0.10 && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'spyglass',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}
	if(Math.random() < 0.15 * (1 + (gamedata['loot_rarity'] / 100)) && basic_to_pick > -10)
	{
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'treasure_map',
			reward_amount: 	1,
		}
		basic_to_pick -= 1;
	}*/
	
	
	
	/*for(var i=0;i<basic_to_pick;i++)
	{
	    var card_gained = get_basic_reward_card(current_rewards);
	    var card_amount_gained = (Math.floor(Math.random() * ((difficulty_setting / 10) +1) * 5)) + 1;
	    //if(card_amount_gained < 3){card_amount_gained = 3;}
	    card_amount_gained += gamedata['loot_charges'];
	    current_rewards[i] = {card_id:card_gained,card_amount:card_amount_gained};
	    all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		card_gained,
			reward_amount: 	card_amount_gained,
			pickable: 		true,
		}
	}*/

	if(fixed_hero != false)
	{
		if(all_enemy_heroes[fixed_hero] != undefined && all_enemy_heroes[fixed_hero]['drops'] != undefined)
		{
			eachoa(all_enemy_heroes[fixed_hero]['drops'], function(drop_id, drop_amount){
				var max_drop = drop_amount;
				var actual_drop = round_by_percent(Math.random() * max_drop);
				if(actual_drop > 0)
				{
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 			drop_id,
						reward_amount: 		actual_drop,
					}
					if(show_drops != undefined && show_drops == true){show_drop(drop_id, actual_drop);}
				}
			});
		}
	}
	else
	{
		
	}

	var hero_dropped = false;

	if(chance_card_id != undefined && (all_available_cards['recipe_' + chance_card_id] != undefined) && (gamedata['known_recipes'] == undefined || gamedata['known_recipes'][chance_card_id] == undefined))
	{
		//console.log(chance_card_id);
		var recipe_drop_chance = (((effective_rarity * basic_to_pick) / card_drop_chance_reduction / recipe_drop_chance_reduction) / all_available_cards[chance_card_id]['value']);
		if(recipe_drop_chance > max_recipe_drop_chance / 100){recipe_drop_chance = max_recipe_drop_chance / 100;}
		if(Math.random() < recipe_drop_chance)
		{
			if(all_available_cards[chance_card_id]['recipe'] != undefined)
			{
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 			'recipe_' + chance_card_id,
					reward_amount: 		1,
				};
				basic_to_pick -= Math.ceil(all_available_cards[chance_card_id]['value'] / 2);
				if(show_drops != undefined && show_drops == true){show_drop('recipe_' + chance_card_id, 1);}
				if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
				gamedata['known_recipes'][chance_card_id] = true;
			}
		}
	}

	if(chance_card_id != undefined)
	{
		if(Math.random() < (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / all_available_cards[chance_card_id]['value']))
		{

			all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
				reward_id: 			chance_card_id,
				reward_amount: 		1,
			};
			basic_to_pick -= Math.ceil(all_available_cards[chance_card_id]['value'] / 2);
			hero_dropped = true;
			$('.unit_id_1').removeClass('side_1');
			$('.unit_id_1').addClass('side_2');
			$('.unit_id_1').addClass('won_hero');
		}
		eachoa(all_available_cards[chance_card_id]['loot'], function(loot_id, loot_chance){
			if(Math.random() * 100 < loot_chance)
			{
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 			loot_id,
					reward_amount: 		1,
					pickable: 			true,
				};
				if(show_drops != undefined && show_drops == true){show_drop(loot_id, 1);}
				basic_to_pick -= Math.ceil(all_available_cards[loot_id]['value'] / 2);
			}
		});
	}

	if(/*hero_dropped == false && */chance_card_id != undefined && all_available_cards[chance_card_id] != undefined)
	{
		var hero_value = all_available_cards[chance_card_id]['value'];
		var possible_extra_drops = {};
		eachoa(all_available_cards, function(drop_card_id, drop_card_info){
			if(drop_card_info['value'] <= hero_value /*&& (gamedata['known_recipes'] == undefined || gamedata['known_recipes'][drop_card_id] == undefined || drop_card_info['recipe'] == undefined)*/ /*&& drop_card_info['value'] >= hero_value / 4*/ && drop_card_info['pick_chance'] > 0 && (drop_card_info['type'] == 'spell' || drop_card_info['type'] == 'artifact' || ((drop_card_info['type'] == 'structure' || drop_card_info['type'] == 'creature') && drop_card_info['pick_chance'] > 0 && drop_card_info['hero_version'] == undefined)))
			{
				if(drop_card_info['recipe'] != undefined && (gamedata['known_recipes'] == undefined || gamedata['known_recipes'][drop_card_id] == undefined))
				{
					var current_card_drop_chance = 1;
					if(gamedata['decks'][gamedata['current_deck']][drop_card_id] != undefined)
					{
						current_card_drop_chance = 1 + (gamedata['decks'][gamedata['current_deck']][drop_card_id] * get_upgrade_factor('used_non_unit_drop_chance', undefined, true));
					}
					possible_extra_drops['recipe_' + drop_card_id] = current_card_drop_chance;
					possible_extra_drops[drop_card_id] = current_card_drop_chance;
				}
				/*else
				{*/
					
				/*}*/
			}
		});
		if(count_object(possible_extra_drops) > 0)
		{
			var chosen_extra_drop = get_random_key_from_object_based_on_num_value(possible_extra_drops);
			var current_drop_chance = (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / all_available_cards[chosen_extra_drop]['value']);
			if(all_available_cards[chosen_extra_drop]['type'] == 'recipe')
			{
				current_drop_chance /= recipe_drop_chance_reduction;
			}
			console.log(chosen_extra_drop + ' drop chance: ' + current_drop_chance);
			if(Math.random() < current_drop_chance)
			{
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 			chosen_extra_drop,
					reward_amount: 		1,
				};
				if(show_drops != undefined && show_drops == true){show_drop(chosen_extra_drop, 1);}
				basic_to_pick -= Math.ceil(all_available_cards[chosen_extra_drop]['value'] / 2);
				if(all_available_cards[chosen_extra_drop]['type'] == 'recipe')
				{
					if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
					gamedata['known_recipes'][all_available_cards[chosen_extra_drop]['recipe']] = true;
				}
			}
		}
	}

	if(current_battle_type != 'daily')
	{
		var random_loot_id = get_random_key_from_object_based_on_num_value(random_loot_drops) /*random_loot_drops[get_random_key_from_object(random_loot_drops)]*/;
		/*eachoa(random_loot_drops, function(random_loot_id, random_loot)
		{*/
			if(random_loot_id != undefined && all_available_cards[random_loot_id] != undefined)
			{
				var random_loot_drop_chance = (((effective_rarity */* Math.sqrt*/(basic_to_pick)) / card_drop_chance_reduction) / sqr(all_available_cards[random_loot_id]['value'])) * get_upgrade_factor('loot_drop_chance', random_loot_id, true);
				//if(random_loot_drop_chance > 0.25){random_loot_drop_chance = 0.25;}
				if(Math.random() < random_loot_drop_chance)
				{
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 			random_loot_id,
						reward_amount: 		1,
					};
					if(show_drops != undefined && show_drops == true){show_drop(random_loot_id, 1);}
					basic_to_pick -= all_available_cards[random_loot_id]['value'];
				}
			}
		/*});*/
	}
	else
	{
		eachoa(random_loot_drops, function(random_loot_id, random_loot)
		{
			if(random_loot_id != undefined && all_available_cards[random_loot_id] != undefined)
			{
				var random_loot_drop_chance = (((effective_rarity * basic_to_pick) / card_drop_chance_reduction) / sqr(all_available_cards[random_loot_id]['value']));
				if(random_loot_drop_chance > 0.5){random_loot_drop_chance = 0.5;}
				if(Math.random() < random_loot_drop_chance)
				{
					all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
						reward_id: 			random_loot_id,
						reward_amount: 		1,
					};
					if(show_drops != undefined && show_drops == true){show_drop(random_loot_id, 1);}
					basic_to_pick -= all_available_cards[random_loot_id]['value'];
				}
			}
		});
	}

	if(basic_to_pick > 0)
	{
		//var card_amount_gained = (Math.floor(Math.random() * ((difficulty_setting / 10) +1) * 5)) + 5;
		/*var card_amount_gained = Math.ceil(sqr(get_effective_power_factor()) * 20);
		card_amount_gained += gamedata['loot_charges'];*/
		all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
			reward_id: 		'scraps',
			reward_amount: 		basic_to_pick,
		}
		//if(show_drops != undefined && show_drops == true){show_drop('scraps_placeholder', basic_to_pick);}
	}
	return hero_dropped;
	
}

var loot_drop_counter = 0;

function show_drop(drop_id, drop_amount){
	loot_drop_counter++;
	var local_loot_drop_counter = loot_drop_counter + 0;
	var parsed_card = parse_card(drop_id, drop_amount);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container').append('<div class="loot_drop unit side_1 slot_0 loot_drop_' + local_loot_drop_counter + '">' + parsed_card + '</div>');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.loot_drop_' + local_loot_drop_counter).addClass('dropped');

	},total_timeout + 100);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.loot_drop_' + local_loot_drop_counter).removeClass('dropped');
		$('.loot_drop_' + local_loot_drop_counter).addClass('picked_up');
		$('.loot_drop_' + local_loot_drop_counter).removeClass('side_1');
		$('.loot_drop_' + local_loot_drop_counter).addClass('side_2');
	},total_timeout + 600);
	total_timeout+= 500;
}

function gain_reward(reward_id){
	$('.detail_overlay').removeClass('non_clickable');
    if(current_rewards[reward_id] != undefined)
    {
        for(var i=0;i<current_rewards[reward_id]['card_amount'];i++)
        {
            gain_card(current_rewards[reward_id]['card_id']);
        }
        show_card_details(current_rewards[reward_id]['card_id']);
    }
    current_rewards = {};
}

function process_single_unit(unit_id, activate_on_play, do_not_process_effects, proc){


	if(proc == undefined)
	{
		proc = 'basic';
	}
	var any_effect_fired = false;
	var current_unit = battle_info.combat_units[unit_id];
	/*if(current_unit['acted_this_turn'] < 1 && combat_alive == true)
	{
		if(current_unit['ability_delays'] == undefined)
	    {
	    	current_unit['ability_delays'] = {};
	    }
	    eachoa(current_unit['ability_delays'], function(delay_id, delay_amount){
	    	current_unit['ability_delays'][delay_id] -= 1;
	    });
	    var parsed_abilities = parse_abilities(unit_id);
	    timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
		},total_timeout);
	}*/
	if(current_unit['acted_this_turn'] < 1 && combat_alive == true && (current_unit['effects'] == undefined || current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0 || (do_not_process_effects != undefined && do_not_process_effects == true)))
	{   
	    /*eachoa(current_unit['abilities'], function(ability_id, ability_level){
			var current_ability = all_abilities[ability_id];

			if(battle_info.combat_units[unit_id] != undefined && (current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0 || (do_not_process_effects != undefined && do_not_process_effects == true))){

				if(current_ability['proc'] != undefined && (match_array_values(current_ability['proc'], 'pre_basic') == true && proc == 'basic') && (current_unit['ability_delays'][ability_id] == undefined || current_unit['ability_delays'][ability_id] < 1))
				{
					var temp_any_effect_fired = process_ability(unit_id, current_ability, ability_level, unit_id, undefined, 'pre_basic');
					if(temp_any_effect_fired == true)
					{
						any_effect_fired = true;
						check_ability_delay(unit_id, ability_id);
					}
				}
				
			}
			
		});*/

		eachoa(current_unit['abilities'], function(ability_id, ability_level){
			var current_ability = all_abilities[ability_id];

			if(battle_info.combat_units[unit_id] != undefined && (current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0 || (do_not_process_effects != undefined && do_not_process_effects == true))){

				if(current_ability['proc'] != undefined && (match_array_values(current_ability['proc'], proc) == true || (activate_on_play == true && match_array_values(current_ability['proc'], 'on_play') == true) && proc == 'basic') && (current_unit['ability_delays'][ability_id] == undefined || current_unit['ability_delays'][ability_id] < 1))
				{
					var temp_any_effect_fired = process_ability(unit_id, current_ability, ability_level, unit_id, undefined, proc);
					if(temp_any_effect_fired == true)
					{
						any_effect_fired = true;
						check_ability_delay(unit_id, ability_id);
					}
				}
				
			}
			
		});
		/*if(any_effect_fired == true && battle_info.combat_units[unit_id] != undefined && current_unit['acted_this_turn'] < 1 && combat_alive == true && battle_info.combat_units[unit_id]['temp_power'] != undefined && battle_info.combat_units[unit_id]['temp_power'] != 0)
		{
			battle_info.combat_units[unit_id]['temp_power'] = 0;
			check_unit_power(unit_id);	
			//total_timeout += 500 * battle_speed;
		}*/
		if(any_effect_fired == true)
		{
			total_timeout += 1000 * battle_speed;
		}
		if(any_effect_fired == true && battle_info.combat_units[unit_id] != undefined)
		{
			current_unit['acted_this_turn'] += 1;
			/*var parsed_abilities = parse_abilities(unit_id);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
			},total_timeout);*/
		}
		else
		{
			current_unit['failed_to_act_this_phase'] = true;
		}		
	}
	else
	{
		if(proc == 'basic')
		{
			if(current_unit['effects'] != undefined && current_unit['effects']['stunned'] != undefined && current_unit['effects']['stunned'] > 0)
			{
				process_passive_effect(unit_id, 'stunned', current_unit['effects']['stunned']);
			}
			current_unit['acted_this_turn'] += 1;
			if(current_unit['acted_this_turn'] > 0)
			{
				current_unit['failed_to_act_this_phase'] = true;
			}
		}
		else
		{
			current_unit['failed_to_act_this_phase'] = true;
		}
	}
	/*if(battle_info.combat_units[unit_id] != undefined && current_unit['acted_this_turn'] < 1 && combat_alive == true && (current_unit['effects']['stunned'] == undefined || current_unit['effects']['stunned'] == 0))
	{
	    process_single_unit(unit_id, undefined, true);
	}*/
	if(battle_info.combat_units[unit_id] != undefined && (do_not_process_effects == undefined || do_not_process_effects == false)){
		eachoa(current_unit['effects'], function(effect, amount){
			if(amount > 0)
			{
				if(battle_info.combat_units[unit_id] != undefined && effect != 'stunned'){
					process_passive_effect(unit_id, effect, amount);
				}
			}
		});
		if(battle_info.combat_units[unit_id] != undefined){
		    //current_unit['acted_this_turn'] = 1;
			update_passive_effects(unit_id);
		};
	}

	return any_effect_fired;
}

function reset_temp_skills(side){
	eachoa(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side && current_unit['temp_skills'] != undefined && count_object(current_unit['temp_skills']) > 0)
		{
			eachoa(current_unit['temp_skills'], function(skill_id, temp_level){
				grant_skill(unit_id, unit_id, (-1 * temp_level), skill_id, false);
				delete current_unit['temp_skills'][skill_id];
			});
			check_visible_skills(unit_id);
		}
		
	});
}

function reset_temp_health(side){
	eachoa(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side && current_unit['armor'] != undefined && current_unit['armor'] != 0)
		{
			total_timeout += 500 * battle_speed;
			current_unit['armor'] = 0;
			check_unit_hp(unit_id);
		}
		if(combat_alive == true && current_unit['side'] == side && current_unit['temp_health'] != undefined && current_unit['temp_health'] != 0)
		{
			total_timeout += 500 * battle_speed;
			if(current_unit['temp_health'] > 0){current_unit['temp_health'] = Math.floor(current_unit['temp_health'] * 0.75);}
			if(current_unit['temp_health'] < 0){current_unit['temp_health'] = Math.ceil(current_unit['temp_health'] * 0.75);}
			//current_unit['temp_health'] = 0;
			check_unit_hp(unit_id);
			check_unit_alive(unit_id);
		}
		
	});
}

function reset_temp_power(side){
	eachoa(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side && current_unit['temp_power'] != undefined && current_unit['temp_power'] < 0)
		{
			total_timeout += 500 * battle_speed;
			current_unit['temp_power'] = 0;
			check_unit_power(unit_id);	
		}
	});
}

function reduce_all_ability_delays(side){

	eachoa(battle_info.combat_units, function(unit_id, current_unit){
		if(combat_alive == true && current_unit['side'] == side)
		{
			var something_changed = false;
			if(current_unit['ability_delays'] == undefined)
		    {
		    	current_unit['ability_delays'] = {};
		    }
		    eachoa(current_unit['ability_delays'], function(delay_id, delay_amount){
		    	if(current_unit['ability_delays'][delay_id] > 0)
		    	{
		    		current_unit['ability_delays'][delay_id] -= 1;
		    		something_changed = true;
		    	}
		    });
		    if(something_changed == true)
		    {
			    var parsed_abilities = parse_abilities(unit_id);
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
				},total_timeout);
			}
			if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['effects'] == undefined)
			{
				battle_info.combat_units[unit_id]['effects'] = {};
			}
			/*if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['effects']['stunned'] != undefined && battle_info.combat_units[unit_id]['effects']['stunned'] > 0)
			{
				if(battle_info.combat_units[unit_id]['effects']['stunned'] == 1)
				{
					total_timeout += 500 * battle_speed;
					if(total_timeout < 1000 * battle_speed)
					{
						total_timeout = 1000 * battle_speed;
					}
				}
				battle_info.combat_units[unit_id]['effects']['stunned'] -= 1;
				update_passive_effects(unit_id);
			}*/
			/*if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['effects']['blessed'] != undefined && battle_info.combat_units[unit_id]['effects']['blessed'] > 0)
			{
				battle_info.combat_units[unit_id]['effects']['blessed'] = 0;
				update_passive_effects(unit_id);
			}*/
		}

	});
		
	
}

function check_ability_delay(unit_id, ability_id){
	if(battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['abilities'][ability_id] != undefined)
	{
	    var something_changed = false;
		var current_ability = all_abilities[ability_id];
		var current_unit = battle_info.combat_units[unit_id];
		var ability_level = current_unit['abilities'][ability_id];
		if(current_ability['delay'] != undefined && ability_level['delay'] == undefined)
		{
			current_unit['ability_delays'][ability_id] = calculate_effect({amount:current_ability['delay']}, undefined, unit_id, ability_level);
			something_changed = true;
		}
		if(battle_info.combat_units[unit_id]['abilities'][ability_id]['delay'] != undefined)
		{
			current_unit['ability_delays'][ability_id] = calculate_effect({amount:battle_info.combat_units[unit_id]['abilities'][ability_id]['delay']}, undefined, unit_id, battle_info.combat_units[unit_id]['abilities'][ability_id]);
			something_changed = true;
		}
		
		/*if(battle_info.combat_units[unit_id] != undefined && something_changed == true)
		{
			var parsed_abilities = parse_abilities(unit_id);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id + ' .card_abilities').html(parsed_abilities);
			},total_timeout);
		};	*/
	}
}

function check_unopposed_ally(side){
	var found_unopposed_ally = false;
	for(var slot = 1;slot <= 5;slot++)
	{
		var found_ally = false;
		var found_enemy = false;	
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == side && unit_info['slot'] == slot)
			{
				found_ally = true;
			}
			if(unit_info['side'] != side && unit_info['slot'] == slot)
			{
				found_enemy = true;
			}
		});
		if(found_ally == true && found_enemy == false)
		{
			found_unopposed_ally = true;
		}
	}

	return found_unopposed_ally;
};

function process_passive_effect(unit_id, effect, amount){

	if(battle_info.combat_units[unit_id] != undefined && effect == 'burning' && combat_alive == true)
	{
		
		var temp_burn_reduction = Math.ceil(battle_info.combat_units[unit_id]['effects']['burning'] / 2);
		//receive_damage(unit_id, undefined, amount, ['fire','burning']);
		create_projectile(unit_id, unit_id, 'burn', false, undefined, battle_info.combat_units[unit_id]['side'], undefined, undefined, undefined, true);
		receive_damage(unit_id, undefined, temp_burn_reduction, ['fire','burning']);
		if(battle_info.combat_units[unit_id] != undefined)
		{
			battle_info.combat_units[unit_id]['effects']['burning'] -= temp_burn_reduction;
			//if(battle_info.combat_units[unit_id]['effects']['burning'] > 0){battle_info.combat_units[unit_id]['effects']['burning'] -= 1;}
			//battle_info.combat_units[unit_id]['effects']['burning'] = 0;
			update_passive_effects(unit_id);
			check_unit_alive(unit_id);
		}
		total_timeout += 500 * battle_speed;
	}
	if(battle_info.combat_units[unit_id] != undefined && effect == 'poisoned' && combat_alive == true)
	{

		create_projectile(unit_id, unit_id, 'poison', false, undefined, battle_info.combat_units[unit_id]['side'], undefined, undefined, undefined, true);
		receive_damage(unit_id, undefined, Math.ceil(amount / 2), ['poisoned','ignores_armor']);
		//receive_damage(unit_id, undefined, 1, ['poisoned','ignores_armor']);
		//battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;
		//if(battle_info.combat_units[unit_id]['effects']['poisoned'] > 0){battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;}
		if(battle_info.combat_units[unit_id] != undefined)
		{
			battle_info.combat_units[unit_id]['effects']['poisoned'] = Math.floor(battle_info.combat_units[unit_id]['effects']['poisoned']/ 2);
			//if(battle_info.combat_units[unit_id]['effects']['poisoned'] > 0){battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;}
			//battle_info.combat_units[unit_id]['effects']['poisoned'] = 0;
			update_passive_effects(unit_id);
			check_unit_alive(unit_id);
		}
		total_timeout += 500 * battle_speed;
	}
	if(battle_info.combat_units[unit_id] != undefined && effect == 'stunned' && combat_alive == true)
	{
		//receive_damage(unit_id, undefined, amount, ['poisoned','ignores_armor']);
		battle_info.combat_units[unit_id]['effects']['stunned'] -= 1;
		//battle_info.combat_units[unit_id]['acted_this_turn'] += 1;
		//if(battle_info.combat_units[unit_id]['effects']['poisoned'] > 1){battle_info.combat_units[unit_id]['effects']['poisoned'] -= 1;}
		if(battle_info.combat_units[unit_id] != undefined)
		{
			//battle_info.combat_units[unit_id]['effects']['poisoned'] = Math.floor(battle_info.combat_units[unit_id]['effects']['poisoned']/ 2);
			update_passive_effects(unit_id);
			//check_unit_alive(unit_id);
		}
		total_timeout += 500 * battle_speed;
	}
	if(battle_info.combat_units[unit_id] != undefined && effect == 'doom' && combat_alive == true && Math.random() <= amount / 10)
	{
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		create_projectile(unit_id, unit_id, 'doom', false, undefined, battle_info.combat_units[unit_id]['side'], undefined, undefined, undefined, true);
		/*all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + unit_id + ' .card_image').append('<div class="just_doomed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + unit_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750 * battle_speed);*/
		total_timeout -= 250 * battle_speed;
		check_unit_alive(unit_id, undefined, true);
		total_timeout += 750 * battle_speed;
	}
}

var skills_to_show_icon = {
	explode: 	'bomb',
	wounded: 	'wound',
	blessed: 	'bless',
}

function update_passive_effects(unit_id){
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
	$('.unit_id_' + unit_id + ' .unit_effects').html('');
	},total_timeout);		
	eachoa(battle_info.combat_units[unit_id]['effects'], function(effect, amount){
		if(amount > 0)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + unit_id + ' .unit_effects').prepend('<div class="effect_' + effect + '">' + amount + '</div>');
			},total_timeout);		
		}
	});
	eachoa(battle_info.combat_units[unit_id]['abilities'], function(ability_id, ability_level){
		if(ability_level > 0 && skills_to_show_icon[ability_id] != undefined)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + unit_id + ' .unit_effects').prepend('<div class="projectile_' + skills_to_show_icon[ability_id] + '">' + ability_level + '</div>');
			},total_timeout);		
		}
	});

	check_visible_skills(unit_id);
}

function process_ability(unit_id, current_ability, level, origin_id, any_effect_fired, current_proc, check_death){

	/*if(typeof(level) == 'object')
	{
		var level = level['level'];
	}*/
	if(battle_info['combat_units'][unit_id] != undefined)
	{

		if(any_effect_fired == undefined){any_effect_fired = false;}

		var ability_can_fire = true;
		
		if(battle_info['combat_units'][unit_id] == undefined)
		{
			ability_can_fire = false;
		}

		if(current_ability['need_power'] != undefined && current_ability['need_power'] == true)
		{
			var current_power = calculate_effect({amount:'origin_power'}, undefined, unit_id, undefined);
			if(current_power < 1)
			{
				ability_can_fire = false;
			}
		}
		if(current_ability['need_armor'] != undefined && current_ability['need_armor'] == true && battle_info['combat_units'][unit_id]['armor'] < 1)
		{
			ability_can_fire = false;
		}
		if(current_ability['unopposed_ally'] != undefined && current_ability['unopposed_ally'] == true && check_unopposed_ally(battle_info['combat_units'][unit_id]['side']) == false)
		{
			ability_can_fire = false;
		}

		if(current_ability['origin_type'] != undefined && (battle_info.combat_units[origin_id] == undefined || current_ability['origin_type'] != battle_info.combat_units[origin_id]['type']))
		{
			ability_can_fire = false;
		}

		if(current_ability['origin_damaged'] != undefined && (battle_info.combat_units[origin_id] == undefined || battle_info.combat_units[origin_id]['health'] <= battle_info.combat_units[origin_id]['current_health']))
		{
			ability_can_fire = false;
		}

		if(current_ability['origin_does_not_have_ability'] != undefined && battle_info.combat_units[origin_id] != undefined)
		{
			eachoa(battle_info.combat_units[origin_id]['abilities'], function(temp_key, temp_value){
				if(match_array_values(current_ability['origin_does_not_have_ability'], [temp_key]) == true)
				{
					ability_can_fire = false;
				}
			});	
		}

		if(current_ability['origin_has_opposing'] != undefined && battle_info.combat_units[origin_id] != undefined)
		{
			if(current_ability['origin_has_opposing'] == false && count_object(filter_targets_by_has_no_opposing({0:origin_id})) == 0)
			{
				ability_can_fire = false;
			}
			if(current_ability['origin_has_opposing'] == true && count_object(filter_targets_by_has_no_opposing({0:origin_id})) > 0)
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['origin_has_effect'] != undefined && battle_info.combat_units[origin_id] != undefined)
		{
			if(battle_info.combat_units[origin_id]['effects'] == undefined || battle_info.combat_units[origin_id]['effects'][current_ability['origin_has_effect']] == undefined || battle_info.combat_units[origin_id]['effects'][current_ability['origin_has_effect']] < 1)
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['this_has_effect'] != undefined && battle_info.combat_units[unit_id] != undefined)
		{
			if(battle_info.combat_units[unit_id]['effects'] == undefined || battle_info.combat_units[unit_id]['effects'][current_ability['this_has_effect']] == undefined || battle_info.combat_units[unit_id]['effects'][current_ability['this_has_effect']] < 1)
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['max_enemy_units'] != undefined && count_enemy_units(battle_info['combat_units'][unit_id]['side']) > current_ability['max_enemy_units'])
		{
			ability_can_fire = false;
		}

		if(current_ability['max_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) > current_ability['max_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_enemy_units'] != undefined && count_enemy_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_enemy_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_double_free_slots'] != undefined && count_double_free_slots() < current_ability['min_double_free_slots'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_units'] != undefined && (count_ally_units(battle_info['combat_units'][unit_id]['side']) + count_enemy_units(battle_info['combat_units'][unit_id]['side'])) < current_ability['min_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['max_ally_artifacts'] != undefined && count_ally_artifacts(battle_info['combat_units'][unit_id]['side']) > calculate_effect({amount:current_ability['max_ally_artifacts']},undefined, origin_id, level))
		{
			ability_can_fire = false;
		}
		if(current_ability['min_enemy_artifacts'] != undefined && count_enemy_artifacts(battle_info['combat_units'][unit_id]['side']) < calculate_effect({amount:current_ability['min_enemy_artifacts']},undefined, origin_id, level))
		{
			ability_can_fire = false;
		}
		
		if(current_ability['have_free_adjacent_slot'] != undefined && find_free_slot(battle_info['combat_units'][unit_id]['side'], battle_info['combat_units'][unit_id]['card_type'], 'none', 'adjacent_of_origin', undefined, unit_id) == false)
		{
			ability_can_fire = false;
		}

		if(current_ability['cannot_proc_while_stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] > 0)
		{
			ability_can_fire = false;
		}

		if(match_array_values(current_ability['proc'], 'basic') == true && battle_info['combat_units'][unit_id]['effects']['stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] > 0)
		{
			ability_can_fire = false;
		}

		if(current_ability['min_cards_in_deck'] != undefined && count_deck_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) < current_ability['min_cards_in_deck'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_enemy_cards_in_deck'] != undefined)
		{
			if(battle_info['combat_units'][unit_id]['side'] == 1 && count_deck_cards(battle_info['deck_2']) < current_ability['min_enemy_cards_in_deck'])
			{
				ability_can_fire = false;
			}
			if(battle_info['combat_units'][unit_id]['side'] == 2 && count_deck_cards(battle_info['deck_1']) < current_ability['min_enemy_cards_in_deck'])
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['max_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) > current_ability['max_hand_cards'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_ally_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) < current_ability['min_ally_hand_cards'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_ally_creature_cards_in_grave'] != undefined && count_grave_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']], 'creature') < current_ability['min_ally_creature_cards_in_grave'])
		{
			ability_can_fire = false;
		}

		if(current_ability['min_enemy_hand_cards'] != undefined)
		{
			if(battle_info['combat_units'][unit_id]['side'] == 1 && count_hand_cards(battle_info['deck_2']) < calculate_effect({amount:current_ability['min_enemy_hand_cards']},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
			if(battle_info['combat_units'][unit_id]['side'] == 2 && count_hand_cards(battle_info['deck_1']) < calculate_effect({amount:current_ability['min_enemy_hand_cards']},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
		}

		if(current_ability['max_enemy_hand_cards'] != undefined)
		{
			if(battle_info['combat_units'][unit_id]['side'] == 1 && count_hand_cards(battle_info['deck_2']) >= calculate_effect({amount:current_ability['max_enemy_hand_cards'],},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
			if(battle_info['combat_units'][unit_id]['side'] == 2 && count_hand_cards(battle_info['deck_1']) >= calculate_effect({amount:current_ability['max_enemy_hand_cards']},undefined, origin_id, level))
			{
				ability_can_fire = false;
			}
		}
		

		//console.log(current_proc);
		if(current_ability['specific_proc'] != undefined && (current_proc == undefined || current_proc != current_ability['specific_proc']))
		{
			//console.log('wrong proc: ' + current_proc);
			ability_can_fire = false;
		}
		
		
		if(current_ability['ability_effects'] != undefined && ability_can_fire == true)
		{
			eachoa(current_ability['ability_effects'], function(useless_key, ability_effect){
				any_effect_fired = process_ability(unit_id, ability_effect, level, origin_id, any_effect_fired, current_proc);
			});
		}
		else
		{
			if(ability_can_fire == true)
			{
				if(current_ability['remove_skill_before_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
				{
					set_skill(unit_id, unit_id, 0, current_ability['remove_skill_before_use'], false);
					check_visible_skills(unit_id);
				}
				var current_unit = battle_info.combat_units[unit_id];
				
				var current_unit_id = current_unit['unit_id'] + 0;

				var proc_amount = 1;
				if(current_ability['proc_amount'] != undefined)
				{
					proc_amount = calculate_effect({amount:current_ability['proc_amount']}, unit_id, unit_id, level);
				}
				if(current_ability['min_proc_amount'] != undefined && proc_amount < current_ability['min_proc_amount'])
				{
					proc_amount = calculate_effect({amount:current_ability['min_proc_amount']}, unit_id, unit_id, level);
				}
				if(current_ability['proc_amount_adjustment'] != undefined)
				{
					proc_amount += current_ability['proc_amount_adjustment'];
				}

				if(current_ability['need_to_be_alive'] != undefined && current_ability['need_to_be_alive'] == true && battle_info.combat_units[unit_id]['current_health'] == 0)
				{
					proc_amount = 0;
				}

				/*if(current_ability['proc_chance'] != undefined && current_ability['proc_chance'] < Math.random() * 100)
				{
					proc_amount = 0;
				}*/
				
				var effect_start_timeout = total_timeout + 0;
				var highest_effect_end = total_timeout + 0;
				var temp_power_used = 0;
				var effect_fired = false;
				if(current_ability['uses_power'] != undefined && current_ability['uses_power'] == true && unit_id != undefined && battle_info.combat_units[unit_id] != undefined && battle_info.combat_units[unit_id]['temp_power'] != undefined && battle_info.combat_units[unit_id]['temp_power'] > 0)
				{
					if(battle_info.combat_units[unit_id]['temp_power'] > temp_power_used)
					{
						temp_power_used = battle_info.combat_units[unit_id]['temp_power'] + 0;
					}
				}

				for (var i = 1; i <= proc_amount; i++) {

					var ability_can_fire = check_ability_can_fire(unit_id, current_ability, level, origin_id);

					if(ability_can_fire == true && (current_ability['proc_chance'] == undefined || calculate_effect({amount:current_ability['proc_chance'],amount_factor:current_ability['proc_factor']},unit_id, origin_id, level) >= Math.random() * 100))
					{
						if(battle_info.combat_units[unit_id] != undefined && (battle_info.combat_units[unit_id]['current_health'] > 0 || battle_info.combat_units[unit_id]['health'] === false ||(current_ability['proc_while_dead'] != undefined && current_ability['proc_while_dead'] == true))){
							var all_targets = {};
							eachoa(current_ability['targets'], function(useless_key, target_peramaters){
								if((count_object(all_targets) == 0 || (target_peramaters['add_targets'] != undefined && target_peramaters['add_targets'] == true)) && combat_alive == true)
								{
									all_targets = find_targets(unit_id, target_peramaters, origin_id, level, current_ability, all_targets);
								}
							});

							if(count_object(all_targets) > 0 && combat_alive == true)
							{
								if(current_ability['animation'] != undefined && (current_ability['do_not_pause_between'] == undefined || i == 1))
								{
									//total_timeout += 250 * battle_speed;
									if(typeof(current_ability['animation']) == 'string')
									{
										timeout_key ++;
										all_timeouts[timeout_key] = setTimeout(function(){
											$('.unit_id_' + current_unit_id).addClass(current_ability['animation']);
										},total_timeout);
										timeout_key ++;
										all_timeouts[timeout_key] = setTimeout(function(){
											$('.unit_id_' + current_unit_id).removeClass(current_ability['animation']);
										},total_timeout + (1000 * battle_speed));
									}
									else
									{
										eachoa(current_ability['animation'], function(animation_id, animation_name){
											timeout_key ++;
											all_timeouts[timeout_key] = setTimeout(function(){
												$('.unit_id_' + current_unit_id).addClass(animation_name);
											},total_timeout);
											timeout_key ++;
											all_timeouts[timeout_key] = setTimeout(function(){
												$('.unit_id_' + current_unit_id).removeClass(animation_name);
											},total_timeout + (1000 * battle_speed));
										});
									}
									total_timeout += 500 * battle_speed;
									
								}

								
								var latest_effect_hit = true;
								eachoa(all_targets, function(target_id, target_unit_id){
									ability_can_fire = check_ability_can_fire(unit_id, current_ability, level, origin_id);
									if(battle_info.combat_units[unit_id] != undefined && ability_can_fire == true){
										eachoa(current_ability['effects'], function(useless_key, effect){
											if(effect['check_target_alive'] != undefined && (battle_info.combat_units[target_unit_id] == undefined || battle_info.combat_units[target_unit_id]['current_health'] < 1))
											{
												latest_effect_hit = false;
											}
											if(latest_effect_hit == true && (effect['proc_chance'] == undefined || effect['proc_chance'] > Math.random() * 100))
											{
												if(current_ability['do_not_pause_between'] != undefined && current_ability['do_not_pause_between'] == true)
												{
													total_timeout = effect_start_timeout + 0;
												}
												effect_fired = process_effect(target_unit_id, unit_id, effect, level);
												if(current_ability['do_not_pause_between'] != undefined && current_ability['do_not_pause_between'] == true && highest_effect_end < total_timeout)
												{
													highest_effect_end = total_timeout + 0;
												}
												if(effect_fired == false)
												{
													latest_effect_hit = false;
												}
												if(effect_fired == true && any_effect_fired == false)
												{
													any_effect_fired = true;
												}
											}
											if(check_death == undefined || check_death == true)
											{
												check_unit_alive(target_unit_id, unit_id, undefined, effect['subtypes']);
											}
										});
										
										
									}
								});

								if(total_timeout < highest_effect_end)
								{
									total_timeout = highest_effect_end;
								}

								if(any_effect_fired == true && current_ability['reduce_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
								{
									grant_skill(unit_id, unit_id, -1, current_ability['reduce_skill_after_use'], false);
									check_visible_skills(unit_id);
								}
								if(any_effect_fired == true && current_ability['remove_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
								{
									set_skill(unit_id, unit_id, 0, current_ability['remove_skill_after_use'], false);
									check_visible_skills(unit_id);
								}

								/*if(battle_info['combat_units'][unit_id] != undefined && current_ability['animation'] != undefined && (current_ability['do_not_pause_between'] == undefined || i == proc_amount))
								{
									if(typeof(current_ability['animation']) == 'string')
									{
										timeout_key ++;
										all_timeouts[timeout_key] = setTimeout(function(){
											$('.unit_id_' + current_unit_id).removeClass(current_ability['animation']);
										},total_timeout + 10);
									}
									else
									{
										eachoa(current_ability['animation'], function(animation_id, animation_name){
											timeout_key ++;
											all_timeouts[timeout_key] = setTimeout(function(){
												$('.unit_id_' + current_unit_id).removeClass(animation_name);
											},total_timeout + 10);
										});
									}
								}*/
							}
						};
					};

					if(any_effect_fired == true && current_ability['on_each_success'] != undefined && battle_info['combat_units'][unit_id] != undefined)
				    {
				    	any_effect_fired = process_ability(unit_id, current_ability['on_each_success'], level, origin_id, any_effect_fired);
				    }

				};
			};
		};

		if(any_effect_fired == true && battle_info.combat_units[unit_id] != undefined && temp_power_used > 0)
		{
			battle_info.combat_units[unit_id]['temp_power'] -= temp_power_used;
			temp_power_used = 0;
			check_unit_power(unit_id);
		}

		if(current_ability['remove_skill'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
		{
			set_skill(unit_id, unit_id, 0, current_ability['remove_skill'], false);
			check_visible_skills(unit_id);
			update_passive_effects(unit_id);
		}

		if(any_effect_fired == true && current_ability['animation'] != undefined)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + current_unit_id).removeClass(current_ability['animation']);
			},total_timeout + 10);
		}

		if(any_effect_fired == true && current_ability['adjust_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
		{
			set_skill(unit_id, unit_id, (level + current_ability['adjust_skill_after_use']['amount']), current_ability['adjust_skill_after_use']['skill_id']);
			check_visible_skills(unit_id);
		}

		if(battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] == 'artifact' && (count_object(battle_info['combat_units'][unit_id]['abilities']) < 1 || (count_object(battle_info['combat_units'][unit_id]['abilities']) == 1 && (battle_info['combat_units'][unit_id]['abilities']['delay'] != undefined || battle_info['combat_units'][unit_id]['abilities']['eternal'] != undefined || battle_info['combat_units'][unit_id]['abilities']['restless'] != undefined)))){
	        check_unit_alive(unit_id, undefined, true);
	    };

	    if(any_effect_fired == false && current_ability['on_failure'] != undefined && battle_info['combat_units'][unit_id] != undefined)
	    {
	    	any_effect_fired = process_ability(unit_id, current_ability['on_failure'], level, origin_id, any_effect_fired);
	    }

	    if(any_effect_fired == true && current_ability['on_success'] != undefined && battle_info['combat_units'][unit_id] != undefined)
	    {
	    	any_effect_fired = process_ability(unit_id, current_ability['on_success'], level, origin_id, any_effect_fired);
	    }

	    if(any_effect_fired == true && battle_info['combat_units'][unit_id] != undefined)
	    {
	    	battle_info['combat_units'][unit_id]['used_ability'] = true;
	    }
	    
	}
	return any_effect_fired;
}

function check_adjacent(unit_id, adjacent_type){
	var current_unit = battle_info['combat_units'][unit_id];
	var unit_side = current_unit['side'];
	var has_adjacent = false;
	eachoa(battle_info['combat_units'], function(combat_unit_id, combat_unit){
		if((combat_unit['slot'] == current_unit['slot'] + 1 || combat_unit['slot'] == current_unit['slot'] - 1) && combat_unit['side'] == unit_side && (adjacent_type == 'any' || adjacent_type == combat_unit['type']))
		{
			has_adjacent = true;
		}
	});
	return has_adjacent;
}

function check_ability_can_fire(unit_id, current_ability, level, origin_id){
	var ability_can_fire = true;
	if(battle_info['combat_units'][unit_id] != undefined)
	{
		// unit stunned
		
		if(current_ability['own_max_hp'] != undefined && battle_info['combat_units'][unit_id]['current_health'] > current_ability['own_max_hp'])
		{
			ability_can_fire = false;
		}
		if(current_ability['cannot_proc_while_stunned'] != undefined && current_ability['cannot_proc_while_stunned'] == true && battle_info['combat_units'][unit_id]['effects']['stunned'] != undefined && battle_info['combat_units'][unit_id]['effects']['stunned'] > 0)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_used_ability'] != undefined && current_ability['has_used_ability'] == true && battle_info['combat_units'][unit_id]['used_ability'] != undefined && battle_info['combat_units'][unit_id]['used_ability'] == false)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_used_ability'] != undefined && current_ability['has_used_ability'] == false && battle_info['combat_units'][unit_id]['used_ability'] != undefined && battle_info['combat_units'][unit_id]['used_ability'] == true)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_no_adjacent'] != undefined && check_adjacent(unit_id, current_ability['has_no_adjacent']) == true)
		{
			ability_can_fire = false;
		}
		if(current_ability['has_adjacent'] != undefined && check_adjacent(unit_id, current_ability['has_adjacent']) == false)
		{
			ability_can_fire = false;
		}
		if(battle_info.combat_units[unit_id]['current_health'] == 0 && battle_info.combat_units[unit_id]['health'] !== false && (current_ability['proc_while_dead'] == undefined || current_ability['proc_while_dead'] == false))
		{
			ability_can_fire = false;
		}
		if(current_ability['max_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) > current_ability['max_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_ally_units'] != undefined && count_ally_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_ally_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_enemy_units'] != undefined && count_enemy_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_enemy_units'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_cards_in_deck'] != undefined && count_deck_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) < current_ability['min_cards_in_deck'])
		{
			ability_can_fire = false;
		}
		if(current_ability['max_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + battle_info['combat_units'][unit_id]['side']]) > current_ability['max_hand_cards'])
		{
			ability_can_fire = false;
		}
		if(current_ability['min_unopposed_enemy_units'] != undefined && count_unopposed_enemy_units(battle_info['combat_units'][unit_id]['side']) < current_ability['min_unopposed_enemy_units'])
		{
			ability_can_fire = false;
		}
	}	
	else
	{
		ability_can_fire = false;
	}

	return ability_can_fire;
};

function count_units(){
	var unit_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0)
		{
			unit_count++;
		}
	});
	return unit_count;
}

function count_enemy_units(side, type){
	var enemy_unit_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] != side && unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0 && (type == undefined || type == 'any' || type == unit_info['type']))
		{
			enemy_unit_count++;
		}
	});
	return enemy_unit_count;
}

function count_unopposed_enemy_units(side){
	var enemy_unit_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] != side && unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0)
		{
			var no_opposing = true;
			eachoa(battle_info['combat_units'], function(unit_id_2, unit_info_2){
				if(unit_info['slot'] == unit_info_2['slot'] && unit_info_2['side'] == side)
				{
					no_opposing = false;
				}
			});
			if(no_opposing == true)
			{
				enemy_unit_count++;
			}
		}
	});
	return enemy_unit_count;
}

function count_double_free_slots(){
	var double_free_slots = 0;
	for (var slot = 1; slot <= 5; slot++) {
		var this_slot_free = true;
		eachoa(battle_info['combat_units'], function(unit_id, unit_info){
			if(unit_info['slot'] == slot)
			{
				this_slot_free = false;
			}
		});
		if(this_slot_free == true)
		{
			double_free_slots += 1;
		}
	}
	return double_free_slots;
}

function count_ally_units(side, type){
	var ally_unit_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] == side && unit_info['slot'] > 0 && unit_info['current_health'] != undefined && unit_info['current_health'] > 0 && (type == undefined || type == 'any' || type == unit_info['type']))
		{
			ally_unit_count++;
		}
	});
	return ally_unit_count;
}

function count_ally_artifacts(side){
	var enemy_unit_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] == side && unit_info['slot'] < 0 && unit_info['type'] == 'artifact')
		{
			enemy_unit_count++;
		}
	});
	return enemy_unit_count;
}

function count_enemy_artifacts(side){
	var enemy_unit_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit_info){
		if(unit_info['side'] != side && unit_info['slot'] < 0 && unit_info['type'] == 'artifact')
		{
			enemy_unit_count++;
		}
	});
	return enemy_unit_count;
}


function process_effect(target_id, origin_id, effect, level){
	var calculated_amount = calculate_effect(effect, target_id, origin_id, level);
	var prev_any_effect_fired = any_effect_fired;
	var any_effect_fired = true;
	var effect_avoided = false;
	var target_immune = false;

	if(battle_info.combat_units[target_id] != undefined)
	{
		if(effect['set_latest_slot'] != undefined && effect['set_latest_slot'] == true)
		{
			latest_slot = battle_info.combat_units[target_id]['slot'];
		}

		
		eachoa(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
			var immunities = all_abilities[ability_id]['grants_immunities'];

			if(immunities != undefined && match_array_values(immunities, effect['subtypes']) == true && (all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || (battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0)))
			{
				target_immune = true;
			}
			if(battle_info.combat_units[origin_id] != undefined && all_abilities[ability_id]['negated_by_ability'] != undefined)
			{	
				eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, useless_data){
					if(ability_key == all_abilities[ability_id]['negated_by_ability'])
					{
						target_immune = false;
					}
				});
			}
		});

	}

	if(battle_info.combat_units[origin_id] != undefined && (battle_info.combat_units[origin_id]['used_effect'] == undefined || battle_info.combat_units[origin_id]['used_effect'] == false))
	{
		check_ability_procs(battle_info.combat_units[origin_id]['side'], battle_info.combat_units[origin_id]['type'] + '_about_to_use_ability', origin_id, effect['subtypes']);
	}
	if(battle_info.combat_units[origin_id] != undefined)
	{
		battle_info.combat_units[origin_id]['used_effect'] = true;
	}

	if(battle_info.combat_units[origin_id] != undefined)
	{
		if(battle_info.combat_units[target_id] != undefined)
		{
			eachoa(battle_info.combat_units[target_id]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['targeted_by']) == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect['subtypes']) == true))
				{
					process_ability(target_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'targeted_by');
				}
				if(match_array_values(all_abilities[ability_key]['proc'], ['targeted_by_' + battle_info.combat_units[origin_id]['type']]) == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect['subtypes']) == true))
				{
					process_ability(target_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'targeted_by');
				}
			});
			if(battle_info.combat_units[target_id]['slot'] == 0)
			{
				check_ability_procs(battle_info.combat_units[target_id]['side'], 'hero_targeted_by', origin_id, effect['subtypes']);
			}
			if(battle_info.combat_units[target_id] != undefined)
			{
				check_ability_procs(battle_info.combat_units[target_id]['side'], 'ally_targeted_by', target_id, effect['subtypes']);
			}
		}

		if(battle_info.combat_units[origin_id] != undefined)
		{
			var origin_side = battle_info.combat_units[origin_id]['side'] + 0;
			if(battle_info.combat_units[target_id] != undefined)
			{

				
				eachoa(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
					var has_avoid = all_abilities[ability_id]['proc'];
					if(match_array_values(has_avoid, 'avoid_effect'))
					{
						var avoid_subtypes = all_abilities[ability_id]['subtypes'];
						var can_avoid = match_array_values(avoid_subtypes, effect['subtypes']);
						if(can_avoid == true && all_abilities[ability_id]['subtypes_while_origin_has_ability'] != undefined && battle_info.combat_units[origin_id] != undefined)
						{
							if(battle_info.combat_units[origin_id] == undefined)
							{
								can_avoid = false;
							}
							else
							{
								eachoa(all_abilities[ability_id]['subtypes_while_origin_has_ability'], function(subtype_id, origin_has_ability){
									if(match_array_values(subtype_id, effect['subtypes']))
									{
										var origin_has_current_ability = false;
										eachoa(battle_info.combat_units[origin_id]['abilities'], function(origin_ability_key, origin_ability_level){
											if(origin_ability_level > 0 && match_array_values(origin_ability_key, origin_has_ability))
											{
												origin_has_current_ability = true;
											}
										});
										if(origin_has_current_ability == false)
										{
											can_avoid = false;
										}
									}
								});
							}
						}
						if(can_avoid == true)
						{
							var avoid_chance = calculate_effect({amount:all_abilities[ability_id]['effect']}, target_id, origin_id, ability_level);
							var avoid_rolled = (Math.random() * 100);
							var effect_negated = false;
							var prev_effect_avoided = false;
							if(effect_avoided == true){prev_effect_avoided = true;}

							if(all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0)
			        		{
			        			if(effect_avoided == false && avoid_rolled <= avoid_chance)
			        			{
			        			    if(all_abilities[ability_id]['negated_by_ability'] != undefined)
			            			{	
			            				eachoa(all_abilities[ability_id]['negated_by_ability'], function(useless_key, negated_ability_key){
			            					eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, useless_data){
			            						if(ability_key == negated_ability_key)
			            						{
			            							effect_negated = true;
			            						}
			            					});
			            				});
			            			}
			            			if(effect_negated == false)
			            			{
			            				effect_avoided = true;
			            				latest_result = 0;
			            				process_ability(target_id, all_abilities[ability_id], ability_level, origin_id, undefined, 'avoid_effect');
			            			}
			        			}
			        		}
			        	}
					}
					
				});

			}

		}
		
	
		if(battle_info.combat_units[origin_id] != undefined && effect_avoided == false && target_immune == false && combat_alive == true && (effect['chance'] == undefined || effect['chance'] >= (Math.random() * 100)))
		{
			var effect_count = 1;
			if(effect['effect_count'] != undefined)
			{
				effect_count = calculate_effect({amount:effect['effect_count']}, target_id, origin_id, level);
			}
			//any_effect_fired = true;

			for (var i = effect_count - 1; i >= 0; i--) {

				if(effect['pause_before'] != undefined)
				{
					total_timeout += effect['pause_before'] * battle_speed;
				}

				if(effect['self_projectile'] != undefined)
				{
					total_timeout -= 500 * battle_speed;
					if(total_timeout < 0){total_timeout = 0;}
					create_projectile(origin_id, origin_id, effect['self_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
					total_timeout += 1000 * battle_speed;
				}
				if(effect['projectile'] != undefined)
				{
					total_timeout -= 500 * battle_speed;
					if(total_timeout < 0){total_timeout = 0;}
					create_projectile(origin_id, target_id, effect['projectile'], false, effect['projectile_target'], effect['side']);
					total_timeout += 1000 * battle_speed;
				}

				if(effect['target_projectile'] != undefined)
				{
					total_timeout -= 500 * battle_speed;
					if(total_timeout < 0){total_timeout = 0;}
					create_projectile(target_id, target_id, effect['target_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
					total_timeout += 1000 * battle_speed;
				}

				if(effect['pause_before_effect'] != undefined)
				{
					total_timeout += effect['pause_before_effect'] * battle_speed;
				}
				
				if(battle_info['combat_units'][target_id] != undefined)
				{
					if((battle_info['combat_units'][origin_id] != undefined && battle_info['combat_units'][origin_id]['side'] == 2) || origin_side == 2)
					{
						eachoa(effect['subtypes'], function(useless_key, effect_subtype){
							var possible_quest_string = battle_info['combat_units'][target_id]['card_type'] + '_affected_by_' + effect_subtype;
							if(all_achievement_goals[possible_quest_string] != undefined){
								check_quests(possible_quest_string);
							};
							if(battle_info['combat_units'][target_id] != undefined)
							{
								eachoa(battle_info['combat_units'][target_id]['subtypes'], function(subtype_key, quest_subtype){
									var possible_quest_string = quest_subtype + '_affected_by_' + effect_subtype;
									if(all_achievement_goals[possible_quest_string] != undefined){
										check_quests(possible_quest_string);
									};
								});
							}
						});
					}
					check_single_unit_proc(target_id, undefined, 'pre_affected_by_' + effect['type'], origin_id, effect['subtypes']);
					check_single_unit_proc(target_id, undefined, 'pre_affected_by_any', origin_id, effect['subtypes']);
				}

				if(battle_info.combat_units[target_id] != undefined && battle_info.combat_units[origin_id] != undefined)
				{
					var damage_dealt = false;

					if(effect['type'] == 'increase_loot_charges' && calculated_amount > 0)
					{
						if(gamedata['loot_charges'] == undefined)
						{
							gamedata['loot_charges'] = 0;
						}
						gamedata['loot_charges'] += calculated_amount;
					}

					if(effect['type'] == 'damage' && calculated_amount > 0)
					{
						damage_dealt = receive_damage(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'drain')
					{
						damage_dealt = receive_damage(target_id, origin_id, calculated_amount, effect['subtypes']);
						if(battle_info.combat_units[target_id]['type'] == 'creature' && battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['current_health'] < battle_info.combat_units[origin_id]['health'])
						{
							receive_healing(origin_id, origin_id, damage_dealt, []);
						}
					}

					if(effect['type'] == 'healing')
					{
						receive_healing(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_hp')
					{
						set_hp(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_max_hp')
					{
						set_max_hp(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_power')
					{
						reduce_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'increase_power')
					{
						increase_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'enable_to_act')
					{
						enable_to_act(target_id, origin_id, calculated_amount, effect['subtypes']);
					}
					
					if(effect['type'] == 'go_again')
					{
						go_again(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_power')
					{
						set_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'increase_health')
					{
						increase_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'grant_temp_power')
					{
						grant_temp_power(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'grant_temp_health')
					{
						grant_temp_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_health')
					{
						latest_result = reduce_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_current_health')
					{
						latest_result = reduce_current_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_health')
					{
						latest_result = set_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_max_health')
					{
						reduce_max_health(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'reduce_armor')
					{
						reduce_armor(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'increase_armor')
					{
						increase_armor(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'set_armor')
					{
						latest_result = set_armor(target_id, origin_id, calculated_amount, effect['subtypes']);
					}

					if(effect['type'] == 'grant_skill')
					{
						grant_skill(target_id, origin_id, calculated_amount, effect['skill_id'], undefined, effect['skill_at_front']);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'grant_temp_skill')
					{
						grant_temp_skill(target_id, origin_id, calculated_amount, effect['skill_id'], undefined, effect['skill_at_front']);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'set_skill')
					{
						set_skill(target_id, origin_id, calculated_amount, effect['skill_id']);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'change_side')
					{
						change_side(target_id, origin_id);
					}

					if(effect['type'] == 'ability')
					{
						process_ability(target_id, effect, level, origin_id);
					}

					if(effect['type'] == 'random_ability')
					{
						var chosen_ability = effect['ability_options'][get_random_key_from_object(effect['ability_options'])];
						//console.log(chosen_ability);
						if(all_abilities[chosen_ability] != undefined)
						{
							any_effect_fired = process_ability(target_id, all_abilities[chosen_ability], calculated_amount, origin_id);
						}
					}

					if(effect['type'] == 'move')
					{
						any_effect_fired = move_unit(target_id, effect, origin_id);
					}

					if(effect['type'] == 'set_unit_type')
					{
						set_unit_type(target_id, effect, origin_id);
					}

					if(effect['type'] == 'turn_into')
					{
						turn_into(target_id, effect, origin_id, level);
					}

					if(effect['type'] == 'turn_into_original')
					{
						any_effect_fired = turn_into_original(target_id, origin_id);
					}

					if(effect['type'] == 'apply_burn')
					{
						apply_burn(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'reduce_burn')
					{
						reduce_burn(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_poison')
					{
						apply_poison(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_stun')
					{
						apply_stun(target_id, calculated_amount, origin_id, effect['allways_apply']);
						check_visible_skills(target_id);
					}
					
					if(effect['type'] == 'apply_curse')
					{
						apply_curse(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_doom')
					{
						apply_doom(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_energy')
					{
						apply_energy(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'apply_blessed')
					{
						apply_blessed(target_id, calculated_amount, origin_id);
					}

					if(effect['type'] == 'set_effect_amount')
					{
						set_effect_amount(target_id, calculated_amount, origin_id, effect);
					}


					if(effect['type'] == 'destroy')
					{
						destroy_unit(target_id, origin_id);
					}

					if(effect['type'] == 'disappear')
					{
						disappear_unit(target_id, origin_id);
					}
					

					if(effect['type'] == 'move_to_deck')
					{
						move_to_deck(target_id, effect, origin_id);
					}

					if(effect['type'] == 'reduce_negative_effects')
					{
						reduce_negative_effects(target_id, calculated_amount, origin_id);
						check_visible_skills(target_id);
					}

					if(effect['type'] == 'absorb')
					{
						absorb(target_id, origin_id, effect['absorb_specs']);
					}
				}

				if(effect['type'] == 'set_status')
				{
					any_effect_fired = set_status(target_id, effect, origin_id);
				}

				if(effect['type'] == 'remove_card')
				{
					remove_card_from_combat(target_id, effect, origin_id);
				}

				if(effect['type'] == 'reduce_ready_time')
				{
					reduce_ready_time(target_id, effect, calculated_amount, origin_id);
				}

				if(effect['type'] == 'increase_ready_time')
				{
					increase_ready_time(target_id, effect, calculated_amount, origin_id);
				}

				if(effect['type'] == 'play_card')
				{
					var temp_current_unit = battle_info.combat_units[origin_id];
					var temp_target_side = temp_current_unit['side'];
					if((effect['side'] == 'ally' && temp_current_unit['side'] == 2) || (effect['side'] == 'enemy' && temp_current_unit['side'] == 1))
					{
						temp_target_side = 2;
					}
					if((effect['side'] == 'ally' && temp_current_unit['side'] == 1) || (effect['side'] == 'enemy' && temp_current_unit['side'] == 2))
					{
						temp_target_side = 1;
					}
					play_card(temp_target_side, target_id, true, origin_id);
					any_effect_fired = true;
				}

				if(effect['type'] == 'add_card_to_deck')
				{
					for (var i = calculated_amount - 1; i >= 0; i--) {
						add_card_to_combat_deck(battle_info.combat_units[target_id]['side'], effect['card_id'], effect['card_status']);
					};	
				}
				if(effect['type'] == 'draw_card')
				{
					for (var i = calculated_amount - 1; i >= 0; i--) {
						draw_card(battle_info.combat_units[target_id]['side'], undefined, effect['card_type']);
					};	
				}
				if(effect['type'] == 'summon_unit')
				{
					var summoned_any = false;
					var forced_summon = true;
					if(effect['forced_slot'] != undefined)
					{
						forced_summon = effect['forced_slot'];
					}
					for (var i = calculated_amount - 1; i >= 0; i--) {
						if(effect['card_id'] != 'random' && effect['card_id'] != 'self' && effect['card_id'] != 'origin_card')
						{
							var summoned_this = play_unit_card(battle_info.combat_units[target_id]['side'], effect['card_id'], undefined, forced_summon, origin_id);
						}
						else
						{
						    if(effect['card_id'] == 'random')
						    {
						    	
		    					var card_type_to_summon = 'any';
		    					if(effect['card_type'] != undefined){card_type_to_summon = calculate_effect({amount:effect['card_type']}, target_id, origin_id, level);}
		    					var card_time_to_summon = 100;
		    					if(effect['card_time'] != undefined){card_time_to_summon = calculate_effect({amount:effect['card_time']}, target_id, origin_id, level);}
		    					var card_time_min_to_summon = undefined;
		    					if(effect['card_time_min'] != undefined){card_time_min_to_summon = calculate_effect({amount:effect['card_time_min']}, target_id, origin_id, level);}
		    					var card_color_to_summon = undefined;
		    					if(effect['card_color'] != undefined){card_color_to_summon = calculate_effect({amount:effect['card_color']}, target_id, origin_id, level);}
		    					var card_subtype_to_summon = undefined;
		    					if(effect['card_subtype'] != undefined){card_subtype_to_summon = calculate_effect({amount:effect['card_subtype']}, target_id, origin_id, level);}
		    					var card_to_summon = get_random_card_based_on_time(card_type_to_summon, card_time_to_summon, card_color_to_summon, card_color_to_summon, card_subtype_to_summon, card_time_min_to_summon, undefined, effect['not_subtypes']);

		    					var summoned_this = play_unit_card(battle_info.combat_units[target_id]['side'], card_to_summon, undefined, forced_summon, origin_id);
		    					
						    }
						    if(effect['card_id'] == 'self')
						    {
						        var summoned_this = clone_unit(battle_info.combat_units[target_id]['side'], target_id, effect['clone_stunned'], origin_id, effect);
						    }
						    if(effect['card_id'] == 'origin_card')
						    {
						    	//console.log(battle_info.combat_units[target_id]['card_type']);
						        var summoned_this = play_unit_card(battle_info.combat_units[target_id]['side'], battle_info.combat_units[target_id]['card_type'], undefined, forced_summon, origin_id);
						    }
						}
						if(summoned_this == true){summoned_any = true;}
					};	
					if(summoned_any == false && prev_any_effect_fired == false)
					{
						any_effect_fired = false;
					}
				}	
				if(effect['type'] == 'play_action_card')
				{
					var summoned_any = false;
					for (var i = calculated_amount - 1; i >= 0; i--) {
						if(effect['card_id'] != 'random')
						{
							var summoned_this = play_action_card(battle_info.combat_units[target_id]['side'], effect['card_id'], undefined, true);
						}
						else
						{
							var card_type_to_summon = 'any';
							if(effect['card_type'] != undefined){card_type_to_summon = calculate_effect({amount:effect['card_type']}, target_id, origin_id, level);}
	    					var card_time_to_summon = 100;
	    					if(effect['card_time'] != undefined){card_time_to_summon = calculate_effect({amount:effect['card_time']}, target_id, origin_id, level);}
	    					var card_color_to_summon = undefined;
	    					if(effect['card_color'] != undefined){card_color_to_summon = calculate_effect({amount:effect['card_color']}, target_id, origin_id, level);}
	    					var card_to_summon = get_random_card_based_on_time(card_type_to_summon, card_time_to_summon, card_color_to_summon, card_color_to_summon);
							var summoned_this = play_action_card(battle_info.combat_units[target_id]['side'], card_to_summon, undefined, true);
						}
						if(summoned_this == true){summoned_any = true;}
					};	
					if(summoned_any == false && prev_any_effect_fired == false)
					{
						any_effect_fired = false;
					}
				}	

				if(effect['type'] == 'play_artifact_card')
				{
					var summoned_any = false;
					for (var i = calculated_amount - 1; i >= 0; i--) {
						if(effect['card_id'] != 'random')
						{
							var summoned_this = play_artifact_card(battle_info.combat_units[target_id]['side'], effect['card_id'], undefined, true);
						}
						else
						{
							var card_type_to_summon = 'any';
							if(effect['card_type'] != undefined){card_type_to_summon = calculate_effect({amount:effect['card_type']}, target_id, origin_id, level);}
	    					var card_time_to_summon = 100;
	    					if(effect['card_time'] != undefined){card_time_to_summon = calculate_effect({amount:effect['card_time']}, target_id, origin_id, level);}
	    					var card_color_to_summon = undefined;
	    					if(effect['card_color'] != undefined){card_color_to_summon = calculate_effect({amount:effect['card_color']}, target_id, origin_id, level);}
	    					var card_to_summon = get_random_card_based_on_time(card_type_to_summon, card_time_to_summon, card_color_to_summon, card_color_to_summon);
							var summoned_this = play_artifact_card(battle_info.combat_units[target_id]['side'], card_to_summon, undefined, true);
						}
						if(summoned_this == true){summoned_any = true;}
					};	
					if(summoned_any == false && prev_any_effect_fired == false)
					{
						any_effect_fired = false;
					}
				}	

				if(effect['increase_timeout'] != undefined)
				{
					total_timeout += effect['increase_timeout'] * battle_speed;
				}

				if(battle_info['combat_units'][target_id] != undefined)
				{
					check_single_unit_proc(target_id, undefined, 'affected_by_' + effect['type'], origin_id, effect['subtypes']);
					check_single_unit_proc(target_id, undefined, 'affected_by_any', origin_id, effect['subtypes']);
				}
				if(battle_info['combat_units'][origin_id] != undefined)
				{
					check_single_unit_proc(origin_id, undefined, 'hit_with_ability', target_id, effect['subtypes']);
				}
				
				if(effect['projectile'] != undefined)
				{
					//total_timeout -= 500 * battle_speed;
					total_timeout += 1000 * battle_speed;
				}
			}
		}
		else
		{
			/*if(effect['projectile'] != undefined && effect['on_failure'] == undefined)
			{
				total_timeout -= 500 * battle_speed;
				create_projectile(origin_id, target_id, effect['projectile'], true, effect['projectile_target'], effect['side']);
				total_timeout += 1000 * battle_speed;
			}*/
			if(effect['self_projectile'] != undefined)
			{
				total_timeout -= 1000 * battle_speed;
				create_projectile(origin_id, origin_id, effect['self_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
				total_timeout += 500 * battle_speed;
			}
			if(effect['projectile'] != undefined)
			{
				total_timeout -= 1000 * battle_speed;
				create_projectile(origin_id, target_id, effect['projectile'], false, effect['projectile_target'], effect['side']);
				total_timeout += 500 * battle_speed;
			}

			if(effect['target_projectile'] != undefined)
			{
				total_timeout -= 1000 * battle_speed;
				create_projectile(target_id, target_id, effect['target_projectile'], false, effect['projectile_target'], effect['side'], undefined, undefined, undefined, true);
				total_timeout += 500 * battle_speed;
			}
			if(effect['on_failure'] != undefined)
			{
				process_ability(origin_id, effect['on_failure'], level, undefined);
			}
		}
		if(effect_avoided == true)
		{
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('dodge');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).addClass('dodge');
			},total_timeout + 50);
			
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('dodge');
			},total_timeout + 500);
			total_timeout += 500 * battle_speed;

			if(battle_info.combat_units[origin_id] != undefined)
			{
				if(effect['on_avoided'] != undefined)
				{
					process_ability(origin_id, effect['on_avoided'], ability_level, undefined, 'on_avoided');
				}
			}
			if(battle_info.combat_units[origin_id] != undefined)
			{
				eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
					if(match_array_values(all_abilities[ability_key]['proc'], 'been_avoided') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
					{
						process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'been_avoided');
					}
				});
			}
		}
		if(target_immune == true)
		{
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).addClass('combat_softfade');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('combat_softfade');
			},total_timeout + 500);
			//total_timeout += 500 * battle_speed;
		}
		
		if(any_effect_fired == true)
		{
			if(effect_avoided == false && effect['on_success'] != undefined && (damage_dealt === false || damage_dealt > 0))
			{
				process_ability(origin_id, effect['on_success'], level, target_id);
			}
			if((battle_info['combat_units'][origin_id] != undefined && battle_info['combat_units'][origin_id]['side'] == 2) || origin_side == 2)
			{
				eachoa(effect['subtypes'], function(useless_key, effect_subtype){
					check_quests('ally_performed_' + effect_subtype);
					add_battle_stats('ally_performed_' + effect_subtype, calculated_amount);
				});
			}
			if(battle_info.combat_units[origin_id] != undefined)
			{
				eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
					eachoa(effect['subtypes'], function(useless_key, effect_subtype){
						if(match_array_values(all_abilities[ability_key]['proc'], 'performed_' + effect_subtype) == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect_subtype) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], effect_subtype) == false))
						{
							process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'performed_' + effect_subtype);
						}
					});
					if(match_array_values(all_abilities[ability_key]['proc'], 'performed_ability') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], effect['subtypes']) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], effect['subtypes']) == false))
					{
						process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'performed_ability');
					}
				});
			}
		}
	}
	
	return any_effect_fired;
}

function reduce_negative_effects(target_id, calculated_amount, origin_id){	
	var current_unit = battle_info.combat_units[target_id];
	for(var counter = 1;counter <= calculated_amount;counter++){
		//console.log(counter + ' -> ' + calculated_amount);
		var total_negative_effects = 0;
		var removed_one = false;
		if(current_unit['effects']['burning'] != undefined && current_unit['effects']['burning'] > 0)
		{
			total_negative_effects += current_unit['effects']['burning'];
		}
		if(current_unit['effects']['poisoned'] != undefined && current_unit['effects']['poisoned'] > 0)
		{
			total_negative_effects += current_unit['effects']['poisoned'];
		}
		if(current_unit['effects']['cursed'] != undefined && current_unit['effects']['cursed'] > 0)
		{
			total_negative_effects += current_unit['effects']['cursed'];
		}
		if(current_unit['effects']['doom'] != undefined && current_unit['effects']['doom'] > 0)
		{
			total_negative_effects += current_unit['effects']['doom'];
		}
		var chosen_negative_effect = Math.ceil(Math.random() * total_negative_effects);
		if(current_unit['effects']['burning'] != undefined && removed_one == false && current_unit['effects']['burning'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['burning'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['burning'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		if(current_unit['effects']['poisoned'] != undefined && removed_one == false && current_unit['effects']['poisoned'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['poisoned'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['poisoned'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		if(current_unit['effects']['cursed'] != undefined && removed_one == false && current_unit['effects']['cursed'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['cursed'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['cursed'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		if(current_unit['effects']['doom'] != undefined && removed_one == false && current_unit['effects']['doom'] > 0)
		{
			chosen_negative_effect -= current_unit['effects']['doom'];
			if(chosen_negative_effect <= 0)
			{
				current_unit['effects']['doom'] -= 1;
				removed_one = true;
				total_timeout += 200 * battle_speed;
			}
		}
		update_passive_effects(target_id);
	}
	/*if(current_unit['effects']['stunned'] != undefined && current_unit['effects']['stunned'] > 0)
	{
		total_negative_effects += current_unit['effects']['stunned'];
	}*/

	
	/*if(current_unit['effects']['stunned'] != undefined && removed_one == false && current_unit['effects']['stunned'] > 0)
	{
		chosen_negative_effect -= current_unit['effects']['stunned'];
		if(chosen_negative_effect <= 0)
		{
			current_unit['effects']['stunned'] -= 1;
			removed_one = true;
			total_timeout += 200 * battle_speed;
		}
	}*/
		
	
	
	
}

function absorb(target_id, origin_id, absorb_specs){
	if(battle_info.combat_units[target_id] != undefined && battle_info.combat_units[origin_id] != undefined)
	{
		if(absorb_specs['absorb_abilities'] != undefined && absorb_specs['absorb_abilities'] == true)
		{
			var absorb_amount;
			if(absorb_specs['absorb_abilities_amount'] == 'all')
			{
				absorb_amount = count_object(battle_info.combat_units[target_id]['abilities']);
			}
			else
			{
				absorb_amount = absorb_specs['absorb_abilities_amount'] + 0;
			}

			eachoa(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
				if(absorb_amount > 0 && (absorb_specs['absorb_negative_abilities'] == undefined || absorb_specs['absorb_negative_abilities'] == true || all_abilities[ability_id]['negative_ability'] == undefined))
				{
					if(battle_info.combat_units[origin_id]['abilities'][ability_id] == undefined)
					{
						battle_info.combat_units[origin_id]['abilities'][ability_id] = ability_level;
					}
					else
					{
						battle_info.combat_units[origin_id]['abilities'][ability_id] += ability_level;
					}
					delete battle_info.combat_units[target_id]['abilities'][ability_id];

					total_timeout += 500;
					var parsed_abilities = parse_abilities(target_id);
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
					},total_timeout);
					var parsed_abilities = parse_abilities(origin_id);
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + origin_id + ' .card_abilities').html(parsed_abilities);
					},total_timeout);
					check_visible_skills(target_id);
					check_visible_skills(origin_id);
				}
			});
		}
		if(absorb_specs['absorb_power'] != undefined && absorb_specs['absorb_power'] == true && battle_info.combat_units[target_id]['power'] > 0)
		{
			if(battle_info.combat_units[origin_id]['power'] === false)
			{
				battle_info.combat_units[origin_id]['power'] = battle_info.combat_units[target_id]['power'];
			}
			else
			{
				battle_info.combat_units[origin_id]['power'] += battle_info.combat_units[target_id]['power'];
			}
			battle_info.combat_units[target_id]['power'] = false;
			check_unit_power(target_id);
			check_unit_power(origin_id);
			total_timeout += 500;
		}
		if(absorb_specs['absorb_armor'] != undefined && absorb_specs['absorb_armor'] == true && battle_info.combat_units[target_id]['armor'] > 0)
		{
			if(battle_info.combat_units[origin_id]['armor'] === false)
			{
				battle_info.combat_units[origin_id]['armor'] = battle_info.combat_units[target_id]['armor'];
			}
			else
			{
				battle_info.combat_units[origin_id]['armor'] += battle_info.combat_units[target_id]['armor'];
			}
			battle_info.combat_units[target_id]['armor'] = false;
			check_unit_power(target_id);
			check_unit_power(origin_id);
			total_timeout += 500;
		}
		if(absorb_specs['absorb_health'] != undefined && absorb_specs['absorb_health'] == true && battle_info.combat_units[target_id]['current_health'] > 0)
		{
			if(battle_info.combat_units[origin_id]['current_health'] === false)
			{
				battle_info.combat_units[origin_id]['current_health'] = battle_info.combat_units[target_id]['current_health'];
				battle_info.combat_units[origin_id]['health'] = battle_info.combat_units[target_id]['health'];
			}
			else
			{
				battle_info.combat_units[origin_id]['current_health'] += battle_info.combat_units[target_id]['current_health'];
				battle_info.combat_units[origin_id]['health'] += battle_info.combat_units[target_id]['health'];
			}
			battle_info.combat_units[target_id]['current_health'] = false;
			check_unit_hp(target_id);
			check_unit_hp(origin_id);
			total_timeout += 500;
		}
		
	}
}

function apply_burn(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['burning'] == undefined)
		{
			current_unit['effects']['burning'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['burning'] += calculated_amount;
		}
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('burned');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_burned passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('burned');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function set_effect_amount(target_id, calculated_amount, origin_id, effect_info){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		eachoa(effect_info['effect_names'], function(effect_name, effect_level){
			current_unit['effects'][effect_name] = effect_level;
			if(effect_level < 1){delete	current_unit['effects'][effect_name];}
		});
		if(effect_info['effect_name'] != undefined)
		{
			current_unit['effects'][effect_info['effect_name']] = calculated_amount;
		}
		update_passive_effects(target_id);
	}
};

function reduce_burn(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['burning'] != undefined)
		{
			if(calculated_amount > current_unit['effects']['burning'])
			{
				calculated_amount = current_unit['effects']['burning'];
			}
			current_unit['effects']['burning'] -= calculated_amount;
		}
		/*timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
		},total_timeout + 250);
		total_timeout += 250 * battle_speed;*/
		update_passive_effects(target_id);
	}
};

function apply_poison(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['poisoned'] == undefined)
		{
			current_unit['effects']['poisoned'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['poisoned'] += calculated_amount;
		}
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('poisoned');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_poisoned passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('poisoned');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_curse(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['cursed'] == undefined)
		{
			current_unit['effects']['cursed'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['cursed'] += calculated_amount;
		}
		//current_unit['effects']['blessed'] = 0;
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_cursed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_doom(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['doom'] == undefined)
		{
			current_unit['effects']['doom'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['doom'] += calculated_amount;
		}
		if(current_unit['effects']['doom'] > 10)
		{
			current_unit['effects']['doom'] = 10;
		}
		//current_unit['effects']['blessed'] = 0;
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_doomed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('cursed');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_energy(target_id, calculated_amount, origin_id){
	if(calculated_amount != 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['energy'] == undefined)
		{
			current_unit['effects']['energy'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['energy'] += calculated_amount;
		}
		if(current_unit['effects']['energy'] < 0)
		{
			current_unit['effects']['energy'] = 0;
		}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('blue_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('blue_glow');
		},total_timeout + 500);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_blessed(target_id, calculated_amount, origin_id){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if(current_unit['effects'] == undefined)
		{
			current_unit['effects'] = {};
		}
		if(current_unit['effects']['blessed'] == undefined)
		{
			current_unit['effects']['blessed'] = calculated_amount;
		}
		else
		{
			current_unit['effects']['blessed'] += calculated_amount;
		}
		if(current_unit['effects']['blessed'] < 0)
		{
			current_unit['effects']['blessed'] = 0;
		}
		if(current_unit['effects']['blessed'] > 10)
		{
			current_unit['effects']['blessed'] = 10;
		}
		//current_unit['effects']['cursed'] = 0;
		timeout_key ++;
		passive_effect_count++;
		var temp_passive_effect_count = passive_effect_count + 0;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('yellow_glow');
			$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_blessed passive_effect_' + temp_passive_effect_count + '"></div>');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('yellow_glow');
			$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
		},total_timeout + 750);
		total_timeout += 250 * battle_speed;
		update_passive_effects(target_id);
	}
};

function apply_stun(target_id, calculated_amount, origin_id, allways_apply){
	if(calculated_amount > 0 && battle_info.combat_units[target_id] != undefined)
	{
		var current_unit = battle_info.combat_units[target_id];
		if((current_unit['type'] != 'object' && current_unit['type'] != 'structure') || allways_apply != undefined || true)
		{
			if(current_unit['effects'] == undefined)
			{
				current_unit['effects'] = {};
			}
			if(current_unit['effects']['stunned'] == undefined)
			{
				current_unit['effects']['stunned'] = calculated_amount;
			}
			else
			{
			    if(current_unit['effects']['stunned'] < calculated_amount)
			    {
			    	current_unit['effects']['stunned'] = calculated_amount;
			    }
			}
			timeout_key ++;
			passive_effect_count++;
			var temp_passive_effect_count = passive_effect_count + 0;
			all_timeouts[timeout_key] = setTimeout(function(){
				//$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('burned');
				$('.battle_container .unit_id_' + target_id + ' .card_image').append('<div class="just_stunned passive_effect_' + temp_passive_effect_count + '"></div>');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				//$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('burned');
				$('.battle_container .unit_id_' + target_id + ' .card_image .passive_effect_' + temp_passive_effect_count + '').remove();
			},total_timeout + 750);
			total_timeout += 250 * battle_speed;
			/*timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
			},total_timeout + 250);
			total_timeout += 250 * battle_speed;*/
			update_passive_effects(target_id);
		}
	}
};

function set_unit_type(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	if(current_unit != undefined)
	{
		current_unit['type'] = effect['new_type'];
		var parsed_abilities = parse_abilities(target_id);
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
		},total_timeout);
	}
}

function move_unit(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	var free_slot = find_free_slot(current_unit['side'], current_unit['card_type'], effect['safe_slot'], effect['placement'], effect['opposing_type'], origin_id, effect['slot_filters']);
	if(effect['placement'] != undefined && effect['placement'] == 'right' && free_slot < current_unit['slot'])
	{
		free_slot = false;
	}
	if(effect['placement'] != undefined && effect['placement'] == 'left' && free_slot > current_unit['slot'])
	{
		free_slot = false;
	}
	if(free_slot != false)
	{
		var unit_old_slot = current_unit['slot'] + 0;
		current_unit['old_slot'] = unit_old_slot;
		current_unit['slot'] = free_slot;
		var unit_new_slot = current_unit['slot'] + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id).removeClass('slot_' + unit_old_slot);
			$('.unit_id_' + target_id).addClass('slot_' + unit_new_slot);
		},total_timeout);
		total_timeout += 500 * battle_speed;
		check_ability_procs(current_unit['side'], 'moved', target_id, effect['subtypes']);
		latest_result = unit_old_slot - unit_new_slot;
		if(latest_result < 0){latest_result *= -1;}
		return true;
	}
	else
	{
		//total_timeout -= 500 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + origin_id).removeClass('combat_zoom');
		},total_timeout);
		latest_result = 0;
		return false;
	}
}

function change_side(target_id, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	var new_side = false;
	if(current_unit['side'] == 1){new_side = 2;}
	if(current_unit['side'] == 2){new_side = 1;}

	if(new_side != false)
	{
		var unit_old_side = current_unit['side'] + 0;
		current_unit['side'] = new_side;
		var unit_new_side = new_side;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id).removeClass('flying');
		},total_timeout);
		total_timeout += 100 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id).removeClass('side_' + unit_old_side);
			$('.unit_id_' + target_id).addClass('side_' + unit_new_side);
		},total_timeout);
		var units_at_this_slot = 0;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == current_unit['side'] && unit_info['slot'] == current_unit['slot'])
			{
				units_at_this_slot++;
			}
		});
		if(units_at_this_slot > 1)
		{
			move_unit(target_id, {
				type: 		'move',
				safe_slot:  'dont care',
				has_opposing: 'dont care',
				placement: 	'random'
			}, origin_id);
		}
		else
		{
			total_timeout += 500 * battle_speed;
		}
		check_visible_skills(target_id);
	}
	
}

function move_to_deck(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[target_id];
	if(current_unit != undefined)
	{
		var original_card_id = undefined;
		if(current_unit['card_id'] != undefined)
		{
			original_card_id = 	parseInt(current_unit['card_id']) + 0;
		}
		var current_side = 		current_unit['side'] + 0;
		var original_side = 	current_unit['origin_side'] + 0;

		var new_status = 'deck';
		if(effect['new_status'] != undefined)
		{
			new_status = effect['new_status'];
		}

		if(new_status == 'hand' && original_card_id != undefined && count_hand_cards(battle_info['deck_' + current_unit['side']]) > 9)
		{
			new_status = 'deck';
		}

		if(new_status == 'hand' && original_card_id != undefined && count_hand_cards(battle_info['deck_' + current_unit['side']]) < 10)
		{
			battle_info['deck_' + original_side][original_card_id]['status'] = 'deck';
			draw_card(original_side, original_card_id, undefined, undefined, false);
			total_timeout -= (1500 * battle_speed);
			var temp_slot = battle_info.combat_units[target_id]['slot'] + 0;
			var temp_hand_slot = battle_info['deck_' + original_side][original_card_id]['hand_slot'] + 0;
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).removeClass('side_' + current_side);
				$('.unit_id_' + target_id).addClass('side_' + original_side);
				$('.unit_id_' + target_id).removeClass('slot_' + temp_slot);
				$('.unit_id_' + target_id).addClass('hand_card fake_hand_slot_' + temp_hand_slot);
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).remove();
			},total_timeout + (1500 * battle_speed));
			delete battle_info.combat_units[target_id];

		}
		else
		{
			delete battle_info.combat_units[target_id];
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).addClass('combat_fade');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id).remove();
			},total_timeout + (500));
		}

		if(original_card_id != undefined && new_status != 'hand')
		{
			battle_info['deck_' + original_side][original_card_id]['status'] = 'deck';
			if(new_status == 'grave')
			{
				battle_info['deck_' + original_side][original_card_id]['status'] = 'grave';
				check_ability_procs('deck_' + original_side, 'moved_to_grave', original_card_id);
				var card_type = all_available_cards[battle_info['deck_' + original_side][original_card_id]['card_id']]['type'];
				check_ability_procs('deck_' + original_side, card_type + '_moved_to_grave', original_card_id);
			}
			/*if(new_status == 'hand')
			{
				draw_card(original_side, original_card_id);
			}*/
		}
		total_timeout += 500 * battle_speed;
		update_deck_counts();
	}
}

function set_status(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	var old_status = battle_info['deck_' + target_side][target_id]['status'] + '';
	if(old_status == 'hand')
	{
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot'] + 0;
		var temp_side = target_side + 0;
		var temp_hand_slot_id = battle_info['deck_' + target_side][target_id]['hand_slot_id'] + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side + '.hand_slot_id_' + temp_hand_slot_id).remove();
		},total_timeout + (500 * battle_speed));
		check_ability_procs(target_side, 'discarded', origin_id, undefined, undefined);
	}
	//console.log(old_status);
	if(old_status != 'hand')
	{
		if(effect['new_status'] == 'deck' || (effect['new_status'] == 'hand' && count_deck_cards(battle_info['deck_' + target_side]) > 9))
		{
			var temp_side = target_side + 0;
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).addClass('combat_zoom');
				$('.deck_counter_' + temp_side).addClass('green_text');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).removeClass('combat_zoom');
				$('.deck_counter_' + temp_side).removeClass('green_text');
			},total_timeout + (500 * battle_speed));
		}
		if(effect['new_status'] == 'grave')
		{

			var temp_side = target_side + 0;
			//console.log('.deck_counter_' + temp_side);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).addClass('combat_zoom');
				$('.deck_counter_' + temp_side).addClass('red_text');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.deck_counter_' + temp_side).removeClass('combat_zoom');
				$('.deck_counter_' + temp_side).removeClass('red_text');
			},total_timeout + (500 * battle_speed));
		}
	}
	if(effect['new_status'] != 'hand')
	{
		battle_info['deck_' + target_side][target_id]['status'] = effect['new_status'];
	}
	else
	{
		battle_info['deck_' + target_side][target_id]['status'] = 'deck';
		draw_card(target_side, target_id);
	}
	total_timeout += 500 * battle_speed;
	update_deck_counts();
	return true;
}

function remove_card_from_combat(target_id, effect, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	var old_status = battle_info['deck_' + target_side][target_id]['status'] + '';
	if(battle_info['deck_' + target_side][target_id]['status'] == 'hand')
	{
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot'] + 0;
		var temp_side = target_side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side).remove();
		},total_timeout);
		
	}
	//console.log(old_status);
	delete battle_info['deck_' + target_side][target_id];
	total_timeout += 500 * battle_speed;
	update_deck_counts();
}

function reduce_ready_time(target_id, effect, calculated_amount, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	if(battle_info['deck_' + target_side][target_id]['status'] == 'hand')
	{
		battle_info['deck_' + target_side][target_id]['time_left'] -= calculated_amount;
		if(battle_info['deck_' + target_side][target_id]['time_left'] < 0){battle_info['deck_' + target_side][target_id]['time_left'] = 0;}
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot_id'] + 0;
		var temp_time_left = battle_info['deck_' + target_side][target_id]['time_left'] + 0;
		var temp_side = target_side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side + ' .card_time').html(temp_time_left);
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).addClass('green_glow combat_zoom');
		},total_timeout);
		total_timeout += 500 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).removeClass('green_glow combat_zoom');
		},total_timeout + (500 * battle_speed));
	}
}

function increase_ready_time(target_id, effect, calculated_amount, origin_id){
	var current_unit = battle_info.combat_units[origin_id];
	var target_side = current_unit['side'];
	if((effect['side'] == 'ally' && current_unit['side'] == 2) || (effect['side'] == 'enemy' && current_unit['side'] == 1))
	{
		target_side = 2;
	}
	if((effect['side'] == 'ally' && current_unit['side'] == 1) || (effect['side'] == 'enemy' && current_unit['side'] == 2))
	{
		target_side = 1;
	}
	if(battle_info['deck_' + target_side][target_id]['status'] == 'hand')
	{
		battle_info['deck_' + target_side][target_id]['time_left'] += calculated_amount;
		if(battle_info['deck_' + target_side][target_id]['time_left'] < 0){battle_info['deck_' + target_side][target_id]['time_left'] = 0;}
		var temp_hand_slot = battle_info['deck_' + target_side][target_id]['hand_slot_id'] + 0;
		var temp_time_left = battle_info['deck_' + target_side][target_id]['time_left'] + 0;
		var temp_side = target_side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side + ' .card_time').html(temp_time_left);
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).addClass('red_glow combat_zoom');
		},total_timeout);
		total_timeout += 500 * battle_speed;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_id_' + temp_hand_slot + '.side_' + temp_side).removeClass('red_glow combat_zoom');
		},total_timeout + (500 * battle_speed));
	}
}



function receive_damage(target_id, origin_id, calculated_amount,subtypes){

	latest_result = 0;



	if(battle_info.combat_units[target_id] != undefined)
    {
		var target_unit = battle_info.combat_units[target_id];
		var origin_unit = battle_info.combat_units[origin_id];
		var temp_target_side = target_unit['side'] + 0;
		var temp_origin_side = undefined;
		if(origin_unit != undefined)
		{
			temp_origin_side = origin_unit['side'] + 0;
		}

		if(origin_unit != undefined)
		{
			eachoa(origin_unit['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], 'add_subtype_to_damage') == true)
				{
					subtypes = subtypes.concat(all_abilities[ability_key]['subtypes']);
				}
			});

			/*if(origin_unit['effects'] != undefined && origin_unit['effects']['blessed'] != undefined && origin_unit['effects']['blessed'] > 0 && (target_unit == undefined || target_unit['abilities']['hexed'] == undefined))
	    	{
	    	    calculated_amount += origin_unit['effects']['blessed'];
	    	    //origin_unit['effects']['blessed'] --;
	    	    update_passive_effects(origin_id);
	    	}*/
	    	/*if(target_unit['effects'] != undefined && target_unit['effects']['blessed'] != undefined && target_unit['effects']['blessed'] > 0 && origin_unit != undefined && origin_unit['abilities']['hexed'] != undefined)
	    	{
	    	    calculated_amount += origin_unit['abilities']['hexed'];
	    	}*/
		}

		amount_reduced = 0;

		if(calculated_amount > 0)
    	{
    		var armor_reduced = 0;
    		if(target_unit['armor'] > 0 && match_array_values(['ignores_armor'],subtypes) == false)
    		{
    			if(match_array_values(['breaks_armor'],subtypes) == false && false)
    			{
    				calculated_amount = 1;
    			}
    			var damage_percent = calculated_amount / target_unit['armor'];
    			/*if(match_array_values(['projectile'],subtypes) == true)
				{
					damage_percent = (calculated_amount / target_unit['armor']) / 2;
				}*/
    			if(damage_percent >= 1)
    			{
    				calculated_amount -= target_unit['armor'];
    				armor_reduced = target_unit['armor'];
    				target_unit['armor'] = 0;
    			}
    			if(damage_percent < 1)
    			{
    				/*if(damage_percent < 0.25)
    				{
    					damage_percent = 0.25;
    				}*/
    				if(round_by_percent(damage_percent) == 1 || true)
    				{
    					if(target_unit['armor'] > calculated_amount)
    					{
    						target_unit['armor'] -= calculated_amount;
    						armor_reduced = calculated_amount;
    					}
    					else
    					{
    						armor_reduced = target_unit['armor'];
    						target_unit['armor'] -= calculated_amount;
    					}
    				}
    				/*else
    				{
    					target_unit['armor'] -= 1;
    					armor_reduced = 1;
    				}*/
    				if(target_unit['armor'] < 0)
    				{
    					calculated_amount = target_unit['armor'] * -1;
    				}
    				else
    				{
    					calculated_amount = 0;
    				}
    				
    			}
    			target_unit['armor'] = 0;
    		}
    		if(armor_reduced > 0)
			{
				check_unit_hp(target_id);
				//create_projectile(target_id, target_id, 'just_damaged', undefined, undefined, projectile_side, armor_reduced, '#ccc', 2000);
				timeout_key ++;
				var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
	    		all_timeouts[timeout_key] = setTimeout(function(){
	    			var combat_text = parse_floating_text(armor_reduced, '#ccc', false);
	    			//$('.battle_container .unit_id_' + target_id).append(combat_text);
	    			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
	    		},total_timeout );
			}
    	}

		if(calculated_amount > 0)
    	{
			eachoa(target_unit['abilities'], function(ability_id, ability_level){
				if(match_array_values(all_abilities[ability_id]['proc'], 'max_incoming_damage') == true && (match_array_values(subtypes,all_abilities[ability_id]['subtypes']) == true || all_abilities[ability_id]['subtypes'] == undefined) && match_array_values(subtypes,all_abilities[ability_id]['negated_by']) == false && (all_abilities[ability_id]['origin_not_self'] == undefined || target_id != origin_id) && (all_abilities[ability_id]['has_origin_unit'] == undefined || (origin_unit != undefined && origin_unit['current_health'] > 0)) && (all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0))
	    		{
	    			if(all_abilities[ability_id]['reduce_chance'] == undefined || Math.random() * 100 <= calculate_effect({amount:all_abilities[ability_id]['reduce_chance']}, target_id, origin_id, ability_level))
		    		{
		    			var max_incoming_damage = calculate_effect({amount:all_abilities[ability_id]['amount']}, target_id, origin_id, ability_level);
		    			if(calculated_amount > max_incoming_damage)
		    			{
		    				amount_reduced = calculated_amount - max_incoming_damage;
		    				var temp_amount_reduced = amount_reduced + 0;
		    				calculated_amount = max_incoming_damage;
		    				if(calculated_amount >= 0)
		    				{
			    				timeout_key ++;
			    				var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
					    		all_timeouts[timeout_key] = setTimeout(function(){
					    			var combat_text = parse_floating_text(temp_amount_reduced, '#ccc', false);
					    			//$('.battle_container .unit_id_' + target_id).append(combat_text);
					    			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
					    		},total_timeout );
					    		process_ability(target_id, all_abilities[ability_id], ability_level, origin_id, undefined, 'reduce_incoming_damage');
				    			check_ability_delay(target_id, ability_id);
					    	}
		    			}
		    		}
	    		}
			});
		}
	    
	    if(calculated_amount > 0)
    	{	    
	    	if(target_unit['effects'] != undefined && target_unit['effects']['cursed'] != undefined)
	    	{
	    	    calculated_amount += target_unit['effects']['cursed'];
	    	    target_unit['effects']['cursed'] = 0;
	    	    //target_unit['effects']['cursed'] = Math.floor(target_unit['effects']['cursed'] / 2);
	    	    if(target_unit['effects']['cursed'] < 1)
	    	    {
	    	    	delete target_unit['effects']['cursed'];
	    	    }
	    	    //delete target_unit['effects']['cursed'];
	    	    update_passive_effects(target_id);
	    	}
	    }

    	/*if(calculated_amount > 0)
    	{
			if(target_unit['effects'] != undefined && target_unit['effects']['blessed'] != undefined && target_unit['effects']['blessed'] > 0 && (origin_unit == undefined || origin_unit['abilities']['hexed'] == undefined))
	    	{
	    		var temp_calculated_amount = calculated_amount + 0;
	    	    calculated_amount -= target_unit['effects']['blessed'];
	    	    target_unit['effects']['blessed'] -= temp_calculated_amount;
	    	    if(target_unit['effects']['blessed'] < 0){target_unit['effects']['blessed'] = 0;}
	    	    update_passive_effects(target_id);
	    	}
	    }*/
    
    	eachoa(target_unit['abilities'], function(ability_id, ability_level){
    		if(match_array_values(all_abilities[ability_id]['proc'], 'reduce_incoming_damage') == true && (match_array_values(subtypes,all_abilities[ability_id]['subtypes']) == true || all_abilities[ability_id]['subtypes'] == undefined) && match_array_values(subtypes,all_abilities[ability_id]['negated_by']) == false && (all_abilities[ability_id]['origin_not_self'] == undefined || target_id != origin_id) && (all_abilities[ability_id]['has_origin_unit'] == undefined || (origin_unit != undefined && origin_unit['current_health'] > 0)) && (all_abilities[ability_id]['cannot_proc_while_stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_id]['effects']['stunned'] == 0))
    		{
    			if(check_ability_can_fire(target_id, all_abilities[ability_id], ability_level, origin_id) == true)
    			{
	    			if(target_unit['ability_delays'][ability_id] == undefined || target_unit['ability_delays'][ability_id] < 1)
	    			{
	    				if(all_abilities[ability_id]['reduce_chance'] == undefined || Math.random() * 100 <= calculate_effect({amount:all_abilities[ability_id]['reduce_chance']}, target_id, origin_id, ability_level))
	    				{
	    					process_ability(target_id, all_abilities[ability_id], ability_level, origin_id, undefined, 'reduce_incoming_damage');
			    			amount_reduced = calculate_effect({amount:all_abilities[ability_id]['amount']}, target_id, origin_id, ability_level);
			    			check_ability_delay(target_id, ability_id);
			    			if(calculated_amount < amount_reduced){amount_reduced = calculated_amount};
			    			calculated_amount -= amount_reduced;
			    		}
		    			
		    		}
		    	}
    		}
    	});
    
    	if(calculated_amount > 0)
    	{
    		
    		var overkill = 0;
    		var current_total_health = target_unit['current_health'];
    		if(target_unit['temp_health'] != undefined)
    		{
    			current_total_health += target_unit['temp_health'];
    		}
    		if(calculated_amount > current_total_health && current_total_health > 0)
    		{
    			overkill = calculated_amount - current_total_health;
    		}
    		if(calculated_amount > current_total_health && target_unit['slot'] != 0)
    		{
    			calculated_amount = current_total_health;
    		}

    		//////////////////////// QUESTS

    		if(target_unit['side'] == 1)
    		{
    			if(target_unit['slot'] == 0)
    			{
    				check_quests('enemy_hero_damaged');
    			}
    			else
    			{
    				check_quests('enemy_unit_damaged');
    				check_quests('enemy_' + target_unit['type'] + '_damaged');
    			}
    			check_quests('dealt_damage', calculated_amount);
    		}

    		//////////////////////// RESOLVE

    		if(target_unit['temp_health'] != undefined && target_unit['temp_health'] > 0)
    		{
    			target_unit['temp_health'] -= calculated_amount;
    			if(target_unit['temp_health'] < 0)
    			{
    				target_unit['current_health'] += target_unit['temp_health'];
    				target_unit['temp_health'] = 0;
    			}
    		}
    		else
    		{
    			target_unit['current_health'] -= calculated_amount;
    		}
    		timeout_key ++;
    		passive_effect_count++;
			var temp_passive_effect_count = passive_effect_count + 0;
			var actual_damage = calculated_amount + 0;
			var projectile_side = target_unit['side'];
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
    			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('red_glow');
    			/*if(actual_damage > 0)
    			{
    				$('.battle_container .unit_id_' + target_id).append('<div class="just_damaged passive_effect_' + temp_passive_effect_count + '">' + actual_damage + '</div>');
    			}*/
    		},total_timeout);
    		if(actual_damage > 0)
    		{
    			//create_projectile(target_id, target_id, 'just_damaged', undefined, undefined, projectile_side, actual_damage, '#f00', 2000);
    			
    			timeout_key ++;
    			var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
	    		all_timeouts[timeout_key] = setTimeout(function(){
	    			var combat_text = parse_floating_text(actual_damage, '#f00', false);
	    			//$('.battle_container .unit_id_' + target_id).append(combat_text);
	    			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
	    		},total_timeout );
    		}
    		/*timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id + ' .passive_effect_' + temp_passive_effect_count + '').remove();
    		},total_timeout + 1500);*/
    		//total_timeout += 500 * battle_speed;
    		timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
    			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('red_glow');
    			
    		},total_timeout + 500);

    		latest_result = calculated_amount;

    		var temp_damage_dealt = calculated_amount + 0;

    		check_unit_hp(target_id);

    		latest_result = temp_damage_dealt;

    		if(battle_info.combat_units[origin_id] != undefined && (temp_damage_dealt > 0 /*|| armor_reduced > 0*/))
    		{
    			eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
    				if(match_array_values(all_abilities[ability_key]['proc'], 'dealt_damage') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'dealt_damage', false);
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}
    		if(battle_info.combat_units[origin_id] != undefined && (temp_damage_dealt > 0 /*|| armor_reduced > 0*/) && target_id < 3 && battle_info.combat_units[origin_id]['side'] != battle_info.combat_units[target_id]['side'])
    		{
    			eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
    				if(match_array_values(all_abilities[ability_key]['proc'], 'dealt_damage_to_hero') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					process_ability(origin_id, all_abilities[ability_key], ability_level, target_id, undefined, 'dealt_damage_to_hero', true);
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}
    		

    		if(battle_info.combat_units[target_id] != undefined && (temp_damage_dealt > 0 || armor_reduced > 0))
    		{
    			eachoa(target_unit['abilities'], function(ability_key, ability_level){
    				
    				if(match_array_values(all_abilities[ability_key]['proc'], 'receive_damage') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					if(target_unit['ability_delays'][ability_key] == undefined || target_unit['ability_delays'][ability_key] < 1)
    					{
	    					timeout_key ++;
	    					all_timeouts[timeout_key] = setTimeout(function(){
				    			$('.battle_container .unit_id_' + target_id).removeClass('attack');
				    		},total_timeout );
	    					var temp_effect_fired = process_ability(target_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'receive_damage');
	    					if(temp_effect_fired == true)
	    					{
	    						check_ability_delay(target_id, ability_key);
	    					}
	    				}
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}

    		if(battle_info.combat_units[origin_id] != undefined && overkill > 0)
    		{
    			eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
    				if(match_array_values(all_abilities[ability_key]['proc'], 'overkill') == true && (all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true) && (all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false))
    				{
    					process_ability(origin_id, all_abilities[ability_key], overkill, target_id, undefined, 'overkill', false);
    				}
    				latest_result = temp_damage_dealt;
    			});
    		}
    
    		/*if(overkill > 0 && match_array_values(['overkill_to_hero'], subtypes) == true)
    		{
    			process_ability(origin_id, all_abilities['overkill_to_hero'], overkill);
    		}*/

    		latest_result = temp_damage_dealt;
    
        
    		if(target_id == 1 || target_id == 2)
    		{
    			check_ability_procs(temp_target_side, 'hero_damaged', origin_id, subtypes);
    		}
    		if(origin_id == 1 || origin_id == 2)
    		{
    			check_ability_procs(temp_target_side, 'damaged_by_hero', target_id, subtypes, undefined, false);
    		}

    		check_ability_procs(temp_target_side, 'takes_damage', target_id, subtypes);
    		check_ability_procs(temp_origin_side, 'has_dealt_damage', origin_id, subtypes);

    		latest_result = temp_damage_dealt;
    		
    
    		return calculated_amount;
    	}
    	else
    	{
    		timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).addClass('combat_hit');
    		},total_timeout);
    		timeout_key ++;
    		all_timeouts[timeout_key] = setTimeout(function(){
    			$('.battle_container .unit_id_' + target_id).removeClass('combat_hit');
    		},total_timeout + 500);
    		//total_timeout += 250 * battle_speed;	
    
    		return 0;
    	}
    }
    else
    {
        return 0;
    }
}

function receive_healing(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	var origin_unit = battle_info.combat_units[origin_id];

	if(calculated_amount > (target_unit['health'] - target_unit['current_health']))
	{
		calculated_amount = (target_unit['health'] - target_unit['current_health'])
	}

	if(target_unit != undefined)
	{
		if(target_unit['effects'] != undefined && target_unit['effects']['blessed'] != undefined)
    	{
    	    //calculated_amount += target_unit['effects']['blessed'];
    	}
	}
	if(calculated_amount > 0)
	{
		if(target_unit['current_health'] < 0)
		{
			target_unit['current_health'] = 0;
		}
		target_unit['current_health'] += calculated_amount;
		if(target_unit['current_health'] > 0 && target_unit['dead'] != undefined)
		{
			delete target_unit['dead'];
		}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		},total_timeout + 500);
		var healing_received = calculated_amount + 0;
		//create_projectile(target_id, target_id, 'just_damaged', undefined, undefined, target_unit['side'], healing_received, '#5f5', 2000);
		timeout_key ++;
		var temp_fct_class = '.slot_' + battle_info['combat_units'][target_id]['slot'] + '.side_' + battle_info['combat_units'][target_id]['side'];
		all_timeouts[timeout_key] = setTimeout(function(){
			var combat_text = parse_floating_text(healing_received, 'rgba(55,255,55,0.9)', false);
			//$('.battle_container .unit_id_' + target_id).append(combat_text);
			$('.battle_container .slot_container' + temp_fct_class).append(combat_text);
		},total_timeout );

		//total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}

function set_hp(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];

	var effect_color = 'green';
	if(calculated_amount < target_unit['current_health']){effect_color = 'purple';}
	target_unit['current_health'] = calculated_amount;
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(effect_color + '_glow');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(effect_color + '_glow');
	},total_timeout+ 500);
	total_timeout += 500 * battle_speed;
	check_unit_hp(target_id);
	
}

function set_max_hp(target_id, origin_id, calculated_amount,subtypes){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var target_unit = battle_info.combat_units[target_id];

		var effect_color = 'green';
		if(calculated_amount < target_unit['health']){effect_color = 'purple';}
		target_unit['health'] = calculated_amount;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(effect_color + '_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(effect_color + '_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}

function enable_to_act(target_id, origin_id, calculated_amount,subtypes){
	battle_info.combat_units[target_id]['failed_to_act_this_phase'] = false;
    battle_info.combat_units[target_id]['acted_this_turn'] = 0;
}

function go_again(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	if(target_unit['acted_this_turn'] > 1){target_unit['acted_this_turn'] = 1;}
	target_unit['acted_this_turn'] -= calculated_amount;
	delete target_unit['failed_to_act_this_phase'];
	target_unit['failed_to_act_this_phase'] = false;
    //battle_info.combat_units[target_id]['used_ability'] = false;



    /*var current_unit = battle_info.combat_units[target_id];
    eachoa(current_unit['abilities'], function(ability_id, ability_level){
		var current_ability = all_abilities[ability_id];
		if(battle_info.combat_units[target_id] != undefined){
			if(current_ability['proc'] != undefined && current_ability['proc'] == 'basic')
			{
			    console.log('processing ' + ability_id + ' for ' + target_id);
			    total_timeout += 250 * battle_speed;
				process_ability(target_id, current_ability, ability_level, target_id);
			}
		}
	});*/
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		$('.battle_container .unit_id_' + target_id).removeClass('attack');
		$('.battle_container .unit_id_' + target_id).removeClass('combat_zoom');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
	},total_timeout+ 500 * battle_speed);
	total_timeout += 500 * battle_speed;
	//process_single_unit(target_id, undefined, false, 'basic');
	//total_timeout += 250 * battle_speed;

	if(target_unit['type'] == 'spell')
    {
    	eachoa(target_unit['abilities'], function(ability_id, ability_level){
			var current_ability = all_abilities[ability_id];
			if(battle_info.combat_units[target_id] != undefined){
				if(current_ability['proc'] != undefined && current_ability['proc'] == 'basic')
				{
				    //console.log('processing ' + ability_id + ' for ' + target_id);
				    //total_timeout += 250 * battle_speed;
					process_ability(target_id, current_ability, ability_level, target_id);
				}
			}
		});
    }
}

function increase_power(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0 && battle_info.combat_units[target_id]['power'] !== false)
	{
		var target_unit = battle_info.combat_units[target_id];

		target_unit['power'] += calculated_amount;
		if(target_unit['power'] < 0){target_unit['power'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_power(target_id);
		check_ability_procs(target_unit['side'], target_unit['type'] + '_gains_power', target_id);
		check_ability_procs(target_unit['side'], 'gains_power', target_id);	
	}
}

function grant_temp_power(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];
		if(target_unit['temp_power'] == undefined)
		{
			target_unit['temp_power'] = 0;
		}

		target_unit['temp_power'] += calculated_amount;
		//if(target_unit['temp_health'] < 0){target_unit['temp_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
		},total_timeout+ 500);
		//total_timeout += 500 * battle_speed;
		check_unit_power(target_id);
		check_ability_procs(target_unit['side'], target_unit['type'] + '_gains_power', target_id);
		check_ability_procs(target_unit['side'], 'gains_power', target_id);	
		total_timeout += 500 * battle_speed;
	}	
}

function grant_temp_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];
		if(target_unit['temp_health'] == undefined)
		{
			target_unit['temp_health'] = 0;
		}

		target_unit['temp_health'] += calculated_amount;
		//if(target_unit['temp_health'] < 0){target_unit['temp_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		},total_timeout+ 500);
		//total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
		check_unit_alive(target_id);
		total_timeout += 500 * battle_speed;
	}	
}

function increase_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];

		target_unit['health'] += calculated_amount;
		target_unit['current_health'] += calculated_amount;
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}	
}

function reduce_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];

		var reduced_amount = calculated_amount + 0;
		var reduced_current_amount = calculated_amount + 0;

		if(target_unit['health'] - 0 < calculated_amount)
		{
			reduced_amount = target_unit['health'] - 0;
		}

		if(target_unit['current_health'] - 0 < reduced_current_amount)
		{
			reduced_current_amount = target_unit['current_health'] - 0;
		}

		if(target_unit['health'] > 0)
		{
			target_unit['health'] -= reduced_amount;
		}
		if(target_unit['current_health'] > 0)
		{
			target_unit['current_health'] -= reduced_current_amount;
		}
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
	return 	reduced_current_amount;
}

function reduce_current_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];

		var reduced_amount = calculated_amount + 0;
		var reduced_current_amount = calculated_amount + 0;

		if(target_unit['current_health'] - 0 < reduced_current_amount)
		{
			reduced_current_amount = target_unit['current_health'] - 0;
		}

		if(target_unit['current_health'] > 0)
		{
			target_unit['current_health'] -= reduced_current_amount;
		}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
	return 	reduced_current_amount;
}

function set_health(target_id, origin_id, calculated_amount,subtypes){
	if(calculated_amount != 0)
	{
		var target_unit = battle_info.combat_units[target_id];
		var effect_color = 'green';
		if(calculated_amount < target_unit['health']){effect_color = 'purple';}

		target_unit['health'] = calculated_amount;
		target_unit['current_health'] = calculated_amount;
		
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}

		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(effect_color + '_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(effect_color + '_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
	return 	calculated_amount;
}


function reduce_max_health(target_id, origin_id, calculated_amount,subtypes){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var target_unit = battle_info.combat_units[target_id];

		target_unit['health'] -= calculated_amount;
		if(target_unit['health'] < 0){target_unit['health'] = 0;}
		if(target_unit['current_health'] < 0){target_unit['current_health'] = 0;}
		if(target_unit['current_health'] > target_unit['health']){target_unit['current_health'] = target_unit['health'];}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}


function reduce_armor(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	if(target_unit['armor'] > 0)
	{
		target_unit['armor'] -= calculated_amount;
		if(target_unit['armor'] < 0){target_unit['armor'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
	}
}

function increase_armor(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];

	target_unit['armor'] += calculated_amount;
	if(target_unit['armor'] < 0){target_unit['armor'] = 0;}
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
	},total_timeout);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
	},total_timeout+ 500);
	total_timeout += 500 * battle_speed;
	check_unit_hp(target_id);
	
}

function set_armor(target_id, origin_id, calculated_amount,subtypes){
	var have_set = 0;
	var target_unit = battle_info.combat_units[target_id];
	var original_armor = parseInt(target_unit['armor']);
	if(original_armor != calculated_amount)
	{
		target_unit['armor'] = calculated_amount;
		if(target_unit['armor'] < 0){target_unit['armor'] = 0;}
		timeout_key ++;
		var glow_color = 'red';
		if(original_armor < target_unit['armor'])
		{
			glow_color = 'green';
		}
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(glow_color + '_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(glow_color + '_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_hp(target_id);
		have_set = calculated_amount;
	}
	return have_set;
	
}


function reduce_power(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];

	if(target_unit['power'] !== false)
	{
		target_unit['power'] -= calculated_amount;
		if(target_unit['power'] < 0){target_unit['power'] = 0;}
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
		total_timeout += 500 * battle_speed;
		check_unit_power(target_id);
	}
}

function set_power(target_id, origin_id, calculated_amount,subtypes){
	var target_unit = battle_info.combat_units[target_id];
	var original_power = target_unit['power'] + 0;
	target_unit['power'] = calculated_amount;
	if(target_unit['power'] < 0){target_unit['power'] = 0;}
	timeout_key ++;
	if(original_power > target_unit['power'])
	{
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('purple_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('purple_glow');
		},total_timeout+ 500);
	}
	if(original_power < target_unit['power'])
	{
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('orange_glow');
		},total_timeout);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('orange_glow');
		},total_timeout+ 500);
	}
	total_timeout += 500 * battle_speed;
	check_unit_power(target_id);
	
}

function grant_temp_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect, at_front){
	if(battle_info.combat_units[target_id] != undefined)
	{
		var target_unit = battle_info.combat_units[target_id];
		if(target_unit['temp_skills'] == undefined){target_unit['temp_skills'] = {};}
		if(target_unit['temp_skills'][skill_id] == undefined)
		{
			target_unit['temp_skills'][skill_id] = calculated_amount;
		}
		else
		{
			target_unit['temp_skills'][skill_id] += calculated_amount;
		}
		grant_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect, at_front);
	}
}

function grant_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect, at_front){

	if(skill_id == 'random' && count_object(battle_info.combat_units[target_id]['abilities']) < 5)
	{
		skill_id = find_new_ability(battle_info.combat_units[target_id]['abilities'], battle_info.combat_units[target_id]);
	}
	if(skill_id == 'random' && count_object(battle_info.combat_units[target_id]['abilities']) >= 5)
	{
		skill_id = get_random_key_from_object(battle_info.combat_units[target_id]['abilities']);
	}

	var target_unit = battle_info.combat_units[target_id];

	if(target_unit['abilities'][skill_id] == undefined)
	{
		if(at_front != undefined && at_front == true)
		{
			var temp_abilities = {};
			temp_abilities[skill_id] = calculated_amount;
			eachoa(target_unit['abilities'], function(temp_ability_id, temp_ability_level){
				temp_abilities[temp_ability_id] = temp_ability_level + 0;
			});
			target_unit['abilities'] = true_copyobject(temp_abilities);
		}
		else
		{
			target_unit['abilities'][skill_id] = calculated_amount;
		}
	}
	else
	{
		if(typeof(target_unit['abilities'][skill_id]) == 'object')
		{
			target_unit['abilities'][skill_id]['level'] += calculated_amount;
			if(all_abilities[skill_id] != undefined && all_abilities[skill_id]['max_level'] != undefined && target_unit['abilities'][skill_id]['level'] > all_abilities[skill_id]['max_level'])
			{
				target_unit['abilities'][skill_id]['level'] = all_abilities[skill_id]['max_level'];
			}
		}
		else
		{
			target_unit['abilities'][skill_id] += calculated_amount;
			if(all_abilities[skill_id] != undefined && all_abilities[skill_id]['max_level'] != undefined && target_unit['abilities'][skill_id] > all_abilities[skill_id]['max_level'])
			{
				target_unit['abilities'][skill_id] = all_abilities[skill_id]['max_level'];
			}
		}
	}
	if(typeof(target_unit['abilities'][skill_id]) == 'object')
	{
		if(target_unit['abilities'][skill_id]['level'] < 1)
		{
			delete target_unit['abilities'][skill_id];
		}
	}
	else
	{
		if(target_unit['abilities'][skill_id] < 1)
		{
			delete target_unit['abilities'][skill_id];
		}
	}
	

	var timeout_increase = 0;

	if(visible_effect == undefined || visible_effect == true)
	{

		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').addClass('green_glow');
		},total_timeout);
		timeout_increase = 500;
	}
	timeout_key ++;
	var parsed_abilities = parse_abilities(target_id);
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass('green_glow');
		$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
	},total_timeout+ timeout_increase);
	update_passive_effects(target_id);

	total_timeout += timeout_increase * battle_speed;
	
	
}

function set_skill(target_id, origin_id, calculated_amount, skill_id, visible_effect){
	var target_unit = battle_info.combat_units[target_id];
    var glow_color = 'green';
    var original_level = target_unit['abilities'][skill_id] + 0;

    if((target_unit['abilities'][skill_id] == undefined && calculated_amount > 0) || target_unit['abilities'][skill_id] != undefined && target_unit['abilities'][skill_id] != calculated_amount)
    {
		/*if(target_unit['abilities'][skill_id] == undefined)
		{*/
			target_unit['abilities'][skill_id] = calculated_amount;
		/*}
		else
		{
			target_unit['abilities'][skill_id] += calculated_amount;
		}*/
		if(target_unit['abilities'][skill_id] <= 0)
		{
		    delete target_unit['abilities'][skill_id];
		    glow_color = 'red';
		    if(target_id == origin_id)
		    {
		        glow_color = '';
		    }
		}
		if(target_unit['abilities'][skill_id] < original_level)
		{
			glow_color = 'dark';
		}

		var timeout_increase = 0;
		
		if(visible_effect != undefined && visible_effect == true)
		{
			timeout_key ++;
			
			if(glow_color != '')
			{
		    	all_timeouts[timeout_key] = setTimeout(function(){
		    		$('.battle_container .unit_id_' + target_id + ' .card_image').addClass(glow_color + '_glow');
		    	},total_timeout);
		    	timeout_increase = 500;
			}
		}
		timeout_key ++;
		var parsed_abilities = parse_abilities(target_id);
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container .unit_id_' + target_id + ' .card_image').removeClass(glow_color + '_glow');
			$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
		},total_timeout+ timeout_increase);

		total_timeout += timeout_increase * battle_speed;
		
		
	}
	
}


function check_unit_hp(unit_id){
	var unit = battle_info.combat_units[unit_id];
	if(unit['current_health'] < 1)
	{
		unit['current_health'] = 0;
	}
	else
	{
		if(unit['dead'] != undefined)
		{
			delete unit['dead'];
		}
	}
	if(unit['current_health'] > unit['health'])
	{
		unit['current_health'] = unit['health'];
	}

	if(unit['armor'] < 1)
	{
		unit['armor'] = 0;
	}

	var current_armor = unit['armor'];
	var current_health = unit['current_health'];
	var current_temp_health = 0;
	if(unit['temp_health'] != undefined)
	{
		current_temp_health = unit['temp_health'];
	}
	var current_total_health = current_health + current_temp_health;
	if(current_total_health < 0){current_total_health = 0;}
	var current_max_health = unit['health'] + current_temp_health;
	if(current_max_health < 1){current_max_health = 1;}
	//var current_health_percent = (Math.floor(((unit['health'] - unit['current_health']) / unit['health']) * 62) + 9);
	var current_health_percent = 100 - (current_health / current_max_health * 100);
	var current_total_health_percent = 100 - (current_total_health / current_max_health * 100);
	var current_temp_health_percent = (current_temp_health / current_max_health * 100);
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + unit_id + ' .card_health .max_health').html(current_total_health);
		$('.battle_container .unit_id_' + unit_id + ' .card_health .current_health').html('');
		$('.battle_container .unit_id_' + unit_id + ' .card_health .current_health').css('height', current_total_health_percent + '%');
		$('.battle_container .unit_id_' + unit_id + ' .card_health .temp_health').css('height', current_temp_health_percent + '%');
		$('.battle_container .unit_id_' + unit_id + ' .card_health .temp_health').css('bottom', (100 - current_health_percent) + '%');
		$('.battle_container .unit_id_' + unit_id + ' .card_armor').html(current_armor);
		if(current_armor > 0)
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_armor').css('opacity', 1);
		}
		else
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_armor').css('opacity', 0);
		}
	},total_timeout);

}

function check_visible_skills(unit_id){
	var unit = battle_info.combat_units[unit_id];
	if(unit != undefined)
	{
		if(unit['abilities']['stealth'] != undefined && unit['abilities']['stealth'] > 0)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).addClass('stealth');
			},total_timeout + 10);
		}
		else
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).removeClass('stealth');
			},total_timeout + 10);
		}
		if(unit['abilities']['flying'] != undefined && unit['abilities']['flying'] > 0 && (unit['effects'] == undefined || unit['effects']['stunned'] == undefined || unit['effects']['stunned'] == 0))
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).addClass('flying');
			},total_timeout + 10);
		}

		if(unit['abilities']['flying'] == undefined || unit['abilities']['flying'] == 0 || (unit['effects'] != undefined && unit['effects']['stunned'] != undefined && unit['effects']['stunned'] > 0))
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).removeClass('flying');
			},total_timeout + 10);
		}
	}
}

function disappear_unit(unit_id, origin_id){
	if(battle_info.combat_units[unit_id] != undefined)
	{
		var unit = battle_info.combat_units[unit_id];
		if(unit['slot'] !== 0)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).addClass('combat_fade');
			},total_timeout);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .unit_id_' + unit_id).remove();
			},total_timeout + (500));
			if(unit['card_id'] != undefined && battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] == 'in_play')
			{
				battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] = 'grave';
				update_deck_counts();
				check_ability_procs(unit['origin_side'], 'moved_to_grave', unit['card_id']);
				var card_type = all_available_cards[battle_info['deck_' + unit['origin_side']][unit['card_id']]['card_id']]['type'];
				check_ability_procs(unit['origin_side'], card_type + '_moved_to_grave', unit['card_id']);
			}
			delete battle_info.combat_units[unit_id];
		}
	}
}

function destroy_unit(unit_id, origin_id){
	check_unit_alive(unit_id, origin_id, true);
}

function check_unit_alive(unit_id, origin_id, forced_death, subtypes){
	if(battle_info.combat_units[unit_id] != undefined)
	{
		var unit = battle_info.combat_units[unit_id];
		var temp_unit_type = unit['type'] + '';
		if(forced_death != undefined && forced_death == true)
		{
			unit['health'] = 0;
			unit['current_health'] = 0;
			unit['temp_health'] = 0;
		}
		if(unit['temp_health'] == undefined){unit['temp_health'] = 0;}
		if(unit['health'] !== false && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0) && unit['dead'] == undefined)
		{
			unit['dead'] = true;
			if(unit['side'] == 1)
			{
				if(origin_id != undefined && battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['side'] == 2)
				{
					check_quests('enemy_' + unit['type'] + '_killed');
					if(battle_info.combat_units[origin_id]['unit_id'] == 2)
					{
						check_quests('enemy_' + unit['type'] + '_killed_by_hero');
					}
					var possible_quest_string = 'enemy_' + unit['card_type'] + '_killed';
					if(all_achievement_goals[possible_quest_string] != undefined){
						check_quests(possible_quest_string);
					};
					eachoa(subtypes, function(subtype_key2, killed_by_subtype){
						var possible_quest_string = 'enemy_' + unit['card_type'] + '_killed_by_' + killed_by_subtype;
						if(all_achievement_goals[possible_quest_string] != undefined){
							check_quests(possible_quest_string);
						};
						if(unit_id == 1)
						{
							check_quests('enemy_hero_killed_by_' + killed_by_subtype);
						}
						else
						{
							var possible_quest_string = 'enemy_' + unit['type'] + '_killed_by_' + killed_by_subtype;
							if(all_achievement_goals[possible_quest_string] != undefined){
								check_quests(possible_quest_string);
							};
						}
					});
					eachoa(unit['subtypes'], function(subtype_key, quest_subtype){
						eachoa(subtypes, function(subtype_key2, killed_by_subtype){
							var possible_quest_string = 'enemy_' + quest_subtype + '_killed_by_' + killed_by_subtype;
							if(all_achievement_goals[possible_quest_string] != undefined){
								check_quests(possible_quest_string);
							};
							if(unit_id == 1)
							{
								var possible_quest_string = 'enemy_' + quest_subtype + '_hero_killed_by_' + killed_by_subtype;
								if(all_achievement_goals[possible_quest_string] != undefined){
									check_quests(possible_quest_string);
								};
							}
						});
						var possible_quest_string = 'enemy_' + quest_subtype + '_killed';
						if(all_achievement_goals[possible_quest_string] != undefined){
							check_quests(possible_quest_string);
						};
					});
				}
			}
			if(unit['side'] == 2)
			{
				if(origin_id != undefined && battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['side'] == 1)
				{
					check_quests('ally_' + unit['type'] + '_killed');
					if(battle_info.combat_units[origin_id]['unit_id'] == 2)
					{
						check_quests('ally_' + unit['type'] + '_killed_by_hero');
					}
					var possible_quest_string = 'ally_' + unit['card_type'] + '_killed';
					if(all_achievement_goals[possible_quest_string] != undefined){
						check_quests(possible_quest_string);
					};
					eachoa(subtypes, function(subtype_key2, killed_by_subtype){
						var possible_quest_string = 'ally_' + unit['card_type'] + '_killed_by_' + killed_by_subtype;
						if(all_achievement_goals[possible_quest_string] != undefined){
							check_quests(possible_quest_string);
						};
					});
					eachoa(unit['subtypes'], function(subtype_key, quest_subtype){
						eachoa(subtypes, function(subtype_key2, killed_by_subtype){
							var possible_quest_string = 'ally_' + quest_subtype + '_killed_by_' + killed_by_subtype;
							if(all_achievement_goals[possible_quest_string] != undefined){
								check_quests(possible_quest_string);
							};
						});
						var possible_quest_string = 'ally_' + quest_subtype + '_killed';
						if(all_achievement_goals[possible_quest_string] != undefined){
							check_quests(possible_quest_string);
						};
					});
				}
			}
			
			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				//if(battle_info.combat_units[origin_id] != undefined){
					eachoa(battle_info.combat_units[unit_id]['abilities'], function(ability_key, ability_level){
						if(match_array_values(all_abilities[ability_key]['proc'], ['pre_own_death']) == true)
						{
							process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'pre_own_death');
						}
					});
				//}
			}

			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				if(battle_info.combat_units[origin_id] != undefined){
					eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
						if(match_array_values(all_abilities[ability_key]['proc'], ['prekill','prekill_' + unit['type']]) == true)
						{
							process_ability(origin_id, all_abilities[ability_key], ability_level, unit_id, undefined, 'prekill');
						}
					});
				}
			}

			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				eachoa(battle_info.combat_units[unit_id]['abilities'], function(ability_key, ability_level){
					if(match_array_values(all_abilities[ability_key]['proc'], ['own_death']) == true)
					{
						process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'own_death');
					}
				});
			}

			if(battle_info.combat_units[unit_id] != undefined)
			{
				check_ability_procs(unit['side'], temp_unit_type + '_death', unit_id);
				check_ability_procs(unit['side'], 'death', unit_id);
			}

			/*if(battle_info.combat_units[unit_id] != undefined && unit['current_health'] === 0)
			{
				if(unit['slot'] !== 0 && unit['current_health'] === 0)
				{
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).removeClass('flying');
						$('.battle_container .unit_id_' + unit_id).removeClass('stealth');
						$('.battle_container .unit_id_' + unit_id).addClass('dead');
					},total_timeout);
					//total_timeout += 500 * battle_speed;
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).remove();
					},total_timeout + (2000));
				}
			}*/

			if(battle_info.combat_units[unit_id] != undefined)
			{
				if(battle_info.combat_units[origin_id] != undefined){
					eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, ability_level){
						if(match_array_values(all_abilities[ability_key]['proc'], ['kill','kill_' + temp_unit_type]) == true)
						{
							process_ability(origin_id, all_abilities[ability_key], ability_level, unit_id, undefined, 'kill');
						}
					});
				}
				if(battle_info.combat_units[origin_id] != undefined)
				{
					check_ability_procs(unit['side'], temp_unit_type + '_killed', origin_id);
				}
				
			}

			if(battle_info.combat_units[unit_id] != undefined && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
			{
				eachoa(battle_info.combat_units[unit_id]['abilities'], function(ability_key, ability_level){
					if(match_array_values(all_abilities[ability_key]['proc'], ['post_own_death']) == true)
					{
						process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'post_own_death');
					}
				});
			}
			
			
			if(battle_info.combat_units[unit_id] != undefined)
			{
				if(unit['slot'] !== 0 && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
				{
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).removeClass('flying');
						$('.battle_container .unit_id_' + unit_id).removeClass('stealth');
						$('.battle_container .unit_id_' + unit_id).addClass('dead');
					},total_timeout);
					//total_timeout += 500 * battle_speed;
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).remove();
					},total_timeout + (1000));
					if(unit['card_id'] != undefined && battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] == 'in_play')
					{
						battle_info['deck_' + unit['origin_side']][unit['card_id']]['status'] = 'grave';
						update_deck_counts();
						check_ability_procs(unit['origin_side'], 'moved_to_grave', unit['card_id']);
						var card_type = all_available_cards[battle_info['deck_' + unit['origin_side']][unit['card_id']]['card_id']]['type'];
						check_ability_procs(unit['origin_side'], card_type + '_moved_to_grave', unit['card_id']);
					}
					check_ability_procs(unit['side'], 'post_any_death', unit_id);
				}

				if(unit['slot'] !== 0 && (unit['current_health'] === 0 || unit['current_health'] + unit['temp_health'] <= 0))
				{

					delete battle_info.combat_units[unit_id];

				}
				else
				{
					if(unit['dead'] != undefined)
					{
						delete unit['dead'];
					}
				}
			}
			else
			{
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + unit_id).addClass('dead');
				},total_timeout + 2000);
				//total_timeout += 500 * battle_speed;
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + unit_id).remove();
				},total_timeout + (3000));
			}
			
		}
	}
}

function check_ability_procs(side, string, origin_id, subtypes, slot_id, check_death){
	if(all_ability_procs[string] != undefined || all_ability_procs['ally_' + string] != undefined || all_ability_procs['enemy_' + string] != undefined || all_ability_procs['any_' + string] != undefined)
	{
		if(slot_id == undefined){slot_id = -10;}
		/*for(temp_i = -10;temp_i<=5;temp_i++){*/
			eachoa(battle_info.combat_units, function(unit_id, unit){
				if(unit['slot'] == slot_id){
					check_single_unit_proc(unit_id, side, string, origin_id, subtypes, check_death);
				}
			});
		/*}*/
		if(slot_id < 5)
		{
			check_ability_procs(side, string, origin_id, subtypes, slot_id + 1, check_death);
		}
	}
	/*else
	{
		console.log(string + ' is no proc');
	}*/
}

function check_single_unit_proc(unit_id, side, string, origin_id, subtypes, check_death){
	if(battle_info.combat_units[unit_id] != undefined)
	{
		var unit = battle_info.combat_units[unit_id];
		eachoa(unit['abilities'], function(ability_key, ability_level){
			if(unit['ability_delays'][ability_key] == undefined || unit['ability_delays'][ability_key] < 1)
			{
				if(all_abilities[ability_key]['subtypes'] == undefined || match_array_values(all_abilities[ability_key]['subtypes'], subtypes) == true)
				{
					if(all_abilities[ability_key]['not_subtypes'] == undefined || match_array_values(all_abilities[ability_key]['not_subtypes'], subtypes) == false)
					{
						if(all_abilities[ability_key]['origin_not_self'] == undefined || origin_id != unit_id)
						{
							var temp_any_effect_fired = false;
							if(unit['side'] == side && match_array_values(all_abilities[ability_key]['proc'], 'ally_' + string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'ally_' + string, check_death);							
							}
							if(unit['side'] != side && match_array_values(all_abilities[ability_key]['proc'], 'enemy_' + string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'enemy_' + string, check_death);
							}
							if(match_array_values(all_abilities[ability_key]['proc'], 'any_' + string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, 'any_' + string, check_death);
							}
							if(match_array_values(all_abilities[ability_key]['proc'], string) == true)
							{
								temp_any_effect_fired = process_ability(unit_id, all_abilities[ability_key], ability_level, origin_id, undefined, string, check_death);
							}
							if(temp_any_effect_fired == true && battle_info.combat_units[unit_id] != undefined)
							{
								check_ability_delay(unit_id, ability_key);
							}
						}
					}
				}
			}
		});
	}
}

function check_unit_power(unit_id){
	var unit = battle_info.combat_units[unit_id];
	if(unit['power'] < 1 && unit['power'] !== false)
	{
		unit['power'] = 0;
	}

	var power = unit['power'];
	if(power !== false && unit['temp_power'] != undefined)
	{
		power += unit['temp_power'];
		if(power < 0){power = 0;}
	}
	timeout_key ++;
	all_timeouts[timeout_key] = setTimeout(function(){
		$('.battle_container .unit_id_' + unit_id + ' .card_power').html(power);
	
		if(power === false)
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_power').addClass('hidden');
		}
		else
		{
			$('.battle_container .unit_id_' + unit_id + ' .card_power').removeClass('hidden');
		}
	},total_timeout);
}

function calculate_effect(effect, target_id, origin_id, level){

	if(effect == undefined){return undefined;}
	var secondary_level = 1;
	if(typeof(level) == 'object'){
		secondary_level = level['level_2']
		var level = level['level'];
	}
	if(typeof(effect) == 'string')
	{
		var calculated_amount = effect;
	}
	else
	{
		var calculated_amount = effect['amount'];
	}

	if(calculated_amount == 'amount_reduced')
	{
		calculated_amount = amount_reduced;
	}

	if(battle_info.combat_units[origin_id] != undefined)
	{
		if(calculated_amount == 'origin_cost')
		{
			calculated_amount = battle_info.combat_units[origin_id]['time'];
		}

		if(calculated_amount == 'origin_power')
		{
			calculated_amount = battle_info.combat_units[origin_id]['power'];
			if(calculated_amount !== false && battle_info.combat_units[origin_id]['temp_power'] != undefined)
			{
				calculated_amount += battle_info.combat_units[origin_id]['temp_power'];
				if(calculated_amount < 0)
				{
					calculated_amount = 0;
				}
			}
		}

		if(calculated_amount == 'origin_armor')
		{
			calculated_amount = battle_info.combat_units[origin_id]['armor'];
		}

		if(calculated_amount == 'origin_max_health')
		{
			//console.log(battle_info.combat_units[origin_id]);
			calculated_amount = battle_info.combat_units[origin_id]['health'];
		}

		
		if(calculated_amount == 'ally_hand_card_count')
		{
			calculated_amount = count_hand_cards(battle_info['deck_' + battle_info.combat_units[origin_id]['side']]);
		}

		if(calculated_amount == 'enemy_hand_card_count')
		{
			if(battle_info.combat_units[origin_id]['side'] == 1)
			{
				calculated_amount = count_hand_cards(battle_info['deck_2']);
			}
			else
			{
				calculated_amount = count_hand_cards(battle_info['deck_1']);
			}
		}

		if(calculated_amount == 'enemy_unit_count')
		{
			if(battle_info.combat_units[origin_id]['side'] == 1)
			{
				calculated_amount = count_ally_units(2);
			}
			else
			{
				calculated_amount = count_ally_units(1);
			}
		}

		if(calculated_amount == 'ally_deck_card_count')
		{
			calculated_amount = count_deck_cards(battle_info['deck_' + battle_info.combat_units[origin_id]['side']]);
		}

		if(calculated_amount == 'ally_grave_creature_card_count')
		{
			calculated_amount = count_grave_cards(battle_info['deck_' + battle_info.combat_units[origin_id]['side']], 'creature');
		}

		if(calculated_amount == 'ally_burn_count')
		{
			var temp_amount = 0;
			eachoa(battle_info['combat_units'], function(temp_unit_id, temp_unit_info){
				if(temp_unit_info['side'] == battle_info.combat_units[origin_id]['side'] && temp_unit_info['effects'] != undefined && temp_unit_info['effects']['burning'] != undefined && temp_unit_info['effects']['burning'] > 0)
				{
					temp_amount += temp_unit_info['effects']['burning'];
				}
			});
			calculated_amount = temp_amount;
		}

		if(calculated_amount == 'origin_energy')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['energy'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['energy'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}

		if(calculated_amount == 'origin_poison')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['poisoned'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['poisoned'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}

		if(calculated_amount == 'origin_burn')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['burning'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['burning'];
			}
			else
			{
				calculated_amount = 0;
			}
		}

		if(calculated_amount == 'origin_doom')
		{
			if(battle_info.combat_units[origin_id]['effects'] != undefined && battle_info.combat_units[origin_id]['effects']['doom'] != undefined)
			{
				calculated_amount = battle_info.combat_units[origin_id]['effects']['doom'];
			}
			else
			{
				calculated_amount = 0;
			}
		}

		if(calculated_amount == 'times_played')
		{
			calculated_amount = 0;
			//console.log(battle_info.combat_units[origin_id]);
			if(battle_info.combat_units[origin_id]['card_id'] != undefined && battle_info.combat_units[origin_id]['origin_side'] != undefined)
			{
				if(battle_info['deck_' + battle_info.combat_units[origin_id]['origin_side']][battle_info.combat_units[origin_id]['card_id']]['played'] != undefined)
				{
					calculated_amount = battle_info['deck_' + battle_info.combat_units[origin_id]['origin_side']][battle_info.combat_units[origin_id]['card_id']]['played'];
				}
			}
			//console.log(calculated_amount);
		}
	}

	if(battle_info.combat_units[target_id] != undefined)
	{
		if(calculated_amount == 'target_cost')
		{
			calculated_amount = battle_info.combat_units[target_id]['time'];
		}
		if(calculated_amount == 'target_power')
		{
			calculated_amount = battle_info.combat_units[target_id]['power'];
			if(calculated_amount !== false && battle_info.combat_units[target_id]['temp_power'] != undefined)
			{
				calculated_amount += battle_info.combat_units[target_id]['temp_power'];
				if(calculated_amount < 0)
				{
					calculated_amount = 0;
				}
			}
		}
		if(calculated_amount == 'target_health')
		{
			var current_total_hp = battle_info.combat_units[target_id]['current_health'];
			if(battle_info.combat_units[target_id]['temp_health'] != undefined)
			{
				current_total_hp += parseInt(battle_info.combat_units[target_id]['temp_health']);
			}
			calculated_amount = current_total_hp;
		}
		if(calculated_amount == 'target_max_health')
		{
			var current_max_hp = battle_info.combat_units[target_id]['health'];
			calculated_amount = current_max_hp;
		}
		if(calculated_amount == 'target_energy')
		{
			if(battle_info.combat_units[target_id]['effects'] != undefined && battle_info.combat_units[target_id]['effects']['energy'] != undefined)
			{
				calculated_amount = battle_info.combat_units[target_id]['effects']['energy'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}
		if(calculated_amount == 'target_slot')
		{
			calculated_amount = battle_info.combat_units[target_id]['slot'];
		}
		if(calculated_amount == 'ally_units_heroes_artifacts')
		{
			calculated_amount = count_ally_units(battle_info.combat_units[target_id]['side']) + count_ally_artifacts(battle_info.combat_units[target_id]['side']) + 1;
		}

		if(calculated_amount == 'target_ally_units')
		{
			calculated_amount = count_ally_units(battle_info.combat_units[target_id]['side']);
		}

		if(calculated_amount == 'adjacent_structure_count')
		{
			calculated_amount = count_adjacent(battle_info.combat_units[target_id]['slot'], battle_info.combat_units[target_id]['side'], 'structure');
		}

		if(calculated_amount == 'adjacent_creature_count')
		{
			calculated_amount = count_adjacent(battle_info.combat_units[target_id]['slot'], battle_info.combat_units[target_id]['side'], 'creature');
		}

		if(calculated_amount == 'adjacent_count')
		{
			calculated_amount = count_adjacent(battle_info.combat_units[target_id]['slot'], battle_info.combat_units[target_id]['side']);
		}

		if(calculated_amount == 'target_burn')
		{
			if(battle_info.combat_units[target_id]['effects'] != undefined && battle_info.combat_units[target_id]['effects']['burning'] != undefined)
			{
				calculated_amount = battle_info.combat_units[target_id]['effects']['burning'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}

		if(calculated_amount == 'target_poison')
		{
			if(battle_info.combat_units[target_id]['effects'] != undefined && battle_info.combat_units[target_id]['effects']['poisoned'] != undefined)
			{
				calculated_amount = battle_info.combat_units[target_id]['effects']['poisoned'];
			}
			else
			{
				calculated_amount = 0;
			}
			
		}
	}

	if(calculated_amount == 'units_in_play')
	{
		calculated_amount = count_ally_units(1) + count_ally_units(2);
	}
	
	if(calculated_amount == 'ability_level')
	{
		calculated_amount = level;
	}

	if(calculated_amount == 'ability_level_2')
	{
		calculated_amount = secondary_level;
	}

	if(calculated_amount == 'latest_result')
	{
		calculated_amount = latest_result;
	}

	// *****************************************************************************

	if(effect['amount_factor'] != undefined)
	{
		if(effect['amount_factor'] == 'ability_level')
		{
			calculated_amount  = /*round_by_percent*/(calculated_amount * level);
		}
		else
		{
			calculated_amount  = /*round_by_percent*/(calculated_amount * effect['amount_factor']);
		}
		
	}

	if(effect['amount_factors'] != undefined)
	{
		eachoa(effect['amount_factors'], function(amount_factor_key, amount_factor_amount){
			if(amount_factor_amount == 'ability_level')
			{
				calculated_amount  = /*round_by_percent*/(calculated_amount * level);
			}
			else
			{
				calculated_amount  = /*round_by_percent*/(calculated_amount * amount_factor_amount);
			}
		});
	}

	if(effect['amount_adjustment'] != undefined)
	{
		calculated_amount += calculate_effect({amount:effect['amount_adjustment']}, target_id, origin_id, level);
	}

	if(effect['crit_chance'] != undefined && effect['crit_amount_factor'] != undefined && Math.random() * 100 <= effect['crit_chance'])
	{
		calculated_amount  = /*round_by_percent*/(calculated_amount * effect['crit_amount_factor']);
	}

	if(effect['crit_on_themes'] != undefined && effect['crit_amount_factor'] != undefined && target_id != undefined && battle_info.combat_units[target_id] != undefined && match_array_values(battle_info.combat_units[target_id]['theme'], effect['crit_on_themes']))
	{
		calculated_amount  = /*round_by_percent*/(calculated_amount * effect['crit_amount_factor']);
	}

	if(effect['crit_on_has_skills'] != undefined && effect['crit_amount_factor'] != undefined && target_id != undefined && battle_info.combat_units[target_id] != undefined)
	{
		eachoa(effect['crit_on_has_skills'], function(crit_on_key, crit_on_skill){
			if(battle_info.combat_units[target_id]['abilities'] != undefined && battle_info.combat_units[target_id]['abilities'][crit_on_skill] != undefined)
			{
				calculated_amount  = /*round_by_percent*/(calculated_amount * effect['crit_amount_factor']);
			}
		})
	}

	if(calculated_amount > 0 && battle_info.combat_units[origin_id] != undefined && effect['scales'] != undefined && effect['scales'] == true)
	{
		if(battle_info.combat_units[origin_id]['origin_side'] == 1)
		{
			var effective_power_factor = get_effective_power_factor();
			if(calculated_amount * effective_power_factor >= 1)
			{
				calculated_amount = round_by_percent(calculated_amount * effective_power_factor);
			}
			else
			{
				calculated_amount = Math.ceil(calculated_amount * effective_power_factor);
			}
		}
		if(battle_info.combat_units[origin_id]['origin_side'] == 2)
		{
			var total_ability_factor = get_upgrade_factor('ability_effect',effect['subtypes']);
			calculated_amount = (calculated_amount * total_ability_factor);
		}
	}
	if(battle_info.combat_units[origin_id] != undefined && battle_info.combat_units[origin_id]['origin_side'] == 2)
	{
		var total_ability_factor = get_upgrade_factor(effect['type'],effect['subtypes']);
		/*if(effect['type'] != undefined)
		{
			console.log(effect['type'] + ': ' + total_ability_factor);
		}*/
		if(total_ability_factor != 1)
		{
			calculated_amount = round_by_percent(calculated_amount * total_ability_factor);
		}
	}

	if(typeof(calculated_amount) == 'number')
	{
		if(effect['amount_rounding'] != undefined)
		{
			switch(effect['amount_rounding']){
				case 'down':
					calculated_amount = Math.floor(calculated_amount);
					break;
				case 'random':
					calculated_amount = round_by_percent(calculated_amount);
					break;
				default:
					calculated_amount = Math.ceil(calculated_amount);
			}
		}
		else
		{
			calculated_amount = Math.ceil(calculated_amount);
		}
		if(effect['max_amount'] != undefined)
		{
			if(effect['max_amount'] == 'ability_level' && level != undefined && calculated_amount > level)
			{
				calculated_amount = level;
			}
			if(typeof(effect['max_amount']) == 'number' && calculated_amount > effect['max_amount'])
			{
				calculated_amount = effect['max_amount'];
			}
		}
	}

	return calculated_amount;
}

function count_adjacent(slot, side, type){
	var adjacent_count = 0;
	eachoa(battle_info['combat_units'], function(unit_id, unit){
		if(unit['side'] == side && (unit['slot'] == slot + 1 || unit['slot'] == slot - 1) && (type == undefined || unit['type'] == type))
		{
			adjacent_count++;
		}
	});
	return adjacent_count;
}

function find_targets(unit_id, target_peramaters, origin_id, level, current_ability, added_targets){

	if(all_targets == undefined)
	{
		var all_targets = {};
	}
	var current_unit = battle_info.combat_units[unit_id];	

	if(target_peramaters['use_latest_slot'] != undefined && target_peramaters['use_latest_slot'] == true)
	{
		var current_unit = copyobject(battle_info.combat_units[unit_id]);
		current_unit['slot'] = latest_slot;
		latest_slot = -10;
	}

	if(target_peramaters['target'] == 'unit' || target_peramaters['target'] == 'unit_or_hero' || target_peramaters['target'] == 'hero' || target_peramaters['target'] == 'artifact' || target_peramaters['target'] == 'any')
	{
		// GET ALL TARGETS
		var target_side = 'any';
		var starting_slot = 1;
		var ending_slot = 5;
		if(target_peramaters['target'] == 'unit_or_hero' || target_peramaters['target'] == 'hero')
		{
			starting_slot = 0;
		}
		if(target_peramaters['target'] == 'hero')
		{
			ending_slot = 0;
		}
		if(target_peramaters['target'] == 'artifact')
		{
			starting_slot = -5;
			ending_slot = -1;
		}
		if(target_peramaters['target'] == 'any')
		{
			//console.log('any');
			starting_slot = -10;
			ending_slot = 5;
		}
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 2) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 1))
		{
			target_side = 2;
		}
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 1) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 2))
		{
			target_side = 1;
		}

		var all_targets_slot = get_highest_key_in_object(all_targets) + 1;
		if(target_peramaters['from_right'] == undefined || target_peramaters['from_right'] == false)
		{
			for(var slot = starting_slot;slot <= ending_slot;slot++)
			{
				
				eachoa(battle_info.combat_units, function(unit_id, unit_info){
					if((unit_info['side'] == target_side || target_side == 'any') && unit_info['slot'] == slot)
					{
						all_targets[all_targets_slot] = unit_info['unit_id'];
						all_targets_slot++;
					}
				});
			}
		}
		else
		{
			for(var slot = ending_slot;slot >= starting_slot;slot--)
			{
				
				eachoa(battle_info.combat_units, function(unit_id, unit_info){
					if((unit_info['side'] == target_side || target_side == 'any') && unit_info['slot'] == slot)
					{
						all_targets[all_targets_slot] = unit_info['unit_id'];
						all_targets_slot++;
					}
				});
			}
		}

		if(target_peramaters['origin_unit'] != undefined && target_peramaters['origin_unit'] == true)
		{
			var found_origin = false;
			eachoa(all_targets, function(target_id, unit_id){
				if(unit_id == origin_id)
				{
					all_targets = {0:origin_id};
					found_origin = true;
				}
			});
			if(found_origin == false)
			{
				all_targets = {};
			}
		}

		if(target_peramaters['not_self'] != undefined && target_peramaters['not_self'] == true)
		{
			all_targets = filter_targets_by_not_self(all_targets, unit_id);
		}
		
		all_targets = filter_targets_by_immunities(all_targets, unit_id, current_ability, origin_id);

		if(target_peramaters['specific_slots'] != undefined)
		{
			eachoa(all_targets, function(all_slots_id, temp_unit_id){
				if(match_array_values(battle_info['combat_units'][temp_unit_id]['slot'], target_peramaters['specific_slots']) == false)
				{
					delete all_targets[all_slots_id];
				}
			});
		}
		
		if(target_peramaters['has_origin_card'] != undefined)
		{
			all_targets = filter_targets_by_has_origin_card(all_targets, target_peramaters['has_origin_card']);
		}

		if(target_peramaters['not_types'] != undefined)
		{
			all_targets = filter_targets_by_not_types(all_targets, target_peramaters['not_types']);
		}

		if(target_peramaters['subtypes'] != undefined)
		{
			all_targets = filter_targets_by_subtypes(all_targets, target_peramaters['subtypes']);
		}

		if(target_peramaters['not_subtypes'] != undefined)
		{
			all_targets = filter_targets_by_not_subtypes(all_targets, target_peramaters['not_subtypes']);
		}

		if(target_peramaters['card_ids'] != undefined)
		{
			all_targets = filter_targets_by_card_ids(all_targets, target_peramaters['card_ids'], false);
		}

		if(target_peramaters['not_card_ids'] != undefined)
		{
			all_targets = filter_targets_by_card_ids(all_targets, target_peramaters['not_card_ids'], true);
		}

		if(target_peramaters['has_ability'] != undefined)
		{
			all_targets = filter_targets_by_has_ability(all_targets, target_peramaters['has_ability']);
		}

		if(target_peramaters['has_theme'] != undefined)
		{
			all_targets = filter_targets_by_has_theme(all_targets, target_peramaters['has_theme']);
		}
		
		
		if(target_peramaters['does_not_have_ability'] != undefined)
		{
			all_targets = filter_targets_by_does_not_have_ability(all_targets, target_peramaters['does_not_have_ability']);
		}

		if(target_peramaters['max_abilities'] != undefined)
		{
			all_targets = filter_targets_by_max_abilities(all_targets, target_peramaters['max_abilities'], level);
		}


		if(target_peramaters['is_transformed'] != undefined && target_peramaters['is_transformed'] == true)
		{
			all_targets = filter_targets_by_is_transformed(all_targets);
		}

		if(target_peramaters['damaged'] != undefined && target_peramaters['damaged'] == true)
		{
			all_targets = filter_targets_by_damaged(all_targets);
		}

		if(target_peramaters['damaged'] != undefined && target_peramaters['damaged'] == false)
		{
			all_targets = filter_targets_by_not_damaged(all_targets);
		}

		if(target_peramaters['has_negative_effect'] != undefined && target_peramaters['has_negative_effect'] == true)
		{
			all_targets = filter_targets_by_has_negative_effect(all_targets);
		}

		if(target_peramaters['has_effect'] != undefined)
		{
			all_targets = filter_targets_by_has_effect(all_targets, target_peramaters['has_effect'], level);
		}

		if(target_peramaters['not_stunned'] != undefined)
		{
			all_targets = filter_targets_by_not_stunned(all_targets, target_peramaters['not_stunned']);
		}

		if(target_peramaters['min_cost'] != undefined && target_peramaters['min_cost'] != 0)
		{
			all_targets = filter_targets_by_min_cost(all_targets, target_peramaters['min_cost'], origin_id, level);
		}

		if(target_peramaters['max_cost'] != undefined && target_peramaters['max_cost'] != 0)
		{
			all_targets = filter_targets_by_max_cost(all_targets, target_peramaters['max_cost'], origin_id, level);
		}

		if(target_peramaters['min_hp'] != undefined)
		{
			all_targets = filter_targets_by_min_hp(all_targets, target_peramaters['min_hp']);
		}

		if(target_peramaters['min_total_hp'] != undefined)
		{
			all_targets = filter_targets_by_min_total_hp(all_targets, target_peramaters['min_total_hp']);
		}

		if(target_peramaters['max_hp'] != undefined)
		{
			all_targets = filter_targets_by_max_hp(all_targets, target_peramaters['max_hp'], origin_id, level);
		}

		if(target_peramaters['min_armor'] != undefined && target_peramaters['min_armor'] > 0)
		{
			all_targets = filter_targets_by_min_armor(all_targets, target_peramaters['min_armor']);
		}

		if(target_peramaters['max_armor'] != undefined)
		{
			all_targets = filter_targets_by_max_armor(all_targets, calculate_effect({amount:target_peramaters['max_armor']}, unit_id, origin_id, level));
		}

		if(target_peramaters['min_power'] != undefined && target_peramaters['min_power'] >= 0)
		{
			all_targets = filter_targets_by_min_power(all_targets, target_peramaters['min_power']);
		}

		if(target_peramaters['max_power'] != undefined)
		{
			all_targets = filter_targets_by_max_power(all_targets, calculate_effect({amount:target_peramaters['max_power']}, unit_id, origin_id, level));
		}

		if(target_peramaters['has_opposing'] != undefined && target_peramaters['has_opposing'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets);
		}

		if(target_peramaters['has_opposing'] != undefined && target_peramaters['has_opposing'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets);
		}

		if(target_peramaters['has_opposing_creature'] != undefined && target_peramaters['has_opposing_creature'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets, 'creature');
		}

		if(target_peramaters['has_opposing_creature'] != undefined && target_peramaters['has_opposing_creature'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets, 'creature');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets, 'structure');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets, 'structure');
		}

		if(target_peramaters['has_adjacent_creature'] != undefined && target_peramaters['has_adjacent_creature'] == true)
		{
			all_targets = filter_targets_by_has_adjacent(all_targets, 'creature');
		}

		if(target_peramaters['has_adjacent_creature'] != undefined && target_peramaters['has_adjacent_creature'] == false)
		{
			all_targets = filter_targets_by_has_no_adjacent(all_targets, 'creature');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == false)
		{
			all_targets = filter_targets_by_has_no_opposing(all_targets, 'structure');
		}

		if(target_peramaters['has_opposing_structure'] != undefined && target_peramaters['has_opposing_structure'] == true)
		{
			all_targets = filter_targets_by_has_opposing(all_targets, 'structure');
		}

		if(target_peramaters['slot_free'] != undefined && target_peramaters['slot_free'] == true)
		{
			all_targets = filter_targets_by_slot_free(all_targets);
		}

		
		

		if(target_peramaters['position'] != undefined)
		{
			all_targets = filter_targets_by_position(all_targets, unit_id, target_peramaters['position'], current_unit['slot']);
		}

		if(target_peramaters['lowest_power'] != undefined && target_peramaters['lowest_power'] == true)
		{
			all_targets = filter_targets_by_lowest_power(all_targets);
		}

		if(target_peramaters['highest_power'] != undefined && target_peramaters['highest_power'] == true)
		{
			all_targets = filter_targets_by_highest_power(all_targets);
		}

		if(target_peramaters['lowest_hp'] != undefined && target_peramaters['lowest_hp'] == true)
		{
			all_targets = filter_targets_by_lowest_hp(all_targets);
		}

		if(target_peramaters['highest_hp'] != undefined && target_peramaters['highest_hp'] == true)
		{
			all_targets = filter_targets_by_highest_hp(all_targets);
		}

		if(target_peramaters['highest_max_hp'] != undefined && target_peramaters['highest_max_hp'] == true)
		{
			all_targets = filter_targets_by_highest_max_hp(all_targets);
		}

		if(target_peramaters['highest_armor'] != undefined && target_peramaters['highest_armor'] == true)
		{
			all_targets = filter_targets_by_highest_armor(all_targets);
		}

		if(target_peramaters['highest_cost'] != undefined && target_peramaters['highest_cost'] == true)
		{
			all_targets = filter_targets_by_highest_cost(all_targets);
		}

		if(target_peramaters['lowest_cost'] != undefined && target_peramaters['lowest_cost'] == true)
		{
			all_targets = filter_targets_by_lowest_cost(all_targets);
		}

		if(match_array_values(current_ability['proc'], ['redirect']) == false)
		{
			all_targets = filter_targets_by_redirect(all_targets, current_ability, origin_id);
		}
	}

	if(target_peramaters['target'] == 'card')
	{
		var target_side = current_unit['side'];
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 2) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 1))
		{
			target_side = 2;
		}
		if((target_peramaters['side'] == 'ally' && current_unit['side'] == 1) || (target_peramaters['side'] == 'enemy' && current_unit['side'] == 2))
		{
			target_side = 1;
		}
		var all_targets_slot = 0;
		if(target_peramaters['status'] != 'hand')
		{
			eachoa(battle_info['deck_' + target_side], function(card_id, card_info){
				if((card_info['status'] == target_peramaters['status'] || target_peramaters['status'] == 'any') && (target_peramaters['status'] != 'hand' || card_info['time_left'] > 0 || target_peramaters['can_target_zero'] != undefined))
				{
					all_targets[all_targets_slot] = card_id;
					all_targets_slot++;
				}
			});
		}
		else
		{
			for (var hand_slot = 1; hand_slot <= 10; hand_slot++) {
				eachoa(battle_info['deck_' + target_side], function(card_id, card_info){
					if(card_info['hand_slot'] == hand_slot && (card_info['status'] == target_peramaters['status'] || target_peramaters['status'] == 'any') && (target_peramaters['status'] != 'hand' || card_info['time_left'] > 0 || target_peramaters['can_target_zero'] != undefined))
					{
						all_targets[all_targets_slot] = card_id;
						all_targets_slot++;
					}
				});
			};
		}

		if(target_peramaters['origin_unit'] != undefined && target_peramaters['origin_unit'] == true)
		{
			var found_origin = false;
			eachoa(all_targets, function(target_id, unit_id){
				if(unit_id == origin_id)
				{
					all_targets = {0:origin_id};
					found_origin = true;
				}
			});
			if(found_origin == false)
			{
				all_targets = {};
			}
		}

		if(target_peramaters['max_abilities'] != undefined)
		{
			all_targets = filter_target_cards_by_max_abilities(all_targets, target_peramaters['max_abilities'], level, target_side);
		}

		if(target_peramaters['types'] != undefined)
		{
			filter_targets_by_card_type(all_targets, target_peramaters['types'], target_side);
		}

		if(target_peramaters['highest_time_left'] != undefined && target_peramaters['highest_time_left'] == true)
		{
			all_targets = filter_targets_by_highest_time_left(all_targets, target_side);
		}

		if(target_peramaters['lowest_time_left'] != undefined && target_peramaters['lowest_time_left'] == true)
		{
			all_targets = filter_targets_by_lowest_time_left(all_targets, target_side);
		}

		if(target_peramaters['lowest_cost'] != undefined && target_peramaters['lowest_cost'] == true)
		{
			all_targets = filter_targets_by_lowest_cost_card(all_targets, target_side);
		}
		
	}

	if(target_peramaters['add_targets'] != undefined && target_peramaters['add_targets'] == true && added_targets != undefined && count_object(added_targets) > 0)
	{
		eachoa(added_targets, function(added_id, added_target){
			all_targets[get_highest_key_in_object(all_targets)+1] = added_target;
		});
	}

	var target_amount = calculate_effect({amount:target_peramaters['target_amount']}, undefined, unit_id, level);

	if(count_object(all_targets) > target_amount)
	{
		for (var i = (count_object(all_targets) - target_amount) - 1; i >= 0; i--) {
			delete all_targets[get_random_key_from_object(all_targets)];
		};
	}

	return all_targets;
}

function filter_targets_by_redirect(all_targets, current_ability, origin_id){
	var prime_targets_present = false;
	var prime_types = [];
	if(current_ability['effects'] != undefined && current_ability['effects'][0] != undefined && current_ability['effects'][0]['subtypes'] != undefined)
	{
		prime_types = current_ability['effects'][0]['subtypes'];
	}
	var allready_redirected = {};

	eachoa(all_targets, function(target_id, target_card_id){
		if(count_object(allready_redirected) == 0)
		{
			for (var i = -5; i <= 5; i++) {		
				eachoa(battle_info['combat_units'], function(unit_id, unit_info){
					if(unit_info['slot'] == i)
					{
						eachoa(unit_info['abilities'], function(ability_id, ability_level){
							if((all_abilities[ability_id]['proc_chance'] == undefined || all_abilities[ability_id]['proc_chance'] >= Math.random() * 100) && match_array_values(all_abilities[ability_id]['proc'], ['redirect']) == true && match_array_values(prime_types, all_abilities[ability_id]['subtypes']) == true && allready_redirected[target_id] == undefined && check_ability_can_fire(unit_id, all_abilities[ability_id], ability_level, target_id) == true)
							{
								var redirect_from_targets = find_targets(unit_id, all_abilities[ability_id]['from_targets'], target_card_id, ability_level, all_abilities[ability_id]);
								eachoa(redirect_from_targets, function(redirect_from_target_id, redirect_from_target_unit_id){
									if(redirect_from_target_unit_id == target_card_id)
									{
										var redirect_to_targets = find_targets(unit_id, all_abilities[ability_id]['to_target'], origin_id, ability_level, all_abilities[ability_id]);
										//console.log(redirect_to_targets);
										if(count_object(redirect_to_targets) > 0)
										{
											all_targets[target_id] = redirect_to_targets[get_random_key_from_object(redirect_to_targets)];
											allready_redirected[target_id] = true;
											if(all_abilities[ability_id]['reduce_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
											{
												grant_skill(unit_id, unit_id, -1, all_abilities[ability_id]['reduce_skill_after_use'], false);
												check_visible_skills(unit_id);
											}
											if(all_abilities[ability_id]['remove_skill_after_use'] != undefined && battle_info['combat_units'][unit_id] != undefined && battle_info['combat_units'][unit_id]['type'] != 'spell')
											{
												set_skill(unit_id, unit_id, 0, all_abilities[ability_id]['remove_skill_after_use'], false);
												check_visible_skills(unit_id);
											}
										}
									}
								});
								
							}
						});
					};
				});
			};
		}
	});

	return all_targets;
}

function filter_targets_by_has_origin_card(all_targets, has_origin_card){
	eachoa(all_targets, function(target_id, target_card_id){
		if((has_origin_card == undefined || has_origin_card == true) && battle_info.combat_units[target_card_id]['card_id'] == undefined)
		{
			delete all_targets[target_id];
		}
		if((has_origin_card != undefined && has_origin_card == false) && battle_info.combat_units[target_card_id]['card_id'] != undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_slot_free(all_targets){
	eachoa(all_targets, function(target_id, target_card_id){
		
		if(check_slot_free(battle_info.combat_units[target_card_id]['slot'], battle_info.combat_units[target_card_id]['side']) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_self(all_targets, unit_id){
	eachoa(all_targets, function(target_id, target_card_id){
		
		if(target_card_id == unit_id)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_has_theme(all_targets, has_theme){
	eachoa(all_targets, function(target_id, target_card_id){
		
		if(match_array_values(battle_info.combat_units[target_card_id]['theme'], has_theme) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_has_ability(all_targets, has_ability){
	eachoa(all_targets, function(target_id, target_card_id){
		
		if(battle_info.combat_units[target_card_id]['abilities'][has_ability] == undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_does_not_have_ability(all_targets, has_ability){
	eachoa(all_targets, function(target_id, target_card_id){
		
		if(battle_info.combat_units[target_card_id]['abilities'][has_ability] != undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_max_abilities(all_targets, max_abilities, level){
	eachoa(all_targets, function(target_id, target_card_id){
		eachoa(max_abilities, function(ability_id, ability_level){
			var max_level = ability_level;
			if(max_level == 'ability_level'){max_level = level - 1;}
			if(battle_info.combat_units[target_card_id]['abilities'][ability_id] != undefined && battle_info.combat_units[target_card_id]['abilities'][ability_id] > max_level)
			{
				delete all_targets[target_id];
			}
		});
	});

	return all_targets;
}

function filter_target_cards_by_max_abilities(all_targets, max_abilities, level, target_side){
	eachoa(all_targets, function(target_id, target_card_id){
		var current_card = all_available_cards[battle_info['deck_' + target_side][target_card_id]['card_id']];
		eachoa(max_abilities, function(ability_id, ability_level){
			var max_level = ability_level;
			if(max_level == 'ability_level'){max_level = level - 1;}
			if(current_card['abilities'][ability_id] != undefined && current_card['abilities'][ability_id] > max_level)
			{
				delete all_targets[target_id];
			}
		});
	});

	return all_targets;
}


function filter_targets_by_immunities(all_targets, unit_id, current_ability, origin_id){
	
	eachoa(all_targets, function(target_id, target_card_id){	
		var target_immune = false;
		eachoa(battle_info.combat_units[target_card_id]['abilities'], function(ability_id, ability_level){
			var immunities = all_abilities[ability_id]['grants_immunities'];
			eachoa(current_ability['effects'], function(effect_id, effect){	
				if(immunities != undefined && (match_array_values(immunities, [effect['type']]) == true || match_array_values(immunities, effect['subtypes']) == true || (battle_info.combat_units[origin_id] != undefined && match_array_values(immunities, [battle_info.combat_units[origin_id]['type']]) == true)))
				{
					target_immune = true;
				}
			});
			
			if(all_abilities[ability_id]['negated_by_ability'] != undefined && battle_info.combat_units[origin_id] != undefined)
			{	
				eachoa(battle_info.combat_units[origin_id]['abilities'], function(ability_key, useless_data){
					if(ability_key == all_abilities[ability_id]['negated_by_ability'])
					{
						target_immune = false;
					}
				});
			}
		});
		if(target_immune == true)
		{
			delete all_targets[target_id];
		}
	});


	return all_targets;
}

function filter_targets_by_highest_time_left(all_targets, side){
	var highest_cost = false;
	eachoa(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] > highest_cost || highest_cost == false)
		{
			highest_cost = battle_info['deck_' + side][target_card_id]['time_left'];
		}
	});
	eachoa(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] < highest_cost)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_time_left(all_targets, side){
	var lowest_cost = false;
	eachoa(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] < lowest_cost || lowest_cost == false)
		{
			lowest_cost = battle_info['deck_' + side][target_card_id]['time_left'];
		}
	});
	eachoa(all_targets, function(target_id, target_card_id){
		if(battle_info['deck_' + side][target_card_id]['time_left'] > lowest_cost)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_card_type(all_targets, types, side){
	eachoa(all_targets, function(target_id, target_card_id){
		
		var card_type_array = [all_available_cards[battle_info['deck_' + side][target_card_id]['card_id']]['type']];
		if(match_array_values(card_type_array, types) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_types(all_targets, types){
	eachoa(all_targets, function(target_id, target_unit_id){
		var card_type_array = [battle_info.combat_units[target_unit_id]['type']];
		if(match_array_values(card_type_array, types) == true)
		{
			delete all_targets[target_id];
		}
		if(match_array_values(['hero'], types) == true && (target_unit_id == 1 || target_unit_id == 2))
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_subtypes(all_targets, subtypes){
	eachoa(all_targets, function(target_id, target_unit_id){
		var card_type_array = battle_info.combat_units[target_unit_id]['subtypes'];
		if(card_type_array == undefined || match_array_values(card_type_array, subtypes) == false)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_subtypes(all_targets, subtypes){
	eachoa(all_targets, function(target_id, target_unit_id){
		var card_type_array = battle_info.combat_units[target_unit_id]['subtypes'];
		if(card_type_array != undefined && match_array_values(card_type_array, subtypes) == true)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_card_ids(all_targets, ids, filter_this){
	eachoa(all_targets, function(target_id, target_unit_id){
		var card_type_array = [battle_info.combat_units[target_unit_id]['card_type']];
		if(match_array_values(card_type_array, ids) == filter_this)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_card_ids(all_targets, ids){
	eachoa(all_targets, function(target_id, target_unit_id){
		var card_type_array = [battle_info.combat_units[target_unit_id]['name']];
		if(match_array_values(card_type_array, ids) == true)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}


function filter_targets_by_damaged(all_targets){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['current_health'] >= battle_info.combat_units[target_unit_id]['health'])
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_not_damaged(all_targets){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['current_health'] != battle_info.combat_units[target_unit_id]['health'])
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_is_transformed(all_targets){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['original_card_type'] == undefined)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_has_negative_effect(all_targets){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['effects'] == undefined ||
		((battle_info.combat_units[target_unit_id]['effects']['burning'] == undefined || battle_info.combat_units[target_unit_id]['effects']['burning'] == 0) &&
			(battle_info.combat_units[target_unit_id]['effects']['poisoned'] == undefined || battle_info.combat_units[target_unit_id]['effects']['poisoned'] == 0) &&
			(battle_info.combat_units[target_unit_id]['effects']['cursed'] == undefined || battle_info.combat_units[target_unit_id]['effects']['cursed'] == 0) &&
			(battle_info.combat_units[target_unit_id]['effects']['doom'] == undefined || battle_info.combat_units[target_unit_id]['effects']['doom'] == 0) /* &&
			(battle_info.combat_units[target_unit_id]['effects']['stunned'] == undefined || battle_info.combat_units[target_unit_id]['effects']['stunned'] == 0)*/))
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}


function filter_targets_by_has_effect(all_targets, effect_paramaters, level){
	var real_amount = effect_paramaters['amount'];
	if(real_amount == 'ability_level'){real_amount = level;};
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['effects'] == undefined && real_amount != 0 && effect_paramaters['limit'] == 'min')
		{
			delete all_targets[target_id];
		}
		else
		{
			if(battle_info.combat_units[target_unit_id]['effects'][effect_paramaters['effect_name']] == undefined && real_amount != 0 && effect_paramaters['limit'] == 'min')
			{
				delete all_targets[target_id];
			}
			eachoa(battle_info.combat_units[target_unit_id]['effects'], function(effect_name, effect_amount){
				var temp_amount = real_amount;
				if(temp_amount == 'ability_level' && level != undefined)
				{
					temp_amount = level;
				}
				if(effect_paramaters['effect_name'] == effect_name && ((effect_amount >= temp_amount && effect_paramaters['limit'] == 'less') || (effect_amount > temp_amount && effect_paramaters['limit'] == 'max') || (effect_amount < temp_amount && effect_paramaters['limit'] == 'min')))
				{
					delete all_targets[target_id];
				}
			});
		}
	});

	return all_targets;
}

function filter_targets_by_not_stunned(all_targets, effect_paramaters){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['effects']['stunned'] != undefined && battle_info.combat_units[target_unit_id]['effects']['stunned'] > 0)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_min_cost(all_targets, min_cost, origin_id, level){
	eachoa(all_targets, function(target_id, target_unit_id){
		var real_min_cost = calculate_effect(min_cost, target_id, origin_id, level);
		if(battle_info.combat_units[target_unit_id]['time'] < real_min_cost)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_cost(all_targets, max_cost, origin_id, level){
	eachoa(all_targets, function(target_id, target_unit_id){
		var real_max_cost = calculate_effect(max_cost, target_id, origin_id, level);
		if(battle_info.combat_units[target_unit_id]['time'] > real_max_cost)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_min_hp(all_targets, min_hp){
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += battle_info.combat_units[target_unit_id]['temp_health'];
		}
		if(current_total_hp < min_hp && current_total_hp !== false/* && (battle_info.combat_units[target_unit_id]['slot'] != 0 || battle_info.combat_units[target_unit_id]['current_health'] > 0)*/)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_min_total_hp(all_targets, min_hp){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['health'] < min_hp && battle_info.combat_units[target_unit_id]['health'] !== false/* && (battle_info.combat_units[target_unit_id]['slot'] != 0 || battle_info.combat_units[target_unit_id]['current_health'] > 0)*/)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_hp(all_targets, max_hp, origin_id, level){
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_max_hp = calculate_effect({amount:max_hp}, target_unit_id, origin_id, level);
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += battle_info.combat_units[target_unit_id]['temp_health'];
		}
		if(current_total_hp > current_max_hp)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_min_armor(all_targets, min_armor){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] < min_armor)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_armor(all_targets, min_armor){
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] >= min_armor)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}


function filter_targets_by_min_power(all_targets, min_power){
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_power = calculate_effect({amount:'target_power'}, target_unit_id, undefined, undefined);
		if(current_power < min_power || current_power === false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_max_power(all_targets, max_power){
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_power = calculate_effect({amount:'target_power'}, target_unit_id, undefined, undefined);
		if(current_power > max_power)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_lowest_hp(all_targets){
	var lowest_hp = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp < lowest_hp || lowest_hp == false)
		{
			lowest_hp = current_total_hp;
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp > lowest_hp)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_hp(all_targets){
	var highest_hp = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp > highest_hp || highest_hp == false)
		{
			highest_hp = current_total_hp;
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		var current_total_hp = battle_info.combat_units[target_unit_id]['current_health'];
		if(battle_info.combat_units[target_unit_id]['temp_health'] != undefined)
		{
			current_total_hp += parseInt(battle_info.combat_units[target_unit_id]['temp_health']);
		}
		if(current_total_hp < highest_hp)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_max_hp(all_targets){
	var highest_hp = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['health'] > highest_hp || highest_hp == false)
		{
			highest_hp = battle_info.combat_units[target_unit_id]['health'];
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['health'] < highest_hp)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_armor(all_targets){
	var highest_armor = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] > highest_armor || highest_armor == false)
		{
			highest_armor = battle_info.combat_units[target_unit_id]['armor'];
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['armor'] < highest_armor)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_power(all_targets){
	var lowest_power = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] < lowest_power || lowest_power == false)
		{
			if(battle_info.combat_units[target_unit_id]['power'] === false)
			{
				lowest_power = 0;
			}
			else
			{
				lowest_power = battle_info.combat_units[target_unit_id]['power'];
			}
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] > lowest_power)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_power(all_targets){
	var highest_power = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] > highest_power || highest_power == false)
		{
			highest_power = battle_info.combat_units[target_unit_id]['power'];
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['power'] < highest_power)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_highest_cost(all_targets){
	var highest_cost = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] > highest_cost || highest_cost == false)
		{
			highest_cost = battle_info.combat_units[target_unit_id]['time'];
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] < highest_cost)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_cost(all_targets){
	var lowest_cost = -1;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] < lowest_cost || lowest_cost == -1)
		{
			lowest_cost = battle_info.combat_units[target_unit_id]['time'];
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(battle_info.combat_units[target_unit_id]['time'] > lowest_cost && lowest_cost > -1)
		{
			delete all_targets[target_id];
		}
	});

	return all_targets;
}

function filter_targets_by_lowest_cost_card(all_targets, side){
	var lowest_cost = false;
	eachoa(all_targets, function(target_id, target_unit_id){
		if(all_available_cards[battle_info['deck_' + side][target_unit_id]['card_id']]['time'] < lowest_cost || lowest_cost == false)
		{
			lowest_cost = all_available_cards[battle_info['deck_' + side][target_unit_id]['card_id']]['time'];
		}
	});
	eachoa(all_targets, function(target_id, target_unit_id){
		if(all_available_cards[battle_info['deck_' + side][target_unit_id]['card_id']]['time'] > lowest_cost && lowest_cost != false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;
}

function filter_targets_by_has_no_opposing(all_targets, type){
	eachoa(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] != battle_info.combat_units[target_unit_id]['side'] && unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == true)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_has_opposing(all_targets, type){
	eachoa(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] != battle_info.combat_units[target_unit_id]['side'] && unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_has_adjacent(all_targets, type){
	eachoa(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == battle_info.combat_units[target_unit_id]['side'] && (unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] + 1 || unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] - 1) && unit_info['slot'] != 0 && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == false)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_has_no_adjacent(all_targets, type){
	eachoa(all_targets, function(target_id, target_unit_id){
		var found_opposing = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['side'] == battle_info.combat_units[target_unit_id]['side'] && (unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] + 1 || unit_info['slot'] == battle_info.combat_units[target_unit_id]['slot'] - 1) && unit_info['slot'] != 0 && unit_info['current_health'] > 0 && (type == undefined || unit_info['type'] == type))
			{
				found_opposing = true;
			}
		});
		if(found_opposing == true)
		{
			delete all_targets[target_id];
		}
	});
	return all_targets;	
}

function filter_targets_by_position(all_targets, unit_id, position, origin_slot){

	if(origin_slot == undefined)
	{
		origin_slot = 0;
	}

	var temp_origin_slot = origin_slot + 0;
	if(temp_origin_slot < 0)
	{
		temp_origin_slot = 0;
	}

	if(position == 'self')
	{
		eachoa(all_targets, function(target_id, target_unit_id){
			if(target_unit_id != unit_id)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'opposing')
	{
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] != temp_origin_slot)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'opposing_wide')
	{
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] > temp_origin_slot + 1 || battle_info.combat_units[target_unit_id]['slot'] < temp_origin_slot - 1)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'adjacent')
	{
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] != temp_origin_slot -1 &&
			battle_info.combat_units[target_unit_id]['slot'] != temp_origin_slot + 1)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'not_adjacent')
	{
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] == temp_origin_slot -1 ||
			battle_info.combat_units[target_unit_id]['slot'] == temp_origin_slot + 1)
			{
				delete all_targets[target_id];
			}
		});
	}
	if(position == 'nearest')
	{
		var nearest = 10;
		eachoa(all_targets, function(target_id, target_unit_id){
			var distance = battle_info.combat_units[target_unit_id]['slot'] - temp_origin_slot;
			if(distance < 0){distance *= -1;}
			if(distance < nearest)
			{
				nearest = distance;
			}
		});
		eachoa(all_targets, function(target_id, target_unit_id){
			var distance = battle_info.combat_units[target_unit_id]['slot'] - temp_origin_slot;
			if(distance < 0){distance *= -1;}
			if(distance > nearest)
			{
				delete all_targets[target_id];
			}
		});
	}

	if(position == 'right')
	{
		var highest_slot = 0;
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] > highest_slot)
			{
				highest_slot = battle_info.combat_units[target_unit_id]['slot'];
			}
		});
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] < highest_slot)
			{
				delete all_targets[target_id];
			}
		});
	}

	if(position == 'left')
	{
		var lowest_slot = 10;
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] < lowest_slot)
			{
				lowest_slot = battle_info.combat_units[target_unit_id]['slot'];
			}
		});
		eachoa(all_targets, function(target_id, target_unit_id){
			if(battle_info.combat_units[target_unit_id]['slot'] > lowest_slot)
			{
				delete all_targets[target_id];
			}
		});
	}

	return all_targets;
}

function process_combat_units(side, proc, do_not_process_effects){
	for(var unit_slot=-5;unit_slot<=5;unit_slot++)
	{
		eachoa(battle_info.combat_units, function(unit_id, unit){
			if(unit['side'] == side && unit['acted_this_turn'] < 1 && unit['slot'] == unit_slot && combat_alive == true)
			{
				process_single_unit(unit_id, undefined, do_not_process_effects, proc);
				check_all_ready_cards();
			}
		});
	}

	var any_unit_left = false;
	eachoa(battle_info.combat_units, function(unit_id, unit){
		if(unit['side'] == side && unit['acted_this_turn'] < 1)
		{
			any_unit_left = true;
		}
	});

	if(any_unit_left == true && combat_alive == true)
	{
		process_combat_units(side, proc, do_not_process_effects);
	}
}

function enable_all_units_to_act(reset_ability_use, side){
	eachoa(battle_info.combat_units, function(unit_id, unit){
		if(side == undefined || unit['side'] == side)
		{
			unit['failed_to_act_this_phase'] = false;
			if(unit['acted_this_turn'] == undefined || unit['acted_this_turn'] > 0 || reset_ability_use == true)
			{
				unit['acted_this_turn'] = 0;
			}
			if(reset_ability_use != undefined && reset_ability_use == true)
			{
				unit['used_ability'] = false;
			}
		}
	});
}

function check_all_ready_cards(side){
	side = undefined;
	for(var t=1;t<=2;t++){
		if(side == undefined || side == t)
		{
			for(var slot_id=1;slot_id<=10;slot_id++){
				eachoa(battle_info['deck_' + t], function(card_id, card_info){
					if(card_info['time_left'] <= 0 && card_info['status'] == 'hand' && card_info['hand_slot'] == slot_id && combat_alive == true)
					{
						play_card(t, card_id);
					}
				});
			};
		}
	};

	var no_ready_cards_left = true;
	for(var t=1;t<=2;t++){
		if(side == undefined || side == t)
		{
			eachoa(battle_info['deck_' + t], function(card_id, card_info){
				if(card_info['time_left'] <= 0 && card_info['status'] == 'hand')
				{
					no_ready_cards_left = false;
				}
			});
		}
	};

	if(no_ready_cards_left == false && combat_alive == true)
	{
		check_all_ready_cards(side);
	}
}

function play_card(side, card_id, forced_play, origin_unit){
	

	var current_card_info = all_available_cards[battle_info['deck_' + side][card_id]['card_id']];

	var can_play = true;
	var not_side = 1;
	if(side == 1){not_side = 2;}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_allies'] != undefined && count_ally_units(side) < current_card_info['abilities']['minimum_allies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_ally_creatures'] != undefined && count_ally_units(side, 'creature') < current_card_info['abilities']['minimum_ally_creatures'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_dead_ally_creatures'] != undefined && count_grave_cards(battle_info['deck_' + side], 'creature') < current_card_info['abilities']['minimum_dead_ally_creatures'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_enemies'] != undefined && count_enemy_units(side) < current_card_info['abilities']['minimum_enemies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_enemy_creatures'] != undefined && count_enemy_units(side, 'creature') < current_card_info['abilities']['minimum_enemy_creatures'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_allies'] != undefined && count_ally_units(side) > current_card_info['abilities']['maximum_allies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_enemies'] != undefined && count_enemy_units(side) > current_card_info['abilities']['maximum_enemies'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['minimum_units'] != undefined && count_units() < current_card_info['abilities']['minimum_units'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_units'] != undefined && count_units() > current_card_info['abilities']['maximum_units'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['no_allies'] != undefined && count_ally_units(side) > 0)
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['maximum_hero_health'] != undefined && (battle_info.combat_units[side]['current_health'] / battle_info.combat_units[side]['health']) * 100 > current_card_info['abilities']['maximum_hero_health'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['min_enemy_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + not_side]) < current_card_info['abilities']['min_enemy_hand_cards'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['min_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + side]) < current_card_info['abilities']['min_hand_cards'])
	{
		can_play = false;
	}
	if((forced_play == undefined || forced_play == false) && current_card_info['abilities']['max_hand_cards'] != undefined && count_hand_cards(battle_info['deck_' + side]) > current_card_info['abilities']['max_hand_cards'])
	{
		can_play = false;
	}

	if(can_play == true)
	{
		var played_card = false;
		battle_info['deck_' + side][card_id]['status'] = 'in_play';

		if(current_card_info['type'] == 'creature' || current_card_info['type'] == 'structure' || current_card_info['type'] == 'object')
		{
			var prev_total_timeout = total_timeout;
			played_card = play_unit_card(side, battle_info['deck_' + side][card_id]['card_id'], card_id, forced_play, origin_unit);
			/*if(played_card == true)
			{
				battle_info['deck_' + side][card_id]['status'] = 'in_play';
				//if(played_card == true)
				
				var temp_hand_slot = battle_info['deck_' + side][card_id]['hand_slot'] + 0;
				var temp_side = side + 0;
				var temp_hand_slot_id = battle_info['deck_' + side][card_id]['hand_slot_id'] + 0;
				
				timeout_key ++;

				all_timeouts[timeout_key] = setTimeout(function(){
					$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side + '.hand_slot_id_' + temp_hand_slot_id).each(function(){
						this.remove();
						
					});
					
				},prev_total_timeout);
				total_timeout += 500 * battle_speed;
			}*/
			
		}

		if(current_card_info['type'] == 'artifact')
		{
			played_card = play_artifact_card(side, battle_info['deck_' + side][card_id]['card_id'], card_id);
		}

		if(current_card_info['type'] == 'spell' || current_card_info['type'] == 'attack' || current_card_info['type'] == 'consumable' /*|| current_card_info['type'] == 'artifact'*/)
		{
			played_card = play_action_card(side, battle_info['deck_' + side][card_id]['card_id'], card_id);
		}
		if(played_card == true)
		{
			update_deck_counts();
		}

	}
	else
	{
		var played_card = false;
	}

	if(played_card == true)
	{
		if(battle_info['deck_' + side][card_id]['played'] == undefined)
		{
			battle_info['deck_' + side][card_id]['played'] = 1;
		}
		else
		{
			battle_info['deck_' + side][card_id]['played'] += 1;
		}
	}
	
	
	if(played_card == false && battle_info['deck_' + side][card_id]['time_left'] < 1)
	{
		battle_info['deck_' + side][card_id]['status'] = 'hand';

		if(battle_info['deck_' + side][card_id]['time_left'] < 1)
		{
			battle_info['deck_' + side][card_id]['time_left'] = 1;
		}
			
		var temp_hand_slot = battle_info['deck_' + side][card_id]['hand_slot'] + 0;
		var temp_time_left = battle_info['deck_' + side][card_id]['time_left'] + 0;
		var temp_t = side + 0;
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.hand_slot_' + temp_hand_slot + '.side_' + temp_t + ' .card_time').html(temp_time_left);
		},total_timeout);
		
	}
	else
	{
		check_ability_procs(side, 'card_played');
		if(origin_unit == undefined)
		{
			check_all_ready_cards();
		}
	}
	
}

function clone_unit(side, origin_id, stunned, origin_unit, effect_info){
    var played_card = false;
    	
    var card_id = battle_info.combat_units[origin_id]['card_type'];

	var free_slot = find_free_slot(side, card_id);

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = true_copyobject(battle_info.combat_units[origin_id]);
		/*eachoa(battle_info.combat_units[origin_id], function(key, value){
		    if(key != 'effects' && key != 'abilities')
		    {
		        if(typeof(value) == 'object')
    		    {
    		        
    		        if(typeof(value) == 'object')
    		        {
    		            battle_info.combat_units[next_combat_unit_id][key] = true_copyobject(value);
    		        }
    		        else
    		        {
    		            battle_info.combat_units[next_combat_unit_id][key] = {};
        		        eachoa(battle_info.combat_units[origin_id], function(subkey, subvalue){
        		            battle_info.combat_units[next_combat_unit_id][key][subkey] = subvalue;
        		        });
    		        }
    		    }
    		    else
    		    {
    		        battle_info.combat_units[next_combat_unit_id][key] = value;
    		    }
		    }
		});*/
		battle_info.combat_units[next_combat_unit_id]['abilities'] = {};
		eachoa(battle_info.combat_units[origin_id]['abilities'], function(key, value){
			if(key != 'bring_clone' && (effect_info['remove_skills'] == undefined || match_array_values(effect_info['remove_skills'], key) == false))
			{
				battle_info.combat_units[next_combat_unit_id]['abilities'][key] = value;
			}
		});
		//copyobject(battle_info.combat_units[origin_id]);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = undefined;
		battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		//battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];
// 		if(battle_info.combat_units[next_combat_unit_id]['effects'] == undefined)
// 		{
		    //battle_info.combat_units[next_combat_unit_id]['effects'] = {};
		//}
		/*eachoa(battle_info.combat_units[origin_id]['effects'], function(subkey, subvalue){
            battle_info.combat_units[next_combat_unit_id]['effects'][subkey] = subvalue;
        });*/
		
		if(stunned != undefined && stunned == true)
		{
			if(battle_info.combat_units[next_combat_unit_id]['effects']['stunned'] == undefined)
			{
			    battle_info.combat_units[next_combat_unit_id]['effects']['stunned'] = 1;
			}
			else
			{
			    battle_info.combat_units[next_combat_unit_id]['effects']['stunned'] += 1;
			}
		}
		played_card = true;
		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'];
		}
		var temp_slot_2 = '';
		if(origin_unit != undefined && battle_info.combat_units[origin_unit] != undefined && (battle_info.combat_units[origin_unit]['type'] == 'creature' || battle_info.combat_units[origin_unit]['type'] == 'structure' || battle_info.combat_units[origin_unit]['type'] == 'object'))
		{
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'slot_' + (battle_info.combat_units[origin_unit]['slot']), true);
			temp_slot_2 = 'slot_' + (battle_info.combat_units[origin_unit]['slot']);
		}
		else
		{
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot);
		}
			
		timeout_key ++;
		var temp_slot = battle_info.combat_units[next_combat_unit_id]['slot'];
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container').append(parsed_unit);
			setTimeout(function(){
				$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
				$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
				$('.unit_id_' + next_combat_unit_id).removeClass(temp_slot_2);
				$('.unit_id_' + next_combat_unit_id).addClass('slot_' + temp_slot);
			},50);
		},total_timeout);
		check_visible_skills(next_combat_unit_id);
		check_unit_power(next_combat_unit_id);
		check_unit_hp(next_combat_unit_id);
		update_passive_effects(next_combat_unit_id);
		total_timeout += 500 * battle_speed;
		eachoa(battle_info.combat_units[next_combat_unit_id]['abilities'], function(ability_key, ability_level){
			if(match_array_values(all_abilities[ability_key]['proc'], ['on_play']) == true && ability_key != 'bring_clone')
			{
				if(true || battle_info.combat_units[next_combat_unit_id]['used_ability'] == undefined || battle_info.combat_units[next_combat_unit_id]['used_ability'] == false)
				{
					total_timeout += 500;
				}
				process_ability(next_combat_unit_id, all_abilities[ability_key], ability_level, undefined, 'on_play');
			}
		});
		//check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', next_combat_unit_id);
		//check_ability_procs(side, 'unit_card_played', next_combat_unit_id);
	}
	return played_card;
}

function turn_into(target_id, effect, origin_id, level){
	//console.log(effect['card_id']);
	if(battle_info.combat_units[target_id] != undefined && effect['card_id'] != undefined)
	{
		var original_unit = true_copyobject(battle_info.combat_units[target_id]);
		var original_unit_effects = true_copyobject(battle_info.combat_units[target_id]['effects']);
		var original_unit_blessed = 0;
		if(battle_info.combat_units[target_id]['abilities']['blessed'] != undefined)
		{
			original_unit_blessed += battle_info.combat_units[target_id]['abilities']['blessed'];
		}
		var original_card_type = battle_info.combat_units[target_id]['card_type'];
		var turns_into_id = effect['card_id'] + '';
		var card_subtypes = effect['card_subtypes'];
		if(effect['card_subtypes'] == 'target_subtypes')
		{
			card_subtypes = battle_info.combat_units[target_id]['subtypes'];
		}
		if(effect['additional_subtypes'] != undefined)
		{
			eachoa(effect['additional_subtypes'], function(subtype_key, subtype){
				card_subtypes[get_highest_key_in_object(card_subtypes)+1] = subtype;
			});
		}
		if(turns_into_id == 'random')
		{
			turns_into_id = get_random_card_based_on_time(effect['card_type'], calculate_effect({amount:effect['max_time'], amount_adjustment:effect['max_time_adjustment']}, target_id, origin_id, level), undefined, undefined, card_subtypes, calculate_effect({amount:effect['min_time']}, target_id, origin_id, level), [original_card_type]);
		}
		if(turns_into_id != false)
		{
			var temp_new_unit = create_combat_unit(all_available_cards[turns_into_id], original_unit['side']);
			if(original_unit['slot'] == 0 && all_available_cards[turns_into_id]['hero_version'] != undefined)
			{
				temp_new_unit = create_hero(turns_into_id, original_unit['side']);
			}
			eachoa(temp_new_unit, function(key, value){
				battle_info.combat_units[target_id][key] = value;
			});
			battle_info.combat_units[target_id]['card_type'] = turns_into_id;
			if(original_unit['original_card_type'] == undefined)
			{
				battle_info.combat_units[target_id]['original_card_type'] = original_card_type;
			}
			battle_info.combat_units[target_id]['current_health'] = battle_info.combat_units[target_id]['health'];
			eachoa(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
				if(all_abilities[ability_id]['remove_on_transform'] != undefined && all_abilities[ability_id]['remove_on_transform'] == true)
				{
					delete battle_info.combat_units[target_id]['abilities'][ability_id];
				}
			});
			if(original_unit_blessed > 0 && (battle_info.combat_units[target_id]['abilities']['blessed'] == undefined || battle_info.combat_units[target_id]['abilities']['blessed'] < original_unit_blessed))
			{
				battle_info.combat_units[target_id]['abilities']['blessed'] = original_unit_blessed;
			}
			battle_info.combat_units[target_id]['effects'] = true_copyobject(original_unit_effects);
			battle_info.combat_units[target_id]['original_unit'] = true_copyobject(original_unit);
			var parsed_abilities = parse_abilities(target_id);
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.unit_id_' + target_id + ' .card_image').css('background-image','url(images/' + temp_new_unit['image'] + ')');
				if(temp_new_unit['image_position'] != undefined)
				{
					$('.unit_id_' + target_id + ' .card_image').css('background-position',temp_new_unit['image_position']);
				}
				else
				{
					$('.unit_id_' + target_id + ' .card_image').css('background-position','');
				}
				$('.unit_id_' + target_id + ' .card_name').html(capitalizeFirstLetter(temp_new_unit['name']));
				$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
				$('.battle_container .unit_id_' + target_id + ' .card_color').removeClass('color_green color_blue color_purple color_red color_orange color_yellow color_colorless');
				
				if(count_object(temp_new_unit['color']) == 1)
				{
					$('.battle_container .unit_id_' + target_id + ' .card_color').addClass('color_' + temp_new_unit['color'][0]);
					$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_number_0_not');
					$('.battle_container .unit_id_' + target_id + ' .color_number_0').removeClass('color_number_0');
					$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('hidden');
				}
				else
				{
					$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_' + temp_new_unit['color'][0]);
					$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('color_' + temp_new_unit['color'][1]);
					$('.battle_container .unit_id_' + target_id + ' .color_number_1').removeClass('hidden');
				}
			},total_timeout);
			check_unit_hp(target_id);
			check_visible_skills(target_id);
			check_unit_power(target_id);
			update_passive_effects(target_id);
			total_timeout += 500 * battle_speed;
		}
	}
}

function turn_into_original(target_id, origin_id){
	if(battle_info.combat_units[target_id] != undefined && battle_info.combat_units[target_id]['original_card_type'] != undefined)
	{
		//var temp_new_unit = copyobject(battle_info.combat_units[target_id]['original_unit']);
		//console.log(temp_new_unit);
		//battle_info.combat_units[target_id] = temp_new_unit;
		//console.log(battle_info.combat_units[target_id]);
		var turns_into_id = battle_info.combat_units[target_id]['original_card_type'];
		//var temp_new_unit = create_combat_unit(all_available_cards[turns_into_id]);
		var temp_old_unit = true_copyobject(battle_info.combat_units[target_id]);
		var temp_new_unit = true_copyobject(battle_info.combat_units[target_id]['original_unit']);
		var original_unit_effects = true_copyobject(battle_info.combat_units[target_id]['effects']);
		battle_info.combat_units[target_id]['card_type'] = battle_info.combat_units[target_id]['original_card_type'];
		eachoa(temp_new_unit, function(key, value){
			battle_info.combat_units[target_id][key] = value;
		});
		battle_info.combat_units[target_id]['slot'] = temp_old_unit['slot'];
		battle_info.combat_units[target_id]['side'] = temp_old_unit['side'];
		delete battle_info.combat_units[target_id]['original_card_type'];
		//console.log(battle_info.combat_units[target_id]);
		//battle_info.combat_units[target_id]['current_health'] = battle_info.combat_units[target_id]['health'];
		eachoa(battle_info.combat_units[target_id]['abilities'], function(ability_id, ability_level){
			if(all_abilities[ability_id]['remove_on_transform'] != undefined && all_abilities[ability_id]['remove_on_transform'] == true)
			{
				delete battle_info.combat_units[target_id]['abilities'][ability_id];
			}
		});
		battle_info.combat_units[target_id]['effects'] = true_copyobject(original_unit_effects);
		var parsed_abilities = parse_abilities(target_id);
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + target_id + ' .card_image').css('background-image','url(images/' + temp_new_unit['image'] + ')');
			if(temp_new_unit['image_position'] != undefined)
			{
				$('.unit_id_' + target_id + ' .card_image').css('background-position',temp_new_unit['image_position']);
			}
			else
			{
				$('.unit_id_' + target_id + ' .card_image').css('background-position','');
			}
			$('.unit_id_' + target_id + ' .card_name').html(capitalizeFirstLetter(temp_new_unit['name']));
			$('.battle_container .unit_id_' + target_id + ' .card_abilities').html(parsed_abilities);
			$('.battle_container .unit_id_' + target_id + ' .card_color').removeClass('color_green color_blue color_purple color_red color_orange color_yellow color_colorless');
			if(count_object(temp_new_unit['color']) == 1)
			{
				$('.battle_container .unit_id_' + target_id + ' .card_color').addClass('color_' + temp_new_unit['color'][0]);
				$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_number_0_not');
				$('.battle_container .unit_id_' + target_id + ' .color_number_0').removeClass('color_number_0');
				$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('hidden');
			}
			else
			{
				$('.battle_container .unit_id_' + target_id + ' .color_number_0_not').addClass('color_number_0');
				$('.battle_container .unit_id_' + target_id + ' .color_number_0_not').removeClass('color_number_0_not');
				$('.battle_container .unit_id_' + target_id + ' .color_number_0').addClass('color_' + temp_new_unit['color'][0]);
				$('.battle_container .unit_id_' + target_id + ' .color_number_1').addClass('color_' + temp_new_unit['color'][1]);
				$('.battle_container .unit_id_' + target_id + ' .color_number_1').removeClass('hidden');
			}
		},total_timeout);
		check_unit_hp(target_id);
		check_visible_skills(target_id);
		check_unit_power(target_id);
		update_passive_effects(target_id);
		total_timeout += 500 * battle_speed;

		return true;
	}
	else
	{
		return false;
	}
}

function play_unit_card(side, card_id, origin_id, forced_play, origin_unit){
	var played_card = false;

	var free_slot = find_free_slot(side, card_id);
	
	if((forced_play != undefined && free_slot == false) || (forced_play != undefined && forced_play != true))
	{
	    free_slot = find_free_slot(side, card_id, 'none', forced_play, undefined, origin_unit, undefined);
	}

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = create_combat_unit(all_available_cards[card_id], side);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['side'] = side;
		battle_info.combat_units[next_combat_unit_id]['origin_side'] = side;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = origin_id;
		battle_info.combat_units[next_combat_unit_id]['card_type'] = card_id;
		if(side == active_turn)
		{
			battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		}
		else
		{
			battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 1;
		}
		battle_info.combat_units[next_combat_unit_id]['used_ability'] = false;
		battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];
		

		played_card = true;
		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'];
		}
		var temp_slot_2 = '';
		var old_side = 'side_' + side;
		if(origin_unit != undefined && battle_info.combat_units[origin_unit] != undefined && (battle_info.combat_units[origin_unit]['type'] == 'creature' || battle_info.combat_units[origin_unit]['type'] == 'structure' || battle_info.combat_units[origin_unit]['type'] == 'object' || battle_info.combat_units[origin_unit]['type'] == 'spell' || battle_info.combat_units[origin_unit]['type'] == 'artifact'))
		{
			if(battle_info.combat_units[origin_unit]['side'] != side)
			{
				old_side = 'side_' + battle_info.combat_units[origin_unit]['side'];
			}
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'slot_' + (battle_info.combat_units[origin_unit]['slot'] + ' combat_unzoom ' + old_side), true);
			temp_slot_2 = 'slot_' + (battle_info.combat_units[origin_unit]['slot'] + ' combat_unzoom ' + old_side);
		}
		else
		{
			var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot, true);
		}
		
		timeout_key ++;
		var temp_slot = battle_info.combat_units[next_combat_unit_id]['slot'];

		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container').append(parsed_unit);
			$('.unit_id_' + next_combat_unit_id).removeClass('side_' + side);
			$('.unit_id_' + next_combat_unit_id).addClass(old_side);
		},total_timeout);
		timeout_key ++;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			var temp_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
			var temp_side = side + 0;
			var temp_hand_slot_id = battle_info['deck_' + side][origin_id]['hand_slot_id'] + 0;
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side + '.hand_slot_id_' + temp_hand_slot_id).each(function(){
					this.remove();	
				});
			},total_timeout);
			battle_info['deck_' + side][origin_id]['status'] = 'in_play';
		}

		all_timeouts[timeout_key] = setTimeout(function(){
			$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
			$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
			$('.unit_id_' + next_combat_unit_id).removeClass(temp_slot_2);
			$('.unit_id_' + next_combat_unit_id).removeClass(old_side);
			$('.unit_id_' + next_combat_unit_id).addClass('side_' + side);
			$('.unit_id_' + next_combat_unit_id).addClass('slot_' + temp_slot);	
		},total_timeout + 150);
		
		check_visible_skills(next_combat_unit_id);
		update_passive_effects(next_combat_unit_id);
		total_timeout += 1000 * battle_speed;
		if(battle_info.combat_units[origin_unit] != undefined){
			eachoa(battle_info.combat_units[origin_unit]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['played_unit']) == true)
				{
					process_ability(origin_unit, all_abilities[ability_key], ability_level, next_combat_unit_id, undefined, 'played_unit');
				}
			});
		}
		check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', next_combat_unit_id);
		check_ability_procs(side, 'unit_card_played', next_combat_unit_id);
		if(side == 2)
		{
			check_quests(all_available_cards[card_id]['type'] + '_card_played');
			add_battle_stats(all_available_cards[card_id]['type'] + '_card_played');
			eachoa(all_available_cards[card_id]['subtypes'], function(subtype_key, current_subtype){
				check_quests(current_subtype + '_card_played');
			});
		}
		if(battle_info.combat_units[next_combat_unit_id] != undefined)
		{
			eachoa(battle_info.combat_units[next_combat_unit_id]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['on_play']) == true)
				{
					if(true || battle_info.combat_units[next_combat_unit_id]['used_ability'] == undefined || battle_info.combat_units[next_combat_unit_id]['used_ability'] == false)
					{
						total_timeout += 1000 * battle_speed;
					}
					if(battle_info.combat_units[next_combat_unit_id] != undefined)
					{
						process_ability(next_combat_unit_id, all_abilities[ability_key], ability_level, undefined, undefined, 'on_play');
					}
				}
			});
		}

		if(battle_info['deck_' + side][origin_id] != undefined && battle_info['deck_' + side][origin_id]['status'] == 'hand'){played_card = false;}
		
	}
	return played_card;
}

function play_action_card(side, card_id, origin_id, forced_play){
	var played_card = false;
	var free_slot = -10;

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = create_combat_unit(all_available_cards[card_id], side);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['side'] = side;
		battle_info.combat_units[next_combat_unit_id]['origin_side'] = side;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = origin_id;
		battle_info.combat_units[next_combat_unit_id]['card_type'] = card_id;
		battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		battle_info.combat_units[next_combat_unit_id]['used_ability'] = false;
		battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];

		played_card = true;

		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
		}
		var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot);
		
		var prev_total_timeout = total_timeout + 0;
		var show_spell_cast = false;
		
		//total_timeout += 100 * battle_speed;

		total_timeout += 1500 * battle_speed;

		check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_preplayed', next_combat_unit_id);

		//total_timeout -= 500 * battle_speed;

		var any_effect_fired = false;
		var spell_destroyed = false;
		if(battle_info.combat_units[next_combat_unit_id] != undefined)
		{
			any_effect_fired = process_single_unit(next_combat_unit_id, true);
		}
		else
		{
			spell_destroyed = true;
			any_effect_fired = true;
		}

		if(any_effect_fired == true || forced_play != undefined)
		{
			check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_willbeplayed', next_combat_unit_id);
			var temp_hand_slot = 0;
			if(origin_id != undefined)
			{
				temp_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
			}
			var temp_side = side + 0;
			if(battle_info['deck_' + side][origin_id] != undefined && battle_info.combat_units[next_combat_unit_id] != undefined)
			{
				battle_info['deck_' + side][origin_id]['status'] = 'grave';
				check_ability_procs('deck_' + side, 'moved_to_grave', origin_id);
			}
			
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.hand_slot_' + origin_hand_slot + '.side_' + temp_side).remove();
				$('.battle_container').append(parsed_unit);
				setTimeout(function(){
					$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
					$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
				},100);
			},prev_total_timeout);
			total_timeout += 500 * battle_speed;
			if(battle_info.combat_units[next_combat_unit_id] != undefined && total_timeout < (prev_total_timeout + (5000 * battle_speed)))
			{
				total_timeout = (prev_total_timeout + (5000 * battle_speed));
			}
			if(battle_info.combat_units[next_combat_unit_id] != undefined)
			{
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .unit_id_' + next_combat_unit_id).remove();
				},total_timeout);
				total_timeout += 500 * battle_speed;
			}
			if(spell_destroyed == false)
			{
				check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', origin_id);
				if(side == 2)
				{
					check_quests(all_available_cards[card_id]['type'] + '_card_played');
					add_battle_stats(all_available_cards[card_id]['type'] + '_card_played');
					eachoa(all_available_cards[card_id]['subtypes'], function(subtype_key, current_subtype){
						check_quests(current_subtype + '_card_played');
					});
				}
			}
		}
		else
		{
			total_timeout = prev_total_timeout + 0;
		}

		/*if(battle_info.combat_units[next_combat_unit_id] == undefined)
		{
			any_effect_fired = false;
		}*/

		delete battle_info.combat_units[next_combat_unit_id];
	}
	return any_effect_fired;
}

function play_artifact_card(side, card_id, origin_id, forced_play){

	var played_card = false;

	forced_play = true;

	var free_slot = find_free_artifact_slot(side);

	if(free_slot != false && combat_alive == true)
	{
		highest_unit_id++;
		var next_combat_unit_id = highest_unit_id;
		battle_info.combat_units[next_combat_unit_id] = create_combat_unit(all_available_cards[card_id], side);
		battle_info.combat_units[next_combat_unit_id]['slot'] = free_slot;
		battle_info.combat_units[next_combat_unit_id]['side'] = side;
		battle_info.combat_units[next_combat_unit_id]['origin_side'] = side;
		battle_info.combat_units[next_combat_unit_id]['unit_id'] = next_combat_unit_id;
		battle_info.combat_units[next_combat_unit_id]['card_id'] = origin_id;
		battle_info.combat_units[next_combat_unit_id]['card_type'] = card_id;
		battle_info.combat_units[next_combat_unit_id]['acted_this_turn'] = 0;
		battle_info.combat_units[next_combat_unit_id]['used_ability'] = false;
		battle_info.combat_units[next_combat_unit_id]['current_health'] = battle_info.combat_units[next_combat_unit_id]['health'];

		played_card = true;

		var origin_hand_slot = 0;
		if(battle_info['deck_' + side][origin_id] != undefined)
		{
			origin_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'];
		}
		var parsed_unit = parse_combat_unit(battle_info.combat_units[next_combat_unit_id], 'hand_card fake_hand_slot_' + origin_hand_slot);
		
		var prev_total_timeout = total_timeout + 0;
		
		total_timeout += 100 * battle_speed;

		var any_effect_fired = false;
		//any_effect_fired = process_single_unit(next_combat_unit_id, true);

		if(any_effect_fired == true || forced_play != undefined)
		{
			var temp_hand_slot = 0;
			if(origin_id != undefined)
			{
				temp_hand_slot = battle_info['deck_' + side][origin_id]['hand_slot'] + 0;
			}
			var temp_side = side + 0;
			if(battle_info['deck_' + side][origin_id] != undefined)
			{
				battle_info['deck_' + side][origin_id]['status'] = 'in_play';
			}
			
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.hand_slot_' + temp_hand_slot + '.side_' + temp_side).remove();
				$('.battle_container').append(parsed_unit);
				setTimeout(function(){
					$('.unit_id_' + next_combat_unit_id).removeClass('hand_card');
					$('.unit_id_' + next_combat_unit_id).removeClass('fake_hand_slot_' + origin_hand_slot);
				},100);
			},prev_total_timeout);
			//total_timeout += 500 * battle_speed;
			if(total_timeout < (prev_total_timeout + 100))
			{
				total_timeout = (prev_total_timeout + 100);
			}
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				//$('.battle_container .unit_id_' + next_combat_unit_id).remove();
			},total_timeout);
			eachoa(battle_info['combat_units'], function(unit_id, unit){
				if(unit['type'] == 'artifact' && unit['side'] == side && unit_id != next_combat_unit_id)
				{
					//check_unit_alive(unit_id, undefined, true);
					/*delete battle_info['combat_units'][unit_id];
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container .unit_id_' + unit_id).remove();
					},total_timeout);*/
				}
			});
			setTimeout(function(){
				$('.unit_id_' + next_combat_unit_id).addClass('placed');
			},total_timeout);
			total_timeout += 500 * battle_speed;
			check_ability_procs(side, all_available_cards[card_id]['type'] + '_card_played', origin_id);
			if(side == 2)
			{
				check_quests(all_available_cards[card_id]['type'] + '_card_played');
				add_battle_stats(all_available_cards[card_id]['type'] + '_card_played');
				eachoa(all_available_cards[card_id]['subtypes'], function(subtype_key, current_subtype){
					check_quests(current_subtype + '_card_played');
				});
			}
			eachoa(battle_info.combat_units[next_combat_unit_id]['abilities'], function(ability_key, ability_level){
				if(match_array_values(all_abilities[ability_key]['proc'], ['on_play']) == true)
				{
					if(true || battle_info.combat_units[next_combat_unit_id]['used_ability'] == undefined || battle_info.combat_units[next_combat_unit_id]['used_ability'] == false)
					{
						total_timeout += 1000 * battle_speed;
					}
					process_ability(next_combat_unit_id, all_abilities[ability_key], ability_level, undefined, undefined, 'on_play');
				}
			});
		}

		//delete battle_info.combat_units[next_combat_unit_id];
		return true;
	}
	return false;
}

function find_free_artifact_slot(side){
	var free_slot = false;
	var all_free_slots = {};

	for(var slot = -5;slot <= -1;slot++)
	{
		var this_slot_free = check_slot_free(slot, side);
		if(this_slot_free == true)
		{
			all_free_slots[slot] = slot;
		}
	}

	free_slot = pick_left_most_slot(all_free_slots);

	return free_slot;
}

function find_free_slot(side, card_id, forced_safe_slot, forced_placement, opposing_type, origin_id, filters){

	var free_slot = false;
	var all_free_slots = {};
	var current_card_info = all_available_cards[card_id];

	if(current_card_info['type'] != 'artifact')
	{
		for(var slot = 1;slot <= 5;slot++)
		{
			var this_slot_free = check_slot_free(slot, side);
			if(this_slot_free == true)
			{
				all_free_slots[slot] = slot;
			}
		}
	}
	else
	{
		for(var slot = -5;slot <= -1;slot++)
		{
			var this_slot_free = check_slot_free(slot, side);
			if(this_slot_free == true)
			{
				all_free_slots[slot] = slot;
			}
		}
	}
	

	if(forced_safe_slot == undefined && current_card_info['safe_slot'] != undefined && current_card_info['safe_slot'] == true)
	{
		all_free_slots = filter_free_slots_by_safe(all_free_slots, opposing_type);
	}

	if(forced_safe_slot == undefined && current_card_info['safe_slot'] != undefined && current_card_info['safe_slot'] == false)
	{
		all_free_slots = filter_free_slots_by_not_safe(all_free_slots, opposing_type);
	}

	if(forced_safe_slot != undefined && forced_safe_slot == true)
	{
		all_free_slots = filter_free_slots_by_safe(all_free_slots, opposing_type);
	}

	if(forced_safe_slot != undefined && forced_safe_slot == false)
	{
		all_free_slots = filter_free_slots_by_not_safe(all_free_slots, opposing_type);
	}

	if(filters != undefined)
	{
		eachoa(filters, function(slot_filter, slot_filter_value){
			if(slot_filter == 'has_adjacent_structure' && slot_filter_value == true)
			{
				all_free_slots = filter_free_slots_by_has_adjacent(all_free_slots, 'structure', origin_id);
			}
			if(slot_filter == 'has_adjacent_creature' && slot_filter_value == true)
			{
				all_free_slots = filter_free_slots_by_has_adjacent(all_free_slots, 'creature', origin_id);
			}
			if(slot_filter == 'opposing_structure')
			{
				all_free_slots = filter_free_slots_by_opposing(all_free_slots, 'structure', origin_id, slot_filter_value);
			}
		});
	}

	if(count_object(all_free_slots) > 0)
	{
		if(forced_placement == undefined)
		{
			if(current_card_info['placement'] == undefined || current_card_info['placement'] == 'left')
			{
				free_slot = pick_left_most_slot(all_free_slots);
			}

			if(current_card_info['placement'] != undefined && current_card_info['placement'] == 'right')
			{
				free_slot = pick_right_most_slot(all_free_slots);
			}

			if(current_card_info['placement'] != undefined && current_card_info['placement'] == 'random')
			{
				free_slot = pick_random_slot(all_free_slots);
			}
			
		}
		else
		{
			if(forced_placement == 'right')
			{
				free_slot = pick_right_most_slot(all_free_slots);
			}
			if(forced_placement == 'left')
			{
				free_slot = pick_left_most_slot(all_free_slots);
			}
			if(forced_placement == 'random')
			{
				free_slot = pick_random_slot(all_free_slots);
			}
			if(forced_placement == 'furthest')
			{
				free_slot = pick_furthest_slot(all_free_slots, origin_id);
			}
			if(forced_placement == 'adjacent_of_origin')
			{
				free_slot = pick_adjacent_slot(all_free_slots, origin_id);
			}
			if(forced_placement == 'origin_old_slot')
			{
				free_slot = pick_origin_old_slot(all_free_slots, origin_id);
			}
			if(forced_placement == 'opposing')
			{
				if(origin_id == undefined || battle_info['combat_units'][origin_id] == undefined)
				{
					free_slot = false;
				}
				else
				{
					//console.log(battle_info['combat_units'][origin_id]);
					if(all_free_slots[battle_info['combat_units'][origin_id]['slot']] == undefined)
					{
						free_slot = false;
					}
					else
					{
						free_slot = battle_info['combat_units'][origin_id]['slot'];
					}
				}
			}
		}
	}

	return free_slot;
}

function filter_free_slots_by_opposing(all_slots, unit_type, origin_id, has_it)
{
	eachoa(all_slots, function(useless_key, slot_id){
		var has_opposing_type = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['slot'] == slot_id && (unit_type == undefined || unit_type == unit_info['type']))
			{
				has_opposing_type = true;
			}
		});
		if(has_opposing_type == has_it)
		{
			delete all_slots[useless_key];
		}
	});
	return all_slots;
}

function filter_free_slots_by_has_adjacent(all_slots, unit_type, origin_id)
{
	eachoa(all_slots, function(useless_key, slot_id){
		var has_adjacent_type = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if((unit_info['slot'] == slot_id + 1 || unit_info['slot'] == slot_id - 1) && (unit_type == undefined || unit_type == unit_info['type']) && (origin_id == undefined || origin_id != unit_info['unit_id']) && unit_info['side'] == battle_info['combat_units'][origin_id]['side'])
			{
				has_adjacent_type = true;
			}
		});
		if(has_adjacent_type == false)
		{
			delete all_slots[useless_key];
		}
	});
	return all_slots;
}

function check_slot_free(slot, side){
	var this_slot_free = true;
	eachoa(battle_info.combat_units, function(unit_id, unit_info){
		var unit_health = 0;
		if(unit_info['current_health'] != undefined && unit_info['current_health'] > 0 && unit_info['dead'] == undefined)
		{
			unit_health += unit_info['current_health'];
		}
		if(unit_info['temp_health'] != undefined && unit_info['temp_health'] > 0 && unit_info['dead'] == undefined)
		{
			unit_health += unit_info['temp_health'];
		}
		if(unit_info['side'] == side && unit_info['slot'] == slot && (unit_health > 0 || unit_info['health'] == false) && unit_info['dead'] == undefined)
		{
			this_slot_free = false;
		}
	});
	return this_slot_free;
}

function filter_free_slots_by_safe(all_slots, opposing_type){

	eachoa(all_slots, function(useless_key, slot_id){
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['slot'] == slot_id && (opposing_type == undefined || opposing_type == unit_info['type']))
			{
				delete all_slots[useless_key];
			}
		});
	});

	return all_slots;
}

function filter_free_slots_by_not_safe(all_slots, opposing_type){
	eachoa(all_slots, function(useless_key, slot_id){
		var found_opponent = false;
		eachoa(battle_info.combat_units, function(unit_id, unit_info){
			if(unit_info['slot'] == slot_id && (opposing_type == undefined || opposing_type == unit_info['type']) && unit_info['current_health'] > 0)
			{
				found_opponent = true;
			}
		});
		if(found_opponent == false)
		{
			delete all_slots[useless_key];
		}
	});

	return all_slots;
}

function pick_left_most_slot(all_slots){
	var left_most_slot = false;

	eachoa(all_slots, function(useless_key, slot_id){
		if(left_most_slot == false || slot_id < left_most_slot)
		{
			left_most_slot = slot_id;
		}	
	});

	return left_most_slot;
}

function pick_right_most_slot(all_slots){
	var right_most_slot = false;

	eachoa(all_slots, function(useless_key, slot_id){
		if(right_most_slot == false || slot_id > right_most_slot)
		{
			right_most_slot = slot_id;
		}	
	});

	return right_most_slot;
}

function pick_furthest_slot(all_slots, origin_id){
	var furthest_slot = false;
	var origin_slot = 0;
	if(battle_info['combat_units'][origin_id] != undefined)
	{
		origin_slot = battle_info['combat_units'][origin_id]['slot'];
	}
	var biggest_distance = 0;

	eachoa(all_slots, function(useless_key, slot_id){
		var this_distance = slot_id - origin_slot;
		if(this_distance < 0){this_distance*=-1;}
		if(this_distance >= biggest_distance)
		{
			furthest_slot = slot_id;
			biggest_distance = this_distance + 0;
		}	
	});

	return furthest_slot;
}

function pick_random_slot(all_slots){
	var random_slot = false;

	random_slot = all_slots[get_random_key_from_object(all_slots)];

	return random_slot;
}

function pick_adjacent_slot(all_slots, unit_id){
	var adjacent_slot = false;
	var origin_slot = battle_info['combat_units'][unit_id]['slot'];

	eachoa(all_slots, function(free_slot_id, slot){
		if(slot != origin_slot - 1 && slot != origin_slot + 1)
		{
			delete all_slots[free_slot_id];
		}
	});
	if(count_object(all_slots) > 0)
	{
		adjacent_slot = all_slots[get_random_key_from_object(all_slots)];
	}

	return adjacent_slot;
}

function pick_origin_old_slot(all_slots, unit_id){
	var origin_old_slot = false;
	var origin_slot = false;
	if(battle_info['combat_units'][unit_id]['old_slot'] != undefined)
	{
		origin_slot = battle_info['combat_units'][unit_id]['old_slot'];
	}

	eachoa(all_slots, function(free_slot_id, slot){
		if(slot != origin_slot)
		{
			delete all_slots[free_slot_id];
		}
	});
	if(count_object(all_slots) > 0)
	{
		origin_old_slot = all_slots[get_random_key_from_object(all_slots)];
	}

	return origin_old_slot;
}

function reduce_all_hand_times(side){

	var adjusted_any = false;
/*	for(t=1;t<=2;t++){*/
		eachoa(battle_info['deck_' + side], function(card_id, card_info){
			if(card_info['status'] == 'hand' && card_info['time_left'] > 0 && combat_alive == true)
			{
				adjusted_any = true;
				card_info['time_left'] -= 1;
				var temp_hand_slot = card_info['hand_slot'] + 0;
				var temp_time_left = card_info['time_left'] + 0;
				var temp_t = side + 0;
				timeout_key ++;
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.hand_slot_' + temp_hand_slot + '.side_' + temp_t + ' .card_time').html(temp_time_left);
				},total_timeout);
			}
		});
	/*}*/

	if(adjusted_any == true && combat_alive == true)
	{
		total_timeout += 500 * battle_speed;
	}
};

function add_card_to_combat_deck(side, card_id, card_status){
	if(all_available_cards[card_id] != undefined)
	{
		var deck = battle_info['deck_' + side];
		var new_card_id = get_highest_key_in_object(deck) + 1;

		deck[new_card_id] = {
							card_id: 	card_id,
							status: 	'deck',
							time_left: 	all_available_cards[card_id]['time']
		}
		if(card_status == 'grave')
		{
			deck[new_card_id]['status'] = 'grave';
		}
		update_deck_counts();
		if(card_status == 'hand')
		{
			draw_card(side, new_card_id);
		}
		else
		{
			total_timeout += 250 * battle_speed;
		}
	}
}

function draw_card(side, specific_card_id, card_type, damage_on_fail, show_drawn){
	if(show_drawn == undefined){show_drawn = true;}
	var deck = battle_info['deck_' + side];
	var deck_card_count = count_deck_cards(deck, card_type);
	var chosen_card_number = Math.ceil(Math.random() * deck_card_count);
	var drew_card = false;
	var first_free_hand_slot = get_first_free_hand_slot(deck);
	var chosen_card_time = 0;
	var chosen_card_id = false;

	hand_slot_id += 1;

	if(first_free_hand_slot != false && deck_card_count > 0 && combat_alive == true)
	{

		eachoa(deck, function(deck_card_id, deck_card){
			if((deck_card['status'] == 'deck' || specific_card_id != undefined) && (card_type == undefined || all_available_cards[deck_card['card_id']]['type'] == card_type))
			{
				chosen_card_number--;
				if(((chosen_card_number == 0 && specific_card_id == undefined) || (specific_card_id != undefined && deck_card_id == specific_card_id)) && drew_card == false)
				{
					chosen_card_id = deck_card_id;
					if(all_available_cards[deck_card['card_id']]['abilities']['righthand'] != undefined){first_free_hand_slot = get_last_free_hand_slot(deck);}
					deck_card['status'] = 'hand';
					deck_card['hand_slot'] = first_free_hand_slot;
					deck_card['time_left'] = all_available_cards[deck_card['card_id']]['time'];
					deck_card['hand_slot_id'] = hand_slot_id;
					
					var parsed_hand_card = parse_hand_card(side, deck_card_id, show_drawn, hand_slot_id);
					timeout_key ++;
					all_timeouts[timeout_key] = setTimeout(function(){
						$('.battle_container').append(parsed_hand_card);
						all_timeouts[timeout_key] = setTimeout(function(){
							$('.hand_card.hand_slot_' + first_free_hand_slot).removeClass('just_drawn');
						},50);
					},total_timeout);
					drew_card = true;
					chosen_card_time = all_available_cards[deck_card['card_id']]['time'];
				}
			}
		});

		if(drew_card == true)
		{
			update_deck_counts();
			if(chosen_card_time > 0)
			{
				total_timeout += 500 * battle_speed;
			}
			else
			{
				total_timeout += 500;
			}
		}
		if(chosen_card_id != false && show_drawn == true)
		{
			check_ability_procs(side, 'card_drawn', chosen_card_id, []);
		}
	}
	if(deck_card_count == 0 && combat_alive == true && damage_on_fail != undefined)
	{
		receive_damage(side, undefined, damage_on_fail,[]);
	}
}

function parse_hand_card(side, deck_card_id, just_drawn, hand_slot_id){
	var deck = battle_info['deck_' + side];
	var card_info = deck[deck_card_id];
	var parsed_card = '';
	var just_drawn_class = '';
	var card_base_info = all_available_cards[card_info['card_id']];
	if(just_drawn != undefined && just_drawn == true)
	{
		just_drawn_class = 'just_drawn';
	}
	var show_detail = '';
	if(side == 2 || test_mode == true)
	{
		show_detail = 'onclick="show_card_details(\'' + card_info['card_id'] + '\')"';
	}

	var hand_card_back = '';

	/*if(side == 2 && gamedata['hand_card_back'] != undefined)
	{
		hand_card_back = 'background-image:url(images/' + gamedata['hand_card_back'] + ')';
	}*/
	var card_back_used = false;
	parsed_card += 	'<div class="card hand_card hand_slot_' + card_info['hand_slot'] + ' side_' + side + ' ' + just_drawn_class + ' hand_slot_id_' + hand_slot_id + '" ' + show_detail + ' style="' + hand_card_back + '">';
	
	

	if(side == 2 && gamedata['hand_card_back'] != undefined && gamedata['hand_card_back'] != '')
	{
		card_back_used = true;
		parsed_card += '<div class="hand_card_back" style="background-image:url(images/' + gamedata['hand_card_back'] + ')"></div>';
	}

	if(side == 1 && enemy_card_back != undefined && enemy_card_back != '')
	{
		card_back_used = true;
		parsed_card += '<div class="hand_card_back" style="background-image:url(images/' + enemy_card_back + ')"></div>';
	}

	if(gamedata['show_hand_colors'] == undefined || gamedata['show_hand_colors'] == true || true)
	{
		if(count_object(card_base_info['color']) > 1)
		{
			eachoa(card_base_info['color'], function(useless_key, color){
				parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
			});
		}
		else
		{
			parsed_card += 	'<div class="card_color color_' + card_base_info['color'][0] + '"></div>';
		}
	}

	if(card_back_used == false || true)
	{
		
	}
	//parsed_card += 		'<div class="card_color color_' + card_base_info['color'] + '"></div>';
	parsed_card += 		'<div class="card_time">' + card_info['time_left'] + '</div>';
	if(side == 2 /*|| test_mode == true*/)
	{
		var longest_word = findLongestWord(card_base_info['name']);
		var card_name_size = 13;
		if(longest_word > 8)
		{
			card_name_size = 13 * (8 / longest_word);
		}
		parsed_card += 		'<div class="card_name" style="font-size:' + card_name_size + 'px">' + card_base_info['name'] + '</div>';
	}
	parsed_card += 	'</div>';

	return parsed_card;
}

function show_unit_details(side, slot){
	var unit_to_show = '';
	$.each($('.unit.slot_' + slot + '.side_' + side), function(div_id, div_info){
		var current_card = div_info.getAttribute('data-card_type');
		if(all_available_cards[current_card] != undefined)
		{
			unit_to_show = current_card;
		}
	});
	
	if(unit_to_show != '')
	{
		eachoa(battle_info['combat_units'], function(unit_id, unit_info){
			if(unit_info['side'] == side && unit_info['slot'] == slot)
			{
				unit_to_show = unit_info['card_type'];
			}
		});
	}
	if(unit_to_show != '')
	{
		if(slot == 0)
		{
			show_card_details(unit_to_show, true);
			pause_game();
		}
		else
		{
			show_card_details(unit_to_show);
			pause_game();
		}
	}
}

function get_first_free_hand_slot(deck){
	var found_free_slot = false;
	for(var t=1;t<11;t++){
		var this_slot_free = true;
		if(found_free_slot == false){
			eachoa(deck, function(deck_card_id, deck_card_info){
				if(deck_card_info['status'] == 'hand' && deck_card_info['hand_slot'] != undefined && deck_card_info['hand_slot'] == t)
				{
					this_slot_free = false;
				}	
			});
		}
		else
		{
			this_slot_free = false;
		}
		if(this_slot_free == true)
		{
			found_free_slot = t;
		}
	}
	return found_free_slot;
}

function get_last_free_hand_slot(deck){
	var found_free_slot = false;
	for(var t=10;t>0;t--){
		var this_slot_free = true;
		if(found_free_slot == false){
			eachoa(deck, function(deck_card_id, deck_card_info){
				if(deck_card_info['status'] == 'hand' && deck_card_info['hand_slot'] != undefined && deck_card_info['hand_slot'] == t)
				{
					this_slot_free = false;
				}	
			});
		}
		else
		{
			this_slot_free = false;
		}
		if(this_slot_free == true)
		{
			found_free_slot = t;
		}
	}
	return found_free_slot;
}


function clear_all_timeouts(){
	eachoa(all_timeouts, function(timeout_id, useless_data){
		clearTimeout(all_timeouts[timeout_id]);
		delete all_timeouts[timeout_id];
	});
	clearTimeout(next_turn_timeout);
	clearTimeout(next_action_timeout);
}

function set_all_enemy_cards(card_id){
	eachoa(battle_info.deck_1, function(card_key, card_info){
		card_info['card_id'] = card_id;
	});
}

function update_wins_losses(wins, losses, king){
	if(king == undefined)
	{
		$.post("ajax.php",
		{
			data: 			'update_wins_losses',
			deck_id: 		arena_deck_id,
			wins: 			wins,
			losses: 		losses
		},
		function(result){
		});
	}
	else
	{
		console.log(gamedata['account_id']);
		$.post("ajax.php",
		{
			data: 			'update_wins_losses',
			current_id: 	gamedata['account_id'],
			deck_id: 		arena_deck_id,
			wins: 			wins,
			losses: 		losses,
			
		},
		function(result){
			console.log(result);
		});
	}
}

function resign_combat(){
	clear_all_timeouts();
	$('.projectile').remove();
	if(endless_waves == true)
	{
		current_reward_origin = 'waves';
		current_reward_text = 'You resigned at wave ' + (endless_wave_count) + '...';
		show_content('current_rewards');
	}
	else
	{
		gamedata['battles_lost']++;
		gamedata['summon_min_power'] *= 0.9;
		saveToLocalStorage();
		show_content('summon');
	}
	
}

function end_combat(count_as_loss){
	if(count_as_loss != undefined && count_as_loss == true)
	{
		gamedata['battles_lost']++;
		gamedata['summon_min_power'] *= 0.9;
		saveToLocalStorage();
	}
	clear_all_timeouts();
	$('.projectile').remove();
	if(current_battle_type == 'arena_battle')
	{
		//update_wins_losses(1, 0);
	}
	if(current_battle_type == 'king_of_the_hill')
	{
		//update_wins_losses(1, 0);
	}
	if(current_battle_type == 'random')
	{
		if(map_hero != undefined && all_available_cards[map_hero] != undefined)
		{
			show_content('map');
		}
		else
		{
			show_content('random_battles');
		}
	}
	if(current_battle_type == 'summoned')
	{
		show_content('summon');
	}
}

function pause_game(){
	//game_paused = true;
	//ready_to_resume = false;
}

function check_ready_to_resume(){
	if(game_paused == true)
	{
		game_paused = false;
		if(ready_to_resume == true && combat_alive == true){
			process_next_turn();
		}
	}
}

function process_player_combat_boosts(){
	if(gamedata['combat_boosts'] != undefined){

		gamedata['combat_boosts'] = sortObj(gamedata['combat_boosts']);

		eachoa(gamedata['combat_boosts'], function(card_id, amount){
			if(amount > 0)
			{
				if(all_available_cards[card_id]['type'] == 'creature' || all_available_cards[card_id]['type'] == 'structure' || all_available_cards[card_id]['type'] == 'object')
				{
					play_unit_card(2, card_id);
				}
				if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'consumable')
				{
					play_action_card(2, card_id);
				}
				if(all_available_cards[card_id]['type'] == 'artifact')
				{
					play_artifact_card(2, card_id);
				}

				gamedata['combat_boosts'][card_id] -= 1;
			}
		});
		saveToLocalStorage();
	}
}

function process_enemy_combat_boosts(){
	if(battle_info['enemy_combat_boosts'] != undefined){
		
		eachoa(battle_info['enemy_combat_boosts'], function(card_id, amount){
			if(amount > 0)
			{
				for (var i = amount - 1; i >= 0; i--) {
					play_action_card(1, card_id, undefined, true);
				};
			}
		});
	}
}

var projectile_count = 0;
function create_projectile(origin_id, target_id, projectile_id, avoided, target_type, side, amount, color, forced_time, big){
	if(battle_info['combat_units'][origin_id] != undefined && (battle_info['combat_units'][target_id] != undefined || target_type != undefined))
	{
		if(amount == undefined){amount = '';}
		if(color != undefined){color = 'style="color:' + color + '"';}else{color = '';}
		if(forced_time == undefined){forced_time = 1000;}
		var this_forced_time = forced_time * battle_speed;
		if(this_forced_time < 500)
		{
			this_forced_time  = 500;
		}
		projectile_count++;
		var temp_projectile_count = projectile_count + 0;
		var origin_unit = battle_info['combat_units'][origin_id];
		var origin_slot = origin_unit['slot'] + '';
		var origin_side = origin_unit['side'] + '';
		if(target_type == undefined)
		{
			var target_unit = battle_info['combat_units'][target_id];
			var target_slot = 'slot_' + target_unit['slot'] + '';
			var target_side = target_unit['side'] + '';
		}
		else
		{
			if(target_type == 'deck' && side != undefined)
			{
				var side_id = 1;
				if(side == 'ally' && origin_side == 2){side_id = 2;}
				if(side == 'enemy' && origin_side == 1){side_id = 2;}
				var target_unit = battle_info['deck_' + side_id][target_id];
				var target_slot = 'hand_card hand_slot_' + target_unit['hand_slot'] + '';
				if(target_unit['status'] != 'hand')
				{
					target_slot = 'hand_card deck_slot';
				}
				var target_side = side_id + '';
			}
			if(target_type == 'deck' && side == undefined)
			{
				var target_slot = target_slot = 'hand_card deck_slot';
				var target_side = origin_side + '';
			}
		}
		var is_big = '';
		if(big != undefined && big == true)
		{
			is_big = ' big ';
		}
		
		var projectile = '<div class="projectile card unit projectile_count_' + temp_projectile_count + ' projectile_' + projectile_id + ' slot_' + origin_slot + ' side_' + origin_side + ' ' + is_big + '"><div class="projectile_text" ' + color + '>' + amount + '</div></div>';
		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
			$('.battle_container').append(projectile);
			
		}, total_timeout - (0/* * battle_speed*/));

		timeout_key ++;
		all_timeouts[timeout_key] = setTimeout(function(){
				$('.projectile_count_' + temp_projectile_count + '').removeClass('slot_' + origin_slot + ' side_' + origin_side);
				$('.projectile_count_' + temp_projectile_count + '').addClass(target_slot + ' side_' + target_side);
			}, total_timeout + ((this_forced_time / 10) * 1));
		
		if(avoided != undefined && avoided == true)
		{
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .projectile_count_' + temp_projectile_count + '').addClass('dead');
			}, total_timeout + ((this_forced_time / 3) * 1));
			timeout_key ++;
			all_timeouts[timeout_key] = setTimeout(function(){
				$('.battle_container .projectile_count_' + temp_projectile_count + '').remove();
			}, total_timeout + (this_forced_time * 1));
		}
		else
		{
			if(target_type == undefined || true)
			{
				all_timeouts[timeout_key] = setTimeout(function(){
					$('.battle_container .projectile_count_' + temp_projectile_count + '').remove();
				}, total_timeout + (this_forced_time * 1));
			}
		}
	}
}

var possible_pickups = {};
var pickup_counter = 0;
var clear_pickup_timers = {};
var last_spawned_pickup = 0;

function spawn_monthly_pickup(){
	if(count_object(pickup_rewards) < 100 && last_spawned_pickup + 1000 < nowint())
	{
		last_spawned_pickup = nowint();
		pickup_counter++;
		var temp_pickup_counter = pickup_counter + 0;
		if(count_object(possible_pickups) < 1)
		{
			possible_pickups = get_all_possible_pickups();
		}
		var pickup_amount = 1;
		var picked_pickup = get_random_key_from_object_based_on_num_value(possible_pickups);
		if(Math.random() < 0.75){picked_pickup = 'scraps';pickup_amount = round_by_percent(get_upgrade_factor('floating_scraps', 'any', true));}
		var from_top = Math.floor((Math.random() * 80) + 10);
		var parsed_pickup = '<div class="pickup pickup_' + pickup_counter + '" style="top:' + from_top + '%" onclick="claim_pickups(' + pickup_counter + ')">' + parse_card(picked_pickup) + '</div>';
		$('.battle_container').append(parsed_pickup);

		pickup_rewards[temp_pickup_counter] = {card_id: picked_pickup, card_amount: pickup_amount};
		clear_pickup_timers[temp_pickup_counter] = setTimeout(function(){
			pickup_rewards = {};
			$('.pickup_' + temp_pickup_counter).remove();
		},15000);
	}
}

function claim_pickups(counter){
	if(pickup_rewards[counter] != undefined)
	{
		if(gamedata['upgrades'] != undefined /*&& do_no_apply_factions == false*/)
		{
			var loot_factor = get_upgrade_factor('loot', [pickup_rewards[counter]['card_id']], true);
			//console.log(loot_factor);
			pickup_rewards[counter]['card_amount'] = round_by_percent(pickup_rewards[counter]['card_amount'] * loot_factor);
		}
		check_quests('claimed_pickup');
		if(all_available_cards[pickup_rewards[counter]['card_id']] != undefined)
		{
			gain_card(pickup_rewards[counter]['card_id'],pickup_rewards[counter]['card_amount']);
		}
		if(pickup_rewards[counter]['card_id'] == 'scraps')
		{
			gamedata['scraps'] += pickup_rewards[counter]['card_amount'];
		}
	}
	/*eachoa(pickup_rewards, function(card_id, card_amount){
		check_quests('claimed_pickup');
		if(all_available_cards[card_id] != undefined)
		{
			gain_card(card_id,card_amount);
		}
		if(card_id == 'scraps')
		{
			gamedata['scraps'] += card_amount;
		}
	});*/
	$('.pickup_' + counter + '').remove();
	delete pickup_rewards[counter];
	clearTimeout(clear_pickup_timers[counter]);
}

function get_all_possible_pickups(){
	var all_possible_pickups = {};
	var month = new Date().getMonth() + 1;
	eachoa(all_available_cards, function(card_id, card_info){
		if(match_array_values(month, card_info['months_available']) && card_info['type'] == 'currency')
		{
			all_possible_pickups[card_id] = 1 / Math.sqrt(card_info['value']);
		}
	});
	all_possible_pickups['peasant'] = 1;
	return all_possible_pickups;
}