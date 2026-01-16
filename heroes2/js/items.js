function check_item(item_id){
	if(item_id != 'coins' && all_items[item_id] != undefined)
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
	if(hide_visible_effects == undefined || hide_visible_effects == false)
	{
		check_busy_quests('items', item_id, amount);
	}
	if(item_id == 'coins')
	{
		gamedata['coins'] += amount;
		if(gamedata['coins'] > gamedata['highest_coins'])
		{
			gamedata['highest_coins'] = gamedata['coins'];
		}
	}
	if(all_items[item_id] != undefined && item_id != 'coins')
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
		if(all_items[item_id]['consumable'] != undefined && all_items[item_id]['consumable'] == true && (hide_visible_effects == undefined || hide_visible_effects == false))
		{
			var allready_equipped = false;
			$.each(gamedata['consumables'], function(consumable_id, consumable_item){
				if(consumable_item == item_id)
				{
					allready_equipped = true;
				}
			});
			if(allready_equipped == false)
			{
				var found_free_slot = false;
				$.each(gamedata['consumables'], function(consumable_id, consumable_item){
					if(found_free_slot == false && consumable_item == false)
					{
						found_free_slot = true;
						gamedata['consumables'][consumable_id] = item_id;
						if($('#content_combat').hasClass('active'))
						{
							place_consumable(consumable_id);
						}
					}
				});
			}
		}
		if(all_items[item_id]['unit'] != undefined && all_items[item_id]['unit'] == true && (hide_visible_effects == undefined || hide_visible_effects == false))
		{
			var found_free_slot = false;
			$.each(gamedata['equipped_units'], function(consumable_id, consumable_item){
				if(gamedata['inventory'][item_id] > 0 && consumable_item == false && found_free_slot == false)
				{
					found_free_slot = true;
					gamedata['equipped_units'][consumable_id] = item_id;
					gamedata['inventory'][item_id] -= 1;
					show_game_message(capitalizeFirstLetter(all_items[item_id]['name']) + ' auto-equipped', 'rgba(200,200,200,1)');
				}
			});
		}
		if($('#content_combat').hasClass('active'))
		{
			$.each(gamedata['consumables'], function(consumable_slot, consumable_id){
				if(consumable_id == item_id)
				{
					$('.euipped_item.col_' + consumable_slot + ' .consumables_amount').html(get_item_owned_amount(item_id));
				}
			});
		}
		if(gamedata['inventory'][item_id] > 0 && all_items[item_id]['recipe'] != undefined)
		{
			learn_recipe(item_id);
		}
		if(all_items[item_id]['max_owned'] != undefined && gamedata['inventory'][item_id] > all_items[item_id]['max_owned'])
		{
			gamedata['inventory'][item_id] = all_items[item_id]['max_owned'];
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
	if(item_id != 'coins' && all_items[item_id] != undefined)
	{
		if(gamedata['inventory'][item_id] == undefined)
		{
			return 0;
		}

		return gamedata['inventory'][item_id];
	}
	if(item_id == 'coins')
	{
		if(gamedata['inventory']['coins'] != undefined)
		{
			delete gamedata['inventory']['coins'];
		}
		return gamedata['coins'];
	}
	return 0;
}

function parse_item(item_id, forced_amount, amount_gained, icon){
	var owned_amount = get_item_owned_amount(item_id);
	var parsed_item = '';
	if(all_items[item_id] != undefined)
	{
		var rarity = 1;
		var type = '';

		if(all_items[item_id]['rarity'] != undefined){rarity = all_items[item_id]['rarity'];}
		if(all_items[item_id]['type'] != undefined){type = all_items[item_id]['type'];}
		if(all_items[item_id]['recipe'] == undefined)
		{
			parsed_item +=				'<div class="item item_container_' + item_id + ' item_type_' + type + ' rarity_' + rarity + '" style="background-image:url(images/' + all_items[item_id]['image'] + ');">';
		}
		else
		{
			parsed_item +=				'<div class="item item_container_' + item_id + ' rarity_' + rarity + '" style="background-image:url(images/old-953394_640.jpg);">';
			parsed_item +=				'<div class="item_sub_image" style="background-image:url(images/' + all_items[item_id]['image'] + ');"></div>';
		}
		parsed_item +=					'<div class="bg" ></div>';
		parsed_item +=					'<span class="item_name">' + capitalizeFirstLetter(all_items[item_id]['name']) + '</span>';
		if(type != 'ability')
		{
			if(forced_amount == undefined)
			{
				parsed_item +=					'<span class="owned_amount item_' + item_id + '">' + nFormatter(owned_amount, 3) + '</span>';
			}
			else
			{
				if(forced_amount != '')
				{
					parsed_item +=					'<span class="owned_amount">' + nFormatter(forced_amount, 3) + '</span>';
				}
			}
		}
		if(amount_gained != undefined)
		{
			var parsed_amount_gained = '';

			if(typeof(amount_gained) == 'number' && amount_gained < 1)
			{
				parsed_amount_gained = Math.floor(amount_gained * 100) +'%';
			}
			if(typeof(amount_gained) == 'number' && amount_gained < 0.01)
			{
				parsed_amount_gained = '<1%';
			}
			if(typeof(amount_gained) == 'number' && amount_gained >= 1)
			{
				parsed_amount_gained = '+' + Math.floor(amount_gained * 10) / 10;
			}
			if(typeof(amount_gained) == 'string')
			{
				parsed_amount_gained += amount_gained;
			}
			parsed_item +=					'<span class="amount_gained">' + parsed_amount_gained + '</span>';
		}
		if(icon != undefined)
		{
			parsed_item +=				'<div class="' + icon + '"></div>';
		}
		parsed_item +=				'</div>';
	}

	return parsed_item;
}

function show_item_details(){
	$('.item_details_container').html('');
	if(all_items[viewing_item] == undefined)
	{
		show_content();
	}
	else
	{
		var item_id = viewing_item;
		var item = all_items[viewing_item];
		var parsed_item_details = '';
		var parsed_item = parse_item(item_id);

		parsed_item_details += 	'<div class="item_details_image" onclick="show_content(\'inventory\')">' + parsed_item + '</div>';
		parsed_item_details += 	'<div class="item_details_text">';
		parsed_item_details += 		'<div class="item_details_name">' + capitalizeFirstLetter(item['name']) + '</div>';
		if(item['description'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_description">' + capitalizeFirstLetter(item['description']) + '</div>';
		}
		if(item['stats'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_description">';
			$.each(item['stats'], function(stat_id, stat_amount){
				var temp_name = stat_names[stat_id];
				parsed_item_details += temp_name.replace('{STAT}', stat_amount) + '<br/>';
			});
			parsed_item_details += 	'</div>';
		}
		parsed_item_details += 	'</div>';

		if(item['consumable'] != undefined || item['is_ability'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_consumables_container">';
			parsed_item_details += 		'<div class="consumables_title">Consumables</div>';
			$.each(gamedata['consumables'], function(consumable_id, consumable_item){
				parsed_item_details += 	'<div class="item_details_consumable" onclick="equip_consumable(\'' + item_id + '\',' + consumable_id + ')">';
				if(consumable_item != false)
				{
					parsed_item_details += 	parse_item(consumable_item);
				}
				else
				{
					parsed_item_details += 	'';
				}
				parsed_item_details += 	'</div>';
			});
			parsed_item_details += 		'<div class="consumables_description">Click on a slot to equip this item.</div>';
			parsed_item_details += 	'</div>';
		}
		if(item['unit'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_consumables_container">';
			parsed_item_details += 		'<div class="consumables_title">Units</div>';
			parsed_item_details += 		'<div class="equip_units_container">';
			$.each(gamedata['equipped_units'], function(equipped_unit_id, equipped_unit){
				parsed_item_details += 	'<div class="item_details_consumable" onclick="equip_unit(\'' + item_id + '\',' + equipped_unit_id + ')">';
				if(equipped_unit != false)
				{
					parsed_item_details += 	parse_item(equipped_unit, '');
				}
				else
				{
					parsed_item_details += 	'';
				}
				parsed_item_details += 	'</div>';
			});
			parsed_item_details += 	'</div>';
			parsed_item_details += 		'<div class="consumables_description">Click on a slot to equip this unit.</div>';
			parsed_item_details += 	'</div>';
		}
		if(item['gear'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_consumables_container">';
			parsed_item_details += 		'<div class="consumables_title">Gear</div>';
			parsed_item_details += 		'<div class="equip_gear_container">';
			$.each(gamedata['equipped_gear'], function(equipped_gear_id, equipped_gear){
				parsed_item_details += 	'<div class="item_details_consumable">';
				if(equipped_gear != false)
				{
					parsed_item_details += 	'<span onclick="unequip_gear(\'' + equipped_gear + '\')">' + parse_item(equipped_gear, '') + '</span>';
				}
				else
				{
					parsed_item_details += 	'';
				}
				parsed_item_details += 	'</div>';
			});
			if(gamedata['inventory'][item_id] > 0)
			{
				parsed_item_details += 	'<button class="equip_gear_button" onclick="equip_gear(\'' + item_id + '\')">Equip</button>';
			}
			parsed_item_details += 	'</div>';
			
			//parsed_item_details += 		'<div class="consumables_description">Click on a slot to equip this gear.</div>';
			parsed_item_details += 	'</div>';
		}
		if(item['recipe'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_consumables_container">';
			if(gamedata['known_recipes'][item['recipe']] == undefined)
			{
				parsed_item_details += 		'<div class="consumables_title">You do not know this recipe</div>';
				parsed_item_details += 		'<button class="equip_gear_button" onclick="learn_recipe(\'' + item_id + '\')">Learn</button>';
			}
			else
			{
				parsed_item_details += 		'<div class="consumables_title">You allready know this recipe</div>';
			}
			parsed_item_details += 	'</div>';
		}
		/*if(item['is_ability'] != undefined)
		{
			parsed_item_details += 	'<div class="item_details_consumables_container">';
			parsed_item_details += 		'<div class="consumables_title">Abilities</div>';
			$.each(gamedata['equipped_abilities'], function(consumable_id, consumable_item){
				parsed_item_details += 	'<div class="item_details_consumable" onclick="equip_ability(\'' + item_id + '\',' + consumable_id + ')">';
				if(consumable_item != false)
				{
					parsed_item_details += 	parse_item(consumable_item,'');
				}
				else
				{
					parsed_item_details += 	'';
				}
				parsed_item_details += 	'</div>';
			});
			parsed_item_details += 		'<div class="consumables_description">Click on a slot to equip this ability.</div>';
			parsed_item_details += 	'</div>';
		}*/

		var item_owned = get_item_owned_amount(item_id);
		if(item['value'] != undefined && item['value'] > 0 && item_owned > 0)
		{
			
			parsed_item_details += 	'<div class="item_details_consumables_container">';
			parsed_item_details += 		'<div class="consumables_title">Sell</div>';
			parsed_item_details += 		'<div class="consumables_description coins_text">Coins: ' + nFormatter(get_item_owned_amount('coins'),3) + '</div>';
			parsed_item_details += 		'<div class="consumables_description">Value: ' + item['value'] + '<br/><br/></div>';
			var temp_sale_amount = 1;
			for (var i = 0; i < 10; i++) {
				if(item_owned >= temp_sale_amount)
				{
					parsed_item_details += 		'<button class="gold inline_button" onclick="sell_item(\'' + item_id + '\',' + temp_sale_amount + ')">Sell ' + nFormatter(temp_sale_amount,0) + '</button>';
				}
				temp_sale_amount *= 10;
			}
			parsed_item_details += 	'</div>';
		}

		$('.item_details_container').html(parsed_item_details);
	}
}

function sell_item(item_id, item_amount){
	var item = all_items[item_id];
	if(gamedata['inventory'][item_id] >= item_amount && item['value'] != undefined && item['value'] > 0)
	{
		gain_item('coins',item['value'] * item_amount);
		gain_item(item_id, item_amount * -1);
		show_content(current_content);
		play_sound_group('money');
		parsed_amount_gained = parse_floating_text(item['value'] * item_amount, 'rgba(255,255,150,1)');
		$('.item_details_container').append(parsed_amount_gained);
	}
}

function equip_consumable(item_id, consumable_slot){
	$.each(gamedata['consumables'], function(consumable_id, consumable_item){
		if(consumable_item == item_id && consumable_id != consumable_slot)
		{
			gamedata['consumables'][consumable_id] = false;
		}
	});

	if(gamedata['consumables'][consumable_slot] == item_id)
	{
		gamedata['consumables'][consumable_slot] = false;
	}
	else
	{
		gamedata['consumables'][consumable_slot] = item_id;
	}
	saveToLocalStorage();
	show_item_details();
}

function equip_unit(item_id, consumable_slot){
	/*$.each(gamedata['equipped_units'], function(consumable_id, consumable_item){
		if(consumable_item == item_id && consumable_id != consumable_slot)
		{
			gamedata['equipped_units'][consumable_id] = false;
		}
	});*/
	if(gamedata['equipped_units'][consumable_slot] == item_id)
	{
		gain_item(item_id, 1, true);
		gamedata['equipped_units'][consumable_slot] = false;
	}
	else
	{
		if(gamedata['equipped_units'][consumable_slot] != false && gamedata['inventory'][item_id] > 0)
		{
			gain_item(gamedata['equipped_units'][consumable_slot], 1, true);
		}
		if(gamedata['inventory'][item_id] > 0)
		{
			gain_item(item_id, -1, true);
			gamedata['equipped_units'][consumable_slot] = item_id;
		}
	}
	saveToLocalStorage();
	show_item_details();
}

function equip_gear(item_id){
	if(all_items[item_id] != undefined && all_items[item_id]['gear'] != undefined)
	{
		var current_gear = all_items[item_id];
		if(gamedata['inventory'][item_id] > 0)
		{
			gain_item(item_id, -1, true);
			$.each(current_gear['slots'], function(slot_id, count_stats){
				if(gamedata['equipped_gear'][slot_id] != false)
				{
					unequip_gear(gamedata['equipped_gear'][slot_id]);
				}
					
				gamedata['equipped_gear'][slot_id] = item_id;
				
			});
		}
	}
	saveToLocalStorage();
	show_item_details();
}

function unequip_gear(item_id){
	var gained_an_item = false;
	$.each(gamedata['equipped_gear'], function(slot_id, gear_id){
		if(gear_id == item_id)
		{
			if(gained_an_item == false)
			{
				gained_an_item = true;
				gain_item(gear_id, 1, true);
			}
			gamedata['equipped_gear'][slot_id] = false;
		}
	});
	saveToLocalStorage();
	show_item_details();
}

function equip_ability(item_id, consumable_slot){
	$.each(gamedata['equipped_abilities'], function(consumable_id, consumable_item){
		if(consumable_item == item_id && consumable_id != consumable_slot)
		{
			gamedata['equipped_abilities'][consumable_id] = false;
			gain_item(item_id, 1, false);
		}
	});

	if(gamedata['equipped_abilities'][consumable_slot] == item_id)
	{
		gamedata['equipped_abilities'][consumable_slot] = false;
		gain_item(item_id, 1, false);
	}
	else
	{
		if(gamedata['equipped_abilities'][consumable_slot] != false)
		{
			gain_item(gamedata['equipped_abilities'][consumable_slot], 1, false);
		}
		gamedata['equipped_abilities'][consumable_slot] = item_id;
		gain_item(item_id, -1, false);
	}
	saveToLocalStorage();
	show_item_details();
}

function learn_recipe(item_id){
	if(all_items[item_id] != undefined && all_items[item_id]['recipe'] != undefined && all_recipes[all_items[item_id]['recipe']] != undefined && gamedata['inventory'][item_id] > 0 && gamedata['known_recipes'][all_items[item_id]['recipe']] == undefined)
	{
		gamedata['known_recipes'][all_items[item_id]['recipe']] = true;
		gain_item(item_id, -1, true);
		saveToLocalStorage();
		if($('#content_inventory').hasClass('active'))
		{
			show_content('inventory');
		}
	}
}