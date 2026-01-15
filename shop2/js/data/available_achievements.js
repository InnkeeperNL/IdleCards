var available_achievements = {
	/*firewood: {
		name: 	'firewood',
		background_item: 	'firewood',
		amount: 		10,
		amount_facor: 	2,
		item_procs: 	{
			firewood: 	true,
		},
		skill_procs:{

		},
		item_bonus:{
			firewood: 	1,
		},
		skill_bonus:{

		}
	},
	training: {
		name: 	'training',
		background_item: 	'peasant',
		amount: 		10,
		amount_facor: 	2,
		item_procs: 	{
		},
		skill_procs:{
			training: 	true,
		},
		item_bonus:{
		},
		skill_bonus:{
			training: 	5,
		}
	},*/
}

eachoa(available_items, function(item_id, item_info){
	if(available_achievements[item_id] == undefined){
		available_achievements[item_id] = {
			name: 	'' + item_info['name'],
			text: 	'Sell ' + item_info['name'],
			background_item: 	item_id + '',
			amount: 		achievement_min,
			amount_facor: 	10,
			item_procs: 	{},
			skill_procs:{},
			item_bonus:{},
			skill_bonus:{}
		};
		available_achievements[item_id]['item_procs'][item_id] = true;
		//available_achievements[item_id]['item_bonus'][item_id] = 10;
	}
});

/*eachoa(available_skills, function(skill_id, skill_info){
	if(available_achievements[skill_id] == undefined){
		available_achievements[skill_id] = {
			name: 	'' + skill_id,
			text: 	'Perform actions using the ' + skill_id + ' skill',
			background_item: 	'',
			amount: 		10000,
			amount_facor: 	10,
			item_procs: 	{},
			skill_procs:{},
			item_bonus:{},
			skill_bonus:{}
		};
		available_achievements[skill_id]['skill_procs'][skill_id] = true;
		available_achievements[skill_id]['skill_bonus'][skill_id] = 10;
	}
});*/

available_achievements = sortObj(available_achievements);

