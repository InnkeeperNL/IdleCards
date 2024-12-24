var current_active_raid = {};
var current_raid_points = 0;
var current_raid_id = 0;

function show_raids(){
	$('.refresh_raids_button').addClass('hidden');
	$('#content_raids .main_new_raid_button').removeClass('hidden');
	$('#content_raids .main_join_raid_button').removeClass('hidden');
	$('#content_raids .raids_content').removeClass('full');
	get_active_raids_list();
};

function get_active_raids_list()
{
	if(gamedata['account_id'] != undefined)
	{
		$('.raids_content').html('<div class="loading_arena_decks">Loading active raids</div>');
		$.post("ajax.php",
		{
			data: 			'get_active_raids',
			current_id: 	gamedata['account_id'],
		},
		function(result){
			if(count_object(JSON.parse(result)) > 0)
			{
				all_active_raids = JSON.parse(result);
				parse_active_raids_list(all_active_raids);
			}
			else
			{
				$('.raids_content').html('<div class="loading_arena_decks">No active raids found.</div>');
			}

		});
	}

}

function parse_active_raids_list(full_list){
	var all_parsed_raids = '';

	$.each(full_list, function(useless_id, raid_info){
		if(raid_info['points_left'] < 0)
		{
			raid_info['points_left'] = 0;
		}
		all_parsed_raids += '<div class="fightable_deck_container">';
			
		if(raid_info['hero'] != undefined)
		{
			raid_info['hero'] = JSON.parse(raid_info['hero']);
			if(raid_info['user_id'] == gamedata['account_id'])
			{
				all_parsed_raids += '<div class="fightable_deck owned_deck_' + raid_info['active_raid_id'] + ' fightable" onclick="current_raid_id=' + raid_info['active_raid_id'] + ';view_raid()">';
			}
			else
			{
				all_parsed_raids += '<div class="fightable_deck owned_deck_' + raid_info['active_raid_id'] + ' not_fightable">';
			}
			all_parsed_raids += 	'<div class="background" style="background-image:url(images/' + raid_info['hero']['image'] + ')"></div>';
			all_parsed_raids += 	'<span>' + capitalizeFirstLetter(raid_info['raid_name']) + '</span>';
			
			all_parsed_raids += 	'<div class="wins_losses">';
			all_parsed_raids += 		'Points: ' + parseInt(raid_info['points_earned']) + '<br/>';
			all_parsed_raids += 		'Health: ' + parseInt(raid_info['points_left']) + ' / ' + parseInt(raid_info['points']) + '';
			all_parsed_raids += 	'</div>';

			all_parsed_raids += '</div>';
			/*if(gamedata['scraps'] > 1 && deck_info['user_id'] != gamedata['account_id'])
			{
				parsed_decks += '<div class="fight_deck_button" onclick="fight_deck(' + deck_info['id'] + ')">FIGHT</div>';
			}*/
			deck_found = true;
		}
			
		all_parsed_raids += '</div>';
	});
	$('#content_raids .arena_shop_button').removeClass('hidden');
	$('.raids_content').html(all_parsed_raids);
}

function view_raid(){
	$('#content_raids .arena_shop_button').addClass('hidden');
	$('#content_raids .main_new_raid_button').addClass('hidden');
	$('#content_raids .main_join_raid_button').addClass('hidden');
	$('#content_raids .arena_shop_button').addClass('hidden');
	var raid_id = current_raid_id;
	if(gamedata['account_id'] != undefined)
	{
		$('.raids_content').html('<div class="loading_arena_decks">Loading raid</div>');
		$.post("ajax.php",
		{
			data: 			'get_raid',
			raid_id: 		raid_id
		},
		function(result){
			if(count_object(JSON.parse(result)) > 0)
			{
				active_raid = JSON.parse(result);
				parse_active_raid(active_raid);
			}
			else
			{

				show_content('raids');
			}

		});
	}
};

