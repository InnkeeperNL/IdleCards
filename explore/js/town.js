function show_town(){
	//deposit_inventory();
	var all_parsed_buildings = '';
	eachoa(all_available_buildings, function(building_id, building_info){
		all_parsed_buildings += parse_building_button(building_id);
	});
	class_html('town_container', all_parsed_buildings);
	class_html('bottom_bar_right', '<button class="menu_button options_button slim" data-target-content="options">Options</button>');
}

function parse_building_button(building_id){
	var building_info = all_available_buildings[building_id];
	var parsed_building_button = '';

	if(gamedata['buildings'] == undefined){gamedata['buildings'] = {};}
	var building_owned = '';
	var show_building = true;
	var building_level = 0;
	if(gamedata['buildings'][building_id] != undefined){building_level = gamedata['buildings'][building_id];}

	if(gamedata['buildings'][building_id] == undefined)
	{
		if(building_info['free_levels'] != undefined)
		{
			gamedata['buildings'][building_id] = building_info['free_levels'];
		}
		else
		{
			building_owned = 'not_owned';
			if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
			if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
			eachoa(building_info['cost'], function(cost_id, cost_amount){
				if(gamedata['inventory'][cost_id] == undefined && gamedata['storage'][cost_id] == undefined)
				{
					show_building = false;
				}
			});
		}
	}

	if(show_building == true)
	{

		parsed_building_button += '<div class="building_button building_button_' + building_id + ' ' + building_owned + '" onclick="set_building(\'' + building_id + '\');show_content(\'building\')">';
		if(building_info['image'] != undefined)
		{
			parsed_building_button += '<div class="building_button_bg" style="background-image:url(\'images/' + building_info['image'] + '\')"></div>';
		}
		if(building_info['item_image'] != undefined && all_available_items[building_info['item_image']] != undefined)
		{
			parsed_building_button += '<div class="building_item_image" style="background-image:url(\'images/' + all_available_items[building_info['item_image']]['image'] + '\')"></div>';
		}
		if(building_info['max_level'] == undefined || building_level < building_info['max_level'])
		{
			var can_build_percent = check_can_upgrade_building_percent(building_id);
			var can_build_now = '';
			if(can_build_percent >= 100)
			{
				can_build_now = 'can_build_now';
			}
			parsed_building_button += '<div class="can_build_container"><div class="can_build ' + can_build_now + '" style="width:' + (0 + can_build_percent) + '%"></div></div>';
		}
		parsed_building_button += '</div>';
	}

	return parsed_building_button;
}

function set_building(building_id){
	current_building_id = building_id;
}

function deposit_inventory(keep_energy_items){
	if(count_object(gamedata['inventory']) > 0)
	{
		if(gamedata['storage'] == undefined)
		{
			gamedata['storage'] = {};
		}
		var max_storage = get_max_storage();
		var wasted_items = {};
		eachoa(gamedata['inventory'], function(item_id, item_amount){
			var item_info = all_available_items[item_id];
			if(gamedata['storage'][item_id] == undefined){gamedata['storage'][item_id] = 0;}
			if(all_available_items[item_id]['energy'] == undefined || keep_energy_items == undefined || keep_energy_items == false)
			{
				gamedata['storage'][item_id] += item_amount;
				var surplus = 0;
				if(gamedata['storage'][item_id] > max_storage && item_info['type'] != undefined && item_info['type'] == 'resource')
				{
					surplus = gamedata['storage'][item_id] - max_storage;
					gamedata['storage'][item_id] = max_storage;
					wasted_items['item_id'] = surplus;
				}
				gamedata['inventory'][item_id] = surplus;
				if(gamedata['inventory'][item_id] == 0)
				{
					delete gamedata['inventory'][item_id];
				}
			}
		});
		//gamedata['inventory'] = {};
		saveToLocalStorage();

		if(count_object(wasted_items) > 0)
		{
			// show waste
		}
	}
}


function get_max_storage(){
	var max_storage = max_storage_base;
	max_storage = get_building_bonus('max_storage', max_storage);
	return max_storage;
}

function get_building_bonus(bonus_id, base_amount){
	if(gamedata['buildings'] == undefined){gamedata['buildings'] = {};}
	var total_percent_bonus = 0;
	var total_factor = 1;
	eachoa(gamedata['buildings'], function(building_id, building_level){
		if(all_available_buildings[building_id]['effects'][bonus_id] != undefined && (all_available_buildings[building_id]['effect_is_local'] == undefined || (current_building_id == building_id && current_content == 'building')))
		{
			if(all_available_buildings[building_id]['effect_type'] == 'fixed')
			{
				base_amount += building_level * all_available_buildings[building_id]['effects'][bonus_id];
			}
			if(all_available_buildings[building_id]['effect_type'] == 'percent')
			{
				total_percent_bonus += ((building_level * all_available_buildings[building_id]['effects'][bonus_id]) / 100);
			}
			if(all_available_buildings[building_id]['effect_type'] == 'factor')
			{
				total_factor = to_the_nth(total_factor, building_level, all_available_buildings[building_id]['effects'][bonus_id]);
			}
		}
	});
	eachoa(gamedata['storage'], function(item_id, item_amount){
		var owned_amount = item_amount * 1;
		if(gamedata['inventory'][item_id] != undefined){owned_amount += gamedata['inventory'][item_id];}
		if(all_available_items[item_id]['effects'] != undefined && all_available_items[item_id]['effects'][bonus_id] != undefined)
		{
			if(all_available_items[item_id]['effect_type'] == 'fixed')
			{
				base_amount += owned_amount * all_available_items[item_id]['effects'][bonus_id];
			}
			if(all_available_items[item_id]['effect_type'] == 'percent')
			{
				total_percent_bonus += ((owned_amount * all_available_items[item_id]['effects'][bonus_id]) / 100);
			}
			if(all_available_items[item_id]['effect_type'] == 'factor')
			{
				total_factor = to_the_nth(total_factor, owned_amount, all_available_items[item_id]['effects'][bonus_id]);
			}
			
		}
	});
	base_amount *= 1 + total_percent_bonus;
	base_amount *= total_factor;
	return base_amount;
}