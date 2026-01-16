/*all_locations['tailor_shop'] = {
	name: 	'tailor shop',
	description: 	'A small shop that sells clothes.',
	image: 	'locations/tailoring-2575930_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:4,row:5},
	actions:{
		// QUESTS
	},
	requirements:{
		quests:{
			find_hideout: 		'accepted',
		}
	},
};*/

all_locations['torya_clody'] = {
	name: 	'Torya Clody',
	description: 	'The local tailor.',
	image: 	'people/viking-1493685_640.jpg',
	parent_location: 	'maywell_village',
	map_position: {col:4,row:5},
	actions:{
		// QUESTS
		tailoring_supplies: 	true,
		snake_skins: 			true,
		sick_torya: 			true,
		deliver_cloak: 		{quests:{
			deliver_cloak: 	'not_accepted',
		},},
		delivered_cloak: 		true,
		learn_recipe_jacket: 	true,
		learn_recipe_net: 		true,
	},
	requirements:{
		location_have_actions:{
			torya_clody: 	true,
		}
	},
};

all_actions['tailoring_supplies'] = {
	name: 	'Tailoring supplies',
	description: 	'<i>Hi there. Welcome to my shop. Need anything? I am working on a nice cloak, but am almost out of yarn. Is there any chance you might have some for me?</i>',
	complete_description: '<i>How nice of you.<br/>Now I can finish the cloak.</i>',
	image: 	'items/yarn-2564556_640.jpg',
	type: 	'quest',
	show_on_complete: 	'snake_skins',
	requirements:{
		quests:{
			find_hideout: 		'accepted',
		}
	},
	goals:{
		0:{
			name: 		'yarn',
			type: 		'items',
			target_id: 	'yarn',
			amount: 	20,
		},
	},
	rewards:{
		coins: 		50,
	}
};

all_actions['snake_skins'] = {
	name: 	'Snake skins',
	description: 	'<i>Say, you might not have some snake skins too, would you?<br/>I can show you some tailoring tricks if you do.</i>',
	complete_description: '<i>Finally, some fresh skins!<br/></i>Torya teaches you some basic tailoring.',
	image: 	'items/skin-3040221_640.jpg',
	type: 	'quest',
	requirements:{
		quests:{
			tailoring_supplies: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'snake skins',
			type: 		'items',
			target_id: 	'snake_skin',
			amount: 	20,
		},
	},
	rewards:{
		recipe_cloth: 			1,
		recipe_leather_snake: 	1,
	}
};

all_actions['sick_torya'] = {
	name: 	'Torya is sick',
	description: 	'<i>I am not feeling very well, so I cannot teach you any more right now.<br/>Would you be so kind to fetch me some medicine?</i>',
	complete_description: '<i>Great. Much better.<br/></i>Torya teaches you some more tailoring.',
	image: 	'items/drank-ga420413eb_640.jpg',
	type: 	'quest',
	requirements:{
		quests:{
			snake_skins: 		'done',
			brewing_potions: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'health potion',
			type: 		'items',
			target_id: 	'health_potion',
			amount: 	1,
		},
		1:{
			name: 		'herb bundle',
			type: 		'items',
			target_id: 	'herb_bundle',
			amount: 	1,
		},
	},
	rewards:{
		recipe_cloak: 			1,
	}
};

all_actions['deliver_cloak'] = {
	name: 	'Deliver cloak',
	description: 	'<i>Clara Beaumont has ordered a cloak some time ago. I am still not feeling well. Could you make one and deliver it to her? You can keep her payment.</i>',
	complete_description: '<i>Finally!<br/>What took you so long!<br/>Here, take the money and go!</i>',
	image: 	'items/man-962563_640.jpg',
	type: 	'quest',
	accept_quest_on_complete: 	'delivered_cloak',
	requirements:{
		quests:{
			sick_torya: 		'done',
		}
	},
	goals:{
		0:{
			name: 		'cloak',
			type: 		'items',
			target_id: 	'cloak',
			amount: 	1,
		},
	},
	rewards:{
		coins: 		100,
	}
};

all_actions['delivered_cloak'] = {
	name: 	'Delivered cloak',
	description: 	'<i>Thank you for delivering the cloak. Here, let me show you how shoes are made.</i>',
	complete_description: '<i>Thank you for delivering the cloak. Here, let me show you how shoes are made.</i>',
	image: 	'items/shoe-gf460848e3_640.jpg',
	type: 	'quest',
	requirements:{
		quests:{
			delivered_cloak: 		'busy',
		}
	},
	goals:{
	},
	rewards:{
		recipe_shoes: 		1,
	}
};

all_actions['learn_recipe_jacket'] = {
	name: 	'Learn to craft jackets',
	description: 	'',
	image: 	'',
	type: 	'trade',
	trade_text: 	'Learn',
	requirements:{
		quests:{
			delivered_cloak: 	'done',
		},
		recipes:{
			jacket: 	false,
		}
	},
	cost:{
		coins: 		1600,
	},
	rewards:{
		recipe_jacket: 		1,
	}
};

all_actions['learn_recipe_net'] = {
	name: 	'Learn to craft nets',
	description: 	'',
	image: 	'',
	type: 	'trade',
	trade_text: 	'Learn',
	requirements:{
		quests:{
			delivered_cloak: 	'done',
		},
		recipes:{
			net: 	false,
		}
	},
	cost:{
		coins: 		500,
	},
	rewards:{
		recipe_net: 		1,
	}
};