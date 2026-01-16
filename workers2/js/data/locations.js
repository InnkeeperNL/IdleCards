var available_locations = {
	/*apple_orchard:{
		name: 			'apple orchard',
		image: 			'locations/apples-g082bc2fe4_640.jpg',
		cost:{
			apple: 		100,
			basket: 	10,
		},
		bonus_items:{
			apple: 	1,
		}
	},*/
	
	archery_range:{
		name: 			'archery range',
		image: 			'locations/arrow-ge8a1bb9e6_640.jpg',
		descriptions:{
			0: 			'Increases production of archery items.',
			1: 			'unlocks bow and arrow (hunter).<br/>Also unlocks elf archer (customer)',
		},
		needs_locations:{
			1:{
				forest: 		2,
				hunting_lodge: 	2,
			}
		},
		cost:{
			feather: 		50,
			firewood: 		100,
			lumber: 		50,
			twine: 			50,
		},
		upgrade_costs:{
		},
		bonus_items:{
			bow: 		1,
			arrow: 		1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	armory:{
		name: 			'armory',
		image: 			'locations/historical-reenactment-906727_640.jpg',
		descriptions:{
			0: 			'Increases production of weapons and armor.',
			1: 			'unlocks sword (toolmaker/blacksmith) and spear (hunter/carpenter).<br/>Also unlocks warrior training (peasant)',
			2: 			'unlocks shield (carpenter).<br/>Also unlocks shieldman training (warrior)',
		},
		needs_locations:{
			1:{
				forest: 		2,
				quarry: 		1,
				workshop: 		2,
			}
		},
		cost:{
			lumber: 		150,
			stone: 			150,
		},
		upgrade_costs:{
			2:{
				plank: 		30,
			}
		},
		bonus_items:{
			spear: 		1,
			sword: 		1,
			shield: 	2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	
	bakery:{
		name: 			'bakery',
		image: 			'locations/stone-oven-4909918_640.jpg',
		descriptions:{
			0: 			'Increases production of baked goods.',
			1: 			'unlocks baker (toolmaker).',
			2: 			'unlocks cookie (baker).',
			3: 			'unlocks pies (baker).',
		},
		needs_locations:{
			1:{
				mill: 		1,
			},
			2:{
				mill: 		2,
			},
			3:{
				forest: 	3,
				mill: 		2,
			}
		},
		cost:{
			firewood: 	200,
			flour: 		100,
			stone: 		100,
		},
		upgrade_costs:{
			2:{
				dough: 			20,
				egg: 			20,
				sugar: 			20,
				firewood: 		50,
				water: 			20,
			},
			3:{
				apple: 			50,
				cinnamon: 		5,
				dough: 			20,
				egg: 			10,
				firewood: 		50,
				sugar: 			10,
			},
		},
		bonus_items:{
			dough: 			1,
			bread: 			1,
			pretzel: 		1,
			cookie: 		2,
			apple_pie:		3,
			meat_pie: 		3,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	chicken_coop:{
		name: 			'chicken coop',
		image: 			'locations/roosters-5599141_640.jpg',
		descriptions:{
			0: 			'Increases production of eggs and chickens.',
			1: 			'unlocks hatching eggs and tending chickens (farmer).',
		},
		needs_locations:{
		},
		cost:{
			egg: 			20,
			lumber: 		100,
			stone: 			100,
			wheat: 			250,
		},
		upgrade_costs:{
		},
		bonus_items:{
			chicken: 		1,
			egg: 			1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	construction_yard:{
		name: 			'construction yard',
		image: 			'locations/nature-3286466_640.jpg',
		descriptions:{
			0: 			'Increases production of buildings.',
			1: 			'unlocks mason (toolmaker).',
		},
		needs_locations:{
			quarry: 		2,
			river: 			1,
			workshop: 		3,
		},
		cost:{
			clay: 			100,
			firewood: 		200,
			limestone: 		100,
			stone: 			100,
		},
		upgrade_costs:{
		},
		bonus_items:{
			brick: 			1,
			wall: 			1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	
	coven:{
		name: 			'coven',
		image: 			'locations/fantasy-gb9a4ead61_640.jpg',
		descriptions:{
			0: 			'Increases production of dark magic.',
			1: 			'unlocks witch training (toolmaker).',
		},
		needs_locations:{
			1:{
				forest: 	2,
			},
			2:{
				workshop: 	2,
			},
		},
		cost:{
			bone: 			50,
			firewood: 		100,
			lumber: 		100,
			twine: 			20,
		},
		upgrade_costs:{
			2:{
				bone: 			20,
				firewood: 		200,
				grave_moss: 	50,
				jar: 			10,
				water: 			200,
			},
		},
		bonus_items:{
			voodoo_doll: 	1,
			poison: 		2,
			love_potion: 	2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	farm:{
		name: 			'farm',
		image: 			'locations/field-176602_640.jpg',
		descriptions:{
			0: 			'Increases production of crops.',
			1: 			'unlocks farmer training (gatherer).',
			2: 			'unlocks sugarcane and flax (farmer).',
			3: 			'unlocks onion and potato (farmer).',
			4: 			'unlocks cucumber, lettuce and tomato (farmer).',
		},
		needs_locations:{
			1:{
				workshop: 	2,
			}
		},
		cost:{
			pitchfork: 		10,
			water: 			250,
		},
		upgrade_costs:{
			2:{
				pitchfork: 		10,
				water: 			300,
			},
			3:{
				pitchfork: 		20,
				water: 			400,
			},
			4:{
				pitchfork: 		25,
				water: 			600,
			},
		},
		bonus_items:{
			cucumber: 	4,
			flax: 		2,
			lettuce: 	4,
			onion: 		3,
			potato: 	3,
			sugarcane: 	2,
			tomato: 	4,
			wheat: 		1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	forest:{
		name: 			'forest',
		image: 			'locations/forest-gd8f28ae40_640.jpg',
		descriptions:{
			0: 			'Increases firewood and lumber production.',
			1: 			'unlocks firewood (peasant).',
			2: 			'unlocks lumber (gatherer).<br/>Also unlocks woodsman training (gatherer) and lumberjack (customer).',
			3: 			'unlocks druid training (woodsman).<br/>Also unlocks messenger (customer).',
		},
		needs_locations:{
			2:{
				/*workshop: 	1,*/
			}
		},
		cost:{
			water: 		20,
		},
		upgrade_costs:{
			2:{
				water: 			100,
			},
			3:{
				water: 			500,
			},
		},
		bonus_items:{
			firewood: 	1,
			lumber:		2,
			apple: 		2,
			cinnamon: 	3,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	furnace:{
		name: 			'furnace',
		image: 			'locations/industry-647413_640.jpg',
		descriptions:{
			0: 			'Increases production of smelted items.',
			1: 			'unlocks smelting glass (miner).',
			2: 			'unlocks smelting copper (miner).',
			3: 			'unlocks smelting iron (miner).',
		},
		needs_locations:{
			1:{
				quarry: 	2,
			},
			2:{
				quarry: 	3,
			},
			3:{
				quarry: 	4,
			},
		},
		cost:{
			coal: 		50,
			stone: 		50,
		},
		upgrade_costs:{
			2:{
				coal: 			30,
				copper_ore: 	20,
				stone: 			50,
			},
			3:{
				coal: 			30,
				iron_ore: 		20,
				stone: 			50,
			},
		},
		bonus_items:{
			glass:		1,
			copper: 		2,
			iron: 		3,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	graveyard:{
		name: 			'graveyard',
		image: 			'locations/graveyard-989920_640.jpg',
		descriptions:{
			0: 			'Unlocks undead enemies to fight.',
			1: 			'unlocks skeletons.<br/>Also unlocks necromancer (customer).',
			2: 			'unlocks zombies and ghouls.',
		},
		needs_locations:{
			1:{
				armory: 	1,
				quarry: 	1,
			},
		},
		cost:{
			stone: 		200,
		},
		upgrade_costs:{
			2:{
				bone: 			100,
				stone: 			100,
			},
		},
		bonus_items:{
			bone: 			1,
			skull: 			1,
			grave_moss: 	2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	hunting_lodge:{
		name: 			'hunting lodge',
		image: 			'locations/hut-gcf88d5b6e_640.jpg',
		descriptions:{
			0: 			'Increases production of hunting goods.',
			1: 			'unlocks trapper training (woodsman).',
			2: 			'unlocks hunter training (trapper).',
			/*3: 			'unlocks hunting birds and deer (hunter).',*/
		},
		needs_locations:{
			1:{
				forest: 	2,
				workshop: 	1,
			},
			/*3:{
				archery_range: 	1,
			}*/
		},
		cost:{
			twine: 		25,
			lumber: 	100,
		},
		upgrade_costs:{
			2:{
				hide: 			50,
				lumber: 		100,
				net: 			10,
			},
			/*3:{
				arrow: 			50,
				bow: 			10,
				hide: 			50,
			},*/
		},
		bonus_items:{
			hide: 			1,
			meat: 			1,
			feather: 		2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	kitchen:{
		name: 			'kitchen',
		image: 			'locations/kitchen-4734833_640.jpg',
		descriptions:{
			0: 			'Increases production of cooked goods.',
			1: 			'unlocks chef training (toolmaker).',
		},
		needs_locations:{
			1:{
				quarry: 	1,
				workshop: 	1,
			},
		},
		cost:{
			knife: 		10,
			lumber: 	150,
			stone: 		150,
		},
		upgrade_costs:{
		},
		bonus_items:{
			apple_sauce: 	1,
			candy_apple: 	1,
			fries: 			1,
			omelette: 		1,
			roasted_meat: 	1,
			sausage: 		1,
			stew: 			1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	library:{
		name: 			'library',
		image: 			'locations/library-425730_640.jpg',
		descriptions:{
			0: 			'Increases production of scribe supplies.',
			1: 			'unlocks scribe training (toolmaker).',
			2: 			'unlocks scroll and book (scribe).',
		},
		needs_locations:{
			1:{
				forest: 	2,
			},
		},
		cost:{
			feather: 	20,
			firewood: 	100,
			jar: 		10,
			lumber: 	100,
		},
		upgrade_costs:{
			2:{
				ink_quill: 		5,
				paper: 			50,
			},
		},
		bonus_items:{
			paper: 		1,
			ink_quill:	1,
			book: 		2,
			scroll: 	2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	mill:{
		name: 			'mill',
		image: 			'locations/mill-1745186_640.jpg',
		descriptions:{
			0: 			'Increases flour and sugar production.',
			1: 			'unlocks flour (farmer).<br/>Also unlocks miller (customer)',
			2: 			'unlocks refining sugar and flax (farmer).',
		},
		needs_locations:{
			1:{
				farm: 	1,
			},
			2:{
				farm: 	2,
			},
		},
		cost:{
			wheat: 		50,
			stone: 		100,
		},
		upgrade_costs:{
			2:{
				flax: 			20,
				sugarcane: 		20,
				stone: 			30,
			},
		},
		bonus_items:{
			flour: 		1,
			sugar:		2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	quarry:{ // mine
		name: 			'mine',
		image: 			'locations/quarry-gebb39f754_640.jpg',
		descriptions:{
			0: 			'Increases production of mined items.',
			1: 			'unlocks stone (gatherer).',
			2: 			'unlocks miner training (gatherer).',
			3: 			'unlocks salt and copper ore (miner).',
			4: 			'unlocks iron ore (miner).',
		},
		needs_locations:{
			1:{
				forest: 	2,
			},
			/*2:{
				workshop: 	2,
			}*/
		},
		cost:{
			firewood: 	100,
			lumber: 	20,
		},
		upgrade_costs:{
			2:{
				pickaxe: 		10,
				stone: 			50,
			},
			3:{
				coal: 			100,
				stone: 			100,
			},
			4:{
				coal: 			250,
				stone: 			250,
			},
		},
		bonus_items:{
			stone: 				1,
			coal: 				2,
			limestone: 			2,
			sand: 				2,
			salt: 				3,
			copper_ore: 		3,
			iron_ore: 			4,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	river:{
		name: 			'river',
		image: 			'locations/landscape-336542_640.jpg',
		descriptions:{
			0: 			'Increases production of items near the river.',
			1: 			'unlocks reeds (gatherer) and clay (gatherer/mason).',
			2: 			'unlocks fishermen (gatherer).',
		},
		needs_locations:{
			1:{
				workshop: 	1,
			},
			2:{
				quarry: 	1,
				workshop: 	1,
			}
		},
		cost:{
			basket: 		25,
		},
		upgrade_costs:{
			2:{
				basket: 		10,
				knife: 			10,
				net: 			10,
			},
		},
		bonus_items:{
			clay: 			1,
			reeds: 			1,
			perch: 			2,
			trout: 			2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	sawmill:{
		name: 			'sawmill',
		image: 			'locations/water-wheel-g3071fd03f_640.jpg',
		descriptions:{
			0: 			'Increases wooden items production.',
			1: 			'unlocks planks (carpenter).',
			2: 			'unlocks items made from planks (carpenter).',
		},
		needs_locations:{
		},
		cost:{
			lumber: 	30,
			pole: 		30,
		},
		upgrade_costs:{
			2:{
				plank: 			50,
				pole: 			50,
			},
		},
		bonus_items:{
			pole: 			0,
			plank: 			1,
			barrel: 		2,
			bed: 			2,
			cart: 			2,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	sewing_room:{
		name: 			'sewing room',
		image: 			'locations/tailoring-2575930_640.jpg',
		descriptions:{
			0: 			'Increases sown items production.',
			1: 			'unlocks tailor training (toolmaker).',
			2: 			'unlocks scarf, button and shirt (tailor).',
		},
		needs_locations:{
			3:{
				furnace: 	3,
				quarry: 	4,
			}
		},
		cost:{
			lumber: 	50,
			twine: 		100,
		},
		upgrade_costs:{
			2:{
				cloth: 		50,
			},
		},
		bonus_items:{
			twine: 			1,
			cloth: 			1,
			jeans: 			2,
			scarf: 			2,
			shirt: 			2,	
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	
	smithy:{
		name: 			'smithy',
		image: 			'locations/horseshoe-1516273_640.jpg',
		descriptions:{
			0: 			'Increases production of glass and metal items.',
			1: 			'unlocks blacksmith training (toolmaker).',
			2: 			'unlocks crafting copper pot (blacksmith).',
			3: 			'unlocks crafting iron items (blacksmith).',
		},
		needs_locations:{
			1:{
				quarry: 	2,
				furnace: 	1,
			},
			2:{
				quarry: 	3,
				furnace: 	2,
			},
			3:{
				quarry: 	4,
				furnace: 	3,
			},
		},
		cost:{
			coal: 		50,
			glass: 		10,
			stone: 		50,
		},
		upgrade_costs:{
			2:{
				copper: 		10,
				coal: 			50,
				stone: 			100,
			},
			3:{
				coal: 			100,
				iron: 			10,
				stone: 			250,
			},
		},
		bonus_items:{
			jar:			1,
			pot: 			2,
			nail: 			3,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	tannery:{
		name: 			'tannery',
		image: 			'locations/leather-gf0ad4f6f1_640.jpg',
		descriptions:{
			0: 			'Increases production of leather items.',
			1: 			'unlocks leatherworker training (toolmaker).',
		},
		needs_locations:{
			1:{
				hunting_lodge: 	1,
				forest: 	2,
				quarry: 	1,
				workshop: 	2,
			},
		},
		cost:{
			firewood: 		100,
			hide: 			50,
			lumber: 		50,
		},
		upgrade_costs:{
		},
		bonus_items:{
			leather:		1,
			shoes: 			1,
			boots: 			1,
			saddle: 		1,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	
	well:{
		name: 			'well',
		image: 			'locations/fountain-g57466396e_640.jpg',
		descriptions:{
			0: 			'Increases water production.',
		},
		needs_locations:{
			1:{
				forest: 	2,
				quarry: 	1,
			}
		},
		cost:{
			stone: 	100,
		},
		upgrade_costs:{
			2:{
				stone: 	250,
			},
			3:{
				stone: 	1000,
			},
		},
		bonus_items:{
			water: 			0,
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	workshop:{
		name: 			'workshop',
		image: 			'locations/blacksmith-g907411b99_640.jpg',
		descriptions:{
			0: 			'Increases tool production.',
			1: 			'unlocks toolmaker and gatherer training (peasant).',
			2: 			'unlocks canes and pitchforks (toolmaker).',
			3:			'unlocks hammers (toolmaker).<br/>Also unlocks carpenter training (toolmaker).',
			/*4: 			'unlocks stone tools (toolmaker).',*/
		},
		needs_locations:{
			1:{
				forest: 	1,
			},
			2:{
				forest: 	2,
			},
			4:{
				quarry: 	1,
			}
		},
		cost:{
			firewood: 	20,
		},
		upgrade_costs:{
			2:{
				firewood: 		50,
				lumber: 		50,
			},
			3:{
				lumber: 		250,
			},
			/*4:{
				lumber: 		100,
				stone: 			100,
			},*/
		},
		bonus_items:{
			basket: 			1,
			cane: 				2,
			pitchfork: 			2,
			hammer: 			3,
			/*axe: 				4,
			pickaxe: 			4,
			knife: 				4,*/
		},
		unlock_workers:{},
		unlock_customers:{}
	},
	
}