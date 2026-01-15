var old_actions = {
	build_wall:{
		name: 			'Build stone wall',
		unlock_name: 	'Practice masonry',
		tier: 			1,
		item_id: 		'wall',
		chance: 		20,
		skill: 			'construction',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			brick: 		5,
		},
		unlock_cost:{
			brick: 		50,
		}
	},
	build_log_wall:{
		name: 			'Build log wall',
		unlock_name: 	'Practice log building',
		tier: 			1,
		item_id: 		'wall',
		chance: 		20,
		skill: 			'construction',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			lumber: 		5,
		},
		unlock_cost:{
			lumber: 		200,
		}
	},
	build_house:{
		name: 			'Build house',
		unlock_name: 	'Start construction',
		tier: 			2,
		item_id: 		'house',
		chance: 		20,
		skill: 			'construction',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			roofing: 	1,
			wall: 		4,
		},
		unlock_cost:{
			roofing: 	1,
			wall: 		4,
		}
	},
	attract_peasant:{
		name: 			'Attract new villagers',
		unlock_name: 	'Expand the village',
		tier: 			3,
		item_id: 	'peasant',
		bonus_loot:{
			gatherer: 	50,
			shepherd: 	20,
			fisherman: 	20,
			hunter: 	20,
			farmer: 	20,
			lumberjack: 20,
			miner: 		20,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'charm',
		action_name: 	'attract',
		fail_text: 		'attract',
		working_name: 	'attrackting',
		upgrade_item: 	'house',
		unlock_cost:{
			house: 			5,
		}
	},
	potion_shop:{
		name: 			'Potion shop',
		unlock_name: 	'Build potion shop',
		tier: 			5,
		bonus_loot:{
			health_potion: 			100,
			mana_potion: 			50,
			poison: 				50,
			love_potion: 			25,
			restore_potion: 		10,
			luck_potion: 			5,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			jar: 		2.5,
			firewood: 	5
		},
		unlock_cost:{
			house: 			5,
			jar: 			50,
			firewood: 		100,
			peasant: 		1
		}
	},
	weavers_shop:{
		name: 			'Weaver\'s shop',
		unlock_name: 	'Build weaver\'s shop',
		tier: 			5,
		bonus_loot:{
			cloth: 					100,
			sack: 					50,
			pillow: 				50,
			bandage: 				25,
			cloak: 					10,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			twine: 		5,
		},
		unlock_cost:{
			house: 			5,
			twine: 			100,
			peasant: 		1
		}
	},
	carpenters_shop:{
		name: 			'Carpenter\'s shop',
		unlock_name: 	'Build carpenter\'s shop',
		tier: 			5,
		bonus_loot:{
			plank: 					100,
			pole: 					75,
			barrel: 				50,
			crate: 					50,
			shield: 				10,
			lute: 					10,
			bed: 					5,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			lumber: 		5,
		},
		unlock_cost:{
			house: 			5,
			lumber: 		100,
			peasant: 		1
		}
	},
	tannery:{
		name: 			'Tannery',
		unlock_name: 	'Build tannery',
		tier: 			5,
		bonus_loot:{
			leather: 				100,
			belt: 					50,
			boots: 					25,
			quiver: 				20,
			jacket: 				15,
			drum: 					10,
			saddle: 				5,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			hide: 			5,
		},
		unlock_cost:{
			house: 			5,
			hide: 			100,
			peasant: 		1
		}
	},
	train_thief:{
		name: 			'Train thief',
		unlock_name: 	'Set up a thieves guild',
		tier: 			6,
		item_id: 		'thief',
		chance: 		20,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			cloak: 				1,
			peasant: 			1,
			sinister_dagger: 	1,
		},
		unlock_cost:{
			house: 				5,
			thief: 				4,
		}
	},
	patrol_village:{
		name: 			'Patrol the village',
		unlock_name: 	'Start patrols',
		tier: 			6,
		bonus_loot:{
			peasant: 		100,
			thief: 			10,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'patrol',
		fail_text: 		'failed',
		working_name: 	'patrolling',
		upgrade_item: 	'guard',
		unlock_cost:{
			guard:  		5,
		}
	},
	employ_thieves:{
		name: 			'Employ thieves',
		unlock_name: 	'Send out thieves',
		tier: 			6,
		bonus_loot:{
			silver_ring: 		20,
			gold_ring: 			10,
			supplies: 			5,
			treasure: 			1,
		},
		chance: 		25,
		skill: 			'picking',
		action_name: 	'steal',
		fail_text: 		'failed',
		working_name: 	'stealing',
		upgrade_item: 	'thief',
		unlock_cost:{
			thief:  		5,
		}
	},
	hunters_lodge:{
		name: 			'Hunting lodge',
		unlock_name: 	'Build a hunting lodge',
		tier: 			5,
		bonus_loot:{
			feather: 		100,
			hide: 			50,
			twine: 			25,
			meat: 			10,
			bone: 			10,
			bow: 			1
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'hunter',
		unlock_cost:{
			house: 				1,
			hunter: 			5,
		}
	},
	miners_guild:{
		name: 			'Miners\' guild',
		unlock_name: 	'Build a miners\' guild',
		tier: 			5,
		bonus_loot:{
			stone: 			100,
			coal: 			50,
			iron: 			25,
			salt: 			25,
			silver: 		10,
			gold: 			1
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'miner',
		unlock_cost:{
			house: 				1,
			miner: 				5,
		}
	},
	cattle_market:{
		name: 			'Cattle market',
		unlock_name: 	'Set up a cattle market',
		tier: 			5,
		bonus_loot:{
			hide: 			100,
			meat: 			50,
			pig: 			25,
			sheep: 			10,
			cow: 			5,
			horse: 			1,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'shepherd',
		unlock_cost:{
			hay: 			100,
			shepherd: 		5
		}
	},
	fish_market:{
		name: 			'Fish market',
		unlock_name: 	'Set up a fish market',
		tier: 			5,
		bonus_loot:{
			perch: 			100,
			trout: 			50,
			salmon: 		30,
			eel: 			20,
			net: 			10,
			smoked_fish: 	5,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			plank: 			10,
			cloth: 			10,
			barrel: 		5,
			fisherman: 		5
		}
	},
	farmers_market:{
		name: 			'Farmer\'s market',
		unlock_name: 	'Set up a farmer\'s market',
		tier: 			5,
		bonus_loot:{
			flour: 			100,
			hay: 			50,
			meat: 			25,
			twine: 			25,
			sack: 			10,
			pitchfork: 		10,
			plow: 			5,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'farmer',
		unlock_cost:{
			plank: 			10,
			cloth: 			10,
			barrel: 		5,
			farmer: 		5
		}
	},
	bakery:{
		name: 			'Bakery',
		unlock_name: 	'Build a bakery',
		tier: 			5,
		bonus_loot:{
			bread: 			100,
			onion_rings: 	50,
			hamburger: 		25,
			pie: 			25,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			flour: 		5,
		},
		unlock_cost:{
			house: 			5,
			flour: 			10,
			peasant: 		1,
		}
	},
	brewery:{
		name: 			'Brewery',
		unlock_name: 	'Build a brewery',
		tier: 			5,
		bonus_loot:{
			beer: 			100,
			wine: 			50,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			barrel: 		1,
		},
		unlock_cost:{
			house: 			5,
			barrel: 		5,
			peasant: 		1,
		}
	},
	tavern:{
		name: 			'Tavern',
		unlock_name: 	'Build a tavern',
		tier: 			5,
		bonus_loot:{
			gold: 			100,
		},
		reward_factor: 	2,
		chance: 		20,
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'house',
		cost:{
			beer: 		1,
			wine: 		1,
			bread: 		1
		},
		unlock_cost:{
			house: 			5,
			beer: 			10,
			wine: 			5,
			bread: 			10,
			peasant: 		1,
		}
	},
	inn:{
		name: 			'Inn',
		unlock_name: 	'Build an inn',
		tier: 			5,
		bonus_loot:{
			gold: 			100,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'taxing',
		action_name: 	'collect tax',
		fail_text: 		'tax',
		working_name: 	'collecting tax',
		upgrade_item: 	'bed',
		unlock_cost:{
			house: 			5,
			bed: 			10,
			peasant: 		1,
		}
	},
}