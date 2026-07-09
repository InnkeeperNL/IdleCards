var current_upgrade = false;

var all_upgrades = {
	aaa_rewards:{
		name: 			'Rewards',
		description: 	'Increases the rewards of newly summoned enemies by 5% each level.',
		card_image: 	'shard',
		type: 			'summon_reward',
		subtypes:  		['any'],
		amount: 		0.05,
		level_cost_scale: 	1.1,
		cost: 			{shard:5,},
	},
	aab_summon_rarity:{
		name: 			'Summon rarity',
		description: 	'Increases the maximum rarity of summoned enemies.',
		card_image: 	'trapper',
		type: 			'summon_max_rarity',
		subtypes:  		['any'],
		amount: 		1,
		level_cost_scale: 	5,
		amount_fixed: 	true,
		cost: 			{scraps:2,},
	},
	aac_summon_drop_chance:{
		name: 			'Drop chance',
		description: 	'Increases the drop chance of heroes and loot by 10% per level.',
		needed_upgrades:{
			game_speed: 		1,
			aab_summon_rarity: 	5,
		},
		card_image: 	'breaking_ray',
		type: 			'summon_loot_rarity',
		subtypes:  		['any'],
		amount: 		0.1,
		level_cost_scale: 	1.1,
		cost: 			{scraps:10,},
		max_level: 		20,
	},
	aad_used_non_unit_drop_chance:{
		name: 			'Aimed drops',
		description: 	'Increases the chance a used spell or artifact will drop by 10% per level.',
		needed_upgrades:{
			aac_summon_drop_chance: 	5,
		},
		card_image: 	'loupe',
		type: 			'used_non_unit_drop_chance',
		subtypes:  		['any'],
		amount: 		0.1,
		level_cost_scale: 	1.5,
		cost: 			{scraps:25,},
		max_level: 		10,
	},
	aae_stash_drops:{
		name: 			'Stash drops',
		description: 	'Increases the chance stashes will drop as loot from battles by 100%.',
		needed_upgrades:{
			aad_used_non_unit_drop_chance: 1,
			aac_summon_drop_chance: 10,
		},
		card_image: 	'stash',
		type: 			'loot_drop_chance',
		subtypes:  		['stash'],
		amount: 		1,
		level_cost_scale: 	1,
		cost: 			{scraps: 25},
		max_level: 		10,
		//hide_if_maxed: 	true,
	},
	aaf_chest_drops:{
		name: 			'Chest drops',
		description: 	'Increases the chance chests will drop as loot from battles by 100%.',
		needed_upgrades:{
			aae_stash_drops: 1,
			aac_summon_drop_chance: 15,
		},
		card_image: 	'chest',
		type: 			'loot_drop_chance',
		subtypes:  		['chest'],
		amount: 		1,
		level_cost_scale: 	0.9,
		cost: 			{scraps: 50},
		max_level: 		10,
		//hide_if_maxed: 	true,
	},
	aag_trove_drops:{
		name: 			'Trove drops',
		description: 	'Increases the chance troves will drop as loot from battles by 100%.',
		needed_upgrades:{
			aaf_chest_drops: 1,
			aac_summon_drop_chance: 20,
		},
		card_image: 	'trove',
		type: 			'loot_drop_chance',
		subtypes:  		['trove'],
		amount: 		1,
		level_cost_scale: 	0.8,
		cost: 			{scraps: 100},
		max_level: 		10,
		//hide_if_maxed: 	true,
	},
	aah_inventory_rare_chance:{
		name: 			'Rare picks',
		description: 	'Increases the chance stashes, chests and troves contain rare cards.',
		needed_upgrades:{
			aae_stash_drops: 5,
			aaf_chest_drops: 5,
			aag_trove_drops: 5,
		},
		card_image: 	'gloves_of_midas',
		type: 			'inventory_rare_chance',
		subtypes:  		['any'],
		amount: 		100,
		level_cost_scale: 	0.7,
		cost: 			{scraps: 250},
		max_level: 		10,
	},
	floating_chance:{
		name: 			'Floating chance',
		description: 	'Increases the chance a floating reward appears during combat.',
		needed_upgrades:{
			game_speed: 		5,
			aab_summon_rarity: 	10,
		},
		card_image: 	'arcane_bolts',
		type: 			'floating_chance',
		subtypes:  		['any'],
		amount: 		0.05,
		level_cost_scale: 	1,
		cost: 			{scraps:5,},
		max_level: 		10,
	},
	floating_scraps:{
		name: 			'Floating scraps',
		description: 	'Increases the scraps gained by 1 when picking up floating scraps during combat.',
		needed_upgrades:{
			floating_chance: 	5,
		},
		card_image: 	'scraps_placeholder',
		type: 			'floating_scraps',
		subtypes:  		['any'],
		amount: 		1,
		level_cost_scale: 	1,
		cost: 			{scraps:50,},
		max_level: 		9,
	},
	game_speed:{
		name: 			'Game speed',
		description: 	'Increases the game speed by 10% when set to \'fast\' and by 20% when set to \'fastest\'.',
		needed_upgrades:{
			aab_summon_rarity: 	2,
		},
		card_image: 	'messenger',
		type: 			'max_game_speed',
		subtypes:  		['any'],
		amount: 		0.2,
		level_cost_scale: 	2,
		cost: 			{scraps:5,},
		max_level: 		10,
	},
	summon_altar:{
		name: 			'Altar',
		description: 	'Unlocks the altar.',
		needed_upgrades:{
			quest_amount: 	1,
			aaa_rewards: 	4,
		},
		card_image: 	'dark_tower',
		type: 			'show_altar',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{shard: 10, scraps:100,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},
	/*summon_altar_rarity:{
		name: 			'Altar rarity',
		description: 	'Increases the maximum rarity of cards sacrificed at the altar by 5%.',
		needed_upgrades:{
			summon_altar: 	1,
		},
		card_image: 	'reapers_insight',
		type: 			'altar_rarity',
		subtypes:  		['any'],
		level_cost_scale: 	2,
		amount: 		0.05,
		cost: 			{scraps:25,},
		max_level: 		50,
	},*/
	/*summon_buffs:{
		name: 			'Summon buffs',
		description: 	'Increases the number of buffs you can use when summoning an enemy.',
		needed_upgrades:{
			summon_tries: 	4,
		},
		card_image: 	'treasure_map',
		type: 			'summon_max_pre_buffs',
		subtypes:  		['any'],
		amount: 		1,
		amount_fixed: 	true,
		level_cost_scale: 	1.1,
		cost: 			{wheelbarrow:25,},
		max_level: 		4,
	},*/
	/*summon_common_reduction:{
		name: 			'Common reduction',
		description: 	'Reduces the chance of summoning known heroes by 1%.',
		needed_upgrades:{
			summon_tries: 	4,
		},
		card_image: 	'peasant',
		type: 			'common_reduction',
		subtypes:  		['any'],
		level_cost_scale: 	1.5,
		amount: 		0.01,
		cost: 			{scraps:25,},
		max_level: 		10,
	},*/
	summon_tries:{
		name: 			'Summon tries',
		description: 	'Increases the number of times you can try to defeat the same enemy summoned at the altar.',
		needed_upgrades:{
			summon_altar: 	1,
		},
		card_image: 	'meadow',
		type: 			'summon_tries',
		subtypes:  		['any'],
		amount: 		1,
		amount_fixed: 	true,
		level_cost_scale: 	1,
		//level_cost_type: 'next_level',
		cost: 			{scraps:100,},
		max_level: 		4,
	},
	/*merchant_offers:{
		name: 			'Merchant offers',
		description: 	'Reduces the maximum scraps requested by merchants offering cards by 25%.<br>Only affects new offers.',
		needed_upgrades:{
			z_a_town_access: 1,
			aab_summon_rarity: 	10,
		},
		card_image: 	'ore',
		type: 			'merchant_sell',
		subtypes:  		['any'],
		amount: 		0.25,
		level_cost_scale: 	1,
		cost: 			{scraps:10,},
		max_level: 		10,
	},*/
	merchant_sales:{
		name: 			'Merchant sales',
		description: 	'Increases the maximum scraps offered by merchants who want to buy cards by 25%.<br>Only affects new offers.',
		needed_upgrades:{
			z_a_town_access: 1,
		},
		card_image: 	'thief',
		type: 			'merchant_buy',
		subtypes:  		['any'],
		amount: 		0.25,
		level_cost_scale: 	1,
		cost: 			{scraps:10,},
		max_level: 		10,
	},
	merchant_sales_count:{
		name: 			'Merchant count',
		description: 	'Increases the number of merchants in town.',
		needed_upgrades:{
			merchant_sales: 	5,
		},
		card_image: 	'scribe',
		type: 			'merchant_count',
		subtypes:  		['any'],
		amount: 		1,
		amount_fixed: 	true,
		level_cost_scale: 	0.5,
		cost: 			{scraps:250,},
		max_level: 		4,
	},
	merchant_sales_decline:{
		name: 			'Decline merchants',
		description: 	'Allows you to decline merchants. A new merchant will arrive in 10 minutes.',
		needed_upgrades:{
			merchant_sales_count: 1,
		},
		card_image: 	'runner',
		type: 			'decline_merchants',
		subtypes:  		['any'],
		amount: 		0.25,
		level_cost_scale: 	1,
		cost: 			{scraps:500,},
		max_level: 		1,
	},
	merchant_sales_decline_speed:{
		name: 			'Merchant cooldown',
		description: 	'Reduces the time it takes for a new merchant to arrive after selling or declining.',
		needed_upgrades:{
			merchant_sales_decline: 1,
		},
		card_image: 	'skirmisher',
		type: 			'offer_decline_time',
		subtypes:  		['any'],
		amount: 		0.25,
		level_cost_scale: 	1,
		cost: 			{scraps:750,},
		max_level: 		10,
	},
	peasants_gained:{
		name: 			'Peasants gained',
		description: 	'Increases the number of peasants gained by 10%.',
		needed_upgrades:{
			z_a_town_access: 1,
		},
		card_image: 	'peasant',
		type: 			'loot',
		subtypes:  		['peasant'],
		amount: 		0.1,
		level_cost_scale: 	1.1,
		cost: 			{scraps:10,},
		max_level: 		10,
	},
	power_moves:{
		name: 			'Power moves',
		description: 	'Increases the game speed by an additional 10% when set to \'fast\' and by 20% when set to \'fastest\'.',
		needed_upgrades:{
			game_speed: 		10,
			peasants_gained: 	10,
		},
		card_image: 	'lone_charge',
		type: 			'max_game_speed',
		subtypes:  		['any'],
		amount: 		0.2,
		level_cost_scale: 	0.5,
		cost: 			{scraps:1000,},
		max_level: 		5,
	},
	quest_amount:{
		name: 			'Quest difficulty',
		description: 	'Increases the difficulty and rewards of quests by 100%. This may unlock new possible rewards.',
		needed_upgrades:{
			aaa_rewards: 3,
		},
		card_image: 	'scroll',
		type: 			'quest_amount',
		subtypes:  		['any'],
		amount: 		1,
		level_cost_scale: 	1,
		cost: 			{scraps:10,},
		max_level: 		20,
	},
	quest_reward:{
		name: 			'Quest rewards',
		description: 	'Increases the rewards of new quests by 5%.',
		needed_upgrades:{
			quest_amount: 10,
		},
		card_image: 	'rat_flute',
		type: 			'quest_reward',
		subtypes:  		['any'],
		amount: 		0.05,
		level_cost_scale: 	1,
		cost: 			{scraps:500,},
		max_level: 		10,
	},
	/*wave_access:{
		name: 			'Waves',
		description: 	'Unlocks wave battles.',
		needed_upgrades:{
			aab_summon_rarity: 	15,
		},
		card_image: 	'conscription',
		type: 			'wave_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{scraps:250,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},*/
	/*wave_min_power:{
		name: 			'Wave start',
		description: 	'Increases the power of the first wave.',
		needed_upgrades:{
			wave_access: 1,
		},
		card_image: 	'summon_imp',
		type: 			'wave_min_power',
		subtypes:  		['any'],
		level_cost_scale: 	2,
		amount: 		0.1,
		amount_fixed: 	true,
		cost: 			{scraps:5,},
		max_level: 		40,
	},*/
	/*wave_power_increase:{
		name: 			'Wave growth',
		description: 	'Reduces the growth of power per wave.',
		needed_upgrades:{
			wave_access: 1,
		},
		card_image: 	'fear',
		type: 			'wave_power_increase',
		subtypes:  		['any'],
		level_cost_scale: 	1.1,
		amount: 		0.025,
		amount_fixed: 	true,
		cost: 			{scraps:10,},
		max_level: 		40,
	},*/
	z_a_town_access:{
		name: 			'Town',
		description: 	'Unlocks the town. This produces scraps and merchants buy cards here.',
		needed_upgrades:{
			floating_chance:  	1,
			aab_summon_rarity: 	20,
		},
		card_image: 	'house',
		type: 			'show_town',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{scraps:50,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},
	/*z_aa_library_access:{
		name: 			'Reasearch',
		description: 	'Unlocks the library.',
		needed_upgrades:{
			z_a_town_access: 1,
			wave_access: 1,
		},
		card_image: 	'library',
		type: 			'library_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{shard: 5, scraps:250,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},*/
	/*z_b_bank_access:{
		name: 			'Banking',
		description: 	'Unlocks the bank. This produces scraps and stashes.',
		needed_upgrades:{
			z_a_town_access: 1,
			wave_access: 1,
		},
		card_image: 	'stash',
		type: 			'bank_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{shard: 25, scraps:2500,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},
	z_c_alchemist_access:{
		name: 			'Alchemist',
		description: 	'Unlocks the alchemist lab. This lets you brew potions for permanent bonusses.',
		needed_upgrades:{
			z_b_bank_access: 1,
		},
		card_image: 	'herbalist',
		type: 			'alchemist_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{shard: 100, scraps:10000,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},*/
	/*z_d_treasury_access:{
		name: 			'Treasury',
		description: 	'Unlocks the treasury. This produces troves, lets you convert spyglasses into higher tier items and trades artifacts.',
		needed_upgrades:{
			z_c_alchemist_access: 1,
		},
		card_image: 	'trove',
		type: 			'treasure_access',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{shard: 500, scraps: 100000,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},*/
	/*z_d_trove_drops:{
		name: 			'Trove drops',
		description: 	'Increases the chance troves will drop as loot from battles by 100%.',
		needed_upgrades:{
			z_d_treasury_access: 1,
		},
		card_image: 	'archaeologist',
		type: 			'loot_drop_chance',
		subtypes:  		['trove'],
		amount: 		1,
		level_cost_scale: 	1.5,
		cost: 			{shard: 5},
		max_level: 		10,
		//hide_if_maxed: 	true,
	},*/
	/*zz_a_quick_craft:{
		name: 			'Quick craft',
		description: 	'Unlocks quick crafting. This will let you craft any card only using peasants. You will not need to know previous recipes.',
		needed_upgrades:{
			z_a_town_access: 1,
			wave_access: 1,
			z_b_bank_access: 1,
		},
		card_image: 	'carpenter',
		type: 			'quick_craft',
		subtypes:  		['any'],
		amount: 		100,
		amount_fixed: 	true,
		cost: 			{peasant: 1000, scraps:10000,},
		max_level: 		1,
		//hide_if_maxed: 	true,
	},*/

	// ************************************************* POTIONS ************************************************
	
	zz_common_potion:{
		name: 			'Common potion',
		description: 	'1% reduced chance of summoning known heroes.',
		card_image: 	'mana_bulb',
		upgrade_type: 	'potion',
		type: 			'common_reduction',
		subtypes:  		['any'],
		amount:  		0.01,
		level_cost_scale: 	20,
		cost:{
			flask: 		1,
			//scraps:  	100,
		}
	},
	zz_burglar_potion:{
		name: 			'Burglar potion',
		description: 	'2% bonus chance battles reward cards and items in stead of scraps.',
		card_image: 	'burglar',
		upgrade_type: 	'potion',
		type: 			'summon_loot_rarity',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		2,
			//scraps:  	100,
		}
	},
	zz_chest_potion:{
		name: 			'Chest potion',
		description: 	'2% bonus to rewards of newly summoned enemies.',
		card_image: 	'chest',
		upgrade_type: 	'potion',
		type: 			'summon_reward',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		5,
			//scraps:  	100,
		}
	},
	zz_horseshoe_potion:{
		name: 			'Horseshoe potion',
		description: 	'2% increase to the number of horseshoes gained.',
		card_image: 	'horseshoe',
		upgrade_type: 	'potion',
		type: 			'loot',
		subtypes:  		['horseshoe'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		1,
			//scraps:  	100,
		}
	},
	zz_mercenary_potion:{
		name: 			'Mercenary potion',
		description: 	'2% increase to the maximum scraps offered by merchants.',
		card_image: 	'mercenary',
		upgrade_type: 	'potion',
		type: 			'merchant_buy',
		subtypes:  		['any'],
		amount:  		0.01,
		level_cost_scale: 	20,
		cost:{
			flask: 		2,
			//scraps:  	100,
		}
	},
	zz_peasant_potion:{
		name: 			'Peasant potion',
		description: 	'2% increase to the number of peasants gained.',
		card_image: 	'peasant',
		upgrade_type: 	'potion',
		type: 			'loot',
		subtypes:  		['peasant'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		2,
			//scraps:  	100,
		}
	},
	zz_pirate_potion:{
		name: 			'Pirate potion',
		description: 	'2% reduction to the maximum scraps requested by merchants.',
		card_image: 	'pirate',
		upgrade_type: 	'potion',
		type: 			'merchant_sell',
		subtypes:  		['any'],
		amount:  		0.01,
		level_cost_scale: 	20,
		cost:{
			flask: 		2,
			//scraps:  	100,
		}
	},
	zz_scavenger_potion:{
		name: 			'Scavanger potion',
		description: 	'2% bonus to picked up floating scraps during combat.',
		card_image: 	'scavanger',
		upgrade_type: 	'potion',
		type: 			'floating_scraps',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		2,
			//scraps:  	100,
		}
	},
	zz_scraps_potion:{
		name: 			'Scraps potion',
		description: 	'2% bonus to gained scraps.',
		card_image: 	'scraps_placeholder',
		upgrade_type: 	'potion',
		type: 			'loot',
		subtypes:  		['scraps'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		4,
			//scraps:  	100,
		}
	},
	zz_shard_potion:{
		name: 			'Shard potion',
		description: 	'2% bonus to gained shards.',
		card_image: 	'shard',
		upgrade_type: 	'potion',
		type: 			'loot',
		subtypes:  		['shard'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		4,
			//scraps:  	100,
		}
	},
	zz_spyglass_potion:{
		name: 			'Spyglass potion',
		description: 	'2% bonus to gained spyglasses.',
		card_image: 	'spyglass',
		upgrade_type: 	'potion',
		type: 			'loot',
		subtypes:  		['spyglass'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		1,
			//scraps:  	100,
		}
	},
	zz_stash_potion:{
		name: 			'Stash potion',
		description: 	'2% bonus to gained stashes.',
		card_image: 	'stash',
		upgrade_type: 	'potion',
		type: 			'loot',
		subtypes:  		['stash'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		2,
			//scraps:  	100,
		}
	},
	zz_summon_potion:{
		name: 			'Summon potion',
		description: 	'2% bonus the maximum rarity of summoned enemies.',
		card_image: 	'summon_imp',
		upgrade_type: 	'potion',
		type: 			'summon_max_rarity',
		subtypes:  		['any'],
		amount:  		0.02,
		level_cost_scale: 	20,
		cost:{
			flask: 		1,
			//scraps:  	100,
		}
	},

	// ************************************************* TREASURES ************************************************

	crown_bonus:{
		upgrade_type: 	'passive',
		type: 			'loot',
		subtypes:  		['peasant'],
		amount:  		0.01,
		cost:{
			crown:  	1,
		}
	},
	cup_of_blood_bonus:{
		upgrade_type: 	'passive',
		type: 			'altar_rarity',
		subtypes:  		['any'],
		amount:  		0.01,
		cost:{
			cup_of_blood:  	1,
		}
	},
	enchanted_net:{
		upgrade_type: 	'passive',
		type: 			'floating_scraps',
		subtypes:  		['any'],
		amount:  		0.01,
		cost:{
			enchanted_net:  	1,
		}
	},
	endless_pouch_bonus:{
		upgrade_type: 	'passive',
		type: 			'loot',
		subtypes:  		['scraps'],
		amount:  		0.01,
		cost:{
			endless_pouch:  	1,
		}
	},
	gloves_of_midas:{
		upgrade_type: 	'passive',
		type: 			'loot',
		subtypes:  		['trove'],
		amount:  		0.01,
		cost:{
			gloves_of_midas:  	1,
		}
	},
	golden_saddle:{
		upgrade_type: 	'passive',
		type: 			'summon_reward',
		subtypes:  		['any'],
		amount:  		0.01,
		cost:{
			golden_saddle:  	1,
		}
	},
	loupe_bonus:{
		upgrade_type: 	'passive',
		type: 			'loot',
		subtypes:  		['shard'],
		amount:  		0.01,
		cost:{
			loupe:  	1,
		}
	},
	rope_of_binding_bonus:{
		upgrade_type: 	'passive',
		type: 			'summon_loot_rarity',
		subtypes:  		['any'],
		amount:  		0.01,
		cost:{
			rope_of_binding:  	1,
		}
	},
	thieves_cloak:{
		upgrade_type: 	'passive',
		type: 			'merchant_buy',
		subtypes:  		['any'],
		amount:  		0.01,
		cost:{
			thieves_cloak:  	1,
		}
	},
	war_banner:{
		upgrade_type: 	'passive',
		type: 			'summon_max_rarity',
		subtypes:  		['any'],
		amount:  		0.01,
		cost:{
			war_banner:  	1,
		}
	},
	
	/*z_summon_buffs:{
		name: 			'Summon buffs',
		description: 	'Increases the number of buffs you can use at the same time.',
		card_image: 	'spyglass',
		type: 			'summon_max_pre_buffs',
		subtypes:  		['any'],
		amount: 		1,
		amount_fixed: 	true,
		level_cost_scale: 1,
		cost: 			{spyglass:1,},
	},*/
	/*hero_abilities:{
		name: 			'Hero abilities',
		description: 	'Increases the level of your hero\'s abilities by 5% each upgrade.',
		card_image: 	'archmage',
		type: 			'ability_level',
		subtypes:  		['hero'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	hero_health:{
		name: 			'Hero health',
		description: 	'Increases your hero\'s health by 5% each upgrade.',
		card_image: 	'princess',
		type: 			'health',
		subtypes:  		['hero'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	hero_power:{
		name: 			'Hero power',
		description: 	'Increases your hero\'s power by 5% each upgrade.',
		card_image: 	'barbarian_sisters',
		type: 			'power',
		subtypes:  		['hero'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	card_abilities:{
		name: 			'Card abilities',
		description: 	'Increases the level of abilities of your played cards by 5% each upgrade.',
		card_image: 	'bird_trainer',
		type: 			'ability_level',
		subtypes:  		['unit'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	card_health:{
		name: 			'Card health',
		description: 	'Increases the health of your played cards by 5% each upgrade.',
		card_image: 	'blue_butterflies',
		type: 			'health',
		subtypes:  		['unit'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},
	card_power:{
		name: 			'Card power',
		description: 	'Increases the power of your played cards by 5% each upgrade.',
		card_image: 	'innkeeper',
		type: 			'power',
		subtypes:  		['unit'],
		level_cost_scale: 	10,
		cost: 			{scraps:50,},
	},*/
};

