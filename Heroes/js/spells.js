function show_spells(){
	$('.current_spells').html('');
	for(slot_number = 1;slot_number < 7;slot_number++){
		var found_spell_in_slot = false;
		$.each(gamedata['spells'], function(key, spell){
			if(spell['active'] == slot_number)
			{
				found_spell_in_slot = true;
				//spell['cooldown'] = 0;
				if(typeof(unit_abilities[spell['id']]['can_target_dead']) == 'undefined')
				{
					unit_abilities[spell['id']]['can_target_dead'] = false;
				}

				if(typeof(unit_abilities[spell['id']]['random_target']) == 'undefined')
				{
					unit_abilities[spell['id']]['random_target'] = false;
				}

				var mana_penalty = 1;
				if(spell['level'] > 1)
				{
					//level_factor = Math.sqrt(1 + ((unit['level'] -1) / 10));
					//mana_penalty = (1 + ((spell['level'] -1) / 20));
					mana_penalty = get_level_factor(spell['level']);
				}
				var mana_cost = Math.floor(unit_abilities[spell['id']]['cooldown'] * 10 * mana_penalty);
				if(typeof(unit_abilities[spell['id']]['mana_cost']) != 'undefined')
				{
					mana_cost = Math.floor(unit_abilities[spell['id']]['mana_cost'] * mana_penalty);
				}
				if(unit_abilities[spell['id']]['proc'] != 'basic')
				{
					mana_cost = '-';
				}
				if(mana_cost == 0)
				{
					mana_cost = '';
				}
			//console.log(spell_id);
				$('.current_spells').append('<button class="spell spell_' + spell['id'] + ' active_spell_slot_' + slot_number + '" data-mana-required="' + mana_cost + '" data-can-target-dead="' + unit_abilities[spell['id']]['can_target_dead'] + '" data-random-target="' + unit_abilities[spell['id']]['random_target'] + '" style="background-image:url(images/abilities/' + unit_abilities[spell['id']]['image'] + ')" onclick="cast_spell(\'' + key + '\')"><div class="spell_mana_cost">' + mana_cost + '</div><div class="spell_cooldown"></div><div class="spell_slot_number">' + slot_number + '</div></button>');
			}
		});
		if(found_spell_in_slot == false)
		{
			$('.current_spells').append('<button class="spell empty"></button>');
		}
	}
}

function cast_spell(spell_id){
	var current_spell = unit_abilities[gamedata['spells'][spell_id]['id']];
	var mana_penalty = 1;
	//gamedata['spells'][spell_id]['cooldown'] = current_spell['cooldown'];
	if(gamedata['spells'][spell_id]['level'] > 1)
	{
		//level_factor = Math.sqrt(1 + ((unit['level'] -1) / 10));
		//mana_penalty = (1 + ((gamedata['spells'][spell_id]['level'] -1) / 20));
		mana_penalty = get_level_factor(gamedata['spells'][spell_id]['level']);
	}
	var mana_cost = Math.floor(unit_abilities[spell_id]['cooldown'] * 10 * mana_penalty);
	if(typeof(unit_abilities[spell_id]['mana_cost']) != 'undefined')
	{
		mana_cost = Math.floor(unit_abilities[spell_id]['mana_cost'] * mana_penalty);
	}

	if(player_target['side'] == 'ally')
	{
		var target_side = current_allies;
	}
	else
	{
		var target_side = current_enemies;
	}

	var can_cast = true;
	if(unit_abilities[spell_id]['spell_target'] !== undefined && unit_abilities[spell_id]['spell_target'] !== 'any' && unit_abilities[spell_id]['spell_target'] !== player_target['side'])
	{
		can_cast = false;
	}
	if(current_allies[7]['current_hp'] <= 0 || get_attribute(7, 'allies', 'attack_speed') <= 0 || get_attribute(7, 'allies', 'frozen') !== 0 || get_attribute(7, 'allies', 'petrified') !== 0)
	{
		can_cast = false;
	}
	if(unit_abilities[spell_id]['can_target_dead'] == false && (target_side[player_target['id']] == undefined || target_side[player_target['id']]['current_hp'] <= 0) && unit_abilities[spell_id]['random_target'] == false)
	{
		can_cast = false;
	}
	if(gamedata['mana'] >= (mana_cost) && combat_active > 0 && gamedata['spells'][spell_id]['cooldown'] <= 0 && can_cast == true)
	{
		var level_factor = 1;
		if(gamedata['spells'][spell_id]['level'] > 1)
		{
			//level_factor = Math.sqrt(1 + ((gamedata['spells'][spell_id]['level'] -1) / 10));
			//level_factor = (1 + ((gamedata['spells'][spell_id]['level'] -1) / 10));
			level_factor = get_level_factor(gamedata['spells'][spell_id]['level']);
		}
		//player['level'] = gamedata['spells'][spell_id]['level'];
		
		current_acting_unit = {key:7,unit:7,string:'ally',group:current_allies,buffs:current_allies_buffs};
		if(process_ability(7, current_allies['7'], 'ally', current_allies, spell_id, current_spell, player_target, level_factor) == true)
		{
			gamedata['mana'] -= mana_cost;
			if(typeof(current_spell['spell_cooldown']) != 'undefined')
			{
				gamedata['spells'][spell_id]['cooldown'] = current_spell['spell_cooldown'];
			}
			else
			{
				gamedata['spells'][spell_id]['cooldown'] = current_spell['cooldown'];
			}
			update_achievement('spells', spell_id, 1);
			//console.log(gamedata['spells'][spell_id]['cooldown']);
		}
	}
	
}

