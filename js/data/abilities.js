var all_abilities = {
	adrenaline:{
		description: 	'Gains {LEVEL} temporary power whenever it destroys another unit.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['empower_hero_ability'],
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				min_power: 	0,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 		'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 	'ability_level'
			},
		},
		animation: 	'combat_zoom',
		level_cost: 	1,
	},
	air_blast:{
		description: 	'Deals {LEVEL} physical damage to all enemy units. Deals double damage to flying units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		hero_tactics: 	['flying_ability','air_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'air',
				type: 			'damage',
				subtypes: 		['physical','air','blast'],
				amount: 		'ability_level',
				crit_on_has_skills: ['flying'],
				crit_amount_factor: 2,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
		level_cost_hero: 	10,
		average_hits: 		3,
	},
	air_bolt:{
		description: 	'Deals {LEVEL} physical projectile damage to a random enemy unit. Deals double damage to flying targets. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		hero_tactics: 	['flying_ability','air_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'air',
				type: 			'damage',
				subtypes: 		['physical','projectile','air'],
				amount: 		'ability_level',
				crit_on_has_skills: ['flying'],
				crit_amount_factor: 2,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	1.25,
		average_hits: 		1,
	},
	air_bolt_hv:{
		name: 			'air bolt',
		description: 	'Deals {LEVEL} physical projectile damage to a random enemy unit. Deals double damage to flying units. Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		hero_tactics: 	['flying_ability','air_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'air',
				type: 			'damage',
				subtypes: 		['physical','projectile','air'],
				amount: 		'ability_level',
				crit_on_has_skills: ['flying'],
				crit_amount_factor: 2,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		1,
	},
	ally_charges:{
		description: 	'Makes an ally creature unit with power charge. If used by a creature, it cannot target itself.<br/><i>Charge: This unit will move to the furthest free slot with an opposing unit and gains {LEVEL} temporary power for each slot moved.</i>',
		max_ally_units: 4,
		ability_subtypes: ['charge','movement'],
		min_unopposed_enemy_units: 1,
		scales: 		true,
		hero_tactics: 	['melee_ability','run_away_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				not_self: 		true,
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'hoof',
				type: 				'random_ability',
				ability_options: 	['charge'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	1,
	},
	ally_guards:{
		description: 	'Moves {LEVEL} ally creature unit(s) without an opposing unit to a free slot with an opposing unit.',
		cannot_proc_while_stunned: true,
		min_unopposed_enemy_units: 1,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				has_opposing: 	false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				projectile: 	'dodge',
				type: 			'move',
				safe_slot: 		false,
				placement: 		'random',
				subtypes: 		['movement','guard','guard_now'],
				amount: 		1,
			}
		},
	},
	ally_runs_away:{
		description: 	'{LEVEL} Ally creature unit(s) facing an enemy unit will move to a slot with no opposing unit.',
		proc: 			'basic',
		min_double_free_slots: 1,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['charge_ability','projectile_ability','dealt_damage_to_hero_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure'],
				has_opposing: 	true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				projectile: 	'dodge',
				type: 			'move',
				safe_slot: 		true,
				placement: 		'random',
				subtypes: 		['movement','run_away','move_ally'],
				amount: 		1,
			}
		},
		level_cost: 	2,
		level_cost_spell: 1,
	},
	also_empower_all:{
		name: 			'also: empower all',
		description: 	'When this performs any ability, the target also grants all other ally creatures that have power {LEVEL} temporary power.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	5,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'random_ability',
				subtypes: 		['empower_any','empower_ally','additional_effect'],
				ability_options: ['empower_all'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	augment_sporeling:{
		description: 	'An ally sporeling gain {LEVEL} power and health permanently.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				card_ids: 		['sporeling'],
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
			1:{
				type: 			'increase_health',
				subtypes: 		['bolster','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_structure: 3.75,
	},
	arcane_bolt:{
		description: 	'Deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will only target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
		hero_tactics: 	['curse_ability','hex_ability','arcane_bolts_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'magic',
				type: 			'damage',
				subtypes: 		['magical','projectile','arcane_bolts'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4.5,
		level_cost_spell: 	1.125,
		cost_adjustment: 	-0.5,
		average_hits: 		'ability_level',
	},
	arcane_bolt_hv:{
		name: 			'arcane bolt',
		description: 	'Deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: true,
		hero_tactics: 	['curse_ability','hex_ability','arcane_bolts_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'magic',
				type: 			'damage',
				subtypes: 		['magical','projectile','arcane_bolts'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3.5,
		level_cost_spell: 	1,
		cost_adjustment: 	-0.5,
		average_hits: 		'ability_level',
	},
	avoid_structure:{
		description: 	'This unit will move to a random free slot if it is facing a structure. Can be used when played, any enemy unit enters the game, an enemy moved and on its turn.',
		proc: 			['on_play','enemy_unit_card_played','enemy_moved','basic'],
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing_structure: true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				placement: 		'random',
				slot_filters:{
					opposing_structure: true,
				},
				subtypes: 		['movement','move_ally','run_away'],
				amount: 		1,
			}
		},
		level_cost: 1,
		ability_level_cost_factors:{
			venom: 		1.25,
		},
	},
	awaken:{
		description: 	'The first time this unit takes damage, it gains {LEVEL} power permanently.',
		proc: 			'receive_damage',
		cannot_proc_while_stunned: true,
		scales: 		true,
		remove_skill_after_use:'awaken',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['empower_ally','awaken','enrage'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		0,
	},
	backlash:{
		description: 	'Deals 1 physical damage the ally creature unit with the highest current health that has power. That unit then gains {LEVEL} temporary power. Will only target units that have at least 2 health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['melee_ability','active_healing_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				not_self: 		true,
				min_hp: 		2,
				min_power: 		0,
				highest_hp: 	true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'wound',
				type: 			'damage',
				subtypes: 		['physical'],
				amount: 		1,
			},
			1:{
				target_projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally','backlash'],
				amount: 		'ability_level',
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_structure: 1.75,
		level_cost_spell: 	1,
		cost_adjustment: 	-2,
	},
	backlash_all:{
		description: 	'Deals 1 physical damage all ally creature units that have power. Those units then gains {LEVEL} temporary power. Will only target units that have at least 2 health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['melee_ability','active_healing_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				not_self: 		true,
				min_hp: 		2,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'wound',
				type: 			'damage',
				subtypes: 		['physical'],
				amount: 		1,
			},
			1:{
				target_projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally','backlash'],
				amount: 		'ability_level',
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_structure: 3.5,
		level_cost_spell: 	2,
		cost_adjustment: 	-4,
	},
	backstab:{
		description: 	'When this deals melee damage to the enemy hero, it deals {LEVEL} physical melee damage to the nearest enemy unit. This damage can not be avoided by evade or stealth.',
		proc: 			'dealt_damage_to_hero',
		subtypes: 		['melee'],
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee','precision'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	1,
		level_cost_spell: 	0.25,
		average_hits: 	1,
		ability_level_cost_factors:{
			run_away: 	1.25,
		},
	},
	bless:{
		description: 	'A random ally unit gains {LEVEL} blessing(s). Will not target summoned units or units that have 10 or more blessings. {BLESSED}',
		hero_tactics: 	['draw_cards_ability'],
		targets:{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				max_abilities: 	{blessed: 9},
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'bless',
				type: 			'grant_skill',
				subtypes: 		['bless','grant_bless','deck_control'],
				skill_id: 		'blessed',
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.75,
		min_cost: 		1,
		level_cost_spell: 0.175,
		level_cost_artifact: 1.5
	},
	bless_all:{
		description:'All ally units gains {LEVEL} blessing(s). Will not target summoned units or units that have 10 or more blessings. {BLESSED}',
		do_not_pause_between: true,
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				max_abilities: 	{blessed: 9},
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'bless',
				type: 			'grant_skill',
				subtypes: 		['bless','grant_bless','deck_control'],
				skill_id: 		'blessed',
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2.25,
		level_cost_spell: 0.35,
		level_cost_artifact: 4.5
	},
	bless_arrivals:{
		description: 	'Any ally unit that enters the game gains {LEVEL} blessing(s). Will not target summoned units or units that have 10 or more blessings. {BLESSED}',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				max_abilities: 	{blessed: 9},
				has_origin_card: true,
				origin_unit: 	true,
			},
		},
		effects:{
			0:{
				projectile: 	'bless',
				type: 			'grant_skill',
				subtypes: 		['bless','grant_bless','deck_control'],
				skill_id: 		'blessed',
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.75,
		level_cost_artifact: 1.4,
	},
	blessed:{
		description: 	'Has a {LEVEL}0% chance to return to your deck when destroyed.',
		proc: 			'post_own_death',
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		proc_while_dead: true,
		max_level: 		10,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				max_hp: 		0,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				target_projectile: 	'bless',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_deck','deck_control'],
				new_status: 	'deck',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.1,
	},
	blessed_deaths:{
		description: 	'A random ally unit gains {LEVEL} blessing(s) when any ally creature is destroyed. Will not target summoned units or units that have 10 or more blessings. {BLESSED}',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['own_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				max_abilities: 	{blessed: 9},
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'bless',
				type: 			'grant_skill',
				subtypes: 		['bless','grant_bless','deck_control'],
				skill_id: 		'blessed',
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.75,
		level_cost_artifact: 1.6,
	},
	blessed_entry:{
		description:'When played, a random ally unit gains {LEVEL} blessing(s). Will not target summoned units or units that have 10 or more blessings. {BLESSED}',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				max_abilities: 	{blessed: 9},
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'bless',
				type: 			'grant_skill',
				subtypes: 		['bless','grant_bless','deck_control'],
				skill_id: 		'blessed',
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.175,
	},
	blood_rage:{
		description: 	'A random living ally creature unit with at least 2 health gains {LEVEL} power and looses 1 health permanently.',
		cannot_proc_while_stunned: true,
		scales: true,
		hero_tactics: 	['melee_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure'],
				min_power: 		0,
				min_hp: 		2,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['mental','rage','empower_any','empower_ally'],
				amount: 		'ability_level',
			},
			1:{
				type: 			'increase_health',
				subtypes: 		[],
				amount: 		-1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	1,
		cost_adjustment: 	-1,
		level_cost_cum: 	true,
		level_cost_artifact: 	3,
	},
	bolster:{
		description: 	'A random ally unit gains {LEVEL} temporary health.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['bolster_ally_ability','active_healing_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_hero: 	2,
		level_cost_spell: 	0.375,
		level_cost_cum: 	true,
	},
	bolster_all:{
		description: 	'All ally units gains {LEVEL} temporary health.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['bolster_ally_ability','active_healing_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4.5,
		level_cost_spell: 	1.125,
		level_cost_cum: 	true,
	},
	bolster_arrivals:{
		description: 	'When any ally unit enters the game, it gains {LEVEL} temporary health.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['bolster_ally_ability','active_healing_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'true',
				origin_unit: 	true,
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_artifact: 3,
		level_cost_cum: 	true,
	},
	bolster_creature:{
		description: 	'A random non-undead ally creature unit gains {LEVEL} temporary health.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['bolster_ally_ability','active_healing_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_creature','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_structure: 0.75,
		level_cost_hero: 	1,
		level_cost_spell: 	0.25,
		level_cost_cum: 	true,
	},
	bolster_hero:{
		description: 	'Your hero gains {LEVEL} temporary health.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_spell: 	0.375,
		level_cost_cum: 	true,
	},
	bolster_structure:{
		description: 	'A random ally structure unit gains {LEVEL} temporary health.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['bolster_structure_ability','repairing_ability','type_structure'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['creature','object'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_structure','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_creature: 0.75,
		level_cost_hero: 	1,
		level_cost_spell: 	0.25,
		level_cost_cum: 	true,
	},
	bolstering_arrivals:{
		description: 	'When any ally unit enters the game, your hero gains {LEVEL} temporary health.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_artifact: 4,
		level_cost_cum: 	true,
	},
	bolstering_deaths:{
		description: 	'When any ally creature is destroyed, your hero gains {LEVEL} temporary health.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability','own_death_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_structure: 1,
		level_cost_spell: 	0.5,
		level_cost_artifact: 3,
		level_cost_cum: 	true,
	},
	boost_ally:		{
		description: 	'Grant a random ally {LEVEL} temporary power and health. Cannot target your hero and will only target units that have power.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		hero_tactics: 	['melee_ability','empower_ally_ability','bolster_ally_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				min_power: 	0,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 		'grant_temp_power',
				subtypes: 		['empower_ally'],
				amount: 	'ability_level'
			},
			1:{
				projectile: 	'bolster',
				type: 		'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 	'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	3,
	},
	break:{
		description: 	'Destroys up to a total of {LEVEL} enemy artifact(s) or golem(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'break',
		hero_tactics: 	['break_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				subtypes: 	['golem'],
				position: 	'random',
				side: 		'enemy'
			},
			1:{
				add_targets: true,
				target: 	'artifact',
				target_amount: 1,
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'broken',
				type: 		'destroy',
				subtypes: 	['break'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_hero: 2,
		level_cost_artifact: 2,
	},
	bring_animal:{
		description: 	'Summons an animal creature unit. Can be used {LEVEL} time(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'bring_animal',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'animal',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
	},
	bring_artifact:{
		description: 	'Summons up to a total of {LEVEL} artifact(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
		reduce_skill_after_use:'bring_artifact',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_artifact'],
				card_id: 	'random',
				card_type: 	'artifact',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_hero: 	2,
		level_cost_spell: 	3
	},
	bring_cat:{
		description: 	'Summons a cat unit. Can be used {LEVEL} time(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'bring_cat',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'cat',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
	},
	bring_clone:{
		description: 	'When played, creates {LEVEL} clone(s) of itself. Clones created this way do not have this ability.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use: 'bring_clone',
		proc_amount: 	'ability_level',
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				position: 		'self',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'summon_unit',
				remove_skills: 	'bring_clone',
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.75,
		cost_factor: 	'full',
	},
	bring_companion_golem:{
		description: 	'When played, summons {LEVEL} companion golem(s).',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'bring_companion_golem',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'companion_golem',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		5,
	},
	bring_conscript:{
		description: 	'When played, summons {LEVEL} conscript(s).',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'conscript',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	bring_golem:{
		description: 	'Summons a golem structure unit. Can be used {LEVEL} time(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'bring_golem',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'random',
				card_type: 	'structure',
				card_subtype: 'golem',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
	},
	bring_human:{
		description: 	'Summons a human creature unit. Can be used {LEVEL} time(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'bring_human',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'human',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
	},
	bring_structure:{
		description: 	'Summons a non-plant structure unit. Can be used {LEVEL} time(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'bring_structure',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'random',
				card_type: 	'structure',
				not_subtypes: ['plant'],
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
	},
	build_palisade:{
		description: 	'Summons up to {LEVEL} palisade(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'build_palisade',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'palisade',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		2,
	},
	burn:{
		description: 	'Applies {LEVEL} burn to a random enemy unit. Will target the enemy hero if there are no enemy units.{BURN}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
			1:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	burn_arrivals:{
		description: 	'Applies {LEVEL} burn to a any enemy unit that enters the game.',
		proc: 			'enemy_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['burn_ability','conflagrate_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy',
				origin_unit: 	true,
			},
		},
		effects:{
			0:{
				projectile: 	'burn',
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_artifact: 6,
	},
	burn_hv:		{
		name: 			'burn',
		description: 	'Applies {LEVEL} burn to a random enemy unit.{BURN}',
		show_amount: 	true,
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['burn_ability','conflagrate_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		level_cost_spell: 	0.5,
	},
	burn_all:{
		description: 	'Applies {LEVEL} burn to all enemy units. Will not target the enemy hero.{BURN}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		do_not_pause_between: true,
		hero_tactics: 	['burn_ability','conflagrate_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	burning_aura:{
		description: 	'Applies {LEVEL} burn to any enemy unit or hero that deals melee damage to it. {BURN}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		scales: 		true,
		proc_while_dead: true,
		hero_tactics: 	['burn_ability','conflagrate_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'burn',
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_hero: 	2,
	},
	burning_deaths:{
		description: 	'Applies {LEVEL} burn to a random enemy unit or hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['burn_ability','conflagrate_ability','own_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'burn',
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	burning_deaths_hv:{
		name: 			'burning deaths',
		description: 	'Applies {LEVEL} burn to a random enemy unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['burn_ability','conflagrate_ability','own_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'burn',
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		level_cost_artifact: 4,
	},
	burning_entry:{
		description: 	'Applies {LEVEL} burn to all nearby enemy units when played. {BURN}',
		proc: 			'on_play',
		scales: 		true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	3,
				position: 		'opposing_wide',
				min_hp: 		1,
				side: 			'enemy'
			},
			/*1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},*/
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'burn',
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
			}
		},
		level_cost: 	0.75,
	},
	burning_hero:{
		description: 	'When an enemy unit deals melee damage to your hero, this applies {LEVEL} burn to it.',
		proc: 			'ally_hero_damaged',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		//proc_chance: 	50,
		scales: 		true,
		cannot_proc_while_stunned: true,
		hero_tactics: 	['burn_ability','conflagrate_ability','own_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn','buff_hero'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_artifact: 5,
		level_cost_hero: 	2.5,
	},
	carry_away:{
		description: 	'If there is a damaged ally creature unit next to this, it will return it to your hand. Will not send away summoned units. If it does, this also returns to your hand.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'adjacent',
				damaged: 		true,
				not_types: 		['structure','object'],
				side: 			'ally',
				not_self: 		true,
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','unsummon'],
				new_status: 	'hand',
				side: 			'ally',
				on_success:{
					targets:	{
						0:{
							target: 		'any',
							target_amount: 	1,
							position: 		'self',
							side: 			'ally',
						},
					},
					effects:{
						0:{
							pause_before: 	-1000,
							projectile: 	'teleport',
							type: 			'move_to_deck',
							subtypes: 		['move_ally_to_hand'],
							new_status: 	'hand',
							side: 			'ally',
						}
					},
				}
			}
		},
		level_cost: 	3,
	},
	channel_life:{
		description: 	'Reduces the time left of the card in your hand with the highest time left by {LEVEL}. If it does, this deals 1 damage to itself.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['heal_hero_ability','draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
				highest_time_left: true,
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
				
			}
		},
		on_each_success:{
			targets:{
				0:{
					target: 		'any',
					target_amount: 	1,
					position: 		'self',
					min_hp: 		1,
					side: 			'any'
				},
			},
			effects:{
				0:{
					pause_before: 	-1500,
					self_projectile: 'voodoo',
					type: 			'damage',
					amount: 		1,
					increase_timeout: 500,
				},
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
		cost_adjustment: 	-2,
	},
	chaos_strikes:{
		description: 	'When the enemy hero receives damage, discard {LEVEL} card(s) from the enemy\'s hand to the grave. Can be used once.',
		proc: 			'enemy_hero_damaged',
		remove_skill_before_use: 	'chaos_strikes',
		proc_amount: 	1,
		hero_tactics: 	['discard_enemy_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	'ability_level',
				status: 		'hand',
				can_target_zero: true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_enemy','deck_control'],
				new_status: 		'grave',
				side: 				'enemy',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_artifact: 3,
		level_cost_hero: 	2,
	},
	chaos_touch:{
		description: 	'When this deals damage to the enemy hero, discard a card from the enemy\'s hand to the grave. Can be used {LEVEL} time(s).',
		proc: 			'dealt_damage_to_hero',
		reduce_skill_after_use: 'chaos_touch',
		proc_amount: 	1,
		hero_tactics: 	['discard_enemy_ability','draw_cards_ability','direct_damage_ability','movement_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_enemy','deck_control'],
				new_status: 		'grave',
				side: 				'enemy',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
	},
	charge:{
		ability_subtypes: ['charge','movement','charge','move_ally'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This unit will move to the furthest free slot with an opposing unit and gains {LEVEL} temporary power for each slot moved.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		ability_effects:{
			0:{
				targets:	{
					0:{
						target: 	'unit',
						target_amount: 1,
						position: 	'self',
						min_hp: 	1,
						side: 		'ally'
					},
				},
				effects:{
					1:{
						type: 		'move',
						safe_slot: false,
						placement: 'furthest',
						subtypes: 	['movement','move_ally'],
						amount: 	1,
						on_success:{
							targets:	{
								0:{
									target: 	'unit',
									target_amount: 1,
									position: 	'self',
									min_hp: 	1,
									side: 		'ally'
								},
							},
							effects:{
								1:{
									projectile: 'hoof',
									type: 		'grant_temp_power',
									subtypes: 	['charge','empower_ally'],
									amount: 	'latest_result',
									amount_factor: 'ability_level',
								},
							},
						}
					},
				},
			},
		},
		level_cost: 		0,
		average_hit_cost: 	2,
	},
	charm:{
		description: 	'Turns the nearest enemy non-undead creature into an ally and gives it the charmed ability. Cannot affect the enemy hero. Can be used {LEVEL} time(s).<br/><i>Charmed: If there are no more then 4 enemy units, this unit has a 50% chance to change sides.</i>',
		max_ally_units: 4,
		proc_amount: 	1,
		reduce_skill_after_use:'charm',
		hero_tactics: 	['sacrifice_ally_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'nearest',
				not_types: ['object','structure'],
				max_abilities: 	{undead: 0},
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'music',
				type: 		'change_side',
				subtypes: 	['mental','change_side','charm'],
				amount: 	1,
			},
			1:{
				type: 		'set_skill',
				skill_id: 	'charmed',
				amount: 	1
			},
			2:{
				type: 		'enable_to_act',
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		level_cost_spell: 	1,
		level_cost_hero: 1,
	},
	charmed:{
		not_used: 	true,
		description: 	'If there are no more then 4 enemy units, this unit has a 50% chance to change sides. This effect will trigger {LEVEL} time(s).',
		proc_chance: 	50,
		max_enemy_units: 	4,
		cannot_proc_while_stunned: true,
		reduce_skill_after_use:'charmed',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				self_projectile: 	'go_again',
				type: 			'change_side',
				subtypes: 		['mental','change_side'],
				amount: 		1,
			},
		},
		level_cost: 	-2,
	},
	charming_touch:{
		description: 	'When this deals damage to an enemy non-undead creature unit, there is a 50% chance to turn it into an ally and gives it the charmed ability. Cannot affect the enemy hero.<br/><i>Charmed: If there are no more then 4 enemy units, this unit has a 50% chance to change sides.</i>',
		proc: 			'dealt_damage',
		max_ally_units: 4,
		proc_chance: 	50,
		hero_tactics: 	['sacrifice_ally_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				target_projectile: 'music',
				type: 		'change_side',
				subtypes: 	['mental','change_side','charm'],
				amount: 	1,
			},
			1:{
				type: 		'set_skill',
				skill_id: 	'charmed',
				amount: 	1
			},
			2:{
				type: 		'enable_to_act',
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
	},
	clone_ally:{
		ability_subtypes: ['summon_ally','summon_creature'],
		description: 	'Creates a clone of a random ally creature {LEVEL} time(s).',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		targets:	{
			0:{
				target: 		'unit',
				position: 		'random',
				not_types: 		['structure','object'],
				target_amount: 	1,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'random_ability',
				subtypes: 		['clone_ally'],
				ability_options: ['clone_target'],
				amount: 		1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		16,
		level_cost_spell: 	4,
	},
	clone_self:{
		description: 	'Creates {LEVEL} clone(s) of itself. Clones created this way do not have this ability.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		not_on_hero: true,
		targets:	{
			0:{
				target: 		'unit',
				position: 		'self',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'summon_unit',
				remove_skills: 	'clone_self',
				subtypes: 		['clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_factor: 	'full'
	},
	clone_self_on_kill:{
		description: 	'Creates {LEVEL} clone(s) of itself when it destroys a unit.',
		proc: 			'kill',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		not_on_hero: true,
		targets:	{
			0:{
				target: 		'unit',
				position: 		'self',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'summon_unit',
				subtypes: 		['clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.25,
		cost_factor: 	'full'
	},
	clone_target:{
		not_used: 		true,
		description: 	'### USED BY CLONE ALLY ###',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		targets:	{
			0:{
				target: 		'unit',
				position: 		'self',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 			'summon_unit',
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
	},
	cold_aura:{
		description: 	'Deals {LEVEL} physical cold damage to any unit or hero that deals melee damage to it. Has a 25% chance to stun any unit or hero it deals damage to.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['stun'],
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['cold_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['physical','cold','elemental'],
				amount: 		'ability_level',
				on_success:{
					proc_chance:    25,
					targets:	{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'random',
							origin_unit: 	true,
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'apply_stun',
							subtypes: 	['stun'],
							amount: 	1	
						}
					},
				}
			}
		},
		animation: 			'red_glow',
		level_cost: 		2,
		level_cost_hero: 	4,
		average_hits: 		1,
		cost_adjustment: 	1,
	},
	cold_strike:{
		description: 	'Deals physical cold melee damage equal to its power to the opposing unit {LEVEL} time(s). Has a 25% chance to stun any unit or hero it deals damage to. Will target the enemy hero if there is no opposing unit.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		proc_amount: 	'ability_level',
		ability_subtypes: ['stun'],
		hero_tactics: 	['cold_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['melee','physical','cold'],
				amount: 		'origin_power',
				on_success:{
					proc_chance:    25,
					targets:	{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'random',
							origin_unit: 	true,
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'apply_stun',
							subtypes: 	['stun'],
							amount: 	1	
						}
					},
				}
			}
		},
		animation: 			'attack',
		level_cost: 		2,
		cost_factor: 		'power',
		average_hits: 		'ability_level',
		cost_adjustment: 	1,
		additional_levels_cost: 2,
	},
	cold_strike_hv:{
		name: 			'cold strike',
		description: 	'Deals physical cold melee damage equal to its power to the nearest enemy unit {LEVEL} time(s). Has a 25% chance to stun any unit it deals damage to. Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		proc_amount: 	'ability_level',
		ability_subtypes: ['stun'],
		hero_tactics: 	['cold_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['melee','physical','cold'],
				amount: 		'origin_power',
				on_success:{
					proc_chance:    25,
					targets:	{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'random',
							origin_unit: 	true,
							side: 		'any'
						},
					},
					effects:{
						0:{
							pause_before: -2000,
							type: 		'apply_stun',
							subtypes: 	['stun'],
							amount: 	1	
						}
					},
				}
			}
		},
		animation: 			'attack',
		level_cost: 		2,
		cost_factor: 		'power',
		average_hits: 		'ability_level',
		cost_adjustment: 	1,
		additional_levels_cost: 1,
	},
	conflagrate:{
		description: 	'Deals {LEVEL} piercing fire damage to a random burning enemy unit or hero multiplied by the burn it suffers.',
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['fire'],
		ability_craft_subtypes:['burn'],
		hero_tactics: 	['burn_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'burning', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'burning', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['fire','ignores_armor','ignore_shields','conflagrate','elemental'],
				amount: 		'target_burn',
				amount_factor: 	'ability_level',
			},
		},
		animation: 	'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
		average_hits: 		1,
	},
	conflagrate_hv:{
		name: 			'conflagrate',
		description: 	'Deals {LEVEL} piercing fire damage to a random burning enemy unit multiplied by the burn it suffers.',
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['fire'],
		ability_craft_subtypes:['burn'],
		hero_tactics: 	['burn_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'burning', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['fire','ignores_armor','ignore_shields','conflagrate','elemental'],
				amount: 		'target_burn',
				amount_factor: 	'ability_level',
			},
		},
		animation: 	'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
		average_hits: 		1,
		
	},
	consume_creature:{
		description: 	'Each turn, this destroys 1 random non-undead ally creature unit with no more than 1 health. If it does, This gains {LEVEL} temporary power and heals itself by {LEVEL}. Will target units with the lowest cost first.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['summon_creature_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_self: 	true,
				not_types: 	['structure','artifact'],
				max_abilities: 	{undead: 0},
				max_hp: 	1,
				lowest_cost: true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally','consume','feast'],
				amount: 	1,
			},
		},
		on_success:{
			targets:	{
				0:{
					target: 		'any',
					target_amount: 	1,
					position: 		'self',
					min_hp: 		1,
					side: 			'ally'
				},
			},
			effects:{
				0:{
					projectile: 	'power',
					type: 			'grant_temp_power',
					subtypes: 		['empower_any','empower_ally'],
					amount: 		'ability_level'
				},
				1:{
					pause_before: 	-1000,
					type: 			'healing',
					subtypes: 		['healing'],
					amount: 		'ability_level'
				},
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		cost_adjustment: -3,
	},
	consume_sporeling:{
		description: 	'If damaged, destroys a random sporeling. This then heals itself by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		origin_damaged: true,
		hero_tactics: 	['summon_creature_ability'],
		ability_effects:{
			0:{
				targets:{
					0:{
						target: 		'unit',
						target_amount: 	1,
						position: 		'random',
						card_ids: 		['sporeling'],
						side: 			'any'
					},
				},
				effects:{
					0:{
						projectile: 	'drain',
						type: 			'destroy',
						subtypes: 		['sacrifice_ally'],
						on_success:{
							targets:{
								0:{
									target: 		'unit_or_hero',
									target_amount: 	1,
									position: 		'self',
									min_hp: 		1,
									damaged: 		true,
									side: 			'ally'
								},
							},
							effects:{
								0:{
									projectile: 	'healing',
									type: 			'healing',
									subtypes: 		['healing','feast'],
									amount: 		'ability_level',
								}
							},
						}
					}
				},
			},
		},
		level_cost: 	0.25,
		level_cost_hero: 2,
	},
	convert_pain:{
		description: 	'Has a 50% chance to summon {LEVEL} ghost(s) when your hero is damaged.',
		proc: 			'ally_hero_damaged',
		proc_chance: 	50,
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 	'ability_level',
		hero_tactics: 	['heal_hero_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'resurrect',
				type: 		'summon_unit',
				card_id: 	'ghost',
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		level_cost_hero: 	2,
	},
	counter:{
		description: 	'If this survives melee damage from an enemy unit or hero, this deals physical melee damage equal to its power to it, {LEVEL} time(s). This cannot counter a counter.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		not_subtypes: 	['counter'],
		need_to_be_alive: true,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		need_power: 	true,
		hero_tactics: 	['heal_hero_ability','empower_hero_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['melee','physical','counter'],
				amount: 		'origin_power'
			}
		},
		animation: 			'attack',
		level_cost: 		2,
		level_cost_hero: 	3,
		cost_factor: 		'power',
		average_hits: 		'ability_level',
	},
	counter_spell:{
		description: 	'Destroys up to {LEVEL} enemy spell(s).',
		proc: 			'spell_about_to_use_ability',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		reduce_skill_after_use:'counter_spell',
		hero_tactics: 	['counter_spell_ability'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'magic_shield',
				type: 			'destroy',
				subtypes: 		['counter_spell'],
				amount: 		1,
				increase_timeout: 500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_hero: 	2,
		level_cost_artifact: 1,
	},
	counter_spells:{
		description: 	'Has a {LEVEL}0% chance to destroy any enemy spell as that spell is played.',
		proc: 			'spell_about_to_use_ability',
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['counter_spell_ability'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'magic_shield',
				type: 			'destroy',
				subtypes: 		['counter_spell'],
				amount: 		1,
				increase_timeout: 500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
	},
	corpse_feast:{
		description: 	'If damaged, this removes a creature card in your grave from the game. If it does, it heals itself by {LEVEL}.',
		proc: 			'basic',
		min_ally_creature_cards_in_grave: 1,
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['type_creature'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'any',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				on_success:{
					proc_while_dead: true,
					targets:	{
						0:{
							target: 		'card',
							target_amount: 	1,
							status: 		'grave',
							types: 			['creature'],
							side: 			'ally',
						},
					},
					effects:{
						0:{
							projectile: 		'drain',
							projectile_target: 	'deck',
							type: 				'remove_card',
							side: 				'ally',
						}
					},
					on_success:{
						targets:{
							0:{
								target: 	'unit_or_hero',
								target_amount: 1,
								position: 	'self',
								min_hp: 	1,
								side: 		'ally',
								damaged: 	true,
							},
						},
						effects:{
							0:{
								self_projectile: 	'healing',
								type: 			'healing',
								subtypes: 		['feast'],
								amount: 		'ability_level',
							}
						},
					},
					animation: 		'combat_zoom',
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		cost_adjustment: -2,
	},
	curse:{
		description: 	'Applies {LEVEL} curse to a random enemy unit or hero.{CURSE}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 1.75,
		level_cost_spell: 0.375,
	},
	curse_all:{
		description: 	'Applies {LEVEL} curse to all enemy units.{CURSE}',
		do_not_pause_between: true,
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		5.25,
		level_cost_hero: 	4,
		level_cost_spell: 	1.25,
	},
	curse_arrivals:{
		description: 	'Applies {LEVEL} curse to any enemy unit that enters the game.',
		proc: 			'enemy_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy',
				origin_unit: 	true,
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.75,
		level_cost_artifact: 3.5,
	},
	curse_hv:{
		name: 			'curse',
		description: 	'Applies {LEVEL} curse to a random enemy unit.{CURSE}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability','curse_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 1.75,
		level_cost_spell: 0.375,
	},
	cursed_aura:{
		description: 	'Applies {LEVEL} curse to any enemy unit or hero that deals melee damage to it.{CURSE}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		scales: 		true,
		proc_while_dead: true,
		hero_tactics: 	['projectile_ability','blast_ability','heal_hero_ability','curse_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	1.5,
		level_cost_hero: 2,
	},
	cursed_deaths:{
		description: 	'Applies {LEVEL} curse to a random enemy unit or hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability','type_creature','own_death_proc_ability','curse_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.75,
		level_cost_structure: 1.2,
	},
	cursed_deaths_hv:{
		name: 			'cursed deaths',
		description: 	'Applies {LEVEL} curse to a random enemy unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability','type_creature','own_death_proc_ability','curse_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		level_cost_artifact: 3,
	},
	cursed_entry:{
		description: 	'Applies {LEVEL} curse to all nearby enemy units when played. {CURSE}',
		proc: 			'on_play',
		scales: 		true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	3,
				position: 		'opposing_wide',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
			}
		},
		level_cost: 	1.5,
	},
	cursed_hero:{
		description: 	'When an enemy unit deals melee damage to your hero, this will apply {LEVEL} curse to it.',
		proc: 			'ally_hero_damaged',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		scales: 		true,
		cannot_proc_while_stunned: true,
		hero_tactics: 	['projectile_ability','blast_ability','heal_hero_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse','buff_hero'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.75,
		level_cost_artifact: 4,
	},
	cursed_touch:{
		description: 	'Applies {LEVEL} curse to any unit or hero it deals damage to.{CURSE}',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['projectile_ability','blast_ability','curse_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				pause_before: 	-250,
			}
		},
		level_cost: 		0,
		average_hit_cost: 	1,
	},
	cursing_hero:{
		description: 	'When your hero deals damage to an enemy, this will apply {LEVEL} curse to it.',
		proc: 			'enemy_damaged_by_hero',
		ability_subtypes: ['dealt_damage_proc'],
		scales: 		true,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		0,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				//self_projectile: 	'curse',
				//target_projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse','buff_hero','ally_hero_deals_damage'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		level_cost_artifact: 2,
	},
	damage_hero:{
		description: 	'Deals {LEVEL} damage to the enemy hero.',
		cannot_proc_while_stunned: true,
		scales: true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'wound',
				type: 			'damage',
				subtypes: 		['direct_damage'],
				amount: 		'ability_level'
			}
		},
		animation: 			'attack',
		level_cost: 		8,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	damage_hero_on_act:{
		name: 			'damage hero',
		description: 	'Deals {LEVEL} damage to the enemy hero if this used another ability.',
		cannot_proc_while_stunned: true,
		has_used_ability: true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'wound',
				type: 			'damage',
				subtypes: 		['direct_damage'],
				amount: 		'ability_level'
			}
		},
		animation: 			'attack',
		level_cost: 		8,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	debilitate:{
		description: 	'A random enemy creature looses {LEVEL} power and health permanently.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'increase_power',
				subtypes: 		['debilitate'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
			1:{
				type: 			'reduce_health',
				subtypes: 		['wither'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	debilitate_all:{
		description: 	'All enemy creatures loose {LEVEL} power and health permanently.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['structure','object'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'increase_power',
				subtypes: 		['debilitate'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
			1:{
				type: 			'reduce_health',
				subtypes: 		['wither'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		18,
		level_cost_spell: 	4.5,
	},
	defect:{
		description: 	'When this receives damage, and there are no more then 4 enemy units, it changes sides.',
		proc: 		'receive_damage',
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		max_enemy_units: 4,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				type: 		'change_side',
				subtypes: 	['mental','movement','change_side'],
				amount: 	1,
			},
		},
		level_cost: 	-4,
	},
	demolish:{
		description: 	'Destroys any non-golem structure unit it deals damage to.',
		proc: 			'dealt_damage',
		//subtypes: 		['damage'],
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['creature'],
				not_subtypes: 	['golem'],
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				target_projectile: 	'bomb',
				type: 			'destroy',
				subtypes: 		['demolish','break'],
				amount: 		1
			}
		},
		level_cost: 		1,
		average_hit_cost: 	1,
	},
	desperate_burn:{
		description: 	'When your hero receives damage, this applies {LEVEL} burn to a random enemy unit. {BURN}',
		proc: 			'ally_hero_damaged',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	desperate_curse:{
		description: 	'When your hero receives damage, this applies {LEVEL} curse to a random enemy unit. {CURSE}',
		proc: 			'ally_hero_damaged',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse','buff_hero'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.75,
	},
	desperate_wither:{
		description: 	'When your hero receives damage, this reduces the maximum health of a random enemy unit by {LEVEL}.',
		proc: 			'ally_hero_damaged',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['magical','wither'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	desperate_haste:{
		description: 	'When your hero receives damage, this reduces the time left of the card in your hand, with the lowest time left, by {LEVEL}.',
		proc: 			'ally_hero_damaged',
		cannot_proc_while_stunned: true,
		//remove_skill: 	'desperate_haste',
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
				lowest_time_left: true,
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	4,
		level_cost_artifact: 4,
	},
	destroy:{
		description: 	'Destroys {LEVEL} random enemy unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['destroy'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	destroy_ally:{
		description: 	'Destroys {LEVEL} random ally unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-4,
	},
	destroy_arrival:{
		description: 	'Destroys the next enemy creature unit that enters the game. Can be used {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc: 			'enemy_unit_card_played',
		reduce_skill_after_use: 'destroy_arrival',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy',
				not_types: 	['structure','artifact','spell'],
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['destroy'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		level_cost_artifact: 3,
	},
	destroy_artifact:{
		description: 	'Destroys up to {LEVEL} random enemy artifact(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy_artifact',
		targets:	{
			0:{
				target: 	'artifact',
				target_amount: 1,
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'broken',
				type: 		'destroy',
				subtypes: 	['break'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_hero: 1.5,
		level_cost_artifact: 1.5,
	},
	destroy_creature:{
		description: 	'Destroys {LEVEL} random enemy creature unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy_creature',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_types: 	['structure','artifact','spell'],
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['destroy'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
		level_cost_artifact: 2.5,
	},
	destroy_structure:{
		description: 	'Destroys {LEVEL} random enemy structure unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy_structure',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_types: 	['creature','artifact','spell'],
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['destroy'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
		level_cost_artifact: 2.5,
	},
	destroy_non_flying:{
		name: 			'destroy non-flying',
		description: 	'Destroys {LEVEL} random enemy unit(s) without the flying ability.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				max_abilities: 	{flying: 0},
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['destroy'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
	},
	destroy_non_flying_ally:{
		description: 	'Destroy up to {LEVEL} random ally unit(s) without the flying ability.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		remove_skill_after_use: 'destroy_non_flying_ally',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 'ability_level',
				position: 	'random',
				max_abilities: 	{flying: 0},
				not_self: 	true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-3,
		average_hits: 	'ability_level',
	},
	
	discard:{
		description: 	'Discards up to {LEVEL} card(s) from your hand to the grave.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard',
		negative_ability: true,
		min_enemy_hand_cards: 1,
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_ally','deck_control'],
				new_status: 		'grave',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		-6,
		level_cost_hero: 	-3,
	},
	discard_enemy:{
		description: 	'Discards up to {LEVEL} card(s) from the enemy\'s hand to the grave.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard_enemy',
		min_enemy_hand_cards: 1,
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_enemy','deck_control'],
				new_status: 		'grave',
				side: 				'enemy',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		10,
		level_cost_hero: 	7,
		cost_adjustment: 	-2,
	},
	discard_enemy_on_act:{
		name: 			'discard enemy',
		description: 	'Discards up to {LEVEL} card(s) from the enemy\'s hand to the grave if this has used another ability.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard_enemy',
		min_enemy_hand_cards: 1,
		has_used_ability: 	true,
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_enemy','deck_control'],
				new_status: 		'grave',
				side: 				'enemy',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		10,
		level_cost_hero: 	7,
		cost_adjustment: 	-2,
	},
	discard_enemy_down:{
		description: 	'If the enemy has {LEVEL} or more cards in its hand, this discards 1 cards from the enemy\'s hand to the grave.',
		cannot_proc_while_stunned: true,
		min_enemy_hand_cards: 'ability_level',
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_enemy','deck_control'],
				new_status: 		'grave',
				side: 				'enemy',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		-2,
		level_cost_hero: 	-2,
		cost_adjustment: 	20
	},
	doom:{
		description: 	'Applies {LEVEL} doom to a random enemy unit.{DOOM}',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['doom_ability','subtype_wall','heal_hero_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	1.5,
		level_cost_spell: 0.375,
	},
	doom_all:{
		description: 	'Applies {LEVEL} doom to all enemy units.{DOOM}',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		hero_tactics: 	['doom_ability','subtype_wall','heal_hero_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	4.5,
		level_cost_spell: 1.125,
	},
	doom_ally:{
		description: 	'Applies {LEVEL} doom to a random ally unit.{DOOM}',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	-3,
		level_cost_spell: -0.75,
	},
	doom_arrivals:{
		description: 	'Applies {LEVEL} doom to any enemy unit that enters the game. {DOOM}',
		proc: 			'enemy_unit_card_played',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['doom_ability','subtype_wall','heal_hero_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy',
				origin_unit: 	true,
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		level_cost_artifact: 2,
	},
	doom_self:{
		description: 	'Applies {LEVEL} doom to itself.{DOOM}',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	-1,
	},
	dooming_aura:{
		description: 	'When this receives melee damage from an enemy unit, this applies {LEVEL} doom to it. {DOOM}.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_amount: 	1,
		proc_while_dead: true,
		hero_tactics: 	['heal_hero_ability','movement_ability','projectile_ability','doom_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		level_cost: 		0.5,
		level_cost_hero: 	1,
	},
	dooming_deaths:{
		description: 	'Applies {LEVEL} doom to a random enemy unit when any ally creature is destroyed. {DOOM}',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
		cannot_proc_while_stunned: true,
		hero_tactics: 	['doom_ability','heal_hero_ability','own_death_proc_ability','type_creature','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.5,
		level_cost_artifact: 3,
		level_cost_structure: 1,
	},
	dooming_entry:{
		description: 	'When played, applies {LEVEL} doom to all nearby enemy units.{DOOM}',
		proc: 			'on_play',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	3,
				position: 		'opposing_wide',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		level_cost: 		1,
	},
	dooming_touch:{
		description: 	'Applies {LEVEL} doom to any unit it deals damage to.{DOOM}',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		hero_tactics: 	['doom_ability','subtype_wall','heal_hero_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		level_cost: 		0,
		ability_level_cost_factors:{
			backlash: 		-1,
		},
		average_hit_cost: 	0.75,
	},
	doomward:{
		description: 		'This is immune to doom.',
		grants_immunities: 	['doom'],
		ability_subtypes: 	['doomward'],
		level_cost: 		0.5,
	},
	draw:{
		description: 	'Draws up to a total of {LEVEL} card(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		remove_skill: 	'draw',
		min_cards_in_deck: 	1,
		max_hand_cards: 	9,
		hero_tactics: 	['hasten_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'draw_card',
				subtypes: 			['draw_cards','deck_control'],
				amount: 			1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		level_cost_artifact: 3,
		ability_level_cost_factors:{
			homebound: 		1.5,
		},
	},
	draw_on_act:{
		name: 			'draw',
		description: 	'Draws up to {LEVEL} card(s) if this used another ability.',
		cannot_proc_while_stunned: true,
		proc: 			['on_play','basic'],
		proc_amount: 	'ability_level',
		remove_skill: 	'draw_on_act',
		min_cards_in_deck: 	1,
		max_hand_cards: 	9,
		has_used_ability: 	true,
		hero_tactics: 	['hasten_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'draw_card',
				subtypes: 			['draw_cards','deck_control'],
				amount: 			1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		//level_cost_spell: 3.5,
		//cost_adjustment: -3,
	},
	earth_blast:{
		description: 	'Deals {LEVEL} physical earth damage to all enemy units.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['curse_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'stone',
				type: 			'damage',
				subtypes: 		['physical','earth','blast'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
		average_hits: 		3,
	},
	earth_bolt:{
		description: 	'Deals {LEVEL} physical earth projectile damage to a random enemy unit. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'stone',
				type: 			'damage',
				subtypes: 		['physical','earth','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		1,
	},
	earth_bolt_hv:		{
		name: 			'earth bolt',
		description: 	'Deals {LEVEL} physical earth projectile damage to a random enemy unit.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'stone',
				type: 			'damage',
				subtypes: 		['physical','earth','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		average_hits: 	1,
	},
	echo:{
		description: 	'Has a 75% chance to return to its owner\'s hand if this used an ability.',
		cannot_proc_while_stunned: true,
		has_used_ability: true,
		proc_chance: 	75,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'ally',
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','deck_control','echo'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		level_cost: 	2,
		cost_factor: 	'full',
	},
	elemental_bolt:{
		ability_subtypes: ['fire','cold','elemental'],
		description: 	'Fires a fire or frost bolt at an enemy, dealing {LEVEL} magical or physical projectile damage. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		ability_subtypes: ['stun','cold','fire','projectile'],
		hero_tactics: 	['fire_ability','cold_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		[],
				ability_options: ['fire_bolt','frost_bolt'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		1,
	},
	elemental_bolt_hv:{
		ability_subtypes: ['fire','cold','elemental'],
		name: 			'elemental bolt',
		description: 	'Fires a fire or frost bolt at an enemy, dealing {LEVEL} magical or physical projectile damage.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		ability_subtypes: ['stun','cold','fire','projectile'],
		hero_tactics: 	['fire_ability','cold_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		[],
				ability_options: ['fire_bolt_hv','frost_bolt_hv'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		3,
		level_cost_spell: 	0.75,
		average_hits: 		1,
	},
	empower_ally:{
		description: 	'A random ally creature that has power gains {LEVEL} temporary power. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['melee_ability','empower_ally_ability','trample_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				not_self: 		true,
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_structure: 1.5,
		level_cost_spell: 	0.5,
		level_cost_hero: 	3,
	},
	empower_all:{
		description: 	'All ally creatures that have power gain {LEVEL} temporary power. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		do_not_pause_between: 	true,
		hero_tactics: 	['melee_ability','empower_ally_ability','trample_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				not_self: 		true,
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_structure: 4.5,
		level_cost_spell: 	1.5,
		level_cost_hero: 	9,
	},
	empower_arrivals:{
		description: 	'When any ally creature unit that has power enters the game, it gains {LEVEL} temporary power.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['melee_ability','move_ally_to_hand_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				not_self: 		true,
				origin_unit: 	true,
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_structure: 1.75,
		level_cost_artifact: 3,
		level_cost_hero: 	3,
	},
	empower_hero:{
		description: 	'Your hero gains {LEVEL} temporary power.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','buff_hero','empower_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	empower_imps:{
		description: 	'All ally imp units that have power gain {LEVEL} temporary power. Cannot affect itself.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				subtypes: 		['imp'],
				not_types: 		['object','structure'],
				not_self: 		true,
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_structure: 4.25,
		level_cost_hero: 	8,
	},
	empower_opposed:{
		description: 	'A random ally creature that has power and an opposing unit gains {LEVEL} temporary power. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				not_self: 		true,
				has_opposing: 	true,
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_structure: 0.75,
		level_cost_spell: 	0.25,
		level_cost_hero: 	1.5,
	},
	experiment:{
		description: 	'Does something random. Or not...',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['experiment_ability'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		['experiment'],
				ability_options: ['air_bolt','ally_charges','ally_runs_away','arcane_bolt','backlash','bless','blood_rage','bolster','break','build_palisade','burn','charm','clone','curse','debilitate','doom','draw','empower_ally','fear','fire_bolt','fortify','frost_bolt','grant_one_turn_flying','grant_explode','hasten','heal','hex','hide_ally','morph_ally','poison','purify','reap','reclaim','repair','restore','reveal','stun','summon_trap','summon_sporeling','unsummon_ally','weakness','wither'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		2,
		level_cost_spell: 	0.75,
	},
	experiment_hv:{
		name: 			'experiment',
		description: 	'Does something random. Or not...',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['experiment_ability'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		['experiment'],
				ability_options: ['air_bolt_hv','ally_charges','ally_runs_away','arcane_bolt_hv','backlash','bless','blood_rage','bolster','break','build_palisade','burn_hv','charm','clone','curse_hv','debilitate','doom','draw','empower_ally','fear','fire_bolt_hv','fortify','frost_bolt_hv','grant_one_turn_flying','grant_explode','hasten','heal','hex','hide_ally','morph_ally','poison_hv','purify','reap','reclaim','repair','restore','reveal','stun','summon_trap','summon_sporeling','unsummon_ally','weakness','wither_hv'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	explode:{
		description: 	'When this unit is destroyed, it deals {LEVEL} physical damage to all nearby units.',
		proc: 			'own_death',
		scales: 		true,
		proc_while_dead: true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				position: 	'opposing_wide',
				not_self:   true,
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'bomb',
				type: 		'damage',
				subtypes: 	['physical','explode'],
				amount: 	'ability_level',
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		average_hits: 	2,
	},
	
	energised_haste:{
		ability_subtypes: 	['hasten','deck_control'],
		description: 	'Uses all energy it has to reduce the time left of the card in your hand, with the highest time left, by the energy used.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				has_effect: 	{effect_name: 'energy', amount: 1, limit: 'min'},
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'ability',
				targets:{
					0:{
						target: 		'card',
						target_amount: 	1,
						status: 		'hand',
						side: 			'ally',
						highest_time_left: true,
					},
				},
				effects:{
					0:{
						projectile: 		'hasten',
						projectile_target: 	'deck',
						type: 				'reduce_ready_time',
						subtypes: 			['hasten','deck_control'],
						amount: 			'origin_energy',
						amount_factor: 		1,
						side: 				'ally',
					}
				},
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_artifact: 1.5,
	},
	energising_deaths:{
		description: 	'Gains {LEVEL} energy when an ally creature is destroyed.',
		proc: 			'ally_creature_death',
		origin_not_self: true,
		cannot_proc_while_stunned: true,
		hero_tactics: 	['type_creature'],
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'any'
			},
		},
		effects:{
			0:{
				self_projectile: 'energize',
				type: 		'apply_energy',
				subtypes: 	['gain_energy'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_structure: 0.75,
	},
	energising_spells:{
		description: 	'Gains {LEVEL} energy when any spell card is played.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['type_spell'],
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'any'
			},
		},
		effects:{
			0:{
				self_projectile: 'energize',
				type: 		'apply_energy',
				subtypes: 	['gain_energy'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_structure: 0.75,
	},
	enrage:{
		description: 	'When this unit receives damage, it gains {LEVEL} temporary power.',
		proc: 			'receive_damage',
		proc_amount: 	1,
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability','bolster_hero_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','enrage','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
	},
	eternal:		{
		description: 	'Returns to its owner\'s deck when destroyed.',
		proc: 			'post_own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'teleport',
				type: 		'move_to_deck',
				subtypes: 	['move_ally_to_deck'],
				new_status: 'deck',
				side: 		'ally',
			}
		},
		level_cost: 	2,
		cost_factor: 	'full',
	},
	evade:{
		description: 	'Gives this unit a 35% chance to avoid any incoming melee or projectile effect.',
		proc: 			'avoid_effect',
		subtypes: 		['melee','projectile'],
		negated_by_ability: 	['precision'],
		effect: 		35,
		cannot_proc_while_stunned: true,
		hero_tactics: 	['movement_ability','evade_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				pause_before: 		500,
				self_projectile: 	'dodge',
				subtypes: 			['evade','evasion'],
				increase_timeout: 	-500,
			}
		},
		level_cost: 		0.5,
		min_cost: 			2,
		level_cost_hero: 	1.5,
		ability_level_cost_factors:{
			flying: 		2,
		},
		cost_factor: 		'health',
	},
	fear:{
		description: 	'When played, returns {LEVEL} non-undead, non-horror enemy creature unit(s) to their owner\'s hand. Will target the nearest enemy. Any summoned units this targets disappear.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				not_types: 		['structure','object'],
				not_subtypes: 	['horror'],
				max_abilities: 	{undead: 0},
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				target_projectile: 	'voodoo',
				type: 			'move_to_deck',
				subtypes: 		['move_enemy_to_hand','unsummon','mental','deck_control','fear'],
				new_status: 	'hand',
				side: 			'enemy',
			}
		},
		level_cost: 	1,
	},
	fearful_aura:{
		description: 	'When this receives melee damage from a non-undead, non-horror enemy creature unit, that unit returns to their owner\'s hand. Any summoned units this targets disappear.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_amount: 	1,
		proc_while_dead: true,
		hero_tactics: 	['heal_hero_ability','movement_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				not_types: 		['structure','object'],
				not_subtypes: 	['horror'],
				max_abilities: 	{undead: 0},
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				target_projectile: 	'voodoo',
				type: 			'move_to_deck',
				subtypes: 		['move_enemy_to_hand','unsummon','mental','deck_control','fear'],
				new_status: 	'hand',
				side: 			'enemy',
			}
		},
		level_cost: 	2,
	},
	fearful_hero:{
		description: 	'When your hero receives melee damage from a non-undead, non-horror enemy creature unit, there is a 25% chance that unit will return to their owner\'s hand. Any summoned units this targets disappear.',
		proc: 			'ally_hero_damaged',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_chance: 	25,
		proc_amount: 	1,
		cannot_proc_while_stunned: true,
		hero_tactics: 	['heal_hero_ability','movement_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				not_types: 		['structure','object'],
				not_subtypes: 	['horror'],
				max_abilities: 	{undead: 0},
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				target_projectile: 	'voodoo',
				type: 			'move_to_deck',
				subtypes: 		['move_enemy_to_hand','unsummon','mental','deck_control','fear'],
				new_status: 	'hand',
				side: 			'enemy',
			}
		},
		level_cost: 	1,
		level_cost_artifact: 2,
	},
	feast:{
		description: 	'When any enemy living creature is killed by this, that creature is detroyed. This then heals itself by {LEVEL}.',
		proc: 			'prekill_creature',
		cannot_proc_while_stunned: true,
		origin_does_not_have_ability: ['undead'],
		scales: 		true,
		hero_tactics: 	['curse_ability','break_ability','stun_ability'],
		ability_effects:{
			0:{
				targets:{
					0:{
						target: 		'unit',
						target_amount: 	1,
						position: 		'random',
						origin_unit: 	true,
						side: 			'enemy'
					},
				},
				effects:{
					0:{
						projectile: 	'drain',
						type: 			'destroy',
						subtypes: 		['destroy','feast'],
					}
				},
			},
			1:{
				targets:{
					0:{
						target: 		'unit_or_hero',
						target_amount: 	1,
						position: 		'self',
						min_hp: 		1,
						damaged: 		true,
						side: 			'ally'
					},
				},
				effects:{
					0:{
						projectile: 	'healing',
						type: 			'healing',
						subtypes: 		['healing'],
						amount: 		'ability_level',
					}
				},
			},
			
		},
		level_cost: 	0.2,
		level_cost_hero: 2,
	},
	final_bolster_hero:{
		description: 	'When destroyed, your hero gains {LEVEL} temporary health.',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','bolster_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_artifact: 0.5,
	},
	final_burn:{
		description: 	'When destroyed, applies {LEVEL} burn to a random enemy unit. Will target the enemy hero if there are no enemy units.{BURN}',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
			1:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_spell: 	0.5,
	},
	final_curse:{
		description: 	'When destroyed, applies {LEVEL} curse to a random enemy unit or hero.{CURSE}',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 0.75,
	},
	final_discard:{
		description: 	'When this is destroyed, discard up to {LEVEL} card(s) from your hand to the grave.',
		proc: 			'own_death',
		proc_while_dead: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'discard',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['discard_ally','deck_control'],
				new_status: 		'grave',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		-5,
	},
	final_doom:{
		description: 	'When destroyed, applies {LEVEL} doom to a random enemy unit or hero.{DOOM}',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'doom', amount: 9, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	0.75,
		level_cost_spell: 0.175,
		ability_level_cost_factors:{
			resurrect: 		2,
		},
	},
	final_draw:{
		description: 	'When destroyed, draws {LEVEL} card(s).',
		proc: 			'own_death',
		proc_while_dead: true,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		min_cards_in_deck: 	1,
		max_hand_cards: 	9,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'draw_card',
				subtypes: 			['draw_cards','deck_control'],
				amount: 			1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		level_cost_artifact: 3,
		ability_level_cost_factors:{
			resurrect: 		2,
		},
	},
	final_energised_doom:{
		description: 	'When destroyed, applies {LEVEL} doom to all enemy units multiplied by its current energy.',
		proc: 			'own_death',
		proc_amount: 	'origin_energy',
		do_not_pause_between: true,
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
			fragile: 		2,
		},
		level_cost: 	2,
	},
	final_grant_charge:{
		name: 			'final grant: charge',
		ability_subtypes: ['movement','charge'],
		description: 	'When destroyed, grants the charge ability to {LEVEL} random ally creature unit(s). Will only target units that have power.<br/><i>Charge: This unit will move to the furthest free slot with an opposing unit and gains {LEVEL} temporary power for each slot moved.</i>',
		proc: 			'own_death',
		proc_while_dead: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{charge: 0},
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'hoof',
				type: 			'grant_skill',
				subtypes: 		['grant_charge'],
				skill_id: 		'charge',
				skill_at_front: true,
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		1,
	},
	final_hasten:{
		description: 	'When destroyed, reduces the time left of the card in your hand with the highest time left by {LEVEL}.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
				highest_time_left: true,
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		1,
	},
	final_pay_life:{
		description: 	'When destroyed, this deals {LEVEL} to your hero.',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		targets: 	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'any',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-1,
		ability_level_cost_factors:{
			resurrect: 		2,
		},
	},
	final_restore:{
		description: 	'When destroyed, heals your hero by {LEVEL}.',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	final_sacrifice:{
		description: 	'Destroys {LEVEL} ally unit(s) when destroyed.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	'ability_level',
				position: 		'random',
				not_self: 		true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		['sacrifice_ally'],
				amount: 		1,
			},
			
		},
		animation: 			'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		-3,
	},
	final_slow:{
		description: 	'When destroyed, increases the time left of the enemy card with the lowest time by {LEVEL}.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 			'card',
				target_amount: 		1,
				status: 			'hand',
				can_target_zero: 	true,
				lowest_time_left: 	true,
				side: 				'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'slow',
				projectile_target: 	'deck',
				type: 				'increase_ready_time',
				subtypes: 			['slow','slow_enemy','deck_control'],
				amount: 			'ability_level',
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	fire_aura:{
		description: 	'Deals {LEVEL} magical fire damage to any enemy unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability','fire_ability','movement_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['magical','fire','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'red_glow',
		level_cost: 		2,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	fire_ball:		{
		description: 	'Deals {LEVEL} magical fire damage to a random enemy unit and then deals half that amount to any nearby units. Cannot target the enemy hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		ability_effects:{
			0:{
				proc_amount: 	1,
				targets:	{
					0:{
						target: 	'unit',
						target_amount: 1,
						position: 	'random',
						min_hp: 	1,
						side: 		'enemy',
					},
				},
				effects:{
					0:{
						projectile: 	'meteor',
						type: 		'damage',
						subtypes: 	['magical','fire'],
						amount: 	'ability_level',
						set_latest_slot: true
					},
				},
				animation: 	'combat_zoom',
			},
			1:{
				targets:	{
					0:{
						use_latest_slot: true,
						target: 	'unit',
						target_amount: 6,
						position: 	'opposing_wide',
						min_hp: 	1,
						side: 		'any'
					},
				},
				effects:{
					0:{
						projectile: 	'fire',
						type: 		'damage',
						subtypes: 	['magical','fire'],
						amount: 	'ability_level',
						amount_factor: 	0.5
					},
				},
			}
		},
		level_cost: 	4.5,
		level_cost_spell: 	1.5,
		cost_factor: 	'none',
	},
	fire_blast:{
		description: 	'Deals {LEVEL} magical fire damage to all enemy units.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['curse_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['magical','fire','blast'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
		level_cost_hero: 	10,
		average_hits: 		3,
	},
	fire_bolt:{
		description: 	'Deals {LEVEL} magical fire projectile damage to a random enemy unit. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fireray',
				type: 			'damage',
				subtypes: 		['magical','fire','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		1,
	},
	fire_bolt_hv:{
		name: 			'fire bolt',
		description: 	'Deals {LEVEL} magical fire projectile damage to a random enemy unit.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['curse_ability','fire_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fireray',
				type: 			'damage',
				subtypes: 		['magical','fire','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
		average_hits: 		1,
	},
	fire_breath:{
		description: 	'Deals {LEVEL} magical fire damage to all nearby enemy units. Targets the enemy hero if there are no units in range.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 3,
				position: 	'opposing_wide',
				min_hp: 	1,
				side: 		'enemy'
			},
			1:{
				target: 	'hero',
				target_amount: 1,
				min_hp: 	1,
				side: 		'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 		'damage',
				subtypes: 	['magical','fire'],
				amount: 	'ability_level'
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	5,
		cost_factor: 	'none',
	},
	fire_ritual:{
		description: 	'Deals {LEVEL} magical fire damage to a random enemy unit and 1 magical fire damage to itself. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['curse_ability','heal_hero_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy',
			},
			1:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 		'damage',
				subtypes: 	['magical','fire'],
				amount: 	'ability_level',
				amount_factor: 1,
			}
		},
		animation: 	'combat_zoom',
		on_success:{
			targets:	{
				0:{
					target: 	'unit_or_hero',
					target_amount: 1,
					position: 	'self',
					min_hp: 	1,
					side: 		'ally',
				},
			},
			effects:{
				0:{
					projectile: 	'fire',
					type: 		'damage',
					subtypes: 	['magical','fire'],
					amount: 	1,
				}
			},
		},
		level_cost: 	2,
		cost_adjustment: -1,
		cost_factor: 	'none',
	},
	fire_ritual_hero:{
		name: 			'fire ritual',
		description: 	'Deals {LEVEL} magical fire damage to a random enemy unit and 1 magical fire damage to itself.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['curse_ability','heal_hero_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 		'damage',
				subtypes: 	['magical','fire'],
				amount: 	'ability_level',
				amount_factor: 1,
			}
		},
		animation: 	'combat_zoom',
		on_success:{
			targets:	{
				0:{
					target: 	'unit_or_hero',
					target_amount: 1,
					position: 	'self',
					min_hp: 	1,
					side: 		'ally',
				},
			},
			effects:{
				0:{
					projectile: 	'fire',
					type: 		'damage',
					subtypes: 	['magical','fire'],
					amount: 	1,
				}
			},
		},
		level_cost: 	2,
		cost_adjustment: -1,
		cost_factor: 	'none',
	},
	fireproof:{
		description: 	'Reduces all fire damage to 0.',
		proc: 			'max_incoming_damage',
		subtypes: 		['fire'],
		negated_by: 	['ignores_armor'],
		amount: 		0,
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				self_projectile: 	'shield',
				subtypes: 			['resist_fire','type_resist'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 		2,
		max_level: 			1,
	},
	first_aid:{
		description: 	'When an ally creature unit receives damages, this heals that ally by {LEVEL}. Can be used once each round.',
		proc: 			'ally_takes_damage',
		cannot_proc_while_stunned: true,
		delay: 			1,
		scales: 		true,
		hero_tactics: 	['type_creature','plated_ability','fortify_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				not_types: 		['object','structure'],
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				damaged: 		true,
				origin_unit: 	true,
			},
		},
		effects:{
			0:{
				projectile:		'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_structure: 2.25,
	},
	flame_strike:{
		description: 	'Deals melee magical fire damage equal to its power to the opposing unit {LEVEL} time(s). Will target the enemy hero if there is no opposing unit.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['magical','fire','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	1,
		additional_levels_cost: 2,
	},
	flame_strike_hv:{
		name: 			'flame strike',
		description: 	'Deals melee magical fire damage equal to its power to the nearest unit {LEVEL} time(s). Will not target the enemy hero.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		hero_tactics: 	['fire_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['magical','fire','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	1,
		additional_levels_cost: 1,
	},
	flying:{
		description: 	'Gives this unit a 50% chance to avoid any incoming melee effect, unless the effect comes from a unit that also has the flying ability.',
		proc: 			'avoid_effect',
		subtypes: 				['melee'],
		negated_by_ability: 	['flying', 'reach'],
		effect: 		50,
		cannot_proc_while_stunned: true,
		not_on_hero: 	true,
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				pause_before: 		500,
				self_projectile: 	'fly',
				subtypes: 			['flying','evade'],
				increase_timeout: 	-500,
			}
		},
		level_cost: 		0.75,
		min_cost: 			3,
		level_cost_hero: 	1.5,
		cost_factor: 		'health',
	},
	flying_arrivals:{
		ability_subtypes: ['flying'],
		description: 	'When a non-flying, non-submerged ally unit enters the game, this grants the flying ability to it until the start of next round.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0, submerged: 0},
				origin_unit: 	true,
				not_self: 		true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_temp_skill',
				subtypes: 		['grant_flying'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	fortify:{
		description: 	'Grants a random ally unit {LEVEL} shield. Cannot affect heroes. {SHIELD}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['active_healing_ability','plated_ability','cleanse_ally_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify'],
				amount: 		'ability_level'
			},
		},
		animation: 		'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	fortify_all:{
		description: 	'Grants all ally units {LEVEL} shield. Cannot affect heroes. {SHIELD}',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		hero_tactics: 	['active_healing_ability','plated_ability','cleanse_ally_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify'],
				amount: 		'ability_level'
			},
		},
		animation: 		'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	fortify_arrivals:{
		description: 	'When any ally unit enters the game, it gains {LEVEL} armor.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		origin_not_self: 	true,
		scales: 		true,
		hero_tactics: 	['active_healing_ability','plated_ability','cleanse_ally_ability','move_ally_to_hand_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_artifact: 4,
	},
	fortify_hero:{
		description: 	'Grants your hero {LEVEL} shield. {SHIELD}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	fortify_self:{
		description: 	'Grants itself {LEVEL} shield. {SHIELD}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	fragile:{
		description: 	'When your hero receives damage, this is destroyed.',
		proc: 'ally_hero_damaged',
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['destroy'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-0.5,
		level_cost_artifact: 	-4,
		cost_factor: 	'full',
	},
	freeze:{
		description: 	'Freezes {LEVEL} random enemy creature(s). Removes any burn and poison from the target.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy',
				not_types: 		['object','structure'],
				not_subtypes: 	['frozen'],
			},
		},
		effects:{
			0:{
				projectile: 'frost',
				type: 		'turn_into',
				subtypes: 	['freeze','cold'],
				card_id: 	'frozen_creature',
				amount: 	1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					poisoned: 	0,
				},
				subtypes: 	[],
				amount: 	1
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_spell: 1,
	},
	freezing_touch:		{
		description: 	'Freezes any enemy creature it deals damage to. Removes any burn and poison from the target. Will not freeze creatures it kills.',
		proc: 			'dealt_damage',
		proc_chance: 	150,
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'enemy',
				not_types: 		['object','structure'],
			},
		},
		effects:{
			0:{
				target_projectile: 'frost',
				type: 		'turn_into',
				subtypes: 	['freeze','cold'],
				card_id: 	'frozen_creature',
				amount: 	1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					poisoned: 	0,
				},
				subtypes: 	[],
				amount: 	1
			},
		},
		level_cost: 		0,
		average_hit_cost: 	2,
	},
	frost_bolt:{
		description: 	'Deals {LEVEL} physical cold projectile damage to a random enemy unit. Has a 25% chance to stun any unit or hero it deals damage to. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 	true,
		ability_subtypes: ['stun'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['projectile','physical','cold','cold_bolt'],
				amount: 		'ability_level',
				on_success:{
					proc_chance:    25,
					targets:	{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'random',
							origin_unit: 	true,
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'apply_stun',
							subtypes: 	['stun'],
							amount: 	1	
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		1,
		cost_adjustment: 	1,
	},
	frost_bolt_hv:{
		name: 			'frost bolt',
		description: 	'Deals {LEVEL} physical cold projectile damage to a random enemy unit. Has a 25% chance to stun any unit it deals damage to. Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		scales: 	true,
		ability_subtypes: ['stun'],
		hero_tactics: 	['cold_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['projectile','physical','cold','cold_bolt'],
				amount: 		'ability_level',
				on_success:{
					proc_chance:    25,
					targets:	{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'random',
							origin_unit: 	true,
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'apply_stun',
							subtypes: 	['stun'],
							amount: 	1	
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
		average_hits: 		1,
		cost_adjustment: 	1,
	},
	gain_energy:{
		description: 	'Gains {LEVEL} energy each turn.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'any'
			},
		},
		effects:{
			0:{
				self_projectile: 'energize',
				type: 		'apply_energy',
				subtypes: 	['gain_energy'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	go_again:{
		description: 	'Has a 50% chance to get another turn.',
		proc_chance: 	50,
		cannot_proc_while_stunned: true,
		has_used_ability: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				amount: 	1,
				increase_timeout: -250,
			},
		},
		level_cost: 	0.5,
		cost_factor: 	'full',
	},
	grant_counter_spell:{
		name: 			'counter next spell',
		description: 	'Your hero destroys the next {LEVEL} enemy spell card(s) played.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['type_spell'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'magic_shield',
				type: 			'grant_skill',
				subtypes: 		[],
				skill_id: 		'counter_spell',
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},
	grant_explode:{
		name: 			'grant: explode',
		ability_subtypes: ['explode','own_death_proc'],
		description: 	'Grants the explode {LEVEL} ability to a random unit, or increases the level of that ability by {LEVEL}. Cannot target heroes.<br/><i>Explode: When this unit is destroyed, it deals {LEVEL} physical damage to all nearby units.</i>',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		hero_tactics: 	['own_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 	'bomb',
				type: 			'grant_skill',
				subtypes: 		['physical'],
				skill_id: 		'explode',
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_spell: 	0.25,
	},
	grant_one_turn_cursed_touch:{
		name: 			'grant one round: cursed touch',
		ability_subtypes: ['curse'],
		description: 	'Grants the cursed touch ability to a random ally unit or hero until the start of next round.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'grant_temp_skill',
				subtypes: 		[],
				skill_id: 		'cursed_touch',
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1.125,
		level_cost_spell: 	0.375,
	},
	grant_one_turn_flying:{
		name: 			'grant one round: flying',
		ability_subtypes: ['flying'],
		description: 	'Grants the flying ability to {LEVEL} random non-submerged ally unit(s) until the start of next round. Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0, submerged: 0,},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_temp_skill',
				subtypes: 		['grant_flying'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	grant_any_one_turn_flying:{
		name: 			'grant any one round: flying',
		ability_subtypes: ['flying'],
		description: 	'Grants the flying ability to {LEVEL} random non-submerged unit(s) until the start of next round.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0, submerged: 0},
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_temp_skill',
				subtypes: 		['grant_flying'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	grant_plated:{
		name: 			'grant: plated',
		ability_subtypes: ['plated','physical'],
		description: 	'When played, grants the plated ability to {LEVEL} random ally unit(s) with 2 or more health. Cannot target heroes.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		hero_tactics: 	['subtype_warrior'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	'ability_level',
				position: 		'random',
				max_abilities: 	{plated: 0},
				min_hp: 		2,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'shield',
				type: 			'grant_skill',
				subtypes: 		['physical'],
				skill_id: 		'plated',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},
	grant_vampirism:{
		description: 	'Grants the vampiric ability to {LEVEL} random ally creature(s) with at least 1 power. Cannot target your hero.<br/><i>Vampiric: When this deals physical damage to a non-undead creature, it heals itself by the amount of damage done.</i>',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		ability_subtypes: ['active_healing','melee_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	'ability_level',
				position: 		'random',
				not_types: 		['object','structure'],
				max_abilities: 	{vampiric: 0},
				not_self: 		true,
				min_total_hp: 	2,
				min_power: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'grant_skill',
				skill_id: 	'vampiric',
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
	},
	grow:{
		description: 	'This gains {LEVEL} power and health permanently.',
		cannot_proc_while_stunned: true,
		scales: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level'
			},
			1:{
				pause_before: 	-1000,
				type: 			'increase_health',
				subtypes: 		['bolster','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
	},
	guard:{
		description: 	'When played, an enemy unit enters the game or any unit is destroyed, if there is no opposing enemy unit, this unit will move to a free slot with an opposing unit. Can be used once each round.',
		delay: 			1,
		proc: 			['enemy_unit_card_played','post_any_death','on_play'],
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing: 	false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		false,
				placement: 		'random',
				subtypes: 		['movement','guard','guard_now'],
				amount: 		1,
			}
		},
	},
	hasten:{
		description: 	'Reduces the time left of a card in your hand by {LEVEL}.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		hero_tactics: 	['draw_cards_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	hasten_all:{
		description: 	'Reduces the time left of all cards in your hand by {LEVEL}.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		proc_amount: 	1,
		hero_tactics: 	['draw_cards_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	10,
				status: 		'hand',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		20,
		level_cost_spell: 	5,
	},
	hasten_on_act:{
		name: 			'hasten',
		description: 	'If this used another ability, this reduces the time left of a card in your hand by {LEVEL}.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		has_used_ability: 	true,
		proc_amount: 	1,
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	hasten_on_kill:{
		description: 	'Reduces the time left of a card in your hand by {LEVEL} when it destroys a unit.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'hasten',
				projectile_target: 	'deck',
				type: 				'reduce_ready_time',
				subtypes: 			['hasten','deck_control'],
				amount: 			'ability_level',
				side: 				'ally',
			}
		},
		animation: 		'combat_zoom',
	},
	hasten_slowest:{
		description: 	'Reduces the time left of the card in your hand with the highest time left by {LEVEL}.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		hero_tactics: 	['draw_cards_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
				highest_time_left: true,
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
	},
	hatch_chicken:{
		description: 	'Has a 50% chance to turn into a chicken when destroyed by damage.',
		proc: 			'own_death',
		proc_chance: 	50,
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				side: 			'any',
				min_total_hp: 	1,
			},
		},
		effects:{
			0:{
				projectile: 'voodoo',
				type: 		'turn_into',
				subtypes: 	['turn_ally_into'],
				card_id: 	'chicken',
				amount: 	1
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},
	heal:{
		description: 	'Heals a random damaged ally creature unit by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['cleanse_ally_ability','type_creature','plated_ability','resist_magic_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				not_types: 		['object','structure'],
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				projectile:		'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_structure: 3,
		level_cost_spell: 1,
	},
	heal_all:{
		description: 	'Heals all damaged ally creature units by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['cleanse_ally_ability','type_creature','plated_ability','resist_magic_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				not_types: 		['object','structure'],
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				projectile:		'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	12,
		level_cost_structure: 9,
		level_cost_spell: 3,
	},
	hellfire:{
		description: 	'Deals {LEVEL} magical fire damage, multiplied by the distance form their hero, to the enemy unit furthest from their hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'right',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				self_projectile: 	'fire goes_up',
				target_projectile: 	'fire from_below',
				type: 			'damage',
				subtypes: 		['magical','fire'],
				amount: 		'target_slot',
				amount_factor: 'ability_level'
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
		level_cost_hero: 	6,
		average_hits: 		1,
	},
	hero_resists_magic:{
		name: 			'hero resists magic',
		ability_subtypes: ['resist_magic'],
		description: 	'Grants the resist magic ability to your hero until the start of next round.<br/><i>Resist magic: Has a 50% chance to reduce incoming magical damage to 0.</i>',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{resist_magic: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'shield',
				type: 			'grant_temp_skill',
				subtypes: 		['grant_resist_magic'],
				skill_id: 		'resist_magic',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_artifact: 4,
		level_cost_spell: 	1,
		max_level: 1,
	},
	hex:{
		description: 	'Turns {LEVEL} nearest non-undead enemy creature unit(s) into a frog until the end of their next turn.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['snipe_ability','blast_ability','wither_ability','break_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				not_types: 		['structure'],
				max_abilities: 	{undead: 0},
				not_card_ids: 	['frog'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'voodoo',
				type: 		'turn_into',
				subtypes: 	['shift','turn_enemy_into','hex'],
				card_id: 	'frog',
				amount: 	1
			},
			1:{
				type: 		'set_skill',
				skill_id: 	'return_into_original',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	1.25,
		level_cost_hero: 	4,
	},
	hide:{
		description: 	'Grants itself stealth every turn.',
		cannot_proc_while_stunned: true,
		ability_subtypes: 	['evade'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				max_abilities: 	{stealth: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 'dodge',
				type: 		'set_skill',
				subtypes: 	['grant_stealth'],
				skill_id: 	'stealth',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_hero: 	2,
		cost_on_top: 	true,
	},
	hide_hv:{
		name: 			'hide',
		description: 	'Grants itself stealth every turn.',
		cannot_proc_while_stunned: true,
		ability_subtypes: 	['evade'],
		hero_tactics: 	['evade_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				max_abilities: 	{stealth: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 'dodge',
				type: 		'set_skill',
				subtypes: 	['grant_stealth'],
				skill_id: 	'stealth',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_hero: 	2,
		cost_on_top: 	true,
	},
	hide_ally:{
		ability_subtypes: ['evade'],
		description: 	'Grants {LEVEL} ally unit(s) stealth. If used by a unit, this cannot target itself.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['evade_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_self: 		true,
				max_abilities: 	{stealth: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 'dodge',
				type: 		'set_skill',
				subtypes: 	['grant_stealth'],
				skill_id: 	'stealth',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_hero: 	4,
		level_cost_spell: 	1.25,
	},
	hide_hero:{
		ability_subtypes: ['evade'],
		description: 	'Grants your hero stealth.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{stealth: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 'dodge',
				type: 		'set_skill',
				subtypes: 	['grant_stealth','buff_hero'],
				skill_id: 	'stealth',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_hero: 	2,
		level_cost_spell: 	1,
	},
	hide_on_kill:{
		description: 	'Grants itself stealth when it destroys a unit.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['curse_ability','hex_ability','turn_enemy_into_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				max_abilities: 	{stealth: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'dodge',
				type: 			'set_skill',
				subtypes: 		['on_kill','grant_stealth'],
				skill_id: 		'stealth',
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
	},
	homebound:{
		description: 	'Has a 50% chance to return to its owner\'s hand. If this was summoned, it disappears.',
		cannot_proc_while_stunned: true,
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		level_cost: 	2,
		level_cost_artifact: 1,
	},
	ice_blast:{
		description: 	'Deals {LEVEL} physical cold damage to all enemy units. Has a 25% chance to stun any unit or hero it hits.',
		cannot_proc_while_stunned: true,
		ability_subtypes: ['stun'],
		hero_tactics: 	['curse_ability','hex_ability','turn_enemy_into_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['physical','cold','blast'],
				amount: 		'ability_level',
				on_success:{
					proc_chance:    25,
					targets:	{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'random',
							origin_unit: 	true,
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'apply_stun',
							subtypes: 	['stun'],
							amount: 	1	
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	2.25,
		average_hits: 		3,
		cost_adjustment: 	3,
	},
	ignites:{
		description: 	'Applies {LEVEL} burn to any unit or hero it deals damage to.{BURN}',
		proc: 			'dealt_damage',
		ability_subtypes:['dealt_damage_proc'],
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['burn_ability','conflagrate_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
				pause_before: 	-250,
			}
		},
		ability_level_cost_factors:{
			backlash: 		-1,
		},
		level_cost: 		0,
		average_hit_cost: 	1,
	},
	incinerate:{
		description: 	'Destroys {LEVEL} burning enemy unit(s).',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['burn_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'burning', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'destroy',
				subtypes: 		['fire'],
				amount: 		1,
			},
			
		},
		animation: 			'combat_zoom',
		level_cost: 		16,
		level_cost_spell: 	4,
	},
	jolt:{
		description: 	'A random ally creature unit that has power either gains or looses {LEVEL} temporary power.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		proc_chance: 50,
		hero_tactics: 	['melee_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level',
			},
		},
		on_failure:{
			targets:	{
				0:{
					target: 		'unit',
					target_amount: 	1,
					position: 		'random',
					not_types: 		['object','structure'],
					not_self: 		true,
					min_hp: 		1,
					min_power: 		0,
					side: 			'ally'
				},
			},
			effects:{
				0:{
					projectile: 	'lull',
					type: 			'grant_temp_power',
					subtypes: 		['weaken','weaken_ally'],
					amount: 		'ability_level',
					amount_factor: 	-1,
				},
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.2,
		level_cost_spell: 	0.3,
		level_cost_hero: 	1,
	},
	keeps_going:{
		description: 	'This has a 75% chance to go again.',
		proc_chance: 	75,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				side: 		'any'
			},
		},
		effects:{
			0:{
				type: 				'go_again',
				subtypes: 			['go_again'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		cost_factor: 		'full'
	},
	lay_egg:{
		description: 	'Has a 50% chance to summon {LEVEL} chicken egg(s).',
		proc: 			'basic',
		proc_chance: 	50,
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature','summon_structure'],
				card_id: 	'chicken_egg',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		3.5,
		level_cost_spell: 	0.875,
	},
	lay_trap:{
		description: 	'This unit will move to a random free slot. If it does, it leaves a trap behind.',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		'dont care',
				has_opposing: 	'dont care',
				placement: 		'random',
				subtypes: 		['movement','move'],
				amount: 		1,
				on_success:{
					targets:	{
						0:{
							target: 		'hero',
							target_amount: 	1,
							side: 			'ally'
						},
					},
					effects:{
						0:{
							type: 		'summon_unit',
							subtypes: 	['summon_ally','summon_structure'],
							card_id: 	'trap',
							forced_slot: 'origin_old_slot',
							amount: 	1,
						}
					},
				}
			},
		},
		level_cost: 8,
	},
	leech_hero:{
		description: 	'When this deals damage to the enemy hero, this heals your hero by the damage dealt.',
		proc: 			'dealt_damage_to_hero',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['active_healing','feast','buff_hero','heal_hero'],
				amount: 		'latest_result'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	levitate:{
		name: 			'levitate',
		ability_subtypes: ['flying'],
		description: 	'Grants the flying ability to {LEVEL} random non-submerged ally unit(s). Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0, submerged: 0,},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_skill',
				subtypes: 		['magical','grant_flying'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	life_cost:{
		description: 	'When played, permanently reduces the health of your hero by {LEVEL}.',
		proc: 			'on_play',
		proc_while_dead: true,
		scales: 		true,
		targets: 	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'any',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_health',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-1,
		ability_level_cost_factors:{
			retreat: 	2,
			homebound: 	2,
		},
	},
	lightning:{
		description: 	'Deals {LEVEL} magical lightning damage to the enemy unit with the highest current health. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['reap_ability','lightning_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				highest_hp: 	true,
				side: 		'enemy'
			},
			1:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				self_projectile: 	'lightning goes_up',
				target_projectile: 	'lightning comes_down',
				type: 				'damage',
				subtypes: 			['magical','elemental','lightning'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	1.25,
		average_hits: 		1,
	},
	lightning_hv:{
		name: 			'lightning',
		description: 	'Deals {LEVEL} magical lightning damage to the enemy unit with the highest current health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['reap_ability','lightning_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				highest_hp: 	true,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				self_projectile: 	'lightning goes_up',
				target_projectile: 	'lightning comes_down',
				type: 				'damage',
				subtypes: 			['magical','elemental','lightning'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1.25,
		average_hits: 		1,
	},
	lightning_storm:{
		description: 	'Deals 1 magical lightning damage to the enemy unit with the highest current health {LEVEL} time(s). Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['reap_ability','lightning_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				highest_hp: 	true,
				side: 		'enemy'
			},
			1:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				self_projectile: 	'lightning goes_up',
				target_projectile: 	'lightning comes_down',
				type: 				'damage',
				subtypes: 			['magical','elemental','lightning'],
				amount: 			1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	1.25,
		average_hits: 		'ability_level',
	},
	lightning_storm_hv:{
		name: 			'lightning storm',
		description: 	'Deals 1 magical lightning damage to the enemy unit with the highest current health {LEVEL} time(s). Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['reap_ability','lightning_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				highest_hp: 	true,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				self_projectile: 	'lightning goes_up',
				target_projectile: 	'lightning comes_down',
				type: 				'damage',
				subtypes: 			['magical','elemental','lightning'],
				amount: 			1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	1.25,
		average_hits: 		'ability_level',
	},
	long_echo:{
		description: 	'This card has a 75% chance to return to its owners deck.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		has_used_ability: true,
		proc_chance: 75,
		targets:	{
			0:{
				target: 			'any',
				target_amount: 		1,
				position: 			'self',
				side: 				'ally',
				has_origin_card: 	true,
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_deck'],
				new_status: 	'deck',
				side: 			'ally',
				pause_before: 	2000,
			}
		},
		level_cost: 	1,
		cost_factor: 	'full',
	},
	marred_vines:{
		description: 	'When this takes damage, there is a 50% chance it summons {LEVEL} vine(s).',
		proc: 			'receive_damage',
		max_ally_units: 4,
		proc_chance: 	50,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'vine',
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	min_enemy_hand_cards:{
		name: 		'enemy hand cards:',
		post_name: 	'+',
		description: 	'This card will not be played if there\'s less then {LEVEL} cards in the enemy\'s hand.',
		proc: 			'on_play',
		remove_skill: 	'min_enemy_hand_cards',
		show_amount_adjustment: 0,
		level_cost: 	-0.05,
		cost_factor: 	'full',
		level_cost_cum: true,
	},
	max_hand_cards:{
		name: 		'hand cards:',
		post_name: 	'-',
		description: 	'This card will not be played if there\'s more then {LEVEL} cards in your hand.',
		proc: 			'on_play',
		remove_skill: 	'max_hand_cards',
		show_amount_adjustment: 0,
		level_cost: 	0,
	},
	maximum_allies:{
		name: 		'allies:',
		post_name: 	'-',
		description: 	'This card will not be played if there\'s more than {LEVEL} ally unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'maximum_allies',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_adjustment: 	-1,
		cost_on_top: true,
	},
	maximum_enemies:{
		name: 		'enemies:',
		post_name: 	'-',
		description: 	'This card will not be played if there\'s more than {LEVEL} enemy unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'maximum_enemies',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_adjustment: -1,
		cost_on_top: 	true,
	},
	minimum_allies:{
		name: 			'allies:',
		post_name: 		'+',
		description: 	'This card will not be played if there\'s less than {LEVEL} ally unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_allies',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_on_top: 	true,
	},
	minimum_ally_creatures:{
		name: 			'ally creatures:',
		post_name: 		'+',
		description: 	'This card will not be played if there\'s less than {LEVEL} ally creature unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_ally_creatures',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_on_top: 	true,
	},
	minimum_dead_ally_creatures:{
		name: 			'dead ally creatures:',
		post_name: 		'+',
		description: 	'This card will not be played if there\'s less then {LEVEL} ally creatures in your grave.',
		proc: 			'on_play',
		remove_skill: 	'minimum_dead_ally_creatures',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_on_top: 	true,
	},
	minimum_enemies:{
		name: 			'enemies:',
		post_name: 		'+',
		ability_subtypes: 		['min_enemies'],
		description: 	'This card will not be played if there\'s less than {LEVEL} enemy unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_enemies',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_on_top: 	true,
	},
	minimum_enemy_creatures:{
		name: 			'enemy creatures:',
		post_name: 		'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s less than {LEVEL} enemy creature unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_enemy_creatures',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		cost_on_top: 	true,
	},
	min_hand_cards:{
		name: 			'hand cards:',
		post_name: 		'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s less than {LEVEL} card(s) in your hand.',
		proc: 			'on_play',
		remove_skill: 	'min_hand_cards',
		show_amount_adjustment: 0,
		level_cost: 	0,
	},
	morph_ally:{
		description: 	'Turns the ally creature with the lowest cost into a random creature with an equal or higher cost. Can be used once.',
		remove_skill_after_use: 	'morph_ally',
		hero_tactics: 	['type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				min_hp: 		1,
				lowest_cost: 	true,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'turn_into',
				subtypes: 		['shift','turn_ally_into'],
				card_id: 		'random',
				card_type: 		'creature',
				min_time: 		'target_cost',
				amount: 		1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},
	morph_sporeling:{
		description: 	'Turns {LEVEL} enemy unit(s) into a sporeling when played. Will target the unit with the highest cost first.',
		proc: 			'on_play',
		proc_amount: 	'ability_level',
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_card_ids: 	['sporeling'],
				highest_cost: 	true,
				min_hp: 		1,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'turn_into',
				subtypes: 		['shift','turn_enemy_into'],
				card_id: 		'sporeling',
				amount: 		1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_hero: 	1,
	},
	move:{
		description: 	'This unit will move to a random free slot.',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		'dont care',
				has_opposing: 	'dont care',
				placement: 		'random',
				subtypes: 		['movement','move'],
				amount: 		1,
			}
		},
	},
	move_ally:{
		description: 	'Moves {LEVEL} ally creature unit(s) to a random free slot.',
		proc: 			'basic',
		max_ally_units: 4,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['charge_ability','projectile_ability','dealt_damage_to_hero_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure'],
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				projectile: 	'dodge',
				type: 			'move',
				placement: 		'random',
				subtypes: 		['movement','run_away','move_ally'],
				amount: 		1,
			}
		},
		level_cost: 	1,
		level_cost_spell: 0.5,
	},
	nurture:{
		description: 	'A random non-undead ally creature with 1 health gains {LEVEL} health permanently.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['active_healing_ability','plated_ability','resist_magic_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				max_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'increase_health',
				subtypes: 		['bolster','nurture'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_spell: 	0.25,
	},
	painful_discards:{
		description: 	'When the enemy discards a card, this deals {LEVEL} damage to the enemy hero.',
		proc: 			'enemy_discarded',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 'voodoo',
				type: 		'damage',
				subtypes: 	['direct_damage'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	1,
		average_hits: 		1,
	},
	painful_hand:{
		description: 	'Deals {LEVEL} damage to the enemy hero for every card in its hand.',
		cannot_proc_while_stunned: true,
		min_enemy_hand_cards: 1,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				subtypes: 		['direct_damage','deck_control'],
				amount: 		'enemy_hand_card_count',
				amount_factor: 	'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		40,
		level_cost_spell: 	10,
		average_hits: 		1,
	},
	painful_empty_hand:{
		description: 	'Deals 1 damage to the enemy hero for every card in its hand below {LEVEL}.',
		cannot_proc_while_stunned: true,
		max_enemy_hand_cards: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				subtypes: 		['direct_damage','deck_control'],
				amount: 		'enemy_hand_card_count',
				amount_factor: 	-1,
				amount_adjustment: 'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_artifact: 1,
		average_hits: 		1,
	},
	painful_spells:{
		description: 	'Whenever an enemy spell is played, this deals {LEVEL} damage to the enemy hero.',
		proc: 			'enemy_spell_card_played',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				subtypes: 		['direct_damage'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		average_hits: 		1,
	},
	pay_life:{
		description: 	'This deals {LEVEL} damage to your hero.',
		scales: 		true,
		targets: 	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'any',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-4,
		level_cost_spell: 	-2,
	},
	pay_life_on_act:{
		name: 			'pay life',
		description: 	'If this used another ability, it deals {LEVEL} damage to your hero.',
		proc: 			'on_play',
		scales: 		true,
		has_used_ability: true,
		targets: 	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'any',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-1,
		level_cost_spell: 	-2,
	},
	pay_life_on_play:{
		description: 	'When played, this deals {LEVEL} damage to your hero.',
		proc: 			'on_play',
		scales: 		true,
		targets: 	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'any',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				type: 			'damage',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-1,
		level_cost_spell: 	-2,
	},
	pilfer:{
		description: 	'Gain control over an enemy artifact. Can only be used up to {LEVEL} time(s) and only if you have less than 5 artifacts in play.',
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
		reduce_skill_after_use: 'pilfer',
		targets:	{
			0:{
				target: 	'artifact',
				target_amount: 1,
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'dodge',
				type: 		'change_side',
				subtypes: 	['steal','sneaky'],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	10,
		level_cost_hero: 3,
	},
	plated:{
		description: 	'Reduces incoming physical damage down to {LEVEL}.',
		proc: 			'max_incoming_damage',
		subtypes: 		['physical'],
		negated_by: 	['ignores_armor'],
		amount: 		'ability_level',
		scales: 		true,
		hero_tactics: 	['heal_hero_ability','resist_magic_ability','cleanse_ally_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				self_projectile: 	'shield',
				subtypes: 			['plated'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 		0.5,
		min_cost: 			2,
		cost_factor: 		'health',
	},
	plunder:{
		description: 	'When this deals damage to the enemy hero, destroy an enemy artifact or non-golem structure unit.',
		proc: 			'dealt_damage_to_hero',
		ability_subtypes:['dealt_damage_proc'],
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				not_types: 	['creature'],
				not_subtypes: 	['golem'],
				position: 	'random',
				side: 		'enemy'
			},
			1:{
				add_targets: true,
				target: 	'artifact',
				target_amount: 1,
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'broken',
				type: 		'destroy',
				subtypes: 	['break'],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.5,
		cost_factor: 	'none',
	},
	poison:{
		description: 	'Applies {LEVEL} poison to a random enemy creature. Will only target the enemy hero if there are no enemy units.{POISON}',
		scales: 		true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_spell: 	0.375,
	},
	poison_all:{
		description: 	'Applies {LEVEL} poison to all enemy creatures. {POISON}',
		scales: 		true,
		do_not_pause_between: 	true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	poison_arrivals:{
		description: 	'Applies {LEVEL} poison to any non-undead enemy creature unit that enters the game.',
		proc: 			'enemy_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2.25,
		level_cost_artifact: 4.5,
	},
	poison_aura:{
		description: 	'Applies {LEVEL} poison to any enemy non-undead creature unit or hero that deals melee damage to it.{POISON}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		scales: 		true,
		proc_while_dead: true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability','heal_hero_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'poison',
				type: 			'apply_poison',
				subtypes: 		['poison'],
				amount: 		'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	1,
	},
	poison_hv:{
		name: 			'poison',
		description: 	'Applies {LEVEL} poison to a random enemy non-undead creature. Will not target the enemy hero.{POISON}',
		scales: 		true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_spell: 	0.75,
	},
	poisonous_deaths:{
		description: 	'Applies {LEVEL} poison to a random enemy non-undead creature unit or hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability','ally_creature_death_proc_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		level_cost_artifact: 2,
	},
	poisonous_deaths_hv:{
		name: 			'poisonous deaths',
		description: 	'Applies {LEVEL} poison to a random enemy non-undead creature unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['poison_ability','break_ability','wither_ability','ally_creature_death_proc_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		level_cost_artifact: 2,
	},
	power_bolt:{
		description: 	'Deals magical projectile damage equal to this units power to a random enemy unit. Will only target the enemy hero if there are no enemy units.',
		proc_amount: 	'ability_level',
		need_power: 	true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
			1:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'magic',
				type: 		'damage',
				subtypes: 	['magical','projectile'],
				amount: 	'origin_power'
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	4,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 2,
	},
	power_bolt_hv:{
		name: 			'power bolt',
		description: 	'Deals magical projectile damage equal to this units power to a random enemy unit.',
		proc_amount: 	'ability_level',
		need_power: 	true,
		hero_tactics: 	['curse_ability','movement_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'magic',
				type: 		'damage',
				subtypes: 	['magical','projectile'],
				amount: 	'origin_power'
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	3,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 1,
	},
	precision:{
		description: 	'This ignores evade and stealth.',
		level_cost: 	2,
	},
	purify:{
		description: 	'Removes all negative effects from {LEVEL} random ally unit(s) or your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['cleanse_ally_ability'],
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'cleanse',
				target_projectile: 'cleanse',
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					cursed: 	0,
					doom: 		0,
					poisoned: 	0,
				},
				subtypes: 	['cleanse_ally'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	purify_all:{
		description: 	'Removes all negative effects from all ally units and your hero.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	6,
				position: 		'random',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'cleanse',
				target_projectile: 'cleanse',
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					cursed: 	0,
					doom: 		0,
					poisoned: 	0,
				},
				subtypes: 	['cleanse_ally'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	purify_self:{
		description: 	'Removes all negative effects from itself.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				//projectile: 'cleanse',
				target_projectile: 'cleanse',
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					cursed: 	0,
					doom: 		0,
					poisoned: 	0,
				},
				subtypes: 	['cleanse_ally'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	purifying_entry:{
		description: 	'When played, removes all negative effects from all ally units and your hero.',
		cannot_proc_while_stunned: true,
		proc: 			'on_play',
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	6,
				position: 		'random',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'cleanse',
				target_projectile: 'cleanse',
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					cursed: 	0,
					doom: 		0,
					poisoned: 	0,
				},
				subtypes: 	['cleanse_ally'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	purifying_deaths:{
		description: 	'Removes all negative effects from {LEVEL} random ally unit(s) or your hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		hero_tactics: 	['ally_creature_death_proc_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'cleanse',
				target_projectile: 'cleanse',
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
					cursed: 	0,
					doom: 		0,
					poisoned: 	0,
				},
				subtypes: 	['cleanse_ally'],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		level_cost_artifact: 4,
	},
	raging_deaths:{
		description: 	'When an ally creature is detroyed, this gains {LEVEL} temporary power.',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
		proc_amount: 	1,
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['ally_creature_death_proc_ability','type_creature','summon_ally_creature_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','enrage','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
		ability_level_cost_factors:{
			resurrect: 		1.25,
		},
		level_cost_structure: 1.5,
	},
	raging_hero:{
		description: 	'When your hero receives damage, it gains {LEVEL} temporary power.',
		proc: 			'ally_hero_damaged',
		ability_subtypes: ['receive_damage_proc'],
		scales: 		true,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				target_projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','buff_hero','empower_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	raise_skeleton:{
		ability_subtypes: ['summon_ally','summon_creature'],
		description: 	'Up to {LEVEL} time(s), removes a creature card from your grave from the game and summons a basic skeleton.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		min_ally_creature_cards_in_grave: 1,
		reduce_skill_after_use:'raise_skeleton',
		proc_amount: 'ability_level',
		hero_tactics: 	['type_creature'],
		targets:	{
			0:{
				target: 	'card',
				target_amount: 1,
				status: 	'grave',
				types: 		['creature'],
				side: 		'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'resurrect',
				projectile_target: 	'deck',
				type: 				'remove_card',
				side: 				'ally',
			},
		},
		on_each_success:{
			targets:{
				0:{
					target: 		'hero',
					target_amount: 	1,
					side: 			'ally'
				},
			},
			effects:{
				0:{
					pause_before: -1000,
					type: 		'summon_unit',
					subtypes: 	['summon_ally','summon_creature'],
					card_id: 	'skeleton',
					amount: 	1
				},
			},
		},
		
		animation: 	'combat_zoom',
		level_cost: 		3.5,
		//level_cost_spell: 	2.5,
		level_cost_hero: 	3.5,
	},
	reap:{
		description: 	'Destroys an enemy creature with {LEVEL} or less health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				max_hp: 		'ability_level',
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['reap'],
				amount: 	1,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		3,
		level_cost_hero: 	3,
		level_cost_spell: 	2,
	},
	reap_all:{
		description: 	'Destroys all enemy creatures with {LEVEL} or less health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				max_hp: 		'ability_level',
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['reap'],
				amount: 	1,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		8,
		level_cost_hero: 	8,
		level_cost_spell: 	2,
	},
	reaping_touch:{
		description: 	'After this deals damage to an enemy creature unit, destroys it if it has {LEVEL} or less health.',
		proc: 			'dealt_damage',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				max_hp: 		'ability_level',
				not_self: 		true,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'set_max_hp',
				subtypes: 	['reap'],
				amount: 	0,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	2,
	},
	reclaim:{
		description: 	'Returns {LEVEL} card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		ability_level_cost_factors:{
			echo: 		2,
		},
	},
	reclaim_artifact:{
		description: 	'Returns up to {LEVEL} artifact card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		reduce_skill_after_use: 	'reclaim_artifact',
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_artifact'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['artifact'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	reclaim_artifacts:{
		description: 	'Has a 25% chance to return {LEVEL} artifact card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		proc_chance: 	25,
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_artifact'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['artifact'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	reclaim_creature:{
		description: 	'Returns up to {LEVEL} creature card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		reduce_skill_after_use: 	'reclaim_creature',
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_creature'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['creature'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	reclaim_creatures:{
		description: 	'Has a {LEVEL}0% chance to return a creature card in your grave to your deck.',
		cannot_proc_while_stunned: true,
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_creature'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['creature'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.8,
	},
	reclaim_spell:{
		description: 	'Returns up to {LEVEL} spell card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		reduce_skill_after_use: 	'reclaim_spell',
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_spell'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['spell'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
		level_cost_artifact: 1,
		ability_level_cost_factors:{
			echo: 		2,
		},
	},
	reclaim_spells:{
		description: 	'Has a 25% chance to return {LEVEL} spell card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		proc_chance: 	25,
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_spell'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['spell'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	reclaim_structure:{
		description: 	'Returns up to {LEVEL} structure card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		reduce_skill_after_use: 	'reclaim_structure',
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_structure'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['structure'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim_structure','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	reclaim_structures:{
		description: 	'Has a 25% chance to return {LEVEL} structure card(s) in your grave to your deck.',
		cannot_proc_while_stunned: true,
		proc_chance: 	25,
		proc_amount: 	'ability_level',
		hero_tactics: 	['draw_cards_ability','type_structure'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'grave',
				types: 			['structure'],
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck','deck_control','reclaim_structure','reclaim'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	regenerate:{
		description: 	'Heals itself by {LEVEL} each turn.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['bolster_ability','regeneration_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				projectile:		'healing',
				type: 			'healing',
				subtypes: 		['healing','regeneration'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	3,
	},
	release_bird:{
		description: 	'Summons {LEVEL} bird creature(s) when destroyed.',
		proc: 			'own_death',
		proc_while_dead: true,
		max_ally_units: 4,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'bird',
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		level_cost_artifact: 2.1,
		cost_on_top: 	true,
	},
	release_echo:{
		description: 	'When destroyed, this has a 75% chance to summon a copy of this card.',
		proc: 			'own_death',
		proc_chance: 	75,
		proc_while_dead: true,
		max_ally_units: 4,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'origin_card',
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		cost_factor: 	'full',
	},
	release_sporeling:{
		description: 	'Summons {LEVEL} sporeling(s) when destroyed.',
		proc: 			'own_death',
		proc_while_dead: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature','summon_sporeling'],
				type: 		'summon_unit',
				card_id: 	'sporeling',
				amount: 	1
			}
		},
		level_cost: 		2,
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost_artifact: 0.75,
		cost_on_top: 		true,
	},
	repair:{
		description: 	'Repairs a random non-plant damaged ally structure by {LEVEL}. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['type_structure'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				not_types: 		['object','creature'],
				not_subtypes: 	['plant'],
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				projectile:		'repair',
				type: 			'healing',
				subtypes: 		['repairing'],
				amount: 		'ability_level'
			}
		},
		animation: 	'combat_zoom',
		level_cost: 4,
		level_cost_creature: 3,
		level_cost_spell: 1,
	},
	resist_cold:{
		description: 	'Has a 50% chance to reduce incoming cold damage to 0.',
		proc: 			'max_incoming_damage',
		reduce_chance: 	50,
		subtypes: 		['cold'],
		negated_by: 	['ignores_armor'],
		amount: 		0,
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				self_projectile: 	'shield',
				subtypes: 			['resist_cold','type_resist'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 		0.125,
		min_cost: 			1,
		cost_factor: 		'health',
		max_level: 			1,
	},
	resist_magic:{
		description: 	'Has a 50% chance to reduce incoming magical damage to 0.',
		proc: 			'max_incoming_damage',
		reduce_chance: 	50,
		subtypes: 		['magical'],
		negated_by: 	['ignores_armor'],
		amount: 		0,
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				self_projectile: 	'shield',
				subtypes: 			['resist_magic','type_resist'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 		0.25,
		min_cost: 			1,
		cost_factor: 		'health',
		max_level: 			1,
	},
	resist_fire:{
		description: 	'Has a 50% chance to reduce incoming fire damage to 0.',
		proc: 			'max_incoming_damage',
		reduce_chance: 	50,
		subtypes: 		['fire'],
		amount: 		0,
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				self_projectile: 	'shield',
				subtypes: 			['resist_fire','type_resist'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 		0.25,
		min_cost: 			1,
		cost_factor: 		'health',
		max_level: 			1,
	},
	restore:{
		description: 	'Heals your hero by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_artifact: 6,
		level_cost_spell: 	1,
		level_cost_hero: 	3,
	},
	restore_enemy:{
		description: 	'Heals the enemy hero by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		-2,
	},
	restore_on_act:{
		name: 			'restore',
		description: 	'Heals your hero by {LEVEL} if this used another ability.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		has_used_ability: 	true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_artifact: 6,
		level_cost_spell: 	1,
	},
	restoring_arrivals:{
		description: 	'When any ally creature enters the game, this heals your hero by {LEVEL}.',
		proc: 			'ally_creature_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['move_ally_to_hand_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_artifact: 6,
		level_cost_spell: 	1.5,
	},
	restoring_deaths:{
		description: 	'When any ally creature is destroyed, this heals your hero by {LEVEL}.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['own_death_proc_ability','summon_ally_creature_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_artifact: 6,
		level_cost_spell: 	1.5,
	},
	restoring_spells:{
		description: 	'When any ally spell is cast, this heals your hero by {LEVEL}.',
		proc: 			'ally_spell_card_played',
		cannot_proc_while_stunned: true,
		origin_not_self: 	true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'ally',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				projectile:		'healing',
				type: 			'healing',
				subtypes: 		['healing','active_healing','heal_hero','buff_hero'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		3,
		level_cost_artifact: 6,
		level_cost_spell: 	1.5,
	},
	resurrect:{
		description: 	'When this\' health reaches 0, it has a 60% chance to come back to life with {LEVEL} health.',
		proc: 			'own_death',
		proc_chance: 	60,
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				max_hp: 		0,
				min_total_hp: 	1,
				side: 			'ally',
				slot_free: 		true
			},
		},
		effects:{
			0:{
				projectile: 	'resurrect',
				type: 			'healing',
				subtypes: 		['resurrect'],
				amount: 		'ability_level',
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_hero: 	1,
		additional_levels_cost: -2,
	},
	resurrect_ally:{
		description: 	'When an ally creature unit\'s health reaches 0, there is a {LEVEL}0% chance this will bring it back to life with 1 health.',
		proc: 			'ally_creature_death',
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		hero_tactics: 	['own_death_proc_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				max_hp: 		0,
				min_total_hp: 	1,
				side: 			'ally',
				slot_free: 		true
			},
		},
		effects:{
			0:{
				projectile: 	'resurrect',
				type: 			'healing',
				subtypes: 		['resurrect'],
				amount: 		1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_structure: 1.5,
	},
	resurrect_hero:{
		description: 	'When your hero\'s health reaches 0, there is a {LEVEL}0% chance this will bring it back to life with 1 health.',
		proc: 			'ally_death',
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				max_hp: 		0,
				min_total_hp: 	1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'resurrect',
				type: 			'healing',
				subtypes: 		['resurrect'],
				amount: 		1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	retreat:{
		description: 	'When this survives damage, it return to its owner\'s hand. If this was summoned, it disappears.',
		proc: 			'receive_damage',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','retreat'],
				new_status: 	'hand',
				side: 			'ally',
				pause_before: 	1000,
			}
		},
		level_cost: 	1,
		cost_factor: 	'health',
	},
	retreat_on_kill:{
		description: 	'Return to your hand when it destroys an enemy.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'ally',
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','retreat'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		level_cost: 	1,
	},
	retreat_on_spell_cast:{
		description: 	'If damaged, returns to your hand after any spell card is played.',
		proc: 			'spell_card_played',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				damaged: 		true,
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','retreat'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	return_into_original:{
		not_used: 		true,
		description: 	'If this unit is shapeshifted, returns into the original creature.',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				side: 			'any',
			},
		},
		effects:{
			0:{
				type: 		'turn_into_original',
				amount: 	1
			},
		},
		animation: 	'combat_zoom',
		level_cost: 	0,
	},
	reveal:{
		description: 	'Removes stealth from {LEVEL} enemy unit(s). If this targets a unit with the hide ability, it looses that ability. Will target the nearest unit with stealth.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				has_ability: 	'stealth',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'eye',
				type: 		'set_skill',
				subtypes: 	['reveal'],
				skill_id: 	'stealth',
				amount: 	0
			},
			1:{
				type: 			'set_skill',
				skill_id: 		'hide',
				amount: 		0,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_spell: 	0.25,
	},
	reveal_all:{
		description: 	'Removes stealth from all enemy units. Also removes the hide ability from all those.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				has_ability: 	'stealth',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'eye',
				type: 		'set_skill',
				subtypes: 	['reveal'],
				skill_id: 	'stealth',
				amount: 	0
			},
			1:{
				type: 			'set_skill',
				skill_id: 		'hide',
				amount: 		0,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	righthand:{
		ability_subtypes: ['righthand'],
		description: 	'This card will be placed on the far side of your hand when drawn.',
		cost_on_top: 	true,
	},
	run_away:{
		description: 	'If there is an opposing unit, this unit will move to a slot with no opposing unit when played, any enemy unit enters the game, an enemy moved or on its turn. Can be used once each round.',
		proc: 			['on_play','enemy_unit_card_played','enemy_moved','basic'],
		delay: 			1,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing: 	true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		true,
				placement: 		'random',
				subtypes: 		['movement','run_away','move_ally'],
				amount: 		1,
			}
		},
		level_cost: 	1,
	},
	sacrifice:{
		description: 	'Destroy up to {LEVEL} random ally unit(s) or artifact(s). Will target units or artifacts with the lowest cost first.',
		cannot_proc_while_stunned: true,
		remove_skill_after_use: 'sacrifice',
		targets:	{
			0:{
				target: 	'any',
				target_amount: 'ability_level',
				position: 	'random',
				not_types: 	['hero'],
				not_self: 	true,
				lowest_cost: true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-4,
		level_cost_spell: -5,
		average_hits: 	'ability_level',
	},
	sacrifice_creature:{
		description: 	'Destroy up to {LEVEL} random ally creature unit(s). Will target units with the lowest cost first.',
		cannot_proc_while_stunned: true,
		remove_skill_after_use: 'sacrifice_creature',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 'ability_level',
				position: 	'random',
				not_self: 	true,
				not_types: 	['structure'],
				lowest_cost: true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-5,
		level_cost_spell: -6,
		average_hits: 	'ability_level',
	},
	sacrifice_living_creature:{
		description: 	'Destroy up to {LEVEL} random ally non-undead creature unit(s). Will target units with the lowest cost first.',
		cannot_proc_while_stunned: true,
		remove_skill_after_use: 'sacrifice_living_creature',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 'ability_level',
				position: 	'random',
				not_self: 	true,
				not_types: 	['structure','artifact'],
				max_abilities: 	{undead: 0},
				lowest_cost: true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-5,
		level_cost_spell: -6,
		average_hits: 	'ability_level',
	},
	sacrifice_unit:{
		description: 	'Destroy up to {LEVEL} random ally unit(s). Will target units with the lowest cost first.',
		cannot_proc_while_stunned: true,
		remove_skill_after_use: 'sacrifice_unit',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 'ability_level',
				position: 	'random',
				not_self: 	true,
				lowest_cost: true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-4,
		level_cost_spell: -5,
		average_hits: 	'ability_level',
	},
	scavange:{
		description: 	'When any structure or artifact is destroyed, this gains {LEVEL} temporary power.',
		proc: 			['artifact_death','structure_death'],
		proc_amount: 	1,
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['type_structure','type_artifact','summon_structure_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','enrage','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		1,
	},
	seek_creature:{
		description: 	'This unit will move to a free slot with an opposing creature if it is not facing a creature.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing_creature: false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		false,
				opposing_type: 	'creature',
				placement: 		'random',
				subtypes: 		['movement','seek','move_ally'],
				amount: 		1,
			}
		},
	},
	seek_enemy:{
		description: 	'This unit will move to a free slot with an opposing unit if it is not facing a unit.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing: false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		false,
				placement: 		'random',
				subtypes: 		['movement','seek','move_ally'],
				amount: 		1,
			}
		},
	},
	seek_structure:{
		description: 	'This unit will move to a free slot with an opposing structure if it is not facing a structure.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing_structure: false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		false,
				opposing_type: 	'structure',
				placement: 		'random',
				subtypes: 		['movement','seek','move_ally'],
				amount: 		1,
			}
		},
	},
	shatter:{
		description: 	'Returns into the original creature when destroyed by damage. If there is no original creature, turns into a random creature in stead.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				max_hp: 		0,
				min_total_hp: 	1,
				side: 			'ally',
				has_origin_card: true,
				slot_free: 		true
			},
		},
		effects:{
			0:{
				type: 		'turn_into_original',
				subtypes: 	['shift'],
				amount: 	1
			},
		},
		animation: 	'combat_zoom',
		on_failure:{
			proc_while_dead: true,
			targets:	{
				0:{
					target: 		'unit_or_hero',
					target_amount: 	1,
					position: 		'self',
					max_hp: 		0,
					min_total_hp: 	1,
					side: 			'ally',
					slot_free: 		true
				},
			},
			effects:{
				0:{
					type: 		'turn_into',
					subtypes: 	['shift'],
					card_id: 	'random',
					card_type: 	'creature',
					amount: 	1
				},
			},
			animation: 	'combat_zoom',
		},
		level_cost: 	7,
	},
	shoot:{
		description: 	'Deals physical projectile damage equal to its power to a random enemy unit {LEVEL} time(s). Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		need_power: 	true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','projectile','ranged'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	4,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 2,
	},
	shoot_unit:{
		description: 	'Deals physical projectile damage equal to its power to a random enemy unit {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		need_power: 	true,
		hero_tactics: 	['curse_ability','movement_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','projectile','ranged'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	3,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 1,
	},
	shoot_arrival:{
		description: 	'When an enemy unit enters the game, this deals {LEVEL} physical projectile damage to it. Can be used once.',
		cannot_proc_while_stunned: true,
		proc: 			'enemy_unit_card_played',
		remove_skill_after_use: 'shoot_arrival',
		scales: 		true,
		hero_tactics: 	['curse_ability','movement_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','projectile','ranged'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	1,
		average_hits: 	0.25,
	},
	shoot_arrivals:{
		description: 	'When an enemy unit enters the game, this deals {LEVEL} physical projectile damage to it.',
		cannot_proc_while_stunned: true,
		proc: 			'enemy_unit_card_played',
		scales: 		true,
		hero_tactics: 	['curse_ability','movement_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','projectile','ranged'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	4,
		level_cost_artifact: 8,
		average_hits: 	1,
	},
	shooting_entry:{
		description: 	'When played, deals {LEVEL} physical projectile damage to the nearest enemy unit. Will target the enemy hero if there are no enemy units.',
		proc: 			'on_play',
		ability_subtypes: 		['on_play_proc'],
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','projectile','ranged'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	1,
		level_cost_artifact: 0.25,
		average_hits: 	0.25,
	},
	slow:{
		description: 	'Increases the time left of the enemy card with the lowest time left {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['discard_enemy_ability','slow_enemy_ability'],
		targets:	{
			0:{
				target: 			'card',
				target_amount: 		1,
				status: 			'hand',
				can_target_zero: 	true,
				lowest_time_left: 	true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'slow',
				projectile_target: 	'deck',
				type: 				'increase_ready_time',
				subtypes: 			['slow','slow_enemy','deck_control'],
				amount: 			1,
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_spell: 1,
	},
	slow_all:{
		description: 	'Increases the time left of all enemy cards by {LEVEL}.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		hero_tactics: 	['discard_enemy_ability','slow_enemy_ability'],
		targets:	{
			0:{
				target: 			'card',
				target_amount: 		10,
				status: 			'hand',
				can_target_zero: 	true,
				side: 				'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'slow',
				projectile_target: 	'deck',
				type: 				'increase_ready_time',
				subtypes: 			['slow','slow_enemy','deck_control'],
				amount: 			'ability_level',
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	20,
		level_cost_spell: 5,
	},
	slow_enemy_draws:{
		description: 	'When the enemy draws a card, this increases the time left of that card by {LEVEL}.',
		proc: 			'enemy_card_drawn',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['discard_enemy_ability','slow_enemy_ability'],
		targets:	{
			0:{
				target: 			'card',
				target_amount: 		1,
				status: 			'hand',
				origin_unit: 		true,
				can_target_zero: 	true,
				side: 				'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'slow',
				projectile_target: 	'deck',
				type: 				'increase_ready_time',
				subtypes: 			['slow','slow_enemy','deck_control'],
				amount: 			'ability_level',
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	slow_own:{
		description: 	'Increases the ready time of a random ally card by {LEVEL}.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'card',
				target_amount: 1,
				status: 	'hand',
				can_target_zero: true,
				side: 		'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'slow',
				projectile_target: 	'deck',
				type: 				'increase_ready_time',
				subtypes: 			['slow','deck_control'],
				amount: 			'ability_level',
				side: 				'ally',
			}
		},
		animation: 	'combat_zoom',
		level_cost: -1,
	},
	slowing_draw:{
		description: 	'Draws up to {LEVEL} card(s). Every time it does, it increase the time left on all your cards by 1.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'slowing_draw',
		min_cards_in_deck: 	1,
		max_hand_cards: 	9,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'book',
				projectile_target: 'deck',
				type: 			'draw_card',
				subtypes: 		['draw_cards','deck_control'],
				amount: 		1,
				on_success:{
					do_not_pause_between: true,
					targets:	{
						0:{
							target: 			'card',
							target_amount: 		10,
							status: 			'hand',
							can_target_zero: 	true,
							side: 				'ally',
						},
					},
					effects:{
						0:{
							projectile: 		'slow',
							projectile_target: 	'deck',
							type: 				'increase_ready_time',
							subtypes: 			[],
							amount: 			1,
							side: 				'ally',
						}
					},
				}
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_on_top: 	true,
	},
	snipe:{
		description: 	'Deals physical projectile damage equal to its power to the enemy unit or hero with the lowest health.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		hero_tactics: 	['hex_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				lowest_hp: 		true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','ranged','projectile','snipe'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	4,
		cost_adjustment: 1,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	snipe_hv:{
		name: 			'snipe',
		description: 	'Deals physical projectile damage equal to its power to the enemy unit with the lowest health.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		hero_tactics: 	['hex_ability','wither_ability','stun_ability','reveal_ability','snipe_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				lowest_hp: 		true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'arrow',
				type: 		'damage',
				subtypes: 	['physical','ranged','projectile','snipe'],
				amount: 	'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	3,
		cost_adjustment: 1,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	spawn_sporeling:{
		description: 	'Has a 25% chance to summon {LEVEL} sporeling(s).',
		proc: 			'basic',
		proc_chance: 	25,
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		hero_tactics: 	['summon_creature_ability','consume_ability','ally_creature_death_proc_ability','ally_unit_card_played_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'sporeling',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 2,
	},
	spellblast:{
		name: 			'spellblast',
		description: 	'When any spell is cast, this deals {LEVEL} magical damage to all enemy units.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		scales: true,
		hero_tactics: 	['type_spell','draw_cards_ability','restore_hero_ability','echo_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lightning',
				type: 			'damage',
				subtypes: 		['magical'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_hero: 	10,
		average_hits: 		3,
	},
	spell_bolt:{
		description: 	'When any spell is cast, this deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will only target the enemy hero if there are no enemy units.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['arcane_bolts','projectile','magical'],
		proc_amount: 	'ability_level',
		scales: true,
		hero_tactics: 	['type_spell','draw_cards_ability','restore_hero_ability','echo_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'magic',
				type: 			'damage',
				subtypes: 		['magical','arcane_bolts','projectile','on_spellcast','spellbolt'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4.5,
		cost_adjustment: 	-0.5,
		average_hits: 		'ability_level',
	},
	spell_bolt_hv:{
		name: 			'spell bolt',
		description: 	'When any spell is cast, this deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will not target the enemy hero.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['arcane_bolts','projectile','magical'],
		proc_amount: 	'ability_level',
		scales: true,
		hero_tactics: 	['type_spell','draw_cards_ability','restore_hero_ability','echo_ability','arcane_bolts_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'magic',
				type: 			'damage',
				subtypes: 		['magical','arcane_bolts','projectile','on_spellcast','spellbolt'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3.5,
		cost_adjustment: 	-0.5,
		average_hits: 		'ability_level',
	},
	spellpower:{
		description: 	'When any spell is cast, this gains {LEVEL} temporary power.',
		proc: 			'any_spell_card_played',
		proc_amount: 	1,
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['empower_any','empower_ally'],
		scales: 		true,
		hero_tactics: 	['type_spell','draw_cards_ability','restore_hero_ability','echo_ability','melee_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				min_power: 		0,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower_any','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
	},
	spellrush:{
		description: 	'Reduces the time left of a random card in your hand by {LEVEL} after any spell card is played.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['type_spell','draw_cards_ability','restore_hero_ability','echo_ability','summon_ally_ability','move_ally_to_deck_ability'],
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'hasten',
				projectile_target: 	'deck',
				type: 				'reduce_ready_time',
				subtypes: 			['hasten','deck_control','on_spellcast'],
				amount: 			'ability_level',
				side: 				'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
	},
	static_aura:{
		description: 	'Deals {LEVEL} magical lightning damage to any unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability','movement_ability','projectile_ability','lightning_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lightning',
				type: 			'damage',
				subtypes: 		['magical','lightning','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'red_glow',
		level_cost: 		2,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	static_strike:{
		description: 	'Deals melee magical lightning damage equal to its power to the opposing unit {LEVEL} time(s). Will target the enemy hero if there is no opposing unit.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		hero_tactics: 	['empower_hero_ability','lightning_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'lightning',
				type: 			'damage',
				subtypes: 		['magical','lightning','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 2,
	},
	static_strike_hv:{
		name: 			'static strike',
		description: 	'Deals melee magical lightning damage equal to its power to the nearest enemy unit {LEVEL} time(s).',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		hero_tactics: 	['empower_hero_ability','lightning_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lightning',
				type: 			'damage',
				subtypes: 		['magical','lightning','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 2,
	},
	steal:{
		description: 	'If the enemy has at least {LEVEL} artifact(s), when this deals damage to the enemy hero, gain control over an enemy artifact. Can only be used if you have less than 5 artifacts in play.',
		proc: 			'dealt_damage_to_hero',
		ability_subtypes: 	['dealt_damage_proc'],
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
		min_enemy_artifacts: 'ability_level',
		targets:	{
			0:{
				target: 	'artifact',
				target_amount: 1,
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'dodge',
				type: 		'change_side',
				subtypes: 	['steal','sneaky'],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-1,
		cost_adjustment: 5,
	},
	stealth:{
		description: 	'Gives this unit a 100% chance to avoid any incoming melee or projectile effect. This ability is removed when it has affect.',
		proc: 			'avoid_effect',
		subtypes: 		['melee','projectile'],
		negated_by_ability: 	['precision'],
		effect: 		100,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				self_projectile: 	'dodge',
				type: 			'set_skill',
				skill_id: 		'stealth',
				subtypes: 		['evade','use_stealth'],
				amount: 		0,
				increase_timeout: -500
			}
		},
		level_cost: 		2,
		level_cost_hero: 	0.25,
	},
	step_aside:{
		description: 	'If there is an opposing unit, this unit will move to an adjacent slot with no opposing unit when played, any enemy unit enters the game, an enemy moved or on its turn. Can be used once each round.',
		proc: 			['on_play','enemy_unit_card_played','enemy_moved','basic'],
		delay: 			1,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_opposing: 	true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				safe_slot: 		true,
				placement: 		'adjacent_of_origin',
				subtypes: 		['movement','run_away','move_ally'],
				amount: 		1,
			}
		},
		level_cost: 	0.5,
	},
	strike:{
		description: 	'Deals physical melee damage equal to its power to the opposing unit {LEVEL} time(s). Will target the enemy hero if there is no opposing unit.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 2,
	},
	strike_arrivals:{
		description: 	'When an enemy unit enters the game, this deals {LEVEL} physical melee damage to it.',
		cannot_proc_while_stunned: true,
		proc: 			'enemy_unit_card_played',
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	3,
		level_cost_artifact: 6,
		average_hits: 	1,
	},
	strike_hero:{
		description: 	'Deals {LEVEL} physical melee damage to the enemy hero.',
		cannot_proc_while_stunned: true,
		scales: true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				min_hp: 		1,
				side: 			'enemy'
			}
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee','direct_damage'],
				amount: 		'ability_level'
			}
		},
		animation: 			'attack',
		level_cost: 		8,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	strike_unit:{
		description: 	'Deals physical melee damage equal to its power to the nearest enemy unit {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		need_power: 	true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
		additional_levels_cost: 1,
	},
	striking_entry:{
		description: 	'When played, deals physical melee damage equal to its power to the nearest enemy unit {LEVEL} time(s). Will target the enemy hero if there are no enemy units.',
		proc: 			'on_play',
		proc_amount: 	'ability_level',
		ability_subtypes: 		['on_play_proc'],
		cannot_proc_while_stunned: true,
		need_power: 	true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	1,
		cost_factor: 	'power',
		average_hits: 	0.25,
		additional_levels_cost: 0.5,
	},
	stun:{
		description: 	'Stuns a random enemy unit for {LEVEL} turn(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'stun',
				type: 		'apply_stun',
				subtypes: 	['stun'],
				amount: 	1	
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	stun_construct:{
		description: 	'Stuns a random enemy artifact or golem for {LEVEL} turn(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['poison_ability'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				subtypes: 	['golem'],
				has_effect: {effect_name: 'stunned', amount: 0, limit: 'max'},
				position: 	'random',
				side: 		'enemy'
			},
			1:{
				add_targets: true,
				target: 	'artifact',
				target_amount: 1,
				has_effect: {effect_name: 'stunned', amount: 0, limit: 'max'},
				position: 	'random',
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'stun',
				type: 		'apply_stun',
				subtypes: 	['stun'],
				amount: 	1	
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	stun_creature:{
		description: 	'Stuns a random living enemy creature unit for {LEVEL} turn(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['break_ability','wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure'],
				max_abilities: 	{undead: 0},
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'stun',
				type: 		'apply_stun',
				subtypes: 	['stun'],
				amount: 	1	
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	stunning_touch:{
		description: 	'Has a 35% chance to apply {LEVEL} stun to any unit or hero it damages.',
		proc: 			'dealt_damage',
		proc_chance: 	35,
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		0,
		average_hit_cost: 	1,
	},
	submerged:{
		name: 			'submerged',
		description: 	'Gives this unit a 50% chance to avoid any incoming projectile effect, or any melee effect that comes from a unit that has the flying ability.',
		proc: 			'avoid_effect',
		subtypes: 				['projectile','melee'],
		subtypes_while_origin_has_ability: 	{melee: ['flying'],},
		effect: 		50,
		hero_tactics: 	['submerge_ability','water_ability'],
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				pause_before: 		500,
				self_projectile: 	'water',
				subtypes: 			['submerge','evade'],
				increase_timeout: 	-500,
			}
		},
		level_cost: 		0.75,
		min_cost: 			3,
		level_cost_hero: 	1.5,
		cost_factor: 		'health',
	},
	summon_artifact:{
		description: 	'Summons {LEVEL} artifact(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_artifact'],
				card_id: 	'random',
				card_type: 	'artifact',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		24,
		level_cost_hero: 	6,
		level_cost_spell: 	6
	},
	summon_conscript:{
		description: 	'Summons {LEVEL} conscript(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability','movement_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'conscript',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
	},
	summon_creature:{
		description: 	'Summons {LEVEL} creature unit(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'random',
				card_type: 	'creature',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		24,
		level_cost_spell: 	6,
	},
	summon_frog:{
		description: 	'Summons {LEVEL} frog(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability','movement_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'frog',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
		level_cost_hero: 	6,
	},
	summon_ghost:{
		description: 	'Summons {LEVEL} ghost(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability','movement_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'ghost',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	2,
		level_cost_hero: 	4,
	},
	summon_golem:{
		description: 	'Summons {LEVEL} golem unit(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'random',
				card_type: 	'structure',
				card_subtype: 'golem',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		24,
		level_cost_spell: 	6,
	},
	summon_imp:{
		description: 	'Summons up to {LEVEL} imp type unit(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_imp',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'random',
				card_type: 	'any',
				card_subtype: 'imp',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	6,
	},
	summon_locust:{
		description: 	'Summons up to {LEVEL} locust(s).',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_locust',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'locust',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	5,
	},
	summon_locust_on_kill:{
		description: 	'When this destroys a unit, it summons {LEVEL} locust(s).',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'locust',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		0,
		//level_cost_spell: 	8,
		average_hit_cost: 	4,
	},
	summon_mud_crab:{
		description: 	'While there is an unopposed enemy unit, this summons {LEVEL} mud crab(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		min_unopposed_enemy_units: 1,
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability','movement_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'mud_crab',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	1,
		level_cost_hero: 	3,
	},
	summon_peasant:{
		description: 	'Summons {LEVEL} peasant(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_peasant',
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability','movement_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'peasant',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	4,
	},
	summon_structure:{
		description: 	'Summons {LEVEL} structure unit(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'random',
				card_type: 	'structure',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		24,
		level_cost_spell: 	6,
	},
	summon_trap:{
		description: 	'Summons {LEVEL} trap(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_structure'],
				card_id: 	'trap',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
	},
	summon_skeleton:{
		description: 	'Summons {LEVEL} skeleton(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'skeleton',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		16,
		level_cost_spell: 	4,
	},
	summon_skeleton_on_act:{
		name: 			'summon skeleton',
		description: 	'Summons {LEVEL} skeleton(s) if this used another ability.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		has_used_ability: 	true,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'skeleton',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		16,
		level_cost_spell: 	4,
	},
	summon_skeleton_on_kill:{
		description: 	'When this destroys a unit, it summons up to a total of {LEVEL} skeleton(s).',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_skeleton_on_kill',
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'skeleton',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		4,
	},
	summon_spike_pod:{
		description: 	'Summons {LEVEL} spike pod(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'spike_pod',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		16,
		level_cost_spell: 	4,
	},
	summon_sporeling:{
		description: 	'Summons {LEVEL} sporeling(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'ability_level',
		hero_tactics: 	['ally_creature_card_played_proc_ability','movement_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature'],
				card_id: 	'sporeling',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
	},
	thorned_hero:{
		description: 	'When an enemy unit deals melee damage to your hero, this will deal {LEVEL} physical damage to it.',
		proc: 			'ally_hero_damaged',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		scales: 		true,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 	'spikes',
				type: 			'damage',
				subtypes: 		['physical','thorns','buff_hero'],
				amount: 		'ability_level',
			}
		},
		animation: 			'red_glow',
		level_cost: 		2,
		level_cost_artifact: 6,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	thorns:{
		description: 	'Deals {LEVEL} physical damage to any enemy that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['heal_hero_ability','movement_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 	'spikes',
				type: 			'damage',
				subtypes: 		['physical','thorns'],
				amount: 		'ability_level',
			}
		},
		animation: 			'red_glow',
		level_cost: 		0.4,
		level_cost_hero: 	2,
		average_hits: 		1,
		cost_factor: 		'health',
	},
	trample:{
		description: 	'When this kills a unit with physical melee damage, the excess damage is dealt to the enemy hero.',
		proc: 			'overkill',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['empower_hero_ability','stun_ability','reveal_ability'],
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'hoof',
				type: 		'damage',
				subtypes: 	['melee','physical','trample'],
				amount: 	'ability_level'
			}
		},
		level_cost: 	1,
		level_cost_hero: 2,
	},
	trampling_might:{
		description: 	'A random ally unit that uses power and has the strike ability and an opposing unit, but does not have the trample ability, gains {LEVEL} permanent power and the trample ability.<br/><i>Trample: When this kills a unit with melee damage, the excess damage is dealt to the enemy hero.</i>',
		cannot_proc_while_stunned: true,
		scales: 		true,
		ability_subtypes: ['trample'],
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				has_ability: 'strike',
				max_abilities: {trample:0},
				min_power: 	0,
				min_hp: 	1,
				has_opposing: 	true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['enrage','empower_ally'],
				amount: 		'ability_level',
			},
			1:{
				type: 			'grant_skill',
				subtypes: 		['grant_trample'],
				skill_id: 		'trample',
				amount: 		1
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		cost_adjustment: 	2,
	},
	trap:{
		description: 	'Any enemy unit or hero that deals melee damage to this has a 25% chance to be stunned for {LEVEL} round(s).',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		proc_chance:    25,
		hero_tactics: 	['heal_hero_ability','movement_ability','projectile_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		0,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'stun',
				type: 		'apply_stun',
				subtypes: 	['stun'],
				amount: 	'ability_level'
			}
		},
		level_cost: 	2,
		level_cost_hero: 1,
		cost_factor: 	'none',
	},
	triumphant_haste:{
		description: 	'When this deals damage to the enemy hero, it reduces the time left of a card in your hand by {LEVEL}.',
		proc: 			'dealt_damage_to_hero',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	trophy_kill:{
		description: 	'Restores {LEVEL} health to your hero whenever it destroys an enemy unit.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		hero_tactics: 	['curse_ability','hex_ability','stun_ability','reveal_ability'],
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'ally',
				damaged: 	true,
			},
		},
		effects:{
			0:{
				projectile: 'healing',
				type: 		'healing',
				subtypes: 	['healing','trophy_kill'],
				amount: 	'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		level_cost_hero: 	2,
	},
	turncoat:{
		description: 	'If there are no more then 4 enemy units, this unit changes sides.',
		proc: 		'basic',
		proc_amount: 	1,
		max_enemy_units: 4,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				type: 		'change_side',
				subtypes: 	['movement','change_side'],
				amount: 	1,
			},
		},
		level_cost: 	-1,
		cost_factor: 	'full',
	},
	turn_enemy:{
		description: 	'Turns {LEVEL} random enemy non-undead creature unit(s) into an ally.',
		max_ally_units: 4,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'turn_enemy',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'lull',
				type: 		'change_side',
				subtypes: 	['mental','change_side'],
				amount: 	1,
			},
			1:{
				type: 		'enable_to_act',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		15,
		level_cost_hero: 	4,
	},
	uncursable:{
		description: 		'This is immune to curse effects.',
		grants_immunities: 	['curse'],
		ability_subtypes: 	['uncursable'],
		level_cost: 		0.5,
	},
	undead:{
		description: 		'This is immune to poison and all mental effects.',
		grants_immunities: 	['poison','mental'],
		ability_subtypes: 	['undead'],
	},
	unshakable:{
		description: 		'This is immune to stuns and weakness.',
		grants_immunities: 	['stun','weaken'],
		ability_subtypes: 	['unshakable'],
		level_cost: 		0.5,
	},
	unsummon_ally:{
		description: 	'Returns {LEVEL} damaged ally creature unit(s) to your hand. Will not unsummon summoned units.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['ally_creature_card_played_proc_ability','hasten_ability','heal_hero_ability','on_play_proc_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	'ability_level',
				position: 		'random',
				not_types: 		['structure','object'],
				side: 			'ally',
				damaged: 		true,
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','unsummon'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	unsummon_dead:{
		description: 	'When any ally creature unit dies, there is a {LEVEL}0% chance it returns to your hand. Will not unsummon summoned units.',
		cannot_proc_while_stunned: true,
		proc: 			'ally_creature_death',
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		hero_tactics: 	['type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				origin_unit: 	true,
				max_hp: 		0,
				side: 			'ally',
				has_origin_card: true,
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand','unsummon'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		2,
		level_cost_structure: 	1.5,
	},
	unsummon_enemy:{
		description: 	'Returns a random enemy unit to their hand. Summoned units disappear.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'voodoo',
				target_projectile: 	'voodoo',
				type: 			'move_to_deck',
				subtypes: 		['move_enemy_to_hand','unsummon','deck_control'],
				new_status: 	'hand',
				side: 			'enemy',
			}
		},
		level_cost: 	3,
	},
	upkeep_creature:{
		name: 			'upkeep: creature',
		description: 	'Each turn, this destroys a random ally creature unit with no more than {LEVEL} health. If it cannot, this is stunned. Will target units with the lowest cost first.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_self: 	true,
				not_types: 	['structure','artifact'],
				max_hp: 	'ability_level',
				lowest_cost: true,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice_ally'],
				amount: 	1,
			},
		},
		on_failure:{
			targets:{
				0:{
					target: 		'any',
					target_amount: 	1,
					position: 		'self',
					side: 			'any',
				},
			},
			effects:{
				0:{
					projectile:		'stun',
					type: 			'apply_stun',
					subtypes: 		['stun_self'],
					amount: 		1,
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-6,
	},
	vampiric:{
		description: 	'When this deals physical damage to a non-undead creature, it heals itself by the amount of damage done.',
		proc: 			'dealt_damage',
		subtypes: 		['physical'],
		origin_type:    'creature',
		origin_does_not_have_ability: ['undead'],
		hero_tactics: 	['empower_hero_ability','break_ability','curse_ability','stun_ability','reveal_ability'],
		targets:{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'any',
				damaged: 		true,
			},
		},
		effects:{
			0:{
				projectile:		'drain',
				type: 			'healing',
				subtypes: 		['vampiric','leech','healing'],
				amount: 		'latest_result',
				//max_amount: 	'ability_level',
			}
		},
		level_cost: 		0,
		average_hit_cost: 	3,
	},
	vengeance:{
		description: 	'When any ally creature is destroyed, deals {LEVEL} physical melee damage to the nearest enemy unit. Will target the enemy hero if there are no enemy units.',
		proc: 			'ally_creature_death',
		proc_while_dead: false,
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['summon_creature_ability','own_death_proc_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee','vengeance'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		average_hits: 	1,
	},
	vengeance_hv:{
		name: 			'vengeance',
		description: 	'When any ally creature is destroyed, deals {LEVEL} physical melee damage to the nearest enemy unit. Will not target the enemy hero.',
		proc: 			'ally_creature_death',
		proc_while_dead: false,
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['summon_creature_ability','own_death_proc_ability','ally_creature_death_proc_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'strike',
				type: 			'damage',
				subtypes: 		['physical','melee','vengeance'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	3,
		average_hits: 	1,
	},
	venom:{
		description: 	'Applies {LEVEL} poison to any non-undead creature it damages.{POISON}',
		proc: 			'dealt_damage',
		ability_subtypes: 	['dealt_damage_proc'],
		proc_while_dead: true,
		scales: 		true,
		hero_tactics: 	['poison_ability','break_ability','curse_ability','stun_ability','reveal_ability'],
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		0,
		average_hit_cost: 	0.75,
	},
	venomous_hero:{
		description: 	'When your hero deals damage to a non-undead enemy creature, this will apply {LEVEL} poison to it.',
		proc: 			'enemy_damaged_by_hero',
		ability_subtypes: ['dealt_damage_proc'],
		scales: 		true,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_poison',
				subtypes: 		['poison','ally_hero_deals_damage'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		1,
	},
	victory_rush:{
		description: 	'Gains {LEVEL} additional turn(s) when it destroys an enemy.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		hero_tactics: 	['curse_ability','stun_ability','reveal_ability'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['victory_rush'],
				amount: 	1
			},
		},
		animation: 		'combat_zoom',
		level_cost: 		0.25,
		level_cost_hero: 	0.5,
		cost_factor: 		'full',
	},
	water_blast:{
		description: 	'Deals {LEVEL} physical water damage to all non-flying enemy units.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['curse_ability','hex_ability','air_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				max_abilities: 	{flying: 0},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'water',
				type: 			'damage',
				subtypes: 		['physical','water','blast'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	2,
		average_hits: 		3,
	},
	water_bolt:{
		description: 	'Deals {LEVEL} physical water projectile damage to a random enemy unit. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'water',
				type: 			'damage',
				subtypes: 		['physical','water','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		1,
	},
	water_bolt_hv:{
		name: 			'water bolt',
		description: 	'Deals {LEVEL} physical water projectile damage to a random enemy unit.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['water_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'water',
				type: 			'damage',
				subtypes: 		['physical','water','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		average_hits: 	1,
	},
	weaken_all:{
		description: 	'All enemy units with power loose {LEVEL} power temporarily.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_self: 		true,
				min_hp: 		1,
				min_power: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lull',
				type: 			'grant_temp_power',
				subtypes: 		['weaken','weaken_enemy'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
		level_cost_hero: 	4,
	},
	weakness:{
		description: 	'The enemy unit with the highest power looses {LEVEL} power temporarily.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_self: 		true,
				min_hp: 		1,
				min_power: 		1,
				highest_power: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lull',
				type: 			'grant_temp_power',
				subtypes: 		['weaken','weaken_enemy'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
		level_cost_hero: 	2,
	},
	wither:{
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL}. Will target the enemy hero if there are no enemy units.',
		proc: 			'basic',
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['magical','wither'],
				amount: 		'ability_level',
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	wither_arrivals:{
		description: 	'Reduces the maximum health of any enemy unit that enters the game by {LEVEL}.',
		proc: 			'enemy_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['wither'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		level_cost_artifact: 12,
	},
	wither_hv:{
		name: 			'wither',
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL}. Will not target the enemy hero.',
		proc: 			'basic',
		scales: 		true,
		hero_tactics: 	['wither_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['magical','wither'],
				amount: 		'ability_level',
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	wither_hero:{
		description: 	'When played, reduces the health of the enemy hero by {LEVEL}.',
		proc: 			'on_play',
		targets: 	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'any',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_health',
				amount: 		'ability_level',
			},
		},
		level_cost: 	4,
	},
	withering_aura:{
		description: 	'When an enemy unit or hero deals melee damage to this, it reduces the maximum health of that enemy by {LEVEL}.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		ability_subtypes: ['receive_damage_proc'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'wither',
				type: 		'reduce_max_health',
				subtypes: 	['wither'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_hero: 	4,
	},
	withering_deaths:{
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL} when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		scales: 		true,
		hero_tactics: 	['ally_creature_death_proc_ability','own_death_proc_ability','summon_creature_ability'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['wither'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
		level_cost_artifact: 8,
	},
	withering_hero:{
		description: 	'When an enemy unit deals melee damage to your hero, this reduces the maximum health of that enemy by {LEVEL}.',
		proc: 			'ally_hero_damaged',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		scales: 		true,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'wither',
				type: 		'reduce_max_health',
				subtypes: 	['magical','wither','buff_hero'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_artifact: 6,
		level_cost_hero: 	4,
	},
	withering_touch:{
		description: 	'Any damage this deals to enemies reduces the maximum health of that enemy as well.',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		proc_amount: 	1,
		hero_tactics: 	['reveal_ability','stun_ability','wither_ability'],
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'random',
				origin_unit: true,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				target_projectile: 'wither',
				type: 		'reduce_max_health',
				subtypes: 	['magical','wither'],
				amount: 	'latest_result',
			}
		},
		level_cost: 	1,
	},
	auto_learn:{
		name: 			'learned on pickup',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This recipe is automatically added to your known recipes when picked up.',
		not_on_hero: 	true,
		level_cost: 	0,
		cost_factor: 	'full',
		used: 			true,
	},
};

var not_craft_themes = ['physical','melee','magical','type_resist'];
var all_ability_procs = {};

$.each(all_abilities, function(ability_id, ability_info){
	if(all_abilities[ability_id]['name'] == undefined){all_abilities[ability_id]['name'] = ability_id.replaceAll('_',' ');};
	if(all_abilities[ability_id]['proc_amount'] == undefined){all_abilities[ability_id]['proc_amount'] = 1;};
	if(all_abilities[ability_id]['proc'] == undefined){all_abilities[ability_id]['proc'] = 'basic';};
	if(all_abilities[ability_id]['animation'] == undefined){all_abilities[ability_id]['animation'] = 'none';};
	
	if(all_abilities[ability_id]['level_cost'] == undefined){all_abilities[ability_id]['level_cost'] = 1;};
	if(all_abilities[ability_id]['cost_factor'] == undefined){all_abilities[ability_id]['cost_factor'] = 'none';};
	if(all_abilities[ability_id]['ability_subtypes'] == undefined){all_abilities[ability_id]['ability_subtypes'] = {};};
	if(all_abilities[ability_id]['ability_craft_subtypes'] == undefined){all_abilities[ability_id]['ability_craft_subtypes'] = {};};
	if(count_object(all_abilities[ability_id]['ability_subtypes']) > 0 && count_object(all_abilities[ability_id]['ability_craft_subtypes']) == 0)
	{
		all_abilities[ability_id]['ability_craft_subtypes'] = true_copyobject(all_abilities[ability_id]['ability_subtypes']);
	}

	var ability_subtype_id = get_highest_key_in_object(all_abilities[ability_id]['ability_subtypes']);
	if(all_abilities[ability_id]['effects'] != undefined)
	{	
		$.each(all_abilities[ability_id]['effects'], function(effect_id, ability_effect){
			if(ability_effect['amount'] == 'origin_power')
			{
				all_abilities[ability_id]['uses_power'] = true;
			}
			ability_subtype_id++;
			all_abilities[ability_id]['ability_subtypes'][ability_subtype_id] = 'type_' + ability_effect['type'];
			var found_craft_effect_type = false;
			$.each(ability_effect['subtypes'], function(subtype_id, subtype_name){
				
				if(all_abilities[ability_id]['not_ability_subtypes'] == undefined || match_array_values(all_abilities[ability_id]['not_ability_subtypes'], subtype_name) == false)
				{
					ability_subtype_id++;
					all_abilities[ability_id]['ability_subtypes'][ability_subtype_id] = subtype_name;
				}
				if(match_array_values(not_craft_themes, subtype_name) == false)
				{
					all_abilities[ability_id]['ability_craft_subtypes'][get_highest_key_in_object(all_abilities[ability_id]['ability_craft_subtypes']) + 1] = subtype_name;
					found_craft_effect_type = true;
				}
			});	
		});
	}

	if(typeof(all_abilities[ability_id]['proc']) == 'string')
	{
		ability_subtype_id++;
		all_abilities[ability_id]['ability_subtypes'][ability_subtype_id] = all_abilities[ability_id]['proc'] + '_proc';
		all_ability_procs[all_abilities[ability_id]['proc']] = true;
	}
	else
	{
		$.each(all_abilities[ability_id]['proc'], function(proc_id, ability_proc){
			ability_subtype_id++;
			all_abilities[ability_id]['ability_subtypes'][ability_subtype_id] = ability_proc + '_proc';
			all_ability_procs[ability_proc] = true;
		});
	}
	
	all_abilities[ability_id]['name_color'] = 'rgba(255,255,255,0.9)';
	all_abilities[ability_id]['description'] = ability_info['description'].split("{BURN}").join('<br/><i>Burn: Suffers fire damage equal to half the burn it suffers at the end of each turn, rounded up. The amount of burn is halved each time it deals damage, rounded down.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{POISON}").join('<br/><i>Poison: Suffers piercing poison damage at the end of each turn equal to half the amount of poison, rounded up. The amount of poison is halved each time it deals damage, rounded down.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{CURSE}").join('<br/><i>Curse: Increases damage received. Curse is removed whenever it takes effect.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{BLESSED}").join('<br/><i>Blessed: There is a 10% chance per blessing that this will return to your deck when destroyed.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{DOOM}").join('<br/><i>Doom: There is a 10% chance per doom that this will be destroyed at the end of its turn.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{SHIELD}").join('<br/><i>Shield: Absorbs the first incoming damage. Shield is removed at the start of each round.</i>');
});

function calc_proc_effect(test_amount, proc_chance){
	if(proc_chance == undefined){proc_chance = 50;}
	proc_chance /= 100;
	var total_procs = [];
	var sum_total_procs = 0;
	var highest_proc = 0;
	for (var i = test_amount - 1; i >= 0; i--) {
		var proc_chain = check_proc_chain(proc_chance);
		if(total_procs[proc_chain] == undefined){total_procs[proc_chain] = 0;}
		total_procs[proc_chain] += 1;
		sum_total_procs += proc_chain;
		if(proc_chain > highest_proc){highest_proc = proc_chain;}
	}
	console.log('average procs: ' + sum_total_procs / test_amount);
	console.log('highest proc: ' + highest_proc);
	console.log('hitpoint value: ' + Math.round(sum_total_procs / test_amount * 2));
}

function check_proc_chain(chance, procced_so_far){
	if(procced_so_far == undefined){procced_so_far = 0;}
	if(Math.random() <= chance)
	{
		procced_so_far += 1;
		procced_so_far = check_proc_chain(chance, procced_so_far);
	}
	return procced_so_far;
}