$.each(all_upgrades, function(upgrade_id, upgrade_info){
	if(upgrade_info['card_image'] != undefined && all_available_cards[upgrade_info['card_image']] != undefined && upgrade_info['image'] == undefined)
	{
		upgrade_info['image'] = all_available_cards[upgrade_info['card_image']]['image'];
	}
	if(upgrade_info['upgrade_type'] == undefined)
	{
		upgrade_info['upgrade_type'] = 'main';
	}
	if(upgrade_info['amount'] == undefined)
	{
		upgrade_info['amount'] = 0.10;
	}
	if(upgrade_info['upgrade_type'] == 'main' && upgrade_info['cost'] == undefined)
	{
		upgrade_info['cost'] = {shard: 1};
	}
/*	if(upgrade_info['level_cost_scale'] != undefined)
	{
		if(upgrade_info['upgrade_type'] == 'potion')
		{
			upgrade_info['level_cost_scale'] /= 5;
		}
		upgrade_info['level_cost_scale'] /= 2;
	}*/
});

all_upgrades = sortObj(all_upgrades);

function toggle_show_max_upgrades(){
	var toggled = false;
	if(gamedata['show_max_upgrades'] == undefined){gamedata['show_max_upgrades'] = true;}
	if(gamedata['show_max_upgrades'] == true && toggled == false){gamedata['show_max_upgrades'] = false;toggled = true;}
	if(gamedata['show_max_upgrades'] == false && toggled == false){gamedata['show_max_upgrades'] = true;toggled = true;}
	saveToLocalStorage();
}

