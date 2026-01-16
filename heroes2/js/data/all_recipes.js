var all_recipes = {

	bread:{
		name: 		'bread',
		description: 	'Bake some bread.',
		image: 		'items/bread-g9256d748a_640.jpg',
		cost:{
			flour: 				3,
			firewood: 			5,
		},
		rewards:{
			bread: 				1,
		}
	},
	cloak:{
		name: 		'cloak',
		description: 	'Sew a simple cloak.',
		image: 		'items/man-962563_640.jpg',
		cost:{
			cloth: 				4,
			yarn: 				4,
		},
		rewards:{
			cloak: 				1,
		}
	},
	cloth:{
		name: 		'cloth',
		description: 	'Weave yarn into cloth.',
		image: 		'items/cloths-g50b9ac499_640.jpg',
		cost:{
			yarn: 			5,
		},
		rewards:{
			cloth: 			1,
		}
	},
	druid:{
		name: 		'recipe: Druid',
		description: 	'Further train a herbalist into a druid.',
		image: 		'units/druid-1950104_640.jpg',
		cost:{
			herb_bundle: 		1,
			herbalist: 			1,
			staff: 				1,
		},
		rewards:{
			druid: 				1,
		}
	},
	firewood:{
		name: 	'firewood',
		description: 	'Turn some lumber into firewood.',
		image: 	'items/wood-1079365_640.jpg',
		cost:{
			lumber: 			1,
		},
		rewards:{
			firewood: 			6,
		}
	},
	flax_yarn:{
		name: 		'Flax yarn',
		description: 	'Make yarn from flax.',
		image: 		'items/yarn-2564556_640.jpg',
		cost:{
			flax: 		5,
		},
		rewards:{
			yarn: 		4,
		}
	},
	flour_barley:{
		name: 	'barley flour',
		description: 	'Mill barley into flour.',
		image: 	'items/flour-g3e2718cf4_640.jpg',
		cost:{
			barley: 		5,
		},
		rewards:{
			flour: 			1,
		}
	},
	flour_wheat:{
		name: 	'wheat flour',
		description: 	'Mill wheat into flour.',
		image: 	'items/flour-g3e2718cf4_640.jpg',
		cost:{
			wheat: 			5,
		},
		rewards:{
			flour: 			1,
		}
	},
	health_potion:{
		name: 		'Health potion',
		image: 		'items/drank-ga420413eb_640.jpg',
		description: 	'A simple bundle of herbs.',
		cost:{
			jug: 			1,
			sage: 			10,
		},
		rewards:{
			health_potion: 		1,
		}
	},
	herb_bundle:{
		name: 		'Herb bundle',
		image: 		'items/calendula-6512323_1280.jpg',
		description: 	'A simple bundle of herbs.',
		cost:{
			rosemary: 		5,
			sage: 			8,
		},
		rewards:{
			herb_bundle: 		1,
		}
	},
	herbalist:{
		name: 	'Herbalist',
		description: 	'It will take time, but the rascal will then be able to heal his allies.',
		image: 	'units/autumn-2837843_640.jpg',
		cost:{
			rascal: 		1,
			herb_bundle: 	1,
			coins: 			100,
		},
		rewards:{
			herbalist: 		1,
		}
	},
	jacket:{
		name: 		'jacket',
		image: 		'items/fashion-3766441_640.jpg',
		description: 	'Craft a leather jacket from leather and yarn.',
		cost:{
			leather: 		15,
			yarn: 			15,
		},
		rewards:{
			jacket: 		1,
		}
	},
	leather:{
		name: 		'leather',
		description: 	'Tan hides into leather.',
		image: 		'items/leather-540142_640.jpg',
		cost:{
			firewood: 		2,
			hide: 			2,
		},
		rewards:{
			leather: 		1,
		}
	},
	leather_snake:{
		name: 		'snake leather',
		description: 	'Tan snike skins into leather.',
		image: 		'items/skin-3040221_640.jpg',
		cost:{
			snake_skin: 	3,
		},
		rewards:{
			leather: 		1,
		}
	},
	lumberjack:{
		name: 	'lumberjack',
		description: 	'It will take time, money and an axe.',
		image: 	'units/wood-4248997_640.jpg',
		cost:{
			axe: 			1,
			coins: 			250,
		},
		rewards:{
			lumberjack: 	1,
		}
	},
	magic_acorn:{
		name: 		'magic acorn',
		description: 	'Can be used to summon a squirrel!',
		image: 		'items/acorn-4647753_640.jpg',
		cost:{
			acorn: 		100,
			sage: 		10,
		},
		rewards:{
			magic_acorn: 	1,
		}
	},
	net:{
		name: 		'net',
		image: 		'items/fishing-nets-3341187_640.jpg',
		description: 	'Weave a net from yarn.',
		cost:{
			yarn: 		60,
		},
		rewards:{
			net: 		1,
		}
	},
	poison:{
		name: 		'poison',
		image: 		'items/bottle-1481599_640.jpg',
		description: 	'Brew poison.',
		cost:{
			bone: 		5,
			rosemary: 	1,
		},
		rewards:{
			poison: 		1,
		}
	},
	reed_yarn:{
		name: 		'Reed yarn',
		description: 	'Make yarn from reeds.',
		image: 		'items/reed-grass-3789727_640.jpg',
		cost:{
			reeds: 		10,
		},
		rewards:{
			yarn: 		5,
		}
	},
	roasted_perch:{
		name: 		'roast perch',
		description: 	'Roast some perch.',
		image: 		'items/fish-5656366_640.jpg',
		cost:{
			firewood: 	5,
			perch: 		10,
		},
		rewards:{
			roasted_fish: 	1,
		}
	},
	sausage:{
		name: 	'Sausage',
		description: 	'Use some pork to make these hearty snacks.',
		image: 	'items/hot-dog-g8e8fe3d81_640.jpg',
		cost:{
			firewood: 		5,
			pork: 			3,
		},
		rewards:{
			sausage: 		1,
		}
	},
	shoes:{
		name: 	'Shoes',
		description: 	'Craft soft leather shoes.',
		image: 	'items/shoe-gf460848e3_640.jpg',
		cost:{
			leather: 		10,
			yarn: 			8,
		},
		rewards:{
			shoes: 		1,
		}
	},
	staff:{
		name: 		'staff',
		image: 		'items/stick-1215030_640.jpg',
		description: 	'Craft a staff out of lumber and some acorns.',
		cost:{
			acorn: 			30,
			lumber: 		30,
		},
		rewards:{
			staff: 		1,
		}
	},
	thief:{
		name: 		'thief',
		image: 		'units/male-4894541_640.jpg',
		description: 	'Train a rascal into a thief.',
		cost:{
			rascal: 		1,
			rusty_knife: 	1,
		},
		rewards:{
			thief: 		1,
		}
	},
}

$.each(all_recipes, function(recipe_id, recipe_info){
	if(all_items['recipe_' + recipe_id] == undefined)
	{
		all_items['recipe_' + recipe_id] = {
			name: 		recipe_info['name'],
			image: 		recipe_info['image'],
			description: 	recipe_info['description'],
			value: 		1,
			recipe: 	recipe_id,
		};
	}
});