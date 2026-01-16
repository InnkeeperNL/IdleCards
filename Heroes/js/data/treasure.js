var possible_treasure = {
	apple_tree:{
		name: 			'Ripe apple tree',
		description: 	'A ripe apple tree is waiting to be picked.',
		image: 			'apple-tree-429213_640.jpg',
		loot:{
			0:{
				item: 		'apple',
				amount: 	5
			}
		},
		rarity: 		1
	},
	small_chest:{
		name: 			'Small chest',
		description: 	'You found a small chest. You open it to find some coins inside.<br/>You can claim the following:',
		image: 			'chest-1417416_640.jpg',
		loot:{
			0:{
				item: 		'coins',
				amount: 	50
			}
		},
		rarity: 		75
	},
	wheat_field:{
		name: 			'Ripe wheat',
		description: 	'You find a ripe wheat field.',
		image: 			'wheat-field-640960_640.jpg',
		loot:{
			0:{
				item: 		'wheat',
				amount: 	5
			}
		},
		rarity: 		60
	},
	cotton_field:{
		name: 			'Cotton field',
		description: 	'You find a cotton field.',
		image: 			'cotton-233920_640.jpg',
		loot:{
			0:{
				item: 		'cotton',
				amount: 	5
			}
		},
		rarity: 		60
	},
	
	pile_of_wood:{
		name: 			'Pile of wood',
		description: 	'You found a small pile of wood.',
		image: 			'logs-498538_640.jpg',
		loot:{
			0:{
				item: 		'timber',
				amount: 	5
			}
		},
		rarity: 		1
	},
	tree:{
		name: 			'Tree',
		description: 	'You found a tree that looks perfect for chopping.',
		image: 			'nature-3205961_640.jpg',
		loot:{
			0:{
				item: 		'timber',
				amount: 	5
			}
		},
		rarity: 		1
	},
	4:{
		name: 			'Holy spring',
		description: 	'You found a holy spring!',
		image: 			'mood-1335737_640.jpg',
		loot:{
			0:{
				item: 		16,
				amount: 	5
			}
		},
		rarity: 		90
	},
	rusty_axe:{
		name: 			'Rusty axe',
		description: 	'You found a rusty axe.',
		image: 			'ax-1008980_640.jpg',
		loot:{
			0:{
				item: 		'scrap_metal',
				amount: 	1
			},
			1:{
				item: 		'timber',
				amount: 	1
			}
		},
		rarity: 		30
	},
	6:{
		name: 			'A heard of sheep',
		description: 	'A local shepherd wants you to assist him in herding his sheep. He gives you some wool as a reward.',
		image: 			'sheep-17482_640.jpg',
		loot:{
			0:{
				item: 		6,
				amount: 	5
			}
		},
		rarity: 		30
	},
	cleanup:{
		name: 			'Cleanup',
		description: 	'A pile of trash lies on the ground. No one seems to care about it, so you decide to take it with you.',
		image: 			'disposal-1846033_640.jpg',
		loot:{
			0:{
				item: 		'trash',
				amount: 	5
			}
		},
		rarity: 		1
	},
	peaceful_creek:{
		name: 			'Peaceful creek',
		description: 	'You find a peacefull creek. A good time to stock up on some fresh water.',
		image: 			'laos-1934806_640.jpg',
		loot:{
			0:{
				item: 		'water',
				amount: 	5
			}
		},
		rarity: 		60
	},
	old_well:{
		name: 			'Old well',
		description: 	'You find an old well. A good time to stock up on some fresh water.',
		image: 			'fountain-788430_640.jpg',
		loot:{
			0:{
				item: 		'water',
				amount: 	3
			}
		},
		rarity: 		60
	},
	hay_bale:{
		name: 			'Hay bale',
		description: 	'You find a hay bale.',
		image: 			'bale-3026360_640.jpg',
		loot:{
			0:{
				item: 		'hay',
				amount: 	10
			}
		},
		rarity: 		60
	},
	herb_patch:{
		name: 			'Herb patch',
		description: 	'You find a patch of herbs.',
		image: 			'oregano-2662890_640.jpg',
		loot:{
			0:{
				item: 		'herbs',
				amount: 	5
			}
		},
		rarity: 		60
	}
	
	
}

function get_treasure_by_rarity_and_location(rarity, location_id){
	var date = new Date().getTime();
	var treasure_by_rarity = {};
	var treasure_count = 0;
	var current_location = locations[location_id];
	var local_treasure_count = count_object(locations[location_id]['treasure']);
	for (current_local_treasure = 0; current_local_treasure < local_treasure_count; current_local_treasure++) {
		$.each(possible_treasure, function(key, treasure) {
			if(typeof(treasure['last_spawn']) == 'undefined')
			{
				treasure['last_spawn'] = 0;
			}
			if(treasure['rarity'] <= rarity && key == locations[location_id]['treasure'][current_local_treasure] && treasure['last_spawn'] < date - 10000){
				treasure_by_rarity[treasure_count] = key;
				++treasure_count;
			};
		});
	};
	return treasure_by_rarity;
}