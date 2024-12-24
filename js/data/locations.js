var current_location = 'none';

var all_locations = {
	map:{
		type: 				'location',
		parent_location: 	'none',
		card_image:  		'map',
		map_col:  			0,
		map_row: 			0,
	},
	
	// VILLAGE
		village:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'tavern',
			map_col:  			1,
			map_row: 			1,
		},
		// LABORATORY
			alchemists_lab:{
				type: 				'location',
				parent_location: 	'village',
				card_image:  		'alchemists_lab',
				mob_subtypes: 		['subtype_human','poison_ability'],
				not_mob_subtypes: 	['subtype_jotnar','subtype_wanton','subtype_royal','subtype_holy','subtype_undead'],
				map_col:  			1,
				map_row: 			3,
			},
		// LIBRARY
			library:{
				type: 				'location',
				parent_location: 	'village',
				card_image:  		'library',
				mob_subtypes: 		['subtype_clerk'],
				map_col:  			1,
				map_row: 			5,
			},
			rogue:{
				type: 				'battle',
				parent_location: 	'village',
				card_image:  		'rogue',
				map_col:  			2,
				map_row: 			1,
			},
		// ARMORY
			armory:{
				type: 				'location',
				parent_location: 	'village',
				card_image:  		'armory',
				mob_subtypes: 		['subtype_human','subtype_warrior'],
				not_mob_subtypes: 	['subtype_jotnar','subtype_wanton','subtype_royal','subtype_holy','guard_ability'],
				map_col:  			2,
				map_row: 			4,
			},
		// SHRINE
		angel_statue:{
			type: 				'location',
			parent_location: 	'village',
			card_image:  		'angel_statue',
			mob_subtypes: 		['subtype_angel','subtype_holy'],
			map_col:  			3,
			map_row: 			3,
		},
		// FURNACE
			furnace:{
				type: 				'location',
				parent_location: 	'village',
				card_image:  		'furnace',
				mob_subtypes: 		['subtype_human','burn_ability'],
				not_mob_subtypes: 	['subtype_jotnar','subtype_wanton','subtype_royal','subtype_holy','subtype_undead','hell','subtype_mage','subtype_witch'],
				map_col:  			5,
				map_row: 			3,
			},
	// FUNGUS
		fungal_wall:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'fungal_wall',
			mob_subtypes: 		['subtype_fungus'],
			map_col:  			1,
			map_row: 			3,
		},
	// tree_of_thought
		tree_of_thought:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'tree_of_thought',
			mob_subtypes: 		['deck_control','subtype_animal'],
			not_mob_subtypes: 	[],
			map_col:  			1,
			map_row: 			4,
		},
	// 
		arcane_fortress:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'arcane_fortress',
			mob_subtypes: 		['subtype_human','subtype_mage','arcane_bolts_ability'],
			map_col:  			1,
			map_row: 			5,
		},
	// PALISADE
		palisade:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'palisade',
			mob_subtypes: 		['subtype_human','guard_ability'],
			not_mob_subtypes: 	['subtype_jotnar','subtype_wanton','subtype_royal','subtype_holy'],
			map_col:  			2,
			map_row: 			1,
		},
	// FORT
		fort:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'fort',
			mob_subtypes: 		['subtype_wall'],
			map_col:  			2,
			map_row: 			2,
		},
	// SWAMP
		swamp:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'swamp',
			mob_subtypes: 		['swamps'],
			mob_subtypes: 		['curse_ability'],
			not_mob_subtypes: 	['subtype_jotnar','subtype_wanton','subtype_witch','subtype_ghost','subtype_golem'],
			map_col:  			2,
			map_row: 			3,
		},
	// Gu'nar
		flying_fortress:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'flying_fortress',
			mob_subtypes: 		['air_ability'],
			map_col:  			2,
			map_row: 			4,
		},
	// ENHANTED FOREST
		enchanted_forest:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'enchanted_forest',
			mob_subtypes: 		['subtype_elf'],
			map_col:  			3,
			map_row: 			2,
			//needs_stories_complete: ['bandit_leader'],
		},
			flower_girl:{
				type: 				'battle',
				parent_location: 	'enchanted_forest',
				card_image:  		'flower_girl',
				map_col:  			2,
				map_row: 			3,
				needs_stories_complete: ['hide'],
			},
			blue_butterflies:{
				type: 				'battle',
				parent_location: 	'enchanted_forest',
				card_image:  		'blue_butterflies',
				map_col:  			3,
				map_row: 			3,
			},
		// GNOMES
			gnomish_house:{
				type: 				'location',
				parent_location: 	'enchanted_forest',
				card_image:  		'gnomish_house',
				mob_subtypes: 		['subtype_gnome'],
				map_col:  			5,
				map_row: 			5,
			},
	// MOUNTAIN
		mountain:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'mountain',
			mob_subtypes: 		['subtype_jotnar'],
			map_col:  			3,
			map_row: 			3,
		},
	// MAUSOLEUM
		mausoleum_of_the_damned:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'mausoleum_of_the_damned',
			mob_subtypes: 		['subtype_skeleton'],
			map_col:  			3,
			map_row: 			4,
		},
	// HAUNTED CASTLE
		haunted_castle:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'haunted_castle',
			mob_subtypes: 		['subtype_ghost'],
			map_col:  			3,
			map_row: 			5,
		},
	// WORKSHOP
		workshop:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'workshop',
			mob_subtypes: 		['subtype_golem'],
			map_col:  			4,
			map_row: 			1,
		},
	// WITCH HUT
		witches_hut:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'witches_hut',
			mob_subtypes: 		['subtype_witch','subtype_human'],
			not_mob_subtypes: 	['subtype_jotnar','subtype_wanton'],
			map_col:  			4,
			map_row: 			3,
		},
			fire_witch:{
				type: 				'battle',
				parent_location: 	'witches_hut',
				card_image:  		'fire_witch',
				map_col:  			3,
				map_row: 			3,
			},
	// NALDU
		cathedral:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'cathedral',
			mob_subtypes: 		['subtype_holy'],
			map_col:  			5,
			map_row: 			1,
		},
	
	// doomed_tower
		doomed_tower:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'doomed_tower',
			mob_subtypes: 		['doom_ability'],
			not_mob_subtypes: 	['subtype_wanton'],
			map_col:  			5,
			map_row: 			3,
		},
	// tower_of_fire
		tower_of_fire:{
			type: 				'location',
			parent_location: 	'map',
			card_image:  		'tower_of_fire',
			mob_subtypes: 		['hell'],
			map_col:  			5,
			map_row: 			5,
		},
	
};

