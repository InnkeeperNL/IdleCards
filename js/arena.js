function show_arena(){
	$('.current_arena_container').html('<div class="loading_arena">Loading arena</div>');
	//$('.king_of_the_hill_button').addClass('hidden');
	$('.refresh_button').addClass('hidden');
	
	get_fightable_arena_decks();
}

function show_echoes(){
	$('.current_arena_container').html('<div class="loading_arena">Loading arena</div>');
	//$('.king_of_the_hill_button').addClass('hidden');
	$('.refresh_button').addClass('hidden');
	
	get_fightable_echo_decks();
}

function show_arena_decks(){
	$('.current_arena_decks_container').html('<div class="loading_arena_decks">Loading your decks</div>');

	get_owned_arena_decks();
}

function get_owned_arena_decks(){
	$.post("ajax.php",
	{
		data: 			'get_owned_arena_decks',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		//console.log(result);
		all_owned_decks = JSON.parse(result);

		parse_owned_decks(all_owned_decks);
	});
};

function parse_owned_decks(all_owned_decks){
	if(gamedata['arena_decks_owned'] == undefined)
	{
		gamedata['arena_decks_owned'] = false;
	}
	var parsed_decks = '';
	for (var i = 1; i <= 5; i++) {
		parsed_decks += '<div class="owned_deck_container">';
			var deck_found = false;
			var unclaimed = 0;
			var deck_id = 0;
			var deck_broken = false;
			$.each(all_owned_decks, function(array_key, deck_info){
				if(deck_info['deck_id'] == i)
				{
					if(calculate_scrap_reward(deck_info['wins'], deck_info['losses']) < 2 || deck_info['losses'] > 9)
					{
						deck_broken = true;
					}
					unclaimed = deck_info['unclaimed'];
					deck_id = deck_info['id'];
					deck_info['deck_content'] = JSON.parse(deck_info['deck_content']);
					if(deck_info['deck_content']['hero'] != undefined)
					{
						parsed_decks += '<div class="owned_deck owned_deck_' + i + '">';
						parsed_decks += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_info['deck_content']['hero']]['image'] + ')"></div>';
						parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '</span>';
						parsed_decks += 	'<div class="wins_losses">Rank ' + (parseInt(deck_info['rank']) + 1) + '<br/>Battles: ' + deck_info['wins'] + '<br/>Losses: ' + deck_info['losses'] + '';
							if(deck_info['unclaimed'] > 0)
							{
								parsed_decks += '<br/><br/>Scraps won: ' + (deck_info['unclaimed'] * 2);
							}
							else
							{
							    parsed_decks += '<br/><br/><br/>';
							}

						parsed_decks +=  	'</div>';
						parsed_decks +=  	'<div class="arena_deck_content">';
						$.each(deck_info['deck_content'], function(card_id, card_amount){
							if(card_id != 'hero' && all_available_cards[card_id] != undefined)
							{
								parsed_decks +=  	'<div class="arena_deck_content_line">';
								parsed_decks +=  	card_amount + ' ' + all_available_cards[card_id]['name'];
								parsed_decks +=  	'</div>';
							}
						});
						parsed_decks +=  	'</div>';
						if(deck_broken == true)
						{
							parsed_decks += '<div class="arena_deck_broken">BROKEN</div>';
						}
						parsed_decks += '</div>';
						deck_found = true;
						gamedata['arena_decks_owned'] = true;
					}
					
				}
			});
			if(deck_found == false)
			{
				parsed_decks += '<div class="owned_deck empty_deck owned_deck_' + i + '">EMPTY</div>';
			}
			if(deck_broken == true)
			{
				parsed_decks += '<div class="replace_deck_button replace_now" onclick="replace_deck(' + i + ')">REPLACE</div>';
			}
			else
			{
				parsed_decks += '<div class="replace_deck_button" onclick="replace_deck(' + i + ')">REPLACE</div>';
			}
			if(deck_found == true && unclaimed > 0 && deck_id > 0)
			{
				parsed_decks += '<div class="replace_deck_button" onclick="claim_deck(' + deck_id + ')">CLAIM</div>';
			}
		parsed_decks += '</div>';
	};
	if(count_object(all_owned_decks) > 0 || gamedata['arena_decks_owned'] == false)
	{
		saveToLocalStorage();
		$('.current_arena_decks_container').html(parsed_decks);
	}
	else
	{
		$('.current_arena_decks_container').html('<div class="loading_arena_decks">Failed to load your decks<br/>Please try again later.</div>');
	}
}

