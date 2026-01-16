possible_quests['learn_planks'] = {
	name: 			'From timber to planks',
	description: 	'One of the loggers can teach you how to saw planks. If you supply the camp.',
	location_id: 	2,
	location_level: 4,
	from_quest: 	0,
	single_use: 	true,
	requirements:{
		items:{
	 			timber: 	25,
	 			bread: 		10,
	 			cloth: 		10,
	 			leather: 	100,
	 			nails: 		25
	 	},
	},
	rewards:{
		0:{
			reward_type:	'recipe',
			reward_id: 		'plank',
			reward_amount: 	1,
		},
	},
	location_upgrades:{
	},
	unlocks_fight:{
	},
	explore_chain_bonusses:{
	},
	unit_xp: 		100
};