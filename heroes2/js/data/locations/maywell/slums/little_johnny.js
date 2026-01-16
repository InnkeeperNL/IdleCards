all_locations['little_johnny'] = {
	name: 	'Little Johnny',
	description:'A young boy that has lived in the slums all his life.',
	image: 	'units/scarf-3339049_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:1,row:6},
	actions:{
		talk_to_johnny: 			true,
		kill_rats: 					true,
		kill_giant_rat: 			true,
	},
	requirements:{
		quests:{
			talk_to_johnny:  	'accepted',
			kill_giant_rat: 	'not_done',
		}
	},
};

all_actions['kill_rats'] = {
	name: 	'kill rat',
	description: 	'Johnny is sick of the rats in the village.<br/><i>Could you kill some for me? Maybe I can tame one for you.</i>',
	complete_description: '<i>Wow! You really are strong!</i>',
	image: 	'units/rat-871089_640.jpg',
	type: 	'quest',
	show_on_complete: 	'kill_giant_rat',
	move_to_location_on_accept: 'maywell_village',
	requirements:{
		quests:{
			talk_to_johnny: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'rats killed',
			type: 		'kills',
			target_id: 	'rat',
			amount: 	3,
		}
	},
	rewards:{
		rat: 		1,
	}
};

all_actions['kill_giant_rat'] = {
	name: 	'kill giant rat',
	description: 	'The boy is impressed with your skills. He has seen a giant rat nearby.<br/><i>Can you kill that too!?</i>',
	complete_description: '<i>Amazing! Mind if I join you?</i>',
	image: 	'units/mouse-5306026_640.jpg',
	type: 	'quest',
	move_to_location_on_complete: 'maywell_village',
	move_to_location_on_accept: 'maywell_village',
	requirements:{
		quests:{
			kill_rats: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'giant rat killed',
			type: 		'kills',
			target_id: 	'giant_rat',
			amount: 	1,
		}
	},
	rewards:{
		rascal: 		1,
	}
};