function find_fee_sublocation_slot(location_id){
	var free_slots = {};
	var free_slot = {x: 0, y: 0};
	for (var x = 1; x <= 5; x++){
		for (var y = 1; y <= 5; y++){
			if(x != 1 || y != 1)
			{
				var found_free_slot = true;
				$.each(all_locations, function(sublocation_id, location_info){
					if(location_info['parent_location'] == location_id && location_info['map_col'] == x && location_info['map_row'] == y)
					{
						found_free_slot = false;
					}
				});
				if(found_free_slot == true)
				{
					free_slots[get_highest_key_in_object(free_slots) + 1] = {x: x, y: y};
					/*free_slot['x'] = x;
					free_slot['y'] = y;*/
				}
			}
		}
	}
	if(count_object(free_slots) > 0)
	{
		free_slot = free_slots[get_random_key_from_object(free_slots)];
	}
	return free_slot;
}

function check_unplaced_heroes(){
	var all_unplaced_themes = {};
	var all_unplaced_cards = {};
	$.each(all_available_cards, function(card_id, card_info){
		if(card_info['hero_version'] != undefined && all_locations[card_id] == undefined)
		{
			all_unplaced_cards[card_id] = true;
			$.each(card_info['theme'], function(useless_key, single_theme){
				if(single_theme != undefined)
				{
					if(all_unplaced_themes[single_theme] == undefined){all_unplaced_themes[single_theme] = 0;}
					all_unplaced_themes[single_theme]++;
				}
			});
		}
	});
	console.log('cards: ' + count_object(all_unplaced_cards));
	console.log(all_unplaced_cards);
	console.log('themes: ' + count_object(all_unplaced_themes));
	console.log(all_unplaced_themes);
}

$.each(all_locations, function(location_id, location_info){
	if(location_info['mob_subtypes'] != undefined)
	{
		$.each(all_available_cards, function(card_id, card_info){
			if(card_info['hero_version'] != undefined && match_array_values(card_info['theme'], location_info['mob_subtypes'], true) == count_object(location_info['mob_subtypes']) && (location_info['not_mob_subtypes'] == undefined || match_array_values(card_info['theme'], location_info['not_mob_subtypes']) == false) && all_locations[card_id] == undefined)
			{
				var free_slot = find_fee_sublocation_slot(location_id);
				if(free_slot['x'] != 0)
				{
					all_locations[card_id] = {
						type: 				'battle',
						parent_location: 	location_id,
						card_image:  		card_id,
						map_col:  			free_slot['x'],
						map_row: 			free_slot['y'],
					}
				}
			}
		});
	}
});

$.each(all_locations, function(location_id, location_info){
	if(location_info['type'] == 'battle' && location_info['card_image'] != undefined && location_info['hero_id'] == undefined && all_available_cards[location_info['card_image']] != undefined)
	{
		location_info['hero_id'] = location_info['card_image'];
	}
	/*if(location_info['type'] == 'battle' && all_achievements[location_info['hero_id']] == undefined && all_available_cards[location_info['hero_id']] != undefined)
	{
		all_achievements[location_info['hero_id']] = {
			name: 			all_available_cards[location_info['hero_id']]['name'],
			description: 	'Defeat ' + all_available_cards[location_info['hero_id']]['name'] +  ' on the map.',
			image: 			all_available_cards[location_info['hero_id']]['image'],
			objective: 		'map_battle_won_' + location_id,
			amount: 		1,
			hide_amount: 	true,
			rewards:{
				0:{
					reward_id: 			'trunk',
					reward_amount: 		1
				},
			}
		};
		if(location_info['first_clear_loot'] != undefined)
		{
			$.each(location_info['first_clear_loot'], function(loot_id, loot_amount){
				all_achievements[location_info['hero_id']]['rewards'][get_highest_key_in_object(all_achievements[location_info['hero_id']]['rewards']) + 1] = {
					reward_id: 			loot_id,
					reward_amount: 		loot_amount
				}
			});
		}
	}*/
});

/*all_achievements = sortObj(all_achievements);*/