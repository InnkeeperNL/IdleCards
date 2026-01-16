possible_trade = {
	1:{
		name: 			'Lumberjack selling lumber',
		description: 	'A lumberjack wants to sell you some lumber.',
		image: 			'logs-498538_640.jpg',
		max_factor: 	10,
		cost:{
			0:{
				item: 		19,
				amount: 	10
			}
		},
		loot:{
			0:{
				item: 		2,
				amount: 	1
			}
		},
		rarity: 		1
	},
	2:{
		name: 			'Hungry hunter',
		description: 	'A hunter wants to buy some apples from you.',
		image: 			'girl-1503203_640.jpg',
		max_factor: 	1,
		cost:{
			0:{
				item: 		3,
				amount: 	2
			}
		},
		loot:{
			0:{
				item: 		19,
				amount: 	20
			}
		},
		rarity: 		1
	},
	3:{
		name: 			'Herb trade',
		description: 	'A local druid wants to sell you some herbs.',
		image: 			'woods-1072819_640.jpg',
		max_factor: 	10,
		cost:{
			0:{
				item: 		19,
				amount: 	20
			}
		},
		loot:{
			0:{
				item: 		15,
				amount: 	1
			}
		},
		rarity: 		1
	},
	4:{
		name: 			'Cloth for sale',
		description: 	'A tailor has some cloth for sale. He hopes you will want to trade.',
		image: 			'landscape-615428_640.jpg',
		max_factor: 	10,
		cost:{
			0:{
				item: 		19,
				amount: 	100
			}
		},
		loot:{
			0:{
				item: 		5,
				amount: 	1
			}
		},
		rarity: 		1
	},
	5:{
		name: 			'Construction materials',
		description: 	'One of the farmers wants to build a shed. He will need some planks though.',
		image: 			'logs-498538_640.jpg',
		max_factor: 	10,
		cost:{
			0:{
				item: 		4,
				amount: 	1
			}
		},
		loot:{
			0:{
				item: 		19,
				amount: 	100
			}
		},
		rarity: 		10
	},
	6:{
		name: 			'Saw lumber',
		description: 	'Saw some lumber.',
		image: 			'logs-498538_640.jpg',
		max_factor: 	10,
		cost:{
			0:{
				item: 		2,
				amount: 	10
			}
		},
		loot:{
			0:{
				item: 		4,
				amount: 	1
			}
		},
		rarity: 		1
	}
}

function get_trade_by_rarity_and_location(rarity, location_id){
	var date = new Date().getTime();
	var trade_by_rarity = {};
	var trade_count = 0;
	var current_location = locations[location_id];
	var local_trade_count = count_object(locations[location_id]['trade']);
	for (current_local_trade = 0; current_local_trade < local_trade_count; current_local_trade++) {
		$.each(possible_trade, function(key, trade) {
			if(typeof(trade['last_spawn']) == 'undefined')
			{
				trade['last_spawn'] = 0;
			}
			if(trade['rarity'] <= rarity && key == locations[location_id]['trade'][current_local_trade] && trade['last_spawn'] < date - 60000){
				trade_by_rarity[trade_count] = key;
				++trade_count;
			};
		});
	};
	return trade_by_rarity;
}