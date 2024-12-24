var showing_chapter = false;

function show_journal(show_chapter_id){
	if(showing_chapter != false && all_story_chapters[showing_chapter] != undefined)
	{
		show_chapter_id = showing_chapter;
	}
	if(gamedata['stories'] == undefined)
	{
		gamedata['stories'] = {};
	}
	$('.journal_back').hide();
	$('.story_back').hide();

	var parsed_journal = '';

	if(show_chapter_id == undefined || all_story_chapters[show_chapter_id] == undefined)
	{
		$('.journal_back').show();
		$.each(all_story_chapters, function(chapter_id, chapter_info){
			var show_this_chapter = true;
			var chapter_done = true;
			$.each(chapter_info['stories'], function(story_id, needs_completed){
				if(needs_completed == true && (gamedata['stories'][story_id] == undefined || gamedata['stories'][story_id]['claimed'] == false))
				{
					chapter_done = false;
				}
			});
			$.each(chapter_info['needs_completed'], function(needs_completed_id, needs_completed){
				if(gamedata['stories'][needs_completed_id] == undefined || gamedata['stories'][needs_completed_id]['claimed'] == false){show_this_chapter = false;}
			});
			if(show_this_chapter == true)
			{
				parsed_journal += parse_chapter(chapter_id, chapter_done);
			}
		});
	}	
	if(show_chapter_id != undefined && all_story_chapters[show_chapter_id] != undefined)
	{
		$('.story_back').show();
		var current_chapter = all_story_chapters[show_chapter_id];
		var show_story_count = 0;
		$.each(all_stories, function(story_id, story_info){
			if(current_chapter['stories'][story_id] != undefined)
			{
				var can_show_story = true;
				if(gamedata['stories'][story_id] != undefined && gamedata['stories'][story_id]['claimed'] == true){can_show_story = false;}
				$.each(story_info['needs_completed'], function(needs_completed_id, needs_completed){
					if(gamedata['stories'][needs_completed_id] == undefined || gamedata['stories'][needs_completed_id]['claimed'] == false){can_show_story = false;}
				});
				if(can_show_story == true)
				{
					if(gamedata['stories'][story_id] == undefined)
					{
						gamedata['stories'][story_id] = {
							amount: 		0,
							completed: 		false,
							claimed: 		false,
							date_completed: false
						}
					}
					show_story_count++;
					parsed_journal += parse_story(story_id);
				}
			}
		});
		if(show_story_count == 0 && all_story_chapters[show_chapter_id]['complete_text'] != undefined)
		{
			parsed_journal += '<div class="story">';
			parsed_journal += '<div class="story_name">Chapter complete</div>';
			parsed_journal += '<div class="story_description">' + all_story_chapters[show_chapter_id]['complete_text'] + '</div>';
			parsed_journal += '</div>'
		}
	}

	$('.journal_content').html(parsed_journal);
}

function parse_chapter(chapter_id, chapter_done){
	var parsed_chapter = '';

	if(all_story_chapters[chapter_id] != undefined)
	{
		var current_chapter = all_story_chapters[chapter_id];
		parsed_chapter += '<div class="chapter chapter_done_' + chapter_done + '" onclick="showing_chapter=\'' + chapter_id + '\';show_journal(\'' + chapter_id + '\')">';
		parsed_chapter += '<div class="chapter_bg"></div>';
		parsed_chapter += '<div class="chapter_name">' + current_chapter['name'] + '</div>';
		parsed_chapter += '<div class="chapter_subname">' + current_chapter['subname'] + '</div>';
		parsed_chapter += '</div>';
	}

	return parsed_chapter;
}

function parse_story(story_id){
	var parsed_story = '';
	if(gamedata['stories'][story_id] != undefined && all_stories[story_id] != undefined)
	{
		var current_story = all_stories[story_id];
		var story_progress = gamedata['stories'][story_id];
		parsed_story += '<div class="story">';
		parsed_story += '<div class="chapter_bg"></div>';
		parsed_story += '<div class="story_name">' + current_story['name'] + '</div>';
		parsed_story += '<div class="story_description">' + current_story['description'] + '</div>';
		parsed_story += '<div class="story_progress_name">Objective: ' + current_story['objective_name'] + '</div>';
		parsed_story += '<div class="story_progress_bar_container">';
		var story_progress_percent = Math.floor((story_progress['amount'] / current_story['amount']) * 100);
		if(story_progress_percent > 0)
		{
			parsed_story += 		'<div class="fake_pbc"><div class="story_progress_bar" style="width:' + story_progress_percent + '%"></div></div>';
		}
		parsed_story += 		'<div class="story_progress">' + story_progress['amount'] + ' / ' + current_story['amount'] + '</div>';
		parsed_story += '</div>';
		if(count_object(current_story['rewards']) > 0)
		{
			parsed_story += '<div class="story_rewards">';
			$.each(current_story['rewards'], function(reward_count, rewards_info){
				var temp_reward_id = rewards_info['reward_id'];
				if(rewards_info['reward_id'] == 'scraps'){temp_reward_id = 'scraps_placeholder';}
				var parsed_reward = parse_card(temp_reward_id, rewards_info['reward_amount']);
				parsed_story += '<span onclick="show_card_details(\'' + temp_reward_id + '\')">' + parsed_reward + '</span>';
			});
			parsed_story += '</div>';
		}
		if(story_progress['completed'] == true && story_progress['claimed'] == false)
		{
			parsed_story += '<div class="claim_story_button" onclick="claim_story(\'' + story_id + '\')">COMPLETE</div>';
		}
		else
		{
			parsed_story += '<div class="claim_story_button" onclick="show_content(\'map\')">MAP</div>';
		}
		parsed_story += '</div>';
	}
	return parsed_story;
}

function claim_story(story_id){
	if(gamedata['stories'][story_id] != undefined && all_stories[story_id] != undefined)
	{
		var current_story = all_stories[story_id];
		var story_progress = gamedata['stories'][story_id];
		if(story_progress['completed'] == true && story_progress['claimed'] == false)
		{
			all_current_rewards = {};
			current_reward_origin 	= 'journal';
			current_reward_text 	= '';
			if(current_story['reward_text'] != undefined){current_reward_text = current_story['reward_text'];}
			$.each(current_story['rewards'], function(reward_count, rewards_info){
				all_current_rewards[get_highest_key_in_object(all_current_rewards) + 1] = {
					reward_id: 		rewards_info['reward_id'],
					reward_amount: 	rewards_info['reward_amount'],
				}
			});
			story_progress['claimed'] = true;
			saveToLocalStorage();
			show_content('current_rewards');
		}
	}
}