function parse_single_fightable_deck(deck_info){
	//console.log(deck_info);

	var deck_content = JSON.parse(deck_info['deck_content']);
	$('.current_arena_container').html('');
	var parsed_single_deck = '';
	if(deck_content['hero'] != undefined)
	{
		parsed_single_deck += '<div class="single_enemy_deck">';
		parsed_single_deck += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_content['hero']]['image'] + ')"></div>';
		parsed_single_deck += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_content['hero']]['name']) + '<br/><i>' + deck_info['name'] + '</i></span>';
		parsed_single_deck += 	'<div class="wins_losses">Rank ' + (parseInt(deck_info['rank']) + 1) + '<br/>' + deck_info['wins'] + ' battles<br/>' + deck_info['losses'] + ' losses';

		parsed_single_deck +=  	'</div>';

		parsed_single_deck += '</div>';
		if(gamedata['scraps'] > 0)
		{
			parsed_single_deck += '<div class="fight_single_deck_button" onclick="fight_deck(' + deck_info['id'] + ')">FIGHT</div>';
		}
		parsed_single_deck +=  	'<div class="single_arena_deck_content">';
		$.each(deck_content, function(card_id, card_amount){
			if(card_id != 'hero' && all_available_cards[card_id] != undefined)
			{
				var parsed_card = parse_card(card_id, card_amount);
				parsed_single_deck +=  	'<div class="single_arena_deck_card">';
				parsed_single_deck +=  	'<div onclick="show_card_details(\'' + card_id + '\',undefined,' + card_amount + ')">' + parsed_card + '</div>';
				parsed_single_deck +=  	'</div>';
			}
		});
		parsed_single_deck +=  	'</div>';
	}
	$('.current_arena_container').html(parsed_single_deck);
}

function replace_deck(deck_id){
	if(gamedata['decks'][gamedata['current_deck']]['hero'] != undefined)
	{
		$('.current_arena_decks_container').html('<div class="loading_arena_decks">Loading your decks</div>');
		$.post("ajax.php",
		{
			data: 			'replace_deck',
			current_id: 	gamedata['account_id'],
			deck_id: 		deck_id,
			deck: 			JSON.stringify(gamedata['decks'][gamedata['current_deck']]),
			card_back: 		gamedata['hand_card_back'],
		},
		function(result){
			console.log(result);
			get_owned_arena_decks();
		});
	}
}

function upload_new_king_of_the_hill(){
	if(gamedata['decks'][gamedata['current_deck']]['hero'] != undefined)
	{
		$.post("ajax.php",
		{
			data: 			'upload_new_king_of_the_hill',
			current_id: 	gamedata['account_id'],
			deck: 			JSON.stringify(gamedata['decks'][gamedata['current_deck']]),
		},
		function(result){
			console.log(result);
		});
	}
}

function show_single_arena_enemy(deck_id){
	//console.log(deck_id);
	$('.current_arena_container').html('<div class="loading_arena_decks">Loading enemy deck.</div>');
	$('#content_arena .menu_button.slim').addClass('hidden');
	$('#content_arena .menu_button.slim.refresh_button').removeClass('hidden');
	$.post("ajax.php",
	{
		data: 			'get_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(JSON.parse(result));
		if(count_object(JSON.parse(result)) > 0)
		{
			all_fightable_decks = JSON.parse(result);
			parse_single_fightable_deck(all_fightable_decks);
			/*$.each(all_fightable_decks, function(useless_key, deck_info){
				if(deck_info['id'] == deck_id)
				{
					parse_single_fightable_deck(deck_info);
				}
			});*/
			
		}
		else
		{
			$('.current_arena_container').html('<div class="loading_arena_decks">Failed to load enemy.<br/>Please try again later.</div>');
			$('.refresh_button').removeClass('hidden');
			setTimeout(function(){
				get_fightable_arena_decks();
			},500);
			
		}
	});
}

