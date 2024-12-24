var all_story_chapters = {
	chapter_1:{
		name: 		'Chapter I',
		subname:  	'Saving the village',
		stories:{
			vilage_bandits: 	true,
			bandit_leader: 		true,
		},
		complete_text: 'You have saved Maywell.',
		needs_completed:{
		},
	},
	chapter_2:{
		name: 		'Chapter II',
		subname:  	'The enchanted forest',
		stories:{
			catch_butterfly: 	true,
		},
		complete_text: 'You have saved the forest.',
		needs_completed:{
			bandit_leader: true,
		},
	},
}

var all_stories = {
	vilage_bandits:{
		name: 			'Engage the bandits',
		description: 	'The villagers of Maywell Village are having trouble with some local bandits.<br/><i>\"Please show those bandits we can defend the village.\"</i>',
		objective: 		'enemy_rogue_death_origin_your_side',
		objective_name: 'Kill 10 rogues',
		amount: 		10,
		rewards:{
			0:{
				reward_id: 			'villager',
				reward_amount: 		2
			},
			1:{
				reward_id: 			'tavern',
				reward_amount: 		1
			},
		},
		needs_completed:{},
	},
	bandit_leader:{
		name: 			'Take out the leader',
		description: 	'It is time to take out the bandit leader.',
		objective: 		'map_battle_won_rogue',
		objective_name: 'Defeat the rogue hero',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'rogue',
				reward_amount: 		1
			},
		},
		needs_completed:{
			vilage_bandits: true,
		},
	},
	catch_butterfly:{
		name: 			'Catch a butterfly',
		description: 	'To investigate what is wrong with the forest, we need to capture a butterfly.',
		objective: 		'map_battle_won_blue_butterflies',
		objective_name: 'Defeat the butterfly hero',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'blue_butterflies',
				reward_amount: 		1
			},
		},
		needs_completed:{
			vilage_bandits: true,
		},
	}
}

var all_story_goals = {};

if(count_object(all_story_goals) == 0)
{
	$.each(all_stories, function(achievement_id, achievement_info){
		if(achievement_info['objective'] != undefined)
		{
			if(typeof(achievement_info['objective']) == 'string')
			{
				all_story_goals[achievement_info['objective']] = true;
			}
			else
			{
				$.each(achievement_info['objective'], function(objective_id, objective){
					all_story_goals[objective] = true;
				});
			}
		}
		if(achievement_info['objectives'] != undefined)
		{
			$.each(achievement_info['objectives'], function(objective_id, objective){
				all_story_goals[objective] = true;
			});
		}
	});
}