var available_ap_bonusses = {
	chef: {
		name: 	'chef',
		text: 	'Get 25% more items from cooking each level.',
		background_item: 	'hamburger',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			cooking: 	25,
		}
	},
	/*lumberjack: {
		name: 	'lumberjack',
		text: 	'Get 25% more leaves, lumber, firewood and hardwood each level.',
		background_item: 	'lumberjack',
		cost: 			3,
		item_bonus:{
			firewood: 	25,
			leaves: 	25,
			lumber: 	25,
			hardwood: 	25
		},
		skill_bonus:{
		}
	},*/
	woodcutter: {
		name: 	'woodcutter',
		text: 	'Get 25% more items from woodcutting.',
		background_item: 	'lumberjack',
		cost: 			1,
		item_bonus:{
			/*firewood: 	25,
			leaves: 	25,
			lumber: 	25,
			hardwood: 	25*/
		},
		skill_bonus:{
			woodcutting: 	25,
		}
	},
	carpenter: {
		name: 	'carpenter',
		text: 	'Get 25% more items from carpentry.',
		background_item: 	'plank',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			carpentry: 	25,
		}
	},
	/*haymaker: {
		name: 	'haymaker',
		text: 	'Get 25% more items from drying grass each level.',
		background_item: 	'hay',
		cost: 			2,
		item_bonus:{
			hay: 		25,
			hay_bale: 	25,
			straw: 		25,
		},
		skill_bonus:{
		}
	},*/
	breeder: {
		name: 	'breeder',
		text: 	'Get 25% more bred animals each level.',
		background_item: 	'chicken',
		cost: 			2,
		item_bonus:{
		},
		skill_bonus:{
			husbandry: 		25
		}
	},
	butcher: {
		name: 	'butcher',
		text: 	'Get 25% more items from butchering.',
		background_item: 	'beef',
		cost: 			2,
		item_bonus:{
		},
		skill_bonus:{
			butchering: 	25,
		}
	},
	/*weaver: {
		name: 	'weaver',
		text: 	'Get 25% more cloth and leather goods each level.',
		background_item: 	'cloth',
		cost: 			3,
		item_bonus:{
			cloth: 			25,
			leather: 		25,
			twine: 			25,
		},
		skill_bonus:{
		}
	},*/
	tailor: {
		name: 	'tailor',
		text: 	'Get 25% more items form tailoring each level.',
		background_item: 	'cap',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			tailoring: 		25
		}
	},
	alchemist: {
		name: 	'alchemist',
		text: 	'Get 25% more items from alchemy each level.',
		background_item: 	'health_potion',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			alchemy: 		25
		}
	},
	/*rocky: {
		name: 	'rocky',
		text: 	'Get 25% more stone each level.',
		background_item: 	'stone',
		cost: 			1,
		item_bonus:{
			stone: 		25,
		},
		skill_bonus:{
		}
	},*/
	/*thirsty: {
		name: 	'thirsty',
		text: 	'Get 25% more water each level.',
		background_item: 	'water',
		cost: 			1,
		item_bonus:{
			water: 		25,
		},
		skill_bonus:{
		}
	},*/
	miner: {
		name: 	'miner',
		text: 	'Get 25% more items from mining each level.',
		background_item: 	'miner',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			mining: 	25
		}
	},
	smelter: {
		name: 	'smelter',
		text: 	'Get 25% more items from smelting each level.',
		background_item: 	'coal',
		cost: 			2,
		item_bonus:{
		},
		skill_bonus:{
			smelting: 	25
		}
	},
	smithy: {
		name: 	'smithy',
		text: 	'Get 25% more items from smithing.',
		background_item: 	'horseshoe',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			smithing: 	25,
		}
	},
	fisherman: {
		name: 	'fisherman',
		text: 	'Get 25% more items from fishing each level.',
		background_item: 	'fisherman',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			fishing: 	25
		}
	},
	farmer: {
		name: 	'farmer',
		text: 	'Get 25% more items from farming and milling each level.',
		background_item: 	'farmer',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			farming: 	25,
			milling: 	25
		}
	},
	hunter: {
		name: 	'hunter',
		text: 	'Get 25% more items from hunting each level.',
		background_item: 	'hunter',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			hunting: 	25
		}
	},
	/*herbalist: {
		name: 	'herbalist',
		text: 	'Get 25% more herbs each level.',
		background_item: 	'parsley',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			herbalism: 	25,
		}
	},*/
	trainer: {
		name: 	'trainer',
		text: 	'Get 25% more items from training.',
		background_item: 	'peasant',
		cost: 			5,
		item_bonus:{
			//peasant: 	25,
		},
		skill_bonus:{
			training: 	25,
		}
	},
	picky: {
		name: 	'picky',
		text: 	'Get 25% more items from picking fruit, flowers and herbs.',
		background_item: 	'apple',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			picking: 	25,
			herbalism: 	25,
		}
	},
	/*grassy: {
		name: 	'grassy',
		text: 	'Get 25% more grass, reeds and kelp.',
		background_item: 	'grass',
		cost: 			2,
		item_bonus:{
			grass: 		25,
			kelp: 		25,
			reed: 		25,
		},
		skill_bonus:{
		}
	},*/
	gatherer:{
		name: 	'gatherer',
		text: 	'Get 25% more items from gathering.',
		background_item: 	'gatherer',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			gathering: 	25,
		}
		
	},
	trader:{
		name: 	'trader',
		text: 	'Get 25% more items from trading.',
		background_item: 	'ship',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			trading: 	25,
		}
		
	},
	packager:{
		name: 	'packager',
		text: 	'Get 25% more items from packaging.',
		background_item: 	'supplies',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			packaging: 	25,
		}
		
	},
	basketcase:{
		name: 	'basketcase',
		text: 	'Get 25% more items from weaving baskets.',
		background_item: 	'basket',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			weaving: 	25,
		}
		
	},
	charming:{
		name: 	'charming',
		text: 	'Get 25% more items from charming.',
		background_item: 	'lucky_charm',
		cost: 			1,
		item_bonus:{
		},
		skill_bonus:{
			charm: 	25,
		}
	},
	/*taxer:{
		name: 	'taxer',
		text: 	'Get 25% more items from taxing.',
		background_item: 	'gold',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			taxing: 	25,
		}
	},*/
	builder:{
		name: 	'builder',
		text: 	'Get 25% more items from construction.',
		background_item: 	'wall',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			construction: 	25,
		}
	}
}