function parse_active_raid(active_raid){

	var complete_parsed_raid = '';
	$('.refresh_raids_button').removeClass('hidden');
	$('#content_raids .raids_content').addClass('full');
	
	var current_raid = active_raid[0];
	if(current_raid['points_left'] < 0)
	{
		current_raid['points_left'] = 0;
	}
	current_raid['hero'] = JSON.parse(current_raid['hero']);
	current_active_raid = current_raid;
	//console.log(current_active_raid);
	$('#join_code').val(current_raid['join_code']);

	var parsed_contributers = '<div class="contributer_list">';
	/*$.each(active_raid, function(	useless_key, contributer){
		if(contributer['name'] != '')
		{
			parsed_contributers += '<div class="single_contributer">' + contributer['name'] + '<span class="contributed_amount">' + contributer['points_earned'] + '</span></div>';
		}
		if(contributer['user_id'] == gamedata['account_id'])
		{
			current_raid_points = contributer['points_earned'];
		}
	});*/
	parsed_contributers += '</div>';

	var parsed_raid = '';
	var current_points_left = 0;
	if(parseInt(current_raid['points_left']) > 0)
	{
		current_points_left = parseInt(current_raid['points_left']);
	}
	var raid_health_bar = 0;
	if(current_points_left > 0)
	{
		raid_health_bar = (current_points_left / parseInt(current_raid['points'])) * 100;
	}
	parsed_raid += '<div class="single_raid_container">';
	parsed_raid += 		'<div class="raid_image" style="background-image:url(images/' + current_raid['hero']['image'] + ')"></div>';
	parsed_raid += 		'<span class="raid_name">' + capitalizeFirstLetter(current_raid['raid_name']) + '<br/></span>';
	parsed_raid += 		'<span class="raid_description"><br/>' + current_raid['description'] + '<br/><br/>Join code: ' + current_raid['join_code'] + '<span class="copy_code_button" onclick="copy_current_join_code()">Copy code</span></span>';
	parsed_raid += 		'<div class="raid_health"><div class="raid_health_bar" style="width:' + raid_health_bar + '%"></div><span>Health: ' + current_points_left + ' / ' + parseInt(current_raid['points']) + '</span></div>';
	parsed_raid += 		'<div class="raid_rewards"></div>';
	parsed_raid += '</div>';
	if(current_raid['points_left'] > 0)
	{
		parsed_raid += '<div class="start_raid_button" onclick="start_raid()">ATTACK</div>';
	}
	else
	{
		parsed_raid += '<div class="start_raid_button hidden claim_raid_button" onclick="claim_raid()">CLAIM</div>';
	}
	


	complete_parsed_raid = parsed_raid + parsed_contributers;
	$('.raids_content').html(complete_parsed_raid);
	show_raid_contributers();
};

function show_raid_rewards(){
	$('.raid_rewards').html('');
	$.post("ajax.php",
	{
		data: 			'get_raid_rewards',
		raid_id: 		current_active_raid['raid_id'],
	},
	function(result){
		result = JSON.parse(result);
		var next_reward = false;
		var current_reward = false;
		var parsed_rewards = '';
		$.each(result, function(reward_id, reward_info){
			if(current_reward == false && parseInt(reward_info['min_points']) <= current_raid_points)
			{
				current_reward = reward_info;
			}
			if(parseInt(reward_info['min_points']) > current_raid_points)
			{
				next_reward = reward_info;
			}
		});
		var all_parsed_current = '';
		var all_parsed_next = '';
		if(current_reward != false)
		{
			all_parsed_current += '<div class="raid_reward_block">Current reward<br/>';
			$.each(JSON.parse(current_reward['rewards']), function(useless_key, reward){
				var card_to_parse = reward['reward_id'];
				if(all_available_cards[card_to_parse] != undefined)
				{
					all_parsed_current += '<div class="card_holder" onclick="show_card_details(\'' + card_to_parse + '\')">' + parse_card(card_to_parse, reward['reward_amount']) + '</div>';
				}
				if(card_to_parse == 'scraps')
				{
					all_parsed_current += parse_card('scraps_placeholder', reward['reward_amount']);
				}
			});
			all_parsed_current += '</div>';
		}
		if(next_reward != false)
		{
			all_parsed_next += '<div class="raid_reward_block">Reward at ' + next_reward['min_points'] + ' points<br/>';
			$.each(JSON.parse(next_reward['rewards']), function(useless_key, reward){
				var card_to_parse = reward['reward_id'];
				if(all_available_cards[card_to_parse] != undefined)
				{
					all_parsed_next += '<div class="card_holder" onclick="show_card_details(\'' + card_to_parse + '\')">' + parse_card(card_to_parse, reward['reward_amount']) + '</div>';
				}
				if(card_to_parse == 'scraps')
				{
					all_parsed_next += parse_card('scraps_placeholder', reward['reward_amount']);
				}
			});
			all_parsed_next += '</div>';
		}
		else
		{
			all_parsed_next += '<div class="raid_reward_block">Maximum rewards reached<br/><br/><br/><br/></div>';
		}
		$('.raid_rewards').html('' + all_parsed_current + '' + all_parsed_next);
	});
}

