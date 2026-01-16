all_items['apple'] = {
	name: 		'apple',
	description: 	'A sweet snack.<br/>Use: Heals up to 10 health of all allies.',
	image: 		'items/apple-g9165f9bf8_640.jpg',
	value: 		5,
	sell_types: ['tavern'],
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	5,
	}
};

all_items['bread'] = {
	name: 		'bread',
	description: 	'A hearty snack.<br/>Use: Heals up to 20 health of all allies.',
	image: 		'items/bread-g9256d748a_640.jpg',
	value: 		50,
	sell_types: ['tavern'],
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	10,
	}
};

all_items['cheese'] = {
	name: 		'cheese',
	description: 	'A hearty snack.<br/>Use: Heals up to 20 health of all allies.',
	image: 		'items/cheese-1972744_640.jpg',
	value: 		50,
	sell_types: ['tavern'],
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	10,
	}
};

all_items['cucumber'] = {
	name: 		'cucumber',
	description: 	'A healthy snack.<br/>Use: Heals up to 10 health of all allies.',
	image: 		'items/cucumbers-849269_640.jpg',
	value: 		5,
	sell_types: ['tavern'],
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	5,
	}
};

all_items['health_potion'] = {
	name: 		'health potion',
	description: 	'A simple potion.<br/>Use: Heals up to 30 health of all allies.',
	image: 		'items/drank-ga420413eb_640.jpg',
	value: 		75,
	sell_types: ['potions'],
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	15,
	}
};

all_items['magic_acorn'] = {
	name: 		'magic acorn',
	description: 	'Can be crafted from acorns.<br/>Use: Summons a squirrel.',
	sell_types: ['herbal'],
	image: 		'items/acorn-4647753_640.jpg',
	value: 		225,
	consumable: true,
	ability: 	'summon_squirrel',
};

all_items['roasted_fish'] = {
	name: 		'roasted fish',
	description: 	'A hearty snack.<br/>Use: Heals up to 10 health of all allies.',
	image: 		'items/fish-5656366_640.jpg',
	value: 		25,
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	5,
	}
};

all_items['sausage'] = {
	name: 		'sausage',
	description: 	'A hearty snack.<br/>Use: Heals up to 10 health of all allies.',
	image: 		'items/hot-dog-g8e8fe3d81_640.jpg',
	value: 		30,
	sell_types: ['tavern'],
	consumable: true,
	ability: 	'heal_all',
	fixed_effects:{
		based_on: 	5,
	}
};

all_items = sortObj(all_items);