var daily_reward_claimable = false;
function show_daily_reward(forced_month){

	var month = new Date().getMonth() + 1;
	var day = new Date().getDate();

	if(forced_month != undefined)
	{
		month = forced_month;
	}

	if(gamedata['daily_rewards'] == undefined)
	{
		gamedata['daily_rewards'] = {};

		gamedata['daily_rewards']['free_picks'] = 0;
		gamedata['daily_rewards']['current_month'] = month;
		gamedata['daily_rewards']['last_claimed'] = day -1;
		saveToLocalStorage();
	}

	if(false && month != gamedata['daily_rewards']['current_month'] && gamedata['daily_rewards']['available_rewards'] != undefined)
	{
		gamedata['daily_rewards']['current_month'] = month;
		gamedata['daily_rewards']['free_picks'] = 0;
		delete gamedata['daily_rewards']['available_rewards'];
		gamedata['daily_rewards']['last_claimed'] = day -1;
		saveToLocalStorage();
	}

	if(gamedata['daily_rewards']['available_rewards'] == undefined || count_object(gamedata['daily_rewards']['available_rewards']) < 18)
	{
		gamedata['daily_rewards']['available_rewards'] = {};
		for(i = 1;i <= 18; i++)
		{
			if(i == 18)
			{
				i = 40;
			}
			var max_value = (i * 8) + 5;
			//console.log(max_value);
			var picked_reward = get_random_reward(max_value, month);
			if(gamedata['daily_rewards']['available_rewards'][i - 1] != undefined && gamedata['daily_rewards']['available_rewards'][i - 1]['reward'] == picked_reward)
			{
				picked_reward = get_random_reward(max_value, month);
			}
			
			/*if(i == 18)
			{
				picked_reward = get_random_reward(i + 50, month);
			}*/
			if(all_available_cards[picked_reward] != undefined)
			{
				var reward_amount = round_by_percent((i * (1 + (i/5))) / all_available_cards[picked_reward]['value']);
				if(reward_amount < 1)
				{
					reward_amount = 1;
				}
				/*if(i <= 17)
				{*/
					gamedata['daily_rewards']['available_rewards'][i] = {reward: picked_reward, amount: reward_amount};
				/*}
				else
				{
					//var reward_amount = Math.floor((i * 5) / all_available_cards[picked_reward]['value']);
					var reward_amount = round_by_percent((i * (1 + (i/1))) / all_available_cards[picked_reward]['value']);
					gamedata['daily_rewards']['available_rewards'][i] = {reward: picked_reward, amount: reward_amount};
				}*/
			}
		}
		saveToLocalStorage();
	}

	$('.daily_reward_content').html('');
	var rewards_left = 0;
	var reward_failed = false;
	$.each(gamedata['daily_rewards']['available_rewards'], function(useless_id, reward_info){
		if(all_available_cards[reward_info['reward']] != undefined)
		{
			var parsed_reward = '';
			var claimed = '';
			rewards_left += reward_info['amount'];
			if(reward_info['amount'] < 1){claimed = ' claimed '}
			parsed_reward += 	'<div class="single_reward ' + claimed + '" onclick="show_card_details(\'' + reward_info['reward'] + '\')">';
			var reward_bg_pos = '';
			if(all_available_cards[reward_info['reward']]['image_position'] != undefined){reward_bg_pos = 'background-position:' + all_available_cards[reward_info['reward']]['image_position'] + ';';}
			parsed_reward += 	'<div class="background" style="background-image:url(images/' + all_available_cards[reward_info['reward']]['image'] + ');' + reward_bg_pos + '"></div>';
			if(reward_info['amount'] > 1)
			{
				parsed_reward += 	'<div class="daily_reward_amount">x' + reward_info['amount'] + '</div>';
			}
			parsed_reward += 	useless_id + '</div>';
			$('.daily_reward_content').append(parsed_reward);
		}
		else
		{
			reward_failed = true;
		}
	});
	
	if((gamedata['daily_rewards']['last_claimed'] != day || gamedata['daily_rewards']['free_picks'] > 0) && rewards_left > 0)
	{
		daily_reward_claimable = true;
		if(gamedata['daily_rewards']['free_picks'] > 0)
		{
			$('.daily_reward_content').append('<div class="claim_daily_reward_button" onclick="claim_daily_reward()">CLAIM (' + gamedata['daily_rewards']['free_picks'] + ')</div>');
		}
		else
		{
			$('.daily_reward_content').append('<div class="claim_daily_reward_button" onclick="claim_daily_reward()">CLAIM</div>');
		}
		
	}
	else
	{
		daily_reward_claimable = false;
	}

	if(reward_failed == true || rewards_left < 1)
	{
		gamedata['daily_rewards']['available_rewards'] = {};
		show_daily_reward();
	}
	
}

function get_random_reward(max_value, month){
	var all_possible_rewards = {};
	//max_value *= 4;
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['value'] <= max_value && ((card_info['value'] > max_value / 20000000 && card_info['pick_chance'] > 0) /*|| (card_info['value'] > max_value / 50 && card_info['months_available'] != undefined && match_array_values([month], card_info['months_available']) == true)*/))
		{
			if(card_info['type'] != 'cardback')
			{
				if(card_info['months_available'] != undefined && match_array_values([month], card_info['months_available']) == true)
				{
					if(card_info['value'] <= (max_value * 2))
					{
						var adjusted_value = (card_info['value'] * 3) / max_value;
						if(adjusted_value < 10)
						{
							adjusted_value = 10;
						}
						all_possible_rewards[card_id] = adjusted_value;
					}
				}
				else
				{
					all_possible_rewards[card_id] = card_info['value'] / max_value;
				}
			}
		}
	});

	var chosen_reward = get_random_key_from_object_based_on_num_value(all_possible_rewards);

	return chosen_reward;
}

function claim_daily_reward(){
	var day = new Date().getDate();
	var claimed_one = false;
	if(gamedata['daily_rewards']['last_claimed'] != day || gamedata['daily_rewards']['free_picks'] > 0)
	{
		if(gamedata['daily_rewards']['last_claimed'] != day)
		{
			gamedata['daily_rewards']['last_claimed'] = day;
		}
		else
		{
			gamedata['daily_rewards']['free_picks'] -= 1;
		}
		
		$.each(gamedata['daily_rewards']['available_rewards'], function(useless_id, reward_info){
			if(reward_info['amount'] > 0 && claimed_one == false)
			{
				current_battle_type = 'daily';
				endless_waves = false;
				fixed_hero = false;
				all_current_rewards = {};

				current_reward_origin = 'daily_reward';
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 		reward_info['reward'],
					reward_amount: 	reward_info['amount'],
				}
				claimed_one = true;
				add_basic_win_rewards(sqr(useless_id) * get_upgrade_factor('summon_reward', 'any', true));
				gamedata['daily_rewards']['available_rewards'][useless_id]['amount'] = 0;
				saveToLocalStorage();
			}
		});
	}
	if(claimed_one == true)
	{
		show_content('current_rewards');
	}
	else
	{
		show_daily_reward();
	}
}