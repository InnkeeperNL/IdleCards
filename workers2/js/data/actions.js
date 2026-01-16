var available_actions = {
	catch_fish:{
		name: 				'catch fish',
		description: 		'Do some fishing',
		loot_description: 	'You may catch perch or trout.',
		type: 				'adventure',
		subtypes: 			['resources','fish'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{ // failure
				chance: 	20,
				loot:{
				}
			},
			1:{
				chance: 	40,
				loot:{
					trout: 		1,
				}
			},
			2:{
				chance: 	40,
				loot:{
					perch: 		1,
				}
			}
		}
	},
	explore_the_woods:{
		name: 				'explore the woods',
		image: 				'locations/forest-gd8f28ae40_640.jpg',
		description: 		'See what\'s there',
		loot_description: 	'You may find many things.',
		type: 				'adventure',
		subtypes: 			['resources'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			/*0:{ // failure
				chance: 	10,
				loot:{
				}
			},*/
			0:{
				chance: 	25,
				loot:{
					firewood: 		5,
				}
			},
			1:{
				chance: 	20,
				loot:{
					lumber: 		5,
				}
			},
			2:{
				chance: 	15,
				loot:{
					twine: 		5,
				}
			},
			3:{
				chance: 	15,
				loot:{
					apple: 			5,
				}
			},
			4:{
				chance: 	10,
				loot:{
					feather: 			5,
				}
			},
			5:{
				chance: 	5,
				loot:{
					water: 			5,
				}
			},
			6:{
				chance: 	5,
				loot:{
					blueberry: 			5,
				}
			},
			7:{
				chance: 	2.5,
				loot:{
					egg: 			5,
				}
			},
			8:{
				chance: 	2.5,
				loot:{
					parsley: 			5,
				}
			},
			
		}
	},
	look_for_herbs:{
		name: 				'look for herbs',
		image: 				'items/parsley-261039_640.jpg',
		description: 		'',
		loot_description: 	'You may find parley, mint, sage, rosemary or cinnamon.',
		type: 				'adventure',
		subtypes: 			['resources','exploring'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			/*0:{ // failure
				chance: 	10,
				loot:{
				}
			},*/
			0:{
				chance: 	40,
				loot:{
					parsley: 		5,
				}
			},
			1:{
				chance: 	20,
				loot:{
					mint: 			5,
				}
			},
			2:{
				chance: 	10,
				loot:{
					sage: 			5,
				}
			},
			3:{
				chance: 	10,
				loot:{
					rosemary: 		5,
				}
			},
			4:{
				chance: 	15,
				loot:{
					cinnamon: 		5,
				}
			},
			5:{
				chance: 	5,
				loot:{
					pepper: 		5,
				}
			},
			

		}
	},
	hunt_birds:{
		name: 				'hunt birds',
		image: 				'items/feather-g61b6affba_640.jpg',
		description: 		'Birds are small and hard to hit.',
		loot_description: 	'You can either shoot one and get bones, feathers and meat, or find a nest and get feathers, firewood and eggs.',
		type: 				'adventure',
		subtypes: 			['resources','hunting'],
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			arrow: 	1,
		},
		loot:{
		},
		bonus_loot:{
			0:{ // failure
				chance: 	20,
				loot:{
				}
			},
			1:{
				chance: 	60,
				loot:{
					meat: 			1,
					feather: 		5,
					bone: 			0.1,
				}
			},
			2:{
				chance: 	20,
				loot:{
					feather: 		5,
					firewood: 		10,
					egg: 			5,
				}
			},
		}
	},
	hunt_rabbits:{
		name: 				'hunt rabbits',
		image: 				'actions/rabbit-gf1a9c7f2f_640.jpg',
		description: 		'Set some traps',
		loot_description: 	'You can get bones, hides and meat.',
		type: 				'adventure',
		subtypes: 			['resources','hunting'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{ // failure
				chance: 	10,
				loot:{
				}
			},
			1:{
				chance: 	90,
				loot:{
					bone: 			0.1,
					hide: 			1,
					meat: 			1,
				}
			},
		}
	},
	fight_birds:{
		name: 				'bird',
		image: 				'actions/sparrow-5604220_640.jpg',
		level: 				1,
		type: 				'combat',
		subtypes: 			['hunting'],
		stats:{
			power: 		1,
			max_hp: 	5,
			evade: 		50,
		},
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			arrow: 	1,
		},
		loot:{
			egg: 			2,
			feather: 		10,
			meat: 			1,
		},
	},
	fight_rabbits:{
		name: 				'rabbit',
		image: 				'actions/rabbit-gf1a9c7f2f_640.jpg',
		level: 				1,
		type: 				'combat',
		subtypes: 			['hunting'],
		stats:{
			power: 		1,
			max_hp: 	5,
			evade: 		25,
			abilities:{
				quick_attack: 	100,
			}
		},
		locations_needed:{
		},
		cost:{
		},
		loot:{
			bone: 			0.5,
			hide: 			2,
			meat: 			2,
		},
	},
	fight_deer:{
		name: 				'deer',
		image: 				'actions/roe-deer-gd99ea69d6_640.jpg',
		level: 				2,
		type: 				'combat',
		subtypes: 			['hunting'],
		stats:{
			power: 		4,
			max_hp: 	40,
			abilities:{
				barrage: 	100,
			}
		},
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			arrow: 	5,
		},
		loot:{
			bone: 			2,
			hide: 			10,
			meat: 			10,
		},
	},
	fight_boar:{
		name: 				'boar',
		image: 				'actions/boar-5436416_640.jpg',
		level: 				3,
		type: 				'combat',
		subtypes: 			['hunting'],
		stats:{
			power: 		15,
			max_hp: 	30,
			abilities:{
				smash: 	100,
			}
		},
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			spear: 		1,
		},
		loot:{
			bone: 			2,
			hide: 			10,
			meat: 			30,
		},
	},
	fight_wolf:{
		name: 				'wolf',
		image: 				'actions/wolf-1336229_640.jpg',
		level: 				4,
		type: 				'combat',
		subtypes: 			['hunting'],
		stats:{
			power: 		20,
			max_hp: 	40,
			abilities:{
				attack: 	100,
			}
		},
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			arrow: 		5,
			bow: 		1,
		},
		loot:{
			bone: 			5,
			hide: 			50,
			meat: 			20,
		},
	},
	
	fight_pickpocket:{
		name: 				'pickpocket',
		image: 				'actions/knight-3668174_640.jpg',
		level: 				1,
		type: 				'combat',
		subtypes: 			['criminals'],
		stats:{
			power: 		3,
			max_hp: 	10,
			evade: 		30,
			abilities:{
				quick_attack: 	100,
			}
		},
		locations_needed:{
			armory: 		1,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	60,
				loot:{
					apple: 			5,
				}
			},
			1:{
				chance: 	30,
				loot:{
					bread: 			1,
				}
			},
			2:{
				chance: 	10,
				loot:{
					scarf: 		1,
				}
			},
		}
	},
	fight_bandit:{
		name: 				'bandit',
		image: 				'actions/man-6027218_640.jpg',
		level: 				2,
		type: 				'combat',
		subtypes: 			['criminals'],
		stats:{
			power: 		8,
			max_hp: 	20,
			evade: 		20,
			abilities:{
				attack: 		100,
				quick_attack: 	25,
			}
		},
		locations_needed:{
			armory: 		1,
			forest: 		3,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	50,
				loot:{
					scarf: 			1,
				}
			},
			1:{
				chance: 	10,
				loot:{
					shoes: 			1,
				}
			},
			2:{
				chance: 	20,
				loot:{
					knife: 			1,
				}
			},
			3:{
				chance: 	20,
				loot:{
					sword: 			1,
				}
			},
		}
	},
	fight_bandit_mage:{
		name: 				'bandit mage',
		image: 				'actions/witch-2501446_640.jpg',
		level: 				3,
		type: 				'combat',
		subtypes: 			['criminals'],
		stats:{
			power: 		12,
			max_hp: 	30,
			evade: 		20,
			abilities:{
				quick_attack: 	25,
				fire_bolt: 		100,
				heal: 			75,
			}
		},
		locations_needed:{
			armory: 		1,
			library: 		1,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	50,
				loot:{
					blueberry: 		5,
				}
			},
			1:{
				chance: 	10,
				loot:{
					shoes: 			1,
				}
			},
			2:{
				chance: 	10,
				loot:{
					cloak: 			1,
				}
			},
			3:{
				chance: 	10,
				loot:{
					book: 			1,
				}
			},
			4:{
				chance: 	10,
				loot:{
					healing_tome: 		1,
				}
			},
			5:{
				chance: 	10,
				loot:{
					coal: 			5,
				}
			},
		}
	},
	fight_skeleton:{
		name: 				'skeleton',
		image: 				'actions/skeleton-1522620_640.jpg',
		level: 				1,
		type: 				'combat',
		subtypes: 			['undead'],
		stats:{
			power: 		5,
			max_hp: 	10,
			evade: 		0,
			abilities:{
				attack: 	100,
			}
		},
		locations_needed:{
			graveyard: 		1,
		},
		cost:{
		},
		loot:{
			bone: 			5,
			skull: 			0.25,
		},
	},
	fight_zombie:{
		name: 				'zombie',
		image: 				'actions/graveyard-2936278_640.jpg',
		level: 				2,
		type: 				'combat',
		subtypes: 			['undead'],
		stats:{
			power: 		10,
			max_hp: 	25,
			evade: 		0,
			abilities:{
				smash: 		100,
			}
		},
		locations_needed:{
			graveyard: 		2,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	50,
				loot:{
					grave_moss: 	10,
				}
			},
			1:{
				chance: 	50,
				loot:{
					bone: 			10,
				}
			},
		}
	},
	fight_ghoul:{
		name: 				'ghoul',
		image: 				'actions/zombie-367517_640.jpg',
		level: 				3,
		type: 				'combat',
		subtypes: 			['undead'],
		stats:{
			power: 		15,
			max_hp: 	30,
			evade: 		0,
			abilities:{
				smash: 			100,
				barrage: 		25,
				regenerate: 	50,
			}
		},
		locations_needed:{
			graveyard: 		2,
		},
		cost:{
		},
		loot:{
		},
		bonus_loot:{
			0:{
				chance: 	40,
				loot:{
					grave_moss: 	10,
				}
			},
			1:{
				chance: 	30,
				loot:{
					bone: 			10,
				}
			},
			2:{
				chance: 	20,
				loot:{
					skull: 			2,
				}
			},
			3:{
				chance: 	10,
				loot:{
					curse: 			1,
				}
			},
		}
	},
	hunt_deer:{
		name: 				'hunt deer',
		image: 				'actions/roe-deer-gd99ea69d6_640.jpg',
		description: 		'Try to catch one',
		loot_description: 	'Deer are a good source of leather. You wil also get some bones and meat.',
		type: 				'adventure',
		subtypes: 			['resources','hunting'],
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			arrow: 	5,
		},
		loot:{
		},
		bonus_loot:{
			0:{ // failure
				chance: 	10,
				loot:{
				}
			},
			1:{
				chance: 	90,
				loot:{
					bone: 			1,
					hide: 			5,
					meat: 			2,
				}
			},
		}
	},
	catch_animals:{
		name: 				'catch wild animals',
		description: 		'Try to catch one',
		loot_description: 	'You can find all kinds of animals.',
		type: 				'adventure',
		subtypes: 			['animals','hunting'],
		locations_needed:{
			hunting_lodge: 		2,
		},
		cost:{
			net: 	1,
		},
		loot:{
		},
		bonus_loot:{
			0:{ // failure
				chance: 	10,
				loot:{
				}
			},
			1:{
				chance: 	25,
				loot:{
					chicken: 		1,
				}
			},
			2:{
				chance: 	15,
				loot:{
					cow: 		1,
				}
			},
			3:{
				chance: 	20,
				loot:{
					pig: 		1,
				}
			},
			4:{
				chance: 	20,
				loot:{
					sheep: 		1,
				}
			},
			5:{
				chance: 	5,
				loot:{
					horse: 		1,
				}
			},
		}
	},
	hatch_eggs:{
		name: 				'hatch eggs',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['chickens'],
		locations_needed:{
			chicken_coop: 		1,
		},
		cost:{
			egg: 				6,
		},
		loot:{
			chicken: 			1,
		}
	},
	tend_chickens:{
		name: 				'tend chickens',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['animals','chickens'],
		locations_needed:{
			chicken_coop: 		1,
		},
		cost:{
			chicken: 			2,
			wheat: 				5,
		},
		loot:{
			chicken: 			2,
			egg: 				10,
			feather: 			10,
		}
	},
	tend_sheep:{
		name: 				'tend sheep',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['animals','sheep'],
		locations_needed:{
		},
		cost:{
			sheep: 				2,
		},
		loot:{
			sheep: 				2,
			wool: 				12,
		}
	},
	butcher_chicken:{
		name: 				'butcher chicken',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['meat'],
		locations_needed:{
		},
		cost:{
			chicken: 			1,
		},
		loot:{
			bone: 				2,
			feather: 			8,
			meat: 				8,
		}
	},
	craft_charcoal:{
		name: 				'craft charcoal',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['coal'],
		locations_needed:{
			furnace: 			1,
		},
		cost:{
			firewood: 			10,
		},
		loot:{
			coal: 				5,
		}
	},
	smelt_glass:{
		name: 				'smelt glass',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['smelting','coal','sand'],
		locations_needed:{
			furnace: 			1,
		},
		cost:{
			coal: 				3,
			sand: 				10,
		},
		loot:{
			glass: 				5,
		}
	},
	craft_skull_jar:{
		name: 				'skull jar',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['bones','tools'],
		locations_needed:{
			coven: 				1,
		},
		cost:{
			skull: 				1,
		},
		loot:{
			jar: 				1,
		}
	},
	craft_wooden_jar:{
		name: 				'wooden jar',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','tools'],
		locations_needed:{
			workshop: 		3,
		},
		cost:{
			lumber: 			8,
		},
		loot:{
			jar: 				1,
		}
	},
	craft_glass_jar:{
		name: 				'glass jar',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['glass','tools'],
		locations_needed:{
			smithy: 		1,
		},
		cost:{
			glass: 				4,
		},
		loot:{
			jar: 				1,
		}
	},
	smelt_copper:{
		name: 				'smelt copper',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['smelting','copper','coal'],
		locations_needed:{
			furnace: 			2,
		},
		cost:{
			coal: 				3,
			copper_ore: 		5,
		},
		loot:{
			copper: 			5,
		}
	},
	copper_pot:{
		name: 				'copper pot',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['copper','coal'],
		locations_needed:{
			smithy: 			2,
		},
		cost:{
			coal: 				2,
			copper: 			3,
		},
		loot:{
			pot: 				1,
		}
	},
	smelt_iron:{
		name: 				'smelt iron',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['smelting','iron','coal'],
		locations_needed:{
			furnace: 			3,
		},
		cost:{
			coal: 				3,
			iron_ore: 			4,
		},
		loot:{
			iron: 				5,
		}
	},
	craft_nails:{
		name: 				'craft nails',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['iron','tools'],
		locations_needed:{
			smithy: 			3,
		},
		cost:{
			iron: 				1,
		},
		loot:{
			nail: 				45,
		}
	},
	
	craft_cane:{
		name: 				'craft cane',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','tools'],
		locations_needed:{
			workshop: 		2,
		},
		cost:{
			lumber: 			7,
		},
		loot:{
			cane: 				1,
		}
	},
	craft_pole:{
		name: 				'craft poles',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','poles'],
		locations_needed:{
		},
		cost:{
			lumber: 			5,
		},
		loot:{
			pole: 				5,
		}
	},
	saw_planks:{
		name: 				'saw planks',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','planks'],
		locations_needed:{
			sawmill: 			1,
		},
		cost:{
			lumber: 			8,
		},
		loot:{
			plank: 				4,
		}
	},
	craft_barrel:{
		name: 				'craft barrel',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['planks'],
		locations_needed:{
			sawmill: 			2,
		},
		cost:{
			plank: 				8,
		},
		loot:{
			barrel: 			1,
		}
	},
	craft_shield:{
		name: 				'craft shield',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['planks','weapons'],
		locations_needed:{
			armory: 			2,
			/*sawmill: 			2,*/
		},
		cost:{
			plank: 				12,
		},
		loot:{
			shield: 			1,
		}
	},
	craft_bed:{
		name: 				'craft bed',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['planks'],
		locations_needed:{
			sawmill: 			2,
		},
		cost:{
			cloth: 				5,
			pillow: 			2,
			plank: 				10,
		},
		loot:{
			bed: 				1,
		}
	},
	craft_cart:{
		name: 				'craft cart',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['poles','planks','nails'],
		locations_needed:{
			sawmill: 			2,
		},
		cost:{
			nail: 				100,
			plank: 				20,
			pole: 				5,
		},
		loot:{
			cart: 				1,
		}
	},
	package_apples:{
		name: 				'package apples',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		locations_needed:{
		},
		cost:{
			apple: 				100,
			barrel: 			1,
		},
		loot:{
			barrel_of_apples: 	1,
		}
	},
	package_perch:{
		name: 				'package perch',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['fish'],
		locations_needed:{
		},
		cost:{
			perch: 				70,
			barrel: 			1,
		},
		loot:{
			barrel_of_fish: 	1,
		}
	},
	package_trout:{
		name: 				'package trout',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['fish'],
		locations_needed:{
		},
		cost:{
			trout: 				35,
			barrel: 			1,
		},
		loot:{
			barrel_of_fish: 	1,
		}
	},
	craft_pitchfork:{
		name: 				'wooden pitchfork',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','tools'],
		locations_needed:{
			workshop: 		2,
		},
		cost:{
			lumber: 			10,
		},
		loot:{
			pitchfork: 			1,
		}
	},
	iron_pitchfork:{
		name: 				'iron pitchfork',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['poles','iron','tools'],
		locations_needed:{
			smithy: 		3,
		},
		cost:{
			pole: 			1,
			iron: 			2,
		},
		loot:{
			pitchfork: 			1,
		}
	},
	craft_arrow:{
		name: 				'craft arrows',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['weapons'],
		locations_needed:{
			archery_range: 		1,
		},
		cost:{
			feather: 			5,
			firewood: 			5,
		},
		loot:{
			arrow: 				5,
		}
	},
	craft_bow:{
		name: 				'craft bow',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['weapons','lumber'],
		locations_needed:{
			archery_range: 		1,
		},
		cost:{
			lumber: 			6,
			twine: 				4,
		},
		loot:{
			bow: 				1,
		}
	},
	weave_basket:{
		name: 				'weave basket',
		description: 		'Make a basket out of firewood.',
		loot_description: 	'A simple basket.',
		type: 				'crafting',
		subtypes: 			['firewood','tools'],
		locations_needed:{
			workshop: 		1,
		},
		cost:{
			firewood: 			10,
		},
		loot:{
			basket: 			1,
		}
	},
	reeds_basket:{
		name: 				'weave basket',
		description: 		'Make a basket out of reeds.',
		loot_description: 	'A simple basket.',
		type: 				'crafting',
		subtypes: 			['reeds','tools'],
		locations_needed:{
			workshop: 		1,
		},
		cost:{
			reeds: 				10,
		},
		loot:{
			basket: 			1,
		}
	},
	wooden_hammer:{
		name: 				'wooden hammer',
		description: 		'Used by carpenters.',
		loot_description: 	'A basic hammer used by carpenters.',
		type: 				'crafting',
		subtypes: 			['lumber','tools'],
		locations_needed:{
			workshop: 		3,
		},
		cost:{
			lumber: 			30,
		},
		loot:{
			hammer: 			1,
		}
	},
	iron_hammer:{
		name: 				'iron hammer',
		description: 		'Used by carpenters.',
		loot_description: 	'A basic hammer used by carpenters.',
		type: 				'crafting',
		subtypes: 			['poles','iron','tools'],
		locations_needed:{
			smithy: 		3,
		},
		cost:{
			pole: 			2,
			iron: 			6,
		},
		loot:{
			hammer: 			1,
		}
	},
	wooden_spear:{
		name: 				'wooden spear',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','weapons'],
		locations_needed:{
			armory: 			1,
		},
		cost:{
			lumber: 			10,
		},
		loot:{
			spear: 				1,
		}
	},
	iron_spear:{
		name: 				'wooden spear',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['poles','iron','weapons'],
		locations_needed:{
			armory: 			1,
		},
		cost:{
			pole: 				3,
			iron: 				1,
		},
		loot:{
			spear: 				1,
		}
	},
	stone_axe:{
		name: 				'stone axe',
		description: 		'Used by lumberjacks.',
		loot_description: 	'A basic axe.',
		type: 				'crafting',
		subtypes: 			['lumber','stone','tools'],
		locations_needed:{
			quarry: 			1,
			workshop: 			2,
		},
		cost:{
			lumber: 			4,
			stone: 				8,
		},
		loot:{
			axe: 				1,
		}
	},
	iron_axe:{
		name: 				'iron axe',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['poles','iron','tools'],
		locations_needed:{
			smithy: 		3,
		},
		cost:{
			pole: 				1,
			iron: 				2,
		},
		loot:{
			axe: 			1,
		}
	},
	stone_pickaxe:{
		name: 				'stone pickaxe',
		description: 		'Used by miners.',
		loot_description: 	'A basic pickaxe.',
		type: 				'crafting',
		subtypes: 			['lumber','stone','tools'],
		locations_needed:{
			quarry: 			1,
			workshop: 			2,
		},
		cost:{
			lumber: 			4,
			stone: 				8,
		},
		loot:{
			pickaxe: 			1,
		}
	},
	iron_pickaxe:{
		name: 				'iron pickaxe',
		description: 		'Used by miners.',
		loot_description: 	'An iron pickaxe.',
		type: 				'crafting',
		subtypes: 			['poles','iron','tools'],
		locations_needed:{
			smithy: 		3,
		},
		cost:{
			pole: 				1,
			iron: 				2,
		},
		loot:{
			pickaxe: 			1,
		}
	},
	stone_knife:{
		name: 				'stone knife',
		description: 		'.',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['firewood','stone','tools','weapons'],
		locations_needed:{
			workshop: 			1,
		},
		cost:{
			firewood: 			10,
			stone: 				6,
		},
		loot:{
			knife: 				1,
		}
	},
	iron_knife:{
		name: 				'iron knife',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['iron','tools','weapons'],
		locations_needed:{
			smithy: 		3,
		},
		cost:{
			iron: 				2,
		},
		loot:{
			knife: 			1,
		}
	},
	stone_sword:{
		name: 				'iron sword',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['stone','lumber','weapons'],
		locations_needed:{
			armory: 		1,
			workshop: 		2,
		},
		cost:{
			stone: 			20,
			lumber: 		5,
		},
		loot:{
			sword: 			1,
		}
	},
	iron_sword:{
		name: 				'iron sword',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','iron','weapons'],
		locations_needed:{
			armory: 		1,
			smithy: 		3,
		},
		cost:{
			iron: 			5,
			lumber: 		1,
		},
		loot:{
			sword: 			1,
		}
	},
	craft_paper:{
		name: 				'craft paper',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','paper'],
		locations_needed:{
			library: 		1,
		},
		cost:{
			lumber: 		5,
			water: 			5,
		},
		loot:{
			paper: 			5,
		}
	},
	craft_parchment:{
		name: 				'craft parchment',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['hide','paper'],
		locations_needed:{
			library: 		1,
		},
		cost:{
			hide: 			5,
		},
		loot:{
			paper: 			5,
		}
	},
	make_ink_quill:{
		name: 				'make ink & quill',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['ink'],
		locations_needed:{
			library: 		1,
		},
		cost:{
			firewood: 		5,
			feather: 		1,
			jar: 			1,
			water: 			5,
		},
		loot:{
			ink_quill: 		1,
		}
	},
	
	make_scroll:{
		name: 				'make scroll',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['paper'],
		locations_needed:{
			library: 		2,
		},
		cost:{
			ink_quill: 		1,
			paper: 			5,
		},
		loot:{
			scroll: 			1,
		}
	},
	make_book:{
		name: 				'make book',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['paper'],
		locations_needed:{
			library: 		2,
		},
		cost:{
			ink_quill: 		1,
			leather: 		2,
			paper: 			20,
		},
		loot:{
			book: 			1,
		}
	},
	mill_flour:{
		name: 				'mill flour',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['milling'],
		locations_needed:{
			mill: 			1,
		},
		cost:{
			wheat: 			3,
		},
		loot:{
			flour: 			5,
		}
	},
	refine_sugar:{
		name: 				'refine sugar',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['milling'],
		locations_needed:{
			mill: 			2,
		},
		cost:{
			sugarcane: 		4,
		},
		loot:{
			sugar: 			5,
		}
	},
	make_dough:{
		name: 				'make dough',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough','flour'],
		locations_needed:{
			bakery: 		1,
		},
		cost:{
			flour: 			5,
			water: 			5,
		},
		loot:{
			dough: 			5,
		}
	},
	
	bake_bread:{
		name: 				'bake bread',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough'],
		locations_needed:{
			bakery: 		1,
		},
		cost:{
			firewood: 		4,
			dough: 			4,
		},
		loot:{
			bread: 			1,
		}
	},
	bake_pretzel:{
		name: 				'bake pretzel',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough'],
		locations_needed:{
			bakery: 		1,
		},
		cost:{
			firewood: 		4,
			dough: 			5,
			salt: 			2,
		},
		loot:{
			pretzel: 		1,
		}
	},
	
	bake_cookie:{
		name: 				'bake cookie',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough','eggs'],
		locations_needed:{
			bakery: 		2,
		},
		cost:{
			firewood: 		1,
			dough: 			1,
			egg: 			1,
			sugar: 			1,
		},
		loot:{
			cookie: 		1,
		}
	},
	bake_blueberry_muffin:{
		name: 				'bake blueberry muffin',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough','eggs'],
		locations_needed:{
			bakery: 		2,
		},
		cost:{
			blueberry: 		5,
			firewood: 		2,
			dough: 			4,
			egg: 			1,
			sugar: 			1,
		},
		loot:{
			blueberry_muffin: 		1,
		}
	},
	bake_meat_pie:{
		name: 				'bake meat pie',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough','pies'],
		locations_needed:{
			bakery: 		3,
		},
		cost:{
			dough: 			12,
			egg: 			2,
			firewood: 		10,
			meat: 			20,
			onion: 			5,
			pepper: 		2,
			potato: 		5,
			sage: 			2,
			water: 			2,
		},
		loot:{
			meat_pie: 		1,
		}
	},
	make_candy_apples:{
		name: 				'candy apple',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['apples','sugar'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			apple: 			1,
			sugar: 			1,
			firewood: 		1,
		},
		loot:{
			candy_apple: 		1,
		}
	},
	make_apple_sauce:{
		name: 				'apple sauce',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['apples'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			apple: 			20,
		},
		loot:{
			apple_sauce: 		1,
		}
	},
	make_salad:{
		name: 				'make salad',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['salad','tomatoes'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			cucumber: 		4,
			lettuce: 		5,
			tomato: 		3,
		},
		loot:{
			salad: 			1,
		}
	},
	make_ketchup:{
		name: 				'make ketchup',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['sugar','tomatoes'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			tomato: 		5,
			sugar: 			1,
		},
		loot:{
			ketchup: 		1,
		}
	},
	
	bake_apple_pie:{
		name: 				'apple pie',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dough','pies'],
		locations_needed:{
			bakery: 		3,
		},
		cost:{
			apple: 			50,
			cinnamon: 		5,
			egg: 			5,
			firewood: 		10,
			dough: 			20,
			sugar: 			5,
		},
		loot:{
			apple_pie: 			1,
		}
	},
	roast_meat:{
		name: 				'roast meat',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['meat','firewood'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			firewood: 		2,
			meat: 			2,
		},
		loot:{
			roasted_meat: 		1,
		}
	},
	make_sausage:{
		name: 				'make sausage',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['meat','firewood'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			firewood: 		5,
			meat: 			10,
		},
		loot:{
			sausage: 		1,
		}
	},
	make_burger:{
		name: 				'make burger',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['meat','firewood','ketchup','salad'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			bread: 			1,
			firewood: 		5,
			ketchup: 		1,
			meat: 			20,
			salad: 			1,
		},
		loot:{
			burger: 		1,
		}
	},
	make_hot_dog:{
		name: 				'make hot dog',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['meat','firewood','ketchup'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			bread: 			1,
			ketchup: 		1,
			sausage: 		1,
		},
		loot:{
			hot_dog: 		1,
		}
	},
	
	bake_fries:{
		name: 				'bake fries',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['potatoes','firewood','salt'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			firewood: 		5,
			potato: 		5,
			salt: 			2,
		},
		loot:{
			fries: 		1,
		}
	},
	boil_eggs:{
		name: 				'boil eggs',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['eggs','firewood'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			firewood: 		5,
			egg: 			10,
			water: 			10,
		},
		loot:{
			boiled_egg: 		10,
		}
	},
	make_omelette:{
		name: 				'make omelette',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['eggs','firewood','salt'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			firewood: 		5,
			egg: 			4,
			parsley: 		2,
			salt: 			1,
		},
		loot:{
			omelette: 		1,
		}
	},
	
	potato_stew:{
		name: 				'potato stew',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['meat','firewood','potatoes'],
		locations_needed:{
			kitchen: 		1,
		},
		cost:{
			firewood: 		10,
			meat: 			10,
			onion: 			5,
			pot: 			1,
			potato: 		10,
			rosemary: 		2,
		},
		loot:{
			stew: 		1,
		}
	},
	
	flax_twine:{
		name: 				'flax twine',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['milling'],
		locations_needed:{
			mill: 			2,
		},
		cost:{
			flax: 			5,
		},
		loot:{
			twine: 			5,
		}
	},
	reed_twine:{
		name: 				'reeds twine',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['twine','reeds'],
		locations_needed:{
			workshop: 		1,
		},
		cost:{
			reeds: 			10,
		},
		loot:{
			twine: 			5,
		}
	},
	craft_net:{
		name: 				'craft net',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['twine','tools'],
		locations_needed:{
		},
		cost:{
			twine: 			10,
		},
		loot:{
			net: 			1,
		}
	},
	
	craft_rope:{
		name: 				'craft rope',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['twine','survival'],
		locations_needed:{
		},
		cost:{
			twine: 			5,
		},
		loot:{
			rope: 			1,
		}
	},
	weave_cloth:{
		name: 				'weave cloth',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['twine','cloth'],
		locations_needed:{
		},
		cost:{
			twine: 			5,
		},
		loot:{
			cloth: 			5,
		}
	},
	wool_cloth:{
		name: 				'wool cloth',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['wool','cloth'],
		locations_needed:{
		},
		cost:{
			wool: 			5,
		},
		loot:{
			cloth: 			5,
		}
	},
	
	cloth_cap:{
		name: 				'cloth cap',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['twine','clothing'],
		locations_needed:{
			sewing_room: 	1,
		},
		cost:{
			twine: 			2,
		},
		loot:{
			cap: 			1,
		}
	},
	wool_cap:{
		name: 				'wool cap',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['wool','clothing'],
		locations_needed:{
			sewing_room: 	1,
		},
		cost:{
			wool: 			2,
		},
		loot:{
			cap: 			1,
		}
	},
	cloth_bandage:{
		name: 				'cloth bandage',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['twine','healing'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			parsley: 		10,
			cloth: 			5,
		},
		loot:{
			bandage: 		1,
		}
	},
	cloth_pillow:{
		name: 				'cloth pillow',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','luxury'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			cloth: 			8,
			feather: 		40,
		},
		loot:{
			pillow: 			1,
		}
	},
	
	wooden_button:{
		name: 				'wooden button',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','buttons'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			lumber: 		1,
		},
		loot:{
			button: 		15,
		}
	},
	cloth_scarf:{
		name: 				'cloth scarf',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','clothing'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			cloth: 			4,
			blueberry: 		4,
		},
		loot:{
			scarf: 			1,
		}
	},
	cloth_cloak:{
		name: 				'cloth cloak',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','clothing'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			cloth: 			15,
		},
		loot:{
			cloak: 			1,
		}
	},
	cloth_shirt:{
		name: 				'cloth shirt',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','clothing','buttons'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			button: 		20,
			cloth: 			30,
			firewood: 		10,
			water: 			10,
		},
		loot:{
			shirt: 			1,
		}
	},
	craft_jeans:{
		name: 				'craft jeans',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','clothing','buttons'],
		locations_needed:{
			sewing_room: 	2,
		},
		cost:{
			button: 		4,
			cloth: 			10,
			iron: 			2,
		},
		loot:{
			jeans: 			1,
		}
	},
	cloth_backpack:{
		name: 				'cloth backpack',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','survival'],
		locations_needed:{
		},
		cost:{
			belt: 			4,
			cloth: 			10,
			twine: 			4,
		},
		loot:{
			backpack: 		1,
		}
	},
	craft_tent:{
		name: 				'craft tent',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cloth','survival'],
		locations_needed:{
			sewing_room: 	1,
		},
		cost:{	
			cloth: 			50,
			pole: 			10,
			rope: 			5,
		},
		loot:{
			tent: 			1,
		}
	},
	tan_leather:{
		name: 				'tan leather',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['hide','leather'],
		locations_needed:{
		},
		cost:{
			firewood: 		5,
			hide: 			8,
		},
		loot:{
			leather: 		10,
		}
	},
	leather_shoes:{
		name: 				'leather shoes',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['clothes','leather'],
		locations_needed:{
		},
		cost:{
			leather: 		4,
			twine: 			2,
		},
		loot:{
			shoes: 			1,
		}
	},
	leather_boots:{
		name: 				'leather boots',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['clothes','leather'],
		locations_needed:{
		},
		cost:{
			leather: 		10,
			lumber: 		4,
			twine: 			4,
		},
		loot:{
			boots: 			1,
		}
	},
	leather_backpack:{
		name: 				'leather backpack',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['leather'],
		locations_needed:{
		},
		cost:{
			belt: 			4,
			leather: 		10,
			twine: 			4,
		},
		loot:{
			backpack: 		1,
		}
	},
	leather_jacket:{
		name: 				'leather jacket',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['clothes','leather'],
		locations_needed:{
		},
		cost:{
			leather: 		20,
			twine: 			5,
		},
		loot:{
			jacket: 		1,
		}
	},
	leather_belt:{
		name: 				'leather belt',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['clothes','leather','iron'],
		locations_needed:{
		},
		cost:{
			iron: 			1,
			leather: 		2,
		},
		loot:{
			belt: 			1,
		}
	},
	leather_saddle:{
		name: 				'leather saddle',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['leather','iron'],
		locations_needed:{
		},
		cost:{
			belt: 			6,
			hide: 			15,
			leather: 		30,
		},
		loot:{
			saddle: 		1,
		}
	},
	craft_remedy:{
		name: 				'craft remedy',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['healing'],
		locations_needed:{
		},
		cost:{
			parsley: 		25,
			mint: 			5,
		},
		loot:{
			remedy: 		1,
		}
	},
	craft_health_potion:{
		name: 				'craft health potion',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['healing'],
		locations_needed:{
		},
		cost:{
			firewood: 			10,
			jar: 				1,
			remedy: 			2,
			water: 				10,
		},
		loot:{
			health_potion: 		1,
		}
	},
	craft_healing_tome:{
		name: 				'craft healing tome',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['healing'],
		locations_needed:{
		},
		cost:{
			book: 				1,
			remedy: 			5,
		},
		loot:{
			healing_tome: 		1,
		}
	},
	
	craft_voodoo_doll:{
		name: 				'craft voodoo doll',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dark magic','bones'],
		locations_needed:{
			coven: 			1,
		},
		cost:{
			bone: 			5,
			firewood: 		4,
			twine: 			1,
		},
		loot:{
			voodoo_doll: 	1,
		}
	},
	brew_poison:{
		name: 				'brew poison',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dark magic','bones','grave moss'],
		locations_needed:{
			coven: 			2,
		},
		cost:{
			bone: 			2,
			firewood: 		10,
			grave_moss: 	10,
			jar: 			1,
			water: 			10,
		},
		loot:{
			poison: 		1,
		}
	},
	brew_love_potion:{
		name: 				'brew love potion',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dark magic'],
		locations_needed:{
		},
		cost:{
			firewood: 		10,
			jar: 			1,
			poison: 		2,
			rosemary: 		5,
			sage: 			10,
			water: 			10,
		},
		loot:{
			love_potion: 		1,
		}
	},
	craft_curse:{
		name: 				'craft curse',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['dark magic','bones','grave moss'],
		locations_needed:{
			coven: 			1,
		},
		cost:{
			bone: 			5,
			grave_moss: 	10,
			scroll: 		1,
			voodoo_doll: 	1,
		},
		loot:{
			curse: 	1,
		}
	},
	bake_brick:{
		name: 				'bake brick',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['clay','bricks'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			clay: 			5,
			firewood: 		10,
		},
		loot:{
			brick: 			10,
		}
	},
	chissle_brick:{
		name: 				'chissle brick',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['stone','bricks'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			stone: 			6,
		},
		loot:{
			brick: 			10,
		}
	},
	make_cement:{
		name: 				'make cement',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cement'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			clay: 			3,
			limestone: 		3,
			sand: 			3,
			water: 			3,
		},
		loot:{
			cement: 		10,
		}
	},
	build_wall:{
		name: 				'build wall',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cement','bricks'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			brick: 			20,
			cement: 		10,
		},
		loot:{
			wall: 			1,
		}
	},
	clay_roofing:{
		name: 				'clay roofing',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['clay'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			clay: 			10,
			firewood: 		10,
		},
		loot:{
			roofing: 		1,
		}
	},
	wooden_roofing:{
		name: 				'wooden roofing',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','nails'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			lumber: 	6,
			nail: 		10,
		},
		loot:{
			roofing: 		1,
		}
	},
	craft_door:{
		name: 				'craft door',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['planks','nails'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			plank: 			5,
			nail: 			10,
		},
		loot:{
			door: 		1,
		}
	},
	craft_window:{
		name: 				'craft window',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['lumber','nails'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			glass: 			5,
			lumber: 		5,
			nail: 			10,
		},
		loot:{
			windowa: 		1,
		}
	},
	build_house:{
		name: 				'build house',
		description: 		'',
		loot_description: 	'',
		type: 				'crafting',
		subtypes: 			['cement','bricks'],
		locations_needed:{
			construction_yard: 		1,
		},
		cost:{
			door: 			1,
			nail: 			50,
			plank: 			20,
			roofing: 		4,
			wall: 			4,
			windowa: 		4,
		},
		loot:{
			house: 			1,
		}
	},
	collect_bones:{
		name: 				'collect bones',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','bones'],
		locations_needed:{
			coven: 			1,
		},
		cost:{
		},
		loot:{
			bone: 		5,
		}
	},
	gather_cinnamon:{
		name: 				'gather cinnamon',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 			3,
		},
		cost:{
		},
		loot:{
			cinnamon: 		1,
		}
	},
	gather_water_fast:{
		name: 				'gather water',
		description: 		'Get some water.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
			water: 			2,
		}
	},
	gather_water:{
		name: 				'gather water',
		description: 		'Get some water.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
			water: 			10,
		}
	},
	gather_firewood_fast:{
		name: 				'gather firewood',
		description: 		'Get some firewood.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','firewood'],
		locations_needed:{
			forest: 			1,
		},
		cost:{
		},
		loot:{
			firewood: 			2,
		}
	},
	gather_firewood:{
		name: 				'gather firewood',
		description: 		'Get some firewood.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','firewood'],
		locations_needed:{
			forest: 			1,
		},
		cost:{
		},
		loot:{
			firewood: 			10,
		}
	},
	gather_reeds:{
		name: 				'gather reeds',
		description: 		'Get some reeds.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','reeds'],
		locations_needed:{
			river: 			1,
		},
		cost:{
		},
		loot:{
			reeds: 			10,
		}
	},
	gather_clay:{
		name: 				'gather clay',
		description: 		'Get some clay.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','clay'],
		locations_needed:{
			river: 			1,
		},
		cost:{
		},
		loot:{
			clay: 			5,
		}
	},
	gather_lumber:{
		name: 				'gather lumber',
		description: 		'Get some lumber.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','lumber'],
		locations_needed:{
			forest: 			2,
		},
		cost:{
		},
		loot:{
			lumber: 			5,
		}
	},
	gather_apples:{
		name: 				'gather apples',
		description: 		'Get some apples.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','apples'],
		locations_needed:{
			forest: 			2,
		},
		cost:{
		},
		loot:{
			apple: 			5,
		}
	},
	gather_blueberries:{
		name: 				'gather blueberries',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			forest: 			3,
		},
		cost:{
		},
		loot:{
			blueberry: 			5,
		}
	},
	
	gather_sand:{
		name: 				'gather sand',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			quarry: 			2,
		},
		cost:{
		},
		loot:{
			sand: 			10,
		}
	},
	gather_twine:{
		name: 				'gather twine',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','twine'],
		locations_needed:{
		},
		cost:{
		},
		loot:{
			twine: 			5,
		}
	},
	gather_stone:{
		name: 				'gather stone',
		description: 		'Get some stone.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','stone'],
		locations_needed:{
			quarry: 			1,
		},
		cost:{
		},
		loot:{
			stone: 			5,
		}
	},
	/*gather_pebbles:{
		name: 				'gather pebbles',
		description: 		'Get some pebbles.',
		loot_description: 	'',
		type: 				'resource',
		locations_needed:{
			quarry: 			3,
		},
		cost:{
		},
		loot:{
			pebbles: 			10,
		}
	},*/
	mine_salt:{
		name: 				'mine salt',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','salt'],
		locations_needed:{
			quarry: 			3,
		},
		cost:{
		},
		loot:{
			salt: 				2,
		}
	},
	mine_limestone:{
		name: 				'mine limestone',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','limestone'],
		locations_needed:{
			quarry: 			1,
		},
		cost:{
		},
		loot:{
			limestone: 			5,
		}
	},
	mine_copper:{
		name: 				'mine copper',
		description: 		'Get some copper.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','copper'],
		locations_needed:{
			quarry: 			3,
		},
		cost:{
		},
		loot:{
			copper_ore: 		5,
		}
	},
	mine_iron:{
		name: 				'mine iron',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','iron'],
		locations_needed:{
			quarry: 			4,
		},
		cost:{
		},
		loot:{
			iron_ore: 			5,
		}
	},
	mine_coal:{
		name: 				'mine coal',
		description: 		'Get some coal.',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','coal'],
		locations_needed:{
			quarry: 			2,
		},
		cost:{
		},
		loot:{
			coal: 			5,
		}
	},
	
	grow_lettuce:{
		name: 				'grow lettuce',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			farm: 			4,
		},
		cost:{
		},
		loot:{
			lettuce: 		5,
		}
	},
	grow_cucumber:{
		name: 				'grow cucumber',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			farm: 			4,
		},
		cost:{
		},
		loot:{
			cucumber: 		5,
		}
	},
	grow_tomato:{
		name: 				'grow tomato',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			farm: 			4,
		},
		cost:{
		},
		loot:{
			tomato: 		5,
		}
	},
	grow_wheat:{
		name: 				'grow wheat',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','wheat'],
		locations_needed:{
			farm: 			1,
		},
		cost:{
		},
		loot:{
			wheat: 			5,
		}
	},
	grow_sugarcane:{
		name: 				'grow sugarcane',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','sugar'],
		locations_needed:{
			farm: 			2,
		},
		cost:{
		},
		loot:{
			sugarcane: 		5,
		}
	},
	grow_flax:{
		name: 				'grow flax',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources','flax'],
		locations_needed:{
			farm: 			2,
		},
		cost:{
		},
		loot:{
			flax: 			5,
		}
	},
	grow_onion:{
		name: 				'grow onions',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			farm: 			3,
		},
		cost:{
		},
		loot:{
			onion: 			5,
		}
	},
	grow_potato:{
		name: 				'grow potato',
		description: 		'',
		loot_description: 	'',
		type: 				'resource',
		subtypes: 			['resources'],
		locations_needed:{
			farm: 			3,
		},
		cost:{
		},
		loot:{
			potato: 		5,
		}
	},
	
}

