
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
		description: 	'When the enemy hero receives damage, discard a card from the enemy\'s hand to the grave. Can be used {LEVEL} time(s).',
		proc: 			'enemy_hero_damaged',
		reduce_skill_after_use: 'chaos_strikes',
		proc_amount: 	1,
		hero_tactics: 	['discard_enemy_ability'],
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
		level_cost: 		4,
		level_cost_artifact: 2,
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
		level_cost: 		3,
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
		level_cost: 1.5,
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
		level_cost: 		4.5,
		level_cost_hero: 	4,
		level_cost_spell: 	1.125,
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
		level_cost: 	1.5,
		level_cost_artifact: 3,
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
		level_cost: 1.5,
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
		level_cost: 	1,
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
		level_cost: 	1.5,
		level_cost_structure: 1,
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
		level_cost: 	1,
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
		level_cost: 	1.5,
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
		average_hit_cost: 	0.75,
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
	desperate_haste:{
		description: 	'When your hero receives damage, this reduces the time left of the card in your hand, with the lowest time left, by {LEVEL}.',
		proc: 			'ally_hero_damaged',
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
		level_cost: 		6,
		level_cost_hero: 	3,
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
		level_cost: 		6,
		level_cost_hero: 	3,
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
		level_cost: 0.5,
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
		description: 	'When destroyed, reduces the current health of your hero by {LEVEL}.',
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
				projectile: 	'wither',
				type: 			'reduce_current_health',
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
		description: 	'When played, reduces the current health of your hero by {LEVEL}.',
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
				type: 			'reduce_current_health',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-1,
		level_cost_spell: 	-2,
	},
	pay_life_on_act:{
		name: 			'pay life',
		description: 	'If this used another ability, it reduces the current health of your hero by {LEVEL}.',
		proc: 			'on_play',
		proc_while_dead: true,
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
				projectile: 	'wither',
				type: 			'reduce_current_health',
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
		average_hits: 	'ability_level',
	},
	sacrifice_unit:{
		description: 	'Destroy up to {LEVEL} random ally unit(s). Will target units with the lowest cost first.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
		description: 	'Returns a damaged ally creature unit to your hand. Will not unsummon summoned units.',
		cannot_proc_while_stunned: true,
		hero_tactics: 	['ally_creature_card_played_proc_ability','hasten_ability','heal_hero_ability','on_play_proc_ability','type_creature'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
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
/*
Combiner:{
  combine:"/abilities.js",
  combine:"/cards.js",
  combine:"/quests.js",
  output:"/ca.js"
}
*/

var all_available_cards = {

	aggressive_ghoul:{
		name: 				'aggressive ghoul',
		type: 				'creature',
		subtypes: 			['undead','zombie'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-19T104237.746.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, corpse_feast: 1, enrage: 1, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','buff_hero'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, enrage: 1, undead: 1},
		},
		quote: '\"It will eat you if you come near the grave.\"',
	},
	ailith:{
		name: 				'ailith',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/ailith.jpg',
		image_position: 	'top',
		power: 				4,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, doom_all: 2, evade: 1},
		hero_version: 			{
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, doom: 2, evade: 1},
		},
		quote: '\"She has taken many to the grave.\"',
		unique: true,
	},
	air_mage:{
		name: 				'air mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-15T114424.959.jpg',
		image_position: 	'right',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{air_bolt: 2, evade: 1},
		hero_version: 			{
			theme: 				['air_ability','projectile_ability','evade_ability','flying_ability'],
			not_theme: 			['empower_hero'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{air_bolt_hv: 2, evade: 1},
		},
		quote: '\"The mages of Gu\'nar have mastered the element of air.\"',
	},
	alchemist:{
		name: 				'alchemist',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T071556.368.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, poison: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_clerk'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, poison_hv: 2},
		},
		quote: '\"I can brew something for that.\"',
	},
	alchemy_lab:{
		name: 				'alchemy lab',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-05T060919.678.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{poison: 3, experiment: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_warrior'],
			not_theme: 			['empower_hero_ability','ally_hero_deals_damage_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{poison_hv: 2, experiment_hv: 2},
		},
		quote: '\"Many things are brewing.\"',
	},
	all_round_fighter:{
		name: 				'all-round fighter',
		type: 				'creature',
		subtypes: 			['human','warrior','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053038.513.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, shoot: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_archer','evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, shoot_unit: 1, evade: 1},
		},
		quote: '\"She can handle any situation.\"',
	},
	altar_of_sacrifice:{
		name: 				'altar of sacrifice',
		type: 				'structure',
		subtypes: 			['altar','wall'],
		color: 				['colorless'],
		theme: 				['own_death_proc_ability'],
		not_theme: 			['type_structure','subtype_wall'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T170102.521.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{cursed_deaths: 1},
		hero_version: 			{
			theme: 				['summon_creature_ability','resurrect_ability','own_death_proc_ability','heal_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cursed_deaths_hv: 2, cursed_aura: 1},
		},
		quote: '\"If you will just follow me...\"',
	},
	ancient_shield:{
		name: 				'ancient shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		subtype_craft_factor: 10,
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T055328.344.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{fortify_hero: 1, fortify_arrivals: 1},
		quote: '\"Used by ancient warrior queens.\"',
	},
	android:{
		name: 				'android',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-15T115140.899.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, evade: 1, plated: 1},
		},
		quote: '\"So lifelike!\"',
	},
	angel_statue:{
		name: 				'angel statue',
		type: 				'structure',
		subtypes: 			['angel','wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_wall'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T055713.570.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{purify: 1, heal: 1},
		hero_version: 			{
			theme: 				['subtype_angel','subtype_cleric'],
			not_theme: 			['empower_hero_ability','ally_hero_deals_damage_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{purify: 1, heal: 1},
		},
		quote: '\"The holy empire of Naldu has one of those on every town square.\"',
	},
	angelic_warrior:{
		name: 				'angelic warrior',
		type: 				'creature',
		subtypes: 			['angel','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-15T115551.972.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_angel','subtype_cleric','flying_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"They fight with divine power.\"',
	},
	angler:{
		name: 				'angler',
		type: 				'creature',
		subtypes: 			['human','laborer','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T060010.715.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, trap: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_human','stun_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"She can catch anything with those nets.\"',
	},
	angry_mob:{
		name: 				'angry mob',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['aoe'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2023-04-10T064049.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{summon_peasant: 5, minimum_dead_ally_creatures: 10, maximum_allies: 0},
		quote: '\"Enough is enough!\"',
	},
	angry_witch:{
		name: 				'angry witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T081306.987.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{curse: 1, strike: 1, withering_deaths: 1},
		hero_version: 			{
			theme: 				['subtype_witch','wither_ability','curse_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, withering_deaths: 1},
		},
		quote: '\"A man once humiliated her. Now she makes sure nobody will do that ever again.\"',
	},
	anvil:{
		name: 				'anvil',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				['plated_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-22T071155.725.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify: 1},
		quote: '\"Time to craft some armor.\"',
	},
	arcane_apprentice:{
		name: 				'arcane apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['arcane_bolts_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard87.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{arcane_bolt: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Adapt of magic.\"',
	},
	arcane_axe:{
		name: 				'arcane axe',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T085036.916.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt_hv: 1, empower_ally: 1},
		quote: '\"Fight with magic.\"',
	},
	arcane_buckler:{
		name: 				'arcane buckler',
		type: 				'artifact',
		subtypes: 			['gear','weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T170428.333.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt_hv: 1, fortify_hero: 1},
		quote: '\"The favored shield of many mages.\"',
	},
	arcane_elf_mage:{
		name: 				'arcane elf mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/arcane_elf_mage.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 3, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','arcane_bolts_ability','çurse_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, resist_magic: 1},
		},
		quote: '\"To use magic, we must become magic.\"',
	},
	arcane_fortress:{
		name: 				'arcane fortress',
		type: 				'structure',
		subtypes: 			['wall','mage'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2023-03-24T135010.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{arcane_bolt: 2, plated: 1, flying: 1},
		hero_version: 			{
			theme: 				['arcane_bolts_ability','plated_ability','subtype_mage'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{arcane_bolt_hv: 1, plated: 1, flying: 1},
		},
		quote: '\"Only the strongest of heroes attempts to attack that.\"',
	},
	arcane_golem:{
		name: 				'arcane golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T061659.153.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem','arcane_bolts_ability','curse_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Lucia got inspiration from the arcane.\"',
	},
	arcane_mage:{
		name: 				'arcane mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['arcane_bolts'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/arcane_mage.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2},
		},
		quote: '\"Master of magic.\"',
	},
	arcane_missiles:{
		name: 				'arcane missiles',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				['çurse_ability','arcane_bolts_ability'],
		craft_theme: 		['arcane_bolts','arcane_bolts'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard86.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt: 5},
		quote: '\"Taught in the first year of the magic academy.\"',
	},
	arcane_owl:{
		name: 				'arcane owl',
		type: 				'creature',
		subtypes: 			['animal','bird','owl'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T153208.196.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{arcane_bolt: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','arcane_bolts_ability','curse_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, flying: 1},
			verified: 			true,
		},
		quote: '\"An arcane bird or prey.\"',
	},
	arcane_shatterer:{
		name: 				'arcane shatterer',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_artifact'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T064344.172.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 1, break: 1},
		hero_version: 			{
			theme: 				['arcane_bolts_ability','curse_ability','break_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{arcane_bolt_hv: 2, break: 1},
		},
		quote: '\"Let the pieces fly.\"',
		max_in_deck: 		2,
	},
	arcane_staff:{
		name: 				'arcane staff',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T085347.272.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt_hv: 1},
		quote: '\"Spread some magic.\"',
	},
	arcane_storm:{
		name: 				'arcane storm',
		type: 				'spell',
		subtypes: 			['arcane','weather'],
		color: 				['colorless'],
		theme: 				['çurse_ability','arcane_bolts_ability','aoe'],
		craft_theme: 		['arcane_bolts','arcane_bolts','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T060948.045.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{arcane_bolt: 10, minimum_enemies: 3},
		quote: '\"Now that is a lot of magic.\"',
	},
	arcane_trickster:{
		name: 				'arcane trickster',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/anime-7748478_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 1, run_away: 1},
		hero_version: 			{
			theme: 				['arcane_bolts_ability','curse_ability','movement_ability','evade_ability'],
			not_theme: 			['empower_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			30,
			abilities: 			{arcane_bolt_hv: 2, evade: 1},
		},
		quote: '\"Teehee!\"',
	},
	archaeologist:{
		name: 				'archaeologist',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				['type_artifact'],
		not_theme: 			['subtype_clerk'],
		craft_theme: 		['artifact'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-01T082618.881.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, reclaim_artifact: 1},
		hero_version: 			{
			theme: 				['type_artifact','subtype_clerk'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, reclaim_artifacts: 1},
		},
		quote: '\"It might be old, but not useless.\"',
	},
	archer:{
		name: 				'archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard60.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['subtype_archer','projectile_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"Stay at a distance.\"',
	},
	archer_scout:{
		name: 				'archer scout',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053027.873.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, stealth: 1},
		hero_version: 			{
			theme: 				['subtype_archer','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, hide_hv: 1},
		},
		quote: '\"Shoot before they see you!\"',
	},
	archer_tower:{
		name: 				'archer tower',
		type: 				'structure',
		subtypes: 			['wall','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-10T062753.491.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, fortify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','plated_ability','subtype_warrior','subtype_archer'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, fortify: 1},
		},
		quote: '\"They are shooting us from the walls!\"',
	},
	architect:{
		name: 				'architect',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		not_theme: 			['subtype_clerk','subtype_plant'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T080230.044.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bring_structure: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 2},
		},
		quote: '\"Let me see what I can build from this...\"',
	},
	archmage:{
		name: 				'archmage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['storm','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T145457.381.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			10,
		abilities: 			{arcane_bolt: 3, ignites: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, ignites: 1},
		},
		quote: '\"Master of magic.\"',
	},
	armadillo:{
		name: 				'armadillo',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T083034.732.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, fortify_self: 1, plated: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_animal','plated_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 1, plated: 1},
		},
		quote: '\"Tough little critter.\"',
	},
	armor_smith:{
		name: 				'armor smith',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability','fortify_ability','plated','plated','fortify_ability','plated'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T082101.847.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify: 3},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','plated_ability','healing_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify: 2},
		},
		quote: '\"This will keep you safe.\"',
	},
	armored_archer:{
		name: 				'armored archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T052621.814.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, plated: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, plated: 1},
		},
		quote: '\"Dangerous at a distance. Hard to strike down.\"',
	},
	armored_cavalry:{
		name: 				'armored cavalry',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T070437.605.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['charge_ability','guard_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1, evade: 1},
		},
		quote: '\"The kingdom of Tinah used to train many of these knights as their stike force.\"',
	},
	armory:{
		name: 				'armory',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_wall'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T071317.917.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{empower_ally: 1},
		hero_version: 			{
			theme: 				['melee_ability','empower_ally_ability','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{empower_ally: 2},
		},
		quote: '\"Ready to hand out arms.\"',
		max_in_deck: 		1,
	},
	arrow_dancer:{
		name: 				'arrow dancer',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052844.016.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{run_away: 1, shoot: 1, evade: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"She leaves, arrows return.\"',
	},
	arson:{
		name: 				'arson',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				['aoe'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/bad-guy-4457848_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_all: 2, minimum_enemies: 3, echo: 1},
		quote: '\"Burn, baby!\"',
		max_in_deck: 		1,
	},
	arson_golem:{
		name: 				'arson golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/cf47b10d-0d7b-40df-a673-b5a76c843914.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{burn_all: 1, burn: 3, plated: 1, resist_fire: 1},
		hero_version: 			{
			theme: 				['subtype_golem','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_all: 1, plated: 1, resist_fire: 1},
		},
		quote: '\"When Lucia got laughed at, she built these.\"',
	},
	arsonist:{
		name: 				'arsonist',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T063843.841.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3},
		},
		quote: '\"Light the fire.\"',
	},
	assistant:{
		name: 				'assistant',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T070853.448.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, hasten: 1, hide_hero: 1},
		hero_version: 			{
			theme: 				['evade_ability','hasten_ability','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1, hide_hv: 1},
		},
		quote: '\"We will speed up the work, boss!\"',
	},
	autumn_witch:{
		name: 				'autumn witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T072203.747.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{wither: 1, strike: 1},
		hero_version: 			{
			theme: 				['wither_ability','subtype_witch'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{wither_hv: 1, strike_unit: 1},
		},
		quote: '\"All things must eventually wither and die.\"',
	},
	axe_warrior:{
		name: 				'axe warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T145032.955.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 2},
		hero_version: 			{
			theme: 				['subtype_warrior','empower_any_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2},
		},
		quote: '\"Chop, chop!\"',
	},
	backlash:{
		name: 				'backlash',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T055210.060.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{backlash: 3, echo: 1},
		quote: '\"Now get going!\"',
		max_in_deck: 		1,
	},
	backstabber:{
		name: 				'backstabber',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T080312.778.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, backstab: 2},
		hero_version: 			{
			theme: 				['subtype_human','subtype_rogue','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1},
		},
		quote: '\"It\'s a matter of being in the right place at the right time.\"',
	},
	bad_omen:{
		name: 				'bad omen',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T065327.239.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{doom_all: 1, echo: 1},
		quote: '\"Just ignore it. What\'s the worst that can happen?\"',
		verified: 			true,
	},
	badger:{
		name: 				'badger',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T160526.075.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"A dangerous beast.\"',
	},
	baker:{
		name: 				'baker',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		['subtype_food'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T160826.189.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bolster_creature: 1},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bolster_creature: 2},
		},
		quote: '\"All she needs if flour and water.\"',
	},
	bakers_urn:{
		name: 				'baker\'s urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T073711.284.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolstering_deaths: 1},
		quote: '\"Holds baker\'s spirits.\"',
	},
	bakery:{
		name: 				'bakery',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead','subtype_wall'],
		craft_theme: 		['subtype_food'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/c3744bbe-32c6-45b8-ba07-62b9d722a783.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{bolster_creature: 2},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{bolster_creature: 3},
		},
		quote: '\"Bread, anyone?!\"',
	},
	bank:{
		name: 				'bank',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-19T051830.026.jpg',
		power: 				false,
		armor: 				0,
		health: 			10,
		abilities: 			{life_cost: 2, restore: 2},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{restore: 2},
		},
		quote: '\"Time to invest!\"',
	},
	barbarian:{
		name: 				'barbarian',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T143920.447.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior','plated_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"Do not make her angry!\"',
	},
	barbarian_duellist:{
		name: 				'barbarian duellist',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T073109.993.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, counter: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, counter: 1},
		},
		quote: '\"Channel your rage into something productive.\"',
	},
	barbarian_raiding_party:{
		name: 				'barbarian raiding party',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T073802.382.jpg',
		power: 				5,
		armor: 				0,
		health: 			1,
		abilities: 			{seek_enemy: 1, strike: 1, retreat_on_kill: 1},
		hero_version: 			{
			theme: 				['summon_creature_ability','enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, enrage: 1, evade: 1},
		},
		quote: '\"We will take and we will leave.\"',
	},
	barbarian_rogue:{
		name: 				'barbarian rogue',
		type: 				'creature',
		subtypes: 			['human','warrior','rogue'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T074605.416.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 2, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 2, evade: 1},
		},
		quote: '\"Don\'t you dare hit me!\"',
	},
	barbarian_shaman:{
		name: 				'barbarian shaman',
		type: 				'creature',
		subtypes: 			['human','warrior','cleric'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T072828.954.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, counter_spells: 2},
		hero_version: 			{
			theme: 				['counter_spell_ability','enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, counter_spells: 2},
		},
		quote: '\"Your magic will not hurt me.\"',
	},
	barbarian_shield_maiden:{
		name: 				'barbarian shield maiden',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T074856.888.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, fortify_self: 1},
		hero_version: 			{
			theme: 				['fortify_ability','enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, fortify_self: 1},
		},
		quote: '\"She can bash your face in with that shield.\"',
	},
	barbarian_signaler:{
		name: 				'barbarian signaler',
		type: 				'creature',
		subtypes: 			['human','warrior','clerk'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T075652.763.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, hasten: 1},
		hero_version: 			{
			theme: 				['hasten_ability','enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, hasten: 1},
		},
		quote: '\"Come! There is fighting here!\"',
	},
	barbarian_sisters:{
		name: 				'barbarian sisters',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T073438.249.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, bring_clone: 1},
		hero_version: 			{
			theme: 				['enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, enrage: 1},
		},
		quote: '\"They fight side by side.\"',
	},
	barbarian_spear_thrower:{
		name: 				'barbarian spear thrower',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		subtype_craft_factor: 2,
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T074225.634.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, enrage: 1},
		hero_version: 			{
			theme: 				['enrage_ability','active_healing_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, enrage: 1},
		},
		quote: '\"Put all your anger into that spear.\"',
	},
	battle_druid:{
		name: 				'battle druid',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T081414.964.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, heal: 1, fire_bolt: 1},
		hero_version: 			{
			theme: 				['active_healing_ability','subtype_cleric','fire_ability'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, heal: 1, fire_bolt_hv: 1},
		},
		quote: '\"Rage of nature.\"',
	},
	battle_plans:{
		name: 				'battle plans',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T205115.204.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_ally: 3, draw_on_act: 1},
		quote: '\"Here\'s the plan.\"',
		max_in_deck: 		1,
	},
	battle_shout:{
		name: 				'battle shout',
		type: 				'spell',
		subtypes: 			['tactic','mental'],
		color: 				['colorless'],
		theme: 				['aoe','subtype_warrior'],
		not_theme: 			['subtype_mage','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T070011.083.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_all: 3, minimum_ally_creatures: 3},
		quote: '\"Attack!\"',
		max_in_deck: 		1,
	},
	battle_warder:{
		name: 				'battle warder',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/combat_warder.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, counter_spell: 1},
		hero_version: 			{
			theme: 				['subtype_human','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter_spells: 1},
		},
		quote: '\"Let\'s keep it a fair fight.\"',
	},
	bear:{
		name: 				'bear',
		type: 				'creature',
		subtypes: 			['animal','bear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard38.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Roar!\"',
	},
	berserker:{
		name: 				'berserker',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T065224.863.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, enrage: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"RAAAAAH!\"',
	},
	bighorn:{
		name: 				'bighorn',
		type: 				'creature',
		subtypes: 			['animal','goat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T073537.433.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Those are some big horns.\"',
	},
	bird_trainer:{
		name: 				'bird trainer',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				['subtype_animal','subtype_bird'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T051207.124.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, release_bird: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_bird'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"She loves her birds.\"',
	},
	birdcage:{
		name: 				'birdcage',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['subtype_animal','subtype_bird'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-23T061833.433.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{release_bird: 2},
		quote: '\"Does anyone hava a key?\"',
		selfdestructs: true,
	},
	black_cat:{
		name: 				'black cat',
		type: 				'creature',
		subtypes: 			['animal','cat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T084203.079.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, dooming_touch: 4},
		hero_version: 			{
			theme: 				['curse_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, dooming_touch: 3},
		},
		quote: '\"They say it is a bad omen to have a black cat cross your path.\"',
	},
	black_dragon:{
		name: 				'black dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T064618.942.jpg',
		image_position: 	'top left',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, doom_all: 2, flying: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, doom: 1, flying: 1},
		},
		quote: '\"True dooming power.\"',
	},
	black_fungus:{
		name: 				'black fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T061219.210.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, spawn_sporeling: 1, dooming_deaths: 1},
		hero_version: 			{
			theme: 				['subtype_fungus','doom_ability','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, dooming_deaths: 1},
		},
		quote: '\"Those can be deadly if you leave them too long.\"',
	},
	black_whelp:{
		name: 				'black whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T061934.809.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, doom: 3, flying: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, doom: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	blacksmith:{
		name: 				'blacksmith',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability','fortify_ability','plated','plated','fortify_ability','plated'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-22T161723.163.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify: 2},
		},
		quote: '\"I crafted womething that may be useful.\"',
	},
	blade_dancer:{
		name: 				'blade dancer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T072323.874.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, run_away: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior','movement_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Beautiful and deadly.\"',
	},
	bladed_shield:{
		name: 				'bladed shield',
		type: 				'artifact',
		subtypes: 			['gear','weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160443.308.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, fortify_hero: 1},
		quote: '\"A good offence is... having something to hit them with!\"',
	},
	blaze_archer:{
		name: 				'blaze archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053047.343.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, ignites: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, ignites: 1},
		},
		quote: '\"Light the arrows!\"',
	},
	blaze_mage:{
		name: 				'blaze mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T074543.472.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{burn_all: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_all: 1},
		},
		quote: '\"Glorious fire!\"',
	},
	blaze_rager:{
		name: 				'blaze rager',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T142046.801.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, burning_entry: 3},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, burn_hv: 1},
		},
		quote: '\"First, I will bring the fire. Then, I bring death.\"',
	},
	blaze_rogue:{
		name: 				'blaze rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-10T061448.557.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, burn: 1, evade: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, burn_hv: 1, evade: 1},
		},
		quote: '\"Just start the fire, the rest will follow.\"',
	},
	blaze_runner:{
		name: 				'blaze runner',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn','burn'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-10T061840.818.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2, run_away: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3, evade: 1},
		},
		quote: '\"I will leave them in ashes.\"',
	},
	blessed_assassin:{
		name: 				'blessed assassin',
		type: 				'creature',
		subtypes: 			['human','cleric','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T154510.514.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, stealth: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_rogue','bless_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1, bless: 2},
		},
		quote: '\"My life for what is right!\"',
	},
	blessed_guard:{
		name: 				'blessed guard',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T151705.583.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, guard: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_warrior','bless_ability','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"We will guard the holy ground.\"',
	},
	blessed_orb:{
		name: 				'blessed orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T140122.576.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bless: 1},
		quote: '\"We will live on!\"',
	},
	blessed_rager:{
		name: 				'blessed rager',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T143512.758.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, enrage: 1, blessed: 5},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, bless: 1},
		},
		quote: '\"When you hurt me, you hurt the divine!\"',
	},
	blessed_rogue:{
		name: 				'blessed rogue',
		type: 				'creature',
		subtypes: 			['human','cleric','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T153920.988.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_rogue','bless_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, bless: 2},
		},
		quote: '\"Just a little divinity left.\"',
	},
	blessed_shield:{
		name: 				'blessed shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-14T061626.680.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, bless: 1},
		quote: '\"Divine protection.\"',
	},
	blessed_spirit:{
		name: 				'blessed spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T072554.954.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, blessed_deaths: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','resurrect_ability','deaths','ally_creature_death_proc_ability','own_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, blessed_deaths: 1, resurrect: 1, undead: 1},
		},
		quote: '\"I will bless you. Forever!\"',
	},
	blessed_urn:{
		name: 				'blessed urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T073448.983.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{blessed_deaths: 1},
		quote: '\"Holds blessed spirits.\"',
	},
	blessed_warrior:{
		name: 				'blessed warrior',
		type: 				'creature',
		subtypes: 			['human','cleric','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_holy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T153729.676.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_warrior','bless_ability','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"We will fight for the divine.\"',
	},
	blodi:{
		name: 				'blodi',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/creature-7804411_640.jpg',
		image_position: 	'left',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, evade: 1, flying: 1, run_away: 1},
		hero_version: 			{
			theme: 				['evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, flying: 1},
		},
		quote: '\"Cute and very annoying.\"',
	},
	blood_charm:{
		name: 				'blood charm',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['subtype_witch'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160844.828.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{withering_hero: 1},
		quote: '\"They are not the same after the attack, sir.\"',
	},
	blood_elf:{
		name: 				'blood elf',
		type: 				'creature',
		subtypes: 			['elf','witch'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T080916.754.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, thorns: 1, withering_touch: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_witch','thorns_ability','wither_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, thorns: 1, withering_touch: 1, resist_magic: 1},
		},
		quote: '\"The blood elves made a dark pact once.\"',
	},
	blood_leech:{
		name: 				'blood leech',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T055843.226.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{run_away: 1, strike: 1, leech_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, feast: 1},
		},
		quote: '\"It sucks the life out.\"',
	},
	blood_rage:{
		name: 				'blood rage',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_mage','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T191642.660.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{blood_rage: 3},
		quote: '\"I will end you!\"',
	},
	blood_rat:{
		name: 				'blood rat',
		type: 				'creature',
		subtypes: 			['animal','rodent'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T063916.729.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, withering_touch: 1},
		hero_version: 			{
			theme: 				['subtype_animal','wither_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, withering_touch: 1},
		},
		quote: '\"They have a painful bite.\"',
	},
	blood_witch:{
		name: 				'blood witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-13T060208.117.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, withering_touch: 1, cursed_touch: 1},
		hero_version: 			{
			theme: 				['subtype_witch','wither_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, withering_touch: 1, cursed_touch: 1},
		},
		quote: '\"She will bathe in their blood.\"',
	},
	bloody_blade:{
		name: 				'bloody blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T072209.013.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{destroy_arrival: 1},
		quote: '\"Aim for the heart.\"',
		selfdestructs: 		true,
	},
	bloody_tick:{
		name: 				'bloody tick',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T085035.919.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, withering_touch: 1, final_hasten: 3},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_horror'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, withering_touch: 1, hasten: 1},
		},
		quote: '\"Bloody bloodsuckers...\"',
	},
	blue_dragon:{
		name: 				'blue dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T064823.568.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, hasten_all: 1, flying: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, hasten: 1, flying: 1},
		},
		quote: '\"True magical power.\"',
	},
	blue_whelp:{
		name: 				'blue whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T062934.031.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, hasten: 1, flying: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, hasten: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	boar:{
		name: 				'boar',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard37.jpg',
		image_position: 	'right',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"Oink!\"',
	},
	bolter_golem:{
		name: 				'bolter golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T061025.723.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{arcane_bolt: 1, strike:1, fire_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure','arcane_bolts_ability','fire_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 1, strike_unit: 1, fire_bolt_hv: 1},
		},
		quote: '\"Lucia loved creating multifunctional automatons.\"',
	},
	bone_crawler:{
		name: 				'bone crawler',
		type: 				'creature',
		subtypes: 			['undead','skeleton','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T080651.829.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1, fear: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability','subtype_horror'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, fearful_aura: 1},
		},
		quote: '\"Didn\'t that used to be Mike?\"',
	},
	box_of_rage:{
		name: 				'box of rage',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		not_theme: 			['type_structure','subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T085704.504.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{blood_rage: 1},
		quote: '\"Hold it in!\"',
	},
	box_of_tricks:{
		name: 				'box of tricks',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T054437.019.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{experiment_hv: 1},
		quote: '\"And I reach in and... Ouch!\"',
	},
	bramble_bush:{
		name: 				'bramble bush',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T084427.034.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{thorns: 1},
		hero_version: 			{
			theme: 				['subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{thorns: 2},
		},
		quote: '\"A tasty treat... if you have gloves.\"',
	},
	bramble_druid:{
		name: 				'bramble druid',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T062726.770.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, heal: 1, thorns: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature','thorns_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1, thorns: 1},
		},
		quote: '\"Let the forest heal you. Unless you do not deserve it.\"',
	},
	bramble_mage:{
		name: 				'bramble mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['arcane_bolts'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T061434.470.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 1, thorns: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['arcane_bolts_ability','çurse_ability','thorns_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 1, thorns: 1},
		},
		quote: '\"Prickly magic.\"',
	},
	bramble_witch:{
		name: 				'bramble witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T073616.373.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, thorns: 1, withering_touch: 1},
		hero_version: 			{
			theme: 				['thorns_ability','subtype_witch','curse_ability'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, thorns: 1, withering_touch: 1},
		},
		quote: '\"She has embraced the thorns.\"',
	},
	brazier:{
		name: 				'brazier',
		type: 				'artifact',
		subtypes: 			['furnace'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		craft_theme: 		['burn_ability','fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard65.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burning_hero: 1},
		quote: '\"Keeps you warm on a cold night.\"',
	},
	breaker:{
		name: 				'breaker',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard78.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{break: 1},
		quote: '\"A handy tool when needed.\"',
	},
	breaking_ray:{
		name: 				'breaking ray',
		type: 				'spell',
		subtypes: 			['light'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T155806.218.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{break: 1, echo: 1},
		quote: '\"Don\'t point it at a mirror.\"',
		max_in_deck: 		1,
	},
	brewer:{
		name: 				'brewer',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		['subtype_food','subtype_food'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T161810.383.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1, bolster_creature: 1},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1, bolster_creature: 1},
		},
		quote: '\"Liquid courage.\"',
	},
	bright_elf:{
		name: 				'bright elf',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T144130.356.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, purify: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1, resist_magic: 1},
		},
		quote: '\"She brightens the forest.\"',
	},
	brown_dragon:{
		name: 				'brown dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T065052.823.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, bolster_all: 1, flying: 1},
		hero_version: 			{
			theme: 				['bolster_ability','subtype_dragon','fortify_ability'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, bolster: 1, flying: 1},
		},
		quote: '\"True protective power.\"',
	},
	brown_whelp:{
		name: 				'brown whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T063745.804.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bolster: 1, flying: 1},
		hero_version: 			{
			theme: 				['bolster_ability','subtype_dragon','fortify_ability'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, bolster: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	buck:{
		name: 				'buck',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T080948.672.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, run_away: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_deer'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, enrage: 1},
		},
		quote: '\"It will be back!\"',
	},
	buffalo:{
		name: 				'buffalo',
		type: 				'creature',
		subtypes: 			['animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-07T144045.547.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, ally_charges: 1},
		hero_version: 			{
			theme: 				['subtype_animal','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_charges: 1},
		},
		quote: '\"Stampede!!\"',
	},
	bulky_bush:{
		name: 				'bulky bush',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T052932.699.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_plant','receive_damage_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"A walk through the forest can be a dangerous thing.\"',
	},
	bulky_fungus:{
		name: 				'bulky fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T064346.711.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"It smells like it looks.\"',
	},
	bull:{
		name: 				'bull',
		type: 				'creature',
		subtypes: 			['animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T161306.037.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{charge: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','charge_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Put away the flag!\"',
	},
	bureaucrat:{
		name: 				'bureaucrat',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T063100.302.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, slow_enemy_draws: 2},
		hero_version: 			{
			theme: 				['hasten_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, slow_enemy_draws: 1},
		},
		quote: '\"You have to sign the form first!\"',
	},
	burglar:{
		name: 				'burglar',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T143436.771.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{run_away: 1, strike: 1, steal: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue','steal_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"In and out before they catch you!\"',
	},
	burning_owl:{
		name: 				'burning owl',
		type: 				'creature',
		subtypes: 			['animal','bird','owl'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T153500.253.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, ignites: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2, flying: 1},
		},
		quote: '\"A burning bird of prey.\"',
	},
	burning_soul:{
		name: 				'burning spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T065352.135.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, burning_deaths: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, burning_deaths_hv: 1, undead: 1, resurrect: 1},
		},
		quote: '\"I will burn you. Forever!\"',
	},
	burning_urn:{
		name: 				'burning urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T073913.644.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burning_deaths_hv: 1},
		quote: '\"Holds burning spirits.\"',
	},
	cadet:{
		name: 				'cadet',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/cadet.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, guard: 1},
		hero_version: 			{
			theme: 				['guard_ability','subtype_warrior','active_healing_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_guards: 1},
		},
		quote: '\"Just stand in front of the enemy.\"',
	},
	cannibal:{
		name: 				'cannibal',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-19T101301.960.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{consume_creature: 1, strike: 1, feast: 4},
		hero_version: 			{
			theme: 				['curse_ability','summon_creature_ability','ally_creature_death_proc_ability','own_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{consume_creature: 1, strike_unit: 1, feast: 1},
		},
		quote: '\"Feed her or become food.\"',
	},
	carnivorous_plant:{
		name: 				'carnivorous plant',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T185415.350.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{thorns: 1, stunning_touch: 1, feast: 4},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{thorns: 1, stunning_touch: 1, feast: 1},
		},
		quote: '\"It swallowed Jimmy whole!\"',
	},
	carpenter:{
		name: 				'carpenter',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		not_theme: 			['type_creature'],
		craft_theme: 		['type_structure'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T170836.397.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, repair: 1},
		hero_version: 			{
			theme: 				['type_structure','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 1},
		},
		quote: '\"I can fix that.\"',
	},
	carpenters_hammer:{
		name: 				'carpenter\'s hammer',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				['type_structure','subtype_golem'],
		not_theme: 			['subtype_plant'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-22T070506.130.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{repair: 1},
		quote: '\"A handy tool.\"',
	},
	castle:{
		name: 				'castle',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/e1ec0596-28dd-45f4-ae76-90cae61e8d17.jpg',
		power: 				false,
		armor: 				0,
		health: 			16,
		abilities: 			{fortify_all: 1, plated: 1},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fortify_all: 1, plated: 1},
			verified: true,
		},
		quote: '\"You can feel safe here.\"',
	},
	cat_lady:{
		name: 				'cat lady',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-06T160202.623.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{bring_cat: 1, strike: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior','subtype_cat'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"She just loves that cat!\"',
	},
	cat_warrior:{
		name: 				'cat warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-06T154445.524.jpg',
		image_position: 	'left',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{bring_cat: 1, strike: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior','subtype_cat'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"She has a strong bond with that beast.\"',
	},
	champion:{
		name: 				'champion',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T142451.573.jpg',
		power: 				3,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"We will endure.\"',
	},
	channel_life:{
		name: 				'channel life',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T064017.386.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten_slowest: 10, pay_life_on_act: 5},
		quote: '\"It will cost you!\"',
	},
	channeler:{
		name: 				'channeler',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T074031.014.jpg',
		image_position: 	'right',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, channel_life: 1},
		hero_version: 			{
			theme: 				['subtype_clerk','deck_control','heal_hero_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, channel_life: 2},
		},
		quote: '\"She will give her life to call her allies.\"',
	},
	chaos_dagger:{
		name: 				'chaos dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T143947.035.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{chaos_strikes: 1},
		quote: '\"You can strike at the mind with that.\"',
		selfdestructs: 		true,
	},
	charming_witch:{
		name: 				'charming witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dream_TradingCard-2025-02-19T074045.686.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, charming_touch: 1},
		hero_version: 			{
			theme: 				['subtype_witch','charm_ability','curse_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, charming_touch: 1,},
		},
		quote: '\"Do not let her whisper in your ear.\"',
	},
	cheetah:{
		name: 				'cheetah',
		type: 				'creature',
		subtypes: 			['animal','cat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-07T145544.810.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{seek_enemy: 1, strike: 1, retreat_on_kill: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_cat'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"It has to make a kill.\"',
	},
	chef:{
		name: 				'chef',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		['subtype_food'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T161257.814.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bolster_creature: 2},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bolster_creature: 2},
		},
		quote: '\"All she needs if flour and water.\"',
	},
	chicken:{
		name: 				'chicken',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				['type_structure','summon_creature_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T062917.147.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, run_away: 1, lay_egg: 1},
		hero_version: 			{
			theme: 				['sybtype_bird','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Who would like an egg?\"',
	},
	chicken_egg:{
		name: 				'chicken egg',
		type: 				'structure',
		subtypes: 			['egg'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T063352.022.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{hatch_chicken: 1},
		quote: '\"Anybody got salt and pepper?\"',
	},
	childhood_memento:{
		name: 				'childhood memento',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-04-03T062058.173.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reclaim_artifact: 1, restore_on_act: 2},
		quote: '\"Remember when we used to play with that?\"',
	},
	chipmunk:{
		name: 				'chipmunk',
		type: 				'creature',
		subtypes: 			['animal','rodent'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_rodent'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T074053.651.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, homebound: 1, evade: 1, stealth: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability','subtype_rodent'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, hide_hv: 1},
		},
		quote: '\"It was here a minute ago.\"',
	},
	cinder_witch:{
		name: 				'cinder witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T163749.880.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 1, curse: 1, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 1, curse_hv: 1, strike_unit: 1},
		},
		quote: '\"She uses a dark fire!\"',
	},
	circle_of_protection:{
		name: 				'circle of protection',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T072308.834.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_all: 3, minimum_allies: 3},
		quote: '\"Be safe.\"',
	},
	cog_vandal:{
		name: 				'cog vandal',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T112611.818.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, stun_construct: 1},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stun_construct: 1},
		},
		quote: '\"You just take out a single part.\"',
	},
	cold_front:{
		name: 				'cold front',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['cold_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T053803.160.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ice_blast: 3, minimum_enemies: 3},
		quote: '\"Look! It\'s all white outside!\"',
	},
	commander:{
		name: 				'commander',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T081909.339.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"She demands respect.\"',
	},
	companion_golem:{
		name: 				'companion golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/companion_golem.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, guard: 1},
		hero_version: 			{
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ally_guards: 1},
		},
		quote: '\"The loss of most men during the Great War necessitated the building of those golems.\"<br/><br/>Credit: Pyrothecat',
	},
	condor:{
		name: 				'condor',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-01T065414.465.jpg',
		image_position: 	'top left',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, feast: 3, flying: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, flying: 1},
		},
		quote: '\"If they keep killing, they keep eating.\"',
	},
	conscript:{
		name: 				'conscript',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T135323.702.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, homebound: 1},
		hero_version: 			{
			theme: 				['evade_ability','move_ally_to_hand_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I\'m not dying for them.\"',
	},
	conscription:{
		name: 				'conscription',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-24T070421.937.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_conscript: 5, maximum_allies: 0},
		quote: '\"Send in the reserves!\"',
	},
	corpse_beach:{
		name: 				'corpse beach',
		type: 				'structure',
		subtypes: 			['wall','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/corpse_beach.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{summon_mud_crab: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_mud_crab: 2},
		},
		quote: '\"The ocean delivers fresh dead from the Great War to its banks, and the mud crabs crawl from the mire to feast on what remains.\"<br/><br/>Credit: Pyrothecat',
	},
	cow:{
		name: 				'cow',
		type: 				'creature',
		subtypes: 			['animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T161934.031.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_cow'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They sure like grass!\"',
	},
	crab:{
		name: 				'crab',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T074633.365.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Though shell to crack.\"',
	},
	cremator:{
		name: 				'cremator',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dream_TradingCard-2025-02-19T074950.745.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, burning_deaths: 1},
		hero_version: 			{
			theme: 				['burn_ability','subtype_witch','own_death_proc_ability','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, burning_deaths_hv: 1},
		},
		quote: '\"Burn the corpses. Burn the rest.\"',
	},
	crocodile:{
		name: 				'crocodile',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T070144.232.jpg',
		image_position: 	'right',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_animal','submerge_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, submerged: 1},
		},
		quote: '\"Stay out of the water!\"',
	},
	crow:{
		name: 				'crow',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T083800.865.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, dooming_touch: 5, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, dooming_touch: 1, flying: 1},
		},
		quote: '\"They say it is a bad omen to see a crow.\"',
	},
	cry_for_help:{
		name: 				'cry for help',
		type: 				'spell',
		subtypes: 			['tactic','mental'],
		color: 				['colorless'],
		theme: 				['aoe','subtype_clerk'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T080034.058.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten_all: 2, maximum_allies: 0},
		quote: '\"Send help!\"',
	},
	cull_the_weak:{
		name: 				'cull the weak',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T145101.212.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reap_all: 2, minimum_enemy_creatures: 3},
		quote: '\"Put them out of their misery!\"',
	},
	cursed_ground:{
		name: 				'cursed ground',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T083715.976.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{curse_arrivals: 1},
		hero_version: 			{
			theme: 				['projectile_ability','type_damage_ability','enemy_unit_card_played_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cursed_aura: 2, curse_arrivals: 1},
		},
		quote: '\"Do not enter here!\"',
	},
	cursed_orb:{
		name: 				'cursed orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['curse','curse','curse','curse'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160625.631.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_hv: 1},
		quote: '\"Do not go near it!\"',
	},
	cursed_shield:{
		name: 				'cursed shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T163523.294.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_hero: 1, fortify_hero: 1},
		quote: '\"Let them touch you.\"',
	},
	cursed_skeleton:{
		name: 				'cursed skeleton',
		type: 				'creature',
		subtypes: 			['undead','skeleton'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T081241.796.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1, final_curse: 2},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, cursed_aura: 1},
		},
		quote: '\"Didn\'t that used to be Cordelia?\"',
	},
	cursed_skull:{
		name: 				'cursed skull',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['curse','curse','curse','curse'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard36.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_hero: 1},
		quote: '\"Robbed from a grave.\"',
	},
	cursed_spirit:{
		name: 				'cursed spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T083811.881.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, cursed_deaths: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','resurrect_ability','deaths','ally_creature_death_proc_ability','own_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_deaths_hv: 1, resurrect: 1, undead: 1},
		},
		quote: '\"You hurt us, we hurt you.\"',
	},
	cursed_urn:{
		name: 				'cursed urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','own_death_proc_ability'],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		['curse_ability','curse_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T065824.318.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_deaths_hv: 1},
		quote: '\"Share the pain of death.\"',
	},
	cursed_zombie:{
		name: 				'cursed zombie',
		type: 				'creature',
		subtypes: 			['undead','zombie'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard99.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 2, cursed_aura: 2, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_zombie','curse_ability','projectile_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, cursed_aura: 1, undead: 1},
		},
		quote: '\"Dont touch it, it will eat your brains.\"',
	},
	dark_sacrifice:{
		name: 				'dark sacrifice',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T190453.797.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice: 1, discard_enemy_on_act: 2},
		quote: '\"They will feel our pain.\"',
	},
	dark_soldier:{
		name: 				'dark soldier',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dark_soldier.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, dooming_aura: 2, plated: 1, guard: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, dooming_aura: 1, plated: 1},
		},
		quote: '\"Face your doom.\"',
	},
	dawn_cleric:{
		name: 				'dawn cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				['move_ally_to_hand_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T164601.025.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, purifying_entry: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"She brings the new light.\"',
	},
	death_warrant:{
		name: 				'death warrant',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T094502.407.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{destroy: 1},
		quote: '\"Did you sign it yourself?\"',
	},
	defence_worker:{
		name: 				'defence worker',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['type_structure'],
		not_theme: 			['type_creature','subtype_human'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T061800.717.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, repair: 1, build_palisade: 1},
		hero_version: 			{
			theme: 				['type_structure','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 1},
		},
		quote: '\"Nothing can\'t be be improved by building a wall.\"',
	},
	
	demolishing_blast:{
		name: 				'demolishing blast',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-04-06T063510.330.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_blast: 1, demolish: 1, minimum_enemies: 3},
		quote: '\"Place the charges at a tactical point, and you can bring down anything.\"',
	},
	devout_cleric:{
		name: 				'devout cleric',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T054135.116.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, bless: 1},
		hero_version: 			{
			theme: 				['bless_ability','subtype_cleric','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 1},
		},
		quote: '\"I will guide the lost sheep.\"',
	},
	divine_blessing:{
		name: 				'divine blessing',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['move_ally_to_hand_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T145659.449.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bless: 10, echo: 1},
		quote: '\"Have you seen the light?\"',
	},
	divine_power:{
		name: 				'divine power',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['move_ally_to_hand_ability'],
		craft_theme: 		['subtype_human','subtype_human','subtype_human','subtype_cleric','subtype_cleric'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T150903.077.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bless_all: 5, empower_all: 5, minimum_allies: 3},
		quote: '\"It\'s almost too bright!\"',
	},
	doe:{
		name: 				'doe',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T080631.532.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, run_away: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_deer'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"A female deer.\"',
	},
	donkey:{
		name: 				'donkey',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T081938.132.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"A stubborn beast.\"',
	},
	doomed_witch:{
		name: 				'doomed witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dream_TradingCard-2025-02-19T073209.178.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, dooming_aura: 1},
		hero_version: 			{
			theme: 				['doom_ability','melee_ability','subtype_witch'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, dooming_aura: 3},
		},
		quote: '\"Join me in the darkness.\"',
	},
	doomed_urn:{
		name: 				'doomed urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T074116.931.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{dooming_deaths: 1},
		quote: '\"Holds doomed spirits.\"',
	},
	dooming_tower:{
		name: 				'dooming tower',
		type: 				'structure',
		subtypes: 			['wall','tower'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dooming_tower.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{doom: 1},
		hero_version: 			{
			theme: 				['subtype_cleric','subtype_wall'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{doom: 4},
		},
		quote: '\"You cannot stay there.\"',
	},
	dorrick:{
		name: 				'dorrick',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dorrick.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{run_away: 1, hide: 1, strike: 1, steal: 1, retreat: 1},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, pilfer: 1, hide: 1},
		},
		quote: '\"Unlike Horrick, Dorrick survived the great war.\"',
		unique: true,
	},
	drain_blood:{
		name: 				'drain blood',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T052256.822.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{wither_hero: 2, bolster_hero: 2},
		quote: '\"I can feel your blood flowing through me.\"',
	},
	drain_life:{
		name: 				'drain life',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T043128.770.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_creature: 1, restore: 8, minimum_ally_creatures: 1},
		quote: '\"I can feel the life flowing through me.\"',
	},
	dread_shield:{
		name: 				'dread shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['curse_ability','doom_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160630.471.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, fearful_hero: 1},
		quote: '\"Looks scary...\"',
	},
	dreadnought:{
		name: 				'dreadnought',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T165511.569.jpg',
		power: 				5,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_artifact'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Often considered too bulky for standard use.\"',
	},
	drowned_ghost:{
		name: 				'drowned ghost',
		type: 				'creature',
		subtypes: 			['undead','spirit','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dream_TradingCard-2025-02-19T083054.304.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, submerged: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','undead_ability','subtype_undead','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, submerged: 1, resurrect: 1, undead: 1},
		},
		quote: '\"She will pull you into the deep.\"',
	},
	druid:{
		name: 				'druid',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T073210.030.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, heal: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1},
		},
		quote: '\"Let the forest heal you.\"',
	},
	duelist:{
		name: 				'duelist',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T072051.587.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter: 1},
		},
		quote: '\"Just you and me!\"',
	},
	dwarf_pyro:{
		name: 				'dwarf pyro',
		type: 				'creature',
		subtypes: 			['dwarf','rogue'],
		color: 				['colorless'],
		theme: 				['muscle'],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dwarf_pyro.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 1, unshakable: 1},
		hero_version: 			{
			theme: 				['subtype_dwarf'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3, unshakable: 1},
		},
		quote: '\"Someone has the heat the hearth.\"',
	},
	echo_mage:{
		name: 				'echo mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T051959.780.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, release_echo: 1},
		hero_version: 			{
			theme: 				['summon_creature_ability','move_ally_to_hand_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 3},
		},
		quote: '\"She goes on forever.\"',
	},
	elder_druid:{
		name: 				'elder druid',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T073838.037.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, heal: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1},
		},
		quote: '\"I have wandered the forest all my life.\"',
	},
	elder_elf_druid:{
		name: 				'elder elf druid',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T073636.398.jpg',
		power: 				2,
		armor: 				0,
		health: 			7,
		abilities: 			{strike: 1, heal: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['healing_ability','subtype_elf','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1, resist_magic: 1},
		},
		quote: '\"The forest has tought me well.\"',
	},
	elemental_genie:{
		name: 				'elemental genie',
		type: 				'creature',
		subtypes: 			['genie','mage'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T060454.083.jpg',
		image_position: 	'left',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{elemental_bolt: 1, retreat_on_spell_cast: 1},
		hero_version: 			{
			theme: 				['type_spell','subtype_genie','draw_cards_ability','summon_ally_ability','subtype_warrior'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{elemental_bolt_hv: 1, spellrush: 1},
		},
		quote: '\"Grants elemental wishes only.\"',
	},
	elf:{
		name: 				'elf',
		type: 				'creature',
		subtypes: 			['elf'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"The forest told me to join the fight.\"',
	},
	elf_arsonist:{
		name: 				'elf arsonist',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_arsonist.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{burn: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3, resist_magic: 1},
		},
		quote: '\"Sometimes, you need to cleanse the forest with fire.\"',
	},
	elf_backstabber:{
		name: 				'elf backstabber',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_backstabber.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{run_away: 1, strike: 1, backstab: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1, resist_magic: 1},
		},
		quote: '\"It migth not be fair, but it works.\"',
	},
	elf_bramble_druid:{
		name: 				'elf bramble druid',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T063005.541.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, heal: 1, thorns: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['healing_ability','fortify_ability','type_creature','thorns_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1, thorns: 1, resist_magic: 1},
		},
		quote: '\"Let the forest heal you. Unless you do not deserve it.\"',
	},
	elf_channeler:{
		name: 				'elf channeler',
		type: 				'creature',
		subtypes: 			['elf','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T075044.260.jpg',
		image_position: 	'left',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, channel_life: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_clerk','deck_control','heal_hero_ability','subtype_elf'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, channel_life: 2, resist_magic: 1},
		},
		quote: '\"She will give her life to call the forest.\"',
	},
	elf_commander:{
		name: 				'elf commander',
		type: 				'creature',
		subtypes: 			['elf','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_commander.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1, resist_magic: 1},
		},
		quote: '\"Flank them!\"',
	},
	elf_druid:{
		name: 				'elf druid',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T072908.281.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, heal: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['healing_ability','subtype_elf','fortify_ability','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, heal: 1, resist_magic: 1},
		},
		quote: '\"Let the forest heal and protect you.\"',
	},
	elf_fire_mage:{
		name: 				'elf fire mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_fire_mage.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 3, resist_magic: 1},
		},
		quote: '\"We must contain the fire.\"',
	},
	elf_huntress:{
		name: 				'elf huntress',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T051546.767.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, run_away: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1, resist_magic: 1},
		},
		quote: '\"She hunts from the trees.\"',
	},
	elf_light_bringer:{
		name: 				'elf light bringer',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T142142.311.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, purifying_entry: 1, resist_magic: 1, blessed: 5},
		hero_version: 			{
			theme: 				['subtype_elf','bless_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1, bless: 1, resist_magic: 1},
		},
		quote: '\"She can see the light in everyone.\"',
	},
	elf_mana_mage:{
		name: 				'elf mana mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		not_theme: 			['subtype_mage'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T085210.151.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{spell_bolt: 1, spellrush: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','type_spell','type_draw_card_ability','type_damage_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spell_bolt_hv: 1, spellrush: 1, resist_magic: 1},
		},
		quote: '\"The mana flows through her.\"',
	},
	elf_medic:{
		name: 				'elf medic',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T080433.324.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, first_aid: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['active_healing_ability','fortify_ability','healing_ability','type_creature','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, first_aid: 1, resist_magic: 1},
		},
		quote: '\"Let the forest help you.\"',
	},
	elf_oracle:{
		name: 				'elf oracle',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_oracle.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{doom_all: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{doom_all: 2, resist_magic: 1},
		},
		quote: '\"The forest sees it all.\"',
	},
	elf_princess:{
		name: 				'elf princess',
		type: 				'creature',
		subtypes: 			['elf','royal'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_princess.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, restore: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, restore: 1, resist_magic: 1},
		},
		quote: '\"She rules the forest with a gentle touch.\"',
	},
	elf_seductress:{
		name: 				'elf seductress',
		type: 				'creature',
		subtypes: 			['elf'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_seductress.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, charming_touch: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, charming_touch: 1, resist_magic: 1},
		},
		quote: '\"We lost our men to the Great War. Theirs will do. Willing or not, they\'ll serve us in the end.\"<br/><br/>Credit: Pyrothecat',
	},
	elf_skirmisher:{
		name: 				'elf skirmisher',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T080052.421.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, homebound: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, resist_magic: 1},
		},
		quote: '\"They will never see me coming!\"',
	},
	elf_sky_mage:{
		name: 				'elf sky mage',
		type: 				'creature',
		subtypes: 			['elf','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_sky_mage.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{lightning: 2, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','lightning_ability','çurse_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{lightning_hv: 2, resist_magic: 1},
		},
		quote: '\"She is in tune with the sky.\"',
	},
	elf_smasher:{
		name: 				'elf smasher',
		type: 				'creature',
		subtypes: 			['elf','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T144647.971.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_elf'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"A force of nature.\"',
	},
	elf_sniper:{
		name: 				'elf sniper',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052012.131.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{snipe: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, resist_magic: 1},
		},
		quote: '\"Hit them where it hurts.\"',
	},
	elf_thief:{
		name: 				'elf thief',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T074238.729.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"She can evade your magical protection.\"',
	},
	elf_tracker:{
		name: 				'elf tracker',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053057.062.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{reveal: 1, shoot: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{reveal: 1, shoot_unit: 1, resist_magic: 1},
		},
		quote: '\"There you are!\"',
	},
	elf_warrior:{
		name: 				'elf warrior',
		type: 				'creature',
		subtypes: 			['elf','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard63.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, resist_magic: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1, plated: 1},
		},
		quote: '\"The forest told me to join the fight.\"',
	},
	elf_warder:{
		name: 				'elf warder',
		type: 				'creature',
		subtypes: 			['elf','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T083415.528.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, counter_spells: 4, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter_spells: 4, resist_magic: 1},
		},
		quote: '\"They do not truly understand magic.\"',
	},
	elf_witch:{
		name: 				'elf witch',
		type: 				'creature',
		subtypes: 			['elf','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T192347.073.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{curse: 1, strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_witch'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, resist_magic: 1},
		},
		quote: '\"They too, have a dark side.\"',
	},
	elf_youngster:{
		name: 				'elf youngster',
		type: 				'creature',
		subtypes: 			['elf'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/elf_youngster.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_elf','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1},
		},
		quote: '\"Did I come to the right place?\"',
	},
	/*elvish_archer:{
		name: 				'elvish archer',
		type: 				'creature',
		subtypes: 			['elf','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard59.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_elf'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, resist_magic: 1},
		},
		quote: '\"Stay in the forest.\"',
	},*/
	elvish_charm:{
		name: 				'elvish charm',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['plated_ability'],
		not_theme: 			['resist_magic_ability','subtype_elf','subtype_goblin'],
		craft_theme: 		['subtype_elf'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-04-05T061905.627.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hero_resists_magic: 1},
		quote: '\"Crafted by the finest elvish jewelers.\"',
		max_in_deck: 		1,
	},
	enchantress:{
		name: 				'enchantress',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_artifact'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/enchantress.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{arcane_bolt: 1, bring_artifact: 1},
		hero_version: 			{
			theme: 				['subtype_elf','type_artifact'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 1, bring_artifact: 2},
		},
		quote: '\"She can turn that magic into solid form.\"',
	},
	enforcer_golem:{
		name: 				'enforcer golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T065553.420.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, backlash: 2},
		hero_version: 			{
			theme: 				['type_creature','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, backlash: 1},
		},
		quote: '\"Not one of Lucia\'s best creations.\"',
	},
	excavator:{
		name: 				'excavator',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		['structure'],
		not_theme: 			['subtype_clerk','type_creature'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-01T083711.480.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, reclaim_structure: 1},
		hero_version: 			{
			theme: 				['type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, reclaim_structures: 1},
		},
		quote: '\"It\'s all there, under the dirt.\"',
	},
	exploding_owl:{
		name: 				'exploding owl',
		type: 				'creature',
		subtypes: 			['animal','bird','owl'],
		color: 				['colorless'],
		theme: 				['resurrect_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T154010.093.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, explode: 4, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fire_aura: 1, flying: 1},
		},
		quote: '\"A bird of prey, carrying something...\"',
	},
	fairy:{
		name: 				'fairy',
		type: 				'creature',
		subtypes: 			['fairy'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/3024c705-59dc-4c33-8885-202d194046df.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_fairy','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"So tiny!\"',
	},
	fairy_archer:{
		name: 				'fairy archer',
		type: 				'creature',
		subtypes: 			['fairy','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/333484c0-f06a-4a29-a0dc-ce0fd273d78b.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{shoot: 1, flying: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_fairy','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, flying: 1},
		},
		quote: '\"Tiny arrows still hurt.\"',
	},
	fairy_dust:{
		name: 				'fairy dust',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['subtype_fairy'],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-22T071952.321.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten: 1},
		quote: '\"Magic in its powdered form.\"',
	},
	fairy_flameshot:{
		name: 				'fairy flameshot',
		type: 				'creature',
		subtypes: 			['fairy','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/ec4aba9b-1880-42b6-9355-d4b2c7d6ecd9.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{shoot: 1, ignites: 1, flying: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_fairy','evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, ignites: 1, flying: 1},
		},
		quote: '\"Tiny burning arrows still hurt.\"',
	},
	fairy_priestess:{
		name: 				'fairy priestess',
		type: 				'creature',
		subtypes: 			['fairy','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/194a25c0-1a62-4abf-919e-89beac1c038d.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, bless: 2, flying: 1},
		hero_version: 			{
			theme: 				['subtype_fairy','evade_ability','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2, flying: 1},
		},
		quote: '\"A tiny blessing for you.\"',
	},
	fairy_rogue:{
		name: 				'fairy rogue',
		type: 				'creature',
		subtypes: 			['fairy','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/c52e803a-07f7-4556-8636-25c1bce4ef9b.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, evade: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','subtype_fairy','evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, flying: 1},
		},
		quote: '\"Sit still!!\"',
	},
	fairy_scout:{
		name: 				'fairy scout',
		type: 				'creature',
		subtypes: 			['fairy'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fe67c0e7-c0d5-459c-bbcb-45b45631ded4.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1, stealth: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_fairy'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1, flying: 1},
		},
		quote: '\"I feel like we are being watched.\"',
	},
	fairy_shatterer:{
		name: 				'fairy shatterer',
		type: 				'creature',
		subtypes: 			['fairy','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T065304.950.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, break: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_fairy','evade_ability','break_ability'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, break: 1, flying: 1},
		},
		quote: '\"You like your treasures, don\'t you?\"',
	},
	fairy_seeker:{
		name: 				'fairy seeker',
		type: 				'creature',
		subtypes: 			['fairy'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/89fc00c3-f9dc-40d1-b22c-73e0bd5f7bad.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{seek_enemy: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_fairy','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Something tiny is coming!\"',
	},
	fairy_thief:{
		name: 				'fairy thief',
		type: 				'creature',
		subtypes: 			['fairy','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/122fe5b8-9a26-460f-a0dd-97584d257174.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, steal: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','subtype_fairy','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"She can get through the smallest window.\"',
	},
	fairy_twin_blade:{
		name: 				'fairy twin blade',
		type: 				'creature',
		subtypes: 			['fairy','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_fairy'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/83ab4707-8490-49fe-a8a6-d83ce2064e8e.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 2, flying: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','subtype_fairy','evade_ability','buff_hero_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, flying: 1},
		},
		quote: '\"Many tiny stabs still hurt a lot.\"',
	},
	fairy_witch:{
		name: 				'fairy witch',
		type: 				'creature',
		subtypes: 			['fairy','witch'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T075639.145.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{curse: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_fairy','evade_ability','subtype_witch'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{curse_hv: 2, strike_unit: 1, flying: 1},
		},
		quote: '\"Tiny curses are still curses.\"',
	},
	fan_golem:{
		name: 				'fan golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_creature'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T063213.235.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{air_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem','flying_ability','air_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{air_bolt_hv: 2},
		},
		quote: '\"Very nice on a hot day.\"',
	},
	farm_scythe:{
		name: 				'farm scythe',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/farm_scythe.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reap: 1},
		quote: '\"They took my father for the Great War and left nothing but this old scythe. It\'s all I have to remember him by.\"<br/><br/>Credit: Pyrothecat',
		max_in_deck: 1,
	},
	farmer:{
		name: 				'farmer',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/farmer.jpg',
		image_position: 	'top right',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, reaping_touch: 1},
		hero_version: 			{
			theme: 				['subtype_human','wither_ability','reap_ability'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, reaping_touch: 1},
		},
		quote: '\"There is a time to sow and a time to reap.\"',
	},
	
	fastfood:{
		name: 				'fastfood',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T082839.638.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{heal: 2, draw_on_act: 1},
		quote: '\"Just a quick bite!\"',
	},
	fawn:{
		name: 				'fawn',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T074452.178.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, run_away: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','subtype_deer'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"So cute!\"',
	},
	fear:{
		name: 				'fear',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard53.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fear: 1, echo: 1},
		quote: '\"It\'s scary out there!\"',
		verified: true,
	},
	fearful_mask:{
		name: 				'fearful mask',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T073651.887.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fearful_hero: 1},
		quote: '\"Boo!\"',
	},
	fencer:{
		name: 				'fencer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T065349.510.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter: 1, plated: 1, evade: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter: 1, plated: 1, evade: 1},
			verified: true,
		},
		quote: '\"Watch your posture!\"',
	},
	fenrir:{
		name: 				'fenrir',
		type: 				'creature',
		subtypes: 			['animal','canine'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/fenrir.jpg',
		power: 				10,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, burning_entry: 5, strike_arrivals: 4, ignites: 2, feast: 2},
		hero_version: 			{
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1, ignites: 1, feast: 2},
		},
		quote: '\"<i>Fenrir will go forth with his mouth opened wide, his upper jaw touching the sky and his lower jaw the earth, and flames will burn from his eyes and nostrils.</i>\"<br/>Gylfaginning chapter 51',
		unique: true,
	},
	ferret:{
		name: 				'ferret',
		type: 				'creature',
		subtypes: 			['animal','marten'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T082023.862.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{seek_creature: 1, strike: 1, feast: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','feast_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, evade: 1},
		},
		quote: '\"Great for hunting small animals.\"',
	},
	final_embrace:{
		name: 				'final embrace',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T082440.868.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{destroy_creature: 2, minimum_enemy_creatures: 2},
		quote: '\"You will be together forever!\"',
	},
	fire_apprentice:{
		name: 				'fire apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard89.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 3},
		},
		quote: '\"Adept of fire.\"',
	},
	fire_beam:{
		name: 				'fire beam',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-30T095525.570.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_blast: 5, minimum_enemies: 3},
		quote: '\"Now that\'s hot!\"',
	},
	fire_blaster:{
		name: 				'fire blaster',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T075526.636.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{fire_blast: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_blast: 1},
		},
		quote: '\"Feel the heat!\"',
	},
	fire_bolt:{
		name: 				'fire bolt',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T162240.267.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_bolt: 1, echo: 1},
		quote: '\"When you need somethng done...\"',
	},
	fire_imp:{
		name: 				'fire imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard45.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 1, run_away: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_daemon','fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 2, evade: 1},
		},
		quote: '\"Me throw fire!\"',
	},
	fire_mage:{
		name: 				'fire mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard83.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{fire_bolt: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 3},
		},
		quote: '\"Master of fire.\"',
	},
	fire_owl:{
		name: 				'fire owl',
		type: 				'creature',
		subtypes: 			['animal','bird','owl'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T154342.096.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{fire_bolt: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 2, flying: 1},
			verified: 			true,
		},
		quote: '\"An hot bird or prey.\"',
	},
	fire_staff:{
		name: 				'fire staff',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fire_ability','fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard56.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_bolt_hv: 1},
		quote: '\"Stolen from an imp.\"',
	},
	fire_witch:{
		name: 				'fire witch',
		type: 				'creature',
		subtypes: 			['human','witch','mage'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T075903.360.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fire_bolt: 1, withering_touch: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_witch'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 2, withering_touch: 1},
		},
		quote: '\"The fire will melt you away.\"',
	},
	fire_zealot:{
		name: 				'fire zealot',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T143820.563.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 2, burning_entry: 2},
		hero_version: 			{
			theme: 				['burn_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2},
		},
		quote: '\"Give me something to burn!\"',
	},
	fishing_boat:{
		name: 				'fishing boat',
		type: 				'structure',
		subtypes: 			['ship','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T061844.613.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, trap: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_ship','type_structure'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"That can catch anything with those nets.\"',
	},
	flag_carrier:{
		name: 				'flag carrier',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		['subtype_flag'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T160906.293.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_arrivals: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior','move_ally_to_hand_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_arrivals: 1},
		},
		quote: '\"Follow me!\"',
	},
	flame_burst:{
		name: 				'flame burst',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['burn_ability','aoe'],
		craft_theme: 		['burn','burn','burn','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T071959.471.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_all: 2, draw_on_act: 1},
		quote: '\"Quick and hot.\"',
		max_in_deck: 		1,
	},
	flame_juggler:{
		name: 				'flame juggler',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability','burn_ability','burn_ability','burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T154619.544.jpg',
		power: 				1,
		armor: 				0,
		health: 			6,
		abilities: 			{shoot: 2, ignites: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 2, ignites: 1},
		},
		quote: '\"Catch!\"',
	},
	flame_orb:{
		name: 				'flame orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T161055.645.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_hv: 1},
		quote: '\"Somehow, cool to the touch.\"',
	},
	flame_rogue:{
		name: 				'flame rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T064700.191.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 3, evade: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2, evade: 1},
		},
		quote: '\"My blade burn for blood.\"',
	},
	flame_spirit:{
		name: 				'flame spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T084136.684.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{burn: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['burn_ability','undead_ability','resurrect_ability','explode_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 2, resurrect: 1, undead: 1},
		},
		quote: '\"It died in a fire long ago.\"',
	},
	flame_storm:{
		name: 				'flame storm',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['burn_ability','aoe'],
		craft_theme: 		['burn','burn','burn','storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T051233.076.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_all: 5, minimum_enemies: 3},
		quote: '\"...and fire came down from the sky...\"',
		max_in_deck: 		1,
	},
	flame_warrior:{
		name: 				'flame warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T165750.899.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, ignites: 2, plated: 1},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 1, plated: 1},
		},
		quote: '\"Fight with fire.\"',
	},
	flare:{
		name: 				'flare',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				2,
		image: 				'cards/dream_TradingCard-2025-01-24T143443.351.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fire_bolt: 1, draw_on_act: 1},
	},
	floating_fungus:{
		name: 				'floating fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T062957.348.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, spawn_sporeling: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, flying: 1},
		},
		quote: '\"Well... It ain\'t a bird.\"',
	},
	floating_vines:{
		name: 				'floating vines',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T052413.006.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_plant','flying_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Even floating plants try to kill you!\"',
	},
	flood:{
		name: 				'flood',
		type: 				'spell',
		subtypes: 			['weather','tactic','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['water','water','water','water','water'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T161309.082.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{water_blast: 2, minimum_enemies: 3},
		quote: '\"You had better get to high ground.\"',
	},
	flying_contraption:{
		name: 				'flying contraption',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T070817.818.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{charge: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_golem','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Lucia had some weird ideas.\"',
	},
	flying_fortress:{
		name: 				'flying fortress',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2023-04-02T061210.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{air_bolt: 1, fortify_self: 2, flying: 1},
		hero_version: 			{
			theme: 				['fortify_ability','flying_ability','air_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{air_bolt_hv: 1, fortify: 1, flying: 1},
		},
		quote: '\"The mages of Gu\'nar used to have many of those.\"',
	},
	flying_horror:{
		name: 				'flying horror',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T101506.203.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{fear: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_animal','flying_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, fearful_aura: 1},
		},
		quote: '\"Do you hear that buzzing sound?\"',
	},
	fog:{
		name: 				'fog',
		type: 				'spell',
		subtypes: 			['weather','tactic'],
		color: 				['colorless'],
		theme: 				['stealth_ability','evade_ability','aoe'],
		craft_theme: 		['grant_stealth','evade','subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T142202.575.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_ally: 5, minimum_allies: 3},
		quote: '\"We can\'t find them, sir.\"',
		max_in_deck: 1,
	},
	fort:{
		name: 				'fort',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-10T062312.976.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{fortify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','plated_ability','subtype_warrior'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fortify_self: 2, fortify_all: 1},
		},
		quote: '\"Stay within the walls!\"',
	},
	freya:{
		name: 				'freya',
		type: 				'creature',
		subtypes: 			['cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/freya.jpg',
		power: 				4,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, nurture: 3, heal: 2, flying: 1},
		hero_version: 			{
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, nurture: 1, heal: 1, flying: 1},
		},
		quote: '\"She cares for all.\"',
		unique: true,
	},
	frog:{
		name: 				'frog',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T052924.464.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1},
		quote: '\"Ribbit.\"',
	},
	frog_pond:{
		name: 				'frog pond',
		type: 				'structure',
		subtypes: 			['wall','aquatic'],
		color: 				['colorless'],
		theme: 				['sacrifice_ability','subtype_animal'],
		craft_theme: 		['sacrifice_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T060228.402.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{summon_frog: 1},
		hero_version: 			{
			theme: 				['consume_ability','empower_any_ability','subtype_animal'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_frog: 1},
		},
		quote: '\"That\'s a lot of frogs...\"',
	},
	front_runner:{
		name: 				'front runner',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T144841.842.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{run_away: 1, strike: 1, triumphant_haste: 2},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1},
		},
		quote: '\"I will find a path. You can follow me!\"',
	},
	frontal_charge:{
		name: 				'frontal charge',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T160058.989.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ally_charges: 1, echo: 1},
		quote: '\"Take this mount and get out there!\"',
	},
	frost_apprentice:{
		name: 				'frost apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['cold_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard90.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{frost_bolt: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['cold_ability','stun_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt_hv: 2},
		},
		quote: '\"Adept of ice.\"',
	},
	frost_mage:{
		name: 				'frost mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['cold_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard84.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{frost_bolt: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['cold_ability','stun_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt_hv: 2},
		},
		quote: '\"Master of ice.\"',
	},
	frost_witch:{
		name: 				'frost witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T162238.824.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{curse: 2, frost_bolt: 2},
		hero_version: 			{
			theme: 				['curse_ability','cold_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all: 1, frost_bolt_hv: 1},
		},
		quote: '\"I can feel a shiver going through my spine...\"',
	},
	frozen_creature:{
		name: 				'frozen creature',
		type: 				'structure',
		subtypes: 			['frozen'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				2,
		image: 				'cards/dream_TradingCard-2023-04-24T061525.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{shatter: 1},
	},
	fungal_charger:{
		name: 				'fungal charger',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T072707.538.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, spawn_sporeling: 1},
		},
		quote: '\"Can you smell it before it charges?\"',
	},
	fungal_chomper:{
		name: 				'fungal chomper',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T071829.816.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{consume_creature: 1, strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{consume_creature: 1, strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"They eat their own!\"',
	},
	fungal_gnasher:{
		name: 				'fungal gnasher',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T090438.407.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{consume_creature: 1, strike: 1, feast: 4, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus','type_creature'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{consume_creature: 1, strike_unit: 1, feast: 1, spawn_sporeling: 1},
		},
		quote: '\"That thing eats anything!\"',
	},
	fungal_lord:{
		name: 				'fungal lord',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T065002.587.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, spawn_sporeling: 1, augment_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus','summon_sporeling_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, augment_sporeling: 1},
		},
		quote: '\"Come, young one! Grow!\"',
	},
	fungal_overgrowth:{
		name: 				'fungal overgrowth',
		type: 				'spell',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				['aoe','subtype_fungus'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		selfdestructs: 		true,
		image: 				'cards/dream_TradingCard-2023-04-07T212045.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{morph_sporeling: 5, minimum_enemies: 5},
		quote: '\"One of us!\"',
		max_in_deck: 	1,
	},
	fungal_rat:{
		name: 				'fungal rat',
		type: 				'creature',
		subtypes: 			['fungus','animal','rodent'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T072856.353.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, run_away: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, spawn_sporeling: 1},
		},
		quote: '\"I thought normal rats were smelly enough.\"',
	},
	fungal_slasher:{
		name: 				'fungal slasher',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T071134.499.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 2, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, spawn_sporeling: 1},
		},
		quote: '\"Clawed mould.\"',
	},
	fungal_warrior:{
		name: 				'fungal warrior',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T064635.028.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"You leave some bread out too long, and then it attacks you!\"',
	},
	furnace:{
		name: 				'furnace',
		type: 				'structure',
		subtypes: 			['furnace'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability','fire_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard64.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{burn: 2},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3},
		},
		quote: '\"Hot! Hot!\"',
	},
	generator:{
		name: 				'generator',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T082958.968.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{hasten: 1, explode: 4},
		hero_version: 			{
			theme: 				['draw_cards_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{hasten: 1, fire_aura: 1},
		},
		quote: '\"Isn\'t that thing a bit unstable?\"',
	},
	giant:{
		name: 				'giant',
		type: 				'creature',
		subtypes: 			['giant','warrior'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T204731.516.jpg',
		image_position: 	'top',
		power: 				5,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_giant','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Puny creatures.\"',
	},
	giant_octopus:{
		name: 				'giant octopus',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T065314.936.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, stunning_touch: 1, submerged: 1},
		hero_version: 			{
			theme: 				['stun_ability','subtype_animal','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stunning_touch: 1, submerged: 1},
		},
		quote: '\"It can hold on tight with those giant tentacles.\"',
	},
	giant_slug:{
		name: 				'giant slug',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T075405.956.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, plated: 1, step_aside: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"It crawled away, slowly...\"',
	},
	ghost:{
		name: 				'ghost',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T105240.183.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{undead: 1},
		quote: '\"Harmless but creepy.\"',
	},
	ghost_bride:{
		name: 				'ghost bride',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T082624.705.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{resurrect: 1, vengeance: 1, undead: 1},
		hero_version: 			{
			theme: 				['own_death_proc_ability','summon_creature_ability','ally_creature_death_proc_ability'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, vengeance_hv: 1, resurrect: 1, undead: 1},
		},
		quote: '\"She died at the altar.\"',
	},
	ghost_caller:{
		name: 				'ghost caller',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','ghost'],
		not_theme: 			['sacrifice_ability'],
		craft_theme: 		['ghost','ghost','ghost','ghost','undead'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T110831.364.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, summon_ghost: 1},
		hero_version: 			{
			theme: 				['subtype_undead','sacrifice_ability','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, summon_ghost: 1},
		},
		quote: '\"Come, spirits! Join me!\"',
	},
	ghost_owl:{
		name: 				'ghost owl',
		type: 				'creature',
		subtypes: 			['undead','spirit','animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/phone-wallpaper-7704031_640.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_undead','subtype_owl'],
			power: 				1,
			armor: 				0,
			health: 			25,
			abilities: 			{strike_unit: 1, flying: 1, resurrect: 1, undead: 1},
		},
		quote: '\"An endless ooh-hu...\"',
	},
	ghost_pendant:{
		name: 				'ghost pendant',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T085030.601.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{unsummon_dead: 1},
		quote: '\"You cannot rest yet.\"',
	},
	ghost_pit:{
		name: 				'ghost pit',
		type: 				'structure',
		subtypes: 			['wall','undead'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','ghost'],
		craft_theme: 		['undead','undead','sacrifice','sacrifice','sacrifice','sacrifice','ghost'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T105800.017.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{summon_ghost: 2},
		hero_version: 			{
			theme: 				['subtype_undead','sacrifice_ability','ally_creature_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_ghost: 2},
		},
		quote: '\"You can hear them wail...\"',
	},
	ghostly_baker:{
		name: 				'ghostly baker',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T064532.395.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, bolstering_deaths: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bolstering_deaths: 1, undead: 1, resurrect: 1},
		},
		quote: '\"I will feed you. Forever!\"',
	},
	ghoul:{
		name: 				'ghoul',
		type: 				'creature',
		subtypes: 			['undead','zombie'],
		color: 				['colorless'],
		theme: 				['type_creature'],
		not_theme: 			['type_structure','type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-19T105649.092.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, corpse_feast: 1, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, corpse_feast: 1, undead: 1},
		},
		quote: '\"It will eat anything inside a grave.\"',
	},
	giant_armadillo:{
		name: 				'giant armadillo',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T083312.570.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, fortify_self: 1, plated: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_animal','plated_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 1, plated: 1},
		},
		quote: '\"Tough giant critter.\"',
	},
	gnome_rascal:{
		name: 				'gnome rascal',
		type: 				'creature',
		subtypes: 			['gnome'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/gnome_rascal.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, shoot: 1, hide: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_gnome','evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, shoot_unit: 1, hide: 1, evade: 1},
		},
		quote: '\"Ouch! Where did that come from?!\"',
	},
	gnomeling:{
		name: 				'gnomeling',
		type: 				'creature',
		subtypes: 			['gnome'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/gnomeling.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, hide: 1},
		hero_version: 			{
			theme: 				['subtype_gnome','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide: 1},
		},
		quote: '\"They learn to hide when they are young.\"',
	},
	goat:{
		name: 				'goat',
		type: 				'creature',
		subtypes: 			['animal','goat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T073208.425.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"They jump from place to place.\"',
	},
	goblin_sapper:{
		name: 				'goblin sapper',
		type: 				'creature',
		subtypes: 			['goblin','laborer'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/goblin_sapper.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, build_palisade: 1, resist_magic: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, experiment_hv: 1, resist_magic: 1},
		},
		quote: '\"Stand back! I’m about to invent defense!<br/><br/>Credit: Pyrothecat\"',
	},
	golem_lobber:{
		name: 				'golem lobber',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T063445.187.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{earth_bolt: 2},
		hero_version: 			{
			theme: 				['subtype_golem','projectile_ability','type_structure'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{earth_bolt_hv: 3},
		},
		quote: '\"Look out for that boulder!\"',
	},
	golemite:{
		name: 				'golemite',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard75.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Made to serve.\"',
	},
	gravedigger:{
		name: 				'gravedigger',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		['subtype_undead','undead_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T072647.554.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, raging_deaths: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, raging_deaths: 1},
		},
		quote: '\"Gravedigging is great exercise.\"',
	},
	gravestone:{
		name: 				'gravestone',
		type: 				'artifact',
		subtypes: 			['grave'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['resurrect_ability','undead_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T085734.431.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{resurrect_hero: 2},
		quote: '\"The date marked is not today.\"',
		selfdestructs: 		true,
	},
	greater_worm:{
		name: 				'greater worm',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T065608.294.jpg',
		power: 				5,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I did not know they got that big!\"',
	},
	green_dragon:{
		name: 				'green dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T065401.629.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, poison_all: 2, flying: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, poison_hv: 1, flying: 1},
		},
		quote: '\"True poisonous power.\"',
	},
	green_whelp:{
		name: 				'green whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T062307.944.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, poison: 3, flying: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, poison_hv: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	grey_jinn:{
		name: 				'grey jinn',
		type: 				'creature',
		subtypes: 			['genie','warrior'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dream_TradingCard-2025-02-17T055458.305.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, retreat_on_spell_cast: 1},
		hero_version: 			{
			theme: 				['type_spell','subtype_genie','type_draw_card_ability','type_damage_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spellrush: 1},
		},
		quote: '\"A wish for death, you say?\"',
	},
	griffin:{
		name: 				'griffin',
		type: 				'creature',
		subtypes: 			['animal','bird','lion'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-06T152421.937.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A mythical creature.\"',
	},
	group_meditation:{
		name: 				'group meditation',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe','fortify_ability','plated_ability'],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		['active_healing'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T154506.170.jpg',
		image_position: 	'right',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{restore: 3, heal_all: 3, minimum_allies: 3},
		quote: '\"Everyone... Take a deep breath.\"',
	},
	grow_thorns:{
		name: 				'grow thorns',
		type: 				'spell',
		subtypes: 			['summon','plant'],
		color: 				['colorless'],
		theme: 				['subtype_plant','aoe'],
		craft_theme: 		['thorns_ability','thorns_ability','subtype_plant'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T061035.728.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_spike_pod: 1, echo: 1},
		quote: '\"They will have to reach us first!\"',
	},
	guard:{
		name: 				'guard',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T065359.443.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, guard: 1},
		hero_version: 			{
			theme: 				['guard_ability','subtype_warrior','active_healing_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"She will hold the door.\"',
	},
	guard_dog:{
		name: 				'guard dog',
		type: 				'creature',
		subtypes: 			['animal','canine'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T065832.299.jpg',
		image_position: 	'right',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, guard: 1, empower_opposed: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_animal','guard_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_opposed: 1},
		},
		quote: '\"They warn you of incoming threats.\"',
	},
	guardian_golem:{
		name: 				'guardian golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T062026.811.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, guard: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Lucia\'s home was guarded by dozens of these.\"',
	},
	guerrilla_ambusher:{
		name: 				'guerrilla ambusher',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T075702.975.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, hide: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1, evade: 1},
		},
		quote: '\"I will be gone before they see me!\"',
	},
	guerrilla_archer:{
		name: 				'guerrilla archer',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T051408.807.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{shoot: 1, retreat: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"Get back to a good vantage point!\"',
	},
	guerrilla_conscript:{
		name: 				'guerrilla conscript',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-03T080100.865.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"If they see me, I\'m out of here!\"',
	},
	guerrilla_fighter:{
		name: 				'guerrilla fighter',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T072424.563.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Hit and run!\"',
	},
	guerrilla_warrior:{
		name: 				'guerrilla warrior',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['guerrilla'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T074530.397.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, retreat: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_rogue','subtype_tactic'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Hit them where it hurts!\"',
	},
	gulper:{
		name: 				'gulper',
		type: 				'creature',
		subtypes: 			['animal','reptile'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-04-05T054112.183.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{consume_creature: 2, strike: 1},
		hero_version: 			{
			theme: 				['summon_creature_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{consume_creature: 2, strike_unit: 1},
		},
		quote: '\"Hungry and slimy.\"',
	},
	haunted_house:{
		name: 				'haunted house',
		type: 				'structure',
		subtypes: 			['wall','undead'],
		color: 				['colorless'],
		theme: 				['sacrifice_ability'],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard97.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{cursed_deaths: 1, summon_ghost: 1},
		hero_version: 			{
			theme: 				['curse_ability','ally_creature_death_proc_ability','arcane_bolts_ability','arcane_bolts_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{cursed_deaths_hv: 1, summon_ghost: 1},
		},
		quote: '\"An evil witch used to live here.\"',
	},
	hawk:{
		name: 				'hawk',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard41.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Trained for the hunt.\"',
	},
	hearty_brew:{
		name: 				'hearty brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T135230.059.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{restore: 1, echo: 1},
		quote: '\"Just what I needed!\"',
	},
	hearty_meal:{
		name: 				'hearty meal',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T080446.469.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{heal_all: 1, echo: 1},
		quote: '\"I could eat that all day!\"',
	},
	heatblade:{
		name: 				'heatblade',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T074549.599.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, ignites: 2},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, ignites: 2},
		},
		quote: '\"Her blade burns hot.\"',
	},
	heatwave:{
		name: 				'heatwave',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T151516.207.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{water_blast: 3, fire_blast: 3, minimum_enemies: 3},
		quote: '\"A wave of fire!\"',
	},
	heavy_javelineer:{
		name: 				'heavy javelineer',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T150127.530.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, shoot_arrival: 3},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, shoot_arrivals: 1},
		},
		quote: '\"You can strike with it, and throw it.\"',
	},
	hedgehog:{
		name: 				'hedgehog',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T081327.925.jpg',
		image_position: 	'left',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, thorns: 1},
		hero_version: 			{
			theme: 				['thorns_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, thorns: 1},
		},
		quote: '\"Cute and prickly.\"',
	},
	heroic_blade:{
		name: 				'heroic blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_mage','arcane_bolts_ability','type_structure','type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T073952.521.jpg',
		image_position: 	'bottom',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1},
		quote: '\"A weapon fit for a hero!\"',
		max_in_deck: 		1,
	},
	hex:{
		name: 				'hex',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				['curse_ability'],
		craft_theme: 		['subtype_witch','hex_ability','hex_ability','hex_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T053525.837.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hex: 1, echo: 1},
		quote: '\"Ribbit!\"',
	},
	hexing_witch:{
		name: 				'hexing witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['hex_ability','hex_ability','shift_ability','subtype_witch','subtype_witch'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T055500.986.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, hex: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hex: 1},
		},
		quote: '\"Who\'s a good little toad? You are!\"',
	},
	high_witch:{
		name: 				'high witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T162555.308.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{curse_all: 1, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_all: 1, strike_unit: 1},
		},
		quote: '\"Let the darkness consume you!\"',
	},
	historian:{
		name: 				'historian',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		not_theme: 			['type_structure','type_creature'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-01T074842.219.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, reclaim_spell: 1},
		hero_version: 			{
			theme: 				['type_spell','type_damage_ability','type_draw_card_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, reclaim_spells: 1},
		},
		quote: '\"We can learn from the past.\"',
	},
	hooved_sabatons:{
		name: 				'hooved sabatons',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				['subtype_animal'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-23T060930.040.jpg',
		image_position: 	'bottom',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ally_charges: 1},
		quote: '\"Those can make you run really fast.\"',
	},
	hornet:{
		name: 				'hornet',
		type: 				'creature',
		subtypes: 			['animal','insect'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2023-03-12T074521.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{avoid_structure: 1, strike: 1, venom: 2, flying: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_animal','subtype_insect'],
			power: 				2,
			armor: 				0,
			health: 			35,
			abilities: 			{strike_unit: 1, venom: 1, flying: 1},
		},
		quote: '\"A painful sting.\"',
	},
	horrid_crawlers:{
		name: 				'horrid crawlers',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T095805.376.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{fear: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fearful_aura: 1},
		},
		quote: '\"You don\'t wanna find those in your boot!\"',
	},
	horrid_mage:{
		name: 				'horrid mage',
		type: 				'creature',
		subtypes: 			['mage','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T083956.804.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{fear: 1, arcane_bolt: 2},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_mage','heal_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, fearful_aura: 1},
		},
		quote: '\"You don\'t wanna find those in your boot!\"',
	},
	horrid_scream:{
		name: 				'horrid scream',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T070145.948.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fear: 5, minimum_enemy_creatures: 3},
		quote: '\"Let\'s get out of here!\"',
	},
	hospital:{
		name: 				'hospital',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead','subtype_wall'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/a633d175-7415-40f7-9a14-26035d4dd409.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{first_aid: 1, purify: 1},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{first_aid: 2, purify: 1},
		},
		quote: '\"They can take care of your medical needs.\"',
	},
	huge_crab:{
		name: 				'huge crab',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T080920.202.jpg',
		power: 				5,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Find a crack in the shell!\"',
	},
	huge_spider:{
		name: 				'huge spider',
		type: 				'creature',
		subtypes: 			['animal','spider'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard92.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, trap: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_animal','subtype_spider','stun_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"Watch out for webs! And fangs!\"',
	},
	hungry_wolf:{
		name: 				'hungry wolf',
		type: 				'creature',
		subtypes: 			['animal','canine'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard100.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 4},
		hero_version: 			{
			theme: 				['feast_ability','subtype_animal','curse_ability','curse_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1},
		},
		quote: '\"It will eat your face.\"',
	},
	hunting_horror:{
		name: 				'hunting horror',
		type: 				'creature',
		subtypes: 			['horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T063754.281.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{fear: 1, seek_creature: 1, strike: 1, feast: 5},
		hero_version: 			{
			theme: 				['subtype_horror','heal_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, fearful_aura: 1},
		},
		quote: '\"It will find you...\"',
	},
	huntress:{
		name: 				'huntress',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T051904.889.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, run_away: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"Get to a distance.\"',
	},
	hurricane:{
		name: 				'hurricane',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		['storm'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T054607.831.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{air_blast: 8, minimum_enemies: 3},
		quote: '\"Hold on to your hat!\"',
	},
	hurried_defenses:{
		name: 				'hurried defenses',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['type_structure','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T061047.430.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{build_palisade: 3, maximum_allies: 2},
		quote: '\"It should keep them out for a little while.\"',
		max_in_deck: 		1,
	},
	iceblade:{
		name: 				'iceblade',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard31.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{cold_strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['melee_ability','stun_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{cold_strike_hv: 1, evade: 1},
		},
		quote: '\"My blade is cold as ice.\"',
	},
	ice_wand:{
		name: 				'ice wand',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T090514.471.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{frost_bolt_hv: 1},
		quote: '\"Some like it cold.\"',
	},
	ignite:{
		name: 				'ignite',
		type: 				'spell',
		subtypes: 			['fire'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T190530.634.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn: 2, echo: 1},
		quote: '\"Anyone got a match?\"',
	},
	imp:{
		name: 				'imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard46.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, evade: 1},
		},
		quote: '\"Me like fire!\"',
	},
	imp_burner:{
		name: 				'imp burner',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T145808.086.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, burn: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, burn_hv: 1},
		},
		quote: '\"Me like to watch fire!\"',
	},
	imp_flame_bringer:{
		name: 				'imp flame bringer',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T150637.978.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, burning_entry: 2},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, burn_hv: 1},
		},
		quote: '\"Me bring fire and flame!\"',
	},
	imp_front_runner:{
		name: 				'imp front runner',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T061842.389.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, run_away: 1, triumphant_haste: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','draw_cards_ability','summon_creature_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, evade: 1, hasten: 1},
		},
		quote: '\"C\'mon guys, there is an opening!\"',
	},
	imp_horde:{
		name: 				'imp horde',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['subtype_imp','subtype_imp','subtype_daemon','subtype_daemon','aoe'],
		craft_theme: 		['subtype_imp'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard50.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_imp: 5, maximum_allies: 0},
		quote: '\"We emptied the pit, sir!\"',
	},
	imp_lord:{
		name: 				'imp lord',
		type: 				'creature',
		subtypes: 			['daemon','imp','warrior'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		not_theme: 			['empower_any_ability','subtype_warrior'],
		craft_theme: 		['subtype_imp','subtype_imp','empower_any_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T152259.084.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{flame_strike: 1, empower_imps: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, empower_ally: 1},
		},
		quote: '\"Fear my army!\"',
	},
	imp_soldier:{
		name: 				'imp soldier',
		type: 				'creature',
		subtypes: 			['daemon','imp','warrior'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T145557.361.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{flame_strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, plated: 1},
		},
		quote: '\"Me wield fire and steel!\"',
	},
	imp_thief:{
		name: 				'imp thief',
		type: 				'creature',
		subtypes: 			['daemon','imp','rogue'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-15T115912.801.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, run_away: 1, steal: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_daemon','subtype_imp'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, evade: 1},
		},
		quote: '\"Hihi!\"',
	},
	imp_warrior:{
		name: 				'imp warrior',
		type: 				'creature',
		subtypes: 			['daemon','imp','warrior'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard47.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{flame_strike: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1},
		},
		quote: '\"Me wield fire!\"',
	},
	impending_doom:{
		name: 				'impending doom',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T163058.487.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{doom_all: 5, minimum_enemies: 3},
		quote: '\"Your days are numbered!\"',
	},
	incinerator:{
		name: 				'incinerator',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['burn_ability','burn_ability'],
		not_theme: 			['subtype_mage','fire_ability','subtype_human'],
		craft_theme: 		['burn_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T062355.027.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, conflagrate: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, conflagrate_hv: 1},
		},
		quote: '\"I will turn you into ashes.\"',
	},
	infiltrator_strike:{
		name: 				'infiltrator strike',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['aoe','subtype_rogue'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T145824.247.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{strike_hero: 3, backstab: 3},
		quote: '\"Strike from within!\"',
	},
	infirmary:{
		name: 				'infirmary',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead','subtype_wall'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/31564266-e4c3-4f01-9141-7d645a64c33a.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{first_aid: 1},
		hero_version: 			{
			theme: 				['type_creature','subtype_human','active_healing_ability','fortify_ability','cleanse_ally_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{first_aid: 2},
		},
		quote: '\"They can take care of your wounds.\"',
	},
	instil_doubt:{
		name: 				'instil doubt',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T121159.363.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{stun_creature: 1, echo: 1},
		quote: '\"Are you sure?\"',
	},
	jellyfish:{
		name: 				'jellyfish',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/ai-generated-7824834_640.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{static_strike: 1, static_aura: 2, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_aquatic'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{static_strike_hv: 1, static_aura: 1, submerged: 1},
		},
		quote: '\"A painful touch.\"',
	},
	jumping_fungus:{
		name: 				'jumping fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T071510.219.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, spawn_sporeling: 1, evade: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1, evade: 1},
		},
		quote: '\"It jumps away, but the smell stays...\"',
	},
	jungle_troll:{
		name: 				'jungle troll',
		type: 				'creature',
		subtypes: 			['troll'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard81.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, regenerate: 1},
		hero_version: 			{
			theme: 				['jungle','subtype_troll','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, regenerate: 1},
		},
		quote: '\"I do smash!\"',
	},
	kleptomaniac:{
		name: 				'kleptomaniac',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T080137.857.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, steal: 3},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, break: 1},
		},
		quote: '\"When they have so many, I couldn\'t just let it lie there, now could I?\"',
	},
	knight:{
		name: 				'knight',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T062906.532.jpg',
		power: 				4,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Years of training.\"',
	},
	kraken:{
		name: 				'kraken',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T070334.692.jpg',
		power: 				2,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 3, stunning_touch: 1, submerged: 1},
		hero_version: 			{
			theme: 				['stun_ability','subtype_animal','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stunning_touch: 1, submerged: 1},
		},
		quote: '\"It\'s the kraken!\"',
	},
	lab:{
		name: 				'lab',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-05T060319.860.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{experiment: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_clerk','type_structure'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{experiment_hv: 3},
		},
		quote: '\"Something\'s happening...\"',
	},
	lab_assistant:{
		name: 				'lab assistant',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-27T060924.434.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, experiment: 1},
		hero_version: 			{
			theme: 				['subtype_clerk','experiment_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, experiment_hv: 1},
		},
		quote: '\"Look! It\'s working!\"',
	},
	lamb:{
		name: 				'lamb',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				['sacrifice_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T083711.683.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, final_restore: 4},
		hero_version: 			{
			theme: 				['subtype_animal','bolster_ability','heal_hero_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Lamb chops anyone?\"',
	},
	lava_lizard:{
		name: 				'lava lizard',
		type: 				'creature',
		subtypes: 			['animal','reptile'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T082351.198.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, fire_aura: 1},
		hero_version: 			{
			theme: 				['subtype_reptile','poison_ability','fire_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, fire_aura: 1},
		},
		quote: '\"I said, don\'t pet it!\"',
	},
	lava_newt:{
		name: 				'lava newt',
		type: 				'creature',
		subtypes: 			['animal','reptile'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T081852.528.jpg',
		image_position: 	'right',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, venom: 1, fire_aura: 1},
		hero_version: 			{
			theme: 				['subtype_reptile','poison_ability','fire_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, fire_aura: 1},
		},
		quote: '\"Cute, but don\'t pet it.\"',
	},
	lava_tegu:{
		name: 				'lava tegu',
		type: 				'creature',
		subtypes: 			['animal','reptile'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T082502.175.jpg',
		image_position: 	'left',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, venom: 1, fire_aura: 1},
		hero_version: 			{
			theme: 				['subtype_reptile','poison_ability','fire_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, fire_aura: 1},
		},
		quote: '\"I\'m not petting that!\"',
	},
	lava_tree:{
		name: 				'lava tree',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-28T191315.700.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{fire_aura: 2, regenerate: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_aura: 1, regenerate: 1},
		},
		quote: '\"Used for fireproof furniture.\"',
	},
	lay_trap:{
		name: 				'lay trap',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T164712.237.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_trap: 1, echo: 1},
		quote: '\"A little surprise.\"',
	},
	lazy_bear:{
		name: 				'lazy bear',
		type: 				'creature',
		subtypes: 			['animal','bear'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T071114.555.jpg',
		image_position: 	'left',
		potential_power: 	1.5,
		power: 				0,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, awaken: 3},
		hero_version: 			{
			theme: 				['enrage_ability','subtype_animal','active_healing_ability','bolster_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"Let sleeping bears lie!\"',
	},
	leafy_seeker:{
		name: 				'leafy seeker',
		type: 				'creature',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T052012.946.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{seek_enemy: 1, strike: 1, hide: 1},
		hero_version: 			{
			theme: 				['subtype_plant','evade_ability','movement_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1},
		},
		quote: '\"Even the plants hunt and kill you!\"',
	},
	leeching_parasite:{
		name: 				'leeching parasite',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T060621.852.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, chaos_touch: 1, leech_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, chaos_strikes: 1, feast: 1},
		},
		quote: '\"Don\'t let it touch you.\"',
	},
	leeching_worm:{
		name: 				'leeching worm',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T061902.023.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, leech_hero: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1},
		},
		quote: '\"Found in high grass.\"',
	},
	lena:{
		name: 				'lena',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/lena.jpg',
		power: 				4,
		armor: 				0,
		health: 			12,
		abilities: 			{backlash_all: 2, strike: 2, stunning_touch: 1, evade: 1},
		hero_version: 			{
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{backlash_all: 2, strike_unit: 1, evade: 1},
		},
		quote: '\"The men could do it! Now you must work just as hard!\"',
		unique: true,
	},
	levitate:{
		name: 				'levitate',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				['evade_ability'],
		craft_theme: 		['flying_ability','subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T164704.760.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{levitate: 1, echo: 1},
		quote: '\"I can fly!\"',
		max_in_deck: 1,
	},
	librarian:{
		name: 				'librarian',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard55.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, draw: 1},
		hero_version: 			{
			theme: 				['subtype_human','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1},
		},
		quote: '\"I brought some knowledge.\"',
	},
	library:{
		name: 				'library',
		type: 				'structure',
		subtypes: 			['clerk','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard72.jpg',
		image_position: 	'bottom',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{draw: 2},
		hero_version: 			{
			theme: 				['draw_cards_ability','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{draw: 2},
			verified: 			true,
		},
		quote: '\"It\'s amazing, what you can find.\"',
	},
	lightning_apprentice:{
		name: 				'lightning apprentice',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T084239.955.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{lightning: 1},
		hero_version: 			{
			theme: 				['subtype_mage','lightning_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{lightning_hv: 2},
		},
		quote: '\"Adapt of lightning.\"',
	},
	lightning_hammer:{
		name: 				'lightning hammer',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-22T071702.374.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{lightning_hv: 1},
		quote: '\"A godly weapon.\"',
	},
	lightning_mage:{
		name: 				'lightning mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard2025-02-20T083638.383.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{lightning: 2},
		hero_version: 			{
			theme: 				['subtype_mage','lightning_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{lightning_hv: 2},
		},
		quote: '\"The air is crackling!\"',
	},
	
	lightning_storm:{
		name: 				'lightning storm',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T043301.520.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{lightning_storm: 5},
		quote: '\"Bolt after bolt...\"',
	},
	lightning_witch:{
		name: 				'lightning witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T083245.475.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{lightning: 1, cursed_touch: 1},
		hero_version: 			{
			theme: 				['curse_ability','lightning_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{lightning_hv: 2, cursed_touch: 1},
		},
		quote: '\"A crackling curse!\"',
	},
	lizardman:{
		name: 				'lizardman',
		type: 				'creature',
		subtypes: 			['reptile'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard69.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1},
		hero_version: 			{
			theme: 				['subtype_reptile','poison_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1},
		},
		quote: '\"Coldblooded and deadly.\"',
	},
	lizardman_warrior:{
		name: 				'lizardman warrior',
		type: 				'creature',
		subtypes: 			['reptile','warrior'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard70.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, venom: 2},
		hero_version: 			{
			theme: 				['subtype_reptile','poison_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1},
		},
		quote: '\"Coldblooded and very deadly.\"',
	},
	lobster:{
		name: 				'lobster',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T075035.904.jpg',
		image_position: 	'top',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Though shell to crack, but so yummy.\"',
	},
	locust:{
		name: 				'locust',
		type: 				'creature',
		subtypes: 			['animal','insect'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T072419.511.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{seek_enemy: 1, strike: 1, flying: 1, summon_locust_on_kill: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_animal','subtype_insect'],
			power: 				1,
			armor: 				0,
			health: 			35,
			abilities: 			{strike_unit: 1, summon_locust_on_kill: 1, flying: 1},
		},
		quote: '\"There will be more as long as they can feed.\"',
	},
	locust_swarm:{
		name: 				'locust swarm',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['subtype_animal','subtype_insect'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T073228.986.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_unit: 5, summon_locust_on_kill: 2},
		quote: '\"They will eat everything.\"',
	},
	lost_horse:{
		name: 				'lost horse',
		type: 				'creature',
		subtypes: 			['animal','horse'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['horse'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T071119.781.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, final_grant_charge: 1},
		hero_version: 			{
			theme: 				['movement_ability','subtype_animal','subtype_horse'],
			power: 				2,
			armor: 				0,
			health: 			35,
			abilities: 			{strike_unit: 1, ally_charges: 1},
		},
		quote: '\"I wonder what happened to the rider.\"',
	},
	lost_soul:{
		name: 				'lost soul',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T071905.642.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, run_away: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','resurrect_ability','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, undead: 1, resurrect: 1},
		},
		quote: '\"I am lost. Forever!\"',
	},
	lucia:{
		name: 				'Lucia',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['purple'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T081701.963.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			20,
		abilities: 			{strike: 1, summon_golem: 1, repair: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, repair: 2},
		},
		quote: '\"Do you like my golems?\"',
		unique: true,
	},
	magic_brew:{
		name: 				'magic brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160153.742.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hasten: 1, echo: 1},
		quote: '\"That will get you up in the morning!\"',
	},
	magpie:{
		name: 				'magpie',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T082818.528.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, steal: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"It loves shinies.\"',
	},
	mana_bulb:{
		name: 				'mana bulb',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T145722.938.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{final_hasten: 5, fragile: 1},
		quote: '\"Break in case of need.\"',
		selfdestructs: true,
	},
	mana_cat:{
		name: 				'mana cat',
		type: 				'creature',
		subtypes: 			['animal','cat'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T061725.000.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, spellpower: 1, spellrush: 1},
		hero_version: 			{
			theme: 				['subtype_animal','type_spell','type_draw_card_ability','type_damage_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spellpower: 1, spellrush: 1},
		},
		quote: '\"A companion often chosen by mages.\"',
	},
	mana_drop:{
		name: 				'mana drop',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T162748.405.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{final_draw: 1, final_hasten: 2, fragile: 1},
		quote: '\"Small, but handy in an emergency.\"',
		selfdestructs: true,
	},
	mana_mage:{
		name: 				'mana mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		not_theme: 			['subtype_mage','arcane_bolts_ability'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T084628.381.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{spell_bolt: 1, spellrush: 1},
		hero_version: 			{
			theme: 				['type_spell','subtype_human','type_draw_card_ability','type_damage_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spell_bolt_hv: 1, spellrush: 1},
		},
		quote: '\"She conducts the mana.\"',
	},
	mana_rogue:{
		name: 				'mana rogue',
		type: 				'creature',
		subtypes: 			['human','rogue','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		not_theme: 			['subtype_mage','arcane_bolts_ability'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T092443.394.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, spell_bolt: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','type_spell','type_draw_card_ability','type_damage_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spell_bolt_hv: 1, evade: 1},
		},
		quote: '\"I have a little trick. Wanna see it?\"',
	},
	mana_slinger:{
		name: 				'mana slinger',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		not_theme: 			['subtype_mage','arcane_bolts_ability'],
		craft_theme: 		['arcane_bolts','type_spell','type_spell','type_spell','echo'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T093033.982.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{spell_bolt: 1},
		hero_version: 			{
			theme: 				['type_spell','subtype_human','type_draw_card_ability','type_damage_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spell_bolt_hv: 2},
		},
		quote: '\"She remains calm, until a spell is cast.\"',
	},
	mandrake_witch:{
		name: 				'mandrake witch',
		type: 				'creature',
		subtypes: 			['human','witch','plant'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mandrake_witch.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, nurture: 1},
		hero_version: 			{
			theme: 				['curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, nurture: 2},
		},
		quote: '\"The goddesses bled our sons and lovers for their Great War, and when there was nothing left, they looked to us.\"<br/><br/>Credit: Pyrothecat',
	},
	marten:{
		name: 				'marten',
		type: 				'creature',
		subtypes: 			['animal','marten'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T081520.730.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 4, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal','feast_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, evade: 1},
		},
		quote: '\"It will eat any small animal.\"',
	},
	massacre:{
		name: 				'massacre',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-13T060844.597.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_unit: 5, destroy: 5, minimum_enemies: 3},
		quote: '\"Kill them! Kill them all!\"',
	},
	mason:{
		name: 				'mason',
		type: 				'creature',
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['type_structure'],
		not_theme: 			['type_creature','subtype_human'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T162223.675.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bolster_structure: 1},
		hero_version: 			{
			theme: 				['type_structure','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bolster_structure: 2},
		},
		quote: '\"Nothing can\'t be be improved with a higher wall.\"',
	},
	master_alchemist:{
		name: 				'master alchemist',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_mage'],
		craft_theme: 		['poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T164535.606.jpg',
		power: 				2,
		armor: 				0,
		health: 			7,
		abilities: 			{strike: 1, poison: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, poison_hv: 2, empower_ally: 1},
		},
		quote: '\"A potion for every occasion.\"',
	},
	master_arsonist:{
		name: 				'master arsonist',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-10T061215.079.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{burn: 4},
		hero_version: 			{
			theme: 				['burn_ability','burn_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{burn_hv: 3},
		},
		quote: '\"It\'s an artform.\"',
	},
	master_channeler:{
		name: 				'master channeler',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T074743.128.jpg',
		image_position: 	'left',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, channel_life: 2},
		hero_version: 			{
			theme: 				['subtype_clerk','deck_control','heal_hero_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, channel_life: 2},
		},
		quote: '\"She will give her life to call all her allies.\"',
	},
	meat_battery:{
		name: 				'meat battery',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['resurrect_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T163132.394.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{energising_deaths: 1, energised_haste: 1},
		quote: '\"Use the bodies, you say?\"',
	},
	mechanical_bird:{
		name: 				'mechanical bird',
		type: 				'structure',
		subtypes: 			['golem','animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T072155.845.jpg',
		image_position: 	'top left',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','subtype_golem'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A good imitation.\"',
	},
	mechanical_griffin:{
		name: 				'mechanical griffin',
		type: 				'structure',
		subtypes: 			['golem','animal','bird','lion'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T071156.997.jpg',
		image_position: 	'left',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','subtype_golem'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A mythical imitation.\"',
	},
	medic:{
		name: 				'medic',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard44.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, first_aid: 1},
		hero_version: 			{
			theme: 				['active_healing_ability','fortify_ability','healing_ability','type_creature','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, first_aid: 1},
		},
		quote: '\"Let me help you.\"',
	},
	medical_droid:{
		name: 				'medical droid',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem','type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T072405.714.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, first_aid: 1},
		hero_version: 			{
			theme: 				['active_healing_ability','fortify_ability','healing_ability','type_creature','type_creature'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, first_aid: 1},
		},
		quote: '\"Lucia really cared.\"',
	},
	meditation:{
		name: 				'meditation',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T160815.088.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{restore: 5},
		quote: '\"Take some time to heal yourself.\"',
	},
	medkit:{
		name: 				'medkit',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard95.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{first_aid: 1},
		quote: '\"I never said it woudn\'t hurt.\"',
	},
	mercenary:{
		name: 				'mercenary',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard66.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, homebound: 1},
		hero_version: 			{
			theme: 				['move_ally_to_hand_ability','evade_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"You paid us for the battle, not the war.\"',
	},
	merchild:{
		name: 				'merchild',
		type: 				'creature',
		subtypes: 			['mermaid','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T055033.660.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_mermaid','submerge_ability','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, submerged: 1},
		},
		quote: '\"They start out so cute!\"',
	},
	mermaid:{
		name: 				'mermaid',
		type: 				'creature',
		subtypes: 			['mermaid','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T054544.172.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_mermaid','submerge_ability','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, submerged: 1},
		},
		quote: '\"I saw one once!\"',
	},
	mermaid_archer:{
		name: 				'mermaid archer',
		type: 				'creature',
		subtypes: 			['mermaid','aquatic','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T062338.390.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{shoot: 1, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_mermaid','submerge_ability','evade_ability','projectile_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, submerged: 1},
		},
		quote: '\"Where did that come from?!\"',
	},
	mermaid_witch:{
		name: 				'mermaid witch',
		type: 				'creature',
		subtypes: 			['mermaid','aquatic','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T060459.909.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{curse: 1, strike: 1, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_mermaid','submerge_ability','evade_ability','curse_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, submerged: 1},
		},
		quote: '\"Pretty in a dark way.\"',
	},
	messenger:{
		name: 				'messenger',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T170331.457.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, draw: 1, homebound: 1},
		hero_version: 			{
			theme: 				['subtype_human','draw_cards_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1, evade: 1},
		},
		quote: '\"I bring news!\"',
	},
	metamorphosis:{
		name: 				'metamorphosis',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T060621.921.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{morph_ally: 1},
		quote: '\"It turned into what?!\"',
		max_in_deck: 		1,
	},
	mischievous_imp:{
		name: 				'mischievous imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T150048.784.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{burning_entry: 2, flame_strike: 1, run_away: 1},
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, burn_hv: 1, evade: 1},
		},
		quote: '\"Me bring fire and run away! hihi!\"',
	},
	mole:{
		name: 				'mole',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T092830.803.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{run_away: 1, strike: 1, hide: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1},
		},
		quote: '\"A wall? Send in the moles.\"',
	},
	moss_giant:{
		name: 				'moss giant',
		type: 				'creature',
		subtypes: 			['giant'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T071922.324.jpg',
		image_position: 	'right',
		potential_power: 	2.5,
		power: 				0,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, awaken: 5},
		hero_version: 			{
			theme: 				['enrage_ability','subtype_giant','heal_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1},
		},
		quote: '\"Once you wake them up, run!\"',
	},
	mighty_zealot:{
		name: 				'mighty zealot',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T144328.975.jpg',
		power: 				4,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, striking_entry: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2},
		},
		quote: '\"I will find something to hit!\"',
	},
	mind_bolt:{
		name: 				'mind bolt',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T074817.596.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{damage_hero: 2, discard_enemy: 1},
		quote: '\"It hurts, doesn\'t it?\"',
	},
	mind_clamp:{
		name: 				'mind clamp',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T065517.658.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard_enemy_down: 8},
		quote: '\"Do you feel the pressure?\"',
		max_in_deck: 1,
	},
	mind_leak:{
		name: 				'mind leak',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T074550.534.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard_enemy: 1, draw_on_act: 1},
		quote: '\"I like your way of thinking!\"',
	},
	mind_shard:{
		name: 				'mind shard',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				['discard_enemy_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T071316.766.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{painful_empty_hand: 3},
		quote: '\"Out of thoughts?\"',
	},
	mind_spike:{
		name: 				'mind spike',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-24T161059.011.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard_enemy: 1},
		quote: '\"It stings, doesn\'t it?\"',
	},
	mind_storm:{
		name: 				'mind storm',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T070720.007.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{discard: 2, fire_blast: 5, damage_hero: 5, minimum_enemies: 3, min_hand_cards: 2},
		quote: '\"What is a bit of insanity worth to you?\"',
	},
	monstrous_crab:{
		name: 				'monstrous crab',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T080557.457.jpg',
		power: 				7,
		armor: 				0,
		health: 			14,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"You want us to crack that?!\"',
	},
	mothers_love:{
		name: 				'mother\'s love',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/mothers_love.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{nurture: 3, echo: 1},
		quote: '\"She will love you. Always.\"',
		max_in_deck: 		1,
	},
	mud_crab:{
		name: 				'mud crab',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless','aquatic'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/mud_crab.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{guard: 1, strike: 1},
		quote: '\"The crabs grew fat on the carrion of the Great War. Now, they scuttle forth, hungry for the spoils of a second.\"<br/><br/>Credit: Pyrothecat',
	},
	nightly_harvest:{
		name: 				'nightly harvest',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/nightly_harvest.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reap: 1, echo: 1},
		quote: '\"Reap the nightmare.\"',
		max_in_deck: 		2,
	},
	nightmare:{
		name: 				'nightmare',
		type: 				'creature',
		subtypes: 			['animal','horse','horror'],
		color: 				['colorless'],
		theme: 				['draw_cards_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T062827.274.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{charge: 1, strike: 1, discard_enemy: 1},
		hero_version: 			{
			theme: 				['subtype_animal','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, discard_enemy: 1},
		},
		quote: '\"It haunts my dreams.\"',
	},
	nightmare_hound:{
		name: 				'nightmare hound',
		type: 				'creature',
		subtypes: 			['animal','canine','horror'],
		color: 				['colorless'],
		theme: 				['draw_cards_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T061447.937.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, discard_enemy: 1},
		hero_version: 			{
			theme: 				['subtype_animal','draw_cards_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, discard_enemy: 1},
		},
		quote: '\"The howl is directed at its master.\"',
	},
	noxious_rogue:{
		name: 				'noxious rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T070411.781.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, poison_aura: 1, evade: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, poison_aura: 1, evade: 1},
		},
		quote: '\"Come closer!\"',
	},
	novice_monk:{
		name: 				'novice monk',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		pick_chance: 		1,
		time: 				7,
		image: 				'cards/novice_monk.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, purify_self: 1},
		hero_version: 			{
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify_self: 1},
		},
		quote: '\"Even though she is young, she cannot be corrupted.\"',
	},
	nun:{
		name: 				'nun',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/nun.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bless: 2},
		hero_version: 			{
			theme: 				['bless_ability','subtype_cleric','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"I have devoted myself to a higher purpose.\"',
	},
	observer:{
		name: 				'observer',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T083003.302.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1, stealth: 1},
		hero_version: 			{
			theme: 				['subtype_golem','evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, hide_hv: 1},
		},
		quote: '\"I feel like we are being watched...\"',
	},
	octopus:{
		name: 				'octopus',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T065057.851.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, stunning_touch: 1, submerged: 1},
		hero_version: 			{
			theme: 				['stun_ability','subtype_animal','subtype_aquatic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stunning_touch: 1, submerged: 1},
		},
		quote: '\"It can hold on tight.\"',
	},
	oracle:{
		name: 				'oracle',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T064720.838.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{doom_all: 2},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{doom_all: 2},
		},
		quote: '\"She sees it all.\"',
	},
	orange_dragon:{
		name: 				'orange dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T065630.552.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, empower_all: 1, flying: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, empower_ally: 1, flying: 1},
		},
		quote: '\"True power.\"',
	},
	orange_whelp:{
		name: 				'orange whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T063538.052.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1, flying: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, empower_ally: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	orb_of_fog:{
		name: 				'orb of fog',
		type: 				'artifact',
		subtypes: 			['orb','weather'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_gnome'],
		craft_theme: 		['evade_ability','stealth_ability','healing_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T141415.600.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_ally: 1},
		quote: '\"We will hide our forces until the time is right.\"',
	},
	orb_of_light:{
		name: 				'orb of light',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_cleric'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T063203.957.jpg',
		image_position: 	'left',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{heal: 1},
		quote: '\"Some live hundreds of years holding that.\"',
	},
	orb_of_power:{
		name: 				'orb of power',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		not_theme: 			['type_structure','subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T075628.948.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_ally: 1},
		quote: '\"Can you feel the power?\"',
	},
	orb_of_wind:{
		name: 				'orb of wind',
		type: 				'artifact',
		subtypes: 			['orb','weather'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T162201.512.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{air_bolt_hv: 1},
		quote: '\"The sky is not very calm today.\"',
	},
	owl:{
		name: 				'owl',
		type: 				'creature',
		subtypes: 			['animal','bird','owl'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T152745.886.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A bird of prey.\"',
	},
	owl_blade:{
		name: 				'owl blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		not_theme: 			['subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160803.802.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, draw: 1},
		quote: '\"A scholar\'s weapon.\"',
	},
	painful_knowledge:{
		name: 				'painful knowledge',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T063125.159.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{painful_hand: 1},
		quote: '\"Do you really want to know?!\"',
	},
	palisade:{
		name: 				'palisade',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-17T061047.430.jpg',
		power: 				false,
		armor: 				0,
		health: 			3,
		abilities: 			{},
		quote: '\"It ain\'t much, but it will have to do.\"',
	},
	paperwork:{
		name: 				'paperwork',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T071134.736.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{slow: 1, echo: 1},
		quote: '\"Does it never end?!\"',
	},
	peasant:{
		name: 				'peasant',
		type: 				'creature',
		//basic_reward: 		true,
		subtypes: 			['human','laborer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		value: 				1,
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard25.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They do not want to fight, but will defend their home.\"',
	},
	pegasus:{
		name: 				'pegasus',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T160023.823.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A steed for gods.\"',
	},
	phoenix:{
		name: 				'phoenix',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T084728.773.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, resurrect: 1},
			verified: 			true,
		},
		quote: '\"They burn into a new life.\"',
	},
	pickpocket:{
		name: 				'pickpocket',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T142950.573.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1, hide: 1},
		hero_version: 			{
			theme: 				['stealth_ability','evade_ability','steal_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1, evade: 1},
		},
		quote: '\"He did not notice... Good.\"',
	},
	pigeon:{
		name: 				'pigeon',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard40.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, homebound: 1},
		hero_version: 			{
			theme: 				['subtype_animal','flying_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"I keep selling them. Somehow I never run out.\"',
	},
	pilfer:{
		name: 				'pilfer',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['subtype_rogue'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/pilfer.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{pilfer: 1},
		quote: '\"I\'ll take that!\"',
	},
	piranhas:{
		name: 				'piranhas',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-01T070250.664.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 3, feast: 3, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_animal','submerge_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, feast: 1, submerged: 1},
		},
		quote: '\"Get out of the water!\"',
	},
	pirate:{
		name: 				'pirate',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard67.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I\'ll keep that for myself.\"',
	},
	pirate_aspirant:{
		name: 				'pirate aspirant',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T071810.211.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"It all just seems so glamorous.\"',
	},
	pirate_captain:{
		name: 				'pirate captain',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T081329.833.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, plunder: 1, empower_arrivals: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_arrivals: 1},
		},
		quote: '\"Come and get the loot!\"',
	},
	pirate_mercenary:{
		name: 				'pirate mercenary',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T080808.464.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1, homebound: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Get in, do the job, get the loot, get out.\"',
	},
	pirate_dead_shot:{
		name: 				'pirate dead shot',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T074411.178.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{snipe: 1, plunder: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1},
		},
		quote: '\"Take out the defences, get the loot.\"',
	},
	pirate_pistoleer:{
		name: 				'pirate pistoleer',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T073029.869.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1, shooting_entry: 2},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, shoot_unit: 1},
		},
		quote: '\"If only those pistols reloaded faster.\"',
	},
	pirate_runner:{
		name: 				'pirate runner',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T080329.140.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1, run_away: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Get around them to get the loot.\"',
	},
	pirate_scout:{
		name: 				'pirate scout',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['pirate'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-25T075623.577.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plunder: 1, stealth: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1},
		},
		quote: '\"Get the loot before they see you.\"',
	},
	pirate_ship:{
		name: 				'pirate ship',
		type: 				'structure',
		subtypes: 			['ship','aquatic','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['break_ability','break_ability','subtype_rogue','subtype_rogue'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T063801.407.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, plunder: 1},
		hero_version: 			{
			theme: 				['subtype_pirate','subtype_ship','break_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Take from the seas!\"',
	},
	plated_fungus:{
		name: 				'plated fungus',
		type: 				'creature',
		subtypes: 			['fungus','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T073354.926.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plated: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1, spawn_sporeling: 1},
		},
		quote: '\"Hardened mould.\"',
	},
	plated_guard:{
		name: 				'plated guard',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T155731.808.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, guard: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Loyal and faceless.\"',
	},
	poacher:{
		name: 				'poacher',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T163327.361.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_creature: 1, strike: 1, feast: 3},
		hero_version: 			{
			theme: 				['subtype_rogue','feast_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1},
		},
		quote: '\"She hunts for food.\"',
	},
	poison_orb:{
		name: 				'poison orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard71.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_hv: 1},
		quote: '\"Made from lizardman blood.\"',
	},
	poison_thrower:{
		name: 				'poison thrower',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T070005.741.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, venom: 2, evade: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, venom: 3, evade: 1},
		},
		quote: '\"Catch!\"',
	},
	politician:{
		name: 				'politician',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T063801.669.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, doom: 5, doom_self: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_human','subtype_wall'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, doom_all: 1},
		},
		quote: '\"Give them time...\"',
	},
	porcupine:{
		name: 				'porcupine',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-01T070546.550.jpg',
		image_position: 	'left',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, thorns: 2},
		hero_version: 			{
			theme: 				['thorns_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, thorns: 1},
		},
		quote: '\"Not very cute, but prickly.\"',
	},
	postulant:{
		name: 				'postulant',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/postulant.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, bless: 1},
		hero_version: 			{
			theme: 				['bless_ability','subtype_cleric','draw_cards_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, bless: 2},
		},
		quote: '\"She will serve the faith.\"',
		verified: true,
	},
	pouncing_tiger:{
		name: 				'pouncing tiger',
		type: 				'creature',
		subtypes: 			['animal','cat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-06T154135.450.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, striking_entry: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1},
		},
		quote: '\"Look out for the kitty!\"',
	},
	power_drain:{
		name: 				'power drain',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T152511.045.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{debilitate_all: 2, minimum_enemy_creatures: 3},
		quote: '\"They all just... gave up!\"',
	},
	power_golem:{
		name: 				'power golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T065849.075.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, empower_ally: 1},
		hero_version: 			{
			theme: 				['type_creature','empower_any_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"Pitty it can\'t power itself.\"',
	},
	power_jolt:{
		name: 				'power jolt',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T064544.543.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{jolt: 4, echo: 1},
		quote: '\"This will sting a little.\"',
	},
	power_mage:{
		name: 				'power mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_mage','type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T075113.830.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{arcane_bolt: 1, empower_ally: 3},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt: 1, empower_ally: 2},
		},
		quote: '\"I can feel the power!\"',
	},
	power_tap:{
		name: 				'power tap',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T151526.280.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{debilitate: 1, echo: 1},
		quote: '\"Just give up!\"',
	},
	prime_archer:{
		name: 				'prime archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052952.404.jpg',
		power: 				3,
		armor: 				0,
		health: 			7,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"She has seen a lot.\"',
	},
	pure_mage:{
		name: 				'pure mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T142502.221.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{arcane_bolt: 1, purify: 1},
		hero_version: 			{
			theme: 				['subtype_mage','curse_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, purify: 1},
		},
		quote: '\"Uncorruptable.\"',
	},
	pure_spirit:{
		name: 				'pure spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T072751.847.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, purifying_deaths: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['cleanse_ally_ability','resurrect_ability','ally_creature_death_proc_ability','own_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purifying_deaths: 1, resurrect: 1, undead: 1},
		},
		quote: '\"I will remain pure. Forever!\"',
	},
	pure_urn:{
		name: 				'pure urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T074507.220.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{purifying_deaths: 1},
		quote: '\"Holds pure spirits.\"',
	},
	purple_dragon:{
		name: 				'purple dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T065817.301.jpg',
		image_position: 	'top left',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{curse_all: 2, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{curse_hv: 2, strike_unit: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	purple_whelp:{
		name: 				'purple whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T063110.115.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 3, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{curse_hv: 2, strike_unit: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	pygmy_troll:{
		name: 				'pygmy troll',
		type: 				'creature',
		subtypes: 			['troll'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard80.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, regenerate: 1},
		hero_version: 			{
			theme: 				['subtype_troll','subtype_warrior','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, regenerate: 1},
		},
		quote: '\"I do little smash!\"',
	},
	rage_warrior:{
		name: 				'rage warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T065611.307.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, enrage: 1, plated: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior','plated_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 1, plated: 1},
		},
		quote: '\"You... attack me?!\"',
	},
	raging_spirit:{
		name: 				'raging spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard74.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, raging_deaths: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, raging_deaths: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Leave us be!\"',
	},
	raider:{
		name: 				'raider',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-26T061849.195.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, plunder: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"We will take it by force!\"',
	},
	rain_witch:{
		name: 				'rain witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T082049.756.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{curse_all: 1, purify: 1, water_bolt: 1},
		hero_version: 			{
			theme: 				['curse_ability','projectile_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, purify: 1, water_bolt_hv: 1},
		},
		quote: '\"The rain can be a curse or a blessing.\"',
	},
	raise_dead:{
		name: 				'raise dead',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['resurrect_ability'],
		not_theme: 			['type_structure'],
		craft_theme: 		['resurrect_ability','resurrect_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-01T080123.172.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reclaim_creature: 3, minimum_dead_ally_creatures: 3},
		quote: '\"Rise!\"',
	},
	rallying_banner:{
		name: 				'rallying banner',
		type: 				'artifact',
		subtypes: 			['flag'],
		color: 				['colorless'],
		theme: 				['summon_creature_ability','move_ally_to_hand_ability'],
		not_theme: 			['type_structure'],
		craft_theme: 		['empower','move_ally_to_hand'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T075207.566.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_arrivals: 1},
		quote: '\"Come and fight!\"',
	},
	rallying_charge:{
		name: 				'rallying charge',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T160718.334.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ally_charges: 1, also_empower_all: 5, minimum_ally_creatures: 3},
		quote: '\"Follow that one!\"',
		max_in_deck: 1,
	},
	reapers_insight:{
		name: 				'reaper\'s insight',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160701.212.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_living_creature: 1, draw_on_act: 3, max_hand_cards: 7},
		quote: '\"We can learn from this.\"',
		max_in_deck: 		2,
	},
	recaller:{
		name: 				'recaller',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_skeleton'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T165035.017.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{unsummon_ally: 1, strike: 1},
		hero_version: 			{
			theme: 				['on_play_proc_ability','subtype_mage'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, unsummon_ally: 1},
		},
		quote: '\"Be safe, my friend.\"',
	},
	recruit:{
		name: 				'recruit',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard52.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"They told me to put on the armor and report here.\"',
	},
	recruiter:{
		name: 				'recruiter',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/aa1e0710-a2b6-4b09-821b-9407c375fdfc.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, summon_conscript: 1},
		hero_version: 			{
			theme: 				['summon_creature_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1},
		},
		quote: '\"Come join us. It\'ll be fine.\"',
	},
	recruitment_angel:{
		name: 				'recruitment angel',
		type: 				'creature',
		subtypes: 			['angel'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/recruitment_angel.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{bring_conscript: 1, strike: 1, flying: 1},
		hero_version: 			{
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1, flying: 1},
		},
		quote: '\"Rejoice, mortal. Your sons have served the Great War in death. Now, your daughters shall do the same.\"<br/><br/>Credit: Pyrothecat',
	},
	red_dragon:{
		name: 				'red dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T070058.104.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, burn_all: 2, flying: 1},
		hero_version: 			{
			theme: 				['burn_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, burn_hv: 1, flying: 1},
		},
		quote: '\"True burning power.\"',
	},
	red_whelp:{
		name: 				'red whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T062717.229.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, burn: 3, flying: 1},
		hero_version: 			{
			theme: 				['burn_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, burn_hv: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	reindeer:{
		name: 				'reindeer',
		type: 				'creature',
		subtypes: 			['animal','deer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T071326.510.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{charge: 1, strike: 1, resist_cold: 1},
		hero_version: 			{
			theme: 				['charge_ability','subtype_animal','subtype_deer'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_cold: 1},
		},
		quote: '\"They live in a cold place.\"',
	},
	research:{
		name: 				'research',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				['subtype_clerk'],
		craft_theme: 		['subtype_clerk'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard54.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{draw: 2},
		quote: '\"Let us study.\"',
	},
	rhinoceros:{
		name: 				'rhinoceros',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T160935.968.jpg',
		power: 				3,
		armor: 				0,
		health: 			8,
		abilities: 			{charge: 1, strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_animal','plated_ability','charge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Do not anger it!\"',
	},
	righteous_lady:{
		name: 				'righteous lady',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T141234.198.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, purify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"She comes to bring the light!\"',
	},
	righteous_warrior:{
		name: 				'righteous warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T140941.901.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, purify: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"We do not fear the dark!\"',
	},
	rock_golem:{
		name: 				'rock golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard76.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_golem','type_structure'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Made from stone.\"',
	},
	rogue:{
		name: 				'rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard28.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Catch me, if you can.\"',
	},
	rogue_archer:{
		name: 				'rogue archer',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052713.725.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, evade: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, evade: 1},
		},
		quote: '\"I never said it would be a fair fight.\"',
	},
	rogue_champion:{
		name: 				'rogue champion',
		type: 				'creature',
		subtypes: 			['human','warrior','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T142814.186.jpg',
		power: 				3,
		armor: 				0,
		health: 			10,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"We will endure, but not for you.\"',
	},
	rogue_elf:{
		name: 				'rogue elf',
		type: 				'creature',
		subtypes: 			['elf','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rogue_elf.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, resist_magic: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_elf','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resist_magic: 1, evade: 1},
		},
		quote: '\"Not all elves play by the rules.\"',
	},
	rogue_fire_mage:{
		name: 				'rogue fire mage',
		type: 				'creature',
		subtypes: 			['human','rogue','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard30.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fire_bolt: 1, evade: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fire_bolt_hv: 1, evade: 1},
		},
		quote: '\"Blades and fire.\"',
	},
	rogue_light_bringer:{
		name: 				'rogue light bringer',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T142808.807.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1, purifying_entry: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, purify: 1},
		},
		quote: '\"I hope it blinds you.\"',
	},
	rogue_sniper:{
		name: 				'rogue sniper',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052940.925.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{snipe: 1, evade: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, evade: 1},
		},
		quote: '\"She takes the job. She does the job.\"',
	},
	rogue_soldier:{
		name: 				'rogue soldier',
		type: 				'creature',
		subtypes: 			['human','warrior','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160500.494.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior','evade_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, plated: 1},
		},
		quote: '\"She\'s not in the army anymore.\"',
	},
	royal_soldier:{
		name: 				'royal soldier',
		type: 				'creature',
		subtypes: 			['human','warrior','royal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/royal_soldier.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, restore: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, restore: 1, plated: 1},
		},
		quote: '\"They serve the queen.\"',
	},
	ruffian:{
		name: 				'ruffian',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard27.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Do you want a knuckle sandwich?.\"',
	},
	rune_of_arrows:{
		name: 				'rune of arrows',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T074804.807.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{shoot_arrivals: 1},
		quote: '\"An arrow in written form.\"',
	},
	rune_of_blessings:{
		name: 				'rune of blessings',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T075743.677.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bless_arrivals: 1},
		quote: '\"A blessing in written form.\"',
	},
	rune_of_curses:{
		name: 				'rune of curses',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T081635.566.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_arrivals: 1},
		quote: '\"A curse in written form.\"',
	},
	rune_of_endurance:{
		name: 				'rune of endurance',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T081046.283.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolster_arrivals: 1},
		quote: '\"Toughness in written form.\"',
	},
	rune_of_fate:{
		name: 				'rune of fate',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T081851.117.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{doom_arrivals: 1},
		quote: '\"Someone\'s fate in written form.\"',
	},
	rune_of_fire:{
		name: 				'rune of fire',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T081258.958.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{burn_arrivals: 1},
		quote: '\"Fire in written form.\"',
	},
	rune_of_life:{
		name: 				'rune of life',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T080715.282.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolstering_arrivals: 1},
		quote: '\"Life in written form.\"',
	},
	rune_of_light:{
		name: 				'rune of light',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T074027.199.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{restoring_arrivals: 1},
		quote: '\"Light in written form.\"',
	},
	rune_of_poison:{
		name: 				'rune of poison',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T082755.337.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_arrivals: 1},
		quote: '\"Poison in written form.\"',
	},
	rune_of_protection:{
		name: 				'rune of protection',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T082432.649.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_arrivals: 1},
		quote: '\"Protection in written form.\"',
	},
	rune_of_wings:{
		name: 				'rune of wings',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				['evade_ability'],
		not_theme: 			['flying_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T082131.624.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{flying_arrivals: 1},
		quote: '\"Flight in written form.\"',
	},
	runic_blade:{
		name: 				'runic blade',
		type: 				'artifact',
		subtypes: 			['weapon','rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T075036.013.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{strike_arrivals: 1},
		quote: '\"An ancient weapon inscribed with runes.\"',
	},
	rusty_blade:{
		name: 				'rusty blade',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rusty_blade.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 1, venomous_hero: 1, fragile: 1},
		quote: '\"Many weapons were left on the battlefield after the Great War. Some can still be wielded, even more deadly now they are covered in grime.\"',
	},
	rusty_shield:{
		name: 				'rusty shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/rusty_shield.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 4, fragile: 1},
		quote: '\"My brother gave his life in the Great War. This shield is all I have left - but when I hold it, it\'s like he\'s still protecting me.\"<br/><br/>Credit: Pyrothecat',
	},
	saboteur:{
		name: 				'saboteur',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-29T161341.453.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_structure: 1, strike: 1, demolish: 1},
		hero_version: 			{
			theme: 				['break_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, demolish: 1},
		},
		quote: '\"Just get me there.\"',
	},
	sacrificial_dagger:{
		name: 				'sacrificial dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-19T094008.533.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{cursed_deaths: 1, restoring_deaths: 1},
		quote: '\"Keep the lambs coming...\"',
	},
	sailing_ship:{
		name: 				'sailing ship',
		type: 				'structure',
		subtypes: 			['ship','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T063440.742.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_ship','type_structure'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Take to the seas!\"',
	},
	sandstorm:{
		name: 				'sandstorm',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-16T062731.782.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{earth_blast: 1, long_echo: 1},
		quote: '\"Those can last for days...\"',
	},
	sapling:{
		name: 				'sapling',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-19T100401.579.jpg',
		power: 				0,
		armor: 				0,
		health: 			1,
		abilities: 			{grow: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_plant','regeneration_ability','buff_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, regenerate: 1},
		},
		quote: '\"Given enough time, the plants try to kill you!\"',
	},
	scared_witch:{
		name: 				'scared witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T081606.701.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, cursed_aura: 1, retreat: 1},
		hero_version: 			{
			theme: 				['subtype_witch','curse_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_aura: 2},
		},
		quote: '\"You would not hurt me just because of a little curse, would you?\"',
	},
	scavanger:{
		name: 				'scavanger',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				['type_artifact','subtype_golem','type_structure','summon_structure_ability'],
		craft_theme: 		['type_artifact','type_structure'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard79.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, scavange: 1},
		hero_version: 			{
			theme: 				['type_artifact','subtype_golem','type_structure','break_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, scavange: 1},
		},
		quote: '\"One man\'s junk...\"',
	},
	scout:{
		name: 				'scout',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-03-02T112159.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, stealth: 1},
		hero_version: 			{
			theme: 				['evade_ability','stealth_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1},
		},
		quote: '\"Watch them. Do not engage.\"',
	},
	sea_giant:{
		name: 				'sea giant',
		type: 				'creature',
		subtypes: 			['giant','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T072554.244.jpg',
		power: 				5,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, water_bolt: 2, submerged: 1},
		hero_version: 			{
			theme: 				['subtype_giant','subtype_aquatic','subtype_giant','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, water_bolt_hv: 1, submerged: 1},
		},
		quote: '\"Watery rage.\"',
	},
	searing_orb:{
		name: 				'searing orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				['burn_ability'],
		not_theme: 			['fire_ability'],
		craft_theme: 		['burn','burn'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T070915.580.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{conflagrate_hv: 1},
		quote: '\"Feel the burn!\"',
	},
	seeker_golem:{
		name: 				'seeker golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['empower_any_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T074051.911.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{charge: 1, strike: 1, explode: 5},
		hero_version: 			{
			theme: 				['subtype_warrior','empower_any_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fire_aura: 1},
		},
		quote: '\"Deadly contraption.\"',
	},
	seeking_spirit:{
		name: 				'seeking spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T084547.597.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{seek_enemy: 1, strike: 1, resurrect: 1, undead: 1},
		hero_version: 			{
			theme: 				['subtype_undead','movement_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 1, undead: 1},
		},
		quote: '\"It looks for souls to devour.\"',
	},
	seer:{
		name: 				'seer',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T063455.662.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, doom: 2},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, doom: 1},
		},
		quote: '\"She has the sight.\"',
	},
	shadow_mage:{
		name: 				'shadow mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['grant_stealth','grant_stealth','grant_stealth','subtype_weather'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T193159.504.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{hide_ally: 1, fire_bolt: 2},
		hero_version: 			{
			theme: 				['on_play_proc_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{hide_ally: 1, fire_bolt_hv: 1},
		},
		quote: '\"Our magic will hide us.\"',
	},
	shatterer:{
		name: 				'shatterer',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_artifact'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-18T064636.297.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, break: 1},
		hero_version: 			{
			theme: 				['subtype_mage','break_ability'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike: 1, break: 1},
		},
		quote: '\"So fragile.\"',
		max_in_deck: 		2,
	},
	shield:{
		name: 				'shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-14T061708.044.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1},
		quote: '\"Basic protection.\"',
	},
	shield_maiden:{
		name: 				'shield maiden',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T063923.429.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify_self: 2},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 2},
		},
		quote: '\"My shield protects me!\"',
	},
	shield_page:{
		name: 				'shield page',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T063242.994.jpg',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, fortify_self: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 2},
		},
		quote: '\"This shield is heavy!\"',
	},
	shield_warrior:{
		name: 				'shield warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T064631.046.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, fortify_self: 2},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_human','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify_self: 2},
		},
		quote: '\"Come at me!\"',
	},
	shielding_spell:{
		name: 				'shielding spell',
		type: 				'spell',
		subtypes: 			['arcane'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['fortify_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T073048.518.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify: 3, echo: 1},
		quote: '\"Usefull, when needed.\"',
	},
	shielding_spirit:{
		name: 				'shielding spirit',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T070826.329.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, fortify: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, fortify: 1, undead: 1, resurrect: 1},
		},
		quote: '\"I will protect you. Forever!\"',
	},
	shooting_witch:{
		name: 				'shooting witch',
		type: 				'creature',
		subtypes: 			['human','witch','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053637.208.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, shoot: 1},
		hero_version: 			{
			theme: 				['curse_ability','projectile_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, shoot_unit: 1},
		},
		quote: '\"I have marked you, now let me hit you!\"',
	},
	sight_mage:{
		name: 				'sight mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T063730.385.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{arcane_bolt: 2, dooming_touch: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_cleric','subtype_human'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, dooming_touch: 1},
		},
		quote: '\"She sees your death.\"',
	},
	signaler:{
		name: 				'signaler',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T161659.635.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, hasten: 1},
		hero_version: 			{
			theme: 				['subtype_human','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hasten: 1},
		},
		quote: '\"Over here!\"',
	},
	skeletal_apprentice:{
		name: 				'skeletal apprentice',
		type: 				'creature',
		subtypes: 			['undead','skeleton','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T071555.080.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{fire_bolt: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability','fire_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fire_bolt_hv: 2, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Joey?\"',
	},
	skeletal_archer:{
		name: 				'skeletal archer',
		type: 				'creature',
		subtypes: 			['undead','skeleton','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T054110.851.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{shoot: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability','fire_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Fred?\"',
	},
	skeletal_bull:{
		name: 				'skeletal bull',
		type: 				'creature',
		subtypes: 			['undead','skeleton','animal','cow'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal','subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T074933.617.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{charge: 1, strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_animal','charge_ability','ally_creature_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Do you remember the good old days when you just had to put away the flag?\"',
	},
	skeletal_dragon:{
		name: 				'skeletal dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon','undead'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T064240.900.jpg',
		image_position: 	'top left',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, flying: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_dragon','resurrect_ability'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, flying: 1, undead: 1, resurrect: 1},
		},
		quote: '\"True skeletal power.\"',
	},
	skeletal_guard:{
		name: 				'skeletal guard',
		type: 				'creature',
		subtypes: 			['undead','skeleton','warrior'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T075715.754.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, resurrect: 1, undead: 1, guard: 1},
		hero_version: 			{
			theme: 				['subtype_skeleton','resurrect_ability','guard_ability'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, resurrect: 1, undead: 1},
		},
		quote: '\"Didn\'t that used to be Gregory?\"',
	},
	skeletal_knight:{
		name: 				'skeletal knight',
		type: 				'creature',
		subtypes: 			['undead','skeleton','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard57.jpg',
		power: 				4,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, plated: 1},
		},
		quote: '\"Didn\'t that used to be Timmy?\"',
	},
	skeletal_mage:{
		name: 				'skeletal mage',
		type: 				'creature',
		subtypes: 			['undead','skeleton','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T071250.823.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{arcane_bolt: 2, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 2, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Leanord?\"',
	},
	skeletal_march:{
		name: 				'skeletal march',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['aoe','subtype_skeleton','subtype_undead'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T080520.756.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{raise_skeleton: 5, maximum_allies: 0, minimum_dead_ally_creatures: 5},
		quote: '\"Bones... bones everywhere.\"',
		max_in_deck: 		1,
	},
	skeletal_pirate:{
		name: 				'skeletal pirate',
		type: 				'creature',
		subtypes: 			['undead','skeleton','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-26T061012.462.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, plunder: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Jack?\"',
	},
	skeletal_rogue:{
		name: 				'skeletal rogue',
		type: 				'creature',
		subtypes: 			['undead','skeleton','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T081501.419.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1, evade: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1, evade: 1},
		},
		quote: '\"Didn\'t that used to be Jimmy?\"',
	},
	skeletal_sacrifice:{
		name: 				'skeletal sacrifice',
		type: 				'spell',
		subtypes: 			['ritual','summon'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T044710.775.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{sacrifice_living_creature: 1, summon_skeleton_on_act: 2, maximum_allies: 4},
		quote: '\"The living bore me. Bring me more death!\"',
	},
	skeletal_scout:{
		name: 				'skeletal scout',
		type: 				'creature',
		subtypes: 			['undead','skeleton','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T054137.151.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{shoot: 1, stealth: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_undead','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, hide_hv: 1, undead: 1, resurrect: 1},
			verified: true,
		},
		quote: '\"Didn\'t that used to be Micky?\"',
	},
	skeletal_slasher:{
		name: 				'skeletal slasher',
		type: 				'creature',
		subtypes: 			['undead','skeleton'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T080935.236.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 2, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Holly?\"',
	},
	skeletal_stalker:{
		name: 				'skeletal stalker',
		type: 				'creature',
		subtypes: 			['undead','skeleton','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T054117.327.jpg',
		power: 				2,
		armor: 				0,
		health: 			1,
		abilities: 			{snipe: 1, hide: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_undead','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, hide_hv: 1, undead: 1, resurrect: 1},
			verified: true,
		},
		quote: '\"Didn\'t that used to be Nikky?\"',
	},
	skeletal_thief:{
		name: 				'skeletal thief',
		type: 				'creature',
		subtypes: 			['undead','skeleton','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-26T061357.894.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Horrick?\"',
	},
	skeletal_warrior:{
		name: 				'skeletal warrior',
		type: 				'creature',
		subtypes: 			['undead','skeleton','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T080211.742.jpg',
		power: 				3,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Timmy?\"',
	},
	skeletal_whelp:{
		name: 				'skeletal whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon','undead'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T064004.593.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, flying: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_dragon','resurrect_ability'],
			power: 				2,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, flying: 1, undead: 1, resurrect: 1},
		},
		quote: '\"And that was just a whelp?\"',
	},
	skeleton:{
		name: 				'skeleton',
		type: 				'creature',
		subtypes: 			['undead','skeleton'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard42.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','subtype_skeleton','ally_creature_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, resurrect: 1},
		},
		quote: '\"Didn\'t that used to be Tommy?\"',
	},
	skewed_fate:{
		name: 				'skewed fate',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['aoe','subtype_cleric'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T165023.346.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{doom_all: 3, bless_all: 3, minimum_enemies: 3, minimum_allies: 3},
		quote: '\"Let us tip the scales in our favor.\"',
	},
	skyboat:{
		name: 				'skyboat',
		type: 				'structure',
		subtypes: 			['ship'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T065336.964.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_ship','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Row through the sky!\"',
	},
	skygazer:{
		name: 				'skygazer',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T163044.347.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{air_bolt: 2},
		hero_version: 			{
			theme: 				['flying_ability','air_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{air_bolt_hv: 2},
		},
		quote: '\"I love the sky!\"',
	},
	skyship:{
		name: 				'skyship',
		type: 				'structure',
		subtypes: 			['ship'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T065033.759.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_ship','type_structure'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"Take to the sky!\"',
	},
	slashing_horror:{
		name: 				'slashing horror',
		type: 				'creature',
		subtypes: 			['animal','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T101018.636.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{fear: 1, strike: 2},
		hero_version: 			{
			theme: 				['subtype_horror','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, fearful_aura: 1},
		},
		quote: '\"When you see it... run!\"',
	},
	slavers_whip:{
		name: 				'slaver\'s whip',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_warrior'],
		not_theme: 			['type_structure','subtype_undead','subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T070148.356.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{backlash: 2},
		quote: '\"Let\'s put those minions to work!\"',
		max_in_deck: 		1,
	},
	sleeping_dog:{
		name: 				'sleeping dog',
		type: 				'creature',
		subtypes: 			['animal','canine'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T070621.005.jpg',
		potential_power: 	1,
		power: 				0,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, awaken: 2},
		hero_version: 			{
			theme: 				['enrage_ability','subtype_animal','active_healing_ability','bolster_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, enrage: 2},
		},
		quote: '\"Let sleeping dogs lie!\"',
	},
	smasher:{
		name: 				'smasher',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T150830.222.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_human'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Big weapon, lots of pain.\"',
	},
	sneak_attack:{
		name: 				'sneak attack',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T081146.787.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{ally_runs_away: 1, echo: 1},
		quote: '\"Move around them!\"',
		verified: true,
	},
	snowballer:{
		name: 				'snowballer',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T070257.826.jpg',
		power: 				false,
		armor: 				0,
		health: 			3,
		abilities: 			{frost_bolt: 1, evade: 1, run_away: 1},
		hero_version: 			{
			theme: 				['cold_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt: 1, evade: 1},
		},
		quote: '\"Haha! In your face!\"',
	},
	snowball_golem:{
		name: 				'snowball golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-02T062622.563.jpg',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{frost_bolt: 1},
		hero_version: 			{
			theme: 				['subtype_golem','cold_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{frost_bolt_hv: 2},
		},
		quote: '\"Lucia created these to play with her as a child.\"',
	},
	soldier:{
		name: 				'soldier',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard51.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Face your enemy.\"',
	},
	soldier_of_fate:{
		name: 				'soldier of fate',
		type: 				'creature',
		subtypes: 			['human','warrior','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/soldier_of_fate.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, doom: 2, plated: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, doom: 1, plated: 1},
		},
		quote: '\"Fight for your fate.\"',
	},
	soul_net:{
		name: 				'soul net',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','own_death_proc_ability'],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-20T060624.958.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{resurrect_ally: 2},
		quote: '\"Do not let it get away!\"',
	},
	soul_orb:{
		name: 				'soul orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','own_death_proc_ability'],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-22T071417.180.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reclaim_creatures: 2},
		quote: '\"It never ends...\"',
	},
	soul_huntress:{
		name: 				'soul huntress',
		type: 				'creature',
		subtypes: 			['human','warrior','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053847.049.jpg',
		power: 				2,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, run_away: 1, snipe: 1, feast: 3},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, snipe_hv: 1, evade: 1, feast: 1},
		},
		quote: '\"One soul for another.\"',
	},
	soul_wrecker:{
		name: 				'soul wrecker',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['undead_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T080737.750.jpg',
		power: 				3,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, resurrect: 1, final_pay_life: 1},
		hero_version: 			{
			theme: 				['undead_ability','subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, resurrect: 1},
		},
		quote: '\"You will pay for my services.\"',
	},
	sparrow:{
		name: 				'sparrow',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T140246.408.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, flying: 1, run_away: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal','evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, evade: 1},
			verified: 			true,
		},
		quote: '\"Hard to catch.\"',
	},
	spell_shard:{
		name: 				'spell shard',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				['deck_control'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-04-04T060831.076.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{spellrush: 1},
		quote: '\"Attuned to spells.\"',
	},
	spell_ward:{
		name: 				'spell ward',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['counter_spell_ability','counter_spell_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T084215.884.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{counter_spells: 2},
		quote: '\"A usefull charm.\"',
	},
	spellblade:{
		name: 				'spellblade',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T090012.160.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, spellpower: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','type_spell','type_draw_card_ability','type_damage_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spellpower: 1},
		},
		quote: '\"My blade glows with spellpower!\"',
	},
	spell_blaster:{
		name: 				'spell blaster',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		not_theme: 			['subtype_mage','arcane_bolts_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-01T090635.009.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{spellblast: 1},
		hero_version: 			{
			theme: 				['subtype_mage','type_spell','type_draw_card_ability','type_damage_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{spellblast: 1},
		},
		quote: '\"Feed me mana!\"',
	},
	spell_staff:{
		name: 				'spell staff',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['type_spell','type_spell'],
		not_theme: 			['arcane_bolts_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T060340.767.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{spell_bolt_hv: 1},
		quote: '\"Go ahead, cast your spells!\"',
	},
	spellblood_orb:{
		name: 				'spellblood orb',
		type: 				'artifact',
		subtypes: 			['orb'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T082505.136.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{painful_spells: 1},
		quote: '\"Magic has its downside.\"',
	},
	spellbook:{
		name: 				'spellbook',
		type: 				'artifact',
		subtypes: 			['tome'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-01T064316.624.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{reclaim_spells: 1},
		quote: '\"Infinite knowledge.\"',
	},
	spider:{
		name: 				'spider',
		type: 				'creature',
		subtypes: 			['animal','spider'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard91.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, trap: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_spider','stun_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"Watch out for webs!\"',
	},
	spike_knight:{
		name: 				'spike knight',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T055401.645.jpg',
		power: 				4,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, plated: 1, thorns: 1},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior','thorns_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1, thorns: 1},
		},
		quote: '\"Years of spiky training.\"',
	},
	spike_pod:{
		name: 				'spike pod',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T060003.872.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{thorns: 4, explode: 4},
		hero_version: 			{
			theme: 				['subtype_plant','receive_damage_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{thorns: 2},
		},
		quote: '\"Careful!\"',
	},
	spike_tower:{
		name: 				'spike tower',
		type: 				'structure',
		subtypes: 			['wall','tower'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-05T061403.459.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{strike_arrivals: 1, thorns: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_wall'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_arrivals: 1, thorns: 1},
		},
		quote: '\"Let them come!\"',
	},
	spiked_rogue:{
		name: 				'spiked rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T053259.700.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, thorns: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue','thorns_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, thorns: 1, evade: 1},
		},
		quote: '\"If you catch me, it will sting.\"',
	},
	spiked_shield:{
		name: 				'spiked shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160425.303.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, thorned_hero: 1},
		quote: '\"Come at me now!\"',
	},
	spiked_warrior:{
		name: 				'spiked warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T055143.230.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, thorns: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','thorns_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, thorns: 1},
		},
		quote: '\"I attack you or you attack me. Either way, you are getting hurt.\"',
	},
	
	spirit_cauldron:{
		name: 				'spirit cauldron',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['undead_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T085921.730.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{restoring_deaths: 1},
		quote: '\"Let their deaths feed you.\"',
	},
	split:{
		name: 				'split',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T074801.942.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{clone_ally: 1},
		quote: '\"This won\'t hurt a bit, I promise!\"',
		max_in_deck: 2,
	},
	spore_cloud:{
		name: 				'spore cloud',
		type: 				'spell',
		subtypes: 			['fungus','weather'],
		color: 				['colorless'],
		theme: 				['sybtype_fungus','sybtype_fungus'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-16T061320.105.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_sporeling: 1, echo: 1},
		quote: '\"Cough, cough.\"',
	},
	spore_generator:{
		name: 				'spore generator',
		type: 				'artifact',
		subtypes: 			['fungus','generator'],
		color: 				['colorless'],
		theme: 				['sybtype_fungus','sybtype_fungus'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T055721.679.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{spawn_sporeling: 1},
		quote: '\"It\'s warm and damp.\"',
	},
	sporeling:{
		name: 				'sporeling',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T062631.293.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1},
		quote: '\"They grow in damp, dark places.\"',
	},
	squad_leader:{
		name: 				'squad leader',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-28T080921.839.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{empower_all: 1, strike: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, empower_ally: 1},
		},
		quote: '\"Lets get \'m, boys!\"',
	},
	staff_of_purity:{
		name: 				'staff of purity',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				['subtype_cleric'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T144554.196.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{purify: 1},
		quote: '\"Be cleansed.\"',
	},
	stale_rations:{
		name: 				'stale rations',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_undead'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/stale_rations.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{heal: 1, echo: 1},
		quote: '\"Choke it down, you dainty wallflowers! Your brothers and fathers marched on half this slop in the Great War - and died with honor!\" - Lena, crual taskmaster<br/><br/>Credit: Pyrothecat',
	},
	stalker:{
		name: 				'stalker',
		type: 				'creature',
		subtypes: 			['human','rogue','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T053824.245.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{snipe: 1, hide: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{snipe_hv: 1, hide_hv: 1},
		},
		quote: '\"Shoot from the shadows.\"',
	},
	star_cloak:{
		name: 				'star cloak',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				['subtype_rogue'],
		not_theme: 			['subtype_gnome'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T120102.476.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{hide_hero: 1},
		quote: '\"Now you see me!\"',
		max_in_deck: 1,
	},
	starfish:{
		name: 				'starfish',
		type: 				'creature',
		subtypes: 			['animal','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-08T051138.375.jpg',
		power: 				2,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, submerged: 1, resist_fire: 1},
		hero_version: 			{
			theme: 				['subtype_aquatic','subtype_animal','submerge_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, submerged: 1, resist_fire: 1},
		},
		quote: '\"You have to dive to get it.\"',
	},
	steel_golem:{
		name: 				'steel golem',
		type: 				'structure',
		subtypes: 			['golem'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard77.jpg',
		power: 				3,
		armor: 				0,
		health: 			7,
		abilities: 			{strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['subtype_golem','plated_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1},
		},
		quote: '\"Made from steel.\"',
	},
	storm_mage:{
		name: 				'storm mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-23T045229.805.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{lightning_storm: 3},
		hero_version: 			{
			theme: 				['curse_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{lightning_storm_hv: 2},
		},
		quote: '\"Can you hear the thunder?\"',
	},
	storm_witch:{
		name: 				'storm witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T082600.571.jpg',
		power: 				false,
		armor: 				0,
		health: 			7,
		abilities: 			{curse: 2, air_bolt: 2},
		hero_version: 			{
			theme: 				['curse_ability','projectile_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, air_bolt_hv: 1},
		},
		quote: '\"Can you feel the air?\"',
	},
	strike_of_opportunity:{
		name: 				'strike of opportunity',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				['move_enemy_to_hand_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T152933.161.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{strike_hero: 5, maximum_enemies: 0},
		quote: '\"He\'s down! Strike now!\"',
	},
	striker:{
		name: 				'striker',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard26.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, striking_entry: 2},
		hero_version: 			{
			theme: 				['subtype_warrior','on_play_proc_ability','dealt_damage_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, strike_arrivals: 1},
		},
		quote: '\"Strike first.\"',
	},
	strong_brew:{
		name: 				'strong brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_mage'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T160149.576.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_hero: 2, echo: 1},
		quote: '\"Get me another one!\"',
		max_in_deck: 		1,
	},
	strongshot:{
		name: 				'strongshot',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T050945.386.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1},
		},
		quote: '\"Those arrows hurt!\"',
	},
	sturdy_brew:{
		name: 				'sturdy brew',
		type: 				'spell',
		subtypes: 			['food'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-11T135633.639.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{bolster_hero: 1, echo: 1},
		quote: '\"Ready for a long day!\"',
		verified: true,
	},
	summon_imp:{
		name: 				'summon imp',
		type: 				'spell',
		subtypes: 			['summon'],
		color: 				['colorless'],
		theme: 				['subtype_imp','subtype_imp','subtype_daemon','subtype_daemon'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard49.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_imp: 1},
		quote: '\"Life is like an imp pit, you never know what you\'re gonna get.\"',
	},
	swamp_rat:{
		name: 				'swamp rat',
		type: 				'creature',
		subtypes: 			['animal','rodent'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_animal'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T072509.492.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, venom: 4, avoid_structure: 1},
		hero_version: 			{
			theme: 				['subtype_animal','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, evade: 1},
		},
		quote: '\"It feeds on lost travelers.\"',
	},
	swooping_horror:{
		name: 				'swooping horror',
		type: 				'creature',
		subtypes: 			['horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T081753.089.jpg',
		power: 				2,
		armor: 				0,
		health: 			3,
		abilities: 			{fear: 1, seek_creature: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['subtype_horror','buff_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1, fearful_aura: 1},
		},
		quote: '\"It came from above!\"',
	},
	swordmaster:{
		name: 				'swordmaster',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T070307.026.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 2, counter: 1},
		hero_version: 			{
			theme: 				['melee_ability','subtype_warrior'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, counter: 1},
		},
		quote: '\"She is one with her blades.\"',
	},
	tactical_retreat:{
		name: 				'tactical retreat',
		type: 				'spell',
		subtypes: 			['tactic'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['subtype_skeleton'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T081739.341.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{unsummon_ally: 1, echo: 1},
		quote: '\"I\'m not running away! It\'s called a tactical retreat!\"',
	},
	taxes:{
		name: 				'taxes',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/taxes.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{destroy_artifact: 1, long_echo: 1},
		quote: '\"Not many things are certain in life...\"',
	},
	temple:{
		name: 				'temple',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-05T055407.813.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{bless_all: 1},
		hero_version: 			{
			theme: 				['bless_ability','subtype_cleric','draw_cards_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{bless_all: 3},
		},
		quote: '\"A holy place.\"',
	},
	thief:{
		name: 				'thief',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['sneaky'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard34.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, steal: 1},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"I\'ll take that!\"',
	},
	throwing_dagger:{
		name: 				'throwing dagger',
		type: 				'artifact',
		subtypes: 			['weapon'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-24T165205.725.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{shooting_entry: 1, homebound: 1},
		quote: '\"Just pick it up to use it again.\"',
		selfdestructs: true,
	},
	tiger:{
		name: 				'tiger',
		type: 				'creature',
		subtypes: 			['animal','cat'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-06T153951.966.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"Here, kitty!\"',
	},
	time_mage:{
		name: 				'time mage',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T165324.182.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{unsummon_ally: 1, hasten: 1, arcane_bolt: 1},
		hero_version: 			{
			theme: 				['on_play_proc_ability','subtype_mage'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{unsummon_ally: 1, hasten: 1, arcane_bolt_hv: 1},
		},
		quote: '\"The past can be your friend.\"',
	},
	town_hall:{
		name: 				'town hall',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T062700.373.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{summon_conscript: 1},
		hero_version: 			{
			theme: 				['subtype_human','ally_creature_death_proc_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{summon_conscript: 1},
			verified: 			true,
		},
		quote: '\"We shall gather at the Town Hall.\"',
	},
	toxic_cloud:{
		name: 				'toxic cloud',
		type: 				'spell',
		subtypes: 			['weather'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T150447.143.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poison_all: 5, minimum_enemy_creatures: 3},
		quote: '\"Breathe in deep!\"',
	},
	toxic_soul:{
		name: 				'toxic soul',
		type: 				'creature',
		subtypes: 			['undead','spirit'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T071002.955.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, poisonous_deaths: 1, undead: 1, resurrect: 1},
		hero_version: 			{
			theme: 				['subtype_undead','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, poisonous_deaths_hv: 1, undead: 1, resurrect: 1},
		},
		quote: '\"I will poison you. Forever!\"',
	},
	toxic_urn:{
		name: 				'toxic urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T074252.971.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{poisonous_deaths_hv: 1},
		quote: '\"Holds toxic spirits.\"',
	},
	toy_dragon:{
		name: 				'toy dragon',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/toy_dragon.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{restore: 1, fragile: 1},
		quote: '\"The toy brings joy, but the child still dreams of the father who made it, and wishes he had returned home alive.\"<br/><br/>Credit: Pyrothecat',
	},
	tracker:{
		name: 				'tracker',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-12T052200.189.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{reveal: 1, shoot: 1},
		hero_version: 			{
			theme: 				['projectile_ability','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{reveal: 1, shoot_unit: 1},
		},
		quote: '\"There you are!\"',
	},
	trap:{
		name: 				'trap',
		type: 				'structure',
		subtypes: 			['trap'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		0,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T164712.237.jpg',
		power: 				false,
		armor: 				0,
		health: 			1,
		abilities: 			{thorns: 1, stunning_touch: 1},
		quote: '\"It\'s a trap!\"',
	},
	trapper:{
		name: 				'trapper',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				['type_structure'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-11T163651.370.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{lay_trap: 1, strike: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','projectile_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, trap: 1},
		},
		quote: '\"Do not run after her.\"',
	},
	tribal_adept:{
		name: 				'tribal adept',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/tribal_adept.jpg',
		image_position: 	'top right',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{elemental_bolt: 1, hide_on_kill: 1},
		hero_version: 		{
			theme: 				['subtype_mage','on_kill_proc_ability','evade_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{elemental_bolt_hv: 2, hide_on_kill: 1},
		},
		quote: '\"Respected among their people.\"',
	},
	tribal_archer:{
		name: 				'tribal archer',
		type: 				'creature',
		subtypes: 			['human','archer'],
		color: 				['colorless'],
		theme: 				['muscle'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/tribal_archer.jpg',
		image_position: 	'top',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{shoot: 1, hide_on_kill: 1},
		hero_version: 			{
			theme: 				['subtype_tribal','evade_ability','earth'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{shoot_unit: 1, hide_on_kill: 1},
		},
		quote: '\"Shoot from the shadows.\"',
	},
	troll_warrior:{
		name: 				'troll warrior',
		type: 				'creature',
		subtypes: 			['troll','warrior'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard82.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, regenerate: 1},
		hero_version: 			{
			theme: 				['subtype_troll','subtype_warrior','ally_creature_death_proc_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, regenerate: 1},
		},
		quote: '\"I do big smash!\"',
	},
	truthseeker:{
		name: 				'truthseeker',
		type: 				'creature',
		subtypes: 			['human','cleric','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T163743.332.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{seek_enemy: 1, strike: 1, purify: 1},
		hero_version: 			{
			theme: 				['subtype_warrior','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, purify: 1},
		},
		quote: '\"I will find it!\"',
	},
	twin_blade:{
		name: 				'twin blade',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard29.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 2, evade: 1},
		hero_version: 			{
			theme: 				['subtype_rogue','empower_any_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, evade: 1},
		},
		quote: '\"Say hello to my little friends!\"',
	},
	twin_rage:{
		name: 				'twin rage',
		type: 				'spell',
		subtypes: 			['mental'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-04T153922.296.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{empower_ally: 4, empower_hero: 4, minimum_ally_creatures: 1},
		quote: '\"We will end you!\"',
		max_in_deck: 		1,
	},
	unholy_night:{
		name: 				'unholy night',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['ally_creature_death_proc_ability','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T111920.684.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{summon_ghost: 5, maximum_allies: 0},
		quote: '\"Time to meet your grandfather.\"',
	},
	unholy_rite:{
		name: 				'unholy rite',
		type: 				'spell',
		subtypes: 			['ritual'],
		color: 				['colorless'],
		theme: 				['subtype_witch','aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-20T163402.368.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{curse_all: 5, minimum_enemies: 3},
		quote: '\"It\'s never good when the witches come together.\"',
		max_in_deck: 		1,
	},
	undertaker:{
		name: 				'undertaker',
		type: 				'creature',
		subtypes: 			['human','clerk'],
		color: 				['colorless'],
		theme: 				['resurrect_ability'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard73.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, cursed_deaths: 1},
		hero_version: 			{
			theme: 				['resurrect_ability','arcane_bolts_ability','summon_creature_ability','own_death_proc_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, cursed_deaths_hv: 1},
		},
		quote: '\"I will note the date in the ledger.\"',
	},
	venom_rogue:{
		name: 				'venom rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['poison_ability','poison_ability'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T070922.895.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 1, evade: 1},
		hero_version: 			{
			theme: 				['poison_ability','subtype_rogue'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 1, evade: 1},
		},
		quote: '\"Let me touch you...\"',
	},
	villager:{
		name: 				'villager',
		type: 				'creature',
		subtypes: 			['human'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-16T053218.613.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_human','buff_hero_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"They work hard to improve their life.\"',
	},
	vine:{
		name: 				'vine',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T085052.203.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, stunning_touch: 1, trap: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_plant','stun_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, stunning_touch: 1, trap: 1},
		},
		quote: '\"Even the plants try to kill you!\"',
	},
	vine_bulb:{
		name: 				'vine bulb',
		type: 				'structure',
		subtypes: 			['plant'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T051725.520.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, poison: 3},
		hero_version: 			{
			theme: 				['subtype_plant','poison_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, poison_hv: 3},
		},
		quote: '\"Home grown poison.\"',
	},
	vine_master:{
		name: 				'vine master',
		type: 				'creature',
		subtypes: 			['plant','mage'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T085742.386.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, marred_vines: 1},
		hero_version: 			{
			theme: 				['subtype_plant','summon_ally_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, marred_vines: 1},
		},
		quote: '\"I cut off his arm and it crawled away!\"',
	},
	vine_serpent:{
		name: 				'vine serpent',
		type: 				'creature',
		subtypes: 			['plant','animal'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_golem'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T085443.578.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, venom: 2},
		hero_version: 			{
			theme: 				['subtype_plant','poison_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 3},
		},
		quote: '\"Even the plants try to eat you!\"',
	},
	viper:{
		name: 				'viper',
		type: 				'creature',
		subtypes: 			['animal','reptile'],
		color: 				['colorless'],
		theme: 				['jungle'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard68.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, venom: 2},
		verified: 			true,
		hero_version: 			{
			theme: 				['poison_ability','subtype_reptile'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, venom: 3},
		},
		quote: '\"Hissssss!\"',
	},
	vulture:{
		name: 				'vulture',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-29T060045.768.jpg',
		power: 				3,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 4, flying: 1},
		hero_version: 			{
			theme: 				['feast_ability','subtype_bird','buff_hero_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, flying: 1},
		},
		quote: '\"Can you see it circle?\"',
	},
	walking_fungus:{
		name: 				'walking fungus',
		type: 				'creature',
		subtypes: 			['fungus'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-27T070758.026.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, spawn_sporeling: 1},
		hero_version: 			{
			theme: 				['subtype_fungus'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spawn_sporeling: 1},
		},
		quote: '\"It moved, I swear!\"',
	},
	wall_of_corpses:{
		name: 				'wall of corpses',
		type: 				'structure',
		subtypes: 			['wall','horror'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/wall_of_corpses.jpg',
		power: 				false,
		armor: 				0,
		health: 			8,
		abilities: 			{fearful_aura: 1},
		hero_version: 			{
			theme: 				['subtype_horror'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{fearful_aura: 1, regenerate: 2},
		},
		quote: '\"They said they missed their fathers and brothers during the Great War... So, we brought them back. All of them.\"<br/><br/>Credit: Pyrothecat',
	},
	wall_of_knives:{
		name: 				'wall of knives',
		type: 				'structure',
		subtypes: 			['wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T061545.618.jpg',
		power: 				1,
		armor: 				0,
		health: 			10,
		abilities: 			{counter: 2},
		hero_version: 			{
			theme: 				['subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{counter: 2},
		},
		quote: '\"They say the knives are enchanted.\"',
	},
	wall_of_leaves:{
		name: 				'wall of leaves',
		type: 				'structure',
		subtypes: 			['plant','wall'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-21T055307.474.jpg',
		power: 				false,
		armor: 				0,
		health: 			10,
		abilities: 			{regenerate: 1},
		hero_version: 			{
			theme: 				['subtype_plant','heal_hero_ability','deck_control_ability','subtype_wall'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{regenerate: 3},
		},
		quote: '\"We cut it down, and it grew right back!\"',
	},
	wall_of_spirits:{
		name: 				'wall of spirits',
		type: 				'structure',
		subtypes: 			['wall','undead'],
		color: 				['colorless'],
		theme: 				[],
		not_theme: 			['type_structure','subtype_wall'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-24T085717.596.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{resurrect_ally: 2},
		hero_version: 			{
			theme: 				['subtype_undead','resurrect_ability','bolster_hero_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{resurrect_ally: 3},
		},
		quote: '\"It holds back the spirits.\"',
	},
	wall_of_water:{
		name: 				'wall of water',
		type: 				'structure',
		subtypes: 			['wall','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_aquatic','subtype_aquatic','subtype_aquatic','submerge'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-26T143302.083.jpg',
		power: 				2,
		armor: 				0,
		health: 			8,
		abilities: 			{counter: 1, fireproof: 1},
		hero_version: 			{
			theme: 				['subtype_water','subtype_animal','subtype_human'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{counter: 1, fireproof: 1},
		},
		quote: '\"Get through that? How?!\"',
	},
	war_scribe:{
		name: 				'war scribe',
		type: 				'creature',
		subtypes: 			['human','warrior','clerk'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-21T155054.917.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, draw: 1},
		hero_version: 			{
			theme: 				['draw_cards_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1},
		},
		quote: '\"Knowledge is power.\"',
	},
	warder:{
		name: 				'warder',
		type: 				'creature',
		subtypes: 			['human','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-15T083843.215.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, counter_spells: 5},
		hero_version: 			{
			theme: 				['subtype_human','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, counter_spells: 4},
		},
		quote: '\"Stay behind me!\"',
	},
	warding_shield:{
		name: 				'warding shield',
		type: 				'artifact',
		subtypes: 			['gear'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-14T061747.145.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{fortify_hero: 1, counter_spells: 2},
		quote: '\"Allround protection.\"',
	},
	warding_soldier:{
		name: 				'warding soldier',
		type: 				'creature',
		subtypes: 			['human','warrior','cleric'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/warding_soldier.jpg',
		image_position: 	'top right',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, plated: 1, counter_spells: 3},
		hero_version: 			{
			theme: 				['plated_ability','subtype_warrior','subtype_cleric'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, plated: 1, counter_spells: 2},
		},
		quote: '\"She fears steel nor magic.\"',
	},
	warlock:{
		name: 				'warlock',
		type: 				'creature',
		subtypes: 			['human','witch','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['subtype_mage'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T113859.306.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, fire_bolt: 1, summon_imp: 1},
		hero_version: 			{
			theme: 				['fire_ability','subtype_imp','curse_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, fire_bolt_hv: 2},
		},
		quote: '\"She has been to hell and back.\"',
	},
	warrior:{
		name: 				'warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T143044.613.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1},
		hero_version: 			{
			theme: 				['subtype_warrior'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1},
		},
		quote: '\"She lives for combat.\"',
	},
	warrior_witch:{
		name: 				'warrior witch',
		type: 				'creature',
		subtypes: 			['human','witch','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-04T170359.671.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, plated: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, plated: 1},
		},
		quote: '\"Let my dark blade cut you!\"',
	},
	wave_caller:{
		name: 				'wave caller',
		type: 				'creature',
		subtypes: 			['human','mage','aquatic'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		['water','water','water','water','water','water'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-30T071727.035.jpg',
		power: 				false,
		armor: 				0,
		health: 			6,
		abilities: 			{water_blast: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['magical_ability','water_ability','air_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{water_blast: 1},
		},
		quote: '\"Wash away the filth.\"',
	},
	weakness:{
		name: 				'weakness',
		type: 				'spell',
		subtypes: 			['curse'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-23T160148.896.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{weakness: 2, echo: 1},
		quote: '\"You think you are strong?\"',
	},
	weasel:{
		name: 				'weasel',
		type: 				'creature',
		subtypes: 			['animal','marten'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-14T073758.819.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, evade: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_animal'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Hard to catch and a nasty bite.\"',
	},
	weathered_rune:{
		name: 				'weathered rune',
		type: 				'artifact',
		subtypes: 			['rune'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-03-08T075404.133.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{wither_arrivals: 1},
		quote: '\"Decay in written form.\"',
	},
	weathered_urn:{
		name: 				'weathered urn',
		type: 				'artifact',
		subtypes: 			['trinket'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T074804.120.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{withering_deaths: 1},
		quote: '\"Holds spirits long gone.\"',
	},
	whisp:{
		name: 				'whisp',
		type: 				'creature',
		subtypes: 			['undead'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-21T083129.418.jpg',
		power: 				1,
		armor: 				0,
		health: 			1,
		abilities: 			{strike: 1, evade: 1, flying: 1, undead: 1},
		hero_version: 			{
			theme: 				['evade_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1, flying: 1, undead: 1},
			verified: 			true,
		},
		quote: '\"A spirit so fragile it disappears when touched.\"',
	},
	white_dragon:{
		name: 				'white dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T070329.680.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, purify_all: 1, flying: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, purify: 1, flying: 1},
		},
		quote: '\"True pure power.\"',
	},
	white_whelp:{
		name: 				'white whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T062537.872.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, purify: 1, flying: 1},
		hero_version: 			{
			theme: 				['doom_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, purify: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	widow_golemancer:{
		name: 				'widow golemancer',
		type: 				'creature',
		subtypes: 			['human','mage'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/widow_golemancer.jpg',
		image_position: 	'top',
		power: 				false,
		armor: 				0,
		health: 			4,
		abilities: 			{arcane_bolt: 1, bring_companion_golem: 1},
		hero_version: 			{
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{arcane_bolt_hv: 1, repair: 1},
		},
		quote: '\"Since the Great War took him, she\'s carved his face into wood a hundred times. Each golem she breathes life into wears his smile - yet none ever truly smile back.\"<br/><br/>Credit: Pyrothecat',
	},
	wild_jinn:{
		name: 				'wild jinn',
		type: 				'creature',
		subtypes: 			['genie'],
		color: 				['colorless'],
		theme: 				['type_spell'],
		pick_chance: 		1,
		time: 				5,
		image: 				'cards/dream_TradingCard-2025-02-17T053214.672.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, retreat_on_spell_cast: 1},
		hero_version: 			{
			theme: 				['type_spell','subtype_genie','type_draw_card_ability','type_damage_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, spellrush: 1},
		},
		quote: '\"For those who wish to live in the wild.\"',
	},
	wild_worm:{
		name: 				'wild worm',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-31T065904.363.jpg',
		power: 				4,
		armor: 				0,
		health: 			8,
		abilities: 			{strike: 1, homebound: 1},
		hero_version: 			{
			theme: 				['subtype_animal','subtype_tactic'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"Where can something that big hide?!\"',
	},
	wind_witch:{
		name: 				'wind witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-20T080752.987.jpg',
		power: 				false,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, air_bolt: 1},
		hero_version: 			{
			theme: 				['curse_ability','projectile_ability'],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 2, air_bolt_hv: 1},
		},
		quote: '\"Curse the skies!\"',
	},
	winged_imp:{
		name: 				'winged imp',
		type: 				'creature',
		subtypes: 			['daemon','imp'],
		color: 				['colorless'],
		theme: 				['subtype_imp'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard48.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{flame_strike: 1, flying: 1},
		verified: 			true,
		hero_version: 			{
			theme: 				['subtype_daemon','subtype_imp','summon_creature_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{flame_strike_hv: 1, flying: 1},
		},
		quote: '\"Me up here!\"',
	},
	winged_witch:{
		name: 				'winged witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T062135.034.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1, flying: 1},
		},
		quote: '\"I will darken the skies!\"',
	},
	witch:{
		name: 				'witch',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard39.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{curse: 1, strike: 1},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 3, strike_unit: 1},
		},
		quote: '\"Let the darkness embrace you!\"',
	},
	witchs_initiate:{
		name: 				'witch\'s initiate',
		type: 				'creature',
		subtypes: 			['human','witch'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-01T090848.724.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, final_curse: 2},
		hero_version: 			{
			theme: 				['curse_ability','arcane_bolts_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{curse_hv: 1, strike_unit: 1},
		},
		quote: '\"Give me some time. Then I will curse you!\"',
	},
	wise_owl:{
		name: 				'wise owl',
		type: 				'creature',
		subtypes: 			['animal','bird','owl'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-23T154746.563.jpg',
		power: 				1,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, draw: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, draw: 1, flying: 1},
			verified: true,
		},
		quote: '\"A wise bird of prey.\"',
	},
	wolf_pack:{
		name: 				'wolf pack',
		type: 				'creature',
		subtypes: 			['animal','canine'],
		color: 				['colorless'],
		theme: 				['aoe'],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-24T163924.316.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, bring_clone: 2, maximum_allies: 2},
		hero_version: 			{
			theme: 				['feast_ability','subtype_animal','curse_ability','curse_ability'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, evade: 1},
		},
		quote: '\"They will eat your face.\"',
	},
	wombat:{
		name: 				'wombat',
		type: 				'creature',
		subtypes: 			['animal'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-26T062348.568.jpg',
		power: 				2,
		armor: 				0,
		health: 			4,
		abilities: 			{strike: 1, hide: 1},
		hero_version: 			{
			theme: 				['subtype_animal','evade_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, hide_hv: 1},
		},
		quote: '\"Ouch! Something bit my ankle!\"',
	},
	wren:{
		name: 				'wren',
		type: 				'creature',
		subtypes: 			['animal','bird'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-08T083454.870.jpg',
		power: 				1,
		armor: 				0,
		health: 			2,
		abilities: 			{strike: 1, flying: 1},
		hero_version: 			{
			theme: 				['flying_ability','subtype_animal'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, flying: 1},
		},
		quote: '\"A common bird.\"',
	},
	wrench:{
		name: 				'wrench',
		type: 				'artifact',
		subtypes: 			['tool'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-12-25T113733.307.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{stun_construct: 1},
		quote: '\"You have to use it the right way.\"',
		max_in_deck: 1,
	},
	yellow_dragon:{
		name: 				'yellow dragon',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T070748.995.jpg',
		power: 				3,
		armor: 				0,
		health: 			12,
		abilities: 			{strike: 1, fortify_all: 2, flying: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, fortify: 1, flying: 1},
		},
		quote: '\"True fortified power.\"',
	},
	yellow_whelp:{
		name: 				'yellow whelp',
		type: 				'creature',
		subtypes: 			['reptile','dragon'],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-02-19T063346.962.jpg',
		power: 				1,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, fortify: 1, flying: 1},
		hero_version: 			{
			theme: 				['fortify_ability','subtype_dragon'],
			power: 				1,
			armor: 				0,
			health: 			30,
			abilities: 			{strike_unit: 1, fortify: 1, flying: 1},
		},
		quote: '\"And that is just a whelp?\"',
	},
	zealot:{
		name: 				'zealot',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T142824.473.jpg',
		image_position: 	'top',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, striking_entry: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2},
		},
		quote: '\"Give me something to hit!\"',
	},
	zealous_rogue:{
		name: 				'zealous rogue',
		type: 				'creature',
		subtypes: 			['human','rogue'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T142445.446.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, evade: 1, striking_entry: 1},
		hero_version: 			{
			theme: 				['evade_ability','subtype_rogue'],
			power: 				1,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2, evade: 1},
		},
		quote: '\"My dagger needs flesh.\"',
	},
	zealous_warrior:{
		name: 				'zealous warrior',
		type: 				'creature',
		subtypes: 			['human','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2025-01-15T144614.196.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, striking_entry: 1},
		hero_version: 			{
			theme: 				['empower_any_ability','subtype_warrior','plated_ability'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 2},
		},
		quote: '\"Give me something to hit, before they hit me!\"',
	},
	zombie:{
		name: 				'zombie',
		type: 				'creature',
		subtypes: 			['undead','zombie'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard98.jpg',
		power: 				2,
		armor: 				0,
		health: 			5,
		abilities: 			{strike: 1, feast: 2, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','subtype_zombie'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, undead: 1},
		},
		quote: '\"Brains...\"',
	},
	zombie_knight:{
		name: 				'zombie knight',
		type: 				'creature',
		subtypes: 			['undead','zombie','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T204050.564.jpg',
		power: 				4,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, feast: 3, plated: 1, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','subtype_zombie'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, plated: 1, undead: 1},
		},
		quote: '\"Glorious brains...\"',
	},
	zombie_merchild:{
		name: 				'zombie merchild',
		type: 				'creature',
		subtypes: 			['undead','zombie','mermaid'],
		color: 				['colorless'],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/zombie_merchild.jpg',
		image_position: 	'top right',
		power: 				1,
		armor: 				0,
		health: 			3,
		abilities: 			{strike: 1, undead: 1, feast: 2, submerged: 1},
		hero_version: 			{
			theme: 				['feast_ability','subtype_zombie','subtype_mermaid','subtype_undead'],
			power: 				2,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, undead: 1, feast: 1, submerged: 1},
		},
		quote: '\"She used to play in the waves...\"',
	},
	zombie_warrior:{
		name: 				'zombie warrior',
		type: 				'creature',
		subtypes: 			['undead','zombie','warrior'],
		color: 				['colorless'],
		theme: 				[],
		craft_theme: 		[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/dream_TradingCard-2024-11-30T203747.679.jpg',
		power: 				3,
		armor: 				0,
		health: 			6,
		abilities: 			{strike: 1, feast: 3, undead: 1},
		hero_version: 			{
			theme: 				['curse_ability','subtype_undead','subtype_zombie'],
			power: 				3,
			armor: 				0,
			health: 			40,
			abilities: 			{strike_unit: 1, feast: 1, undead: 1},
		},
		quote: '\"Fight for brains...\"',
	},
	
	

	//##################################################################################################################################################################
	//########################################################## FRAGMENTS ###############################################################################################
	//##################################################################################################################################################################

	/*fragment_forest:{
		name: 				'forest fragment',
		value: 				1,
		type: 				'fragment',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'buildings/dream_TradingCard-2024-03-03T084047.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
	},*/

	//##################################################################################################################################################################
	//########################################################## TREASURE ###############################################################################################
	//##################################################################################################################################################################

	clover:{
		name: 				'clover',
		description: 		'Can be used to boost the current enemy. Increases rewards by 50%.',
		value: 				10,
		//months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'token',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-21T054040.563.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Rare as they are lucky.\"',
		summon_post_buff:{
			buff_type: 			'reward_count',
			buff_amount: 		50,
			buff_amount_type:  'percent',
		}
	},
	horseshoe:{
		name: 				'horseshoe',
		description: 		'Can be used to boost the current enemy. Increases rewards by 10%.',
		value: 				2,
		//months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'token',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-21T053538.719.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"They can bring luck.\"',
		summon_post_buff:{
			buff_type: 			'reward_count',
			buff_amount: 		10,
			buff_amount_type:  'percent',
		}
	},
	jar_of_luck:{
		name: 				'jar of luck',
		description: 		'Can be used to boost the current enemy. Increases rewards by 250%.',
		value: 				50,
		//months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'token',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-21T054355.310.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Overflowing with the good stuff.\"',
		summon_post_buff:{
			buff_type: 			'reward_count',
			buff_amount: 		250,
			buff_amount_type:  'percent',
		}
	},
	spyglass:{
		name: 				'spyglass',
		description: 		'Doubles the maximum rarity of the next summoned enemy.',
		value: 				10,
		type: 				'treasure',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		boost_pick_chance: 	0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-18T051643.275.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		summon_pre_buff:{
			0:{
				buff_type: 			'max_rarity',
				buff_amount: 		100,
				buff_amount_type:  'percent',
			},
			1:{
				buff_type: 			'common_reduction',
				buff_amount: 		100,
				buff_amount_type:  'percent',
			}
		},
		quote: '\"I think I see something shiny overe there!\"',
	},
	compass:{
		name: 				'compass',
		description: 		'Triples the maximum rarity of the next summoned enemy.',
		value: 				30,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		boost_pick_chance: 	0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-18T051900.208.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		summon_pre_buff:{
			0:{
				buff_type: 			'max_rarity',
				buff_amount: 		200,
				buff_amount_type:  'percent',
			},
			1:{
				buff_type: 			'common_reduction',
				buff_amount: 		200,
				buff_amount_type:  'percent',
			}
		},
		quote: '\"Keep going that way.\"',
	},
	treasure_map:{
		name: 				'treasure map',
		description: 		'Quadruples the maximum rarity of the next summoned enemy.',
		value: 				120,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		boost_pick_chance: 	0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-18T053212.141.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		summon_pre_buff:{
			0:{
				buff_type: 			'max_rarity',
				buff_amount: 		300,
				buff_amount_type:  'percent',
			},
			1:{
				buff_type: 			'common_reduction',
				buff_amount: 		300,
				buff_amount_type:  'percent',
			}
		},
		quote: '\"It\'s not hard if you know where it is.\"',
	},
	crown:{
		name: 				'crown',
		description: 		'Passively increases all peasants gained by 1%.',
		value: 				250,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T064030.359.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Wear this and they will follow you.\"',
	},
	cup_of_blood:{
		name: 				'cup of blood',
		description: 		'Passively increases the maximum rarity of cards sacrificed at the altar by 1%.',
		value: 				250,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T095607.650.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"We can always need more blood.\"',
	},
	enchanted_net:{
		name: 				'enchanted net',
		description: 		'Passively increases floating scraps gained by 1%.',
		value: 				200,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T070421.769.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Cast the nets!\"',
	},
	endless_pouch:{
		name: 				'endless pouch',
		description: 		'Passively increases all scraps gained by 1%.',
		value: 				500,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T061306.496.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"It just keeps giving.\"',
	},
	gloves_of_midas:{
		name: 				'gloves of Midas',
		description: 		'Passively increases troves gained by 1%.',
		value: 				5000,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T071338.170.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Turns common items into treasure.\"',
	},
	golden_saddle:{
		name: 				'golden saddle',
		description: 		'Passively increases all rewards from battles and quests by 1%.',
		value: 				2000,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T065529.311.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Perfect for doing long quests.\"',
	},
	loupe:{
		name: 				'loupe',
		description: 		'Passively increases all shards gained by 1%.',
		value: 				1000,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T064733.364.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Make those gems shine!\"',
	},
	rope_of_binding:{
		name: 				'rope of binding',
		description: 		'Passively increases the chance for loot items to drop after winning a battle by 1%.',
		value: 				500,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-29T060640.618.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"I got you!\"',
	},
	thieves_cloak:{
		name: 				'thieves\' cloak',
		description: 		'Passively increases the maximum scraps offered by merchants by 1%.',
		value: 				500,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T070815.141.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"I\'m sure we can make a deal.\"',
	},
	war_banner:{
		name: 				'war banner',
		description: 		'Passively increases the maximum rarity of summoned enemies by 1%.',
		value: 				250,
		type: 				'treasure',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-03-02T065910.439.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"This should draw them out.\"',
	},
	
	
	//##################################################################################################################################################################
	//########################################################## REWARDS ###############################################################################################
	//##################################################################################################################################################################
	
	flask:{
		name: 				'flask',
		value: 				25,
		type: 				'currency',
		color: 				['none'],
		pick_chance: 		0,
		basic_reward: 		true,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-12-21T070512.391.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: 'Used in alchemy'
	},
	potion_placeholder:{
		name: 				'potion',
		value: 				1,
		type: 				'potion',
		color: 				['purple'],
		pick_chance: 		0,
		time: 				0,
		image: 				'mason-jar.svg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	shard:{
		name: 				'shard',
		value: 				5,
		months_available: 	[0,1,2,3,4,5,6,7,8,9,10,11,12],
		type: 				'currency',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2023-03-17T062225.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		quote: '\"Used for upgrades.\"',
	},
	stash:{
		name: 				'stash',
		value: 				15,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-11-30T171529.098.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			pick_amount: 	1,
			amount: 		1,
			min_value: 		1,
			description: 	'Awards 1 random card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},
	},
	chest:{
		name: 				'chest',
		value: 				50,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2024-12-07T074802.756.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			pick_amount: 	1,
			amount: 		1,
			min_value: 		25,
			description: 	'Awards 1 random uncommon or better card.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
		},
	},
	trove:{
		name: 				'trove',
		value: 				25,
		type: 				'consumable',
		basic_reward: 		true,
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/dream_TradingCard-2025-01-19T055525.326.jpg',
		power: 				false,
		armor: 				false,
		health: 			false,
		abilities: 			{},
		reward: 			{
			type: 			'random_card',
			card_type: 		['treasure'],
			pick_amount: 	1,
			amount: 		1,
			min_value: 		7,
			description: 	'Awards 1 random treasure.',
			text: 			'&nbsp;',
			amount_used: 	[1,5,'all'],
			all_pick_chance: true,
		},
	},
	
	empty_card:{
		name: 				'',
		value: 				1,
		type: 				'',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	scraps_placeholder:{
		name: 				'scraps',
		value: 				1,
		type: 				'currency',
		color: 				['none'],
		pick_chance: 		0,
		time: 				0,
		image: 				'cards/shredded-71381_640.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
	},
	

}

add_old_cards(all_old_available_cards, 'cards_old/');
add_old_cards(all_older_available_cards, 'cards_old2/');
add_old_cards(all_oldest_available_cards, 'cards_old2a/');
unavailable_abilities = sortObj(unavailable_abilities);

/*eachoa(all_available_cards, function(card_id, card_info){
	if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
	if(card_info['color'][0] != undefined && card_info['color'][0] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
	if(card_info['unique'] != undefined && card_info['unique'] == true)
	{
		all_available_cards[card_id]['color'] = ['purple'];
		all_available_cards[card_id]['max_in_deck'] = 1;
	}
	if(card_info['abilities'] != undefined && card_info['abilities']['minimum_allies'] != undefined && card_info['abilities']['minimum_allies'] < 5 && card_info['max_in_deck'] != undefined)
	{
		card_info['max_in_deck'] = 1;
		console.log(card_id);
	}
	if(card_info['abilities'] != undefined && card_info['abilities']['minimum_enemies'] != undefined && card_info['abilities']['minimum_enemies'] < 5 && card_info['max_in_deck'] != undefined)
	{
		card_info['max_in_deck'] = 1;
	}
});*/

function calculate_card_value(card_id, show_calc){
	//console.log('calculating ' + card_id);
	var current_card_value = 0;
	if(all_available_cards[card_id] == undefined){console.log(card_id)};
	if(all_available_cards[card_id]['recipe'] == undefined || show_calc != undefined || true)
	{
		if(all_available_cards[card_id]['value'] == undefined)
		{
			current_card_value = 1;
		}
		else
		{
			current_card_value = all_available_cards[card_id]['value'];
		}
		current_card_value = 1;
		//if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'artifact'){current_card_value += 5;}
		current_card_value *= all_available_cards[card_id]['raw_time'] * all_available_cards[card_id]['raw_time'];
		if(current_card_value < all_available_cards[card_id]['raw_time']){current_card_value = all_available_cards[card_id]['raw_time'];}
		if(show_calc != undefined && show_calc == true){console.log('time: ' + current_card_value);}
		var ability_count = count_object(all_available_cards[card_id]['abilities']);
		/*var ability_count =  0;
		eachoa(all_available_cards[card_id]['abilities'], function(ability_id, ability_level){
			ability_count +=  0.8 + (ability_level / 5);
		});*/
		current_card_value *= (ability_count * ability_count);
		if(show_calc != undefined && show_calc == true){console.log('abilities: ' + current_card_value);}
		//current_card_value += all_available_cards[card_id]['power'];
		//current_card_value += all_available_cards[card_id]['health'] / 4;
		//current_card_value = current_card_value * (0.5 + (current_card_value / 10));
		/*if(all_available_cards[card_id]['type'] == 'spell' || all_available_cards[card_id]['type'] == 'artifact')
		{
			current_card_value = current_card_value * (1 + (current_card_value / 5));
		}
		else
		{
			current_card_value = current_card_value * (0.5 + (current_card_value / 10));
		}*/
		if(show_calc != undefined && show_calc == true){console.log('type: ' + current_card_value);}
		/*current_card_value = current_card_value * current_card_value;
		current_card_value /= 10;
		if(show_calc != undefined && show_calc == true){console.log('correction: ' + current_card_value);}*/
		current_card_value = Math.ceil(current_card_value);
	}
	else
	{
		eachoa(all_available_cards[card_id]['recipe'], function(card_cost_id, card_cost_amount){
			if(all_available_cards[card_cost_id]['value'] == undefined)
			{
				all_available_cards[card_cost_id]['value'] = calculate_card_value(card_cost_id);
			}
			var cost_card_value = all_available_cards[card_cost_id]['value'];
			current_card_value += cost_card_value * card_cost_amount;
		});
		var card_info = all_available_cards[card_id];
		if(card_info['recipe'] != undefined && all_available_cards['recipe_' + card_id] == undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
		{
			all_available_cards['recipe_' + card_id] = {
				name: 				'recipe: ' + card_info['name'],
				version: 			2,
				non_tradable: 		true,
				value: 				card_info['value'],
				type: 				'recipe',
				color: 				['yellow'],
				pick_chance: 		0,
				months_available: 	card_info['months_available'],
				time: 				0,
				image: 				card_info['image'],
				power: 				false,
				armor: 				false,
				health: 			false,
				abilities: 			{auto_learn: 1},
				recipe: 			card_id,
			};
		}
	}
	
	return current_card_value;
}

function find_ability(find_ability_id, hero_version){
	eachoa(all_available_cards, function(unit_id, unit){
		if(hero_version == undefined && unit['abilities'][find_ability_id] != undefined)
		{
			console.log(unit['name']);
		}
		if(hero_version != undefined && unit['hero_version'] != undefined && unit['hero_version']['abilities'][find_ability_id] != undefined)
		{
			console.log('hero: ' + unit['name']);
		}
	});
}

function count_recipe_count(card_id){
	eachoa(all_available_cards, function(unit_id, unit){
		var recipe_count = 0;
		var recipe_list = '';
		eachoa(all_available_cards, function(unit_id_2, unit_2){
			if(unit_2['recipe'] != undefined && unit_2['recipe'][unit_id] != undefined)
			{
				recipe_count++;
				recipe_list += unit_id_2 + '       ';
			}
		});
		if((recipe_count > 8 && card_id == undefined) || unit_id == card_id)
		{
			console.log(' --------------- ');
			console.log(unit_id + ': ' + recipe_count);
			console.log(recipe_list);
		}
		
	});
}

function find_used_in_recipes(min, max, color){
	if(min == undefined){min = 0;}
	if(max == undefined){max = 10000;}
	var amount_found = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if((color == undefined || match_array_values(color, card_info['color']) == true) && min <= card_info['used_in_recipes'] && max >= card_info['used_in_recipes'] && card_info['type'] != 'fragment' && card_info['type'] != 'consumable')
		{
			console.log(card_info['used_in_recipes'] + ' - ' + card_id + '(' + card_info['value'] + ')');
			amount_found++;
		}
	});
	return amount_found;
}

function check_not_used_in_recipes(){
	var min_value = 0;
	var min_card_id = '';
	var not_used_amount = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['used_in_recipes'] == undefined && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'artifact' || card_info['type'] == 'spell') && card_info['pick_chance'] > 0)
		{
			if(card_info['value'] < min_value || min_value == 0)
			{
				min_value = card_info['value'];
				min_card_id = card_id;
			}
			not_used_amount++;
			console.log(card_id);
		}
	});
	console.log('min value: ' + min_value + ' - ' + min_card_id);
	console.log('not used: ' + not_used_amount);
}

function show_cards_with_value(min,max,color){
	var card_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if((min == undefined || card_info['value'] >= min) && (max == undefined || card_info['value'] <= max) && (color == undefined || card_info['color'][0] == color))
		{
			console.log(card_id + ': ' + card_info['value']);
			card_count++;
		}
	});
	console.log('cards found: ' + card_count);
}

var namechanges = {

}

function check_card_namechanges(gamedata){
	eachoa(gamedata['owned_cards'], function(owned_card_id, owned_amount){
		eachoa(namechanges, function(old_name, new_name){
			if(owned_card_id == old_name)
			{
				if(gamedata['owned_cards'][new_name] == undefined)
				{
					gamedata['owned_cards'][new_name] = owned_amount;
				}
				else
				{
					gamedata['owned_cards'][new_name] += owned_amount;
				}
				delete gamedata['owned_cards'][old_name];
			}
		});
		if(all_available_cards[owned_card_id] == undefined)
		{
			console.log('deleting ' + owned_card_id);
			delete gamedata['owned_cards'][owned_card_id];
		}
	});
	eachoa(gamedata['known_recipes'], function(owned_card_id, owned_amount){
		eachoa(namechanges, function(old_name, new_name){
			if(owned_card_id == old_name)
			{
				if(gamedata['known_recipes'][new_name] == undefined)
				{
					gamedata['known_recipes'][new_name] = true;
				}
				delete gamedata['known_recipes'][old_name];
			}
		});
	});
	eachoa(gamedata['decks'], function(owned_deck_id, deck){
		eachoa(deck, function(card_id, card_amount){
			eachoa(namechanges, function(old_name, new_name){
				if(card_id == old_name)
				{
					if(gamedata['decks'][owned_deck_id][new_name] == undefined)
					{
						gamedata['decks'][owned_deck_id][new_name] = card_amount;
					}
					delete gamedata['decks'][owned_deck_id][old_name];
				}
			});
		});
	});

	eachoa(namechanges, function(old_name, new_name){

		//delete all_available_cards[old_name];
		
	});


	return gamedata;
}

var last_card_calculated = '';

function calc_next(show_rounded){
	if(gamedata['last_card_calculated'] != undefined)
	{
		last_card_calculated = gamedata['last_card_calculated'];
	}
	var found_next = false;
	var found_current = false;
	var last_card = '';
	eachoa(all_available_cards, function(card_id, card_info){
		if((found_current == true && found_next == false) || (last_card_calculated == '' && found_next == false))
		{
			if(card_info['type'] != 'cardback' && card_info['pick_chance'] > 0)
			{
				found_next = card_id;
			}
		}
		if(card_id == last_card_calculated)
		{
			found_current = true;
		}
		last_card = card_id;
	});
	if(last_card_calculated == last_card)
	{
		gamedata['last_card_calculated'] = '';
		last_card_calculated = '';
		calc_next();
	}
	else
	{
		last_card_calculated = found_next;
		gamedata['last_card_calculated'] = last_card_calculated;
		saveToLocalStorage();
		console.log('--- ' + found_next + ' ---');
		calculate_card_time(found_next, true);
	}	
}

function calc_last(){
	if(gamedata['last_card_calculated'] != undefined)
	{
		console.log('--- ' + gamedata['last_card_calculated'] + ' ---');
		calculate_card_time(gamedata['last_card_calculated'], true);
	}
}

function calculate_card_time(card_id, show_calc, hero_version){
	var base_hero_hp = 2;
	var card = all_available_cards[card_id];
	if(hero_version != undefined && hero_version == true && card['hero_version'] != undefined)
	{
		card = card['hero_version'];
	}
	var calculated_time = 0;
	var calculated_time_on_top = 0;
	var min_level_costs = {};

	/*if(card['power'] > 0)
	{
		calculated_time += card['power'] * 2;
	}*/
	if(card['health'] > 0 && (hero_version == undefined || hero_version == false))
	{
		calculated_time += card['health'];
		if(show_calc!=undefined){console.log('health: ' + card['health'] + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}
	if(card['armor'] > 0 && (hero_version == undefined || hero_version == false))
	{
		calculated_time += card['armor'] / 2;
		if(show_calc!=undefined){console.log('armor: ' + card['armor'] + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}
	/*if(card['health'] > 0 && hero_version != undefined && hero_version == true)
	{
		calculated_time += base_hero_hp;
		if(show_calc!=undefined){console.log('health: ' + base_hero_hp + ' points');}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}*/

	var skill_total_factor = 1;
	var average_hits = 0;
	var average_hit_cost = 0;

	eachoa(card['abilities'], function(ability_id, ability_level){
		if(all_abilities[ability_id] == undefined){console.log(ability_id);}
		var ability = all_abilities[ability_id];
		var level_cost = 1;

		// CHECK USED
		/*all_abilities[ability_id]['used'] = true;
		eachoa(ability['effects'], function(effect_id, effect_info){
			if((effect_info['type'] == 'grant_skill' || effect_info['type'] == 'set_skill') && all_abilities[effect_info['skill_id']] != undefined)
			{
				all_abilities[effect_info['skill_id']]['used'] = true;
			}
			if(effect_info['type'] == 'random_ability')
			{
				eachoa(effect_info['ability_options'], function(option_id, ability_option){
					if(all_abilities[ability_option] != undefined)
					{
						all_abilities[ability_option]['used'] = true;
					}
				});
				
			}
		});*/
		

		if(ability['level_cost_cum'] != undefined)
		{
			var temp_level_cost = 0;
			for (var i = 1; i <= ability_level; i++) {
				temp_level_cost += i;
			}
			ability_level = temp_level_cost;
		}

		if(ability['average_hits'] != undefined)
		{
			if(ability['average_hits'] == 'ability_level')
			{
				average_hits += ability_level;
			}
			else
			{
				average_hits += ability['average_hits'];
			}
			if(show_calc!=undefined){console.log(ability_id + ': average_hits + ' + ability['average_hits'] + ' = ' + average_hits);}
		}
		if(ability['average_hit_cost_spell'] != undefined && card['type'] == 'spell')
		{
			average_hit_cost += ability['average_hit_cost_spell'] * ability_level;
			if(show_calc!=undefined){console.log(ability_id + ': average_hit_cost_spell + ' + (ability['average_hit_cost_spell'] * ability_level) + ' = ' + average_hit_cost);}
		}
		else
		{
			if(ability['average_hit_cost'] != undefined)
			{
				average_hit_cost += ability['average_hit_cost'] * ability_level;
				if(show_calc!=undefined){console.log(ability_id + ': average_hit_cost + ' + (ability['average_hit_cost'] * ability_level) + ' = ' + average_hit_cost);}
			}
		}
		
		if(ability['level_cost'] != undefined)
		{
			if(card['type'] == 'spell' && ability['level_cost_spell'] != undefined)
			{
				level_cost = ability['level_cost_spell'];
				if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_spell'] + ' points (spell)');}
			}
			else
			{
				if(card['type'] == 'artifact' && ability['level_cost_artifact'] != undefined)
				{
					level_cost = ability['level_cost_artifact'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_artifact'] + ' points (artifact)');}
				}
				else
				{
					level_cost = ability['level_cost'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost'] + ' points');}
				}
			}
			if(hero_version != undefined && hero_version == true && ability['level_cost_hero'] != undefined)
			{
				level_cost = ability['level_cost_hero'];
				if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_hero'] + ' points (hero)');}
			}
			if(hero_version == undefined || hero_version == false)
			{
				if(card['type'] == 'structure' && ability['level_cost_structure'] != undefined)
				{
					level_cost = ability['level_cost_structure'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_structure'] + ' points (structure)');}
				}
				if(card['type'] == 'creature' && ability['level_cost_creature'] != undefined)
				{
					level_cost = ability['level_cost_creature'];
					if(show_calc!=undefined){console.log(ability_id + ': ' + ability['level_cost_creature'] + ' points (creature)');}
				}
			}
		}
		else
		{
			console.log(ability_id + ' needs a factor, defaulting to 1');
		}
		if(ability['cost_factor'] != undefined && card[ability['cost_factor']] != undefined && (ability['cost_factor'] != 'health' || hero_version == undefined || hero_version == false))
		{
			if(ability['cost_factor'] == 'power' && card['potential_power'] != undefined)
			{
				level_cost *= card['potential_power'];
				if(show_calc!=undefined){console.log(ability_id + ': x' + card[ability['cost_factor']] + '');}
			}
			else
			{
				level_cost *= card[ability['cost_factor']];
				if(show_calc!=undefined){console.log(ability_id + ': x' + card[ability['cost_factor']] + '');}
			}
		}
		eachoa(ability['ability_level_cost_factors'], function(ability_cost_factor_id, ability_cost_factor_amount){
			if(card['abilities'][ability_cost_factor_id] != undefined)
			{
				level_cost *= (ability_cost_factor_amount * card['abilities'][ability_cost_factor_id]);
				if(show_calc!=undefined){console.log(ability_cost_factor_id + ': x' + ability_cost_factor_amount);}
			}
		});
		if(ability['cost_factor'] != undefined && card[ability['cost_factor']] != undefined && ability['cost_factor'] == 'health' && hero_version != undefined && hero_version == true)
		{
			level_cost *= base_hero_hp;
			if(show_calc!=undefined){console.log(ability_id + ': x' + base_hero_hp);}
		}
		if(ability['cost_factor'] != undefined && ability['cost_factor'] == 'full')
		{
			if(level_cost > 0)
			{
				skill_total_factor *= 1 + (ability_level * level_cost);
				if(show_calc!=undefined){console.log(ability_id + ' full: +' + (ability_level * level_cost) + '');}
				if(show_calc!=undefined){console.log(' factor = ' + skill_total_factor);}
			}
			else
			{
				skill_total_factor /= (1 + (ability_level * (level_cost * -1)));
				if(show_calc!=undefined){console.log(ability_id + ' full: /' + (1 + (ability_level * (level_cost * -1))) + '');}
				if(show_calc!=undefined){console.log(' factor = ' + skill_total_factor);}
			}
		}
		else
		{
			if(ability['cost_on_top'] == undefined)
			{
				var total_skill_cost = ability_level * level_cost;
				if(ability['min_cost'] != undefined && ability['min_cost'] > total_skill_cost)
				{
					if(show_calc!=undefined){console.log(ability_id + ' min cost: ' + (ability['min_cost']) + ' points');}
					if((/*test_mode == true || */show_calc!=undefined) && ability['min_cost'] > (ability_level + 1) * level_cost && (ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health')))
					{
						console.log(card_id + ' could use more ' + ability_id + ' (' + level_cost + '/' + ability['min_cost'] + ') min_cost');
					}
					total_skill_cost = ability['min_cost'];
				}
				calculated_time += total_skill_cost;
				if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points');}
			}
			else
			{
				var total_skill_cost = ability_level * level_cost;
				if(ability['min_cost'] != undefined && ability['min_cost'] > total_skill_cost)
				{
					if(show_calc!=undefined){console.log(ability_id + ' min cost: ' + (ability['min_cost']) + ' points');}
					if((/*test_mode == true || */show_calc!=undefined) && ability['min_cost'] > (ability_level + 1) * level_cost && (ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health')))
					{
						console.log(card_id + ' could use more ' + ability_id + ' (' + level_cost + '/' + ability['min_cost'] + ') min_cost');
					}
					total_skill_cost = ability['min_cost'];
				}
				calculated_time_on_top += total_skill_cost;
				if(show_calc!=undefined){console.log(ability_id + ' total: ' + (total_skill_cost) + ' points (on top)');}
			}
		}
		if(ability['cost_adjustment'] != undefined)
		{
			calculated_time += ability['cost_adjustment'];
			if(show_calc!=undefined){console.log('adjustment: ' + ability['cost_adjustment']);}
		}
		if(ability['additional_levels_cost'] != undefined && ability_level > 1)
		{
			calculated_time += ability['additional_levels_cost'] * (ability_level - 1);
			if(show_calc!=undefined){console.log('additional_levels_cost: ' + (ability['additional_levels_cost'] * (ability_level - 1)));}
		}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
		if(ability['cost_factor'] == undefined || (ability['cost_factor'] != 'full' && ability['cost_factor'] != 'health'))
		{
			min_level_costs[ability_id] = level_cost;
		}

	});

	if(average_hits > 0 && average_hit_cost > 0)
	{
		calculated_time += average_hits * average_hit_cost;
		if(show_calc!=undefined){console.log('average_hits: ' + average_hits);}
		if(show_calc!=undefined){console.log('average_hit_cost: ' + average_hit_cost);}
		if(show_calc!=undefined){console.log('total_hit_cost: ' + (average_hits * average_hit_cost));}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	calculated_time *= skill_total_factor;
	if(skill_total_factor != 1)
	{
		if(show_calc!=undefined){console.log('total_factor: ' + skill_total_factor);}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	if(calculated_time_on_top > 0)
	{
		calculated_time += calculated_time_on_top;
		if(show_calc!=undefined){console.log('total on top = ' + calculated_time_on_top);}
		if(show_calc!=undefined){console.log('--- total = ' + calculated_time);}
	}

	/*if(count_object(card['color']) == 1 && card['color'][0] == 'colorless' && (hero_version == undefined || hero_version == false))
	{
		calculated_time += 1;
		if(show_calc!=undefined){console.log('colorless: +1');}
	}*/

	if(card['type'] == 'structure' /*&& card['power'] != false*/)
	{
		calculated_time += 0.5;
		if(show_calc!=undefined){console.log('structure: +0.5');}
	}

	if(count_object(card['color']) == 2)
	{
		calculated_time -= 1;
		if(show_calc!=undefined){console.log('duocolor: -1');}
	}

	if(card['type'] == 'artifact' || card['type'] == 'spell')
	{
		if(card['type'] == 'spell')
		{
			//calculated_time /= 3;
			//if(show_calc!=undefined){console.log('spell: /3 = ' + calculated_time);}
			//calculated_time -= 6;
			//if(show_calc!=undefined){console.log('spell: -6 = ' + calculated_time);}
			/*calculated_time -= 5;
			if(show_calc!=undefined){console.log('spell: -5 = ' + calculated_time);}*/
			calculated_time = calculated_time / 2;
			if(show_calc!=undefined){console.log('spell: /2 = ' + calculated_time);}
		}
		if(card['type'] == 'artifact' && (card['selfdestructs'] == undefined || card['selfdestructs'] == false))
		{
			calculated_time *= 2;
			if(show_calc!=undefined){console.log('artifact: x2 = ' + calculated_time);}
		}
	}
	else
	{
		if(hero_version == undefined || hero_version == false)
		{
			calculated_time -= 6;
			if(show_calc!=undefined){console.log('-6 = ' + calculated_time);}
		}
	}

	/*if(card['type'] == 'spell')
	{
		calculated_time *= 0.5;
		if(show_calc!=undefined){console.log('spell: x0.25 = ' + calculated_time);}
	}*/

	if(calculated_time !== false && calculated_time < 0 && card['pick_chance'] > 0)
	{
		console.log(card_id + ' cost = ' + calculated_time);
		//calculated_time = 0;
	}
	if(calculated_time < 0){calculated_time = 0;}
	if(calculated_time !== false && calculated_time < 1 && card['verified'] == undefined && card['pick_chance'] > 0)
	{
		console.log(card_id + ' cost = ' + calculated_time);
		//calculated_time = 0;
	}

	if(calculated_time >= 1 && (hero_version == undefined || hero_version == false))
	{
		var high_card_cost_correction = 1 + ((calculated_time - 1) / 50);
		calculated_time = calculated_time / high_card_cost_correction;
		if(show_calc!=undefined){console.log('expensive card correction: /' + high_card_cost_correction + ' = ' + calculated_time);}
	}

	/*if(card['type'] == 'spell' && calculated_time < 1)
	{
		calculated_time = 1;
		if(show_calc!=undefined){console.log('spell correction: 1');}
	}*/

	if(/*test_mode == true || */show_calc!=undefined)
	{
		var cost_left = Math.ceil(calculated_time) - calculated_time;
		var cost_plus = calculated_time - Math.floor(calculated_time);
		var hero_text = '';
		if(hero_version != undefined && hero_version == true)
		{
			hero_text = ' hero';
		}
		if(cost_left > 0 && (hero_version == undefined || hero_version == false))
		{
			//console.log(min_level_costs);
			eachoa(min_level_costs, function(ability_key, min_level_cost){
				if(min_level_cost <= cost_left && min_level_cost > 0)
				{
					console.log(card_id + hero_text + ' could use more ' + ability_key + ' (' + min_level_cost + '/' + cost_left + ')');
				}
				if(min_level_cost <= (cost_plus * -1) && min_level_cost < 0)
				{
					console.log(card_id + hero_text + ' could use more ' + ability_key + ' (' + min_level_cost + '/' + cost_plus + ')');
				}
			});
		}
		
	}

	return calculated_time;
}

function correct_card_time(time){
	var corrected_time = Math.ceil(time / (1 + (time / 60)) );
	return corrected_time;
}

function show_time_correction(fromtime, totime){
	if(fromtime == undefined){fromtime = 1;}
	if(totime == undefined){totime = 10;}
	for (var i = fromtime; i <= totime; i++) {
		console.log(i + ' => ' + correct_card_time(i));
	}
}

var ideal_hero_hp = 40;
var hero_hp_cost_factor = 4;

var hero_subtype_themes = {
	rogue: 			['subtype_rogue','evade_ability'],
	clerk: 			['subtype_clerk','deck_control_ability'],
	cleric: 		['subtype_cleric','cleanse_ally_ability','active_healing_ability'],
	mermaid: 		['subtype_mermaid'],
	reptile: 		['subtype_reptile'],
	plant: 			['subtype_plant'],
	golem: 			['subtype_golem','repairing_ability','type_structure'],
	witch: 			['subtype_witch','curse_ability'],
	mage: 			['subtype_mage'],
	undead: 		['subtype_undead'],
	elf: 			['subtype_elf'],
	goblin: 		['subtype_goblin'],
	fairy: 			['subtype_fairy'],
	warrior: 		['subtype_warrior','type_creature'],
	animal: 		['subtype_animal'],
	fungus: 		['subtype_fungus','ally_creature_death_proc_ability','ally_unit_card_played_proc_ability'],
	daemon: 		['subtype_daemon'],
	angel: 			['subtype_angel'],
	wall: 			['subtype_wall','projectile_ability'],
	aquatic: 		['subtype_aquatic'],
	ship: 			['subtype_aquatic','subtype_ship'],
	jotnar: 		['subtype_jotnar'],
	gnome: 			['subtype_gnome'],
	royal: 			['subtype_royal'],
	horror: 		['subtype_horror'],
}

function check_card(card_id){
	if(all_available_cards[card_id] != undefined)
	{
		var card_info = all_available_cards[card_id];
		if(card_info['color'] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
		if(card_info['color'][0] != undefined && card_info['color'][0] == 'colorless'){all_available_cards[card_id]['color'] = ['white'];}
		if(card_info['unique'] != undefined && card_info['unique'] == true)
		{
			all_available_cards[card_id]['color'] = ['purple'];
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		if(card_info['abilities'] != undefined && card_info['abilities']['minimum_allies'] != undefined && card_info['abilities']['minimum_allies'] < 5 && card_info['max_in_deck'] == undefined)
		{
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		if(card_info['abilities'] != undefined && card_info['abilities']['minimum_enemies'] != undefined && card_info['abilities']['minimum_enemies'] < 5 && card_info['max_in_deck'] == undefined)
		{
			all_available_cards[card_id]['max_in_deck'] = 1;
		}
		/*if(old_cards[card_id] != undefined)
		{*/
			eachoa(racial_abilities, function(race, racial_ability){
				if(match_array_values(all_available_cards[card_id]['subtypes'], race))
				{
					if(all_available_cards[card_id]['abilities'][racial_ability] == undefined)
					{
						all_available_cards[card_id]['abilities'][racial_ability] = 1;
					}
					if(all_available_cards[card_id]['hero_version'] != undefined)
					{
						if(all_available_cards[card_id]['hero_version']['abilities'][racial_ability] == undefined)
						{
							all_available_cards[card_id]['hero_version']['abilities'][racial_ability] = 1;
						}
					}
				};
			});
		/*}*/
		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			all_available_cards[card_id]['raw_time'] = calculate_card_time(card_id);
			all_available_cards[card_id]['time'] = all_available_cards[card_id]['raw_time'];
		}
		if(card_info['effects'] == undefined)
		{
			all_available_cards[card_id]['effects'] = {};
		}
		if(card_info['hero_version'] != undefined)
		{
			if(card_info['hero_version']['name'] == undefined){card_info['hero_version']['name'] = card_info['name'];};
			if(card_info['hero_version']['type'] == undefined){card_info['hero_version']['type'] = card_info['type'];};
			if(card_info['hero_version']['subtypes'] == undefined){card_info['hero_version']['subtypes'] = card_info['subtypes'];};
			if(card_info['hero_version']['image'] == undefined){card_info['hero_version']['image'] = card_info['image'];};
			if(card_info['hero_version']['image_position'] == undefined && card_info['image_position'] != undefined){card_info['hero_version']['image_position'] = card_info['image_position'];};
			var hero_time = calculate_card_time(card_id, undefined, true);
			//var hero_hp = 50 - ((hero_time - 6) * 5);
			//var hero_hp = ideal_hero_hp / (hero_time / 6);
			var hero_hp = ideal_hero_hp - (hero_time * hero_hp_cost_factor) + (6 * hero_hp_cost_factor);
			if(hero_hp > ideal_hero_hp && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			if(hero_hp < ideal_hero_hp/2 && card_info['hero_version']['verified'] == undefined)
			{
				console.log(card_id + ' hero hp: ' + hero_hp);
			}
			card_info['hero_version']['health'] = Math.ceil(hero_hp);
			//delete card_info['hero_version']['theme'];
			/*if(card_info['hero_version']['theme'] != undefined)
			{*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'muscle') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'muscle';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'defense') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'defense';
				}*/
				/*if(match_array_values(card_info['hero_version']['theme'], 'aoe') == false)
				{
					card_info['hero_version']['theme'][get_highest_key_in_object(card_info['hero_version']['theme']) + 1] = 'aoe';
				}*/

			/*}
			else
			{*/
			if(card_info['hero_version']['theme'] == undefined)
			{
				card_info['hero_version']['theme'] = {};
			}
			eachoa(card_info['hero_version']['subtypes'], function(subtype_key, subtype){
				if(hero_subtype_themes[subtype] != undefined)
				{
					eachoa(hero_subtype_themes[subtype], function(new_subtype_key, new_subtype)
					{
						card_info['hero_version']['theme'][count_object(card_info['hero_version']['theme'])] = new_subtype;
					});
				}
			});
			eachoa(card_info['hero_version']['abilities'], function(ability_id, ability_level){
				if(all_abilities[ability_id] != undefined && all_abilities[ability_id]['hero_tactics'] != undefined)
				{
					eachoa(all_abilities[ability_id]['hero_tactics'], function(tactic_key, tactic_id)
					{
						card_info['hero_version']['theme'][count_object(card_info['hero_version']['theme'])] = tactic_id;
					});
				}
			});
			if(count_object(card_info['hero_version']['theme']) == 0){console.log(card_id + ' has no hero theme');}
			if(card_info['hero_version']['not_theme'] == undefined && card_info['hero_version']['power'] === false)
			{
				card_info['hero_version']['not_theme'] = ['empower_hero_ability'];
			}
			/*}*/
		}

		if(card_info['theme'] == undefined){card_info['theme'] = {};};
		if(card_info['craft_theme'] == undefined || card_info['craft_theme'][0] == undefined){card_info['craft_theme'] = ['type_' + card_info['type']];};
		card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'type_' + card_info['type'];

		eachoa(card_info['subtypes'], function(subtype_id, current_subtype){
			card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = 'subtype_' + current_subtype;
			card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = 'subtype_' + current_subtype;
		});

		eachoa(card_info['abilities'], function(ability_id, ability_level){
			//card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_id + '_ability_name';
			eachoa(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name + '_ability'], card_info['theme']) == false)
				{
					card_info['theme'][get_highest_key_in_object(card_info['theme']) + 1] = '' + ability_subtype_name + '_ability';
				}
			});
			eachoa(all_abilities[ability_id]['ability_craft_subtypes'], function(ability_subtype_id, ability_subtype_name){
				if(match_array_values(['' + ability_subtype_name /*+ '_ability'*/], card_info['craft_theme']) == false && (match_array_values(not_craft_themes, ability_subtype_name) == false))
				{
					card_info['craft_theme'][get_highest_key_in_object(card_info['craft_theme']) + 1] = '' + ability_subtype_name /*+ '_ability'*/;
				}
			});
			
		});

		if(card_info['time'] != undefined && card_info['time'] > 0)
		{
			/*if(card_info['time'] < 40 && correct_card_time(card_info['time'] + 1) == correct_card_time(card_info['time']))
			{
				console.log(card_id + ' too weak');
				show_time_correction(card_info['time'],card_info['time']);
			}
			card_info['time'] = correct_card_time(card_info['time']);*/
			//card_info['time'] = Math.ceil(card_info['time'] / (1 + (card_info['time'] / 60)) );
			card_info['time'] = Math.ceil(card_info['time']);
		}
	    if(card_info['value'] == undefined)
	    {
	    	//console.log(card_info['name']);
	    	card_info['value'] = calculate_card_value(card_id);
	    }
	    if(all_available_cards['card_back_' + card_id] != undefined)
		{
			all_available_cards['card_back_' + card_id]['value'] = card_info['value'] * 25;
		}
	    /*var used_in_recipes = 0;
	    eachoa(all_available_cards, function(other_card_id, other_card_info){
	    	if(other_card_info['recipe'] != undefined && other_card_info['recipe'][card_id] != undefined)
	    	{
	    		used_in_recipes++;
	    	}
	    });
	    card_info['used_in_recipes'] = used_in_recipes;*/
	    if(card_info['old'] == true && card_info['time'] < 1 && card_info['time'] !== false && card_info['pick_chance'] > 0)
	    {
	    	console.log('deleting ' + card_id);
	    	delete all_available_cards[card_id];
	    }
	}
}


var card_check_timeouts = {};

function check_all_cards(){
	
	var cards_checked = 0;
	eachoa(all_available_cards, function(card_id, card_info){
	    /*if(card_info['version'] == undefined || card_info['version'] < 2)
	    {
	    	console.log(card_info['name'] + ' is not version 2');
	        all_available_cards[card_id]['time'] += 2;
	        if(all_available_cards[card_id]['time'] > 0)
	        {
	            all_available_cards[card_id]['time'] -= Math.floor(all_available_cards[card_id]['time'] / 5);
	        }
	    }*/
	    cards_checked++;
	    var card_checking_progress = Math.floor((cards_checked / total_available_card_count) * 100);
	   	card_check_timeouts[cards_checked] = setTimeout(function(){
		    check_card(card_id);
			$('.card_checking_progress').html(card_checking_progress + '%');
		},cards_checked / loading_speed);
	});
	//remove_unused_abilities();
}

//check_all_cards();

var all_available_boosts = {};
var all_card_backs = {};
var random_loot_drops = {};

eachoa(all_available_cards, function(card_id, card_info){
	if(card_info['basic_reward'] != undefined && card_info['basic_reward'] == true && random_loot_drops[card_id] == undefined /*match_array_values(card_id, random_loot_drops) == false*/)
	{
		random_loot_drops[card_id] = 1 / Math.sqrt(Math.sqrt(card_info['value'] * (1 + (card_info['value'] / 10))));
	}
	if(card_info['type'] == 'consumable' && card_info['reward'] != undefined && card_info['reward']['type'] != undefined && card_info['reward']['type'] == 'boost')
	{
		all_available_boosts[card_id] = card_info['boost_pick_chance'];
	}

	if(card_info['type'] == 'cardback')
	{
		all_card_backs[card_id] = card_info['image'];
	}

	if(card_info['pick_chance'] == undefined)
	{
		card_info['pick_chance'] = 0;
	}

	var no_card_back_yet = true;
	eachoa(all_card_backs, function(card_back_id, card_back_image){
		if(card_back_image == card_info['image'])
		{
			no_card_back_yet = false;
		}
	});

	if(no_card_back_yet == true && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact' || card_info['type'] == 'currency'))
	{
		all_available_cards['card_back_' + card_id] = {
			name: 				'card back: ' + card_info['name'],
			//version: 			2,
			non_tradable: 		card_info['non_tradable'],
			value: 				card_info['value'] * 25,
			type: 				'cardback',
			color: 				['green'],
			pick_chance: 		0,
			months_available: 	card_info['months_available'],
			time: 				0,
			image: 				card_info['image'],
			power: 				false,
			armor: 				false,
			health: 			false,
			abilities: 			{},
			reward: 			{
				type: 			'card_back',
				card_back_id: 	'card_back_' + card_id,
				description: 	'Collects this card back.',
				amount_used: 	[1],
			},
		};

		if(card_info['card_back_non_tradable'] == undefined || card_info['card_back_non_tradable'] == true)
		{
			all_available_cards['card_back_' + card_id]['non_tradable'] = true;
		}

		all_card_backs['card_back_' + card_id] = card_info['image'];
	}

});

all_available_cards = sortObj(all_available_cards);
all_card_backs = sortObj(all_card_backs);

function learn_recipe(recipe_id){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_id == recipe_id && card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function learn_all_recipes(){
	if(gamedata['known_recipes'] == undefined){gamedata['known_recipes'] = {};}
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['type'] != 'recipe')
		{
			gamedata['known_recipes'][card_id] = true;
		}
	});
}

function check_no_achievement_yet(card_theme, max_shown){
	var achievable_cardbacks = {};
	var shown = 0;
	eachoa(all_achievements, function(achievement_id, achievement_info){
		eachoa(achievement_info['rewards'], function(rewards_id, rewards_info){
			achievable_cardbacks[rewards_info['reward_id']] = true;
		});
	});
	eachoa(all_available_cards, function(card_id, card_info){
		if((max_shown == undefined || max_shown > shown) && achievable_cardbacks['card_back_' + card_id] == undefined && (card_theme == undefined || match_array_values(card_theme, card_info['theme'])))
		{
			shown++;
			console.log(card_id);
		}
	});
}

function get_all_hero_themes(){
	var all_hero_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			eachoa(card_info['hero_version']['theme'], function(theme_id, theme_name){
				if(all_hero_themes[theme_name] == undefined)
				{
					all_hero_themes[theme_name] = 0;
				}
				all_hero_themes[theme_name]++;
			});
			
		}
	});
	return all_hero_themes;
}

function get_all_aoe_themes(){
	var all_aoe_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(['aoe'], card_info['theme']))
		{
			eachoa(card_info['theme'], function(theme_id, theme_name){
				if(all_aoe_themes[theme_name] == undefined)
				{
					all_aoe_themes[theme_name] = 0;
				}
				all_aoe_themes[theme_name]++;
			});
			
		}
	});
	return all_aoe_themes;
}

function get_all_artifact_themes(){
	var all_aoe_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && card_info['type'] == 'artifact')
		{
			eachoa(card_info['theme'], function(theme_id, theme_name){
				if(all_aoe_themes[theme_name] == undefined)
				{
					all_aoe_themes[theme_name] = 0;
				}
				all_aoe_themes[theme_name]++;
			});
			
		}
	});
	return all_aoe_themes;
}

function check_no_aoe_yet(show_found){
	/*var all_hero_themes = get_all_hero_themes();
	eachoa(all_hero_themes, function(theme, theme_count){
		var found_aoe = false;
		eachoa(all_available_cards, function(card_id, card_info){
			if(match_array_values(theme, card_info['theme']) && match_array_values('aoe', card_info['theme']))
			{
				if(show_found != undefined && show_found == true){console.log(theme + ' aoe found');}
				found_aoe = true;
			}
		});
		if(found_aoe == false)
		{
			console.log(theme);
		}
	});*/
	/*var all_aoe_themes = get_all_aoe_themes();
	eachoa(all_aoe_themes, function(theme, theme_count){
		var found_aoe = false;
		eachoa(all_available_cards, function(card_id, card_info){
			var hero_can_use_aoe = false;
			if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
			if(match_array_values(theme, card_info['hero_version']['theme']))
			{
				if(show_found != undefined && show_found == true){console.log(theme + ' aoe found');}
				found_aoe = true;
			}
		});
		if(found_aoe == false)
		{
			console.log(theme);
		}
	});*/
	var all_aoe_themes = get_all_aoe_themes();
	var good_aoe_themes = {};
	var incomplete_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			eachoa(all_aoe_themes, function(theme, theme_count){
				if(theme != 'aoe' && match_array_values(theme, card_info['hero_version']['theme']))
				{
					hero_can_use_aoe = true;
					if(show_found != undefined && show_found == true){console.log(card_id + ' uses ' + theme + ' aoe');}
				}
			});
			if(hero_can_use_aoe == false)
			{
				incomplete_count++;
				console.log('Needs aoe: ' + card_id);
				/*eachoa(card_info['hero_version']['theme'], function(them_id, theme_name){
					if(theme_name != 'muscle' && theme_name != 'defense' && theme_name != 'aoe')
					{
						if(good_aoe_themes[theme_name] == undefined)
						{
							good_aoe_themes[theme_name] = 0;
						}
						good_aoe_themes[theme_name]++;
					}
				});*/
			}
		}
	});
	if(incomplete_count > 0)
	{
		console.log(all_aoe_themes);
		console.log(incomplete_count);
	}
	else
	{
		console.log('AOE: check!');
	}

}

function check_no_artifact_yet(show_found){
	var all_aoe_themes = get_all_artifact_themes();
	var good_aoe_themes = {};
	var incomplete_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){	
		if(card_info['hero_version'] != undefined && card_info['hero_version']['theme'] != undefined)
		{
			var hero_can_use_aoe = false;
			eachoa(all_aoe_themes, function(theme, theme_count){
				if(theme != 'aoe' && match_array_values(theme, card_info['hero_version']['theme']))
				{
					hero_can_use_aoe = true;
					if(show_found != undefined && show_found == true){console.log(card_id + ' uses ' + theme + ' artifact');}
				}
			});
			if(hero_can_use_aoe == false)
			{
				incomplete_count++;
				console.log('Needs artifact: ' + card_id);
				eachoa(card_info['hero_version']['theme'], function(them_id, theme_name){
					if(theme_name != 'muscle' && theme_name != 'defense' && theme_name != 'aoe')
					{
						if(good_aoe_themes[theme_name] == undefined)
						{
							good_aoe_themes[theme_name] = 0;
						}
						good_aoe_themes[theme_name]++;
					}
				});
			}
		}
	});
	if(incomplete_count > 0)
	{
		console.log(good_aoe_themes);
		console.log(incomplete_count);
	}
	else
	{
		console.log('Artifacts: check!');
	}

}

var all_card_themes = {
	races:[
		//'subtype_dwarf',
		'subtype_elf',
		//'subtype_fairy',
		//'subtype_goblin',
		'subtype_golem',
		'subtype_human',
		//'subtype_jotnar',
		//'subtype_mermaid',
		//'subtype_wanton',
	],
	types:[
		'subtype_warrior',
		'subtype_rogue',
		//'subtype_royal',
		//'subtype_holy',
		'subtype_mage',
	],
	aflictions:[
		'burn_ability',
		'poison_ability',
		'curse_ability',
		'doom_ability',
	],
	movement:[
		//'move_ability',
		'seek_ability',
		'run_away_ability',
		'guard_ability',
		'movement_ability',
	],
	evasion:[
		//'evasion_ability',
		'flying_ability',
		'grant_stealth_ability',
		'evade_ability',
	],
	reduction:[
		'plated_ability',
		//'shield_ability',
		//'resist_fire_ability',
		'resist_magic_ability',
	],
	deck_control:[
		'draw_cards_ability',
		'hasten_ability',
		'slow_ability',
		'discard_enemy_ability',
	],
	elemental:[
		'air_ability',
		//'earth_ability',
		'fire_ability',
		'water_ability',
		'cold_ability',
		'elemental_ability',
	],
	special:[
		'reap_ability',
		//'snipe_ability',
		'stun_ability',
		'empower_ally_ability',
		'enrage_ability',
		//'gain_energy_ability',
		//'restore_hero_ability',
	],
}

function count_card_themes(themes, show_me){
	var lowest = {
		key: '',
		amount: 0,
	};
	var lowest_id = '';
	if(themes != undefined && typeof(themes) == 'string' && all_card_themes[themes] != undefined){themes = all_card_themes[themes];}
	if(themes == undefined){themes = all_card_themes;}
	eachoa(themes, function(theme_key, theme_id){
		var temp_lowest = 0;
		if(typeof(theme_id) == 'string')
		{
			temp_lowest = count_card_theme(theme_id, show_me);
			//console.log(lowest);
			if(temp_lowest > 0 && (temp_lowest < lowest['amount'] || lowest['amount'] == 0))
			{
				lowest['key'] = theme_id;
				lowest['amount'] = temp_lowest;
			}
			
		}
		else
		{
			if(show_me != undefined){console.log('---' + theme_key + '---');}
			//count_card_themes(theme_id);
			var returned_lowest = count_card_themes(theme_id, show_me);
			if(returned_lowest['amount'] > 0 && (returned_lowest['amount'] < lowest['amount'] || lowest['amount'] == 0))
			{
				lowest['key'] = returned_lowest['key'];
				lowest['amount'] = returned_lowest['amount'];
			}
		}
		
	});
	return lowest;
}

function count_card_theme(theme, show_me){
	var total_theme_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined && match_array_values(card_info['theme'], theme)){
			total_theme_count++;
		};
	});
	if(show_me != undefined){console.log(theme + ': ' + total_theme_count)};
	return total_theme_count;
}

function count_all_card_themes(){
	var all_card_themes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['theme'] != undefined){
			eachoa(card_info['theme'], function(theme_id, theme_name){
				if(theme_name != undefined && theme_name.replaceAll('type_','') == theme_name)
				{
					if(all_card_themes[theme_name] == undefined){all_card_themes[theme_name] = 0;}
					all_card_themes[theme_name]++;
				}
			});
		};
	});
	return all_card_themes;
}

function count_card_times(){
	var card_times = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if((card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			if(card_times[card_info['time']] == undefined){card_times[card_info['time']] = 0;}
			card_times[card_info['time']]++;
		}
	});
	return card_times;
}

function count_card_subtypes(type){
	var card_subtypes = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if((type == undefined || card_info['type'] == type) && (card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
		{
			eachoa(card_info['subtypes'], function(useless_key, current_subtype){
				if(card_subtypes[current_subtype] == undefined){card_subtypes[current_subtype] = 0;}
				card_subtypes[current_subtype]++;
			});
		}
	});
	return card_subtypes;
}

function show_card_times(card_time){
	if(card_time != undefined)
	{
		eachoa(all_available_cards, function(card_id, card_info){
			if((card_info['type'] == 'creature' || card_info['type'] == 'structure' || card_info['type'] == 'spell' || card_info['type'] == 'artifact') && card_info['pick_chance'] > 0)
			{
				if(card_info['time'] == card_time)
				{
					console.log(card_id);
				}
			}
		});
	}
}

var default_card = {
		name: 				'',
		type: 				'',
		subtypes: 			[],
		color: 				['colorless'],
		theme: 				[],
		pick_chance: 		1,
		time: 				1,
		image: 				'cards/image.jpg',
		power: 				false,
		armor: 				0,
		health: 			false,
		abilities: 			{},
		verified: 			true,
		hero_version: 			{
			theme: 				[],
			power: 				false,
			armor: 				0,
			health: 			40,
			abilities: 			{},
			verified: 			true,
		},
		quote: '\"\"',
}

function get_stat_based_on_type_and_theme(stat, type, themes, hero_version){
	var possible_powers = {};
	eachoa(all_available_cards, function(card_id, card_info){
		var matches = false;
		if(themes == undefined || count_object(themes) == 0)
		{
			matches = true;
		}
		else
		{
			eachoa(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					eachoa(themes, function(theme_key_2, theme_name_2){
						if(theme_name.indexOf(theme_name_2) !== -1)
						{
							matches = true;
						}
					});
				}
			});
		}
		if(type != undefined && card_info['type'] != type)
		{
			matches = false;
		}
		if(matches == true)
		{
			if(hero_version == undefined || hero_version == false)
			{
				if(possible_powers[card_info[stat]] == undefined)
				{
					possible_powers[card_info[stat]] = 0;
				}
				possible_powers[card_info[stat]] += 1;
			}
			else
			{
				if(card_info['hero_version'] != undefined)
				{
					if(possible_powers[card_info['hero_version'][stat]] == undefined)
					{
						possible_powers[card_info['hero_version'][stat]] = 0;
					}
					possible_powers[card_info['hero_version'][stat]] += 1;
				}
			}
		}
	});
	var chosen_power = (get_random_key_from_object_based_on_num_value(possible_powers));
	if(count_object(possible_powers) < 1){chosen_power = 'false';}
	return chosen_power;
}

function get_skills_based_on_type_and_themes(type, themes, hero_version){
	var possible_skills = {};
	var matched_cards_count = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['type'] == type || type == undefined)
		{
			var matches = 0;
			eachoa(card_info['theme'], function(theme_key, theme_name){
				if(theme_name != undefined)
				{
					eachoa(themes, function(theme_key_2, theme_name_2){
						if(theme_name.indexOf(theme_name_2) !== -1)
						{
							matches += 1;
						}
					});
				}
			});
			if(matches > 0)
			{
				if(hero_version == undefined || hero_version == false)
				{
					eachoa(card_info['abilities'], function(ability_id, ability_level){
						if(possible_skills[ability_id] == undefined)
						{
							possible_skills[ability_id] = 0;
						}
						possible_skills[ability_id] += matches;
					});
					matched_cards_count += matches;
				}
				else
				{
					if(card_info['hero_version'] != undefined)
					{
						eachoa(card_info['hero_version']['abilities'], function(ability_id, ability_level){
						if(possible_skills[ability_id] == undefined)
						{
							possible_skills[ability_id] = 0;
						}
						possible_skills[ability_id] += matches;
					});
					matched_cards_count += matches;
					}
				}
			}
		}
	});
	eachoa(all_abilities, function(ability_id, ability_info){
		var matches = 0;
		eachoa(ability_info['ability_subtypes'], function(theme_key, theme_name){
			if(theme_name != undefined)
			{
				eachoa(themes, function(theme_key_2, theme_name_2){
					if(theme_name.indexOf(theme_name_2) !== -1)
					{
						matches += 1;
					}
				});
			}
		});
		if(matches > 0)
		{
			if(possible_skills[ability_id] == undefined)
			{
				possible_skills[ability_id] = 0;
			}
			possible_skills[ability_id] += matches;
			matched_cards_count += matches;
		}
	});
	var chosen_skills = {};
	eachoa(possible_skills, function(skill_id, skill_count){
		if(Math.random() * matched_cards_count < skill_count || skill_count > matched_cards_count / 2)
		{
			chosen_skills[skill_id] = 1;
		}
	});
	return chosen_skills;
}

function get_name_parts(theme, type){
	var all_name_parts = {};
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && match_array_values(theme, card_info['theme']) > 0 && (type == undefined || card_info['type'] == type))
		{
			var current_card_name = card_info['name'];
			var current_name_parts = current_card_name.split(' ');
			eachoa(current_name_parts, function(useless_key, name_part){
				if(all_name_parts[name_part] == undefined){all_name_parts[name_part] = 0;}
				all_name_parts[name_part]++;
			});
		}
	});
	return all_name_parts;
}

function generate_card(name, subtypes, themes, type, image){
	var new_card = true_copyobject(default_card);
	if(image != undefined)
	{
		new_card['image'] = 'cards/' + image + '.jpg';
	}
	if(name == undefined){name = 'new card';}
	if(name != undefined){new_card['name'] = name;}

	if(type == undefined)
	{
		var all_types = {artifact:true,spell:true,creature:true,structure:true};
		type = get_random_key_from_object(all_types);
	}
	if(type != undefined){new_card['type'] = type;}
	
	if(subtypes == undefined)
	{
		var all_used_subtypes = count_card_subtypes(new_card['type']);
		var chosen_subtype = get_random_key_from_object_based_on_num_value(all_used_subtypes);
		//console.log(all_used_subtypes);
		subtypes = [chosen_subtype];
		//console.log('subtype: ' + chosen_subtype);
	}
	if(subtypes != undefined){new_card['subtypes'] = subtypes;}

	if(themes == undefined)
	{
		if(Math.random() < 1.5)
		{
			var all_card_themes = count_all_card_themes();
			var chosen_theme = get_random_key_from_object(all_card_themes);
			themes = [chosen_theme];
			console.log('theme: ' + chosen_theme);
		}
		else
		{
			var least_used_theme = count_card_themes();
			themes = [least_used_theme['key']];
			console.log('theme: ' + least_used_theme['key']);
		}
	}

	var all_name_parts = get_name_parts(themes, type);
	if(count_object(all_name_parts) < 3){all_name_parts = get_name_parts(themes);}
	//console.log(all_name_parts);
	if(count_object(all_name_parts) > 1)
	{
		var first_name_part = get_random_key_from_object(all_name_parts);
		delete all_name_parts[first_name_part];
		new_card['name'] = first_name_part + ' ' + get_random_key_from_object(all_name_parts);
	}

	var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, false);
	if(type == 'creature' && chosen_power == 'false')
	{
		chosen_power = get_stat_based_on_type_and_theme('power',type, undefined, false);
	}
	if(chosen_power != 'false'){new_card['power'] = parseInt(chosen_power);}
	var chosen_health = get_stat_based_on_type_and_theme('health',type, themes, false);
	if((type == 'creature' || type == 'structure') && chosen_health == 'false')
	{
		chosen_health = get_stat_based_on_type_and_theme('health',type, undefined, false);
	}
	if(chosen_health != 'false'){new_card['health'] = parseInt(chosen_health);}
	var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, false);
	if(count_object(chosen_abilities) == 0){chosen_abilities = get_skills_based_on_type_and_themes(undefined, themes, false);}
	eachoa(chosen_abilities, function(ability_id, ability_level){
		new_card['abilities'][ability_id] = 1;
	});

	if(type == 'creature' || type == 'structure')
	{
		var chosen_power = get_stat_based_on_type_and_theme('power',type, themes, true);
		if(chosen_power != 'false'){new_card['hero_version']['power'] = parseInt(chosen_power);}
		
		eachoa(subtypes, function(subtypes_id, subtype_name){
			new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = 'subtype_' + subtype_name;
		});
		var chosen_abilities = get_skills_based_on_type_and_themes(type, themes, true);
		eachoa(chosen_abilities, function(ability_id, ability_level){
			new_card['hero_version']['abilities'][ability_id] = 1;
			var temp_ability_subtypes = {};
			eachoa(all_abilities[ability_id]['ability_subtypes'], function(ability_subtype_key, ability_subtype_name){
				temp_ability_subtypes[ability_subtype_name] = true;
			});
			eachoa(temp_ability_subtypes, function(ability_subtype_name, ability_subtype_count){
				new_card['hero_version']['theme'][get_highest_key_in_object(new_card['hero_version']['theme']) +1] = ability_subtype_name + '_ability';
			});
			
		});
		//new_card['hero_version']['theme'] = themes;
		
	}
	else
	{
		delete new_card['hero_version'];
	}


	$('.upgrades_container').html(name.replaceAll(' ','_') + ':{<br/>' + parse_card_object(new_card) + '},');
	all_available_cards['temp_card'] = true_copyobject(new_card);
	check_card('temp_card');
	console.log(new_card);
	show_card_details('temp_card');
}

function parse_card_object(card, newline){
	var parsed_object = '';
	eachoa(card, function(stat_id, stat){
		var parsed_stat_id = parseInt(stat_id);
		if(parsed_stat_id != stat_id)
		{
			parsed_object+= stat_id + ': ';
		}
		if(typeof(stat) == 'object')
		{
			if(stat_id == 'hero_version')
			{
				parsed_object+= '{<br/>' + parse_card_object(stat, true) + '},';
			}
			else
			{
				if(stat[0] == undefined && stat[1] == undefined)
				{
					parsed_object+= '{' + parse_card_object(stat, false) + '},';
				}
				else
				{
					parsed_object+= '[' + parse_card_object(stat, false) + '],';
				}
			}
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
		if(typeof(stat) == 'number')
		{
			parsed_object+= stat + ', ';
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
		if(typeof(stat) == 'string')
		{
			parsed_object+= '\'' + stat + '\', ';
			if(newline == undefined || newline == true){parsed_object+='<br/>';}
		}
	});
	return parsed_object;
}

function show_peasant_recipes(){
	var prec = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] != undefined && card_info['recipe']['peasant'] != undefined && count_object(card_info['recipe']) < 2)
		{
			console.log(card_id);
			prec++;
		}
	});
	console.log(prec);
}

function show_no_recipe(){
	var prec = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['recipe'] == undefined && card_info['pick_chance'] > 0)
		{
			console.log(card_id);
			prec++;
		}
	});
	console.log(prec);
}

function generate_all_recipes(){
	var cards_checked = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		cards_checked++;
	    var card_checking_progress = Math.floor((cards_checked / total_available_card_count) * 100);
	   	card_check_timeouts[cards_checked] = setTimeout(function(){
		
			if(card_info['recipe'] == undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				var card_recipe = generate_recipe(card_id);
				if(count_object(card_recipe) > 0)
				{
					card_info['recipe'] = card_recipe;
				}
			}

			if(card_info['recipe'] != undefined && card_info['pick_chance'] > 0 && (card_info['type'] == 'creature' || card_info['type'] == 'spell' || card_info['type'] == 'structure' || card_info['type'] == 'object' || card_info['type'] == 'artifact'))
			{
				all_available_cards['recipe_' + card_id] = {
					name: 				'recipe: ' + card_info['name'],
					version: 			2,
					non_tradable: 		true,
					value: 				card_info['value'],
					type: 				'recipe',
					color: 				['yellow'],
					pick_chance: 		0,
					months_available: 	card_info['months_available'],
					time: 				0,
					image: 				card_info['image'],
					power: 				false,
					armor: 				false,
					health: 			false,
					abilities: 			{auto_learn: 1},
					recipe: 			card_id,
				};
			}
			$('.recipe_generation_progress').html(card_checking_progress + '%');
		},cards_checked / loading_speed);
	});
	
}

function generate_recipe(card_id, cost_left, current_recipe, subtypes_left){
	var original_cost_left = cost_left + 0;
	if(all_available_cards[card_id] != undefined)
	{
		var current_card = all_available_cards[card_id];
		var possible_costs = {};
		var best_match = 0;
		var best_match_id = '';
		var recipe_size = count_object(current_recipe);
		if(cost_left == undefined)
		{
			cost_left = current_card['value'] + 0;
		}
		if(current_recipe == undefined)
		{
			current_recipe = {};
		}
		if(subtypes_left == undefined || count_object(subtypes_left) == 0)
		{
			subtypes_left = true_copyobject(current_card['subtypes']);
		}
		eachoa(subtypes_left, function(subtype_key, current_subtype){
			if(current_subtype == 'human')
			{
				delete subtypes_left[subtype_key];
			}
		});
		
		eachoa(all_available_cards, function(cost_id, cost_info){
			if(/*cost_id != 'peasant' && */(cost_info['value'] < cost_left || (cost_info['value'] <= cost_left && recipe_size > 0)) /*&& (recipe_size > 0 || cost_info['value'] > all_available_cards[card_id]['value'] * 0.4 || all_available_cards[card_id]['value'] < 10)*/ && (recipe_size > 0 || cost_info['value'] <= all_available_cards[card_id]['value'] * 0.9 || all_available_cards[card_id]['value'] < 10) && cost_info['pick_chance'] > 0 && current_recipe[cost_id] == undefined)
			{
				var matched_amount = (match_array_values(current_card['craft_theme'], cost_info['craft_theme'], true));
				matched_amount *= matched_amount;
				//matched_amount = Math.sqrt(matched_amount);
				//matched_amount = matched_amount * 1 + (matched_amount / 4);
				//if(recipe_size == 0){matched_amount *= 2;}
				/*if(cost_info['type'] == all_available_cards[card_id]['type']){
					matched_amount *= 1.2;
					if(matched_amount < 0.25)
					{
						matched_amount = 0.25;
					}
				}
				if(cost_info['type'] != all_available_cards[card_id]['type'] && (cost_info['type'] == 'artifact' || all_available_cards[card_id]['type'] == 'artifact'))
				{
					matched_amount *= 5;
				}*/
				//if(recipe_size > 0 && cost_info['value'] < cost_left * 0.5){matched_amount /= 2;}
				/*var value_match = (cost_info['value'] / cost_left) + 0.2;
				if(value_match > 1){value_match = 1;}
				matched_amount *= value_match;*/
				var subtype_match = match_array_values(subtypes_left, cost_info['subtypes'], true) * 1;
				//if(match_array_values('human', cost_info['subtypes']) && match_array_values('human', subtypes_left) && count_object(cost_info['subtypes']) > 1){subtype_match -= 1.9;}
				//if(cost_info['subtype_craft_factor'] != undefined){subtype_match *= cost_info['subtype_craft_factor'];}
				//if(current_card['subtype_craft_factor'] != undefined){subtype_match *= current_card['subtype_craft_factor'];}
				//subtype_match = sqr(subtype_match);
				if(subtype_match > 0)
				{
					//if(matched_amount < 1){matched_amount = 1;}
					if(recipe_size >= 0 && recipe_size < 3){subtype_match *= 2;}
					matched_amount *= (subtype_match + 0);
					//if(matched_amount < subtype_match){matched_amount = subtype_match;}
				}
				var value_percent = (cost_info['value'] / current_card['value']);
				matched_amount *= value_percent;
				if(matched_amount > 0 && cost_info['used_in_recipes'] != undefined && cost_info['used_in_recipes'] > 0)
				{
					matched_amount /= sqr(sqr(sqr(5 + (cost_info['used_in_recipes'] /** recipe_size*/))));
				}
				if(matched_amount > 0 && (cost_info['used_in_recipes'] == undefined || cost_info['used_in_recipes'] == 0))
				{
					matched_amount *= 5;
				}
				if(matched_amount >= /*sqr*/(recipe_size * 0.25) || (count_object(current_recipe) < 2 && matched_amount > 0))
				{
					possible_costs[cost_id] = matched_amount;
				
					if(matched_amount > best_match || (all_available_cards[best_match_id] != undefined && matched_amount == best_match && all_available_cards[cost_id]['value'] > all_available_cards[best_match_id]['value']))
					{
						best_match = matched_amount;
						best_match_id = cost_id;
					}
				}
			}
		});
		if(best_match_id != '' /*&& best_match_id != 'peasant'*/)
		{
			var cost_amount = Math.floor((cost_left) / all_available_cards[best_match_id]['value']);
			if(cost_amount >= 2 && recipe_size < 2 && cost_left > 4)
			{
				cost_amount = Math.floor((cost_left / 2) / all_available_cards[best_match_id]['value']);
			}
			/*if(cost_amount > 10)
			{
				cost_amount = 10;
			}*/
			eachoa(subtypes_left, function(subtype_id, subtype_name){
				if(match_array_values(subtype_name, all_available_cards[best_match_id]['subtypes']))
				{
					delete subtypes_left[subtype_id];
				}
			});
			current_recipe[best_match_id] = cost_amount;
			if(all_available_cards[best_match_id]['used_in_recipes'] == undefined){all_available_cards[best_match_id]['used_in_recipes'] = 0;}
			all_available_cards[best_match_id]['used_in_recipes']++;
			cost_left -= all_available_cards[best_match_id]['value'] * cost_amount;
			if(cost_left > all_available_cards[card_id]['value'] / 10)
			{
				current_recipe = generate_recipe(card_id, cost_left, current_recipe, subtypes_left);
			}
		}
		else
		{
			/*if(count_object(current_recipe) == 1)
			{
				eachoa(current_recipe, function(recipe_cost_id, recipe_cost_amount){
					current_recipe[recipe_cost_id] = Math.floor(all_available_cards[card_id]['value'] / all_available_cards[recipe_cost_id]['value']);
					var value_left = all_available_cards[card_id]['value'] - (current_recipe[recipe_cost_id] * all_available_cards[recipe_cost_id]['value']);
					if(current_recipe[recipe_cost_id] == 1 && value_left > 1)
					{
						current_recipe['peasant'] = Math.ceil(value_left / 2);
						all_available_cards['peasant']['used_in_recipes']++;
					}
				});
			}*/
			if(count_object(current_recipe) == 0 && cost_left > 0 && current_recipe['peasant'] == undefined && card_id != 'peasant' && all_available_cards[card_id]['value'] < 10)
			{
				current_recipe['peasant'] = Math.ceil(cost_left / 1.25);
				if(all_available_cards['peasant']['used_in_recipes'] == undefined){all_available_cards['peasant']['used_in_recipes'] = 0;}
				all_available_cards['peasant']['used_in_recipes']++;
			}
			
		}
		return current_recipe;
	}
}

function find_cards_not_used_in_recipe(value_max, value_min, show_each){
	if(value_max == undefined){value_max = 100000000;}
	if(value_min == undefined){value_min = 0;}
	var not_used_amount = 0;
	eachoa(all_available_cards, function(card_id, card_info){
		if(card_info['pick_chance'] > 0 && (card_info['used_in_recipes'] == undefined || card_info['used_in_recipes'] == 0) && card_info['value'] <= value_max && card_info['value'] >= value_min)
		{
			if(show_each != undefined && show_each == true)
			{
				console.log(card_id + ', value: ' + card_info['value']);
			}
			not_used_amount++;
		}
	});
	return(not_used_amount);
}

function set_all_enemy_deck_cards(card_id){
	eachoa(gamedata['current_summon']['deck'], function(card_key, card_info){
		gamedata['current_summon']['deck'][card_key]['card_id'] = card_id;
	});
}

function check_unused_abilities(card_type, show_unused){
	if(card_type != undefined){console.log('checking ' + card_type + ' for unused abilities');}
	var unused_amount = 0;
	eachoa(all_abilities, function(ability_id, ability_info){
		if(ability_info['not_used'] == undefined)
		{
			var ability_used = false;
			eachoa(all_available_cards, function(card_id, card_info){
				if(card_type == undefined || card_type == card_info['type'])
				{
					if(card_info['abilities'][ability_id] != undefined || (card_info['hero_version'] != undefined && card_info['hero_version']['abilities'][ability_id] != undefined))
					{
						ability_used = true;
					}
				}
			});
			if(ability_used == false)
			{
				unused_amount += 1;
				if(show_unused != undefined && show_unused == true)
				{
					console.log(ability_id);
				}
			}
		}
	});
	return unused_amount;
}

function check_deck_building(){
	check_no_aoe_yet();
	check_no_artifact_yet();
	var not_used = find_cards_not_used_in_recipe(500);
	if(not_used > 0)
	{
		not_used = find_cards_not_used_in_recipe(500, 0, true);
	}
}

function check_double_card_images(){
	eachoa(all_available_cards, function(card_id, card_info){
		var current_card_image = '';
		if(card_info['type'] != 'cardback' && card_info['type'] != 'recipe' && card_info['image'] != undefined)
		{
			current_card_image = get_card_image_filename(card_id);
		}
		if(current_card_image != '')
		{
			eachoa(all_available_cards, function(card_id_2, card_info_2){
				if(card_id != card_id_2 && card_info_2['type'] != 'cardback' && card_info_2['type'] != 'recipe' && card_info_2['image'] != undefined)
				{
					var next_card_image = get_card_image_filename(card_id_2);
					if(current_card_image == next_card_image && count_object(current_card_image.split('-')) > 1)
					{
						console.log(card_id + ' has the same image as ' + card_id_2 + ' (' + current_card_image + ')');
					}
				}
			});
		}
	});
}

function get_card_image_filename(card_id){
	var current_card_image = '';
	if(all_available_cards[card_id] != undefined && all_available_cards[card_id]['image'] != undefined)
	{
		current_card_image = all_available_cards[card_id]['image'] + '';
		current_card_image = current_card_image.split('/');
		var last_key = count_object(current_card_image) - 1;
		current_card_image = current_card_image[last_key];
	}
	return current_card_image;
}
var all_quests = {
	stinger:{
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
	},
};

var all_achievements = {
	arcane_elf:{
		name: 			'arcane elf',
		description: 	'Kill an enemy elf hero with an arcane bolt.',
		card_image: 	'arcane_elf_mage',
		objective: 		'enemy_elf_hero_killed_by_arcane_bolts',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_arcane_elf_mage',
				reward_amount: 1,
			},
		},
	},
	arcane_trickster:{
		name: 			'arcane trickster',
		description: 	'Kill the enemy hero with an arcane bolt.',
		card_image: 	'arcane_trickster',
		objective: 		'enemy_hero_killed_by_arcane_bolts',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_arcane_trickster',
				reward_amount: 1,
			},
		},
	},
	broken:{
		name: 			'broken',
		description: 	'Break a breaker.',
		card_image: 	'breaker',
		objective: 		'breaker_affected_by_break',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_breaker',
				reward_amount: 1,
			},
		},
	},
	chemical_warfare:{
		name: 			'chemical warfare',
		description: 	'Poison an alchemist.',
		card_image: 	'alchemist',
		objective: 		'alchemist_affected_by_poison',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_alchemist',
				reward_amount: 1,
			},
		},
	},
	donkey:{
		name: 			'donkey!',
		description: 	'Make a donkey fly.',
		card_image: 	'donkey',
		objective: 		'donkey_affected_by_grant_flying',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_donkey',
				reward_amount: 1,
			},
		},
	},
	fiery_frenzy:{
		name: 			'fiery frenzy',
		description: 	'Kill the enemy hero with a fire ability.',
		card_image: 	'fire_bolt',
		objective: 		'enemy_hero_killed_by_fire',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_fire_bolt',
				reward_amount: 1,
			},
		},
	},
	fixed_election:{
		name: 			'fixed election',
		description: 	'Bless a politician.',
		card_image: 	'politician',
		objective: 		'politician_affected_by_grant_bless',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_politician',
				reward_amount: 1,
			},
		},
	},
	flooded:{
		name: 			'flooded',
		description: 	'Kill 1000 enemy creatures with a water ability.',
		card_image: 	'flood',
		objective: 		'enemy_creature_killed_by_water',
		amount: 		1000,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_flood',
				reward_amount: 1,
			},
		},
	},
	forced_labor:{
		name: 			'forced labor',
		description: 	'Backlash a conscript.',
		card_image: 	'backlash',
		objective: 		'conscript_affected_by_backlash',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_backlash',
				reward_amount: 1,
			},
		},
	},
	frog_legs:{
		name: 			'frog legs',
		description: 	'Consume or feast on a frog.',
		card_image: 	'frog',
		objective: 		'frog_affected_by_feast',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_frog',
				reward_amount: 1,
			},
		},
	},
	glacial_glory:{
		name: 			'glacial glory',
		description: 	'Kill the enemy hero with a cold ability.',
		card_image: 	'frozen_claw',
		objective: 		'enemy_hero_killed_by_cold',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_frozen_claw',
				reward_amount: 1,
			},
		},
	},
	incineration:{
		name: 			'incineration',
		description: 	'Kill the enemy hero with conflagrate.',
		card_image: 	'incineration',
		objective: 		'enemy_hero_killed_by_conflagrate',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_incineration',
				reward_amount: 1,
			},
		},
	},
	lamb_chops:{
		name: 			'lamb chops',
		description: 	'Sacrifice a lamb.',
		card_image: 	'lamb',
		objective: 		'lamb_affected_by_sacrifice',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_lamb',
				reward_amount: 1,
			},
		},
	},
	magic_muscles:{
		name: 			'magic muscles',
		description: 	'Empower a mage.',
		card_image: 	'arcane_axe',
		objective: 		'mage_affected_by_empower_ally',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_arcane_axe',
				reward_amount: 1,
			},
		},
	},
	mechanical_play:{
		name: 			'mechanical play',
		description: 	'Hit a snowball golem with a frost bolt.',
		card_image: 	'snowball_golem',
		objective: 		'snowball_golem_affected_by_cold_bolt',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_snowball_golem',
				reward_amount: 1,
			},
		},
	},
	scaredy_cat:{
		name: 			'scaredy-cat',
		description: 	'Use fear on a black cat.',
		card_image: 	'black_cat',
		objective: 		'black_cat_affected_by_fear',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_black_cat',
				reward_amount: 1,
			},
		},
	},
	snowball_fight:{
		name: 			'snowball fight',
		description: 	'Hit a snowballer with a frost bolt.',
		card_image: 	'snowballer',
		objective: 		'snowballer_affected_by_cold_bolt',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_snowballer',
				reward_amount: 1,
			},
		},
	},
	thunderous_victory:{
		name: 			'thunderous victory',
		description: 	'Kill the enemy hero with a lightning ability.',
		card_image: 	'thunderstorm',
		objective: 		'enemy_hero_killed_by_lightning',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_thunderstorm',
				reward_amount: 1,
			},
		},
	},
	watery_win:{
		name: 			'watery win',
		description: 	'Kill the enemy hero with an water ability.',
		card_image: 	'water_mage',
		objective: 		'enemy_hero_killed_by_water',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_water_mage',
				reward_amount: 1,
			},
		},
	},
	windy_win:{
		name: 			'windy win',
		description: 	'Kill the enemy hero with an air ability.',
		card_image: 	'air_bolt',
		objective: 		'enemy_hero_killed_by_air',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_air_bolt',
				reward_amount: 1,
			},
		},
	},
	when_pigs_fly:{
		name: 			'when pigs fly',
		description: 	'Make a boar fly.',
		card_image: 	'boar',
		objective: 		'boar_affected_by_grant_flying',
		amount: 		1,
		hide_details: 	true,
		rewards:{
			0:{
				reward_id: 'chest',
				reward_amount: 1,
			},
			1:{
				reward_id: 'card_back_boar',
				reward_amount: 1,
			},
		},
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
		card_back: 		'cry_for_help',
		steps: 			5,
		no_quest: 		true,
	},
	aquatic:{
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
	},
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
		card_back: 		'arcane_missiles',
		steps: 			6,
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
		card_back: 		'arcane_storm',
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
		steps: 			6,
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
		card_back: 		'arson',
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
		card_back: 		'fire_apprentice',
		steps: 			6,
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
		card_back: 		'mole',
		steps: 			6,
	},
	bless:{
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
		card_back: 		'giant_slug',
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
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
		card_back: 		'bureaucrat',
		steps: 			6,
		no_quest: 		true,
	},
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
		card_back: 		'ignite',
		steps: 			6,
	},
	buy:{
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
		card_back: 		'box_of_tricks',
		steps: 			6,
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
		steps: 			6,
		no_quest: 		true,
	},
	city:{
		name: 			'city',
		description: 	'Play {AMOUNT} structure card(s).',
		objective: 		'structure_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'haunted_house',
		steps: 			6,
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
		card_back: 		'nun',
		steps: 			6,
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
		card_back: 		'gravestone',
		steps: 			5,
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
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
	crafter:{
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
	},
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
		card_back: 		'cursed_skull',
		steps: 			6,
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
		card_back: 		'blade_dancer',
		steps: 			6,
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
		card_back: 		'dark_fate',
		steps: 			5,
		step_effect: 	'min_amount',
		step_amount: 	30,
		no_quest: 		true,
	},
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
		card_back: 		'breaking_ray',
		steps: 			6,
	},
	discard:{
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
		card_back: 		'oracle',
		steps: 			6,
	},
	dragon:{
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
	},
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
		card_back: 		'research',
		steps: 			6,
	},
	duelist:{
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
	},
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
		card_back: 		'flag_carrier',
		steps: 			6,
	},
	eternal:{
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
	},
	fear:{
		name: 			'fear',
		description: 	'Have allies return an enemy to their hand {AMOUNT} time(s).',
		objective: 		'ally_performed_move_enemy_to_hand',
		amount: 	1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'fearful_mask',
		steps: 			6,
	},
	fire:{
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
		card_back: 		'flare',
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	10,
		no_quest: 		true,
	},
	fly:{
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
	},
	fortify:{
		name: 			'fortify',
		description: 	'Have allies fortify an ally {AMOUNT} time(s).',
		objective: 		'ally_performed_fortify',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'armor_smith',
		steps: 			6,
	},
	frost:{
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
	},
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
		card_back: 		'carnivorous_plant',
		steps: 			6,
	},
	gnomeling:{
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
		card_back: 		'bank',
		steps: 			5,
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
		card_back: 		'cadet',
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
		card_back: 		'signaler',
		steps: 			6,
	},
	hunger:{
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
	},
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
		card_back: 		'medic',
		steps: 			6,
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
		card_back: 		'barbarian',
		steps: 			6,
		step_effect: 	'min_amount',
		step_amount: 	5,
		no_quest: 		true,
	},
	heist:{
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
		card_back: 		'burglar',
		steps: 			6,
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
		card_back: 		'pigeon',
		steps: 			6,
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
		card_back: 		'conscript',
		steps: 			6,
	},
	imp_lord:{
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
	},
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
		card_back: 		'fencer',
		steps: 			6,
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
		card_back: 		'witchs_initiate',
		steps: 			6,
		no_quest: 		true,
	},
	mage:{
		name: 			'mage',
		description: 	'Play or summon {AMOUNT} mage card(s).',
		objective: 		'mage_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'arcane_mage',
		steps: 			6,
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
		card_back: 		'levitate',
		steps: 			6,
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
		card_back: 		'raging_spirit',
		steps: 			6,
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
		card_back: 		'mason',
		steps: 			6,
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
		steps: 			7,
	},
	mouldy:{
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
		card_back: 		'smasher',
		steps: 			6,
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
		card_back: 		'medkit',
		steps: 			6,
	},
	plated:{
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
	},
	plunder:{
		name: 			'plunder',
		description: 	'Have allies break or plunder an artifact or structure {AMOUNT} time(s).',
		objective: 		'ally_performed_break',
		amount: 		0.2,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'pirate',
		steps: 			6,
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
		card_back: 		'viper',
		steps: 			6,
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
		card_back: 		'righteous_lady',
		steps: 			6,
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
		card_back: 		'front_runner',
		steps: 			6,
		step_effect: 	'max_amount',
		step_amount: 	-5,
		no_quest: 		true,
	},
	resist_magic:{
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
	},
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
		steps: 			6,
	},
	ritualist:{
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
		steps: 			6,
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
		card_back: 		'fawn',
		steps: 			6,
	},
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
	},
	scavanger:{
		name: 			'scavanger',
		description: 	'Claim {AMOUNT} floating pickup reward(s).',
		objective: 		'claimed_pickup',
		amount: 		0.5,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'scavanger',
		steps: 			6,
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
		card_back: 		'pirate_aspirant',
		steps: 			6,
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
		steps: 			5,
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
		card_back: 		'vulture',
		steps: 			6,
	},
	slow:{
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
		steps: 			6,
		no_quest: 		true,
	},
	stealth:{
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
		card_back: 		'hornet',
		steps: 			6,
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
		card_back: 		'striker',
		steps: 			6,
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
		card_back: 		'iceblade',
		steps: 			6,
		no_quest: 		true,
	},
	summoner:{
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
		card_back: 		'imp_horde',
		steps: 			6,
	},
	tactician:{
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
		card_back: 		'final_embrace',
		steps: 			4,
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
		card_back: 		'toxic_cloud',
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
		steps: 			6,
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
		card_back: 		'unholy_rite',
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
		card_back: 		'berserker',
		steps: 			6,
	},
	walled:{
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
		card_back: 		'castle',
		steps: 			6,
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
		card_back: 		'shield_warrior',
		steps: 			6,
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
		steps: 			6,
	},
	withering:{
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
		card_back: 		'zombie',
		steps: 			6,
	},
	zoo:{
		name: 			'zoo',
		description: 	'Play or summon {AMOUNT} animal card(s).',
		objective: 		'animal_card_played',
		amount: 		1,
		rewards:{
			0:{
				reward_id: 			'stash',
				reward_amount: 		1
			},
		},
		card_back: 		'cow',
		steps: 			6,
	},
}

