var all_actions = {
	
	// ##################################################################### SLUMS
	
	
	
	culling_thieves:{
		name: 	'Culling thieves',
		description: 	'Darren welcomes you to his shop.<i>Welcome, welcome!<br/>Say, could you help out and take care of the thieves around here? They keep stealing my stuff!</i>',
		complete_description: '<i>Well done!</i>',
		image: 	'units/male-4894541_640.jpg',
		move_to_location_on_accept: 'maywell_slums',
		move_to_location_on_complete: 'pawnshop',
		type: 	'quest',
		requirements:{
		},
		goals:{
			0:{
				name: 		'Thieves',
				type: 		'kills',
				target_id: 	'thief',
				amount: 	10,
			}
		},
		rewards:{
			coins: 			25,
		}
	},
	
	/*catch_fish:{
		name: 	'catch fish',
		description: 	'',
		image: 	'special/abstract-18214_640.jpg',
		type: 	'catch',
		requirements:{
			quests:{
				fred_the_fisherman: 	'done',
			}
		},
		background_image: 'special/abstract-18214_640.jpg',
		catchables:{
			perch:{
				cooldown: 		20,
				catch_time: 	3,
				target_image: 	'catchables/fish.svg',
				target_size: 	150,
				visibility: 	0.3,
				max_hp: 		1,
				sound: 			'splash',
				movement:{
					left: 		-4,
					top: 		0,
				},
				loot:{
					perch:{
						chance: 	100,
						min: 		1,
						max: 		1,
					}
				}
			},
			perch_2:{
				cooldown: 		20,
				catch_time: 	3,
				target_image: 	'catchables/fish.svg',
				target_size: 	150,
				visibility: 	0.3,
				max_hp: 		1,
				sound: 			'splash',
				movement:{
					left: 		-8,
					top: 		0,
				},
				loot:{
					perch:{
						chance: 	100,
						min: 		1,
						max: 		1,
					}
				}
			},
			firewood:{
				cooldown: 		20,
				catch_time: 	4,
				target_image: 	'catchables/wood-stick.svg',
				target_size: 	150,
				visibility: 	0.4,
				max_hp: 		1,
				sound: 			'splash',
				movement:{
					left: 		3,
					top: 		3,
				},
				loot:{
					firewood:{
						chance: 	100,
						min: 		1,
						max: 		1,
					}
				}
			},
			lumber:{
				cooldown: 		100,
				catch_time: 	5,
				target_image: 	'catchables/log.svg',
				target_size: 	150,
				visibility: 	0.4,
				max_hp: 		1,
				sound: 			'splash',
				movement:{
					left: 		-3,
					top: 		3,
				},
				loot:{
					lumber:{
						chance: 	100,
						min: 		1,
						max: 		1,
					}
				}
			},
			
		}
	},*/
}