$.each(available_actions, function(action_id, action_info){
	var total_result = 0;
	var total_cost = 0;
	var total_value = 0;
	$.each(action_info['cost'], function(item_id, item_amount){
		if(available_items[item_id] != undefined && action_info['loot'][item_id] == undefined)
		{
			total_result -= available_items[item_id]['value'] * item_amount;
			total_cost += available_items[item_id]['value'] * item_amount;
		}
		if(available_items[item_id] != undefined && action_info['loot'][item_id] != undefined)
		{
			total_result -= available_items[item_id]['value'] * item_amount * 0.1;
			total_cost += available_items[item_id]['value'] * item_amount * 0.1;
		}
		if(available_items[item_id] != undefined)
		{
			available_items[item_id]['in_recipe'] = true;
		}
	});
	$.each(action_info['loot'], function(item_id, item_amount){
		if(available_items[item_id] != undefined && action_info['cost'][item_id] == undefined)
		{
			total_result += available_items[item_id]['value'] * item_amount;
			total_value += available_items[item_id]['value'] * item_amount;
		}
		if(action_info['image'] == undefined)
		{
			action_info['image'] = available_items[item_id]['image'];
		}
	});
	$.each(action_info['bonus_loot'], function(loot_id, loot_info){
		$.each(loot_info['loot'], function(item_id, item_amount){
			if(available_items[item_id] != undefined)
			{
				total_result += available_items[item_id]['value'] * item_amount * (loot_info['chance'] / 100);
				total_value += available_items[item_id]['value'] * item_amount * (loot_info['chance'] / 100);
			}
			if(action_info['image'] == undefined)
			{
				action_info['image'] = available_items[item_id]['image'];
			}
		});
	});
	if(available_actions[action_id]['type'] == 'combat')
	{
		/*available_actions[action_id]['time'] = Math.ceil(available_actions[action_id]['time'] * 0.8);*/
		total_result *= 1 / (1 + (available_actions[action_id]['level'] / 4));
		total_value *= 1 / (1 + (available_actions[action_id]['level'] / 4));
	}
	available_actions[action_id]['time'] = seconds_per_value * total_result;
	if(count_object(action_info['cost']) > 0)
	{
		//available_actions[action_id]['time'] = Math.ceil(available_actions[action_id]['time'] / 2);
		var value_to_cost = 1 - (total_cost / total_value);
		//console.log(action_id + ' = ' + available_actions[action_id]['time'] + ' > ' + Math.ceil(available_actions[action_id]['time'] * value_to_cost));
		available_actions[action_id]['time'] = Math.ceil(available_actions[action_id]['time'] * value_to_cost);
	}
	if(available_actions[action_id]['time'] < 0)
	{
		available_actions[action_id]['time'] = 1;
		console.log(action_info['name'] + ' cost to high!!!!');
	}
	if(total_cost > 0)
	{
		var ideal_value = Math.ceil(Math.sqrt(total_cost / 2) * 5 + (total_cost * 1.5));
		if(ideal_value < total_value * 0.95 && available_actions[action_id]['type'] != 'combat')
		{
			console.log(action_id + ' - IR: ' + ideal_value + ' (' + total_value + ')');
		}
		if(ideal_value > total_value * 1.2)
		{
			console.log('-- ' + action_id + ' - IR: ' + ideal_value + ' ~ ' + total_value + '');
		}
	}

});