function get_fightable_arena_decks(){
	$.post("ajax.php",
	{
		data: 			'get_fightable_arena_decks',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		//console.log(result);
		if(count_object(JSON.parse(result)) > 0)
		{
			all_fightable_decks = JSON.parse(result);
			parse_fightable_decks(all_fightable_decks);
		}
		else
		{
			$('.current_arena_container').html('<div class="loading_arena_decks">Failed to load arena.<br/>Please try again later.</div>');
			$('.refresh_button').removeClass('hidden');
			console.log('failed');
			setTimeout(function(){
				//get_fightable_arena_decks();
			},500);
			
		}
	});
};

function get_fightable_echo_decks(){
	$.post("ajax.php",
	{
		data: 			'get_fightable_echo_decks',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		//console.log(result);
		if(count_object(JSON.parse(result)) > 0)
		{
			all_fightable_decks = JSON.parse(result);
			parse_fightable_decks(all_fightable_decks);
		}
		else
		{
			$('.current_arena_container').html('<div class="loading_arena_decks">Failed to load arena.<br/>Please try again later.</div>');
			$('.refresh_button').removeClass('hidden');
			console.log('failed');
			setTimeout(function(){
				//get_fightable_arena_decks();
			},500);
			
		}
	});
};

function parse_fightable_decks(all_fightable_decks){
	$('#content_arena .menu_button.slim').removeClass('hidden');
	var parsed_decks = '';
	if(gamedata['scraps'] == undefined)
	{
		gamedata['scraps'] = 0;
		saveToLocalStorage();
	}
	var shown_decks = 0;
	var wins_today = 0;
	if(gamedata['wins_today'] == undefined)
	{
		gamedata['wins_today'] = 0;
	}
	if(gamedata['wins_today'] != undefined){wins_today = gamedata['wins_today']};
	if(wins_today > 20){wins_today = 20;}
	$.each(all_fightable_decks, function(array_key, deck_info){
		shown_decks++;
		parsed_decks += '<div class="fightable_deck_container">';
			
			deck_info['deck_content'] = JSON.parse(deck_info['deck_content']);
			//console.log(deck_info);
			if(deck_info['deck_content']['hero'] != undefined)
			{
				if(deck_info['user_id'] != gamedata['account_id'] && (shown_decks < 11 - (wins_today / 4)))
				{
					parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + ' fightable" onclick="fight_deck(' + deck_info['id'] + ')">';
				}
				else
				{
					parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + ' not_fightable">';
				}
				parsed_decks += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_info['deck_content']['hero']]['image'] + ')"></div>';
				if(deck_info['deck_id'] == 6)
				{
					parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '<br/><i>' + deck_info['name'] + '\'s echo</i></span>';
				}
				else
				{
					parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '<br/><i>' + deck_info['name'] + '</i></span>';
				}
				parsed_decks += 	'<div class="wins_losses">Rank ' + (parseInt(deck_info['rank']) + 1) + ': ' + deck_info['wins'] + ' / ' + deck_info['losses'] + '';
				var scrap_reward = calculate_scrap_reward(deck_info['wins'], deck_info['losses']);
				if(scrap_reward == 1)
				{
					parsed_decks += 		'<br/>Bounty: ' + scrap_reward + ' scrap';
				}
				else
				{
					parsed_decks += 		'<br/>Bounty: ' + scrap_reward + ' scraps';
				}
				parsed_decks += 		'<br/>Battle cost: 1 scrap';
				parsed_decks += 	'</div>';
				parsed_decks += '</div>';
				/*if(gamedata['scraps'] > 1 && deck_info['user_id'] != gamedata['account_id'])
				{
					parsed_decks += '<div class="fight_deck_button" onclick="fight_deck(' + deck_info['id'] + ')">FIGHT</div>';
				}*/
				deck_found = true;
			}
			
		parsed_decks += '</div>';
	});

	parsed_decks += '<div class="arena_cost_description">Defeating an enemy rewards the bounty and additional loot.<br/>You currently have ' + numberWithCommas(gamedata['scraps']) + ' scraps<br/>You have won ' + gamedata['wins_today'] + ' battles today</div>';

	$('.current_arena_container').html(parsed_decks);
	//$('.king_of_the_hill_button').removeClass('hidden');
	$('.refresh_button').removeClass('hidden');
	
}

