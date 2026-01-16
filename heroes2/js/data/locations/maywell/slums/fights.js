/*all_actions['fight_rat'] = {
	name: 	'hunt rats',
	image: 	'units/rat-871089_640.jpg',
	type: 	'combat',
	requirements:{
		quests:{
			kill_rats: 	'busy',
		}
	},
	possible_encounters:{
		rat:{
			chance: 	100,
			min_wave: 	0,
			max_wave: 	1,
			type: 		'combat',
			units:{
				rat:{
					min: 		1,
					max: 		1,
				}
			}
		},
	}
};*/


all_actions['sewer_entrance'] = {
	name: 	'sewer entrance',
	image: 	'locations/sewer-cover-178443_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			find_hideout: 			'done',
			clear_sewer_entrance: 	'not_done',
		}
	},
	possible_encounters:{
		ruffian:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	5,
			type: 		'combat',
			units:{
				ruffian:{
					min: 		2,
					max: 		2,
					level: 		3,
				}
			}
		},
	}
};


all_actions['spawned_rats'] = {
	name: 	'hunt rats',
	image: 	'units/rat-871089_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			kill_rats: 	'accepted',
			kill_giant_rat: 'not_done',
		}
	},
	possible_encounters:{
		rat:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				rat:{
					min: 		1,
					max: 		1,
					level: 		1,
				}
			}
		},
	}
};

all_actions['spawned_big_rats'] = {
	name: 	'hunt rats',
	image: 	'units/mouse-5306026_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			kill_rats: 	'done',
			kill_giant_rat: 'not_done',
		}
	},
	possible_encounters:{
		big_rat:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				big_rat:{
					min: 		1,
					max: 		1,
					level: 		1,
				},
			},
		},
	}
};

all_actions['spawned_alley'] = {
	name: 	'explore alley',
	image: 	'locations/alley-89197_640.jpg',
	type: 	'combat',
	show_icon: 'explore',
	requirements:{
		quests:{
			xbeat_rascals: 	'accepted',
		}
	},
	possible_encounters:{
		rascal:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				rascal:{
					min: 		1,
					max: 		2,
					level: 		3,
				}
			}
		},
		thief:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				thief:{
					min: 		1,
					max: 		1,
					level: 		3,
				}
			},
			requirements:{
				quests:{
					culling_thieves: 	'accepted',
				}
			},
		},
		nothing:{
			chance: 	50,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'Empty alley',
			description: 'This alley is deserted.',
			rewards:{
			}
		},
		knife:{
			chance: 	5,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'treasure',
			name: 		'Knife',
			description: 'I wonder who lost this.',
			rewards:{
				knife:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				quests:{
					culling_thieves: 	'done',
				}
			},
		},
	}
}

all_actions['spawned_thief'] = {
	name: 	'thief',
	image: 	'units/male-4894541_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			culling_thieves: 	'accepted',
		}
	},
	possible_encounters:{
		thief:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				thief:{
					min: 		1,
					max: 		1,
					level: 		4,
				}
			},
		},
	}
}

all_actions['spawned_rascal'] = {
	name: 	'rascal',
	image: 	'units/scarf-3339049_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	possible_encounters:{
		rascal:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				rascal:{
					min: 		1,
					max: 		1,
					level: 		2,
				}
			},
		},
		found_rascal:{
			chance: 	5,
			min_wave: 	2,
			max_wave: 	2,
			type: 		'treasure',
			name: 		'rascal',
			description: 'The rascal joins you!',
			rewards:{
				rascal:{
					min: 		1,
					max: 		1,
				}
			},
			requirements:{
				quests:{
					beat_rascals: 	'done',
				}
			},
		},
	}
}

all_actions['spawned_ruffian'] = {
	name: 	'ruffian',
	image: 	'units/man-66940_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
		quests:{
			find_hideout: 	'accepted',
		}
	},
	possible_encounters:{
		ruffian:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	1,
			type: 		'combat',
			units:{
				ruffian:{
					min: 		1,
					max: 		1,
					level: 		5,
				}
			}
		},
	}
};

all_actions['spawned_corrupter'] = {
	name: 	'thallin\'s guards',
	image: 	'units/mysterious-5925140_640.jpg',
	type: 	'combat',
	show_icon: 'combat',
	requirements:{
	},
	possible_encounters:{
		corrupter:{
			chance: 	100,
			min_wave: 	1,
			max_wave: 	3,
			type: 		'combat',
			units:{
				corrupter:{
					min: 		1,
					max: 		1,
					level: 		2,
				},
				bandit_healer:{
					min: 		1,
					max: 		1,
					level: 		2,
				},
				ruffian:{
					min: 		1,
					max: 		1,
					level: 		2,
				},
				thief:{
					min: 		1,
					max: 		1,
					level: 		2,
				},
			}
		},
		thallin:{
			chance: 	100,
			min_wave: 	4,
			max_wave: 	4,
			type: 		'combat',
			units:{
				thallin:{
					min: 		1,
					max: 		1,
					level: 		4,
				},
				bandit_healer:{
					min: 		4,
					max: 		4,
					level: 		2,
				},
			}
		},
	}
};

all_actions['spawn_rats'] = {
	name: 	'spawn_rats',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_rats','spawned_big_rats'],
	max_spawns: 	2,
	min_spawns: 	1,
	requirements:{
		quests:{
			kill_rats: 	'accepted',
			kill_giant_rat: 'not_done',
		}
	},
	spawn_chances:{
		spawned_rats: 		100,
		spawned_big_rats: 	50,
	}
};

all_actions['spawn_alleys'] = {
	name: 	'spawn_alleys',
	image: 	'',
	type: 	'spawner',
	spawns: 'spawned_alley',
	max_spawns: 	3,
	requirements:{
		quests:{
			beat_rascals: 	'accepted',
		}
	},
};

all_actions['spawn_rascals'] = {
	name: 	'spawn_rascals',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_rascal'],
	max_spawns: 	2,
	requirements:{
		quests:{
			beat_rascals: 	'accepted',
		}
	},
	spawn_chances:{
		spawned_rascal: 	100,
	}
};

all_actions['spawn_thieves'] = {
	name: 	'spawn_thieves',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_thief'],
	max_spawns: 	2,
	requirements:{
		quests:{
			culling_thieves: 	'accepted',
			//take_out_thallin: 	'not_done',
		}
	},
	spawn_chances:{
		spawned_thief: 	100,
	}
};

all_actions['spawn_ruffians'] = {
	name: 	'spawn_ruffians',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_ruffian'],
	max_spawns: 	2,
	requirements:{
		quests:{
			find_hideout: 	'accepted',
			take_out_thallin: 	'not_done',
		}
	},
	spawn_chances:{
		spawned_ruffian: 	100,
	}
};

all_actions['spawn_corrupters'] = {
	name: 	'spawn_corrupters',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_corrupter'],
	max_spawns: 	2,
	requirements:{
	},
	spawn_chances:{
		spawned_corrupter: 	100,
	}
};

all_actions['spawn_shady_people'] = {
	name: 	'spawn_shady_people',
	image: 	'',
	type: 	'spawner',
	spawns: ['spawned_thief','spawned_rascal','spawned_ruffian'],
	max_spawns: 	8,
	requirements:{
		quests:{
			beat_rascals: 	'accepted',
		}
	},
	spawn_chances:{
		spawned_thief: 		100,
		spawned_rascal: 	100,
		spawned_ruffian: 	100,
	}
};