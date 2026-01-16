var unit_abilities = {
	attack:{
		name: 			'attack',
		types: 			['physical'],
		proc: 			'basic',
		image: 			'excalibur-1960799_640.jpg',
		description: 	'Attacks target enemy. Damage is based on strength.',
		cooldown: 		1,
		spell_cooldown: 1,
		mana_cost: 		5,
		spell_target: 	'enemy',
		sound: 			['395366__ihitokage__swish-3.ogg','60009__qubodup__swosh-22.flac'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	sinister_strike:{
		name: 			'sinister strike',
		types: 			['physical'],
		proc: 			'basic',
		image: 			'blood-3301880_640.jpg',
		description: 	'Attacks target enemy. Damage is based on agility.',
		cooldown: 		2,
		spell_cooldown: 1,
		mana_cost: 		5,
		spell_target: 	'enemy',
		sound: 			['395366__ihitokage__swish-3.ogg','60009__qubodup__swosh-22.flac'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				hp_state: 		'lowest',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'speed',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	quick_strike:{
		name: 			'quick strike',
		types: 			['physical'],
		proc: 			'basic',
		image: 			'stylet-1750473_640.jpg',
		description: 	'A fast attack that deals little damage. Effect is based on agility.',
		cooldown: 		0.5,
		spell_cooldown: 0.5,
		mana_cost: 		5,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'speed',
						fct_size: 		0.75,
						fct_color: 		'#f00',
						factor: 		0.5
					}
				}
			}
		}
	},
	peck:{
		name: 			'peck',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		0.5,
		sound: 			['244513__jewtwinz__realistic-punch.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#f00',
						factor: 		0.5
					}
				}
			}
		}
	},
	twin_strike:{
		name: 			'twin strike',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2,
		sound: 			['52458__audione__sword-01.wav'],
		volume_factor: 	0.2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	2,
				unique_targets: 1,
				ability_delay: 	0.25,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	fairy_dust:{
		name: 			'fairy dust',
		types: 			['magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/detail-1434536_640.jpg',
						buff_name: 		'soothe',
						buff_type: 		'debuff',
						fct_size: 		0.5,
						fct_color: 		'#8f8',
						factor: 		-0.5,
						duration: 		1
					},
					1:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0ff',
						factor: 		1
					},
					2:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['raise_alarm','enrage'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	arcane_blast:{
		name: 			'arcane blast',
		types: 			['magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		1.5,
		image: 			'explosion-2483998_640.jpg',
		description: 	'Strike up to 3 random enemy targets with medium magic damage. It has no cooldown but high mana cost.',
		spell_cooldown: 0,
		mana_cost: 		15,
		random_target: 	true,
		spell_target: 	'any',
		sound: 			['320366__n-audioman__explosion3.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 3,
				effect:{
					1:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0ff',
						factor: 		0.5
					}
				}
			}
		}
	},
	arcane_missiles:{
		name: 			'arcane missiles',
		types: 			['magical','magical_damage','ranged'],
		proc: 			'basic',
		cooldown: 		3,
		image: 			'explosion-2483998_640.jpg',
		description: 	'Strike an enemy target with medium magic damage three times.',
		spell_cooldown: 3,
		mana_cost: 		15,
		spell_target: 	'enemy',
		sound: 			['320366__n-audioman__explosion3.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	3,
				unique_targets: 1,
				ability_delay: 	0.2,
				effect:{
					1:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0ff',
						factor: 		1
					}
				}
			}
		}
	},
	smash:{
		name: 			'smash',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2,
		image: 			'boxer-2894025_640.jpg',
		description: 	'Attacks target enemy for major damage. Deals bonus damage to structures. Damage is based on strength.',
		spell_cooldown: 1,
		mana_cost: 		12,
		spell_target: 	'enemy',
		sound: 			['420670__sypherzent__strong-melee-swing.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						bonus_type: 	'structure',
						bonus_factor: 	2,
						fct_size: 		2,
						fct_color: 		'#f00',
						factor: 		2
					}
				}
			}
		}
	},
	grenade:{
		name: 			'grenade',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2.5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 5,
				target_random: 	true,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.9,
						fct_color: 		'#f00',
						factor: 		0.5
					}
				}
			}
		}
	},
	throw_bottle:{
		name: 			'throw bottle',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 5,
				target_random: 	true,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.9,
						fct_color: 		'#f00',
						factor: 		0.5
					},
					1:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['defense'],
						fct_size: 		0,
						fct_color: 		'#800',
						factor: 		-0.1,
						duration: 		2
					}
				}
			}
		}
	},
	minor_heal:{
		name: 			'minor heal',
		types: 			['healing'],
		proc: 			'basic',
		description: 	'Heals a damaged target. Effect is based on intellect.',
		cooldown: 		1,
		spell_cooldown: 1,
		mana_cost: 		5,
		spell_target: 	'ally',
		image: 			'crystals-1567953_640.jpg',
		sound: 			['341492__robinhood76__06515-bubble-interface-ding.wav'],
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: true,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		0.5
					}
				}
			}
		}
	},
	lifebloom:{
		name: 			'lifebloom',
		image: 			'rose-616013_640.jpg',
		description: 	'Heals a friendly damaged units for a small amount five times. Effect is based on intellect and the level of the spell.',
		types: 			['healing'],
		proc: 			'basic',
		mana_cost: 		15,
		cooldown: 		3,
		spell_cooldown: 12,
		spell_target: 	'ally',
		sound: 			['341492__robinhood76__06515-bubble-interface-ding.wav'],
		volume_factor: 	0.5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				hp_state: 		'lowest_percentage',
				target_count: 	1,
				unique_targets: 1,
				use_aggro: 		false,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['healing'],
						buff_image: 	'abilities/rose-616013_640.jpg',
						buff_name: 		'lifebloom',
						buff_type: 		'buff',
						fct_size: 		0.8,
						fct_color: 		'#8f8',
						factor: 		0.45,
						duration: 		4,
						time: 			0.8
					}
				}
			}
		}
	},
	soothe:{
		name: 			'soothe',
		types: 			['magical','mental'],
		proc: 			'basic',
		image: 			'detail-1434536_640.jpg',
		description: 	'Reduces the strength of target creature and removes all enrage effects. Effect is based on intellect.',
		spell_cooldown: 2,
		mana_cost: 		10,
		random_target: 	false,
		spell_target: 	'enemy',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				use_aggro: 		false,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/detail-1434536_640.jpg',
						buff_name: 		'soothe',
						buff_type: 		'debuff',
						fct_size: 		0.8,
						fct_color: 		'#088',
						factor: 		-0.2,
						duration: 		10
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['raise_alarm','enrage'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	raise_dead:{
		name: 			'raise dead',
		image: 			'skeleton-1522620_640.jpg',
		description:    'Raises a random dead ally as a skeleton.',
		random_target: 	true,
		spell_cooldown: 2,
		mana_cost: 		40,
		spell_target: 	'any',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'dead',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'skeleton',
						fct_size: 		0,
						fct_color: 		'',
						factor: 		0.1
					}
				}
			}
		}
	},
	eat_corpse:{
		name: 			'eat corpse',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'dead',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'remove_unit',
						fct_size: 		0,
						fct_color: 		'',
						factor: 		1
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'max_hp',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		0.25
					}
				}
			}
		}
	},
	summon_rat:{
		name: 			'summon rat',
		types: 			[],
		image: 			'roof-rat-961502_640.jpg',
		description:    'Summons a rat in a random empty spot or in stead of a corpse.',
		random_target: 	true,
		spell_target: 	'any',
		spell_cooldown: 40,
		mana_cost: 		40,
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		{
											diseased_rat: 		100,
											poison_rat: 		100,
											piercing_rat: 		100,
											giant_rat: 			50
										},
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.5
					}
				}
			}
		}
	},
	mirror_image:{
		name: 			'mirror image',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 2,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'illusion',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			},
			1:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				specific_target:'illusion',
				effect:{
					0:{
						type: 			'swap_location',
						attribute: 		'illusion',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			},
			2:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'intellect',
						buff_attribute: ['aggro'],
						fct_size: 		1,
						fct_color: 		'',
						factor: 		-20
					}
				}
			},
			
		}
	},
	evade:{
		name: 			'evade',
		types: 			[],
		proc: 			'receive_damage',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'swap_location',
						attribute: 		'illusion',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'intellect',
						buff_attribute: ['aggro'],
						fct_size: 		1,
						fct_color: 		'',
						factor: 		-20
					}
				}
			},
			
		}
	},
	run_away:{
		name: 			'run away',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'swap_location',
						attribute: 		'',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	move:{
		name: 			'move',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'swap_location',
						attribute: 		'',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	split:{
		name: 			'split',
		types: 			[],
		random_target: 	true,
		proc: 			'receive_damage',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'clone',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					},
					1:{
						type: 			'percentage_damage',
						attribute: 		'intellect',
						fct_size: 		0,
						fct_color: 		'#800',
						factor: 		50
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					1:{
						type: 			'percentage_damage',
						attribute: 		'intellect',
						fct_size: 		0,
						fct_color: 		'#800',
						factor: 		50
					}
				}
			}
		}
	},
	release_snakes:{
		name: 			'release snakes',
		types: 			[],
		random_target: 	true,
		proc: 			'death',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 3,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'rattlesnake',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.3
					}
				}
			}
		}
	},
	call_crow:{
		name: 			'call crow',
		types: 			[],
		random_target: 	true,
		proc: 			'basic',
		cooldown: 		4,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		{
											crow: 				30,
											fire_crow: 			10,
											frost_crow: 		10,
											cursed_crow: 		10,
											mesmerizing_crow: 	10
										},
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.3
					}
				}
			}
		}
	},
	grow_shroom:{
		name: 			'grow shroom',
		types: 			[],
		random_target: 	true,
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'exploshroom',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.1
					}
				}
			}
		}
	},
	summon_squirrel:{
		name: 			'summon squirrel',
		types: 			[],
		proc: 			'basic',
		cooldown: 		4,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'squirrel',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.5
					}
				}
			}
		}
	},
	echo:{
		name: 			'echo',
		types: 			[],
		proc: 			'death',
		proc_chance: 	50,
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'dead',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'echo',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.5
					}
				}
			}
		}
	},
	release_chicken:{
		name: 			'release chicken',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2.5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		{
											chicken: 		100,
											rooster: 		25
										},
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.3
					}
				}
			}
		}
	},
	release_rooster:{
		name: 			'release rooster',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'rooster',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.3
					}
				}
			}
		}
	},
	lay_chicken_egg:{
		name: 			'lay egg',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'chicken_egg',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	hatch_chick:{
		name: 			'hatch',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		{
											chick: 		100,
										},
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	hatch_chick_on_death:{
		name: 			'hatch',
		types: 			[],
		proc: 			'death',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'dead',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'chick',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	mayor_heal:{
		name: 			'mayor heal',
		types: 			['healing'],
		proc: 			'basic',
		image: 			'candles-141892_640.jpg',
		description: 	'Heals your target for a mayor amount.',
		spell_cooldown: 4,
		mana_cost: 		10,
		spell_target: 	'ally',
		cooldown: 		2,
		sound: 			['444491__breviceps__short-choir.wav'],
		volume_factor: 	0.8,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: true,
				target_buff: 	'any',
				hp_state: 		'lowest_percentage',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'intellect',
						fct_size: 		1.5,
						fct_color: 		'#0f0',
						factor: 		1.5
					}
				}
			}
		}
	},
	// ############################################################################################## 10 ##############################################################
	enrage:{
		name: 			'enrage',
		types: 			[],
		proc: 			'receive_damage',
		cooldown: 		0,
		sound: 			['366688__1san__groan-roar.wav'],
		volume_factor: 	3,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/anger-794699_640.jpg',
						buff_name: 		'enrage',
						buff_type: 		'buff',
						removed_on: 	'deal_damage',
						fct_size: 		0,
						fct_color: 		'#c55',
						factor: 		0.2,
						duration: 		0
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['soothe'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	aggressive_stance:{
		name: 			'aggressive stance',
		types: 			[],
		proc: 			'basic',
		image: 			'anger-794699_640.jpg',
		description:    'Increases the aggro you gain based on strength.',
		random_target: 	true,
		spell_target: 	'any',
		spell_cooldown: 80,
		mana_cost: 		4,
		cooldown: 		20,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['aggro_factor'],
						buff_image: 	'abilities/anger-794699_640.jpg',
						buff_name: 		'enrage',
						buff_type: 		'buff',
						fct_size: 		0.5,
						fct_color: 		'#c55',
						factor: 		0.25,
						duration: 		20
					}
				}
			}
		}
	},
	frenzy:{
		name: 			'frenzy',
		types: 			[],
		proc: 			'receive_damage',
		proc_chance: 	2,
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#c55',
						factor: 		1,
						duration: 		3
					}
				}
			}
		}
	},
	shield:{
		name: 			'shield',
		image: 			'soap-bubble-824558_640.jpg',
		description: 	'adds a shield to your target.',
		spell_cooldown: 8,
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				current_hp: 	'lowest_percentage',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'intellect',
						buff_attribute: ['shield'],
						fct_size: 		1,
						fct_color: 		'#55c',
						factor: 		1
					}
				}
			}
		}
	},
	shield_self:{
		name: 			'shield self',
		image: 			'soap-bubble-824558_640.jpg',
		description: 	'adds a shield to yourself.',
		spell_cooldown: 8,
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		random_target: 	true,
		spell_target: 	'any',
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'intellect',
						buff_attribute: ['shield'],
						fct_size: 		1,
						fct_color: 		'#55c',
						factor: 		1
					}
				}
			}
		}
	},
	drain:{
		name: 			'drain',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		1,
		sound: 			['81151__joedeshon__suck-pop-02.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'physical_drain',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#c0c',
						factor: 		0.75
					}
				}
			}
		}
	},
	mirror:{
		name: 			'mirror',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['reflect'],
						buff_image: 	'abilities/cosmic-flower-2888505_640.jpg',
						buff_name: 		'mirror',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#0ff',
						factor: 		2.5,
						duration: 		1
					},
				}
			}
		}
	},
	block:{
		name: 			'block',
		types: 			['physical'],
		proc: 			'receive_damage',
		proc_chance: 	25,
		cooldown: 		0,
		result_factor: 	0.25, 
		image: 			'viking-193667_640.jpg',
		description:    'Gives you a 25% chance to block incoming damage, reducing damage by 75%.',
		random_target: 	true,
		spell_target: 	'none',
		spell_cooldown: 0,
		mana_cost: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
				}
			}
		}
	},
	parry:{
		name: 			'parry',
		types: 			['physical'],
		proc: 			'receive_physical_damage',
		cooldown: 		0.5,
		result_factor: 	0.5,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
				}
			}
		}
	},
	reposte:{
		name: 			'reposte',
		types: 			['physical'],
		proc: 			'receive_physical_damage',
		cooldown: 		1,
		result_factor: 	0.5,
		sound: 			['52458__audione__sword-01.wav'],
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		0.5
					}
				}
			}
		}
	},
	absorb:{
		name: 			'absorb',
		types: 			['physical'],
		proc: 			'receive_physical_damage',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'last_result_amount',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		1
					}
				}
			}
		}
	},
	drain_life:{
		name: 			'drain life',
		types: 			['magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		2,
		sound: 			['81151__joedeshon__suck-pop-02.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'magical_drain',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#c0c',
						factor: 		1
					}
				}
			}
		}
	},
	life_tap:{
		name: 			'life tap',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'intellect',
						buff_attribute: ['shield'],
						fct_size: 		0,
						fct_color: 		'#c0c',
						factor: 		2
					},
					1:{
						type: 			'percentage_damage',
						attribute: 		'intellect',
						fct_size: 		0.75,
						fct_color: 		'#800',
						factor: 		50
					}
				}
			}
		}
	},
	regenerate:{
		name: 			'regenerate',
		types: 			[],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#5f5',
						factor: 		0.2
					}
				}
			}
		}
	},
	revitalize:{
		name: 			'revitalize',
		types: 			['healing'],
		proc: 			'basic',
		cooldown: 		3,
		image: 			'persian-oak-wood-3064187_640.jpg',
		description: 	'Heal a target over time. Effect is based on intellect.',
		spell_cooldown: 3,
		mana_cost: 		20,
		random_target: 	false,
		spell_target: 	'ally',
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_buff: 	'any',
				hp_state: 		'lowest_percentage',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['healing'],
						buff_image: 	'abilities/persian-oak-wood-3064187_640.jpg',
						buff_name: 		'revitalize',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#8f8',
						factor: 		0.3,
						duration: 		1,
						time: 			0.2
					},
				}
			}
		}
	},
	rest:{
		name: 			'rest',
		types: 			[],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'max_hp',
						fct_size: 		1,
						fct_color: 		'#5f5',
						factor: 		0.2
					}
				}
			}
		}
	},
	raise_alarm:{
		name: 			'raise alarm',
		image: 			'bell-204389_640.jpg',
		description: 	'',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		description: 	'Slightly increases the strength and defense of all friendly units. Effect is based on intellect.',
		spell_cooldown: 8,
		mana_cost: 		20,
		random_target: 	true,
		spell_target: 	'any',
		sound: 			['378799__kgeshev__bell.wav'],
		volume_factor: 	1.2,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				target_random: 	false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength','speed','defense'],
						buff_image: 	'abilities/bell-204389_640.jpg',
						buff_name: 		'raise_alarm',
						buff_type: 		'buff',
						fct_size: 		0.5,
						fct_color: 		'#99f',
						factor: 		0.1,
						duration: 		5
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['soothe'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	curse:{
		name: 			'curse',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		5,
		sound: 			['252257__reitanna__weird-screech.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength','intellect'],
						buff_image: 	'abilities/priest-2833384_640.jpg',
						buff_name: 		'curse',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#c5c',
						factor: 		-0.5,
						duration: 		5
					}
				}
			}
		}
	},
	terrible_curse:{
		name: 			'terrible curse',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				use_aggro: 		false,
				target_random: 	true,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength','intellect'],
						buff_image: 	'abilities/priest-2833384_640.jpg',
						buff_name: 		'curse',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#c5c',
						factor: 		-0.000000001,
						duration: 		5
					}
				}
			}
		}
	},
	scare:{
		name: 			'scare',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		2,
		sound: 			['252257__reitanna__weird-screech.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength','intellect'],
						buff_image: 	'abilities/priest-2833384_640.jpg',
						buff_name: 		'curse',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#c5c',
						factor: 		-1,
						duration: 		1
					}
				}
			}
		}
	},
	firebolt:{
		name: 			'firebolt',
		description: 	'Attacks target enemy with fire, setting it aflame. Damage is based on intellect.',
		image: 			'meteorite-1060886_640.jpg',
		types: 			['fire','magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		2,
		spell_cooldown: 2,
		mana_cost: 		10,
		spell_target: 	'enemy',
		sound: 			['267887__wjl__short-fireball-woosh.flac'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/fire-2777580_640.jpg',
						buff_name: 		'burn',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#fd0',
						factor: 		0.1,
						duration: 		3,
						time: 			0.25
					},
					1:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#fd0',
						factor: 		1
					}
				}
			}
		}
	},
	ignite:{
		name: 			'ignite',
		description: 	'Sets target enemy aflame. Damage is based on intellect.',
		image: 			'flying-sparks-142486_640.jpg',
		types: 			['fire','magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		1,
		spell_cooldown: 1,
		mana_cost: 		5,
		spell_target: 	'enemy',
		sound: 			['267887__wjl__short-fireball-woosh.flac'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/fire-2777580_640.jpg',
						buff_name: 		'burn',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#fd0',
						factor: 		0.1,
						duration: 		3,
						time: 			0.25
					},
				}
			}
		}
	},
	incinerate:{
		name: 			'incinerate',
		description: 	'Sets target enemy aflame. Damage is based on intellect.',
		image: 			'fire-2777580_640.jpg',
		types: 			['fire','magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		10,
		spell_cooldown: 10,
		mana_cost: 		50,
		spell_target: 	'enemy',
		sound: 			['267887__wjl__short-fireball-woosh.flac'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	5,
				unique_targets: 1,
				ability_delay: 	0.25,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/fire-2777580_640.jpg',
						buff_name: 		'burn',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#fd0',
						factor: 		0.2,
						duration: 		3,
						time: 			0.25
					},
				}
			}
		}
	},
	magic_bolt:{
		name: 			'magic bolt',
		description: 	'Deals magical damage to your target. Damage is based on intellect.',
		image: 			['lens-1438812_640.jpg'],
		types: 			['magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		1,
		spell_cooldown: 1,
		mana_cost: 		5,
		spell_target: 	'enemy',
		sound: 			['320366__n-audioman__explosion3.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0ff',
						factor: 		1
					}
				}
			}
		}
	},
	mass_shield:{
		name: 			'mass shield',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'intellect',
						buff_attribute: ['shield'],
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		0.25
					}
				}
			}
		}
	},
	holy_nova:{
		name: 			'holy nova',
		types: 			['healing','magical_damage'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		0.25
					}
				}
			},
			1:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						bonus_type: 	'undead',
						bonus_factor: 	5,
						fct_size: 		1,
						fct_color: 		'#fcc',
						factor: 		0.25
					}
				}
			}
		}
	},
	spray_fire:{
		name: 			'spray fire',
		types: 			['magical','magical_damage'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1.2,
						fct_color: 		'#fd0',
						factor: 		1.2
					}
				}
			},
			1:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 3,
				target_random: 	true,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		0.8,
						fct_color: 		'#fd0',
						factor: 		0.8
					}
				}
			}
		}
	},
	firestorm:{
		name: 			'firestorm',
		types: 			['magical','magical_damage','fire'],
		proc: 			'basic',
		cooldown: 		12.5,
		description: 	'Attacks all enemies with fire, setting them aflame. Damage is based on intellect.',
		image: 			'fire-2777580_640.jpg',
		spell_cooldown: 8,
		mana_cost: 		50,
		random_target: 	true,
		sound: 			['267887__wjl__short-fireball-woosh.flac'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		0.5,
						fct_color: 		'#fd0',
						factor: 		0.5
					},
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/fire-2777580_640.jpg',
						buff_name: 		'burn',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#fd0',
						factor: 		0.3,
						duration: 		1.25,
						time: 			0.2
					},
				}
			}
		}
	},
	19:{
		name: 			'minor heal',
		types: 			[],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: true,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		0.75
					}
				}
			}
		}
	},
	// ############################################################################################## 20 ##############################################################
	take_aim:{
		name: 			'take aim',
		types: 			[],
		proc: 			'basic',
		cooldown: 		1,
		sound: 			['322215__liamg-sfx__bow-pull.wav'],
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength','speed'],
						buff_image: 	'abilities/aim-2572218_640.jpg',
						buff_name: 		'take_aim',
						buff_type: 		'buff',
						removed_on: 	'deal_damage',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		0.5,
						duration: 		0
					}
				}
			}
		}
	},
	concentrate:{
		name: 			'concentrate',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		image: 			'brain-1845962_640.jpg',
		description: 	'Increases your intellect and regeneration for a brief time. Effect is based on intellect.',
		spell_cooldown: 6,
		spell_target: 	'any',
		mana_cost: 		10,
		random_target: 	true,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['intellect','regeneration'],
						buff_image: 	'abilities/brain-1845962_640.jpg',
						buff_name: 		'concentrate',
						buff_type: 		'buff',
						removed_on: 	'',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		0.3,
						duration: 		1
					}
				}
			}
		}
	},
	focus_mind:{
		name: 			'focus mind',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		image: 			'brain-1845962_640.jpg',
		description: 	'Increases the target\'s intellect and regeneration for a brief time. Effect is based on intellect.',
		spell_cooldown: 6,
		spell_target: 	'any',
		mana_cost: 		10,
		random_target: 	true,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				preferred_type: 'caster',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['intellect','regeneration'],
						buff_image: 	'abilities/brain-1845962_640.jpg',
						buff_name: 		'concentrate',
						buff_type: 		'buff',
						removed_on: 	'',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		0.3,
						duration: 		1
					}
				}
			}
		}
	},
	absorb_magic:{
		name: 			'absorb magic',
		types: 			['magical'],
		proc: 			'receive_magical_damage',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'last_result_amount',
						buff_attribute: ['intellect','regeneration'],
						buff_image: 	'abilities/brain-1845962_640.jpg',
						buff_name: 		'concentrate',
						buff_type: 		'buff',
						removed_on: 	'',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		0.5,
						duration: 		3
					}
				}
			}
		}
	},
	shoot:{
		name: 			'shoot',
		types: 			['physical','ranged'],
		proc: 			'basic',
		cooldown: 		1,
		sound: 			['322220__liamg-sfx__arrow-impact-3.wav'],
		volume_factor: 	3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'speed',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	piercing_shot:{
		name: 			'piercing shot',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		1,
		sound: 			['322220__liamg-sfx__arrow-impact-3.wav'],
		volume_factor: 	3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'piercing_damage',
						attribute: 		'speed',
						fct_size: 		1,
						fct_color: 		'#800',
						factor: 		0.5
					}
				}
			}
		}
	},
	snipe:{
		name: 			'snipe',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				hp_state: 		'lowest',
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'',
						fct_size: 		2.5,
						fct_color: 		'#f00',
						factor: 		2
					}
				}
			}
		}
	},
	smite:{
		name: 			'smite',
		types: 			['magical','magical_damage'],
		proc: 			'basic',
		image: 			'sky-404060_640.jpg',
		description: 	'Attacks a random enemy, dealing massive damage to undead. Damage is based on intellect and the level of the spell.',
		cooldown: 		1,
		spell_cooldown: 2,
		spell_target: 	'enemy',
		mana_cost: 		10,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				preferred_type: 'undead',
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						bonus_type: 	'undead',
						bonus_factor: 	4,
						fct_size: 		1,
						fct_color: 		'#fcc',
						factor: 		0.5
					}
				}
			}
		}
	},
	assassinate:{
		name: 			'assassinate',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				preferred_type: 'humanoid',
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						bonus_type: 	'humanoid',
						bonus_factor: 	8,
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		0.5
					}
				}
			}
		}
	},
	siege:{
		name: 			'siege',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				preferred_type: 'structure',
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						bonus_type: 	'structure',
						bonus_factor: 	10,
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1
					}
				}
			}
		}
	},
	hunt:{
		name: 			'hunt',
		types: 			['animal','physical'],
		proc: 			'basic',
		image: 			'archer-2345211_640.jpg',
		cooldown: 		1,
		description: 	'Attacks the target, dealing more damage to animals, but less to non-animals. Damage is based on strength.',
		spell_cooldown: 1,
		spell_target: 	'enemy',
		mana_cost: 		5,
		sound: 			['433858__mattix__rifle-gun-tikka-shot-01.wav'],
		volume_factor: 	0.5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				preferred_type: 'animal',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		0.75
					}
				}
			}
		}
	},
	retaliate:{
		name: 			'retaliate',
		types: 			['physical'],
		proc: 			'receive_damage',
		cooldown: 		0.1,
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#800',
						factor: 		1
					}
				}
			}
		}
	},
	counter:{
		name: 			'counter',
		types: 			['physical'],
		proc: 			'receive_physical_damage',
		cooldown: 		1,
		sound: 			['52458__audione__sword-01.wav'],
		volume_factor: 	0.5,
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	trap:{
		name: 			'trap',
		types: 			['trap','physical','movement'],
		proc: 			'basic',
		cooldown: 		5,
		precision: 		50,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['dodge','attack_speed'],
						buff_image: 	'abilities/trap-33819_640.png',
						buff_name: 		'trap',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#f80',
						factor: 		-100,
						duration: 		1
					}
				}
			}
		}
	},
	constrict:{
		name: 			'constrict',
		types: 			['physical','grapple'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	10,
				unique_targets: 1,
				cannot_target: 	'structure',
				ability_delay: 	0.25,
				effect:{
					0:{
						types: 			['physical','bleed'],
						type: 			'piercing_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#800',
						factor: 		0.2,
					},
				}
			},
		}
	},
	freeze:{
		name: 			'freeze',
		types: 			['ice','water','magical'],
		proc: 			'basic',
		cooldown: 		5,
		description: 	'Freeze the target untill it takes damage. Also decreases defense.',
		image: 			'ice-2567399_640.jpg',
		proc: 			'basic',
		spell_cooldown: 12,
		mana_cost: 		20,
		spell_target: 	'enemy',
		sound: 			['138484__randomationpictures__chill-hit.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				use_aggro: 		false,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense','frozen'],
						buff_image: 	'abilities/ice-2567399_640.jpg',
						buff_name: 		'freeze',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-0.5,
						duration: 		4
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['burn'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					},
					2:{
						type: 			'aggro',
						attribute: 		'intellect',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-20,
						duration: 		4
					},
				}
			}
		}
	},
	frostbolt:{
		name: 			'frostbolt',
		types: 			['ice','water','magical'],
		proc: 			'basic',
		cooldown: 		3,
		description: 	'Freeze the target untill it takes damage. Greatly decreases defense.',
		image: 			'15.png',
		proc: 			'basic',
		spell_cooldown: 3,
		mana_cost: 		10,
		spell_target: 	'enemy',
		sound: 			['138484__randomationpictures__chill-hit.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/15.png',
						buff_name: 		'chilled',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-0.25,
						duration: 		4
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['burn'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					},
					2:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		1
					}
				}
			}
		}
	},
	snowstorm:{
		name: 			'snowstorm',
		types: 			['ice','water','magical'],
		proc: 			'basic',
		cooldown: 		15,
		description: 	'Freeze the target untill it takes damage. Greatly decreases defense.',
		image: 			'15.png',
		proc: 			'basic',
		spell_cooldown: 15,
		mana_cost: 		50,
		spell_target: 	'enemy',
		sound: 			['138484__randomationpictures__chill-hit.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	5,
				unique_targets: 10,
				ability_delay: 	0.25,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/15.png',
						buff_name: 		'chilled',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-0.05,
						duration: 		4
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['burn'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					},
					2:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		0.2
					}
				}
			}
		}
	},
	petrify:{
		name: 			'petrify',
		types: 			['stone','magical'],
		proc: 			'basic',
		cooldown: 		3,
		description: 	'Clears all buffs and debuffs from the target and then petrifies the target untill it takes damage. Greatly inreases defense and resistance.',
		image: 			'boy-366311_640.jpg',
		proc: 			'basic',
		spell_cooldown: 12,
		mana_cost: 		20,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				use_aggro: 		false,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['buff','debuff'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense','resistance','petrified'],
						buff_image: 	'abilities/boy-366311_640.jpg',
						buff_name: 		'petrify',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		20,
						duration: 		0
					},
					2:{
						type: 			'aggro',
						attribute: 		'intellect',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-20,
					},
					
				}
			}
		}
	},
	sleep:{
		name: 			'sleep',
		types: 			['magical','mental'],
		proc: 			'basic',
		cooldown: 		1,
		description: 	'Put the target to sleep untill it takes damage.',
		image: 			'baby-1151351_640.jpg',
		proc: 			'basic',
		spell_cooldown: 2,
		mana_cost: 		20,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['attack_speed','dodge'],
						buff_image: 	'abilities/baby-1151351_640.jpg',
						buff_name: 		'asleep',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-100,
						duration: 		10000
					}
				}
			}
		}
	},
	
	28:{
		name: 			'bolster',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		['max_hp','current_hp'],
						fct_size: 		0.8,
						fct_color: 		'#0f0',
						factor: 		1
					}
				}
			}
		}
	},
	29:{
		name: 			'consume',
		types: 			[],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'drain',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#c0c',
						factor: 		0.5
					}
				}
			}
		}
	},
	//30
	spore_cloud:{
		name: 			'spore cloud',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 9,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['healing'],
						buff_image: 	'abilities/mold-1482666_640.jpg',
						buff_name: 		'buff_spore_cloud',
						buff_type: 		'buff',
						bonus_type: 	'mushroom',
						bonus_factor: 	4,
						fct_size: 		0.5,
						fct_color: 		'#0f0',
						factor: 		0.15,
						time: 			0.6,
						duration: 		2
					}
				}
			},
			1:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 9,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['intellect','strength'],
						buff_image: 	'abilities/mold-1482666_640.jpg',
						buff_name: 		'debuff_spore_cloud',
						buff_type: 		'debuff',
						fct_size: 		0.5,
						fct_color: 		'#7b1',
						factor: 		-0.2,
						duration: 		2
					}
				}
			}
		}
	},
	arcane_explode:{
		name: 			'explode',
		types: 			['magical'],
		proc: 			'death',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 9,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0ff',
						factor: 		0.25
					}
				}
			}
		}
	},
	explode:{
		name: 			'explode',
		types: 			['physical'],
		proc: 			'death',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 9,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'max_hp',
						fct_size: 		1,
						fct_color: 		'#7b1',
						factor: 		0.25
					}
				}
			}
		}
	},
	burst_fire:{
		name: 			'burst fire',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		1.5,
		description: 	'Shoots the target 3 times for low damage.',
		image: 			'firearm-409000_640.jpg',
		proc: 			'basic',
		spell_cooldown: 1,
		mana_cost: 		10,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	3,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#f00',
						factor: 		0.5
					}
				}
			}
		}
	},
	expose:{
		name: 			'expose',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		description: 	'Reduce the defense and resistance of the target for a reasonable duration. Effect is based on intellect.',
		spell_cooldown: 8,
		mana_cost: 		10,
		spell_target: 	'enemy',
		image: 			'broken-glass-2208593_640.jpg',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense','resistance'],
						buff_image: 	'abilities/broken-glass-2208593_640.jpg',
						buff_name: 		'pierce_armor',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#f80',
						factor: 		-0.1,
						duration: 		5
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['hide'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	exposing_strike:{
		name: 			'exposing strike',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		description: 	'Attack the target while ignoring defense and reduce the defense and resistance of the target for a reasonable duration. Effect is based on agility.',
		spell_cooldown: 8,
		mana_cost: 		10,
		spell_target: 	'enemy',
		image: 			'broken-glass-2208593_640.jpg',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'piercing_damage',
						attribute: 		'speed',
						fct_size: 		1.3,
						fct_color: 		'#800',
						factor: 		0.5
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense','resistance'],
						buff_image: 	'abilities/broken-glass-2208593_640.jpg',
						buff_name: 		'pierce_armor',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#f80',
						factor: 		-0.1,
						duration: 		5
					},
					2:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['hide'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	rush:{
		name: 			'rush',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		sound: 			['194081__potentjello__woosh-noise-1.wav'],
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				fct_color: 		'#99f',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		5,
						duration: 		0.25
					}
				}
			}
		}
	},
	victory_rush:{
		name: 			'victory rush',
		types: 			[],
		proc: 			'kill',
		cooldown: 		0,
		sound: 			['194081__potentjello__woosh-noise-1.wav'],
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				fct_color: 		'#99f',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		1,
						duration: 		1
					}
				}
			}
		}
	},
	desperate_speed:{
		name: 			'desperate speed',
		types: 			[],
		proc: 			'ally_death',
		cooldown: 		10,
		sound: 			['194081__potentjello__woosh-noise-1.wav'],
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				fct_color: 		'#99f',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		2,
						duration: 		1
					}
				}
			}
		}
	},
	bloodthirst:{
		name: 			'bloodthirst',
		types: 			[],
		proc: 			'enemy_death',
		cooldown: 		0.1,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				fct_color: 		'#99f',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['strength','speed'],
						buff_image: 	'abilities/anger-794699_640.jpg',
						buff_name: 		'enrage',
						buff_type: 		'buff',
						removed_on: 	'deal_damage',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		1,
						duration: 		6
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['soothe'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					}
				}
			}
		}
	},
	// ############################################################################################## 35 ##############################################################
	motivate:{
		name: 			'motivate',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		3,
		image: 			'person-2146508_640.jpg',
		description: 	'Increases the speed of all friendly units for a brief time. Effect is based on intellect.',
		spell_cooldown: 8,
		mana_cost: 		20,
		random_target: 	true,
		spell_target: 	'any',
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#99f',
						factor: 		0.25,
						duration: 		2
					}
				}
			}
		}
	},
	give_a_round:{
		name: 			'give a round',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/beer-2439237_640.jpg',
						buff_name: 		'give_a_round',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#99f',
						factor: 		0.1,
						duration: 		10
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/broken-glass-2208593_640.jpg',
						buff_name: 		'pierce_armor',
						buff_type: 		'debuff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		-0.1,
						duration: 		10
					}
				}
			},
			1:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/beer-2439237_640.jpg',
						buff_name: 		'give_a_round',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#99f',
						factor: 		0.1,
						duration: 		10
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/broken-glass-2208593_640.jpg',
						buff_name: 		'pierce_armor',
						buff_type: 		'debuff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		-0.1,
						duration: 		10
					}
				}
			}
		}
	},
	inspire:{
		name: 			'inspire',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['intellect','regeneration'],
						buff_image: 	'units/beauty-355157_640.jpg',
						buff_name: 		'inspire_intellect',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		0.3,
						duration: 		2
					}
				}
			}
		}
	},
	charge:{
		name: 			'charge',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		sound: 			['57434__sharkmail__potstep.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		2,
						fct_color: 		'#f00',
						factor: 		2
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#f00',
						factor: 		1,
						duration: 		0.5
					}
				}
			}
		}
	},
	swoop:{
		name: 			'swoop',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		sound: 			['57434__sharkmail__potstep.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		2,
						fct_color: 		'#f00',
						factor: 		2
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#f00',
						factor: 		1,
						duration: 		0.5
					}
				}
			}
		}
	},
	bolster:{
		name: 			'bolster',
		types: 			['physical','mental'],
		proc: 			'basic',
		description: 	'Temporarily increase the maximum health of a random ally and heal them for the same amount. Effect is based on intellect.',
		image: 			'tortoise-47047_640.png',
		cooldown: 		2,
		spell_cooldown: 12,
		sound: 			['341492__robinhood76__06515-bubble-interface-ding.wav'],
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				hp_state: 		'lowest',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['max_hp'],
						buff_image: 	'abilities/tortoise-47047_640.png',
						buff_name: 		'bolster',
						buff_type: 		'buff',
						fct_size: 		0.8,
						fct_color: 		'#0f0',
						factor: 		0.8,
						duration: 		3
					},
					1:{
						type: 			'healing',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		0.8
					}
				}
			}
		}
	},
	bless:{
		name: 			'bless',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense','strength','intellect','resistance'],
						buff_image: 	'abilities/sky-404060_640.jpg',
						buff_name: 		'bless',
						buff_type: 		'buff',
						fct_size: 		1,
						fct_color: 		'#afa',
						factor: 		0.5,
						duration: 		2
					}
				}
			}
		}
	},
	// ############################################################################################## 40 ##############################################################
	huddle:{
		name: 			'huddle',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				target_random: 	false,
				specific_target: 'herd',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'defense',
						buff_attribute: ['defense'],
						buff_image: 	'units/sheep-1585266_640.jpg',
						buff_name: 		'huddle',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		0.5,
						duration: 		2
					}
				}
			}
		}
	},
	stampede:{
		name: 			'huddle',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				specific_target: 'herd',
				target_random: 	false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['speed','strength'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						removed_on: 	'deal_damage',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		1,
						duration: 		1
					},
					1:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/broken-glass-2208593_640.jpg',
						buff_name: 		'pierce_armor',
						buff_type: 		'debuff',
						fct_size: 		0,
						fct_color: 		'#99f',
						factor: 		-1,
						duration: 		1
					}
				}
			}
		}
	},
	summon_farmer:{
		name: 			'summon farmer',
		types: 			[],
		proc: 			'basic',
		cooldown: 		10,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 2,
				target_random: 	false,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		{
											farmer: 			25,
											peasant: 			25,
											crazed_farmer: 		25,
											cotton_farmer: 		25
										},
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.5
					}
				}
			}
		}
	},
	call_mermaid:{
		name: 			'call mermaid',
		types: 			[],
		proc: 			'death',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'dead',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		{
											mermaid: 			100,
										},
						fct_size: 		1,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	command:{
		name: 			'command',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				specific_target:'humanoid',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['speed','strength','intellect'],
						buff_image: 	'abilities/decide-70742_640.jpg',
						buff_name: 		'command',
						buff_type: 		'buff',
						removed_on: 	'skill_use',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		1,
						duration: 		3
					}
				}
			}
		}
	},
	command_beast:{
		name: 			'command beast',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				specific_target:'animal',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['speed','strength','intellect'],
						buff_image: 	'abilities/decide-70742_640.jpg',
						buff_name: 		'command',
						buff_type: 		'buff',
						removed_on: 	'skill_use',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		1,
						duration: 		3
					}
				}
			}
		}
	},
	cleanse:{
		name: 			'cleanse',
		image: 			'ancient-1793421_640.jpg',
		description: 	'Removes negative effects from the friendly target. Amount of effects removed is based on intellect.',
		spell_cooldown: 2,
		mana_cost: 		5,
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		spell_target: 	'ally',
		sound: 			['274073__junggle__water14.wav'],
		volume_factor: 	2,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'debuff',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				effect:{
					0:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['debuff'],
						fct_size: 		1,
						fct_color: 		'#9f9',
						factor: 		0.2
					}
				}
			}
		}
	},
	dive:{
		name: 			'dive',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['defense','resistance'],
						buff_image: 	'abilities/hiding-1209131_640.jpg',
						buff_name: 		'hide',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		1,
						duration: 		1
					},
					1:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['strength'],
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		-0.5,
						duration: 		1
					}
				}
			}
		}
	},
	siphon_strength:{
		name: 			'siphon strength',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		3,
		sound: 			['81151__joedeshon__suck-pop-02.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/detail-1434536_640.jpg',
						buff_name: 		'soothe',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		-0.1,
						duration: 		10
					},
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['strength'],
						buff_image: 	'abilities/anger-794699_640.jpg',
						buff_name: 		'enrage',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		0.1,
						duration: 		10
					},
				}
			}
		}
	},
	// ############################################################################################## 45 ##############################################################
	hamstring:{
		name: 			'hamstring',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		0.5
					},
					1:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/slow-3104955_640.jpg',
						buff_name: 		'slow',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		-0.2,
						duration: 		3
					}
				}
			}
		}
	},
	ensnare:{
		name: 			'ensnare',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/slow-3104955_640.jpg',
						buff_name: 		'slow',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		-0.5,
						duration: 		2
					}
				}
			}
		}
	},
	slow:{
		name: 			'slow',
		types: 			['magical','movement'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/slow-3104955_640.jpg',
						buff_name: 		'slow',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		-0.2,
						duration: 		1
					}
				}
			}
		}
	},
	seed_of_life:{
		name: 			'seed of life',
		image: 			'maple-seed-453336_640.jpg',
		description: 	'Heal the target over time and reduces the physical damage received by the target. Heals an additional amount at the end of the duration. Effect is increased by intellect.',
		spell_cooldown: 10,
		mana_cost:   	25,
		types: 			[],
		proc: 			'basic',
		spell_target: 	'ally',
		cooldown: 		4,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				hp_state: 		'lowest_percentage',
				target_count: 	1,
				unique_targets: 1,
				target_random: 	false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['healing'],
						fct_size: 		0.75,
						fct_color: 		'#8f8',
						factor: 		0.1,
						duration: 		4,
						time: 			0.4
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/maple-seed-453336_640.jpg',
						buff_name: 		'seed_of_life',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'',
						factor: 		0.1,
						duration: 		4
					},
					2:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['healing'],
						fct_size: 		0,
						fct_color: 		'#8f8',
						factor: 		1,
						duration: 		4,
						time: 			4
					},
				}
			}
		}
	},
	chop:{
		name: 			'chop',
		image: 			'ax-1008980_640.jpg',
		description: 	'Attack the target. Deals great damage against wooden targets. Effect is increased by strength.',
		spell_cooldown: 2,
		mana_cost:   	10,
		types: 			['tree','wood','physical'],
		proc: 			'basic',
		spell_target: 	'enemy',
		cooldown: 		2,
		sound: 			['420670__sypherzent__strong-melee-swing.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				preferred_type: 'wood',
				//specific_target:'tree',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1.25,
						fct_color: 		'#f00',
						factor: 		1.5
					}
				}
			}
		}
	},
	coccoon:{
		name: 			'coccoon',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'chrysalis',
						fct_size: 		0,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	hatch:{
		name: 			'hatch',
		types: 			[],
		proc: 			'basic',
		cooldown: 		10,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'butterfly',
						fct_size: 		0,
						fct_color: 		'',
						factor: 		1
					}
				}
			}
		}
	},
	// ############################################################################################## 50 ##############################################################
	leeching_trap:{
		name: 			'leeching trap',
		types: 			['trap','physical'],
		proc: 			'receive_damage',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_drain',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		1
					}
				}
			}
		}
	},
	51:{
		name: 			'drain strength',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		['strength'],
						fct_size: 		0.8,
						fct_color: 		'#a55',
						factor: 		-2,
						duration: 		5
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		['strength'],
						fct_size: 		0.8,
						fct_color: 		'#5a5',
						factor: 		2,
						duration: 		5
					}
				}
			}
		}
	},
	piercing_bite:{
		name: 			'piercing bite',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/broken-glass-2208593_640.jpg',
						buff_name: 		'pierce_armor',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		-0.5,
						duration: 		2
					},
					1:{
						type: 			'piercing_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#800',
						factor: 		0.5
					}
					
				}
			}
		}
	},
	revive:{
		name: 			'revive',
		image: 			'spring-2090415_640.jpg',
		description: 	'bring a fallen ally back to life',
		can_target_dead:true,
		random_target: 	false,
		spell_cooldown: 60,
		mana_cost: 		50,
		types: 			['revive'],
		proc: 			'basic',
		spell_target: 	'ally',
		cooldown: 		10,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'dead',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#0f0',
						factor: 		0.1
					}
				}
			}
		}
	},
	holy_fists:{
		name: 			'holy fists',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		1.5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	3,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						bonus_type: 	'undead',
						bonus_factor: 	5,
						fct_size: 		1,
						fct_color: 		'#fcc',
						factor: 		0.5
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				fct_color: 		'#99f',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/person-2146508_640.jpg',
						buff_name: 		'rush',
						buff_type: 		'buff',
						fct_size: 		1,
						fct_color: 		'#99f',
						factor: 		0.1,
						duration: 		10
					}
				}
			}
		}
	},
	// ############################################################################################## 55 ##############################################################
	web:{
		name: 			'web',
		types: 			['physical'],
		proc: 			'receive_damage',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['speed','strength','defense','dodge'],
						buff_image: 	'abilities/spider-web-with-water-beads-921039_640.jpg',
						buff_name: 		'web',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#f80',
						factor: 		-0.5,
						duration: 		3
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['confused'],
						buff_image: 	'abilities/jester-159438_640.png',
						buff_name: 		'confused',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	3
					}
				}
			}
		}
	},
	drunken_haze:{
		name: 			'drunken haze',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['strength','speed'],
						buff_image: 	'abilities/anger-794699_640.jpg',
						buff_name: 		'enrage',
						buff_type: 		'buff',
						fct_size: 		1,
						fct_color: 		'#f80',
						factor: 		1,
						duration: 		2
					},
					1:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['confused'],
						buff_image: 	'abilities/jester-159438_640.png',
						buff_name: 		'confused',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	2
					}
				}
			}
		}
	},
	spray_fruit:{
		name: 			'spray fruit',
		types: 			[],
		proc: 			'receive_damage',
		cooldown: 		0,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'increase_stat',
						attribute: 		'max_hp',
						buff_attribute: ['current_hp','max_hp'],
						fct_size: 		0,
						fct_color: 		'#cfc',
						factor: 		-0.25
					}
				}
			},
			1:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'max_hp',
						fct_size: 		0.75,
						fct_color: 		'#cfc',
						factor: 		0.25
					}
				}
			},
			2:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'healing',
						attribute: 		'max_hp',
						fct_size: 		0.75,
						fct_color: 		'#cfc',
						factor: 		0.25
					}
				}
			},
		}
	},
	landslide:{
		name: 			'landslide',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		7.5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#a60',
						factor: 		0.5
					}
				}
			},
			1:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#a60',
						factor: 		0.5
					}
				}
			},
			2:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#a60',
						factor: 		0.5
					}
				}
			}
		}
	},
	toughen_up:{
		name: 			'toughen up',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		description: 	'Double your defense for a short time.',
		image: 			'turtle-182121_640.jpg',
		types: 			['defense'],
		spell_cooldown: 4,
		mana_cost: 		10,
		random_target: 	true,
		spell_target: 	'any',
		sound: 			['263606__limbo63__metalfoley5.wav'],
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'defense',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/baby-feet-402844_640.jpg',
						buff_name: 		'protect',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#a67',
						factor: 		1,
						duration: 		1
					}
				}
			}
		}
	},
	energise:{
		name: 			'energise',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		description: 	'Regenerate a lot of mina over a short time.',
		image: 			'air-bubbles-230014_640.jpg',
		types: 			['defense'],
		spell_cooldown: 16,
		mana_cost: 		0,
		random_target: 	true,
		spell_target: 	'any',
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'regeneration',
						buff_attribute: ['regeneration'],
						buff_image: 	'abilities/air-bubbles-230014_640.jpg',
						buff_name: 		'energise',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#a67',
						factor: 		19,
						duration: 		0.25
					}
				}
			}
		}
	},
	infest:{
		name: 			'infest',
		types: 			['physical','disease'],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['piercing_damage'],
						buff_image: 	'abilities/virus-1812092_640.jpg',
						buff_name: 		'infest',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		0.25,
						duration: 		6,
						time: 			0.2,
						delay: 			4
					}
				}
			}
		}
	},
	disease_cloud:{
		name: 			'disease cloud',
		types: 			['physical','disease'],
		proc: 			'death',
		cooldown: 		0.1,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['piercing_damage'],
						buff_image: 	'abilities/virus-1812092_640.jpg',
						buff_name: 		'infest',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		0.25,
						duration: 		6,
						time: 			0.2,
						delay: 			4
					}
				}
			}
		}
	},
	infesting_bite:{
		name: 			'infesting bite',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		sound: 			['80550__ggctuk__comic-bite-1.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						types: 			['physical','disease'],
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['piercing_damage'],
						buff_image: 	'abilities/virus-1812092_640.jpg',
						buff_name: 		'infest',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#f80',
						factor: 		0.25,
						duration: 		6,
						time: 			0.2,
						delay: 			4
					},
					1:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	// ############################################################################################## 60 ##############################################################
	poison:{
		name: 			'poison',
		types: 			['physical','poison'],
		proc: 			'basic',
		image: 			'poison-1481596_640.jpg',
		description: 	'Deals damage over time to your target. Effect is increased by intellect.',
		cooldown: 		2,
		spell_cooldown: 4,
		mana_cost: 		15,
		spell_target: 	'enemy',
		sound: 			['55817__sergenious__bloop2.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/poison-1481596_640.jpg',
						buff_name: 		'poison',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#7b1',
						factor: 		0.1,
						duration: 		1,
						time: 			0.05
					}
				}
			}
		}
	},
	steal_buff:{
		name: 			'steal buff',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'buff',
				target_count: 	1,
				unique_targets: 1,
				preferred_type: 'humanoid',
				effect:{
					0:{
						type: 			'steal_buff',
						attribute: 		'intellect',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#7b1',
						factor: 		0.2
					}
				}
			}
		}
	},
	transfer_debuff:{
		name: 			'transfer',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		4,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'debuff',
				target_count: 	1,
				unique_targets: 1,
				effect:{
				}
			},
			1:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'give_buff',
						attribute: 		'intellect',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#7b1',
						factor: 		1
					}
				}
			}
		}
	},
	collect_debuffs:{
		name: 			'collect',
		types: 			['magical'],
		proc: 			'basic',
		cooldown: 		1,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'debuff',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'steal_buff',
						attribute: 		'intellect',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#0ff',
						factor: 		0.5
					}
				}
			}
		}
	},
	poisonous_skin:{
		name: 			'poisonous skin',
		types: 			['physical','poison'],
		proc: 			'receive_physical_damage',
		cooldown: 		1,
		sound: 			['55817__sergenious__bloop2.wav'],
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'defense',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/poison-1481596_640.jpg',
						buff_name: 		'poison',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#7b1',
						factor: 		0.1,
						duration: 		0.5,
						time: 			0.05
					}
				}
			}
		}
	},
	poisonous_bite:{
		name: 			'poisonous bite',
		types: 			['physical','poison'],
		proc: 			'basic',
		cooldown: 		2,
		sound: 			['55817__sergenious__bloop2.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		0.75,
						fct_color: 		'#f00',
						factor: 		1
					},
					1:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/poison-1481596_640.jpg',
						buff_name: 		'poison',
						buff_type: 		'debuff',
						fct_size: 		0.5,
						fct_color: 		'#7b1',
						factor: 		0.1,
						duration: 		0.25,
						time: 			0.05
					}
				}
			}
		}
	},
	hide:{
		name: 			'hide',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		image: 			'hiding-1209131_640.jpg',
		description: 	'Decreases aggro and increases dodge and resistance for a short time. Effect is based on agility.',
		spell_cooldown: 40,
		mana_cost: 		30,
		random_target: 	true,
		spell_target: 	'any',
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'aggro',
						attribute: 		'speed',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		-10,
						duration: 		5
					},
					1:{
						type: 			'buff',
						attribute: 		'speed',
						buff_attribute: ['dodge','resistance'],
						buff_image: 	'abilities/hiding-1209131_640.jpg',
						buff_name: 		'hide',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		1,
						duration: 		1
					},
				}
			}
		}
	},
	summon_imp:{
		name: 			'summon imp',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'ally',
				target_state: 	'none',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'summon',
						attribute: 		'fire_imp',
						fct_size: 		1,
						fct_color: 		'',
						factor: 		0.5
					}
				}
			}
		}
	},
	corrupt:{
		name: 			'corrupt',
		types: 			['magical'],
		proc: 			'basic',
		image: 			'nature-3108712_1920.jpg',
		description: 	'Deal magical damage to the target over time and reduce their resistance. Effect is based on intellect.',
		spell_cooldown: 2,
		mana_cost: 		20,
		spell_target: 	'enemy',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['magical_damage'],
						buff_image: 	'abilities/nature-3108712_1920.jpg',
						buff_name: 		'corrupt',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#62a',
						factor: 		0.1,
						duration: 		8,
						time: 			1.6
					},
					1:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['resistance'],
						fct_size: 		0,
						fct_color: 		'#62a',
						factor: 		-0.1,
						duration: 		8
					}
				}
			}
		}
	},
	rend:{
		name: 			'rend',
		image: 			'blood-spatter-497546_640.jpg',
		description: 	'Deal damage and more over a short time. Effect is based on strength.',
		spell_cooldown: 4,
		mana_cost:   	25,
		types: 			['physical'],
		proc: 			'basic',
		spell_target: 	'enemy',
		cooldown: 		2,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#800',
						factor: 		1
					},
					1:{
						types: 			['physical','bleed'],
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['piercing_damage'],
						buff_image: 	'abilities/blood-spatter-497546_640.jpg',
						buff_name: 		'bleed',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#800',
						factor: 		0.1,
						duration: 		4,
						time: 			0.8
					},
				}
			}
		}
	},
	roar:{
		name: 			'roar',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['strength','intellect'],
						buff_image: 	'abilities/lion-2885618_640.jpg',
						buff_name: 		'debuff_roar',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		-0.2,
						duration: 		1
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['aggro'],
						buff_image: 	'abilities/lion-2885618_640.jpg',
						buff_name: 		'aggro',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		1000,
						duration: 		2
					}
				}
			}
		}
	},
	howl:{
		name: 			'howl',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['defense'],
						buff_image: 	'units/wolf-635063_640.jpg',
						buff_name: 		'debuff_howl',
						buff_type: 		'debuff',
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		-0.1,
						duration: 		1
					}
				}
			},
			1:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['strength'],
						buff_image: 	'units/wolf-635063_640.jpg',
						buff_name: 		'buff_howl',
						buff_type: 		'buff',
						fct_size: 		0,
						fct_color: 		'#55c',
						factor: 		0.1,
						duration: 		1
					}
				}
			},
			2:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['aggro'],
						buff_image: 	'abilities/lion-2885618_640.jpg',
						buff_name: 		'aggro',
						buff_type: 		'buff',
						fct_size: 		1.25,
						fct_color: 		'#55c',
						factor: 		1000,
						duration: 		1
					}
				}
			}
		}
	},
	bark:{
		name: 			'bark',
		types: 			[],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['aggro'],
						buff_image: 	'abilities/lion-2885618_640.jpg',
						buff_name: 		'aggro',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		1000,
						duration: 		1
					}
				}
			}
		}
	},
	give_cover:{
		name: 			'give cover',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				cannot_target: 	'structure',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'current_hp',
						buff_attribute: ['resistance','defense'],
						buff_image: 	'abilities/hiding-1209131_640.jpg',
						buff_name: 		'hide',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		1,
						duration: 		1
					}
				}
			},
			1:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'current_hp',
						buff_attribute: ['aggro'],
						buff_image: 	'abilities/lion-2885618_640.jpg',
						buff_name: 		'aggro',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		1,
						duration: 		1
					}
				}
			}
		}
	},
	taunt:{
		name: 			'taunt',
		types: 			[],
		proc: 			'basic',
		cooldown: 		3,
		description: 	'Temporarily increase your aggro. Effect is based on strength.',
		spell_cooldown: 12,
		mana_cost: 		5,
		random_target: 	true,
		spell_target: 	'any',
		image: 			'lion-2885618_640.jpg',
		targets: 		{
			0:{
				target: 		'self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'strength',
						buff_attribute: ['aggro_factor'],
						buff_image: 	'abilities/lion-2885618_640.jpg',
						buff_name: 		'aggro',
						buff_type: 		'buff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		10,
						duration: 		1.5
					}
				}
			}
		}
	},
	focus:{
		name: 			'focus',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		image: 			'aim-2572218_640.jpg',
		description: 	'Set the primary target for a short time.',
		spell_cooldown: 40,
		mana_cost: 		50,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				use_aggro: 		false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['aggro'],
						buff_image: 	'abilities/aim-2572218_640.jpg',
						buff_name: 		'focus',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		1000,
						duration: 		2
					}
				}
			}
		}
	},
	prey_on_the_weak:{
		name: 			'prey on the weak',
		types: 			[],
		proc: 			'basic',
		cooldown: 		2,
		image: 			'aim-2572218_640.jpg',
		description: 	'Set the primary target for a short time.',
		spell_cooldown: 40,
		mana_cost: 		50,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				hp_state: 		'lowest',
				use_aggro: 		false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['aggro'],
						buff_image: 	'abilities/aim-2572218_640.jpg',
						buff_name: 		'focus',
						buff_type: 		'debuff',
						fct_size: 		0.75,
						fct_color: 		'#55c',
						factor: 		1000,
						duration: 		1
					}
				}
			}
		}
	},
	swipe:{
		name: 			'swipe',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		3,
		sound: 			['443567__hachiman935__viento-golpe-02.wav'],
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 3,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'strength',
						fct_size: 		1,
						fct_color: 		'#f00',
						factor: 		1
					}
				}
			}
		}
	},
	protect:{
		name: 			'protect',
		image: 			'baby-feet-402844_640.jpg',
		description: 	'Protect your target by increasing it\'s defense. Effect is based on your defense.',
		spell_cooldown: 20,
		mana_cost: 		15,
		types: 			[],
		proc: 			'basic',
		spell_target: 	'ally',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'defense',
						buff_attribute: ['defense'],
						buff_image: 	'abilities/baby-feet-402844_640.jpg',
						buff_name: 		'protect',
						buff_type: 		'buff',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	3
					}
				}
			}
		}
	},
	dominate:{
		name: 			'dominate',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				use_aggro: 		false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['dominated'],
						buff_image: 	'abilities/head-1058432_640.jpg',
						buff_name: 		'dominated',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	2
					}
				}
			}
		}
	},
	dominate_beast:{
		name: 			'dominate beast',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				specific_target: 'animal',
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['dominated'],
						buff_image: 	'abilities/head-1058432_640.jpg',
						buff_name: 		'dominated',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	1
					}
				}
			}
		}
	},
	confuse:{
		name: 			'confuse',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				use_aggro: 		false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['confused'],
						buff_image: 	'abilities/jester-159438_640.png',
						buff_name: 		'confused',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	5
					}
				}
			}
		}
	},
	chaos:{
		name: 			'chaos',
		types: 			['mental'],
		proc: 			'basic',
		cooldown: 		5,
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				use_aggro: 		false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['confused'],
						buff_image: 	'abilities/jester-159438_640.png',
						buff_name: 		'confused',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	0.5
					}
				}
			},
			1:{
				target: 		'not_self',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 10,
				use_aggro: 		false,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'intellect',
						buff_attribute: ['confused'],
						buff_image: 	'abilities/jester-159438_640.png',
						buff_name: 		'confused',
						buff_type: 		'debuff',
						removed_on: 	'damaged',
						fct_size: 		1,
						fct_color: 		'#ccc',
						factor: 		1,
						duration:   	0.5
					}
				}
			}
		}
	},
	nut_barrage:{
		name: 			'nut barrage',
		types: 			['physical'],
		proc: 			'basic',
		cooldown: 		1,
		image: 			'acorns-1873832_640.jpg',
		description: 	'Throws 3 acorns at your target. Effect is based on agility.',
		spell_cooldown: 1,
		mana_cost: 		5,
		spell_target: 	'enemy',
		targets: 		{
			0:{
				target: 		'enemy',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	3,
				unique_targets: 1,
				target_random: 	true,
				ability_delay: 	0.1,
				effect:{
					0:{
						type: 			'physical_damage',
						attribute: 		'speed',
						fct_size: 		0.8,
						fct_color: 		'#f00',
						factor: 		0.3
					}
				}
			}
		}
	},
	fire_shield:{
		name: 			'fire shield',
		types: 			['fire','magical','magical_damage'],
		proc: 			'receive_damage',
		cooldown: 		0.1,
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'magical_damage',
						attribute: 		'intellect',
						fct_size: 		1,
						fct_color: 		'#fd0',
						factor: 		0.2
					}
				}
			}
		}
	},
	ice_shield:{
		name: 			'ice shield',
		types: 			['water','ice','magical','magical_damage'],
		proc: 			'receive_damage',
		cooldown: 		0.1,
		targets: 		{
			0:{
				target: 		'active_unit',
				target_state: 	'alive',
				target_damaged: false,
				target_buff: 	'any',
				target_count: 	1,
				unique_targets: 1,
				effect:{
					0:{
						type: 			'buff',
						attribute: 		'fixed',
						buff_attribute: ['attack_speed'],
						buff_image: 	'abilities/15.png',
						buff_name: 		'chilled',
						buff_type: 		'debuff',
						fct_size: 		1,
						fct_color: 		'#08f',
						factor: 		-0.25,
						duration: 		2
					},
					1:{
						type: 			'remove_buff',
						attribute: 		'intellect',
						buff_attribute: ['burn'],
						fct_size: 		0,
						fct_color: 		'#9f9',
						factor: 		'all'
					},
				}
			}
		}
	}
}