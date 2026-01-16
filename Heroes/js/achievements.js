function check_achievement_data(){
	if(typeof(gamedata['achievements']) == 'undefined')
	{
		gamedata['achievements'] = {};
	}

	if(typeof(gamedata['achievements']['kills']) == 'undefined')
	{
		gamedata['achievements']['kills'] = {};
	}

	if(typeof(gamedata['achievements']['spells']) == 'undefined')
	{
		gamedata['achievements']['spells'] = {};
	}

	if(typeof(gamedata['achievements']['items']) == 'undefined')
	{
		gamedata['achievements']['items'] = {};
	}
}

function update_achievement(type, id, amount){

	check_achievement_data();

	if(typeof(amount) == 'undefined')
	{
		amount = 1;
	}

	if(type == 'kills')
	{

		if(typeof(gamedata['achievements']['kills']['total']) == 'undefined'){
			gamedata['achievements']['kills']['total'] = 0;
		}


		if(typeof(gamedata['achievements']['kills'][id]) == 'undefined'){
			gamedata['achievements']['kills'][id] = 0;
		}


		if(amount > 0 && (typeof(available_units[id]['quest_unit']) == 'undefined' || available_units[id]['quest_unit'] != true))
		{
			/*if(gamedata['achievements']['kills'][id] < 10 && gamedata['achievements']['kills'][id] + amount >= 10)
			{
				show_quest_message('<b>Achievement!</b><br/>10 ' + available_units[id]['name'] + ' kills', true);
				gain_item('coins', 10);
			}*/
			if(gamedata['achievements']['kills'][id] < 100 && gamedata['achievements']['kills'][id] + amount >= 100)
			{
				show_quest_message('<b>Achievement!</b><br/>100 ' + available_units[id]['name'] + ' kills', true);
				gain_item('coins', 10);
			}
			if(gamedata['achievements']['kills'][id] < 1000 && gamedata['achievements']['kills'][id] + amount >= 1000)
			{
				show_quest_message('<b>Achievement!</b><br/>1.000 ' + available_units[id]['name'] + ' kills', true);
				gain_item('coins', 100);
			}


			if(gamedata['achievements']['kills']['total'] < 10 && gamedata['achievements']['kills']['total'] >= 10)
			{
				show_quest_message('<b>Achievement!</b><br/>10 total kills', true);
				gain_item('coins', 10);
			}
			if(gamedata['achievements']['kills']['total'] < 100 && gamedata['achievements']['kills']['total'] >= 100)
			{
				show_quest_message('<b>Achievement!</b><br/>100 total kills', true);
				gain_item('coins', 100);
			}
			if(gamedata['achievements']['kills']['total'] < 1000 && gamedata['achievements']['kills']['total'] >= 1000)
			{
				show_quest_message('<b>Achievement!</b><br/>1.000 total kills', true);
				gain_item('coins', 1000);
			}
			if(gamedata['achievements']['kills']['total'] < 10000 && gamedata['achievements']['kills']['total'] >= 10000)
			{
				show_quest_message('<b>Achievement!</b><br/>10.000 total kills', true);
				gain_item('coins', 10000);
			}
		}


		gamedata['achievements']['kills']['total'] += amount;

		gamedata['achievements']['kills'][id] += amount;
		
	}

	if(type == 'spells')
	{

		if(typeof(gamedata['achievements']['spells']['total']) == 'undefined'){
			gamedata['achievements']['spells']['total'] = 0;
		}


		if(typeof(gamedata['achievements']['spells'][id]) == 'undefined'){
			gamedata['achievements']['spells'][id] = 0;
		}


		if(amount > 0)
		{
			/*if(gamedata['achievements']['spells'][id] < 10 && gamedata['achievements']['spells'][id] + amount >= 10)
			{
				show_quest_message('<b>Achievement!</b><br/>' + unit_abilities[id]['name'] + ' cast 10 times', true);
				gain_item('coins', 10);
			}*/
			if(gamedata['achievements']['spells'][id] < 100 && gamedata['achievements']['spells'][id] + amount >= 100)
			{
				show_quest_message('<b>Achievement!</b><br/>' + unit_abilities[id]['name'] + ' cast 100 times', true);
				gain_item('coins', 10);
			}
			if(gamedata['achievements']['spells'][id] < 1000 && gamedata['achievements']['spells'][id] + amount >= 1000)
			{
				show_quest_message('<b>Achievement!</b><br/>' + unit_abilities[id]['name'] + ' cast 1.000 times', true);
				gain_item('coins', 100);
			}
			if(gamedata['achievements']['spells'][id] < 10000 && gamedata['achievements']['spells'][id] + amount >= 10000)
			{
				show_quest_message('<b>Achievement!</b><br/>' + unit_abilities[id]['name'] + ' cast 10.000 times', true);
				gain_item('coins', 1000);
			}


			if(gamedata['achievements']['spells']['total'] < 100 && gamedata['achievements']['spells']['total'] >= 100)
			{
				show_quest_message('<b>Achievement!</b><br/>100 total kills', true);
				gain_item('coins', 10);
			}
			if(gamedata['achievements']['spells']['total'] < 1000 && gamedata['achievements']['spells']['total'] >= 1000)
			{
				show_quest_message('<b>Achievement!</b><br/>1.000 total kills', true);
				gain_item('coins', 100);
			}
			if(gamedata['achievements']['spells']['total'] < 10000 && gamedata['achievements']['spells']['total'] >= 10000)
			{
				show_quest_message('<b>Achievement!</b><br/>10.000 total kills', true);
				gain_item('coins', 1000);
			}
		}


		gamedata['achievements']['spells']['total'] += amount;

		gamedata['achievements']['spells'][id] += amount;
		
	}

	if(type == 'items' && id != 'coins' && available_items[id]['subtype'] != 'quest')
	{
		//console.log(id);
		if(typeof(gamedata['achievements']['items']['total']) == 'undefined'){
			gamedata['achievements']['items']['total'] = 0;
		}

		if(typeof(gamedata['achievements']['items'][id]) == 'undefined'){
			gamedata['achievements']['items'][id] = 0;
		}

		gamedata['achievements']['items']['total'] += amount;

		gamedata['achievements']['items'][id] += amount;

		if(amount > 0)
		{
			/*if(gamedata['achievements']['items'][id] - amount < 10 && gamedata['achievements']['items'][id] >= 10)
			{
				show_quest_message('<b>Achievement!</b><br/>10 ' + available_items[id]['name'] + ' gained', true);
				gain_item(id, 1);
			}
			if(gamedata['achievements']['items'][id] - amount < 100 && gamedata['achievements']['items'][id] >= 100)
			{
				show_quest_message('<b>Achievement!</b><br/>100 ' + available_items[id]['name'] + ' gained', true);
				gain_item(id, 10);
			}
			if(gamedata['achievements']['items'][id] - amount < 1000 && gamedata['achievements']['items'][id] >= 1000)
			{
				show_quest_message('<b>Achievement!</b><br/>1000 ' + available_items[id]['name'] + ' gained', true);
				gain_item(id, 100);
			}
			if(gamedata['achievements']['items'][id] - amount < 10000 && gamedata['achievements']['items'][id] >= 10000)
			{
				show_quest_message('<b>Achievement!</b><br/>10.000 ' + available_items[id]['name'] + ' gained', true);
				gain_item(id, 1000);
			}*/

			if(gamedata['achievements']['items']['total'] - amount < 1000 && gamedata['achievements']['items']['total']  >= 1000)
			{
				show_quest_message('<b>Achievement!</b><br/>1.000 total items gained', true);
				gain_item('coins', 10);
			}
			if(gamedata['achievements']['items']['total'] - amount < 10000 && gamedata['achievements']['items']['total']  >= 10000)
			{
				show_quest_message('<b>Achievement!</b><br/>10.000 total items gained', true);
				gain_item('coins', 100);
			}
			if(gamedata['achievements']['items']['total'] - amount < 100000 && gamedata['achievements']['items']['total']  >= 100000)
			{
				show_quest_message('<b>Achievement!</b><br/>100.000 total items gained', true);
				gain_item('coins', 1000);
			}
			if(gamedata['achievements']['items']['total'] - amount < 1000000 && gamedata['achievements']['items']['total']  >= 1000000)
			{
				show_quest_message('<b>Achievement!</b><br/>1.000.000 total items gained', true);
				gain_item('coins', 10000);
			}
		}


		
		
	}


}