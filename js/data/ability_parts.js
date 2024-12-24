var ability_parts_proc = {
	performed_ability:{
		name_pre: 		'Affected: ',
		name_post: 		'',
		desc_pre: 		'When this affects anything, it also ',
		desc_post: 		'',
		added_stats:{
			not_subtypes: 	['additional_effect'],
		},
		added_subtypes: 	['additional_effect'],
	},
	basic:{
		name_pre: 		'',
		name_post: 		'',
		desc_pre: 		'Every turn ',
		desc_post: 		'',
		added_stats:{
			cannot_proc_while_stunned: true,
		}
	},
}

var ability_parts_targets = {
	enemy_origin_unit:{
		name_pre: 		'',
		name_post: 		'',
		desc_pre: 		'',
		desc_post: 		'to that unit if it is an enemy.',
		targets:{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
	},
	enemy_origin_unit_or_hero:{
		name_pre: 		'',
		name_post: 		'',
		desc_pre: 		'',
		desc_post: 		'to that unit or hero if it is an enemy.',
		targets:{
			0:{
				target: 		'unit_or_hero',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'enemy'
			},
		},
	},
	enemy_unit:{
		name_pre: 		'',
		name_post: 		'_enemy',
		desc_pre: 		'',
		desc_post: 		'to an enemy unit.',
		targets:{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
	},
	enemy_unit_dh:{
		name_pre: 		'',
		name_post: 		'_enemy',
		desc_pre: 		'',
		desc_post: 		'to an enemy unit. Will target the enemy hero if there are no enemy units.',
		targets:{
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
	},
	opposing:{
		name_pre: 		'',
		name_post: 		'_opposing',
		desc_pre: 		'',
		desc_post: 		'to the opposing enemy unit.',
		targets:{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'opposing',
				min_hp: 		1,
				side: 			'enemy'
			},
		},
	},
	opposing_dh:{
		name_pre: 		'',
		name_post: 		'_opposing',
		desc_pre: 		'',
		desc_post: 		'to the opposing enemy unit. Will target the enemy hero if there are no enemy units.',
		targets:{
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
	},
	origin_unit:{
		name_pre: 		'',
		name_post: 		'',
		desc_pre: 		'',
		desc_post: 		'to that unit.',
		targets:{
			0:{
				target: 		'unit',
				target_amount: 	1,
				position: 		'random',
				min_hp: 		1,
				origin_unit: 	true,
				side: 			'any'
			},
		},
	},
}

var ability_parts_effects = {
	burn:{
		name_pre: 		'burn_',
		name_post: 		'',
		desc_pre: 		'applies {LEVEL} burn ',
		desc_post: 		'',
		desc_add: 		'burn',
		default_targets: ['enemy_unit','enemy_unit_dh'],
		effects:{
			0:{
				projectile: 'burn',
				type: 		'apply_burn',
				subtypes: 	['burn'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			},
		},
		added_stats:{
			animation: 			'combat_zoom',
			level_cost: 		2,
			level_cost_spell: 	0.5,
		}
	},
	burn_instant:{
		name_pre: 		'burn_',
		name_post: 		'',
		desc_pre: 		'applies {LEVEL} burn ',
		desc_post: 		'',
		desc_add: 		'burn',
		default_targets: ['enemy_unit','enemy_unit_dh'],
		effects:{
			0:{
				//target_projectile: 	'burn',
				type: 				'apply_burn',
				subtypes: 			['burn'],
				amount: 			'ability_level',
				pause_before: 		-250,
			},
		},
		added_stats:{
			level_cost: 		0,
			average_hit_cost: 	1,
		}
	},
	poison:{
		name_pre: 		'poison_',
		name_post: 		'',
		desc_pre: 		'applies {LEVEL} poison ',
		desc_post: 		'',
		desc_add: 		'poison',
		default_targets: ['enemy_unit','enemy_unit_dh'],
		effects:{
			0:{
				projectile: 'poison',
				type: 		'apply_poison',
				subtypes: 	['poison'],
				amount: 	'ability_level',
				increase_timeout: 500,
				pause_before: 500,
			},
		},
		added_stats:{
			animation: 			'combat_zoom',
			level_cost: 		1.5,
			level_cost_spell: 	0.375,
		}
	},
	poison_instant:{
		name_pre: 		'poison_',
		name_post: 		'',
		desc_pre: 		'applies {LEVEL} poison ',
		desc_post: 		'',
		desc_add: 		'poison',
		default_targets: ['enemy_unit','enemy_unit_dh'],
		effects:{
			0:{
				type: 		'apply_poison',
				subtypes: 	['poison'],
				amount: 	'ability_level',
				pause_before: 		-250,
			},
		},
		added_stats:{
			animation: 			'combat_zoom',
			level_cost: 		1.5,
			level_cost_spell: 	0.375,
		}
	}
}

var ability_parts_desc_adds = {
	burn: 	'{BURN}',
	poison: '{POISON}',
}

function generate_abilities(){
	
	$.each(ability_parts_proc, function(proc_id, proc_info){
		$.each(ability_parts_targets, function(targets_id, targets_info){
			$.each(ability_parts_effects, function(effects_id, effects_info){
				var new_ability = {};
				var new_ability_id = proc_id + '_' + targets_id + '_' + effects_id;
				new_ability['name'] = '';
				new_ability['description'] = '';
				new_ability['desc_adds'] = {};
				// NAME AND DESC
				new_ability = add_name_desc(new_ability, effects_info);
				new_ability = add_name_desc(new_ability, proc_info);
				var add_name = true;
				if(count_object(effects_info['default_targets']) > 0 && match_array_values(effects_info['default_targets'], [targets_id]) == true)
				{
					add_name = false;
				}
				new_ability = add_name_desc(new_ability, targets_info, add_name);
				$.each(new_ability['desc_adds'], function(desc_add_id, desc_add_state){
					if(ability_parts_desc_adds[desc_add_id] != undefined)
					{
						new_ability['description'] += ability_parts_desc_adds[desc_add_id];
					}
				});
				
				// ADD PROC
				new_ability['proc'] = proc_id;
				$.each(proc_info['added_stats'], function(stat_id, stat_value){
					new_ability[stat_id] = true_copyobject(stat_value);
				});
				// ADD TARGETS
				new_ability['targets'] = {};
				$.each(targets_info['targets'], function(target_id, target_value){
					new_ability['targets'][count_object(new_ability['targets'])] = true_copyobject(target_value);
				});
				// ADD EFFECTS
				new_ability['effects'] = {};
				$.each(effects_info['effects'], function(effects_id, effects_value){
					new_ability['effects'][count_object(new_ability['effects'])] = true_copyobject(effects_value);
				});
				$.each(effects_info['added_stats'], function(stat_id, stat_value){
					new_ability[stat_id] = true_copyobject(stat_value);
				});

				// ADDITIONAL SUBTYPES
				if(proc_info['added_subtypes'] != undefined)
				{
					$.each(new_ability['effects'], function(as_effect_id, as_effect_info){
						$.each(proc_info['added_subtypes'], function(as_id, as_info){
							var subtype_array = new_ability['effects'][as_effect_id]['subtypes'];
							subtype_array[get_highest_key_in_object(subtype_array) + 1] = as_info;
						});
					});
				}

				var temp_new_ability_name = new_ability['name'] + '';
				temp_new_ability_name = temp_new_ability_name.replaceAll('__','_');
				new_ability['name'] = temp_new_ability_name.replaceAll('_',' ');
				//console.log(new_ability_id);
				//console.log(new_ability);
				if(all_abilities[new_ability_id] == undefined)
				{
					all_abilities[new_ability_id] = new_ability;
				}
			});
		});
	});
}

function add_name_desc(new_ability, stuff, add_name){
	if(add_name == undefined || add_name == true)
	{
		new_ability['name'] = stuff['name_pre'] + new_ability['name'] + stuff['name_post'];
	}
	new_ability['description'] = stuff['desc_pre'] + new_ability['description'] + stuff['desc_post'];
	if(stuff['desc_add'] != '' && new_ability['desc_adds'][stuff['desc_add']] == undefined)
	{
		new_ability['desc_adds'][stuff['desc_add']] = true;
	}
	return new_ability;
}

function remove_unused_abilities(){
	$.each(all_abilities, function(ability_id, ability_info){
		if(ability_info['used'] == undefined)
		{
			//console.log(ability_id);
			delete all_abilities[ability_id];
		}
	})
}