all_locations['potion_shop'] = {
	name: 	'potion shop',
	description: 	'A small shop that sells potions.',
	image: 	'locations/jars-1853439_640.jpg',
	//parent_location: 	'maywell_village',
	map_position: {col:4,row:4},
	actions:{
		// QUESTS
		buy_share: 			true,
	},
	requirements:{
		quests:{
			look_for_herbs: 	'done',
		}
	},
	/*craft_slots:{
		starting_amount: 		1,
		possible_recipes: 		['herb_bundle','health_potion','poison'],
		slot_cost: 				200,
		requirements:{
			quests:{
				buy_share: 	'done',
			}
		},
	},
	workers:{
		starting_amount: 		1,
		possible_workers: 		['herbalist'],
		slot_cost:				200,
		requirements:{
			quests:{
				buy_share: 	'done',
			}
		},
	},
	sale_slots:{
		starting_amount: 		1,
		possible_sales: 		['potions'],
		slot_cost: 				200,
		requirements:{
			quests:{
				buy_share: 	'done',
			}
		},
	},*/
};

/*all_actions['buy_share'] = {
	name: 	'Supply Cicero',
	description: 	'Cicero Moley owns the potion shop.<br/><i>I am all out of jugs and rosemary. Can you supply some?</i>',
	complete_description: '<i>Wonderful!!<br/></i>Cicero turns around and starts making stuff, completely ignoring any customers.',
	image: 	'people/steampunk-4644339_640.jpg',
	type: 	'quest',
	move_to_location_on_accept: 'potion_shop',
	requirements:{
		quests:{
			clear_snakes: 	'done',
		}
	},
	goals:{
		0:{
			name: 		'jugs',
			type: 		'items',
			target_id: 	'jug',
			amount: 	5,
		},
		1:{
			name: 		'rosemary',
			type: 		'items',
			target_id: 	'rosemary',
			amount: 	10,
		},
	},
	rewards:{
		coins: 		50,
	}
};*/