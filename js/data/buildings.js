var all_buildings = {
	aa_town_hall:{
		name: 			'town hall',
		fragment_id: 	'shard',
		image: 			'cards/dream_TradingCard-2024-12-08T062700.373.jpg',
		description: 	'Produces peasants.',
		upgrade_description: 'By upgrading this building you will increase the production and maximum storage.',
		//type: 			'none',

		type: 			'adventures',
		new_expedition_title: 'CHOOSE ACTION',
		//adventures: 	['explore_the_gate'],	
		

		type: 			'shop',

		productions:{
			peasant:{
				base_time: 		24 * 3600,
				base_storage: 	10,
				upgrade_cost_speed:{
					scraps: 		100,
				},
				upgrade_cost_storage:{
					scraps: 		100,
				},
				defeated_heroes_speed_bonusses:{
				},
				production_achievement_bonus: 0.2,
			},
		},

		recipes:{
			stash:{
				costs:{
					scraps: 	50,
				}
			},
			/*chest:{
				//costs_increas_factor: 1.05,
				costs:{
					//peasant: 	5,
					shard: 		1,
				}
			},*/
		},

		shop_type: 		['creature'],
		
		/*recipe_shop:{
			natures_touch:{
				shown:{
					forest_elf: 1,
				},
				available:{
					forest_elf: 1,
				},
				cost:{
					herbs: 		1,
					scraps: 	10,
				}
			},
		},*/

		//expeditions: 	['send_in_peasants','conscript_soldiers'],
	},
	a2_alchemist:{
		name: 			'alchemist lab',
		fragment_id: 	'shard',
		image: 			'cards/dream_TradingCard-2024-11-30T071556.368.jpg',
		description: 	'<i>Allows you to brew potions.</i>',
		upgrade_description: 'By upgrading this building you will increase the production and maximum storage.',
		type: 			'none',
		needed_upgrades:{
			z_b_alchemist_access: 1,
		},
		new_mission_title: 'BREW',
		expeditions: 	['research_new_potion'],
		recipes:{
			clover:{
				costs:{
					horseshoe: 	3,
				}
			},
			jar_of_luck:{
				costs:{
					clover: 	2,
				}
			},
			flask:{
				costs:{
					clover: 		1,
					jar_of_luck: 	2,
				}
			},
		},
		show_potions: true,
		productions:{
			flask:{
				base_time: 		5 * 24 * 3600,
				base_storage: 	1,
				upgrade_cost_speed:{
					scraps: 		100,
				},
				upgrade_cost_storage:{
					scraps: 		100,
				},
				defeated_heroes_speed_bonusses:{
				},
				production_achievement_bonus: 0.1,
			},
		}
	},
	a3_bank:{
		name: 			'bank',
		fragment_id: 	'chest',
		image: 			'cards/dream_TradingCard-2025-01-19T051830.026.jpg',
		description: 	'<i>Produces scraps and stashes.</i>',
		upgrade_description: 'By upgrading this building you will increase the production and maximum storage.',
		type: 			'shop',
		needed_upgrades:{
			z_c_bank_access: 1,
		},
		productions:{
			scraps_placeholder:{
				base_time: 		1 * 3600,
				base_storage: 	100,
				upgrade_cost_speed:{
					scraps: 		100,
				},
				upgrade_cost_storage:{
					scraps: 		100,
				},
				defeated_heroes_speed_bonusses:{
				},
				production_achievement_bonus: 0.1,
			},
			stash:{
				base_time: 		2 * 24 * 3600,
				base_storage: 	5,
				upgrade_cost_speed:{
					scraps: 		100,
				},
				upgrade_cost_storage:{
					scraps: 		100,
				},
				defeated_heroes_speed_bonusses:{
				},
				production_achievement_bonus: 0.1,
			},
		},
		recipes:{
			chest:{
				costs:{
					stash: 		4,
				}
			},
		},
		shop_type: 		['structure'],
	},
	a4_treasury:{
		name: 			'treasury',
		fragment_id: 	'trove',
		image: 			'cards/dream_TradingCard-2025-01-19T055525.326.jpg',
		description: 	'<i>Produces troves.</i>',
		upgrade_description: 'By upgrading this building you will increase the production and maximum storage.',
		type: 			'shop',
		needed_upgrades:{
			z_d_treasury_access: 1,
		},
		productions:{
			trove:{
				base_time: 		5 * 24 * 3600,
				base_storage: 	1,
				upgrade_cost_speed:{
					scraps: 		100,
				},
				upgrade_cost_storage:{
					scraps: 		100,
				},
				defeated_heroes_speed_bonusses:{
				},
				production_achievement_bonus: 0.1,
			},
		},
		recipes:{
			compass:{
				costs:{
					spyglass: 	3,
				}
			},
			treasure_map:{
				costs:{
					compass: 	4,
				}
			},
		},
		shop_type: 		['artifact'],
	},
	
}