var achievement_card_backs = {};

eachoa(all_achievements, function(achievement_id, achievement_info){
	if(achievement_info['image'] == undefined && achievement_info['card_image'] != undefined && all_available_cards[achievement_info['card_image']] != undefined)
	{
		achievement_info['image'] = all_available_cards[achievement_info['card_image']]['image'];
	}
});


eachoa(all_chained_achievements, function(achievement_id, achievement_info){
	if(achievement_info['min_amount'] == undefined && achievement_info['max_amount'] == undefined){all_chained_achievements[achievement_id]['amount'] *= 10;achievement_info['amount'] = all_chained_achievements[achievement_id]['amount'];}
	var steps = 5;
	if(achievement_info['steps'] != undefined){steps = achievement_info['steps'];}
	if(achievement_info['image'] == undefined && achievement_info['card_back'] != undefined){achievement_info['image'] = all_available_cards[achievement_info['card_back']]['image'];}
	if(achievement_info['image_position'] == undefined && achievement_info['card_back'] != undefined && all_available_cards[achievement_info['card_back']]['image_position'] != undefined){achievement_info['image_position'] = all_available_cards[achievement_info['card_back']]['image_position'];}
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
		all_achievements[achievement_id + '_' + i]['description'] = check_plural(description.split("{AMOUNT}").join(numberWithCommas(amount)),amount);
		if(all_achievements[achievement_id + '_' + i]['min_amount'] != undefined)
		{
			description = all_achievements[achievement_id + '_' + i]['description'] + '';
			var min_amount = all_achievements[achievement_id + '_' + i]['min_amount'];
			all_achievements[achievement_id + '_' + i]['description'] = check_plural(description.split("{MIN_AMOUNT}").join(numberWithCommas(min_amount)),min_amount);
		}
		if(all_achievements[achievement_id + '_' + i]['max_amount'] != undefined)
		{
			description = all_achievements[achievement_id + '_' + i]['description'] + '';
			var max_amount = all_achievements[achievement_id + '_' + i]['max_amount'];
			all_achievements[achievement_id + '_' + i]['description'] = check_plural(description.split("{MAX_AMOUNT}").join(numberWithCommas(max_amount)),max_amount);
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
		var quest_amount = achievement_info['amount'] + 0;
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