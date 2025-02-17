var all_old_abilities = {
	
	air_blast:		{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical air damage to all enemy units. Deals double damage to flying units.',
		cannot_proc_while_stunned: true,
		//do_not_pause_between: true,
		scales: 		true,
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
				subtypes: 		['magical','air','air_blast','elemental'],
				amount: 		'ability_level',
				crit_on_has_skills: ['flying'],
				crit_amount_factor: 2,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	5,
		average_hits: 		3,
	},
	air_blast_also:{
		name: 			'also: air blast',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, it also deals {LEVEL} magical air damage to the same targets. Deals double damage to flying targets.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'air',
				type: 			'damage',
				subtypes: 		['magical','air','air_blast','elemental','additional_effect'],
				amount: 		'ability_level',
				crit_on_has_skills: ['flying'],
				crit_amount_factor: 2,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	air_bolt:		{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical air projectile damage to a random enemy unit. Will target the enemy hero if there are no enemy units.',
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
				projectile: 	'air',
				type: 			'damage',
				subtypes: 		['magical','air','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	air_bolt_hv:		{
		name: 			'air bolt',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical air projectile damage to a random enemy unit.',
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
				projectile: 	'air',
				type: 			'damage',
				subtypes: 		['magical','air','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		average_hits: 	1,
	},
	ally_charges:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Makes an ally creature unit with power charge. If used by a creature, it cannot target itself.<br/><i>Charge: This unit will move to a free slot with an opposing unit and gains temporary power equal to the slots moved.</i>',
		max_ally_units: 4,
		min_unopposed_enemy_units: 1,
		scales: 		true,
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
				projectile: 		'go_again',
				type: 				'random_ability',
				ability_options: 	['charge'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	ally_seeks_enemy:{
		name: 			'ally seeks enemy',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'If there is an ally creature unit whithout an opposing enemy unit, this unit will move that creature to a free slot with an opposing unit. If used by a creature, it cannot target itself.',
		cannot_proc_while_stunned: true,
		min_unopposed_enemy_units: 1,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				not_self: 		true,
				has_opposing: 	false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 			'move',
				projectile: 	'teleport',
				safe_slot: 		false,
				placement: 		'random',
				subtypes: 		['movement','seek'],
				amount: 		1,
			}
		},
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	arcane_bolt:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'Deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will only target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
		//do_not_pause_between: true,
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
				//increase_timeout: -500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		'ability_level',
	},
	arcane_bolt_hv:{
		name: 			'arcane bolt',
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'Deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: true,
		//do_not_pause_between: true,
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
				//increase_timeout: -500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	2,
		average_hits: 		'ability_level',
	},
	arcane_bolt_also:{
		name: 			'also: arcane bolt',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, it also deals 1 magical projectile damage to the same target {LEVEL} time(s).',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
		//do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'magic',
				type: 			'damage',
				subtypes: 		['magical','projectile','arcane_bolts','additional_effect'],
				amount: 		1,
				//increase_timeout: -500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	2,
		average_hits: 		'ability_level',
	},
	arcane_entry:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'When played, deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc: 			'on_play',
		proc_amount: 	'ability_level',
		scales: true,
		//do_not_pause_between: true,
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
				//increase_timeout: -500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		average_hits: 		'ability_level',
	},
	awaken:{
		name_color: 	'rgba(55,255,55,0.9)',
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
				subtypes: 		['increase_power','awaken','enrage'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		0,
	},
	battle_rage:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'For each adjacent ally creature, this gains {LEVEL} power until it acts.',
		proc_amount: 	'adjacent_creature_count',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
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
				pause_before: 	500,
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower','enrage'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
		level_cost_hero: 	1,
	},
	berserk:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'When this receives damage, it gains {LEVEL} power permanently. Reduces its maximum health by double that amount.',
		proc: 			'receive_damage',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['empower','empower_ally','berserk'],
				amount: 		'ability_level',
				increase_timeout: -500,
			},
			1:{
				type: 			'reduce_max_health',
				subtypes: 		[],
				amount: 		'ability_level',
				amount_factor: 	2,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	bite:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals 3 physical melee damage to the nearest enemy unit {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
				subtypes: 		['physical','melee'],
				amount: 		3
			}
		},
		animation: 			'attack',
		level_cost: 		6,
		level_cost_spell: 	1.5,
		average_hits: 		'ability_level',
	},
	bolster:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'A random ally gains {LEVEL} temporary health. Cannot target your hero.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				subtypes: 		['bolster'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_spell: 	0.4,
	},
	bolster_also:{
		name: 			'also: bolster',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, the target also gains {LEVEL} temporary health.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','additional_effect'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		level_cost_spell: 	0.4,
	},
	bolster_entries:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'When an ally unit enters the game, this grants it {LEVEL} temporary health.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				not_self: 		true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
	},
	bolster_front:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'The ally unit closest to your hero gains {LEVEL} temporary health. Cannot target your hero.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'left',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
		level_cost_cum: 	true,
	},
	bolster_self:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'This gains {LEVEL} temporary health.',
		proc: 			'basic',
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
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_cum: 	true,
	},
	boost_also:{
		name: 			'also: boost',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, the target also gains {LEVEL} temporary health and power.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally','boost','additional_effect'],
				amount: 		'ability_level',
				increase_timeout: -500,
			},
			1:{
				projectile: 	'power',
				type: 			'grant_temp_health',
				subtypes: 		['bolster','additional_effect'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_cum: 	true,
	},
	boost_beast:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'Grant a random ally animal {LEVEL} temporary power and health. Cannot target your hero and will only target units that use power.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				subtypes: 	['animal'],
				min_hp: 	1,
				min_power: 	0,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally','boost_beast'],
				amount: 		'ability_level',
				increase_timeout: -500,
			},
			1:{
				projectile: 	'power',
				type: 			'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
		level_cost_cum: true,
	},
	boost_human:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'Grant a random ally human {LEVEL} temporary power and health. Cannot target your hero and will only target units that use power.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				subtypes: 	['human'],
				min_hp: 	1,
				min_power: 	0,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level',
				increase_timeout: -500,
			},
			1:{
				projectile: 	'power',
				type: 			'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
		level_cost_cum: true,
	},
	break:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroys an enemy artifact or golem. Can be used up to {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'break',
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
	},
	break_also:{
		name: 			'also: break',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on an artifact, that artifact is also destroyed.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'artifact',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 'broken',
				type: 		'destroy',
				subtypes: 	['break','additional_effect'],
				amount: 	1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 	4,
	},
	breaking_entry:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When played, destroys {LEVEL} enemy artifact(s) or golem(s).',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
		level_cost: 	2,
	},
	bring_artifact:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When played, summons up to {LEVEL} artifact(s).',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
		remove_skill_after_use:'bring_artifact',
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
		level_cost: 		5,
		level_cost_hero: 	2
	},
	bring_clone:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When played, creates {LEVEL} clone(s) of itself. Clones created this way do not have this ability.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use: 'bring_clone',
		not_on_hero: true,
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
				remove_skills: 	'clone_self',
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_factor: 	'full',
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
				type: 		'summon_unit',
				card_id: 	'palisade',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 6,
		level_cost_spell: 3,
	},
	burn:{
		name_color: 	'rgba(255, 55, 55,0.9)',
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
	burn_all:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to all enemy units. Will not target the enemy hero.{BURN}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		do_not_pause_between: true,
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
	burn_ally:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to a random ally unit. Will not target heroes.{BURN}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'ally'
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
		level_cost: 		-2,
	},
	burn_also:{
		name: 			'also: burn',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, it will also apply {LEVEL} burn to the target.{BURN}',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn','additional_effect'],
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
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to any anemy unit that enters the game.{BURN}',
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
				projectile: 		'burn',
				type: 				'apply_burn',
				subtypes: 			['burn'],
				amount: 			'ability_level',
				increase_timeout: 	500,
				pause_before: 		500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	burn_hv:		{
		name: 		'burn',
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to a random enemy unit.{BURN}',
		show_amount: 	true,
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
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	burn_self:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to itself. {BURN}',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'self',
				min_hp: 	1,
				side: 		'ally'
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
		level_cost: 		-2,
	},
	burning_aura:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to any enemy unit or hero that deals melee damage to it. {BURN}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		scales: 		true,
		proc_while_dead: true,
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
	burning_entry:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Applies {LEVEL} burn to all nearby enemy units when played. Will apply the burn to the enemy hero if there are no units nearby.{BURN}',
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
				pause_before: 	500,
				projectile: 	'burn',
				type: 			'apply_burn',
				subtypes: 		['burn'],
				amount: 		'ability_level',
			}
		},
		level_cost: 	1,
	},
	burning_deaths:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} burn to a random enemy unit or hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} burn to a random enemy unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
	carry_away:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
	charge:{
		ability_subtypes: ['charge'],
		name_color: 	'rgba(255,255,255,0.9)',
		ability_subtypes: ['movement_ability','melee_ability'],
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
						subtypes: 	['movement'],
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
									subtypes: 	['charge'],
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
	charge_also:{
		name: 			'also: charge',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit, the target will also try to charge.<br/><i>This unit will move to a free slot with an opposing unit and gains {LEVEL} temporary power for each slot moved.</i>',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 		'charge',
				type: 				'random_ability',
				ability_options: 	['charge'],
				subtypes: 			['additional_effect'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	charm:{
		name_color: 	'rgba(255, 135, 249,0.9)',
		description: 	'Turns the nearest enemy non-undead creature into an ally and gives it the charmed ability. Cannot affect the enemy hero. Can be used {LEVEL} time(s).<br/><i>Charmed: If there are no more then 4 enemy units, this unit has a 50% chance to change sides.</i>',
		max_ally_units: 4,
		proc_amount: 	1,
		reduce_skill_after_use:'charm',
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
		level_cost: 	3,
		level_cost_hero: 1,
	},
	charm_also:{
		name: 			'also: charm',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a non-undead creature unit, the target will also try be charmed.<br/><i>Charmed: If there are no more then 4 enemy units, this unit has a 50% chance to change sides.</i>',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				max_abilities: 	{undead: 0},
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 'music',
				type: 		'change_side',
				subtypes: 	['mental','change_side','charm','additional_effect'],
				amount: 	1,
			},
			1:{
				type: 		'set_skill',
				skill_id: 	'charmed',
				subtypes: 	['additional_effect'],
				amount: 	1
			},
			2:{
				type: 		'enable_to_act',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	charmed:{
		name_color: 	'rgba(255, 135, 249,0.9)',
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
		name_color: 	'rgba(255, 135, 249,0.9)',
		description: 	'When this deals damage to an enemy non-undead creature unit, there is a 50% chance to turn it into an ally and gives it the charmed ability. Cannot affect the enemy hero.<br/><i>Charmed: If there are no more then 4 enemy units, this unit has a 50% chance to change sides.</i>',
		proc: 			'dealt_damage',
		max_ally_units: 4,
		proc_chance: 	50,
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
		level_cost: 	6,
		level_cost_hero: 4,
	},
	cleanse:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Removes {LEVEL} negative effect(s) from a random ally unit or hero. Negative effects are burn, curse, doom and poison.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
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
				projectile: 	'cleanse',
				type: 			'reduce_negative_effects',
				subtypes: 		['cleansing','cleanse'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
		level_cost_spell: 	0.125,
	},
	cleanse_also:{
		name: 			'also: cleanse',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit or hero, it will also remove up to {LEVEL} negative effects from the target. Negative effects are burn, curse, doom and poison.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'cleanse',
				type: 			'reduce_negative_effects',
				subtypes: 		['cleansing','cleanse','additional_effect'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
		level_cost_spell: 	0.125,
	},
	cleanse_self:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Removes {LEVEL} negative effect(s) from itself. Negative effects are burn, curse, doom and poison.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'cleanse',
				type: 			'reduce_negative_effects',
				subtypes: 		['cleansing','cleanse'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.125,
	},
	cleansing_entry:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'When played, removes {LEVEL} negative effect(s) from a random ally unit or hero. Negative effects are burn, curse, doom and poison.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
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
				projectile: 	'cleanse',
				type: 			'reduce_negative_effects',
				subtypes: 		['cleansing','cleanse'],
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.125,
	},
	clone_ally: 	{
		ability_subtypes: ['summon_ally','summon_creature'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Creates a clone of a random ally creature.',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		not_on_hero: true,
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
				subtypes: 		[],
				ability_options: ['clone_target'],
				amount: 		1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 10,
	},
	clone_also:{
		name: 			'also: clone',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit, it will also create up to {LEVEL} clone(s) of the target.',
		proc: 			'performed_ability',
		proc_amount: 	'ability_level',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'random_ability',
				subtypes: 		['additional_effect'],
				ability_options: ['clone_target'],
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		10,
	},
	clone_target: 	{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'### USED BY CLONE ALLY ###',
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
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
		animation: 	'combat_zoom',
	},
	clone_self:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Creates {LEVEL} clone(s) of itself once. Clones created this way do not have this ability.',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use: 'clone_self',
		not_on_hero: true,
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
				remove_skills: 	'clone_self',
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_factor: 	'full',
	},
	clone_self_on_kill:{
		name_color: 	'rgba(255,255,255,0.9)',
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
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.25,
		cost_factor: 	'full'
	},
	cold_aura:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals {LEVEL} physical cold damage to any unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		scales: 		true,
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
				amount: 		'ability_level'
			}
		},
		animation: 			'red_glow',
		level_cost: 		2,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	cold_blast:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} physical cold damage to all enemy units.',
		cannot_proc_while_stunned: true,
		//do_not_pause_between: true,
		scales: 		true,
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
				subtypes: 		['physical','cold','cold_blast','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
		average_hits: 		3,
	},
	cold_blast_also:{
		name: 			'also: cold blast',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit, it will also deal {LEVEL} physical cold damage to the target.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['physical','cold','cold_blast','elemental','additional_effect'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	cold_bolt:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} physical cold projectile damage to a random enemy unit. Will target the enemy hero if there are no enemy units.',
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
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['projectile','physical','cold','cold_bolt'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	cold_bolt_hv:{
		name: 			'cold bolt',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} physical cold projectile damage to a random enemy unit. Will not target the enemy hero.',
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
				projectile: 	'frost',
				type: 			'damage',
				subtypes: 		['projectile','physical','cold','cold_bolt'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	cold_strike:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals physical cold melee damage equal to its power to the opposing unit. Will target the enemy hero if there is no opposing unit.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		proc_amount: 	'ability_level',
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
				subtypes: 		['melee','physical','cold','cold_bolt'],
				amount: 		'origin_power'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		cost_factor: 		'power',
		average_hits: 		'ability_level',
	},
	cold_strike_hv:{
		name: 			'cold strike',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals physical cold melee damage equal to its power to the nearest enemy unit. Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		proc_amount: 	'ability_level',
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
				subtypes: 		['melee','physical','cold','cold_bolt'],
				amount: 		'origin_power'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		cost_factor: 		'power',
		average_hits: 		'ability_level',
	},
	command_ally:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'Gives a random ally unit with at least 1 power {LEVEL} additional turn(s). This ability can only be used once each round. If used by a unit, it cannot target itself.',
		delay: 			1,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				min_power: 		1,
				side: 			'ally',
				not_self: 		true,
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['command'],
				amount: 	1,
				increase_timeout: -250,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	command_also:{
		name: 			'also: command',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit, that unit will also gain {LEVEL} turn(s).',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['command','additional_effect'],
				amount: 	'ability_level',
				increase_timeout: -250,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 	6,
	},
	command_artifact:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'Gives a random ally artifact, that normally acts every round, {LEVEL} additional turn(s). This ability can only be used once each round. If used by an artifact, it cannot target itself.',
		delay: 			1,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'artifact',
				target_amount: 	1,
				has_theme: 		['basic_proc_ability'],
				position: 		'random',
				side: 			'ally',
				not_self: 		true,
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['command'],
				amount: 	1,
				increase_timeout: -250,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	command_beast:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'Gives a random ally animal unit with at least 1 power {LEVEL} additional turn(s). This ability can only be used once each round. If used by a unit, it cannot target itself.',
		delay: 			1,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				subtypes: 		['animal'],
				min_hp: 		1,
				min_power: 		1,
				side: 			'ally',
				not_self: 		true,
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['command','command_beast'],
				amount: 	1,
				increase_timeout: -250,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
		level_cost_hero: 6,
	},
	command_golem:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'A random ally golem unit gains an additional turn.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				subtypes: 		['golem'],
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['command'],
				amount: 	1,
				increase_timeout: -250,
			},
		},
		level_cost: 		5,
		level_cost_spell: 	2,
	},
	command_structure:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'The ally structure unit with the highest cost and at least 1 power gains a turn.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['creature','object'],
				highest_cost: 	true,
				min_hp: 		1,
				min_power: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['command'],
				amount: 	1,
				increase_timeout: -250,
			},
		},
		level_cost: 		5,
		level_cost_spell: 	2,
	},
	conflagrate:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} piercing fire damage to a random burning enemy unit or hero multiplied by the burn it suffers. Removes all burn from the target.',
		cannot_proc_while_stunned: true,
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
			1:{
				type: 			'set_effect_amount',
				effect_name: 	'burning',
				subtypes: 		[],
				amount: 		0,
				increase_timeout: -500,
			},
		},
		animation: 	'combat_zoom',
		average_hits: 		1,
	},
	conflagrate_hv:{
		name: 			'conflagrate',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} piercing fire damage to a random burning enemy unit multiplied by the burn it suffers. Removes all burn from the target.',
		cannot_proc_while_stunned: true,
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
			1:{
				type: 			'set_effect_amount',
				effect_name: 	'burning',
				subtypes: 		[],
				amount: 		0,
				increase_timeout: -500,
			},
		},
		animation: 	'combat_zoom',
		average_hits: 		1,
		level_cost: 		2,
	},
	consume_corpse:{
		ability_subtypes: ['resurrect'],
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this unit\'s health reaches 0, it has a 90% chance to remove an ally creature card from the game. If it does, it comes back to life with {LEVEL} health.',
		proc: 			'own_death',
		proc_chance: 	90,
		proc_while_dead: true,
		scales: 		true,
		min_ally_creature_cards_in_grave: 1,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				max_hp: 		0,
				side: 			'any',
				slot_free: 		true
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
							projectile: 		'resurrect',
							projectile_target: 	'deck',
							type: 				'remove_card',
							side: 				'ally',
						}
					},
					on_success:{
						proc_while_dead: true,
						targets:	{
							0:{
								target: 		'any',
								target_amount: 	1,
								position: 		'self',
								max_hp: 		0,
								side: 			'any',
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
					},
					animation: 		'combat_zoom',
				}
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1.5,
		//cost_factor: 	'full',
	},
	consume_sporeling:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'Destroys a sporeling. If successful, this gains {LEVEL} energy.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'random',
				subtypes: 	'sporeling',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'destroy',
				subtypes: 	['consume'],
				amount: 	1,
				on_success:{
					targets:{
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
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.25,
	},
	consume_sporeling_to_burn:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'Destroys a sporeling. If successful, applies {LEVEL} burn to an enemy unit or hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'random',
				subtypes: 	'sporeling',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'destroy',
				subtypes: 	['consume'],
				amount: 	1,
				on_success:{
					targets:{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'self',
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'random_ability',
							ability_options: ['burn'],
							amount: 	'ability_level',
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
	},
	control_ice:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'Each round, this has a 25% chance to turn a random enemy frozen creature into an ally.',
		proc_chance: 	25,
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['creature','object'],
				subtypes: 		['frozen'],
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'frost',
				type: 		'change_side',
				subtypes: 	['control_enemy'],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	counter:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'If this survives melee damage from an enemy unit or hero, this deals physical melee damage equal to its power to it, {LEVEL} time(s). This cannot counter a counter.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		not_subtypes: 	['counter'],
		need_to_be_alive: true,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		need_power: 	true,
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
		level_cost_hero: 	2,
		cost_factor: 		'power',
		average_hits: 		'ability_level',
	},
	counter_spell:		{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Destroys up to {LEVEL} enemy spell(s).',
		proc: 			'enemy_spell_card_preplayed',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		reduce_skill_after_use:'counter_spell',
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any'
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
	},
	curse:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} curse to a random enemy unit or hero.{CURSE}',
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
	curse_also:{
		name: 			'also: curse',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit or hero, it applies {LEVEL} curse to it as well.{CURSE}',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse','additional_effect'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 1.5,
		level_cost_spell: 0.375,
	},
	curse_hv:{
		name: 			'curse',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} curse to a random enemy unit.{CURSE}',
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
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} curse to all enemy units.{CURSE}',
		do_not_pause_between: true,
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		level_cost: 		6,
		level_cost_hero: 	4,
		level_cost_spell: 	1.5,
	},
	cursed_aura:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} curse to any enemy unit or hero that deals melee damage to it.{CURSE}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		scales: 		true,
		proc_while_dead: true,
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
	},
	cursed_deaths:{
		name: 			'cursed deaths',
		name_color: 	'rgba(160, 95, 250,0.9)',
		show_amount: 	true,
		description: 	'Applies {LEVEL} curse to a random enemy unit or hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
		animation: 		'combat_zoom',
		level_cost: 	1.5,
	},
	cursed_deaths_hv:{
		name: 			'cursed deaths',
		name_color: 	'rgba(160, 95, 250,0.9)',
		show_amount: 	true,
		description: 	'Applies {LEVEL} curse to a random enemy unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	cursed_entry:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Applies {LEVEL} curse to all nearby enemy units when played. Will apply the curse to the enemy hero if there are no enemy units nearby.{CURSE}',
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
				pause_before: 	500,
				projectile: 	'curse',
				type: 			'apply_curse',
				subtypes: 		['magical','curse'],
				amount: 		'ability_level',
			}
		},
		level_cost: 	0.5,
	},
	cursed_touch:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Applies {LEVEL} curse to any unit or hero it deals damage to.{CURSE}',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		scales: 		true,
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
	damage_hero:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Deals {LEVEL} damage to the enemy hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'enemy',
			},
		},
		effects:{
			0:{
				projectile:	'curse',
				type: 		'damage',
				subtypes: 	['direct_damage','damage_hero'],
				amount: 	'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	debilitate:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random enemy creature looses {LEVEL} power and maximum health permanently.',
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
				type: 			'reduce_max_health',
				subtypes: 		['wither'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	debilitate_ally:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random ally creature with at least 2 health looses {LEVEL} power and maximum health permanently.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				min_hp: 		2,
				side: 			'ally'
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
				type: 			'reduce_max_health',
				subtypes: 		[],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		-4,
		level_cost_spell: 	-1,
	},
	delay:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Delays itself for {LEVEL} round(s) if it used any ability.',
		proc: 		'basic',
		cannot_proc_while_stunned: true,
		has_used_ability: true,
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
				type: 		'apply_stun',
				allways_apply: true,
				amount: 	'ability_level',
				amount_factor: 1,
				amount_adjustment: 0,
				pause_before: -500,
				increase_timeout: -500,
			},
		},
		level_cost: 			-0.5,
		level_cost_artifact: 	-1,
		level_cost_cum: 		true,
		cost_factor: 			'full',
	},
	destroy_structure:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroy {LEVEL} enemy non-golem structure unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'destroy_structure',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				not_types: 		['creature','object'],
				not_subtypes: 	['golem'],
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
		level_cost_hero: 1,
	},
	disappear:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'This disappears. If this is not summoned, it moves to the grave.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_grave'],
				new_status: 	'grave',
				side: 			'ally',
			}
		},
		level_cost: 	-1,
		cost_factor: 	'full',
	},
	discard_own:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Moves up to {LEVEL} card(s) from your hand to your grave.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard_own',
		negative_ability: true,
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
				subtypes: 			['deck_control'],
				new_status: 		'grave',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		-5,
		level_cost_hero: 	-2,
	},
	discard:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Moves up to {LEVEL} card(s) from the enemy\'s hand to its grave.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard',
		negative_ability: true,
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
	},
	discard_cheapest:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Moves up to {LEVEL} card(s) from the enemy\'s hand to its grave. Will target the card with the lowest cost.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard_cheapest',
		negative_ability: true,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				can_target_zero: true,
				lowest_cost: 	true,
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
		level_cost: 		8,
		level_cost_hero: 	2,
	},
	draw_on_act:{
		name: 			'draw',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Draw {LEVEL} card(s) if this used another ability.',
		cannot_proc_while_stunned: true,
		min_cards_in_deck: 	1,
		max_hand_cards: 	9,
		has_used_ability: 	true,
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
				subtypes: 			['draw_cards'],
				amount: 			'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		//cost_on_top: 	true,
	},
	draw_once:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Draws a card. Can be used up to {LEVEL} time(s). Will try to do this when played and each turn.',
		cannot_proc_while_stunned: true,
		proc: 			['on_play','basic'],
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'draw_once',
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
				subtypes: 			['draw_cards'],
				amount: 			1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_hero: 2,
		//cost_on_top: 	true,
	},
	doom:{
		name: 			'doom',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} doom to a random enemy unit.{DOOM}',
		cannot_proc_while_stunned: true,
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
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	1.5,
		level_cost_spell: 0.5,
	},
	doom_all:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} doom to all enemy units.{DOOM}',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
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
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 4.5,
		level_cost_spell: 1.5,
	},
	doomed_deaths:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} doom to itself when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		origin_not_self: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		[],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-2,
	},
	dooming_aura:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} doom to any unit it any unit that deals melee damage to it.{DOOM}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
			}
		},
		level_cost: 		1.5,
	},
	dooming_deaths:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} doom to a random enemy unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.5,
	},
	dooming_entry:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When played, applies {LEVEL} doom to all enemy units.{DOOM}',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
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
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	1,
	},
	dooming_touch:{
		name: 			'dooming touch',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} doom to any unit it deals damage to.{DOOM}',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any'
			},
		},
		effects:{
			0:{
				//target_projectile: 'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		level_cost: 		0,
		average_hit_cost: 	0.75,
	},
	drain_life:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Reduces the health of the non-undead enemy creature unit with the highest health by {LEVEL}, and heals itself by the amount reduced.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_types: 	['structure','object'],
				max_abilities: {undead: 0},
				highest_hp: true,
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'reduce_current_health',
				subtypes: 	['drain','drain_life'],
				amount: 	'ability_level',
				on_success:{
					targets:	{
						0:{
							target: 		'unit_or_hero',
							target_amount: 	1,
							position: 		'self',
							damaged: 		true,
							min_hp: 		1,
							side: 			'ally'
						},
					},
					effects:{
						0:{
							projectile: 'drain',
							type: 		'healing',
							subtypes: 	['active_healing'],
							amount: 	'latest_result',
						},
					},
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	drain_life_sv:{
		name: 			'drain life',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Reduces the health of the non-undead enemy creature unit with the highest health by {LEVEL}, and heals your hero by the amount reduced.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_types: 	['structure','object'],
				max_abilities: {undead: 0},
				highest_hp: true,
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'reduce_current_health',
				subtypes: 	['drain','drain_life'],
				amount: 	'ability_level',
				on_success:{
					targets:	{
						0:{
							target: 		'hero',
							target_amount: 	1,
							position: 		'random',
							damaged: 		true,
							min_hp: 		1,
							side: 			'ally'
						},
					},
					effects:{
						0:{
							target_projectile: 'drain',
							type: 		'healing',
							subtypes: 	['active_healing'],
							amount: 	'latest_result',
						},
					},
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	1.5,
	},
	earthquake:{
		name_color: 	'rgba(191, 110, 4,0.9)',
		description: 	'Deals {LEVEL} physical earth damage to all non-flying units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 10,
				position: 	'random',
				max_abilities: 	{flying:0},
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'stone',
				type: 		'damage',
				subtypes: 	['physical','earthquake','earth','elemental'],
				amount: 	'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		average_hits: 		3,
	},
	earth_bolt:		{
		name_color: 	'rgba(255,55,55,0.9)',
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
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	earth_bolt_hv:		{
		name: 			'earth bolt',
		name_color: 	'rgba(255,55,55,0.9)',
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
	eat_sporeling:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'If damaged, destroys a sporeling. If successful, heals itself by {LEVEL}.',
		cannot_proc_while_stunned: true,
		origin_damaged: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'random',
				subtypes: 	'sporeling',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'destroy',
				subtypes: 	['consume'],
				amount: 	1,
				on_success:{
					targets:{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'self',
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'random_ability',
							ability_options: ['regenerate'],
							amount: 	'ability_level',
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
	},
	stone_strike:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals physical melee earth damage equal to its power to the opposing unit. Will target the enemy hero if there is no opposing unit.',
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
				projectile: 	'stone',
				type: 			'damage',
				subtypes: 		['physical','earth','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	stone_strike_hv:{
		name: 			'stone strike',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals physical melee earth damage equal to its power to the nearest enemy unit. Will not target the enemy hero.',
		proc_amount: 	'ability_level',
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
		},
		effects:{
			0:{
				projectile: 	'stone',
				type: 			'damage',
				subtypes: 		['physical','earth','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	echo:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Has a 75% chance to return to its owners hand if this used an ability.',
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
				subtypes: 		['move_ally_to_hand'],
				new_status: 	'hand',
				side: 			'ally',
				//pause_before: 2000,
			}
		},
		cost_factor: 	'full',
	},
	elemental_bolt:{
		ability_subtypes: ['fire','cold','elemental'],
		description: 	'Fires a fire or frost bolt at an enemy, dealing {LEVEL} magical or physical projectile damage. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		//animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	elemental_bolt_hv:{
		ability_subtypes: ['fire','cold','elemental'],
		name: 			'elemental bolt',
		description: 	'Fires a fire or frost bolt at an enemy, dealing {LEVEL} magical or physical projectile damage.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		//animation: 			'combat_zoom',
		level_cost: 		3,
		average_hits: 		1,
	},
	empower_adjacent:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'All adjacent creatures that have power gain {LEVEL} power until they act. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	2,
				position: 		'adjacent',
				not_types: 		['object','structure'],
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
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	1,
	},
	empower_all:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'All ally creatures that have power gain {LEVEL} power until they act. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
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
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	2.25,
	},
	empower_ally:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'A random ally creature that has power gains {LEVEL} power until they act. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	empower_also:{
		name: 			'also: empower',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit, it will also gain {LEVEL} temporary power.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally','additional_effect'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	1.5,
	},
	empower_entries:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'When any ally creature that has power enters the game, it gains {LEVEL} power until they have a turn. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		proc: 			'ally_creature_card_played',
		scales: 		true,
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
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	empowered_by_adjacent:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'For each adjacent ally creature, this gains {LEVEL} power until it acts.',
		proc_amount: 	'adjacent_creature_count',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
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
				pause_before: 	500,
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
		level_cost_hero: 	1.5,
	},
	empowered_grave:{
		ability_subtypes: ['empower','empower_ally'],
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Removes a creature card in your grave from play. If successful, a random ally creature that has power gains {LEVEL} power permanently. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		min_ally_creature_cards_in_grave: 1,
		scales: 		true,
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
				on_success:{
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
							projectile: 		'resurrect',
							projectile_target: 	'deck',
							type: 				'remove_card',
							side: 				'ally',
						}
					},
					on_success:{
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
								type: 			'increase_power',
								subtypes: 		['empower','empower_ally'],
								amount: 		'ability_level'
							},
						},
					},
					animation: 		'combat_zoom',
				}
			},
		},
		level_cost: 	4,
	},
	energised_burn:{
		ability_subtypes: ['burn'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Each turn, if this has any energy, it applies {LEVEL} burn to a random unit or hero for each energy it has and looses all energy.{BURN}',
		proc_amount: 	'origin_energy',
		do_not_pause_between: true,
		scales: 		true,
		targets:{
			0:{
				target: 		'any',
				target_amount: 	1,
				has_effect: 	{effect_name: 'energy', amount: 1, limit: 'min'},
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		[],
				ability_options: ['burn'],
				amount: 		'ability_level',
				on_success:{
					targets:{
						0:{
							target: 		'any',
							target_amount: 	1,
							position: 		'self',
							side: 			'ally',
						},
					},
					effects:{
						1:{
							pause_before: -2000,
							type: 		'apply_energy',
							subtypes: 	[],
							amount: 	-1,
						}
					}
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	energised_burn_hv:{
		name: 			'energised burn',
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Each turn, if this has any energy, it applies {LEVEL} burn to a random unit for each energy it has and looses all energy.{BURN}',
		proc_amount: 	'origin_energy',
		min_enemy_units: 1,
		do_not_pause_between: true,
		scales: 		true,
		targets:{
			0:{
				target: 		'any',
				target_amount: 	1,
				has_effect: 	{effect_name: 'energy', amount: 1, limit: 'min'},
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		[],
				ability_options: ['burn_hv'],
				amount: 		'ability_level',
				on_success:{
					targets:{
						0:{
							target: 		'any',
							target_amount: 	1,
							position: 		'self',
							side: 			'ally',
						},
					},
					effects:{
						1:{
							pause_before: -2000,
							type: 		'apply_energy',
							subtypes: 	[],
							amount: 	-1,
						}
					}
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	energised_doom:{
		ability_subtypes: ['doom'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Each turn, if this has any energy, it applies {LEVEL} doom to a random unit for each energy it has and looses all energy.{DOOM}',
		proc_amount: 	'origin_energy',
		min_enemy_units: 1,
		do_not_pause_between: true,
		targets:{
			0:{
				target: 		'any',
				target_amount: 	1,
				has_effect: 	{effect_name: 'energy', amount: 1, limit: 'min'},
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				type: 			'random_ability',
				subtypes: 		[],
				ability_options: ['doom'],
				amount: 		'ability_level',
				on_success:{
					targets:{
						0:{
							target: 		'any',
							target_amount: 	1,
							position: 		'self',
							side: 			'ally',
						},
					},
					effects:{
						1:{
							pause_before: -2000,
							type: 		'apply_energy',
							subtypes: 	[],
							amount: 	-1,
						}
					}
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	0.5,
	},
	energised_hatch:{
		description: 	'Each turn, if this has {LEVEL} or more energy and there is a free unit slot, this has a 10% chance per energy to summon a random creature with a cost equal to the current energy. If it does, this is destroyed. If there is no unit with a cost equal to the energy, it will summon a random unit in stead.',
		max_ally_units: 4,
		proc_chance: 	'origin_energy',
		proc_factor: 	10,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				has_effect: 	{effect_name: 'energy', amount: 'ability_level', limit: 'min'},
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				subtypes: 	['summon_ally','summon_creature'],
				type: 		'summon_unit',
				card_id: 	'random',
				card_type: 	'creature',
				card_time_min: 'origin_energy',
				card_time: 	'origin_energy',
				amount: 	1
			},
			1:{
				pause_before: -1000,
				type: 		'destroy',
				subtypes: 	[],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.5,
	},
	energised_spellrush:{
		ability_subtypes: 	['hasten','deck_control'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'After any spell is played, uses all energy it has to reduce the time left of the card in your hand, with the highest time left, by the energy used.',
		proc: 			'any_spell_card_played',
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
		level_cost: 	1,
	},
	energised_resurrect:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this unit\'s health reaches 0 and it has {LEVEL} or more energy, it comes back to life with 1 health at the cost of {LEVEL} energy.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				max_hp: 		0,
				has_effect: 	{effect_name: 'energy', amount: 'ability_level', limit: 'min'},
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
			1:{
				type: 		'apply_energy',
				amount: 	'ability_level',
				amount_factor: -1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		-1,
		cost_adjustment: 	5,
		//cost_factor: 	'full',
	},
	energising_deaths:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'Gains {LEVEL} energy when an ally creature is destroyed.',
		proc: 			'ally_creature_death',
		origin_not_self: true,
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
	energising_strikes:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'Gains {LEVEL} energy when it deals damage.',
		proc: 			'dealt_damage',
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
		level_cost: 		0.5,
	},
	enrage:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'When this unit receives damage, it gains {LEVEL} temporary power.',
		proc: 			'receive_damage',
		proc_amount: 	1,
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		scales: 		true,
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
				subtypes: 		['empower','enrage'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
	},
	evade:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Gives this unit a 35% chance to avoid any incoming melee or projectile effect.',
		proc: 			'avoid_effect',
		subtypes: 		['melee','projectile'],
		negated_by_ability: 	['precision'],
		effect: 		35,
		cannot_proc_while_stunned: true,
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
		level_cost: 	0.75,
		level_cost_hero: 1,
		min_cost: 		3,
		cost_factor: 	'health',
	},
	exchange_artifact:{
		ability_subtypes: ['move_ally_to_hand_from_grave'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroys a random ally artifact. If it does, return an artifact card from your grave to your hand. Can be used up to {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		reduce_skill_after_use: 'exchange_artifact',
		targets:	{
			0:{
				target: 	'artifact',
				target_amount: 1,
				position: 	'random',
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'broken',
				type: 		'destroy',
				subtypes: 	[],
				amount: 	1,
				on_success:{
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
							subtypes: 			['move_ally_to_hand_from_grave'],
							new_status: 		'hand',
							side: 				'ally',
						}
					},
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	0.5,
	},
	exchange_enemy_artifact:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroys a random enemy artifact. If it does, restore up to {LEVEL} health of the enemy hero.',
		cannot_proc_while_stunned: true,
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
				subtypes: 	[],
				amount: 	1,
				on_success:{
					targets:	{
						0:{
							target: 	'hero',
							target_amount: 1,
							position: 	'random',
							min_hp: 	1,
							side: 		'enemy',
							damaged: 	true,
						},
					},
					effects:{
						0:{
							projectile:	'healing',
							type: 		'healing',
							subtypes: 	['healing','heal_hero'],
							amount: 	'ability_level'
						}
					},
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-1,
		cost_adjustment: 5
	},
	execute:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Destroys {LEVEL} enemy non-undead creature(s). Will target the creature(s) with the highest cost. Does not effect the enemy hero.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		reduce_skill_after_use:'execute',
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{undead: 0},
				highest_cost: 	true,
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		['death'],
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	10,
	},
	execute_also:{
		name: 			'also: execute',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit, it destroys it as well.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		['death','additional_effect'],
				amount: 		1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	8,
	},
	experiment:{
		ability_subtypes: ['burn','poison','curse','explode'],
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Does something random. It might grant explode to a random unit, poison or curse an enemy unit or burn an ally unit. If there is no target for the chosen effect, it will do nothing.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
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
				type: 			'random_ability',
				subtypes: 		['experiment'],
				ability_options: ['grant_explode','poison_hv','burn_ally','curse_hv'],
				amount: 		'ability_level'
			}
		},
		//animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	3,
	},
	explode:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		show_amount: 	true,
		description: 	'When this unit is destroyed, it deals {LEVEL} physical damage to all nearby units.',
		proc: 			'own_death',
		scales: 		true,
		proc_while_dead: true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 6,
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
	fade:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Power and health are reduced by 10% each turn.',
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
				type: 			'reduce_power',
				amount: 		'target_power',
				amount_factors: [0.1,'ability_level'],
			},
			1:{
				projectile: 	'wither',
				type: 			'reduce_health',
				amount: 		'target_health',
				amount_factors: [0.1,'ability_level'],
			},
		},
		level_cost: 	-0.5,
		cost_factor: 	'full',
	},
	feast:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		show_amount: 	true,
		description: 	'Heals itself by {LEVEL} when it destroys a living creature.',
		proc: 			'prekill_creature',
		cannot_proc_while_stunned: true,
		origin_does_not_have_ability: ['undead'],
		scales: 		true,
		targets:	{
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
		level_cost: 	0.25,
		level_cost_hero: 0.5,
	},
	final_beastform:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When this receives lethal damage, it turns into a random animal.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				min_total_hp: 	1,
				position: 		'self',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'random',
				card_type: 	'creature',
				card_subtypes: ['animal'],
				amount: 	1
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	final_burn_all:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'When destroyed, applies {LEVEL} burn to all enemy units. Will not target the enemy hero.{BURN}',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		do_not_pause_between: true,
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
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			}
		},
		animation: 			'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		1.5,
	},
	final_curse:{
		name_color: 	'rgba(160, 95, 250,0.9)',
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
		level_cost: 0.25,
	},
	final_destroy_ally:{
		name_color: 	'rgba(255,55,55,0.9)',
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
				subtypes: 		[],
				amount: 		1,
			},
			
		},
		animation: 			'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		-3,
	},
	final_discard:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this is destroyed, moves up to {LEVEL} card(s) from the enemy\'s hand to its grave.',
		proc: 			'own_death',
		proc_while_dead: true,
		proc_amount: 	'ability_level',
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
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		8,
	},
	final_draw:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Draws {LEVEL} card(s) when destroyed.',
		cannot_proc_while_stunned: true,
		proc_while_dead: true,
		proc: 			'own_death',
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
				projectile: 	'book',
				projectile_target: 'deck',
				type: 			'draw_card',
				subtypes: 		['draw_cards'],
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 	3,
		cost_on_top: 	true,
	},
	final_doom:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When destroyed, applies {LEVEL} doom to a random enemy unit.{DOOM}',
		proc: 			'own_death',
		proc_while_dead: true,
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
				projectile: 	'doom',
				type: 			'apply_doom',
				subtypes: 		['magical','doom'],
				amount: 		'ability_level',
				increase_timeout: 500,
			}
		},
		animation: 	'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 	0.33,
	},
	final_doom_all:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When destroyed, applies {LEVEL} doom to all enemy units.{DOOM}',
		proc: 			'own_death',
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
		animation: 	'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 	1,
	},
	final_energised_doom:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
		},
		level_cost: 	1,
	},
	final_grant_charge:{
		name: 			'final grant: charge',
		ability_subtypes: ['movement','charge'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When destroyed, grants the charge ability to {LEVEL} random ally creature unit(s). Will only target units that have power.',
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
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical'],
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
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'When destroyed, reduces the time left of a card in your hand by {LEVEL}.',
		proc: 			'own_death',
		proc_while_dead: true,
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
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		1,
	},
	final_pain:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When detroyed, deals {LEVEL} damage your hero.',
		proc: 			'own_death',
		proc_while_dead: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'ally',
			},
		},
		effects:{
			0:{
				projectile:	'voodoo',
				type: 		'damage',
				subtypes: 	['damage_own_hero'],
				amount: 	'ability_level'
			}
		},
		animation: 			'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 		-1,
	},
	final_restore:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Restores up to {LEVEL} health of your hero when destroyed.',
		proc: 			'own_death',
		proc_while_dead: true,
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
				subtypes: 		['healing','heal_hero'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 	1,
	},
	final_slow:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When destroyed, increases the ready time of a random enemy card by {LEVEL}.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 			'card',
				target_amount: 		1,
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
				subtypes: 			['slow','deck_control'],
				amount: 			'ability_level',
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 	1,
	},
	final_strike:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When destroyed, deals {LEVEL} physical melee damage to the unit or hero that destroyed it.',
		proc: 			'own_death',
		proc_while_dead: true,
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
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
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost: 	0.5,
		cost_factor: 	'ability_level',
		average_hits: 	0.25,
	},
	finishing_touch:{
		name: 			'finishing touch',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Any enemy this performs an ability on selfdestructs at the end of its turn. Cannot affect heroes.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['hero'],
				origin_unit: 	true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile:		'voodoo',
				type: 			'set_skill',
				subtypes: 		['additional_effect'],
				skill_id: 		'selfdestruct',
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
	},
	finishing_touch_ally:{
		name: 			'finishing touch',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Any ally this performs an ability on selfdestructs at the end of its turn. Cannot affect heroes.',
		proc: 			'performed_ability',
		not_subtypes: 	['finishing_touch'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['hero'],
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile:		'voodoo',
				type: 			'set_skill',
				subtypes: 		['finishing_touch'],
				skill_id: 		'selfdestruct',
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-2,
		cost_factor: 	'full',
	},
	fire_aura:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical fire damage to any enemy unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		scales: 		true,
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
	fire_blast:		{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical fire damage to all enemy units.',
		cannot_proc_while_stunned: true,
		//do_not_pause_between: true,
		scales: 		true,
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
				subtypes: 		['magical','fire','fire_blast','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	4,
		average_hits: 		3,
	},
	fire_bolt:		{
		name_color: 	'rgba(255,55,55,0.9)',
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
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	fire_bolt_hv:		{
		name: 			'fire bolt',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical fire projectile damage to a random enemy unit.',
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
				projectile: 	'fireray',
				type: 			'damage',
				subtypes: 		['magical','fire','projectile','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		average_hits: 	1,
	},
	fire_breath:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical fire damage to all nearby enemy units. Targets the enemy hero if there are no units in range.',
		cannot_proc_while_stunned: true,
		//do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	3,
				position: 		'opposing_wide',
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
				subtypes: 		['magical','fire'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4.5,
		average_hits: 	2,
	},
	fire_nova:		{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} fire damage to all units around it.',
		cannot_proc_while_stunned: true,
		//do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'opposing_wide',
				not_self: 		true,
				min_hp: 		1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				projectile: 	'fire',
				type: 			'damage',
				subtypes: 		['fire','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		average_hits: 	2,
	},
	flame_strike:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals melee magical fire damage equal to its power to the opposing unit. Will target the enemy hero if there is no opposing unit.',
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
	},
	flame_strike_hv:{
		name: 			'flame strike',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals melee magical fire damage equal to its power to the nearest unit. Will not target the enemy hero.',
		proc_amount: 	'ability_level',
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
	},
	flurry:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals {LEVEL} physical melee damage to the nearest enemy unit 5 times.',
		cannot_proc_while_stunned: true,
		proc_amount: 	5,
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
				subtypes: 		['physical','melee'],
				amount: 		'ability_level'
			}
		},
		animation: 			'attack',
		level_cost: 		10,
		level_cost_spell: 	2,
		average_hits: 		5,
	},
	flying:{
		name: 			'flying',
		name_color: 	'rgba(255,255,255,0.9)',
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
		level_cost_hero: 	1,
		cost_factor: 		'health',
	},
	flying_entries:{
		ability_subtypes: ['flying'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When a non-flying ally unit enters the game, this grants the flying ability to it until the start of next round.',
		proc: 			'ally_unit_card_played',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0},
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
				subtypes: 		['magical'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_artifact: 1.9,
	},
	fortify:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Grants a random ally unit or itself {LEVEL} armor. Cannot affect heroes.',
		proc: 		'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				//max_armor: 		'ability_level',
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
		level_cost: 	1,
	},
	fortify_all:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Grants all ally units {LEVEL} armor. Cannot affect heroes.',
		proc: 		'basic',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				//max_armor: 		'ability_level',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify'],
				amount: 		'ability_level'
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_hero: 	2,
	},
	fortify_ally:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Grants a random ally unit {LEVEL} armor. Cannot affect heroes or itself.',
		proc: 		'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				//max_armor: 		'ability_level',
				not_self: 		true,
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
		level_cost: 	1,
		level_cost_hero: 1,
		//level_cost_cum: true,
	},
	fortify_entries:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When any ally unit enters the game, it gains {LEVEL} armor.',
		proc: 			'ally_creature_card_played',
		cannot_proc_while_stunned: true,
		origin_not_self: 	true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				//max_armor: 		'ability_level',
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
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	fortify_front:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'The ally unit closest to your hero gains {LEVEL} armor. Cannot affect heroes.',
		proc: 		'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'left',
				//max_armor: 		'ability_level',
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
		level_cost: 	1,
		//level_cost_cum: true,
	},
	fortify_hero:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Grants your hero {LEVEL} armor.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				//max_armor: 		'ability_level',
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
		level_cost: 	1,
	},
	fortify_self:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'This gains {LEVEL} armor each turn.',
		proc: 		'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				//max_armor: 		'ability_level',
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'armor',
				type: 			'increase_armor',
				subtypes: 		['fortify'],
				amount: 		'ability_level',
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		//level_cost_cum: true,
	},
	fortifying_entry:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'When played, a random ally unit or hero gains {LEVEL} armor.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				//max_armor: 		'ability_level',
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
		level_cost: 	0.25,
	},
	freeze:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
		name_color: 	'rgba(171, 203, 255,0.9)',
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
	fury:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'When this receives damage, it gets {LEVEL} turn(s).',
		proc: 			'receive_damage',
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
				self_projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['go_again','fury'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
		cost_factor: 		'full'
	},
	gain_energy:{
		name_color: 	'rgba(255, 255, 255,0.9)',
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
	ghost_strike:{
		description: 	'Deals 1 physical death damage for every creature in your grave to {LEVEL} random non-undead enemy creature unit(s).',
		cannot_proc_while_stunned: true,
		min_ally_creature_cards_in_grave: 1,
		scales: 		true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 				'unit',
				target_amount: 			1,
				position: 				'random',
				not_types: 				['structure','object'],
				does_not_have_ability: 	'undead',
				min_hp: 				1,
				side: 					'enemy'
			},
		},
		effects:{
			0:{
				projectile: 			'resurrect',
				type: 					'damage',
				subtypes: 				['physical','death'],
				amount: 				'ally_grave_creature_card_count',
				amount_factor: 			1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	4,
		average_hits: 		1,
	},
	go_again:{
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'Every round, this gets {LEVEL} additional turn(s).',
		delay: 			1,
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
				self_projectile: 'go_again',
				type: 		'go_again',
				subtypes: 	['go_again'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.75,
		cost_factor: 		'full'
	},
	grant_bolster_self:{
		name: 			'grant: bolster self',
		ability_subtypes: ['bolster'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the bolster self {LEVEL} ability to a random ally creature unit. Cannot target your hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'bolster_self',
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	2,
		level_cost_cum: 	true,
	},
	grant_charge:{
		name: 			'grant: charge',
		ability_subtypes: ['movement','charge'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the charge ability to {LEVEL} random ally creature unit(s). Will only target units that have power.',
		cannot_proc_while_stunned: true,
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
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'charge',
				skill_at_front: true,
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	grant_dooming_aura_also:{
		name: 			'also grant: dooming aura',
		ability_subtypes: ['doom'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When this performs any ability, the target also gains the dooming aura ability.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				skill_at_front: true,
				subtypes: 		['magical','additional_effect'],
				skill_id: 		'dooming_aura',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	grant_dooming_touch_also:{
		name: 			'also grant: dooming touch',
		ability_subtypes: ['doom'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When this performs any ability, the target also gains the dooming touch ability.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				skill_at_front: true,
				subtypes: 		['magical','additional_effect'],
				skill_id: 		'dooming_touch',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	grant_final_pain:{
		name: 			'grant: final pain',
		ability_subtypes: ['damage_own_hero'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random enemy unit will deal {LEVEL} damage to it\'s hero when destroyed.',
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
				projectile: 	'voodoo',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'final_pain',
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	2,
	},
	grant_evade:{
		name: 			'grant: evade',
		ability_subtypes: ['evade'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the evade ability to {LEVEL} random ally creature unit(s). Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{evade: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'dodge',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'evade',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	5,
	},
	grant_explode:{
		name: 			'grant: explode',
		ability_subtypes: ['explode','own_death_proc'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the explode {LEVEL} ability to a random unit, or increases the level of that ability by {LEVEL}. Cannot target heroes.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
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
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	grant_feast:		{
		name: 			'grant: feast',
		ability_subtypes: ['feast'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the feast {LEVEL} ability to a random ally creature that does not have the ability. Will only target units that have at least 2 maximum health and will prioritize units with the highest maximum health. Cannot target your hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{feast: 0},
				highest_max_hp: true,
				min_hp: 		2,
				side: 			'ally'
			},
			1:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{feast: 0},
				min_hp: 		2,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'healing',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'feast',
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	0.5,
	},
	grant_feast_also:{
		name: 			'also grant: feast',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, the target also gains the feast {LEVEL} ability.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical','additional_effect'],
				skill_id: 		'feast',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	0.5,
	},
	grant_flying:		{
		name: 			'grant: flying',
		ability_subtypes: ['flying'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the flying ability to {LEVEL} random ally unit(s). Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	5,
	},
	grant_go_again:{
		name: 			'grant: go again',
		ability_subtypes: ['go_again'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random ally unit gets {LEVEL} additional turn(s) each round. Cannot target your hero.',
		cannot_proc_while_stunned: true,
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
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'go_again',
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		20,
		level_cost_spell: 	5,
		level_cost_cum: 	true,
	},
	grant_move:		{
		name: 			'grant: move',
		ability_subtypes: ['movement'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the move ability to {LEVEL} random ally creature(s). Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{move: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'move',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_spell: 	0.25,
	},
	grant_one_turn_flying:{
		name: 			'grant one round: flying',
		ability_subtypes: ['flying'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the flying ability to {LEVEL} random ally unit(s) until the start of next round. Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{flying: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_temp_skill',
				subtypes: 		['magical'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
		level_cost_artifact: 2,
	},
	grant_seek_enemy:{
		name: 			'grant: seek enemy',
		ability_subtypes: ['seek'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the seek enemy ability to {LEVEL} random ally creature unit(s) that does not have this ability. Will target units that do not have an opposing unit first. Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				has_opposing: 	false,
				max_abilities: 	{seek_enemy: 0},
				min_hp: 		1,
				side: 			'ally'
			},
			1:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{seek_enemy: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				skill_at_front: true,
				subtypes: 		['magical'],
				skill_id: 		'seek_enemy',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	grant_seek_enemy_also:{
		name: 			'also grant: seek enemy',
		ability_subtypes: ['seek'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When this performs any ability, the target also gains the seek enemy ability.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				skill_at_front: true,
				subtypes: 		['magical','additional_effect'],
				skill_id: 		'seek_enemy',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	grant_venom_also:{
		name: 			'also grant: venom',
		ability_subtypes: ['poison'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When this performs any ability, the target also gains the venom ability.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				skill_at_front: true,
				subtypes: 		['magical','additional_effect'],
				skill_id: 		'venom',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	grant_victory_rush:{
		name: 			'grant: victory rush',
		ability_subtypes: ['go_again'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Grants the victory rush ability to {LEVEL} random ally creature unit(s). Cannot target your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{victory_rush: 0},
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical'],
				skill_id: 		'victory_rush',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	grant_victory_rush_also:{
		name: 			'also grant: victory rush',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability, the target also gains the victory rush ability.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'go_again',
				type: 			'grant_skill',
				subtypes: 		['magical','additional_effect'],
				skill_id: 		'victory_rush',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	growth:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random non-undead ally creature with 1 health gains {LEVEL} power and health permanently.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				projectile: 	'healing',
				type: 			'increase_power',
				subtypes: 		['empower_ally'],
				amount: 		'ability_level'
			},
			1:{
				type: 			'increase_health',
				subtypes: 		['bolster_ally','growth'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	guard:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When played, an enemy unit enters the game or any unit is destroyed, if there is no opposing enemy unit, this unit will move to a free slot with an opposing unit. Can be used once each round.',
		//proc: 			'end_turn',
		delay: 			1,
		proc: 			['enemy_unit_card_played','creature_death','structure_death','on_play'],
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
				subtypes: 		['movement','guard'],
				amount: 		1,
			}
		},
	},
	hasten:{
		name: 			'hasten',
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'Reduces the time left of a card in your hand by {LEVEL}.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
				//highest_time_left: true,
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
	hasten_all:{
		name: 			'hasten all',
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When played, reduces the time left of all cards in your hand by {LEVEL}.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
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
				pause_before: 	500,
				projectile: 	'hasten',
				projectile_target: 'deck',
				type: 			'reduce_ready_time',
				subtypes: 		['hasten','deck_control'],
				amount: 		'ability_level',
				side: 			'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	6,
	},
	hasten_on_kill:{
		name_color: 	'rgba(200, 200, 200,0.9)',
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
	hasten_by_own_cost:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'Reduces the time left of a card in your hand by its cost, multiplied by {LEVEL}.',
		cannot_proc_while_stunned: true,
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
				amount: 		'origin_cost',
				amount_factor: 	'ability_level',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_factor: 	'full',
	},
	heal:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'Heals a random damaged ally creature unit by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		//level_cost_cum: true,
	},
	heal_all:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'Heals all damaged ally creature units by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		level_cost: 	10,
		level_cost_spell: 2.5,
		//level_cost_cum: true,
	},
	healing_entry:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'Whn played, heals a random damaged ally creature unit by {LEVEL}.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		level_cost: 	1,
		//level_cost_cum: true,
	},
	/*hex:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Reduce the health of {LEVEL} random enemy unit(s) to 1 until the start of their turn.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		2,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'grant_temp_health',
				subtypes: 		['hex'],
				amount: 		'target_health',
				amount_factor: 	-1,
				amount_adjustment: 1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},*/
	hex:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Turns the nearest non-undead enemy creature unit(s) into a frog until the end of their next round. Can be used up to {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'hex',
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
				projectile: 'curse',
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
		level_cost: 		6,
		level_cost_hero: 	2,
	},
	hex_arrivals:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'When an enemy non-undead creature unit enters the game, this has a 50% chance to turn it into a frog until the end of their round.',
		cannot_proc_while_stunned: true,
		proc: 			'enemy_creature_card_played',
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				not_types: 		['structure','object'],
				max_abilities: 	{undead: 0},
				not_card_ids: 	['frog'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'curse',
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
		level_cost: 		4,
		level_cost_hero: 	4,
	},
	hide:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Has a 75% chance to grant itself stealth every turn.',
		proc_chance: 	75,
		cannot_proc_while_stunned: true,
		not_on_hero: 	true,
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
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Grants {LEVEL} ally unit(s) stealth. Cannot target itself.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: 	true,
		proc_amount: 	'ability_level',
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
		level_cost_spell: 	2,
	},
	hide_on_kill:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Grants itself stealth when it destroys a unit.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
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
	ignites:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Applies {LEVEL} burn to any unit or hero it deals damage to.{BURN}',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		scales: 		true,
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
		level_cost: 		0,
		average_hit_cost: 	1,
	},
	incinerate:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Destroys {LEVEL} burning enemy unit(s).',
		cannot_proc_while_stunned: true,
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
		level_cost: 		6,
		level_cost_spell: 	3,
	},
	increase_ally_health:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'On play, increases the health and maximum health of an ally creature unit by {LEVEL} permanently. If used by a unit, it cannot target itself.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				not_self: 		true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'increase_health',
				subtypes: 		['increase_health','bolster'],
				amount: 		'ability_level',
			},
			
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	increase_power_also:{
		name: 			'also: increase power',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this performs any ability on a unit that uses power, that unit will also gain {LEVEL} power permanently.',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['empower','empower_ally','additional_effect'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
	},
	leave_shield:{
		ability_subtypes: ['shield'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When destroyed, grants the shield {LEVEL} ability to the nearest ally creature unit. Cannot target your hero.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				not_types: 		['structure','object'],
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'shield',
				type: 			'grant_skill',
				subtypes: 		['shield'],
				skill_id: 		'shield',
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	lycanthropy:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Turns a random damaged ally human creature unit into a werewolf.',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				subtypes: 		['human'],
				min_hp: 		1,
				damaged: 		true,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'resurrect',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'werewolf',
				amount: 	1
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
		animation: 		'combat_zoom',
		level_cost: 	14,
	},
	lightning:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Deals {LEVEL} magical air damage to the enemy unit with the highest current health. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
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
				subtypes: 			['magical','air','elemental','lightning'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	lightning_hv:{
		name: 			'lightning',
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Deals {LEVEL} magical air damage to the enemy unit with the highest current health.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
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
				subtypes: 			['magical','air','elemental','lightning'],
				amount: 			'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	0.75,
		average_hits: 		1,
	},
	lightning_strike:		{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Deals {LEVEL} air damage that ignores armor to an enemy unit with at least 6 health. Will target the unit with the highest health. Cannot target heroes.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		6,
				highest_hp: 	true,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				self_projectile: 	'lightning goes_up',
				target_projectile: 	'lightning comes_down',
				type: 				'damage',
				subtypes: 			['air','ignores_armor','elemental'],
				amount: 			'ability_level',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
		level_cost_artifact:0.5,
		average_hits: 		1,
	},
	long_echo:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
		level_cost: 	0.5,
		cost_factor: 	'full',
	},
	loot:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'The first time this deals damage to the enemy hero, it gains {LEVEL} power and health permanently.',
		proc: 			'dealt_damage_to_hero',
		cannot_proc_while_stunned: true,
		remove_skill_after_use:'loot',
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
				projectile: 	'empower',
				type: 			'increase_power',
				subtypes: 		['empower_ally'],
				amount: 		'ability_level'
			},
			1:{
				pause_before: 	-1000,
				type: 			'increase_health',
				subtypes: 		['bolster_ally','growth'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	marred_birds:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When the enemy deals damage to your hero, there is a 25% chance this summons {LEVEL} bird creature(s).',
		proc: 			'ally_hero_damaged',
		proc_chance: 	25,
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
				type: 		'summon_unit',
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'bird',
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		cost_on_top: 	true,
	},
	marred_burn:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'When an enemy deals damage to your hero, this applies {LEVEL} burn to it.',
		proc: 			'ally_hero_damaged',
		//delay: 			1,
		proc_while_dead: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				//has_effect: 	{effect_name: 'burning', amount: 0, limit: 'max'},
				origin_unit: 	true,
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
				pause_before: 	500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},
	marred_discard:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When an enemy deals damage to your hero, this moves 1 card from the enemy\'s hand to its grave. Can be used {LEVEL} time(s).',
		proc: 			'ally_hero_damaged',
		reduce_skill_after_use:'marred_discard',
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
		level_cost: 		8,
		level_cost_hero: 	2,
	},
	marred_draw:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When an enemy deals damage to your hero, this has a 25% chance to draw a card.',
		proc_chance: 	25,
		cannot_proc_while_stunned: true,
		proc: 			'ally_hero_damaged',
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
				subtypes: 			['draw_cards'],
				amount: 			1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_hero: 4,
		//cost_on_top: 	true,
	},
	marred_energy:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'When an enemy deals damage to your hero, this gains {LEVEL} energy.',
		proc: 			'ally_hero_damaged',
		//scales: 		true,
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
				self_projectile: 'energize',
				type: 		'apply_energy',
				subtypes: 	['gain_energy'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_hero: 	1.5,
	},
	marred_ghosts:{
		description: 	'When an enemy deals damage to your hero, there is a 25% chance this summons {LEVEL} ghost(s).',
		proc: 			'ally_hero_damaged',
		proc_chance: 	25,
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
				type: 		'summon_unit',
				card_id: 	'ghost',
				amount: 	1,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	2,
	},
	marred_goblins:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When an enemy deals damage to your hero, there is a 25% chance this summons {LEVEL} goblin creature(s).',
		proc: 			'ally_hero_damaged',
		proc_chance: 	25,
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
				type: 		'summon_unit',
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'goblin',
				amount: 	1,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	4,
	},
	marred_guards:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When an enemy deals damage to your hero, there is a 25% chance this summons {LEVEL} guard(s).',
		proc: 			'ally_hero_damaged',
		proc_chance: 	25,
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
				type: 		'summon_unit',
				card_id: 	'guard',
				amount: 	1,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	4,
	},
	marred_reclaim:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When your hero receives damage, this has a 50% chance to return {LEVEL} card(s) from your grave to your deck. ',
		proc: 			'ally_hero_damaged',
		cannot_proc_while_stunned: true,
		proc_chance: 	50,
		proc_amount: 	'ability_level',
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
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	marred_rush:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Reduces the time left of a card in your hand by {LEVEL} when your hero receives damage.',
		proc: 			'ally_hero_damaged',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'hand',
				side: 			'ally',
				//highest_time_left: true,
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
	},
	marred_selfdestruct:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Destroys itself when your hero receives damage.',
		proc: 			'ally_hero_damaged',
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
				pause_before: 	-1000,
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		[],
				amount: 		1,
			},
			
		},
		animation: 			'combat_hit',
		level_cost: 		-0.5,
		cost_factor: 		'full',
	},
	marring_discard:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this deals damage to the enemy hero, this moves {LEVEL} card(s) from the enemy\'s hand to its grave.',
		proc: 			'dealt_damage_to_hero',
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'marring_discard',
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
	marring_selfdestruct:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Destroys itself when it deals damage to the enemy hero.',
		proc: 			'dealt_damage_to_hero',
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
				pause_before: 	-1000,
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		[],
				amount: 		1,
			},
			
		},
		animation: 			'combat_hit',
		level_cost: 		-0.5,
		cost_factor: 		'full',
	},
	martyr:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When this receives damage but survives, it restores up to {LEVEL} health of your hero.',
		proc: 			'receive_damage',
		proc_chance: 	150,
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
				subtypes: 		['healing','heal_hero'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_factor: 	'health',
	},
	maximum_allies:{
		name: 		'allies:',
		post_name: 	'-',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are more then {LEVEL} ally units in play.',
		proc: 			'on_play',
		remove_skill: 	'maximum_allies',
		show_amount_adjustment: 0,
		level_cost: 	0,
	},
	min_enemy_hand_cards:{
		name: 		'enemy hand cards:',
		post_name: 	'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are less then {LEVEL} cards in the enemy\'s hand.',
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
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are more then {LEVEL} cards in your hand.',
		proc: 			'on_play',
		remove_skill: 	'max_hand_cards',
		show_amount_adjustment: 0,
		level_cost: 	0,
	},
	maximum_hero_health:{
		name: 			'maximum hero health:',
		post_name: 		'%',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if your hero has more than {LEVEL}% health.',
		proc: 			'on_play',
		remove_skill: 	'maximum_hero_health',
		show_amount_adjustment: 0,
		level_cost: 		0.02,
		level_cost_cum: 	true,
		cost_adjustment: 	-10,
	},
	minimum_allies:{
		name: 			'allies:',
		post_name: 		'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are less then {LEVEL} ally units in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_allies',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		level_cost_cum: true,
	},
	minimum_dead_ally_creatures:{
		name: 			'dead ally creatures:',
		post_name: 		'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are less then {LEVEL} ally creatures in your grave.',
		proc: 			'on_play',
		remove_skill: 	'minimum_dead_ally_creatures',
		show_amount_adjustment: 0,
		level_cost: 	-0.1,
		level_cost_cum: true,
	},
	minimum_enemies:{
		name: 			'enemies:',
		post_name: 		'+',
		ability_subtypes: 		['min_enemies'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are less then {LEVEL} enemy units in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_enemies',
		show_amount_adjustment: 0,
		level_cost: 	-0.1,
		cost_factor: 	'full',
		level_cost_cum: true,
	},
	morph_ally:{
		description: 	'Turns an ally creature with a cost no higher then {LEVEL} into a random creature with a cost of {LEVEL} or more. Can be used once.',
		remove_skill_after_use: 	'morph_ally',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				min_hp: 		1,
				//lowest_cost: 	true,
				max_cost: 		'ability_level',
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
				min_time: 		'ability_level',
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
		level_cost: 		2,
	},
	morph_sporeling:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Turns {LEVEL} enemy creature unit(s) into a sporeling when played. Will target the unit with the highest cost.',
		proc: 			'on_play',
		proc_amount: 	'ability_level',
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_card_ids: 	['sporeling'],
				not_types: 		['structure','object'],
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
		name_color: 	'rgba(255,255,255,0.9)',
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
	move_to_adjacent:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This unit will move to a random free adjacent slot.',
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
				placement: 		'adjacent_of_origin',
				subtypes: 		['movement'],
				amount: 		1,
			}
		},
	},
	no_allies:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there are any ally units in play.',
		proc: 			'on_play',
		remove_skill: 	'no_allies',
		level_cost: 	-0.5,
		level_cost_spell: -1,
		cost_factor: 	'full',
	},
	nurture:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random non-undead ally creature with {LEVEL} or less health gains {LEVEL} health permanently.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				max_hp: 		'ability_level',
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
	overload:{
		ability_subtypes: ['explode'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When played, the energy on {LEVEL} enemy unit(s) or artifact(s) turns into explode and that target is destroyed.',
		proc: 			'on_play',
		proc_amount: 	'ability_level',
		do_not_pause_between: true,
		targets:{
			0:{
				target: 		'any',
				target_amount: 	1,
				not_types: 		['hero'],
				has_effect: 	{effect_name: 'energy', amount: 1, limit: 'min'},
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'energy',
				type: 			'grant_skill',
				skill_id: 		'explode',
				amount: 		'target_energy'
			},
			1:{
				pause_before: 500,
				type: 		'set_effect_amount',
				effect_names:{
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			},
			2:{
				type: 		'destroy',
				subtypes: 	['overload'],
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
	},
	painful_discards:{
		name_color: 	'rgba(160, 95, 250,0.9)',
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
		average_hits: 		0.5,
	},
	painful_discard:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Up to {LEVEL} time(s), an enemy hand moves to its grave. Each time this happens, this deals damage to the enemy hero equal to the amount of cards left in their hand.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'painful_discard',
		negative_ability: true,
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
				on_success:{
					targets:	{
						0:{
							target: 	'hero',
							target_amount: 1,
							position: 	'random',
							min_hp: 	1,
							side: 		'enemy',
						},
					},
					effects:{
						0:{
							projectile: 'voodoo',
							type: 		'damage',
							amount: 	'enemy_hand_card_count',
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		15,
	},
	/*pay_life:		{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When played, reduces your hero\'s health by {LEVEL}.',
		proc: 			'on_play',
		scales: 		true,
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'ally',
			},
		},
		effects:{
			0:{
				projectile: 'voodoo',
				type: 		'reduce_health',
				amount: 	'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-1,
	},*/
	pay_life:		{
		name_color: 	'rgba(160, 95, 250,0.9)',
		show_amount: 	false,
		description: 	'When played, reduces your hero\'s current health by {LEVEL}0%.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'ally',
			},
		},
		effects:{
			0:{
				projectile: 'voodoo',
				type: 		'reduce_current_health',
				subtypes: 	['pay_life'],
				amount: 	'target_health',
				amount_factors: [0.1,'ability_level'],
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-1,
		//cost_factor: 	'full',
	},
	pay_life_on_act:{
		name: 			'pay life',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When played, reduces your hero\'s current health by {LEVEL}0%.',
		proc: 			'on_play',
		has_used_ability: 	true,
		targets:	{
			0:{
				target: 	'hero',
				target_amount: 1,
				position: 	'random',
				min_hp: 	1,
				side: 		'ally',
			},
		},
		effects:{
			0:{
				projectile: 'voodoo',
				type: 		'reduce_current_health',
				subtypes: 	['pay_life'],
				amount: 	'target_health',
				amount_factors: [0.1,'ability_level'],
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-1,
		//cost_factor: 	'full',
	},
	pilgrimage:{
		ability_subtypes: ['hasten'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'{LEVEL} time(s), a damaged ally non-summoned creature reduces the ready time of the card in your hand with the highest time left by its cost. The creature then returns to your hand.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'unit',
				not_types: 	['structure','object'],
				target_amount: 1,
				position: 	'random',
				damaged: 	true,
				has_origin_card: true,
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'teleport',
				type: 			'random_ability',
				subtypes: 		[],
				ability_options: ['hasten_by_own_cost'],
				amount: 		1,
				increase_timeout: 	-2000,
			},
			1:{
				//projectile: 	'teleport',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_hand'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	plated:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Has a 75% chance to reduce incoming physical damage by {LEVEL}.',
		proc: 			'reduce_incoming_damage',
		subtypes: 		['physical'],
		negated_by: 	['ignores_armor'],
		reduce_chance: 	75,
		amount: 		'ability_level',
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
				//pause_before: 		500, 
				self_projectile: 	'shield',
				subtypes: 			['plated'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 	2,
		//min_cost: 		2,
		//cost_factor: 	'health',
	},
	plunder:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'When this deals damage to the enemy hero, destroy an enemy artifact or non-golem structure unit. Can be used {LEVEL} time(s).',
		proc: 			'dealt_damage_to_hero',
		reduce_skill_after_use:'plunder',
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
		level_cost: 	1,
		cost_factor: 	'none',
	},
	poison:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} poison to a random enemy creature. Will only target the enemy hero if there are no enemy units.{POISON}',
		scales: 		true,
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
		level_cost: 		1.5,
		level_cost_spell: 	0.75,
	},
	poison_hv:{
		name: 			'poison',
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} poison to a random enemy creature. Will not target the enemy hero.{POISON}',
		scales: 		true,
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
		level_cost: 		1.5,
		level_cost_spell: 	0.75,
	},
	poison_all:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} poison to all enemy creature units.{POISON}',
		do_not_pause_between: true,
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				pause_before: 	500,
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		4.5,
		level_cost_spell: 	2.25,
	},
	poison_aura:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Applies {LEVEL} poison to any enemy creature unit or hero that deals melee damage to it.{POISON}',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		scales: 		true,
		proc_while_dead: true,
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
	poison_breath:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} poison to all nearby enemy creature units. Targets the enemy hero if there are no units in range.{POISON}',
		do_not_pause_between: true,
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'opposing_wide',
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
		level_cost: 		3,
	},
	precision:{
		name_color: 	'rgba(255,255,255,0.9)',
		show_amount: 	false,
		description: 	'This card ignores evade and stealth.',
	},
	purify:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Removes all negative effects from {LEVEL} random ally unit(s) or your hero. Negative effects are burn, curse, doom and poison.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
				type: 		'set_effect_amount',
							effect_names:{
								burning: 	0,
								cursed: 	0,
								doom: 		0,
								poisoned: 	0,
							},
				subtypes: 	['cleansing','cleanse'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	0.5,
	},
	purify_all:{
		description: 	'Removes all negative effects from all ally units and your hero. Negative effects are burn, curse, doom and poison.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
				type: 		'set_effect_amount',
							effect_names:{
								burning: 	0,
								cursed: 	0,
								doom: 		0,
								poisoned: 	0,
							},
				subtypes: 	['cleansing','cleanse'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	3,
	},
	purify_self:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Removes all negative effects from itself. Negative effects are burn, curse, doom and poison.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'self',
				has_negative_effect: true,
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'cleanse',
				type: 		'set_effect_amount',
							effect_names:{
								burning: 	0,
								cursed: 	0,
								doom: 		0,
								poisoned: 	0,
							},
				subtypes: 	['cleansing','cleanse'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	purifying_entry:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'When played, removes all negative effects from {LEVEL} random ally unit(s) or your hero. Negative effects are burn, curse, doom and poison.',
		cannot_proc_while_stunned: true,
		proc: 			'on_play',
		proc_amount: 	'ability_level',
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
				type: 		'set_effect_amount',
							effect_names:{
								burning: 	0,
								cursed: 	0,
								doom: 		0,
								poisoned: 	0,
							},
				subtypes: 	['cleansing','cleanse'],
				amount: 	1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
	},
	quickdraw:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Draws a card. Then reduces the time left of that card by {LEVEL}.',
		cannot_proc_while_stunned: true,
		remove_skill: 	'quickdraw',
		min_cards_in_deck: 	1,
		max_hand_cards: 	9,
		targets:	{
			0:{
				target: 		'card',
				target_amount: 	1,
				status: 		'deck',
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 		'book',
				projectile_target: 	'deck',
				type: 				'set_status',
				subtypes: 			['draw_cards'],
				new_status: 		'hand',
				side: 				'ally',
			},
			1:{
				projectile: 		'hasten',
				projectile_target: 	'deck',
				type: 				'reduce_ready_time',
				subtypes: 			['hasten','deck_control'],
				amount: 			'ability_level',
				side: 				'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
		cost_adjustment: 	6,
		cost_on_top: 	true,
	},
	quicken_poison:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} piercing poison damage to a random poisoned enemy unit or hero multiplied by the poison it suffers. Halves the poison on the target, rounded down.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'poisoned', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'poisoned', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'poison',
				type: 			'damage',
				subtypes: 		['poison','ignores_armor','ignore_shields','quicken_poison'],
				amount: 		'target_poison',
				amount_factor: 	'ability_level',
			},
			1:{
				type: 			'set_effect_amount',
				effect_name: 	'poisoned',
				subtypes: 		[],
				amount: 		'target_poison',
				amount_factor: 	0.5,
				amount_rounding: 'down',
				increase_timeout: -500,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		average_hits: 	1,
	},
	raging_energy:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'When this receives damage, this gains {LEVEL} energy.',
		proc: 			'receive_damage',
		//scales: 		true,
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
				self_projectile: 'energize',
				type: 		'apply_energy',
				subtypes: 	['gain_energy'],
				amount: 	'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
	},
	raging_haste:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'When this receives damage, reduces the time left of a card in your hand by {LEVEL}.',
		proc: 			'receive_damage',
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
	},
	raise_skeleton:{
		ability_subtypes: ['summon_ally','summon_creature'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Up to {LEVEL} time(s), removes a creature card from your grave from the game and summons a basic skeleton.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		min_ally_creature_cards_in_grave: 1,
		reduce_skill_after_use:'raise_skeleton',
		proc_amount: 'ability_level',
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
							pause_before: -1000,
							type: 		'summon_unit',
							subtypes: 	['summon_ally','summon_creature'],
							card_id: 	'skeleton',
							amount: 	1
						},
					},
				},
			},
		},
		
		animation: 	'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		level_cost_hero: 	2,
	},
	reap:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroys an enemy creature with {LEVEL} or less health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				max_hp: 		'ability_level',
				not_self: 		true,
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
		level_cost_spell: 	1,
	},
	reaping_touch:{
		name_color: 	'rgba(255,255,255,0.9)',
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
		animation: 	'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	2,
	},
	recall_all:{
		ability_subtypes: ['unsummon'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Returns all units to their owner\'s hand. They will return to their deck if the hand is full.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		ability_effects:{
			0:{
				do_not_pause_between: true,
				targets:{
					0:{

						target: 		'unit',
						target_amount: 	5,
						position: 		'random',
						min_hp: 		1,
						side: 			'ally',
					},
				},
				effects:{
					0:{
						projectile: 	'teleport',
						type: 			'move_to_deck',
						new_status: 	'hand',
						side: 			'ally',
					}
				},
			},
			1:{
				do_not_pause_between: true,
				targets:{
					0:{
						target: 		'unit',
						target_amount: 	5,
						position: 		'random',
						min_hp: 		1,
						side: 			'enemy',
					},
				},
				effects:{
					0:{
						projectile: 	'teleport',
						type: 			'move_to_deck',
						new_status: 	'hand',
						side: 			'enemy',
					}
				},
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	10,
	},
	recall_damaged:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Returns a damaged ally creature unit to your hand. Will not unsummon summoned units.',
		cannot_proc_while_stunned: true,
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
		level_cost: 	3,
	},
	reclaim:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Returns {LEVEL} card(s) in your grave to your deck. ',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	reclaim_once:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Returns a card in your grave to your deck. Can be used up to {LEVEL} time(s). Will try to do this when played and each turn.',
		proc: 			['on_play','basic'],
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'reclaim_once',
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
				subtypes: 			['move_ally_to_deck_from_grave','move_ally_to_deck'],
				new_status: 		'deck',
				side: 				'ally',
			}
		},
		animation: 	'combat_zoom',
	},
	redraw_artifact:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Returns an artifact card in your grave to your hand. Can be used up to {LEVEL} time(s). Will try to do this when played and each turn.',
		proc: 			['on_play','basic'],
		cannot_proc_while_stunned: true,
		max_hand_cards: 9,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'redraw_artifact',
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
				subtypes: 			['move_ally_to_hand_from_grave','move_ally_to_hand'],
				new_status: 		'hand',
				side: 				'ally',
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	regenerate:{
		name_color: 	'rgba(55,255,55,0.9)',
		show_amount: 	true,
		description: 	'Heals itself by {LEVEL} each turn.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		level_cost_hero: 	4,
	},
	release_artifact:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} artifact(s) when destroyed.',
		proc: 			'own_death',
		proc_while_dead: true,
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
				type: 		'summon_unit',
				card_id: 	'random',
				card_type: 	'artifact',
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		cost_on_top: 	true,
	},
	release_bird:{
		name_color: 	'rgba(255,255,255,0.9)',
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
				type: 		'summon_unit',
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'bird',
				amount: 	1,
			}
		},
		//animation: 		'combat_zoom',
		level_cost: 	12,
		cost_on_top: 	true,
	},
	release_doom:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Moves all doom from itself to a random enemy unit when destroyed.{DOOM}',
		proc: 			'own_death',
		proc_while_dead: true,
		this_has_effect: 'doom',
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
				projectile: 'doom',
				type: 		'apply_doom',
				subtypes: 	['magical','doom'],
				amount: 	'origin_doom',
				on_success:{
					proc_while_dead: true,
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
							pause_before: -2000,
							type: 		'set_effect_amount',
							effect_names:{
								doom: 	0,
							},
							subtypes: 	[],
							amount: 	1	
						}
					},
				}
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		cost_on_top: 		true,
	},
	release_ghost:{
		description: 	'Summons {LEVEL} ghost(s) when destroyed.',
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
				type: 		'summon_unit',
				card_id: 	'ghost',
				amount: 	1,
			}
		},
		//animation: 	'combat_zoom',
		level_cost: 	6,
		cost_on_top: 	true,
	},
	release_goblin:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons {LEVEL} goblin creature(s) when destroyed.',
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
				type: 		'summon_unit',
				card_id: 	'random',
				card_type: 	'creature',
				card_subtype: 'goblin',
				amount: 	1,
			}
		},
		//animation: 	'combat_zoom',
		level_cost: 	6,
		cost_on_top: 	true,
	},
	release_sporeling:{
		name_color: 	'rgba(255,255,255,0.9)',
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
		//animation: 			'combat_zoom',
		level_cost: 		2,
		ability_level_cost_factors:{
			resurrect: 		2,
		},
		level_cost_artifact: 0.75,
		cost_on_top: 		true,
	},
	remove_stun:{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Removes stun from {LEVEL} random ally unit(s) or your hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 1, limit: 'min'},
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 	'cleanse',
				type: 			'set_effect_amount',
				effect_name: 	'stunned',
				subtypes: 		['cleansing','cleanse'],
				amount: 		0,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell:  	0.5,
	},
	repair:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Repairs a random damaged ally structure by {LEVEL}. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				not_types: 		['object','creature'],
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
		level_cost: 2,
		level_cost_spell: 0.5,
	},
	repair_self:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Repairs itself by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				not_types: 		['object','creature'],
				position: 		'self',
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
		level_cost: 		2,
		level_cost_hero: 	4,
	},
	resist_cold:		{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Reduces incoming cold damage by {LEVEL}.',
		proc: 			'reduce_incoming_damage',
		reduce_chance: 	150,
		subtypes: 		['cold'],
		negated_by: 	['ignore_shields'],
		amount: 		'ability_level',
		scales: 		true,
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
		level_cost: 	0.5,
	},
	resist_earth:		{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Reduces incoming earth damage by {LEVEL}.',
		proc: 			'reduce_incoming_damage',
		reduce_chance: 	150,
		subtypes: 		['earth'],
		negated_by: 	['ignore_shields'],
		amount: 		'ability_level',
		scales: 		true,
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
				subtypes: 			['resist_earth','type_resist'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 	0.5,
	},
	resist_fire:		{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Reduces incoming fire damage by {LEVEL}.',
		proc: 			'reduce_incoming_damage',
		reduce_chance: 	150,
		subtypes: 		['fire'],
		negated_by: 	['ignore_shields'],
		amount: 		'ability_level',
		scales: 		true,
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
		level_cost: 	1,
	},
	resist_magic:		{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Has a 75% chance to reduce incoming magical damage by {LEVEL}.',
		proc: 			'reduce_incoming_damage',
		reduce_chance: 	75,
		subtypes: 		['magical'],
		negated_by: 	['ignore_shields'],
		amount: 		'ability_level',
		scales: 		true,
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
		level_cost: 	0.25,
		min_cost: 		1,
		cost_factor: 	'health',
	},
	restless:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When destroyed, this has a 75% chance to return to its owners deck.',
		proc: 			'own_death',
		proc_while_dead: true,
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
				subtypes: 		['move_ally_to_deck'],
				new_status: 	'deck',
				side: 			'ally',
				//pause_before: 2000,
			}
		},
		cost_factor: 	'full',
	},
	/*restore_hero:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Restores up to {LEVEL} health of your hero.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				projectile:		'healing',
				type: 		'healing',
				subtypes: 	['healing','heal_hero'],
				amount: 	'ability_level'
			}
		},
		animation: 				'combat_zoom',
		level_cost: 			4,
		level_cost_artifact: 	6,
		level_cost_spell: 		1,
	},*/
	restoring_deaths:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Restores {LEVEL} health to your hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
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
				subtypes: 		['healing','heal_hero','restoring_deaths'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_artifact: 5,
	},
	restoring_entries:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When any other ally creature enters the game, restores up to {LEVEL} health of your hero.',
		proc: 			'ally_creature_card_played',
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
				subtypes: 		['healing','heal_hero'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_artifact: 5,
	},
	restoring_entry:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Restores up to {LEVEL} health of your hero when played.',
		proc: 			'on_play',
		remove_skill: 	'restoring_entry',
		cannot_proc_while_stunned: true,
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
				subtypes: 		['healing','heal_hero'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	restoring_spells:{
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'When any ally spell is cast, restores up to {LEVEL} health of your hero.',
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
				subtypes: 		['healing','heal_hero','on_spellcast'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
		level_cost_artifact: 5,
	},
	resurrect:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this unit\'s health reaches 0, it has a 66% chance to come back to life with {LEVEL}0% health, rounded up.',
		proc: 			'own_death',
		proc_chance: 	66,
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
				amount: 		'target_max_health',
				amount_factors: ['ability_level',0.1],
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		0.2,
		min_cost: 			3,
		cost_factor: 		'health',
	},
	resurrect_ally:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When an ally creature\'s health reaches 0, this will bring it back to life with 10% health. Can be used {LEVEL} time(s).',
		proc: 			'ally_creature_death',
		reduce_skill_after_use: 'resurrect_ally',
		targets:	{
			0:{
				target: 		'unit_or_hero',
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
				amount: 		'target_max_health',
				amount_factor: 	0.1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_hero: 	0.5,
		level_cost_artifact: 	0.5,
		//cost_factor: 	'full',
	},
	retreat_on_kill:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Return to your hand when it destroys an enemy unit.',
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
				subtypes: 		['move_ally_to_hand'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		level_cost: 	1,
	},
	return_into_original:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
	return_on_spell_cast:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
				subtypes: 		['move_ally_to_hand'],
				new_status: 	'hand',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	reveal:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Removes stealth from the nearest enemy {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
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
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	reveal_all:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Removes stealth from all enemies.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	6,
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
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	revealing_entry:{
		name_color: 	'rgba(200, 200, 200,0.9)',
		description: 	'Removes stealth from all enemies when played.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		targets:	{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	6,
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
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	righthand:{
		ability_subtypes: ['righthand'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will be placed on the far side of your hand when drawn.',
		cost_on_top: 	true,
	},
	run_away:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This unit will move to a slot with no opposing unit when any enemy unit enters the game, when an enemy moved and every turn. Can be used once each round.',
		proc: 			['enemy_unit_card_played','enemy_moved','basic'],
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
				subtypes: 		['movement','run_away'],
				amount: 		1,
			}
		},
		level_cost: 	1,
	},
	sacrifice:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroy {LEVEL} ally creature unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'sacrifice',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				not_types: 		['structure','object'],
				position: 	'random',
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'death',
				type: 		'destroy',
				subtypes: 	['sacrifice'],
				amount: 	1,
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	-4,
	},
	sandstorm:{
		name_color: 	'rgba(191, 110, 4,0.9)',
		description: 	'Deals {LEVEL} physical earth damage to all enemy units.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				position: 	'random',
				not_self: 	true,
				min_hp: 	1,
				side: 		'enemy'
			},
		},
		effects:{
			0:{
				projectile: 'stone',
				type: 		'damage',
				subtypes: 	['physical','sandstorm','earth','elemental'],
				amount: 	'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	4,
		average_hits: 		3,
	},
	scavenge_artifact:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Destroy an enemy artifact. If successful, this returns to your deck.',
		cannot_proc_while_stunned: true,
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
				subtypes: 	['break','unsummon'],
				amount: 	1,
				on_success:{
					targets:	{
						0:{
							target: 			'any',
							target_amount: 		1,
							position: 			'self',
							side: 				'ally',
						},
					},
					effects:{
						0:{
							projectile: 	'teleport',
							type: 			'move_to_deck',
							subtypes: 		['move_ally_to_deck'],
							new_status: 	'deck',
							side: 			'ally',
						}
					},
				}
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	5,
	},
	seek_ally_creature:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'If this does not have an adjacent creature, it will move next to one.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				has_adjacent_creature: false,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			1:{
				type: 					'move',
				safe_slot: 				'any',
				placement: 				'random',
				subtypes: 				['movement','seek'],
				amount: 				1,
				slot_filters:{
					has_adjacent_creature: 	true,
				}
			}
		},
	},
	seek_creature:{
		name_color: 	'rgba(255,255,255,0.9)',
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
				subtypes: 		['movement','seek'],
				amount: 		1,
			}
		},
	},
	seek_enemy: 	{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'If there is no opposing enemy unit, this unit will move to a free slot with an opposing unit.',
		cannot_proc_while_stunned: true,
		not_on_hero: true,
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
				subtypes: 		['movement','seek'],
				amount: 		1,
			}
		},
	},
	selfdestruct:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Destroys itself.',
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
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		[],
				amount: 		1,
			},
			
		},
		animation: 			'combat_hit',
		level_cost: 		-1,
		cost_factor: 		'full',
	},
	shapeshift:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Has a 50% chance to turn into a random creature with an equal or higher cost. Retains this ability when shapeshifting.',
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'random',
				card_type: 	'creature',
				min_time: 	'target_cost',
				amount: 	1
			},
			1:{
				type: 			'set_skill',
				skill_id: 		'shapeshift',
				amount: 		1
			},
			2:{
				type: 		'set_effect_amount',
				effect_names:{
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	shapeshift_hv:{
		name: 			'shapeshift',
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Turns into a random creature hero.',
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'random',
				card_type: 	'creature',
				amount: 	1
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	shatter:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Returns into the original creature when destroyed. If there is no original creature, turns into a random creature in stead.',
		proc: 			'own_death',
		proc_while_dead: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				side: 			'any',
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
					target: 		'unit',
					target_amount: 	1,
					position: 		'self',
					side: 			'any',
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
	shield:{
		name_color: 	'rgba(255,255,255,0.9)',
		show_amount: 	false,
		description: 	'Has a 75% chance to reduce incoming melee and projectile damage by {LEVEL}.',
		proc: 			'reduce_incoming_damage',
		cannot_proc_while_stunned: true,
		subtypes: 		['melee','projectile'],
		negated_by: 	['ignore_shields'],
		reduce_chance: 	75,
		amount: 		'ability_level',
		scales: 		true,
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
				//pause_before: 	500, 
				self_projectile: 	'shield',
				subtypes: 			['shield','block'],
				increase_timeout: 	-1500,
			}
		},
		level_cost: 	0.5,
		min_cost: 		2,
		cost_factor: 	'health',
	},
	shift_ally:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Has a 50% chance to turn a non-shapeshifter ally creature into a random creature with an equal or 1 higher cost. Will target the ally with the lowest cost.',
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				does_not_have_ability: 	'shapeshift',
				min_hp: 		1,
				lowest_cost: 	true,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'random',
				card_type: 	'creature',
				min_time: 	'target_cost',
				max_time: 	'target_cost',
				max_time_adjustment: 1,
				amount: 	1
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
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	shift_human:{
		name: 			'shift',
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Has a 25% chance to turn into a villager if damaged. That peasant has a 25% chance to turn into a werewolf when damaged.',
		proc_chance: 	25,
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				damaged: 		true,
				min_hp: 		1,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 'resurrect',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'villager',
				amount: 	1
			},
			1:{
				type: 			'set_skill',
				skill_id: 		'shift_werewolf',
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	shift_werewolf:{
		name: 			'shift',
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'When damaged, has a 25% chance to turn into a werewolf.',
		proc: 			'receive_damage',
		proc_chance: 	25,
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'self',
				min_hp: 		1,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile: 'resurrect',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'werewolf',
				amount: 	1
			},
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	shoot:{
		name_color: 	'rgba(255,255,255,0.9)',
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
		average_hits: 	1,
	},
	shoot_arrival:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When an enemy unit enters the game, this deals {LEVEL} physical projectile damage to it. Can be used once.',
		cannot_proc_while_stunned: true,
		proc: 			'enemy_unit_card_played',
		remove_skill_after_use: 'shoot_arrival',
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
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When an enemy unit enters the game, this deals {LEVEL} physical projectile damage to it.',
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
				projectile: 	'arrow',
				type: 			'damage',
				subtypes: 		['physical','projectile','ranged'],
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	4,
		average_hits: 	1,
	},
	shoot_unit:		{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals physical projectile damage equal to its power to a random enemy unit {LEVEL} time(s).',
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
		average_hits: 	1,
	},
	skeletonise:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'If a non-undead ally creature is destroyed, this has a 50% chance to turn it into a skeleton.',
		proc: 			'ally_creature_death',
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{undead: 0},
				origin_unit: 	true,
				not_self: 		true,
				max_hp: 		0,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'resurrect',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'skeleton',
				amount: 	1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					poisoned: 	0,
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	skin_rot:{
		ability_subtypes: ['wither'],
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'A random enemy creature unit gains skin rot; It\'s health and power are reduced each turn.',
		proc: 			'basic',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure'],
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 	'curse',
				type: 			'grant_skill',
				subtypes: 		['magical','wither'],
				skill_id: 		'fade',
				amount: 		1
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	slow:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Increases the ready time of a random enemy card {LEVEL} time(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 			'card',
				target_amount: 		1,
				status: 			'hand',
				can_target_zero: 	true,
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 		'slow',
				projectile_target: 	'deck',
				type: 				'increase_ready_time',
				subtypes: 			['slow','deck_control'],
				amount: 			1,
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
		level_cost_spell: 1,
	},
	slow_all:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Increases the ready time of all enemy cards by {LEVEL}.',
		cannot_proc_while_stunned: true,
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
				subtypes: 			['slow','deck_control'],
				amount: 			'ability_level',
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	20,
		level_cost_spell: 5,
	},
	slow_enemy_draws:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When the enemy draws a card, this increases the ready time of that card by {LEVEL}.',
		proc: 			'enemy_card_drawn',
		cannot_proc_while_stunned: true,
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
				subtypes: 			['slow','deck_control'],
				amount: 			'ability_level',
				side: 				'enemy',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
	},
	slowing_draw:{
		ability_subtypes: ['draw_cards','deck_control'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Draws {LEVEL} card(s). Every time a card is drawn, increase the time left on all cards by 1.',
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
				subtypes: 		['draw_cards'],
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
	sneaky_strike:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals physical melee damage equal to its power to the opposing unit. Ignores non-golem structures. Will target the enemy hero if there is no opposing target.',
		proc_amount: 	'ability_level',
		cannot_proc_while_stunned: true,
		need_power: 	true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				not_types: 		['structure'],
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				subtypes: 		['golem'],
				min_hp: 		1,
				side: 			'enemy'
			},
			2:{
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
				subtypes: 		['physical','melee','sneaky_strike','sneaky'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
	},
	snipe: 	{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals physical projectile damage equal to its power to the enemy unit or hero with the lowest health.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
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
		level_cost: 	5,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	snipe_hv: 	{
		name: 			'snipe',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals physical projectile damage equal to its power to the enemy unit with the lowest health.',
		cannot_proc_while_stunned: true,
		need_power: 	true,
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
		level_cost: 	4,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	sorrow:{
		name: 		'sorrow',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When any ally creature is destroyed, deals {LEVEL} mental damage to a random enemy creature. Will target the enemy hero if there are no enemy units to target.',
		proc: 		'ally_creature_death',
		proc_amount: 	1,
		proc_while_dead: false,
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				projectile: 	'curse',
				type: 			'damage',
				subtypes: 		['mental','sorrow'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		average_hits: 	1,
	},
	sorrow_hv:{
		name: 		'sorrow',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When any ally creature is destroyed, deals {LEVEL} mental damage to a random enemy creature.',
		proc: 		'ally_creature_death',
		proc_amount: 	1,
		proc_while_dead: false,
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				projectile: 	'curse',
				type: 			'damage',
				subtypes: 		['mental','sorrow'],
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
		average_hits: 	1,
	},
	spawn_sporeling:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'If this has 3 or more energy, spawns a sporeling for every 3 energy it has. Each sporeling reduces energy by 3.',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_amount: 'origin_energy',
		targets:	{
			0:{
				target: 		'any',
				position: 		'self',
				has_effect: 	{effect_name: 'energy', amount: 3, limit: 'min'},
				target_amount: 	1,
				side: 			'any'
			},
		},
		effects:{
			0:{
				type: 		'summon_unit',
				subtypes: 	['summon_ally','summon_creature','summon_sporeling'],
				type: 		'summon_unit',
				card_id: 	'sporeling',
				amount: 	1,
				on_success:{
					targets:	{
						0:{
							target: 		'any',
							position: 		'self',
							has_effect: 	{effect_name: 'energy', amount: 3, limit: 'min'},
							target_amount: 	1,
							side: 			'any'
						},
					},
					effects:{
						0:{
							type: 		'apply_energy',
							subtypes: 	[],
							amount: 	-3,
						}
					},
				}
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		0,
		level_cost_artifact: 0.1,
	},
	spellbane:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'When the enemy casts a spell, this is destroyed.',
		proc: 			'enemy_spell_card_played',
		cannot_proc_while_stunned: true,
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
				projectile: 	'death',
				type: 			'destroy',
				subtypes: 		[],
				amount: 		1,
			},
			
		},
		animation: 			'combat_hit',
		level_cost: 		-0.5,
		cost_factor: 		'full',
	},
	spellbane_touch:{
		name: 			'spellbane touch',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Any enemy this performs an ability on gains the spellbane ability. Cannot affect heroes.<br/><i>Spellbane: When the enemy casts a spell, this is destroyed.</i>',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['hero'],
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile:		'voodoo',
				type: 			'set_skill',
				subtypes: 		['additional_effect'],
				skill_id: 		'spellbane',
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	4,
	},
	spellbane_touch_ally:{
		name: 			'spellbane touch',
		name_color: 	'rgba(245, 241, 42,0.9)',
		description: 	'Any ally this performs an ability on gains the spellbane ability. Cannot affect heroes.<br/><i>Spellbane: When the enemy casts a spell, this is destroyed.</i>',
		proc: 			'performed_ability',
		not_subtypes: 	['additional_effect'],
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['hero'],
				origin_unit: 	true,
				side: 			'any',
			},
		},
		effects:{
			0:{
				projectile:		'voodoo',
				type: 			'set_skill',
				subtypes: 		['additional_effect'],
				skill_id: 		'spellbane',
				amount: 		1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	-1,
		cost_factor: 	'full',
	},
	spell_bolt:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'When any spell is cast, this deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will only target the enemy hero if there are no enemy units.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: true,
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
				subtypes: 		['magical','arcane_bolts','projectile','on_spellcast'],
				amount: 		1,
				//increase_timeout: -500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		'ability_level',
	},
	spell_bolt_hv:{
		name: 			'spell bolt',
		name_color: 	'rgba(171, 203, 255,0.9)',
		show_amount: 	true,
		description: 	'When any spell is cast, this deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will not target the enemy hero.',
		proc: 			'any_spell_card_played',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		scales: true,
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
				subtypes: 		['magical','arcane_bolts','projectile','on_spellcast'],
				amount: 		1,
				//increase_timeout: -500,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		'ability_level',
	},
	spellrush:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Reduces the time left of a random ally card in your hand by {LEVEL} after any spell card is played.',
		proc: 			'any_spell_card_played',
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
				subtypes: 			['hasten','deck_control','on_spellcast'],
				amount: 			'ability_level',
				side: 				'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	sporeling_strike:{
		ability_subtypes: ['melee','physical'],
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'Destroys a sporeling. If successful, it deals physical melee damage equal to its power to the opposing unit. Will target the enemy hero if there is no opposing unit.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'random',
				subtypes: 	'sporeling',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'destroy',
				subtypes: 	['consume'],
				amount: 	1,
				on_success:{
					targets:{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'self',
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'random_ability',
							ability_options: ['strike'],
							amount: 	'ability_level',
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
		cost_factor: 		'power',
	},
	sporeling_strike_hv:{
		name: 				'sporeling strike',
		ability_subtypes: ['melee','physical'],
		name_color: 	'rgba(255, 255, 255,0.9)',
		description: 	'If there are any enemy units, destroys a sporeling. If successful, it deals physical melee damage equal to its power to the nearest enemy unit. Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		min_enemy_units: 1,
		targets:	{
			0:{
				target: 	'any',
				target_amount: 1,
				position: 	'random',
				subtypes: 	'sporeling',
				min_hp: 	1,
				side: 		'any'
			},
		},
		effects:{
			0:{
				projectile: 'drain',
				type: 		'destroy',
				subtypes: 	['consume'],
				amount: 	1,
				on_success:{
					targets:{
						0:{
							target: 	'any',
							target_amount: 1,
							position: 	'self',
							side: 		'any'
						},
					},
					effects:{
						0:{
							type: 		'random_ability',
							ability_options: ['strike_unit'],
							amount: 	'ability_level',
						}
					},
				}
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		0.5,
		cost_factor: 		'power',
	},
	static_aura:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals {LEVEL} magical air damage to any unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		scales: 		true,
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
				subtypes: 		['magical','air','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'red_glow',
		level_cost: 		2,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	static_strike:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals melee magical air damage equal to its power to the opposing unit. Will target the enemy hero if there is no opposing unit.',
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
				projectile: 	'lightning',
				type: 			'damage',
				subtypes: 		['magical','air','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	static_strike_hv:{
		name: 			'static strike',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals melee magical air damage equal to its power to the nearest enemy unit.',
		proc_amount: 	'ability_level',
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
		},
		effects:{
			0:{
				projectile: 	'lightning',
				type: 			'damage',
				subtypes: 		['magical','air','melee','elemental'],
				amount: 		'origin_power'
			}
		},
		animation: 		'attack',
		level_cost: 	2,
		cost_factor: 	'power',
		average_hits: 	1,
	},
	steal:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'When this deals damage to the enemy hero, gain control over an enemy artifact. Can only be used if you have less then 5 artifacts in play and up to {LEVEL} time(s).',
		proc: 			'dealt_damage_to_hero',
		reduce_skill_after_use:'steal',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
		level_cost: 	3,
		cost_factor: 	'none',
	},
	stealth:{
		name_color: 	'rgba(255,255,255,0.9)',
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
				subtypes: 		['evade','use_stealth','grant_stealth'],
				amount: 		0,
				increase_timeout: -500
			}
		},
		level_cost: 		1,
		level_cost_hero: 	0.25,
	},
	strike:{
		name_color: 	'rgba(255,255,255,0.9)',
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
	},
	strike_unit:{
		name_color: 	'rgba(255,255,255,0.9)',
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
	},
	striking_entry:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When played, deals physical melee damage equal to its power to the nearest enemy unit {LEVEL} time(s). Will target the enemy hero if there are no enemy units.',
		proc: 			'on_play',
		proc_amount: 	'ability_level',
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
		average_hits: 	0.5,
	},
	stun:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to a random enemy unit that is not stunned.',
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
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		16,
		level_cost_spell: 	4,
	},
	stun_all:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to all enemy units.',
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
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		50,
		level_cost_spell: 	12,
	},
	stun_all_living:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to all enemy non-undead creature units.',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		36,
		level_cost_spell: 	9,
	},
	stun_artifact:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to a random enemy artifact that is not stunned.',
		targets:	{
			0:{
				target: 		'artifact',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	stun_creature:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to a random enemy creature unit that is not stunned.',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				not_types: 		['structure','object'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		12,
		level_cost_spell: 	3,
	},
	stun_flying:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to a random flying enemy unit that is not stunned.',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				has_ability: 	'flying',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		8,
		level_cost_spell: 	2,
	},
	stun_structure:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} stun to a random enemy structure unit that is not stunned.',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				not_types: 		['creature','object'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		8,
		level_cost_spell: 	2,
	},
	stun_structure_once:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies 1 stun to a random enemy structure unit that is not stunned. Can be used {LEVEL} time(s).',
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'stun_structure_once',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				not_types: 		['creature','object'],
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		1
			}
		},
		level_cost: 		2,
	},
	stunning_entry:{
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'When played, applies {LEVEL} stun to the nearest enemy unit that is not stunned. Will stun the enemy hero if it is not stunned and there are no not stunned enemey units.',
		proc: 			'on_play',
		remove_skill: 	'stunning_entry',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'nearest',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'max'},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				type: 			'apply_stun',
				projectile: 	'stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		4,
	},
	stunning_touch:{
		description: 	'Has a 35% chance to apply {LEVEL} stun to any creature it damages.',
		proc: 			'dealt_damage',
		proc_chance: 	35,
		proc_while_dead: true,
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
				type: 			'apply_stun',
				subtypes: 		['stun','apply_stun','stun_enemy'],
				amount: 		'ability_level'
			}
		},
		level_cost: 		0,
		average_hit_cost: 	2,
		average_hit_cost_spell: 	0.5,
	},
	summon_artifact:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} artifact(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
		reduce_skill_after_use:'summon_artifact',
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
		level_cost_hero: 	2
	},
	summon_fungus:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} fungus type unit(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_fungus',
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
				card_subtype: 'fungus',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		8,
	},
	summon_ghost:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Has a 25% chance each turn to summon a ghost creature.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		proc_chance: 	25,
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
				card_subtype: 'ghost',
				amount: 	1,
				increase_timeout: 1000,
			}
		},
		animation: 	'combat_zoom',
		level_cost: 	6,
	},
	summon_guard:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} guard type creature(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_guard',
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
				card_subtype: 'guard',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		8,
		level_cost_hero: 	4,
	},
	summon_guards:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons a number of guards equal to the number of enemy units.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_guard',
		proc_amount: 'enemy_unit_count',
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
				card_id: 	'guard',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		12,
		level_cost_hero: 	2,
	},
	summon_locust:{
		name_color: 	'rgba(255,255,255,0.9)',
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
		level_cost: 12,
		level_cost_spell: 6,
	},
	summon_peasant:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons {LEVEL} peasant(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_peasant',
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
				card_id: 	'peasant',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	6,
	},
	summon_skeleton:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} skeleton(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_skeleton',
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
				card_subtype: 'skeleton',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	4,
		level_cost_hero: 	4,
	},
	summon_sporeling:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons {LEVEL} sporeling(s) when played.',
		proc: 			'on_play',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_sporeling',
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
				card_id: 	'sporeling',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
	},
	summon_structure:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} structure(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_structure',
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
		level_cost: 		10,
	},
	summon_swamp:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Summons up to {LEVEL} swamp(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'summon_swamp',
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
				card_id: 	'swamp',
				card_type: 	'structure',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 8,
		level_cost_spell: 	4,
	},
	sustain_ally:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'A random ally unit with an opposing unit gains {LEVEL} temporary health. Cannot target your hero or itself.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_self: 		true,
				has_opposing: 	true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'bolster',
				type: 			'grant_temp_health',
				subtypes: 		['bolster'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
		level_cost_spell: 	0.25,
	},
	swampify_enemy:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Turns {LEVEL} random non-golem enemy structure(s) into a swamp.',
		reduce_skill_after_use: 'swampify_enemy',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['creature','object'],
				not_subtypes: 	['golem'],
				not_card_ids: 	['swamp'],
				side: 			'enemy',
			},
		},
		effects:{
			0:{
				projectile: 'resurrect',
				type: 		'turn_into',
				subtypes: 	['turn_enemy_into'],
				card_id: 	'swamp',
				amount: 	1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					poisoned: 	0,
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1,
	},
	swoop:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'If this is flying and has an opposing unit, it looses that ability until the start of next turn and gains {LEVEL} power until end of turn. Can be used every other round.',
		delay: 			2,
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				has_ability: 	'flying',
				has_opposing:  	true,
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_temp_skill',
				subtypes: 		[],
				skill_id: 		'flying',
				amount: 		-1,
				increase_timeout: -1000,
			},
			1:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally','dive'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		cost_adjustment: 	-2,
	},
	swoop_hv:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'If this is flying and there is an enemy unit, it looses that ability until the start of next turn and gains {LEVEL} power until end of turn. Can be used every other round.',
		delay: 			2,
		cannot_proc_while_stunned: true,
		min_enemy_units: 1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				has_ability: 	'flying',
				min_hp: 		1,
				side: 			'ally'
			},
		},
		effects:{
			0:{
				projectile: 	'fly',
				type: 			'grant_temp_skill',
				subtypes: 		[],
				skill_id: 		'flying',
				amount: 		-1,
				increase_timeout: -1000,
			},
			1:{
				projectile: 	'power',
				type: 			'grant_temp_power',
				subtypes: 		['empower','empower_ally','dive'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		cost_adjustment: 	-2,
	},
	take_burn:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Moves any burn from {LEVEL} ally unit(s) or your hero to itself. {BURN}',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 	'unit_or_hero',
				target_amount: 1,
				position: 	'random',
				has_effect: {effect_name: 'burning', amount: 1, limit: 'min'},
				not_self: 	true,
				min_hp: 	1,
				side: 		'ally'
			},
		},
		effects:{
			0:{
				projectile: 'cleanse',
				type: 'ability',
				proc_amount: 1,
				pause_before_effect: 1500,
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
						subtypes: 	['take_burn'],
						amount: 	'origin_burn',
					}
				},
			},
			1:{
				pause_before: -3000,
				type: 		'set_effect_amount',
				effect_names:{
					burning: 	0,
				},
				subtypes: 	[],
				amount: 	1,
				increase_timeout: 3000	
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	thorns:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Deals {LEVEL} physical damage to any enemy that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		scales: 		true,
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
		level_cost: 		2,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	trample:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When this kills a unit with physical melee damage, the excess damage is dealt to the enemy hero.',
		proc: 			'overkill',
		subtypes: 		['melee','physical'],
		cannot_proc_while_stunned: true,
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
				subtypes: 	['melee','physical'],
				amount: 	'ability_level'
			}
		},
		level_cost: 	1,
	},
	transfer_burn:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Moves any burn it has to an enemy unit. Will target the enemy hero if there are no enemy units.{BURN}',
		cannot_proc_while_stunned: true,
		this_has_effect: 'burning',
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
				amount: 	'origin_burn',
				on_success:{
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
							pause_before: -2000,
							type: 		'set_effect_amount',
							effect_names:{
								burning: 	0,
							},
							subtypes: 	[],
							amount: 	1	
						}
					},
				}
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	transfer_burn_hv:{
		name: 			'transfer burn',
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Moves any burn it has to an enemy unit. Will not target the enemy hero.{BURN}',
		cannot_proc_while_stunned: true,
		origin_has_effect: 'burning',
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
				amount: 	'origin_burn',
				on_success:{
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
							pause_before: -2000,
							type: 		'set_effect_amount',
							effect_names:{
								burning: 	0,
							},
							subtypes: 	[],
							amount: 	1	
						}
					},
				}
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	trap:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Any enemy unit or hero that deals melee damage to this has a 50% chance to be stunned for {LEVEL} round(s).',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		proc_chance:    50,
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
		level_cost: 	4,
		level_cost_hero: 3,
		cost_factor: 	'none',
	},
	trophy_kill: 	{
		name_color: 	'rgba(245, 245, 66,0.9)',
		description: 	'Restores {LEVEL} health to your hero whenever it destroys an enemy unit.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
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
				subtypes: 	['healing','trophy_kill','heal_hero'],
				amount: 	'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	2,
	},
	turn_enemy:{
		description: 	'Turns a random enemy non-undead creature into an ally.',
		max_ally_units: 4,
		proc_amount: 	1,
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
	undead:{
		name_color: 		'rgba(255,255,255,0.9)',
		description: 		'This unit is immune to poison and all mental effects.',
		grants_immunities: 	['poison','mental'],
		ability_subtypes: 	['undead'],
	},
	unsummon_ally:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Returns an ally creature unit to your hand. Will not unsummon summoned units.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
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
		level_cost: 	3,
	},
	unsummon_adjacent_damaged:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'If there is a damaged ally creature unit next to this, it will return it to your hand. Will not send away summoned units.',
		cannot_proc_while_stunned: true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'adjacent',
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
		level_cost: 	3,
	},

	unsummon_dead:{
		description: 	'When any ally creature unit dies, there is a {LEVEL}0% chance it returns to your hand. Will not unsummon summoned units.',
		cannot_proc_while_stunned: true,
		proc: 			'ally_creature_death',
		proc_chance: 	25,
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
	vampiric:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this deals physical damage to a non-undead creature, it heals iself by the amount of damage done.',
		proc: 			'dealt_damage',
		subtypes: 		['physical'],
		origin_type:    'creature',
		origin_does_not_have_ability: ['undead'],
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
				subtypes: 		['vampiric','drain'],
				amount: 		'latest_result'
			}
		},
		level_cost: 		1,
		level_cost_hero: 	1,
		cost_factor: 	'power'
	},
	vengeance:{
		name: 		'vengeance',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When any ally creature is destroyed, deals {LEVEL} physical melee damage to the nearest enemy unit. Will target the enemy hero if there are no enemy units.',
		proc: 		'ally_creature_death',
		proc_amount: 	1,
		proc_while_dead: false,
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
		name: 		'vengeance',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When any ally creature is destroyed, deals {LEVEL} physical melee damage to the nearest enemy unit. Will not target the enemy hero.',
		proc: 		'ally_creature_death',
		proc_amount: 	1,
		proc_while_dead: false,
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
		name_color: 	'rgba(202, 230, 48,0.9)',
		description: 	'Applies {LEVEL} poison to any creature it damages.{POISON}',
		proc: 		'dealt_damage',
		proc_while_dead: true,
		scales: 		true,
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
	victory_rush:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'Gains {LEVEL} additional turn(s) when it destroys an enemy.',
		proc: 			'kill',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
		level_cost: 	0.25,
		level_cost_hero: 0.2,
		cost_factor: 'full',
	},
	water_blast:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} physical water damage to all enemy units.',
		cannot_proc_while_stunned: true,
		//do_not_pause_between: true,
		scales: 		true,
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
				projectile: 	'water',
				type: 			'damage',
				subtypes: 		['physical','water','water_blast','elemental'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	4,
		average_hits: 		3,
	},
	water_bolt:		{
		name_color: 	'rgba(255,55,55,0.9)',
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
		level_cost_spell: 	2,
		average_hits: 		1,
	},
	water_bolt_hv:		{
		name: 			'water bolt',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} physical water projectile damage to a random enemy unit.',
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
	weaken:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'An enemy creature that has power looses {LEVEL} power until it acts, or until the end of its round. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				min_power: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lull',
				type: 			'grant_temp_power',
				subtypes: 		['weaken_enemy'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	0.75,
	},
	weaken_all:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'All enemy creatures that use power loose {LEVEL} power until they act, or until the end of their round. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				min_power: 		0,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'lull',
				type: 			'grant_temp_power',
				subtypes: 		['weaken_enemy'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	2,
	},
	weaken_all_living:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'All non-undead enemy creatures that have power loose {LEVEL} power until they act, or until the end of their round. Cannot affect heroes.',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				max_abilities: 	{undead: 0},
				min_hp: 		1,
				min_power: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				pause_before: 	500,
				projectile: 	'lull',
				type: 			'grant_temp_power',
				subtypes: 		['weaken_enemy'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	1.5,
	},
	weakening_entry:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'When played, all enemy creatures that have power loose {LEVEL} power until they act. Cannot affect heroes.',
		proc: 			'on_play',
		remove_skill: 	'weakening_entry',
		cannot_proc_while_stunned: true,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				not_types: 		['object','structure'],
				min_hp: 		1,
				min_power: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'lull',
				type: 			'grant_temp_power',
				subtypes: 		['weaken_enemy'],
				amount: 		'ability_level',
				amount_factor: 	-1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		1,
	},
	wither:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL}. Will target the enemy hero if there are no enemy units.',
		proc: 		'basic',
		proc_while_dead: true,
		proc_amount: 	1,
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
		level_cost: 		2,
		level_cost_hero: 	2,
		level_cost_spell: 	1,
	},
	wither_hv:{
		name: 			'wither',
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL}. Will not target the enemy hero.',
		proc: 		'basic',
		proc_while_dead: true,
		proc_amount: 	1,
		scales: 		true,
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
		level_cost: 		2,
		level_cost_hero: 	2,
		level_cost_spell: 	1,
	},
	wither_all:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Reduces the maximum health of all enemy units by {LEVEL}. Cannot affect the enemy hero.',
		proc: 		'basic',
		proc_while_dead: true,
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
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
		level_cost: 		6,
		level_cost_spell: 	2.5,
	},
	withering_aura:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Reduces the maximum health by {LEVEL} of any enemy unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		scales: 		true,
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
				projectile: 'wither',
				type: 		'reduce_max_health',
				subtypes: 	['magical','wither'],
				amount: 	'ability_level',
			}
		},
		level_cost: 	2,
		level_cost_hero: 4,
	},
	withering_deaths:{
		name: 			'withering deaths',
		name_color: 	'rgba(160, 95, 250,0.9)',
		show_amount: 	true,
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL} when any ally creature is destroyed. Will target the enemy hero if there are no enemy units.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['magical','wither'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		2,
	},
	withering_deaths_hv:{
		name: 			'withering deaths',
		name_color: 	'rgba(160, 95, 250,0.9)',
		show_amount: 	true,
		description: 	'Reduces the maximum health of a random enemy unit by {LEVEL} when any ally creature is destroyed. Will not target the enemy hero.',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
				projectile: 	'wither',
				type: 			'reduce_max_health',
				subtypes: 		['magical','wither'],
				amount: 		'ability_level',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 		2,
	},
	withering_entry:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When played, reduces the maximum health of all enemy units by {LEVEL}.',
		proc: 			'on_play',
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
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
		level_cost: 		1,
	},
	withering_touch: 	{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Any damage this deals to enemies reduces the maximum health of that enemy as well.',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		proc_amount: 	1,
		//scales: 		true,
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
	wound_enemy:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Wounds {LEVEL} random enemy creature unit(s). Wounded units cannot be healed.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 		['structure','object'],
				max_abilities: 	{wounded: 0},
				min_hp: 		1,
				side: 			'enemy'
			},
		},
		effects:{
			0:{
				projectile: 	'wound',
				type: 			'grant_skill',
				subtypes: 		['wound_enemy'],
				skill_id: 		'wounded',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	wounded:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'Cannot be healed.',
		proc: 			'none',
		grants_immunities: 	['healing'],
		level_cost: 	0,
	},
	zombify:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'If a human ally creature dies, turns it into a zombie. Can be used {LEVEL} time(s).',
		proc: 			'ally_creature_death',
		reduce_skill_after_use: 'zombify',
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				max_abilities: 	{undead: 0},
				subtypes: 		['human'],
				origin_unit: 	true,
				max_hp: 		0,
				min_total_hp: 	1,
				side: 			'ally',
			},
		},
		effects:{
			0:{
				projectile: 'go_again',
				type: 		'turn_into',
				subtypes: 	['shift','turn_ally_into'],
				card_id: 	'zombie',
				amount: 	1
			},
			1:{
				type: 		'set_effect_amount',
				effect_names:{
					poisoned: 	0,
					energy: 	0,
				},
				subtypes: 	[],
				amount: 	1
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	3,
	},
	auto_learn:		{
		name: 			'learned on pickup',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This recipe is automatically added to your known recipes when picked up.',
		not_on_hero: 	true,
		level_cost: 	0,
		cost_factor: 	'full',
		used: 			true,
	},

}