function fight_deck(deck_id){

	$('.current_arena_container').html('<div class="loading_arena">Loading battle</div>');
	//$('.king_of_the_hill_button').addClass('hidden');
	arena_deck_id = deck_id;

	$.post("ajax.php",
	{
		data: 			'get_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(result);
		current_deck = JSON.parse(result);
		var deck_content = JSON.parse(current_deck['deck_content']);
		if(deck_content['hero'] != undefined && gamedata['scraps'] > 0)
		{
			gamedata['scraps'] -= 1;
			saveToLocalStorage();
			arena_reward_amount = calculate_scrap_reward(current_deck['wins'], current_deck['losses']);
			arena_card_back = current_deck['card_back'];
			if(current_deck['deck_id'] == 6)
			{
				show_arena_battle(deck_content, current_deck['name'] + '\'s echo');
			}
			else
			{
				show_arena_battle(deck_content, current_deck['name']);
			}
			
		}
		else
		{
			show_arena();
		}
		//parse_fightable_decks(all_fightable_decks);
	});
}

function fight_king_of_the_hill(deck_id){
	gamedata['last_king_fight'] = new Date();
	$('.current_king_of_the_hill_container').html('<div class="loading_arena">Loading battle</div>');
	$('.recent_kings_container').html('');
	$('.king_rewards_container').html('');
	arena_deck_id = deck_id;

	$.post("ajax.php",
	{
		data: 			'get_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(result);
		current_deck = JSON.parse(result);
		arena_reward_amount = calculate_scrap_reward(current_deck['wins'], current_deck['losses']);
		show_king_of_the_hill_battle(JSON.parse(current_deck['deck_content']), current_deck['name'], current_deck['wins']);
		//parse_fightable_decks(all_fightable_decks);
	});
}

function claim_deck(deck_id){

	$('.current_arena_decks_container').html('<div class="loading_arena_decks">Loading rewards</div>');

	$.post("ajax.php",
	{
		data: 			'claim_deck',
		deck_id: 		deck_id,
	},
	function(result){
		//console.log(result);
		if(result > 0)
		{
			current_reward_origin = 'arena_decks';
			current_reward_text = 'You got some prizes in the arena';
			all_current_rewards = {0:{reward_id:'scraps',reward_amount:result * 2}};
			if((Math.random() * 20) < result)
			{
				all_current_rewards[1] = {reward_id:'arena_shard',reward_amount:1};
			}
			show_content('current_rewards');
			//gain_scraps(result * 2);
		}
		else
		{
			show_arena_decks();
		}
		
	});
}

function calculate_scrap_reward(wins, losses){
	var scrap_reward = Math.floor(((parseInt(wins) + 1) - (parseInt(losses) + 1)) + 5);
	/*if(wins == 0 && losses == 0)
	{
		scrap_reward += 5;
	}*/
	/*if(wins > losses)
	{
		scrap_reward += 2;
	}*/
	/*if(losses == 9 && wins > 0)
	{
		scrap_reward += 10;
	}*/
	if(scrap_reward < 2)
	{
		scrap_reward = 2;
	}
	return scrap_reward;
}

function get_king_of_the_hill(){

	$.post("ajax.php",
	{
		data: 			'king_of_the_hill',
	},
	function(result){
		parse_king_of_the_hill(JSON.parse(result));
	});
}

function get_recent_kings(){

	$.post("ajax.php",
	{
		data: 			'get_recent_kings',
	},
	function(result){
		parse_recent_kings(JSON.parse(result));
	});
}

function get_king_rewards(){

	$.post("ajax.php",
	{
		data: 			'get_king_rewards',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		parse_king_rewards(parseInt(JSON.parse(result)));
	});
}

function show_king_of_the_hill(){
	$('.current_king_of_the_hill_container').html('<div class="loading_king_of_the_hill">Loading king of the hill</div>');
	$('.recent_kings_container').html('');
	$('.king_rewards_container').html('');
	get_king_of_the_hill();
	get_recent_kings();
	get_king_rewards();
}

