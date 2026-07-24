var all_quests = {
	/*stinger:{
		name: 			'stinger',
		description: 	'Have allies deal damage to the enemy hero {AMOUNT} time(s).',
		image: 			"cards/dream_TradingCard-2023-03-12T074521.jpg",
		objective: 		'enemy_hero_damaged',
		min_amount: 	10,
		max_amount: 	20,
		rewards:{
			shard: 	5,
		},
		reward_per_amount:{
			scraps: 0.25,
		},
	},*/
};

var all_achievements = {
	alchemist:{
		name: 			'alchemist',
		description: 	'Play 10 potion cards in one battle.',
		card_image: 	'alchemist',
		objective: 		'potion_card_played_times',
		min_amount: 	10,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_alchemist',
				reward_amount: 		1
			},
		}
	},
	arcane_druid:{
		name: 			'arcane druid',
		description: 	'Have allies shoot 30 arcane bolts and cleanse 30 times in a single battle.',
		objectives: 	['ally_performed_arcane_bolts_total','ally_performed_cleanse_ally_total'],
		card_image: 	'arcane_druid',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		reset_if_incomplete: true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_arcane_druid',
				reward_amount: 		1
			},
		},
	},
	arrow_in_the_knee:{
		name: 			'arrow in the knee',
		description: 	'Shoot a guard with an arrow.',
		objective: 		'guard_affected_by_arrow',
		card_image: 	'archer',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_archer',
				reward_amount: 		1
			},
		},
	},
	as_the_crow_flies:{
		name: 			'as the crow flies',
		description: 	'Move a crow to a different slot.',
		objective: 		'crow_affected_by_move_ally',
		card_image: 	'crow',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_crow',
				reward_amount: 		1
			},
		},
	},
	blue_ooze:{
		name: 			'blue ooze',
		description: 	'Have allies apply 30 curse and poison and stun an enemy 30 times in a single battle.',
		objectives: 	['ally_performed_curse_total','ally_performed_poison_total','ally_performed_stun_total'],
		card_image: 	'blue_ooze',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		reset_if_incomplete: true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_blue_ooze',
				reward_amount: 		1
			},
		},
	},
	brew_master:{
		name: 			'brew master',
		description: 	'Add an additional use to a potion 20 times in one battle.',
		objective: 		'ally_performed_add_potion_use_total',
		card_image: 	'cauldron',
		min_amount: 	20,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'cup_of_blood',
				reward_amount: 		10
			},
			1:{
				reward_id: 			'card_back_cauldron',
				reward_amount: 		1
			},
		},
	},
	bunny_hop:{
		name: 			'bunny hop',
		description: 	'Have a bunny kill the enemy hero.',
		card_image: 	'bunny',
		objective: 		'enemy_hero_killed_by_named_bunny',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_bunny',
				reward_amount: 		1
			},
		}
	},
	clear_mind:{
		name: 			'clear mind',
		description: 	'Win a battle against an enemy at 100% power or stronger while there are no cards left in your deck.',
		card_image: 	'scribe',
		objective: 		'ally_deck_card_count_battle_end_won',
		max_amount: 	0,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_scribe',
				reward_amount: 		1
			},
		}
	},
	deadly_poison:{
		name: 			'deadly poison',
		description: 	'Kill 10 enemy creatures by quickening poison in one battle.',
		card_image: 	'bottle_of_poison',
		objective: 		'enemy_creature_killed_by_quicken_times',
		min_amount: 	10,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_bottle_of_poison',
				reward_amount: 		1
			},
		}
	},
	do_a_barrel_roll:{
		name: 			'do a barrel roll',
		description: 	'Pick up 20 floating rewards in one battle.',
		card_image: 	'rock_biter',
		objective: 		'claimed_pickup_total',
		min_amount: 	20,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'enchanted_net',
				reward_amount: 		10
			},
			1:{
				reward_id: 			'card_back_rock_biter',
				reward_amount: 		1
			},
		}
	},
	empty_tomb:{
		name: 			'empty tomb',
		description: 	'Win a battle against an enemy at 100% power or stronger with no cards in your grave.',
		card_image: 	'skeletal_soldier',
		objective: 		'ally_grave_card_count_battle_end_won',
		max_amount: 	0,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_skeletal_soldier',
				reward_amount: 		1
			},
		}
	},
	happy_ending:{
		name: 			'happy ending',
		description: 	'Win a battle against an enemy at 100% power or stronger at round 69.',
		card_image: 	'wanton_girl',
		objective: 		'battle_won_any_turn_count',
		min_amount: 	69,
		max_amount: 	69,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		10
			},
			1:{
				reward_id: 			'card_back_wanton_girl',
				reward_amount: 		1
			},
		}
	},
	king_of_peasants:{
		name: 			'king of peasants',
		description: 	'Gain 1000 peasants.',
		card_image: 	'crown',
		objective: 		'gained_card_peasant',
		amount: 		1000,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'crown',
				reward_amount: 		10
			},
			1:{
				reward_id: 			'card_back_crown',
				reward_amount: 		1
			},
		}
	},
	kings_gambit:{
		name: 			'king\'s gambit',
		description: 	'Have the rat king kill the enemy hero.',
		card_image: 	'rat_king',
		objective: 		'enemy_hero_killed_by_named_rat_king',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_rat_king',
				reward_amount: 		1
			},
		}
	},
	leet:{
		name: 			'leet',
		description: 	'Own exactly 1337 scraps.',
		card_image: 	'grinning_witch',
		objective: 		'scraps_owned',
		min_amount: 	1337,
		max_amount: 	1337,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'scraps',
				reward_amount: 		1337
			},
			1:{
				reward_id: 			'card_back_grinning_witch',
				reward_amount: 		1
			},
		}
	},
	leeroy_jenkins:{
		name: 			'Leeroy Jenkins',
		description: 	'Start a battle agains an enemy at 100% power or more with 0 cards in your deck.',
		card_image: 	'lone_charge',
		objective: 		'ally_deck_card_count_round_1',
		max_amount: 	0,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_lone_charge',
				reward_amount: 		1
			},
		}
	},
	nothing_to_see:{
		name: 			'nothing to see here, move along',
		description: 	'Set the card filters to \'NONE\'.',
		card_image: 	'warden',
		objective: 		'set_filters_to_none',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_warden',
				reward_amount: 		1
			},
		}
	},
	orange_ooze:{
		name: 			'orange ooze',
		description: 	'Have allies apply 30 burn and curse and stun an enemy 30 times in a single battle.',
		objectives: 	['ally_performed_curse_total','ally_performed_burn_total','ally_performed_stun_total'],
		card_image: 	'orange_ooze',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		reset_if_incomplete: true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_orange_ooze',
				reward_amount: 		1
			},
		},
	},
	rat_catcher:{
		name: 			'rat catcher',
		description: 	'Play 30 rat cards in one battle.',
		card_image: 	'rat_catcher',
		objective: 		'rat_card_played_times',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_rat_catcher',
				reward_amount: 		1
			},
		}
	},
	rat_symphony:{
		name: 			'rat symphony',
		description: 	'Defeat an enemy hero at 100% power or stronger with 5 ally rat flutes in play.',
		objective: 		'ally_card_ids_rat_flute_battle_end_won',
		card_image: 	'rat_flute',
		min_amount: 	5,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_rat_flute',
				reward_amount: 		1
			},
		},
	},
	risen_army:{
		name: 			'risen army',
		description: 	'Raise 15 undead from the grave in one battle.',
		objective: 		'ally_performed_raise_dead_total',
		card_image: 	'necromancer',
		min_amount: 	15,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_necromancer',
				reward_amount: 		1
			},
		},
	},
	scarecrow:{
		name: 			'scarecrow',
		description: 	'Use fear on a crow.',
		card_image: 	'cursed_scarecrow',
		objective: 		'crow_affected_by_fear',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_cursed_scarecrow',
				reward_amount: 1,
			},
		},
	},
	shieldman:{
		name: 			'shieldman',
		description: 	'Win a battle against a 100% power or stronger enemy while your hero has 10 shield or more.',
		objective: 		'ally_hero_armor_battle_end_won',
		card_image: 	'shieldman',
		min_amount: 	10,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_shieldman',
				reward_amount: 		1
			},
		},
	},
	skirmisher:{
		name: 			'skirmisher',
		description: 	'Have 30 ally units move themselves or an ally unit to your hand in a single battle.',
		objective: 		'ally_performed_retreat_total',
		card_image: 	'skirmisher',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_skirmisher',
				reward_amount: 		1
			},
		},
	},
	slime_arena:{
		name: 			'slime arena',
		description: 	'Defeat a slime hero at 100% power or stronger with a slime hero.',
		objective: 		'total_hero_card_subtypes_slime_battle_end_won',
		card_image: 	'slime_pit',
		min_amount: 	2,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_slime_pit',
				reward_amount: 		1
			},
		},
	},
	the_cheese_is_a_lie:{
		name: 			'the cheese is a lie',
		description: 	'Destroy an enemy cheese.',
		objective: 		'enemy_cheese_killed',
		card_image: 	'cheese',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_cheese',
				reward_amount: 		1
			},
		},
	},
	yellow_ooze:{
		name: 			'yellow ooze',
		description: 	'Have allies apply 30 burn and poison and stun an enemy 30 times in a single battle.',
		objectives: 	['ally_performed_burn_total','ally_performed_poison_total','ally_performed_stun_total'],
		card_image: 	'yellow_ooze',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		reset_if_incomplete: true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_yellow_ooze',
				reward_amount: 		1
			},
		},
	},
	walkabout:{
		name: 			'walkabout',
		description: 	'Have allies move to a different slot 30 times in one battle.',
		objective: 		'ally_performed_movement_total',
		card_image: 	'wanderer',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'golden_saddle',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_wanderer',
				reward_amount: 		1
			},
		},
	},
	walled:{
		name: 			'walled',
		description: 	'Play 30 wall cards in one battle.',
		card_image: 	'wall',
		objective: 		'wall_card_played_times',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_wall',
				reward_amount: 		1
			},
		}
	},
	warrior_duel:{
		name: 			'warrior duel',
		description: 	'Defeat a warrior hero at 100% power or stronger with a warrior hero.',
		objective: 		'total_hero_card_subtypes_warrior_battle_end_won',
		card_image: 	'war_banner',
		min_amount: 	2,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_war_banner',
				reward_amount: 		1
			},
		},
	},
	witchs_circle:{
		name: 			'witch\'s circle',
		description: 	'Play 30 witch cards in one battle.',
		card_image: 	'witchs_circle',
		objective: 		'witch_card_played_times',
		min_amount: 	30,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_witchs_circle',
				reward_amount: 		1
			},
		}
	},
}