eachoa(available_ap_bonusses, function(bonus_id, bonus_info){
	var bonus_text = bonus_info['text'];
	bonus_info['text'] = bonus_text.replace('25%',ap_effect + '%');
	if(bonus_info['item_bonus'] != undefined && count_object(bonus_info['item_bonus']) > 0)
	{
		var parsed_skill_list = '<br/>Items affected by this:<br/>';
		eachoa(bonus_info['item_bonus'], function(item_bonus_id, bonus_amount){
			available_ap_bonusses[bonus_id]['item_bonus'][item_bonus_id] = ap_effect;
			eachoa(available_items, function(item_id, item_info){
				if(item_id == item_bonus_id)
				{
					parsed_skill_list += '- ' + capitalizeFirstLetter(item_info['name']) + '<br/>';
				}
			});
		});
		bonus_info['text'] += parsed_skill_list;
	}
	if(bonus_info['skill_bonus'] != undefined && count_object(bonus_info['skill_bonus']) > 0)
	{
		var parsed_skill_list = '<br/>Actions affected by this:<br/>';
		eachoa(bonus_info['skill_bonus'], function(skill_id, bonus_amount){
			available_ap_bonusses[bonus_id]['skill_bonus'][skill_id] = ap_effect;
			eachoa(available_actions, function(action_id, action_info){
				var parsed_skill_name = '- ' + capitalizeFirstLetter(action_info['name']);
				if(action_info['skill'] == skill_id && parsed_skill_list.replaceAll(parsed_skill_name) == parsed_skill_list)
				{
					parsed_skill_list += parsed_skill_name + '<br/>';
				}
			});
		});
		bonus_info['text'] += parsed_skill_list;
	}
	
});

available_ap_bonusses = sortObj(available_ap_bonusses);

function check_ap_per_item(){
	eachoa(available_items, function(item_id, item_info){
		var has_ap_bonus = false;
		eachoa(available_ap_bonusses, function(bonus_id, bonus_info){
			if(bonus_info['item_bonus'][item_id] != undefined)
			{
				has_ap_bonus = true;
			}
			if(has_ap_bonus == false)
			{
				eachoa(bonus_info['skill_bonus'], function(skill_id, skill_amount){
					eachoa(available_actions, function(action_id, action_info){
						if(action_info['skill'] == skill_id)
						{
							if(action_info['item_id'] == item_id || (action_info['bonus_loot'] != undefined && action_info['bonus_loot'][item_id] != undefined))
							{
								has_ap_bonus = true;
							}
						}
					});
				});
			}
		});
		if(has_ap_bonus == false)
		{
			console.log(item_id);
		}
	});
}
function check_ap_skills(){
	eachoa(available_actions, function(action_id, action_info){
		var has_ap_bonus = false;
		eachoa(available_ap_bonusses, function(bonus_id, bonus_info){
			if(bonus_info['skill_bonus'][action_info['skill']] != undefined)
			{
				has_ap_bonus = true;
			}
		});
		if(has_ap_bonus == false)
		{
			console.log(action_id);
		}
	});
}

function count_skills_per_location(){
	eachoa(available_locations, function(location_id, location_info){
		var skills_at_this_location = {};
		eachoa(location_info['actions'], function(action_group_id, action_group_info){
			eachoa(action_group_info['actions'], function(action_id, useless_info){
				var action_skill = available_actions[action_id]['skill'];
				if(skills_at_this_location[action_skill] == undefined)
				{
					skills_at_this_location[action_skill] = 0;
				}
				skills_at_this_location[action_skill]++;
			});
		});
		console.log(location_id);
		console.log(skills_at_this_location);
	});
}