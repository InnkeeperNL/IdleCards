var available_locations = {
	
	
	mage_tower:{
		name: 				'mage tower',
		image: 				'locations/candle-3272201_640.jpg',
		description: 		'Houses alchemists and sages.<br/><i>A great place for all kinds of potions.</i><br/><br/><br/>You will need {parsley}, {jar} and {water} to make potions.<br/>If you have {stone} you can transmute it into iron.',
		cost:{
			/*stone: 			1000,
			plank: 			25,
			mint: 			100*/
			//hide_this: 		true,
		},
		requires:{
		},
		required_items:{
			parsley: 	true,
			/*water:  true,
			stone: 	true,*/
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			0:{
				name: 		'alchemy',
				actions:{
					make_ink: 			['materials'],
					brew_health_potion: ['materials'],
					brew_mana_potion: 	['materials'],
					brew_poison: 		['materials'],
					brew_luck_potion: 	['materials'],
					brew_love_potion: 	['materials'],
					brew_restore_potion: ['brew_health_potion','brew_mana_potion'],
				}
			},
			1:{
				name: 		'medical',
				actions:{
					craft_remedy: 		['materials'],
					craft_healing_tome: ['materials'],
					craft_first_aid_kit: ['materials'],
				}
			},
			2:{
				name: 		'transmutation',
				actions:{
					transmute_stone: 	['materials'],
					transmute_iron: 	['materials'],
				}
			},
		}
	},
	beach:{
		name: 				'beach',
		image: 				'locations/shellfish-3062011_640.jpg',
		description: 		'Comb the beach, build ships and sail the seas.<br/><i>A great place for ships, fishing and supplies.</i><br/><br/>You need {plank}, {nails}, {twine} and {cloth} to make ships.<br/>If you have {fisherman}, you can send them out on ships.',
		cost:{
		},
		requires:{
		},
		required_items:{
			twine: 			true,
			cloth: 			true,
			nails: 			true,
			plank: 			true,
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			0:{
				name: 		'collecting',
				actions:{
					comb_the_beach: 		true,
					scrounge_wrecks: 		true,
					gather_kelp: 			['materials'],
					dry_kelp: 				['gather_kelp'],
					wind_kelp: 				['gather_kelp'],
				}
			},
			1:{
				name: 		'crafting',
				actions:{
					boil_water: 			true,
					salt_fish: 				['materials'],
					//craft_barrel: 			['materials'],
					//craft_crate: 			['materials'],
					//craft_net: 				['materials'],
					extract_ink: 			['materials'],
					make_map: 				['materials'],
					build_ship: 			['materials'],
					build_steam_ship: 		['materials'],
					build_fishing_ship: 	['materials'],
					build_pirate_ship: 		['materials'],
				}
			},
			2:{
				name: 		'supplies',
				actions:{
					package_apples: 		['materials'],
					package_eggs: 			['materials'],
					package_fish: 			['materials'],
					package_s_fish: 		['materials'],
					package_flour: 			['materials'],
					salt_beef: 				['materials'],
					salt_pork: 				['materials'],
					package_meat: 			['materials'],
					package_water: 			['materials'],
				}
			},
			3:{
				name: 		'docks',
				actions:{
					//train_fisherman: 		['materials'],
					get_migrants: 			['materials'],
					raid_ships: 			['materials'],
					pirate_treasure: 		['materials'],
					ship_goods: 			['materials'],
					import_goods: 			['materials'],
					import_tools: 			['materials'],
					import_gear: 			['materials'],
					catch_seafish: 			['materials'],
					tax_office: 			['materials'],
					train_pirate: 			['materials'],
					//train_guard: 			['materials'],
				}
			},
		}
		/*
		TIER 0:
			scrounge wrecks
		TIER 1:
			kelp + water
		TIER 2:
			ships + migrants
		TIER 3:
			barrel + package stuff + ship goods
		TIER 4:
			fishing ships + tax office
		TIER 5:
			import goods
		TIER 6:
			
		*/
	},
	
	/*herb_garden:{
		name: 				'herb garden',
		image: 				'locations/garden-5385995_640.jpg',
		description: 		'A small garden with many herbs.<br/>You will have to build a wall around it to make sure it is not disturbed.',
		cost:{
			stone: 			1000,
			water: 			1000
		},
		requires:{
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			pick_parsley: 		true,
			pick_mint: 			true,
			pick_sage: 			true,
			pick_rosemary: 		true,
		}
	},*/
	/*orchard:{
		name: 				'Orchard',
		image: 				'locations/apple-1873078_640.jpg',
		requires:{
		},
		required_items:{
			apple: 		true,
			egg: 		true,
			flour: 		true,
			sugar: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			search_for_firewood: 	true,
			pick_apples: 			true,
		}
	},*/
	forest:{
		name: 				'Forest',
		image: 				'locations/trees-975091_640.jpg',
		description: 		'The forest can be used in many ways.<br/><i>A great place for firewood, apples, hides and meat.</i>',
		cost:{
			/*water: 			100*/
		},
		requires:{
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'harvesting',
				actions:{
					scrounge_the_forest: 	true,
					harvest_saplings: 		['materials'],
					chop_saplings: 			['materials'],
					chop_down_tree: 		['materials'],
					chop_hardwood: 			['materials'],
					chop_down_walnut_tree: 	['materials'],
					chop_down_cherry_tree: 	['materials'],
					chop_firewood: 			['materials'],
					pick_apples: 			['materials'],
					//use_stream: 			['materials'],
					gather_berries: 		['materials'],
					pick_parsley: 			['materials'],
					pick_mint: 				['materials'],
					pick_sage: 				['materials'],
					pick_rosemary: 			['materials'],
				}
			},
			1:{
				name: 		'crafting',
				actions:{
					refine_sticks: 			true,
					craft_arrow: 			['materials'],
					craft_bone_arrow: 		['materials'],
					craft_bone_spear: 		['materials'],
					firewood_basket: 		['materials'],
					craft_bow: 				['materials'],
					stone_axe: 				['materials'],
					rabbits_foot_charm: 	['materials'],
				}
			},
			2:{
				name: 		'training',
				actions:{
					train_gatherer: 		['materials'],
					train_druid: 			['materials'],
					train_hunter: 			['materials'],
					train_veteran_hunter: 	['materials'],
					train_lumberjack: 		['materials'],
				}
			},
			3:{
				name: 		'hunting',
				actions:{
					hunt_birds:				['materials'],
					hunt_rabbits: 			['materials'],
					hunt_deer: 				['materials'],
					hunt_wolf: 				['materials'],
					hunt_boars: 			['materials'],
					hunt_bear: 				['materials'],
					forest_expedition: 		['materials'],
				}
			},
		}
		/*
		TIER 0:
			gatherers + chop wood
		TIER 1:
			hunters + hunt birds
		TIER 2:
			hunt rabbits 					find stream
		TIER 3:
			lumberjacks + chop wood 		nuts, berries
		TIER 4:
			hunt deer and wolves 		>	parchment
			craft bone arrows + spears
		TIER 5:
			hunt boars 						train druids + gather herbs
		TIER 6:
			veteran hunters + hunt bears 	
		*/
	},
	tailor:{
		name: 				'Tailor',
		image: 				'locations/tailoring-2575930_640.jpg',
		description: 		'A workshop to turn wool and hides into cloth and leather items.<br/><i>A great place for cloth, leather and clothes.</i><br/><br/>You can turn {twine} or {cotton} into many cloth items.<br/>You can use {hide} to make leather items.',
		cost:{
			/*stone: 			100,*/
		},
		requires:{
		},
		required_items:{
			twine: 			true,
			hide: 			true,
			cotton: 		true,
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			0:{
				name: 		'refining',
				actions:{
					weave_cloth: 			['materials'],
					weave_cotton_cloth: 	['materials'],
					textile_mill: 			['materials'],
					tan_leather: 			['materials'],
					tannery: 				['materials'],
					craft_wooden_buttons: 	['materials'],
					craft_bone_buttons: 	['materials'],
				}
			},
			1:{
				name: 		'cloth',
				actions:{
					knit_cap: 		true,
					sew_sack: 		['materials'],
					sew_pillow: 	['materials'],	//2
					sew_scarf: 		['materials'], 	//3
					weave_bandage: 	['materials'], 	//3
					sew_cloak: 		['materials'],	//2
					sew_shirt: 		['materials'], 	//3
					sew_jeans: 		['materials'],	//3
					craft_tent: 	['materials'],	//4
				}
			},
			2:{
				name: 		'leather',
				actions:{
					craft_boots: 	['materials'], 	//1
					craft_belt: 	['materials'],	//2
					craft_jacket: 	['materials'], 	//3
					craft_quiver: 	['materials'], 	//4
					craft_drum: 	['materials'],	//4
					craft_backpack: ['materials'],	//4
					craft_saddle: 	['materials'], 	//4
					
				}
			},	
			3:{
				name: 		'paper',
				actions:{
					craft_parchment: 	['materials'],
					bind_book: 			['materials'], 	//4
				}
			},
			4:{
				name: 		'social',
				actions:{
					gathering_academy: ['materials'],
				}
			}	
		}
		/*
		TIER 0:
			twine + cap
		TIER 1:
			cloth + leather 		sack + boots
		TIER 2:
			cloak
		TIER 3:
			buttons 				shirt + jacket
		TIER 4:
			
		TIER 5:
			
		TIER 6:
			
		*/
	},	
	lumberyard:{
		name: 				'Lumberyard',
		image: 				'locations/wood-1729918_640.jpg',
		description: 		'A place to craft wooden items.<br/>You will need {lumber} and maybe some {iron} or {nails}.<br/><i>A great place for planks, barrels and crates.</i>',
		cost:{
			/*lumber: 			100,*/
		},
		requires:{
		},
		required_items:{
			lumber: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'harvesting',
				actions:{
					search_for_firewood: 	true,
				}
			},
			1:{
				name: 		'crafting',
				actions:{
					craft_wooden_jar: 		['materials'],
					/*wooden_cutlery: 		['materials'],
					wooden_plate: 			['materials'],*/
					craft_paper: 			['materials'],
					craft_cart: 			['materials'],
					hardwood_furniture: 	['materials'],
				}
			},
			2:{
				name: 		'poles',
				actions:{
					craft_pole: 			['materials'],
					craft_shingle: 			['materials'],
					craft_canes: 			['materials'],
				}
			},
			3:{
				name: 		'planks',
				actions:{
					saw_planks: 			['materials'],
					saw_planks_sawmill: 	['materials'],
					steam_sawmill: 			['materials'],
					craft_crate:			['materials'],
					craft_barrel: 			['materials'],
					craft_shield: 			['materials'],
					craft_lute: 			['materials'],
					craft_furniture: 		['materials'],
					cushioned_furniture: 	['materials'],
				}
			},
			4:{
				name: 		'camp',
				actions:{
					//trading_post: 			['materials'],
					expand_camp: 			['materials'],
					//send_supplies: 			['materials'],
				}
			},	
		}
		/*
			TIER 0:
				jars
			TIER 1:
				trading post + camp
			TIER 2:
				lumberjacks
			TIER 3:
				sawmill + crates + barrels
			TIER 4:
				craft carts + send_supplies
			TIER 5:
				advanced trees
			TIER 6:

			*/
	},
	mine:{
		name: 				'Mine',
		image: 				'locations/tunnel-1482347_640.jpg',
		description: 		'You can gather stone and metal ores here. It also allows you to smelt the ores into bars.<br/>You will need a {peasant} to put to work here.<br/><i>A great place for stone, glass, metal and salt.</i>',
		cost:{
			/*pole: 				10,
			plank: 				10*/
		},
		requires:{
		},
		required_items:{
			peasant: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'mining',
				actions:{
					dig_hole: 				true,
					break_rocks: 			['materials'],
					mine_stone: 			['materials'],
					mine_limestone: 		['materials'],
					mine_coal: 				['materials'],
					mine_copper: 			['materials'],
					mine_iron: 				['materials'],
					mine_salt: 				['materials'],
					mine_silver: 			['materials'],
					mine_gold: 				['materials'],
				}
			},
			1:{
				name: 		'social',
				actions:{
					/*trade_jars: 			['materials'],
					feed_peasants: 			['materials'],*/
					train_miner: 			['materials'],
					miner_academy: 			['materials'],
				}
			},
			2:{
				name: 		'smelting',
				actions:{
					craft_charcoal: 		true,
					smelt_copper: 			['materials'],
					smelt_iron: 			['materials'],
					smelt_steel: 			['materials'],
					smelt_silver: 			['materials'],
					smelt_gold: 			['materials'],
					smelt_glass: 			['materials'],
				}
			},
			3:{
				name: 		'crafting',
				actions:{
					craft_glass_jar: 		['materials'],
					craft_pickaxe: 			['materials'],
				}
			},
		}
		/*
			TIER 0:
				glass + jars
			TIER 1:
				break rocks
			TIER 2:
				copper + miners
			TIER 3:
				iron
			TIER 4:
				silver + salt
			TIER 5:
				gold
			TIER 6:
			*/
	},
	farm:{
		name: 				'Farm',
		image: 				'locations/field-176602_640.jpg',
		description: 		'You can grow wheat and other crops here. Chickens can also be bred at the farm.<br/><i>A great place for flour, meat, supplies, twine and sugar.</i>',
		cost:{
			/*plow: 			10,*/
		},
		requires:{
		},
		required_items:{
		},
		upgrade_cost:{
			coins:  			1000
		},
		actions:{
			0:{
				name: 		'gathering',
				actions:{
					clear_the_field: 	true,
					use_the_well: 		true,
				}
			},
			1:{
				name: 		'social',
				actions:{
					assist_the_farmers: ['materials'],
					//trade_farmers: 		['materials'],
					train_farmer: 		['materials'],
					farming_academy: 	['materials'],
				}
			},
			2:{
				name: 		'farming',
				actions:{
					grow_barley: 		['materials'],
					grow_carrots: 		['materials'],
					grow_corn: 			['materials'],
					grow_cotton: 		['materials'],
					grow_cucumber:		['materials'],
					grow_flax: 			['materials'],
					//grow_garlic: 		['materials'],
					grow_hops: 			['materials'],
					grow_leek: 			['materials'],
					grow_lettuce: 		['materials'],
					//grow_onions: 		['materials'],
					//grow_pepper: 		['materials'],
					grow_potatoes: 		['materials'],
					grow_strawberries: 	['materials'],
					grow_sugar_beet: 	['materials'],
					grow_sugarcane: 	['materials'],
					grow_sunflower: 	['materials'],
					grow_tomatoes:		['materials'],
					grow_wheat: 		['materials'],
					//plow_wheat_field: 	['materials'],
					tend_vineyard: 		['materials'],
				}
			},
			3:{
				name: 		'livestock',
				actions:{
					feed_chickens:		['materials'],
					breed_chickens: 	['materials'],
					butcher_chickens: 	['materials'],
					breed_pigs: 		['materials'],
					grow_pigs: 			['materials'],
					butcher_pig: 		['materials'],
				}
			},
			4:{
				name: 		'refining',
				actions:{
					mill_barley_flour:	['materials'],
					mill_wheat_flour:	['materials'],
					wind_twine: 		['materials'],
					//refine_sugar:		['materials'],
				}
			},
			/*5:{
				name: 		'crafting',
				actions:{
					package_meat: 		['materials'],
					package_flour: 		['materials'],
				}
			},*/
			
			/*
			TIER 0:
				train farmers + wheat
			TIER 1:
				flax + twine
			TIER 2:
				flour + sugar + chickens
			TIER 3:
				barley + corn + pigs
			TIER 4:
				hops + cotton
			TIER 5:
				vineyard
			TIER 6:
			*/
		}
	},
	/*vegetable_patch:{
		name: 				'Vegetable patch',
		image: 				'locations/salad-2482457_640.jpg',
		description: 		'You can grow many vegetables here.<br/>You will need plenty of water.',
		cost:{
			water: 			1000,
		},
		requires:{
		},
		required_items:{
			water: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			grow_lettuce: 		true,
			grow_cucumber:		true,
			grow_tomatoes:		true,
			grow_potatoes: 		true,
			grow_carrots: 		true,
		}
	},*/
	
	/*pottery:{
		name: 				'Pottery',
		image: 				'locations/claypots-1323747_640.jpg',
		requires:{
		},
		required_items:{
			clay: 			true,
			firewood: 		true,
		},
		upgrade_cost:{
			coins: 				100,
		},
		actions:{
			bake_brick:		true,
		}
	},*/
	/*furnace:{
		name: 				'Furnace',
		image: 				'locations/metallurgy-2932947_640.jpg',
		description: 		'You can grow smelt ores into usable metal and bake clay.<br/>',
		cost:{
		},
		requires:{
		},
		required_items:{
			firewood: 		true,
			coal: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			craft_charcoal:			true,
			smelt_copper: 			true,
			smelt_iron: 			true,
			smelt_glass: 			true,
			bake_brick:				true,
			bake_shingle: 			true,
			
		}
	},*/
	kitchen:{
		name: 				'Kitchen',
		image: 				'locations/castle-3789871_640.jpg',
		description: 		'You can cook many different dishes here.<br/><i>A great place for all kinds of food and drinks.</i><br/><br/>You can make dishes from {flour} or meat but many require {firewood}.<br/>If you have {milk} you can make butter and cheese.<br/>{salt} is needed for cheese and fries.',
		cost:{
			/*plank: 		20,
			stone: 		100,*/
		},
		requires:{
		},
		required_items:{
			flour: 			true,
			beef: 			true,
			poultry: 		true,
			pork: 			true,
			wild_meat: 		true,
			milk: 			true,
			//salt: 			true,
			//water: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'materials',
				actions:{
					gather_firewood: 		true,
					refine_sugar_beet: 		['materials'],
					refine_sugar: 			['materials'],
					refine_sunflower: 		['materials'],
					make_ketchup: 			['materials'],
					make_mayonnaise: 		['materials'],
					make_pasta: 			['materials'],
					/*grow_lettuce: 		true,
					grow_cucumber:		true,
					grow_tomatoes:		true,
					grow_leek: 			true,
					grow_onions: 		true,
					grow_potatoes: 		true,
					grow_carrots: 		true,*/
					//grow_strawberries: 	['materials'],
				}
			},
			1:{
				name: 		'dairy',
				actions:{
					churn_butter: 			['materials'],
					make_cheese: 			['materials'],
				}
			},
			2:{
				name: 		'snacks',
				actions:{
					make_salad: 			['materials'],
					cook_vegetable_soup: 	['materials'],
					bake_bread:				['materials'],
					bake_cornbread: 		['materials'],
					bake_walnut_bread: 		['materials'],
					bake_cookies: 			['materials'],
					bake_blueberry_muffin: 	['materials'],
					make_salt_popcorn: 		['materials'],
					make_sweet_popcorn: 	['materials'],
					//cook_onion_rings: 		['materials'],
					make_cucumber_sandwich: ['materials'],
					bake_fries: 			['materials'],
					//bake_garlic_fries: 		['materials'],
					bake_carrot_cake: 		['materials'],
					bake_apple_pie: 		['materials'],
					bake_cherry_pie: 		['materials'],
				}
			},
			3:{
				name: 		'drinks',
				actions:{
					brew_mint_tea: 			['materials'],
					pink_milkshake: 		['materials'],
					brew_beer: 				['materials'],
					make_wine: 				['materials'],
				}
			},
			4:{
				name: 		'meat',
				actions:{
					mince_beef: 			['materials'],
					mince_mutton: 			['materials'],
					mince_pork: 			['materials'],
					mince_poultry: 			['materials'],
					mince_wild_meat: 		['materials'],
					cook_meat_balls: 		['materials'],
					cook_tomato_soup:		['materials'],
					make_spaghetti: 		['materials'],
					make_chicken_pasta: 	['materials'],
					cook_sausage: 			['materials'],
					make_hot_dog: 			['materials'],
					cook_hamburger: 		['materials'],
					cook_steak: 			['materials'],
				}
			},
			5:{
				name: 		'meals',
				actions:{
					bacon_and_eggs: 			['materials'],
					make_meal_salad: 			['materials'],
					cook_fish_and_chips: 		['materials'],
					cook_steak_dinner: 			['materials'],
					cook_salmon_dinner: 		['materials'],
					serve_breakfast: 			['materials'],
					fast_food: 					['materials'],
					serve_high_tea: 			['materials'],
					serve_three_course_dinner: 	['materials'],
				}
			},
		}
	},
	/*mill:{
		name: 				'Mill',
		image: 				'locations/mill-1745186_640.jpg',
		description: 		'Use the mill to turn wheat into flour and sugarcane into sugar.<br/>',
		cost:{
		},
		requires:{
		},
		required_items:{
			wheat: 		true,
			sugarcane: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			mill_flower:		true,
			refine_sugar:		true,
		}
	},*/
	smithy:{
		name: 				'Smithy',
		image: 				'locations/horseshoe-1516273_640.jpg',
		description: 		'You can turn metal and wood into usable items here.<br/><i>A great place for nails, tools and jewelry.</i><br/><br/>You can craft items here from {copper} or {iron}.<br/>Many tools require a {pole} or even a {plank}.',
		cost:{
		},
		requires:{
		},
		required_items:{
			copper: 	true,
			iron: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'household',
				actions:{
					craft_charcoal_from_lumber: true,
					craft_copper_pot:	['materials'],
					craft_horseshoes: 	['materials'],
					horseshoe_charm: 	['craft_horseshoes'],
					forge_jar: 			['materials'],
					//iron_cutlery: 		['materials'],
					iron_plate: 		['materials'],
					//silver_cutlery: 	['materials'],
					silver_plate: 		['materials'],
				}
			},
			1:{
				name: 		'tools',
				actions:{
					craft_spyglass: 	['materials'],
					craft_nails: 		['materials'],
					craft_plow: 		['materials'],
					craft_pitchfork: 	['materials'],
					craft_knife:		['materials'],
					craft_axe: 			['materials'],
					craft_iron_pickaxe: ['materials'],
				}
			},
			2:{
				name: 		'weapons & armor',
				actions:{
					craft_sinister_dagger: ['materials'],
					craft_spear: 		['materials'],
					craft_sword: 		['materials'],
					craft_helmet: 		['materials'],
					craft_plate_armor: 	['materials'],
				}
			},
			3:{
				name: 		'jewelry',
				actions:{
					craft_silver_ring: 	['materials'],
					craft_gold_ring: 	['materials'],
				}
			},
		}
		/*
			TIER 0:
				--
			TIER 1:
				--
			TIER 2:
				copper
			TIER 3:
				iron
			TIER 4:
				silver
			TIER 5:
				gold
			TIER 6:
			*/
	},
	river:{
		name: 				'River',
		image: 				'locations/landscape-336542_640.jpg',
		description: 		'You can gather water, sand and clay here. You can even catch some fish!<br/><i>A great place for fish, supplies and bricks.</i>',
		cost:{
			/*plank: 		10,*/
		},
		requires:{
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'gathering',
				actions:{
					comb_the_shore: 	true,
					collect_water: 		['materials'], 	//2
					pick_reeds: 		['materials'],
					dredge_the_river: 	['materials'],	//4
					gold_panning: 		['materials'],	//5
					gather_clay: 		['materials'],
					dig_clay_pit: 		['materials'],	//3
				}
			},
			1:{
				name: 		'fishing',
				actions:{
					catch_perch: 		['materials'],
					roast_perch: 		['materials'],
					catch_trout: 		['materials'],
					grill_trout: 		['materials'],
					spearfishing: 		['materials'],
					catch_salmon: 		['materials'],
					cook_salmon: 		['materials'],
					catch_eels: 		['materials'],
					cook_eel: 			['materials'],
					//salt_fish: 			['materials'],
					/*package_fish: 		['materials'],
					package_s_fish: 	['materials'],*/
				}
			},
			2:{
				name: 		'social',
				actions:{
					save_swimmer: 		true,
					train_gatherer: 	['materials'],
					train_fisherman: 	['materials'],
					build_tollbridge: 	['bake_brick'],
				}
			},
			3:{
				name: 		'crafting',
				actions:{
					reed_basket: 		true,
					strip_reeds: 		['materials'], 	//2
					dry_reeds: 			['materials'],
					craft_net: 			['materials'],
					craft_jar: 			['materials'],
					bake_plate: 		['materials'],
					bake_brick:			['materials'],
					bake_shingle: 		['materials'],
				}
			},
		}
		/*
			TIER 0:
				gatherer + reeds
			TIER 1:
				jars
			TIER 2:
				fishing + gold panning
			TIER 3:
				cooking
			TIER 4:
				bridge + package fish
			TIER 5:
				
			TIER 6:
			*/
	},
	/*ranch:{
		name: 				'Ranch',
		image: 				'locations/utah-139984_640.jpg',
		description: 		'The place to breed and tend sheep and cows.<br/>Maybe, if you expand it enough, you can even put some horses in there.<br/>',
		cost:{
		},
		requires:{
		},
		required_items:{
			hay_bale: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			breed_sheep: 	true,
			shear_sheep: 	true,
			breed_cows:		true,
			milk_cows: 		true,
			breed_horses: 	true,
			train_cowboy: 	true,
		}
	},*/
	/*butcher:{
		name: 				'Butcher',
		image: 				'locations/fleischer-4518180_640.jpg',
		description: 		'You can butcher sheep and cows here for meat.<br/>',
		cost:{
			knife: 			1
		},
		requires:{
			sheep: 		true,
			cow: 		true,
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			butcher_sheep: 		true,
			butcher_cow:		true,
		}
	},*/
	meadow:{
		name: 				'Meadow',
		image: 				'locations/yellow-3123271_640.jpg',
		description: 		'A place to gather grass and turn it into hay. You may even encounter some wild sheep, cows and horses.<br/><i>A great place for wool, hides, milk and meat.</i>',
		cost:{
			/*lumber: 			100,*/
		},
		requires:{
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'collecting',
				actions:{
					mow_grass:			true,
					pick_flowers: 		['materials'],
					look_for_herbs: 	['materials'],
					dig_for_roots: 		['materials'],
					use_the_well: 		['materials'],
					farm_clover: 		['materials'],
					fishing_stream: 	['materials'],
				}
			},
			1:{
				name: 		'crafting',
				actions:{
					dry_grass: 			true,
					straw_basket: 		['materials'],
					hay_roofing: 		['materials'],
					bind_hay: 			['materials'],
					hay_barn: 			['materials'],
					spin_wool: 			['materials'],
					/*craft_net: 			['materials'],*/
					craft_canes: 		['materials'],
					clover_charm: 		['materials'],
					mill_wild_flour: 	['materials'],
				}
			},
			2:{
				name: 		'social',
				actions:{
					charm_travelers: 	true,
					//trade_cowboys: 		['materials'],
					train_gatherer: 	['materials'],
					train_shepherd: 	['materials'],
					/*train_fisherman: 	['materials'],*/
				}
			},
			3:{
				name: 		'animals',
				actions:{
					hunt_wild_sheep: 	['materials'],
					domesticate_wolf: 	['materials'],
					breed_dogs: 		['materials'],
					breed_sheep: 		['materials'],
					shear_sheep: 		['materials'],
					breed_cows:			['materials'],
					milk_cows: 			['materials'],
					breed_horses: 		['materials'],
					butcher_sheep: 		['materials'],
					butcher_cow:		['materials'],
				}
			},
			4:{
				name: 		'cowboys',
				actions:{
					train_cowboy: 		['materials'],
					tend_herd: 			['materials'],
					sell_herd: 			['materials'],
				}
			}
		}
		/*
			TIER 0:
				gatherers + wildflowers
			TIER 1:
				catch animals + roots 					
			TIER 2:
				clover charms + milk + twine 			 
			TIER 3:
				shepherds									fishing_stream
			TIER 4:
				roofing + barn + breeding + butchering
			TIER 5:
				cowboys
			TIER 6:
				sell herds
			*/
	},
	village:{
		name: 				'village',
		image: 				'locations/medieval-3413173_640.jpg',
		description: 		'A place to call home. Once you have built it, you can expand it and attract villagers.<br/><i>A great place for all kinds of workers.</i><br/><br/>You will need either {stone}, {brick} or {lumber} to build walls and {roofing}.',
		cost:{
			//hide_this: 		true,
		},
		requires:{
		},
		required_items:{
			stone: 			true,
			brick: 			true,
			lumber: 		true,
			roofing: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			0:{
				name: 		'construction',
				actions:{
					clear_ground: 		true,
					chisel_brick: 		['materials'],
					mix_cement: 		['materials'],
					build_wall:			['materials'],
					build_log_wall: 	['materials'],
					build_house: 		['materials'],
					attract_peasant: 	['materials'],
				}
			},
			1:{
				name: 		'services',
				actions:{
					tavern: 			['materials'],
					inn: 				['materials'],
					train_guard: 		['materials'],
					patrol_village: 	['materials'],
					coal_plant: 		['materials'],
				}
			},
			2:{
				name: 		'economy',
				actions:{
					town_mill: 			['materials'],
					/*farmers_market: 	['materials'],
					fish_market: 		['materials'],
					cattle_market: 		['materials'],
					bakery: 			['materials'],
					brewery: 			['materials'],
					hunters_lodge: 		['materials'],
					miners_guild: 		['materials'],
					potion_shop: 		['materials'],
					weavers_shop: 		['materials'],
					tannery: 			['materials'],
					carpenters_shop: 	['materials'],*/
				}
			},
			3:{
				name: 		'nightlife',
				actions:{
					train_thief: 		['materials'],
					employ_thieves: 	['materials'],
				}
			},
			
			
		}
	},
	

}

available_locations = sortObj(available_locations);