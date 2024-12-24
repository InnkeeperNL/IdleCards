var current_campaign = -1;
var current_chapter = '';

function show_campaigns(){
	$('.all_campaigns_container').html('');
	var cards_loaded = 0;
	$.each(all_campaigns, function(campaign_id, campaign_info){
		cards_loaded++;
		var parsed_campaign = parse_campaign(campaign_id, cards_loaded);

		$('.all_campaigns_container').append(parsed_campaign);

		setTimeout(function(){
			$('.campaign_' + campaign_id).removeClass('pre_load');
		},(Math.random() * cards_loaded * 50));
	});
}

function parse_campaign(campaign_id, card_number){
	var parsed_card = '';
	var current_card = all_campaigns[campaign_id];

	parsed_card += 	'<div class="card pre_load campaign_' + campaign_id + '" onclick="current_campaign = ' + campaign_id + ', show_content(\'single_campaign\')">';
	if(count_object(current_card['color']) > 1)
	{
		$.each(current_card['color'], function(useless_key, color){
			parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
		});
	}
	else
	{
		parsed_card += 	'<div class="card_color color_' + current_card['color'][0] + '"></div>';
	}
	var image_position = '';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 		'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';

	if(current_card['description'] != undefined){
		parsed_card += 	'<div class="card_abilities">' + current_card['description'] + '</div>';
	}

	if(card_number != undefined)
	{
		parsed_card += 		'<div class="card_power">' + card_number + '</div>';
	}
	parsed_card += 		'<div class="card_name">' + capitalizeFirstLetter(current_card['name']) + '</div>';

	parsed_card += 	'</div>';

	return parsed_card;
}

function parse_chapter(chapter_id, card_number){
	var parsed_card = '';
	var current_card = all_chapters[chapter_id];

	var cleared_enough = true;
	var need_to_unlock = '';
	$.each(all_chapters[chapter_id]['needs_cleared'], function(useless_key, cleared_chapter_id){
		if(gamedata['cleared_chapters'][cleared_chapter_id] == undefined)
		{
			cleared_enough = false;
			need_to_unlock += capitalizeFirstLetter(all_chapters[cleared_chapter_id]['name']) + '<br/>';
		}
	});

	if(cleared_enough == false)
	{
		parsed_card += 	'<div class="card pre_load disabled chapter_' + chapter_id + '">';
		parsed_card += 	'<div class="need_to_clear">Clear to unlock:<br/>' + need_to_unlock + '</div>';
	}
	else
	{
		if(gamedata['cleared_chapters'][chapter_id] == undefined)
		{
			parsed_card += 	'<div class="card unlocked pre_load chapter_' + chapter_id + '" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_details()">';
		}
		else
		{
			if(current_card['additional_clear_rewards'] == undefined)
			{
				parsed_card += 	'<div class="card unlocked pre_load chapter_' + chapter_id + ' chapter_done" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_details()">';
			}
			else
			{
				parsed_card += 	'<div class="card unlocked pre_load chapter_' + chapter_id + '" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_details()">';
			}
		}
	}
	if(count_object(current_card['color']) > 1)
	{
		$.each(current_card['color'], function(useless_key, color){
			parsed_card += 	'<div class="card_color color_' + color + ' color_number_' + useless_key + '"></div>';
		});
	}
	else
	{
		parsed_card += 	'<div class="card_color color_' + current_card['color'][0] + '"></div>';
	}
	var image_position = '';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 			'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';

	if(current_card['description'] != undefined){
		parsed_card += 		'<div class="card_abilities">' + current_card['description'] + '</div>';
	}
	/*if(card_number != undefined)
	{
		parsed_card += 		'<div class="card_power">' + card_number + '</div>';
	}*/
	parsed_card += 			'<div class="card_name">' + capitalizeFirstLetter(current_card['name']) + '</div>';

	if(cleared_enough == false)
	{
		parsed_card += 		'<div class="locked">LOCKED</div>';
	}
	if(gamedata['cleared_chapters'][chapter_id] != undefined && cleared_enough == true)
	{
		parsed_card += 		'<div class="cleared">CLEARED</div>';
	}
	parsed_card += 		'</div>';

	return parsed_card;
}