function show_upgrades(){
	var any_upgrade_maxed = false;
	if(gamedata['show_max_upgrades'] == undefined){gamedata['show_max_upgrades'] = true;}
	if(gamedata['show_max_upgrades'] == true){$('.show_max_upgrades_button').css('color','rgba(255,255,255,1)');}
	if(gamedata['show_max_upgrades'] == false){$('.show_max_upgrades_button').css('color','rgba(255,255,255,0.2)');}
	if(gamedata['upgrades'] == undefined){
		gamedata['upgrades'] = {};
		saveToLocalStorage();
	}

	all_upgrades = sortObj(all_upgrades);
	gamedata['upgrades'] = sortObj(gamedata['upgrades']);

	var parsed_upgrade_buttons = '';
	//parsed_upgrade_buttons += '<div class="upgrades_description">Upgrades are effective during endless waves battles.</div>'
	$.each(all_upgrades, function(upgrade_id, upgrade_info){
		var can_show = true;
		var requirements_met = true;

		$.each(upgrade_info['needed_upgrades'], function(needed_id, needed_level){
			if(gamedata['upgrades'][needed_id] == undefined /*|| gamedata['upgrades'][needed_id] < needed_level*/)
			{
				can_show = false;
			}
			if(gamedata['upgrades'][needed_id] != undefined && gamedata['upgrades'][needed_id] < needed_level)
			{
				requirements_met = false;
			}
		});
		if(upgrade_info['hide_if_maxed'] != undefined && upgrade_info['hide_if_maxed'] == true && gamedata['upgrades'][upgrade_id] != undefined && gamedata['upgrades'][upgrade_id] >= upgrade_info['max_level'])
		{
			can_show = false;
		}
		if(gamedata['show_max_upgrades'] == false && gamedata['upgrades'][upgrade_id] != undefined && gamedata['upgrades'][upgrade_id] >= upgrade_info['max_level'])
		{
			can_show = false;
		}
		if(gamedata['upgrades'][upgrade_id] != undefined && gamedata['upgrades'][upgrade_id] >= upgrade_info['max_level'])
		{
			any_upgrade_maxed = true;
		}
		if(gamedata['upgrades'][upgrade_id] != undefined && gamedata['upgrades'][upgrade_id] > upgrade_info['max_level'])
		{
			gamedata['upgrades'][upgrade_id] = upgrade_info['max_level'];
			saveToLocalStorage();
		}

			
		/*$.each(upgrade_info['cost'], function(cost_id, cost_amount){
			if(all_available_cards[cost_id] != undefined && gamedata['owned_cards'][cost_id] == undefined && cost_id != 'shard')
			{
				can_show = false;
			}
		});*/
		if(upgrade_info['upgrade_type'] != 'main'){can_show = false;}
		if(can_show == true)
		{
			var parsed_upgrade_button = parse_upgrade_button(upgrade_id, requirements_met);
			parsed_upgrade_buttons += parsed_upgrade_button;
		}
	});

	if(any_upgrade_maxed == true)
	{
		$('.show_max_upgrades_button').show();
	}
	else
	{
		$('.show_max_upgrades_button').hide();
	}
	$('.upgrades_container').html(parsed_upgrade_buttons);
}