function parse_king_of_the_hill(deck_info){

	var parsed_decks = '';
	if(gamedata['last_king_fight'] == undefined){gamedata['last_king_fight'] = new Date();}
	if(deck_info != null)
	{
	
		parsed_decks += '<div class="fightable_deck_container">';
		
		deck_info['deck_content'] = JSON.parse(deck_info['deck_content']);
		//console.log(deck_info);
		if(deck_info['deck_content']['hero'] != undefined)
		{
			if(deck_info['user_id'] != gamedata['account_id'])
			{
				parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + '" onclick="fight_deck(' + deck_info['id'] + ')">';
			}
			else
			{
				parsed_decks += '<div class="fightable_deck owned_deck_' + deck_info['id'] + '">';
			}
			parsed_decks += 	'<div class="background" style="background-image:url(images/' + all_available_cards[deck_info['deck_content']['hero']]['image'] + ')"></div>';
			parsed_decks += 	'<span>' + capitalizeFirstLetter(all_available_cards[deck_info['deck_content']['hero']]['name']) + '<br/><i>' + deck_info['name'] + '</i></span>';
			parsed_decks += 	'<div class="wins_losses">Battles: ' + deck_info['wins'] + '';
			
			parsed_decks += 	'</div>';
			parsed_decks += '</div>';
			if(deck_info['user_id'] != gamedata['account_id'])
			{
				var time_to_next_fight = king_battle_timeout - ((new Date().getTime() - new Date(gamedata['last_king_fight']).getTime()) / 1000);
				var next_fight_time = new Date().getTime() + (time_to_next_fight * 1000);
				//console.log(time_to_next_fight);
				if(time_to_next_fight <= 0)
				{
					parsed_decks += '<div class="fight_deck_button" onclick="fight_king_of_the_hill(' + deck_info['id'] + ')">FIGHT</div>';
				}
				else
				{
					parsed_decks += '<div class="fight_deck_button timer" data-complete-time=' + next_fight_time + ' data-complete-function="show_king_of_the_hill">' + toHHMMSS(time_to_next_fight) + '</div>';
				}
			}
		}
			
		parsed_decks += '</div>';
	}
	else
	{
		parsed_decks += '<div class="fightable_deck_container">';
		parsed_decks += '<button class="menu_button king_of_the_hill_button" data-target-content="king_of_the_hill">RELOAD</button>';
		//parsed_decks += '<div class="fight_deck_button" onclick="upload_new_king_of_the_hill()">TAKE THE HILL</div>';
		parsed_decks += '</div>';
	}

	$('.current_king_of_the_hill_container').html(parsed_decks);
}

function parse_recent_kings(all_kings){
	var parsed_kings = 'Recent kings';
	$.each(all_kings, function(king_key, king){
		parsed_kings += '<div class="single_king">';
		parsed_kings += 	'<span class="king_name">' + king['name'] + '</span><br/>';
		parsed_kings += 	'Battles: ' + king['wins']
		parsed_kings += '</div>';
	});

	$('.recent_kings_container').html(parsed_kings);
}

function parse_king_rewards(reward){
	var parsed_rewards = '<span>Gain 25 scraps and 5 arena shards for taking the hill.<br/><br/>Gain 10 scraps for every defensive battle on the hill.</span>';
	if(reward > 0)
	{
		parsed_rewards = '';
		parsed_rewards += '<span>Current rewards:</span><br/>';
		/*if(reward == 1)
		{
			parsed_rewards += 	(reward * 10) + ' scrap';
		}
		else
		{*/
			parsed_rewards += 	(reward * 10) + ' scraps';
		/*}*/
		parsed_rewards += '<div class="claim_king_button" onclick="claim_king()">CLAIM</div>';
	}

	$('.king_rewards_container').html(parsed_rewards);
}

function claim_king(){
	$.post("ajax.php",
	{
		data: 			'claim_king_rewards',
		current_id: 	gamedata['account_id'],
	},
	function(result){
		gain_scraps(parseInt(JSON.parse(result)) * 10);
		show_king_of_the_hill();
	});
}