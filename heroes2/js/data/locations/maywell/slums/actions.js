/*all_locations['maywell_slumsx'] = {
	name: 	'Maywell slums',
	image: 	'locations/caracas-479685_640.jpg',
	parent_location: 	'maywell_villagex',
	map_position: {col:1,row:6},
	type:  	'map',
	actions:{
		//recruit_rascal: 			{col:3,row:7},
		bribe_thief: 				{col:4,row:2},
		sewer_entrance: 			{col:1,row:7},

		spawn_rats: 				true,
		spawn_rascals: 				true,
		spawn_thieves: 				true,
		spawn_ruffians: 			true,
	},
	requirements:{
		quests:{
			talk_to_johnny: 	'accepted',
		}
	},
}*/

/*all_actions['recruit_rascal'] = {
	name: 	'Recruit rascal',
	description: 	'Now you have show the rascals who\'s boss, they will join you for some coin and a hand full of pebbles.<i></i>',
	image: 	'units/scarf-3339049_640.jpg',
	type: 	'trade',
	trade_text: 	'Recruit',
	requirements:{
		quests:{
			beat_rascals: 	'done',
		}
	},
	cost:{
		coins: 		100,
		pebble: 	10,
	},
	rewards:{
		rascal: 		1,
	}
};*/

all_actions['learn_pebbles'] = {
	name: 	'Pebble action',
	description: 	'Now you have show the rascals who\'s boss, they will teach you to throw pebbles for some coin and a handfull of pebbles.<i></i>',
	complete_description: '<i>Whatch this!</i>',
	image: 	'units/scarf-3339049_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			beat_rascals: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'coins',
			type: 		'items',
			target_id: 	'coins',
			amount: 	10,
		},
		1:{
			name: 		'pebbles',
			type: 		'items',
			target_id: 	'pebble',
			amount: 	10,
		}
	},
	rewards:{
		throw_pebbles: 		1,
	}
};

all_actions['rough_hunger'] = {
	name: 	'rough hunger',
	description: 	'A rough guy is looking mighty hungry.<br/><i>I could really use an apple or two.</i>',
	complete_description: '<i>Oh, thank you!<br/>If you need protection, I\'m your man!</i>',
	image: 	'units/man-66940_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			learn_pebbles: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'apples',
			type: 		'items',
			target_id: 	'apple',
			amount: 	20,
		}
	},
	rewards:{
		ruffian: 		1,
	}
};

all_actions['bribe_thief'] = {
	name: 	'bribe thief',
	description: 	'A thief eyes you.<br/><i>If you make a donation to my personal fund, I might see the light and join your cause. I can even train your rascals for you.</i>',
	complete_description: '<i>Fine. I\'ll join you.<br/>Whatever...</i>',
	image: 	'units/male-4894541_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			beat_rascals: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'coins',
			type: 		'items',
			target_id: 	'coins',
			amount: 	100,
		}
	},
	rewards:{
		thief: 		1,
		recipe_thief: 		1,
	}
};

all_actions['backstabbing'] = {
	name: 	'backstabbing',
	description: 	'<i>There is a special attack that is quite effective if you can jump the enemy. I could teach it to you, for a price...</i>',
	complete_description: '<i>What do you think about this?</i>',
	image: 	'units/male-4894541_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			bribe_thief: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'coins',
			type: 		'items',
			target_id: 	'coins',
			amount: 	150,
		},
		/*1:{
			name: 		'knife',
			type: 		'items',
			target_id: 	'knife',
			amount: 	1,
		}*/
	},
	rewards:{
		backstab: 		1,
	}
};

all_actions['brewing_poison'] = {
	name: 	'brewing poison',
	description: 	'<i>You know, if you got to the graveyard and get some bones, you can brew poison.<br/>I could really use a new pair of shoes.<br/>Also, bring me a skull, don\'t ask why.</i>',
	complete_description: '<i>Here\'s the recipe, now leave me alone with my skull.</i>',
	image: 	'units/male-4894541_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			backstabbing: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'shoes',
			type: 		'items',
			target_id: 	'shoes',
			amount: 	1,
		},
		1:{
			name: 		'skull',
			type: 		'items',
			target_id: 	'skull',
			amount: 	1,
		}
	},
	rewards:{
		recipe_poison: 		1,
	}
};

all_actions['using_poison'] = {
	name: 	'using poison',
	description: 	'<i>Now to use poison... Collect me some bread, a rusty knife and a bunch of poison.</i>',
	complete_description: '<i>Look, this is how you apply it.</i>',
	image: 	'units/male-4894541_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			brewing_poison: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'bread',
			type: 		'items',
			target_id: 	'bread',
			amount: 	5,
		},
		1:{
			name: 		'rusty knife',
			type: 		'items',
			target_id: 	'rusty_knife',
			amount: 	1,
		},
		2:{
			name: 		'poison',
			type: 		'items',
			target_id: 	'poison',
			amount: 	10,
		}
	},
	rewards:{
		venom: 		1,
	}
};


all_locations['maywell_sewers'] = {
	name: 	'Maywell sewers',
	image: 	'locations/sewer-cover-178443_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:1,row:5},
	type:  	'map',
	actions:{
		spawn_corrupters: 			true,
	},
	requirements:{
		quests:{
			clear_sewer_entrance: 	'done',
			take_out_thallin: 	'not_done',
		}
	},
};

/*all_locations['the_fat_goose'] = {
	name: 	'The fat goose',
	description: 'A small tavern in the center of Maywell.',
	image: 	'locations/pub-5992546_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:3,row:3},
	actions:{
	},
	requirements:{
		quests:{
			milled_goods: 		'done',
		}
	},
};*/

all_locations['charley_panter'] = {
	name: 	'Charley Panter',
	description: 'The cook at the Fat Goose.',
	image: 	'people/chef-gd118a3bcd_640.jpg',
	//parent_location: 	'the_fat_goose',
	parent_location: 	'maywell_village',
	map_position: {col:3,row:3},
	actions:{
		flour_needed: 		true,
	},
	requirements:{
		location_have_actions:{
			charley_panter: 	true,
		}
	},
};

all_actions['flour_needed'] = {
	name: 	'flour needed',
	description: 	'Charley welcomes you warmly.<br/><i>I would offer you something to eat, but I am all out of materials. Now that the thieves are gone, I can open my doors again. Is there any chance you could get some flour and firewood?</i>',
	complete_description: '<i>Fine. I\'ll join you.<br/>Whatever...</i>',
	image: 	'items/flour-g3e2718cf4_640.jpg',
	type: 	'quest',
	show_icon: 'quest',
	requirements:{
		quests:{
			milled_goods: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'flour',
			type: 		'items',
			target_id: 	'flour',
			amount: 	6,
		},
		1:{
			name: 		'firewood',
			type: 		'items',
			target_id: 	'firewood',
			amount: 	10,
		}
	},
	rewards:{
		bread: 				1,
		recipe_bread: 		1,
	}
};