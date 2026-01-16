locations[2] = {
	name: 				'Latea Valley',
	image: 				'forest-1246219_640.jpg',
	chapters: 			{
		1:{
			name: 			'Latea Valley woods',
			image: 			'landscape-975091_640.jpg',
			description: 	'A pine forest',
			explore_button: 'Explore',
			max_chain:  	10000,
			possible_treasure:{
			},
			possible_trade:{	
			},
			possible_quests:{				
			},
			possible_mobs: 	{
				0:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			100,
					mobs: 				{
											0: 	{unit:'none',			min:1,max:4,level:5,chance:100},
											1: 	{unit:'wolf',			min:3,max:6,level:4,chance:100, factor: 0.5}
										}
				},
				1:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			100,
					mobs: 				{
											0: 	{unit:'none',			min:1,max:4,level:5,chance:100},
											1: 	{unit:'wolf',			min:3,max:6,level:4,chance:100, factor: 0.5}
										}
				},
				2:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			10,
					mobs: 				{
											0: 	{unit:'none',			min:1,max:9,level:5,chance:100},
											1: 	{unit:'tree',			min:1,max:6,level:4,chance:100, factor: 0.5}
										}
				},
				3:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			10,
					mobs: 				{
											0: 	{unit:'none',			min:1,max:9,level:5,chance:100},
											1: 	{unit:'brown_bear',		min:1,max:1,level:7,chance:100, factor: 2}
										}
				},

			},
			recipes: {
			},
		},
		2:{
			name: 			'Latea Valley stream',
			image: 			'waterfall-2498072_640.jpg',
			description: 	'A wild stream',
			explore_button: 'Explore',
			max_chain:  	10000,
			possible_treasure:{
				0:{
					min_explore_chain: 	3,
					max_explore_chain: 	10000,
					chance: 			10,
					treasure: 			'peaceful_creek'
				},
			},
			possible_trade:{	
			},
			possible_quests:{				
			},
			possible_mobs: 	{
				0:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			10,
					mobs: 				{
											0: 	{unit:'none',			min:1,max:9,level:5,chance:100},
											1: 	{unit:'grizzly_bear',	min:1,max:1,level:7,chance:100, factor: 2}
										}
				},
				1:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			10,
					mobs: 				{
											0: 	{unit:'none',			min:1,max:4,level:5,chance:100},
											1: 	{unit:'fisherman',		min:3,max:6,level:4,chance:100, factor: 0.5}
										}
				},

			},
			recipes: {
			},
		},
		3:{
			name: 			'Outlaw hideout',
			image: 			'boxelder-216372_640.jpg',
			description: 	'A hidout of local outlaws',
			explore_button: 'Enter',
			max_chain:  	10000,
			possible_treasure:{
				0:{
					min_explore_chain: 	3,
					max_explore_chain: 	10000,
					chance: 			10,
					treasure: 			'peaceful_creek'
				},
			},
			possible_trade:{	
			},
			possible_quests:{				
			},
			possible_mobs: 	{
				0:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			100,
					mobs: 				{
												0: 	{unit:'none',			min:0,max:1,level:1,chance:100},
												1: 	{unit:'thief',			min:1,max:3,level:4,chance:100,factor:0.75},
												2: 	{unit:'none',			min:0,max:1,level:1,chance:100},

												3: 	{unit:'criminal',		min:1,max:3,level:4,chance:100,factor:0.75},
												4: 	{unit:'none',			min:0,max:2,level:1,chance:100},
												5: 	{unit:'bandit_archer',	min:1,max:3,level:4,chance:100,factor:0.75},

											}
				},

			},
			recipes: {
			},
		},
		4:{
			name: 			'Latea logging camp',
			image: 			'wood-1921822_640.jpg',
			description: 	'A logging camp',
			explore_button: 'Enter',
			max_chain:  	10000,
			possible_treasure:{
			},
			possible_trade:{	
			},
			possible_quests:{				
			},
			possible_mobs: 	{
				0:{
					min_explore_chain: 	0,
					max_explore_chain: 	10000,
					chance: 			100,
					mobs: 				{
												0: 	{unit:'none',			min:0,max:1,level:1,chance:100},
												1: 	{unit:'tree',			min:1,max:3,level:4,chance:100,factor:0.75},
												2: 	{unit:'none',			min:0,max:1,level:1,chance:100},

												3: 	{unit:'lumberjack',		min:1,max:3,level:4,chance:100,factor:0.75},
												4: 	{unit:'none',			min:0,max:2,level:1,chance:100},
												5: 	{unit:'lumberjack',		min:1,max:3,level:4,chance:100,factor:0.75},

											}
				},

			},
			recipes: {
			},
		},
		
	},
	start_level: 		0,
}