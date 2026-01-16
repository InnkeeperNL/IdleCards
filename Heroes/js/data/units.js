var player = {
			name: 			'player',
			type: 			'player',
			level: 			1,
			strength: 		10,
			intellect: 		10,
			speed: 			10,
			defense: 		10,
			resistance: 	10,
			regeneration: 	10,
			max_mana: 		100
		}

var available_units = {
	training_dummy:{
		name: 			'training dummy',
		type: 			'training_dummy',
		vulnerable:  	[],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'mannequin-1090714_640.jpg',
		abilities: 		[],
		rarity: 		25,
		loot_items:		{},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	shieldman:{
		name: 			'shieldman',
		value: 			964,
		description: 	'An allround fighter that can block attacks and taunts the enemy.',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		7,
		speed: 			10,
		defense: 		15,
		resistance: 	7,
		shield: 		0,
		max_hp: 		25,
		aggro: 			25,
		aggro_factor: 	4,
		image: 			'man-1694634_640.jpg',
		abilities: 		['attack','block','taunt'],
		rarity: 		25,
		loot_items:		{},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mender:{
		name: 			'mender',
		value: 			1084,
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		2,
		intellect: 		12,
		speed: 			10,
		defense: 		5,
		resistance: 	5,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	0.5,
		image: 			'nature-3121038_640.jpg',
		abilities: 		['cleanse','mayor_heal','lifebloom'],
		rarity: 		10,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:50},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	mage:{
		name: 			'mage',
		value: 			1225,
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	0.5,
		image: 			'fantasy-2495660_640.jpg',
		abilities: 		['firebolt','freeze','arcane_missiles'],
		rarity: 		18,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:50},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells: 	{}
	},
	farmer:{
		name: 			'farmer',
		value: 			1640,
		type: 			'farmer',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	1,
		image: 			'male-1924998_640.jpg',
		abilities: 		['attack','minor_heal','raise_alarm'],
		rarity: 		7,
		loot_items:		{
							flax: 					{min:1,max:1,chance:20},		// 2
							cotton: 				{min:1,max:1,chance:20},		// 2
							wheat: 					{min:1,max:1,chance:45},		// 4
							tomato: 				{min:1,max:1,chance:20},		// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	cotton_farmer:{
		name: 			'cotton farmer',
		value: 			1640,
		type: 			'farmer',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	1,
		image: 			'arabic-1615262_640.jpg',
		abilities: 		['attack','minor_heal','raise_alarm'],
		rarity: 		7,
		loot_items:		{
							cotton: 				{min:1,max:3,chance:50},		// 10
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	lumberjack:{
		name: 			'lumberjack',
		value: 			960,
		type: 			'lumberjack',
		vulnerable:  	['human','humanoid'],
		strength: 		12,
		intellect: 		5,
		speed: 			9,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'lumberjack-199694_640.jpg',
		abilities: 		['chop','toughen_up','swipe'],
		rarity: 		12,
		loot_items:		{
							timber: 				{min:1,max:1,chance:60}, 	// 6
							ruined_fur: 			{min:1,max:1,chance:10},	// 0.5
							cloth: 					{min:1,max:1,chance:2},		// 1
							coins: 		 			{min:2,max:7,chance:40}, 	// 1.8
							fur: 					{min:1,max:1,chance:7} 		// 0.7
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							handaxe: 				{min:1,max:1,chance:5},
							wooden_shield: 			{min:1,max:1,chance:5},
							wooden_ring: 			{min:1,max:1,chance:5},

							carpenters_toolbox: 	{min:1,max:1,chance:25},

							plank: 					{min:1,max:1,chance:25},
							charcoal: 				{min:1,max:1,chance:25},
						}
	},
	miner:{
		name: 			'miner',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		5,
		speed: 			8,
		defense: 		13,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggor: 			25,
		aggro_factor: 	2,
		image: 			'miner-1903636_640.jpg',
		abilities: 		['smash','toughen_up','raise_alarm'],
		rarity: 		1,
		loot_items:		{
							stone: 				{min:1,max:1,chance:50}, 		// 5
							iron_ore: 			{min:1,max:1,chance:15},		// 1.5
							salt: 				{min:1,max:3,chance:12.5},		// 2.5
							sand: 				{min:1,max:1,chance:20},		// 1
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{
							iron: 							{min:1,max:1,chance:25},
						}	
	},
	peasant:{
		name: 			'peasant',
		value: 			400,
		type: 			'farmer',
		vulnerable:  	['human','humanoid'],
		strength: 		8,
		intellect: 		8,
		speed: 			8,
		defense: 		8,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'peasant-482727_640.jpg',
		abilities: 		['attack','hide'],
		rarity: 		1,
		loot_items:		{
							apple: 					{min:1,max:1,chance:25}, 		// 2.5
							coins: 					{min:5,max:15,chance:50}, 		// 5
							wool: 					{min:1,max:1,chance:25}			// 2.5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							club: 							{min:1,max:1,chance:25},
						}	
	},
	blacksmith:{
		name: 			'blacksmith',
		type: 			'blacksmith',
		vulnerable:  	['human','humanoid'],
		strength: 		12,
		intellect: 		10,
		speed: 			10,
		defense: 		12,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'blacksmith-2385628_640.jpg',
		abilities: 		['attack','toughen_up','spray_fire'],
		rarity: 		1,
		loot_items:		{
							iron_ore: 					{min:1,max:1,chance:55}, 	// 5.5
							charcoal: 					{min:1,max:3,chance:20},	// 2
							leather: 					{min:1,max:1,chance:25}		// 2.5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							iron: 							{min:1,max:1,chance:50},
							iron_from_scrap: 				{min:1,max:1,chance:50},

							smiths_hammer: 					{min:1,max:1,chance:10},
							reinforced_club: 				{min:1,max:1,chance:10},
							mace: 							{min:1,max:1,chance:10},

							chain_boots: 					{min:1,max:1,chance:10},
							chain_coif: 					{min:1,max:1,chance:10},
							chain_gloves: 					{min:1,max:1,chance:10},
							chain_vest: 					{min:1,max:1,chance:10},
						}	
	},

	

	tree:{
		name: 			'tree',
		type: 			'tree',
		vulnerable:  	['tree','wood','fire','structure'],
		immune: 		['mental','bleed','movement','disease','poison','healing'],
		strength: 		10,
		intellect: 		2,
		speed: 			10,
		defense: 		20,
		resistance: 	10,
		shield: 		0,
		max_hp: 		30,
		aggro_factor: 	2,
		image: 			'nature-3205961_640.jpg',
		abilities: 		[],
		rarity: 		1,
		xp_factor: 		0,
		loot_items:		{
							timber: 		{min:1,max:1,chance:100},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	hunter:{
		name: 			'hunter',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'hunter-1503082_640.jpg',
		abilities: 		['hunt','trap','take_aim'],
		rarity: 		10,
		loot_items:		{
							bone: 			{min:1,max:1,chance:5}, 	// 0.5
							fur: 			{min:1,max:1,chance:5}, 	// 0.5
							coins: 			{min:1,max:5,chance:50}, 	// 3
							pork: 			{min:2,max:3,chance:10}, 	// 2.5
							leather: 		{min:1,max:1,chance:40} 	// 4
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							leather_bag: 				{min:1,max:1,chance:25},
							bloody_knife: 				{min:1,max:1,chance:25},
							sausage: 					{min:1,max:1,chance:25},
						}
	},

	earth_elemental:{
		name: 			'earth elemental',
		type: 			'earth_elemental',
		vulnerable:  	['earth','elemental'],
		immune: 		['bleed','disease','poison'],
		strength: 		10,
		intellect: 		4,
		speed: 			10,
		defense: 		15,
		resistance: 	20,
		shield: 		0,
		max_hp: 		50,
		aggro_factor: 	8,
		image: 			'statue-1979469_640.jpg',
		abilities: 		['smash','landslide','block'],
		rarity: 		10,
		loot_items:		{
							stone: 				{min:1,max:1,chance:90}, 		// 9
							sand: 				{min:1,max:1,chance:20},		// 1
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{
							maul: 				{min:1,max:1,chance:100},
						}
	},
	earth_people:{
		name: 			'earth people',
		type: 			'earth_people',
		vulnerable:  	['earth','elemental'],
		immune: 		['bleed'],
		strength: 		8,
		intellect: 		12,
		speed: 			8,
		defense: 		12,
		resistance: 	12,
		shield: 		0,
		max_hp: 		25,
		image: 			'fantasy-2964231_640.jpg',
		abilities: 		['attack','seed_of_life','mirror'],
		rarity: 		10,
		loot_items:		{
							stone: 				{min:1,max:1,chance:40}, 		// 4
							herbs: 				{min:1,max:1,chance:25}, 		// 5
							sand: 				{min:1,max:1,chance:20},		// 1
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},

	slime:{
		name: 			'slime',
		type: 			'',
		vulnerable:  	[],
		strength: 		5,
		intellect: 		8,
		speed: 			10,
		defense: 		12,
		resistance: 	12,
		shield: 		0,
		max_hp: 		35,
		image: 			'organic-1002892_640.jpg',
		abilities: 		['corrupt','split','regenerate'],
		rarity: 		16,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},

	/// ANIMALS (WOODS) ///////////////////////////////////////////////////////////////////////////////////////
	wandering_druid:{
		name: 			'wandering druid',
		type: 			'wandering_druid',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		8,
		intellect: 		11,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	0.5,
		image: 			'fantasy-1481583_640.jpg',
		abilities: 		['hunt','revitalize','command_beast'],
		rarity: 		10,
		loot_items:		{
							rune: 			{min:1,max:1,chance:10}, 	// 2
							herbs: 			{min:1,max:1,chance:30},  	// 6
							leather: 		{min:1,max:1,chance:20}, 	// 2
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						},
		loot_recipes: 	{
						}
	},
	druid:{
		name: 			'druid',
		type: 			'druid',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		8,
		intellect: 		11,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	0.5,
		image: 			'druid-1950104_640.jpg',
		abilities: 		['soothe','revitalize','revive'],
		rarity: 		10,
		loot_items:		{
							rune: 			{min:1,max:1,chance:10}, 	// 2
							herbs: 			{min:1,max:1,chance:30},  	// 6
							leather: 		{min:1,max:1,chance:20}, 	// 2
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						},
		loot_recipes: 	{
						}
	},
	squirrel:{
		name: 			'squirrel',
		value: 			450,
		type: 			'squirrel',
		vulnerable:  	['animal'],
		xp_factor: 		0.25,
		dodge: 			50,
		strength: 		2,
		intellect: 		2,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		aggro_factor: 	1,
		image: 			'squirrel-619968_640.jpg',
		abilities: 		['hide','nut_barrage'],
		rarity: 		1,
		loot_items:		{
							fur: 			{min:1,max:1,chance:5}, 	// 0.5
							squirrel_tail: 	{min:1,max:1,chance:20},	// 1
							ruined_fur: 	{min:1,max:1,chance:10}, 	// 0.5
							acorn: 			{min:1,max:9,chance:50} 	// 2.5
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	boar:{
		name: 			'boar',
		type: 			'boar',
		vulnerable:  	['animal'],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'wild-boar-202677_640.jpg',
		abilities: 		['attack','enrage','charge'],
		rarity: 		10,
		loot_items:		{
							ruined_fur: 				{min:1,max:1,chance:20}, // 1
							leather: 					{min:1,max:1,chance:20}, // 2
							pork: 						{min:1,max:1,chance:50}, // 5
							truffle: 					{min:1,max:1,chance:2}  // 2
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	/// ANIMALS (MARSH) ///////////////////////////////////////////////////////////////////////////////////////
	crocodile:{
		name: 			'crocodile',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		12,
		intellect: 		4,
		speed: 			8,
		defense: 		12,
		resistance: 	8,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'biscayne-national-park-80457_640.jpg',
		abilities: 		['attack','rush','rend'],
		rarity: 		14,
		loot_items:		{
							fish: 					{min:1,max:1,chance:25},
							crocodile_young: 		{min:1,max:1,chance:10},
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	boa_constrictor:{
		name: 			'boa constrictor',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		12,
		intellect: 		4,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		30,
		aggro_factor: 	2,
		image: 			'snake-3972911_640.jpg',
		abilities: 		['attack','constrict','move'],
		rarity: 		14,
		loot_items:		{},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	
	frog:{
		name: 			'frog',
		type: 			'frog',
		vulnerable:  	['animal','frog','fire'],
		immune: 		['ice','water'],
		dodge: 			10,
		reflect: 		50,
		strength: 		5,
		intellect: 		8,
		speed: 			10,
		defense: 		12,
		resistance: 	12,
		shield: 		0,
		max_hp: 		25,
		image: 			'frog-1539992_640.jpg',
		abilities: 		['attack','regenerate','siphon_strength'],
		rarity: 		16,
		loot_items:		{
							fish: 			{min:1,max:3,chance:25},
							water: 			{min:1,max:9,chance:50}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	/// BANDITS ///////////////////////////////////////////////////////////////////////////////////////
	bandit:{
		name: 			'bandit',
		type: 			'bandit',
		vulnerable:  	['human','humanoid'],
		dodge: 			25,
		strength: 		8,
		intellect: 		8,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'young-people-524513_640.jpg',
		abilities: 		['attack','take_aim','sinister_strike'],
		rarity: 		12,
		loot_items:		{
							leather: 					{min:1,max:1,chance:45}, 	// 4.5
							coins: 		 				{min:1,max:6.6,chance:50}, 	// 3.8
							scrap_metal: 				{min:1,max:3,chance:5},		// 0.1
							yarn: 						{min:1,max:3,chance:40},	// 1.6

							lux_scarf: 					{min:1,max:1,chance:25},	// quest
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	bandit_mage:{
		name: 			'bandit mage',
		type: 			'bandit_mage',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'portrait-3141651_640.jpg',
		abilities: 		['firebolt','freeze','curse'],
		rarity: 		12,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},	// 2.5
							coins: 		 				{min:1,max:6,chance:50},	// 3.5
							yarn: 						{min:1,max:3,chance:25},	// 1
							cloth: 						{min:1,max:1,chance:2},		// 1
							charcoal: 					{min:1,max:1,chance:20},	// 1
							rune: 						{min:1,max:1,chance:5}		// 1
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	bandit_healer:{
		name: 			'bandit healer',
		type: 			'bandit_healer',
		vulnerable:  	['human','humanoid'],
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	8,
		shield: 		0,
		max_hp: 		20,
		aggro_factor: 	0.5,
		image: 			'model-2301623_640.jpg',
		abilities: 		['attack','mayor_heal','cleanse'],
		rarity: 		12,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},	// 2.5
							coins: 		 				{min:1,max:6,chance:50},	// 3.5
							yarn: 						{min:1,max:3,chance:25},	// 1
							cloth: 						{min:1,max:1,chance:1},		// 1
							herbs: 						{min:1,max:1,chance:10}		// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	bandit_scout:{
		name: 			'bandit scout',
		type: 			'bandit_scout',
		vulnerable:  	['human','humanoid'],
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'portrait-3154340_640.jpg',
		abilities: 		['quick_strike','expose','hide'],
		rarity: 		12,
		loot_items:		{
							leather: 					{min:1,max:1,chance:45}, 	// 4.5
							coins: 		 				{min:1,max:6.6,chance:50}, 	// 3.8
							scrap_metal: 				{min:1,max:3,chance:5},		// 0.1
							yarn: 						{min:1,max:3,chance:40},	// 1.6

							lux_scarf: 					{min:1,max:1,chance:25},	// quest
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{}
	},

	/// COWS ///////////////////////////////////////////////////////////////////////////////////////

	bull:{
		name: 			'bull',
		value: 			1250,
		type: 			'cow',
		vulnerable:  	['animal'],
		strength: 		10,
		intellect: 		2,
		speed: 			10,
		defense: 		5,
		resistance: 	5,
		shield: 		0,
		max_hp: 		50,
		aggro: 			10,
		aggro_factor: 	2,
		image: 			'bull-1575005_640.jpg',
		abilities: 		['attack','charge','enrage'],
		rarity: 		15,
		loot_items:		{
							leather: 					{min:1,max:3,chance:25},	// 5
							beef: 						{min:1,max:1,chance:50},	// 5
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{
							steak: 						{min:1,max:1,chance:25},
						}
	},
	cow:{
		name: 			'cow',
		value: 			750,
		type: 			'cow',
		vulnerable:  	['animal','herd'],
		strength: 		8,
		intellect: 		2,
		speed: 			10,
		defense: 		12,
		resistance: 	12,
		shield: 		0,
		max_hp: 		25,
		image: 			'cow-3150607_640.jpg',
		abilities: 		['attack','stampede','huddle'],
		rarity: 		15,
		loot_items:		{
							leather: 					{min:1,max:3,chance:12.5},	// 2.5
							beef: 						{min:1,max:1,chance:25},	// 2.5
							milk: 						{min:1,max:1,chance:50},	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							cheese: 					{min:1,max:1,chance:25},
							steak: 						{min:1,max:1,chance:25},
						}
	},
	calf:{
		name: 			'calf',
		value: 			250,
		type: 			'cow',
		vulnerable:  	['animal','herd'],
		strength: 		4,
		intellect: 		2,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		10,
		image: 			'calf-829430_640.jpg',
		abilities: 		['attack','hide'],
		rarity: 		15,
		loot_items:		{
							rennet: 					{min:1,max:1,chance:25},	// 2.5
							veal: 						{min:1,max:1,chance:25},	// 2.5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							cheese: 					{min:1,max:1,chance:25},
						}
	},

	cowboy:{
		name: 			'cowboy',
		type: 			'cowboy',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'cowboy-746992_640.jpg',
		abilities: 		['burst_fire','ensnare','command_beast'],
		rarity: 		15,
		loot_items:		{
							leather: 					{min:1,max:3,chance:12.5}, 	// 2.5
							wool: 						{min:1,max:1,chance:75}, 	// 7.5
						},
		loot_gear: 		{},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{
							butcher_calf: 				{min:1,max:1,chance:5},
							calf: 						{min:1,max:1,chance:5},
							cow: 						{min:1,max:1,chance:5},
							bull: 						{min:1,max:1,chance:5},
						}
	},

	shepherds_dog:{
		name: 			'shepherd\'s dog',
		type: 			'dog',
		vulnerable:  	['animal','dog','servent'],
		strength: 		8,
		intellect: 		8,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		21,
		image: 			'dog-1877816_640.jpg',
		abilities: 		['attack','raise_alarm','scare'],
		rarity: 		3,
		loot_items:		{
							bone: 					{min:1,max:1,chance:5}, 		// 0.5
							fur: 					{min:1,max:1,chance:50} 		// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	/// UNDEAD ///////////////////////////////////////////////////////////////////////////////////////
	necromancer:{
		name: 			'necromancer',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		2,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	12,
		shield: 		0,
		max_hp: 		25,
		image: 			'druid-1950104_640.jpg',
		abilities: 		['drain_life','raise_dead','life_tap'],
		rarity: 		15,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},	// 2.5
							coins: 		 				{min:1,max:6,chance:50},	// 3.5
							yarn: 						{min:1,max:3,chance:25},	// 1
							cloth: 						{min:1,max:1,chance:2},		// 1
							bone: 						{min:1,max:1,chance:10},	// 1
							rune: 						{min:1,max:1,chance:5}		// 1
						},
		loot_gear: 		{},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	skeleton:{
		name: 			'skeleton',
		type: 			'undead',
		vulnerable:  	['undead'],
		strength: 		5,
		intellect: 		1,
		speed: 			10,
		defense: 		25,
		resistance: 	10,
		shield: 		0,
		max_hp: 		10,
		image: 			'skeleton-1522620_640.jpg',
		abilities: 		['attack','block'],
		rarity: 		1,
		loot_items:		{
							bone: 			{min:1,max:3,chance:50},
						},
		loot_gear: 		{},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	marsh_fire:{
		name: 			'marsh fire',
		type: 			'undead',
		vulnerable:  	['undead','ghost'],
		immune: 		['physical'],
		strength: 		5,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		20,
		aggro_factor: 	1,
		image: 			'girl-564460_640.jpg',
		abilities: 		['drain_life','scare'],
		rarity: 		16,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	whisp:{
		name: 			'whisp',
		type: 			'undead',
		vulnerable:  	['undead','ghost'],
		immune: 		['magical'],
		dodge: 			90,
		strength: 		1,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			10,
		max_hp: 		1,
		aggro_factor: 	1,
		image: 			'light-painting-551839_640.jpg',
		abilities: 		['attack','scare','hide'],
		rarity: 		16,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	zombie:{
		name: 			'zombie',
		type: 			'undead',
		vulnerable:  	['undead','servant','human','humanoid'],
		strength: 		10,
		intellect: 		1,
		speed: 			8,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		35,
		image: 			'zombie-367517_640.jpg',
		abilities: 		['attack','smash','regenerate'],
		rarity: 		10,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	zombie_nun:{
		name: 			'zombie nun',
		type: 			'undead',
		vulnerable:  	['undead','servant','human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			8,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		35,
		image: 			'nun-1623680_640.jpg',
		abilities: 		['attack','minor_heal','regenerate'],
		rarity: 		16,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	/// MUSHROOMS ///////////////////////////////////////////////////////////////////////////////////////
	exploshroom:{
		name: 			'exploshroom',
		type: 			'plant',
		vulnerable:  	['plant','mushroom','structure'],
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		0,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		10,
		aggro_factor: 	1,
		image: 			'fly-agaric-1722288_640.png',
		abilities: 		['explode','explode','explode'],
		rarity: 		5,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:1}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	clustershroom:{
		name: 			'clustershroom',
		type: 			'plant',
		vulnerable:  	['plant','mushroom','structure'],
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		25,
		aggro_factor: 	1,
		image: 			'mushroom-2279558_640.jpg',
		abilities: 		['grow_shroom','explode'],
		rarity: 		5,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	sporeshroom:{
		name: 			'sporeshroom',
		type: 			'plant',
		vulnerable:  	['plant','mushroom','structure'],
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'forest-2165911_640.jpg',
		abilities: 		['spore_cloud'],
		rarity: 		5,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	diskshroom:{
		name: 			'diskshroom',
		type: 			'plant',
		vulnerable:  	['plant','mushroom','structure'],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'nature-3116000_640.jpg',
		abilities: 		['attack'],
		rarity: 		5,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////// OLD UNITS //////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	soldier:{
		name: 			'soldier',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		50,
		image: 			'soldier-60707_640.jpg',
		abilities: 		['attack','minor_heal'],
		rarity: 		25,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:5},
							iron: 			{min:1,max:1,chance:5},
							coins: 			{min:1,max:10,chance:50}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	grenadier:{
		name: 			'grenadier',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'hand-grenade-60551_640.jpg',
		abilities: 		['grenade'],
		rarity: 		25,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:5},
							iron: 			{min:1,max:1,chance:5},
							coins: 			{min:1,max:10,chance:50}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	goblin:{	
		name: 			'goblin',
		type: 			'goblin',
		vulnerable:  	['goblin','humanoid'],
		strength: 		7,
		intellect: 		7,
		speed: 			15,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		16,
		image: 			'goblin-1872986_640.jpg',
		abilities: 		['quick_strike','raise_alarm','hide'],
		rarity: 		1,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:5},
							iron: 			{min:1,max:1,chance:5},
							coins: 			{min:1,max:10,chance:50}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	ogre:{
		name: 			'ogre',
		type: 			'ogre',
		vulnerable:  	['ogre','humanoid'],
		strength: 		15,
		intellect: 		2,
		speed: 			5,
		defense: 		0,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		100,
		aggro_factor: 	2,
		image: 			'ork-1537723_640.png',
		abilities: 		['smash','enrage','roar'],
		rarity: 		20,
		loot_items:		{
							timber: 		{min:1,max:1,chance:5},
							plank: 			{min:1,max:1,chance:5},
							coins: 			{min:1,max:10,chance:50},
							leather: 		{min:1,max:1,chance:10},
							alexis_ring: 	{min:1,max:1,chance:100}
						},
		loot_gear: 		{
							club: 			{min:1,max:5,chance:10,subtypes:['ogres']}
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	
	rat:{
		name: 			'rat',
		value: 			650,
		type: 			'rat',
		vulnerable:  	['animal'],
		immune: 		['disease'],
		dodge: 			50,
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		image: 			'roof-rat-961502_640.jpg',
		abilities: 		['infesting_bite','hide','bloodthirst'],
		rarity: 		1,
		loot_items:		{
							bone: 			{min:1,max:1,chance:10},
							trash: 			{min:1,max:3,chance:70}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{},
		loot_recipes: 	{
							rat: 			{min:1,max:1,chance:10},
						}
	},
	diseased_rat:{
		name: 			'diseased rat',
		type: 			'rat',
		vulnerable:  	['animal'],
		immune: 		['disease'],
		dodge: 			50,
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		image: 			'roof-rat-961502_640.jpg',
		abilities: 		['infesting_bite','hide','bloodthirst'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:25},
							wheat: 			{min:1,max:1,chance:25},
							hay: 			{min:1,max:1,chance:50},
							ruined_fur: 	{min:1,max:1,chance:50}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
							summon_rat: 	{min:1,max:1,chance:1}
						}
	},
	poison_rat:{
		name: 			'poison rat',
		type: 			'rat',
		vulnerable:  	['animal'],
		immune: 		['disease','poison'],
		dodge: 			50,
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		image: 			'rodent-3229592_640.jpg',
		abilities: 		['poisonous_bite','hide','bloodthirst'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:25},
							wheat: 			{min:1,max:1,chance:25},
							hay: 			{min:1,max:1,chance:50},
							ruined_fur: 	{min:1,max:1,chance:50}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
							summon_rat: 	{min:1,max:1,chance:1}
						}
	},
	piercing_rat:{
		name: 			'piercing rat',
		type: 			'rat',
		vulnerable:  	['animal'],
		immune: 		['disease'],
		dodge: 			50,
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		image: 			'brown-rat-2115585_640.jpg',
		abilities: 		['piercing_bite','hide','bloodthirst'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:25},
							wheat: 			{min:1,max:1,chance:25},
							hay: 			{min:1,max:1,chance:50},
							ruined_fur: 	{min:1,max:1,chance:50}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
							summon_rat: 	{min:1,max:1,chance:1}
						}
	},
	giant_rat:{
		name: 			'giant rat',
		type: 			'rat',
		vulnerable:  	['animal'],
		immune: 		['disease'],
		dodge: 			20,
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'rat-1208429_640.jpg',
		abilities: 		['infesting_bite','regenerate','bloodthirst'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:25},
							wheat: 			{min:1,max:1,chance:25},
							hay: 			{min:1,max:1,chance:50},
							ruined_fur: 	{min:1,max:1,chance:50}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	rattlesnake:{
		name: 			'rattlesnake',
		type: 			'animal',
		vulnerable:  	['animal','snake'],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'rattlesnake-653642_640.jpg',
		abilities: 		['poisonous_bite'],
		rarity: 		1,
		loot_items:		{
							ruined_fur: 	{min:1,max:1,chance:5},
							blood: 			{min:1,max:1,chance:3}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	snake_basket:{
		name: 			'snake basket',
		type: 			'structure',
		vulnerable:  	['structure'],
		strength: 		0,
		intellect: 		0,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		10,
		image: 			'wellness-1021131_640.jpg',
		abilities: 		['release_snakes'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	priest:{
		name: 			'priest',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		2,
		intellect: 		15,
		speed: 			10,
		defense: 		6,
		resistance: 	10,
		shield: 		10,
		max_hp: 		20,
		image: 			'holzfigur-505646_640.jpg',
		abilities: 		['smite','mayor_heal','shield'],
		rarity: 		10,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:50},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},

	grizzly_bear:{
		name: 			'grizzly bear',
		type: 			'animal',
		vulnerable:  	['animal','bear'],
		strength: 		13,
		intellect: 		3,
		speed: 			8,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro: 			40,
		aggro_factor: 	4,
		image: 			'bear-1469257_640.jpg',
		abilities: 		['swipe','enrage','rend'],
		rarity: 		15,
		loot_items:		{
							fish: 			{min:1,max:1,chance:10},
							fur: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	royal_guard:{
		name: 			'royal guard',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		3,
		intellect: 		3,
		speed: 			8,
		defense: 		20,
		resistance: 	10,
		shield: 		25,
		aggro: 			25,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'knight-1813084_640.jpg',
		abilities: 		['attack','protect','shield'],
		rarity: 		60,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							coins: 			{min:10,max:25,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	vampire:{
		name: 			'vampire',
		type: 			'undead',
		vulnerable:  	['undead','humanoid','human'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'woman-578820_640.jpg',
		abilities: 		['drain','piercing_bite','evade'],
		rarity: 		30,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							blood: 			{min:1,max:5,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	skeletal_dragon:{
		name: 			'skeletal dragon',
		type: 			'undead',
		vulnerable:  	['undead'],
		strength: 		20,
		intellect: 		15,
		speed: 			10,
		defense: 		25,
		resistance: 	25,
		shield: 		0,
		max_hp: 		200,
		image: 			'dragon-1957809_640.png',
		abilities: 		['attack','raise_dead','drain'],
		rarity: 		90,
		loot_items:		{
							bone: 			{min:1,max:5,chance:75}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	bat:{
		name: 			'bat',
		type: 			'animal',
		vulnerable:  	['animal','magical_damage'],
		strength: 		8,
		intellect: 		5,
		speed: 			20,
		defense: 		15,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'bat-967793_640.jpg',
		abilities: 		['drain'],
		rarity: 		14,
		loot_items:		{
							blood: 			{min:1,max:1,chance:25},
							fur: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{
							cloak: 		{min:1,max:1,chance:10,subtypes:['of_the_bat']}
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	rat_master:{
		name: 			'rat master',
		type: 			'rat_master',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'beautiful-1867267_640.jpg',
		abilities: 		['attack','summon_rat','revitalize','command_beast'],
		rarity: 		50,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:10},
							wool: 			{min:1,max:3,chance:22},
							coins: 			{min:8,max:12,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
							dagger: 	{min:1,max:1,chance:25,subtypes:['rats']},
							fur_coat: 	{min:1,max:1,chance:25,subtypes:['rats']},
							hiking_hat: {min:1,max:1,chance:25,subtypes:['rats']},
							sword: 		{min:1,max:1,chance:25,subtypes:['rats']},
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	knight:{
		name: 			'knight',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		8,
		intellect: 		8,
		speed: 			8,
		defense: 		25,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		25,
		aggro_factor: 	4,
		image: 			'metal-1283910_640.jpg',
		abilities: 		['smash','block','taunt'],
		rarity: 		75,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							coins: 			{min:1,max:5,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	
	witch:{
		name: 			'witch',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		5,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'witch-155291_640.png',
		abilities: 		['curse','firebolt'],
		rarity: 		20,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							coins: 			{min:1,max:5,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	priestess:{
		name: 			'priestess',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		5,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		21,
		image: 			'girl-1967067_640.png',
		abilities: 		['minor_heal','holy_nova','shield'],
		rarity: 		20,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							coins: 			{min:1,max:5,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	sheep:{
		name: 			'sheep',
		type: 			'sheep',
		vulnerable:  	['animal','sheep','herd','servent'],
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		12,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'sheep-1585266_640.jpg',
		abilities: 		['attack','huddle','hide'],
		loot_items:		{
							wool: 	{min:1,max:1,chance:75},
							beef: 	{min:1,max:1,chance:25}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	shepherd:{
		name: 			'shepherd',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'sheep-690198_640-1.jpg',
		abilities: 		['attack','command_beast','minor_heal'],
		loot_items:		{
							wool: 		{min:1,max:1,chance:50},
							leather: 	{min:1,max:1,chance:50}
						},
		loot_gear: 		{
							woolen_vest: {min:1,max:1,chance:5,subtypes:['shepherd']}
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fire_eater:{
		name: 			'fire eater',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		5,
		intellect: 		10,
		speed: 			10,
		defense: 		5,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'fire-eaters-634585_640.jpg',
		abilities: 		['spray_fire','ignite','firestorm'],
		rarity: 		10,
		loot_items:		{
							charcoal: 		{min:1,max:1,chance:25},
							cloth: 			{min:1,max:1,chance:15},
							coins: 			{min:1,max:5,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fortress:{
		name: 			'fortress',
		type: 			'structure',
		vulnerable:  	['structure','stone'],
		strength: 		5,
		intellect: 		1,
		speed: 			10,
		defense: 		15,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		150,
		aggro_factor: 	2,
		image: 			'blue-city-1845779_640.jpg',
		abilities: 		['retaliate','protect'],
		rarity: 		25,
		loot_items:		{
							stone: 			{min:1,max:3,chance:25}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	elvish_archer:{
		name: 			'elf archer',
		type: 			'elf',
		vulnerable:  	['elf','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'fantasy-146463_640.png',
		abilities: 		['take_aim','snipe','victory_rush'],
		rarity: 		12,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							coins: 			{min:1,max:5,chance:10},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	archer:{
		name: 			'archer',
		value: 			750,
		type: 			'archer',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'fantasy-2926695_640.png',
		abilities: 		['take_aim','piercing_shot','victory_rush'],
		rarity: 		12,
		loot_items:		{
							timber: 		{min:1,max:1,chance:25},
							leather: 		{min:1,max:1,chance:25},
							coins: 		 	{min:5,max:15,chance:25},
							wool: 			{min:1,max:1,chance:25}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	bandit_archer:{
		name: 			'bandit archer',
		value: 			750,
		type: 			'bandit',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'archer-1153570_640.jpg',
		abilities: 		['take_aim','piercing_shot','victory_rush'],
		rarity: 		12,
		loot_items:		{
							timber: 		{min:1,max:1,chance:25},
							leather: 		{min:1,max:1,chance:25},
							coins: 		 	{min:5,max:15,chance:25},
							wool: 			{min:1,max:1,chance:25}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	fisherman:{
		name: 			'fisherman',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		7,
		intellect: 		7,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		25,
		image: 			'man-415552_640.jpg',
		abilities: 		['attack','bolster','ensnare'],
		rarity: 		1,
		loot_items:		{
							wool: 			{min:1,max:1,chance:25},
							fish: 			{min:1,max:1,chance:50},
							water: 			{min:1,max:9,chance:50}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	paladin:{
		name: 			'paladin',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			8,
		defense: 		14,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'holy-1130453_640.jpg',
		abilities: 		['smite','bless','cleanse'],
		rarity: 		201,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	blademaster:{
		name: 			'blademaster',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		dodge: 			15,
		strength: 		10,
		intellect: 		8,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		aggro: 			10,
		aggro_factor: 	1,
		image: 			'woman-2888812_640.png',
		abilities: 		['attack','sinister_strike','victory_rush'],
		rarity: 		50,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	assassin:{
		name: 			'assassin',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro: 			10,
		image: 			'ninja-2007576_640.jpg',
		abilities: 		['assassinate','hide','poison'],
		rarity: 		50,
		aggro_factor: 	5,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:15},
							worn_fabric: 	{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	catapult:{
		name: 			'catapult',
		type: 			'vehicle',
		vulnerable:  	['vehicle','wood'],
		strength: 		20,
		intellect: 		1,
		speed: 			5,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'catapult-33692_640.png',
		abilities: 		['siege'],
		rarity: 		30,
		loot_items:		{
							plank: 			{min:1,max:1,chance:5},
							nails: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	troll:{
		name: 			'troll',
		type: 			'troll',
		vulnerable:  	['troll','humanoid'],
		strength: 		15,
		intellect: 		2,
		speed: 			8,
		defense: 		5,
		resistance: 	15,
		shield: 		0,
		aggro: 			25,
		max_hp: 		50,
		aggro_factor: 	2,
		image: 			'creature-1969074_640.png',
		abilities: 		['smash','enrage','regenerate','roar'],
		rarity: 		20,
		loot_items:		{
							bone: 			{min:1,max:1,chance:5},
							fur: 			{min:1,max:1,chance:5},
							stone: 			{min:1,max:1,chance:5},
							beef: 			{min:2,max:3,chance:5},
							ruined_fur: 	{min:1,max:1,chance:5},
							worn_fabric: 	{min:1,max:3,chance:5},
							leather: 		{min:1,max:1,chance:5},
							fish: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	
	combat_monk:{
		name: 			'combat monk',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'man-1602633_640.png',
		abilities: 		['holy_fists'],
		rarity: 		10,
		loot_items:		{
							cloth: 			{min:2,max:3,chance:5},
							worn_fabric: 	{min:1,max:3,chance:5}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	eagle:{
		name: 			'eagle',
		type: 			'animal',
		vulnerable:  	['animal','eagle'],
		strength: 		10,
		intellect: 		5,
		speed: 			13,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'eagle-2044134_640.jpg',
		abilities: 		['hunt','smash','rend'],
		rarity: 		30,
		loot_items:		{
							feather: 					{min:1,max:3,chance:25},
							beef: 						{min:1,max:3,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	barbarian:{
		name: 			'barbarian',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		12,
		intellect: 		5,
		speed: 			9,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'viking-2009503_640.png',
		abilities: 		['attack','frenzy','toughen_up'],
		rarity: 		28,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	mercenary:{
		name: 			'mercenary',
		type: 			'human',
		value: 			1500,
		vulnerable:  	['human','humanoid'],
		dodge: 			10,
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		aggro: 			25,
		max_hp: 		25,
		image: 			'woman-3291814_640.jpg',
		abilities: 		['twin_strike','frenzy','parry'],
		rarity: 		28,
		loot_items:		{
							coins: 						{min:10,max:70,chance:25}, // 10
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	tracer:{
		name: 			'tracer',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		dodge: 			30,
		strength: 		8,
		intellect: 		8,
		speed: 			15,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'fantasy-1971917_640.jpg',
		abilities: 		['burst_fire','expose','take_aim'],
		rarity: 		25,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fire_mage:{
		name: 			'fire mage',
		type: 			'human',
		vulnerable:  	['caster','water','human','humanoid'],
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'hot-3124662_640.jpg',
		abilities: 		['ignite','incinerate','firestorm'],
		rarity: 		18,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							charcoal: 		 			{min:3,max:7,chance:10},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{			
						},
		loot_units: 	{
						},
		loot_spells: 	{
							firebolt: 		{min:1,max:1,chance:100}
						}
	},
	
	snake_witch:{
		name: 			'snake witch',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	0.5,
		image: 			'medusa-2920851_640.jpg',
		abilities: 		['curse','petrify','release_snakes'],
		rarity: 		18,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:50},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{			
						},
		loot_units: 	{
						},
		loot_spells: 	{
						}
	},
	illusionist:{
		name: 			'illusionist',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		reflect: 		10,
		strength: 		8,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	12,
		shield: 		0,
		max_hp: 		25,
		image: 			'woman-2217220_640.jpg',
		abilities: 		['magic_bolt','mirror_image','dominate'],
		rarity: 		18,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:25},
							herbs: 						{min:1,max:1,chance:25},
						},
		loot_gear: 		{			
						},
		loot_units: 	{
						},
		loot_spells: 	{
						}
	},
	illusion:{
		name: 			'illusionist',
		type: 			'human',
		vulnerable:  	['human','humanoid','illusion'],
		xp_factor: 		0,
		reflect: 		25,
		leave_corpse: 	false,
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		1,
		resistance: 	1,
		shield: 		0,
		max_hp: 		1,
		aggro: 			1000,
		image: 			'woman-2217220_640.jpg',
		abilities: 		['magic_bolt','terrible_curse','arcane_explode'],
		rarity: 		18,
		loot_items:		{
						},
		loot_gear: 		{			
						},
		loot_units: 	{
						},
		loot_spells: 	{
						}
	},
	vulture:{
		name: 			'vulture',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		12,
		intellect: 		8,
		speed: 			10,
		defense: 		9,
		resistance: 	9,
		shield: 		0,
		max_hp: 		25,
		image: 			'vulture-2046272_640.jpg',
		abilities: 		['smash','eat_corpse','take_aim'],
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	troubadour:{
		name: 			'troubadour',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'woman-1953743_640.jpg',
		abilities: 		['raise_alarm','motivate','inspire'],
		rarity: 		15,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	hay_bale:{
		name: 			'hay bale',
		type: 			'hay bale',
		vulnerable:  	['fire','structure'],
		immune: 		['mental','bleed','movement','disease','poison','healing'],
		leave_corpse: 	false,
		strength: 		2,
		intellect: 		2,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		50,
		aggro_factor: 	0.5,
		image: 			'bale-3026360_640.jpg',
		abilities: 		['give_cover'],
		rarity: 		1,
		loot_items:		{
							hay: 		{min:1,max:1,chance:100},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	wall:{
		name: 			'wall',
		type: 			'wall',
		vulnerable:  	['structure'],
		immune: 		['mental','bleed','movement','disease','poison','healing','fire'],
		leave_corpse: 	false,
		strength: 		2,
		intellect: 		2,
		speed: 			10,
		defense: 		14,
		resistance: 	14,
		shield: 		0,
		max_hp: 		50,
		aggro_factor: 	0.5,
		image: 			'textiles-3322436_640.jpg',
		abilities: 		['give_cover'],
		rarity: 		1,
		loot_items:		{
							stone: 		{min:1,max:1,chance:100},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	squirrel_tree:{
		name: 			'squirrel tree',
		type: 			'squirrel_tree',
		vulnerable:  	['tree','wood','fire','structure'],
		immune: 		['mental','bleed','movement','disease','poison','healing'],
		strength: 		2,
		intellect: 		2,
		speed: 			10,
		defense: 		20,
		resistance: 	10,
		shield: 		0,
		max_hp: 		50,
		aggro_factor: 	0.1,
		image: 			'tree-1563358_640.jpg',
		abilities: 		['nut_barrage','summon_squirrel'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:3,chance:25},
							acorn: 			{min:10,max:30,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	lumberon:{
		name: 			'lumberon',
		type: 			'human',
		vulnerable:  	[],
		strength: 		12,
		intellect: 		5,
		speed: 			9,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'people-3060107_640.jpg',
		abilities: 		['chop','motivate','command'],
		rarity: 		12,
		loot_items:		{
							timber: 		{min:1,max:5,chance:50},
							ruined_fur: 	{min:1,max:1,chance:10},
							cloth: 			{min:1,max:1,chance:10},
							coins: 		 	{min:5,max:10,chance:40},
							worn_fabric: 	{min:1,max:2,chance:25}
						},
		loot_gear: 		{
							leather_boots: 		{min:1,max:1,chance:5,subtypes:['of_the_woods']},
							lumberjacks_axe: 	{min:1,max:1,chance:5,subtypes:['of_the_woods']}
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	drunkard:{
		name: 			'drunkard',
		type: 			'drunkard',
		vulnerable:  	['human','humanoid'],
		strength: 		12,
		intellect: 		2,
		speed: 			10,
		defense: 		8,
		resistance: 	8,
		shield: 		0,
		max_hp: 		25,
		image: 			'drunk-148530_640.png',
		abilities: 		['smash','throw_bottle','drunken_haze'],
		rarity: 		12,
		loot_items:		{
							bottle: 		{min:1,max:1,chance:25},
							coins: 		 	{min:5,max:15,chance:25},
							wool: 			{min:1,max:3,chance:12.5}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	waitress:{
		name: 			'waitress',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		6,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'server-33895_640.png',
		abilities: 		['attack','soothe','revitalize'],
		rarity: 		12,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:5},
							coins: 		 	{min:5,max:15,chance:25},
							wool: 			{min:1,max:1,chance:15},
							bottle: 		{min:1,max:1,chance:10},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	innkeeper:{
		name: 			'innkeeper',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		strength: 		8,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'man-1596087_640.jpg',
		abilities: 		['attack','give_a_round','motivate'],
		rarity: 		12,
		loot_items:		{
							cloth: 			{min:1,max:1,chance:5},
							coins: 		 	{min:5,max:15,chance:25},
							wool: 			{min:1,max:1,chance:15},
							bottle: 		{min:1,max:1,chance:10},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	guard:{
		name: 			'guard',
		type: 			'guard',
		vulnerable:  	['human','humanoid'],
		strength: 		7,
		intellect: 		7,
		speed: 			10,
		defense: 		12,
		resistance: 	12,
		shield: 		0,
		max_hp: 		30,
		aggro_factor: 	4,
		image: 			'ancient-22212_640.jpg',
		abilities: 		['attack','block','raise_alarm'],
		loot_items:		{
							iron: 				{min:1,max:1,chance:25},
							coins: 		 		{min:1,max:1,chance:25},
							wool: 				{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{
						}
	},
	guard_captain:{
		name: 			'guard captain',
		type: 			'guard',
		vulnerable:  	['human','humanoid'],
		strength: 		7,
		intellect: 		7,
		speed: 			10,
		defense: 		12,
		resistance: 	12,
		shield: 		0,
		max_hp: 		30,
		image: 			'man-1776936_640.png',
		abilities: 		['attack','command','protect'],
		rarity: 		12,
		loot_items:		{
							iron: 				{min:1,max:1,chance:25},
							coins: 		 		{min:1,max:1,chance:25},
							wool: 				{min:1,max:1,chance:10}
						},
		loot_gear: 		{
							leather_boots: 		{min:1,max:1,chance:1,subtypes:['guards']},
							wooden_shield: 		{min:1,max:1,chance:1,subtypes:['guards']},
							sword: 		 		{min:1,max:1,chance:1,subtypes:['guards']}
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	
	
	crazed_farmer:{
		name: 			'crazed farmer',
		type: 			'farmer',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		8,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'man-70442_640.jpg',
		abilities: 		['smash','minor_heal','enrage'],
		rarity: 		7,
		loot_items:		{
							flax: 					{min:1,max:1,chance:20},		// 2
							cotton: 				{min:1,max:1,chance:20},		// 2
							wheat: 					{min:1,max:1,chance:45},		// 4
							tomato: 				{min:1,max:1,chance:20},		// 2
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	farmhouse:{
		name: 			'farmhouse',
		type: 			'structure',
		vulnerable:  	['structure','wood'],
		immune: 		['mental','bleed','movement','disease','poison'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		50,
		image: 			'farmhouse-768177_640.jpg',
		abilities: 		['give_cover','summon_farmer'],
		rarity: 		15,
		loot_items:		{
							timber: 					{min:1,max:3,chance:50},		// 10
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	
	merchant:{
		name: 			'merchant',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		5,
		intellect: 		12,
		speed: 			10,
		defense: 		8,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'bazaar-1853361_640.jpg',
		abilities: 		['attack','expose','corrupt'],
		rarity: 		10,
		loot_items:		{
							coins: 						{min:10,max:70,chance:25}, // 10
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	bandit_commander:{
		name: 			'bandit commander',
		type: 			'bandit_commander',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'people-3149372_640.jpg',
		abilities: 		['attack','command','prey_on_the_weak'],
		rarity: 		12,
		loot_items:		{
							leather: 					{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:50},
							scrap_metal: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{
/*							dagger: 					{min:1,max:1,chance:10,subtypes:['bandits']},
							hunters_hat: 				{min:1,max:1,chance:10,subtypes:['bandits']},
							fur_coat: 					{min:1,max:1,chance:10,subtypes:['bandits']},
							leather_boots: 				{min:1,max:1,chance:10,subtypes:['bandits']},
*/						},
		loot_units: 	{
						},
		loot_spells:	{
							focus: 						{min:1,max:1,chance:100}
						},
		loot_recipes: 	{
							leather_boots: 				{min:1,max:1,chance:10},
							leather_gloves: 			{min:1,max:1,chance:10},
							leather_hood: 				{min:1,max:1,chance:10},
							leather_tunic: 				{min:1,max:1,chance:10},
							leather_sabatons: 			{min:1,max:1,chance:100}
						}
	},
	
	turtle:{
		name: 			'turtle',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		10,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'turtle-863336_640.jpg',
		abilities: 		['attack','dive','hamstring'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	caterpillar:{
		name: 			'caterpillar',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		1,
		intellect: 		1,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'caterpillar-200972_640.jpg',
		abilities: 		['attack','coccoon'],
		rarity: 		20,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	chrysalis:{
		name: 			'chrysalis',
		type: 			'structure',
		vulnerable:  	['structure'],
		strength: 		0,
		intellect: 		0,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		50,
		max_hp: 		15,
		image: 			'chrysalis-1742202_640.jpg',
		abilities: 		['hatch'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	butterfly:{
		name: 			'butterfly',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		10,
		intellect: 		20,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		image: 			'butterfly-1701685_640.jpg',
		abilities: 		['revitalize','bless'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fox:{
		name: 			'fox',
		type: 			'animal',
		vulnerable:  	['animal','fox'],
		dodge: 			10,
		strength: 		8,
		intellect: 		3,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'fox-275958_640.jpg',
		abilities: 		['attack','hamstring','rush'],
		rarity: 		6,
		loot_items:		{
							leather: 		{min:1,max:1,chance:25},
							fur: 			{min:1,max:1,chance:5},
							fox_ear: 		{min:1,max:2,chance:50},
							ruined_fur: 	{min:1,max:3,chance:20},
							beef: 			{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	fox_alfa:{
		name: 			'fox alfa',
		type: 			'animal',
		vulnerable:  	['animal','fox'],
		strength: 		8,
		intellect: 		3,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		image: 			'fox-1883658_640.jpg',
		abilities: 		['attack','hamstring'],
		rarity: 		6,
		loot_items:		{
							timber: 		{min:1,max:1,chance:5},
							leather: 		{min:1,max:1,chance:25},
							fur: 			{min:1,max:1,chance:5},
							fox_ear: 		{min:1,max:2,chance:100},
							ruined_fur: 	{min:1,max:3,chance:20}
						},
		loot_gear: 		{
							leather_boots: 	{min:4,max:4,chance:100,subtypes:['flexible','of_the_fox']}
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	carnivorous_plant:{
		name: 			'carnivorous plant',
		type: 			'plant',
		vulnerable:  	['plant'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'carnivorous-plant-217187_640.jpg',
		abilities: 		['leeching_trap'],
		rarity: 		10,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	giant_spider:{
		name: 			'giant spider',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		12,
		intellect: 		6,
		speed: 			8,
		defense: 		12,
		resistance: 	5,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'golden-orb-spider-281142_640.jpg',
		abilities: 		['drain','web','ensnare'],
		rarity: 		8,
		loot_items:		{
							bone: 					{min:1,max:1,chance:1},
							beef: 					{min:1,max:1,chance:30},
							blood: 					{min:1,max:1,chance:20},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	ant:{
		name: 			'ant',
		type: 			'animal',
		vulnerable:  	['animal','insect'],
		strength: 		5,
		intellect: 		5,
		speed: 			20,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		aggro_factor: 	0.3,
		image: 			'ant-947402_640.jpg',
		abilities: 		['piercing_bite'],
		rarity: 		5,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	wiseman:{
		name: 			'wiseman',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		3,
		intellect: 		14,
		speed: 			10,
		defense: 		5,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'namaste-1935938_640.jpg',
		abilities: 		['desperate_speed','seed_of_life','revive'],
		rarity: 		30,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							coins: 		 				{min:6,max:14,chance:50},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fruity_bush:{
		name: 			'fruity bush',
		type: 			'plant',
		vulnerable:  	[],
		strength: 		0,
		intellect: 		0,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'fruit-1841219_640.jpg',
		abilities: 		['spray_fruit'],
		rarity: 		9,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	chicken_coop:{
		name: 			'chicken coop',
		type: 			'chicken_coop',
		vulnerable:  	['structure','fire'],
		immune: 		['mental','ice','bleed','poison','disease'],
		strength: 		0,
		intellect: 		0,
		speed: 			10,
		defense: 		20,
		resistance: 	20,
		shield: 		0,
		max_hp: 		50,
		image: 			'chicken-677048_640.jpg',
		abilities: 		['release_chicken','protect','give_cover'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:100}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	rooster:{
		name: 			'rooster',
		value: 			640,
		type: 			'chicken',
		vulnerable:  	['animal'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'rooster-2641203_640.jpg',
		abilities: 		['raise_alarm','peck','rend'],
		rarity: 		1,
		loot_items:		{
							feather: 		{min:1,max:1,chance:50},
							chicken_feet: 	{min:1,max:1,chance:25}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	chicken:{
		name: 			'chicken',
		value: 			390,
		type: 			'chicken',
		vulnerable:  	['animal'],
		strength: 		8,
		intellect: 		8,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	0.5,
		image: 			'hahn-1376009_640.jpg',
		abilities: 		['peck','rush','lay_chicken_egg'],
		rarity: 		1,
		loot_items:		{
							egg: 			{min:1,max:1,chance:60}, // 6
							feather: 		{min:1,max:1,chance:40}, // 4
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{},
		loot_recipes: 	{}
	},
	chicken_egg:{
		name: 			'chicken egg',
		type: 			'egg',
		vulnerable:  	['animal'],
		immune: 		['mental'],
		xp_factor: 		0,
		strength: 		0,
		intellect: 		0,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		1,
		aggro: 			1,
		image: 			'hatching-chicks-2448541_640.jpg',
		abilities: 		['hatch_chick','hatch_chick_on_death'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	chick:{
		name: 			'chick',
		value: 			140,
		type: 			'chicken',
		vulnerable:  	['animal'],
		xp_factor: 		0.25,
		strength: 		5,
		intellect: 		5,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		5,
		aggro_factor: 	0.25,
		xp_factor: 		0.2,
		image: 			'chick-3139543_640.jpg',
		abilities: 		['peck','soothe'],
		rarity: 		1,
		loot_items:		{
							feather: 		{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	mountain_goat:{
		name: 			'mountain goat',
		type: 			'animal',
		vulnerable:  	['animal'],
		strength: 		10,
		intellect: 		4,
		speed: 			11,
		defense: 		9,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'goat-940896_640.jpg',
		abilities: 		['attack','rush','run_away'],
		rarity: 		1,
		loot_items:		{
							leather: 					{min:1,max:3,chance:25},
							beef: 						{min:1,max:1,chance:50},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	

	monk:{
		name: 			'monk',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		3,
		intellect: 		12,
		speed: 			10,
		defense: 		5,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'lama-1749360_640.jpg',
		abilities: 		['attack','mayor_heal','cleanse'],
		rarity: 		5,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	lionfish:{
		name: 			'lionfish',
		type: 			'animal',
		vulnerable:  	['animal','fish'],
		strength: 		8,
		intellect: 		10,
		speed: 			10,
		defense: 		12,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'lionfish-711799_640.jpg',
		abilities: 		['attack','poisonous_skin','toughen_up'],
		rarity: 		16,
		loot_items:		{
							water: 			{min:1,max:3,chance:25},
							fish: 			{min:1,max:1,chance:10},
							poison: 		{min:1,max:1,chance:9},
							charm: 			{min:1,max:1,chance:10}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	swan:{
		name: 			'swan',
		type: 			'animal',
		vulnerable:  	['animal','bird'],
		strength: 		12,
		intellect: 		8,
		speed: 			10,
		defense: 		10,
		resistance: 	8,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	4,
		image: 			'swan-3179542_640.jpg',
		abilities: 		['smash','frenzy','counter'],
		rarity: 		16,
		loot_items:		{
							fish: 			{min:1,max:3,chance:25},
							feather: 		{min:2,max:6,chance:12.5},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	
	balance_mage:{
		name: 			'balance mage',
		type: 			'mage',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		8,
		intellect: 		10,
		speed: 			10,
		defense: 		8,
		resistance: 	8,
		shield: 		0,
		max_hp: 		30,
		aggro_factor: 	0.2,
		image: 			'human-3056693_640.jpg',
		abilities: 		['regenerate','transfer_debuff','collect_debuffs'],
		rarity: 		14,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	thief:{
		name: 			'thief',
		type: 			'criminal',
		vulnerable:  	['human','humanoid'],
		dodge: 			15,
		strength: 		8,
		intellect: 		8,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	0.2,
		image: 			'man-515518_640.jpg',
		abilities: 		['sinister_strike','hide','steal_buff'],
		rarity: 		14,
		loot_items:		{
							leather: 					{min:1,max:1,chance:45}, 	// 4.5
							coins: 		 				{min:1,max:6.6,chance:50}, 	// 3.8
							scrap_metal: 				{min:1,max:3,chance:5},		// 0.1
							yarn: 						{min:1,max:3,chance:40},	// 1.6
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	criminal:{
		name: 			'criminal',
		type: 			'criminal',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'man-852762_640.jpg',
		abilities: 		['sinister_strike','poison','rend'],
		rarity: 		14,
		loot_items:		{
							leather: 					{min:1,max:1,chance:45}, 	// 4.5
							coins: 		 				{min:1,max:6.6,chance:50}, 	// 3.8
							scrap_metal: 				{min:1,max:3,chance:5},		// 0.1
							yarn: 						{min:1,max:3,chance:40},	// 1.6
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	bounty_hunter:{
		name: 			'bounty hunter',
		type: 			'human',
		vulnerable:  	['human','humanoid'],
		dodge: 			25,
		strength: 		10,
		intellect: 		8,
		speed: 			10,
		defense: 		10,
		resistance: 	8,
		shield: 		0,
		max_hp: 		25,
		image: 			'knight-1344354_640.png',
		abilities: 		['attack','trap','rend'],
		rarity: 		14,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	warlock:{
		name: 			'warlock',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		5,
		intellect: 		10,
		speed: 			10,
		defense: 		8,
		resistance: 	15,
		shield: 		0,
		max_hp: 		25,
		image: 			'witch-1843934_640.jpg',
		abilities: 		['curse','corrupt','summon_imp'],
		rarity: 		8,
		loot_items:		{
							wool: 						{min:1,max:1,chance:25},
							charcoal: 		 			{min:3,max:7,chance:10},
							worn_fabric: 				{min:1,max:3,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	scarecrow:{
		name: 			'scarecrow',
		type: 			'scarecrow',
		vulnerable:  	['fire','wood','structure'],
		immune: 		['mental','bleed','movement','disease','poison'],
		strength: 		5,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		45,
		image: 			'scarecrow-2094567_640.jpg',
		abilities: 		['scare','call_crow','confuse'],
		rarity: 		8,
		loot_items:		{
							timber: 					{min:1,max:1,chance:50},
							hay: 		 				{min:2,max:6,chance:25},
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	crow:{
		name: 			'crow',
		type: 			'crow',
		vulnerable:  	['animal','crow'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'a-crow-3083269_640.jpg',
		abilities: 		['peck','rush','raise_alarm'],
		rarity: 		8,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fire_crow:{
		name: 			'fire crow',
		type: 			'crow',
		vulnerable:  	['caster','animal','crow','water'],
		immune: 		['fire'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'sunset-2247748_640.jpg',
		abilities: 		['peck','ignite','rush'],
		rarity: 		8,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	frost_crow:{
		name: 			'frost crow',
		type: 			'crow',
		vulnerable:  	['caster','animal','crow','water'],
		immune: 		['ice'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'common-raven-3186592_640.jpg',
		abilities: 		['peck','freeze','rush'],
		rarity: 		8,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	cursed_crow:{
		name: 			'cursed crow',
		type: 			'crow',
		vulnerable:  	['caster','animal','crow'],
		immune: 		['curse'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'raven-988218_640.jpg',
		abilities: 		['peck','corrupt','rush'],
		rarity: 		8,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	mesmerizing_crow:{
		name: 			'mesmerizing crow',
		type: 			'crow',
		vulnerable:  	['caster','animal','crow'],
		immune: 		['dominate','confuse'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'cd-cover-2993231_640.jpg',
		abilities: 		['peck','dominate','rush'],
		rarity: 		8,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	fire_imp:{
		name: 			'fire imp',
		type: 			'deamon',
		vulnerable:  	['caster','unholy','deamon','water'],
		immune: 		['fire'],
		leave_corpse: 	false,
		strength: 		5,
		intellect: 		15,
		speed: 			10,
		defense: 		5,
		resistance: 	15,
		shield: 		0,
		max_hp: 		5,
		image: 			'burner-8476_640.jpg',
		abilities: 		['firebolt'],
		rarity: 		10000,
		loot_items:		{
							charcoal: 		{min:1,max:1,chance:25}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	chest:{
		name: 			'chest',
		type: 			'wood',
		vulnerable:  	['wood'],
		immune: 		['mental','bleed'],
		strength: 		5,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'treasure-chest-619762_640.jpg',
		abilities: 		['corrupt','curse','motivate'],
		rarity: 		10,
		loot_items:		{
							timber: 	{min:1,max:1,chance:25},
							coins: 		{min:50,max:100,chance:1}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	shaman:{
		name: 			'shaman',
		type: 			'human',
		vulnerable:  	['caster','human','humanoid'],
		strength: 		7,
		intellect: 		9,
		speed: 			10,
		defense: 		8,
		resistance: 	15,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	0.5,
		image: 			'beauty-355157_640.jpg',
		abilities: 		['attack','inspire','minor_heal'],
		rarity: 		14,
		loot_items:		{
							cloth: 		{min:1,max:1,chance:15},
							herbs: 		{min:1,max:1,chance:15}
						},
		loot_gear: 		{
							feathered_hat: 	{min:1,max:1,chance:5,subtypes:['healing']},
							leather_boots: 	{min:1,max:1,chance:5,subtypes:['healing']}
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	beastmaster:{
		name: 			'beastmaster',
		type: 			'human',
		vulnerable:  	['human'],
		strength: 		10,
		intellect: 		8,
		speed: 			10,
		defense: 		10,
		resistance: 	8,
		shield: 		0,
		max_hp: 		35,
		aggro_factor: 	1,
		image: 			'fantasy-1962096_640.jpg',
		abilities: 		['rend','command_beast','dominate_beast'],
		rarity: 		14,
		loot_items:		{
							cloth: 		{min:1,max:1,chance:1.5},
							herbs: 		{min:1,max:1,chance:15}
						},
		loot_gear: 		{
						},
		loot_units: 	{
						},
		loot_spells:	{}
	},
	
	brown_bear:{
		name: 			'brown bear',
		type: 			'animal',
		vulnerable:  	['animal','bear'],
		strength: 		10,
		intellect: 		4,
		speed: 			7,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		45,
		aggro: 			20,
		aggro_factor: 	4,
		image: 			'bear-422682_640.jpg',
		abilities: 		['swipe','enrage','rend'],
		rarity: 		15,
		loot_items:		{
							fish: 			{min:1,max:1,chance:10},
							fur: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	lion:{
		name: 			'lion',
		type: 			'animal',
		vulnerable:  	['animal','lion','cat'],
		strength: 		10,
		intellect: 		4,
		speed: 			10,
		defense: 		10,
		resistance: 	8,
		shield: 		0,
		max_hp: 		25,
		aggro: 			20,
		aggro_factor: 	4,
		image: 			'lion-3096191_640.jpg',
		abilities: 		['swipe','rend','roar'],
		rarity: 		15,
		loot_items:		{
							beef: 			{min:1,max:1,chance:10},
							fur: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	guard_dog:{
		name: 			'guard dog',
		type: 			'animal',
		vulnerable:  	['animal','dog','servent'],
		strength: 		8,
		intellect: 		4,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		35,
		aggro: 			20,
		aggro_factor: 	8,
		image: 			'moscow-guard-dog-1643492_640.jpg',
		abilities: 		['attack','raise_alarm','bark'],
		rarity: 		3,
		loot_items:		{
							bone: 			{min:1,max:1,chance:10},
							fur: 			{min:1,max:1,chance:5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	shepherds_dog:{
		name: 			'shepherd\'s dog',
		type: 			'dog',
		vulnerable:  	['animal','dog','servent'],
		strength: 		8,
		intellect: 		8,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		21,
		image: 			'dog-1877816_640.jpg',
		abilities: 		['attack','raise_alarm','scare'],
		rarity: 		3,
		loot_items:		{
							bone: 			{min:1,max:1,chance:5},
							fur: 			{min:1,max:1,chance:50}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	wolf:{
		name: 			'wolf',
		type: 			'animal',
		vulnerable:  	['animal','wolf'],
		strength: 		10,
		intellect: 		6,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		aggro: 			15,
		aggro_factor: 	1,
		image: 			'wolf-635063_640.jpg',
		abilities: 		['attack','rend','howl'],
		rarity: 		3,
		loot_items:		{
							fur: 			{min:1,max:1,chance:25}, 	// 2.5
							leather: 		{min:1,max:1,chance:75}, 	// 7.5
							wolf_tail:		{min:1,max:1,chance:25} 	// quest
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	forest_owl:{
		name: 			'forest owl',
		type: 			'animal',
		vulnerable:  	['animal','owl'],
		strength: 		10,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		aggro: 			15,
		aggro_factor: 	1,
		image: 			'bengal-eagle-owl-3452925_640.jpg',
		abilities: 		['attack','swoop','lifebloom'],
		rarity: 		3,
		loot_items:		{
							egg: 			{min:1,max:1,chance:25}, 	// 2.5
							feather: 		{min:1,max:1,chance:75}, 	// 7.5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	
	lucky:{
		name: 			'Lucky',
		type: 			'animal',
		vulnerable:  	['animal','dog','servent'],
		strength: 		10,
		intellect: 		4,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		30,
		aggro: 			20,
		aggro_factor: 	4,
		image: 			'moscow-guard-dog-1643492_640.jpg',
		abilities: 		['attack','bark'],
		rarity: 		3,
		loot_items:		{},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	forest_fairy:{
		name: 			'forest fairy',
		type: 			'fairy',
		vulnerable:  	['caster','fairy'],
		strength: 		3,
		intellect: 		12,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		10,
		aggro_factor: 	0.5,
		image: 			'fantasy-3332119_640.jpg',
		abilities: 		['fairy_dust','seed_of_life','minor_heal'],
		rarity: 		6,
		loot_items:		{
							apple: 			{min:1,max:1,chance:25},
							herbs: 			{min:1,max:1,chance:12.5}
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	flower_fairy:{
		name: 			'flower fairy',
		type: 			'fairy',
		vulnerable:  	['caster','fairy'],
		strength: 		3,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	0.5,
		image: 			'art-2436545_640.jpg',
		abilities: 		['fairy_dust','soothe','revitalize'],
		rarity: 		6,
		loot_items:		{
							apple: 			{min:1,max:1,chance:25},
							herbs: 			{min:1,max:1,chance:25}
						},
		loot_gear: 		{
							feathered_hat: 	{min:1,max:3,chance:10,subtypes:['of_the_woods']}
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	dryad:{
		name: 			'dryad',
		type: 			'fairy',
		vulnerable:  	['caster','fairy'],
		strength: 		3,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	0.5,
		image: 			'fantasy-2824500_640.jpg',
		abilities: 		['fairy_dust','hide','mayor_heal'],
		rarity: 		6,
		loot_items:		{
							apple: 			{min:1,max:1,chance:25},
							herbs: 			{min:1,max:1,chance:25}
						},
		loot_gear: 		{
							feathered_hat: 	{min:1,max:3,chance:10,subtypes:['of_the_woods']}
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	gladiator:{
		name: 			'gladiator',
		type: 			'human',
		vulnerable:  	['humanoid','human'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	2,
		image: 			'amazone-2148910_640.jpg',
		abilities: 		['attack','trap','counter'],
		rarity: 		6,
		loot_items:		{
						},
		loot_gear: 		{
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	cave_slug:{
		name: 			'cave slug',
		type: 			'animal',
		vulnerable:  	['caster','slug','animal','physical'],
		strength: 		2,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	1,
		image: 			'autumn-987372_640.jpg',
		abilities: 		['slow','poison','corrupt'],
		rarity: 		1,
		loot_items:		{
							water: 			{min:1,max:1,chance:15},
							stone: 			{min:1,max:1,chance:15}
						},
		loot_gear: 		{
							dagger: 		{min:1,max:3,chance:10,subtypes:['slime_covered']}
						},
		loot_units: 	{},
		loot_spells:	{}
	},
	mana_mage:{
		name: 			'mana mage',
		type: 			'mana_mage',
		vulnerable:  	['caster','humanoid','mage'],
		strength: 		5,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	1,
		image: 			'woman-3084129_640.jpg',
		abilities: 		['inspire','concentrate','arcane_blast'],
		rarity: 		1,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:20}, 	// 4
							cloth: 			{min:1,max:1,chance:12.5}, 	// 4
							rune: 			{min:1,max:1,chance:10}, 	// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	lone_mage:{
		name: 			'lone mage',
		type: 			'lone_mage',
		vulnerable:  	['caster','humanoid','mage'],
		strength: 		5,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	1,
		image: 			'woman-2269877_1280.jpg',
		abilities: 		['slow','concentrate','magic_bolt'],
		rarity: 		1,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:20}, 	// 4
							cloth: 			{min:1,max:1,chance:12.5}, 	// 4
							rune: 			{min:1,max:1,chance:10}, 	// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	frost_mage:{
		name: 			'frost mage',
		type: 			'frost_mage',
		vulnerable:  	['caster','humanoid','mage','fire'],
		immune: 		['water'],
		strength: 		5,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	1,
		image: 			'escaping-1582369_640.jpg',
		abilities: 		['freeze','frostbolt','ice_shield'],
		rarity: 		1,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:20}, 	// 4
							cloth: 			{min:1,max:1,chance:12.5}, 	// 4
							rune: 			{min:1,max:1,chance:10}, 	// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	ice_queen:{
		name: 			'ice queen',
		type: 			'ice_queen',
		vulnerable:  	['caster','humanoid','mage','fire'],
		immune: 		['water'],
		strength: 		5,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	1,
		image: 			'portrait-3262906_640.jpg',
		abilities: 		['snowstorm','frostbolt','ice_shield'],
		rarity: 		1,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:20}, 	// 4
							cloth: 			{min:1,max:1,chance:12.5}, 	// 4
							rune: 			{min:1,max:1,chance:10}, 	// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	echo_mage:{
		name: 			'echo mage',
		type: 			'echo_mage',
		vulnerable:  	['caster','humanoid','mage'],
		strength: 		5,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	1,
		image: 			'woman-840189_640.jpg',
		abilities: 		['magic_bolt','move','echo'],
		rarity: 		1,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:20}, 	// 4
							cloth: 			{min:1,max:1,chance:12.5}, 	// 4
							rune: 			{min:1,max:1,chance:10}, 	// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	echo:{
		name: 			'echo',
		type: 			'echo',
		vulnerable:  	['caster','humanoid','mage'],
		strength: 		5,
		intellect: 		12,
		speed: 			5,
		defense: 		10,
		resistance: 	12,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	1,
		image: 			'woman-840189_640.jpg',
		abilities: 		['magic_bolt','move','echo'],
		rarity: 		1,
		xp_factor: 		0,
		loot_items:		{},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mana_converter:{
		name: 			'mana converter',
		type: 			'mana_converter',
		vulnerable:  	['caster','humanoid','mage'],
		strength: 		5,
		intellect: 		10,
		speed: 			5,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	1,
		image: 			'fantasy-1390177_1280.jpg',
		abilities: 		['absorb_magic','shield_self','magic_bolt'],
		rarity: 		1,
		loot_items:		{
							herbs: 			{min:1,max:1,chance:20}, 	// 4
							cloth: 			{min:1,max:1,chance:12.5}, 	// 4
							rune: 			{min:1,max:1,chance:10}, 	// 2
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	battering_ram:{
		name: 			'battering ram',
		type: 			'battering_ram',
		vulnerable:  	['wood','vehicle','fire'],
		strength: 		12,
		intellect: 		2,
		speed: 			2,
		defense: 		15,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		aggro_factor: 	1,
		image: 			'battering-ram-2842783_640.jpg',
		abilities: 		['siege'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:3,chance:50}, 	// 10
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	meerkat_sentry:{
		name: 			'meerkat sentry',
		type: 			'meerkat',
		vulnerable:  	['animal','meerkat'],
		dodge: 			20,
		strength: 		2,
		intellect: 		8,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		15,
		aggro_factor: 	0.5,
		image: 			'sentry-2437680_640.jpg',
		abilities: 		['raise_alarm','hide','quick_strike'],
		rarity: 		1,
		loot_items:		{
							fur: 			{min:1,max:1,chance:50}, 	// 5
							leather: 		{min:1,max:1,chance:50}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	forest_elf:{
		name: 			'forest elf',
		type: 			'forest_elf',
		vulnerable:  	['caster','elf','humanoid'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'woman-3407771_640.jpg',
		abilities: 		['revitalize','hide','quick_strike'],
		rarity: 		1,
		loot_items:		{
							apple: 			{min:1,max:1,chance:50}, 	// 5
							leather: 		{min:1,max:1,chance:50}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	elf_explorer:{
		name: 			'elf explorer',
		type: 			'elf_explorer',
		vulnerable:  	['elf','humanoid'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'forest-2636034_1280.jpg',
		abilities: 		['expose','hide','quick_strike'],
		rarity: 		1,
		loot_items:		{
							fur: 			{min:1,max:1,chance:50}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	elf_protector:{
		name: 			'elf protector',
		type: 			'elf_protector',
		vulnerable:  	['caster','elf','humanoid'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'fantasy-3639999_1280.jpg',
		abilities: 		['protect','shield','quick_strike'],
		rarity: 		1,
		loot_items:		{
							rune: 			{min:1,max:1,chance:25}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mountain_elf:{
		name: 			'mountain elf',
		type: 			'mountain_elf',
		vulnerable:  	['caster','elf','humanoid'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'elf-girl-1950103_640.jpg',
		abilities: 		['ignite','regenerate','quick_strike'],
		rarity: 		1,
		loot_items:		{
							stone: 			{min:1,max:1,chance:50}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	elf_warrior:{
		name: 			'elf warrior',
		type: 			'elf_warrior',
		vulnerable:  	['elf','humanoid'],
		dodge: 			10,
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'woman-3476150_640.jpg',
		abilities: 		['twin_strike','exposing_strike','frenzy'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:50}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	elf_archer:{
		name: 			'elf archer',
		type: 			'elf_archer',
		vulnerable:  	['elf','humanoid'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'fantasy-3388999_1280.jpg',
		abilities: 		['take_aim','snipe','victory_rush'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:50}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	elf_guardian:{
		name: 			'elf guardian',
		type: 			'elf_guardian',
		vulnerable:  	['caster','elf','humanoid'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'woman-3337634_640.jpg',
		abilities: 		['seed_of_life','piercing_shot','protect'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:50}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	blue_elf:{
		name: 			'blue elf',
		type: 			'blue_elf',
		vulnerable:  	['caster','elf','humanoid','mage'],
		dodge: 			10,
		strength: 		8,
		intellect: 		10,
		speed: 			12,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		20,
		image: 			'dark-2971931_1280.jpg',
		abilities: 		['absorb_magic','focus_mind','arcane_missiles'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:50}, 	// 5
							herbs: 			{min:1,max:1,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	caretaking_druid:{
		name: 			'caretaking druid',
		type: 			'caretaking_druid',
		vulnerable:  	['caster','human','humanoid','druid'],
		strength: 		8,
		intellect: 		11,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'druid-3442618_1280.jpg',
		abilities: 		['revitalize','protect','attack'],
		rarity: 		1,
		loot_items:		{
							fur: 			{min:1,max:1,chance:50}, 	// 5
							leather: 		{min:1,max:1,chance:25}, 	// 5
							acorn: 			{min:10,max:10,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	poacher:{
		name: 			'poacher',
		type: 			'poacher',
		vulnerable:  	['human','humanoid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	10,
		shield: 		0,
		max_hp: 		25,
		image: 			'woman-3353689_640.jpg',
		abilities: 		['shoot','trap','victory_rush'],
		rarity: 		1,
		loot_items:		{
							timber: 		{min:1,max:1,chance:50}, 	// 5
							coins: 			{min:5,max:25,chance:25}, 	// 5
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	blue_spirit:{
		name: 			'blue spirit',
		type: 			'blue_spirit',
		vulnerable:  	['caster','spirit','undead'],
		strength: 		0,
		intellect: 		10,
		speed: 			0,
		defense: 		15,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'wallpaper-830417_1280.jpg',
		abilities: 		['freeze','frostbolt','cleanse'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	green_spirit:{
		name: 			'green spirit',
		type: 			'green_spirit',
		vulnerable:  	['caster','spirit','undead'],
		strength: 		0,
		intellect: 		10,
		speed: 			0,
		defense: 		15,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'fantasy-2824500_1920.jpg',
		abilities: 		['revitalize','minor_heal','seed_of_life'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	red_spirit:{
		name: 			'red spirit',
		type: 			'red_spirit',
		vulnerable:  	['caster','spirit','undead'],
		strength: 		0,
		intellect: 		10,
		speed: 			0,
		defense: 		15,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'silhouette-1304141_1280.jpg',
		abilities: 		['firebolt','ignite','firestorm'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	purple_spirit:{
		name: 			'purple spirit',
		type: 			'purple_spirit',
		vulnerable:  	['caster','spirit','undead'],
		strength: 		0,
		intellect: 		10,
		speed: 			0,
		defense: 		15,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'abstract-1042463_1280.jpg',
		abilities: 		['curse','corrupt','confuse'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	orange_spirit:{
		name: 			'orange spirit',
		type: 			'orange_spirit',
		vulnerable:  	['spirit','undead'],
		strength: 		10,
		intellect: 		0,
		speed: 			0,
		defense: 		15,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'sandstone-467714_1280.jpg',
		abilities: 		['smash','enrage','frenzy'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	yellow_spirit:{
		name: 			'yellow spirit',
		type: 			'yellow_spirit',
		vulnerable:  	['caster','spirit','undead'],
		strength: 		0,
		intellect: 		10,
		speed: 			0,
		defense: 		15,
		resistance: 	15,
		shield: 		0,
		max_hp: 		15,
		image: 			'fantasy-2437944_1280.jpg',
		abilities: 		['motivate','raise_alarm','inspire'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mermaid:{
		name: 			'mermaid',
		type: 			'mermaid',
		vulnerable:  	['caster','humanoid','mermaid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		20,
		image: 			'woman-3373180_1280.jpg',
		abilities: 		['attack','bolster','dive'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mermaid_twin:{
		name: 			'mermaid twin',
		type: 			'mermaid',
		vulnerable:  	['humanoid','mermaid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		20,
		image: 			'underwater-3226897_640.jpg',
		abilities: 		['twin_strike','call_mermaid','dive'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mermaid_princess:{
		name: 			'mermaid princess',
		type: 			'mermaid',
		vulnerable:  	['caster','humanoid','mermaid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		20,
		image: 			'underwater-3226899_640.jpg',
		abilities: 		['frostbolt','minor_heal','dive'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
	mermaid_conjurer:{
		name: 			'mermaid conjurer',
		type: 			'mermaid',
		vulnerable:  	['caster','humanoid','mermaid'],
		strength: 		10,
		intellect: 		10,
		speed: 			10,
		defense: 		10,
		resistance: 	15,
		shield: 		0,
		max_hp: 		20,
		image: 			'mermaid-2149232_640.jpg',
		abilities: 		['frostbolt','focus_mind','dive'],
		rarity: 		1,
		loot_items:		{
						},
		loot_gear: 		{},
		loot_units: 	{},
		loot_spells:	{}
	},
}

var available_mobs = available_units;


function get_mobs_by_rarity(rarity){
	var mobs_by_rarity = {};
	var mob_count = 0;
	$.each(available_mobs, function(key, mob) {
		if(mob['rarity'] <= rarity){
			mobs_by_rarity[mob_count] = key;
			++mob_count;
		};
	});
	return mobs_by_rarity;
}

function calculate_unit_value(unit_id){
	var total_value = 0;
	if(available_mobs[unit_id] != undefined)
	{
		var unit = available_mobs[unit_id];

		console.log('             ---- ' + unit['name'] + ' ----');

		total_value += unit['strength'];
		total_value += unit['intellect'];

		total_value += unit['defense'];
		total_value += unit['resistance'];

		console.log('attribute value: ' + total_value);

		total_value += (unit['max_hp'] / 2.5);

		console.log('hp: ' + total_value);


		if(unit['shield'] != undefined && unit['shield'] > 0)
		{
			total_value += (unit['shield'] / 2.5);
			console.log('shield: ' + total_value);
		}
		if(unit['dodge'] != undefined && unit['dodge'] > 0)
		{
			total_value *= 1 + (unit['dodge'] / 100);
			console.log('dodge: ' + total_value);
		}
		if(unit['reflect'] != undefined && unit['reflect'] > 0)
		{
			total_value *= 1 + (unit['reflect'] / 100);
			console.log('reflect: ' + total_value);
		}

		total_value *= (unit['speed'] / 10);

		console.log('speed: ' + total_value);

		if(count_object(unit['abilities']) > 0)
		{
			total_value *= count_object(unit['abilities']);
		}

		console.log('abilities: (' + count_object(unit['abilities']) + ')' + total_value);

		total_value *= 0.5;

		var should_drop = Math.floor(total_value);

		total_value = (total_value * total_value * total_value) / 10;
		
	

		console.log('1 item: ' + Math.floor(total_value / 1));
		console.log('2 item: ' + Math.floor(total_value / 1.2));
		console.log('3 item: ' + Math.floor(total_value / 1.4));
		console.log('4 item: ' + Math.floor(total_value / 1.6));
		console.log('5 item: ' + Math.floor(total_value / 1.8));
		console.log('should drop: ' + should_drop);
		console.log('kills needed to craft: ' + Math.floor(total_value / should_drop));
	}
	
	return Math.floor(total_value);
}

function calculate_all_unit_values(){
	$.each(available_mobs, function(mob_key, mob){
		var value = calculate_unit_value(mob_key);
		console.log(mob_key + ': ' + value);
	});
}