var all_chained_achievements = {
	almost:{
		name: 			'almost',
		description: 	'Loose a battle while the enemy hero has 1 health left {AMOUNT} time(s).',
		objective: 		'battle_loss_any_health_left_1',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'rock_seer',
		steps: 			3,
		no_quest: 		true,
	},
	/*aquatic:{
		name: 			'aquatic',
		description: 	'Play or summon {AMOUNT} aquatic card(s).',
		objective: 		'aquatic_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'starfish',
		steps: 			6,
	},*/
	arcane:{
		name: 			'arcane',
		description: 	'Have allies shoot {AMOUNT} arcane bolt(s).',
		objective: 		'ally_performed_arcane_bolts',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'arcane_mage',
		steps: 			4,
	},
	arcane_storm:{
		name: 			'arcane storm',
		description: 	'Have allies fire {MIN_AMOUNT} arcane bolt(s) in a single battle.',
		objective: 		'ally_performed_arcane_bolts_total',
		min_amount: 	30,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'arcane_bolts',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},
	army:{
		name: 			'army',
		description: 	'Play {AMOUNT} creature card(s).',
		objective: 		'creature_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'peasant',
		steps: 			4,
	},
	arson:{
		name: 			'arson',
		description: 	'Have allies apply {MIN_AMOUNT} burn in a single battle.',
		objective: 		'ally_performed_burn_total',
		min_amount: 	30,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'eruption',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},
	attunement:{
		name: 			'attunement',
		description: 	'Have allies perform a magical ability {AMOUNT} time(s).',
		objective: 		'ally_performed_magical',
		amount: 		2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'arcane_tower',
		steps: 			4,
	},
	avoidance:{
		name: 			'avoidance',
		description: 	'Have allies avoid an enemy ability in any way {AMOUNT} time(s).',
		objective: 		'ally_performed_evade',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'fire_assassin',
		steps: 			4,
	},
	/*bless:{
		name: 			'bless',
		description: 	'Have allies apply a blessing {AMOUNT} time(s).',
		objective: 		'ally_performed_grant_bless',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'rune_of_blessings',
		steps: 			6,
	},
	bolster:{
		name: 			'bolster',
		description: 	'Have allies increase the health of an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_bolster',
		amount: 	1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'hearty_meal',
		steps: 			6,
	},*/
	bored:{
		name: 			'bored',
		description: 	'Defeat an enemy at 100% power or more no sooner then turn {MIN_AMOUNT}.',
		objective: 		'battle_won_any_turn_count',
		min_amount: 	80,
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'trove',
				reward_amount: 		1
			},
		},
		card_back: 		'twine',
		steps: 			4,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
	/*bureaucrat:{
		name: 			'bureaucrat',
		description: 	'Play or summon {AMOUNT} clerk card(s).',
		objective: 		'clerk_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'scribe',
		steps: 			6,
		no_quest: 		true,
	},*/
	burn:{
		name: 			'burn',
		description: 	'Have allies apply burn {AMOUNT} time(s).',
		objective: 		'ally_performed_burn',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'torchbearer',
		steps: 			4,
	},
	/*buy:{
		name: 			'buy',
		description: 	'Buy {AMOUNT} card(s) from a merchant.',
		objective: 		'buy_card_in_town',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'endless_pouch',
		steps: 			6,
		no_quest: 		true,
	},*/
	chester:{
		name: 			'chester',
		description: 	'Open {AMOUNT} chest(s).',
		objective: 		'used_consumable_chest',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'chest',
		steps: 			4,
		no_quest: 		true,
	},
	city:{
		name: 			'city',
		description: 	'Play {AMOUNT} structure card(s).',
		objective: 		'structure_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'house',
		steps: 			4,
	},
	clergy:{
		name: 			'clergy',
		description: 	'Play or summon {AMOUNT} cleric card(s).',
		objective: 		'cleric_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'death_cleric',
		steps: 			4,
		no_quest: 		true,
	},
	close_call:{
		name: 			'close call',
		description: 	'Win a battle while your hero has 1 health left {AMOUNT} time(s).',
		objective: 		'battle_won_any_health_left_1',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'seer',
		steps: 			3,
		no_quest: 		true,
	},
	conscription:{
		name: 			'conscription',
		description: 	'Play or summon {AMOUNT} creature card(s) in a single battle.',
		objective: 		'creature_card_played_times',
		min_amount: 	10,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'conscription',
		steps: 			4,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
	/*crafter:{
		name: 			'crafter',
		description: 	'Craft a card {AMOUNT} time(s).',
		objective: 		'craft_card_of_value',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'carpenter',
		steps: 			5,
	},*/
	curse:{
		name: 			'curse',
		description: 	'Have allies apply a curse {AMOUNT} time(s).',
		objective: 		'ally_performed_curse',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'cursed_talisman',
		steps: 			4,
	},
	/*dancer:{
		name: 			'dancer',
		description: 	'Have allies move to a different slot {AMOUNT} time(s).',
		objective: 		'ally_performed_movement',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'runner',
		steps: 			6,
	},*//*
	dark_fate:{
		name: 			'dark fate',
		description: 	'Have allies apply {MIN_AMOUNT} doom in a single battle.',
		objective: 		'ally_performed_doom_total',
		min_amount: 	30,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dark_fate',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},*/
	demolisher:{
		name: 			'demolisher',
		description: 	'Destroy {AMOUNT} enemy structure(s).',
		objective: 		'enemy_structure_killed',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'hammer',
		steps: 			4,
	},
	/*discard:{
		name: 			'discard',
		description: 	'Make the enemy discard a card {AMOUNT} time(s).',
		objective: 		'ally_performed_discard_enemy',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'mind_leak',
		steps: 			6,
	},
	divine_blessing:{
		name: 			'divine blessing',
		description: 	'Have allies apply {MIN_AMOUNT} blessing(s) in a single battle.',
		objective: 		'ally_performed_grant_bless_total',
		min_amount: 	30,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'divine_blessing',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},*/
	/*doom:{
		name: 			'doom',
		description: 	'Have allies apply doom {AMOUNT} time(s).',
		objective: 		'ally_performed_doom',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'seer',
		steps: 			6,
	},*/
	/*dragon:{
		name: 			'dragon',
		description: 	'Play or summon {AMOUNT} dragon card(s).',
		objective: 		'dragon_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'trove',
				reward_amount: 		1
			},
		},
		card_back: 		'blue_dragon',
		steps: 			6,
		no_quest: 		true,
	},*/
	draw:{
		name: 			'draw',
		description: 	'Have allies draw an additional card {AMOUNT} time(s).',
		objective: 		'ally_performed_draw_cards',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'messenger',
		steps: 			4,
		no_quest: 		true,
	},
	/*duelist:{
		name: 			'duelist',
		description: 	'Have allies counter a melee ability {AMOUNT} time(s).',
		objective: 		'ally_performed_counter',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'duelist',
		steps: 			6,
		no_quest: 		true,
	},
	elvish:{
		name: 			'elvish',
		description: 	'Play or summon {AMOUNT} elf card(s).',
		objective: 		'elf_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'elf',
		steps: 			6,
	},*/
	empower:{
		name: 			'empower',
		description: 	'Have allies empower an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_empower_any',
		amount: 	1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'sword',
		steps: 			4,
	},
	/*eternal:{
		name: 			'eternal',
		description: 	'Have allies return {AMOUNT} card(s) from your grave to your deck.',
		objective: 		'ally_performed_move_ally_to_deck_from_grave',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'raise_dead',
		steps: 			6,
	},
	fairy_queen:{
		name: 			'fairy queen',
		description: 	'Play or summon {AMOUNT} fairy card(s).',
		objective: 		'fairy_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'fairy',
		steps: 			6,
	},*/
	fear:{
		name: 			'fear',
		description: 	'Have allies return an enemy to their hand {AMOUNT} time(s).',
		objective: 		'ally_performed_move_enemy_to_hand',
		amount: 	0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'scarecrow',
		steps: 			4,
		no_quest: 		true,
	},
	/*fire:{
		name: 			'fire',
		description: 	'Have allies perform a fire ability {AMOUNT} time(s).',
		objective: 		'ally_performed_fire',
		amount: 	1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'fire_mage',
		steps: 			6,
	},*/
	flare:{
		name: 			'flare',
		description: 	'Play {AMOUNT} spell card(s) in a single battle.',
		objective: 		'spell_card_played_times',
		min_amount: 	10,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'ignite',
		steps: 			4,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
	/*fly:{
		name: 			'fly',
		description: 	'Have allies evade an attack by flying {AMOUNT} time(s).',
		objective: 		'ally_performed_flying',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'hawk',
		steps: 			6,
	},
	forecaster:{
		name: 			'forecaster',
		description: 	'Play {AMOUNT} weather card(s).',
		objective: 		'weather_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'hurricane',
		steps: 			6,
	},*/
	fortify:{
		name: 			'fortify',
		description: 	'Have allies shield an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_fortify',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'shield',
		steps: 			4,
	},
	/*frost:{
		name: 			'frost',
		description: 	'Have allies perform a cold ability {AMOUNT} time(s).',
		objective: 		'ally_performed_cold',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'frost_mage',
		steps: 			6,
	},*/
	garden:{
		name: 			'garden',
		description: 	'Play or summon {AMOUNT} plant card(s).',
		objective: 		'plant_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'meadow',
		steps: 			4,
	},
	/*gnomeling:{
		name: 			'gnomeling',
		description: 	'Play or summon {AMOUNT} gnome card(s).',
		objective: 		'gnome_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'gnomeling',
		steps: 			6,
	},
	goblin_master:{
		name: 			'goblin master',
		description: 	'Play or summon {AMOUNT} goblin card(s).',
		objective: 		'goblin_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'goblin',
		steps: 			6,
	},
	golemancer:{
		name: 			'golemancer',
		description: 	'Play or summon {AMOUNT} golem card(s).',
		objective: 		'golem_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dreadnought',
		steps: 			6,
	},*/
	greed:{
		name: 			'greed',
		description: 	'Own at least {MIN_AMOUNT} scraps.',
		objective: 		'scraps_owned',
		min_amount: 	10,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'scraps_placeholder',
		steps: 			4,
		step_effect: 	'min_amount',
		no_quest: 		true,
	},
	guard:{
		name: 			'guard',
		description: 	'Have allies guard {AMOUNT} time(s).',
		objective: 		'ally_performed_guard_now',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'guard',
		steps: 			6,
	},
	hasten:{
		name: 			'hasten',
		description: 	'Have allies hasten a card {AMOUNT} time(s).',
		objective: 		'ally_performed_hasten',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'magic_dust',
		steps: 			4,
	},
	/*hunger:{
		name: 			'hunger',
		description: 	'Have allies feast or leech {AMOUNT} time(s).',
		objective: 		'ally_performed_feast',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'hungry_wolf',
		steps: 			6,
	},*/
	healing:{
		name: 			'healing',
		description: 	'Have allies heal themselves or allies {AMOUNT} time(s).',
		objective: 		'ally_performed_healing',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'well',
		steps: 			4,
	},
	heavy_drinker:{
		name: 			'heavy drinker',
		description: 	'Use a potion {AMOUNT} time(s).',
		objective: 		'ally_performed_drink_potion',
		amount: 		0.2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'pure_potion',
		steps: 			4,
	},
	heavy_hitter: {
		name: 			'heavy hitter',
		description: 	'Deal {MIN_AMOUNT} or more damage to an enemy in one hit.',
		objective: 		'dealt_damage',
		min_amount: 	10,
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'village_defender',
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	4,
		no_quest: 		true,
	},
	/*heist:{
		name: 			'heist',
		description: 	'Have allies steal an artifact {AMOUNT} time(s).',
		objective: 		'ally_performed_steal',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		2
			},
		},
		card_back: 		'thief',
		steps: 			6,
		no_quest: 		true,
	},*/
	/*homebound:{
		name: 			'homebound',
		description: 	'Have {AMOUNT} card(s) return to your hand from play.',
		objective: 		'ally_performed_move_ally_to_hand',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'pigeon',
		steps: 			6,
	},*/
	humane:{
		name: 			'humane',
		description: 	'Play or summon {AMOUNT} human card(s).',
		objective: 		'human_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'high_witch',
		steps: 			4,
	},
	/*imp_lord:{
		name: 			'imp lord',
		description: 	'Play or summon {AMOUNT} imp card(s).',
		objective: 		'imp_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'imp_lord',
		steps: 			6,
	},*/
	killer:{
		name: 			'killer',
		description: 	'Kill {AMOUNT} enemy creature(s).',
		objective: 		'enemy_creature_killed',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'poison_fever',
		steps: 			4,
	},
	loss:{
		name: 			'loss',
		description: 	'Loose a battle {AMOUNT} time(s).',
		objective: 		'battle_loss_any',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'spike_trap',
		steps: 			4,
		no_quest: 		true,
	},
	mage:{
		name: 			'mage',
		description: 	'Play or summon {AMOUNT} mage card(s).',
		objective: 		'mage_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'apprentice',
		steps: 			4,
	},
	magician:{
		name: 			'magician',
		description: 	'Play {AMOUNT} spell card(s).',
		objective: 		'spell_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'scroll',
		steps: 			4,
	},
	martyr:{
		name: 			'martyr',
		description: 	'Have {AMOUNT} ally creature(s) die.',
		objective: 		'ally_creature_killed',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'plague_skeleton',
		steps: 			4,
	},
	mason:{
		name: 			'mason',
		description: 	'Play or summon {AMOUNT} structure card(s) in a single battle.',
		objective: 		'structure_card_played_times',
		min_amount: 	10,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'carpenter',
		steps: 			4,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
	merchant:{
		name: 			'merchant',
		description: 	'Earn {AMOUNT} scrap(s).',
		objective: 		'gained_scraps',
		amount: 		10,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'thief',
		steps: 			4,
	},
	/*mouldy:{
		name: 			'mouldy',
		description: 	'Play or summon {AMOUNT} fungal card(s).',
		objective: 		'fungus_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'sporeling',
		steps: 			6,
	},
	munchies:{
		name: 			'munchies',
		description: 	'Play or summon {AMOUNT} food card(s).',
		objective: 		'food_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'fastfood',
		steps: 			6,
	},*/
	mundane:{
		name: 			'mundane',
		description: 	'Have allies perform a physical ability {AMOUNT} time(s).',
		objective: 		'ally_performed_physical',
		amount: 		2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'thug',
		steps: 			4,
	},
	museum:{
		name: 			'museum',
		description: 	'Play or summon {AMOUNT} artifact card(s).',
		objective: 		'artifact_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dagger',
		steps: 			4,
	},
	/*plated:{
		name: 			'plated',
		description: 	'Have allies reduce damage with plated {AMOUNT} time(s).',
		objective: 		'ally_performed_plated',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'soldier',
		steps: 			6,
	},*/
	plunder:{
		name: 			'plunder',
		description: 	'Have allies destroy an artifact or demolish a structure {AMOUNT} time(s).',
		objective: 		'ally_performed_break',
		amount: 		0.2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'breaking_ray',
		steps: 			4,
	},
	poison:{
		name: 			'poison',
		description: 	'Have allies apply poison {AMOUNT} time(s).',
		objective: 		'ally_performed_poison',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'plague_rat',
		steps: 			4,
	},
	pure:{
		name: 			'pure',
		description: 	'Have allies purify an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_cleanse_ally',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'herbs',
		steps: 			4,
	},
	quick:{
		name: 			'quick',
		description: 	'Defeat an enemy at 100% power or more no later then turn {MAX_AMOUNT}.',
		objective: 		'battle_won_any_turn_count',
		max_amount: 	30,
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'trove',
				reward_amount: 		1
			},
		},
		card_back: 		'scorpion',
		steps: 			5,
		step_effect: 	'max_amount',
		step_amount: 	-5,
		no_quest: 		true,
	},
	/*resist_magic:{
		name: 			'resist magic',
		description: 	'Have allies resist magic damage {AMOUNT} time(s).',
		objective: 		'ally_performed_resist_magic',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'elf_youngster',
		steps: 			6,
	},*/
	resurrect:{
		name: 			'resurrect',
		description: 	'Have allies resurrect {AMOUNT} time(s).',
		objective: 		'ally_performed_resurrect',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'skeleton',
		steps: 			4,
	},
	/*ritualist:{
		name: 			'ritualist',
		description: 	'Play {AMOUNT} ritual card(s).',
		objective: 		'ritual_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'impending_doom',
		steps: 			6,
	},*/
	rogue:{
		name: 			'rogue',
		description: 	'Play or summon {AMOUNT} rogue card(s).',
		objective: 		'rogue_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'rogue',
		steps: 			4,
	},
	runner:{
		name: 			'runner',
		description: 	'Have allies run away {AMOUNT} time(s).',
		objective: 		'ally_performed_run_away',
		amount: 		0.8,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'runner',
		steps: 			4,
	},/*
	saboteur:{
		name: 			'saboteur',
		description: 	'Destroy {AMOUNT} enemy structure(s) with your hero.',
		objective: 		'enemy_structure_killed_by_hero',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 'saboteur',
		steps: 		6,
	},
	sacrifice:{
		name: 			'sacrifice',
		description: 	'Have allies sacrifice or consume an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_sacrifice_ally',
		amount: 		0.2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dark_sacrifice',
		steps: 			6,
	},*/
	scavanger:{
		name: 			'scavenger',
		description: 	'Claim {AMOUNT} floating pickup reward(s).',
		objective: 		'claimed_pickup',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'enchanted_net',
				reward_amount: 		1
			},
		},
		card_back: 		'miner',
		steps: 			4,
	},
	sell:{
		name: 			'sell',
		description: 	'Sell {AMOUNT} card(s) to a merchant.',
		objective: 		'sell_card_in_town',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'thieves_cloak',
		steps: 			4,
		no_quest: 		true,
	},
	shards:{
		name: 			'shards',
		description: 	'Collect {AMOUNT} shard(s).',
		objective: 		'gained_card_shard',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'shard',
		steps: 			3,
		no_quest: 		true,
	},
	slaughter:{
		name: 			'slaughter',
		description: 	'Kill {AMOUNT} enemy creature(s) with your hero.',
		objective: 		'enemy_creature_killed_by_hero',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dark_night',
		steps: 			4,
	},
	/*slow:{
		name: 			'slow',
		description: 	'Have allies slow an enemy card {AMOUNT} time(s).',
		objective: 		'ally_performed_slow_enemy',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'paperwork',
		steps: 			6,
	},*/
	slimy:{
		name: 			'slimy',
		description: 	'Play or summon {AMOUNT} slime card(s).',
		objective: 		'slime_card_played',
		amount: 		0.4,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'slimeling',
		steps: 			4,
	},
	stasher:{
		name: 			'stasher',
		description: 	'Open {AMOUNT} stashes.',
		objective: 		'used_consumable_stash',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'stash',
		steps: 			4,
		no_quest: 		true,
	},
	/*stealth:{
		name: 			'stealth',
		description: 	'Have allies evade an attack using stealth {AMOUNT} time(s).',
		objective: 		'ally_performed_use_stealth',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'scout',
		steps: 			6,
		no_quest: 		true,
	},*/
	stinger:{
		name: 			'stinger',
		description: 	'Have allies deal exactly 1 damage to the enemy hero {AMOUNT} time(s).',
		objective: 		'enemy_hero_damaged',
		min_amount: 	1,
		max_amount: 	1,
		amount: 		10,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'toad',
		steps: 			4,
		no_quest: 		true,
	},
	striker:{
		name: 			'striker',
		description: 	'Have allies perform a melee ability {AMOUNT} time(s).',
		objective: 		'ally_performed_melee',
		amount: 		2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'horse',
		steps: 			4,
	},
	stun:{
		name: 			'stun',
		description: 	'Have allies stun an enemy {AMOUNT} time(s).',
		objective: 		'ally_performed_stun',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'trapper',
		steps: 			4,
	},
	/*summoner:{
		name: 			'summoner',
		description: 	'Defeat a summoned enemy {AMOUNT} time(s).',
		objective: 		'battle_won_summoned',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'swordsman',
		steps: 			6,
	},*/
	/*tactician:{
		name: 			'tactician',
		description: 	'Play {AMOUNT} tactic card(s).',
		objective: 		'tactic_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'battle_plans',
		steps: 			6,
	},
	take_aim:{
		name: 			'take aim',
		description: 	'Have allies fire {AMOUNT} projectile(s).',
		objective: 		'ally_performed_projectile',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'archer',
		steps: 			6,
	},
	thorny:{
		name: 			'thorny',
		description: 	'Have allies deal damage with thorns {AMOUNT} time(s).',
		objective: 		'ally_performed_thorns',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'spike_pod',
		steps: 			6,
	},*/
	tie:{
		name: 			'tie',
		description: 	'Have a battle end with both heroes at 0 health {AMOUNT} time(s).',
		objective: 		'battle_tie_any',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'hideout',
		steps: 			3,
		no_quest: 		true,
	},
	toxic_cloud:{
		name: 			'toxic cloud',
		description: 	'Have allies apply {MIN_AMOUNT} poison in a single battle.',
		objective: 		'ally_performed_poison_total',
		min_amount: 	30,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'poison_gas',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},
	trover:{
		name: 			'trover',
		description: 	'Open {AMOUNT} trove(s).',
		objective: 		'used_consumable_trove',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'trove',
				reward_amount: 		1
			},
		},
		card_back: 		'trove',
		steps: 			4,
		no_quest: 		true,
	},
	unholy_rite:{
		name: 			'unholy rite',
		description: 	'Have allies apply {MIN_AMOUNT} curse in a single battle.',
		objective: 		'ally_performed_curse_total',
		min_amount: 	30,
		amount: 		1,
		hide_amount: 	true,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dark_tower',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},
	victory:{
		name: 			'victory',
		description: 	'Win {AMOUNT} battle(s).',
		objective: 		'battle_won_any',
		amount: 		0.2,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'blossom',
		steps: 			4,
	},
	/*walled:{
		name: 			'walled',
		description: 	'Play or summon {AMOUNT} wall card(s).',
		objective: 		'wall_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'wall',
		steps: 			6,
	},*/
	/*warder:{
		name: 			'warder',
		description: 	'Have allies counter a spell {AMOUNT} time(s).',
		objective: 		'ally_performed_counter_spell',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'warder',
		steps: 			6,
	},
	wave_crasher:{
		name: 			'wave crasher',
		description: 	'Defeat wave number {MIN_AMOUNT}.',
		objective: 		'battle_won_number_wave',
		min_amount: 	5,
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'wall_of_water',
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	5,
		no_quest: 		true,
	},
	waves:{
		name: 			'waves',
		description: 	'Defeat {AMOUNT} wave(s).',
		objective: 		'battle_won_wave',
		amount: 		0.4,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
		},
		card_back: 		'phoenix',
		steps: 			6,
	},*/
	warrior:{
		name: 			'warrior',
		description: 	'Play or summon {AMOUNT} warrior card(s).',
		objective: 		'warrior_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'swordsman',
		steps: 			4,
	},
	witch:{
		name: 			'witch',
		description: 	'Play or summon {AMOUNT} witch card(s).',
		objective: 		'witch_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'witch',
		steps: 			4,
	},
	/*withering:{
		name: 			'withering',
		description: 	'Have allies reduce the maximum health of something {AMOUNT} time(s).',
		objective: 		'ally_performed_wither',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'autumn_witch',
		steps: 			6,
	},*/
	zombie:{
		name: 			'zombie',
		description: 	'Play or summon {AMOUNT} undead card(s).',
		objective: 		'undead_card_played',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'skeletal_guard',
		steps: 			4,
	},
	zoo:{
		name: 			'zoo',
		description: 	'Play or summon {AMOUNT} animal card(s).',
		objective: 		'animal_card_played',
		amount: 		0.75,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'badger',
		steps: 			4,
	},
}

