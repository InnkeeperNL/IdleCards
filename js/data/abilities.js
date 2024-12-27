var all_abilities = {
	
	air_blast:{
		description: 	'Deals {LEVEL} physical damage to all flying enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	5,
				position: 		'random',
				has_ability: 	'flying',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'min'},
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
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
		average_hits: 		2,
	},
	air_bolt:{
		description: 	'Deals {LEVEL} physical projectile damage to a random flying enemy unit. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_ability: 	'flying',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'min'},
				min_hp: 		1,
				side: 			'enemy'
			},
			1:{
				target: 		'hero',
				target_amount: 	1,
				position: 		'random',
				has_ability: 	'flying',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'min'},
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
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	air_bolt_hv:{
		name: 			'air bolt',
		description: 	'Deals {LEVEL} physical projectile damage to a random flying enemy unit. Will not target the enemy hero.',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
		scales: 		true,
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				has_ability: 	'flying',
				has_effect: 	{effect_name: 'stunned', amount: 0, limit: 'min'},
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
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	ally_runs_away:{
		description: 	'An ally creature unit facing an enemy unit will move to a slot with no opposing unit. Can be used when played, any enemy unit enters the game, an enemy moved or on its turn, but only once each round.',
		proc: 			['on_play','enemy_unit_card_played','enemy_moved','basic'],
		delay: 			1,
		min_double_free_slots: 1,
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
		level_cost: 	1,
	},
	arcane_bolt:{
		description: 	'Deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s). Will only target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
				projectile: 	'magic',
				type: 			'damage',
				subtypes: 		['magical','projectile','arcane_bolts'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
		level_cost_spell: 	1.5,
		average_hits: 		'ability_level',
	},
	arcane_bolt_hv:{
		name: 			'arcane bolt',
		description: 	'Deals 1 magical projectile damage to a random enemy unit {LEVEL} time(s).',
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
				subtypes: 		['magical','projectile','arcane_bolts'],
				amount: 		1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		2.5,
		level_cost_spell: 	1,
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
	backstab:{
		description: 	'When this deals melee damage to the enemy hero, it deals {LEVEL} damage to a ransom enemy unit.',
		proc: 			'dealt_damage_to_hero',
		subtypes: 		['melee'],
		proc_amount: 	1,
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
		animation: 		'attack',
		level_cost: 	1,
		average_hits: 	1,
	},
	bless:{
		description: 	'A random ally unit gains {LEVEL} blessings. {BLESSED}',
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
				projectile: 	'bless',
				type: 			'grant_skill',
				subtypes: 		['bless','grant_bless'],
				skill_id: 		'blessed',
				amount: 		'ability_level'
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	1.5,
		level_cost_spell: 0.75,
	},
	blessed:{
		description: 	'Has a {LEVEL}0% chance to return to your deck when destroyed.',
		proc: 			'own_death',
		proc_chance: 	10,
		proc_factor: 	'ability_level',
		proc_while_dead: true,
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
				//pause_before: 	-1000,
				target_projectile: 	'bless',
				type: 			'move_to_deck',
				subtypes: 		['move_ally_to_deck','deck_control'],
				new_status: 	'deck',
				side: 			'ally',
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	0.2,
	},
	blood_rage:{
		description: 	'A random living ally creature unit with at least 2 health gains {LEVEL} power and looses 1 health permanently.',
		cannot_proc_while_stunned: true,
		scales: true,
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
				subtypes: 		['mental','rage','empower','empower_ally'],
				amount: 		'ability_level',
			},
			1:{
				type: 			'increase_health',
				subtypes: 		[],
				amount: 		-1,
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	2,
		cost_adjustment: 	-1,
	},
	bolster_hero:{
		description: 	'Your hero gains {LEVEL} health permanently.',
		proc: 			'basic',
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
				projectile: 	'bolster',
				type: 			'increase_health',
				subtypes: 		['bolster','bolster_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	4,
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
		level_cost_artifact: 2,
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
		level_cost_spell: 	1,
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
	burn_all:{
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
		level_cost_spell: 	3,
	},
	chaos_strikes:{
		description: 	'When the enemy hero receives damage, move a cards from the enemy\'s hand to the grave. Can be used {LEVEL} time(s).',
		proc: 			'enemy_hero_damaged',
		reduce_skill_after_use: 'chaos_strikes',
		proc_amount: 	1,
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
		level_cost_artifact: 3,
		level_cost_hero: 	3,
	},
	chaos_touch:{
		description: 	'When this deals damage to the enemy hero, move a cards from the enemy\'s hand to the grave. Can be used {LEVEL} time(s).',
		proc: 			'dealt_damage_to_hero',
		reduce_skill_after_use: 'chaos_touch',
		proc_amount: 	1,
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
	clone_ally:{
		ability_subtypes: ['summon_ally','summon_creature'],
		description: 	'Creates a clone of a random ally creature.',
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
		level_cost: 10,
	},
	clone_target:{
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
				//projectile: 	'teleport',
				type: 			'summon_unit',
				subtypes: 		['magical','clone_unit','summon_ally','summon_creature'],
				card_id: 		'self',
				card_type: 		'creature',
				amount: 		1,
			}
		},
		//animation: 	'combat_zoom',
	},
	cold_strike:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals physical cold melee damage equal to its power to the opposing unit. Has a 25% chance to stun any unit or hero it hits. Will target the enemy hero if there is no opposing unit.',
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
	},
	cold_strike_hv:{
		name: 			'cold strike',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals physical cold melee damage equal to its power to the nearest enemy unit. Has a 25% chance to stun any unit it hits. Will not target the enemy hero.',
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
	},
	conflagrate:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} piercing fire damage to a random burning enemy unit or hero multiplied by the burn it suffers.',
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['fire'],
		ability_craft_subtypes:['burn'],
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
		average_hits: 		1,
	},
	conflagrate_hv:{
		name: 			'conflagrate',
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} piercing fire damage to a random burning enemy unit multiplied by the burn it suffers.',
		cannot_proc_while_stunned: true,
		not_ability_subtypes:['fire'],
		ability_craft_subtypes:['burn'],
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
		average_hits: 		1,
		
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
	counter_spell:		{
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
		level_cost_artifact: 2,
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
		level_cost_spell: 0.75,
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
		level_cost: 		4.5,
		level_cost_hero: 	4,
		level_cost_spell: 	2,
	},
	curse_hv:{
		name: 			'curse',
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
		level_cost_spell: 0.75,
	},
	cursed_aura:{
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
		level_cost_hero: 2,
	},
	cursed_deaths:{
		description: 	'Applies {LEVEL} curse to a random enemy unit or hero when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
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
		animation: 		'combat_zoom',
		level_cost: 	1.5,
	},
	cursed_deaths_hv:{
		name: 			'cursed deaths',
		description: 	'Applies {LEVEL} curse to a random enemy unit when any ally creature is destroyed.',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
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
		animation: 		'combat_zoom',
		level_cost: 	2,
		level_cost_artifact: 3,
	},
	cursed_touch:{
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
		level_cost_spell: 	3,
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
		level_cost_spell: 	9,
	},
	demolish:{
		description: 	'Destroys any non-golem structure unit it hits with a melee ability.',
		proc: 			'hit_with_ability',
		subtypes: 		['melee'],
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
				subtypes: 		['demolish'],
				amount: 		1
			}
		},
		level_cost: 		0.5,
		level_cost_hero: 	2,
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
		level_cost: 	8,
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
		level_cost: 	6,
		level_cost_artifact: 2.2,
	},
	discard:{
		description: 	'Moves up to {LEVEL} card(s) from the your hand to the grave.',
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
		level_cost: 		-4,
		level_cost_hero: 	-2,
	},
	discard_enemy:{
		description: 	'Moves up to {LEVEL} card(s) from the enemy\'s hand to the grave.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use:'discard_enemy',
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
		level_cost_hero: 	4,
	},
	doom:{
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
		description: 	'Applies {LEVEL} doom to all enemy units.{DOOM}',
		cannot_proc_while_stunned: true,
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
		level_cost: 	4.5,
		level_cost_spell: 1.5,
	},
	dooming_touch:{
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
	draw:{
		description: 	'When played, draws up to {LEVEL} card(s).',
		cannot_proc_while_stunned: true,
		proc: 			['on_play','basic'],
		proc_amount: 	'ability_level',
		remove_skill: 	'draw',
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
		ability_level_cost_factors:{
			homebound: 		1.5,
		},
		//cost_on_top: 	true,
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
		//cost_on_top: 	true,
	},
	
	echo:{
		name_color: 	'rgba(171, 203, 255,0.9)',
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
				subtypes: 		['move_ally_to_hand','deck_control'],
				new_status: 	'hand',
				side: 			'ally',
				//pause_before: 2000,
			}
		},
		cost_factor: 	'full',
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
		level_cost: 		2,
		level_cost_spell: 	1,
		level_cost_hero: 	2,
	},
	empower_all:{
		name_color: 	'rgba(247, 170, 15,0.9)',
		description: 	'All ally creatures that have power gain {LEVEL} power until they act. Cannot affect heroes or itself.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
		level_cost_spell: 	3,
		level_cost_hero: 	6,
	},
	empower_imps:{
		description: 	'All ally imp units that have power gain {LEVEL} power until they act. Cannot affect itself.',
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
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		5,
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
				pause_before: 	500,
				projectile: 	'power',
				type: 			'increase_power',
				subtypes: 		['empower','empower_ally'],
				amount: 		'ability_level'
			},
			1:{
				pause_before: 	1000,
				type: 			'increase_health',
				subtypes: 		['bolster','bolster_ally'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
	},
	eat_sporeling:{
		description: 	'If damaged, destroys a random sporeling. This then heals itself by {LEVEL}.',
		cannot_proc_while_stunned: true,
		scales: 		true,
		origin_damaged: true,
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
						subtypes: 		['destroy'],
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
	enrage:{
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
				subtypes: 		['empower','enrage','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
	},
	evade:{
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
		level_cost: 		0.5,
		min_cost: 			2,
		level_cost_hero: 	2,
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
				//highest_cost: 	true,
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
	fearful_aura:{
		description: 	'When this receives melee damage from a non-undead, non-horror enemy creature unit, that unit returns to their owner\'s hand. Any summoned units this targets disappear.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_amount: 	1,
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
		description: 	'When your hero receives melee damage from a non-undead, non-horror enemy creature unit, that unit returns to their owner\'s hand. Any summoned units this targets disappear.',
		proc: 			'ally_hero_damaged',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
		proc_amount: 	1,
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
		level_cost_artifact: 4,
	},
	feast:{
		description: 	'When any living creature is killed by this, that creature is detroyed. This then heals itself by {LEVEL}.',
		proc: 			'prekill_creature',
		cannot_proc_while_stunned: true,
		origin_does_not_have_ability: ['undead'],
		scales: 		true,
		ability_effects:{
			0:{
				targets:{
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
						projectile: 	'drain',
						type: 			'destroy',
						subtypes: 		['destroy'],
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
						subtypes: 		['healing','feast'],
						amount: 		'ability_level',
					}
				},
			},
			
		},
		level_cost: 	0.25,
		level_cost_hero: 2,
	},
	final_bolster_hero:{
		description: 	'When destroyed, your hero gains {LEVEL} health permanently.',
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
				type: 			'increase_health',
				subtypes: 		['bolster','bolster_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_artifact: 2,
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
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this is destroyed, moves up to {LEVEL} card(s) from your hand to the grave.',
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
		level_cost: 		-4,
	},
	final_hasten:{
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
	final_pay_life:{
		description: 	'When destroyed, reduces the health of your hero by {LEVEL}.',
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
				type: 			'reduce_health',
				amount: 		'ability_level',
			},
		},
		level_cost: 	-1,
		ability_level_cost_factors:{
			resurrect: 		2,
		},
	},
	fire_aura:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Deals {LEVEL} magical fire damage to any enemy unit or hero that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
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
		level_cost: 		3,
		level_cost_spell: 	1.5,
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
		level_cost: 		2.5,
		level_cost_spell: 	1.25,
		average_hits: 		1,
	},
	fireproof:{
		description: 		'This unit is immune to fire and burn effects.',
		grants_immunities: 	['fire','burn'],
		ability_subtypes: 	['fireproof'],
		level_cost: 2,
	},
	first_aid:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'When an ally creature unit receives damages, this heals that ally by {LEVEL}. Can be used once each round.',
		proc: 			'ally_takes_damage',
		cannot_proc_while_stunned: true,
		delay: 			1,
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
		//level_cost_cum: true,
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
		level_cost_hero: 	3,
		cost_factor: 		'health',
	},
	fortify:{
		description: 	'Grants a random ally unit {LEVEL} shield. Cannot affect heroes. {SHIELD}',
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
		description: 	'Grants all ally units {LEVEL} shield. Cannot affect heroes. {SHIELD}',
		cannot_proc_while_stunned: true,
		do_not_pause_between: true,
		scales: 		true,
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
		level_cost: 		3,
		level_cost_hero: 	4,
		level_cost_spell: 	1.5,
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
		animation: 		'combat_zoom',
		level_cost: 	1.5,
	},
	frost_bolt:{
		description: 	'Deals {LEVEL} physical cold projectile damage to a random enemy unit. Has a 25% chance to stun any unit or hero it hits. Will target the enemy hero if there are no enemy units.',
		cannot_proc_while_stunned: true,
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
		level_cost: 		3,
		level_cost_spell: 	1.5,
		average_hits: 		1,
		cost_adjustment: 	1,
	},
	frost_bolt_hv:{
		name: 			'frost bolt',
		description: 	'Deals {LEVEL} physical cold projectile damage to a random enemy unit. Has a 25% chance to stun any unit it hits. Will not target the enemy hero.',
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
		level_cost: 		2.5,
		level_cost_spell: 	1,
		average_hits: 		1,
		cost_adjustment: 	1,
	},
	guard:{
		description: 	'When played, an enemy unit enters the game or any unit is destroyed, if there is no opposing enemy unit, this unit will move to a free slot with an opposing unit. Can be used once each round.',
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
		description: 	'Reduces the time left of all cards in your hand by {LEVEL}.',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		proc_amount: 	1,
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
		level_cost_spell: 	10,
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
	},
	hex:{
		description: 	'Turns {LEVEL} nearest non-undead enemy creature unit(s) into a frog until the end of their next round.',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
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
		level_cost: 		10,
		level_cost_spell: 	5,
		level_cost_hero: 	4,
	},
	hide:{
		description: 	'Has a 75% chance to grant itself stealth every turn.',
		proc_chance: 	75,
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
		level_cost_spell: 	2.5,
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
				subtypes: 	['grant_stealth'],
				skill_id: 	'stealth',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_hero: 	2,
		level_cost_spell: 	2,
	},
	homebound:{
		name_color: 	'rgba(171, 203, 255,0.9)',
		description: 	'Has a 50% chance to return to its owner\'s hand. If this was summoned, it disappears.',
		cannot_proc_while_stunned: true,
		proc_chance: 	50,
		targets:	{
			0:{
				target: 		'any',
				target_amount: 	1,
				position: 		'self',
				side: 			'ally',
				//has_origin_card: true,
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
		level_cost: 	2,
	},
	ice_blast:{
		description: 	'Deals {LEVEL} physical cold damage to all enemy units. Has a 25% chance to stun any unit or hero it hits.',
		cannot_proc_while_stunned: true,
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
				subtypes: 		['physical','cold'],
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
		level_cost_spell: 	4.5,
		average_hits: 		3,
		cost_adjustment: 	3,
	},
	ignites:{
		name_color: 	'rgba(255,55,55,0.9)',
		description: 	'Applies {LEVEL} burn to any unit or hero it deals damage to.{BURN}',
		proc: 			'dealt_damage',
		ability_subtypes:['dealt_damage_proc'],
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
	leech_hero:{
		description: 	'When this deals damage to the enemy hero, your hero gains {LEVEL} health permanently.',
		proc: 			'dealt_damage_to_hero',
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
				projectile: 	'bolster',
				type: 			'increase_health',
				subtypes: 		['bolster','bolster_hero'],
				amount: 		'ability_level'
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	1,
	},
	levitate:{
		name: 			'levitate',
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
				subtypes: 		['magical','grant_flying'],
				skill_id: 		'flying',
				amount: 		1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		9,
		level_cost_spell: 	4.5,
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
				subtypes: 	['summon_ally','summon_creature'],
				type: 		'summon_unit',
				card_id: 	'vine',
				amount: 	1,
			}
		},
		animation: 		'combat_zoom',
		level_cost: 	6,
	},
	maximum_allies:{
		name: 		'allies:',
		post_name: 	'-',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s more than {LEVEL} ally unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'maximum_allies',
		show_amount_adjustment: 0,
		level_cost: 	0,
	},
	maximum_enemies:{
		name: 		'enemies:',
		post_name: 	'-',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s more than {LEVEL} enemy unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'maximum_enemies',
		show_amount_adjustment: 0,
		level_cost: 	1,
		cost_adjustment: -4,
	},
	minimum_allies:{
		name: 			'allies:',
		post_name: 		'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s less than {LEVEL} ally unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_allies',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		level_cost_cum: true,
	},
	minimum_ally_creatures:{
		name: 			'ally creatures:',
		post_name: 		'+',
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s less than {LEVEL} ally creature unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_ally_creatures',
		show_amount_adjustment: 0,
		level_cost: 	0.25,
		level_cost_cum: true,
	},
	minimum_enemies:{
		name: 			'enemies:',
		post_name: 		'+',
		ability_subtypes: 		['min_enemies'],
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'This card will not be played if there\'s less than {LEVEL} enemy unit(s) in play.',
		proc: 			'on_play',
		remove_skill: 	'minimum_enemies',
		show_amount_adjustment: 0,
		level_cost: 	-0.1,
		cost_factor: 	'full',
		level_cost_cum: true,
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
		level_cost_cum: true,
	},
	plated:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Reduces incoming physical damage down to {LEVEL}.',
		//proc: 			'reduce_incoming_damage',
		proc: 			'max_incoming_damage',
		subtypes: 		['physical'],
		negated_by: 	['ignores_armor'],
		//reduce_chance: 	75,
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
		cost_adjustment: 4,
		level_cost: 	-1,
		level_cost_hero: 0,
	},
	plunder:{
		name_color: 	'rgba(247, 170, 15,0.9)',
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
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	poison_all:{
		description: 	'Applies {LEVEL} poison to all enemy creatures. {POISON}',
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
				type: 			'apply_poison',
				projectile: 	'poison',
				subtypes: 		['poison'],
				amount: 		'ability_level'
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		4,
		level_cost_spell: 	2,
	},
	poison_aura:{
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
		animation: 			'combat_zoom',
		level_cost: 		2,
		level_cost_spell: 	1,
	},
	raging_deaths:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'When an ally creature is detroyed, this gains {LEVEL} temporary power.',
		proc: 			'ally_creature_death',
		ability_subtypes:['on_death_proc'],
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
				subtypes: 		['empower','enrage','empower_ally'],
				amount: 		'ability_level',
			},
		},
		level_cost: 		2,
	},
	raise_skeleton:{
		description: 	'The first time an ally creature dies, this summons up to a total of {LEVEL} skeleton(s).',
		proc: 			'ally_creature_death',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		reduce_skill_after_use:'raise_skeleton',
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
		level_cost: 6,
	},
	reap:{
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
		level_cost: 		4,
		level_cost_hero: 	4,
		level_cost_spell: 	2,
	},
	reap_all:{
		description: 	'Destroys all enemy creatures with {LEVEL} or less health.',
		cannot_proc_while_stunned: true,
		scales: 		true,
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
		level_cost_spell: 	4,
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
	resist_magic:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Has a 50% chance to reduce incoming magical damage to 0.',
		//proc: 			'reduce_incoming_damage',
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
		level_cost: 	1,
	},
	resist_fire:{
		name_color: 	'rgba(255, 55, 55,0.9)',
		description: 	'Has a 50% chance to reduce incoming fire damage to 0.',
		//proc: 			'reduce_incoming_damage',
		proc: 			'max_incoming_damage',
		reduce_chance: 	50,
		subtypes: 		['fire'],
		//negated_by: 	['ignores_armor'],
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
		level_cost: 	1,
	},
	resurrect:{
		name_color: 	'rgba(160, 95, 250,0.9)',
		description: 	'When this unit\'s health reaches 0, it has a 60% chance to come back to life with {LEVEL}0% health, rounded up.',
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
				amount: 		'target_max_health',
				amount_factors: ['ability_level',0.1],
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		0.3,
		min_cost: 			3,
		cost_factor: 		'health',
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
	revive_hero:{
		description: 	'When your hero\'s health reaches 0, this will bring it back to life with 10% health. Can be used {LEVEL} time(s).',
		proc: 			'ally_death',
		reduce_skill_after_use: 'revive_hero',
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
				amount: 		'target_max_health',
				amount_factor: 	0.1,
			},
		},
		animation: 			'combat_zoom',
		level_cost: 		2,
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
		description: 	'Destroy up to {LEVEL} random ally unit(s) or artifact(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'sacrifice',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 5,
				position: 	'random',
				not_self: 	true,
				side: 		'ally'
			},
			1:{
				add_targets: true,
				target: 	'artifact',
				target_amount: 1,
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
	sacrifice_creature:{
		description: 	'Destroy up to {LEVEL} random ally creature unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'sacrifice_creature',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_self: 	true,
				not_types: 	['structure'],
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
		level_cost: 	-6,
	},
	sacrifice_living_creature:{
		description: 	'Destroy up to {LEVEL} random ally non-undead creature unit(s).',
		cannot_proc_while_stunned: true,
		proc_amount: 	'ability_level',
		reduce_skill_after_use: 'sacrifice_living_creature',
		targets:	{
			0:{
				target: 	'unit',
				target_amount: 1,
				position: 	'random',
				not_self: 	true,
				not_types: 	['structure','artifact'],
				max_abilities: 	{undead: 0},
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
		level_cost: 	-6,
	},
	scavange:{
		name_color: 	'rgba(55,255,55,0.9)',
		description: 	'When any structure or artifact is destroyed, this gains {LEVEL} temporary power.',
		proc: 			['artifact_death','structure_death'],
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
				subtypes: 		['empower','enrage','empower_ally'],
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
		level_cost: 	3,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
	},
	shoot_unit:		{
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
		level_cost: 	2.5,
		cost_factor: 	'power',
		average_hits: 	'ability_level',
	},
	spawn_sporeling:{
		description: 	'Has a 25% chance to summon {LEVEL} sporeling(s).',
		proc: 			'basic',
		proc_chance: 	25,
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
				card_id: 	'sporeling',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 2,
	},
	steal:{
		description: 	'When this deals damage to the enemy hero, gain control over an enemy artifact. Can only be used if you have less then 5 artifacts in play.',
		proc: 			'dealt_damage_to_hero',
		ability_subtypes: 	['dealt_damage_proc'],
		cannot_proc_while_stunned: true,
		max_ally_artifacts: 4,
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
		level_cost: 	4,
		cost_factor: 	'none',
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
	},
	strike_arrivals:{
		name_color: 	'rgba(255,255,255,0.9)',
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
				subtypes: 		['physical','melee'],
				amount: 		'ability_level'
			}
		},
		animation: 			'attack',
		level_cost: 		4,
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
	},
	striking_entry:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'When played, deals {LEVEL} physical melee damage to the nearest enemy unit. Will target the enemy hero if there are no enemy units.',
		proc: 			'on_play',
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
				amount: 		'ability_level'
			}
		},
		animation: 		'attack',
		level_cost: 	1.5,
		average_hits: 	0.5,
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
	},
	stun_construct:{
		description: 	'Stuns a random enemy artifact or golem for {LEVEL} turn(s).',
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
		targets:	{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				not_types: 	['structure'],
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
	},
	summon_conscript:{
		description: 	'Summons {LEVEL} conscript(s).',
		proc: 			'basic',
		cannot_proc_while_stunned: true,
		max_ally_units: 4,
		//reduce_skill_after_use:'summon_conscript',
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
				card_id: 	'conscript',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		12,
		level_cost_spell: 	3,
	},
	summon_frog:{
		description: 	'Summons {LEVEL} frog(s).',
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
				card_id: 	'frog',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		6,
	},
	summon_ghost:{
		description: 	'Summons {LEVEL} ghost(s).',
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
				card_id: 	'ghost',
				amount: 	1
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		3,
	},
	summon_imp:{
		description: 	'Summons up to a total of {LEVEL} imp type unit(s).',
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
		level_cost: 6,
	},
	summon_skeleton:{
		description: 	'Summons up to a total of {LEVEL} skeleton(s).',
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
				card_id: 	'skeleton',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 6,
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
		level_cost: 12,
		level_cost_spell: 3,
	},
	summon_sporeling:{
		description: 	'Summons {LEVEL} sporeling(s).',
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
				card_id: 	'sporeling',
				amount: 	1
			}
		},
		animation: 	'combat_zoom',
		level_cost: 5,
	},
	thorns:{
		description: 	'Deals {LEVEL} physical damage to any enemy that deals melee damage to it.',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		ability_subtypes: ['receive_damage_proc'],
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
		level_cost: 		2.5,
		level_cost_hero: 	4,
		average_hits: 		1,
	},
	trap:{
		name_color: 	'rgba(255,255,255,0.9)',
		description: 	'Any enemy unit or hero that deals melee damage to this has a 25% chance to be stunned for {LEVEL} round(s).',
		proc: 			'receive_damage',
		subtypes: 		['melee'],
		proc_while_dead: true,
		proc_chance:    25,
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
	undead:{
		name_color: 		'rgba(255,255,255,0.9)',
		description: 		'This unit is immune to poison and all mental effects.',
		grants_immunities: 	['poison','mental'],
		ability_subtypes: 	['undead'],
	},
	unsummon_ally:{
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
		level_cost: 		3,
		level_cost_spell: 	1.5,
	},
	vampiric:{
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
		level_cost: 		2,
		level_cost_hero: 	2,
		cost_factor: 	'power'
	},
	venom:{
		description: 	'Applies {LEVEL} poison to any creature it damages.{POISON}',
		proc: 			'dealt_damage',
		ability_subtypes: 	['dealt_damage_proc'],
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
	water_blast:{
		description: 	'Deals {LEVEL} physical water damage to all non-flying enemy units.',
		cannot_proc_while_stunned: true,
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
				subtypes: 		['physical','water'],
				amount: 		'ability_level',
			}
		},
		animation: 			'combat_zoom',
		level_cost: 		8,
		level_cost_spell: 	4,
		average_hits: 		3,
	},
	weakness:{
		description: 	'A random enemy creature unit that has at least 1 power looses {LEVEL} power until they act.',
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
		level_cost: 		2,
		level_cost_spell: 	1,
		level_cost_hero: 	2,
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
	withering_touch: 	{
		description: 	'Any damage this deals to enemies reduces the maximum health of that enemy as well.',
		proc: 			'dealt_damage',
		proc_while_dead: true,
		proc_amount: 	1,
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
		level_cost: 	2,
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

}

//generate_abilities();
var not_craft_themes = [
	'physical',
	'melee',
	'magical',
	'movement',
	'evade',
	'move_ally_to_hand',
	'move_ally_to_deck',
	'summon_ally',
	'type_resist'
]

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
			var found_craft_effect_type = false;
			$.each(ability_effect['subtypes'], function(subtype_id, subtype_name){
				
				if(all_abilities[ability_id]['not_ability_subtypes'] == undefined || match_array_values(all_abilities[ability_id]['not_ability_subtypes'], subtype_name) == false)
				{
					ability_subtype_id++;
					all_abilities[ability_id]['ability_subtypes'][ability_subtype_id] = subtype_name;
				}
				if(/*found_craft_effect_type == false && */match_array_values(not_craft_themes, subtype_name) == false)
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
	}
	else
	{
		$.each(all_abilities[ability_id]['proc'], function(proc_id, ability_proc){
			ability_subtype_id++;
			all_abilities[ability_id]['ability_subtypes'][ability_subtype_id] = ability_proc + '_proc';
		});
	}
	
	all_abilities[ability_id]['name_color'] = 'rgba(255,255,255,0.9)';
	all_abilities[ability_id]['description'] = ability_info['description'].split("{BURN}").join('<br/><i>Burn: Suffers fire damage equal to half the burn it suffers at the end of each turn, rounded up. The amount of burn is halved each time it deals damage, rounded down.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{POISON}").join('<br/><i>Poison: Suffers piercing poison damage at the end of each turn equal to half the amount of poison, rounded up. The amount of poison is halved each time it deals damage, rounded down.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{CURSE}").join('<br/><i>Curse: Increases damage received. Curse is removed whenever it takes effect.</i>');
	//all_abilities[ability_id]['description'] = ability_info['description'].split("{BLESS}").join('<br/><i>Blessed: Reduces damage received. Blessed is reduced by the amount of damage absorbed.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{BLESSED}").join('<br/><i>Blessed: There is a 10% chance per blessing that this will return to your deck when destroyed.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{DOOM}").join('<br/><i>Doom: There is a 10% chance per doom that this will be destroyed at the end of its turn.</i>');
	all_abilities[ability_id]['description'] = ability_info['description'].split("{SHIELD}").join('<br/><i>Shield: Absorbs the first incoming damage. Shield is removed at the start of each round.</i>');
});

function calc_proc_effect(test_amount, proc_chance){
	//var resurrect_chance = all_abilities[card_id]['proc_chance'] / 100;
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