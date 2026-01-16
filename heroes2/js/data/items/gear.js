// FORMULA FOR GEAR
// STATS * 10 square
// 1 = 100
// 2 = 400
// 3 = 900 etc.

var stat_names = {
	strength: 	'strength: {STAT}',
	intellect: 	'intellect: {STAT}',
	dodge: 		'dodge: {STAT}%',
	armor: 		'armor: {STAT}',
	max_hp: 	'health: {STAT}',
}

all_items['axe'] = {
	name: 		'axe',
	image: 		'items/axe-674841_640.jpg',
	description: 	'A simple axe.<br/><br/>Slot: main hand',
	value: 		400,
	gear: 		true,
	slots: 		{2:true},
	stats: 		{
		strength: 	2,
	},
	level: 		2,
	copies:{
		1: 	'rusty {NAME}',
		3: 	'sturdy {NAME}',
		4: 	'strong {NAME}',
		5: 	'iron {NAME}',
		6: 	'steel {NAME}',
	}
};

all_items['cloak'] = {
	name: 		'cloak',
	image: 		'items/man-962563_640.jpg',
	sell_types: ['shady','clothing'],
	description: 	'A simple cloak.<br/><br/>Slot: Chest',
	value: 		400,
	gear: 		true,
	slots: 		{4:true},
	stats: 		{
		dodge: 	10,
	},
	level: 		2,
	copies:{
		1: 	'old {NAME}',
		3: 	'warm {NAME}',
		4: 	'wool {NAME}',
		5: 	'silk {NAME}',
		6: 	'mageweave {NAME}',
	}
};

all_items['herb_bundle'] = {
	name: 		'herb bundle',
	image: 		'items/calendula-6512323_1280.jpg',
	sell_types: ['herbal','potions'],
	description: 	'A simple bundle of herbs.<br/><br/>Slot: Accessory',
	value: 		400,
	gear: 		true,
	slots: 		{6:true},
	stats: 		{
		intellect: 	2,
	},
	level: 		2,
	copies:{
		1: 	'small {NAME}',
		3: 	'fine {NAME}',
		4: 	'potent {NAME}',
		5: 	'rare {NAME}',
		6: 	'magic {NAME}',
	}
};

all_items['jacket'] = {
	name: 		'jacket',
	image: 		'items/fashion-3766441_640.jpg',
	description: 	'A leather jacket.<br/><br/>Slot: chest<br/>Strength: +1',
	sell_types: ['shady'],
	value: 		400,
	gear: 		true,
	slots: 		{4:true},
	stats: 		{
		strength: 	1,
		armor: 		5,
		max_hp: 	5,
	}
};

all_items['knife'] = {
	name: 		'knife',
	image: 		'items/knife-6194716_640.jpg',
	description: 	'A simple knife used by many shady people.<br/><br/>Slot: main hand',
	value: 		400,
	sell_types: ['shady'],
	gear: 		true,
	slots: 		{2:true},
	stats: 		{
		strength: 	2,
	},
	level: 		2,
	copies:{
		1: 	'rusty {NAME}',
		3: 	'sturdy {NAME}',
		4: 	'strong {NAME}',
		5: 	'iron {NAME}',
		6: 	'steel {NAME}',
	}
};

all_items['net'] = {
	name: 		'net',
	image: 		'items/fishing-nets-3341187_640.jpg',
	sell_types: ['fishing'],
	description: 	'A sturdy net.<br/><br/>Slot: Both hands',
	value: 		225,
	gear: 		true,
	slots: 		{2:true, 3:false},
	stats: 		{
		strength: 	2,
		max_hp: 	10,
	}
};

all_items['pitchfork'] = {
	name: 		'pitchfork',
	image: 		'items/background-2659339_640.jpg',
	description: 	'A simple pitchfork.<br/><br/>Slot: both hands',
	value: 		100,
	gear: 		true,
	slots: 		{2:true,3:false},
	stats: 		{
		strength: 	2,
	}
};

all_items['scarf'] = {
	name: 		'scarf',
	image: 		'items/scarf-g1decbc93a_640.jpg',
	description: 	'A simple scarf.<br/><br/>Slot: head',
	sell_types: ['shady'],
	value: 		36,
	gear: 		true,
	slots: 		{1:true},
	stats: 		{
		max_hp: 	6,
	},
	level: 		2,
	copies:{
		1: 	'old {NAME}',
		3: 	'warm {NAME}',
		4: 	'wool {NAME}',
		5: 	'silk {NAME}',
		6: 	'mageweave {NAME}',
	}
};


all_items['shoes'] = {
	name: 		'shoes',
	image: 		'items/shoe-gf460848e3_640.jpg',
	description: 	'Comfotable shoes.<br/><br/>Slot: legs',
	sell_types: ['shady'],
	value: 		225,
	gear: 		true,
	slots: 		{5:true},
	stats: 		{
		max_hp: 	5,
		intellect: 	1,
	}
};


all_items['staff'] = {
	name: 		'staff',
	image: 		'items/stick-1215030_640.jpg',
	description: 	'A simple staff.<br/><br/>Slot: both hands',
	value: 		225,
	gear: 		true,
	slots: 		{2:true,3:false},
	stats: 		{
		strength: 	1,
		intellect: 	2,
	}
};

$.each(all_items, function(item_id, item_info){
	if(item_info['gear'] != undefined && item_info['gear'] == true)
	{
		$.each(item_info['copies'], function(copy_level, copy_name){
			var temp_item = true_copyobject(all_items[item_id]);
			temp_item['level'] = copy_level;
			var level_factor = copy_level / item_info['level'];
			$.each(temp_item['stats'], function(stat_id, stat_level){
				temp_item['stats'][stat_id] = stat_level * level_factor;
			});
			temp_item['value'] = Math.ceil(item_info['value'] * sqr(level_factor));
			temp_name = copy_name.replace('{NAME}', item_info['name']);
			temp_item['name'] = temp_name;
			delete temp_item['copies'];
			all_items[temp_name.replace(' ','_')] = temp_item;
		});
	}
});

all_items = sortObj(all_items);