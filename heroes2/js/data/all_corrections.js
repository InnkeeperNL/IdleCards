var unit_roles = {
	
	basic:{
		strength: 	5,
		intellect: 	5,
		charisma: 	5,
		max_hp: 	100,
		base_aggro: 10,
	},
	effect:{
		strength: 	10,
		intellect: 	10,
		charisma: 	10,
		max_hp: 	50,
		base_aggro: 10,
	},
	mental:{
		strength: 	2,
		intellect: 	10,
		charisma: 	10,
		max_hp: 	60,
		base_aggro: 10,
	},
	tank:{
		strength: 	2,
		intellect: 	2,
		charisma: 	2,
		max_hp: 	250,
		base_aggro: 50,
	},
}


// CORRECT UNITS
$.each(all_units, function(unit_id, unit_info){
	//var unit_power_level = 0;
	//unit_power_level += unit_info['max_hp'] / 10;
	/*if(unit_info['strength'] == undefined){all_units[unit_id]['strength'] = 1;}
	if(unit_info['intellect'] == undefined){all_units[unit_id]['intellect'] = 1;}
	if(unit_info['charisma'] == undefined){all_units[unit_id]['charisma'] = 1;}*/
	all_units[unit_id]['big'] 			= false;
	all_units[unit_id]['power_level'] 	= 1;
	if(all_units[unit_id]['role'] == undefined){all_units[unit_id]['role'] = 'basic';}
	if(all_units[unit_id]['role'] != undefined && unit_roles[all_units[unit_id]['role']] != undefined)
	{
		$.each(unit_roles[all_units[unit_id]['role']], function(stat_id, stat_value){
			all_units[unit_id][stat_id] = stat_value;
		});
	}
	if(unit_info['dodge'] != undefined)
	{
		all_units[unit_id]['max_hp'] = Math.ceil(all_units[unit_id]['max_hp'] / (1 + (unit_info['dodge'] / 100)));
	}
	if(unit_info['armor'] != undefined)
	{
		all_units[unit_id]['max_hp'] = Math.ceil(all_units[unit_id]['max_hp'] / (1 + (unit_info['armor'] / 200)));
	}
	/*if(count_object(unit_info['abilities']) > 0)
	{
		unit_power_level *= 0.5 + (count_object(unit_info['abilities']) / 2);
	}*/
	/*$.each(unit_info['abilities'], function(ability_id, ability_chance){
		var ability_info = all_abilities[ability_id];
		var chance_factor = 100 / ability_chance['chance'];
		if(ability_info['proc_chance'] != undefined)
		{
			chance_factor *= ability_info['proc_chance'] / 100;
		}
		if(chance_factor > 1){chance_factor = 1;}
		if(ability_info['based_on'] != undefined)
		{
			if(typeof(ability_info['based_on']) == 'number')
			{
				unit_power_level += ability_info['based_on'] * chance_factor;
			}
			else
			{
				if(ability_info['based_on'] == 'max_hp')
				{
					unit_power_level += (unit_info['max_hp'] / 10) * chance_factor;
				}
				else
				{
					if(unit_info[ability_info['based_on']] != undefined)
					{
						unit_power_level += unit_info[ability_info['based_on']] * chance_factor;
					}
				}
			}
		}
	});*/
	if(unit_info['dodge'] == undefined){all_units[unit_id]['dodge'] = 0;}/*else{unit_power_level += (unit_info['max_hp'] / 10) * (unit_info['dodge'] / 100);}*/
	if(unit_info['armor'] == undefined){all_units[unit_id]['armor'] = 0;}/*else{unit_power_level += (unit_info['max_hp'] / 10) * (unit_info['armor'] / 100);}*/

	
	
	//if(unit_info['big'] == undefined){all_units[unit_id]['big'] = false;}
	if(unit_info['base_aggro'] == undefined){all_units[unit_id]['base_aggro'] = 10;}
	//unit_info['power_level'] = unit_power_level;
	if(unit_info['fixed_loot_chance'] == undefined)
	{
		var unit_drop_value = 0;
		var unit_drop_rates = 0;
		$.each(unit_info['loot'], function(loot_id, loot_info){
			if(all_items[loot_id] == undefined)
			{
				console.log(loot_id);
			}
			if(all_items[loot_id]['type'] == undefined || all_items[loot_id]['type'] != 'quest')
			{
				unit_drop_rates += loot_info['chance'];
				var average_drop_amount = loot_info['min'] + ((loot_info['max'] - loot_info['min']) / 2);
				if(loot_info['max'] < loot_info['min'])
				{
					average_drop_amount = loot_info['min'];
				}
				var loot_value = 1;
				if(all_items[loot_id]['value'] != undefined)
				{
					loot_value = all_items[loot_id]['value'];
				}

				unit_drop_value += loot_value * average_drop_amount * loot_info['chance'];
			}
		});
		if(unit_drop_rates > 0)
		{
			unit_drop_value = unit_drop_value / unit_drop_rates;
		}
		if(unit_drop_value > 0)
		{
			all_units[unit_id]['loot_chance'] = ((100 * unit_info['power_level']) / unit_drop_value) * 4;
		}
		if(all_units[unit_id]['loot_chance'] > 100)
		{
			/*$.each(unit_info['loot'], function(loot_id, loot_info){
				if(unit_info['loot'][loot_id]['max'] > 1)
				{
					unit_info['loot'][loot_id]['max'] = unit_info['loot'][loot_id]['max'] * (all_units[unit_id]['loot_chance'] / 100);
				}
			});*/
			if(unit_info['always_drop'] == undefined || true)
			{
				console.log(unit_id + ' does not drop enough loot: ' + all_units[unit_id]['loot_chance']);
			}
		}
		if(all_units[unit_id]['loot_chance'] < 50)
		{
			console.log(unit_id + ' drops too little loot: ' + all_units[unit_id]['loot_chance']);
			//console.log(unit_drop_value);
		}
		if(all_units[unit_id]['loot_chance'] < 100 && unit_info['always_drop'] != undefined)
		{
			all_units[unit_id]['always_drop'] = false;
			//console.log(unit_id + ' drops too much loot...: ' + all_units[unit_id]['loot_chance']);
		}
	}
	else
	{	
		all_units[unit_id]['loot_chance'] = unit_info['fixed_loot_chance'];
	}
	if(all_items[unit_id] == undefined)
	{
		all_items[unit_id] = {
			name: 			unit_info['name'],
			description: 	unit_info['description'],
			image: 			unit_info['image'],
			value: 			Math.floor(unit_info['power_level'] * unit_info['power_level']),
			unit: 			true,
		}
	}

});

all_items = sortObj(all_items);