function parse_upgrade_button(upgrade_id, requirements_met){
	var parsed_upgrade_button = '';
	if(all_upgrades[upgrade_id] != undefined)
	{
		var upgrade_info = all_upgrades[upgrade_id];
		var effective_level = 0;
		if(gamedata['upgrades'][upgrade_id] != undefined){effective_level = gamedata['upgrades'][upgrade_id];}
		var can_upgrade = 100;
		if(upgrade_info['max_level'] == undefined || upgrade_info['max_level'] > effective_level)
		{
			can_upgrade = check_can_upgrade_upgrade(upgrade_id, true);
		}
		var upgrade_availabe = '';
		if(can_upgrade < 100)
		{
			upgrade_availabe = 'hero_unavailable';
		}
		if(requirements_met == true)
		{
			parsed_upgrade_button += '<div class="menu_button third single_area ' + upgrade_availabe + '" onclick="current_upgrade=\'' + upgrade_id + '\';set_upgrades_back_button(\'upgrades\')" data-target-content="single_upgrade">';
			parsed_upgrade_button += 	'<div class="bg" style="background-image:url(images/' + upgrade_info['image'] + ')"></div>';
			parsed_upgrade_button += 	'<span>' + capitalizeFirstLetter(upgrade_info['name']) + '</span>';
			if(upgrade_info['max_level'] == undefined || upgrade_info['max_level'] > effective_level)
			{
				if(upgrade_info['max_level'] == undefined)
				{
					parsed_upgrade_button += '<span class="max_level">' + effective_level + '</span>';
				}
				else
				{
					parsed_upgrade_button += '<span class="max_level">' + effective_level + '/' + upgrade_info['max_level'] + '</span>';
				}
				
				parsed_upgrade_button += '<div class="upgrade_percent" style="width:' + (100 - can_upgrade) + '%"></div>';
			}
			else
			{
				parsed_upgrade_button += '<span class="max_level">MAX</span>';
				parsed_upgrade_button += '<div class="upgrade_percent" style="width:100%"></div>';
			}
		}
		else
		{
			parsed_upgrade_button += '<div class="menu_button third single_area hero_unavailable" onclick="current_upgrade=\'' + upgrade_id + '\';set_upgrades_back_button(\'upgrades\')" data-target-content="single_upgrade">';
			parsed_upgrade_button += 	'<div class="bg" style="background-image:url(images/' + upgrade_info['image'] + ')"></div>';
			parsed_upgrade_button += 	'<span style="color:rgba(255,0,0,1)">';
			var unlock_gotten = 0;
			var unlock_needed = 0;
			$.each(upgrade_info['needed_upgrades'], function(needed_id, needed_level){
				if(gamedata['upgrades'][needed_id] == undefined || gamedata['upgrades'][needed_id] < needed_level)
				{
					var effective_needed_level = 0;
					if(gamedata['upgrades'][needed_id] != undefined){effective_needed_level = gamedata['upgrades'][needed_id];}
					unlock_needed += needed_level;
					unlock_gotten += effective_needed_level;
					parsed_upgrade_button += all_upgrades[needed_id]['name'] + ': ' + effective_needed_level + ' / ' + needed_level + '<br/>';
				}
			});
			parsed_upgrade_button += 	'</span>';
			parsed_upgrade_button += 	'<div class="upgrade_percent" style="width:' + (100 - ((unlock_gotten / unlock_needed) * 100)) + '%"></div>';
		}
		parsed_upgrade_button += '</div>';
	}
	return parsed_upgrade_button;
};

