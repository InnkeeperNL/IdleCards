var all_available_locations = {
	
	farm:{
		image: 'locations/dream_TradingCard-2023-08-22T071732.jpg',
		local_actions:{
			field_carrot: 	{chance: 50, min: 1, max: 1,},
			field_flax: 	{chance: 50, min: 1, max: 4,},
			field_potato: 	{chance: 50, min: 1, max: 1,},
			field_wheat: 	{chance: 100, min: 1, max: 4,},
		},
		cost:{
			map: 		10,
			pitchfork: 	2,
			water: 		40
		}
	},
	forest:{
		image: 'locations/dream_TradingCard-2023-08-17T065727.jpg',
		local_actions:{
			apple_tree:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			boar:{
				chance: 	25,
				min: 		1,
				max: 		1,
			},
			bunny:{
				chance: 	75,
				min: 		1,
				max: 		1,
			},
			deer:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			tree:{
				chance: 	75,
				min: 		4,
				max: 		6,
			},
			tree_large:{
				chance: 	25,
				min: 		4,
				max: 		4,
			},
			stream:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			bushes:{
				chance: 	50,
				min: 		4,
				max: 		6,
			},
			bird:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
		}
	},
	mountain:{
		image: 'locations/dream_TradingCard-2023-08-17T070201.jpg',
		local_actions:{
			boulder:{
				chance: 	100,
				min: 		4,
				max: 		6,
			},
			stream:{
				chance: 	50,
				min: 		1,
				max: 		1,
			},
			coal:{
				chance: 	35,
				min: 		1,
				max: 		1,
			},
			copper_ore:{
				chance: 	25,
				min: 		1,
				max: 		1,
			},
			iron_ore:{
				chance: 	25,
				min: 		1,
				max: 		1,
			},
			salt:{
				chance: 	10,
				min: 		1,
				max: 		1,
			},
		},
		cost:{
			map: 	5,
			lumber: 5
		}
	}
};

