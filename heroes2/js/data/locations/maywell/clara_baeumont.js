all_locations['clara_baeumont'] = {
	name: 	'Clara Beaumont',
	description: 'A well established lady that looks around with a worried look on her face.',
	image: 	'people/girl-4152272_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:2,row:3},
	actions:{
		// QUESTS
		speak_to_the_guard: {quests:{
			speak_to_the_guard: 	'not_accepted',
		},},
		deliver_cloak: 		{quests:{
			deliver_cloak: 	'busy',
		},},
	},
	requirements:{
		location_have_actions:{
			clara_baeumont: 	true,
		}
	},
};

all_actions['speak_to_the_guard'] = {
	name: 	'Speak to the guard',
	description: 	'Clara stops you on the streets.<br/><i>The slums are out of control! The local guards will not listen to me. You must go into the guardhouse and get them to fix the problem!</i>',
	complete_description: 'Garry eyes you slightly annoyed.<br/><i>Clara sent you? I have told her a million times we do not have the manpower to send people to the slums. Unless you are willing to help...</i>',
	image: 	'units/knight-5830752_640.jpg',
	type: 	'quest',
	show_on_complete: 	'talk_to_johnny',
	move_to_location_on_accept: 'maywell_village',
	requirements:{
	},
	goals:{
	},
	rewards:{
	}
};