function show_raid_contributers(){
	var raid_id = current_raid_id;
	current_raid_points = 0;
	if(gamedata['account_id'] != undefined)
	{
		$('.contributer_list').html('<div class="loading_arena_decks">Loading</div>');
		$.post("ajax.php",
		{
			data: 			'get_raid_contributers',
			raid_id: 		raid_id
		},
		function(result){
			
			if(count_object(JSON.parse(result)) > 0)
			{
				all_contributers = JSON.parse(result);
				var parsed_contributers = 'Contributers<br/>';
				$.each(all_contributers, function(	useless_key, contributer){
					if(contributer['name'] != '')
					{
						var additional_class = '';
						if(contributer['user_id'] == gamedata['account_id'])
						{
							additional_class = ' current_user ';
						}
						parsed_contributers += '<div class="single_contributer ' + additional_class + '">' + contributer['name'] + '<span class="contributed_amount">' + contributer['points_earned'] + '</span></div>';
					}
					if(contributer['user_id'] == gamedata['account_id'])
					{
						current_raid_points = contributer['points_earned'];
						$('.claim_raid_button').removeClass('hidden');
					}
				});
				$('.contributer_list').html(parsed_contributers);
			}
			show_raid_rewards();
		});
	}
}

function upload_raid_points_gained(points_gained){
	if(current_active_raid['raid_id'] != undefined && gamedata['account_id'] != undefined)
	{
		$.post("ajax.php",
		{
			data: 			'upload_raid_points_gained',
			current_id: 	gamedata['account_id'],
			raid_id: 		current_active_raid['active_raid_id'],
			points: 		points_gained
		},
		function(result){
		});
	}
}

function claim_raid(){
	if(current_active_raid['raid_id'] != undefined && gamedata['account_id'] != undefined)
	{
		//console.log(current_active_raid['raid_id']);
		$('.raids_content').html('<div class="loading_arena_decks">Loading rewards</div>');
		$.post("ajax.php",
		{
			data: 			'get_raid_rewards',
			raid_id: 		current_active_raid['raid_id'],
		},
		function(result){
			var reward_claimed = false;
			$.each(JSON.parse(result), function(reward_id, reward_info){
				if(reward_claimed == false)
				{
					if(parseInt(reward_info['min_points']) <= current_raid_points)
					{
						all_current_rewards = JSON.parse(reward_info['rewards']);
						reward_claimed = true;
						current_reward_origin = 'raids';
						current_reward_text = 'The raid has finished.<br/>Claim your reward.';
						$.post("ajax.php",
						{
							data: 			'clear_raid',
							raid_id: 		current_active_raid['active_raid_id'],
							current_id: 	gamedata['account_id'],
						},
						function(result){
							check_quests('raid_rewards_claimed');
							show_content('current_rewards');
						});
					}
				}
			});
			if(reward_claimed == false)
			{
				all_current_rewards = {};
				reward_claimed = true;
				current_reward_origin = 'raids';
				current_reward_text = 'The raid has finished.<br/>You failed to get any rewards.';
				$.post("ajax.php",
				{
					data: 			'clear_raid',
					raid_id: 		current_active_raid['active_raid_id'],
					current_id: 	gamedata['account_id'],
				},
				function(result){
					show_content('current_rewards');
				});
			}
		});
	}
}