var achievement_card_backs = {};

eachoa(all_achievements, function(achievement_id, achievement_info){
	if(achievement_info['image'] == undefined && achievement_info['card_image'] != undefined && all_available_cards[achievement_info['card_image']] != undefined)
	{
		achievement_info['image'] = all_available_cards[achievement_info['card_image']]['image'];
		achievement_info['image_position'] = all_available_cards[achievement_info['card_image']]['image_position'];
	}
});


eachoa(all_chained_achievements, function(achievement_id, achievement_info){
	if(achievement_info['min_amount'] == undefined && achievement_info['max_amount'] == undefined){all_chained_achievements[achievement_id]['amount'] *= 10;achievement_info['amount'] = all_chained_achievements[achievement_id]['amount'];}
	var steps = 5;
	if(achievement_info['steps'] != undefined){steps = achievement_info['steps'];}
	if(achievement_info['image'] == undefined && achievement_info['card_back'] != undefined && all_available_cards[achievement_info['card_back']] != undefined){achievement_info['image'] = all_available_cards[achievement_info['card_back']]['image'];}
	if(achievement_info['image_position'] == undefined && achievement_info['card_back'] != undefined && all_available_cards[achievement_info['card_back']] != undefined && all_available_cards[achievement_info['card_back']]['image_position'] != undefined){achievement_info['image_position'] = all_available_cards[achievement_info['card_back']]['image_position'];}
	if(achievement_info['step_effect'] == undefined){achievement_info['step_effect'] = 'amount';}
	var amount = achievement_info[achievement_info['step_effect']] + 0;
	var reward_amount = achievement_info['rewards'][0]['reward_amount'];
	var needs_completed = {};
	for (var i = 1; i <= steps; i++) {
		all_achievements[achievement_id + '_' + i] = true_copyobject(achievement_info);
		if(steps > 1)
		{
			all_achievements[achievement_id + '_' + i]['name'] += ' ' + romanize(i);
		}
		all_achievements[achievement_id + '_' + i]['needs_completed'] = true_copyobject(needs_completed);
		needs_completed[achievement_id + '_' + i] = true;

		/*if(i == 1){all_achievements[achievement_id + '_' + i]['name'] += ' I';}
		if(i == 2){all_achievements[achievement_id + '_' + i]['name'] += ' II';}
		if(i == 3){all_achievements[achievement_id + '_' + i]['name'] += ' III';}
		if(i == 4){all_achievements[achievement_id + '_' + i]['name'] += ' IV';}
		if(i == 5){all_achievements[achievement_id + '_' + i]['name'] += ' V';}
		if(i == 6){all_achievements[achievement_id + '_' + i]['name'] += ' VI';}*/
		all_achievements[achievement_id + '_' + i][achievement_info['step_effect']] = amount;
		var description = all_achievements[achievement_id + '_' + i]['description'] + '';
		all_achievements[achievement_id + '_' + i]['description'] = check_plural(description.split("{AMOUNT}").join(numberWithCommas(Math.ceil(amount))),amount);
		if(all_achievements[achievement_id + '_' + i]['min_amount'] != undefined)
		{
			description = all_achievements[achievement_id + '_' + i]['description'] + '';
			var min_amount = all_achievements[achievement_id + '_' + i]['min_amount'];
			all_achievements[achievement_id + '_' + i]['description'] = check_plural(description.split("{MIN_AMOUNT}").join(numberWithCommas(Math.ceil(min_amount))),min_amount);
		}
		if(all_achievements[achievement_id + '_' + i]['max_amount'] != undefined)
		{
			description = all_achievements[achievement_id + '_' + i]['description'] + '';
			var max_amount = all_achievements[achievement_id + '_' + i]['max_amount'];
			all_achievements[achievement_id + '_' + i]['description'] = check_plural(description.split("{MAX_AMOUNT}").join(numberWithCommas(Math.ceil(max_amount))),max_amount);
		}
		if(all_achievements[achievement_id + '_' + i]['step_amount'] != undefined)
		{
			amount += all_achievements[achievement_id + '_' + i]['step_amount'];
		}
		else
		{
			amount *= 10;
		}
		
		eachoa(all_achievements[achievement_id + '_' + i]['rewards'], function(reward_id, reward_info){
			all_achievements[achievement_id + '_' + i]['rewards'][reward_id]['reward_amount'] = reward_amount;
		});
		/*if(i == 1){all_achievements[achievement_id + '_' + i]['rewards'][0]['reward_amount'] = 10;}
		if(i == 2){all_achievements[achievement_id + '_' + i]['rewards'][0]['reward_amount'] = 20;}
		if(i == 3){all_achievements[achievement_id + '_' + i]['rewards'][0]['reward_amount'] = 50;}
		if(i == 4){all_achievements[achievement_id + '_' + i]['rewards'][0]['reward_amount'] = 100;}
		if(i == 5){all_achievements[achievement_id + '_' + i]['rewards'][0]['reward_amount'] = 200;}
		if(i == 6){all_achievements[achievement_id + '_' + i]['rewards'][0]['reward_amount'] = 500;}*/
		if(i == steps)
		{
			if(achievement_info['card_back'] != undefined)
			{
				if(typeof(achievement_info['card_back']) == 'string')
				{
					all_achievements[achievement_id + '_' + i]['rewards'][get_highest_key_in_object(all_achievements[achievement_id + '_' + i]['rewards']) + 1] = {reward_id: 			'card_back_' + achievement_info['card_back'],reward_amount:1};
				}
				else
				{
					eachoa(achievement_info['card_back'], function(useless_id, card_back_id){
						all_achievements[achievement_id + '_' + i]['rewards'][get_highest_key_in_object(all_achievements[achievement_id + '_' + i]['rewards']) + 1] = {reward_id: 			'card_back_' + card_back_id,reward_amount:1};
					});
				}
			}
			if(achievement_info['card'] != undefined)
			{
				all_achievements[achievement_id + '_' + i]['rewards'][get_highest_key_in_object(all_achievements[achievement_id + '_' + i]['rewards']) + 1] = {reward_id: 			achievement_info['card'],reward_amount:1};
			}
		}
		reward_amount *= 2;
	};
	if(all_quests[achievement_id] == undefined && achievement_info['no_quest'] == undefined)
	{
		var quest_amount = achievement_info['amount'] * 1;
		/*if(quest_amount > 1)
		{
			quest_amount = 1 + (quest_amount / 10);
		}*/
		all_quests[achievement_id] = {
			name: 			achievement_info['name'],
			description: 	achievement_info['description'],
			image: 			achievement_info['image'],
			objective: 		achievement_info['objective'],
			min_amount: 	Math.ceil(quest_amount * 1),
			max_amount: 	Math.ceil(quest_amount * 2),
			rewards:{
				shard: 		5,
				//scraps: 		1,
			},
			reward_per_amount:{
				//peasant: 		(0.25 / quest_amount),
				scraps: 		(10 / quest_amount),
			}
		}
	}
});

all_achievements = sortObj(all_achievements);


eachoa(all_achievements, function(achievement_id, achievement_info){
	eachoa(achievement_info['rewards'], function(achievement_reward_id, reward_info){
		if(reward_info['reward_id'] != undefined && all_available_cards[reward_info['reward_id']] != undefined && all_available_cards[reward_info['reward_id']]['type'] == 'cardback')
		{
			achievement_card_backs[reward_info['reward_id']] = true;
		}
	});
});