function parse_potion_button(upgrade_id, potion_known){
	var parsed_upgrade_button = '';
	if(all_upgrades[upgrade_id] != undefined && (potion_known == undefined || potion_known == true))
	{
		var can_upgrade = check_can_upgrade_upgrade(upgrade_id);
		var upgrade_info = all_upgrades[upgrade_id];
		var upgrade_availabe = '';
		if(can_upgrade == false)
		{
			upgrade_availabe = 'hero_unavailable';
		}
		parsed_upgrade_button += '<div class="potion_button ' + upgrade_availabe + '" onclick="current_upgrade=\'' + upgrade_id + '\';set_upgrades_back_button(\'single_building\');show_content(\'single_upgrade\')">';
		parsed_upgrade_button += 	'<div class="bg potion_content" style="background-image:url(images/' + upgrade_info['image'] + ')"></div>';
		parsed_upgrade_button += 	'<div class="bg potion_overlay" style="background-image:url(images/mason-jar.svg)"></div>';
		//parsed_upgrade_button += 	'<span>' + capitalizeFirstLetter(upgrade_info['name']) + '</span>';
		if(gamedata['upgrades'][upgrade_id] != undefined)
		{
			parsed_upgrade_button += '<span class="max_level">' + gamedata['upgrades'][upgrade_id] + '</span>';
		}
		parsed_upgrade_button += '</div>';
	}
	else
	{
		parsed_upgrade_button += '<div class="potion_button hero_unavailable">';
		parsed_upgrade_button += 	'<div class="bg potion_overlay" style="background-image:url(images/mason-jar.svg)"></div>';
		parsed_upgrade_button += '<span class="max_level">?</span>';
		parsed_upgrade_button += '</div>';
	}
	return parsed_upgrade_button;
};

