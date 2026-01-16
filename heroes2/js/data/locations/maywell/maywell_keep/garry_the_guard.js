all_locations['garry_the_guard_1'] = {
	name: 	'Garry the guard',
	description:'The head of the guard.',
	image: 	'units/knight-5830752_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:2,row:6},
	actions:{
		speak_to_the_guard: {quests:{
			speak_to_the_guard: 	'busy',
		},},
		talk_to_johnny: 		{quests:{
			speak_to_the_guard: 	'not_accepted',
		},},
		beat_rascals: 			true,
		find_hideout: 			true,
		clear_sewer_entrance: 	true,
		take_out_thallin: 		true,
	},
	requirements:{
		location_have_actions:{
			garry_the_guard_1: 	true,
		}
	},
};

all_actions['talk_to_johnny'] = {
	name: 	'Talk to Johnny',
	description: 	'<i>If you really want to help, head over to the city walls and talk to Johny. He could use some help.</i>',
	complete_description: '<i>Hi there!</i>',
	image: 	'units/scarf-3339049_640.jpg',
	type: 	'quest',
	show_on_complete: 	'kill_rats',
	move_to_location_on_accept: 'maywell_village',
	requirements:{
		quests:{
			speak_to_the_guard: 	'done',
		}
	},
	goals:{
	},
	rewards:{
	}
};

all_actions['beat_rascals'] = {
	name: 	'Rascals',
	description: 	'<i>Little Johnny tells me there are some rascals making trouble. You should show them what happens to young boys that do not behave. I can even offer you a small reward for your services.</i>',
	complete_description: '<i>Johnny tells me you showed those rascals to behave. Well done. Here, have this scarf as a reward. It will make you look tough. Haha!</i>',
	image: 	'units/scarf-3339049_640.jpg',
	type: 	'quest',
	move_to_location_on_complete: 'maywell_village',
	move_to_location_on_accept: 'maywell_village',
	requirements:{
		quests:{
			kill_giant_rat: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'beat rascals',
			type: 		'kills',
			target_id: 	'rascal',
			amount: 	5,
		}
	},
	rewards:{
		scarf: 		1,
	}
};

all_actions['find_hideout'] = {
	name: 	'Find the hideout',
	description: 	'<i>Now that you cleaned up the streets a bit, you should be looking for the source of the trouble: Thallin.<br/> He has a hideout somewhere in the sewers. I heard some of the ruffians around there may carry a map to the place. If you find one of those maps, I can tell you where to find Thallin.</i>',
	complete_description: '<i>You found the map? Good. Now let me see... Ah! There\'s te entrance to the sewers.</i>',
	image: 	'units/man-66940_640.jpg',
	type: 	'quest',
	move_to_location_on_complete: 'maywell_village',
	show_on_complete: 	'clear_sewer_entrance',
	requirements:{
		quests:{
			culling_thieves: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'Hideout map',
			type: 		'items',
			target_id: 	'hideout_map',
			amount: 	1,
		}
	},
	rewards:{
		coins: 		25,
	}
};

all_actions['clear_sewer_entrance'] = {
	name: 	'Fight your way in',
	description: 	'<i>Before you can enter the sewers, you will have to clear the entrance to if. If you can defeat all men guarding it in one fight, they should fall back to inside the sewers.</i>',
	complete_description: '<i>Well done!</i>',
	image: 	'locations/sewer-cover-178443_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'maywell_village',
	show_on_complete: 	'take_out_thallin',
	requirements:{
		quests:{
			find_hideout: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'Entrance cleared',
			type: 		'stage_cleared',
			target_id: 	'sewer_entrance',
			amount: 	5,
		}
	},
	rewards:{
		shieldman: 		1,
	}
};

all_actions['take_out_thallin'] = {
	name: 	'Thallin',
	description: 	'<i>It is time to take out Thallin. He is hard to find, but if you take out enough of his troops he should appear.<br/>Defeat him, and I will have more time on my hands.</i>',
	complete_description: '<i>Finally!<br/>Thallin had control of the streets for much to long.</i>',
	image: 	'units/handsome-4133131_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'maywell_village',
	move_to_location_on_complete: 'maywell_village',
	requirements:{
		quests:{
			clear_sewer_entrance: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'Thallin killed',
			type: 		'kills',
			target_id: 	'thallin',
			amount: 	1,
		}
	},
	rewards:{
		coins: 		100,
	}
};