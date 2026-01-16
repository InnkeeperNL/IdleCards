possible_quests = {
	main1_1_1:{
		name: 			'Defeat the squirrel',
		description: 	'You have to calm down the dog.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			kills:{
	 			squirrel: 	1
	 		},
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'lucky',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
		},
		unlocks_fight:{
			test:{
					location_id: 	1, 
					area_id: 		1, 
					specific_wave: 	5000,
					button_image: 	'units/wild-boar-202677_640.jpg'
			}
		},
		explore_chain_bonusses:{
			1:{//location_id
				1:{//explore_chain
					min: 	1,
					max: 	5
				}
			}
		},
		unit_xp: 		0
	},
	main1_1_2:{
		name: 			'The forest fairy',
		description: 	'As you procees through the woods a small creature carefully approaches you. It is a forest fairy.<br/>She wants to help you, but she is very hungry. If you find her some acorns she will join you.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	'main1_1_1',
		single_use: 	true,
		requirements:{
			items:{
	 			acorn: 	25
	 		},
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'forest_fairy',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
		},
		explore_chain_bonusses:{
			1:{//location_id
				1:{//explore_chain
					min: 	3,
					max: 	10
				}
			}
		},
		unit_xp: 		10
	},
	side1_1_1_1:{
		name: 			'Acorn weapons',
		description: 	'Maybe if you practice enough, you can start using acorns as weapons too.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	'main1_1_1',
		single_use: 	true,
		requirements:{
			items:{
	 			acorn: 	35,
	 		},
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'nut_barrage',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
		},
		explore_chain_bonusses:{
		},
		unit_xp: 		10
	},
	side1_1_2_1:{
		name: 			'The fur hunter',
		description: 	'You encounter a hunter. She is looking for squirrel tails. She has a spare leather tunic she is willing to exchange for the tails.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	'main1_1_1',
		single_use: 	true,
		requirements:{
			items:{
	 			squirrel_tail: 	5,
	 		},
		},
		rewards:{
			0:{
				reward_type:	'gear',
				reward_id: 		'leather_tunic',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
		},
		explore_chain_bonusses:{
		},
		unit_xp: 		10
	},
	side1_1_2_2:{
		name: 			'The power of acorns',
		description: 	'The fairy tells you she can teach you how to heal yourself and you allies. She will need a lot of acorns though.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	'main1_1_2',
		single_use: 	true,
		requirements:{
			items:{
	 			acorn: 	100
	 		},
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'minor_heal',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
		},
		explore_chain_bonusses:{
			1:{//location_id
				1:{//explore_chain
					min: 	6,
					max: 	10
				}
			}
		},
		unit_xp: 		10
	},
	main1_1_3:{
		name: 			'The big tree hunter',
		description: 	'A lumberjack is roaming the woods in search for a big tree. If you clear some squirrels he will join you.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	'main1_1_2',
		single_use: 	true,
		requirements:{
			kills:{
	 			squirrel: 	10
	 		},
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'lumberjack',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
		},
		explore_chain_bonusses:{
		},
		unit_xp: 		25
	},
	main1_1_4:{
		name: 			'The big tree',
		description: 	'The lumberjack tells you about a big tree deep in these woods. He tells you he can teach you how to make a club out of the wood. Once the tree is down he can show you the way to a nearby village.',
		location_id: 	1,
		location_level: 1,
		from_quest: 	'main1_1_3',
		single_use: 	true,
		requirements:{
			kills:{
	 			squirrel_tree: 	1
	 		},
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'club',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 		1: 			1
	 	},
	 	explore_chain_bonusses:{
	 		1:{//location_id
	 			1:{//explore_chain
	 				min: 	11,
	 				max: 	50
	 			}
	 		}
	 	},
		unit_xp: 		150
	},
	main1_2_1:{
		name: 			'The injured hunter',
		description: 	'You find a local hunter, wounded from a boar attack. She needs aid and a good meal. Once she is back on her feet, she will join you.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			acorn: 		50,
	 			sausage: 	2
	 		},
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'hunter',
				reward_amount: 	2,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 		1:{//location_id
	 			2:{//explore_chain
	 				min: 	6,
	 				max: 	16
	 			}
	 		}
	 	},
		unit_xp: 		25
	},
	side1_2_1_1:{
		name: 			'From boar to mouth',
		description: 	'Your ally the lumberjack knows a recipe for sausages. Gather some pork and timber so he can show you.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			pork: 		5,
	 			timber: 	2
	 		},
		},
		rewards:{
			0:{
				reward_type:	'item',
				reward_id: 		'sausage',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'charcoal',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'sausage',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_1_2:{
		name: 			'Real woodworking',
		description: 	'Your ally the lumberjack can also teach you how to make woodworking tools. He would like some leather for the knowledge though.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'side1_2_1_1',
		single_use: 	true,
		requirements:{
			items:{
	 			ruined_fur: 		5,
	 			leather: 			10
	 		},
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'carpenters_toolbox',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'item',
				reward_id: 		'iron',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'item',
				reward_id: 		'nails',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_1_3:{
		name: 			'The hunter\'s gear',
		description: 	'The hunter uses ranged weapons. Show her you are a good hunter and she will teach you how to make your own bow. She will even supply the rope.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'main1_2_1',
		single_use: 	true,
		requirements:{
			kills:{
	 			boar: 			10,
	 		},
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'arrows',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'shortbow',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'item',
				reward_id: 		'rope',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'item',
				reward_id: 		'feather',
				reward_amount: 	10,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_1_4:{
		name: 			'The hunter\'s outfit',
		description: 	'The hunter can show you how to make a leather outfit. She will even supply you with the yarn you need. She needs some leather herself.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'main1_2_1',
		single_use: 	true,
		requirements:{
			items:{
	 			leather: 			50,
	 		},
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'leather_boots',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'leather_gloves',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'leather_tunic',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'recipe',
				reward_id: 		'leather_hood',
				reward_amount: 	1,
			},
			4:{
				reward_type:	'item',
				reward_id: 		'yarn',
				reward_amount: 	20,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_1_5:{
		name: 			'Treats for boars',
		description: 	'If you find some truffles you may be able to tame a boar.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			truffle: 		5,
	 		},
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'boar',
				reward_amount: 	2,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	main1_2_2:{
		name: 			'The way to Maywell',
		description: 	'Your ally the lumberjack had promised to show you the way to a nearby village. Travel far enough through the woods to reach it.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'main1_2_1',
		single_use: 	true,
		requirements:{
			waves_defeated:{
	 			location: 	1,
	 			level: 		2,
	 			amount: 	10
	 		},
		},
		rewards:{
		},
		location_upgrades:{
			1: 				1
	 	},
	 	unlocks_fight:{
			boar_hunting:{
					location_id: 	1, 
					area_id: 		2, 
					specific_wave: 	5000,
					button_image: 	'units/wild-boar-202677_640.jpg'
			}
		},
	 	explore_chain_bonusses:{
	 		1:{//location_id
	 			2:{//explore_chain
	 				min: 	6,
	 				max: 	100
	 			}
	 		}
	 	},
		unit_xp: 		250
	},
	side1_2_2_1:{
		name: 			'Hunter supplies',
		description: 	'Now that you can craft arrows, the hunter can teach you how to hunt. Give her some needed supplies to learn this new ability.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'side1_2_1_3',
		single_use: 	true,
		requirements:{
			gear:{
	 			arrows: 	1,
	 		},
	 		items:{
	 			sausage: 	5
	 		}
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'hunt',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_2_2:{
		name: 			'Chopping business',
		description: 	'The lumberjack can use a hand taking down those trees. If you supply him with some new clothes he will share his bounty.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'side1_2_1_3',
		single_use: 	true,
		requirements:{
	 		items:{
	 			leather: 	10,
	 			ruined_fur: 10
	 		}
		},
		rewards:{
			0:{
				reward_type:	'item',
				reward_id: 		'timber',
				reward_amount: 	20,
			},
			1:{
				reward_type:	'spell',
				reward_id: 		'smash',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_2_3:{
		name: 			'Wanderlust',
		description: 	'A wandering druid approaches you. It is time for him to stop his wandering. He is very low on his supply of acorns though.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'side1_2_2_2',
		single_use: 	true,
		requirements:{
	 		items:{
	 			acorn: 	250,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'wandering_druid',
				reward_amount: 	3,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_2_4:{
		name: 			'The druid\'s staff',
		description: 	'If you supply the druid with the materials to craft a new staff he will show you how to craft your own.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'side1_2_2_3',
		single_use: 	true,
		requirements:{
	 		items:{
	 			timber: 		10, 	// 100
				herbs:			1 		// 20
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'wooden_staff',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_2_2_5:{
		name: 			'Lone magic',
		description: 	'A lone mage is wandering the woods. She needs some good food. If you giver her some she will join you.',
		location_id: 	1,
		location_level: 2,
		from_quest: 	'side1_2_2_4',
		single_use: 	true,
		requirements:{
	 		items:{
	 			hearty_breakfast: 	5,
	 			bread: 				5
	 		}
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'lone_mage',
				reward_amount: 	3,
			},
			1:{
				reward_type:	'spell',
				reward_id: 		'magic_bolt',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'runic_staff',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	
	main1_3_1:{
		name: 			'The local chef',
		description: 	'The local chef is in dire need of some pork. Supply him and he will teach you some new things.',
		location_id: 	1,
		location_level: 3,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			pork: 	20,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'bread',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'hearty_breakfast',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	main1_3_2:{
		name: 			'Farmer\'s rivalry',
		description: 	'The locals are very friendly. They say that if you can help them out with some rival farmers they will share their crops with you.',
		location_id: 	1,
		location_level: 3,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			kills:{
	 			farmer: 	20,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'item',
				reward_id: 		'tomato',
				reward_amount: 	10,
			},
			1:{
				reward_type:	'item',
				reward_id: 		'cotton',
				reward_amount: 	10,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_3_2_1:{
		name: 			'A well deserved meal',
		description: 	'You should sit down for a good meal with your allies. A good rest can help a lot.',
		location_id: 	1,
		location_level: 3,
		from_quest: 	'main1_3_1',
		single_use: 	true,
		requirements:{
			items:{
	 			hearty_breakfast: 	4,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'energise',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'spell',
				reward_id: 		'revitalize',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_3_2_2:{
		name: 			'A chicken ain\'t chicken',
		description: 	'If you try, you might be able to hatch one of the eggs.',
		location_id: 	1,
		location_level: 3,
		from_quest: 	'main1_3_2',
		single_use: 	true,
		requirements:{
			items:{
	 			egg: 	10,
	 			hay: 	2
	 		}
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'chick',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'chick',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'chicken',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'recipe',
				reward_id: 		'rooster',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	main1_3_3:{
		name: 			'Repair the barn',
		description: 	'If you repair the local barn, one of the farmers will join you. He can show you the way to the village.',
		location_id: 	1,
		location_level: 3,
		from_quest: 	'main1_3_2',
		single_use: 	true,
		requirements:{
			items:{
	 			timber: 	10,
	 			hay: 		10
	 		}
		},
		rewards:{
			0:{
				reward_type:	'unit',
				reward_id: 		'farmer',
				reward_amount: 	3,
			},
		},
		location_upgrades:{
			1: 			1
	 	},
	 	explore_chain_bonusses:{
	 		1:{//location_id
	 			2:{//explore_chain
	 				min: 	6,
	 				max: 	100
	 			}
	 		}
	 	},
		unit_xp: 		25
	},
	main1_4_1:{
		name: 			'The local tailor',
		description: 	'Mealus, the local tailor, needs some supplies. He usually gets them from the big city, but since the bandits are blocking all trade, maybe you could supply him?',
		location_id: 	1,
		location_level: 4,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			cotton: 	30,
	 			flax: 		10
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'yarn_cotton',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'cloth',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'rope',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'item',
				reward_id: 		'coins',
				reward_amount: 	100,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_1:{
		name: 			'The bandit blockade',
		description: 	'Biggs, the head of the guard, needs the blockade to end. The bandits raid all transports here and there is no way he will let you travel any further untill it is gone. Prove you are willing to help by dispatching some bandits.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			kills:{
	 			bandit: 		10,
	 			bandit_scout: 	10
	 		}
		},
		rewards:{
			0:{
				reward_type:	'gear',
				reward_id: 		'chain_boots',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'gear',
				reward_id: 		'chain_vest',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'gear',
				reward_id: 		'chain_gloves',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'gear',
				reward_id: 		'chain_coif',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_2:{
		name: 			'Getting ready',
		description: 	'Biggs needs a large supply of timber to make some shields for his men. He can supply you with one and train you how to use it in exchange.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_1',
		single_use: 	true,
		requirements:{
			items:{
	 			timber: 		50,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'gear',
				reward_id: 		'wooden_shield',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'spell',
				reward_id: 		'block',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_3:{
		name: 			'Fighting on a full stomach',
		description: 	'Biggs wants to get some rations ready. If you supply him with some pork, he can give you a good weapon.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_1',
		single_use: 	true,
		requirements:{
			items:{
	 			sausage: 		10,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'gear',
				reward_id: 		'handaxe',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_4:{
		name: 			'The local mill',
		description: 	'Yoshun, the miller, needs some help at the mill. Get hime some rope and he will show you the ropes.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			rope: 		5,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'flour',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_5:{
		name: 			'The cloth a man can use',
		description: 	'Mealus thinks he can use some of the scarves of the bandits to fashion some new clothes. He can teach you to make clothes yourself if you supply him some. You can find them on local bandits and bandit scouts.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'main1_4_1',
		single_use: 	true,
		requirements:{
			items:{
	 			lux_scarf: 	10,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'soft_shirt',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'soft_hood',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'soft_bracers',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'recipe',
				reward_id: 		'sandals',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_6:{
		name: 			'Wild fashion',
		description: 	'Mealus has a great idear for some fashionable clothes. He needs some wolf-tails and feathers to make it work. Once you have a good reputation, you should be able to attract local peasants.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_5',
		single_use: 	true,
		requirements:{
			items:{
	 			wolf_tail: 	10,
	 			feather: 	50
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'yarn_wool',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'peasant',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_7:{
		name: 			'Putting scraps to good use',
		description: 	'You should really learn to make iron. Maybe if we charm te local blacksmith he will teach us.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			scrap_metal: 	2,
	 			charcoal: 		10,
	 			coins: 			100
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'iron',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'iron_from_scrap',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'nails',
				reward_amount: 	1,
			},
			3:{
				reward_type:	'recipe',
				reward_id: 		'smiths_hammer',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_8:{
		name: 			'Using your inner fire',
		description: 	'Theala, the local mage, has many things to teach. If you hire her she will start teaching you spells.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_5',
		single_use: 	true,
		requirements:{
			items:{
	 			coins: 			1000
	 		}
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'ignite',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_9:{
		name: 			'The local bazaar',
		description: 	'The local bazaar is currently closed. If you supply the merchants with something to trade they can open shop again.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	0,
		single_use: 	true,
		requirements:{
			items:{
	 			timber: 		10,
	 			cotton: 		10,
	 			tomato: 		10,
	 			egg: 			10,
	 			wheat: 			10,
	 			leather: 		10
	 		}
		},
		rewards:{
			0:{
				reward_type:	'item',
				reward_id: 		'coins',
				reward_amount: 	500,
			},
		},
		unlocks_fight:{
			maywell_bazaar:{
					location_id: 	1, 
					area_id: 		4, 
					specific_wave: 	5000,
					button_image: 	'units/bazaar-1853361_640.jpg'
			}
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_10:{
		name: 			'Expanding your inner fire',
		description: 	'Theala can teach you firebolt next.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_8',
		single_use: 	true,
		requirements:{
			items:{
	 			coins: 			2500
	 		}
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'firebolt',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	side1_4_1_11:{
		name: 			'Explosive fire',
		description: 	'Theala can now teach you firestorm.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_10',
		single_use: 	true,
		requirements:{
			items:{
	 			coins: 			10000
	 		}
		},
		rewards:{
			0:{
				reward_type:	'spell',
				reward_id: 		'firestorm',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	main1_4_2:{
		name: 			'Training with shields',
		description: 	'Biggs tells you he will be quite thankfull if you could supply him with any iron. He will teach you how to train shieldmen if you do.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'side1_4_1_3',
		single_use: 	true,
		requirements:{
			items:{
	 			iron: 		1,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'recipe',
				reward_id: 		'shieldman',
				reward_amount: 	1,
			},
			1:{
				reward_type:	'recipe',
				reward_id: 		'wooden_shield',
				reward_amount: 	1,
			},
			2:{
				reward_type:	'recipe',
				reward_id: 		'chain_vest',
				reward_amount: 	1,
			},
		},
		unlocks_fight:{
			bandit_commander:{
					location_id: 	1, 
					area_id: 		4, 
					specific_wave: 	5001,
					button_image: 	'units/people-3149372_640.jpg'
			}
		},
		location_upgrades:{
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	main1_4_3:{
		name: 			'Take out the commander',
		description: 	'It is time to take out the bandit commander and lift the blockade.',
		location_id: 	1,
		location_level: 4,
		from_quest: 	'main1_4_2',
		single_use: 	true,
		requirements:{
			kills:{
	 			bandit_commander: 		1,
	 		}
		},
		rewards:{
			0:{
				reward_type:	'gear',
				reward_id: 		'map',
				reward_amount: 	1,
			},
		},
		location_upgrades:{
			2: 			4,
	 	},
	 	explore_chain_bonusses:{
	 	},
		unit_xp: 		25
	},
	// ########################################################## example quest #########################################
	// main1_1:{
	// 	name: 			'Balance the squirrels',
	// 	description: 	'A feary comes up to you. <i>Please help me! The balance is all wrong here!</i> The feary promises to join you if you restore the balance by killing 10 squirrels.',
	// 	location_id: 	1,
	// 	location_level: 1,
	// 	from_quest: 	0,
	// 	single_use: 	true,
	// 	requirements:{
	// 		kills:{
	// 			squirrel: 	10
	// 		},
	// 		items:{
	// 			squirrel_tail: 	5,
	// 			fur: 			5
	// 		}
	// 	},
	// 	loot:{
	// 		0:{
	// 			item: 		'fur',
	// 			amount: 	5
	// 		}
	// 	},
	// 	gear:{
	// 		0:{
	// 			gear: 		'feathered_hat',
	// 			subtypes: 	['of_the_woods'],
	// 			level:  	1
	// 		}
	// 	},
	// 	units:{
	// 		0:{
	// 			unit: 		'forest_feary',
	// 			level:  	1
	// 		}
	// 	},
	// 	spells:{
	// 		0:{
	// 			spell: 		'seed_of_life',
	// 			level: 		1
	// 		}
	// 	},
	// 	location_upgrades:{
	// 		1: 			1
	// 	},
	// 	explore_chain_bonusses:{
	// 		1:{//location_id
	// 			1:{//explore_chain
	// 				min: 	2,
	// 				max: 	4
	// 			}
	// 		}
	// 	},
	//	unlocks_fight:{
	//		blacksmith:{
	//				location_id: 	1, 
	//				area_id: 		1, 
	//				specific_wave: 	5000,
	//				button_image: 	'units/blacksmith-2385628_640.jpg'
	//		}
	//	},
	// 	unit_xp: 		50
	// },
	
}

possible_quests = sortObj(possible_quests);

function show_quests(){
	//check_item_quests();
	//check_quests();
	show_location_list();
	$('.new_quests').html('');
	$('.complete_quests').html('');
	$('.busy_quests').html('');
	$('.quest_details').html('');

	var available_quest_count = 0;
	var first_quest_id = 0;

	$.each(possible_quests, function(quest_id, quest) {
		if(typeof(gamedata['quest_progress'][quest_id]) == 'undefined' && quest['location_id'] == gamedata['current_location'] && quest['location_level'] <= (gamedata['unlocked_locations'][quest['location_id']] + locations[quest['location_id']]['start_level']) && (quest['from_quest'] == 0 || (quest['from_quest'] != 0 && gamedata['quest_progress'][quest['from_quest']] != undefined && gamedata['quest_progress'][quest['from_quest']]['status'] == -2)))
		{
			gamedata['quest_progress'][quest_id] = {status:-1,requirements:{}};
			show_location_list();
		}

		if(quest['location_id'] == gamedata['current_location'] && typeof(gamedata['quest_progress'][quest_id]) != 'undefined' && gamedata['quest_progress'][quest_id]['status'] > -2 && quest['location_level'] == gamedata['explore_level'])
		{
			if(first_quest_id == 0){first_quest_id = quest_id;}
			available_quest_count++;
			var can_complete = true;
			var repeatable = '';
			if(quest['single_use'] == false)
			{
				repeatable = ' repeatable ';
			}
			
			if(quest['requirements']['waves_defeated'] != undefined)
			{
				if(typeof(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated']) == 'undefined')
				{
					gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] = 0;
				}
				if(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] < quest['requirements']['waves_defeated']['amount'])
				{
					can_complete = false;
				}
			}

			$.each(quest['requirements']['kills'], function(key, amount) {
				if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills']) == 'undefined')
				{
					gamedata['quest_progress'][quest_id]['requirements']['kills'] = {};
				}
				if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills'][key]) == 'undefined')
				{
					gamedata['quest_progress'][quest_id]['requirements']['kills'][key] = 0;
				}
				if(gamedata['quest_progress'][quest_id]['requirements']['kills'][key] < amount)
				{
					can_complete = false;
				}
			});
			
			$.each(quest['requirements']['items'], function(key, amount) {
				if(typeof(gamedata['inventory'][key]) == 'undefined')
				{
					gamedata['inventory'][key] = 0;
				}
				if(gamedata['inventory'][key] < amount)
				{
					can_complete = false;
				}
			});	

			$.each(quest['requirements']['gear'], function(key, amount) {
				var gear_owned = count_gear_owned(key, true, amount, true);
				if(gear_owned == 0)
				{
					can_complete = false;
				}
			});	

			var total_quest = '';
			total_quest += '<div class="quest_title">';
			if(gamedata['quest_progress'][quest_id]['status'] == -1)
			{
				total_quest += '<div class="new_quest ' + repeatable + '" onclick="show_single_quest(\'' + quest_id + '\')">New quest: ' + quest['name'] + '</div>';
			}
			else
			{
				if(can_complete == true && quest['location_level'] == gamedata['explore_level'] && gamedata['quest_progress'][quest_id]['status'] > -1)
				{
					total_quest += '<div class="' + repeatable + '" onclick="show_single_quest(\'' + quest_id + '\')">! ' + quest['name'] + '</div>';
				}
				else
				{
					total_quest += '<div class="' + repeatable + '" onclick="show_single_quest(\'' + quest_id + '\')">' + quest['name'] + '</div>';
				}
				
			}

			total_quest += '</div>';
			total_quest += '<div class="breaker"></div>';

			if(can_complete == true && quest['location_level'] == gamedata['explore_level'] && gamedata['quest_progress'][quest_id]['status'] > -1)
			{
				first_quest_id = quest_id;
				$('.complete_quests').append(total_quest);
			}
			if(gamedata['quest_progress'][quest_id]['status'] == -1 && quest['location_level'] == gamedata['explore_level'])
			{
				$('.new_quests').append(total_quest);
			}
			if(gamedata['quest_progress'][quest_id]['status'] > -1 && can_complete == false)
			{
				$('.busy_quests').append(total_quest);
			}
		}

	});

	$('.quest_complete_count').html(check_quests_complete_count(gamedata['current_location'], gamedata['explore_level']));

	if(available_quest_count > 0)
	{
		$('.menu .quest_button').show();
		show_single_quest(first_quest_id);
	}
	else
	{
		$('.menu .quest_button').hide();
	}
};

function show_single_quest(quest_id){
	var quest = possible_quests[quest_id];
	if(typeof(gamedata['quest_progress'][quest_id]) == 'undefined' && quest['location_id'] == gamedata['current_location'] && quest['location_level'] <= (gamedata['unlocked_locations'][quest['location_id']] + locations[quest['location_id']]['start_level']) && (quest['from_quest'] == 0 || (quest['from_quest'] != 0 && gamedata['quest_progress'][quest['from_quest']] != undefined && gamedata['quest_progress'][quest['from_quest']]['status'] == -2)))
	{
		gamedata['quest_progress'][quest_id] = {status:-1,requirements:{}};
		show_location_list();
	}

	if(quest['location_id'] == gamedata['current_location'] && typeof(gamedata['quest_progress'][quest_id]) != 'undefined' && gamedata['quest_progress'][quest_id]['status'] > -2 && quest['location_level'] == gamedata['explore_level'])
	{
		var can_complete = true;
		var repeatable = '';
		if(quest['single_use'] == false)
		{
			repeatable = ' repeatable ';
		}
		var total_quest = '';
		total_quest += '<div class="quest_title">';
		if(gamedata['quest_progress'][quest_id]['status'] == -1)
		{
			total_quest += '<h3 class="new_quest ' + repeatable + '">New quest: ' + quest['name'] + '</h3>';
		}
		else
		{
			total_quest += '<h3 class="' + repeatable + '">' + quest['name'] + '</h3>';
		}
		total_quest += '<div class="quest_description">' + quest['description'] + '</div><br/>';
		

		

		total_quest += '<div class="breaker"></div>';

		if(quest['requirements']['waves_defeated'] != undefined)
		{
			var amount = quest['requirements']['waves_defeated']['amount'];
			if(typeof(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated']) == 'undefined')
			{
				gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] = 0;
			}
			if(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] < amount)
			{
				can_complete = false;
			}
			var progress_name = amount + ' waves defeated';
			var current_progress = gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'];
			var maximum_progress = amount;
			total_quest += quest_progress_bar(progress_name, current_progress, maximum_progress);
		}
		
		$.each(quest['requirements']['kills'], function(key, amount) {
			if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills']) == 'undefined')
			{
				gamedata['quest_progress'][quest_id]['requirements']['kills'] = {};
			}
			if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills'][key]) == 'undefined')
			{
				gamedata['quest_progress'][quest_id]['requirements']['kills'][key] = 0;
			}
			if(gamedata['quest_progress'][quest_id]['requirements']['kills'][key] < amount)
			{
				can_complete = false;
			}
			var progress_name = available_units[key]['name'] + ' killed';
			var current_progress = gamedata['quest_progress'][quest_id]['requirements']['kills'][key];
			var maximum_progress = amount;
			total_quest += quest_progress_bar(progress_name, current_progress, maximum_progress);
		});
		
		$.each(quest['requirements']['items'], function(key, amount) {
			if(typeof(gamedata['inventory'][key]) == 'undefined')
			{
				gamedata['inventory'][key] = 0;
			}
			if(gamedata['inventory'][key] < amount)
			{
				can_complete = false;
			}
			var progress_name = available_items[key]['name'];
			var current_progress = gamedata['inventory'][key];
			if(current_progress > amount)
				{current_progress = amount;}
			var maximum_progress = amount;
			total_quest += quest_progress_bar(progress_name, current_progress, maximum_progress);
		});	

		$.each(quest['requirements']['gear'], function(key, amount) {
			var gear_owned = count_gear_owned(key, true, amount, true);
			if(gear_owned == 0)
			{
				can_complete = false;
			}
			var progress_name = available_gear[key]['name'];
			var current_progress = gear_owned;
			if(current_progress > 1)
				{current_progress = 1;}
			var maximum_progress = amount;
			total_quest += quest_progress_bar(progress_name, current_progress, maximum_progress);
		});

		total_quest += '<div class="breaker"></div>';

		if(count_object(quest['rewards']) > 0)
		{
			total_quest += '<b>Reward:</b><br/>';
			$.each(quest['rewards'], function(reward_id, reward_details){
				total_quest += parse_reward(reward_details, 1, 1);
			});
		}
		
		if(typeof(quest['unit_xp']) != 'undefined' && quest['unit_xp'] > 0)
		{
			total_quest += '<div class="breaker"></div>';
			total_quest += 'All active units will gain ' + quest['unit_xp'] + ' XP.';
		}
		total_quest += '<div class="breaker"></div>';
		

		if(gamedata['quest_progress'][quest_id]['status'] == -1 && quest['location_level'] == gamedata['explore_level'])
		{
			total_quest += '<div class="start_quest_button" onclick="start_quest(\'' +  quest_id + '\')">Start</div>';
		}
		if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == false)
		{
			total_quest += '<div class="abandon_quest_button" onclick="abandon_quest(\'' +  quest_id + '\')">Abandon</div>';
		}
		if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == true && quest['location_level'] == gamedata['explore_level'])
		{
			total_quest += '<div class="complete_quest_button" onclick="complete_quest(\'' +  quest_id + '\')">Complete</div>';
		}
		if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == true && quest['location_level'] != gamedata['explore_level'])
		{
			total_quest += '<div class="complete_quest_button inactive">Complete somewhere else</div>';
		}
		total_quest += '<div class="breaker"></div>';
		total_quest += '</div><br/>';
		total_quest += '<div class="breaker"></div>';

		/*if(can_complete == true && quest['location_level'] == gamedata['explore_level'] && gamedata['quest_progress'][quest_id]['status'] > -1)
		{*/
			$('.quest_details').html(total_quest);
		/*}
		if(gamedata['quest_progress'][quest_id]['status'] == -1 && quest['location_level'] == gamedata['explore_level'])
		{
			$('.quest_details').html(total_quest);
		}
		if(gamedata['quest_progress'][quest_id]['status'] > -1 && can_complete == false)
		{
			$('.quest_details').html(total_quest);
		}*/
	}
}

function parse_quest_rewards(quest){

	var total_quest = '';

	$.each(quest['loot'], function(key, item) {
		if(item['amount'] > 0){
			total_quest += '<div class="item  quality_' + available_items[item['item']]['quality'] + ' ' + available_items[item['item']]['subtype'] + '" style="background-image:url(images/items/' + available_items[item['item']]['image'] + ')" onmouseover="show_item_details(\'' + item['item'] + '\')">' + item['amount'] + '</div>';
		}
	});
	$.each(quest['gear'], function(key, gear) {
		if(gear['level'] > 0){
			var gear_subtypes = '';
			$.each(gear['subtypes'], function(key, subtype){
				gear_subtypes += '\'' + subtype + '\',';
			});
			/*if(count_object(gear['subtypes']) > 0)
			{
				gear_subtypes = gear_subtypes.substring(0,gear_subtypes.length-1);
			}*/
			total_quest += '<div class="item quality_' + available_gear[gear['gear']]['quality'] + '" style="background-image:url(images/gear/' + available_gear[gear['gear']]['image'] + ')" onmouseover="show_general_gear_details(\'' + gear['gear'] + '\',' + gear['level'] + ',[' + gear_subtypes + '])"></div>';
		}
	});
	$.each(quest['spells'], function(key, item) {
		if(item['level'] > 0){
			total_quest += '<div class="item " style="background-image:url(images/abilities/' + unit_abilities[item['spell']]['image'] + ')" onmouseover="show_spell_details(\'' + item['spell'] + '\')"></div>';
		}
	});
	$.each(quest['units'], function(key, unit) {
		if(unit['level'] > 0){
			total_quest += '<div class="item " style="background-image:url(images/units/' + available_units[unit['unit']]['image'] + ')" onmouseover="show_general_details(\'' + unit['unit'] + '\',' + unit['level'] + ')"></div>';
		}
	});

	return total_quest;

};

function parse_quest_requirements(quest, quest_id, can_complete){

	var total_quest = '';

	

	return total_quest;
}

function quest_progress_bar(progress_name, current_progress, maximum_progress){
	var progress_bar = '';
	var progress_width = ((current_progress / maximum_progress) * 100);

	progress_bar += '<div class="quest_progress_bar_container"><div class="quest_progress_bar" style="width:' + progress_width + '%"></div>' + progress_name + ' <span class="float_right">' + current_progress + ' / ' + maximum_progress + '</span></div>'

	return progress_bar;
};

function start_quest(quest_id){

	gamedata['quest_progress'][quest_id] = {status:1,requirements:{}};
	saveToLocalStorage();
	show_quests();
	show_single_quest(quest_id);
}

function abandon_quest(quest_id){
	if(possible_quests[quest_id]['from_quest'] == 'procs')
	{
		delete gamedata['quest_progress'][quest_id];
	}
	else
	{
		gamedata['quest_progress'][quest_id] = {status:-1,requirements:{}};
	}
	
	saveToLocalStorage();
	show_quests();
}

function complete_quest(quest_id){

	var can_complete = true;


	if(can_complete == true)
	{
		$.each(possible_quests[quest_id]['requirements']['items'], function(key, amount) {
			gamedata['inventory'][key] -= amount;
		});
		$.each(gamedata['quest_progress'][quest_id]['requirements']['kills'], function(key, amount) {
			gamedata['quest_progress'][quest_id]['requirements']['kills'][key] = 0;
		});
		$.each(possible_quests[quest_id]['requirements']['gear'], function(item_id, amount){
			/*for (var i = amount - 1; i >= 0; i--) {*/
				delete_gear_of_type(item_id, amount);
			/*};*/
		});

		gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] = 0;


		if(possible_quests[quest_id]['single_use'] == true)
		{
			gamedata['quest_progress'][quest_id]['status'] = -2;
		}
		else
		{
			if(possible_quests[quest_id]['from_quest'] == 'procs')
			{
				delete gamedata['quest_progress'][quest_id];
			}
			else
			{
				gamedata['quest_progress'][quest_id]['status'] = -1;
			}
		}
		
		/*$.each(possible_quests[quest_id]['loot'], function(key, item) {
			if(item['amount'] > 0){
				gain_item(item['item'], Math.floor(item['amount']));
			}
		});
		$.each(possible_quests[quest_id]['gear'], function(key, gear) {
			if(gear['level'] > 0){
				gain_gear(gear['gear'], Math.floor(gear['level']), gear['subtypes']);
			}
		});
		$.each(possible_quests[quest_id]['spells'], function(key, item) {
			if(item['level'] > 0){
				gain_spell(item['spell'], Math.floor(item['level']));
			}
		});
		$.each(possible_quests[quest_id]['units'], function(key, unit) {
			if(unit['level'] > 0){
				addunit(unit['unit'], Math.floor(unit['level']),0);
			}
		});*/
		$.each(possible_quests[quest_id]['rewards'], function(reward_id, reward_details){
			apply_recipe_rewards(reward_details, 1, 'none', 1);
		});
		
		$.each(possible_quests, function(key, quest) {
			if(quest['from_quest'] == quest_id){
				gamedata['quest_progress'][key] = {status:-1,requirements:{}};
			}
		});

		$.each(possible_quests[quest_id]['location_upgrades'], function(location_id, amount) {
			if(typeof(gamedata['unlocked_locations'][location_id]) == 'undefined')
			{
				gamedata['unlocked_locations'][location_id] = amount;
				show_quest_message('<b>NEW LOCATION UNLOCKED</b>', true);
			}
			else
			{
				gamedata['unlocked_locations'][location_id] += amount;
			}
			if(location_id == gamedata['current_location'])
			{
				//gamedata['explore_level'] = gamedata['unlocked_locations'][location_id] + locations[location_id]['start_level'];
			}
		});
		$.each(possible_quests[quest_id]['explore_chain_bonusses'], function(location_id, bonus) {
			$.each(bonus, function(explore_level, bonus_amount) {
				if(typeof(gamedata['explore_chain_bonus'][location_id]) == 'undefined')
				{
					gamedata['explore_chain_bonus'][location_id] = {};
				}
				if(typeof(gamedata['explore_chain_bonus'][location_id][explore_level]) == 'undefined')
				{
					gamedata['explore_chain_bonus'][location_id][explore_level] = bonus_amount;

				}
				else
				{
					gamedata['explore_chain_bonus'][location_id][explore_level]['min'] = bonus_amount['min'];
					gamedata['explore_chain_bonus'][location_id][explore_level]['max'] = bonus_amount['max'];
				}

			});
		});
		if(possible_quests[quest_id]['unlocks_fight'] != undefined)
		{
			$.each(possible_quests[quest_id]['unlocks_fight'], function(fight_id, unlocked_fight) {
				gamedata['specific_fights'][fight_id] = copyobject(unlocked_fight);
			});
		}
		

		if(typeof(possible_quests[quest_id]['unit_xp']) != 'undefined' && possible_quests[quest_id]['unit_xp'] > 0)
		{
			$.each(gamedata['units'], function(key,unit){
				if(unit['slot'] > 0)
				{
					unit['xp'] += possible_quests[quest_id]['unit_xp'];
					check_unit_level(key);
				}
			});
		}
		saveToLocalStorage();
		
	}
	show_quests();
	
}

function check_quests_complete_count(requested_location_id, requested_explore_level){
	//$('.quest_complete_count').html('');
	var quest_markers = '';
	var new_quests = 0;
	var new_repeatable_quests = 0;
	var complete_quests = 0;
	var complete_repeatable_quests = 0;
	var busy_quests = 0;
	var busy_repeatable_quests = 0;

	$.each(possible_quests, function(quest_id, quest) {

		if(typeof(gamedata['quest_progress'][quest_id]) == 'undefined' && quest['location_id'] == requested_location_id && quest['location_level'] <= (gamedata['unlocked_locations'][quest['location_id']] + locations[quest['location_id']]['start_level']) && quest['from_quest'] == 0)
		{
			gamedata['quest_progress'][quest_id] = {status:-1,requirements:{}};
		}

		if(quest['location_id'] == requested_location_id && typeof(gamedata['quest_progress'][quest_id]) != 'undefined' && gamedata['quest_progress'][quest_id]['status'] > -2 && quest['location_level'] == requested_explore_level)
		{
			var can_complete = true;

			if(quest['requirements']['waves_defeated'] != undefined)
			{
				var amount = quest['requirements']['waves_defeated']['amount'];
				if(typeof(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated']) == 'undefined')
				{
					gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] = 0;
				}
				if(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] < amount)
				{
					can_complete = false;
				}
			}

			$.each(quest['requirements']['kills'], function(key, amount) {

				if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills']) == 'undefined')
				{
					gamedata['quest_progress'][quest_id]['requirements']['kills'] = {};
				}

				if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills'][key]) == 'undefined')
				{
					gamedata['quest_progress'][quest_id]['requirements']['kills'][key] = 0;
				}
				if(gamedata['quest_progress'][quest_id]['requirements']['kills'][key] < amount)
				{
					can_complete = false;
				}
			});
			$.each(quest['requirements']['items'], function(key, amount) {
				if(typeof(gamedata['inventory'][key]) == 'undefined')
				{
					gamedata['inventory'][key] = 0;
				}
				if(gamedata['inventory'][key] < amount)
				{
					can_complete = false;
				}
			});
			$.each(quest['requirements']['gear'], function(key, amount) {
				var gear_owned = count_gear_owned(key, true, amount, true);
				if(gear_owned == 0)
				{
					can_complete = false;
				}
			});	
			if(gamedata['quest_progress'][quest_id]['status'] == -1 && quest['single_use'] == true)
			{
				new_quests += 1;
			}
			if(gamedata['quest_progress'][quest_id]['status'] == -1 && quest['single_use'] != true)
			{
				new_repeatable_quests += 1;
			}
			if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == true && quest['single_use'] == true)
			{
				complete_quests += 1;
			}
			if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == true && quest['single_use'] != true)
			{
				complete_repeatable_quests += 1;
			}
			if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == false && quest['single_use'] == true)
			{
				busy_quests += 1;
			}
			if(gamedata['quest_progress'][quest_id]['status'] == 1 && can_complete == false && quest['single_use'] != true)
			{
				busy_repeatable_quests += 1;
			}
		}
	});

	if(busy_quests > 0)
	{
		quest_markers += ' ' + busy_quests;
		//$('.quest_complete_count').append(' !');
	}
	if(busy_repeatable_quests > 0)
	{
		quest_markers += ' <span class="repeatable">' + busy_repeatable_quests + '</span>';
		//$('.quest_complete_count').append(' !');
	}
	if(new_quests > 0)
	{
		quest_markers += ' +';
		//$('.quest_complete_count').append(' !');
	}
	if(new_repeatable_quests > 0)
	{
		quest_markers += ' <span class="repeatable">+</span>';
		//$('.quest_complete_count').append(' !');
	}
	if(complete_quests > 0)
	{
		quest_markers += ' !';
		//$('.quest_complete_count').append(' ?');
	}
	if(complete_repeatable_quests > 0)
	{
		quest_markers += ' <span class="repeatable">!</span>';
		//$('.quest_complete_count').append(' !');
	}
	return quest_markers;
}

function check_quests(type, target_id, progress){

	if(typeof(progress) == 'undefined')
	{
		progress = 1;
	}

	$.each(possible_quests, function(quest_id, quest) {


		if(typeof(gamedata['quest_progress'][quest_id]) != 'undefined' && gamedata['quest_progress'][quest_id]['status'] == 1)
		{
			var can_complete = true;

			if(type == 'kills')
			{
				$.each(quest['requirements']['kills'], function(key, amount) {
					if(key == target_id){
						if(typeof(gamedata['quest_progress'][quest_id]['requirements']['kills'][key]) == 'undefined')
						{
							gamedata['quest_progress'][quest_id]['requirements']['kills'][key] = 0;
						}
						if(gamedata['quest_progress'][quest_id]['requirements']['kills'][key] < amount)
						{
							gamedata['quest_progress'][quest_id]['requirements']['kills'][key] += progress;
							if(gamedata['quest_progress'][quest_id]['requirements']['kills'][key] > amount)
							{gamedata['quest_progress'][quest_id]['requirements']['kills'][key] = amount;}
							show_quest_message('<b>Quest progress!</b><br>' + quest['name'] + '<br/>' + available_units[key]['name'] + ': ' + gamedata['quest_progress'][quest_id]['requirements']['kills'][key] + ' / ' + amount, false);
							
						}
					}
				});
			}
			if(type == 'items')
			{
				$.each(quest['requirements']['items'], function(key, amount) {
					if(key == target_id){
						if(typeof(gamedata['inventory'][key]) == 'undefined')
						{
							gamedata['inventory'][key] = 0;
						}
						if(gamedata['inventory'][key] < amount)
						{
							var new_amount = gamedata['inventory'][key] + progress;
							if(new_amount > amount)
							{new_amount = amount;}
							show_quest_message('<b>Quest progress!</b><br>' + quest['name'] + '<br/>' + available_items[key]['name'] + ': ' + new_amount + ' / ' + amount, false);
							
						}
					}
				});
			}
			if(type == 'gear')
			{
				$.each(quest['requirements']['gear'], function(key, amount) {
					if(key == target_id){
						var gear_owned = count_gear_owned(key, true, amount, true);

						if(gear_owned <= amount)
						{
							var new_amount = gear_owned;
							if(new_amount > amount)
							{new_amount = amount;}
							show_quest_message('<b>Quest progress!</b><br>' + quest['name'] + '<br/>' + available_gear[key]['name'] + ': ' + new_amount + ' / ' + amount, false);
							
						}
					}
				});
			}
			if(type == 'waves_defeated')
			{
				if(quest['requirements']['waves_defeated'] != undefined)
				{
					if(quest['requirements']['waves_defeated']['location_id'] == gamedata['curent_location'] && quest['requirements']['waves_defeated']['level'] == gamedata['explore_level']){
						if(gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] < progress && progress <= quest['requirements']['waves_defeated']['amount'])
						{
							gamedata['quest_progress'][quest_id]['requirements']['waves_defeated'] = progress;
							show_quest_message('<b>Quest progress!</b><br>' + quest['name'] + '<br/>Waves defeated: ' + progress + ' / ' + quest['requirements']['waves_defeated']['amount'], false);
							
						}
					}
				}
			}
		}
	});

	saveToLocalStorage();
}

function show_quest_message(message, complete){
	var current_quest_counter = quest_message_counter;
	quest_message_counter++;
	var random_top = ((quest_message_counter - ((Math.floor(quest_message_counter / 4)) * 4)) * 75) + 30;
	if(complete == true){
		$('.main_window').append('<div id="quest_message_' + current_quest_counter + '" class="quest_message quest_complete" style="top:' + random_top + 'px">' + message + '</div>');
	}
	else
	{
		$('.main_window').append('<div id="quest_message_' + current_quest_counter + '" class="quest_message" style="top:' + random_top + 'px">' + message + '</div>');
	}
	setTimeout(function(){
		$('#quest_message_' + current_quest_counter).remove();
	},3000);
}

function check_completed_quests(){
	$.each(gamedata['quest_progress'], function(quest_id, quest_info) {
		if(quest_info['status'] == -2){
			$.each(possible_quests[quest_id]['explore_chain_bonusses'], function(location_id, bonus) {
				$.each(bonus, function(explore_level, bonus_amount) {
					if(typeof(gamedata['explore_chain_bonus'][location_id]) == 'undefined')
					{
						gamedata['explore_chain_bonus'][location_id] = {};
					}
					if(typeof(gamedata['explore_chain_bonus'][location_id][explore_level]) == 'undefined')
					{
						gamedata['explore_chain_bonus'][location_id][explore_level] = bonus_amount;

					}
					else
					{
						gamedata['explore_chain_bonus'][location_id][explore_level]['min'] = bonus_amount['min'];
						gamedata['explore_chain_bonus'][location_id][explore_level]['max'] = bonus_amount['max'];
					}

				});
			});
			if(possible_quests[quest_id]['unlocks_fight'] != undefined)
			{
				$.each(possible_quests[quest_id]['unlocks_fight'], function(fight_id, unlocked_fight) {
					gamedata['specific_fights'][fight_id] = copyobject(unlocked_fight);
				});
			}
		}
	});
}