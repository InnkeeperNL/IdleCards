var available_locations = {
	
	cabin:{
		tier: 			1,
		image: 			'locations/dream_TradingCard-2023-06-03T053802.jpg',
		descriptions: 	{0:'Increases hunting production.',},
		needs_locations:{
			1:{
				forest: 	3,
			}
		},
		cost:{
			log: 		10,
			twine: 		5,
		},
		upgrade_costs:{
			2:{
				bow: 	1,
			},
			3:{
				hide: 	5,
				meat: 	5,
			}
		},
		bonus_items:{
			bow: 		1,
			meat: 		2,
			hide: 		2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	field:{
		tier: 			1,
		image: 			'locations/dream_TradingCard-2023-05-29T080505.jpg',
		descriptions: 	{0:'Increases crops production.',},
		needs_locations:{
			1:{
				forest: 	3,
			}
		},
		cost:{
			dirt: 		20,
			seeds: 		5,
			water: 		20,
		},
		upgrade_costs:{},
		bonus_items:{
			flax: 		1,
			seeds: 		1,
			wheat: 		2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	forest:{
		tier: 			0,
		image: 			'locations/dream_TradingCard-2023-05-19T165358.jpg',
		descriptions: 	{0:'Increases lumber production.',},
		needs_locations:{
			2:{
				workshop: 	1,
			}
		},
		cost:{
			water: 		20,
		},
		upgrade_costs:{},
		bonus_items:{
			apple: 		3,
			log: 		3,
			stick: 		1,
			tinder: 	2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	kitchen:{
		tier: 			2,
		image: 			'locations/dream_TradingCard-2023-05-30T062758.jpg',
		descriptions: 	{0:'Increases food and drink production.',},
		needs_locations:{
			1:{
				field: 		2,
				workshop: 	2,
			},
			3:{
				forest: 	3,
				mine: 		3,
				workshop: 	5,
			}
		},
		cost:{
			rolling_pin: 	2,
			water: 			25,
		},
		upgrade_costs:{
			2:{
				flour: 		5,
			}
		},
		bonus_items:{
			bread: 			2,
			cider: 			3,
			flour: 			1,
			steak: 			1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	mine:{
		tier: 			1,
		image: 			'locations/dream_TradingCard-2023-05-31T135440.jpg',
		descriptions: 	{0:'Increases mined goods production.',},
		needs_locations:{
			1:{
				workshop: 	3,
			},
		},
		cost:{
			stone: 		10,
		},
		upgrade_costs:{
			2:{
				pickaxe:  1,
			},
			3:{
				coal: 		5,
			}
		},
		bonus_items:{
			sand: 			2,
			stone: 			1,
			coal: 			2,
			copper_ore: 	3,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	sewing_room:{
		tier: 			2,
		image: 			'locations/dream_TradingCard-2023-06-03T065758.jpg',
		descriptions: 	{0:'Increases cloth and leather production.',},
		needs_locations:{
		},
		cost:{
			twine: 		10,
		},
		upgrade_costs:{
			2:{
				cloth: 		1,
			}
		},
		bonus_items:{
			boots: 			4,
			cloth: 			1,
			jacket: 		2,
			leather: 		1,
			shirt: 			2,
			shoes: 			3,
			twine: 			0,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	workshop:{
		tier: 			0,
		image: 			'locations/dream_TradingCard-2023-05-29T064905.jpg',
		descriptions: 	{0:'Increases tools production.',},
		needs_locations:{
			1:{
				forest: 	1,
			},
			2:{
				forest: 	3,
			},
			4:{
				mine: 		2,
			},
			5:{
				mine: 		3,
			}
		},
		cost:{
			stick: 		10,
		},
		upgrade_costs:{
			2:{
				log: 	2,
			},
			3:{
				stone: 	2,
			},
			4:{
				sand: 	5,
			},
			5:{
				copper: 2,
			}
		},
		bonus_items:{
			bottle: 		4,
			cane: 			1,
			copper_pot: 	5,
			pickaxe: 		3,
			rolling_pin: 	2,
			
			
		},
		unlock_workers:{},
		unlock_customers:{}
	},
}

$.each(available_locations, function(location_id, location_info){
	if(location_info['name'] == undefined){location_info['name'] = location_id.replaceAll('_', ' ');}
});