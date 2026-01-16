function check_item(item_id){
	if(item_id != 'coins' && available_items[item_id] != undefined)
	{
		if(gamedata['inventory'] == undefined){
			gamedata['inventory'] = {};
			saveToLocalStorage();
		}
		if(gamedata['inventory'][item_id] == undefined){
			gamedata['inventory'][item_id] = 0;
			saveToLocalStorage();
		}
	}
}

function gain_item(item_id, amount, hide_visible_effects, check_a){
	if(item_id == 'coins')
	{
		gamedata['coins'] += amount;
		if(gamedata['coins'] > gamedata['highest_coins'])
		{
			gamedata['highest_coins'] = gamedata['coins'];
		}
	}
	if(available_items[item_id] != undefined)
	{
		if(amount > 0)
		{
			check_item(item_id);
		}
		gamedata['inventory'][item_id] += amount;
		if(gamedata['inventory'][item_id] < 0)
		{
			gamedata['inventory'][item_id] = 0;
		}
	}
	saveToLocalStorage();
}

function get_percent_color(var_1, var_2){
	var percent = Math.floor(var_1 / var_2 * 100);
	var red = Math.floor(400 - (percent * 2.5));
	var green = Math.floor(150 + (percent * 1));
	if(green < 150){green = 150;}
	var color = 'rgba(' + red + ',' + green + ',150,0.7)';
	if(var_1 == 0)
	{
		color = 'rgba(250,50,50,1)';
	}
	if(var_1 >= var_2)
	{
		color = 'rgba(100,220,100,1)';
	}
	return color;
}

function get_item_owned_amount(item_id){
	if(item_id != 'coins' && available_items[item_id] != undefined)
	{
		if(gamedata['inventory'][item_id] == undefined)
		{
			return 0;
		}

		return gamedata['inventory'][item_id];
	}
	if(item_id == 'coins')
	{
		return gamedata['coins'];
	}
}

function parse_item(item_id, forced_amount, amount_gained, icon, is_new){
	var owned_amount = get_item_owned_amount(item_id);
	var parsed_item = '';
	if(available_items[item_id] != undefined)
	{
		var rarity = 1;
		if(available_items[item_id]['rarity'] != undefined){rarity = available_items[item_id]['rarity'];}
		parsed_item +=				'<div class="item item_container_' + item_id + ' rarity_' + rarity + '" style="background-image:url(images/' + available_items[item_id]['image'] + ');">';
		parsed_item +=					'<div class="bg" ></div>';
		parsed_item +=					'<span class="item_name">' + available_items[item_id]['name'] + '</span>';
		if(forced_amount == undefined)
		{
			parsed_item +=					'<span class="owned_amount item_' + item_id + '">' + nFormatter(owned_amount, 3) + '</span>';
		}
		else
		{
			parsed_item +=					'<span class="owned_amount">' + nFormatter(forced_amount, 3) + '</span>';
		}
		if(available_items[item_id]['consumable'] != undefined && gamedata['temp_bonusses'][item_id] != undefined && gamedata['temp_bonusses'][item_id]['max_time'] > new Date().getTime())
		{
			parsed_item +=					'<div class="consuming"></div>';
		}
		if(amount_gained != undefined)
		{
			var parsed_amount_gained = '';
			if(amount_gained != '' && amount_gained < 1)
			{
				parsed_amount_gained = Math.floor(amount_gained * 100) +'%';
			}
			if(amount_gained != '' && amount_gained < 0.01)
			{
				parsed_amount_gained = '<1%';
			}
			if(amount_gained != '' && amount_gained >= 1)
			{
				parsed_amount_gained = '+' + Math.floor(amount_gained * 10) / 10;
			}
			parsed_item +=					'<span class="amount_gained">' + parsed_amount_gained + '</span>';
		}
		if(icon != undefined)
		{
			parsed_item +=				'<div class="' + icon + '"></div>';
		}
		if(is_new != undefined && is_new == true)
		{
			parsed_item +=				'<div class="is_new">new</div>';
		}
		parsed_item +=				'</div>';
	}

	return parsed_item;
}