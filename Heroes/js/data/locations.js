var locations = {
	1: 	{
		name: 				'Maywell',
		image: 				'landscape-615428_640.jpg',
		chapters: 			{
			1:{
				name: 			'Squirrel woods',
				image: 			'woods-1072819_640.jpg',
				description: 	'A forest filled with squirrels',
				explore_button: 'Explore',
				max_chain:  	0,
				possible_treasure:{
				},
				possible_trade:{
					0:{
						min_explore_chain: 	5,
						max_explore_chain: 	100,
						chance: 			10,
						trade: 				'hungry_fairy'
					},	
				},
				possible_quests:{				
				},
				possible_mobs: 	{
					0:{
						min_explore_chain: 	0,
						max_explore_chain: 	2,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:9,level:5,chance:100},
												1: 	{unit:'squirrel',		min:1,max:1,level:1,chance:100}
											}
					},
					1:{
						min_explore_chain: 	3,
						max_explore_chain: 	5,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:7,level:5,chance:100},
												1: 	{unit:'squirrel',		min:2,max:3,level:1,chance:100}
											}
					},
					2:{
						min_explore_chain: 	6,
						max_explore_chain: 	9,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:5,level:5,chance:100},
												1: 	{unit:'squirrel',		min:4,max:5,level:1,chance:100}
											}
					},
					3:{
						min_explore_chain: 	10,
						max_explore_chain: 	10,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												1: 	{unit:'squirrel',		min:3,max:3,level:1,chance:100},
												2: 	{unit:'none',			min:3,max:3,level:5,chance:100},
												3: 	{unit:'squirrel_tree',	min:1,max:1,level:1,chance:100}
											}
					},
					4:{
						min_explore_chain: 	11,
						max_explore_chain: 	50,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'squirrel',		min:7,max:7,level:1,chance:100},
												1: 	{unit:'squirrel_tree',	min:1,max:1,level:1,chance:100},
												2: 	{unit:'squirrel',		min:2,max:2,level:1,chance:100}
											}
					},
					5:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',				min:2,max:2,level:1,chance:100},
												1: 	{unit:'knight',				min:1,max:1,level:1,chance:100,factor:1},
												2: 	{unit:'none',				min:3,max:3,level:1,chance:100},
												3: 	{unit:'ice_queen',		min:3,max:3,level:1,chance:100,factor:1},
											}
					},
				},
				recipes: {
				},
			},
			2:{
				name: 			'Poaching woods',
				image: 			'green-1072828_640.jpg',
				description: 	'A forest filled with wild animals',
				explore_button: 'Explore',
				max_chain:  	10,
				possible_treasure:{
					0:{
						min_explore_chain: 	7,
						max_explore_chain: 	100,
						chance: 			5,
						treasure: 			'apple_tree'
					},
					1:{
						min_explore_chain: 	7,
						max_explore_chain: 	100,
						chance: 			5,
						treasure: 			'herb_patch'
					},
					/*2:{
						min_explore_chain: 	2,
						max_explore_chain: 	100,
						chance: 			100,
						treasure: 			'tree'
					},*/
					
				},
				possible_trade:{
				},
				possible_quests:{				
				},
				possible_mobs: 	{
					0:{
						min_explore_chain: 	0,
						max_explore_chain: 	10,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:6,level:5,chance:100},
												1: 	{unit:'boar',			min:1,max:3,level:1,chance:100}
											}
					},
					1:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			50,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:5,level:5,chance:100},
												1: 	{unit:'boar',			min:2,max:5,level:2,chance:100,factor:1}
											}
					},
					2:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			25,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												1: 	{unit:'boar',			min:3,max:3,level:3,chance:100,factor:1},
												2: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												3: 	{unit:'wandering_druid',	min:1,max:3,level:3,chance:100,factor:1},
											}
					},
					3:{
						min_explore_chain: 	0,
						max_explore_chain: 	10,
						chance: 			25,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:6,level:5,chance:100},
												1: 	{unit:'wolf',			min:1,max:3,level:1,chance:100}
											}
					},
					4:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			50,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:6,level:5,chance:100},
												1: 	{unit:'wolf',			min:3,max:5,level:2,chance:100,factor:1}
											}
					},
					5:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												1: 	{unit:'boar',			min:3,max:7,level:2,chance:100,factor:1}
											}
					},
					6:{
						min_explore_chain: 	2,
						max_explore_chain: 	100,
						chance: 			50,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:5,level:5,chance:100},
												1: 	{unit:'tree',			min:2,max:5,level:2,chance:100,factor:1}
											}
					},
					7:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			25,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												1: 	{unit:'forest_owl',		min:3,max:3,level:3,chance:100,factor:1},
												2: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												3: 	{unit:'wandering_druid',	min:1,max:3,level:3,chance:100,factor:1},
											}
					},
					7:{
						min_explore_chain: 	5,
						max_explore_chain: 	100,
						chance: 			2,
						mobs: 				{
												0: 	{unit:'none',			min:2,max:2,level:5,chance:100},
												1: 	{unit:'brown_bear',		min:1,max:1,level:8,chance:100,factor:3},
											}
					},
					
					
				},
				recipes: {
				},
			},
			3:{
				name: 			'Maywell fields',
				image: 			'countryside-2326787_640.jpg',
				description: 	'The fields around a village',
				explore_button: 'Explore',
				max_chain:  	10,
				possible_treasure:{
					0:{
						min_explore_chain: 	3,
						max_explore_chain: 	100,
						chance: 			5,
						treasure: 			'old_well'
					},
					1:{
						min_explore_chain: 	3,
						max_explore_chain: 	100,
						chance: 			5,
						treasure: 			'wheat_field'
					},
					2:{
						min_explore_chain: 	3,
						max_explore_chain: 	100,
						chance: 			5,
						treasure: 			'cotton_field'
					},
					
				},
				possible_trade:{
				},
				possible_quests:{				
				},
				possible_mobs: 	{
					0:{
						min_explore_chain: 	0,
						max_explore_chain: 	10,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												1: 	{unit:'hay_bale',		min:1,max:1,level:3,chance:100},
												2: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												3: 	{unit:'farmer',			min:2,max:3,level:3,chance:100}
											}
					},
					1:{
						min_explore_chain: 	0,
						max_explore_chain: 	10,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:2,level:5,chance:100},
												1: 	{unit:'chicken',		min:1,max:2,level:3,chance:100},
												2: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												3: 	{unit:'farmer',			min:2,max:3,level:3,chance:100}
											}
					},
					2:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:0,max:3,level:5,chance:100},
												1: 	{unit:'hay_bale',		min:1,max:1,level:3,chance:100,factor:1},
												2: 	{unit:'chicken',		min:1,max:1,level:3,chance:100,factor:1},
												3: 	{unit:'none',			min:0,max:2,level:5,chance:100},
												4: 	{unit:'farmer',			min:1,max:3,level:3,chance:100,factor:1}
											}
					},
					3:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:0,max:3,level:5,chance:100},
												4: 	{unit:'crazed_farmer',	min:1,max:7,level:3,chance:100,factor:1}
											}
					},
					4:{
						min_explore_chain: 	0,
						max_explore_chain: 	10,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												1: 	{unit:'hay_bale',		min:1,max:1,level:3,chance:100},
												2: 	{unit:'none',			min:1,max:3,level:5,chance:100},
												3: 	{unit:'cotton_farmer',	min:2,max:3,level:3,chance:100}
											}
					},
					5:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:0,max:1,level:5,chance:100},
												1: 	{unit:'hay_bale',		min:1,max:1,level:3,chance:100,factor:1},
												2: 	{unit:'chicken',		min:1,max:1,level:3,chance:100,factor:1},
												3: 	{unit:'none',			min:0,max:1,level:5,chance:100},
												4: 	{unit:'farmer',			min:1,max:3,level:3,chance:100,factor:1},
												5: 	{unit:'cotton_farmer',	min:2,max:3,level:3,chance:100,factor:1}
											}
					},
					6:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												1: 	{unit:'hay_bale',		min:1,max:1,level:3,chance:100,factor:1},
												2: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												3: 	{unit:'chicken',		min:1,max:1,level:3,chance:100,factor:1},
												4: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												5: 	{unit:'farmer',			min:2,max:2,level:3,chance:100,factor:1},
												6: 	{unit:'farmhouse',		min:1,max:1,level:3,chance:100,factor:1},
												7: 	{unit:'cotton_farmer',	min:2,max:2,level:3,chance:100,factor:1}
											}
					},
					7:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												1: 	{unit:'hay_bale',		min:1,max:1,level:3,chance:100,factor:1},
												2: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												3: 	{unit:'chicken',		min:1,max:1,level:3,chance:100,factor:1},
												4: 	{unit:'none',			min:1,max:1,level:5,chance:100},
												5: 	{unit:'chicken',		min:1,max:1,level:3,chance:100,factor:1},
												5: 	{unit:'rooster',		min:1,max:1,level:3,chance:100,factor:1},
												7: 	{unit:'chicken_coop',	min:1,max:1,level:3,chance:100,factor:1},
												8: 	{unit:'rooster',		min:1,max:1,level:3,chance:100,factor:1},
												9: 	{unit:'chicken',		min:1,max:1,level:3,chance:100,factor:1},
											}
					},
				},
				recipes: {
				},
			},
			4:{
				name: 			'Maywell village',
				image: 			'landscape-615428_640.jpg',
				description: 	'A small village',
				explore_button: 'Explore',
				max_chain:  	100,
				possible_treasure:{
				},
				possible_trade:{
					0:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			100,
						trade: 				'general_merchant_sell'
					},
					1:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			50,
						trade: 				'general_merchant_buy'
					},
					2:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			100,
						trade: 				'sell_random_unequipped_gear'
					},
					3:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			10,
						trade: 				'unemployed_mercenary'
					},
					
					
				},
				possible_quests:{				
				},
				possible_mobs: 	{
					0:{
						min_explore_chain: 	0,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',					min:0,max:2,level:5,chance:100},
												1: 	{unit:'bandit_scout',			min:1,max:3,level:2,chance:100,factor:0.5},
												2: 	{unit:'bandit',					min:1,max:3,level:2,chance:100,factor:0.5},
												3: 	{unit:'bandit_healer',			min:1,max:1,level:2,chance:100,factor:0.5},
												4: 	{unit:'bandit_mage',			min:1,max:1,level:2,chance:100,factor:0.5}
											}
					},
					1:{
						min_explore_chain: 	5000,
						max_explore_chain: 	5000,
						chance: 			5,
						mobs: 				{
												0: 	{unit:'none',					min:1,max:1,level:2,chance:100},
												1: 	{unit:'mercenary',				min:3,max:3,level:2,chance:100,factor:1},
												2: 	{unit:'none',					min:2,max:2,level:2,chance:100},
												3: 	{unit:'archer',					min:1,max:1,level:2,chance:100,factor:1},
												4: 	{unit:'merchant',				min:1,max:1,level:2,chance:100,factor:1},
												5: 	{unit:'archer',					min:1,max:1,level:2,chance:100,factor:1},
											}
					},
					2:{
						min_explore_chain: 	5001,
						max_explore_chain: 	5001,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'bandit',			min:2,max:2,level:1,chance:100,factor:1},
												1: 	{unit:'bandit_scout',	min:1,max:1,level:1,chance:100,factor:0.75},
												2: 	{unit:'bandit',			min:2,max:2,level:1,chance:100,factor:0.75},

												3: 	{unit:'bandit_healer',	min:1,max:1,level:1,chance:100,factor:0.75},
												4: 	{unit:'bandit_mage',	min:1,max:1,level:1,chance:100,factor:0.75},
												5: 	{unit:'bandit_commander',	min:1,max:1,level:1,chance:100,factor:1},
												6: 	{unit:'bandit_mage',	min:1,max:1,level:1,chance:100,factor:0.75},
												7: 	{unit:'bandit_healer',	min:1,max:1,level:1,chance:100,factor:0.75},
											}
					},
					3:{
						min_explore_chain: 	11,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',					min:0,max:2,level:5,chance:100},
												1: 	{unit:'bandit_scout',			min:1,max:3,level:2,chance:100,factor:1},
												2: 	{unit:'bandit',					min:1,max:3,level:2,chance:100,factor:1},
												3: 	{unit:'bandit_healer',			min:1,max:1,level:2,chance:100,factor:0.75},
												4: 	{unit:'bandit_mage',			min:1,max:1,level:2,chance:100,factor:0.75}
											}
					},
				},
				recipes: {
				},
			},
		},
		start_level: 		0,
	},

	// ####################################################################################################################################################
	// ############################################ Example #########################################################################################
	// ####################################################################################################################################################
	/*3: 	{
		name: 				'Thistle Woods',
		image: 				'woods-1072819_640.jpg',
		chapters: 			{
			1:{
				name: 			'Logging camp',
				image: 			'ax-1008980_640.jpg',
				description: 	'A small logging camp.',
				explore_button: 'Clear some trees',
				max_chain:  	3,
				possible_treasure:{
					0:{
						min_explore_chain: 	100,
						max_explore_chain: 	100,
						chance: 			5,
						treasure: 			'small_chest'
					},
				},
				possible_trade:{
					0:{
						min_explore_chain: 	5,
						max_explore_chain: 	9,
						chance: 			10,
						trade: 				'hungry_fairy'
					},	
				},
				possible_quests:{
					0:{
						min_explore_chain: 	100,
						max_explore_chain: 	100,
						chance: 			5,
						quest_id: 			'proc1_1_1'
					},					
				},
				possible_mobs: 	{
					0:{
						min_explore_chain: 	0,
						max_explore_chain: 	3,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',				min:0,max:3,level:4,chance:100},
												1: 	{unit:'squirrel',			min:1,max:2,level:5,chance:100},
												2: 	{unit:'tree',				min:1,max:2,level:5,chance:100},
												3: 	{unit:'none',				min:0,max:3,level:4,chance:100},
												4: 	{unit:'squirrel_tree',		min:1,max:1,level:5,chance:100},
												5: 	{unit:'tree',				min:1,max:2,level:5,chance:100},
											}
					},
					1:{
						min_explore_chain: 	4,
						max_explore_chain: 	100,
						chance: 			100,
						mobs: 				{
												0: 	{unit:'none',				min:0,max:3,level:4,chance:100},
												1: 	{unit:'squirrel',			min:1,max:2,level:5,chance:100},
												2: 	{unit:'tree',				min:1,max:2,level:5,chance:100},
												3: 	{unit:'none',				min:0,max:3,level:4,chance:100},
												4: 	{unit:'squirrel_tree',		min:1,max:1,level:5,chance:100},
												5: 	{unit:'squirrel',			min:1,max:2,level:5,chance:100},
											}
					},
				},
				recipes:{
					lumberjacks_axe: 1,
					lumberjack: 1,
					squirrels_lucky_acorn: 1
				}
			},
		},
		recipes: 			[],
		start_level: 		0
	}*/
}

function get_mobs_by_rarity_and_location(rarity, location_id){
	var mobs_by_rarity = {};
	var mob_count = 0;

	if(typeof(locations[location_id]['possible_mobs']) != 'undefined')
	{
		var local_mob_count = count_object(locations[location_id]['possible_mobs']);
		for (current_local_mob = 0; current_local_mob < local_mob_count; current_local_mob++) {
			$.each(locations[location_id]['possible_mobs'], function(key, mob) {
				if(mob['min'] <= rarity && mob['max'] >= rarity && mob['chance'] > (Math.random() * 100)){
					mobs_by_rarity[mob_count] = key;
					++mob_count;
				};
			});
		};
	}
	else
	{
		var current_location = locations[location_id];
		var local_mob_count = count_object(locations[location_id]['mobs']);
		for (current_local_mob = 0; current_local_mob < local_mob_count; current_local_mob++) {
			$.each(available_mobs, function(key, mob) {
				if(mob['rarity'] <= rarity && key == locations[location_id]['mobs'][current_local_mob]){
					mobs_by_rarity[mob_count] = key;
					++mob_count;
				};
			});
		};
	}
	return mobs_by_rarity;
}