/*var all_adventures = {
	explore_the_gate:{
		name: 			'send in units',
		description: 	'Use a ruby to open the gate.<br/>You can then send some units in there.<br/>Maybe they will survive.<br/><br/>Time: 20 hours',
		time: 			(0 * 3600),
		unit_count: 	4,
		costs: 	{
			peasant: 	1,
		},
		ability_suggestions:['hellhound','daemon','resist_fire'],
		results:{
			gate_flame_daemon: 		3
		}
	}
}

var all_adventure_results = {
	gate_flame_daemon:{
		base_success: 	0,
		bonus_success:{
			power: 			3,
			subtypes:{
				imp: 	10
			},
		},
		survive_chance: 0,
		bonus_survive:{
			health: 	2,
			armor: 		2,
			subtypes:{
				imp: 	20,
				imp_warrior: 	20
			},
			abilities:{
				resist_fire: 	20,
				fireproof: 		30,
			}
		},
		no_return_text: '<br/><br/><br/><br/><br/>None survived.',
		fail_text: 		'Your expedition encountered a flame deamon.<br/>It refused to come through the gate.',
		success_text: 	'Your expedition encountered a flame deamon.<br/>It agreed to come through the gate.',
		rewards:{
			im_lord:{
				min: 	1,
				max: 	1
			},
		}
	},
};*/

var all_expeditions = {
	research_new_potion:{
		name: 			'Research potion',
		description: 	'Research and possibly find a new potion recipe.<br/>If you know the potion recipe, it\'s level increases by 1.<br/><br/>Time: 8 hours',
		costs: 	{
			//flask: 				1,
			//scraps: 			100
		},
		rewards:{
			potion: 			1,
		},
		time: 			(8 * 3600),
		success_picks: 			1,
		success_text: 			'You found this potion.',
		cannot_cancel: 			true, 
	},
	send_in_peasants:{
		name: 			'send in peasants',
		description: 	'Send in some peasants to bring back some fire.<br/>Let\'s hope at least one returns.<br/><br/>Time: 8 hours',
		costs: 	{
			peasant: 	3
		},
		rewards:{
			brazier: 		5,
			fire_bolt: 		5,
		},
		allways_rewards:{
			peasant: 		1
		},
		time: 			(0 * 3600),
		success_picks: 			2,
		success_text: 			'One of the peasants returned.',
	},
	conscript_soldiers:{
		name: 			'conscription',
		description: 	'Conscript some soldiers<br/><br/>Time: 4 hours',
		costs: 	{
			peasant: 	3
		},
		time: 			(0 * 3600),
		rewards:{
			soldier: 		1,
			conscript: 		1,
		},
		possible_results:{
			conscription_success: 	50,
			conscription_failure: 	50
		}
	},
}

var all_expedition_results = {
	conscription_success:{
		base_rewards:{
			soldier: {
				min: 	2,
				max: 	5
			}
		},
		additional_reward_picks: 1,
		additional_reward_chances:{
			soldier: 	0,
			conscript: 		50
		},
		additional_rewards:{
			soldier: {
				min: 	1,
				max: 	1
			},
			conscript:{
				min: 	1,
				max: 	1
			}
		},
		text: 			'You conscripted some soldiers',
	},
	conscription_failure:{
		base_rewards:{
			conscript: {
				min: 	2,
				max: 	5
			}
		},
		text: 			'You conscripted some conscripts',
	},
}


$.each(all_buildings, function(building_id, building_info){
	if(building_info['productions'] != undefined)
	{
		$.each(building_info['productions'], function(production_id, production_info){
			if(production_info['defeated_heroes_speed_bonusses'] != undefined)
			{
				$.each(production_info['defeated_heroes_speed_bonusses'], function(hero_id, hero_effect){
					all_buildings[building_id]['productions'][production_id]['defeated_heroes_speed_bonusses'][hero_id] = 0.05;
				});
			}
			if(production_info['clones'] != undefined)
			{
				for (var i = 1; i <= production_info['clones']; i++) {
					if(new_production_info == undefined){var new_production_info = true_copyobject(production_info);}
					
					if(production_info['clone_factor'] != undefined)
					{
						if(new_production_info['unlock_cost'] != undefined)
						{
							new_production_info['unlock_cost'] *= production_info['clone_factor'];
						}
						$.each(new_production_info['upgrade_cost_speed'], function(cost_id, cost_amount){
							new_production_info['upgrade_cost_speed'][cost_id] *= production_info['clone_factor'];
						});
						$.each(new_production_info['upgrade_cost_storage'], function(cost_id, cost_amount){
							new_production_info['upgrade_cost_storage'][cost_id] *= production_info['clone_factor'];
						});
						if(new_production_info['unlock_cost'] == undefined && production_info['clone_start_cost'] != undefined)
						{
							new_production_info['unlock_cost'] = production_info['clone_start_cost'];
						}
					}
					building_info['productions'][production_id + '_' + i] = true_copyobject(new_production_info);

				}
			}
		});
	}
});