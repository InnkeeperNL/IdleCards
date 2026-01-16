
var available_items = {
	trash:{
		name: 			'trash',
		subtype: 		'basic',
		image: 			'cans-931813_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	chicken_feet:{
		name: 			'chicken feet',
		subtype: 		'basic',
		image: 			'market-1870428_640.jpg',
		value: 			10,
		rarity: 		10,
		max_loot: 		2,
		quality: 		1
	},
	timber:{
		name: 			'timber',
		subtype: 		'basic',
		image: 			'logs-498538_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	apple:{
		name: 			'apple',
		subtype: 		'basic',
		image: 			'apple-1532055_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	plank:{
		name: 			'plank',
		subtype: 		'basic',
		image: 			'wood-690402_640.jpg',
		value: 			50,
		rarity: 		50,
		quality: 		1
	},
	cloth:{
		name: 			'cloth',
		subtype: 		'basic',
		image: 			'towel-1838210_640.jpg',
		value: 			50,
		rarity: 		50,
		quality: 		1
	},
	wool:{
		name: 			'wool',
		subtype: 		'basic',
		image: 			'sheep-1531978_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	cotton:{
		name: 			'cotton',
		subtype: 		'basic',
		image: 			'cotton-branch-1271038_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	
	yarn:{
		name: 			'yarn',
		subtype: 		'basic',
		image: 			'yarn-2564556_640.jpg',
		value: 			2,
		rarity: 		2,
		quality: 		1
	},
	bone:{
		name: 			'bone',
		subtype: 		'basic',
		image: 			'bone-1913929_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	
	fur:{
		name: 			'fur',
		subtype: 		'basic',
		image: 			'fur-1820230_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	charcoal:{
		name: 			'charcoal',
		subtype: 		'basic',
		image: 			'carbon-476087_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	rope:{
		name: 			'rope',
		subtype: 		'basic',
		image: 			'ship-traffic-jams-602169_640.jpg',
		value: 			50,
		rarity: 		50,
		quality: 		2
	},
	stone:{
		name: 			'stone',
		subtype: 		'basic',
		image: 			'beach-192981_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	sand:{
		name: 			'sand',
		subtype: 		'basic',
		image: 			'sand-469575_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	
	hay:{
		name: 			'hay',
		subtype: 		'basic',
		image: 			'straw-3130688_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	hay_bale:{
		name: 			'hay bale',
		subtype: 		'basic',
		image: 			'bale-3026360_640.jpg',
		value: 			50,
		rarity: 		50,
		quality: 		2
	},
	fish:{
		name: 			'fish',
		subtype: 		'basic',
		image: 			'fish-422543_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	blood:{
		name: 			'blood',
		subtype: 		'basic',
		image: 			'blood-1813410_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	iron_ore:{
		name: 			'iron ore',
		subtype: 		'basic',
		image: 			'mining-856022_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	iron:{
		name: 			'iron',
		subtype: 		'basic',
		image: 			'iron3773.png',
		value: 			35,
		rarity: 		35,
		quality: 		1
	},
	scrap_metal:{
		name: 			'scrap metal',
		subtype: 		'basic',
		image: 			'iron-1508269_640.jpg',
		value: 			3,
		rarity: 		3,
		quality: 		1
	},
	herbs:{
		name: 			'herbs',
		subtype: 		'basic',
		image: 			'tee-93172_640.jpg',
		value: 			20,
		rarity: 		20,
		quality: 		1
	},
	herb_tea:{
		name: 			'herb tea',
		subtype: 		'basic',
		image: 			'cup-829527_640.jpg',
		value: 			70,
		rarity: 		70,
		quality: 		2
	},
	
	holy_water:{
		name: 			'holy water',
		subtype: 		'basic',
		image: 			'christian-jar-1708228_640.jpg',
		value: 			50,
		rarity: 		50,
		quality: 		1
	},
	rune:{
		name: 			'rune',
		subtype: 		'basic',
		image: 			'runes-947831_640.jpg',
		value: 			20,
		rarity: 		20,
		quality: 		1
	},
	
	tomato:{
		name: 			'tomato',
		subtype: 		'basic',
		image: 			'tomato-3520004_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	flax:{
		name: 			'flax',
		subtype: 		'basic',
		image: 			'flax-3663037_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	wheat:{
		name: 			'wheat',
		subtype: 		'basic',
		image: 			'wheat-3162803_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	truffle:{
		name: 			'truffle',
		subtype: 		'basic',
		image: 			'winter-truffle-203032_640.jpg',
		value: 			100,
		rarity: 		10,
		quality: 		2
	},
	
	flour:{
		name: 			'flour',
		subtype: 		'basic',
		image: 			'flour-2713990_640.jpg',
		value: 			20,
		rarity: 		20,
		quality: 		1
	},
	bread:{
		name: 			'bread',
		subtype: 		'basic',
		image: 			'bread-2193537_640.jpg',
		value: 			42,
		rarity: 		42,
		quality: 		2
	},
	water:{
		name: 			'water',
		subtype: 		'basic',
		image: 			'drops-of-water-578897_640.jpg',
		value: 			2,
		rarity: 		2,
		quality: 		1
	},
	hearty_breakfast:{
		name: 			'hearty breakfast',
		subtype: 		'basic',
		image: 			'bacon-1238245_640.jpg',
		value: 			100,
		rarity: 		2,
		quality: 		2
	},
	
	feather:{
		name: 			'feather',
		subtype: 		'basic',
		image: 			'feather-3158886_640.jpg',
		value: 			10,
		rarity: 		2,
		quality: 		1
	},
	coins:{
		name: 			'coins',
		subtype: 		'currency',
		image: 			'money-1214945_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1
	},
	leather:{
		name: 			'leather',
		subtype: 		'basic',
		image: 			'needle-1687388_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	egg:{
		name: 			'egg',
		subtype: 		'basic',
		image: 			'yolk-917511_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	maywell_reputation_token:{
		name: 			'maywell reputation token',
		subtype: 		'token',
		image: 			'landscape-615428_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1,
		max_loot: 		1
	},
	squirrel_tail:{
		name: 			'squirrel tail',
		subtype: 		'quest',
		image: 			'squirrel-493790_640.jpg',
		value: 			10,
		rarity: 		10,
		max_loot: 		1,
		quality: 		2
	},
	fox_ear:{
		name: 			'fox ear',
		subtype: 		'quest',
		image: 			'fox-1542929_640.jpg',
		value: 			1,
		rarity: 		5,
		max_loot: 		2,
		quality: 		1
	},
	nails:{
		name: 			'nails',
		subtype: 		'basic',
		image: 			'nails-431564_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		2
	},
	lux_scarf:{
		name: 			'lux scarf',
		subtype: 		'quest',
		image: 			'piano-1246280_640.jpg',
		value: 			1,
		rarity: 		5,
		max_loot: 		1,
		quality: 		1
	},
	miners_helmet:{
		name: 			'miner\'s helmet',
		subtype: 		'quest',
		image: 			'miner-1903636_640.jpg',
		value: 			1,
		rarity: 		5,
		max_loot: 		1,
		quality: 		1
	},
	ruined_fur:{
		name: 			'ruined fur',
		subtype: 		'basic',
		image: 			'mink-247488_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	broken_bone:{
		name: 			'broken bone',
		subtype: 		'basic',
		image: 			'bone-576339_640.png',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	worn_fabric:{
		name: 			'worn fabric',
		subtype: 		'basic',
		image: 			'background-2038816_640.jpg',
		value: 			5,
		rarity: 		5,
		quality: 		1
	},
	beef:{
		name: 			'beef',
		subtype: 		'basic',
		image: 			'meat-1769187_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	veal:{
		name: 			'veal',
		subtype: 		'basic',
		image: 			'veal-chop-3313222_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	pork:{
		name: 			'pork',
		subtype: 		'basic',
		image: 			'pork-1122171_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	steak:{
		name: 			'steak',
		subtype: 		'basic',
		image: 			'steak-2272464_640.jpg',
		value: 			30,
		rarity: 		30,
		quality: 		2
	},
	sausage:{
		name: 			'sausage',
		subtype: 		'basic',
		image: 			'grill-party-3524649_640.jpg',
		value: 			60,
		rarity: 		60,
		quality: 		2
	},
	
	acorn:{
		name: 			'acorn',
		subtype: 		'basic',
		image: 			'quercus-robur-850733_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1
	},
	
	milk:{
		name: 			'milk',
		subtype: 		'basic',
		image: 			'milk-can-1990072_640.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	cheese:{
		name: 			'cheese',
		subtype: 		'basic',
		image: 			'pexels-photo-821365.jpeg',
		value: 			70,
		rarity: 		70,
		quality: 		2
	},
	rennet:{
		name: 			'rennet',
		subtype: 		'basic',
		image: 			'beard-oil_925x.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	salt:{
		name: 			'salt',
		subtype: 		'basic',
		image: 			'kaboompics_Himalayan_pink_salt.jpg',
		value: 			10,
		rarity: 		10,
		quality: 		1
	},
	
	alexis_ring:{
		name: 			'alexis\' ring',
		subtype: 		'quest',
		image: 			'diamond-1839031_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1
	},
	charm:{
		name: 			'charm',
		subtype: 		'quest',
		image: 			'chain-1812013_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1
	},
	crocodile_young:{
		name: 			'crocodile young',
		subtype: 		'quest',
		image: 			'crocodile-1379075_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1
	},
	bottle:{
		name: 			'bottle',
		subtype: 		'basic',
		image: 			'glass-623803_640.jpg',
		value: 			60,
		rarity: 		60,
		quality: 		2
	},
	wolf_tail:{
		name: 			'wolf tail',
		subtype: 		'quest',
		image: 			'wolf-1411379_640.jpg',
		value: 			1,
		rarity: 		1,
		quality: 		1
	},
	poison:{
		name: 			'poison',
		subtype: 		'basic',
		image: 			'poison-1481596_640.jpg',
		value: 			100,
		rarity: 		100,
		quality: 		2
	}
}

available_items = sortObj(available_items);

function get_random_owned_item(level, subtype){
	var chosen_item_id = '';

	var total_owned_items = 0;

	$.each(gamedata['inventory'], function(item_id, item_info){
		if(available_items[item_id]['subtype'] == 'basic' && available_items[item_id]['quality'] == level)
		{
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(available_items[item_id]['types'], function(useless_key, item_subtype){
					if(item_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				total_owned_items++;
			}
		}
	});

	var random_choice = Math.random() * total_owned_items;

	$.each(gamedata['inventory'], function(item_id, item_info){
		if(available_items[item_id]['subtype'] == 'basic' && available_items[item_id]['quality'] == level)
		{
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(available_items[item_id]['types'], function(useless_key, item_subtype){
					if(item_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				random_choice -= 1;
				if(random_choice < 0 && chosen_item_id == '')
				{
					chosen_item_id = item_id;
				}
			}
		}
		
	});
	return chosen_item_id;
}

function get_random_item(level, subtype){
	var chosen_item_id = 'wool';

	var total_items = 0;

	$.each(available_items, function(item_id, item_info){
		if(item_info['subtype'] == 'basic' && item_info['quality'] == level){
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(item_info['types'], function(useless_key, item_subtype){
					if(item_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				total_items++;
			}
		}
	});

	var random_choice = Math.random() * total_items;

	$.each(available_items, function(item_id, item_info){
		if(item_info['subtype'] == 'basic' && item_info['quality'] == level){
			var subtype_matched = false;
			if(subtype == 'any')
			{
				subtype_matched = true;
			}
			else
			{
				$.each(item_info['types'], function(useless_key, item_subtype){
					if(item_subtype == subtype)
					{
						subtype_matched = true;
					}
				});
			}
			if(subtype_matched == true)
			{
				random_choice -= 1;
				if(random_choice < 0 && random_choice > -1)
				{
					chosen_item_id = item_id;
				}
			}
		}
	});
	return chosen_item_id;
}