function set_upgrades_back_button(target){
	$('.upgrades_back_button').attr('data-target-content',target);
}

function check_can_upgrade_upgrade(upgrade_id, return_cost_percent){
	var upgrade_info = all_upgrades[upgrade_id];
	var can_upgrade = true;
	var total_cost = 0;
	var have_cost = 0;
	$.each(upgrade_info['cost'], function(cost_id, cost_amount){
		var actual_cost = cost_amount;
		if(gamedata['upgrades'][upgrade_id] != undefined)
		{
			actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][upgrade_id], actual_cost, upgrade_info);
		}
		var cost_value = 1;
		if(all_available_cards[cost_id] != undefined)
		{
			cost_value = all_available_cards[cost_id]['value'];
		}
		total_cost += cost_value * actual_cost;
	});

	$.each(upgrade_info['cost'], function(cost_id, cost_amount){
		var owned_amount = 0;
		var actual_cost = cost_amount;
		if(gamedata['upgrades'][upgrade_id] != undefined)
		{
			actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][upgrade_id], actual_cost, upgrade_info);
		}
		if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
		if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
		var cost_value = 1;
		if(all_available_cards[cost_id] != undefined)
		{
			cost_value = all_available_cards[cost_id]['value'];
		}
		if(owned_amount < actual_cost)
		{
			can_upgrade = false;
			have_cost += owned_amount * cost_value;
		}
		else
		{
			have_cost += cost_value * actual_cost;
		}
	});
	if(return_cost_percent != undefined && return_cost_percent == true)
	{
		return (have_cost / total_cost) * 100;
	}
	return can_upgrade;
}