var raid_start_ids = {
	raid_key_1: {
		cost_id: 		'raid_key',
		name: 			'Basic raid',
		description: 	'Start a basic raid',
		cost_amount: 	1,
		raid_type: 		'basic'
	},
}

function show_start_raid(){
	var parsed_raid_costs = '';
	$.each(raid_start_ids, function(raid_cost_id, raid_info){
		var parsed_single_raid_cost = '';
		parsed_single_raid_cost += '<div class="single_building_recipe">';
		parsed_single_raid_cost += 		'<h2>' + capitalizeFirstLetter(raid_info['name']) + '</h2>';
		parsed_single_raid_cost +=		'<div class="new_raid_description">' + raid_info['description'] + '</div>';
		var owned_cost = 0;
		if(gamedata['owned_cards'][raid_info['cost_id']] != undefined)
		{
			owned_cost = gamedata['owned_cards'][raid_info['cost_id']];
		}
		var parsed_raid_cost 	= 		parse_card(raid_info['cost_id'], owned_cost + ' / ' + raid_info['cost_amount']);
		parsed_single_raid_cost += 		parsed_raid_cost;
		if(gamedata['owned_cards'][raid_info['cost_id']] != undefined && gamedata['owned_cards'][raid_info['cost_id']] >= raid_info['cost_amount'])
		{
			parsed_single_raid_cost += 		'<div class="start_new_raid_button" onclick="start_new_raid(\'' + raid_cost_id + '\')">START</div>';
		}
		parsed_single_raid_cost += 		'<div style="clear:both;"></div>';
		parsed_single_raid_cost += '</div>';
		parsed_raid_costs += parsed_single_raid_cost;
	});

	$('.new_raids_content').html(parsed_raid_costs);
}

function start_new_raid(raid_cost_id){
	//console.log(raid_cost_id);
	var raid_info = raid_start_ids[raid_cost_id];
	if(gamedata['owned_cards'][raid_info['cost_id']] != undefined && gamedata['owned_cards'][raid_info['cost_id']] >= raid_info['cost_amount'])
	{
		gamedata['owned_cards'][raid_info['cost_id']] -= raid_info['cost_amount'];
		saveToLocalStorage();
		$('.new_raids_content').html('<div class="loading_arena_decks">Starting raid</div>');
		$.post("ajax.php",
		{
			data: 			'start_new_raid',
			current_id: 	gamedata['account_id'],
			raid_type: 		raid_start_ids[raid_cost_id]['raid_type']
		},
		function(result){
			if(parseInt(result) > 0)
			{
				show_content('raids');
			}
		});
	}
}

function join_raid(){
	if($('.raid_code').val() != '')
	{
		var raid_code = $('.raid_code').val();
		if(raid_code.length == 10)
		{
			$.post("ajax.php",
			{
				data: 			'join_raid',
				current_id: 	gamedata['account_id'],
				raid_code: 		raid_code
			},
			function(result){
				console.log(result);
				if(parseInt(result) > 0)
				{
					show_content('raids');
				}
				else
				{
					$('.raid_join_error').html('Incorrect raid code');
				}
			});
		}
		else
		{
			$('.raid_join_error').html('Raid code to short');
		}
	}
	else
	{
		$('.raid_join_error').html('Please enter a raid code');
	}
}

function show_join_raid(){
	$('.raid_code').val('');
	$('.raid_join_error').html('');
}

function copy_current_join_code() {
  /* Get the text field */
  var copyText = document.getElementById("join_code");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
}