function deactivate_spell(spell_id){
	if(typeof(gamedata['spells'][spell_id]) != 'undefined')
	{
		gamedata['spells'][spell_id]['active'] = 0;
	}
	show_all_spells();
	saveToLocalStorage();
}

function activate_spell(spell_id){
	var free_slot = check_empty_spell_slot();
	if(typeof(gamedata['spells'][spell_id]) != 'undefined' && free_slot > 0)
	{
		gamedata['spells'][spell_id]['active'] = free_slot;
	}
	show_all_spells();
	saveToLocalStorage();
}

function gain_spell(spell_id, amount){
	if(typeof(amount) == 'undefined')
	{
		amount = 1;
	}
	var free_slot = check_empty_spell_slot();
	if(typeof(gamedata['spells'][spell_id]) == 'undefined')
	{
		gamedata['spells'][spell_id] = {
			id: 	spell_id,
			level: 	amount,
			active: free_slot,
			cooldown: 0
		}
		show_quest_message('New spell: <b>' + unit_abilities[spell_id]['name'] + '</b>', true);
	}
	else
	{
		if(gamedata['spells'][spell_id]['level'] < amount)
		{
			gamedata['spells'][spell_id]['level'] = amount;
			show_quest_message('Spell level up: <b>' + unit_abilities[spell_id]['name'] + '</b>', true);
		}
	}
	/*var random_x = Math.random() * 60 + 1;
	var random_y = ((loot_counter - ((Math.floor(loot_counter / 5)) * 5)) * 80) + 1;
	//var random_y = Math.random() * 300 + 1;
	$('.main_window').append('<div id="loot_' + loot_counter + '" class="loot" style="background-image:url(images/abilities/' + unit_abilities[spell_id]['image'] + ');margin-right:' + random_x + 'px;margin-top:' + random_y + 'px">' + amount + '</div>')
	var current_loot_id = '#loot_' + loot_counter;
	setTimeout(function(){
		$(current_loot_id).remove();
	},2900);
	loot_counter++;*/

	gamedata['spells'] = sortObj(gamedata['spells']);

	show_spells();
	saveToLocalStorage();
}

function gain_spell_of_level(spell_id, amount){
	if(typeof(amount) == 'undefined')
	{
		amount = 1;
	}
	var gained_spell = false;
	var free_slot = check_empty_spell_slot();
	if(typeof(gamedata['spells'][spell_id]) == 'undefined')
	{
		gamedata['spells'][spell_id] = {
			id: 	spell_id,
			level: 	amount,
			active: free_slot,
			cooldown: 0
		}
		gained_spell = true;
	}
	else
	{
		if(amount > gamedata['spells'][spell_id]['level'])
		{
			gamedata['spells'][spell_id]['level'] = amount;
			gained_spell = true;
		}
	}
	if(gained_spell == true)
	{
		var random_x = Math.random() * 60 + 1;
		var random_y = ((loot_counter - ((Math.floor(loot_counter / 5)) * 5)) * 80) + 1;
		//var random_y = Math.random() * 300 + 1;
		$('.main_window').append('<div id="loot_' + loot_counter + '" class="loot" style="background-image:url(images/abilities/' + unit_abilities[spell_id]['image'] + ');margin-right:' + random_x + 'px;margin-top:' + random_y + 'px">+' + amount + '</div>')
		var current_loot_id = '#loot_' + loot_counter;
		setTimeout(function(){
			$(current_loot_id).remove();
		},2900);
		loot_counter++;
		show_spells();
		saveToLocalStorage();
	}
}

