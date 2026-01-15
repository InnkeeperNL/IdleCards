var available_actions = {
	pick_parsley:{
		name: 			'Pick parsley',
		unlock_name: 	'Plant parsley',
		tier: 			2,
		item_id: 		'parsley',
		chance: 		25,
		skill: 			'herbalism',
		action_name: 		'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'druid',
		/*cost:{
			basket: 	1,
			water: 		1,
		},*/
		unlock_cost:{
			basket: 	10,
			druid:  	10,
			water:  	200,
		}
	},
	pick_mint:{
		name: 			'Pick mint',
		unlock_name: 	'Plant mint',
		tier: 			3,
		item_id: 		'mint',
		chance: 		25,
		skill: 			'herbalism',
		action_name: 		'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'druid',
		/*cost:{
			basket: 	1,
			water: 		1,
		},*/
		unlock_cost:{
			basket: 	10,
			druid:  	10,
			water:  	200,
		}
	},
	pick_sage:{
		name: 			'Pick sage',
		unlock_name: 	'Plant sage',
		tier: 			4,
		item_id: 		'sage',
		chance: 		25,
		skill: 			'herbalism',
		action_name: 		'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'druid',
		/*cost:{
			basket: 	1,
			water: 		1,
		},*/
		unlock_cost:{
			basket: 	10,
			druid:  	10,
			water:  	500,
		}
	},
	pick_rosemary:{
		name: 			'Pick rosemary',
		unlock_name: 	'Plant rosemary',
		tier: 			5,
		item_id: 		'rosemary',
		chance: 		25,
		skill: 			'herbalism',
		action_name: 		'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'druid',
		/*cost:{
			basket: 	1,
			water: 		1,
		},*/
		unlock_cost:{
			basket: 	10,
			druid:  	10,
			water:  	1000,
		}
	},
	pick_flowers:{
		name: 			'Pick flowers',
		unlock_name: 	'Look for flowers',
		tier: 			0,
		item_id: 		'wildflowers',
		chance: 		25,
		skill: 			'picking',
		action_name: 	'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer:  	2,
		}
	},
	strip_reeds:{
		name: 			'Strip reeds',
		unlock_name: 	'Learn to strip reeds',
		tier: 			2,
		item_id: 		'twine',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'strip',
		fail_text: 		'strip',
		working_name: 	'stripping',
		cost:{
			reed:		5,
		},
		unlock_cost:{
			gatherer: 	5,
			jar: 		5,
			reed: 		40,
		}
	},
	dry_reeds:{
		name: 			'Dry reeds',
		unlock_name: 	'Start drying reeds',
		tier: 			3,
		item_id: 		'firewood',
		reward_factor: 	10,
		chance: 		20,
		skill: 			'gathering',
		action_name: 	'dry',
		fail_text: 		'dry',
		working_name: 	'drying',
		cost:{
			reed:		5,
		},
		unlock_cost:{
			reed: 		100,
			stone: 		10
		}
	},
	pick_reeds:{
		name: 			'Pick reeds',
		unlock_name: 	'Look for reeds',
		tier: 			0,
		item_id: 		'reed',
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer:  	2,
		}
	},
	look_for_herbs:{
		name: 			'Pick herbs',
		unlock_name: 	'Look for herbs',
		tier: 			3,
		item_id: 		'parsley',
		bonus_loot:{
			mint: 		50,
			sage: 		25,
			rosemary: 	12,
			//pepper: 	6,
		},
		chance: 		25,
		skill: 			'herbalism',
		action_name: 		'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer:  		10,
			lucky_charm: 	10,
			water: 			100
		}
	},
	/*herbs_druids:{
		name: 			'Pick herbs',
		unlock_name: 	'Look for herbs',
		tier: 			5,
		item_id: 		'parsley',
		bonus_loot:{
			mint: 		50,
			sage: 		25,
			rosemary: 	12,
		},
		chance: 		25,
		skill: 			'herbalism',
		action_name: 		'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'druid',
		unlock_cost:{
			druid:  	10,
			water: 		100
		}
	},*/
	// gather_herbs:{
	// 	name: 			'Pick herbs',
	// 	unlock_name: 	'Look for herbs',
	// 	item_id: 		'parsley',
	// 	bonus_loot:{
	// 		mint: 		50,
	// 		sage: 		25,
	// 		rosemary: 	12,
	// 	},
	// 	chance: 		25,
	// 	skill: 			'herbalism',
	// 	action_name: 		'pick',
	// 	fail_text: 		'pick',
	// 	working_name: 	'picking',
	// 	upgrade_item: 	'hunter',
	// 	unlock_cost:{
	// 		gatherer:  	10,
	// 		water: 		100,
	// 	}
	// },
	/*use_stream:{
		name: 			'Collect water',
		unlock_name: 	'Look for a stream',
		tier: 			2,
		item_id: 		'water',
		chance: 		5,
		reward_factor: 	1,
		skill: 			'gathering',
		action_name: 	'collect',
		fail_text: 		'collect',
		working_name: 	'collecting',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			apple: 			5,
			gatherer: 		10,
		}
	},*/
	gather_berries:{
		name: 			'Gather berries',
		unlock_name: 	'Look for berries',
		tier: 			3,
		bonus_loot:{
			blueberry: 		100,
			strawberry: 	50,
		},
		chance: 		25,
		skill: 			'picking',
		action_name: 	'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer:  	10,
			water: 		100,
		}
	},
	comb_the_beach:{
		name: 			'Comb the beach',
		bonus_loot:{
			sand: 		100,
			firewood: 	50,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'comb',
		fail_text: 		'comb',
		working_name: 	'combing',
	},
	gather_kelp:{
		name: 			'Gather kelp',
		unlock_name: 	'Look for kelp',
		tier: 			2,
		item_id: 		'kelp',
		bonus_loot:{
			sand: 		10,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 		'gather',
		fail_text: 		'gather',
		working_name: 	'gathering',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer: 	10,
		}
	},
	gather_firewood:{
		name: 			'Gather firewood',
		unlock_name: 	'Look for firewood',
		tier: 			1,
		item_id: 		'firewood',
		bonus_loot:{
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 		'gather',
		fail_text: 		'gather',
		working_name: 	'gathering',
	},
	dry_kelp:{
		name: 			'Dry kelp',
		unlock_name: 	'Start drying kelp',
		tier: 			2,
		item_id: 		'firewood',
		chance: 		25,
		reward_factor: 	2,
		skill: 			'gathering',
		action_name: 	'dry',
		fail_text: 		'dry',
		working_name: 	'drying',
		cost:{
			kelp: 		1
		},
		unlock_cost:{
			kelp: 		50
		}
	},
	wind_kelp:{
		name: 			'Wind kelp',
		unlock_name: 	'Start winding kelp',
		tier: 			2,
		item_id: 		'twine',
		chance: 		25,
		skill: 			'tailoring',
		action_name: 		'wind',
		fail_text: 		'wind',
		working_name: 	'winding',
		cost:{
			kelp: 		5
		},
		unlock_cost:{
			kelp: 		50
		}
	},
	scrounge_wrecks:{
		name: 			'Scrounge wrecks',
		unlock_name: 	'Build sandbanks',
		tier: 			0,
		bonus_loot:{
			firewood: 	100,
			nails: 		35,
			plank: 		10,
			cloth: 		10,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'scrounge',
		fail_text: 		'scrounge',
		working_name: 	'scrounging',
		upgrade_item: 	'sand',
		unlock_cost:{
			sand:		100,
		}
	},
	train_pirate:{
		name: 			'Train pirate',
		unlock_name: 	'Learn to train pirates',
		tier: 			5,
		item_id: 		'pirate',
		chance: 		20,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			boots: 				1,
			jacket: 			1,
			peasant: 			1,
			spyglass: 			1,
			sword: 				1,
		},
		unlock_cost:{
			boots: 				1,
			jacket: 			1,
			peasant: 			1,
			spyglass: 			1,
			sword: 				1,
		}
	},
	build_ship:{
		name: 			'Build ship',
		unlock_name: 	'Build drydock',
		tier: 			3,
		bonus_loot:{
			ship: 	100,
		},
		chance: 		25,
		skill: 			'carpentry',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			plank:		1,
			nails: 		2.5,
			twine: 		1.5,
			cloth: 		1,
			peasant: 	0.5,
		},
		unlock_cost:{
			plank:		1,
			nails: 		2.5,
			twine: 		1.5,
			cloth: 		1,
			peasant: 	0.5,
		}
	},
	build_steam_ship:{
		name: 			'Build steam ship',
		unlock_name: 	'Build steam ships',
		tier: 			7,
		bonus_loot:{
			ship: 	100,
		},
		chance: 		25,
		skill: 			'smithing',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			coal: 		10,
			nails: 		100,
			steel: 		10,
			water: 		10
		},
		unlock_cost:{
			coal: 		10,
			nails: 		100,
			steel: 		10,
			water: 		10
		}
	},
	build_fishing_ship:{
		name: 			'Build fishing ship',
		unlock_name: 	'Build fishing docks',
		tier: 			5,
		bonus_loot:{
			fishing_ship: 	100,
		},
		chance: 		25,
		skill: 			'carpentry',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			ship:		0.5,
			fisherman: 	3.9,
		},
		unlock_cost:{
			ship:		1,
			fisherman: 	10,
		}
	},
	build_pirate_ship:{
		name: 			'Build pirate ship',
		unlock_name: 	'Build pirate hideout',
		tier: 			6,
		bonus_loot:{
			pirate_ship: 	100,
		},
		chance: 		25,
		skill: 			'carpentry',
		action_name: 	'build',
		fail_text: 		'build',
		working_name: 	'building',
		cost:{
			ship:		1,
			pirate: 	10,
		},
		unlock_cost:{
			ship:		1,
			pirate: 	10,
			roofing: 	10,
		}
	},
	catch_seafish:{
		name: 			'Send out fishing ships',
		unlock_name: 	'Start sending out fishing ships',
		tier: 			5,
		bonus_loot:{
			salmon: 		100,
			eel: 			50,
			squid: 			10,
		},
		progress_needed: 1,
		reward_factor: 	6,
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fail',
		working_name: 	'fishing',
		upgrade_item: 	'fishing_ship',
		unlock_cost:{
			fishing_ship: 	5,
			barrel:  		10,
		}
	},
	make_ink:{
		name: 			'Make ink',
		unlock_name: 	'Start making ink',
		tier: 			5,
		bonus_loot:{
			ink: 		100,
		},
		chance: 		25,
		skill: 			'alchemy',
		action_name: 	'make',
		fail_text: 		'fail',
		working_name: 	'making',
		cost:{
			firewood: 		10,
			jar: 			1,
			water: 			10,
		},
		unlock_cost:{
			firewood: 		10,
			jar: 			1,
			water: 			10,
		}
	},
	extract_ink:{
		name: 			'Extract ink',
		unlock_name: 	'Start extracting ink',
		tier: 			3,
		bonus_loot:{
			ink: 		100,
		},
		chance: 		25,
		skill: 			'alchemy',
		action_name: 	'extract',
		fail_text: 		'fail',
		working_name: 	'extracting',
		cost:{
			jar: 			1,
			squid: 			1
		},
		unlock_cost:{
			jar: 			25,
			squid:  		25,
		}
	},
	get_migrants:{
		name: 			'Get migrants',
		unlock_name: 	'Set up immigration',
		tier: 			3,
		bonus_loot:{
			peasant: 		100,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'ship',
		fail_text: 		'ship',
		working_name: 	'shipping',
		upgrade_item: 	'ship',
		unlock_cost:{
			ship:		5,
		}
	},
	ship_goods:{
		name: 			'Ship goods',
		unlock_name: 	'Set up goods shipping',
		tier: 			4,
		bonus_loot:{
			gold: 		210,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'ship',
		fail_text: 		'ship',
		working_name: 	'shipping',
		upgrade_item: 	'ship',
		cost:{
			supplies:	0.1,
		},
		unlock_cost:{
			ship:		5,
			supplies: 	20,
		}
	},
	import_tools:{
		name: 			'Import tools',
		unlock_name: 	'Set up tool imports',
		tier: 			6,
		bonus_loot:{
			axe: 			100,
			net: 			100,
			pickaxe: 		100,
			pitchfork: 		100,
			plow: 			100,
			copper_pot: 	100,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'import',
		fail_text: 		'import',
		working_name: 	'importing',
		upgrade_item: 	'ship',
		cost:{
			gold: 		0.1,
		},
		unlock_cost:{
			ship:		5,
			gold: 		20,
		}
	},
	import_gear:{
		name: 			'Import gear',
		unlock_name: 	'Set up gear imports',
		tier: 			6,
		bonus_loot:{
			spear: 				500,
			plate_armor: 		100,
			shield: 			100,
			bow: 				100,
			knife: 				100,
			sinister_dagger: 	10,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'import',
		fail_text: 		'import',
		working_name: 	'importing',
		upgrade_item: 	'ship',
		cost:{
			gold: 		0.1,
		},
		unlock_cost:{
			ship:		5,
			gold: 		20,
		}
	},
	import_goods:{
		name: 			'Import goods',
		unlock_name: 	'Set up goods imports',
		tier: 			6,
		bonus_loot:{
			lumber: 	1200,
			stone: 		1200,
			nails:		500,
			iron: 		200,
			twine: 		200,
		},
		chance: 		25,
		skill: 			'trading',
		action_name: 	'import',
		fail_text: 		'import',
		working_name: 	'importing',
		upgrade_item: 	'ship',
		cost:{
			gold: 		0.1,
		},
		unlock_cost:{
			ship:		5,
			gold: 		20,
		}
	},
	raid_ships:{
		name: 			'Raid ships',
		unlock_name: 	'Start raiding ships',
		tier: 			7,
		bonus_loot:{
			supplies: 		100,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'hunting',
		action_name: 	'raid',
		fail_text: 		'raid',
		working_name: 	'raiding',
		upgrade_item: 	'pirate_ship',
		cost:{
			pirate: 		1,
		},
		unlock_cost:{
			pirate_ship:	1,
		}
	},
	pirate_treasure:{
		name: 			'Sail for treasure',
		unlock_name: 	'Start looking for treaure',
		tier: 			8,
		bonus_loot:{
			treasure: 		100,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'gathering',
		action_name: 	'raid',
		fail_text: 		'raid',
		working_name: 	'raiding',
		upgrade_item: 	'pirate_ship',
		cost:{
			map: 		1,
		},
		unlock_cost:{
			map: 			10,
			pirate_ship:	1,
		}
	},
	tax_office:{
		name: 			'Collect tax',
		unlock_name: 	'Build customs office',
		tier: 			6,
		bonus_loot:{
			gold: 		100,
		},
		chance: 		25,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'tax',
		fail_text: 		'tax',
		working_name: 	'trading',
		upgrade_item: 	'paper',
		unlock_cost:{
			roofing: 	1,
			plank:		10,
			peasant: 	10,
			paper: 		50,
		}
	},
	boil_water:{
		name: 			'Boil seawater',
		unlock_name: 	'Start boiling seawater',
		tier: 			3,
		bonus_loot:{
			water: 		100,
			chalk: 		10,
			salt: 		10,
		},
		chance: 		25,
		reward_factor: 	10,
		passive_factor: 1,
		skill: 			'cooking',
		action_name: 	'boil',
		fail_text: 		'boil',
		working_name: 	'boiling',
		upgrade_item: 	'firewood',
		cost:{
			firewood: 	5,
		},
		unlock_cost:{
			firewood:	250,
		}
	},
	comb_the_shore:{
		name: 			'Comb the shore',
		bonus_loot:{
			reed: 		100,
			water: 		50,
			firewood: 	25,
			sugarcane: 	5,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 		'comb',
		fail_text: 		'comb',
		working_name: 	'combing',
	},
	collect_water:{
		name: 			'Collect water',
		unlock_name: 	'Start collecting water',
		tier: 			3,
		item_id: 		'water',
		chance: 		25,
		skill: 			'gathering',
		action_name: 		'collect',
		fail_text: 		'collect',
		working_name: 	'collecting',
		upgrade_item: 	'gatherer',
		cost:{
			jar: 		1,
		},
		unlock_cost:{
			gatherer: 	1,
			jar: 		1
		}
	},
	dredge_the_river:{
		name: 			'Dredge the river',
		unlock_name: 	'Start dredging',
		tier: 			4,
		item_id: 		'sand',
		bonus_loot:{
			stone: 		75,
			clay: 		50,
			lumber: 	10,
		},
		chance: 		25,
		skill: 			'fishing',
		action_name: 		'dredge',
		fail_text: 		'dredge',
		working_name: 	'dredging',
		upgrade_item: 	'fisherman',
		cost:{
			net: 			1,
		},
		unlock_cost:{
			fisherman: 		1,
			net: 			1,
			smoked_fish: 	1,
		}
	},
	gold_panning:{
		name: 			'Pan for gold',
		unlock_name: 	'Start gold panning',
		tier: 			2,
		item_id: 		'sand',
		bonus_loot:{
			gold: 		10,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'pan',
		fail_text: 		'pan',
		working_name: 	'panning',
		upgrade_item: 	'gatherer',
		cost:{
			copper_pot: 	1,
		},
		unlock_cost:{
			gatherer: 		1,
			copper_pot: 	1
		}
	},
	save_swimmer:{
		name: 			'Save swimmer',
		unlock_name: 	'Build a small raft',
		tier: 			0,
		item_id: 		'peasant',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 	'save',
		fail_text: 		'save',
		working_name: 	'saving',
		upgrade_item: 	'firewood',
		unlock_cost:{
			firewood:		10,
		}
	},
	craft_net:{
		name: 			'Craft net',
		unlock_name: 	'Learn some knots',
		tier: 			2,
		item_id: 		'net',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			twine: 		2
		},
		unlock_cost:{
			twine:		20,
		}
	},
	/*gather_water:{
		name: 			'Gather water',
		item_id: 		'water',
		chance: 		25,
		skill: 			'gathering',
		action_name: 		'gather',
		fail_text: 		'gather',
		working_name: 	'gathering',
	},
	gather_sand:{
		name: 			'Gather sand',
		item_id: 		'sand',
		chance: 		25,
		skill: 			'gathering',
		action_name: 		'gather',
		fail_text: 		'gather',
		working_name: 	'gathering',
		unlock_cost:{
			water:  	50,
		}
	},*/
	gather_clay:{
		name: 			'Dig for clay',
		unlock_name: 	'Look for clay',
		tier: 			1,
		item_id: 		'clay',
		bonus_loot: {
			sand: 		25,
		},
		chance: 		25,
		skill: 			'mining',
		action_name: 		'dig',
		fail_text: 		'dig',
		working_name: 	'digging',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer: 	10,
			water:  	250,
		}
	},
	dig_clay_pit:{
		name: 			'Enter clay pit',
		unlock_name: 	'Dig clay pit',
		tier: 			3,
		item_id: 		'clay',
		chance: 		25,
		skill: 			'mining',
		action_name: 		'dig',
		fail_text: 		'dig',
		working_name: 	'digging',
		upgrade_item: 	'miner',
		cost:{
			water: 		1,
		},
		unlock_cost:{
			miner:  	30,
		}
	},
	fishing_stream:{
		name: 			'Catch fish',
		unlock_name: 	'Dig out a stream',
		tier: 			4,
		bonus_loot:{
			perch: 			100,
			trout: 			50,
			salmon: 		25,
		},
		progress_needed: 1,
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fail',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			fisherman:  		5,
			lucky_charm: 		5,
			sand: 				500
		}
	},
	/*catch_fish:{
		name: 			'Catch fish',
		unlock_name: 	'Practice fishing',
		tier: 			2,
		bonus_loot:{
			perch: 			100,
			trout: 			50,
			salmon: 		25,
			eel: 			12.5,
		},
		progress_needed: 1,
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fail',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			fisherman:  	5,
		}
	},*/
	catch_perch:{
		name: 			'Catch perch',
		unlock_name: 	'Look for perch',
		tier: 			2,
		item_id: 		'perch',
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fish',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			fisherman:  	5,
		}
	},
	catch_trout:{
		name: 			'Catch trout',
		unlock_name: 	'Look for trout',
		tier: 			3,
		item_id: 		'trout',
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fish',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			fisherman:  	5,
		}
	},
	catch_salmon:{
		name: 			'Catch salmon',
		unlock_name: 	'Look for salmon',
		tier: 			4,
		item_id: 		'salmon',
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fish',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			fisherman:  	5,
		}
	},
	spearfishing:{
		name: 			'Spearfishing',
		unlock_name: 	'Start spearfishing',
		tier: 			3,
		item_id: 		'salmon',
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fish',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		cost:{
			spear: 			1,
		},
		unlock_cost:{
			fisherman:  	5,
			spear: 			5,
		}
	},
	catch_eels:{
		name: 			'Catch eels',
		unlock_name: 	'Look for eels',
		tier: 			5,
		item_id: 		'eel',
		chance: 		25,
		skill: 			'fishing',
		action_name: 	'fish',
		fail_text: 		'fish',
		working_name: 	'fishing',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			fisherman:  	5,
		}
	},
	roast_perch:{
		name: 			'Smoke perch',
		unlock_name: 	'Practice smoking perch',
		tier: 			2,
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		upgrade_item: 	'firewood',
		cost:{
			perch: 		3,
			firewood: 	1
		},
		unlock_cost:{
			perch:  		10,
			firewood: 		100,
		}
	},
	grill_trout:{
		name: 			'Smoke trout',
		unlock_name: 	'Practice smoking trout',
		tier: 			3,
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		upgrade_item: 	'firewood',
		cost:{
			trout: 		3,
			firewood: 	2
		},
		unlock_cost:{
			trout:  		10,
			firewood: 		100,
		}
	},
	
	cook_salmon:{
		name: 			'Smoke salmon',
		unlock_name: 	'Practice smoking salmon',
		tier: 			4,
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		upgrade_item: 	'firewood',
		cost:{
			salmon: 	2,
			firewood: 	2,
		},
		unlock_cost:{
			salmon:  		10,
			firewood: 		100,
		}
	},
	cook_eel:{
		name: 			'Smoke eel',
		unlock_name: 	'Practice smoking eel',
		tier: 			5,
		item_id: 		'smoked_fish',
		chance: 		25,
		reward_factor: 	1,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		upgrade_item: 	'firewood',
		cost:{
			eel: 		1,
			firewood: 	2,
		},
		unlock_cost:{
			eel:  			10,
			firewood: 		100,
		}
	},
	salt_fish:{
		name: 			'Salt fish',
		unlock_name: 	'Start salting fish',
		tier: 			5,
		item_id: 		'salted_fish',
		chance: 		1,
		reward_factor: 	1,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			salmon: 	1,
			eel: 		0.5,
			salt: 		5,
		},
		unlock_cost:{
			salmon: 		2,
			eel: 			1,
			salt:  			10,
		}
	},
	package_fish:{
		name: 			'Package smoked fish',
		unlock_name: 	'Smoked fish packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'package',
		fail_text: 		'fail',
		working_name: 	'packaging',
		cost:{
			smoked_fish: 	5,
			barrel: 		0.5,
		},
		unlock_cost:{
			smoked_fish:  	10,
			barrel: 		2,
		}
	},
	package_s_fish:{
		name: 			'Package salted fish',
		unlock_name: 	'Salted fish packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'package',
		fail_text: 		'fail',
		working_name: 	'packaging',
		cost:{
			salted_fish: 	4,
			barrel: 		0.5,
		},
		unlock_cost:{
			salted_fish:  	10,
			barrel: 		2,
		}
	},
	pick_apples:{
		name: 			'Pick apples',
		unlock_name: 	'find an apple tree',
		tier: 			1,
		item_id: 		'apple',
		chance: 		10,
		skill: 			'picking',
		action_name: 	'pick',
		fail_text: 		'pick',
		working_name: 	'picking',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer: 	1,
			lumber: 	1,
		}
	},
	harvest_saplings:{
		name: 			'Harvest saplings',
		unlock_name: 	'Look for some saplings',
		tier: 			0,
		bonus_loot:{
			firewood: 	50,
			stick: 		50,
			lumber: 	20,
			feather: 	20,
		},
		progress_needed: 	1,
		reward_factor: 		5,
		chance: 		5,
		cost_type: 		'low',
		skill: 			'gathering',
		action_name: 	'harvest',
		fail_text: 		'harvest',
		working_name: 	'harvesting',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer: 	5
		}
	},
	chop_saplings:{
		name: 			'Chop saplings',
		unlock_name: 	'Start chopping saplings',
		tier: 			1,
		bonus_loot:{
			stick: 		100,
			lumber: 	100,
			firewood: 	100,
			leaves: 	10,
		},
		progress_needed: 	1,
		reward_factor: 		5,
		chance: 		5,
		cost_type: 		'low',
		skill: 			'woodcutting',
		action_name: 	'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		upgrade_item: 	'lumberjack',
		unlock_cost:{
			lumberjack: 	1
		}
	},
	chop_down_tree:{
		name: 			'Chop down tree',
		unlock_name: 	'Start chopping trees',
		tier: 			3,
		item_id: 		'lumber',
		bonus_loot:{
			firewood: 	100,
			leaves: 	10,
		},
		progress_needed: 	1,
		reward_factor: 		10,
		cost_type: 		'low',
		chance: 		5,
		skill: 			'woodcutting',
		action_name: 		'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		upgrade_item: 	'lumberjack',
		unlock_cost:{
			leaves: 		1,
			lumberjack:		1,
			stick: 			1,
		}
	},
	chop_down_walnut_tree:{
		name: 			'Chop walnut tree',
		unlock_name: 	'Look for walnut trees',
		tier: 			5,
		item_id: 		'walnut',
		bonus_loot:{
			lumber: 	100,
			firewood: 	100,
			leaves: 	10,
		},
		progress_needed: 	1,
		reward_factor: 		10,
		cost_type: 		'low',
		chance: 		5,
		skill: 			'woodcutting',
		action_name: 		'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		upgrade_item: 		'lumberjack',
		cost:{
			cart: 		1
		},
		unlock_cost:{
			cart: 			1,
			lumberjack:		2
		}
	},
	chop_down_cherry_tree:{
		name: 			'Chop cherry tree',
		unlock_name: 	'Look for cherry trees',
		tier: 			5,
		item_id: 		'cherry',
		bonus_loot:{
			lumber: 	100,
			firewood: 	100,
			leaves: 	10,
		},
		progress_needed: 	1,
		reward_factor: 		10,
		cost_type: 		'low',
		chance: 		5,
		skill: 			'woodcutting',
		action_name: 		'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		upgrade_item: 		'lumberjack',
		cost:{
			cart: 		1
		},
		unlock_cost:{
			cart: 			1,
			lumberjack:		2
		}
	},
	chop_hardwood:{
		name: 			'Chop hardwood',
		unlock_name: 	'Search for hardwood trees',
		tier: 			5,
		bonus_loot:{
			hardwood: 	1,
			firewood: 	1,
			leaves: 	1,
		},
		reward_factor: 	10,
		chance: 		5,
		cost_type: 		'low',
		skill: 			'woodcutting',
		action_name: 		'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		upgrade_item: 	'lumberjack',
		cost:{
			cart: 		1
		},
		unlock_cost:{
			cart: 			1, 
			lumberjack:		2
		}
	},
	search_for_firewood:{
		name: 			'Clear shrubs',
		item_id: 		'leaves',
		bonus_loot:{
			firewood: 	50,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'clear',
		fail_text: 		'clear',
		working_name: 	'clearing'
	},
	scrounge_the_forest:{
		name: 			'Search the forest',
		item_id: 		'stick',
		bonus_loot:{
			//water: 	15,
			//feather: 	10,
			twine: 		10,
			peasant: 	10,
			//axe: 		1,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'scrounge',
		fail_text: 		'scrounge',
		working_name: 	'scrounging',
	},
	refine_sticks:{
		name: 			'Refine sticks',
		unlock_name: 	'Start refining sticks',
		tier: 			0,
		bonus_loot:{
			firewood: 	100,
			pole: 		10,
		},
		chance: 		25,
		reward_factor: 	8,
		skill: 			'carpentry',
		action_name: 	'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		cost:{
			stick: 		1
		},
		unlock_cost:{
			stick: 		1,
		}
	},
	chop_firewood:{
		name: 			'Chop firewood',
		unlock_name: 	'Start chopping firewood',
		tier: 			3,
		item_id: 		'firewood',
		chance: 		25,
		reward_factor: 	8,
		skill: 			'woodcutting',
		action_name: 	'chop',
		fail_text: 		'chop',
		working_name: 	'chopping',
		upgrade_item: 	'lumberjack',
		cost:{
			lumber: 	1
		},
		unlock_cost:{
			lumberjack: 5,
			lumber: 	100,
		}
	},
	dig_for_roots:{
		name: 			'Dig for roots',
		unlock_name: 	'Start digging for roots',
		tier: 			1,
		bonus_loot:{
			sand: 		100,
			carrot: 	25,
			potato: 	25,
			stone: 		10	
		},
		chance: 		25,
		reward_factor: 	1,
		skill: 			'mining',
		action_name: 	'dig',
		fail_text: 		'dig',
		working_name: 	'digging',
		upgrade_item: 	'gatherer',
		unlock_cost:{
			gatherer: 	5,
			pole: 		10,
		}
	},
	mow_grass:{
		name: 			'Mow grass',
		item_id: 		'grass',
		bonus_loot:{
			wildflowers: 	20,
		},
		chance: 		25,
		reward_factor: 	1,
		skill: 			'gathering',
		action_name: 	'mow',
		fail_text: 		'mow',
		working_name: 	'mowing',
	},
	farm_clover:{
		name: 			'Farm clover',
		unlock_name: 	'Plant clover',
		tier: 			2,
		item_id: 		'clover',
		chance: 		5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'water',
		unlock_cost:{
			sand: 			50,
			water:			50,
			wildflowers: 	50,
		}
	},
	dry_grass:{
		name: 			'Dry grass',
		unlock_name: 	'Start drying grass',
		tier: 			0,
		bonus_loot:{
			hay: 		100,
			straw: 		100
		},
		chance: 		25,
		reward_factor: 	1.5,
		skill: 			'gathering',
		action_name: 	'dry',
		fail_text: 		'dry',
		working_name: 	'drying',
		cost:{
			grass: 		4
		},
		unlock_cost:{
			grass: 		15
		}
	},
	straw_basket:{
		name: 			'Straw basket',
		unlock_name: 	'Learn to weave straw baskets',
		tier: 			0,
		bonus_loot:{
			basket: 	100,
		},
		chance: 		25,
		reward_factor: 	1,
		skill: 			'weaving',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		cost:{
			straw: 		1
		},
		unlock_cost:{
			straw: 		1,
		}
	},
	firewood_basket:{
		name: 			'Weave basket',
		unlock_name: 	'Learn to weave baskets',
		tier: 			0,
		bonus_loot:{
			basket: 	100,
		},
		chance: 		25,
		reward_factor: 	1,
		skill: 			'weaving',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		cost:{
			firewood: 	1
		},
		unlock_cost:{
			firewood: 	1,
		}
	},
	reed_basket:{
		name: 			'Weave basket',
		unlock_name: 	'Learn to weave baskets',
		tier: 			0,
		bonus_loot:{
			basket: 	100,
		},
		chance: 		25,
		reward_factor: 	1,
		skill: 			'weaving',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		cost:{
			reed: 		1
		},
		unlock_cost:{
			reed: 		1,
		}
	},
	hay_roofing:{
		name: 			'Craft straw roofing',
		unlock_name: 	'Learn to craft straw roofing',
		tier: 			4,
		item_id: 		'roofing',
		chance: 		25,
		passive_factor: 1,
		skill: 			'gathering',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			parsley: 	1,
			straw: 		2,
			twine: 		1
		},
		unlock_cost:{
			parsley: 	1,
			straw: 		2,
			twine: 		1
		}
	},
	hay_barn:{
		name: 			'Store hay',
		unlock_name: 	'Build hay barn',
		tier: 			4,
		item_id: 		'hay_bale',
		chance: 		25,
		passive_factor: 1,
		skill: 			'gathering',
		action_name: 	'store',
		fail_text: 		'store',
		working_name: 	'storing',
		upgrade_item: 	'roofing',
		unlock_cost:{
			roofing: 	5,
			pole: 		100,
			gatherer: 	10
		}
	},
	bind_hay:{
		name: 			'Bind hay',
		unlock_name: 	'Start binding the hay',
		tier: 			2,
		item_id: 		'hay_bale',
		chance: 		25,
		passive_factor: 1,
		skill: 			'gathering',
		action_name: 	'bind',
		fail_text: 		'bind',
		working_name: 	'binding',
		upgrade_item: 	'gatherer',
		cost:{
			hay: 		1
		},
		unlock_cost:{
			hay: 		10,
			gatherer: 	1
		}
	},
	charm_travelers:{
		name: 			'Charm travelers',
		unlock_name: 	'Look for some travelers',
		tier: 			0,
		bonus_loot:{
			peasant: 	100,
		},
		chance: 		20,
		reward_factor: 	1,
		cost_type: 		'low',
		skill: 			'charm',
		action_name: 	'charm',
		fail_text: 		'charm',
		working_name: 	'charming',
		cost:{
			wildflowers: 		1
		},
		unlock_cost:{
			wildflowers:		1,
		}
	},
	/*trade_cowboys:{
		name: 			'Trade cowboys',
		unlock_name: 	'Start trading with cowboys',
		tier: 			5,
		bonus_loot:{
			horseshoe: 	50,
			saddle: 	4,
		},
		chance: 		20,
		reward_factor: 	1,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'trade',
		fail_text: 		'trade',
		working_name: 	'trading',
		cost:{
			beef: 		1,
			mint: 		0.1,
			clover: 	5
		},
		unlock_cost:{
			beef:		25,
			mint: 		2.5,
			clover: 	100
		}
	},*/
	clover_charm:{
		name: 			'craft clover charm',
		unlock_name: 	'Learn to craft clover charms',
		tier: 			2,
		item_id: 		'lucky_charm',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			clover:			5,
			twine: 			0.5,
		},
		unlock_cost:{
			clover:			100,
			twine: 			40,
		}
	},
	
	craft_paper:{
		name: 			'Craft paper',
		unlock_name: 	'Learn to craft paper',
		tier: 			4,
		item_id: 		'paper',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			lumber: 	2,
			water: 		3
		},
		unlock_cost:{
			lumber:		50,
			water: 		250,
		}
	},
	craft_parchment:{
		name: 			'Craft parchment',
		unlock_name: 	'Learn to craft parchment',
		tier: 			4,
		item_id: 		'paper',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			hide: 		2,
			firewood: 	2
		},
		unlock_cost:{
			hide:		50,
			firewood: 	150,
		}
	},
	craft_pole:{
		name: 			'Craft poles',
		unlock_name: 	'Learn to craft poles',
		tier: 			1,
		item_id: 		'pole',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			lumber: 	1
		},
		unlock_cost:{
			lumber:		10,
		}
	},
	saw_planks:{
		name: 			'Saw a plank',
		unlock_name: 	'Learn to saw planks',
		tier: 			2,
		item_id: 		'plank',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'saw',
		fail_text: 		'saw',
		working_name: 	'sawing',
		cost:{
			lumber: 	4
		},
		unlock_cost:{
			lumber:		40,
		}
	},
	saw_planks_sawmill:{
		name: 			'Saw planks',
		unlock_name: 	'Build a sawmill',
		tier: 			3,
		item_id: 		'plank',
		chance: 		20,
		reward_factor: 	9,
		skill: 			'carpentry',
		action_name: 	'saw',
		fail_text: 		'saw',
		working_name: 	'sawing',
		upgrade_item: 	'lumberjack',
		cost:{
			lumber: 	2.5,
			iron: 		1
		},
		unlock_cost:{
			iron: 		25,
			lumber:		100,
			lumberjack: 10,
			nails: 		100,
			roofing: 	10,
		}
	},
	steam_sawmill:{
		name: 			'Steam sawmill',
		unlock_name: 	'Build a steam-powered sawmill',
		tier: 			7,
		item_id: 		'plank',
		bonus_loot:{
			pole: 		100,
		},
		chance: 		20,
		reward_factor: 	9,
		skill: 			'carpentry',
		action_name: 	'saw',
		fail_text: 		'saw',
		working_name: 	'sawing',
		upgrade_item: 	'steel',
		cost:{
			coal: 		1,
			lumber: 	2.5,
			water: 		1
		},
		unlock_cost:{
			coal: 		1,
			lumber: 	2.5,
			nails: 		100,
			roofing: 	10,
			steel: 		10,
			water: 		1
		}
	},
	craft_crate:{
		name: 			'Craft crate',
		unlock_name: 	'Learn to craft crates',
		tier: 			3,
		item_id: 		'crate',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			lumber: 	2,
			//nails: 		2,
			plank: 		2,
			
		},
		unlock_cost:{
			lumber: 	2,
			//nails: 		2,
			plank: 		2,
		}
	},
	craft_barrel:{
		name: 			'Craft barrel',
		unlock_name: 	'Learn to craft barrels',
		tier: 			3,
		item_id: 		'barrel',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			lumber: 	2,
			//nails: 		2,
			plank: 		2,
		},
		unlock_cost:{
			lumber: 	2,
			//nails: 		2,
			plank: 		2,
		}
	},
	craft_shingle:{
		name: 			'Craft wooden roofing',
		unlock_name: 	'Learn to craft roofing',
		tier: 			1,
		item_id: 		'roofing',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			leaves: 	5,
			pole: 		0.25,
		},
		unlock_cost:{
			leaves: 	250,
			pole: 		15,
		},
	},
	craft_furniture:{
		name: 			'Craft furniture',
		unlock_name: 	'Learn to craft furniture',
		tier: 			4,
		item_id: 		'furniture',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			nails: 		10,
			plank: 		5,
		},
		unlock_cost:{
			nails: 		100,
			plank: 		50,
		}
	},
	cushioned_furniture:{
		name: 			'Cushioned furniture',
		unlock_name: 	'Learn to craft cushioned furniture',
		tier: 			4,
		item_id: 		'furniture',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			cloth: 		2,
			nails: 		10,
			pillow: 	2,
			plank: 		5,
		},
		unlock_cost:{
			cloth: 		2,
			nails: 		10,
			pillow: 	2,
			plank: 		5,
		}
	},
	hardwood_furniture:{
		name: 			'Hardwood furniture',
		unlock_name: 	'Learn to craft hardwood furniture',
		tier: 			5,
		item_id: 		'furniture',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			hardwood: 	1,
			lumber: 	1,
			nails: 		1,
		},
		unlock_cost:{
			hardwood: 	1,
			lumber: 	1,
			nails: 		1,
		}
	},
	craft_lute:{
		name: 			'Craft lute',
		unlock_name: 	'Learn to craft lutes',
		tier: 			5,
		item_id: 		'lute',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			hardwood: 	1,
			plank: 		1,
			twine: 		1,
		},
		unlock_cost:{
			hardwood: 	10,
			plank: 		10,
			twine: 		10,
		}
	},
	
	craft_cart:{
		name: 			'Craft cart',
		unlock_name: 	'Learn to craft carts',
		tier: 			5,
		item_id: 		'cart',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			pole: 		3,
			plank: 		3,
			nails: 		5
		},
		unlock_cost:{
			pole: 		50,
			plank: 		50,
			nails: 		50
		}
	},
	/*trading_post:{
		name: 			'Trade jars',
		unlock_name: 	'Set up a trading post',
		tier: 			1,
		bonus_loot:{
			iron: 		100,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 		'trade',
		fail_text: 		'trade',
		working_name: 	'trading',
		upgrade_item: 		'roofing',
		cost:{
			jar: 		0.5,
		},
		unlock_cost:{
			jar: 		10,
			lumber: 	25,
			roofing: 	10,
		}
	},*/
	expand_camp:{
		name: 			'Expand camp',
		unlock_name: 	'Set up a camp',
		tier: 			1,
		bonus_loot:{
			peasant: 	100,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'charm',
		action_name: 		'expand',
		fail_text: 		'expand',
		working_name: 	'expanding',
		upgrade_item: 		'roofing',
		unlock_cost:{
			roofing: 	10,
			lumber: 	25,
		}
	},
	/*trade_crates:{
		name: 			'Trade containers',
		unlock_name: 	'Build a container shop',
		tier: 			3,
		bonus_loot:{
			gold: 		100,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 		'trade',
		fail_text: 		'trade',
		working_name: 	'trading',
		upgrade_item: 		'plank',
		cost:{
			barrel: 	1,
			crate: 		1,
			jar: 		1,
		},
		unlock_cost:{
			barrel: 	10,
			crate: 		10,
			jar: 		10,
			roofing: 	10,
		}
	},*/
	/*send_supplies:{
		name: 			'Send supplies',
		unlock_name: 	'Set up a supply depot',
		tier: 			4,
		item_id: 		'gold',
		reward_factor: 	2.1,
		chance: 		20,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 		'send',
		fail_text: 		'send',
		working_name: 	'sending',
		upgrade_item: 		'cart',
		cost:{
			supplies: 	0.5,
		},
		unlock_cost:{
			roofing: 	10,
			plank: 		25,
			cart: 		5,
			supplies: 	5,
		}
	},*/
	
	dig_hole:{
		name: 			'Dig a hole',
		item_id: 		'sand',
		bonus_loot:{
			firewood: 	25,
			stone: 		10,
		},
		chance: 		10,
		skill: 			'mining',
		action_name: 		'dig',
		fail_text: 		'dig',
		working_name: 	'digging',
		unlock_cost:{
			coins:		1,
		}
	},
	break_rocks:{
		name: 			'Break rocks',
		unlock_name: 	'Start breaking rocks',
		tier: 			1,
		item_id: 		'stone',
		bonus_loot:{
			coal: 			10,
			copper_ore: 	10,
		},
		chance: 		10,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'breaking',
		upgrade_item: 	'peasant',
		unlock_cost:{
			peasant: 	1,
			stone:		10,
		}
	},
	/*trade_jars:{
		name: 			'Trade jars',
		unlock_name: 	'Start selling jars',
		tier: 			1,
		bonus_loot:{
			bread: 			80,
		},
		chance: 		10,
		skill: 			'trading',
		action_name: 	'trade',
		fail_text: 		'trade',
		working_name: 	'trading',
		cost:{
			jar: 		1,
		},
		unlock_cost:{
			jar:		12,
		}
	},
	feed_peasants:{
		name: 			'Feed peasants',
		unlock_name: 	'Give away some bread',
		tier: 			1,
		item_id: 		'peasant',
		bonus_loot:{
		},
		chance: 		10,
		skill: 			'charm',
		action_name: 	'feed',
		fail_text: 		'feed',
		working_name: 	'feeding',
		cost:{
			bread: 		1,
		},
		unlock_cost:{
			bread:		2,
		}
	},*/
	mine_stone:{
		name: 			'Mine stone',
		unlock_name: 	'Build a quarry',
		tier: 			2,
		item_id: 		'stone',
		chance: 		10,
		skill: 			'mining',
		action_name: 		'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		5,
			stone:		100,
		}
	},
	mine_limestone:{
		name: 			'Mine limestone',
		unlock_name: 	'Build a limestone quarry',
		tier: 			2,
		item_id: 		'chalk',
		chance: 		10,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		5,
			stone:		100,
		}
	},
	mine_copper:{
		name: 			'Mine copper',
		unlock_name: 	'Build a copper mine',
		tier: 			2,
		item_id: 		'copper_ore',
		chance: 		2.5,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		5,
			stone:		100,
		}
	},
	mine_coal:{
		name: 			'Mine coal',
		unlock_name: 	'Build a coal mine',
		tier: 			2,
		item_id: 		'coal',
		chance: 		5,
		skill: 			'mining',
		action_name: 		'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		5,
			stone:		100,
		}
	},
	mine_salt:{
		name: 			'Mine salt',
		unlock_name: 	'Build a salt mine',
		tier: 			4,
		item_id: 		'salt',
		chance: 		5,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			iron: 		10,
			miner: 		10,
			stone:		250,
		}
	},
	mine_iron:{
		name: 			'Mine iron',
		unlock_name: 	'Build an iron mine',
		tier: 			3,
		item_id: 		'iron_ore',
		chance: 		5,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			copper: 	10,
			miner: 		10,
			stone:		250,
		}
	},
	mine_silver:{
		name: 			'Mine silver',
		unlock_name: 	'Build a silver mine',
		tier: 			4,
		item_id: 		'silver_ore',
		chance: 		5,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			iron: 		20,
			miner: 		20,
			stone:		500,
		}
	},
	mine_gold:{
		name: 			'Mine gold',
		unlock_name: 	'Build a gold mine',
		tier: 			5,
		item_id: 		'gold_ore',
		chance: 		5,
		skill: 			'mining',
		action_name: 	'mine',
		fail_text: 		'mine',
		working_name: 	'mining',
		upgrade_item: 	'miner',
		unlock_cost:{
			iron: 		40,
			miner: 		40,
			silver: 	40,
			stone:		1000,
		}
	},
	/*tend_vegetable_garden:{
		name: 			'Tend the vegetables',
		item_id: 		'lettuce',
		bonus_loot:{
			cucumber: 	50,
			tomato: 	50,
			onion: 		25,
			potato: 	25,
			carrot: 	10
		},
		chance: 		5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		unlock_cost:{
			farmer:		1,
		}
	},*/
	grow_lettuce:{
		name: 			'Grow lettuce',
		unlock_name: 	'Plant lettuce',
		tier: 			3,
		item_id: 		'lettuce',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	grow_cucumber:{
		name: 			'Grow cucumbers',
		unlock_name: 	'Plant cucumbers',
		tier: 			3,
		item_id: 		'cucumber',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	grow_tomatoes:{
		name: 			'Grow tomatoes',
		unlock_name: 	'Plant tomatoes',
		tier: 			3,
		item_id: 		'tomato',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	grow_leek:{
		name: 			'Grow leek',
		unlock_name: 	'Plant leek',
		tier: 			3,
		item_id: 		'leek',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},

	grow_carrots:{
		name: 			'Grow carrots',
		unlock_name: 	'Plant carrots',
		tier: 			3,
		item_id: 		'carrot',
		chance: 		5,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			carrot: 	5,
			water: 		250,
		}
	},
	grow_onions:{
		name: 			'Grow onions',
		unlock_name: 	'Plant onions',
		tier: 			3,
		item_id: 		'onion',
		chance: 		2.5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	/*grow_garlic:{
		name: 			'Grow garlic',
		unlock_name: 	'Plant garlic',
		tier: 			3,
		item_id: 		'garlic',
		chance: 		2.5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},*/
	/*grow_pepper:{
		name: 			'Grow pepper',
		unlock_name: 	'Plant pepper',
		tier: 			3,
		item_id: 		'pepper',
		chance: 		2.5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			pepper: 	5,
			water: 		250,
		}
	},*/
	grow_potatoes:{
		name: 			'Grow potatoes',
		unlock_name: 	'Plant potatoes',
		tier: 			3,
		item_id: 		'potato',
		chance: 		2.5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			potato: 	5,
			water: 		250,
		}
	},
	grow_strawberries:{
		name: 			'Grow strawberries',
		unlock_name: 	'Plant strawberries',
		tier: 			3,
		item_id: 		'strawberry',
		chance: 		2.5,
		reward_factor: 	1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			strawberry: 5,
			water: 		250,
		}
	},
	grow_wheat:{
		name: 			'Grow wheat',
		unlock_name: 	'Plant wheat',
		tier: 			0,
		item_id: 		'wheat',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	1,
			water: 		25,
		}
	},
	grow_barley:{
		name: 			'Grow barley',
		unlock_name: 	'Plant barley',
		tier: 			3,
		item_id: 		'barley',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	grow_hops:{
		name: 			'Grow hops',
		unlock_name: 	'Plant hops',
		tier: 			4,
		item_id: 		'hops',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	
	grow_corn:{
		name: 			'Grow corn',
		unlock_name: 	'Plant corn',
		tier: 			3,
		item_id: 		'corn',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	grow_flax:{
		name: 			'Grow flax',
		unlock_name: 	'Plant flax',
		tier: 			1,
		item_id: 		'flax',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 		10,
			water: 		250,
		}
	},
	grow_cotton:{
		name: 			'Grow cotton',
		unlock_name: 	'Plant cotton',
		tier: 			4,
		item_id: 		'cotton',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		unlock_cost:{
			farmer: 	10,
			manure: 	5,
			water: 		250,
		}
	},
	
	grow_sugar_beet:{
		name: 			'Grow sugar beet',
		unlock_name: 	'Plant sugar beet',
		tier: 			2,
		item_id: 		'sugar_beet',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	10,
			twine: 		10,
			water: 		250,
		}
	},
	grow_sugarcane:{
		name: 			'Grow sugarcane',
		unlock_name: 	'Plant sugarcane',
		tier: 			2,
		item_id: 		'sugarcane',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	10,
			sugarcane: 	10,
			water: 		250,
		}
	},
	grow_sunflower:{
		name: 			'Grow sunflower',
		unlock_name: 	'Plant sunflower',
		tier: 			2,
		item_id: 		'sunflower',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		unlock_cost:{
			farmer: 	10,
			twine: 		10,
			water: 		250,
		}
	},
	
	tend_vineyard:{
		name: 			'Tend vineyard',
		unlock_name: 	'Build vineyard',
		tier: 			5,
		item_id: 		'grapes',
		chance: 		5,
		reward_factor: 		1,
		skill: 			'farming',
		action_name: 		'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 		'farmer',
		cost:{
			pole: 		1,
			water: 		1
		},
		unlock_cost:{
			farmer: 	10,
			pole: 		10,
			water: 		250,
		}
	},
	make_wine:{
		name: 			'Make wine',
		unlock_name: 	'Build winery',
		tier: 			5,
		item_id: 		'wine',
		chance: 		5,
		reward_factor: 		0.95,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 		'making',
		cost:{
			grapes: 	3,
			barrel: 	0.25
		},
		unlock_cost:{
			grapes: 	200,
			barrel: 	20,
		}
	},
	
	clear_the_field:{
		name: 			'Clear the field',
		item_id: 		'stone',
		bonus_loot:{
			hay: 		25,
			firewood: 	10,
		},
		progress_needed: 	1,
		reward_factor: 		1,
		skill: 			'gathering',
		action_name: 	'clear',
		fail_text: 		'clear',
		working_name: 	'clearing',
	},
	use_the_well:{
		name: 			'Use the well',
		unlock_name: 	'Build a well',
		tier: 			0,
		item_id: 		'water',
		bonus_loot:{
			sand: 		5,
		},
		chance: 		5,
		reward_factor: 	1,
		skill: 			'gathering',
		action_name: 	'collect',
		fail_text: 		'collect',
		working_name: 	'collecting',
		upgrade_item: 	'stone',
		unlock_cost:{
			stone: 		10
		}
	},
	assist_the_farmers:{
		name: 			'Assist the farmers',
		unlock_name: 	'Make friends',
		tier: 			0,
		item_id: 		'wheat',
		bonus_loot:{
			peasant: 	50,
			pitchfork: 	50,
			//pig: 		10
			/*sack: 		2,
			knife: 		0.3,*/
		},
		chance: 		5,
		skill: 			'charm',
		action_name: 	'assist',
		fail_text: 		'assist',
		working_name: 	'assisting',
		cost:{
			water: 		10,
		},
		unlock_cost:{
			water: 		50
		}
	},
	/*trade_farmers:{
		name: 			'Trade with farmers',
		unlock_name: 	'Start trade',
		tier: 			0,
		bonus_loot:{
			pitchfork: 	100,
			pig: 		5
		},
		chance: 		5,
		cost_type: 		'low',
		skill: 			'trading',
		action_name: 	'trade',
		fail_text: 		'fail',
		working_name: 	'trading',
		cost:{
			water: 		5,
			wheat: 		3,
		},
		unlock_cost:{
			wheat: 		10
		}
	},*/
	
	train_gatherer:{
		name: 			'Train gatherer',
		unlock_name: 	'Set up gatherer training',
		tier: 			0,
		item_id: 		'gatherer',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		0.5,
			basket: 		0.5,
		},
		unlock_cost:{
			peasant: 		2,
			basket: 		2,
			coins: 			50
		}
	},
	train_druid:{
		name: 			'Train druid',
		unlock_name: 	'Set up druid training',
		tier: 			5,
		item_id: 		'druid',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			cloak: 			1,
			gatherer: 		1,
			paper: 			1,
		},
		unlock_cost:{
			cloak: 			1,
			gatherer: 		1,
			paper: 			1,
		}
	},
	train_shepherd:{
		name: 			'Train shepherd',
		unlock_name: 	'Set up shepherd training',
		tier: 			3,
		item_id: 		'shepherd',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		1,
			cane: 			1,
			dog: 			1,
		},
		unlock_cost:{
			peasant: 		5,
			cane: 			5,
			dog: 			5,
			coins: 			1000
		}
	},
	train_guard:{
		name: 			'Train guard',
		unlock_name: 	'Build guardhouse',
		tier: 			6,
		item_id: 		'guard',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		1,
			plate_armor: 	1,
			shield: 		1,
			sword: 			1,
		},
		unlock_cost:{
			peasant: 		1,
			plate_armor: 	1,
			shield: 		1,
			sword: 			1,
		}
	},
	train_farmer:{
		name: 			'Train farmer',
		unlock_name: 	'Set up farmer training',
		tier: 			0,
		item_id: 		'farmer',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		0.5,
			pitchfork: 		0.5,
			wheat: 			2
		},
		unlock_cost:{
			peasant: 		2,
			pitchfork: 		2,
			wheat: 			10,
			coins: 			100
		}
	},
	farming_academy:{
		name: 			'Farming academy',
		unlock_name: 	'Build a farming academy',
		tier: 			5,
		item_id: 		'farmer',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		1,
			pitchfork: 		1,
			plow: 			1
		},
		unlock_cost:{
			peasant: 		1,
			pitchfork: 		1,
			plank: 			1,
			plow: 			1,
			stone: 			1,
			water: 			1, 
		}
	},
	gathering_academy:{
		name: 			'Gathering academy',
		unlock_name: 	'Build a gathering academy',
		tier: 			5,
		item_id: 		'gatherer',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			basket: 		1,
			cap: 			1,
			peasant: 		1,
			shirt: 			1,
		},
		unlock_cost:{
			basket: 		1,
			cap: 			1,
			peasant: 		1,
			plank: 			1,
			shirt: 			1,
			stone: 			1,
		}
	},
	train_fisherman:{
		name: 			'Train fisherman',
		unlock_name: 	'Learn to train fishermen',
		tier: 			2,
		item_id: 		'fisherman',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		0.5,
			net: 			0.5,
			water: 			5
		},
		unlock_cost:{
			peasant: 		2,
			net: 			2,
			water: 			20,
			coins: 			100
		}
	},
	train_hunter:{
		name: 			'Train hunter',
		unlock_name: 	'Set up hunter training',
		tier: 			1,
		item_id: 		'hunter',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		0.5,
			bow: 			0.5,
			apple: 			2.5,
		},
		unlock_cost:{
			apple: 		10,
			arrow: 		10,
			bow: 		2,
			peasant: 	2,
			coins: 		100
		}
	},
	train_veteran_hunter:{
		name: 			'Train veteran hunter',
		unlock_name: 	'Set up veteran training',
		tier: 			6,
		item_id: 		'veteran_hunter',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			hunter: 		1,
			quiver: 		1,
			spear: 			5
		},
		unlock_cost:{
			hunter: 	25,
			quiver: 	25,
			spear: 		100
		}
	},
	
	train_miner:{
		name: 			'Train miner',
		unlock_name: 	'Set up miner training',
		tier: 			2,
		item_id: 		'miner',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		1,
			pickaxe: 		1,
			stone: 			5
		},
		unlock_cost:{
			peasant: 		2,
			pickaxe: 		2,
			stone: 			10,
			coins: 			100
		}
	},
	miner_academy:{
		name: 			'Miner academy',
		unlock_name: 	'Build miner academy',
		tier: 			6,
		item_id: 		'miner',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			helmet: 		1,
			jeans: 			1,
			peasant: 		1,
			pickaxe: 		1,
		},
		unlock_cost:{
			helmet: 		1,
			jeans: 			1,
			peasant: 		1,
			pickaxe: 		1,
			roofing: 		1,
			stone: 			1,
		}
	},
	train_lumberjack:{
		name: 			'Train lumberjack',
		unlock_name: 	'Set up lumberjack training',
		tier: 			2,
		item_id: 		'lumberjack',
		chance: 		5,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			peasant: 		1,
			axe: 			1,
			lumber: 		1
		},
		unlock_cost:{
			peasant: 	2,
			axe: 		2,
			lumber: 	10,
			coins: 		500
		}
	},
	/*charm_lumberjacks:{
		name: 			'Charm lumberjack',
		unlock_name: 	'Charm lumberjacks',
		tier: 			3,
		item_id: 		'lumberjack',
		chance: 		5,
		skill: 			'charm',
		action_name: 	'charm',
		fail_text: 		'charm',
		working_name: 	'charming',
		upgrade_item: 	'lucky_charm',
		unlock_cost:{
			lucky_charm: 	5,
			lumber: 		10,
			coins: 			500
		}
	},*/

	/*plow_wheat_field:{
		name: 			'Plow wheat field',
		unlock_name: 	'Plow wheat field',
		tier: 			0,
		item_id: 		'wheat',
		chance: 		5,
		reward_factor: 		100,
		cost_type: 		'low',
		skill: 			'farming',
		action_name: 	'plow',
		fail_text: 		'plow',
		working_name: 	'plowing',
		upgrade_item: 	'farmer',
		cost:{
			plow: 	1
		},
		unlock_cost:{
			plow: 		1,
			farmer: 		5,
		}
	},*/
	/*tend_large_field:{
		name: 			'Tend a large field',
		unlock_name: 	'Plow a large field',
		item_id: 		'wheat',
		bonus_loot:{
			flax: 			50,
			sugarcane: 		5,
		},
		chance: 		5,
		reward_factor: 		35,
		skill: 			'farming',
		action_name: 	'farm',
		fail_text: 		'farm',
		working_name: 	'farming',
		upgrade_item: 	'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},*/
	package_flour:{
		name: 			'Package flour',
		unlock_name: 	'Set up flour packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'pack',
		fail_text: 		'pack',
		working_name: 	'packaging',
		cost:{
			flour: 			10,
			sack: 			1,
		},
		unlock_cost:{
			flour: 			10,
			sack: 			1,
		}
	},
	mill_wheat_flour:{
		name: 			'Mill wheat flour',
		unlock_name: 	'Build a wheat mill',
		tier: 			2,
		item_id: 		'flour',
		chance: 		20,
		skill: 			'milling',
		action_name: 	'mill',
		fail_text: 		'mill',
		working_name: 	'milling',
		cost:{
			wheat: 	5
		},
		unlock_cost:{
			stone:		100,
			twine: 		100, 
			wheat: 		100,
		}
	},
	mill_barley_flour:{
		name: 			'Mill barley flour',
		unlock_name: 	'Build a barley mill',
		tier: 			2,
		item_id: 		'flour',
		chance: 		20,
		skill: 			'milling',
		action_name: 	'mill',
		fail_text: 		'mill',
		working_name: 	'milling',
		cost:{
			barley: 	5
		},
		unlock_cost:{
			barley: 	100,
			stone:		100,
			twine: 		100, 
		}
	},
	mill_wild_flour:{
		name: 			'Mill wild flour',
		unlock_name: 	'Build a grain mill',
		tier: 			2,
		item_id: 		'flour',
		chance: 		20,
		skill: 			'milling',
		action_name: 	'mill',
		fail_text: 		'mill',
		working_name: 	'milling',
		cost:{
			grass: 	12
		},
		unlock_cost:{
			grass: 		1000,
			stone:		100,
			twine: 		100, 
		}
	},
	refine_sugar:{
		name: 			'Refine sugarcane',
		unlock_name: 	'Build a sugarcane mill',
		tier: 			2,
		item_id: 		'sugar',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'milling',
		action_name: 	'mill',
		fail_text: 		'mill',
		working_name: 	'milling',
		cost:{
			sugarcane: 	1
		},
		unlock_cost:{
			stone:		100,
			sugarcane: 	25
		}
	},
	refine_sugar_beet:{
		name: 			'Refine sugar beet',
		unlock_name: 	'Build a sugar beet mill',
		tier: 			2,
		item_id: 		'sugar',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'milling',
		action_name: 	'mill',
		fail_text: 		'mill',
		working_name: 	'milling',
		cost:{
			sugar_beet: 	1
		},
		unlock_cost:{
			stone:			100,
			sugar_beet: 	25
		}
	},
	refine_sunflower:{
		name: 			'Refine sunflower',
		unlock_name: 	'Start refining sunflower',
		tier: 			2,
		item_id: 		'oil',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'milling',
		action_name: 	'mill',
		fail_text: 		'mill',
		working_name: 	'milling',
		cost:{
			sunflower: 		1
		},
		unlock_cost:{
			stone:			100,
			sunflower: 		25
		}
	},
	
	feed_chickens:{
		name: 			'Feed the chickens',
		unlock_name: 	'Lure some chickens',
		tier: 			2,
		item_id: 		'egg',
		bonus_loot:{
			feather: 	50,
		},
		chance: 		20,
		reward_factor: 	2,
		skill: 			'husbandry',
		action_name: 		'feed',
		fail_text: 		'feed',
		working_name: 	'feeding',
		cost:{
			wheat: 	2
		},
		unlock_cost:{
			twine: 		10,
			wheat: 		100,
		}
	},
	breed_chickens:{
		name: 			'Hatch eggs',
		unlock_name: 	'Learn to breed chickens',
		tier: 			2,
		item_id: 		'chicken',
		bonus_loot:{
			manure: 	10,
		},
		chance: 		20,
		skill: 			'husbandry',
		action_name: 	'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		cost:{
			egg: 	2,
			hay: 	0.4
		},
		unlock_cost:{
			egg: 	2,
			hay: 	0.4
		}
	},
	breed_pigs:{
		name: 			'Breed pigs',
		unlock_name: 	'Learn to breed pigs',
		tier: 			3,
		item_id: 		'piglet',
		chance: 		20,
		skill: 			'husbandry',
		action_name: 	'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		upgrade_item: 	'pig',
		cost:{
			barley: 	1,
			corn: 		1,
		},
		unlock_cost:{
			pig: 		2,
			barley: 	50,
			corn: 		50,
		}
	},
	grow_pigs:{
		name: 			'Grow pigs',
		unlock_name: 	'Learn to grow pigs',
		tier: 			3,
		item_id: 		'pig',
		bonus_loot:{
			manure: 	10,
		},
		chance: 		20,
		skill: 			'husbandry',
		action_name: 	'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		cost:{
			piglet: 	1,
			milk: 		2,
		},
		unlock_cost:{
			piglet: 	1,
			milk: 		2,
		}
	},
	transmute_stone:{
		name: 			'transmute stone',
		unlock_name: 	'Learn to transmute',
		tier: 			3,
		item_id: 		'iron',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'transmute',
		fail_text: 		'transmute',
		working_name: 	'transmuting',
		cost:{
			parsley: 	5,
			stone: 		2,
		},
		unlock_cost:{
			parsley: 	5,
			stone: 		2,
		}
	},
	transmute_iron:{
		name: 			'transmute iron',
		unlock_name: 	'Study transmutation',
		tier: 			5,
		item_id: 		'gold',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'transmute',
		fail_text: 		'transmute',
		working_name: 	'transmuting',
		cost:{
			parsley: 	5,
			mint: 		4,
			sage: 		3,
			rosemary: 	2,
			iron: 		1,
		},
		unlock_cost:{
			parsley: 	5,
			mint: 		4,
			sage: 		3,
			rosemary: 	2,
			iron: 		1,
		}
	},
	brew_health_potion:{
		name: 			'brew health potion',
		unlock_name: 	'Learn to brew health potions',
		tier: 			1,
		item_id: 		'health_potion',
		chance: 		20,
		cost_type: 		'low',
		skill: 			'alchemy',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			parsley: 	1.5,
			water: 		1,
			jar: 		0.5,
		},
		unlock_cost:{
			parsley: 	20,
			water: 		10,
			jar: 		2,
		}
	},
	craft_remedy:{
		name: 			'craft remedy',
		unlock_name: 	'Learn to craft remedies',
		tier: 			2,
		item_id: 		'remedy',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			parsley: 	2,
			mint: 		5,
			sage: 		1,
		},
		unlock_cost:{
			parsley: 	40,
			mint: 		100,
			sage: 		20,
		}
	},
	craft_healing_tome:{
		name: 			'craft healing tome',
		unlock_name: 	'Learn to craft healing tomes',
		tier: 			6,
		item_id: 		'healing_tome',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			book: 		1,
			remedy: 	5,
		},
		unlock_cost:{
			book: 		10,
			remedy: 	50,
		}
	},
	craft_first_aid_kit:{
		name: 			'craft first aid kit',
		unlock_name: 	'Learn to craft first aid kits',
		tier: 			6,
		item_id: 		'first_aid_kit',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			bandage: 		5,
			//remedy: 		5,
			health_potion: 	20,
			crate: 			1
		},
		unlock_cost:{
			bandage: 		50,
			//remedy: 		50,
			health_potion: 	200,
			crate: 			10
		}
	},
	brew_mana_potion:{
		name: 			'brew mana potion',
		unlock_name: 	'Learn to brew mana potions',
		tier: 			2,
		item_id: 		'mana_potion',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			parsley: 	3,
			sage: 		3,
			water: 		3,
			jar: 		0.5,
			firewood: 	3,
		},
		unlock_cost:{
			parsley: 	30,
			sage: 		50,
			water: 		50,
			jar: 		5,
			firewood: 	25,
		}
	},
	brew_poison:{
		name: 			'brew poison',
		unlock_name: 	'Learn to brew poison',
		tier: 			3,
		item_id: 		'poison',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			parsley: 	2,
			mint: 		0.5,
			bone: 		5,
			water: 		5,
			jar: 		0.5,
			firewood: 	3,
		},
		unlock_cost:{
			parsley: 	20,
			mint: 		5,
			bone: 		50,
			water: 		25,
			jar: 		5,
			firewood: 	25,
		}
	},
	
	brew_luck_potion:{
		name: 			'brew luck potion',
		unlock_name: 	'Learn to brew luck potions',
		tier: 			4,
		item_id: 		'luck_potion',
		chance: 		20,
		cost_type: 		'low',
		skill: 			'alchemy',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			mint: 			1,
			lucky_charm: 	5,
			water: 			3,
			jar: 			1,
			firewood: 		3,
		},
		unlock_cost:{
			mint: 			5,
			lucky_charm: 	25,
			water: 			15,
			jar: 			5,
			firewood: 		15,
		}
	},
	brew_love_potion:{
		name: 			'brew love potion',
		unlock_name: 	'Learn to brew love potions',
		tier: 			5,
		item_id: 		'love_potion',
		chance: 		20,
		cost_type: 		'low',
		skill: 			'alchemy',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			mint: 		3,
			rosemary: 	3,
			water: 		3,
			jar: 		1,
			firewood: 	3,
		},
		unlock_cost:{
			mint: 		15,
			rosemary: 	15,
			water: 		15,
			jar: 		5,
			firewood: 	15,
		}
	},
	brew_restore_potion:{
		name: 			'brew restore potion',
		unlock_name: 	'Learn to brew restore potions',
		tier: 			5,
		item_id: 		'restore_potion',
		chance: 		20,
		skill: 			'alchemy',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			health_potion: 	0.5,
			mana_potion: 	0.5,
			jar: 			0.5,
			firewood: 		2.5,
		},
		unlock_cost:{
			health_potion: 	10,
			mana_potion: 	10,
			jar: 			10,
			firewood: 		50,
		}
	},
	
	make_salad:{
		name: 			'Make salad',
		unlock_name: 	'Learn to make salads',
		tier: 			2,
		item_id: 		'salad',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			cucumber: 	2,
			lettuce: 	3,
			oil: 		1,
			tomato: 	1,
		},
		unlock_cost:{
			cucumber: 	2,
			lettuce: 	3,
			oil: 		1,
			tomato: 	1,
		}
	},
	make_meal_salad:{
		name: 			'Make meal salad',
		unlock_name: 	'Learn to make meal salads',
		tier: 			3,
		item_id: 		'dinner',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			egg: 		1,
			firewood: 	1,
			pasta: 		1,
			poultry: 	1,
			salad: 		1,
			water: 		0.5,
		},
		unlock_cost:{
			egg: 		1,
			firewood: 	1,
			pasta: 		1,
			poultry: 	1,
			salad: 		1,
			water: 		0.5,
		}
	},
	bacon_and_eggs:{
		name: 			'Bacon and eggs',
		unlock_name: 	'Learn to make bacon and eggs',
		tier: 			3,
		item_id: 		'breakfast',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			egg: 		1,
			firewood: 	0.5,
			pork: 		1,
		},
		unlock_cost:{
			egg: 		1,
			firewood: 	0.5,
			pork: 		1,
		}
	},
	make_pasta:{
		name: 			'Make pasta',
		unlock_name: 	'Start making pasta',
		tier: 			2,
		item_id: 		'pasta',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			egg: 		1,
			flour: 		1,
		},
		unlock_cost:{
			egg: 		1,
			flour: 		1,
		}
	},
	make_spaghetti:{
		name: 			'Make spaghetti',
		unlock_name: 	'Start making spaghetti',
		tier: 			3,
		item_id: 		'dinner',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			firewood: 		1,
			meat_balls: 	1,
			pasta: 			2,
			tomato: 		1,
			water: 			1,
		},
		unlock_cost:{
			firewood: 		1,
			meat_balls: 	1,
			pasta: 			2,
			tomato: 		1,
			water: 			1,
		}
	},
	make_chicken_pasta:{
		name: 			'Make chicken pasta',
		unlock_name: 	'Start making chicken pasta',
		tier: 			3,
		item_id: 		'dinner',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			firewood: 		1,
			mayonnaise: 	1,
			pasta: 			2,
			poultry: 		1,
			water: 			1,
		},
		unlock_cost:{
			firewood: 		1,
			mayonnaise: 	1,
			pasta: 			2,
			poultry: 		1,
			water: 			1,
		}
	},
	
	bake_bread:{
		name: 			'Bake bread',
		unlock_name: 	'Build an oven for bread',
		tier: 			1,
		item_id: 		'bread',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			flour: 		2,
			water: 		2,
			firewood: 	2,
		},
		unlock_cost:{
			stone: 		25,
			flour: 		10,
			water: 		10,
			firewood: 	10
		}
	},
	bake_walnut_bread:{
		name: 			'Bake nut bread',
		unlock_name: 	'Practice making nut bread',
		tier: 			3,
		item_id: 		'bread',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			flour: 		1,
			walnut: 	5,
			water: 		1,
			firewood: 	1,
		},
		unlock_cost:{
			bread: 		5,
			walnut: 	25
		}
	},
	bake_cornbread:{
		name: 			'Bake cornbread',
		unlock_name: 	'Practice making cornbread',
		tier: 			3,
		item_id: 		'bread',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			flour: 		1,
			corn: 		5,
			water: 		1,
			firewood: 	1,
		},
		unlock_cost:{
			bread: 		5,
			corn: 		50
		}
	},
	bake_blueberry_muffin:{
		name: 			'Bake blueberry muffin',
		unlock_name: 	'Learn to bake blueberry muffins',
		tier: 			4,
		item_id: 		'blueberry_muffin',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			blueberry: 	1,
			egg: 		1,
			flour: 		1,
			water: 		1,
			firewood: 	1,
		},
		unlock_cost:{
			blueberry: 	1,
			egg: 		1,
			flour: 		1,
			water: 		1,
			firewood: 	1,
		}
	},
	bake_cookies:{
		name: 			'Bake cookies',
		unlock_name: 	'Learn to bake cookies',
		tier: 			3,
		item_id: 		'cookie',
		reward_factor: 	4,
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			butter: 	1,
			sugar: 		1,
			flour: 		1,
			firewood: 	1,
		},
		unlock_cost:{
			butter: 	1,
			sugar: 		1,
			flour: 		1,
			firewood: 	1,
		}
	},
	make_cucumber_sandwich:{
		name: 			'Cucumber sandwich',
		unlock_name: 	'Practice making cucumber sandwiches',
		tier: 			5,
		item_id: 		'cucumber_sandwich',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			bread: 		1,
			butter: 	1,
			cucumber: 	1,
		},
		unlock_cost:{
			bread: 		1,
			butter: 	1,
			cucumber: 	1,
		}
	},
	cook_fish_and_chips:{
		name: 			'Make fish and chips',
		unlock_name: 	'Learn to cook fish and chips',
		tier: 			5,
		item_id: 		'dinner',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			firewood: 		1,
			flour: 			1,
			oil: 			1,
			plate: 			0.5,
			potato: 		1,
			smoked_fish: 	1,
		},
		unlock_cost:{
			firewood: 		1,
			flour: 			1,
			oil: 			1,
			plate: 			0.5,
			potato: 		1,
			smoked_fish: 	1,
		}
	},
	brew_mint_tea:{
		name: 			'Brew mint tea',
		unlock_name: 	'Learn to brew mint tea',
		tier: 			4,
		item_id: 		'mint_tea',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			firewood: 	1,
			jar: 		1,
			mint: 		1,
			water: 		3,
		},
		unlock_cost:{
			firewood: 	1,
			jar: 		1,
			mint: 		1,
			water: 		3,
		}
	},
	brew_beer:{
		name: 			'Brew beer',
		unlock_name: 	'Learn to brew beer',
		tier: 			5,
		item_id: 		'beer',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'brew',
		fail_text: 		'brew',
		working_name: 	'brewing',
		cost:{
			barley: 	5,
			hops: 		5,
			water: 		3,
			jar: 		1,
			firewood: 	1,
		},
		unlock_cost:{
			barley: 	50,
			hops: 		50,
			water: 		30,
			jar: 		10,
			firewood: 	10,
		}
	},
	bake_fries:{
		name: 			'Bake fries',
		unlock_name: 	'Learn to bake fries',
		tier: 			3,
		item_id: 		'fries',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			firewood: 	2,
			oil: 		1,
			potato:		2,
			salt: 		1,
		},
		unlock_cost:{
			firewood: 	2,
			oil: 		1,
			potato:		2,
			salt: 		1,
		}
	},
	/*bake_garlic_fries:{
		name: 			'Bake garlic fries',
		unlock_name: 	'Learn to bake garlic fries',
		tier: 			3,
		item_id: 		'fries',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			firewood: 	2,
			oil: 		1,
			potato:		2,
			garlic: 	1,
		},
		unlock_cost:{
			firewood: 	2,
			oil: 		1,
			potato:		2,
			garlic: 	1,
		}
	},*/
	bake_apple_pie:{
		name: 			'Bake apple pie',
		unlock_name: 	'Learn to bake apple pies',
		tier: 			5,
		item_id: 		'pie',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			egg:		2,
			flour: 		3,
			apple: 		5,
			sugar: 		0.5,
			firewood: 	5
		},
		unlock_cost:{
			egg:		30,
			flour: 		100,
			apple: 		200,
			sugar: 		20,
			firewood: 	50
		}
	},
	bake_carrot_cake:{
		name: 			'Bake carrot cake',
		unlock_name: 	'Learn to bake carrot cake',
		tier: 			5,
		item_id: 		'pie',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			egg:		2,
			flour: 		3,
			carrot: 	5,
			sugar: 		0.5,
			firewood: 	5
		},
		unlock_cost:{
			egg:		30,
			flour: 		50,
			carrot: 	100,
			sugar: 		20,
			firewood: 	50
		}
	},
	bake_cherry_pie:{
		name: 			'Bake cherry pie',
		unlock_name: 	'Learn to bake cherry pie',
		tier: 			5,
		item_id: 		'pie',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			egg:		2,
			flour: 		3,
			cherry: 	5,
			sugar: 		1,
			firewood: 	5
		},
		unlock_cost:{
			egg:		30,
			flour: 		50,
			cherry: 	120,
			sugar: 		20,
			firewood: 	50
		}
	},
	train_cowboy:{
		name: 			'Train cowboy',
		unlock_name: 	'Learn to train cowboys',
		tier: 			5,
		item_id: 		'cowboy',
		chance: 		20,
		skill: 			'training',
		action_name: 	'train',
		fail_text: 		'train',
		working_name: 	'training',
		cost:{
			horse: 				1,
			horseshoe: 			5,
			shepherd: 			1,
			saddle: 			1,
		},
		unlock_cost:{
			horse: 				5,
			horseshoe: 			25,
			shepherd: 			5,
			saddle: 			5,
		}
	},
	tend_herd:{
		name: 			'Tend herd',
		unlock_name: 	'Start a herd',
		tier: 			5,
		item_id: 		'cow',
		reward_factor: 	1,
		chance: 		20,
		skill: 			'husbandry',
		action_name: 	'tend',
		fail_text: 		'tend',
		working_name: 	'tending',
		upgrade_item: 		'cowboy',
		/*cost:{
			horseshoe: 			1,
			milk: 				5,
			twine: 				1,
		},*/
		unlock_cost:{
			cow: 				10,
			cowboy: 			5,
			/*horseshoe: 			10,
			milk: 				50,
			twine: 				10,*/
		}
	},
	sell_herd:{
		name: 			'Sell herd',
		unlock_name: 	'Start selling herds',
		tier: 			6,
		item_id: 		'gold',
		chance: 		20,
		skill: 			'charm',
		action_name: 	'trade',
		fail_text: 		'trade',
		working_name: 	'trading',
		upgrade_item: 		'cowboy',
		cost:{
			cow: 				1,
		},
		unlock_cost:{
			cow: 				50,
			cowboy: 			5,
		}
	},
	build_tollbridge:{
		name: 			'Collect toll',
		unlock_name: 	'Build a tollbridge',
		tier: 			4,
		bonus_loot:{
			nails: 			100,
			salt: 			70,
			copper_pot: 	20,
			barrel: 		10,
		},
		chance: 		20,
		skill: 			'charm',
		action_name: 	'collect',
		fail_text: 		'collect',
		working_name: 	'collecting',
		upgrade_item: 	'brick',
		unlock_cost:{
			brick: 		100,
		},
	},
	bake_brick:{
		name: 			'Bake brick',
		unlock_name: 	'Build brick oven',
		tier: 			4,
		item_id: 		'brick',
		chance: 		20,
		skill: 			'smelting',
		action_name: 	'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			clay: 		2,
			sand: 		2,
			firewood:	2,
			water: 		2
		},
		unlock_cost:{
			clay: 		20,
			stone: 		20,
			firewood: 	20
		},
	},
	bake_shingle:{
		name: 			'Bake shingles',
		unlock_name: 	'Build shingle oven',
		tier: 			5,
		item_id: 		'roofing',
		chance: 		20,
		skill: 			'smelting',
		action_name: 	'bake',
		fail_text: 		'bake',
		working_name: 	'baking',
		cost:{
			clay: 		5,
			sand: 		3,
			firewood:	3,
			water: 		3
		},
		unlock_cost:{
			clay: 		20,
			stone: 		20,
			firewood: 	20,
		},
	},
	craft_charcoal:{
		name: 			'Fuel the fire',
		unlock_name: 		'Build a large fire',
		tier: 			0,
		item_id: 		'coal',
		chance: 		20,
		reward_factor: 		1,
		skill: 			'smelting',
		action_name: 	'burn',
		fail_text: 		'burn',
		working_name: 	'burning',
		cost:{
			firewood:	1,
		},
		unlock_cost:{
			firewood: 	1,
		},
	},
	craft_charcoal_from_lumber:{
		name: 			'Craft charcoal',
		unlock_name: 		'Start crafting charcoal',
		tier: 			2,
		item_id: 		'coal',
		chance: 		20,
		reward_factor: 		1,
		skill: 			'smelting',
		action_name: 	'burn',
		fail_text: 		'burn',
		working_name: 	'burning',
		cost:{
			lumber:	1,
		},
		unlock_cost:{
			lumber: 	1,
		},
	},
	smelt_copper:{
		name: 			'Smelt copper',
		unlock_name: 		'Build a small furnace',
		tier: 			1,
		item_id: 		'copper',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'smelt',
		fail_text: 		'smelt',
		working_name: 	'smelting',
		cost:{
			copper_ore:	2,
			coal: 		2
		},
		unlock_cost:{
			copper_ore: 5,
			coal: 		5,
			stone:		25,
		},
	},
	smelt_silver:{
		name: 			'Smelt silver',
		unlock_name: 		'Build a silver furnace',
		tier: 			4,
		item_id: 		'silver',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'smelt',
		fail_text: 		'smelt',
		working_name: 	'smelting',
		cost:{
			silver_ore:	2,
			coal: 		8
		},
		unlock_cost:{
			silver_ore: 	10,
			coal: 			60,
			stone:			250,
		},
	},
	smelt_gold:{
		name: 			'Smelt gold',
		unlock_name: 		'Build a golden furnace',
		tier: 			5,
		item_id: 		'gold',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'smelt',
		fail_text: 		'smelt',
		working_name: 	'smelting',
		cost:{
			gold_ore:	2,
			coal: 		10
		},
		unlock_cost:{
			gold_ore: 	10,
			coal: 		150,
			stone:		1000,
		},
	},
	smelt_glass:{
		name: 			'Blow glass',
		unlock_name: 		'Learn to blow glass',
		tier: 			0,
		item_id: 		'glass',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'smelt',
		fail_text: 		'smelt',
		working_name: 	'smelting',
		cost:{
			sand:		15,
			coal: 		1
		},
		unlock_cost:{
			sand:		50,
			coal: 		10,
		},
	},
	craft_glass_jar:{
		name: 			'Craft glass jar',
		unlock_name: 		'Learn to craft glass jars',
		tier: 			0,
		item_id: 		'jar',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			glass:		2,
			coal: 		1
		},
		unlock_cost:{
			glass:		10,
			coal: 		10,
		},
	},
	craft_jar:{
		name: 			'Craft jar',
		unlock_name: 		'Learn to craft jars',
		tier: 			1,
		item_id: 		'jar',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			clay:		4,
			firewood: 	4
		},
		unlock_cost:{
			clay:		20,
			firewood: 	20,
		},
	},
	forge_jar:{
		name: 			'Forge jar',
		unlock_name: 		'Learn to forge jars',
		tier: 			5,
		item_id: 		'jar',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			iron:		1,
			coal: 		1
		},
		unlock_cost:{
			iron:		1,
			coal: 		1,
		},
	},
	bake_plate:{
		name: 			'Bake plates',
		unlock_name: 		'Start baking plates',
		tier: 			1,
		item_id: 		'plate',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'bake',
		fail_text: 		'fail',
		working_name: 	'baking',
		cost:{
			clay:		4,
			firewood: 	4
		},
		unlock_cost:{
			clay:		4,
			firewood: 	4
		},
	},
	craft_wooden_jar:{
		name: 			'Carve wooden jar',
		unlock_name: 		'Practice carving wooden jars',
		tier: 			0,
		item_id: 		'jar',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 		'carve',
		fail_text: 		'carve',
		working_name: 	'carving',
		cost:{
			lumber:		4,
		},
		unlock_cost:{
			lumber:		20,
		},
	},
	wooden_cutlery:{
		name: 			'Wooden cutlery',
		unlock_name: 		'Start carving wooden cutlery',
		tier: 			0,
		item_id: 		'cutlery',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 		'carve',
		fail_text: 		'carve',
		working_name: 	'carving',
		cost:{
			lumber:		1,
		},
		unlock_cost:{
			lumber:		1,
		},
	},
	wooden_plate:{
		name: 			'Wooden plates',
		unlock_name: 		'Start carving wooden plates',
		tier: 			0,
		item_id: 		'plate',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 		'carve',
		fail_text: 		'carve',
		working_name: 	'carving',
		cost:{
			lumber:		1,
		},
		unlock_cost:{
			lumber:		1,
		},
	},
	
	silver_cutlery:{
		name: 			'Silver cutlery',
		unlock_name: 		'Start making silver cutlery',
		tier: 			4,
		item_id: 		'cutlery',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'make',
		fail_text: 		'fail',
		working_name: 	'making',
		cost:{
			silver:		1,
		},
		unlock_cost:{
			silver:		1,
		},
	},
	iron_cutlery:{
		name: 			'Iron cutlery',
		unlock_name: 		'Start making iron cutlery',
		tier: 			2,
		item_id: 		'cutlery',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'make',
		fail_text: 		'fail',
		working_name: 	'making',
		cost:{
			iron:		1,
		},
		unlock_cost:{
			iron:		1,
		},
	},
	iron_plate:{
		name: 			'Iron plates',
		unlock_name: 		'Start making iron plates',
		tier: 			2,
		item_id: 		'plate',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'make',
		fail_text: 		'fail',
		working_name: 	'making',
		cost:{
			iron:		1,
		},
		unlock_cost:{
			iron:		1,
		},
	},
	silver_plate:{
		name: 			'Silver plates',
		unlock_name: 		'Start making silver plates',
		tier: 			4,
		item_id: 		'plate',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'make',
		fail_text: 		'fail',
		working_name: 	'making',
		cost:{
			silver:		1,
		},
		unlock_cost:{
			silver:		1,
		},
	},
	craft_canes:{
		name: 			'Craft canes',
		unlock_name: 		'Practice carving canes',
		tier: 			3,
		item_id: 		'cane',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 		'carve',
		fail_text: 		'carve',
		working_name: 	'carving',
		cost:{
			pole:		1,
			sage: 		1,
		},
		unlock_cost:{
			pole:		10,
			sage: 		5,
		},
	},
	
	smelt_iron:{
		name: 			'Smelt iron',
		unlock_name: 		'Build a large furnace',
		tier: 			3,
		item_id: 		'iron',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'smelt',
		fail_text: 		'smelt',
		working_name: 	'smelting',
		cost:{
			iron_ore:	2,
			coal: 		2
		},
		unlock_cost:{
			iron_ore: 	10,
			coal: 		10,
			stone:		100,
		},
	},
	smelt_steel:{
		name: 			'Smelt steel',
		unlock_name: 		'Build a steel smeltery',
		tier: 			6,
		item_id: 		'steel',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smelting',
		action_name: 		'smelt',
		fail_text: 		'smelt',
		working_name: 	'smelting',
		upgrade_item: 	'miner',
		cost:{
			coal: 		1,
			iron:		1,
		},
		unlock_cost:{
			coal: 		1,
			iron: 		1,
			miner: 		1,
			stone:		10,
		},
	},
	craft_copper_pot:{
		name: 			'Craft copper pot',
		unlock_name: 	'Learn to craft copper pots',
		tier: 			0,
		item_id: 		'copper_pot',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			copper:		2,
		},
		unlock_cost:{
			copper:		20,
		}
	},
	craft_spyglass:{
		name: 			'Craft spyglass',
		unlock_name: 	'Learn to craft spyglasses',
		tier: 			2,
		item_id: 		'spyglass',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			copper:		5,
			glass: 		2,
		},
		unlock_cost:{
			copper:		80,
			glass: 		40,
		}
	},
	
	craft_knife:{
		name: 			'Craft knife',
		unlock_name: 	'Learn to craft knives',
		tier: 			3,
		item_id: 		'knife',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		1,
			lumber: 	1,
			stone: 		3,
		},
		unlock_cost:{
			iron:		10,
			lumber: 	10,
			stone: 		30
		}
	},
	craft_sinister_dagger:{
		name: 			'Craft sinister dagger',
		unlock_name: 	'Learn to craft sinister daggers',
		tier: 			5,
		item_id: 		'sinister_dagger',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			knife:		1,
			poison: 	2
		},
		unlock_cost:{
			knife:		10,
			poison: 	20
		}
	},
	
	craft_arrow:{
		name: 			'Craft arrow',
		unlock_name: 	'Start fletching arrows',
		tier: 			0,
		item_id: 		'arrow',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'fletch',
		fail_text: 		'craft',
		working_name: 	'fletching',
		cost:{
			feather:		2,
			firewood: 		2
		},
		unlock_cost:{
			feather:		3,
			firewood: 		5
		}
	},
	craft_bone_arrow:{
		name: 			'Craft bone arrow',
		unlock_name: 	'Start fletching  bone arrows',
		tier: 			4,
		item_id: 		'arrow',
		chance: 		20,
		reward_factor: 	8,
		skill: 			'carpentry',
		action_name: 		'fletch',
		fail_text: 		'craft',
		working_name: 	'fletching',
		cost:{
			feather:		1,
			firewood: 		1,
			bone: 			1
		},
		unlock_cost:{
			feather:		10,
			firewood: 		10,
			bone: 			10,
		}
	},
	craft_bow:{
		name: 			'Craft bow',
		unlock_name: 	'Learn to craft bows',
		tier: 			1,
		item_id: 		'bow',
		chance: 		20,
		cost_type: 		'low',
		skill: 			'carpentry',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			pole: 			1,
			twine: 			1
		},
		unlock_cost:{
			pole: 			1,
			twine: 			1,
		}
	},
	
	craft_silver_ring:{
		name: 			'Craft silver ring',
		unlock_name: 	'Practice forging silver rings',
		tier: 			4,
		item_id: 		'silver_ring',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			silver:		2,
			coal: 		2
		},
		unlock_cost:{
			silver:		20,
			coal: 		200
		}
	},
	craft_gold_ring:{
		name: 			'Craft gold ring',
		unlock_name: 	'Practice forging gold rings',
		tier: 			5,
		item_id: 		'gold_ring',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			gold:		2,
			coal: 		5
		},
		unlock_cost:{
			gold:		20,
			coal: 		600
		}
	},
	
	craft_nails:{
		name: 			'Craft nails',
		unlock_name: 	'Learn to make nails',
		tier: 			2,
		item_id: 		'nails',
		chance: 		20,
		reward_factor: 	12,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		1,
		},
		unlock_cost:{
			iron:		10,
		}
	},
	craft_horseshoes:{
		name: 			'Craft horseshoe',
		unlock_name: 	'Learn to make horseshoes',
		tier: 			3,
		item_id: 		'horseshoe',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		1,
		},
		unlock_cost:{
			iron:		10,
		}
	},
	horseshoe_charm:{
		name: 			'horseshoe charm',
		unlock_name: 	'Learn to craft horseshoe charms',
		tier: 			3,
		item_id: 		'lucky_charm',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			horseshoe:		1,
			lumber: 		0.5,
			nails: 			1,
		},
		unlock_cost:{
			horseshoe:		1,
			lumber: 		0.5,
			nails: 			1,
		}
	},
	craft_shield:{
		name: 			'Craft shield',
		unlock_name: 	'Learn to craft shields',
		tier: 			6,
		item_id: 		'shield',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			nails:		2,
			plank: 		10,
			steel: 		2,
		},
		unlock_cost:{
			nails:		2,
			plank: 		10,
			steel: 		2,
		}
	},
	craft_helmet:{
		name: 			'Craft helmet',
		unlock_name: 	'Learn to craft helmets',
		tier: 			4,
		item_id: 		'helmet',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			coal: 		1,
			iron:		1,
		},
		unlock_cost:{
			coal: 		1,
			iron:		1,
		}
	},
	craft_plate_armor:{
		name: 			'Carft plate armor',
		unlock_name: 	'Learn to craft armor',
		tier: 			6,
		item_id: 		'plate_armor',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			steel:		3,
			leather: 	2
		},
		unlock_cost:{
			steel:		3,
			leather: 	2
		}
	},
	
	craft_plow:{
		name: 			'Craft plow',
		unlock_name: 	'Learn to craft plows',
		tier: 			4,
		item_id: 		'plow',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		0.5,
			plank: 		0.5,
			lumber: 	0.5,
			nails: 		5
		},
		unlock_cost:{
			iron:		10,
			plank: 		10,
			lumber: 	10,
			nails: 		100
		}
	},
	stone_axe:{
		name: 			'Stone axe',
		unlock_name: 	'Learn to craft stone axes',
		tier: 			2,
		item_id: 		'axe',
		chance: 		20,
		skill: 			'smithing',
		action_name: 	'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			stone:		5,
			pole: 		1
		},
		unlock_cost:{
			stone:		5,
			pole: 		1
		}
	},
	craft_axe:{
		name: 			'Craft axe',
		unlock_name: 	'Learn to craft axes',
		tier: 			2,
		item_id: 		'axe',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		20,
			pole: 		10
		}
	},
	craft_pitchfork:{
		name: 			'Craft pitchfork',
		unlock_name: 	'Learn to craft pitchforks',
		tier: 			2,
		item_id: 		'pitchfork',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		20,
			pole: 		10
		}
	},
	craft_pickaxe:{
		name: 			'Craft pickaxe',
		unlock_name: 	'Learn to craft pickaxes',
		tier: 			2,
		item_id: 		'pickaxe',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			copper:		3,
			pole: 		1
		},
		unlock_cost:{
			copper:		3,
			pole: 		3
		}
	},
	craft_iron_pickaxe:{
		name: 			'Craft pickaxe',
		unlock_name: 	'Learn to craft iron pickaxes',
		tier: 			2,
		item_id: 		'pickaxe',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		20,
			pole: 		10
		}
	},
	craft_spear:{
		name: 			'Craft spear',
		unlock_name: 	'Learn to craft spears',
		tier: 			3,
		item_id: 		'spear',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		20,
			pole: 		10
		}
	},
	craft_sword:{
		name: 			'Craft sword',
		unlock_name: 	'Learn to craft swords',
		tier: 			6,
		item_id: 		'sword',
		chance: 		20,
		skill: 			'smithing',
		action_name: 		'smith',
		fail_text: 		'smith',
		working_name: 	'smithing',
		cost:{
			coal: 		2,
			lumber: 	1,
			steel: 		5
		},
		unlock_cost:{
			coal: 		2,
			lumber: 	1,
			steel: 		5
		}
	},
	craft_bone_spear:{
		name: 			'Craft bone spear',
		unlock_name: 	'Learn to craft bone spears',
		tier: 			4,
		item_id: 		'spear',
		chance: 		20,
		skill: 			'carpentry',
		action_name: 		'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			bone:		2,
			pole: 		1
		},
		unlock_cost:{
			bone:		2,
			pole: 		1
		}
	},
	
	milk_cows:{
		name: 			'Milk cows',
		unlock_name: 	'Start milking cows',
		tier: 			2,
		item_id: 		'milk',
		chance: 		20,
		skill: 			'husbandry',
		action_name: 		'milk',
		fail_text: 		'milk',
		working_name: 	'milking',
		upgrade_item: 		'cow',
		cost:{
			hay_bale: 	1,
		},
		unlock_cost:{
			cow:		5,
			hay_bale: 	5,
		}
	},
	churn_butter:{
		name: 			'Churn butter',
		unlock_name: 		'Start churning butter',
		tier: 			2,
		item_id: 		'butter',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'churn',
		fail_text: 		'churn',
		working_name: 	'churning',
		cost:{
			milk: 		4,
		},
		unlock_cost:{
			milk: 		40,
		}
	},
	make_salt_popcorn:{
		name: 			'Make salted popcorn',
		unlock_name: 		'Start making salted popcorn',
		tier: 			3,
		item_id: 		'popcorn',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'pop',
		fail_text: 		'pop',
		working_name: 	'popping',
		cost:{
			corn: 			1,
			butter: 		1,
			salt: 			1,
			firewood: 		1,
		},
		unlock_cost:{
			corn: 			10,
			butter: 		10,
			salt: 			10,
			firewood: 		10,
		}
	},
	make_sweet_popcorn:{
		name: 			'Make sweet popcorn',
		unlock_name: 		'Start making sweet popcorn',
		tier: 			3,
		item_id: 		'popcorn',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'pop',
		fail_text: 		'pop',
		working_name: 	'popping',
		cost:{
			corn: 			1,
			butter: 		1,
			sugar: 			1,
			firewood: 		1,
		},
		unlock_cost:{
			corn: 			10,
			butter: 		10,
			sugar: 			10,
			firewood: 		10,
		}
	},
	
	pink_milkshake:{
		name: 			'Pink milkshake',
		unlock_name: 		'Learn to make milkshakes',
		tier: 			4,
		item_id: 		'milkshake',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'shake',
		fail_text: 		'shake',
		working_name: 	'shaking',
		cost:{
			strawberry: 	1,
			milk: 			2,
			jar: 			1,
		},
		unlock_cost:{
			strawberry: 	10,
			milk: 			20,
			jar: 			10,
		}
	},
	make_cheese:{
		name: 			'Make cheese',
		unlock_name: 		'Build cheesery',
		tier: 			4,
		item_id: 		'cheese',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			milk: 		5,
			rennet: 	0.5,
			salt: 		0.5,
		},
		unlock_cost:{
			milk: 		5,
			rennet: 	0.5,
			salt: 		0.5,
		}
	},
	breed_sheep:{
		name: 			'Breed sheep',
		unlock_name: 	'Learn to breed sheep',
		tier: 			4,
		item_id: 		'sheep',
		bonus_loot:{
			manure: 	1,
		},
		chance: 		20,
		reward_factor: 	1,
		cost_type: 		'high',
		skill: 			'husbandry',
		action_name: 		'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		upgrade_item: 	'shepherd',
		cost:{
			hay_bale:		0.5,
		},
		unlock_cost:{
			sheep:			2,
			hay_bale: 		10,
			shepherd: 		5,
		}
	},
	shear_sheep:{
		name: 			'Shear sheep',
		unlock_name: 	'Start sheering sheep',
		tier: 			2,
		item_id: 		'wool',
		chance: 		20,
		skill: 			'husbandry',
		action_name: 	'shear',
		fail_text: 		'shear',
		working_name: 	'shearing',
		upgrade_item: 	'sheep',
		cost:{
			hay_bale: 	1,
		},
		unlock_cost:{
			sheep:		5,
			hay_bale: 	5,
		}
	},
	breed_cows:{
		name: 			'Breed cows',
		unlock_name: 	'Learn to breed cows',
		tier: 			4,
		item_id: 		'cow',
		bonus_loot:{
			manure: 	1,
		},
		chance: 		20,
		cost_type: 		'high',
		skill: 			'husbandry',
		action_name: 		'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		upgrade_item: 	'shepherd',
		cost:{
			hay_bale:		1,
		},
		unlock_cost:{
			cow:			2,
			hay_bale: 		20,
			shepherd: 		5,
		}
	},
	breed_horses:{
		name: 			'Breed horses',
		unlock_name: 	'Learn to breed horses',
		tier: 			4,
		item_id: 		'horse',
		chance: 		20,
		skill: 			'husbandry',
		action_name: 		'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		upgrade_item: 	'shepherd',
		cost:{
			carrot:		1,
			hay_bale:	1,
		},
		unlock_cost:{
			carrot:		25,
			horse:		2,
			hay_bale: 	50,
			mint: 		1,
			shepherd: 	10
		}
	},
	spin_wool:{
		name: 			'Spin twine',
		unlock_name: 	'Learn to spin twine',
		tier: 			2,
		item_id: 		'twine',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'knit',
		fail_text: 		'knit',
		working_name: 	'knitting',
		cost:{
			wool:		5,
		},
		unlock_cost:{
			wool: 		50,
		}
	},
	/*knit_cloth:{
		name: 			'Knit cloth',
		unlock_name: 	'Learn to knit cloth',
		tier: 			0,
		item_id: 		'cloth',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'knit',
		fail_text: 		'knit',
		working_name: 	'knitting',
		cost:{
			wool:		10,
		},
		unlock_cost:{
			wool: 		15,
		}
	},*/
	weave_cloth:{
		name: 			'weave cloth',
		unlock_name: 	'Learn to weave twine into cloth',
		tier: 			1,
		item_id: 		'cloth',
		chance: 		20,
		cost_type: 		'high',
		skill: 			'tailoring',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		cost:{
			twine:		4,
		},
		unlock_cost:{
			twine: 		40,
		}
	},
	weave_cotton_cloth:{
		name: 			'weave cotton cloth',
		unlock_name: 	'Learn to weave cotton into cloth',
		tier: 			4,
		item_id: 		'cloth',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		cost:{
			cotton:		20,
		},
		unlock_cost:{
			cotton: 	80,
		}
	},
	textile_mill:{
		name: 			'textile mill',
		unlock_name: 	'Build a textile mill',
		tier: 			6,
		item_id: 		'cloth',
		chance: 		20,
		cost_type: 		'high',
		skill: 			'tailoring',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		upgrade_item: 	'gatherer',
		cost:{
			twine:		1,
		},
		unlock_cost:{
			gatherer: 		1,
			lumber: 		1,
			pole: 			1,
			roofing: 		1,
			twine: 			5,
		}
	},
	craft_wooden_buttons:{
		name: 			'wooden buttons',
		unlock_name: 	'Learn to craft wooden buttons',
		tier: 			3,
		item_id: 		'button',
		reward_factor: 	5,
		chance: 		20,
		skill: 			'carpentry',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			lumber:		1,
		},
		unlock_cost:{
			lumber: 	10,
		}
	},
	craft_bone_buttons:{
		name: 			'bone buttons',
		unlock_name: 	'Learn to craft bone buttons',
		tier: 			3,
		item_id: 		'button',
		reward_factor: 	10,
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			bone:		1,
		},
		unlock_cost:{
			bone: 		10,
		}
	},
	bark_twine:{
		name: 			'bark twine',
		unlock_name: 	'Start winding bark',
		tier: 			0,
		item_id: 		'twine',
		chance: 		20,
		cost_type: 		'high',
		skill: 			'tailoring',
		action_name: 	'wind',
		fail_text: 		'wind',
		working_name: 	'winding',
		reward_factor: 	1,
		cost:{
			firewood:	5,
		},
		unlock_cost:{
			firewood: 	40,
		}
	},
	wind_twine:{
		name: 			'wind twine',
		unlock_name: 	'Start winding twine',
		tier: 			1,
		item_id: 		'twine',
		chance: 		20,
		cost_type: 		'high',
		skill: 			'tailoring',
		action_name: 	'wind',
		fail_text: 		'wind',
		working_name: 	'winding',
		reward_factor: 	1,
		cost:{
			flax:		5,
		},
		unlock_cost:{
			flax: 		40,
			stone: 		40
		}
	},
	weave_bandage:{
		name: 			'weave bandage',
		unlock_name: 	'Learn to weave bandages',
		tier: 			3,
		item_id: 		'bandage',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'weave',
		fail_text: 		'weave',
		working_name: 	'weaving',
		cost:{
			cloth:		1,
			parsley: 	5
		},
		unlock_cost:{
			cloth: 		60,
			parsley: 	60
		}
	},
	make_map:{
		name: 			'make maps',
		unlock_name: 	'Start making maps',
		tier: 			5,
		item_id: 		'map',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'make',
		fail_text: 		'make',
		working_name: 	'making',
		cost:{
			paper: 			5,
			ink: 			1,
		},
		unlock_cost:{
			paper: 			5,
			ink: 			1,
		}
	},
	bind_book:{
		name: 			'bind book',
		unlock_name: 	'Learn to bind books',
		tier: 			4,
		item_id: 		'book',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'bind',
		fail_text: 		'bind',
		working_name: 	'binding',
		cost:{
			paper: 			5,
			ink: 			0.5,
			leather:		0.5,
		},
		unlock_cost:{
			paper: 			100,
			ink: 			100,
			leather: 		10,
		}
	},
	knit_cap:{
		name: 			'knit cap',
		unlock_name: 	'Learn to knit caps',
		tier: 			0,
		item_id: 		'cap',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'knit',
		fail_text: 		'knit',
		working_name: 	'knitting',
		cost:{
			twine:		5,
		},
		unlock_cost:{
			twine: 		100,
		}
	},
	
	sew_scarf:{
		name: 			'sew scarf',
		unlock_name: 	'Learn to sew scarves',
		tier: 			3,
		item_id: 		'scarf',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'sew',
		fail_text: 		'sew',
		working_name: 	'sewing',
		cost:{
			blueberry: 	5,
			cloth:		1,
		},
		unlock_cost:{
			blueberry: 	50,
			cloth: 		10,
		}
	},
	sew_sack:{
		name: 			'sew sack',
		unlock_name: 	'Learn to sew sacks',
		tier: 			1,
		item_id: 		'sack',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'sew',
		fail_text: 		'sew',
		working_name: 	'sewing',
		cost:{
			cloth:		1,
		},
		unlock_cost:{
			cloth: 		10,
		}
	},
	sew_pillow:{
		name: 			'sew pillow',
		unlock_name: 	'Learn to sew pillows',
		tier: 			2,
		item_id: 		'pillow',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'sew',
		fail_text: 		'sew',
		working_name: 	'sewing',
		cost:{
			sack:		0.5,
			feather: 	5,
		},
		unlock_cost:{
			sack: 		20,
			feather: 	200
		}
	},
	sew_cloak:{
		name: 			'sew cloak',
		unlock_name: 	'Learn to sew cloaks',
		tier: 			3,
		item_id: 		'cloak',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'sew',
		fail_text: 		'sew',
		working_name: 	'sewing',
		cost:{
			cloth:		5,
		},
		unlock_cost:{
			cloth: 		90,
		}
	},
	sew_shirt:{
		name: 			'sew shirt',
		unlock_name: 	'Learn to sew shirts',
		tier: 			3,
		item_id: 		'shirt',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'sew',
		fail_text: 		'sew',
		working_name: 	'sewing',
		cost:{
			button: 	4,
			cloth:		2,
			firewood: 	5,
			water: 		5,
		},
		unlock_cost:{
			button: 	120,
			cloth: 		80,
			firewood: 	200,
			water: 		200,
		}
	},
	sew_jeans:{
		name: 			'sew jeans',
		unlock_name: 	'Learn to sew jeans',
		tier: 			3,
		item_id: 		'jeans',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'sew',
		fail_text: 		'sew',
		working_name: 	'sewing',
		cost:{
			button: 	2,
			cloth:		3,
			nails: 		5,
		},
		unlock_cost:{
			button: 	50,
			cloth:		90,
			nails: 		120,
		}
	},
	craft_tent:{
		name: 			'craft tent',
		unlock_name: 	'Learn to craft tents',
		tier: 			4,
		item_id: 		'tent',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			cloth:		5,
			lumber: 	2,
			pole: 		1,
			twine: 		5,
		},
		unlock_cost:{
			cloth:		200,
			lumber: 	50,
			pole: 		40,
			twine: 		200,
		}
	},
	tan_leather:{
		name: 			'tan leather',
		unlock_name: 	'Learn to tan leather',
		tier: 			1,
		item_id: 		'leather',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'tan',
		fail_text: 		'tan',
		working_name: 	'tanning',
		cost:{
			hide:		5,
		},
		unlock_cost:{
			hide: 		50,
		}
	},
	tannery:{
		name: 			'tannery',
		unlock_name: 	'Build a tannery',
		tier: 			6,
		item_id: 		'leather',
		chance: 		20,
		cost_type: 		'high',
		skill: 			'tailoring',
		action_name: 	'tan',
		fail_text: 		'tan',
		working_name: 	'tanning',
		upgrade_item: 	'gatherer',
		cost:{
			hide:		1,
		},
		unlock_cost:{
			gatherer: 		1,
			lumber: 		1,
			pole: 			1,
			roofing: 		1,
			hide: 			5,
		}
	},
	craft_belt:{
		name: 			'craft belt',
		unlock_name: 	'Learn to craft belt',
		tier: 			2,
		item_id: 		'belt',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			iron: 			1,
			leather:		1,
		},
		unlock_cost:{
			iron: 			10,
			leather:		10,
		}
	},
	craft_boots:{
		name: 			'craft boots',
		unlock_name: 	'Learn to craft boots',
		tier: 			1,
		item_id: 		'boots',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			leather:		5,
			hide: 			2,
		},
		unlock_cost:{
			leather:		50,
			hide: 			20, 
		}
	},
	craft_jacket:{
		name: 			'craft jacket',
		unlock_name: 	'Learn to craft jackets',
		tier: 			3,
		item_id: 		'jacket',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			leather:		5,
			twine: 			2,
		},
		unlock_cost:{
			leather:		100,
			twine: 			50, 
		}
	},
	
	craft_backpack:{
		name: 			'craft backpack',
		unlock_name: 	'Learn to craft backpacks',
		tier: 			4,
		item_id: 		'backpack',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			belt: 			4,
			cloth: 			4,
			leather:		4,
			twine: 			4,
		},
		unlock_cost:{
			belt: 			40,
			cloth: 			40,
			leather:		40,
			twine: 			40,
		}
	},
	craft_saddle:{
		name: 			'craft saddle',
		unlock_name: 	'Learn to craft saddles',
		tier: 			4,
		item_id: 		'saddle',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			belt: 			5,
			leather:		4,
			hide: 			2,
		},
		unlock_cost:{
			belt: 			80,
			leather:		40,
			hide: 			20,
		}
	},
	craft_quiver:{
		name: 			'craft quiver',
		unlock_name: 	'Learn to craft quivers',
		tier: 			4,
		item_id: 		'quiver',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			belt: 			0.5,
			leather:		3,
			hide: 			1,
			lumber: 		1,
			arrow: 			5
		},
		unlock_cost:{
			belt: 			10,
			leather:		50,
			hide: 			20,
			lumber: 		20,
			arrow: 			100
		}
	},
	craft_drum:{
		name: 			'craft drum',
		unlock_name: 	'Learn to craft drums',
		tier: 			4,
		item_id: 		'drum',
		chance: 		20,
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			leather:		4,
			barrel: 		1,
			twine: 			2,	
		},
		unlock_cost:{
			leather:		40,
			barrel: 		10,
			twine: 			20,	
		}
	},
	rabbits_foot_charm:{
		name: 			'craft rabbit charm',
		unlock_name: 	'Learn to craft rabbit charms',
		tier: 			2,
		item_id: 		'lucky_charm',
		chance: 		20,
		cost_type: 		'low',
		skill: 			'tailoring',
		action_name: 	'craft',
		fail_text: 		'craft',
		working_name: 	'crafting',
		cost:{
			rabbits_foot:	1,
			twine: 			2,
		},
		unlock_cost:{
			rabbits_foot:	10,
			twine: 			20,
		}
	},
	
	hunt_wild_sheep:{
		name: 			'Catch wild animals',
		unlock_name: 	'Look for some wild animals',
		tier: 			1,
		bonus_loot:{
			sheep: 		50,
			cow: 		20,
			wolf: 		10,
			horse: 		1,
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'hunting',
		action_name: 		'hunt',
		fail_text: 		'hunt',
		working_name: 	'hunting',
		upgrade_item: 	'gatherer',
		cost:{
			hay:		3,
		},
		unlock_cost:{
			hay:		30,
			gatherer: 	5,
		}
	},
	/*catch_wolf:{
		name: 			'Catch wolf',
		unlock_name: 	'Try to catch a wolf',
		tier: 			5,
		bonus_loot:{
			wolf: 		100,
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'hunting',
		action_name: 		'hunt',
		fail_text: 		'hunt',
		working_name: 	'hunting',
		unlock_cost:{
			peasant: 	5,
			net:		10,
			pole: 		10
		}
	},*/
	domesticate_wolf:{
		name: 			'Domesticate wolf',
		unlock_name: 	'Learn to domesticate wolves',
		tier: 			3,
		bonus_loot:{
			dog: 		100,
		},
		chance: 		20,
		reward_factor: 	1.2,
		skill: 			'training',
		action_name: 		'domesticate',
		fail_text: 		'domesticate',
		working_name: 	'domesticating',
		cost:{
			wolf: 		1,
			twine: 		1,
			rosemary: 	1
		},
		unlock_cost:{
			wolf: 		5,
			twine: 		10,
			rosemary: 	5
		}
	},
	breed_dogs:{
		name: 			'Breed dogs',
		unlock_name: 	'Learn to breed dogs',
		tier: 			4,
		item_id: 		'dog',
		chance: 		20,
		skill: 			'husbandry',
		action_name: 	'breed',
		fail_text: 		'breed',
		working_name: 	'breeding',
		cost:{
			beef: 		1,
			mutton: 	1,
		},
		unlock_cost:{
			beef: 		10,
			dog: 		1,
			mutton: 	10,
		}
	},
	hunt_wolf:{
		name: 			'Hunt wolf',
		unlock_name: 	'Hunt wolves for hides',
		tier: 			3,
		item_id: 		'hide',
		bonus_loot:{
			bone: 		25,
			wild_meat: 	10,
		},
		chance: 		20,
		reward_factor: 	3,
		cost_type: 		'low',
		skill: 			'hunting',
		action_name: 	'hunt',
		fail_text: 		'hunt',
		working_name: 	'hunting',
		upgrade_item: 	'hunter',
		cost:{
			arrow: 		2,
		},
		unlock_cost:{
			hunter: 		10,
			rabbits_foot: 	5,
		}
	},
	hunt_bear:{
		name: 			'Hunt bears',
		unlock_name: 	'Start tracking bears',
		tier: 			6,
		item_id: 		'hide',
		bonus_loot:{
			bone: 		25,
			wild_meat: 	10,
		},
		chance: 		20,
		reward_factor: 	3,
		cost_type: 		'low',
		skill: 			'hunting',
		action_name: 	'hunt',
		fail_text: 		'hunt',
		working_name: 	'hunting',
		upgrade_item: 	'veteran_hunter',
		/*cost:{
			arrow: 				1,
			spear: 				1,
		},*/
		unlock_cost:{
			arrow: 				10,
			spear: 				10,
			veteran_hunter: 	2,
		}
	},
	forest_expedition:{
		name: 			'Expedition',
		unlock_name: 	'Send out expeditions',
		tier: 			7,
		bonus_loot:{
			treasure: 	100,
		},
		chance: 		20,
		reward_factor: 	3,
		skill: 			'hunting',
		action_name: 	'hunt',
		working_name: 	'hunting',
		upgrade_item: 	'veteran_hunter',
		cost:{
			arrow: 				100,
			spear: 				10,
			tent: 				1,
		},
		unlock_cost:{
			arrow: 				100,
			spear: 				10,
			tent: 				1,
			veteran_hunter: 	1,
		}
	},
	/*hunt_wild_animals:{
		name: 			'Hunt wild animals',
		type: 			'combat',
		action_name: 	'attack',
		working_name: 	'hunting',
		possible_monsters:{
			0:{
				chance: 	10,
				monsters:{
				}
			},
			1:{
				chance: 	20,
				monsters:{
					m_hunter:{
						id: 	'm_hunter',
						min: 	1,
						max: 	1,
					}
				}
			},
			2:{
				chance: 	25,
				monsters:{
					m_robin: 	{
						id: 	'm_robin',
						min: 	1,
						max: 	1,
					},
				}
			},
			3:{
				chance: 	2,
				monsters:{
					m_brown_bear: 	{
						id: 	'm_brown_bear',
						min: 	1,
						max: 	1,
					},
				}
			},
			4:{
				chance: 	25,
				monsters:{
					m_roe: 	{
						id: 	'm_roe',
						min: 	1,
						max: 	1,
					},
				}
			},
			5:{
				chance: 	100,
				monsters:{
					m_squirrel: 	{
						id: 	'm_squirrel',
						min: 	3,
						max: 	8,
					},
					m_squirrel_2: 	{
						id: 	'm_squirrel',
						min: 	3,
						max: 	8,
					},
				}
			},
			
		},
		unlock_cost:{
			hunter:		1,
		}
	},*/
	hunt_birds:{
		name: 			'Hunt birds',
		unlock_name: 	'Assign a hunter to look for birds',
		tier: 			1,
		item_id: 		'feather',
		bonus_loot:{
			poultry: 	2,
			egg: 		2,
			hay: 		2,
		},
		chance: 		20,
		reward_factor: 		5,
		cost_type: 		'low',
		skill: 			'hunting',
		action_name: 		'hunt',
		fail_text: 		'hunt',
		working_name: 	'hunting',
		upgrade_item: 		'hunter',
		cost:{
			arrow:		2,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_rabbits:{
		name: 			'Hunt rabbits',
		unlock_name: 	'Assign a hunter to look for rabbits',
		tier: 			2,
		bonus_loot:{
			hide: 				100,
			wild_meat: 			10,
			rabbits_foot: 		10,
		},
		chance: 		20,
		skill: 			'hunting',
		action_name: 		'hunt',
		fail_text: 		'miss',
		working_name: 	'hunting',
		upgrade_item: 	'hunter',
		cost:{
			arrow:		2,
		},
		unlock_cost:{
			hunter:		5,
			hay: 		1,
			firewood: 	100
		}
	},
	hunt_boars:{
		name: 			'Hunt boars',
		unlock_name: 	'Assign a hunter to look for boars',
		tier: 			4,
		item_id: 		'pork',
		bonus_loot:{
			hide: 		50,
			bone: 		10,
			piglet: 	0.5,
		},
		chance: 		20,
		reward_factor: 	4,
		cost_type: 		'low',
		skill: 			'hunting',
		action_name: 		'hunt',
		fail_text: 		'hunt',
		working_name: 	'hunting',
		upgrade_item: 	'hunter',
		cost:{
			spear:		1,
		},
		unlock_cost:{
			hunter: 	20,
			spear: 		10,
		}
	},
	hunt_deer:{
		name: 			'Hunt deer',
		unlock_name: 	'Hunt deer for meat',
		tier: 			3,
		bonus_loot:{
			wild_meat: 	100,
			hide: 		50,
			bone: 		20,
		},
		chance: 		20,
		cost_type: 		'low',
		skill: 			'hunting',
		action_name: 		'hunt',
		fail_text: 		'miss',
		working_name: 	'hunting',
		upgrade_item: 	'hunter',
		cost:{
			arrow:		2,
		},
		unlock_cost:{
			hunter:		15,
			rabbits_foot: 	5,
		}
	},
	butcher_chickens:{
		name: 			'Butcher chickens',
		unlock_name: 	'Start butchering chickens',
		tier: 			2,
		item_id: 		'poultry',
		bonus_loot:{
			feather: 	100,
			bone: 		100
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'butchering',
		action_name: 	'butcher',
		fail_text: 		'butcher',
		working_name: 	'butchering',
		upgrade_item: 	'farmer',
		cost:{
			chicken: 	1,
		},
		unlock_cost:{
			chicken: 	20,
			farmer: 	2
		}
	},
	butcher_pig:{
		name: 			'Butcher pigs',
		unlock_name: 	'Start butchering pigs',
		tier: 			3,
		bonus_loot:{
			pork: 		300,
			hide: 		100,
			bone: 		50
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'butchering',
		action_name: 	'butcher',
		fail_text: 		'butcher',
		working_name: 	'butchering',
		upgrade_item: 	'farmer',
		cost:{
			pig: 	1,
		},
		unlock_cost:{
			pig: 		10,
			barley: 	5,
			corn: 		5,
			farmer: 	2
		}
	},
	butcher_sheep:{
		name: 			'Butcher sheep',
		unlock_name: 	'Start butchering sheep',
		tier: 			4,
		item_id: 		'mutton',
		bonus_loot:{
			wool: 		100,
			bone: 		4,
		},
		chance: 		20,
		reward_factor: 	4,
		skill: 			'butchering',
		action_name: 		'butcher',
		fail_text: 		'butcher',
		working_name: 	'butchering',
		upgrade_item: 	'shepherd',
		cost:{
			sheep: 		1,
		},
		unlock_cost:{
			sheep: 		10,
			shepherd: 	1,
		}
	},
	butcher_cow:{
		name: 			'Butcher cow',
		unlock_name: 	'Start butchering cows',
		tier: 			4,
		item_id: 		'beef',
		chance: 		20,
		bonus_loot:{
			hide: 		25,
			rennet: 	10,
			bone: 		10
		},
		reward_factor: 	4,
		skill: 			'butchering',
		action_name: 		'butcher',
		fail_text: 		'butcher',
		working_name: 	'butchering',
		upgrade_item: 	'shepherd',
		cost:{
			cow: 		1,
		},
		unlock_cost:{
			cow: 		10,
			shepherd: 	1,
		}
	},
	salt_beef:{
		name: 			'Salt beef',
		unlock_name: 	'Start salting beef',
		tier: 			4,
		item_id: 		'salted_meat',
		chance: 		25,
		skill: 			'cooking',
		action_name: 	'salt',
		fail_text: 		'fail',
		working_name: 	'salting',
		cost:{
			beef: 			1,
			salt: 			1,
		},
		unlock_cost:{
			beef: 			1,
			salt: 			1,
		}
	},
	salt_pork:{
		name: 			'Salt pork',
		unlock_name: 	'Start salting pork',
		tier: 			4,
		item_id: 		'salted_meat',
		chance: 		25,
		skill: 			'cooking',
		action_name: 	'salt',
		fail_text: 		'fail',
		working_name: 	'salting',
		cost:{
			pork: 			1,
			salt: 			1,
		},
		unlock_cost:{
			pork: 			1,
			salt: 			1,
		}
	},
	package_meat:{
		name: 			'Package meat',
		unlock_name: 	'Set up meat packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'pack',
		fail_text: 		'pack',
		working_name: 	'packaging',
		cost:{
			salted_meat: 	4,
			crate: 			1,
		},
		unlock_cost:{
			salted_meat:  	4,
			crate: 			1,
		}
	},
	package_water:{
		name: 			'Package water',
		unlock_name: 	'Set up water packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'pack',
		fail_text: 		'pack',
		working_name: 	'packaging',
		cost:{
			water: 			75,
			barrel: 		1,
		},
		unlock_cost:{
			water: 			75,
			barrel: 		1,
		}
	},
	package_apples:{
		name: 			'Package apples',
		unlock_name: 	'Set up apple packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'pack',
		fail_text: 		'pack',
		working_name: 	'packaging',
		cost:{
			apple: 			30,
			barrel: 		1,
		},
		unlock_cost:{
			apple: 			30,
			barrel: 		1,
		}
	},
	package_eggs:{
		name: 			'Package eggs',
		unlock_name: 	'Set up egg packaging',
		tier: 			4,
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'packaging',
		action_name: 		'pack',
		fail_text: 		'pack',
		working_name: 	'packaging',
		cost:{
			egg: 			15,
			firewood: 		15,
			water: 			15,
			barrel: 		1,
		},
		unlock_cost:{
			egg: 			15,
			firewood: 		15,
			water: 			15,
			barrel: 		1,
		}
	},
	/*cook_onion_rings:{
		name: 			'Cook onion rings',
		unlock_name: 	'Learn to cook onion rings',
		tier: 			3,
		item_id: 		'onion_rings',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			flour:  	1,
			onion: 		3,
			firewood: 	1
		},
		unlock_cost:{
			flour:  	5,
			onion: 		10,
			firewood: 	5
		}
	},*/
	cook_vegetable_soup:{
		name: 			'Cook vegetable soup',
		unlock_name: 	'Learn to cook vegetable soup',
		tier: 			3,
		item_id: 		'soup',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			carrot: 	1,
			firewood: 	1,
			leek:  		1,
			//onion: 		1,
			water: 		1,
		},
		unlock_cost:{
			carrot: 	1,
			firewood: 	1,
			leek:  		1,
			//onion: 		1,
			water: 		1,
		}
	},
	cook_tomato_soup:{
		name: 			'Cook tomato soup',
		unlock_name: 	'Learn to cook tomato soup',
		tier: 			4,
		item_id: 		'soup',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			firewood: 	1,
			meat_balls: 1,
			tomato:  	1,
		},
		unlock_cost:{
			firewood: 	1,
			meat_balls: 1,
			tomato:  	1,
		}
	},
	make_ketchup:{
		name: 			'Make ketchup',
		unlock_name: 	'Learn to make ketchup',
		tier: 			3,
		item_id: 		'ketchup',
		reward_factor: 	4,
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			tomato:  	4,
			sugar: 		1,
		},
		unlock_cost:{
			tomato:  	40,
			sugar: 		10,
		}
	},
	make_mayonnaise:{
		name: 			'Make mayonnaise',
		unlock_name: 	'Learn to make mayonnaise',
		tier: 			3,
		item_id: 		'mayonnaise',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			egg:  		1,
			oil: 		1,
		},
		unlock_cost:{
			egg:  		1,
			oil: 		1,
		}
	},
	
	cook_hamburger:{
		name: 			'Cook hamburger',
		unlock_name: 	'Learn to cook hamburgers',
		tier: 			4,
		item_id: 		'hamburger',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			bread:  		2,
			salad: 			1,
			ketchup: 		1,
			minced_meat: 	1,
			//onion: 			1,
			firewood: 		1
		},
		unlock_cost:{
			bread:  		10,
			salad: 			10,
			ketchup: 		10,
			minced_meat: 	10,
			//onion: 			10,
			firewood: 		50
		}
	},
	mince_pork:{
		name: 			'Mince pork',
		unlock_name: 	'Learn to mince pork',
		tier: 			2,
		item_id: 		'minced_meat',
		chance: 		20,
		skill: 			'cooking',
		action_name: 	'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			pork: 		1,
		},
		unlock_cost:{
			pork: 		1,
		}
	},
	mince_beef:{
		name: 			'Mince beef',
		unlock_name: 	'Learn to mince beef',
		tier: 			2,
		item_id: 		'minced_meat',
		chance: 		20,
		skill: 			'cooking',
		action_name: 	'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			beef: 		1,
		},
		unlock_cost:{
			beef: 		1,
		}
	},
	mince_mutton:{
		name: 			'Mince mutton',
		unlock_name: 	'Learn to mince mutton',
		tier: 			2,
		item_id: 		'minced_meat',
		chance: 		20,
		skill: 			'cooking',
		action_name: 	'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			mutton: 		1,
		},
		unlock_cost:{
			mutton: 		1,
		}
	},
	mince_poultry:{
		name: 			'Mince poultry',
		unlock_name: 	'Learn to mince poultry',
		tier: 			2,
		item_id: 		'minced_meat',
		chance: 		20,
		skill: 			'cooking',
		action_name: 	'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			poultry: 		1,
		},
		unlock_cost:{
			poultry: 		1,
		}
	},
	mince_wild_meat:{
		name: 			'Mince wild meat',
		unlock_name: 	'Learn to mince wild meat',
		tier: 			2,
		item_id: 		'minced_meat',
		chance: 		20,
		skill: 			'cooking',
		action_name: 	'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			wild_meat: 		1,
		},
		unlock_cost:{
			wild_meat: 		1,
		}
	},
	cook_meat_balls:{
		name: 			'Cook meat balls',
		unlock_name: 	'Learn to cook meat balls',
		tier: 			3,
		item_id: 		'meat_balls',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			minced_meat: 	2,
			firewood: 		2
		},
		unlock_cost:{
			minced_meat: 	10,
			firewood: 		10
		}
	},
	cook_sausage:{
		name: 			'Cook sausage',
		unlock_name: 	'Learn to cook sausages',
		tier: 			3,
		item_id: 		'sausage',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			minced_meat: 	2,
			firewood: 		2
		},
		unlock_cost:{
			minced_meat: 	10,
			firewood: 		10
		}
	},
	make_hot_dog:{
		name: 			'Make hot dog',
		unlock_name: 	'Learn to make hot dogs',
		tier: 			4,
		item_id: 		'hot_dog',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			bread:  	1,
			sausage: 	1,
			ketchup: 	1,
		},
		unlock_cost:{
			bread:  	10,
			sausage: 	10,
			ketchup: 	10,
		}
	},
	cook_steak:{
		name: 			'Cook steak',
		unlock_name: 	'Learn to cook steak',
		tier: 			4,
		item_id: 		'steak',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			beef: 		2,
			butter: 	1,
			firewood: 	1,
		},
		unlock_cost:{
			beef: 		2,
			butter: 	1,
			firewood: 	1,
		}
	},
	cook_steak_dinner:{
		name: 			'Cook steak dinner',
		unlock_name: 	'Learn to cook steak dinners',
		tier: 			5,
		item_id: 		'dinner',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			fries: 		1,
			salad: 		1,
			steak: 		1,
		},
		unlock_cost:{
			fries: 		1,
			salad: 		1,
			steak: 		1,
		}
	},
	cook_salmon_dinner:{
		name: 			'Cook salmon dinner',
		unlock_name: 	'Learn to cook salmon dinners',
		tier: 			6,
		item_id: 		'dinner',
		chance: 		20,
		skill: 			'cooking',
		action_name: 		'cook',
		fail_text: 		'cook',
		working_name: 	'cooking',
		cost:{
			fries: 		1,
			//pepper: 	1,
			rosemary: 	0.1,
			sage: 		0.1,
			salad: 		1,
			salmon: 	5,
		},
		unlock_cost:{
			fries: 		1,
			//pepper: 	1,
			rosemary: 	0.1,
			sage: 		0.1,
			salad: 		1,
			salmon: 	5,
		}
	},
	serve_breakfast:{
		name: 			'Serve breakfast',
		unlock_name: 	'Start serving breakfast',
		tier: 			6,
		item_id: 		'gold',
		chance: 		20,
		reward_factor: 	4,
		skill: 			'charm',
		action_name: 	'serve',
		fail_text: 		'serve',
		working_name: 	'serving',
		upgrade_item: 	'furniture',
		cost:{	
			//cutlery: 			1,
			breakfast: 			1,
			milk: 				1,
			plate: 				1,
		},
		unlock_cost:{
			//cutlery: 			1,
			breakfast: 			1,
			furniture: 			1,
			milk: 				1,
			plate: 				1,
		}
	},
	serve_three_course_dinner:{
		name: 			'Three course dinner',
		unlock_name: 	'Start serving three course dinners',
		tier: 			6,
		item_id: 		'gold',
		chance: 		20,
		reward_factor: 	4,
		skill: 			'charm',
		action_name: 	'serve',
		fail_text: 		'serve',
		working_name: 	'serving',
		upgrade_item: 	'furniture',
		cost:{	
			//cutlery: 			1,
			dinner: 			1,
			pie: 				1,
			plate: 				1,
			soup: 				1,
		},
		unlock_cost:{
			//cutlery: 			1,
			dinner: 			1,
			furniture: 			1,
			pie: 				1,
			plate: 				1,
			soup: 				1,
		}
	},
	fast_food:{
		name: 			'Fast food',
		unlock_name: 	'Start serving fast food',
		tier: 			6,
		item_id: 		'gold',
		chance: 		20,
		reward_factor: 	1.22,
		cost_type: 		'high',
		skill: 			'charm',
		action_name: 	'serve',
		fail_text: 		'serve',
		working_name: 	'serving',
		upgrade_item: 	'furniture',
		cost:{
			hamburger: 				1,
			fries: 					1,
			milkshake: 				1,
		},
		unlock_cost:{
			fries: 					1,
			furniture: 				1,
			hamburger: 				1,
			milkshake: 				1,
		}
	},
	serve_high_tea:{
		name: 			'High tea',
		unlock_name: 		'Start serving high tea',
		tier: 			6,
		item_id: 		'gold',
		chance: 		20,
		skill: 			'charm',
		action_name: 	'serve',
		fail_text: 		'serve',
		working_name: 	'serving',
		upgrade_item: 	'furniture',
		cost:{
			cucumber_sandwich: 		1,
			//cutlery: 				1,
			mint_tea: 				1,
			plate: 					1,
			salad: 					1,
		},
		unlock_cost:{
			cucumber_sandwich: 		1,
			//cutlery: 				1,
			furniture: 				1,
			mint_tea: 				1,
			plate: 					1,
			salad: 					1,
		}
	},
	clear_ground:{
		name: 			'Clear ground',
		unlock_name: 	'Start clearing ground',
		tier: 			0,
		bonus_loot:{
			sand: 		100,
			stone: 		50,
		},
		chance: 		20,
		cost_type: 		'high',
		skill: 			'gathering',
		action_name: 	'chisel',
		fail_text: 		'chisel',
		working_name: 	'chisseling',
		unlock_cost:{
		},
	},
	chisel_brick:{
		name: 			'Chisel brick',
		unlock_name: 	'Practice chisseling bricks',
		tier: 			1,
		bonus_loot:{
			brick: 	1,
		},
		chance: 		20,
		skill: 			'construction',
		action_name: 	'chisel',
		fail_text: 		'chisel',
		working_name: 	'chisseling',
		cost:{
			stone: 		5,
		},
		unlock_cost:{
			stone: 		100,
		},
	},
	mix_cement:{
		name: 			'Mix cement',
		unlock_name: 	'Start mixing cement',
		tier: 			1,
		bonus_loot:{
			cement: 	1,
		},
		skill: 			'construction',
		action_name: 	'mix',
		working_name: 	'mixing',
		cost:{
			chalk: 		1,
			sand: 		1,
		},
		unlock_cost:{
			chalk: 		1,
			sand: 		1,
		},
	},
	build_wall:{
		name: 			'Build wall',
		unlock_name: 	'Start building walls',
		tier: 			3,
		bonus_loot:{
			wall: 		1,
		},
		skill: 			'construction',
		action_name: 	'build',
		working_name: 	'building',
		cost:{
			brick: 		1,
			cement: 	1,
		},
		unlock_cost:{
			brick: 		1,
			cement: 	1,
		},
	},
	build_log_wall:{
		name: 			'Build log wall',
		unlock_name: 	'Start building log walls',
		tier: 			3,
		bonus_loot:{
			wall: 		1,
		},
		skill: 			'carpentry',
		action_name: 	'build',
		working_name: 	'building',
		cost:{
			lumber: 	1,
		},
		unlock_cost:{
			lumber: 	1,
		},
	},
	build_house:{
		name: 			'Build house',
		unlock_name: 	'Start building houses',
		tier: 			4,
		bonus_loot:{
			house: 		1,
		},
		skill: 			'construction',
		action_name: 	'build',
		working_name: 	'building',
		cost:{
			roofing: 	1,
			wall: 		4,
		},
		unlock_cost:{
			roofing: 	1,
			wall: 		4,
		},
	},
	attract_peasant:{
		name: 			'Attract peasants',
		unlock_name: 	'Start attracting peasants',
		tier: 			4,
		bonus_loot:{
			peasant: 	1,
		},
		skill: 			'charm',
		action_name: 	'attract',
		working_name: 	'attracting',
		upgrade_item: 	'house',
		unlock_cost:{
			house: 		1,
		},
	},
	tavern:{
		name: 			'Tavern',
		unlock_name: 	'Build a tavern',
		tier: 			5,
		bonus_loot:{
			gold: 			100,
		},
		chance: 		20,
		skill: 			'charm',
		action_name: 	'serve',
		working_name: 	'serving',
		upgrade_item: 	'house',
		cost:{
			beer: 		2,
			bread: 		4,
			wine: 		1,
		},
		unlock_cost:{
			beer: 			2,
			bread: 			4,
			house: 			1,
			peasant: 		1,
			wine: 			5,
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
		skill: 			'charm',
		action_name: 	'serve visitors',
		working_name: 	'serving visitors',
		upgrade_item: 	'furniture',
		unlock_cost:{
			house: 			5,
			furniture: 		10,
			peasant: 		1,
		}
	},
	town_mill:{
		name: 			'Town mill',
		unlock_name: 	'Build an town mill',
		tier: 			2,
		bonus_loot:{
			flour: 			100,
		},
		chance: 		20,
		skill: 			'milling',
		action_name: 	'mill',
		working_name: 	'milling',
		upgrade_item: 	'house',
		cost:{
			stone: 			1,
		},
		unlock_cost:{
			house: 			1,
			plank: 			100,
			stone: 			100,
		}
	},
	coal_plant:{
		name: 			'Coal plant',
		unlock_name: 	'Build coal power plant',
		tier: 			6,
		bonus_loot:{
			energy: 		100,
		},
		chance: 		20,
		skill: 			'smelting',
		action_name: 	'burn',
		working_name: 	'burning',
		upgrade_item: 	'steel',
		cost:{
			coal: 			1,
		},
		unlock_cost:{
			coal: 			1,
			steel: 			1,
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
		skill: 			'hunting',
		action_name: 	'patrol',
		working_name: 	'patrolling',
		upgrade_item: 	'guard',
		unlock_cost:{
			guard:  		5,
		}
	},
	train_thief:{
		name: 			'Train thief',
		unlock_name: 	'Set up a thieves guild',
		tier: 			7,
		item_id: 		'thief',
		chance: 		20,
		skill: 			'training',
		action_name: 	'train',
		working_name: 	'training',
		cost:{
			cloak: 				1,
			peasant: 			1,
			sinister_dagger: 	1,
		},
		unlock_cost:{
			cloak: 				1,
			house: 				5,
			peasant: 			1,
			sinister_dagger: 	1,
			thief: 				4,
		}
	},
	employ_thieves:{
		name: 			'Employ thieves',
		unlock_name: 	'Send out thieves',
		tier: 			7,
		bonus_loot:{
			silver_ring: 		100,
			gold_ring: 			50,
			supplies: 			25,
			treasure: 			1,
		},
		chance: 		25,
		skill: 			'gathering',
		action_name: 	'steal',
		working_name: 	'stealing',
		upgrade_item: 	'thief',
		cost:{
			thief: 				1,
		},
		unlock_cost:{
			thief:  		5,
		}
	},
}

available_actions = true_sort_object(available_actions, 'name', true);

var available_skills = {};

eachoa(available_actions, function(action_id, action_info){
	//console.log(action_info['name']);
	if(available_skills[action_info['skill']] == undefined && action_info['item_id'] != undefined)
	{
		available_skills[action_info['skill']] = {
			item_id: action_info['item_id']
		};
	}
	if(action_info['tier'] == undefined)
	{
		eachoa(action_info['unlock_cost'], function(cost_id, cost_amount){
			available_actions[action_id]['unlock_cost'][cost_id] = cost_amount * 25;
		});
	}
	if(action_info['working_name'] == undefined)
	{
		console.log(action_id + ' has no working name');
	}
});