function show_single_campaign(){
	$('.single_campaign_container').html('');
	var cards_loaded = 0;
	$.each(all_campaigns[current_campaign]['chapters'], function(useless_key, chapter_id){
		cards_loaded++;
		var parsed_campaign = parse_chapter(chapter_id, cards_loaded);
		
		$('.single_campaign_container').append(parsed_campaign);
		setTimeout(function(){
			$('.chapter_' + chapter_id).removeClass('pre_load');
		},((Math.random() * 100) + 1));
	});
}

function show_chapter_details(){
	$('.detail_overlay .card_detail').html('');
	var chapter_id = current_chapter;
	var parsed_card = '';
	var current_card = all_chapters[current_chapter];

	parsed_card += 	'<button class="start_campaign" onclick="current_chapter=\'' + chapter_id + '\',show_chapter_battle()">START</button>';
	
	var image_position = '';
	parsed_card += '<div class="available_cards">';
	parsed_card += 		'<div class="card">';
	if(current_card['image_position'] != undefined){image_position = ';background-position:' + current_card['image_position'];}
	parsed_card += 			'<div class="card_image" style="background-image:url(images/' + current_card['image'] + ')' + image_position + '"></div>';
	parsed_card += 		'</div>';
	parsed_card += '</div>';

	parsed_card += '<div class="ability_details">';
	parsed_card += 		'<div class="single_ability">';
	parsed_card += 			'<div class="single_ability_name">';
	parsed_card += 				capitalizeFirstLetter(current_card['name']);
	parsed_card += 			'</div>';
	if(current_card['description'] != undefined){
		parsed_card += 		'<div class="single_ability_description">' + current_card['description'] + '</div>';
	}
	parsed_card += 		'</div>';
	parsed_card += '</div>';
	//parsed_card += 		'</div>';

	if(gamedata['cleared_chapters'][chapter_id] == undefined)
	{
		parsed_card += '<div class="reward_cards">';
		parsed_card += '<div class="reward_title">Rewards:</div>'; 
		$.each(current_card['first_clear_rewards'], function(card_id, amount){
			if(card_id != 'scraps')
			{
				var parsed_card_reward = parse_card(card_id, amount);
				parsed_card += '<div class="single_reward" onclick="show_card_details(\'' + card_id + '\')">';
				parsed_card += 	parsed_card_reward;
				parsed_card += '</div>';
			}
			else
			{
				if(amount > 1)
				{
					parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scraps</div></div>';
				}
				else
				{
					parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scrap</div></div>';
				}

			}
		});
		parsed_card += '</div>';
		
	}
	else
	{
		if(current_card['additional_clear_rewards'] != undefined)
		{
			parsed_card += '<div class="reward_cards">';
			parsed_card += '<div class="reward_title">Possible rewards:</div>'; 
			$.each(current_card['additional_clear_rewards'], function(card_id, amount){
				if(card_id != 'scraps')
				{
					var parsed_card_reward = parse_card(card_id, amount);
					parsed_card += '<div class="single_reward" onclick="show_card_details(\'' + card_id + '\')">';
					parsed_card += 	parsed_card_reward;
					parsed_card += '</div>';
				}
				else
				{
					if(amount > 1)
					{
						parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scraps</div></div>';
					}
					else
					{
						parsed_card += '<div class="single_reward"><div class="scrap_reward">' + amount + ' scrap</div></div>';
					}

				}
			});
			parsed_card += '</div>';
		}
	}

	$('.detail_overlay .card_detail').append(parsed_card);
	$('.detail_overlay').removeClass('hidden');
}