function check_empty_spell_slot(){
	var free_slot = 0;
	for(slot_number = 1;slot_number < 7;slot_number++){
		var slot_is_free = true;
		$.each(gamedata['spells'], function(key, spell){
			if(spell['active'] == slot_number)
			{
				slot_is_free = false;
			}
		});
		if(slot_is_free == true && free_slot == 0)
		{
			free_slot = slot_number;
		}
	}

	return free_slot;
}

function show_spell_details(spell_id){

	var current_spell = unit_abilities[spell_id];

	var mana_penalty = 1;
	if(gamedata['spells'][spell_id] != undefined && gamedata['spells'][spell_id]['level'] > 1)
	{
		//level_factor = Math.sqrt(1 + ((unit['level'] -1) / 10));
		//mana_penalty = (1 + ((current_spell['level'] -1) / 20));
		mana_penalty = get_level_factor(gamedata['spells'][spell_id]['level']);
	}
	var mana_cost = Math.floor(current_spell['cooldown'] * 10 * mana_penalty);
	if(typeof(current_spell['mana_cost']) != 'undefined')
	{
		mana_cost = Math.floor(current_spell['mana_cost'] * mana_penalty);
	}
	$('.spell_details').html('');
	$('.spell_details').append('<b>' + capitalizeFirstLetter(current_spell['name']) + '</b><br/>');
	if(gamedata['spells'][spell_id] != undefined)
	{
		$('.spell_details').append('Level: <span class="stat_details">' + gamedata['spells'][spell_id]['level'] + '</span><br/>');
	}
	$('.spell_details').append('Mana: <span class="stat_details">' + mana_cost + '</span><br/>');
	$('.spell_details').append('Cooldown: <span class="stat_details">' + current_spell['spell_cooldown'] + 's</span><br/>');
	$('.spell_details').append(current_spell['description']);

	$('.details').html('');
	$('.details').append('<b>' + capitalizeFirstLetter(current_spell['name']) + '</b><br/>');
	$('.details').append('Mana: <span class="stat_details">' + mana_cost + '</span><br/>');
	$('.details').append(current_spell['description']);
}

function show_all_spells(){
	$('.active_spells').html('');
	$('.owned_spells').html('');

	for(slot_number = 1;slot_number < 7;slot_number++){
		var found_spell_in_slot = false;
		var spell_content = '';
		$.each(gamedata['spells'], function(key, spell){
			if(spell['active'] == slot_number)
			{
				spell_content += '<div class="item" onclick="deactivate_spell(\'' + key + '\')" onmouseover="show_spell_details(\'' + key + '\')" style="background-image:url(images/abilities/' + unit_abilities[key]['image'] + ')">lvl ' + spell['level'] + '</div>';
				$('.active_spells').append(spell_content);
				found_spell_in_slot = true;
			}
		});
		if(found_spell_in_slot == false)
		{
			$('.active_spells').append('<div class="item"></div>');
		}
	}

	$.each(gamedata['spells'], function(key, spell) {
		var spell_content = '';
		if(spell['active'] == 0)
		{
			spell_content += '<div class="item" onclick="activate_spell(\'' + key + '\')" onmouseover="show_spell_details(\'' + key + '\')" style="background-image:url(images/abilities/' + unit_abilities[key]['image'] + ')">lvl ' + spell['level'] + '</div>';
			$('.owned_spells').append(spell_content);
		}
		else
		{
			spell_content += '<div class="item" onclick="deactivate_spell(\'' + key + '\')" onmouseover="show_spell_details(\'' + key + '\')" style="background-image:url(images/abilities/' + unit_abilities[key]['image'] + ');opacity:0.3">lvl ' + spell['level'] + '</div>';
			$('.owned_spells').append(spell_content);
		}
	});
	
	
}

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key > 48 && key < 59 && combat_active == true) {
       $('.active_spell_slot_' + (key - 48)).click();
   } 
   if(key == 9)
   {
   		find_new_player_target();
   }
}

