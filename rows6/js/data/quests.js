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
		card_image: 	'archer_tower',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_archer_tower',
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
	do_a_barrel_roll:{
		name: 			'do a barrel roll',
		description: 	'Pick up 20 floating rewards in one battle.',
		card_image: 	'scavenger',
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
				reward_id: 			'card_back_scavenger',
				reward_amount: 		1
			},
		}
	},
	falconer:{
		name: 			'falconer',
		description: 	'Kill an anemy bunny with a falcon.',
		card_image: 	'falcon',
		objective: 		'enemy_bunny_killed_by_falcon',
		max_amount: 	0,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_falcon',
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
	leet:{
		name: 			'leet',
		description: 	'Own exactly 1337 scraps.',
		card_image: 	'blaze',
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
				reward_id: 			'card_back_blaze',
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
		description: 	'Win a battle against a 100% power or stronger enemy while your hero has 25 shield or more.',
		objective: 		'ally_hero_armor_battle_end_won',
		card_image: 	'shieldman',
		min_amount: 	25,
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
		card_image: 	'stone_wall',
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
				reward_id: 			'card_back_stone_wall',
				reward_amount: 		1
			},
		}
	},
	warrior_duel:{
		name: 			'warrior duel',
		description: 	'Defeat a warrior hero at 100% power or stronger with a warrior hero.',
		objective: 		'total_hero_card_subtypes_warrior_battle_end_won',
		card_image: 	'dark_knight',
		min_amount: 	2,
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 			'chest',
				reward_amount: 		1
			},
			1:{
				reward_id: 			'card_back_dark_knight',
				reward_amount: 		1
			},
		},
	},
	when_pigs_fly:{
		name: 			'when pigs fly',
		description: 	'Make a boar fly.',
		card_image: 	'wild_boar',
		objective: 		'wild_boar_affected_by_grant_flying',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_wild_boar',
				reward_amount: 1,
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
		card_back: 		'seer',
		steps: 			3,
		no_quest: 		true,
	},
	arcane:{
		name: 			'arcane',
		description: 	'Have allies shoot {AMOUNT} arcane bolt(s).',
		objective: 		'ally_performed_arcane_bolts',
		amount: 		1.5,
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
		amount: 		0.75,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'assassin',
		steps: 			4,
	},
	bolster:{
		name: 			'bolster',
		description: 	'Have allies increase the health of an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_bolster',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'baker',
		steps: 			4,
	},
	bureaucrat:{
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
		steps: 			4,
	},
	burn:{
		name: 			'burn',
		description: 	'Have allies apply burn {AMOUNT} time(s).',
		objective: 		'ally_performed_burn',
		amount: 		1.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'flame_archer',
		steps: 			4,
	},
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
		card_back: 		'cow',
		steps: 			4,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
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
		amount: 		0.75,
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
		card_back: 		'abbot',
		steps: 			4,
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
		card_back: 		'hideout',
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
	curse:{
		name: 			'curse',
		description: 	'Have allies apply a curse {AMOUNT} time(s).',
		objective: 		'ally_performed_curse',
		amount: 		1.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'dark_night',
		steps: 			4,
	},
	dancer:{
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
		card_back: 		'volcano_dancer',
		steps: 			4,
	},
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
		card_back: 		'bad_omen',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},
	doom:{
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
		card_back: 		'astrologer',
		steps: 			4,
	},
	demolisher:{
		name: 			'demolisher',
		description: 	'Destroy {AMOUNT} enemy structure(s).',
		objective: 		'enemy_structure_killed',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'miner',
		steps: 			4,
	},
	empower:{
		name: 			'empower',
		description: 	'Have allies empower an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_empower_any',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'forge_tools',
		steps: 			4,
	},
	fear:{
		name: 			'fear',
		description: 	'Have allies return an enemy to their hand {AMOUNT} time(s).',
		objective: 		'ally_performed_move_enemy_to_hand',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'creepy_mask',
		steps: 			4,
		no_quest: 		true,
	},
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
	fortify:{
		name: 			'fortify',
		description: 	'Have allies shield an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_fortify',
		amount: 		1.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'armorer',
		steps: 			4,
	},
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
	hasten:{
		name: 			'hasten',
		description: 	'Have allies hasten a card {AMOUNT} time(s).',
		objective: 		'ally_performed_hasten',
		amount: 		1.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'mana_beetle',
		steps: 			4,
	},
	heavy_drinker:{
		name: 			'heavy drinker',
		description: 	'Play a potion card {AMOUNT} time(s).',
		objective: 		'potion_card_played',
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
		card_back: 		'wombat',
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	4,
		no_quest: 		true,
	},
	homebound:{
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
		card_back: 		'recall_stone',
		steps: 			4,
	},
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
		card_back: 		'beggar',
		steps: 			4,
	},
	killer:{
		name: 			'killer',
		description: 	'Kill {AMOUNT} enemy creature(s).',
		objective: 		'enemy_creature_killed',
		amount: 		0.75,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'rampaging_giant',
		steps: 			4,
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
		card_back: 		'eager_cadet',
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
		card_back: 		'pile_of_junk',
		steps: 			4,
	},
	poison:{
		name: 			'poison',
		description: 	'Have allies apply poison {AMOUNT} time(s).',
		objective: 		'ally_performed_poison',
		amount: 		1.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'adder',
		steps: 			4,
	},
	plunder:{
		name: 			'plunder',
		description: 	'Have allies destroy an artifact or demolish a structure {AMOUNT} time(s).',
		objective: 		'ally_performed_break',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'breaking_ray',
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
		card_back: 		'barber',
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
	ritualist:{
		name: 			'ritualist',
		description: 	'Play {AMOUNT} ritual card(s).',
		objective: 		'ritual_card_played',
		amount: 		0.75,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'soul_harvest',
		steps: 			4,
	},
	saboteur:{
		name: 			'saboteur',
		description: 	'Destroy {AMOUNT} enemy structure(s) with your hero.',
		objective: 		'enemy_structure_killed_by_hero',
		amount: 		0.25,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 'rock_biter',
		steps: 		4,
	},
	scavanger:{
		name: 			'scavenger',
		description: 	'Claim {AMOUNT} floating pickup reward(s).',
		objective: 		'claimed_pickup',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'enchanted_net',
				reward_amount: 		1
			},
		},
		card_back: 		'enchanted_net',
		steps: 			4,
	},
	sell:{
		name: 			'sell',
		description: 	'Sell {AMOUNT} card(s) to a merchant.',
		objective: 		'sell_card_in_town',
		amount: 		0.1,
		rewards:{
			0:{
				reward_id: 			'thieves_cloak',
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
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'attack_dog',
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
		card_back: 		'swordsman',
		steps: 			4,
	},
	stun:{
		name: 			'stun',
		description: 	'Have allies stun an enemy {AMOUNT} time(s).',
		objective: 		'ally_performed_stun',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'beggar',
		steps: 			4,
	},
	tactician:{
		name: 			'tactician',
		description: 	'Play {AMOUNT} tactic card(s).',
		objective: 		'tactic_card_played',
		amount: 		0.75,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'surprise_attack',
		steps: 			4,
	},
	take_aim:{
		name: 			'take aim',
		description: 	'Have allies fire {AMOUNT} projectile(s).',
		objective: 		'ally_performed_projectile',
		amount: 		2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'archer',
		steps: 			4,
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
		card_back: 		'wall_of_thorns',
		steps: 			4,
	},
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
	warder:{
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
		card_back: 		'barrister',
		steps: 			4,
	},
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
		card_back: 		'sentinel',
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