function show_single_upgrade(){
	if(all_upgrades[current_upgrade] != undefined)
	{
		var upgrade_info = all_upgrades[current_upgrade];
		var parsed_upgrade = '';
		var can_upgrade = true;
		if(upgrade_info['cost'] == undefined){can_upgrade = false;}
		var effective_level = 0;
		if(gamedata['upgrades'][current_upgrade] != undefined){effective_level = gamedata['upgrades'][current_upgrade];}
		var requirements_met = true;
		$.each(upgrade_info['needed_upgrades'], function(needed_id, needed_level){
			if(gamedata['upgrades'][needed_id] != undefined && gamedata['upgrades'][needed_id] < needed_level)
			{
				requirements_met = false;
			}
		});
		parsed_upgrade += '<h1>' + capitalizeFirstLetter(upgrade_info['name']) + '</h1><br/>';
		if(requirements_met == true)
		{
			parsed_upgrade += 'level ' + effective_level + '';
		}
		parsed_upgrade += '<br/><br/>';
		/*if(upgrade_info['amount_fixed'] == undefined || upgrade_info['amount_fixed'] == false)
		{
			if(effective_level > 0)
			{
				var total_factor = get_upgrade_effect(effective_level, upgrade_info['amount']);
				parsed_upgrade += 'Effect: +' + (Math.round((total_factor - 1) * 10000) / 100) + '% ' + upgrade_info['description'] + '<br/>';
			}
			else
			{
				parsed_upgrade += 'Effect: +0% ' + upgrade_info['description'] + '<br/>';
			}
		}
		else
		{
			var total_factor = get_upgrade_effect(effective_level, upgrade_info['amount']);
			parsed_upgrade += 'Effect: +' + (Math.round((total_factor - 1) * 100) / 100) + ' ' + upgrade_info['description'] + '<br/>';
		}*/
		parsed_upgrade += 'Effect: ' + upgrade_info['description'] + '<br/><br/>';
		if(requirements_met == true)
		{
			if(upgrade_info['max_level'] == undefined || upgrade_info['max_level'] > effective_level)
			{
				$.each(upgrade_info['cost'], function(cost_id, cost_amount){
					var owned_amount = 0;
					var actual_cost = cost_amount;
					if(gamedata['upgrades'][current_upgrade] != undefined)
					{
						actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][current_upgrade], actual_cost, upgrade_info);
					}
					else
					{
						actual_cost = Math.ceil(actual_cost);
					}
					if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
					if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
					var cost_name = 'Scraps';
					if(all_available_cards[cost_id] != undefined){cost_name = capitalizeFirstLetter(all_available_cards[cost_id]['name']);}
					if(owned_amount < actual_cost)
					{
						can_upgrade = false;
						parsed_upgrade += cost_name + ': <span style="color:red">' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '<br/></span>';
					}
					else
					{
						parsed_upgrade += cost_name + ': <span>' + nFormatter(owned_amount,3) + ' / ' + nFormatter(actual_cost,3) + '<br/></span>';
					}
				});
				if(can_upgrade == true)
				{
					parsed_upgrade += 	'<br/><div class="production_upgrade_button" onclick="upgrade_current_upgrade()">UPGRADE</div>';
				}
			}
			else
			{
				parsed_upgrade += '<span style="color:green">Maxed</span>';
			}
		}
		$('.single_upgrade_container').html(parsed_upgrade);
	}
	else
	{
		show_content('upgrades');
	}
}

function get_upgrade_effect(level, amount){
	var total_factor = 1 + ((Math.sqrt(level / 10) * 10) * amount);
	var total_factor = 1 + (level * amount);
	return total_factor;
}

function upgrade_current_upgrade(){
	if(all_upgrades[current_upgrade] != undefined)
	{
		var upgrade_info = all_upgrades[current_upgrade];
		var can_upgrade = true;
		$.each(upgrade_info['cost'], function(cost_id, cost_amount){
			var owned_amount = 0;
			var actual_cost = cost_amount + 0;
			if(gamedata['upgrades'][current_upgrade] != undefined)
			{
				actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][current_upgrade], actual_cost, upgrade_info);
			}
			else
			{
				actual_cost = Math.ceil(actual_cost);
			}
			if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
			if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
			if(owned_amount < actual_cost)
			{
				can_upgrade = false;
			}
		});
		if(can_upgrade == true)
		{
			$.each(upgrade_info['cost'], function(cost_id, cost_amount){
				var owned_amount = 0;
				var actual_cost = cost_amount + 0;
				if(gamedata['upgrades'][current_upgrade] != undefined)
				{
					actual_cost = calculate_upgrade_upgrade_cost(gamedata['upgrades'][current_upgrade], actual_cost, upgrade_info);
				}
				else
				{
					actual_cost = Math.ceil(actual_cost);
				}
				if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0)
				{
					gamedata['owned_cards'][cost_id] -= actual_cost;
				}
				if(cost_id == 'scraps')
				{
					gamedata['scraps'] -= actual_cost;
				}
			});
			if(gamedata['upgrades'][current_upgrade] == undefined){gamedata['upgrades'][current_upgrade] = 0;}
			gamedata['upgrades'][current_upgrade] += 1;
			saveToLocalStorage();
		}
	}
	show_content('single_upgrade');
}

var upgrade_scales = {
	// higher is slower
	main: 		3,
	passive: 	5,
	potion: 	10,
}

function calculate_upgrade_upgrade_cost(level, cost, upgrade_info){
	var upgrade_type = upgrade_info['upgrade_type'];
	var scale = 5;
	if(upgrade_type != undefined && upgrade_scales[upgrade_type] != undefined)
	{
		scale = upgrade_scales[upgrade_type];
	}
	if(upgrade_info['level_cost_scale'] != undefined)
	{
		scale = upgrade_info['level_cost_scale'];
		return Math.round(cost * (1 + sqr(level / scale)));
	}
	if(upgrade_info['level_cost_type'] != undefined && upgrade_info['level_cost_type'] == 'next_level')
	{
		return cost * (level + 1);
	}
	else
	{
		return cost;
	}
	return Math.round(cost * (1 + sqr(level / scale)));
}

function get_upgrade_factor(type, subtypes, forced){
	if(gamedata['upgrades'] == undefined){
		gamedata['upgrades'] = {};
		saveToLocalStorage();
	}
	var total_upgrade_factor = 1;
	/*$.each(gamedata['upgrades'], function(upgrade_id, upgrade_level){
		if(all_upgrades[upgrade_id] != undefined)
		{
			var upgrade_info = all_upgrades[upgrade_id];
			if(upgrade_info['type'] == type && match_array_values(upgrade_info['subtypes'], subtypes))
			{
				$.each(subtypes, function(useless_key, single_subtype){
					if(match_array_values(upgrade_info['subtypes'], single_subtype))
					{
						var single_factor = get_upgrade_effect(upgrade_level, upgrade_info['amount']);
						total_upgrade_factor *= single_factor;
					}
				});
			}
		}
	});*/
	if((endless_waves != undefined && endless_waves == true) || current_battle_type == 'summoned' || (forced != undefined && forced == true))
	{
		$.each(all_upgrades, function(upgrade_id, upgrade_info){
			if(gamedata['upgrades'][upgrade_id] != undefined)
			{
				
				var upgrade_level = gamedata['upgrades'][upgrade_id];
				if(upgrade_info['type'] == type && (match_array_values(upgrade_info['subtypes'], subtypes) || match_array_values(upgrade_info['subtypes'], 'any')))
				{
					/*$.each(subtypes, function(useless_key, single_subtype){
						console.log(single_subtype);
						if(match_array_values(upgrade_info['subtypes'], single_subtype) || match_array_values('any', single_subtype))
						{*/
							if(upgrade_info['amount_fixed'] == undefined || upgrade_info['amount_fixed'] == false)
							{
								var single_factor = get_upgrade_effect(upgrade_level, upgrade_info['amount']);
								total_upgrade_factor *= single_factor;
							}
							else
							{
								total_upgrade_factor += upgrade_level * upgrade_info['amount'];
							}
						/*}
					});*/
				}
			}
			else
			{
				if(upgrade_info['upgrade_type'] == 'passive')
				{
					if(upgrade_info['type'] == type && (match_array_values(upgrade_info['subtypes'], subtypes) || match_array_values(upgrade_info['subtypes'], 'any')))
					{
						var effective_bonus_amount = false;
						$.each(upgrade_info['cost'], function(cost_id, cost_amount){
							var owned_amount = 0;
							var actual_cost = cost_amount;
							if(gamedata['owned_cards'][cost_id] != undefined && gamedata['owned_cards'][cost_id] > 0){owned_amount = gamedata['owned_cards'][cost_id];}
							if(cost_id == 'scraps'){owned_amount = gamedata['scraps'];}
							var max_bonus = Math.floor(owned_amount / actual_cost);
							if(effective_bonus_amount === false || max_bonus < effective_bonus_amount)
							{
								effective_bonus_amount = max_bonus;
							}
						});
						var effective_bonus = 1 + (effective_bonus_amount * upgrade_info['amount']);
						total_upgrade_factor *= effective_bonus;
					}
				}
			}
		});
	}
	return total_upgrade_factor;
}

function get_random_upgrade(upgrade_type){
	var possible_upgrades = {};
	$.each(all_upgrades, function(upgrade_id, upgrade_info){
		if(upgrade_info['upgrade_type'] == upgrade_type)
		{
			possible_upgrades[upgrade_id] = true;
		}
	});

	return get_random_key_from_object(possible_upgrades);
}